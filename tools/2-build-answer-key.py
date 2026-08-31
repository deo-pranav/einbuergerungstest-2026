import json, re, unicodedata
from difflib import SequenceMatcher

def norm(s):
    s = unicodedata.normalize('NFKC', s or '')
    for a,b in [('…','...'),('„','"'),('“','"'),('”','"'),('’',"'"),('–','-'),('—','-'),('\xad','')]:
        s = s.replace(a,b)
    s = re.sub(r'\s+',' ',s).strip().lower()
    s = re.sub(r'[.,;:!?"\'()\[\]/\-]',' ',s)
    return re.sub(r'\s+',' ',s).strip()

pdf  = json.load(open('pdf_parsed.json',encoding='utf-8'))
flex = json.load(open('ds_flex.json',encoding='utf-8'))
lid  = json.load(open('ds_lid.json',encoding='utf-8'))
md   = json.load(open('ds_md.json',encoding='utf-8'))

# normalise both datasets into a common shape
recs = {'flex':[], 'lid':[], 'md':[]}
for e in flex:
    recs['flex'].append({'q':e['question'],'opts':e['answers'],
                         'ans':e['answers'][e['correct']],'cat':e.get('category')})
for e in lid:
    sol=(e.get('solution') or '').strip().lower()
    if sol not in list('abcd'): continue
    recs['lid'].append({'q':e['question'],'opts':[e.get(k) for k in 'abcd'],
                        'ans':e[sol],'cat':None})
for grp in ('global','bw'):
    for e in md.get(grp,[]):
        opts=[a['text'] for a in e['answers']]
        cor=[a['text'] for a in e['answers'] if a.get('correct')]
        if len(cor)!=1: continue
        recs['md'].append({'q':e['question'],'opts':opts,'ans':cor[0],'cat':None})

for k in recs:
    for r in recs[k]:
        r['nq']=norm(r['q']); r['nset']=frozenset(norm(o) for o in r['opts'] if o)

IS_BILD = lambda opts: all(re.fullmatch(r'bild \d+', norm(o)) for o in opts)

def find(rs, nq, nset, bild):
    """best dataset record for this pdf question"""
    if bild:                                   # option sets identical across all Bild questions
        cand=[r for r in rs if r['nq']==nq]
        if cand: return cand[0],'q-exact'
        best=max(rs,key=lambda r:SequenceMatcher(None,r['nq'],nq).ratio())
        return (best,'q-fuzzy') if SequenceMatcher(None,best['nq'],nq).ratio()>0.80 else (None,'none')
    exact=[r for r in rs if r['nset']==nset]
    if len(exact)==1: return exact[0],'opts-exact'
    if len(exact)>1:
        best=max(exact,key=lambda r:SequenceMatcher(None,r['nq'],nq).ratio())
        return best,'opts-exact+q'
    scored=[]
    for r in rs:
        j=len(r['nset']&nset)/max(1,len(r['nset']|nset))
        scored.append((j,SequenceMatcher(None,r['nq'],nq).ratio(),r))
    scored.sort(key=lambda t:(t[0],t[1]),reverse=True)
    j,qr,r=scored[0]
    if j>=0.6 or (j>=0.4 and qr>=0.85): return r,f'fuzzy j={j:.2f} q={qr:.2f}'
    return None,'none'

result, review = {}, []
for seg,qs in pdf.items():
    outq=[]
    for q in qs:
        nq=norm(q['q']); nset=frozenset(norm(o) for o in q['options']); bild=IS_BILD(q['options'])
        pnorm=[norm(o) for o in q['options']]
        votes,how={},{}
        for src in ('flex','lid','md'):
            r,mode=find(recs[src],nq,nset,bild)
            how[src]=mode
            if not r: continue
            a=norm(r['ans'])
            if a in pnorm: votes.setdefault(pnorm.index(a),[]).append(src)
            else:
                cand=[i for i,p in enumerate(pnorm) if p and SequenceMatcher(None,p,a).ratio()>0.88]
                if len(cand)==1: votes.setdefault(cand[0],[]).append(src+'~')
                else: how[src]=mode+' /ans-unmatched'
        cat=None
        r,_=find(recs['flex'],nq,nset,bild)
        if r: cat=r['cat']
        idx=None; srcs=[]
        if votes:
            idx,srcs=max(votes.items(),key=lambda kv:len(kv[1]))
        rec=dict(q); rec.update(correct=idx,srcs=srcs,how=how,cat=cat,
                                conflict=len(votes)>1, bild=bild)
        outq.append(rec)
        if idx is None or len(srcs)<2 or len(votes)>1:
            review.append((seg,q['num'],q['q'][:64],srcs,how,len(votes)>1))
    result[seg]=outq

json.dump(result,open('key_raw.json','w',encoding='utf-8'),ensure_ascii=False,indent=1)
gen=result['ALLGEMEIN']
print(f"GENERAL 300: 3 sources agree   = {sum(1 for q in gen if len(q['srcs'])==3 and not q['conflict'])}")
print(f"             2 sources agree   = {sum(1 for q in gen if len(q['srcs'])==2 and not q['conflict'])}")
print(f"             single source      = {sum(1 for q in gen if len(q['srcs'])==1 and not q['conflict'])}")
print(f"             conflicting        = {sum(1 for q in gen if q['conflict'])}")
print(f"             unresolved         = {sum(1 for q in gen if q['correct'] is None)}")
by=result['Bayern']
print(f"BAYERN  10 : >=2 sources = {sum(1 for q in by if len(q['srcs'])>=2 and not q['conflict'])}, conflicts={sum(1 for q in by if q['conflict'])}, unresolved={sum(1 for q in by if q['correct'] is None)}")
print("\n--- still needing review (ALLGEMEIN + Bayern) ---")
for seg,num,qt,srcs,how,cf in review:
    if seg in ('ALLGEMEIN','Bayern') and (cf or len(srcs)<2):
        print(f"{'CONFLICT' if cf else 'THIN    '} {seg} #{num}: {qt}\n         srcs={srcs} how={how}")
