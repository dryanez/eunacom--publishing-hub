"""Genera classes/docs/ESTADO_ANIMACIONES.md cruzando PLAN_ANIMACIONES.md con los videos existentes.
    python3 classes/scripts/estado_animaciones.py
"""
import os, re
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.join(HERE, '..')
ANIM = os.path.join(ROOT, 'media', 'animaciones')
plan = open(os.path.join(ROOT, 'docs', 'PLAN_ANIMACIONES.md')).read()
hand = open(os.path.join(ROOT, 'docs', 'HANDOFF_ANIMACIONES.md')).read()
sec4 = hand.split('## 4.')[1].split('## 5.')[0]
REDO = set(re.findall(r'\b([a-z]+-\d\d)\b', sec4))
rows = re.findall(r'^\| ([a-z]+-\d\d) \| (.+?) \| (.*?) \| (★*) \|$', plan, re.M)
vids = {c: sorted(f for f in os.listdir(os.path.join(ANIM, c)) if f.endswith('.mp4')) for c in os.listdir(ANIM) if os.path.isdir(os.path.join(ANIM, c))}
out = {'real': [], 'redo': [], 'ok': [], 'todo': []}
rows = [r for r in rows if not r[1].startswith('—')]
seen = {r[0] for r in rows}
rows += [(c, '(animación existente, no estaba en el plan)', '', '') for c in sorted(vids) if c not in seen and vids[c]]
for c, desc, tool, prio in rows:
    v = vids.get(c, [])
    real = [f for f in v if f.endswith(('_3d.mp4', '_real.mp4'))]
    if real:
        k = 'real'
    elif v and c in REDO:
        k = 'redo'
    elif v:
        k = 'ok'
    else:
        k = 'todo'
    out[k].append((c, desc, tool, prio, ', '.join(v)))
TIT = {'real': '✅ Hechas con anatomía real (3D o Blausen)', 'redo': '🔁 Hechas pero con anatomía abstracta: rehacer',
       'ok': '🟢 Hechas en Manim y válidas (gráficos, líneas de tiempo, esquemas sin anatomía)', 'todo': '⬜ Pendientes (aún sin video)'}
L = ['# Estado de las animaciones', '', 'Generado por `classes/scripts/estado_animaciones.py` a partir de PLAN_ANIMACIONES.md y de los videos.', '']
L += [f'- {TIT[k]}: **{len(out[k])}**' for k in out] + ['']
for k in ('redo', 'todo', 'real', 'ok'):
    items = sorted(out[k], key=lambda r: (-len(r[3]), r[0]))
    L += [f'## {TIT[k]} ({len(items)})', '', '| Clase | Animación | Herr. | Prio | Videos |', '|---|---|---|---|---|']
    L += [f'| {c} | {d} | {t} | {p} | {v} |' for c, d, t, p, v in items] + ['']
open(os.path.join(ROOT, 'docs', 'ESTADO_ANIMACIONES.md'), 'w').write('\n'.join(L))
print({k: len(v) for k, v in out.items()})
