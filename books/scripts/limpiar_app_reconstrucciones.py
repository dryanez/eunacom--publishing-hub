#!/usr/bin/env python3
"""Genera las versiones corregidas de las reconstrucciones de la app (NO escribe en la app).

Entrada : <APP>/public/data/reconstrucciones/eunacom-*.json + topic_index.json  (solo lectura)
          books/data/real_questions_by_code.json (banco auditado) y su .original.json
Salida  : books/data/app_reconstrucciones/eunacom-*.json, topic_index.json, img/*.jpg
          classes/docs/audit_banco/APP_CAMBIOS.md y APP_LIMPIEZA_LOG.csv
Uso     : python3 books/scripts/limpiar_app_reconstrucciones.py [--todos] [examen ...]
          (sin argumentos: los 14 exámenes sin pendientes; Jul 2018 / Dic 2024 solo con --todos)
"""
import csv, difflib, glob, json, os, re, subprocess, sys, unicodedata, collections
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
APPDIR = Path(os.environ.get("APP_RECON", os.path.expanduser("~/Desktop/NEWeunacom/eunacom-app-v2/public/data/reconstrucciones")))
OUT = ROOT / "books/data/app_reconstrucciones"
BANK = ROOT / "books/data/real_questions_by_code.json"
ORIG = ROOT / "books/data/real_questions_by_code.original.json"
AUD = ROOT / "classes/docs/audit_banco"
IMGSRC = ROOT / "classes/media"
PENDIENTES = {"eunacom-jul-2018", "eunacom-dic-2024"}
IMG_URL = "/data/reconstrucciones/img/"

# ------------------------------------------------------------------ utilidades de texto
LIG = {"ﬀ": "ff", "ﬁ": "fi", "ﬂ": "fl", "ﬃ": "ffi", "ﬄ": "ffl", "ﬅ": "st", "ﬆ": "st"}
ZW = dict.fromkeys(map(ord, "​‌‍⁠﻿­\x0c\x0b\x00\x08"), None)

def fold(w):
    return "".join(c for c in unicodedata.normalize("NFD", w.lower()) if unicodedata.category(c) != "Mn")

def norm(t):
    t = (t or "").replace("\r", "")
    for k, v in LIG.items():
        t = t.replace(k, v)
    t = t.translate(ZW).replace(" ", " ").replace(" ", "\n").replace("�", "")
    return t

TOK = re.compile(r"[A-Za-zÁÉÍÓÚÑÜáéíóúñü0-9]+(?:[:`<{][A-Za-zÁÉÍÓÚÑÜáéíóúñü]+)*")
LETTERS_ONLY = re.compile(r"^[a-záéíóúñü]+$")

class Vocab:
    def __init__(self):
        self.cnt = collections.Counter()   # forma exacta (minúscula) -> n
        self.fold = {}                      # fold -> forma exacta más frecuente
    def add(self, text):
        for w in TOK.findall(norm(text)):
            lw = w.lower()
            if LETTERS_ONLY.match(lw):
                self.cnt[lw] += 1
    def build(self):
        best = {}
        for w, n in self.cnt.items():
            f = fold(w)
            if f not in best or n > self.cnt[best[f]]:
                best[f] = w
        self.fold = best
    def has(self, w):
        return fold(w) in self.fold
    def exact(self, w):
        return self.fold.get(fold(w))

# Reemplazos de caracteres-artefacto del PDF -> secuencias candidatas
ART = {"`": ["tí", "ti"], "<": ["ti", "tí"], "{": ["ti", "tí"], "2": ["ti", "tí"], "8": ["ti", "tí"], "G": ["ti", "tí"], "V": ["tí", "ti"], "Z": ["ti", "tí"],
       "F": ["fi", "fí"], ":": ["fi", "fí"], "~": ["tt", "ti"], "x": ["tt"], "j": ["ft"], "m": ["ft"], "q": ["fi"], "7": ["ti"], "3": ["ti"], "9": ["ti"]}
ART_CHARS = set("2878GVZF:~379`<{")
# casos que el vocabulario no resuelve (letras perdidas): palabra con artefacto -> corregida
MANUAL = {
    "hxps": "https", "monoatrigs": "monoartritis", "crea8nuria": "creatinuria", "genopavas": "genopatías", "2xfía": "2 × Na", "cemriaxona": "ceftriaxona", "cejriaxona": "ceftriaxona", "ormina": "metformina",
    "coides": "corticoides", "adenopa": "adenopatía", "nicas": "clínicas", "sciatextbook": "",
}

def repair_token(w, V):
    lw = w.lower()
    if lw in MANUAL:
        r = MANUAL[lw]
        return r.capitalize() if w[0].isupper() else r
    if LETTERS_ONLY.match(lw) and V.has(lw) and not any(c in w[1:] for c in "GVFZ"):
        return w
    if not (any(c in ART_CHARS for c in w) or re.search(r"[a-záéíóúñ][GVFZ]|^[GFV][a-z]", w)):
        return w
    # posiciones candidatas
    pos = [i for i, c in enumerate(w) if c in ART_CHARS and (c.isalpha() is False or i > 0 or c in "GVFZ")]
    if not pos or len(pos) > 4:
        return w
    # no tocar números puros / unidades
    if re.fullmatch(r"[0-9:]+", w) or re.fullmatch(r"[0-9]+(?:mg|ml|kg|cm|mm|dl|mcg|meq|lpm|rpm|hrs?|h|x|g|l|mmhg|ui|u|cc|hr|min|seg|s|d)", w, re.I):
        return w
    import itertools
    best = None
    for k in range(1, len(pos) + 1):
        for sub_pos in itertools.combinations(pos, k):
            for reps in itertools.product(*[ART[w[p]] for p in sub_pos]):
                out, last = "", 0
                for p, rep in zip(sub_pos, reps):
                    out += w[last:p] + rep
                    last = p + 1
                out += w[last:]
                if V.has(out):
                    ex = V.exact(out)
                    if w[0].isupper():
                        ex = ex[0].upper() + ex[1:]
                    if w.isupper() and len(w) > 3:
                        ex = ex.upper()
                    best = ex
                    break
            if best: break
        if best: break
    return best or w

