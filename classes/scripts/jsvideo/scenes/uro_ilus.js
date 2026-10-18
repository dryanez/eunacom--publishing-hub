// Urología sobre ilustración real (Blausen.com staff 2014, CC BY 3.0; rótulos en inglés quitados con blausen_clean.py).
// Se carga desde uro.html (comparte L, ctx, K, label, rrect, etc.). Cada variante: { f(t), dur, credit? } en window.URO_EXTRA.
//   ?v=calculo  uro-01  ?v=hpb  uro-03  ?v=incontinencia  uro-04  ?v=orquiepididimitis  uro-06  ?v=varicocele  uro-07
//   ?v=biopsia  uro-08  ?v=prostatectomia  uro-09  ?v=nefrectomia  uro-11  ?v=vejiga  uro-12  ?v=prostatitis  uro-13
//   ?v=poliquistico  uro-14  ?v=hematuria  uro-15
window.URO_IMGS = {
  usm: '../assets/blausen/sistema_urinario_masc.png', hpb: '../assets/blausen/hpb_paneles.png', sph: '../assets/blausen/vejiga_esfinter.png',
  var: '../assets/blausen/varicocele_paneles.png', bx: '../assets/blausen/biopsia_prostata.png', pc: '../assets/blausen/cancer_prostata.png',
  rp: '../assets/blausen/prostatectomia.png', pk: '../assets/blausen/rinon_poliquistico.png', neph: '../assets/blausen/nefron.png',
  kid: '../assets/blausen/rinon_corte.png',
};
window.URO_EXTRA = {};

// ---------- motor: lámina con recorte de la imagen real ----------
function LAM(key, crop, box = [40, 128, 560, 570], pad = 0) {
  const [bx, by, bw, bh] = box, s = Math.min(bw / crop[2], bh / crop[3]);
  const w = crop[2] * s, h = crop[3] * s, x0 = bx + (bw - w) / 2, y0 = by + (bh - h) / 2;
  const o = {
    s, x: x0, y: y0, w, h, crop,
    P: (x, y) => [x0 + (x - crop[0]) * s, y0 + (y - crop[1]) * s],
    clip() { ctx.beginPath(); ctx.roundRect(x0, y0, w, h, 14); ctx.clip(); },
    draw(a = 1, k = key) {
      if (a <= 0) return; ctx.save(); ctx.globalAlpha = a; rrect(x0 - 6, y0 - 6, w + 12, h + 12, 18, '#FFFFFF');
      o.clip(); ctx.drawImage(I(k), crop[0], crop[1], crop[2], crop[3], x0, y0, w, h); ctx.restore();
    },
    // recorte real de una zona (elipse o polígono en px de imagen) agrandado alrededor de su centro
    bulge(poly, anchor, kx, ky, a = 1, tint = null, k = key) {
      if (kx === 1 && ky === 1 && !tint) return;
      const [ax, ay] = o.P(...anchor); ctx.save(); ctx.globalAlpha = a; o.clip();
      ctx.translate(ax, ay); ctx.scale(kx, ky); ctx.translate(-ax, -ay);
      ctx.beginPath(); poly.forEach((p, i) => { const [x, y] = o.P(...p); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }); ctx.closePath(); ctx.clip();
      ctx.drawImage(I(k), crop[0], crop[1], crop[2], crop[3], x0, y0, w, h);
      if (tint) { ctx.fillStyle = tint; ctx.fillRect(x0, y0, w, h); }
      ctx.restore();
    },
    tint(poly, rgba, a = 1) {
      if (a <= 0) return; ctx.save(); ctx.globalAlpha = a; o.clip(); ctx.fillStyle = rgba; ctx.beginPath();
      poly.forEach((p, i) => { const [x, y] = o.P(...p); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }); ctx.closePath(); ctx.fill(); ctx.restore();
    },
  };
  return o;
}
const ell = (cx, cy, rx, ry, n = 28) => Array.from({ length: n }, (_, i) => [cx + rx * Math.cos(i / n * 6.2832), cy + ry * Math.sin(i / n * 6.2832)]);
function ring(x, y, r, col, a, t, lw = 3.5) {
  if (a <= 0) return; ctx.save(); ctx.globalAlpha = a; ctx.strokeStyle = col; ctx.lineWidth = lw;
  const k = 0.5 + 0.5 * Math.sin(t * 5); ctx.beginPath(); ctx.arc(x, y, r + 3 * k, 0, 7); ctx.stroke();
  ctx.globalAlpha = a * 0.35 * (1 - k); ctx.beginPath(); ctx.arc(x, y, r + 14 * k + 4, 0, 7); ctx.stroke(); ctx.restore();
}
function arrow(x0, y0, x1, y1, col, a, lw = 4) {
  if (a <= 0) return; const an = Math.atan2(y1 - y0, x1 - x0); ctx.save(); ctx.globalAlpha = a; ctx.strokeStyle = col; ctx.fillStyle = col; ctx.lineWidth = lw; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1 - 9 * Math.cos(an), y1 - 9 * Math.sin(an)); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x1 - 16 * Math.cos(an - 0.45), y1 - 16 * Math.sin(an - 0.45)); ctx.lineTo(x1 - 16 * Math.cos(an + 0.45), y1 - 16 * Math.sin(an + 0.45)); ctx.fill(); ctx.restore();
}
function dots(path, t, a, col, n = 8, sp = 0.4, s0 = 0, s1 = 1, r = 3.4, rev = false) {
  if (a <= 0) return; for (let i = 0; i < n; i++) { let u = ((t * sp) + i / n) % 1; if (rev) u = 1 - u; const [x, y] = path.at(lerp(s0, s1, u));
    ctx.globalAlpha = a * Math.min(1, u * 6, (1 - u) * 6); ctx.fillStyle = col; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill(); }
  ctx.globalAlpha = 1;
}
function pathOf(lam, pts) { return poly(pts.map(p => lam.P(...p))); }
function stone(x, y, r, a) {
  if (a <= 0) return; ctx.save(); ctx.globalAlpha = a; const g = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, 1, x, y, r * 1.2);
  g.addColorStop(0, '#FFF3C4'); g.addColorStop(0.6, '#C9A24B'); g.addColorStop(1, '#7B5C1E'); ctx.fillStyle = g; ctx.strokeStyle = '#3B2A08'; ctx.lineWidth = 1.5;
  ctx.beginPath(); for (let i = 0; i < 9; i++) { const an = i / 9 * 6.2832, rr = r * (0.82 + 0.28 * Math.sin(i * 2.7 + 1)); i ? ctx.lineTo(x + rr * Math.cos(an), y + rr * Math.sin(an)) : ctx.moveTo(x + rr * Math.cos(an), y + rr * Math.sin(an)); }
  ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
}
function sNear(path, q) { let best = 0, d0 = 1e9; for (let s = 0; s <= 1; s += 0.002) { const [x, y] = path.at(s); const d = Math.hypot(x - q[0], y - q[1]); if (d < d0) { d0 = d; best = s; } } return best; }
function glowAt(x, y, r, rgb, a) { if (a <= 0) return; K.glow(x, y, r, rgb, a); }
const pulse = (t, f = 3) => 0.5 + 0.5 * Math.sin(t * f);

