// gin-16 A1: torsión anexial. Blausen "Ovarian Cysts" (inset del ovario, limpio): el propio ovario gira sobre su pedículo.
GIN_IMGS.ov = A('gin_ovario.png');
const OVB = { x: 880, y: 160, w: 420, h: 470 }, PIV = [1295, 612];
GIN.torsion = { dur: 30, credit: creditBL, f(t) {
  K.title('Torsión anexial: el ovario gira sobre su pedículo', 'Se corta primero el retorno venoso y después el flujo arterial', C.RED);
  const pl = plate('ov', { x: 870, y: 100, w: 590, h: 570 }, 40, 135, 0.9); pl.draw(seg(t, 0, 0.7));
  const tw = ease(seg(t, 3, 5.5)) * (1 - ease(seg(t, 17, 3.5))), ang = tw * 2.4;
  const dark = clamp(tw * 1.4, 0, 1) * (1 - ease(seg(t, 19, 4)) * 0.6);
  const [px, py] = pl.P(...PIV);
  if (tw > 0.001) { const k = 1 + 0.1 * tw; ctx.save(); pl.clip(); const [cx, cy] = pl.P(1075, 400);
    const g = ctx.createRadialGradient(cx, cy, 10, cx, cy, 250 * pl.S * k); g.addColorStop(0, `rgba(58,10,74,${0.75 * dark})`); g.addColorStop(1, `rgba(58,10,74,${0.35 * dark})`);
    ctx.fillStyle = g; ctx.beginPath(); ctx.ellipse(cx, cy, 205 * pl.S * k, 96 * pl.S * k, 0.97, 0, 7); ctx.fill();
    ctx.strokeStyle = `rgba(255,90,78,${0.8 * tw})`; ctx.lineWidth = 3; ctx.stroke();
    // giro alrededor del pedículo
    const r = 46 + 4 * Math.sin(t * 3); ctx.strokeStyle = `rgba(255,194,71,${tw})`; ctx.lineWidth = 5; ctx.lineCap = 'round'; ctx.beginPath();
    const a0 = t * 2.2; ctx.arc(px, py, r, a0, a0 + 4.2); ctx.stroke(); const ae = a0 + 4.2; ctx.fillStyle = `rgba(255,194,71,${tw})`; ctx.beginPath();
    ctx.moveTo(px + (r + 9) * Math.cos(ae), py + (r + 9) * Math.sin(ae)); ctx.lineTo(px + (r - 9) * Math.cos(ae), py + (r - 9) * Math.sin(ae)); ctx.lineTo(px + r * Math.cos(ae + 0.35), py + r * Math.sin(ae + 0.35)); ctx.fill(); ctx.restore(); }
  // pedículo retorcido
  const ped = poly([pl.P(1500, 640), pl.P(1400, 625), pl.P(1295, 612)]);
  ctx.save(); pl.clip(); ctx.lineCap = 'round'; ped.stroke(ctx, 0, 1, 14, 'rgba(120,60,70,0.55)'); ped.stroke(ctx, 0, 1, 8, '#D9908F');
  const turns = Math.round(tw * 6); for (let i = 0; i < turns; i++) { const [sx, sy] = ped.at(0.12 + i * 0.13); ctx.strokeStyle = '#7A1E2E'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(sx - 5, sy - 9); ctx.lineTo(sx + 5, sy + 9); ctx.stroke(); } ctx.restore();
  stream(ped, t, 1 - tw, 6, 0.35 * (1 - tw) + 0.02, '#C8102E', 4, 0, 1);
  label('Ovario con quiste', 420, 195, '#D7B8FF', ...pl.P(1000, 330), fade(t, 0.8, 4));
  label('Pedículo vascular', 480, 600, '#FFD17A', px + 50, py + 12, fade(t, 1.2, 28));
  label('Sin flujo: isquemia', 230, 620, C.RED, ...pl.P(1060, 520), fade(t, 8.8, 17));
  // detorsión: se recupera el color
  label('Detorsión: el ovario se conserva', 300, 620, C.GREEN, ...pl.P(1060, 480), fade(t, 20, 28));
  // paneles
  K.card(680, 140, 560, 124, C.RED, 'Dolor unilateral hiperagudo', ['Súbito, a veces cede y vuelve', 'Vómitos profusos en más de 80 de cada 100'], seg(t, 3.5, 0.5) * (1 - seg(t, 12, 0.4)), 18);
  K.card(680, 140, 560, 124, C.BLUE, 'Ecografía', ['Ovario aumentado, edematoso, folículos periféricos', 'Signo del remolino; Doppler ausente, pero uno normal no la descarta'], seg(t, 12.4, 0.5) * (1 - seg(t, 17, 0.4)), 18);
  K.card(680, 140, 560, 124, C.GREEN, 'Laparoscopía de urgencia: detorsión', ['Aunque se vea violáceo o negruzco, se conserva', 'Recupera su función en más de 90 de cada 100'], seg(t, 17.4, 0.5), 18);
  K.card(680, 290, 560, 110, C.AMBER, 'Ooforectomía', ['Solo si hay necrosis gangrenosa ya establecida', 'O en la mujer postmenopáusica'], seg(t, 23, 0.5), 18);
  K.banner(680, 430, 560, 'Pasadas 24 a 36 horas, el ovario ya está perdido', C.RED, seg(t, 6, 0.5), 20);
  K.banner(680, 490, 560, 'Quiste hemorrágico roto: sin vómitos, manejo médico', C.VIOLET, seg(t, 26, 0.5), 20);
} };
