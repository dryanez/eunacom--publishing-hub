#!/usr/bin/env python3
"""build_anki.py <libro> [--force-media] [--solo gastro-01,gastro-02]

Arma books/dist/07_Anki/AEE_EUNACOM_V3_<Libro>.apkg desde las tarjetas editables
books/data/anki/<libro>/<classId>.json.

Pasos: (1) node extract_sources.cjs <libro>  → _fuentes/fuentes.json (meta, fotos, algoritmo, tiempos de video)
       (2) valida tarjetas (validate_cards.py)
       (3) genera media en books/data/anki/<libro>/_media (caché; --force-media la rehace)
       (4) escribe el .apkg con genanki (modelos e IDs FIJOS, GUID estable = hash(classId, id))

Dependencias: genanki (uv pip install --target ~/fotos_tools/pylib genanki), Pillow, playwright (Python), ffmpeg, node.
"""
import argparse
import hashlib
import html
import json
import os
import re
import subprocess
import sys
import unicodedata
from pathlib import Path

sys.path.insert(0, os.path.expanduser("~/fotos_tools/pylib"))
sys.path.insert(0, str(Path(__file__).resolve().parent))
import genanki  # noqa: E402
from PIL import Image  # noqa: E402

import conceptos as K  # noqa: E402
import render_media as R  # noqa: E402
from validate_cards import validate  # noqa: E402

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[2]
MEDIA_SRC = ROOT / "classes" / "media"

# ─── IDs FIJOS: no cambiar nunca (Anki los usa para actualizar en vez de duplicar) ───
MODEL_ID_CLOZE = 1729000310001
MODEL_ID_IMAGEN = 1729000310002
MODEL_ID_OCCL = 1729000310003
FREQ_THRESHOLDS = (7, 14)  # n.º de preguntas reales del tema: <7 → 1★ · 7–13 → 2★ · ≥14 → 3★

# ───────────────────────────── estilo ─────────────────────────────
CSS = """
.card{font-family:-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;font-size:21px;line-height:1.45;
 color:#0f172a;background:#fbfbf9;text-align:left;padding:4px 6px;max-width:760px;margin:0 auto}
.nightMode.card,.night_mode .card{color:#e5e7eb;background:#16181d}
.hdr{font-size:12px;letter-spacing:.07em;text-transform:uppercase;color:#15803d;font-weight:700;margin-bottom:10px}
.nightMode .hdr{color:#4ade80}
.txt{font-size:22px}
.cloze{font-weight:700;color:#1d4ed8}
.nightMode .cloze{color:#93c5fd}
.cloze-inactive{color:inherit}
hr#answer{border:0;border-top:1px solid #cbd5e1;margin:16px 0}
.nightMode hr#answer{border-top-color:#374151}
.extra{background:#f0fdf4;border-left:4px solid #16a34a;padding:8px 12px;border-radius:6px;margin:10px 0;font-size:18px}
.nightMode .extra{background:#132a1c;border-left-color:#22c55e}
.img img,.cap img{max-width:100%;height:auto;border-radius:8px;margin:8px 0;display:block}
.q{font-size:22px;font-weight:700;margin:6px 0}
.row{margin:6px 0;font-size:19px}.row b{color:#15803d}.nightMode .row b{color:#4ade80}
.meta{font-size:13.5px;color:#64748b;margin-top:14px;line-height:1.5}
.meta div{margin:3px 0}
.nightMode .meta{color:#9ca3af}
details{margin-top:10px;font-size:15px;background:#f1f5f9;border-radius:6px;padding:6px 10px}
.nightMode details{background:#1f2937}
summary{cursor:pointer;font-weight:600;color:#334155}.nightMode summary{color:#cbd5e1}
.pista{font-size:20px;font-weight:700;margin:8px 0;color:#b45309}.nightMode .pista{color:#fbbf24}
a{color:#2563eb}.nightMode a{color:#93c5fd}
/* glosario clicable (estilo AMBOSS) + reproductor AEE */
.aee-term{border-bottom:1.5px dotted #0d9488;cursor:pointer;-webkit-tap-highlight-color:rgba(13,148,136,.15)}
.nightMode .aee-term,.night_mode .aee-term{border-bottom-color:#2dd4bf}
.aee-pop{position:fixed;left:50%;bottom:10px;transform:translateX(-50%);width:92%;max-width:600px;max-height:75vh;overflow:auto;
 z-index:9999;box-sizing:border-box;background:#ffffff;color:#0f172a;border:1px solid #cbd5e1;border-radius:12px;
 padding:12px 40px 12px 14px;font-size:15.5px;line-height:1.45;box-shadow:0 8px 28px rgba(15,23,42,.22);text-align:left}
.nightMode .aee-pop,.night_mode .aee-pop{background:#1f242c;color:#e5e7eb;border-color:#374151;box-shadow:0 8px 28px rgba(0,0,0,.6)}
.aee-pt b{color:#0f766e;font-size:16.5px}.nightMode .aee-pt b,.night_mode .aee-pt b{color:#2dd4bf}
.aee-tipo{font-size:11px;text-transform:uppercase;letter-spacing:.06em;color:#64748b;margin-left:4px}
.aee-pd{margin:5px 0 2px}
.aee-x{position:absolute;top:6px;right:8px;border:0;background:transparent;font-size:22px;line-height:1;color:#64748b;cursor:pointer;padding:4px}
.aee-btns{display:flex;flex-wrap:wrap;gap:6px;margin-top:9px}
.aee-btn{display:inline-block;font-size:13.5px;padding:5px 10px;border-radius:7px;border:1px solid #cbd5e1;background:#f8fafc;color:#0f172a;text-decoration:none}
a.aee-btn{color:#1d4ed8}
.nightMode .aee-btn,.night_mode .aee-btn{background:#111827;border-color:#374151;color:#e5e7eb}
.nightMode a.aee-btn,.night_mode a.aee-btn{color:#93c5fd}
.aee-player{display:none;margin-top:10px;border-radius:10px;overflow:hidden;border:1px solid #cbd5e1;background:#000}
.nightMode .aee-player,.night_mode .aee-player{border-color:#374151}
.aee-player iframe{width:100%;aspect-ratio:16/10;border:0;display:block}
.aee-glos{display:none}
"""

