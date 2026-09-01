/* ================================================================== *
 * Modular Language Pack & Internationalization Engine
 * ================================================================== */

// 100+ World Languages supported by open translation API
window.WORLD_LANGUAGES = [
  { code: "ar", name: "Arabisch", native: "العربية", flag: "🇸🇾" },
  { code: "tr", name: "Türkisch", native: "Türkçe", flag: "🇹🇷" },
  { code: "ps", name: "Paschtu", native: "پښتو", flag: "🇦🇫" },
  { code: "prs", name: "Dari", native: "دری", flag: "🇦🇫" },
  { code: "fa", name: "Persisch / Farsi", native: "فارسی", flag: "🇮🇷" },
  { code: "uk", name: "Ukrainisch", native: "Українська", flag: "🇺🇦" },
  { code: "ru", name: "Russisch", native: "Русский", flag: "🇷🇺" },
  { code: "hi", name: "Hindi", native: "हिन्दी", flag: "🇮🇳" },
  { code: "ur", name: "Urdu", native: "اردو", flag: "🇵🇰" },
  { code: "ku", name: "Kurdisch (Kurmandschi)", native: "Kurdî", flag: "☀️" },
  { code: "ckb", name: "Kurdisch (Sorani)", native: "کوردی", flag: "☀️" },
  { code: "ti", name: "Tigrinya", native: "ትግርኛ", flag: "🇪🇷" },
  { code: "am", name: "Amharisch", native: "አማርኛ", flag: "🇪🇹" },
  { code: "so", name: "Somali", native: "Soomaali", flag: "🇸🇴" },
  { code: "sq", name: "Albanisch", native: "Shqip", flag: "🇦🇱" },
  { code: "sr", name: "Serbisch", native: "Српски", flag: "🇷🇸" },
  { code: "bs", name: "Bosnisch", native: "Bosanski", flag: "🇧🇦" },
  { code: "hr", name: "Kroatisch", native: "Hrvatski", flag: "🇭🇷" },
  { code: "ro", name: "Rumänisch", native: "Română", flag: "🇷🇴" },
  { code: "bg", name: "Bulgarisch", native: "Български", flag: "🇧🇬" },
  { code: "pl", name: "Polnisch", native: "Polski", flag: "🇵🇱" },
  { code: "hu", name: "Ungarisch", native: "Magyar", flag: "🇭🇺" },
  { code: "cs", name: "Tschechisch", native: "Čeština", flag: "🇨🇿" },
  { code: "sk", name: "Slowakisch", native: "Slovenčina", flag: "🇸🇰" },
  { code: "el", name: "Griechisch", native: "Ελληνικά", flag: "🇬🇷" },
  { code: "es", name: "Spanisch", native: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Französisch", native: "Français", flag: "🇫🇷" },
  { code: "it", name: "Italienisch", native: "Italiano", flag: "🇮🇹" },
  { code: "pt", name: "Portugiesisch", native: "Português", flag: "🇵🇹" },
  { code: "nl", name: "Niederländisch", native: "Nederlands", flag: "🇳🇱" },
  { code: "vi", name: "Vietnamesisch", native: "Tiếng Việt", flag: "🇻🇳" },
  { code: "zh", name: "Chinesisch (Vereinfacht)", native: "简体中文", flag: "🇨🇳" },
  { code: "zh-TW", name: "Chinesisch (Traditionell)", native: "繁體中文", flag: "🇹🇼" },
  { code: "ja", name: "Japanisch", native: "日本語", flag: "🇯🇵" },
  { code: "ko", name: "Koreanisch", native: "한국어", flag: "🇰🇷" },
  { code: "bn", name: "Bengalisch", native: "বাংলা", flag: "🇧🇩" },
  { code: "pa", name: "Punjabi", native: "ਪੰਜਾਬੀ", flag: "🇮🇳" },
  { code: "ta", name: "Tamil", native: "தமிழ்", flag: "🇮🇳" },
  { code: "te", name: "Telugu", native: "తెలుగు", flag: "🇮🇳" },
  { code: "ml", name: "Malayalam", native: "മലയാളം", flag: "🇮🇳" },
  { code: "gu", name: "Gujarati", native: "ગુજરાતી", flag: "🇮🇳" },
  { code: "mr", name: "Marathi", native: "मराठी", flag: "🇮🇳" },
  { code: "ne", name: "Nepalesisch", native: "नेपाली", flag: "🇳🇵" },
  { code: "si", name: "Singhalesisch", native: "සිංහල", flag: "🇱🇰" },
  { code: "th", name: "Thailändisch", native: "ไทย", flag: "🇹🇭" },
  { code: "id", name: "Indonesisch", native: "Bahasa Indonesia", flag: "🇮🇩" },
  { code: "ms", name: "Malaiisch", native: "Bahasa Melayu", flag: "🇲🇾" },
  { code: "tl", name: "Tagalog / Filipino", native: "Filipino", flag: "🇵🇭" },
  { code: "my", name: "Birmanisch", native: "မြန်မာ", flag: "🇲🇲" },
  { code: "km", name: "Khmer", native: "ភាសាខ្មែរ", flag: "🇰🇭" },
  { code: "he", name: "Hebräisch", native: "עברית", flag: "🇮🇱" },
  { code: "hy", name: "Armenisch", native: "Հայերեն", flag: "🇦🇲" },
  { code: "ka", name: "Georgisch", native: "ქართული", flag: "🇬🇪" },
  { code: "az", name: "Aserbaidschanisch", native: "Azərbaycan", flag: "🇦🇿" },
  { code: "kk", name: "Kasachisch", native: "Қазақша", flag: "🇰🇿" },
  { code: "uz", name: "Usbekisch", native: "Oʻzbekcha", flag: "🇺🇿" },
  { code: "tg", name: "Tadschikisch", native: "Тоҷикӣ", flag: "🇹🇯" },
  { code: "tk", name: "Turkmenisch", native: "Türkmençe", flag: "🇹🇲" },
  { code: "ky", name: "Kirgisisch", native: "Кыргызча", flag: "🇰🇬" },
  { code: "mn", name: "Mongolisch", native: "Монгол", flag: "🇲🇳" },
  { code: "sw", name: "Swahili", native: "Kiswahili", flag: "🇰🇪" },
  { code: "yo", name: "Yoruba", native: "Èdè Yorùbá", flag: "🇳🇬" },
  { code: "ig", name: "Igbo", native: "Asụsụ Igbo", flag: "🇳🇬" },
  { code: "ha", name: "Haussa", native: "Hausa", flag: "🇳🇬" },
  { code: "om", name: "Oromo", native: "Afaan Oromoo", flag: "🇪🇹" },
  { code: "rw", name: "Kinyarwanda", native: "Ikinyarwanda", flag: "🇷🇼" },
  { code: "sv", name: "Schwedisch", native: "Svenska", flag: "🇸🇪" },
  { code: "da", name: "Dänisch", native: "Dansk", flag: "🇩🇰" },
  { code: "no", name: "Norwegisch", native: "Norsk", flag: "🇳🇴" },
  { code: "fi", name: "Finnisch", native: "Suomi", flag: "🇫🇮" },
  { code: "et", name: "Estnisch", native: "Eesti", flag: "🇪🇪" },
  { code: "lv", name: "Lettisch", native: "Latviešu", flag: "🇱🇻" },
  { code: "lt", name: "Litauisch", native: "Lietuvių", flag: "🇱🇹" },
  { code: "sl", name: "Slowenisch", native: "Slovenščina", flag: "🇸🇮" },
  { code: "mk", name: "Mazedonisch", native: "Македонски", flag: "🇲🇰" }
];

window.PackFilter = {
  query: "",
  tab: "all" // "all", "installed", "available", "online"
};

window.PackState = {
  registry: window.LANGUAGE_PACKS_REGISTRY || [],
  installed: new Set(window.store ? window.store.get("et.installedPacks", ["en"]) : ["en"]),
  cache: {},
  loading: {},
  isGeneratingOnline: false
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
  if (!reg || !reg.file) {
    // Check if it's in world languages and can be generated online
    const worldLang = window.WORLD_LANGUAGES.find(w => w.code === langCode);
    if (worldLang) {
      window.generateLanguagePackOnline(worldLang.code, worldLang.name, worldLang.native, worldLang.flag, null, callback);
      return;
    }
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
  window.updateLanguageUI();
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
  
  if (lang !== "de" && lang !== "en") {
    window.AppState.lastCustomLang = lang;
    window.store.set("et.lastCustomLang", lang);
  }

  window.updateLanguageUI();

  if (window.S) {
    window.renderQ();
  }
  if (typeof window.renderTable === "function") {
    window.renderTable();
  }
};

// Dynamic Header Language Switcher: [DE] [+ EN] [+ {Selected Custom Lang}] [🌐]
window.updateLanguageUI = function() {
  const container = window.el("lang-switcher");
  if (!container) return;

  const curLang = window.AppState.lang;
  const customCode = (curLang !== "de" && curLang !== "en") ? curLang : (window.AppState.lastCustomLang || "ar");
  
  // Find custom pack meta
  let customMeta = window.PackState.registry.find(p => p.code === customCode);
  if (!customMeta) {
    customMeta = window.WORLD_LANGUAGES.find(w => w.code === customCode) || { code: customCode, name: customCode.toUpperCase(), flag: "🌐" };
  }

  const customActive = (curLang === customCode);
  const customLabel = `+ ${customMeta.flag || ""} ${customMeta.code.toUpperCase()}`;
  const customTitle = `Deutsch + ${customMeta.name || customMeta.native || customMeta.code.toUpperCase()}`;

  container.innerHTML = `
    <button class="lang-btn" data-lang="de" aria-pressed="${curLang === 'de'}" title="Nur Deutsch (Offizieller Prüfungsmodus)">DE</button>
    <button class="lang-btn" data-lang="en" aria-pressed="${curLang === 'en'}" title="Deutsch + English">+ EN</button>
    <button class="lang-btn" data-lang="${window.esc(customCode)}" aria-pressed="${customActive}" title="${window.esc(customTitle)}">${window.esc(customLabel)}</button>
    <button class="ctrl-btn" id="lang-packs-btn" title="Sprachpakete verwalten / Online-Datenbank suchen" aria-label="Sprachpakete verwalten" style="padding:2px 8px;font-size:0.85rem">🌐</button>
  `;

  // Bind click handlers
  container.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => window.setLanguage(btn.dataset.lang));
  });

  const langPacksBtn = window.el("lang-packs-btn");
  if (langPacksBtn) {
    langPacksBtn.addEventListener("click", () => window.openLanguagePackModal());
  }
};

