// Gráficos animados para escenas JS (requiere lib.js). Todo en función de t: el mismo t da el mismo cuadro.
function GRAPH(L) {
  const { ctx, C, clamp, lerp, text } = L;
  const seg = (t, a, d) => clamp((t - a) / d, 0, 1);
  const out = k => 1 - Math.pow(1 - clamp(k, 0, 1), 3);

  // ejes: box {x, y, w, h}, xr [min, max], yr [min, max]
  function axes(box, xr, yr, o = {}) {
    const X = v => box.x + ((v - xr[0]) / (xr[1] - xr[0])) * box.w;
    const Y = v => box.y + box.h - ((v - yr[0]) / (yr[1] - yr[0])) * box.h;
    function draw(a = 1) {
      ctx.save(); ctx.globalAlpha *= a;
      ctx.strokeStyle = '#3A424E'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(box.x, box.y); ctx.lineTo(box.x, box.y + box.h); ctx.lineTo(box.x + box.w, box.y + box.h); ctx.stroke();
      for (const v of o.xt || []) { const [val, lab] = Array.isArray(v) ? v : [v, String(v)]; text(lab, X(val), box.y + box.h + 24, 16, C.MUTED, '', 'center'); }
      for (const v of o.yt || []) {
        const [val, lab] = Array.isArray(v) ? v : [v, String(v)];
        text(lab, box.x - 10, Y(val) + 5, 16, C.MUTED, '', 'right');
        ctx.strokeStyle = 'rgba(255,255,255,0.05)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(box.x, Y(val)); ctx.lineTo(box.x + box.w, Y(val)); ctx.stroke();
      }
      if (o.xl) text(o.xl, box.x + box.w, box.y + box.h + 50, 17, C.MUTED, '', 'right');
      if (o.yl) text(o.yl, box.x, box.y - 14, 17, C.MUTED, '', 'left');
      ctx.restore();
    }
    return { X, Y, draw, box, xr, yr };
  }

  // curva suave (Catmull-Rom) por puntos [[x, y], …] en unidades de datos; k = cuánto está dibujada (0–1, por x)
  function smooth(pts) {
    return x => {
      if (x <= pts[0][0]) return pts[0][1];
      if (x >= pts[pts.length - 1][0]) return pts[pts.length - 1][1];
      let i = 0; while (pts[i + 1][0] < x) i++;
      const p0 = pts[Math.max(0, i - 1)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(pts.length - 1, i + 2)];
      const u = (x - p1[0]) / (p2[0] - p1[0]), u2 = u * u, u3 = u2 * u;
      return 0.5 * ((2 * p1[1]) + (-p0[1] + p2[1]) * u + (2 * p0[1] - 5 * p1[1] + 4 * p2[1] - p3[1]) * u2 + (-p0[1] + 3 * p1[1] - 3 * p2[1] + p3[1]) * u3);
    };
  }
  function curve(ax, f, k, color, width = 4, x0 = ax.xr[0], x1 = ax.xr[1], dash) {
    if (k <= 0) return null;
    const xe = lerp(x0, x1, clamp(k, 0, 1));
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = width; ctx.lineJoin = ctx.lineCap = 'round';
    if (dash) ctx.setLineDash(dash);
    ctx.beginPath();
    for (let i = 0; i <= 160; i++) { const x = lerp(x0, xe, i / 160), px = ax.X(x), py = ax.Y(f(x)); i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); }
    ctx.stroke(); ctx.restore();
    return [ax.X(xe), ax.Y(f(xe))];
  }
  function head(p, color, r = 8) {
    if (!p) return;
    const g = ctx.createRadialGradient(p[0], p[1], 0, p[0], p[1], r * 3);
    g.addColorStop(0, color); g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p[0], p[1], r * 3, 0, 7); ctx.fill();
    ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(p[0], p[1], r * 0.55, 0, 7); ctx.fill();
  }
  // línea de corte horizontal con rótulo
  function hline(ax, v, color, label, a = 1, side = 'right') {
    if (a <= 0) return;
    ctx.save(); ctx.globalAlpha *= a; ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.setLineDash([9, 7]);
    ctx.beginPath(); ctx.moveTo(ax.box.x, ax.Y(v)); ctx.lineTo(ax.box.x + ax.box.w * out(a), ax.Y(v)); ctx.stroke(); ctx.setLineDash([]);
    if (label) text(label, side === 'right' ? ax.box.x + ax.box.w + 10 : ax.box.x + 10, ax.Y(v) + (side === 'right' ? 6 : -8), 17, color, 'bold', 'left');
    ctx.restore();
  }
  function vline(ax, x, color, label, a = 1) {
    if (a <= 0) return;
    ctx.save(); ctx.globalAlpha *= a; ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.setLineDash([6, 6]);
    ctx.beginPath(); ctx.moveTo(ax.X(x), ax.box.y + ax.box.h); ctx.lineTo(ax.X(x), ax.box.y + ax.box.h * (1 - out(a))); ctx.stroke(); ctx.setLineDash([]);
    if (label) text(label, ax.X(x), ax.box.y - 4, 16, color, 'bold', 'center');
    ctx.restore();
  }
  // franja horizontal (zona) entre dos valores
  function band(ax, v0, v1, color, a = 1, label, x0 = ax.xr[0], x1 = ax.xr[1]) {
    if (a <= 0) return;
    ctx.save(); ctx.globalAlpha *= a; ctx.fillStyle = color;
    ctx.fillRect(ax.X(x0), ax.Y(v1), ax.X(x1) - ax.X(x0), ax.Y(v0) - ax.Y(v1));
    ctx.restore();
    if (label) { ctx.save(); ctx.globalAlpha *= a; text(label, ax.X(x1) - 10, ax.Y(v1) + 22, 16, '#E8E8E8', 'bold', 'right'); ctx.restore(); }
  }
  return { axes, smooth, curve, head, hline, vline, band, seg, out };
}
