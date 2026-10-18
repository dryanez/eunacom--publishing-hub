// gin-09 A1: flujo vaginal: pH y aspecto. Blausen "Vaginitis" (limpio) + escala de pH.
GIN_IMGS.vag = A('gin_vaginitis.png');
const LUM = [[1052, 545], [1108, 508], [1165, 512], [1193, 560], [1203, 770], [1120, 796], [1058, 782], [1046, 610]];
function phScale(x, y, w, v, col) { const g = ctx.createLinearGradient(x, 0, x + w, 0); g.addColorStop(0, '#E0524A'); g.addColorStop(0.35, '#F3C84A'); g.addColorStop(1, '#3E7BD6');
  rrect(x, y, w, 18, 9, g); const px = k => x + w * (k - 3.5) / 4; ctx.fillStyle = 'rgba(255,255,255,0.9)'; ctx.fillRect(px(4.5) - 1, y - 8, 2, 34); ctx.fillRect(px(3.8) - 1, y - 4, 2, 26);
  text('3,8 a 4,5 normal', (px(3.8) + px(4.5)) / 2, y - 14, 14, C.INK, 'bold', 'center'); for (const k of [4, 5, 6, 7]) text(String(k), px(k), y + 44, 14, C.MUTED, '', 'center');
  const mx = px(v); ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(mx, y + 20); ctx.lineTo(mx - 10, y + 36); ctx.lineTo(mx + 10, y + 36); ctx.fill(); text(v.toFixed(1).replace('.', ','), mx, y + 62, 20, col, 'bold', 'center'); }
GIN.vaginitis = { dur: 30, credit: creditBL, f(t) {
  K.title('Flujo vaginal: pH y aspecto', 'Vaginosis, candidiasis y tricomoniasis, una al lado de la otra', C.VIOLET);
  const pl = plate('vag', { x: 900, y: 290, w: 460, h: 570 }, 40, 130, 0.97); pl.draw(seg(t, 0, 0.7));
  const poly1 = LUM.map(p => pl.P(...p)); const inL = f => { ctx.save(); ctx.beginPath(); poly1.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.closePath(); ctx.clip(); f(); ctx.restore(); };
  const phase = t < 7 ? 0 : t < 13.5 ? 1 : t < 20 ? 2 : t < 26 ? 3 : 4;
  const cross = (a, b) => 1 - 0; // cada fase se encadena con un fundido
  // fase 0: lactobacilos
  const lact = fade(t, 0.8, 7.2, 0.6); inL(() => { for (let i = 0; i < 60; i++) { const x = 1020 + rnd(i) * 190, y = 510 + rnd(i + 70) * 290, [sx, sy] = pl.P(x, y);
      ctx.save(); ctx.globalAlpha = lact; ctx.translate(sx, sy); ctx.rotate(rnd(i + 3) * 3); ctx.fillStyle = '#35C27A'; ctx.beginPath(); ctx.roundRect(-7, -2.5, 14, 5, 3); ctx.fill(); ctx.restore(); } });
  // vaginosis: película gris homogénea, clue cells
  const bv = fade(t, 7.4, 13.8, 0.6); inL(() => { ctx.globalAlpha = 0.62 * bv; ctx.fillStyle = '#8D9298'; ctx.fillRect(0, 0, 1280, 720); ctx.globalAlpha = 1; });
  // candidiasis: grumos blancos
  const cd = fade(t, 13.9, 20.2, 0.6); inL(() => { for (let i = 0; i < 38; i++) { const [sx, sy] = pl.P(1022 + rnd(i + 11) * 186, 520 + rnd(i + 31) * 270); ctx.globalAlpha = cd; ctx.fillStyle = '#FFFFFF'; ctx.beginPath(); ctx.ellipse(sx, sy, 8 + rnd(i) * 7, 5 + rnd(i + 2) * 5, rnd(i) * 3, 0, 7); ctx.fill(); } ctx.globalAlpha = 1; });
  // tricomonas: espuma verdosa y petequias en el cuello
  const tr = fade(t, 20.4, 26.2, 0.6); inL(() => { for (let i = 0; i < 46; i++) { const [sx, sy] = pl.P(1022 + rnd(i + 51) * 186, 520 + rnd(i + 71) * 270); ctx.globalAlpha = 0.8 * tr; ctx.strokeStyle = '#CBE56A'; ctx.fillStyle = 'rgba(190,225,90,0.45)'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(sx, sy, 3 + rnd(i) * 7, 0, 7); ctx.fill(); ctx.stroke(); } ctx.globalAlpha = 1; });
  if (tr > 0) { const [cx, cy] = pl.P(1118, 478); for (let i = 0; i < 22; i++) dot(cx - 38 + rnd(i + 5) * 76, cy - 14 + rnd(i + 9) * 28, 2.6, '#E8142E', tr); }
  label('Lactobacilos: vagina ácida', 400, 650, C.GREEN, ...pl.P(1100, 700), lact);
  label('Película gris homogénea', 400, 650, '#B8BEC6', ...pl.P(1100, 700), bv);
  label('Grumos blancos adheridos', 400, 650, '#FFFFFF', ...pl.P(1100, 700), cd);
  label('Espuma verdosa y cuello en fresa', 400, 650, '#CBE56A', ...pl.P(1118, 480), tr);
  // panel derecho
  const nm = ['Vagina sana', 'Vaginosis bacteriana', 'Candidiasis', 'Tricomoniasis', 'Resumen'][phase];
  const col = [C.GREEN, '#B8BEC6', '#FFFFFF', '#CBE56A', C.VIOLET][phase];
  const val = [4.2, 5.6, 4.2, 6.1, 5.0][phase], prev = [4.2, 4.2, 5.6, 4.2, 6.1][phase];
  const tp = [0, 7.4, 13.9, 20.4, 26.2][phase], vv = lerp(prev, val, ease(seg(t, tp, 1.2)));
  text(nm, 700, 175, 34, col, 'bold'); text('pH vaginal', 700, 215, 20, C.MUTED);
  phScale(700, 250, 520, phase === 4 ? 4.2 : vv, col);
  const info = [['Lactobacilos mantienen el pH ácido', 'Es el equilibrio que se rompe en las tres'], ['Amsel 3 de 4: flujo gris, pH sobre 4,5, aminas +, clue cells', 'Metronidazol 500 mg cada 12 h por 7 días; no se trata a la pareja'],
    ['Prurito intenso; el pH NO cambia (bajo 4,5), aminas negativas', 'Fluconazol 150 mg única; embarazada: clotrimazol tópico'], ['Flujo espumoso verdoso, ITS: trata a la pareja', 'Metronidazol 2 g en dosis única'], ['pH sobre 4,5: vaginosis o tricomoniasis', 'pH hasta 4,5: candidiasis o flujo fisiológico']][phase];
  K.card(700, 360, 540, 128, col, 'Qué buscar y cómo tratar', info, 1, 18);
  K.banner(700, 520, 540, ['Todo parte del equilibrio de lactobacilos', 'Test de aminas con KOH: olor a pescado', 'La única donde el pH no sube', 'La única de las tres que es ITS', 'El pH separa los cuadros'][phase], col, 1);
} };