GLOS_JS = "<script>" + (HERE / "glosario_tmpl.js").read_text() + "</script>"

META = """<div class="meta">{{#Fuente}}<div>📖 {{Fuente}}</div>{{/Fuente}}{{#Perfil}}<div>🏷️ {{Perfil}}</div>{{/Perfil}}
{{#Clase}}<div>🎬 {{Clase}}</div>{{/Clase}}</div>
{{#PreguntaReal}}<details><summary>Pregunta real EUNACOM</summary>{{PreguntaReal}}</details>{{/PreguntaReal}}"""

# reverso: envoltorio + host del panel del glosario + JS (glosario_tmpl.js). Cambiar plantillas/CSS NO cambia el
# esquema (campos y nombres de plantilla iguales) → Anki actualiza el tipo de nota sin duplicar notas.
BACK_OPEN = '<div class="aee-back">'
BACK_CLOSE = '<div id="aee-host"></div></div>' + GLOS_JS

CLOZE_MODEL = genanki.Model(
    MODEL_ID_CLOZE, "AEE Cloze",
    fields=[{"name": n} for n in ("Texto", "Extra", "Imagen", "Fuente", "Perfil", "PreguntaReal", "Clase")],
    templates=[{
        "name": "Cloze",
        "qfmt": '<div class="hdr">AEE EUNACOM V3</div><div class="txt">{{cloze:Texto}}</div>',
        "afmt": BACK_OPEN + '<div class="hdr">AEE EUNACOM V3</div><div class="txt">{{cloze:Texto}}</div><hr id="answer">'
                '{{#Extra}}<div class="extra">{{Extra}}</div>{{/Extra}}{{#Imagen}}<div class="img">{{Imagen}}</div>{{/Imagen}}' + META + BACK_CLOSE,
    }],
    css=CSS, model_type=genanki.Model.CLOZE, sort_field_index=0)

IMAGEN_MODEL = genanki.Model(
    MODEL_ID_IMAGEN, "AEE Imagen",
    fields=[{"name": n} for n in ("Imagen", "Pregunta", "Diagnostico", "Clave", "Conducta", "Fuente", "Perfil",
                                  "PreguntaReal", "Clase", "ID")],
    templates=[{
        "name": "Imagen",
        "qfmt": '<div class="hdr">AEE EUNACOM V3 · Imagen</div><div class="img">{{Imagen}}</div><div class="q">{{Pregunta}}</div>',
        "afmt": BACK_OPEN + '<div class="hdr">AEE EUNACOM V3 · Imagen</div><div class="img">{{Imagen}}</div><div class="q">{{Pregunta}}</div>'
                '<hr id="answer"><div class="row"><b>Diagnóstico:</b> {{Diagnostico}}</div>'
                '{{#Clave}}<div class="row"><b>Clave visual:</b> {{Clave}}</div>{{/Clave}}'
                '<div class="row"><b>Conducta:</b> {{Conducta}}</div>' + META + BACK_CLOSE,
    }],
    css=CSS, sort_field_index=9)

