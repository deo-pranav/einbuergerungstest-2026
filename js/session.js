/* ================================================================== *
 * Session Runner (Exam & Practice Engine)
 * ================================================================== */

const LETTERS = ["A", "B", "C", "D"];
const EXAM_SECONDS = 60 * 60;
const EXAM_PASS = 17;

window.S = null;
let timerId = null;

function shuffled(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function sample(arr, n) {
  return shuffled(arr).slice(0, n);
}

function startSession(list, opts) {
  stopTimer();
  window.S = {
    list,
    mode: opts.mode,
    host: el(opts.host),
    prog: opts.prog,
    title: opts.title || "",
    pos: 0,
    results: [],
    answered: false,
    left: opts.mode === "exam" ? EXAM_SECONDS : null,
    expired: false
  };

  if (opts.show) el(opts.show).hidden = false;
  if (opts.hide) el(opts.hide).hidden = true;
  if (window.S.mode === "exam") startTimer();
  renderQ();
}

function startTimer() {
  paintTimer();
  timerId = setInterval(() => {
    if (!window.S) return stopTimer();
    window.S.left--;
    paintTimer();
    if (window.S.left <= 0) {
      window.S.expired = true;
      stopTimer();
      renderResult();
    }
  }, 1000);
}

function stopTimer() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
}

function paintTimer() {
  const t = el(window.S.prog.timer);
  if (!t) return;
  const m = Math.floor(Math.max(0, window.S.left) / 60);
  const s = Math.max(0, window.S.left) % 60;
  t.textContent = `${m}:${String(s).padStart(2, "0")}`;
  t.classList.toggle("low", window.S.left <= 300);
}

function paintProgress() {
  const right = window.S.results.filter(r => r.ok).length;
  el(window.S.prog.count).textContent = `Frage ${Math.min(window.S.pos + 1, window.S.list.length)} von ${window.S.list.length}`;
  el(window.S.prog.bar).style.width = (window.S.pos / window.S.list.length * 100) + "%";
  el(window.S.prog.score).textContent = `${right} richtig`;
}

function renderQ() {
  if (!window.S) return;
  if (window.S.pos >= window.S.list.length) return renderResult();

  const q = window.S.list[window.S.pos];
  window.S.answered = false;
  paintProgress();

  const isStarred = AppState.bookmarks.has(q.id);
  const qSub = resolveSubText(q.q);
  const curStateObj = STATES.find(s => s.code === q.state);
  const badge = q.state
    ? `Landesfrage ${curStateObj ? curStateObj.name : q.state} · Nr. ${q.id}`
    : `Bundesweite Frage · Nr. ${q.id}`;

  window.S.host.innerHTML = `
    <div class="q-header">
      <div class="q-badges">
        <span class="qnum">${esc(badge)}</span>
        ${q.cat ? `<span class="cat-tag">${esc(q.cat)}</span>` : ""}
      </div>
      <button class="star-btn ${isStarred ? "starred" : ""}" id="star-btn" title="Frage merken / Bookmark">
        ${isStarred ? "★" : "☆"}
      </button>
    </div>

    <p class="qtext">${esc(q.q.de)}</p>
    ${qSub ? `<p class="qtext-sub ${AppState.lang}">${esc(qSub)}</p>` : ""}

    ${q.image ? `<div class="qimg"><img src="${esc(q.image)}" alt="Abbildung zu Frage ${q.id}">
        ${q.credit ? `<div class="credit">${esc(q.credit)}</div>` : ""}</div>` : ""}

    <div class="options">
      ${q.options.map((o, i) => {
        const oSub = resolveSubText(o);
        return `
          <button class="opt" data-i="${i}">
            <span class="key">${LETTERS[i]}</span>
            <div class="opt-content">
              <span class="label">${esc(o.de)}</span>
              ${oSub ? `<span class="opt-sub ${AppState.lang}">${esc(oSub)}</span>` : ""}
            </div>
            <span class="mark"></span>
          </button>`;
      }).join("")}
    </div>

    <div id="fb"></div>

    <div class="actions">
      <button class="btn btn-primary" id="next" hidden>${window.S.pos + 1 === window.S.list.length ? "Ergebnis anzeigen" : "Weiter"}</button>
      <button class="btn" id="abort">${window.S.mode === "exam" ? "Prüfung beenden" : "← Übung beenden"}</button>
      <span class="hint">Tastatur: 1–4 oder A–D, Enter weiter.</span>
    </div>`;

  // Star / Bookmark Button
  el("star-btn").addEventListener("click", () => {
    if (AppState.bookmarks.has(q.id)) AppState.bookmarks.delete(q.id);
    else AppState.bookmarks.add(q.id);
    saveBookmarks();
    renderQ();
  });

  // Options click
  window.S.host.querySelectorAll(".opt").forEach(b =>
    b.addEventListener("click", () => pick(+b.dataset.i)));

  el("next").addEventListener("click", advance);

  const ab = el("abort");
  if (ab) {
    ab.addEventListener("click", () => {
      stopTimer();
      if (window.S.mode === "exam") {
        renderResult();
      } else {
        el("prac-run").hidden = true;
        el("picker").hidden = false;
        renderPicker();
        window.S = null;
      }
    });
  }
}

