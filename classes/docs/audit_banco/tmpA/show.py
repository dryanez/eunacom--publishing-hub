import json,sys
d=json.load(open(f'chunk{sys.argv[1]}.json'))
for i in range(int(sys.argv[2]),min(int(sys.argv[3]),len(d))):
    q=d[i]
    print(f"#{i} {q['recTag'].replace('EUNACOM ','')} | {q['codes'][0][:70]}{' +%d'%(len(q['codes'])-1) if len(q['codes'])>1 else ''} | {q['alertas'] or ''} c={q['conf']}")
    print(" Q:",q['stem'][:700]); print(" O:",q['options'][:500]); print(" K:",q['correcta'],"| E:",(q['explicacion'] or '')[:330])