def repair_ligs(text, V, exam=None):
    def sub(m):
        w = m.group()
        r = repair_token(w, V)
        if r == w and exam == "eunacom-dic-2025" and w[0] in "GFV" and w[1:].islower() and m.start() > 0:
            before = text[:m.start()].rstrip(" \t")
            if before and before[-1] not in ".!?¿¡\n:":
                for rep in ART[w[0]]:
                    cand = rep + w[1:]
                    if V.has(cand) and V.cnt[V.exact(cand)] > 10 * V.cnt[w.lower()]:
                        return V.exact(cand)
        if r != w and w[0] in "FGV" and not w[1:2].isupper():
            before = text[:m.start()].rstrip(" \t")
            at_start = (not before) or before[-1] in ".!?¿¡\n:" or before.endswith("\n")
            if not at_start and r[:1].isupper() and not w.isupper():
                r = r[0].lower() + r[1:]
        return r
    return TOK.sub(sub, text)

def join_hyphen(text, V):
    # "tra- tamiento" -> "tratamiento" solo si la unión existe en el vocabulario
    def sub(m):
        a, b = m.group(1), m.group(2)
        if V.has(a + b) and not (V.has(a) and V.has(b) and len(a) > 3 and len(b) > 3 and V.cnt[(a+'-'+b).lower()] > 0):
            return a + b
        return m.group(0)
    return re.sub(r"(?<![\w-])([A-Za-záéíóúñü]{2,})- (?=[a-záéíóúñü])([a-záéíóúñü]+)", sub, text)

# ------------------------------------------------------------------ patrones de limpieza
RE_PLAT = re.compile(r"(?:Pregunta\s*\d+\s*)?Sin\s+contestar\s*(?:Punt[úu]a\s+como\s*[\d.,]+\s*)?(?:Marcar\s+pregunta)?|Punt[úu]a\s+como\s*[\d.,]+|Marcar\s+pregunta|Pregunta\s+\d+\s*(?=\n)|(?:^|(?<=\s))Pregunta\s+\d+\)\s*", re.I)
RE_HEADER = re.compile(r"RECONSTRUCCI[ÓO]N\s+EUNACOM.*", re.S)
RE_HEADER_EXPL = re.compile(r"RECONSTRUCCI[ÓO]N\s+EUNACOM.{0,80}?(?:PARTE)(?:\s*Instrucciones:?)?", re.S)
RE_GUEVARA = re.compile(r"(?:Dr\.?\s*)?Guillermo\s+Guevara(?:\s+Aliaga)?(?:\s*\|\s*Scholarship Theme por Mystery Themes\.?)?|Scholarship Theme por Mystery Themes\.?|Guevara(?:\s+Aliaga)?|Aliaga", re.I)
RE_URL_PAREN = re.compile(r"\(\s*(?:[Ff]uente\s*:?\s*)?(?:https?://|www\.|hxps?:)[^)]*\)\.?")
RE_FOTO = re.compile(r"\bFoto\s+\d+\s*(?=[\s.(¿]|$)")
RE_URL = re.compile(r"(?:https?://|www\.|hxps?:)\s*\S+(?:\s*-\s+\S+)?", re.I)
RE_FUENTE_URL = re.compile(r"\(?\b[Ff]uente\s*:?\s*\)?\s*(?=[.¿\s]|$)(?=(?:\s*[¿A-ZÁÉÍÓÚ]|\s*$))")
RE_IMG_NOTE = re.compile(r"\((?:La|Las)\s+(?:imagen|foto|im[áa]genes|fotos?)\s+(?:ha|han|fue|fueron)\s+[^)]*\)\.?", re.I)
RE_NOTA_ANADIDA = re.compile(r"\(?\s*Nota:\s*pregunta\s+a[ñn]adida\s+a\s+la\s+reconstrucci[óo]n\s*\)?\.?", re.I)
RE_DISPUTADA = re.compile(r"\[\s*Pregunta\s+disputada\s*\]\s*", re.I)

