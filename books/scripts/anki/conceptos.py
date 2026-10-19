#!/usr/bin/env python3
"""conceptos.py — vocabulario médico del mazo: tags de concepto y glosario clicable (estilo AMBOSS).

  python3 books/scripts/anki/conceptos.py <libro>      # (re)arma books/data/anki/<libro>/_glosario.json

Fuente de términos: books/scripts/anki/vocab_<lessons_prefix>.txt  (tipo | término | alias; alias; …)
El glosario guarda, por término: tipo, alias, definición breve (sacada del libro; se edita a mano y se
conserva al regenerar), página del PDF del libro, clase y segundo del video donde se explica, y la URL AEE.
pagina/clase/t/url se recalculan siempre; "def" nunca se pisa.
"""
import json
import re
import subprocess
import sys
import unicodedata
from pathlib import Path
from urllib.parse import quote

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[2]
MAX_TAGS = 6
TIPOS = ("Concepto", "Farmaco", "Signo", "Examen")


# ───────────── normalización (1 carácter → 1 carácter, para poder subrayar el original) ─────────────
def fold(s):
    out = []
    for ch in str(s):
        d = unicodedata.normalize("NFKD", ch)
        out.append(d[0] if d else ch)
    return "".join(out)


def slug(s):
    s = unicodedata.normalize("NFKD", str(s)).encode("ascii", "ignore").decode()
    return re.sub(r"[^A-Za-z0-9]+", "_", s).strip("_")


def is_sigla(a):
    return a.upper() == a and any(c.isalpha() for c in a)


def load_vocab(libro, cfg):
    p = HERE / f"vocab_{cfg['lessons_prefix']}.txt"
    terms = []
    for line in p.read_text().splitlines():
        if not line.strip() or line.lstrip().startswith("#"):
            continue
        parts = [x.strip() for x in line.split("|")]
        tipo, term, alias = parts[:3]
        assert tipo in TIPOS, line
        al = [a.strip() for a in alias.split(";") if a.strip()]
        terms.append({"key": slug(term), "termino": term, "tipo": tipo, "alias": list(dict.fromkeys(al)),
                      "clase": parts[3] if len(parts) > 3 and parts[3] else None})  # 4.ª columna opcional: clase "casa"
    return terms


class Matcher:
    """Busca los términos en un texto. Devuelve [(key, ini, fin)] sin solapes, prefiriendo el alias más largo."""

    def __init__(self, terms):
        pats = []
        for t in terms:
            for a in t["alias"]:
                pats.append((len(a), t["key"], a))
        pats.sort(key=lambda x: -x[0])
        self.rx = []
        for _, key, a in pats:
            fa = re.escape(fold(a))
            if is_sigla(a):
                rx = re.compile(r"(?<![A-Za-z0-9])" + fa + r"(?![A-Za-z0-9])")
            else:
                rx = re.compile(r"(?<![A-Za-z0-9])" + fa + r"(?:s|es)?(?![A-Za-z0-9])", re.I)
            self.rx.append((key, rx))

    def find(self, text):
        f = fold(re.sub(r"<[^>]+>", lambda m: " " * len(m.group(0)), text or ""))
        f = re.sub(r"\{\{c\d+::|::[^}]*\}\}|\}\}", lambda m: " " * len(m.group(0)), f)
        taken, out = [], []
        for key, rx in self.rx:
            for m in rx.finditer(f):
                if any(m.start() < e and s < m.end() for s, e in taken):
                    continue
                taken.append((m.start(), m.end()))
                out.append((key, m.start(), m.end()))
        return sorted(out, key=lambda x: x[1])

    def keys(self, text):
        return list(dict.fromkeys(k for k, _, _ in self.find(text)))


# ───────────── PDF del libro → páginas por tema ─────────────
def pdf_pages(pdf):
    raw = subprocess.run(["pdftotext", "-layout", str(pdf), "-"], capture_output=True, text=True, check=True).stdout
    pages = raw.split("\f")
    out, cur = [], None
    for i, p in enumerate(pages, 1):
        m = re.search(r"TEMA\s+(\d+\.\d+)", p[:400])
        if m:
            cur = m.group(1)
        elif re.search(r"B\s*L\s*O\s*Q\s*U\s*E|ÍNDICE|Índice", p[:400]):
            cur = None
        p = re.sub(r"(\w)[-\u00ad]\s*\n\s*([a-záéíóúñ])", r"\1\2", p)  # palabras cortadas al final de línea
        out.append((i, cur, re.sub(r"\s+", " ", p)))
    return out


def mmss(t):
    t = int(round(t or 0))
    return f"{t // 60}:{t % 60:02d}"


def clase_url(reg, libro, cfg, cid, t):
    tpl = reg["_url_clase"]
    return tpl.format(subsystem=quote(cfg.get("app_subsystem", cfg["nombre"])), classId=cid, t=int(t or 0), libro=libro)


def embed_url(reg, cid, t):
    """Reproductor AEE embebible (iframe dentro de la tarjeta) en el segundo t."""
    return reg["_embed_clase"].format(classId=cid, t=int(t or 0))


