import json, re, subprocess, xml.etree.ElementTree as ET, unicodedata, os

DPI = 170
pdf   = json.load(open('pdf_parsed.json', encoding='utf-8'))
pages = {int(k): v for k, v in json.load(open('img_pages.json')).items()}
gen   = {q['num']: q for q in pdf['ALLGEMEIN']}
os.makedirs('img', exist_ok=True)

def words(page):
    xml = subprocess.run(['pdftotext','-bbox','-f',str(page),'-l',str(page),'kat.pdf','-'],
                         capture_output=True, text=True).stdout
    root = ET.fromstring(xml)
    ns = {'x':'http://www.w3.org/1999/xhtml'}
    pg = root.find('.//x:page', ns)
    W, H = float(pg.get('width')), float(pg.get('height'))
    ws = [{'t': w.text or '', 'x0': float(w.get('xMin')), 'y0': float(w.get('yMin')),
           'x1': float(w.get('xMax')), 'y1': float(w.get('yMax'))}
          for w in pg.findall('.//x:word', ns)]
    return W, H, ws

def norm(s): return re.sub(r'[^a-z0-9äöüß]','', (s or '').lower())

out = {}
for num, page in sorted(pages.items()):
    q = gen[num]
    W, H, ws = words(page)
    # anchor: the "Aufgabe <num>" label
    ai = next(i for i,w in enumerate(ws) if w['t']=='Aufgabe' and ws[i+1]['t'].rstrip('.')==str(num))
    rest = ws[ai+2:]
    # walk the question text (plus credit) to find where it ends
    qwords = [norm(t) for t in re.findall(r'\S+', q['q'])]
    j, k = 0, 0
    while j < len(rest) and k < len(qwords):
        if norm(rest[j]['t']) == qwords[k] or qwords[k].startswith(norm(rest[j]['t'])[:6]):
            k += 1
        j += 1
    qend = max(w['y1'] for w in rest[:j]) if j else ws[ai]['y1']

    after = rest[j:]
    is_bild = all(re.fullmatch(r'(bild)?\d+', norm(o)) for o in q['options'])

    bottom = None
    if q['credit']:
        # crop down to (and including) the photo credit line
        toks = [t for t in re.findall(r'\S+', q['credit']) if norm(t) and norm(t) != 'c']
        for t in toks[:3]:
            hit = next((w for w in after if norm(w['t']) == norm(t) and w['y0'] > qend + 15), None)
            if hit:
                row = [w for w in after if abs(w['y0'] - hit['y0']) < 4]
                bottom = max(w['y1'] for w in row) + 4
                break
    if bottom is None and is_bild:
        rows = {}
        for w in after:
            rows.setdefault(round(w['y0'] / 3), []).append(w)
        for key in sorted(rows):
            row = rows[key]
            labs = [w for w in row if norm(w['t']) == 'bild']
            if len(labs) >= 3:
                bottom = max(w['y1'] for w in row) + 4
                break
    if bottom is None:
        first = norm(q['options'][0].split()[0])
        hit = next((w for w in after if norm(w['t']) == first and w['y0'] > qend + 20), None)
        bottom = (hit['y0'] - 6) if hit else qend + 300

    top = qend + 6
    px = lambda v: int(round(v * DPI / 72.0))
    box = (px(28), px(top), px(W - 28) - px(28), px(bottom) - px(top))
    src = f'raw-{page:03d}.png'
    subprocess.run(['pdftoppm','-png','-r',str(DPI),'-f',str(page),'-l',str(page),
                    'kat.pdf', f'raw-{page:03d}'], check=True)
    real = f'raw-{page:03d}-{page:03d}.png'
    if not os.path.exists(real):
        real = next(f for f in os.listdir('.') if f.startswith(f'raw-{page:03d}-'))
    subprocess.run(['magick', real, '-crop', f'{box[2]}x{box[3]}+{box[0]}+{box[1]}',
                    '+repage', '-trim', '+repage', '-bordercolor','white','-border','8',
                    '-resize','880x>', '-quality','86', f'img/q{num:03d}.jpg'], check=True)
    out[num] = {'page': page, 'bild': is_bild, 'credit': q['credit']}
    print(f"  q{num:03d}  page {page:>3}  bild={str(is_bild):5}  crop {box}")

json.dump(out, open('img_meta.json','w'), ensure_ascii=False, indent=1)
