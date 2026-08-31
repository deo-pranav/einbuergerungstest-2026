/* ================================================================== *
 * View: Exam Simulator
 * ================================================================== */

function renderExamIntro() {
  const best = store.get("et.bestExam", null);
  const st = STATES.find(s => s.code === AppState.stateCode) || { name: "Bayern" };
  const examIntroEl = el("exam-intro");
  if (!examIntroEl) return;

  examIntroEl.innerHTML = `
    <h2>Offizielle Prüfungssimulation</h2>
    <p class="lead">33 Fragen in 60 Minuten: <strong>30 bundesweite Fragen</strong> +
       <strong>3 Fragen für ${esc(st.name)}</strong>. Bestanden ab <strong>17 richtigen</strong> Antworten.</p>
    ${best != null ? `<p class="lead" style="color:var(--good);font-weight:600">Ihr bisher bestes Ergebnis: ${best}/33</p>` : ""}
    <button class="btn btn-primary bigbtn" id="go-exam">
      <b>Prüfung jetzt starten</b><span>33 Fragen · 60 Minuten Zeitlimit · Bestehensgrenze 17</span>
    </button>`;

  el("go-exam").onclick = startExam;
}

function startExam() {
  const genQs = ALL_QS.filter(q => q.state === null);
  const stateQs = ALL_QS.filter(q => q.state === AppState.stateCode);
  const examList = shuffled(sample(genQs, 30).concat(sample(stateQs, 3)));

  el("exam-intro").hidden = true;
  startSession(examList, {
    mode: "exam", host: "exam-card", show: "exam-run", hide: "exam-intro",
    prog: { count: "ex-count", bar: "ex-bar", score: "ex-score", timer: "ex-timer" }
  });
  selectTab("exam");
}