function pick(i) {
  if (!window.S || window.S.answered) return;
  window.S.answered = true;
  const q = window.S.list[window.S.pos];
  const ok = i === q.correct;
  window.S.results.push({ id: q.id, picked: i, ok });

  recordAnswer(q.id, ok);

  window.S.host.querySelectorAll(".opt").forEach((b, j) => {
    b.disabled = true;
    if (j === q.correct) { b.classList.add("correct"); b.querySelector(".mark").textContent = "✓"; }
    else if (j === i)    { b.classList.add("wrong");   b.querySelector(".mark").textContent = "✗"; }
  });

  const c = q.options[q.correct];
  const cSub = resolveSubText(c);
  el("fb").innerHTML = `
    <div class="feedback ${ok ? "ok" : "no"}">
      <h3>${ok ? "Richtig!" : `Falsch — richtig ist ${LETTERS[q.correct]}: ${esc(c.de)}`}</h3>
      ${cSub && !ok ? `<div class="sub ${AppState.lang}">Correct answer: ${esc(cSub)}</div>` : ""}
    </div>`;

  const n = el("next");
  n.hidden = false;
  n.focus();
  el(window.S.prog.score).textContent = `${window.S.results.filter(r => r.ok).length} richtig`;
}

function advance() {
  if (!window.S) return;
  window.S.pos++;
  renderQ();
}

function renderResult() {
  stopTimer();
  const right = window.S.results.filter(r => r.ok).length;
  const asked = window.S.list.length;
  const wrong = window.S.results.filter(r => !r.ok);
  const isExam = window.S.mode === "exam";
  const pass = isExam ? right >= EXAM_PASS : right >= Math.ceil(window.S.results.length * 0.52);

  el(window.S.prog.bar).style.width = "100%";
  el(window.S.prog.count).textContent = window.S.expired ? "Zeit abgelaufen" : "Abgeschlossen";
  el(window.S.prog.score).textContent = `${right} von ${asked}`;

  if (isExam) {
    const best = store.get("et.bestExam", 0);
    if (right > best) store.set("et.bestExam", right);
  }

  window.S.host.innerHTML = `
    <div class="score">
      <div class="big">${right}<span style="font-size:1.4rem;color:var(--muted)">/${asked}</span></div>
      <div class="verdict ${pass ? "pass" : "fail"}">
        ${isExam
          ? (pass ? "Bestanden! (17 von 33 genügen im echten Test)" : `Nicht bestanden (${EXAM_PASS} von 33 sind nötig).`)
          : (pass ? "Hervorragendes Ergebnis!" : "Übung macht den Meister — weiter dranbleiben!")}
      </div>
    </div>
    ${wrong.length ? `
      <ul class="misses">
        ${wrong.map(r => {
          const q = ALL_QS.find(x => x.id === r.id);
          const c = q.options[q.correct];
          const qSub = resolveSubText(q.q);
          const cSub = resolveSubText(c);
          return `<li>
            Nr. ${q.id} — ${esc(q.q.de)}
            ${qSub ? `<div class="table-sub ${AppState.lang}">${esc(qSub)}</div>` : ""}
            <div style="margin-top:4px">Richtig: <b>${esc(c.de)}</b>${cSub ? ` <span class="table-sub ${AppState.lang}">(${esc(cSub)})</span>` : ""}</div>
          </li>`;
        }).join("")}
      </ul>` : `<p style="text-align:center;color:var(--muted);margin-top:16px">Alles richtig! Ausgezeichnet.</p>`}
    <div class="actions" style="justify-content:center">
      <button class="btn btn-primary" id="again">${isExam ? "Neue Prüfung" : "Noch einmal"}</button>
      ${wrong.length ? `<button class="btn" id="retry">Nur die ${wrong.length} falschen üben</button>` : ""}
      <button class="btn" id="back">Zurück zur Übersicht</button>
    </div>`;

  const cfg = window.S;
  el("again").onclick = () => isExam ? startExam() : startSession(shuffled(cfg.list), practiceOpts(cfg.title));

  const rt = el("retry");
  if (rt) rt.onclick = () => {
    const list = wrong.map(r => ALL_QS.find(x => x.id === r.id));
    startSession(list, practiceOpts("Falsch beantwortete Fragen"));
    selectTab("practice");
  };

  el("back").onclick = () => {
    stopTimer();
    if (isExam) {
      el("exam-run").hidden = true;
      el("exam-intro").hidden = false;
      renderExamIntro();
    } else {
      el("prac-run").hidden = true;
      el("picker").hidden = false;
      renderPicker();
    }
    window.S = null;
  };
}
