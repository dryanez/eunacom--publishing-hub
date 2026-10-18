// gin-05 A1: menstruación retrógrada → implantes de endometriosis. Blausen "Endometriosis" (limpio).
GIN_IMGS.endo = A('gin_endometriosis.png');
GIN.endometriosis = { dur: 28, credit: creditBL, f(t) {
  K.title('Endometriosis: ¿por qué el endometrio sale del útero?', 'Teoría de Sampson: menstruación retrógrada', C.RED);
  const pl = plate('endo', { x: 560, y: 230, w: 1160, h: 900 }, 40, 135, 0.53); pl.draw(seg(t, 0, 0.7));
  const T = a => poly(a.map(p => pl.P(...p)));
  const tubeL = T([[1093, 608], [1056, 594], [945, 556], [856, 527], [797, 460], [774, 356], [722, 289], [678, 311]]);
  const tubeR = T([[1242, 601], [1353, 571], [1450, 579], [1538, 549], [1560, 400], [1523, 349], [1568, 297]]);
  const cervix = T([[1165, 640], [1160, 800], [1160, 950], [1160, 1040], [1160, 1120]]);
  label('Útero', 330, 570, '#7FC8FF', ...pl.P(1260, 800), fade(t, 1, 6));
  label('Trompa', 140, 330, '#FFD17A', ...pl.P(856, 527), fade(t, 1.3, 6));
  label('Ovario', 520, 210, '#D7B8FF', ...pl.P(1583, 480), fade(t, 1.6, 6));
  // menstruación: sale por el cuello, pero parte sube por las trompas
  const m = seg(t, 2.5, 0.8) * (1 - seg(t, 9, 0.8));
  stream(cervix, t, m, 9, 0.35, '#B3122E', 4.2);
  const rr = seg(t, 3.5, 0.8) * (1 - seg(t, 9.5, 0.8));
  stream(tubeL, t, rr, 9, 0.28, '#D8132F', 4.2, 0, 1); stream(tubeR, t, rr, 9, 0.28, '#D8132F', 4.2, 0, 1);
  label('Menstruación retrógrada', 330, 160, C.RED, ...pl.P(950, 556), fade(t, 4, 9.5));
  // fragmentos que caen sobre el peritoneo y se implantan
  const spots = [[1583, 490, 'Endometrioma'], [863, 734, 'Douglas y uterosacros'], [1153, 467, 'Superficie uterina'], [1412, 593, 'Peritoneo']];
  spots.forEach(([x, y, nm], i) => { const [sx, sy] = pl.P(x, y), a = ease(seg(t, 9.8 + i * 0.7, 1));
    K.glow(sx, sy, 38 * a + 4 * Math.sin(t * 4 + i), '255,70,60', 0.55 * a * fade(t, 9.8, 20.5, 0.6)); });
  [[1568, 297, 1583, 490], [678, 311, 693, 504]].forEach(([x0, y0, x1, y1], i) => { const u = clamp((t - 9 - i * 0.3) % 3 / 2.4, 0, 1), a = seg(t, 9, 0.5) * (1 - seg(t, 14, 0.5));
    const [px, py] = pl.P(lerp(x0, x1, u), lerp(y0, y1, u)); dot(px, py, 4.5, '#C8102E', a * (u > 0 && u < 1 ? 1 : 0)); });
  label('Endometrioma: quiste de chocolate', 420, 190, C.RED, ...pl.P(1583, 490), fade(t, 12, 22));
  label('Fondo de saco de Douglas', 200, 560, C.AMBER, ...pl.P(863, 734), fade(t, 12.6, 22));
  // paneles
  K.card(620, 140, 620, 128, C.RED, 'Refluyen fragmentos por las trompas', ['En vez de salir solo por la vagina', 'Se implantan en el peritoneo y el ovario'], seg(t, 3, 0.5) * (1 - seg(t, 12, 0.4)), 18);
  K.card(620, 140, 620, 128, C.AMBER, 'Inflamación crónica estrógeno-dependiente', ['Por eso duele con cada regla', 'Ovario: el lugar más frecuente'], seg(t, 12.4, 0.5), 18);
  K.card(620, 290, 620, 150, C.BLUE, 'La tríada', ['Dismenorrea progresiva que ya no cede a AINE', 'Dispareunia profunda', 'Infertilidad: hasta la mitad de las pacientes'], seg(t, 16.5, 0.5), 18);
  K.card(620, 460, 620, 120, C.GREEN, 'Al tacto', ['Útero fijo en retroversión', 'Nódulos dolorosos en el Douglas y los uterosacros'], seg(t, 20.5, 0.5), 18);
  K.banner(620, 604, 620, 'Diagnóstico definitivo: laparoscopía con biopsia', C.VIOLET, seg(t, 24, 0.5));
} };
