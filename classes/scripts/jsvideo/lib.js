// Utilidades comunes de las escenas JS (mismo estilo que classes/scripts/manim/estilo.py).
function LIB(canvas) {
  const ctx = canvas.getContext('2d');
  const C = { BG: '#0E1116', INK: '#F5F5F7', MUTED: '#9AA0A6', GRID: '#2A2F38', RED: '#FF5A4E', BLUE: '#4FA3FF',
              GREEN: '#3DDC84', AMBER: '#FFC247', VIOLET: '#B388FF' };
  const FONT = '"Liberation Sans", "Helvetica Neue", Arial, sans-serif';
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const lerp = (a, b, k) => a + (b - a) * k;
  const ease = k => k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
  const seg = (t, a, b) => clamp((t - a) / (b - a), 0, 1);

  function text(s, x, y, size, color, weight = '', align = 'left') {
    ctx.font = `${weight} ${size}px ${FONT}`; ctx.fillStyle = color; ctx.textAlign = align; ctx.textBaseline = 'alphabetic';
    ctx.fillText(s, x, y);
  }
  function rrect(x, y, w, h, r, fill) {
    if (w <= 0 || h <= 0) return;
    ctx.fillStyle = fill; ctx.beginPath(); ctx.roundRect(x, y, w, h, Math.min(r, w / 2, h / 2)); ctx.fill();
  }
  // rótulo tipo píldora (texto oscuro sobre color), centrado en (x, y)
  function tag(s, x, y, color, size = 22) {
    ctx.font = `bold ${size}px ${FONT}`;
    const w = ctx.measureText(s).width + 28, h = size + 16;
    rrect(x - w / 2, y - h / 2, w, h, 10, color);
    text(s, x, y + size * 0.36, size, C.BG, 'bold', 'center');
  }
  // polilínea con parámetro de longitud s ∈ [0, 1]
  function poly(pts) {
    const L = [0];
    for (let i = 1; i < pts.length; i++) L.push(L[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
    const tot = L[L.length - 1];
    function at(s, off = 0) {
      const d = clamp(s, 0, 1) * tot;
      let i = 1; while (i < L.length - 1 && L[i] < d) i++;
      const k = (d - L[i - 1]) / (L[i] - L[i - 1] || 1);
      const [x0, y0] = pts[i - 1], [x1, y1] = pts[i];
      const dx = x1 - x0, dy = y1 - y0, n = Math.hypot(dx, dy) || 1;
      return [lerp(x0, x1, k) - (dy / n) * off, lerp(y0, y1, k) + (dx / n) * off];
    }
    function stroke(c, a, b, width, color, off = 0) {
      const n = Math.max(2, Math.ceil((b - a) * 120));
      c.strokeStyle = color; c.lineWidth = width; c.beginPath();
      for (let i = 0; i <= n; i++) { const [x, y] = at(lerp(a, b, i / n), off); i ? c.lineTo(x, y) : c.moveTo(x, y); }
      c.stroke();
    }
    return { at, stroke, length: tot };
  }
  return { ctx, C, clamp, lerp, ease, seg, text, rrect, tag, poly };
}

// Carga imágenes y avisa al renderizador (window.READY) cuando están listas.
function LOAD(map) {
  window.IMGS = {};
  const keys = Object.keys(map);
  Promise.all(keys.map(k => new Promise((ok, bad) => {
    const im = new Image(); im.onload = () => { window.IMGS[k] = im; ok(); }; im.onerror = bad; im.src = map[k];
  }))).then(() => document.fonts.ready).then(() => { window.render(0); window.READY = true; });
}
