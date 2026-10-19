import json,sys,csv,re
N=sys.argv[1]; d=json.load(open(f'chunk{N}.json'))
res={}
for ln in open(f'res{N}.txt',encoding='utf8'):
    ln=ln.rstrip('\n')
    if not ln.strip() or ln.startswith('#'): continue
    p=[x.strip() for x in ln.split('|')]
    p+=['']*(7-len(p)); res[int(p[0])]=p
SP={'1.01':'Cardiología','1.02':'Diabetes','1.03':'Endocrinología','1.04':'Infectología','1.05':'Respiratorio'}
rows=[]
for i,q in enumerate(d):
    codes=[c.split(' [')[0] for c in q['codes']]
    topic=re.search(r'\[(.*?)\]',q['codes'][0]); topic=topic.group(1) if topic else ''
    r=res.get(i)
    if r: _,est,kp,conf,mot,ex,fu=r
    else: est,kp,conf,mot,ex,fu='OK',q['correcta'],'media','Coherente con el tema','',topic
    if not kp: kp=q['correcta']
    if not fu: fu=topic
    cl=lambda s:s.replace(';',',').replace('\n',' ')
    rows.append([q['recTag'],q.get('year'),' '.join(codes),SP[codes[0][:4]],est,q['correcta'],kp,conf,cl(mot),cl(ex),cl(fu)])
csv.writer(open(f'out{N}.csv','w',encoding='utf8',newline=''),delimiter=';').writerows(rows)
from collections import Counter;print(len(rows),Counter(r[4] for r in rows))
