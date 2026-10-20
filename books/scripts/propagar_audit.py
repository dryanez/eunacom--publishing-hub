#!/usr/bin/env python3
"""Propaga el audit del banco (books/data/real_questions_by_code.json, q.audit) a TODAS las copias de
preguntas reales que quedaron copiadas en clases, libros, Libros Gordos, mazos del reproductor, etc.

  python3 books/scripts/propagar_audit.py            # simulación: solo reporta
  python3 books/scripts/propagar_audit.py --apply    # escribe los cambios + classes/docs/audit_banco/PROPAGACION.md

Qué hace con cada copia (se reconoce por la etiqueta «EUNACOM <Mes> <Año> · Pregunta N» dentro del objeto):
- audit.aplicado con clave cambiada (CLAVE_ERRONEA alta: audit.clave_original): si la copia marca la clave
  original → pasa a la nueva (correct/correcta/isCorrect) y la explicación a la corregida del banco.
  En clases además se reescribe say.answer (desde OVERRIDES; si no hay texto escrito a mano, se marca REVISAR).
- audit.aplicado con explicación cambiada (EXPLICACION_AJENA/CONTRADICE): si la copia tiene la explicación
  original del banco (literal o casi) → se reemplaza por la corregida. Si es una explicación propia, no se toca.
- TEXTO_DANADO aplicado: se reparan las mismas ligaduras rotas (2→ti, :→fi) en enunciado/alternativas/explicación.
- audit.excluir y estado TEXTO_DANADO: la copia se reemplaza por otra pregunta real OK del mismo código
  (en clases, con el say de OVERRIDES; si no lo hay, se arma uno básico y se marca REVISAR).
  Si no hay otra OK → se deja y se anota.
- FALTA_IMAGEN (excluir) y DUPLICADA: NO se reemplazan (otro proceso les busca la imagen); solo se listan.
- Libros que leen el banco directo (reconstruction_matcher, repaso, atlas, Anki…) filtran audit.excluir por su cuenta.

Las copias se editan sobre el texto (JSON o .cjs) para no tocar el formato. Idempotente.
Textos escritos a mano para clases: classes/docs/audit_banco/propagacion_overrides.json
  { "<archivo>|<recTag viejo>": {"tag": "<recTag nuevo o el mismo>", "explanation": "...",
                                 "say": {"stem": "...", "question": "...", "options": "...", "answer": "..."}} }
"""
import ast, difflib, glob, json, re, sys, unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
BANK = ROOT / "books/data/real_questions_by_code.json"
ORIG = ROOT / "books/data/real_questions_by_code.original.json"
AUD = ROOT / "classes/docs/audit_banco"
OVR_FILE = AUD / "propagacion_overrides.json"
REPORT = AUD / "PROPAGACION.md"
APPLY = "--apply" in sys.argv

TAG_RE = re.compile(r"EUNACOM [A-Za-zé]+ \d{4} · Pregunta \d+")
GLOBS = [
    "classes/lessons/*.cjs",
    "books/scripts/dataset_*.cjs",
    "books/dist/_datos_ensayos_90Q/ENSAYO*.json",
    "classes/curriculum/*_decks_data.json",
    "books/data/banco_preguntas_v3.json",
    "books/data/preguntas_practica_v3.json",
    "books/data/atlas_392_enriched.json",
]
STEM_F = ("stem", "caseText", "enunciado")
OPT_F = ("options", "opciones")
KEY_F = ("correcta", "correct")
EXP_F = ("explicacion", "explanation")

bank = json.loads(BANK.read_text())
orig = json.loads(ORIG.read_text()) if ORIG.exists() else {}
TAGS, ORIGQ = {}, {}
for code, qs in bank.items():
    for q in qs:
        TAGS.setdefault(q.get("recTag"), (code, q))
for code, qs in orig.items():
    for q in qs:
        ORIGQ.setdefault(q.get("recTag"), q)
OVR = json.loads(OVR_FILE.read_text()) if OVR_FILE.exists() else {}


def aud(q):
    return q.get("audit") or {}


def replaceable(q):
    a = aud(q)
    return bool(a.get("excluir")) and a.get("estado") == "TEXTO_DANADO"


def good_for_replacement(q):
    a = aud(q)
    if a.get("excluir"):
        return False
    if not a:
        return True
    est = a.get("estado")
    return est == "OK" or (a.get("aplicado") and est in ("TEXTO_DANADO", "EXPLICACION_AJENA", "EXPLICACION_CONTRADICE", "CLAVE_ERRONEA"))