def best_slide(fuente, matcher_or_none, text, key=None):
    """Diapositiva de la clase que mejor calza con `text` (o que menciona el término `key`). → (idx, start) | (None, 0)."""
    st = fuente.get("slideTimes") or {}
    texts = fuente.get("slideText") or []
    if not st or not texts:
        return None, 0
    words = {w for w in re.findall(r"[a-z0-9]{4,}", fold(text).lower())}
    best, score = None, 0
    for i, s in enumerate(texts):
        if str(i) not in st:
            continue
        fs = fold(s).lower()
        sw = set(re.findall(r"[a-z0-9]{4,}", fs))
        sc = len(words & sw)
        if key and matcher_or_none is not None:
            sc += 5 * sum(1 for k in matcher_or_none.keys(s) if k == key)
        if sc > score:
            best, score = i, sc
    if best is None:
        return None, 0
    return best, st[str(best)]["start"]


# ───────────── glosario ─────────────
def build_glossary(libro, write=True):
    reg = json.loads((HERE / "libros.json").read_text())
    cfg = reg[libro]
    base = ROOT / "books" / "data" / "anki" / libro
    fuentes = json.loads((base / "_fuentes" / "fuentes.json").read_text())["temas"]
    terms = load_vocab(libro, cfg)
    M = Matcher(terms)
    gpath = base / "_glosario.json"
    old = json.loads(gpath.read_text())["terminos"] if gpath.exists() else {}

    # uso en tarjetas (solo se publican términos que aparecen en alguna nota)
    uso = {}
    for cid in fuentes:
        f = base / f"{cid}.json"
        if not f.exists():
            continue
        d = json.loads(f.read_text())
        for c in d.get("cards", []):
            txt = " ".join(str(c.get(k, "")) for k in ("texto", "extra", "diagnostico", "clave", "conducta"))
            for k in M.keys(txt):
                uso[k] = uso.get(k, 0) + 1

    pages = [(i, tl, M.keys(txt)) for i, tl, txt in pdf_pages(ROOT / cfg["libro_pdf"])]
    label_by_cid = {cid: m["topicLabel"] for cid, m in fuentes.items()}
    # conteo de menciones por clase (libro + diapositivas) y por diapositiva — una sola pasada
    cnt, slide_keys = {}, {}
    for cid, m in fuentes.items():
        txt = " ".join([s["title"] + " " + s["text"] for s in m.get("sections", [])] + m.get("keyPoints", []) +
                       (m.get("slideText") or []))
        c = {}
        for kk, _, _ in M.find(txt):
            c[kk] = c.get(kk, 0) + 1
        for kk in M.keys(m["title"]):
            c[kk] = c.get(kk, 0) + 10
        cnt[cid] = c
        slide_keys[cid] = [M.find(st) for st in (m.get("slideText") or [])]
    order = list(fuentes)
    out = {}
    for t in terms:
        k = t["key"]
        if not uso.get(k):
            continue
        score = {cid: c[k] for cid, c in cnt.items() if c.get(k)}
        cid = t["clase"] or (max(score, key=lambda c: (score[c], -order.index(c))) if score else None)
        idx, start = None, 0
        if cid:
            st = fuentes[cid].get("slideTimes") or {}
            best = 0
            for i, found in enumerate(slide_keys[cid]):
                n = sum(1 for kk, _, _ in found if kk == k)
                if n > best and str(i) in st:
                    idx, best = i, n
            if idx is not None:
                start = st[str(idx)]["start"]
        lab = label_by_cid.get(cid)
        pg = next((i for i, tl, ks in pages if tl == lab and k in ks), None)
        if pg is None:  # no se leyó en el PDF (columnas / palabra cortada): primera página del tema
            pg = next((i for i, tl, ks in pages if tl == lab), None)
        if pg is None:
            pg = next((i for i, tl, ks in pages if i > 4 and k in ks), None)
        if not cid:
            continue
        video = bool(fuentes[cid].get("video") and fuentes[cid].get("slideTimes"))
        prev = old.get(k, {})
        out[k] = {
            "termino": t["termino"], "tipo": t["tipo"], "alias": t["alias"],
            "def": prev.get("def", ""),
            "pagina": pg, "clase": cid,
            "claseTitulo": f"{fuentes[cid]['topicLabel']} {fuentes[cid]['title']}" if cid else None,
            "diapositiva": idx, "t": round(start, 1) if video else None, "mmss": mmss(start) if video else None,
            "url": clase_url(reg, libro, cfg, cid, start),
            "embed": embed_url(reg, cid, start) if video else None,
            "notas": uso[k],
        }
    doc = {"_doc": "Glosario clicable del mazo Anki (popover en el reverso). 'def' se escribe a mano desde el libro "
                   "(sin cifras nuevas) y se conserva al regenerar; pagina/clase/t/url los recalcula conceptos.py. "
                   "Términos y alias: books/scripts/anki/vocab_*.txt.",
           "libro": libro, "pdf": cfg["libro_pdf"], "terminos": out}
    if write:
        gpath.write_text(json.dumps(doc, ensure_ascii=False, indent=1) + "\n")
    return doc, terms, M


def concept_tags(M, terms_by_key, text, extra_text=""):
    """Hasta MAX_TAGS tags AEE_V3::<Tipo>::<Termino> (primero lo del texto de la tarjeta, luego títulos de sección)."""
    keys = list(dict.fromkeys(M.keys(text) + M.keys(extra_text)))[:MAX_TAGS]
    return [f"AEE_V3::{terms_by_key[k]['tipo']}::{k}" for k in keys]


if __name__ == "__main__":
    doc, _, _ = build_glossary(sys.argv[1])
    T = doc["terminos"]
    sin_def = [k for k, v in T.items() if not v["def"]]
    print(f"glosario: {len(T)} términos · sin definición {len(sin_def)} · sin página "
          f"{sum(1 for v in T.values() if not v['pagina'])}")