ADJ = r"(?:mala|mal|malas|p[ée]sima|pésimas|discutible|dif[íi]cil|rara|extra[ñn]a|capciosa|tramposa|ambigua|confusa|injusta|fome|polémica|f[áa]cil|sencilla|compleja|clásica|mal\s+intencionada|con\s+error|errónea|insuficiente|larga|demasiado\s+espec[íi]fica|mal\s+planteada|mal\s+redactada|mal\s+formulada)"
ADV = r"(?:muy|muy\s+muy|bastante|algo|demasiado|medio|tan|también|t[ée]cnicamente|estrictamente|en\s+s[íi]|realmente|un\s+poco|claramente|definitivamente|derechamente|fuertemente|completamente)"
META_ADJ_SET = r"(?:%s\s+)*%s(?:\s*(?:,|y|e)\s*(?:%s\s+)*%s)*" % (ADV, ADJ, ADV, ADJ)
PQ = r"(?:(?:una\s+|esta\s+|la\s+|otra\s+)?pregunta\s+(?:es\s+|est[áa]\s+)?%s|(?:una\s+)?%s\s+pregunta)" % (META_ADJ_SET, META_ADJ_SET)
CONN = r"(?:(?:Sin embargo|Aun as[íi]|Aún as[íi]|Igualmente|Igual|También|Además|Por tanto|Por lo tanto|De todos modos|Nuevamente|Eso s[íi]|Si bien|Aunque|En estricto rigor)\s*,?\s+)?"
COP = r"(?:(?:es|era|sigue siendo|también es|igual es|sería|est[áa])\s+)*"
OPIN = r"(?:\s+(?:en\s+mi\s+opini[óo]n|a\s+mi\s+parecer))?"
# oración completa que solo juzga la pregunta
RE_META_WHOLE = re.compile(r"^" + CONN + COP + PQ + OPIN + r"\s*[.!]*$", re.I)
# cola: ", por lo que es una mala pregunta."
RE_META_TAIL = re.compile(r"[,;]?\s*(?:(?:por\s+(?:lo\s+)?(?:que|tanto)|así\s+que|por\s+eso|y|pero|sin\s+embargo)\s+)?(?:definitivamente\s+|t[ée]cnicamente\s+|estrictamente\s+|igualmente\s+)*(?:insisto\s+en\s+que\s+|insistimos\s+en\s+que\s+)?" + COP + PQ + OPIN + r"(?:\s+que\s+induce\s+a\s+error)?[^.!?]{0,60}[.!]*$", re.I)
# inicio: "Pregunta difícil, pero ..." -> deja el resto
RE_META_LEAD = re.compile(r"^" + CONN + COP + PQ + OPIN + r"(?:[^,.;:]{0,60})?\s*(?:,|:|;)\s*(?:(?:pero|aunque|ya\s+que|porque|sin\s+embargo|por\s+lo\s+que|dado\s+que|especialmente|en\s+especial)\s*,?\s*)?", re.I)
RE_META_ANY = re.compile(r"(?i)\bpregunta\b[^.]{0,40}\b(?:mala|mal|p[ée]sima|discutible|error|ambigua|disputada|anul)|\b(?:mala|p[ée]sima|discutible)\b[^.]{0,20}\bpregunta|debería\s+anularse|más\s+de\s+una\s+(?:respuesta|opción)|\bPregunta\s+disputada")
RE_META_CLAUSE = re.compile(r"(?i)\bpreguntas?\b[^.;]{0,50}\b(?:mala|mal|p[ée]sima|discutible|dif[íi]cil|rara|capciosa|tramposa|ambigua|confusa|injusta|polémica|mal\s+intencionada|con\s+error|insuficiente|espec[íi]fica|anul\w*)\b|\b(?:mala|p[ée]sima|discutible|dif[íi]cil|rara|capciosa|tramposa|mal\s+intencionada)\s+pregunta|fuera\s+de\s+lo\s+que\s+debe\s+(?:hacer|manejar|saber)\s+un\s+m[ée]dico\s+general|no\s+es\s+de\s+m[ée]dico\s+general|no\s+deber[íi]a\s+preguntarse|debe(?:r[íi]a)?\s+anularse")
RE_FLAG_BAD = re.compile(r"(?i)mala|mal\b|p[ée]sima|discutible|error|ambigua|disputada|anul|más de una|mal intencionada|capciosa|tramposa")
RE_FP = re.compile(r"(?i)resumen\s+de\s+semiolog|\blean\s+las\s+p[áa]ginas|\ben\s+fin\b|así\s+es\s+el\s+eunacom|\bplataforma\b|recomiendo\s+marcar|\bestamos\s+\d|\bincluimos\b|conversarlo|no\s+estoy\s+\d+|aprend[ée]rse|aprendérselo|\bnos\s+preocupamos\b|\byo\b|\bcreo\b|\bcreemos\b|marqu[ée]|marcar[íi]a|marcaría|marcamos|\bmi\s+(?:opini|parecer|duda|amig|clase)|mis\s+amig|\ba\s+mi\s+parecer|me\s+parece|\bno\s+sé\b|\bnos\s+(?:inclinamos|dijeron|dieron|vamos)|\bnuestra\b|insist(?:imos|o)\b|dejaremos|asumimos|les\s+dije|ustedes|\bsigan\b|\bmarquen\b|esperemos|volvimos|amanec[íi]|cambi[ée]\s+de\s+opini|vamos\s+a\s+creer|ya\s+sé\b|\bme\s+equivoqu|\bquienes?\s+redact|\bquien\s+hizo|\bquien\s+redact|ojo\s+con\s+eso|\bles\s+comunico|\bmolesto\s+volver|no\s+recuerd|según\s+recuerdo|\bsegún\s+yo|\bpara\s+m[íi]\b|\bpuse\b|\bme\s+tocó|\bvi\s+(?:una|un)\b|\bvimos\b")
RE_FP_STRIP = [
    (re.compile(r"(?i)\s*\(y disculparse[^)]*\)"), ""),
    (re.compile(r"(?i)(?:^|(?<=[\s,]))la verdad(?:\s*,)?(?:\s+es)?(?:\s+que)?\s*,?\s+"), ""),
    (re.compile(r"(?i)\s*\((?:[^()]*\b(?:yo|marqu[ée]|marcamos)\b[^()]*)\)"), ""),
    (re.compile(r"(?i)\s*\((?:no|según)\s+recuerd[oa][^)]*\)"), ""),
    (re.compile(r"(?i)pero creemos que es la respuesta correcta igual"), "pero es la respuesta más adecuada"),
    (re.compile(r"(?i)[,;]?\s*(?:y\s+)?(?:(?:por\s+(?:eso|ello|lo\s+que|tanto)|pero|aunque|así\s+que)\s*,?\s*)?(?:(?:la|lo|los|las|esa|esta|ese)\s+)?dejaremos\b[^.!?]*"), ""),
    (re.compile(r"(?i)[,;]?\s*(?:pero\s+)?(?:(?:en\s+conjunto\s+con|con)\s+varios\s+especialistas,?\s*)?(?:nos\s+inclinamos|asumimos|insistimos)\b[^.!?]*"), ""),
    (re.compile(r"(?i)\s*\([^()]*\b(?:dejaremos|dejamos|marcamos|asumimos)\b[^()]*\)"), ""),
    (re.compile(r"(?i)[,;]?\s*(?:pero\s+)?(?:yo\s+)?creo\s+que\s+"), " "),
    (re.compile(r"(?i)[,;]?\s*en\s+mi\s+opini[óo]n\s*,?\s*"), " "),
    (re.compile(r"(?i)[,;]?\s*a\s+mi\s+parecer\s*,?\s*"), " "),
    (re.compile(r"(?i)[,;]?\s*en\s+nuestra\s+opini[óo]n\s*,?\s*"), " "),
    (re.compile(r"(?i)\bme\s+parece\s+(?:que\s+)?"), ""),
]
RE_SENT_BAD = re.compile(r"(?i)^\s*(?:fuente\s+imagen|\(?\s*nota:?\s*la\s+pauta\s+original|esperemos|ojo\s+con\s+eso)")
RE_INF = re.compile(r"(?i)\byo\b|\bpuse\b|\bcreo\b|según yo|segun yo|\bsg\b|\bpq\b|\bporq\b|\?\?|!!|\bu\.u\b|:\(|no recuerdo|me parece|mi duda|\balguien\b|\bojo\b|guevara|\btmbn\b|\bx\d\b|pusieron|SIIII|\bq\b")
ABBR = [("p. ej.", "p¶ej¶"), ("ej.", "ej¶"), ("Dr.", "Dr¶"), ("Dra.", "Dra¶"), ("etc.", "etc¶"), ("vs.", "vs¶"), ("aprox.", "aprox¶"), ("Fig.", "Fig¶"), ("sp.", "sp¶"), ("Sr.", "Sr¶")]

