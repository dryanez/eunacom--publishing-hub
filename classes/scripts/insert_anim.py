"""Inserta o reemplaza la diapositiva 'En movimiento' de una clase.
    python3 classes/scripts/insert_anim.py <archivo_slides.py>
El archivo define S = {clase: {'title': ..., 'images': [{'src','label','credit'}], 'steps': [{'note','say'}]}}.
Si la clase ya tiene 'En movimiento', se reemplaza; si no, se inserta antes de 'Así se ve' (o del pathway, o al final).
'say' sin cifras ni símbolos (lo revisa check_lesson.cjs).
"""
import os, re, runpy, sys

LESSONS = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'lessons')


def q(s):
    return "'" + s.replace('\\', '\\\\').replace("'", "\\'") + "'"


def block(d):
    imgs = '\n'.join(f"        {{ src: {q(i['src'])}, label: {q(i['label'])}, credit: {q(i['credit'])} }}," for i in d['images'])
    steps = '\n'.join(f"        {{ note: {q(s['note'])},\n          say: {q(s['say'])} }}," for s in d['steps'])
    return (f"    {{\n      type: 'image',\n      layout: 'sequence',\n      kicker: 'En movimiento',\n      title: {q(d['title'])},\n"
            f"      images: [\n{imgs}\n      ],\n      steps: [\n{steps}\n      ],\n    }},\n\n")


def slide_span(src, idx):
    """Devuelve (inicio, fin) del objeto { ... } que contiene la posición idx (fin incluye ',\\n\\n')."""
    start = src.rfind('\n    {\n', 0, idx) + 1
    depth, i = 0, start
    while True:
        c = src[i]
        if c == '{': depth += 1
        elif c == '}':
            depth -= 1
            if depth == 0: break
        elif c in "'`\"":                                      # saltar strings
            j = i + 1
            while src[j] != c: j += 2 if src[j] == '\\' else 1
            i = j
        i += 1
    end = i + 1
    m = re.match(r',?[ \t]*\n(\s*\n)?', src[end:])
    return start, end + (m.end() if m else 0)


def apply(clase, d):
    path = os.path.join(LESSONS, clase + '.cjs')
    src = open(path).read()
    new = block(d)
    m = re.search(r"kicker: 'En movimiento'", src)
    if m:
        a, b = slide_span(src, m.start()); src = src[:a] + new + src[b:]; how = 'reemplazada'
    else:
        m = re.search(r"kicker: 'Así se ve'", src) or re.search(r"type: 'pathway'", src)
        if m:
            a, _ = slide_span(src, m.start()); src = src[:a] + new + src[a:]; how = 'insertada'
        else:
            a = src.rfind('\n  ],'); src = src[:a + 1] + new + src[a + 1:]; how = 'añadida al final'
    open(path, 'w').write(src)
    print(clase, how)


if __name__ == '__main__':
    S = runpy.run_path(sys.argv[1])['S']
    for k, v in S.items():
        apply(k, v)
