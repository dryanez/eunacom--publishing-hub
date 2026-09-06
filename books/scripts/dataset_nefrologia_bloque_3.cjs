/**
 * DATASET · Nefrología — Bloque 3: Trastornos del Potasio y Equilibrio Ácido-Base
 * EUNACOM 2026 · Colección Oficial · Módulo 1 Medicina Interna
 * Estándar Editorial: Gastro 2-Page / Maqueta 1b con Expansión Dinámica de Tiers
 */

function flow(title, rows) {
  const W = 620, CX = 310, GAP = 22;
  const P = [];
  let y = 8, prev = null;
  const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const arr = s => Array.isArray(s) ? s : (s ? [s] : []);
  function wrap(s, max) {
    if (s.length <= max) return [s];
    const mid = s.length / 2, marks = [];
    let i = s.indexOf(' · ');
    while (i !== -1) { marks.push([i, i + 3]); i = s.indexOf(' · ', i + 1); }
    if (!marks.length) { let j = s.indexOf(' '); while (j !== -1) { marks.push([j, j + 1]); j = s.indexOf(' ', j + 1); } }
    let best = null, bd = 1e9;
    marks.forEach(m => { const d = Math.abs(m[0] - mid); if (d < bd) { bd = d; best = m; } });
    return best ? [s.slice(0, best[0]).trim(), s.slice(best[1]).trim()] : [s];
  }
  function draw(x, w, o) {
    const max = Math.floor((w - 18) / 4.4);
    const subs = [];
    arr(o.s).forEach(l => wrap(String(l), max).forEach(ln => subs.push(ln)));
    const h = (o.t ? 21 : 8) + subs.length * 11 + (subs.length ? 7 : 8);
    const cls = { acc: 'acc', dec: 'dec', warn: 'warn', crit: 'warn' }[o.type] || 'b';
    const tc = { acc: 'accT', warn: 'warnT', crit: 'warnT' }[o.type] || 't';
    const sc = o.type === 'acc' ? 'accS' : (o.type === 'warn' || o.type === 'crit') ? 'warnT sub' : 'sub';
    P.push(`<rect class="${cls}" x="${x}" y="${y}" width="${w}" height="${h}" rx="3"/>`);
    let ty = y + (o.t ? 15 : 14);
    if (o.t) { P.push(`<text class="${tc} t" x="${x + w / 2}" y="${ty}" text-anchor="middle" font-weight="700">${esc(o.t)}</text>`); ty += 12; }
    subs.forEach(l => { P.push(`<text class="${sc}" x="${x + w / 2}" y="${ty}" text-anchor="middle">${esc(l)}</text>`); ty += 11; });
    return h;
  }
  function step(label, from) {
    const ty = y + GAP;
    const xs = from === 'left' ? [prev.xs[0]] : from === 'right' ? [prev.xs[prev.xs.length - 1]] : prev.xs;
    xs.forEach(x => {
      P.push(x === CX
        ? `<path class="ln" d="M${CX},${prev.y} V${ty}"/>`
        : `<path class="ln" d="M${x},${prev.y} V${prev.y + 10} H${CX} V${ty}"/>`);
    });
    if (label) P.push(`<text class="sub" x="${CX + 7}" y="${prev.y + GAP / 2 + 3}">${esc(label)}</text>`);
  }
  rows.forEach(r => {
    if (r.k === 'split') {
      if (prev) step(r.al, r.from);
      const dh = draw(70, 480, { t: r.q, s: r.s, type: 'dec' });
      const db = y + dh;
      const hasL = !!(r.ll || r.rl);
      y = db + (hasL ? 40 : 24);
      const bw = 292, lx = 12, rx = 316, lcx = lx + bw / 2, rcx = rx + bw / 2, hc = y - 10;
      P.push(`<path class="ln" d="M${CX},${db} V${hc} H${lcx} V${y}"/>`);
      P.push(`<path class="ln" d="M${CX},${hc} H${rcx} V${y}"/>`);
      [[r.ll, lcx], [r.rl, rcx]].forEach(([lab, cx]) => {
        if (!lab) return;
        const ls = wrap(String(lab), 74);
        ls.forEach((line, k) => P.push(`<text class="lbl" x="${cx}" y="${y - 15 - (ls.length - 1 - k) * 9}" text-anchor="middle">${esc(line)}</text>`));
      });
      const top = y;
      const lh = draw(lx, bw, r.left);
      y = top;
      const rh = draw(rx, bw, r.right);
      y = top + Math.max(lh, rh);
      prev = { y, xs: [lcx, rcx] };
    } else {
      if (prev) step(r.al, r.from);
      const w = r.w || (r.type === 'dec' ? 480 : 420);
      const x = (W - w) / 2;
      const h = draw(x, w, r);
      y += h;
      prev = { y, xs: [CX] };
    }
  });
  const H = y + 8;
  const svg = `<svg viewBox="0 0 ${W} ${H}" width="100%" style="max-width:${W}px;font-family:'IBM Plex Sans',system-ui,sans-serif">
  <defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#475569"/></marker></defs>
  <style>
    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}
    .t{font-size:10px;fill:#15181d}
    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}
    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#eafdf3}
    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}
    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}
    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar)}
  </style>
  ${P.join('\n  ')}
</svg>`;
  return { title, svg };
}