def split_sentences(t):
    for a, b in ABBR:
        t = t.replace(a, b)
    t = re.sub(r"\b([A-Z])\.(?=\s)", r"\1¶", t)       # "P. falciparum"
    t = re.sub(r"(?<=\d)\.(?=\s|$)", lambda m: "¶" if False else ".", t)
    t = re.sub(r"(?<![.\d])(\d{1,2})\.(?=\s+[A-ZÁÉÍÓÚa-z¿(])", r"\1¶", t)   # "1. Algo"
    parts = re.split(r"(?<=[.!?])\s+(?=[A-ZÁÉÍÓÚÑ¿¡\"“\[(‘¿])", t)
    return [p.replace("¶", ".") for p in parts]

def cap(s):
    s = s.strip()
    return s[:1].upper() + s[1:] if s else s

SENT_OVERRIDES = [
    ("Sin embargo, por predominar el compromiso hemodinámico, nos inclinamos", "Por predominar el compromiso hemodinámico, lo más probable es un hemoperitoneo."),
    ("Si, en cambio, hubiese tenido predominancia de los signos peritoneales", "Si hubiesen predominado los signos peritoneales, sería más probable la dehiscencia."),
    ("Solo por la parte de la pregunta que dice", "Como el enunciado dice «probable infección de VPH», corresponde tipificarlo."),
    ("Aunque al inicio parece difícil, es una pregunta bastante sencilla", ""),
    ("Es una pregunta rara, por la forma en que está redactada la pregunta, pero A, B, D y E", "A, B, D y E pasan por el 1 y, por tanto, no son significativas."),
    ("Discutimos mucho esta pregunta con varios especialistas", ""),
    ("Como se pregunta la conduta inicial", "Como se pregunta la conducta inicial, la respuesta es el gluconato de calcio, para el manejo de la hiperkalemia."),
    ("Es una pregunta que induce a error, ya que ambas respuestas son correctas", "Ambas respuestas son correctas; la B es la más adecuada por ser solo un grupo y dar la definición de incidencia en el enunciado."),
    ("Por la clínica con algo de dolor y el antecedente de fumar, asumiremos", "Por la clínica con algo de dolor y el antecedente de fumar, el cuadro apunta a un cáncer de páncreas en específico, por lo que la TAC es la alternativa correcta."),
    # (prefijo de la oración original, reemplazo neutro o "" para descartar)
    ("Yo marcaría PCR, pero el problema", "La PCR sería el examen más específico, pero demora; para decidir la vía de parto lo único inmediato es la tinción de Tzanck, aunque tiene menor rendimiento."),
    ("Es una pregunta muy muy discutible, pero yo marcaría el tratamiento antibiótico", "El tratamiento antibiótico es lo básico de la laberintitis aguda; la cirugía se evalúa caso a caso."),
    ("Sigue siendo una pregunta discutible, pero yo marcaría TAC", "La TAC es la alternativa más adecuada."),
    ("Para mí es una salida del tapón mucoso", "Corresponde a una salida del tapón mucoso (metrorragia escasa y autolimitada)."),
    ("Como no está dentro de las opciones marcaría la Placenta Previa", "Entre las opciones disponibles, la placenta previa es la más compatible, por estar todo bien y sin compromiso fetal."),
    ("No estoy 100% seguro de esta respuesta, pero yo marcaría insulina", "La alternativa más adecuada es la insulina."),
    ("Yo marcaría Haloperidol, como primera opción", "El haloperidol sigue siendo la primera opción."),
    ("Yo marqué observar, a pesar del tamaño", "Dado el énfasis en las características benignas del quiste, la conducta razonable es observar."),
    ("Como se pregunta el tratamiento inicial, yo marqué la E", "Como se pregunta el tratamiento inicial, la E sigue las recomendaciones norteamericanas."),
    ("Según recuerdo, no cumplía criterios de corioamnionitis", "No cumplía criterios de corioamnionitis clínica, por lo que la conducta era la amniocentesis."),
    ("Sin embargo no recuerdo 100% bien esta pregunta", "Si hubiese tenido taquicardia materna y fetal, sí estaría indicada la interrupción por cesárea."),
    ("Aunque la nasofibroscopía es el mejor examen", "Aunque la nasofibroscopía es el mejor examen (y se hará de segunda línea), el inicial es la radiografía de cavum, que es barato y menos molesto para el niño."),
    ("Nota: la típica pregunta de pediatría", "Ante una alteración aislada, sin otros hallazgos y con el resto del examen normal, la conducta es observar."),
    ("La conducta es:”… ¡¡¡Observar!!!", ""),
    ("(Nota: el autor de la pauta señala", "Lo más correcto es comprimir el várice sangrante y elevar la extremidad; la pregunta excede los conocimientos de un médico general."),
    ("(Nota: la pauta original no recuerda bien", "La conducta apunta a tamsulosina."),
]

