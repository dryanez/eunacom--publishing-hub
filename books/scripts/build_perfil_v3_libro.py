# Libro único «Perfil EUNACOM V3 · Código por código» (21 especialidades, 1.556 códigos) con el diseño de los manuales AEE.
# Índice general + índice de códigos con número de página y enlace a cada código (dos pasadas: se rinde, se leen las páginas, se vuelve a rendir).
# Uso (desde la raíz del repo): python3 -I books/scripts/build_perfil_v3_libro.py
import json, html, subprocess, os, re, collections
R = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
V = os.path.expanduser('~/fotos_tools/v3')
CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
OUT = R + '/books/dist/Perfil_V3_Codigo_por_Codigo_Completo_2026.pdf'
E = html.escape

SPECS = [  # specKey, clave cb_out, título, color
 ('1.01','card','Cardiología','#b91c1c'),('1.02','diab','Diabetes y Nutrición','#c2410c'),('1.03','endo','Endocrinología','#a16207'),
 ('1.04','infecto','Enfermedades Infecciosas','#4d7c0f'),('1.05','resp','Enfermedades Respiratorias','#0f766e'),('1.06','gastro','Gastroenterología','#0e7490'),
 ('1.07','geria','Geriatría','#475569'),('1.08','hemato','Hemato-oncología','#9f1239'),('1.09','nefro','Nefrología','#1d4ed8'),
 ('1.10','neuro','Neurología','#6d28d9'),('1.11','reuma','Reumatología','#86198f'),('2.01','ped','Pediatría','#0369a1'),
 ('3.01','obgin','Obstetricia y Ginecología','#be185d'),('4.01','cirugia','Cirugía General y Anestesia','#15803d'),('4.02','trauma','Traumatología','#57534e'),
 ('4.03','uro','Urología','#b45309'),('5.01','psiq','Psiquiatría','#7c3aed'),('6.01','derma','Dermatología','#c026d3'),
 ('6.02','oftal','Oftalmología','#0891b2'),('6.03','orl','Otorrinolaringología','#4338ca'),('7.01','sp','Salud Pública','#065f46')]
MODS = [('Módulo 1','Medicina Interna',['1.01','1.02','1.03','1.04','1.05','1.06','1.07','1.08','1.09','1.10','1.11']),
        ('Módulo 2','Cirugía y Especialidades',['4.01','4.02','4.03','5.01','6.01','6.02','6.03']),
        ('Módulo 3','Materno-Infantil',['2.01','3.01']),('Módulo 4','Salud Pública',['7.01'])]
_ORD = [k for m in MODS for k in m[2]]
SPECS = sorted(SPECS, key=lambda x: _ORD.index(x[0]))
MOD_OF = {k: m for m in MODS for k in m[2]}
SEC = [('situacion','Situaciones clínicas'),('urgencia','Situaciones clínicas de urgencia'),('conocimiento','Conocimientos generales'),
       ('examen','Exámenes e imagenología'),('procedimiento','Procedimientos diagnósticos y terapéuticos')]
LIBRO = {'cardiologia':'Cardiología','diabetes':'Diabetes','endocrinologia':'Endocrinología','gastroenterologia':'Gastroenterología','hematologia':'Hematología',
 'infectologia':'Infectología','nefrologia':'Nefrología','neurologia':'Neurología','neumologia':'Respiratorio','reumatologia':'Reumatología','cirugia':'Cirugía',
 'traumatologia':'Traumatología','urologia':'Urología','otorrino':'Otorrino','oftalmologia':'Oftalmología','dermatologia':'Dermatología','psiquiatria':'Psiquiatría',
 'pediatria':'Pediatría','obstetricia':'Obstetricia','ginecologia':'Ginecología','saludpublica':'Salud Pública'}

CM = json.load(open(R + '/books/data/v3_codemap.json'))
M = json.load(open(R + '/books/data/v3_topic_codes.json'))
I = json.load(open(V + '/question_index.json'))
BANK = json.load(open(R + '/books/data/real_questions_by_code.json'))
O = {}
for _, k, _, _ in SPECS:
    p = V + '/cb_out_%s.json' % k
    if os.path.exists(p): O.update(json.load(open(p)))

# títulos vivos de los temas (incluye los temas nuevos) leídos de los datasets de los libros
NODE = r'''
const fs=require('fs'),out={};
for(const b of %s){let f='./books/scripts/dataset_'+b+'.cjs'; if(b==='cardiologia') f='./books/scripts/master_cardiology_23_full_dataset.cjs';
 if(!fs.existsSync(f)) continue; const m=require(f); const a=Array.isArray(m)?m:m[Object.keys(m).find(k=>Array.isArray(m[k]))];
 for(const c of a) out[c.classId||(b+':'+c.topicLabel)]={book:b,topic:c.topicLabel,title:c.title};}
fs.writeFileSync('/tmp/perfil_v3_topics.json',JSON.stringify(out));''' % json.dumps(list(LIBRO))
subprocess.run(['node', '-e', NODE], cwd=R, capture_output=True)
T = json.load(open('/tmp/perfil_v3_topics.json'))