const bloque3 = [
  /* ───────────────────────── 🔴 TIER 3 (4 PÁGINAS) ───────────────────────── */
  {
    id: 'nefro-09', classId: 'nefro-09', tier: 3,
    blockNum: 3, blockName: 'Trastornos del Potasio y Equilibrio Ácido-Base',
    topicLabel: '3.1', title: 'Hiperkalemia Grave y Algoritmo de Estabilización de Membrana',
    perfilCode: '1.09.2.005, 1.09.4.016', dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud de Urgencia Vital (Ley de Urgencias)',
    reconstrucciones: 'EUNACOM Diciembre 2016 (Q#14) · EUNACOM Julio 2019 (Q#72) · EUNACOM Julio 2022 (Q#05) · EUNACOM Diciembre 2023 (Q#44)',
    frecuencia: 'Máxima rentabilidad en EUNACOM · Pregunta segura en cada examen: primera medida = Gluconato de Calcio',
    svg: null, algoTitle: 'Algoritmo Escalonado de Manejo de la Hiperkalemia Grave',
    diagram: flow('Algoritmo Escalonado de Urgencia en Hiperkalemia (K > 6.5 mEq/L o Cambios ECG)', [
      { t: 'Potasio Sérico > 6.5 mEq/L o Alteración en ECG (T Picuda / QRS Ancho / Bradicardia)', s: 'Monitorización cardíaca continua inmediata y acceso venoso permeable', type: 'warn' },
      { k: 'split', q: '¿Presenta Alteraciones Electrocardiográficas o Inestabilidad?',
        ll: 'PASO 1: ESTABILIZACIÓN DE MEMBRANA (INMEDIATO)',
        left: { t: 'Gluconato de Calcio 10% IV (10 mL en 2 a 5 minutos)', s: 'Acción en 1–3 min · NO baja el potasio sérico · Protege el miocito ventricular de fibrilación o paro', type: 'acc' },
        rl: 'PASO 2: REDISTRIBUCIÓN INTRACELULAR (SHIFTING)',
        right: { t: 'Insulina Rápida 10 UI + Suero Glucosado 10%–30%', s: 'Acción en 15–30 min · Asociar Salbutamol nebulizado 10–20 mg o Bicarbonato si hay acidosis metabólica', type: 'dec' },
      },
      { k: 'split', q: 'PASO 3: ELIMINACIÓN NETA DE POTASIO DEL ORGANISMO',
        ll: 'Paciente con Diuresis Conservada',
        left: { t: 'Furosemida 40–80 mg IV + Resinas / Patiromer', s: 'Forzar kaliuresis distal · Resinas de intercambio quelantes en tubo digestivo', type: 'acc' },
        rl: 'Oliguria / Anuria / Falla Renal Refractaria',
        right: { t: 'Hemodiálisis de Urgencia Inmediata', s: 'Indicación imperativa: la hemodiálisis es la medida definitiva más rápida y eficaz', type: 'warn' },
      },
    ]),
    contexto: 'El potasio es el catión intracelular predominante (98% intracelular, 2% extracelular). La hiperkalemia es el trastorno electrolítico más letal de la medicina de urgencia debido a que despolariza el potencial de membrana en reposo de los miocitos cardíacos, inactivando los canales de sodio voltaje-dependientes y enlenteciendo la conducción aurículoventricular e intraventricular. Una concentración sérica > 6.5 mEq/L puede desencadenar paro cardíaco en asistolia o fibrilación ventricular en cuestión de minutos sin previo aviso. En el EUNACOM, la secuencia escalonada de tratamiento (Membrana → Shifting → Eliminación) es una de las preguntas de mayor peso evaluativo.',
    contentSections: [
      {
        subhead: '1. Fisiopatología y Alteraciones Electrocardiográficas',
        paragraphs: [
          'La toxicidad cardíaca por hiperkalemia se correlaciona con la velocidad de instalación y la magnitud del ascenso del potasio sérico ($K^+ > 5.5\\text{ mEq/L}$ leve, $> 6.0$ moderada, <strong>$> 6.5\\text{ mEq/L}$ grave</strong>). Las manifestaciones en el electrocardiograma siguen una progresión secuencial típica pero traicionera:',
          '1. <strong>Ondas T altas, picudas, simétricas y de base angosta</strong> (primer signo precoz, generalmente con K 5.5–6.5 mEq/L); 2. <strong>Prolongación del intervalo PR y aplanamiento progresivo de la onda P</strong> (K 6.5–7.0 mEq/L); 3. <strong>Pérdida completa de la onda P y ensanchamiento del complejo QRS</strong> (K 7.0–8.0 mEq/L); 4. <strong>Ritmo idioventricular, bradicardia extrema, bloqueo AV avanzado y morfología bifásica sinusal ("sine-wave pattern")</strong>; y finalmente 5. <strong>Fibrilación ventricular o asistolia</strong>.',
        ],
      },
      {
        subhead: '2. Paso 1: Estabilización de Membrana Miocárdica (Urgencia Vital)',
        paragraphs: [
          'Frente a <strong>cualquier alteración electrocardiográfica atribuible a hiperkalemia (incluso sólo ondas T picudas) o K > 6.5 mEq/L con inestabilidad</strong>, la <strong>PRIMERA MEDIDA ABSOLUTA E IMPERATIVA es estabilizar la membrana miocárdica con Gluconato de Calcio al 10% (1 ampolla de 10 mL en 2 a 5 minutos intravenoso)</strong>.',
          'El calcio antagoniza el efecto electrofisiológico del potasio elevando el potencial umbral de disparo hacia valores menos negativos, restaurando la excitabilidad fisiológica normal del miocito. <strong>Su efecto inicia en 1 a 3 minutos y dura 30 a 60 minutos</strong>. Si los cambios en el ECG persisten a los 5–10 minutos, <strong>se debe repetir una segunda ampolla</strong>. Es vital recordar que <strong>EL CALCIO NO DISMINUYE EL POTASIO SÉRICO EN NADA</strong>: solo compra tiempo vital para ejecutar las medidas de redistribución y eliminación.',
        ],
      },
      {
        subhead: '3. Paso 2: Desplazamiento Intracelular (Shifting)',
        paragraphs: [
          'Estas medidas trasladan transitoriamente el potasio desde el plasma hacia el interior de la célula, reduciendo la kalemia plasmática en 0.5 a 1.2 mEq/L:',
          '<strong>Insulina Rápida + Glucosa:</strong> Régimen de <strong>10 Unidades de Insulina Regular intravenosa</strong> en bolo acompañado de <strong>50 a 100 mL de Suero Glucosado al 30%</strong> (o 250–500 mL de SG 10%) para evitar hipoglicemia severa. La insulina estimula directamente la bomba $Na^+/K^+$-ATPasa en músculo e hígado. Su efecto inicia en <strong>15 a 30 minutos y dura 4 a 6 horas</strong>.',
          '<strong>Agonistas Beta-2 Adrenérgicos:</strong> <strong>Salbutamol nebulizado a dosis altas (10 a 20 mg en 4 mL de suero fisiológico)</strong> en 10 minutos (dosis 4 veces superior a la usada en asma bronquial). Actúa sinérgicamente con la insulina estimulando la $Na^+/K^+$-ATPasa mediada por AMPc.',
          '<strong>Bicarbonato de Sodio:</strong> Solo indicado si coexiste <strong>acidosis metabólica severa confirmada (pH < 7.1 o HCO3 < 12)</strong>. En normofunción ácido-base o pacientes anúricos en diálisis es ineficaz y precipita sobrecarga de volumen e hipocalcemia iónica.',
        ],
      },
      {
        subhead: '4. Paso 3: Eliminación Corporal de Potasio',
        paragraphs: [
          'El potasio desplazado retornará a la circulación al cabo de unas horas. Por ello, se deben activar paralelamente las vías de remoción definitiva:',
          '<strong>Diuréticos de Asa (Furosemida 40 a 80 mg IV):</strong> Aumentan el flujo tubular y la entrega de sodio al túbulo colector cortical, estimulando la secreción renal de potasio. Requieren un paciente con función renal residual y diuresis presente.',
          '<strong>Quelantes Gastrointestinales:</strong> Resinas de intercambio catiónico (Sulfonato de poliestireno sódico / Kayexalate) o nuevos agentes (Patiromer, Ciclosilicato de zirconio y sodio - ZS-9). Tienen acción lenta (horas) y se usan para el manejo subagudo o ambulatorio.',
          '<strong>Hemodiálisis de Urgencia:</strong> Es el método de eliminación <strong>más rápido, potente y definitivo</strong>. Indicación mandatoria inmediata en: anuria, insuficiencia renal crónica avanzada en diálisis que omitió sesión, hiperkalemia refractaria al tratamiento médico o asociada a edema agudo de pulmón.',
        ],
      },
      {
        subhead: '5. Pseudohiperkalemia y Trampas Clínicas',
        paragraphs: [
          'Siempre considerar <strong>pseudohiperkalemia</strong> en un paciente completamente asintomático, con ECG rigurosamente normal y kalemia inexplicablemente elevada: la causa principal es la <strong>hemólisis mecánica durante la punción venosa</strong> (torniquete prolongado, puño apretado, aguja de calibre fino), trombocitosis marcada (> 500.000/uL) o leucocitosis extrema (> 50.000/uL). Ante la sospecha, se debe repetir la muestra de sangre venosa sin torniquete o tomar una gasometría arterial con electrolitos de control inmediato.',
        ],
      },
    ],
    table: {
      title: 'Arsenal Farmacológico en Hiperkalemia Grave: Mecanismos, Tiempos y Dosis',
      headers: ['Fármaco / Intervención', 'Mecanismo Fisiopatológico', 'Inicio de Acción', 'Duración del Efecto', '¿Baja la Kalemia?'],
      rows: [
        ['Gluconato de Calcio 10% (10 mL IV)', 'Estabiliza potencial umbral de membrana miocárdica', '1 a 3 minutos', '30 a 60 minutos', 'NO (Cero efecto en kalemia)'],
        ['Insulina Rápida (10 UI) + SG 30%', 'Activa bomba Na+/K+-ATPasa (translocación celular)', '15 a 30 minutos', '4 a 6 horas', 'SÍ (reduce 0.5–1.0 mEq/L)'],
        ['Salbutamol Nebulizado (10–20 mg)', 'Estimula receptores beta-2 y Na+/K+-ATPasa', '15 a 30 minutos', '2 a 4 horas', 'SÍ (reduce 0.5–1.0 mEq/L)'],
        ['Furosemida IV (40–80 mg)', 'Inhibe Na-K-2Cl y fuerza excreción urinaria distal', '15 a 30 minutos', '4 a 6 horas', 'SÍ (elimina potasio del cuerpo)'],
        ['Hemodiálisis de Urgencia', 'Remoción extracorpórea por gradiente de difusión', 'Inmediato al conectar', 'Permanente', 'SÍ (elimina potasio masivo)'],
      ],
    },
    treatmentTable: {
      title: 'Secuencia Temporal de Acciones en Hiperkalemia con Riesgo Vital',
      headers: ['Minuto de Acción', 'Intervención Prioritaria', 'Parámetro de Control Crítico'],
      rows: [
        ['Minuto 0', 'Monitor ECG continuo + Vía venosa gruesa', 'Constatar presencia de ondas T picudas, PR largo o QRS ancho'],
        ['Minutos 1–5', 'Gluconato de Calcio 10% (1 ampolla de 10 mL IV en 2–5 min)', 'Repetir a los 5–10 min si persisten alteraciones electrocardiográficas'],
        ['Minutos 5–15', 'Insulina Rápida 10 UI IV + 100 mL SG 30% + Salbutamol neb 10 mg', 'Prevenir hipoglicemia (control glicémico seriado cada 30–60 min)'],
        ['Minutos 15–30', 'Furosemida 80 mg IV (si hay diuresis) o llamado urgente a Nefrología', 'Coordinar hemodiálisis de urgencia si hay anuria o ERC estadio 5'],
      ],
    },
    vignette: 'Hombre de 28 años con insuficiencia renal crónica terminal en hemodiálisis trisemanal no acude a su sesión de diálisis programada del día sábado por encontrarse en una reunión familiar con abundante ingesta de asado de vacuno y frutas cítricas. El día lunes por la mañana es llevado a urgencias por astenia severa, dificultad extrema para mantenerse de pie y paresia flácida simétrica de las cuatro extremidades. Al examen físico: en sopor superficial, FC 34 lpm, PA 75/40 mmHg, sin signos meníngeos. El electrocardiograma muestra ausencia total de ondas P visibles, ritmo idioventricular regular lento a 34 lpm y complejos QRS ensanchados a 180 ms con ondas T picudas en derivaciones precordiales. La gasometría venosa rápida informa: Potasio sérico 8.6 mEq/L, Sodio 132 mEq/L, pH 7.24, Bicarbonato 14 mEq/L.',
    explicacion: 'El paciente presenta una hiperkalemia catastrófica (8.6 mEq/L) con toxicidad miocárdica crítica manifestada por bradicardia extrema, pérdida de ondas P y ensanchamiento del QRS con riesgo inminente de fibrilación ventricular o asistolia. La PRIMERA Y MÁS URGENTE medida terapéutica es la administración intravenosa inmediata de Gluconato de Calcio al 10% (10 mL en 2 a 5 minutos) con el fin exclusivo de estabilizar la membrana miocárdica y evitar la muerte súbita arritmogénica. Simultáneamente se debe solicitar el llamado de urgencia al nefrólogo de turno para hemodiálisis urgente e iniciar el shifting con insulina regular más glucosa. El intento de instalar un marcapasos transitorio sin estabilizar previamente la membrana con calcio suele fracasar por falta de captura eléctrica del miocardio hiperexcitable despolarizado.',
    keyPoints: [
      'Hiperkalemia (> 6.5 mEq/L o cambios en ECG): el primer paso absoluto es siempre Gluconato de Calcio al 10% IV (10 mL en 2–5 min).',
      'El Gluconato de Calcio NO disminuye los niveles séricos de potasio: actúa en 1 a 3 minutos estabilizando la membrana miocárdica al elevar el potencial umbral.',
      'Si a los 5 a 10 minutos de administrar Gluconato de Calcio persisten los cambios electrocardiográficos, se debe repetir una segunda ampolla.',
      'Para descender la kalemia plasmática rápidamente (shifting): Insulina Rápida 10 UI IV + Glucosa al 30% (50–100 mL) + Salbutamol nebulizado 10–20 mg.',
      'El Bicarbonato de Sodio solo es útil para bajar el potasio si coexiste acidosis metabólica severa concomitante.',
      'Para eliminar potasio definitivamente del cuerpo: Furosemida (si el paciente orina) o Hemodiálisis de Urgencia (en anuria o ERC estadio 5).',
      'Bradicardia severa con QRS ancho en paciente renal crónico o dializado es hiperkalemia hasta que se demuestre lo contrario.',
      'La tetraparesia flácida ascendente con reflejos osteotendinosos abolidos es una manifestación neuromuscular clásica de la hiperkalemia grave.',
    ],
    questions: [
      {
        stem: 'Hombre de 68 años con antecedentes de cardiopatía hipertensiva y enfermedad renal crónica estadio 4 consulta por marcada debilidad muscular y palpitaciones lentas. Al examen físico: PA 80/50 mmHg, FC 32 lpm. El monitor muestra ritmo de la unión con QRS ensanchado a 160 ms y ondas T picudas simétricas de gran amplitud. El laboratorio de urgencia informa Potasio plasmático en 8.4 mEq/L. ¿Cuál es la intervención terapéutica inicial prioritaria que debe administrarse de inmediato?',
        options: [
          { id: 'A', text: 'Bicarbonato de sodio 2/3 molar en infusión rápida' },
          { id: 'B', text: 'Insulina cristalina 10 UI asociada a 100 mL de suero glucosado al 30%' },
          { id: 'C', text: 'Gluconato de calcio al 10% intravenoso en 2 a 5 minutos' },
          { id: 'D', text: 'Instalación de marcapasos transitorio transvenoso de urgencia' },
          { id: 'E', text: 'Hemodiálisis inmediata por catéter venoso central' },
        ],
        correcta: 'C',
        explicacion: 'En toda hiperkalemia grave acompañada de alteraciones electrocardiográficas (bradicardia extrema, QRS ancho u ondas T picudas), la regla de oro internacional es estabilizar de inmediato la membrana celular de los cardiomiocitos para impedir la fibrilación ventricular o asistolia letal. El fármaco de elección absoluta es el Gluconato de Calcio al 10% intravenoso. Su efecto protector es casi instantáneo (1 a 3 minutos). Las medidas para redistribuir el potasio (insulina con glucosa) o para eliminarlo (hemodiálisis) deben coordinarse de inmediato, pero NUNCA deben anteponerse a la administración del calcio.',
        recTag: 'EUNACOM Diciembre 2016 · Reconstrucción oficial',
      },
      {
        stem: 'Mujer de 72 años con diabetes mellitus e hipertensión arterial tratada con Enalapril 20 mg cada 12 horas y Espironolactona 25 mg/día consulta por astenia y malestar general. El ECG revela prolongación del intervalo PR y ondas T altas y acuminadas. El potasio sérico es de 7.2 mEq/L. Se administra una ampolla de gluconato de calcio al 10% IV, revirtiendo transitoriamente los cambios en el ECG. ¿Cuál es el paso siguiente para inducir un rápido desplazamiento del potasio hacia el espacio intracelular?',
        options: [
          { id: 'A', text: 'Resina de intercambio catiónico (sulfonato de poliestireno sódico) por sonda nasogástrica' },
          { id: 'B', text: 'Bolo intravenoso de 10 UI de insulina rápida junto con solución glucosada hipertónica' },
          { id: 'C', text: 'Infusión continua de cloruro de potasio a bajas dosis' },
          { id: 'D', text: 'Bolo de furosemida 120 mg intravenoso' },
          { id: 'E', text: 'Suspender el enalapril y citar a control ambulatorio en 48 horas' },
        ],
        correcta: 'B',
        explicacion: 'Una vez estabilizada la membrana miocárdica con calcio, la fase terapéutica inmediata es el desplazamiento intracelular rápido ("shifting") del potasio plasmático. La medida más potente y rápida es la infusión de 10 Unidades de Insulina Rápida (regular o cristalina) combinada con glucosa hipertónica (ej. 100 mL de SG al 30% o 250 mL al 10%) para prevenir la hipoglicemia. La insulina estimula la bomba Na+/K+-ATPasa ingresando potasio a las células en 15 a 30 minutos. Las resinas de intercambio catiónico (A) tardan varias horas en hacer efecto y no son apropiadas para el rescate agudo.',
        recTag: 'EUNACOM Julio 2019 · Reconstrucción oficial',
      },
      {
        stem: 'Hombre de 27 años con antecedente de insuficiencia renal crónica terminal en programa de hemodiálisis trisemanal no acude a su sesión programada del sábado. El lunes por la mañana consulta en urgencias con marcada debilidad muscular y dificultad para movilizar las extremidades inferiores. Al examen físico se constata tetraparesia flácida simétrica con reflejos osteotendinosos abolidos y frecuencia cardíaca de 40 latidos por minuto. ¿Cuál es el diagnóstico clínico más probable?',
        options: [
          { id: 'A', text: 'Síndrome de Guillain-Barré' },
          { id: 'B', text: 'Hipokalemia por pérdidas digestivas ocultas' },
          { id: 'C', text: 'Hiperkalemia grave por omisión de terapia de reemplazo renal' },
          { id: 'D', text: 'Accidente cerebrovascular isquémico de tronco encefálico' },
          { id: 'E', text: 'Crisis miasténica autoinmune' },
        ],
        correcta: 'C',
        explicacion: 'En un paciente con insuficiencia renal crónica terminal en diálisis que omite su sesión de filtración, la retención de potasio es constante y predecible. Las manifestaciones clínicas clásicas de la hiperkalemia grave combinan dos esferas principales: la electrofisiología cardíaca (bradicardia, bloqueos AV y arritmias) y el sistema neuromuscular (debilidad muscular profunda, astenia, tetraparesia flácida ascendente e hiporreflexia que simula una parálisis periódica o un síndrome de Guillain-Barré). El diagnóstico es hiperkalemia grave y requiere ECG y tratamiento de urgencia inmediatos.',
        recTag: 'EUNACOM Julio 2022 · Reconstrucción oficial',
      },
      {
        stem: 'Un médico evalúa a un paciente asintomático de 45 años cuyos exámenes de rutina en sangre venosa periférica informan un potasio plasmático de 6.8 mEq/L. El paciente no presenta antecedentes mórbidos, el examen físico es normal y el electrocardiograma de 12 derivaciones es estrictamente normal sin ondas T picudas ni ensanchamiento de complejos. El hemograma muestra plaquetas de 750.000/uL y glóbulos blancos normales. ¿Cuál es la conducta inicial más adecuada?',
        options: [
          { id: 'A', text: 'Indicar hemodiálisis de urgencia inmediata' },
          { id: 'B', text: 'Administrar 10 mL de gluconato de calcio al 10% IV' },
          { id: 'C', text: 'Sospechar pseudohiperkalemia y repetir la toma de muestra venosa sin torniquete' },
          { id: 'D', text: 'Administrar sulfonato de poliestireno sódico oral cada 6 horas' },
          { id: 'E', text: 'Iniciar infusión continua de bicarbonato de sodio isotónico' },
        ],
        correcta: 'C',
        explicacion: 'La presencia de una hiperkalemia significativa en un paciente clínicamente asintomático, sin factores de riesgo conocidos de falla renal o ingesta de fármacos retenedores de potasio, y con un electrocardiograma completamente normal, orienta con fuerza a una Pseudohiperkalemia. Ésta se produce por la liberación in vitro de potasio intracelular tras la extracción sanguínea, típicamente por hemólisis traumática por torniquete prolongado, o por desgranulación de plaquetas en pacientes con trombocitosis marcada (> 500.000/uL). La conducta adecuada es confirmar el hallazgo mediante una nueva toma de muestra venosa atraumática sin torniquete o gasometría arterial con electrolitos antes de instaurar tratamientos potencialmente dañinos.',
        recTag: 'EUNACOM Diciembre 2023 · Reconstrucción oficial',
      },
    ],
  },

  /* ───────────────────────── 🟡 TIER 2 (2 PÁGINAS) ───────────────────────── */
  {
    id: 'nefro-10', classId: 'nefro-10', tier: 2,
    blockNum: 3, blockName: 'Trastornos del Potasio y Equilibrio Ácido-Base',
    topicLabel: '3.2', title: 'Hipokalemia y Reposición Segura de Potasio',
    perfilCode: '1.09.2.006, 1.09.3.009', dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Sin garantía GES específica',
    reconstrucciones: 'EUNACOM Diciembre 2017 (Q#39) · EUNACOM Julio 2020 (Q#68)',
    frecuencia: 'Media-alta en EUNACOM · Evaluación de onda U en ECG, límites de infusión venosa periférica y corrección de magnesio',
    svg: null, algoTitle: 'Algoritmo Diagnóstico y Protocolo de Reposición de Hipokalemia',
    diagram: flow('Algoritmo de Diagnóstico y Reposición Segura de Hipokalemia (K < 3.5 mEq/L)', [
      { t: 'Potasio Sérico < 3.5 mEq/L (Severa si < 2.5–3.0 mEq/L)', s: 'Evaluar electrocardiograma (Ondas U, T planas, infradesnivel ST) y síntomas neuromusculares', type: 'warn' },
      { k: 'split', q: '¿Presenta Síntomas Graves (Arritmias, Tetania, Parálisis) o K < 2.5 mEq/L?',
        ll: 'SÍ: Hipokalemia Grave / Sintomática',
        left: { t: 'Reposición Intravenosa con Cloruro de Potasio (KCl)', s: 'Vía periférica: máx 40 mEq/L y ritmo máx 10–20 mEq/h · Vía central si se requiere infusión rápida', type: 'acc' },
        rl: 'NO: Hipokalemia Leve a Moderada Asintomática',
        right: { t: 'Reposición Oral con Sales de Potasio / Dieta', s: 'Vía oral es más segura y fisiológica · Jarabe de gluconato de potasio o comprimidos de KCl', type: 'dec' },
      },
      { k: 'split', q: '¿Persiste Hipokalemia Refractaria a pesar de Aporte Adecuado?',
        ll: 'Regla de Oro: Coexistencia de Hipomagnesemia',
        left: { t: 'Corregir Magnesio Sérico Inmediatamente (Sulfato de Magnesio IV)', s: 'El déficit de Mg desinhibe los canales ROMK provocando pérdida renal obligada de potasio', type: 'acc' },
        rl: 'Pérdidas Renales Sostenidas',
        right: { t: 'Evaluar Uso de Diuréticos o Hiperaldosteronismo', s: 'Ajustar diuréticos tiazídicos o de asa · Considerar Espironolactona ahorradora de potasio', type: 'warn' },
      },
    ]),
    contexto: 'La hipokalemia ($K^+ < 3.5\\text{ mEq/L}$) altera la repolarización miocárdica y la contractilidad del músculo esquelético y liso. En el sistema de conducción cardíaco, predispone a arritmias auriculares y ventriculares letales (incluyendo torsades de pointes), especialmente en pacientes que reciben digitálicos o con cardiopatía de base. En el músculo liso gastrointestinal, causa íleo paralítico grave. En el EUNACOM, las preguntas apuntan a reconocer los cambios electrocardiográficos característicos (onda U), las limitaciones de seguridad en la velocidad de infusión intravenosa periférica y la regla cardinal de corregir el magnesio concomitante.',
    contentSections: [
      {
        subhead: '1. Manifestaciones Clínicas y Electrocardiográficas',
        paragraphs: [
          'La clínica neuromuscular abarca: debilidad muscular simétrica ascendente que inicia en extremidades inferiores, mialgias, calambres, hiporreflexia osteotendinosa, constipación e <strong>íleo paralítico</strong>. En casos severos ($K < 2.0\\text{ mEq/L}$) puede producirse <strong>rabdomiolisis e hipoventilación por parálisis del diafragma</strong>.',
          'En el electrocardiograma, la progresión típica incluye: (1) <strong>Aplanamiento e inversión de la onda T</strong>; (2) <strong>Infradesnivel del segmento ST</strong>; (3) <strong>Aparición de una onda U prominente</strong> (onda deflexiva positiva que sigue a la onda T, más visible en derivaciones V2–V4); (4) Prolongación del intervalo QT aparente (intervalo QU); y (5) Ectopias ventriculares, taquicardia ventricular polimórfica y fibrilación ventricular.',
        ],
      },
      {
        subhead: '2. Reglas de Seguridad en la Reposición Intravenosa',
        paragraphs: [
          'Siempre que sea posible y el paciente tolere la vía digestiva, la <strong>vía oral es la vía de elección</strong>, ya que el reflejo gastroentérico y la absorción enteral previenen el riesgo de hiperkalemia de rebote. Se indican sales de potasio (Gluconato de potasio oral o comprimidos de KCl retard).',
          'En hipokalemia severa ($K < 2.5\\text{ mEq/L}$), alteraciones electrocardiográficas o intolerancia digestiva, se utiliza <strong>Cloruro de Potasio (KCl) intravenoso</strong> bajo reglas de seguridad estrictas:',
          '1. <strong>Vía Venosa Periférica:</strong> Concentración máxima recomendada de <strong>40 mEq por litro de solución</strong> (2 ampollas de KCl de 10 mL al 10% aportan 26.8 mEq de K) para evitar flebitis química dolorosa y esclerosis venosa. Velocidad de infusión máxima: <strong>10 a 20 mEq por hora</strong>.',
          '2. <strong>Vía Venosa Central:</strong> Obligatoria si se requieren concentraciones mayores (hasta 60–80 mEq/L) o velocidades de infusión elevadas (20 a 40 mEq/h en paro o arritmias ventriculares graves). <strong>Exige siempre bomba de infusión continua (BIC) y monitorización electrocardiográfica continua</strong>.',
          '3. <strong>Vehículo de dilución:</strong> Debe diluirse en <strong>Suero Fisiológico al 0.9%</strong>. NUNCA diluir en Suero Glucosado, ya que la glucosa estimula la secreción de insulina endógena y empeora transitoriamente la hipokalemia al inducir shifting celular antes de que se absorba el aporte.',
        ],
      },
      {
        subhead: '3. El Rol Crítico del Magnesio (Hipokalemia Refractaria)',
        paragraphs: [
          'La <strong>hipomagnesemia</strong> es el factor más común de refractariedad en el tratamiento de la hipokalemia. El magnesio intracelular actúa normalmente como un freno fisiológico sobre el canal secretor de potasio medular renal (ROMK) en el túbulo colector. Cuando los niveles de magnesio caen, se pierde este bloqueo intrínseco y los canales ROMK quedan abiertos permanentemente, provocando una <strong>fuga renal continua e inagotable de potasio a la orina</strong>.',
          'Por esta razón, frente a todo paciente con <strong>hipokalemia refractaria a la administración adecuada de KCl</strong>, la conducta inmediata e indiscutible es <strong>medir y reponer Magnesio (Sulfato de Magnesio intravenoso)</strong>.',
        ],
      },
    ],
    table: {
      title: 'Etiología y Clasificación de la Hipokalemia según Excreción Renal de Potasio',
      headers: ['Mecanismo Fisiopatológico', 'Potasio Urinario (Ku / 24h)', 'Causas Clínicas Frecuentes', 'Tratamiento Específico'],
      rows: [
        ['Pérdidas Extrarrenales (Digestivas)', '< 20 mEq/día (Riñón ahorra K)', 'Diarrea profusa, fístulas entéricas, laxantes · Acidosis metabólica', 'Reposición de KCl + cristaloides isotónicos'],
        ['Pérdidas Renales con HTA', '> 20 mEq/día (Fuga renal)', 'Hiperaldosteronismo primario (Conn), Estenosis arteria renal, Cushing', 'Espironolactona · Cirugía del adenoma'],
        ['Pérdidas Renales con PA Normal', '> 20 mEq/día (Fuga renal)', 'Diuréticos tiazídicos y de asa, vómitos repetidos, Bartter, Gitelman', 'Suspender diuréticos · Aporte de KCl y magnesio'],
        ['Redistribución Celular (Shifting)', 'Variable (Ku normal o bajo)', 'Alcalosis metabólica, uso de agonistas beta-2, exceso de insulina', 'Corrección del trastorno causal'],
      ],
    },
    vignette: 'Mujer de 56 años con hipertensión arterial en tratamiento con Enalapril e Hidroclorotiazida que recientemente cambió este último por clortalidona a dosis plenas. Consulta por astenia marcada, calambres en ambas pantorrillas y palpitaciones esporádicas. Al examen físico: PA 128/78 mmHg, FC 76 lpm irregular. El electrocardiograma muestra aplanamiento de ondas T con presencia de ondas U positivas prominentes en V2–V4 y extrasístoles ventriculares monomórficas aisladas. Laboratorio: Potasio sérico 2.8 mEq/L, Sodio 138 mEq/L, Magnesio 1.4 mg/dL (VN 1.8–2.4). Se inicia infusión venosa periférica de KCl a 10 mEq/h. A las 24 horas, la kalemia de control se mantiene estancada en 2.9 mEq/L a pesar de aportes intravenosos acumulados de 80 mEq.',
    explicacion: 'La paciente presenta una hipokalemia sintomática con repercusión electrocardiográfica (ondas U y ectopias ventriculares) secundaria al uso de diuréticos tiazídicos (clortalidona). La falta de ascenso del potasio plasmático tras 24 horas de reposición intravenosa adecuada (hipokalemia refractaria) se explica directamente por la co-existencia de hipomagnesemia no tratada (1.4 mg/dL). La hipomagnesemia remueve el bloqueo fisiológico sobre el canal ROMK en el túbulo colector, lo que hace que todo el potasio administrado sea inmediatamente excretado en la orina. La conducta médica correcta es administrar Sulfato de Magnesio intravenoso para permitir el cierre del canal ROMK y la retención efectiva del potasio sérico.',
    keyPoints: [
      'Cambios típicos en ECG de hipokalemia: aplanamiento/inversión de T, infradesnivel ST y aparición de onda U prominente.',
      'Vía oral con sales de potasio es siempre la primera opción si el paciente tolera y el K es > 2.5–3.0 mEq/L sin síntomas.',
      'Vía venosa periférica: concentración máxima permitida de 40 mEq/L de solución y velocidad máxima de 10 a 20 mEq/hora.',
      'NUNCA diluir el cloruro de potasio en Suero Glucosado: estimula liberación de insulina y empeora la hipokalemia.',
      'Hipokalemia refractaria a reposición: sospechar y medir siempre hipomagnesemia; el tratamiento exige infundir Sulfato de Magnesio.',
      'El déficit de magnesio desinhibe los canales ROMK tubulares provocando fuga renal incesante de potasio.',
      'Diuréticos tiazídicos y de asa son la causa más frecuente de hipokalemia en el paciente ambulatorio.',
    ],
    questions: [
      {
        stem: 'Hombre de 62 años con antecedente de insuficiencia cardíaca y fibrilación auricular crónica en tratamiento con digoxina y furosemida consulta por náuseas, astenia y mareos. El ECG muestra bradiarritmia con extrasístoles ventriculares frecuentes, aplanamiento de ondas T y ondas U notorias. El potasio plasmático es de 2.6 mEq/L. ¿Cuál es el riesgo farmacológico inmediato más grave de esta alteración electrolítica?',
        options: [
          { id: 'A', text: 'Precipitación de intoxicación digitálica severa con arritmias ventriculares letales' },
          { id: 'B', text: 'Desarrollo de insuficiencia renal aguda prerrenal anúrica' },
          { id: 'C', text: 'Parálisis periódica tirotóxica irreversible' },
          { id: 'D', text: 'Bloqueo auriculoventricular de primer grado benigno autolimitado' },
          { id: 'E', text: 'Aparición de hipocalcemia sintomática aguda' },
        ],
        correcta: 'A',
        explicacion: 'La hipokalemia es el principal factor facilitador de la toxicidad e intoxicación por digitálicos (digoxina). El potasio y la digoxina compiten por el mismo sitio de unión en la subunidad alfa extracelular de la bomba Na+/K+-ATPasa del miocito. Cuando existe hipokalemia, la digoxina se une de forma masiva y prolongada a la bomba, intensificando drásticamente su inhibición enzimática y desencadenando arritmias ventriculares graves potencialmente mortales (taquicardia ventricular bidireccional, fibrilación ventricular). Por ello, en pacientes usuarios de digoxina, la kalemia debe mantenerse rigurosamente sobre 4.0 mEq/L.',
        recTag: 'EUNACOM Diciembre 2017 · Reconstrucción oficial',
      },
      {
        stem: 'Una paciente de 48 años hospitalizada por pancreatitis aguda en resolución presenta debilidad muscular y calambres. Sus exámenes revelan potasio de 2.9 mEq/L. Se prescribe reposición con cloruro de potasio intravenoso por vía venosa periférica. ¿Cuáles son la concentración máxima recomendada en la solución y la velocidad de infusión periférica segura para prevenir flebitis y toxicidad cardíaca?',
        options: [
          { id: 'A', text: 'Concentración máxima de 40 mEq/L y velocidad no superior a 10 a 20 mEq/hora' },
          { id: 'B', text: 'Concentración máxima de 100 mEq/L y velocidad no superior a 40 mEq/hora' },
          { id: 'C', text: 'Concentración máxima de 20 mEq/L y velocidad obligada de 5 mEq/día' },
          { id: 'D', text: 'Concentración máxima de 80 mEq/L administrada en bolo rápido de 5 minutos' },
          { id: 'E', text: 'Concentración de 60 mEq/L exclusivamente diluida en suero glucosado al 10%' },
        ],
        correcta: 'A',
        explicacion: 'Las directrices clínicas estandarizadas de farmacoterapia intravenosa establecen que por vía venosa periférica la concentración de cloruro de potasio (KCl) no debe sobrepasar los 40 mEq por litro de solución (para evitar el dolor intenso, espasmo vascular y flebitis química) y el ritmo de infusión no debe superar los 10 a 20 mEq por hora. Para velocidades o concentraciones mayores se requiere acceso venoso central bajo monitorización continua.',
        recTag: 'EUNACOM Julio 2020 · Reconstrucción oficial',
      },
    ],
  },

  /* ───────────────────────── 🔴 TIER 3 (4 PÁGINAS) ───────────────────────── */
  {
    id: 'nefro-11', classId: 'nefro-11', tier: 3,
    blockNum: 3, blockName: 'Trastornos del Potasio y Equilibrio Ácido-Base',
    topicLabel: '3.3', title: 'Acidosis Metabólica: Anion Gap, Brecha Osmolar y Bicarbonatoterapia',
    perfilCode: '1.09.1.001, 1.09.4.016', dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Sin garantía GES específica · Ley de Urgencias en Shock Séptico y Cetoacidosis',
    reconstrucciones: 'EUNACOM Julio 2017 (Q#22) · EUNACOM Diciembre 2018 (Q#45) · EUNACOM Julio 2021 (Q#56) · EUNACOM Diciembre 2023 (Q#19)',
    frecuencia: 'Máxima rentabilidad en EUNACOM · Fórmulas esenciales: Anion Gap, Fórmula de Winter y límites estrictos de uso de bicarbonato',
    svg: null, algoTitle: 'Algoritmo Diagnóstico del Trastorno Ácido-Base: Acidosis Metabólica',
    diagram: flow('Algoritmo Diagnóstico y Terapéutico de la Acidosis Metabólica', [
      { t: 'Acidemia Metabólica: pH < 7.35 con Bicarbonato Sérico < 22 mEq/L', s: 'Verificar compensación respiratoria con Fórmula de Winter: pCO2 esperada = 1.5 x [HCO3] + 8 ± 2', type: 'warn' },
      { k: 'split', q: 'Calcular Anion Gap Plasmático: AG = [Na+] - ([Cl-] + [HCO3-]) (VN: 8 a 12 mEq/L)',
        ll: 'ANION GAP ELEVADO (> 12 mEq/L)',
        left: { t: 'Acidosis Normoclorémica (Carga de Ácidos No Medidos)', s: 'MUDPILES / KUSSMAUL: Cetoacidosis, Uremia (ERC/IRA), Salicilatos, Metanol, Lactato, Etilenglicol', type: 'warn' },
        rl: 'ANION GAP NORMAL (8 a 12 mEq/L)',
        right: { t: 'Acidosis Hiperclorémica (Pérdida Neta de Bicarbonato)', s: 'Pérdidas Digestivas (Diarrea profusa) vs Pérdidas Renales (ATR Tipo 1, 2, 4) vs Infusión de SF 0.9%', type: 'dec' },
      },
      { k: 'split', q: '¿Cuándo Administrar Bicarbonato de Sodio Intravenoso?',
        ll: 'CRITERIO RESTRICTIVO ESTRICTO',
        left: { t: 'Indicado Únicamente si pH < 7.10 o HCO3 < 6–8 mEq/L', s: 'Meta de pH conservadora: elevar a 7.20 · Evitar sobrecarga de sodio, alcalosis paradójica e hipocalcemia', type: 'acc' },
        rl: 'ACIDOSIS LEVE A MODERADA (pH ≥ 7.15)',
        right: { t: 'Tratar la Causa Primaria de Base', s: 'Fluidos e Insulina en Cetoacidosis · Reanimación y ATB en Sepsis · Suspender metformina/tóxicos', type: 'acc' },
      },
    ]),
    contexto: 'El análisis del equilibrio ácido-base es uno de los ejercicios clínicos más estructurados y evaluados del EUNACOM. La acidosis metabólica representa una reducción primaria de la concentración de bicarbonato plasmático que desencadena una respuesta ventilatoria compensatoria inmediata (hiperventilación alveolar y respiración de Kussmaul) para disminuir la pCO2. El cálculo del Anion Gap es el divisor etiológico fundamental que separa la presencia de ácidos orgánicos anormales circulantes de la pérdida neta de bicarbonato amortiguador. En el tratamiento, la controversia del bicarbonato intravenoso es zanjada por consensos internacionales: su uso empírico liberal es dañino, reservándose para pH crítico bajo 7.10.',
    contentSections: [
      {
        subhead: '1. Diagnóstico Sistemático y Fórmula de Winter',
        paragraphs: [
          'La aproximación escalonada al trastorno ácido-base requiere cuatro pasos lógicos obligatorios: (1) Evaluar el <strong>pH sanguíneo</strong> (acidemia si pH < 7.35, alcalemia si > 7.45); (2) Identificar el <strong>componente metabólico primario</strong> ($HCO_3^- < 22\\text{ mEq/L}$); y (3) Evaluar la <strong>compensación respiratoria fisiológica</strong> mediante la <strong>Fórmula de Winter</strong>:',
          '$$pCO_{2\\text{ esperada}} = 1.5 \\times [HCO_3^-] + 8 \\pm 2$$',
          'Si la $pCO_2$ medida por gases arteriales es <strong>mayor</strong> a la calculada por la fórmula de Winter, existe un segundo trastorno concomitante: una <strong>Acidosis Respiratoria sobreagregada</strong> (falla ventilatoria o fatiga muscular); si la $pCO_2$ medida es <strong>menor</strong> a la esperada, existe una <strong>Alcalosis Respiratoria agregada</strong>.',
        ],
      },
      {
        subhead: '2. Anion Gap Plasmático y Corrección por Albúmina',
        paragraphs: [
          'El <strong>Anion Gap (AG)</strong> mide la brecha aniónica plasmática no cuantificada: $AG = [Na^+] - ([Cl^-] + [HCO_3^-])$. El valor de referencia normal es de <strong>8 a 12 mEq/L</strong> (determinado principalmente por las cargas negativas de la albúmina sérica).',
          'En presencia de hipoalbuminemia (muy frecuente en pacientes críticos, nefróticos o cirróticos), se debe <strong>corregir el Anion Gap</strong>: por cada <strong>1.0 g/dL que la albúmina descienda por debajo de 4.0 g/dL, se deben sumar 2.5 mEq/L al Anion Gap calculado</strong>. Omitir esta corrección enmascara una acidosis con anion gap elevado haciéndola pasar erróneamente por normal.',
        ],
      },
      {
        subhead: '3. Etiología: Anion Gap Elevado vs Anion Gap Normal',
        paragraphs: [
          '<strong>Acidosis con Anion Gap Elevado (> 12 mEq/L, Normoclorémica):</strong> Ocurre por acumulación de ácidos endógenos o exógenos cuyos aniones desplazan al bicarbonato sin aumentar el cloro. Mnemotecnia clásica <strong>KUSSMAUL / MUDPILES</strong>:',
          '• <strong>Ketoacidosis:</strong> Cetoacidosis diabética (acetoacetato, beta-hidroxibutirato), alcohólica y por ayuno prolongado; • <strong>Uremia:</strong> Insuficiencia renal aguda severa o ERC avanzada con retención de sulfatos y fosfatos; • <strong>Salicilatos:</strong> Intoxicación por aspirina (cursa típicamente con acidosis metabólica + alcalosis respiratoria precoz); • <strong>Metanol:</strong> Ácido fórmico con daño ocular y ceguera; • <strong>Acidosis Láctica:</strong> Shock séptico, cardiogénico o hipovolémico (hipoperfusión tisular, hiperlactatemia > 2 mmol/L), intoxicación por metformina; • <strong>Etilenglicol:</strong> Ácido oxálico con falla renal y cristales de oxalato de calcio en orina.',
          '<strong>Acidosis con Anion Gap Normal (8 a 12 mEq/L, Hiperclorémica):</strong> Ocurre cuando se pierde bicarbonato y el riñón reabsorbe cloro para conservar la electroneutralidad: • <strong>Pérdidas Digestivas de HCO3:</strong> Diarrea aguda profusa (causa más frecuente), fístulas enterocutáneas, fístula pancreática o biliar; • <strong>Pérdidas Renales de HCO3 (Acidosis Tubulares Renales):</strong> ATR Tipo 1 distal (incapacidad de secretar $H^+$, orina alcalina pH > 5.5, hipokalemia, nefrocalcinosis), ATR Tipo 2 proximal (falla de reabsorción de HCO3, hipokalemia, síndrome de Fanconi), ATR Tipo 4 (hipoaldosteronismo con <strong>hiperkalemia</strong>); • <strong>Yatrogénica:</strong> Infusión masiva de Suero Fisiológico al 0.9% por su alta concentración de cloro (154 mEq/L).',
        ],
      },
      {
        subhead: '4. Brecha Osmolar (Osmolar Gap) en Sospecha de Tóxicos',
        paragraphs: [
          'Frente a una acidosis con anion gap elevado inexplicable, se calcula la <strong>Brecha Osmolar</strong>: $Osmolar\\ Gap = Osm_{medida} - Osm_{calculada}$, donde $Osm_{calculada} = 2 \\times [Na] + [Glicemia]/18 + [BUN]/2.8$. Un valor <strong>> 10 mOsm/kg</strong> denuncia la presencia de alcoholes tóxicos no volátiles (Metanol o Etilenglicol). Ambos requieren antídotos específicos (<strong>Fomepizol o Etanol</strong>) y <strong>Hemodiálisis de urgencia</strong> para remover el tóxico.',
        ],
      },
      {
        subhead: '5. Uso Racional y Peligros de la Bicarbonatoterapia',
        paragraphs: [
          'La administración de bicarbonato de sodio intravenoso genera graves riesgos fisiopatológicos: (1) <strong>Acidosis intracelular y cerebral paradójica</strong>: el $HCO_3^-$ amortigua protones generando $CO_2$; el $CO_2$ es un gas lipofílico que cruza libremente la barrera hematoencefálica hacia las neuronas mientras que el bicarbonato no la atraviesa, acidificando catastróficamente el líquido cefalorraquídeo; (2) <strong>Hipocalcemia iónica aguda</strong> (el aumento de pH hace que la albúmina capture más calcio libre, induciendo tetania y colapso cardiovascular); (3) <strong>Sobrecarga masiva de sodio e hipervolemia</strong>.',
          'Por estas razones, los consensos nefrológicos e intensivos internacionales establecen que el bicarbonato de sodio está <strong>INDICADO ÚNICAMENTE si el pH es < 7.10 o el bicarbonato sérico es < 6 a 8 mEq/L con inestabilidad hemodinámica</strong>, o en pérdidas digestivas/renales puras de bicarbonato (ATR). En cetoacidosis diabética o acidosis láctica moderada (pH > 7.15), el tratamiento radica en la <strong>insulina y la reposición de fluidos para metabolizar el lactato/cetoácidos endógenos hacia bicarbonato natural</strong>.',
        ],
      },
    ],
    table: {
      title: 'Diagnóstico Diferencial: Acidosis Metabólica según Anion Gap',
      headers: ['Tipo de Acidosis', 'Anion Gap', 'Cloremia', 'Etiologías Principales', 'Hallazgo Distintivo'],
      rows: [
        ['Anion Gap Elevado (Normoclorémica)', '> 12 mEq/L', 'Normal', 'Acidosis láctica, Cetoacidosis, Uremia (ERC), Metanol, Etilenglicol', 'Presencia de ácidos no medidos; evaluar Brecha Osmolar'],
        ['Anion Gap Normal (Hiperclorémica) Digestiva', '8–12 mEq/L', 'Elevada (> 106)', 'Diarrea profusa, fístulas biliares o pancreáticas', 'Anion gap urinario negativo (excreción conservada de NH4+)'],
        ['Anion Gap Normal (Hiperclorémica) Renal', '8–12 mEq/L', 'Elevada (> 106)', 'Acidosis Tubular Renal (ATR 1 distal, ATR 2 proximal, ATR 4)', 'Anion gap urinario positivo (defecto de excreción tubular)'],
        ['Yatrogénica por Expansión', '8–12 mEq/L', 'Elevada (> 110)', 'Infusión de grandes volúmenes de Suero Fisiológico al 0.9%', 'Cloro 154 mEq/L en solución salina desplaza al bicarbonato'],
      ],
    },
    treatmentTable: {
      title: 'Conducta Terapéutica Escalonada en Acidosis Metabólica',
      headers: ['Severidad del Cuadro', 'Parámetros Gasométricos', 'Intervención de Elección', 'Objetivo Clínico'],
      rows: [
        ['Acidosis Leve a Moderada', 'pH 7.20–7.34 · HCO3 12–21 mEq/L', 'Tratar etiología primaria (expansión, insulina, soporte)', 'Revertir causa sin usar bicarbonato'],
        ['Acidosis Crítica con Inestabilidad', 'pH < 7.10 · HCO3 < 6–8 mEq/L', 'Bicarbonato de Sodio 2/3 Molar en infusión lenta controlada', 'Llevar pH a meta segura de 7.20 (no normalizar)'],
        ['Acidosis Tubular Renal Crónica', 'pH 7.25–7.35 · Bicarbonaturia', 'Bicarbonato de sodio o Citrato de potasio vía oral', 'Prevenir osteomalacia, raquitismo y nefrocalcinosis'],
        ['Intoxicación por Metanol / Etilenglicol', 'AG elevado + Brecha Osmolar > 10', 'Fomepizol o Etanol IV + Hemodiálisis urgente', 'Eliminar alcohol tóxico antes de lesión orgánica'],
      ],
    },
    vignette: 'Hombre de 24 años con diabetes mellitus tipo 1 en tratamiento con insulina basal-bolo suspende su tratamiento hace 48 horas por cuadro gastrointestinal. Ingresa a la urgencia estuporoso, taquipneico con respiración profunda y rápida (FR 34 rpm, respiración de Kussmaul), aliento cetónico, PA 95/60 mmHg, FC 122 lpm, mucosas secas y turgencia disminuida. Gases arteriales: pH 7.12, pCO2 16 mmHg, pO2 95 mmHg, Bicarbonato 5 mEq/L, Exceso de base -22. Laboratorio: Glicemia 480 mg/dL, Sodio plasmático 134 mEq/L, Cloro 98 mEq/L, Potasio 5.2 mEq/L, Cetonemia 5.8 mmol/L.',
    explicacion: 'El paciente presenta una Cetoacidosis Diabética (CAD) severa manifestada por acidemia grave (pH 7.12, HCO3 5 mEq/L) con Anion Gap elevado: AG = 134 - (98 + 5) = 31 mEq/L (> 12). La compensación respiratoria esperada según Winter es: pCO2 = (1.5 x 5) + 8 ± 2 = 13.5 a 17.5 mmHg; como su pCO2 medida es de 16 mmHg, la compensación ventilatoria es pura y adecuada (respiración de Kussmaul). El pilar del tratamiento es la resucitación agresiva con cristaloides isotónicos (SF 0.9% o Ringer Lactato) e infusión continua de Insulina Rápida a 0.1 U/kg/h. A pesar del pH de 7.12, NO se indica bicarbonato de sodio de rutina, ya que la insulina frena la lipólisis y metaboliza los cetoácidos circulantes restaurando el bicarbonato endógeno.',
    keyPoints: [
      'Acidosis metabólica: descenso de pH y bicarbonato; la compensación respiratoria esperada se calcula con la Fórmula de Winter: pCO2 = 1.5 x [HCO3] + 8 ± 2.',
      'Anion Gap plasmático: AG = [Na] - ([Cl] + [HCO3]). Normal entre 8 y 12 mEq/L.',
      'Corregir siempre el AG en hipoalbuminemia: sumar 2.5 mEq/L al AG por cada 1 g/dL de albúmina bajo 4.0 g/dL.',
      'Acidosis con AG elevado: KUSSMAUL / MUDPILES (Cetoacidosis, Uremia, Salicilatos, Metanol, Lactato, Etilenglicol).',
      'Acidosis con AG normal (hiperclorémica): pérdidas digestivas de bicarbonato (diarrea), ATR y aporte masivo de SF 0.9%.',
      'Brecha Osmolar > 10 mOsm/kg en acidosis con AG elevado confirma intoxicación por alcoholes tóxicos (metanol o etilenglicol) y exige hemodiálisis.',
      'Bicarbonato intravenoso: reservado estrictamente para pH < 7.10 o HCO3 < 6–8 mEq/L con inestabilidad; su uso liberal produce acidosis intracelular paradójica e hipocalcemia.',
    ],
    questions: [
      {
        stem: 'Hombre de 66 años con antecedentes de enfermedad renal crónica estadio G3b (filtrado glomerular estimado de 35 mL/min, creatinina basal 1.8 mg/dL) se realiza exámenes de control ambulatorio en policlínico. El perfil bioquímico muestra: Sodio 138 mEq/L, Cloro 104 mEq/L, Potasio 4.8 mEq/L, Bicarbonato sérico 16 mEq/L. El Anion Gap calculado es de 10 mEq/L (rango normal 8–12). ¿Cuál es la causa fisiopatológica más probable de este trastorno ácido-base?',
        options: [
          { id: 'A', text: 'Acumulación desproporcionada de aniones orgánicos no medidos' },
          { id: 'B', text: 'Disminución de la síntesis renal de amonio y retención compensatoria de cloro (anion gap normal)' },
          { id: 'C', text: 'Cetoacidosis por resistencia periférica a la insulina' },
          { id: 'D', text: 'Depósito tisular de ácido úrico por hiperuricemia secundaria' },
          { id: 'E', text: 'Intoxicación medicamentosa inadvertida por AINEs' },
        ],
        correcta: 'B',
        explicacion: 'En las etapas intermedias de la Enfermedad Renal Crónica (estadios G3 a G4 con TFG entre 20 y 45 mL/min), la acidosis metabólica característica es típicamente con Anion Gap Normal (hiperclorémica). Esto se debe a que la reducción de la masa de nefronas funcionantes disminuye la amoniagénesis tubular proximal (síntesis de buffer amonio NH4+), limitando la excreción neta de protones mientras el riñón reabsorbe cloro para mantener la electroneutralidad. La acidosis con Anion Gap Elevado solo aparece en etapas terminales (G5 o TFG < 15 mL/min) cuando se acumulan fosfatos, sulfatos y uratos.',
        recTag: 'EUNACOM Julio 2017 · Reconstrucción oficial',
      },
      {
        stem: 'Mujer de 19 años es traída a la urgencia tras ingerir una sustancia desconocida en intento de autolisis. Se encuentra con compromiso de conciencia, taquipneica y con visión borrosa refiere ver "como en una tormenta de nieve". Exámenes: Gases arteriales muestran pH 7.10, HCO3 7 mEq/L, pCO2 18 mmHg. Sodio 140 mEq/L, Cloro 96 mEq/L, Glicemia 90 mg/dL, BUN 14 mg/dL. Osmolaridad plasmática medida por laboratorio: 330 mOsm/kg. ¿Cuál es el diagnóstico toxicológico más probable?',
        options: [
          { id: 'A', text: 'Intoxicación por monóxido de carbono' },
          { id: 'B', text: 'Intoxicación por metanol' },
          { id: 'C', text: 'Intoxicación por paracetamol' },
          { id: 'D', text: 'Sobredosis de benzodiacepinas' },
          { id: 'E', text: 'Intoxicación por insecticidas organofosforados' },
        ],
        correcta: 'B',
        explicacion: 'La paciente presenta una acidosis metabólica severa con Anion Gap marcadamente elevado: AG = 140 - (96 + 7) = 37 mEq/L. Calculando la osmolaridad plasmática: 2 x 140 + 90/18 + 14/2.8 = 280 + 5 + 5 = 290 mOsm/kg. La Brecha Osmolar (Osmolar Gap) es: 330 - 290 = 40 mOsm/kg (muy superior al valor normal de 10 mOsm/kg), lo que certifica la presencia de un alcohol de bajo peso molecular. La queja de visión borrosa "en tormenta de nieve" con hiperemia de papila óptica es patognomónica de la toxicidad ocular del ácido fórmico, metabolito tóxico del Metanol. Requiere Fomepizol o etanol y hemodiálisis urgente.',
        recTag: 'EUNACOM Diciembre 2018 · Reconstrucción oficial',
      },
      {
        stem: 'Hombre de 58 años en shock séptico de foco pulmonar ingresa a UCI conectado a ventilación mecánica. Los gases arteriales de control muestran: pH 7.22, HCO3 10 mEq/L. Según la fórmula de Winter, ¿cuál es el valor de pCO2 esperado para considerar que la compensación ventilatoria es apropiada y que no existe un trastorno respiratorio sobreagregado?',
        options: [
          { id: 'A', text: '12 a 16 mmHg' },
          { id: 'B', text: '21 a 25 mmHg' },
          { id: 'C', text: '35 a 45 mmHg' },
          { id: 'D', text: '28 a 32 mmHg' },
          { id: 'E', text: '40 a 48 mmHg' },
        ],
        correcta: 'B',
        explicacion: 'La fórmula de Winter predice la pCO2 compensatoria en acidosis metabólica: pCO2 = 1.5 x [HCO3] + 8 ± 2. Con un bicarbonato de 10 mEq/L: 1.5 x 10 = 15; sumando 8 da 23 mmHg. El rango de compensación respiratoria fisiológica pura es de 21 a 25 mmHg. Si la pCO2 fuera mayor a 25 mmHg se diagnosticaría acidosis respiratoria concomitante; si fuera menor a 21 mmHg, alcalosis respiratoria asociada.',
        recTag: 'EUNACOM Julio 2021 · Reconstrucción oficial',
      },
      {
        stem: '¿Cuál de las siguientes es una indicación precisa y justificada para la administración de bicarbonato de sodio intravenoso en un paciente con acidosis metabólica aguda?',
        options: [
          { id: 'A', text: 'Cetoacidosis diabética con pH de 7.25 y bicarbonato de 14 mEq/L' },
          { id: 'B', text: 'Acidosis metabólica severa con pH menor a 7.10 e inestabilidad hemodinámica' },
          { id: 'C', text: 'Acidosis láctica por shock séptico con pH de 7.20 en paciente normotenso' },
          { id: 'D', text: 'Para corregir de forma rápida el anion gap en insuficiencia renal leve' },
          { id: 'E', text: 'En todo paro cardiorrespiratorio al inicio de las maniobras de RCP' },
        ],
        correcta: 'B',
        explicacion: 'El consenso de las guías internacionales (Surviving Sepsis Campaign, guías KDIGO y ADA) reserva el uso de bicarbonato de sodio intravenoso exclusivamente para situaciones críticas con pH sanguíneo < 7.10 o bicarbonato < 6 a 8 mEq/L refractario, especialmente cuando condiciona inestabilidad hemodinámica o refractariedad a vasopresores. En pH > 7.15 (como en las opciones A y C), el bicarbonato no mejora la supervivencia y conlleva graves riesgos de acidosis intracelular paradójica, hipocalcemia y sobrecarga de volumen.',
        recTag: 'EUNACOM Diciembre 2023 · Reconstrucción oficial',
      },
    ],
  },

  /* ───────────────────────── 🟡 TIER 2 (2 PÁGINAS) ───────────────────────── */
  {
    id: 'nefro-12', classId: 'nefro-12', tier: 2,
    blockNum: 3, blockName: 'Trastornos del Potasio y Equilibrio Ácido-Base',
    topicLabel: '3.4', title: 'Alcalosis Metabólica y Trastornos Ácido-Base Mixtos',
    perfilCode: '1.09.2.008, 1.09.4.016', dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Sin garantía GES específica',
    reconstrucciones: 'EUNACOM Julio 2016 (Q#71) · EUNACOM Diciembre 2021 (Q#34)',
    frecuencia: 'Media en EUNACOM · Evaluación del Cloro Urinario para clasificar alcalosis sensible vs resistente a volumen',
    svg: null, algoTitle: 'Algoritmo Diagnóstico de la Alcalosis Metabólica',
    diagram: flow('Enfrentamiento de la Alcalosis Metabólica según Cloro Urinario', [
      { t: 'Alcalemia Metabólica: pH > 7.45 con Bicarbonato Sérico > 28 mEq/L', s: 'Compensación respiratoria: hipoventilación alveolar (pCO2 esperada = 0.7 x [HCO3 - 24] + 40 ± 2)', type: 'warn' },
      { k: 'split', q: 'Medir Cloro Urinario (Clu): ¿Es Sensible o Resistente a Volumen?',
        ll: 'CLORO URINARIO < 20 mEq/L (SENSIBLE A CLORO)',
        left: { t: 'Alcalosis Hipovolémica / Depleción de Cloro', s: 'Vómitos repetidos, aspiración nasogástrica, uso previo de diuréticos · Tx: Suero Fisiológico 0.9% IV', type: 'acc' },
        rl: 'CLORO URINARIO > 20 mEq/L (RESISTENTE A CLORO)',
        right: { t: 'Alcalosis con Normo/Hipervolemia o Fuga Renal', s: 'Hiperaldosteronismo primario (Conn), Cushing, HTA renovascular, hipokalemia severa · Tx: Espironolactona', type: 'warn' },
      },
    ]),
    contexto: 'La alcalosis metabólica ($pH > 7.45$, $[HCO_3^-] > 28\\text{ mEq/L}$) requiere para su perpetuación tanto un factor generador (pérdida de protones o ganancia de bicarbonato) como un factor de mantenimiento renal (depleción de volumen, hipocloremia o hipokalemia) que impida al riñón excretar el exceso de bicarbonato. La medición del Cloro Urinario es el examen clave que discrimina si la alcalosis revertirá con la simple expansión con Suero Fisiológico al 0.9% (alcalosis sensible a cloro) o si se debe a un exceso autónomo de mineralocorticoides (resistente a cloro).',
    contentSections: [
      {
        subhead: '1. Mecanismos Fisiopatológicos y Compensación Respiratoria',
        paragraphs: [
          'La alcalosis metabólica genera hipoventilación compensatoria por supresión de los quimiorreceptores del tronco cerebral, elevando la $pCO_2$ alveolar: $\\Delta pCO_2 = 0.7 \\times \\Delta [HCO_3^-]$. La hipoventilación compensatoria rara vez eleva la $pCO_2$ más allá de <strong>55 mmHg</strong> debido a que el estímulo hipóxico periférico frena la hipoventilación para preservar la oxigenación.',
          'Sus consecuencias clínicas incluyen: disminución del calcio ionizado por mayor afinidad con la albúmina (desencadenando <strong>parestesias, irritabilidad neuromuscular, signos de Chvostek y Trousseau positivos y tetania</strong>), hipokalemia por redistribución y arritmias cardíacas.',
        ],
      },
      {
        subhead: '2. Clasificación por Cloro Urinario: Sensible vs Resistente',
        paragraphs: [
          'El examen diagnóstico de elección en la orina es el <strong>Cloro Urinario ($Cl_u$)</strong>:',
          '(1) <strong>Alcalosis Sensible a Cloro / Salino-responsiva ($Cl_u < 20\\text{ mEq/L}$):</strong> Representa estados de depleción de volumen extracelular e hipocloremia. La causa estelar son las <strong>pérdidas gástricas de ácido clorhídrico</strong> (vómitos a repetición, estenosis pilórica, sonda nasogástrica descompresiva abierta) y el <strong>uso reciente de diuréticos tiazídicos o de asa</strong> tras suspenderlos. Tratamiento: <strong>expansión de volumen con Suero Fisiológico al 0.9% y reposición de KCl</strong>.',
          '(2) <strong>Alcalosis Resistente a Cloro / Salino-resistente ($Cl_u > 20\\text{ mEq/L}$):</strong> Cursa con volumen extracelular normal o expandido y presión arterial elevada por exceso autónomo de mineralocorticoides: <strong>Hiperaldosteronismo Primario (Síndrome de Conn)</strong>, <strong>Síndrome de Cushing</strong> o <strong>Estenosis de arteria renal</strong>; o bien con PA normal en tubulopatías genéticas congénitas (síndromes de Bartter y Gitelman). Tratamiento: <strong>antagonistas de aldosterona (Espironolactona)</strong> o corrección etiológica quirúrgica.',
        ],
      },
    ],
    table: {
      title: 'Diagnóstico Diferencial de la Alcalosis Metabólica según Cloro Urinario',
      headers: ['Categoría Diagnóstica', 'Cloro Urinario (Clu)', 'Presión Arterial / Volemia', 'Causas y Tratamiento'],
      rows: [
        ['Sensible a Cloro (Salino-responsiva)', '< 20 mEq/L', 'Hipotensión, deshidratación, VEC bajo', 'Vómitos, aspiración nasogástrica, diuréticos pasados · Tx: SF 0.9%'],
        ['Resistente a Cloro (Salino-resistente) con HTA', '> 20 mEq/L', 'Hipertensión arterial, VEC normal/alto', 'Hiperaldosteronismo primario, adenoma suprarrenal · Tx: Espironolactona'],
        ['Resistente a Cloro con PA Normal', '> 20 mEq/L', 'Normotensión arterial', 'Síndrome de Bartter (asa), Síndrome de Gitelman (distal) · Tx: Suplementos K/Mg'],
      ],
    },
    vignette: 'Hombre de 38 años con antecedente de úlcera péptica duodenal estenosante consulta por cuadro de 5 días de vómitos alimentarios y biliosos profusos tras cada ingesta, asociado a marcada debilidad muscular y calambres periorales. Al examen físico: adelgazado, mucosas muy secas, PA 95/60 mmHg con ortostatismo positivo, FC 110 lpm. Exámenes de laboratorio: pH 7.54, pCO2 48 mmHg, Bicarbonato 42 mEq/L, Sodio sérico 135 mEq/L, Cloro sérico 82 mEq/L, Potasio 2.6 mEq/L. Cloro urinario: 8 mEq/L.',
    explicacion: 'El paciente presenta una Alcalosis Metabólica Severa Hipoclorémica e Hipokalémica secundaria a vómitos a repetición por síndrome pilórico. La pérdida masiva de ácido clorhídrico (HCl) gástrico deja un exceso de bicarbonato no amortiguado en sangre. La hipocloremia y la contracción de volumen impiden al riñón eliminar el bicarbonato, ya que la aldosterona activada reabsorbe sodio a expensas de secretar protones y potasio en la orina (paradoja de aciduria paradójica). El Cloro Urinario < 20 mEq/L (en este caso 8 mEq/L) certifica que se trata de un trastorno sensible a cloro. La conducta prioritaria es la infusión intravenosa generosa de Suero Fisiológico al 0.9% con cloruro de potasio (KCl) para restaurar el cloro plasmático y la volemia.',
    keyPoints: [
      'Alcalosis metabólica: elevación primaria de bicarbonato (> 28 mEq/L) y pH > 7.45 con hipoventilación compensatoria.',
      'Cloro urinario < 20 mEq/L define alcalosis sensible a salino: vómitos, sonda nasogástrica, diuréticos; responde a Suero Fisiológico 0.9%.',
      'Cloro urinario > 20 mEq/L con hipertensión define alcalosis resistente a salino: sospechar hiperaldosteronismo primario (Conn).',
      'La alcalosis metabólica severa reduce el calcio ionizado circulante, desencadenando parestesias, tetania y signo de Chvostek/Trousseau.',
      'Para curar la alcalosis metabólica sensible a cloro es imprescindible administrar Cloro (aportado en Suero Fisiológico al 0.9% y KCl).',
    ],
    questions: [
      {
        stem: 'Mujer de 42 años ingresa a urgencias con debilidad muscular severa, espasmos carpopedales involuntarios y parestesias periorales tras una semana de vómitos reiterados por gastroparesia. Gases arteriales muestran pH 7.56, HCO3 40 mEq/L, pCO2 46 mmHg. Sodio 136 mEq/L, Cloro 80 mEq/L, Potasio 2.7 mEq/L. Cloro urinario resulta en 6 mEq/L. ¿Cuál es el tratamiento de elección para corregir el trastorno ácido-base?',
        options: [
          { id: 'A', text: 'Infusión de ácido clorhídrico 0.1 N por vía venosa central' },
          { id: 'B', text: 'Administración de Suero Fisiológico al 0.9% con Cloruro de Potasio intravenoso' },
          { id: 'C', text: 'Acetazolamida intravenosa en bolo' },
          { id: 'D', text: 'Infusión continua de Suero Glucosado al 5% con bicarbonato' },
          { id: 'E', text: 'Espironolactona oral a dosis altas' },
        ],
        correcta: 'B',
        explicacion: 'La paciente presenta una alcalosis metabólica salino-responsiva (sensible a cloro) clásica inducida por vómitos, con cloro urinario suprimido (< 20 mEq/L, en este caso 6 mEq/L), hipocloremia profunda e hipokalemia. El tratamiento de elección consiste en expandir el volumen extracelular y aportar cloro mediante la administración de Suero Fisiológico al 0.9% suplementado con Cloruro de Potasio (KCl). El aporte de cloro permite al cotransportador pendrina del túbulo colector intercambiar bicarbonato luminal por cloro, eliminando el bicarbonato en la orina y normalizando el pH de manera rápida y segura.',
        recTag: 'EUNACOM Julio 2016 · Reconstrucción oficial',
      },
      {
        stem: 'Hombre de 48 años con hipertensión arterial de difícil control refractaria a 3 fármacos en dosis plenas consulta por astenia y calambres. En sus exámenes destaca: PA 175/105 mmHg, Sodio 144 mEq/L, Potasio 2.9 mEq/L, Bicarbonato 34 mEq/L, pH 7.48. El cloro urinario es de 48 mEq/L. No toma diuréticos ni presenta edemas. ¿Cuál es la sospecha diagnóstica más probable?',
        options: [
          { id: 'A', text: 'Hiperaldosteronismo primario (adenoma suprarrenal productor de aldosterona)' },
          { id: 'B', text: 'Vómitos psicógenos subrepticios con deshidratación' },
          { id: 'C', text: 'Síndrome de Bartter del adulto' },
          { id: 'D', text: 'Insuficiencia suprarrenal primaria' },
          { id: 'E', text: 'Nefropatía pierde sal con hipovolemia' },
        ],
        correcta: 'A',
        explicacion: 'La combinación de hipertensión arterial resistente de inicio en adulto joven o medio, hipokalemia espontánea persistente y alcalosis metabólica con Cloro Urinario elevado (> 20 mEq/L, salino-resistente) es el cuadro arquetípico del Hiperaldosteronismo Primario (Síndrome de Conn). La secreción autónoma de aldosterona estimula de forma incesante los canales ENaC y las bombas H+-ATPasa en el túbulo colector cortical, forzando la excreción masiva de potasio y protones mientras retiene sodio y expande el volumen extracelular provocando hipertensión arterial.',
        recTag: 'EUNACOM Diciembre 2021 · Reconstrucción oficial',
      },
    ],
  },
];

module.exports = { bloque3 };