def neutralize_sentence(s):
    """Devuelve (texto|None, motivo). None = descartar la oración."""
    orig = s
    s = s.strip()
    if not s:
        return None, None
    for pre, rep in SENT_OVERRIDES:
        if s.startswith(pre):
            return (rep or None), ("editada" if rep else "descartada")
    flag_bad = bool(RE_META_ANY.search(s)) and bool(RE_FLAG_BAD.search(s))
    if RE_SENT_BAD.search(s):
        return None, "descartada"
    # cola meta ("..., por lo que es una mala pregunta")
    if RE_META_WHOLE.match(s):
        return None, "meta" + ("!" if flag_bad else "")
    t = s
    if RE_META_LEAD.match(t):
        rest = RE_META_LEAD.sub("", t, count=1)
        rest = re.sub(r"^(?:y|e)\s+(?=[a-z])", "", rest)
        t = cap(rest) if len(rest) > 12 else ""
        if not t:
            return None, "meta" + ("!" if flag_bad else "")
    else:
        t2 = RE_META_TAIL.sub(".", t)
        if t2 != t:
            t = t2
    if RE_META_CLAUSE.search(t):
        clauses = re.split(r"(?<=[,;:])\s+", t)
        keep = [c for c in clauses if not RE_META_CLAUSE.search(c)]
        rest = " ".join(keep).strip()
        rest = re.sub(r"^(?:pero|aunque|ya que|porque|y|e|sin embargo,?|por lo que|dado que|por tanto,?)\s+", "", rest, flags=re.I)
        rest = rest.rstrip(",;:")
        if len(rest) < 15 or not keep:
            return None, "meta" + ("!" if flag_bad else "")
        t = cap(rest) + ("." if not rest.endswith((".", "!", "?")) else "")
    for rx, rep in RE_FP_STRIP:
        t = rx.sub(rep, t)
    t = cap(re.sub(r"\s+,", ",", re.sub(r"\s{2,}", " ", t)))
    if RE_FP.search(t):
        return None, "primera_persona"
    if RE_META_WHOLE.match(t) or not re.search(r"\w{3}", t):
        return None, "meta" + ("!" if flag_bad else "")
    return t, ("editada" + ("!" if flag_bad else "")) if t != orig.strip() else None

# ------------------------------------------------------------------ limpieza principal
class Cleaner:
    def __init__(self, V):
        self.V = V
        self.log = []   # (examen, id, campo, tipo, antes, despues)
        self.flags = collections.defaultdict(set)
        self.exam = None

    def base(self, t, kind):
        t = norm(t)
        t = RE_NOTA_ANADIDA.sub("", t)
        t = re.sub(r"\bme[^\sA-Za-z]\s*(?=metformina)", "", t)
        t = re.sub(r"\bme[~{e]ormina\b", "metformina", t, flags=re.I).replace("SalbutamolSínt", "Salbutamol")
        t = t.replace("actividad:sica", "actividad física").replace("mma3", "mm3").replace("eSclerodactilia", "Esclerodactilia")
        t = re.sub(r"\bcor<(?=corticoides)", "", t)
        t = t.replace("2xfía", "2 × Na")
        t = RE_PLAT.sub(" ", t)
        if kind == "o":
            t = RE_HEADER.sub("", t)
        else:
            t = RE_HEADER_EXPL.sub(" ", t)
            t = RE_HEADER.sub("", t) if kind == "e" else t
        t = RE_GUEVARA.sub("", t)
        # unir líneas ANTES de buscar URLs partidas
        t = re.sub(r"-\n(?=[a-záéíóúñ])", "- ", t)       # corte de sílaba "tra-\ntamiento"
        if kind == "e":
            t = re.sub(r"\n(?=\s*(?:\d+[.)]|[-•·]|[a-e][.)])\s)", "¶LI¶", t)
        t = re.sub(r"\s*\n\s*", " ", t)
        t = t.replace("¶LI¶", "\n")
        t = RE_URL_PAREN.sub(" ", t)
        t = RE_IMG_NOTE.sub(" ", t)
        t = RE_FOTO.sub(" ", t)
        t = re.sub(r"(?i)\(?\bfuente\s*:\s*(?:https?://|www\.|hxps?:)\s*\S+\)?", " ", t)
        t = RE_URL.sub(" ", t)
        t = re.sub(r"(?i)\(?\bfuente\s*:\s*\)?\s*(?=[¿A-ZÁÉÍÓÚ]|$)", " ", t)
        t = re.sub(r"\(\s*\)", " ", t)
        t = re.sub(r"\s*\b(?:\d{1,2}\s+)?[Ll]ia\.\.\.", " ", t)
        t = re.sub(r"\s*Fin de la (?:primera|segunda) parte\.?", " ", t, flags=re.I)
        t = repair_ligs(t, self.V, self.exam)
        t = join_hyphen(t, self.V)
        t = re.sub(r"[ \t]{2,}", " ", t)
        t = re.sub(r"\s+([,.;:?!)])", r"\1", t)
        t = re.sub(r"([(¿¡])\s+", r"\1", t)
        t = re.sub(r"\.{2,}(?=\s|$)", ".", t) if kind != "e" else t
        t = re.sub(r"[ \t]*\n[ \t]*", "\n", t)
        t = re.sub(r"\s*\(\s*(?=[.,;!?]|$)", "", t)
        t = re.sub(r"(?<!\.)\.\.(?!\.)", ".", t)
        t = re.sub(r",\s*\.", ".", t)
        t = re.sub(r"\.\s+\.", ".", t)
        return t.strip()

    def stem(self, t, ex, qid):
        out = self.base(t, "q")
        out = re.sub(r"^[:.\s]+", "", out)
        out = re.sub(r":\s*(?=[¿A-ZÁÉÍÓÚ])", ": ", out)
        return out

    def option(self, t, pos):
        t = norm(t)
        m = re.match(r"^\s*\(?([a-eA-E])\s*[.)]\s*", t)
        letter = m.group(1).lower() if m else None
        if m:
            t = t[m.end():]
        out = self.base(t, "o")
        return out, letter

    def freeform(self, t, ex, qid):
        """Quita comentarios informales del recopilador en enunciados/alternativas (dic-2024)."""
        if not t:
            return t
        for rx, rep in RE_FP_STRIP:
            t = rx.sub(rep, t)
        t = re.sub(r"(?i)\s*\((?:[^()]*(?:\byo\b|\bpuse\b|\bcreo\b|segun yo|según yo|\bpq\b|\bq\b|ojo|\?\?|!!)[^()]*)\)", "", t)
        keep = []
        for sen in split_sentences(t):
            if RE_INF.search(sen):
                self.log.append((ex, qid, "enunciado/alternativa", "informal", sen.strip(), ""))
                continue
            keep.append(sen)
        t = " ".join(keep)
        t = re.sub(r"(?i)\s*(?:u\.u|:\(|:\)|!{2,}|\?{2,})", "", t)
        return re.sub(r"\s{2,}", " ", t).strip()

    def explanation(self, t, ex, qid):
        t = self.base(t, "e")
        if not t:
            return ""
        flagged = False
        paras = []
        for para in t.split("\n"):
            lead = re.match(r"^\s*(?:\d+[.)]|[-•·]|[a-e][.)])\s", para)
            keep = []
            for s in split_sentences(RE_DISPUTADA.sub("", para)):
                if RE_DISPUTADA.search(para):
                    flagged = True
                new, why = neutralize_sentence(s)
                if why:
                    self.log.append((ex, qid, "explicacion", why, s.strip(), new or ""))
                    if why.endswith("!"):
                        flagged = True
                if new:
                    keep.append(new)
            para2 = " ".join(keep)
            if para2:
                paras.append(para2)
        if flagged:
            self.flags[(ex, qid)].add("mala/discutible")
        out = "\n".join(paras)
        return re.sub(r"[ \t]{2,}", " ", out).strip()


