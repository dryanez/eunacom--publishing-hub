// gin-11 A1: infección que sube (EIP). Blausen "PID Sites" (limpio).
GIN_IMGS.eipimg = A('gin_eip.png');
GIN.eip = { dur: 28, credit: creditBL, f(t) {
  K.title('Enfermedad inflamatoria pélvica: una infección que sube', 'De la cervicitis al absceso tubo-ovárico', C.AMBER);
  const pl = plate('eipimg', { x: 450, y: 60, w: 1100, h: 1169 }, 40, 135, 0.48); pl.draw(seg(t, 0, 0.7));
  const T = a => poly(a.map(p => pl.P(...p)));
  const up = T([[1157, 1004], [1140, 920], [1135, 830], [1120, 700], [1090, 560], [1051, 475]]);
  const tube = T([[1051, 475], [975, 445], [918, 426], [860, 410], [798, 389], [745, 350], [709, 294], [730, 191], [655, 130], [600, 123], [560, 180], [546, 232]]);
  // 1) germen en el cuello
  for (let i = 0; i < 6; i++) { const u = clamp((t - 1.5 - i * 0.3) / 1.6, 0, 1), [x0, y0] = pl.P(1157 + (rnd(i) - 0.5) * 220, 1215), [x1, y1] = pl.P(1157, 1004);
    hex(lerp(x0, x1, ease(u)), lerp(y0, y1, ease(u)), 7, C.AMBER, u > 0 && u < 1 ? 1 : 0); }
  label('Gonococo y Chlamydia', 130, 640, C.AMBER, ...pl.P(1157, 1030), fade(t, 1.5, 7));
  // 2) endometritis
  const s2 = seg(t, 5, 4); stream(up, t, seg(t, 4, 0.6) * (1 - seg(t, 12, 0.6)), 8, 0.3, '#FFC247', 4, 0, 1);
  { const [ex, ey] = pl.P(1160, 600); K.glow(ex, ey, 120, '255,194,71', 0.5 * ease(s2) * fade(t, 6, 24, 0.8)); }
  label('Endometritis', 140, 245, C.AMBER, ...pl.P(1120, 600), fade(t, 6.5, 12));
  // 3) salpingitis
  stream(tube, t, seg(t, 9.5, 0.6) * (1 - seg(t, 16, 0.6)), 10, 0.25, '#FFC247', 4, 0, 1);
  { const a = ease(seg(t, 10, 3)) * fade(t, 10, 24, 0.8); ctx.save(); pl.clip(); ctx.globalAlpha = 0.5 * a; ctx.lineCap = 'round'; tube.stroke(ctx, 0, ease(seg(t, 10, 3)), 14, '#FFD64D'); ctx.restore(); }
  label('Salpingitis', 140, 175, C.AMBER, ...pl.P(798, 389), fade(t, 11, 17));
  // 4) absceso tubo-ovárico
  const ab = ease(seg(t, 14.5, 4)); const [ax, ay] = pl.P(590, 300);
  if (ab > 0) { ctx.save(); pl.clip(); ctx.fillStyle = `rgba(240,200,60,${0.55 * ab})`; ctx.strokeStyle = `rgba(255,120,40,${ab})`; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.ellipse(ax, ay, 60 * ab, 78 * ab, 0.3, 0, 7); ctx.fill(); ctx.stroke(); ctx.restore(); }
  label('Absceso tubo-ovárico', 150, 470, C.RED, ax - 10, ay + 30, fade(t, 15.5, 22));
  // 5) peritonitis pélvica
  const pe = ease(seg(t, 19, 3)); if (pe > 0) { ctx.save(); pl.clip(); K.glow(...pl.P(1000, 560), 230 * pe, '255,70,60', 0.35 * pe * fade(t, 19, 24.5, 0.8)); ctx.restore(); }
  label('Peritonitis pélvica', 330, 640, C.RED, ...pl.P(1000, 650), fade(t, 19.5, 24.5));
  // paneles
  K.card(620, 140, 620, 120, C.AMBER, 'Sube desde el cuello', ['Chlamydia o gonococo, luego anaerobios y enterobacterias', 'Endometritis, salpingitis, peritonitis'], seg(t, 2, 0.5) * (1 - seg(t, 15, 0.4)), 18);
  K.card(620, 140, 620, 120, C.RED, 'Absceso tubo-ovárico (Monif III)', ['Hospitalización obligatoria', 'Si se rompe (IV): peritonitis y shock séptico'], seg(t, 15.4, 0.5), 18);
  K.card(620, 280, 620, 150, C.BLUE, 'Criterios de Hager: los 3 mayores', ['Dolor en el abdomen bajo', 'Dolor al movilizar el cuello (Frenkel)', 'Dolor anexial al tacto'], seg(t, 6, 0.5), 18);
  K.card(620, 450, 620, 120, C.GREEN, 'Ambulatoria: sin criterios de gravedad', ['Ceftriaxona IM única + doxiciclina y metronidazol, 14 días'], seg(t, 11, 0.5), 18);
  K.banner(620, 592, 620, 'Secuelas: infertilidad tubárica y embarazo ectópico', C.VIOLET, seg(t, 23, 0.5));
} };
