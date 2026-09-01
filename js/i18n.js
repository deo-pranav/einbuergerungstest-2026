/* ================================================================== *
 * Modular Language Pack & Internationalization Engine
 * ================================================================== */

const PackState = {
  registry: window.LANGUAGE_PACKS_REGISTRY || [
    { code: "en", name: "Englisch", native: "English", flag: "🇬🇧", file: "data/packs/en.json", jsFile: "data/packs/en.js", size: "90 KB" },
    { code: "hi", name: "Hindi", native: "हिन्दी", flag: "🇮🇳", file: "data/packs/hi.json", jsFile: "data/packs/hi.js", size: "177 KB" }
  ],
  installed: new Set(store.get("et.installedPacks", ["en"])), // default: English installed
  cache: {},
  loading: {}
};

// Global hook for script-injected packs
window.REGISTER_LANGUAGE_PACK = function(langCode, data) {
  PackState.cache[langCode] = data;
  PackState.installed.add(langCode);
  store.set("et.installedPacks", Array.from(PackState.installed));
  store.set(`et.pack.${langCode}`, data);
  if (typeof PackState.loading[langCode] === "function") {
    PackState.loading[langCode](true);
    delete PackState.loading[langCode];
  }
};

function initLanguagePacks() {
  // Load any installed packs from LocalStorage cache into memory
  PackState.installed.forEach(langCode => {
    const cached = store.get(`et.pack.${langCode}`, null);
    if (cached) {
      PackState.cache[langCode] = cached;
    }
  });

  // Ensure active language is installed; if not fallback to 'de' or load it
  if (AppState.lang !== "de") {
    if (!PackState.cache[AppState.lang]) {
      loadLanguagePack(AppState.lang, ok => {
        if (!ok && AppState.lang !== "de") {
          setLanguage("de");
        } else {
          updateLanguageUI();
        }
      });
    }
  }
}

function isPackInstalled(langCode) {
  return PackState.installed.has(langCode) && !!PackState.cache[langCode];
}

function loadLanguagePack(langCode, callback) {
  if (langCode === "de") {
    if (callback) callback(true);
    return;
  }

  // 1. In memory
  if (PackState.cache[langCode]) {
    PackState.installed.add(langCode);
    store.set("et.installedPacks", Array.from(PackState.installed));
    if (callback) callback(true);
    return;
  }

  // 2. In LocalStorage
  const localData = store.get(`et.pack.${langCode}`, null);
  if (localData) {
    PackState.cache[langCode] = localData;
    PackState.installed.add(langCode);
    store.set("et.installedPacks", Array.from(PackState.installed));
    if (callback) callback(true);
    return;
  }

  const reg = PackState.registry.find(p => p.code === langCode);
  if (!reg) {
    if (callback) callback(false, new Error("Unbekanntes Sprachpaket"));
    return;
  }

  // 3. Fetch from JSON or script
  if (window.location.protocol.startsWith("http")) {
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
        loadPackViaScript(reg, callback);
      });
  } else {
    loadPackViaScript(reg, callback);
  }
}

function loadPackViaScript(reg, callback) {
  PackState.loading[reg.code] = callback;
  const script = document.createElement("script");
  script.src = reg.jsFile;
  script.onerror = () => {
    delete PackState.loading[reg.code];
    if (callback) callback(false, new Error("Laden des Sprachpakets fehlgeschlagen"));
  };
  document.head.appendChild(script);
}

function deleteLanguagePack(langCode) {
  if (langCode === "de") return;
  PackState.installed.delete(langCode);
  delete PackState.cache[langCode];
  store.set("et.installedPacks", Array.from(PackState.installed));
  store.remove(`et.pack.${langCode}`);

  if (AppState.lang === langCode) {
    setLanguage("de");
  }
  renderLanguagePackModal();
}

function resolveQuestionSubText(q) {
  if (!q || AppState.lang === "de") return "";
  const pack = PackState.cache[AppState.lang];
  if (!pack || !pack[String(q.id)]) return "";
  return pack[String(q.id)].q || "";
}

