/* ================================================================== *
 * Session Runner (Exam & Practice Engine)
 * ================================================================== */

window.LETTERS = ["A", "B", "C", "D"];
window.EXAM_SECONDS = 60 * 60;
window.EXAM_PASS = 17;

window.S = null;
let timerId = null;

window.shuffled = function(arr) {
  if (!arr) return [];
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

window.sample = function(arr, n) {
  return window.shuffled(arr).slice(0, n);
};

window.startSession = function(list, opts) {
  window.stopTimer();
  window.S = {
    list,
    mode: opts.mode,
    host: window.el(opts.host),
    prog: opts.prog,
    title: opts.title || "",
    pos: 0,
    results: [],
    answered: false,
    left: opts.mode === "exam" ? window.EXAM_SECONDS : null,
    expired: false
  };

  if (opts.show && window.el(opts.show)) window.el(opts.show).hidden = false;
  if (opts.hide && window.el(opts.hide)) window.el(opts.hide).hidden = true;
  if (window.S.mode === "exam") window.startTimer();
  window.renderQ();
};

window.startTimer = function() {
  window.paintTimer();
  timerId = setInterval(() => {
    if (!window.S) return window.stopTimer();
    window.S.left--;
    window.paintTimer();
    if (window.S.left <= 0) {
      window.S.expired = true;
      window.stopTimer();
      window.renderResult();
    }
  }, 1000);
};

window.stopTimer = function() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
};

window.paintTimer = function() {
  if (!window.S || !window.S.prog || !window.S.prog.timer) return;
  const t = window.el(window.S.prog.timer);
  if (!t) return;
  const m = Math.floor(Math.max(0, window.S.left) / 60);
  const s = Math.max(0, window.S.left) % 60;
  t.textContent = `${m}:${String(s).padStart(2, "0")}`;
  t.classList.toggle("low", window.S.left <= 300);
};

window.paintProgress = function() {
  if (!window.S || !window.S.prog) return;
  const right = window.S.results.filter(r => r.ok).length;
  const countEl = window.el(window.S.prog.count);
  if (countEl) countEl.textContent = `Frage ${Math.min(window.S.pos + 1, window.S.list.length)} von ${window.S.list.length}`;
  const barEl = window.el(window.S.prog.bar);
  if (barEl) barEl.style.width = (window.S.pos / window.S.list.length * 100) + "%";
  const scoreEl = window.el(window.S.prog.score);
  if (scoreEl) scoreEl.textContent = `${right} richtig`;
};

