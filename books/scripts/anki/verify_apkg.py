#!/usr/bin/env python3
"""verify_apkg.py <archivo.apkg> [--muestra N] [--png DIR] [--seed S]

Abre el .apkg (zip + sqlite) y reporta notas/tarjetas por modelo, subdecks, tags y media
(referenciada vs incluida). Con --muestra imprime N notas al azar en texto; con --png
además las renderiza (reverso, aproximado) a PNG con Chromium para revisarlas a ojo.
"""
import argparse
import json
import random
import re
import sqlite3
import tempfile
import zipfile
from collections import Counter
from pathlib import Path


def strip(s):
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", s)).strip()


def cloze_back(t):
    return re.sub(r"\{\{c\d+::(.+?)(?:::.*?)?\}\}", r"[\1]", t)


def render_tmpl(t, f, back):
    """Mustache mínimo de Anki: {{#X}}…{{/X}}, {{cloze:X}}, {{X}}."""
    def sec(m):
        return m.group(2) if f.get(m.group(1)) else ""
    t = re.sub(r"\{\{#(\w+)\}\}(.*?)\{\{/\1\}\}", sec, t, flags=re.S)

    def cl(m):
        v = f.get(m.group(1), "")
        if back:
            return re.sub(r"\{\{c1::(.+?)(?:::.*?)?\}\}", r'<span class="cloze">\1</span>', re.sub(r"\{\{c\d+::(.+?)(?:::.*?)?\}\}", r"\1", v.replace("{{c1::", "{{c1::", 1)) if False else v)
        return re.sub(r"\{\{c1::(.+?)(?:::(.*?))?\}\}", lambda x: '<span class="cloze">[' + (x.group(2) or "...") + "]</span>", v)
    t = re.sub(r"\{\{cloze:(\w+)\}\}", cl, t)
    t = re.sub(r"\{\{(\w+)\}\}", lambda m: f.get(m.group(1), ""), t)
    if back:
        t = re.sub(r"\{\{c1::(.+?)(?:::.*?)?\}\}", r'<span class="cloze">\1</span>', t)
        t = re.sub(r"\{\{c\d+::(.+?)(?:::.*?)?\}\}", r"\1", t)
    return t


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("apkg")
    ap.add_argument("--muestra", type=int, default=0)
    ap.add_argument("--png")
    ap.add_argument("--seed", type=int, default=7)
    a = ap.parse_args()
    tmp = Path(tempfile.mkdtemp())
    z = zipfile.ZipFile(a.apkg)
    z.extractall(tmp)
    media_map = json.loads((tmp / "media").read_text())
    names = set(media_map.values())
    import shutil
    for k, v in media_map.items():  # en el .apkg la media va con nombre numérico
        shutil.copy(tmp / k, tmp / v)
    db = sqlite3.connect(tmp / "collection.anki2")
    col = db.execute("select models, decks from col").fetchone()
    models = json.loads(col[0])
    decks = json.loads(col[1])
    mname = {int(k): v["name"] for k, v in models.items()}
    fields = {int(k): [f["name"] for f in v["flds"]] for k, v in models.items()}
    notes = db.execute("select id, mid, guid, tags, flds from notes").fetchall()
    cards = db.execute("select nid, did, ord from cards").fetchall()
    nmodel = {n[0]: n[1] for n in notes}
    print(f"Archivo: {a.apkg} ({Path(a.apkg).stat().st_size / 1e6:.1f} MB)")
    print("Notas por modelo:", dict(Counter(mname[n[1]] for n in notes)))
    print("Tarjetas por modelo:", dict(Counter(mname[nmodel[c[0]]] for c in cards)))
    print("Modelos (id fijo):", {v: k for k, v in mname.items()})
    dk = Counter(decks[str(c[1])]["name"] for c in cards)
    print(f"Subdecks: {len(dk)}")
    for d, n in sorted(dk.items()):
        print(f"  {n:4d}  {d}")
    refs = set()
    for n in notes:
        refs |= set(re.findall(r'<img src="([^"]+)"', n[4]))
    print(f"Media: {len(names)} incluidas · {len(refs)} referenciadas · faltan {len(refs - names)} · sobran {len(names - refs)}")
    sizes = [(tmp / k).stat().st_size for k in media_map] or [0]
    print(f"Media: máx {max(sizes) / 1e3:.0f} KB · media {sum(sizes) / len(sizes) / 1e3:.0f} KB")
    tags = Counter()
    for n in notes:
        for t in n[3].split():
            parts = t.split("::")
            tags["::".join(parts[:2]) if parts[1] not in ("Tipo", "Frecuencia") else "::".join(parts[:3])] += 1
    print("Tags (notas):")
    for t, c in sorted(tags.items()):
        print(f"  {c:4d}  {t}")
    print("GUID únicos:", len({n[2] for n in notes}) == len(notes))

    if a.muestra:
        random.seed(a.seed)
        sample = random.sample(notes, min(a.muestra, len(notes)))
        if a.png:
            from playwright.sync_api import sync_playwright
            import sys, os
            sys.path.insert(0, str(Path(__file__).parent))
            out = Path(a.png)
            out.mkdir(parents=True, exist_ok=True)
            css = next(iter(models.values()))["css"]
        for i, n in enumerate(sample, 1):
            f = dict(zip(fields[n[1]], n[4].split("\x1f")))
            print(f"\n── {i}. [{mname[n[1]]}] " + " ".join(t for t in n[3].split() if "Tipo" in t or "Repaso" in t))
            for k, v in f.items():
                if v and k not in ("Perfil", "Clase", "PreguntaReal"):
                    print(f"   {k}: {cloze_back(strip(v)) if k == 'Texto' else strip(v)[:240]}"
                          + ("  " + " ".join(re.findall(r'<img src="([^"]+)"', v)) if "<img" in v else ""))
        if a.png:
            with sync_playwright() as p:
                import glob
                exe = sorted(glob.glob(os.path.expanduser("~/Library/Caches/ms-playwright/chromium_headless_shell-*/*/chrome-headless-shell")))
                try:
                    br = p.chromium.launch()
                except Exception:
                    br = p.chromium.launch(executable_path=exe[-1])
                pg = br.new_page(viewport={"width": 420, "height": 800}, device_scale_factor=2)
                for i, n in enumerate(sample, 1):
                    f = dict(zip(fields[n[1]], n[4].split("\x1f")))
                    tmpl = models[str(n[1])]["tmpls"][0]
                    front = render_tmpl(tmpl["qfmt"], f, back=False)
                    back = render_tmpl(tmpl["afmt"], f, back=True)
                    page = (f'<meta charset=utf-8><style>{models[str(n[1])]["css"]}.lbl{{font:600 11px sans-serif;color:#999;margin:10px 0 2px}}</style>'
                            f'<body class="card"><div class="lbl">FRENTE</div>{front}<div class="lbl" style="border-top:3px dashed #ccc;padding-top:8px">REVERSO</div>{back}</body>')
                    hp = tmp / f"_muestra_{i:02d}.html"
                    hp.write_text(page)
                    pg.goto("file://" + str(hp), wait_until="load")
                    pg.screenshot(path=str(out / f"muestra_{i:02d}.png"), full_page=True)
                br.close()
            print(f"\nPNG en {out} (abre con base_url={tmp})")


if __name__ == "__main__":
    main()