SITE = 'https://eunacom-examen.cl'   # sitio de la Academia (repo dryanez/eunacom-examen-site)
CARDIO = json.load(open(R + '/classes/curriculum/cardio_decks_data.json'))
def _toks(t): return set(w for w in re.findall(r'[a-záéíóúñ]{4,}', (t or '').lower()))
def cardio_id(title):
    best, sc = None, 0
    for cid, d in CARDIO.items():
        n = len(_toks(title) & _toks(d.get('title', '')))
        if n > sc: best, sc = cid, n
    return best if sc >= 2 else None
def class_url(k):
    for t, x in M.items():
        if k in x['codes']:
            cid = t if ':' not in t else cardio_id(T.get(t, {}).get('title', ''))
            if cid: return f'{SITE}/clase/{cid}?codigo={k}'
    return SITE

def lv(kind, s):
    s = str(s or '').strip()
    if not s: return ''
    c = 'sol' if re.search('espec', s, re.I) else 'ok' if re.search('compl', s, re.I) else 'out' if re.search('sosp|susp', s, re.I) else 'mid' if re.search('inic', s, re.I) else 'nil' if re.search('no req', s, re.I) else 'low'
    return f'<span class="lvk">{kind}</span><span class="lv lv-{c}">{E(s)}</span>'

def levels(v):
    if v['section'] in ('situacion', 'urgencia'): return lv('Dx', v['dx']) + lv('Tx', v['tx']) + lv('Seg', v['seg'])
    return lv('Nivel', v.get('nivel'))

def where(k):
    out = []
    for t, x in M.items():
        if k in x['codes']:
            m = T.get(t, {})
            out.append(f'<span class="wh-b">{E(LIBRO.get(m.get("book"), ""))}</span> {E(m.get("topic", ""))} · {E(m.get("title") or t)}')
    return '<br>'.join(out) or '<span class="gap">Sin tema</span>'

# frases de relleno que el generador antiguo pegaba en muchas explicaciones (no aportan o son de otra pregunta)
FILLER = ['intersticiales pulmonares difusas', 'reúne los criterios diagnósticos cardinales', 'concuerdan exactamente con esta entidad',
          'se sustenta en los criterios de práctica médica estándar', 'corresponden a conductas secundarias, exámenes no prioritarios',
          'constituye la conducta estándar de primera línea recomendada', 'se fundamenta en la evidencia clínica y normativas ministeriales',
          'esta es la intervención que reduce morbilidad y mortalidad', 'la más frecuente y de peor pronóstico, sin tratamiento específico']
def clean(t):
    parts = re.split(r'(?<=\.)\s+(?=[A-ZÁÉÍÓÚÑ¿(])', t.replace('..', '.'))
    return ' '.join(x for x in parts if not any(f in x for f in FILLER)).strip()

def qbox(s, src, real):
    ok = str(s['correct']).strip().upper()[:1]
    opts = ''.join(f'<li><b>{E(str(o["letter"]))}</b><span>{E(o["text"])}</span></li>' for o in s['options'])
    expl = clean(str(s.get('explanation', '')).replace('**', ''))
    if len(expl) > 520: expl = expl[:500].rsplit(' ', 1)[0] + '…'
    return (f'<div class="q{" real" if real else ""}"><div class="q-src">{E(src)}</div>'
            f'<p class="q-stem">{E(s["stem"])} <b>{E(s.get("question", ""))}</b></p><ol class="q-opts">{opts}</ol>'
            f'<p class="q-ans"><b>Respuesta {E(ok)}.</b> {E(expl)}</p></div>')

def questions(k):
    out, seen = [], set()
    for x in I.get(k, []):
        s = x['slide']; key = s['stem'][:60]
        if key in seen: continue
        seen.add(key)
        real = bool(x.get('real'))
        src = ('Pregunta real · ' + s['title']) if real else ('Pregunta del libro · ' + s['title'] if x.get('libro') else 'Pregunta de práctica')
        out.append(qbox(s, src, real))
    titles = {x['slide'].get('title') for x in I.get(k, [])}
    for b in BANK.get(k, []):
        if (b.get('confidence') or 0) < 0.6 or b['stem'][:60] in seen: continue
        t = str(b.get('recTag', ''))
        if t in titles: continue
        seen.add(b['stem'][:60])
        out.append(qbox({'stem': b['stem'].replace('**', ''), 'question': '', 'options': [{'letter': o['id'], 'text': o['text']} for o in b['options']],
                         'correct': b['correcta'], 'explanation': str(b.get('explicacion', ''))}, 'Pregunta real · ' + t, True))
    o = O.get(k, {})
    if o.get('pregunta') and o['pregunta']['stem'][:60] not in seen: out.append(qbox(o['pregunta'], 'Pregunta de práctica', False))
    return out

logo = open(R + '/books/assets/aee-logo-7a-dark.svg').read()

