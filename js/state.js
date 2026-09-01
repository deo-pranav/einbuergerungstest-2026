/* ================================================================== *
 * State Management & Local Storage Module (Zero-Signup Offline DB)
 * ================================================================== */

window.DB = window.QUESTIONS_DATABASE || { states: [], questions: [] };
window.ALL_QS = window.DB.questions || [];
window.STATES = window.DB.states || [];

window.el = function(id) {
  return document.getElementById(id);
};

window.esc = function(s) {
  return String(s == null ? "" : s)
    .replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
};

window.store = {
  get(k, d) {
    try {
      const v = localStorage.getItem(k);
      return v == null ? d : JSON.parse(v);
    } catch (e) {
      return d;
    }
  },
  set(k, v) {
    try {
      localStorage.setItem(k, JSON.stringify(v));
    } catch (e) {}
  },
  remove(k) {
    try {
      localStorage.removeItem(k);
    } catch (e) {}
  }
};

window.AppState = {
  stateCode: window.store.get("et.state", "BY"),
  lang: window.store.get("et.lang", "de"),               // "de", "en", "hi"
  theme: window.store.get("et.theme", "light"),          // "light", "dark", "auto"
  bookmarks: new Set(window.store.get("et.bookmarks", [])),
  history: window.store.get("et.history", {}),           // { [id]: { right: 0, wrong: 0, streak: 0, last: 0 } }
  examHistory: window.store.get("et.examHistory", []),   // [ { id, date, score, total, pass, stateCode, duration } ]
  lastMissed: window.store.get("et.lastMissed", []),     // [ qids missed in last exam ]
  lastCustomLang: window.store.get("et.lastCustomLang", "ar"), // Last selected non-de/en language
  shuffleQuestions: window.store.get("et.shuffleQuestions", true),
  shuffleOptions: window.store.get("et.shuffleOptions", true)
};

window.saveBookmarks = function() {
  window.store.set("et.bookmarks", Array.from(window.AppState.bookmarks));
};

window.saveHistory = function() {
  window.store.set("et.history", window.AppState.history);
};

window.saveExamHistory = function() {
  window.store.set("et.examHistory", window.AppState.examHistory);
};

window.recordAnswer = function(qid, ok) {
  if (!window.AppState.history[qid]) {
    window.AppState.history[qid] = { right: 0, wrong: 0, streak: 0, last: Date.now() };
  }
  const h = window.AppState.history[qid];
  h.last = Date.now();
  if (ok) {
    h.right = (h.right || 0) + 1;
    h.streak = (h.streak || 0) + 1;
  } else {
    h.wrong = (h.wrong || 0) + 1;
    h.streak = 0;
  }
  window.saveHistory();
};

window.recordExam = function(score, total, stateCode, missedIds = []) {
  const isPass = score >= 17;
  const entry = {
    id: Date.now(),
    date: new Date().toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
    score,
    total,
    pass: isPass,
    stateCode: stateCode || window.AppState.stateCode
  };
  window.AppState.examHistory.unshift(entry);
  if (window.AppState.examHistory.length > 30) window.AppState.examHistory.pop();
  window.saveExamHistory();

  window.AppState.lastMissed = missedIds;
  window.store.set("et.lastMissed", window.AppState.lastMissed);

  const best = window.store.get("et.bestExam", 0);
  if (score > best) window.store.set("et.bestExam", score);
};

window.getMasteryStats = function() {
  const relevantQs = window.ALL_QS.filter(q => q.state === null || q.state === window.AppState.stateCode);
  
  let mastered = 0;
  let learning = 0;
  let struggling = 0;
  let unseen = 0;

  relevantQs.forEach(q => {
    const h = window.AppState.history[q.id];
    if (!h || (h.right === 0 && h.wrong === 0)) {
      unseen++;
    } else if (h.wrong > h.right) {
      struggling++;
    } else if (h.streak >= 2) {
      mastered++;
    } else {
      learning++;
    }
  });

  return {
    total: relevantQs.length,
    mastered,
    learning,
    struggling,
    unseen,
    bookmarked: window.ALL_QS.filter(q => window.AppState.bookmarks.has(q.id)).length
  };
};

window.getReadinessScore = function() {
  const { total, mastered, learning, struggling } = window.getMasteryStats();
  if (total === 0) return 0;
  const score = (mastered * 1.0 + learning * 0.5 + struggling * 0.1) / total * 100;
  return Math.min(100, Math.round(score));
};

window.getCategoryBreakdown = function() {
  const cats = {};
  const relevantQs = window.ALL_QS.filter(q => q.state === null || q.state === window.AppState.stateCode);
  relevantQs.forEach(q => {
    const catName = q.state ? `Landesfragen (${window.AppState.stateCode})` : (q.cat || "Allgemein");
    if (!cats[catName]) {
      cats[catName] = { total: 0, right: 0, wrong: 0 };
    }
    cats[catName].total++;
    const h = window.AppState.history[q.id];
    if (h) {
      cats[catName].right += (h.right || 0);
      cats[catName].wrong += (h.wrong || 0);
    }
  });

  return cats;
};

window.exportProgressJson = function() {
  const data = {
    version: "2026.1",
    exportedAt: new Date().toISOString(),
    stateCode: window.AppState.stateCode,
    bookmarks: Array.from(window.AppState.bookmarks),
    history: window.AppState.history,
    examHistory: window.AppState.examHistory,
    bestExam: window.store.get("et.bestExam", 0)
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `einbuergerungstest-fortschritt-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
};

window.importProgressJson = function(file, callback) {
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      if (data.bookmarks && Array.isArray(data.bookmarks)) {
        window.AppState.bookmarks = new Set(data.bookmarks);
        window.saveBookmarks();
      }
      if (data.history && typeof data.history === "object") {
        window.AppState.history = data.history;
        window.saveHistory();
      }
      if (data.examHistory && Array.isArray(data.examHistory)) {
        window.AppState.examHistory = data.examHistory;
        window.saveExamHistory();
      }
      if (data.bestExam != null) {
        window.store.set("et.bestExam", data.bestExam);
      }
      if (data.stateCode) {
        window.AppState.stateCode = data.stateCode;
        window.store.set("et.state", window.AppState.stateCode);
      }
      if (callback) callback(true);
    } catch (err) {
      if (callback) callback(false, err);
    }
  };
  reader.readAsText(file);
};

window.resetAllProgress = function() {
  window.AppState.bookmarks.clear();
  window.AppState.history = {};
  window.AppState.examHistory = [];
  window.AppState.lastMissed = [];
  window.store.set("et.bookmarks", []);
  window.store.set("et.history", {});
  window.store.set("et.examHistory", []);
  window.store.set("et.lastMissed", []);
  window.store.remove("et.bestExam");
};