window.renderQ = function() {
  if (!window.S) return;
  if (window.S.pos >= window.S.list.length) return window.renderResult();

  const q = window.S.list[window.S.pos];
  window.S.answered = false;
  window.paintProgress();

  const isStarred = window.AppState.bookmarks.has(q.id);
  const qDe = typeof q.q === "object" ? q.q.de : q.q;
  const qSub = window.resolveQuestionSubText(q);
  const curStateObj = window.STATES.find(s => s.code === q.state);
  const badge = q.state
    ? `Landesfrage ${curStateObj ? curStateObj.name : q.state} · Nr. ${q.id}`
    : `Bundesweite Frage · Nr. ${q.id}`;

  // Check if options are numbered image references (Bild 1..4 or 1..4)
  const isImageNumbered = q.options.every(o => {
    const txt = typeof o === "object" ? o.de : o;
    return /^(bild\s*)?[1-4]$/i.test((txt || "").trim());
  });

  let displayOptions;
  if (!isImageNumbered && window.AppState.shuffleOptions) {
    displayOptions = window.shuffled(q.options.map((opt, origIdx) => ({ opt, origIdx, isCorrect: origIdx === q.correct })));
  } else {
    displayOptions = q.options.map((opt, origIdx) => ({ opt, origIdx, isCorrect: origIdx === q.correct }));
  }
  window.S.currentDisplayOptions = displayOptions;

  window.S.host.innerHTML = `
    <div class="q-header">
      <div class="q-badges">
        <span class="qnum">${window.esc(badge)}</span>
        ${q.cat ? `<span class="cat-tag">${window.esc(q.cat)}</span>` : ""}
      </div>
      <button class="star-btn ${isStarred ? "starred" : ""}" id="star-btn" title="Frage merken / Bookmark">
        ${isStarred ? "★" : "☆"}
      </button>
    </div>

    <p class="qtext">${window.esc(qDe)}</p>
    ${qSub ? `<p class="qtext-sub ${window.AppState.lang}">${window.esc(qSub)}</p>` : ""}

    ${q.image ? `<div class="qimg"><img src="${window.esc(q.image)}" alt="Abbildung zu Frage ${q.id}">
        ${q.credit ? `<div class="credit">${window.esc(q.credit)}</div>` : ""}</div>` : ""}

    <div class="options">
      ${displayOptions.map((item, i) => {
        const oDe = typeof item.opt === "object" ? item.opt.de : item.opt;
        const oSub = window.resolveOptionSubText(q, item.origIdx);
        return `
          <button class="opt" data-i="${i}">
            <span class="key">${window.LETTERS[i]}</span>
            <div class="opt-content">
              <span class="label">${window.esc(oDe)}</span>
              ${oSub ? `<span class="opt-sub ${window.AppState.lang}">${window.esc(oSub)}</span>` : ""}
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
  const starBtn = window.el("star-btn");
  if (starBtn) {
    starBtn.addEventListener("click", () => {
      if (window.AppState.bookmarks.has(q.id)) window.AppState.bookmarks.delete(q.id);
      else window.AppState.bookmarks.add(q.id);
      window.saveBookmarks();
      window.renderQ();
    });
  }

  // Options click
  window.S.host.querySelectorAll(".opt").forEach(b =>
    b.addEventListener("click", () => window.pick(+b.dataset.i)));

  const nextBtn = window.el("next");
  if (nextBtn) nextBtn.addEventListener("click", window.advance);

  const ab = window.el("abort");
  if (ab) {
    ab.addEventListener("click", () => {
      window.stopTimer();
      if (window.S.mode === "exam") {
        window.renderResult();
      } else {
        window.el("prac-run").hidden = true;
        window.el("picker").hidden = false;
        window.renderPicker();
        window.S = null;
      }
    });
  }
};

window.pick = function(i) {
  if (!window.S || window.S.answered) return;
  window.S.answered = true;
  const q = window.S.list[window.S.pos];
  const displayOptions = window.S.currentDisplayOptions || q.options.map((opt, origIdx) => ({ opt, origIdx, isCorrect: origIdx === q.correct }));
  
  const chosen = displayOptions[i];
  const ok = chosen ? chosen.isCorrect : false;
  window.S.results.push({ id: q.id, picked: chosen ? chosen.origIdx : i, ok });

  window.recordAnswer(q.id, ok);

  const correctDisplayIdx = displayOptions.findIndex(d => d.isCorrect);

  window.S.host.querySelectorAll(".opt").forEach((b, j) => {
    b.disabled = true;
    if (j === correctDisplayIdx) { b.classList.add("correct"); b.querySelector(".mark").textContent = "✓"; }
    else if (j === i)            { b.classList.add("wrong");   b.querySelector(".mark").textContent = "✗"; }
  });

  const c = q.options[q.correct];
  const cDe = typeof c === "object" ? c.de : c;
  const cSub = window.resolveOptionSubText(q, q.correct);
  const correctLetter = window.LETTERS[correctDisplayIdx >= 0 ? correctDisplayIdx : q.correct];
  window.el("fb").innerHTML = `
    <div class="feedback ${ok ? "ok" : "no"}">
      <h3>${ok ? "Richtig!" : `Falsch — richtig ist ${correctLetter}: ${window.esc(cDe)}`}</h3>
      ${cSub && !ok ? `<div class="sub ${window.AppState.lang}">Correct answer: ${window.esc(cSub)}</div>` : ""}
    </div>`;

  const n = window.el("next");
  if (n) {
    n.hidden = false;
    n.focus();
  }
  const scoreEl = window.el(window.S.prog.score);
  if (scoreEl) scoreEl.textContent = `${window.S.results.filter(r => r.ok).length} richtig`;
};

