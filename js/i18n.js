/* ================================================================== *
 * Modular Language Pack & Internationalization Engine
 * ================================================================== */

window.PackFilter = {
  query: "",
  tab: "all" // "all", "installed", "available"
};

window.PackState = {
  registry: window.LANGUAGE_PACKS_REGISTRY || [
    { code: "en", name: "Englisch", native: "English", flag: "🇬🇧", file: "data/packs/en.json", jsFile: "data/packs/en.js", size: "90 KB" },
    { code: "hi", name: "Hindi", native: "हिन्दी", flag: "🇮🇳", file: "data/packs/hi.json", jsFile: "data/packs/hi.js", size: "177 KB" },
    { code: "tr", name: "Türkisch", native: "Türkçe", flag: "🇹🇷", file: "data/packs/tr.json", jsFile: "data/packs/tr.js", size: "95 KB" },
    { code: "ar", name: "Arabisch", native: "العربية", flag: "🇸🇾", file: "data/packs/ar.json", jsFile: "data/packs/ar.js", size: "125 KB" },
    { code: "uk", name: "Ukrainisch", native: "Українська", flag: "🇺🇦", file: "data/packs/uk.json", jsFile: "data/packs/uk.js", size: "138 KB" },
    { code: "ru", name: "Russisch", native: "Русский", flag: "🇷🇺", file: "data/packs/ru.json", jsFile: "data/packs/ru.js", size: "135 KB" },
    { code: "fa", name: "Persisch / Farsi", native: "فارسی", flag: "🇮🇷", file: "data/packs/fa.json", jsFile: "data/packs/fa.js", size: "120 KB" },
    { code: "es", name: "Spanisch", native: "Español", flag: "🇪🇸", file: "data/packs/es.json", jsFile: "data/packs/es.js", size: "95 KB" },
    { code: "fr", name: "Französisch", native: "Français", flag: "🇫🇷", file: "data/packs/fr.json", jsFile: "data/packs/fr.js", size: "98 KB" },
    { code: "pl", name: "Polnisch", native: "Polski", flag: "🇵🇱", file: "data/packs/pl.json", jsFile: "data/packs/pl.js", size: "98 KB" },
    { code: "it", name: "Italienisch", native: "Italiano", flag: "🇮🇹", file: "data/packs/it.json", jsFile: "data/packs/it.js", size: "95 KB" },
    { code: "vi", name: "Vietnamesisch", native: "Tiếng Việt", flag: "🇻🇳", file: "data/packs/vi.json", jsFile: "data/packs/vi.js", size: "105 KB" }
  ],
  installed: new Set(window.store ? window.store.get("et.installedPacks", ["en"]) : ["en"]),
  cache: {},
  loading: {}
};

// Global hook for script-injected packs
window.REGISTER_LANGUAGE_PACK = function(langCode, data) {
  window.PackState.cache[langCode] = data;
  window.PackState.installed.add(langCode);
  if (window.store) {
    window.store.set("et.installedPacks", Array.from(window.PackState.installed));
    window.store.set(`et.pack.${langCode}`, data);
  }
  if (typeof window.PackState.loading[langCode] === "function") {
    window.PackState.loading[langCode](true);
    delete window.PackState.loading[langCode];
  }
};

window.initLanguagePacks = function() {
  if (window.LANGUAGE_PACKS_REGISTRY && window.LANGUAGE_PACKS_REGISTRY.length) {
    window.PackState.registry = window.LANGUAGE_PACKS_REGISTRY;
  }

  // Load any installed packs from LocalStorage cache into memory
  window.PackState.installed.forEach(langCode => {
    const cached = window.store.get(`et.pack.${langCode}`, null);
    if (cached) {
      window.PackState.cache[langCode] = cached;
    }
  });

  // Ensure active language is loaded if set to non-de
  if (window.AppState.lang !== "de") {
    if (!window.PackState.cache[window.AppState.lang]) {
      window.loadLanguagePack(window.AppState.lang, ok => {
        if (!ok && window.AppState.lang !== "de") {
          window.setLanguage("de");
        } else {
          window.updateLanguageUI();
        }
      });
    }
  }
  window.updateLanguageUI();
};

window.isPackInstalled = function(langCode) {
  return window.PackState.installed.has(langCode) && !!window.PackState.cache[langCode];
};