// ---------- uro-01: el cálculo baja por el uréter ----------
(function () {
  const lam = LAM('usm', [330, 250, 840, 950]);
  const UR = [[836, 428], [812, 440], [806, 475], [809, 525], [819, 585], [826, 645], [832, 705], [838, 745], [832, 800], [824, 850], [826, 884]];
  const KID = ell(895, 425, 85, 125);
  function calculo(t) {
    K.title('Cólico renal: el cálculo y sus tres estrechamientos', 'El dolor nace de la presión, no de que el cálculo raspe', C.AMBER);
    lam.draw(seg(t, 0, 0.7));
    const U = pathOf(lam, UR);
    // posición del cálculo: pelvis → unión pieloureteral (pausa) → cruce ilíaco (pausa) → unión vesical (pausa)
    const sA = sNear(U, lam.P(812, 446)), sB = sNear(U, lam.P(838, 745)), sC = sNear(U, lam.P(826, 884));
    const stops = [[0, 0.0], [3.6, 0.0], [6.2, sA], [9.2, sA], [12.2, sB], [15.2, sB], [17.6, sC]];
    let s = 0; for (let i = 1; i < stops.length; i++) if (t >= stops[i - 1][0]) s = lerp(stops[i - 1][1], stops[i][1], ease(seg(t, stops[i - 1][0], stops[i][0] - stops[i - 1][0])));
    if (t < 3.6) s = 0;
    const startP = lam.P(872, 438), [sx, sy] = t < 3.6 ? [lerp(startP[0] + 20, startP[0], ease(seg(t, 1, 1.6))), startP[1]] : U.at(s);
    const obstr = ease(seg(t, 6.2, 1.6)) * (1 - ease(seg(t, 21, 1.5)));
    lam.bulge(KID, [900, 425], 1 + 0.06 * obstr, 1 + 0.07 * obstr, 1, obstr > 0 ? `rgba(255,70,60,${0.1 * obstr * (0.6 + 0.4 * pulse(t))})` : null);
    // ureter distendido por encima del cálculo
    stone(sx, sy, 10, seg(t, 1, 0.8));
    // estrechamientos
    const nar = [[[812, 446], '1. Unión pieloureteral', 6.2, 10.4, [70, 175]], [[838, 745], '2. Cruce con los vasos ilíacos', 12.0, 15.6, [90, 70]], [[826, 880], '3. Unión ureterovesical', 17.4, 22.5, [60, 30]]];
    nar.forEach(([p, txt, a, b]) => { const [x, y] = lam.P(...p); ring(x, y, 13, C.AMBER, fade(t, a, b), t); });
    label('1. Unión pieloureteral', 185, 226, C.AMBER, ...lam.P(812, 446), fade(t, 6.2, 10.4));
    label('2. Cruce con los vasos ilíacos', 200, 440, C.AMBER, ...lam.P(838, 745), fade(t, 12.0, 15.6));
    label('3. Unión ureterovesical', 175, 585, C.AMBER, ...lam.P(826, 884), fade(t, 17.4, 22.5));
    label('Cálculo en la pelvis renal', 185, 186, '#F7C531', ...lam.P(872, 438), fade(t, 1.5, 5.5));
    // dolor: se desplaza al flanco, fosa ilíaca y genitales
    const kP = lam.P(900, 480); glowAt(kP[0], kP[1], 70, '255,60,50', 0.55 * obstr * (0.6 + 0.4 * pulse(t, 5)));
    const f2 = fade(t, 12.2, 15.6, 0.4), p2 = lam.P(838, 745); glowAt(p2[0], p2[1], 60, '255,60,50', 0.5 * f2 * (0.6 + 0.4 * pulse(t, 5)));
    const f3 = fade(t, 17.6, 22.5, 0.4), p3 = lam.P(790, 1060); glowAt(p3[0], p3[1], 55, '255,60,50', 0.5 * f3 * (0.6 + 0.4 * pulse(t, 5)));
    label('Dolor al flanco', 360, 150, C.RED, ...lam.P(930, 520), fade(t, 7.2, 11));
    label('Irradia a la fosa ilíaca', 400, 450, C.RED, ...lam.P(850, 760), fade(t, 13.0, 16.5));
    label('Irradia a genitales; disuria', 400, 640, C.RED, ...p3, fade(t, 18.0, 22.5));
    // paneles
    K.card(620, 140, 620, 128, C.AMBER, 'El cálculo se enclava', ['En uno de los tres estrechamientos del uréter', 'La orina queda atrás y sube la presión'], seg(t, 1.8, 0.5), 17);
    K.card(620, 284, 620, 128, C.RED, 'Por qué duele', ['Se distiende la pelvis renal y la cápsula', 'Las prostaglandinas aumentan el flujo y el espasmo'], seg(t, 6.8, 0.5), 17);
    K.card(620, 428, 620, 150, C.BLUE, 'El tamaño decide la conducta', ['Menos de 5 mm: sale solo (80 a 90 %)', '5 a 10 mm: tamsulosina por 28 días', 'Más de 10 mm: urología (LEOC, ureteroscopía)'], seg(t, 13.2, 0.5), 17);
    K.banner(620, 598, 620, 'Fiebre, monorreno o dolor refractario: descomprimir', C.RED, seg(t, 19.5, 0.5));
  }
  window.URO_EXTRA.calculo = { f: calculo, dur: 24 };
})();

const cardsAt = (t, L2, size = 17) => L2.forEach(c => K.card(620, c[1], 620, c[2], c[3], c[4], c[5], seg(t, c[0], 0.5), size));
const dropsAt = (x, y, t, a, n = 3, col = '#F7C531', sp = 0.9) => { for (let i = 0; i < n; i++) { const u = ((t * sp) + i / n) % 1; drop(x + 2 * Math.sin(i), y + 36 * u, a * (1 - u * u), col); } };

