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

const bloque1 = [
  {
    id: 'diab-01',
    classId: 'diab-01',
    tier: 2,
    blockNum: 1,
    blockName: 'Diagnóstico, Clasificación y Tamizaje de Diabetes',
    topicLabel: '1.1',
    title: 'Tipos de Diabetes Mellitus: DM1, DM2, LADA y MODY',
    perfilCode: '1.04.1.001',
    dx: 'Específico', tx: 'Inicial', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES): Diabetes Mellitus Tipo 1 y Tipo 2',
    reconstrucciones: 'EUNACOM Diciembre 2017 (Q#14) · EUNACOM Julio 2020 (Q#05) · EUNACOM Julio 2023 (Q#22)',
    frecuencia: 'Alta · Diagnóstico diferencial de LADA vs MODY y rol del péptido C',
    svg: null, algoTitle: 'Algoritmo de Diferenciación Fisiopatológica de los Tipos de Diabetes',
    diagram: flow('Algoritmo de Diferenciación Etiológica de Diabetes Mellitus', [
      { t: 'Paciente con Confirmación Diagnóstica de Diabetes Mellitus', s: 'Evaluar edad, fenotipo ponderal (IMC), severidad de debut y antecedentes familiares' },
      { k: 'split', q: '¿Fenotipo Clásico de Resistencia a la Insulina vs Sospecha de Autoinmunidad / Genética?', s: 'Adulto obeso (> 35-40 a) vs Paciente joven, normopeso o debut catabólico rápido', ll: 'Adulto con Obesidad / Síndrome Metabólico', rl: 'Joven, Normopeso o Autoinmunidad Asociada',
        left: { t: 'Diabetes Mellitus Tipo 2 (90% de los casos)', s: 'Péptido C elevado o normal · Responde a metformina y cambios de estilo de vida', type: 'acc' },
        right: { t: 'Estudio con Péptido C y Anticuerpos (Anti-GAD, Anti-IA2)', s: 'Niño/adolescente con CAD: DM1 · Adulto joven normopeso: LADA · Familias multigeneracionales flacas: MODY', type: 'warn' },
        ll: 'fenotipo DM2', rl: 'sospecha DM1/LADA/MODY' },
      { t: 'Manejo Inicial según Reserva de Célula Beta', s: 'DM1 y LADA: Insulinoterapia obligatoria precoz · MODY: Excelente respuesta a sulfonilureas orales', type: 'dec', al: 'terapia dirigida', from: 'right' },
    ]),
    contexto: 'La diabetes comprende un espectro heterogéneo de trastornos metabólicos. El EUNACOM exige diferenciar con precisión la DM1 (destrucción autoinmune infantil) de la DM2 (resistencia a la insulina asociada a sobrepeso), reconociendo variantes de alto rendimiento en el examen: la diabetes LADA (autoinmune del adulto joven normopeso con anticuerpos anti-GAD positivos que requiere insulina) y la diabetes MODY (mutación monogénica autosómica dominante en familias delgadas que responde a sulfonilureas).',
    contentSections: [
      {
        subhead: '1. Fisiopatología y Clasificación Etiológica Universal',
        paragraphs: [
          '• <strong>Diabetes Mellitus Tipo 1 (DM1, 5–10%):</strong> Destrucción autoinmune selectiva mediada por linfocitos T de las células beta de los islotes pancreáticos, que culmina en un <strong>déficit absoluto de secreción de insulina</strong>. Afecta característicamente a niños, adolescentes y adultos jóvenes, con debut clínico agudo, polidipsia, polifagia, marcada baja de peso y propensión vital a la <strong>cetoacidosis diabética (CAD)</strong>.<br>' +
          '• <strong>Diabetes Mellitus Tipo 2 (DM2, 90–95%):</strong> Trastorno poligénico complejo caracterizado por <strong>resistencia periférica a la insulina</strong> combinada con una pérdida progresiva de la secreción compensatoria de las células beta. Su principal factor gatillante modificable es la <strong>obesidad visceral y el sedentarismo</strong>.',
        ],
      },
      {
        subhead: '2. Formas Especiales de Alta Evaluación: Diabetes LADA y MODY',
        paragraphs: [
          '• <strong>Diabetes LADA (Latent Autoimmune Diabetes in Adults):</strong> Es una forma de DM1 de progresión lenta que debuta en adultos (habitualmente entre 25 y 45 años), normopesos o con sobrepeso leve, frecuentemente con antecedentes personales o familiares de tiroiditis de Hashimoto o vitiligo. <strong>Clave de examen:</strong> No responde a hipoglucemiantes orales y desarrolla requerimiento insulínico temprano.<br>' +
          '• <strong>Diabetes MODY (Maturity-Onset Diabetes of the Young):</strong> Diabetes monogénica heredada con patrón <strong>autosómico dominante (afecta a múltiples generaciones sucesivas: padres, tíos, hermanos)</strong>. Se manifiesta típicamente antes de los 25 años en personas delgadas (sin obesidad ni acantosis nigricans), sin autoinmunidad (anticuerpos negativos). La mutación más frecuente (MODY-3 / HNF-1alfa) tiene una <strong>sensibilidad y respuesta terapéutica exquisita a dosis bajas de sulfonilureas</strong>.',
        ],
      },
      {
        subhead: '3. Rol Diagnóstico del Péptido C y Marcadores Inmunológicos',
        paragraphs: [
          'La diferenciación inicial es netamente <strong>clínica</strong>, pero en casos de duda diagnóstica el laboratorio confirma el mecanismo fisiopatológico:<br>' +
          '• <strong>Péptido C plasmático:</strong> Subproducto equimolar de la escisión de la proinsulina; refleja fielmente la reserva endógena de insulina. Está <strong>marcadamente bajo o indetectable en DM1 y LADA avanzada</strong>, y elevado o inapropiadamente normal en DM2 con resistencia periférica.<br>' +
          '• <strong>Anticuerpos Pancreáticos:</strong> <strong>Anti-GAD65 (decarboxilasa del ácido glutámico, el más sensible en LADA)</strong>, anti-IA2 (tirosina fosfatasa), anti-insulina (IAA) y anti-transportador de zinc 8 (ZnT8). Su positividad confirma la etiología autoinmune.',
        ],
      },
    ],
    table: {
      title: 'Diagnóstico Diferencial: DM Tipo 1, DM Tipo 2, LADA y MODY',
      headers: ['Característica', 'DM Tipo 1', 'DM Tipo 2', 'LADA (Adulto)', 'MODY (Genética)'],
      rows: [
        ['Edad habitual de debut', '< 20 años (niños/jóvenes)', '> 35 - 45 años (adultos)', '25 a 50 años', '< 25 años'],
        ['Hábito corporal / IMC', 'Normopeso o bajo peso', 'Sobrepeso u Obesidad (> 85%)', 'Normopeso o leve sobrepeso', 'Delgado / Normopeso'],
        ['Herencia y antecedentes', 'Poligénica / HLA-DR3-DR4', 'Familiar poligénica alta', 'Autoinmunidad asociada', 'Autosómica dominante (3 gen.)'],
        ['Péptido C sérico', 'Muy disminuido / Ausente', 'Elevado o normal', 'Bajo o descendiendo', 'Normal o detectable'],
        ['Anticuerpos (Anti-GAD)', 'Positivos (> 85-90%)', 'Negativos', 'Positivos (patognomónico)', 'Negativos'],
        ['Respuesta inicial a HGO', 'Nula (insulina obligatoria)', 'Buena (metformina)', 'Fracaso precoz a HGO', 'Excelente a Sulfonilureas'],
      ],
    },
    vignette: 'Mujer de 28 años, con antecedentes de tiroiditis autoinmune de Hashimoto en tratamiento con levotiroxina, IMC 21.5 kg/m², consulta por polidipsia, astenia y baja de peso de 4 kg en 2 meses. Exámenes: Glicemia de ayuno 285 mg/dL, HbA1c 10.2%, sin cetonuria. Su médico inicia metformina oral sin lograr descenso glicémico tras 4 semanas de escalamiento.',
    explicacion: 'Se trata de una paciente joven, delgada, con antecedentes de autoinmunidad previa (Hashimoto) que debuta con hiperglicemia severa sintomática y refractariedad absoluta a metformina. Este cuadro es prototípico de Diabetes LADA (autoinmune del adulto). La conducta obligatoria es solicitar títulos de anticuerpos anti-GAD65 y péptido C, iniciando de inmediato terapia de reemplazo con insulina para frenar el catabolismo celular.',
    keyPoints: [
      'La DM1 es autoinmune, cursa con déficit absoluto de insulina y debuta con baja de peso, cetosis o CAD.',
      'La DM2 se debe a resistencia a la insulina asociada a obesidad; el péptido C está elevado o conservado.',
      'La diabetes LADA es la DM autoinmune del adulto: paciente joven/maduro delgado con anti-GAD positivos que requiere insulina.',
      'La diabetes MODY es monogénica autosómica dominante (historia familiar vertical en delgados) y responde a sulfonilureas.',
      'El péptido C mide la producción endógena de insulina; permite diferenciar causas autoinmunes de resistencia a la insulina.',
    ],
    questions: [
      {
        stem: 'Una mujer de 31 años, normopeso, con antecedente de vitiligo, consulta por astenia progresiva y baja de 5 kg en dos meses. Se constatan glicemias de ayuno de 260 mg/dL y 295 mg/dL, con HbA1c de 10.5%. No presenta acidosis metabólica. Se le indicó tratamiento con metformina 850 mg cada 12 horas, persistiendo con glicemias sobre 250 mg/dL a las tres semanas. ¿Cuál es el diagnóstico más probable y el examen que confirmaría la sospecha clínica?',
        options: [
          { id: 'A', text: 'Diabetes mellitus tipo 2 resistente; solicitar curva de tolerancia oral a la glucosa' },
          { id: 'B', text: 'Diabetes autoinmune latente del adulto (LADA); solicitar anticuerpos anti-GAD65 y péptido C' },
          { id: 'C', text: 'Diabetes tipo MODY; solicitar estudio genético de glucoquinasa' },
          { id: 'D', text: 'Diabetes secundaria a pancreatitis crónica; solicitar elastasa fecal' },
          { id: 'E', text: 'Síndrome de Cushing subclínico; solicitar cortisol libre urinario' },
        ],
        correcta: 'B',
        explicacion: 'El cuadro de debut hiperglicémico severo en una adulta joven sin obesidad, con comorbilidad autoinmune previa (vitiligo) y falla primaria rápida al tratamiento con metformina oral, orienta decididamente a Diabetes LADA (Latent Autoimmune Diabetes in Adults). El examen de elección para certificar la etiología es la determinación de anticuerpos anti-GAD65 (positivos en más del 80%) y la medición de péptido C plasmático (que evidenciará reserva beta deficiente).',
        recTag: 'EUNACOM Diciembre 2017 · Reconstrucción oficial',
      },
      {
        stem: 'Un joven de 20 años, deportista, con IMC de 22 kg/m², se realiza chequeo de rutina encontrándose una glicemia de ayuno de 145 mg/dL, confirmada en 150 mg/dL. Refiere que su padre, su tía paterna y su abuelo paterno son diabéticos diagnosticados antes de los 30 años, ninguno con obesidad y todos tratados eficazmente con glibenclamida oral. Los anticuerpos anti-GAD e IA2 resultan negativos. ¿Cuál es el tipo de diabetes más probable?',
        options: [
          { id: 'A', text: 'Diabetes mellitus tipo 1' },
          { id: 'B', text: 'Diabetes mellitus tipo 2 del adulto joven' },
          { id: 'C', text: 'Diabetes tipo MODY (Maturity-Onset Diabetes of the Young)' },
          { id: 'D', text: 'Diabetes tipo LADA' },
          { id: 'E', text: 'Hemocromatosis hereditaria juvenil' },
        ],
        correcta: 'C',
        explicacion: 'La presencia de diabetes de inicio precoz (< 25 años) en un paciente delgado sin datos de resistencia a la insulina ni autoinmunidad (anti-GAD negativos), con un patrón de herencia claramente autosómico dominante (tres generaciones consecutivas comprometidas en línea directa) y excelente control con dosis bajas de sulfonilureas (glibenclamida), constituye la presentación canónica de Diabetes MODY (habitualmente MODY-3 por mutación en el factor nuclear HNF-1alfa).',
        recTag: 'EUNACOM Julio 2023 · Reconstrucción oficial',
      },
    ],
  },
  {
    id: 'diab-02',
    classId: 'diab-02',
    tier: 3,
    blockNum: 1,
    blockName: 'Diagnóstico, Clasificación y Tamizaje de Diabetes',
    topicLabel: '1.2',
    title: 'Criterios Diagnósticos de Diabetes Mellitus, Prediabetes y Tamizaje en APS',
    perfilCode: '1.04.1.002',
    dx: 'Específico', tx: 'Inicial', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES): Diabetes Mellitus Tipo 2 en Personas de 15 años y más',
    reconstrucciones: 'EUNACOM Diciembre 2016 (Q#28) · EUNACOM Julio 2018 (Q#41) · EUNACOM Diciembre 2021 (Q#15) · EUNACOM Julio 2024 (Q#09)',
    frecuencia: 'Máxima · Umbrales numéricos de ayuno, TTGO y uso de HbA1c en hospitalizados',
    svg: null, algoTitle: 'Algoritmo Escalonado de Tamizaje y Diagnóstico de Diabetes Mellitus en APS',
    diagram: flow('Algoritmo Diagnóstico de Diabetes Mellitus en el Adulto (ADA / MINSAL)', [
      { t: 'Evaluación de Glicemia en Paciente No Embarazado', s: 'Paso 1: Determinar presencia de Síntomas Clásicos (Polidipsia, Poliuria, Polifagia, Baja de peso)' },
      { k: 'split', q: '¿Presenta Síntomas Clásicos de Diabetes + Glicemia Casual ≥ 200 mg/dL?', s: 'Define confirmación inmediata sin repetir examen vs requerimiento de confirmación', ll: 'Sí: Síntomas + Glicemia ≥ 200', rl: 'No: Paciente asintomático o glicemia dudosa',
        left: { t: 'DIAGNÓSTICO CONFIRMADO DE DIABETES', s: 'No requiere repetición · Ingreso inmediato a GES DM2 e inicio de terapia integral', type: 'acc' },
        right: { t: 'Tamizaje con Glicemia de Ayuno (8 h de ayuno)', s: '< 100: Normal · 100-125: Glicemia de ayuno alterada (PTGO) · ≥ 126: Sospecha (REPETIR)', type: 'warn' },
        ll: 'confirmación directa', rl: 'tamizaje escalonado' },
      { t: 'Repetición Obligatoria en Asintomáticos', s: 'Segunda Glicemia ≥ 126 mg/dL O PTGO 2h ≥ 200 mg/dL O HbA1c ≥ 6.5% confirman Diabetes Mellitus', type: 'dec', al: 'confirmación', from: 'right' },
    ]),
    contexto: 'El diagnóstico de diabetes mellitus es una de las competencias más evaluadas en el EUNACOM. Es obligatorio dominar los 4 criterios diagnósticos de la ADA/MINSAL, recordar que en pacientes asintomáticos el examen alterado DEBE repetirse en un día diferente para confirmar, conocer las definiciones de prediabetes (GAA e ITG) y saber cuándo utilizar la HbA1c (ideal ante pacientes hospitalizados o con estrés agudo descompensante).',
    contentSections: [
      {
        subhead: '1. Los Cuatro Criterios Diagnósticos Universales (ADA / Guía Clínica MINSAL)',
        paragraphs: [
          'En el adulto no gestante, el diagnóstico de Diabetes Mellitus se establece mediante el cumplimiento de <strong>cualquiera de los siguientes 4 criterios</strong>:<br>' +
          '1. <strong>Glicemia de ayuno (plasmática venosa, ayuno ≥ 8 horas) ≥ 126 mg/dL</strong> (≥ 7.0 mmol/L).<br>' +
          '2. <strong>Glicemia a las 2 horas post-carga en Prueba de Tolerancia a la Glucosa Oral (PTGO / TTGO con 75 g de glucosa anhidra) ≥ 200 mg/dL</strong> (≥ 11.1 mmol/L).<br>' +
          '3. <strong>Hemoglobina Glicosilada (HbA1c) ≥ 6.5%</strong> (medida en laboratorio estandarizado según programa NGSP).<br>' +
          '4. <strong>Glicemia casual (al azar) ≥ 200 mg/dL en presencia de síntomas cardinales de hiperglicemia</strong>: las "4 P" (polidipsia, poliuria, polifagia y pérdida de peso inexplicable) o crisis hiperglicémica evidente.<br>' +
          '<strong>Regla de oro absoluta de examen:</strong> En ausencia de hiperglicemia inequívoca con descompensación aguda sintomática, <strong>los criterios 1, 2 y 3 requieren una SEGUNDA medición confirmatoria en un día diferente</strong>.',
        ],
      },
      {
        subhead: '2. Categorías de Alto Riesgo Metabólico: Estados de Prediabetes',
        paragraphs: [
          'La prediabetes identifica a individuos con riesgo cardiovascular elevado y alta probabilidad de progresar a diabetes franca:<br>' +
          '• <strong>Glicemia de Ayuno Alterada (GAA):</strong> Glicemia venosa de ayuno entre <strong>100 y 125 mg/dL</strong>.<br>' +
          '• <strong>Intolerancia a la Glucosa Oral (ITG):</strong> Glicemia a las 2 horas post-PTGO de 75 g entre <strong>140 y 199 mg/dL</strong>.<br>' +
          '• <strong>HbA1c en rango de prediabetes:</strong> Entre <strong>5.7% y 6.4%</strong>.<br>' +
          '• <strong>Resistencia a la Insulina:</strong> Condición fisiopatológica evaluada por el índice HOMA-IR (Glicemia de ayuno en mg/dL x Insulina de ayuno en uUI/mL / 405). Un valor <strong>HOMA-IR &gt; 2.6</strong> certifica resistencia a la insulina en adultos chilenos.',
        ],
      },
      {
        subhead: '3. Algoritmo de Tamizaje Escalonado en APS',
        paragraphs: [
          'El tamizaje en APS se realiza con <strong>glicemia de ayuno</strong> en todo adulto con sobrepeso/obesidad (IMC ≥ 25) más un factor de riesgo (sedentarismo, HTA, dislipidemia, familiar de primer grado diabético) o en todo individuo mayor de 45 años:<br>' +
          '• Si glicemia &lt; 100 mg/dL: <strong>Normal</strong>; repetir cada 3 años.<br>' +
          '• Si glicemia 100–125 mg/dL: Solicitar <strong>Prueba de Tolerancia a la Glucosa Oral (PTGO) con 75 g</strong>.<br>' +
          '- Basal &lt; 100 y 2h &lt; 140 mg/dL: Normal.<br>' +
          '- 2h entre 140 y 199 mg/dL: <strong>Intolerancia a la Glucosa Oral</strong>.<br>' +
          '- 2h ≥ 200 mg/dL: <strong>Diabetes Mellitus confirmada</strong> (la PTGO no requiere repetición).<br>' +
          '• Si glicemia ≥ 126 mg/dL en paciente asintomático: <strong>Repetir glicemia de ayuno</strong>. Si la segunda toma es ≥ 126 mg/dL, se confirma Diabetes Mellitus. Si resulta &lt; 126 mg/dL, se solicita PTGO.',
        ],
      },
      {
        subhead: '4. Uso de la Hemoglobina Glicosilada (HbA1c) y Situaciones de Falsa Interpretación',
        paragraphs: [
          'La HbA1c refleja el promedio ponderado de glicemias de los <strong>últimos 2 a 3 meses (vida media del eritrocito)</strong>.<br>' +
          '• <strong>Indicación de máxima utilidad clínica en hospitalizados:</strong> Cuando un paciente ingresa por una enfermedad aguda descompensante (sepsis, IAM, politrauma, neumonía grave) y presenta hiperglicemia (&gt; 180–200 mg/dL), <strong>la glicemia aguda no sirve para diagnosticar diabetes de base</strong> por el exceso de catecolaminas y cortisol de estrés. En este caso, el examen de elección es la <strong>HbA1c</strong>: si es ≥ 6.5% certifica que el paciente ya era diabético previo al ingreso.<br>' +
          '• <strong>Falsos resultados:</strong> Falsamente baja en anemias hemolíticas, pérdidas agudas de sangre y hemodiálisis; falsamente alta en anemia ferropénica severa prolongada o esplenectomía.',
        ],
      },
      {
        subhead: '5. Notificación Legal GES N° 2 y Protocolo de Ingreso',
        paragraphs: [
          'Una vez certificado el diagnóstico mediante confirmación documental, se debe realizar la <strong>Notificación Oficial GES N° 2 (Diabetes Mellitus Tipo 2)</strong>, la cual garantiza por ley:<br>' +
          '1. Confirmación diagnóstica y evaluación integral inicial en menos de 45 días.<br>' +
          '2. Acceso garantizado a fármacos de primera línea (metformina, sulfonilureas, insulina e insumos).<br>' +
          '3. Exámenes periódicos de control (HbA1c cada 3–6 meses, creatinina, RAC en orina anual, fondo de ojo y evaluación de pies).',
        ],
      },
    ],
    table: {
      title: 'Categorías Diagnósticas de Homeostasis Glucémica en No Gestantes',
      headers: ['Categoría', 'Glicemia de Ayuno (8h)', 'PTGO 75g (a las 2 horas)', 'Hemoglobina Glicosilada (HbA1c)'],
      rows: [
        ['Normal', '< 100 mg/dL', '< 140 mg/dL', '< 5.7%'],
        ['Glicemia de Ayuno Alterada (GAA)', '100 a 125 mg/dL', '< 140 mg/dL', '5.7% a 6.4%'],
        ['Intolerancia a la Glucosa Oral (ITG)', '< 100 o 100-125 mg/dL', '140 a 199 mg/dL', '5.7% a 6.4%'],
        ['Diabetes Mellitus', '≥ 126 mg/dL (confirmada)', '≥ 200 mg/dL', '≥ 6.5% (confirmada)'],
        ['Crisis Hiperglicémica con Síntomas', 'Cualquier glicemia al azar ≥ 200 mg/dL + Síntomas clásicos (No requiere repetición)', '—', '—'],
      ],
    },
    severityTable: {
      title: 'Algoritmo de Conducta en APS ante Glicemia de Ayuno Alterada',
      headers: ['Resultado Inicial en Ayuno', 'Interpretación Clínica', 'Conducta Inmediata Obligatoria', 'Resultado Confirmatorio'],
      rows: [
        ['< 100 mg/dL', 'Glicemia Normal', 'Control preventivo habitual cada 3 años', 'Mantener estilo de vida saludable'],
        ['100 a 125 mg/dL', 'Glicemia de Ayuno Alterada (GAA)', 'Solicitar PTGO con 75 g de glucosa oral', '2h < 140: solo GAA · 140-199: ITG · ≥ 200: Diabetes'],
        ['≥ 126 mg/dL (sin síntomas)', 'Sospecha de Diabetes Mellitus', 'Repetir Glicemia de Ayuno en día diferente', '2.ª toma ≥ 126: DIABETES · < 126: Realizar PTGO'],
        ['≥ 200 mg/dL + Síntomas clásicos', 'Diabetes Mellitus Sintomática', 'Confirmación Inmediata; NO repetir examen', 'Ingreso directo a GES DM2 e inicio de terapia'],
      ],
    },
    treatmentTable: {
      title: 'Intervención Escalonada según Nivel de Alteración Glucémica',
      headers: ['Estrato Diagnóstico', 'Intervención de Primera Línea', 'Meta Terapéutica', 'Seguimiento en APS'],
      rows: [
        ['Glicemia de Ayuno Alterada', 'Cambios estilo de vida (dieta hipocalórica + ejercicio)', 'Normalizar glicemia < 100 mg/dL', 'Control con glicemia anual'],
        ['Intolerancia a la Glucosa (ITG)', 'Estilo de vida intensivo ± Metformina si IMC > 35', 'Evitar progresión a diabetes', 'Control con PTGO o HbA1c cada 12 m'],
        ['Diabetes Mellitus (HbA1c < 8.0%)', 'Metformina 850 mg/día escalonada + Dieta y ejercicio', 'HbA1c < 7.0% (< 8% en frágiles)', 'Control con HbA1c cada 3 meses'],
        ['Diabetes Mellitus (HbA1c ≥ 9.0%)', 'Terapia combinada precoz (Metformina + 2° fármaco/Insulina)', 'Descenso rápido de gluco-toxicidad', 'Control médico estrecho en 30 días'],
      ],
    },
    vignette: 'Hombre de 49 años, transportista, con IMC 31 kg/m² y antecedentes de hipertensión arterial, asintomático. En examen de medicina preventiva laboral presenta glicemia de ayuno de 132 mg/dL. El paciente niega polidipsia o baja de peso. Acude a su CESFAM para definir conducta médica.',
    explicacion: 'En un paciente asintomático con una única glicemia de ayuno ≥ 126 mg/dL (132 mg/dL), no se puede certificar el diagnóstico de forma definitiva con un solo examen. La conducta reglamentaria e indicada por todas las guías de práctica clínica (ADA y MINSAL) es solicitar una SEGUNDA glicemia venosa de ayuno en un día distinto. Si este segundo examen resulta nuevamente ≥ 126 mg/dL, se confirma el diagnóstico de Diabetes Mellitus Tipo 2 y se procede al ingreso al programa GES.',
    keyPoints: [
      'Cuatro criterios: Ayuno ≥ 126 mg/dL; PTGO 2h ≥ 200 mg/dL; HbA1c ≥ 6.5%; o Glicemia al azar ≥ 200 mg/dL con síntomas.',
      'En pacientes asintomáticos, toda glicemia ≥ 126 mg/dL DEBE repetirse en un día diferente para confirmar.',
      'Glicemia casual ≥ 200 mg/dL con síntomas clásicos (4 P) confirma el diagnóstico sin requerir segundo examen.',
      'Glicemia de ayuno entre 100 y 125 mg/dL se denomina Glicemia de Ayuno Alterada y exige solicitar una PTGO con 75 g.',
      'La PTGO diagnostica Intolerancia a la Glucosa si el valor a las 2 horas es 140–199 mg/dL, y Diabetes si es ≥ 200 mg/dL.',
      'En pacientes hospitalizados con patología aguda, la hiperglicemia puede ser por estrés; la HbA1c es el examen de elección.',
      'La confirmación de diabetes tipo 2 activa las garantías legales GES N° 2 en Chile.',
      'En adultos chilenos, un índice HOMA-IR > 2.6 certifica resistencia a la insulina.',
    ],
    questions: [
      {
        stem: 'Un paciente de 52 años, con sobrepeso (IMC 28 kg/m²), asintomático, se realiza un chequeo médico preventivo que muestra una glicemia de ayuno de 118 mg/dL. ¿Cuál es la conducta diagnóstica más adecuada que se debe seguir a continuación?',
        options: [
          { id: 'A', text: 'Confirmar el diagnóstico de diabetes mellitus tipo 2 e iniciar metformina' },
          { id: 'B', text: 'Repetir la glicemia de ayuno en dos semanas' },
          { id: 'C', text: 'Solicitar una prueba de tolerancia a la glucosa oral (PTGO con 75 gramos)' },
          { id: 'D', text: 'Solicitar una hemoglobina glicosilada aislada' },
          { id: 'E', text: 'Dar de alta al paciente asegurando que se encuentra en un rango completamente normal' },
        ],
        correcta: 'C',
        explicacion: 'Una glicemia de ayuno entre 100 y 125 mg/dL corresponde a una Glicemia de Ayuno Alterada (prediabetes). La conducta establecida en las guías clínicas del MINSAL ante este hallazgo es solicitar una Prueba de Tolerancia a la Glucosa Oral (PTGO) con 75 gramos de glucosa anhidra para evaluar si el paciente presenta intolerancia a la glucosa oral (140-199 mg/dL a las 2 horas) o diabetes mellitus encubierta (≥ 200 mg/dL). No se debe repetir la glicemia de ayuno porque ya sabemos que está en rango prediabético.',
        recTag: 'EUNACOM Diciembre 2016 · Reconstrucción oficial',
      },
      {
        stem: 'Un hombre de 46 años consulta por astenia, visión borrosa, polidipsia intensa y nicturia de tres semanas de evolución. Al examen físico se encuentra hidratado y con signos vitales normales. La glicemia capilar tomada en el box al azar arroja 248 mg/dL. ¿Cuál es la conducta médica correcta?',
        options: [
          { id: 'A', text: 'Solicitar glicemia de ayuno venosa para confirmar el diagnóstico la próxima semana' },
          { id: 'B', text: 'Realizar una prueba de tolerancia a la glucosa oral de 75 gramos en ayunas' },
          { id: 'C', text: 'Confirmar el diagnóstico de diabetes mellitus de inmediato e iniciar manejo terapéutico' },
          { id: 'D', text: 'Solicitar anticuerpos anti-insulina antes de emitir cualquier diagnóstico' },
          { id: 'E', text: 'Indicar dieta estricta sin fármacos y reevaluar con hemoglucotest seriado en un mes' },
        ],
        correcta: 'C',
        explicacion: 'La presencia de síntomas cardinales clásicos de hiperglicemia (polidipsia, poliuria/nicturia, visión borrosa) en combinación con una glicemia casual tomada en cualquier momento del día ≥ 200 mg/dL cumple de forma definitiva y autónoma el criterio de confirmación de Diabetes Mellitus. En este escenario no se requiere ni se debe postergar el diagnóstico esperando una segunda muestra en ayunas, debiendo iniciarse el plan terapéutico de inmediato.',
        recTag: 'EUNACOM Julio 2018 · Reconstrucción oficial',
      },
      {
        stem: 'Una paciente de 60 años ingresa a la unidad de cuidados intensivos por shock séptico secundario a pielonefritis aguda. En sus exámenes de ingreso destaca una glicemia venosa de 240 mg/dL. La paciente no cuenta con antecedentes médicos conocidos ni controles previos. ¿Cuál es el examen de laboratorio más idóneo para determinar con certeza si la paciente es portadora de diabetes mellitus previa versus una hiperglicemia de estrés transitoria?',
        options: [
          { id: 'A', text: 'Prueba de tolerancia a la glucosa oral con 75 g al tercer día' },
          { id: 'B', text: 'Determinación de Hemoglobina Glicosilada (HbA1c)' },
          { id: 'C', text: 'Repetición de glicemia venosa en ayuno a las 48 horas de evolución' },
          { id: 'D', text: 'Medición de insulinemia basal y cálculo del índice HOMA-IR' },
          { id: 'E', text: 'Cetonemia cuantitativa' },
        ],
        correcta: 'B',
        explicacion: 'En pacientes hospitalizados con procesos infecciosos o sépticos agudos graves, la liberación masiva de hormonas de contrarregulación (cortisol, catecolaminas, glucagón) induce hiperglicemia de estrés incluso en pacientes no diabéticos. En este contexto, la glicemia plasmática no sirve para diagnosticar diabetes de base. El examen de elección es la Hemoglobina Glicosilada (HbA1c), ya que refleja el promedio glucémico de los 2 a 3 meses previos al evento agudo; un valor ≥ 6.5% certifica diabetes previa a la hospitalización.',
        recTag: 'EUNACOM Diciembre 2021 · Reconstrucción oficial',
      },
      {
        stem: 'Un paciente de 48 años asintomático, sin antecedentes mórbidos, presenta en su primer examen de medicina preventiva una glicemia venosa en ayunas de 138 mg/dL. Se repite el examen dos semanas después bajo estricto ayuno de 10 horas, resultando en 115 mg/dL. ¿Cuál es el paso diagnóstico que corresponde realizar ahora?',
        options: [
          { id: 'A', text: 'Descartar diabetes mellitus y prediabetes por haber salido la segunda glicemia bajo 126 mg/dL' },
          { id: 'B', text: 'Confirmar diabetes mellitus tipo 2 por haber tenido una primera glicemia sobre 126 mg/dL' },
          { id: 'C', text: 'Solicitar una prueba de tolerancia a la glucosa oral (PTGO con 75 gramos)' },
          { id: 'D', text: 'Iniciar monoterapia con metformina 850 mg al día' },
          { id: 'E', text: 'Repetir la glicemia de ayuno una tercera vez al día siguiente' },
        ],
        correcta: 'C',
        explicacion: 'El paciente presentó una primera glicemia compatible con sospecha de diabetes (≥ 126 mg/dL), pero la segunda muestra resultó discordante (< 126 mg/dL, específicamente 115 mg/dL, en rango de glicemia de ayuno alterada). Ante resultados discordantes en ayuno, la regla diagnóstica de la ADA y las guías chilenas indica desempatar el cuadro solicitando una Prueba de Tolerancia a la Glucosa Oral (PTGO con 75 g), la cual determinará si el valor a las 2 horas es normal (< 140), intolerante (140-199) o diabético (≥ 200).',
        recTag: 'EUNACOM Julio 2024 · Reconstrucción oficial',
      },
    ],
  },
  {
    id: 'diab-03',
    classId: 'diab-03',
    tier: 3,
    blockNum: 1,
    blockName: 'Diagnóstico, Clasificación y Tamizaje de Diabetes',
    topicLabel: '1.3',
    title: 'Diabetes y Embarazo: Gestacional (DMG) vs Pregestacional (DMPG)',
    perfilCode: '1.04.1.003, 1.04.2.001',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES): Salud del Embarazo y Parto',
    reconstrucciones: 'EUNACOM Julio 2017 (Q#33) · EUNACOM Diciembre 2019 (Q#08) · EUNACOM Diciembre 2022 (Q#51) · EUNACOM Julio 2024 (Q#19)',
    frecuencia: 'Máxima · Cortes diagnósticos estrictos de ayuno (≥ 100 mg/dL) y regla de las 12 semanas',
    svg: null, algoTitle: 'Algoritmo Diagnóstico de Diabetes en el Embarazo (Guía Perinatal MINSAL)',
    diagram: flow('Algoritmo de Diagnóstico de Diabetes en la Gestante', [
      { t: 'Control Prenatal de Ingreso (1° Trimestre): Glicemia de Ayuno Venosa', s: 'Evaluar presencia de factores de riesgo obstétricos y edad gestacional exacta' },
      { k: 'split', q: '¿Qué Valor Arroja la Glicemia de Ayuno en el 1° Trimestre?', s: 'Cortes en embarazo son más estrictos: no existe la prediabetes gestacional', ll: 'Glicemia < 100 mg/dL', rl: 'Glicemia ≥ 100 mg/dL (en 1° Trimestre)',
        left: { t: 'Glicemia Normal en 1° Trimestre', s: 'Programar PTGO con 75 g obligatoria entre las 24 y 28 semanas de gestación', type: 'acc' },
        right: { t: 'Repetir Glicemia de Ayuno de Inmediato', s: 'Si 100-125 en 2 tomas: Diabetes Gestacional · Si ≥ 126 en ≤ 12 semanas: Diabetes Pregestacional', type: 'warn' },
        ll: '< 100 normal', rl: '≥ 100 alterada' },
      { t: 'PTGO 75 g a las 24-28 Semanas', s: 'Basal ≥ 100 mg/dL O a las 2 horas ≥ 140 mg/dL confirman DIABETES GESTACIONAL (DMG)', type: 'dec', al: 'tamizaje 24-28 sem', from: 'left' },
    ]),
    contexto: 'La diabetes en el embarazo es una de las áreas más evaluadas en el EUNACOM debido a las graves complicaciones perinatales que genera (macrosomía fetal, distocia de hombros, hipoglicemia neonatal e hipoxia intrauterina). Se debe dominar la regla de oro: en el embarazo NO existe la prediabetes; cualquier valor alterado es DMG. Además, es imprescindible dominar el corte de ayuno (≥ 100 mg/dL, no 126) y la distinción cronológica de las 12 semanas para diabetes pregestacional.',
    contentSections: [
      {
        subhead: '1. Fisiopatología Endocrina del Embarazo y Resistencia a la Insulina',
        paragraphs: [
          'Durante la segunda mitad de la gestación (especialmente desde las 20–24 semanas), la placenta produce crecientes cantidades de hormonas de contrarregulación diabetogénicas: <strong>Lactógeno Placentario Humano (hPL o somatomamotropina coriónica)</strong>, progesterona, cortisol libre y prolactina.',
          'Estas hormonas inducen un estado fisiológico de <strong>resistencia periférica a la insulina</strong> destinado a asegurar un flujo continuo de glucosa hacia el feto. Cuando la reserva pancreática materna no logra triplicar la secreción insulínica, se desarrolla la <strong>Diabetes Mellitus Gestacional (DMG)</strong>.',
        ],
      },
      {
        subhead: '2. En el Embarazo NO Existe la Prediabetes: Umbrales Numéricos Estrictos',
        paragraphs: [
          '<strong>Regla de oro de examen EUNACOM:</strong> En la mujer embarazada <strong>NO existen los diagnósticos de prediabetes</strong> (no existe Glicemia de Ayuno Alterada ni Intolerancia a la Glucosa Oral). Cualquier cifra que en un adulto no gestante sería catalogada de prediabetes, <strong>en la embarazada constituye diagnóstico formal de DIABETES GESTACIONAL</strong>, ya que incluso hiperglicemias leves atraviesan la placenta y provocan hiperinsulinismo fetal y morbilidad severa.',
          '<strong>Criterios Diagnósticos de Diabetes Mellitus Gestacional (DMG):</strong><br>' +
          '1. <strong>Dos glicemias venosas de ayuno ≥ 100 mg/dL</strong> (en días diferentes).<br>' +
          '2. <strong>PTGO con 75 g de glucosa a las 24–28 semanas</strong> con: Glicemia basal <strong>≥ 100 mg/dL</strong> O Glicemia a las 2 horas post-carga <strong>≥ 140 mg/dL</strong> (basta un solo valor alterado).<br>' +
          '3. Cualquier glicemia casual ≥ 200 mg/dL con síntomas de hiperglicemia.',
        ],
      },
      {
        subhead: '3. Diferenciación Vital: Diabetes Gestacional vs Pregestacional (Regla de las 12 Semanas)',
        paragraphs: [
          '• <strong>Diabetes Pregestacional (DMPG):</strong> Es aquella paciente con diagnóstico de diabetes mellitus previo a la concepción, O BIEN aquella a quien se le pesquisan <strong>criterios de persona no embarazada (dos glicemias de ayuno ≥ 126 mg/dL o glicemia ≥ 200 con síntomas) durante las primeras 12 semanas de gestación</strong>. Tienen alto riesgo de <strong>malformaciones congénitas mayores</strong> (cardíacas como transposición de grandes vasos, esqueléticas como regresión caudal) por hiperglicemia durante la organogénesis.<br>' +
          '• <strong>Diabetes Gestacional (DMG):</strong> Inicio o pesquisa de la intolerancia glucémica a partir del segundo trimestre, o glicemias de ayuno entre 100 y 125 mg/dL en las primeras 12 semanas. No aumenta malformaciones congénitas (la organogénesis ya ocurrió), pero induce <strong>macrosomía fetal, polihidramnios y distocia de hombros</strong>.',
        ],
      },
      {
        subhead: '4. Calendario Oficial de Tamizaje según Guía Perinatal MINSAL',
        paragraphs: [
          '• <strong>Ingreso Prenatal (Primer Trimestre):</strong> Solicitar <strong>Glicemia de Ayuno</strong> a toda embarazada.<br>' +
          '- Si es &lt; 100 mg/dL: <strong>Normal</strong>. Programar PTGO entre semanas 24 y 28.<br>' +
          '- Si es entre 100 y 125 mg/dL: <strong>Repetir glicemia de ayuno de inmediato</strong>. Si la segunda es ≥ 100 mg/dL: <strong>Diabetes Gestacional</strong>.<br>' +
          '- Si es ≥ 126 mg/dL: Repetir de inmediato. Si la segunda es ≥ 126 mg/dL: <strong>Diabetes Pregestacional</strong>.<br>' +
          '• <strong>Segundo Trimestre (Semanas 24 a 28):</strong> <strong>PTGO universal con 75 g de glucosa</strong> a toda gestante que tuvo glicemia normal en primer trimestre. Si basal ≥ 100 o 2h ≥ 140 mg/dL: <strong>DMG confirmada</strong>.<br>' +
          '• <strong>Tercer Trimestre (Semanas 32 a 34):</strong> Repetir PTGO si la de 24–28 fue normal pero la paciente presenta <strong>factores de alto riesgo</strong>: feto grande para la edad gestacional (GEG en eco), polihidramnios o DMG en embarazo previo.',
        ],
      },
      {
        subhead: '5. Objetivos de Control y Principios Terapéuticos',
        paragraphs: [
          '• <strong>Metas de Autocontrol Glucémico en Embarazo (Guías MINSAL):</strong><br>' +
          '- Glicemia en ayunas: <strong>70 a 95 mg/dL</strong>.<br>' +
          '- Glicemia 1 hora postprandial: <strong>&lt; 140 mg/dL</strong> (o 2 horas postprandial: <strong>&lt; 120 mg/dL</strong>).<br>' +
          '• <strong>Pilares de Manejo:</strong> 1) Terapia médica nutricional por nutricionista (fraccionamiento en 4 comidas y 2 colaciones, carbohidratos complejos); 2) Si tras 1 a 2 semanas no logra metas o hay macrosomía en ecografía: <strong>Insulinoterapia subcutánea inmediata</strong> (NPH y cristalina/ultrarrápida). Los hipoglucemiantes orales clásicos como glibenclamida están contraindicados.',
        ],
      },
    ],
    table: {
      title: 'Comparación Clínica: Diabetes Gestacional vs Diabetes Pregestacional',
      headers: ['Característica', 'Diabetes Gestacional (DMG)', 'Diabetes Pregestacional (DMPG)'],
      rows: [
        ['Momento de inicio / pesquisa', 'Durante el embarazo (típicamente > 12 semanas)', 'Previa al embarazo o en primeras 12 semanas con glicemia ≥ 126'],
        ['Riesgo de Malformaciones fetales', 'NO aumentado (organogénesis ya completada)', 'ALTO RIESGO (cardiopatías conotruncales, regresión caudal)'],
        ['Complicaciones fetales típicas', 'Macrosomía, polihidramnios, distocia de hombros', 'Malformaciones, RCIU por daño vascular, muerte in utero'],
        ['Criterio diagnóstico en ayuno', '≥ 100 mg/dL en 2 ocasiones', '≥ 126 mg/dL en 2 ocasiones (o diagnóstico previo)'],
        ['PTGO 75g a las 2 horas', '≥ 140 mg/dL', '≥ 200 mg/dL'],
        ['Conducta postparto', 'PTGO con 75 g a las 6-12 semanas postparto', 'Mantener insulinoterapia según requerimiento crónico'],
      ],
    },
    severityTable: {
      title: 'Cortes Diagnósticos de Glicemia en Embarazo según Edad Gestacional',
      headers: ['Momento Gestacional', 'Glicemia de Ayuno 100 - 125 mg/dL', 'Glicemia de Ayuno ≥ 126 mg/dL', 'PTGO 75g (2 Horas)'],
      rows: [
        ['≤ 12 Semanas (1° Trimestre)', 'Diabetes Gestacional (confirmar)', 'Diabetes Pregestacional (confirmar)', 'No se realiza de rutina'],
        ['Semanas 24 a 28 (2° Trimestre)', 'Diabetes Gestacional', 'Diabetes Gestacional', '≥ 140 mg/dL = Diabetes Gestacional'],
        ['Semanas 32 a 34 (3° Trimestre)', 'Diabetes Gestacional', 'Diabetes Gestacional', '≥ 140 mg/dL en alto riesgo = DMG'],
        ['Mujer No Embarazada (Control)', 'Glicemia Ayuno Alterada (GAA)', 'Sospecha Diabetes (repetir)', '140-199: ITG · ≥ 200: Diabetes'],
      ],
    },
    treatmentTable: {
      title: 'Protocolo de Metas Glucémicas y Escalamiento Terapéutico en Gestantes',
      headers: ['Etapa de Manejo', 'Intervención de Elección', 'Meta Glucémica', 'Criterio de Escalamiento a Insulina'],
      rows: [
        ['1. Terapia Nutricional', 'Dieta fraccionada (4 comidas + 2 colaciones) sin azúcares simples', 'Ayuno < 90-95 · 1h post < 140 · 2h post < 120', 'Glicemias fuera de meta en > 20% de controles'],
        ['2. Insulina Basal', 'Insulina NPH matinal o nocturna (0.1 a 0.2 UI/kg)', 'Normalizar glicemia de ayuno < 90-95 mg/dL', 'Si persisten hiperglicemias postprandiales'],
        ['3. Insulina Prandial', 'Insulina Cristalina o Ultrarrápida pre-comidas', 'Glicemia 1h postprandial < 140 mg/dL', 'Ajuste dinámico según automonitoreo'],
        ['4. Control Fetal Ecográfico', 'Biometría fetal seriada cada 3-4 semanas', 'Circunferencia abdominal < percentil 90', 'Polihidramnios o macrosomía aceleran insulina'],
      ],
    },
    vignette: 'Primigesta de 26 años, cursando embarazo de 10 semanas sin molestias. En sus exámenes de ingreso prenatal presenta glicemia de ayuno de 108 mg/dL. Se repite a los 4 días en ayuno estricto, resultando en 106 mg/dL. La paciente no presenta glucosuria ni antecedentes familiares directos de diabetes.',
    explicacion: 'En la mujer embarazada no existe el concepto de glicemia de ayuno alterada. El punto de corte diagnóstico de ayuno es de 100 mg/dL. Al presentar dos glicemias de ayuno en primer trimestre ≥ 100 mg/dL pero menores a 126 mg/dL (108 y 106 mg/dL), el diagnóstico concluyente es Diabetes Mellitus Gestacional (DMG). No es pregestacional porque para ello se requiere cumplir criterios de persona no embarazada (≥ 126 mg/dL). Debe ingresar a control de alto riesgo obstétrico e iniciar plan de alimentación.',
    keyPoints: [
      'En el embarazo NO existe la prediabetes: cualquier glicemia de ayuno ≥ 100 mg/dL confirmada es Diabetes Gestacional.',
      'Dos glicemias de ayuno ≥ 100 mg/dL en cualquier momento del embarazo hacen el diagnóstico de Diabetes Gestacional.',
      'Si en las primeras 12 semanas presenta glicemia de ayuno ≥ 126 mg/dL confirmada, es Diabetes Pregestacional.',
      'La Diabetes Pregestacional aumenta el riesgo de malformaciones congénitas; la Diabetes Gestacional causa macrosomía y distocia.',
      'La PTGO de 75 g se realiza universalmente entre las semanas 24 y 28; el corte a las 2 horas es ≥ 140 mg/dL.',
      'La PTGO se repite a las 32–34 semanas solo si hay factores de alto riesgo: feto grande, polihidramnios o DMG previa.',
      'Metas de control en gestantes: ayuno < 90–95 mg/dL y 1 hora postprandial < 140 mg/dL.',
      'El tratamiento farmacológico de elección si falla la dieta es la Insulina NPH y Cristalina; las sulfonilureas están contraindicadas.',
    ],
    questions: [
      {
        stem: 'Una mujer de 29 años, cursando embarazo de 9 semanas, presenta en sus exámenes de ingreso una glicemia de ayuno de 104 mg/dL. Se repite el examen a la semana siguiente obteniéndose 107 mg/dL. ¿Cuál es el diagnóstico más adecuado?',
        options: [
          { id: 'A', text: 'Glicemia de ayuno alterada' },
          { id: 'B', text: 'Embarazo normal; los niveles corresponden al cambio hormonal fisiológico' },
          { id: 'C', text: 'Diabetes mellitus gestacional' },
          { id: 'D', text: 'Diabetes mellitus pregestacional' },
          { id: 'E', text: 'Intolerancia a los hidratos de carbono del embarazo' },
        ],
        correcta: 'C',
        explicacion: 'En el embarazo no existe el diagnóstico de glicemia de ayuno alterada ni de prediabetes. Las guías clínicas perinatales del MINSAL establecen que dos glicemias de ayuno iguales o superiores a 100 mg/dL tomadas en días distintos confirman de manera categórica una Diabetes Mellitus Gestacional. Para haber sido clasificada como pregestacional en el primer trimestre, los valores habrían tenido que ser iguales o mayores a 126 mg/dL (criterio de persona no gestante).',
        recTag: 'EUNACOM Julio 2017 · Reconstrucción oficial',
      },
      {
        stem: 'Una primigesta de 26 semanas se realiza una prueba de tolerancia a la glucosa oral con 75 gramos de glucosa por protocolo de control prenatal. El informe reporta una glicemia basal de 88 mg/dL y una glicemia a las 2 horas post-carga de 148 mg/dL. ¿Cuál es la interpretación y conducta correcta?',
        options: [
          { id: 'A', text: 'Examen normal; la paciente debe continuar control habitual en sala común' },
          { id: 'B', text: 'Intolerancia a la glucosa gestacional; repetir la prueba a las 32 semanas' },
          { id: 'C', text: 'Diabetes mellitus gestacional; derivar a policlínico de alto riesgo obstétrico e iniciar régimen nutricional' },
          { id: 'D', text: 'Diabetes mellitus pregestacional descompensada; hospitalizar para inducción con infusión de insulina' },
          { id: 'E', text: 'Examen no concluyente; realizar hemoglobina glicosilada confirmatoria' },
        ],
        correcta: 'C',
        explicacion: 'En la PTGO de 75 gramos realizada entre las 24 y 28 semanas, el punto de corte para definir Diabetes Mellitus Gestacional a las 2 horas es ≥ 140 mg/dL. Al presentar un valor de 148 mg/dL, el diagnóstico de Diabetes Gestacional queda plenamente certificado (basta un solo valor alterado de la prueba). En el embarazo no existe la intolerancia a la glucosa; la paciente debe ser derivada a la unidad de alto riesgo obstétrico (ARO) para iniciar educación y terapia médico-nutricional.',
        recTag: 'EUNACOM Diciembre 2019 · Reconstrucción oficial',
      },
      {
        stem: 'Una paciente de 30 años con embarazo de 7 semanas acude a control prenatal con dos glicemias de ayuno tomadas en días diferentes que arrojan 132 mg/dL y 136 mg/dL. ¿Cuál es el diagnóstico y cuál es el riesgo fetal más relevante asociado a este momento de exposición hiperglicémica?',
        options: [
          { id: 'A', text: 'Diabetes gestacional; riesgo aumentado de macrosomía y polihidramnios tardío' },
          { id: 'B', text: 'Diabetes pregestacional; riesgo aumentado de malformaciones congénitas mayores' },
          { id: 'C', text: 'Glicemia de ayuno alterada; sin riesgo fetal demostrable' },
          { id: 'D', text: 'Diabetes gestacional; riesgo exclusivo de hipoglicemia neonatal transitoria' },
          { id: 'E', text: 'Resistencia fisiológica a la insulina; conducta expectante hasta las 24 semanas' },
        ],
        correcta: 'B',
        explicacion: 'Toda gestante a la que se le detecten cifras de glicemia de ayuno ≥ 126 mg/dL (criterio de diabetes en el adulto no gestante) durante las primeras 12 semanas de embarazo se cataloga como Diabetes Pregestacional (tenía diabetes no diagnosticada previa a la concepción). La exposición a hiperglicemia materna severa durante el primer trimestre (periodo de organogénesis) se asocia directamente a una elevada incidencia de malformaciones congénitas estructurales (especialmente defectos cardíacos y del tubo neural).',
        recTag: 'EUNACOM Diciembre 2022 · Reconstrucción oficial',
      },
      {
        stem: '¿Cuál de las siguientes metas de automonitoreo glicémico capilar corresponde al objetivo terapéutico estandarizado en una embarazada con diabetes gestacional en tratamiento nutricional según la Guía Perinatal del MINSAL?',
        options: [
          { id: 'A', text: 'Glicemia en ayunas menor a 110 mg/dL y postprandial a las 2 horas menor a 140 mg/dL' },
          { id: 'B', text: 'Glicemia en ayunas menor a 70 mg/dL y postprandial a la hora menor a 100 mg/dL' },
          { id: 'C', text: 'Glicemia en ayunas entre 70 y 90-95 mg/dL y postprandial a la hora menor a 140 mg/dL' },
          { id: 'D', text: 'Glicemia en ayunas menor a 126 mg/dL y postprandial a las 2 horas menor a 180 mg/dL' },
          { id: 'E', text: 'Hemoglobina glicosilada estricta menor a 5.0% independientemente de las glicemias diarias' },
        ],
        correcta: 'C',
        explicacion: 'Las metas de control metabólico en el embarazo son sumamente estrictas para prevenir el hiperinsulinismo fetal y la macrosomía. Según la Guía Perinatal del MINSAL y consensos internacionales, los objetivos de glicemia capilar son: Glicemia en ayunas entre 70 y 90-95 mg/dL, glicemia a la hora postprandial < 140 mg/dL, y glicemia a las 2 horas postprandial < 120 mg/dL. Si más del 20% de los registros superan estas metas, se debe iniciar insulinoterapia.',
        recTag: 'EUNACOM Julio 2024 · Reconstrucción oficial',
      },
    ],
  },
  {
    id: 'diab-04',
    classId: 'diab-04',
    tier: 2,
    blockNum: 1,
    blockName: 'Diagnóstico, Clasificación y Tamizaje de Diabetes',
    topicLabel: '1.4',
    title: 'Objetivos del Control Metabólico y Metas de HbA1c Individualizadas',
    perfilCode: '1.04.1.006',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES): Diabetes Mellitus Tipo 2',
    reconstrucciones: 'EUNACOM Diciembre 2018 (Q#19) · EUNACOM Julio 2021 (Q#44)',
    frecuencia: 'Alta · Metas individualizadas en adultos mayores vs jóvenes y costo de la hipoglicemia',
    svg: null, algoTitle: 'Algoritmo de Individualización de Metas de Hemoglobina Glicosilada (ADA / MINSAL)',
    diagram: flow('Algoritmo de Selección de Metas de HbA1c', [
      { t: 'Evaluación del Perfil del Paciente Diabético', s: 'Evaluar edad biológica, comorbilidades cardiovasculares/renales, riesgo de hipoglicemia y expectativa de vida' },
      { k: 'split', q: '¿Paciente Joven con Larga Expectativa vs Adulto Mayor Frágil con Comorbilidad?', s: 'Define el rigor de la meta glucémica para balancear riesgo vs beneficio', ll: 'Joven, Debut Reciente, Sin Comorbilidad', rl: 'Adulto Mayor, ERC Avanzada o Hipoglicemias Severas',
        left: { t: 'Meta Estricta: HbA1c < 6.5% - 7.0%', s: 'Previene daño microvascular precoz (retinopatía, nefropatía) · Lograble con cambios y metformina', type: 'acc' },
        right: { t: 'Meta Flexible: HbA1c < 8.0% - 8.5%', s: 'Prioridad absoluta: EVITAR HIPOGLICEMIAS letales · No cambiar esquema si HbA1c está en rango', type: 'warn' },
        ll: 'meta estricta (<7%)', rl: 'meta laxa (<8%)' },
      { t: 'Monitoreo Periódico de la HbA1c', s: 'Cada 3 meses si no está en meta o ajuste farmacológico reciente · Cada 6 meses en pacientes estables', type: 'dec', al: 'frecuencia control', from: 'left' },
    ]),
    contexto: 'El paradigma del control de la diabetes evolucionó desde metas universales rígidas hacia la individualización estricta. El EUNACOM pone trampas constantes en adultos mayores frágiles o con daño renal: un intento desmedido por bajar la HbA1c a menos de 7% aumenta la mortalidad por hipoglicemias y caídas. En ancianos, una HbA1c de 7.5–8.0% es óptima y NO debe intensificarse.',
    contentSections: [
      {
        subhead: '1. Racionalidad de las Metas de HbA1c y el Legado del Ensayo ACCORD',
        paragraphs: [
          'El ensayo clínico ACCORD demostró de forma concluyente que intentar normalizar de forma agresiva la glicemia (meta de HbA1c &lt; 6.0%) en pacientes con diabetes de larga data y alto riesgo cardiovascular <strong>aumentó la mortalidad general por arritmias secundarias a hipoglicemias severas</strong>.',
          'Por ende, la meta estándar universal es <strong>HbA1c &lt; 7.0%</strong> (glicemia promedio estimada ~154 mg/dL), la cual previene eficazmente las complicaciones microvasculares (nefropatía y retinopatía). En pacientes jóvenes con diagnóstico reciente, sin daño cardiovascular y tratados con fármacos que no inducen hipoglicemia (metformina, iSGLT2), se puede buscar una meta más estricta de <strong>&lt; 6.5%</strong>.',
        ],
      },
      {
        subhead: '2. Flexibilización en Adultos Mayores y Pacientes de Alto Riesgo',
        paragraphs: [
          'En el adulto mayor o paciente con comorbilidad avanzada, <strong>el riesgo de una hipoglicemia supera ampliamente el beneficio de prevenir retinopatía a 20 años</strong>:',
          '• <strong>Adulto mayor funcional y activo con pocas comorbilidades:</strong> Meta de <strong>HbA1c &lt; 7.5%</strong>.<br>' +
          '• <strong>Adulto mayor frágil, dependiente, con antecedentes de caídas, deterioro cognitivo o ERC etapa 4–5:</strong> Meta de <strong>HbA1c &lt; 8.0% a 8.5%</strong>.<br>' +
          '<strong>Regla de oro de examen EUNACOM:</strong> Si un adulto mayor de 80 años en tratamiento con sulfonilureas o insulina presenta una HbA1c de 7.6%, <strong>la conducta correcta es MANTENER el esquema y NO aumentarlo</strong>.',
        ],
      },
      {
        subhead: '3. Metas Complementarias de Presión Arterial y Lípidos en DM2',
        paragraphs: [
          'El riesgo cardiovascular en DM2 se reduce mucho más tratando la presión y los lípidos que solo la glucosa:<br>' +
          '• <strong>Presión Arterial:</strong> Meta universal en diabéticos <strong>&lt; 130/80 mmHg</strong> (siempre que sea bien tolerada).<br>' +
          '• <strong>Colesterol LDL:</strong> En diabéticos de muy alto riesgo cardiovascular (con enfermedad coronaria o daño renal), la meta es <strong>LDL &lt; 55 mg/dL</strong> (o &lt; 70 mg/dL en alto riesgo).<br>' +
          '• <strong>Tamizaje Microvascular:</strong> Evaluación anual obligatoria de albuminuria (RAC en orina matinal) y fondo de ojo con cámara no midriática.',
        ],
      },
    ],
    table: {
      title: 'Individualización de Metas de Hemoglobina Glicosilada (ADA / MINSAL)',
      headers: ['Perfil Clínico del Paciente', 'Meta de HbA1c', 'Glicemia Preprandial', 'Glicemia Postprandial (2h)'],
      rows: [
        ['Joven, diagnóstico reciente, sin complicaciones', '< 6.5% - 7.0%', '80 a 130 mg/dL', '< 180 mg/dL'],
        ['Adulto estándar con DM2 y expectativa > 15 años', '< 7.0%', '80 a 130 mg/dL', '< 180 mg/dL'],
        ['Adulto mayor activo, comorbilidad leve', '< 7.5%', '90 a 140 mg/dL', '< 180-200 mg/dL'],
        ['Adulto mayor frágil, demencia, ERC 4-5 o hipoglicemias', '< 8.0% - 8.5%', '100 a 150 mg/dL', '< 200 mg/dL'],
        ['Mujer embarazada con Diabetes Gestacional', '< 6.0% (sin hipoglicemia)', '< 90-95 mg/dL', '< 120 mg/dL'],
      ],
    },
    vignette: 'Hombre de 82 años, con antecedente de DM2 de 20 años de evolución, artrosis severa y enfermedad renal crónica etapa 3b (VFG 38 mL/min). Se encuentra en tratamiento con insulina NPH nocturna 14 UI y metformina 500 mg/día. Trae exámenes de control: HbA1c de 7.7%, glicemias preprandiales matinales entre 115 y 135 mg/dL, sin quejas de hipoglicemia. Consulta si debe aumentar la dosis de insulina.',
    explicacion: 'En un adulto mayor de 82 años con enfermedad renal crónica y movilidad reducida, la meta de HbA1c recomendada por consensos geriátricos e internacionales es de 7.5% a 8.5%. Un valor de 7.7% representa un control metabólico óptimo y seguro. Aumentar la dosis de insulina para forzar una HbA1c < 7% solo incrementaría dramáticamente el riesgo de hipoglicemias nocturnas letales, fracturas por caídas y eventos cardiovasculares. La conducta médica correcta es mantener el esquema actual sin modificaciones.',
    keyPoints: [
      'Meta estándar de HbA1c para la mayoría de los adultos con DM2: < 7.0% (glicemia preprandial 80–130 mg/dL).',
      'El estudio ACCORD demostró que un control hiper-estricto (< 6.0%) en diabéticos con comorbilidad aumenta la mortalidad.',
      'En adultos mayores frágiles, con demencia o ERC avanzada, la meta se flexibiliza a HbA1c < 8.0%–8.5%.',
      'Si un adulto mayor tiene HbA1c bajo 8.0% y no tiene síntomas de descompensación, NO se debe subir el tratamiento.',
      'La meta de presión arterial en diabetes es < 130/80 mmHg y el colesterol LDL debe ser < 70 mg/dL (o < 55 en daño de órgano).',
    ],
    questions: [
      {
        stem: 'Un paciente de 80 años, con antecedente de diabetes mellitus tipo 2, accidente cerebrovascular previo y artrosis de rodillas con marcha inestable, acude a control de su programa cardiovascular. Refiere sentirse en buenas condiciones generales, sin síntomas de poliuria ni bajas de azúcar. Sus exámenes de laboratorio muestran: creatinina 1.3 mg/dL, VFG estimada 48 mL/min/1.73m² y una hemoglobina glicosilada (HbA1c) de 7.8%. Actualmente se encuentra en tratamiento con metformina 850 mg cada 12 horas. ¿Cuál es la conducta médica más adecuada respecto a su tratamiento antidiabético?',
        options: [
          { id: 'A', text: 'Agregar glibenclamida 5 mg en la mañana para alcanzar una HbA1c menor a 7.0%' },
          { id: 'B', text: 'Iniciar insulina NPH nocturna a dosis de 0.2 UI/kg de peso' },
          { id: 'C', text: 'Mantener el tratamiento actual sin modificaciones' },
          { id: 'D', text: 'Suspender de inmediato la metformina por presentar fallo renal terminal' },
          { id: 'E', text: 'Cambiar metformina por sulfonilurea de alta potencia' },
        ],
        correcta: 'C',
        explicacion: 'En un adulto mayor de 80 años con comorbilidad neurológica y riesgo significativo de caídas, la meta terapéutica de hemoglobina glicosilada es flexible, situándose entre 7.5% y 8.5% para prevenir hipoglicemias potencialmente fatales. Un valor de HbA1c de 7.8% se encuentra perfectamente dentro del rango objetivo para su perfil clínico. Intensificar la terapia con fármacos hipoglicemiantes (como sulfonilureas o insulina) es una conducta errónea y peligrosa. La función renal permite mantener metformina en dosis ajustada.',
        recTag: 'EUNACOM Diciembre 2018 · Reconstrucción oficial',
      },
      {
        stem: '¿Cuál es el mejor examen de laboratorio para evaluar el control metabólico a mediano plazo (últimos dos a tres meses) y guiar los ajustes farmacológicos en un paciente con diabetes mellitus tipo 2 en control ambulatorio?',
        options: [
          { id: 'A', text: 'Glicemia venosa de ayuno mensual seriada' },
          { id: 'B', text: 'Fructosamina plasmática' },
          { id: 'C', text: 'Hemoglobina glicosilada (HbA1c)' },
          { id: 'D', text: 'Curva de tolerancia a la glucosa oral con 75 gramos' },
          { id: 'E', text: 'Hemoglucotest capilar pre y postprandial en un solo día' },
        ],
        correcta: 'C',
        explicacion: 'La determinación de Hemoglobina Glicosilada (HbA1c) es el estándar de oro indiscutido para evaluar el control metabólico retrospectivo de las últimas 8 a 12 semanas en pacientes con diabetes. La fructosamina refleja periodos más cortos (2 a 3 semanas) y la PTGO se utiliza para el diagnóstico pero no para el seguimiento del control glucémico ambulatorio.',
        recTag: 'EUNACOM Julio 2021 · Reconstrucción oficial',
      },
    ],
  },
  {
    id: 'diab-05',
    classId: 'diab-05',
    tier: 2,
    blockNum: 1,
    blockName: 'Diagnóstico, Clasificación y Tamizaje de Diabetes',
    topicLabel: '1.5',
    title: 'Ejercicio Físico, Cambios de Estilo de Vida y Prevención Cardiovascular',
    perfilCode: '1.04.1.012',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES): Diabetes Mellitus Tipo 2',
    reconstrucciones: 'EUNACOM Julio 2019 (Q#12) · EUNACOM Diciembre 2023 (Q#38)',
    frecuencia: 'Media-Alta · Prescripción de ejercicio aeróbico, prevención de hipoglicemia de esfuerzo y pie diabético',
    svg: null, algoTitle: 'Algoritmo de Prescripción Segura de Ejercicio en Pacientes con Diabetes',
    diagram: flow('Algoritmo de Prescripción y Seguridad en Ejercicio para Diabéticos', [
      { t: 'Evaluación Pre-Participación Deportiva en Diabetes Mellitus', s: 'Revisar neuropatía periférica (sensibilidad con monofilamento), retinopatía y riesgo cardiovascular' },
      { k: 'split', q: '¿Presenta Complicaciones Microvasculares Severas o Uso de Insulina / Secretagogos?', s: 'Define precauciones específicas de calzado, glucometría y tipo de ejercicio', ll: 'Sin complicaciones microvasculares', rl: 'Con Neuropatía, Retinopatía o Uso de Insulina',
        left: { t: 'Prescripción Universal: 150 min/sem', s: 'Ejercicio aeróbico moderado (caminata rápida, bicicleta) repartido en ≥ 3 días/sem sin más de 2 días consecutivos de reposo', type: 'acc' },
        right: { t: 'Precauciones de Seguridad Obligatorias', s: 'Neuropatía: evitar impacto articular y revisar calzado · Insulina: medir glicemia capilar antes del esfuerzo', type: 'warn' },
        ll: 'ejercicio estándar', rl: 'precaución especial' },
      { t: 'Manejo de Glicemia Pre-Ejercicio', s: 'Si glicemia < 100 mg/dL: consumir 15-20 g de carbohidratos · Si > 250 mg/dL con cetonas en DM1: posponer ejercicio', type: 'dec', al: 'glucometría segura', from: 'right' },
    ]),
    contexto: 'El ejercicio físico programado y la terapia médico-nutricional son la piedra angular no farmacológica de la diabetes, capaces de reducir la HbA1c en 0.5 a 1.0% mediante el reclutamiento de transportadores GLUT-4 independiente de insulina. El EUNACOM evalúa las recomendaciones mínimas (150 min/semana), las precauciones para prevenir hipoglicemias durante o post-esfuerzo en usuarios de insulina/sulfonilureas y las restricciones en pacientes con neuropatía sensorial periférica.',
    contentSections: [
      {
        subhead: '1. Mecanismo Celular y Prescripción Recomendada de Ejercicio',
        paragraphs: [
          'La contracción del músculo esquelético estimula directamente la translocación de transportadores <strong>GLUT-4</strong> desde el citoplasma a la membrana celular a través de la vía de la <strong>AMPK (proteína quinasa activada por AMP)</strong>, permitiendo la captación masiva de glucosa plasmática en forma <strong>totalmente independiente de la insulina</strong>.',
          '<strong>Prescripción estándar ADA / MINSAL:</strong> Al menos <strong>150 minutos semanales de actividad física aeróbica de intensidad moderada</strong> (caminar a paso ligero, natación, ciclismo), distribuidos en al menos 3 días por semana, sin dejar transcurrir más de 2 días consecutivos sin actividad. Debe complementarse con ejercicios de resistencia muscular 2 a 3 veces por semana.',
        ],
      },
      {
        subhead: '2. Prevención de Hipoglicemia Inducida por el Esfuerzo',
        paragraphs: [
          'El ejercicio aumenta la sensibilidad a la insulina hasta por 24 a 48 horas post-esfuerzo, pudiendo gatillar <strong>hipoglicemias tardías nocturnas</strong> en pacientes tratados con <strong>insulina o sulfonilureas (glibenclamida)</strong>. La metformina, iSGLT2 e iDPP4 NO causan hipoglicemia con el ejercicio.',
          '<strong>Reglas de glucometría de seguridad pre-ejercicio:</strong><br>' +
          '• Si la glicemia capilar pre-ejercicio es <strong>&lt; 100 mg/dL</strong>: El paciente debe ingerir una colación de <strong>15 a 20 gramos de carbohidratos de absorción rápida o mixta</strong> (ej. fruta o galletas de agua) antes de comenzar.<br>' +
          '• Si la glicemia es de 100 a 250 mg/dL: Zona segura para realizar ejercicio.<br>' +
          '• En pacientes con DM1, si la glicemia es <strong>&gt; 250 mg/dL con cetonuria/cetonemia positiva</strong>, el ejercicio está contraindicado temporalmente porque la falta de insulina generará mayor descarga de catecolaminas y cetoacidosis.',
        ],
      },
      {
        subhead: '3. Precauciones Específicas según Complicaciones Crónicas',
        paragraphs: [
          '• <strong>Neuropatía Periférica Sensitiva (Pie Diabético):</strong> La pérdida de sensibilidad protectora al dolor favorece la aparición de ampollas, úlceras o fracturas por sobrecarga. Se debe desaconsejar el trote o caminatas descalzo en superficies irregulares, recomendando natación, remo o bicicleta estática, con <strong>inspección diaria minuciosa de los pies y uso de calzado ortopédico acolchado sin costuras internas</strong>.<br>' +
          '• <strong>Retinopatía Diabética Proliferativa Severa:</strong> Evitar ejercicios vigorosos con maniobra de Valsalva o levantamiento de pesas máximas por riesgo de desprendimiento de retina o hemorragia vítrea.',
        ],
      },
    ],
    table: {
      title: 'Prescripción de Ejercicio y Recomendaciones Glucémicas en Diabetes',
      headers: ['Situación Clínica', 'Nivel de Glicemia Pre-Esfuerzo', 'Conducta Recomendada', 'Fármacos de Alto Riesgo'],
      rows: [
        ['Pre-ejercicio con hipoglicemia latente', '< 100 mg/dL', 'Ingerir 15 a 20 g de hidratos de carbono antes de iniciar', 'Insulina NPH/Cristalina, Glibenclamida'],
        ['Pre-ejercicio en rango seguro', '100 a 250 mg/dL', 'Iniciar ejercicio aeróbico con hidratación adecuada', 'Cualquiera'],
        ['Pre-ejercicio con hiperglicemia y cetonas', '> 250 mg/dL con cetonuria (+)', 'Suspender ejercicio; hidratar y administrar insulina rápida', 'Diabetes Mellitus Tipo 1'],
        ['Presencia de neuropatía sensitiva de pies', 'Indiferente', 'Evitar trote de impacto; preferir natación o bicicleta', 'Inspección de pies post-esfuerzo'],
        ['Retinopatía proliferativa activa', 'Indiferente', 'Evitar pesas pesadas, saltos o maniobras de Valsalva', 'Riesgo de hemorragia vítrea'],
      ],
    },
    vignette: 'Hombre de 54 años, portador de diabetes mellitus tipo 2 en tratamiento con metformina 850 mg c/12h e insulina NPH 18 UI matinal, decide iniciar un programa de acondicionamiento físico. Antes de salir a trotar a las 11:00 AM se realiza un hemoglucotest que marca 88 mg/dL. El paciente no presenta síntomas neurológicos ni sudoración.',
    explicacion: 'En un paciente con diabetes tratado con fármacos hipoglucemiantes como la insulina NPH (cuyo peak de acción ocurre entre las 4 y 6 horas post-administración matinal), iniciar ejercicio aeróbico vigoroso con una glicemia capilar inferior a 100 mg/dL conlleva un riesgo inminente de hipoglicemia severa por aumento de la captación muscular de glucosa. La conducta correcta y obligatoria es consumir una colación previa de 15 a 20 gramos de carbohidratos de absorción moderada/rápida antes de iniciar la carrera.',
    keyPoints: [
      'El ejercicio estimula la captación de glucosa por translocación de GLUT-4 vía AMPK independiente de la insulina.',
      'La recomendación universal es de al menos 150 minutos semanales de ejercicio aeróbico moderado repartido en ≥ 3 días.',
      'En usuarios de insulina o sulfonilureas, si la glicemia pre-ejercicio es < 100 mg/dL, se debe consumir 15-20 g de carbohidratos.',
      'El ejercicio aumenta la sensibilidad a la insulina hasta por 24-48 horas, pudiendo generar hipoglicemias nocturnas tardías.',
      'En pacientes con neuropatía diabética periférica se deben preferir actividades sin impacto (bicicleta, natación) e inspeccionar los pies.',
    ],
    questions: [
      {
        stem: 'Un paciente de 56 años con diabetes mellitus tipo 2 en tratamiento con metformina e insulina NPH matinal acude a su consulta refiriendo que desea comenzar a realizar caminatas vigorosas tres veces por semana. Antes de salir de su hogar se realiza un hemoglucotest que resulta en 85 mg/dL. ¿Cuál es la indicación médica más apropiada?',
        options: [
          { id: 'A', text: 'Suspender definitivamente la actividad física por presentar una hipoglicemia clínica grave' },
          { id: 'B', text: 'Administrar una dosis de refuerzo de insulina cristalina subcutánea antes de iniciar' },
          { id: 'C', text: 'Ingerir una colación que aporte entre 15 y 20 gramos de carbohidratos antes de comenzar el ejercicio' },
          { id: 'D', text: 'Iniciar la caminata de inmediato para aprovechar el efecto hiperglicemiante del cortisol de esfuerzo' },
          { id: 'E', text: 'Tomar 500 mL de agua pura sin electrolitos ni carbohidratos' },
        ],
        correcta: 'C',
        explicacion: 'En pacientes con diabetes en tratamiento con insulina o sulfonilureas, la contracción muscular incrementa sustancialmente la captación periférica de glucosa. Las guías internacionales de la ADA establecen que cuando la glicemia pre-ejercicio es inferior a 100 mg/dL, se debe consumir una ración previa de 15 a 20 gramos de carbohidratos de rápida a moderada absorción (ej. una fruta, jugo o galletas) para evitar el desarrollo de hipoglicemia durante o inmediatamente después del entrenamiento.',
        recTag: 'EUNACOM Julio 2019 · Reconstrucción oficial',
      },
      {
        stem: '¿Cuál de las siguientes modalidades de ejercicio físico está formalmente más recomendada para un paciente con diabetes mellitus de larga data que presenta una neuropatía periférica sensitiva confirmada por prueba de monofilamento de Semmes-Weinstein?',
        options: [
          { id: 'A', text: 'Trote continuo sobre asfalto o pavimento irregular' },
          { id: 'B', text: 'Salto en cuerda de alta intensidad' },
          { id: 'C', text: 'Natación, hidrogimnasia o ciclismo en bicicleta estática' },
          { id: 'D', text: 'Caminata descalzo por la arena de la playa' },
          { id: 'E', text: 'Carreras de velocidad con frenadas bruscas' },
        ],
        correcta: 'C',
        explicacion: 'En pacientes con pérdida de la sensibilidad protectora distal en los pies secundaria a neuropatía diabética, las actividades de alto impacto mecánico repetitivo (como trotar sobre superficies duras, saltar o caminar descalzo) aumentan exponencialmente el riesgo de rozaduras inadvertidas, flictenas, hematomas subungueales y úlceras plantares. Se deben priorizar actividades aeróbicas que no generen sobrecarga ni trauma por fricción en las plantas de los pies, tales como la natación, los ejercicios acuáticos o la bicicleta estática.',
        recTag: 'EUNACOM Diciembre 2023 · Reconstrucción oficial',
      },
    ],
  },
];

module.exports = {
  bloque1,
  flow,
};
