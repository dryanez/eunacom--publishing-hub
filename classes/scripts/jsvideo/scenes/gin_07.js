// gin-07 A1: fecundación, inseminación y FIV. Blausen "Fertilization" (limpio).
GIN_IMGS.fec = A('gin_fertilizacion.png');
function sperm(x, y, ang, a, t, k = 0) { if (a <= 0) return; ctx.save(); ctx.globalAlpha = a; ctx.translate(x, y); ctx.rotate(ang);
  ctx.fillStyle = '#FFFFFF'; ctx.strokeStyle = '#7A8896'; ctx.lineWidth = 1; ctx.beginPath(); ctx.ellipse(0, 0, 4.5, 3, 0, 0, 7); ctx.fill(); ctx.stroke();
  ctx.strokeStyle = '#FFFFFF'; ctx.lineWidth = 1.8; ctx.beginPath(); for (let i = 0; i <= 8; i++) { const u = i / 8; ctx.lineTo(-4 - 14 * u, 3.4 * Math.sin(t * 14 + k + u * 5) * u); } ctx.stroke(); ctx.restore(); }
GIN.fecundacion = { dur: 30, credit: creditBL, f(t) {
  K.title('Fecundación, inseminación y FIV', 'Qué necesita cada técnica: trompa, espermatozoides, o saltarse la trompa', C.GREEN);
  const pl = plate('fec', { x: 480, y: 100, w: 1440, h: 1300 }, 40, 130, 0.43); pl.draw(seg(t, 0, 0.7));
  const route = poly([[1462, 1373], [1440, 1200], [1420, 1060], [1380, 900], [1300, 790], [1240, 752], [1073, 724], [851, 557], [759, 464], [684, 334], [637, 190]].map(p => pl.P(...p)));
  const egg = pl.P(637, 175), os = pl.P(1462, 1373), cav = pl.P(1330, 880), ostL = pl.P(1073, 724);
  label('Óvulo', 300, 150, '#D7B8FF', ...egg, fade(t, 0.8, 9));
  label('Trompa', 150, 400, '#FFD17A', ...pl.P(851, 557), fade(t, 1, 9));
  // 1) fecundación natural: nadan muchos, llegan pocos
  for (let i = 0; i < 16; i++) { const u0 = 1.2 + i * 0.28, u = clamp((t - u0) / 7.5, 0, 1); if (u <= 0 || u >= 1) continue;
    const die = 0.35 + 0.65 * rnd(i + 7), alive = u < die || i > 12, s = alive ? u : Math.min(u, die);
    const [x, y] = route.at(s, (rnd(i) - 0.5) * 10); sperm(x, y, Math.atan2(...route.at(s + 0.01).map((v, j) => v - [x, y][j]).reverse()), i > 12 || u < die ? 1 : 1 - seg(u, die, 0.05), t, i); }
  const fer = ease(seg(t, 9, 1.2)); if (fer > 0) { K.glow(...egg, 60 * fer, '255,240,160', 0.8 * fade(t, 9, 14, 0.8)); }
  label('Fecundación en la ampolla', 300, 330, C.GREEN, ...egg, fade(t, 9.4, 14));
  K.card(620, 140, 620, 120, C.GREEN, 'Fecundación normal', ['Llegan pocos espermatozoides al óvulo, en la trompa', 'Si la trompa está obstruida, no hay encuentro'], seg(t, 2, 0.5) * (1 - seg(t, 14.5, 0.4)), 18);
  // 2) inseminación intrauterina: catéter deposita espermatozoides capacitados
  const ii = seg(t, 15, 0.6) * (1 - seg(t, 22, 0.6));
  if (ii > 0) { const cath = poly([[os[0] + 40, os[1] + 40], os, [os[0] - 20, lerp(os[1], cav[1], 0.55)], [cav[0] - 10, cav[1] + 20]]); ctx.save(); pl.clip(); ctx.globalAlpha = ii; ctx.lineCap = 'round';
    cath.stroke(ctx, 0, ease(seg(t, 15.2, 2.2)), 7, '#56616E'); cath.stroke(ctx, 0, ease(seg(t, 15.2, 2.2)), 4, '#EEF2F5'); ctx.restore();
    for (let i = 0; i < 12; i++) { const u = clamp((t - 17.6 - i * 0.12) / 3, 0, 1), s = lerp(0.52, 0.78, ease(u)); const [x, y] = route.at(s, (rnd(i) - 0.5) * 12); if (u > 0) sperm(x, y, -2.2, ii, t, i); } }
  K.card(620, 140, 620, 130, C.BLUE, 'Inseminación intrauterina: baja complejidad', ['Al menos una trompa permeable', 'Semen capacitado con 3 millones o más de espermatozoides móviles'], seg(t, 15.4, 0.5) * (1 - seg(t, 22.4, 0.4)), 18);
  label('Catéter en la cavidad', 420, 600, C.BLUE, ...cav, fade(t, 17, 22));
  // 3) obstrucción bilateral → FIV
  const ob = seg(t, 23, 0.6); if (ob > 0) { for (const p of [pl.P(851, 557)]) { ctx.save(); ctx.globalAlpha = ob; ctx.strokeStyle = C.RED; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(p[0] - 16, p[1] - 16); ctx.lineTo(p[0] + 16, p[1] + 16); ctx.moveTo(p[0] + 16, p[1] - 16); ctx.lineTo(p[0] - 16, p[1] + 16); ctx.stroke(); ctx.restore(); }
    const lab = [470, 560]; ctx.save(); ctx.globalAlpha = ob; rrect(lab[0] - 70, lab[1] - 26, 140, 52, 12, '#1B2230'); ctx.strokeStyle = C.VIOLET; ctx.lineWidth = 2; ctx.beginPath(); ctx.roundRect(lab[0] - 70, lab[1] - 26, 140, 52, 12); ctx.stroke(); text('Laboratorio', lab[0], lab[1] + 6, 18, C.INK, 'bold', 'center'); ctx.restore();
    arrow(...egg, lab[0] - 10, lab[1] - 28, C.VIOLET, seg(t, 24, 0.6), 4); arrow(lab[0] + 40, lab[1] + 26, ...cav, C.VIOLET, seg(t, 26, 0.6), 4); }
  K.card(620, 140, 620, 130, C.VIOLET, 'FIV o ICSI: alta complejidad', ['Obstrucción bilateral o factor masculino severo', 'El óvulo y el espermatozoide se unen en el laboratorio: saltan la trompa'], seg(t, 23.4, 0.5), 18);
  K.banner(620, 300, 620, 'Mayor de 38 años o endometriosis severa: FIV', C.AMBER, seg(t, 27, 0.5), 20);
} };