// ---------- uro-03: hiperplasia prostática, la uretra se estrecha ----------
(function () {
  const HB = [40, 150, 560, 350], lN = LAM('hpb', [10, 30, 545, 345], HB), lB = LAM('hpb', [10, 562, 545, 345], HB);
  const UN = [[262, 98], [250, 160], [238, 230], [228, 300], [222, 372]], UB = [[272, 690], [262, 740], [248, 800], [232, 850], [218, 900]];
  function hpb(t) {
    K.title('Hiperplasia prostática: la uretra se estrecha', 'El adenoma crece en la zona de transición y obstruye la salida', C.AMBER);
    const sw = ease(seg(t, 6.5, 2.2));
    lN.draw(seg(t, 0, 0.7) * (1 - sw)); lB.draw(sw, 'hpb');
    const pN = pathOf(lN, UN), pB = pathOf(lB, UB);
    dots(pN, t, (1 - sw) * seg(t, 1.2, 0.5), '#F7C531', 10, 0.5, 0, 1, 4.2);
    dots(pB, t, sw, '#F7C531', 3, 0.22, 0, 1, 2.6);
    label('Próstata normal', 110, 250, C.GREEN, ...lN.P(150, 190), fade(t, 1.4, 6.6));
    label('Uretra permeable', 470, 400, C.GREEN, ...lN.P(240, 230), fade(t, 2.6, 6.6));
    label('Adenoma: zona de transición', 130, 250, C.AMBER, ...lB.P(130, 780), fade(t, 9, 22));
    // uretra estrechada: flechas hacia el centro
    const nA = fade(t, 9.5, 22), [ux, uy] = lB.P(244, 790);
    if (nA > 0) { arrow(ux - 46, uy, ux - 8, uy, C.RED, nA * (0.6 + 0.4 * pulse(t, 5))); arrow(ux + 46, uy, ux + 8, uy, C.RED, nA * (0.6 + 0.4 * pulse(t, 5))); }
    label('Uretra estrechada', 520, 330, C.RED, ux + 10, uy + 6, fade(t, 10, 22));
    label('Detrusor hipertrofiado: vejiga de lucha', 440, 190, C.BLUE, ...lB.P(430, 655), fade(t, 12, 22));
    // Qmax
    const q = 22 - 14 * sw;
    ctx.save(); ctx.globalAlpha = seg(t, 1.4, 0.5); rrect(40, 540, 560, 120, 14, '#161B22'); K.bar(60, 575, 520, 'Flujo máximo (Qmax)', q, 30, 'mL/s', q > 15 ? C.GREEN : q > 10 ? C.AMBER : C.RED, [[10, '10'], [15, '15']]); ctx.restore();
    cardsAt(t, [
      [1.6, 140, 128, C.AMBER, 'Dos componentes', ['Estático: la masa de la glándula, se reduce con finasteride', 'Dinámico: el tono alfa uno, se relaja con tamsulosina']],
      [10.5, 284, 128, C.BLUE, 'Síntomas', ['Vaciado: chorro débil, goteo, esfuerzo', 'Llenado: polaquiuria, nicturia, urgencia']],
      [16, 428, 128, C.RED, 'Si progresa', ['Retención aguda, ITU, litiasis vesical', 'Hidronefrosis e insuficiencia renal']]]);
    K.banner(620, 598, 620, 'Qmax bajo 10 mL/s sugiere obstrucción', C.AMBER, seg(t, 19.5, 0.5));
  }
  window.URO_EXTRA.hpb = { f: hpb, dur: 24 };
})();

// ---------- uro-04: incontinencia (esfuerzo, urgencia, rebalse) ----------
(function () {
  const lam = LAM('sph', [60, 60, 780, 1210], [40, 128, 560, 520]);
  const UR = [[505, 700], [505, 800], [505, 950], [505, 1100], [505, 1225]];
  const LUMEN = [[200, 370], [840, 370], [830, 470], [790, 560], [700, 640], [600, 680], [505, 692], [400, 680], [300, 630], [240, 560], [205, 460]];
  const BLAD = ell(500, 380, 410, 330);
  function incont(t) {
    K.title('Incontinencia urinaria: tres mecanismos', 'Cuándo se escapa la orina decide el tipo', C.BLUE);
    lam.draw(seg(t, 0, 0.7));
    const U = pathOf(lam, UR), [mx, my] = lam.P(505, 1225);
    const E = fade(t, 1.2, 8.2), Ur = fade(t, 8.6, 15.2), R = fade(t, 15.6, 22.6);
    // esfuerzo: la presión abdominal supera al esfínter débil
    if (E > 0) { [330, 500, 670].forEach((x, i) => { const [ax, ay] = lam.P(x, 120 + 24 * Math.sin(t * 6 + i)); arrow(ax, ay, ...lam.P(x, 300 + 24 * Math.sin(t * 6 + i)), C.RED, E * 0.9); });
      label('Tos, risa o salto: sube la presión abdominal', 440, 160, C.RED, ...lam.P(500, 220), E, 14);
      label('Esfínter débil', 150, 560, C.AMBER, ...lam.P(430, 880), E); dots(U, t, E, '#F7C531', 6, 0.7, 0.05, 1, 3.4); dropsAt(mx, my - 6, t, E, 4); }
    // urgencia: el detrusor se contrae solo
    if (Ur > 0) { const k = 1 - 0.035 * Math.max(0, Math.sin(t * 5)) * Ur; lam.bulge(BLAD, [500, 380], k, k, Ur, `rgba(79,163,255,${0.13 * Ur})`);
      label('Detrusor hiperactivo: se contrae sin permiso', 440, 160, C.BLUE, ...lam.P(250, 330), Ur, 14);
      label('Deseo imperioso', 150, 560, C.BLUE, ...lam.P(505, 760), Ur); dots(U, t, Ur, '#F7C531', 7, 0.9, 0.05, 1, 3.6); dropsAt(mx, my - 6, t, Ur * seg(t, 11, 1), 5, '#F7C531', 1.2); }
    // rebalse: vejiga llena y goteo constante
    if (R > 0) { lam.tint(LUMEN, 'rgba(240,170,20,0.34)', R); lam.bulge(BLAD, [500, 380], 1.05, 1.05, R * (0.7 + 0.3 * pulse(t, 2)), 'rgba(255,200,40,0.10)');
      label('Vejiga llena que no se vacía', 440, 160, C.RED, ...lam.P(500, 480), R, 14);
      label('Residuo mayor de 200 mL', 150, 560, C.RED, ...lam.P(300, 560), R); dropsAt(mx, my - 6, t, R, 2, '#F7C531', 0.5); }
    cardsAt(t, [
      [1.2, 140, 128, C.AMBER, 'Esfuerzo', ['Escape al toser, sin deseo previo', 'Kegel; cinta suburetral TOT o TVT si fallan']],
      [8.6, 284, 128, C.BLUE, 'Urgencia', ['Deseo que no da tiempo, nicturia', 'Antimuscarínico o mirabegrón (mejor en el mayor)']],
      [15.6, 428, 128, C.RED, 'Rebalse', ['Goteo continuo, sin fuerza, residuo alto', 'Nunca anticolinérgicos: precipitan retención']]]);
    K.banner(620, 598, 620, 'Pregunta clave: ¿cuándo se escapa y cuánto queda?', C.GREEN, seg(t, 20, 0.5));
  }
  window.URO_EXTRA.incontinencia = { f: incont, dur: 25 };
})();

