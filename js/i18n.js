/* ================================================================== *
 * Internationalization & Translation Module
 * ================================================================== */

function resolveSubText(obj) {
  if (!obj || AppState.lang === "de") return "";
  if (AppState.lang === "hi") return obj.hi || obj.en || "";
  if (AppState.lang === "en") return obj.en || "";
  return "";
}

function setLanguage(lang) {
  AppState.lang = lang;
  store.set("et.lang", AppState.lang);

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === AppState.lang));
  });

  if (window.S) {
    window.renderQ();
  }
  if (typeof window.renderTable === "function") {
    window.renderTable();
  }
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
