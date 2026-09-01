/* ================================================================== *
 * View: All 460 Questions Table & Search Explorer
 * ================================================================== */

window.renderTable = function() {
  const tbodyEl = window.el("alltbody");
  if (!tbodyEl) return;

  const searchEl = window.el("q-search");
  const poolEl = window.el("q-filter-pool");
  const countEl = window.el("all-count");

  const term = (searchEl && searchEl.value ? searchEl.value : "").trim().toLowerCase();
  const filterPool = (poolEl && poolEl.value ? poolEl.value : "all");

  const rows = window.ALL_QS.filter(q => {
    if (filterPool === "allgemein" && q.state !== null) return false;
    if (filterPool === "state-current" && q.state !== window.AppState.stateCode) return false;
    if (filterPool.startsWith("state-") && filterPool !== "state-current") {
      const code = filterPool.replace("state-", "");
      if (q.state !== code) return false;
    }

    if (!term) return true;

    const qDe = typeof q.q === "object" ? q.q.de : q.q;
    const c = q.options[q.correct];
    const cDe = typeof c === "object" ? c.de : c;
    const qSub = window.resolveQuestionSubText(q);
    const cSub = window.resolveOptionSubText(q, q.correct);

    const searchTokens = [
      q.id,
      qDe,
      qSub,
      cDe,
      cSub,
      ...q.options.map((o, idx) => (typeof o === "object" ? o.de : o) + " " + window.resolveOptionSubText(q, idx))
    ];

    return searchTokens.join(" ").toLowerCase().includes(term);
  });

  tbodyEl.innerHTML = rows.length ? rows.map(q => {
    const qDe = typeof q.q === "object" ? q.q.de : q.q;
    const c = q.options[q.correct];
    const cDe = typeof c === "object" ? c.de : c;
    const qSub = window.resolveQuestionSubText(q);
    const cSub = window.resolveOptionSubText(q, q.correct);

    return `<tr>
      <td class="n">${q.id}${q.state ? `<br><span class="cat-tag" style="font-size:0.65rem">${q.state}</span>` : ""}</td>
      <td class="q-cell">
        ${window.esc(qDe)}
        ${q.image ? `<span class="cat-tag">[Bild]</span>` : ""}
        ${qSub ? `<div class="table-sub ${window.AppState.lang}">${window.esc(qSub)}</div>` : ""}
      </td>
      <td class="a">
        ${window.esc(cDe)}
        ${cSub ? `<div class="table-sub ${window.AppState.lang}">${window.esc(cSub)}</div>` : ""}
      </td>
    </tr>`;
  }).join("") : `<tr><td colspan="3" style="text-align:center;padding:30px;color:var(--muted)">Keine Fragen gefunden.</td></tr>`;

  if (countEl) {
    countEl.textContent = `${rows.length} von ${window.ALL_QS.length} Fragen angezeigt. Ausdrucken zum Lernen: Strg + P.`;
  }
};
