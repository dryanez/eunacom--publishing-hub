"""
buscar_figuras.py
Busca figuras por texto del pie, dentro de lo que extrajo extract_pdf_images.py.

    python classes/scripts/buscar_figuras.py <carpeta_salida> <libro> "<regex>" ["<regex>" ...]
    python classes/scripts/buscar_figuras.py classes/media/_candidatas derm "melanoma|nevus"

<libro> es un trozo del nombre del PDF ("" = todos). La búsqueda ignora tildes y mayúsculas.
Imprime: Fnúmero, PDF, página, número de imágenes y el pie. El Fnúmero sirve para hoja_contactos.py.
"""
import json, re, sys, unicodedata
sys.path.insert(0, __import__('os').path.dirname(__file__))
from match_images import figure_caption

def n(s):
    return ''.join(c for c in unicodedata.normalize('NFD', str(s).lower()) if unicodedata.category(c) != 'Mn')

def figuras(out):
    idx = json.load(open(out + '/index.json', encoding='utf-8'))
    figs = {}
    for r in idx:
        cap = figure_caption(r['pie'])
        f = figs.setdefault((r['pdf'], r['pagina'], cap[:60]), {'cap': cap, 'pdf': r['pdf'], 'pag': r['pagina'], 'imgs': []})
        f['imgs'].append(r['archivo'])
    return list(figs.values())

if __name__ == '__main__':
    out, book, pats = sys.argv[1], n(sys.argv[2]), sys.argv[3:]
    figs = figuras(out)
    json.dump(figs, open(out + '/figs.json', 'w', encoding='utf-8'), ensure_ascii=False)
    for pat in pats:
        rx = re.compile(n(pat))
        for i, f in enumerate(figs):
            name = f['pdf'].replace('\\', '/').split('/')[-1]
            if book in n(name) and rx.search(n(f['cap'])):
                print(f"F{i} {name[:18]} p{f['pag']} [{len(f['imgs'])}] {f['cap'][:120]}")