# ------------------------------------------------------------------ carga
def load_bank(path):
    d = json.loads(Path(path).read_text())
    out = {}
    for code, qs in d.items():
        for q in qs:
            out.setdefault(q["key"], q)
    return out

def build_vocab(app, bank):
    V = Vocab()
    for ex, j in app.items():
        if ex == "eunacom-dic-2025":
            continue
        for q in j["questions"]:
            V.add(q.get("question") or ""); V.add(q.get("explanation") or "")
            for o in q["options"]:
                V.add(o)
    for k, b in bank.items():
        if k.startswith("eunacom-dic-2025"):
            continue
        V.add(b["stem"]); V.add(b.get("explicacion") or "")
        for o in b["options"]:
            V.add(o["text"])
    # texto limpio de libros/clases del repo (solo para ampliar el vocabulario)
    def walk(x):
        if isinstance(x, str): V.add(x)
        elif isinstance(x, dict):
            for v in x.values(): walk(v)
        elif isinstance(x, list):
            for v in x: walk(v)
    extra = [ROOT / "books/data" / n for n in ("banco_preguntas_v3.json", "preguntas_practica_v3.json", "atlas_392_enriched.json", "atlas_392_cases.json")]
    extra += list((ROOT / "classes/curriculum").glob("*.json"))
    for p in extra:
        try: walk(json.loads(p.read_text()))
        except Exception: pass
    V.add("cognitive assessment montreal cognitive impairment tienden tiende tienen tiene vildagliptina supraglóticos utilizarlo tiotropio tipificación tinción subóptima hiperactiva genopatías creatinuria hiperactiva neuropatía miopatía uropatía roncopatía vitíligo testículo parotídea hernioplastía mediastínica mediastínicas multípara notificación antibióticos antibiótico cognitivo postherpética activa alternativo anticoagular cardiovertir hematíes medias")
    V.build()
    return V

# correcciones manuales de explicación (clave "examen_qN"): reemplazan la frase/ explicación tras limpieza automática
MANUAL_EXPL = {
}