def norm(s):
    s = unicodedata.normalize("NFKD", str(s or "")).encode("ascii", "ignore").decode().lower()
    return re.sub(r"[^a-z0-9]+", " ", s).strip()


def sim(a, b):
    a, b = norm(a), norm(b)
    if not a or not b:
        return 0.0
    if a == b or (len(b) > 40 and b in a) or (len(a) > 40 and a in b):
        return 1.0
    return difflib.SequenceMatcher(None, a, b).ratio()


def fix_lig(s):
    s = re.sub(r"(?<=[a-záéíóúñ])2(?=[a-záéíóúñ])", "ti", s or "")
    return re.sub(r"(?<=[a-záéíóúñ]):(?=[a-záéíóúñ])", "fi", s)


# ───────────────────────── escáner JS/JSON mínimo ─────────────────────────
SIG = re.compile(r"[\"'`/\[\]{}()]")
REGEX_PREV = set("(,=:[!&|?{};+-*%<>~^")


def scan(s):
    """→ (pairs {abre: cierra}, strings {inicio: fin})"""
    pairs, strings, stack = {}, {}, []
    i, n = 0, len(s)
    while i < n:
        m = SIG.search(s, i)
        if not m:
            break
        i = m.start()
        c = s[i]
        if c in "\"'":
            j = i + 1
            while s[j] != c:
                j += 2 if s[j] == "\\" else 1
            strings[i] = j + 1
            i = j + 1
            continue
        if c == "`":
            j, depth = i + 1, 0
            while True:
                if s[j] == "\\":
                    j += 2
                    continue
                if depth == 0 and s[j] == "`":
                    break
                if s.startswith("${", j):
                    depth += 1
                    j += 2
                    continue
                if depth and s[j] == "}":
                    depth -= 1
                j += 1
            strings[i] = j + 1
            i = j + 1
            continue
        if c == "/":
            if s.startswith("//", i):
                k = s.find("\n", i)
                i = n if k < 0 else k
                continue
            if s.startswith("/*", i):
                i = s.find("*/", i) + 2
                continue
            k = i - 1
            while k >= 0 and s[k].isspace():
                k -= 1
            if k < 0 or s[k] in REGEX_PREV:
                j, cls = i + 1, False
                while True:
                    ch = s[j]
                    if ch == "\\":
                        j += 2
                        continue
                    if ch == "[":
                        cls = True
                    elif ch == "]":
                        cls = False
                    elif ch == "/" and not cls:
                        break
                    j += 1
                i = j + 1
                continue
            i += 1
            continue
        if c in "([{":
            stack.append(i)
        else:
            o = stack.pop()
            pairs[o] = i
        i += 1
    return pairs, strings


def js_decode(lit):
    lit = lit.strip()
    if not lit or lit[0] not in "\"'":
        return None
    try:
        return json.loads(lit) if lit[0] == '"' else ast.literal_eval(lit)
    except Exception:
        try:
            return ast.literal_eval(lit)
        except Exception:
            return None


def js_encode(val, like):
    if isinstance(val, str):
        if like.strip().startswith("'"):
            return "'" + val.replace("\\", "\\\\").replace("'", "\\'").replace("\n", "\\n") + "'"
        return json.dumps(val, ensure_ascii=False)
    return json.dumps(val, ensure_ascii=False)


