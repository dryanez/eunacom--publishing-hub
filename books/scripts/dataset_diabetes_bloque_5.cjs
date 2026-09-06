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

const bloque5 = [
  {
    id: 'diab-20',
    classId: 'diab-20',
    tier: 2,
    blockNum: 5,
    blockName: 'Complicaciones Crónicas y Dislipidemias',
    topicLabel: '5.1',
    title: 'Nefropatía Diabética: Tamizaje con RAC y Enfoque Nefroprotector',
    perfilCode: '1.04.1.011',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES N° 2): Diabetes Mellitus Tipo 2 y GES Enfermedad Renal Crónica',
    reconstrucciones: 'EUNACOM Diciembre 2017 (Q#58) · EUNACOM Julio 2020 (Q#24) · EUNACOM Diciembre 2022 (Q#16)',
    frecuencia: 'Muy Alta · Tamizaje anual con RAC, diagnóstico de albuminuria persistente e indicación de IECA/ARA2 e iSGLT2',
    svg: null, algoTitle: 'Algoritmo de Tamizaje y Manejo Nefroprotector en Diabetes Mellitus',
    diagram: flow('Algoritmo de Tamizaje y Nefroprotección en Nefropatía Diabética', [
      { t: 'Tamizaje Anual Obligatorio de Daño Renal en APS', s: 'Razón Albúmina/Creatinina (RAC) en orina matinal + Estimación de VFG (CKD-EPI) · En DM2: al diagnóstico; En DM1: a los 5 años' },
      { k: 'split', q: '¿Nivel de RAC en Muestra Matinal?', s: 'Confirmar con 2 de 3 muestras positivas en 3 a 6 meses (descartar ITU, fiebre, ejercicio)', ll: 'RAC < 30 mg/g (A1: Normal)', rl: 'RAC ≥ 30 mg/g (A2: 30-299 mg/g o A3: ≥ 300 mg/g)',
        left: { t: 'Control Anual de Monitoreo', s: 'Mantener HbA1c < 7.0%, PA < 130/80 mmHg y estilo de vida saludable', type: 'acc' },
        right: { t: 'NEFROPROTECCIÓN INMEDIATA (Persistente)', s: 'Iniciar IECA (Enalapril) o ARA II (Losartán) ¡INCLUSO SI ES NORMOTENSO! + iSGLT2', type: 'warn' },
        ll: 'normal anual', rl: 'albuminuria patológica' },
      { t: 'Terapia Combinada Nefroprotectora Moderna', s: 'IECA/ARA2 a dosis máxima tolerada + iSGLT2 (Dapagliflozina/Empagliflozina) · Meta PA < 130/80 mmHg', type: 'dec', al: 'nefroprotección', from: 'right' },
    ]),
    contexto: 'La nefropatía diabética es la primera causa de enfermedad renal crónica terminal e ingreso a hemodiálisis en Chile y el mundo. En el EUNACOM se evalúa de forma reiterada la metodología de tamizaje anual (solicitud de la Razón Albúmina/Creatinina matinal y no la proteinuria aislada de 24 horas), la necesidad de confirmar el hallazgo en 2 de 3 muestras, y la indicación categórica de iniciar fármacos bloqueadores del eje renina-angiotensina-aldosterona (IECA o ARA II) ante cualquier microalbuminuria confirmada, independientemente de que el paciente presente o no hipertensión arterial.',
    contentSections: [
      {
        subhead: '1. Epidemiología, Fisiopatología y Cronograma de Tamizaje',
        paragraphs: [
          'La nefropatía diabética se inicia fisiopatológicamente por una <strong>hiperfiltración glomerular</strong> inducida por la hiperglicemia, que genera un incremento de la presión intraglomerular, engrosamiento de la membrana basal, hipertrofia mesangial y finalmente <strong>glomeruloesclerosis nodular de Kimmelstiel-Wilson</strong>.',
          '<strong>Cronograma de Tamizaje Anual en APS:</strong><br/>' +
          '• <strong>Diabetes Mellitus Tipo 2:</strong> Se debe realizar el tamizaje <strong>DESDE EL MOMENTO MISMO DEL DIAGNÓSTICO</strong> y posteriormente cada 12 meses, debido a que la DM2 cursa con años de hiperglicemia asintomática previa.<br/>' +
          '• <strong>Diabetes Mellitus Tipo 1:</strong> Se inicia el tamizaje a los <strong>5 años del debut</strong> (y luego anualmente), ya que el daño glomerular rara vez se expresa clínicamente antes de dicho periodo.',
        ],
      },
      {
        subhead: '2. Prueba Diagnóstica de Elección: La Razón Albúmina/Creatinina (RAC)',
        paragraphs: [
          'El examen estándar de oro para el tamizaje es la <strong>Razón Albúmina/Creatinina en una muestra aislada de la primera orina de la mañana (RAC)</strong> expresada en mg/g de creatinina (o mg/mmol). La recolección de orina de 24 horas es engorrosa, propensa a errores y ya no se recomienda como tamizaje.',
          '<strong>Clasificación de Albuminuria (KDIGO):</strong><br/>' +
          '• <strong>A1 (Normal a mínima):</strong> RAC < 30 mg/g.<br/>' +
          '• <strong>A2 (Moderadamente aumentada / antiguamente microalbuminuria):</strong> RAC <strong>30 a 299 mg/g</strong>.<br/>' +
          '• <strong>A3 (Severamente aumentada / antiguamente macroalbuminuria):</strong> RAC <strong>≥ 300 mg/g</strong>.<br/>' +
          '<strong>Regla de Confirmación:</strong> Debido a la gran variabilidad biológica, el diagnóstico de albuminuria patológica exige demostrar <strong>al menos 2 de 3 muestras positivas en un lapso de 3 a 6 meses</strong>, habiendo descartado falsos positivos como infección urinaria, fiebre, ejercicio físico extenuante en las 24 horas previas, hematuria macroscópica o insuficiencia cardíaca aguda.',
        ],
      },
      {
        subhead: '3. Estrategia Nefroprotectora Integral: Bloqueo del SRAA e iSGLT2',
        paragraphs: [
          'El pilar farmacológico primordial para frenar la progresión del daño renal es la administración de <strong>Inhibidores de la Enzima Convertidora de Angiotensina (IECA, como enalapril) o Antagonistas de Receptores de Angiotensina II (ARA II, como losartán)</strong>.',
          '<strong>Concepto Clave EUNACOM:</strong> Los IECA o ARA II están formalmente indicados ante la presencia de <strong>albuminuria persistente (RAC ≥ 30 mg/g), INCLUSO EN PACIENTES NORMOTENSOS</strong>, debido a que producen una dilatación selectiva de la arteriola eferente glomerular, reduciendo drásticamente la presión intraglomerular y la filtración de proteínas.',
          '<em>¡Atención!: Jamás deben combinarse un IECA y un ARA II simultáneamente</em> (aumenta hiperkalemia y falla renal aguda sin beneficio clínico). Además, los <strong>inhibidores de SGLT2 (dapagliflozina, empagliflozina)</strong> han demostrado un efecto nefroprotector indiscutido y deben agregarse a todo diabético con ERC y VFG > 20–25 ml/min.',
        ],
      },
    ],
    table: {
      title: 'Categorías de Albuminuria según Guías KDIGO y Metas Clínicas',
      headers: ['Categoría KDIGO', 'Rango RAC (mg/g)', 'Denominación Clásica', 'Riesgo Progresión', 'Conducta Farmacológica EUNACOM'],
      rows: [
        ['A1', '< 30 mg/g', 'Normoalbuminuria', 'Bajo', 'Control anual; no requiere IECA si es normotenso'],
        ['A2', '30 – 299 mg/g', 'Microalbuminuria', 'Moderado / Alto', 'INICIAR IECA o ARA II (incluso normotenso) + iSGLT2'],
        ['A3', '≥ 300 mg/g', 'Macroalbuminuria / Proteinuria', 'Muy Alto', 'Titular IECA/ARA2 a dosis máxima + iSGLT2 + Derivar'],
      ],
    },
    vignette: 'Un hombre de 53 años con DM2 diagnosticada hace 1 año, con buen control metabólico en base a metformina (HbA1c 6.8%), acude a su control anual de salud cardiovascular en el CESFAM. Su presión arterial habitual es de 118/76 mmHg. No presenta edema ni síntomas urinarios. El examen de orina revela una Razón Albúmina/Creatinina (RAC) de 84 mg/g. Se repite el examen a las 6 semanas resultando en 92 mg/g, con sedimento urinario sin bacterias ni leucocitos y VFG estimada de 85 ml/min/1.73m².',
    explicacion: 'El paciente presenta una microalbuminuria persistente confirmada (dos determinaciones de RAC entre 30 y 299 mg/g sin factores de confusión). A pesar de encontrarse en rango de normotensión arterial (PA 118/76 mmHg), la presencia de albuminuria patológica constituye una indicación formal y de máxima prioridad para iniciar un fármaco bloqueador del sistema renina-angiotensina (IECA como enalapril o ARA II como losartán) para brindar nefroprotección específica reduciendo la presión intraglomerular.',
    keyPoints: [
      'El tamizaje de daño renal se realiza anualmente con la Razón Albúmina/Creatinina (RAC) en la primera orina de la mañana.',
      'El tamizaje se inicia al momento del diagnóstico en DM2, y a los 5 años del debut en DM1.',
      'Se define microalbuminuria patológica (categoría A2) como RAC entre 30 y 299 mg/g en al menos 2 de 3 muestras en 3 a 6 meses.',
      'La presencia de microalbuminuria persistente exige iniciar IECA o ARA II, INCLUSO SI EL PACIENTE ES TOTALMENTE NORMOTENSO.',
      'Los IECA/ARA II actúan dilatando preferentemente la arteriola eferente del glomérulo, disminuyendo la presión capilar intraglomerular.',
      'Está contraindicado combinar un IECA y un ARA II en el mismo paciente por riesgo de falla renal aguda e hiperkalemia severa.',
    ],
    questions: [
      {
        stem: 'Un paciente de 54 años, con antecedente de diabetes mellitus tipo 2 de 4 años de evolución en tratamiento con metformina 850 mg cada 12 horas, normotenso (PA 120/75 mmHg), acude a su control programado. Se le realiza una razón albúmina/creatinina en orina aislada matinal que resulta en 120 mg/g. Se repite el examen dos meses después, confirmándose un valor de 135 mg/g, con cultivo de orina negativo. Su creatinina plasmática es de 0.9 mg/dL. ¿Cuál es la conducta farmacológica más adecuada?',
        opciones: [
          'A) Iniciar enalapril o losartán a dosis bajas con titulación progresiva',
          'B) Mantener la terapia actual sin modificaciones dado que el paciente es normotenso',
          'C) Iniciar hidroclorotiazida para disminuir el volumen intravascular',
          'D) Suspender la metformina por toxicidad renal inminente y pasar a insulina',
          'E) Solicitar una biopsia renal percutánea urgente para descartar amiloidosis'
        ],
        correcta: 'A',
        explicacion: 'El paciente tiene confirmada una nefropatía diabética incipiente en etapa de microalbuminuria persistente (RAC entre 30 y 299 mg/g en dos tomas consecutivas sin factores de confusión). Las guías internacionales y del MINSAL indican unánimemente que todo paciente diabético con albuminuria persistente debe recibir un bloqueador del eje renina-angiotensina-aldosterona (IECA como enalapril o ARA II como losartán), independientemente de sus cifras de presión arterial, dado su efecto hemodinámico específico dilatador de la arteriola eferente que frena la progresión del daño renal.',
        recTag: 'EUNACOM Diciembre 2017 (Q#58)'
      },
      {
        stem: '¿A partir de qué momento cronológico debe iniciarse el tamizaje anual de nefropatía diabética mediante la razón albúmina/creatinina en un paciente con diagnóstico reciente de diabetes mellitus tipo 2?',
        opciones: [
          'A) A los 5 años del diagnóstico',
          'B) Al momento de realizar el diagnóstico de la enfermedad',
          'C) Solo cuando las cifras de hemoglobina glicosilada superen el 8.5%',
          'D) Al momento en que el paciente desarrolle hipertensión arterial concomitante',
          'E) A los 10 años del diagnóstico o a los 65 años de edad'
        ],
        correcta: 'B',
        explicacion: 'A diferencia de la DM1 (donde el daño microvascular tarda al menos 5 años en manifestarse), en la diabetes mellitus tipo 2 suele existir un periodo subclínico asintomático prolongado (de 4 a 7 años) previo a la detección clínica. Por lo tanto, un porcentaje importante de pacientes ya presenta complicaciones microvasculares al momento del debut, por lo que el tamizaje anual de nefropatía (RAC y VFG) y de retinopatía (fondo de ojo) debe iniciarse desde el momento mismo del diagnóstico.',
        recTag: 'EUNACOM Julio 2020 (Q#24)'
      }
    ]
  },
  {
    id: 'diab-21',
    classId: 'diab-21',
    tier: 2,
    blockNum: 5,
    blockName: 'Complicaciones Crónicas y Dislipidemias',
    topicLabel: '5.2',
    title: 'Retinopatía Diabética: No Proliferativa vs Proliferativa y GES',
    perfilCode: '1.04.1.013',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES N° 2): Retinopatía Diabética (Acceso a tamizaje y fotocoagulación)',
    reconstrucciones: 'EUNACOM Diciembre 2016 (Q#64) · EUNACOM Diciembre 2021 (Q#51)',
    frecuencia: 'Alta · Lesión más precoz (microaneurismas), criterios de retinopatía proliferativa y manejo con panfotocoagulación láser',
    svg: null, algoTitle: 'Algoritmo de Tamizaje Oftalmológico y Clasificación de Retinopatía Diabética',
    diagram: flow('Algoritmo de Tamizaje y Manejo de la Retinopatía Diabética', [
      { t: 'Tamizaje de Retinopatía con Fondo de Ojo con Pupila Dilatada (o Retinografía)', s: 'DM2: al momento del diagnóstico y luego ANUAL (GES) · DM1: a partir del 5° año del debut' },
      { k: 'split', q: '¿Hallazgos al Examen de Fondo de Ojo?', s: 'Diferenciación cardinal: Retinopatía No Proliferativa vs Proliferativa', ll: 'No Proliferativa (Leve / Moderada / Severa)', rl: 'Retinopatía Proliferativa (Presencia de Neovasos)',
        left: { t: 'Microaneurismas, Exudados Duros y Hemorragias en Llama', s: 'La primera lesión observable son los microaneurismas · Control estricto de HbA1c y PA · Control anual', type: 'acc' },
        right: { t: 'NEOVASCULARIZACIÓN de Retina o Disco Óptico', s: 'Riesgo de hemorragia vítrea súbita y desprendimiento traccional de retina · Urgencia GES', type: 'crit' },
        ll: 'no proliferativa', rl: 'proliferativa (neovasos)' },
      { t: 'Tratamiento Oftalmológico Especializado GES', s: 'Panfotocoagulación con Láser de Argón (proliferativa) + Anti-VEGF intravítreo (Edema Macular)', type: 'dec', al: 'terapia láser', from: 'right' },
    ]),
    contexto: 'La retinopatía diabética es la principal causa de ceguera legal irreversible en adultos en edad laboral en el mundo occidental. El EUNACOM evalúa con regularidad la identificación de la lesión oftalmológica más precoz (los microaneurismas capilares), la distinción entre las formas no proliferativa y proliferativa (definida por la presencia de neovasos retinianos), y el reconocimiento de complicaciones visuales agudas catastróficas como la hemorragia vítrea y el edema macular diabético, las cuales cuentan con cobertura prioritaria en las Garantías Explícitas en Salud (GES).',
    contentSections: [
      {
        subhead: '1. Cronograma de Tamizaje y la Lesión Elemental Más Precoz',
        paragraphs: [
          'El tamizaje se realiza mediante <strong>fondo de ojo con dilatación pupilar farmacológica</strong> por oftalmólogo o mediante <strong>cámara de retinografía digital no midriática en la atención primaria</strong>. El tamizaje debe efectuarse <strong>al momento del diagnóstico en todo paciente con DM2</strong> y luego en forma anual.',
          'La alteración fisiopatológica inicial es la pérdida de los pericitos que recubren los capilares retinianos, provocando la pérdida de la barrera hematorretiniana y dilataciones saculares focales. <strong>La lesión oftalmoscópica más precoz y detectable son los MICROANEURISMAS</strong> (pequeños puntos rojos de bordes netos, localizados típicamente en el polo posterior temporal a la fóvea).',
        ],
      },
      {
        subhead: '2. Clasificación Clínica: No Proliferativa vs Proliferativa',
        paragraphs: [
          'La enfermedad se subdivide en dos grandes categorías pronósticas:',
          '• <strong>Retinopatía Diabética No Proliferativa (RDNP):</strong> Presenta microaneurismas, microhemorragias intrarretinianas (en punto o en llama), <strong>exudados duros</strong> (depósitos lipoproteicos amarillentos con bordes brillantes que traducen fuga vascular) y <strong>exudados algodonosos o blandos</strong> (que representan microinfartos de la capa de fibras nerviosas retinianas por isquemia capilar). En su forma severa aplica la "regla 4-2-1" (hemorragias severas en 4 cuadrantes, arrosariamiento venoso en 2 cuadrantes o anomalías microvasculares intrarretinianas IRMA en 1 cuadrante).<br/>' +
          '• <strong>Retinopatía Diabética Proliferativa (RDP):</strong> Se define de forma inequívoca por la <strong>PRESENCIA DE NEOVASCULARIZACIÓN</strong> (crecimiento anómalo de vasos frágiles estimulados por el factor de crecimiento vascular endotelial, VEGF, en el disco óptico o en la retina periférica). Los neovasos sangran con facilidad hacia la cavidad vítrea produciendo una <strong>hemorragia vítrea aguda</strong> (pérdida visual súbita e indolora), y su fibrosis induce <strong>desprendimiento de retina traccional</strong> o <strong>glaucoma neovascular (rubeosis iridis)</strong>.',
        ],
      },
      {
        subhead: '3. Edema Macular Diabético y Opciones Terapéuticas GES',
        paragraphs: [
          'El <strong>Edema Macular Diabético</strong> (engrosamiento retiniano o exudación lipídica que compromete el centro de la fóvea) es la <strong>causa más frecuente de disminución moderada de la agudeza visual en pacientes con diabetes tipo 2</strong>, y puede presentarse en cualquier etapa de la enfermedad.',
          '<strong>Tratamientos Garantizados:</strong><br/>' +
          '• <strong>Panfotocoagulación con Láser de Argón:</strong> Es el tratamiento de elección para la <em>Retinopatía Proliferativa y RDNP muy severa</em>. Destruye la retina isquémica periférica, reduciendo la producción de VEGF y provocando la regresión de los neovasos, lo que previene la ceguera.<br/>' +
          '• <strong>Inyecciones Intravítreas de Anti-VEGF (Ranibizumab, Aflibercept):</strong> Tratamiento de primera línea para el <em>Edema Macular Diabético con compromiso del centro de la fóvea</em>.',
        ],
      },
    ],
    table: {
      title: 'Diferencias Cardinales entre Retinopatía No Proliferativa y Proliferativa',
      headers: ['Característica', 'Retinopatía No Proliferativa (RDNP)', 'Retinopatía Proliferativa (RDP)'],
      rows: [
        ['Signo Patognomónico', 'Microaneurismas y exudados duros/algodonosos', 'NEOVASOS (retinianos o en papila óptica)'],
        ['Lesión más precoz', 'Microaneurismas capilares (puntos rojos temporales)', 'Surge tras isquemia retiniana extensa y prolongada'],
        ['Mecanismo de daño visual', 'Edema macular diabético secundario', 'Hemorragia vítrea, desprendimiento traccional, neovasos'],
        ['Tratamiento Oftalmológico', 'Control glicémico/PA estricto; Anti-VEGF si edema macular', 'PANFOTOCOAGULACIÓN CON LÁSER DE ARGÓN (GES)'],
        ['Derivación GES', 'Prioridad electiva según severidad', 'DERIVACIÓN URGENTE A OFTALMOLOGÍA (plazo GES 30-60 días)'],
      ],
    },
    vignette: 'Una paciente de 59 años con DM2 de 12 años de evolución, con mal control metabólico histórico (última HbA1c 9.5%), consulta en el servicio de urgencia por presentar pérdida brusca, indolora y casi total de la visión en su ojo derecho al despertar en la mañana, describiendo que previamente vio "una lluvia de manchas negras móviles". Al examen oftalmológico básico, la agudeza visual del ojo derecho se reduce a bultos y el rojo pupilar se encuentra abolido, impidiendo la visualización de la retina.',
    explicacion: 'El cuadro de pérdida brusca, indolora y severa de la visión con abolición del rojo pupilar ("fondo de ojo oscuro") en una paciente con DM2 de larga data y mal control metabólico es patognomónico de una Hemorragia Vítrea provocada por la rotura de neovasos frágiles, confirmando una Retinopatía Diabética Proliferativa. Requiere reposo relativo con cabecera elevada y derivación prioritaria e inmediata a oftalmología para ecografía ocular (para descartar desprendimiento de retina) y panfotocoagulación láser o vitrectomía.',
    keyPoints: [
      'La lesión más precoz y primera manifestación observable de la retinopatía diabética son los MICROANEURISMAS.',
      'La Retinopatía Proliferativa se define exclusivamente por la presencia de NEOVASOS (en la papila o retina).',
      'La principal causa de pérdida visual moderada en DM2 es el EDEMA MACULAR DIABÉTICO (tratado con Anti-VEGF intravítreo).',
      'El tratamiento estándar para la Retinopatía Proliferativa es la PANFOTOCOAGULACIÓN CON LÁSER DE ARGÓN (garantizada por el GES).',
      'La pérdida súbita e indolora de la visión con abolición del reflejo rojo en un paciente diabético orienta de inmediato a HEMORRAGIA VÍTREA.',
      'En DM2 el fondo de ojo debe realizarse AL MOMENTO DEL DIAGNÓSTICO y anualmente en adelante.',
    ],
    questions: [
      {
        stem: '¿Cuál es la lesión más precoz que se puede observar mediante la oftalmoscopía en el fondo de ojo de un paciente que está desarrollando una retinopatía diabética?',
        opciones: [
          'A) Exudados duros céreos',
          'B) Microaneurismas retinianos',
          'C) Exudados algodonosos',
          'D) Neovasos papilares',
          'E) Hemorragias en llama extensas'
        ],
        correcta: 'B',
        explicacion: 'La alteración anatomopatológica inicial de la retinopatía diabética es la pérdida de pericitos capilares y la dilatación sacular de los capilares de la retina interna. Estas dilataciones son visibles al fondo de ojo como pequeños puntos rojos oscuros de bordes redondeados y muy bien delimitados conocidos como microaneurismas, constituyendo la primera lesión clínica e histopatológica demostrable.',
        recTag: 'EUNACOM Diciembre 2016 (Q#64)'
      },
      {
        stem: 'Un paciente de 60 años, con diabetes mellitus tipo 2 de 15 años de evolución y controles médicos irregulares, consulta por disminución severa y repentina de la agudeza visual del ojo izquierdo, indolora, instaurada en un par de horas tras levantarse por la mañana. Al examen físico se constata agudeza visual de cuenta dedos en dicho ojo y ausencia del reflejo rojo pupilar, sin signos de inflamación externa. ¿Cuál es el diagnóstico clínico más probable?',
        opciones: [
          'A) Oclusión de la arteria central de la retina',
          'B) Glaucoma agudo de ángulo cerrado',
          'C) Hemorragia vítrea por retinopatía diabética proliferativa',
          'D) Neuritis óptica isquémica anterior no arterítica',
          'E) Desprendimiento de retina regmatógeno primario'
        ],
        correcta: 'C',
        explicacion: 'La pérdida súbita e indolora de la visión acompañada de abolición del rojo pupilar ("ojo que no deja ver la retina al oftalmoscopio") en un paciente con DM2 de larga data es la manifestación clásica de una Hemorragia Vítrea. Esta ocurre por la rotura de neovasos frágiles característicos de la Retinopatía Diabética Proliferativa. Debe derivarse de forma urgente a evaluación oftalmológica para estudio ecográfico y resolución mediante vitrectomía posterior o panfotocoagulación según corresponda.',
        recTag: 'EUNACOM Diciembre 2021 (Q#51)'
      }
    ]
  },
  {
    id: 'diab-22',
    classId: 'diab-22',
    tier: 3,
    blockNum: 5,
    blockName: 'Complicaciones Crónicas y Dislipidemias',
    topicLabel: '5.3',
    title: 'Pie Diabético: Úlceras, Neuropatía, Clasificación de Wagner y Manejo Quirúrgico',
    perfilCode: '1.04.1.014, 1.04.1.015',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES N° 2): Diabetes Mellitus (Canasta Integral de Curaciones y Manejo de Pie Diabético)',
    reconstrucciones: 'EUNACOM Diciembre 2017 (Q#40) · EUNACOM Julio 2019 (Q#23) · EUNACOM Diciembre 2020 (Q#55) · EUNACOM Julio 2022 (Q#18)',
    frecuencia: 'Máxima · Tamizaje con monofilamento de 10 g, clasificación de Wagner, prueba de estilete óseo y criterios de hospitalización/amputación',
    svg: null, algoTitle: 'Algoritmo de Clasificación de Wagner y Manejo Escalonado del Pie Diabético',
    diagram: flow('Algoritmo de Evaluación y Tratamiento del Pie Diabético', [
      { t: 'Evaluación Anual del Pie en APS: Monofilamento 10g + Diapasón 128Hz + Pulsos', s: 'Identifica pérdida de sensibilidad protectora, deformidades ortopédicas e insuficiencia arterial' },
      { k: 'split', q: '¿Presencia de Úlcera Activa? -> Clasificación de Wagner', s: 'Estratificación de profundidad, infección osteoarticular y necrosis tisular', ll: 'Wagner 1 – 2 (Úlcera Superficial / Profunda a Tendón)', rl: 'Wagner 3 – 5 (Absceso / Osteomielitis / Gangrena)',
        left: { t: 'Wagner 1-2: Curación Avanzada + Descarga (Off-loading)', s: 'Reposo relativo, calzado terapéutico, curación no adherente · Si eritema perilesional: Cefadroxilo oral', type: 'acc' },
        right: { t: 'Wagner 3-5: HOSPITALIZACIÓN INMEDIATA', s: 'Wagner 3: Drenaje + ATB EV 6 sem (Osteomielitis) · Wagner 4-5: Cirugía vascular / Amputación', type: 'crit' },
        ll: 'ambulatorio / curación', rl: 'hospitalizar / quirúrgico' },
      { t: 'Prueba del Estilete Óseo ("Probe-to-Bone")', s: 'Si estilete metálico toca hueso duro en el fondo de la úlcera: confirma OSTEOMIELITIS con 90% especificidad', type: 'dec', al: 'probe to bone', from: 'right' },
    ]),
    contexto: 'El pie diabético es una de las complicaciones más costosas y discapacitantes de la medicina. En el EUNACOM se evalúa de manera prioritaria el tamizaje de la neuropatía sensitiva con el monofilamento de Semmes-Weinstein (10 gramos), la correcta estadificación según la Clasificación de Wagner (del grado 0 al 5), la técnica semiológica del estilete óseo ("probe-to-bone test") para el diagnóstico de osteomielitis subyacente, y las indicaciones categóricas de hospitalización, desbridamiento quirúrgico y antibióticos sistémicos.',
    contentSections: [
      {
        subhead: '1. Fisiopatología Multifactorial: Neuropatía, Isquemia e Infección',
        paragraphs: [
          'El pie diabético es el resultado de la interacción sinérgica de tres componentes fisiopatológicos:',
          '• <strong>Neuropatía Diabética (componente principal en > 80%):</strong> Se compone de afectación <em>sensitiva</em> (pérdida de la sensibilidad térmica, dolorosa y táctil protectora frente a roces y cuerpos extraños), <em>motora</em> (atrofia de la musculatura intrínseca del pie que provoca colapso del arco anterior, dedos en garra o en martillo y prominencia de las cabezas metatarsianas) y <em>autonómica</em> (anhidrosis que causa piel seca, escamosa e hiperqueratósica propensa a fisuras).<br/>' +
          '• <strong>Enfermedad Arterial Periférica (Isquemia):</strong> Ateroesclerosis acelerada con compromiso predominantemente infragenicular (arterias tibial anterior, posterior y peronea), que determina palidez al elevar la extremidad, rubor al declive, ausencia de pulsos distales y retardo en la cicatrización tisular.<br/>' +
          '• <strong>Traumatismo Desencadenante:</strong> Fricción repetida por calzado inadecuado o cuerpos extraños inadvertidos que generan una ampolla, callosidad fisurada o úlcera perforante plantar.',
        ],
      },
      {
        subhead: '2. Tamizaje Anual en Atención Primaria: El Monofilamento de 10 Gramos',
        paragraphs: [
          'En el control de salud cardiovascular se realiza la evaluación anual del pie diabético:',
          '• <strong>Monofilamento de Semmes-Weinstein de 5.07 (10 gramos de fuerza):</strong> Es el examen estándar para detectar la <strong>pérdida de la sensibilidad protectora</strong>. Se aplica perpendicularmente en sitios anatómicos plantares preestablecidos (1°, 3° y 5° pulpejo digital y cabezas de metatarsianos) hasta curvar el filamento durante 1 a 2 segundos. La incapacidad de percibir el contacto en uno o más puntos define un pie en alto riesgo de ulceración.<br/>' +
          '• <strong>Diapasón de 128 Hz:</strong> Evalúa la sensibilidad vibratoria (palestesia) en el hallux.<br/>' +
          '• <strong>Palpación de pulsos pedio y tibial posterior:</strong> Si están ausentes o disminuidos, se debe calcular el <em>Índice Tobillo-Brazo (ITB)</em> (normal 0.9–1.3; < 0.9 confirma enfermedad arterial periférica).',
        ],
      },
      {
        subhead: '3. Clasificación de Wagner: La Escala Clásica Evaluada en EUNACOM',
        paragraphs: [
          'La escala de Wagner clasifica las lesiones en 6 estadios correlacionados con la conducta terapéutica:',
          '• <strong>Grado 0:</strong> Pie de riesgo, sin úlcera activa. Presenta hiperqueratosis (callos gruesos), dedos en garra o artropatía de Charcot. Conducta: educación, calzado terapéutico amplio y podología profiláctica.<br/>' +
          '• <strong>Grado 1:</strong> Úlcera superficial que compromete todo el espesor cutáneo (epidermis y dermis) pero <em>no alcanza tendón, cápsula articular ni hueso</em>. Típica úlcera neuropática ("mal perforante plantar"). Conducta: curación avanzada y descarga ortopédica estricta.<br/>' +
          '• <strong>Grado 2:</strong> Úlcera profunda que penetra y expone <strong>tendón, ligamento o cápsula articular</strong>, sin absceso ni compromiso óseo. Conducta: desbridamiento en curación avanzada y evaluación por equipo multiprofesional.<br/>' +
          '• <strong>Grado 3:</strong> Úlcera profunda complicada con <strong>absceso profundo, osteomielitis o artritis séptica</strong>. Conducta: <strong>HOSPITALIZACIÓN OBLIGATORIA</strong>, aseo quirúrgico amplio y antibióticos endovenosos prolongados.<br/>' +
          '• <strong>Grado 4:</strong> <strong>Gangrena localizada</strong> (habitualmente digital, del talón o antepié). Conducta: hospitalización urgente, antibióticos de amplio espectro y revascularización o amputación menor.<br/>' +
          '• <strong>Grado 5:</strong> <strong>Gangrena extensa de todo el pie</strong> con repercusión sistémica severa y riesgo vital. Conducta: amputación mayor (infragenicular o supracondílea).',
        ],
      },
      {
        subhead: '4. La Prueba del Estilete Óseo ("Probe-to-Bone Test") y Estudio de Osteomielitis',
        paragraphs: [
          'En toda úlcera profunda o de evolución tórpida, el médico debe introducir suavemente un <strong>estilete metálico estéril de punta roma hasta el fondo de la lesión</strong>.',
          'Si el estilete entra en contacto con una <strong>superficie dura, rugosa o pétrea compatible con hueso ("Probe-to-Bone" positivo)</strong>, el diagnóstico de <strong>OSTEOMIELITIS subyacente se confirma con un valor predictivo positivo superior al 90%</strong>. Se debe solicitar radiografía simple de pie (que muestra resorción cortical o lisis ósea tardía) o resonancia magnética en casos precoces.',
        ],
      },
      {
        subhead: '5. Principios de Tratamiento Médico y Quirúrgico',
        paragraphs: [
          'El manejo del pie diabético requiere una estrategia multimodal: <strong>1) Descarga absoluta de presión ("off-loading"):</strong> mediante reposo, férula de contacto total o calzado terapéutico especial, sin lo cual ninguna úlcera cicatrizará; <strong>2) Curaciones avanzadas:</strong> eliminación del tejido esfacelado o necrótico y mantención de un ambiente húmedo fisiológico; <strong>3) Manejo antimicrobiano:</strong> Las úlceras superficiales con celulitis leve se tratan ambulatoriamente con antibióticos orales dirigidos a <em>Staphylococcus aureus</em> y <em>Streptococcus</em> (cefadroxilo, clindamicina o amoxicilina/clavulánico). Las úlceras profundas complicadas (Wagner 3–5) exigen cobertura para flora polimicrobiana (cocos Gram positivos, enterobacterias y anaerobios) con esquemas como Ceftriaxona + Metronidazol o Ciprofloxacino + Clindamicina por vía parenteral.',
        ],
      },
    ],
    table: {
      title: 'Clasificación de Wagner para Pie Diabético y Estrategia Terapéutica',
      headers: ['Grado Wagner', 'Descripción Clínica de la Lesión', 'Nivel de Atención', 'Estrategia Terapéutica Mandatoria'],
      rows: [
        ['Grado 0', 'Pie de riesgo, piel intacta, callosidades y deformidades', 'Ambulatorio (APS)', 'Educación, calzado adecuado, recorte podológico de hiperqueratosis'],
        ['Grado 1', 'Úlcera superficial sin compromiso de tendón ni hueso', 'Ambulatorio (APS)', 'Descarga de apoyo ("off-loading") + Curación avanzada no adherente'],
        ['Grado 2', 'Úlcera profunda que expone tendón o cápsula sin absceso', 'Ambulatorio / Especialidad', 'Descarga + Desbridamiento tisular + Curación con alginato'],
        ['Grado 3', 'Úlcera profunda con absceso, osteomielitis o flemón', 'Hospitalario (Urgencia)', 'HOSPITALIZAR + Cirugía (drenaje/ostectomía) + ATB EV 4-6 semanas'],
        ['Grado 4', 'Gangrena localizada en dedos o talón (isquemia focal)', 'Hospitalario (Pabellón)', 'Hospitalizar + AngioTAC/Revascularización + Amputación menor'],
        ['Grado 5', 'Gangrena extensa de todo el pie con compromiso sistémico', 'Hospitalario (Pabellón)', 'Hospitalización de urgencia vital + Amputación mayor (bajo/sobre rodilla)'],
      ],
    },
    severityTable: {
      title: 'Diagnóstico Diferencial: Úlcera Neuropática vs Úlcera Isquémica',
      headers: ['Característica Clínica', 'Úlcera Neuropática Pura', 'Úlcera Isquémica / Vascular Pura'],
      rows: [
        ['Ubicación Típica', 'Superficies de apoyo: cabeza de 1° metatarsiano, talón', 'Zonas distales o de roce: pulpejos, bordes de los dedos'],
        ['Aspecto y Bordes', 'Rodeada de grueso rodete hiperqueratósico ("callo")', 'Bordes excavados, pálidos, con lecho necrótico o cianótico'],
        ['Dolor Percibido', 'Totalmente INDOLORA (anestesia por denervación)', 'MUY DOLOROSA (se incrementa al elevar la extremidad)'],
        ['Temperatura Cutánea', 'Pie caliente o tibio con buena perfusión', 'Pie frío con palidez al elevar y rubor a la declive'],
        ['Pulsos Distales', 'PRESENTES y amplios (pedio y tibial posterior palpables)', 'AUSENTES o marcadamente disminuidos'],
        ['Reflejo Aquiliano', 'Abolido', 'Conservado (si no hay neuropatía concomitante)'],
      ],
    },
    treatmentTable: {
      title: 'Esquema Antimicrobiano Escalonado en Infecciones de Pie Diabético',
      headers: ['Severidad de la Infección', 'Microorganismos Sospechados', 'Esquema Antibiótico Recomendado', 'Vía y Duración'],
      rows: [
        ['Leve (Celulitis < 2 cm, superficial)', 'Staphylococcus aureus, Streptococcus spp.', 'Cefadroxilo 500 mg c/12h o Cloxacilina 500 mg c/6h VO', 'Vía oral por 7 a 14 días'],
        ['Moderada (Celulitis > 2 cm, absceso local)', 'Polimicrobiana: Gram (+), Gram (-) y anaerobios', 'Amoxicilina/Ácido Clavulánico 875/125 mg c/12h VO o Ciprofloxacino + Clindamicina', 'Vía oral por 14 a 21 días'],
        ['Severa (Compromiso sistémico / Wagner 3-5)', 'Polimicrobiana grave con Pseudomonas y bacteriemia', 'Ceftriaxona 1-2 g/d EV + Metronidazol 500 mg c/8h EV (o Piperacilina/Tazobactam)', 'Vía endovenosa hospitalizada'],
        ['Osteomielitis Comprobada (Wagner 3)', 'Staphylococcus aureus y bacilos Gram negativos', 'Según cultivo de biopsia ósea; Ciprofloxacino + Clindamicina o Cefazolina', 'Vía parenteral inicial, duración total 4 a 6 semanas'],
      ],
    },
    vignette: 'Un hombre de 64 años con DM2 de 16 años de evolución, con mal control metabólico y tabaquismo activo, consulta por una lesión en la planta del pie derecho de 3 semanas de evolución. Al examen físico se observa una úlcera de 2.5 cm de diámetro sobre la cabeza del primer metatarsiano, con abundante hiperqueratosis circundante, totalmente indolora. Al explorar suavemente el fondo de la herida con un estilete metálico estéril, este choca de manera clara con una estructura ósea dura y rugosa. El pie se encuentra tibio y los pulsos pedio y tibial están presentes.',
    explicacion: 'El paciente presenta un "mal perforante plantar" neuropático clasificado como Wagner Grado 3 debido a que la prueba del estilete óseo ("probe-to-bone test") resultó positiva al contactar directamente la superficie ósea en el fondo de la lesión, lo que confirma una osteomielitis subyacente con un valor predictivo positivo superior al 90%. La conducta correcta es hospitalizar al paciente para realizar estudio radiológico/resonancia, desbridamiento quirúrgico con toma de biopsia ósea profunda para cultivo, reposo con descarga absoluta del apoyo y tratamiento antibiótico parenteral prolongado.',
    keyPoints: [
      'El monofilamento de Semmes-Weinstein de 10 gramos es la herramienta de elección para evaluar la pérdida de la sensibilidad protectora en APS.',
      'La úlcera neuropática clásica (mal perforante plantar) es INDOLORA, se ubica en zonas de apoyo y está rodeada de un grueso borde hiperqueratósico.',
      'La prueba del estilete óseo positiva ("probe-to-bone") confirma osteomielitis con más del 90% de especificidad y clasifica la lesión como Wagner 3.',
      'Wagner 1 es úlcera superficial dérmica; Wagner 2 llega a tendón sin absceso; Wagner 3 tiene osteomielitis o absceso; Wagner 4 tiene gangrena localizada y Wagner 5 gangrena extensa.',
      'Todo pie diabético con Wagner 3, 4 o 5 requiere HOSPITALIZACIÓN URGENTE para desbridamiento quirúrgico y antibióticos sistémicos.',
      'La medida terapéutica no quirúrgica más importante para permitir la cicatrización de una úlcera plantar es la DESCARGA DE PRESIÓN ("off-loading").',
      'No se deben tomar cultivos de hisopado superficial de la piel perilesional; el cultivo debe ser de tejido profundo o biopsia ósea en pabellón.',
      'La gangrena localizada (Wagner 4) obliga a estudiar la vascularización arterial distal mediante Eco-Doppler o AngioTAC previo a cualquier intento de resección.',
    ],
    questions: [
      {
        stem: 'Un paciente diabético de 61 años presenta una úlcera indolora de 2 cm en la planta del pie derecho, localizada bajo la cabeza del primer metatarsiano, rodeada de un halo de tejido hiperqueratósico. Al examinar la lesión con un estilete metálico estéril de punta roma, se palpa con claridad una superficie ósea dura y resistente en el fondo de la úlcera. Los pulsos arteriales distales son palpables. ¿Cuál es el diagnóstico y la conducta más adecuada?',
        opciones: [
          'A) Úlcera superficial Wagner 1; indicar curación avanzada ambulatoria con apósito hidrocoloide',
          'B) Úlcera Wagner 3 con osteomielitis subyacente; hospitalizar para tratamiento antibiótico endovenoso y evaluación quirúrgica',
          'C) Gangrena seca incipiente Wagner 4; indicar amputación supracondílea de urgencia',
          'D) Úlcera isquémica pura; derivar a cirugía vascular para bypass fémoro-poplíteo ambulatorio',
          'E) Fascitis necrotizante estreptocócica; administrar penicilina intramuscular ambulatoria'
        ],
        correcta: 'B',
        explicacion: 'La prueba del estilete óseo ("probe-to-bone test") consiste en palpar hueso en el fondo de la úlcera mediante una sonda metálica estéril. Su positividad confirma con altísima sensibilidad y especificidad (> 90%) la existencia de una osteomielitis subyacente, lo que clasifica la lesión automáticamente como Grado 3 de Wagner. El manejo estándar exige la hospitalización inmediata del paciente para desbridamiento y aseo quirúrgico, obtención de muestras óseas para cultivo microbiológico y terapia antibiótica parenteral prolongada.',
        recTag: 'EUNACOM Diciembre 2017 (Q#40)'
      },
      {
        stem: '¿Cuál es el instrumento semiológico validado y de primera línea en la atención primaria de salud para el tamizaje anual de la pérdida de la sensibilidad protectora en los pies de los pacientes con diabetes mellitus?',
        opciones: [
          'A) Aguja de punción intradérmica desechable',
          'B) Monofilamento de Semmes-Weinstein de 10 gramos (calibre 5.07)',
          'C) Tubos con agua fría y caliente para sensibilidad térmica',
          'D) Martillo de reflejos de Taylor para reflejo rotuliano',
          'E) Electromiografía de cuatro extremidades obligatoria anual'
        ],
        correcta: 'B',
        explicacion: 'El monofilamento de Semmes-Weinstein de 5.07, calibrado para aplicar exactamente una fuerza de 10 gramos al doblarse contra la piel, es el método estándar de oro, no invasivo, económico y universalmente recomendado en las guías del MINSAL y la ADA para la detección sistemática de la pérdida de la sensibilidad protectora en el pie diabético.',
        recTag: 'EUNACOM Julio 2019 (Q#23)'
      },
      {
        stem: 'Un paciente de 68 años con DM2 de larga data consulta por una lesión negruzca, seca y momificada que compromete el primer y segundo dedo del pie izquierdo, acompañada de frialdad local, ausencia de pulso pedio y tibial posterior, sin secreción purulenta ni fluctuación. ¿A qué estadio de la clasificación de Wagner corresponde este cuadro clínico?',
        opciones: [
          'A) Grado 2',
          'B) Grado 3',
          'C) Grado 4',
          'D) Grado 5',
          'E) Grado 0'
        ],
        correcta: 'C',
        explicacion: 'En la clasificación de Wagner, el Grado 4 se define como la presencia de gangrena localizada y limitada a los dedos, antepié o talón (isquemia tisular focalizada). El Grado 5 corresponde a una gangrena extensa que compromete todo el pie o gran parte de la extremidad con repercusión sistémica severa.',
        recTag: 'EUNACOM Diciembre 2020 (Q#55)'
      },
      {
        stem: 'Una paciente de 57 años con DM2 consulta por una úlcera de 1.5 cm en la cara lateral del quinto dedo del pie izquierdo tras estrenar un calzado nuevo. Al examen: la úlcera compromete la dermis superficial sin llegar al plano tendinoso ni óseo, no hay exudado purulento ni eritema mayor a 0.5 cm en los bordes. Los pulsos periféricos son normales y no hay dolor. ¿Cuál es el tratamiento local más importante para permitir la resolución y cicatrización de esta lesión?',
        opciones: [
          'A) Aplicación tópica diaria de pomada con corticoides y antibióticos',
          'B) Descarga de la presión y del roce mecánico ("off-loading") asociada a curación avanzada',
          'C) Cauterización química inmediata con nitrato de plata',
          'D) Baños de pies con soluciones antisépticas calientes con povidona yodada',
          'E) Amputación preventiva del quinto radio metatarsiano'
        ],
        correcta: 'B',
        explicacion: 'En toda úlcera superficial de pie diabético (Wagner 1), la medida no negociable y determinante para lograr la cicatrización es la descarga de la presión y del traumatismo mecánico ("off-loading") sobre la zona lesionada (mediante calzado terapéutico modificado, reposo o férula), combinada con curaciones avanzadas que mantengan un ambiente húmedo y limpio. Ninguna terapia tópica o antibiótica será efectiva si la zona continúa sufriendo roce o impacto repetitivo.',
        recTag: 'EUNACOM Julio 2022 (Q#18)'
      }
    ]
  },
  {
    id: 'diab-23',
    classId: 'diab-23',
    tier: 2,
    blockNum: 5,
    blockName: 'Complicaciones Crónicas y Dislipidemias',
    topicLabel: '5.4',
    title: 'Dislipidemias: Clasificación de Fredrickson, Riesgo Cardiovascular y Estatinas',
    perfilCode: '1.04.1.020, 1.04.1.021',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud: Prevención Secundaria Cardiovascular e Hipertensión Arterial / DM',
    reconstrucciones: 'EUNACOM Julio 2017 (Q#12) · EUNACOM Diciembre 2019 (Q#48) · EUNACOM Julio 2022 (Q#31)',
    frecuencia: 'Muy Alta · Metas de c-LDL según riesgo cardiovascular, uso de estatinas de alta intensidad y monitorización de mialgias/CK',
    svg: null, algoTitle: 'Algoritmo de Estratificación de Riesgo Cardiovascular y Terapia Hipolipemiante',
    diagram: flow('Algoritmo de Manejo de Dislipidemias según Riesgo Cardiovascular', [
      { t: 'Estratificación del Riesgo Cardiovascular Global (RCV) en APS', s: 'Determinar antecedentes: ¿Enfermedad cardiovascular clínica? ¿Diabetes? ¿ERC? o Cálculo de Framingham' },
      { k: 'split', q: '¿Categoría de Riesgo Cardiovascular Global?', s: 'Define la meta obligatoria de Colesterol LDL (c-LDL) y la intensidad de estatinas', ll: 'Riesgo Muy Alto (ECV previa / DM2 con daño órgano / ERC 3b-5)', rl: 'Riesgo Alto (DM2 sin daño > 10a / ERC 3a / Framingham > 10%)',
        left: { t: 'Meta LDL < 55 mg/dL (o < 70 mg/dL según guía)', s: 'Estatinas de ALTA Intensidad: Atorvastatina 40-80 mg/d o Rosuvastatina 20-40 mg/d (baja LDL ≥ 50%)', type: 'crit' },
        right: { t: 'Meta LDL < 70 mg/dL (o < 100 mg/dL)', s: 'Estatinas de Moderada a Alta Intensidad: Atorvastatina 20 mg o Rosuvastatina 10 mg', type: 'acc' },
        ll: 'muy alto: LDL < 55-70', rl: 'alto: LDL < 70-100' },
      { t: 'Efectos Adversos y Seguridad de las Estatinas', s: 'Mialgias (frecuentes, CK normal) vs Miositis/Rabdomiólisis (CK > 10x) · Solicitar CK solo si hay síntomas musculares', type: 'dec', al: 'seguridad CK', from: 'left' },
    ]),
    contexto: 'El tratamiento de las dislipidemias está fuertemente enfocado en el EUNACOM en base a la estratificación del Riesgo Cardiovascular (RCV) global. El alumno debe dominar las metas terapéuticas de colesterol LDL según la categoría de riesgo (muy alto, alto y moderado), la selección de estatinas de alta intensidad (atorvastatina 40–80 mg o rosuvastatina 20–40 mg) para pacientes con infarto previo o diabéticos de alto riesgo, y la conducta clínica adecuada ante la aparición de mialgias (solicitud de creatina kinasa, CK, y no suspensión precipitada sin confirmación).',
    contentSections: [
      {
        subhead: '1. Estratificación del Riesgo Cardiovascular Global (RCV) según Guías Chilenas',
        paragraphs: [
          'En Chile, el enfoque de las dislipidemias no se basa en tratar un valor aislado de colesterol, sino en el <strong>Riesgo Cardiovascular Global a 10 años</strong>:',
          '• <strong>Riesgo Muy Alto:</strong> Pacientes con antecedentes de <em>Enfermedad Cardiovascular Ateroesclerótica documentada</em> (infarto agudo de miocardio previo, angina inestable, revascularización coronaria, ataque cerebrovascular isquémico, ataque isquémico transitorio o enfermedad arterial periférica), diabéticos con daño de órgano blanco (microalbuminuria o retinopatía) o enfermedad renal crónica avanzada (VFG < 45 ml/min). <strong>Meta de c-LDL: < 55 mg/dL (o < 70 mg/dL según guía MINSAL)</strong> y reducción de ≥ 50% respecto al valor basal.<br/>' +
          '• <strong>Riesgo Alto:</strong> Diabéticos de larga data (> 10 años de evolución) sin daño de órgano blanco, hipertensión arterial severa (PA ≥ 160/100 mmHg), ERC etapa 3a (VFG 45–59 ml/min) o riesgo por Framingham de 10 a 19%. <strong>Meta de c-LDL: < 70 mg/dL (o < 100 mg/dL)</strong>.<br/>' +
          '• <strong>Riesgo Moderado:</strong> Pacientes con DM2 de corta evolución (< 10 años) sin otros factores de riesgo mayores o riesgo Framingham 5 a 9%. Meta de c-LDL: < 100 mg/dL.',
        ],
      },
      {
        subhead: '2. Selección y Potencia de las Estatinas: Alta vs Moderada Intensidad',
        paragraphs: [
          'Las estatinas (inhibidores competitivos de la enzima HMG-CoA reductasa) son los fármacos de primera línea indiscutidos para la reducción de la morbimortalidad cardiovascular:',
          '• <strong>Estatinas de Alta Intensidad:</strong> Reducen el colesterol LDL en un <strong>≥ 50%</strong>. Corresponden exclusivamente a: <strong>Atorvastatina 40 a 80 mg/día</strong> y <strong>Rosuvastatina 20 a 40 mg/día</strong>. Están indicadas en todos los pacientes de Riesgo Muy Alto y en prevención secundaria post-síndrome coronario agudo.<br/>' +
          '• <strong>Estatinas de Moderada Intensidad:</strong> Reducen el colesterol LDL entre un <strong>30% y 49%</strong>. Ejemplos: Atorvastatina 10 a 20 mg/día, Rosuvastatina 5 a 10 mg/día, Simvastatina 20 a 40 mg/día.<br/>' +
          '• Si con la dosis máxima tolerada de estatina no se alcanza la meta de c-LDL, se debe asociar <strong>Ezetimiba 10 mg/día</strong> (inhibidor de la absorción intestinal de colesterol que reduce un 15–20% adicional de LDL).',
        ],
      },
      {
        subhead: '3. Efectos Adversos Musculares y Hepáticos: Manejo Práctico de las Mialgias',
        paragraphs: [
          'El efecto adverso más común de las estatinas son los <strong>síntomas musculares asociados a estatinas (SAMS)</strong>: mialgias bilaterales proximales, debilidad o calambres en extremidades inferiores:',
          '• <strong>Mialgia simple:</strong> Dolor muscular sin elevación de Creatina Kinasa (CK normal). Ocurre en el 5–10% de los pacientes. La conducta es suspender temporalmente la estatina, reevaluar síntomas y reiniciar con una dosis menor o cambiar a otra estatina de perfil más hidrofílico (como rosuvastatina o pravastatina).<br/>' +
          '• <strong>Miositis:</strong> Dolor muscular con elevación moderada de CK (3 a 10 veces el límite superior normal). Exige suspensión del fármaco.<br/>' +
          '• <strong>Rabdomiólisis:</strong> Cuadro infrecuente pero potencialmente fatal (< 0.01%), con <strong>CK > 10 veces el valor normal (frecuente > 10.000 UI/L)</strong>, dolor muscular severo, mioglobinuria (orinas oscuras de color coñac) e insuficiencia renal aguda.',
        ],
      },
    ],
    table: {
      title: 'Clasificación de la Potencia de las Estatinas y Metas de c-LDL según Riesgo Cardiovascular',
      headers: ['Categoría de Riesgo', 'Definición Clínica EUNACOM', 'Meta de Colesterol LDL', 'Régimen de Estatinas Indicado'],
      rows: [
        ['Riesgo Muy Alto', 'Antecedente de IAM, ACV, claudicación intermitente, DM2 con proteinuria', '< 55 mg/dL (o < 70 mg/dL)', 'Alta intensidad: Atorvastatina 40-80 mg o Rosuvastatina 20-40 mg'],
        ['Riesgo Alto', 'DM2 sin daño de órgano blanco > 10a, ERC etapa 3a, Framingham ≥ 10%', '< 70 mg/dL (o < 100 mg/dL)', 'Alta o moderada intensidad: Atorvastatina 20-40 mg'],
        ['Riesgo Moderado', 'DM2 joven < 10a sin daño, pacientes con Framingham 5-9%', '< 100 mg/dL', 'Moderada intensidad: Atorvastatina 10-20 mg o Simvastatina 20-40 mg'],
        ['Riesgo Bajo', 'Score de Framingham < 5% sin comorbilidades mayores', '< 116 mg/dL (o < 130 mg/dL)', 'Cambios terapéuticos del estilo de vida (dieta mediterránea y ejercicio)'],
      ],
    },
    vignette: 'Un hombre de 58 años con antecedentes de hipertensión arterial y un infarto agudo de miocardio hace 2 años acude a control con exámenes: Colesterol total 190 mg/dL, HDL 42 mg/dL, Triglicéridos 160 mg/dL y Colesterol LDL de 118 mg/dL. Actualmente toma enalapril 10 mg c/12h, aspirina 100 mg/d y atorvastatina 10 mg/día. Se encuentra asintomático.',
    explicacion: 'El paciente se encuentra en la categoría de RIESGO CARDIOVASCULAR MUY ALTO por tener una enfermedad coronaria ateroesclerótica clínicamente establecida (infarto agudo de miocardio previo). En prevención secundaria, su meta obligatoria de Colesterol LDL es < 70 mg/dL (o < 55 mg/dL según guías internacionales contemporáneas). Al encontrarse en 118 mg/dL con una dosis subóptima de estatina (10 mg), la conducta correcta es optimizar la terapia escalando a una estatina de alta intensidad: Atorvastatina 40 a 80 mg/día (o Rosuvastatina 20–40 mg/día).',
    keyPoints: [
      'Todo paciente con enfermedad cardiovascular clínica demostrada (IAM, ACV, arteriopatía periférica) tiene Riesgo Cardiovascular Muy Alto.',
      'La meta de c-LDL en Riesgo Muy Alto es < 70 mg/dL (o < 55 mg/dL); en Riesgo Alto es < 100 mg/dL (o < 70 mg/dL).',
      'Las estatinas de alta intensidad son Atorvastatina 40–80 mg/día y Rosuvastatina 20–40 mg/día (reducen el LDL en ≥ 50%).',
      'El efecto adverso más frecuente son las mialgias; ante su sospecha, se debe solicitar Creatina Kinasa (CK).',
      'La rabdomiólisis cursa con CK > 10 veces el límite superior normal, mioglobinuria y falla renal aguda.',
      'Si no se alcanza la meta con dosis máxima de estatina, se debe agregar Ezetimiba 10 mg/día.',
    ],
    questions: [
      {
        stem: 'Un paciente de 60 años, hipertenso, con antecedente de un infarto agudo de miocardio de pared anterior hace 6 meses tratado con angioplastía coronaria, acude a control médico ambulatorio. Su perfil lipídico actual bajo tratamiento con atorvastatina 10 mg al día muestra: Colesterol total 188 mg/dL, c-HDL 45 mg/dL, Triglicéridos 145 mg/dL y c-LDL 112 mg/dL. ¿Cuál es la conducta más adecuada a seguir respecto a su terapia hipolipemiante?',
        opciones: [
          'A) Mantener la dosis actual ya que el colesterol total es menor a 200 mg/dL',
          'B) Suspender la estatina y agregar gemfibrozilo 600 mg al día',
          'C) Aumentar la dosis de atorvastatina a 40 u 80 mg al día para alcanzar una meta de c-LDL menor a 70 mg/dL',
          'D) Cambiar atorvastatina por simvastatina 10 mg al día',
          'E) Recomendar únicamente dieta estricta sin grasas saturadas durante 6 meses'
        ],
        correcta: 'C',
        explicacion: 'En todo paciente con enfermedad cardiovascular ateroesclerótica confirmada (prevención secundaria por infarto de miocardio previo), el riesgo cardiovascular es clasificado como Muy Alto. La meta terapéutica obligatoria de colesterol LDL es alcanzar niveles < 70 mg/dL (o < 55 mg/dL según guías actuales) o reducir al menos el 50% del valor basal. Por ello, una dosis de 10 mg de atorvastatina es insuficiente, debiendo indicarse una estatina de alta intensidad como Atorvastatina 40 a 80 mg/día.',
        recTag: 'EUNACOM Julio 2017 (Q#12)'
      },
      {
        stem: 'Una mujer de 55 años que inició tratamiento con atorvastatina 40 mg al día hace 4 semanas por una dislipidemia mixta de alto riesgo consulta por dolores musculares difusos en muslos y hombros, de predominio vespertino. Al examen físico no se aprecian alteraciones articulares ni debilidad motora objetiva. ¿Cuál es la prueba diagnóstica de laboratorio inicial indispensable para evaluar la seguridad del tratamiento?',
        opciones: [
          'A) Anticuerpos antinucleares (ANA)',
          'B) Creatina Kinasa total (CK)',
          'C) Ácido úrico en sangre',
          'D) Factor reumatoideo cuantitativo',
          'E) Velocidad de eritrosedimentación'
        ],
        correcta: 'B',
        explicacion: 'Las estatinas pueden producir una gama de eventos adversos musculares que van desde mialgias simples sin daño celular hasta miositis severa y rabdomiólisis potencialmente letal. Ante la aparición de dolor o debilidad muscular en un paciente que recibe estatinas, el examen mandatario de laboratorio inicial es la medición de la Creatina Kinasa (CK) sérica. Si la CK se encuentra normal, se trata de una mialgia simple; si supera 5 a 10 veces el valor normal con elevación de transaminasas o daño renal, se debe suspender la estatina inmediatamente.',
        recTag: 'EUNACOM Diciembre 2019 (Q#48)'
      }
    ]
  },
  {
    id: 'diab-24',
    classId: 'diab-24',
    tier: 2,
    blockNum: 5,
    blockName: 'Complicaciones Crónicas y Dislipidemias',
    topicLabel: '5.5',
    title: 'Dislipidemias Severas y Genéticas: Hipertrigliceridemia y Pancreatitis',
    perfilCode: '1.04.1.022',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud: Prevención Cardiovascular / Patología de Urgencia',
    reconstrucciones: 'EUNACOM Diciembre 2018 (Q#56) · EUNACOM Diciembre 2021 (Q#39)',
    frecuencia: 'Alta · Hipertrigliceridemia severa (> 500-1000 mg/dL), riesgo de pancreatitis aguda, uso de fibratos y estigmas de hipercolesterolemia familiar',
    svg: null, algoTitle: 'Algoritmo de Manejo de la Hipertrigliceridemia Severa y Sospecha de Dislipidemia Familiar',
    diagram: flow('Algoritmo de Hipertrigliceridemia Severa y Dislipidemia Familiar', [
      { t: 'Detección de Hipertrigliceridemia Severa en Perfil Lipídico', s: 'Evaluar nivel plasmático de triglicéridos (TG) y descartar causas secundarias (alcohol, diabetes descompensada)' },
      { k: 'split', q: '¿Nivel de Triglicéridos > 500 a 1.000 mg/dL?', s: 'Riesgo crítico de Pancreatitis Aguda inducida por hipertrigliceridemia', ll: 'TG > 500 – 1.000 mg/dL (Severa / Crítica)', rl: 'TG entre 150 y 499 mg/dL (Moderada)',
        left: { t: 'INICIAR FIBRATOS DE INMEDIATO (Fenofibrato / Gemfibrozilo)', s: 'Prioridad 1: Prevenir PANCREATITIS AGUDA · Dieta estricta cero alcohol y cero azúcares simples', type: 'crit' },
        right: { t: 'Optimizar Estilo de Vida y Estatinas si RCV Alto', s: 'Reducción de peso, ejercicio aeróbico y tratar hiperglicemia subyacente', type: 'acc' },
        ll: 'TG > 500: fibrato urgente', rl: 'TG < 500: estatina / dieta' },
      { t: 'Hipercolesterolemia Familiar: LDL > 190 mg/dL + Xantomas Tendinosos', s: 'Mutación autosómica dominante del receptor LDL · Xantomas en tendón de Aquiles e infarto precoz en familiares', type: 'warn', al: 'genética', from: 'left' },
    ]),
    contexto: 'Las dislipidemias severas presentan dos situaciones de alto rendimiento en el EUNACOM: 1) La hipertrigliceridemia severa (> 500 a 1.000 mg/dL), cuya complicación más grave no es el infarto agudo de miocardio sino la pancreatitis aguda necrotizante, requiriendo el inicio urgente de fibratos (fenofibrato o gemfibrozilo) con suspensión total de alcohol y carbohidratos refinados; y 2) La sospecha de Hipercolesterolemia Familiar Heterocigota ante cifras desorbitadas de LDL (> 190–250 mg/dL) acompañadas de xantomas en el tendón de Aquiles, arco senil precoz e infarto en familiares jóvenes.',
    contentSections: [
      {
        subhead: '1. Hipertrigliceridemia Severa y la Amenaza de Pancreatitis Aguda',
        paragraphs: [
          'La concentración normal de triglicéridos en ayunas es < 150 mg/dL. Cuando los triglicéridos superan los <strong>500 mg/dL (hipertrigliceridemia severa)</strong> y en especial si superan los <strong>1.000 mg/dL (hipertrigliceridemia crítica)</strong>, el suero plasmático adquiere un aspecto blanco lechoso o lactescente ("lipemia retinalis").',
          'A estos niveles masivos, las partículas de quilomicrones y VLDL ocluyen la microcirculación de los capilares pancreáticos. La lipasa pancreática extravasada hidroliza los triglicéridos liberando <strong>ácidos grasos libres en concentraciones masivas citotóxicas</strong>, los que generan daño capilar directo, isquemia y desencadenan una <strong>PANCREATITIS AGUDA INDUCIDA POR HIPERTRIGLICERIDEMIA</strong>, la cual suele ser más agresiva y con mayor necrosis tisular que la biliar o alcohólica.',
        ],
      },
      {
        subhead: '2. Tratamiento Urgente de la Hipertrigliceridemia Severa: Los Fibratos',
        paragraphs: [
          '<strong>Regla Prioritaria EUNACOM:</strong> Cuando un paciente asintomático presenta <strong>triglicéridos > 500 a 1.000 mg/dL, LA PRIORIDAD TERAPÉUTICA NO ES EL LDL NI EL RIESGO CARDIOVASCULAR, SINO EVITAR LA PANCREATITIS AGUDA</strong>.',
          'La conducta farmacológica inmediata es iniciar un <strong>FIBRATO (Fenofibrato 160–200 mg/día o Gemfibrozilo 600 mg cada 12 horas)</strong> como fármaco de primera línea, asociado a la <strong>prohibición absoluta y terminante de ingesta alcohólica</strong> y a una dieta estricta con restricción severa de grasas (< 15–20% de las calorías totales) y eliminación total de azúcares simples y fructosa.',
          '<em>¡Advertencia de Seguridad Farmacológica!:</em> Si es necesario asociar un fibrato con una estatina, <strong>se debe preferir FENOFIBRATO y NUNCA GEMFIBROZILO</strong>. El gemfibrozilo inhibe la glucuronidación hepática de las estatinas, multiplicando por 15 a 20 veces el riesgo de rabdomiólisis grave.',
        ],
      },
      {
        subhead: '3. Hipercolesterolemia Familiar: Clínica, Genética y Estigmas Cutáneos',
        paragraphs: [
          'La <strong>Hipercolesterolemia Familiar Heterocigota (HF)</strong> es una enfermedad genética monogénica autosómica dominante con prevalencia de 1 en 250 a 300 personas, provocada por mutaciones con pérdida de función en el <strong>gen del receptor de c-LDL (LDLR)</strong> en más del 85% de los casos (o mutaciones en APOB o ganancia de función en PCSK9).',
          '<strong>Claves Diagnósticas para el EUNACOM:</strong><br/>' +
          '• Colesterol LDL marcadamente elevado desde el nacimiento (habitualmente <strong>LDL entre 190 y 350 mg/dL</strong> con triglicéridos normales).<br/>' +
          '• <strong>Xantomas Tendinosos (patognomónicos):</strong> Engrosamiento nodular indoloro en los <em>tendones de Aquiles</em> y tendones extensores de las manos.<br/>' +
          '• <strong>Arco Corneal (Arco Senil) Prematuro:</strong> Anillo lipídico periférico grisáceo en la córnea presente antes de los 45 años de edad.<br/>' +
          '• <strong>Xantelasmas:</strong> Placas amarillentas en los párpados.<br/>' +
          '• Antecedente familiar de <strong>enfermedad coronaria prematura en familiares de primer grado</strong> (infarto de miocardio o muerte súbita en hombres < 55 años o mujeres < 65 años). Requiere tratamiento intensivo de por vida con estatinas de alta potencia a dosis máximas + ezetimiba + inhibidores de PCSK9 (Evolocumab).',
        ],
      },
    ],
    table: {
      title: 'Clasificación de Hipertrigliceridemia y Riesgo de Pancreatitis',
      headers: ['Nivel de Triglicéridos', 'Categoría Clínica', 'Riesgo Clínico Principal', 'Tratamiento de Elección'],
      rows: [
        ['150 – 199 mg/dL', 'Límite Alto', 'Riesgo cardiovascular moderado', 'Estilo de vida, dieta baja en azúcares simples'],
        ['200 – 499 mg/dL', 'Moderadamente Alto', 'Ateroesclerosis acelerada', 'Estatinas si riesgo RCV alto + estilo de vida'],
        ['500 – 999 mg/dL', 'Severo', 'Riesgo inminente de Pancreatitis Aguda', 'FIBRATO (Fenofibrato 160 mg o Gemfibrozilo) urgente'],
        ['≥ 1.000 mg/dL', 'Crítico / Muy Severo', 'ALTO RIESGO DE PANCREATITIS AGUDA Y QUILOMICRONEMIA', 'FIBRATO inmediato + Cero alcohol + Dieta cero grasa (< 15%)'],
      ],
    },
    vignette: 'Un hombre de 46 años, obeso (IMC 33 kg/m²), bebedor de fin de semana y sin controles médicos regulares, se realiza un chequeo de rutina en el trabajo. El laboratorio informa que el suero es lipémico y lactescente. Su perfil lipídico muestra: Colesterol total 268 mg/dL, HDL 32 mg/dL y Triglicéridos de 1.480 mg/dL. Se encuentra asintomático, sin dolor abdominal ni náuseas, con abdomen blando y ruidos hidroaéreos normales.',
    explicacion: 'El paciente presenta una hipertrigliceridemia crítica (> 1.000 mg/dL). A estos niveles, la prioridad médica absoluta de urgencia es prevenir el desencadenamiento de una Pancreatitis Aguda inducida por hipertrigliceridemia. La indicación prioritaria es iniciar inmediatamente tratamiento farmacológico con un fibrato (fenofibrato o gemfibrozilo), suspender de forma categórica y absoluta el consumo de alcohol y restringir los carbohidratos simples y grasas de la dieta.',
    keyPoints: [
      'Niveles de triglicéridos > 500 a 1.000 mg/dL confieren un riesgo crítico de PANCREATITIS AGUDA.',
      'Ante triglicéridos > 500-1000 mg/dL, el fármaco de primera línea de inicio inmediato son los FIBRATOS (Fenofibrato o Gemfibrozilo).',
      'El alcohol y los azúcares simples son los factores dietéticos que más incrementan la síntesis hepática de triglicéridos; deben prohibirse.',
      'La asociación de Gemfibrozilo con Estatinas está CONTRAINDICADA por elevado riesgo de rabdomiólisis fatal; si se requiere combinar, se usa Fenofibrato.',
      'La presencia de LDL > 190 mg/dL, xantomas en tendón de Aquiles e infartos precoces en familiares es diagnóstica de Hipercolesterolemia Familiar.',
      'Los xantomas tendinosos son el estigma físico patognomónico de la Hipercolesterolemia Familiar Heterocigota.',
    ],
    questions: [
      {
        stem: 'Un hombre de 48 años, asintomático, acude a su control de salud con exámenes preventivos: Colesterol total 250 mg/dL, c-HDL 35 mg/dL, c-LDL no calculable por hipertrigliceridemia y Triglicéridos plasmáticos de 1.280 mg/dL. El examen físico general y abdominal es estrictamente normal. ¿Cuál es el objetivo primordial inmediato y el fármaco de elección para iniciar el tratamiento?',
        opciones: [
          'A) Prevenir el infarto agudo de miocardio iniciando atorvastatina 80 mg al día',
          'B) Prevenir la pancreatitis aguda iniciando un fibrato (fenofibrato o gemfibrozilo)',
          'C) Prevenir el accidente cerebrovascular isquémico iniciando aspirina 100 mg al día',
          'D) Prevenir la esteatohepatitis iniciando metformina a dosis plenas',
          'E) Indicar únicamente dieta vegetariana estricta y citar a nuevo control en 6 meses'
        ],
        correcta: 'B',
        explicacion: 'Cuando los triglicéridos superan los 500 a 1.000 mg/dL, la complicación inmediata más grave que amenaza la vida del paciente no es la ateroesclerosis coronaria sino la Pancreatitis Aguda por hipertrigliceridemia (por toxicidad directa de los ácidos grasos libres sobre el tejido acinar pancreático). La prioridad absoluta es reducir rápidamente los triglicéridos mediante el inicio de un fibrato (fenofibrato 160–200 mg/d o gemfibrozilo 600 mg c/12h), sumado a la abstención completa de alcohol y azúcares simples.',
        recTag: 'EUNACOM Diciembre 2018 (Q#56)'
      },
      {
        stem: 'Un hombre de 34 años consulta por la aparición de nódulos indoloros y de consistencia firme en la cara posterior de ambos tobillos a nivel de los tendones de Aquiles. Refiere que su padre falleció súbitamente por un infarto agudo de miocardio a los 41 años. Su perfil lipídico revela: Colesterol total 340 mg/dL, c-HDL 48 mg/dL, Triglicéridos 130 mg/dL y c-LDL de 266 mg/dL. ¿Cuál es el diagnóstico genético más probable?',
        opciones: [
          'A) Hipercolesterolemia familiar heterocigota',
          'B) Hipertrigliceridemia familiar aislada',
          'C) Disbetalipoproteinemia familiar tipo III',
          'D) Hiperlipidemia familiar combinada',
          'E) Xantomatosis cerebrotendinosa recesiva'
        ],
        correcta: 'A',
        explicacion: 'El paciente presenta los hallazgos clásicos de una Hipercolesterolemia Familiar Heterocigota: elevación extrema de colesterol LDL (> 190 mg/dL, en este caso 266 mg/dL), presencia de xantomas tendinosos en los tendones de Aquiles (estigma físico patognomónico que traduce depósito tisular de ésteres de colesterol por macrófagos espumosos) y antecedentes de primer grado de enfermedad coronaria prematura (padre con infarto a los 41 años). Se transmite de forma autosómica dominante por mutaciones del receptor LDL.',
        recTag: 'EUNACOM Diciembre 2021 (Q#39)'
      }
    ]
  }
];

module.exports = { bloque5, flow };
