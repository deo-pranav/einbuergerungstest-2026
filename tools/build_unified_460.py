#!/usr/bin/env python3
"""
Compiles all 460 questions across all 16 federal states + nationwide.
Produces unified JSON and JS data structures with German, English, and Hindi.
"""

import json
import re
import unicodedata

# 1. State definitions and catalogue offset
STATES = [
    {"code": "BW", "name": "Baden-Württemberg", "startId": 301, "endId": 310},
    {"code": "BY", "name": "Bayern", "startId": 311, "endId": 320},
    {"code": "BE", "name": "Berlin", "startId": 321, "endId": 330},
    {"code": "BB", "name": "Brandenburg", "startId": 331, "endId": 340},
    {"code": "HB", "name": "Bremen", "startId": 341, "endId": 350},
    {"code": "HH", "name": "Hamburg", "startId": 351, "endId": 360},
    {"code": "HE", "name": "Hessen", "startId": 361, "endId": 370},
    {"code": "MV", "name": "Mecklenburg-Vorpommern", "startId": 371, "endId": 380},
    {"code": "NI", "name": "Niedersachsen", "startId": 381, "endId": 390},
    {"code": "NW", "name": "Nordrhein-Westfalen", "startId": 391, "endId": 400},
    {"code": "RP", "name": "Rheinland-Pfalz", "startId": 401, "endId": 410},
    {"code": "SL", "name": "Saarland", "startId": 411, "endId": 420},
    {"code": "SN", "name": "Sachsen", "startId": 421, "endId": 430},
    {"code": "ST", "name": "Sachsen-Anhalt", "startId": 431, "endId": 440},
    {"code": "SH", "name": "Schleswig-Holstein", "startId": 441, "endId": 450},
    {"code": "TH", "name": "Thüringen", "startId": 451, "endId": 460}
]

STATE_NAME_TO_CODE = {s["name"]: s["code"] for s in STATES}

# Load key_raw and ds_lid
with open('tools/key_raw.json', encoding='utf-8') as f:
    key_raw = json.load(f)

with open('tools/ds_lid.json', encoding='utf-8') as f:
    lid_raw = json.load(f)

# Load existing verified allgemein.js data for vetted EN translations
with open('data/allgemein.js', encoding='utf-8') as f:
    allg_js = f.read()

# Extract 300 nationwide questions
raw_json = allg_js[allg_js.find('['):allg_js.rfind(']')+1]
# Simple parsing using node or regex
import subprocess
node_cmd = "node -e 'global.window={}; require(\"./data/allgemein.js\"); console.log(JSON.stringify(window.ALLGEMEIN_QUESTIONS));'"
allg_vetted = json.loads(subprocess.check_output(node_cmd, shell=True, cwd=".").decode('utf-8'))
allg_by_id = {q["id"]: q for q in allg_vetted}

def norm(s):
    s = unicodedata.normalize('NFKC', s or '')
    for a,b in [('…','...'),('„','"'),('“','"'),('”','"'),('’',"'"),('–','-'),('—','-'),('\xad','')]:
        s = s.replace(a,b)
    s = s.lower().strip()
    s = re.sub(r'innen\b', '', s)
    s = re.sub(r'in\b', '', s)
    s = re.sub(r'er\b', '', s)
    s = re.sub(r'/\w+', '', s)
    s = re.sub(r'[^\w\s]', ' ', s)
    return re.sub(r'\s+', ' ', s).strip()

# Build index of LID dataset
lid_index = []
for item in lid_raw:
    nq = norm(item.get('question', ''))
    opts = [item.get(k, '') for k in ['a', 'b', 'c', 'd']]
    nopts = [norm(o) for o in opts]
    en = item.get('translation', {}).get('en', {})
    hi = item.get('translation', {}).get('hi', {})
    lid_index.append({
        'raw': item,
        'nq': nq,
        'opts': opts,
        'nopts': nopts,
        'en': en,
        'hi': hi
    })

def find_lid_match(q_text, q_options):
    nq = norm(q_text)
    nopts = [norm(o) for o in q_options]
    nset = set(nopts)
    
    # 1. Exact or near question match
    for item in lid_index:
        if item['nq'] == nq:
            return item
    
    # 2. Options exact match
    for item in lid_index:
        if set(item['nopts']) == nset:
            return item
            
    # 3. Fuzzy match: high option overlap
    best_overlap = 0
    best_item = None
    for item in lid_index:
        overlap = len(set(item['nopts']) & nset)
        if overlap > best_overlap:
            best_overlap = overlap
            best_item = item
    if best_overlap >= 3:
        return best_item
        
    return None

