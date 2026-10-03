"""
match_images.py
Segundo paso después de extract_pdf_images.py: para cada imagen que pide una clase en
classes/docs/PLAN_IMAGENES.md (cada ítem por separado: "mácula", "pápula", "neumotórax"…),
busca las mejores figuras del índice usando el pie de figura, y solo en los libros de esa especialidad.

    python classes/scripts/match_images.py <carpeta_salida_de_extract> [--top 3]

Escribe en esa carpeta:
    needs.json          un registro por ítem pedido: clase, nivel, tipo, ítem, candidatas con puntaje
    coverage.csv        resumen por clase: ítems pedidos / ítems con candidata
"""

import argparse
import csv
import json
import re
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
PLAN = ROOT / 'classes' / 'docs' / 'PLAN_IMAGENES.md'

# Libros fuente por prefijo de clase (fragmentos del nombre del PDF, sin tildes, en minúscula).
BOOKS = {
    'gastro': ['digestivo', 'c general', 'cirugia general', 'radiologia', 'pediatria'],
    'resp': ['neumologia', 'radiologia', 'derrame pleural'],
    'nefro': ['nefrologia', 'mnnfmir', 'ekg', 'urologia', 'uro'],
    'diab': ['endocrinologia', 'endocrino', 'mnedmir', 'oftalmologia', 'ekg', 'dermatologia', 'derma', 'cirugia general'],
    'endo': ['endocrinologia', 'endocrino', 'mnedmir', 'radiologia', 'ekg'],
    'hem': ['hematologia', 'hemato', 'mnhmmir', 'anatomia patologica', 'radiologia'],
    'infecto': ['enfermedades infecciosas', 'infecciosas', 'mnifmir', 'dermatologia', 'derma', 'pediatria', 'radiologia'],
    'reuma': ['reumatologia', 'reuma', 'radiologia', 'dermatologia', 'derma'],
    'neuro': ['neurologia', 'radiologia', 'geriatria', 'traumatologia', 'oftalmologia'],
    'cirugia': ['cirugia general', 'c general', 'digestivo', 'radiologia', 'urgencias', 'traumatologia', 'neurologia', 'dermatologia'],
    'derma': ['dermatologia', 'derma'],
    'oftal': ['oftalmologia'],
    'gin': ['ginecologia y obstetricia', 'gin obs', 'radiologia'],
    'ob': ['ginecologia y obstetricia', 'gin obs', 'radiologia'],
    'ped': ['pediatria', 'radiologia', 'traumatologia'],
    'sp': ['epidemiologia', 'esta', 'mnetmir', 'medicina familiar', 'bioetica'],
}

# Cómo se nombra cada tipo de imagen en un pie de figura.
TYPE_WORDS = {
    'RX': ['radiografia', 'rx', 'radiologico'], 'TAC': ['tc', 'tac', 'tomografia'], 'RM': ['rm', 'resonancia'],
    'ECO': ['ecografia', 'ecografico', 'ecografica', 'doppler'], 'ECG': ['ecg', 'electrocardiograma', 'derivaciones'],
    'FONDO': ['fondo', 'retinografia', 'funduscopia', 'papila', 'retina'], 'CTG': ['registro', 'cardiotocografico', 'monitorizacion'],
    'FROTIS': ['frotis', 'sangre', 'periferica', 'microscopia', 'histologico', 'tincion', 'biopsia'],
    'ENDO': ['endoscopia', 'endoscopica', 'colonoscopia', 'gastroscopia'], 'MAMOGRAFIA': ['mamografia'],
    'DOPPLER': ['doppler'], 'AngioTAC': ['angiotc', 'angiografia'], 'CURVA': ['curva', 'grafico', 'evolucion'],
    'EEG': ['eeg', 'electroencefalograma'],
}

STOP = set('''de la el los las del y o en con por para un una al a se que su sus vs no es mas entre sin como
foto rx tac rm eco ecg ctg fondo frotis curva esquema reusar ver tipo tipos signo grados clase clases
figura imagen imagenes paciente pacientes caso casos tipico tipica clasico clasica forma formas'''.split())

