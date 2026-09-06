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
    y = ty;
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
  {
    id: 'diab-15',
    classId: 'diab-15',
    tier: 3,
    blockNum: 4,
    blockName: 'Emergencias Hiperglicémicas Agudas',
    topicLabel: '4.1',
    title: 'Cetoacidosis Diabética (CAD) vs Estado Hiperglicémico Hiperosmolar (EHH)',
    perfilCode: '1.04.1.016',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES N° 2): Diabetes Mellitus / Urgencia Hospitalaria',
    reconstrucciones: 'EUNACOM Diciembre 2017 (Q#49) · EUNACOM Julio 2019 (Q#12) · EUNACOM Diciembre 2021 (Q#22) · EUNACOM Julio 2023 (Q#56)',
    frecuencia: 'Máxima · Diagnóstico diferencial gasométrico y osmolar, acidosis con anion gap elevado y CAD euglicémica',
    svg: null, algoTitle: 'Algoritmo Diagnóstico Diferencial entre Cetoacidosis Diabética y Estado Hiperosmolar',
    diagram: flow('Algoritmo de Diagnóstico Diferencial de Crisis Hiperglicémicas Agudas', [
      { t: 'Paciente con Hiperglicemia Severa (> 250 mg/dL) en Urgencias', s: 'Gases arteriales/venosos, electrolitos plasmáticos, cetonemia/cetonuria y osmolaridad plasmática' },
      { k: 'split', q: '¿Acidosis Metabólica con Anion Gap Elevado vs Hiperosmolaridad Extrema sin Acidosis?', s: 'Diferenciación fisiopatológica cardinal: CAD vs EHH', ll: 'Cetoacidosis Diabética (CAD)', rl: 'Estado Hiperglicémico Hiperosmolar (EHH)',
        left: { t: 'CAD: pH < 7.30 · HCO3 < 18 · Anion Gap > 12 · Cetonas (+)', s: 'Glicemia 250-600 mg/dL · Dolor abdominal, náuseas, respiración de Kussmaul · Típico DM1 joven', type: 'warn' },
        right: { t: 'EHH: Osmolaridad Ef. > 320 mOsm/kg · pH > 7.30 · HCO3 > 18', s: 'Glicemia > 600-1000 mg/dL · Deshidratación extrema (déficit 8-12 L) y sopor/coma · Típico DM2 anciano', type: 'crit' },
        ll: 'acidosis y cetonas', rl: 'hiperosmolar y deshidratación' },
      { t: 'Forma Especial: Cetoacidosis Euglicémica (iSGLT2)', s: 'Glicemia < 250 mg/dL con pH < 7.30, HCO3 < 18 y cetonuria franca · Desencadenada por inhibidores SGLT2', type: 'dec', al: 'alerta clínica', from: 'left' },
    ]),
    contexto: 'Las complicaciones hiperglicémicas agudas son preguntas fijas en el EUNACOM. Saber diferenciar la Cetoacidosis Diabética (CAD) del Estado Hiperglicémico Hiperosmolar (EHH) mediante los criterios gasométricos (pH y bicarbonato), el Anion Gap y la osmolaridad plasmática efectiva es vital para seleccionar la estrategia terapéutica correcta. El examen evalúa con frecuencia casos clínicos de debut en pacientes pediátricos o jóvenes con dolor abdominal que simula abdomen agudo quirúrgico, así como ancianos deshidratados con compromiso de conciencia y la emergente CAD euglicémica por inhibidores de SGLT2.',
    contentSections: [
      {
        subhead: '1. Fisiopatología Comparada: Déficit Absoluto vs Relativo de Insulina',
        paragraphs: [
          'La <strong>Cetoacidosis Diabética (CAD)</strong> se produce por un <em>déficit absoluto o casi absoluto de insulina</em> sumado a una elevación masiva de hormonas contrarreguladoras (glucagón, catecolaminas, cortisol y GH). La ausencia de insulina desinhibe la lipasa sensible a hormonas del tejido adiposo, liberando ácidos grasos libres hacia el hígado, donde la carnitina palmitoiltransferasa I (CPT-1) los metaboliza hacia la beta-oxidación y producción acelerada de <strong>cuerpos cetónicos: acetoacetato y beta-hidroxibutirato</strong>. Este último es el cetoácido predominante.',
          'El <strong>Estado Hiperglicémico Hiperosmolar (EHH)</strong> se origina por un <em>déficit relativo de insulina</em> y resistencia severa en un paciente con DM2. La pequeña cantidad residual de insulina endógena en la vena porta es <strong>suficiente para inhibir la lipólisis y cetogénesis hepática</strong>, pero <strong>insuficiente para facilitar la captación periférica de glucosa</strong>. La hiperglicemia extrema resultante genera una diuresis osmótica masiva y prolongada (días a semanas), conduciendo a una deshidratación hiperosmolar crítica y colapso circulatorio con compromiso neurológico.',
        ],
      },
      {
        subhead: '2. Criterios Diagnósticos Bioquímicos y Clasificación de Severidad',
        paragraphs: [
          'Los criterios diagnósticos formales según las guías ADA y MINSAL son los siguientes:',
          '• <strong>Cetoacidosis Diabética (CAD):</strong> 1) Glicemia > 250 mg/dL (típicamente entre 300 y 600 mg/dL); 2) Acidosis metabólica: pH arterial < 7.30 (o pH venoso < 7.25) y Bicarbonato sérico < 18 mEq/L; 3) <strong>Anion Gap elevado (> 10 a 12 mEq/L)</strong>, calculado como Na⁺ − (Cl⁻ + HCO₃⁻); y 4) Cetonemia positiva (beta-hidroxibutirato > 3.0 mmol/L) o cetonuria moderada/intensa (++ o +++). La CAD se subclasifica en leve (pH 7.25–7.30, HCO3 15–18), moderada (pH 7.00–7.24, HCO3 10–14) y severa (pH < 7.00, HCO3 < 10 con sopor/coma).<br/>' +
          '• <strong>Estado Hiperglicémico Hiperosmolar (EHH):</strong> 1) Glicemia > 600 mg/dL (frecuente > 800–1200 mg/dL); 2) pH arterial > 7.30 (sin acidosis metabólica); 3) Bicarbonato sérico > 18 mEq/L; 4) Cetonas ausentes o solo trazas; y 5) <strong>Osmolaridad plasmática efectiva > 320 mOsm/kg</strong>, calculada con la fórmula: 2 × Na⁺ + (Glicemia / 18). (No se incluye el nitrógeno ureico porque difunde libremente a través de las membranas celulares y no ejerce presión osmótica efectiva).',
        ],
      },
      {
        subhead: '3. Presentación Clínica y "Trampas" Semiología en Urgencias',
        paragraphs: [
          'La CAD tiene una instalación rápida (< 24 horas), manifestándose con náuseas, vómitos repetidos, <strong>dolor abdominal difuso que simula con frecuencia un abdomen agudo quirúrgico</strong> (apendicitis, peritonitis o colecistitis), provocado por la gastroparesia aguda inducida por la acidosis e hipoperfusión mesentérica. Al examen destaca deshidratación moderada (déficit de 3 a 6 litros), <strong>respiración de Kussmaul (taquipnea profunda y rápida para eliminar CO2 compensando la acidosis)</strong> y aliento cetósico ("olor a manzana dulce o frutas podridas").',
          'El EHH tiene un curso solapado e insidioso (días a semanas de poliuria y polidipsia), manifestándose con <strong>deshidratación extrema (déficit masivo de 8 a 12 litros de agua libre)</strong>, hipotensión severa, shock hipovolémico, piel marmórea y <strong>marcado compromiso de conciencia (desde confusión y letargia hasta sopor profundo y coma)</strong> que se correlaciona directamente con la osmolaridad efectiva > 320 mOsm/kg. Pueden presentarse signos neurológicos focales transitorios (hemiparesia, convulsiones) que simulan un accidente cerebrovascular.',
        ],
      },
      {
        subhead: '4. Factores Gatillantes y Fórmulas Bioquímicas Esenciales',
        paragraphs: [
          'En más del 80% de los casos existe un factor desencadenante identificable: <strong>infecciones bacterianas agudas (neumonía e ITU son las N° 1)</strong>, abandono u omisión de la dosis de insulina, infarto agudo de miocardio, accidente cerebrovascular, pancreatitis o fármacos (corticoides en altas dosis, antipsicóticos atípicos).',
          '<strong>Fórmulas indispensables para el EUNACOM:</strong><br/>' +
          '• <strong>Sodio Corregido:</strong> Na⁺ corregido = Na⁺ medido + 1.6 × [(Glicemia − 100) / 100]. La hiperglicemia atrae agua desde el espacio intracelular al intravascular, diluyendo el sodio sérico (pseudohiponatremia de translocación). Evaluar el sodio corregido es crucial para elegir el tipo de solución de infusión (fisiológico vs hipotónico).<br/>' +
          '• <strong>Anion Gap:</strong> Na⁺ − (Cl⁻ + HCO₃⁻). Valor normal: 8 a 12 mEq/L. Permite monitorizar el cierre de la brecha aniónica en CAD.',
        ],
      },
      {
        subhead: '5. Cetoacidosis Euglicémica Asociada a Inhibidores de SGLT2 (iSGLT2)',
        paragraphs: [
          'Una entidad cada vez más evaluada en el EUNACOM es la <strong>Cetoacidosis Euglicémica</strong> inducida por iSGLT2 (dapagliflozina, empagliflozina). Al promover la glucosuria renal masiva, estos fármacos mantienen la glicemia plasmática en rangos normales o moderadamente elevados (< 200–250 mg/dL), lo que reduce la secreción de insulina endógena y estimula la secreción de glucagón.',
          'Ante un estrés intercurrente (cirugía, ayuno, infección), se desata una cetogénesis acelerada con acidosis metabólica severa con anion gap elevado y cetonemia positiva, <em>pero sin hiperglicemia marcada</em>. El médico de urgencia debe solicitar gases venosos y cetonemia ante cualquier paciente en tratamiento con iSGLT2 que consulte por náuseas, vómitos, dolor abdominal o disnea, independientemente del nivel de glicemia capilar.',
        ],
      },
    ],
    table: {
      title: 'Diagnóstico Diferencial Bioquímico y Clínico: CAD vs EHH',
      headers: ['Parámetro', 'Cetoacidosis Diabética (CAD)', 'Estado Hiperglicémico Hiperosmolar (EHH)'],
      rows: [
        ['Población Típica', 'DM1 niños o jóvenes (debut 25-30% o abandono insulina)', 'DM2 adultos mayores o ancianos institucionalizados'],
        ['Tiempo de Instalación', 'Agudo y rápido (< 24 a 48 horas)', 'Insidioso y progresivo (días a semanas)'],
        ['Nivel de Glicemia', '250 a 600 mg/dL (o < 250 mg/dL en euglicémica por iSGLT2)', 'Típicamente > 600 a 1200 mg/dL'],
        ['pH Arterial / Venoso', '< 7.30 (moderada < 7.24, severa < 7.00)', '> 7.30 (habitualmente > 7.35)'],
        ['Bicarbonato Sérico', '< 18 mEq/L (severa < 10 mEq/L)', '> 18 mEq/L (normal o levemente disminuido)'],
        ['Anion Gap', 'ELEVADO (> 10 a 12 mEq/L)', 'Normal (< 12 mEq/L)'],
        ['Cetonemia / Cetonuria', 'POSITIVA intensa (beta-hidroxibutirato > 3 mmol/L)', 'Negativa o trazas mínimas'],
        ['Osmolaridad Efectiva', 'Variable, habitualmente < 320 mOsm/kg', 'MARCADAMENTE ELEVADA (> 320 mOsm/kg)'],
        ['Déficit de Volumen', 'Moderado (3 a 6 litros, ~10% peso corporal)', 'Severo y extremo (8 a 12 litros, ~15-20% peso)'],
        ['Clínica Cardinal', 'Dolor abdominal (abdomen agudo médico), vómitos, Kussmaul', 'Sopor, estupor, coma, signos focales neurológicos'],
      ],
    },
    severityTable: {
      title: 'Clasificación de Severidad de la Cetoacidosis Diabética (ADA)',
      headers: ['Criterio', 'CAD Leve', 'CAD Moderada', 'CAD Severa'],
      rows: [
        ['Glicemia plasmática (mg/dL)', '> 250', '> 250', '> 250'],
        ['pH arterial', '7.25 – 7.30', '7.00 – 7.24', '< 7.00'],
        ['Bicarbonato sérico (mEq/L)', '15 – 18', '10 – 14', '< 10'],
        ['Cetonas en orina / suero', 'Positivas', 'Positivas', 'Positivas'],
        ['Anion Gap sérico (mEq/L)', '> 10', '> 12', '> 12'],
        ['Estado sensorial / neurológico', 'Alerta', 'Alerta a somnoliento', 'Estuporoso a comatoso'],
        ['Unidad de Hospitalización', 'Sala básica o intermedia', 'Unidad de Cuidados Intermedios', 'Unidad de Cuidados Intensivos (UCI)'],
      ],
    },
    treatmentTable: {
      title: 'Parámetros Clave para el Cálculo Diagnóstico en Emergencias Hiperglicémicas',
      headers: ['Parámetro Calculado', 'Fórmula Estándar', 'Valor Normal', 'Interpretación en la Crisis'],
      rows: [
        ['Osmolaridad Efectiva', '2 * Na + (Glicemia / 18)', '275 – 295 mOsm/kg', '> 320 mOsm/kg define EHH y explica el compromiso de conciencia'],
        ['Anion Gap', 'Na - (Cl + HCO3)', '8 – 12 mEq/L', '> 12 mEq/L confirma acumulación de cetoácidos en CAD'],
        ['Sodio Corregido', 'Na medido + 1.6 * ((Glicemia - 100) / 100)', '135 – 145 mEq/L', 'Si Na corregido es normal o alto (> 140) -> usar NaCl 0.45% hipotónico'],
        ['Beta-hidroxibutirato', 'Medición capilar directa en sangre', '< 0.5 mmol/L', '> 3.0 mmol/L confirma cetoacidosis diagnóstica'],
      ],
    },
    vignette: 'Un joven de 19 años sin antecedentes mórbidos conocidos es traído al servicio de urgencia por su familia debido a un cuadro de 24 horas de evolución caracterizado por dolor abdominal difuso e intenso, náuseas, múltiples vómitos y decaimiento severo. Al examen físico se encuentra deshidratado, taquipneico con respiraciones profundas y ruidosas, PA 100/65 mmHg, FC 118 lpm, abdomen blando y sensible en forma difusa sin signos de irritación peritoneal, y aliento con olor frutal característico. Sus exámenes muestran: glicemia capilar 420 mg/dL, pH venoso 7.12, bicarbonato 9 mEq/L, sodio 132 mEq/L, potasio 4.8 mEq/L, cloro 95 mEq/L y cetonuria ++++.',
    explicacion: 'El cuadro clínico y de laboratorio es diagnóstico de una Cetoacidosis Diabética Severa (pH < 7.20, HCO3 < 10 mEq/L, Anion Gap = 132 - [95 + 9] = 28 mEq/L, cetonuria intensa) como forma de debut de una diabetes mellitus tipo 1. El dolor abdominal difuso y la respiración de Kussmaul son manifestaciones clásicas de la acidosis metabólica por cetoácidos y no corresponden a una patología quirúrgica.',
    keyPoints: [
      'La CAD se define por la tríada: Glicemia > 250 mg/dL + pH < 7.30 (o HCO3 < 18) + Anion Gap > 10–12 mEq/L con cetonemia positiva.',
      'El EHH se define por: Glicemia > 600 mg/dL + Osmolaridad efectiva > 320 mOsm/kg + pH > 7.30 y HCO3 > 18 mEq/L sin cetosis.',
      'La osmolaridad efectiva se calcula: 2 * Na + (Glicemia / 18); el BUN no se incluye porque difunde libremente por las membranas.',
      'En la CAD, el dolor abdominal y los vómitos simulan frecuentemente un abdomen agudo; ceden al corregir la acidosis con fluidos e insulina.',
      'La respiración de Kussmaul (taquipnea profunda y rápida) es la compensación respiratoria fisiológica para barrer CO2 ante la cetoacidosis.',
      'El sodio medido debe corregirse siempre: Na corregido = Na medido + 1.6 * ((Glicemia - 100) / 100).',
      'Los inhibidores de SGLT2 pueden desencadenar cetoacidosis diabética euglicémica (glicemias < 200-250 mg/dL con acidosis severa y cetonemia).',
      'La principal causa desencadenante de CAD y EHH son las infecciones bacterianas agudas (neumonía e infección del tracto urinario).',
    ],
    questions: [
      {
        stem: 'Un paciente de 17 años consulta en el servicio de urgencias por náuseas, vómitos reiterados y dolor abdominal intenso de 12 horas de evolución. Al examen físico destaca taquipnea profunda de 28 respiraciones por minuto, aliento con olor frutal y mucosas secas. Los exámenes de laboratorio revelan: glicemia 390 mg/dL, pH arterial 7.15, bicarbonato 11 mEq/L, sodio 134 mEq/L, potasio 5.1 mEq/L, cloro 98 mEq/L y glucosuria con cetonuria ++++. ¿Cuál es el diagnóstico más probable?',
        opciones: [
          'A) Estado hiperglicémico hiperosmolar',
          'B) Cetoacidosis diabética moderada a severa',
          'C) Apendicitis aguda complicada con peritonitis séptica',
          'D) Pancreatitis aguda necrohemorrágica',
          'E) Acidosis láctica asociada a hipovolemia simple'
        ],
        correcta: 'B',
        explicacion: 'El paciente presenta todos los criterios diagnósticos de una Cetoacidosis Diabética Severa (pH arterial < 7.25, bicarbonato < 15 mEq/L, glicemia > 250 mg/dL, cetonuria marcada y un Anion Gap marcadamente elevado de 134 - [98 + 11] = 25 mEq/L). La taquipnea profunda corresponde a la respiración de Kussmaul y el dolor abdominal es un síntoma frecuente de la cetoacidosis en pacientes jóvenes que no traduce una urgencia quirúrgica abdominal.',
        recTag: 'EUNACOM Diciembre 2017 (Q#49)'
      },
      {
        stem: 'Un hombre de 76 años, diabético tipo 2 con secuelas de ACV previo y postrado en cama, es traído al hospital por compromiso de conciencia progresivo de una semana de evolución, asociando fiebre y tos con expectoración mucopurulenta. Al ingreso se encuentra estuporoso, con signos de deshidratación extrema, PA 85/50 mmHg, FC 110 lpm. Los exámenes de laboratorio demuestran: glicemia 850 mg/dL, pH arterial 7.36, bicarbonato 22 mEq/L, sodio plasmático 152 mEq/L, potasio 4.2 mEq/L, cloro 110 mEq/L y orina con glucosuria masiva sin cuerpos cetónicos. ¿Cuál es el diagnóstico fundamental?',
        opciones: [
          'A) Cetoacidosis diabética grave',
          'B) Estado hiperglicémico hiperosmolar',
          'C) Accidente cerebrovascular isquémico agudo con hiperglicemia reactiva',
          'D) Shock séptico refractario con acidosis láctica',
          'E) Diabetes insípida nefrogénica'
        ],
        correcta: 'B',
        explicacion: 'El paciente cumple rigurosamente con los criterios de un Estado Hiperglicémico Hiperosmolar (EHH): glicemia marcadamente elevada (> 600 mg/dL, en este caso 850 mg/dL), pH arterial normal (> 7.30), bicarbonato normal (> 18 mEq/L), ausencia de cetonuria y una osmolaridad plasmática efectiva marcadamente elevada: 2 * 152 + (850 / 18) = 304 + 47.2 = 351.2 mOsm/kg (muy superior al umbral de 320 mOsm/kg), lo cual explica el estupor y la deshidratación extrema de 8 a 12 litros desencadenada por una infección respiratoria.',
        recTag: 'EUNACOM Julio 2019 (Q#12)'
      },
      {
        stem: '¿Cuál de las siguientes fórmulas representa de manera exacta el cálculo de la Osmolaridad Plasmática Efectiva (tonicidad) utilizada para la definición y monitorización del Estado Hiperglicémico Hiperosmolar?',
        opciones: [
          'A) 2 * [Sodio] + [Glicemia] / 18 + [BUN] / 2.8',
          'B) 2 * [Sodio] + [Glicemia] / 18',
          'C) [Sodio] + [Potasio] - ([Cloro] + [Bicarbonato])',
          'D) 2 * [Sodio] + [Potasio] + [Glicemia] / 10',
          'E) [Glicemia] / 18 + [BUN] / 2.8'
        ],
        correcta: 'B',
        explicacion: 'La osmolaridad plasmática efectiva o tonicidad refleja la concentración de solutos que no atraviesan libremente las membranas celulares y que, por ende, generan desplazamientos osmóticos de agua entre los compartimentos intra y extracelular. Se calcula como: 2 * [Sodio] + [Glicemia] / 18 (en mg/dL). La urea (BUN) se excluye de este cálculo porque es un osmol libremente permeable que no contribuye a la deshidratación intracelular cerebral.',
        recTag: 'EUNACOM Diciembre 2021 (Q#22)'
      },
      {
        stem: 'Una paciente de 52 años con diabetes mellitus tipo 2 en tratamiento con metformina y empagliflozina consulta en urgencias por astenia severa, disnea de reposo y vómitos tras haber realizado un ayuno prolongado por un procedimiento endoscópico. Al examen físico: PA 110/70 mmHg, FC 98 lpm, polipnea de 24 rpm. Su hemoglucotest de ingreso es de 188 mg/dL. Los gases venosos muestran: pH 7.21, bicarbonato 12 mEq/L, sodio 138 mEq/L, cloro 101 mEq/L, y la cetonemia capilar resulta en 4.2 mmol/L. ¿Cuál es el diagnóstico de esta condición?',
        opciones: [
          'A) Intoxicación aguda por metformina con acidosis láctica pura',
          'B) Deshidratación por vómitos con alcalosis metabólica paradójica',
          'C) Cetoacidosis diabética euglicémica inducida por inhibidor de SGLT2',
          'D) Hiperglicemia simple de estrés sin repercusión metabólica',
          'E) Acidosis tubular renal tipo 1 descompensada'
        ],
        correcta: 'C',
        explicacion: 'La paciente presenta una acidosis metabólica con Anion Gap aumentado (138 - [101 + 12] = 25 mEq/L) y cetonemia marcadamente positiva (4.2 mmol/L), pero con glicemia < 200 mg/dL (188 mg/dL). Esta es la presentación clásica de la Cetoacidosis Diabética Euglicémica desencadenada por inhibidores del cotransportador SGLT2 (como empagliflozina o dapagliflozina) en situaciones de estrés metabólico, ayuno o cirugía, donde la glucosuria forzada mantiene la glicemia engañosamente baja.',
        recTag: 'EUNACOM Julio 2023 (Q#56)'
      }
    ]
  },
  {
    id: 'diab-16',
    classId: 'diab-16',
    tier: 3,
    blockNum: 4,
    blockName: 'Emergencias Hiperglicémicas Agudas',
    topicLabel: '4.2',
    title: 'Protocolo de Reanimación con Fluidos y Expansión en CAD/EHH',
    perfilCode: '1.04.1.017',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES N° 2): Diabetes Mellitus / Urgencia Médica Hospitalaria',
    reconstrucciones: 'EUNACOM Diciembre 2018 (Q#41) · EUNACOM Julio 2020 (Q#15) · EUNACOM Diciembre 2021 (Q#33) · EUNACOM Julio 2023 (Q#29)',
    frecuencia: 'Máxima · Primera medida de manejo, cálculo de sodio corregido, uso de suero fisiológico vs hipotónico y momento del suero glucosado',
    svg: null, algoTitle: 'Protocolo de Fluidoterapia Escalonada en Cetoacidosis Diabética y Estado Hiperosmolar',
    diagram: flow('Algoritmo de Hidratación Parenteral Escalonada en Crisis Hiperglicémicas', [
      { t: 'Paso 1 OBLIGATORIO: Expansión Inicial con Cristaloides Isotónicos', s: '1° Hora: Suero Fisiológico 0.9% 1.000 a 1.500 ml EV (15-20 ml/kg) para restaurar volemia y perfusión renal' },
      { k: 'split', q: '¿Paso 2: Evaluar Nivel de Sodio Plasmático Corregido tras la 1° Hora?', s: 'Fórmula: Na corregido = Na medido + 1.6 * ((Glicemia - 100) / 100)', ll: 'Na Corregido Normal o Alto (≥ 135 mEq/L)', rl: 'Na Corregido Bajo (< 135 mEq/L)',
        left: { t: 'Cambiar a Suero Fisiológico al 0.45% (Hipotónico)', s: 'Infusión a 250 – 500 ml/hora para reponer el déficit de agua libre celular', type: 'acc' },
        right: { t: 'Continuar con Suero Fisiológico al 0.9% (Isotónico)', s: 'Infusión a 250 – 500 ml/hora hasta normalizar el sodio corregido', type: 'warn' },
        ll: 'Na normal/alto: NaCl 0.45%', rl: 'Na bajo: NaCl 0.9%' },
      { t: 'Paso 3 CRUCIAL: Agregar Glucosa al 5% cuando Glicemia ≤ 200–250 mg/dL', s: 'En CAD (glicemia ≤ 200) o EHH (≤ 300): agregar SG 5% con NaCl para evitar hipoglicemia y edema cerebral y CONTINUAR insulina', type: 'crit', al: 'regla de la glucosa', from: 'left' },
    ]),
    contexto: 'La piedra angular y primera medida absoluta en el manejo de toda crisis hiperglicémica aguda es la fluidoterapia endovenosa vigorosa. El EUNACOM insiste sistemáticamente en evaluar que el médico priorice la hidratación con solución salina isotónica antes de cualquier administración de insulina, calcule correctamente el sodio corregido para definir la transición a solución salina hipotónica al 0.45%, y sobre todo, reconozca el momento exacto en que DEBE adicionarse suero glucosado (cuando la glicemia cae a ≤ 200 mg/dL en CAD o ≤ 300 mg/dL en EHH) para permitir que la infusión de insulina continúe activa hasta el cierre del Anion Gap.',
    contentSections: [
      {
        subhead: '1. Prioridad Absoluta de la Fluidoterapia: ¿Por qué los Fluidos van Antes de la Insulina?',
        paragraphs: [
          'En toda emergencia hiperglicémica (CAD o EHH), la <strong>primera intervención médica mandataria es la infusión rápida de volumen con cristaloides isotónicos</strong>. La administración precipitada de insulina sin expansión previa de volumen es un error grave que puede precipitar <em>colapso hemodinámico y shock distributivo/hipovolémico</em>: al ingresar la glucosa al espacio intracelular mediada por la insulina, el agua extracelular la sigue osmóticamente, colapsando el volumen intravascular.',
          'Además, la simple reanimación con fluidos reduce la glicemia en los primeros 60–90 minutos entre 50 y 100 mg/dL exclusivamente por hemodilución, disminución de las hormonas contrarreguladoras e incremento del filtrado glomerular que reactiva la excreción renal de glucosa.',
        ],
      },
      {
        subhead: '2. Fase de Expansión Inicial (Hora 1) y Restauración Hemodinámica',
        paragraphs: [
          'Durante la <strong>primera hora</strong> de tratamiento, se debe infundir <strong>Suero Fisiológico al 0.9% (NaCl 0.9%) a una velocidad de 1.000 a 1.500 ml/hora (o 15 a 20 ml/kg de peso)</strong> por vía venosa periférica gruesa.',
          'Si el paciente se encuentra en shock hipovolémico franco (PA sistólica < 90 mmHg, frialdad periférica, anuria), se deben infundir bolos adicionales de 1.000 ml de solución salina isotónica en 30 minutos hasta restaurar la presión arterial media (PAM ≥ 65 mmHg) antes de iniciar cualquier otra terapia.',
        ],
      },
      {
        subhead: '3. Fase de Mantenimiento: Selección de Fluidos según Sodio Corregido',
        paragraphs: [
          'Tras la expansión de la primera hora, la elección del fluido depende críticamente del <strong>Sodio Plasmático Corregido</strong>:',
          '• Si el <strong>Sodio Corregido es NORMAL O ELEVADO (≥ 135 mEq/L)</strong>: Indica que existe una pérdida desproporcionada de agua libre respecto al sodio (hipertonicidad celular). El fluido de elección es el <strong>Suero Fisiológico al 0.45% (NaCl 0.45%, solución hipotónica) a una velocidad de 250 a 500 ml/hora</strong> para favorecer el reingreso de agua al intracelular.<br/>' +
          '• Si el <strong>Sodio Corregido es BAJO (< 135 mEq/L)</strong>: Persiste el déficit de sodio corporal total relativo. Se debe continuar con <strong>Suero Fisiológico al 0.9% a 250 a 500 ml/hora</strong> hasta su normalización.',
        ],
      },
      {
        subhead: '4. La Regla de Oro de la Glucosa: Adición de Suero Glucosado al 5%',
        paragraphs: [
          'Esta es una de las reglas terapéuticas más evaluadas en el EUNACOM. La hiperglicemia desciende mucho más rápido que la resolución de la acidosis metabólica o el cierre del Anion Gap.',
          'Cuando la glicemia plasmática alcanza <strong>≤ 200 mg/dL en CAD (o ≤ 300 mg/dL en EHH)</strong>, se presenta un dilema: si se suspende la insulina para evitar la hipoglicemia, la cetoacidosis no se resolverá; y si se mantiene la insulina con solo suero salino, el paciente caerá en hipoglicemia severa.',
          '<strong>Conducta Mandatoria:</strong> En el momento exacto en que la glicemia llega a ≤ 200 mg/dL (CAD) o ≤ 300 mg/dL (EHH), se debe <strong>CAMBIAR la fluidoterapia a Suero Glucosado al 5% (o Suero Glucosalino) a 150–250 ml/hora y REDUCIR la infusión de insulina a la mitad (0.02 a 0.05 UI/kg/h)</strong>. Esto mantiene la glicemia estable entre 150 y 200 mg/dL mientras la insulina continúa suprimiendo la lipólisis y cetogénesis hepática hasta la completa resolución bioquímica.',
        ],
      },
      {
        subhead: '5. Estimación del Déficit de Agua y Balance Hídrico Estricto',
        paragraphs: [
          'En la CAD, el déficit medio de agua corporal total es de 3 a 6 litros (~100 ml/kg), mientras que en el EHH el déficit asciende a 8 a 12 litros (~150 a 200 ml/kg).',
          'La reposición total del déficit hídrico calculado debe planificarse para ser completada en <strong>24 a 48 horas</strong>, evitando descensos de osmolaridad plasmática mayores a 3 mOsm/kg/hora para prevenir el temible <em>edema cerebral</em>.',
        ],
      },
    ],
    table: {
      title: 'Esquema Cronológico de Fluidoterapia en Emergencias Hiperglicémicas (CAD y EHH)',
      headers: ['Fase del Tratamiento', 'Tiempo / Parámetro Clave', 'Solución Intravenosa', 'Velocidad de Infusión', 'Objetivo Clínico'],
      rows: [
        ['Fase 1: Expansión Inicial', 'Hora 1 (todos los pacientes)', 'NaCl 0.9% (Suero Fisiológico)', '1.000 a 1.500 ml/h (15-20 ml/kg)', 'Restaurar volemia eficaz y perfusión renal'],
        ['Fase 2A: Na Corregido Normal/Alto', 'Horas 2 a 24 (Na corr ≥ 135)', 'NaCl 0.45% (Solución Hipotónica)', '250 a 500 ml/h', 'Reponer déficit de agua libre intracelular'],
        ['Fase 2B: Na Corregido Bajo', 'Horas 2 a 24 (Na corr < 135)', 'NaCl 0.9% (Suero Fisiológico)', '250 a 500 ml/h', 'Corregir hiponatremia y sostener intravascular'],
        ['Fase 3: Transición Glucídica (CAD)', 'Glicemia alcanza ≤ 200 mg/dL', 'Suero Glucosado 5% en NaCl 0.45%', '150 a 250 ml/h', 'Prevenir hipoglicemia y PERMITIR continuar insulina'],
        ['Fase 3: Transición Glucídica (EHH)', 'Glicemia alcanza ≤ 300 mg/dL', 'Suero Glucosado 5% en NaCl 0.45%', '150 a 250 ml/h', 'Evitar caída brusca de osmolaridad y edema cerebral'],
      ],
    },
    severityTable: {
      title: 'Riesgos Asociados a Errores en la Fluidoterapia de CAD y EHH',
      headers: ['Error de Manejo', 'Mecanismo Fisiopatológico', 'Consecuencia Clínica Grave', 'Conducta Correcta'],
      rows: [
        ['Iniciar insulina antes que los fluidos', 'Desplazamiento masivo de agua del extracelular al intracelular', 'Colapso hemodinámico súbito y shock refractario', 'Iniciar SIEMPRE con 1.000-1.500 ml de NaCl 0.9% en la 1° hora'],
        ['No agregar glucosa al llegar a 200 mg/dL', 'Consumo periférico continuo de glucosa inducido por la insulina', 'Hipoglicemia severa o suspensión prematura de insulina', 'Iniciar SG 5% apenas glicemia sea ≤ 200 mg/dL (CAD) o ≤ 300 (EHH)'],
        ['Reposición hídrica excesivamente rápida', 'Caída precipitada de la osmolaridad sérica extracelular', 'Edema cerebral severo con herniación uncal y muerte', 'Limitar infusión a 250-500 ml/h tras expansión y vigilar signos'],
        ['Uso exclusivo de NaCl 0.9% por > 24 horas', 'Aporte masivo de cloro (154 mEq/L) que desplaza bicarbonato', 'Acidosis metabólica hiperclorémica con anion gap normal', 'Cambiar a NaCl 0.45% según sodio corregido'],
      ],
    },
    treatmentTable: {
      title: 'Monitoreo Hídrico y Electrolítico Horario en Unidad de Paciente Crítico',
      headers: ['Parámetro', 'Frecuencia de Control', 'Meta Terapéutica', 'Ajuste Inmediato si Falla'],
      rows: [
        ['Glicemia capilar', 'Cada 1 hora', 'Descenso de 50 a 75 mg/dL/hora', 'Si baja < 50 mg/h: subir insulina; si baja > 100: bajar'],
        ['Electrolitos plasmáticos (Na, K, Cl)', 'Cada 2 a 4 horas', 'K entre 4.0 y 5.0 mEq/L; Na corr estable', 'Ajustar aporte de KCl en matraces de fluidos'],
        ['Gases venosos (pH, HCO3, Anion Gap)', 'Cada 2 a 4 horas', 'Aumento de HCO3 > 1-2 mEq/h; cierre Anion Gap', 'Continuar infusión de insulina y SG 5% hasta resolución'],
        ['Diuresis horaria (catéter vesical)', 'Horaria estricta', '> 0.5 ml/kg/hora (> 30-50 ml/h)', 'Si oliguria: verificar volemia o descartar NTA'],
      ],
    },
    vignette: 'Un hombre de 26 años con antecedente de DM1 ingresa a la urgencia cursando una cetoacidosis diabética severa (glicemia 480 mg/dL, pH 7.10, HCO3 8 mEq/L, Na 130 mEq/L). Durante la primera hora se le infunden 1.500 ml de solución salina isotónica al 0.9% y luego se inicia infusión continua de insulina cristalina. A las 4 horas de evolución, un nuevo control de hemoglucotest marca 194 mg/dL. Los gases venosos de control muestran: pH 7.22, HCO3 13 mEq/L y Anion Gap de 17 mEq/L.',
    explicacion: 'Aunque la glicemia ha descendido favorablemente por debajo de 200 mg/dL (194 mg/dL), los gases demuestran que la cetoacidosis NO está resuelta (pH < 7.30, HCO3 < 18 mEq/L y Anion Gap aún elevado en 17 mEq/L). Si el médico suspende la insulina, la producción hepática de cetoácidos rebrotará. La conducta correcta y mandataria es mantener la infusión de insulina a menor velocidad (0.02–0.05 UI/kg/h) y agregar inmediatamente Suero Glucosado al 5% a la fluidoterapia endovenosa para prevenir la hipoglicemia y permitir que la insulina continúe cerrando el Anion Gap.',
    keyPoints: [
      'La primera medida de reanimación en toda crisis hiperglicémica es SIEMPRE la fluidoterapia isotónica (NaCl 0.9% 1.000 a 1.500 ml en la primera hora).',
      'Nunca debe administrarse insulina antes de iniciar la expansión de volumen, ya que precipitaría un colapso cardiovascular por arrastre osmótico de agua al intracelular.',
      'Tras la primera hora, se evalúa el Sodio Corregido: si es ≥ 135 mEq/L se cambia a solución salina hipotónica al 0.45%; si es < 135 mEq/L se continúa con NaCl 0.9%.',
      'Regla mandataria: cuando la glicemia sea ≤ 200 mg/dL en CAD o ≤ 300 mg/dL en EHH, se DEBE agregar Suero Glucosado al 5% a la hidratación.',
      'La insulina NUNCA debe suspenderse al llegar a 200 mg/dL si el Anion Gap sigue abierto; se reduce su dosis y se infunde glucosa parenteral.',
      'El déficit hídrico medio es de 3 a 6 litros en CAD y de 8 a 12 litros en EHH; su reposición debe completarse en 24 a 48 horas.',
      'El descenso glicémico seguro es de 50 a 75 mg/dL por hora; descensos más rápidos (> 100 mg/dL/h) predisponen a edema cerebral.',
      'El uso prolongado de suero salino al 0.9% puede generar acidosis metabólica hiperclorémica con anion gap normal, la cual no debe confundirse con persistencia de cetoacidosis.',
    ],
    questions: [
      {
        stem: 'Un joven de 21 años con diagnóstico reciente de diabetes mellitus tipo 1 es llevado al servicio de urgencias por compromiso de conciencia progresivo, respiración profunda y ruidosa, y vómitos reiterados. Al ingreso se constata sopor, mucosas secas, PA 85/55 mmHg, FC 122 lpm, hemoglucotest que marca "HI" (> 500 mg/dL) y cetonuria franca. ¿Cuál de las siguientes acciones terapéuticas debe realizarse en PRIMER lugar de forma imperativa?',
        opciones: [
          'A) Administrar un bolo endovenoso de 10 UI de insulina cristalina',
          'B) Iniciar infusión de bicarbonato de sodio al 2/3 molar',
          'C) Iniciar infusión endovenosa rápida de Suero Fisiológico al 0.9% (1.000 a 1.500 ml en la primera hora)',
          'D) Administrar 20 mEq de cloruro de potasio en bolo endovenoso directo',
          'E) Realizar una punción lumbar para descartar meningoencefalitis infecciosa'
        ],
        correcta: 'C',
        explicacion: 'En el manejo inicial de la cetoacidosis diabética y el estado hiperosmolar, la prioridad terapéutica absoluta número uno es la restauración del volumen intravascular y la perfusión tisular mediante la administración inmediata de cristaloides isotónicos (Suero Fisiológico 0.9% a 1.000–1.500 ml/h o 15–20 ml/kg/h). La insulina jamás debe administrarse antes de iniciar la hidratación porque induciría una caída del volumen intravascular al arrastrar agua al interior celular, precipitando un shock refractario.',
        recTag: 'EUNACOM Diciembre 2018 (Q#41)'
      },
      {
        stem: 'Un paciente de 25 años en tratamiento por cetoacidosis diabética severa ha recibido 3.500 ml de fluidos y una infusión de insulina cristalina a 0.1 UI/kg/hora durante las últimas 5 horas. Su glicemia plasmática ha descendido progresivamente desde 480 mg/dL hasta 195 mg/dL. Los gases venosos actuales muestran: pH 7.24, bicarbonato 14 mEq/L y Anion Gap de 16 mEq/L (aún elevado). ¿Cuál es la conducta correcta respecto a los fluidos e insulina en este momento?',
        opciones: [
          'A) Suspender completamente la infusión de insulina y pasar a insulina NPH subcutánea',
          'B) Continuar solo con suero fisiológico al 0.9% y duplicar la infusión de insulina a 0.2 UI/kg/h',
          'C) Agregar Suero Glucosado al 5% a la hidratación endovenosa y reducir la infusión de insulina a 0.02–0.05 UI/kg/h',
          'D) Suspender todos los fluidos intravenosos e iniciar tolerancia oral con agua fría',
          'E) Administrar una ampolla de bicarbonato de sodio en bolo para normalizar el pH'
        ],
        correcta: 'C',
        explicacion: 'Cuando la glicemia desciende a valores ≤ 200 mg/dL en CAD, es obligatorio incorporar Suero Glucosado al 5% (o suero glucosalino) a la fluidoterapia endovenosa y disminuir la velocidad de infusión de insulina (a 0.02-0.05 UI/kg/h). La razón fundamental es que la cetoacidosis NO está resuelta (pH < 7.30, bicarbonato < 18 mEq/L y Anion Gap aún abierto en 16 mEq/L); por ende, no se puede suspender la insulina sin reactivar la cetogénesis, requiriéndose glucosa exógena para prevenir una hipoglicemia severa mientras se completa la resolución metabólica.',
        recTag: 'EUNACOM Julio 2020 (Q#15)'
      },
      {
        stem: 'En un paciente cursando un Estado Hiperglicémico Hiperosmolar con glicemia de 900 mg/dL y sodio plasmático medido de 140 mEq/L, tras haber completado la reanimación inicial con 1.500 ml de solución salina al 0.9% en la primera hora, ¿cuál es el fluido intravenoso de elección para la fase de mantenimiento?',
        opciones: [
          'A) Suero Fisiológico al 0.9% (NaCl 0.9%)',
          'B) Solución Salina Hipotónica al 0.45% (NaCl 0.45%)',
          'C) Suero Glucosado al 10%',
          'D) Ringer Lactato con bicarbonato',
          'E) Agua destilada endovenosa pura sin electrolitos'
        ],
        correcta: 'B',
        explicacion: 'Para decidir el fluido de mantenimiento se debe calcular el sodio corregido: Na corregido = Na medido + 1.6 * ((Glicemia - 100) / 100) = 140 + 1.6 * ((900 - 100) / 100) = 140 + 1.6 * 8 = 140 + 12.8 = 152.8 mEq/L. Al resultar el sodio corregido francamente hipernatrémico (> 145 mEq/L), existe un déficit masivo de agua libre que debe reponerse con una solución hipotónica como la Solución Salina al 0.45% (NaCl 0.45%) a 250–500 ml/h.',
        recTag: 'EUNACOM Diciembre 2021 (Q#33)'
      },
      {
        stem: '¿Cuál es la velocidad de reducción de la glicemia plasmática considerada óptima y segura durante la fluidoterapia e insulinoterapia en las crisis hiperglicémicas agudas para evitar el edema cerebral?',
        opciones: [
          'A) Más de 150 mg/dL por hora',
          'B) 100 a 140 mg/dL por hora',
          'C) 50 a 75 mg/dL por hora',
          'D) 10 a 20 mg/dL por hora',
          'E) La glicemia debe normalizarse a menos de 100 mg/dL en las primeras 2 horas'
        ],
        correcta: 'C',
        explicacion: 'El objetivo de descenso glucémico seguro en el manejo de la cetoacidosis diabética y el estado hiperosmolar es de 50 a 75 mg/dL por hora (o aproximadamente un 10% del valor basal por hora). Descensos más bruscos o violentos (> 100 mg/dL/h) provocan caídas drásticas y precipitadas de la osmolaridad sérica eficaz, generando un gradiente osmótico favorable a la entrada masiva de agua hacia el parénquima cerebral con el consecuente edema cerebral agudo.',
        recTag: 'EUNACOM Julio 2023 (Q#29)'
      }
    ]
  },
  {
    id: 'diab-17',
    classId: 'diab-17',
    tier: 2,
    blockNum: 4,
    blockName: 'Emergencias Hiperglicémicas Agudas',
    topicLabel: '4.3',
    title: 'Insulinoterapia Endovenosa y Manejo del Potasio y Bicarbonato',
    perfilCode: '1.04.1.017',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES N° 2): Diabetes Mellitus / Urgencia Hospitalaria',
    reconstrucciones: 'EUNACOM Julio 2017 (Q#38) · EUNACOM Diciembre 2022 (Q#44)',
    frecuencia: 'Alta · Criterios absolutos de potasio para iniciar insulina e indicación restringida de bicarbonato',
    svg: null, algoTitle: 'Algoritmo de Manejo de Potasio, Insulina EV y Bicarbonato en CAD',
    diagram: flow('Protocolo de Manejo de Potasio y Bicarbonato en Cetoacidosis', [
      { t: 'Evaluación Inmediata de Potasemia antes de Iniciar Insulina EV', s: '¡REGLA ABSOLUTA DE SEGURIDAD!: La insulina introduce potasio masivamente a la célula' },
      { k: 'split', q: '¿Nivel de Potasio Sérico Inicial Basal?', s: 'Define si es seguro o letal iniciar insulina en forma simultánea', ll: 'K+ < 3.3 mEq/L (Hipokalemia)', rl: 'K+ entre 3.3 y 5.2 mEq/L (Normokalemia)',
        left: { t: '¡DETENER INSULINA! Reponer K+ Primero', s: 'Infundir KCl 20 a 30 mEq/h en fluidos hasta que K+ > 3.3 mEq/L · Previene paro cardíaco', type: 'crit' },
        right: { t: 'Iniciar Insulina EV + Aporte de K+ de Mantención', s: 'Insulina cristalina 0.1 UI/kg/h EV + 20-30 mEq KCl por litro de hidratación', type: 'acc' },
        ll: 'K < 3.3: postergar insulina', rl: 'K 3.3-5.2: insulina + K' },
      { t: 'Indicación de Bicarbonato de Sodio: ÚNICAMENTE si pH < 6.90', s: 'Si pH < 6.90: 100 mmol de NaHCO3 en 400 ml de agua + 20 mEq KCl en 2 horas · ¡Prohibido si pH ≥ 6.90!', type: 'dec', al: 'regla del pH < 6.9', from: 'right' },
    ]),
    contexto: 'El manejo farmacológico fino en la CAD exige dos conocimientos que son evaluados reiteradamente en el EUNACOM: la contraindicación absoluta de administrar insulina si el potasio plasmático es menor a 3.3 mEq/L (por riesgo inminente de arritmias ventriculares letales e hipokalemia profunda), y la restricción estricta del bicarbonato de sodio exclusivamente a pacientes con pH menor a 6.90, dado que su uso indiscriminado induce hipokalemia grave, acidosis paradójica del líquido cefalorraquídeo y retardo en la eliminación de los cuerpos cetónicos.',
    contentSections: [
      {
        subhead: '1. El Gran Peligro del Potasio: Déficit Corporal Total con Potasemia Normal o Alta',
        paragraphs: [
          'En la cetoacidosis diabética, todos los pacientes presentan un <strong>severo déficit de potasio corporal total (de 3 a 5 mEq/kg)</strong> debido a las enormes pérdidas urinarias por diuresis osmótica y vómitos. Sin embargo, en la muestra de sangre inicial, la <em>potasemia puede resultar falsamente normal o incluso elevada (hiperkalemia)</em> debido al desplazamiento de potasio desde el espacio intracelular al extracelular causado por la acidosis metabólica y el déficit de insulina.',
          'Tan pronto como se inicia la administración de insulina e hidratación, <strong>el potasio ingresa masivamente al interior celular</strong>. Si el médico no anticipa este fenómeno, el paciente caerá en una hipokalemia crítica en cuestión de minutos.',
          '<strong>Regla de Oro Indiscutida:</strong> Si el <strong>potasio sérico es < 3.3 mEq/L, NO SE DEBE ADMINISTRAR INSULINA</strong>. Se debe suspender o postergar la insulina e iniciar inmediatamente la infusión de cloruro de potasio (KCl) a 20–30 mEq/hora hasta que la potasemia supere los 3.3 mEq/L. Si el potasio está entre 3.3 y 5.2 mEq/L, se administra insulina y se agregan 20 a 30 mEq de KCl por cada litro de fluido parenteral. Si el potasio es > 5.2 mEq/L, no se aporta potasio pero se controla cada 2 horas.',
        ],
      },
      {
        subhead: '2. Pauta de Insulinoterapia Endovenosa Continua',
        paragraphs: [
          'La vía de elección en CAD moderada a severa y EHH es la <strong>infusión endovenosa continua de insulina cristalina (regular)</strong> mediante bomba de infusión: 100 UI de insulina cristalina diluidas en 100 ml de suero fisiológico (1 UI/ml).',
          'Se administra a una <strong>tasa fija de 0.1 UI/kg/hora</strong> (con o sin bolo inicial de 0.1 UI/kg EV) o bien a <strong>0.14 UI/kg/hora continua directa sin bolo</strong>. El objetivo es alcanzar un descenso de glicemia de <strong>50 a 75 mg/dL por hora</strong>. Si en la primera hora la glicemia no desciende al menos 50 mg/dL, se debe duplicar la velocidad de infusión horaria.',
        ],
      },
      {
        subhead: '3. Indicación Restringida y Peligros del Bicarbonato de Sodio',
        paragraphs: [
          'El uso de bicarbonato de sodio en la CAD ha sido abandonado de la práctica rutinaria por los graves riesgos demostrados en ensayos clínicos: induce hipokalemia severa, empeora la acidosis intracelular y paradójica del SNC (el bicarbonato exógeno se convierte en CO2 que cruza libremente la barrera hematoencefálica mientras el HCO3 no lo hace), prolonga la cetosis y desvía la curva de disociación de la hemoglobina a la izquierda dificultando la oxigenación tisular.',
          'Las guías ADA y MINSAL restringen el bicarbonato <strong>EXCLUSIVAMENTE a pacientes con pH arterial < 6.90</strong> (con inestabilidad hemodinámica o depresión miocárdica refractaria). Dosis: 100 mmol de Bicarbonato de Sodio en 400 ml de agua destilada con 20 mEq de KCl a pasar en 2 horas, repitiendo hasta que el pH sea ≥ 7.00.',
        ],
      },
    ],
    table: {
      title: 'Algoritmo de Manejo del Potasio Plasmático durante la Insulinoterapia en CAD',
      headers: ['Potasemia Medida (K+)', 'Conducta con la Insulina', 'Aporte de Cloruro de Potasio (KCl)', 'Objetivo Clínico'],
      rows: [
        ['< 3.3 mEq/L (Hipokalemia severa)', '¡NO INICIAR o SUSPENDER de inmediato!', 'Infundir 20 a 30 mEq/hora de KCl hasta K > 3.3', 'Prevenir paro cardíaco en diástole o arritmias fatales'],
        ['3.3 a 5.2 mEq/L (Rango óptimo)', 'Iniciar o mantener a 0.1 UI/kg/hora', 'Agregar 20 a 30 mEq de KCl por cada litro de hidratación', 'Mantener potasemia estable entre 4.0 y 5.0 mEq/L'],
        ['> 5.2 mEq/L (Hiperkalemia)', 'Iniciar insulina a 0.1 UI/kg/hora', 'NO aportar potasio; controlar cada 2 horas', 'Permitir que la insulina baje el potasio a rango normal'],
      ],
    },
    vignette: 'Una joven de 18 años con DM1 llega a urgencias en cetoacidosis diabética severa con glicemia de 460 mg/dL y pH venoso de 7.08. El ionograma de urgencia informa: Na 134 mEq/L, Cl 96 mEq/L y Potasio de 2.9 mEq/L. El interno de medicina prepara una jeringa con 10 UI de insulina cristalina para pasar en bolo endovenoso directo e iniciar la bomba a 6 UI/hora.',
    explicacion: 'La conducta del interno es altamente peligrosa e incorrecta. Ante una potasemia < 3.3 mEq/L (2.9 mEq/L), la administración de insulina está estrictamente contraindicada porque internaliza velozmente el potasio extracelular restante, induciendo hipokalemia severa (< 2.0 mEq/L), fibrilación ventricular, debilidad diafragmática y paro cardiorrespiratorio. La indicación correcta es suspender la insulina e infundir suero con cloruro de potasio a 20-30 mEq/h hasta que el potasio supere 3.3 mEq/L.',
    keyPoints: [
      'Si la potasemia es < 3.3 mEq/L, la insulina está FORMALMENTE CONTRAINDICADA hasta que se reponga potasio y supere dicho umbral.',
      'Si el potasio está entre 3.3 y 5.2 mEq/L, se inicia insulina pero se deben agregar 20 a 30 mEq de KCl por cada litro de solución de hidratación.',
      'El bicarbonato de sodio está estrictamente restringido a pacientes con acidosis extrema con pH < 6.90.',
      'Administrar bicarbonato con pH ≥ 6.90 empeora la hipokalemia, produce acidosis paradójica del líquido cefalorraquídeo y retrasa la curación.',
      'La tasa de infusión de insulina cristalina de elección es de 0.1 UI/kg/hora por vía endovenosa continua.',
      'La meta de descenso glucémico es de 50 a 75 mg/dL por hora; si no se logra en la 1° hora, se duplica la tasa de infusión.',
    ],
    questions: [
      {
        stem: 'Un paciente de 23 años con diabetes tipo 1 ingresa en cetoacidosis diabética severa. Tras la primera hora de infusión de 1.500 ml de suero fisiológico, los exámenes de laboratorio informan: glicemia 430 mg/dL, pH venoso 7.14, bicarbonato 10 mEq/L y potasio plasmático de 3.0 mEq/L. ¿Cuál es la conducta terapéutica correcta respecto a la administración de insulina y electrolitos?',
        opciones: [
          'A) Iniciar inmediatamente insulina cristalina a 0.1 UI/kg/h y diferir el potasio para cuando la glicemia sea normal',
          'B) Postergar la administración de insulina e infundir cloruro de potasio a 20–30 mEq/hora hasta que la potasemia sea superior a 3.3 mEq/L',
          'C) Administrar un bolo de bicarbonato de sodio y luego iniciar insulina en dosis doble',
          'D) Iniciar insulina NPH subcutánea inmediatamente y restringir la ingesta de potasio',
          'E) Administrar gluconato de calcio endovenoso para antagonizar el potasio'
        ],
        correcta: 'B',
        explicacion: 'En presencia de hipokalemia con potasio sérico < 3.3 mEq/L, la administración de insulina debe retrasarse de manera obligatoria. La insulina promueve la entrada masiva de potasio hacia el interior de las células mediante la activación de la bomba Na+/K+ ATPasa; si se administra con niveles < 3.3 mEq/L puede precipitar una hipokalemia fulminante con arritmias cardíacas fatales, parada cardíaca y parálisis de los músculos respiratorios. Se debe aportar potasio a 20-30 mEq/h y solo iniciar insulina cuando el potasio supere los 3.3 mEq/L.',
        recTag: 'EUNACOM Julio 2017 (Q#38)'
      },
      {
        stem: '¿Bajo qué criterio clínico y gasométrico formal está indicada la administración de bicarbonato de sodio endovenoso en un paciente con cetoacidosis diabética según las guías clínicas internacionales y del MINSAL?',
        opciones: [
          'A) Siempre que el bicarbonato sérico sea menor a 15 mEq/L',
          'B) Únicamente si el pH arterial o venoso es menor a 6.90 a pesar de la hidratación inicial',
          'C) Cuando el Anion Gap sea superior a 20 mEq/L',
          'D) En todos los casos con respiración de Kussmaul presente al ingreso',
          'E) En presencia de cetonuria ++++ independiente del valor de pH'
        ],
        correcta: 'B',
        explicacion: 'La administración de bicarbonato de sodio en la cetoacidosis diabética no ha demostrado beneficio en la morbimortalidad y se asocia a riesgos graves como hipokalemia severa, retraso en la caída de cuerpos cetónicos y acidosis paradójica en el sistema nervioso central. Por lo tanto, su indicación se encuentra estrictamente limitada a aquellos pacientes con acidosis extrema potencialmente letal con un pH < 6.90.',
        recTag: 'EUNACOM Diciembre 2022 (Q#44)'
      }
    ]
  },
  {
    id: 'diab-18',
    classId: 'diab-18',
    tier: 2,
    blockNum: 4,
    blockName: 'Emergencias Hiperglicémicas Agudas',
    topicLabel: '4.4',
    title: 'Criterios de Resolución de CAD/EHH y Traslape a Insulina Subcutánea',
    perfilCode: '1.04.1.017',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES N° 2): Diabetes Mellitus',
    reconstrucciones: 'EUNACOM Diciembre 2019 (Q#27) · EUNACOM Diciembre 2021 (Q#14)',
    frecuencia: 'Alta · Criterios de curación bioquímica de CAD y técnica del traslape subcutáneo',
    svg: null, algoTitle: 'Algoritmo de Criterios de Resolución y Técnica de Traslape a Insulina Subcutánea',
    diagram: flow('Algoritmo de Resolución de CAD y Protocolo de Traslape Subcutáneo', [
      { t: 'Verificación de Criterios Bioquímicos de Resolución de CAD', s: '1. Glicemia < 200 mg/dL Y 2 de los 3: pH venoso > 7.30 · HCO3 ≥ 18 mEq/L · Anion Gap normal (≤ 12)' },
      { k: 'split', q: '¿Cumple Criterios de Resolución y Tolera Alimentación por Vía Oral?', s: 'Define si está listo para el traslape a insulina subcutánea', ll: 'Sí: Criterios Cumplidos y Tolera Vía Oral', rl: 'No: Acidosis Persistente o No Tolera Vía Oral',
        left: { t: 'Protocolo de Traslape a Insulina Subcutánea', s: 'Administrar Insulina Basal SC (NPH o Glargina) 1 a 2 HORAS ANTES de suspender la infusión EV de insulina', type: 'acc' },
        right: { t: 'Continuar Infusión EV de Insulina y SG 5%', s: 'Mantener bomba de infusión y fluidos con glucosa hasta que el Anion Gap se normalice completamente', type: 'warn' },
        ll: 'traslape seguro', rl: 'continuar EV' },
      { t: '¡Peligro de Cetoacidosis de Rebote si se Apaga la Bomba Prematuramente!', s: 'La insulina EV tiene vida media de 5 a 9 minutos; si se corta la infusión sin basal SC previa, la cetosis rebrota de inmediato', type: 'crit', al: 'ventana de seguridad', from: 'left' },
    ]),
    contexto: 'El traslape de la terapia endovenosa a la vía subcutánea es uno de los momentos de mayor vulnerabilidad en el manejo intrahospitalario de la cetoacidosis diabética. La insulina cristalina administrada por vía endovenosa tiene una vida media ultracorta de solo 5 a 9 minutos. Si un médico apaga la bomba de infusión en el momento de inyectar la primera dosis subcutánea (o peor aún, antes de inyectarla), el paciente queda sin insulina circulante durante 1 a 2 horas (tiempo que tarda en absorberse la insulina subcutánea), lo que desata una cetoacidosis diabética de rebote. Comprender la técnica del traslape con 1 a 2 horas de superposición es evaluado sistemáticamente.',
    contentSections: [
      {
        subhead: '1. Criterios Formales de Resolución de la Cetoacidosis Diabética',
        paragraphs: [
          'La resolución de la CAD no se define por la simple normalización de la glicemia, sino por la <strong>resolución de la cetoacidosis metabólica sistémica</strong>. Se considera resuelta cuando se cumplen simultáneamente:',
          '1) <strong>Glicemia < 200 mg/dL</strong>;<br/>' +
          '2) Al menos <strong>dos de los tres siguientes parámetros gasométricos</strong>:<br/>' +
          '&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Bicarbonato sérico ≥ 18 mEq/L</strong><br/>' +
          '&nbsp;&nbsp;&nbsp;&nbsp;• <strong>pH venoso > 7.30 (o pH arterial > 7.35)</strong><br/>' +
          '&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Anion Gap normalizado (≤ 12 mEq/L)</strong>;<br/>' +
          '3) Cetonemia en sangre < 0.6 mmol/L (o tendencia francamente descendente); y<br/>' +
          '4) Estado de alerta recuperado y <strong>buena tolerancia a la alimentación por vía oral</strong>.',
        ],
      },
      {
        subhead: '2. Criterios de Resolución del Estado Hiperglicémico Hiperosmolar',
        paragraphs: [
          'El EHH se considera resuelto cuando: 1) La <strong>osmolaridad plasmática efectiva desciende a < 315 mOsm/kg</strong>; 2) La glicemia se mantiene en rangos estables (< 250–300 mg/dL); y 3) El paciente recupera su estado de vigilia y lucidez mental basal previa al episodio, tolerando la alimentación.',
        ],
      },
      {
        subhead: '3. Protocolo Mandatorio de Traslape a Insulina Subcutánea',
        paragraphs: [
          'Una vez confirmada la resolución bioquímica y reiniciada la ingesta oral con una comida formal:',
          '<strong>Regla Crucial de Tiempo:</strong> Se debe inyectar la primera dosis de <strong>insulina basal subcutánea (NPH o análogo prolongado Glargina) 1 a 2 horas ANTES de apagar la bomba de infusión endovenosa de insulina cristalina</strong>. Si se utiliza un análogo ultrarrápido (Lispro o Aspart), se puede administrar 15 a 30 minutos antes de suspender la infusión.',
          'Esta superposición de 1 a 2 horas es esencial porque la insulina EV desaparece del torrente sanguíneo en menos de 10 minutos (vida media de 5–9 minutos). Si no existe una reserva subcutánea en absorción activa, se produce una ventana de cero insulinemia que reactiva la lipólisis y produce una <strong>cetoacidosis diabética recurrente</strong> en pocas horas.',
        ],
      },
    ],
    table: {
      title: 'Criterios de Resolución y Reglas de Seguridad para el Traslape',
      headers: ['Parámetro', 'Criterio de Resolución CAD', 'Criterio de Resolución EHH', 'Regla de Oro en el Traslape'],
      rows: [
        ['Glicemia', '< 200 mg/dL', '< 250 – 300 mg/dL', 'Mantener en 150-200 mg/dL con SG 5% hasta resolución'],
        ['pH Venoso / Arterial', 'pH venoso > 7.30 (arterial > 7.35)', 'pH > 7.30', 'No suspender bomba si pH < 7.30 aunque glicemia sea normal'],
        ['Bicarbonato Sérico', '≥ 18 mEq/L', '> 18 mEq/L', 'El bicarbonato normal es el mejor marcador de recuperación'],
        ['Anion Gap', '≤ 12 mEq/L (Normalizado)', 'Normal', 'Confirma que los cetoácidos circulantes han sido eliminados'],
        ['Osmolaridad Efectiva', 'Normal (< 300 mOsm/kg)', '< 315 mOsm/kg', 'Correlaciona con el despertar neurológico'],
        ['Momento de Suspensión EV', '1 a 2 horas tras la inyección basal SC', '1 a 2 horas tras la inyección basal SC', '¡NUNCA apagar la bomba EV simultáneamente con el pinchazo SC!'],
      ],
    },
    vignette: 'Un paciente de 22 años con DM1 ingresó hace 14 horas por cetoacidosis diabética. Actualmente se encuentra despierto, con apetito y solicitando desayuno. Sus exámenes actuales demuestran: glicemia 175 mg/dL, pH venoso 7.34, bicarbonato 20 mEq/L y Anion Gap de 10 mEq/L. El médico decide iniciar su esquema subcutáneo habitual de NPH y cristalina.',
    explicacion: 'El paciente cumple con todos los criterios de resolución de la CAD (glicemia < 200, pH > 7.30, HCO3 ≥ 18 y Anion Gap ≤ 12) y tolera la vía oral. Para realizar un traslape seguro y evitar la cetoacidosis de rebote, la norma exige inyectar la dosis de insulina basal subcutánea y mantener la bomba de infusión endovenosa activa durante 1 a 2 horas más, apagándola solo una vez que la insulina subcutánea haya iniciado su absorción sistémica.',
    keyPoints: [
      'La CAD está resuelta cuando: Glicemia < 200 mg/dL Y al menos 2 criterios entre pH > 7.30, HCO3 ≥ 18 mEq/L y Anion Gap ≤ 12 mEq/L.',
      'El EHH está resuelto cuando la Osmolaridad plasmática efectiva es < 315 mOsm/kg y el paciente está lúcido.',
      'La vida media de la insulina cristalina por vía endovenosa es de solo 5 a 9 minutos.',
      'La insulina basal subcutánea debe inyectarse 1 a 2 horas ANTES de apagar la bomba de infusión continua endovenosa.',
      'Apagar la bomba en el momento exacto del pinchazo subcutáneo genera un periodo de carencia insulínica que reactiva la cetoacidosis en pocas horas.',
      'El traslape debe coincidir preferentemente con una comida principal (desayuno o almuerzo) para evaluar la tolerancia digestiva.',
    ],
    questions: [
      {
        stem: 'Un paciente de 19 años con DM1 evoluciona favorablemente de un episodio de cetoacidosis diabética. Sus exámenes de control muestran: glicemia 168 mg/dL, pH venoso 7.33, bicarbonato 19 mEq/L y Anion Gap 11 mEq/L. Se encuentra lúcido y solicita alimentarse. ¿Cuál es el procedimiento correcto para suspender la bomba de insulina endovenosa y realizar la transición a insulina subcutánea?',
        opciones: [
          'A) Suspender la bomba de infusión endovenosa inmediatamente y esperar 4 horas antes de aplicar la primera dosis subcutánea',
          'B) Inyectar la primera dosis de insulina basal subcutánea y apagar la bomba endovenosa simultáneamente en ese mismo instante',
          'C) Administrar la dosis de insulina basal subcutánea y mantener la infusión endovenosa durante 1 a 2 horas más antes de suspenderla',
          'D) Administrar solo insulina ultrarrápida subcutánea cuando la glicemia supere los 250 mg/dL en controles posteriores',
          'E) Mantener la bomba de insulina endovenosa por 48 horas adicionales sin aportar alimentos por boca'
        ],
        correcta: 'C',
        explicacion: 'Dado que la vida media de la insulina endovenosa es de apenas 5 a 9 minutos, si la bomba se suspende al mismo tiempo que se administra la insulina subcutánea (la cual demora al menos 60 a 90 minutos en alcanzar niveles plasmáticos terapéuticos en el caso de la NPH o Glargina), se produce una ventana temporal sin insulina circulante que desencadena un rebote de la lipólisis y recaída de la cetoacidosis. La regla mandatoria es aplicar la insulina basal subcutánea y mantener la infusión endovenosa activa durante 1 a 2 horas de superposición.',
        recTag: 'EUNACOM Diciembre 2019 (Q#27)'
      },
      {
        stem: '¿Cuál de los siguientes conjuntos de parámetros gasométricos y de laboratorio certifica de manera indiscutida la resolución de una Cetoacidosis Diabética en un adulto?',
        opciones: [
          'A) Glicemia de 220 mg/dL, pH 7.26, bicarbonato 14 mEq/L y cetonuria negativa',
          'B) Glicemia de 180 mg/dL, pH venoso 7.32, bicarbonato 19 mEq/L y Anion Gap de 10 mEq/L',
          'C) Glicemia de 140 mg/dL, pH venoso 7.18, bicarbonato 12 mEq/L y glucosuria negativa',
          'D) Glicemia de 95 mg/dL con cetonuria persistente +++ y pH 7.20',
          'E) Glicemia de 250 mg/dL con osmolaridad de 290 mOsm/kg y bicarbonato de 15 mEq/L'
        ],
        correcta: 'B',
        explicacion: 'Los criterios diagnósticos de resolución de la CAD establecidos por la ADA y el Ministerio de Salud son: Glicemia < 200 mg/dL acompañada de al menos dos de los siguientes tres criterios: 1) pH venoso > 7.30; 2) Bicarbonato sérico ≥ 18 mEq/L; y 3) Anion Gap normalizado (≤ 12 mEq/L). La opción B cumple a cabalidad con todos y cada uno de estos requisitos.',
        recTag: 'EUNACOM Diciembre 2021 (Q#14)'
      }
    ]
  },
  {
    id: 'diab-19',
    classId: 'diab-19',
    tier: 2,
    blockNum: 4,
    blockName: 'Emergencias Hiperglicémicas Agudas',
    topicLabel: '4.5',
    title: 'Complicaciones Agudas del Tratamiento: Edema Cerebral e Hipofosfemia',
    perfilCode: '1.04.1.016, 1.04.1.017',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES N° 2): Diabetes Mellitus / Urgencia Vital',
    reconstrucciones: 'EUNACOM Julio 2018 (Q#42) · EUNACOM Diciembre 2020 (Q#36)',
    frecuencia: 'Alta · Edema cerebral en pediatría/adolescentes y reposición de fosfato en debilidad muscular',
    svg: null, algoTitle: 'Sospecha Clínica, Prevención y Manejo Inmediato del Edema Cerebral en CAD',
    diagram: flow('Algoritmo de Detección Precoz y Rescate del Edema Cerebral', [
      { t: 'Paciente Pediátrico o Joven en Tratamiento de CAD que Deteriora Estado Neurológico', s: 'Aparición de cefalea brusca, vómitos explosivos, bradicardia, hipertensión (Tríada de Cushing) o letargia' },
      { k: 'split', q: '¿Sospecha Clínica de Edema Cerebral Inminente?', s: '¡EMERGENCIA NEUROLÓGICA MÁXIMA!: No esperar TAC de cerebro para actuar', ll: 'Sospecha Clínica Fundada (Tríada Cushing / Glasgow < 12)', rl: 'Paciente Estable con Glicemia en Descenso Controlado',
        left: { t: 'TRATAMIENTO OSMÓTICO INMEDIATO DE RESCATE', s: 'Manitol 20% (0.5 a 1 g/kg EV en 20 min) o Solución Salina al 3% (5 ml/kg) · Reducir tasa de fluidos al 50%', type: 'crit' },
        right: { t: 'Medidas Preventivas Estándar', s: 'Evitar descensos de glicemia > 75-100 mg/dL/h y descensos de osmolaridad > 3 mOsm/h · Añadir SG 5% a tiempo', type: 'acc' },
        ll: 'manitol / salino 3%', rl: 'prevención osmótica' },
      { t: 'Manejo de Hipofosfemia Severa (< 1.0 mg/dL)', s: 'Riesgo de debilidad diafragmática y falla ventilatoria · Aportar Fosfato de Potasio parenteral', type: 'dec', al: 'fósforo < 1.0', from: 'right' },
    ]),
    contexto: 'El edema cerebral es la complicación más devastadora y la principal causa de mortalidad en niños y adultos jóvenes tratados por cetoacidosis diabética (responsable del 60–90% de las muertes pediátricas por CAD). En el EUNACOM se evalúa de manera prioritaria la capacidad de sospecharlo precozmente ante la tríada de Cushing (bradicardia e hipertensión) o deterioro neurológico durante la corrección hidrosalina, y aplicar inmediatamente el tratamiento hiperosmolar con Manitol o Solución Salina al 3% sin perder tiempo en realizar una tomografía computarizada.',
    contentSections: [
      {
        subhead: '1. Fisiopatología del Edema Cerebral: El Gradiente Osmótico Inverso',
        paragraphs: [
          'Durante el desarrollo de la CAD, las células cerebrales generan osmolitos idiopáticos ("osmoles endógenos") para protegerse de la deshidratación producida por la hiperosmolaridad plasmática.',
          'Si durante el tratamiento se administra un exceso de fluidos hipotónicos o la glicemia se reduce a una velocidad excesivamente rápida (> 100 mg/dL/hora), la <strong>osmolaridad del espacio extracelular cae bruscamente mientras que los osmoles intracelulares cerebrales se depuran con lentitud</strong>. Esto genera un gradiente osmótico inverso masivo que arrastra agua libre hacia los astrocitos y neuronas, provocando un <strong>edema cerebral difuso con hipertensión intracraneana y riesgo inminente de herniación uncal o amigdalina</strong>.',
        ],
      },
      {
        subhead: '2. Factores de Riesgo y Manifestaciones Clínicas Cardinales',
        paragraphs: [
          'Los principales factores de riesgo son: edad menor a 5 años, debut de DM1, mayor severidad de la acidosis inicial (pH < 7.10, HCO3 muy bajo), falta de elevación esperada del sodio sérico corregido durante el tratamiento e infusión masiva de fluidos en las primeras 4 horas (> 4 L/m² de superficie corporal).',
          'Aparece típicamente <strong>entre las 4 y 12 horas de iniciado el tratamiento</strong>, cuando los parámetros bioquímicos parecen estar mejorando. Los signos de alarma son: <strong>cefalea intensa de inicio súbito, recurrencia de vómitos explosivos, agitación o irritabilidad inexplicable seguida de somnolencia progresiva</strong>, incontinencia urinaria, y los componentes de la <strong>Tríada de Cushing: bradicardia inexplicada, hipertensión arterial y patrón respiratorio irregular</strong>. El deterioro del puntaje en la Escala de Coma de Glasgow es el marcador clínico más sensible.',
        ],
      },
      {
        subhead: '3. Protocolo de Rescate Inmediato del Edema Cerebral y Manejo de Hipofosfemia',
        paragraphs: [
          '<strong>Regla de Salvamento Vital:</strong> Ante la sospecha clínica de edema cerebral, <strong>EL TRATAMIENTO HIPEROSMOLAR DEBE INICIARSE INMEDIATAMENTE AL LADO DE LA CAMA DEL PACIENTE, SIN RETRASARLO PARA TRASLADARLO A TAC DE CEREBRO</strong>.',
          '• <strong>Manitol al 20%:</strong> Administrar <strong>0.5 a 1.0 g/kg por vía endovenosa en 20 minutos</strong> (repetir a las 2 horas si no hay respuesta).<br/>' +
          '• <strong>Alternativa de Primera Línea: Solución Salina Hipertónica al 3% (NaCl 3%):</strong> Administrar <strong>5 ml/kg en 10 a 15 minutos</strong>.<br/>' +
          '• Medidas concomitantes: Reducir la velocidad de infusión de fluidos endovenosos en un 50%, elevar la cabecera de la cama a 30 grados, asegurar vía aérea (intubación orotraqueal con hiperventilación leve protectora si hay coma severo).<br/>' +
          '• <strong>Hipofosfemia Severa (< 1.0 mg/dL):</strong> La insulina introduce el fósforo al espacio intracelular. Aunque la hipofosfemia leve es asintomática y no requiere tratamiento, si el nivel sérico cae a <strong>< 1.0 mg/dL (0.3 mmol/L)</strong>, puede precipitar debilidad muscular extrema, disfunción y parálisis de los músculos diafragmáticos con falla ventilatoria aguda, anemia hemolítica y rabdomiólisis. En estos casos, se debe suplementar con <strong>Fosfato de Potasio por vía endovenosa (20 a 30 mmol)</strong> diluido en los fluidos parenterales.',
        ],
      },
    ],
    table: {
      title: 'Complicaciones Graves Derivadas del Tratamiento de las Crisis Hiperglicémicas',
      headers: ['Complicación Iatrogénica', 'Mecanismo Gatillante', 'Signos Clínicos Clave', 'Tratamiento de Emergencia'],
      rows: [
        ['Edema Cerebral Agudo', 'Descenso osmolar brusco por exceso de fluidos hipotónicos o caída rápida de glicemia', 'Cefalea intensa, bradicardia, vómitos, hipertensión, sopor', 'Manitol 20% (0.5-1 g/kg) o NaCl 3% (5 ml/kg) inmediato al lado de la cama'],
        ['Hipokalemia Severa', 'Administración de insulina sin chequear K+ o sin aporte de mantención', 'Debilidad muscular, parálisis flácida, onda U en ECG, arritmias ventriculares', 'Suspender insulina e infundir KCl a 20-30 mEq/h en fluidos'],
        ['Hipofosfemia Crítica (< 1.0 mg/dL)', 'Captación intracelular forzada por la insulina y glucosuria previa', 'Falla ventilatoria por debilidad diafragmática, rabdomiólisis, parestesias', 'Fosfato de potasio 20 a 30 mmol EV en infusión lenta'],
        ['Hipoglicemia Severa', 'No agregar suero glucosado al alcanzar 200 mg/dL manteniendo insulina', 'Diaforesis, temblor, convulsiones, neuroglucopenia', 'Glucosa al 30% EV en bolo (20-50 ml) y adición de SG 5%'],
      ],
    },
    vignette: 'Un niño de 11 años con debut de DM1 está siendo tratado por una cetoacidosis diabética severa. Tras 6 horas de infusión continua de fluidos e insulina, su glicemia bajó de 520 a 240 mg/dL. Repentinamente se queja de cefalea frontal intensa, vomita en escopetazo y se muestra confuso y letárgico. El monitor revela PA 145/95 mmHg (previa 100/60 mmHg) y FC 52 lpm (previa 98 lpm).',
    explicacion: 'El paciente presenta una hipertensión endocraneana aguda con la clásica tríada de Cushing (hipertensión arterial + bradicardia + alteración del patrón de conciencia), compatible con Edema Cerebral agudo secundario al tratamiento de la CAD. El médico no debe perder tiempo valioso solicitando un TAC de encéfalo; la conducta obligatoria inmediata es infundir Manitol al 20% a 0.5–1.0 g/kg EV (o Salino al 3% a 5 ml/kg) en 15-20 minutos y disminuir la tasa de hidratación al 50%.',
    keyPoints: [
      'El edema cerebral es la principal causa de muerte en niños con CAD (60–90% de la mortalidad pediátrica).',
      'Ocurre típicamente a las 4–12 horas de tratamiento, cuando la glicemia y acidosis parecen estar mejorando.',
      'La Tríada de Cushing consiste en: Bradicardia + Hipertensión arterial + Depresión respiratoria o neurológica.',
      '¡REGLA VITAL!: El tratamiento con Manitol al 20% o Solución Salina Hipertónica al 3% se inicia INMEDIATAMENTE ante la sospecha clínica, SIN ESPERAR TAC.',
      'La hipofosfemia severa (< 1.0 mg/dL) produce debilidad de la musculatura respiratoria diafragmática e imposibilidad de destete ventilatorio.',
      'Para prevenir el edema cerebral, la glicemia nunca debe descender a más de 75–100 mg/dL por hora.',
    ],
    questions: [
      {
        stem: 'Un adolescente de 13 años se encuentra hospitalizado en la UCI recibiendo tratamiento para una cetoacidosis diabética severa. A las 6 horas de iniciada la fluidoterapia y la insulina endovenosa, el paciente refiere cefalea intensa y presenta dos vómitos explosivos, tornándose progresivamente somnoliento y desorientado. Al monitor se observa un ascenso de la PA de 105/65 a 140/90 mmHg y un descenso de la FC de 102 a 54 lpm. ¿Cuál es la conducta médica inmediata más adecuada?',
        opciones: [
          'A) Trasladar de urgencia a tomografía axial computarizada de encéfalo para confirmar el diagnóstico',
          'B) Administrar inmediatamente Manitol al 20% por vía endovenosa (o Solución Salina al 3%) y reducir la velocidad de los fluidos',
          'C) Aumentar la velocidad de infusión de suero fisiológico para tratar el shock hipovolémico',
          'D) Indicar una dosis de atropina endovenosa para revertir la bradicardia sinusal',
          'E) Suspender la insulina y administrar 4 ampollas de glucosa al 30% en bolo'
        ],
        correcta: 'B',
        explicacion: 'El paciente presenta signos inequívocos de Edema Cerebral Agudo complicado con hipertensión intracraneana y respuesta de Cushing (hipertensión y bradicardia marcada asociada a cefalea y vómitos explosivos). En esta situación de riesgo vital inminente, el tratamiento hiperosmolar de rescate con Manitol al 20% (0.5 a 1.0 g/kg EV en 20 minutos) o Solución Salina al 3% (5 ml/kg) debe indicarse de inmediato al pie de la cama. Retrasar la terapia para obtener una neuroimagen puede resultar en herniación cerebral irreversible y paro cardiorrespiratorio fatal.',
        recTag: 'EUNACOM Julio 2018 (Q#42)'
      },
      {
        stem: 'Un paciente de 28 años hospitalizado en tratamiento de cetoacidosis diabética presenta debilidad muscular generalizada profunda e insuficiencia ventilatoria aguda con incapacidad para sostener el esfuerzo inspiratorio tras 18 horas de evolución. Sus exámenes demuestran: glicemia 170 mg/dL, pH 7.35, bicarbonato 20 mEq/L, sodio 138 mEq/L, potasio 4.2 mEq/L, calcio 9.2 mg/dL y fósforo inorgánico de 0.8 mg/dL. ¿Cuál es el tratamiento específico indicado?',
        opciones: [
          'A) Gluconato de calcio al 10% endovenoso',
          'B) Sulfato de magnesio endovenoso',
          'C) Suplementación endovenosa con Fosfato de Potasio',
          'D) Aumento de la dosis de insulina cristalina',
          'E) Bicarbonato de sodio al 2/3 molar'
        ],
        correcta: 'C',
        explicacion: 'El paciente presenta una hipofosfemia severa sintomática (< 1.0 mg/dL, en este caso 0.8 mg/dL). El fósforo es indispensable para la síntesis intracelular de trifosfato de adenosina (ATP) y de 2,3-difosfoglicerato (2,3-DPG); su depleción crítica genera claudicación muscular diafragmática, falla ventilatoria aguda y rabdomiólisis. La indicación indiscutida es la reposición de fosfato mediante infusión endovenosa lenta de fosfato de potasio.',
        recTag: 'EUNACOM Diciembre 2020 (Q#36)'
      }
    ]
  }
];

module.exports = { bloque4, flow };
