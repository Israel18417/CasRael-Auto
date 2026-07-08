// Admin Module for Automobile Shopping Platform

// Credentials
const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "password123"
};

// Database utility functions
function getDB() {
  const data = localStorage.getItem("automobile_platform_data");
  return data ? JSON.parse(data) : { brands: [], models: [] };
}

function saveDB(db) {
  localStorage.setItem("automobile_platform_data", JSON.stringify(db));
  // Dispatch dynamic event to notify visitor view to refresh
  window.dispatchEvent(new Event("databaseUpdated"));
}

// Authentication Helpers
function isAdminLoggedIn() {
  return localStorage.getItem("automobile_admin_session") === "true";
}

function authenticateAdmin(username, password) {
  if (
    username.trim().toLowerCase() === ADMIN_CREDENTIALS.username &&
    password === ADMIN_CREDENTIALS.password
  ) {
    localStorage.setItem("automobile_admin_session", "true");
    return true;
  }
  return false;
}

function terminateAdminSession() {
  localStorage.removeItem("automobile_admin_session");
  window.dispatchEvent(new Event("databaseUpdated"));
}

// Stats Calculation
function getAdminStats() {
  const db = getDB();
  const totalBrands = db.brands.length;
  const totalModels = db.models.length;
  
  const avgPrice = totalModels > 0 
    ? Math.round(db.models.reduce((sum, m) => sum + Number(m.price), 0) / totalModels)
    : 0;

  return { totalBrands, totalModels, avgPrice };
}

// CRUD Operations: Brands
function dbAddBrand(name, logoSvg, description) {
  const db = getDB();
  const id = name.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-");
  
  if (db.brands.some(b => b.id === id)) {
    throw new Error("A brand with this name already exists.");
  }

  const newBrand = {
    id,
    name: name.trim(),
    logo: logoSvg.trim() || `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="2"/><text x="50" y="55" font-size="20" text-anchor="middle" fill="currentColor">${name.trim().substring(0,2).toUpperCase()}</text></svg>`,
    description: description.trim()
  };

  db.brands.push(newBrand);
  saveDB(db);
  return newBrand;
}

function dbUpdateBrand(id, name, logoSvg, description) {
  const db = getDB();
  const index = db.brands.findIndex(b => b.id === id);
  if (index === -1) throw new Error("Brand not found.");

  db.brands[index] = {
    ...db.brands[index],
    name: name.trim(),
    logo: logoSvg.trim(),
    description: description.trim()
  };

  saveDB(db);
  return db.brands[index];
}

function dbDeleteBrand(id) {
  const db = getDB();
  db.brands = db.brands.filter(b => b.id !== id);
  // Cascading delete: Remove models associated with this brand
  db.models = db.models.filter(m => m.brandId !== id);
  saveDB(db);
}

// CRUD Operations: Models
function dbAddModel(modelData) {
  const db = getDB();
  
  // Create safe ID
  const baseId = `${modelData.brandId}-${modelData.name.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  let id = baseId;
  let counter = 1;
  while (db.models.some(m => m.id === id)) {
    id = `${baseId}-${counter}`;
    counter++;
  }

  const newModel = {
    id,
    brandId: modelData.brandId,
    name: modelData.name.trim(),
    price: Number(modelData.price) || 0,
    category: modelData.category.trim() || "Petrol",
    image: modelData.image.trim() || "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
    hp: modelData.hp.trim() || "N/A",
    range: modelData.range.trim() || "N/A",
    transmission: modelData.transmission.trim() || "Automatic",
    acceleration: modelData.acceleration.trim() || "N/A",
    topSpeed: modelData.topSpeed.trim() || "N/A",
    description: modelData.description.trim(),
    features: Array.isArray(modelData.features) ? modelData.features : []
  };

  db.models.push(newModel);
  saveDB(db);
  return newModel;
}

function dbUpdateModel(id, modelData) {
  const db = getDB();
  const index = db.models.findIndex(m => m.id === id);
  if (index === -1) throw new Error("Model not found.");

  db.models[index] = {
    ...db.models[index],
    brandId: modelData.brandId,
    name: modelData.name.trim(),
    price: Number(modelData.price) || 0,
    category: modelData.category.trim() || "Petrol",
    image: modelData.image.trim() || db.models[index].image,
    hp: modelData.hp.trim() || "N/A",
    range: modelData.range.trim() || "N/A",
    transmission: modelData.transmission.trim() || "Automatic",
    acceleration: modelData.acceleration.trim() || "N/A",
    topSpeed: modelData.topSpeed.trim() || "N/A",
    description: modelData.description.trim(),
    features: Array.isArray(modelData.features) ? modelData.features : []
  };

  saveDB(db);
  return db.models[index];
}

function dbDeleteModel(id) {
  const db = getDB();
  db.models = db.models.filter(m => m.id !== id);
  saveDB(db);
}

// Global hook up for state
window.AdminAPI = {
  getDB,
  saveDB,
  isAdminLoggedIn,
  authenticateAdmin,
  terminateAdminSession,
  getAdminStats,
  addBrand: dbAddBrand,
  updateBrand: dbUpdateBrand,
  deleteBrand: dbDeleteBrand,
  addModel: dbAddModel,
  updateModel: dbUpdateModel,
  deleteModel: dbDeleteModel
};
