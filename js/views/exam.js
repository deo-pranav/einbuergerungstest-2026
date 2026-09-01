/* ================================================================== *
 * View: Exam Simulator
 * ================================================================== */

window.renderExamIntro = function() {
  const best = window.store ? window.store.get("et.bestExam", null) : null;
  const st = window.STATES.find(s => s.code === window.AppState.stateCode) || { name: "Bayern" };
  const examIntroEl = window.el("exam-intro");
  if (!examIntroEl) return;

  examIntroEl.innerHTML = `
    <h2>Offizielle Prüfungssimulation</h2>
    <p class="lead">33 Fragen in 60 Minuten: <strong>30 bundesweite Fragen</strong> +
       <strong>3 Fragen für ${window.esc(st.name)}</strong>. Bestanden ab <strong>17 richtigen</strong> Antworten.</p>
    ${best != null ? `<p class="lead" style="color:var(--good);font-weight:600">Ihr bisher bestes Ergebnis: ${best}/33</p>` : ""}
    <button class="btn btn-primary bigbtn" id="go-exam">
      <b>Prüfung jetzt starten</b><span>33 Fragen · 60 Minuten Zeitlimit · Bestehensgrenze 17</span>
    </button>`;

  const goExam = window.el("go-exam");
  if (goExam) goExam.onclick = window.startExam;
};

window.startExam = function() {
  const genQs = window.ALL_QS.filter(q => q.state === null);
  const stateQs = window.ALL_QS.filter(q => q.state === window.AppState.stateCode);
  const examList = window.shuffled(window.sample(genQs, 30).concat(window.sample(stateQs, 3)));

  const introEl = window.el("exam-intro");
  if (introEl) introEl.hidden = true;
  window.startSession(examList, {
    mode: "exam", host: "exam-card", show: "exam-run", hide: "exam-intro",
    prog: { count: "ex-count", bar: "ex-bar", score: "ex-score", timer: "ex-timer" }
  });
  window.selectTab("exam");
};