import base64, glob as _glob
def b64(path, mime='image/jpeg'): return f'data:{mime};base64,' + base64.b64encode(open(path, 'rb').read()).decode()
PROMO = '/tmp/promo'   # portadas (pdftoppm) y cuadros de clases (ffmpeg); ver docstring de promo()
QR = open('/tmp/qr_aee.svg').read() if os.path.exists('/tmp/qr_aee.svg') else ''
CUPON = 'PERFILV3'
def promo(ncodes):
    """Dos páginas de la app antes del índice. Requiere /tmp/promo/cov_XX.jpg (portadas de los 21 tomos) y vid_*.jpg (cuadros de clases)."""
    covs = sorted(_glob.glob(PROMO + '/cov_*.jpg'))
    vids = [PROMO + '/vid_%s.jpg' % x for x in ('endo-25', 'hem-05', 'infecto-02') if os.path.exists(PROMO + '/vid_%s.jpg' % x)]
    stats = [('+11.000', 'preguntas reales EUNACOM', 'Todos los exámenes 2013 – 2026, con explicación'), ('+300', 'videos', 'Masterclasses con algoritmos y casos clínicos'),
             ('Reconstrucciones', 'de cada examen', 'Las preguntas tal como se tomaron, ordenadas por fecha'), ('Simulacros', 'cronometrados', 'Practica en condiciones reales de examen'),
             ('21', 'manuales AEE', 'Un tomo por especialidad, alineado al Perfil V3'), (f'{ncodes:,}'.replace(',', '.'), 'códigos del Perfil', 'Cada uno con su clase y sus preguntas')]
    tiles = ''.join(f'<div class="pr-tile"><b>{a}</b><span>{b}</span><p>{c}</p></div>' for a, b, c in stats)
    p1 = (f'<section class="promo"><div class="cv-grid"></div><div class="pr-in"><div class="pr-top"><div class="cv-logo">{logo}</div><div class="pr-badge">GUÍA GRATUITA</div></div>'
          f'<div class="pr-kick">ESTA GUÍA ES SOLO EL COMIENZO</div><h2 class="pr-h">Prepara el EUNACOM<br>con la <span>Academia</span></h2>'
          f'<p class="pr-lead">La plataforma de la Academia Examen EUNACOM (AEE): el banco de preguntas reales más completo de Chile, clases en video y simulacros, todo ordenado según el Perfil V3.</p>'
          f'<div class="pr-tiles">{tiles}</div>'
          f'<div class="pr-offer"><div class="pr-qr">{QR}</div><div class="pr-off-t"><div class="pr-pct">25<small>%</small></div><div><b>de descuento en todos los cursos</b>'
          f'<p>Escanea el código o entra a <a href="{SITE}/?utm_source=perfil_v3_pdf">eunacom-examen.cl</a> y usa el cupón</p><span class="pr-code">{CUPON}</span></div></div></div></div></section>')
    cov_html = ''.join(f'<img src="{b64(c)}">' for c in covs)
    vid_html = ''.join(f'<img src="{b64(v)}">' for v in vids)
    p2 = (f'<section class="page promo2"><div class="eyebrow">La colección AEE</div><h2>21 manuales, uno por especialidad</h2><div class="rule"></div>'
          f'<p class="lead">Los manuales siguen el Perfil V3 tema por tema: cada párrafo marca el código que enseña, con algoritmos, tablas, fotos clínicas y preguntas reales. Disponibles en la plataforma.</p>'
          f'<div class="pr-covers">{cov_html}</div>'
          f'<h3 class="pr-h3">Masterclasses en video</h3><p class="lead">Cada tema tiene su clase: el profesor explica el porqué, el árbol de decisión se arma en pantalla y cerramos con preguntas reales del EUNACOM. Toca «Ver clase» en cualquier ficha de esta guía.</p>'
          f'<div class="pr-vids">{vid_html}</div>'
          f'<a class="pr-cta" href="{SITE}/?utm_source=perfil_v3_pdf">Entra a eunacom-examen.cl · cupón {CUPON} · 25 % de descuento</a></section>')
    return p1 + p2

