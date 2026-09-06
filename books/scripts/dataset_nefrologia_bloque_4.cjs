/**
 * DATASET · Nefrología — Bloque 4: Síndromes Glomerulares y Nefropatías Médicas
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

const bloque4 = [
  /* ───────────────────────── 🔴 TIER 3 (4 PÁGINAS) ───────────────────────── */
  {
    id: 'nefro-13', classId: 'nefro-13', tier: 3,
    blockNum: 4, blockName: 'Síndromes Glomerulares y Nefropatías Médicas',
    topicLabel: '4.1', title: 'Síndrome Nefrótico y Complicaciones Trombóticas',
    perfilCode: '1.09.1.022, 1.09.4.016', dx: 'Específico', tx: 'Inicial', seg: 'Completo',
    ges: 'Garantía GES en ERC etapa 4–5 si evoluciona a daño renal crónico',
    reconstrucciones: 'EUNACOM Julio 2017 (Q#66) · EUNACOM Diciembre 2019 (Q#41) · EUNACOM Julio 2021 (Q#18) · EUNACOM Diciembre 2022 (Q#83)',
    frecuencia: 'Máxima rentabilidad en EUNACOM · Criterios diagnósticos, biopsia renal en el adulto y trombosis venosa/TEP',
    svg: null, algoTitle: 'Algoritmo Diagnóstico y Manejo del Síndrome Nefrótico',
    diagram: flow('Algoritmo de Diagnóstico y Manejo del Síndrome Nefrótico en el Adulto', [
      { t: 'Tríada Clásica: Edema Blando + Proteinuria > 3.5 g/24 h + Hipoalbuminemia < 3.0 g/dL', s: 'Asociado a dislipidemia mixta y lipiduria (cuerpos ovales grasos y cruces de Malta)', type: 'warn' },
      { k: 'split', q: '¿Cuál es la Conducta Diagnóstica de Elección en el Adulto?',
        ll: 'Paciente Adulto (Regla General)',
        left: { t: 'Biopsia Renal Percutánea Obligatoria', s: 'Permite tipificación histológica (Membranosa vs GEFS vs Amiloidosis) · Guiar inmunosupresión', type: 'acc' },
        rl: 'Excepciones a la Biopsia Renal',
        right: { t: 'Nefropatía Diabética Típica o Niños < 10 Años', s: 'Diabético de larga data con retinopatía / En niños se asume Cambios Mínimos e inicia corticoides', type: 'dec' },
      },
      { k: 'split', q: '¿Albúmina Sérica < 2.0 a 2.5 g/dL (Alto Riesgo Trombótico)?',
        ll: 'Albúmina < 2.0–2.5 g/dL (Especialmente en Nefropatía Membranosa)',
        left: { t: 'Anticoagulación Profiláctica con HBPM o Warfarina', s: 'Pérdida urinaria de Antitrombina III · Alto riesgo de Trombosis de Vena Renal y TEP masivo', type: 'warn' },
        rl: 'Manejo Antiproteinúrico y de Soporte Basal',
        right: { t: 'IECA / ARA-II + Furosemida + Estatinas', s: 'Reducir presión intraglomerular · Control estricto de sobrecarga hídrica y dislipidemia', type: 'acc' },
      },
    ]),
    contexto: 'El síndrome nefrótico es la expresión clínica del daño a la barrera de filtración glomerular, en particular de los podocitos y sus pedicelos diafragmáticos. La proteinuria masiva (> 3.5 g/24 h) desata una cascada de alteraciones sistémicas: la hipoalbuminemia reduce la presión oncótica plasmática favoreciendo el edema blando periorbitario y maleolar; el hígado responde con una síntesis acelerada de apolipoproteínas generando hipercolesterolemia grave; y la pérdida urinaria de factores anticoagulantes naturales como la Antitrombina III condiciona un estado protrombótico extremo. En el adulto, la biopsia renal es la regla de oro diagnóstica.',
    contentSections: [
      {
        subhead: '1. Criterios Diagnósticos Definitorios',
        paragraphs: [
          'El diagnóstico formal de <strong>Síndrome Nefrótico</strong> exige la coexistencia de: (1) <strong>Proteinuria en rango nefrótico</strong>: excreción urinaria <strong>> 3.5 gramos en orina de 24 horas</strong> (o un Índice Proteinuria/Creatininuria en orina de muestra aislada <strong>IPC > 3.0–3.5 mg/mg</strong>); y (2) <strong>Hipoalbuminemia severa</strong>: albúmina plasmática <strong>< 3.0 g/dL</strong>.',
          'Elementos acompañantes característicos son: (3) <strong>Edema blando con fóvea</strong> (inicia turgente y matinal en párpados y cara, haciéndose vespertino y gravitacional en miembros inferiores y sacro, pudiendo progresar a anasarca con ascitis y derrame pleural); (4) <strong>Dislipidemia mixta</strong> (colesterol total frecuentemente > 350–400 mg/dL por hiperproducción hepática de VLDL/LDL); y (5) <strong>Lipiduria</strong> en el sedimento de orina, con presencia de <strong>cuerpos ovales grasos y "gotas de grasa" que muestran la clásica imagen en Cruz de Malta bajo luz polarizada</strong>.',
        ],
      },
      {
        subhead: '2. Estado de Hipercoagulabilidad y Trombosis',
        paragraphs: [
          'El síndrome nefrótico es un estado marcadamente <strong>protrombótico</strong> mediado por múltiples desbalances hemostáticos: se produce una <strong>pérdida masiva por orina de Antitrombina III (AT-III)</strong>, proteína C y proteína S, sumado a una síntesis hepática aumentada de fibrinógeno, factor V y factor VIII, y agregabilidad plaquetaria incrementada.',
          'La complicación tromboembólica más frecuente y temida es la <strong>Trombosis de la Vena Renal (TVR)</strong> (ocurre hasta en el 30% de los pacientes con <strong>Nefropatía Membranosa</strong>), que puede ser insidiosa o presentarse con dolor lumbar agudo, hematuria macroscópica brusca y <strong>varicocele izquierdo de inicio reciente que no desaparece en decúbito</strong> (debido a que la vena espermática izquierda drena directamente en la vena renal izquierda). Otra complicación mayor es el <strong>Tromboembolismo Pulmonar (TEP)</strong>.',
          'En pacientes con nefropatía membranosa y <strong>albúmina sérica < 2.0 a 2.5 g/dL</strong>, está formalmente indicada la <strong>anticoagulación profiláctica</strong> con heparina de bajo peso molecular o antagonistas de vitamina K.',
        ],
      },
      {
        subhead: '3. Indicación de Biopsia Renal Percutánea',
        paragraphs: [
          'A diferencia del paciente pediátrico (donde el 90% corresponde a Enfermedad por Cambios Mínimos y se inicia tratamiento empírico con corticoides sin biopsiar), <strong>EN TODO ADULTO CON SÍNDROME NEFRÓTICO PRIMARIO LA BIOPSIA RENAL ES OBLIGATORIA</strong>.',
          'La biopsia permite el diagnóstico histopatológico de certeza (Nefropatía Membranosa, Glomeruloesclerosis Focal y Segmentaria, Cambios Mínimos, Amiloidosis o Glomerulonefritis Membranoproliferativa) y define la pauta de inmunosupresión. <strong>Excepciones a la biopsia en el adulto</strong>: paciente con diabetes de larga data (> 10–15 años) con nefropatía diabética típica y retinopatía diabética proliferativa concordante; o diagnóstico ya establecido de amiloidosis sistémica mediante biopsia de grasa subcutánea o glándula salival menor.',
        ],
      },
      {
        subhead: '4. Susceptibilidad Infecciosa',
        paragraphs: [
          'Los pacientes nefróticos sufren una inmunodeficiencia humoral adquirida por la <strong>pérdida urinaria de Inmunoglobulina G (IgG)</strong> y de factores de la vía alternativa del complemento (factor B). Presentan una susceptibilidad dramática a infecciones bacterianas por gérmenes encapsulados, especialmente <strong>Streptococcus pneumoniae</strong> (neumococo). La <strong>Peritonitis Bacteriana Espontánea (PBE) por neumococo</strong> en el líquido ascítico y la celulitis por estreptococo son complicaciones clásicas.',
        ],
      },
      {
        subhead: '5. Tratamiento de Soporte y Antiproteinúrico',
        paragraphs: [
          'El manejo médico de base incluye: (1) <strong>Control del edema</strong>: restricción de sodio (< 2 g/día) y diuréticos de asa (Furosemida intravenosa u oral), en ocasiones combinada con tiazidas o espironolactona para bloqueo secuencial de la nefrona; (2) <strong>Reducción de la proteinuria y protección renal</strong>: uso imperativo de <strong>bloqueadores del SRAA (IECA o ARA-II)</strong> titulados a la dosis máxima tolerada para inducir vasodilatación de la arteriola eferente y reducir la presión intraglomerular; asociados a <strong>iSGLT2</strong>; y (3) <strong>Estatinas</strong> para el control agresivo de la hipercolesterolemia.',
        ],
      },
    ],
    table: {
      title: 'Principales Glomerulopatías Causantes de Síndrome Nefrótico en el Adulto',
      headers: ['Glomerulopatía', 'Frecuencia / Edad Típica', 'Histología / Inmunofluorescencia', 'Asociaciones Clínicas y Tratamiento'],
      rows: [
        ['Nefropatía Membranosa', 'Causa #1 en adultos > 50–60 años (30–40%)', 'Engrosamiento difuso de MBG con espículas (spikes) · IgG y C3 granular', 'Anti-PLA2R (+) en 75% · Cáncer oculto, VHB, AINEs · Tx: Rituximab o Ciclosporina'],
        ['Glomeruloesclerosis Focal Segmentaria (GEFS)', 'Frecuente en adultos jóvenes y raza negra', 'Esclerosis y sinequias en porciones de algunos glomérulos', 'VIH (variante colapsante), obesidad mórbida, reflujo · Pobre respuesta a corticoides'],
        ['Enfermedad por Cambios Mínimos', '10–15% de adultos (90% en niños)', 'Óptica normal · Borramiento difuso de pedicelos en microscopía electrónica', 'Linfoma de Hodgkin, AINEs · Respuesta rápida y excelente a Prednisona'],
        ['Amiloidosis Renal (AL / AA)', 'Adultos mayores (> 65 años)', 'Depósito amorfo acelular Rojo Congo (+) con birrefringencia verde manzana', 'Mieloma múltiple, gammapatía monoclonal, infecciones crónicas · Tx: Quimioterapia'],
      ],
    },
    treatmentTable: {
      title: 'Protocolo Integral de Soporte y Complicaciones en Síndrome Nefrótico',
      headers: ['Objetivo Terapéutico', 'Fármacos / Intervención de Elección', 'Meta Clínica / Parámetro de Seguridad'],
      rows: [
        ['Descongestión del Edema', 'Furosemida 40–80 mg/día + Restricción de sal (< 2 g/día)', 'Pérdida de peso de 0.5 a 1.0 kg/día sin deterioro de función renal'],
        ['Nefroprotección Antiproteinúrica', 'IECA (Enalapril) o ARA-II (Losartán) + iSGLT2 (Dapagliflozina)', 'Reducir proteinuria a < 0.5–1.0 g/día y PA < 130/80 mmHg'],
        ['Profilaxis Antitrombótica', 'Heparina de Bajo Peso Molecular (HBPM) o Anticoagulantes Orales', 'Indicada si Albúmina sérica < 2.0–2.5 g/dL en Nefropatía Membranosa'],
        ['Profilaxis Infecciosa', 'Vacunación antineumocócica (conjugada 13V + polisacárida 23V) + Influenza', 'Aplicar antes de iniciar inmunosupresión sistémica mayor'],
      ],
    },
    vignette: 'Hombre de 64 años, fumador, consulta por edema bilateral de miembros inferiores de 3 semanas de evolución, que asciende hasta los muslos, acompañado de orinas muy espumosas y aumento de 6 kg de peso corporal. Al examen físico: PA 130/80 mmHg, edema bimaleolar blando +++, sin estigmas de hepatopatía crónica ni lesiones cutáneas. Exámenes de laboratorio: Albúmina plasmática 2.1 g/dL, Colesterol total 420 mg/dL, Triglicéridos 360 mg/dL, Creatinina 0.9 mg/dL, BUN 18 mg/dL. Orina completa: proteinuria ++++, sedimento con 2 eritrocitos por campo y abundantes cuerpos ovales grasos con cruces de Malta. Proteinuria cuantificada en orina de 24 horas: 8.6 gramos.',
    explicacion: 'El paciente presenta un Síndrome Nefrótico Puro en el adulto (proteinuria masiva de 8.6 g/24 h, hipoalbuminemia profunda de 2.1 g/dL, hiperlipidemia severa y lipiduria patognomónica con cruces de Malta). En un varón de 64 años sin diabetes previa, la causa primaria más frecuente es la Nefropatía Membranosa (a menudo asociada a autoanticuerpos anti-PLA2R). La conducta mandatoria para certificar la etiología y planificar el tratamiento es realizar una Biopsia Renal Percutánea. Además, dado el nivel de albúmina plasmática de 2.1 g/dL, el paciente tiene un riesgo inminente de complicaciones tromboembólicas (trombosis de vena renal o TEP), requiriendo evaluación para anticoagulación profiláctica.',
    keyPoints: [
      'Tríada definitoria de Síndrome Nefrótico: Proteinuria > 3.5 g/24 h + Hipoalbuminemia < 3.0 g/dL + Edema blando.',
      'Acompañantes universales: hipercolesterolemia grave (> 350 mg/dL) y lipiduria con cuerpos ovales grasos en "Cruz de Malta".',
      'En todo adulto con síndrome nefrótico primario la Biopsia Renal Percutánea es obligatoria para definir diagnóstico y tratamiento.',
      'Estado de hipercoagulabilidad severo por pérdida de Antitrombina III urinaria: riesgo de Trombosis de Vena Renal y TEP.',
      'Varicocele izquierdo agudo que no se reduce en decúbito orienta a Trombosis de Vena Renal izquierda.',
      'Anticoagulación profiláctica indicada si albúmina sérica cae < 2.0 a 2.5 g/dL (particularmente en Nefropatía Membranosa).',
      'Susceptibilidad aumentada a bacterias encapsuladas (Streptococcus pneumoniae) por pérdida urinaria de IgG y factor B.',
      'Manejo antiproteinúrico fundamental: IECA o ARA-II para reducir la presión intraglomerular dilatando la arteriola eferente.',
    ],
    questions: [
      {
        stem: 'Hombre de 65 años con síndrome nefrótico en estudio con proteinuria de 24 horas de 6.5 gramos y albúmina sérica de 2.0 g/dL presenta dolor torácico súbito de tipo pleurítico, disnea y taquipnea. Al examen físico: saturación de oxígeno 88% aire ambiental, FC 115 lpm, PA 110/70 mmHg. La auscultación pulmonar no revela estertores patológicos significativos. ¿Cuál es la complicación aguda más probable de su cuadro renal?',
        options: [
          { id: 'A', text: 'Neumonía bacteriana comunitaria por Streptococcus pneumoniae' },
          { id: 'B', text: 'Tromboembolismo pulmonar agudo secundario a pérdida urinaria de antitrombina III' },
          { id: 'C', text: 'Edema agudo de pulmón no cardiogénico por hipoalbuminemia' },
          { id: 'D', text: 'Infarto agudo de miocardio transmural' },
          { id: 'E', text: 'Derrame pericárdico con taponamiento cardíaco' },
        ],
        correcta: 'B',
        explicacion: 'El síndrome nefrótico con hipoalbuminemia severa (< 2.5 g/dL) confiere un estado de hipercoagulabilidad severo debido a la pérdida urinaria selectiva de anticoagulantes endógenos fisiológicos, principalmente la Antitrombina III (AT-III), sumada a la hiperfibrinogenemia reactiva hepática. Esta alteración predispone de forma catastrófica a trombosis venosa profunda, trombosis de la vena renal y tromboembolismo pulmonar (TEP). El dolor pleurítico súbito con disnea e hipoxemia en este paciente traduce un TEP agudo.',
        recTag: 'EUNACOM Julio 2017 · Reconstrucción oficial',
      },
      {
        stem: 'Mujer de 27 años, sin antecedentes mórbidos, consulta por cuadro de un mes de evolución de edema bimaleolar progresivo y edema palpebral matinal. Exámenes de laboratorio: Creatinina 0.8 mg/dL, Albúmina sérica 2.4 g/dL, Colesterol total 380 mg/dL. Sedimento de orina: sin hematuria ni leucocituria, presencia de abundantes cuerpos ovales grasos. Proteinuria cuantitativa de 24 horas: 7.2 gramos. Anticuerpos antinucleares (ANA) negativos, C3 y C4 normales. ¿Cuál es la conducta diagnóstica de elección para proseguir el estudio de esta paciente?',
        options: [
          { id: 'A', text: 'Iniciar prednisona oral a dosis de 1 mg/kg/día de forma empírica' },
          { id: 'B', text: 'Realizar biopsia renal percutánea' },
          { id: 'C', text: 'Solicitar electroforesis e inmunofijación de proteínas en suero y orina' },
          { id: 'D', text: 'Indicar tratamiento antiproteinúrico exclusivo con losartán y citar a control en 6 meses' },
          { id: 'E', text: 'Ecografía Doppler de arterias y venas renales como único estudio' },
        ],
        correcta: 'B',
        explicacion: 'En todo paciente adulto que debuta con un síndrome nefrótico primario, la Biopsia Renal Percutánea es la conducta diagnóstica de elección obligatoria e insustituible. A diferencia de los niños, en quienes la gran mayoría padece enfermedad por cambios mínimos y se trata empíricamente con corticoides, en los adultos el espectro histológico es sumamente heterogéneo (membranosa, FSGS, cambios mínimos, amiloidosis) y los tratamientos inmunosupresores específicos difieren radicalmente según el patrón anatomopatológico.',
        recTag: 'EUNACOM Diciembre 2019 · Reconstrucción oficial',
      },
      {
        stem: 'Hombre de 35 años sin antecedentes previos consulta por edema facial al despertar, orina espumosa y aumento de peso de 5 kg en 2 semanas. Al examen físico se constata edema con fóvea en ambas extremidades inferiores hasta rodillas. Exámenes: Proteinuria de 24 horas: 8.0 gramos. Albúmina plasmática: 2.0 g/dL. Sedimento urinario sin hematíes ni cilindros hemáticos. ¿Cuál es el diagnóstico sindromático más probable?',
        options: [
          { id: 'A', text: 'Síndrome nefrótico puro' },
          { id: 'B', text: 'Síndrome nefrítico agudo' },
          { id: 'C', text: 'Glomerulonefritis membranoproliferativa' },
          { id: 'D', text: 'Nefropatía por depósitos de IgA' },
          { id: 'E', text: 'Pielonefritis crónica con proteinuria tubular' },
        ],
        correcta: 'A',
        explicacion: 'El paciente cumple rigurosamente con los criterios de Síndrome Nefrótico Puro: proteinuria en rango nefrótico masivo (> 3.5 g/24 h), hipoalbuminemia marcada (< 3.0 g/dL) y edema clínico, en ausencia total de elementos inflamatorios nefríticos (sin hematuria dismórfica, sin hipertensión arterial y sin cilindros hemáticos). En adultos jóvenes, las causas primarias más comunes son la nefropatía por cambios mínimos o la glomeruloesclerosis focal y segmentaria.',
        recTag: 'EUNACOM Julio 2021 · Reconstrucción oficial',
      },
      {
        stem: '¿Cuál de los siguientes hallazgos en el sedimento microscópico de orina analizado bajo luz polarizada es patognomónico de síndrome nefrótico y lipiduria?',
        options: [
          { id: 'A', text: 'Cilindros céreos anchos de bordes mellados' },
          { id: 'B', text: 'Gotas lipídicas y cuerpos ovales grasos con birrefringencia en Cruz de Malta' },
          { id: 'C', text: 'Cilindros hemáticos con hematíes espiculados' },
          { id: 'D', text: 'Cristales de oxalato de calcio en sobre de carta' },
          { id: 'E', text: 'Cilindros leucocitarios con piuria estéril' },
        ],
        correcta: 'B',
        explicacion: 'La lipiduria es una consecuencia directa de la filtración glomerular masiva de lipoproteínas en el síndrome nefrótico. Las células del epitelio tubular proximal endocitan estas grasas y al descamarse se observan como cuerpos ovales grasos en la orina. Al ser examinadas bajo luz microscópica polarizada, los ésteres de colesterol presentan una birrefringencia anisotrópica característica en forma de cruz, conocida clásicamente como la "Cruz de Malta", hallazgo distintivo y confirmatorio de síndrome nefrótico.',
        recTag: 'EUNACOM Diciembre 2022 · Reconstrucción oficial',
      },
    ],
  },

  /* ───────────────────────── 🟡 TIER 2 (2 PÁGINAS) ───────────────────────── */
  {
    id: 'nefro-14', classId: 'nefro-14', tier: 2,
    blockNum: 4, blockName: 'Síndromes Glomerulares y Nefropatías Médicas',
    topicLabel: '4.2', title: 'Glomerulopatías Primarias del Adulto: Cambios Mínimos, FSGS y Membranosa',
    perfilCode: '1.09.1.022', dx: 'Específico', tx: 'Inicial', seg: 'Completo',
    ges: 'Sin garantía GES específica',
    reconstrucciones: 'EUNACOM Julio 2018 (Q#49) · EUNACOM Diciembre 2020 (Q#15)',
    frecuencia: 'Alta en EUNACOM · Preguntas orientadas a identificar la nefropatía membranosa en adultos y anticuerpos anti-PLA2R',
    svg: null, algoTitle: 'Diagnóstico Diferencial de Glomerulopatías Nefróticas Primarias',
    diagram: flow('Diferenciación Histológica de las Glomerulopatías Nefróticas Primarias', [
      { t: 'Adulto con Síndrome Nefrótico Primario Confirmado', s: 'Biopsia renal percutánea: Óptica + Inmunofluorescencia + Microscopía Electrónica', type: 'warn' },
      { k: 'split', q: '¿Hallazgo Histopatológico Predominante en la Biopsia?',
        ll: 'Engrosamiento MBG con Espículas (Spikes) + Depósitos IgG Subepiteliales',
        left: { t: 'Nefropatía Membranosa', s: 'Causa #1 en > 50 años · Anti-PLA2R (+) en 75% · Descartar neoplasia oculta · Alto riesgo de trombosis TVR', type: 'acc' },
        rl: 'Esclerosis Focal Segmentaria vs Óptica Normal con Fusión de Pedicelos',
        right: { t: 'GEFS vs Cambios Mínimos', s: 'GEFS: Sinequias, mala respuesta esteroidal, VIH/Obesidad · Cambios Mínimos: Respuesta rápida a Prednisona', type: 'dec' },
      },
    ]),
    contexto: 'Las tres glomerulopatías primarias que causan síndrome nefrótico en el adulto tienen perfiles patogénicos, demográficos y pronósticos muy disímiles. La Nefropatía Membranosa es una enfermedad autoinmune dirigida contra antígenos podocitarios (anti-PLA2R) que predomina en adultos mayores y tiene alta tasa de trombosis; la Glomeruloesclerosis Focal y Segmentaria (GEFS) es una podocitopatía agresiva que conduce a insuficiencia renal terminal; y la Enfermedad por Cambios Mínimos, aunque infantil por excelencia, puede verse en adultos en relación con AINEs o Linfoma de Hodgkin respondiendo espectacularmente a corticoides.',
    contentSections: [
      {
        subhead: '1. Nefropatía Membranosa (GMN Membranosa)',
        paragraphs: [
          'Es la <strong>causa más frecuente de síndrome nefrótico primario en adultos mayores de 50 años</strong> (30–40% de los casos). Es un síndrome nefrótico típicamente <strong>puro</strong> (sin hematuria significativa ni hipertensión precoz). En el 70–80% de los casos primarios se asocia a <strong>autoanticuerpos circulantes contra el receptor de fosfolipasa A2 tipo M (anti-PLA2R)</strong>.',
          '<strong>Histología:</strong> En microscopía óptica con plata se observa <strong>engrosamiento difuso de la membrana basal glomerular (MBG) con proyecciones en forma de "espículas" o púas ("spikes")</strong>. En inmunofluorescencia hay depósitos granulares gruesos de <strong>IgG y C3 a nivel subepitelial</strong>. Siempre se debe descartar causa secundaria: <strong>neoplasias sólidas ocultas (carcinoma de colon, pulmón, mama)</strong>, infección por Virus Hepatitis B, uso de AINEs o lupus eritematoso sistémico (clase V).',
        ],
      },
      {
        subhead: '2. Cambios Mínimos y Glomeruloesclerosis Focal y Segmentaria (GEFS)',
        paragraphs: [
          '<strong>Enfermedad por Cambios Mínimos:</strong> Microscopía óptica completamente normal; microscopía electrónica demuestra <strong>fusión y borramiento difuso de los pedicelos podocitarios</strong>. Cursa con proteinuria selectiva pura. En adultos se asocia clásicamente al <strong>Linfoma de Hodgkin</strong> y al uso de AINEs. Su respuesta al tratamiento con <strong>Prednisona oral a dosis plenas (1 mg/kg/día)</strong> es excelente y rápida (> 80% de remisión).',
          '<strong>Glomeruloesclerosis Focal y Segmentaria (GEFS):</strong> Afecta solo algunos glomérulos (focal) y solo una porción del ovillo capilar (segmentaria), con sinequias capsulares y depósito hialino. Se asocia a <strong>infección por VIH (nefropatía colapsante asociada a VIH)</strong>, obesidad severa, consumo de heroína o hiperfiltración en riñón único. Presenta <strong>mala respuesta a corticoides</strong> y una alta tasa de progresión a hemodiálisis y recurrencia en el injerto trasplantado.',
        ],
      },
    ],
    table: {
      title: 'Comparación Clave: Las Tres Glomerulopatías Nefróticas Primarias',
      headers: ['Característica', 'Nefropatía Membranosa', 'Cambios Mínimos', 'Focal y Segmentaria (GEFS)'],
      rows: [
        ['Población Típica', 'Adultos mayores de 50 años', 'Niños (90%) · 10% adultos', 'Adultos jóvenes · Afrodescendientes'],
        ['Marcador Inmunológico', 'Anti-PLA2R positivo (75%)', 'Ninguno', 'Mutaciones podocitarias / APOL1'],
        ['Hallazgo Histológico Clave', 'Espículas ("spikes") y engrosamiento MBG', 'Óptica normal · Borramiento de pedicelos en ME', 'Esclerosis y sinequias en porción de glomérulos'],
        ['Asociaciones Secundarias', 'Cáncer sólido, Hepatitis B, AINEs', 'Linfoma de Hodgkin, AINEs', 'VIH, obesidad mórbida, hiperfiltración'],
        ['Respuesta Terapéutica', 'Inmunosupresión compleja (Rituximab / CNI)', 'Respuesta dramática a corticoides (> 80%)', 'Resistente a corticoides · Progresa a ERC'],
      ],
    },
    vignette: 'Hombre de 62 años consulta por cuadro de varias semanas de orinas espumosas y edema progresivo de extremidades inferiores. Exámenes: PA 125/80 mmHg, Creatinina 1.1 mg/dL, Albúmina sérica 2.2 g/dL, Colesterol total 390 mg/dL, Proteinuria de 24 horas: 7.5 gramos. El sedimento muestra 2 eritrocitos por campo sin acantocitos. La biopsia renal revela glomérulos con engrosamiento difuso de las paredes capilares y la tinción de plata muestra proyecciones subepiteliales espiculares ("spikes"), con inmunofluorescencia granular fina para IgG.',
    explicacion: 'El diagnóstico anatomo-clínico es de Nefropatía Membranosa, la causa primaria más prevalente de síndrome nefrótico en pacientes mayores de 50 años. El patrón histológico caracterizado por engrosamiento difuso de la membrana basal con imágenes en "espículas" o "spikes" en la tinción de plata y depósito granular subepitelial de IgG es definitorio. En este paciente adulto mayor es mandatorio solicitar anticuerpos anti-PLA2R en sangre y realizar un cribado activo de neoplasias sólidas ocultas (colonoscopía, radiografía o TAC de tórax) para descartar membranosa secundaria paraneoplásica.',
    keyPoints: [
      'Nefropatía membranosa es la causa más común de síndrome nefrótico en adultos > 50 años.',
      'Anticuerpos anti-PLA2R positivos en sangre certifican el origen primario autoinmune de la membranosa.',
      'Histología de membranosa: engrosamiento de la MBG con espículas ("spikes") en tinción de plata y depósitos IgG subepiteliales.',
      'En todo adulto con nefropatía membranosa descartar causa secundaria: neoplasias sólidas ocultas y virus hepatitis B.',
      'Cambios mínimos: óptica normal y borramiento podocitario en microscopía electrónica; responde excelente a corticoides; se asocia a linfoma de Hodgkin.',
      'GEFS: causa frecuente en adultos jóvenes y VIH; resistente a corticoides y con alta tasa de progresión a falla renal terminal.',
    ],
    questions: [
      {
        stem: 'Hombre de 62 años presenta un cuadro de varios días de evolución de orinas espumosas, asociado a edema marcado de extremidades inferiores. Su sedimento de orina muestra 2 a 4 hematíes por campo, 5 leucocitos por campo, creatininemia de 1.1 mg/dL y proteinuria cuantitativa de 24 horas de 7.0 gramos. ¿Cuál es el diagnóstico más probable?',
        options: [
          { id: 'A', text: 'Nefropatía por depósitos de IgA (enfermedad de Berger)' },
          { id: 'B', text: 'Glomerulonefritis lúpica clase IV' },
          { id: 'C', text: 'Glomerulonefritis postestreptocócica' },
          { id: 'D', text: 'Glomerulonefritis rápidamente progresiva pauciinmune' },
          { id: 'E', text: 'Nefropatía membranosa' },
        ],
        correcta: 'E',
        explicacion: 'El cuadro corresponde a un Síndrome Nefrótico Puro en un adulto mayor de 60 años (proteinuria masiva de 7 g/24 h con sedimento urinario inactivo, sin hematuria glomerular). En este grupo etario, la causa más frecuente es la Nefropatía Membranosa. Todas las demás opciones planteadas (Berger, lupus, GNPE, vasculitis) cursan típicamente con síndrome nefrítico o glomerulonefritis proliferativa con hematuria dismórfica intensa, cilindros hemáticos y deterioro inflamatorio renal agudo.',
        recTag: 'EUNACOM Julio 2018 · Reconstrucción oficial',
      },
      {
        stem: 'Hombre de 58 años es diagnosticado mediante biopsia renal de nefropatía membranosa idiopática. Sus niveles séricos de anticuerpos anti-PLA2R resultan negativos. ¿Cuál es la conducta diagnóstica complementaria prioritaria que se debe realizar en este paciente?',
        options: [
          { id: 'A', text: 'Cribado exhaustivo de neoplasia sólida oculta (colon, pulmón, próstata) y serologías virales (VHB)' },
          { id: 'B', text: 'Mielograma para descartar leucemia mieloide aguda' },
          { id: 'C', text: 'Punción lumbar para estudio de líquido cefalorraquídeo' },
          { id: 'D', text: 'Ecocardiograma transesofágico en busca de vegetaciones' },
          { id: 'E', text: 'Iniciar hemodiálisis de mantención de inmediato' },
        ],
        correcta: 'A',
        explicacion: 'Aproximadamente un 20 a 25% de las nefropatías membranosas del adulto son secundarias. Cuando los anticuerpos anti-PLA2R son negativos en un adulto mayor de 50 años, la sospecha de una etiología secundaria se eleva sustancialmente, siendo la principal causa el origen paraneoplásico por tumores sólidos ocultos (carcinoma pulmonar, de colon, gástrico o de mama) o infecciones virales crónicas (Hepatitis B). El estudio de extensión tumoral y serológico es un mandato prioritario.',
        recTag: 'EUNACOM Diciembre 2020 · Reconstrucción oficial',
      },
    ],
  },

  /* ───────────────────────── 🟡 TIER 2 (2 PÁGINAS) ───────────────────────── */
  {
    id: 'nefro-15', classId: 'nefro-15', tier: 2,
    blockNum: 4, blockName: 'Síndromes Glomerulares y Nefropatías Médicas',
    topicLabel: '4.3', title: 'Síndrome Nefrítico y Glomerulonefritis Postestreptocócica (GNPE)',
    perfilCode: '1.09.1.021', dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Sin garantía GES específica',
    reconstrucciones: 'EUNACOM Julio 2017 (Q#11) · EUNACOM Diciembre 2019 (Q#75)',
    frecuencia: 'Alta en EUNACOM · Caso clínico clásico: hematuria dismórfica, hipertensión, edema, C3 bajo y período de latencia',
    svg: null, algoTitle: 'Algoritmo Diagnóstico del Síndrome Nefrítico y GNPE',
    diagram: flow('Diagnóstico y Conducta en Síndrome Nefrítico y GNPE', [
      { t: 'Tríada Clásica: Hematuria Glomerular + Hipertensión Arterial + Edema / Oliguria', s: 'Sedimento con > 70% acantocitos/hematíes dismórficos y cilindros hemáticos patognomónicos', type: 'warn' },
      { k: 'split', q: 'Evaluar Fracciones del Complemento: ¿C3 Plasmático Disminuido?',
        ll: 'C3 BAJO (CONSUMO DE COMPLEMENTO)',
        left: { t: 'GN Postestreptocócica vs Lupus vs GNMP', s: 'GNPE: Latencia 1–3 sem post faringitis / 3–6 sem post impétigo · ASO / Anti-DNAsa B (+) · Tx: Diuréticos', type: 'acc' },
        rl: 'C3 NORMAL (SIN CONSUMO)',
        right: { t: 'Nefropatía por IgA (Berger) vs Vasculitis ANCA', s: 'Berger: Hematuria sinfaringítica (coincide con infección respiratoria a las 24–48 h) · Complemento normal', type: 'dec' },
      },
    ]),
    contexto: 'El síndrome nefrítico es el reflejo de la inflamación endocapilar aguda del glomérulo con ruptura de la membrana basal, lo que permite el paso de hematíes (que sufren dismorfia y fragmentación mecánica al atravesar la brecha) y cilindros hemáticos a la orina. La caída de la TFG genera retención primaria de sodio y agua con expansión del volumen extracelular, manifestada por hipertensión arterial volumen-dependiente y edema facial. La Glomerulonefritis Postestreptocócica (GNPE) es el prototipo del síndrome nefrítico con consumo transitorio del complemento.',
    contentSections: [
      {
        subhead: '1. Fisiopatología y Presentación Clínica',
        paragraphs: [
          'La <strong>Glomerulonefritis Aguda Postestreptocócica (GNPE)</strong> es una enfermedad por inmunocomplejos desencadenada por cepas nefritogénicas de <strong>Streptococcus pyogenes (Estreptococo beta-hemolítico Grupo A)</strong> que expresan antígenos específicos como la exotoxina B pirogénica estreptocócica (SPEB).',
          'El elemento cronológico clave es el <strong>período de latencia asintomático</strong> entre la infección estreptocócica inicial y el inicio de los síntomas renales: <strong>1 a 2 semanas (7 a 14 días)</strong> tras una infección faringoamigdalina, y <strong>3 a 6 semanas (21 a 40 días)</strong> tras una infección cutánea (impétigo o piodermitis).',
          'La clínica se manifiesta por <strong>orinas oscuras ("color té" o "coca-cola")</strong> por hematuria glomerular macroscópica, <strong>edema matinal periorbitario y maleolar</strong> por retención renal de sal y agua, <strong>hipertensión arterial</strong> y grados variables de oliguria.',
        ],
      },
      {
        subhead: '2. Laboratorio Diagnóstico y Criterios Inmunológicos',
        paragraphs: [
          'El sedimento de orina revela el sello patognomónico: <strong>hematíes dismórficos (> 70–80%), acantocitos (hematíes en forma de anillo con protrusiones en vesícula) y cilindros hemáticos</strong>, asociados a proteinuria subnefrótica (< 1 a 2 g/día).',
          'El perfil inmunológico muestra <strong>hipocomplementemia transitoria con descenso marcado de la fracción C3 del complemento (y C4 normal o mínimamente disminuido)</strong> en más del 90% de los pacientes. Este consumo de C3 se normaliza espontáneamente entre las <strong>6 y 8 semanas</strong>; si la hipocomplementemia persiste más allá de 8–12 semanas, se descarta GNPE y se debe realizar biopsia renal sospechando Lupus o Glomerulonefritis Membranoproliferativa.',
          'La evidencia de infección estreptocócica previa se confirma con títulos elevados de <strong>Antiestreptolisina O (ASO)</strong> (en foco faríngeo) o <strong>Anti-DNAsa B</strong> (altamente sensible en infecciones cutáneas).',
        ],
      },
      {
        subhead: '3. Manejo Clínico y Soporte Hemodinámico',
        paragraphs: [
          'La GNPE es una patología <strong>autolimitada en más del 95% de los pacientes</strong>, con resolución completa de la falla renal y la hipertensión en 1 a 3 semanas. <strong>NO REQUIERE CORTICOIDES NI INMUNOSUPRESORES</strong>.',
          'El tratamiento es estrictamente de <strong>soporte sintomático de la sobrecarga de volumen</strong>: reposo en cama, <strong>restricción estricta de sodio y líquidos</strong>, y administración de <strong>diuréticos de asa (Furosemida intravenosa u oral)</strong> para promover natriuresis, revertir el edema y controlar la hipertensión arterial. Si el paciente cursa con una crisis hipertensiva o edema pulmonar, la furosemida en bolo IV es el pilar de rescate.',
        ],
      },
    ],
    table: {
      title: 'Diagnóstico Diferencial: Glomerulonefritis Postestreptocócica vs Nefropatía IgA (Berger)',
      headers: ['Característica Clínica / Inmune', 'Glomerulonefritis Postestreptocócica (GNPE)', 'Nefropatía por IgA (Enfermedad de Berger)'],
      rows: [
        ['Período de Latencia', 'Prolongado: 1–2 semanas (faringe) o 3–6 sem (piel)', 'Inmediato / Sinfaringítico: 24 a 48 horas (concomitante)'],
        ['Niveles de Complemento Sérico', 'C3 marcadamente disminuido (C4 normal)', 'C3 y C4 estrictamente normales'],
        ['Edad Típica', 'Niños y adultos jóvenes (5 a 15 años)', 'Adultos jóvenes (segunda y tercera década)'],
        ['Recurrencia de Brotes', 'Excepcional (cuadro autolimitado único)', 'Muy recurrente (brotes con cada cuadro infeccioso respiratorio)'],
        ['Tratamiento de Elección', 'Soporte: Diuréticos de asa (furosemida) y restricción de sal', 'Control de PA con IECA/ARA-II · Corticoides si proteinuria > 1 g/d'],
      ],
    },
    vignette: 'Hombre de 22 años, sin antecedentes mórbidos, consulta por cuadro de 3 días de cefalea frontal intensa, malestar general, hinchazón facial y emisión de orinas oscuras color café. Hace 12 días presentó un episodio de faringoamigdalitis purulenta febril tratada de forma irregular con amoxicilina por 3 días. Al examen físico: PA 175/105 mmHg, FC 68 lpm, edema periorbitario evidente y edema blando en tobillos. Exámenes: Creatinina 1.9 mg/dL, BUN 38 mg/dL. Sedimento urinario: incontables glóbulos rojos con 85% de dismorfia y cilindros hemáticos, proteinuria de 800 mg/24 horas. C3 plasmático: 28 mg/dL (VN 80–160 mg/dL), C4 normal.',
    explicacion: 'El paciente presenta el cuadro clínico paradigmático de una Glomerulonefritis Aguda Postestreptocócica (GNPE): síndrome nefrítico clásico (hematuria glomerular dismórfica, cilindros hemáticos, hipertensión arterial, edema facial y caída de la TFG) que inicia tras un período de latencia de 12 días post-faringitis, asociado al consumo característico de la fracción C3 del complemento con C4 normal. El tratamiento inicial de elección es el manejo de la sobrecarga hidrosalina con restricción de sodio y diuréticos de asa (Furosemida intravenosa) para controlar la presión arterial y prevenir la insuficiencia cardíaca congestiva. Los corticoides no tienen indicación en esta patología.',
    keyPoints: [
      'Tríada de Síndrome Nefrítico: Hematuria glomerular (dismórfica + cilindros hemáticos) + Hipertensión + Edema.',
      'Período de latencia en GNPE: 1 a 2 semanas tras infección faringoamigdalina; 3 a 6 semanas tras piodermitis o impétigo.',
      'Complemento en GNPE: consumo marcado de C3 con C4 normal; se normaliza espontáneamente a las 6 a 8 semanas.',
      'Si el C3 persiste disminuido después de 8 a 12 semanas, la sospecha diagnóstica cambia a Lupus o GN membranoproliferativa.',
      'Nefropatía por IgA (Berger): hematuria simultánea ("sinfaringítica", 24–48 h) a la infección respiratoria, con complemento NORMAL.',
      'Tratamiento de la GNPE: estrictamente de soporte (restricción hidrosalina y diuréticos de asa con furosemida); no usar corticoides.',
    ],
    questions: [
      {
        stem: 'Hombre de 21 años consulta por disnea de medianos esfuerzos, cefalea y emisión de orinas color café oscuro de 2 días de evolución. Hace dos semanas cursó amigdalitis pultácea. Al examen físico: PA 180/110 mmHg, FC 75 lpm, edema periorbitario bilateral y crepitaciones inspiratorias bibasales. Sedimento de orina: hematuria dismórfica masiva (90%), acantocitos y cilindros hemáticos, proteinuria de 900 mg/24 horas. C3 plasmático disminuido y C4 normal. ¿Cuál es la conducta terapéutica inicial prioritaria?',
        options: [
          { id: 'A', text: 'Iniciar prednisona oral a dosis inmunosupresoras' },
          { id: 'B', text: 'Administrar furosemida intravenosa y restricción estricta de sodio' },
          { id: 'C', text: 'Pulsos de ciclofosfamida intravenosa' },
          { id: 'D', text: 'Amoxicilina oral por 14 días como tratamiento del daño glomerular' },
          { id: 'E', text: 'Biopsia renal percutánea urgente antes de cualquier medida' },
        ],
        correcta: 'B',
        explicacion: 'El cuadro corresponde a una Glomerulonefritis Postestreptocócica complicada con sobrecarga de volumen severa y emergencia hipertensiva (PA 180/110 mmHg con crepitaciones pulmonares bibasales por congestión venocapilar). Al tratarse de una enfermedad mediada por inmunocomplejos autolimitada, el objetivo terapéutico inmediato es revertir la expansión del volumen extracelular mediante el uso de diuréticos de asa (furosemida endovenosa) y restricción hidrosalina estricta. El uso de antibióticos no modifica el curso del daño glomerular una vez instalado, y los corticoides no están indicados en las formas típicas de GNPE.',
        recTag: 'EUNACOM Julio 2017 · Reconstrucción oficial',
      },
      {
        stem: 'Hombre de 24 años consulta por orinas rojizas de inicio el día de hoy, que coinciden con el segundo día de un cuadro catarral agudo con odinofagia, coriza y febrícula. Al examen físico: PA 120/70 mmHg, afebril, sin edemas periféricos. El sedimento urinario muestra hematuria con 80% de eritrocitos dismórficos. Los niveles séricos de C3 y C4 son estrictamente normales. ¿Cuál es el diagnóstico más probable?',
        options: [
          { id: 'A', text: 'Glomerulonefritis aguda postestreptocócica' },
          { id: 'B', text: 'Nefropatía por depósitos de IgA (enfermedad de Berger)' },
          { id: 'C', text: 'Glomerulonefritis lúpica proliferativa difusa' },
          { id: 'D', text: 'Glomerulonefritis membranoproliferativa tipo I' },
          { id: 'E', text: 'Nefritis tubulointersticial inmunoalérgica' },
        ],
        correcta: 'B',
        explicacion: 'La presencia de macrohematuria glomerular inmediatamente contemporánea o a las 24–48 horas del inicio de una infección respiratoria alta ("hematuria sinfaringítica") en un adulto joven, con presión arterial normal y niveles de complemento sérico C3 y C4 completamente normales, es el sello distintivo indiscutible de la Nefropatía por IgA (Enfermedad de Berger). En la GNPE, la latencia habría sido de 1 a 2 semanas y el C3 estaría descendido.',
        recTag: 'EUNACOM Diciembre 2019 · Reconstrucción oficial',
      },
    ],
  },

  /* ───────────────────────── 🔴 TIER 3 (4 PÁGINAS) ───────────────────────── */
  {
    id: 'nefro-16', classId: 'nefro-16', tier: 3,
    blockNum: 4, blockName: 'Síndromes Glomerulares y Nefropatías Médicas',
    topicLabel: '4.4', title: 'Glomerulonefritis Rápidamente Progresiva (GNRP) y Vasculitis ANCA',
    perfilCode: '1.09.2.013, 1.09.4.016', dx: 'Específico', tx: 'Inicial', seg: 'Completo',
    ges: 'Garantía Explícita en Salud de Urgencia Vital (Ley de Urgencias)',
    reconstrucciones: 'EUNACOM Julio 2016 (Q#28) · EUNACOM Diciembre 2018 (Q#58) · EUNACOM Julio 2021 (Q#40) · EUNACOM Diciembre 2023 (Q#11)',
    frecuencia: 'Alta en EUNACOM · Emergencia nefrológica mayor: semilunas histológicas, ANCA-p/MPO, ANCA-c/PR3 y pulsos de metilprednisolona',
    svg: null, algoTitle: 'Algoritmo de Diagnóstico y Rescate en GNRP y Vasculitis ANCA',
    diagram: flow('Algoritmo de Emergencia en Glomerulonefritis Rápidamente Progresiva (GNRP)', [
      { t: 'Deterioro Acelerado de la Función Renal (Días a Semanas) + Síndrome Nefrítico Activo', s: 'Hematuria dismórfica masiva, cilindros hemáticos, acantocitos e hipertensión arterial severa', type: 'warn' },
      { k: 'split', q: '¿Conducta Diagnóstica de Urgencia Ineludible?',
        ll: 'BIOPSIA RENAL PERCUTÁNEA URGENTE',
        left: { t: 'Confirmación Histológica: Semilunas Epiteliales (> 50%)', s: 'Ruptura de la pared capilar con proliferación de células parietales de Bowman y depósito de fibrina', type: 'acc' },
        rl: 'PANEL SEROLÓGICO INMEDIATO',
        right: { t: 'ANCA (MPO / PR3) + Anti-MBG + ANA + C3/C4', s: 'Clasificar: Tipo 1 (Anti-MBG) vs Tipo 2 (Inmunocomplejos) vs Tipo 3 (Vasculitis Pauciinmune)', type: 'dec' },
      },
      { k: 'split', q: 'TERAPIA DE INDUCCIÓN INMUNOSUPRESORA INMEDIATA',
        ll: 'Tratamiento Médico Inmediato (Sin esperar biopsia si hay sospecha alta)',
        left: { t: 'Pulsos de Metilprednisolona IV (1 g/día x 3 días) + Ciclofosfamida / Rituximab', s: 'Frenar la destrucción glomerular antes de que las semilunas celulares evolucionen a fibrosis irreversible', type: 'acc' },
        rl: 'Compromiso Pulmonar Severo o Falla Renal Crítica',
        right: { t: 'Plasmaféresis de Urgencia Inmediata', s: 'Indicación formal en Hemorragia Alveolar Difusa con hemoptisis masiva o Creatinina sérica > 5.7 mg/dL', type: 'warn' },
      },
    ]),
    contexto: 'La Glomerulonefritis Rápidamente Progresiva (GNRP) es el cuadro más catastrófico de la nefrología clínica. Se caracteriza por una caída vertiginosa del filtrado glomerular que conduce a la anuria e insuficiencia renal terminal irreversible en semanas o meses si no es diagnosticada y tratada en cuestión de días. Su sustrato anatomopatológico es la proliferación extracapilar masiva en forma de semilunas epiteliales ("crescents") que asfixian el ovillo capilar. Las vasculitis asociadas a ANCA son la causa más prevalente en adultos mayores, exigiendo el inicio inmediato de pulsos de corticoides a dosis plenas.',
    contentSections: [
      {
        subhead: '1. Definición y Sustrato Histopatológico (Semilunas)',
        paragraphs: [
          'La <strong>Glomerulonefritis Rápidamente Progresiva (GNRP)</strong> o Glomerulonefritis Extracapilar es un síndrome anatomoclínico caracterizado por: (1) <strong>Pérdida rápida de más del 50% de la TFG en un período de días a semanas</strong>; (2) <strong>Síndrome nefrítico activo</strong> con hematuria glomerular masiva, abundantes <strong>acantocitos y cilindros hemáticos</strong> ("sedimento telescopado"); y (3) Presencia histológica en la biopsia renal de <strong>semilunas epiteliales ("crescents") en más del 50% de los glomérulos viables</strong>.',
          'Las semilunas se originan por una necrosis transmural de la membrana basal glomerular que permite la extravasación masiva de fibrina, macrófagos y mediadores inflamatorios hacia el espacio de Bowman, estimulando la proliferación reactiva de las células epiteliales parietales. Inicialmente son <strong>celulares</strong> (fase reversible con inmunosupresión) y evolucionan en semanas a <strong>fibrocelulares y fibrosas</strong> (cicatriz irreversible e insensible a fármacos).',
        ],
      },
      {
        subhead: '2. Clasificación Etiopatogénica en Tres Tipos',
        paragraphs: [
          'La inmunofluorescencia y la serología dividen a las GNRP en tres categorías cardinales:',
          '<strong>Tipo 1: Enfermedad por Anticuerpos Anti-Membrana Basal Glomerular (Anti-MBG) (10–15%):</strong> Inmunofluorescencia con <strong>depósito lineal continuo de IgG y C3 a lo largo de la MBG</strong>. Cuando se asocia a <strong>hemorragia alveolar difusa con hemoptisis e infiltrados pulmonares</strong>, se denomina <strong>Síndrome de Goodpasture</strong>.',
          '<strong>Tipo 2: Mediada por Inmunocomplejos (20–30%):</strong> Inmunofluorescencia con <strong>depósito granular grueso en mesangio y pared capilar</strong> con consumo de complemento (C3 bajo). Etiologías: Nefritis Lúpica Proliferativa Difusa (clase IV), Glomerulonefritis postinfecciosa grave, Crioglobulinemia mixta esencial (asociada a Virus Hepatitis C) y Endocarditis bacteriana subaguda.',
          '<strong>Tipo 3: Pauciinmune / Vasculitis asociadas a ANCA (60%):</strong> Es la causa <strong>más frecuente en adultos mayores de 60 años</strong>. La inmunofluorescencia es negativa o "pauciinmune" (escasa o nula presencia de inmunoglobulinas). Se asocia a anticuerpos anticitoplasma de neutrófilos:',
          '• <strong>Poliangeítis Microscópica (PAM):</strong> Compromiso renal aislado o capilaritis pulmonar sin granulomas; <strong>ANCA-p (perinuclear) positivo con especificidad contra Mieloperoxidasa (anti-MPO)</strong> en más del 80%.',
          '• <strong>Granulomatosis con Poliangeítis (GPA / Wegener):</strong> Compromiso de vía aérea superior (sinusitis destructiva crónica, otitis, perforación del tabique nasal en "silla de montar"), nódulos pulmonares cavitados y glomerulonefritis necrotizante; <strong>ANCA-c (citoplasmático) positivo con especificidad contra Proteinasa 3 (anti-PR3)</strong> en más del 90%.',
        ],
      },
      {
        subhead: '3. Manejo Terapéutico de Emergencia',
        paragraphs: [
          'Ante la sospecha clínica fundada de GNRP, la realización de la <strong>Biopsia Renal Percutánea es una urgencia médica</strong>. Si la biopsia se retrasa pero el deterioro renal es acelerado o hay compromiso pulmonar, <strong>el tratamiento inmunosupresor no debe postergarse</strong>.',
          'El régimen de inducción de remisión incluye:',
          '1. <strong>Pulsos de Metilprednisolona Intravenosa:</strong> <strong>500 a 1000 mg diarios por 3 días consecutivos</strong>, seguidos de prednisona oral a 1 mg/kg/día.',
          '2. <strong>Inmunosupresión Citotóxica:</strong> <strong>Ciclofosfamida intravenosa u oral</strong> (asociada a profilaxis con Cotrimoxazol para prevenir neumonía por *Pneumocystis jirovecii*) o <strong>Rituximab</strong> (anticuerpo monoclonal anti-CD20, especialmente indicado en vasculitis ANCA recidivante).',
          '3. <strong>Plasmaféresis Terapéutica (Recambio Plasmático):</strong> Indicación mandataria de primera línea en <strong>Enfermedad por Anti-MBG / Goodpasture</strong> (para remover rápidamente los autoanticuerpos circulantes) y en <strong>Vasculitis ANCA que se presenten con Hemorragia Alveolar Difusa activa o creatinina sérica > 5.7 mg/dL (o requerimiento de diálisis)</strong>.',
        ],
      },
    ],
    table: {
      title: 'Clasificación Diagnóstica y Serológica de las GN Rápidamente Progresivas',
      headers: ['Tipo de GNRP', 'Inmunofluorescencia Renal', 'Serología Diagnóstica', 'Manifestaciones Extra-renales Típicas'],
      rows: [
        ['Tipo 1: Anti-MBG / Goodpasture', 'Depósito lineal de IgG en MBG', 'Anticuerpos Anti-MBG positivos', 'Hemorragia alveolar difusa, hemoptisis, infiltrados pulmonares'],
        ['Tipo 2: Inmunocomplejos', 'Depósito granular de IgG / C3', 'ANA, Anti-DNA, C3/C4 bajos, Crioglobulinas', 'Lupus sistémico, artritis, púrpura palpable, soplo de endocarditis'],
        ['Tipo 3: Pauciinmune (PAM)', 'Escaso o nulo depósito (Pauci)', 'ANCA-p positivo (Anti-MPO)', 'Capilaritis pulmonar, febrícula, baja de peso, mialgias en ancianos'],
        ['Tipo 3: Pauciinmune (GPA / Wegener)', 'Escaso o nulo depósito (Pauci)', 'ANCA-c positivo (Anti-PR3)', 'Sinusitis crónica, nariz en silla de montar, nódulos cavitados en tórax'],
      ],
    },
    treatmentTable: {
      title: 'Esquema de Rescate en GNRP y Vasculitis Necrotizante',
      headers: ['Fase del Tratamiento', 'Fármacos / Procedimiento', 'Duración y Objetivos'],
      rows: [
        ['Inducción Inmediata (Fase 1)', 'Metilprednisolona 1.000 mg/día IV en infusión de 2 horas', '3 días consecutivos; detener inflamación y necrosis de semilunas'],
        ['Inducción Citotóxica (Fase 2)', 'Ciclofosfamida IV (o Rituximab 375 mg/m2/sem x 4 dosis)', 'Ciclofosfamida mensual x 3–6 meses; inducir remisión profunda'],
        ['Plasmaféresis de Rescate', 'Recambio plasmático de 4 litros diarios con albúmina al 5%', '7 a 14 sesiones en hemorragia alveolar o falla renal dialítica'],
        ['Profilaxis Antimicrobiana', 'Cotrimoxazol 160/800 mg 3 veces por semana', 'Obligatorio para prevenir neumonía por Pneumocystis jirovecii'],
      ],
    },
    vignette: 'Hombre de 71 años presenta desde hace 6 semanas malestar general, astenia, baja de peso involuntaria de 5 kg y febrícula vespertina ocasional. En los últimos 10 días nota orinas oscuras y disminución progresiva del volumen urinario con edema bimaleolar. Al examen físico: PA 176/110 mmHg, FC 82 lpm, afebril, pálido, crepitaciones bibasales tenues en bases pulmonares. Exámenes de laboratorio: Creatinina plasmática 4.3 mg/dL (hace 2 meses su valor era de 0.9 mg/dL), BUN 72 mg/dL. Sedimento urinario: 60 eritrocitos por campo con 80% de acantocitos y dismorfia, cilindros hemáticos y proteinuria de 1.8 g/24 horas. Hemograma: Hemoglobina 9.2 g/dL, VHS 98 mm/h. El panel inmunológico informa: C3 y C4 normales, ANA negativo, y títulos elevados de ANCA con patrón perinuclear (ANCA-p / anti-mieloperoxidasa).',
    explicacion: 'El paciente presenta una Glomerulonefritis Rápidamente Progresiva (GNRP) secundaria a una Vasculitis Pauciinmune asociada a ANCA, específicamente una Poliangeítis Microscópica (PAM) del adulto mayor. El diagnóstico clínico se sustenta en el deterioro acelerado de la función renal en semanas (Cr de 0.9 a 4.3 mg/dL) acompañado de síndrome nefrítico activo con acantocitos, proteinuria subnefrótica, anemia inflamatoria y ANCA-p (MPO) positivo con complemento normal. La conducta obligatoria es la hospitalización inmediata en UPC, la indicación prioritaria de Biopsia Renal Percutánea y el inicio urgente de inducción con pulsos de Metilprednisolona intravenosa más Ciclofosfamida o Rituximab.',
    keyPoints: [
      'GNRP: caída del 50% de la TFG en semanas + síndrome nefrítico con hematuria dismórfica y cilindros hemáticos.',
      'Histología definitoria en biopsia renal: semilunas epiteliales ("crescents") en > 50% de los glomérulos.',
      'Las semilunas celulares son reversibles con tratamiento precoz; si se transforman en fibrosas el daño es irreversible.',
      'Causa más común de GNRP en adultos mayores: Vasculitis Pauciinmune asociada a ANCA (Tipo 3).',
      'Poliangeítis Microscópica (PAM): asociada a ANCA-p (anti-MPO); Granulomatosis con Poliangeítis (GPA): asociada a ANCA-c (anti-PR3).',
      'Síndrome de Goodpasture (Tipo 1): glomerulonefritis + hemorragia alveolar; depósito lineal de IgG en MBG y anti-MBG positivo.',
      'Tratamiento de rescate: Pulsos de Metilprednisolona (1 g/día x 3 días) + Ciclofosfamida o Rituximab.',
      'Plasmaféresis obligatoria de urgencia si hay hemorragia alveolar difusa con hemoptisis o creatinina > 5.7 mg/dL.',
    ],
    questions: [
      {
        stem: 'Hombre de 71 años presenta malestar general, astenia, mialgias y febrícula desde hace un mes, agregándose hematuria macroscópica y oliguria en los últimos días. Al examen físico: PA 175/110 mmHg, edema bimaleolar. Exámenes muestran creatinina de 4.3 mg/dL (hace 2 meses 1.0 mg/dL), BUN 72 mg/dL y sedimento de orina con abundantes hematíes con 80% de acantocitos y cilindros hemáticos. ¿Qué examen es el más adecuado y concluyente para confirmar el diagnóstico etiológico específico?',
        options: [
          { id: 'A', text: 'Anticuerpos antinucleares (ANA)' },
          { id: 'B', text: 'Biopsia renal percutánea' },
          { id: 'C', text: 'Urotomografía computarizada con contraste' },
          { id: 'D', text: 'Electroforesis de proteínas en orina de 24 horas' },
          { id: 'E', text: 'Cistoscopía diagnóstica con lavado vesical' },
        ],
        correcta: 'B',
        explicacion: 'El paciente presenta una sospecha indudable de Glomerulonefritis Rápidamente Progresiva (GNRP) con falla renal acelerada y síndrome nefrítico grave. La Biopsia Renal Percutánea es el examen de referencia (gold standard) imprescindible y obligatorio, ya que permite documentar la presencia y porcentaje de semilunas epiteliales (> 50% confirma GNRP), evaluar el grado de cronicidad fibrocelular versus celularidad activa, y mediante la inmunofluorescencia catalogar de inmediato el tipo específico (anti-MBG lineal, inmunocomplejos granular o pauciinmune) para normar el tratamiento inmunosupresor de emergencia.',
        recTag: 'EUNACOM Julio 2016 · Reconstrucción oficial',
      },
      {
        stem: 'Mujer de 67 años consulta por astenia progresiva, febrícula y edema de miembros inferiores. Al examen: PA 180/110 mmHg, edema con fóvea ++. Exámenes: Creatinina 4.1 mg/dL, BUN 60 mg/dL, sedimento de orina con 60 eritrocitos por campo con 80% de dismorfia y cilindros hemáticos. Hemograma muestra hemoglobina 11.8 g/dL, leucocitos normales. El panel serológico informa títulos elevados de ANCA positivos y complemento normal. ¿Cuál es el diagnóstico más probable?',
        options: [
          { id: 'A', text: 'Glomerulonefritis aguda postestreptocócica' },
          { id: 'B', text: 'Nefropatía diabética avanzada' },
          { id: 'C', text: 'Nefrosis lipoidea a cambios mínimos' },
          { id: 'D', text: 'Vasculitis de vaso pequeño asociada a ANCA' },
          { id: 'E', text: 'Púrpura trombocitopénico trombótico' },
        ],
        correcta: 'D',
        explicacion: 'El cuadro corresponde a una vasculitis necrosante de pequeños vasos asociada a ANCA (como la poliangeítis microscópica o granulomatosis con poliangeítis), que debuta clásicamente en adultos mayores como una glomerulonefritis rápidamente progresiva con síndrome nefrítico e hipertensión secundaria severa. La serología con ANCA positivo y la ausencia de consumo de complemento diferencian con claridad esta entidad de la GN postestreptocócica y del lupus.',
        recTag: 'EUNACOM Diciembre 2018 · Reconstrucción oficial',
      },
      {
        stem: 'Hombre de 30 años ingresa a la urgencia con tos productiva con hemoptisis franca, disnea y orinas color café oscuro de una semana de evolución. La radiografía de tórax revela infiltrados alveolares bilaterales difusos en alas de mariposa. Gases arteriales con hipoxemia moderada. Laboratorio: Creatinina 5.2 mg/dL, sedimento con cilindros hemáticos. La inmunofluorescencia de la biopsia renal demuestra depósito lineal continuo de IgG a lo largo de la membrana basal glomerular. ¿Cuál es el tratamiento prioritario combinado de rescate?',
        options: [
          { id: 'A', text: 'Pulsos de metilprednisolona + ciclofosfamida + plasmaféresis' },
          { id: 'B', text: 'Antibioticoterapia con ceftriaxona y claritromicina en monoterapia' },
          { id: 'C', text: 'Prednisona oral a dosis bajas y salbutamol inhalado' },
          { id: 'D', text: 'Anticoagulación plena con heparina no fraccionada' },
          { id: 'E', text: 'Hemodiálisis exclusiva sin inmunosupresión' },
        ],
        correcta: 'A',
        explicacion: 'El paciente presenta el cuadro clásico del Síndrome de Goodpasture (Enfermedad por anticuerpos anti-membrana basal glomerular) manifestado como síndrome riñón-pulmón (hemorragia alveolar difusa con hemoptisis e insuficiencia renal rápidamente progresiva por GN extracapilar con semilunas). El depósito lineal de IgG en la membrana basal glomerular es patognomónico. El tratamiento de urgencia vital es la combinación sinérgica de: (1) Plasmaféresis diaria para remover los anticuerpos circulantes anti-MBG; (2) Pulsos de Metilprednisolona IV para yugular la inflamación celular; y (3) Ciclofosfamida para inhibir la síntesis de nuevos anticuerpos.',
        recTag: 'EUNACOM Julio 2021 · Reconstrucción oficial',
      },
      {
        stem: '¿Cuál es el factor pronóstico anatomopatológico más crítico para determinar la recuperabilidad de la función renal en un paciente con Glomerulonefritis Rápidamente Progresiva?',
        options: [
          { id: 'A', text: 'El porcentaje de glomérulos con semilunas fibrosas y atrofia tubular irreversible' },
          { id: 'B', text: 'La presencia de glucosuria en orina completa' },
          { id: 'C', text: 'El valor absoluto del ácido úrico plasmático' },
          { id: 'D', text: 'El grado de proteinuria selectiva en 24 horas' },
          { id: 'E', text: 'El tamaño de los riñones en la radiografía simple de abdomen' },
        ],
        correcta: 'A',
        explicacion: 'El porcentaje de semilunas epiteliales celulares activas versus semilunas fibrocelulares o fibrosas en la biopsia renal es el determinante pronóstico de recuperabilidad más importante. Las semilunas celulares corresponden a proliferación e inflamación activa potencialmente reversibles con terapia inmunosupresora agresiva. En cambio, las semilunas fibrosas con fibrosis intersticial y atrofia tubular avanzada traducen esclerosis terminal irreversible, con nula respuesta a fármacos citotóxicos y evolución inevitable a diálisis crónica.',
        recTag: 'EUNACOM Diciembre 2023 · Reconstrucción oficial',
      },
    ],
  },

  /* ───────────────────────── 🟡 TIER 2 (2 PÁGINAS) ───────────────────────── */
  {
    id: 'nefro-17', classId: 'nefro-17', tier: 2,
    blockNum: 4, blockName: 'Síndromes Glomerulares y Nefropatías Médicas',
    topicLabel: '4.5', title: 'Nefropatía Lúpica: Clasificación ISN/RPS y Conducta Terapéutica',
    perfilCode: '1.09.1.006, 1.09.4.016', dx: 'Específico', tx: 'Inicial', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES) de Lupus Eritematoso Sistémico',
    reconstrucciones: 'EUNACOM Julio 2018 (Q#16) · EUNACOM Diciembre 2021 (Q#51)',
    frecuencia: 'Alta en EUNACOM · Caso clínico de mujer joven con lupus, sedimento nefrítico o nefrótico, hipocomplementemia C3/C4 y biopsia renal',
    svg: null, algoTitle: 'Algoritmo Diagnóstico y Terapéutico de la Nefropatía Lúpica',
    diagram: flow('Enfrentamiento y Manejo de la Nefropatía Lúpica (ISN/RPS)', [
      { t: 'Paciente con LES y Hallazgos Renales: Proteinuria > 0.5 g/24 h o Sedimento Activo', s: 'Hematuria glomerular dismórfica, cilindros o elevación de creatinina sérica', type: 'warn' },
      { k: 'split', q: '¿Conducta Diagnóstica Mandatoria de Elección?',
        ll: 'BIOPSIA RENAL PERCUTÁNEA OBLIGATORIA',
        left: { t: 'Clasificación Histológica ISN/RPS (Clases I a VI)', s: 'La correlación clínica-histológica es pobre: la biopsia define la agresividad y el tratamiento', type: 'acc' },
        rl: 'CLASES PROLIFERATIVAS ACTIVAS (CLASE III Y IV)',
        right: { t: 'Inducción Inmunosupresora Agresiva', s: 'Pulsos de Metilprednisolona + Micofenolato Mofetil (o Ciclofosfamida) + Hidroxicloroquina', type: 'warn' },
      },
    ]),
    contexto: 'La afección renal (Nefropatía Lúpica) es la manifestación orgánica más determinante de la sobrevida y morbilidad a largo plazo en pacientes con Lupus Eritematoso Sistémico (LES). Compromete hasta al 50% de los pacientes en algún momento de su evolución. Debido a que las manifestaciones clínicas no permiten predecir de forma fidedigna la gravedad del daño tisular subyacente, la realización de una biopsia renal está formalmente indicada ante cualquier evidencia de daño renal. Las formas proliferativas (Clases III y IV) representan verdaderas urgencias inmunológicas.',
    contentSections: [
      {
        subhead: '1. Indicaciones de Biopsia Renal y Marcadores Inmunes',
        paragraphs: [
          'En todo paciente con LES conocido o en estudio, la <strong>Biopsia Renal Percutánea es obligatoria</strong> frente a cualquiera de las siguientes circunstancias: (1) <strong>Proteinuria confirmada ≥ 0.5 gramos en 24 horas</strong> (o IPC ≥ 0.5 mg/mg); (2) <strong>Sedimento urinario activo</strong> (≥ 5 hematíes por campo, hematíes dismórficos o cilindros hemáticos/leucocitarios); o (3) Deterioro inexplicable de la TFG.',
          'La nefropatía lúpica activa se asocia típicamente a <strong>títulos elevados de anticuerpos anti-ADN de doble cadena (anti-dsDNA)</strong> y a <strong>consumo simultáneo de las fracciones C3 y C4 del complemento sérico</strong>, que reflejan la activación de la vía clásica por inmunocomplejos.',
        ],
      },
      {
        subhead: '2. Clasificación Histológica ISN/RPS y Tratamiento',
        paragraphs: [
          'La clasificación internacional (ISN/RPS) categoriza las lesiones en 6 clases:',
          '• <strong>Clase I (Mesangial mínima):</strong> Óptica normal, depósitos mesangiales en IF. Asintomática. Tratamiento basal de LES.',
          '• <strong>Clase II (Mesangial proliferativa):</strong> Hipercelularidad mesangial pura con microhematuria o proteinuria leve. Buen pronóstico.',
          '• <strong>Clase III (Proliferativa focal):</strong> Compromete < 50% de los glomérulos con proliferación endocapilar. Requiere inmunosupresión agresiva.',
          '• <strong>Clase IV (Proliferativa difusa):</strong> Es la <strong>forma más frecuente y más severa</strong> (compromete ≥ 50% de los glomérulos). Cursa con síndrome nefrítico grave, proteinuria en rango nefrótico, hipertensión y falla renal aguda. En microscopía se observan <strong>asas capilares en "asa de alambre" (wire-loops)</strong> y depósitos subendoteliales masivos.',
          '• <strong>Clase V (Membranosa lúpica):</strong> Síndrome nefrótico puro con engrosamiento de MBG y depósitos subepiteliales.',
          '• <strong>Clase VI (Esclerosante avanzada):</strong> Esclerosis de más del 90% de los glomérulos. Daño irreversible; preparación para diálisis o trasplante.',
          '<strong>Pauta Terapéutica en Formas Proliferativas (Clase III y IV):</strong> Consta de <strong>Inducción de Remisión</strong> con <strong>Pulsos de Metilprednisolona intravenosa</strong> (0.5–1 g/día x 3 días) seguidos de prednisona oral a 0.5–1 mg/kg/día, combinados con <strong>Micofenolato Mofetil (MMF)</strong> o <strong>Ciclofosfamida intravenosa (pauta Euro-Lupus)</strong>; seguido de <strong>Mantenimiento</strong> a largo plazo con MMF o Azatioprina. <strong>La Hidroxicloroquina es obligatoria en todos los pacientes</strong> para prevenir recaídas y progresión renal.',
        ],
      },
    ],
    table: {
      title: 'Clasificación ISN/RPS de la Nefropatía Lúpica y Enfoque Terapéutico',
      headers: ['Clase ISN/RPS', 'Denominación Histopatológica', 'Clínica Habitual', 'Tratamiento de Elección'],
      rows: [
        ['Clase I', 'Mesangial Mínima', 'Sedimento normal o microhematuria aislada', 'Tratamiento basal de manifestaciones extrarrenales'],
        ['Clase II', 'Mesangial Proliferativa', 'Microhematuria / Proteinuria < 1 g/día', 'Corticoides a dosis bajas según síntomas'],
        ['Clase III', 'Proliferativa Focal (< 50% glomérulos)', 'Sd. Nefrítico / Proteinuria / HTA', 'Inducción: Metilprednisolona + MMF o Ciclofosfamida'],
        ['Clase IV', 'Proliferativa Difusa (≥ 50% glomérulos)', 'Sd. Nefrítico-Nefrótico grave / Falla renal aguda', 'Inducción: Pulsos Metilprednisolona + MMF / Euro-Lupus'],
        ['Clase V', 'Membranosa Lúpica', 'Síndrome Nefrótico puro', 'Inhibidores de calcineurina o MMF + Corticoides'],
        ['Clase VI', 'Esclerosante Avanzada (> 90% esclerosis)', 'Insuficiencia renal crónica avanzada (ERC 5)', 'Terapia de sustitución renal (Hemodiálisis / Trasplante)'],
      ],
    },
    vignette: 'Mujer de 26 años con antecedente de lupus eritematoso sistémico diagnosticado hace un año en tratamiento irregular con hidroxicloroquina. Consulta por malestar general, astenia, cefalea y emisión de orinas oscuras espumosas. Al examen físico: eritema malar en alas de mariposa respetando surcos nasogenianos, úlceras orales indoloras en paladar duro, PA 160/105 mmHg, FC 74 lpm, edema bimaleolar blando ++. Exámenes: Creatinina plasmática 1.6 mg/dL (basal de 0.7 mg/dL), sedimento de orina con abundantes glóbulos rojos con 80% de dismorfia y cilindros hemáticos, proteinuria cuantificada en 2.4 g/24 horas. Niveles de C3 y C4 séricos marcadamente disminuidos, títulos de anti-dsDNA fuertemente positivos.',
    explicacion: 'La paciente presenta una reactivación lúpica mayor con compromiso renal agudo grave configurando un Síndrome Nefrítico activo (hipertensión, deterioro agudo de TFG, hematuria dismórfica masiva, cilindros hemáticos y proteinuria moderada) con hipocomplementemia por consumo y anti-dsDNA elevados. Clínicamente orienta a una Nefropatía Lúpica Proliferativa activa (Clase III o IV de la clasificación ISN/RPS). La conducta inmediata obligatoria es la hospitalización, toma de Biopsia Renal Percutánea urgente para clasificar el daño histológico, e inicio de terapia de inducción inmunosupresora con pulsos de metilprednisolona asociados a Micofenolato Mofetil o Ciclofosfamida.',
    keyPoints: [
      'Nefropatía lúpica: principal determinante de morbimortalidad a largo plazo en pacientes con LES.',
      'Indicación de biopsia renal en LES: proteinuria persistente ≥ 0.5 g/24 h o sedimento urinario activo (hematuria dismórfica o cilindros).',
      'Marcadores de actividad renal en LES: títulos elevados de anti-dsDNA y consumo simultáneo de fracciones C3 y C4 del complemento.',
      'Clase IV (Proliferativa Difusa) es la forma más común y grave: requiere inducción agresiva con pulsos de corticoides + Micofenolato o Ciclofosfamida.',
      'Hidroxicloroquina debe mantenerse en todo paciente lúpico salvo contraindicación oftalmológica: reduce la tasa de brotes y preserva la sobrevida renal.',
    ],
    questions: [
      {
        stem: 'Mujer de 26 años con fotosensibilidad, artralgias y úlceras orales consulta por astenia y orinas oscuras. Al examen físico: PA 160/100 mmHg, edema bimaleolar. Exámenes muestran creatinina de 1.4 mg/dL, sedimento de orina con eritrocitos abundantes con 85% de dismorfia, proteinuria de 1.2 g/24 horas y fracción C3 del complemento sérico disminuida. ¿Cuál es el diagnóstico más probable?',
        options: [
          { id: 'A', text: 'Nefropatía lúpica' },
          { id: 'B', text: 'Nefropatía por depósitos de IgA' },
          { id: 'C', text: 'Vasculitis ANCA positiva' },
          { id: 'D', text: 'Glomerulopatía por cambios mínimos' },
          { id: 'E', text: 'Pielonefritis aguda bilateral' },
        ],
        correcta: 'A',
        explicacion: 'El cuadro clínico describe las manifestaciones canónicas del Lupus Eritematoso Sistémico (mujer joven, fotosensibilidad, úlceras orales, artralgias) complicadas con compromiso renal agudo (hipertensión, hematuria dismórfica, proteinuria) y consumo del complemento sérico (C3 bajo), lo que confirma el diagnóstico de Nefropatía Lúpica activa.',
        recTag: 'EUNACOM Julio 2018 · Reconstrucción oficial',
      },
      {
        stem: 'Mujer de 28 años con diagnóstico de LES acude a control con proteinuria confirmada de 1.4 g/24 horas y creatinina estable en 0.8 mg/dL. No presenta síntomas sistémicos y su presión arterial es de 125/80 mmHg. ¿Cuál es la conducta de elección antes de indicar un cambio en el tratamiento inmunosupresor?',
        options: [
          { id: 'A', text: 'Indicar tratamiento antiproteinúrico exclusivo con enalapril sin más estudios' },
          { id: 'B', text: 'Realizar biopsia renal percutánea' },
          { id: 'C', text: 'Iniciar pulsos empíricos de ciclofosfamida' },
          { id: 'D', text: 'Repetir la proteinuria de 24 horas cada 6 meses en forma expectante' },
          { id: 'E', text: 'Aumentar únicamente la dosis de hidroxicloroquina al doble' },
        ],
        correcta: 'B',
        explicacion: 'En pacientes con Lupus Eritematoso Sistémico, las guías internacionales (KDIGO y EULAR/ERA-EDTA) establecen con fuerza que la presencia de proteinuria confirmada mayor a 0.5 g/24 horas es una indicación absoluta e ineludible de Biopsia Renal Percutánea. La biopsia es imprescindible para tipificar la clase histológica (determinar si se trata de una forma proliferativa activa clase III/IV que requiere inmunosupresión citotóxica inmediata, o una clase membranosa V, o esclerosis clase VI) y guiar de forma individualizada la terapia.',
        recTag: 'EUNACOM Diciembre 2021 · Reconstrucción oficial',
      },
    ],
  },
];

module.exports = { bloque4 };