class Doc:
    def __init__(self, text):
        self.s = text
        self.pairs, self.strings = scan(text)
        self.opens = sorted(self.pairs)

    def ancestors(self, p):
        return sorted([o for o in self.opens if o < p < self.pairs[o]], key=lambda o: self.pairs[o] - o)

    def segments(self, o):
        """segmentos de primer nivel (separados por comas) dentro del bracket o"""
        s, c = self.s, self.pairs[o]
        segs, start, i = [], o + 1, o + 1
        while i < c:
            if i in self.strings:
                i = self.strings[i]
                continue
            if i in self.pairs and i != o:
                i = self.pairs[i] + 1
                continue
            if s[i] == ",":
                segs.append((start, i))
                start = i + 1
            elif s.startswith("//", i):
                i = s.find("\n", i)
                continue
            i += 1
        segs.append((start, c))
        return [(a, b) for a, b in segs if s[a:b].strip()]

    def props(self, o):
        """{clave: (ini_valor, fin_valor)} de un objeto literal"""
        out = {}
        if self.s[o] != "{":
            return out
        for a, b in self.segments(o):
            seg = self.s[a:b]
            m = re.match(r"\s*(?:(?://[^\n]*\n\s*)*)(?:\"([^\"]+)\"|'([^']+)'|([A-Za-z_$][\w$]*))\s*:\s*", seg)
            if not m:
                continue
            k = m.group(1) or m.group(2) or m.group(3)
            va = a + m.end()
            vb = b
            while vb > va and self.s[vb - 1].isspace():
                vb -= 1
            out[k] = (va, vb)
        return out

    def items(self, o):
        """elementos de un array/argumentos → [(ini, fin)]"""
        res = []
        for a, b in self.segments(o):
            while a < b and self.s[a].isspace():
                a += 1
            while b > a and self.s[b - 1].isspace():
                b -= 1
            res.append((a, b))
        return res

    def text(self, span):
        return self.s[span[0]:span[1]]

    def str_at(self, span):
        return js_decode(self.text(span)) if span else None


def lesson_split(stem):
    question = "Elige la alternativa correcta."
    i = stem.rfind("¿")
    if i > 0:
        return stem[:i].strip(), stem[i:].strip()
    m = re.match(r"^(.*[.?])\s+([^.?]+:)$", stem, re.S)
    if m:
        return m.group(1).strip(), m.group(2).strip()
    return stem, question


# ───────────────────────── copias ─────────────────────────
class Copy:
    """una pregunta copiada dentro de un archivo"""

    def __init__(self, doc, o, tag, kind):
        self.doc, self.o, self.tag, self.kind = doc, o, tag, kind  # kind: obj | realQuiz

    def opt_info(self):
        d = self.doc
        if self.kind == "realQuiz":
            return None
        p = d.props(self.o)
        f = next((k for k in OPT_F if k in p), None)
        if not f:
            return None
        arr = p[f][0]
        if d.s[arr] != "[":
            return None
        opts = []
        for a, b in d.items(arr):
            if d.s[a] != "{":
                return None
            op = d.props(a)
            let = d.str_at(op.get("id") or op.get("letter"))
            txt = d.str_at(op.get("text") or op.get("texto"))
            ic = op.get("isCorrect")
            opts.append({"letter": let, "text": txt, "isCorrect": ic, "props": op, "span": (a, b)})
        return f, p[f], opts


def find_copies(doc):
    seen, out = set(), []
    for m in TAG_RE.finditer(doc.s):
        tag = m.group(0)
        if tag not in TAGS:
            continue
        anc = doc.ancestors(m.start())
        hit = None
        for o in anc:
            if doc.s[o] == "(":
                pre = doc.s[max(0, o - 12):o]
                if pre.endswith("realQuiz"):
                    hit = (o, "realQuiz")
                    break
                continue
            if doc.s[o] == "{":
                p = doc.props(o)
                if any(k in p for k in OPT_F) and (any(k in p for k in KEY_F) or True):
                    if any(k in p for k in OPT_F):
                        hit = (o, "obj")
                        break
        if not hit:
            continue
        # la etiqueta tiene que estar en una propiedad de ese objeto (no en un hijo con su propia pregunta)
        if hit[0] in seen:
            continue
        seen.add(hit[0])
        out.append(Copy(doc, hit[0], tag, hit[1]))
    return out


# ───────────────────────── ediciones ─────────────────────────
class Editor:
    def __init__(self, path):
        self.path = path
        self.orig = path.read_text(encoding="utf-8")
        self.edits = []  # (ini, fin, nuevo)

    def put(self, span, new):
        if self.orig[span[0]:span[1]] != new:
            self.edits.append((span[0], span[1], new))

    def result(self):
        s = self.orig
        # si una edición cae dentro de otra (p. ej. la etiqueta dentro de una explicación reescrita), gana la más grande
        eds = []
        for e in sorted(set(self.edits), key=lambda e: (e[0], -(e[1] - e[0]))):
            if eds and e[0] < eds[-1][1]:
                if e[1] <= eds[-1][1]:
                    continue
                raise ValueError(f"{self.path}: ediciones superpuestas {eds[-1][:2]} {e[:2]}")
            eds.append(e)
        for a, b, t in sorted(eds, key=lambda e: -e[0]):
            s = s[:a] + t + s[b:]
        return s


