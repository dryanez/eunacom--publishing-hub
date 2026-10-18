// gin-12 A1: ventana de oportunidad de la terapia hormonal. Gráfico esquemático sin anatomía.
GIN.ventana = { dur: 28, credit: () => K.credit('Gráfico esquemático propio (no son datos de un estudio)'), f(t) {
  K.title('Terapia hormonal: la ventana de oportunidad', 'Menos de 60 años o menos de 10 años desde la menopausia', C.BLUE);
  const AX = G.axes({ x: 110, y: 160, w: 700, h: 330 }, [0, 20], [0, 100], { xt: [[0, '0'], [5, '5'], [10, '10'], [15, '15'], [20, '20']], xl: 'años desde la menopausia' });
  AX.draw(seg(t, 0, 0.6));
  const ben = G.smooth([[0, 78], [5, 70], [10, 58], [20, 40]]), rie = G.smooth([[0, 12], [5, 22], [10, 45], [15, 72], [20, 92]]);
  const w = ease(seg(t, 1.5, 1.2)); if (w > 0) { ctx.save(); ctx.globalAlpha = 0.18 * w; ctx.fillStyle = C.GREEN; ctx.fillRect(AX.X(0), AX.box.y, (AX.X(10) - AX.X(0)) * w, AX.box.h); ctx.restore(); text('Ventana de oportunidad', AX.X(5), AX.box.y + 28, 20, C.GREEN, 'bold', 'center'); }
  G.head(G.curve(AX, ben, seg(t, 3, 5), C.GREEN, 4), C.GREEN); G.head(G.curve(AX, rie, seg(t, 5, 6), C.RED, 4), C.RED);
  if (t > 6) text('Beneficio: bochornos, hueso', AX.X(1), AX.Y(86), 16, C.GREEN, 'bold'); if (t > 9) text('Riesgo al iniciar: infarto, ACV, demencia', AX.X(10.5), AX.Y(34), 16, C.RED, 'bold');
  G.vline(AX, 10, C.AMBER, '10 años', seg(t, 4, 0.6));
  // pacientes
  const pa = seg(t, 12, 0.6), pb = seg(t, 15.5, 0.6);
  if (pa > 0) { ctx.save(); ctx.globalAlpha = pa; ctx.fillStyle = C.GREEN; ctx.beginPath(); ctx.arc(AX.X(3), AX.Y(ben(3)), 11, 0, 7); ctx.fill(); ctx.restore(); text('55 años, 3 años de menopausia', 120, 548, 18, C.GREEN, 'bold', 'left'); text('Dentro: se puede iniciar', 120, 574, 16, C.INK, '', 'left'); }
  if (pb > 0) { ctx.save(); ctx.globalAlpha = pb; ctx.fillStyle = C.RED; ctx.beginPath(); ctx.arc(AX.X(15), AX.Y(rie(15)), 11, 0, 7); ctx.fill(); ctx.restore(); text('68 años, 15 años de menopausia', 120, 612, 18, C.RED, 'bold', 'left'); text('Fuera: iniciarla por primera vez suma riesgo', 120, 638, 16, C.INK, '', 'left'); }
  K.card(860, 160, 380, 150, C.BLUE, '¿Tiene útero?', ['Con útero: estrógeno más progestágeno', 'El progestágeno protege el endometrio', 'Sin útero: estrógeno solo'], seg(t, 18, 0.5), 17);
  K.card(860, 330, 380, 130, C.RED, 'Contraindicada', ['Cáncer de mama o endometrio', 'Trombosis o evento cardiovascular', 'Sangrado uterino sin estudiar'], seg(t, 21, 0.5), 17);
  K.card(860, 480, 380, 110, C.AMBER, 'Si no se puede dar hormonas', ['Venlafaxina; paroxetina no con tamoxifeno', 'Estrógeno tópico para la atrofia'], seg(t, 24, 0.5), 17);
} };