def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    todos = "--todos" in sys.argv
    app, files = {}, {}
    for f in sorted(glob.glob(str(APPDIR / "eunacom-*.json"))):
        ex = Path(f).stem
        app[ex] = json.loads(Path(f).read_text())
        files[ex] = f
    bank, orig = load_bank(BANK), load_bank(ORIG)
    V = build_vocab(app, bank)
    C = Cleaner(V)
    exams = args or [e for e in app if todos or e not in PENDIENTES]
    OUT.mkdir(parents=True, exist_ok=True)
    (OUT / "img").mkdir(exist_ok=True)

    report = {}
    cleaned_by_key = {}
    imgs_used = {}
    for ex in exams:
        j = json.loads(json.dumps(app[ex]))  # copia
        C.exam = ex
        R = collections.defaultdict(list)
        n_bank = 0
        for q in j["questions"]:
            qid = q["id"]; key = f"{ex}_q{qid}"
            b = bank.get(key); o = orig.get(key)
            raw_expl = q.get("explanation") or ""
            raw_q = q.get("question") or ""
            raw_opts = list(q["options"])
            # ---- limpieza de texto
            new_q = C.stem(raw_q, ex, qid)
            new_opts, letters = [], []
            for i, op in enumerate(raw_opts):
                t, lt = C.option(op, i)
                new_opts.append(t); letters.append(lt)
            irregular = any(lt and lt != "abcde"[i] for i, lt in enumerate(letters))
            if irregular:
                R["prefijos_desordenados"].append(qid)
            new_expl = C.explanation(raw_expl, ex, qid)
            if key in MANUAL_EXPL and MANUAL_EXPL[key]:
                new_expl = MANUAL_EXPL[key]
            if new_q != raw_q.strip() or new_opts != raw_opts or new_expl != raw_expl.strip():
                R["texto_limpiado"].append(qid)
            app_key = (q.get("correctAnswer") or "").lower()
            extra = {}
            use_bank = False
            extra_force_excl = None
            if b is not None and not b["audit"].get("excluir") and len(b["options"]) == len(new_opts):
                bq = C.stem(b["stem"], ex, qid)
                bo = [C.option(o["text"], i)[0] for i, o in enumerate(b["options"])]
                nz = lambda t: re.sub(r"\s+", " ", t).strip().lower()
                rs = difflib.SequenceMatcher(None, nz(new_q), nz(bq)).ratio()
                ro = min([difflib.SequenceMatcher(None, nz(x), nz(y)).ratio() for x, y in zip(new_opts, bo)] + [1])
                if rs < 0.85 or ro < 0.6:
                    use_bank = True
                    R["texto_banco"].append((qid, round(rs, 2), round(ro, 2), b["audit"].get("grupo")))
                    new_q, new_opts = bq, bo
                    app_key = b["correcta"].lower()
                    new_expl = C.explanation(b.get("explicacion") or "", ex, qid)
            aee = b is not None and (b.get("reconstruida_aee") or b.get("creada_aee"))
            if aee:  # texto limpio escrito por AEE: se usa tal cual (sin heurísticas de limpieza)
                new_q = b["stem"]; new_opts = [o["text"] for o in b["options"]]
                new_expl = b["explicacion"]; app_key = b["correcta"].lower()
                use_bank = True
            if ex == "eunacom-dic-2024" and not aee:
                new_q = C.freeform(new_q, ex, qid)
                new_opts = [C.freeform(o, ex, qid) for o in new_opts]
                new_q = re.sub(r"^\(\d+\)\s*", "", new_q)
                if any(re.search(r"(?:^|\s)[b-f]\.\s+(?!Coli)\S", t) for t in [new_q] + new_opts):
                    extra_force_excl = "alternativas mezcladas dentro del texto en la fuente"
            if b is None:
                R["sin_banco"].append(qid)
            else:
                n_bank += 1
                a = b["audit"]; est = a["estado"]
                bank_key = b["correcta"].lower()
                changed_by_audit = bool(a.get("aplicado") and a.get("clave_original") and a["clave_original"].lower() != bank_key)
                new_key = app_key
                note = []
                if changed_by_audit:
                    if app_key == a["clave_original"].lower():
                        new_key = bank_key
                        R["clave_cambiada"].append((qid, app_key.upper(), new_key.upper(), a["motivo"]))
                    else:
                        R["clave_distinta_anotada"].append((qid, app_key.upper(), a["clave_original"], bank_key.upper(), "banco cambió su clave pero la app ya difería"))
                        extra["revisar"] = True; note.append(f"clave app {app_key.upper()} vs banco {bank_key.upper()}")
                elif bank_key != app_key:
                    ok = o["correcta"].lower() if o else None
                    R["clave_distinta_anotada"].append((qid, app_key.upper(), (ok or "").upper(), bank_key.upper(), "difiere del banco original" if ok else "difiere del banco (pregunta nueva en banco)"))
                    extra["revisar"] = True; note.append(f"clave app {app_key.upper()} vs banco {bank_key.upper()}")
                # explicación corregida del banco
                corrected = (not use_bank) and bool(a.get("explicacion_original") or b.get("explicacion_revisada"))
                key_ok = new_key == bank_key
                if corrected and key_ok:
                    ne = C.explanation(b["explicacion"], ex, qid)
                    if ne and ne != new_expl:
                        R["explicacion_banco"].append((qid, est, "vacía en app" if not raw_expl.strip() else "reemplazada"))
                        new_expl = ne
                elif corrected and not key_ok:
                    R["explicacion_no_transferida"].append((qid, "clave app difiere de banco"))
                # marcas
                if a.get("excluir"):
                    extra["excluir"] = True; R["excluir"].append((qid, est, a["motivo"]))
                if est in ("CLAVE_DISCUTIBLE", "MAL_VINCULADA") or (est == "CLAVE_ERRONEA" and not a.get("aplicado")):
                    extra["revisar"] = True; R["revisar"].append((qid, est, a["confianza"], a.get("propuesta"), a["motivo"]))
                    note.append(f"{est}: {a['motivo']}")
                if b.get("imagen"):
                    im = b["imagen"]; fn = Path(im["src"]).name
                    extra["image"] = {"src": IMG_URL + fn, "credit": im["credit"], "nota": im["nota"]}
                    imgs_used[fn] = IMGSRC / im["src"]
                    R["imagen"].append((qid, fn, im["credit"]))
                if extra.get("revisar") or extra.get("excluir"):
                    extra["audit_nota"] = "; ".join(dict.fromkeys(note + ([a["motivo"]] if a.get("excluir") else [])))[:300]
                q["correctAnswer"] = new_key
            if extra_force_excl and not extra.get("excluir"):
                extra["excluir"] = True
                extra["audit_nota"] = ((extra.get("audit_nota") + "; ") if extra.get("audit_nota") else "") + extra_force_excl
                R["excluir_texto"].append((qid, extra_force_excl))
            if irregular and not use_bank and not extra.get("excluir") and not (b is not None and b["audit"].get("aplicado") and b["audit"].get("clave_original")):
                extra["excluir"] = True
                extra["audit_nota"] = ((extra.get("audit_nota") + "; ") if extra.get("audit_nota") else "") + "alternativas desordenadas/mezcladas con el enunciado en la fuente; clave no verificable"
                R["excluir_texto"].append((qid, "alternativas con letras irregulares en la fuente"))
            if C.flags.get((ex, qid)):
                if "revisar" not in extra:
                    extra["revisar"] = True
                    R["revisar_fuente"].append((qid, "la fuente la califica de mala/discutible"))
                    extra["audit_nota"] = (extra.get("audit_nota", "") + "; " if extra.get("audit_nota") else "") + "la fuente original la califica de discutible/mala"
            # texto vacío tras limpieza => excluir
            if len(new_q) < 15 or any(not x for x in new_opts):
                extra["excluir"] = True; extra.setdefault("audit_nota", "enunciado o alternativas vacíos tras limpieza")
                R["excluir_texto"].append((qid, "enunciado/alternativas vacíos o ilegibles"))
            q["question"] = new_q
            q["options"] = new_opts
            q["explanation"] = new_expl
            if b is not None and (b.get("reconstruida_aee") or b.get("creada_aee")):
                extra["origen"] = "AEE"
                if b.get("creada_aee"): extra["creada"] = True
                else: extra["reconstruida"] = True
            for k, v in extra.items():
                q[k] = v
            cleaned_by_key[key] = q
        # preguntas creadas por AEE que no existen en la fuente de la app (completar a 180)
        ids = {qq["id"] for qq in j["questions"]}
        nuevas = sorted((int(k.rsplit("_q", 1)[1]), bb) for k, bb in bank.items()
                        if k.startswith(ex + "_q") and bb.get("creada_aee") and int(k.rsplit("_q", 1)[1]) not in ids)
        for nid, bb in nuevas:
            j["questions"].append({"id": nid, "question": bb["stem"], "options": [o["text"] for o in bb["options"]],
                                   "correctAnswer": bb["correcta"].lower(), "explanation": bb["explicacion"],
                                   "origen": "AEE", "creada": True})
            R["creadas_nuevas"].append(nid)
        if nuevas:
            for kk in ("total_questions", "questions_with_answers"):
                if kk in j: j[kk] = len(j["questions"])
        report[ex] = (R, n_bank, len(j["questions"]))
        (OUT / (ex + ".json")).write_text(json.dumps(j, ensure_ascii=False, indent=2) + "\n")

    # ---- imágenes (comprimidas ≤150 KB, ~900 px)
    for fn, src in imgs_used.items():
        dst = OUT / "img" / fn
        if dst.exists():
            continue
        q = 85
        subprocess.run(["magick", str(src), "-auto-orient", "-resize", "900x900>", "-strip", "-quality", str(q), str(dst)], check=True)
        while dst.stat().st_size > 150_000 and q > 40:
            q -= 8
            subprocess.run(["magick", str(src), "-auto-orient", "-resize", "900x900>", "-strip", "-quality", str(q), str(dst)], check=True)

    # ---- topic_index
    ti_src = json.loads((APPDIR / "topic_index.json").read_text())
    stats = collections.Counter()
    def walk(x):
        if isinstance(x, dict):
            if "choices" in x and "id" in x:
                k = x["id"]; c = cleaned_by_key.get(k)
                if c is None:
                    stats["no_actualizadas"] += 1
                else:
                    stats["actualizadas"] += 1
                    x["question"] = c["question"]
                    for ch, t in zip(x["choices"], c["options"]):
                        ch["text"] = t
                    x["correctAnswer"] = c["correctAnswer"].upper()
                    x["explanation"] = c["explanation"]
                    for f in ("image", "excluir", "revisar", "audit_nota"):
                        if f in c: x[f] = c[f]
                        else: x.pop(f, None)
            for v in x.values(): walk(v)
        elif isinstance(x, list):
            for v in x: walk(v)
    walk(ti_src)
    (OUT / "topic_index.json").write_text(json.dumps(ti_src, ensure_ascii=False, indent=2) + "\n")
    # index.json (sin cambios) para copiar completo
    (OUT / "index.json").write_text((APPDIR / "index.json").read_text())

    # ---- logs
    with open(AUD / "APP_LIMPIEZA_LOG.csv", "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f, delimiter=";")
        w.writerow(["examen", "id", "campo", "tipo", "antes", "despues"])
        for r in C.log: w.writerow(r)
    (AUD / "APP_CAMBIOS_resumen.json").write_text(json.dumps({ex: {"banco": nb, "total": nt, **{k: v for k, v in R.items()}} for ex, (R, nb, nt) in report.items()}, ensure_ascii=False, indent=1, default=list))
    write_md(report, C, stats, exams)
    print("topic_index:", dict(stats))
    for ex, (R, nb, nt) in report.items():
        print(ex, nt, "banco", nb, {k: len(v) for k, v in R.items()})

def write_md(report, C, stats, exams):
    L = ["# Cambios para la app: reconstrucciones corregidas", "",
         "Generado por `books/scripts/limpiar_app_reconstrucciones.py`. Salida en `books/data/app_reconstrucciones/` (la app NO se modificó).",
         "Se copia con `books/scripts/aplicar_a_app.sh` (con respaldo). Las claves del texto original de la app se cambian solo si el banco las corrigió (audit.aplicado)",
         "y la app tenía la clave original; si difieren por otro motivo se deja la de la app y se anota (`revisar`).", "",
         "Campos nuevos por pregunta (opcionales): `image` {src, credit, nota}, `excluir` (true: no usar), `revisar` (true: clave/enunciado dudoso), `audit_nota`.", "",
         f"topic_index.json: {stats.get('actualizadas',0)} entradas actualizadas, {stats.get('no_actualizadas',0)} sin cambios (examen no procesado o id inexistente).", ""]
    tot = collections.Counter()
    for ex in exams:
        R, nb, nt = report[ex]
        L += [f"## {ex}", f"- Preguntas: {nt} (emparejadas con el banco: {nb}; sin emparejar: {len(R['sin_banco'])})"]
        for k in R: tot[k] += len(R[k])
        L.append(f"- Texto limpiado: {len(R['texto_limpiado'])} preguntas")
        if R["prefijos_desordenados"]: L.append(f"- Alternativas con letra fuera de orden en la fuente (se usó la posición): {sorted(R['prefijos_desordenados'])}")
        if R["texto_banco"]: L.append(f"- Enunciado/alternativas tomados del banco (la app los tenía corridos o dañados): {[x[0] for x in R['texto_banco']]}")
        L.append(f"- Claves cambiadas: {len(R['clave_cambiada'])}")
        for qid, a, n, m in R["clave_cambiada"]: L.append(f"  - P{qid}: {a} -> {n} ({m})")
        L.append(f"- Clave de la app distinta de la del banco (no se cambió, anotada y marcada `revisar`): {len(R['clave_distinta_anotada'])}")
        for qid, a, o, bk, m in R["clave_distinta_anotada"]: L.append(f"  - P{qid}: app {a}, banco original {o or '-'}, banco actual {bk} ({m})")
        L.append(f"- Explicaciones corregidas del banco: {len(R['explicacion_banco'])}" + (f" (no transferidas por clave distinta: {[x[0] for x in R['explicacion_no_transferida']]})" if R['explicacion_no_transferida'] else ""))
        L.append(f"- Imágenes agregadas: {len(R['imagen'])}" + (": " + ", ".join(f"P{q} ({f})" for q, f, c in R["imagen"]) if R["imagen"] else ""))
        L.append(f"- Excluir: {len(R['excluir']) + len(R['excluir_texto'])}" + (": " + ", ".join(f"P{x[0]} ({x[1]})" for x in R["excluir"] + R["excluir_texto"]) if R["excluir"] or R["excluir_texto"] else ""))
        L.append(f"- Revisar (clave discutible/errónea sin aplicar, mal vinculada, o la fuente la llama mala/discutible): {len(R['revisar']) + len(R['revisar_fuente'])}")
        if R["revisar"]: L.append("  - Banco: " + ", ".join(f"P{x[0]} ({x[1]}, propuesta {x[3]})" for x in R["revisar"]))
        if R["revisar_fuente"]: L.append("  - Por comentario de la fuente: " + ", ".join(f"P{x[0]}" for x in R["revisar_fuente"]))
        L.append("")
    L += ["## Totales", ""] + [f"- {k}: {v}" for k, v in sorted(tot.items())]
    L += ["", "Detalle de las oraciones de comentario del recopilador eliminadas/editadas: `classes/docs/audit_banco/APP_LIMPIEZA_LOG.csv`."]
    (AUD / "APP_CAMBIOS.md").write_text("\n".join(L) + "\n")

if __name__ == "__main__":
    main()
