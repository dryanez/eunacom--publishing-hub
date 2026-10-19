# Libro único «Perfil EUNACOM V3 · Código por código» (21 especialidades, 1.556 códigos) con el diseño de los manuales AEE.
# Índice general + índice de códigos con número de página y enlace a cada código (dos pasadas: se rinde, se leen las páginas, se vuelve a rendir).
# Uso (desde la raíz del repo): python3 -I books/scripts/build_perfil_v3_libro.py
import json, html, subprocess, os, re, collections, base64
R = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
V = os.path.expanduser('~/fotos_tools/v3')
CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
OUT = R + '/books/dist/Perfil_V3_Codigo_por_Codigo_Completo_2026.pdf'
import re as _re
E=lambda t: html.escape(_re.sub(r':::\w*\s*','',str(t)).replace('**',''))

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
# audit del banco: preguntas excluidas (q.audit.excluir) no se usan; clave/explicación corregidas mandan sobre las copias
BTAG = {}
for _qs in BANK.values():
    for _q in _qs: BTAG.setdefault(_q.get('recTag'), _q)
def excluded(t): return bool(((BTAG.get(t) or {}).get('audit') or {}).get('excluir'))
def q_img(t):
    im = (BTAG.get(t) or {}).get('imagen') or {}
    f = os.path.join(R, 'classes', 'media', im.get('src', '') or '_')
    if not im.get('src') or not os.path.exists(f): return ''
    mime = 'image/png' if f.lower().endswith('.png') else 'image/jpeg'
    return (f'<figure class="q-img"><img src="data:{mime};base64,{base64.b64encode(open(f, "rb").read()).decode()}" alt="">'
            f'<figcaption>Imagen representativa</figcaption></figure>')
O = {}
for _, k, _, _ in SPECS:
    p = V + '/cb_out_%s.json' % k
    if os.path.exists(p): O.update(json.load(open(p)))