OCCL_MODEL = genanki.Model(
    MODEL_ID_OCCL, "AEE Occlusion",
    fields=[{"name": n} for n in ("Titulo", "Frente", "Reverso", "Pista", "Respuesta", "Fuente", "Perfil",
                                  "PreguntaReal", "Clase", "ID")],
    templates=[{
        "name": "Occlusion",
        "qfmt": '<div class="hdr">AEE EUNACOM V3 · Algoritmo</div><div class="q">{{Titulo}}</div>'
                '{{#Pista}}<div class="pista">{{Pista}}</div>{{/Pista}}<div class="img">{{Frente}}</div>',
        "afmt": BACK_OPEN + '<div class="hdr">AEE EUNACOM V3 · Algoritmo</div><div class="q">{{Titulo}}</div>'
                '{{#Pista}}<div class="pista">{{Pista}}</div>{{/Pista}}<hr id="answer">'
                '<div class="extra">{{Respuesta}}</div><div class="img">{{Reverso}}</div>' + META + BACK_CLOSE,
    }],
    css=CSS, sort_field_index=9)


class Note(genanki.Note):
    pass


# ───────────────────────────── utilidades ─────────────────────────────
def slug(s, maxlen=None):
    s = unicodedata.normalize("NFKD", str(s)).encode("ascii", "ignore").decode()
    s = re.sub(r"[^A-Za-z0-9]+", "_", s).strip("_")
    return s[:maxlen].rstrip("_") if maxlen else s


STOP = {"de", "del", "la", "el", "los", "las", "y", "e", "en", "a", "por", "con", "o", "u", "al", "su", "sus"}


def short_title(title, n=4):
    words = [w for w in re.split(r"[\s,·:/()\-–—]+", title) if w and w.lower() not in STOP]
    return slug("_".join(words[:n]))


def rec_tag(rec):
    """'EUNACOM Enero 2023 · Pregunta 65' → 'Enero2023_P65'."""
    m = re.search(r"([A-Za-zÁÉÍÓÚáéíóú]+)\s+(\d{4}).*?Pregunta\s*#?\s*(\d+)", rec or "")
    if m:
        return slug(f"{m.group(1).capitalize()}{m.group(2)}_P{m.group(3)}")
    m = re.search(r"(\d{4}).*?Pregunta\s*#?\s*(\d+)", rec or "")
    return slug(f"{m.group(1)}_P{m.group(2)}") if m else None


def stable_id(*parts, mod=10**12):
    return int(hashlib.sha1("::".join(parts).encode()).hexdigest()[:12], 16) % mod + 10**12


def esc(s):
    return html.escape(html.unescape(str(s or "")), quote=False)


def keep_b(s):
    """Escapa todo salvo <b>, <i>, <br> (y respeta {{c1::…}})."""
    s = esc(s)
    return re.sub(r"&lt;(/?)(b|i|br|sub|sup)\s*/?&gt;", r"<\1\2>", s)


