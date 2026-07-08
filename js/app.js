// CasRael Automobiles - Visitor Application View Controller

document.addEventListener("DOMContentLoaded", () => {
  // Application State
  const state = {
    currentView: "home",
    selectedBrandId: null,
    selectedModelId: null,
    searchQuery: ""
  };

  // DOM Elements Cache
  const els = {
    navHome: document.getElementById("nav-home"),
    homeView: document.getElementById("home-view"),
    brandDetailsView: document.getElementById("brand-details-view"),
    searchVal: document.getElementById("brand-search"),
    brandsGrid: document.getElementById("brands-grid"),
    brandDetailsHero: document.getElementById("brand-details-hero"),
    modelsGrid: document.getElementById("models-grid"),
    toast: document.getElementById("toast"),
    detailModal: document.getElementById("detail-modal"),
    inquiryModal: document.getElementById("inquiry-modal"),
    
    // Gallery elements
    galleryPrev: document.getElementById("modal-gallery-prev"),
    galleryNext: document.getElementById("modal-gallery-next"),
    galleryThumbnails: document.getElementById("modal-gallery-thumbnails")
  };

  // Formal Notifications
  function showToast(message, type = "success") {
    els.toast.textContent = message;
    els.toast.className = `toast show ${type}`;
    setTimeout(() => {
      els.toast.classList.remove("show");
    }, 4000);
  }

  // Helper for logo rendering
  function getLogoHTML(brand) {
    const isSvg = brand.logo.trim().startsWith("<svg");
    return isSvg 
      ? brand.logo 
      : `<img src="${brand.logo}" alt="${brand.name} logo" onerror="this.style.display='none'">`;
  }

  // Navigation Controller
  function navigateTo(view, params = {}) {
    state.currentView = view;
    
    els.homeView.style.display = "none";
    els.brandDetailsView.style.display = "none";
    
    els.navHome.classList.remove("active");

    if (view === "home") {
      els.homeView.style.display = "block";
      els.navHome.classList.add("active");
      state.searchQuery = "";
      els.searchVal.value = "";
      renderBrands();
    } else if (view === "brand-details") {
      els.brandDetailsView.style.display = "block";
      state.selectedBrandId = params.brandId;
      renderBrandDetails();
    }
    
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // --- Portfolio Display Rendering ---

  function renderBrands() {
    const db = window.AdminAPI.getDB();
    const query = state.searchQuery.toLowerCase().trim();
    
    els.brandsGrid.innerHTML = "";
    
    const filteredBrands = db.brands.filter(b => 
      b.name.toLowerCase().includes(query) || 
      b.description.toLowerCase().includes(query)
    );
    
    if (filteredBrands.length === 0) {
      els.brandsGrid.innerHTML = `
        <div class="empty-state" style="grid-column: 1/-1;">
          <h3>No marques matched</h3>
          <p>Your search parameter returned no represented marques in our registry. Please refine your query.</p>
        </div>
      `;
      return;
    }
    
    filteredBrands.forEach(brand => {
      const modelCount = db.models.filter(m => m.brandId === brand.id).length;
      
      const logoHTML = getLogoHTML(brand);
      
      const card = document.createElement("div");
      card.className = "brand-card slide-up";
      card.innerHTML = `
        <div class="brand-logo-container">
          ${logoHTML}
        </div>
        <h3 class="brand-name">${brand.name}</h3>
        <p class="brand-desc">${brand.description}</p>
        <span class="model-count">${modelCount} ${modelCount === 1 ? 'Marque Holding' : 'Marque Holdings'}</span>
      `;
      
      card.addEventListener("click", () => {
        navigateTo("brand-details", { brandId: brand.id });
      });
      
      els.brandsGrid.appendChild(card);
    });
  }

  function renderBrandDetails() {
    const db = window.AdminAPI.getDB();
    const brand = db.brands.find(b => b.id === state.selectedBrandId);
    
    if (!brand) {
      navigateTo("home");
      return;
    }
    
    const logoHTML = getLogoHTML(brand);
    
    els.brandDetailsHero.innerHTML = `
      <div class="brand-details-logo">
        ${logoHTML}
      </div>
      <div class="brand-details-info">
        <h1 class="brand-details-title">${brand.name}</h1>
        <p class="brand-details-description">${brand.description}</p>
      </div>
    `;
    
    els.modelsGrid.innerHTML = "";
    const models = db.models.filter(m => m.brandId === state.selectedBrandId);
    
    if (models.length === 0) {
      els.modelsGrid.innerHTML = `
        <div class="empty-state" style="grid-column: 1/-1;">
          <h3>No holdings registered</h3>
          <p>There are currently no active listings cataloged under the ${brand.name} marque.</p>
        </div>
      `;
      return;
    }
    
    models.forEach(model => {
      const displayImg = (model.images && model.images[0]) || model.image || "";
      
      const card = document.createElement("div");
      card.className = "model-card slide-up";
      card.innerHTML = `
        <div class="model-image-wrapper">
          <span class="model-badge">${model.category}</span>
          <img class="model-image" src="${displayImg}" alt="${model.name}" onerror="this.src='https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80'">
          <span class="model-price-badge">₦${model.price.toLocaleString()}</span>
        </div>
        <div class="model-card-body">
          <h3 class="model-card-title">${model.name}</h3>
          <div class="model-card-specs">
            <div class="spec-item">
              <span class="spec-label">Output</span>
              <span class="spec-val">${model.hp}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">0-60 MPH</span>
              <span class="spec-val">${model.acceleration}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Transmission</span>
              <span class="spec-val">${model.transmission}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Terminal Velocity</span>
              <span class="spec-val">${model.topSpeed}</span>
            </div>
          </div>
          <button class="model-card-action">View Specifications</button>
        </div>
      `;
      
      card.querySelector(".model-card-action").addEventListener("click", () => {
        openDetailModal(model);
      });
      
      els.modelsGrid.appendChild(card);
    });
  }

  // --- Modal Operations ---

  function openDetailModal(model) {
    state.selectedModelId = model.id;
    const db = window.AdminAPI.getDB();
    const brand = db.brands.find(b => b.id === model.brandId);
    
    // Normalize images: either list, single or empty
    const images = model.images && model.images.length > 0 
      ? [...model.images] 
      : (model.image ? [model.image] : ["https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80"]);
    
    let activeIdx = 0;
    
    // Render Brand details
    const brandLogoContainer = document.getElementById("modal-brand-logo");
    brandLogoContainer.innerHTML = brand ? getLogoHTML(brand) : "";
    document.getElementById("modal-brand-name").textContent = brand ? brand.name : "Marque Portfolio";
    
    document.getElementById("modal-title").textContent = model.name;
    document.getElementById("modal-price").textContent = `₦${model.price.toLocaleString()}`;
    document.getElementById("modal-description").textContent = model.description || "No overview documentation compiled.";
    
    // Features list
    const featuresList = document.getElementById("modal-features-list");
    featuresList.innerHTML = "";
    if (model.features && model.features.length > 0) {
      model.features.forEach(feat => {
        const li = document.createElement("li");
        li.textContent = feat;
        featuresList.appendChild(li);
      });
    } else {
      featuresList.innerHTML = `<li style="color: var(--text-muted);">Standard manufacturing specification list.</li>`;
    }
    
    // Specs
    document.getElementById("modal-spec-category").textContent = model.category;
    document.getElementById("modal-spec-hp").textContent = model.hp;
    document.getElementById("modal-spec-range").textContent = model.range;
    document.getElementById("modal-spec-transmission").textContent = model.transmission;
    document.getElementById("modal-spec-acceleration").textContent = model.acceleration;
    document.getElementById("modal-spec-topspeed").textContent = model.topSpeed;
    
    // --- Gallery Logic ---
    function displayImage(idx) {
      activeIdx = idx;
      const bannerImg = document.getElementById("modal-banner-img");
      bannerImg.src = images[activeIdx];
      bannerImg.onerror = function() {
        this.src = "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80";
      };
      
      // Update active state on thumbnails
      const thumbs = els.galleryThumbnails.querySelectorAll(".gallery-thumb");
      thumbs.forEach((th, i) => {
        if (i === activeIdx) {
          th.classList.add("active");
        } else {
          th.classList.remove("active");
        }
      });
    }

    // Render thumbnails strip
    els.galleryThumbnails.innerHTML = "";
    if (images.length > 1) {
      images.forEach((img, i) => {
        const th = document.createElement("img");
        th.className = "gallery-thumb";
        th.src = img;
        th.alt = `Thumbnail ${i+1}`;
        th.onerror = function() {
          this.src = "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80";
        };
        
        th.addEventListener("click", () => {
          displayImage(i);
        });
        
        els.galleryThumbnails.appendChild(th);
      });
      
      // Bind arrows and show them
      els.galleryPrev.style.display = "flex";
      els.galleryNext.style.display = "flex";
      
      els.galleryPrev.onclick = () => {
        let prevIdx = activeIdx - 1;
        if (prevIdx < 0) prevIdx = images.length - 1;
        displayImage(prevIdx);
      };
      
      els.galleryNext.onclick = () => {
        let nextIdx = activeIdx + 1;
        if (nextIdx >= images.length) nextIdx = 0;
        displayImage(nextIdx);
      };
    } else {
      // Hide strip and arrows
      els.galleryPrev.style.display = "none";
      els.galleryNext.style.display = "none";
    }

    // Set initial image
    displayImage(0);
    
    els.detailModal.classList.add("open");
  }

  function closeAllModals() {
    els.detailModal.classList.remove("open");
    els.inquiryModal.classList.remove("open");
  }

  document.querySelectorAll(".modal-close-btn").forEach(btn => {
    btn.addEventListener("click", closeAllModals);
  });
  
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeAllModals();
    });
  });

  const inquiryBtn = document.getElementById("modal-inquiry-btn");
  inquiryBtn.addEventListener("click", () => {
    els.inquiryModal.classList.add("open");
  });

  const inquiryForm = document.getElementById("inquiry-form");
  inquiryForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const clientName = document.getElementById("inq-name").value;
    
    showToast(`Acquisition request received. A portfolio specialist will contact you directly, ${clientName}.`, "success");
    closeAllModals();
    inquiryForm.reset();
  });

  // --- Navigation & Event Triggers ---

  els.navHome.addEventListener("click", () => navigateTo("home"));

  els.searchVal.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    renderBrands();
  });

  document.getElementById("btn-back-to-brands").addEventListener("click", () => {
    navigateTo("home");
  });

  window.addEventListener("databaseUpdated", () => {
    if (state.currentView === "home") {
      renderBrands();
    } else if (state.currentView === "brand-details") {
      renderBrandDetails();
    }
  });

  // Entry Point
  navigateTo("home");
});