def clean_str(s):
    if not s: return ""
    s = s.replace('\r', '').replace('\n', ' ').strip()
    return re.sub(r'\s+', ' ', s)

# Common terms Hindi lookup
HI_DICT = {
    # Standard numbers
    "3": "3", "4": "4", "5": "5", "6": "6",
    "14": "14", "16": "16", "18": "18", "20": "20",
    "3 Jahre": "3 साल", "4 Jahre": "4 साल", "5 Jahre": "5 साल", "6 Jahre": "6 साल",
    
    # Flag colors
    "blau-weiß-rot": "नीला-सफेद-लाल",
    "weiß-blau": "सफेद-नीला",
    "grün-weiß-rot": "हरा-सफेद-लाल",
    "schwarz-gelb": "काला-पीला",
    "schwarz-gold": "काला-सुनहरा",
    "schwarz-rot": "काला-लाल",
    "rot-weiß": "लाल-सफेद",
    "weiß-rot": "सफेद-लाल",
    "blau-gelb": "नीला-पीला",
    "rot-gelb": "लाल-पीला",
    "rot-weiß-blau": "लाल-सफेद-नीला",

    # Ministers / Leaders
    "Justizministerin/Justizminister": "न्याय मंत्री (महिला/पुरुष)",
    "Justizminister / Justizministerin": "न्याय मंत्री",
    "Außenministerin/Außenminister": "विदेश मंत्री (महिला/पुरुष)",
    "Außenminister / Außenministerin": "विदेश मंत्री",
    "Finanzministerin/Finanzminister": "वित्त मंत्री (महिला/पुरुष)",
    "Finanzminister / Finanzministerin": "वित्त मंत्री",
    "Innenministerin/Innenminister": "गृह मंत्री (महिला/पुरुष)",
    "Innenminister / Innenministerin": "गृह मंत्री",
    "Erste Ministerin/Erster Minister": "प्रथम मंत्री (First Minister)",
    "Premierministerin/Premierminister": "प्रधान मंत्री (Prime Minister)",
    "Bürgermeisterin/Bürgermeister": "मेयर (Bürgermeister)",
    "Ministerpräsidentin/Ministerpräsident": "मुख्यमंत्री (Ministerpräsident)",
    "Regierende Bürgermeisterin/Regierender Bürgermeister": "शासी मेयर (Governing Mayor - बर्लिन)",
    "Präsidentin/Präsident des Senates": "सीनेट अध्यक्ष (President of the Senate - ब्रेमेन)",
    "Finanzsenatorin/Finanzsenator": "वित्त सीनेटर (बर्लिन/हैम्बर्ग/ब्रेमेन)",
    "Innensenatorin/Innensenator": "गृह सीनेटर",
    "Senatorin/Senator für Außenbeziehungen": "विदेश संबंध सीनेटर",
    "Justizsenatorin/Justizsenator": "न्याय सीनेटर",

    # Institutions
    "beim Ordnungsamt der Gemeinde": "नगर पालिका के लोक व्यवस्था कार्यालय (Ordnungsamt) में",
    "bei der Landeszentrale für politische Bildung": "राज्य नागरिक शिक्षा केंद्र (Landeszentrale für politische Bildung) में",
    "bei der Verbraucherzentrale": "उपभोक्ता सलाह केंद्र (Verbraucherzentrale) में",
    "bei den Kirchen": "चर्चों में",

    # Image option labels
    "Bild 1": "चित्र 1", "Bild 2": "चित्र 2", "Bild 3": "चित्र 3", "Bild 4": "चित्र 4",
    "1": "1", "2": "2", "3": "3", "4": "4"
}

