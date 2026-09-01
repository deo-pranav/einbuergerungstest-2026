/* ================================================================== *
 * View: Practice Hub (Üben) & Spaced Repetition
 * ================================================================== */

window.practiceOpts = function(title) {
  return {
    mode: "practice",
    host: "prac-card",
    show: "prac-run",
    hide: "picker",
    title,
    prog: { count: "pr-count", bar: "pr-bar", score: "pr-score", timer: null }
  };
};

window.startPractice = function(list, title, forceSequential = false) {
  if (!list || !list.length) return;
  const sequence = (!forceSequential && window.AppState.shuffleQuestions) ? window.shuffled(list) : list.slice();
  window.startSession(sequence, window.practiceOpts(title));
};

window.renderPicker = function() {
  const pickerEl = window.el("picker");
  if (!pickerEl) return;

  const st = window.STATES.find(s => s.code === window.AppState.stateCode) || { name: "Bayern", startId: 311, endId: 320 };
  const stateQs = window.ALL_QS.filter(q => q.state === window.AppState.stateCode);
  const genQs = window.ALL_QS.filter(q => q.state === null);
  const bookmarkedQs = window.ALL_QS.filter(q => window.AppState.bookmarks.has(q.id));
  const missedQs = window.ALL_QS.filter(q => window.AppState.history[q.id] && window.AppState.history[q.id].wrong > window.AppState.history[q.id].right);

  const cats = {};
  genQs.forEach(q => {
    if (q.cat) cats[q.cat] = (cats[q.cat] || 0) + 1;
  });

  pickerEl.innerHTML = `
    <h2>Gezielt Üben</h2>
    <p class="lead">Lernen ohne Zeitdruck mit sofortiger Auflösung nach jeder Frage.</p>

    <!-- Randomizer Settings -->
    <div class="practice-settings">
      <label class="toggle-control" title="Fragen in zufälliger Reihenfolge anzeigen">
        <input type="checkbox" id="toggle-shuffle-q" ${window.AppState.shuffleQuestions ? "checked" : ""}>
        <span>🔀 Fragen-Reihenfolge zufällig mischen</span>
      </label>
      <label class="toggle-control" title="Antwortoptionen (A–D) für jede Frage zufällig durchmischen">
        <input type="checkbox" id="toggle-shuffle-opt" ${window.AppState.shuffleOptions ? "checked" : ""}>
        <span>🎲 Antwortoptionen (A–D) durchmischen</span>
      </label>
    </div>

    <div class="group">
      <h3>Landesfragen & Schnellstart</h3>
      <button class="btn btn-primary bigbtn" data-set="state">
        <b>Landesfragen ${window.esc(st.name)}</b><span>Die 10 landesspezifischen Fragen (Nr. ${st.startId}–${st.endId})</span>
      </button>
      <button class="btn bigbtn" data-set="random20">
        <b>20 Zufallsfragen</b><span>Gemischte Fragerunde</span>
      </button>
      <button class="btn bigbtn" data-set="allgemein">
        <b>Alle 300 bundesweiten Fragen</b><span>${window.AppState.shuffleQuestions ? "Zufällig gemischt" : "Reihenfolge 1 bis 300"}</span>
      </button>
      <button class="btn bigbtn" data-set="images">
        <b>Bildfragen</b><span>Alle Fragen mit offiziellen Abbildungen</span>
      </button>
    </div>

    ${bookmarkedQs.length || missedQs.length ? `
    <div class="group">
      <h3>Intelligente Wiederholung</h3>
      ${bookmarkedQs.length ? `
      <button class="btn bigbtn" data-set="bookmarks">
        <b>⭐ Gemerkte Fragen (${bookmarkedQs.length})</b><span>Ihre persönliche Merkliste</span>
      </button>` : ""}
      ${missedQs.length ? `
      <button class="btn bigbtn" data-set="missed">
        <b>Wiederholung: Häufig falsch beantwortet (${missedQs.length})</b><span>Gezieltes Schließen von Wissenslücken</span>
      </button>` : ""}
    </div>` : ""}

    <div class="group">
      <h3>Nach Themengebiet (Bundesweit)</h3>
      <div class="chips">
        ${Object.keys(cats).sort().map(c =>
          `<button class="btn" data-cat="${window.esc(c)}">${window.esc(c)}<span class="n">${cats[c]}</span></button>`
        ).join("")}
      </div>
    </div>`;

  // Checkbox Event Listeners
  const chkShuffleQ = window.el("toggle-shuffle-q");
  if (chkShuffleQ) {
    chkShuffleQ.onchange = e => {
      window.AppState.shuffleQuestions = e.target.checked;
      window.store.set("et.shuffleQuestions", window.AppState.shuffleQuestions);
      window.renderPicker();
    };
  }

  const chkShuffleOpt = window.el("toggle-shuffle-opt");
  if (chkShuffleOpt) {
    chkShuffleOpt.onchange = e => {
      window.AppState.shuffleOptions = e.target.checked;
      window.store.set("et.shuffleOptions", window.AppState.shuffleOptions);
    };
  }

  pickerEl.querySelectorAll("[data-set]").forEach(b => {
    b.onclick = () => {
      const k = b.dataset.set;
      if (k === "state")     window.startPractice(stateQs.slice(), `Landesfragen ${st.name}`);
      if (k === "random20")  window.startPractice(window.sample(window.ALL_QS, 20), "20 Zufallsfragen");
      if (k === "allgemein") window.startPractice(genQs.slice(), "300 Bundesweite Fragen");
      if (k === "images")    window.startPractice(window.ALL_QS.filter(q => q.image || q.type === "image"), "Bildfragen");
      if (k === "bookmarks") window.startPractice(bookmarkedQs.slice(), "Gemerkte Fragen");
      if (k === "missed")    window.startPractice(missedQs.slice(), "Falsch beantwortete Fragen");
    };
  });

  pickerEl.querySelectorAll("[data-cat]").forEach(b => {
    b.onclick = () => window.startPractice(genQs.filter(q => q.cat === b.dataset.cat), b.dataset.cat);
  });
};
