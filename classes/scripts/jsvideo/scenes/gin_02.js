// gin-02 A1: los dos engranajes del ovario poliquístico. Blausen "Ovarian Cysts" (ovario con folículos) + engranajes.
GIN_IMGS.ov2 = A('gin_ovario.png');
function gear(cx, cy, r, n, rot, col, lab, sub, a = 1) { if (a <= 0) return; ctx.save(); ctx.globalAlpha = a; ctx.translate(cx, cy); ctx.rotate(rot); ctx.fillStyle = col; ctx.beginPath();
  for (let i = 0; i < n * 2; i++) { const q = i / (n * 2) * 6.283, rr = i % 2 ? r : r + 14; ctx.lineTo(rr * Math.cos(q - 0.12), rr * Math.sin(q - 0.12)); ctx.lineTo(rr * Math.cos(q + 0.12), rr * Math.sin(q + 0.12)); } ctx.fill();
  ctx.fillStyle = '#0E1116'; ctx.beginPath(); ctx.arc(0, 0, r - 14, 0, 7); ctx.fill(); ctx.restore();
  ctx.save(); ctx.globalAlpha = a; text(lab, cx, cy + r + 36, 20, col, 'bold', 'center'); text(sub, cx, cy + r + 58, 14, C.MUTED, '', 'center'); ctx.restore(); }
GIN.sop = { dur: 30, credit: creditBL, f(t) {
  K.title('Ovario poliquístico: dos engranajes que se retroalimentan', 'Neuroendocrino y metabólico convergen en el hiperandrogenismo y la anovulación', C.VIOLET);
  const pl = plate('ov2', { x: 870, y: 100, w: 590, h: 570 }, 40, 135, 0.9); pl.draw(seg(t, 0, 0.7));
  label('Ovario', 130, 230, '#D7B8FF', ...pl.P(1060, 330), fade(t, 0.8, 30));
  // LH sobre la teca
  const lh = seg(t, 3, 0.8); for (let i = 0; i < 6; i++) { const u = ((t * 0.6) + i / 6) % 1; const sx = 520, sy = 180 + i * 60; arrow(sx, sy, lerp(sx, 380, 0.5 + 0.5 * u), lerp(sy, 330 + (i - 3) * 20, 0.5 + 0.5 * u), C.AMBER, lh * (1 - u) * fade(t, 3, 12, 0.5), 3); }
  label('LH: la teca produce andrógenos de más', 300, 650, C.AMBER, ...pl.P(1000, 450), fade(t, 4, 12));
  // folículos detenidos (collar de perlas)
  const fo = ease(seg(t, 12.5, 3)); for (let i = 0; i < 11; i++) { const q = i / 11 * 6.283, th = 0.89, aa = 195, bb = 85, x = 1060 + aa * Math.cos(q) * Math.cos(th) - bb * Math.sin(q) * Math.sin(th), y = 410 + aa * Math.cos(q) * Math.sin(th) + bb * Math.sin(q) * Math.cos(th);
    const [sx, sy] = pl.P(x, y); ctx.save(); pl.clip(); ctx.globalAlpha = fo; ctx.fillStyle = 'rgba(255,255,255,0.88)'; ctx.strokeStyle = '#7A5FB0'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(sx, sy, 8 * fo, 0, 7); ctx.fill(); ctx.stroke(); ctx.restore(); }
  label('Folículos detenidos: collar de perlas', 300, 650, C.VIOLET, ...pl.P(960, 560), fade(t, 13.5, 30));
  // engranajes
  const rot = t * 0.9; const aG1 = seg(t, 2, 0.6), aG2 = seg(t, 8, 0.6);
  gear(850, 200, 56, 12, rot, C.AMBER, 'Neuroendocrino', 'GnRH rápida y LH', aG1); gear(1010, 232, 56, 12, -rot + 0.26, C.BLUE, 'Metabólico', 'Resistencia a insulina', aG2);
  if (aG2 > 0.5) { arrow(950, 300, 940, 316, C.INK, 0); }
  K.card(700, 370, 540, 108, C.AMBER, 'Engranaje 1: más LH que FSH', ['La teca fabrica andrógenos; falta FSH para madurar', 'Los folículos no terminan de aromatizar'], seg(t, 3, 0.5) * (1 - seg(t, 8, 0.4)), 17);
  K.card(700, 370, 540, 108, C.BLUE, 'Engranaje 2: la insulina baja la SHBG', ['Sube la testosterona libre, incluso sin obesidad', 'Acantosis nigricans: signo de la resistencia'], seg(t, 8.4, 0.5) * (1 - seg(t, 13, 0.4)), 17);
  K.card(700, 370, 540, 108, C.RED, 'Los dos convergen', ['Hiperandrogenismo: hirsutismo y acné', 'Anovulación crónica: endometrio sin oposición'], seg(t, 13.4, 0.5), 17);
  K.banner(700, 498, 540, 'Rotterdam: 2 de 3 criterios', C.GREEN, seg(t, 18, 0.5));
  K.banner(700, 556, 540, 'Descartar 17-OH-progesterona, TSH y prolactina', C.AMBER, seg(t, 21, 0.5), 18);
  K.banner(700, 614, 540, 'Desea embarazo: letrozol · No desea: ACO antiandrogénico', C.VIOLET, seg(t, 24.5, 0.5), 17);
} };