window.loadLanguagePack = function(langCode, callback) {
  if (langCode === "de") {
    if (callback) callback(true);
    return;
  }

  // 1. In memory
  if (window.PackState.cache[langCode]) {
    window.PackState.installed.add(langCode);
    window.store.set("et.installedPacks", Array.from(window.PackState.installed));
    if (callback) callback(true);
    return;
  }

  // 2. In LocalStorage
  const localData = window.store.get(`et.pack.${langCode}`, null);
  if (localData) {
    window.PackState.cache[langCode] = localData;
    window.PackState.installed.add(langCode);
    window.store.set("et.installedPacks", Array.from(window.PackState.installed));
    if (callback) callback(true);
    return;
  }

  const reg = window.PackState.registry.find(p => p.code === langCode);
  if (!reg) {
    if (callback) callback(false, new Error("Unbekanntes Sprachpaket"));
    return;
  }

  // 3. Fetch from JSON or script
  if (window.location && window.location.protocol && window.location.protocol.startsWith("http")) {
    fetch(reg.file)
      .then(res => {
        if (!res.ok) throw new Error("HTTP error " + res.status);
        return res.json();
      })
      .then(data => {
        window.REGISTER_LANGUAGE_PACK(langCode, data);
        if (callback) callback(true);
      })
      .catch(() => {
        window.loadPackViaScript(reg, callback);
      });
  } else {
    window.loadPackViaScript(reg, callback);
  }
};

window.loadPackViaScript = function(reg, callback) {
  window.PackState.loading[reg.code] = callback;
  const script = document.createElement("script");
  script.src = reg.jsFile;
  script.onerror = () => {
    delete window.PackState.loading[reg.code];
    if (callback) callback(false, new Error("Laden des Sprachpakets fehlgeschlagen"));
  };
  document.head.appendChild(script);
};

window.deleteLanguagePack = function(langCode) {
  if (langCode === "de") return;
  window.PackState.installed.delete(langCode);
  delete window.PackState.cache[langCode];
  window.store.set("et.installedPacks", Array.from(window.PackState.installed));
  window.store.remove(`et.pack.${langCode}`);

  if (window.AppState.lang === langCode) {
    window.setLanguage("de");
  }
  window.renderLanguagePackModal();
};

window.resolveQuestionSubText = function(q) {
  if (!q || window.AppState.lang === "de") return "";
  const pack = window.PackState.cache[window.AppState.lang];
  if (!pack || !pack[String(q.id)]) return "";
  return pack[String(q.id)].q || "";
};

window.resolveOptionSubText = function(q, optIndex) {
  if (!q || window.AppState.lang === "de") return "";
  const pack = window.PackState.cache[window.AppState.lang];
  if (!pack || !pack[String(q.id)] || !pack[String(q.id)].options) return "";
  return pack[String(q.id)].options[optIndex] || "";
};

window.setLanguage = function(lang) {
  if (lang !== "de" && !window.isPackInstalled(lang)) {
    window.openLanguagePackModal(lang);
    return;
  }

  window.AppState.lang = lang;
  window.store.set("et.lang", window.AppState.lang);
  window.updateLanguageUI();

  if (window.S) {
    window.renderQ();
  }
  if (typeof window.renderTable === "function") {
    window.renderTable();
  }
};

window.updateLanguageUI = function() {
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === window.AppState.lang));
  });
};

window.openLanguagePackModal = function(targetLang) {
  let modal = window.el("lang-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "lang-modal";
    modal.className = "modal-overlay";
    document.body.appendChild(modal);
  }
  modal.hidden = false;
  window.renderLanguagePackModal(targetLang);
};

window.closeLanguagePackModal = function() {
  const modal = window.el("lang-modal");
  if (modal) modal.hidden = true;
};

