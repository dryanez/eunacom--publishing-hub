/**
 * flow_builder.cjs
 * Motor de generación de diagramas clínicos vectoriales SVG para libros EUNACOM 2026.
 */

function makeFlow(accColor, strokeDark, accTint, accSub) {
  accTint = accTint || '#f1f5f9';
  accSub = accSub || '#e2e8f0';
  strokeDark = strokeDark || '#1e293b';

  return function flow(title, rows) {
    const W = 620, CX = 310, GAP = 22;
    const P = [];
    let y = 8, prev = null;
    const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const arr = s => Array.isArray(s) ? s : (s ? [s] : []);
    
    function wrap(s, max) {
      if (s.length <= max) return [s];
      const mid = s.length / 2, marks = [];
      let i = s.indexOf(' · ');
      while (i !== -1) { marks.push([i, i + 3]); i = s.indexOf(' · ', i + 1); }
      if (!marks.length) { let j = s.indexOf(' '); while (j !== -1) { marks.push([j, j + 1]); j = s.indexOf(' ', j + 1); } }
      let best = null, bd = 1e9;
      marks.forEach(m => { const d = Math.abs(m[0] - mid); if (d < bd) { bd = d; best = m; } });
      return best ? [s.slice(0, best[0]).trim(), s.slice(best[1]).trim()] : [s];
    }

    function draw(x, w, o) {
      const max = Math.floor((w - 18) / 4.4);
      const subs = [];
      arr(o.s).forEach(l => wrap(String(l), max).forEach(ln => subs.push(ln)));
      const h = (o.t ? 21 : 8) + subs.length * 11 + (subs.length ? 7 : 8);
      const cls = { acc: 'acc', dec: 'dec', warn: 'warn', crit: 'crit' }[o.type] || 'b';
      const tc = { acc: 'accT', warn: 'warnT', crit: 'warnT' }[o.type] || 't';
      const sc = o.type === 'acc' ? 'accS' : (o.type === 'warn' || o.type === 'crit') ? 'warnT sub' : 'sub';
      P.push(`<rect class="${cls}" x="${x}" y="${y}" width="${w}" height="${h}" rx="3"/>`);
      let ty = y + (o.t ? 15 : 14);
      if (o.t) { P.push(`<text class="${tc} t" x="${x + w / 2}" y="${ty}" text-anchor="middle" font-weight="700">${esc(o.t)}</text>`); ty += 12; }
      subs.forEach(l => { P.push(`<text class="${sc}" x="${x + w / 2}" y="${ty}" text-anchor="middle">${esc(l)}</text>`); ty += 11; });
      return h;
    }

    function step(label, from) {
      const ty = y + GAP;
      const xs = from === 'left' ? [prev.xs[0]] : from === 'right' ? [prev.xs[prev.xs.length - 1]] : prev.xs;
      xs.forEach(x => {
        P.push(x === CX
          ? `<path class="ln" d="M${CX},${prev.y} V${ty}"/>`
          : `<path class="ln" d="M${x},${prev.y} V${prev.y + 10} H${CX} V${ty}"/>`);
      });
      if (label) P.push(`<text class="sub" x="${CX + 7}" y="${prev.y + GAP / 2 + 3}">${esc(label)}</text>`);
      y = ty;
    }

    rows.forEach(r => {
      if (r.k === 'split') {
        if (prev) step(r.al, r.from);
        const dh = draw(70, 480, { t: r.q, s: r.s, type: 'dec' });
        const db = y + dh;
        const hasL = !!(r.ll || r.rl);
        y = db + (hasL ? 40 : 24);
        const bw = 292, lx = 12, rx = 316, lcx = lx + bw / 2, rcx = rx + bw / 2, hc = y - 10;
        P.push(`<path class="ln" d="M${CX},${db} V${hc} H${lcx} V${y}"/>`);
        P.push(`<path class="ln" d="M${CX},${hc} H${rcx} V${y}"/>`);
        [[r.ll, lcx], [r.rl, rcx]].forEach(([lab, cx]) => {
          if (!lab) return;
          const ls = wrap(String(lab), 74);
          ls.forEach((line, k) => P.push(`<text class="lbl" x="${cx}" y="${y - 15 - (ls.length - 1 - k) * 9}" text-anchor="middle">${esc(line)}</text>`));
        });
        const top = y;
        const lh = draw(lx, bw, r.left);
        y = top;
        const rh = draw(rx, bw, r.right);
        y = top + Math.max(lh, rh);
        prev = { y, xs: [lcx, rcx] };
      } else {
        if (prev) step(r.al, r.from);
        const w = r.w || (r.type === 'dec' ? 480 : 420);
        const x = (W - w) / 2;
        const h = draw(x, w, r);
        y += h;
        prev = { y, xs: [CX] };
      }
    });

    const H = y + 8;
    const svg = `<svg viewBox="0 0 ${W} ${H}" width="100%" style="max-width:${W}px;font-family:'IBM Plex Sans',system-ui,sans-serif">
  <defs><marker id="ar_${accColor.replace('#','')}" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${accColor}"/></marker></defs>
  <style>
    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}
    .t{font-size:10px;fill:#15181d}
    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:${accColor};font-weight:700}
    .acc{fill:${accColor};stroke:${strokeDark}}.accT{fill:#fff}.accS{font-size:8px;fill:${accSub}}
    .dec{fill:${accTint};stroke:#94a3b8;stroke-width:1}
    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}
    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}
    .ln{stroke:${accColor};stroke-width:1.2;fill:none;marker-end:url(#ar_${accColor.replace('#','')})}
  </style>
  ${P.join('\n  ')}
</svg>`;
    return { title, svg, toString() { return this.svg; } };
  };
}

module.exports = {
  makeFlow,
  flowCirugia: makeFlow('#334155', '#1e293b', '#f8fafc', '#f1f5f9'),
  flowTrauma: makeFlow('#b45309', '#78350f', '#fffbeb', '#fef3c7'),
  flowPediatria: makeFlow('#c2410c', '#9a3412', '#fff7ed', '#ffedd5'),
  flowObstetricia: makeFlow('#9d174d', '#700d36', '#fdf2f8', '#fce7f3'),
  flowGinecologia: makeFlow('#be185d', '#831843', '#fdf2f8', '#fce7f3'),
  flowSaludPublica: makeFlow('#166534', '#14532d', '#f0fdf4', '#dcfce7')
};