SPANISH_YEAR = {2013: "dos mil trece", 2014: "dos mil catorce", 2015: "dos mil quince", 2016: "dos mil dieciséis",
                2017: "dos mil diecisiete", 2018: "dos mil dieciocho", 2019: "dos mil diecinueve", 2020: "dos mil veinte",
                2021: "dos mil veintiuno", 2022: "dos mil veintidós", 2023: "dos mil veintitrés", 2024: "dos mil veinticuatro",
                2025: "dos mil veinticinco", 2026: "dos mil veintiséis"}


def tag_words(tag):
    m = re.match(r"EUNACOM (\w+) (\d{4})", tag)
    return f"{m.group(1).lower()} de {SPANISH_YEAR.get(int(m.group(2)), m.group(2))}" if m else ""


def pick_replacement(code, used):
    cands = [q for q in bank.get(code, []) if good_for_replacement(q) and q["recTag"] not in used
             and len(q.get("options") or []) == 5 and q.get("correcta") in [o.get("id") for o in q.get("options")]]
    cands.sort(key=lambda q: (aud(q).get("estado") != "OK", -(q.get("confidence") or 0), -(q.get("year") or 0), not q.get("hasExpl")))
    return cands[0] if cands else None


LOG = []  # (producto, archivo, tag, acción, detalle)
ESTADO = {"SIN REEMPLAZO", "EXCLUIDA SIN TOCAR", "DISCREPANCIA", "NO LEÍBLE"}  # no son cambios: se recalculan
REVISAR = []


def product_of(rel):
    if rel.startswith("classes/lessons/"):
        return "Clases (guiones)"
    if rel.startswith("books/scripts/dataset_"):
        return "Libros (datasets)"
    if rel.startswith("books/dist/_datos_ensayos_90Q/ENSAYO"):
        return "Libros Gordos (ENSAYO_90Q)"
    if rel.startswith("classes/curriculum/"):
        return "Reproductor (decks_data)"
    return "Datos auxiliares"


def process(path, used_global):
    rel = str(path.relative_to(ROOT))
    ed = Editor(path)
    doc = Doc(ed.orig)
    copies = find_copies(doc)
    used = set(TAG_RE.findall(ed.orig))
    is_lesson = rel.startswith("classes/lessons/")
    changed_quiz = False
    touched_tags = set()
    for cp in copies:
        n_before = len(ed.edits)
        code, bq = TAGS[cp.tag]
        a = aud(bq)
        log = lambda act, det="": LOG.append((product_of(rel), rel, cp.tag, act, det))
        if replaceable(bq):
            new = pick_replacement(code, used | used_global.get(rel, set()))
            if not new:
                log("SIN REEMPLAZO", f"excluida ({a.get('motivo','')[:90]}); no hay otra OK en {code} — se deja")
                REVISAR.append(f"{rel}: {cp.tag} excluida y sin reemplazo OK en {code}")
                continue
            ok = replace_copy(ed, doc, cp, bq, new, rel, is_lesson)
            if ok:
                used.add(new["recTag"])
                changed_quiz = True
                touched_tags.update([cp.tag, new["recTag"]])
                log("REEMPLAZADA", f"→ {new['recTag']} ({code})" + ("" if ok is True else f" · {ok}"))
            continue
        if a.get("excluir"):
            log("EXCLUIDA SIN TOCAR", f"{a.get('estado')}: {a.get('motivo','')[:90]}")
            continue
        if cp.kind == "realQuiz":
            r = fix_realquiz(ed, doc, cp, bq, rel)
        else:
            r = fix_obj(ed, doc, cp, bq, rel, is_lesson)
        for act, det in r:
            log(act, det)
            if act.startswith("CLAVE"):
                changed_quiz = True
        if len(ed.edits) > n_before:
            touched_tags.add(cp.tag)
    return ed, copies, touched_tags


def key_target(copy_opts, bq):
    """letra que en la copia corresponde a la alternativa correcta del banco (y a la clave original)"""
    a = aud(bq)
    bopts = {o["id"]: o.get("text") for o in bq.get("options", [])}
    oq = ORIGQ.get(bq["recTag"], bq)
    oopts = {o["id"]: o.get("text") for o in oq.get("options", [])}

    def find(letter, table):
        t = table.get(letter)
        same = [c for c in copy_opts if c["letter"] == letter]
        if same and sim(same[0]["text"], t) > 0.6:
            return letter
        best = max(copy_opts, key=lambda c: sim(c["text"], t), default=None)
        return best["letter"] if best and sim(best["text"], t) > 0.75 else None

    new = find(bq["correcta"], bopts)
    old = find(a.get("clave_original"), oopts) if a.get("clave_original") else None
    return new, old


