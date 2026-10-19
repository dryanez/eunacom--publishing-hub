#!/usr/bin/env python3
"""validate_cards.py <libro> [classId ...]

Valida books/data/anki/<libro>/<classId>.json contra el esquema y contra las fuentes
(books/data/anki/<libro>/_fuentes, generado por extract_sources.cjs):
  - ids únicos, modelo válido, sintaxis cloze, máx. 3 clozes por nota
  - imagen existe entre las fotos del tema; nodo de occlusion existe en el algoritmo
  - toda cifra (número) de texto/extra aparece en el digest del tema (anti-invención)
Sale con código 1 si hay ERRORES; las ADVERTENCIAS no bloquean.
"""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
TIPOS = {"Cifra", "Farmaco", "Imagen", "Algoritmo", "Trampa", "GES", "Concepto"}
CLOZE_RE = re.compile(r"\{\{c(\d+)::(.+?)(?:::(.*?))?\}\}", re.S)
NUM_RE = re.compile(r"\d+(?:[.,]\d+)?")


def norm_num(s):
    return s.replace(",", ".")


def validate(libro, only=None, quiet=False):
    base = ROOT / "books" / "data" / "anki" / libro
    fuentes = json.loads((base / "_fuentes" / "fuentes.json").read_text())["temas"]
    errors, warns, total = [], [], 0
    for cid, meta in fuentes.items():
        if only and cid not in only:
            continue
        f = base / f"{cid}.json"
        if not f.exists():
            warns.append(f"{cid}: sin archivo de tarjetas")
            continue
        try:
            data = json.loads(f.read_text())
        except Exception as e:  # noqa
            errors.append(f"{cid}: JSON inválido: {e}")
            continue
        digest = (base / "_fuentes" / f"{cid}.md").read_text()
        nums_src = {norm_num(n) for n in NUM_RE.findall(digest)}
        photos = {p["src"] for p in meta["photos"] if p.get("existe")}
        nodes = {n["id"] for n in (meta.get("pathway") or {}).get("nodes", [])}
        ids = set()
        for c in data.get("cards", []):
            total += 1
            cidc = c.get("id")
            tag = f"{cid}/{cidc}"
            if not cidc or cidc in ids:
                errors.append(f"{tag}: id vacío o repetido")
            ids.add(cidc)
            m = c.get("modelo")
            if c.get("tipo") not in TIPOS:
                errors.append(f"{tag}: tipo inválido {c.get('tipo')}")
            if c.get("imagen") and c["imagen"] not in photos:
                errors.append(f"{tag}: imagen no está entre las fotos del tema: {c['imagen']}")
            org = c.get("origen") or ""
            if m == "cloze" and not re.fullmatch(r"libro:(tabla|puntos|caso|sec:\d+)|clase:\d+|algoritmo|foto|pregunta_real", org):
                errors.append(f"{tag}: origen inválido «{org}»")
            if org == "foto" and not c.get("imagen"):
                errors.append(f"{tag}: origen foto sin imagen")
            if m == "cloze":
                t = c.get("texto", "")
                cl = CLOZE_RE.findall(t)
                if not cl:
                    errors.append(f"{tag}: cloze sin {{{{c1::…}}}}")
                n = len({x[0] for x in cl})
                if n > 3:
                    errors.append(f"{tag}: {n} clozes distintos (máx. 3)")
                if t.count("{{") != t.count("}}"):
                    errors.append(f"{tag}: llaves desbalanceadas")
                if len(re.sub(r"<[^>]+>", "", t)) > 320:
                    warns.append(f"{tag}: texto largo ({len(t)} car.)")
            elif m == "imagen":
                for k in ("imagen", "diagnostico", "conducta"):
                    if not c.get(k):
                        errors.append(f"{tag}: falta {k}")
            else:
                errors.append(f"{tag}: modelo inválido {m}")
            txt = " ".join(str(c.get(k, "")) for k in ("texto", "extra", "diagnostico", "clave", "conducta"))
            txt = re.sub(r"\{\{c\d+::", " ", txt)
            for n in NUM_RE.findall(txt):
                if norm_num(n) not in nums_src:
                    warns.append(f"{tag}: cifra «{n}» no aparece en las fuentes del tema")
        for o in data.get("occlusion", []):
            total += 1
            tag = f"{cid}/{o.get('id')}"
            if o.get("id") in ids:
                errors.append(f"{tag}: id repetido")
            ids.add(o.get("id"))
            if o.get("nodo") not in nodes:
                errors.append(f"{tag}: nodo {o.get('nodo')} no existe en el algoritmo")
    if not quiet:
        for e in errors:
            print("ERROR", e)
        for w in warns:
            print("ADV  ", w)
        print(f"{total} tarjetas · {len(errors)} errores · {len(warns)} advertencias")
    return errors, warns


if __name__ == "__main__":
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    errs, _ = validate(sys.argv[1], set(sys.argv[2:]) or None)
    sys.exit(1 if errs else 0)
