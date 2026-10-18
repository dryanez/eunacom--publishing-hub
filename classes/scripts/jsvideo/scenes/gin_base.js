// Ginecología: base común (ilustración Blausen limpia + capas animadas). Cada gin_NN.js registra GIN[v] = { f, dur, credit? }.
const V = new URLSearchParams(location.search).get('v') || 'cervix';
const L = LIB(document.getElementById('c')), { ctx, C, ease, clamp, lerp, text, tag, rrect, poly } = L;
const K = KIT(L), { seg, fade, rnd } = K;
const I = k => window.IMGS[k];
window.GIN = {}; window.GIN_IMGS = {};
const A = f => '../assets/blausen/' + f;
const BL = 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios';

// lámina: recorte SRC de la imagen `key` sobre tarjeta blanca en (x,y) con escala S
function plate(key, SRC, x, y, S) {
  const W = SRC.w * S, H = SRC.h * S;
  const P = (ix, iy) => [x + (ix - SRC.x) * S, y + (iy - SRC.y) * S];
  const clip = () => { ctx.beginPath(); ctx.roundRect(x, y, W, H, 14); ctx.clip(); };
  const draw = (a = 1) => { ctx.save(); ctx.globalAlpha = a; rrect(x - 6, y - 6, W + 12, H + 12, 18, '#FFFFFF');
    clip(); ctx.drawImage(I(key), SRC.x, SRC.y, SRC.w, SRC.h, x, y, W, H); ctx.restore(); };
  // recorte de la propia ilustración que se desplaza/gira (órgano animado sobre la lámina)
  const sprite = (box, dx, dy, rot, sc, a = 1, ax, ay) => {
    const [px, py] = P(box.x, box.y); const w = box.w * S, h = box.h * S;
    ctx.save(); ctx.globalAlpha = a; clip();
    const cx = ax !== undefined ? P(ax, ay)[0] : px + w / 2, cy = ax !== undefined ? P(ax, ay)[1] : py + h / 2;
    ctx.translate(cx + dx, cy + dy); ctx.rotate(rot); ctx.scale(sc, sc); ctx.translate(-cx, -cy);
    ctx.beginPath(); ctx.rect(px, py, w, h); ctx.clip();
    ctx.drawImage(I(key), box.x, box.y, box.w, box.h, px, py, w, h); ctx.restore(); };
  return { P, clip, draw, sprite, x, y, W, H, S };
}
function label(s, x, y, col, tx, ty, a, size = 15) {
  if (a <= 0) return; ctx.save(); ctx.globalAlpha = a;
  ctx.strokeStyle = '#1B2230'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(tx, ty); ctx.stroke();
  ctx.strokeStyle = col; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(tx, ty); ctx.stroke();
  ctx.fillStyle = col; ctx.beginPath(); ctx.arc(tx, ty, 4.5, 0, 7); ctx.fill(); tag(s, x, y, col, size); ctx.restore();
}
function arrow(x0, y0, x1, y1, col, a = 1, w = 4) {
  if (a <= 0) return; const ang = Math.atan2(y1 - y0, x1 - x0); ctx.save(); ctx.globalAlpha = a; ctx.strokeStyle = col; ctx.fillStyle = col;
  ctx.lineWidth = w; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1 - Math.cos(ang) * 9, y1 - Math.sin(ang) * 9); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x1 - 14 * Math.cos(ang - 0.4), y1 - 14 * Math.sin(ang - 0.4)); ctx.lineTo(x1 - 14 * Math.cos(ang + 0.4), y1 - 14 * Math.sin(ang + 0.4)); ctx.fill(); ctx.restore();
}
function dot(x, y, r, col, a = 1) { if (a <= 0) return; ctx.globalAlpha = a; ctx.fillStyle = col; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill(); ctx.globalAlpha = 1; }
function hex(x, y, r, col, a = 1) { if (a <= 0) return; ctx.save(); ctx.globalAlpha = a; ctx.fillStyle = col; ctx.strokeStyle = '#3B2A00'; ctx.lineWidth = 1.5;
  ctx.beginPath(); for (let i = 0; i < 6; i++) { const q = Math.PI / 3 * i + Math.PI / 6; ctx.lineTo(x + r * Math.cos(q), y + r * Math.sin(q)); } ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore(); }
function stage(s, col, a = 1) { if (a <= 0) return; ctx.save(); ctx.globalAlpha = a; tag(s, 0, 0, col, 24); ctx.restore(); }
function banner(s, col, a, x = 640, y = 640, w = 600) { K.banner(x, y, w, s, col, a); }
function mix(c1, c2, k) { const f = c => [1, 3, 5].map(i => parseInt(c.slice(i, i + 2), 16)); const a = f(c1), b = f(c2);
  return '#' + a.map((v, i) => Math.round(lerp(v, b[i], k)).toString(16).padStart(2, '0')).join(''); }
function creditBL() { K.credit(BL); }
// partículas que recorren un camino poly (en px de pantalla) entre s0 y s1
function stream(path, t, a, n = 8, sp = 0.4, col = '#C8102E', r = 3.5, s0 = 0, s1 = 1) {
  if (a <= 0) return; for (let i = 0; i < n; i++) { const u = ((t * sp) + i / n) % 1, s = lerp(s0, s1, u);
    const [x, y] = path.at(s); dot(x, y, r, col, a * Math.min(1, u * 6, (1 - u) * 6)); }
}
// disco del propio recorte de la ilustración, ampliado alrededor de su centro (órgano que crece)
function swell(pl, key, cx, cy, r, k, a = 1) {
  if (k === 1) return; const [x, y] = pl.P(cx, cy), R = r * pl.S;
  ctx.save(); ctx.globalAlpha = a; pl.clip(); ctx.beginPath(); ctx.arc(x, y, R * k, 0, 7); ctx.clip();
  ctx.translate(x, y); ctx.scale(k, k); ctx.translate(-x, -y);
  ctx.drawImage(I(key), cx - r, cy - r, 2 * r, 2 * r, x - R, y - R, 2 * R, 2 * R); ctx.restore();
}
function ring(x, y, r, col, a = 1, w = 3) { if (a <= 0) return; ctx.save(); ctx.globalAlpha = a; ctx.strokeStyle = col; ctx.lineWidth = w; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.stroke(); ctx.restore(); }
