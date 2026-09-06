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
    tier: 2,
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
    reconstrucciones: 'EUNACOM Julio 2017 (Q#63) · EUNACOM Diciembre 2019 (Q#19) · EUNACOM Julio 2023 (Q#48)',
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
        subhead: '1. Fisiopatología y Fases Evolutivas del Derrame Paraneumónico',
        paragraphs: [
          'El derrame paraneumónico es aquel exudado que se asocia a una neumonía bacteriana subyacente, absceso pulmonar o bronquiectasias infectadas. Ocurre en hasta el 40% de las neumonías hospitalizadas y evoluciona en 3 etapas biológicas consecutivas:',
          '<strong>1. Fase Exudativa (No Complicado):</strong> Aumento de la permeabilidad capilar de la pleura visceral adyacente al foco neumónico. El líquido pleural es claro o serohemático, estéril, con predominio de neutrófilos, <strong>pH &gt; 7.20, glucosa normal (&gt; 60 mg/dL)</strong> y LDH &lt; 1.000 U/L. Resuelve completamente solo con antibioticoterapia para la neumonía.<br>' +
          '<strong>2. Fase Fibrinopurulenta (Complicado):</strong> Las bacterias invaden activamente el espacio pleural, los neutrófilos se lisan y la actividad metabólica anaerobia consume la glucosa y produce ácido láctico: <strong>pH &lt; 7.20, glucosa &lt; 40–60 mg/dL y LDH &gt; 1.000 U/L</strong>. Se depositan gruesas bandas de fibrina que generan tabiques y loculaciones.<br>' +
          '<strong>3. Fase de Organización (Empiema Crónico):</strong> Proliferación fibroblástica que forma una coraza pleural rígida (<em>peel</em> pleural) que atrapa el pulmón e impide su reexpansión, requiriendo cirugía.',
        ],
      },
      {
        subhead: '2. Criterios Diagnósticos Bioquímicos de Derrame Complicado y Empiema',
        paragraphs: [
          'Se define <strong>Empiema Pleural</strong> en sentido estricto por la presencia de <strong>pus macroscópico franco</strong> en el líquido pleural, O bien por la demostración de <strong>bacterias en la tinción de Gram o cultivo positivo</strong> del líquido pleural.',
          'El <strong>Derrame Paraneumónico Complicado</strong> no necesariamente tiene pus visible, pero presenta una alteración bioquímica severa que predice que no resolverá solo con antibióticos y progresará a empiema si no se drena. El parámetro individual con mayor valor predictivo es el <strong>pH pleural &lt; 7.20</strong> (medido en jeringa de gases con heparina), seguido de <strong>glucosa &lt; 40–60 mg/dL</strong> y <strong>LDH &gt; 1.000 U/L</strong>.',
        ],
      },
      {
        subhead: '3. Indicaciones Estrictas de Pleurostomía con Tubo de Drenaje Torácico',
        paragraphs: [
          'La presencia de cualquiera de los siguientes hallazgos constituye una <strong>indicación formal, obligatoria e inmediata de instalación de un Tubo de Drenaje Torácico (TDT / Pleurostomía cerrada)</strong> conectado a trampa de agua (sistema con sello de agua y succión negativa suave de -10 a -20 cmH2O):<br>' +
          '1. Pus franco a la aspiración (Empiema evidente).<br>' +
          '2. Tinción de Gram positiva o cultivo bacteriano positivo.<br>' +
          '3. <strong>pH del líquido pleural &lt; 7.20</strong>.<br>' +
          '4. <strong>Glucosa en líquido pleural &lt; 40 mg/dL</strong>.<br>' +
          '5. Presencia de <strong>tabiques, loculaciones o engrosamiento pleural</strong> en la ecografía o TAC torácica.<br>' +
          '6. Derrame que ocupa más de la mitad del hemitórax en la radiografía de tórax.',
        ],
      },
      {
        subhead: '4. Terapia Antimicrobiana Prolongada y Cobertura Anaerobia',
        paragraphs: [
          'El tratamiento antibiótico debe instaurarse precozmente por vía endovenosa y mantenerse durante <strong>2 a 4 semanas</strong> (mínimo 14 días EV, completando vía oral según evolución clínica y marcadores inflamatorios).',
          'El esquema debe cubrir <em>Streptococcus pneumoniae</em>, <em>Staphylococcus aureus</em> y fundamentalmente <strong>bacterias anaerobias de la orofaringe</strong> (<em>Bacteroides</em>, <em>Peptostreptococcus</em>, <em>Fusobacterium</em>). Esquemas de primera línea: <strong>Ampicilina/Sulbactam 1.5 a 3 g cada 6 horas EV</strong>, o <strong>Ceftriaxona 2 g/día EV asociada a Metronidazol 500 mg cada 8 horas EV</strong> (o Clindamicina 600 mg c/8h). En infecciones intrahospitalarias o pacientes en UCI se cubre <em>Pseudomonas</em> y MRSA con Piperacilina/Tazobactam o Cefepime más Vancomicina.',
        ],
      },
      {
        subhead: '5. Escalamiento Quirúrgico: Fibrinolíticos Intrapleurales, VATS y Decorticación',
        paragraphs: [
          'Si tras instalar el tubo de pleurostomía el débito se detiene precozmente o persisten colecciones tabicadas en el control ecográfico/tomográfico con persistencia de fiebre y leucocitosis, se deben indicar <strong>fibrinolíticos intrapleurales combinados</strong>: instilación de <strong>Alteplasa (t-PA 10 mg) + Dornasa alfa (DNAsa 5 mg)</strong> dos veces al día por 3 días (ensayo MIST-2), lo que licúa los detritos de ADN y disuelve la fibrina, facilitando el drenaje.',
          'Si la sepsis pleural no cede en 48–72 horas o el derrame está multiloculado complejo, el estándar de oro es la <strong>Cirugía Toracoscópica Videoasistida (VATS)</strong> precoz para debridamiento y lisis de adherencias. Si la enfermedad se encuentra en fase organizativa con corteza pleural gruesa que impide la expansión pulmonar (pulmón atrapado), se realiza <strong>toracotomía abierta con decorticación pleural</strong>.',
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
    severityTable: {
      title: 'Clasificación de Severidad y Criterios de Riesgo de Fracaso en Paraneumónico (ACCP / BTS)',
      headers: ['Categoría de Riesgo', 'Características del Líquido y Anatomía Pleural', 'Riesgo de Mala Evolución', 'Conducta Asistencial'],
      rows: [
        ['Categoría 1 (Mínimo)', 'Derrame muy pequeño (< 10 mm en decúbito lateral o eco)', 'Muy bajo (< 2%)', 'Antibióticos para NAC; no requiere toracocentesis'],
        ['Categoría 2 (Bajo)', 'Derrame > 10 mm; pH ≥ 7.20; Glucosa ≥ 60; Gram (-)', 'Bajo (< 5%)', 'Antibióticos EV; no requiere drenaje con tubo'],
        ['Categoría 3 (Moderado)', 'Derrame tabicado O pH 7.00-7.20 O Glucosa 40-60', 'Moderado a Alto (50%)', 'Tubo de drenaje torácico obligatorio + ATB'],
        ['Categoría 4 (Alto)', 'Empiema purulento franco O Gram/Cultivo (+) O pH < 7.00', 'Extremo (> 90%)', 'Tubo de drenaje torácico urgente ± VATS / fibrinolíticos'],
      ],
    },
    treatmentTable: {
      title: 'Protocolo Terapéutico Escalonado y Selección de Drenaje en Empiema',
      headers: ['Etapa de Manejo', 'Intervención de Elección', 'Dosis / Parámetros', 'Meta Clínica'],
      rows: [
        ['1. Drenaje Inmediato', 'Pleurostomía cerrada con tubo de tórax', 'Tubo 24-28 Fr conectado a trampa de agua', 'Evacuación de pus y reexpansión pulmonar completa'],
        ['2. Antibioticoterapia EV', 'Ampicilina/Sulbactam o Ceftriaxona + Metronidazol', 'Ampicilina/Sulbactam 1.5-3 g c/6h EV x 2-4 semanas', 'Erradicar anaerobios y flora bacteriana pleural'],
        ['3. Terapia Fibrinolítica', 't-PA (Alteplasa) + DNAsa (Dornasa alfa)', 't-PA 10 mg + DNAsa 5 mg intrapleural c/12h x 3d', 'Disolver tabiques de fibrina y desobstruir tubo'],
        ['4. Debridamiento Quirúrgico', 'Videotoracoscopía asistida (VATS precoz)', 'Pabellón de cirugía de tórax en primeras 48-72 h', 'Aseo pleural bajo visión directa en colecciones complejas'],
      ],
    },
    vignette: 'Hombre de 58 años con antecedentes de tabaquismo y mala dentadura ingresa hospitalizado por neumonía basal derecha. Inicia tratamiento con Ceftriaxona 2 g EV/día. Al cuarto día de tratamiento persiste febril con 38.6 °C, aumento del dolor pleurítico y disnea. La radiografía de tórax de control muestra un derrame pleural derecho que ocupa el tercio inferior del hemitórax. Se realiza toracocentesis diagnóstica: líquido pleural turbio y espeso, pH 7.12, glucosa 28 mg/dL, LDH 2.450 U/L y tinción de Gram con diplococos grampositivos.',
    explicacion: 'El paciente presenta un derrame paraneumónico complicado que ha evolucionado hacia un empiema bacteriano (pH < 7.20, glucosa < 40 mg/dL, LDH > 1.000 U/L y tinción de Gram positiva). En este escenario, la mantención de antibióticos aislados es un error grave que conduce a fibrosis y sepsis. La conducta médica inaplazable y prioritaria es la instalación inmediata de una pleurostomía cerrada con tubo de drenaje torácico conectado a trampa de agua, ajustando la antibioticoterapia endovenosa con cobertura anaerobia (ej. asociando Metronidazol o cambiando a Ampicilina/Sulbactam).',
    keyPoints: [
      'El empiema se define por pus macroscópico franco O bacterias visibles en Gram/cultivo del líquido pleural.',
      'Derrame paraneumónico complicado: pH < 7.20, glucosa < 40-60 mg/dL y LDH > 1.000 U/L.',
      'Todo empiema o derrame paraneumónico complicado exige la instalación inmediata de un Tubo de Drenaje Torácico (pleurostomía).',
      'El pH del líquido pleural (< 7.20) es el parámetro bioquímico individual más sensible y específico para indicar drenaje con tubo.',
      'El tratamiento antibiótico empírico debe cubrir anaerobios orales (Ampicilina/Sulbactam o Ceftriaxona + Metronidazol) por 2 a 4 semanas.',
      'Si existen tabicaciones múltiples en la ecografía que no drenan por el tubo, la conducta es fibrinolíticos intrapleurales (t-PA + DNAsa) o VATS.',
      'Trampa de examen: nunca postergar el drenaje pleural en espera de la respuesta a antibióticos si el pH es < 7.20.',
      'La decorticación quirúrgica por toracotomía se reserva para la fase de organización con corteza pleural rígida y pulmón atrapado.',
    ],
    questions: [
      {
        stem: 'Un paciente de 62 años hospitalizado hace 4 días por neumonía comunitaria en tratamiento con ceftriaxona endovenosa persiste con picos febriles de 38.8 °C y marcado compromiso del estado general. La ecografía torácica evidencia un derrame pleural de 300 mL en la base derecha. Se realiza toracocentesis diagnóstica obteniendo líquido turbio cuyo análisis muestra: pH 7.14, glucosa 32 mg/dL, LDH 2.200 U/L, proteínas 4.5 g/dL. La tinción de Gram inmediata no observa bacterias. ¿Cuál es la conducta médica de elección más prioritaria?',
        options: [
          { id: 'A', text: 'Mantener ceftriaxona en la misma dosis y repetir la punción diagnóstica en 48 horas' },
          { id: 'B', text: 'Instalar de inmediato un tubo de drenaje torácico conectado a trampa de agua' },
          { id: 'C', text: 'Suspender ceftriaxona e iniciar monoterapia con ciprofloxacino oral' },
          { id: 'D', text: 'Indicar toracotomía abierta de urgencia con decorticación pulmonar' },
          { id: 'E', text: 'Realizar kinesioterapia respiratoria intensiva y administrar diuréticos de asa' },
        ],
        correcta: 'B',
        explicacion: 'El líquido pleural cumple criterios bioquímicos categóricos de derrame paraneumónico complicado: pH < 7.20 (7.14), glucosa < 40 mg/dL (32 mg/dL) y LDH > 1.000 U/L (2.200 U/L). A pesar de que la tinción de Gram sea inicialmente negativa, la acidosis láctica y el consumo extremo de glucosa certifican actividad bacteriana e inflamatoria intensa en el espacio pleural. La indicación indiscutible es el drenaje pleural inmediato mediante la instalación de un tubo de tórax (pleurostomía cerrada) para evitar la tabicación y el empiema multiloculado.',
        recTag: 'EUNACOM Julio 2017 · Reconstrucción oficial',
      },
      {
        stem: '¿Cuál de los siguientes parámetros del análisis físico-químico del líquido pleural es el indicador individual más confiable y determinante para decidir la instalación de un tubo de drenaje pleural en un derrame paraneumónico?',
        options: [
          { id: 'A', text: 'Recuento absoluto de glóbulos blancos mayor a 10.000/uL' },
          { id: 'B', text: 'pH del líquido pleural inferior a 7.20' },
          { id: 'C', text: 'Relación de proteínas líquido pleural / suero mayor a 0.5' },
          { id: 'D', text: 'Nivel de amilasa pleural elevado al doble del plasma' },
          { id: 'E', text: 'Concentración de adenosina deaminasa (ADA) superior a 30 U/L' },
        ],
        correcta: 'B',
        explicacion: 'El pH del líquido pleural medido en condiciones anaeróbicas es el parámetro bioquímico más sensible y con mayor respaldo en la literatura médica internacional (guías BTS y ACCP) para definir un derrame paraneumónico complicado y la necesidad de drenaje con tubo de tórax. Un pH < 7.20 indica un ambiente intensamente ácido secundario al metabolismo anaerobio bacteriano y leucocitario, lo que predice con más de 95% de precisión que el derrame no se resolverá con antibióticos solos.',
        recTag: 'EUNACOM Diciembre 2019 · Reconstrucción oficial',
      },
      {
        stem: 'Hombre de 48 años con antecedentes de enolismo crónico es diagnosticado de empiema pleural derecho con abundante pus espeso y fétido al examen de toracocentesis. Se instala un tubo de drenaje pleural 28 Fr con salida inicial de 400 mL de material purulento. ¿Cuál es la terapia antimicrobiana parenteral de primera línea más adecuada?',
        options: [
          { id: 'A', text: 'Ciprofloxacino en monoterapia' },
          { id: 'B', text: 'Ampicilina / Sulbactam endovenoso (o Ceftriaxona asociada a Metronidazol)' },
          { id: 'C', text: 'Gentamicina endovenosa en dosis única diaria' },
          { id: 'D', text: 'Amoxicilina oral 500 mg cada 8 horas' },
          { id: 'E', text: 'Azitromicina endovenosa exclusiva' },
        ],
        correcta: 'B',
        explicacion: 'En el empiema pleural, especialmente en pacientes con factores de riesgo como alcoholismo crónico, trastornos deglutorios o patología periodontal, existe una alta participación de bacterias anaerobias orales (Fusobacterium, Peptostreptococcus, Bacteroides) asociadas a estreptococos y bacilos gramnegativos. La terapia antibiótica empírica de elección según las guías clínicas nacionales e internacionales es Ampicilina/Sulbactam 1.5 a 3 g cada 6 horas EV, o la combinación de Ceftriaxona 2 g EV al día más Metronidazol 500 mg cada 8 horas EV para asegurar cobertura anaerobia sólida.',
        recTag: 'EUNACOM Julio 2023 · Reconstrucción oficial',
      },
      {
        stem: 'Paciente de 55 años con empiema pleural derecho complicado tiene instalado un tubo de drenaje torácico hace 48 horas. Sin embargo, el débito ha disminuido a menos de 50 mL/día a pesar de persistir con fiebre de 38.5 °C y leucocitosis de 18.000/uL. La ecografía torácica de control demuestra múltiples tabiques gruesos de fibrina con colecciones loculadas que no comunican con el tubo. ¿Cuál es el paso terapéutico más indicado?',
        options: [
          { id: 'A', text: 'Retirar el tubo de tórax y mantener únicamente antibioticoterapia oral en domicilio' },
          { id: 'B', text: 'Instilación intrapleural de fibrinolíticos combinados (t-PA más DNAsa) o resolución por videotoracoscopía (VATS)' },
          { id: 'C', text: 'Punción pleural diaria repetida con aguja fina en la consulta' },
          { id: 'D', text: 'Aumentar la hidratación parenteral a 4.000 mL de suero fisiológico al día' },
          { id: 'E', text: 'Indicar reposo absoluto y esperar 14 días para la reabsorción espontánea' },
        ],
        correcta: 'B',
        explicacion: 'Cuando un empiema o derrame paraneumónico complicado se encuentra en fase fibrinopurulenta avanzada con múltiples tabicaciones y loculaciones que impiden el drenaje efectivo por el tubo de pleurostomía, la conducta recomendada es la terapia intrapleural combinada con fibrinolíticos (Alteplasa/t-PA 10 mg + Dornasa alfa/DNAsa 5 mg dos veces al día por 3 días según el protocolo MIST-2) o bien la intervención quirúrgica precoz mediante Cirugía Toracoscópica Videoasistida (VATS) para debridamiento y lisis de adherencias bajo visión directa.',
        recTag: 'EUNACOM Reconstrucción Canónica · Cirugía de Tórax',
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
    reconstrucciones: 'EUNACOM Julio 2018 (Q#77) · EUNACOM Diciembre 2020 (Q#14) · EUNACOM Julio 2022 (Q#82)',
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
        subhead: '1. Mecanismo de Válvula Unidireccional y Fisiopatología del Colapso Hemodinámico',
        paragraphs: [
          'El <strong>neumotórax a tensión</strong> se produce cuando una disrupción en la pleura visceral, el parénquima pulmonar o la pared torácica crea un <strong>mecanismo de válvula unidireccional (check-valve)</strong>: el aire ingresa al espacio pleural durante la inspiración, pero queda atrapado sin poder salir durante la espiración.',
          'La acumulación progresiva de aire eleva la presión intrapleural por sobre la presión atmosférica, colapsando por completo el pulmón ipsilateral, empujando el mediastino y la tráquea hacia el hemitórax contralateral y comprimiendo directamente las venas cavas superior e inferior. Esto genera una caída catastrófica del retorno venoso (precarga cardíaca), provocando <strong>shock obstructivo agudo</strong>, hipotensión severa y paro cardiorrespiratorio en disociación electromecánica (Actividad Eléctrica Sin Pulso - AESP).',
        ],
      },
      {
        subhead: '2. Diagnóstico 100% Clínico y Semiología Diferencial Inmediata',
        paragraphs: [
          '<strong>Regla de oro absoluta de urgencias EUNACOM:</strong> El diagnóstico de neumotórax a tensión es <strong>ESTRICTAMENTE CLÍNICO</strong>. Está <strong>formalmente contraindicado solicitar o esperar una radiografía de tórax</strong> u otro estudio de imágenes para confirmar la sospecha en un paciente inestable, ya que la demora conduce a la muerte en minutos.',
          'La tétrada semiológica diagnóstica reúne:<br>' +
          '1. <strong>Shock / Hipotensión arterial severa</strong> con taquicardia extrema o bradicardia pre-paro.<br>' +
          '2. <strong>Ingurgitación yugular bilateral marcada a tensión</strong> (por obstrucción mecánica del retorno venoso en la aurícula derecha).<br>' +
          '3. <strong>Desviación traqueal visible o palpable hacia el lado CONTRALATERAL</strong> a la lesión.<br>' +
          '4. Hemitórax afectado hiperexpundido, inmóvil, con <strong>timpanismo o hipersonoridad franca a la percusión</strong> y <strong>abolición completa del murmullo pulmonar</strong>.',
        ],
      },
      {
        subhead: '3. Descompresión Torácica con Aguja de Urgencia y Pleurostomía',
        paragraphs: [
          'Ante la sospecha clínica fundada, la conducta salvadora inmediata consta de dos pasos secuenciales obligatorios:<br>' +
          '• <strong>Paso 1: Descompresión inmediata con aguja (Toracocentesis con angiocatéter):</strong> Inserción de una aguja o catéter venoso grueso (<strong>calibre 14 o 16 Gauge</strong>) de al menos 5 cm de longitud en el <strong>segundo espacio intercostal en la línea medioclavicular</strong>, inmediatamente por encima del borde superior de la tercera costilla (para evitar el paquete vasculonervioso intercostal). Como alternativa avalada por ATLS (10ª ed.): en el <strong>quinto espacio intercostal en la línea axilar anterior</strong>. Se escucha la salida brusca de aire a presión, lo que transforma inmediatamente el neumotórax a tensión en un neumotórax simple y descomprime el mediastino.<br>' +
          '• <strong>Paso 2: Pleurostomía definitiva con tubo de tórax:</strong> Instalación de un tubo de drenaje pleural grueso (<strong>28 a 32 French</strong>) en el 5.º espacio intercostal línea axilar media, conectado a una trampa de agua bajo sello.',
        ],
      },
      {
        subhead: '4. Hemotórax Masivo: Fisiopatología y Criterios Diagnósticos',
        paragraphs: [
          'El <strong>hemotórax masivo</strong> se define como la acumulación rápida de <strong>≥ 1.500 mL de sangre</strong> (o más de un tercio de la volemia total del paciente) en la cavidad pleural, habitualmente por desgarro de vasos sistémicos intercostales, mamaria interna o grandes vasos hiliares.',
          '<strong>Diferenciación semiológica crucial con neumotórax a tensión:</strong><br>' +
          'El hemotórax masivo cursa con <strong>matidez franca a la percusión</strong> (líquido intrapleural) y <strong>venas del cuello planas o colapsadas</strong> (debido a shock hipovolémico/hemorrágico profundo, a diferencia de la ingurgitación del shock obstructivo). El murmullo pulmonar también se encuentra abolido en el hemitórax afectado.',
        ],
      },
      {
        subhead: '5. Indicaciones Canónicas de Toracotomía de Urgencia en Quirófano',
        paragraphs: [
          'El manejo inicial del hemotórax traumático exige reanimación con hemoderivados (relación balanceada 1:1:1 de glóbulos rojos, plasma fresco congelado y plaquetas) e instalación inmediata de tubo de pleurostomía grueso (28–32 Fr) para drenar la cavidad y evaluar el débito.',
          '<strong>Criterios estrictos de Toracotomía Abierta de Urgencia en pabellón:</strong><br>' +
          '1. <strong>Drenaje inicial inmediato de ≥ 1.500 mL de sangre</strong> fresca tras la instalación del tubo de tórax.<br>' +
          '2. <strong>Débito hemático continuo superior a 200 mL/hora durante 2 a 4 horas consecutivas</strong>.<br>' +
          '3. Necesidad persistente de transfusión de hemoderivados para mantener la estabilidad hemodinámica a pesar de adecuada expansión volumétrica.',
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
    severityTable: {
      title: 'Clasificación y Algoritmo de Prioridad en Trauma Torácico con Riesgo Vital (ATLS)',
      headers: ['Lesión Torácica', 'Mecanismo de Paro', 'Signo Patognomónico', 'Intervención de Rescate Inmediato'],
      rows: [
        ['Neumotórax a Tensión', 'Shock obstructivo por colapso de cavas', 'Timpanismo + Yugulares ingurgitadas + Desviación traqueal', 'Descompresión con aguja 14G en 2º EIC LMC → Tubo 28 Fr'],
        ['Hemotórax Masivo', 'Shock hipovolémico / exanguinación', 'Matidez percutoria + Yugulares planas + Sangre > 1.500 mL', 'Tubo pleural grueso 32 Fr + Transfusión 1:1:1 → Toracotomía'],
        ['Taponamiento Cardíaco', 'Shock cardiogénico por restricción diastólica', 'Tríada de Beck: Ruidos apagados + Hipotensión + Ingurgitación', 'Ventana pericárdica subxifoidea o Toracotomía resucitativa'],
        ['Tórax Volante (Volet)', 'Insuficiencia respiratoria por contusión pulmonar', 'Respiración paradójica en segmento de ≥ 2 costillas rotas', 'Oxigenoterapia, analgesia epidural y VMI si hipoxemia'],
      ],
    },
    treatmentTable: {
      title: 'Protocolo de Intervenciones Críticas y Dosis en Neumotórax a Tensión y Hemotórax',
      headers: ['Fase del Manejo', 'Objetivo Terapéutico', 'Dispositivo / Fármaco', 'Detalle Operativo'],
      rows: [
        ['1. Descompresión Aguda', 'Aliviar tensión intrapleural inmediata', 'Catéter 14-16 Gauge (bránula larga)', '2º EIC línea medioclavicular o 5º EIC línea axilar anterior'],
        ['2. Drenaje Definitivo', 'Evacuar aire/sangre y reexpandir', 'Tubo de tórax 28 a 32 Fr', '5º EIC línea axilar media conectado a sello de agua (-15 cmH2O)'],
        ['3. Resucitación Hemostática', 'Restaurar perfusión sin dilución', 'Glóbulos rojos + Plasma + Plaquetas (1:1:1)', 'Evitar cristaloides excesivos que desplazan coágulos (PA meta ~90)'],
        ['4. Toracotomía Quirúrgica', 'Control hemostático en pabellón', 'Toracotomía anterolateral o posterolateral', 'Indicada si sangrado inicial ≥ 1.500 mL o ≥ 200 mL/h x 2-4 h'],
      ],
    },
    vignette: 'Paciente de 28 años politraumatizado por colisión vehicular a alta velocidad ingresa al reanimador en pésimas condiciones: cianosis periférica, diaforesis fría, FR 38 rpm, PA 65/40 mmHg, FC 138 lpm, SatO2 78% con máscara. Al examen físico destaca: ingurgitación yugular bilateral evidente, hemitórax izquierdo notablemente abombado con ausencia completa de ruidos respiratorios a la auscultación y marcada hipersonoridad timpánica a la percusión. La tráquea se palpa desviada hacia el lado derecho en la fosa supraesternal.',
    explicacion: 'El paciente presenta un Neumotórax a Tensión izquierdo con shock obstructivo secundario por colapso mecánico del retorno venoso hacia las cavidades derechas. El cuadro es de riesgo vital inminente. La conducta oficial indiscutible e inmediata es la descompresión con aguja o catéter venoso grueso (14–16 Gauge) en el segundo espacio intercostal línea medioclavicular izquierda (o 5.º EIC línea axilar anterior), lo que transforma el neumotórax en abierto simple y restaura la precarga. Inmediatamente después se instala una pleurostomía con tubo grueso conectado a trampa de agua. Está formalmente contraindicado perder tiempo solicitando una radiografía.',
    keyPoints: [
      'El neumotórax a tensión es una emergencia médica con diagnóstico 100% clínico; jamás se debe solicitar radiografía de tórax.',
      'Semiología clásica: shock obstructivo + ingurgitación yugular + hipersonoridad/timpanismo + desviación traqueal contralateral.',
      'Manejo inmediato: descompresión urgente con aguja gruesa 14-16G en 2º EIC línea medioclavicular o 5º EIC línea axilar anterior.',
      'La pleurostomía con tubo grueso de tórax (28-32 Fr) es el tratamiento definitivo obligatorio tras la descompresión con aguja.',
      'Diferencia cardinal con hemotórax masivo: el hemotórax cursa con matidez a la percusión y venas yugulares colapsadas por hipovolemia.',
      'Criterios de toracotomía quirúrgica de urgencia en hemotórax: drenaje inicial ≥ 1.500 mL de sangre o débito continuo ≥ 200 mL/hora por 2 a 4 horas.',
      'Trampa crítica: intubar a presión positiva a un paciente con neumotórax a tensión sin descomprimir precipita un paro cardíaco inmediato.',
      'En el taponamiento cardíaco hay hipotensión e ingurgitación yugular pero los pulmones ventilan simétricamente sin timpanismo ni matidez.',
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
        recTag: 'EUNACOM Julio 2018 · Reconstrucción oficial',
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
        recTag: 'EUNACOM Diciembre 2020 · Reconstrucción oficial',
      },
      {
        stem: 'Hombre de 42 años hospitalizado en UCI bajo ventilación mecánica invasiva por distrés respiratorio severo con PEEP de 14 cmH2O. En forma súbita se activa la alarma de alta presión en la vía aérea, la saturación cae bruscamente de 94% a 74% y la presión arterial desciende de 125/80 a 60/35 mmHg con taquicardia de 142 lpm. A la auscultación rápida se constata silencio respiratorio absoluto en el hemitórax derecho con timpanismo a la percusión. ¿Cuál es la conducta inmediata que debe realizar el equipo tratante?',
        options: [
          { id: 'A', text: 'Solicitar una radiografía de tórax portátil de urgencia con técnico en cama' },
          { id: 'B', text: 'Aumentar la PEEP a 18 cmH2O y subir la FiO2 al 100%' },
          { id: 'C', text: 'Desconexión transitoria del ventilador y descompresión torácica inmediata con aguja gruesa en hemitórax derecho' },
          { id: 'D', text: 'Administrar un bolo de 1 mg de adrenalina endovenosa en bolo directo' },
          { id: 'E', text: 'Retirar el tubo endotraqueal por sospecha de intubación monobronquial selectiva' },
        ],
        correcta: 'C',
        explicacion: 'El paciente ha sufrido un neumotórax a tensión iatrogénico secundario a barotrauma por ventilación con PEEP elevada. La presión positiva del ventilador insufla continuamente el espacio pleural, colapsando el retorno venoso y amenazando con un paro inminente en AESP. La conducta inmediata obligatoria es desconectar temporalmente al paciente del ventilador para cesar la presión positiva e insertar de urgencia una aguja gruesa (o realizar toracostomía con dedo / tubo) en el hemitórax afectado sin esperar jamás una radiografía.',
        recTag: 'EUNACOM Julio 2022 · Reconstrucción oficial',
      },
      {
        stem: 'Mujer de 30 años ingresa tras sufrir una colisión frontal de tránsito como conductora sin cinturón de seguridad. Al examen físico: pálida, sudorosa, confusa, PA 78/48 mmHg, FC 124 lpm, FR 28 rpm. Las venas yugulares se observan colapsadas y vacías. A la exploración del tórax se constata dolor marcado a la palpación de arcos costales izquierdos, matidez franca a la percusión en los dos tercios inferiores del hemitórax izquierdo y ausencia de ruidos respiratorios. ¿Cuál es el diagnóstico más probable y la conducta inicial?',
        options: [
          { id: 'A', text: 'Neumotórax a tensión; punción con aguja en segundo espacio intercostal' },
          { id: 'B', text: 'Taponamiento cardíaco; punción pericárdica subxifoidea de urgencia' },
          { id: 'C', text: 'Hemotórax masivo; pleurostomía con tubo torácico grueso y resucitación hemostática con hemoderivados' },
          { id: 'D', text: 'Contusión pulmonar simple; nebulización y analgesia oral' },
          { id: 'E', text: 'Rotura diafragmática con herniación gástrica; instalación inmediata de sonda nasogástrica' },
        ],
        correcta: 'C',
        explicacion: 'La presencia de shock hipovolémico (hipotensión con taquicardia y venas yugulares colapsadas/planas), sumada a la matidez franca a la percusión y silencio respiratorio en el hemitórax traumatizado, es el cuadro clínico característico del hemotórax traumático masivo. A diferencia del neumotórax a tensión (donde hay timpanismo y yugulares ingurgitadas a tensión) y del taponamiento cardíaco (donde hay yugulares ingurgitadas y percusión normal), el hemotórax genera pérdida exanguinante al espacio pleural. La conducta es tubo de tórax (28-32 Fr) y resucitación precoz con hemoderivados 1:1:1.',
        recTag: 'EUNACOM Reconstrucción Canónica · Manejo de Politraumatizados',
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