# ───────────────────────────── media ─────────────────────────────
class Media:
    def __init__(self, libro, cfg, fuentes, force=False):
        self.dir = ROOT / "books" / "data" / "anki" / libro / "_media"
        self.dir.mkdir(parents=True, exist_ok=True)
        self.cfg, self.fuentes, self.force = cfg, fuentes, force
        self.files, self._browser, self._algo = set(), None, {}

    def _b(self):
        if not self._browser:
            self._browser = R.Browser()
        return self._browser

    def _ok(self, p):
        if p.exists() and not self.force:
            return True
        return False

    def add(self, p):
        self.files.add(str(p))
        return f'<img src="{p.name}">'

    def foto(self, cid, src):
        meta = self.fuentes[cid]
        idx = [p["src"] for p in meta["photos"]].index(src) + 1
        out = self.dir / f"aee_{cid}_foto_{idx:02d}.jpg"
        if not self._ok(out):
            if src.lower().endswith(".svg"):  # esquemas propios en SVG → PNG vía Chromium
                img, _ = self._b().shot(f'<div id="cap" style="padding:8px"><img src="file://{MEDIA_SRC / src}" style="width:100%"></div>', "")
                R.save_jpg(img, out)
            else:
                R.save_jpg(Image.open(MEDIA_SRC / src), out)
        return self.add(out)

    def preg(self, src):
        """imagen de una pregunta real (banco: q.imagen.src, relativo a classes/media)"""
        f = MEDIA_SRC / src
        if not f.exists():
            return ""
        out = self.dir / ("aee_preg_" + re.sub(r"[^A-Za-z0-9]+", "_", Path(src).stem)[-60:] + ".jpg")
        if not self._ok(out):
            R.save_jpg(Image.open(f), out)
        return self.add(out)

    def tabla(self, cid):
        tab = self.fuentes[cid].get("table")
        if not tab:
            return ""
        out = self.dir / f"aee_{cid}_tabla_1.jpg"
        if not self._ok(out):
            img, _ = self._b().shot(R.table_html(tab, self.cfg["nombre"], self.cfg.get("color_tabla", "#15803d")), R.TABLE_CSS)
            R.save_jpg(img, out)
        return self.add(out)

    def _algo_img(self, cid):
        if cid not in self._algo:
            pw = self.fuentes[cid].get("pathway")
            self._algo[cid] = self._b().shot(R.pathway_html(pw, self.cfg["nombre"]), R.PATH_CSS) if pw else (None, {})
        return self._algo[cid]

    def algoritmo(self, cid):
        out = self.dir / f"aee_{cid}_algoritmo_1.jpg"
        if not self._ok(out):
            img, _ = self._algo_img(cid)
            if img is None:
                return ""
            R.save_jpg(img, out)
        return self.add(out)

    def occlusion(self, cid, oid, nodo):
        f = self.dir / f"aee_{cid}_occ_{oid}_q.jpg"
        b = self.dir / f"aee_{cid}_occ_{oid}_a.jpg"
        if not (self._ok(f) and self._ok(b)):
            img, boxes = self._algo_img(cid)
            front, back = R.occlusion_pair(img, boxes[nodo])
            R.save_jpg(front, f)
            R.save_jpg(back, b)
        return self.add(f), self.add(b)

    def clase(self, cid, slide):
        st = (self.fuentes[cid].get("slideTimes") or {}).get(str(slide))
        mp4 = ROOT / "classes" / "scripts" / "jsvideo" / "out" / cid / f"{cid}_clase.mp4"
        if not st or not mp4.exists():
            return ""
        out = self.dir / f"aee_{cid}_clase_{int(slide):02d}.jpg"
        if not self._ok(out):
            R.video_frame(mp4, st["end"] - 0.6, out)
        return self.add(out)

    def origen(self, cid, origen):
        o = (origen or "").split(":")
        if o[0] == "libro" and len(o) > 1 and o[1] == "tabla":
            return self.tabla(cid)
        if o[0] == "algoritmo":
            return self.algoritmo(cid)
        if o[0] == "clase" and len(o) > 1 and o[1].isdigit():
            return self.clase(cid, o[1])
        return ""

    def close(self):
        if self._browser:
            self._browser.close()


