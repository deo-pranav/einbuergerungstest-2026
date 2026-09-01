#!/usr/bin/env python3
"""
Generates Pashto (ps) and Dari (prs) language packs for Afghan candidates.
"""

import json
import os
import urllib.request
import urllib.parse
import time
from concurrent.futures import ThreadPoolExecutor

DB = json.load(open('data/questions_core.json', encoding='utf-8'))
QUESTIONS = DB['questions']
OUT_DIR = 'data/packs'

CLIENTS = ['dict-chrome-ex', 'webapp', 'gtx']

def translate_text(text, target_lang):
    if not text or not text.strip() or text.strip().isdigit():
        return text
    
    encoded = urllib.parse.quote(text)
    for client in CLIENTS:
        url = f"https://translate.googleapis.com/translate_a/single?client={client}&sl=de&tl={target_lang}&dt=t&q={encoded}"
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
        for attempt in range(2):
            try:
                with urllib.request.urlopen(req, timeout=6) as res:
                    data = json.loads(res.read().decode('utf-8'))
                    return ''.join(s[0] for s in data[0])
            except Exception:
                time.sleep(0.2)
    return text

def build_pack(code, trans_code, name, native_name, flag):
    print(f"Translating {name} ({native_name}) [{code}]...")
    
    def translate_q(q):
        qid = str(q['id'])
        q_trans = translate_text(q['q'], trans_code)
        opts_trans = [translate_text(o, trans_code) for o in q['options']]
        return qid, {'q': q_trans, 'options': opts_trans}

    with ThreadPoolExecutor(max_workers=15) as executor:
        results = dict(executor.map(translate_q, QUESTIONS))

    json_path = os.path.join(OUT_DIR, f"{code}.json")
    js_path = os.path.join(OUT_DIR, f"{code}.js")

    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False)

    with open(js_path, 'w', encoding='utf-8') as f:
        f.write(f"window.REGISTER_LANGUAGE_PACK && window.REGISTER_LANGUAGE_PACK('{code}', " + json.dumps(results, ensure_ascii=False) + ");\n")

    size_kb = os.path.getsize(json_path) / 1024
    print(f"✓ [{code}] {name}: {size_kb:.1f} KB ready!")
    return {
        'code': code,
        'name': name,
        'native': native_name,
        'flag': flag,
        'file': f"data/packs/{code}.json",
        'jsFile': f"data/packs/{code}.js",
        'size': f"{size_kb:.0f} KB",
        'count': len(results)
    }

def main():
    # 1. Pashto (ps)
    ps_info = build_pack('ps', 'ps', 'Paschtu', 'پښتو', '🇦🇫')
    
    # 2. Dari (prs)
    prs_info = build_pack('prs', 'fa', 'Dari', 'دری', '🇦🇫')

    # Load existing registry
    reg_path = os.path.join(OUT_DIR, 'registry.json')
    registry = json.load(open(reg_path, encoding='utf-8'))
    
    # Remove existing entries if present
    registry = [p for p in registry if p['code'] not in ('ps', 'prs')]
    registry.append(ps_info)
    registry.append(prs_info)

    # Save registry
    with open(reg_path, 'w', encoding='utf-8') as f:
        json.dump(registry, f, ensure_ascii=False, indent=2)

    with open(os.path.join(OUT_DIR, 'registry.js'), 'w', encoding='utf-8') as f:
        f.write('window.LANGUAGE_PACKS_REGISTRY = ' + json.dumps(registry, ensure_ascii=False, indent=2) + ';\n')

    print(f"\nSuccessfully added Pashto (ps) and Dari (prs)! Total registry entries: {len(registry)}")

if __name__ == '__main__':
    main()