window.advance = function() {
  if (!window.S) return;
  window.S.pos++;
  window.renderQ();
};

window.renderResult = function() {
  window.stopTimer();
  const right = window.S.results.filter(r => r.ok).length;
  const asked = window.S.list.length;
  const wrong = window.S.results.filter(r => !r.ok);
  const isExam = window.S.mode === "exam";
  const pass = isExam ? right >= window.EXAM_PASS : right >= Math.ceil(window.S.results.length * 0.52);

  const barEl = window.el(window.S.prog.bar);
  if (barEl) barEl.style.width = "100%";
  const countEl = window.el(window.S.prog.count);
  if (countEl) countEl.textContent = window.S.expired ? "Zeit abgelaufen" : "Abgeschlossen";
  const scoreEl = window.el(window.S.prog.score);
  if (scoreEl) scoreEl.textContent = `${right} von ${asked}`;

  if (isExam) {
    const wrongIds = wrong.map(r => r.id);
    window.recordExam(right, asked, window.AppState.stateCode, wrongIds);
  }

  window.S.host.innerHTML = `
    <div class="score">
      <div class="big">${right}<span style="font-size:1.4rem;color:var(--muted)">/${asked}</span></div>
      <div class="verdict ${pass ? "pass" : "fail"}">
        ${isExam
          ? (pass ? "Bestanden! (17 von 33 genügen im echten Test)" : `Nicht bestanden (${window.EXAM_PASS} von 33 sind nötig).`)
          : (pass ? "Hervorragendes Ergebnis!" : "Übung macht den Meister — weiter dranbleiben!")}
      </div>
    </div>
    ${wrong.length ? `
      <ul class="misses">
        ${wrong.map(r => {
          const q = window.ALL_QS.find(x => x.id === r.id);
          const qDe = typeof q.q === "object" ? q.q.de : q.q;
          const c = q.options[q.correct];
          const cDe = typeof c === "object" ? c.de : c;
          const qSub = window.resolveQuestionSubText(q);
          const cSub = window.resolveOptionSubText(q, q.correct);
          return `<li>
            Nr. ${q.id} — ${window.esc(qDe)}
            ${qSub ? `<div class="table-sub ${window.AppState.lang}">${window.esc(qSub)}</div>` : ""}
            <div style="margin-top:4px">Richtig: <b>${window.esc(cDe)}</b>${cSub ? ` <span class="table-sub ${window.AppState.lang}">(${window.esc(cSub)})</span>` : ""}</div>
          </li>`;
        }).join("")}
      </ul>` : `<p style="text-align:center;color:var(--muted);margin-top:16px">Alles richtig! Ausgezeichnet.</p>`}
    <div class="actions" style="justify-content:center">
      <button class="btn btn-primary" id="again">${isExam ? "Neue Prüfung" : "Noch einmal"}</button>
      ${wrong.length ? `<button class="btn" id="retry">Nur die ${wrong.length} falschen üben</button>` : ""}
      <button class="btn" id="back">Zurück zur Übersicht</button>
    </div>`;

  const againBtn = window.el("again");
  if (againBtn) {
    againBtn.onclick = () => {
      if (isExam) window.startExam();
      else window.startPractice(window.S.list, window.S.title);
    };
  }

  const retryBtn = window.el("retry");
  if (retryBtn) {
    retryBtn.onclick = () => {
      const wrongList = wrong.map(r => window.ALL_QS.find(x => x.id === r.id));
      window.startPractice(wrongList, "Falsch beantwortete Fragen");
    };
  }

  const backBtn = window.el("back");
  if (backBtn) {
    backBtn.onclick = () => {
      if (isExam) {
        window.el("exam-run").hidden = true;
        window.el("exam-intro").hidden = false;
        window.renderExamIntro();
      } else {
        window.el("prac-run").hidden = true;
        window.el("picker").hidden = false;
        window.renderPicker();
      }
      window.S = null;
    };
  }
};
