#!/usr/bin/env python3
"""
High-throughput generator for official & community-supported Language Packs for Einbuergerungstest 2026.
"""

import json
import os
import urllib.request
import urllib.parse
import time
from concurrent.futures import ThreadPoolExecutor, as_completed

DB = json.load(open('data/questions_core.json', encoding='utf-8'))
QUESTIONS = DB['questions']
OUT_DIR = 'data/packs'
os.makedirs(OUT_DIR, exist_ok=True)

# Provider Catalog
LANG_CATALOG = [
    {"code": "en", "name": "Englisch", "native": "English", "flag": "🇬🇧"},
    {"code": "hi", "name": "Hindi", "native": "हिन्दी", "flag": "🇮🇳"},
    {"code": "tr", "name": "Türkisch", "native": "Türkçe", "flag": "🇹🇷"},
    {"code": "ar", "name": "Arabisch", "native": "العربية", "flag": "🇸🇾"},
    {"code": "uk", "name": "Ukrainisch", "native": "Українська", "flag": "🇺🇦"},
    {"code": "ru", "name": "Russisch", "native": "Русский", "flag": "🇷🇺"},
    {"code": "fa", "name": "Persisch / Farsi", "native": "فارسی", "flag": "🇮🇷"},
    {"code": "es", "name": "Spanisch", "native": "Español", "flag": "🇪🇸"},
    {"code": "fr", "name": "Französisch", "native": "Français", "flag": "🇫🇷"},
    {"code": "pl", "name": "Polnisch", "native": "Polski", "flag": "🇵🇱"},
    {"code": "it", "name": "Italienisch", "native": "Italiano", "flag": "🇮🇹"},
    {"code": "vi", "name": "Vietnamesisch", "native": "Tiếng Việt", "flag": "🇻🇳"},
]

def translate_text(text, target_lang, retries=3):
    if not text or not text.strip():
        return ""
    if text.strip().isdigit():
        return text.strip()
    
    url = f"https://translate.googleapis.com/translate_a/single?client=gtx&sl=de&tl={target_lang}&dt=t&q={urllib.parse.quote(text)}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    
    for attempt in range(retries):
        try:
            with urllib.request.urlopen(req, timeout=10) as res:
                data = json.loads(res.read().decode('utf-8'))
                return ''.join(sentence[0] for sentence in data[0])
        except Exception as e:
            if attempt == retries - 1:
                return text
            time.sleep(0.3)

def translate_single_q(args):
    q, code = args
    qid = str(q['id'])
    q_trans = translate_text(q['q'], code)
    opts_trans = [translate_text(opt, code) for opt in q['options']]
    return qid, {'q': q_trans, 'options': opts_trans}

def build_pack_for_lang(lang_info):
    code = lang_info['code']
    json_path = os.path.join(OUT_DIR, f"{code}.json")
    js_path = os.path.join(OUT_DIR, f"{code}.js")

    existing_pack = {}
    if os.path.exists(json_path):
        try:
            with open(json_path, 'r', encoding='utf-8') as f:
                existing_pack = json.load(f)
        except Exception:
            existing_pack = {}

    pack_data = {}
    items_to_translate = []

    for q in QUESTIONS:
        qid = str(q['id'])
        if qid in existing_pack and existing_pack[qid].get('q') and len(existing_pack[qid].get('options', [])) == 4:
            pack_data[qid] = existing_pack[qid]
        else:
            items_to_translate.append((q, code))

    if items_to_translate:
        print(f"Translating {len(items_to_translate)} items for [{code}] {lang_info['name']}...")
        with ThreadPoolExecutor(max_workers=20) as executor:
            results = executor.map(translate_single_q, items_to_translate)
            for qid, data in results:
                pack_data[qid] = data

    sorted_pack = {str(q['id']): pack_data[str(q['id'])] for q in QUESTIONS if str(q['id']) in pack_data}

    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(sorted_pack, f, ensure_ascii=False)

    with open(js_path, 'w', encoding='utf-8') as f:
        f.write(f"window.REGISTER_LANGUAGE_PACK && window.REGISTER_LANGUAGE_PACK('{code}', " + json.dumps(sorted_pack, ensure_ascii=False) + ");\n")

    size_kb = os.path.getsize(json_path) / 1024
    print(f"✓ [{code}] {lang_info['name']}: {size_kb:.1f} KB")

    return {
        'code': code,
        'name': lang_info['name'],
        'native': lang_info['native'],
        'flag': lang_info['flag'],
        'file': f"data/packs/{code}.json",
        'jsFile': f"data/packs/{code}.js",
        'size': f"{size_kb:.0f} KB",
        'count': len(sorted_pack)
    }

def main():
    print(f"Starting parallel generation for {len(LANG_CATALOG)} language packs...")
    registry = []
    
    # Run languages in parallel
    with ThreadPoolExecutor(max_workers=6) as executor:
        future_to_lang = {executor.submit(build_pack_for_lang, lang): lang for lang in LANG_CATALOG}
        for future in as_completed(future_to_lang):
            res = future.result()
            registry.append(res)

    # Sort registry to match LANG_CATALOG order
    order_map = {l['code']: i for i, l in enumerate(LANG_CATALOG)}
    registry.sort(key=lambda x: order_map.get(x['code'], 999))

    with open(os.path.join(OUT_DIR, 'registry.json'), 'w', encoding='utf-8') as f:
        json.dump(registry, f, ensure_ascii=False, indent=2)

    with open(os.path.join(OUT_DIR, 'registry.js'), 'w', encoding='utf-8') as f:
        f.write('window.LANGUAGE_PACKS_REGISTRY = ' + json.dumps(registry, ensure_ascii=False, indent=2) + ';\n')

    print(f"\nAll {len(registry)} Language Packs generated and registered successfully in data/packs/!")

if __name__ == '__main__':
    main()