def set_key(ed, doc, cp, opt, new_letter):
    p = doc.props(cp.o)
    kf = next((k for k in KEY_F if k in p), None)
    if kf:
        ed.put(p[kf], js_encode(new_letter, doc.text(p[kf])))
    f, span, opts = opt
    for c in opts:
        if c["isCorrect"]:
            ed.put(c["isCorrect"], "true" if c["letter"] == new_letter else "false")


def say_answer_span(doc, cp):
    p = doc.props(cp.o)
    if "say" in p and doc.s[p["say"][0]] == "{":
        return doc.props(p["say"][0]).get("answer")
    return None


def fix_obj(ed, doc, cp, bq, rel, is_lesson):
    res = []
    a = aud(bq)
    p = doc.props(cp.o)
    opt = cp.opt_info()
    if not opt:
        return [("NO LEÍBLE", "no se pudieron leer las alternativas")]
    f, span, opts = opt
    kf = next((k for k in KEY_F if k in p), None)
    cur = doc.str_at(p[kf]) if kf else next((c["letter"] for c in opts if c["isCorrect"] and doc.text(c["isCorrect"]) == "true"), None)
    ef = next((k for k in EXP_F if k in p), None)
    cur_exp = doc.str_at(p[ef]) if ef else None
    key_changed = False
    ovr = OVR.get(f"{rel}|{cp.tag}") or {}
    if a.get("aplicado") and a.get("clave_original") and a["clave_original"] != bq["correcta"]:
        new, old = key_target(opts, bq)
        if new and cur == new:
            pass
        elif new and (cur == old or cur == a["clave_original"]):
            set_key(ed, doc, cp, opt, new)
            key_changed = True
            res.append(("CLAVE", f"{cur} → {new}"))
            if ef:
                newexp = ovr.get("explanation") or (bq.get("explicacion") if not is_lesson else None)
                if newexp:
                    ed.put(p[ef], js_encode(newexp, doc.text(p[ef])))
                    res.append(("EXPLICACIÓN", "corregida (clave nueva)"))
                else:
                    REVISAR.append(f"{rel}: {cp.tag} clave {cur}→{new}: escribir explanation (falta en overrides)")
            sa = say_answer_span(doc, cp)
            if sa:
                if ovr.get("say", {}).get("answer"):
                    ed.put(sa, js_encode(ovr["say"]["answer"], doc.text(sa)))
                    res.append(("SAY", "say.answer reescrito"))
                else:
                    REVISAR.append(f"{rel}: {cp.tag} clave {cur}→{new}: reescribir say.answer (falta en overrides)")
        elif cur and new and cur != new:
            res.append(("DISCREPANCIA", f"copia marca {cur}, banco {new} (original {a['clave_original']}); no se toca"))
    if not key_changed and ef and a.get("explicacion_original") and cur_exp is not None:
        if sim(cur_exp, a["explicacion_original"]) >= 0.85 and sim(cur_exp, bq.get("explicacion")) < 0.95:
            ed.put(p[ef], js_encode(bq["explicacion"], doc.text(p[ef])))
            res.append(("EXPLICACIÓN", f"{a.get('estado')}: reemplazada por la corregida"))
    if a.get("aplicado") and a.get("estado") == "TEXTO_DANADO":
        n = 0
        sf = next((k for k in STEM_F if k in p), None)
        spans = [p[sf]] if sf else []
        spans += [c["props"].get("text") or c["props"].get("texto") for c in opts]
        if ef:
            spans.append(p[ef])
        for sp in spans:
            if not sp:
                continue
            v = doc.str_at(sp)
            if isinstance(v, str) and fix_lig(v) != v:
                ed.put(sp, js_encode(fix_lig(v), doc.text(sp)))
                n += 1
        if n:
            res.append(("TEXTO", f"ligaduras reparadas en {n} campo(s)"))
    return res