// ---------- uro-06: orquiepididimitis, la infección asciende ----------
(function () {
  const lam = LAM('var', [0, 0, 560, 630]);
  const V = [[420, 335], [440, 302], [462, 252], [482, 200], [466, 150], [420, 110], [330, 98], [250, 110], [205, 160], [200, 222], [210, 290], [225, 360], [242, 412]];
  const EPI = ell(240, 450, 55, 70);
  function orquiepi(t) {
    K.title('Orquiepididimitis: la infección asciende', 'Uretra, próstata, conducto deferente y epidídimo', C.VIOLET);
    lam.draw(seg(t, 0, 0.7));
    const U = pathOf(lam, V);
    // bacterias que suben por la vía seminal
    const up = seg(t, 1.6, 0.4) * (1 - seg(t, 12.5, 1)); if (up > 0) { ctx.save(); ctx.globalAlpha = 0.35 * up; U.stroke(ctx, 0, 1, 7, '#7BE36B'); ctx.restore(); } dots(U, t, up, '#B6FF9E', 9, 0.16, 0, 1, 6);
    label('Uretra', 120, 560, C.VIOLET, ...lam.P(420, 335), fade(t, 2, 6));
    label('Próstata', 480, 380, C.VIOLET, ...lam.P(440, 285), fade(t, 3.2, 7));
    label('Conducto deferente', 380, 150, C.VIOLET, ...lam.P(330, 98), fade(t, 5.5, 10));
    // epidídimo inflamado
    const inf = ease(seg(t, 8, 2.5)); lam.bulge(EPI, [240, 450], 1 + 0.05 * inf, 1 + 0.05 * inf, 1, inf > 0 ? `rgba(255,50,50,${0.25 * inf * (0.7 + 0.3 * pulse(t, 4))})` : null);
    const [ex, ey] = lam.P(240, 450); ring(ex, ey, 34, C.RED, inf, t);
    label('Epidídimo inflamado: rojo, caliente, doloroso', 380, 600, C.RED, ex + 28, ey + 10, fade(t, 9, 22));
    // Prehn: al elevar el testículo, alivia
    const pa = fade(t, 15, 22); if (pa > 0) { const [px, py] = lam.P(200, 585); arrow(px, py + 34 * (0.6 + 0.4 * pulse(t, 4)), px, py - 24, C.GREEN, pa, 5); label('Prehn positivo: elevarlo alivia', 150, 664, C.GREEN, px, py + 6, pa, 14); }
    cardsAt(t, [
      [2, 140, 128, C.VIOLET, 'Menor de 35 años', ['Transmisión sexual: Chlamydia y gonococo', 'Ceftriaxona IM más doxiciclina']],
      [6, 284, 128, C.BLUE, 'Mayor de 35 años', ['Enterobacterias, E. coli (HPB, sondeos)', 'Ciprofloxacino o cotrimoxazol']],
      [10, 428, 128, C.AMBER, 'Cómo se reconoce', ['Dolor de 1 a 3 días, Prehn positivo', 'Reflejo cremastérico conservado']]]);
    K.banner(620, 598, 620, 'Sin mejoría a las 72 h: ecografía por absceso', C.RED, seg(t, 18.5, 0.5));
  }
  window.URO_EXTRA.orquiepididimitis = { f: orquiepi, dur: 24 };
})();

// ---------- uro-07: varicocele ----------
(function () {
  const lN = LAM('var', [0, 0, 560, 630]), lV = LAM('var', [598, 0, 560, 630]);
  const NP = [[222, 290], [205, 340], [215, 380], [240, 415]], VP = [[820, 290], [803, 340], [815, 380], [840, 415]];
  const PLEX = ell(826, 355, 60, 75);
  function varicocele(t) {
    K.title('Varicocele: el plexo pampiniforme dilatado', 'La «bolsa de gusanos» sobre el testículo', C.BLUE);
    const sw = ease(seg(t, 6.5, 2.2));
    lN.draw(seg(t, 0, 0.7) * (1 - sw)); lV.draw(sw, 'var');
    dots(pathOf(lN, NP), t, (1 - sw) * seg(t, 1.2, 0.5), '#3E7BFF', 7, 0.45, 0, 1, 3.4, true);
    // reflujo: la sangre se estanca y va y viene
    const rf = sw * (1 - seg(t, 17.4, 0.8)); if (rf > 0) { const p = pathOf(lV, VP); const u = 0.5 + 0.5 * Math.sin(t * 2.2); for (let i = 0; i < 5; i++) { const [x, y] = p.at(clamp(u * 0.5 + i / 8, 0, 1)); ctx.globalAlpha = rf * 0.9; ctx.fillStyle = '#6CA0FF'; ctx.beginPath(); ctx.arc(x, y, 3.4, 0, 7); ctx.fill(); } ctx.globalAlpha = 1; }
    // Valsalva: las venas se llenan; acostado: se vacían
    const vals = fade(t, 13, 17, 0.4), lie = ease(seg(t, 17.4, 1.2)) * (1 - seg(t, 23, 0.5));
    const k = 1 + 0.06 * vals * (0.6 + 0.4 * Math.sin(t * 9)) - 0.06 * lie;
    lV.bulge(PLEX, [826, 355], k, k, sw, null);
    label('Plexo pampiniforme normal', 400, 190, C.GREEN, ...lN.P(215, 345), fade(t, 1.4, 6.6));
    label('Venas dilatadas y tortuosas', 400, 190, C.BLUE, ...lV.P(826, 350), fade(t, 9.5, 23));
    label('Valsalva: aumenta', 150, 520, C.AMBER, ...lV.P(790, 390), vals);
    label('Acostado: se colapsa', 150, 520, C.GREEN, ...lV.P(790, 390), lie * (1 - seg(t, 23, 0.5)));
    cardsAt(t, [
      [1.6, 140, 100, C.GREEN, 'Plexo pampiniforme', ['Drena el testículo hacia la vena gonadal']],
      [9.5, 256, 150, C.BLUE, 'Varicocele', ['El 90 % es izquierdo; no transilumina', 'Causa tratable más frecuente de infertilidad']],
      [18, 422, 150, C.RED, 'Bandera roja', ['Derecho, de inicio súbito o que no se colapsa acostado', 'Descartar tumor renal o retroperitoneal']]]);
    K.banner(620, 598, 620, 'Operar: infertilidad, atrofia o dolor', C.AMBER, seg(t, 21, 0.5));
  }
  window.URO_EXTRA.varicocele = { f: varicocele, dur: 26 };
})();

