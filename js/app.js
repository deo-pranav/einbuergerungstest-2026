/* ================================================================== *
 * App Entry Point & Controller
 * ================================================================== */

window.VIEWS = ["exam", "practice", "all", "stats", "info"];

window.selectTab = function(v) {
  document.querySelectorAll("nav.tabs button").forEach(b =>
    b.setAttribute("aria-selected", String(b.dataset.view === v)));
  window.VIEWS.forEach(x => {
    const viewSection = window.el("view-" + x);
    if (viewSection) viewSection.hidden = (x !== v);
  });
  if (v === "stats" && typeof window.renderStats === "function") {
    window.renderStats();
  }
};

window.initControls = function() {
  const stSelect = window.el("state-select");
  const filterStatesOptGroup = window.el("q-filter-states");

  if (stSelect && window.STATES.length) {
    stSelect.innerHTML = window.STATES.map(s =>
      `<option value="${s.code}" ${s.code === window.AppState.stateCode ? "selected" : ""}>🏛️ ${window.esc(s.name)} (${s.code})</option>`
    ).join("");

    stSelect.addEventListener("change", e => {
      window.AppState.stateCode = e.target.value;
      window.store.set("et.state", window.AppState.stateCode);
      if (typeof window.renderExamIntro === "function") window.renderExamIntro();
      if (typeof window.renderPicker === "function") window.renderPicker();
      if (typeof window.renderTable === "function") window.renderTable();
      if (typeof window.renderStats === "function") window.renderStats();
    });
  }

  if (filterStatesOptGroup && window.STATES.length) {
    filterStatesOptGroup.innerHTML = window.STATES.map(s =>
      `<option value="state-${s.code}">${window.esc(s.name)} (10)</option>`
    ).join("");
  }

  // Language buttons
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === window.AppState.lang));
    btn.addEventListener("click", () => window.setLanguage(btn.dataset.lang));
  });

  const langPacksBtn = window.el("lang-packs-btn");
  if (langPacksBtn) {
    langPacksBtn.addEventListener("click", () => window.openLanguagePackModal());
  }

  if (typeof window.initLanguagePacks === "function") {
    window.initLanguagePacks();
  }

  // Tab buttons
  document.querySelectorAll("nav.tabs button").forEach(btn => {
    btn.addEventListener("click", () => window.selectTab(btn.dataset.view));
  });

  // Search & Filter in Table
  const searchInput = window.el("q-search");
  if (searchInput) searchInput.addEventListener("input", window.renderTable);

  const filterPool = window.el("q-filter-pool");
  if (filterPool) filterPool.addEventListener("change", window.renderTable);

  // Progress Bar Exit Buttons
  const prExit = window.el("pr-exit-btn");
  if (prExit) {
    prExit.addEventListener("click", () => {
      window.stopTimer();
      window.el("prac-run").hidden = true;
      window.el("picker").hidden = false;
      window.renderPicker();
      window.S = null;
    });
  }

  const exExit = window.el("ex-exit-btn");
  if (exExit) {
    exExit.addEventListener("click", () => {
      window.stopTimer();
      window.renderResult();
    });
  }

  // Keyboard Shortcuts
  document.addEventListener("keydown", e => {
    if (!window.S) return;
    const hostSection = window.S.mode === "exam" ? "view-exam" : "view-practice";
    if (window.el(hostSection) && window.el(hostSection).hidden) return;
    if (e.target.matches("input, select, textarea")) return;

    if (e.key === "Enter") {
      const n = window.el("next");
      if (n && !n.hidden) {
        e.preventDefault();
        window.advance();
      }
      return;
    }

    const k = e.key.toUpperCase();
    const i = "1234".indexOf(k) >= 0 ? "1234".indexOf(k) : LETTERS.indexOf(k);
    if (i >= 0 && !window.S.answered) {
      window.pick(i);
    }
  });

  // Android Hardware Back Button Support (Capacitor)
  if (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.App) {
    window.Capacitor.Plugins.App.addListener("backButton", () => {
      if (window.S) {
        if (window.S.mode === "practice") {
          window.stopTimer();
          window.el("prac-run").hidden = true;
          window.el("picker").hidden = false;
          window.renderPicker();
          window.S = null;
        } else if (window.S.mode === "exam") {
          if (confirm("Möchten Sie die Prüfung wirklich beenden?")) {
            window.stopTimer();
            window.renderResult();
          }
        }
      } else {
        window.Capacitor.Plugins.App.exitApp();
      }
    });
  }

  if (typeof window.initTheme === "function") {
    window.initTheme();
  }
};

let booted = false;
function bootApp() {
  if (booted) return;
  booted = true;
  window.initControls();
  if (typeof window.renderExamIntro === "function") window.renderExamIntro();
  if (typeof window.renderPicker === "function") window.renderPicker();
  if (typeof window.renderTable === "function") window.renderTable();
  if (typeof window.renderStats === "function") window.renderStats();
}

// App Boot
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootApp);
} else {
  bootApp();
}
