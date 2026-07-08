// CasRael Automobiles - Admin Portal View Controller

document.addEventListener("DOMContentLoaded", () => {
  // Admin State
  const state = {
    adminActiveTab: "brands", // 'brands' or 'models'
    editingBrandId: null,
    editingModelId: null,
    
    // Uploaded assets in base64 format during creation/edition
    selectedBrandLogoBase64: "",
    selectedModelImagesBase64: []
  };

  // DOM Elements Cache
  const els = {
    navAdminLogout: document.getElementById("nav-admin-logout"),
    loginView: document.getElementById("login-view"),
    adminView: document.getElementById("admin-view"),
    toast: document.getElementById("toast"),
    
    // Login
    loginForm: document.getElementById("login-form"),
    
    // Stats
    statBrands: document.getElementById("stat-brands"),
    statModels: document.getElementById("stat-models"),
    statAvgPrice: document.getElementById("stat-avg-price"),
    
    // Panels & Lists
    adminBrandsList: document.getElementById("admin-brands-list"),
    adminModelsList: document.getElementById("admin-models-list"),
    adminTabBrands: document.getElementById("admin-tab-brands"),
    adminTabModels: document.getElementById("admin-tab-models"),
    adminModelFilter: document.getElementById("admin-model-filter"),
    
    // Modals
    brandModal: document.getElementById("brand-modal"),
    modelModal: document.getElementById("model-modal"),
    
    // Inputs (file selectors and previews)
    brandFormLogoFile: document.getElementById("brand-form-logo-file"),
    brandFormLogoPreview: document.getElementById("brand-form-logo-preview"),
    modelFormImagesFile: document.getElementById("model-form-images-file"),
    modelFormImagesPreview: document.getElementById("model-form-images-preview")
  };

  // Formal Notifications
  function showToast(message, type = "success") {
    els.toast.textContent = message;
    els.toast.className = `toast show ${type}`;
    setTimeout(() => {
      els.toast.classList.remove("show");
    }, 4000);
  }

  // Routing checks
  function checkAuth() {
    const loggedIn = window.AdminAPI.isAdminLoggedIn();
    
    if (loggedIn) {
      els.loginView.style.display = "none";
      els.adminView.style.display = "block";
      els.navAdminLogout.style.display = "flex";
      renderAdminDashboard();
    } else {
      els.loginView.style.display = "flex";
      els.adminView.style.display = "none";
      els.navAdminLogout.style.display = "none";
      closeAllModals();
    }
  }

  // --- Modals Management ---

  function closeAllModals() {
    els.brandModal.classList.remove("open");
    els.modelModal.classList.remove("open");
  }

  document.querySelectorAll(".modal-close-btn").forEach(btn => {
    btn.addEventListener("click", closeAllModals);
  });
  
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeAllModals();
    });
  });

  // --- Dashboard Statistics and Lists ---

  function renderAdminDashboard() {
    const stats = window.AdminAPI.getAdminStats();
    els.statBrands.textContent = stats.totalBrands;
    els.statModels.textContent = stats.totalModels;
    els.statAvgPrice.textContent = `₦${stats.avgPrice.toLocaleString()}`;
    
    renderAdminBrandsList();
    if (state.adminActiveTab === "models") {
      populateAdminModelBrandFilter();
      renderAdminModelsList();
    }
  }

  function renderAdminBrandsList() {
    const db = window.AdminAPI.getDB();
    els.adminBrandsList.innerHTML = "";
    
    if (db.brands.length === 0) {
      els.adminBrandsList.innerHTML = `
        <div class="empty-state">
          <p>Registry empty. Register a represented marque to begin.</p>
        </div>
      `;
      return;
    }
    
    db.brands.forEach(brand => {
      const modelsCount = db.models.filter(m => m.brandId === brand.id).length;
      
      const isSvg = brand.logo.trim().startsWith("<svg");
      const logoHTML = isSvg 
        ? brand.logo 
        : `<img src="${brand.logo}" alt="${brand.name} logo" onerror="this.style.display='none'">`;
      
      const row = document.createElement("div");
      row.className = "list-item";
      row.innerHTML = `
        <div class="list-item-main">
          <div class="list-item-logo">${logoHTML}</div>
          <div class="list-item-info">
            <span class="list-item-title">${brand.name}</span>
            <span class="list-item-meta">${modelsCount} ${modelsCount === 1 ? 'holding' : 'holdings'} listed</span>
          </div>
        </div>
        <div class="list-item-actions">
          <button class="text-action-btn edit-brand-btn">Edit</button>
          <button class="text-action-btn text-action-btn-danger delete-brand-btn">Remove</button>
        </div>
      `;
      
      row.querySelector(".edit-brand-btn").addEventListener("click", () => {
        openBrandModal(brand);
      });
      
      row.querySelector(".delete-brand-btn").addEventListener("click", () => {
        if (confirm(`Remove ${brand.name} from marque registry? This cascade deletes all active listings under this brand.`)) {
          window.AdminAPI.deleteBrand(brand.id);
          showToast(`Marque "${brand.name}" removed.`, "success");
          renderAdminDashboard();
        }
      });
      
      els.adminBrandsList.appendChild(row);
    });
  }

  function renderAdminModelsList() {
    const db = window.AdminAPI.getDB();
    const filterBrandId = els.adminModelFilter.value;
    
    els.adminModelsList.innerHTML = "";
    
    let models = db.models;
    if (filterBrandId !== "all") {
      models = models.filter(m => m.brandId === filterBrandId);
    }
    
    if (models.length === 0) {
      els.adminModelsList.innerHTML = `
        <div class="empty-state">
          <p>No listings cataloged under current parameters.</p>
        </div>
      `;
      return;
    }
    
    models.forEach(model => {
      const brand = db.brands.find(b => b.id === model.brandId);
      
      // Backwards compatibility for single image
      const displayImg = (model.images && model.images[0]) || model.image || "";
      
      const row = document.createElement("div");
      row.className = "list-item";
      row.innerHTML = `
        <div class="list-item-main">
          <img class="list-item-thumb" src="${displayImg}" alt="${model.name}" onerror="this.src='https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80'">
          <div class="list-item-info">
            <span class="list-item-title">${model.name}</span>
            <span class="list-item-meta">${brand ? brand.name : "Marque Unassigned"} | MSRP ₦${model.price.toLocaleString()}</span>
          </div>
        </div>
        <div class="list-item-actions">
          <button class="text-action-btn edit-model-btn">Edit</button>
          <button class="text-action-btn text-action-btn-danger delete-model-btn">Remove</button>
        </div>
      `;
      
      row.querySelector(".edit-model-btn").addEventListener("click", () => {
        openModelModal(model);
      });
      
      row.querySelector(".delete-model-btn").addEventListener("click", () => {
        if (confirm(`Remove listing designation "${model.name}" from active portfolio inventory?`)) {
          window.AdminAPI.deleteModel(model.id);
          showToast(`Listing "${model.name}" removed.`, "success");
          renderAdminDashboard();
        }
      });
      
      els.adminModelsList.appendChild(row);
    });
  }

  function populateAdminModelBrandFilter() {
    const db = window.AdminAPI.getDB();
    const currentFilterVal = els.adminModelFilter.value || "all";
    
    els.adminModelFilter.innerHTML = '<option value="all">All Marques</option>';
    db.brands.forEach(b => {
      const opt = document.createElement("option");
      opt.value = b.id;
      opt.textContent = b.name;
      els.adminModelFilter.appendChild(opt);
    });
    
    els.adminModelFilter.value = currentFilterVal;
  }

  // --- Tab Selection Events ---

  els.adminTabBrands.addEventListener("click", () => {
    state.adminActiveTab = "brands";
    els.adminTabBrands.classList.add("active");
    els.adminTabModels.classList.remove("active");
    document.getElementById("admin-brands-panel").style.display = "block";
    document.getElementById("admin-models-panel").style.display = "none";
  });

  els.adminTabModels.addEventListener("click", () => {
    state.adminActiveTab = "models";
    els.adminTabModels.classList.add("active");
    els.adminTabBrands.classList.remove("active");
    document.getElementById("admin-brands-panel").style.display = "none";
    document.getElementById("admin-models-panel").style.display = "block";
    populateAdminModelBrandFilter();
    renderAdminModelsList();
  });

  els.adminModelFilter.addEventListener("change", () => {
    renderAdminModelsList();
  });

  // --- Brand file upload handlers ---

  els.brandFormLogoFile.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      state.selectedBrandLogoBase64 = event.target.result;
      
      // Update preview
      els.brandFormLogoPreview.innerHTML = `<img src="${state.selectedBrandLogoBase64}" style="max-height:60px; object-fit:contain;">`;
      els.brandFormLogoPreview.style.display = "block";
    };
    reader.readAsDataURL(file);
  });

  // --- Brand CRUD Modal Actions ---

  document.getElementById("btn-add-brand").addEventListener("click", () => {
    openBrandModal(null);
  });

  function openBrandModal(brand = null) {
    state.editingBrandId = brand ? brand.id : null;
    
    const titleEl = document.getElementById("brand-modal-title");
    const nameInput = document.getElementById("brand-form-name");
    const descInput = document.getElementById("brand-form-desc");
    
    els.brandFormLogoFile.value = "";
    
    if (brand) {
      titleEl.textContent = "Modify Marque Parameters";
      nameInput.value = brand.name;
      descInput.value = brand.description;
      state.selectedBrandLogoBase64 = brand.logo;
      
      const isSvg = brand.logo.trim().startsWith("<svg");
      els.brandFormLogoPreview.innerHTML = isSvg 
        ? brand.logo 
        : `<img src="${brand.logo}" style="max-height:60px; object-fit:contain;">`;
      els.brandFormLogoPreview.style.display = "block";
    } else {
      titleEl.textContent = "Register Marque";
      nameInput.value = "";
      descInput.value = "";
      state.selectedBrandLogoBase64 = "";
      els.brandFormLogoPreview.style.display = "none";
      els.brandFormLogoPreview.innerHTML = "";
    }
    
    els.brandModal.classList.add("open");
  }

  const brandForm = document.getElementById("brand-form");
  brandForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("brand-form-name").value;
    const desc = document.getElementById("brand-form-desc").value;
    
    if (!state.selectedBrandLogoBase64) {
      showToast("Please upload a logo file for the marque.", "error");
      return;
    }
    
    try {
      if (state.editingBrandId) {
        window.AdminAPI.updateBrand(state.editingBrandId, name, state.selectedBrandLogoBase64, desc);
        showToast("Marque parameters successfully modified.", "success");
      } else {
        window.AdminAPI.addBrand(name, state.selectedBrandLogoBase64, desc);
        showToast("New marque added to registry database.", "success");
      }
      closeAllModals();
      renderAdminDashboard();
    } catch (err) {
      showToast(err.message, "error");
    }
  });

  // --- Model file upload handlers ---

  els.modelFormImagesFile.addEventListener("change", (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    let loadedCount = 0;
    
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        state.selectedModelImagesBase64.push(event.target.result);
        loadedCount++;
        if (loadedCount === files.length) {
          renderModelImagesPreview();
        }
      };
      reader.readAsDataURL(file);
    });
    
    // Clear input so same files can be reselected
    els.modelFormImagesFile.value = "";
  });

  function renderModelImagesPreview() {
    els.modelFormImagesPreview.innerHTML = "";
    
    if (state.selectedModelImagesBase64.length === 0) {
      els.modelFormImagesPreview.innerHTML = `<span style="color: var(--text-muted); font-size: 0.8rem;">No images uploaded.</span>`;
      return;
    }
    
    state.selectedModelImagesBase64.forEach((base64, index) => {
      const item = document.createElement("div");
      item.className = "admin-thumb-preview-item";
      item.innerHTML = `
        <img src="${base64}">
        <button type="button" class="remove-btn" data-index="${index}">×</button>
      `;
      
      item.querySelector(".remove-btn").addEventListener("click", () => {
        state.selectedModelImagesBase64.splice(index, 1);
        renderModelImagesPreview();
      });
      
      els.modelFormImagesPreview.appendChild(item);
    });
  }

  // --- Model CRUD Modal Actions ---

  document.getElementById("btn-add-model").addEventListener("click", () => {
    openModelModal(null);
  });

  function openModelModal(model = null) {
    state.editingModelId = model ? model.id : null;
    
    const db = window.AdminAPI.getDB();
    const brandSelect = document.getElementById("model-form-brand");
    
    brandSelect.innerHTML = "";
    if (db.brands.length === 0) {
      showToast("Register a marque prior to listing vehicle models.", "error");
      return;
    }
    
    db.brands.forEach(b => {
      const opt = document.createElement("option");
      opt.value = b.id;
      opt.textContent = b.name;
      brandSelect.appendChild(opt);
    });

    const titleEl = document.getElementById("model-modal-title");
    const nameInput = document.getElementById("model-form-name");
    const priceInput = document.getElementById("model-form-price");
    const catInput = document.getElementById("model-form-category");
    const hpInput = document.getElementById("model-form-hp");
    const rangeInput = document.getElementById("model-form-range");
    const transInput = document.getElementById("model-form-transmission");
    const accInput = document.getElementById("model-form-acceleration");
    const speedInput = document.getElementById("model-form-topspeed");
    const descInput = document.getElementById("model-form-desc");
    const featInput = document.getElementById("model-form-features");
    
    els.modelFormImagesFile.value = "";
    
    if (model) {
      titleEl.textContent = "Modify Listing Specifications";
      brandSelect.value = model.brandId;
      nameInput.value = model.name;
      priceInput.value = model.price;
      catInput.value = model.category;
      hpInput.value = model.hp;
      rangeInput.value = model.range;
      transInput.value = model.transmission;
      accInput.value = model.acceleration;
      speedInput.value = model.topSpeed;
      descInput.value = model.description;
      featInput.value = model.features ? model.features.join(", ") : "";
      
      // Load current images
      state.selectedModelImagesBase64 = model.images 
        ? [...model.images] 
        : (model.image ? [model.image] : []);
    } else {
      titleEl.textContent = "Register Vehicle Listing";
      brandSelect.selectedIndex = 0;
      nameInput.value = "";
      priceInput.value = "";
      catInput.value = "Combustion / Sedan";
      hpInput.value = "";
      rangeInput.value = "";
      transInput.value = "Automatic";
      accInput.value = "";
      speedInput.value = "";
      descInput.value = "";
      featInput.value = "";
      state.selectedModelImagesBase64 = [];
    }
    
    renderModelImagesPreview();
    els.modelModal.classList.add("open");
  }

  const modelForm = document.getElementById("model-form");
  modelForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const brandId = document.getElementById("model-form-brand").value;
    const name = document.getElementById("model-form-name").value;
    const price = document.getElementById("model-form-price").value;
    const category = document.getElementById("model-form-category").value;
    const hp = document.getElementById("model-form-hp").value;
    const range = document.getElementById("model-form-range").value;
    const transmission = document.getElementById("model-form-transmission").value;
    const acceleration = document.getElementById("model-form-acceleration").value;
    const topSpeed = document.getElementById("model-form-topspeed").value;
    const description = document.getElementById("model-form-desc").value;
    const featuresRaw = document.getElementById("model-form-features").value;
    
    if (state.selectedModelImagesBase64.length === 0) {
      showToast("Please upload at least one vehicle image.", "error");
      return;
    }
    
    const features = featuresRaw 
      ? featuresRaw.split(",").map(f => f.trim()).filter(f => f.length > 0)
      : [];

    const modelPayload = {
      brandId,
      name,
      price,
      category,
      hp,
      range,
      transmission,
      acceleration,
      topSpeed,
      description,
      features,
      // Store array of images
      images: state.selectedModelImagesBase64,
      // For legacy display compatibility (holds first image)
      image: state.selectedModelImagesBase64[0] || ""
    };

    try {
      if (state.editingModelId) {
        window.AdminAPI.updateModel(state.editingModelId, modelPayload);
        showToast("Listing specifications updated.", "success");
      } else {
        window.AdminAPI.addModel(modelPayload);
        showToast("New vehicle listing registered.", "success");
      }
      closeAllModals();
      renderAdminDashboard();
    } catch (err) {
      showToast(err.message, "error");
    }
  });

  // --- Authentication Submission ---

  els.loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = document.getElementById("login-username").value;
    const pass = document.getElementById("login-password").value;
    
    if (window.AdminAPI.authenticateAdmin(user, pass)) {
      showToast("Access authorized. Accessing administration dashboard.", "success");
      els.loginForm.reset();
      checkAuth();
    } else {
      showToast("Credentials verification failed. Access denied.", "error");
    }
  });

  // Sign out action
  els.navAdminLogout.addEventListener("click", () => {
    window.AdminAPI.terminateAdminSession();
    showToast("Signed out successfully.", "success");
    checkAuth();
  });

  // Reload views if database is updated elsewhere
  window.addEventListener("databaseUpdated", () => {
    if (window.AdminAPI.isAdminLoggedIn()) {
      renderAdminDashboard();
    }
  });

  // Run initial authentication state routing
  checkAuth();
});