def fix_realquiz(ed, doc, cp, bq, rel):
    """realQuiz(tag, explanation, say, edit): la clave y el texto vienen del banco; solo revisar explicación/say"""
    res = []
    a = aud(bq)
    args = doc.items(cp.o)
    ovr = OVR.get(f"{rel}|{cp.tag}") or {}
    if a.get("aplicado") and a.get("clave_original") and a["clave_original"] != bq["correcta"]:
        res.append(("CLAVE", f"{a['clave_original']} → {bq['correcta']} (realQuiz la toma del banco)"))
        if len(args) > 1 and ovr.get("explanation"):
            ed.put(args[1], js_encode(ovr["explanation"], doc.text(args[1])))
        if len(args) > 2 and doc.s[args[2][0]] == "{" and ovr.get("say", {}).get("answer"):
            sa = doc.props(args[2][0]).get("answer")
            if sa:
                ed.put(sa, js_encode(ovr["say"]["answer"], doc.text(sa)))
                res.append(("SAY", "say.answer reescrito"))
        if not ovr:
            REVISAR.append(f"{rel}: {cp.tag} (realQuiz) clave {a['clave_original']}→{bq['correcta']}: revisar explicación y say.answer")
    elif len(args) > 1 and a.get("explicacion_original"):
        cur = doc.str_at(args[1])
        if cur and sim(cur, a["explicacion_original"]) >= 0.85:
            ed.put(args[1], js_encode(bq["explicacion"], doc.text(args[1])))
            res.append(("EXPLICACIÓN", "reemplazada por la corregida"))
    return res


def replace_copy(ed, doc, cp, old, new, rel, is_lesson):
    """sustituye una copia excluida por otra pregunta real del mismo código"""
    ovr = OVR.get(f"{rel}|{old['recTag']}") or {}
    if ovr.get("tag") and ovr["tag"] in TAGS:
        new = TAGS[ovr["tag"]][1]
    s = doc.s
    note = True
    # 1) todas las apariciones de la etiqueta vieja dentro del objeto/llamada
    a0, b0 = cp.o, doc.pairs[cp.o]
    for m in re.finditer(re.escape(old["recTag"]), s[a0:b0]):
        ed.put((a0 + m.start(), a0 + m.end()), new["recTag"])
    if cp.kind == "realQuiz":
        args = doc.items(cp.o)
        if len(args) > 1:
            ed.put(args[1], js_encode(ovr.get("explanation") or new.get("explicacion", ""), doc.text(args[1])))
        if len(args) > 3:  # edit(options) era para la pregunta vieja
            ed.put((args[2][1], args[3][1]), "")
        if len(args) > 2 and s[args[2][0]] == "{":
            sp = doc.props(args[2][0])
            say = ovr.get("say") or basic_say(new)
            for k in ("stem", "question", "options", "answer"):
                if k in sp:
                    ed.put(sp[k], js_encode(say[k], doc.text(sp[k])))
            if not ovr.get("say"):
                note = "say básico: REVISAR"
                REVISAR.append(f"{rel}: {old['recTag']} → {new['recTag']}: pulir say (generado)")
        return note
    p = doc.props(cp.o)
    opt = cp.opt_info()
    if not opt:
        return False
    f, span, opts = opt
    lesson_like = "say" in p or is_lesson or (opts and "letter" in opts[0]["props"])
    stem, question = lesson_split(new["stem"]) if "question" in p else (new["stem"], None)
    sf = next((k for k in STEM_F if k in p), None)
    if sf:
        ed.put(p[sf], js_encode(stem, doc.text(p[sf])))
    if question is not None and "question" in p:
        ed.put(p["question"], js_encode(question, doc.text(p["question"])))
    # alternativas: se reescribe cada texto y letra en el mismo formato
    if len(opts) == len(new["options"]):
        for c, no in zip(opts, new["options"]):
            lp = c["props"].get("id") or c["props"].get("letter")
            tp = c["props"].get("text") or c["props"].get("texto")
            if lp:
                ed.put(lp, js_encode(no["id"], doc.text(lp)))
            if tp:
                ed.put(tp, js_encode(no["text"], doc.text(tp)))
            if c["isCorrect"]:
                ed.put(c["isCorrect"], "true" if no["id"] == new["correcta"] else "false")
    else:
        return False
    kf = next((k for k in KEY_F if k in p), None)
    if kf:
        ed.put(p[kf], js_encode(new["correcta"], doc.text(p[kf])))
    ef = next((k for k in EXP_F if k in p), None)
    if ef:
        cur = doc.str_at(p[ef]) or ""
        if rel.startswith("books/dist/_datos_ensayos_90Q/ENSAYO") and cur.startswith("Pregunta oficial"):
            exp = cur.replace(old["recTag"], new["recTag"])
            exp = re.sub(r"Evalúa el manejo clínico de .*$", "", exp).strip() + " " + (new.get("explicacion") or "")
        else:
            exp = ovr.get("explanation") or new.get("explicacion") or ""
        ed.put(p[ef], js_encode(exp.strip(), doc.text(p[ef])))
    for k in ("notes",):
        if k in p:
            v = doc.str_at(p[k])
            if isinstance(v, str) and old["recTag"] not in v:
                pass
    if "say" in p and s[p["say"][0]] == "{":
        sp = doc.props(p["say"][0])
        say = ovr.get("say") or basic_say(new)
        for k in ("stem", "question", "options", "answer"):
            if k in sp:
                ed.put(sp[k], js_encode(say[k], doc.text(sp[k])))
        if not ovr.get("say"):
            note = "say básico: REVISAR"
            REVISAR.append(f"{rel}: {old['recTag']} → {new['recTag']}: pulir say (generado)")
    # campos de imagen de la pregunta vieja: quedan, pero se avisan
    if "image" in p or "images" in p:
        REVISAR.append(f"{rel}: {old['recTag']} → {new['recTag']}: la diapositiva tenía imagen; revisar")
    return note