# ───────────────────────────── armado ─────────────────────────────
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("libro")
    ap.add_argument("--force-media", action="store_true")
    ap.add_argument("--solo", default="")
    ap.add_argument("--sin-extraer", action="store_true", help="no correr extract_sources.cjs")
    a = ap.parse_args()

    reg = json.loads((HERE / "libros.json").read_text())
    cfg = reg[a.libro]
    if not a.sin_extraer:
        subprocess.run(["node", str(HERE / "extract_sources.cjs"), a.libro], check=True, cwd=ROOT)
    base = ROOT / "books" / "data" / "anki" / a.libro
    fuentes = json.loads((base / "_fuentes" / "fuentes.json").read_text())["temas"]
    gdoc, terms, MATCH = K.build_glossary(a.libro)  # (re)escribe _glosario.json (conserva las definiciones)
    GLOS = gdoc["terminos"]
    TERM = {t["key"]: t for t in terms}
    libro_label = f"Manual EUNACOM {cfg['nombre']}"
    solo = set(filter(None, a.solo.split(",")))

    errs, warns = validate(a.libro, solo or None, quiet=True)
    if errs:
        print("\n".join("ERROR " + e for e in errs))
        sys.exit("Hay errores en las tarjetas; corrígelos antes de armar el mazo.")
    print(f"validación OK ({len(warns)} advertencias)")

    SECCODES = json.loads((ROOT / "books/data/v3_section_codes.json").read_text())
    realq = json.loads((ROOT / "books/data/real_questions_by_code.json").read_text())
    rq_by_tag = {}
    for code, qs in realq.items():
        for q in qs:
            rq_by_tag.setdefault(q.get("recTag"), q)

    media = Media(a.libro, cfg, fuentes, force=a.force_media)
    root_deck = f"AEE EUNACOM V3::{cfg['modulo_deck']}::{cfg['nombre']}"
    decks, stats = {}, {"cloze": 0, "imagen": 0, "occlusion": 0, "repaso": 0}

    for cid, meta in fuentes.items():
        if solo and cid not in solo:
            continue
        f = base / f"{cid}.json"
        if not f.exists():
            print(f"(sin tarjetas) {cid}")
            continue
        data = json.loads(f.read_text())
        num = int(re.sub(r"\D", "", cid.split("-")[-1]) or 0)
        deck_name = f"{root_deck}::{num:02d} {meta['topicLabel']} {meta['title']}"
        deck = decks.setdefault(cid, genanki.Deck(stable_id("deck", deck_name), deck_name))

        # ── tags comunes del tema
        short = data.get("tituloCorto") or short_title(meta["title"])
        nreal = len(meta["realQuestions"])
        stars = 3 if nreal >= FREQ_THRESHOLDS[1] else 2 if nreal >= FREQ_THRESHOLDS[0] else 1
        base_tags = [f"AEE_V3::{cfg['modulo_tag']}::{cfg['tag']}::{cid}_{short}",
                     f"AEE_V3::Frecuencia::{stars}_estrella{'s' if stars > 1 else ''}"]
        base_tags += [f"AEE_V3::Perfil_tema::{c['code']}" for c in meta["codes"]]
        base_tags += sorted({f"AEE_V3::Pregunta_real::{t}" for t in (rec_tag(r["recTag"]) for r in meta["realQuestions"]) if t})
        base_tags += [f"AEE_V3::Recurso::{cfg['libro_gordo_tag']}_Q{n:02d}" for n in meta.get("libroGordoQ", [])]

        def lvl(c):
            lv = " / ".join(f"{k} {c[k.lower()]}" for k in ("Dx", "Tx", "Seg") if c.get(k.lower()))
            return f" ({lv})" if lv else ""
        perfil = " · ".join(f"<b>{c['code']}</b> {esc(c.get('name', ''))}{lvl(c)}" for c in meta["codes"][:4])
        if len(meta["codes"]) > 4:
            perfil += f" · +{len(meta['codes']) - 4} códigos"
        # ── código(s) del Perfil V3 que enseña CADA tarjeta (campo «codigos»; si falta, se deduce)
        code_by = {c["code"]: c for c in meta["codes"]}
        par = (SECCODES.get(f"{a.libro}|{cid}") or {}).get("parrafos", {})
        sec_txt = {str(i + 1): x.get("text", "") for i, x in enumerate(meta.get("sections", []))}
        wd = lambda t: {w for w in re.findall(r"[a-záéíóúñü0-9]{4,}", (t or "").lower())}
        code_words = {}
        for cc in code_by:
            secs = {k.split(".")[0] for k, v in par.items() if cc in v}
            code_words[cc] = wd(code_by[cc].get("name", "")) | set().union(*[wd(sec_txt.get(str(int(x) + 1), "")) for x in secs] or [set()])

        def card_codes(card, text):
            cs = [x for x in (card.get("codigos") or []) if x in code_by]
            if cs:
                return cs[:2]
            if len(code_by) == 1:
                return list(code_by)
            o = (card.get("origen") or "").split(":")
            if len(o) > 2 and o[0] == "libro" and o[1] == "sec" and o[2].isdigit():
                pre = f"{int(o[2]) - 1}."
                cnt = {}
                for k, v in par.items():
                    if k.startswith(pre):
                        for x in v:
                            if x in code_by:
                                cnt[x] = cnt.get(x, 0) + 1
                if cnt:
                    best = sorted(cnt, key=lambda x: -cnt[x])
                    if len(best) == 1 or cnt[best[0]] > cnt[best[1]]:
                        return best[:1]
                    tw = wd(text)
                    return sorted(best, key=lambda x: -len(tw & code_words[x]))[:1]
            tw = wd(text)
            sc = sorted(code_by, key=lambda x: -len(tw & code_words[x]))
            return sc[:1] if sc else []

        def perfil_of(codes):
            cs = [code_by[x] for x in codes if x in code_by] or meta["codes"][:4]
            return " · ".join(f"<b>{c['code']}</b> {esc(c.get('name', ''))}{lvl(c)}" for c in cs)

        def code_tags(codes):
            cs = [code_by[x] for x in codes if x in code_by] or meta["codes"]
            t = [f"AEE_V3::Perfil::{c['code']}" for c in cs]
            for c in cs:
                t += [f"AEE_V3::Nivel::{k}_{slug(c[k.lower()])}" for k in ("Dx", "Tx", "Seg") if c.get(k.lower())]
            return t

        has_video = bool(meta.get("video") and meta.get("slideTimes"))
        sec_title = {str(i + 1): x["title"] for i, x in enumerate(meta.get("sections", []))}
        pw_slide = next((i for i, ty in enumerate(meta.get("slideTypes", [])) if ty == "pathway"), None)

        def card_time(origen, text):
            """Segundo del video donde empieza la diapositiva de origen de la tarjeta."""
            st = meta.get("slideTimes") or {}
            o = (origen or "").split(":")
            if o[0] == "clase" and len(o) > 1 and o[1] in st:
                return st[o[1]]["start"]
            if o[0] == "algoritmo" and pw_slide is not None and str(pw_slide) in st:
                return st[str(pw_slide)]["start"]
            return K.best_slide(meta, None, text)[1]

        def glos_json(text):
            out = []
            for k in MATCH.keys(text):
                g = GLOS.get(k)
                if not g:
                    continue
                out.append({"n": g["termino"], "t": g["tipo"], "d": g["def"], "p": g["pagina"],
                            "l": f"{libro_label} · p. {g['pagina']} · clase {g['claseTitulo']}",
                            "m": g["mmss"], "e": g["embed"], "u": g["url"], "a": g["alias"]})
            return html.escape(json.dumps(out, ensure_ascii=False, separators=(",", ":")), quote=False)

        def clase_field(t, back_text):
            """Campo Clase: «▶ Ver aquí (m:ss)» (iframe en la tarjeta) + «Abrir en AEE ↗» + glosario oculto de la nota."""
            url = K.clase_url(reg, a.libro, cfg, cid, t if has_video else 0)
            h = f"Clase {meta['topicLabel']} · {esc(meta['title'])}<br>"
            if has_video:
                emb = K.embed_url(reg, cid, t)
                h += (f'<a class="aee-play" href="{html.escape(emb)}" data-embed="{html.escape(emb)}">▶ Ver aquí ({K.mmss(t)})</a>'
                      f' · <a class="aee-open" href="{html.escape(url)}">Abrir en AEE ↗</a>')
            else:
                h += f'<a class="aee-open" href="{html.escape(url)}">Abrir en AEE ↗</a> <span style="opacity:.6">(video en preparación)</span>'
            return h + '<div class="aee-player"></div>' + f'<div class="aee-glos" style="display:none">{glos_json(back_text)}</div>'

        def ctags(card, text):
            o = (card.get("origen") or "").split(":")
            sec = sec_title.get(o[2], "") if len(o) > 2 and o[1] == "sec" else ""
            return K.concept_tags(MATCH, TERM, text, f"{card.get('fuente', '')} {sec}")

        def preg_real(tags):
            out = []
            for t in tags or []:
                q = rq_by_tag.get(t)
                if not q:
                    out.append(f"<div><b>{esc(t)}</b></div>")
                    continue
                if (q.get("audit") or {}).get("excluir"):  # audit del banco: pregunta excluida, no se muestra
                    continue
                ok = next((o["text"] for o in q.get("options", []) if o.get("id") == q.get("correcta")), q.get("correcta"))
                im = (q.get("imagen") or {}).get("src")
                fig = media.preg(im) if im else ""
                if fig:
                    fig = f'<div class="preg-img">{fig}<div style="font-size:9px;opacity:.6">Imagen representativa</div></div>'
                out.append(f"<div><b>{esc(t)}</b><br>{esc(q['stem'])}{fig}<br>✔ <b>{esc(ok)}</b></div>")
            return "<hr>".join(out)

        def mk_tags(card, tipo, text=""):
            t = base_tags + code_tags(card_codes(card, text)) + [f"AEE_V3::Tipo::{tipo}"] + ctags(card, text)
            if card.get("repaso"):
                t.append("AEE_V3::Repaso_Ultima_Hora")
            return list(dict.fromkeys(x.replace(" ", "_") for x in t))

        for c in data.get("cards", []):
            guid = genanki.guid_for(cid, c["id"])
            src_img = media.origen(cid, c.get("origen"))
            foto = media.foto(cid, c["imagen"]) if c.get("imagen") else ""
            if c["modelo"] == "cloze":
                back_text = f"{c['texto']} {c.get('extra', '')}"
            else:
                back_text = f"{c['diagnostico']} {c.get('clave', '')} {c['conducta']}"
            clase = clase_field(card_time(c.get("origen"), back_text), back_text)
            if c["modelo"] == "cloze":
                imagen = foto or src_img
                extra = keep_b(c.get("extra", ""))
                if foto and src_img:  # foto + captura del material de origen
                    extra += f'<div class="cap">{src_img}</div>'
                note = Note(model=CLOZE_MODEL, guid=guid, tags=mk_tags(c, c["tipo"], back_text), fields=[
                    keep_b(c["texto"]), extra, imagen, esc(c.get("fuente", "")), perfil_of(card_codes(c, back_text)),
                    preg_real(c.get("preguntaReal")), clase])
                stats["cloze"] += 1
            else:
                note = Note(model=IMAGEN_MODEL, guid=guid, tags=mk_tags(c, "Imagen", back_text), fields=[
                    foto, esc(c.get("pregunta") or "¿Qué muestra y qué haces?"), keep_b(c["diagnostico"]),
                    keep_b(c.get("clave", "")), keep_b(c["conducta"]), esc(c.get("fuente", "")), perfil_of(card_codes(c, back_text)),
                    preg_real(c.get("preguntaReal")), clase, f"{cid}/{c['id']}"])
                stats["imagen"] += 1
            stats["repaso"] += bool(c.get("repaso"))
            deck.add_note(note)

        node_by_id = {n["id"]: n for n in (meta.get("pathway") or {}).get("nodes", [])}
        for o in data.get("occlusion", []):
            fq, fa = media.occlusion(cid, o["id"], o["nodo"])
            n = node_by_id[o["nodo"]]
            resp = f"<b>{esc(n['t'])}</b>" + (f" — {esc(n['s'])}" if n.get("s") else "")
            if n.get("say"):
                resp += f'<div style="font-size:15px;opacity:.8;margin-top:4px">{esc(n["say"])}</div>'
            back_text = f"{n['t']} {n.get('s', '')} {n.get('say', '')}"
            o_clase = clase_field(card_time("algoritmo", back_text), back_text)
            note = Note(model=OCCL_MODEL, guid=genanki.guid_for(cid, o["id"]), tags=mk_tags(o, "Algoritmo", back_text), fields=[
                esc(meta["pathway"]["title"]), fq, fa, esc(o.get("pista", "")), resp,
                "Algoritmo del tema (clase)", perfil_of(card_codes(o, back_text)), preg_real(o.get("preguntaReal")), o_clase, f"{cid}/{o['id']}"])
            stats["occlusion"] += 1
            stats["repaso"] += bool(o.get("repaso"))
            deck.add_note(note)

    media.close()
    pkg = genanki.Package(list(decks.values()))
    pkg.media_files = sorted(media.files)
    out = ROOT / cfg["apkg"]
    out.parent.mkdir(parents=True, exist_ok=True)
    pkg.write_to_file(str(out))
    total = stats["cloze"] + stats["imagen"] + stats["occlusion"]
    print(f"OK {out.relative_to(ROOT)} · {len(decks)} subdecks · {total} notas "
          f"(cloze {stats['cloze']}, imagen {stats['imagen']}, occlusion {stats['occlusion']}) · "
          f"repaso {stats['repaso']} ({100 * stats['repaso'] // max(total, 1)} %) · media {len(media.files)} · "
          f"{out.stat().st_size / 1e6:.1f} MB")


if __name__ == "__main__":
    main()