EN_DICT = {
    # Standard numbers
    "3": "3 years", "4": "4 years", "5": "5 years", "6": "6 years",
    "14": "14 years old", "16": "16 years old", "18": "18 years old", "20": "20 years old",
    "3 Jahre": "3 years", "4 Jahre": "4 years", "5 Jahre": "5 years", "6 Jahre": "6 years",

    # Flag colors
    "blau-weiß-rot": "blue-white-red",
    "weiß-blau": "white-blue",
    "grün-weiß-rot": "green-white-red",
    "schwarz-gelb": "black-yellow",
    "schwarz-gold": "black-gold",
    "schwarz-rot": "black-red",
    "rot-weiß": "red-white",
    "weiß-rot": "white-red",
    "blau-gelb": "blue-yellow",
    "rot-gelb": "red-yellow",
    "rot-weiß-blau": "red-white-blue",

    # Ministers / Leaders
    "Justizministerin/Justizminister": "Minister of Justice (f/m)",
    "Justizminister / Justizministerin": "Minister of Justice (m/f)",
    "Außenministerin/Außenminister": "Minister of Foreign Affairs (f/m)",
    "Außenminister / Außenministerin": "Minister of Foreign Affairs (m/f)",
    "Finanzministerin/Finanzminister": "Minister of Finance (f/m)",
    "Finanzminister / Finanzministerin": "Minister of Finance (m/f)",
    "Innenministerin/Innenminister": "Minister of the Interior (f/m)",
    "Innenminister / Innenministerin": "Minister of the Interior (m/f)",
    "Erste Ministerin/Erster Minister": "First Minister (f/m)",
    "Premierministerin/Premierminister": "Prime Minister (f/m)",
    "Bürgermeisterin/Bürgermeister": "Mayor (f/m)",
    "Ministerpräsidentin/Ministerpräsident": "Minister-President (f/m)",
    "Regierende Bürgermeisterin/Regierender Bürgermeister": "Governing Mayor (f/m - Berlin)",
    "Präsidentin/Präsident des Senates": "President of the Senate (f/m - Bremen)",
    "Finanzsenatorin/Finanzsenator": "Senator of Finance (f/m)",
    "Innensenatorin/Innensenator": "Senator of the Interior (f/m)",
    "Senatorin/Senator für Außenbeziehungen": "Senator for Foreign Relations (f/m)",
    "Justizsenatorin/Justizsenator": "Senator of Justice (f/m)",

    # Institutions
    "beim Ordnungsamt der Gemeinde": "at the municipal public order office (Ordnungsamt)",
    "bei der Landeszentrale für politische Bildung": "at the State Centre for Civic Education (Landeszentrale für politische Bildung)",
    "bei der Verbraucherzentrale": "at the Consumer Advice Centre (Verbraucherzentrale)",
    "bei den Kirchen": "at the churches",

    # Image option labels
    "Bild 1": "Image 1", "Bild 2": "Image 2", "Bild 3": "Image 3", "Bild 4": "Image 4",
    "1": "1", "2": "2", "3": "3", "4": "4"
}

# Image questions in general 300
GEN_IMG_IDS = {21, 55, 70, 130, 181, 209, 216, 226, 235}

unified_questions = []

# Process ALLGEMEIN (1-300)
for q_raw in key_raw['ALLGEMEIN']:
    qid = q_raw['num']
    vetted = allg_by_id.get(qid, {})
    
    # Match in LID for Hindi
    lid_match = find_lid_match(q_raw['q'], q_raw['options'])
    
    q_de = q_raw['q']
    q_en = vetted.get('qEn') or (lid_match['en'].get('question') if lid_match else '')
    q_hi = (lid_match['hi'].get('question') if lid_match else '') or ''
    
    opts = []
    for idx, opt_text in enumerate(q_raw['options']):
        v_opt = vetted.get('options', [{}])[idx] if vetted.get('options') and idx < len(vetted['options']) else {}
        opt_de = opt_text
        opt_en = v_opt.get('textEn') or ''
        
        # Match Hindi option
        opt_hi = ''
        if opt_de in HI_DICT:
            opt_hi = HI_DICT[opt_de]
        elif lid_match:
            no = norm(opt_de)
            for k in ['a', 'b', 'c', 'd']:
                if norm(lid_match['opts'][ord(k)-ord('a')]) == no:
                    opt_hi = lid_match['hi'].get(k, '')
                    if not opt_en:
                        opt_en = lid_match['en'].get(k, '')
                    break
        if not opt_hi and opt_de in HI_DICT:
            opt_hi = HI_DICT[opt_de]
        if not opt_en and opt_de in EN_DICT:
            opt_en = EN_DICT[opt_de]
            
        opts.append({
            "de": clean_str(opt_de),
            "en": clean_str(opt_en or opt_de),
            "hi": clean_str(opt_hi or opt_en or opt_de)
        })
        
    is_img = qid in GEN_IMG_IDS
    q_obj = {
        "id": qid,
        "state": None,
        "cat": q_raw.get('cat') or "Allgemein",
        "type": "image" if is_img else "text",
        "q": {
            "de": clean_str(q_de),
            "en": clean_str(q_en or q_de),
            "hi": clean_str(q_hi or q_en or q_de)
        },
        "options": opts,
        "correct": q_raw.get('correct', 0)
    }
    if is_img:
        q_obj["image"] = f"assets/q{qid:03d}.jpg"
    if q_raw.get('credit'):
        q_obj["credit"] = q_raw['credit']
        
    unified_questions.append(q_obj)

