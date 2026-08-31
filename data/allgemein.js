/*
 * Einbürgerungstest — die 300 bundesweiten Fragen (Teil I des Fragenkatalogs).
 *
 * TEXT: übernommen aus dem amtlichen "Gesamtfragenkatalog zum Test
 *       'Leben in Deutschland' und zum 'Einbürgerungstest'", Stand 07.05.2025
 *       (BAMF), maschinell aus dem PDF extrahiert.
 * LÖSUNGEN: nicht im amtlichen PDF enthalten. Der Antwortschlüssel wurde aus
 *       drei unabhängigen öffentlichen Datensätzen abgeglichen (siehe README).
 *       `srcs` gibt an, wie viele davon übereinstimmten — 3 = höchste,
 *       1 = nur eine Quelle. Es gab null Widersprüche zwischen den Quellen.
 *
 * Reihenfolge und Nummerierung folgen dem amtlichen Katalog (Aufgabe 1–300).
 * `correct` ist ein 0-basierter Index in `options`.
 * Bildfragen verweisen mit `image` auf eine Datei in assets/.
 *
 * Enthält vollständige englische Übersetzungen für alle 300 Fragen und Optionen.
 */
window.ALLGEMEIN_QUESTIONS = [
  {
    id: 1,
    type: "text",
    q: "In Deutschland dürfen Menschen offen etwas gegen die Regierung sagen, weil …",
    qEn: "In Germany, people are allowed to speak out openly against the government because …",
    cat: "Recht",
    options: [
      { text: "hier Religionsfreiheit gilt.", textEn: "freedom of religion applies here." },
      { text: "die Menschen Steuern zahlen.", textEn: "people pay taxes." },
      { text: "die Menschen das Wahlrecht haben.", textEn: "people have the right to vote." },
      { text: "hier Meinungsfreiheit gilt.", textEn: "freedom of speech/expression applies here." }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 2,
    type: "text",
    q: "In Deutschland können Eltern bis zum 14. Lebensjahr ihres Kindes entscheiden, ob es in der Schule am …",
    qEn: "In Germany, parents can decide until their child is 14 years old whether the child participates in … at school.",
    cat: "Gesellschaft und Familie",
    options: [
      { text: "Geschichtsunterricht teilnimmt.", textEn: "history classes." },
      { text: "Religionsunterricht teilnimmt.", textEn: "religious education classes." },
      { text: "Politikunterricht teilnimmt.", textEn: "politics/civics classes." },
      { text: "Sprachunterricht teilnimmt.", textEn: "language classes." }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 3,
    type: "text",
    q: "Deutschland ist ein Rechtsstaat. Was ist damit gemeint?",
    qEn: "Germany is a state based on the rule of law (Rechtsstaat). What does this mean?",
    cat: "Staat",
    options: [
      { text: "Alle Einwohnerinnen/Einwohner und der Staat müssen sich an die Gesetze halten.", textEn: "All residents and the state must abide by the laws." },
      { text: "Der Staat muss sich nicht an die Gesetze halten.", textEn: "The state does not have to obey the laws." },
      { text: "Nur Deutsche müssen die Gesetze befolgen.", textEn: "Only Germans have to obey the laws." },
      { text: "Die Gerichte machen die Gesetze.", textEn: "The courts make the laws." }
    ],
    correct: 0,
    srcs: 1
  },
  {
    id: 4,
    type: "text",
    q: "Welches Recht gehört zu den Grundrechten in Deutschland?",
    qEn: "Which right belongs to the fundamental rights (Grundrechte) in Germany?",
    cat: "Recht",
    options: [
      { text: "Waffenbesitz", textEn: "Right to bear arms" },
      { text: "Faustrecht", textEn: "Law of the jungle (Faustrecht)" },
      { text: "Meinungsfreiheit", textEn: "Freedom of opinion/speech" },
      { text: "Selbstjustiz", textEn: "Vigilantism" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 5,
    type: "text",
    q: "Wahlen in Deutschland sind frei. Was bedeutet das?",
    qEn: "Elections in Germany are free. What does this mean?",
    cat: "Politik",
    options: [
      { text: "Man darf Geld annehmen, wenn man dafür eine bestimmte Kandidatin/einen bestimmten Kandidaten wählt.", textEn: "You may accept money in exchange for voting for a specific candidate." },
      { text: "Nur Personen, die noch nie im Gefängnis waren, dürfen wählen.", textEn: "Only people who have never been to prison are allowed to vote." },
      { text: "Die Wählerin/der Wähler darf bei der Wahl weder beeinflusst noch zu einer bestimmten Stimmabgabe gezwungen werden und keine Nachteile durch die Wahl haben.", textEn: "Voters may neither be influenced nor forced to vote a certain way, and must suffer no disadvantage because of their vote." },
      { text: "Alle wahlberechtigten Personen müssen wählen.", textEn: "All eligible persons are required to vote." }
    ],
    correct: 2,
    srcs: 1
  },
  {
    id: 6,
    type: "text",
    q: "Wie heißt die deutsche Verfassung?",
    qEn: "What is the name of the German constitution?",
    cat: "Staat",
    options: [
      { text: "Volksgesetz", textEn: "People's Law" },
      { text: "Bundesgesetz", textEn: "Federal Law" },
      { text: "Deutsches Gesetz", textEn: "German Law" },
      { text: "Grundgesetz", textEn: "Basic Law (Grundgesetz)" }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 7,
    type: "text",
    q: "Welches Recht gehört zu den Grundrechten, die nach der deutschen Verfassung garantiert werden? Das Recht auf …",
    qEn: "How many federal states (Bundesländer) does the Federal Republic of Germany have?",
    cat: "Recht",
    options: [
      { text: "Glaubens- und Gewissensfreiheit", textEn: "Freedom of belief and conscience" },
      { text: "Unterhaltung", textEn: "Entertainment" },
      { text: "Arbeit", textEn: "Work" },
      { text: "Wohnung", textEn: "Apartment" }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 8,
    type: "text",
    q: "Was steht nicht im Grundgesetz von Deutschland?",
    qEn: "What is not a branch of state power in Germany?",
    cat: "Recht",
    options: [
      { text: "Die Würde des Menschen ist unantastbar.", textEn: "Human dignity is inviolable." },
      { text: "Alle sollen gleich viel Geld haben.", textEn: "Everyone should have the same amount of money" },
      { text: "Jeder Mensch darf seine Meinung sagen.", textEn: "Everyone is allowed to express their opinion." },
      { text: "Alle sind vor dem Gesetz gleich.", textEn: "Everyone is equal before the law." }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 9,
    type: "text",
    q: "Welches Grundrecht gilt in Deutschland nur für Ausländerinnen/Ausländer? Das Grundrecht auf …",
    qEn: "Which fundamental right in Germany applies only to foreigners? The fundamental right to …",
    cat: "Recht",
    options: [
      { text: "Schutz der Familie", textEn: "Protection of the family" },
      { text: "Menschenwürde", textEn: "Human dignity" },
      { text: "Asyl", textEn: "Asylum" },
      { text: "Meinungsfreiheit", textEn: "Freedom of opinion/speech" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 10,
    type: "text",
    q: "Was ist mit dem deutschen Grundgesetz vereinbar?",
    qEn: "What is not a state in the Federal Republic of Germany?",
    cat: "Recht",
    options: [
      { text: "die Prügelstrafe", textEn: "the corporal punishment" },
      { text: "die Folter", textEn: "the torture" },
      { text: "die Todesstrafe", textEn: "the death penalty" },
      { text: "die Geldstrafe", textEn: "the fine" }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 11,
    type: "text",
    q: "Wie wird die Verfassung der Bundesrepublik Deutschland genannt?",
    qEn: "Germany is a socialist state, a federal state, a four-power state, or a monarchy?",
    cat: "Staat",
    options: [
      { text: "Grundgesetz", textEn: "Basic Law (Grundgesetz)" },
      { text: "Bundesverfassung", textEn: "Bundesverfassung" },
      { text: "Gesetzbuch", textEn: "Code of Law" },
      { text: "Verfassungsvertrag", textEn: "Constitutional Treaty" }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 12,
    type: "text",
    q: "Eine Partei im Deutschen Bundestag will die Pressefreiheit abschaffen. Ist das möglich?",
    qEn: "A political party in the German Bundestag wants to abolish the freedom of the press. Is this possible?",
    cat: "Recht",
    options: [
      { text: "Ja, wenn mehr als die Hälfte der Abgeordneten im Bundestag dafür sind.", textEn: "Yes, if more than half of the members of the Bundestag vote for it." },
      { text: "Ja, aber dazu müssen zwei Drittel der Abgeordneten im Bundestag dafür sein.", textEn: "Yes, but two-thirds of the members of the Bundestag must vote for it." },
      { text: "Nein, denn die Pressefreiheit ist ein Grundrecht. Sie kann nicht abgeschafft werden.", textEn: "No, because freedom of the press is a fundamental right. It cannot be abolished." },
      { text: "Nein, denn nur der Bundesrat kann die Pressefreiheit abschaffen.", textEn: "No, because only the Bundesrat can abolish freedom of the press." }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 13,
    type: "text",
    q: "Im Parlament steht der Begriff \"Opposition\" für …",
    qEn: "In parliament, the term \"opposition\" stands for ...",
    cat: "Politik",
    options: [
      { text: "die regierenden Parteien.", textEn: "the governing parties." },
      { text: "die Fraktion mit den meisten Abgeordneten.", textEn: "the parliamentary group with the most deputies." },
      { text: "alle Parteien, die bei der letzten Wahl die 5%-Hürde erreichen konnten.", textEn: "all parties that passed the 5% hurdle in the last election ." },
      { text: "alle Abgeordneten, die nicht zu der Regierungspartei/den Regierungsparteien gehören.", textEn: "all members of parliament who do not belong to the ruling party/ governing parties." }
    ],
    correct: 3,
    srcs: 2
  },
  {
    id: 14,
    type: "text",
    q: "Meinungsfreiheit in Deutschland heißt, dass ich …",
    qEn: "The German constitution is called the Basic Law (Grundgesetz). What is meant by the \"right to free development of personality\"?",
    cat: "Recht",
    options: [
      { text: "Passanten auf der Straße beschimpfen darf.", textEn: "insulted passers-by on the street." },
      { text: "meine Meinung im Internet äußern kann.", textEn: "can express my opinion on the Internet." },
      { text: "Nazi-, Hamas- oder Islamischer Staat-Symbole öffentlich tragen darf.", textEn: "Nazi, Hamas or Islamic State symbols in public ." },
      { text: "meine Meinung nur dann äußern darf, solange ich der Regierung nicht widerspreche.", textEn: "may only express my opinion as long as I am government." }
    ],
    correct: 1,
    srcs: 1
  },
  {
    id: 15,
    type: "text",
    q: "Was verbietet das deutsche Grundgesetz?",
    qEn: "What does the German Basic Law prohibit?",
    cat: "Recht",
    options: [
      { text: "Militärdienst", textEn: "Military service" },
      { text: "Zwangsarbeit", textEn: "Forced labor" },
      { text: "freie Berufswahl", textEn: "Free choice of profession" },
      { text: "Arbeit im Ausland", textEn: "Work abroad" }
    ],
    correct: 1,
    srcs: 2
  },
  {
    id: 16,
    type: "text",
    q: "Wann ist die Meinungsfreiheit in Deutschland eingeschränkt?",
    qEn: "When can freedom of expression in Germany be restricted by law?",
    cat: "Recht",
    options: [
      { text: "bei der öffentlichen Verbreitung falscher Behauptungen über einzelne Personen", textEn: "in the public dissemination of false allegations about individual persons" },
      { text: "bei Meinungsäußerungen über die Bundesregierung", textEn: "when expressing opinions about the Federal Government" },
      { text: "bei Diskussionen über Religionen", textEn: "in discussions about religions" },
      { text: "bei Kritik am Staat", textEn: "in case of criticism of the state" }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 17,
    type: "text",
    q: "Die deutschen Gesetze verbieten …",
    qEn: "German laws prohibit ...",
    cat: "Recht",
    options: [
      { text: "Meinungsfreiheit der Einwohnerinnen und Einwohner.", textEn: "Freedom of expression of the residents." },
      { text: "Petitionen der Bürgerinnen und Bürger.", textEn: "Petitions of citizens." },
      { text: "Versammlungsfreiheit der Einwohnerinnen und Einwohner.", textEn: "Freedom of assembly of residents." },
      { text: "Ungleichbehandlung der Bürgerinnen und Bürger durch den Staat.", textEn: "unequal treatment of citizens by the State." }
    ],
    correct: 3,
    srcs: 1
  },
  {
    id: 18,
    type: "text",
    q: "Welches Grundrecht ist in Artikel 1 des Grundgesetzes der Bundesrepublik Deutschland garantiert?",
    qEn: "Which fundamental right is enshrined in Article 1 of the Basic Law of the Federal Republic of Germany guaranteed?",
    cat: "Recht",
    options: [
      { text: "die Unantastbarkeit der Menschenwürde", textEn: "the inviolability of human dignity" },
      { text: "das Recht auf Leben", textEn: "the right to life" },
      { text: "Religionsfreiheit", textEn: "Religious Freedom" },
      { text: "Meinungsfreiheit", textEn: "Freedom of opinion/speech" }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 19,
    type: "text",
    q: "Was versteht man unter dem Recht der \"Freizügigkeit\" in Deutschland?",
    qEn: "Which right is guaranteed in Germany by the Basic Law?",
    cat: "Recht",
    options: [
      { text: "Man darf sich seinen Wohnort selbst aussuchen.", textEn: "You can choose your own place of residence." },
      { text: "Man kann seinen Beruf wechseln.", textEn: "You can change your profession." },
      { text: "Man darf sich für eine andere Religion entscheiden.", textEn: "You can choose another religion." },
      { text: "Man darf sich in der Öffentlichkeit nur leicht bekleidet bewegen.", textEn: "People are only allowed to appear in public lightly dressed." }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 20,
    type: "text",
    q: "Eine Partei in Deutschland verfolgt das Ziel, eine Diktatur zu errichten. Sie ist dann …",
    qEn: "A party in Germany is pursuing the goal of preventing a dictatorship . It is then ...",
    cat: "Politik",
    options: [
      { text: "tolerant.", textEn: "tolerant." },
      { text: "rechtsstaatlich orientiert.", textEn: "based on the rule of law." },
      { text: "gesetzestreu.", textEn: "Law-abiding." },
      { text: "verfassungswidrig.", textEn: "unconstitutional." }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 21,
    type: "image",
    q: "Welches ist das Wappen der Bundesrepublik Deutschland?",
    qEn: "What is the coat of arms of the Federal Republic of Germany?",
    cat: "Staat",
    image: "assets/q021.jpg",
    options: [
      { text: "Bild 1", textEn: "1" },
      { text: "Bild 2", textEn: "2" },
      { text: "Bild 3", textEn: "3" },
      { text: "Bild 4", textEn: "4" }
    ],
    correct: 0,
    srcs: 1
  },
  {
    id: 22,
    type: "text",
    q: "Was für eine Staatsform hat Deutschland?",
    qEn: "What kind of government does Germany have?",
    cat: "Staat",
    options: [
      { text: "Monarchie", textEn: "monarchy" },
      { text: "Diktatur", textEn: "Dictatorship" },
      { text: "Republik", textEn: "Republic" },
      { text: "Fürstentum", textEn: "Principality" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 23,
    type: "text",
    q: "In Deutschland sind die meisten Erwerbstätigen …",
    qEn: "Which of the following describes a freelance / self-employed occupation?",
    cat: "Wirtschaft",
    options: [
      { text: "in kleinen Familienunternehmen beschäftigt.", textEn: "in small family businesses." },
      { text: "ehrenamtlich für ein Bundesland tätig.", textEn: "volunteer for a federal state." },
      { text: "selbstständig mit einer eigenen Firma tätig.", textEn: "self-employed with their own company." },
      { text: "bei einer Firma oder Behörde beschäftigt.", textEn: "employed by a company or authority." }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 24,
    type: "text",
    q: "Wie viele Bundesländer hat die Bundesrepublik Deutschland?",
    qEn: "How many federal states does the Federal Republic of Germany have?",
    cat: "Bund und Länder",
    options: [
      { text: "14", textEn: "14" },
      { text: "15", textEn: "15" },
      { text: "16", textEn: "16" },
      { text: "17", textEn: "17" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 25,
    type: "text",
    q: "Was ist kein Bundesland der Bundesrepublik Deutschland?",
    qEn: "What is not a federal state of the Federal Republic of Germany?",
    cat: "Bund und Länder",
    options: [
      { text: "Elsass-Lothringen", textEn: "Alsace-Lorraine" },
      { text: "Nordrhein-Westfalen", textEn: "North Rhine-Westphalia" },
      { text: "Mecklenburg-Vorpommern", textEn: "Mecklenburg-Western Pomerania" },
      { text: "Sachsen-Anhalt", textEn: "Saxony-Anhalt" }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 26,
    type: "text",
    q: "Deutschland ist …",
    qEn: "Germany is ...",
    cat: "Staat",
    options: [
      { text: "eine kommunistische Republik.", textEn: "a communist republic." },
      { text: "ein demokratischer und sozialer Bundesstaat.", textEn: "a democratic and social federal state." },
      { text: "eine kapitalistische und soziale Monarchie.", textEn: "a capitalist and social monarchy." },
      { text: "ein sozialer und sozialistischer Bundesstaat.", textEn: "a social and socialist federal state." }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 27,
    type: "text",
    q: "Deutschland ist …",
    qEn: "The Federal Republic of Germany is …",
    cat: "Staat",
    options: [
      { text: "ein sozialistischer Staat.", textEn: "a socialist state." },
      { text: "ein Bundesstaat.", textEn: "a social and socialist federal state." },
      { text: "eine Diktatur.", textEn: "a dictatorship." },
      { text: "eine Monarchie.", textEn: "a monarchy." }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 28,
    type: "text",
    q: "Wer wählt in Deutschland die Abgeordneten zum Bundestag?",
    qEn: "Who elects the members of the Bundestag in Germany?",
    cat: "Politik",
    options: [
      { text: "das Militär", textEn: "the military" },
      { text: "die Wirtschaft", textEn: "the economy" },
      { text: "das wahlberechtigte Volk", textEn: "the people entitled to vote" },
      { text: "die Verwaltung", textEn: "the administration" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 29,
    type: "text",
    q: "Welches Tier ist das Wappentier der Bundesrepublik Deutschland?",
    qEn: "Which animal is the heraldic animal of the Federal Republic of Germany?",
    cat: "Staat",
    options: [
      { text: "Löwe", textEn: "Leo" },
      { text: "Adler", textEn: "Eagle" },
      { text: "Bär", textEn: "Bear" },
      { text: "Pferd", textEn: "Horse" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 30,
    type: "text",
    q: "Was ist kein Merkmal unserer Demokratie?",
    qEn: "What is not a feature of our democracy?",
    cat: "Politik",
    options: [
      { text: "regelmäßige Wahlen", textEn: "Regular elections" },
      { text: "Pressezensur", textEn: "press censorship" },
      { text: "Meinungsfreiheit", textEn: "Freedom of opinion/speech" },
      { text: "verschiedene Parteien", textEn: "different parties" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 31,
    type: "text",
    q: "Die Zusammenarbeit von Parteien zur Bildung einer Regierung nennt man in Deutschland …",
    qEn: "The cooperation of parties to form a government is called in Germany ...",
    cat: "Politik",
    options: [
      { text: "Einheit.", textEn: "Unity." },
      { text: "Koalition.", textEn: "Coalition." },
      { text: "Ministerium.", textEn: "Ministry." },
      { text: "Fraktion.", textEn: "parliamentary group." }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 32,
    type: "text",
    q: "Was ist keine staatliche Gewalt in Deutschland?",
    qEn: "What is not state authority in Germany?",
    cat: "Staat",
    options: [
      { text: "Gesetzgebung", textEn: "Legislation" },
      { text: "Regierung", textEn: "Government" },
      { text: "Presse", textEn: "Press" },
      { text: "Rechtsprechung", textEn: "Case law" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 33,
    type: "text",
    q: "Welche Aussage ist richtig? In Deutschland …",
    qEn: "Which statement is correct? In Germany ...",
    cat: "Religion und Kultur",
    options: [
      { text: "sind Staat und Religionsgemeinschaften voneinander getrennt.", textEn: "state and religious communities are separated from each other" },
      { text: "bilden die Religionsgemeinschaften den Staat.", textEn: "the religious communities form the state." },
      { text: "ist der Staat abhängig von den Religionsgemeinschaften.", textEn: "the state is dependent on the religious communities." },
      { text: "bilden Staat und Religionsgemeinschaften eine Einheit.", textEn: "state and religious communities form a unit." }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 34,
    type: "text",
    q: "Was ist Deutschland nicht?",
    qEn: "What is Germany not?",
    cat: "Staat",
    options: [
      { text: "eine Demokratie", textEn: "a democracy" },
      { text: "ein Rechtsstaat", textEn: "a state governed by the rule of law" },
      { text: "eine Monarchie", textEn: "a monarchy" },
      { text: "ein Sozialstaat", textEn: "a welfare state" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 35,
    type: "text",
    q: "Womit finanziert der deutsche Staat die Sozialversicherung?",
    qEn: "How does the German state finance social security?",
    cat: "Wirtschaft",
    options: [
      { text: "Kirchensteuer", textEn: "Church taxes" },
      { text: "Sozialabgaben", textEn: "Social security contributions" },
      { text: "Spendengeldern", textEn: "Donations" },
      { text: "Vereinsbeiträgen", textEn: "Association fees" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 36,
    type: "text",
    q: "Welche Maßnahme schafft in Deutschland soziale Sicherheit?",
    qEn: "What measure creates social security in Germany?",
    cat: "Wirtschaft",
    options: [
      { text: "die Krankenversicherung", textEn: "health insurance" },
      { text: "die Autoversicherung", textEn: "Car insurance" },
      { text: "die Gebäudeversicherung", textEn: "Buildings insurance" },
      { text: "die Haftpflichtversicherung", textEn: "Liability insurance" }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 37,
    type: "text",
    q: "Wie werden die Regierungschefinnen/Regierungschefs der meisten Bundesländer in Deutschland genannt?",
    qEn: "How will the heads of government of most federal states in Germany?",
    cat: "Bund und Länder",
    options: [
      { text: "Erste Ministerin/Erster Minister", textEn: "First Minister" },
      { text: "Premierministerin/Premierminister", textEn: "Prime Minister" },
      { text: "Senatorin/Senator", textEn: "Senator/Senatorin" },
      { text: "Ministerpräsidentin/Ministerpräsident", textEn: "Prime Minister" }
    ],
    correct: 3,
    srcs: 1
  },
  {
    id: 38,
    type: "text",
    q: "Die Bundesrepublik Deutschland ist ein demokratischer und sozialer …",
    qEn: "The Federal Republic of Germany is a democratic and social ...",
    cat: "Staat",
    options: [
      { text: "Staatenverbund.", textEn: "Union of States." },
      { text: "Bundesstaat.", textEn: "Federal State." },
      { text: "Staatenbund.", textEn: "Confederation of States." },
      { text: "Zentralstaat.", textEn: "Central government." }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 39,
    type: "text",
    q: "Was hat jedes deutsche Bundesland?",
    qEn: "In Germany, the federal states do not have …",
    cat: "Bund und Länder",
    options: [
      { text: "eine eigene Außenministerin/einen eigenen Außenminister", textEn: "their own Minister of Foreign Affairs" },
      { text: "eine eigene Währung", textEn: "a currency of its own" },
      { text: "eine eigene Armee", textEn: "an army of its own" },
      { text: "eine eigene Regierung", textEn: "a government of its own" }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 40,
    type: "text",
    q: "Mit welchen Worten beginnt die deutsche Nationalhymne?",
    qEn: "With which words does the German national anthem begin?",
    cat: "Religion und Kultur",
    options: [
      { text: "Völker, hört die Signale …", textEn: "Peoples, listen to the signals..." },
      { text: "Einigkeit und Recht und Freiheit …", textEn: "Unity and justice and freedom..." },
      { text: "Freude schöner Götterfunken …", textEn: "Joy, beautiful spark of the gods..." },
      { text: "Deutschland einig Vaterland …", textEn: "Germany united fatherland..." }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 41,
    type: "text",
    q: "Warum gibt es in einer Demokratie mehr als eine Partei?",
    qEn: "Why is there more than one party in a democracy?",
    cat: "Politik",
    options: [
      { text: "weil dadurch die unterschiedlichen Meinungen der Bürgerinnen und Bürger vertreten werden", textEn: "because it takes into account the different opinions of citizens and citizens" },
      { text: "damit Bestechung in der Politik begrenzt wird", textEn: "to limit bribery in politics" },
      { text: "um politische Demonstrationen zu verhindern", textEn: "to prevent political demonstrations" },
      { text: "um wirtschaftlichen Wettbewerb anzuregen", textEn: "to stimulate economic competition" }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 42,
    type: "text",
    q: "Wer beschließt in Deutschland ein neues Gesetz?",
    qEn: "Who passes a new law in Germany?",
    cat: "Staat",
    options: [
      { text: "die Regierung", textEn: "the government" },
      { text: "das Parlament", textEn: "Parliament" },
      { text: "die Gerichte", textEn: "the dishes" },
      { text: "die Polizei", textEn: "the police" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 43,
    type: "text",
    q: "Wann kann in Deutschland eine Partei verboten werden?",
    qEn: "When can a party be banned in Germany?",
    cat: "Politik",
    options: [
      { text: "wenn ihr Wahlkampf zu teuer ist", textEn: "if their election campaign is too expensive" },
      { text: "wenn sie gegen die Verfassung kämpft", textEn: "when it fights against the constitution" },
      { text: "wenn sie Kritik am Staatsoberhaupt äußert", textEn: "when she expresses criticism of the head of state" },
      { text: "wenn ihr Programm eine neue Richtung vorschlägt", textEn: "when their program suggests a new direction" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 44,
    type: "text",
    q: "Wen kann man als Bürgerin/Bürger in Deutschland nicht direkt wählen?",
    qEn: "Who in Germany is not elected directly by the people?",
    cat: "Politik",
    options: [
      { text: "Abgeordnete des EU-Parlaments", textEn: "Members of the European Parliament" },
      { text: "Die Bundespräsidentin/den Bundespräsidenten", textEn: "The Federal President (female / male)" },
      { text: "Landtagsabgeordnete", textEn: "Member of the State Parliament" },
      { text: "Bundestagsabgeordnete", textEn: "Members of the Bundestag" }
    ],
    correct: 1,
    srcs: 1
  },
  {
    id: 45,
    type: "text",
    q: "Zu welcher Versicherung gehört die Pflegeversicherung?",
    qEn: "Which insurance is not part of the statutory social security system in Germany?",
    cat: "Wirtschaft",
    options: [
      { text: "Sozialversicherung", textEn: "Social Security" },
      { text: "Unfallversicherung", textEn: "Accident insurance" },
      { text: "Hausratsversicherung", textEn: "Household contents insurance (Hausratversicherung)" },
      { text: "Haftpflicht- und Feuerversicherung", textEn: "Liability and fire insurance" }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 46,
    type: "text",
    q: "Der deutsche Staat hat viele Aufgaben. Welche Aufgabe gehört dazu?",
    qEn: "The German state has many tasks. Which task belongs To this?",
    cat: "Staat",
    options: [
      { text: "Er baut Straßen und Schulen.", textEn: "He builds roads and schools." },
      { text: "Er verkauft Lebensmittel und Kleidung.", textEn: "He sells food and clothing." },
      { text: "Er versorgt alle Einwohnerinnen und Einwohner kostenlos mit Zeitungen.", textEn: "It provides all residents with free Newspapers." },
      { text: "Er produziert Autos und Busse.", textEn: "He produces cars and buses." }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 47,
    type: "text",
    q: "Der deutsche Staat hat viele Aufgaben. Welche Aufgabe gehört nicht dazu?",
    qEn: "The German state has many tasks. Which task belongs not to that?",
    cat: "Staat",
    options: [
      { text: "Er bezahlt für alle Staatsangehörigen Urlaubsreisen.", textEn: "It pays for vacation trips for all nationals." },
      { text: "Er zahlt Kindergeld.", textEn: "He pays child benefit." },
      { text: "Er unterstützt Museen.", textEn: "He supports museums." },
      { text: "Er fördert Sportlerinnen und Sportler.", textEn: "It promotes athletes." }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 48,
    type: "text",
    q: "Welches Organ gehört nicht zu den Verfassungsorganen Deutschlands?",
    qEn: "Who represents Germany internationally as the head of state?",
    cat: "Staat",
    options: [
      { text: "der Bundesrat", textEn: "the Federal Council" },
      { text: "die Bundespräsidentin/der Bundespräsident", textEn: "the Federal President (female / male)" },
      { text: "die Bürgerversammlung", textEn: "the citizens' assembly" },
      { text: "die Regierung", textEn: "the government" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 49,
    type: "text",
    q: "Wer bestimmt in Deutschland die Schulpolitik?",
    qEn: "Who determines school policy in Germany?",
    cat: "Bund und Länder",
    options: [
      { text: "die Lehrer und Lehrerinnen", textEn: "the teachers" },
      { text: "die Bundesländer", textEn: "the federal states" },
      { text: "das Familienministerium", textEn: "the Ministry of Family Affairs" },
      { text: "die Universitäten", textEn: "Universities" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 50,
    type: "text",
    q: "Die Wirtschaftsform in Deutschland nennt man …",
    qEn: "The economic system in Germany is called ...",
    cat: "Wirtschaft",
    options: [
      { text: "freie Zentralwirtschaft.", textEn: "free central economy." },
      { text: "soziale Marktwirtschaft.", textEn: "social market economy." },
      { text: "gelenkte Zentralwirtschaft.", textEn: "controlled central economy." },
      { text: "Planwirtschaft.", textEn: "Planned economy." }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 51,
    type: "text",
    q: "Zu einem demokratischen Rechtsstaat gehört es nicht, dass …",
    qEn: "It is not part of a democratic state under the rule of law that ...",
    cat: "Recht",
    options: [
      { text: "Menschen sich kritisch über die Regierung äußern können.", textEn: "People can express themselves critically about the government." },
      { text: "Bürger friedlich demonstrieren gehen dürfen.", textEn: "citizens are allowed to demonstrate peacefully." },
      { text: "Menschen von einer Privatpolizei ohne Grund verhaftet werden.", textEn: "people are arrested by a private police force for no reason." },
      { text: "jemand ein Verbrechen begeht und deshalb verhaftet wird.", textEn: "someone commits a crime and is arrested for it." }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 52,
    type: "text",
    q: "Was bedeutet \"Volkssouveränität\"? Alle Staatsgewalt geht vom ...",
    qEn: "What does \"popular sovereignty\" mean? All state power proceeds from ...",
    cat: "Staat",
    options: [
      { text: "Volke aus.", textEn: "Volke." },
      { text: "Bundestag aus.", textEn: "Bundestag." },
      { text: "preußischen König aus.", textEn: "Prussian king." },
      { text: "Bundesverfassungsgericht aus.", textEn: "Federal Constitutional Court." }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 53,
    type: "text",
    q: "Was bedeutet \"Rechtsstaat\" in Deutschland?",
    qEn: "What does \"rule of law\" mean in Germany?",
    cat: "Staat",
    options: [
      { text: "Der Staat hat Recht.", textEn: "The state is right." },
      { text: "Es gibt nur rechte Parteien.", textEn: "There are only right-wing parties." },
      { text: "Die Bürgerinnen und Bürger entscheiden über Gesetze.", textEn: "The citizens decide on laws." },
      { text: "Der Staat muss die Gesetze einhalten.", textEn: "The state must comply with the law." }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 54,
    type: "text",
    q: "Was ist keine staatliche Gewalt in Deutschland?",
    qEn: "Which of the following is not a recognized branch of state power in Germany?",
    cat: "Staat",
    options: [
      { text: "Legislative", textEn: "Legislature (Legislative)" },
      { text: "Judikative", textEn: "Judiciary (Judikative)" },
      { text: "Exekutive", textEn: "Executive (Exekutive)" },
      { text: "Direktive", textEn: "Directive (Direktive)" }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 55,
    type: "image",
    q: "Was zeigt dieses Bild?",
    qEn: "What does this picture show?",
    cat: "Staat",
    image: "assets/q055.jpg",
    options: [
      { text: "den Bundestagssitz in Berlin", textEn: "the seat of the Bundestag in Berlin" },
      { text: "das Bundesverfassungsgericht in Karlsruhe", textEn: "the Federal Constitutional Court in Karlsruhe" },
      { text: "das Bundesratsgebäude in Berlin", textEn: "the Bundesrat building in Berlin" },
      { text: "das Bundeskanzleramt in Berlin", textEn: "the Federal Chancellery in Berlin" }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 56,
    type: "text",
    q: "Welches Amt gehört in Deutschland zur Gemeindeverwaltung?",
    qEn: "Which office belongs to the municipal administration in Germany?",
    cat: "Bund und Länder",
    options: [
      { text: "Pfarramt", textEn: "Parish office" },
      { text: "Ordnungsamt", textEn: "Public Order Office" },
      { text: "Finanzamt", textEn: "Tax office" },
      { text: "Auswärtiges Amt", textEn: "Federal Foreign Office" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 57,
    type: "text",
    q: "Wer wird meistens zur Präsidentin/zum Präsidenten des Deutschen Bundestages gewählt?",
    qEn: "Who presides over the constituent sitting of the German Bundestag?",
    cat: "Politik",
    options: [
      { text: "die/der älteste Abgeordnete im Parlament", textEn: "the oldest member of parliament (Alterspräsident/in)" },
      { text: "die Ministerpräsidentin/der Ministerpräsident des größten Bundeslandes", textEn: "the Minister-President of the largest federal state" },
      { text: "eine ehemalige Bundeskanzlerin/ein ehemaliger Bundeskanzler", textEn: "a former Federal Chancellor" },
      { text: "eine Abgeordnete/ein Abgeordneter der stärksten Fraktion", textEn: "one member of parliament from the strongest parliamentary group" }
    ],
    correct: 3,
    srcs: 1
  },
  {
    id: 58,
    type: "text",
    q: "Wer ernennt in Deutschland die Ministerinnen/die Minister der Bundesregierung?",
    qEn: "Who is the head of state of the Federal Republic of Germany?",
    cat: "Politik",
    options: [
      { text: "die Präsidentin/der Präsident des Bundesverfassungsgerichtes", textEn: "the President of the Federal Constitutional Court" },
      { text: "die Bundespräsidentin/der Bundespräsident", textEn: "the Federal President (female / male)" },
      { text: "die Bundesratspräsidentin/der Bundesratspräsident", textEn: "the President of the Bundesrat" },
      { text: "die Bundestagspräsidentin/der Bundestagspräsident", textEn: "the President of the Bundestag" }
    ],
    correct: 1,
    srcs: 1
  },
  {
    id: 59,
    type: "text",
    q: "Vor wie vielen Jahren gab es erstmals eine jüdische Gemeinde auf dem Gebiet des heutigen Deutschlands?",
    qEn: "How many years ago was there first a Jewish community in the territory of today's Germany?",
    cat: "Geschichte",
    options: [
      { text: "vor etwa 300 Jahren", textEn: "about 300 years ago" },
      { text: "vor etwa 700 Jahren", textEn: "about 700 years ago" },
      { text: "vor etwa 1150 Jahren", textEn: "about 1,150 years ago" },
      { text: "vor etwa 1700 Jahren", textEn: "about 1,700 years ago" }
    ],
    correct: 3,
    srcs: 2
  },
  {
    id: 60,
    type: "text",
    q: "In Deutschland gehören der Bundestag und der Bundesrat zur …",
    qEn: "In Germany, the Bundestag and the Bundesrat are part of the ...",
    cat: "Staat",
    options: [
      { text: "Exekutive.", textEn: "executive." },
      { text: "Legislative.", textEn: "Legislative." },
      { text: "Direktive.", textEn: "Directive." },
      { text: "Judikative.", textEn: "Judiciary." }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 61,
    type: "text",
    q: "Was bedeutet \"Volkssouveränität\"?",
    qEn: "Germany is a constitutional state. What is a key characteristic?",
    cat: "Staat",
    options: [
      { text: "Die Königin/der König herrscht über das Volk.", textEn: "The King/Queen rules over the people." },
      { text: "Das Bundesverfassungsgericht steht über der Verfassung.", textEn: "The Federal Constitutional Court stands above the constitution." },
      { text: "Die Interessenverbände üben die Souveränität zusammen mit der Regierung aus.", textEn: "The interest groups exercise sovereignty together with the government." },
      { text: "Die Staatsgewalt geht vom Volke aus.", textEn: "State power emanates from the people." }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 62,
    type: "text",
    q: "Wenn das Parlament eines deutschen Bundeslandes gewählt wird, nennt man das …",
    qEn: "When the parliament of a German federal state is elected, that's what you call ...",
    cat: "Bund und Länder",
    options: [
      { text: "Kommunalwahl", textEn: "Municipal elections." },
      { text: "Landtagswahl", textEn: "State election." },
      { text: "Europawahl", textEn: "European elections." },
      { text: "Bundestagswahl", textEn: "Bundestag election." }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 63,
    type: "text",
    q: "Was gehört in Deutschland nicht zur Exekutive?",
    qEn: "What does not belong to the executive branch in Germany?",
    cat: "Staat",
    options: [
      { text: "die Polizei", textEn: "the police" },
      { text: "die Gerichte", textEn: "the dishes" },
      { text: "das Finanzamt", textEn: "the tax office" },
      { text: "die Ministerien", textEn: "the ministries" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 64,
    type: "text",
    q: "Die Bundesrepublik Deutschland ist heute gegliedert in …",
    qEn: "Today, the Federal Republic of Germany is divided into ...",
    cat: "Bund und Länder",
    options: [
      { text: "vier Besatzungszonen.", textEn: "four occupation zones." },
      { text: "einen Oststaat und einen Weststaat.", textEn: "an eastern state and a western state." },
      { text: "16 Kantone.", textEn: "16 cantons." },
      { text: "Bund, Länder und Kommunen.", textEn: "federal, state and local governments." }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 65,
    type: "text",
    q: "Es gehört nicht zu den Aufgaben des Deutschen Bundestages, …",
    qEn: "What is a main task of the German Bundestag?",
    cat: "Staat",
    options: [
      { text: "Gesetze zu entwerfen.", textEn: "Draft laws." },
      { text: "die Bundesregierung zu kontrollieren.", textEn: "to control the federal government." },
      { text: "die Bundeskanzlerin/den Bundeskanzler zu wählen.", textEn: "to elect the Federal Chancellor." },
      { text: "das Bundeskabinett zu bilden.", textEn: "to form the Federal Cabinet." }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 66,
    type: "text",
    q: "Welche Städte haben die größten jüdischen Gemeinden in Deutschland?",
    qEn: "Which cities have the largest Jewish communities in Germany?",
    cat: "Religion und Kultur",
    options: [
      { text: "Berlin und München", textEn: "Berlin and Munich" },
      { text: "Hamburg und Essen", textEn: "Hamburg and Essen" },
      { text: "Nürnberg und Stuttgart", textEn: "Nuremberg and Stuttgart" },
      { text: "Worms und Speyer", textEn: "Worms and Speyer" }
    ],
    correct: 0,
    srcs: 2
  },
  {
    id: 67,
    type: "text",
    q: "Was ist in Deutschland vor allem eine Aufgabe der Bundesländer?",
    qEn: "In Germany, what is above all a task of the Federal states?",
    cat: "Bund und Länder",
    options: [
      { text: "Verteidigungspolitik", textEn: "Defence policy" },
      { text: "Außenpolitik", textEn: "Foreign policy" },
      { text: "Wirtschaftspolitik", textEn: "Economic policy" },
      { text: "Schulpolitik", textEn: "School policy" }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 68,
    type: "text",
    q: "Warum kontrolliert der Staat in Deutschland das Schulwesen?",
    qEn: "Why does the state control the school system in Germany?",
    cat: "Staat",
    options: [
      { text: "weil es in Deutschland nur staatliche Schulen gibt", textEn: "because there are only state schools in Germany" },
      { text: "weil alle Schülerinnen und Schüler einen Schulabschluss haben müssen", textEn: "because all pupils have a school-leaving certificate must have" },
      { text: "weil es in den Bundesländern verschiedene Schulen gibt", textEn: "because there are different schools in the federal states" },
      { text: "weil es nach dem Grundgesetz seine Aufgabe ist", textEn: "because it is his task according to the Basic Law" }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 69,
    type: "text",
    q: "Die Bundesrepublik Deutschland hat einen dreistufigen Verwaltungsaufbau. Wie heißt die unterste politische Stufe?",
    qEn: "The Federal Republic of Germany has adopted a three-stage Administrative structure. What is the name of the lowest political level?",
    cat: "Bund und Länder",
    options: [
      { text: "Stadträte", textEn: "City councillors" },
      { text: "Landräte", textEn: "District administrators" },
      { text: "Gemeinden", textEn: "Municipalities" },
      { text: "Bezirksämter", textEn: "District offices" }
    ],
    correct: 2,
    srcs: 2
  },
  {
    id: 70,
    type: "image",
    q: "Der deutsche Bundespräsident Gustav Heinemann gibt Helmut Schmidt 1974 die Ernennungsurkunde zum deutschen Bundeskanzler. Was gehört zu den Aufgaben der deutschen Bundespräsidentin/des deutschen Bundespräsidenten?",
    qEn: "What role does the Federal President play in electing the Chancellor?",
    cat: "Politik",
    image: "assets/q070.jpg",
    options: [
      { text: "Sie/Er führt die Regierungsgeschäfte.", textEn: "He/she conducts the business of government." },
      { text: "Sie/Er kontrolliert die Regierungspartei.", textEn: "He/she controls the ruling party." },
      { text: "Sie/Er wählt die Ministerinnen/Minister aus.", textEn: "He/she selects the ministers." },
      { text: "Sie/Er schlägt die Kanzlerin/den Kanzler zur Wahl vor.", textEn: "They propose the Chancellor for election." }
    ],
    correct: 3,
    srcs: 1
  },
  {
    id: 71,
    type: "text",
    q: "Wo hält sich die deutsche Bundeskanzlerin/der deutsche Bundeskanzler am häufigsten auf? Am häufigsten ist sie/er …",
    qEn: "Where does the German Chancellor spend most of their working time? Most often they are …",
    cat: "Staat",
    options: [
      { text: "in Bonn, weil sich dort das Bundeskanzleramt und der Bundestag befinden.", textEn: "in Bonn, because the Federal Chancellery and the Bundestag." },
      { text: "auf Schloss Meseberg, dem Gästehaus der Bundesregierung, um Staatsgäste zu empfangen.", textEn: "at Schloss Meseberg, the guest house of the Federal Government, in order to state guests." },
      { text: "auf Schloss Bellevue, dem Amtssitz der Bundespräsidentin/des Bundespräsidenten, um Staatsgäste zu empfangen.", textEn: "at Bellevue Palace, the official residence of the President of the Swiss Confederation Federal Presidents to receive state guests." },
      { text: "in Berlin, weil sich dort das Bundeskanzleramt und der Bundestag befinden.", textEn: "in Berlin, because the Federal Chancellery and the Bundestag." }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 72,
    type: "text",
    q: "Wie heißt die jetzige Bundeskanzlerin/der jetzige Bundeskanzler von Deutschland?",
    qEn: "What is the name of the current Chancellor Chancellor of Germany?",
    cat: "Politik",
    options: [
      { text: "Gerhard Schröder", textEn: "Gerhard Schröder" },
      { text: "Angela Merkel", textEn: "Angela Merkel" },
      { text: "Ursula von der Leyen", textEn: "Ursula von der Leyen" },
      { text: "Friedrich Merz", textEn: "Friedrich Merz" }
    ],
    correct: 3,
    srcs: 2
  },
  {
    id: 73,
    type: "text",
    q: "Die beiden größten Fraktionen im Deutschen Bundestag heißen zurzeit …",
    qEn: "The two largest parliamentary groups in the German Bundestag are currently ...",
    cat: "Politik",
    options: [
      { text: "CDU/CSU und AfD.", textEn: "CDU/CSU and AfD." },
      { text: "Die Linke und Bündnis 90/Die Grünen.", textEn: "Die Linke and Bündnis 90/Die Grünen." },
      { text: "Bündnis 90/Die Grünen und SPD.", textEn: "Alliance 90/The Greens and SPD." },
      { text: "Die Linke und CDU/CSU.", textEn: "Die Linke and CDU/CSU." }
    ],
    correct: 0,
    srcs: 2
  },
  {
    id: 74,
    type: "text",
    q: "Wie heißt das Parlament für ganz Deutschland?",
    qEn: "What is the name of the parliament for the whole of Germany?",
    cat: "Staat",
    options: [
      { text: "Bundesversammlung", textEn: "Federal Convention" },
      { text: "Volkskammer", textEn: "People's Chamber" },
      { text: "Bundestag", textEn: "Bundestag" },
      { text: "Bundesgerichtshof", textEn: "Federal Court of Justice" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 75,
    type: "text",
    q: "Wie heißt Deutschlands heutiges Staatsoberhaupt?",
    qEn: "What is the name of Germany's current head of state?",
    cat: "Politik",
    options: [
      { text: "Frank-Walter Steinmeier", textEn: "Frank-Walter Steinmeier" },
      { text: "Bärbel Bas", textEn: "Bärbel Bas" },
      { text: "Bodo Ramelow", textEn: "Bodo Ramelow" },
      { text: "Joachim Gauck", textEn: "Joachim Gauck" }
    ],
    correct: 0,
    srcs: 2
  },
  {
    id: 76,
    type: "text",
    q: "Was bedeutet die Abkürzung CDU in Deutschland?",
    qEn: "What does the abbreviation CDU mean in Germany?",
    cat: "Politik",
    options: [
      { text: "Christliche Deutsche Union", textEn: "Christian German Union" },
      { text: "Club Deutscher Unternehmer", textEn: "Club of German Entrepreneurs" },
      { text: "Christlicher Deutscher Umweltschutz", textEn: "Christian German Environmental Protection" },
      { text: "Christlich Demokratische Union", textEn: "Christian Democratic Union" }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 77,
    type: "text",
    q: "Was ist die Bundeswehr?",
    qEn: "What is the Bundeswehr?",
    cat: "Staat",
    options: [
      { text: "die deutsche Polizei", textEn: "the German police" },
      { text: "ein deutscher Hafen", textEn: "a German port" },
      { text: "eine deutsche Bürgerinitiative", textEn: "a German citizens' initiative" },
      { text: "die deutsche Armee", textEn: "the German army" }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 78,
    type: "text",
    q: "Was bedeutet die Abkürzung SPD?",
    qEn: "What does the abbreviation SPD mean?",
    cat: "Politik",
    options: [
      { text: "Sozialistische Partei Deutschlands", textEn: "Socialist Party of Germany" },
      { text: "Sozialpolitische Partei Deutschlands", textEn: "Socio-political party of Germany" },
      { text: "Sozialdemokratische Partei Deutschlands", textEn: "Social Democratic Party of Germany" },
      { text: "Sozialgerechte Partei Deutschlands", textEn: "Socially Just Party of Germany" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 79,
    type: "text",
    q: "Was bedeutet die Abkürzung FDP in Deutschland?",
    qEn: "What does the abbreviation FDP mean in Germany?",
    cat: "Politik",
    options: [
      { text: "Friedliche Demonstrative Partei", textEn: "Peaceful Demonstrative Party" },
      { text: "Freie Deutschland Partei", textEn: "Free Germany Party" },
      { text: "Führende Demokratische Partei", textEn: "Leading Democratic Party" },
      { text: "Freie Demokratische Partei", textEn: "Free Democratic Party" }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 80,
    type: "text",
    q: "Welches Gericht in Deutschland ist zuständig für die Auslegung des Grundgesetzes?",
    qEn: "Which court in Germany is responsible for the interpretation of the Basic Law?",
    cat: "Recht",
    options: [
      { text: "Oberlandesgericht", textEn: "Higher Regional Court" },
      { text: "Amtsgericht", textEn: "District Court" },
      { text: "Bundesverfassungsgericht", textEn: "Federal Constitutional Court" },
      { text: "Verwaltungsgericht", textEn: "Administrative Court" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 81,
    type: "text",
    q: "Wer wählt die Bundeskanzlerin/den Bundeskanzler in Deutschland?",
    qEn: "Who elects the Federal Chancellor in Germany?",
    cat: "Politik",
    options: [
      { text: "der Bundesrat", textEn: "the Federal Council" },
      { text: "die Bundesversammlung", textEn: "the Federal Convention" },
      { text: "das Volk", textEn: "the people" },
      { text: "der Bundestag", textEn: "the Bundestag" }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 82,
    type: "text",
    q: "Wer leitet das deutsche Bundeskabinett?",
    qEn: "Who in Germany is elected by the Federal Convention (Bundesversammlung)?",
    cat: "Politik",
    options: [
      { text: "die Bundestagspräsidentin/der Bundestagspräsident", textEn: "the President of the Bundestag" },
      { text: "die Bundespräsidentin/der Bundespräsident", textEn: "the Federal President (female / male)" },
      { text: "die Bundesratspräsidentin/der Bundesratspräsident", textEn: "the President of the Bundesrat" },
      { text: "die Bundeskanzlerin/der Bundeskanzler", textEn: "the Federal Chancellor" }
    ],
    correct: 3,
    srcs: 1
  },
  {
    id: 83,
    type: "text",
    q: "Wer wählt die deutsche Bundeskanzlerin/den deutschen Bundeskanzler?",
    qEn: "Who elects the German Chancellor Federal Chancellor?",
    cat: "Politik",
    options: [
      { text: "das Volk", textEn: "the people" },
      { text: "die Bundesversammlung", textEn: "the Federal Convention" },
      { text: "der Bundestag", textEn: "the Bundestag" },
      { text: "die Bundesregierung", textEn: "the Federal Government" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 84,
    type: "text",
    q: "Welche Hauptaufgabe hat die deutsche Bundespräsidentin/der deutsche Bundespräsident? Sie/Er …",
    qEn: "What is the main task of the German Federal President? German Federal President? She/he ...",
    cat: "Politik",
    options: [
      { text: "regiert das Land.", textEn: "rules the country." },
      { text: "entwirft die Gesetze.", textEn: "drafts the laws" },
      { text: "repräsentiert das Land.", textEn: "represents the country." },
      { text: "überwacht die Einhaltung der Gesetze.", textEn: "monitors compliance with the law." }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 85,
    type: "text",
    q: "Wer bildet den deutschen Bundesrat?",
    qEn: "Who forms the German Bundesrat?",
    cat: "Bund und Länder",
    options: [
      { text: "die Abgeordneten des Bundestages", textEn: "the members of the Bundestag" },
      { text: "die Ministerinnen und Minister der Bundesregierung", textEn: "the Ministers of the Federal Government" },
      { text: "die Regierungsvertreter der Bundesländer", textEn: "the government representatives of the federal states" },
      { text: "die Parteimitglieder", textEn: "the party members" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 86,
    type: "text",
    q: "Wer wählt in Deutschland die Bundespräsidentin/den Bundespräsidenten?",
    qEn: "Who elects the Federal President in Germany Federal Presidents ?",
    cat: "Politik",
    options: [
      { text: "die Bundesversammlung", textEn: "the Federal Convention" },
      { text: "der Bundesrat", textEn: "the Federal Council" },
      { text: "das Bundesparlament", textEn: "the Federal Parliament" },
      { text: "das Bundesverfassungsgericht", textEn: "the Federal Constitutional Court" }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 87,
    type: "text",
    q: "Wer ist das Staatsoberhaupt der Bundesrepublik Deutschland?",
    qEn: "Who holds the highest office of state in Germany in terms of protocol?",
    cat: "Politik",
    options: [
      { text: "die Bundeskanzlerin/der Bundeskanzler", textEn: "the Federal Chancellor" },
      { text: "die Bundespräsidentin/der Bundespräsident", textEn: "the Federal President (female / male)" },
      { text: "die Bundesratspräsidentin/der Bundesratspräsident", textEn: "the President of the Bundesrat" },
      { text: "die Bundestagspräsidentin/der Bundestagspräsident", textEn: "the President of the Bundestag" }
    ],
    correct: 1,
    srcs: 1
  },
  {
    id: 88,
    type: "text",
    q: "Die parlamentarische Opposition im Deutschen Bundestag …",
    qEn: "What is a task of the Federal President in Germany?",
    cat: "Politik",
    options: [
      { text: "kontrolliert die Regierung.", textEn: "controls the government." },
      { text: "entscheidet, wer Bundesministerin/Bundesminister wird.", textEn: "decides who will become Federal Minister." },
      { text: "bestimmt, wer im Bundesrat sitzt.", textEn: "determines who sits in the Federal Council." },
      { text: "schlägt die Regierungschefinnen/Regierungschefs der Länder vor.", textEn: "proposes the heads of government of the federal states." }
    ],
    correct: 0,
    srcs: 1
  },
  {
    id: 89,
    type: "text",
    q: "Wie nennt man in Deutschland die Vereinigung von Abgeordneten einer Partei im Parlament?",
    qEn: "What is the association of members of parliament called in Germany of a party in parliament?",
    cat: "Politik",
    options: [
      { text: "Verband", textEn: "Association" },
      { text: "Ältestenrat", textEn: "Council of Elders" },
      { text: "Fraktion", textEn: "Parliamentary group" },
      { text: "Opposition", textEn: "Opposition" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 90,
    type: "text",
    q: "Die deutschen Bundesländer wirken an der Gesetzgebung des Bundes mit durch …",
    qEn: "The German Länder are involved in the legislation of the Federal with through ...",
    cat: "Bund und Länder",
    options: [
      { text: "den Bundesrat.", textEn: "the Federal Council." },
      { text: "die Bundesversammlung.", textEn: "the Federal Convention." },
      { text: "den Bundestag.", textEn: "the Bundestag." },
      { text: "die Bundesregierung.", textEn: "the Federal Government." }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 91,
    type: "text",
    q: "In Deutschland kann ein Regierungswechsel in einem Bundesland Auswirkungen auf die Bundespolitik haben. Das Regieren wird …",
    qEn: "In Germany, a change of government in a federal state have an impact on federal politics. Governing will ...",
    cat: "Bund und Länder",
    options: [
      { text: "schwieriger, wenn sich dadurch die Mehrheit im Bundestag ändert.", textEn: "more difficult if the majority in the Bundestag changes." },
      { text: "leichter, wenn dadurch neue Parteien in den Bundesrat kommen.", textEn: "if this means that new parties are elected to the Federal Council ." },
      { text: "schwieriger, wenn dadurch die Mehrheit im Bundesrat verändert wird.", textEn: "more difficult if it means that the majority in the Bundesrat is changed." },
      { text: "leichter, wenn es sich um ein reiches Bundesland handelt.", textEn: "easier if it is a rich federal state." }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 92,
    type: "text",
    q: "Was bedeutet die Abkürzung CSU in Deutschland?",
    qEn: "What does the abbreviation CSU mean in Germany?",
    cat: "Politik",
    options: [
      { text: "Christlich Sichere Union", textEn: "Christian Safe Union" },
      { text: "Christlich Süddeutsche Union", textEn: "Christian South German Union" },
      { text: "Christlich Sozialer Unternehmerverband", textEn: "Christian Social Entrepreneurs' Association" },
      { text: "Christlich Soziale Union", textEn: "Christian Social Union" }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 93,
    type: "text",
    q: "Je mehr \"Zweitstimmen\" eine Partei bei einer Bundestagswahl bekommt, desto …",
    qEn: "The more \"second votes\" a party receives in a Bundestag election the more ...",
    cat: "Politik",
    options: [
      { text: "weniger Erststimmen kann sie haben.", textEn: "it can have fewer first votes." },
      { text: "mehr Direktkandidaten der Partei ziehen ins Parlament ein.", textEn: "more direct candidates of the party enter parliament." },
      { text: "größer ist das Risiko, eine Koalition bilden zu müssen.", textEn: "greater is the risk of having to form a coalition." },
      { text: "mehr Sitze erhält die Partei im Parlament.", textEn: "the party will receive more seats in parliament." }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 94,
    type: "text",
    q: "Ab welchem Alter darf man in Deutschland an der Wahl zum Deutschen Bundestag teilnehmen?",
    qEn: "From what age can you vote in the election for the German Bundestag?",
    cat: "Politik",
    options: [
      { text: "16", textEn: "16" },
      { text: "18", textEn: "18" },
      { text: "21", textEn: "21" },
      { text: "23", textEn: "23" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 95,
    type: "text",
    q: "Was gilt für die meisten Kinder in Deutschland?",
    qEn: "What applies to most children in Germany?",
    cat: "Gesellschaft und Familie",
    options: [
      { text: "Wahlpflicht", textEn: "Compulsory voting" },
      { text: "Schulpflicht", textEn: "Schulpflicht" },
      { text: "Schweigepflicht", textEn: "Confidentiality" },
      { text: "Religionspflicht", textEn: "Religious duty" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 96,
    type: "text",
    q: "Wie kann jemand, der den Holocaust leugnet, bestraft werden?",
    qEn: "How can someone who denies the Holocaust be punished in Germany?",
    cat: "Recht",
    options: [
      { text: "Kürzung sozialer Leistungen", textEn: "Reduction of social welfare benefits" },
      { text: "bis zu 100 Sozialstunden", textEn: "up to 100 hours of community service" },
      { text: "gar nicht, Holocaustleugnung ist erlaubt", textEn: "not at all, Holocaust denial is permitted" },
      { text: "mit Freiheitsstrafe bis zu fünf Jahren oder mit Geldstrafe", textEn: "with imprisonment of up to five years or a fine" }
    ],
    correct: 3,
    srcs: 2
  },
  {
    id: 97,
    type: "text",
    q: "Was bezahlt man in Deutschland automatisch, wenn man fest angestellt ist?",
    qEn: "What do you pay automatically in Germany if you pay a fixed ?",
    cat: "Wirtschaft",
    options: [
      { text: "Sozialversicherung", textEn: "Social Security" },
      { text: "Sozialhilfe", textEn: "Social assistance" },
      { text: "Kindergeld", textEn: "Child benefit" },
      { text: "Wohngeld", textEn: "Housing allowance" }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 98,
    type: "text",
    q: "Wenn Abgeordnete im Deutschen Bundestag ihre Fraktion wechseln, …",
    qEn: "Before a federal bill (Bundesgesetz) can enter into force, …",
    cat: "Politik",
    options: [
      { text: "dürfen sie nicht mehr an den Sitzungen des Parlaments teilnehmen.", textEn: "they are no longer allowed to attend the sittings of the Parliament Participate" },
      { text: "kann die Regierung ihre Mehrheit verlieren.", textEn: "the government may lose its majority." },
      { text: "muss die Bundespräsidentin/der Bundespräsident zuvor ihr/sein Einverständnis geben.", textEn: "the Federal President must give their prior consent." },
      { text: "dürfen die Wählerinnen/Wähler dieser Abgeordneten noch einmal wählen.", textEn: "the voters of these members of parliament may still Vote once." }
    ],
    correct: 1,
    srcs: 1
  },
  {
    id: 99,
    type: "text",
    q: "Wer bezahlt in Deutschland die Sozialversicherungen?",
    qEn: "Who pays for social security in Germany?",
    cat: "Wirtschaft",
    options: [
      { text: "Arbeitgeberinnen/Arbeitgeber und Arbeitnehmerinnen/Arbeitnehmer", textEn: "Employers and Employees" },
      { text: "nur Arbeitnehmerinnen/Arbeitnehmer", textEn: "Employees only" },
      { text: "alle Staatsangehörigen", textEn: "all nationals" },
      { text: "nur Arbeitgeberinnen/Arbeitgeber", textEn: "Employers only" }
    ],
    correct: 0,
    srcs: 2
  },
  {
    id: 100,
    type: "text",
    q: "Was gehört nicht zur gesetzlichen Sozialversicherung?",
    qEn: "What is not part of statutory social insurance?",
    cat: "Wirtschaft",
    options: [
      { text: "die Lebensversicherung", textEn: "Life insurance" },
      { text: "die gesetzliche Rentenversicherung", textEn: "the statutory pension insurance" },
      { text: "die Arbeitslosenversicherung", textEn: "unemployment insurance" },
      { text: "die Pflegeversicherung", textEn: "long-term care insurance" }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 101,
    type: "text",
    q: "Gewerkschaften sind Interessenverbände der …",
    qEn: "Trade unions (Gewerkschaften) are interest groups representing …",
    cat: "Wirtschaft",
    options: [
      { text: "Jugendlichen.", textEn: "young people." },
      { text: "Arbeitnehmerinnen und Arbeitnehmer.", textEn: "employees." },
      { text: "Rentnerinnen und Rentner.", textEn: "pensioners and retirees." },
      { text: "Arbeitgeberinnen und Arbeitgeber.", textEn: "Employers." }
    ],
    correct: 1,
    srcs: 2
  },
  {
    id: 102,
    type: "text",
    q: "Womit kann man in der Bundesrepublik Deutschland geehrt werden, wenn man auf politischem, wirtschaftlichem, kulturellem, geistigem oder sozialem Gebiet eine besondere Leistung erbracht hat? Mit dem …",
    qEn: "What can you honour with in the Federal Republic of Germany political, economic, cultural, intellectual or social area has performed? With the ...",
    cat: "Gesellschaft und Familie",
    options: [
      { text: "Bundesverdienstkreuz", textEn: "Order of Merit of the Federal Republic of Germany" },
      { text: "Bundesadler", textEn: "Federal Eagle" },
      { text: "Vaterländischen Verdienstorden", textEn: "Patriotic Order of Merit" },
      { text: "Ehrentitel \"Held der Deutschen Demokratischen Republik\"", textEn: "Honorary title \"Hero of the German Democratic Republic\"" }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 103,
    type: "text",
    q: "Was wird in Deutschland als \"Ampelkoalition\" bezeichnet? Die Zusammenarbeit …",
    qEn: "What is called a \"traffic light coalition\" in Germany? The Collaboration ...",
    cat: "Politik",
    options: [
      { text: "der Bundestagsfraktionen von CDU und CSU", textEn: "of the CDU and CSU parliamentary groups in the Bundestag" },
      { text: "von SPD, FDP und Bündnis 90/Die Grünen in einer Regierung", textEn: "of SPD, FDP and Bündnis 90/Die Grünen in one government" },
      { text: "von CSU, Die LINKE und Bündnis 90/Die Grünen in einer Regierung", textEn: "of CSU, Die LINKE and Bündnis 90/Die Grünen in a Government" },
      { text: "der Bundestagsfraktionen von CDU und SPD", textEn: "of the parliamentary groups of the CDU and SPD" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 104,
    type: "text",
    q: "Eine Frau in Deutschland verliert ihre Arbeit. Was darf nicht der Grund für diese Entlassung sein?",
    qEn: "A woman in Germany loses her job. What is not allowed be the reason for this dismissal?",
    cat: "Recht",
    options: [
      { text: "Die Frau ist lange krank und arbeitsunfähig.", textEn: "The woman has been ill for a long time and unable to work." },
      { text: "Die Frau kam oft zu spät zur Arbeit.", textEn: "The woman was often late for work." },
      { text: "Die Frau erledigt private Sachen während der Arbeitszeit.", textEn: "The woman does private things during working hours." },
      { text: "Die Frau bekommt ein Kind und ihr Chef weiß das.", textEn: "The woman has a child and her boss knows it." }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 105,
    type: "text",
    q: "Was ist eine Aufgabe von Wahlhelferinnen/Wahlhelfern in Deutschland?",
    qEn: "What is a task of election volunteer workers (Wahlhelfer) in Germany?",
    cat: "Politik",
    options: [
      { text: "Sie helfen alten Menschen bei der Stimmabgabe in der Wahlkabine.", textEn: "They help old people to vote in the Voting booth." },
      { text: "Sie schreiben die Wahlbenachrichtigungen vor der Wahl.", textEn: "They write the election notifications before the election." },
      { text: "Sie geben Zwischenergebnisse an die Medien weiter.", textEn: "They pass on interim results to the media." },
      { text: "Sie zählen die Stimmen nach dem Ende der Wahl.", textEn: "They count the votes after the end of the election." }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 106,
    type: "text",
    q: "In Deutschland helfen ehrenamtliche Wahlhelferinnen und Wahlhelfer bei den Wahlen. Was ist eine Aufgabe von Wahlhelferinnen/Wahlhelfern?",
    qEn: "In Germany, volunteer election workers help during elections. What is a task of election workers?",
    cat: "Politik",
    options: [
      { text: "Sie helfen Kindern und alten Menschen beim Wählen.", textEn: "They help children and old people to vote." },
      { text: "Sie schreiben Karten und Briefe mit der Angabe des Wahllokals.", textEn: "They write cards and letters with the indication of the polling station." },
      { text: "Sie geben Zwischenergebnisse an Journalisten weiter.", textEn: "They pass on interim results to journalists." },
      { text: "Sie zählen die Stimmen nach dem Ende der Wahl.", textEn: "They count the votes after the end of the election." }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 107,
    type: "text",
    q: "Für wie viele Jahre wird der Bundestag in Deutschland gewählt?",
    qEn: "For how many years is the Bundestag elected in Germany?",
    cat: "Politik",
    options: [
      { text: "2 Jahre", textEn: "2 years" },
      { text: "4 Jahre", textEn: "4 years" },
      { text: "6 Jahre", textEn: "6 years" },
      { text: "8 Jahre", textEn: "8 years" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 108,
    type: "text",
    q: "Bei einer Bundestagswahl in Deutschland darf jede/jeder wählen, die/der …",
    qEn: "In a federal parliamentary election (Bundestagswahl) in Germany, everyone is eligible to vote who …",
    cat: "Politik",
    options: [
      { text: "in der Bundesrepublik Deutschland wohnt und wählen möchte.", textEn: "lives in the Federal Republic of Germany and wishes to vote." },
      { text: "Bürgerin/Bürger der Bundesrepublik Deutschland ist und mindestens 18 Jahre alt ist.", textEn: "is a citizen of the Federal Republic of Germany and is at least 18 years old." },
      { text: "seit mindestens 3 Jahren in der Bundesrepublik Deutschland lebt.", textEn: "Have been in the Federal Republic of Germany for at least 3 years lives." },
      { text: "Bürgerin/Bürger der Bundesrepublik Deutschland ist und mindestens 21 Jahre alt ist.", textEn: "is a citizen of the Federal Republic of Germany and is at least 21 years old." }
    ],
    correct: 1,
    srcs: 1
  },
  {
    id: 109,
    type: "text",
    q: "Wie oft gibt es normalerweise Bundestagswahlen in Deutschland?",
    qEn: "How often are there usually federal elections in Germany?",
    cat: "Politik",
    options: [
      { text: "alle drei Jahre", textEn: "every three years" },
      { text: "alle vier Jahre", textEn: "every four years" },
      { text: "alle fünf Jahre", textEn: "every five years" },
      { text: "alle sechs Jahre", textEn: "every six years" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 110,
    type: "text",
    q: "Für wie viele Jahre wird der Bundestag in Deutschland gewählt?",
    qEn: "For how many years is the German Bundestag elected?",
    cat: "Politik",
    options: [
      { text: "2 Jahre", textEn: "2 years" },
      { text: "3 Jahre", textEn: "3 years" },
      { text: "4 Jahre", textEn: "4 years" },
      { text: "5 Jahre", textEn: "5 years" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 111,
    type: "text",
    q: "Welche Handlungen mit Bezug auf den Staat Israel sind in Deutschland verboten?",
    qEn: "Which actions relating to the State of Israel are prohibited in Germany?",
    cat: "Recht",
    options: [
      { text: "die Politik Israels öffentlich kritisieren", textEn: "publicly criticizing the policies of Israel" },
      { text: "das Aufhängen einer israelischen Flagge auf dem Privatgrundstück", textEn: "hanging an Israeli flag on private property" },
      { text: "eine Diskussion über die Politik Israels", textEn: "a discussion about the policies of Israel" },
      { text: "der öffentliche Aufruf zur Vernichtung Israels", textEn: "the public call for the destruction of Israel" }
    ],
    correct: 3,
    srcs: 2
  },
  {
    id: 112,
    type: "text",
    q: "Die Wahlen in Deutschland sind …",
    qEn: "The elections in Germany are ...",
    cat: "Politik",
    options: [
      { text: "speziell.", textEn: "special." },
      { text: "geheim.", textEn: "secret." },
      { text: "berufsbezogen.", textEn: "job-related." },
      { text: "geschlechtsabhängig.", textEn: "gender-dependent." }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 113,
    type: "text",
    q: "Wahlen in Deutschland gewinnt die Partei, die …",
    qEn: "In Germany, a political party receives parliamentary seats if it …",
    cat: "Politik",
    options: [
      { text: "die meisten Stimmen bekommt.", textEn: "gets the most votes." },
      { text: "die meisten Männer mehrheitlich gewählt haben.", textEn: "voted for most men by a majority." },
      { text: "die meisten Stimmen bei den Arbeiterinnen/Arbeitern bekommen hat.", textEn: "received the most votes among workers." },
      { text: "die meisten Erststimmen für ihre Kanzlerkandidatin/ihren Kanzlerkandidaten erhalten hat.", textEn: "received the most first-preference votes (Erststimmen) for its chancellor candidate." }
    ],
    correct: 0,
    srcs: 1
  },
  {
    id: 114,
    type: "text",
    q: "An demokratischen Wahlen in Deutschland teilzunehmen ist …",
    qEn: "Participating in democratic elections in Germany is ...",
    cat: "Politik",
    options: [
      { text: "eine Pflicht.", textEn: "a duty." },
      { text: "ein Recht.", textEn: "a right." },
      { text: "ein Zwang.", textEn: "a compulsion." },
      { text: "eine Last.", textEn: "a burden." }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 115,
    type: "text",
    q: "Was bedeutet \"aktives Wahlrecht\" in Deutschland?",
    qEn: "What does \"active suffrage\" mean in Germany?",
    cat: "Politik",
    options: [
      { text: "Man kann gewählt werden.", textEn: "You can be elected." },
      { text: "Man muss wählen gehen.", textEn: "You have to vote." },
      { text: "Man kann wählen.", textEn: "You can choose." },
      { text: "Man muss zur Auszählung der Stimmen gehen.", textEn: "You have to go to the counting of the votes." }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 116,
    type: "text",
    q: "Wenn Sie bei einer Bundestagswahl in Deutschland wählen dürfen, heißt das …",
    qEn: "If you vote in a Bundestag election in Germany that means ...",
    cat: "Politik",
    options: [
      { text: "aktive Wahlkampagne.", textEn: "active election campaign." },
      { text: "aktives Wahlverfahren.", textEn: "active election process." },
      { text: "aktiver Wahlkampf.", textEn: "active election campaign." },
      { text: "aktives Wahlrecht.", textEn: "active right to vote." }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 117,
    type: "text",
    q: "Wie viel Prozent der Zweitstimmen müssen Parteien mindestens bekommen, um in den Deutschen Bundestag gewählt zu werden?",
    qEn: "What percentage of second votes must parties receive at least to be elected to the German Bundestag?",
    cat: "Politik",
    options: [
      { text: "3%", textEn: "3%" },
      { text: "4%", textEn: "4%" },
      { text: "5%", textEn: "5%" },
      { text: "6%", textEn: "6%" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 118,
    type: "text",
    q: "Wer darf bei den rund 40 jüdischen Makkabi-Sportvereinen Mitglied werden?",
    qEn: "Who is allowed to become a member of the roughly 40 Jewish Makkabi sports clubs in Germany?",
    cat: "Gesellschaft und Familie",
    options: [
      { text: "nur Deutsche", textEn: "only Germans" },
      { text: "nur Israelis", textEn: "only Israelis" },
      { text: "nur religiöse Menschen", textEn: "only religious people" },
      { text: "alle Menschen", textEn: "all people" }
    ],
    correct: 3,
    srcs: 2
  },
  {
    id: 119,
    type: "text",
    q: "Wahlen in Deutschland sind frei. Was bedeutet das?",
    qEn: "What does the principle of free elections mean in Germany?",
    cat: "Politik",
    options: [
      { text: "Alle verurteilten Straftäterinnen/Straftäter dürfen nicht wählen.", textEn: "All convicted criminals are barred from voting." },
      { text: "Wenn ich wählen gehen möchte, muss meine Arbeitgeberin/mein Arbeitgeber mir frei geben.", textEn: "If I want to vote, my employer must give me time off." },
      { text: "Jede Person kann ohne Zwang entscheiden, ob sie wählen möchte und wen sie wählen möchte.", textEn: "Every person can decide freely without coercion whether they want to vote and whom they want to vote for." },
      { text: "Ich kann frei entscheiden, wo ich wählen gehen möchte.", textEn: "I can freely choose where I want to go and vote." }
    ],
    correct: 2,
    srcs: 1
  },
  {
    id: 120,
    type: "text",
    q: "Das Wahlsystem in Deutschland ist ein …",
    qEn: "The electoral system in Germany is a ...",
    cat: "Politik",
    options: [
      { text: "Zensuswahlrecht.", textEn: "Census suffrage." },
      { text: "Dreiklassenwahlrecht.", textEn: "Three-class suffrage." },
      { text: "Mehrheits- und Verhältniswahlrecht.", textEn: "Majority and proportional representation." },
      { text: "allgemeines Männerwahlrecht.", textEn: "universal male suffrage." }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 121,
    type: "text",
    q: "Eine Partei möchte in den Deutschen Bundestag. Sie muss aber einen Mindestanteil an Wählerstimmen haben. Das heißt …",
    qEn: "A party wants to enter the German Bundestag. However, it must have a minimum share of votes. That means ...",
    cat: "Politik",
    options: [
      { text: "5%-Hürde.", textEn: "5% hurdle." },
      { text: "Zulassungsgrenze.", textEn: "Admission limit." },
      { text: "Basiswert.", textEn: "Underlying asset." },
      { text: "Richtlinie.", textEn: "Directive." }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 122,
    type: "text",
    q: "Welchem Grundsatz unterliegen Wahlen in Deutschland? Wahlen in Deutschland sind …",
    qEn: "What is the principle of elections in Germany? Elections in Germany are ...",
    cat: "Politik",
    options: [
      { text: "frei, gleich, geheim.", textEn: "free, equal, secret." },
      { text: "offen, sicher, frei.", textEn: "open, safe, free." },
      { text: "geschlossen, gleich, sicher.", textEn: "closed, equal, safe." },
      { text: "sicher, offen, freiwillig.", textEn: "Secure, open, voluntary." }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 123,
    type: "text",
    q: "Was ist in Deutschland die \"5%-Hürde\"?",
    qEn: "What is the \"5% hurdle\" (5%-Hürde) in Germany?",
    cat: "Politik",
    options: [
      { text: "Abstimmungsregelung im Bundestag für kleine Parteien", textEn: "Voting regulation in the Bundestag for small parties" },
      { text: "Anwesenheitskontrolle im Bundestag für Abstimmungen", textEn: "Attendance control in the Bundestag for votes" },
      { text: "Mindestanteil an Wählerstimmen, um ins Parlament zu kommen", textEn: "Minimum share of votes to get into parliament" },
      { text: "Anwesenheitskontrolle im Bundesrat für Abstimmungen", textEn: "Attendance check in the Bundesrat for votes" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 124,
    type: "text",
    q: "Die Bundestagswahl in Deutschland ist die Wahl …",
    qEn: "The Bundestag election in Germany is the election ...",
    cat: "Politik",
    options: [
      { text: "der Bundeskanzlerin/des Bundeskanzlers.", textEn: "the Federal Chancellor (female / male)." },
      { text: "der Parlamente der Länder.", textEn: "of the parliaments of the federal states." },
      { text: "des Parlaments für Deutschland.", textEn: "of the Parliament for Germany." },
      { text: "der Bundespräsidentin/des Bundespräsidenten.", textEn: "the Federal President (female / male)." }
    ],
    correct: 2,
    srcs: 1
  },
  {
    id: 125,
    type: "text",
    q: "In einer Demokratie ist eine Funktion von regelmäßigen Wahlen, …",
    qEn: "In a democracy, one function is of regular elections, …",
    cat: "Politik",
    options: [
      { text: "die Bürgerinnen und Bürger zu zwingen, ihre Stimme abzugeben.", textEn: "force citizens to make their voices heard ." },
      { text: "nach dem Willen der Wählermehrheit den Wechsel der Regierung zu ermöglichen.", textEn: "according to the will of the majority of voters, the change of government ." },
      { text: "im Land bestehende Gesetze beizubehalten.", textEn: "to maintain existing laws in the country." },
      { text: "den Armen mehr Macht zu geben.", textEn: "to give more power to the poor." }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 126,
    type: "text",
    q: "Was bekommen wahlberechtigte Bürgerinnen und Bürger in Deutschland vor einer Wahl?",
    qEn: "What do citizens entitled to vote get in Germany facing an election?",
    cat: "Politik",
    options: [
      { text: "eine Wahlbenachrichtigung von der Gemeinde", textEn: "a voter's notification from the municipality" },
      { text: "eine Wahlerlaubnis von der Bundespräsidentin/von dem Bundespräsidenten", textEn: "a voting permit from the Federal President" },
      { text: "eine Benachrichtigung von der Bundesversammlung", textEn: "a notification from the Federal Assembly" },
      { text: "eine Benachrichtigung vom Pfarramt", textEn: "a notification from the parish office" }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 127,
    type: "text",
    q: "Warum gibt es die 5%-Hürde im Wahlgesetz der Bundesrepublik Deutschland? Es gibt sie, weil …",
    qEn: "Why is there a 5% threshold in the election law of the Federal Republic of Germany? It exists because …",
    cat: "Politik",
    options: [
      { text: "die Programme von vielen kleinen Parteien viele Gemeinsamkeiten haben.", textEn: "the programmes of many small parties, many have things in common." },
      { text: "die Bürgerinnen und Bürger bei vielen kleinen Parteien die Orientierung verlieren können.", textEn: "the citizens of many small parties Lose orientation." },
      { text: "viele kleine Parteien die Regierungsbildung erschweren.", textEn: "many small parties make it difficult to form a government." },
      { text: "die kleinen Parteien nicht so viel Geld haben, um die Politikerinnen und Politiker zu bezahlen.", textEn: "the small parties do not have enough money to support the politicians." }
    ],
    correct: 2,
    srcs: 2
  },
  {
    id: 128,
    type: "text",
    q: "Parlamentsmitglieder, die von den Bürgerinnen und Bürgern gewählt werden, nennt man …",
    qEn: "Members of parliament who are elected by citizens are called …",
    cat: "Politik",
    options: [
      { text: "Abgeordnete.", textEn: "Members of parliament." },
      { text: "Kanzlerinnen/Kanzler.", textEn: "Chancellors." },
      { text: "Botschafterinnen/Botschafter.", textEn: "Ambassadors." },
      { text: "Ministerpräsidentinnen/Ministerpräsidenten.", textEn: "Minister-Presidents." }
    ],
    correct: 0,
    srcs: 1
  },
  {
    id: 129,
    type: "text",
    q: "Vom Volk gewählt wird in Deutschland …",
    qEn: "In Germany, who/what is elected directly by the people?",
    cat: "Politik",
    options: [
      { text: "die Bundeskanzlerin/der Bundeskanzler.", textEn: "the Federal Chancellor." },
      { text: "die Ministerpräsidentin/der Ministerpräsident eines Bundeslandes.", textEn: "the Minister-President of a federal state." },
      { text: "der Bundestag.", textEn: "the Bundestag (Federal Parliament)." },
      { text: "die Bundespräsidentin/der Bundespräsident.", textEn: "the Federal President (female / male)." }
    ],
    correct: 2,
    srcs: 1
  },
  {
    id: 130,
    type: "image",
    q: "Welcher Stimmzettel wäre bei einer Bundestagswahl gültig?",
    qEn: "Which ballot paper would be valid in a Bundestag election?",
    cat: "Politik",
    image: "assets/q130.jpg",
    options: [
      { text: "1", textEn: "1" },
      { text: "2", textEn: "2" },
      { text: "3", textEn: "3" },
      { text: "4", textEn: "4" }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 131,
    type: "text",
    q: "In Deutschland ist eine Bürgermeisterin/ein Bürgermeister …",
    qEn: "In Germany, a mayor (Bürgermeister/in) is …",
    cat: "Staat",
    options: [
      { text: "die Leiterin/der Leiter einer Schule.", textEn: "the head / principal of a school." },
      { text: "die Chefin/der Chef einer Bank.", textEn: "the head / CEO of a bank." },
      { text: "das Oberhaupt einer Gemeinde.", textEn: "the head of a municipality (mayor)." },
      { text: "die/der Vorsitzende einer Partei.", textEn: "the chairperson of a political party." }
    ],
    correct: 2,
    srcs: 1
  },
  {
    id: 132,
    type: "text",
    q: "Viele Menschen in Deutschland arbeiten in ihrer Freizeit ehrenamtlich. Was bedeutet das?",
    qEn: "Many people in Germany work in their free time on a voluntary basis. What does this mean?",
    cat: "Gesellschaft und Familie",
    options: [
      { text: "Sie arbeiten als Soldatinnen/Soldaten.", textEn: "They work as soldiers." },
      { text: "Sie arbeiten freiwillig und unbezahlt in Vereinen und Verbänden.", textEn: "They work voluntarily and unpaid in associations and Associations." },
      { text: "Sie arbeiten in der Bundesregierung.", textEn: "You work in the federal government." },
      { text: "Sie arbeiten in einem Krankenhaus und verdienen dabei Geld.", textEn: "They work in a hospital and earn money in the process." }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 133,
    type: "text",
    q: "Was ist bei Bundestags- und Landtagswahlen in Deutschland erlaubt?",
    qEn: "What happens in federal and state elections in Germany allowed?",
    cat: "Politik",
    options: [
      { text: "Der Ehemann wählt für seine Frau mit.", textEn: "The husband votes for his wife." },
      { text: "Man kann durch Briefwahl seine Stimme abgeben.", textEn: "You can cast your vote by postal vote." },
      { text: "Man kann am Wahltag telefonisch seine Stimme abgeben.", textEn: "You can cast your vote by telephone on election day." },
      { text: "Kinder ab dem Alter von 14 Jahren dürfen wählen.", textEn: "Children from the age of 14 are allowed to vote." }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 134,
    type: "text",
    q: "Man will die Buslinie abschaffen, mit der Sie immer zur Arbeit fahren. Was können Sie machen, um die Buslinie zu erhalten?",
    qEn: "The bus route you use to commute to work is to be cancelled. What can you do to preserve the bus line?",
    cat: "Gesellschaft und Familie",
    options: [
      { text: "Ich beteilige mich an einer Bürgerinitiative für die Erhaltung der Buslinie oder gründe selber eine Initiative.", textEn: "I join a citizens' initiative (Bürgerinitiative) to keep the bus line or start an initiative myself." },
      { text: "Ich werde Mitglied in einem Sportverein und trainiere Radfahren.", textEn: "I join a sports club and train cycling." },
      { text: "Ich wende mich an das Finanzamt, weil ich als Steuerzahlerin/Steuerzahler ein Recht auf die Buslinie habe.", textEn: "I contact the tax office because as a taxpayer I have a right to the bus line." },
      { text: "Ich schreibe einen Brief an das Forstamt der Gemeinde.", textEn: "I write a letter to the municipal forestry office." }
    ],
    correct: 0,
    srcs: 2
  },
  {
    id: 135,
    type: "text",
    q: "Wen vertreten die Gewerkschaften in Deutschland?",
    qEn: "Who is represented by trade unions (Gewerkschaften) in Germany?",
    cat: "Wirtschaft",
    options: [
      { text: "große Unternehmen", textEn: "large enterprises" },
      { text: "kleine Unternehmen", textEn: "small businesses" },
      { text: "Selbstständige", textEn: "self-employed persons" },
      { text: "Arbeitnehmerinnen und Arbeitnehmer", textEn: "employees / workers" }
    ],
    correct: 3,
    srcs: 2
  },
  {
    id: 136,
    type: "text",
    q: "Sie gehen in Deutschland zum Arbeitsgericht bei …",
    qEn: "In Germany, you go to the labor court (Arbeitsgericht) in case of …",
    cat: "Recht",
    options: [
      { text: "falscher Nebenkostenabrechnung.", textEn: "incorrect utility bill calculations." },
      { text: "ungerechtfertigter Kündigung durch Ihre Chefin/Ihren Chef.", textEn: "unjustified termination of employment by your employer / boss." },
      { text: "Problemen mit den Nachbarinnen/Nachbarn.", textEn: "problems with neighbors." },
      { text: "Schwierigkeiten nach einem Verkehrsunfall.", textEn: "difficulties following a traffic accident." }
    ],
    correct: 1,
    srcs: 1
  },
  {
    id: 137,
    type: "text",
    q: "Welches Gericht ist in Deutschland bei Konflikten in der Arbeitswelt zuständig?",
    qEn: "Which court is responsible in Germany in the event of conflicts in the world of work?",
    cat: "Recht",
    options: [
      { text: "das Familiengericht", textEn: "the family court" },
      { text: "das Strafgericht", textEn: "the criminal court" },
      { text: "das Arbeitsgericht", textEn: "the Labour Court" },
      { text: "das Amtsgericht", textEn: "the Local Court" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 138,
    type: "text",
    q: "Was kann ich in Deutschland machen, wenn mir meine Arbeitgeberin/mein Arbeitgeber zu Unrecht gekündigt hat?",
    qEn: "What can I do in Germany if my employer has unlawfully dismissed me?",
    cat: "Recht",
    options: [
      { text: "weiterarbeiten und freundlich zur Chefin/zum Chef sein", textEn: "continue working and be friendly to the boss" },
      { text: "ein Mahnverfahren gegen die Arbeitgeberin/den Arbeitgeber führen", textEn: "initiate formal dunning proceedings against the employer" },
      { text: "Kündigungsschutzklage erheben", textEn: "file a lawsuit against unlawful dismissal (Kündigungsschutzklage)" },
      { text: "die Arbeitgeberin/den Arbeitgeber bei der Polizei anzeigen", textEn: "report the employer to the police" }
    ],
    correct: 2,
    srcs: 2
  },
  {
    id: 139,
    type: "text",
    q: "Wann kommt es in Deutschland zu einem Prozess vor Gericht? Wenn jemand …",
    qEn: "When will there be a trial in court in Germany? If someone ...",
    cat: "Recht",
    options: [
      { text: "zu einer anderen Religion übertritt.", textEn: "converts to another religion" },
      { text: "eine Straftat begangen hat und angeklagt wird.", textEn: "has committed a criminal offence and is being charged" },
      { text: "eine andere Meinung als die der Regierung vertritt.", textEn: "has a different opinion from that of the government" },
      { text: "sein Auto falsch geparkt hat und es abgeschleppt wird.", textEn: "has parked his car incorrectly and it is towed away" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 140,
    type: "text",
    q: "Was macht eine Schöffin/ein Schöffe in Deutschland? Sie/Er …",
    qEn: "What does a lay judge (Schöffe/Schöffin) do in Germany? They …",
    cat: "Recht",
    options: [
      { text: "entscheidet mit Richterinnen/Richtern über Schuld und Strafe.", textEn: "decides on guilt and punishment together with professional judges." },
      { text: "gibt Bürgerinnen/Bürgern rechtlichen Rat.", textEn: "gives legal advice to citizens." },
      { text: "stellt Urkunden aus.", textEn: "issues official certificates and deeds." },
      { text: "verteidigt die Angeklagte/den Angeklagten.", textEn: "defends the accused." }
    ],
    correct: 0,
    srcs: 1
  },
  {
    id: 141,
    type: "text",
    q: "Wer berät in Deutschland Personen bei Rechtsfragen und vertritt sie vor Gericht?",
    qEn: "Who advises people in Germany on legal issues and represents them in court?",
    cat: "Recht",
    options: [
      { text: "eine Rechtsanwältin/ein Rechtsanwalt", textEn: "a lawyer" },
      { text: "eine Richterin/ein Richter", textEn: "one judge" },
      { text: "eine Schöffin/ein Schöffe", textEn: "a lay judge" },
      { text: "eine Staatsanwältin/ein Staatsanwalt", textEn: "a public prosecutor" }
    ],
    correct: 0,
    srcs: 2
  },
  {
    id: 142,
    type: "text",
    q: "Was ist die Hauptaufgabe einer Richterin/eines Richters in Deutschland? Eine Richterin/ein Richter …",
    qEn: "What is the main task of a judge (Richter/in) in Germany? A judge …",
    cat: "Recht",
    options: [
      { text: "vertritt Bürgerinnen und Bürger vor einem Gericht.", textEn: "represents citizens before a court." },
      { text: "arbeitet an einem Gericht und spricht Urteile.", textEn: "works at a court and pronounces verdicts." },
      { text: "ändert Gesetze.", textEn: "changes laws." },
      { text: "betreut Jugendliche vor Gericht.", textEn: "supervises juveniles in court." }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 143,
    type: "text",
    q: "Eine Richterin/ein Richter in Deutschland gehört zur …",
    qEn: "A judge (Richter/in) in Germany belongs to the …",
    cat: "Staat",
    options: [
      { text: "Judikative.", textEn: "Judiciary" },
      { text: "Exekutive.", textEn: "executive." },
      { text: "Operative.", textEn: "Operative" },
      { text: "Legislative.", textEn: "Legislative" }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 144,
    type: "text",
    q: "Eine Richterin/ein Richter gehört in Deutschland zur …",
    qEn: "A judge (Richter/in) in Germany belongs to the …",
    cat: "Staat",
    options: [
      { text: "vollziehenden Gewalt.", textEn: "executive power." },
      { text: "rechtsprechenden Gewalt.", textEn: "judiciary." },
      { text: "planenden Gewalt.", textEn: "planning violence." },
      { text: "gesetzgebenden Gewalt.", textEn: "legislative power." }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 145,
    type: "text",
    q: "In Deutschland wird die Staatsgewalt geteilt. Für welche Staatsgewalt arbeitet eine Richterin/ein Richter? Für die …",
    qEn: "State power is divided in Germany. For which state power does a judge work? For the …",
    cat: "Staat",
    options: [
      { text: "Judikative", textEn: "Judiciary (Judikative)" },
      { text: "Exekutive", textEn: "Executive (Exekutive)" },
      { text: "Presse", textEn: "Press" },
      { text: "Legislative", textEn: "Legislature (Legislative)" }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 146,
    type: "text",
    q: "Wie nennt man in Deutschland ein Verfahren vor einem Gericht?",
    qEn: "What is a court case called in Germany?",
    cat: "Recht",
    options: [
      { text: "Programm", textEn: "Program" },
      { text: "Prozedur", textEn: "Procedure" },
      { text: "Protokoll", textEn: "Protocol" },
      { text: "Prozess", textEn: "Process" }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 147,
    type: "text",
    q: "Was ist die Arbeit einer Richterin/eines Richters in Deutschland?",
    qEn: "What is the job of a judge (Richter/in) in Germany?",
    cat: "Recht",
    options: [
      { text: "Deutschland regieren", textEn: "Govern Germany" },
      { text: "Recht sprechen", textEn: "Administer justice / pronounce judgments" },
      { text: "Pläne erstellen", textEn: "Draw up plans" },
      { text: "Gesetze erlassen", textEn: "Pass laws" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 148,
    type: "text",
    q: "Was ist eine Aufgabe der Polizei in Deutschland?",
    qEn: "What is the task of the police in Germany?",
    cat: "Recht",
    options: [
      { text: "das Land zu verteidigen", textEn: "to defend the country" },
      { text: "die Bürgerinnen und Bürger abzuhören", textEn: "to listen to the citizens" },
      { text: "die Gesetze zu beschließen", textEn: "to pass the laws" },
      { text: "die Einhaltung von Gesetzen zu überwachen", textEn: "Monitor compliance with laws" }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 149,
    type: "text",
    q: "Was ist ein Beispiel für antisemitisches Verhalten?",
    qEn: "What is an example of antisemitic behavior?",
    cat: "Recht",
    options: [
      { text: "ein jüdisches Fest besuchen", textEn: "visiting a Jewish festival" },
      { text: "die israelische Regierung kritisieren", textEn: "criticizing the Israeli government" },
      { text: "den Holocaust leugnen", textEn: "denying the Holocaust" },
      { text: "gegen Juden Fußball spielen.", textEn: "playing football against Jewish teams." }
    ],
    correct: 2,
    srcs: 2
  },
  {
    id: 150,
    type: "text",
    q: "Eine Gerichtsschöffin/ein Gerichtsschöffe in Deutschland ist …",
    qEn: "A court lay judge (Gerichtsschöffe/Gerichtsschöffin) in Germany is …",
    cat: "Recht",
    options: [
      { text: "die Stellvertreterin/der Stellvertreter des Stadtoberhaupts.", textEn: "the deputy to the head of the city." },
      { text: "eine ehrenamtliche Richterin/ein ehrenamtlicher Richter.", textEn: "an honorary / volunteer lay judge (ehrenamtliche/r Richter/in)." },
      { text: "ein Mitglied eines Gemeinderats.", textEn: "a member of a municipal council." },
      { text: "eine Person, die Jura studiert hat.", textEn: "a person who has studied law." }
    ],
    correct: 1,
    srcs: 1
  },
  {
    id: 151,
    type: "text",
    q: "Wer baute die Mauer in Berlin?",
    qEn: "Who built the Wall in Berlin?",
    cat: "Geschichte",
    options: [
      { text: "Großbritannien", textEn: "United Kingdom" },
      { text: "die DDR", textEn: "the GDR" },
      { text: "die Bundesrepublik Deutschland", textEn: "the Federal Republic of Germany" },
      { text: "die USA", textEn: "the USA" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 152,
    type: "text",
    q: "Wann waren die Nationalsozialisten mit Adolf Hitler in Deutschland an der Macht?",
    qEn: "When were the National Socialists with Adolf Hitler in Germany in power?",
    cat: "Geschichte",
    options: [
      { text: "1918 bis 1923", textEn: "1918 to 1923" },
      { text: "1932 bis 1950", textEn: "1932 to 1950" },
      { text: "1933 bis 1945", textEn: "1933 to 1945" },
      { text: "1945 bis 1989", textEn: "1945 to 1989" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 153,
    type: "text",
    q: "Was war am 8. Mai 1945?",
    qEn: "What happened on May 8, 1945?",
    cat: "Geschichte",
    options: [
      { text: "Tod Adolf Hitlers", textEn: "Tod Adolf Hitlers" },
      { text: "Beginn des Berliner Mauerbaus", textEn: "Beginning of the construction of the Berlin Wall" },
      { text: "Wahl von Konrad Adenauer zum Bundeskanzler", textEn: "Election of Konrad Adenauer as Federal Chancellor" },
      { text: "Ende des Zweiten Weltkriegs in Europa", textEn: "End of World War II in Europe" }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 154,
    type: "text",
    q: "Wann war der Zweite Weltkrieg zu Ende?",
    qEn: "When did the Second World War end?",
    cat: "Geschichte",
    options: [
      { text: "1933", textEn: "1933" },
      { text: "1945", textEn: "1945" },
      { text: "1949", textEn: "1949" },
      { text: "1961", textEn: "1961" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 155,
    type: "text",
    q: "Wann waren die Nationalsozialisten in Deutschland an der Macht?",
    qEn: "When were the National Socialists in power in Germany?",
    cat: "Geschichte",
    options: [
      { text: "1888 bis 1918", textEn: "1888 to 1918" },
      { text: "1921 bis 1934", textEn: "1921 to 1934" },
      { text: "1933 bis 1945", textEn: "1933 to 1945" },
      { text: "1949 bis 1963", textEn: "1949 to 1963" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 156,
    type: "text",
    q: "In welchem Jahr wurde Hitler Reichskanzler?",
    qEn: "What year did Hitler become Chancellor of the Reich?",
    cat: "Geschichte",
    options: [
      { text: "1923", textEn: "1923" },
      { text: "1927", textEn: "1927" },
      { text: "1933", textEn: "1933" },
      { text: "1936", textEn: "1936" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 157,
    type: "text",
    q: "Die Nationalsozialisten mit Adolf Hitler errichteten 1933 in Deutschland …",
    qEn: "In 1933, the National Socialists with Adolf Hitler built a Germany ...",
    cat: "Geschichte",
    options: [
      { text: "eine Diktatur.", textEn: "a dictatorship." },
      { text: "einen demokratischen Staat.", textEn: "a democratic state." },
      { text: "eine Monarchie.", textEn: "a monarchy." },
      { text: "ein Fürstentum.", textEn: "a principality." }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 158,
    type: "text",
    q: "Das \"Dritte Reich\" war eine …",
    qEn: "The \"Third Reich\" was a ...",
    cat: "Geschichte",
    options: [
      { text: "Diktatur.", textEn: "dictatorship." },
      { text: "Demokratie.", textEn: "Democracy." },
      { text: "Monarchie.", textEn: "Monarchy." },
      { text: "Räterepublik.", textEn: "Soviet Republic." }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 159,
    type: "text",
    q: "Was gab es in Deutschland nicht während der Zeit des Nationalsozialismus?",
    qEn: "What did not exist in Germany during the era of National Socialism (Nazi rule)?",
    cat: "Geschichte",
    options: [
      { text: "freie Wahlen", textEn: "free elections" },
      { text: "Pressezensur", textEn: "press censorship" },
      { text: "willkürliche Verhaftungen", textEn: "arbitrary arrests" },
      { text: "Verfolgung von Juden", textEn: "persecution of Jewish people" }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 160,
    type: "text",
    q: "Welcher Krieg dauerte von 1939 bis 1945?",
    qEn: "What war lasted from 1939 to 1945?",
    cat: "Geschichte",
    options: [
      { text: "der Erste Weltkrieg", textEn: "The First World War" },
      { text: "der Zweite Weltkrieg", textEn: "World War II" },
      { text: "der Vietnamkrieg", textEn: "the Vietnam War" },
      { text: "der Golfkrieg", textEn: "the Gulf War" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 161,
    type: "text",
    q: "Was kennzeichnete den NS-Staat? Eine Politik …",
    qEn: "What characterized the Nazi state? A policy ...",
    cat: "Geschichte",
    options: [
      { text: "des staatlichen Rassismus", textEn: "of state racism" },
      { text: "der Meinungsfreiheit", textEn: "freedom of expression" },
      { text: "der allgemeinen Religionsfreiheit", textEn: "of general freedom of religion" },
      { text: "der Entwicklung der Demokratie", textEn: "the development of democracy" }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 162,
    type: "text",
    q: "Claus Schenk Graf von Stauffenberg wurde bekannt durch …",
    qEn: "Claus Schenk Graf von Stauffenberg became known for ...",
    cat: "Geschichte",
    options: [
      { text: "eine Goldmedaille bei den Olympischen Spielen 1936.", textEn: "He won a gold medal at the 1936 Summer Olympics." },
      { text: "den Bau des Reichstagsgebäudes.", textEn: "the construction of the Reichstag building." },
      { text: "den Aufbau der Wehrmacht.", textEn: "the development of the Wehrmacht." },
      { text: "das Attentat auf Hitler am 20. Juli 1944.", textEn: "the assassination attempt on Hitler on July 20, 1944." }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 163,
    type: "text",
    q: "In welchem Jahr zerstörten die Nationalsozialisten Synagogen und jüdische Geschäfte in Deutschland?",
    qEn: "In which year did the National Socialists destroy synagogues and Jewish businesses in Germany?",
    cat: "Geschichte",
    options: [
      { text: "1925", textEn: "1925" },
      { text: "1930", textEn: "1930" },
      { text: "1938", textEn: "1938" },
      { text: "1945", textEn: "1945" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 164,
    type: "text",
    q: "Was passierte am 9. November 1938 in Deutschland?",
    qEn: "What happened on November 9, 1938 in Germany?",
    cat: "Geschichte",
    options: [
      { text: "Mit dem Angriff auf Polen beginnt der Zweite Weltkrieg.", textEn: "World War II begins with the invasion of Poland." },
      { text: "Die Nationalsozialisten verlieren eine Wahl und lösen den Reichstag auf.", textEn: "The National Socialists lose an election and dissolve the Reichstag." },
      { text: "Jüdische Geschäfte und Synagogen werden durch Nationalsozialisten und ihre Anhänger zerstört.", textEn: "Jewish businesses and synagogues are destroyed by National Socialists and their supporters (Kristallnacht)." },
      { text: "Hitler wird Reichspräsident und lässt alle Parteien verbieten.", textEn: "Hitler becomes Reich President and bans all political parties." }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 165,
    type: "text",
    q: "Wie hieß der erste Bundeskanzler der Bundesrepublik Deutschland?",
    qEn: "What was the name of the first Chancellor of the Federal Republic of Germany?",
    cat: "Geschichte",
    options: [
      { text: "Konrad Adenauer", textEn: "Konrad Adenauer" },
      { text: "Kurt Georg Kiesinger", textEn: "Kurt Georg Kiesinger" },
      { text: "Helmut Schmidt", textEn: "Helmut Schmidt" },
      { text: "Willy Brandt", textEn: "Willy Brandt" }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 166,
    type: "text",
    q: "Bei welchen Demonstrationen in Deutschland riefen die Menschen \"Wir sind das Volk\"?",
    qEn: "At which demonstrations in Germany did people shout \"We are the people\"?",
    cat: "Geschichte",
    options: [
      { text: "beim Arbeiteraufstand 1953 in der DDR", textEn: "at the 1953 workers' uprising in the GDR" },
      { text: "bei den Demonstrationen 1968 in der Bundesrepublik Deutschland", textEn: "at the demonstrations in the Federal Republic of Germany in 1968" },
      { text: "bei den Anti-Atomkraft-Demonstrationen 1985 in der Bundesrepublik Deutschland", textEn: "at the anti-nuclear demonstrations in 1985 in the Federal Republic of Germany" },
      { text: "bei den Montagsdemonstrationen 1989 in der DDR", textEn: "at the Monday demonstrations in 1989 in the GDR" }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 167,
    type: "text",
    q: "Welche Länder wurden nach dem Zweiten Weltkrieg in Deutschland als \"Alliierte Besatzungsmächte\" bezeichnet?",
    qEn: "Which countries were renamed in Germany after the Second World War? referred to as \"Allied Occupying Powers\"?",
    cat: "Geschichte",
    options: [
      { text: "Sowjetunion, Großbritannien, Polen, Schweden", textEn: "Soviet Union, Great Britain, Poland, Sweden" },
      { text: "Frankreich, Sowjetunion, Italien, Japan", textEn: "France, Soviet Union, Italy, Japan" },
      { text: "USA, Sowjetunion, Spanien, Portugal", textEn: "USA, Soviet Union, Spain, Portugal" },
      { text: "USA, Sowjetunion, Großbritannien, Frankreich", textEn: "USA, Soviet Union, Great Britain, France" }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 168,
    type: "text",
    q: "Welches Land war keine \"Alliierte Besatzungsmacht\" in Deutschland?",
    qEn: "Which country was not an \"Allied occupying power\" in Germany?",
    cat: "Geschichte",
    options: [
      { text: "USA", textEn: "USA" },
      { text: "Sowjetunion", textEn: "Soviet Union" },
      { text: "Frankreich", textEn: "France" },
      { text: "Japan", textEn: "Japan" }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 169,
    type: "text",
    q: "Wann wurde die Bundesrepublik Deutschland gegründet?",
    qEn: "When was the Federal Republic of Germany founded?",
    cat: "Geschichte",
    options: [
      { text: "1939", textEn: "1939" },
      { text: "1945", textEn: "1945" },
      { text: "1949", textEn: "1949" },
      { text: "1951", textEn: "1951" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 170,
    type: "text",
    q: "Was gab es während der Zeit des Nationalsozialismus in Deutschland?",
    qEn: "What was there during the time of National Socialism in Germany?",
    cat: "Geschichte",
    options: [
      { text: "das Verbot von Parteien", textEn: "the prohibition of political parties" },
      { text: "das Recht zur freien Entfaltung der Persönlichkeit", textEn: "the right to the free development of one's personality" },
      { text: "Pressefreiheit", textEn: "Freedom of the press" },
      { text: "den Schutz der Menschenwürde", textEn: "the protection of human dignity" }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 171,
    type: "text",
    q: "Soziale Marktwirtschaft bedeutet, die Wirtschaft …",
    qEn: "Social market economy means that the economy ...",
    cat: "Wirtschaft",
    options: [
      { text: "steuert sich allein nach Angebot und Nachfrage.", textEn: "controls itself solely according to supply and demand." },
      { text: "wird vom Staat geplant und gesteuert, Angebot und Nachfrage werden nicht berücksichtigt.", textEn: "is planned and controlled by the state, supply and demand are not taken into account." },
      { text: "richtet sich nach der Nachfrage im Ausland.", textEn: "is based on demand abroad." },
      { text: "richtet sich nach Angebot und Nachfrage, aber der Staat sorgt für einen sozialen Ausgleich.", textEn: "is based on supply and demand, but the state ensures social balance." }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 172,
    type: "text",
    q: "In welcher Besatzungszone wurde die DDR gegründet? In der …",
    qEn: "In which occupation zone was the GDR founded? In the ...",
    cat: "Geschichte",
    options: [
      { text: "amerikanischen Besatzungszone", textEn: "American occupation zone" },
      { text: "französischen Besatzungszone", textEn: "French occupation zone" },
      { text: "britischen Besatzungszone", textEn: "British occupation zone" },
      { text: "sowjetischen Besatzungszone", textEn: "Soviet occupation zone" }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 173,
    type: "text",
    q: "Die Bundesrepublik Deutschland ist ein Gründungsmitglied …",
    qEn: "The Federal Republic of Germany is a founding member ...",
    cat: "Europa und Welt",
    options: [
      { text: "des Nordatlantikpakts (NATO).", textEn: "of the North Atlantic Treaty Organization (NATO)" },
      { text: "der Vereinten Nationen (VN).", textEn: "of the United Nations (UN)" },
      { text: "der Europäischen Union (EU).", textEn: "of the European Union (EU)" },
      { text: "des Warschauer Pakts.", textEn: "of the Warsaw Pact" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 174,
    type: "text",
    q: "Wann wurde die DDR gegründet?",
    qEn: "When was the GDR founded?",
    cat: "Geschichte",
    options: [
      { text: "1947", textEn: "1947" },
      { text: "1949", textEn: "1949" },
      { text: "1953", textEn: "1953" },
      { text: "1956", textEn: "1956" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 175,
    type: "text",
    q: "Wie viele Besatzungszonen gab es in Deutschland nach dem Zweiten Weltkrieg?",
    qEn: "How many occupation zones were there in Germany after the Second World War?",
    cat: "Geschichte",
    options: [
      { text: "3", textEn: "3" },
      { text: "4", textEn: "4" },
      { text: "5", textEn: "5" },
      { text: "6", textEn: "6" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 176,
    type: "text",
    q: "Wie waren die Besatzungszonen Deutschlands nach 1945 verteilt?",
    qEn: "How were Germany's occupation zones distributed after 1945?",
    cat: "Geschichte",
    options: [
      { text: "1=Großbritannien, 2=Sowjetunion, 3=Frankreich, 4=USA", textEn: "1 = Great Britain, 2 = Soviet Union, 3 = France, 4 = USA" },
      { text: "1=Sowjetunion, 2=Großbritannien, 3=USA, 4=Frankreich", textEn: "1 = Soviet Union, 2 = Great Britain, 3 = USA, 4 = France" },
      { text: "1=Großbritannien, 2=Sowjetunion, 3=USA, 4=Frankreich", textEn: "1 = Great Britain, 2 = Soviet Union, 3 = USA, 4 = France" },
      { text: "1=Großbritannien, 2=USA, 3=Sowjetunion, 4=Frankreich", textEn: "1 = Great Britain, 2 = USA, 3 = Soviet Union, 4 = France" }
    ],
    correct: 2,
    srcs: 2
  },
  {
    id: 177,
    type: "text",
    q: "Welche deutsche Stadt wurde nach dem Zweiten Weltkrieg in vier Sektoren aufgeteilt?",
    qEn: "Which German city was divided into four Sectors divided?",
    cat: "Geschichte",
    options: [
      { text: "München", textEn: "Munich" },
      { text: "Berlin", textEn: "Berlin" },
      { text: "Dresden", textEn: "Dresden" },
      { text: "Frankfurt/Oder", textEn: "Frankfurt/Oder" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 178,
    type: "text",
    q: "Vom Juni 1948 bis zum Mai 1949 wurden die Bürgerinnen und Bürger von West-Berlin durch eine Luftbrücke versorgt. Welcher Umstand war dafür verantwortlich?",
    qEn: "From June 1948 to May 1949, the citizens of West Berlin were supplied by an airlift (Luftbrücke). What circumstance caused this?",
    cat: "Geschichte",
    options: [
      { text: "Für Frankreich war eine Versorgung der West-Berliner Bevölkerung mit dem Flugzeug kostengünstiger.", textEn: "For France, supplying West Berlin by air was more cost-effective." },
      { text: "Die amerikanischen Soldatinnen und Soldaten hatten beim Landtransport Angst vor Überfällen.", textEn: "American soldiers feared ambushes during ground transport." },
      { text: "Für Großbritannien war die Versorgung über die Luftbrücke schneller.", textEn: "For Great Britain, airlift supplies were faster." },
      { text: "Die Sowjetunion unterbrach den gesamten Verkehr auf dem Landwege.", textEn: "The Soviet Union cut off all land and water access routes (Berlin Blockade)." }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 179,
    type: "text",
    q: "Wie endete der Zweite Weltkrieg in Europa offiziell?",
    qEn: "How did the Second World War officially end in Europe?",
    cat: "Geschichte",
    options: [
      { text: "mit dem Tod Adolf Hitlers", textEn: "with the death of Adolf Hitler" },
      { text: "durch die bedingungslose Kapitulation Deutschlands", textEn: "by the unconditional surrender of Germany" },
      { text: "mit dem Rückzug der Deutschen aus den besetzten Gebieten", textEn: "with the withdrawal of the Germans from the occupied territories" },
      { text: "durch eine Revolution in Deutschland", textEn: "through a revolution in Germany" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 180,
    type: "text",
    q: "Der erste Bundeskanzler der Bundesrepublik Deutschland war …",
    qEn: "The first Chancellor of the Federal Republic of Germany was ...",
    cat: "Geschichte",
    options: [
      { text: "Ludwig Erhard.", textEn: "Ludwig Erhard." },
      { text: "Willy Brandt.", textEn: "Willy Brandt." },
      { text: "Konrad Adenauer.", textEn: "Konrad Adenauer." },
      { text: "Gerhard Schröder.", textEn: "Gerhard Schröder." }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 181,
    type: "image",
    q: "Was wollte Willy Brandt mit seinem Kniefall 1970 im ehemaligen jüdischen Ghetto in Warschau ausdrücken?",
    qEn: "What did Willy Brandt wish to express with his genuflection (Kniefall) in 1970 at the former Jewish Ghetto in Warsaw?",
    cat: "Geschichte",
    image: "assets/q181.jpg",
    options: [
      { text: "Er hat sich den ehemaligen Alliierten unterworfen.", textEn: "He submitted to the former Allies." },
      { text: "Er bat Polen und die polnischen Juden um Vergebung.", textEn: "He asked Poland and Polish Jews for forgiveness for Nazi war crimes." },
      { text: "Er zeigte seine Demut vor dem Warschauer Pakt.", textEn: "He showed his humility before the Warsaw Pact." },
      { text: "Er sprach ein Gebet am Grab des Unbekannten Soldaten.", textEn: "He said a prayer at the Tomb of the Unknown Soldier." }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 182,
    type: "text",
    q: "Wie heißt das jüdische Gebetshaus?",
    qEn: "What is the Jewish house of prayer called?",
    cat: "Religion und Kultur",
    options: [
      { text: "Basilika", textEn: "Basilica" },
      { text: "Moschee", textEn: "Mosque" },
      { text: "Synagoge", textEn: "Synagogue" },
      { text: "Kirche", textEn: "Church" }
    ],
    correct: 2,
    srcs: 2
  },
  {
    id: 183,
    type: "text",
    q: "Wann war in der Bundesrepublik Deutschland das \"Wirtschaftswunder\"?",
    qEn: "When was the \"Economic miracle\"?",
    cat: "Geschichte",
    options: [
      { text: "40er Jahre", textEn: "40s" },
      { text: "50er Jahre", textEn: "50s" },
      { text: "70er Jahre", textEn: "70s" },
      { text: "80er Jahre", textEn: "80s" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 184,
    type: "text",
    q: "Auf welcher rechtlichen Grundlage wurde der Staat Israel gegründet?",
    qEn: "On what legal basis was the State of Israel founded?",
    cat: "Geschichte",
    options: [
      { text: "eine Resolution der Vereinten Nationen", textEn: "a United Nations resolution (UN Partition Plan 1947)" },
      { text: "ein Beschluss des Zionistenkongresses", textEn: "a resolution of the Zionist Congress" },
      { text: "ein Vorschlag der Bundesregierung", textEn: "a proposal by the German Federal Government" },
      { text: "ein Vorschlag der UdSSR", textEn: "a proposal by the USSR" }
    ],
    correct: 0,
    srcs: 2
  },
  {
    id: 185,
    type: "text",
    q: "Wofür stand der Ausdruck \"Eiserner Vorhang\"? Für die Abschottung …",
    qEn: "What did the phrase \"Iron Curtain\" stand for? For the Isolation..",
    cat: "Geschichte",
    options: [
      { text: "des Warschauer Pakts gegen den Westen", textEn: "of the Warsaw Pact against the West" },
      { text: "Norddeutschlands gegen Süddeutschland", textEn: "Northern Germany against Southern Germany" },
      { text: "Nazi-Deutschlands gegen die Alliierten", textEn: "Nazi Germany against the Allies" },
      { text: "Europas gegen die USA", textEn: "Europe against the USA" }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 186,
    type: "text",
    q: "Im Jahr 1953 gab es in der DDR einen Aufstand, an den lange Zeit in der Bundesrepublik Deutschland ein Feiertag erinnerte. Wann war das?",
    qEn: "In 1953 there was an uprising in the GDR, which for a long time in the Federal Republic of Germany. When Was that?",
    cat: "Geschichte",
    options: [
      { text: "1. Mai", textEn: "1. May" },
      { text: "17. Juni", textEn: "June 17" },
      { text: "20. Juli", textEn: "July 20" },
      { text: "9. November", textEn: "9. November" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 187,
    type: "text",
    q: "Welcher deutsche Staat hatte eine schwarz-rot-goldene Flagge mit Hammer, Zirkel und Ährenkranz?",
    qEn: "Which German state had a black-red-gold flag with Hammer, compass and wreath of wheat?",
    cat: "Geschichte",
    options: [
      { text: "Preußen", textEn: "Prussia" },
      { text: "Bundesrepublik Deutschland", textEn: "Federal Republic of Germany" },
      { text: "\"Drittes Reich\"", textEn: "Third Reich" },
      { text: "DDR", textEn: "DDR" }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 188,
    type: "text",
    q: "In welchem Jahr wurde die Mauer in Berlin gebaut?",
    qEn: "What year was the Berlin Wall built?",
    cat: "Geschichte",
    options: [
      { text: "1953", textEn: "1953" },
      { text: "1956", textEn: "1956" },
      { text: "1959", textEn: "1959" },
      { text: "1961", textEn: "1961" }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 189,
    type: "text",
    q: "Wann baute die DDR die Mauer in Berlin?",
    qEn: "When did the GDR build the Wall in Berlin?",
    cat: "Geschichte",
    options: [
      { text: "1919", textEn: "1919" },
      { text: "1933", textEn: "1933" },
      { text: "1961", textEn: "1961" },
      { text: "1990", textEn: "1990" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 190,
    type: "text",
    q: "Was bedeutet die Abkürzung DDR?",
    qEn: "What does the abbreviation DDR mean?",
    cat: "Geschichte",
    options: [
      { text: "Dritter Deutscher Rundfunk", textEn: "Third German Broadcasting Corporation" },
      { text: "Die Deutsche Republik", textEn: "The German Republic" },
      { text: "Dritte Deutsche Republik", textEn: "Third German Republic" },
      { text: "Deutsche Demokratische Republik", textEn: "German Democratic Republic" }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 191,
    type: "text",
    q: "Wann wurde die Mauer in Berlin für alle geöffnet?",
    qEn: "When was the Wall in Berlin opened to everyone?",
    cat: "Geschichte",
    options: [
      { text: "1987", textEn: "1987" },
      { text: "1989", textEn: "1989" },
      { text: "1992", textEn: "1992" },
      { text: "1995", textEn: "1995" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 192,
    type: "text",
    q: "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?",
    qEn: "Which present-day German state used to belong to the area of the GDR?",
    cat: "Geschichte",
    options: [
      { text: "Brandenburg", textEn: "Brandenburg" },
      { text: "Bayern", textEn: "Bavaria" },
      { text: "Saarland", textEn: "Saarland" },
      { text: "Hessen", textEn: "Hesse" }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 193,
    type: "text",
    q: "Von 1961 bis 1989 war Berlin …",
    qEn: "From 1961 to 1989, Berlin was ...",
    cat: "Geschichte",
    options: [
      { text: "ohne Bürgermeister.", textEn: "without a mayor." },
      { text: "ein eigener Staat.", textEn: "a separate state." },
      { text: "durch eine Mauer geteilt.", textEn: "divided by a wall." },
      { text: "nur mit dem Flugzeug erreichbar.", textEn: "only accessible by plane." }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 194,
    type: "text",
    q: "Am 3. Oktober feiert man in Deutschland den Tag der Deutschen …",
    qEn: "On October 3, Germany celebrates the Day of the Germans ...",
    cat: "Geschichte",
    options: [
      { text: "Einheit.", textEn: "Unity." },
      { text: "Nation.", textEn: "Nation." },
      { text: "Bundesländer.", textEn: "federal states." },
      { text: "Städte.", textEn: "Cities." }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 195,
    type: "text",
    q: "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?",
    qEn: "Which present-day German state used to belong to the territory of the GDR (East Germany)?",
    cat: "Geschichte",
    options: [
      { text: "Hessen", textEn: "Hesse" },
      { text: "Sachsen-Anhalt", textEn: "Saxony-Anhalt" },
      { text: "Nordrhein-Westfalen", textEn: "North Rhine-Westphalia" },
      { text: "Saarland", textEn: "Saarland" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 196,
    type: "text",
    q: "Warum nennt man die Zeit im Herbst 1989 in der DDR \"Die Wende\"? In dieser Zeit veränderte sich die DDR politisch …",
    qEn: "Why is the time in the fall of 1989 called \"The Wende\" in the GDR? During this time, the GDR changed politically ...",
    cat: "Geschichte",
    options: [
      { text: "von einer Diktatur zur Demokratie.", textEn: "from dictatorship to democracy" },
      { text: "von einer liberalen Marktwirtschaft zum Sozialismus.", textEn: "from a liberal market economy to socialism." },
      { text: "von einer Monarchie zur Sozialdemokratie.", textEn: "from a monarchy to social democracy" },
      { text: "von einem religiösen Staat zu einem kommunistischen Staat.", textEn: "from a religious state to a communist state." }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 197,
    type: "text",
    q: "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?",
    qEn: "Which present-day German state used to belong to the territory of the GDR (East Germany)?",
    cat: "Geschichte",
    options: [
      { text: "Thüringen", textEn: "Thuringia" },
      { text: "Hessen", textEn: "Hesse" },
      { text: "Bayern", textEn: "Bavaria" },
      { text: "Bremen", textEn: "Bremen" }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 198,
    type: "text",
    q: "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?",
    qEn: "Which present-day German state used to belong to the territory of the GDR (East Germany)?",
    cat: "Geschichte",
    options: [
      { text: "Bayern", textEn: "Bavaria" },
      { text: "Niedersachsen", textEn: "Lower Saxony" },
      { text: "Sachsen", textEn: "Saxony" },
      { text: "Baden-Württemberg", textEn: "Baden-Württemberg" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 199,
    type: "text",
    q: "Mit der Abkürzung \"Stasi\" meinte man in der DDR …",
    qEn: "In the GDR (East Germany), what was meant by the abbreviation \"Stasi\"?",
    cat: "Geschichte",
    options: [
      { text: "das Parlament.", textEn: "the parliament." },
      { text: "das Ministerium für Staatssicherheit.", textEn: "the Ministry for State Security (Ministerium für Staatssicherheit)." },
      { text: "eine regierende Partei.", textEn: "a governing party." },
      { text: "das Ministerium für Volksbildung.", textEn: "the Ministry of Public Education." }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 200,
    type: "text",
    q: "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?",
    qEn: "Which present-day German state used to belong to the territory of the GDR (East Germany)?",
    cat: "Geschichte",
    options: [
      { text: "Hessen", textEn: "Hesse" },
      { text: "Schleswig-Holstein", textEn: "Schleswig-Holstein" },
      { text: "Mecklenburg-Vorpommern", textEn: "Mecklenburg-Western Pomerania" },
      { text: "Saarland", textEn: "Saarland" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 201,
    type: "text",
    q: "Welche der folgenden Auflistungen enthält nur Bundesländer, die zum Gebiet der früheren DDR gehörten?",
    qEn: "Which of the following lists contains only federal states that belonged to the territory of the former GDR?",
    cat: "Geschichte",
    options: [
      { text: "Niedersachsen, Nordrhein-Westfalen, Hessen, Schleswig-Holstein, Brandenburg", textEn: "Lower Saxony, North Rhine-Westphalia, Hesse, Schleswig-Holstein, Brandenburg" },
      { text: "Mecklenburg-Vorpommern, Brandenburg, Sachsen, Sachsen-Anhalt, Thüringen", textEn: "Mecklenburg-Western Pomerania, Brandenburg, Saxony, Saxony-Anhalt, Thuringia" },
      { text: "Bayern, Baden-Württemberg, Rheinland-Pfalz, Thüringen, Sachsen", textEn: "Bavaria, Baden-Württemberg, Rhineland-Palatinate, Thuringia, Saxony" },
      { text: "Sachsen, Thüringen, Hessen, Niedersachen, Brandenburg", textEn: "Saxony, Thuringia, Hesse, Lower Saxony, Brandenburg" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 202,
    type: "text",
    q: "Zu wem gehörte die DDR im \"Kalten Krieg\"?",
    qEn: "Who was the GDR allied with during the Cold War?",
    cat: "Geschichte",
    options: [
      { text: "zu den Westmächten", textEn: "the Western powers" },
      { text: "zum Warschauer Pakt", textEn: "the Warsaw Pact" },
      { text: "zur NATO", textEn: "NATO" },
      { text: "zu den blockfreien Staaten", textEn: "the non-aligned states" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 203,
    type: "text",
    q: "Wie hieß das Wirtschaftssystem der DDR?",
    qEn: "What was the name of the GDR's economic system?",
    cat: "Geschichte",
    options: [
      { text: "Marktwirtschaft", textEn: "Market economy" },
      { text: "Planwirtschaft", textEn: "Planned economy" },
      { text: "Angebot und Nachfrage", textEn: "Supply and demand" },
      { text: "Kapitalismus", textEn: "Capitalism" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 204,
    type: "text",
    q: "Wie wurden die Bundesrepublik Deutschland und die DDR zu einem Staat?",
    qEn: "How did the Federal Republic of Germany and the GDR become a single state?",
    cat: "Geschichte",
    options: [
      { text: "Die Bundesrepublik hat die DDR besetzt.", textEn: "The Federal Republic occupied the GDR." },
      { text: "Die heutigen fünf östlichen Bundesländer sind der Bundesrepublik Deutschland beigetreten.", textEn: "The five eastern states acceded to the Federal Republic of Germany (under Art. 23 Basic Law)." },
      { text: "Die westlichen Bundesländer sind der DDR beigetreten.", textEn: "The western states acceded to the GDR." },
      { text: "Die DDR hat die Bundesrepublik Deutschland besetzt.", textEn: "The GDR occupied the Federal Republic of Germany." }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 205,
    type: "text",
    q: "Mit dem Beitritt der DDR zur Bundesrepublik Deutschland gehören die neuen Bundesländer nun auch …",
    qEn: "With the accession of the GDR to the Federal Republic of Germany, the new federal states now also ...",
    cat: "Geschichte",
    options: [
      { text: "zur Europäischen Union.", textEn: "to the European Union." },
      { text: "zum Warschauer Pakt.", textEn: "to the Warsaw Pact." },
      { text: "zur OPEC.", textEn: "to OPEC." },
      { text: "zur Europäischen Verteidigungsgemeinschaft.", textEn: "on the European Defence Community." }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 206,
    type: "text",
    q: "Woran erinnern die sogenannten „Stolpersteine“ in Deutschland?",
    qEn: "What do the \"Stolpersteine\" (stumbling stones) in Germany commemorate?",
    cat: "Geschichte",
    options: [
      { text: "an berühmte deutsche Politikerinnen und Politiker", textEn: "famous German politicians" },
      { text: "an die Opfer des Nationalsozialismus", textEn: "the victims of National Socialism (Nazi regime)" },
      { text: "an Verkehrstote", textEn: "victims of traffic accidents" },
      { text: "an bekannte jüdische Musiker", textEn: "famous Jewish musicians" }
    ],
    correct: 1,
    srcs: 2
  },
  {
    id: 207,
    type: "text",
    q: "In welchem Militärbündnis war die DDR Mitglied?",
    qEn: "In which military alliance was the GDR a member?",
    cat: "Geschichte",
    options: [
      { text: "in der NATO", textEn: "in NATO" },
      { text: "im Rheinbund", textEn: "in the Confederation of the Rhine" },
      { text: "im Warschauer Pakt", textEn: "in the Warsaw Pact" },
      { text: "im Europabündnis", textEn: "in the European Alliance" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 208,
    type: "text",
    q: "Was war die \"Stasi\"?",
    qEn: "What was the \"Stasi\"?",
    cat: "Geschichte",
    options: [
      { text: "der Geheimdienst im \"Dritten Reich\"", textEn: "the secret service in the \"Third Reich\"" },
      { text: "eine berühmte deutsche Gedenkstätte", textEn: "a famous German memorial" },
      { text: "der Geheimdienst der DDR", textEn: "the secret service of the GDR" },
      { text: "ein deutscher Sportverein während des Zweiten Weltkrieges", textEn: "a German sports club during World War II" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 209,
    type: "image",
    q: "Welches war das Wappen der Deutschen Demokratischen Republik?",
    qEn: "What was the coat of arms of the German Democratic Republic?",
    cat: "Geschichte",
    image: "assets/q209.jpg",
    options: [
      { text: "Bild 1", textEn: "1" },
      { text: "Bild 2", textEn: "2" },
      { text: "Bild 3", textEn: "3" },
      { text: "Bild 4", textEn: "4" }
    ],
    correct: 3,
    srcs: 1
  },
  {
    id: 210,
    type: "text",
    q: "Was ereignete sich am 17. Juni 1953 in der DDR?",
    qEn: "What happened on June 17, 1953 in the GDR?",
    cat: "Geschichte",
    options: [
      { text: "der feierliche Beitritt zum Warschauer Pakt", textEn: "the ceremonial accession to the Warsaw Pact" },
      { text: "landesweite Streiks und ein Volksaufstand", textEn: "nationwide strikes and a popular uprising" },
      { text: "der 1. SED-Parteitag", textEn: "the 1st SED Party Congress" },
      { text: "der erste Besuch Fidel Castros", textEn: "Fidel Castro's first visit" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 211,
    type: "text",
    q: "Welcher Politiker steht für die \"Ostverträge\"?",
    qEn: "Which politician stands for the \"Eastern Treaties\"?",
    cat: "Geschichte",
    options: [
      { text: "Helmut Kohl", textEn: "Helmut Kohl" },
      { text: "Willy Brandt", textEn: "Willy Brandt" },
      { text: "Michail Gorbatschow", textEn: "Mikhail Gorbachev" },
      { text: "Ludwig Erhard", textEn: "Ludwig Erhard" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 212,
    type: "text",
    q: "Wie heißt Deutschland mit vollem Namen?",
    qEn: "What is Germany's full name?",
    cat: "Staat",
    options: [
      { text: "Bundesstaat Deutschland", textEn: "Federal State of Germany" },
      { text: "Bundesländer Deutschland", textEn: "Federal States Germany" },
      { text: "Bundesrepublik Deutschland", textEn: "Federal Republic of Germany" },
      { text: "Bundesbezirk Deutschland", textEn: "Federal District Germany" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 213,
    type: "text",
    q: "Wie viele Einwohner hat Deutschland?",
    qEn: "How many inhabitants does Germany have?",
    cat: "Staat",
    options: [
      { text: "70 Millionen", textEn: "70 million" },
      { text: "78 Millionen", textEn: "78 million" },
      { text: "84 Millionen", textEn: "84 million" },
      { text: "90 Millionen", textEn: "90 million" }
    ],
    correct: 2,
    srcs: 2
  },
  {
    id: 214,
    type: "text",
    q: "Welche Farben hat die deutsche Flagge?",
    qEn: "What colors does the German flag have?",
    cat: "Staat",
    options: [
      { text: "schwarz-rot-gold", textEn: "black-red-gold" },
      { text: "rot-weiß-schwarz", textEn: "red-white-black" },
      { text: "schwarz-rot-grün", textEn: "black-red-green" },
      { text: "schwarz-gelb-rot", textEn: "black-yellow-red" }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 215,
    type: "text",
    q: "Wer wird als \"Kanzler der Deutschen Einheit\" bezeichnet?",
    qEn: "Who is called the \"Chancellor of German Unity\"?",
    cat: "Geschichte",
    options: [
      { text: "Gerhard Schröder", textEn: "Gerhard Schröder" },
      { text: "Helmut Kohl", textEn: "Helmut Kohl" },
      { text: "Konrad Adenauer", textEn: "Konrad Adenauer" },
      { text: "Helmut Schmidt", textEn: "Helmut Schmidt" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 216,
    type: "image",
    q: "Welches Symbol ist im Plenarsaal des Deutschen Bundestages zu sehen?",
    qEn: "Which symbol is to be found in the plenary hall of the German Bundestag? see?",
    cat: "Politik",
    image: "assets/q216.jpg",
    options: [
      { text: "der Bundesadler", textEn: "the federal eagle" },
      { text: "die Fahne der Stadt Berlin", textEn: "the flag of the city of Berlin" },
      { text: "der Reichsadler", textEn: "the imperial eagle" },
      { text: "die Reichskrone", textEn: "the imperial crown" }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 217,
    type: "text",
    q: "In welchem Zeitraum gab es die Deutsche Demokratische Republik (DDR)?",
    qEn: "In what period did the German Democratic Republic exist? (GDR)?",
    cat: "Geschichte",
    options: [
      { text: "1919 bis 1927", textEn: "1919 to 1927" },
      { text: "1933 bis 1945", textEn: "1933 to 1945" },
      { text: "1945 bis 1961", textEn: "1945 to 1961" },
      { text: "1949 bis 1990", textEn: "1949 to 1990" }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 218,
    type: "text",
    q: "Wie viele Bundesländer kamen bei der Wiedervereinigung 1990 zur Bundesrepublik Deutschland hinzu?",
    qEn: "How many federal states came to the reunification in 1990? Federal Republic of Germany?",
    cat: "Geschichte",
    options: [
      { text: "4", textEn: "4" },
      { text: "5", textEn: "5" },
      { text: "6", textEn: "6" },
      { text: "7", textEn: "7" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 219,
    type: "text",
    q: "Die Bundesrepublik Deutschland hat die Grenzen von heute seit …",
    qEn: "The Federal Republic of Germany has closed the borders of today since ...",
    cat: "Geschichte",
    options: [
      { text: "1933", textEn: "1933" },
      { text: "1949", textEn: "1949" },
      { text: "1971", textEn: "1971" },
      { text: "1990", textEn: "1990" }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 220,
    type: "text",
    q: "Der 27. Januar ist in Deutschland ein offizieller Gedenktag. Woran erinnert dieser Tag?",
    qEn: "January 27 is an official day of remembrance in Germany. What does this day commemorate?",
    cat: "Geschichte",
    options: [
      { text: "an das Ende des Zweiten Weltkrieges", textEn: "the end of World War II" },
      { text: "an die Verabschiedung des Grundgesetzes", textEn: "the adoption of the Basic Law" },
      { text: "an die Wiedervereinigung Deutschlands", textEn: "the reunification of Germany" },
      { text: "an die Opfer des Nationalsozialismus (Tag der Befreiung des Vernichtungslagers Auschwitz)", textEn: "the victims of National Socialism (liberation of Auschwitz concentration camp)" }
    ],
    correct: 3,
    srcs: 1
  },
  {
    id: 221,
    type: "text",
    q: "Deutschland ist Mitglied des Schengener Abkommens. Was bedeutet das?",
    qEn: "Germany is a member of the Schengen Agreement. What Does that mean?",
    cat: "Europa und Welt",
    options: [
      { text: "Deutsche können in viele Länder Europas ohne Passkontrolle reisen.", textEn: "Germans can enter many European countries without passport control Travel" },
      { text: "Alle Menschen können ohne Personenkontrolle in Deutschland einreisen.", textEn: "All people can enter Germany without identity checks Entry" },
      { text: "Deutsche können ohne Passkontrolle in jedes Land reisen.", textEn: "Germans can travel to any country without passport control" },
      { text: "Deutsche können in jedem Land mit dem Euro bezahlen.", textEn: "Germans can pay with the euro in any country" }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 222,
    type: "text",
    q: "Welches Land ist ein Nachbarland von Deutschland?",
    qEn: "Which country is a neighboring country of Germany?",
    cat: "Europa und Welt",
    options: [
      { text: "Ungarn", textEn: "Hungary" },
      { text: "Portugal", textEn: "Portugal" },
      { text: "Spanien", textEn: "Spain" },
      { text: "Schweiz", textEn: "Switzerland" }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 223,
    type: "text",
    q: "Welches Land ist ein Nachbarland von Deutschland?",
    qEn: "Which country is a neighboring country of Germany?",
    cat: "Europa und Welt",
    options: [
      { text: "Rumänien", textEn: "Romania" },
      { text: "Bulgarien", textEn: "Bulgaria" },
      { text: "Polen", textEn: "Poland" },
      { text: "Griechenland", textEn: "Greece" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 224,
    type: "text",
    q: "Was bedeutet die Abkürzung EU?",
    qEn: "What does the abbreviation EU mean?",
    cat: "Europa und Welt",
    options: [
      { text: "Europäische Unternehmen", textEn: "European companies" },
      { text: "Europäische Union", textEn: "European Union" },
      { text: "Einheitliche Union", textEn: "Single Union" },
      { text: "Euro Union", textEn: "Euro Union" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 225,
    type: "text",
    q: "In welchem anderen Land gibt es eine große deutschsprachige Bevölkerung?",
    qEn: "In which other country is there a large German-speaking Population?",
    cat: "Europa und Welt",
    options: [
      { text: "Tschechien", textEn: "Czech Republic" },
      { text: "Norwegen", textEn: "Norway" },
      { text: "Spanien", textEn: "Spain" },
      { text: "Österreich", textEn: "Austria" }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 226,
    type: "image",
    q: "Welche ist die Flagge der Europäischen Union?",
    qEn: "What is the flag of the European Union?",
    cat: "Europa und Welt",
    image: "assets/q226.jpg",
    options: [
      { text: "Bild 1", textEn: "Image 1" },
      { text: "Bild 2", textEn: "Image 2" },
      { text: "Bild 3", textEn: "Image 3" },
      { text: "Bild 4", textEn: "Image 4" }
    ],
    correct: 1,
    srcs: 2
  },
  {
    id: 227,
    type: "text",
    q: "Welches Land ist ein Nachbarland von Deutschland?",
    qEn: "Which country is a neighboring country of Germany?",
    cat: "Europa und Welt",
    options: [
      { text: "Finnland", textEn: "Finland" },
      { text: "Dänemark", textEn: "Denmark" },
      { text: "Norwegen", textEn: "Norway" },
      { text: "Schweden", textEn: "Sweden" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 228,
    type: "text",
    q: "Wie wird der Beitritt der DDR zur Bundesrepublik Deutschland im Jahr 1990 allgemein genannt?",
    qEn: "How will the accession of the GDR to the Federal Republic of Germany be Year 1990 commonly called?",
    cat: "Geschichte",
    options: [
      { text: "NATO-Osterweiterung", textEn: "NATO eastward expansion" },
      { text: "EU-Osterweiterung", textEn: "EU eastward enlargement" },
      { text: "Deutsche Wiedervereinigung", textEn: "German reunification" },
      { text: "Europäische Gemeinschaft", textEn: "European Community" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 229,
    type: "text",
    q: "Welches Land ist ein Nachbarland von Deutschland?",
    qEn: "Which country is a neighboring country of Germany?",
    cat: "Europa und Welt",
    options: [
      { text: "Spanien", textEn: "Spain" },
      { text: "Bulgarien", textEn: "Bulgaria" },
      { text: "Norwegen", textEn: "Norway" },
      { text: "Luxemburg", textEn: "Luxembourg" }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 230,
    type: "text",
    q: "Das Europäische Parlament wird regelmäßig gewählt, nämlich alle …",
    qEn: "The European Parliament is regularly elected, namely: all ...",
    cat: "Europa und Welt",
    options: [
      { text: "5 Jahre.", textEn: "5 years" },
      { text: "6 Jahre.", textEn: "6 years" },
      { text: "7 Jahre.", textEn: "7 years" },
      { text: "8 Jahre.", textEn: "8 years" }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 231,
    type: "text",
    q: "Was bedeutet der Begriff \"europäische Integration\"?",
    qEn: "What does the term \"European integration\" mean?",
    cat: "Europa und Welt",
    options: [
      { text: "Damit sind amerikanische Einwanderinnen und Einwanderer in Europa gemeint.", textEn: "It refers to American immigrants in Europe." },
      { text: "Der Begriff meint den Einwanderungsstopp nach Europa.", textEn: "It refers to an immigration ban to Europe." },
      { text: "Damit sind europäische Auswanderinnen und Auswanderer in den USA gemeint.", textEn: "It refers to European emigrants in the USA." },
      { text: "Der Begriff meint den Zusammenschluss europäischer Staaten zur EU.", textEn: "It refers to the unification of European states into the EU." }
    ],
    correct: 3,
    srcs: 1
  },
  {
    id: 232,
    type: "text",
    q: "Wer wird bei der Europawahl gewählt?",
    qEn: "Who will be elected in the European elections?",
    cat: "Europa und Welt",
    options: [
      { text: "die Europäische Kommission", textEn: "the European Commission" },
      { text: "die Länder, die in die EU eintreten dürfen", textEn: "the countries that are allowed to join the EU" },
      { text: "die Abgeordneten des Europäischen Parlaments", textEn: "Members of the European Parliament" },
      { text: "die europäische Verfassung", textEn: "the European Constitution" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 233,
    type: "text",
    q: "Welches Land ist ein Nachbarland von Deutschland?",
    qEn: "Which country is a neighboring country of Germany?",
    cat: "Europa und Welt",
    options: [
      { text: "Tschechien", textEn: "Czech Republic" },
      { text: "Bulgarien", textEn: "Bulgaria" },
      { text: "Griechenland", textEn: "Greece" },
      { text: "Portugal", textEn: "Portugal" }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 234,
    type: "text",
    q: "Wo ist ein Sitz des Europäischen Parlaments?",
    qEn: "Where is an official seat of the European Parliament located?",
    cat: "Europa und Welt",
    options: [
      { text: "London", textEn: "London" },
      { text: "Paris", textEn: "Paris" },
      { text: "Berlin", textEn: "Berlin" },
      { text: "Straßburg", textEn: "Strasbourg" }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 235,
    type: "image",
    q: "Der damalige französische Staatspräsident François Mitterrand und der damalige deutsche Bundeskanzler Helmut Kohl gedenken in Verdun gemeinsam der Toten beider Weltkriege. Welches Ziel der Europäischen Union wird bei diesem Treffen deutlich?",
    qEn: "French President François Mitterrand and German Chancellor Helmut Kohl commemorated the dead of both World Wars together in Verdun. Which goal of the European Union is highlighted by this meeting?",
    cat: "Geschichte",
    image: "assets/q235.jpg",
    options: [
      { text: "Freundschaft zwischen England und Deutschland", textEn: "Friendship between England and Germany" },
      { text: "Reisefreiheit in alle Länder der EU", textEn: "Freedom to travel to all EU countries" },
      { text: "Frieden und Sicherheit in den Ländern der EU", textEn: "Peace and security in the countries of the EU" },
      { text: "einheitliche Feiertage in den Ländern der EU", textEn: "Unified public holidays across EU countries" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 236,
    type: "text",
    q: "Wie viele Mitgliedstaaten hat die EU heute?",
    qEn: "How many Member States does the EU have today?",
    cat: "Europa und Welt",
    options: [
      { text: "21", textEn: "21" },
      { text: "23", textEn: "23" },
      { text: "25", textEn: "25" },
      { text: "27", textEn: "27" }
    ],
    correct: 3,
    srcs: 2
  },
  {
    id: 237,
    type: "text",
    q: "2007 wurde das 50-jährige Jubiläum der \"Römischen Verträge\" gefeiert. Was war der Inhalt der Verträge?",
    qEn: "2007 marked the 50th anniversary of the \"Treaties of Rome\" was celebrated. What was the content of the contracts?",
    cat: "Europa und Welt",
    options: [
      { text: "Beitritt Deutschlands zur NATO", textEn: "Germany's accession to NATO" },
      { text: "Gründung der Europäischen Wirtschaftsgemeinschaft (EWG)", textEn: "Establishment of the European Economic Community (EEC)" },
      { text: "Verpflichtung Deutschlands zu Reparationsleistungen", textEn: "Germany's obligation to pay reparations" },
      { text: "Festlegung der Oder-Neiße-Linie als Ostgrenze", textEn: "Determination of the Oder-Neisse line as the eastern border" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 238,
    type: "text",
    q: "An welchen Orten arbeitet das Europäische Parlament?",
    qEn: "Where does the European Parliament work?",
    cat: "Europa und Welt",
    options: [
      { text: "Paris, London und Den Haag", textEn: "Paris, London and The Hague" },
      { text: "Straßburg, Luxemburg und Brüssel", textEn: "Strasbourg, Luxembourg and Brussels" },
      { text: "Rom, Bern und Wien", textEn: "Rome, Bern and Vienna" },
      { text: "Bonn, Zürich und Mailand", textEn: "Bonn, Zurich and Milan" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 239,
    type: "text",
    q: "Durch welche Verträge schloss sich die Bundesrepublik Deutschland mit anderen Staaten zur Europäischen Wirtschaftsgemeinschaft zusammen?",
    qEn: "By which treaties did the Federal Republic of Germany conclude Germany with other states to the European economic community?",
    cat: "Europa und Welt",
    options: [
      { text: "durch die \"Hamburger Verträge\"", textEn: "through the \"Hamburg Treaties\"" },
      { text: "durch die \"Römischen Verträge\"", textEn: "by the \"Treaties of Rome\"" },
      { text: "durch die \"Pariser Verträge\"", textEn: "by the \"Paris Treaties\"" },
      { text: "durch die \"Londoner Verträge\"", textEn: "by the \"London Treaties\"" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 240,
    type: "text",
    q: "Seit wann bezahlt man in Deutschland mit dem Euro in bar?",
    qEn: "Since when do people in Germany pay in cash with the euro?",
    cat: "Europa und Welt",
    options: [
      { text: "1995", textEn: "1995" },
      { text: "1998", textEn: "1998" },
      { text: "2002", textEn: "2002" },
      { text: "2005", textEn: "2005" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 241,
    type: "text",
    q: "Frau Seger bekommt ein Kind. Was muss sie tun, um Elterngeld zu erhalten?",
    qEn: "Mrs. Seger is having a child. What does she have to do to receive parental allowance ?",
    cat: "Gesellschaft und Familie",
    options: [
      { text: "Sie muss an ihre Krankenkasse schreiben.", textEn: "She has to write to her health insurance company" },
      { text: "Sie muss einen Antrag bei der Elterngeldstelle stellen.", textEn: "She must submit an application to the parental allowance office" },
      { text: "Sie muss nichts tun, denn sie bekommt automatisch Elterngeld.", textEn: "She doesn't have to do anything, because she automatically receives parental allowance" },
      { text: "Sie muss das Arbeitsamt um Erlaubnis bitten.", textEn: "She must ask the employment office for permission" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 242,
    type: "text",
    q: "Wer entscheidet, ob ein Kind in Deutschland in den Kindergarten geht?",
    qEn: "Who decides whether a child in Germany is in the Kindergarten goes?",
    cat: "Gesellschaft und Familie",
    options: [
      { text: "der Staat", textEn: "the state" },
      { text: "die Bundesländer", textEn: "the federal states" },
      { text: "die Eltern/die Erziehungsberechtigten", textEn: "the parents/guardians" },
      { text: "die Schulen", textEn: "schools" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 243,
    type: "text",
    q: "Maik und Sybille wollen mit Freunden an ihrem deutschen Wohnort eine Demonstration auf der Straße abhalten. Was müssen sie vorher tun?",
    qEn: "Maik and Sybille want to stay with friends at their German place of residence hold a demonstration on the street. What do they have to do to do beforehand?",
    cat: "Recht",
    options: [
      { text: "Sie müssen die Demonstration anmelden.", textEn: "You must register the demonstration." },
      { text: "Sie müssen nichts tun. Man darf in Deutschland jederzeit überall demonstrieren.", textEn: "You don't have to do anything. In Germany, you are allowed to do so at any time demonstrate everywhere." },
      { text: "Sie können gar nichts tun, denn Demonstrationen sind in Deutschland grundsätzlich verboten.", textEn: "They can't do anything, because demonstrations are in Germany banned in principle" },
      { text: "Maik und Sybille müssen einen neuen Verein gründen, weil nur Vereine demonstrieren dürfen.", textEn: "Maik and Sybille have to found a new club because only Clubs are allowed to demonstrate" }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 244,
    type: "text",
    q: "Welchen Schulabschluss braucht man normalerweise, um an einer Universität in Deutschland ein Studium zu beginnen?",
    qEn: "What school-leaving certificate do you normally need to take part in a University in Germany?",
    cat: "Bildung und Arbeit",
    options: [
      { text: "das Abitur", textEn: "the Abitur" },
      { text: "ein Diplom", textEn: "a diploma" },
      { text: "die Prokura", textEn: "the power of attorney" },
      { text: "eine Gesellenprüfung", textEn: "a journeyman's examination" }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 245,
    type: "text",
    q: "Wer darf in Deutschland nicht als Paar zusammenleben?",
    qEn: "Who is not allowed to live together as a couple in Germany?",
    cat: "Gesellschaft und Familie",
    options: [
      { text: "Hans (20 Jahre) und Marie (19 Jahre)", textEn: "Hans (20 years) and Marie (19 years)" },
      { text: "Tom (20 Jahre) und Klaus (45 Jahre)", textEn: "Tom (20 years) and Klaus (45 years)" },
      { text: "Sofie (35 Jahre) und Lisa (40 Jahre)", textEn: "Sofie (35 years) and Lisa (40 years)" },
      { text: "Anne (13 Jahre) und Tim (25 Jahre)", textEn: "Anne (13 years) and Tim (25 years)" }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 246,
    type: "text",
    q: "Ab welchem Alter ist man in Deutschland volljährig?",
    qEn: "At what age do you come of age in Germany?",
    cat: "Gesellschaft und Familie",
    options: [
      { text: "16", textEn: "16" },
      { text: "18", textEn: "18" },
      { text: "19", textEn: "19" },
      { text: "21", textEn: "21" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 247,
    type: "text",
    q: "Eine Frau ist schwanger. Sie ist kurz vor und nach der Geburt ihres Kindes vom Gesetz besonders beschützt. Wie heißt dieser Schutz?",
    qEn: "A woman is pregnant. She is shortly before and after birth of their child is particularly protected by the law. What is the name of this Protection?",
    cat: "Gesellschaft und Familie",
    options: [
      { text: "Elternzeit", textEn: "Parental leave" },
      { text: "Mutterschutz", textEn: "Maternity leave" },
      { text: "Geburtsvorbereitung", textEn: "Birth preparation" },
      { text: "Wochenbett", textEn: "Postpartum" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 248,
    type: "text",
    q: "Die Erziehung der Kinder ist in Deutschland vor allem Aufgabe …",
    qEn: "In Germany, the education of children is above all a task …",
    cat: "Gesellschaft und Familie",
    options: [
      { text: "des Staates.", textEn: "of the State" },
      { text: "der Eltern.", textEn: "of parents" },
      { text: "der Großeltern.", textEn: "of grandparents" },
      { text: "der Schulen.", textEn: "of schools" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 249,
    type: "text",
    q: "Wer ist in Deutschland hauptsächlich verantwortlich für die Kindererziehung?",
    qEn: "Who is primarily responsible for raising children in Germany?",
    cat: "Gesellschaft und Familie",
    options: [
      { text: "der Staat", textEn: "the state" },
      { text: "die Eltern", textEn: "the parents" },
      { text: "die Verwandten", textEn: "relatives" },
      { text: "die Schulen", textEn: "schools" }
    ],
    correct: 1,
    srcs: 2
  },
  {
    id: 250,
    type: "text",
    q: "In Deutschland hat man die besten Chancen auf einen gut bezahlten Arbeitsplatz, wenn man …",
    qEn: "In Germany you have the best chances of getting a good paid job if you ...",
    cat: "Bildung und Arbeit",
    options: [
      { text: "katholisch ist.", textEn: "is Catholic." },
      { text: "gut ausgebildet ist.", textEn: "is well educated." },
      { text: "eine Frau ist.", textEn: "is a woman." },
      { text: "Mitglied einer Partei ist.", textEn: "is a member of a political party." }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 251,
    type: "text",
    q: "Wenn man in Deutschland ein Kind schlägt, …",
    qEn: "If you hit a child in Germany, ...",
    cat: "Gesellschaft und Familie",
    options: [
      { text: "geht das niemanden etwas an.", textEn: "it's nobody's business" },
      { text: "geht das nur die Familie etwas an.", textEn: "is it only the family's business" },
      { text: "kann man dafür nicht bestraft werden.", textEn: "you can't be punished for it" },
      { text: "kann man dafür bestraft werden.", textEn: "you can be punished for it" }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 252,
    type: "text",
    q: "In Deutschland …",
    qEn: "In Germany ...",
    cat: "Gesellschaft und Familie",
    options: [
      { text: "darf man zur gleichen Zeit nur mit einer Partnerin/einem Partner verheiratet sein.", textEn: "you may only work with one partner at the same time partner." },
      { text: "kann man mehrere Ehepartnerinnen/Ehepartner gleichzeitig haben.", textEn: "you can have several spouses at the same time ." },
      { text: "darf man nicht wieder heiraten, wenn man einmal verheiratet war.", textEn: "you are not allowed to remarry once you are married was." },
      { text: "darf eine Frau nicht wieder heiraten, wenn ihr Mann gestorben ist.", textEn: "a woman may not remarry if her husband died." }
    ],
    correct: 0,
    srcs: 2
  },
  {
    id: 253,
    type: "text",
    q: "Wo müssen Sie sich anmelden, wenn Sie in Deutschland umziehen?",
    qEn: "Where do you have to register if you move in Germany?",
    cat: "Staat",
    options: [
      { text: "beim Einwohnermeldeamt", textEn: "at the Residents' Registration Office" },
      { text: "beim Standesamt", textEn: "at the registry office" },
      { text: "beim Ordnungsamt", textEn: "at the public order office" },
      { text: "beim Gewerbeamt", textEn: "at the trade office" }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 254,
    type: "text",
    q: "In Deutschland dürfen Ehepaare sich scheiden lassen. Meistens müssen sie dazu das \"Trennungsjahr\" einhalten. Was bedeutet das?",
    qEn: "In Germany, married couples are permitted to divorce. Usually they must observe the \"year of separation\" (Trennungsjahr). What does this mean?",
    cat: "Gesellschaft und Familie",
    options: [
      { text: "Der Scheidungsprozess dauert ein Jahr.", textEn: "The divorce court proceeding takes one year." },
      { text: "Die Ehegatten sind ein Jahr verheiratet, dann ist die Scheidung möglich.", textEn: "The spouses have been married for one year, then divorce is possible." },
      { text: "Das Besuchsrecht für die Kinder gilt ein Jahr.", textEn: "Visitation rights for the children last for one year." },
      { text: "Die Ehegatten führen mindestens ein Jahr getrennt ihr eigenes Leben. Danach ist die Scheidung möglich.", textEn: "The spouses live separately for at least one year. After that, divorce is possible." }
    ],
    correct: 3,
    srcs: 2
  },
  {
    id: 255,
    type: "text",
    q: "Bei Erziehungsproblemen können Eltern in Deutschland Hilfe erhalten vom …",
    qEn: "In case of parenting problems, parents in Germany can get help received from ...",
    cat: "Gesellschaft und Familie",
    options: [
      { text: "Ordnungsamt.", textEn: "Public order office." },
      { text: "Schulamt.", textEn: "School Authority." },
      { text: "Jugendamt.", textEn: "Youth Welfare Office." },
      { text: "Gesundheitsamt.", textEn: "Health Department." }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 256,
    type: "text",
    q: "Ein Ehepaar möchte in Deutschland ein Restaurant eröffnen. Was braucht es dazu unbedingt?",
    qEn: "A couple wants to open a restaurant in Germany. What is it absolutely necessary?",
    cat: "Staat",
    options: [
      { text: "eine Erlaubnis der Polizei", textEn: "a permit from the police" },
      { text: "eine Genehmigung einer Partei", textEn: "a permit from a party" },
      { text: "eine Genehmigung des Einwohnermeldeamts", textEn: "a permit from the Residents' Registration Office" },
      { text: "eine Gaststättenerlaubnis von der zuständigen Behörde", textEn: "a restaurant permit from the competent authority" }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 257,
    type: "text",
    q: "Eine erwachsene Frau möchte in Deutschland das Abitur nachholen. Das kann sie an …",
    qEn: "An adult woman wants to graduate from high school in Germany . She can do that at ...",
    cat: "Bildung und Arbeit",
    options: [
      { text: "einer Hochschule.", textEn: "of a university." },
      { text: "einem Abendgymnasium.", textEn: "an evening grammar school" },
      { text: "einer Hauptschule.", textEn: "of a Hauptschule" },
      { text: "einer Privatuniversität.", textEn: "of a private university" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 258,
    type: "text",
    q: "Was darf das Jugendamt in Deutschland?",
    qEn: "What is the youth welfare office allowed to do in Germany?",
    cat: "Gesellschaft und Familie",
    options: [
      { text: "Es entscheidet, welche Schule das Kind besucht.", textEn: "It decides which school the child attends." },
      { text: "Es kann ein Kind, das geschlagen wird oder hungern muss, aus der Familie nehmen.", textEn: "A child who is beaten or has to starve can be of the family." },
      { text: "Es bezahlt das Kindergeld an die Eltern.", textEn: "It pays the child benefit to the parents." },
      { text: "Es kontrolliert, ob das Kind einen Kindergarten besucht.", textEn: "It checks whether the child attends a kindergarten." }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 259,
    type: "text",
    q: "Das Berufsinformationszentrum BIZ bei der Bundesagentur für Arbeit in Deutschland hilft bei der …",
    qEn: "The BIZ Career Information Centre at the Federal Agency for Work in Germany helps with the ...",
    cat: "Bildung und Arbeit",
    options: [
      { text: "Rentenberechnung.", textEn: "Pension calculation" },
      { text: "Lehrstellensuche.", textEn: "Apprenticeship search" },
      { text: "Steuererklärung.", textEn: "Tax return" },
      { text: "Krankenversicherung.", textEn: "Health insurance" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 260,
    type: "text",
    q: "In Deutschland hat ein Kind in der Schule …",
    qEn: "In Germany, a child at school...",
    cat: "Bildung und Arbeit",
    options: [
      { text: "Recht auf unbegrenzte Freizeit.", textEn: "Right to unlimited free time." },
      { text: "Wahlfreiheit für alle Fächer.", textEn: "Freedom of choice for all subjects." },
      { text: "Anspruch auf Schulgeld.", textEn: "Entitlement to school fees." },
      { text: "Anwesenheitspflicht.", textEn: "Compulsory attendance." }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 261,
    type: "text",
    q: "Ein Mann möchte mit 30 Jahren in Deutschland sein Abitur nachholen. Wo kann er das tun? An …",
    qEn: "A man wants to graduate from high school in Germany at the age of 30 . Where can he do that? On ...",
    cat: "Bildung und Arbeit",
    options: [
      { text: "einer Hochschule.", textEn: "of a university" },
      { text: "einem Abendgymnasium.", textEn: "an evening grammar school" },
      { text: "einer Hauptschule.", textEn: "of a Hauptschule" },
      { text: "einer Privatuniversität.", textEn: "of a private university" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 262,
    type: "text",
    q: "Was bedeutet in Deutschland der Grundsatz der Gleichbehandlung?",
    qEn: "What does the principle of Equal treatment?",
    cat: "Recht",
    options: [
      { text: "Niemand darf z.B. wegen einer Behinderung benachteiligt werden.", textEn: "No one may be discriminated against because of a disability, for example. ." },
      { text: "Man darf andere Personen benachteiligen, wenn ausreichende persönliche Gründe hierfür vorliegen.", textEn: "It is permissible to discriminate against other persons if sufficient there are personal reasons for doing so." },
      { text: "Niemand darf gegen Personen klagen, wenn sie benachteiligt wurden.", textEn: "No one may sue persons if they are disadvantaged ." },
      { text: "Es ist für alle Gesetz, benachteiligten Gruppen jährlich Geld zu spenden.", textEn: "It is applicable to all law, disadvantaged groups annually To donate money." }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 263,
    type: "text",
    q: "In Deutschland sind Jugendliche ab 14 Jahren strafmündig. Das bedeutet: Jugendliche, die 14 Jahre und älter sind und gegen Strafgesetze verstoßen, …",
    qEn: "In Germany, young people from the age of 14 are criminally responsible. The means: young people who are 14 years and older and who are violate criminal laws, ...",
    cat: "Recht",
    options: [
      { text: "werden bestraft.", textEn: "are punished." },
      { text: "werden wie Erwachsene behandelt.", textEn: "are treated like adults." },
      { text: "teilen die Strafe mit ihren Eltern.", textEn: "share the punishment with their parents." },
      { text: "werden nicht bestraft.", textEn: "are not punished." }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 264,
    type: "text",
    q: "Zu welchem Fest tragen Menschen in Deutschland bunte Kostüme und Masken?",
    qEn: "For which festival do people in Germany wear colorful costumes and masks?",
    cat: "Religion und Kultur",
    options: [
      { text: "am Rosenmontag", textEn: "on Shrove Monday" },
      { text: "am Maifeiertag", textEn: "on May Day" },
      { text: "beim Oktoberfest", textEn: "at the Oktoberfest" },
      { text: "an Pfingsten", textEn: "at Pentecost" }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 265,
    type: "text",
    q: "Wohin muss man in Deutschland zuerst gehen, wenn man heiraten möchte?",
    qEn: "Where do you have to go first in Germany when you get married ?",
    cat: "Gesellschaft und Familie",
    options: [
      { text: "zum Einwohnermeldeamt", textEn: "to the Residents' Registration Office" },
      { text: "zum Ordnungsamt", textEn: "to the public order office" },
      { text: "zur Agentur für Arbeit", textEn: "to the Employment Agency" },
      { text: "zum Standesamt", textEn: "to the registry office" }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 266,
    type: "text",
    q: "Wann beginnt die gesetzliche Nachtruhe in Deutschland?",
    qEn: "When does the statutory night's rest begin in Germany?",
    cat: "Recht",
    options: [
      { text: "wenn die Sonne untergeht", textEn: "When the sun goes down" },
      { text: "wenn die Nachbarn schlafen gehen", textEn: "when the neighbors go to sleep" },
      { text: "um 0 Uhr, Mitternacht", textEn: "at 0 o'clock, midnight" },
      { text: "um 22 Uhr", textEn: "at 10 p.m." }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 267,
    type: "text",
    q: "Eine junge Frau in Deutschland, 22 Jahre alt, lebt mit ihrem Freund zusammen. Die Eltern der Frau finden das nicht gut, weil ihnen der Freund nicht gefällt. Was können die Eltern tun?",
    qEn: "A young woman in Germany, 22 years old, lives with her friend together. The woman's parents don't like it, because they don't like the friend. What can parents do? What to do?",
    cat: "Gesellschaft und Familie",
    options: [
      { text: "Sie müssen die Entscheidung der volljährigen Tochter respektieren.", textEn: "They must be aware of the decision of the adult daughter respect." },
      { text: "Sie haben das Recht, die Tochter in die elterliche Wohnung zurückzuholen.", textEn: "You have the right to send the daughter to her parents' home ." },
      { text: "Sie können zur Polizei gehen und die Tochter anzeigen.", textEn: "They can go to the police and report the daughter." },
      { text: "Sie suchen einen anderen Mann für die Tochter.", textEn: "They are looking for another man for their daughter." }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 268,
    type: "text",
    q: "Eine junge Frau will den Führerschein machen. Sie hat Angst vor der Prüfung, weil ihre Muttersprache nicht Deutsch ist. Was ist richtig?",
    qEn: "A young woman wants to get her driver's license. She's scared before the exam because their mother tongue is not German. Which is correct?",
    cat: "Gesellschaft und Familie",
    options: [
      { text: "Sie muss mindestens zehn Jahre in Deutschland leben, bevor sie den Führerschein machen kann.", textEn: "She must live in Germany for at least ten years before she can get her driver's license." },
      { text: "Wenn sie kein Deutsch kann, darf sie keinen Führerschein haben.", textEn: "If she doesn't know German, she can't get a driver's license ." },
      { text: "Sie muss den Führerschein in dem Land machen, in dem man ihre Sprache spricht.", textEn: "She has to get her driver's license in the country where you speaks their language." },
      { text: "Sie kann die Theorie-Prüfung vielleicht in ihrer Muttersprache machen. Es gibt mehr als zehn Sprachen zur Auswahl.", textEn: "She may be able to pass the theory exam in her Mother tongue. There are more than ten languages for Selection." }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 269,
    type: "text",
    q: "In Deutschland haben Kinder ab dem Alter von drei Jahren bis zur Ersteinschulung einen Anspruch auf …",
    qEn: "In Germany, children from the age of three to entitlement to ...",
    cat: "Bildung und Arbeit",
    options: [
      { text: "monatliches Taschengeld.", textEn: "monthly pocket money." },
      { text: "einen Platz in einem Sportverein.", textEn: "a place in a sports club." },
      { text: "einen Kindergartenplatz.", textEn: "a kindergarten place." },
      { text: "einen Ferienpass.", textEn: "a holiday pass." }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 270,
    type: "text",
    q: "Die Volkshochschule in Deutschland ist eine Einrichtung …",
    qEn: "The Adult Education Centre (Volkshochschule) in Germany is an institution …",
    cat: "Bildung und Arbeit",
    options: [
      { text: "für den Religionsunterricht.", textEn: "for religious education." },
      { text: "nur für Jugendliche.", textEn: "only for young people." },
      { text: "zur Weiterbildung.", textEn: "for continuing adult education (Weiterbildung)." },
      { text: "nur für Rentnerinnen und Rentner.", textEn: "only for pensioners/retirees." }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 271,
    type: "text",
    q: "Was ist in Deutschland ein Brauch zu Weihnachten?",
    qEn: "What is a custom at Christmas in Germany?",
    cat: "Religion und Kultur",
    options: [
      { text: "bunte Eier verstecken", textEn: "Hide colorful eggs" },
      { text: "einen Tannenbaum schmücken", textEn: "to decorate a Christmas tree" },
      { text: "sich mit Masken und Kostümen verkleiden", textEn: "dress up with masks and costumes" },
      { text: "Kürbisse vor die Tür stellen", textEn: "Putting pumpkins in front of the door" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 272,
    type: "text",
    q: "Welche Lebensform ist in Deutschland nicht erlaubt?",
    qEn: "Which way of life is not allowed in Germany?",
    cat: "Gesellschaft und Familie",
    options: [
      { text: "Mann und Frau sind geschieden und leben mit neuen Partnern zusammen.", textEn: "Husband and wife are divorced and live with new partners together" },
      { text: "Zwei Frauen leben zusammen.", textEn: "Two women live together" },
      { text: "Ein alleinerziehender Vater lebt mit seinen zwei Kindern zusammen.", textEn: "A single father lives with his two children together." },
      { text: "Ein Mann ist mit zwei Frauen zur selben Zeit verheiratet.", textEn: "A man is married to two women at the same time" }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 273,
    type: "text",
    q: "Bei Erziehungsproblemen gehen Sie in Deutschland …",
    qEn: "In case of child-rearing and parenting problems, you go in Germany to the …",
    cat: "Gesellschaft und Familie",
    options: [
      { text: "zur Ärztin/zum Arzt.", textEn: "to the doctor." },
      { text: "zum Gesundheitsamt.", textEn: "to the public health office (Gesundheitsamt)." },
      { text: "zum Einwohnermeldeamt.", textEn: "to the residents' registration office (Einwohnermeldeamt)." },
      { text: "zum Jugendamt.", textEn: "to the youth welfare office (Jugendamt)." }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 274,
    type: "text",
    q: "Sie haben in Deutschland absichtlich einen Brief geöffnet, der an eine andere Person adressiert ist. Was haben Sie nicht beachtet?",
    qEn: "You have deliberately opened a letter in Germany that is addressed to another person. What do you not have Noticed?",
    cat: "Recht",
    options: [
      { text: "das Schweigerecht", textEn: "the right to remain silent" },
      { text: "das Briefgeheimnis", textEn: "the secrecy of correspondence" },
      { text: "die Schweigepflicht", textEn: "the duty of confidentiality" },
      { text: "die Meinungsfreiheit", textEn: "freedom of expression" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 275,
    type: "text",
    q: "Was braucht man in Deutschland für eine Ehescheidung?",
    qEn: "What is required in Germany to obtain a divorce?",
    cat: "Gesellschaft und Familie",
    options: [
      { text: "die Einwilligung der Eltern", textEn: "the consent of the parents" },
      { text: "ein Attest einer Ärztin/eines Arztes", textEn: "a medical certificate from a doctor" },
      { text: "die Einwilligung der Kinder", textEn: "the consent of the children" },
      { text: "die Unterstützung einer Anwältin/eines Anwalts", textEn: "the representation of a lawyer (Anwalt/Anwältin)" }
    ],
    correct: 3,
    srcs: 1
  },
  {
    id: 276,
    type: "text",
    q: "Was sollten Sie tun, wenn Sie von Ihrer Ansprechpartnerin/Ihrem Ansprechpartner in einer deutschen Behörde schlecht behandelt werden?",
    qEn: "What should you do if you are treated poorly by your caseworker/contact person at a German public authority?",
    cat: "Staat",
    options: [
      { text: "Ich kann nichts tun.", textEn: "I can do nothing." },
      { text: "Ich muss mir diese Behandlung gefallen lassen.", textEn: "I must tolerate this treatment." },
      { text: "Ich drohe der Person.", textEn: "I threaten the person." },
      { text: "Ich kann mich bei der Behördenleiterin/beim Behördenleiter beschweren.", textEn: "I can lodge a complaint with the head of the authority (Dienstaufsichtsbeschwerde)." }
    ],
    correct: 3,
    srcs: 1
  },
  {
    id: 277,
    type: "text",
    q: "Eine Frau, die ein zweijähriges Kind hat, bewirbt sich in Deutschland um eine Stelle. Was ist ein Beispiel für Diskriminierung? Sie bekommt die Stelle nur deshalb nicht, weil sie …",
    qEn: "A woman who has a two-year-old child applies for a job in Germany by one job. What is an example of Discrimination? The only reason she doesn't get the job is because they ...",
    cat: "Recht",
    options: [
      { text: "kein Englisch spricht.", textEn: "doesn't speak English." },
      { text: "zu hohe Gehaltsvorstellungen hat.", textEn: "has too high salary expectations." },
      { text: "keine Erfahrungen in diesem Beruf hat.", textEn: "has no experience in this profession." },
      { text: "Mutter ist.", textEn: "mother." }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 278,
    type: "text",
    q: "Ein Mann im Rollstuhl hat sich auf eine Stelle als Buchhalter beworben. Was ist ein Beispiel für Diskriminierung? Er bekommt die Stelle nur deshalb nicht, weil er …",
    qEn: "A man in a wheelchair has applied for a job as an accountant . What is an example of discrimination? He gets the only reason he did not get the job was because he ...",
    cat: "Recht",
    options: [
      { text: "im Rollstuhl sitzt.", textEn: "in a wheelchair." },
      { text: "keine Erfahrung hat.", textEn: "has no experience." },
      { text: "zu hohe Gehaltsvorstellungen hat.", textEn: "has too high salary expectations." },
      { text: "kein Englisch spricht.", textEn: "doesn't speak English." }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 279,
    type: "text",
    q: "In den meisten Mietshäusern in Deutschland gibt es eine \"Hausordnung\". Was steht in einer solchen \"Hausordnung\"? Sie nennt …",
    qEn: "Most apartment buildings in Germany have house rules (Hausordnung). What is stated in such house rules? They list …",
    cat: "Gesellschaft und Familie",
    options: [
      { text: "Regeln für die Benutzung öffentlicher Verkehrsmittel.", textEn: "rules for using public transport." },
      { text: "alle Mieterinnen und Mieter im Haus.", textEn: "the names of all tenants in the building." },
      { text: "Regeln, an die sich alle Bewohnerinnen und Bewohner halten müssen.", textEn: "rules that all residents of the building must follow." },
      { text: "die Adresse des nächsten Ordnungsamtes.", textEn: "the address of the nearest public order office." }
    ],
    correct: 2,
    srcs: 1
  },
  {
    id: 280,
    type: "text",
    q: "Wenn Sie sich in Deutschland gegen einen falschen Steuerbescheid wehren wollen, müssen Sie …",
    qEn: "If you appeal against a false tax assessment in Germany want to defend yourself, you must ...",
    cat: "Recht",
    options: [
      { text: "nichts machen.", textEn: "do nothing." },
      { text: "den Bescheid wegwerfen.", textEn: "throw away the notice." },
      { text: "Einspruch einlegen.", textEn: "file an objection." },
      { text: "warten, bis ein anderer Bescheid kommt.", textEn: "wait until another decision comes." }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 281,
    type: "text",
    q: "Zwei Freunde wollen in ein öffentliches Schwimmbad in Deutschland. Beide haben eine dunkle Hautfarbe und werden deshalb nicht hineingelassen. Welches Recht wird in dieser Situation verletzt? Das Recht auf …",
    qEn: "Two friends want to go to a public swimming pool in Germany. Both have dark skin and are therefore not allowed in. What is the right in this Situation violated? The right to ...",
    cat: "Recht",
    options: [
      { text: "Meinungsfreiheit", textEn: "Freedom of opinion/speech" },
      { text: "Gleichbehandlung", textEn: "Equal treatment" },
      { text: "Versammlungsfreiheit", textEn: "Freedom of assembly" },
      { text: "Freizügigkeit", textEn: "Free movement of persons" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 282,
    type: "text",
    q: "Welches Ehrenamt müssen deutsche Staatsbürgerinnen und Staatsbürger übernehmen, wenn sie dazu aufgefordert werden?",
    qEn: "What voluntary work do German citizens have to do? Citizens take over when they are asked to do so?",
    cat: "Recht",
    options: [
      { text: "Vereinstrainerin/Vereinstrainer", textEn: "Club trainer" },
      { text: "Wahlhelferin/Wahlhelfer", textEn: "Poll worker" },
      { text: "Bibliotheksaufsicht", textEn: "Library supervision" },
      { text: "Lehrerin/Lehrer", textEn: "Teacher" }
    ],
    correct: 1,
    srcs: 2
  },
  {
    id: 283,
    type: "text",
    q: "Was tun Sie, wenn Sie eine falsche Rechnung von einer deutschen Behörde bekommen?",
    qEn: "What do you do if you receive a false invoice from a German authority?",
    cat: "Recht",
    options: [
      { text: "Ich lasse die Rechnung liegen.", textEn: "I leave the bill behind." },
      { text: "Ich lege Widerspruch bei der Behörde ein.", textEn: "I file an objection with the authorities." },
      { text: "Ich schicke die Rechnung an die Behörde zurück.", textEn: "I send the invoice back to the authority." },
      { text: "Ich gehe mit der Rechnung zum Finanzamt.", textEn: "I go to the tax office with the invoice." }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 284,
    type: "text",
    q: "Was man für die Arbeit können muss, ändert sich in Zukunft sehr schnell. Was kann man tun?",
    qEn: "What you need to be able to do for work will change in the future very quickly. What can be done?",
    cat: "Bildung und Arbeit",
    options: [
      { text: "Es ist egal, was man lernt.", textEn: "It doesn't matter what you learn." },
      { text: "Erwachsene müssen auch nach der Ausbildung immer weiter lernen.", textEn: "Adults have to keep going even after their training Learn." },
      { text: "Kinder lernen in der Schule alles, was im Beruf wichtig ist. Nach der Schule muss man nicht weiter lernen.", textEn: "Children learn everything that is important at work at school. After school, you don't have to continue learning." },
      { text: "Alle müssen früher aufhören zu arbeiten, weil sich alles ändert.", textEn: "Everyone has to stop working earlier because everything changes." }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 285,
    type: "text",
    q: "Frau Frost arbeitet als fest angestellte Mitarbeiterin in einem Büro. Was muss sie nicht von ihrem Gehalt bezahlen?",
    qEn: "Ms. Frost works as a permanent employee in an office. What does she not have to pay from her salary?",
    cat: "Bildung und Arbeit",
    options: [
      { text: "Lohnsteuer", textEn: "Payroll tax" },
      { text: "Beiträge zur Arbeitslosenversicherung", textEn: "Unemployment insurance contributions" },
      { text: "Beiträge zur Renten- und Krankenversicherung", textEn: "Contributions to pension and health insurance" },
      { text: "Umsatzsteuer", textEn: "Value added tax" }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 286,
    type: "text",
    q: "Welche Organisation in einer Firma hilft den Arbeitnehmerinnen und Arbeitnehmern bei Problemen mit der Arbeitgeberin/dem Arbeitgeber?",
    qEn: "Which organization in a company helps employees with issues concerning their employer?",
    cat: "Bildung und Arbeit",
    options: [
      { text: "der Betriebsrat", textEn: "the works council (Betriebsrat)" },
      { text: "die Betriebsprüferin/der Betriebsprüfer", textEn: "the company auditor / tax inspector" },
      { text: "die Betriebsgruppe", textEn: "the company group" },
      { text: "das Betriebsmanagement", textEn: "the company management" }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 287,
    type: "text",
    q: "Sie möchten bei einer Firma in Deutschland ihr Arbeitsverhältnis beenden. Was müssen Sie beachten?",
    qEn: "You would like to work with a company in Germany for your Terminate the employment relationship. What do you need to consider?",
    cat: "Bildung und Arbeit",
    options: [
      { text: "die Gehaltszahlungen", textEn: "salary payments" },
      { text: "die Arbeitszeit", textEn: "working hours" },
      { text: "die Kündigungsfrist", textEn: "the notice period" },
      { text: "die Versicherungspflicht", textEn: "compulsory insurance" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 288,
    type: "text",
    q: "Woraus begründet sich Deutschlands besondere Verantwortung für Israel?",
    qEn: "What is the basis of Germany's special responsibility towards Israel?",
    cat: "Geschichte",
    options: [
      { text: "aus der Mitgliedschaft in der Europäischen Union (EU)", textEn: "from membership in the European Union (EU)" },
      { text: "aus den nationalsozialistischen Verbrechen gegen Juden", textEn: "from the National Socialist (Nazi) crimes against Jewish people (Shoah)" },
      { text: "aus dem Grundgesetz der Bundesrepublik Deutschland", textEn: "from the Basic Law of the Federal Republic of Germany" },
      { text: "aus der christlichen Tradition", textEn: "from Christian tradition" }
    ],
    correct: 1,
    srcs: 2
  },
  {
    id: 289,
    type: "text",
    q: "Ein Mann mit dunkler Hautfarbe bewirbt sich um eine Stelle als Kellner in einem Restaurant in Deutschland. Was ist ein Beispiel für Diskriminierung? Er bekommt die Stelle nur deshalb nicht, weil …",
    qEn: "A man with dark skin applies for a job as a Waiter in a restaurant in Germany. What is an example for discrimination? The only reason he doesn't get the job is because ...",
    cat: "Recht",
    options: [
      { text: "seine Deutschkenntnisse zu gering sind.", textEn: "his knowledge of German is too low." },
      { text: "er zu hohe Gehaltsvorstellungen hat.", textEn: "he has too high salary expectations." },
      { text: "er eine dunkle Haut hat.", textEn: "he has dark skin." },
      { text: "er keine Erfahrungen im Beruf hat.", textEn: "he has no experience in the profession." }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 290,
    type: "text",
    q: "Sie haben in Deutschland einen Fernseher gekauft. Zu Hause packen Sie den Fernseher aus, doch er funktioniert nicht. Der Fernseher ist kaputt. Was können Sie machen?",
    qEn: "You bought a television in Germany. At home unpack the TV, but it doesn't work. The TV is broken. What can you do?",
    cat: "Recht",
    options: [
      { text: "eine Anzeige schreiben", textEn: "Write an ad" },
      { text: "den Fernseher reklamieren", textEn: "complain about the TV" },
      { text: "das Gerät ungefragt austauschen", textEn: "replace the device without being asked" },
      { text: "die Garantie verlängern", textEn: "extend the warranty" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 291,
    type: "text",
    q: "Warum muss man in Deutschland bei der Steuererklärung aufschreiben, ob man zu einer Kirche gehört oder nicht? Weil …",
    qEn: "Why do you have to file a tax return in Germany write down whether you belong to a church or not? Because ...",
    cat: "Religion und Kultur",
    options: [
      { text: "es eine Kirchensteuer gibt, die an die Einkommen- und Lohnsteuer geknüpft ist.", textEn: "there is a church tax that is paid to the income and wage tax." },
      { text: "das für die Statistik in Deutschland wichtig ist.", textEn: "which is important for statistics in Germany." },
      { text: "man mehr Steuern zahlen muss, wenn man nicht zu einer Kirche gehört.", textEn: "you have to pay more taxes if you don't belong to a church ." },
      { text: "die Kirche für die Steuererklärung verantwortlich ist.", textEn: "the church is responsible for the tax return." }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 292,
    type: "text",
    q: "Die Menschen in Deutschland leben nach dem Grundsatz der religiösen Toleranz. Was bedeutet das?",
    qEn: "The people in Germany live according to the principle of religious tolerance. What does this mean?",
    cat: "Religion und Kultur",
    options: [
      { text: "Es dürfen keine Moscheen gebaut werden.", textEn: "No mosques may be built." },
      { text: "Alle Menschen glauben an Gott.", textEn: "All people believe in God." },
      { text: "Jeder kann glauben, was er möchte.", textEn: "Everyone can believe what they want." },
      { text: "Der Staat entscheidet, an welchen Gott die Menschen glauben.", textEn: "The state decides which God people believe in." }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 293,
    type: "text",
    q: "Was ist in Deutschland ein Brauch zu Ostern?",
    qEn: "What is an Easter custom in Germany?",
    cat: "Religion und Kultur",
    options: [
      { text: "Kürbisse vor die Tür stellen", textEn: "Putting pumpkins in front of the door" },
      { text: "einen Tannenbaum schmücken", textEn: "to decorate a Christmas tree" },
      { text: "Eier bemalen", textEn: "Paint eggs" },
      { text: "Raketen in die Luft schießen", textEn: "Shoot missiles into the air" }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 294,
    type: "text",
    q: "Pfingsten ist ein …",
    qEn: "Pentecost is a ...",
    cat: "Religion und Kultur",
    options: [
      { text: "christlicher Feiertag.", textEn: "Christian holiday." },
      { text: "deutscher Gedenktag.", textEn: "German Remembrance Day." },
      { text: "internationaler Trauertag.", textEn: "international day of mourning." },
      { text: "bayerischer Brauch.", textEn: "Bavarian custom." }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 295,
    type: "text",
    q: "Welche Religion hat die europäische und deutsche Kultur geprägt?",
    qEn: "What is the religion of European and German culture? ?",
    cat: "Religion und Kultur",
    options: [
      { text: "der Hinduismus", textEn: "Hinduism" },
      { text: "das Christentum", textEn: "Christianity" },
      { text: "der Buddhismus", textEn: "Buddhism" },
      { text: "der Islam", textEn: "Islam" }
    ],
    correct: 1,
    srcs: 3
  },
  {
    id: 296,
    type: "text",
    q: "In Deutschland nennt man die letzten vier Wochen vor Weihnachten …",
    qEn: "In Germany, the last four weeks before Christmas ...",
    cat: "Religion und Kultur",
    options: [
      { text: "den Buß- und Bettag.", textEn: "the Day of Repentance and Prayer." },
      { text: "das Erntedankfest.", textEn: "Thanksgiving." },
      { text: "die Adventszeit.", textEn: "the Advent season." },
      { text: "Allerheiligen.", textEn: "All Saints' Day." }
    ],
    correct: 2,
    srcs: 3
  },
  {
    id: 297,
    type: "text",
    q: "Aus welchem Land sind die meisten Migrantinnen und Migranten nach Deutschland gekommen?",
    qEn: "From which country did the largest number of migrants come to Germany?",
    cat: "Gesellschaft und Familie",
    options: [
      { text: "Italien", textEn: "Italy" },
      { text: "Polen", textEn: "Poland" },
      { text: "Marokko", textEn: "Morocco" },
      { text: "Türkei", textEn: "Turkey" }
    ],
    correct: 3,
    srcs: 3
  },
  {
    id: 298,
    type: "text",
    q: "In der DDR lebten vor allem Migrantinnen und Migranten aus …",
    qEn: "In the GDR (East Germany), migrants lived primarily from …",
    cat: "Geschichte",
    options: [
      { text: "Vietnam, Polen, Mosambik.", textEn: "Vietnam, Poland, Mozambique." },
      { text: "Frankreich, Rumänien, Somalia.", textEn: "France, Romania, Somalia." },
      { text: "Chile, Ungarn, Simbabwe.", textEn: "Chile, Hungary, Zimbabwe." },
      { text: "Nordkorea, Mexiko, Ägypten.", textEn: "North Korea, Mexico, Egypt." }
    ],
    correct: 0,
    srcs: 3
  },
  {
    id: 299,
    type: "text",
    q: "Ausländische Arbeitnehmerinnen und Arbeitnehmer, die in den 50er und 60er Jahren von der Bundesrepublik Deutschland angeworben wurden, nannte man …",
    qEn: "Foreign workers recruited by the Federal Republic of Germany in the 1950s and 1960s were called …",
    cat: "Geschichte",
    options: [
      { text: "Schwarzarbeiterinnen/Schwarzarbeiter.", textEn: "undeclared / illegal workers (Schwarzarbeiter)." },
      { text: "Gastarbeiterinnen/Gastarbeiter.", textEn: "guest workers (Gastarbeiter)." },
      { text: "Zeitarbeiterinnen/Zeitarbeiter.", textEn: "temporary agency workers." },
      { text: "Schichtarbeiterinnen/Schichtarbeiter.", textEn: "shift workers." }
    ],
    correct: 1,
    srcs: 1
  },
  {
    id: 300,
    type: "text",
    q: "Aus welchem Land kamen die ersten Gastarbeiterinnen und Gastarbeiter in die Bundesrepublik Deutschland?",
    qEn: "From which country did the first guest workers (Gastarbeiter) come to the Federal Republic of Germany?",
    cat: "Geschichte",
    options: [
      { text: "Italien", textEn: "Italy" },
      { text: "Spanien", textEn: "Spain" },
      { text: "Portugal", textEn: "Portugal" },
      { text: "Türkei", textEn: "Turkey" }
    ],
    correct: 0,
    srcs: 3
  }
];