def build(pages):
    P = lambda key: str(pages.get(key, '000'))
    nq_total = 0
    body, idx_gen, idx_codes = [], [], []
    for n, (spk, key, title, color) in enumerate(SPECS, 1):
        codes_all = [k for k, v in sorted(CM.items()) if v['specKey'] == spk]
        secs = [(s, lab, [k for k in codes_all if CM[k]['section'] == s]) for s, lab in SEC]
        secs = [x for x in secs if x[2]]
        cards = []
        nq = 0
        for s, lab, codes in secs:
            cards.append(f'<h3 class="sec-h" id="s-{spk}-{s}" style="--c:{color}"><span>{E(lab)}</span><em>{len(codes)} códigos</em></h3>')
            for k in codes:
                v = CM[k]; qs = questions(k); nq += len(qs)
                res = ''.join(f'<li>{E(b)}</li>' for b in O.get(k, {}).get('resumen', []))
                cards.append(
                    f'<article class="code" id="c-{k}" style="--c:{color}"><span class="pgmk">§C{k}§</span>'
                    f'<header class="code-h"><a class="vc" href="{class_url(k)}">▶ Ver clase</a><a class="cd" href="#i-{k}">{k}</a><h4>{E(v["name"])}</h4><div class="lvs">{levels(v)}</div></header>'
                    f'<div class="wh"><span class="lab">Dónde se enseña</span><span>{where(k)}</span></div>'
                    + (f'<div class="sum"><div class="lab">Qué hay que saber</div><ul>{res}</ul></div>' if res else '')
                    + (f'<div class="qs"><div class="lab">Preguntas · {len(qs)}</div>{"".join(qs)}</div>' if qs else '<div class="noq">Sin pregunta</div>')
                    + '</article>')
        nq_total += nq
        sec_rows = ''.join(f'<a class="op-row" href="#s-{spk}-{s}"><span>{E(lab)}</span><b>{len(c)}</b></a>' for s, lab, c in secs)
        body.append(
            f'<section class="opener" id="sp-{spk}" style="--c:{color}"><span class="pgmk">§S{spk}§</span><div class="op-stripe"></div>'
            f'<div class="op-in"><div class="op-kick">{E(MOD_OF[spk][0].upper())} · {E(MOD_OF[spk][1].upper())} · PERFIL V3 {spk}</div><div class="op-num">{n:02d}</div>'
            f'<h2 class="op-title">{E(title)}</h2><div class="op-stats"><div><b>{len(codes_all)}</b><span>códigos</span></div><div><b>{nq}</b><span>preguntas</span></div></div>'
            f'<div class="op-secs"><div class="op-row op-hd"><span>Sección del Perfil</span><b>Códigos</b></div>{sec_rows}</div></div></section>'
            f'<table class="secwrap" style="--c:{color}"><thead><tr><td><div class="gbar">Perfil V3 · Código por código · {E(title)}</div></td></tr></thead>'
            f'<tbody><tr><td class="secbody">{"".join(cards)}</td></tr></tbody></table>')
        if not idx_gen or MOD_OF[spk] != MOD_OF[SPECS[n-2][0]] or n == 1:
            mo = MOD_OF[spk]; idx_gen.append(f'<div class="ig-mod"><span>{mo[0]}</span>{E(mo[1])}<em>{sum(1 for k,v in CM.items() if v["specKey"] in mo[2])} códigos</em></div>')
        idx_gen.append(f'<a class="ig" href="#sp-{spk}" style="--c:{color}"><span class="ig-n">{n:02d}</span><span class="ig-t">{E(title)}</span>'
                       f'<span class="ig-c">{len(codes_all)} códigos</span><span class="dots"></span><span class="ig-p">{P("S"+spk)}</span></a>')
        rows = ''.join(f'<a class="ic" id="i-{k}" href="#c-{k}"><span class="ic-k">{k}</span><span class="ic-n">{E(CM[k]["name"])}</span><span class="ic-p">{P("C"+k)}</span></a>' for k in codes_all)
        idx_codes.append(f'<div class="ic-spec" style="--c:{color}"><div class="ic-h"><span>{n:02d}</span>{E(title)}</div>{rows}</div>')
    ncodes = len(CM)
    cover = (f'<section class="cover"><div class="cv-grid"></div><div class="cv-stripe"></div><div class="cv-in">'
             f'<div class="cv-top"><div class="cv-logo">{logo}</div><div class="cv-badge"><span class="ed">1ª EDICIÓN · 2026</span><span class="sub">ASOFAMECh PERFIL V3</span></div></div>'
             f'<div class="cv-big">{ncodes:,}'.replace(',', '.') + '</div>'
             f'<div class="cv-bottom"><div class="cv-chip">GUÍA COMPLETA · 21 ESPECIALIDADES</div><span class="cv-pre">Perfil de Conocimientos EUNACOM</span>'
             f'<h1>Código por código</h1><span class="cv-sub">Cada código del Perfil V3 con su nivel exigido, dónde se enseña, qué hay que saber y sus preguntas</span>'
             f'<div class="cv-div"></div><div class="cv-foot"><span>{ncodes:,} códigos · {nq_total:,} preguntas'.replace(',', '.') + '</span><span>Academia Examen EUNACOM</span></div></div></div></section>')
    howto = ('<section class="page howto"><div class="eyebrow">Cómo usar esta guía</div><h2>Un código, una ficha</h2><div class="rule"></div>'
             '<p class="lead">Cada ficha corresponde a un código del Perfil de Conocimientos EUNACOM V3 (ASOFAMECh 2026). Busca el código en el índice: el número de página y el propio código son enlaces. Dentro de la ficha, el código te devuelve al índice.</p>'
             '<div class="demo"><div class="demo-h"><span class="cd-d">1.01.1.006</span><b>Nombre oficial del código</b></div><p>Nivel exigido · Dónde se enseña en los manuales AEE · Qué hay que saber · Preguntas reales EUNACOM con su respuesta</p></div>'
             '<h3>Niveles del Perfil</h3><table class="lvtab"><tr><th>Diagnóstico (Dx)</th><td>' + lv('', 'Específico') + ' confirmar el diagnóstico</td><td>' + lv('', 'Sospecha') + ' reconocer y derivar</td></tr>'
             '<tr><th>Tratamiento (Tx)</th><td>' + lv('', 'Completo') + ' manejar de principio a fin</td><td>' + lv('', 'Inicial') + ' estabilizar y derivar</td></tr>'
             '<tr><th>Seguimiento (Seg)</th><td>' + lv('', 'Completo') + ' controlar al paciente</td><td>' + lv('', 'Derivar') + ' derivar al especialista · ' + lv('', 'No requiere') + '</td></tr></table>'
             '<h3>Tipos de pregunta</h3><p class="lead"><span class="tag real">Pregunta real</span> examen EUNACOM con fecha y número. <span class="tag">Pregunta del libro</span> o <span class="tag">de práctica</span>: redactadas por AEE para los códigos sin pregunta oficial.</p></section>')
    igen = f'<section class="page"><div class="eyebrow">Contenido</div><h2>Índice general</h2><div class="rule"></div><div class="ig-list">{"".join(idx_gen)}</div><a class="ig ig-codes" href="#indice-codigos"><span class="ig-t">Índice de códigos</span><span class="dots"></span><span class="ig-p">{P("IDX")}</span></a></section>'
    icod = f'<section class="page" id="indice-codigos"><span class="pgmk">§IIDX§</span><div class="eyebrow">Índice</div><h2>Índice de códigos</h2><div class="rule"></div><p class="lead">Toca el código para ir a su ficha y sus preguntas.</p><div class="ic-cols">{"".join(idx_codes)}</div></section>'
    return f'<!doctype html><html lang="es"><head><meta charset="utf-8"><title>Perfil V3 · Código por código</title><style>{CSS}</style></head><body>{cover}{promo(ncodes)}{howto}{igen}{icod}{"".join(body)}</body></html>'