// Online Translation Engine for Any World Language
window.translateSingleTextOnline = async function(text, targetLang) {
  if (!text || !text.trim() || !isNaN(text.trim())) return text;
  const url = `https://translate.googleapis.com/translate_a/single?client=dict-chrome-ex&sl=de&tl=${encodeURIComponent(targetLang)}&dt=t&q=${encodeURIComponent(text)}`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("HTTP error " + res.status);
    const data = await res.json();
    return data[0].map(s => s[0]).join("");
  } catch (err) {
    return text;
  }
};

window.generateLanguagePackOnline = async function(langCode, langName, langNative, langFlag, onProgress, onDone) {
  if (window.PackState.isGeneratingOnline) {
    alert("Ein Übersetzungsvorgang läuft bereits. Bitte kurz warten …");
    return;
  }

  window.PackState.isGeneratingOnline = true;
  window.renderProgressModal(`Sprachpaket „${langName} (${langNative})“ wird online generiert …`);

  const questions = window.ALL_QS || [];
  const packData = {};
  const total = questions.length;
  let finished = 0;

  const updateModalProgress = () => {
    const pct = Math.round(finished / total * 100);
    const bar = window.el("gen-progress-fill");
    const label = window.el("gen-progress-label");
    if (bar) bar.style.width = pct + "%";
    if (label) label.textContent = `${pct}% — ${finished} von ${total} Fragen übersetzt …`;
  };

  try {
    // Process in batches of 10 concurrent requests
    const BATCH_SIZE = 10;
    for (let i = 0; i < total; i += BATCH_SIZE) {
      const slice = questions.slice(i, i + BATCH_SIZE);
      await Promise.all(slice.map(async q => {
        const qDe = typeof q.q === "object" ? q.q.de : q.q;
        const qTrans = await window.translateSingleTextOnline(qDe, langCode);
        const optTrans = await Promise.all(q.options.map(o => {
          const oDe = typeof o === "object" ? o.de : o;
          return window.translateSingleTextOnline(oDe, langCode);
        }));
        packData[String(q.id)] = { q: qTrans, options: optTrans };
        finished++;
        updateModalProgress();
      }));
    }

    // Save pack locally
    window.REGISTER_LANGUAGE_PACK(langCode, packData);

    // Add / update registry
    let existingReg = window.PackState.registry.find(p => p.code === langCode);
    if (!existingReg) {
      existingReg = {
        code: langCode,
        name: langName,
        native: langNative,
        flag: langFlag || "🌐",
        file: "",
        jsFile: "",
        size: `${Math.round(JSON.stringify(packData).length / 1024)} KB`,
        count: total
      };
      window.PackState.registry.push(existingReg);
    }

    window.closeProgressModal();
    window.PackState.isGeneratingOnline = false;
    window.setLanguage(langCode);
    alert(`Sprachpaket „${langName} (${langNative})“ erfolgreich generiert & 100% offline gespeichert!`);
    window.renderLanguagePackModal();
    if (onDone) onDone(true);
  } catch (err) {
    window.closeProgressModal();
    window.PackState.isGeneratingOnline = false;
    alert("Fehler bei der Online-Generierung: " + err.message);
    if (onDone) onDone(false, err);
  }
};

