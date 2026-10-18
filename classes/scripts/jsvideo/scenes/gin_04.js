// gin-04 A1: miomas según ubicación. Blausen "Uterine Fibroids" (limpio).
GIN_IMGS.mio = A('gin_miomas.png');
const FIB = { sub: [1082, 320, 46], intra: [923, 498, 42], mucoso: [1092, 622, 80], peq: [1204, 493, 24] };
GIN.miomas = { dur: 28, credit: creditBL, f(t) {
  K.title('Miomas: la ubicación decide el síntoma', 'Clasificación FIGO: submucoso, intramural y subseroso', C.RED);
  const pl = plate('mio', { x: 600, y: 230, w: 840, h: 857 }, 40, 130, 0.65); pl.draw(seg(t, 0, 0.7));
  const f = k => pl.P(FIB[k][0], FIB[k][1]);
  // anillos y rótulos
  const aMu = fade(t, 2, 9.5), aSub = fade(t, 10.5, 17.5), aInt = fade(t, 18, 23.5);
  for (const [k, col, a] of [['mucoso', C.RED, aMu], ['sub', C.BLUE, aSub], ['peq', C.BLUE, aSub], ['intra', C.AMBER, aInt]])
    ring(...f(k), FIB[k][2] * pl.S + 6 + 3 * Math.sin(t * 5), col, a, 4);
  label('Submucoso', 520, 560, C.RED, f('mucoso')[0] - 40, f('mucoso')[1], aMu);
  label('Subseroso', 520, 205, C.BLUE, f('sub')[0] + 20, f('sub')[1] - 6, aSub);
  label('Intramural', 130, 340, C.AMBER, f('intra')[0] - 20, f('intra')[1] - 4, aInt);
  // submucoso: distorsiona la cavidad y sangra
  const cav = poly([pl.P(1070, 650), pl.P(1030, 720), pl.P(1000, 790), pl.P(995, 860), pl.P(1000, 920), pl.P(1010, 1000), pl.P(1020, 1080)]);
  const bl = seg(t, 3.5, 0.8) * (1 - seg(t, 10, 0.6));
  if (bl > 0) { ctx.save(); pl.clip(); ctx.globalAlpha = 0.55 * bl; cav.stroke(ctx, 0, 0.62, 16, '#C8102E'); ctx.restore(); stream(cav, t, bl, 9, 0.35, '#E3122E', 4.2, 0, 1); }
  // subseroso crece hacia afuera y comprime
  const g = ease(seg(t, 11, 4));
  swell(pl, 'mio', ...FIB.sub, 1 + 0.35 * g, aSub > 0 ? 1 : 0);
  swell(pl, 'mio', ...FIB.peq, 1 + 0.5 * g, aSub > 0 ? 1 : 0);
  arrow(...f('sub'), f('sub')[0] + 6, f('sub')[1] - 70, C.BLUE, seg(t, 13, 0.6) * (1 - seg(t, 17.5, 0.5)), 5);
  arrow(...f('peq'), f('peq')[0] + 70, f('peq')[1] + 20, C.BLUE, seg(t, 13.4, 0.6) * (1 - seg(t, 17.5, 0.5)), 5);
  // panel
  K.card(620, 140, 620, 128, C.RED, 'Submucoso (FIGO 0 a 2)', ['Toca la cavidad: sangrado uterino anormal', 'Anemia ferropénica e infertilidad'], seg(t, 3, 0.5) * (1 - seg(t, 10.2, 0.4)), 18);
  K.card(620, 140, 620, 128, C.BLUE, 'Subseroso', ['No toca el endometrio: no sangra más', 'Comprime vejiga o recto: polaquiuria, constipación'], seg(t, 11.5, 0.5) * (1 - seg(t, 17.8, 0.4)), 18);
  K.card(620, 140, 620, 128, C.AMBER, 'Intramural', ['Dentro del miometrio', 'Su impacto depende de qué tan cerca está de la cavidad'], seg(t, 18.5, 0.5) * (1 - seg(t, 23.8, 0.4)), 18);
  K.card(620, 300, 620, 128, C.RED, 'Degeneración roja en el embarazo', ['Isquemia e infarto hemorrágico: dolor agudo y fiebre baja', 'Manejo médico: nunca miomectomía'], seg(t, 24, 0.5), 18);
  K.banner(620, 460, 620, 'Más cerca de la cavidad, más sangra', C.RED, seg(t, 5, 0.5), 28);
  K.banner(620, 520, 620, 'Más hacia afuera, más comprime', C.BLUE, seg(t, 14, 0.5));
  K.banner(620, 580, 620, 'Asintomático: control ecográfico, no se opera', C.GREEN, seg(t, 20, 0.5));
} };
