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

const bloque3 = [
  {
    id: 'resp-11',
    classId: 'resp-11',
    tier: 3,
    blockNum: 3,
    blockName: 'Patología Pleural y Urgencias Torácicas',
    topicLabel: '3.1',
    title: 'Derrame Pleural: Diagnóstico Diferencial y Criterios de Light',
    perfilCode: '1.05.1.010',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'No GES',
    reconstrucciones: '',
    frecuencia: 'Máxima · Los Criterios de Light se preguntan en casi todas las convocatorias',
    svg: null, algoTitle: 'Algoritmo de Estudio del Líquido Pleural mediante Criterios de Light',
    diagram: flow('Algoritmo de Estudio del Líquido Pleural (Criterios de Light)', [
      { t: 'Toracocentesis Diagnóstica (Espesor > 10 mm en Rx/Eco)', s: 'Medir Proteínas y LDH en líquido pleural y en suero simultáneo' },
      { k: 'split', q: '¿Cumple ≥ 1 Criterio de Light? (Prot LP/S > 0.5 · LDH LP/S > 0.6 · LDH LP > 2/3 LSN)', s: 'Sensibilidad 98% para distinguir Exudado de Trasudado', ll: 'ningún criterio (trasudado)', rl: '≥ 1 criterio (exudado)',
        left: { t: 'Trasudado Sistémico Puro', s: 'Causa: Insuficiencia Cardíaca Congestiva (la más frecuente), Cirrosis (hidrotórax), Síndrome Nefrótico', type: 'acc' },
        right: { t: 'Exudado Inflamatorio Local', s: 'Estudio de 2ª línea: Glucosa, pH, celularidad diferencial, ADA, citología neoplásica y cultivos', type: 'warn' } },
      { t: 'Diagnóstico de Exudado Linfocítico Mononuclear', s: 'Si Linfocitos > 50%: Orientar a Tuberculosis Pleural (ADA > 40 U/L) o Neoplasia / Derrame Maligno', type: 'dec', al: 'fórmula diferencial', from: 'right' },
    ]),
    contexto: 'El enfrentamiento sistemático del derrame pleural es una piedra angular de la medicina interna. El EUNACOM exige la aplicación rigurosa de los Criterios de Light para separar exudados de trasudados, la identificación de las causas sistémicas vs locales y la sospecha de TBC o cáncer ante un exudado linfocítico.',
    contentSections: [
      {
        subhead: '1. Sospecha Clínica, Semiología y Confirmación Radiológica',
        paragraphs: [
          'La semiología clásica del derrame pleural se caracteriza por: <strong>inspección con amplexión disminuida</strong>, palpación con <strong>abolición de las vibraciones vocales</strong>, percusión con <strong>matidez hídrica con curva parabólica de Damoiseau</strong> y auscultación con <strong>abolición del murmullo pulmonar</strong> y eventual soplo pleurítico o egofonía en el límite superior.',
          'La radiografía de tórax de pie detecta derrames &gt; 150–200 mL (borramiento del ángulo costofrénico). La <strong>ecografía torácica</strong> es el examen más sensible (detecta desde 20 mL) y es el estándar de seguridad para guiar la toracocentesis.',
        ],
      },
      {
        subhead: '2. Criterios de Light: Separación Exudado vs Trasudado',
        paragraphs: [
          'La <strong>toracocentesis diagnóstica</strong> está indicada en todo derrame pleural de causa no clara con espesor &gt; 10 mm en ecografía o radiografía en decúbito lateral. Se clasifica como <strong>EXUDADO</strong> si cumple <strong>al menos UNO</strong> de los tres criterios de Light:<br>' +
          '1. <strong>Relación Proteínas Líquido Pleural / Proteínas Suero &gt; 0.5</strong>.<br>' +
          '2. <strong>Relación LDH Líquido Pleural / LDH Suero &gt; 0.6</strong>.<br>' +
          '3. <strong>LDH del Líquido Pleural &gt; 2/3 del límite superior normal del suero</strong> (habitualmente &gt; 200 U/L).',
          'Si no cumple NINGUNO de los tres, se cataloga como <strong>TRASUDADO</strong>.',
        ],
      },
      {
        subhead: '3. Diagnóstico Etiológico del Líquido Pleural',
        paragraphs: [
          '<strong>Trasudados:</strong> Se deben a alteración de presiones hidrostáticas o coloidosmóticas sistémicas. Causa más común: <strong>Insuficiencia cardíaca congestiva</strong> (típicamente bilateral), seguida de cirrosis hepática con ascitis y síndrome nefrótico. Manejo: tratar la enfermedad de base (diuréticos). No requiere estudio invasivo.',
          '<strong>Exudados:</strong> Se deben a permeabilidad capilar aumentada local. Causas más frecuentes: <strong>paraneumónico</strong> (neutrofílico), <strong>neoplásico</strong> (linfocítico) y <strong>tuberculoso</strong> (linfocítico con ADA &gt; 40 U/L).',
        ],
      },
    ],
    table: {
      title: 'Criterios de Light y Características Diferenciales del Líquido Pleural',
      headers: ['Parámetro Analítico', 'Trasudado Pleural', 'Exudado Pleural', 'Comentario EUNACOM'],
      rows: [
        ['Mecanismo principal', 'Aumento presión hidrostática o baja coloidosmótica', 'Aumento de permeabilidad microvascular pleural', 'El trasudado no daña la pleura'],
        ['Proteínas LP / Proteínas Suero', '≤ 0.5', '> 0.5', 'Basta 1 criterio positivo para exudado'],
        ['LDH LP / LDH Suero', '≤ 0.6', '> 0.6', 'Muy sensible para inflamación activa'],
        ['LDH absoluta LP', '≤ 2/3 límite normal sérico', '> 2/3 límite normal sérico', 'Habitualmente > 200 U/L en exudados'],
        ['Causas habituales', 'Insuficiencia cardíaca, Cirrosis, Nefrótico', 'Paraneumónico, Cáncer, Tuberculosis, TEP', 'El TEP puede dar exudado o trasudado'],
      ],
    },
    vignette: 'Hombre de 64 años con antecedente de tabaquismo y baja de peso consulta por disnea progresiva y dolor sordo en hemitórax izquierdo. La radiografía confirma un derrame pleural izquierdo moderado. Se realiza toracocentesis: líquido amarillo cetrino, proteínas en líquido 4.2 g/dL (proteínas plasmáticas 6.8 g/dL), LDH pleural 380 U/L (LDH plasmática 240 U/L, límite superior normal sérico 250 U/L).',
    explicacion: 'El análisis muestra: Relación Proteínas LP/Suero = 4.2 / 6.8 = 0.62 (> 0.5) y Relación LDH LP/Suero = 380 / 240 = 1.58 (> 0.6). Cumple criterios de Light para Exudado Pleural. Por tratarse de un adulto fumador con síndrome consuntivo, la conducta inmediata es el estudio citológico y biopsia pleural para descartar etiología neoplásica.',
    keyPoints: [
      'Basta cumplir UN SOLO criterio de Light para certificar que el líquido pleural es un Exudado.',
      'Los tres criterios de Light: Prot LP/S > 0.5, LDH LP/S > 0.6, y LDH LP > 2/3 del límite normal sérico.',
      'La causa más frecuente de trasudado pleural es la insuficiencia cardíaca descompensada.',
      'Las tres causas más frecuentes de exudado son el derrame paraneumónico, el cáncer y la tuberculosis.',
      'Trampa: el tromboembolismo pulmonar (TEP) puede presentarse tanto como trasudado como exudado (frecuentemente serohemático).',
    ],
    questions: [
      {
        stem: 'Se realiza una toracocentesis a un paciente de 70 años hospitalizado por disnea en estudio que presenta derrame pleural derecho. Los resultados del líquido pleural y sérico simultáneo arrojan: Proteínas en líquido pleural 2.1 g/dL, Proteínas en suero 6.4 g/dL; LDH en líquido pleural 90 U/L, LDH en suero 210 U/L (límite superior normal de LDH sérica: 200 U/L). ¿Cuál es la clasificación del líquido pleural y la etiología más probable?',
        options: [
          { id: 'A', text: 'Exudado; empiema paraneumónico' },
          { id: 'B', text: 'Exudado; adenocarcinoma metastásico' },
          { id: 'C', text: 'Trasudado; insuficiencia cardíaca congestiva o cirrosis descompensada' },
          { id: 'D', text: 'Exudado; pleuritis lúpica' },
          { id: 'E', text: 'Quilotórax traumático' },
        ],
        correcta: 'C',
        explicacion: 'Aplicando los Criterios de Light: Relación Proteínas LP/S = 2.1 / 6.4 = 0.32 (es ≤ 0.5); Relación LDH LP/S = 90 / 210 = 0.42 (es ≤ 0.6); y LDH pleural 90 U/L es inferior a los 2/3 del límite superior sérico (2/3 de 200 = 133 U/L). Al no cumplir ninguno de los tres criterios, se clasifica de forma concluyente como TRASUDADO. La causa más habitual de trasudado en el adulto mayor es la insuficiencia cardíaca congestiva o la hipertensión portal cirrótica.',
        recTag: 'Banco de Preguntas Oficial · Derrame Pleural y Criterios de Light',
      },
      {
        stem: '¿Cuál de los siguientes hallazgos al examen físico pulmonar es característico de un derrame pleural moderado a severo en la base pulmonar comprometida?',
        options: [
          { id: 'A', text: 'Aumento de las vibraciones vocales y timpanismo marcado' },
          { id: 'B', text: 'Disminución de las vibraciones vocales, matidez a la percusión y abolición del murmullo vesicular' },
          { id: 'C', text: 'Resonancia vocal incrementada (broncofonía) con estertores húmedos bilaterales' },
          { id: 'D', text: 'Frote pericárdico con murmullo pulmonar conservado' },
          { id: 'E', text: 'Sonoridad pulmonar aumentada con respiración ruda y sibilancias difusas' },
        ],
        correcta: 'B',
        explicacion: 'El síndrome de derrame pleural interpone una capa líquida entre el pulmón y la pared torácica, lo que bloquea la transmisión del sonido y altera la resonancia. Por ello genera la tríada semiológica patognomónica: (1) Abolición o disminución marcada de las vibraciones vocales táctiles, (2) Matidez hídrica franca a la percusión (sin resonancia aérea), y (3) Abolición o disminución extrema del murmullo pulmonar a la auscultación.',
        recTag: 'Banco de Preguntas Oficial · Derrame Pleural y Criterios de Light',
      },
    ],
  },
  {
    id: 'resp-12',
    classId: 'resp-12',
    tier: 3,
    blockNum: 3,
    blockName: 'Patología Pleural y Urgencias Torácicas',
    topicLabel: '3.2',
    title: 'Derrame Paraneumónico y Empiema Pleural',
    perfilCode: '1.05.1.011, 1.05.1.012',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'No GES',
    reconstrucciones: '',
    frecuencia: 'Máxima · Criterios bioquímicos estrictos de instalación de tubo de drenaje pleural',
    svg: null, algoTitle: 'Algoritmo de Decisión de Drenaje Pleural en Derrame Paraneumónico',
    diagram: flow('Algoritmo de Manejo de Derrame Paraneumónico y Empiema', [
      { t: 'Neumonía con Derrame Pleural Asociado en Rx o Ecografía', s: 'Realizar Toracocentesis Diagnóstica inmediata si derrame > 10 mm' },
      { k: 'split', q: '¿Cumple Criterios de Derrame Complicado o Empiema?', s: 'Pus franco · Tinción Gram/Cultivo (+) · pH < 7.20 · Glucosa < 40-60 · LDH > 1000', ll: 'no (no complicado)', rl: 'sí (complicado o empiema)',
        left: { t: 'Tratamiento Médico Exclusivo', s: 'Antibióticos EV para NAC · Mantener vigilancia clínica y ecográfica · No requiere tubo de drenaje', type: 'acc' },
        right: { t: 'Tubo de Drenaje Pleural Inmediato (TDT)', s: 'Pleurostomía cerrada conectada a trampa de agua · Antibióticos EV · Si loculado: Fibrinolíticos o videotoracoscopía (VATS)', type: 'warn' } },
      { t: 'Criterio de Cirugía (VATS / Decorticación Pleural)', s: 'Falla de drenaje por loculaciones múltiples, persistencia de sepsis a las 48-72 h o engrosamiento pleural fibroso', type: 'dec', al: 'decorticación', from: 'right' },
    ]),
    contexto: 'Hasta el 40% de los pacientes hospitalizados con neumonía desarrollan derrame paraneumónico. La distinción entre un derrame no complicado y uno complicado/empiema es una de las preguntas de mayor discriminación en el EUNACOM, ya que define la necesidad impostergable de instalar un tubo de drenaje pleural cerrado para evitar la sepsis pleural irreversible.',
    contentSections: [
      {
        subhead: '1. Fases Fisiopatológicas del Derrame Paraneumónico',
        paragraphs: [
          'Se distinguen 3 etapas evolutivas continuas:<br>' +
          '1. <strong>Fase Exudativa (No Complicado):</strong> Líquido estéril seroso con neutrófilos, pH &gt; 7.20, glucosa normal (&gt; 60 mg/dL) y LDH baja (&lt; 1.000 U/L). Resuelve solo con antibióticos para la neumonía.<br>' +
          '2. <strong>Fase Fibrinopurulenta (Complicado):</strong> Invasión bacteriana al espacio pleural con consumo de glucosa y metabolismo anaerobio: <strong>pH &lt; 7.20, Glucosa &lt; 40–60 mg/dL y LDH &gt; 1.000 U/L</strong>. Comienza el depósito de fibrina y tabicación.<br>' +
          '3. <strong>Fase Organizativa (Empiema Crónico):</strong> Proliferación de fibroblastos que forman una corteza pleural rígida (peel) que atrapa el pulmón e impide su reexpansión.',
        ],
      },
      {
        subhead: '2. Definición Estricta de Empiema y Criterios de Drenaje',
        paragraphs: [
          'El <strong>Empiema</strong> se define estrictamente por la presencia de <strong>líquido purulento macroscópico franco</strong>, O la presencia de <strong>bacterias en la tinción de Gram o cultivo del líquido pleural</strong>.',
          '<strong>Criterios obligatorios de instalación de Tubo de Drenaje Torácico (TDT):</strong><br>' +
          '• Aspecto purulento franco (Empiema macroscópico).<br>' +
          '• Tinción de Gram positiva o Cultivo bacteriano positivo.<br>' +
          '• <strong>pH del líquido pleural &lt; 7.20</strong> (el marcador bioquímico individual más preciso).<br>' +
          '• <strong>Glucosa en líquido pleural &lt; 40–60 mg/dL</strong>.<br>' +
          '• <strong>LDH en líquido pleural &gt; 1.000 U/L</strong>.<br>' +
          '• Presencia de tabiques o loculaciones en la ecografía torácica.',
        ],
      },
      {
        subhead: '3. Manejo Terapéutico y Escalamiento Quirúrgico',
        paragraphs: [
          'El tratamiento del derrame complicado y empiema se basa en dos pilares simultáneos: 1) <strong>Antibioticoterapia EV prolongada</strong> con excelente cobertura contra anaerobios y flora respiratoria (Ampicilina/Sulbactam 1.5–3 g c/6 h EV o Ceftriaxona + Metronidazol) por 2 a 4 semanas; y 2) <strong>Drenaje pleural completo e inmediato mediante pleurostomía con tubo de drenaje</strong>.',
          'Si el derrame está multiloculado y no drena por el tubo, se indica <strong>instilación intrapleural de fibrinolíticos (Alteplasa/Dornasa alfa)</strong> o <strong>Videotoracoscopía asistida (VATS)</strong> con debridamiento precoz. Si hay corteza organizada establecida, se requiere toracotomía abierta y decorticación pleural.',
        ],
      },
    ],
    table: {
      title: 'Diagnóstico Diferencial Bioquímico del Derrame Paraneumónico',
      headers: ['Parámetro', 'Paraneumónico No Complicado', 'Paraneumónico Complicado', 'Empiema Pleural'],
      rows: [
        ['Aspecto macroscópico', 'Claro o turbio seroso', 'Turbio espeso', 'Purulento franco (pus macroscópico)'],
        ['pH pleural', '> 7.20', '< 7.20', '< 7.10 - 7.20'],
        ['Glucosa pleural', '> 60 mg/dL', '< 40 - 60 mg/dL', '< 40 mg/dL (frecuentemente 0-20)'],
        ['LDH pleural', '< 1.000 U/L', '> 1.000 U/L', '> 1.000 U/L (frecuente > 3.000)'],
        ['Tinción Gram / Cultivo', 'Negativos', 'Negativos o positivos', 'Positivos en > 70%'],
        ['Conducta EUNACOM', 'Solo antibióticos EV', 'Tubo de Drenaje Pleural Inmediato', 'Tubo de Drenaje Pleural Inmediato'],
      ],
    },
    vignette: 'Hombre de 49 años hospitalizado por neumonía basal derecha en tratamiento con ceftriaxona EV. Al 4.º día persiste con fiebre de 38.7 °C, dolor torácico pleurítico y leucocitosis en ascenso. La ecografía torácica muestra un derrame pleural derecho tabicado de 40 mm. Se efectúa toracocentesis: líquido turbio, pH 7.08, glucosa 28 mg/dL, LDH 2.450 U/L, Gram pendiente.',
    explicacion: 'Derrame paraneumónico complicado: presencia de fiebre persistente bajo antibioterapia adecuada asociado a criterios bioquímicos categóricos de complicación en el líquido pleural (pH < 7.20, glucosa < 40 mg/dL, LDH > 1.000 U/L) y tabicaciones ecográficas. La conducta obligatoria e inmediata es la instalación de un Tubo de Drenaje Torácico (pleurostomía) conectado a trampa de agua, sin esperar el resultado del cultivo.',
    keyPoints: [
      'Un pH < 7.20 en líquido pleural paraneumónico es indicación absoluta de tubo de drenaje torácico.',
      'Criterios de drenaje obligatorio: Pus franco, Gram/Cultivo (+), pH < 7.20, Glucosa < 40-60 mg/dL o LDH > 1.000 U/L.',
      'El derrame paraneumónico no complicado (pH > 7.20, glucosa normal) se maneja únicamente con antibióticos.',
      'El antibiótico en empiema debe cubrir anaerobios orales (Ampicilina/Sulbactam o Ceftriaxona + Metronidazol).',
      'Trampa: nunca esperar el resultado bacteriológico de cultivos para indicar pleurostomía si los parámetros bioquímicos (pH, glucosa) están alterados.',
    ],
    questions: [
      {
        stem: 'Un paciente de 52 años cursa el tercer día de tratamiento con ampicilina/sulbactam por una neumonía del lóbulo inferior izquierdo. Se encuentra febril (38.6 °C) y con dolor pleurítico persistente. La radiografía de control muestra aparición de un derrame pleural que ocupa un tercio del hemitórax izquierdo. La toracocentesis diagnóstica obtiene un líquido turbio no francamente purulento, con pH 7.12, glucosa 32 mg/dL y LDH 1.800 U/L. ¿Cuál es la conducta médica más indicada?',
        options: [
          { id: 'A', text: 'Mantener el mismo antibiótico endovenoso y repetir la radiografía en 7 días' },
          { id: 'B', text: 'Instalación urgente de tubo de drenaje torácico (pleurostomía) con trampa de agua' },
          { id: 'C', text: 'Rotar el antibiótico a ciprofloxacino oral ambulatorio' },
          { id: 'D', text: 'Realizar punción evacuadora con jeringa de 50 mL día por medio' },
          { id: 'E', text: 'Indicar reposo y analgésicos no esteroidales sin invadir la cavidad' },
        ],
        correcta: 'B',
        explicacion: 'El paciente presenta un derrame paraneumónico complicado demostrado por acidosis pleural significativa (pH 7.12 < 7.20), consumo grave de glucosa (32 mg/dL < 40 mg/dL) y LDH muy elevada (1.800 U/L > 1.000 U/L). Estos parámetros certifican la invasión bacteriana y acidosis del espacio pleural. La única conducta que previene la formación de un empiema multiloculado y sepsis pleural irreversible es la instalación inmediata de un tubo de drenaje pleural cerrado.',
        recTag: 'Banco de Preguntas Oficial · Derrame Paraneumónico y Empiema',
      },
      {
        stem: '¿Cuál es el parámetro bioquímico más sensible y precoz en el análisis del líquido pleural para decidir la necesidad de drenaje torácico cerrado en un derrame paraneumónico?',
        options: [
          { id: 'A', text: 'Nivel de hematocrito en líquido pleural' },
          { id: 'B', text: 'Medición de pH del líquido pleural mediante gases arteriales' },
          { id: 'C', text: 'Recuento absoluto de glóbulos rojos' },
          { id: 'D', text: 'Nivel de triglicéridos pleurales' },
          { id: 'E', text: 'Nivel de amilasa en líquido pleural' },
        ],
        correcta: 'B',
        explicacion: 'El pH del líquido pleural (medido cuidadosamente en jeringa heparinizada de gases en sangre) es el parámetro bioquímico individual con mayor sensibilidad y valor pronóstico para identificar derrames paraneumónicos complicados. Un pH < 7.20 refleja un metabolismo anaeróbico bacteriano masivo con acúmulo de ácido láctico, definiendo de forma precoz la necesidad de pleurostomía incluso antes de que descienda la glucosa o se reporte el cultivo.',
        recTag: 'Banco de Preguntas Oficial · Derrame Paraneumónico y Empiema',
      },
    ],
  },
  {
    id: 'resp-13',
    classId: 'resp-13',
    tier: 2,
    blockNum: 3,
    blockName: 'Patología Pleural y Urgencias Torácicas',
    topicLabel: '3.3',
    title: 'Neumotórax Espontáneo Primario y Secundario',
    perfilCode: '1.05.1.031',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'No GES',
    reconstrucciones: '',
    frecuencia: 'Alta · Criterios de tamaño y manejo expectante vs tubo de drenaje',
    svg: null, algoTitle: 'Algoritmo de Manejo del Neumotórax Espontáneo según Tamaño y Estabilidad',
    diagram: flow('Algoritmo de Manejo del Neumotórax Espontáneo', [
      { t: 'Confirmación Radiológica de Neumotórax Espontáneo', s: 'Visualización de línea pleural visceral sin trama vascular periférica en Rx tórax espirada' },
      { k: 'split', q: 'Etiología y Magnitud: ¿Es Primario Pequeño y Estable?', s: 'Primario (joven sin patología) vs Secundario (EPOC/bula) · Tamaño: borde-hilio < 2 cm o vértice < 3 cm', ll: 'pequeño y estable (primario)', rl: 'grande (> 2 cm) o secundario o disneico',
        left: { t: 'Manejo Médico Conservador', s: 'Reposo + O2 a alto flujo (acelera reabsorción x4) + Observación 4-6 h · Si estable: control ambulatorio', type: 'acc' },
        right: { t: 'Evacuación / Tubo de Drenaje Torácico', s: 'Aspiración simple con catéter o Pleurostomía con tubo fino (10-14 Fr) conectada a válvula de Heimlich / trampa', type: 'warn' } },
      { t: 'Indicaciones de Cirugía (VATS y Pleurodesis)', s: 'Segundo episodio homolateral (recurrencia 30-50%), primer episodio contralateral, fuga aérea > 48-72 h o profesión de riesgo (piloto/buzo)', type: 'dec', al: 'cirugía VATS', from: 'right' },
    ]),
    contexto: 'El neumotórax espontáneo se divide en primario (sin enfermedad pulmonar de base, típicamente jóvenes altos y delgados por rotura de blebs apicales) y secundario (complicación de EPOC, fibrosis o fibrosis quística). El EUNACOM interroga la estimación del tamaño, la indicación de oxígeno normobárico para acelerar la reabsorción y las pautas para indicar drenaje pleural o cirugía.',
    contentSections: [
      {
        subhead: '1. Clasificación y Mecanismo Patogénico',
        paragraphs: [
          '<strong>Neumotórax Espontáneo Primario (NEP):</strong> Ocurre sin trauma ni antecedente conocido de patología pulmonar. Clásico en <strong>varones jóvenes (15 a 34 años), altos, delgados (hábito longilíneo) y fumadores</strong>, debido a la rotura espontánea de pequeñas bullas subpleurales apicales (<em>blebs</em>).',
          '<strong>Neumotórax Espontáneo Secundario (NES):</strong> Ocurre como complicación de una enfermedad pulmonar preexistente, principalmente <strong>EPOC con enfisema buloso</strong>, tuberculosis secuelar, asma grave, absceso o neumonía por <em>Pneumocystis jirovecii</em> en VIH. Tiene mucha mayor morbimortalidad y peor tolerancia.',
        ],
      },
      {
        subhead: '2. Estimación del Tamaño y Conducta Terapéutica',
        paragraphs: [
          'La radiografía de tórax en inspiración máxima (o espirada) confirma la <strong>línea de la pleura visceral despegada de la pared costal</strong> con ausencia periférica de trama broncovascular.',
          '<strong>Definición de Tamaño:</strong> Según guías de consenso, se considera <strong>pequeño</strong> cuando la separación interpleural en el hilio es &lt; 2 cm (o &lt; 3 cm en el vértice), y <strong>grande</strong> si es ≥ 2 cm en el hilio.',
          '• <strong>NEP pequeño (&lt; 2 cm) y paciente asintomático/estable:</strong> Conducta conservadora con <strong>oxigenoterapia por mascarilla</strong> (el oxígeno a alto flujo desnitrogena la sangre y acelera la reabsorción del aire pleural de 1.25% a 4% al día) y observación por 4 a 6 horas en urgencias.<br>' +
          '• <strong>NEP grande (≥ 2 cm) o sintomático:</strong> Evacuación activa: <strong>aspiración simple con catéter fino</strong> o instalación de <strong>Tubo de Drenaje Torácico (TDT)</strong> conectado a sello de agua o válvula de Heimlich.<br>' +
          '• <strong>NES (Secundario):</strong> Prácticamente SIEMPRE requiere tubo de drenaje pleural y hospitalización por su nula reserva funcional.',
        ],
      },
      {
        subhead: '3. Criterios de Resolución Quirúrgica (VATS)',
        paragraphs: [
          'La indicación de cirugía preventiva (videotoracoscopía con resección de blebs y <strong>pleurodesis química o mecánica</strong>) está formalmente indicada en: 1) <strong>Segundo episodio de neumotórax homolateral</strong>; 2) Primer neumotórax contralateral; 3) Neumotórax bilateral sincrónico; 4) <strong>Fuga aérea persistente (burbujeo) tras 48 a 72 horas</strong> de drenaje; y 5) Profesiones de riesgo especial (pilotos comerciales, buzos profesionales).',
        ],
      },
    ],
    table: {
      title: 'Neumotórax Espontáneo Primario (NEP) vs Secundario (NES)',
      headers: ['Característica', 'Neumotórax Primario (NEP)', 'Neumotórax Secundario (NES)'],
      rows: [
        ['Población típica', 'Varón joven (20-30 años), alto, delgado, fumador', 'Adulto mayor (> 60 años) con patología pulmonar crónica'],
        ['Enfermedad de base', 'Ninguna (rotura de blebs apicales)', 'EPOC (enfisema), fibrosis, TBC secuelar, P. jirovecii'],
        ['Tolerancia clínica', 'Buena (disnea leve, dolor pleurítico)', 'Mala (insuficiencia respiratoria e inestabilidad frecuente)'],
        ['Manejo si es pequeño', 'Observación + Oxígeno normobárico', 'Tubo de drenaje torácico obligatorio en casi 100%'],
        ['Tasa de recurrencia', '30% tras primer episodio, > 50% tras segundo', 'Mayor al 50% con alta mortalidad'],
      ],
    },
    vignette: 'Varón de 23 años, delgado y fumador de 5 cigarrillos al día, consulta por inicio súbito de dolor en puntada de costado derecho y tos seca mientras estaba sentado. Examen: PA 120/75 mmHg, FC 78 lpm, SatO2 98% ambiental, eupneico. Radiografía de tórax: neumotórax espontáneo derecho con franja de aire pleural apical de 1.5 cm sin colapso significativo.',
    explicacion: 'Neumotórax espontáneo primario pequeño (< 2 cm) y paciente hemodinámicamente estable sin disnea. La conducta indicada es el manejo conservador en observación con aporte de oxígeno a alto flujo (para acelerar la reabsorción pleural del nitrógeno). Si la radiografía de control a las 6 horas no muestra progresión y el paciente sigue asintomático, puede darse de alta con reposo e indicaciones de alarma.',
    keyPoints: [
      'El neumotórax primario es típico de hombres jóvenes, delgados y fumadores por rotura de blebs apicales.',
      'El oxígeno suplementario a alto flujo acelera hasta 4 veces la tasa de reabsorción del neumotórax.',
      'Neumotórax primario pequeño (< 2 cm) y estable: observación y oxígeno; no requiere punción ni tubo de entrada.',
      'Neumotórax secundario (en EPOC) casi siempre requiere pleurostomía con tubo de drenaje.',
      'La cirugía mediante VATS y pleurodesis se indica obligatoriamente ante un segundo episodio homolateral o fuga > 48-72 h.',
    ],
    questions: [
      {
        stem: 'Un joven de 21 años, deportista, sin antecedentes mórbidos, consulta en urgencias por dolor torácico pleurítico izquierdo agudo iniciado en reposo. Al examen físico: SatO2 99% respirando aire ambiental, FR 16 rpm, PA 118/70 mmHg, murmullo pulmonar levemente disminuido en el ápice izquierdo. La radiografía de tórax muestra una franja de aire apical de 1.2 cm en el hemitórax izquierdo sin desviación mediastínica. ¿Cuál es la conducta inicial más adecuada?',
        options: [
          { id: 'A', text: 'Instalación inmediata de un tubo de drenaje pleural número 28 Fr con trampa de agua' },
          { id: 'B', text: 'Toracotomía exploradora de urgencia para resección de bullas' },
          { id: 'C', text: 'Administración de oxígeno suplementario, reposo en observación por 4 a 6 horas y control radiológico' },
          { id: 'D', text: 'Punción pleural descompresiva en el segundo espacio intercostal con bránula 14G' },
          { id: 'E', text: 'Alta inmediata sin necesidad de reposo ni seguimiento' },
        ],
        correcta: 'C',
        explicacion: 'Se trata de un neumotórax espontáneo primario pequeño (< 2 cm de separación interpleural) en un paciente completamente estable y asintomático. Las guías clínicas internacionales recomiendan manejo conservador mediante reposo, administración de oxígeno (que aumenta el gradiente para la reabsorción del aire del espacio pleural) y observación médica durante 4 a 6 horas. La punción con bránula (D) es exclusiva del neumotórax a tensión con shock, y el tubo (A) se reserva para neumotórax grandes o sintomáticos.',
        recTag: 'Banco de Preguntas Oficial · Neumotórax Espontáneo',
      },
      {
        stem: '¿En cuál de las siguientes situaciones clínicas está formalmente indicada la resolución quirúrgica mediante videotoracoscopía (VATS) y pleurodesis en un paciente con neumotórax espontáneo primario?',
        options: [
          { id: 'A', text: 'Primer episodio de neumotórax primario de 1 cm resuelto favorablemente' },
          { id: 'B', text: 'Segundo episodio de neumotórax en el mismo hemitórax (recurrencia homolateral)' },
          { id: 'C', text: 'Paciente fumador pasivo con tos crónica sin neumotórax' },
          { id: 'D', text: 'Presencia de dolor pleurítico residual leve a los 3 días del alta' },
          { id: 'E', text: 'Aparición de frote pleural durante la fase de reexpansión' },
        ],
        correcta: 'B',
        explicacion: 'Tras un primer episodio de neumotórax espontáneo primario, la tasa de recurrencia es del 30%, pero tras un segundo episodio homolateral el riesgo de un tercer evento supera el 50–60%. Por ello, la indicación quirúrgica clásica y de consenso para realizar resección de blebs (bullectomía) asociada a pleurodesis (química o abrasión mecánica) por videotoracoscopía (VATS) es la presencia de un segundo episodio en el mismo lado o la persistencia de fuga aérea por más de 48-72 horas.',
        recTag: 'Banco de Preguntas Oficial · Neumotórax Espontáneo',
      },
    ],
  },
  {
    id: 'resp-14',
    classId: 'resp-14',
    tier: 3,
    blockNum: 3,
    blockName: 'Patología Pleural y Urgencias Torácicas',
    topicLabel: '3.4',
    title: 'Neumotórax a Tensión y Hemotórax Traumático',
    perfilCode: '1.05.1.032, 1.05.2.011, 1.05.2.013',
    dx: 'Específico', tx: 'Completo', seg: 'Inicial',
    ges: 'Garantía Explícita en Salud (GES): Politraumatizado Grave (Manejo Inmediato de Lesiones Torácicas con Riesgo Vital)',
    reconstrucciones: '',
    frecuencia: 'Máxima · Emergencia quirúrgica de soporte vital avanzado (ATLS)',
    svg: null, algoTitle: 'Algoritmo de Reconocimiento y Resucitación Inmediata en Neumotórax a Tensión',
    diagram: flow('Algoritmo de Manejo Inmediato Neumotórax a Tensión (ATLS)', [
      { t: 'Sospecha Clínica de Neumotórax a Tensión', s: 'Hipotensión + Cianosis/Taquipnea + Yugulares ingurgitadas + Ausencia unilateral de murmullo' },
      { k: 'split', q: '¿Se Debe Esperar Radiografía de Tórax para Actuar?', s: 'Diagnóstico 100% clínico · Esperar radiografía aumenta la mortalidad a 100%', ll: 'NUNCA esperar Rx', rl: 'inestabilidad extrema',
        left: { t: 'Descompresión Inmediata con Aguja / Angiocatéter', s: 'Aguja gruesa (14-16 G) en 2º espacio intercostal LMC o 5º EIC LAA/LMA · Transforma tensión en simple', type: 'acc' },
        right: { t: 'Pleurostomía Definitiva con Tubo Grueso (TDT)', s: 'Tubo de tórax (28-32 Fr) en 5º espacio intercostal línea axilar media · Conexión a trampa de agua', type: 'warn' } },
      { t: 'Diferenciación con Hemotórax Masivo (> 1.500 mL)', s: 'Yugulares colapsadas + Matidez a la percusión (vs ingurgitadas + timpanismo) → Tubo grueso + Toracotomía de urgencia', type: 'dec', al: 'hemotórax masivo', from: 'left' },
    ]),
    contexto: 'El neumotórax a tensión es una emergencia con riesgo vital inmediato producida por un mecanismo de válvula unidireccional que colapsa el retorno venoso y provoca paro cardiorrespiratorio en actividad eléctrica sin pulso (AESP). El EUNACOM exige memorizar que el diagnóstico es estrictamente CLÍNICO (prohibido esperar radiografía) y dominar la diferenciación con el hemotórax masivo y taponamiento cardíaco.',
    contentSections: [
      {
        subhead: '1. Fisiopatología del Neumotórax a Tensión',
        paragraphs: [
          'Se produce cuando una lesión en el parénquima pulmonar o la pared torácica crea una <strong>válvula unidireccional</strong>: el aire ingresa al espacio pleural durante la inspiración pero no puede salir en la espiración.',
          'Esto genera un incremento masivo de la presión intrapleural positiva que provoca: 1) <strong>Colapso total del pulmón ipsilateral</strong>; 2) <strong>Desviación contralateral del mediastino y la tráquea</strong>; 3) <strong>Compresión de la vena cava inferior y superior</strong>, lo que anula el retorno venoso al corazón derecho, desencadenando colapso hemodinámico fulminante (shock obstructivo) y paro en Actividad Eléctrica Sin Pulso (AESP).',
        ],
      },
      {
        subhead: '2. Diagnóstico Clínico y Conducta Inmediata de Emergencia',
        paragraphs: [
          '<strong>Regla de oro absoluta EUNACOM:</strong> El diagnóstico de neumotórax a tensión es <strong>100% CLÍNICO</strong>. Está <strong>formalmente contraindicado solicitar o esperar una radiografía de tórax</strong> para confirmar la sospecha.',
          '<strong>Semiología cardinal:</strong> Hipotensión o shock, dificultad respiratoria severa, diaforesis, <strong>ingurgitación yugular</strong> (por obstrucción del retorno venoso), <strong>desviación traqueal hacia el lado contralateral</strong>, <strong>timpanismo o hipersonoridad</strong> a la percusión del hemitórax afectado y <strong>abolición completa del murmullo pulmonar</strong>.',
          '<strong>Manejo inmediato:</strong> Descompresión urgente mediante punción con <strong>aguja o bránula gruesa (calibre 14–16G)</strong> en el <strong>segundo espacio intercostal en la línea medioclavicular</strong> (o según ATLS 10ª edición: 5º espacio intercostal línea axilar anterior). Esto descomprime el gas a presión y lo transforma en un neumotórax simple. Inmediatamente después se instala una <strong>pleurostomía definitiva con tubo de drenaje (28–32 Fr)</strong>.',
        ],
      },
      {
        subhead: '3. Diagnóstico y Manejo del Hemotórax Masivo',
        paragraphs: [
          'Se define como la acumulación rápida de <strong>≥ 1.500 mL de sangre</strong> (o más de un tercio de la volemia) en la cavidad pleural tras un traumatismo torácico.',
          '<strong>Diferencia clave con neumotórax a tensión:</strong> El hemotórax cursa con <strong>matidez a la percusión</strong> (no timpanismo) y <strong>venas yugulares colapsadas o planas</strong> (por shock hipovolémico masivo, a diferencia de la ingurgitación del shock obstructivo).',
          'Tratamiento: Reanimación con hemoderivados en ratio 1:1:1 e instalación de tubo de tórax grueso. <strong>Criterios de toracotomía de urgencia en quirófano:</strong> Drenaje inicial inmediato de <strong>≥ 1.500 mL de sangre</strong>, O sangrado continuo de <strong>≥ 200 mL/hora durante 2 a 4 horas consecutivas</strong>.',
        ],
      },
    ],
    table: {
      title: 'Diagnóstico Diferencial en Urgencias: Neumotórax a Tensión vs Hemotórax Masivo vs Taponamiento',
      headers: ['Signo Clínico', 'Neumotórax a Tensión', 'Hemotórax Masivo', 'Taponamiento Cardíaco'],
      rows: [
        ['Presión arterial', 'Shock profundo (obstructivo)', 'Shock hipovolémico grave', 'Hipotensión marcada (Tríada Beck)'],
        ['Yugulares', 'Ingurgitadas a tensión', 'Planos / colapsados', 'Ingurgitadas a tensión'],
        ['Percusión torácica', 'Hipersonoridad / Timpanismo', 'Matidez franca en base/hemitórax', 'Sonoridad pulmonar normal'],
        ['Murmullo vesicular', 'Abolido ipsilateral', 'Disminuido o abolido ipsilateral', 'Murmullo pulmonar conservado bilateral'],
        ['Posición traqueal', 'Desviada al lado contralateral', 'Centrada o leve desviación', 'Línea media estricta'],
        ['Tratamiento de 1ª línea', 'Descompresión con aguja gruesa 14G', 'Tubo pleural + Hemoderivados', 'Pericardiocentesis o ventana pericárdica'],
      ],
    },
    vignette: 'Paciente de 28 años politraumatizado por colisión vehicular ingresa a reanimación en malas condiciones: cianótico, FR 38 rpm, PA 65/40 mmHg, FC 138 lpm. Al examen: ingurgitación yugular bilateral evidente, hemitórax izquierdo abombado con ausencia completa de ruidos respiratorios y marcada hipersonoridad a la percusión. La tráquea está desviada a la derecha.',
    explicacion: 'Neumotórax a tensión izquierdo con shock obstructivo secundario: clínica patognomónica con hipotensión, ingurgitación yugular, timpanismo y desviación traqueal contralateral. Es un error crítico demorar la conducta solicitando radiografía. La acción salvadora inmediata es la descompresión con aguja gruesa (14-16G) en el segundo espacio intercostal línea medioclavicular izquierda (o 5º EIC línea axilar anterior), seguida de pleurostomía con tubo conectado a trampa de agua.',
    keyPoints: [
      'El neumotórax a tensión es una emergencia con diagnóstico 100% clínico; jamás solicitar radiografía.',
      'Semiología clave: hipotensión + ingurgitación yugular + timpanismo + desviación traqueal contralateral.',
      'Manejo inmediato: descompresión con aguja gruesa calibre 14-16G antes de instalar el tubo de tórax.',
      'Diferencia con hemotórax masivo: el hemotórax tiene matidez a la percusión y yugulares colapsadas por hipovolemia.',
      'Indicación de toracotomía quirúrgica en hemotórax: drenaje inicial ≥ 1.500 mL o sangrado persistente ≥ 200 mL/h por 2-4 h.',
    ],
    questions: [
      {
        stem: 'Un paciente de 35 años ingresa al servicio de urgencias tras sufrir una herida por arma blanca en el hemitórax derecho. Al examen físico se encuentra estuporoso, pálido, con sudoración fría, PA de 70/40 mmHg, FC de 135 lpm y saturación de 82% con oxígeno ambiental. Se observan venas del cuello ingurgitadas a tensión, la tráquea está visiblemente desviada hacia la izquierda y a la auscultación hay silencio pulmonar en todo el hemitórax derecho con hipersonoridad percutoria. ¿Cuál es la conducta médica más prioritaria e inaplazable?',
        options: [
          { id: 'A', text: 'Trasladar de inmediato al paciente al servicio de radiología para una radiografía de tórax portátil' },
          { id: 'B', text: 'Realizar descompresión torácica inmediata con aguja gruesa en el segundo espacio intercostal línea medioclavicular derecha' },
          { id: 'C', text: 'Intubación orotraqueal con inducción de secuencia rápida y ventilación a presión positiva' },
          { id: 'D', text: 'Administrar 2.000 mL de solución fisiológica en bolo rápido por dos vías venosas periféricas' },
          { id: 'E', text: 'Realizar pericardiocentesis subxifoidea de urgencia' },
        ],
        correcta: 'B',
        explicacion: 'El cuadro clínico corresponde sin duda a un Neumotórax a Tensión derecho con inestabilidad hemodinámica extrema por colapso del retorno venoso (shock obstructivo). Es un error médico grave retrasar el tratamiento esperando exámenes radiológicos (A) o intubar con presión positiva (C), ya que la ventilación mecánica aumentará la presión intratorácica y provocará paro cardíaco inmediato. La conducta salvadora inmediata es la descompresión con aguja gruesa para aliviar la tensión intrapleural, seguida de tubo de drenaje pleural.',
        recTag: 'Banco de Preguntas Oficial · Neumotórax a Tensión y Trauma Torácico',
      },
      {
        stem: 'Un paciente traumatizado ingresa con un hemotórax masivo derecho. Se instala un tubo de drenaje torácico 32 Fr obteniéndose una salida inmediata de 1.700 mL de sangre fresca. A pesar de la reposición con fluidos y glóbulos rojos concentrados, en las siguientes 2 horas el débito del tubo es de 250 mL/hora continuo. ¿Cuál es la indicación de manejo definitivo?',
        options: [
          { id: 'A', text: 'Instalar un segundo tubo de drenaje pleural en el mismo hemitórax' },
          { id: 'B', text: 'Pinzar el tubo de drenaje torácico para permitir el coágulo intratorácico' },
          { id: 'C', text: 'Toracotomía de urgencia en pabellón quirúrgico' },
          { id: 'D', text: 'Realizar embolización selectiva por angiografía en 24 horas' },
          { id: 'E', text: 'Iniciar infusión de ácido tranexámico y mantener observación exclusiva en sala' },
        ],
        correcta: 'C',
        explicacion: 'Los criterios de toracotomía de urgencia del ATLS establecen que un paciente con hemotórax traumático requiere exploración quirúrgica abierta inmediata en pabellón cuando: (1) El drenaje inicial por el tubo es ≥ 1.500 mL de sangre fresca (en este caso 1.700 mL), O (2) El débito hemático continuo supera los 200 mL/hora durante 2 a 4 horas consecutivas (en este caso 250 mL/h). Pinzar el tubo (B) provocaría un hemotórax a tensión letal.',
        recTag: 'Banco de Preguntas Oficial · Neumotórax a Tensión y Trauma Torácico',
      },
    ],
  },
  {
    id: 'resp-15',
    classId: 'resp-15',
    tier: 2,
    blockNum: 3,
    blockName: 'Patología Pleural y Urgencias Torácicas',
    topicLabel: '3.5',
    title: 'Derrame Pleural Neoplásico y Pleuritis Tuberculosa',
    perfilCode: '1.05.1.013',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES): Cáncer de Pulmón y Tuberculosis',
    reconstrucciones: '',
    frecuencia: 'Alta · Diagnóstico diferencial de exudados con predominio mononuclear',
    svg: null, algoTitle: 'Algoritmo de Diferenciación de Exudado Linfocítico: TBC vs Cáncer Pleural',
    diagram: flow('Algoritmo Diagnóstico: Exudado Pleural Linfocítico', [
      { t: 'Exudado con Predominio Mononuclear / Linfocítico (> 50%)', s: 'Descartar las 2 causas principales: Tuberculosis Pleural vs Derrame Maligno / Neoplásico' },
      { k: 'split', q: '¿Nivel de Adenosina Deaminasa (ADA) Pleural?', s: 'Punto de corte canónico: ADA ≥ 40 U/L (alta sospecha de TBC en Chile)', ll: 'ADA ≥ 40 U/L (TBC probable)', rl: 'ADA < 40 U/L (estudio neoplásico)',
        left: { t: 'Pleuritis Tuberculosa', s: 'Baciloscopía/Cultivo LP + GeneXpert + Biopsia pleural percutánea con aguja de Cope (granulomas caseificantes en >80%)', type: 'acc' },
        right: { t: 'Derrame Pleural Neoplásico / Maligno', s: 'Citología seriada del líquido (sensibilidad 60%) + Videotoracoscopía (VATS) para biopsia y pleurodesis', type: 'warn' } },
      { t: 'Tratamiento Específico según Diagnóstico Certificado', s: 'TBC: Terapia antituberculosa RHZE (cura 100% de la pleuritis) · Neoplásico: Pleurodesis con talco o catéter tunelizado permanente', type: 'dec', al: 'tratamiento', from: 'left' },
    ]),
    contexto: 'Frente a un exudado pleural con predominio linfocítico, el EUNACOM exige plantear sistemáticamente dos diagnósticos diferenciales primordiales: Pleuritis Tuberculosa y Derrame Pleural Neoplásico. Conocer el valor de corte de la Adenosina Deaminasa (ADA ≥ 40 U/L), el rendimiento de la biopsia pleural con aguja y la pleurodesis con talco es de máximo rendimiento.',
    contentSections: [
      {
        subhead: '1. Enfrentamiento del Exudado Pleural Linfocítico',
        paragraphs: [
          'Cuando el citoquímico del líquido pleural confirma un exudado según Criterios de Light y la fórmula celular demuestra <strong>&gt; 50% de linfocitos mononucleares</strong> con escasas células mesoteliales, el diagnóstico diferencial se reduce fundamentalmente a dos patologías: <strong>Tuberculosis pleural</strong> y <strong>Derrame neoplásico / metástasis pleural</strong> (seguidos a mayor distancia por linfoma y pleuritis reumatoidea).',
        ],
      },
      {
        subhead: '2. Pleuritis Tuberculosa: Diagnóstico y Utilidad del ADA',
        paragraphs: [
          'Ocurre por rotura de un foco caseoso subpleural con reacción de hipersensibilidad retardada celular. Clásicamente en adultos jóvenes con fiebre, tos seca y dolor pleurítico.',
          '<strong>Marcador clave: Adenosina Deaminasa (ADA) en líquido pleural:</strong> Un valor de <strong>ADA ≥ 40 U/L</strong> tiene una sensibilidad y especificidad superiores al 90–95% para tuberculosis pleural en Chile.',
          '<strong>Regla de oro EUNACOM:</strong> La baciloscopía directa del líquido pleural tiene un rendimiento bajísimo (&lt; 5–10%), debido a que es una reacción paucibacilar inmunológica. El método diagnóstico estándar de confirmación histológica es la <strong>biopsia pleural con aguja (aguja de Cope o Abrams)</strong>, que demuestra granulomas con necrosis de caseificación en más del 80% de los casos. Resuelve completamente con tratamiento RHZE habitual.',
        ],
      },
      {
        subhead: '3. Derrame Pleural Maligno y Opciones de Manejo Paliativo',
        paragraphs: [
          'Representa la infiltración tumoral de la pleura parietal o visceral, más comúnmente por <strong>adenocarcinoma de pulmón</strong>, cáncer de mama, linfoma o mesotelioma. El líquido suele ser serohemático o hemorrágico.',
          'La <strong>citología del líquido pleural</strong> tiene una sensibilidad del 60% en la primera muestra y asciende al 80–85% al repetir una segunda muestra. Si la citología es negativa y la sospecha persiste, la <strong>biopsia pleural por Videotoracoscopía (VATS)</strong> es el gold standard definitivo.',
          '<strong>Manejo:</strong> Por ser estadio avanzado (M1a en cáncer pulmonar), el objetivo es paliativo para aliviar la disnea: toracocentesis evacuadora SOS, <strong>pleurodesis química con talco estéril</strong> (sella el espacio pleural impidiendo la recidiva líquida) o instalación de <strong>catéter pleural tunelizado permanente (PleurX)</strong> para drenaje domiciliario.',
        ],
      },
    ],
    table: {
      title: 'Diferenciación Diagnóstica: Pleuritis Tuberculosa vs Derrame Pleural Neoplásico',
      headers: ['Característica', 'Pleuritis Tuberculosa', 'Derrame Pleural Neoplásico (Maligno)'],
      rows: [
        ['Edad habitual', 'Jóvenes o adultos con inmunosenescencia', 'Adultos mayores (> 50-60 años)'],
        ['Aspecto del líquido', 'Amarillo cetrino / serofibrinoso', 'Frecuentemente serohemático o hemorrágico'],
        ['ADA pleural', 'Elevado: ≥ 40 U/L (típico > 45-50)', 'Bajo (< 35-40 U/L, salvo linfomas raros)'],
        ['Baciloscopía directa LP', 'Muy baja sensibilidad (< 10%)', 'Negativa'],
        ['Citología exfoliativa LP', 'Negativa para atipías', 'Positiva para células malignas en 60-80%'],
        ['Biopsia pleural', 'Granulomas caseificantes (rendimiento > 80%)', 'Infiltración tumoral epitelial maligna'],
        ['Manejo definitivo', 'Quimioterapia antituberculosa RHZE', 'Pleurodesis con talco o Catéter tunelizado (PleurX)'],
      ],
    },
    vignette: 'Hombre de 34 años consulta por 3 semanas de fiebre vespertina de 38 °C, dolor pleurítico en base derecha y baja de 2 kg. La radiografía revela un derrame pleural derecho del 40%. La toracocentesis muestra un exudado con 85% de linfocitos, proteínas en líquido 4.8 g/dL, glucosa 72 mg/dL y ADA en líquido pleural de 58 U/L. La baciloscopía del líquido resulta negativa.',
    explicacion: 'Exudado pleural linfocítico con ADA marcadamente elevado (58 U/L, sobre el umbral de 40 U/L) en un paciente joven. El diagnóstico más probable es Pleuritis Tuberculosa. La baciloscopía directa del líquido pleural suele ser negativa por la escasa carga bacteriana en pleura. La conducta confirmatoria es la toma de biopsia pleural con aguja para estudio histológico (granulomas caseificantes) y cultivo de Koch, con inicio de esquema antituberculoso normado.',
    keyPoints: [
      'Todo exudado pleural con > 50% de linfocitos exige descartar Tuberculosis y Cáncer.',
      'Un ADA en líquido pleural ≥ 40 U/L tiene altísima especificidad para pleuritis tuberculosa.',
      'La baciloscopía del líquido pleural tiene muy bajo rendimiento (< 10%) en tuberculosis; la confirmación es por biopsia.',
      'La citología de líquido pleural diagnostica el 60% de los derrames malignos en la primera muestra.',
      'El tratamiento del derrame neoplásico recidivante sintomático es la pleurodesis química con talco o catéter tunelizado.',
    ],
    questions: [
      {
        stem: 'Un paciente de 29 años presenta un cuadro de 1 mes de evolución de astenia, febrícula y tope inspiratorio derecho. La radiografía muestra derrame pleural derecho moderado. El estudio del líquido pleural confirma un exudado seroso con 92% de células mononucleares (linfocitos), glucosa de 68 mg/dL y un nivel de ADA pleural de 62 U/L. La tinción de Ziehl-Neelsen del líquido pleural no observa bacilos ácido-alcohol resistentes. ¿Cuál es el examen confirmatorio con mayor rendimiento diagnóstico para esta patología?',
        options: [
          { id: 'A', text: 'Repetir la baciloscopía del líquido pleural en tres muestras consecutivas' },
          { id: 'B', text: 'Biopsia pleural percutánea con aguja para estudio histopatológico y cultivo' },
          { id: 'C', text: 'PPD (tuberculina) dérmico exclusiva sin biopsia' },
          { id: 'D', text: 'Resonancia magnética de tórax con contraste paramagnético' },
          { id: 'E', text: 'Broncoscopía con lavado broncoalveolar' },
        ],
        correcta: 'B',
        explicacion: 'El cuadro clínico y el líquido pleural (exudado mononuclear con ADA > 40 U/L) son altamente sugerentes de pleuritis tuberculosa. Dado que el bacilo de Koch se encuentra en baja cantidad libre en el líquido (baciloscopía líquida positiva en menos del 10%), el método diagnóstico de mayor rendimiento (> 80-90%) es la biopsia pleural con aguja (Cope o Abrams), que permite visualizar los granulomas con necrosis caseosa y cultivar el tejido.',
        recTag: 'Banco de Preguntas Oficial · Patología Pleural Neoplásica e Infecciosa',
      },
      {
        stem: 'Una mujer de 62 años con antecedente de adenocarcinoma pulmonar metastásico consulta por disnea de reposo invalidante secundaria a un derrame pleural masivo izquierdo recurrente, el cual se reproduce a los 5 días de cada toracocentesis evacuadora. Su expectativa de vida supera los 3 meses y el pulmón reexpande completamente tras la evacuación. ¿Cuál es la mejor estrategia para el control paliativo de sus síntomas respiratorios?',
        options: [
          { id: 'A', text: 'Toracocentesis evacuadoras semanales a demanda' },
          { id: 'B', text: 'Pleurodesis química intrapleural con talco' },
          { id: 'C', text: 'Lobectomía izquierda con neumonectomía ampliada' },
          { id: 'D', text: 'Instalación de tubo de drenaje torácico fino sin sellamiento' },
          { id: 'E', text: 'Radioterapia externa mediastínica exclusiva' },
        ],
        correcta: 'B',
        explicacion: 'En derrames pleurales malignos recidivantes y sintomáticos en pacientes con adecuada reexpansión pulmonar y sobrevida esperada mayor a unas pocas semanas, el tratamiento paliativo de elección para evitar las punciones repetidas y mejorar la calidad de vida es la pleurodesis química (habitualmente mediante instilación de suspensión de talco estéril o "talc poudrage"), la cual induce una sínfisis inflamatoria entre las hojas pleurales impidiendo la acumulación de nuevo fluido.',
        recTag: 'Banco de Preguntas Oficial · Patología Pleural Neoplásica e Infecciosa',
      },
    ],
  },
];

module.exports = { bloque3 };
