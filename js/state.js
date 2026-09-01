/* ================================================================== *
 * State Management & Local Storage Module (Zero-Signup Offline DB)
 * ================================================================== */

const DB = window.QUESTIONS_DATABASE || { states: [], questions: [] };
const ALL_QS = DB.questions || [];
const STATES = DB.states || [];

const el = id => document.getElementById(id);
const esc = s => String(s == null ? "" : s)
  .replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const store = {
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

const AppState = {
  stateCode: store.get("et.state", "BY"),
  lang: store.get("et.lang", "en"),               // "de", "en", "hi"
  theme: store.get("et.theme", "light"),          // "light", "dark", "auto"
  bookmarks: new Set(store.get("et.bookmarks", [])),
  history: store.get("et.history", {}),           // { [id]: { right: 0, wrong: 0, streak: 0, last: 0 } }
  examHistory: store.get("et.examHistory", []),   // [ { id, date, score, total, pass, stateCode, duration } ]
  lastMissed: store.get("et.lastMissed", [])      // [ qids missed in last exam ]
};

function saveBookmarks() {
  store.set("et.bookmarks", Array.from(AppState.bookmarks));
}

function saveHistory() {
  store.set("et.history", AppState.history);
}

function saveExamHistory() {
  store.set("et.examHistory", AppState.examHistory);
}

function recordAnswer(qid, ok) {
  if (!AppState.history[qid]) {
    AppState.history[qid] = { right: 0, wrong: 0, streak: 0, last: Date.now() };
  }
  const h = AppState.history[qid];
  h.last = Date.now();
  if (ok) {
    h.right = (h.right || 0) + 1;
    h.streak = (h.streak || 0) + 1;
  } else {
    h.wrong = (h.wrong || 0) + 1;
    h.streak = 0;
  }
  saveHistory();
}

function recordExam(score, total, stateCode, missedIds = []) {
  const isPass = score >= 17;
  const entry = {
    id: Date.now(),
    date: new Date().toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
    score,
    total,
    pass: isPass,
    stateCode: stateCode || AppState.stateCode
  };
  AppState.examHistory.unshift(entry);
  if (AppState.examHistory.length > 30) AppState.examHistory.pop(); // keep last 30
  saveExamHistory();

  AppState.lastMissed = missedIds;
  store.set("et.lastMissed", AppState.lastMissed);

  const best = store.get("et.bestExam", 0);
  if (score > best) store.set("et.bestExam", score);
}

// Compute Mastery Status for all relevant questions (relevant = 300 nationwide + 10 state)
function getMasteryStats() {
  const relevantQs = ALL_QS.filter(q => q.state === null || q.state === AppState.stateCode);
  
  let mastered = 0;   // streak >= 2
  let learning = 0;   // attempted, right >= wrong
  let struggling = 0; // wrong > right
  let unseen = 0;     // never answered

  relevantQs.forEach(q => {
    const h = AppState.history[q.id];
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
    total: relevantQs.length, // 310
    mastered,
    learning,
    struggling,
    unseen,
    bookmarked: ALL_QS.filter(q => AppState.bookmarks.has(q.id)).length
  };
}

// Compute Readiness Score (0% - 100%)
function getReadinessScore() {
  const { total, mastered, learning, struggling } = getMasteryStats();
  if (total === 0) return 0;
  
  // Weight: Mastered (1.0), Learning (0.5), Struggling (0.1)
  const score = (mastered * 1.0 + learning * 0.5 + struggling * 0.1) / total * 100;
  return Math.min(100, Math.round(score));
}

// Category breakdown
function getCategoryBreakdown() {
  const cats = {};
  const relevantQs = ALL_QS.filter(q => q.state === null || q.state === AppState.stateCode);
  relevantQs.forEach(q => {
    const catName = q.state ? `Landesfragen (${AppState.stateCode})` : (q.cat || "Allgemein");
    if (!cats[catName]) {
      cats[catName] = { total: 0, right: 0, wrong: 0 };
    }
    cats[catName].total++;
    const h = AppState.history[q.id];
    if (h) {
      cats[catName].right += (h.right || 0);
      cats[catName].wrong += (h.wrong || 0);
    }
  });

  return cats;
}

// Export / Import Backup Data
function exportProgressJson() {
  const data = {
    version: "2026.1",
    exportedAt: new Date().toISOString(),
    stateCode: AppState.stateCode,
    bookmarks: Array.from(AppState.bookmarks),
    history: AppState.history,
    examHistory: AppState.examHistory,
    bestExam: store.get("et.bestExam", 0)
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `einbuergerungstest-fortschritt-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importProgressJson(file, callback) {
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      if (data.bookmarks && Array.isArray(data.bookmarks)) {
        AppState.bookmarks = new Set(data.bookmarks);
        saveBookmarks();
      }
      if (data.history && typeof data.history === "object") {
        AppState.history = data.history;
        saveHistory();
      }
      if (data.examHistory && Array.isArray(data.examHistory)) {
        AppState.examHistory = data.examHistory;
        saveExamHistory();
      }
      if (data.bestExam != null) {
        store.set("et.bestExam", data.bestExam);
      }
      if (data.stateCode) {
        AppState.stateCode = data.stateCode;
        store.set("et.state", AppState.stateCode);
      }
      if (callback) callback(true);
    } catch (err) {
      if (callback) callback(false, err);
    }
  };
  reader.readAsText(file);
}

function resetAllProgress() {
  AppState.bookmarks.clear();
  AppState.history = {};
  AppState.examHistory = [];
  AppState.lastMissed = [];
  store.set("et.bookmarks", []);
  store.set("et.history", {});
  store.set("et.examHistory", []);
  store.set("et.lastMissed", []);
  store.remove("et.bestExam");
}