# Process 16 States (301-460)
for state in STATES:
    st_name = state["name"]
    st_code = state["code"]
    st_start = state["startId"]
    st_end = state["endId"]
    
    st_qs = key_raw.get(st_name, [])
    for idx, q_raw in enumerate(st_qs):
        global_id = st_start + idx
        lid_match = find_lid_match(q_raw['q'], q_raw['options'])
        
        q_de = q_raw['q']
        q_en = (lid_match['en'].get('question') if lid_match else '') or ''
        q_hi = (lid_match['hi'].get('question') if lid_match else '') or ''
        
        opts = []
        for o_idx, opt_text in enumerate(q_raw['options']):
            opt_de = opt_text
            opt_en = ''
            opt_hi = ''
            
            if opt_de in EN_DICT:
                opt_en = EN_DICT[opt_de]
            if opt_de in HI_DICT:
                opt_hi = HI_DICT[opt_de]
                
            if lid_match and (not opt_en or not opt_hi):
                no = norm(opt_de)
                for k in ['a', 'b', 'c', 'd']:
                    if norm(lid_match['opts'][ord(k)-ord('a')]) == no:
                        if not opt_en: opt_en = lid_match['en'].get(k, '')
                        if not opt_hi: opt_hi = lid_match['hi'].get(k, '')
                        break
            
            opts.append({
                "de": clean_str(opt_de),
                "en": clean_str(opt_en or opt_de),
                "hi": clean_str(opt_hi or opt_en or opt_de)
            })
            
        is_coat_or_map = (idx == 0 or idx == 7)
        q_obj = {
            "id": global_id,
            "state": st_code,
            "cat": "Landesfrage",
            "type": "image" if is_coat_or_map else "text",
            "q": {
                "de": clean_str(q_de),
                "en": clean_str(q_en or q_de),
                "hi": clean_str(q_hi or q_en or q_de)
            },
            "options": opts,
            "correct": q_raw.get('correct', 0)
        }
        if is_coat_or_map:
            q_obj["image"] = f"assets/q{global_id:03d}.jpg"
        if q_raw.get('credit'):
            q_obj["credit"] = q_raw['credit']
            
        unified_questions.append(q_obj)

print(f"Total compiled questions: {len(unified_questions)}")

# Validation check
missing_de = 0
missing_en = 0
missing_hi = 0

for q in unified_questions:
    if not q["q"]["de"]: missing_de += 1
    if not q["q"]["en"]: missing_en += 1
    if not q["q"]["hi"]: missing_hi += 1
    for o in q["options"]:
        if not o["de"]: missing_de += 1
        if not o["en"]: missing_en += 1
        if not o["hi"]: missing_hi += 1

print(f"Validation results - Missing: DE={missing_de}, EN={missing_en}, HI={missing_hi}")

# Save questions_all.json
dataset = {
    "version": "2026.1",
    "generatedAt": "2026-08-31",
    "total": len(unified_questions),
    "states": STATES,
    "questions": unified_questions
}

with open('data/questions_all.json', 'w', encoding='utf-8') as f:
    json.dump(dataset, f, ensure_ascii=False, indent=2)

# Save questions_all.js for direct offline <script> loading
with open('data/questions_all.js', 'w', encoding='utf-8') as f:
    f.write("/* Unified Einbürgerungstest Dataset (460 Questions: 300 Nationwide + 16 States) */\n")
    f.write("window.QUESTIONS_DATABASE = ")
    json.dump(dataset, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print("Generated data/questions_all.json and data/questions_all.js successfully!")
