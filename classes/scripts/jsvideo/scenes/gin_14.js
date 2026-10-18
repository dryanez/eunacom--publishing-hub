// gin-14 A1: del hallazgo a la conducta (BI-RADS). Blausen "Breast Cancer" (limpio) + escalera BI-RADS.
GIN_IMGS.mama = A('gin_mama.png');
GIN.birads = { dur: 32, credit: creditBL, f(t) {
  K.title('Del hallazgo a la conducta: BI-RADS', 'Cuanto más sospechoso el informe, más pronto la aguja gruesa', C.VIOLET);
  const pl = plate('mama', { x: 230, y: 430, w: 600, h: 440 }, 40, 140, 1.0); pl.draw(seg(t, 0, 0.7));
  const [tx, ty] = pl.P(415, 600);
  // masa espiculada
  const sp = ease(seg(t, 2, 2)); if (sp > 0) { ctx.save(); pl.clip(); ctx.strokeStyle = `rgba(255,255,255,${0.9 * sp})`; ctx.lineWidth = 2;
    for (let i = 0; i < 16; i++) { const q = i / 16 * 6.283, r0 = 16, r1 = 16 + (22 + 22 * rnd(i)) * sp; ctx.beginPath(); ctx.moveTo(tx + r0 * Math.cos(q), ty + r0 * Math.sin(q)); ctx.lineTo(tx + r1 * Math.cos(q), ty + r1 * Math.sin(q)); ctx.stroke(); } ctx.restore(); }
  ring(tx, ty, 62 + 3 * Math.sin(t * 4), C.RED, fade(t, 2, 14), 3);
  label('Masa espiculada', 120, 170, C.RED, tx - 30, ty - 28, fade(t, 2.2, 14));
  // microcalcificaciones
  const mc = ease(seg(t, 5, 1.5)); if (mc > 0) for (let i = 0; i < 14; i++) dot(tx + 24 + (rnd(i) - 0.3) * 70, ty - 18 + (rnd(i + 9) - 0.5) * 55, 2.4, '#FFFFFF', mc * fade(t, 5, 14, 0.5));
  label('Microcalcificaciones agrupadas', 480, 620, '#FFFFFF', tx + 28, ty - 12, fade(t, 5.6, 14));
  // aguja gruesa
  const nd = ease(seg(t, 21, 2.2)) * (1 - ease(seg(t, 27, 1))); if (nd > 0.01) { ctx.save(); pl.clip(); ctx.lineCap = 'round';
    const x1 = lerp(tx + 260, tx + 6, nd), y1 = lerp(ty - 120, ty - 2, nd); ctx.strokeStyle = '#56616E'; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(x1 + 190, y1 - 90); ctx.lineTo(x1, y1); ctx.stroke();
    ctx.strokeStyle = '#EEF2F5'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(x1 + 190, y1 - 90); ctx.lineTo(x1, y1); ctx.stroke(); ctx.restore(); }
  label('Biopsia con aguja gruesa', 480, 215, C.GREEN, tx + 10, ty - 6, fade(t, 22, 28));
  // escalera BI-RADS
  const R = [['0', 'Estudio incompleto', 'Ecografía complementaria', C.MUTED, 0, 2.5], ['1-2', 'Normal o benigno', 'Control cada 2 años', C.GREEN, 0, 8], ['3', 'Probablemente benigno', 'Control a los 6 meses', C.AMBER, 2, 12.5],
    ['4-5', 'Sospechoso o muy sospechoso', 'Biopsia con aguja gruesa', C.RED, 95, 17], ['6', 'Malignidad ya confirmada', 'Planificar el tratamiento', C.VIOLET, 100, 23.5]];
  R.forEach(([b, nm, act, col, risk, t0], i) => { const a = seg(t, t0 - 1, 0.5), y = 130 + i * 84; if (a <= 0) return; ctx.save(); ctx.globalAlpha = a;
    rrect(690, y, 550, 74, 14, '#161B22'); ctx.fillStyle = col; ctx.fillRect(690, y, 6, 74); text('BI-RADS ' + b, 712, y + 28, 22, col, 'bold'); text(nm, 712, y + 54, 16, C.MUTED);
    text(act, 1226, y + 28, 18, C.INK, 'bold', 'right'); const w = 150 * (risk / 100) * seg(t, t0, 1.2); rrect(990, y + 42, 150, 12, 6, '#222833'); if (w > 0) rrect(990, y + 42, Math.max(w, 6), 12, 6, col);
    text(i === 0 ? '' : i === 1 ? 'riesgo cero' : i === 2 ? 'menos de 2 %' : i === 3 ? '2 a más de 95 %' : '', 1226, y + 54, 13, C.MUTED, '', 'right'); ctx.restore(); });
  K.banner(690, 560, 550, 'Aguja fina: solo células sueltas, no distingue invasión', C.RED, seg(t, 25, 0.5), 17);
  K.banner(690, 620, 550, 'Tamizaje GES: mamografía de 50 a 69 años, cada 2 años', C.BLUE, seg(t, 28.5, 0.5), 17);
} };
