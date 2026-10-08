// Piezas comunes para escenas sobre ilustración real (requiere lib.js): tiempo, tarjetas, pastillas, barras, crédito.
function KIT(L) {
  const { ctx, C, clamp, lerp, text, rrect } = L;
  const seg = (t, a, d) => clamp((t - a) / d, 0, 1);                 // 0→1 entre a y a+d
  const fade = (t, a, b, d = 0.5) => seg(t, a, d) * (1 - seg(t, b, d)); // aparece en a, se va en b
  function card(x, y, w, h, col, title, lines, a, size = 18) {
    if (a <= 0) return; ctx.save(); ctx.globalAlpha *= a;
    rrect(x, y, w, h, 16, '#161B22'); ctx.fillStyle = col; ctx.fillRect(x, y, 6, h);
    text(title, x + 22, y + 34, 21, col, 'bold');
    lines.forEach((l, i) => text(l, x + 22, y + 66 + i * (size + 10), size, C.INK));
    ctx.restore();
  }
  function banner(x, y, w, s, col, a) {
    if (a <= 0) return; ctx.save(); ctx.globalAlpha *= a;
    rrect(x, y, w, 50, 25, '#1B2230'); ctx.strokeStyle = col; ctx.lineWidth = 2; ctx.beginPath(); ctx.roundRect(x, y, w, 50, 25); ctx.stroke();
    text(s, x + w / 2, y + 32, 20, C.INK, 'bold', 'center'); ctx.restore();
  }
  function pill(x, y, c1, c2, a = 1, rot = -0.5) {
    if (a <= 0) return; ctx.save(); ctx.globalAlpha *= a; ctx.translate(x, y); ctx.rotate(rot);
    ctx.fillStyle = c1; ctx.beginPath(); ctx.roundRect(-24, -10, 24, 20, [10, 0, 0, 10]); ctx.fill();
    ctx.fillStyle = c2; ctx.beginPath(); ctx.roundRect(0, -10, 24, 20, [0, 10, 10, 0]); ctx.fill(); ctx.restore();
  }
  function bar(x, y, w, label, val, max, unit, col, marks = [], fmt = v => Math.round(v)) {
    text(label, x, y, 19, C.INK, 'bold'); text(`${fmt(val)} ${unit}`, x + w, y, 19, col, 'bold', 'right');
    rrect(x, y + 10, w, 14, 7, '#222833'); rrect(x, y + 10, w * clamp(val / max, 0, 1), 14, 7, col);
    for (const [m, lab] of marks) { const mx = x + w * m / max; ctx.fillStyle = '#ddd'; ctx.fillRect(mx - 1, y + 5, 2, 24); text(lab, mx, y + 46, 13, C.MUTED, '', 'center'); }
  }
  function glow(x, y, r, rgb, a) {
    if (a <= 0) return; const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, `rgba(${rgb},${a})`); g.addColorStop(1, `rgba(${rgb},0)`); ctx.fillStyle = g; ctx.fillRect(x - r, y - r, 2 * r, 2 * r);
  }
  function title(t1, t2, col) { text(t1, 40, 70, 38, col, 'bold'); text(t2, 40, 106, 23, C.MUTED); }
  function credit(s = 'Ilustración: Servier Medical Art, CC BY 4.0 · rótulos y animación propios') {
    ctx.fillStyle = 'rgba(14,17,22,0.85)'; ctx.fillRect(760, 696, 520, 24); text(s, 1268, 712, 13, C.MUTED, '', 'right');
  }
  const rnd = i => { const x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
  return { seg, fade, card, banner, pill, bar, glow, title, credit, rnd };
}
