/*
 * Einbürgerungstest — Landesfragen Bayern (Freistaat Bayern)
 *
 * The 10 state-specific questions from the official BAMF question catalogue
 * ("Gesamtfragenkatalog zum Test 'Leben in Deutschland' und zum
 * Einbürgerungstest"). Bayern occupies numbers 311–320: the catalogue lists
 * the 300 nationwide questions first, then 10 per Bundesland in alphabetical
 * order (Baden-Württemberg 301–310, Bayern 311–320, Berlin 321–330, …).
 *
 * This catalogue is unchanged for 2026 — the same 10 Bayern questions have
 * been in use for years. Always cross-check against the official source
 * before an exam: https://oet.bamf.de/ords/oetut/f?p=514:1
 *
 * Single source of truth for this project. Loaded as a plain <script> so it
 * works offline from file:// (no fetch, no CORS, no build step).
 *
 * `correct` is a 0-based index into `options`.
 * Image options reference an SVG in the IMAGES map inside index.html.
 */
window.BAYERN_QUESTIONS = [
  {
    id: 311,
    type: "image",
    q: "Welches Wappen gehört zum Freistaat Bayern?",
    qEn: "Which coat of arms belongs to the Free State of Bavaria?",
    options: [
      { image: "wappen-sachsen",           reveal: "Sachsen",              revealEn: "Saxony" },
      { image: "wappen-bayern",            reveal: "Bayern",               revealEn: "Bavaria" },
      { image: "wappen-hamburg",           reveal: "Hamburg",              revealEn: "Hamburg" },
      { image: "wappen-bremen",            reveal: "Bremen",               revealEn: "Bremen" }
    ],
    correct: 1,
    explain:
      "Bayern führt die weiß-blauen Rauten (das „Rautenwappen“). Das kleine " +
      "Staatswappen zeigt den weiß-blau gerauteten Schild mit der Volkskrone. " +
      "Die anderen Wappen: Sachsen (schwarz-goldene Balken mit grünem " +
      "Rautenkranz), Hamburg (weiße Dreiturmburg auf Rot), " +
      "Bremen (silberner Schlüssel auf Rot).",
    explainEn:
      "Bavaria features the white-and-blue lozenges/diamonds (the „Rautenwappen“). " +
      "The lesser state coat of arms shows the white-and-blue lozengy shield beneath the " +
      "people's crown. The other coats of arms: Saxony (black and gold stripes with a green " +
      "rue wreath), Hamburg (white three-towered castle on red), Bremen (silver key on red).",
    tip: "Rauten = Bayern. Weiß und blau, immer.",
    tipEn: "Lozenges / diamonds = Bavaria. White and blue, always."
  },
  {
    id: 312,
    type: "text",
    q: "Welches ist ein Landkreis in Bayern?",
    qEn: "Which of these is a district (Landkreis) in Bavaria?",
    options: [
      { text: "Prignitz",         textEn: "Prignitz (Brandenburg)" },
      { text: "Rhein-Sieg-Kreis", textEn: "Rhein-Sieg-Kreis (North Rhine-Westphalia)" },
      { text: "Nordfriesland",    textEn: "Nordfriesland (Schleswig-Holstein)" },
      { text: "Altötting",        textEn: "Altötting (Upper Bavaria)" }
    ],
    correct: 3,
    explain:
      "Altötting ist ein Landkreis im Regierungsbezirk Oberbayern. " +
      "Die anderen liegen in anderen Bundesländern: Prignitz (Brandenburg), " +
      "Rhein-Sieg-Kreis (Nordrhein-Westfalen), Nordfriesland " +
      "(Schleswig-Holstein).",
    explainEn:
      "Altötting is a district in the administrative region of Upper Bavaria. " +
      "The others belong to Brandenburg, North Rhine-Westphalia and Schleswig-Holstein.",
    tip: "Die drei falschen klingen norddeutsch bzw. rheinisch — Altötting klingt bayerisch.",
    tipEn: "The three incorrect options sound North German or Rhenish — Altötting sounds Bavarian."
  },
  {
    id: 313,
    type: "text",
    q: "Für wie viele Jahre wird der Landtag in Bayern gewählt?",
    qEn: "For how many years is the Bavarian state parliament (Landtag) elected?",
    options: [
      { text: "3", textEn: "3 years" },
      { text: "4", textEn: "4 years" },
      { text: "5", textEn: "5 years" },
      { text: "6", textEn: "6 years" }
    ],
    correct: 2,
    explain:
      "Der Bayerische Landtag wird für fünf Jahre gewählt. Bayern hat die " +
      "Wahlperiode 1998 von vier auf fünf Jahre verlängert.",
    explainEn:
      "The Bavarian Landtag is elected for five years (extended from four to five in 1998).",
    tip: "Bundestag = 4 Jahre, Bayerischer Landtag = 5 Jahre. Nicht verwechseln!",
    tipEn: "Bundestag (Federal Parliament) = 4 years, Bavarian Landtag = 5 years. Don't confuse them!"
  },
  {
    id: 314,
    type: "text",
    q: "Ab welchem Alter darf man in Bayern bei Kommunalwahlen wählen?",
    qEn: "From what age may you vote in municipal elections in Bavaria?",
    options: [
      { text: "14", textEn: "14 years old" },
      { text: "16", textEn: "16 years old" },
      { text: "18", textEn: "18 years old" },
      { text: "20", textEn: "20 years old" }
    ],
    correct: 2,
    explain:
      "In Bayern gilt bei Gemeinde- und Landkreiswahlen ein Wahlalter von " +
      "18 Jahren (Gemeinde- und Landkreiswahlgesetz, GLKrWG). Bayern hat das " +
      "kommunale Wahlalter — anders als z. B. Nordrhein-Westfalen, " +
      "Niedersachsen oder Baden-Württemberg — NICHT auf 16 gesenkt.",
    explainEn:
      "Bavaria requires age 18 for municipal and district elections (GLKrWG). " +
      "Unlike several other states (such as NRW, Lower Saxony, or Baden-Württemberg), " +
      "Bavaria has NOT lowered the municipal voting age to 16.",
    tip:
      "VORSICHT: Mehrere Übungsseiten im Netz nennen hier fälschlich 16. " +
      "Richtig ist 18 — in Bayern gilt überall 18.",
    tipEn:
      "CAUTION: Several online practice sites incorrectly state 16. " +
      "The correct answer is 18 — in Bavaria, 18 applies everywhere.",
    pitfall: true
  },
  {
    id: 315,
    type: "text",
    q: "Welche Farben hat die Landesflagge von Bayern?",
    qEn: "What colours does the state flag of Bavaria have?",
    options: [
      { text: "blau-weiß-rot", textEn: "blue-white-red" },
      { text: "weiß-blau",     textEn: "white-blue" },
      { text: "grün-weiß-rot", textEn: "green-white-red" },
      { text: "schwarz-gelb",  textEn: "black-yellow" }
    ],
    correct: 1,
    explain:
      "Die bayerische Landesflagge ist weiß-blau — entweder als Rautenflagge " +
      "oder als Streifenflagge (weiß oben, blau unten).",
    explainEn:
      "Bavaria's flag is white and blue, either as lozenges (diamonds) or as two " +
      "horizontal stripes (white above, blue below).",
    tip: "„Weiß-blau“ — das Erkennungszeichen Bayerns, auch im Wappen (Frage 311).",
    tipEn: "“White-blue” — the hallmark of Bavaria, also on the coat of arms (Question 311)."
  },
  {
    id: 316,
    type: "text",
    q: "Wo können Sie sich in Bayern über politische Themen informieren?",
    qEn: "Where can you find information about political topics in Bavaria?",
    options: [
      { text: "beim Ordnungsamt der Gemeinde",                 textEn: "at the municipal public order office (Ordnungsamt)" },
      { text: "bei der Landeszentrale für politische Bildung", textEn: "at the State Centre for Civic Education (Landeszentrale für politische Bildung)" },
      { text: "bei der Verbraucherzentrale",                    textEn: "at the Consumer Advice Centre (Verbraucherzentrale)" },
      { text: "bei den Kirchen",                               textEn: "at the churches" }
    ],
    correct: 1,
    explain:
      "Zuständig ist die Bayerische Landeszentrale für politische " +
      "Bildungsarbeit (BLZ). Jedes Bundesland hat eine solche Landeszentrale; " +
      "auf Bundesebene ist es die Bundeszentrale für politische Bildung (bpb).",
    explainEn:
      "The Bayerische Landeszentrale für politische Bildungsarbeit (BLZ) is responsible. " +
      "Every state has one; the federal counterpart is the bpb.",
    tip: "Politische Bildung → Landeszentrale für politische Bildung. Immer diese Antwort.",
    tipEn: "Political education → Landeszentrale für politische Bildung. Always this answer."
  },
  {
    id: 317,
    type: "text",
    q: "Die Landeshauptstadt von Bayern heißt …",
    qEn: "The capital of Bavaria is called …",
    options: [
      { text: "Ingolstadt.", textEn: "Ingolstadt" },
      { text: "Regensburg.", textEn: "Regensburg" },
      { text: "Nürnberg.",   textEn: "Nuremberg" },
      { text: "München.",    textEn: "Munich" }
    ],
    correct: 3,
    explain:
      "München ist die Landeshauptstadt Bayerns und mit rund 1,5 Millionen " +
      "Einwohnern die drittgrößte Stadt Deutschlands. Nürnberg ist die " +
      "zweitgrößte Stadt Bayerns, aber nicht die Hauptstadt.",
    explainEn:
      "Munich is Bavaria's capital and Germany's third-largest city (pop. ~1.5 million). " +
      "Nuremberg is Bavaria's second city but not the capital.",
    tip: "Nürnberg ist die klassische Falle — die Hauptstadt ist München.",
    tipEn: "Nuremberg is the classic trap — the capital is Munich."
  },
  {
    id: 318,
    type: "image",
    q: "Welches Bundesland ist Bayern?",
    qEn: "Which federal state is Bavaria?",
    options: [
      { image: "karte-nordwest", reveal: "Niedersachsen (Nordwesten)",    revealEn: "Lower Saxony (North-West)" },
      { image: "karte-ost",      reveal: "Brandenburg (Osten)",           revealEn: "Brandenburg (East)" },
      { image: "karte-suedwest", reveal: "Baden-Württemberg (Südwesten)",  revealEn: "Baden-Württemberg (South-West)" },
      { image: "karte-suedost",  reveal: "Bayern (Südosten)",             revealEn: "Bavaria (South-East)" }
    ],
    correct: 3,
    explain:
      "Bayern liegt im Südosten Deutschlands — es ist das flächengrößte " +
      "Bundesland und grenzt an Österreich und Tschechien.",
    explainEn:
      "Bavaria is in the south-east of Germany: the largest German state by area, " +
      "bordering Austria and the Czech Republic.",
    tip: "Größtes Bundesland, unten rechts, Grenze zu Österreich und Tschechien.",
    tipEn: "Largest federal state, bottom right, borders Austria and the Czech Republic."
  },
  {
    id: 319,
    type: "text",
    q: "Wie nennt man die Regierungschefin/den Regierungschef in Bayern?",
    qEn: "What is the head of government in Bavaria called?",
    options: [
      { text: "Erste Ministerin/Erster Minister",     textEn: "First Minister (m/f)" },
      { text: "Premierministerin/Premierminister",     textEn: "Prime Minister (m/f)" },
      { text: "Bürgermeisterin/Bürgermeister",         textEn: "Mayor (m/f)" },
      { text: "Ministerpräsidentin/Ministerpräsident", textEn: "Minister-President (m/f)" }
    ],
    correct: 3,
    explain:
      "Der Regierungschef Bayerns ist der Ministerpräsident bzw. die " +
      "Ministerpräsidentin, gewählt vom Bayerischen Landtag. Nur die drei " +
      "Stadtstaaten weichen ab: Berlin und Hamburg haben einen Regierenden " +
      "bzw. Ersten Bürgermeister, Bremen einen Präsidenten des Senats.",
    explainEn:
      "Bavaria's head of government is the Ministerpräsident(in), elected by " +
      "the Landtag. Only the three city-states differ: Berlin and Hamburg have a Governing / " +
      "First Mayor, and Bremen has a President of the Senate.",
    tip: "Alle Flächenländer: Ministerpräsident/in.",
    tipEn: "All non-city states (Flächenländer): Ministerpräsident/in (Minister-President)."
  },
  {
    id: 320,
    type: "text",
    q: "Welche Ministerin/welchen Minister hat Bayern nicht?",
    qEn: "Which minister does Bavaria not have?",
    options: [
      { text: "Justizministerin/Justizminister", textEn: "Minister of Justice (m/f)" },
      { text: "Außenministerin/Außenminister",   textEn: "Minister of Foreign Affairs (m/f)" },
      { text: "Finanzministerin/Finanzminister", textEn: "Minister of Finance (m/f)" },
      { text: "Innenministerin/Innenminister",   textEn: "Minister of the Interior (m/f)" }
    ],
    correct: 1,
    explain:
      "Außenpolitik ist ausschließlich Sache des Bundes (Art. 32 " +
      "Grundgesetz). Deshalb hat kein Bundesland einen Außenminister — " +
      "Bayern hat lediglich einen Staatsminister für Bundes- und " +
      "Europaangelegenheiten. Justiz, Finanzen und Inneres sind dagegen " +
      "normale Landesressorts.",
    explainEn:
      "Foreign affairs are exclusively a federal competence (Art. 32 Basic " +
      "Law), so no federal state has a foreign minister. Bavaria only has a State " +
      "Minister for Federal and European Affairs. Justice, finance, and internal affairs " +
      "are standard state-level portfolios.",
    tip: "Außenpolitik macht nur der Bund — gilt für jedes Bundesland.",
    tipEn: "Foreign policy is handled only by the federal government — applies to every federal state."
  }
];
