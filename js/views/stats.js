/* ================================================================== *
 * View: Progress Dashboard & Learning Analytics (Mein Fortschritt)
 * ================================================================== */

function renderStats() {
  const statsHost = el("view-stats");
  if (!statsHost) return;

  const st = STATES.find(s => s.code === AppState.stateCode) || { name: "Bayern" };
  const mastery = getMasteryStats();
  const readiness = getReadinessScore();
  const cats = getCategoryBreakdown();
  const best = store.get("et.bestExam", null);
  const examCount = AppState.examHistory.length;
  const passedExams = AppState.examHistory.filter(e => e.pass).length;

  const strugglingQs = ALL_QS.filter(q => {
    if (q.state !== null && q.state !== AppState.stateCode) return false;
    const h = AppState.history[q.id];
    return h && h.wrong > h.right;
  });

  const bookmarkedQs = ALL_QS.filter(q => AppState.bookmarks.has(q.id));

  const unseenQs = ALL_QS.filter(q => {
    if (q.state !== null && q.state !== AppState.stateCode) return false;
    const h = AppState.history[q.id];
    return !h || (h.right === 0 && h.wrong === 0);
  });

  const lastMissedQs = ALL_QS.filter(q => (AppState.lastMissed || []).includes(q.id));

  // Determine Readiness Badge
  let readinessBadge = "Anfänger";
  let readinessColor = "var(--muted)";
  if (readiness >= 80) { readinessBadge = "Prüfungsbereit 🎯"; readinessColor = "var(--good)"; }
  else if (readiness >= 50) { readinessBadge = "Auf gutem Weg 📈"; readinessColor = "var(--accent)"; }
  else if (readiness >= 20) { readinessBadge = "Im Aufbau ⏳"; readinessColor = "var(--gold)"; }

  statsHost.innerHTML = `
    <div class="stats-container">
      <!-- Readiness Banner -->
      <div class="card readiness-card">
        <div class="readiness-header">
          <div>
            <h2>Lernfortschritt & Trends</h2>
            <p class="lead" style="margin:4px 0 0 0">
              Prüfungspool für <strong>${esc(st.name)}</strong> (300 bundesweit + 10 Landesfragen = 310 Fragen)
            </p>
          </div>
          <div class="readiness-gauge">
            <div class="gauge-pct" style="color:${readinessColor}">${readiness}%</div>
            <div class="gauge-label">${readinessBadge}</div>
          </div>
        </div>

        <!-- Segmented Mastery Bar -->
        <div class="mastery-section">
          <div class="mastery-bar-wrap">
            <div class="mastery-seg seg-mastered" style="width:${(mastery.mastered / mastery.total * 100).toFixed(1)}%" title="Gemeistert: ${mastery.mastered}"></div>
            <div class="mastery-seg seg-learning" style="width:${(mastery.learning / mastery.total * 100).toFixed(1)}%" title="Im Lernen: ${mastery.learning}"></div>
            <div class="mastery-seg seg-struggling" style="width:${(mastery.struggling / mastery.total * 100).toFixed(1)}%" title="Schwachstellen: ${mastery.struggling}"></div>
            <div class="mastery-seg seg-unseen" style="width:${(mastery.unseen / mastery.total * 100).toFixed(1)}%" title="Ungesehen: ${mastery.unseen}"></div>
          </div>

          <div class="mastery-legend">
            <div class="legend-item"><span class="dot dot-mastered"></span> Gemeistert: <b>${mastery.mastered}</b> <span class="dim">(${Math.round(mastery.mastered / mastery.total * 100)}%)</span></div>
            <div class="legend-item"><span class="dot dot-learning"></span> Im Lernen: <b>${mastery.learning}</b></div>
            <div class="legend-item"><span class="dot dot-struggling"></span> Schwachstellen: <b>${mastery.struggling}</b></div>
            <div class="legend-item"><span class="dot dot-unseen"></span> Ungesehen: <b>${mastery.unseen}</b></div>
          </div>
        </div>
      </div>

      <!-- Quick Action Training Hub -->
      <div class="card">
        <h3>Gezielte Trainingseinheiten</h3>
        <p class="lead" style="margin-bottom:12px">Aus Ihren persönlichen Antwort-Trends generierte Übungssitzungen:</p>
        
        <div class="action-grid">
          <button class="btn action-tile ${strugglingQs.length ? 'btn-highlight' : ''}" id="act-struggling" ${!strugglingQs.length ? 'disabled' : ''}>
            <span class="action-icon">🎯</span>
            <div class="action-meta">
              <b>Schwachstellen trainieren (${strugglingQs.length})</b>
              <span>Fragen, die häufiger falsch als richtig waren</span>
            </div>
          </button>

          <button class="btn action-tile" id="act-bookmarks" ${!bookmarkedQs.length ? 'disabled' : ''}>
            <span class="action-icon">⭐</span>
            <div class="action-meta">
              <b>Gemerkte Fragen wiederholen (${bookmarkedQs.length})</b>
              <span>Ihre persönlich markierten Favoriten</span>
            </div>
          </button>

          <button class="btn action-tile" id="act-unseen" ${!unseenQs.length ? 'disabled' : ''}>
            <span class="action-icon">🆕</span>
            <div class="action-meta">
              <b>Ungesehene Fragen (${unseenQs.length})</b>
              <span>Noch nie beantwortete Fragen erschließen</span>
            </div>
          </button>

          <button class="btn action-tile" id="act-lastmissed" ${!lastMissedQs.length ? 'disabled' : ''}>
            <span class="action-icon">🔄</span>
            <div class="action-meta">
              <b>Fehler aus letzter Prüfung (${lastMissedQs.length})</b>
              <span>Gezielt die falschen Antworten nachbereiten</span>
            </div>
          </button>
        </div>
      </div>

      <!-- Category Performance -->
      <div class="card">
        <h3>Themengebiete & Genauigkeit</h3>
        <div class="category-list">
          ${Object.entries(cats).map(([cName, cData]) => {
            const attempts = cData.right + cData.wrong;
            const acc = attempts ? Math.round(cData.right / attempts * 100) : 0;
            return `
              <div class="cat-row">
                <div class="cat-row-header">
                  <span class="cat-name">${esc(cName)}</span>
                  <span class="cat-stats">${attempts ? `${acc}% Genauigkeit (${cData.right}/${attempts})` : `Noch nicht geübt (${cData.total} Fragen)`}</span>
                </div>
                <div class="cat-progress-bar">
                  <div class="cat-progress-fill" style="width:${acc}%"></div>
                </div>
              </div>`;
          }).join("")}
        </div>
      </div>

      <!-- Exam History Timeline -->
      <div class="card">
        <div class="history-head">
          <h3>Prüfungshistorie (${examCount} Simulationen)</h3>
          ${best != null ? `<span class="badge-best">Bester Test: ${best}/33</span>` : ""}
        </div>
        ${AppState.examHistory.length ? `
          <table class="history-table">
            <thead>
              <tr><th>Datum</th><th>Bundesland</th><th>Ergebnis</th><th>Status</th></tr>
            </thead>
            <tbody>
              ${AppState.examHistory.map(e => `
                <tr>
                  <td>${esc(e.date)}</td>
                  <td>${esc(e.stateCode || "BY")}</td>
                  <td><b>${e.score}</b> / ${e.total}</td>
                  <td><span class="verdict-chip ${e.pass ? 'pass' : 'fail'}">${e.pass ? 'Bestanden' : 'Nicht bestanden'}</span></td>
                </tr>`).join("")}
            </tbody>
          </table>
        ` : `
          <p style="color:var(--muted);margin-top:8px">Noch keine Prüfungssimulation abgeschlossen. Starten Sie eine Simulation im Tab „Prüfung simulieren“!</p>
        `}
      </div>

      <!-- Local Backup & Privacy Tools -->
      <div class="card">
        <h3>Lokaler Speicher & Backup</h3>
        <p class="lead" style="margin-bottom:12px">Alle Daten werden zu 100% lokal auf diesem Gerät gespeichert (kein Server, kein Tracking).</p>
        <div class="backup-actions">
          <button class="btn" id="btn-export-backup">⬇️ Fortschritt als JSON sichern</button>
          <label class="btn" style="cursor:pointer;margin:0">
            ⬆️ Backup-Datei laden
            <input type="file" id="btn-import-backup" accept=".json" style="display:none">
          </label>
          <button class="btn" id="btn-reset-backup" style="color:var(--bad)">🗑️ Fortschritt zurücksetzen</button>
        </div>
      </div>
    </div>`;

  // Bind Action Buttons
  const bStruggling = el("act-struggling");
  if (bStruggling) bStruggling.onclick = () => {
    startPractice(shuffled(strugglingQs), "Schwachstellen-Training");
    selectTab("practice");
  };

  const bBookmarks = el("act-bookmarks");
  if (bBookmarks) bBookmarks.onclick = () => {
    startPractice(bookmarkedQs.slice(), "Gemerkte Fragen (Favoriten)");
    selectTab("practice");
  };

  const bUnseen = el("act-unseen");
  if (bUnseen) bUnseen.onclick = () => {
    startPractice(sample(unseenQs, Math.min(25, unseenQs.length)), "Neue ungesehene Fragen");
    selectTab("practice");
  };

  const bLastMissed = el("act-lastmissed");
  if (bLastMissed) bLastMissed.onclick = () => {
    startPractice(lastMissedQs.slice(), "Fehleranalyse: Letzte Prüfung");
    selectTab("practice");
  };

  // Backup handlers
  const bExport = el("btn-export-backup");
  if (bExport) bExport.onclick = exportProgressJson;

  const bImport = el("btn-import-backup");
  if (bImport) bImport.onchange = e => {
    const file = e.target.files[0];
    if (!file) return;
    importProgressJson(file, (ok, err) => {
      if (ok) {
        alert("Lernfortschritt erfolgreich importiert!");
        renderStats();
        renderExamIntro();
        renderPicker();
        renderTable();
      } else {
        alert("Fehler beim Importieren der Datei: " + (err ? err.message : "Ungültiges Format"));
      }
    });
  };

  const bReset = el("btn-reset-backup");
  if (bReset) bReset.onclick = () => {
    if (confirm("Möchten Sie Ihren gesamten Lernfortschritt, Prüfungsergebnisse und Merklisten wirklich löschen?")) {
      resetAllProgress();
      renderStats();
      renderExamIntro();
      renderPicker();
      renderTable();
    }
  };
}