// ---------- uro-08: biopsia transrectal, 10 a 12 cilindros ----------
(function () {
  const lam = LAM('bx', [10, 10, 730, 730], [40, 128, 560, 560]);
  const ORIG = [472, 424];
  const TARGETS = [[205, 290], [225, 345], [250, 400], [215, 320], [240, 375], [262, 300], [345, 275], [372, 320], [400, 365], [355, 330], [388, 410], [420, 300]];
  const PZ = [[330, 235], [400, 228], [445, 290], [440, 385], [405, 438], [340, 442], [328, 360]];
  function biopsia(t) {
    K.title('Biopsia prostática transrectal', 'Guiada por ecografía: 10 a 12 cilindros, de los dos lóbulos', C.RED);
    lam.draw(seg(t, 0, 0.7));
    const pz = fade(t, 1.4, 25, 0.6); lam.tint(PZ, `rgba(255,40,60,${0.18 + 0.1 * pulse(t, 3)})`, pz);
    label('Zona periférica: aquí nace el cáncer', 190, 160, C.RED, ...lam.P(390, 330), fade(t, 1.6, 6.5));
    label('Sonda ecográfica transrectal', 470, 640, C.VIOLET, ...lam.P(520, 520), fade(t, 3, 9));
    // cada cilindro: aguja que sale de la sonda, toma la muestra y se retira
    const T0 = 5, DT = 1.05; let n = 0;
    TARGETS.forEach(([x, y], i) => {
      const a = T0 + i * DT, out = ease(seg(t, a, 0.4)), back = ease(seg(t, a + 0.55, 0.4));
      const [ox, oy] = lam.P(...ORIG), [tx, ty] = lam.P(x, y), e = out * (1 - back);
      if (e > 0.01) { ctx.save(); ctx.strokeStyle = '#8E9AA6'; ctx.lineWidth = 3; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(lerp(ox, tx, e), lerp(oy, ty, e)); ctx.stroke(); ctx.restore(); }
      if (t > a + 0.4) { n++; const g = seg(t, a + 0.4, 0.3); ctx.save(); ctx.globalAlpha = g * 0.95; ctx.fillStyle = '#FFE08A'; ctx.strokeStyle = '#6B3B00'; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.roundRect(tx - 11, ty - 3, 22, 6, 3); ctx.fill(); ctx.stroke(); ctx.restore(); }
    });
    n = Math.min(12, n);
    ctx.save(); ctx.globalAlpha = seg(t, 4.5, 0.5); rrect(620, 450, 620, 90, 14, '#161B22'); K.bar(640, 485, 580, 'Cilindros tomados', n, 12, '', n >= 10 ? C.GREEN : C.AMBER, [[10, '10']]); ctx.restore();
    cardsAt(t, [
      [1.6, 140, 128, C.RED, 'Cuándo se biopsia', ['Nódulo duro o pétreo, aunque el APE sea normal', 'APE sobre 4 que persiste a las 4 a 6 semanas']],
      [4.5, 290, 138, C.BLUE, 'Cómo se hace', ['Ecografía transrectal, o fusión con resonancia', 'Profilaxis antibiótica y muestreo de ambos lóbulos']]]);
    K.banner(620, 570, 620, 'El Gleason del cilindro define el riesgo', C.AMBER, seg(t, 18.5, 0.5));
    K.banner(620, 630, 620, 'Es el único método confirmatorio', C.GREEN, seg(t, 21, 0.5));
  }
  window.URO_EXTRA.biopsia = { f: biopsia, dur: 25 };
})();

// ---------- uro-09: prostatectomía radical y tratamiento según riesgo ----------
(function () {
  const lam = LAM('rp', [0, 100, 519, 720], [40, 128, 560, 570]);
  const R1 = [[21, 121], [477, 121], [477, 454], [21, 454]], R2 = [[21, 490], [477, 490], [477, 815], [21, 815]];
  function rect(R, col, a, t) { if (a <= 0) return; const p = R.map(q => lam.P(...q)); ctx.save(); ctx.globalAlpha = a; ctx.strokeStyle = col; ctx.lineWidth = 4 + 1.5 * pulse(t, 5); ctx.beginPath(); p.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.closePath(); ctx.stroke(); ctx.restore(); }
  function prostatectomia(t) {
    K.title('Cáncer de próstata localizado: el tratamiento según el riesgo', 'Prostatectomía radical: se extirpa y se reconstruye la vía', C.BLUE);
    lam.draw(seg(t, 0, 0.7));
    rect(R1, C.RED, fade(t, 5, 11), t); rect(R2, C.GREEN, fade(t, 11, 17), t);
    label('Se extirpa la próstata', 150, 232, C.RED, ...lam.P(140, 205), fade(t, 5.5, 11));
    label('Vejiga y uretra se unen', 150, 470, C.GREEN, ...lam.P(330, 650), fade(t, 11.5, 17));
    label('Secuelas: disfunción eréctil e incontinencia', 200, 650, C.AMBER, ...lam.P(250, 700), fade(t, 17.5, 25));
    cardsAt(t, [
      [1.4, 140, 100, C.GREEN, 'Riesgo bajo', ['Vigilancia activa: Gleason 6, APE bajo 10']],
      [4, 256, 100, C.AMBER, 'Riesgo intermedio', ['Cirugía, o radioterapia con deprivación corta']],
      [7, 372, 100, C.RED, 'Riesgo alto', ['Radioterapia con deprivación androgénica de 2 a 3 años']],
      [10, 488, 100, C.VIOLET, 'Metastásico', ['Deprivación androgénica (bicalutamida antes del agonista)']]], 16);
    K.banner(620, 608, 620, 'Cirugía y radioterapia: igual sobrevida en el localizado', C.BLUE, seg(t, 19, 0.5));
  }
  window.URO_EXTRA.prostatectomia = { f: prostatectomia, dur: 25 };
})();

