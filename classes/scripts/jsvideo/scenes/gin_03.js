// gin-03 A1: estrógeno sin oposición (anovulación) → endometrio que crece y sangra irregular. Gráfico sin anatomía.
const G = GRAPH(L);
GIN.sua = { dur: 30, credit: () => K.credit('Gráfico esquemático propio'), f(t) {
  K.title('Sangrado uterino anormal: el estrógeno sin oposición', 'Ciclo ovulatorio versus anovulación crónica', C.RED);
  const A1 = G.axes({ x: 90, y: 170, w: 500, h: 230 }, [0, 28], [0, 100], { xt: [[1, '1'], [14, '14'], [28, '28']], xl: 'día del ciclo' });
  const A2 = G.axes({ x: 720, y: 170, w: 500, h: 230 }, [0, 28], [0, 100], { xt: [[1, '1'], [14, '14'], [28, '28']], xl: 'día' });
  A1.draw(seg(t, 0, 0.6)); A2.draw(seg(t, 0, 0.6));
  text('Ciclo ovulatorio', 90, 150, 22, C.GREEN, 'bold'); text('Anovulación crónica (SOP, obesidad)', 720, 150, 22, C.AMBER, 'bold');
  const E1 = G.smooth([[0, 14], [6, 22], [12, 85], [14, 98], [16, 45], [21, 66], [26, 24], [28, 12]]), P1 = G.smooth([[0, 2], [13, 3], [16, 12], [21, 62], [25, 40], [28, 5]]);
  const M1 = G.smooth([[0, 4], [7, 12], [14, 28], [21, 42], [27, 44], [28, 8]]);
  const k1 = seg(t, 1, 8), k2 = seg(t, 11, 9);
  // endometrio (área)
  const area = (ax, f, k, col) => { if (k <= 0) return; const xe = lerp(0, 28, k); ctx.save(); ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(ax.X(0), ax.Y(0));
    for (let i = 0; i <= 120; i++) { const x = lerp(0, xe, i / 120); ctx.lineTo(ax.X(x), ax.Y(f(x))); } ctx.lineTo(ax.X(xe), ax.Y(0)); ctx.fill(); ctx.restore(); };
  area(A1, M1, k1, 'rgba(200,70,60,0.35)');
  G.head(G.curve(A1, E1, k1, C.AMBER, 4), C.AMBER); G.head(G.curve(A1, P1, k1, C.BLUE, 4), C.BLUE);
  if (k1 > 0.1) { text('Estradiol', A1.X(11), A1.Y(100) + 4, 16, C.AMBER, 'bold'); } if (k1 > 0.8) text('Progesterona', A1.X(21), A1.Y(66) - 8, 16, C.BLUE, 'bold');
  if (k1 > 0.97) { text('Endometrio', A1.X(4), A1.Y(14), 15, '#FFB0A8', 'bold'); const [x, y] = [A1.X(27.6), A1.Y(10)]; ctx.fillStyle = C.RED; ctx.fillRect(x - 3, y, 6, 20); text('regla', x, y + 38, 15, C.RED, 'bold', 'center'); }
  const E2 = G.smooth([[0, 40], [6, 52], [12, 58], [20, 66], [28, 72]]), P2 = G.smooth([[0, 2], [28, 2]]), M2 = G.smooth([[0, 6], [10, 20], [20, 42], [28, 68]]);
  area(A2, M2, k2, 'rgba(200,70,60,0.35)'); G.head(G.curve(A2, E2, k2, C.AMBER, 4), C.AMBER); G.head(G.curve(A2, P2, k2, C.BLUE, 4), C.BLUE);
  if (k2 > 0.2) text('Estradiol sin oposición', A2.X(1), A2.Y(86), 16, C.AMBER, 'bold'); if (k2 > 0.3) text('Sin progesterona', A2.X(12), A2.Y(14), 16, C.BLUE, 'bold');
  [[9, 0.34], [15, 0.55], [18.5, 0.67], [24, 0.86]].forEach(([d, kk]) => { if (k2 > kk) { const a = clamp((k2 - kk) * 12, 0, 1), x = A2.X(d); ctx.fillStyle = `rgba(255,70,60,${a})`; ctx.fillRect(x - 3, A2.Y(0) - 18 * a, 6, 18 * a); } });
  if (k2 > 0.9) text('sangrado irregular', A2.X(14), A2.Y(0) + 80, 17, C.RED, 'bold', 'center');
  K.card(90, 450, 520, 110, C.GREEN, 'Con ovulación', ['La progesterona transforma el endometrio', 'La regla llega al caer las hormonas'], seg(t, 8, 0.5), 18);
  K.card(720, 450, 500, 110, C.AMBER, 'Sin ovulación', ['El endometrio sigue proliferando sin freno', 'Riesgo de hiperplasia y cáncer de endometrio'], seg(t, 17.5, 0.5), 18);
  K.banner(90, 590, 520, '¿Biopsia? 45 años o más, o postmenopausia, siempre', C.RED, seg(t, 22, 0.5), 18);
  K.banner(720, 590, 500, 'Menor de 45 con obesidad, SOP, tamoxifeno o Lynch', C.RED, seg(t, 25, 0.5), 18);
} };
