"""Chequeo cruzado banco (books/data/real_questions_by_code.json) vs reconstrucciones de la app (solo lectura).
Escribe classes/docs/audit_banco/BANCO_VS_APP.md.   python3 -I books/scripts/banco_vs_app.py"""
import json, re, glob, os, difflib, unicodedata
from pathlib import Path
ROOT = Path(__file__).resolve().parents[2]
BANK = ROOT / "books/data/real_questions_by_code.json"
OUT = ROOT / "classes/docs/audit_banco/BANCO_VS_APP.md"
A = os.path.expanduser("~/Desktop/NEWeunacom/eunacom-app-v2/public/data/reconstrucciones/")
MES = {"jul": "Julio", "dic": "Diciembre", "ago": "Agosto", "ene": "Enero"}
def tag_of(fn):
    b = os.path.basename(fn)[8:-5]; m = re.match(r"(\w+)-(\d{4})", b)
    return f"EUNACOM {MES[m.group(1)]} {m.group(2)}" if m else f"EUNACOM {'Julio' if b == '2013' else 'Diciembre'} {b}"
LIG = (("ﬁ","fi"),("ﬂ","fl"),("ﬀ","ff"),("ﬃ","ffi"),("ﬄ","ffl"))
def clean(s):
    s = re.sub(r"^\s*Pregunta\s+\d+\s*", "", s or "")
    s = re.sub(r"^\s*(Sin contestar\s*)?(Puntúa como [\d,\.]+\s*)?(Marcar pregunta\s*)?", "", s)
    s = s.replace("​", "").replace("\f", " ").replace("­", "")
    for a, b in LIG: s = s.replace(a, b)
    s = re.sub(r"(?<=[a-záéíóúñ])2(?=[a-záéíóúñ])", "ti", s)
    s = re.sub(r"(?<=[a-záéíóúñ]):(?=[a-záéíóúñ])", "fi", s)
    return re.sub(r"\s+", " ", s).strip()
def words(s): return re.sub(r"[^\wáéíóúñü]+", " ", clean(s).lower()).split()
def realdiff(a, b):
    X, Y = words(a), words(b); out = []
    for op, i1, i2, j1, j2 in difflib.SequenceMatcher(None, X, Y, autojunk=False).get_opcodes():
        if op == "equal": continue
        x, y = X[i1:i2], Y[j1:j2]
        if op == "replace" and len(x) == len(y) and all(difflib.SequenceMatcher(None, p, q).ratio() >= 0.5 for p, q in zip(x, y)): continue
        if len(x) + len(y) <= 1: continue
        out.append((" ".join(x), " ".join(y)))
    return out
app = {}
for f in sorted(glob.glob(A + "eunacom-*.json")):
    app[tag_of(f)] = {q["id"]: q for q in json.load(open(f))["questions"]}
bank = json.load(open(BANK))
bt = {}
for code, qs in bank.items():
    for q in qs:
        t, n = q["recTag"].rsplit(" · Pregunta ", 1); bt.setdefault(t, {})[int(n)] = (code, q)
def cut(s, n=140): s = re.sub(r"\s+", " ", s or ""); return (s[:n] + "…") if len(s) > n else s
expl, unk, stems, opts, cover = [], [], [], [], []
tot = {}
for t in sorted(app, key=lambda t: (int(t[-4:]), t)):
    tot[t] = [len(app[t]), len(bt.get(t, {}))]
    for n, aq in sorted(app[t].items()):
        if n not in bt.get(t, {}): cover.append(f"- {t} · Pregunta {n}: está en la app y falta en el banco"); continue
        code, bq = bt[t][n]; au = bq.get("audit") or {}
        ak, bk = aq["correctAnswer"].upper(), bq["correcta"]
        if ak != bk:
            row = (t, n, code, ak, bk, au)
            (expl if au.get("clave_original") == ak else unk).append(row)
        d = realdiff(aq["question"], bq["stem"])
        if d: stems.append((t, n, code, d, aq, bq))
        ao = [re.sub(r"^\s*[a-eA-E]\s*[\.\)]\s*", "", o) for o in aq["options"]]
        bo = [o["text"] for o in bq["options"]]
        if len(ao) != len(bo): opts.append((t, n, code, f"nº de alternativas: app {len(ao)} / banco {len(bo)}"))
        else:
            dd = [f"{'ABCDE'[i]}: app «{cut(x,70)}» / banco «{cut(y,70)}»" for i, (x, y) in enumerate(zip(ao, bo)) if realdiff(x, y)]
            if dd: opts.append((t, n, code, "; ".join(dd[:3]) + (f" (+{len(dd)-3} más)" if len(dd) > 3 else "")))
    for n in bt.get(t, {}):
        if n not in app[t]: cover.append(f"- {t} · Pregunta {n}: está en el banco y no existe en la app")
L = ["# Banco vs app (chequeo cruzado)", "",
    "Generado con `python3 -I books/scripts/banco_vs_app.py`: compara, pregunta a pregunta (mismo número), el banco `books/data/real_questions_by_code.json` con las reconstrucciones de la app (`eunacom-app-v2/public/data/reconstrucciones/*.json`, solo lectura). Clave = letra correcta; enunciado/alternativas se comparan sin ruido de plataforma («Sin contestar / Puntúa como…») ni ligaduras rotas.", "",
    "## Resumen", "", "| Examen | App | Banco |", "|---|---|---|"]
for t, (a, b) in tot.items(): L.append(f"| {t[8:]} | {a} | {b} |")
L += ["", f"- Claves distintas: **{len(expl)+len(unk)}** (corregidas por el audit: **{len(expl)}**; origen desconocido: **{len(unk)}**).",
      f"- Enunciados con diferencia real: **{len(stems)}**. Alternativas con diferencia real: **{len(opts)}**. Cobertura distinta: **{len(cover)}**.", "",
      "## 1. Clave distinta porque el audit la corrigió en el banco (`audit.clave_original` = clave de la app)", "",
      "| Pregunta | Código | App | Banco (corregida) | Confianza | Motivo |", "|---|---|---|---|---|---|"]
for t, n, c, ak, bk, au in expl: L.append(f"| {t[8:]} · P{n} | {c} | {ak} | {bk} | {au.get('confianza','')} | {cut(au.get('motivo'),150)} |")
L += ["", "## 2. Clave distinta de origen desconocido (sin `clave_original` que lo explique)", "",
      "| Pregunta | Código | App | Banco | Audit en banco |", "|---|---|---|---|---|"]
for t, n, c, ak, bk, au in unk:
    a = f"{au.get('estado','—')} ({au.get('confianza','')}), propone {au.get('propuesta','')}: {cut(au.get('motivo'),110)}" if au else "sin audit"
    L.append(f"| {t[8:]} · P{n} | {c} | {ak} | {bk} | {a} |")
L += ["", "## 3. Enunciado distinto (diferencias de palabras, no de formato)", ""]
for t, n, c, d, aq, bq in stems:
    L.append(f"- **{t[8:]} · P{n}** ({c}): " + " | ".join(f"app «{cut(x,90)}» → banco «{cut(y,90)}»" for x, y in d[:2]))
L += ["", "## 4. Alternativas distintas", ""]
for t, n, c, s in opts: L.append(f"- **{t[8:]} · P{n}** ({c}): {s}")
L += ["", "## 5. Cobertura", ""] + (cover or ["(sin diferencias)"])
OUT.write_text("\n".join(L) + "\n")
print(len(expl), len(unk), len(stems), len(opts), len(cover))
