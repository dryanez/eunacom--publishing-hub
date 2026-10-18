// gin-15 A1: el grosor endometrial que decide la biopsia. Gráfico esquemático sin anatomía.
GIN.endometrio = { dur: 30, credit: () => K.credit('Gráfico esquemático propio'), f(t) {
  K.title('Sangrado postmenopáusico: el grosor que decide la biopsia', 'El corte sube cuanto menos alarma clínica hay', C.RED);
  const cols = [{ x: 40, name: 'Sin terapia hormonal', sub: 'Con sangrado', cut: 4.5, lab: '4 a 5 mm', col: C.RED, t0: 1.5, info: ['Menos de 4-5 mm: atrofia, observar', '4-5 mm o más: biopsia con Pipelle'] },
    { x: 450, name: 'Con terapia de reemplazo', sub: 'Con sangrado', cut: 8, lab: '8 mm', col: C.AMBER, t0: 10.5, info: ['El estrógeno exógeno engrosa el endometrio', 'El corte sube a 8 mm; todo sangrado se estudia'] },
    { x: 860, name: 'Asintomática', sub: 'Hallazgo en la ecografía', cut: 11, lab: '11 mm', col: C.BLUE, t0: 19.5, info: ['Sin sangrado, el corte sube a 11 mm', 'Menos alarma clínica, más grosor para biopsiar'] }];
  cols.forEach((c, i) => { const a = seg(t, c.t0 - 0.8, 0.6); if (a <= 0) return; ctx.save(); ctx.globalAlpha = a;
    const bx = c.x, by = 190, bh = 290, mm = v => by + bh - (v / 14) * bh;
    text(c.name, bx, 150, 21, c.col, 'bold'); text(c.sub, bx, 172, 15, C.MUTED);
    ctx.strokeStyle = '#3A424E'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(bx + 50, by); ctx.lineTo(bx + 50, by + bh); ctx.lineTo(bx + 340, by + bh); ctx.stroke();
    for (const v of [0, 4, 8, 12]) text(String(v), bx + 40, mm(v) + 5, 14, C.MUTED, '', 'right');
    ctx.strokeStyle = c.col; ctx.lineWidth = 2; ctx.setLineDash([9, 7]); ctx.beginPath(); ctx.moveTo(bx + 50, mm(c.cut)); ctx.lineTo(bx + 340, mm(c.cut)); ctx.stroke(); ctx.setLineDash([]);
    text('Corte ' + c.lab, bx + 340, mm(c.cut) - 8, 16, c.col, 'bold', 'right');
    const g = ease(seg(t, c.t0, 5)), th = lerp(1.5, Math.min(c.cut + 3, 12.8), g), over = th >= c.cut, x0 = bx + 110, w = 120, hh = (th / 14) * bh;
    rrect(x0, mm(0) - hh, w, hh, 6, over ? '#C8102E' : '#E9A58F');
    text(th.toFixed(1).replace('.', ',') + ' mm', x0 + w + 12, mm(th) + 6, 17, over ? C.RED : C.INK, 'bold');
    if (over) tag('Biopsia', x0 + w / 2, mm(th) - 26, C.RED, 20); else tag('Observar', x0 + w / 2, mm(th) - 26, C.GREEN, 18);
    ctx.restore();
    K.card(bx - 10, 515, 390, 100, c.col, c.name, c.info, seg(t, c.t0 + 4.6, 0.5), 15); });
  K.banner(340, 645, 600, 'Todo sangrado postmenopáusico es cáncer hasta descartarlo', C.RED, seg(t, 25, 0.5), 20);
} };
