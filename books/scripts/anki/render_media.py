"""render_media.py — capturas para el mazo Anki (lo usa build_anki.py).

  · algoritmo  : árbol de decisión del tema (classes/pathways) → PNG vía Chromium headless
                 (Playwright) + cajas de cada nodo para las tarjetas de oclusión.
  · tabla      : tabla del libro (dataset) → PNG con el estilo del libro.
  · clase      : cuadro del video de la clase al final de la diapositiva (ffmpeg -ss).
  · foto       : foto del tema recomprimida.
Todo sale en JPG ≤ 150 KB, ~900 px de ancho, nombre aee_<classId>_<tipo>_<n>.jpg.
"""
import html
import io
import subprocess
import tempfile
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

MAX_BYTES = 150_000
WIDTH = 900

KCOL = {  # color por tipo de nodo del pathway
    "start": ("#334155", "#f1f5f9"), "q": ("#1d4ed8", "#eff6ff"), "do": ("#0f766e", "#f0fdfa"),
    "ok": ("#15803d", "#f0fdf4"), "refer": ("#7e22ce", "#faf5ff"), "alert": ("#b91c1c", "#fef2f2"),
}
KNAME = {"start": "Inicio", "q": "Pregunta", "do": "Examen / acción", "ok": "Manejo", "refer": "Derivar", "alert": "Urgente"}


def save_jpg(img, out: Path, width=WIDTH):
    """Guarda como JPG ajustando calidad (y si hace falta tamaño) hasta ≤ 150 KB."""
    img = img.convert("RGB")
    if img.width > width:
        img = img.resize((width, round(img.height * width / img.width)), Image.LANCZOS)
    for scale in (1.0, 0.85, 0.7, 0.55):
        im = img if scale == 1.0 else img.resize((round(img.width * scale), round(img.height * scale)), Image.LANCZOS)
        for q in (85, 78, 70, 62, 55, 48, 40):
            buf = io.BytesIO()
            im.save(buf, "JPEG", quality=q, optimize=True, progressive=True)
            if buf.tell() <= MAX_BYTES:
                out.write_bytes(buf.getvalue())
                return out
    out.write_bytes(buf.getvalue())
    return out


# ───────────────────────────── HTML → PNG (Playwright) ─────────────────────────────
class Browser:
    def __init__(self):
        from playwright.sync_api import sync_playwright
        self._pw = sync_playwright().start()
        try:
            self.browser = self._pw.chromium.launch()
        except Exception:  # versión de navegador distinta a la del paquete: usar la instalada
            import glob, os
            cands = ([os.environ["CHROME_PATH"]] if os.environ.get("CHROME_PATH") else []) + sorted(glob.glob(
                os.path.expanduser("~/Library/Caches/ms-playwright/chromium_headless_shell-*/*/chrome-headless-shell")), reverse=True) + [
                "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"]
            self.browser = self._pw.chromium.launch(executable_path=next(c for c in cands if os.path.exists(c)))
        self.page = self.browser.new_page(viewport={"width": WIDTH, "height": 600}, device_scale_factor=2)

    def shot(self, body_html, css):
        """Devuelve (PIL.Image, {id: (x0,y0,x1,y1)}) en píxeles de la imagen (escala 2×)."""
        tmp = Path(tempfile.gettempdir()) / "aee_anki_shot.html"
        tmp.write_text(f"<!doctype html><meta charset=utf-8><style>{BASE_CSS}{css}</style><body>{body_html}</body>")
        self.page.goto("file://" + str(tmp), wait_until="load")  # file:// para poder cargar SVG locales
        self.page.wait_for_timeout(50)
        root = self.page.locator("#cap")
        png = root.screenshot(type="png")
        org = root.bounding_box()
        boxes = {}
        for el in self.page.query_selector_all("[data-node]"):
            b = el.bounding_box()
            boxes[el.get_attribute("data-node")] = tuple(round((v - o) * 2) for v, o in (
                (b["x"], org["x"]), (b["y"], org["y"]), (b["x"] + b["width"], org["x"]), (b["y"] + b["height"], org["y"])))
        return Image.open(io.BytesIO(png)), boxes

    def close(self):
        self.browser.close()
        self._pw.stop()


BASE_CSS = """
*{box-sizing:border-box} body{margin:0;background:#fff;font-family:-apple-system,'Helvetica Neue',Arial,sans-serif;color:#0f172a}
#cap{width:900px;padding:22px 24px 18px;background:#fff}
.hd{font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#64748b;font-weight:700;margin-bottom:4px}
.tt{font-size:22px;font-weight:800;margin:0 0 14px;line-height:1.2}
.ft{margin-top:12px;font-size:11px;color:#94a3b8}
"""

