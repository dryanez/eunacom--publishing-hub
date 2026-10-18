// gin-08 A1: dónde actúa cada método. Blausen "IUD" (limpio).
GIN_IMGS.diu = A('gin_diu.png');
GIN.diu = { dur: 30, credit: creditBL, f(t) {
  K.title('Anticoncepción: dónde actúa cada método', 'DIU de cobre, DIU con levonorgestrel e implante', C.BLUE);
  const pl = plate('diu', { x: 30, y: 40, w: 780, h: 600 }, 40, 130, 0.78); pl.draw(seg(t, 0, 0.7));
  const route = poly([[500, 640], [500, 560], [500, 500], [505, 420], [505, 330], [500, 250]].map(p => pl.P(...p)));
  const cavC = pl.P(505, 280), cerv = pl.P(503, 450), ovL = pl.P(130, 150);
  label('DIU', 580, 175, '#FFFFFF', ...pl.P(505, 215), fade(t, 0.8, 30), 15);
  const ph = t < 10 ? 'cobre' : t < 20 ? 'lng' : 'imp';
  function swim(n, kill, stop, a) { for (let i = 0; i < n; i++) { const u0 = 1.8 + i * 0.5, u = clamp((t - u0) / 5, 0, 1); if (u <= 0 || u >= 1) continue;
      const s = Math.min(u, stop ?? 1); const [x, y] = route.at(s, (rnd(i) - 0.5) * 14); const dead = kill !== undefined && s >= kill;
      if (dead) { K.glow(x, y, 16, '255,120,40', 0.7 * (1 - seg(u, kill, 0.2))); continue; }
      ctx.save(); ctx.globalAlpha = a; ctx.translate(x, y); ctx.rotate(-1.57); ctx.fillStyle = '#fff'; ctx.strokeStyle = '#6a7683'; ctx.beginPath(); ctx.ellipse(0, 0, 4.5, 3, 0, 0, 7); ctx.fill(); ctx.stroke();
      ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.8; ctx.beginPath(); for (let k = 0; k <= 8; k++) ctx.lineTo(-4 - 14 * k / 8, 3.4 * Math.sin(t * 14 + i + k * 0.6) * k / 8); ctx.stroke(); ctx.restore(); } }
  // cobre: espermicida en la cavidad
  if (t < 10.5) { swim(8, 0.82, undefined, seg(t, 1.5, 0.5)); const a = fade(t, 2.5, 9.5); K.glow(...pl.P(505, 300), 90, '255,150,50', 0.35 * a * (0.7 + 0.3 * Math.sin(t * 6)));
    label('Reacción inflamatoria espermicida', 150, 590, C.AMBER, ...pl.P(520, 330), a); }
  K.card(620, 140, 620, 120, '#E0905A', 'DIU de cobre: sin hormonas', ['Dura 10 a 12 años; método de emergencia más eficaz', 'Hasta 120 horas postcoito, eficacia sobre 99 %'], seg(t, 1, 0.5) * (1 - seg(t, 10, 0.4)), 18);
  // LNG: moco espeso y endometrio fino
  if (t >= 10 && t < 20.5) { const a = fade(t, 10.5, 20); swim(8, undefined, 0.5, a);
    ctx.save(); pl.clip(); ctx.globalAlpha = 0.75 * seg(t, 11, 1) * (1 - seg(t, 20, 0.5)); ctx.fillStyle = '#E8D9A8'; ctx.strokeStyle = '#B79F58'; ctx.beginPath(); ctx.ellipse(...pl.P(503, 470), 28, 54, 0, 0, 7); ctx.fill(); ctx.stroke(); ctx.restore();
    label('Moco cervical espeso', 150, 620, C.GREEN, ...pl.P(503, 470), fade(t, 11.5, 20));
    ctx.save(); pl.clip(); ctx.globalAlpha = 0.45 * fade(t, 13, 20, 0.8); ctx.fillStyle = '#FFE2D8'; ctx.beginPath(); ctx.moveTo(...pl.P(440, 210)); ctx.lineTo(...pl.P(580, 210)); ctx.lineTo(...pl.P(520, 400)); ctx.lineTo(...pl.P(490, 400)); ctx.fill(); ctx.restore();
    label('Endometrio atrófico', 520, 600, C.BLUE, ...pl.P(540, 290), fade(t, 13.4, 20)); }
  K.card(620, 140, 620, 120, C.GREEN, 'DIU con levonorgestrel', ['Dura 5 a 8 años; reduce el sangrado más de 90 %', 'Seguro en las pacientes con estrógeno prohibido'], seg(t, 10.8, 0.5) * (1 - seg(t, 20, 0.4)), 18);
  // implante / minipíldora: sin ovulación
  if (t >= 20) { const a = fade(t, 20.5, 30, 0.6); const f = ease(seg(t, 21, 1.5));
    const [fx, fy] = pl.P(112, 170); ctx.save(); ctx.globalAlpha = a; ring(fx, fy, 16, C.VIOLET, 1, 3); text('óvulo', fx, fy - 24, 14, C.VIOLET, 'bold', 'center');
    ctx.strokeStyle = C.RED; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(fx - 16, fy - 16); ctx.lineTo(fx + 16, fy + 16); ctx.moveTo(fx + 16, fy - 16); ctx.lineTo(fx - 16, fy + 16); ctx.stroke(); ctx.restore();
    label('Sin ovulación', 150, 330, C.RED, ...ovL, fade(t, 21.4, 30)); }
  K.card(620, 140, 620, 130, C.VIOLET, 'Solo progestágeno que inhibe la ovulación', ['Implante de etonogestrel: el método reversible más eficaz', 'Minipíldora de desogestrel: todos los días, sin pausas'], seg(t, 20.8, 0.5), 18);
  K.card(620, 290, 620, 120, C.RED, 'Píldora de emergencia: levonorgestrel 1,5 mg', ['Retrasa el pico de LH; no es abortiva', 'Si vomita antes de 2 horas, repetir la dosis'], seg(t, 25, 0.5), 18);
} };