# Sinónimos: palabra del plan → palabras que pueden aparecer en el pie.
SYN = {
    'neumotorax': ['neumotorax'], 'derrame': ['derrame'], 'consolidacion': ['consolidacion', 'condensacion', 'neumonia'],
    'cavitacion': ['cavitacion', 'cavitada', 'caverna', 'cavidad'], 'hidroaereo': ['hidroaereo', 'hidroaereos'],
    'hiperinsuflacion': ['hiperinsuflacion', 'atrapamiento', 'epoc', 'enfisema'], 'panal': ['panal', 'fibrosis'],
    'neumoperitoneo': ['neumoperitoneo', 'aire', 'subdiafragmatico'], 'esquistocitos': ['esquistocitos', 'esquistocito'],
    'blastos': ['blastos', 'blasto', 'leucemia'], 'auer': ['auer'], 'hipersegmentado': ['hipersegmentado', 'megaloblastica'],
    'esferocitos': ['esferocitos', 'esferocitosis'], 'drepanocitos': ['drepanocitos', 'falciforme', 'drepanocitosis'],
    'dianocitos': ['dianocitos', 'talasemia'], 'liticas': ['liticas', 'osteoliticas', 'saca', 'mieloma'],
    'excavacion': ['excavacion', 'glaucoma'], 'cereza': ['cereza', 'oclusion', 'arteria'],
    'drusas': ['drusas', 'dmae', 'degeneracion'], 'dendritica': ['dendritica', 'herpetica'],
    'heliotropo': ['heliotropo', 'dermatomiositis'], 'gottron': ['gottron', 'dermatomiositis'],
    'esclerodactilia': ['esclerodactilia', 'esclerodermia', 'esclerosis'], 'mariposa': ['mariposa', 'malar', 'lupus'],
    'tofos': ['tofos', 'tofo', 'gota'], 'osteofitos': ['osteofitos', 'artrosis'], 'sacroilitis': ['sacroilitis', 'sacroiliaca'],
    'bambu': ['bambu', 'espondilitis', 'anquilosante'], 'habones': ['habones', 'habon', 'urticaria'],
    'diana': ['diana', 'multiforme'], 'ampolla': ['ampolla', 'ampollas', 'penfigo', 'penfigoide'],
    'chancro': ['chancro', 'sifilis'], 'condiloma': ['condiloma', 'condilomas'], 'koplik': ['koplik', 'sarampion'],
    'kaposi': ['kaposi'], 'candidiasis': ['candidiasis', 'muguet'], 'hidatidico': ['hidatidico', 'hidatidosis', 'hidatide'],
    'epidural': ['epidural'], 'subdural': ['subdural'], 'hiperdensidad': ['hiperdensidad', 'hemorragia', 'hematoma'],
    'hipodensidad': ['hipodensidad', 'infarto', 'isquemico'], 'placas': ['placas', 'desmielinizantes', 'esclerosis'],
    'acantosis': ['acantosis'], 'xantelasma': ['xantelasma', 'xantomas', 'xantoma'], 'wagner': ['wagner', 'pie', 'diabetico'],
    'microaneurismas': ['microaneurismas', 'retinopatia'], 'cushing': ['cushing', 'estrias'], 'acromegalia': ['acromegalia'],
    'oftalmopatia': ['oftalmopatia', 'exoftalmos', 'graves'], 'trousseau': ['trousseau', 'chvostek'],
    'picudas': ['picudas', 'hiperpotasemia', 'hiperkalemia'], 'onda': ['onda'], 'hipokalemia': ['hipopotasemia', 'hipokalemia'],
    'melanoma': ['melanoma'], 'basocelular': ['basocelular'], 'espinocelular': ['espinocelular', 'epidermoide'],
    'queratosis': ['queratosis', 'actinica'], 'psoriasis': ['psoriasis'], 'acne': ['acne', 'comedones'],
    'rosacea': ['rosacea', 'rinofima'], 'alopecia': ['alopecia', 'areata', 'androgenetica'], 'tina': ['tina', 'dermatofitosis'],
    'escabiosis': ['escabiosis', 'sarna'], 'pitiriasis': ['pitiriasis', 'versicolor'], 'hipema': ['hipema'],
    'chalazion': ['chalazion'], 'orzuelo': ['orzuelo'], 'mola': ['mola', 'molar'], 'ectopico': ['ectopico'],
    'translucencia': ['translucencia', 'nucal'], 'invaginacion': ['invaginacion'], 'piloro': ['piloro', 'pilorica'],
    'burbuja': ['burbuja', 'duodenal'], 'neumatosis': ['neumatosis', 'enterocolitis'], 'pila': ['pila', 'boton'],
    'pico': ['pico', 'acalasia'], 'colelitiasis': ['colelitiasis', 'litiasis', 'vesicula', 'calculo'],
    'mamografia': ['mamografia', 'microcalcificaciones'], 'colposcopia': ['colposcopia', 'acetoblanco'],
    'zoster': ['zoster', 'herpes'], 'varicela': ['varicela'], 'erisipela': ['erisipela', 'celulitis'],
}

TYPE_RE = re.compile(r'\b(FOTO|RX|TAC/RM|TAC|RM|ECO|ECG|CTG|FONDO|FROTIS|CURVA|ESQUEMA|ENDO|MAMOGRAF[IÍ]A|DOPPLER|AngioTAC|AngioTAC/RM|EEG|ECO-FAST|RX/TAC|RX/ECO|FOTO/ESQUEMA|ECO/TAC|ECO Doppler|ENDO/ESQUEMA|ENDO/RX|RX/FOTO|TAC/ESQUEMA|RX/RM|ECO/RX|FOTO/ECO|ESQUEMA/FOTO|FOTO/RX|Informe DEXA|Formulario)\b:?')


def norm(s):
    s = unicodedata.normalize('NFD', str(s or '').lower())
    s = ''.join(c for c in s if unicodedata.category(c) != 'Mn')
    return re.sub(r'[^a-z0-9 ]+', ' ', s)