# títulos vivos de los temas (incluye los temas nuevos) leídos de los datasets de los libros
NODE = r'''
const fs=require('fs'),out={};
for(const b of %s){let f='./books/scripts/dataset_'+b+'.cjs';
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

def qbox(s, src, real, tag=''):
    ok = str(s['correct']).strip().upper()[:1]
    opts = ''.join(f'<li><b>{E(str(o["letter"]))}</b><span>{E(o["text"])}</span></li>' for o in s['options'])
    expl = clean(str(s.get('explanation', '')).replace('**', ''))
    if len(expl) > 520: expl = expl[:500].rsplit(' ', 1)[0] + '…'
    kind = 'Real EUNACOM' if real else 'Práctica AEE'
    head = src.split(' · ', 1)[1] if ' · ' in src else src
    return (f'<div class="q{" real" if real else ""}"><div class="q-h"><span>{E(head)}</span><em>{kind}</em></div><div class="q-b">'
            f'<p class="q-stem">{E(s["stem"])} <b>{E(s.get("question", ""))}</b></p>{q_img(tag) if tag else ""}<ol class="q-opts">{opts}</ol>'
            f'<p class="q-ans"><b>Respuesta {E(ok)}</b>{(" · " + E(expl)) if expl else ""}</p></div></div>')

def questions(k):
    out, seen = [], set()
    for x in I.get(k, []):
        s = x['slide']; key = s['stem'][:60]
        if key in seen: continue
        seen.add(key)
        real = bool(x.get('real'))
        t = str(s.get('title', ''))
        if real and excluded(t): continue
        if real and t in BTAG:
            a = BTAG[t].get('audit') or {}
            if a.get('aplicado') and a.get('clave_original') and str(s.get('correct', '')).strip()[:1] == a['clave_original']:
                s = dict(s, correct=BTAG[t]['correcta'], explanation=BTAG[t].get('explicacion', ''))
        src = ('Pregunta real · ' + s['title']) if real else ('Pregunta del libro · ' + s['title'] if x.get('libro') else 'Pregunta de práctica')
        out.append(qbox(s, src, real, t if real else ''))
    titles = {x['slide'].get('title') for x in I.get(k, [])}
    for b in BANK.get(k, []):
        if (b.get('confidence') or 0) < 0.6 or b['stem'][:60] in seen: continue
        t = str(b.get('recTag', ''))
        if t in titles or (b.get('audit') or {}).get('excluir'): continue
        seen.add(b['stem'][:60])
        out.append(qbox({'stem': b['stem'].replace('**', ''), 'question': '', 'options': [{'letter': o['id'], 'text': o['text']} for o in b['options']],
                         'correct': b['correcta'], 'explanation': str(b.get('explicacion', ''))}, 'Pregunta real · ' + t, True, t))
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
    stats = [('+11.000', 'preguntas reales EUNACOM', 'Todos los exámenes 2013 – 2026, con explicación'), ('+450', 'clases en video', 'Masterclasses con algoritmos, casos clínicos y animaciones'),
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
    L = lambda n: b64(f'{PROMO}/lib/{n}.jpg') if os.path.exists(f'{PROMO}/lib/{n}.jpg') else ''
    F = lambda n: b64(f'{PROMO}/fr/{n}.jpg') if os.path.exists(f'{PROMO}/fr/{n}.jpg') else ''
    item = lambda img, big, lab, txt: (f'<div class="lb-it"><div class="lb-cv"><img src="{img}"></div><div><b>{big}</b><span>{lab}</span><p>{txt}</p></div></div>')
    anki = ('<div class="lb-it"><div class="anki"><div class="ak-f"><em>Anki · Cardiología</em>¿Hiperkalemia en el ECG?</div>'
            '<div class="ak-b">T alta y simétrica, luego QRS ancho; con QRS ancho, gluconato de calcio EV primero.</div><div class="ak-v">▶ Ver en la clase 1.1</div></div>'
            '<div><b>+17.800</b><span>tarjetas Anki</span><p>23 mazos listos para importar, con cada concepto clave del Perfil V3 enlazado a su clase en video.</p></div></div>')
    p2 = (f'<section class="promo lib"><div class="cv-grid"></div><div class="pr-in">'
          f'<div class="pr-kick">TODA LA BIBLIOTECA AEE · INCLUIDA EN LA PLATAFORMA</div><h2 class="pr-h">Mucho más<br>que una <span>guía</span></h2>'
          f'<p class="pr-lead">Cada código de esta guía se estudia a fondo en nuestros libros, se practica con preguntas reales y se repasa con resúmenes, fotos clínicas y tarjetas Anki.</p>'
          f'<div class="lb-man"><div class="lb-man-t"><b>21</b><span>manuales AEE</span><p>Uno por especialidad, tema por tema según el Perfil V3, con algoritmos, tablas y fotos clínicas.</p></div><div class="pr-covers">{cov_html}</div></div>'
          f'<div class="lb-grid">'
          + item(L('rec'), '2.739', 'preguntas reconstruidas', 'El Gran Libro de Reconstrucciones: 16 exámenes EUNACOM 2013–2025 tal como se tomaron, con comentario razonado.')
          + item(L('gordo'), '90', 'preguntas por tema', '24 Libros Gordos y el Gran Libro de 1.890 preguntas con explicación de cada alternativa.')
          + item(L('repaso'), '21', 'repasos de última hora', 'Resúmenes de alto rendimiento por especialidad para la semana del examen.')
          + item(L('atlas'), 'Atlas', 'de imágenes clínicas', 'Las fotos que el examen muestra: lo que tienes que ver y qué hacer después.')
          + item(L('guia'), '1.556', 'códigos, uno por uno', 'Esta guía Perfil V3 código por código: nivel exigido, dónde se enseña y preguntas de cada código.')
          + anki + '</div></div></section>')
    vids = ''.join(f'<figure><img src="{F(n)}"><figcaption>{c}</figcaption></figure>' for n, c in
                   [('anim_A1_hipertension_portal_3d', 'Hipertensión portal'), ('anim_A1_crisis_propagacion_3d', 'Crisis epiléptica'), ('anim_A1_podagra_3d', 'Gota: la podagra'), ('anim_A1_cierre_angulo_3d', 'Glaucoma agudo')])
    p3 = (f'<section class="promo vid"><div class="cv-grid"></div><div class="pr-in">'
          f'<div class="pr-kick">MASTERCLASSES EN VIDEO · ANIMACIONES 3D</div><h2 class="pr-h">Míralo<br><span>en movimiento</span></h2>'
          f'<p class="pr-lead">Cada tema tiene su clase: el profesor explica el porqué, el árbol de decisión se arma en pantalla y la anatomía se mueve. Toca «Ver clase» en cualquier ficha de esta guía.</p>'
          f'<div class="vd-main"><figure class="big"><img src="{F("title_10")}"><figcaption>Así empieza cada clase</figcaption></figure>'
          f'<figure class="big"><img src="{b64(PROMO + "/vid_hem-05.jpg") if os.path.exists(PROMO + "/vid_hem-05.jpg") else ""}"><figcaption>Lo esencial, paso a paso</figcaption></figure></div>'
          f'<div class="vd-k">ANIMACIONES 3D DE ANATOMÍA REAL</div><div class="vd-anim">{vids}</div>'
          f'<div class="vd-stats"><div><b>+450</b><span>clases en video</span></div><div><b>472</b><span>animaciones</span></div><div><b>+11.000</b><span>preguntas reales</span></div></div>'
          f'<a class="pr-cta" href="{SITE}/?utm_source=perfil_v3_pdf">Entra a eunacom-examen.cl · cupón {CUPON} · 25 % de descuento</a></div></section>')
    return p1, p2 + p3

def lvcell(v):
    if v['section'] in ('situacion', 'urgencia'):
        return ''.join(f'<td class="ct-l">{lv("", v[x])}</td>' for x in ('dx', 'tx', 'seg'))
    return f'<td class="ct-l" colspan="3">{lv("Nivel", v.get("nivel")) or "—"}</td>'

def comp_table(spk, title, color, codes, P):
    rows = []
    for lab_s, lab in SEC:
        cs = [k for k in codes if CM[k]['section'] == lab_s]
        if not cs: continue
        rows.append(f'<tr class="ct-sec"><td colspan="6">{E(lab)} · {len(cs)} códigos</td></tr>')
        rows += [f'<tr><td class="ct-k"><a href="#c-{k}">{k}</a></td><td class="ct-n"><a href="#c-{k}">{E(CM[k]["name"])}</a></td>{lvcell(CM[k])}<td class="ct-p">{P("C"+k)}</td></tr>' for k in cs]
    return (f'<section class="comp" style="--c:{color}"><div class="gbar">Perfil V3 · {E(title)} · Competencias oficiales</div><div class="secbody">'
            f'<div class="eyebrow" style="color:var(--c)">Perfil de Conocimientos V3 · ASOFAMECh</div><h2 class="ix-h">Competencias oficiales · {E(title)}</h2><div class="cp-rule"></div>'
            f'<p class="lead">Nivel legal exigido en el EUNACOM para cada código. Toca el código para ir a su ficha.</p>'
            f'<table class="ct"><thead><tr><th>Código V3</th><th>Situación clínica oficial</th><th>Dx</th><th>Tx</th><th>Seg</th><th>Pág.</th></tr></thead><tbody>{"".join(rows)}</tbody></table></div></section>')

def legal_page():
    rows = [('Título', 'Perfil EUNACOM V3 · Código por código'), ('Autoría', 'Comité Médico Pedagógico de la Academia Examen EUNACOM (AEE)'),
            ('Entidad editora', 'Wiackowska Group SpA (Santiago de Chile)'), ('Edición', 'Primera Edición · Año 2026'),
            ('Estructura', f'{len(CM):,} códigos del Perfil V3 · 21 especialidades · 4 módulos'.replace(',', '.')),
            ('Alineación', 'Perfil de Conocimientos EUNACOM V3 2026 (ASOFAMECh / MINSAL)'), ('Distribución', 'Guía gratuita · eunacom-examen.cl')]
    ficha = ''.join(f'<tr><th>{a}</th><td>{E(b)}</td></tr>' for a, b in rows)
    return (f'<section class="page legal"><div class="eyebrow">Ficha editorial &amp; propiedad intelectual</div><h2>Perfil EUNACOM V3 · Código por código</h2><div class="rule"></div>'
            f'<div class="box" style="--c:#0e7490"><div class="box-h">Ficha técnica editorial</div><table class="lg-t">{ficha}</table></div>'
            f'<h3>Marco legal y protección de derechos de autor</h3>'
            f'<p><b>Aviso legal y uso permitido.</b> Esta guía es de distribución gratuita. Puede compartirse libremente en su forma original, completa y sin modificaciones, siempre sin fines comerciales. Queda prohibida su venta, reventa, alteración, extracción de su contenido o inclusión en bancos de preguntas no autorizados.</p>'
            f'<p><b>Legislación de la República de Chile.</b> Esta publicación está protegida por las leyes de la República de Chile, en particular por la Ley N° 17.336 sobre Propiedad Intelectual, sus reglamentos y los convenios internacionales vigentes ratificados por el Estado de Chile.</p>'
            f'<p><b>Propiedad intelectual.</b> Los textos, resúmenes, explicaciones, diseño y organización de esta obra son propiedad intelectual de Wiackowska Group SpA y la Academia Examen EUNACOM. Las preguntas reales EUNACOM se citan con fines educativos e indicando su examen de origen.</p>'
            f'<p><b>Responsabilidad médica.</b> Este material es una herramienta de estudio para rendir el Examen Único Nacional de Conocimientos de Medicina (EUNACOM). No reemplaza el juicio clínico, las guías clínicas MINSAL vigentes ni la indicación de un médico tratante.</p>'
            f'<div class="lg-foot"><span>© 2026 Academia Examen EUNACOM (AEE) · Wiackowska Group SpA</span><span>Santiago de Chile · Todos los derechos reservados</span></div></section>')

# páginas de título/autores y ficha legal (diseño en mockups/legal/make.py), incrustadas a página completa
import importlib.util as _il
_sp = _il.spec_from_file_location('legal_make', R + '/mockups/legal/make.py'); LEGAL = _il.module_from_spec(_sp); _sp.loader.exec_module(LEGAL)
def frame(kind):
    html = LEGAL.titulo_autores() if kind == 'titulo' else LEGAL.s4b().replace('FOLIO PV3-2026 · PÁG. II', 'FOLIO PV3-2026')
    f = f'/tmp/pv3_{kind}.html'; open(f, 'w').write(html)
    return f'<section class="fullframe"><iframe src="file://{f}" scrolling="no"></iframe></section>'

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
            for j, k in enumerate(codes):
                v = CM[k]; qs = questions(k); nq += len(qs)
                res = ''.join(f'<li>{E(b)}</li>' for b in O.get(k, {}).get('resumen', []))
                band = f'Perfil V3 · {E(title)} · {E(lab)} · {j+1}/{len(codes)}'
                cards.append(
                    f'<section class="codepg" style="--c:{color}"{f" id=\"s-{spk}-{s}\"" if j == 0 else ""}><div class="gbar">{band}</div>'
                    f'<div class="secbody"><article class="code" id="c-{k}"><span class="pgmk">§C{k}§</span>'
                    f'<div class="cp-top"><a class="cd" href="#i-{k}">{k}</a><span class="cp-sec">{E(lab)}</span><a class="vc" href="{class_url(k)}">▶ Ver clase</a></div>'
                    f'<h2 class="cp-title">{E(v["name"])}</h2><div class="cp-rule"></div>'
                    f'<div class="cp-meta"><div class="box"><div class="box-h">Nivel exigido por el Perfil</div><div class="box-b lvs">{levels(v)}</div></div>'
                    f'<div class="box"><div class="box-h">Dónde se enseña</div><div class="box-b wh">{where(k)}</div></div></div>'
                    + (f'<h3 class="cp-h">1 · Qué hay que saber</h3><ul class="cp-sum">{res}</ul>' if res else '')
                    + (f'<h3 class="cp-h">{2 if res else 1} · Preguntas EUNACOM <em>{len(qs)}</em></h3>{"".join(qs)}' if qs else '<p class="noq">Sin pregunta</p>')
                    + '</article></div></section>')
        nq_total += nq
        sec_rows = ''.join(f'<a class="op-row" href="#s-{spk}-{s}"><span>{E(lab)}</span><b>{len(c)}</b></a>' for s, lab, c in secs)
        body.append(
            f'<section class="opener" id="sp-{spk}" style="--c:{color}"><span class="pgmk">§S{spk}§</span><div class="op-stripe"></div>'
            f'<div class="op-in"><div class="op-kick">{E(MOD_OF[spk][0].upper())} · {E(MOD_OF[spk][1].upper())} · PERFIL V3 {spk}</div><div class="op-num">{n:02d}</div>'
            f'<h2 class="op-title">{E(title)}</h2><div class="op-stats"><div><b>{len(codes_all)}</b><span>códigos</span></div><div><b>{nq}</b><span>preguntas</span></div></div>'
            f'<div class="op-secs"><div class="op-row op-hd"><span>Sección del Perfil</span><b>Códigos</b></div>{sec_rows}</div></div></section>'
            + comp_table(spk, title, color, codes_all, P)
            + ''.join(cards))
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
    icod = (f'<table class="secwrap" id="indice-codigos" style="--c:#0e7490"><thead><tr><td><div class="gbar">Perfil V3 · Índice de códigos</div></td></tr></thead><tbody><tr><td class="secbody">'
            f'<span class="pgmk">§IIDX§</span><div class="eyebrow">Índice</div><h2 class="ix-h">Índice de códigos</h2><div class="rule"></div><p class="lead">Toca el código para ir a su ficha y sus preguntas.</p><div class="ic-cols">{"".join(idx_codes)}</div></td></tr></tbody></table>')
    pr1, pr2 = promo(ncodes); pr1 = cover + pr1
    return f'<!doctype html><html lang="es"><head><meta charset="utf-8"><title>Perfil V3 · Código por código</title><style>{CSS}</style></head><body>{pr1}{frame('titulo')}{frame('legal')}{pr2}{howto}{igen}{icod}{"".join(body)}</body></html>'

CSS = r'''
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@500;700&family=JetBrains+Mono:wght@500;700;800&family=Spectral:wght@600;700&display=swap');
@page{size:A4;margin:0 0 13mm 0;@bottom-center{content:counter(page);font:600 8px 'JetBrains Mono',monospace;color:#64748b}
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
/* biblioteca y videos */
.lib .pr-h,.vid .pr-h{font-size:46px}.lib .pr-kick,.vid .pr-kick{margin-top:0}
.lb-man{display:grid;grid-template-columns:150px 1fr;gap:16px;align-items:center;margin:20px 0 14px;padding:14px;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.03)}
.lb-man .pr-covers{grid-template-columns:repeat(7,1fr);gap:5px;margin:0}
.lb-man-t b,.lb-it b{display:block;font:800 30px/1 'Barlow Condensed',sans-serif;color:#fff}.lb-man-t span,.lb-it span{display:block;font:700 9px/1.3 'IBM Plex Sans';letter-spacing:.1em;text-transform:uppercase;color:#0bd9e7;margin:3px 0 6px}
.lb-man-t p,.lb-it p{font:400 9.6px/1.45 'IBM Plex Sans';color:#b6c1d0}
.lb-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.lb-it{display:grid;grid-template-columns:96px 1fr;gap:14px;align-items:center;padding:12px;border:1px solid rgba(255,255,255,.14);border-top:3px solid #0bd9e7;background:rgba(255,255,255,.03)}
.lb-cv img{width:96px;display:block;box-shadow:0 8px 18px -6px rgba(0,0,0,.7)}
.lb-grid{gap:10px}.lb-it{padding:10px}.lb-grid .lb-it:last-child{grid-template-columns:150px 1fr}.lb-grid .anki{font-size:8px}.lb-grid .ak-f{font-size:9px}
.anki{background:#fff;color:#0f172a;border-radius:6px;overflow:hidden;font-size:9px;box-shadow:0 8px 18px -6px rgba(0,0,0,.7)}
.ak-f{padding:8px 10px;font-weight:700;font-size:10.5px;border-bottom:1px dashed #cbd5e1}.ak-f em{display:block;font:600 7px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#64748b;font-style:normal;margin-bottom:4px}
.ak-b{padding:8px 10px;line-height:1.4;color:#334155}.ak-v{background:#0e7490;color:#fff;font:700 8px/1 'IBM Plex Mono',monospace;letter-spacing:.08em;padding:6px 10px}
.vid figure{margin:0}.vid figure img{width:100%;display:block;border-radius:4px;box-shadow:0 10px 24px -8px rgba(0,0,0,.8);border:1px solid rgba(255,255,255,.12)}
.vid figcaption{font:600 8.5px/1.3 'IBM Plex Mono',monospace;letter-spacing:.1em;text-transform:uppercase;color:#7dd3fc;margin-top:6px}
.vd-main{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:22px}
.vd-k{font:700 11px/1 'JetBrains Mono',monospace;letter-spacing:.16em;color:#0bd9e7;margin:22px 0 10px}
.vd-anim{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.vd-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:22px 0 0}.vd-stats div{border-top:3px solid #0bd9e7;padding-top:8px}
.vd-stats b{display:block;font:800 34px/1 'Barlow Condensed';color:#fff}.vd-stats span{font:600 9px/1.3 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#b6c1d0}
.vid .pr-cta{margin-top:auto;background:#0bd9e7;color:#0b1420}
/* índice por módulos, ver clase */
.ig-mod{display:flex;align-items:baseline;gap:10px;margin:16px 0 2px;padding:6px 10px;background:#0b1420;color:#fff;font:700 11px/1.2 'IBM Plex Sans',sans-serif;letter-spacing:.06em;text-transform:uppercase}
.ig-mod span{font:700 10px/1 'JetBrains Mono',monospace;color:#0bd9e7}.ig-mod em{margin-left:auto;font:600 9px/1 'JetBrains Mono',monospace;font-style:normal;color:#b6c1d0;text-transform:none}
.ig{padding:3.2px 0}.ig .ig-n{font-size:19px}.ig-mod{margin-top:11px!important}
.vc{font:700 7.6px/1 'IBM Plex Sans',sans-serif;letter-spacing:.06em;text-transform:uppercase;color:#fff;background:#0b1420;padding:4.5px 8px;border-radius:2px;white-space:nowrap}
.op-hd{border-bottom:1.5px solid rgba(255,255,255,.4)!important;font:700 9.5px/1 'JetBrains Mono',monospace!important;letter-spacing:.14em;text-transform:uppercase;color:#0bd9e7!important}.op-hd b{font-size:9.5px!important;color:#0bd9e7!important}
/* ficha = página de tema */
.codepg{break-before:page}.codepg .secbody{padding:0 42px}.codepg .code{border:none;margin:0}
.cp-top{display:flex;align-items:center;gap:10px}.cp-top .cd{font-size:10px;padding:5px 9px}
.cp-sec{font:700 8.4px/1 'IBM Plex Sans',sans-serif;letter-spacing:.14em;text-transform:uppercase;color:var(--c)}.cp-top .vc{margin-left:auto;font-size:8.4px;padding:6px 11px}
.cp-title{font:700 23px/1.2 'IBM Plex Sans',sans-serif;letter-spacing:-.01em;color:#0f172a;margin:9px 0 6px}
.cp-rule{height:3px;background:var(--c);margin-bottom:14px}
.cp-meta{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.35fr);gap:12px;margin-bottom:16px}.box-b.wh{display:block;border:none;color:#334155;font-size:9.2px}.box-b.wh br{display:block;content:'';margin-bottom:3px}
.box{border:1px solid #cbd5e1;border-top:3px solid var(--c);break-inside:avoid}
.box-h{background:#f1f5f9;border-bottom:1px solid #cbd5e1;padding:6px 11px;font:700 8px/1.2 'IBM Plex Sans',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#334155}
.box-b{padding:9px 11px;font-size:9.6px;line-height:1.5}.box-b.lvs{display:flex;flex-wrap:wrap;gap:6px 0;align-items:center}
.box-b.lvs .lvk:first-child{margin-left:0}
.cp-h{font:700 9.6px/1.3 'IBM Plex Sans',sans-serif;letter-spacing:.14em;text-transform:uppercase;color:var(--c);margin:14px 0 8px;break-after:avoid;display:flex;align-items:center;gap:8px}
.cp-h::after{content:'';flex:1;height:1px;background:#cbd5e1}.cp-h em{font-style:normal;background:var(--c);color:#fff;font:700 8px/1 'JetBrains Mono',monospace;padding:3px 6px;border-radius:2px;letter-spacing:0}
.cp-sum{column-count:2;column-gap:24px;margin:0 0 4px 14px;font-size:10px;line-height:1.55}
.cp-sum li{margin:0 0 6px;break-inside:avoid}.cp-sum li::marker{color:var(--c)}
.codepg .q{background:#fff;border:1px solid #cbd5e1;border-left:1px solid #cbd5e1;padding:0;margin:0 0 10px;font-size:9.4px}
.q-h{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:6px 11px;background:#f8fafc;border-bottom:1px solid #cbd5e1;font:700 8.4px/1.25 'IBM Plex Sans',sans-serif;letter-spacing:.06em;text-transform:uppercase;color:#334155}
.q-h em{font-style:normal;font:700 7.4px/1 'IBM Plex Sans',sans-serif;letter-spacing:.08em;padding:4px 7px;border-radius:2px;background:#fff;color:#64748b;border:1px solid #cbd5e1;white-space:nowrap}
.q.real .q-h{background:#1e3a8a;color:#fff;border-bottom:none}.q.real .q-h em{background:#fff;color:#1e3a8a;border:none}
.q-b{padding:8px 11px}.codepg .q-stem{line-height:1.5}
.codepg .q-opts li{padding:2px 5px;border-bottom:1px solid #f1f5f9}.codepg .q-opts li:last-child{border-bottom:none}
.codepg .q-ans{background:#f1f5f9;border:none;border-left:3px solid var(--c);padding:6px 9px;margin-top:6px;color:#334155}
/* competencias y legal */
.comp{break-before:page}.comp .secbody{padding:0 42px}
.ct{width:100%;border-collapse:collapse;font-size:8.8px}
.ct thead{display:table-header-group}.ct th{background:#0b1420;color:#fff;text-align:left;padding:6px 8px;font:700 7.6px/1.2 'IBM Plex Sans',sans-serif;letter-spacing:.1em;text-transform:uppercase}
.ct td{padding:4.5px 8px;border-bottom:1px solid #e2e8f0;vertical-align:middle}.ct tr{break-inside:avoid}
.ct-sec td{background:var(--c);color:#fff;font:700 8.4px/1.2 'IBM Plex Sans',sans-serif;letter-spacing:.08em;text-transform:uppercase;padding:6px 8px}
.ct-k a{font:700 8px/1 'JetBrains Mono',monospace;color:var(--c);white-space:nowrap}.ct-n{width:52%}.ct-n a{color:#0f172a}
.ct-l{white-space:nowrap;text-align:center}.ct-p{font:700 8px/1 'JetBrains Mono',monospace;color:#1e3a8a;text-align:right}
.legal h3{font:700 12px/1.3 'IBM Plex Sans',sans-serif;margin:20px 0 8px}.legal p{font-size:9.8px;line-height:1.6;color:#334155;margin-bottom:9px;max-width:680px}
.lg-t{width:100%;border-collapse:collapse;font-size:9.6px}.lg-t th{text-align:left;width:150px;padding:6px 11px;font:700 8px/1.3 'IBM Plex Sans',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#64748b}
.lg-t td{padding:6px 11px;border-bottom:1px solid #f1f5f9}
.lg-foot{margin-top:28px;padding-top:10px;border-top:1px solid #cbd5e1;display:flex;justify-content:space-between;font:500 8.6px/1.4 'IBM Plex Mono',monospace;color:#64748b}
.fullframe{page:full;width:210mm;height:297mm;overflow:hidden;break-after:page}.fullframe iframe{border:0;width:794px;height:1123px;display:block}
/* páginas de texto */
.page{padding:44px 42px 0;break-after:page}.ix-h{font:700 27px/1.15 'Spectral',serif;margin-top:3px}
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
.lv-mid{background:#fef3c7;color:#92400e;border:1px solid #fcd34d}.lv-low{background:#f1f5f9;color:#334155;border:1px solid #cbd5e1}.lv-nil{background:#fff;color:#94a3b8;border:1px solid #cbd5e1}
/* índice general */
.ig{display:flex;align-items:baseline;gap:12px;padding:7px 0;border-bottom:1px solid #f1f5f9}
.ig-n{font:700 24px/1 'Barlow Condensed',sans-serif;color:var(--c);width:34px}.ig-t{font:700 12.5px/1.3 'IBM Plex Sans',sans-serif}
.ig-c{font:500 9px/1 'IBM Plex Sans',sans-serif;color:#64748b}.dots{flex:1;border-bottom:1px solid #e2e8f0;position:relative;top:-3px}
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
.gbar{height:22px;margin:0 0 16px;background:var(--c);display:flex;align-items:center;justify-content:center;font:700 8.2px/1 'IBM Plex Sans',sans-serif;letter-spacing:.2em;text-transform:uppercase;color:#fff}
.secbody{padding:0 42px}
.sec-h{display:flex;justify-content:space-between;align-items:baseline;break-after:avoid;margin:14px 0 8px;padding:8px 12px;background:var(--c);color:#fff;font:700 13px/1.2 'IBM Plex Sans',sans-serif}
.sec-h em{font:600 9px/1 'JetBrains Mono',monospace;font-style:normal;opacity:.85}
.code{border:1px solid #d6dde6;border-top:3px solid var(--c);margin:0 0 11px;position:relative}
.code-h{display:flex;flex-wrap:wrap;align-items:center;gap:6px 10px;padding:7px 11px;background:#f8fafc;border-bottom:1px solid #e2e8f0;break-after:avoid;break-inside:avoid}
.cd{font:700 9px/1 'JetBrains Mono',monospace;background:var(--c);color:#fff;padding:4px 7px;border-radius:2px}
.code-h h4{flex:1;min-width:200px;font:700 11.6px/1.3 'IBM Plex Sans',sans-serif;color:#0f172a}
.lvs{display:flex;align-items:center;flex-wrap:wrap}
.lab{font:700 7.4px/1 'IBM Plex Sans',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:var(--c);margin-bottom:4px}
.wh{display:flex;gap:10px;padding:6px 11px;font-size:8.6px;color:#475569;border-bottom:1px solid #e2e8f0;break-inside:avoid}.wh .lab{flex:none;width:92px;margin:2px 0 0}
.wh-b{font-weight:700;color:#0f172a}.gap{color:#b91c1c;font-weight:700}
.sum{padding:7px 11px 4px}.sum ul{margin:0 0 0 13px}.sum li{margin:0 0 2.5px;font-size:9.4px;line-height:1.45}.sum li::marker{color:var(--c)}
.qs{padding:4px 11px 9px}
.q{background:#f8fafc;border:1px solid #e2e8f0;border-left:3px solid #94a3b8;padding:7px 10px;margin-top:6px;break-inside:avoid;font-size:8.9px}
.q.real{border-left-color:#1e3a8a}
.q-src{font:700 7.4px/1.2 'IBM Plex Sans',sans-serif;letter-spacing:.06em;text-transform:uppercase;color:#64748b;margin-bottom:3px}.q.real .q-src{color:#1e3a8a}
.q-stem{margin-bottom:4px;line-height:1.45}
.q-img{margin:3px 0 5px;text-align:center;break-inside:avoid}.q-img img{max-width:60%;max-height:52mm;object-fit:contain;border:1px solid #e2e8f0;border-radius:3px}.q-img figcaption{font-size:6.5px;color:#94a3b8;margin-top:2px}
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
