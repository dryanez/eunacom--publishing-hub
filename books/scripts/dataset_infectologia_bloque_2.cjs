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

/**
 * DATASET INFECTOLOGÍA · BLOQUE 2
 * Epidemiología Clínica, Profilaxis Post-Exposición e IAAS
 */

const bloque2 = [
  {
    id: 'inf-05',
    classId: 'infecto-05',
    tier: 1,
    blockNum: 2,
    blockName: 'Salud Pública, Profilaxis Post-Exposición e IAAS',
    topicLabel: '2.1',
    title: 'Manejo de Contactos en Enfermedades Transmisibles y Accidentes Cortopunzantes',
    perfilCode: '1.04.3.001, 1.04.3.009, 1.04.3.010',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES): Prevención de la Transmisión Vertical de VIH y Sífilis · Programa Nacional TBC MINSAL',
    reconstrucciones: 'EUNACOM Diciembre 2022 (Q#81) · EUNACOM Julio 2019 (Q#142) · EUNACOM Diciembre 2017 (Q#16)',
    frecuencia: 'Alta rentabilidad · preguntas estructuradas sobre profilaxis de TBC en niños, accidente cortopunzante laboral y meningitis',
    svg: null, algoTitle: 'Algoritmo de Profilaxis Post-Exposición y Manejo de Contactos',
    diagram: flow('Algoritmo de Profilaxis Post-Exposición y Manejo de Contactos', [
      { t: 'Contacto Estrecho con Infección Transmisible o Accidente Biológico', s: 'TBC bacilífera · Meningococo · Coqueluche · Punción con aguja hueca' },
      { k: 'split', q: '¿Tipo de Exposición y Agente Involucrado?', s: 'TBC conviviente | Punción VIH < 72 h | Contacto respiratorio', ll: 'tbc niño o punción vih', rl: 'meningococo o coqueluche',
        left: { t: 'TBC: Isoniazida Directa | VIH: Triterapia PEP', s: 'Todo < 15 a recibe H inmediata · Triterapia en < 72 h x 28 días', type: 'crit' },
        right: { t: 'Meningococo: Rifampicina | Coqueluche: Azitro', s: 'Rifampicina 600 mg c/12h x 2 d (Ceftriaxona en emb) · Azitromicina x 5 d', type: 'acc' } },
      { t: 'Perlas Cardinales: RN de Madre TBC posterga BCG | En VIH corte PPD 5 mm', s: 'RN mantiene lactancia con mascarilla · Nunca retrasar PEP por esperar a la fuente', type: 'warn', al: 'conducta clave', from: 'left' },
    ]),
    contexto: 'El manejo de contactos y la profilaxis post-exposición son prioridades de salud pública en el EUNACOM. Los tres conceptos indispensables son: la quimioprofilaxis universal con isoniazida en todo menor de 15 años expuesto a TBC bacilífera, el uso de rifampicina en contactos de meningococo, y la ventana estricta de 72 horas para la triterapia antirretroviral laboral.',
    contentSections: [
      {
        subhead: '1. Tuberculosis: Quimioprofilaxis en Contactos',
        paragraphs: [
          'La TBC se transmite por aerosoles desde pacientes bacilíferos (BK+). En <strong>menores de 15 años y pacientes con VIH</strong>, la respuesta celular es inmadura o deficiente, con altísimo riesgo de meningitis TBC y forma miliar.',
          '<strong>Regla de oro:</strong> en Chile, <strong>todo menor de 15 años conviviente recibe Isoniazida oral de entrada</strong> (10 mg/kg/día), sin esperar el PPD. Si el PPD inicial es negativo, se repite al 3° mes: si continúa negativo se suspende; si positiviza, se completan 6 meses. En adultos solo se trata si el PPD es &gt; 10 mm (o &gt; 5 mm en VIH).',
        ],
      },
      {
        subhead: '2. Recién Nacido de Madre con TBC Activa',
        paragraphs: [
          'En el RN de madre con TBC pulmonar activa bacilífera, la conducta obligatoria consta de tres medidas simultáneas:',
          '1) Iniciar <strong>Isoniazida oral por 6 meses</strong>; 2) <strong>Postergar la vacuna BCG</strong> al término de la quimioprofilaxis (para no neutralizar el bacilo vacunal vivo); 3) <strong>Mantener la lactancia materna</strong> con uso obligatorio de mascarilla quirúrgica materna.',
        ],
      },
      {
        subhead: '3. Meningococo, Coqueluche y Profilaxis Respiratoria',
        paragraphs: [
          '<strong>Meningococo (<em>N. meningitidis</em>):</strong> profilaxis a contactos que pernoctan bajo el mismo techo o expuestos a secreciones en los 7 días previos. Fármaco de elección: <strong>Rifampicina oral 600 mg c/12h por 2 días</strong> (o Ciprofloxacino 500 mg dosis única). En embarazadas: <strong>Ceftriaxona 250 mg IM dosis única</strong>.',
          '<strong>Coqueluche (<em>B. pertussis</em>):</strong> profilaxis con <strong>Azitromicina oral por 5 días</strong> a todos los contactos sintomáticos y a menores de 1 año o embarazadas.',
        ],
      },
      {
        subhead: '4. Accidente Cortopunzante Laboral (PEP VIH)',
        paragraphs: [
          'Tras una punción profunda con aguja hueca con sangre, el virus tarda 48 a 72 horas en diseminarse a los ganglios linfáticos. Por ello, la <strong>Profilaxis Post-Exposición (PEP)</strong> con <strong>Triterapia Antirretroviral por 28 días</strong> debe iniciarse antes de las <strong>72 horas</strong> (idealmente primeras 2–4 h).',
          'Conducta: lavado inmediato con agua y jabón, ELISA basal al trabajador, y oferta inmediata de triterapia sin retrasarla por el consentimiento o serología de la fuente.',
        ],
      },
    ],
    table: {
      title: 'Reglas de Quimioprofilaxis en Contactos EUNACOM',
      headers: ['Escenario de Contacto', 'Población Objetivo', 'Esquema Profiláctico', 'Perla Crítica de Examen'],
      rows: [
        ['TBC Pulmonar (BK+)', 'Menores de 15 años convivientes', 'Isoniazida directa (3 meses si PPD -; 6 meses si vira)', 'Todo < 15 a recibe isoniazida aunque PPD inicial sea 0 mm'],
        ['RN de madre con TBC', 'Hijo de madre con TBC activa', 'Isoniazida 6 meses + postergar BCG al final', 'Lactancia materna permitida con mascarilla materna'],
        ['Meningitis meningocócica', 'Convivientes en últimos 7 días', 'Rifampicina 600 mg c/12h x 2 días (o Cipro dosis única)', 'En embarazadas usar Ceftriaxona 250 mg IM dosis única'],
        ['Accidente cortopunzante', 'Punción laboral con fuente VIH(+) o desc.', 'Triterapia oral x 28 días iniciada antes de 72 h', 'Nunca demorar PEP esperando resultado serológico de la fuente'],
      ],
    },
    vignette: 'Interno de medicina de 24 años sufre punción profunda en dedo índice con aguja hueca calibre 21G tras tomar gases arteriales a un paciente hospitalizado en medicina interna cuyo estatus serológico es desconocido. El interno lava la herida inmediatamente con abundante agua y jabón. Al consultar al paciente fuente, este se niega inicialmente a realizarse exámenes de sangre.',
    explicacion: 'En un accidente cortopunzante ocupacional de alto riesgo (aguja hueca con sangre arterial) proveniente de una fuente con estatus serológico desconocido, la normativa nacional de salud laboral indica ofrecer de inmediato la Profilaxis Post-Exposición (PEP) con triterapia antirretroviral oral al trabajador dentro de las primeras 2 a 4 horas (ventana máxima útil de 72 horas) por un total de 28 días, mientras se define la situación serológica. Paralelamente, se debe solicitar ELISA de VIH basal al trabajador accidentado (para documentar la ausencia de infección previa al accidente). Por ley, la toma de serología al paciente fuente requiere siempre consentimiento informado; no se puede obligar al paciente fuente ni esperar su autorización para proteger farmacológicamente al trabajador.',
    keyPoints: [
      'Todo menor de 15 años contacto de TBC bacilífera recibe isoniazida de entrada, sin importar el PPD inicial.',
      'El PPD solo se indica de rutina en menores de 15 años y pacientes VIH; en adultos sanos no se pide de rutina.',
      'Duración de profilaxis TBC: adultos PPD > 10 mm = 6 meses; VIH PPD > 5 mm = 9 meses; menor de 15 años = 6 meses si vira o 3 meses si persiste PPD (-).',
      'RN de madre con TBC: isoniazida 6 meses, diferir BCG, mantener lactancia materna con mascarilla.',
      'Profilaxis de contactos de meningitis: SOLO se realiza para Meningococo (Rifampicina 2 días o Cipro/Ceftriaxona dosis única) y Haemophilus influenzae b (Rifampicina 4 días).',
      'En embarazada contacto de meningococo, el antibiótico de elección es Ceftriaxona 250 mg IM dosis única.',
      'Coqueluche: profilaxis con Azitromicina por 5 días a contactos sintomáticos y a grupos de alto riesgo (< 1 año, embarazadas 3er trimestre).',
      'Accidente cortopunzante con fuente VIH (+) o desconocida: ofrecer triterapia antirretroviral (PEP) en las primeras horas durante 28 días, con controles serológicos al día 0, 6 semanas y 3 meses.',
    ],
    questions: [
      {
        stem: 'Médica de 30 años sufre accidente cortopunzante con aguja de paciente cuya serología VIH es desconocida. Tras el lavado profuso de la herida, ¿cuál es la conducta más adecuada a seguir?',
        options: [
          { id: 'A', text: 'Esperar resultado del ELISA del paciente fuente antes de decidir' },
          { id: 'B', text: 'Ofrecer de inmediato triterapia antirretroviral profiláctica (PEP) por 28 días a 6 semanas' },
          { id: 'C', text: 'Simplemente observar ya que la fuente probablemente es VIH negativa' },
          { id: 'D', text: 'Solicitar PCR para VIH al trabajador de salud de inmediato y esperar resultado' },
          { id: 'E', text: 'Iniciar monoterapia con zidovudina por 4 semanas' },
        ],
        correcta: 'B',
        explicacion: 'Ante un accidente laboral de riesgo biológico con fuente desconocida o seropositiva, la profilaxis post-exposición (PEP) con triterapia debe ofrecerse e iniciarse de forma inmediata (idealmente < 2-4 horas, máximo 72 horas) por 28 días. No se debe postergar el inicio esperando el resultado serológico de la fuente (A), ya que la eficacia decae drásticamente tras las primeras horas.',
        recTag: 'Banco de Preguntas Oficial · Manejo de Contactos',
      },
      {
        stem: 'Niño de 8 años, contacto intradomiciliario de padre con tuberculosis bacilífera. Baciloscopía negativa, radiografía normal, PPD 6 mm. ¿Cuál es la conducta?',
        options: [
          { id: 'A', text: 'Iniciar tratamiento antituberculoso completo con 4 fármacos' },
          { id: 'B', text: 'No requiere profilaxis ya que el PPD es negativo (< 10 mm)' },
          { id: 'C', text: 'Isoniazida por 3 meses y controlar con nuevo PPD al término' },
          { id: 'D', text: 'Isoniazida por 6 meses sin necesidad de control posterior' },
          { id: 'E', text: 'Vacunar con BCG y observar evolución' },
        ],
        correcta: 'C',
        explicacion: 'En menores de 15 años expuestos a un contacto bacilífero con PPD inicial negativo (< 10 mm en no infectados), la norma chilena indica quimioprofilaxis con Isoniazida de entrada durante 3 meses ("período de ventana inmunológica") y repetir el PPD: si al tercer mes continúa negativo se suspende; si positiviza (viraje), se completan 6 meses de tratamiento.',
        recTag: 'Banco de Preguntas Oficial · Manejo de Contactos',
      },
    ],
  },
  {
    id: 'inf-06',
    classId: 'infecto-06',
    tier: 2,
    blockNum: 2,
    blockName: 'Salud Pública, Profilaxis Post-Exposición e IAAS',
    topicLabel: '2.2',
    title: 'Rabia y Tétanos: Profilaxis de Heridas y Manejo Clínico',
    perfilCode: '1.04.2.009, 1.04.3.002, 1.04.3.008, 1.04.3.012',
    dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Garantía Explícita en Salud (GES): Prevención y Profilaxis Post-Exposición Rabia y Tétanos',
    reconstrucciones: 'Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026',
    frecuencia: 'Alta rentabilidad · algoritmos estricto de mordeduras por perro/murciélago y vacuna antitetánica',
    svg: null, algoTitle: null,
    diagram: null,
    contexto: 'La rabia humana y el tétanos son enfermedades infecciosas neurotrópicas prevenibles por vacunación con letalidad cercana al 100% una vez que se manifiestan clínicamente. En el EUNACOM se evalúan las reglas exactas del MINSAL para indicar vacuna antirrábica (observación de perro por 10 días vs murciélago) y la inmunoprofilaxis antitetánica según el tipo de herida y el estado vacunal previo.',
    contentSections: [
      {
        subhead: '1. Rabia humana: patogenia y norma técnica MINSAL',
        paragraphs: [
          'El virus rábico (<em>Lyssavirus</em>) es un virus ARN neurotrópico transmitido por la saliva de mamíferos infectados a través de mordeduras o contacto con mucosas. Tras la inoculación, el virus se replica en el miocito local y asciende por transporte axonal retrógrado a través de los nervios periféricos hacia el asta posterior de la médula y el encéfalo, causando una encefalomielitis letal con hidrofobia, espasmos laríngeos y paro cardiorrespiratorio.',
          '<strong>Reglas MINSAL de profilaxis post-exposición antirrábica:</strong><br>' +
          '• <strong>Animal doméstico conocido y ubicable (perro/gato):</strong> se mantiene en <strong>observación veterinaria estricta por 10 días</strong>. Si el animal permanece sano tras los 10 días, NO se vacuna al paciente. Si el animal enferma, muere o desaparece, se inicia vacunación inmediata.<br>' +
          '• <strong>Animal desconocido, vagabundo o provocado:</strong> se inicia <strong>vacunación inmediata</strong> (esquema de 5 dosis los días 0, 3, 7, 14 y 28).<br>' +
          '• <strong>Contacto con murciélago (quiróptero):</strong> en Chile el reservorio silvestre endémico es el murciélago (<em>Tadarida brasiliensis</em>). <strong>Todo contacto con murciélago (mordedura, manipulación a mano desnuda o despertar en una habitación con un murciélago)</strong> se clasifica como exposición grave y exige <strong>vacunación antirrábica completa inmediata + Inmunoglobulina antirrábica humana (IGH-R)</strong>.',
        ],
      },
      {
        subhead: '2. Tétanos: toxina tetánica y cuadro clínico',
        paragraphs: [
          '<em>Clostridium tetani</em> es un bacilo Gram positivo anaerobio estricto formador de esporas omnipresentes en el suelo y heces animales. Las esporas germinan en tejidos desvitalizados, sucios o con bajo potencial redox (heridas punzantes, quemaduras, fracturas expuestas).',
          'Produce la <strong>tetanoespasmina</strong>, una neurotoxina que asciende por transporte axonal retrógrado hacia las interneuronas inhibitorias de Renshaw en la médula espinal. La toxina degrada la sinaptobrevina, bloqueando la liberación de neurotransmisores inhibitorios (GABA y glicina). Esto produce una desinhibición motora masiva con <strong>contracción muscular tónica sostenida y espasmos paroxísticos dolorosos</strong>.',
          '<strong>Clínica:</strong> trismus (espasmo del masetero), risa sardónica, opistótonos (arco dorsal rígido) y espasmos desencadenados por estímulos luminosos o sonoros. La mente permanece lúcida. La causa de muerte es el paro respiratorio por espasmo laríngeo o diafragmático.',
        ],
      },
      {
        subhead: '3. Profilaxis antitetánica: la regla de las 3 dosis',
        paragraphs: [
          'Ante cualquier herida, se debe evaluar: (1) las características de la herida (limpia vs sucia/tetanígena), y (2) el número de dosis previas de toxoide tetánico recibidas en la vida:',
          '• <strong>Herida limpia superficial:</strong> requiere refuerzo con toxoide (vacuna dT) solo si han pasado <strong>> 10 años</strong> desde la última dosis.<br>' +
          '• <strong>Herida sucia o tetanígena</strong> (contaminada con tierra, heces, saliva, punción profunda, mordedura, tejido desvitalizado): requiere refuerzo con toxoide si han pasado <strong>> 5 años</strong> desde la última dosis.<br>' +
          '• <strong>Esquema incompleto (< 3 dosis) o antecedente vacunal desconocido:</strong> en herida sucia requiere <strong>Vacuna (dT) + Inmunoglobulina antitetánica humana (IGH-T 250 UI IM)</strong> en sitios anatómicos separados.',
        ],
      },
    ],
    table: {
      title: 'Matriz de Conducta Oficial en Profilaxis Antitetánica (MINSAL)',
      headers: ['Historia de Vacunación Previa', 'Herida Limpia y Superficial', 'Herida Sucia / Tetanígena / Punzante'],
      rows: [
        ['Incompleta (< 3 dosis) o Desconocida', 'Vacuna (dT) 3 dosis · Sin IGH-T', 'Vacuna (dT) 3 dosis + Inmunoglobulina (IGH-T 250 UI)'],
        ['Completa (≥ 3 dosis) · Última < 5 años', 'No requiere nada', 'No requiere nada'],
        ['Completa (≥ 3 dosis) · Última 5 a 10 años', 'No requiere nada', 'Solo refuerzo de Vacuna (dT) · Sin IGH-T'],
        ['Completa (≥ 3 dosis) · Última > 10 años', 'Solo refuerzo de Vacuna (dT)', 'Solo refuerzo de Vacuna (dT) · Sin IGH-T'],
      ],
    },
    vignette: 'Hombre de 32 años, campesino, sufre herida punzante profunda en la planta del pie derecho con un clavo oxidado en un establo. Refiere haber recibido vacunas en su infancia pero no recuerda ningún refuerzo en los últimos 15 años. Al examen: herida puntiforme de 1 cm con márgenes desvitalizados, dolor moderado y restos de barro en su interior.',
    explicacion: 'Se trata de una herida claramente tetanígena (punzante profunda, contaminada con tierra y materia fecal animal). Dado que el paciente tiene antecedentes de vacunación infantil (≥ 3 dosis en el PNI) pero su último refuerzo fue hace más de 10 años, la conducta según la norma técnica es administrar de inmediato un refuerzo de toxoide tetánico (dT). NO requiere inmunoglobulina antitetánica pasiva (IGH-T), ya que esta última se reserva estrictamente para pacientes con esquema incompleto (< 3 dosis) o antecedente vacunal desconocido ante heridas sucias.',
    keyPoints: [
      'Rabia por perro/gato ubicable: observación por 10 días. Si el animal está sano al día 10, NO se vacuna al paciente.',
      'Rabia por murciélago: contacto = exposición grave = VACUNA INMEDIATA + INMUNOGLOBULINA ANTIRRÁBICA en el 100% de los casos.',
      'Tétanos: toxina bloquea la liberación de GABA y glicina en las interneuronas medulares inhibitorias.',
      'Herida limpia: refuerzo de toxoide si pasaron > 10 años. Herida sucia: refuerzo si pasaron > 5 años.',
      'Inmunoglobulina antitetánica (IGH-T): SOLO se administra si la herida es sucia/tetanígena Y el esquema es desconocido o < 3 dosis.',
      'Manejo de tétanos establecido: Ingreso a UCI en box oscuro y silencioso, Metronidazol EV (o Penicilina), IGH-T 3.000-6.000 UI, sedación y relajantes musculares.',
    ],
    questions: [
      {
        stem: 'Un hombre de 28 años despierta en una cabaña de veraneo y encuentra un murciélago vivo volando en su habitación. No presenta heridas evidentes ni recuerda haber sido mordido. ¿Cuál es la conducta inmediata recomendada?',
        options: [
          { id: 'A', text: 'Observar al paciente de forma ambulatoria y consultar solo si presenta fiebre o cefalea' },
          { id: 'B', text: 'Iniciar vacunación antirrábica completa e inmunoglobulina antirrábica de inmediato' },
          { id: 'C', text: 'Capturar al murciélago para observarlo vivo durante 10 días' },
          { id: 'D', text: 'Administrar profilaxis con amoxicilina y citar a curaciones diarias' },
          { id: 'E', text: 'Descartar el riesgo de rabia dado que no existen lesiones cortantes visibles' },
        ],
        correcta: 'B',
        explicacion: 'En Chile, el murciélago es el principal reservorio de rabia. Las mordeduras de murciélago pueden ser indoloras e imperceptibles. Según la norma MINSAL, el hallazgo de un murciélago en la misma habitación donde dormía una persona se considera una exposición de alto riesgo ("contacto no apercibido"). La indicación obligatoria es iniciar de inmediato la vacunación antirrábica completa (esquema de 5 dosis) junto con la administración de Inmunoglobulina antirrábica.',
        recTag: 'Banco de Preguntas Oficial · Rabia y Tétanos',
      },
      {
        stem: 'Una mujer de 45 años consulta tras cortarse la mano con una lata oxidada en su patio. Su esquema de vacunación contra el tétanos está al día, habiendo recibido su última dosis de refuerzo hace 3 años. ¿Cuál es la indicación correcta?',
        options: [
          { id: 'A', text: 'Aseo quirúrgico local de la herida sin necesidad de vacuna ni inmunoglobulina' },
          { id: 'B', text: 'Administrar refuerzo con toxoide tetánico (dT)' },
          { id: 'C', text: 'Administrar inmunoglobulina antitetánica (IGH-T) en dosis de 250 UI' },
          { id: 'D', text: 'Administrar vacuna dT + inmunoglobulina antitetánica' },
          { id: 'E', text: 'Iniciar profilaxis antibiótica con ciprofloxacino por 10 días' },
        ],
        correcta: 'A',
        explicacion: 'En un paciente con antecedente fidedigno de vacunación completa cuya última dosis fue administrada hace menos de 5 años, los títulos séricos de anticuerpos antitoxina son óptimos y protectores, incluso ante heridas sucias o tetanígenas. Por ende, solo se requiere aseo prolijo de la herida, sin indicación de toxoide ni de inmunoglobulina.',
        recTag: 'Banco de Preguntas Oficial · Rabia y Tétanos',
      },
    ],
  },
  {
    id: 'inf-07',
    classId: 'infecto-07',
    tier: 1,
    blockNum: 2,
    blockName: 'Salud Pública, Profilaxis Post-Exposición e IAAS',
    topicLabel: '2.3',
    title: 'IAAS, Infecciones de Catéteres Vasculares y Precauciones de Aislamiento',
    perfilCode: '1.04.1.015, 1.04.3.005',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Norma Técnica N° 124 MINSAL: Prevención y Control de Infecciones Asociadas a la Atención de Salud (IAAS)',
    reconstrucciones: 'EUNACOM Diciembre 2018 (Q#122)',
    frecuencia: 'Alta rentabilidad · tipos de aislamiento clínico y manejo de bacteriemia por catéter CVC',
    svg: null, algoTitle: null,
    diagram: null,
    contexto: 'Las Infecciones Asociadas a la Atención de Salud (IAAS) son un indicador directo de calidad asistencial y una causa mayor de morbimortalidad intrahospitalaria. El EUNACOM evalúa de forma repetitiva dos competencias prácticas: definir el tipo de aislamiento hospitalario que corresponde según el patógeno y la conducta diagnóstica y terapéutica ante una infección de catéter venoso central (CVC).',
    contentSections: [
      {
        subhead: '1. Precauciones de aislamiento hospitalario: tipos y patógenos clave',
        paragraphs: [
          'Todos los pacientes hospitalizados requieren <strong>Precauciones Estándar</strong> (higiene de manos con alcohol gel o agua y jabón antes y después del contacto, uso de EPP según riesgo de salpicadura y manejo seguro de cortopunzantes). Adicionalmente, se indican <strong>Precauciones Específicas basadas en el mecanismo de transmisión</strong>:',
          '• <strong>Aislamiento de Contacto:</strong> bata limpia no estéril + guantes antes de entrar a la habitación. Para: microorganismos multirresistentes (SAMR, BLEE, enterococo resistente a vancomicina VRE), <em>Clostridioides difficile</em> (lavado de manos OBLIGATORIO con agua y jabón, el alcohol gel no destruye las esporas), rotavirus, sarna noruega e impétigo.<br>' +
          '• <strong>Aislamiento por Gotitas (partículas > 5 micrones, caen a < 1 metro):</strong> mascarilla quirúrgica antes de entrar. Habitación compartida por cohorte o separada por > 1 metro. Para: Meningococo (<em>Neisseria meningitidis</em>), Influenza, Adenovirus, Coqueluche, Parotiditis y Rubéola.<br>' +
          '• <strong>Aislamiento Aéreo / Respiratorio (núcleos de gotitas < 5 micrones, flotan en el aire):</strong> mascarilla de alta eficiencia N95 o FFP2 + <strong>habitación individual con presión negativa</strong> (mínimo 6-12 recambios de aire por hora) con puerta siempre cerrada. Para: <strong>Tuberculosis pulmonar bacilífera activa, Sarampión y Varicela / Herpes zóster diseminado</strong>.',
        ],
      },
      {
        subhead: '2. Infección del torrente sanguíneo asociada a Catéter Venoso Central (ITSCVC)',
        paragraphs: [
          'Se produce por migración de bacterias de la piel a lo largo del trayecto externo del catéter (vía extraluminal precoz < 10 días) o por contaminación del conector y soluciones de infusión (vía intraluminal tardía > 10 días). Patógenos causales: <em>Staphylococcus epidermidis</em> (coagulasa negativo, 40-50%), <em>Staphylococcus aureus</em> (20%), enterobacterias y <em>Candida spp.</em>',
          '<strong>Diagnóstico microbiológico pareado:</strong> se toman <strong>hemocultivos periféricos simultáneos con hemocultivos tomados a través de cada lumen del CVC</strong>. Criterio diagnóstico de certeza: (1) Crecimiento del mismo microorganismo en ambos frascos con una diferencia de tiempo de positividad (DTP) > 2 horas antes en el CVC respecto al periférico, o (2) Cultivo cuantitativo con una proporción CVC/periférico ≥ 3:1.',
        ],
      },
      {
        subhead: '3. Conducta terapéutica y criterios de retiro inmediato del CVC',
        paragraphs: [
          '<strong>Antibioticoterapia empírica:</strong> Vancomicina EV (para cubrir SAMR y estafilococo coagulasa negativo) asociada a cobertura para bacilos Gram negativos (Cefepime, Piperacilina-Tazobactam o Amikacina) si el paciente está séptico o neutropénico.',
          '<strong>Criterios mandatorios de RETIRO INMEDIATO del catéter:</strong><br>' +
          '1. Shock séptico o inestabilidad hemodinámica severa.<br>' +
          '2. Infección del túnel subcutáneo o eritema/pus franco en el sitio de inserción.<br>' +
          '3. Complicaciones metastásicas: endocarditis bacteriana, tromboflebitis séptica supurada o embolias sépticas pulmonares.<br>' +
          '4. Microorganismos de alto riesgo: <strong><em>Staphylococcus aureus</em>, <em>Candida spp.</em>, <em>Pseudomonas aeruginosa</em> o bacterias multirresistentes</strong>.<br>' +
          '5. Persistencia de bacteriemia o fiebre tras 48 a 72 horas de tratamiento antibiótico adecuado.',
        ],
      },
    ],
    table: {
      title: 'Tipos de Aislamiento Hospitalario EUNACOM: Patógenos y Medidas Obligatorias',
      headers: ['Tipo de Aislamiento', 'Medidas y EPP Obligatorio', 'Habitación Requerida', 'Patógenos Clásicos EUNACOM'],
      rows: [
        ['Contacto', 'Guantes + Pechera/Bata plástica al entrar', 'Individual o cohorte de misma bacteria', 'Clostridioides difficile, SAMR, VRE, BLEE, Sarna'],
        ['Gotitas', 'Mascarilla quirúrgica al entrar al box', 'Separación > 1 metro entre camas', 'Meningococo, Influenza, Coqueluche, Parotiditis'],
        ['Aéreo (Respiratorio)', 'Mascarilla N95 / FFP2 con sello hermético', 'Presión negativa + puerta cerrada obligatoria', 'Tuberculosis bacilífera, Sarampión, Varicela activa'],
        ['Protector (Inverso)', 'Mascarilla quirúrgica + bata limpia + no flores', 'Presión positiva (flujo laminar)', 'Neutropenia severa (RAN < 500), Trasplante médula'],
      ],
    },
    vignette: 'Hombre de 64 años hospitalizado en UCI por pancreatitis aguda grave, portador de catéter venoso central subclavio derecho desde hace 12 días, presenta bruscamente alza térmica hasta 39 °C con calofríos y taquicardia. El sitio de inserción del CVC se encuentra limpio, sin eritema ni secreción. Se toman hemocultivos pareados (periféricos y a través del CVC) y a las 14 horas el laboratorio informa crecimiento de Staphylococcus aureus meticilino-resistente (SAMR) en ambos frascos.',
    explicacion: 'El paciente presenta una bacteriemia asociada a catéter venoso central por Staphylococcus aureus. A diferencia de las infecciones por estafilococo coagulasa negativo (donde en ocasiones seleccionadas se puede intentar sellado de catéter), la bacteriemia por S. aureus tiene una altísima propensión a causar siembras metastásicas (endocarditis en 20-30%, espondilodiscitis y abscesos esplénicos). La indicación categórica e inmediata es el RETIRO OBLIGATORIO del CVC, inicio de Vancomicina EV (ajustada a niveles plasmáticos de valle) y realización mandatoria de ecocardiograma transtorácico o transesofágico para descartar endocarditis infecciosa.',
    keyPoints: [
      'Clostridioides difficile requiere Aislamiento de Contacto y LAVADO DE MANOS CON AGUA Y JABÓN (el alcohol no inactiva esporas).',
      'Tuberculosis activa, Sarampión y Varicela exigen Aislamiento AÉREO: mascarilla N95 y habitación con PRESIÓN NEGATIVA.',
      'Meningococo exige Aislamiento de GOTITAS (mascarilla quirúrgica) hasta cumplir 24 horas de antibióticos efectivos.',
      'Bacteriemia por catéter por Staphylococcus aureus o Candida: el CVC se debe RETIRAR SIEMPRE sin excepción.',
      'Diagnóstico de bacteriemia por CVC: crecimiento del mismo germen en CVC y periférico con diferencia de positividad > 2 horas a favor del CVC.',
      'Criterios de retiro de CVC: shock séptico, S. aureus, hongos (Candida), infección del trayecto tunelizado y bacteriemia persistente a las 72 h.',
    ],
    questions: [
      {
        stem: '¿Cuál de las siguientes enfermedades infecciosas transmisibles requiere de forma estricta que el paciente sea hospitalizado en una habitación individual con presión negativa y que el personal de salud utilice mascarilla N95?',
        options: [
          { id: 'A', text: 'Meningitis aguda por Neisseria meningitidis' },
          { id: 'B', text: 'Tuberculosis pulmonar con baciloscopía positiva' },
          { id: 'C', text: 'Colitis pseudomembranosa por Clostridioides difficile' },
          { id: 'D', text: 'Coqueluche por Bordetella pertussis' },
          { id: 'E', text: 'Infección urinaria por Klebsiella pneumoniae productora de BLEE' },
        ],
        correcta: 'B',
        explicacion: 'La Tuberculosis pulmonar bacilífera activa se transmite mediante aerosoles con núcleos de gotitas microscópicas (< 5 micrones) que permanecen suspendidas en el aire por horas. Requiere aislamiento aéreo estricto con mascarilla de alta filtración (N95) y presión negativa en la habitación para evitar que los aerosoles pasen a los pasillos del hospital. El meningococo y coqueluche (A, D) usan aislamiento por gotitas (mascarilla quirúrgica simple); Clostridioides y bacterias BLEE (C, E) usan aislamiento de contacto.',
        recTag: 'Banco de Preguntas Oficial · IAAS y Aislamientos',
      },
      {
        stem: 'Un paciente de 58 años en hemodiálisis por fístula nativa en maduración es portador de un catéter tunelizado yugoslavo. Consulta por fiebre de 38.8 °C post-diálisis. Los hemocultivos periféricos y del catéter resultan positivos para Candida albicans. ¿Cuál es la conducta terapéutica correcta respecto al catéter?',
        options: [
          { id: 'A', text: 'Mantener el catéter e iniciar fluconazol endovenoso con técnica de sellado de catéter' },
          { id: 'B', text: 'Retirar inmediatamente el catéter y administrar terapia antifúngica sistémica' },
          { id: 'C', text: 'Recambiar el catéter sobre una guía de alambre en el mismo sitio' },
          { id: 'D', text: 'Observar por 48 horas tras iniciar antifúngicos y retirar solo si persiste la fiebre' },
          { id: 'E', text: 'Instilar etanol al 70% por los lúmenes y mantener el catéter para diálisis' },
        ],
        correcta: 'B',
        explicacion: 'La candidemia asociada a catéter venoso central es una infección invasiva de máxima gravedad con formación masiva de biofilm fúngico intra y extraluminal. La guía internacional y las normas de IAAS establecen que el catéter DEBE RETIRARSE INMEDIATAMENTE en toda infección por Candida spp., asociado a terapia antifúngica sistémica (Equinocandina o Fluconazol) y fondo de ojo para descartar endoftalmitis candidiásica.',
        recTag: 'Banco de Preguntas Oficial · IAAS y Aislamientos',
      },
    ],
  },
  {
    id: 'inf-08',
    classId: 'infecto-08',
    tier: 1,
    blockNum: 2,
    blockName: 'Salud Pública, Profilaxis Post-Exposición e IAAS',
    topicLabel: '2.4',
    title: 'Intoxicación Alimentaria, Botulismo y Cólera',
    perfilCode: '1.04.1.007, 1.04.1.026',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Enfermedades de Notificación Obligatoria Inmediata (ENO): Cólera y Botulismo',
    reconstrucciones: 'EUNACOM Diciembre 2024 (Q#45) · EUNACOM Enero 2023 (Q#76) · EUNACOM Diciembre 2022 (Q#55)',
    frecuencia: 'Rentabilidad media · diferenciación por periodo de incubación y toxinas bacterianas',
    svg: null, algoTitle: null,
    diagram: null,
    contexto: 'Las toxicoinfecciones alimentarias y las diarreas mediadas por enterotoxinas (como el Cólera) se presentan como brotes epidémicos agudos. El examen EUNACOM evalúa de manera casi matemática la identificación del patógeno causal a través del período de incubación y el alimento vehículo, así como el reconocimiento de la parálisis flácida descendente del botulismo.',
    contentSections: [
      {
        subhead: '1. Cronología e incubación: la clave diagnóstica en toxicoinfecciones',
        paragraphs: [
          'El tiempo transcurrido entre la ingesta del alimento sospechoso y el inicio de los síntomas permite diferenciar dos grandes mecanismos fisiopatológicos:',
          '• <strong>Toxinas preformadas en el alimento (incubación ultra-corta < 6 horas):</strong> la bacteria ya produjo la enterotoxina en la comida antes de ser ingerida. Cursa típicamente con náuseas intensas y <strong>vómitos incoercibles</strong>, sin fiebre. Patógenos prototípicos: <em>Staphylococcus aureus</em> (asociado a mayonesas caseras, pasteles con crema, jamón y ensaladas de papa) y <em>Bacillus cereus</em> variedad emética (asociado a <strong>arroz frito o recalentado</strong>).<br>' +
          '• <strong>Toxinas producidas in vivo tras la ingesta (incubación intermedia 8 a 16 horas):</strong> se ingiere la bacteria viable o sus esporas, las cuales colonizan el intestino delgado y secretan toxinas. Predominan los cólicos abdominales intensos y la diarrea acuosa profusa. Prototipos: <em>Clostridium perfringens</em> (carnes recalentadas, guisos, estofados) y <em>Bacillus cereus</em> variedad diarreica.<br>' +
          '• <strong>Invasión bacteriana o toxinas complejas (incubación larga > 16 a 48 horas):</strong> cursan con fiebre, dolor abdominal inflamatorio y en ocasiones disentería. Prototipos: <em>Salmonella enteritidis</em> (huevos crudos, aves), <em>Campylobacter jejuni</em> (carne de pollo cruda, leche no pasteurizada) y <em>Escherichia coli</em> enterotoxigénica (diarrea del viajero).',
        ],
      },
      {
        subhead: '2. Cólera (Vibrio cholerae): patogenia y deshidratación fulminante',
        paragraphs: [
          '<em>Vibrio cholerae</em> serogrupos O1 y O139 es transmitido por agua o mariscos bivalvos contaminados con heces humanas. Es una <strong>Enfermedad de Notificación Obligatoria Inmediata</strong>.',
          'La bacteria secreta la <strong>toxina colérica</strong>, la cual se une al gangliósido GM1 enterocítico y activa de forma irreversible la adenilato ciclasa mediante ADP-ribosilación de la subunidad Gs. Esto eleva masivamente el AMP cíclico intracelular, abriendo los canales CFTR de cloruro y bloqueando la absorción de sodio.',
          'El resultado es una hipersecreción masiva de agua y electrolitos hacia el lumen intestinal, produciendo la clásica <strong>diarrea acuosa en "agua de arroz"</strong> (blanquecina, sin olor fétido ni sangre). Las pérdidas fecales pueden alcanzar 1 litro por hora, conduciendo a shock hipovolémico exanguinante y muerte en menos de 12 horas si no se rehidrata.',
          '<strong>Tratamiento:</strong> la prioridad absoluta es la <strong>rehidratación vigorosa</strong> (Sales de Rehidratación Oral OMS si tolera, o Ringer Lactato EV masivo en shock). En casos moderados a severos se asocia antibiótico para acortar la duración: <strong>Doxiciclina oral 300 mg en dosis única</strong> (o Azitromicina 1 g dosis única en niños y embarazadas).',
        ],
      },
      {
        subhead: '3. Botulismo (Clostridium botulinum): la parálisis flácida descendente',
        paragraphs: [
          '<em>Clostridium botulinum</em> es un bacilo anaerobio cuyas esporas contaminan conservas caseras mal esterilizadas (vegetales, pescados, embutidos en frascos de vidrio).',
          'La <strong>toxina botulínica</strong> es la sustancia más letal conocida. Tras absorberse en el tubo digestivo, viaja por vía hematógena y destruye las proteínas SNARE (SNAP-25) en las terminaciones colinérgicas presinápticas, bloqueando la liberación de acetilcolina en la unión neuromuscular y en el sistema nervioso autónomo.',
          '<strong>Tríada clínica patognomónica:</strong> (1) Compromiso de pares craneanos (visión borrosa, diplopía, ptosis palpebral, disfagia y disartria), (2) <strong>Parálisis motora flácida simétrica DESCENDENTE</strong> (de cabeza a extremidades, sin compromiso sensitivo), y (3) Disautonomía (midriasis arreactiva, sequedad bucal, constipación e íleo paralítico).',
          '<strong>Manejo:</strong> hospitalización inmediata en UCI por riesgo de paro respiratorio, soporte ventilatorio mecánico y administración precoz de <strong>Antitoxina Botulínica Equina trivalente o heptavalente</strong> (neutraliza la toxina libre circulante; no revierte la parálisis ya establecida).',
        ],
      },
    ],
    table: {
      title: 'Toxicoinfecciones Alimentarias: Guía Rápida por Alimento y Tiempo de Incubación',
      headers: ['Microorganismo', 'Período Incubación', 'Alimento Prototípico', 'Manifestación Cardinal'],
      rows: [
        ['Staphylococcus aureus', '1 a 6 horas (muy rápido)', 'Mayonesa casera, cremas, pastelería', 'Vómitos intensos incoercibles, sin fiebre'],
        ['Bacillus cereus (emético)', '1 a 5 horas', 'Arroz frito o recalentado chino', 'Náuseas y vómitos explosivos'],
        ['Clostridium perfringens', '8 a 16 horas', 'Carnes guisadas, estofados recalentados', 'Dolor cólico intenso y diarrea, sin vómitos'],
        ['Salmonella no tifoidea', '12 a 48 horas', 'Huevos crudos, mayonesa, pollo crudo', 'Fiebre alta, vómitos y diarrea con estrías'],
        ['Vibrio cholerae', '12 a 72 horas', 'Agua contaminada, mariscos crudos', 'Diarrea profusa en agua de arroz sin dolor'],
        ['Clostridium botulinum', '12 a 36 horas', 'Conservas caseras, vegetales enlatados', 'Parálisis flácida descendente + diplopía'],
      ],
    },
    vignette: 'Cuatro miembros de una familia consultan en urgencias con náuseas y vómitos profusos de inicio explosivo hace 3 horas. Refieren haber almorzado hace 4 horas pastel de choclo y ensalada rusa con mayonesa casera preparada la noche anterior. Ninguno presenta fiebre, ni deposiciones diarreicas hasta el momento del ingreso. El examen físico destaca deshidratación leve y dolor epigástrico secundario a los esfuerzos de vómitos.',
    explicacion: 'El período de incubación extremadamente corto (3 a 4 horas) con predominio absoluto de vómitos incoercibles y ausencia de fiebre es la presentación clásica de una intoxicación alimentaria por enterotoxina preformada de Staphylococcus aureus, típicamente asociada al consumo de mayonesas caseras o alimentos ricos en proteínas conservados a temperatura ambiente. El tratamiento es de soporte sintomático: rehidratación oral fraccionada o cristaloides EV y antieméticos (Ondansetrón). No se indican antibióticos ya que el cuadro es mediado por toxinas preformadas y es autolimitado (cede en 24 horas).',
    keyPoints: [
      'Incubación < 6 horas con vómitos predominantes y sin fiebre: enterotoxina preformada (S. aureus en mayonesas o B. cereus en arroz).',
      'Incubación de 8 a 16 horas con diarrea y cólicos: Clostridium perfringens (carnes y guisos recalentados).',
      'Incubación > 16 horas con fiebre: invasión bacteriana (Salmonella o Campylobacter).',
      'Cólera: diarrea acuosa masiva en "agua de arroz" con deshidratación fulminante; tratamiento es rehidratación agresiva + Doxiciclina dosis única.',
      'Botulismo: parálisis flácida simétrica descendente que inicia con diplopía, ptosis y disfagia tras consumir conservas caseras.',
      'El tratamiento del botulismo es soporte en UCI y ANTITOXINA BOTULÍNICA endovenosa precoz.',
    ],
    questions: [
      {
        stem: 'Un grupo de colegas de trabajo presenta náuseas y vómitos severos unas 3 horas después de compartir arroz frito recalentado en un almuerzo de oficina. No presentan fiebre ni deposiciones diarreicas. ¿Cuál es el patógeno causal más probable?',
        options: [
          { id: 'A', text: 'Salmonella enteritidis' },
          { id: 'B', text: 'Bacillus cereus (forma emética)' },
          { id: 'C', text: 'Clostridium perfringens' },
          { id: 'D', text: 'Escherichia coli enterotoxigénica' },
          { id: 'E', text: 'Campylobacter jejuni' },
        ],
        correcta: 'B',
        explicacion: 'Bacillus cereus presenta dos formas clínicas bien diferenciadas: la forma emética (provocada por la toxina termoestable cereulida, con incubación muy corta de 1 a 5 horas y vómitos intensos, clásicamente asociada al arroz frito o recalentado) y la forma diarreica (incubación de 8 a 16 horas, mediada por enterotoxinas lábiles). Salmonella y Campylobacter (A, E) tienen períodos de incubación mayores a 16-24 horas y cursan con fiebre.',
        recTag: 'Banco de Preguntas Oficial · Intoxicación Alimentaria y Cólera',
      },
      {
        stem: 'Una mujer de 52 años es llevada a urgencias por presentar visión doble (diplopía), caída de los párpados y dificultad para tragar de inicio progresivo hace 24 horas, agregándose debilidad en extremidades superiores. Refiere haber consumido conservas caseras de espárragos el día anterior. Al examen físico se constata ptosis palpebral bilateral, midriasis arreactiva y tetraparesia flácida simétrica con reflejos osteotendíneos disminuidos. La sensibilidad es normal y está afebril. ¿Cuál es la conducta terapéutica inmediata?',
        options: [
          { id: 'A', text: 'Iniciar infusión de plasmaféresis por sospecha de Síndrome de Guillain-Barré' },
          { id: 'B', text: 'Hospitalizar en UCI, monitorizar mecánica ventilatoria y administrar antitoxina botulínica' },
          { id: 'C', text: 'Administrar Ceftriaxona 2 g EV por sospecha de meningitis bacteriana' },
          { id: 'D', text: 'Indicar tratamiento con Piridostigmina oral por probable crisis miasténica' },
          { id: 'E', text: 'Administrar bolo de metilprednisolona EV por sospecha de esclerosis múltiple' },
        ],
        correcta: 'B',
        explicacion: 'El antecedente de ingesta de conservas caseras sumado a la clínica de compromiso de pares craneanos (diplopía, ptosis, midriasis) y parálisis flácida descendente sin alteración sensitiva es patognomónico de Botulismo alimentario. El Guillain-Barré (A) es una parálisis típicamente ASCENDENTE (de piernas hacia arriba) y la miastenia (D) no causa midriasis ni disautonomía. La conducta urgente es ingreso a UCI por riesgo de fallo ventilatorio y administración de Antitoxina Botulínica equina inmediata.',
        recTag: 'Banco de Preguntas Oficial · Intoxicación Alimentaria y Cólera',
      },
    ],
  },
];

module.exports = { bloque2 };