// ---------- uro-11: tumor renal, nefrectomía parcial o radical ----------
(function () {
  const lam = LAM('kid', [20, 60, 600, 1000], [40, 128, 560, 570]);
  const KIDN = [[60, 130], [150, 80], [260, 95], [330, 140], [400, 270], [470, 450], [530, 640], [520, 820], [440, 960], [330, 1030], [200, 1000], [120, 930], [100, 800], [60, 600], [30, 420], [35, 250]];
  const TC = [255, 135];
  function tumor(x, y, r, a, t) {
    if (a <= 0 || r <= 1) return; ctx.save(); ctx.globalAlpha = a; ctx.beginPath();
    for (let i = 0; i <= 30; i++) { const an = i / 30 * 6.2832, rr = r * (1 + 0.1 * Math.sin(an * 5 + 1) + 0.05 * Math.sin(an * 9)); i ? ctx.lineTo(x + rr * Math.cos(an), y + rr * Math.sin(an)) : ctx.moveTo(x + rr * Math.cos(an), y + rr * Math.sin(an)); }
    ctx.closePath(); const g = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, 2, x, y, r * 1.1); g.addColorStop(0, '#FFE9A8'); g.addColorStop(1, '#D9A441'); ctx.fillStyle = g; ctx.fill(); ctx.strokeStyle = '#6E4A10'; ctx.lineWidth = 2.5; ctx.stroke(); ctx.restore();
  }
  function nefrectomia(t) {
    K.title('Carcinoma renal: nefrectomía parcial o radical', 'Una masa sólida que realza se presume cáncer', C.AMBER);
    const rad = seg(t, 14.5, 1.2);                       // radical: sale todo el riñón
    lam.draw(seg(t, 0, 0.7) * (1 - 0.8 * ease(rad)));
    const [tx, ty] = lam.P(...TC), r0 = 22 * lam.s * 3.1;
    const grow = ease(seg(t, 1.2, 3)), rem = ease(seg(t, 9.5, 1.5)) * (1 - rad);
    tumor(tx, ty, r0 * grow * (1 - 0.0), (1 - rem) * (1 - 0.8 * ease(rad)), t);
    ring(tx, ty, r0 * 1.4, C.RED, fade(t, 4.5, 8.5), t);
    label('Masa sólida que realza con contraste', 190, 150, C.RED, tx, ty, fade(t, 4, 8.5));
    // parcial: margen sano y resección
    const pm = fade(t, 7.5, 14.5); if (pm > 0) { ctx.save(); ctx.globalAlpha = pm; ctx.strokeStyle = C.GREEN; ctx.lineWidth = 3.5; ctx.setLineDash([10, 7]); ctx.beginPath(); ctx.arc(tx, ty, r0 * 1.45, 0, 7); ctx.stroke(); ctx.restore(); }
    label('Parcial: tumor T1 con margen sano', 200, 150, C.GREEN, tx - r0 * 0.7, ty - r0 * 0.7, fade(t, 8, 14.5));
    // el riñón preservado
    const pres = fade(t, 11, 14.8); if (pres > 0) { ctx.save(); ctx.globalAlpha = 0.5 * pres; ctx.strokeStyle = C.GREEN; ctx.lineWidth = 3; ctx.beginPath(); KIDN.forEach((p, i) => { const [x, y] = lam.P(...p); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }); ctx.closePath(); ctx.stroke(); ctx.restore(); }
    // radical: riñón en bloque con la fascia de Gerota
    const ra = fade(t, 15, 25); if (ra > 0) { ctx.save(); ctx.globalAlpha = ra; ctx.strokeStyle = C.RED; ctx.lineWidth = 4; ctx.setLineDash([12, 8]); ctx.beginPath();
      KIDN.forEach((p, i) => { const [x, y] = lam.P(p[0] + (p[0] < 270 ? -22 : 22), p[1] + (p[1] < 500 ? -18 : 18)); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }); ctx.closePath(); ctx.stroke(); ctx.restore(); }
    label('Radical: riñón y fascia de Gerota', 250, 650, C.RED, ...lam.P(450, 800), fade(t, 15.5, 25));
    cardsAt(t, [
      [1.6, 140, 128, C.AMBER, 'Masa renal sólida', ['TAC trifásico: realce sobre 15 a 20 UH = se presume cáncer', 'Sin biopsia previa si es resecable']],
      [8, 284, 128, C.GREEN, 'Nefrectomía parcial', ['Tumor T1, hasta 7 cm, preserva el riñón', 'Misma sobrevida oncológica que la radical']],
      [15, 428, 128, C.RED, 'Nefrectomía radical', ['Más de 7 cm, central o que compromete el hilio', 'En bloque, con la fascia de Gerota']]]);
    K.banner(620, 598, 620, 'Metastásico: antiangiogénicos o inmunoterapia', C.VIOLET, seg(t, 20, 0.5));
  }
  window.URO_EXTRA.nefrectomia = { f: nefrectomia, dur: 25 };
})();

// ---------- uro-12: cáncer de vejiga, de la mucosa al músculo ----------
(function () {
  const lam = LAM('sph', [60, 60, 820, 720], [40, 128, 560, 520]);
  function frond(x, y, len, ang, a, w) {
    ctx.save(); ctx.globalAlpha = a; ctx.strokeStyle = '#E0506E'; ctx.fillStyle = '#F27B93'; ctx.lineWidth = w; ctx.lineCap = 'round';
    const ex = x + len * Math.cos(ang), ey = y + len * Math.sin(ang); ctx.beginPath(); ctx.moveTo(x, y); ctx.quadraticCurveTo((x + ex) / 2, (y + ey) / 2 + 6, ex, ey); ctx.stroke();
    ctx.lineWidth = w * 0.6; [-0.6, 0.6].forEach(d => { ctx.beginPath(); ctx.moveTo(x + len * 0.55 * Math.cos(ang), y + len * 0.55 * Math.sin(ang)); ctx.lineTo(ex + 0.4 * len * Math.cos(ang + d) * 0.6, ey + 0.4 * len * Math.sin(ang + d) * 0.6); ctx.stroke(); });
    ctx.beginPath(); ctx.arc(ex, ey, w * 0.9, 0, 7); ctx.fill(); ctx.restore();
  }
  function vejiga(t) {
    K.title('Cáncer de vejiga: de la mucosa al músculo', 'La profundidad de invasión decide el tratamiento', C.RED);
    lam.draw(seg(t, 0, 0.7));
    const s1 = ease(seg(t, 1.5, 3));                   // tumor papilar Ta
    const s2 = ease(seg(t, 8, 2)), s3 = ease(seg(t, 13, 2)), s4 = ease(seg(t, 18, 2));   // T1, T2, T3
    // invasión de la pared (a la izquierda; mucosa en x≈200)
    const wall = (xa, xb, a, rgba) => { if (a <= 0) return; lam.tint([[xa, 440], [xb, 440], [xb, 520], [xa, 520]], rgba, a); };
    wall(184, 204, s2, 'rgba(255,60,90,0.42)');               // lámina propia
    wall(150, 184, s3, 'rgba(210,20,60,0.45)');                // detrusor
    wall(104, 150, s4, 'rgba(170,10,40,0.45)');                // grasa perivesical
    if (s1 > 0) for (let i = 0; i < 7; i++) { const [x, y] = lam.P(204, 440 + i * 12); frond(x, y, (22 + 14 * Math.sin(i * 2.1 + 1)) * lam.s * 1.6 * s1, -0.25 + 0.1 * i + 0.05 * Math.sin(t * 2 + i), s1, 5 * lam.s * 1.6); }
    label('Tumor papilar, vegetante: frondas', 450, 160, C.AMBER, ...lam.P(232, 465), fade(t, 4, 12));
    const [p1x, p1y] = lam.P(194, 480);
    label('T1: lámina propia', 160, 600, C.AMBER, p1x, p1y, fade(t, 9, 13.5));
    label('T2: invade el detrusor', 160, 600, C.RED, ...lam.P(168, 480), fade(t, 14, 18.5));
    label('T3: grasa perivesical', 160, 600, C.RED, ...lam.P(125, 480), fade(t, 19, 26));
    // pastillas de estadio
    [['Ta', 1.6, C.GREEN], ['T1', 8, C.GREEN], ['T2', 13, C.RED], ['T3', 18, C.RED]].forEach(([s, a, col], i) => { const k = seg(t, a, 0.4); if (k > 0) { ctx.globalAlpha = k; tag(s, 670 + i * 64, 112, col, 18); ctx.globalAlpha = 1; } });
    cardsAt(t, [
      [1.6, 140, 128, C.GREEN, 'No músculo invasivo: Ta, T1', ['Resección transuretral completa, con músculo en la muestra', 'BCG intravesical en la inducción semanal']],
      [13, 284, 128, C.RED, 'Músculo invasivo: T2 o más', ['Cisplatino antes de la cirugía', 'Cistectomía radical con linfadenectomía (GES)']],
      [6, 428, 128, C.BLUE, 'Cómo se llega', ['Hematuria macroscópica indolora en fumador', 'Cistoscopía confirma; uro-TAC estudia la vía superior']]]);
    K.banner(620, 598, 620, 'El patólogo debe certificar músculo en la muestra', C.AMBER, seg(t, 21, 0.5));
  }
  window.URO_EXTRA.vejiga = { f: vejiga, dur: 26 };
})();