function resolveOptionSubText(q, optIndex) {
  if (!q || AppState.lang === "de") return "";
  const pack = PackState.cache[AppState.lang];
  if (!pack || !pack[String(q.id)] || !pack[String(q.id)].options) return "";
  return pack[String(q.id)].options[optIndex] || "";
}

function setLanguage(lang) {
  if (lang !== "de" && !isPackInstalled(lang)) {
    // Prompt to download
    openLanguagePackModal(lang);
    return;
  }

  AppState.lang = lang;
  store.set("et.lang", AppState.lang);
  updateLanguageUI();

  if (window.S) {
    window.renderQ();
  }
  if (typeof window.renderTable === "function") {
    window.renderTable();
  }
}

function updateLanguageUI() {
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === AppState.lang));
  });
}

function openLanguagePackModal(targetLang) {
  let modal = el("lang-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "lang-modal";
    modal.className = "modal-overlay";
    document.body.appendChild(modal);
  }
  modal.hidden = false;
  renderLanguagePackModal(targetLang);
}

function closeLanguagePackModal() {
  const modal = el("lang-modal");
  if (modal) modal.hidden = true;
}

function renderLanguagePackModal(highlightLang) {
  const modal = el("lang-modal");
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
              <button class="btn btn-sm ${AppState.lang === 'de' ? 'btn-primary' : ''}" id="btn-use-de">
                ${AppState.lang === 'de' ? '✓ Aktiv' : 'Auswählen'}
              </button>
            </div>
          </div>

          <!-- Downloadable Packs -->
          ${PackState.registry.map(p => {
            const installed = isPackInstalled(p.code);
            const active = AppState.lang === p.code;
            const isHighlight = p.code === highlightLang && !installed;
            return `
              <div class="pack-card ${active ? 'active-pack' : ''} ${isHighlight ? 'highlight-pack' : ''}">
                <div class="pack-info">
                  <span class="pack-flag">${p.flag}</span>
                  <div>
                    <b>${esc(p.name)} (${esc(p.native)})</b>
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

  el("modal-close-btn").onclick = closeLanguagePackModal;
  modal.onclick = e => { if (e.target === modal) closeLanguagePackModal(); };

  el("btn-use-de").onclick = () => {
    setLanguage("de");
    closeLanguagePackModal();
  };

  modal.querySelectorAll("[data-use]").forEach(btn => {
    btn.onclick = () => {
      setLanguage(btn.dataset.use);
      closeLanguagePackModal();
    };
  });

  modal.querySelectorAll("[data-delete]").forEach(btn => {
    btn.onclick = () => {
      if (confirm(`Sprachpaket '${btn.dataset.delete.toUpperCase()}' wirklich löschen?`)) {
        deleteLanguagePack(btn.dataset.delete);
      }
    };
  });

  modal.querySelectorAll("[data-install]").forEach(btn => {
    btn.onclick = () => {
      const code = btn.dataset.install;
      btn.disabled = true;
      btn.textContent = "⏳ Laden …";
      loadLanguagePack(code, (ok, err) => {
        if (ok) {
          setLanguage(code);
          renderLanguagePackModal();
          closeLanguagePackModal();
        } else {
          alert("Fehler beim Herunterladen: " + (err ? err.message : "Netzwerkfehler"));
          renderLanguagePackModal();
        }
      });
    };
  });
}

function initTheme() {
  const THEMES = ["light", "dark", "auto"];
  const ICONS = { light: "☀️", dark: "🌙", auto: "💻" };

  function applyTheme(t) {
    AppState.theme = t;
    store.set("et.theme", t);
    if (t === "auto") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", t);
    }
    const iconEl = el("theme-icon");
    if (iconEl) iconEl.textContent = ICONS[t] || "☀️";
  }

  const themeBtn = el("theme-btn");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const next = THEMES[(THEMES.indexOf(AppState.theme) + 1) % THEMES.length];
      applyTheme(next);
    });
  }

  applyTheme(AppState.theme);
}
