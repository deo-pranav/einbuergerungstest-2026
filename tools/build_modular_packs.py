#!/usr/bin/env python3
"""
Compiles German Core questions (data/questions_core.js) and isolated
modular Language Packs (data/packs/<lang>.json & data/packs/<lang>.js).
"""

import json
import os

db = json.load(open('data/questions_all.json', encoding='utf-8'))
os.makedirs('data/packs', exist_ok=True)

# 1. Build German Core
core_qs = []
en_pack = {}
hi_pack = {}

for q in db['questions']:
    qid = q['id']
    core_obj = {
        'id': qid,
        'state': q.get('state'),
        'cat': q.get('cat'),
        'type': q.get('type', 'text'),
        'q': q['q']['de'],
        'options': [o['de'] for o in q['options']],
        'correct': q['correct']
    }
    if q.get('image'): core_obj['image'] = q['image']
    if q.get('credit'): core_obj['credit'] = q['credit']
    core_qs.append(core_obj)

    en_pack[str(qid)] = {
        'q': q['q'].get('en', ''),
        'options': [o.get('en', '') for o in q['options']]
    }
    hi_pack[str(qid)] = {
        'q': q['q'].get('hi', ''),
        'options': [o.get('hi', '') for o in q['options']]
    }

core_db = {
    'states': db['states'],
    'questions': core_qs
}

with open('data/questions_core.json', 'w', encoding='utf-8') as f:
    json.dump(core_db, f, ensure_ascii=False, indent=2)

with open('data/questions_core.js', 'w', encoding='utf-8') as f:
    f.write('window.QUESTIONS_DATABASE = ' + json.dumps(core_db, ensure_ascii=False) + ';\n')

# 2. Write Packs (.json for HTTP fetch, .js for offline file:// script injection)
packs = [
    {
        'code': 'en',
        'name': 'Englisch',
        'native': 'English',
        'flag': '🇬🇧',
        'file': 'data/packs/en.json',
        'jsFile': 'data/packs/en.js',
        'size': f"{os.path.getsize('data/packs/en.json')/1024:.0f} KB" if os.path.exists('data/packs/en.json') else "90 KB",
        'data': en_pack
    },
    {
        'code': 'hi',
        'name': 'Hindi',
        'native': 'हिन्दी',
        'flag': '🇮🇳',
        'file': 'data/packs/hi.json',
        'jsFile': 'data/packs/hi.js',
        'size': f"{os.path.getsize('data/packs/hi.json')/1024:.0f} KB" if os.path.exists('data/packs/hi.json') else "177 KB",
        'data': hi_pack
    }
]

for p in packs:
    with open(p['file'], 'w', encoding='utf-8') as f:
        json.dump(p['data'], f, ensure_ascii=False)
    
    with open(p['jsFile'], 'w', encoding='utf-8') as f:
        f.write(f"window.REGISTER_LANGUAGE_PACK && window.REGISTER_LANGUAGE_PACK('{p['code']}', " + json.dumps(p['data'], ensure_ascii=False) + ");\n")
    
    p['size'] = f"{os.path.getsize(p['file'])/1024:.0f} KB"

# 3. Write Registry
registry = [
    {
        'code': p['code'],
        'name': p['name'],
        'native': p['native'],
        'flag': p['flag'],
        'file': p['file'],
        'jsFile': p['jsFile'],
        'size': p['size'],
        'count': len(core_qs)
    }
    for p in packs
]

with open('data/packs/registry.json', 'w', encoding='utf-8') as f:
    json.dump(registry, f, ensure_ascii=False, indent=2)

with open('data/packs/registry.js', 'w', encoding='utf-8') as f:
    f.write('window.LANGUAGE_PACKS_REGISTRY = ' + json.dumps(registry, ensure_ascii=False, indent=2) + ';\n')

print("Successfully generated modular core and language packs!")