PATH_CSS = """
#cap{width:640px}
.tt{font-size:20px}
.tree{list-style:none;margin:0;padding:0}
.tree ul{list-style:none;margin:0;padding-left:34px;position:relative}
.tree li{position:relative;padding:5px 0 5px 0}
.tree ul>li::before{content:'';position:absolute;left:-20px;top:0;bottom:0;border-left:2px solid #cbd5e1}
.tree ul>li:last-child::before{bottom:auto;height:30px}
.tree ul>li::after{content:'';position:absolute;left:-20px;top:30px;width:18px;border-top:2px solid #cbd5e1}
.nd{display:inline-block;border:2px solid;border-radius:10px;padding:7px 12px;max-width:500px;vertical-align:top}
.nd .t{font-size:17px;font-weight:750;line-height:1.25}
.nd .s{font-size:13.5px;color:#475569;margin-top:2px;line-height:1.3}
.lab{display:inline-block;font-size:12px;font-weight:800;color:#fff;background:#64748b;border-radius:6px;padding:2px 7px;margin-right:6px;vertical-align:top;margin-top:9px}
.lab.si{background:#15803d}.lab.no{background:#b91c1c}
.lg{display:flex;flex-wrap:wrap;gap:6px 14px;margin-top:12px;font-size:11.5px;color:#475569}
.lg i{display:inline-block;width:11px;height:11px;border-radius:3px;margin-right:4px;vertical-align:-1px}
"""


def pathway_html(pw, spec_name):
    nodes = pw["nodes"]
    kids = {}
    for n in nodes:
        kids.setdefault(n["parent"], []).append(n)

    def li(n):
        bc, bg = KCOL.get(n["k"], KCOL["q"])
        lab = n.get("label") or ""
        cls = "si" if lab.upper().startswith("S") else "no" if lab.upper().startswith("NO") else ""
        badge = '<span class="lab %s">%s</span>' % (cls, html.escape(lab)) if lab else ""
        h = "<li>" + badge
        h += f'<div class="nd" data-node="{n["id"]}" style="border-color:{bc};background:{bg}">'
        h += f'<div class="t" style="color:{bc}">{html.escape(n["t"])}</div>'
        if n.get("s"):
            h += f'<div class="s">{html.escape(n["s"])}</div>'
        h += "</div>"
        ch = kids.get(n["id"], [])
        if ch:
            h += "<ul>" + "".join(li(c) for c in ch) + "</ul>"
        return h + "</li>"

    root = kids[None][0]
    legend = "".join(f'<span><i style="background:{KCOL[k][0]}"></i>{v}</span>' for k, v in KNAME.items())
    return (f'<div id="cap"><div class="hd">Algoritmo · {html.escape(spec_name)}</div>'
            f'<div class="tt">{html.escape(pw["title"])}</div><ul class="tree">{li(root)}</ul>'
            f'<div class="lg">{legend}</div><div class="ft">AEE EUNACOM V3</div></div>')


TABLE_CSS = """
table{border-collapse:collapse;width:100%;font-size:15px;line-height:1.3}
th{background:#15803d;color:#fff;text-align:left;padding:8px 10px;font-size:14px}
td{padding:8px 10px;border-bottom:1px solid #e2e8f0;vertical-align:top}
tr:nth-child(even) td{background:#f8fafc}
td:first-child{font-weight:650}
"""


def table_html(tab, spec_name, color):
    head = "".join(f"<th>{h}</th>" for h in tab.get("headers", []))
    rows = "".join("<tr>" + "".join(f"<td>{c}</td>" for c in r) + "</tr>" for r in tab.get("rows", []))
    return (f'<div id="cap"><div class="hd" style="color:{color}">Libro · {html.escape(spec_name)}</div>'
            f'<div class="tt">{tab.get("title", "")}</div><table><tr>{head}</tr>{rows}</table>'
            f'<div class="ft">AEE EUNACOM V3 · tabla del libro</div></div>')


# ───────────────────────────── oclusión ─────────────────────────────
def _font(size):
    for f in ("/System/Library/Fonts/Supplemental/Arial Bold.ttf", "/System/Library/Fonts/Helvetica.ttc",
              "/Library/Fonts/Arial.ttf"):
        try:
            return ImageFont.truetype(f, size)
        except OSError:
            continue
    return ImageFont.load_default()


def occlusion_pair(img, box, others=()):
    """Frente: el nodo tapado (naranjo, «?»); los otros nodos ocluidos del tema quedan visibles.
    Reverso: imagen completa con el nodo resaltado."""
    pad = 4
    x0, y0, x1, y1 = box[0] - pad, box[1] - pad, box[2] + pad, box[3] + pad
    front = img.convert("RGB").copy()
    d = ImageDraw.Draw(front)
    d.rounded_rectangle((x0, y0, x1, y1), radius=14, fill="#f59e0b", outline="#b45309", width=5)
    f = _font(max(28, min(64, (y1 - y0) - 16)))
    d.text(((x0 + x1) / 2, (y0 + y1) / 2), "?", fill="white", font=f, anchor="mm")
    back = img.convert("RGB").copy()
    d2 = ImageDraw.Draw(back)
    d2.rounded_rectangle((x0, y0, x1, y1), radius=14, outline="#dc2626", width=7)
    return front, back


# ───────────────────────────── video ─────────────────────────────
def video_frame(mp4: Path, t: float, out: Path):
    tmp = out.with_suffix(".png")
    subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-ss", f"{max(0, t):.2f}", "-i", str(mp4),
                    "-frames:v", "1", str(tmp)], check=True)
    img = Image.open(tmp)
    img.load()
    tmp.unlink()
    return save_jpg(img, out)
