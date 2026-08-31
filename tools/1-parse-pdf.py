import re, json, unicodedata

MARK = re.compile(r'^[ \t]*[□☐]\s*(.*)$')
AUF  = re.compile(r'^\s*Aufgabe\s+(\d+)\s*$')
NOISE = re.compile(r'^\s*(Seite \d+ von \d+|Teil I|Teil II|Allgemeine Fragen|'
                   r'Fragen für das Bundesland .*|Hinweis: .*|Die Bildbeschreibungen .*)\s*$')
BILDROW = re.compile(r'^\s*(Bild \d+\s+){2,}Bild \d+\s*$')

lines = open('kat.txt', encoding='utf-8').read().split('\n')

# segment: general part, then per-Bundesland
segments = []          # (name, start_line)
segments.append(("ALLGEMEIN", 0))
for i, l in enumerate(lines):
    m = re.match(r'^\s*Fragen für das Bundesland (.+?)\s*$', l)
    if m and (not segments or segments[-1][0] != m.group(1)):
        segments.append((m.group(1), i))

def parse_block(block):
    """block = list of lines for one Aufgabe. -> (question, [options])"""
    q, opts = [], []
    for l in block:
        if NOISE.match(l) or BILDROW.match(l):
            continue
        m = MARK.match(l)
        if m:
            opts.append(m.group(1).strip())
        elif opts:                       # continuation of last option
            if l.strip():
                opts[-1] = (opts[-1] + ' ' + l.strip()).strip()
        else:
            if l.strip():
                q.append(l.strip())
    qt = ' '.join(q).strip()
    qt = re.sub(r'^\d{1,3}\.\s+', '', qt)              # leaked list numbering
    credit = None
    m = re.search(r'\s*((?:©|In Anlehnung an|Quelle:).*)$', qt)
    if m:
        credit = m.group(1).strip(); qt = qt[:m.start()].strip()
    return qt, credit, [re.sub(r'\s+', ' ', o).strip() for o in opts]

out = {}
for si, (name, start) in enumerate(segments):
    end = segments[si+1][1] if si+1 < len(segments) else len(lines)
    body = lines[start:end]
    # find Aufgabe markers
    idx = [(i, int(AUF.match(l).group(1))) for i, l in enumerate(body) if AUF.match(l)]
    qs = []
    for k, (i, num) in enumerate(idx):
        j = idx[k+1][0] if k+1 < len(idx) else len(body)
        qt, credit, opts = parse_block(body[i+1:j])
        qs.append({"num": num, "q": qt, "credit": credit, "options": opts})
    out[name] = qs

json.dump(out, open('pdf_parsed.json','w',encoding='utf-8'), ensure_ascii=False, indent=1)

print("segments:", [(k, len(v)) for k, v in out.items()])
bad = [(k, q['num'], len(q['options'])) for k, v in out.items() for q in v if len(q['options']) != 4]
print("questions without exactly 4 options:", len(bad))
for b in bad[:15]: print("   ", b)
gen = out['ALLGEMEIN']
print("\ngeneral count:", len(gen), "| nums 1..300 contiguous:", [q['num'] for q in gen] == list(range(1,301)))
img = [q['num'] for q in gen if all(re.fullmatch(r'Bild \d+', o) for o in q['options'])]
print("image questions in general part:", img)