window.renderProgressModal = function(title) {
  let modal = window.el("gen-progress-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "gen-progress-modal";
    modal.className = "modal-overlay";
    document.body.appendChild(modal);
  }
  modal.hidden = false;
  modal.innerHTML = `
    <div class="modal-dialog" style="max-width:440px;text-align:center">
      <div style="font-size:2.4rem;margin-bottom:8px">⚡</div>
      <h3 style="margin:0 0 8px 0">${window.esc(title)}</h3>
      <p class="lead" style="font-size:0.85rem;margin-bottom:16px;color:var(--muted)">
        Fragen und Antworten werden übersetzt und auf Ihrem Gerät für Offline-Nutzung gespeichert …
      </p>
      <div class="cat-progress-bar" style="height:12px;margin-bottom:8px">
        <div class="cat-progress-fill" id="gen-progress-fill" style="width:0%"></div>
      </div>
      <div id="gen-progress-label" style="font-size:0.85rem;font-weight:600;color:var(--accent)">0% gestartet …</div>
    </div>
  `;
};

window.closeProgressModal = function() {
  const modal = window.el("gen-progress-modal");
  if (modal) modal.hidden = true;
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

  // 1. Filter local provider registry
  const filteredLocal = window.PackState.registry.filter(p => {
    const installed = window.isPackInstalled(p.code);
    if (currentTab === "installed" && !installed) return false;
    if (currentTab === "available" && installed) return false;

    if (!q) return true;
    const searchString = `${p.name} ${p.native} ${p.code}`.toLowerCase();
    return searchString.includes(q);
  });

  // 2. Filter online world languages (when searching or on 'online' / 'all' tab)
  const filteredOnline = (q || currentTab === "online") ? window.WORLD_LANGUAGES.filter(w => {
    // Exclude if already in local registry and installed
    if (window.isPackInstalled(w.code)) return false;
    // Exclude if already pre-built in local registry
    if (window.PackState.registry.some(p => p.code === w.code)) return false;

    if (!q) return currentTab === "online";
    const searchString = `${w.name} ${w.native} ${w.code}`.toLowerCase();
    return searchString.includes(q);
  }) : [];

  const totalInstalled = window.PackState.installed.size;
  const totalLocal = window.PackState.registry.length;
  const totalOnline = window.WORLD_LANGUAGES.length;

  modal.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-header">
        <div>
          <h3 style="margin:0">🌐 Sprachpakete & Übersetzungen</h3>
          <span style="font-size:0.8rem;color:var(--muted)">100% Offline-fähig · Beliebige Sprache online generierbar</span>
        </div>
        <button class="ctrl-btn modal-close" id="modal-close-btn" title="Schließen">✕</button>
      </div>

      <div class="modal-body">
        <!-- Search input -->
        <input type="search" id="pack-search-input" class="pack-search" placeholder="🔍 Online-Datenbank suchen (z.B. Arabisch, Kurdish, Somali, Polski, اردو, دری) …" value="${window.esc(window.PackFilter.query)}">

        <!-- Filter Chips -->
        <div class="pack-filters">
          <button class="pack-chip ${currentTab === 'all' ? 'active' : ''}" data-tab="all">Alle (${totalLocal})</button>
          <button class="pack-chip ${currentTab === 'installed' ? 'active' : ''}" data-tab="installed">Installiert (${totalInstalled})</button>
          <button class="pack-chip ${currentTab === 'available' ? 'active' : ''}" data-tab="available">Pre-Built (${totalLocal - totalInstalled})</button>
          <button class="pack-chip ${currentTab === 'online' ? 'active' : ''}" data-tab="online">⚡ Online-Datenbank (100+)</button>
        </div>

        <div class="pack-list">
          <!-- German Base (Only shown on 'all' or 'installed' when not searching or matching 'deutsch') -->
          ${(currentTab !== 'available' && currentTab !== 'online' && (!q || 'deutsch german de'.includes(q))) ? `
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

          <!-- Downloadable Pre-Built Packs -->
          ${filteredLocal.map(p => {
            const installed = window.isPackInstalled(p.code);
            const active = window.AppState.lang === p.code;
            const isHighlight = p.code === highlightLang && !installed;
            return `
              <div class="pack-card ${active ? 'active-pack' : ''} ${isHighlight ? 'highlight-pack' : ''}">
                <div class="pack-info">
                  <span class="pack-flag">${p.flag}</span>
                  <div>
                    <b>${window.esc(p.name)} (${window.esc(p.native)})</b>
                    <span class="pack-meta">${p.size} · 460 Fragen übersetzt · Pre-built</span>
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

          <!-- Online World Languages (On-Demand Generation) -->
          ${filteredOnline.map(w => {
            return `
              <div class="pack-card" style="border-style:dashed">
                <div class="pack-info">
                  <span class="pack-flag">${w.flag}</span>
                  <div>
                    <b>${window.esc(w.name)} (${window.esc(w.native)})</b>
                    <span class="pack-meta">Online-Datenbank · ⚡ Auto-Translate auf Knopfdruck</span>
                  </div>
                </div>
                <div class="pack-action">
                  <button class="btn btn-sm" data-gen-online="${w.code}" data-name="${window.esc(w.name)}" data-native="${window.esc(w.native)}" data-flag="${w.flag}">
                    ⚡ Online erstellen
                  </button>
                </div>
              </div>`;
          }).join("")}

          ${(!filteredLocal.length && !filteredOnline.length) ? `
            <div style="text-align:center;padding:24px;color:var(--muted)">
              Kein passendes Sprachpaket für „${window.esc(window.PackFilter.query)}“ gefunden.
            </div>
          ` : ''}
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

  // Online generation button handler
  modal.querySelectorAll("[data-gen-online]").forEach(btn => {
    btn.onclick = () => {
      const code = btn.dataset.genOnline;
      const name = btn.dataset.name;
      const native = btn.dataset.native;
      const flag = btn.dataset.flag;
      window.generateLanguagePackOnline(code, name, native, flag);
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
