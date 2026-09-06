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

const bloque2 = [
  {
    id: 'diab-06',
    classId: 'diab-06',
    tier: 3,
    blockNum: 2,
    blockName: 'Farmacoterapia Oral y Manejo de DM2 en APS',
    topicLabel: '2.1',
    title: 'Tratamiento Escalonado de la DM2 y Canasta GES MINSAL',
    perfilCode: '1.04.1.008',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES N° 2): Diabetes Mellitus Tipo 2',
    reconstrucciones: 'EUNACOM Diciembre 2017 (Q#22) · EUNACOM Julio 2019 (Q#45) · EUNACOM Diciembre 2021 (Q#61) · EUNACOM Julio 2023 (Q#18)',
    frecuencia: 'Máxima · Escalamiento de metformina a biterapia y criterios de inicio de insulina',
    svg: null, algoTitle: 'Algoritmo Escalonado de Manejo Farmacológico de la DM2 en APS (Guía Clínica GES)',
    diagram: flow('Algoritmo de Tratamiento Farmacológico Escalonado en DM2', [
      { t: 'Diagnóstico Confirmado de Diabetes Mellitus Tipo 2 en APS', s: 'Paso 1: Evaluar nivel basal de HbA1c y presencia de síntomas de descompensación aguda' },
      { k: 'split', q: '¿HbA1c Inicial < 9.0% vs HbA1c ≥ 9.0% con Síntomas Catabólicos?', s: 'Define monoterapia inicial vs biterapia o inicio precoz de insulina', ll: 'HbA1c < 9.0% (asintomático/leve)', rl: 'HbA1c ≥ 9.0% o Baja de Peso Severa',
        left: { t: 'Monoterapia: Metformina 850-1000 mg/d', s: 'Titular hasta 1.700-2.550 mg/día con las comidas + Dieta y ejercicio aeróbico 150 min/sem', type: 'acc' },
        right: { t: 'Terapia Combinada o Insulina NPH Precoz', s: 'Metformina + Sulfonilurea (o iSGLT2/GLP1) · Si cetonuria o enflaquecimiento: Insulina NPH nocturna', type: 'warn' },
        ll: 'monoterapia', rl: 'alta gluco-toxicidad' },
      { t: 'Control a los 3 Meses con HbA1c', s: 'Si no alcanza meta (< 7.0%): Agregar 2° Fármaco (Glibenclamida o iDPP4/iSGLT2) · Si persiste descompensado: Insulina NPH', type: 'dec', al: 'reevaluación 3m', from: 'left' },
    ]),
    contexto: 'El tratamiento de la diabetes tipo 2 es uno de los temas con mayor presencia transversal en el EUNACOM. La guía GES de Chile establece la metformina como fármaco de primera línea universal, el escalamiento a biterapia a los 3 meses si no se alcanza la meta de HbA1c (< 7.0%), y la indicación indiscutida de insulinización temprana si el paciente debuta con HbA1c ≥ 9.0–10.0% asociada a síntomas catabólicos graves.',
    contentSections: [
      {
        subhead: '1. Enfoque Terapéutico Inicial y Pilares No Farmacológicos',
        paragraphs: [
          'El pilar basal de todo paciente con DM2 recién diagnosticada es la <strong>modificación intensiva de los estilos de vida</strong>: plan de alimentación mediterráneo o bajo en carbohidratos simples, reducción del 5–10% del peso corporal y 150 minutos semanales de actividad física aeróbica.',
          'Sin embargo, a diferencia del pasado, las guías internacionales (ADA) y las guías chilenas (MINSAL) recomiendan <strong>iniciar simultáneamente el tratamiento farmacológico con metformina desde el momento del diagnóstico</strong>, sin esperar meses de "prueba de dieta", para revertir precozmente la glucotoxicidad sobre las células beta pancreáticas.',
        ],
      },
      {
        subhead: '2. Monoterapia con Metformina: Titulación y Dosis Óptima',
        paragraphs: [
          'La <strong>Metformina</strong> es la primera línea farmacológica obligatoria por su bajo costo, neutralidad en el peso, nulo riesgo de hipoglicemia en monoterapia y reducción comprobada de eventos cardiovasculares (estudio UKPDS).',
          '• <strong>Inicio y Titulación:</strong> Iniciar con 500 u 850 mg vía oral una vez al día con la comida principal (cena o almuerzo). Incrementar gradualmente cada 1 a 2 semanas hasta alcanzar la <strong>dosis terapéutica óptima de 1.700 a 2.550 mg/día</strong> (habitualmente 850 mg cada 12 horas o cada 8 horas).<br>' +
          '• <strong>Efectos Adversos:</strong> Los más frecuentes son digestivos (diarrea, náuseas, meteorismo, sabor metálico) en el 20–30%, los cuales son dosis-dependientes y se minimizan titulando lentamente y consumiendo el comprimido siempre con alimentos. A largo plazo puede inducir <strong>déficit de vitamina B12</strong> por malabsorción ileal.',
        ],
      },
      {
        subhead: '3. Escalamiento a Biterapia y Selección del Segundo Agente',
        paragraphs: [
          'El control con HbA1c se realiza estrictamente a los <strong>3 meses</strong> de iniciado o ajustado el tratamiento:<br>' +
          '• Si el paciente <strong>NO alcanza la meta individualizada (HbA1c &gt; 7.0%)</strong> con dosis plena de metformina, se debe <strong>escalar de inmediato a Biterapia</strong>.<br>' +
          '• <strong>En la Red Pública / Canasta GES de APS:</strong> El segundo fármaco disponible es una sulfonilurea como la <strong>Glibenclamida (2.5 a 5 mg/día pre-desayuno)</strong>, reservada para pacientes sin insuficiencia renal grave ni fragilidad extrema.<br>' +
          '• <strong>En Guías Internacionales (ADA / EASD):</strong> Si existe <strong>Insuficiencia Cardíaca o Enfermedad Renal Crónica</strong>, el segundo fármaco de elección es un <strong>inhibidor de SGLT2 (Empagliflozina o Dapagliflozina)</strong>. Si predomina la <strong>Enfermedad Cardiovascular Aterosclerótica (IAM previo, ACV)</strong>, se prefiere un <strong>Agonista GLP-1 (Liraglutida o Semaglutida)</strong>.',
        ],
      },
      {
        subhead: '4. Indicaciones Claras de Insulinización Temprana en DM2',
        paragraphs: [
          'No se debe demorar el inicio de insulina por inercia médica. Las indicaciones indiscutidas de <strong>iniciar insulina NPH nocturna (o esquema intensificado) de inmediato</strong> son:<br>' +
          '1. <strong>Debut con HbA1c ≥ 9.0–10.0% O Glicemia de ayuno &gt; 250–300 mg/dL</strong>.<br>' +
          '2. Presencia de <strong>síntomas catabólicos severos: pérdida de peso involuntaria rápida, astenia extrema y deshidratación</strong>.<br>' +
          '3. Presencia de <strong>cetonuria o sospecha de descompensación cetoacidótica</strong>.<br>' +
          '4. Falla a la biterapia oral a dosis máximas tras 3 a 6 meses de seguimiento.<br>' +
          '5. Enfermedad intercurrente aguda grave, cirugía mayor o contraindicación de fármacos orales.',
        ],
      },
      {
        subhead: '5. Garantías Explícitas en Salud (GES N° 2): Cobertura Legal en Chile',
        paragraphs: [
          'La patología GES N° 2 cubre a todo beneficiario Fonasa o Isapre de 15 años y más con diagnóstico de DM2:<br>' +
          '• <strong>Garantía de Acceso:</strong> Con sospecha clínica, confirmación diagnóstica en un plazo máximo de <strong>45 días</strong> desde la primera consulta.<br>' +
          '• <strong>Garantía de Oportunidad Terapéutica:</strong> Inicio del tratamiento farmacológico dentro de las <strong>24 horas</strong> desde la confirmación diagnóstica.<br>' +
          '• <strong>Canasta Farmacológica:</strong> Metformina, glibenclamida, insulina NPH, insulina cristalina, jeringas, lancetas y glucómetro en insulinorrequirientes.',
        ],
      },
    ],
    table: {
      title: 'Esquema de Escalamiento Terapéutico en Diabetes Tipo 2 (Guías MINSAL)',
      headers: ['Nivel de HbA1c', 'Conducta Inicial Recomendada', 'Fármaco de Primera Línea', 'Alternativa / Escalamiento'],
      rows: [
        ['HbA1c < 8.0%', 'Monoterapia oral + Estilo de vida', 'Metformina 850 mg c/12h con comidas', 'Reevaluar a los 3 meses; si > 7% sumar 2° fármaco'],
        ['HbA1c 8.0% a 9.0%', 'Monoterapia máxima o Biterapia precoz', 'Metformina 1.700 a 2.550 mg/día', 'Asociar Glibenclamida 5 mg/d o iDPP4 / iSGLT2'],
        ['HbA1c ≥ 9.0% asintomático', 'Biterapia oral directa obligatoria', 'Metformina + Segundo fármaco oral', 'Monitoreo en 30 a 60 días para evaluar respuesta'],
        ['HbA1c ≥ 9.0% + Baja de peso / Síntomas', 'Insulinoterapia inmediata obligatoria', 'Insulina NPH nocturna (0.2-0.3 UI/kg) + Metformina', 'Ajuste semanal de insulina según glicemia matinal'],
      ],
    },
    severityTable: {
      title: 'Criterios de Selección del Segundo Fármaco Oral tras Falla de Metformina',
      headers: ['Perfil del Paciente', 'Fármaco de Elección (ADA / KDIGO)', 'Opción Canasta GES APS', 'Precaución Mayor'],
      rows: [
        ['Riesgo cardiovascular estándar (sin falla orgánica)', 'iDPP-4 (Sitagliptina/Linagliptina) o Sulfonilurea', 'Glibenclamida 2.5 a 5 mg/día', 'Riesgo de hipoglicemia con glibenclamida'],
        ['Insuficiencia Cardíaca (FEVI reducida o preservada)', 'iSGLT-2 (Empagliflozina o Dapagliflozina)', 'Insulina NPH (si no hay iSGLT2)', 'Evitar tiazolidinedionas (retención hídrica)'],
        ['Enfermedad Renal Crónica (RAC > 30 o VFG 20-60)', 'iSGLT-2 (Dapagliflozina / Empagliflozina)', 'Insulina NPH o Linagliptina (sin ajuste renal)', 'Ajustar dosis de metformina según VFG'],
        ['Enfermedad Cardiovascular Aterosclerótica (IAM/ACV)', 'Agonista GLP-1 (Liraglutida / Semaglutida) o iSGLT2', 'Glibenclamida o Insulina NPH', 'Titular dosis por náuseas en GLP-1'],
      ],
    },
    treatmentTable: {
      title: 'Protocolo Farmacológico Escalonado de la Diabetes Mellitus Tipo 2',
      headers: ['Paso Terapéutico', 'Fármaco y Posología Inicial', 'Titulación Máxima', 'Criterio de Falla y Escalamiento'],
      rows: [
        ['Paso 1: Monoterapia', 'Metformina 500 u 850 mg/día con almuerzo o cena', '850 mg cada 8 horas (2.550 mg/día) con alimentos', 'HbA1c > 7.0% a los 3 meses a dosis plena'],
        ['Paso 2: Biterapia Oral', 'Metformina + Glibenclamida 2.5-5 mg/día predesayuno', 'Metformina 2.550 mg + Glibenclamida 10 mg/día', 'HbA1c > 7.0% a los 3 meses de biterapia'],
        ['Paso 3: Insulinización Basal', 'Agregar Insulina NPH nocturna (0.2 UI/kg a las 22:00)', 'Aumentar 2 UI cada 3-4 días hasta ayuno 80-130', 'HbA1c > 7.0% con NPH > 0.5 UI/kg o hipoglicemias'],
        ['Paso 4: Esquema Intensificado', 'Insulina NPH 2 veces/día + Cristalina preprandial', 'Dosis total 0.5 a 1.0 UI/kg/día repartida', 'Manejo por equipo de diabetología en nivel secundario'],
      ],
    },
    vignette: 'Hombre de 57 años con diagnóstico de DM2 hace 4 meses. Inició cambios de estilo de vida y metformina 850 mg cada 12 horas. Acude a control con HbA1c de 8.3%. El paciente no presenta baja de peso, poliuria ni antecedentes de enfermedad cardiovascular. Creatinina 0.9 mg/dL. ¿Cuál es la conducta médica indicada según la guía GES?',
    explicacion: 'El paciente presenta una falla al tratamiento en monoterapia con metformina tras más de 3 meses de tratamiento a dosis terapéuticas, evidenciada por una HbA1c de 8.3% (por sobre la meta universal de 7.0%). Al encontrarse asintomático, sin catabolismo ni cetonuria, no cumple criterios de insulinización de entrada. La conducta recomendada por las guías del MINSAL es mantener la metformina y asociar un segundo fármaco oral (en la canasta de APS corresponde asociar una sulfonilurea como glibenclamida 2.5 a 5 mg/día, o un iDPP4/iSGLT2 según disponibilidad).',
    keyPoints: [
      'La metformina es el fármaco de primera línea universal en DM2 desde el momento del diagnóstico.',
      'La dosis terapéutica óptima de metformina es de 1.700 a 2.550 mg/día (habitualmente 850 mg c/12h o c/8h).',
      'Si a los 3 meses de monoterapia la HbA1c es > 7.0%, se debe escalar de inmediato a biterapia oral.',
      'En APS la biterapia se realiza asociando glibenclamida (o iDPP4/iSGLT2 si están disponibles).',
      'Criterios de inicio inmediato de insulina: HbA1c ≥ 9.0-10.0%, baja de peso rápida, cetonuria o descompensación aguda.',
      'La garantía GES N° 2 exige iniciar tratamiento farmacológico dentro de las 24 horas desde la confirmación diagnóstica.',
      'En pacientes con insuficiencia cardíaca o nefropatía, los iSGLT2 son el segundo fármaco de elección indiscutido.',
      'En enfermedad aterosclerótica establecida (IAM o ACV previo), los agonistas GLP-1 reducen la mortalidad cardiovascular.',
    ],
    questions: [
      {
        stem: 'Un paciente de 55 años, con diabetes mellitus tipo 2 diagnosticada hace 6 meses, se encuentra en tratamiento con metformina 850 mg cada 12 horas con adecuada adherencia. Acude a control trayendo una hemoglobina glicosilada (HbA1c) de 8.4%. Se encuentra asintomático, con examen físico normal y función renal conservada (creatinina 0.8 mg/dL). ¿Cuál es la conducta farmacológica más adecuada a seguir?',
        options: [
          { id: 'A', text: 'Suspender metformina e iniciar monoterapia con insulina NPH nocturna' },
          { id: 'B', text: 'Mantener metformina y asociar un segundo fármaco oral como glibenclamida' },
          { id: 'C', text: 'Triplicar la dosis de metformina a 1.700 mg cada 8 horas antes de agregar otro fármaco' },
          { id: 'D', text: 'Indicar solo refuerzo de la dieta y citar a nuevo control en un año' },
          { id: 'E', text: 'Iniciar infusión endovenosa continua de insulina rápida' },
        ],
        correcta: 'B',
        explicacion: 'El paciente presenta falla terapéutica a la monoterapia con metformina en dosis estándar (1.700 mg/día), persistiendo con una HbA1c de 8.4% a los 6 meses (meta < 7.0%). Según las guías clínicas del MINSAL para DM2 (GES N° 2), ante el fracaso de la monoterapia en un paciente asintomático sin descompensación catabólica aguda, la conducta indicada es mantener la metformina y escalar a biterapia oral asociando un segundo agente (como una sulfonilurea, ej. glibenclamida 2.5 a 5 mg/día, o un inhibidor de DPP-4).',
        recTag: 'EUNACOM Diciembre 2017 · Reconstrucción oficial',
      },
      {
        stem: 'Un paciente de 48 años consulta por astenia intensa, polidipsia y pérdida involuntaria de 7 kg de peso en el último mes. Se constata glicemia de ayuno de 320 mg/dL y una HbA1c de 11.2%. El examen de orina revela glucosuria masiva con trazas de cetonas. ¿Cuál es el tratamiento farmacológico inicial de elección?',
        options: [
          { id: 'A', text: 'Metformina 500 mg una vez al día con escalamiento lento' },
          { id: 'B', text: 'Glibenclamida 5 mg cada 12 horas en monoterapia' },
          { id: 'C', text: 'Insulinoterapia de reemplazo (ej. insulina NPH nocturna) asociada a metformina' },
          { id: 'D', text: 'Dieta hipocalórica exclusiva durante cuatro semanas para reducir la gluco-toxicidad' },
          { id: 'E', text: 'Inhibidor de SGLT2 en monoterapia oral' },
        ],
        correcta: 'C',
        explicacion: 'El paciente debuta con una diabetes mellitus severamente descompensada caracterizada por marcada glucotoxicidad (HbA1c > 10% y glicemia > 300 mg/dL), catabolismo acelerado con baja de peso significativa y cetonuria incipiente. En este escenario, las células beta pancreáticas se encuentran aturdidas e incapaces de responder a hipoglucemiantes orales aislados. La indicación indiscutida es iniciar de inmediato insulinoterapia (insulina NPH basal nocturna ± insulina rápida), pudiendo asociarse metformina para mitigar la resistencia a la insulina.',
        recTag: 'EUNACOM Julio 2019 · Reconstrucción oficial',
      },
      {
        stem: '¿Cuál es el plazo legal máximo garantizado por las Garantías Explícitas en Salud (GES N° 2) para el inicio del tratamiento farmacológico en un paciente con diagnóstico confirmado de Diabetes Mellitus Tipo 2 en Chile?',
        options: [
          { id: 'A', text: 'Dentro de las primeras 24 horas desde la confirmación diagnóstica' },
          { id: 'B', text: 'A los 15 días tras la evaluación por especialista' },
          { id: 'C', text: 'A los 30 días posteriores al ingreso al programa cardiovascular' },
          { id: 'D', text: 'A los 45 días contados desde la sospecha clínica' },
          { id: 'E', text: 'A los 90 días con entrega de glucómetro' },
        ],
        correcta: 'A',
        explicacion: 'La Garantía Explícita en Salud (GES N° 2) para Diabetes Mellitus Tipo 2 establece plazos legales perentorios: la confirmación diagnóstica debe realizarse dentro de 45 días desde la sospecha clínica en APS, pero una vez confirmado el diagnóstico, el inicio del tratamiento médico (farmacológico y nutricional) debe garantizarse dentro de las 24 HORAS siguientes a dicha confirmación.',
        recTag: 'EUNACOM Diciembre 2021 · Reconstrucción oficial',
      },
      {
        stem: 'Un paciente de 62 años con diabetes tipo 2 de 8 años de evolución, con antecedente de infarto agudo de miocardio hace 2 años y fracción de eyección ventricular izquierda del 35% (insuficiencia cardíaca con FEVI reducida), mantiene HbA1c de 8.1% con metformina 1.000 mg cada 12 horas. Su VFG es de 55 mL/min/1.73m². Según las recomendaciones internacionales y guías de práctica clínica, ¿cuál es el segundo fármaco que ha demostrado reducir las hospitalizaciones por insuficiencia cardíaca y muerte cardiovascular en este perfil de paciente?',
        options: [
          { id: 'A', text: 'Glibenclamida' },
          { id: 'B', text: 'Pioglitazona' },
          { id: 'C', text: 'Inhibidor del cotransportador sodio-glucosa 2 (iSGLT2, ej. dapagliflozina o empagliflozina)' },
          { id: 'D', text: 'Sulfato de glucosamina' },
          { id: 'E', text: 'Gliclazida' },
        ],
        correcta: 'C',
        explicacion: 'Los grandes ensayos clínicos contemporáneos (DAPA-HF, EMPEROR-Reduced) y las guías de la ADA y la Sociedad Europea de Cardiología han establecido que en pacientes con DM2 y comorbilidad de Insuficiencia Cardíaca con FEVI reducida, los inhibidores de SGLT2 (como dapagliflozina o empagliflozina) son los fármacos de elección prioritaria independientemente del nivel de HbA1c, ya que reducen drásticamente las hospitalizaciones por falla cardíaca y la mortalidad cardiovascular. La pioglitazona (B) está contraindicada por retener líquido.',
        recTag: 'EUNACOM Julio 2023 · Reconstrucción oficial',
      },
    ],
  },
  {
    id: 'diab-07',
    classId: 'diab-07',
    tier: 2,
    blockNum: 2,
    blockName: 'Farmacoterapia Oral y Manejo de DM2 en APS',
    topicLabel: '2.2',
    title: 'Hipoglucemiantes Orales Clásicos: Metformina y Sulfonilureas',
    perfilCode: '1.04.1.007',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES): Diabetes Mellitus Tipo 2',
    reconstrucciones: 'EUNACOM Julio 2018 (Q#50) · EUNACOM Diciembre 2022 (Q#29)',
    frecuencia: 'Máxima · Ajuste de metformina en falla renal y riesgo letal de hipoglicemia por glibenclamida',
    svg: null, algoTitle: 'Algoritmo de Selección y Seguridad Renal para Metformina y Sulfonilureas',
    diagram: flow('Algoritmo de Seguridad Renal: Metformina vs Sulfonilureas', [
      { t: 'Evaluación de Función Renal (VFG por CKD-EPI) y Edad del Paciente', s: 'Fundamental antes de prescribir o mantener metformina o glibenclamida en APS' },
      { k: 'split', q: '¿Nivel de Velocidad de Filtración Glomerular Estimada (VFG)?', s: 'Define límites absolutos de seguridad para evitar acidosis láctica e hipoglicemias', ll: 'VFG ≥ 45 mL/min/1.73m²', rl: 'VFG < 30 mL/min o Adulto Mayor Frágil',
        left: { t: 'Metformina es Segura a Dosis Plena', s: 'Si VFG 30-44 mL/min: Reducir dosis máxima a 1.000 mg/día · Monitoreo cada 3 meses', type: 'acc' },
        right: { t: 'Metformina y Glibenclamida CONTRAINDICADAS', s: 'VFG < 30: Riesgo letal de Acidosis Láctica por metformina · Glibenclamida prohibida por hipoglicemia refractaria', type: 'warn' },
        ll: 'VFG ≥ 45 segura', rl: 'VFG < 30 contraindicada' },
      { t: 'Tratamiento de Elección en Falla Renal Grave (VFG < 30)', s: 'Insulinoterapia subcutánea titulada O Inhibidores DPP-4 sin ajuste renal (Linagliptina)', type: 'dec', al: 'seguridad renal', from: 'right' },
    ]),
    contexto: 'La metformina y la glibenclamida son los dos hipoglucemiantes orales más prescritos históricamente en Chile. El EUNACOM pone trampas constantes sobre sus contraindicaciones formales: la metformina debe suspenderse con VFG < 30 mL/min por riesgo de acidosis láctica mortal, y la glibenclamida debe evitarse categóricamente en adultos mayores por hipoglicemias prolongadas de hasta 24 a 48 horas debido a la acumulación de metabolitos activos.',
    contentSections: [
      {
        subhead: '1. Metformina (Biguanida): Farmacología y Ajuste Renal Estricto',
        paragraphs: [
          '• <strong>Mecanismo de acción:</strong> Activa la enzima intracelular <strong>AMPK (proteína quinasa activada por AMP) hepática</strong>, lo que inhibe la gluconeogénesis y la glucogenólisis, disminuyendo drásticamente la producción hepática de glucosa. En menor medida incrementa la captación muscular periférica de glucosa.',
          '• <strong>Ajuste estricto según función renal (VFG):</strong><br>' +
          '- <strong>VFG ≥ 45 mL/min/1.73m²:</strong> Uso seguro a dosis plena (hasta 2.550 mg/día).<br>' +
          '- <strong>VFG entre 30 y 44 mL/min/1.73m²:</strong> <strong>Reducir la dosis a un máximo de 1.000 mg/día</strong> (500 mg cada 12 horas) y controlar función renal cada 3 meses.<br>' +
          '- <strong>VFG &lt; 30 mL/min/1.73m²:</strong> <strong>CONTRAINDICACIÓN ABSOLUTA</strong>. Se debe suspender de inmediato por riesgo de <strong>acidosis láctica grave</strong> (mortalidad del 40–50%).<br>' +
          '• Suspender transitoriamente 48 horas antes de estudios con medio de contraste yodado endovenoso o cirugías mayores.',
        ],
      },
      {
        subhead: '2. Glibenclamida (Sulfonilurea): Mecanismo y la Gran Trampa de la Hipoglicemia',
        paragraphs: [
          '• <strong>Mecanismo de acción:</strong> Fármaco <strong>secretagogo de insulina</strong>. Se une al receptor SUR-1 y bloquea los canales de potasio dependientes de ATP (K-ATP) de las células beta, despolarizando la membrana celular y estimulando la liberación masiva de insulina preformada en forma <strong>independiente de la concentración de glucosa</strong>.',
          '• <strong>Efectos Adversos y Toxicidad:</strong><br>' +
          '1. <strong>Hipoglicemias Severas y Prolongadas:</strong> Es el efecto adverso más temido. La glibenclamida tiene metabolitos hepáticos activos que se eliminan por vía renal; en adultos mayores o con falla renal, la hipoglicemia puede persistir por <strong>24 a 48 horas continuas</strong> a pesar de la administración de glucosa.<br>' +
          '2. <strong>Aumento de peso corporal</strong> (promedio 2 a 4 kg) por hiperinsulinemia persistente.<br>' +
          '3. <strong>Agotamiento de la reserva de célula beta</strong> con el paso de los años.',
        ],
      },
      {
        subhead: '3. Manejo de la Intoxicación / Hipoglicemia por Sulfonilureas',
        paragraphs: [
          '<strong>Regla de oro de urgencias EUNACOM:</strong> Ante un paciente en tratamiento con glibenclamida que presenta una hipoglicemia severa (glicemia &lt; 50 mg/dL o compromiso de conciencia), <strong>NUNCA debe ser dado de alta de urgencias tras administrar un bolo de glucosa</strong>.',
          'El paciente <strong>DEBE ser hospitalizado en observación bajo infusión continua de solución glucosada al 10% durante al menos 24 horas</strong>, ya que el fármaco continúa circulando y gatillará una nueva hipoglicemia profunda tan pronto como cese el aporte agudo de azúcar.',
        ],
      },
    ],
    table: {
      title: 'Comparación Farmacológica: Metformina vs Glibenclamida',
      headers: ['Parámetro', 'Metformina (Biguanida)', 'Glibenclamida (Sulfonilurea)'],
      rows: [
        ['Mecanismo de acción', 'Inhibe gluconeogénesis hepática (vía AMPK)', 'Secretagogo: cierra canales K-ATP en célula beta'],
        ['Riesgo de hipoglicemia', 'NULO en monoterapia', 'ALTO RIESGO (prolongada y grave)'],
        ['Efecto sobre el peso', 'Neutro o modesta baja de peso (1-2 kg)', 'Aumento de peso (2 a 4 kg)'],
        ['Ajuste renal (VFG 30-44)', 'Reducir dosis a máximo 1.000 mg/día', 'Usar con precaución o evitar'],
        ['Ajuste renal (VFG < 30)', 'CONTRAINDICADA (Acidosis láctica)', 'CONTRAINDICADA (Hipoglicemia refractaria)'],
        ['Uso en Adulto Mayor', 'De elección si la función renal es segura', 'DESACONSEJADA / EVITAR (Criterios Beers)'],
        ['Efecto secundario cardinal', 'Gastrointestinal (diarrea, náuseas, meteorismo)', 'Hipoglicemia sintomática grave'],
      ],
    },
    vignette: 'Mujer de 76 años con diabetes mellitus tipo 2 de 15 años de evolución, en tratamiento con glibenclamida 5 mg cada 12 horas y metformina 850 mg/día. Es traída al servicio de urgencias en ambulancia por compromiso cuantitativo de conciencia y sudoración profusa. Hemoglucotest al ingreso: 36 mg/dL. Se administran dos ampollas de suero glucosado al 30% endovenoso, recuperando la conciencia y alcanzando glicemia de 110 mg/dL.',
    explicacion: 'La paciente presentó una hipoglicemia severa inducida por glibenclamida. A diferencia de las hipoglicemias por ayuno o exceso de ejercicio, las sulfonilureas poseen metabolitos activos de eliminación prolongada que se acumulan en adultos mayores. Dar de alta a la paciente tras normalizar la glicemia con un bolo inicial es un error fatal, ya que recaerá en coma hipoglicémico en las próximas horas. La conducta obligatoria es hospitalizar en observación con infusión continua de glucosa al 10% por 24 horas y suspender la glibenclamida de forma definitiva.',
    keyPoints: [
      'La metformina reduce la producción hepática de glucosa vía activación de la AMPK; no causa hipoglicemia en monoterapia.',
      'La metformina está formalmente contraindicada si la VFG es < 30 mL/min/1.73m² por riesgo de acidosis láctica.',
      'Si la VFG está entre 30 y 44 mL/min, la dosis máxima de metformina debe reducirse a 1.000 mg/día.',
      'La glibenclamida es un secretagogo que estimula la liberación de insulina independiente de la glicemia plasmática.',
      'La glibenclamida está contraindicada en adultos mayores y nefrópatas por riesgo de hipoglicemias letales prolongadas.',
      'Toda hipoglicemia severa por glibenclamida exige hospitalización en observación con suero glucosado continuo por 24 horas.',
    ],
    questions: [
      {
        stem: 'Un paciente de 72 años con diabetes mellitus tipo 2 e insuficiencia renal crónica consulta para control. En sus exámenes de laboratorio presenta una creatinina de 2.2 mg/dL y una velocidad de filtración glomerular estimada (VFG) de 24 mL/min/1.73m². Actualmente recibe metformina 850 mg cada 12 horas. ¿Cuál es la conducta farmacológica que se debe adoptar de inmediato?',
        options: [
          { id: 'A', text: 'Mantener la metformina pero indicar consumo abundante de líquidos' },
          { id: 'B', text: 'Suspender de inmediato la metformina debido al riesgo de acidosis láctica' },
          { id: 'C', text: 'Reducir la dosis de metformina a 850 mg al día y controlar en seis meses' },
          { id: 'D', text: 'Cambiar metformina por glibenclamida en dosis máxima de 10 mg al día' },
          { id: 'E', text: 'Asociar bicarbonato oral y mantener la misma dosis de metformina' },
        ],
        correcta: 'B',
        explicacion: 'La metformina se elimina íntegramente por filtración glomerular y secreción tubular renal. Cuando la VFG desciende por debajo de 30 mL/min/1.73m², el fármaco se acumula exponencialmente en los tejidos, inhibiendo la fosforilación oxidativa mitocondrial e induciendo la temida Acidosis Láctica asociada a Metformina (MALA), cuadro de altísima letalidad. Por tanto, una VFG < 30 constituye una contraindicación absoluta e inmediata de metformina.',
        recTag: 'EUNACOM Julio 2018 · Reconstrucción oficial',
      },
      {
        stem: 'Un paciente de 78 años en tratamiento con glibenclamida 5 mg cada 12 horas ingresa al servicio de urgencias soporoso, diaforético y con glicemia capilar de 32 mg/dL. Se le administra un bolo endovenoso de 40 mL de solución glucosada al 30%, recuperando el estado de alerta con glicemia de control en 125 mg/dL a los 15 minutos. El paciente se siente bien y solicita el alta médica. ¿Cuál es la conducta médica correcta?',
        options: [
          { id: 'A', text: 'Otorgar el alta inmediata recomendándole una colación rica en hidratos de carbono' },
          { id: 'B', text: 'Hospitalizar al paciente para observación y mantención de infusión continua de glucosa durante al menos 24 horas' },
          { id: 'C', text: 'Dar de alta con indicación de reducir la dosis de glibenclamida a la mitad al día siguiente' },
          { id: 'D', text: 'Administrar 1 mg de glucagón intramuscular y enviar a domicilio en reposo' },
          { id: 'E', text: 'Administrar 100 mg de hidrocortisona endovenosa y dar el alta en dos horas' },
        ],
        correcta: 'B',
        explicacion: 'Las hipoglicemias secundarias a sulfonilureas de larga vida media como la glibenclamida son recurrentes y prolongadas debido a la persistencia del fármaco y sus metabolitos activos en la circulación, especialmente en adultos mayores con menor clearence renal. Aunque el paciente se recupere completamente con el bolo inicial de glucosa, el estímulo insulínico continúa y volverá a presentar hipoglicemia severa horas más tarde. Es imperativo hospitalizarlo con aporte continuo de suero glucosado al 10% por 24 horas.',
        recTag: 'EUNACOM Diciembre 2022 · Reconstrucción oficial',
      },
    ],
  },
  {
    id: 'diab-08',
    classId: 'diab-08',
    tier: 2,
    blockNum: 2,
    blockName: 'Farmacoterapia Oral y Manejo de DM2 en APS',
    topicLabel: '2.3',
    title: 'Nuevas Terapias: Inhibidores SGLT2, Agonistas GLP-1 e Inhibidores DPP-4',
    perfilCode: '1.04.1.007',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'No GES (disponibilidad selectiva y guías internacionales)',
    reconstrucciones: 'EUNACOM Diciembre 2020 (Q#16) · EUNACOM Julio 2023 (Q#58)',
    frecuencia: 'Alta · Protección cardiorrenal de los iSGLT2 y agonistas GLP-1',
    svg: null, algoTitle: 'Algoritmo de Selección de Nuevos Antidiabéticos según Órgano Diana',
    diagram: flow('Algoritmo de Nuevas Terapias Antidiabéticas (iSGLT2 / GLP-1 / iDPP4)', [
      { t: 'Paciente con DM2 en Metformina con Metas no Alcanzadas o Alto Riesgo', s: 'Evaluar presencia de Enfermedad Renal Crónica, Insuficiencia Cardíaca o Obesidad Severa' },
      { k: 'split', q: '¿Cuál es la Comorbilidad Primaria que Domina el Cuadro?', s: 'Define la elección prioritaria del fármaco con beneficio en sobrevida demostrado', ll: 'Insuficiencia Cardíaca (IC) o ERC Proteinúrica', rl: 'Aterosclerosis Establecida (IAM/ACV) u Obesidad Severa',
        left: { t: 'Inhibidores de SGLT2 (Empa / Dapa / Cana)', s: 'Glucosuria farmacológica · Reducen hospitalización por IC en 30% y frenan caída de VFG · Sin hipoglicemia', type: 'acc' },
        right: { t: 'Agonistas del Receptor GLP-1 (Lira / Sema)', s: 'Efecto incretina · Enlentecen vaciamiento gástrico · Baja masiva de peso · Protección contra ACV e IAM', type: 'warn' },
        ll: 'falla cardíaca o renal', rl: 'aterosclerosis u obesidad' },
      { t: 'Inhibidores de DPP-4 (Sitagliptina / Linagliptina)', s: 'Fármacos muy seguros y neutros en peso · Ideales en ancianos con VFG baja (Linagliptina no requiere ajuste)', type: 'dec', al: 'seguridad global', from: 'left' },
    ]),
    contexto: 'Las nuevas clases farmacológicas han revolucionado la diabetología moderna al demostrar beneficios directos en mortalidad más allá del descenso de la HbA1c. El EUNACOM evalúa: los inhibidores SGLT2 como fármacos de elección en insuficiencia cardíaca y nefropatía (con riesgo de micosis genitales y CAD euglicémica), los agonistas GLP-1 en obesidad y enfermedad coronaria aterosclerótica, y los inhibidores DPP-4 como alternativa segura sin hipoglicemias en adultos mayores.',
    contentSections: [
      {
        subhead: '1. Inhibidores de SGLT2 (Gliflozinas): Protección Cardiorrenal y Glucosuria',
        paragraphs: [
          '• <strong>Fármacos:</strong> Empagliflozina, Dapagliflozina, Canagliflozina.<br>' +
          '• <strong>Mecanismo:</strong> Inhiben el cotransportador sodio-glucosa tipo 2 en el túbulo contorneado proximal, induciendo <strong>glucosuria y natriuresis osmótica</strong> (pérdida de 60 a 80 g de glucosa al día). Provoca descenso de HbA1c (0.6–0.8%), baja moderada de peso (2–3 kg) y descenso tensional de 4–6 mmHg sin provocar hipoglicemias.<br>' +
          '• <strong>Beneficios mayores:</strong> <strong>Reducción drástica (&gt; 30%) de hospitalizaciones por insuficiencia cardíaca</strong> (tanto en FEVI reducida como preservada) y <strong>freno categórico en la caída de la VFG en enfermedad renal crónica con albuminuria</strong>.<br>' +
          '• <strong>Efectos adversos y riesgos de examen:</strong> 1) <strong>Infecciones micóticas genitales (candidiasis vulvovaginal y balanitis)</strong> por exceso de glucosa urinaria (el efecto secundario más frecuente); 2) Depleción de volumen e hipotensión ortostática en ancianos; y 3) <strong>Cetoacidosis Diabética Euglicémica</strong> (CAD con glicemias &lt; 200–250 mg/dL), desencadenada por cirugías o ayuno prolongado.',
        ],
      },
      {
        subhead: '2. Agonistas del Receptor de GLP-1 (Incretino-Miméticos): Peso y Aterosclerosis',
        paragraphs: [
          '• <strong>Fármacos:</strong> Liraglutida (subcutánea diaria), Semaglutida (subcutánea semanal u oral diaria), Dulaglutida.<br>' +
          '• <strong>Mecanismo:</strong> Mimetizan la hormona incretina GLP-1 resistente a la enzima DPP-4: estimulan la secreción de insulina glucosa-dependiente, suprimen la secreción de glucagón, <strong>enlentecen el vaciamiento gástrico y actúan en el hipotálamo generando saciedad precoz</strong>.<br>' +
          '• <strong>Beneficios:</strong> Reducción potente de HbA1c (1.0–1.8%), <strong>marcada pérdida de peso (5 a 15% del peso corporal)</strong> y reducción de infarto agudo al miocardio, ACV y muerte cardiovascular (estudios LEADER, SUSTAIN-6).<br>' +
          '• <strong>Efectos adversos:</strong> Náuseas, vómitos y diarrea transitoria al inicio (requiere titulación lenta). Contraindicados en antecedentes personales o familiares de carcinoma medular de tiroides o NEM 2.',
        ],
      },
      {
        subhead: '3. Inhibidores de DPP-4 (Gliptinas): Seguridad y Neutralidad',
        paragraphs: [
          '• <strong>Fármacos:</strong> Sitagliptina, Vildagliptina, Linagliptina.<br>' +
          '• <strong>Mecanismo:</strong> Inhiben la enzima dipeptidil peptidasa-4, prolongando la vida media del GLP-1 endógeno. Tienen potencia hipoglucemiante moderada (descenso HbA1c 0.5–0.7%).<br>' +
          '• <strong>Ventajas clínicas clave:</strong> <strong>Excelente perfil de seguridad, neutralidad en el peso y nulo riesgo de hipoglicemia</strong>. Son fármacos muy cómodos en el adulto mayor.<br>' +
          '• <strong>Perla de examen:</strong> <strong>Linagliptina es la única gliptina de eliminación predominantemente biliar/fecal</strong>, por lo que <strong>NO requiere ajuste de dosis en ningún grado de insuficiencia renal</strong>, siendo de elección en hemodiálisis.',
        ],
      },
    ],
    table: {
      title: 'Cuadro Comparativo: iSGLT2 vs Agonistas GLP-1 vs iDPP-4',
      headers: ['Familia', 'Mecanismo Primario', 'Impacto en Peso', 'Beneficio Órgano Blanco', 'Efecto Adverso Sello'],
      rows: [
        ['iSGLT2 (Gliflozinas)', 'Glucosuria tubular proximal', 'Baja 2 a 3 kg', 'Insuficiencia cardíaca y Nefroprotección', 'Micosis genitales y CAD euglicémica'],
        ['GLP-1 RA (Incretinas)', 'Receptor GLP-1 (saciedad/incretina)', 'Baja 5 a 15 kg', 'Enfermedad coronaria aterosclerótica y ACV', 'Náuseas y vómitos al titular'],
        ['iDPP-4 (Gliptinas)', 'Inhibe degradación de GLP-1', 'Neutro', 'Seguridad global; sin hipoglicemias', 'Raro: pancreatitis aguda'],
      ],
    },
    vignette: 'Hombre de 64 años, diabético en tratamiento con metformina 850 mg c/12h e insuficiencia cardíaca con fracción de eyección de 32%, consulta por HbA1c de 8.2%. Se encuentra asintomático desde el punto de vista glucémico, pero con disnea de esfuerzo CF II. Su VFG es de 62 mL/min. Se decide asociar un segundo fármaco.',
    explicacion: 'En un paciente con diabetes tipo 2 y diagnóstico establecido de Insuficiencia Cardíaca con fracción de eyección reducida, la indicación de máxima categoría de evidencia científica internacional (Clase I, Nivel A) es la asociación de un inhibidor de SGLT2 (como empagliflozina o dapagliflozina). Estos fármacos reducen las presiones de llenado ventricular, disminuyen el riesgo de hospitalización por descompensación cardíaca en más del 30% y frenan la progresión del deterioro renal, además de optimizar la HbA1c sin inducir hipoglicemias.',
    keyPoints: [
      'Los inhibidores SGLT2 bloquean la reabsorción tubular proximal de glucosa induciendo glucosuria protectora.',
      'Los iSGLT2 reducen hospitalizaciones por insuficiencia cardíaca y frenan la progresión de la enfermedad renal crónica.',
      'El efecto adverso más común de los iSGLT2 son las infecciones micóticas genitales (candidiasis vulvovaginal y balanitis).',
      'Riesgo grave de iSGLT2: Cetoacidosis Diabética Euglicémica ante situaciones de estrés quirúrgico o ayuno prolongado.',
      'Los agonistas de GLP-1 inducen marcada saciedad y baja de peso, reduciendo eventos ateroscleróticos mayores (IAM, ACV).',
      'La linagliptina (iDPP-4) tiene eliminación biliar y NO requiere ajuste de dosis en falla renal avanzada.',
    ],
    questions: [
      {
        stem: 'Un paciente de 59 años con diabetes mellitus tipo 2 y antecedentes de infarto miocárdico hace 1 año presenta una HbA1c de 8.0% a pesar de recibir metformina 1.000 mg cada 12 horas. Se decide agregar dapagliflozina 10 mg al día. ¿Cuál es el efecto secundario de origen infeccioso más frecuentemente asociado al mecanismo de acción de este nuevo fármaco?',
        options: [
          { id: 'A', text: 'Neumonía bacteriana por gérmenes atípicos' },
          { id: 'B', text: 'Infecciones micóticas genitales como vulvovaginitis o balanitis por Candida' },
          { id: 'C', text: 'Gastroenteritis aguda invasora por Campylobacter' },
          { id: 'D', text: 'Pielonefritis enfisematosa fulminante' },
          { id: 'E', text: 'Erisipela recurrente de extremidades inferiores' },
        ],
        correcta: 'B',
        explicacion: 'Los inhibidores del cotransportador sodio-glucosa 2 (iSGLT2) como la dapagliflozina actúan bloqueando la reabsorción de glucosa en el túbulo proximal, excretando grandes cantidades de azúcar por la orina (glucosuria). El aumento de la concentración de glucosa en el tracto urogenital favorece la colonización y proliferación fúngica, siendo las infecciones micóticas genitales (candidiasis vulvovaginal en mujeres y balanitis en hombres) el efecto adverso más común (5 a 10% de los pacientes).',
        recTag: 'EUNACOM Diciembre 2020 · Reconstrucción oficial',
      },
      {
        stem: '¿Cuál de los siguientes fármacos antidiabéticos orales del grupo de los inhibidores de la dipeptidil peptidasa-4 (iDPP-4) posee eliminación predominantemente hepática/biliar y, por lo tanto, NO requiere reducción de dosis en pacientes con enfermedad renal crónica avanzada en etapa 4 o 5?',
        options: [
          { id: 'A', text: 'Sitagliptina' },
          { id: 'B', text: 'Vildagliptina' },
          { id: 'C', text: 'Linagliptina' },
          { id: 'D', text: 'Saxagliptina' },
          { id: 'E', text: 'Alogliptina' },
        ],
        correcta: 'C',
        explicacion: 'A diferencia de la sitagliptina y vildagliptina, que se eliminan principalmente por vía renal y requieren ajuste posológico según la VFG, la linagliptina se excreta en más del 80–90% por vía enterohepática a través de la bilis y las heces. Por este motivo, la linagliptina no requiere ningún ajuste de dosis en pacientes con insuficiencia renal en cualquier etapa (incluyendo pacientes en hemodiálisis o VFG < 15 mL/min), constituyendo una opción oral muy segura en nefropatía.',
        recTag: 'EUNACOM Julio 2023 · Reconstrucción oficial',
      },
    ],
  },
  {
    id: 'diab-09',
    classId: 'diab-09',
    tier: 2,
    blockNum: 2,
    blockName: 'Farmacoterapia Oral y Manejo de DM2 en APS',
    topicLabel: '2.4',
    title: 'Tratamiento y Monitoreo de la Diabetes en la Gestante',
    perfilCode: '1.04.2.001, 1.04.2.002',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES): Salud del Embarazo y Parto',
    reconstrucciones: 'EUNACOM Diciembre 2018 (Q#42) · EUNACOM Julio 2022 (Q#15)',
    frecuencia: 'Alta · Criterios estrictos de inicio de insulina y contraindicación de sulfonilureas',
    svg: null, algoTitle: 'Algoritmo de Manejo Nutricional e Insulinoterapia en Diabetes Gestacional',
    diagram: flow('Algoritmo Terapéutico en Diabetes Gestacional (MINSAL)', [
      { t: 'Confirmación de Diabetes Gestacional (DMG)', s: 'Paso 1: Derivación inmediata a Alto Riesgo Obstétrico (ARO) e inicio de Terapia Médica Nutricional' },
      { k: 'split', q: '¿Cumplimiento de Metas tras 1 a 2 Semanas de Dieta (Ayuno < 95, 1h post < 140)?', s: 'Automonitoreo con hemoglucotest capilar 4 veces al día (ayuno y postprandiales)', ll: 'Metas Logradas (> 80% de registros en rango)', rl: 'Metas No Logradas (> 20% alteradas) o Macrosomía',
        left: { t: 'Mantener Terapia Nutricional', s: 'Control cada 2 a 3 semanas · Biometría ecográfica seriada mensual para vigilar crecimiento fetal', type: 'acc' },
        right: { t: 'Iniciar Insulinoterapia Subcutánea Inmediata', s: 'Insulina NPH (0.1-0.2 UI/kg) para ayuno alto · Insulina Cristalina / Lispro si postprandiales altas', type: 'warn' },
        ll: 'control con dieta', rl: 'falla de dieta (insulina)' },
      { t: 'Contraindicación de Fármacos Orales Clásicos', s: 'Sulfonilureas (Glibenclamida) PROHIBIDAS (cruzan placenta y causan hipoglicemia fetal severa) · Insulina es el estándar', type: 'dec', al: 'seguridad fetal', from: 'right' },
    ]),
    contexto: 'El tratamiento de la diabetes en el embarazo tiene como meta primordial proteger al feto del hiperinsulinismo reactivo, la macrosomía y la hipoxia. El EUNACOM evalúa el tiempo de prueba de la dieta (máximo 1 a 2 semanas), los criterios formales para iniciar insulina (cuando más del 20% de los controles superan las metas o si el feto presenta circunferencia abdominal sobre el percentil 90 en ecografía) y la contraindicación absoluta de sulfonilureas.',
    contentSections: [
      {
        subhead: '1. Terapia Médica Nutricional Estricta',
        paragraphs: [
          'La dieta es el pilar inicial en toda paciente con Diabetes Gestacional y logra el control metabólico en el 70–80% de los casos.',
          '• Aporte calórico: 30 kcal/kg/día en normopeso; 25 kcal/kg/día en sobrepeso; restricción prudente a 20–25 kcal/kg/día en obesidad (evitando dietas &lt; 1.500 kcal/día por riesgo de cetonemia nociva para el cerebro fetal).<br>' +
          '• Distribución: 40–45% carbohidratos complejos de bajo índice glicémico, 20% proteínas y 35% grasas poliinsaturadas.<br>' +
          '• <strong>Fraccionamiento obligatorio:</strong> 4 comidas principales y 2 a 3 colaciones intermedias (incluyendo colación nocturna tardía a las 23:00 para prevenir cetosis y cetonuria de ayuno).',
        ],
      },
      {
        subhead: '2. Criterios de Inicio de Insulinoterapia',
        paragraphs: [
          'La evaluación de la respuesta a la dieta se realiza tras <strong>1 a 2 semanas</strong> de automonitoreo glucémico capilar de 4 a 6 puntos diarios (ayunas y 1 o 2 horas post-comidas).',
          '<strong>Se debe iniciar INSULINA subcutánea si se cumple cualquiera de los siguientes criterios:</strong><br>' +
          '1. <strong>Falla metabólica materna:</strong> Más del <strong>20% de los valores de glicemia capilar superan las metas</strong> (Glicemia de ayunas &gt; 90–95 mg/dL o 1 hora postprandial &gt; 140 mg/dL).<br>' +
          '2. <strong>Criterio ecográfico fetal (macrosomía incipiente):</strong> Circunferencia abdominal fetal <strong>≥ percentil 75–90</strong> para la edad gestacional en la ecografía de control.<br>' +
          '3. Presencia de polihidramnios ecográfico no atribuible a otra causa.',
        ],
      },
      {
        subhead: '3. Selección de Insulinas y Proscripción de Sulfonilureas',
        paragraphs: [
          '• <strong>Fármaco de elección:</strong> <strong>Insulina Humana (NPH y Cristalina)</strong>, categoría B en el embarazo. No atraviesan la barrera placentaria en cantidades significativas y son absolutamente seguras para el embrión y feto. Si la alteración es solo de ayuno: Insulina NPH nocturna (0.1–0.2 UI/kg). Si la alteración es postprandial: Insulina Cristalina o análogos ultrarrápidos (Lispro o Aspart) pre-comidas.<br>' +
          '• <strong>Fármacos Prohibidos:</strong> Las <strong>sulfonilureas (glibenclamida)</strong> atraviesan activamente la placenta, estimulan el páncreas fetal y provocan <strong>hiperinsulinismo fetal masivo, macrosomía grave e hipoglicemia neonatal profunda y refractaria</strong>. Están formalmente contraindicadas.',
        ],
      },
    ],
    table: {
      title: 'Monitoreo y Metas Terapéuticas en Diabetes Gestacional (MINSAL)',
      headers: ['Momento de Medición', 'Meta Glucémica Capilar', 'Fármaco de Rescate si Falla', 'Observación Clínica'],
      rows: [
        ['Glicemia en ayunas (pre-desayuno)', '70 a 90 - 95 mg/dL', 'Insulina NPH a las 22:00 h', 'Evalúa secreción basal nocturna materna'],
        ['Glicemia 1 hora postprandial', '< 140 mg/dL', 'Insulina Cristalina o Lispro precomida', 'Peak de glucosa en el embarazo'],
        ['Glicemia 2 horas postprandial', '< 120 mg/dL', 'Insulina Cristalina precomida', 'Alternativa si no se mide a la hora'],
        ['Glicemia nocturna (03:00 AM)', '> 60 mg/dL', 'Disminuir NPH o sumar colación', 'Descartar hipoglicemias nocturnas inadvertidas'],
      ],
    },
    vignette: 'Gestante de 27 semanas diagnosticada de Diabetes Mellitus Gestacional hace 10 días. Ha seguido plan de alimentación guiado por nutricionista y presenta en su registro de hemoglucotest: 7 de 20 controles postprandiales (35%) sobre 155 mg/dL, con glicemias de ayuno entre 82 y 88 mg/dL. La paciente consulta por la conducta médica que corresponde adoptar.',
    explicacion: 'La paciente presenta falla a la terapia médico-nutricional evidenciada por más de un 20% de valores fuera de rango postprandial (> 140 mg/dL a la hora). Dado que las glicemias de ayunas se encuentran en meta perfecta (< 90 mg/dL), el problema radica exclusivamente en los peaks postprandiales. La conducta indicada no es aumentar la dosis de dieta ni insistir en más semanas de espera, sino iniciar de inmediato terapia farmacológica con Insulina rápida (Cristalina o Lispro) administrada inmediatamente antes de las comidas que generan las hiperglicemias.',
    keyPoints: [
      'El 70-80% de las pacientes con diabetes gestacional se controla eficazmente solo con dieta fraccionada.',
      'El periodo de prueba de la dieta es de 1 a 2 semanas con automonitoreo de 4 a 6 controles capilares al día.',
      'Si más del 20% de los controles superan las metas (ayuno > 90-95 o 1h post > 140), se debe iniciar insulina.',
      'La circunferencia abdominal fetal ≥ percentil 75-90 en ecografía es indicación de iniciar insulina precozmente.',
      'La insulina NPH y cristalina son los fármacos de elección indiscutidos; no cruzan la barrera placentaria.',
      'La glibenclamida está formalmente contraindicada por cruzar la placenta y provocar hipoglicemia neonatal severa.',
    ],
    questions: [
      {
        stem: 'Una mujer de 29 años, cursando embarazo de 28 semanas con diagnóstico de diabetes gestacional, lleva 14 días con régimen dietético fraccionado. En su registro de automonitoreo presenta glicemias de ayuno entre 80 y 90 mg/dL, pero el 30% de sus glicemias a la hora post-almuerzo y post-cena se encuentran entre 150 y 165 mg/dL. La ecografía fetal muestra un feto en percentil 60 de crecimiento. ¿Cuál es la conducta médica más adecuada?',
        options: [
          { id: 'A', text: 'Mantener la dieta exclusiva y reevaluar en un mes' },
          { id: 'B', text: 'Iniciar glibenclamida oral 5 mg antes del almuerzo' },
          { id: 'C', text: 'Iniciar insulina rápida (cristalina o ultrarrápida) antes de las comidas principales' },
          { id: 'D', text: 'Iniciar insulina NPH nocturna a dosis de 0.2 UI/kg a las 22:00 horas' },
          { id: 'E', text: 'Programar interrupción inmediata del embarazo por vía cesárea' },
        ],
        correcta: 'C',
        explicacion: 'La paciente presenta un fracaso de la terapia nutricional (> 20% de glicemias postprandiales sobre 140 mg/dL a la hora). Como las glicemias de ayuno son normales, no requiere insulina basal NPH nocturna. El tratamiento indicado es la adición de insulina prandial de acción rápida (cristalina o análogos lispro/aspart) administrada antes del almuerzo y la cena para aplanar los peaks glucémicos postprandiales. Los hipoglucemiantes orales como la glibenclamida están contraindicados.',
        recTag: 'EUNACOM Diciembre 2018 · Reconstrucción oficial',
      },
      {
        stem: '¿Cuál de las siguientes complicaciones fetales o neonatales es la consecuencia directa más frecuente de una diabetes gestacional mal controlada con hiperglicemias maternas postprandiales sostenidas durante el tercer trimestre?',
        options: [
          { id: 'A', text: 'Agenesia sacra o síndrome de regresión caudal' },
          { id: 'B', text: 'Transposición de grandes vasos cardíacos' },
          { id: 'C', text: 'Macrosomía fetal con riesgo de distocia de hombros e hipoglicemia neonatal' },
          { id: 'D', text: 'Oligohidramnios severo con hipoplasia pulmonar' },
          { id: 'E', text: 'Restricción del crecimiento intrauterino simétrico severo' },
        ],
        correcta: 'C',
        explicacion: 'La hiperglicemia materna en la segunda mitad del embarazo atraviesa la placenta libremente por difusión facilitada, estimulando al páncreas fetal a producir grandes cantidades de insulina (la cual no cruza la placenta). La insulina actúa en el feto como una potente hormona de crecimiento y anabolizante, provocando acumulación grasa en tronco y hombros (macrosomía fetal), con alto riesgo de distocia de hombros en el parto y de hipoglicemia neonatal grave tras el corte del cordón umbilical por cese brusco del aporte materno de glucosa. Las malformaciones mayores (A y B) son propias de la diabetes pregestacional descompensada en el primer trimestre.',
        recTag: 'EUNACOM Julio 2022 · Reconstrucción oficial',
      },
    ],
  },
  {
    id: 'diab-10',
    classId: 'diab-10',
    tier: 2,
    blockNum: 2,
    blockName: 'Farmacoterapia Oral y Manejo de DM2 en APS',
    topicLabel: '2.5',
    title: 'Diabetes e Hipertensión Arterial: Metas Tensionales y Protección Renal',
    perfilCode: '1.04.1.010',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES): Hipertensión Arterial Primaria y DM2',
    reconstrucciones: 'EUNACOM Diciembre 2019 (Q#27) · EUNACOM Julio 2023 (Q#39)',
    frecuencia: 'Alta · Indicación de IECA/ARA-II en microalbuminuria y metas tensionales',
    svg: null, algoTitle: 'Algoritmo de Manejo de la Hipertensión en el Paciente Diabético',
    diagram: flow('Algoritmo de Tratamiento Antihipertensivo en Diabetes', [
      { t: 'Paciente con Diabetes Mellitus Tipo 2 e Hipertensión Arterial (PA ≥ 130/80 mmHg)', s: 'Paso 1: Medir Razón Albúmina/Creatinina en Orina (RAC) y estimar VFG' },
      { k: 'split', q: '¿Presenta Albuminuria Positiva (RAC ≥ 30 mg/g) o Daño Renal?', s: 'Define la elección obligatoria del antihipertensivo de primera línea', ll: 'Con Albuminuria (RAC ≥ 30 mg/g)', rl: 'Sin Albuminuria (RAC < 30 mg/g)',
        left: { t: 'IECA (Enalapril) o ARA-II (Losartán) OBLIGATORIO', s: 'Dilatación selectiva de arteriola eferente · Reduce presión intraglomerular y frena proteinuria', type: 'acc' },
        right: { t: 'Antihipertensivo de 1ª Línea Estándar', s: 'IECA, ARA-II, Calcioantagonista Dihidropiridínico (Amlodipino) o Tiazida (Hidroclorotiazida)', type: 'warn' },
        ll: 'albuminuria presente', rl: 'normoalbuminuria' },
      { t: 'Meta Tensional Universal en Diabetes', s: 'Presión Arterial < 130/80 mmHg (siempre que sea bien tolerada) · Biterapia si PA ≥ 140/90 mmHg', type: 'dec', al: 'meta < 130/80', from: 'left' },
    ]),
    contexto: 'La coexistencia de diabetes e hipertensión arterial multiplica por cuatro el riesgo de morbimortalidad cardiovascular y acelera la progresión hacia enfermedad renal terminal. El EUNACOM exige memorizar la meta de presión arterial en el paciente diabético (< 130/80 mmHg), la indicación prioritaria indiscutible de IECA (Enalapril) o ARA-II (Losartán) ante la presencia de albuminuria por su efecto hemodinámico nefroprotector, y la prohibición de combinar IECA con ARA-II.',
    contentSections: [
      {
        subhead: '1. Sinergia Fisiopatológica de Daño Vascular y Renal',
        paragraphs: [
          'La hiperglicemia crónica provoca glicación no enzimática de proteínas, disfunción endotelial y rigidez arterial, mientras que la hipertensión transmite un estrés de cizallamiento hidráulico directo al lecho capilar glomerular.',
          'En el glomérulo diabético existe una <strong>vasodilatación relativa de la arteriola aferente</strong>; la hipertensión sistémica no controlada eleva drásticamente la <strong>presión intraglomerular (hiperfiltración)</strong>, rompiendo los podocitos y la membrana basal, lo que desencadena albuminuria progresiva y glomeruloesclerosis.',
        ],
      },
      {
        subhead: '2. Fármacos de Primera Línea y Mecanismo de Nefroprotección',
        paragraphs: [
          '• <strong>Bloqueadores del Sistema Renina-Angiotensina-Aldosterona (SRAA):</strong> Los <strong>IECA (Enalapril)</strong> y los <strong>ARA-II (Losartán)</strong> son los fármacos de primera línea indiscutidos en todo diabético hipertenso con <strong>albuminuria (RAC ≥ 30 mg/g)</strong> o enfermedad renal crónica.<br>' +
          '• <strong>Mecanismo nefroprotector cardinal de examen:</strong> La Angiotensina II produce vasoconstricción preferente sobre la <strong>arteriola eferente</strong> glomerular. Los IECA y ARA-II bloquean este efecto, produciendo <strong>vasodilatación selectiva de la arteriola eferente</strong>, lo que reduce de inmediato la presión hidrostática intraglomerular, disminuye la filtración de proteínas y frena el deterioro funcional renal a largo plazo.<br>' +
          '• <strong>Regla de prohibición absoluta:</strong> <strong>NUNCA combinar un IECA con un ARA-II</strong> de forma simultánea, ya que los ensayos clínicos (ONTARGET) demostraron que no aporta beneficio adicional y aumenta drásticamente el riesgo de insuficiencia renal aguda e hiperkalemia severa.',
        ],
      },
      {
        subhead: '3. Metas Tensionales y Fármacos de Combinación',
        paragraphs: [
          '• <strong>Meta Tensional Oficial:</strong> La meta para la inmensa mayoría de los pacientes con diabetes es <strong>PA &lt; 130/80 mmHg</strong> (guías ADA y MINSAL), lograda de forma gradual sin inducir hipotensión ortostática en ancianos.<br>' +
          '• <strong>Terapia Combinada:</strong> Cuando la PA inicial supera en más de 20/10 mmHg la meta (PA ≥ 140/90 mmHg), se recomienda iniciar directamente <strong>Biterapia antihipertensiva</strong>: combinar un <strong>IECA o ARA-II</strong> con un <strong>Calcioantagonista dihidropiridínico (Amlodipino 5 a 10 mg/día)</strong> o un diurético tiazídico/análogo (Indapamida o Hidroclorotiazida).',
        ],
      },
    ],
    table: {
      title: 'Estrategia Terapéutica Antihipertensiva en el Paciente Diabético',
      headers: ['Condición Renal', 'Fármaco de Primera Línea', 'Fármaco para Biterapia', 'Meta Tensional'],
      rows: [
        ['Diabético con Albuminuria (RAC ≥ 30 mg/g)', 'IECA (Enalapril) o ARA-II (Losartán)', 'Calcioantagonista (Amlodipino)', '< 130/80 mmHg'],
        ['Diabético sin Albuminuria (RAC < 30 mg/g)', 'Cualquiera: IECA, ARA-II, Amlodipino o Tiazida', 'Combinación de dos clases principales', '< 130/80 mmHg'],
        ['Diabético con Cardiopatía Coronaria previa', 'IECA/ARA-II + Betabloqueador cardioselectivo (Atenolol/Bisoprolol)', 'Amlodipino', '< 130/80 mmHg'],
        ['Diabético con VFG < 30 mL/min', 'IECA/ARA-II con monitoreo estricto de Potasio', 'Diurético de asa (Furosemida) o Amlodipino', '< 130/80 mmHg'],
      ],
    },
    vignette: 'Hombre de 56 años, con antecedente de DM2 en tratamiento con metformina 850 mg c/12h con HbA1c 7.1%. En sus últimos 3 controles médicos presenta presiones arteriales promedio de 144/92 mmHg. Su examen de orina muestra una Razón Albúmina/Creatinina (RAC) de 160 mg/g (microalbuminuria confirmada) y creatinina plasmática de 1.0 mg/dL. ¿Cuál es el fármaco antihipertensivo de primera línea que debe indicarse?',
    explicacion: 'En un paciente diabético con hipertensión arterial asociada a microalbuminuria (RAC entre 30 y 299 mg/g), el objetivo no solo es normalizar las cifras de presión arterial (< 130/80 mmHg), sino otorgar nefroprotección específica. El fármaco de primera línea de elección indiscutida es un bloqueador del SRAA, ya sea un IECA (Enalapril) o un ARA-II (Losartán). Estos medicamentos inducen vasodilatación de la arteriola eferente glomerular, lo que disminuye la presión intraglomerular y reduce la proteinuria, frenando el daño renal.',
    keyPoints: [
      'La meta de presión arterial universal en pacientes diabéticos es < 130/80 mmHg.',
      'En diabéticos con albuminuria (RAC ≥ 30 mg/g), los fármacos de primera línea obligatorios son IECA o ARA-II.',
      'Mecanismo nefroprotector: vasodilatación selectiva de la arteriola eferente que reduce la presión intraglomerular.',
      'Está formalmente contraindicado combinar un IECA con un ARA-II por riesgo de falla renal aguda e hiperkalemia.',
      'Si la PA basal es ≥ 140/90 mmHg se recomienda iniciar biterapia asociando IECA/ARA-II con Amlodipino.',
      'Los betabloqueadores no son de primera línea en HTA pura en DM salvo indicación cardiológica (IAM o IC).',
    ],
    questions: [
      {
        stem: 'Un paciente de 58 años con diabetes mellitus tipo 2 de 5 años de evolución acude a control de salud. Presenta presiones arteriales promedio de 142/88 mmHg en tomas repetidas. El laboratorio reporta creatinina 0.9 mg/dL y una razón albúmina/creatinina en orina aislada de 180 mg/g (confirmada en dos muestras). ¿Cuál es el fármaco antihipertensivo de elección más indicado para iniciar tratamiento?',
        options: [
          { id: 'A', text: 'Atenolol 50 mg al día' },
          { id: 'B', text: 'Hidroclorotiazida 25 mg al día' },
          { id: 'C', text: 'Enalapril 10 a 20 mg al día (o Losartán 50 mg al día)' },
          { id: 'D', text: 'Furosemida 40 mg al día' },
          { id: 'E', text: 'Nifedipino de acción corta sublingual según necesidad' },
        ],
        correcta: 'C',
        explicacion: 'En todo paciente diabético hipertenso que presente albuminuria patológica (RAC ≥ 30 mg/g, en este caso 180 mg/g), el fármaco antihipertensivo de primera línea indiscutido según todas las guías de práctica clínica (ADA, KDIGO y MINSAL) es un inhibidor de la ECA (como Enalapril) o un antagonista de los receptores de angiotensina II (como Losartán). Estos agentes vasodilatan selectivamente la arteriola eferente, disminuyendo la presión capilar intraglomerular y confiriendo un beneficio nefroprotector directo superior a otros hipotensores.',
        recTag: 'EUNACOM Diciembre 2019 · Reconstrucción oficial',
      },
      {
        stem: '¿Cuál es el mecanismo hemodinámico intrarrenal primario mediante el cual los fármacos inhibidores de la ECA (como enalapril) disminuyen la proteinuria y enlentecen la progresión de la nefropatía en pacientes diabéticos?',
        options: [
          { id: 'A', text: 'Vasoconstricción refleja de la arteriola eferente glomerular' },
          { id: 'B', text: 'Vasodilatación selectiva de la arteriola eferente glomerular, reduciendo la presión capilar intraglomerular' },
          { id: 'C', text: 'Vasoconstricción intensa de la arteriola aferente con disminución del flujo plasmático' },
          { id: 'D', text: 'Aumento de la permeabilidad de la membrana basal glomerular a las macromoléculas' },
          { id: 'E', text: 'Bloqueo directo de la reabsorción tubular de sodio en el asa de Henle' },
        ],
        correcta: 'B',
        explicacion: 'La angiotensina II endógena genera una potente vasoconstricción sobre la arteriola eferente, lo que eleva de forma patológica la presión hidrostática dentro del ovillo capilar glomerular en la diabetes. Al bloquear la síntesis de angiotensina II con un IECA (enalapril), se produce una vasodilatación predominante de la arteriola eferente, disminuyendo la presión intraglomerular (presión de filtración), lo que alivia el estrés mecánico sobre los podocitos y disminuye notablemente la albuminuria.',
        recTag: 'EUNACOM Julio 2023 · Reconstrucción oficial',
      },
    ],
  },
];

module.exports = {
  bloque2,
  flow,
};
