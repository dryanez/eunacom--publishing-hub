"""Busca y baja ilustraciones de Servier Medical Art (CC BY 4.0) para las escenas JS.
    python3 classes/scripts/jsvideo/servier.py buscar podocyte
    python3 classes/scripts/jsvideo/servier.py bajar <url de smart_image o png> [carpeta]
Crédito obligatorio: 'Servier Medical Art (smart.servier.com), CC BY 4.0'."""
import sys, re, os, urllib.request, html
UA = {'User-Agent': 'Mozilla/5.0'}
import time
def get(u):
    for i in range(5):                                   # Servier corta la conexión si se le pide muy rápido
        try:
            b = urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=40).read()
            if b: time.sleep(0.6); return b
        except Exception as e:
            if i == 4: raise
        time.sleep(2 * (i + 1))
    return b
DEST = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'assets', 'servier')

def buscar(q):
    s = get('https://smart.servier.com/?s=' + urllib.parse.quote(q)).decode('utf8', 'ignore')
    pages = sorted(set(re.findall(r'https://smart.servier.com/smart_image/[^"/]+/', s)))
    imgs = sorted(set(re.sub(r'-\d+x\d+(\.\w+)$', r'\1', u) for u in re.findall(r'https://smart.servier.com/wp-content/uploads/[^"\s]+?\.(?:png|jpg)', s)))
    for p in pages: print('pag', p)
    for i in imgs: print('img', i)

def bajar(u, dest=DEST):
    os.makedirs(dest, exist_ok=True)
    if '/smart_image/' in u:
        s = get(u).decode('utf8', 'ignore')
        cands = [re.sub(r'-\d+x\d+(\.\w+)$', r'\1', x) for x in re.findall(r'https://smart.servier.com/wp-content/uploads/[^"\s]+?\.png', s)]
        cands = [c for c in dict.fromkeys(cands) if 'Logo' not in c]
    else:
        cands = [u]
    for c in cands:
        f = os.path.join(dest, html.unescape(os.path.basename(c)))
        if not os.path.exists(f) or os.path.getsize(f) == 0: open(f, 'wb').write(get(c))
        print(f)

if __name__ == '__main__':
    import urllib.parse
    {'buscar': lambda: buscar(' '.join(sys.argv[2:])), 'bajar': lambda: bajar(*sys.argv[2:])}[sys.argv[1]]()
