import json, re

key  = json.load(open('key_raw.json', encoding='utf-8'))
flex = json.load(open('ds_flex.json', encoding='utf-8'))
gen  = key['ALLGEMEIN']
IMG  = {21,55,70,130,181,209,216,226,235}

def js(s):
    return '"' + s.replace('\\','\\\\').replace('"','\\"') + '"'

CAT = {'Recht':'Recht', 'Gesellschaft und Familie':'Gesellschaft und Familie',
       'Staat und Politik':'Staat und Politik', 'Geschichte':'Geschichte'}

lines = []
lines.append('''/*
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
 * Kein Englisch in diesem Teil — die Übersetzungen betreffen nur die
 * Landesfragen in data/bayern.js.
 */
window.ALLGEMEIN_QUESTIONS = [''')

n3 = n2 = n1 = 0
for i, q in enumerate(gen, start=1):
    f = flex[i-1]
    correct = f['correct']
    srcs = len(q['srcs']) if q['srcs'] else 1
    if srcs == 3: n3 += 1
    elif srcs == 2: n2 += 1
    else: n1 += 1
    is_img = i in IMG
    lines.append('  {')
    lines.append(f'    id: {i},')
    lines.append(f'    type: {js("image" if is_img else "text")},')
    lines.append(f'    q: {js(q["q"])},')
    if q['credit']:
        lines.append(f'    credit: {js(q["credit"])},')
    if is_img:
        lines.append(f'    image: {js("assets/q%03d.jpg" % i)},')
    if q['cat']:
        lines.append(f'    cat: {js(q["cat"])},')
    lines.append('    options: [')
    for o in q['options']:
        lines.append(f'      {{ text: {js(o)} }},')
    lines[-1] = lines[-1].rstrip(',')
    lines.append('    ],')
    lines.append(f'    correct: {correct},')
    lines.append(f'    srcs: {srcs}')
    lines.append('  },')
lines[-1] = '  }'
lines.append('];')
open('allgemein.js','w',encoding='utf-8').write('\n'.join(lines) + '\n')
print(f"emitted 300 questions | key confidence: 3 sources={n3}, 2 sources={n2}, 1 source={n1}")
cats={}
for q in gen: cats[q['cat']]=cats.get(q['cat'],0)+1
print("categories:", cats)