window.renderLanguagePackModal = function(highlightLang) {
  const modal = window.el("lang-modal");
  if (!modal) return;

  const q = (window.PackFilter.query || "").trim().toLowerCase();
  const currentTab = window.PackFilter.tab || "all";

  // Filter provider list
  const filteredPacks = window.PackState.registry.filter(p => {
    const installed = window.isPackInstalled(p.code);
    if (currentTab === "installed" && !installed) return false;
    if (currentTab === "available" && installed) return false;

    if (!q) return true;
    const searchString = `${p.name} ${p.native} ${p.code}`.toLowerCase();
    return searchString.includes(q);
  });

  const totalAvailable = window.PackState.registry.length;
  const totalInstalled = window.PackState.installed.size;

  modal.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-header">
        <div>
          <h3 style="margin:0">🌐 Sprachpakete & Übersetzungen</h3>
          <span style="font-size:0.8rem;color:var(--muted)">${totalAvailable} Sprachen vom Provider unterstützt · 100% Offline</span>
        </div>
        <button class="ctrl-btn modal-close" id="modal-close-btn" title="Schließen">✕</button>
      </div>

      <div class="modal-body">
        <!-- Search input -->
        <input type="search" id="pack-search-input" class="pack-search" placeholder="🔍 Sprachpaket suchen (z.B. Türkisch, Arabic, русский, Español) …" value="${window.esc(window.PackFilter.query)}">

        <!-- Filter Chips -->
        <div class="pack-filters">
          <button class="pack-chip ${currentTab === 'all' ? 'active' : ''}" data-tab="all">Alle (${totalAvailable})</button>
          <button class="pack-chip ${currentTab === 'installed' ? 'active' : ''}" data-tab="installed">Installiert (${totalInstalled})</button>
          <button class="pack-chip ${currentTab === 'available' ? 'active' : ''}" data-tab="available">Verfügbar (${totalAvailable - totalInstalled})</button>
        </div>

        <div class="pack-list">
          <!-- German Base (Only shown on 'all' or 'installed' when not searching or matching 'deutsch') -->
          ${(currentTab !== 'available' && (!q || 'deutsch german de'.includes(q))) ? `
          <div class="pack-card active-base">
            <div class="pack-info">
              <span class="pack-flag">🇩🇪</span>
              <div>
                <b>Deutsch (Prüfungssprache)</b>
                <span class="pack-meta">Offizieller Fragenkatalog · Fest integriert</span>
              </div>
            </div>
            <div class="pack-action">
              <button class="btn btn-sm ${window.AppState.lang === 'de' ? 'btn-primary' : ''}" id="btn-use-de">
                ${window.AppState.lang === 'de' ? '✓ Aktiv' : 'Auswählen'}
              </button>
            </div>
          </div>` : ''}

          <!-- Downloadable Packs -->
          ${filteredPacks.length ? filteredPacks.map(p => {
            const installed = window.isPackInstalled(p.code);
            const active = window.AppState.lang === p.code;
            const isHighlight = p.code === highlightLang && !installed;
            return `
              <div class="pack-card ${active ? 'active-pack' : ''} ${isHighlight ? 'highlight-pack' : ''}">
                <div class="pack-info">
                  <span class="pack-flag">${p.flag}</span>
                  <div>
                    <b>${window.esc(p.name)} (${window.esc(p.native)})</b>
                    <span class="pack-meta">${p.size} · 460 Fragen übersetzt</span>
                  </div>
                </div>
                <div class="pack-action">
                  ${installed ? `
                    <button class="btn btn-sm ${active ? 'btn-primary' : ''}" data-use="${p.code}">
                      ${active ? '✓ Aktiv' : 'Aktivieren'}
                    </button>
                    <button class="ctrl-btn btn-sm" data-delete="${p.code}" title="Sprachpaket löschen" style="color:var(--bad)">🗑️</button>
                  ` : `
                    <button class="btn btn-sm btn-primary" data-install="${p.code}" id="btn-inst-${p.code}">
                      ⬇️ Herunterladen (${p.size})
                    </button>
                  `}
                </div>
              </div>`;
          }).join("") : `
            <div style="text-align:center;padding:24px;color:var(--muted)">
              Kein Sprachpaket für „${window.esc(window.PackFilter.query)}“ im Katalog gefunden.
            </div>
          `}
        </div>

        <!-- Custom Importer Box -->
        <div class="pack-custom-box">
          <h4>➕ Eigenes Sprachpaket importieren</h4>
          <p>Laden Sie ein benutzerdefiniertes JSON-Sprachpaket von Ihrem Gerät hoch:</p>
          <label class="btn btn-sm" style="cursor:pointer;display:inline-block">
            📁 JSON-Sprachpaket auswählen
            <input type="file" id="btn-import-pack" accept=".json" style="display:none">
          </label>
        </div>
      </div>
    </div>`;

  // Search input handler
  const sInput = window.el("pack-search-input");
  if (sInput) {
    if (typeof sInput.focus === "function") sInput.focus();
    if (typeof sInput.setSelectionRange === "function" && sInput.value) {
      sInput.setSelectionRange(sInput.value.length, sInput.value.length);
    }
    sInput.oninput = e => {
      window.PackFilter.query = e.target.value;
      window.renderLanguagePackModal(highlightLang);
    };
  }

  // Filter chips
  modal.querySelectorAll("[data-tab]").forEach(chip => {
    chip.onclick = () => {
      window.PackFilter.tab = chip.dataset.tab;
      window.renderLanguagePackModal(highlightLang);
    };
  });

  const closeBtn = window.el("modal-close-btn");
  if (closeBtn) closeBtn.onclick = window.closeLanguagePackModal;
  modal.onclick = e => { if (e.target === modal) window.closeLanguagePackModal(); };

  const btnUseDe = window.el("btn-use-de");
  if (btnUseDe) {
    btnUseDe.onclick = () => {
      window.setLanguage("de");
      window.closeLanguagePackModal();
    };
  }

  modal.querySelectorAll("[data-use]").forEach(btn => {
    btn.onclick = () => {
      window.setLanguage(btn.dataset.use);
      window.closeLanguagePackModal();
    };
  });

  modal.querySelectorAll("[data-delete]").forEach(btn => {
    btn.onclick = () => {
      if (confirm(`Sprachpaket '${btn.dataset.delete.toUpperCase()}' wirklich löschen?`)) {
        window.deleteLanguagePack(btn.dataset.delete);
      }
    };
  });

  modal.querySelectorAll("[data-install]").forEach(btn => {
    btn.onclick = () => {
      const code = btn.dataset.install;
      btn.disabled = true;
      btn.textContent = "⏳ Laden …";
      window.loadLanguagePack(code, (ok, err) => {
        if (ok) {
          window.setLanguage(code);
          window.renderLanguagePackModal();
          window.closeLanguagePackModal();
        } else {
          alert("Fehler beim Herunterladen: " + (err ? err.message : "Netzwerkfehler"));
          window.renderLanguagePackModal();
        }
      });
    };
  });

  // Custom JSON Pack Import
  const importInput = window.el("btn-import-pack");
  if (importInput) {
    importInput.onchange = e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = ev => {
        try {
          const packData = JSON.parse(ev.target.result);
          const langCode = file.name.replace(/\.json$/i, "").toLowerCase().slice(0, 10);
          window.REGISTER_LANGUAGE_PACK(langCode, packData);
          
          // Add to registry if not present
          if (!window.PackState.registry.some(p => p.code === langCode)) {
            window.PackState.registry.push({
              code: langCode,
              name: `Benutzerdefiniert (${langCode.toUpperCase()})`,
              native: langCode.toUpperCase(),
              flag: "🌐",
              file: "",
              jsFile: "",
              size: `${Math.round(ev.target.result.length / 1024)} KB`,
              count: Object.keys(packData).length
            });
          }
          window.setLanguage(langCode);
          alert(`Sprachpaket '${langCode.toUpperCase()}' erfolgreich importiert und aktiviert!`);
          window.renderLanguagePackModal();
        } catch (err) {
          alert("Fehler beim Lesen des Sprachpakets: " + err.message);
        }
      };
      reader.readAsText(file);
    };
  }
};

window.initTheme = function() {
  const THEMES = ["light", "dark", "auto"];
  const ICONS = { light: "☀️", dark: "🌙", auto: "💻" };

  function applyTheme(t) {
    window.AppState.theme = t;
    window.store.set("et.theme", t);
    if (t === "auto") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", t);
    }
    const iconEl = window.el("theme-icon");
    if (iconEl) iconEl.textContent = ICONS[t] || "☀️";
  }

  const themeBtn = window.el("theme-btn");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const next = THEMES[(THEMES.indexOf(window.AppState.theme) + 1) % THEMES.length];
      applyTheme(next);
    });
  }

  applyTheme(window.AppState.theme);
};
