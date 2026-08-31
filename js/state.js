/* ================================================================== *
 * State Management & Storage Module
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
  }
};

const AppState = {
  stateCode: store.get("et.state", "BY"),
  lang: store.get("et.lang", "en"),       // "de", "en", "hi"
  theme: store.get("et.theme", "light"),  // "light", "dark", "auto"
  bookmarks: new Set(store.get("et.bookmarks", [])),
  history: store.get("et.history", {})    // { [id]: { right: 0, wrong: 0 } }
};

function saveBookmarks() {
  store.set("et.bookmarks", Array.from(AppState.bookmarks));
}

function saveHistory() {
  store.set("et.history", AppState.history);
}

function recordAnswer(qid, ok) {
  if (!AppState.history[qid]) {
    AppState.history[qid] = { right: 0, wrong: 0 };
  }
  if (ok) AppState.history[qid].right++;
  else AppState.history[qid].wrong++;
  saveHistory();
}
