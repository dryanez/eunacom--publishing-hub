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
    id: 'resp-16',
    classId: 'resp-16',
    tier: 2,
    blockNum: 4,
    blockName: 'Oncología Pulmonar, Intersticio y Vascular',
    topicLabel: '4.1',
    title: 'Nódulo Pulmonar Solitario (NPS): Evaluación y Algoritmo Fleischner',
    perfilCode: '1.05.1.008, 1.05.5.005',
    dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Garantía Explícita en Salud (GES): Sospecha de Cáncer Pulmonar',
    reconstrucciones: '',
    frecuencia: 'Muy Alta · Reconocimiento de signos de benignidad vs malignidad',
    svg: null, algoTitle: 'Algoritmo de Manejo del Nódulo Pulmonar Solitario (Guías Fleischner)',
    diagram: flow('Algoritmo de Manejo del Nódulo Pulmonar Solitario (NPS)', [
      { t: 'Detección de Nódulo Pulmonar Solitario (NPS ≤ 30 mm)', s: 'Lesión esférica única rodeada de parénquima sano sin atelectasia ni adenopatías' },
      { k: 'split', q: 'Paso 1: Revisar Imágenes Previas (Rx o TAC anterior)', s: 'La estabilidad demostrada por ≥ 2 años descarta malignidad activa en el 99%', ll: 'estable ≥ 2 años', rl: 'nuevo, en crecimiento o sin imagen previa',
        left: { t: 'Confirmación de Benignidad', s: 'No requiere estudio adicional ni biopsia · Alta del seguimiento activo', type: 'acc' },
        right: { t: 'Estratificación por TAC de Tórax de Cortes Finos', s: 'Evaluar tamaño (< 6 mm, 6-8 mm, > 8 mm), bordes (espiculados) y calcificación', type: 'warn' } },
      { t: 'NPS > 8 mm con Riesgo Intermedio o Alto de Malignidad', s: 'Riesgo intermedio: PET-CT con 18-FDG · Riesgo alto / espiculado: Biopsia guiada o resección quirúrgica VATS', type: 'dec', al: 'alta sospecha', from: 'right' },
    ]),
    contexto: 'El hallazgo incidental de un Nódulo Pulmonar Solitario (NPS) es cada vez más frecuente. El EUNACOM evalúa el algoritmo diagnóstico escalonado: la comparación inmediata con radiografías previas como primera medida, los patrones de calcificación benigna versus signos de malignidad en la TAC y la conducta ante nódulos mayores a 8 mm.',
    contentSections: [
      {
        subhead: '1. Definición y Primer Paso Obligatorio',
        paragraphs: [
          'Se define como una <strong>opacidad radiológica redondeada u oval única de diámetro ≤ 30 mm (3 cm)</strong>, completamente rodeada por parénquima pulmonar aireado normal, sin atelectasia asociada, neumonía ni adenopatías mediastínicas evidentes (si mide &gt; 3 cm se cataloga como <em>masa pulmonar</em> y se asume maligna hasta demostrar lo contrario).',
          '<strong>Regla de oro número 1 EUNACOM:</strong> Frente al hallazgo de un NPS, <strong>la primera conducta médica SIEMPRE es buscar y comparar con radiografías o TACs de tórax previas</strong>. Si el nódulo ha permanecido con <strong>tamaño y morfología inalterados durante al menos 2 años</strong>, se confirma su benignidad biológica y no requiere más estudios ni biopsias.',
        ],
      },
      {
        subhead: '2. Características Imagenológicas de Malignidad vs Benignidad en TAC',
        paragraphs: [
          'Si no existen imágenes previas o la lesión es nueva, el examen de elección es la <strong>TAC de tórax de cortes finos con contraste</strong>.<br>' +
          '• <strong>Criterios de Benignidad:</strong> Diámetro &lt; 6 mm, bordes lisos y netos, y <strong>patrones de calcificación benignos</strong>: calcificación central difusa, concéntrica (en capas), difusa completa o en "palomitas de maíz" (<em>popcorn</em>, patognomónica de <strong>hamartoma pulmonar</strong>).<br>' +
          '• <strong>Criterios de Malignidad:</strong> Diámetro &gt; 8–10 mm, <strong>bordes espiculados o coronados</strong>, densidad en vidrio esmerilado parcial (sub-sólido), retracción de la pleura visceral, broncograma aéreo con distorsión y calcificaciones asimétricas o punteadas.',
        ],
      },
      {
        subhead: '3. Conducta según Diámetro y Factores de Riesgo (Guías Fleischner)',
        paragraphs: [
          'Factores de alto riesgo del paciente: edad &gt; 50 años, tabaquismo activo (&gt; 20–30 paquetes-año), antecedente personal de cáncer y localización en lóbulos superiores.<br>' +
          '• <strong>Nódulo &lt; 6 mm:</strong> En bajo riesgo no requiere seguimiento. En alto riesgo: TAC opcional a los 12 meses.<br>' +
          '• <strong>Nódulo 6 a 8 mm:</strong> TAC de control a los 6–12 meses y luego a los 18–24 meses para vigilar duplicación de volumen.<br>' +
          '• <strong>Nódulo &gt; 8 mm:</strong> Se evalúa la probabilidad pretest de cáncer. Probabilidad intermedia (5–65%): <strong>PET-CT con 18-FDG</strong>. Probabilidad alta (&gt; 65%) o captación ávida en PET: <strong>Biopsia (percutánea guiada por TAC o broncoscópica) o resección quirúrgica videotoracoscópica (VATS)</strong>.',
        ],
      },
    ],
    table: {
      title: 'Nódulo Pulmonar Solitario: Signos Radiológicos Benignos vs Malignos',
      headers: ['Característica', 'Alta Probabilidad de Benignidad', 'Alta Probabilidad de Malignidad'],
      rows: [
        ['Tamaño', '< 6 mm (estable por ≥ 2 años)', '> 8 - 10 mm (o crecimiento en controles)'],
        ['Márgenes / Bordes', 'Lisos, netos, regulares y definidos', 'Espiculados, irregulares, corona radiada'],
        ['Patrón de calcificación', 'Central, concéntrico o en popcorn (hamartoma)', 'Ausente, excéntrica, punteada o amorfa'],
        ['Densidad radiológica', 'Sólida homogénea / grasa macroscópica', 'Parcialmente sólido (sub-sólido / vidrio esmerilado)'],
        ['Localización', 'Cualquiera (frecuente periférico basal)', 'Predominio en lóbulos superiores'],
        ['Conducta estándar', 'Comparar con previas / Observación', 'PET-CT, Biopsia percutánea o Resección VATS'],
      ],
    },
    vignette: 'Hombre de 61 años, fumador de 30 paquetes-año, asintomático, se realiza radiografía de tórax como evaluación preoperatoria de hernia inguinal, pesquisándose un nódulo pulmonar de 18 mm en el lóbulo superior derecho. No dispone de radiografías previas. La TAC de tórax confirma nódulo sólido de 19 mm con bordes espiculados y sin calcificaciones.',
    explicacion: 'Nódulo Pulmonar Solitario > 8 mm con alta probabilidad pretest de malignidad (edad > 50 años, antecedente de tabaquismo pesado, ubicación en lóbulo superior y bordes espiculados característicos). Al no contar con estudios previos, la conducta correcta es la etapificación diagnóstica con PET-CT o resección quirúrgica diagnóstica-terapéutica mediante biopsia por videotoracoscopía (VATS).',
    keyPoints: [
      'La primera medida obligatoria ante un nódulo pulmonar solitario es comparar con radiografías o TACs previas.',
      'Un nódulo con estabilidad documentada de tamaño y forma por ≥ 2 años es benigno en el 99% de los casos.',
      'La calcificación en "popcorn" (palomitas de maíz) es diagnóstica y patognomónica de hamartoma pulmonar.',
      'Bordes espiculados, tamaño > 8 mm y localización en lóbulo superior indican alta sospecha de cáncer.',
      'En nódulos > 8 mm con riesgo intermedio el examen no invasivo de elección es el PET-CT con 18-FDG.',
    ],
    questions: [
      {
        stem: 'Una mujer de 58 años, fumadora de 20 paquetes-año, consulta por un cuadro de bronquitis aguda. La radiografía de tórax revela una opacidad redondeada homogénea de 12 mm en el lóbulo superior izquierdo sin otras anomalías. La paciente refiere que hace 3 años se tomó una radiografía de tórax por un chequeo laboral preventivo en su empresa. ¿Cuál es la conducta médica inmediata más adecuada?',
        options: [
          { id: 'A', text: 'Realizar punción percutánea inmediata bajo visión ecográfica' },
          { id: 'B', text: 'Solicitar y revisar la radiografía de tórax previa para comparar el tamaño de la lesión' },
          { id: 'C', text: 'Indicar tratamiento con levofloxacino por 14 días y radiografía al término' },
          { id: 'D', text: 'Programar lobectomía superior izquierda por sospecha de adenocarcinoma' },
          { id: 'E', text: 'Indicar broncoscopía rígida con biopsia transbronquial' },
        ],
        correcta: 'B',
        explicacion: 'En todo paciente con un nódulo pulmonar solitario recién detectado, el primer paso clínico y con mayor costo-efectividad antes de indicar procedimientos invasivos es buscar y revisar las radiografías o tomografías previas. Si la lesión ya estaba presente y con idéntico tamaño y características hace 2 o 3 años, se confirma la estabilidad y benignidad de la lesión, evitando biopsias, cirugías innecesarias o radiación adicional.',
        recTag: 'Banco de Preguntas Oficial · Nódulo Pulmonar Solitario',
      },
      {
        stem: '¿Cuál de los siguientes patrones de calcificación en la tomografía computarizada de un nódulo pulmonar solitario es patognomónico de un hamartoma pulmonar benigno?',
        options: [
          { id: 'A', text: 'Calcificación excéntrica milimétrica en la periferia de la lesión' },
          { id: 'B', text: 'Calcificaciones punteadas amorfas difusas' },
          { id: 'C', text: 'Calcificación densa en palomitas de maíz (popcorn) combinada con focos de densidad grasa' },
          { id: 'D', text: 'Calcificación en anillo de sello pleuropulmonar' },
          { id: 'E', text: 'Calcificación distrófica con nivel hidroaéreo' },
        ],
        correcta: 'C',
        explicacion: 'El hamartoma es la neoplasia benigna más común del pulmón. Su hallazgo clásico en la tomografía computarizada de alta resolución es la presencia de una lesión bien delimitada que contiene calcificaciones internas gruesas dispuestas en "palomitas de maíz" (popcorn) y áreas focales hipodensas de tejido adiposo (densidad entre -40 y -120 UH). Esta combinación confirma categóricamente el origen benigno sin requerir resección.',
        recTag: 'Banco de Preguntas Oficial · Nódulo Pulmonar Solitario',
      },
    ],
  },
  {
    id: 'resp-17',
    classId: 'resp-17',
    tier: 2,
    blockNum: 4,
    blockName: 'Oncología Pulmonar, Intersticio y Vascular',
    topicLabel: '4.2',
    title: 'Cáncer Pulmonar: Tipos Histológicos, Clínica y Manejo Inicial',
    perfilCode: '1.05.1.007, 1.05.1.025, 1.05.1.038',
    dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Garantía Explícita en Salud (GES): Cáncer de Pulmón en Personas de 15 años y más',
    reconstrucciones: '',
    frecuencia: 'Máxima · Tipos histológicos, síndromes paraneoplásicos y criterios de operabilidad',
    svg: null, algoTitle: 'Algoritmo de Diagnóstico Histológico, Etapificación y Manejo en Cáncer Pulmonar',
    diagram: flow('Algoritmo de Diagnóstico y Etapificación en Cáncer Pulmonar', [
      { t: 'Sospecha Clínica y Radiológica de Cáncer Pulmonar', s: 'Tos crónica, hemoptisis, baja de peso, disnea en fumador > 50 años + Masa pulmonar en Rx/TAC' },
      { k: 'split', q: 'Biopsia e Inmunohistoquímica: ¿Células Pequeñas (Microcítico) vs No Microcítico?', s: 'Define dos universos oncológicos completamente diferentes', ll: 'Células Pequeñas (Oat Cell / Microcítico)', rl: 'No Microcítico (Adeno / Epidermoide / Cél. Grandes)',
        left: { t: 'Cáncer Microcítico (15%)', s: 'Diseminación precoz masiva · NUNCA quirúrgico · Tratamiento: Quimioterapia (Platino/Etopósido) + Radioterapia', type: 'warn' },
        right: { t: 'Cáncer No Microcítico (85%)', s: 'Etapificación TNM completa (PET-CT + RMN cerebro) · Estadios I-II: Cirugía resectiva (Lobectomía)', type: 'acc' },
        ll: 'microcítico (SCLC)', rl: 'no microcítico (NSCLC)' },
      { t: 'Evaluación de Síndromes Paraneoplásicos Específicos', s: 'Microcítico: SIADH y Cushing ectópico (ACTH) · Epidermoide: Hipercalcemia tumoral (PTHrP) · Adenocarcinoma: Osteoartropatía hipertrófica', type: 'dec', al: 'paraneoplásicos', from: 'left' },
    ]),
    contexto: 'El cáncer pulmonar es la principal causa de muerte por neoplasias en Chile y patología GES. El EUNACOM evalúa con gran insistencia: los 4 tipos histológicos mayores, la división crucial entre microcítico (no operable) y no microcítico (quirúrgico en etapas tempranas), los síndromes paraneoplásicos característicos de cada estirpe y las urgencias oncológicas como el Síndrome de Vena Cava Superior.',
    contentSections: [
      {
        subhead: '1. Clasificación Histológica y Correlación Anatómica',
        paragraphs: [
          'El principal factor etiológico es el <strong>tabaquismo</strong> (responsable del 85–90% de los casos). Se divide en dos grandes grupos biológicos:<br>' +
          '• <strong>Cáncer Pulmonar de Células No Pequeñas (CPCNP, 85%):</strong><br>' +
          '- <strong>Adenocarcinoma (40–50%):</strong> El tipo más frecuente tanto en fumadores como en <strong>no fumadores y mujeres</strong>. De localización típicamente <strong>periférica</strong>, nace en bronquiolos terminales.<br>' +
          '- <strong>Carcinoma Epidermoide o Escamoso (25–30%):</strong> Muy ligado al tabaco. De localización <strong>central</strong> (bronquios principales), con tendencia a la <strong>cavitación central</strong> y necrosis.<br>' +
          '- <strong>Carcinoma de Células Grandes (10%):</strong> Periférico, muy indiferenciado y agresivo.<br>' +
          '• <strong>Cáncer Pulmonar de Células Pequeñas (Microcítico o "Oat Cell", 15%):</strong> Altamente ligado al tabaco, localización <strong>central</strong> perihiliar, invasión vascular temprana y metástasis diseminadas precoces (cerebro, hígado, hueso). Se considera una enfermedad sistémica desde el diagnóstico y <strong>NO tiene indicación quirúrgica de entrada</strong>.',
        ],
      },
      {
        subhead: '2. Síndromes Paraneoplásicos Clásicos de Examen',
        paragraphs: [
          'Son alteraciones a distancia no atribuibles a invasión directa ni metástasis:<br>' +
          '• <strong>Carcinoma Microcítico:</strong> 1) <strong>SIADH</strong> (secreción ectópica de hormona antidiurética con hiponatremia hipotónica); 2) <strong>Síndrome de Cushing ectópico</strong> (por secreción ectópica de ACTH con hipocalemia y alcalosis metabólica); 3) <strong>Síndrome miasténico de Lambert-Eaton</strong> (anticuerpos anti-canales de calcio dependientes de voltaje).<br>' +
          '• <strong>Carcinoma Epidermoide / Escamoso:</strong> <strong>Hipercalcemia tumoral por secreción de PTHrP</strong> (péptido relacionado a hormona paratiroidea), sin metástasis óseas.<br>' +
          '• <strong>Adenocarcinoma:</strong> <strong>Osteoartropatía hipertrófica pulmonar</strong> (Síndrome de Pierre-Marie Bamberger: acropaquia o dedos en palillo de tambor y periostitis dolorosa bilateral).',
        ],
      },
      {
        subhead: '3. Síndromes por Invasión Local y Principios de Manejo',
        paragraphs: [
          '• <strong>Tumor de Pancoast (surco superior):</strong> Habitualmente epidermoide o adenocarcinoma en el vértice pulmonar que invade el plexo braquial (dolor radicular C8–T1 en cara interna del brazo) y la cadena simpática estrellada, produciendo el <strong>Síndrome de Horner ipsilateral</strong> (ptosis palpebral, miosis, enoftalmos y anhidrosis facial).<br>' +
          '• <strong>Síndrome de Vena Cava Superior (SVCS):</strong> Compresión mediastínica por tumor central (microcítico) o adenopatías: edema en esclavina (cara, cuello y miembros superiores), cianosis facial e ingurgitación de venas torácicas colaterales.<br>' +
          '• <strong>Tratamiento:</strong> En CPCNP estadios I y II la opción curativa es la <strong>resección quirúrgica (lobectomía con linfadenectomía mediastínica)</strong>. En microcítico: Quimioterapia (Cisplatino + Etopósido) + Radioterapia torácica y holocraneal profiláctica.',
        ],
      },
    ],
    table: {
      title: 'Tipos Histológicos de Cáncer Pulmonar y sus Síndromes Paraneoplásicos',
      headers: ['Tipo Histológico', 'Frecuencia y Ubicación', 'Asociación Tabaco', 'Síndrome Paraneoplásico / Hallazgo'],
      rows: [
        ['Adenocarcinoma', '40-50% · Periférico', 'Fumadores y No fumadores', 'Osteoartropatía hipertrófica / Acropaquia'],
        ['Carcinoma Epidermoide', '25-30% · Central', 'Fuerte asociación (cavitado)', 'Hipercalcemia humoral por PTHrP'],
        ['Carcinoma Microcítico', '15% · Central (perihiliar)', 'Casi 100% fumadores pesados', 'SIADH (hiponatremia), Cushing (ACTH), Lambert-Eaton'],
        ['Células Grandes', '10% · Periférico', 'Fumadores', 'Ginecomastia (secreción beta-HCG)'],
      ],
    },
    vignette: 'Hombre de 67 años, fumador activo de 45 paquetes-año, consulta por astenia, náuseas, constipación y confusión fluctuante. No tiene fiebre. La radiografía de tórax revela una masa central perihiliar derecha de 5 cm con ensanchamiento mediastínico. Laboratorio: Calcio sérico 13.8 mg/dL (hipercalcemia grave), Fósforo 2.1 mg/dL, PTH suprimida y PTHrP marcadamente elevada.',
    explicacion: 'Masa pulmonar central en paciente fumador que debuta con hipercalcemia maligna severa mediada por secreción ectópica de PTHrP (con PTH fisiológica suprimida). Este síndrome paraneoplásico humoral es patognomónico del Carcinoma Epidermoide (o escamoso) de pulmón. El manejo inmediato incluye hidratación vigorosa con solución salina al 0.9%, bifosfonatos endovenosos (ácido zoledrónico) y fibrobroncoscopía con biopsia para confirmación histológica.',
    keyPoints: [
      'El adenocarcinoma es el más frecuente en la población general y el más habitual en mujeres no fumadoras (periférico).',
      'El carcinoma epidermoide es central, tiende a cavitar y produce hipercalcemia tumoral mediada por PTHrP.',
      'El carcinoma microcítico es central, muy agresivo, no quirúrgico y causa SIADH, Cushing ectópico y Lambert-Eaton.',
      'Tumor de Pancoast: dolor en territorio C8-T1 más Síndrome de Horner ipsilateral (ptosis, miosis, anhidrosis).',
      'El tratamiento curativo del cáncer no microcítico en estadios resecables (I y II) es la lobectomía quirúrgica reglada.',
    ],
    questions: [
      {
        stem: 'Un paciente de 64 años, con antecedente de tabaquismo severo (40 paquetes-año), consulta por tos persistente de 2 meses y debilidad muscular progresiva. Se encuentra hemodinámicamente estable pero apático. En sus exámenes de sangre destaca: Sodio 118 mEq/L, Potasio 4.0 mEq/L, Osmolaridad plasmática 245 mOsm/kg, Osmolaridad urinaria 480 mOsm/kg y Sodio urinario 45 mEq/L. La radiografía de tórax muestra una masa perihiliar derecha con adenopatías hiliares prominentes. ¿Cuál es el tipo histológico más probable?',
        options: [
          { id: 'A', text: 'Carcinoma de células pequeñas (microcítico)' },
          { id: 'B', text: 'Adenocarcinoma pulmonar acinar periférico' },
          { id: 'C', text: 'Carcinoma bronquioloalveolar mucinoso' },
          { id: 'D', text: 'Hamartoma pulmonar central' },
          { id: 'E', text: 'Tumor carcinoide típico bronquial' },
        ],
        correcta: 'A',
        explicacion: 'El paciente presenta una masa central perihiliar asociada a hiponatremia hipotónica euvolémica con orina inapropiadamente concentrada (Osm urinaria > 100 y Na urinario > 30), lo que certifica un Síndrome de Secreción Inadecuada de Hormona Antidiurética (SIADH). El SIADH es el síndrome paraneoplásico endocrino más característico del Carcinoma Pulmonar Microcítico (de células pequeñas u oat cell), el cual produce ADH ectópica en un 10–15% de los pacientes.',
        recTag: 'Banco de Preguntas Oficial · Cáncer Pulmonar',
      },
      {
        stem: 'Un paciente de 59 años, tabáquico, consulta por dolor intenso de hombro derecho y cara interna del antebrazo derecho, asociado a caída del párpado superior derecho y ausencia de sudoración en la mitad derecha del rostro. La radiografía de tórax muestra una opacidad apical en el vértice pulmonar derecho. ¿Cómo se denomina esta constelación clínica y cuál es su sustrato anatómico?',
        options: [
          { id: 'A', text: 'Síndrome de Kartagener por alteración de la motilidad ciliar' },
          { id: 'B', text: 'Tumor de Pancoast con Síndrome de Horner por compromiso del ganglio simpático estrellado' },
          { id: 'C', text: 'Síndrome de Vena Cava Superior por compresión de la aurícula derecha' },
          { id: 'D', text: 'Miopatía tiroidea con infiltración de la base de la lengua' },
          { id: 'E', text: 'Neuralgia postherpética de ramas torácicas altas' },
        ],
        correcta: 'B',
        explicacion: 'El Tumor de Pancoast (tumor del surco pulmonar superior) se ubica en el vértice apical y comprime estructuras vecinas: el plexo braquial inferior (raíces C8, T1 y T2) generando dolor urente irradiado al borde cubital del brazo, y la cadena simpática cervical/ganglio estrellado, provocando el Síndrome de Claude-Bernard-Horner ipsilateral caracterizado por la tríada clásica de ptosis palpebral, miosis y anhidrosis facial.',
        recTag: 'Banco de Preguntas Oficial · Cáncer Pulmonar',
      },
    ],
  },
  {
    id: 'resp-18',
    classId: 'resp-18',
    tier: 2,
    blockNum: 4,
    blockName: 'Oncología Pulmonar, Intersticio y Vascular',
    topicLabel: '4.3',
    title: 'Enfermedades Pulmonares Intersticiales Difusas (EPID) y Fibrosis Pulmonar Idiopática',
    perfilCode: '1.05.1.018, 1.05.1.026',
    dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'No GES',
    reconstrucciones: '',
    frecuencia: 'Media-Alta · Patrón tomográfico NIU vs NINE y signos clínicos cardinales',
    svg: null, algoTitle: 'Algoritmo de Diagnóstico de las EPID y Patrón Tomográfico NIU (TACAR)',
    diagram: flow('Algoritmo de Evaluación Diagnóstica de las EPID (TACAR)', [
      { t: 'Sospecha Clínica de EPID', s: 'Disnea de esfuerzo progresiva + Tos seca crónica + Crépitos tipo "velcro" bibasales + Acropaquia' },
      { k: 'split', q: 'Estudio de Elección: TAC de Tórax de Alta Resolución (TACAR)', s: 'Define el patrón morfológico intersticial sin requerir biopsia si es típico', ll: 'Patrón de Neumonía Intersticial Usual (NIU)', rl: 'Patrón No NIU (NINE u otros)',
        left: { t: 'Fibrosis Pulmonar Idiopática (FPI)', s: 'Panal de abejas subpleural bibasal + Bronquiectasias por tracción + Sin vidrio esmerilado predominante', type: 'warn' },
        right: { t: 'Sospechar Causa Secundaria', s: 'Conectivopatías (Esclerosis sistémica, AR), Fármacos (Amiodarona, Metotrexato) o Neumonitis por hipersensibilidad', type: 'acc' },
        ll: 'patrón NIU típico', rl: 'patrón NINE / alternativo' },
      { t: 'Manejo de la Fibrosis Pulmonar Idiopática (FPI)', s: 'Antifibróticos (Pirfenidona / Nintedanib) frenan la caída del VEF1 · Los corticoides están formalmente CONTRAINDICADOS en FPI', type: 'dec', al: 'terapia antifibrótica', from: 'left' },
    ]),
    contexto: 'Las EPID comprenden un grupo heterogéneo de patologías con afección alveolar e intersticial difusa. El EUNACOM exige reconocer la presentación clínica de la Fibrosis Pulmonar Idiopática (FPI), su patrón tomográfico en panal de abejas (NIU), la diferenciación con causas secundarias (colagenopatías, fármacos como amiodarona) y la contraindicación absoluta de corticoides en FPI.',
    contentSections: [
      {
        subhead: '1. Enfrentamiento Clínico y Semiología Clásica',
        paragraphs: [
          'Las EPID se presentan característicamente con <strong>disnea de esfuerzo insidiosa y lentamente progresiva</strong> a lo largo de meses o años, acompañada de <strong>tos seca e irritativa persistente</strong>.',
          '<strong>Semiología patognomónica de examen:</strong> 1) <strong>Estertores crepitantes secos "tipo velcro"</strong> tele-inspiratorios bilaterales en bases pulmonares (presentes en más del 80–90% de los pacientes con fibrosis); y 2) <strong>Hipocratismo digital o acropaquia</strong> (dedos en palillo de tambor y uñas en vidrio de reloj) en el 50% de los casos de FPI.',
        ],
      },
      {
        subhead: '2. Rol de la TACAR y Patrón de Neumonía Intersticial Usual (NIU)',
        paragraphs: [
          'La <strong>Tomografía Computarizada de Alta Resolución (TACAR) sin contraste</strong> es el examen diagnóstico de elección.<br>' +
          '• <strong>Patrón NIU (Neumonía Intersticial Usual):</strong> Es el sello de la <strong>Fibrosis Pulmonar Idiopática (FPI)</strong>. Se define por: 1) Opacidades reticulares subpleurales y basales bilaterales; 2) <strong>Panal de abejas (honeycombing)</strong> subpleural evidente; 3) <strong>Bronquiectasias y bronquiolectasias por tracción</strong>; y 4) <strong>Ausencia</strong> de hallazgos incompatibles (nódulos difusos, condensaciones o vidrio esmerilado extenso). Si la TACAR muestra un patrón NIU definitivo en un paciente &gt; 60 años sin otra causa, <strong>NO se requiere biopsia pulmonar</strong>.',
          '• <strong>Patrón NINE (Neumonía Intersticial No Específica):</strong> Predomina el <strong>vidrio esmerilado subpleural bilateral con respeto del espacio subpleural inmediato</strong>; es el patrón característico de las <strong>enfermedades del tejido conectivo</strong> (esclerodermia, lupus, artritis reumatoide).',
        ],
      },
      {
        subhead: '3. Causas Secundarias, Drogas y Principios Terapéuticos',
        paragraphs: [
          '<strong>Fármacos que inducen toxicidad pulmonar intersticial:</strong> <strong>Amiodarona</strong> (la causa más frecuente en cardiología, acumula fosfolípidos), <strong>Metotrexato</strong>, <strong>Bleomicina</strong> y <strong>Nitrofurantoína</strong> crónica.',
          '<strong>Tratamiento de la FPI:</strong> El estudio PANTHER demostró que la combinación tradicional de corticoides + azatioprina aumenta la mortalidad. Por ende, <strong>los corticoides están CONTRAINDICADOS en la FPI</strong>. El tratamiento actual son los <strong>agentes antifibróticos (Pirfenidona y Nintedanib)</strong>, que enlentecen la caída de la capacidad vital forzada y reducen las exacerbaciones agudas.',
        ],
      },
    ],
    table: {
      title: 'Diagnóstico Diferencial: Patrón NIU (Fibrosis Idiopática) vs Patrón NINE (Conectivopatías)',
      headers: ['Característica', 'Patrón NIU (Fibrosis Pulmonar Idiopática)', 'Patrón NINE (Asociado a Conectivopatías)'],
      rows: [
        ['Población habitual', 'Hombres > 60-65 años, fumadores', 'Mujeres jóvenes a maduras, no fumadoras'],
        ['Hallazgo tomográfico clave', 'Panal de abejas subpleural basal + Tracción', 'Vidrio esmerilado predominante homogéneo'],
        ['Afección subpleural', 'Afecta la pleura visceral inmediata', 'Típicamente respeta el margen subpleural'],
        ['Respuesta a Corticoides', 'Nula / Dañina (contraindicados)', 'Favorable a corticoides e inmunosupresores'],
        ['Tratamiento específico', 'Antifibróticos (Pirfenidona / Nintedanib)', 'Inmunosupresión (Micofenolato, Azatioprina)'],
      ],
    },
    vignette: 'Hombre de 68 años, no fumador, consulta por disnea de esfuerzo lentamente progresiva que inició hace 1 año y tos seca. Al examen: SatO2 91% ambiental, acropaquia evidente en manos y auscultación pulmonar con estertores crepitantes secos tele-inspiratorios en ambas bases similares al despegue de un velcro. La TACAR demuestra engrosamiento reticular subpleural y múltiples quistes de panal de abejas bibasales.',
    explicacion: 'Cuadro clínico y tomográfico patognomónico de Fibrosis Pulmonar Idiopática (FPI): adulto mayor con disnea crónica, acropaquia, crépitos tipo velcro y patrón de Neumonía Intersticial Usual (NIU) definitivo con panal de abejas en la TACAR. En presencia de patrón NIU típico no se requiere biopsia quirúrgica. Los corticoides están formalmente contraindicados; la terapia de elección para frenar la progresión son los antifibróticos orales (Nintedanib o Pirfenidona).',
    keyPoints: [
      'Semiología clásica de FPI: estertores crepitantes secos tipo velcro bibasales + acropaquia.',
      'El patrón tomográfico en la TACAR que define a la FPI es la Neumonía Intersticial Usual (NIU) con panal de abejas.',
      'Si la TACAR muestra patrón NIU típico en un paciente > 60 años, NO se requiere biopsia pulmonar.',
      'Trampa de examen: los corticoides y azatioprina están contraindicados en FPI (aumentan la mortalidad).',
      'El tratamiento específico de la FPI son los fármacos antifibróticos: Pirfenidona o Nintedanib.',
    ],
    questions: [
      {
        stem: 'Un paciente de 71 años consulta por disnea de esfuerzo que ha progresado en los últimos 18 meses hasta aparecer al caminar media cuadra, acompañada de tos seca. Al examen físico destacan dedos en palillo de tambor y crepitaciones secas bilaterales en ambas bases pulmonares en velcro. La espirometría muestra una relación VEF1/CVF de 0.84 con CVF del 56% del predicho. La TACAR de tórax muestra patrón de panalización subpleural y basal bilateral sin vidrio esmerilado. ¿Cuál es el diagnóstico más probable y la conducta farmacológica correcta?',
        options: [
          { id: 'A', text: 'Neumonitis por hipersensibilidad; iniciar prednisona oral 1 mg/kg/día' },
          { id: 'B', text: 'Fibrosis Pulmonar Idiopática; contraindicar corticoides e iniciar tratamiento con antifibróticos (ej. nintedanib o pirfenidona)' },
          { id: 'C', text: 'Sarcoidosis pulmonar estadio IV; iniciar metotrexato oral' },
          { id: 'D', text: 'Insuficiencia cardíaca izquierda; indicar furosemida endovenosa' },
          { id: 'E', text: 'EPOC enfisematoso; iniciar broncodilatadores inhalados LAMA + LABA' },
        ],
        correcta: 'B',
        explicacion: 'El paciente reúne la clínica prototípica (varón > 60 años, disnea progresiva, crépitos en velcro, acropaquia) y el patrón tomográfico categórico de Neumonía Intersticial Usual (NIU con panalización subpleural bibasal y bronquiectasias por tracción sin hallazgos alternativos), lo que establece el diagnóstico certero de Fibrosis Pulmonar Idiopática (FPI). En la FPI los corticoides están formalmente contraindicados por aumentar la mortalidad; el tratamiento indicado son los fármacos antifibróticos como el nintedanib o la pirfenidona.',
        recTag: 'Banco de Preguntas Oficial · Enfermedades Pulmonares Intersticiales',
      },
      {
        stem: '¿Cuál de los siguientes fármacos de uso común en cardiología es reconocido como una causa frecuente de toxicidad pulmonar subaguda con patrón intersticial difuso en la tomografía computarizada?',
        options: [
          { id: 'A', text: 'Enalapril' },
          { id: 'B', text: 'Amiodarona' },
          { id: 'C', text: 'Aspirina' },
          { id: 'D', text: 'Atorvastatina' },
          { id: 'E', text: 'Amlodipino' },
        ],
        correcta: 'B',
        explicacion: 'La amiodarona es un antiarrítmico de clase III que se acumula masivamente en el parénquima pulmonar y tejido adiposo, causando toxicidad pulmonar en el 5–10% de los usuarios crónicos. Se manifiesta clínicamente por tos seca, disnea de esfuerzo progresiva e infiltrados intersticiales o alveolares densos bilaterales en la TACAR (debido al alto contenido de yodo del fármaco). El enalapril produce tos seca pero no enfermedad intersticial.',
        recTag: 'Banco de Preguntas Oficial · Enfermedades Pulmonares Intersticiales',
      },
    ],
  },
  {
    id: 'resp-19',
    classId: 'resp-19',
    tier: 3,
    blockNum: 4,
    blockName: 'Oncología Pulmonar, Intersticio y Vascular',
    topicLabel: '4.4',
    title: 'Tromboembolismo Pulmonar (TEP) Agudo: Wells, Ginebra y Estratificación',
    perfilCode: '1.05.1.015, 1.05.2.005',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'No GES',
    reconstrucciones: 'EUNACOM Diciembre 2017 (Q#42) · EUNACOM Julio 2019 (Q#18) · EUNACOM Diciembre 2021 (Q#77) · EUNACOM Julio 2024 (Q#31)',
    frecuencia: 'Máxima · Diagnóstico algorítmico por AngioTAC y trombolisis en TEP masivo',
    svg: null, algoTitle: 'Algoritmo Diagnóstico y Terapéutico en Tromboembolismo Pulmonar Agudo (ESC)',
    diagram: flow('Algoritmo de Manejo del Tromboembolismo Pulmonar Agudo (ESC)', [
      { t: 'Sospecha Clínica de TEP Agudo (Disnea súbita, dolor pleurítico, taquicardia)', s: 'Paso 1: Evaluar Estabilidad Hemodinámica (¿Shock o Hipotensión PAS < 90 mmHg?)' },
      { k: 'split', q: '¿Presenta Inestabilidad Hemodinámica (Shock o PAS < 90 mmHg)?', s: 'Define TEP de Alto Riesgo (Masivo) vs TEP No Alto Riesgo', ll: 'sí (TEP de Alto Riesgo / Masivo)', rl: 'no (hemodinámicamente estable)',
        left: { t: 'Emergencia Vital: AngioTAC urgente o Eco en cama', s: 'Reanimación con volumen cauteloso + Trombolisis sistémica inmediata (Alteplasa 100 mg EV en 2 h)', type: 'warn' },
        right: { t: 'Estratificación con Score de Wells o Ginebra', s: 'Baja probabilidad: Dímero D (VPN 99%) · Alta probabilidad: AngioTAC de tórax directo', type: 'acc' },
        ll: 'inestable (shock)', rl: 'estable' },
      { t: 'Anticoagulación Inmediata en TEP Confirmado / Alta Sospecha', s: 'Anticoagulantes orales directos (Rivaroxabán / Apixabán) o HBPM (Enoxaparina 1 mg/kg c/12h) mínimo 3 a 6 meses', type: 'dec', al: 'anticoagulación', from: 'right' },
    ]),
    contexto: 'El Tromboembolismo Pulmonar (TEP) es la tercera causa de morbimortalidad cardiovascular en el mundo y una de las emergencias de mayor repercusión en el EUNACOM. Es obligatorio dominar el cálculo e interpretación del score de Wells, el alto valor predictivo negativo del Dímero D en probabilidad baja/intermedia, la indicación inmediata de Angio-TAC en alta probabilidad sin perder tiempo con el Dímero D, la estratificación por score sPESI y la trombolisis endovenosa con rtPA en el TEP de alto riesgo con shock hemodinámico.',
    contentSections: [
      {
        subhead: '1. Fisiopatología, Tríada de Virchow y Origen Tromboembólico',
        paragraphs: [
          'El Tromboembolismo Pulmonar resulta de la oclusión mecánica del lecho arterial pulmonar por trombos originados predominantemente en el <strong>sistema venoso profundo de las extremidades inferiores (venas ilíacas, femorales y poplíteas en más del 90% de los casos)</strong>.',
          'La génesis del trombo responde a la <strong>Tríada de Virchow</strong>: 1) Estasis venosa (inmovilización prolongada, viajes largos en avión &gt; 6–8 h, reposo en cama &gt; 3 días); 2) Lesión endotelial (cirugía traumatológica mayor de cadera o rodilla, fracturas, catéteres endovenosos); y 3) Estado de hipercoagulabilidad (cáncer activo con quimioterapia, trombofilias hereditarias como factor V Leiden o mutación de protrombina, síndrome antifosfolípido, terapia estrogénica y anticonceptivos orales combinados).',
        ],
      },
      {
        subhead: '2. Manifestaciones Clínicas y Hallazgos Electrocardiográficos',
        paragraphs: [
          'La presentación clínica cardinal y más común es la <strong>disnea súbita e inexplicable</strong> (&gt; 80%), frecuentemente acompañada de <strong>dolor torácico pleurítico punzante</strong> (por infarto pulmonar periférico en ramas subpleurales), taquipnea (FR &gt; 20 rpm), tos seca y, en casos con necrosis alveolar, hemoptisis escasa. El síncope o la hipotensión arterial marcan TEP masivo con falla de bomba ventricular derecha.',
          '<strong>Electrocardiograma en el TEP:</strong> El hallazgo electrocardiográfico más frecuente es la <strong>taquicardia sinusal aislada</strong> (presente en 40–50%). El patrón clásico de sobrecarga aguda del ventrículo derecho <strong>S1Q3T3 de McGinn-White</strong> (onda S profunda en DI, onda Q e inversión de onda T en DIII) y el bloqueo completo de rama derecha son altamente específicos pero se presentan en menos del 15–20% de los casos, indicando hipertensión pulmonar aguda severa.',
        ],
      },
      {
        subhead: '3. Algoritmo Diagnóstico Escalonado: Scores de Wells y Ginebra, Dímero D y Angio-TAC',
        paragraphs: [
          '<strong>Score de Wells (versión original / simplificada de 3 niveles):</strong><br>' +
          '• Signos clínicos o síntomas de TVP (+3 ptos)<br>' +
          '• Diagnóstico alternativo menos probable que TEP (+3 ptos)<br>' +
          '• Frecuencia cardíaca &gt; 100 lpm (+1.5 ptos)<br>' +
          '• Inmovilización en cama o cirugía mayor en las 4 semanas previas (+1.5 ptos)<br>' +
          '• Antecedente personal documentado de TEP o TVP previa (+1.5 ptos)<br>' +
          '• Hemoptisis (+1 pto) y Cáncer activo en tratamiento o paliativo (+1 pto).',
          '• <strong>Probabilidad Clínica Baja o Intermedia (Wells ≤ 4 puntos):</strong> El examen inicial de elección es el <strong>Dímero D ultrasensible (ELISA)</strong>. Si el Dímero D es negativo (&lt; 500 ug/L ajustado por edad: edad x 10 ug/L en &gt; 50 años), <strong>descarta el diagnóstico de TEP con un Valor Predictivo Negativo &gt; 99%</strong>, evitando radiación y contraste innecesarios. Si resulta positivo, se procede a Angio-TAC.<br>' +
          '• <strong>Probabilidad Clínica Alta (Wells &gt; 4 puntos):</strong> <strong>Está formalmente CONTRAINDICADO solicitar Dímero D</strong>, ya que un valor negativo no posee suficiente fuerza para excluir la enfermedad en este grupo. Se indica directamente <strong>Angio-TAC de arterias pulmonares con contraste endovenoso (Gold Standard clínico)</strong>.',
        ],
      },
      {
        subhead: '4. Estratificación Multidimensional del Riesgo: Score sPESI y Daño de Ventrículo Derecho',
        paragraphs: [
          'Una vez confirmado el TEP, la conducta depende de la estratificación pronóstica:<br>' +
          '• <strong>TEP de Alto Riesgo (Masivo con Inestabilidad Hemodinámica):</strong> Definido por la presencia de <strong>shock obstructivo o hipotensión arterial sostenida (PAS &lt; 90 mmHg o caída de PAS ≥ 40 mmHg durante &gt; 15 minutos</strong> sin hipovolemia ni sepsis). Mortalidad temprana &gt; 15–30%.<br>' +
          '• <strong>TEP No de Alto Riesgo (Hemodinámicamente Estable):</strong> Se estratifica mediante el <strong>Score sPESI (índice de severidad simplificado)</strong>: edad &gt; 80 años (+1), cáncer activo (+1), insuficiencia cardíaca o EPOC crónica (+1), FC ≥ 110 lpm (+1), PAS &lt; 100 mmHg (+1) y SatO₂ &lt; 90% (+1).<br>' +
          '- <em>Bajo Riesgo (sPESI = 0):</em> Mortalidad a 30 días &lt; 1%. Candidatos a hospitalización muy breve o manejo ambulatorio precoz con anticoagulantes directos orales.<br>' +
          '- <em>Riesgo Intermedio (sPESI ≥ 1):</em> Se evalúa disfunción de ventrículo derecho (por ecocardiograma o angio-TAC) y elevación de biomarcadores cardíacos (troponinas ultrasensibles o NT-proBNP). Si ambos son positivos, es <strong>Riesgo Intermedio-Alto</strong> (requiere monitoreo continuo en UCI/UTI por riesgo de descompensación hemodinámica). Si solo uno o ninguno es positivo, es <strong>Riesgo Intermedio-Bajo</strong>.',
        ],
      },
      {
        subhead: '5. Tratamiento de Emergencia: Reperfusión Inmediata y Anticoagulación Escalonada',
        paragraphs: [
          '• <strong>Reperfusión de Emergencia en TEP de Alto Riesgo:</strong> El tratamiento de primera línea que reduce mortalidad es la <strong>Trombolisis Sistémica con Activador Tisular del Plasminógeno Recombinante (rtPA / Alteplasa 100 mg EV infundido en 2 horas</strong>, o bolo rápido de 0.6 mg/kg en 15 min en caso de paro inminente). Si la trombolisis está contraindicada absolutamente (ACV hemorrágico previo, ACV isquémico en 6 meses, hemorragia activa digestiva grave o trauma craneoencefálico mayor reciente), la alternativa es la <strong>embolectomía quirúrgica de rescate o trombectomía percutánea por catéter</strong>.<br>' +
          '• <strong>Anticoagulación en TEP Estable:</strong> Constituye la piedra angular para detener la propagación del trombo y permitir la fibrinólisis endógena. Primera línea recomendada: <strong>Anticoagulantes Orales Directos (ACOD: Rivaroxabán 15 mg cada 12 h por 21 días y luego 20 mg/día, o Apixabán 10 mg cada 12 h por 7 días y luego 5 mg cada 12 h)</strong> en monoterapia oral sin necesidad de heparina previa.<br>' +
          '• Alternativa parenteral: <strong>Heparina de Bajo Peso Molecular (Enoxaparina 1 mg/kg cada 12 horas SC)</strong>, de elección en pacientes con cáncer activo o gestantes, con traslape a antagonistas de vitamina K (Acenocumarol o Warfarina, meta INR 2.0–3.0). Duración: mínimo 3 a 6 meses en eventos provocados por factor de riesgo transitorio, y prolongada indefinida en eventos no provocados recurrentes o cáncer.',
        ],
      },
    ],
    table: {
      title: 'Estratificación de Riesgo y Tratamiento del TEP Agudo (Guías ESC)',
      headers: ['Estrato de Riesgo', 'Hemodinamia', 'Disfunción VD / Troponinas', 'Tratamiento de Elección'],
      rows: [
        ['Alto Riesgo (Masivo)', 'Shock o PAS < 90 mmHg persistente', 'Positivos (compromiso ventricular)', 'Trombolisis sistémica de urgencia (rtPA 100 mg EV)'],
        ['Riesgo Intermedio-Alto', 'Normotenso (estable)', 'VD dilatado en eco Y Troponinas elevadas', 'Anticoagulación plena + Monitorización en UTI'],
        ['Riesgo Intermedio-Bajo', 'Normotenso (estable)', 'Solo 1 positivo (eco o troponinas)', 'Anticoagulación plena en sala general'],
        ['Bajo Riesgo', 'Normotenso (estable)', 'Ambos negativos (eco y troponinas normales)', 'Anticoagulación oral (ACOD) con alta precoz'],
      ],
    },
    severityTable: {
      title: 'Estratificación Pronóstica del TEP: Score de Wells Simplificado y Score sPESI',
      headers: ['Escala / Parámetro Clínico', 'Variables y Puntaje', 'Estratificación', 'Conducta Clínica'],
      rows: [
        ['Wells: TVP / Diagnóstico alternativo', 'Signos clínicos TVP (+3) · Diagnóstico alternativo menos probable (+3)', '> 4 puntos: Alta probabilidad', 'Angio-TAC de tórax directo; NO pedir Dímero D'],
        ['Wells: Factores de riesgo y signos', 'FC > 100 (+1.5) · Cirugía/inmovilización (+1.5) · TEP/TVP previa (+1.5)', '≤ 4 puntos: Probabilidad baja/intermedia', 'Dímero D ultrasensible (VPN > 99%)'],
        ['Score sPESI (Severidad)', 'Edad > 80 a, Cáncer, ICC/EPOC, FC ≥ 110, PAS < 100, SatO2 < 90%', '0 puntos: Bajo riesgo (mortalidad 1%)', 'Manejo ambulatorio precoz con ACODs'],
        ['sPESI ≥ 1 punto', 'Presencia de al menos 1 factor de riesgo del score', '≥ 1 punto: Riesgo intermedio (mortalidad 11%)', 'Hospitalización, evaluar troponinas y ecocardiograma'],
      ],
    },
    treatmentTable: {
      title: 'Protocolo Farmacológico y Selección de Terapias de Reperfusión en TEP Agudo',
      headers: ['Estrato Clínico', 'Intervención de Elección', 'Fármaco y Posología', 'Objetivo / Observación'],
      rows: [
        ['TEP Alto Riesgo (Shock / PAS < 90)', 'Trombolisis sistémica urgente', 'rtPA (Alteplasa) 100 mg EV en 2 h (o 0.6 mg/kg en 15 min)', 'Restaurar perfusión pulmonar y revertir falla de ventrículo derecho'],
        ['TEP Riesgo Intermedio-Alto', 'Anticoagulación parenteral inicial', 'Enoxaparina 1 mg/kg c/12h SC o HNF en infusión continua', 'Monitoreo estricto en UTI; evaluar rescate si deterioro'],
        ['TEP Riesgo Intermedio-Bajo / Bajo', 'Anticoagulación oral directa (ACOD)', 'Rivaroxabán 15 mg c/12h x 21d luego 20 mg/d (o Apixabán)', 'Tratamiento de 1.ª línea sin necesidad de traslape ni control de INR'],
        ['Contraindicación de Anticoagulación', 'Filtro de Vena Cava Inferior (VCI)', 'Filtro recuperable percutáneo vía femoral/yugular', 'Prevenir nuevos émbolos en hemorragia activa mayor'],
      ],
    },
    vignette: 'Mujer de 54 años, operada de artroplastia total de cadera derecha hace 10 días, presenta súbitamente disnea intensa, dolor punzante en hemitórax derecho y taquicardia. Al examen: FR 26 rpm, FC 112 lpm, PA 125/80 mmHg, SatO2 91% ambiental. Al examen físico se aprecia aumento de volumen y dolor en la pantorrilla derecha.',
    explicacion: 'Sospecha de TEP agudo con alta probabilidad clínica según Score de Wells (signos de TVP 3 ptos + cirugía reciente 1.5 ptos + taquicardia 1.5 ptos + TEP como diagnóstico más probable 3 ptos = 9 puntos, Wells alto). La conducta obligatoria es NO solicitar Dímero D y proceder de inmediato a realizar un AngioTAC de arterias pulmonares con contraste, iniciando anticoagulación con Enoxaparina si no hay contraindicaciones.',
    keyPoints: [
      'En probabilidad clínica baja o intermedia de TEP (Wells ≤ 4), el Dímero D negativo descarta la enfermedad con VPN > 99%.',
      'En probabilidad clínica alta de TEP (Wells > 4), está formalmente contraindicado pedir Dímero D; se solicita Angio-TAC directo.',
      'El Angio-TAC de arterias pulmonares con contraste es el estándar de oro imagenológico en la práctica clínica actual.',
      'El TEP de alto riesgo (masivo) se define exclusivamente por inestabilidad hemodinámica (PAS < 90 mmHg o shock obstructivo).',
      'Tratamiento de elección en TEP de alto riesgo con shock: Trombolisis sistémica urgente con rtPA (Alteplasa 100 mg EV en 2 horas).',
      'En TEP hemodinámicamente estable, los Anticoagulantes Orales Directos (Rivaroxabán, Apixabán) son la primera línea terapéutica.',
      'El hallazgo electrocardiográfico más habitual es la taquicardia sinusal; el patrón S1Q3T3 es muy específico pero poco sensible (< 15%).',
      'La duración mínima de la anticoagulación en un primer TEP provocado por un factor transitorio (cirugía, yeso) es de 3 meses.',
    ],
    questions: [
      {
        stem: 'Un paciente de 62 años con antecedente de cáncer de colon en quimioterapia ingresa al servicio de urgencias por disnea súbita de 2 horas de evolución. Al examen físico se encuentra hemodinámicamente inestable: somnoliento, pálido, sudoroso, con PA 75/45 mmHg, FC 126 lpm y SatO2 84% con oxígeno ambiental. El ecocardiograma portátil a la cabecera del paciente muestra dilatación severa del ventrículo derecho con hipocinesia de la pared libre y colapso del ventrículo izquierdo. ¿Cuál es el tratamiento de elección inmediato?',
        options: [
          { id: 'A', text: 'Iniciar infusión de heparina no fraccionada y hospitalizar en sala común' },
          { id: 'B', text: 'Trombolisis endovenosa inmediata con activador tisular del plasminógeno (rtPA / alteplasa)' },
          { id: 'C', text: 'Instalar filtro de vena cava inferior en forma percutánea urgente' },
          { id: 'D', text: 'Administrar 3.000 mL de solución salina fisiológica al 0.9% en bolo rápido' },
          { id: 'E', text: 'Iniciar anticoagulación oral con rivaroxabán a dosis de 15 mg cada 12 horas' },
        ],
        correcta: 'B',
        explicacion: 'El paciente presenta un Tromboembolismo Pulmonar de Alto Riesgo (TEP Masivo), definido por la presencia de hipotensión persistente (PAS < 90 mmHg / shock) secundaria a falla aguda del ventrículo derecho por obstrucción masiva del lecho vascular pulmonar. En ausencia de contraindicaciones absolutas mayores (hemorragia activa intracraneal), la terapia farmacológica salvadora de primera línea es la reperfusión inmediata mediante Trombolisis sistémica (Alteplasa 100 mg EV en 2 h). La sobrecarga agresiva de volumen (D) agrava la falla ventricular derecha.',
        recTag: 'EUNACOM Diciembre 2017 · Reconstrucción oficial',
      },
      {
        stem: 'Una mujer de 28 años, usuaria de anticonceptivos orales combinados, consulta por dolor torácico pleurítico derecho y disnea leve de 24 horas. Al examen: orientada, PA 120/70 mmHg, FC 82 lpm, FR 18 rpm, SatO2 98% ambiental, examen pulmonar normal y extremidades inferiores simétricas sin signos de TVP. Se calcula un score de Wells de 1.5 puntos (baja probabilidad clínica). ¿Cuál es la conducta diagnóstica más costo-efectiva para descartar TEP?',
        options: [
          { id: 'A', text: 'AngioTAC de arterias pulmonares con contraste' },
          { id: 'B', text: 'Cintigrama de ventilación / perfusión (V/Q)' },
          { id: 'C', text: 'Determinación de Dímero D plasmático por técnica ELISA de alta sensibilidad' },
          { id: 'D', text: 'Ecocardiograma transtorácico ambulatorio' },
          { id: 'E', text: 'Arteriografía pulmonar convencional por cateterismo' },
        ],
        correcta: 'C',
        explicacion: 'En pacientes con sospecha de TEP pero con probabilidad clínica baja o intermedia según las escalas validadas (Wells ≤ 4 puntos o Ginebra bajo), la estrategia diagnóstica recomendada por todas las guías de práctica clínica es la medición de Dímero D plasmático de alta sensibilidad. Si el resultado es negativo (< 500 ug/L o ajustado por edad), su excelente Valor Predictivo Negativo (> 99%) permite descartar la enfermedad de forma segura sin irradiar a la paciente con un AngioTAC.',
        recTag: 'EUNACOM Diciembre 2021 · Reconstrucción oficial',
      },
      {
        stem: 'Un paciente de 66 años es operado por una fractura de cadera izquierda. Al cuarto día postoperatorio presenta disnea de inicio súbito y dolor torácico en puntada de costado derecho. Al examen: PA 130/80 mmHg, FC 105 lpm, FR 24 rpm, SatO2 91% ambiental. El examen pulmonar es normal y no hay signos focales de TVP en las extremidades. ¿Cuál es el examen diagnóstico de elección para confirmar o descartar la sospecha clínica?',
        options: [
          { id: 'A', text: 'Ecocardiograma transesofágico urgente' },
          { id: 'B', text: 'Dímero D plasmático por técnica cuantitativa' },
          { id: 'C', text: 'Angio-TAC de arterias pulmonares con contraste' },
          { id: 'D', text: 'Radiografía de tórax póstero-anterior y lateral' },
          { id: 'E', text: 'Cintigrama pulmonar de ventilación/perfusión' },
        ],
        correcta: 'C',
        explicacion: 'En un paciente con factores de riesgo mayores (cirugía ortopédica mayor reciente de cadera) que presenta disnea súbita y dolor pleurítico, la sospecha diagnóstica principal es un Tromboembolismo Pulmonar Agudo (TEP). Dado que el paciente presenta una probabilidad clínica intermedia a alta por el score de Wells (cirugía reciente 1.5 ptos + taquicardia 1.5 ptos + TEP como diagnóstico más probable 3 ptos = 6 puntos, alta probabilidad), la conducta diagnóstica de elección y con mayor rendimiento es el Angio-TAC de tórax con contraste intravenoso. El Dímero D no está indicado porque un resultado positivo no confirma el cuadro en el postoperatorio (estará falsamente elevado por la cirugía) y un resultado negativo no es suficiente en alta probabilidad.',
        recTag: 'EUNACOM Julio 2019 · Reconstrucción oficial',
      },
      {
        stem: '¿Cuál es la manifestación electrocardiográfica más común en un paciente cursando un tromboembolismo pulmonar agudo no masivo?',
        options: [
          { id: 'A', text: 'Patrón de sobrecarga aguda de ventrículo derecho S1Q3T3 de McGinn-White' },
          { id: 'B', text: 'Taquicardia sinusal aislada' },
          { id: 'C', text: 'Bloqueo completo de rama derecha de nueva aparición' },
          { id: 'D', text: 'Inversión asimétrica de ondas T en derivaciones precordiales V1 a V4' },
          { id: 'E', text: 'Fibrilación auricular con respuesta ventricular rápida' },
        ],
        correcta: 'B',
        explicacion: 'La alteración electrocardiográfica más frecuente en el TEP agudo es la taquicardia sinusal aislada, presente en más del 40–50% de los trazados (incluso un ECG normal o solo con taquicardia sinusal es el hallazgo más habitual). El patrón S1Q3T3 (onda S profunda en DI, onda Q patológica en DIII e inversión de onda T en DIII) y el bloqueo completo de rama derecha son signos clásicos de sobrecarga y cor pulmonale agudo, pero son muy poco sensibles (< 15–20% de los casos) y se asocian habitualmente a TEP masivo o submasivo severo.',
        recTag: 'EUNACOM Julio 2024 · Reconstrucción oficial',
      },
    ],
  },
  {
    id: 'resp-20',
    classId: 'resp-20',
    tier: 2,
    blockNum: 4,
    blockName: 'Oncología Pulmonar, Intersticio y Vascular',
    topicLabel: '4.5',
    title: 'Hemoptisis y Bronquiectasias',
    perfilCode: '1.05.1.004, 1.05.1.019, 1.05.2.007',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'No GES',
    reconstrucciones: '',
    frecuencia: 'Alta · Manejo de vía aérea en hemoptisis amenazante y diagnóstico de bronquiectasias por TACAR',
    svg: null, algoTitle: 'Algoritmo de Priorización y Manejo de la Hemoptisis Amenazante (Masiva)',
    diagram: flow('Algoritmo de Manejo de la Hemoptisis Amenazante', [
      { t: 'Evaluación Inicial: Volumen y Riesgo de Asfixia', s: 'Hemoptisis Amenazante (> 150-200 mL/h o > 500 mL/24h o compromiso de la vía aérea)' },
      { k: 'split', q: '¿Presenta Riesgo de Asfixia o Sangrado Masivo?', s: 'La principal causa de muerte es la ASFIXIA, no la exanguinación hipovolémica', ll: 'sí (amenazante)', rl: 'no (leve a moderada)',
        left: { t: 'Medidas de Protección de Vía Aérea Inmediatas', s: 'Decúbito lateral sobre lado sangrante + O2 + Intubación con tubo orotraqueal amplio (≥ 8.0 Fr)', type: 'warn' },
        right: { t: 'Estudio Etiológico Ambulatorio / Sala', s: 'TAC de tórax con contraste + Fibrobroncoscopía diagnóstica programada', type: 'acc' },
        ll: 'amenazante (asfixia)', rl: 'estable (< 100 mL)' },
      { t: 'Tratamiento Definitivo de Hemoptisis Grave', s: 'Embolización de Arterias Bronquiales por Angiografía Intervencional (éxito > 90%) · Cirugía si fracasa', type: 'dec', al: 'embolización', from: 'left' },
    ]),
    contexto: 'La hemoptisis es un síntoma de alarma cardinal. El EUNACOM exige diferenciar el origen arterial bronquial (90% del sangrado masivo) de la circulación pulmonar, priorizar la protección de la vía aérea colocando al paciente en decúbito sobre el lado afecto para evitar la inundación del pulmón sano, y diagnosticar bronquiectasias mediante TACAR.',
    contentSections: [
      {
        subhead: '1. Definición, Severidad y Fisiopatología Vascular',
        paragraphs: [
          'La hemoptisis es la expectoración de sangre proveniente del árbol traqueobronquial o parénquima pulmonar por debajo de la glotis. Se debe diferenciar de la hematemesis (sangre oscura, pH ácido con vómitos) y epistaxis posterior.',
          '<strong>Circulación responsable:</strong> En el 90% de los casos de hemoptisis masiva el sangrado proviene de la <strong>circulación arterial bronquial</strong> (ramas sistémicas de la aorta a alta presión), y solo en el 10% de la arteria pulmonar (baja presión).',
          '<strong>Hemoptisis Amenazante (Masiva):</strong> Se define por el volumen (<strong>&gt; 150–200 mL en una hora</strong> o <strong>&gt; 500–600 mL en 24 horas</strong>) o por cualquier volumen que provoque <strong>obstrucción de la vía aérea, hipoxemia severa o inestabilidad hemodinámica</strong>.',
        ],
      },
      {
        subhead: '2. Manejo de Emergencia de la Hemoptisis Amenazante',
        paragraphs: [
          '<strong>Regla de oro absoluta EUNACOM:</strong> En la hemoptisis masiva la principal causa de muerte es la <strong>asfixia por inundación alveolar</strong>, no el shock hipovolémico.',
          '<strong>Conducta inmediata en reanimación:</strong><br>' +
          '1. <strong>Posición de seguridad: Decúbito lateral hacia el lado afecto</strong> (lado sospechoso abajo), para evitar que la sangre escurra por gravedad y ahogue el pulmón contralateral sano.<br>' +
          '2. Vía aérea permeable: Oxigenoterapia y preparación para intubación orotraqueal con <strong>tubo grueso (calibre ≥ 8.0–8.5 mm)</strong> que permita paso de broncoscopio rígido o flexible para aspirar coágulos.<br>' +
          '3. <strong>Procedimiento de elección para control hemostático:</strong> <strong>Arteriografía con Embolización de Arterias Bronquiales</strong> (tasa de éxito inicial &gt; 90%). La cirugía de resección se reserva para fracaso de embolización en pacientes con sangrado unilateral.',
        ],
      },
      {
        subhead: '3. Bronquiectasias: Clínica, Diagnóstico y Tratamiento',
        paragraphs: [
          'Son dilataciones anormales, irreversibles y permanentes de los bronquios de mediano calibre secundarias a un ciclo vicioso de infección e inflamación crónica con destrucción del componente elástico y muscular.',
          '<strong>Causas principales:</strong> Secuelas de tuberculosis e infecciones graves infantiles (sarampión, coqueluche), fibrosis quística, discinesia ciliar primaria e inmunodeficiencias.',
          '<strong>Clínica:</strong> <strong>Tos crónica con expectoración purulenta abundante diaria ("broncorrea")</strong> de meses o años de evolución, infecciones respiratorias a repetición y hemoptisis recurrente.',
          '<strong>Diagnóstico de elección:</strong> <strong>TACAR de tórax</strong>. Hallazgo patognomónico: <strong>Signo del anillo de sello</strong> (diámetro del bronquio mayor al de la arteria acompañante) y falta de afilamiento bronquial periférico (signo del riel de tranvía). Manejo: kinesioterapia respiratoria, antibióticos en exacerbaciones y vacuna antiinfluenza y antineumocócica.',
        ],
      },
    ],
    table: {
      title: 'Diagnóstico Diferencial: Hemoptisis vs Hematemesis',
      headers: ['Característica', 'Hemoptisis', 'Hematemesis'],
      rows: [
        ['Mecanismo de expulsión', 'Tos y carraspeo', 'Náuseas y vómitos'],
        ['Color y aspecto', 'Rojo rutilante brillante, espumosa', 'Rojo oscuro, pardo ("concho de café"), no espumosa'],
        ['pH químico', 'Alcalino', 'Ácido'],
        ['Contenido asociado', 'Mucus respiratorio, macrófagos alveolares', 'Restos alimentarios'],
        ['Pródromos', 'Cosquilleo laringofaríngeo, opresión torácica', 'Dolor epigástrico, náuseas'],
        ['Etiologías comunes', 'Bronquiectasias, Cáncer, TBC, Aspergiloma', 'Úlcera péptica, Várices esofágicas, Mallory-Weiss'],
      ],
    },
    vignette: 'Mujer de 48 años con historia desde la juventud de tos diaria con expectoración purulenta abundante (más de media taza al día) y neumonías a repetición. Consulta en urgencias por expectoración de 200 mL de sangre fresca roja rutilante con coágulos en 30 minutos. Al examen: FR 28 rpm, FC 110 lpm, SatO2 89% ambiental. La auscultación revela abundantes estertores húmedos y gorgoteo en el hemitórax izquierdo.',
    explicacion: 'Hemoptisis amenazante en paciente con bronquiectasias sobreinfectadas. La prioridad inmediata e impostergable es asegurar la vía aérea y evitar la asfixia por inundación del pulmón derecho: colocar a la paciente en decúbito lateral izquierdo (lado sangrante hacia abajo), aportar oxígeno de alto flujo, solicitar reserva de hemoderivados y coordinar de urgencia fibrobroncoscopía rígida y arteriografía con embolización de arterias bronquiales.',
    keyPoints: [
      'En la hemoptisis masiva la causa de muerte es la asfixia por inundación alveolar, no el shock hemorrágico.',
      'Medida postural inmediata: decúbito lateral sobre el lado que sangra para proteger el pulmón sano de la aspiración.',
      'El 90% de las hemoptisis masivas proviene de las arterias bronquiales sistémicas a alta presión.',
      'El procedimiento intervencional de elección para detener el sangrado es la embolización arterial bronquial.',
      'El examen de elección para confirmar bronquiectasias es la TACAR, que muestra el "signo del anillo de sello".',
    ],
    questions: [
      {
        stem: 'Un paciente de 56 años con antecedente de secuela de tuberculosis pulmonar en el lóbulo superior derecho consulta por una hemoptisis masiva de aproximadamente 300 mL de sangre rutilante en 45 minutos. Presenta taquipnea, desaturación y gorgoteo bronquial audible. ¿Cuál es la primera medida postural y de soporte que se debe indicar de inmediato mientras se prepara la intubación y la fibrobroncoscopía?',
        options: [
          { id: 'A', text: 'Posición de Trendelenburg con cabeza baja a 30 grados' },
          { id: 'B', text: 'Decúbito lateral derecho (lado sangrante hacia abajo) y oxigenoterapia a alto flujo' },
          { id: 'C', text: 'Decúbito lateral izquierdo estricto para favorecer el drenaje' },
          { id: 'D', text: 'Posición sentada ortopneica con compresión torácica bimanual' },
          { id: 'E', text: 'Posición genupectoral' },
        ],
        correcta: 'B',
        explicacion: 'En una hemoptisis amenazante la causa principal de muerte es la asfixia por inundación de sangre en las zonas alveolares ventiladas. La medida física obligatoria de rescate es colocar al paciente en decúbito lateral hacia el lado donde se ubica la lesión sangrante (en este caso el hemitórax derecho). De esta forma, la gravedad mantiene la sangre acumulada en el pulmón afecto y previene que el sangrado atraviese la carina traqueal e inunde el pulmón contralateral sano, preservando el intercambio gaseoso.',
        recTag: 'Banco de Preguntas Oficial · Hemoptisis y Bronquiectasias',
      },
      {
        stem: '¿Cuál es el examen imagenológico de referencia (gold standard) para el diagnóstico de certeza y la evaluación anatómica de las bronquiectasias pulmonares?',
        options: [
          { id: 'A', text: 'Radiografía de tórax póstero-anterior y lateral' },
          { id: 'B', text: 'Tomografía computarizada de tórax de alta resolución (TACAR)' },
          { id: 'C', text: 'Broncografía con contraste yodado soluble' },
          { id: 'D', text: 'Resonancia nuclear magnética pulmonar con gadolinio' },
          { id: 'E', text: 'Gammagrafía pulmonar con galio-67' },
        ],
        correcta: 'B',
        explicacion: 'La Tomografía Computarizada de Alta Resolución (TACAR) de tórax sin contraste es el examen de elección y estándar de oro para confirmar bronquiectasias, desplazando por completo a la antigua broncografía. Permite visualizar con nitidez milimétrica la dilatación anormal de la luz bronquial en relación a su vaso adyacente (signo del anillo de sello), el engrosamiento de las paredes bronquiales y la ausencia del afilamiento fisiológico periférico.',
        recTag: 'Banco de Preguntas Oficial · Hemoptisis y Bronquiectasias',
      },
    ],
  },
];

module.exports = { bloque4 };