CSS = r'''
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@500;700&family=JetBrains+Mono:wght@500;700;800&family=Spectral:wght@600;700&display=swap');
@page{size:A4;margin:13mm 0 14mm 0;@bottom-center{content:counter(page);font:600 8px 'JetBrains Mono',monospace;color:#64748b}
 @bottom-left{content:'AEE · Perfil V3 código por código';font:500 7px 'IBM Plex Sans',sans-serif;color:#94a3b8;padding-left:42px}}
@page full{margin:0;@bottom-center{content:none}@bottom-left{content:none}}
*{box-sizing:border-box;margin:0;padding:0}
html{-webkit-print-color-adjust:exact;print-color-adjust:exact}
body{font-family:'IBM Plex Sans',system-ui,sans-serif;color:#15181d;font-size:9.6px;line-height:1.45}
a{color:inherit;text-decoration:none}
.pgmk{position:absolute;font-size:2px;line-height:1;color:rgba(255,255,255,.01)}
/* portada */
.cover{page:full;position:relative;width:210mm;height:297mm;overflow:hidden;background:radial-gradient(120% 80% at 80% 10%,#16304f 0%,#0b1420 60%);break-after:page}
.cv-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(148,163,184,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(148,163,184,.07) 1px,transparent 1px);background-size:28px 28px}
.cv-stripe{position:absolute;left:0;top:0;bottom:0;width:14px;background:linear-gradient(180deg,#b91c1c,#c2410c,#a16207,#4d7c0f,#0f766e,#0e7490,#1d4ed8,#6d28d9,#86198f,#be185d)}
.cv-in{position:absolute;inset:0;padding:64px 66px 62px 76px;display:flex;flex-direction:column;justify-content:space-between}
.cv-top{display:flex;justify-content:space-between;align-items:flex-start}.cv-logo svg{height:111px;width:auto;display:block;margin-left:-43px}
.cv-badge{display:flex;flex-direction:column;align-items:flex-end;gap:7px}.cv-badge .ed{font:800 18px/1 'JetBrains Mono',monospace;letter-spacing:.12em;color:#0bd9e7}.cv-badge .sub{font:700 13px/1 'JetBrains Mono',monospace;letter-spacing:.1em;color:#e2e8f0}
.cv-big{font:800 210px/0.9 'Barlow Condensed',sans-serif;color:rgba(11,217,231,.13);letter-spacing:-.03em;margin-left:-8px}
.cv-bottom{display:flex;flex-direction:column;gap:6px}
.cv-chip{align-self:flex-start;background:#0e7490;color:#fff;font:700 12.5px/1 'IBM Plex Mono',monospace;letter-spacing:.16em;padding:7px 14px;border-radius:2px;margin-bottom:12px}
.cv-pre{font:500 18px/1.2 'IBM Plex Sans',sans-serif;color:#c6d0dd}
.cover h1{font:800 76px/.92 'Barlow Condensed',sans-serif;text-transform:uppercase;color:#fff;letter-spacing:-.02em;margin:4px 0 6px}
.cv-sub{font:600 17px/1.3 'IBM Plex Sans',sans-serif;color:#fff;max-width:560px}
.cv-div{height:1.5px;background:rgba(255,255,255,.38);margin:20px 0 14px}
.cv-foot{display:flex;justify-content:space-between;font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.08em;color:#b6c1d0}
/* promoción */
.promo{page:full;position:relative;width:210mm;height:297mm;overflow:hidden;background:radial-gradient(110% 70% at 85% 0%,#123a5a 0%,#0b1420 62%);color:#fff;break-after:page}
.pr-in{position:absolute;inset:0;padding:60px 64px 56px 70px;display:flex;flex-direction:column}
.pr-top{display:flex;justify-content:space-between;align-items:flex-start}.pr-badge{font:800 12px/1 'JetBrains Mono',monospace;letter-spacing:.14em;color:#0b1420;background:#0bd9e7;padding:8px 12px;border-radius:2px}
.pr-kick{margin-top:34px;font:700 11px/1 'JetBrains Mono',monospace;letter-spacing:.16em;color:#0bd9e7}
.pr-h{font:800 54px/.95 'Barlow Condensed',sans-serif;text-transform:uppercase;margin:10px 0 14px}.pr-h span{color:#0bd9e7}
.pr-lead{font:400 13px/1.5 'IBM Plex Sans',sans-serif;color:#c6d0dd;max-width:600px}
.pr-tiles{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:26px 0}
.pr-tile{border:1px solid rgba(255,255,255,.16);background:rgba(255,255,255,.04);padding:14px 14px 12px;border-top:3px solid #0bd9e7}
.pr-tile b{display:block;font:800 30px/1 'Barlow Condensed',sans-serif;color:#fff}.pr-tile span{display:block;font:700 9.5px/1.3 'IBM Plex Sans',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#0bd9e7;margin:4px 0 6px}
.pr-tile p{font:400 10px/1.45 'IBM Plex Sans',sans-serif;color:#b6c1d0}
.pr-offer{margin-top:auto;display:flex;gap:26px;align-items:center;background:#fff;color:#0b1420;padding:20px 24px;border-left:10px solid #0bd9e7}
.pr-qr svg{width:150px;height:150px;display:block}.pr-off-t{display:flex;gap:18px;align-items:center}
.pr-pct{font:800 92px/.85 'Barlow Condensed',sans-serif;color:#0e7490}.pr-pct small{font-size:46px}
.pr-off-t b{font:700 19px/1.2 'IBM Plex Sans',sans-serif;display:block}.pr-off-t p{font:400 11.5px/1.45 'IBM Plex Sans',sans-serif;color:#475569;margin:6px 0 10px}
.pr-off-t a{color:#0e7490;font-weight:700}.pr-code{font:800 18px/1 'JetBrains Mono',monospace;letter-spacing:.14em;border:2px dashed #0e7490;padding:7px 12px;color:#0e7490}
.promo2{padding-top:6px}.pr-covers{display:grid;grid-template-columns:repeat(7,1fr);gap:7px;margin:4px 0 16px}
.pr-covers img{width:100%;display:block;box-shadow:0 2px 6px rgba(15,23,42,.35);border-radius:1px}
.pr-h3{font:700 16px/1.2 'Spectral',serif;margin:10px 0 6px}
.pr-vids{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.pr-vids img{width:100%;display:block;border-radius:3px;box-shadow:0 2px 6px rgba(15,23,42,.3)}
.pr-cta{display:block;margin-top:18px;background:#0b1420;color:#fff;text-align:center;padding:12px;font:700 12px/1 'JetBrains Mono',monospace;letter-spacing:.08em}
/* índice por módulos, ver clase */
.ig-mod{display:flex;align-items:baseline;gap:10px;margin:16px 0 2px;padding:6px 10px;background:#0b1420;color:#fff;font:700 11px/1.2 'IBM Plex Sans',sans-serif;letter-spacing:.06em;text-transform:uppercase}
.ig-mod span{font:700 10px/1 'JetBrains Mono',monospace;color:#0bd9e7}.ig-mod em{margin-left:auto;font:600 9px/1 'JetBrains Mono',monospace;font-style:normal;color:#b6c1d0;text-transform:none}
.ig{padding:3.2px 0}.ig .ig-n{font-size:19px}.ig-mod{margin-top:11px!important}
.vc{font:700 7.6px/1 'IBM Plex Sans',sans-serif;letter-spacing:.06em;text-transform:uppercase;color:#fff;background:#0b1420;padding:4.5px 8px;border-radius:2px;white-space:nowrap}
.op-hd{border-bottom:1.5px solid rgba(255,255,255,.4)!important;font:700 9.5px/1 'JetBrains Mono',monospace!important;letter-spacing:.14em;text-transform:uppercase;color:#0bd9e7!important}.op-hd b{font-size:9.5px!important;color:#0bd9e7!important}
/* páginas de texto */
.page{padding:6px 42px 0;break-after:page}
.eyebrow{font:600 9px/1.3 'IBM Plex Sans',sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#0e7490}
.page h2{font:700 27px/1.15 'Spectral',serif;margin-top:3px}
.rule{height:3px;background:#0e7490;margin:8px 0 14px}
.lead{font:400 10.4px/1.55 'IBM Plex Sans',sans-serif;color:#475569;max-width:640px;margin-bottom:12px}
.howto h3{font:700 12px/1.3 'IBM Plex Sans',sans-serif;margin:18px 0 8px;color:#0f172a}
.demo{border:1px solid #cbd5e1;border-top:3px solid #0e7490;margin:10px 0}.demo-h{display:flex;gap:10px;align-items:center;background:#ecfeff;padding:7px 12px;font-size:12px}
.demo p{padding:8px 12px;color:#475569}.cd-d{font:700 9px/1 'JetBrains Mono',monospace;background:#0e7490;color:#fff;padding:4px 7px;border-radius:2px}
.lvtab{border-collapse:collapse;width:100%;font-size:9.6px}.lvtab th{text-align:left;width:130px;padding:7px 8px;background:#f1f5f9;font-weight:700}.lvtab td{padding:7px 8px;border-bottom:1px solid #e2e8f0}
.tag{display:inline-block;font:700 7.6px/1 'IBM Plex Sans',sans-serif;letter-spacing:.06em;text-transform:uppercase;padding:3px 6px;border-radius:2px;background:#f1f5f9;color:#475569}.tag.real{background:#dbeafe;color:#1e3a8a}
/* niveles (mismos colores que los manuales) */
.lvk{font:700 6.8px/1 'IBM Plex Sans',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#64748b;margin:0 3px 0 7px}.lvk:empty{display:none}
.lv{display:inline-block;font:700 7.4px/1 'IBM Plex Sans',sans-serif;letter-spacing:.04em;text-transform:uppercase;padding:3px 6px;border-radius:2px;white-space:nowrap}
.lv-sol{background:#1e3a8a;color:#fff}.lv-out{background:#fff;color:#1e3a8a;border:1px solid #93c5fd}.lv-ok{background:#047857;color:#fff}
.lv-mid{background:#fef3c7;color:#92400e;border:1px solid #fcd34d}.lv-low{background:#f1f5f9;color:#334155;border:1px solid #cbd5e1}.lv-nil{background:#fff;color:#94a3b8;border:1px dashed #cbd5e1}
/* índice general */
.ig{display:flex;align-items:baseline;gap:12px;padding:7px 0;border-bottom:1px solid #f1f5f9}
.ig-n{font:700 24px/1 'Barlow Condensed',sans-serif;color:var(--c);width:34px}.ig-t{font:700 12.5px/1.3 'IBM Plex Sans',sans-serif}
.ig-c{font:500 9px/1 'IBM Plex Sans',sans-serif;color:#64748b}.dots{flex:1;border-bottom:1px dotted #cbd5e1;position:relative;top:-3px}
.ig-p{font:700 12px/1 'JetBrains Mono',monospace;color:#1e3a8a}.ig-codes{margin-top:14px;background:#f1f5f9;padding:9px 12px;border-left:3px solid #0e7490}
/* índice de códigos */
.ic-cols{column-count:2;column-gap:22px}
.ic-spec{margin-bottom:10px}.ic-h{break-after:avoid;display:flex;gap:7px;align-items:baseline;font:700 10.5px/1.3 'IBM Plex Sans',sans-serif;color:var(--c);border-bottom:2px solid var(--c);padding:6px 0 3px;margin-bottom:3px}
.ic-h span{font:700 15px/1 'Barlow Condensed',sans-serif}
.ic{display:flex;align-items:baseline;gap:6px;font-size:7.9px;line-height:1.5;break-inside:avoid}
.ic-k{font:600 7.4px/1.5 'JetBrains Mono',monospace;color:var(--c);flex:none;width:52px}
.ic-n{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#334155}
.ic-p{font:700 7.4px/1.5 'JetBrains Mono',monospace;color:#1e3a8a;flex:none}
/* portadilla de especialidad */
.opener{page:full;position:relative;width:210mm;height:297mm;background:#0b1420;overflow:hidden;break-after:page;color:#fff}
.op-stripe{position:absolute;left:0;top:0;bottom:0;width:14px;background:var(--c)}
.op-in{position:absolute;inset:0;padding:96px 70px 70px 80px;display:flex;flex-direction:column}
.op-kick{font:700 11px/1 'JetBrains Mono',monospace;letter-spacing:.16em;color:#0bd9e7}
.op-num{font:800 190px/.85 'Barlow Condensed',sans-serif;color:var(--c);margin:40px 0 0 -6px;filter:brightness(1.25)}
.op-title{font:800 60px/.95 'Barlow Condensed',sans-serif;text-transform:uppercase;letter-spacing:-.01em;margin:10px 0 30px}
.op-stats{display:flex;gap:40px;padding:18px 0;border-top:1.5px solid rgba(255,255,255,.3);border-bottom:1.5px solid rgba(255,255,255,.3)}
.op-stats b{display:block;font:800 40px/1 'Barlow Condensed',sans-serif}.op-stats span{font:500 11px/1.4 'IBM Plex Mono',monospace;letter-spacing:.1em;text-transform:uppercase;color:#b6c1d0}
.op-secs{margin-top:auto}.op-row{display:flex;justify-content:space-between;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.14);font:500 13px/1.3 'IBM Plex Sans',sans-serif;color:#e2e8f0}
.op-row b{font:700 13px/1 'JetBrains Mono',monospace;color:#fff}
/* cuerpo */
.secwrap{width:100%;border-collapse:collapse;table-layout:fixed;break-after:page}
.secwrap thead{display:table-header-group}.secwrap td{padding:0}.secwrap td.secbody{padding:0 42px}
.gbar{height:20px;margin:0 42px 10px;border-bottom:2px solid var(--c);display:flex;align-items:center;font:700 7.6px/1 'IBM Plex Sans',sans-serif;letter-spacing:.2em;text-transform:uppercase;color:var(--c)}
.secbody{padding:0 42px}
.sec-h{display:flex;justify-content:space-between;align-items:baseline;break-after:avoid;margin:14px 0 8px;padding:8px 12px;background:var(--c);color:#fff;font:700 13px/1.2 'IBM Plex Sans',sans-serif}
.sec-h em{font:600 9px/1 'JetBrains Mono',monospace;font-style:normal;opacity:.85}
.code{border:1px solid #d6dde6;border-top:3px solid var(--c);margin:0 0 11px;position:relative}
.code-h{display:flex;flex-wrap:wrap;align-items:center;gap:6px 10px;padding:7px 11px;background:#f8fafc;border-bottom:1px solid #e2e8f0;break-after:avoid;break-inside:avoid}
.cd{font:700 9px/1 'JetBrains Mono',monospace;background:var(--c);color:#fff;padding:4px 7px;border-radius:2px}
.code-h h4{flex:1;min-width:200px;font:700 11.6px/1.3 'IBM Plex Sans',sans-serif;color:#0f172a}
.lvs{display:flex;align-items:center;flex-wrap:wrap}
.lab{font:700 7.4px/1 'IBM Plex Sans',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:var(--c);margin-bottom:4px}
.wh{display:flex;gap:10px;padding:6px 11px;font-size:8.6px;color:#475569;border-bottom:1px dashed #e2e8f0;break-inside:avoid}.wh .lab{flex:none;width:92px;margin:2px 0 0}
.wh-b{font-weight:700;color:#0f172a}.gap{color:#b91c1c;font-weight:700}
.sum{padding:7px 11px 4px}.sum ul{margin:0 0 0 13px}.sum li{margin:0 0 2.5px;font-size:9.4px;line-height:1.45}.sum li::marker{color:var(--c)}
.qs{padding:4px 11px 9px}
.q{background:#f8fafc;border:1px solid #e2e8f0;border-left:3px solid #94a3b8;padding:7px 10px;margin-top:6px;break-inside:avoid;font-size:8.9px}
.q.real{border-left-color:#1e3a8a}
.q-src{font:700 7.4px/1.2 'IBM Plex Sans',sans-serif;letter-spacing:.06em;text-transform:uppercase;color:#64748b;margin-bottom:3px}.q.real .q-src{color:#1e3a8a}
.q-stem{margin-bottom:4px;line-height:1.45}
.q-opts{list-style:none;display:flex;flex-direction:column;gap:1.5px;margin-bottom:4px}
.q-opts li{display:flex;gap:6px;padding:1.5px 5px;border-radius:2px}.q-opts li b{font:700 8px/1.5 'JetBrains Mono',monospace;color:#64748b;flex:none;width:9px}

.q-ans{color:#334155;font-size:8.6px;line-height:1.45;border-top:1px solid #e2e8f0;padding-top:4px}
.noq{padding:6px 11px 8px;color:#b91c1c;font-size:8.4px}
'''

def render(pages, path):
    hp = '/tmp/perfil_v3_libro.html'
    open(hp, 'w').write(build(pages))
    subprocess.run([CHROME, '--headless=new', '--disable-gpu', '--no-pdf-header-footer', '--generate-pdf-document-outline',
                    '--print-to-pdf=' + path, 'file://' + hp], capture_output=True, timeout=1200)

def read_pages(path):
    txt = subprocess.run(['pdftotext', path, '-'], capture_output=True, text=True).stdout
    pages = {}
    for i, pg in enumerate(txt.split('\f'), 1):
        for m in re.finditer(r'§([CSI])([0-9A-Z.]+)§', pg):
            pages.setdefault(m.group(1) + m.group(2) if m.group(1) != 'I' else m.group(2), i)
    return pages

pages = {}
for it in range(3):
    render(pages, OUT)
    new = read_pages(OUT)
    print('pasada', it + 1, 'marcas', len(new), 'páginas', subprocess.run(['pdfinfo', OUT], capture_output=True, text=True).stdout.split('Pages:')[1].split()[0])
    if new == pages: break
    pages = new
miss = [k for k in CM if 'C' + k not in pages]
print(OUT, '| códigos sin página:', len(miss), miss[:5])