// ---------- uro-13: prostatitis aguda ----------
(function () {
  const lam = LAM('pel', [0, 175, 960, 1065], [40, 128, 560, 570]);
  const PR = ell(712, 665, 93, 86);
  function prostatitis(t) {
    K.title('Prostatitis aguda: bacterias, fiebre y un tacto con cuidado', 'La barrera hematoprostática limita los antibióticos', C.RED);
    lam.draw(seg(t, 0, 0.7));
    const U = pathOf(lam, URE_IMG), sN = sNear(U, lam.P(...NECK)), sP = sNear(U, lam.P(715, 735));
    const asc = seg(t, 1.2, 0.4) * (1 - seg(t, 9, 1)); if (asc > 0) { ctx.save(); ctx.globalAlpha = 0.3 * asc; U.stroke(ctx, 0, sP, 8, '#7BE36B'); ctx.restore(); dots(U, t, asc, '#B6FF9E', 9, 0.18, 0, sP, 5.5); }
    label('Bacterias ascienden por la uretra', 200, 640, '#7BE36B', ...U.at(0.12), fade(t, 1.6, 6.5));
    const inf = ease(seg(t, 6, 2)); const k = 1 + 0.12 * inf * (0.75 + 0.25 * pulse(t, 4));
    lam.bulge(PR, [712, 665], k, k, 1, inf > 0 ? `rgba(255,40,40,${0.34 * inf})` : null);
    const [px, py] = lam.P(712, 665); ring(px, py, 60, C.RED, inf * (1 - seg(t, 22, 1)), t);
    label('Próstata caliente, turgente, dolorosa', 440, 230, C.RED, px + 40, py - 30, fade(t, 7, 22));
    // masaje prohibido
    const ms = fade(t, 11, 17.5); if (ms > 0) { const [ax, ay] = lam.P(930, 720), [bx, by] = lam.P(815, 705); arrow(ax, ay, bx, by, C.AMBER, ms * (0.65 + 0.35 * pulse(t, 5)), 7);
      ctx.save(); ctx.globalAlpha = ms; ctx.strokeStyle = C.RED; ctx.lineWidth = 7; ctx.beginPath(); ctx.arc(bx - 8, by, 30, 0, 7); ctx.moveTo(bx - 28, by - 20); ctx.lineTo(bx + 12, by + 20); ctx.stroke(); ctx.restore();
      label('Masaje prostático: contraindicado', 300, 640, C.RED, bx - 8, by + 30, ms); }
    // antibiótico que penetra
    const ab = seg(t, 17.8, 0.4), ap = ease(seg(t, 18, 3));
    for (let i = 0; i < 3; i++) { const u = clamp(ap - i * 0.12, 0, 1); K.pill(lerp(lam.P(930, 760)[0], px, u), lerp(lam.P(930, 760)[1], py, u), '#FF8A3D', '#FFFFFF', ab * (1 - 0.7 * seg(u, 0.9, 0.1)), -0.5); }
    label('Ciprofloxacino o cotrimoxazol: liposolubles, penetran', 300, 150, C.GREEN, px, py - 6, fade(t, 19.5, 26));
    cardsAt(t, [
      [1.6, 140, 128, C.RED, 'Prostatitis aguda', ['Fiebre alta, dolor perineal y disuria', 'Próstata caliente, turgente y dolorosa al tacto']],
      [11, 284, 128, C.AMBER, 'Nunca masaje prostático', ['Riesgo de bacteriemia y shock', 'Si hay retención: cistostomía, no sonda uretral']],
      [18, 428, 128, C.GREEN, 'Antibiótico que llegue', ['Ciprofloxacino o cotrimoxazol por 3 a 4 semanas', 'Con sepsis: hospitalizar, ceftriaxona EV']]]);
    K.banner(620, 598, 620, 'La mayoría de los betalactámicos no cruzan la barrera', C.VIOLET, seg(t, 22, 0.5));
  }
  window.URO_EXTRA.prostatitis = { f: prostatitis, dur: 27 };
})();