def words(s):
    return {w for w in norm(s).split() if len(w) > 3 and w not in STOP}


def expand(ws):
    out = set(ws)
    for w in ws:
        out.update(SYN.get(w, []))
    return out


CAPTION_RE = re.compile(r'(?:Figura|Fig\.|Imagen)\s*\d+(?:\.\d+)?\.\s+[A-ZÁÉÍÓÚÑ¿(].{0,240}?(?= \| |$)')


def figure_caption(pie):
    """El pie real ("Figura 10.1. Acné papulopustuloso…"), no una referencia en el texto ("Figura 10.1), espalda…")."""
    pie = pie or ''
    m = CAPTION_RE.search(pie)
    if m:
        return m.group(0)
    m = re.search(r'(Figura|Fig\.|Imagen)\s*[\d.]+.{0,200}', pie, re.I)
    return m.group(0) if m else pie[:200]


def parse_needs():
    needs = []
    for line in PLAN.read_text(encoding='utf-8').splitlines():
        m = re.match(r'\| ([a-z]+-\d\d) \| ([^|]*)\| (★★★|★★|★) \| ([^|]*)\|', line)
        if not m:
            continue
        cid, tema, nivel, imagen = (g.strip() for g in m.groups())
        if not imagen or imagen.startswith('(ver') or imagen.startswith('(18'):
            continue
        cur_type = 'FOTO'
        for chunk in re.split(r';', imagen):
            chunk = chunk.strip()
            tm = TYPE_RE.match(chunk)
            if tm:
                cur_type = tm.group(1).split('/')[0].replace('ECO-FAST', 'ECO')
                chunk = chunk[tm.end():].strip()
            reuse = re.search(r'reusar ([a-z]+-\d\d)', chunk)
            chunk = re.sub(r'\(reusar [^)]*\)', '', chunk).strip()
            items = [c.strip() for c in re.split(r',| vs |/(?!\w+\))', chunk) if c.strip()] or [chunk or tema]
            for it in items:
                needs.append({'clase': cid, 'tema': tema, 'nivel': nivel, 'tipo': cur_type, 'item': it,
                              'reusar': reuse.group(1) if reuse else None})
    return needs


def book_ok(pdf, prefix):
    name = norm(Path(pdf).stem)
    return any(b in name for b in BOOKS.get(prefix, []))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('out')
    ap.add_argument('--top', type=int, default=3)
    a = ap.parse_args()
    out = Path(a.out)
    index = json.loads((out / 'index.json').read_text(encoding='utf-8'))
    for r in index:
        r['_cap'] = figure_caption(r['pie'])
        r['_capw'] = words(r['_cap'])
        r['_head'] = words(r['texto_pagina'][:300])

    needs = parse_needs()
    for n in needs:
        prefix = n['clase'].split('-')[0]
        item_kw = expand(words(n['item']))
        tema_kw = expand(words(n['tema']))
        type_kw = set(TYPE_WORDS.get(n['tipo'], []))
        scored = []
        if n['tipo'] in ('ESQUEMA', 'CURVA', 'CTG', 'ECG') and not item_kw:
            n['candidatas'] = []
            continue
        for r in index:
            if not book_ok(r['pdf'], prefix):
                continue
            hit_item = len(item_kw & r['_capw'])
            if not hit_item:
                continue
            s = 4 * hit_item + 2 * len(tema_kw & r['_capw']) + len(tema_kw & r['_head'])
            if type_kw & r['_capw']:
                s += 3
            if r['ancho'] and r['ancho'] * r['alto'] < 60000:
                s -= 3
            scored.append((s, r))
        scored.sort(key=lambda t: -t[0])
        n['candidatas'] = [{'puntaje': s, 'archivo': r['archivo'], 'pdf': Path(r['pdf']).name, 'pagina': r['pagina'],
                            'pie': r['_cap'][:240]} for s, r in scored[:a.top] if s >= 7]

    (out / 'needs.json').write_text(json.dumps(needs, ensure_ascii=False, indent=1), encoding='utf-8')
    by = {}
    for n in needs:
        b = by.setdefault(n['clase'], {'nivel': n['nivel'], 'items': 0, 'con': 0})
        b['items'] += 1
        b['con'] += bool(n['candidatas'])
    with open(out / 'coverage.csv', 'w', newline='', encoding='utf-8') as f:
        w = csv.writer(f)
        w.writerow(['clase', 'nivel', 'items_pedidos', 'items_con_candidata'])
        for c, b in by.items():
            w.writerow([c, b['nivel'], b['items'], b['con']])
    tot = len(needs); con = sum(bool(n['candidatas']) for n in needs)
    full = sum(b['con'] == b['items'] for b in by.values()); some = sum(b['con'] > 0 for b in by.values())
    print(f'{tot} ítems pedidos en {len(by)} clases · {con} con candidata')
    print(f'clases con todo cubierto: {full} · con algo: {some} · sin nada: {len(by) - some}')


if __name__ == '__main__':
    main()
