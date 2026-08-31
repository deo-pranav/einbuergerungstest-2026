/* ================================================================== *
 * App Entry Point & Controller
 * ================================================================== */

const VIEWS = ["exam", "practice", "all", "info"];

function selectTab(v) {
  document.querySelectorAll("nav.tabs button").forEach(b =>
    b.setAttribute("aria-selected", String(b.dataset.view === v)));
  VIEWS.forEach(x => {
    const viewSection = el("view-" + x);
    if (viewSection) viewSection.hidden = (x !== v);
  });
}

function initControls() {
  const stSelect = el("state-select");
  const filterStatesOptGroup = el("q-filter-states");

  if (stSelect && STATES.length) {
    stSelect.innerHTML = STATES.map(s =>
      `<option value="${s.code}" ${s.code === AppState.stateCode ? "selected" : ""}>🏛️ ${esc(s.name)} (${s.code})</option>`
    ).join("");

    stSelect.addEventListener("change", e => {
      AppState.stateCode = e.target.value;
      store.set("et.state", AppState.stateCode);
      renderExamIntro();
      renderPicker();
      renderTable();
    });
  }

  if (filterStatesOptGroup && STATES.length) {
    filterStatesOptGroup.innerHTML = STATES.map(s =>
      `<option value="state-${s.code}">${esc(s.name)} (10)</option>`
    ).join("");
  }

  // Language buttons
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === AppState.lang));
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  // Tab buttons
  document.querySelectorAll("nav.tabs button").forEach(btn => {
    btn.addEventListener("click", () => selectTab(btn.dataset.view));
  });

  // Search & Filter in Table
  const searchInput = el("q-search");
  if (searchInput) searchInput.addEventListener("input", renderTable);

  const filterPool = el("q-filter-pool");
  if (filterPool) filterPool.addEventListener("change", renderTable);

  // Progress Bar Exit Buttons
  const prExit = el("pr-exit-btn");
  if (prExit) {
    prExit.addEventListener("click", () => {
      stopTimer();
      el("prac-run").hidden = true;
      el("picker").hidden = false;
      renderPicker();
      window.S = null;
    });
  }

  const exExit = el("ex-exit-btn");
  if (exExit) {
    exExit.addEventListener("click", () => {
      stopTimer();
      renderResult();
    });
  }

  // Keyboard Shortcuts
  document.addEventListener("keydown", e => {
    if (!window.S) return;
    const hostSection = window.S.mode === "exam" ? "view-exam" : "view-practice";
    if (el(hostSection) && el(hostSection).hidden) return;
    if (e.target.matches("input, select, textarea")) return;

    if (e.key === "Enter") {
      const n = el("next");
      if (n && !n.hidden) {
        e.preventDefault();
        advance();
      }
      return;
    }

    const k = e.key.toUpperCase();
    const i = "1234".indexOf(k) >= 0 ? "1234".indexOf(k) : LETTERS.indexOf(k);
    if (i >= 0 && !window.S.answered) {
      pick(i);
    }
  });

  // Android Hardware Back Button Support (Capacitor)
  if (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.App) {
    window.Capacitor.Plugins.App.addListener("backButton", () => {
      if (window.S) {
        if (window.S.mode === "practice") {
          stopTimer();
          el("prac-run").hidden = true;
          el("picker").hidden = false;
          renderPicker();
          window.S = null;
        } else if (window.S.mode === "exam") {
          if (confirm("Möchten Sie die Prüfung wirklich beenden?")) {
            stopTimer();
            renderResult();
          }
        }
      } else {
        window.Capacitor.Plugins.App.exitApp();
      }
    });
  }

  initTheme();
}

// App Boot
document.addEventListener("DOMContentLoaded", () => {
  initControls();
  renderExamIntro();
  renderPicker();
  renderTable();
});

// Fallback boot if DOMContentLoaded already fired
if (document.readyState === "complete" || document.readyState === "interactive") {
  initControls();
  renderExamIntro();
  renderPicker();
  renderTable();
}