// ---------- uro-14: poliquistosis renal ----------
(function () {
  const A = LAM('pk', [100, 0, 460, 660], [40, 170, 270, 430]), B = LAM('pk', [930, 0, 490, 660], [330, 170, 270, 430]);
  const WHOLE = [[0, 0], [2000, 0], [2000, 2000], [0, 2000]];
  function poli(t) {
    K.title('Poliquistosis renal autosómica dominante', 'Los quistes reemplazan el parénquima y el riñón crece', C.VIOLET);
    A.draw(seg(t, 0, 0.7));
    const g = ease(seg(t, 3, 4)), a = seg(t, 3, 1);
    if (a > 0) { ctx.save(); ctx.globalAlpha = a; rrect(B.x - 6, B.y - 6, B.w + 12, B.h + 12, 18, '#FFFFFF'); ctx.restore(); B.bulge(WHOLE, [B.crop[0] + B.crop[2] / 2, B.crop[1] + B.crop[3] / 2], 0.78 + 0.22 * g, 0.78 + 0.22 * g, a, 'rgba(255,255,255,0)'); }
    label('Riñón normal', 130, 190, C.GREEN, ...A.P(330, 150), fade(t, 1.2, 25));
    label('Nefromegalia con quistes en todo el parénquima', 440, 190, C.VIOLET, ...B.P(1180, 160), fade(t, 5.5, 25));
    ring(...B.P(1090, 300), 48, C.VIOLET, fade(t, 8, 14), t); ring(...B.P(1230, 480), 55, C.VIOLET, fade(t, 9, 15), t);
    cardsAt(t, [
      [2, 140, 128, C.VIOLET, 'Herencia', ['PKD1 (cromosoma 16): 85 %, más severa', 'PKD2 (cromosoma 4): más tardía']],
      [8, 284, 128, C.BLUE, 'Cuadro', ['Hipertensión precoz, dolor lumbar, hematuria', 'Masas bilaterales palpables; falla renal terminal']],
      [14, 428, 128, C.RED, 'Complicación grave', ['Aneurisma de Berry en 8 a 10 %', 'Cefalea súbita: TAC de cerebro urgente']]]);
    K.banner(620, 598, 620, 'Quiste simple benigno: alta sin control', C.GREEN, seg(t, 19.5, 0.5));
  }
  window.URO_EXTRA.poliquistico = { f: poli, dur: 24 };
})();

// ---------- uro-15: hematuria, urológica o glomerular ----------
(function () {
  const lam = LAM('usm', [330, 250, 840, 950], [40, 128, 560, 570]), nl = LAM('neph', [40, 60, 740, 1040], [40, 128, 560, 570]);
  const UR = [[836, 428], [812, 440], [806, 475], [809, 525], [819, 585], [826, 645], [832, 705], [838, 745], [832, 800], [824, 850], [826, 884]];
  const AF = [[60, 480], [110, 420], [170, 370], [240, 340], [262, 332]];
  const TU = [[310, 360], [400, 350], [500, 330], [590, 300], [650, 310], [672, 380], [672, 600], [670, 850], [665, 1050]];
  function rbc(x, y, a, deform, r = 6) {
    if (a <= 0) return; ctx.save(); ctx.globalAlpha = a; ctx.translate(x, y); ctx.fillStyle = '#D81E3C'; ctx.strokeStyle = '#7A0A1E'; ctx.lineWidth = 1.3; ctx.beginPath();
    for (let i = 0; i <= 12; i++) { const an = i / 12 * 6.2832, rr = r * (1 + deform * 0.5 * Math.sin(an * 3 + x)); i ? ctx.lineTo(rr * Math.cos(an), rr * Math.sin(an)) : ctx.moveTo(rr * Math.cos(an), rr * Math.sin(an)); }
    ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
  }
  function hematuria(t) {
    K.title('Hematuria: ¿urológica o glomerular?', 'El origen decide a quién se deriva', C.RED);
    const ph = ease(seg(t, 11, 1.2));
    lam.draw(seg(t, 0, 0.7) * (1 - ph)); nl.draw(ph, 'neph');
    if (ph < 0.99) {
      ctx.save(); ctx.globalAlpha = 1 - ph;
      const U = pathOf(lam, UR); dots(U, t, seg(t, 1.5, 0.5), '#E0102E', 10, 0.35, 0, 1, 4.2);
      const [bx, by] = lam.P(826, 905); K.glow(bx, by, 80, '220,20,40', 0.5 * seg(t, 4, 1.5));
      for (let i = 0; i < 4; i++) { const k = seg(t, 5 + i * 0.4, 0.5); ctx.globalAlpha = (1 - ph) * k; ctx.fillStyle = '#7A0A1E'; ctx.beginPath(); ctx.ellipse(bx - 18 + i * 12, by - 4 + (i % 2) * 8, 8, 5, i, 0, 7); ctx.fill(); }
      ctx.restore();
      label('Coágulos en la vejiga: origen urológico', 190, 640, C.RED, bx, by, fade(t, 5, 10.5));
    }
    if (ph > 0.01) {
      ctx.save(); ctx.globalAlpha = ph;
      const A = pathOf(nl, AF), T = pathOf(nl, TU);
      const [gx, gy] = nl.P(262, 335);
      for (let i = 0; i < 6; i++) { const u = ((t * 0.3) + i / 6) % 1, [x, y] = A.at(u); rbc(x, y, seg(t, 12.2, 0.5) * Math.min(1, u * 5), 0); }
      // atraviesan la barrera dañada y se deforman
      const [cx, cy] = nl.P(320, 360); ring(gx, gy, 38, C.RED, fade(t, 13, 24) * ph, t);
      for (let i = 0; i < 7; i++) { const u = ((t * 0.16) + i / 7) % 1, [x, y] = T.at(u * 0.92); rbc(x, y, seg(t, 14, 0.5) * Math.min(1, u * 8, (1 - u) * 10), 1, 7); }
      // cilindro hemático en el túbulo distal
      const cs = seg(t, 18, 1.5); if (cs > 0) { const [x0, y0] = nl.P(672, 700); ctx.globalAlpha = ph * cs; ctx.fillStyle = 'rgba(190,20,50,0.85)'; ctx.strokeStyle = '#7A0A1E'; ctx.lineWidth = 2; ctx.beginPath(); ctx.roundRect(x0 - 11, y0 - 34, 22, 68, 11); ctx.fill(); ctx.stroke(); for (let i = 0; i < 4; i++) rbc(x0 + (i % 2 ? 4 : -4), y0 - 24 + i * 16, ph * cs, 0.4, 5); }
      ctx.restore();
      label('Glomérulo dañado: pasan hematíes', 440, 190, C.RED, gx + 14, gy, fade(t, 13, 24) * ph);
      label('Hematíes dismórficos', 450, 420, C.AMBER, ...T.at(0.2), fade(t, 15, 24) * ph);
      label('Cilindro hemático', 450, 590, C.RED, ...nl.P(672, 700), fade(t, 19, 26) * ph);
    }
    cardsAt(t, [
      [1.8, 140, 128, C.AMBER, 'Primero confirmar', ['La tira reactiva da falsos positivos', 'Se confirma con el sedimento: sobre 3 hematíes por campo']],
      [5.5, 284, 128, C.RED, 'Urológica', ['Coágulos, sin cilindros, a veces dolor o masa', 'Cistoscopía y uro-TAC: se deriva a urología']],
      [13, 428, 128, C.BLUE, 'Glomerular', ['Hematíes dismórficos, cilindros, proteinuria', 'Síndrome nefrítico: se deriva a nefrología']]]);
    K.banner(620, 598, 620, 'Hematuria masiva: Foley de 3 vías y lavado', C.VIOLET, seg(t, 21, 0.5));
  }
  window.URO_EXTRA.hematuria = { f: hematuria, dur: 26 };
})();
