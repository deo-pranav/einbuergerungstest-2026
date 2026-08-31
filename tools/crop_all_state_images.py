#!/usr/bin/env python3
"""
Extracts and crops all 32 state question illustrations (Wappen & Karten)
from docs/gesamtfragenkatalog-bamf-2025-05-07.pdf into assets/qNNN.jpg.
"""

import subprocess
import os
import xml.etree.ElementTree as ET
import glob

PDF_PATH = 'docs/gesamtfragenkatalog-bamf-2025-05-07.pdf'
DPI = 180
px = lambda v: int(round(v * DPI / 72.0))

STATES = [
    {"code": "BW", "name": "Baden-Württemberg", "startId": 301, "startPage": 112},
    {"code": "BY", "name": "Bayern", "startId": 311, "startPage": 117},
    {"code": "BE", "name": "Berlin", "startId": 321, "startPage": 122},
    {"code": "BB", "name": "Brandenburg", "startId": 331, "startPage": 127},
    {"code": "HB", "name": "Bremen", "startId": 341, "startPage": 132},
    {"code": "HH", "name": "Hamburg", "startId": 351, "startPage": 137},
    {"code": "HE", "name": "Hessen", "startId": 361, "startPage": 142},
    {"code": "MV", "name": "Mecklenburg-Vorpommern", "startId": 371, "startPage": 147},
    {"code": "NI", "name": "Niedersachsen", "startId": 381, "startPage": 152},
    {"code": "NW", "name": "Nordrhein-Westfalen", "startId": 391, "startPage": 157},
    {"code": "RP", "name": "Rheinland-Pfalz", "startId": 401, "startPage": 162},
    {"code": "SL", "name": "Saarland", "startId": 411, "startPage": 167},
    {"code": "SN", "name": "Sachsen", "startId": 421, "startPage": 172},
    {"code": "ST", "name": "Sachsen-Anhalt", "startId": 431, "startPage": 177},
    {"code": "SH", "name": "Schleswig-Holstein", "startId": 441, "startPage": 182},
    {"code": "TH", "name": "Thüringen", "startId": 451, "startPage": 187}
]

os.makedirs('assets', exist_ok=True)
os.makedirs('tools/tmp_crop', exist_ok=True)

def get_page_words(page_num):
    cmd = ['pdftotext', '-bbox', '-f', str(page_num), '-l', str(page_num), PDF_PATH, '-']
    xml = subprocess.check_output(cmd).decode('utf-8')
    root = ET.fromstring(xml)
    ns = {'x': 'http://www.w3.org/1999/xhtml'}
    pg = root.find('.//x:page', ns)
    W, H = float(pg.get('width')), float(pg.get('height'))
    ws = [{'t': w.text or '', 'x0': float(w.get('xMin')), 'y0': float(w.get('yMin')),
           'x1': float(w.get('xMax')), 'y1': float(w.get('yMax'))}
          for w in pg.findall('.//x:word', ns)]
    return W, H, ws

def render_page(page_num):
    prefix = f'tools/tmp_crop/page-{page_num}'
    subprocess.run(['pdftoppm', '-png', '-r', str(DPI), '-f', str(page_num), '-l', str(page_num),
                    PDF_PATH, prefix], check=True)
    matches = glob.glob(f'{prefix}*.png')
    if not matches:
        raise RuntimeError(f"Could not find rendered image for page {page_num}")
    return matches[0]

for st in STATES:
    st_name = st['name']
    wappen_id = st['startId']        # e.g. 301, 311, 351...
    map_id = st['startId'] + 7       # e.g. 308, 318, 358...
    
    # 1. Crop Wappen (Question 1) from page st['startPage']
    wappen_page = st['startPage']
    W, H, ws = get_page_words(wappen_page)
    png_path = render_page(wappen_page)
    
    # Find question 1 end
    q1_words = [w for w in ws if w['y0'] > 180 and w['y1'] < 300]
    q1_bottom = max((w['y1'] for w in q1_words if '?' in w['t'] or w['t'].endswith('?')), default=250.0)
    
    # Options start (around y=440-460)
    opt_words = [w for w in ws if w['y0'] > 430 and ('Bild' in w['t'] or '' in w['t'] or '□' in w['t'])]
    wappen_bottom = min((w['y0'] for w in opt_words if w['y0'] > 420), default=445.0)
    
    box_wappen = (px(28), px(q1_bottom + 4), px(W - 56), px(wappen_bottom - q1_bottom - 4))
    out_wappen = f'assets/q{wappen_id:03d}.jpg'
    
    subprocess.run([
        'magick', png_path,
        '-crop', f'{box_wappen[2]}x{box_wappen[3]}+{box_wappen[0]}+{box_wappen[1]}',
        '+repage', '-trim', '+repage',
        '-bordercolor', 'white', '-border', '8',
        '-resize', '880x>', '-quality', '88',
        out_wappen
    ], check=True)
    print(f"Cropped {st_name} Wappen -> {out_wappen}")
    
    # 2. Crop Map (Question 8) from page st['startPage'] + 3
    map_page = st['startPage'] + 3
    W_m, H_m, ws_m = get_page_words(map_page)
    png_map_path = render_page(map_page)
    
    q8_words = [w for w in ws_m if w['y0'] > 120 and w['y1'] < 250]
    q8_bottom = max((w['y1'] for w in q8_words if '?' in w['t'] or w['t'].endswith('?')), default=185.0)
    
    map_bottom = H_m - 60.0
    
    box_map = (px(28), px(q8_bottom + 4), px(W_m - 56), px(map_bottom - q8_bottom - 4))
    out_map = f'assets/q{map_id:03d}.jpg'
    
    subprocess.run([
        'magick', png_map_path,
        '-crop', f'{box_map[2]}x{box_map[3]}+{box_map[0]}+{box_map[1]}',
        '+repage', '-trim', '+repage',
        '-bordercolor', 'white', '-border', '8',
        '-resize', '880x>', '-quality', '88',
        out_map
    ], check=True)
    print(f"Cropped {st_name} Map -> {out_map}")

# Cleanup temp rendered pngs
for f in glob.glob('tools/tmp_crop/*.png'):
    os.remove(f)

print("Successfully cropped all 32 state question illustrations into assets/!")
