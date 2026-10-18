// gin-13 A1: del VPH a la lesión de alto grado y el cáncer. Cuello uterino (Blausen "PID-Sites", limpio) + epitelio esquemático.
GIN_IMGS.eip = A('gin_eip.png');
const OS = [1157, 1004];                       // orificio cervical externo (px de la imagen)
function epi(x, y, w, st) {                    // st: {abn:[fila0..fila5], inv, virus:[0..1], p53}
  const rows = 6, cellH = 40, n = 11, sp = w / n, base = y + rows * cellH;
  rrect(x - 10, y - 14, w + 20, rows * cellH + 130, 14, '#161B22');
  // estroma
  ctx.fillStyle = '#B5655D'; ctx.fillRect(x, base + 6, w, 90);
  ctx.fillStyle = 'rgba(255,255,255,0.18)'; for (let i = 0; i < 40; i++) { ctx.fillRect(x + rnd(i) * w, base + 10 + rnd(i + 90) * 80, 18, 2); }
  // vasito en el estroma
  ctx.fillStyle = '#C8102E'; ctx.beginPath(); ctx.ellipse(x + w * 0.85, base + 60, 30, 12, 0, 0, 7); ctx.fill();
  for (let r = 0; r < rows; r++) {
    const yy = base - (r + 0.5) * cellH, flat = r / (rows - 1);
    for (let i = 0; i < n; i++) {
      const xx = x + (i + 0.5) * sp + (r % 2 ? sp * 0.3 : 0) * 0;
      const cen = Math.abs(i - (n - 1) / 2) / ((n - 1) / 2);             // 0 centro, 1 borde
      const f = st.abn[r] || 0; const ab = clamp((f * 1.25 - cen * 0.9) * 3, 0, 1);
      const rx = lerp(sp * 0.46, sp * 0.52, flat), ry = lerp(cellH * 0.46, cellH * 0.28, flat);
      ctx.fillStyle = mix('#F6C5BC', '#A878E0', ab); ctx.strokeStyle = mix('#D68E84', '#5B2A9B', ab); ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.ellipse(xx, yy, rx, ry, 0, 0, 7); ctx.fill(); ctx.stroke();
      const nr = lerp(4, 10, ab) * (1 + 0.15 * Math.sin(i * 3 + r)); ctx.fillStyle = mix('#7A4A8C', '#2A0B54', ab);
      ctx.beginPath(); ctx.ellipse(xx + (ab ? (rnd(i * 7 + r) - 0.5) * 6 : 0), yy, nr, nr * (ab ? 1.1 : 0.8), 0, 0, 7); ctx.fill();
    }
  }
  // membrana basal
  ctx.strokeStyle = '#FFFFFF'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(x, base + 4); ctx.lineTo(x + w, base + 4); ctx.stroke();
  // invasión: células que cruzan la membrana basal
  if (st.inv > 0) for (let i = 0; i < 9; i++) {
    const cx = x + w * (0.3 + 0.4 * rnd(i + 5)), d = st.inv * (24 + 60 * rnd(i + 40)), cy = base + 6 + d;
    ctx.fillStyle = '#7B1FA2'; ctx.strokeStyle = '#E8CBFF'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.ellipse(cx, cy, 13, 11, 0, 0, 7); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#240044'; ctx.beginPath(); ctx.arc(cx, cy, 6, 0, 7); ctx.fill();
  }
  if (st.inv > 0) { const [gx, gy] = [x + w * 0.5, base + 4]; K.glow(gx, gy, 70 * st.inv, '255,60,50', 0.5 * st.inv); }
  text('Epitelio escamoso', x + 6, y - 22, 15, C.MUTED); text('Membrana basal', x + w - 6, base + 22, 14, '#FFFFFF', 'bold', 'right'); text('Estroma', x + 8, base + 90, 14, '#FFE0DC', 'bold');
  return { base, rows, cellH, sp, n };
}
GIN.cervix = { dur: 34, credit: creditBL, f(t) {
  K.title('Del VPH al cáncer cervicouterino', 'Zona de transformación: donde se infecta y donde se transforma', C.VIOLET);
  const pl = plate('eip', { x: 880, y: 760, w: 570, h: 469 }, 40, 130, 1.0); pl.draw(seg(t, 0, 0.7));
  const [ox, oy] = pl.P(...OS); const ez = pl.P(1157, 1035);
  label('Endocérvix (epitelio cilíndrico)', 190, 175, '#7FC8FF', ...pl.P(1160, 880), fade(t, 1, 8));
  label('Exocérvix (epitelio escamoso)', 190, 590, '#FFD17A', ...pl.P(1060, 1130), fade(t, 1.6, 8));
  label('Zona de transformación', 470, 330, C.VIOLET, ox, oy, fade(t, 2.2, 9), 15);
  // estadios
  const s1 = ease(seg(t, 9, 4)), s2 = ease(seg(t, 14, 5)), s3 = ease(seg(t, 20, 5));
  // lesión sobre el cuello
  ctx.save(); pl.clip();
  if (s1 > 0) { const rx = (28 + 50 * s2) * s1 * 1.05, ry = (13 + 24 * s2) * s1 * 1.05;
    ctx.fillStyle = `rgba(255,255,255,${0.35 + 0.35 * s2})`; ctx.beginPath(); ctx.ellipse(ez[0], ez[1], rx, ry, 0, 0, 7); ctx.fill();
    ctx.strokeStyle = `rgba(255,255,255,${0.6 * s1})`; ctx.lineWidth = 2; ctx.stroke(); }
  if (s3 > 0) { ctx.fillStyle = `rgba(150,15,40,${0.9 * s3})`; ctx.beginPath();
    for (let i = 0; i <= 24; i++) { const q = i / 24 * 6.2832, rr = (1 + 0.18 * Math.sin(q * 5 + 1)) * s3; ctx.lineTo(ez[0] + 100 * rr * Math.cos(q), ez[1] + 46 * rr * Math.sin(q)); }
    ctx.fill(); ctx.strokeStyle = '#FF8C8C'; ctx.lineWidth = 2; ctx.stroke(); }
  ctx.restore();
  // virus: llegan por la vagina al orificio y a la zona de transformación
  if (t > 3 && t < 12) for (let i = 0; i < 9; i++) { const u = clamp((t - 3.2 - i * 0.35) / 2.2, 0, 1); if (u <= 0 || u >= 1) continue;
    const sx = pl.P(1157 + (rnd(i) - 0.5) * 320, 1215)[0], sy = pl.P(0, 1215)[1];
    hex(lerp(sx, ez[0] + (rnd(i + 9) - 0.5) * 60, ease(u)), lerp(sy, ez[1] + (rnd(i + 3) - 0.5) * 20, ease(u)), 8, C.AMBER, Math.min(1, (1 - u) * 5)); }
  label('VPH 16 y 18', 450, 560, C.AMBER, ...pl.P(1100, 1150), fade(t, 3.4, 9));
  // panel de epitelio
  const abn = [0, 0, 0, 0, 0, 0];
  abn[0] = ease(seg(t, 9.6, 3)); abn[1] = ease(seg(t, 10.4, 3)) * 0.95; abn[2] = ease(seg(t, 14.2, 3)); abn[3] = ease(seg(t, 15.2, 3)); abn[4] = ease(seg(t, 16.2, 3)); abn[5] = ease(seg(t, 17, 3));
  // regresión parcial en NIE I (la mayoría se resuelve): fila 0-1 titilan hacia sano entre 12 y 13.5
  const reg = Math.sin(clamp((t - 12.2) / 1.6, 0, 1) * Math.PI) * 0.0;
  epi(690, 175, 520, { abn, inv: ease(seg(t, 21, 4.5)) });
  // virus llegando a la capa basal
  if (t > 5 && t < 10) for (let i = 0; i < 5; i++) { const u = clamp((t - 5.2 - i * 0.4) / 1.8, 0, 1); if (u <= 0) continue;
    hex(lerp(900 + i * 60, 760 + i * 95, ease(u)), lerp(150, 395, ease(u)), 9, C.AMBER, u < 1 ? 1 : 0.0); }
  if (t > 6.6 && t < 10) { for (let i = 0; i < 5; i++) hex(760 + i * 95, 395 - 0, 9, C.AMBER, seg(t, 6.6, 0.4) * (1 - seg(t, 9.4, 0.5))); }
  // etapas (rótulo de estado)
  const st = t < 9 ? ['Infección por VPH de alto riesgo', C.AMBER] : t < 14 ? ['LIEBG · NIE I', C.GREEN] : t < 20 ? ['LIEAG · NIE II-III', C.AMBER] : t < 26 ? ['Cáncer invasor', C.RED] : ['El PAP la detecta antes', C.BLUE];
  ctx.save(); ctx.translate(1060, 128); tag(st[0], 0, 0, st[1], 24); ctx.restore();
  // p53 y Rb
  const e = fade(t, 14.4, 20.5); if (e > 0) { ctx.save(); ctx.globalAlpha = e; tag('p53 degradada por E6', 800, 618, '#FFFFFF', 17); tag('Rb inactivada por E7', 1050, 618, '#FFFFFF', 17); ctx.restore(); }
  // PAP: hisopo sobre la zona de transformación
  const pp = seg(t, 26.5, 0.8) * (1 - seg(t, 33, 0.8)); if (pp > 0) { const k = ease(seg(t, 26.8, 3)), sw = Math.sin(t * 4) * 6;
    ctx.save(); pl.clip(); ctx.globalAlpha = pp; ctx.lineCap = 'round';
    const tx = ez[0] + sw, ty = ez[1] + 4, bx = lerp(ez[0] + 260, tx + 24, k), by = lerp(ez[1] + 170, ty + 14, k);
    ctx.strokeStyle = '#D9C9A0'; ctx.lineWidth = 7; ctx.beginPath(); ctx.moveTo(bx + 140, by + 90); ctx.lineTo(bx, by); ctx.stroke();
    ctx.fillStyle = '#FFFFFF'; ctx.strokeStyle = '#B9B2A0'; ctx.lineWidth = 2; ctx.beginPath(); ctx.ellipse(bx, by, 17, 11, 0.5, 0, 7); ctx.fill(); ctx.stroke(); ctx.restore(); }
  label('Hisopo en la unión escamocolumnar', 330, 640, C.BLUE, ez[0] + 10, ez[1] + 8, fade(t, 27.4, 33));
  // tarjetas
  K.card(690, 455, 520, 108, C.AMBER, 'Infección persistente', ['E6 degrada p53 y E7 inactiva Rb', 'La célula acumula errores y no los repara'], seg(t, 14.6, 0.5) * (1 - seg(t, 20.5, 0.4)), 17);
  K.card(690, 455, 520, 108, C.GREEN, 'LIEBG: casi siempre regresiona', ['Más del 80 % sola en 2 años', 'No te apures a tratarla'], seg(t, 10.2, 0.5) * (1 - seg(t, 14, 0.4)), 17);
  K.card(690, 455, 520, 108, C.RED, 'Atraviesa la membrana basal', ['Es cáncer invasor', 'Cirugía radical hasta IIA1; desde IIB, quimiorradioterapia'], seg(t, 22, 0.5) * (1 - seg(t, 26, 0.4)), 17);
  K.card(690, 455, 520, 108, C.BLUE, 'Tamizaje: PAP cada 3 años', ['Mujeres de 25 a 64 años', 'Detecta la lesión años antes del cáncer'], seg(t, 27.4, 0.5), 17);
  K.card(690, 455, 520, 108, C.AMBER, 'El virus entra por la capa basal', ['Zona de transformación: la más vulnerable'], seg(t, 4, 0.5) * (1 - seg(t, 9.2, 0.4)), 17);
  banner('La lesión de alto grado se trata con conización', C.VIOLET, seg(t, 18.5, 0.5) * (1 - seg(t, 21, 0.4)), 690, 580, 520);
} };
