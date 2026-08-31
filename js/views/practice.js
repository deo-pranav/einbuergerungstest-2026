/* ================================================================== *
 * View: Practice Hub (Üben) & Spaced Repetition
 * ================================================================== */

const practiceOpts = title => ({
  mode: "practice",
  host: "prac-card",
  show: "prac-run",
  hide: "picker",
  title,
  prog: { count: "pr-count", bar: "pr-bar", score: "pr-score", timer: null }
});

function startPractice(list, title) {
  if (!list || !list.length) return;
  startSession(list, practiceOpts(title));
}

function renderPicker() {
  const pickerEl = el("picker");
  if (!pickerEl) return;

  const st = STATES.find(s => s.code === AppState.stateCode) || { name: "Bayern", startId: 311, endId: 320 };
  const stateQs = ALL_QS.filter(q => q.state === AppState.stateCode);
  const genQs = ALL_QS.filter(q => q.state === null);
  const bookmarkedQs = ALL_QS.filter(q => AppState.bookmarks.has(q.id));
  const missedQs = ALL_QS.filter(q => AppState.history[q.id] && AppState.history[q.id].wrong > AppState.history[q.id].right);

  const cats = {};
  genQs.forEach(q => {
    if (q.cat) cats[q.cat] = (cats[q.cat] || 0) + 1;
  });

  pickerEl.innerHTML = `
    <h2>Gezielt Üben</h2>
    <p class="lead">Lernen ohne Zeitdruck mit sofortiger Auflösung nach jeder Frage.</p>

    <div class="group">
      <h3>Landesfragen & Schnellstart</h3>
      <button class="btn btn-primary bigbtn" data-set="state">
        <b>Landesfragen ${esc(st.name)}</b><span>Die 10 landesspezifischen Fragen (Nr. ${st.startId}–${st.endId})</span>
      </button>
      <button class="btn bigbtn" data-set="random20">
        <b>20 Zufallsfragen</b><span>Gemischte Fragerunde</span>
      </button>
      <button class="btn bigbtn" data-set="allgemein">
        <b>Alle 300 bundesweiten Fragen</b><span>Reihenfolge 1 bis 300</span>
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
          `<button class="btn" data-cat="${esc(c)}">${esc(c)}<span class="n">${cats[c]}</span></button>`
        ).join("")}
      </div>
    </div>`;

  pickerEl.querySelectorAll("[data-set]").forEach(b => {
    b.onclick = () => {
      const k = b.dataset.set;
      if (k === "state")     startPractice(stateQs.slice(), `Landesfragen ${st.name}`);
      if (k === "random20")  startPractice(sample(ALL_QS, 20), "20 Zufallsfragen");
      if (k === "allgemein") startPractice(genQs.slice(), "300 Bundesweite Fragen");
      if (k === "images")    startPractice(ALL_QS.filter(q => q.image || q.type === "image"), "Bildfragen");
      if (k === "bookmarks") startPractice(bookmarkedQs.slice(), "Gemerkte Fragen");
      if (k === "missed")    startPractice(missedQs.slice(), "Falsch beantwortete Fragen");
    };
  });

  pickerEl.querySelectorAll("[data-cat]").forEach(b => {
    b.onclick = () => startPractice(genQs.filter(q => q.cat === b.dataset.cat), b.dataset.cat);
  });
}