def basic_say(q):
    stem, question = lesson_split(q["stem"])
    letters = q["correcta"]
    otext = next((o["text"] for o in q["options"] if o["id"] == letters), "")
    return {
        "stem": f"Una pregunta real del EUNACOM de {tag_words(q['recTag'])}. {stem}",
        "question": question,
        "options": "Las opciones: " + "; ".join(o["text"].rstrip(".") for o in q["options"][:-1]) + "; o " + q["options"][-1]["text"].rstrip(".") + ". Piénsalo.",
        "answer": f"Es la {letters}: {otext.rstrip('.')}. " + (q.get("explicacion") or ""),
    }


# ───────────────────────── main ─────────────────────────
def main():
    files = sorted({Path(f) for g in GLOBS for f in glob.glob(str(ROOT / g))})
    touched, lessons_changed, ncopies = [], [], 0
    used_global = {}
    for f in files:
        ed, copies, ttags = process(f, used_global)
        ncopies += len(copies)
        if ed.edits:
            touched.append(str(f.relative_to(ROOT)))
            new = ed.result()
            if f.suffix == ".json":
                json.loads(new)  # validación
            if APPLY:
                f.write_text(new, encoding="utf-8")
        if ttags and str(f).endswith(".cjs") and "/classes/lessons/" in str(f):
            lessons_changed.append((f.stem, sorted(ttags)))
    # Libros Gordos: las que quedaron sin reemplazo (o con falta de imagen) se marcan en el JSON para revisión
    for f in sorted(glob.glob(str(ROOT / "books/dist/_datos_ensayos_90Q/ENSAYO*.json"))):
        d = json.loads(Path(f).read_text())
        ch = False
        for q in d:
            m = TAG_RE.search(q.get("explicacion") or "")
            bq = TAGS.get(m.group(0), (None, {}))[1] if m else {}
            a = aud(bq)
            want = f"{a.get('estado')}: {a.get('motivo', '')}" if a.get("excluir") else None
            if q.get("revisar_audit") != want:
                if want:
                    q["revisar_audit"] = want
                else:
                    q.pop("revisar_audit", None)
                ch = True
        if ch:
            touched.append(str(Path(f).relative_to(ROOT)) + " (revisar_audit)")
            if APPLY:
                Path(f).write_text(json.dumps(d, ensure_ascii=False, indent=2), encoding="utf-8")
    # anki: tarjetas que citan preguntas con clave cambiada o excluidas (revisión manual)
    anki = []
    for f in sorted(glob.glob(str(ROOT / "books/data/anki/*/*.json"))):
        try:
            cards = json.loads(Path(f).read_text())
        except Exception:
            continue
        if isinstance(cards, dict):
            cards = cards.get("cards") or []
        if not isinstance(cards, list):
            continue
        for c in cards:
            if not isinstance(c, dict):
                continue
            for t in c.get("preguntaReal") or []:
                if t in TAGS:
                    a = aud(TAGS[t][1])
                    if (a.get("aplicado") and a.get("clave_original")) or replaceable(TAGS[t][1]):
                        anki.append((str(Path(f).relative_to(ROOT)), c.get("id"), t, "clave cambiada" if a.get("clave_original") else "excluida"))
    # historial acumulado (cada --apply agrega lo suyo; la simulación no escribe)
    LOGF = AUD / "propagacion_log.json"
    hist = json.loads(LOGF.read_text()) if LOGF.exists() else {"log": [], "clases": {}}
    import datetime
    stamp = datetime.date.today().isoformat()
    # video: build_class usa solo la PRIMERA pregunta (no «caso») del guion → rehacer si cambió esa
    for stem, tags in lessons_changed:
        js = ("const l=require(process.argv[1]);const q=l.slides.find(s=>s.type==='quiz'&&!/caso/i.test(s.kicker||''));"
              "process.stdout.write(q?String(q.title||''):'')")
        import subprocess
        vt = subprocess.run(["node", "-e", js, str(ROOT / "classes/lessons" / (stem + ".cjs"))], capture_output=True, text=True).stdout
        if APPLY or True:
            prev = hist["clases"].get(stem, {})
            hist["clases"][stem] = {"tags": sorted(set(prev.get("tags", [])) | set(tags)),
                                    "video": bool(prev.get("video")) or any(t in vt for t in tags), "fecha": stamp}
    if APPLY:
        hist["log"] = [x for x in hist["log"] if x["accion"] not in ESTADO]  # el estado se recalcula en cada corrida
        hist["log"] += [dict(fecha=stamp, producto=p, archivo=f, pregunta=t, accion=a, detalle=d) for p, f, t, a, d in LOG if a not in ESTADO]
        LOGF.write_text(json.dumps(hist, ensure_ascii=False, indent=1))
    ALL = [(x["producto"], x["archivo"], x["pregunta"], x["accion"], x["detalle"]) for x in hist["log"]] if APPLY else []
    ALL += [x for x in LOG if x[3] in ESTADO or not APPLY]
    ALL = list(dict.fromkeys(ALL))  # sin repetir lo que se vuelve a anotar en cada corrida
    from collections import Counter
    cnt = Counter((p, act) for p, _, _, act, _ in ALL)
    out = ["# Propagación del audit del banco a las copias", "",
           f"Generado por `books/scripts/propagar_audit.py{' --apply' if APPLY else ''}`. Copias reconocidas: {ncopies} en {len(files)} archivos.", "",
           "## Conteo por producto", "", "| Producto | Acción | N |", "|---|---|---|"]
    out += [f"| {p} | {a} | {n} |" for (p, a), n in sorted(cnt.items())]
    vids = sorted(k for k, v in hist["clases"].items() if v["video"])
    out += ["", "## Clases con preguntas cambiadas", "",
            "Guion tocado (el reproductor se actualiza al recompilar): " + (", ".join(sorted(hist["clases"])) or "(ninguna)"), "",
            "Video a rehacer (la pregunta cambiada es la que sale en el video): " + (", ".join(vids) or "(ninguna)"), "",
            "## Pendientes de revisión manual", ""] + [f"- {r}" for r in REVISAR] + (["- (ninguno)"] if not REVISAR else [])
    out += ["", "## Tarjetas Anki que citan preguntas con clave cambiada o excluida", "",
            "Revisadas a mano: ver `PROPAGACION_ANKI_MANUAL.md` (las que enseñaban la clave vieja se reescribieron).", ""]
    out += [f"- {f} · {cid} · {t} ({why})" for f, cid, t, why in anki] or ["- (ninguna)"]
    out += ["", "## Detalle", "", "| Producto | Archivo | Pregunta | Acción | Detalle |", "|---|---|---|---|---|"]
    out += [f"| {p} | {f} | {t} | {a} | {d.replace('|', '/')} |" for p, f, t, a, d in ALL]
    if APPLY:
        REPORT.write_text("\n".join(out) + "\n", encoding="utf-8")
        (AUD / "propagacion_videos_rehacer.txt").write_text("\n".join(vids) + ("\n" if vids else ""))
    print("\n".join(out[:40 + len(cnt)]))
    print(f"\narchivos con cambios: {len(touched)}")
    for t in touched:
        print("  ", t)


if __name__ == "__main__":
    main()
