/* ================================================================== *
 * Modular Language Pack & Internationalization Engine
 * ================================================================== */

window.PackState = {
  registry: window.LANGUAGE_PACKS_REGISTRY || [
    { code: "en", name: "Englisch", native: "English", flag: "🇬🇧", file: "data/packs/en.json", jsFile: "data/packs/en.js", size: "90 KB" },
    { code: "hi", name: "Hindi", native: "हिन्दी", flag: "🇮🇳", file: "data/packs/hi.json", jsFile: "data/packs/hi.js", size: "177 KB" }
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
  if (window.LANGUAGE_PACKS_REGISTRY) {
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

  modal.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-header">
        <h3>🌐 Sprachpakete verwalten</h3>
        <button class="ctrl-btn modal-close" id="modal-close-btn" title="Schließen">✕</button>
      </div>

      <div class="modal-body">
        <p class="lead" style="margin-bottom:14px">
          Laden Sie Übersetzungspakete für Offline-Nutzung herunter. Alle Übersetzungen werden lokal auf Ihrem Gerät gespeichert.
        </p>

        <div class="pack-list">
          <!-- German Base -->
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
          </div>

          <!-- Downloadable Packs -->
          ${window.PackState.registry.map(p => {
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
          }).join("")}
        </div>
      </div>
    </div>`;

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
