// gin-06 A1: incontinencia de esfuerzo (uretra hipermóvil) vs urgencia (detrusor). Blausen "Pelvic Muscles (Female Side)" (limpio).
GIN_IMGS.pelv = A('gin_pelvis_f.png');
const BLAD = [[330, 690], [400, 650], [520, 640], [650, 650], [780, 700], [840, 770], [830, 850], [790, 900], [720, 880], [640, 850], [520, 830], [420, 790], [350, 740]];
const URE = [[790, 905], [770, 960], [700, 1010], [620, 1050], [520, 1085], [420, 1100]];
GIN.incontinencia = { dur: 28, credit: creditBL, f(t) {
  K.title('Incontinencia: esfuerzo versus urgencia', 'Un escape de orina con dos mecanismos distintos', C.AMBER);
  const pl = plate('pelv', { x: 300, y: 330, w: 760, h: 830 }, 40, 130, 0.68); pl.draw(seg(t, 0, 0.7));
  const B = pl.clip && BLAD.map(p => pl.P(...p)); const U = poly(URE.map(p => pl.P(...p)));
  const inter = (t > 13.5) ? 1 : 0;
  // tinte de la vejiga
  const fillB = (a, col) => { ctx.save(); pl.clip(); ctx.globalAlpha = a; ctx.fillStyle = col; ctx.beginPath(); B.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.fill(); ctx.restore(); };
  fillB(0.35 + 0.1 * Math.sin(t * 3), 'rgba(255,214,90,1)');
  ctx.save(); pl.clip(); ctx.lineCap = 'round'; ctx.lineJoin = 'round'; U.stroke(ctx, 0, 1, 11, 'rgba(120,70,0,0.75)'); U.stroke(ctx, 0, 1, 7, '#FFD65A'); ctx.restore();
  label('Vejiga', 105, 215, '#FFD17A', ...pl.P(600, 700), fade(t, 0.8, 27));
  label('Uretra', 100, 640, '#FFD17A', ...pl.P(560, 1068), fade(t, 0.8, 27));
  // ---- esfuerzo (1 a 12 s)
  const cough = seg(t, 3, 0.4) * (1 - seg(t, 8.5, 0.6)), pulse = Math.max(0, Math.sin((t - 3) * 5)) * cough;
  for (let i = 0; i < 4; i++) arrow(...pl.P(520 + i * 90, 470 + 0), ...pl.P(520 + i * 90, 600 + 40 * pulse), C.RED, cough, 5);
  label('Tos: sube la presión abdominal', 300, 160, C.RED, ...pl.P(650, 480), cough);
  const desc = 28 * pulse; const [nx, ny] = pl.P(790, 905 + 0);
  if (t > 2 && t < 12) { ring(nx, ny + desc, 15, C.RED, fade(t, 2, 11.5), 4); label('Cuello vesical hipermóvil', 330, 560, C.RED, nx, ny + desc, fade(t, 2.5, 11.5)); }
  const leak = seg(t, 4, 0.5) * (1 - seg(t, 9.5, 0.6)); const [mx, my] = pl.P(420, 1100);
  for (let i = 0; i < 6; i++) { const u = ((t * 1.6) + i / 6) % 1; dot(mx - 6 * u, my + 4 + 60 * u * u, 3.6, '#F7C531', leak * (1 - u) * pulse > 0.01 ? leak * (1 - u) : 0); }
  K.card(620, 140, 620, 120, C.RED, 'Esfuerzo: problema de soporte', ['Parto vaginal traumático: la uretra se vuelve hipermóvil', 'Escapa poco volumen al toser o reír, sin aviso'], seg(t, 2, 0.5) * (1 - seg(t, 12.6, 0.4)), 18);
  K.card(620, 280, 620, 130, C.GREEN, 'Kegel primero; si falla, cabestrillo TOT o TVT', ['Curación sobre el 85 %', 'Test de Bonney: al elevar el cuello, el escape cede'], seg(t, 8.5, 0.5) * (1 - seg(t, 12.6, 0.4)), 18);
  // ---- urgencia (13 a 28 s)
  const u0 = seg(t, 13.5, 0.6), det = Math.max(0, Math.sin((t - 14) * 4.2)) * u0;
  if (u0 > 0) { ctx.save(); pl.clip(); ctx.strokeStyle = `rgba(255,90,78,${0.9 * u0})`; ctx.lineWidth = 3 + 5 * det; ctx.beginPath(); B.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.closePath(); ctx.stroke(); ctx.restore();
    for (let k = 0; k < 3; k++) { const r = ((t * 0.9) + k / 3) % 1; ctx.save(); pl.clip(); ctx.globalAlpha = (1 - r) * 0.5 * u0; ctx.strokeStyle = C.RED; ctx.lineWidth = 2; ctx.beginPath(); ctx.ellipse(...pl.P(590, 745), 230 * pl.S * (0.5 + r * 0.8), 130 * pl.S * (0.5 + r * 0.8), 0, 0, 7); ctx.stroke(); ctx.restore(); } }
  label('El detrusor se contrae solo', 330, 160, C.RED, ...pl.P(600, 690), fade(t, 14.3, 27));
  const lk2 = seg(t, 17, 0.5) * (1 - seg(t, 26.5, 0.5)); for (let i = 0; i < 7; i++) { const u = ((t * 1.3) + i / 7) % 1; dot(mx - 6 * u, my + 4 + 70 * u * u, 4, '#F7C531', det * lk2 * (1 - u)); }
  K.card(620, 140, 620, 120, C.AMBER, 'Urgencia: vejiga hiperactiva', ['Deseo imperioso y después escape de buen volumen', 'Polaquiuria y nicturia; confirma urocultivo negativo'], seg(t, 14, 0.5), 18);
  K.card(620, 280, 620, 130, C.GREEN, 'Reeducación vesical y fármacos', ['Solifenacina, oxibutinina o mirabegrón', 'Café, té y alcohol: menos'], seg(t, 19, 0.5), 18);
  K.banner(620, 440, 620, 'Cabestrillo contraindicado en la urgencia: la empeora', C.RED, seg(t, 22.5, 0.5));
  K.banner(620, 500, 620, 'Esfuerzo = anatómico · Urgencia = funcional', C.VIOLET, seg(t, 24.5, 0.5));
} };
