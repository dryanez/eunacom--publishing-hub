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
    id: 'endo-01',
    classId: 'endo-01',
    tier: 2,
    blockNum: 1,
    blockName: 'Patología Tiroidea Funcional: Hipotiroidismo y Tiroiditis',
    topicLabel: '1.1',
    title: 'Fisiología Tiroidea, Interpretación de TSH/T4L y Síndrome del Eutiroideo Enfermo',
    perfilCode: '1.05.1.005',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES N° 35): Hipotiroidismo en Personas de 15 años y más',
    reconstrucciones: 'EUNACOM Diciembre 2017 (Q#18) · EUNACOM Julio 2021 (Q#42) · EUNACOM Julio 2023 (Q#15)',
    frecuencia: 'Alta · Prueba inicial de elección (TSH), diagnóstico diferencial TSH/T4L y síndrome del eutiroideo enfermo en UCI',
    svg: null, algoTitle: 'Algoritmo de Interpretación Inicial de las Pruebas de Función Tiroidea',
    diagram: flow('Algoritmo de Interpretación del Perfil Tiroideo en Atención Primaria', [
      { t: 'Sospecha Clínica de Disfunción Tiroidea en APS', s: 'Prueba de Primera Línea Universal: Medición de TSH Plasmática (Rango normal: 0.4 a 4.0 mIU/L)' },
      { k: 'split', q: '¿Nivel de TSH Sérica Inicial?', s: 'Define la dirección diagnóstica: Hipofunción vs Hiperfunción tiroidea', ll: 'TSH Elevada (> 4.0 – 4.5 mIU/L)', rl: 'TSH Suprimida (< 0.1 – 0.4 mIU/L)',
        left: { t: 'Solicitar T4 Libre (T4L)', s: 'T4L Baja -> Hipotiroidismo Primario · T4L Normal -> Hipotiroidismo Subclínico', type: 'acc' },
        right: { t: 'Solicitar T4 Libre y T3 Total/Libre', s: 'T4L/T3 Altas -> Hipertiroidismo Primario · T4L/T3 Normales -> Hipertiroidismo Subclínico', type: 'warn' },
        ll: 'evaluar T4L', rl: 'evaluar T4L/T3' },
      { t: 'Caso Especial: Síndrome del Eutiroideo Enfermo (Enfermedad No Tiroidea)', s: 'Paciente crítico en UCI con T3 baja, T4L normal/baja y TSH normal o discretamente baja · ¡NO TRATAR CON LEVOTIROXINA!', type: 'dec', al: 'eutiroideo enfermo', from: 'left' },
    ]),
    contexto: 'La interpretación correcta de las pruebas de función tiroidea es una de las habilidades más evaluadas en el EUNACOM. La TSH ultrasensible es el examen inicial de mayor rendimiento diagnóstico debido a la relación logarítmico-lineal inversa con las hormonas tiroideas periféricas. El médico debe distinguir con absoluta seguridad los patrones primarios de los centrales o secundarios, y reconocer el Síndrome del Eutiroideo Enfermo en pacientes hospitalizados graves para evitar el error de iniciar tratamiento con levotiroxina.',
    contentSections: [
      {
        subhead: '1. Eje Hipotálamo-Hipófisis-Tiroides y la Primacía de la TSH',
        paragraphs: [
          'La regulación tiroidea se rige por retroalimentación negativa clásica: el hipotálamo secreta la <strong>Hormona Liberadora de Tirotropina (TRH)</strong>, que estimula en la adenohipófisis la producción de <strong>Tirotropina (TSH)</strong>, la cual promueve en la tiroides la síntesis y secreción de <strong>Tiroxina (T4, 80%)</strong> y <strong>Triyodotironina (T3, 20%)</strong>. La mayor parte de la T3 circulante (la hormona metabólicamente activa) proviene de la desyodación periférica de T4 por la enzima desyodasa tipo 1 y 2 en hígado, riñón y músculo.',
          'Dado que mínimas variaciones de T4 libre inducen cambios exponenciales en la secreción hipofisaria de TSH, <strong>la TSH plasmática ultrasensible es la prueba inicial de tamizaje de elección en cualquier sospecha de patología tiroidea</strong>. El valor normal de TSH en adultos oscila habitualmente entre <strong>0.4 y 4.0–4.5 mIU/L</strong>.',
        ],
      },
      {
        subhead: '2. Interpretación Cruzada de TSH y T4 Libre: Primario vs Central',
        paragraphs: [
          'La combinación de TSH y T4 Libre permite clasificar las disfunciones tiroideas en cuatro grandes patrones:',
          '• <strong>Hipotiroidismo Primario:</strong> Falla intrínseca tiroidea. <strong>TSH marcadamente elevada con T4 Libre baja</strong>. Representa > 95% de los hipotiroidismos.<br/>' +
          '• <strong>Hipotiroidismo Subclínico:</strong> <strong>TSH elevada (4.5 a 10 mIU/L o más) con T4 Libre normal</strong>. Es un estado de falla tiroidea compensada asintomático o paucisintomático.<br/>' +
          '• <strong>Hipotiroidismo Secundario / Central:</strong> Falla hipofisaria o hipotalámica. Se caracteriza por <strong>T4 Libre baja con TSH baja o "inapropiadamente normal"</strong> (entre 1.0 y 3.5 mIU/L). Exige estudio de imagen selar (RMN de hipófisis) y descartar insuficiencia suprarrenal concomitante antes de dar levotiroxina.<br/>' +
          '• <strong>Hipertiroidismo Primario:</strong> <strong>TSH suprimida (< 0.1 mIU/L) con T4 Libre y/o T3 elevadas</strong>.',
        ],
      },
      {
        subhead: '3. Síndrome del Eutiroideo Enfermo (Non-Thyroidal Illness Syndrome)',
        paragraphs: [
          'En pacientes cursando enfermedades sistémicas críticas no tiroideas (sepsis, shock, politraumatismo, cetoacidosis o postoperatorio mayor de UCI), se altera profundamente el metabolismo periférico de las hormonas tiroideas:',
          'Las citoquinas inflamatorias (IL-6, TNF-alfa) inhiben a la 5\'-desyodasa periférica, disminuyendo la conversión de T4 a T3 y desviando la vía hacia la síntesis de <strong>T3 reversa (rT3, metabólicamente inactiva)</strong>. La alteración analítica más precoz y común es la <strong>T3 total y libre muy baja ("Síndrome de T3 baja")</strong> con T4L y TSH normales. A mayor gravedad del paciente crítico, la T4L y la TSH también descienden.',
          '<strong>Regla de Oro EUNACOM:</strong> El Síndrome del Eutiroideo Enfermo es una respuesta adaptativa de ahorro energético; <strong>ESTÁ FORMALMENTE CONTRAINDICADO EL TRATAMIENTO CON LEVOTIROXINA O T3</strong>, ya que no mejora el pronóstico y puede aumentar la mortalidad. Se debe tratar exclusivamente la patología médica de base y reevaluar el perfil tiroideo semanas después del alta hospitalaria.',
        ],
      },
    ],
    table: {
      title: 'Patrones Analíticos Clásicos en Pruebas de Función Tiroidea',
      headers: ['Diagnóstico Endocrinológico', 'TSH Plasmática', 'T4 Libre (T4L)', 'T3 Total / Libre', 'Conducta Clínica EUNACOM'],
      rows: [
        ['Hipotiroidismo Primario', 'ELEVADA (> 4.5 mIU/L)', 'DISMINUIDA (< 0.8 ng/dL)', 'Normal o Disminuida', 'Iniciar Levotiroxina (1.6 mcg/kg/d) GES'],
        ['Hipotiroidismo Subclínico', 'ELEVADA (> 4.5 mIU/L)', 'NORMAL', 'Normal', 'Tratar si TSH ≥ 10, síntomas, anti-TPO(+) o embarazo'],
        ['Hipotiroidismo Central', 'Baja o "Normal" inapropiada', 'DISMINUIDA', 'Disminuida', 'RMN hipófisis; descartar Addison antes de hormona'],
        ['Hipertiroidismo Primario', 'SUPRIMIDA (< 0.1 mIU/L)', 'ELEVADA', 'Elevada', 'Iniciar Tiamazol / Propranolol + Anticuerpos TRAb'],
        ['Hipertiroidismo Subclínico', 'SUPRIMIDA (< 0.4 mIU/L)', 'NORMAL', 'Normal', 'Observar; tratar si FA, osteoporosis o TSH < 0.1'],
        ['Síndrome Eutiroideo Enfermo', 'Normal o Levemente Baja', 'Normal o Baja (grave)', 'DISMINUIDA (T3 reversa alta)', 'OBSERVACIÓN en UCI; ¡Prohibido dar levotiroxina!'],
      ],
    },
    vignette: 'Un hombre de 66 años ingresa a la Unidad de Cuidados Intensivos cursando un shock séptico de foco pulmonar secundario a neumonía multilobar por Pseudomonas, requiriendo intubación orotraqueal, soporte con noradrenalina y antibióticos de amplio espectro. Dentro de los exámenes generales de ingreso se solicita un perfil tiroideo que informa: TSH 0.6 mIU/L (rango normal 0.4 a 4.0), T4 Libre 0.82 ng/dL (rango 0.8 a 1.8), T3 total de 35 ng/dL (marcadamente baja, normal 80 a 200 ng/dL) y T3 reversa muy elevada. El paciente no tiene antecedentes de bocio ni patología tiroidea previa.',
    explicacion: 'El paciente presenta el patrón clásico del Síndrome del Eutiroideo Enfermo (o síndrome de T3 baja) inducido por el estrés metabólico severo del shock séptico. La inhibición de la 5\'-desyodasa periférica por citoquinas proinflamatorias desvía la T4 hacia T3 reversa inactiva. La conducta médica correcta es la observación de la función tiroidea y el tratamiento intensivo exclusivo de la sepsis de base, estando contraindicada la administración de hormonas tiroideas exógenas.',
    keyPoints: [
      'La TSH es la prueba inicial más sensible y costo-efectiva para evaluar la función tiroidea en cualquier nivel de atención.',
      'En hipotiroidismo primario la TSH está alta y la T4 libre baja; en hipotiroidismo subclínico la TSH está alta pero la T4 libre es NORMAL.',
      'El hipotiroidismo central se caracteriza por T4 libre baja con TSH baja o paradójicamente "normal" (inapropiada para el nivel de T4).',
      '¡Alerta!: Nunca iniciar levotiroxina en un hipotiroidismo central sin haber descartado y tratado previamente una insuficiencia suprarrenal.',
      'El Síndrome del Eutiroideo Enfermo cursa con T3 marcadamente baja y T3 reversa elevada en pacientes críticos de UCI.',
      'Está contraindicado administrar levotiroxina o T3 en el síndrome del eutiroideo enfermo; la alteración se resuelve al sanar la enfermedad de base.',
    ],
    questions: [
      {
        stem: 'Un paciente de 68 años se encuentra hospitalizado en la Unidad de Paciente Crítico recibiendo soporte hemodinámico y ventilatorio por una pancreatitis aguda necrohemorrágica grave con falla multiorgánica. En sus exámenes de laboratorio se documenta: TSH 0.8 mIU/L (normal 0.4–4.0), T4 libre 0.85 ng/dL (normal 0.8–1.9), T3 total 32 ng/dL (normal 80–200) y T3 reversa marcadamente elevada. ¿Cuál es la conducta terapéutica indicada respecto a este perfil hormonal?',
        opciones: [
          'A) Iniciar levotiroxina endovenosa en dosis sustitutiva completa',
          'B) Iniciar triyodotironina (T3) oral por sonda nasoyeyunal',
          'C) Mantener conducta expectante respecto al eje tiroideo y continuar el tratamiento intensivo de la pancreatitis',
          'D) Iniciar hidrocortisona endovenosa en altas dosis para reactivar la secreción tiroidea',
          'E) Solicitar tiroidectomía de urgencia para evitar tormenta tiroidea larvada'
        ],
        correcta: 'C',
        explicacion: 'El cuadro corresponde al Síndrome del Eutiroideo Enfermo (o síndrome de T3 baja), una alteración funcional fisiológica frecuente en pacientes críticos debida al bloqueo de la 5\'-desyodasa tisular inducido por citoquinas inflamatorias y cortisol. La administración de levotiroxina o T3 no solo no ha demostrado beneficio en la sobrevida sino que puede incrementar el catabolismo y la mortalidad. La conducta estándar es mantener una actitud expectante y reevaluar las pruebas tiroideas una vez superada la patología crítica de base.',
        recTag: 'EUNACOM Diciembre 2017 (Q#18)'
      },
      {
        stem: 'Una mujer de 54 años consulta por astenia leve y sequedad de piel. Sus exámenes de laboratorio revelan: TSH de 7.4 mIU/L (valor de referencia 0.4 a 4.0 mIU/L) y T4 Libre de 1.2 ng/dL (valor de referencia 0.8 a 1.8 ng/dL). ¿Cuál es la interpretación diagnóstica de este examen?',
        opciones: [
          'A) Hipotiroidismo primario clínico establecido',
          'B) Hipotiroidismo subclínico',
          'C) Hipotiroidismo central secundario',
          'D) Resistencia a las hormonas tiroideas',
          'E) Síndrome del eutiroideo enfermo'
        ],
        correcta: 'B',
        explicacion: 'La definición diagnóstica bioquímica de Hipotiroidismo Subclínico exige la concurrencia de una concentración plasmática de TSH por encima del límite superior normal (típicamente > 4.5 mIU/L, en este caso 7.4 mIU/L) con una concentración sérica de Tiroxina Libre (T4L) que se mantiene estrictamente dentro de los rangos de referencia normales (1.2 ng/dL).',
        recTag: 'EUNACOM Julio 2021 (Q#42)'
      }
    ]
  },
  {
    id: 'endo-02',
    classId: 'endo-02',
    tier: 3,
    blockNum: 1,
    blockName: 'Patología Tiroidea Funcional: Hipotiroidismo y Tiroiditis',
    topicLabel: '1.2',
    title: 'Hipotiroidismo Primario y Subclínico: Diagnóstico y Titulación de Levotiroxina',
    perfilCode: '1.05.1.005',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES N° 35): Hipotiroidismo en Personas de 15 años y más',
    reconstrucciones: 'EUNACOM Diciembre 2016 (Q#45) · EUNACOM Julio 2018 (Q#22) · EUNACOM Diciembre 2020 (Q#31) · EUNACOM Julio 2023 (Q#48)',
    frecuencia: 'Máxima · Dosis estándar de levotiroxina, reglas de absorción, criterios de tratamiento en hipotiroidismo subclínico y ajuste en cardiópatas/ancianos',
    svg: null, algoTitle: 'Algoritmo Diagnóstico y Terapéutico del Hipotiroidismo Primario y Subclínico en APS',
    diagram: flow('Algoritmo de Manejo Terapéutico de Hipotiroidismo Primario y Subclínico', [
      { t: 'Paciente con TSH Plasmática Elevada (> 4.5 mIU/L) en Atención Primaria', s: 'Paso 1: Medir T4 Libre sérica y anticuerpos anti-peroxidasa tiroidea (Anti-TPO)' },
      { k: 'split', q: '¿T4 Libre Disminuida vs T4 Libre Normal?', s: 'Diferenciación cardinal: Hipotiroidismo Clínico vs Subclínico', ll: 'T4 Libre Baja: Hipotiroidismo Primario Clínico', rl: 'T4 Libre Normal: Hipotiroidismo Subclínico',
        left: { t: 'INICIAR LEVOTIROXINA SISTEMÁTICAMENTE (GES)', s: 'Dosis estándar: 1.6 mcg/kg/día en jóvenes · 25 a 50 mcg/día en ancianos o cardiópatas', type: 'acc' },
        right: { t: 'Evaluar Criterios de Tratamiento Subclínico', s: '¿TSH ≥ 10 mIU/L? ¿Anti-TPO (+)? ¿Embarazo / Deseo concepción? ¿Bocio o síntomas?', type: 'warn' },
        ll: 'tratamiento universal', rl: 'criterios selectivos' },
      { k: 'split', q: '¿Cumple Criterios Formales en Subclínico?', s: 'TSH ≥ 10 mIU/L es indicación absoluta; si TSH 4.5-9.9 tratar si sintomático/anti-TPO(+)', ll: 'Sí: TSH ≥ 10 o Anti-TPO (+) con Síntomas', rl: 'No: TSH < 10 Asintomático y Anti-TPO (-)',
        left: { t: 'Iniciar Levotiroxina a Dosis Bajas (25-50 mcg/día)', s: 'Meta de TSH: 0.5 a 2.5 mIU/L · Control con TSH en 6 a 8 semanas', type: 'acc' },
        right: { t: 'Seguimiento Periódico Anual con TSH', s: 'Control anual con TSH y T4L · Iniciar si progresa a TSH ≥ 10 mIU/L', type: 'b' },
        ll: 'tratar subclínico', rl: 'control anual' },
      { t: 'Regla de Oro de Administración: Ayuno Estricto con Agua', s: 'Tomar 30-60 min antes del desayuno con agua pura · Separar de hierro, calcio y omeprazol por 4 horas', type: 'dec', al: 'absorción', from: 'left' },
    ]),
    contexto: 'El hipotiroidismo primario es una de las enfermedades endocrinas más prevalentes en Chile (afecta a cerca del 10% de la población adulta, especialmente mujeres) y cuenta con cobertura prioritaria en las Garantías Explícitas en Salud (GES N° 35). El EUNACOM examina con intensidad las indicaciones exactas de inicio de levotiroxina en hipotiroidismo subclínico, la titulación de dosis según edad y riesgo cardiovascular, las estrictas reglas de administración para no comprometer su absorción intestinal y la periodicidad del control bioquímico.',
    contentSections: [
      {
        subhead: '1. Etiología y Cuadro Clínico del Hipotiroidismo Primario',
        paragraphs: [
          'En Chile y países con adecuado aporte de yodo, la <strong>causa más frecuente de hipotiroidismo primario en el adulto es la Tiroiditis Crónica Autoinmune (Enfermedad de Hashimoto)</strong>, mediada por anticuerpos anti-peroxidasa tiroidea (Anti-TPO) y anti-tiroglobulina (Anti-Tg), los cuales producen infiltración linfocitaria progresiva y destrucción de los folículos tiroideos. Otras causas relevantes incluyen la ablación tiroidea previa (radioyodo I-131 o tiroidectomía) y fármacos (amiodarona, litio).',
          'El cuadro clínico se caracteriza por una desaceleración global de los procesos metabólicos: <strong>astenia marcada, fatigabilidad, intolerancia al frío, aumento de peso moderado (2–5 kg por retención hidrosalina en el mixedema, nunca obesidad mórbida aislada), piel seca y descamativa, caída de cabello quebradizo, constipación pertinaz, bradipsiquia, somnolencia, voz ronca y alteraciones menstruales (oligomenorrea o hipermenorrea)</strong>.',
          'Al examen físico destaca bradicardia sinusal, <strong>retraso característico en la fase de relajación de los reflejos osteotendinosos (especialmente el aquiliano)</strong>, facies abotagada con edema periorbitario duro que no deja fóvea (mixedema) y bocio difuso indoloro de consistencia firme o atrofia tiroidea.',
        ],
      },
      {
        subhead: '2. Alteraciones Bioquímicas Asociadas de Alto Rendimiento',
        paragraphs: [
          'En el hipotiroidismo primario no tratado es mandatorio reconocer las alteraciones secundarias que se corrigen con levotiroxina y no con fármacos específicos:',
          '• <strong>Dislipidemia Aterogénica:</strong> La reducción de los receptores hepáticos de LDL disminuye su aclaramiento, produciendo una <strong>marcada elevación del Colesterol Total y Colesterol LDL</strong> (frecuente > 200–250 mg/dL). <em>¡Regla EUNACOM!: No iniciar estatinas de entrada; al normalizar la TSH con levotiroxina el perfil lipídico suele normalizarse por completo</em>.<br/>' +
          '• <strong>Anemia:</strong> Se presenta en el 30–40% de los casos, habitualmente normocítica normocrómica por menor estímulo eritropoyético, pero puede ser microcítica (menorragias ferropénicas) o macrocítica megaloblástica por coexistencia autoinmune con <em>Anemia Perniciosa</em> (anticuerpos anti-célula parietal/factor intrínseco).<br/>' +
          '• <strong>Hiponatremia Hiposmolar Euvolémica:</strong> Producida por disminución del filtrado glomerular y elevación inapropiada de hormona antidiurética (ADH).<br/>' +
          '• <strong>Elevación de Creatina Kinasa (CK):</strong> Elevación de CK total por miopatía hipotiroidea proximal.',
        ],
      },
      {
        subhead: '3. Hipotiroidismo Subclínico: ¿A Quiénes se Debe Tratar con Levotiroxina?',
        paragraphs: [
          'El <strong>Hipotiroidismo Subclínico</strong> se define por <strong>TSH elevada con T4 Libre normal</strong>. No todos los pacientes requieren tratamiento, pero las guías clínicas GES y ATA establecen criterios categóricos de indicación:',
          '<strong>1) Indicación Absoluta Incondicional:</strong> Todo paciente con <strong>TSH sérica ≥ 10.0 mIU/L</strong> (incluso si está totalmente asintomático), debido al elevado riesgo demostrado de progresión a hipotiroidismo clínico y aumento de la morbimortalidad cardiovascular y disfunción ventricular izquierda.<br/>' +
          '<strong>2) Pacientes con TSH entre 4.5 y 9.9 mIU/L en Presencia de Factores Agravantes:</strong><br/>' +
          '&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Embarazo o mujeres planificando embarazo a corto plazo</strong> (meta estricta de TSH < 2.5 mIU/L).<br/>' +
          '&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Presencia de Anticuerpos Anti-TPO positivos</strong> a títulos elevados (predicen progresión de 5% anual).<br/>' +
          '&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Presencia de bocio evidente</strong> en la palpación o ecografía.<br/>' +
          '&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Presencia de síntomas compatibles con hipotiroidismo</strong> (astenia, constipación, ánimo depresivo) con ensayo terapéutico.<br/>' +
          '&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Dislipidemia severa o enfermedad cardiovascular aterosclerótica</strong> establecida en menores de 65 años.<br/>' +
          '<em>¡Atención en Adultos Mayores (> 70–80 años)!:</em> En ancianos asintomáticos con TSH entre 4.5 y 9.9 mIU/L, la evidencia actual demuestra que la TSH se eleva fisiológicamente y el tratamiento no aporta beneficio e incrementa el riesgo de arritmias (fibrilación auricular) y fracturas osteoporóticas; la conducta es la <strong>observación clínica anual</strong>.',
        ],
      },
      {
        subhead: '4. Principios de Dosificación y Titulación de Levotiroxina (T4)',
        paragraphs: [
          'La <strong>Levotiroxina sódica (L-T4)</strong> oral es la terapia sustitutiva universal de elección:',
          '• <strong>Adulto Joven Sano sin Cardiopatía:</strong> Dosis de sustitución completa desde el inicio: <strong>1.6 mcg/kg de peso ideal al día</strong> (habitualmente entre 75 y 125 mcg/día).<br/>' +
          '• <strong>Adulto Mayor (> 60–65 años) o Paciente con Cardiopatía Coronaria Conocida:</strong> Se debe iniciar con <strong>dosis bajas y titulación lenta ("start low, go slow")</strong>: <strong>25 a 50 mcg/día</strong> (o 12.5 mcg/d en coronarios graves), incrementando 12.5 a 25 mcg cada 6 a 8 semanas según control de TSH. Iniciar la dosis plena de golpe en un cardiópata puede desencadenar angina de pecho, infarto agudo de miocardio o fibrilación auricular paroxística.',
        ],
      },
      {
        subhead: '5. La Regla de Oro de la Administración y Factores de Malabsorción',
        paragraphs: [
          'La levotiroxina posee una ventana terapéutica estrecha y su absorción intestinal en el yeyuno/íleon se ve gravemente afectada por alimentos y fármacos:',
          '• <strong>Forma de Administración Mandatoria:</strong> Debe tomarse <strong>en ayunas estricta con un vaso completo de agua pura (sin gas), al menos 30 a 60 minutos antes del desayuno</strong> (o al acostarse, habiendo pasado al menos 3 a 4 horas desde la última comida).<br/>' +
          '• <strong>Interferencias Farmacológicas Severas:</strong> Los siguientes medicamentos quelan la levotiroxina o reducen su absorción y <em>deben separarse por un intervalo mínimo de 4 horas</em>: <strong>Sulfato ferroso, Carbonato de calcio, Hidróxido de aluminio/magnesio, Sucralfato, Colestiramina e Inhibidores de la Bomba de Protones (Omeprazol)</strong>.<br/>' +
          '• <strong>Monitoreo Bioquímico:</strong> El control de la terapia se realiza midiendo la <strong>TSH plasmática a las 6 a 8 semanas</strong> de iniciado el tratamiento o de cualquier modificación de dosis (tiempo requerido para que la TSH alcance un nuevo estado estacionario). La meta terapéutica estándar es alcanzar una TSH entre <strong>0.5 y 2.5 mIU/L</strong>.',
        ],
      },
    ],
    table: {
      title: 'Comparación Clínica y Diagnóstica: Hipotiroidismo Primario vs Subclínico vs Central',
      headers: ['Parámetro', 'Hipotiroidismo Primario Clínico', 'Hipotiroidismo Subclínico', 'Hipotiroidismo Central / Secundario'],
      rows: [
        ['Etiología Principal', 'Tiroiditis de Hashimoto (autoinmune, Anti-TPO)', 'Etapa temprana de Hashimoto o post-tiroiditis', 'Adenoma hipofisario, Sheehan, cirugía/RDT craneal'],
        ['Nivel de TSH', 'ELEVADA (> 4.5 a > 100 mIU/L)', 'ELEVADA (4.5 a 9.9 mIU/L)', 'Baja o "Normal" inapropiada (1.0-3.0 mIU/L)'],
        ['Nivel de T4 Libre', 'DISMINUIDA (< 0.8 ng/dL)', 'NORMAL (0.8 a 1.8 ng/dL)', 'DISMINUIDA (< 0.8 ng/dL)'],
        ['Clínica Cardinal', 'Astenia, intolerancia frío, voz ronca, mixedema', 'Asintomático o síntomas leves inespecíficos', 'Astenia + hipogonadismo, hipocortisolismo asociado'],
        ['Indicación de Tratamiento', 'UNIVERSAL en el 100% de los casos (GES)', 'Si TSH ≥ 10, Anti-TPO (+), síntomas o embarazo', 'Levotiroxina previa confirmación de eje suprarrenal'],
        ['Dosis Inicial Estándar', '1.6 mcg/kg/d (jóvenes) · 25-50 mcg (ancianos)', '25 a 50 mcg/día con ajuste según TSH', 'Según peso; monitorear con T4L (no con TSH)'],
      ],
    },
    severityTable: {
      title: 'Criterios de Indicación de Tratamiento en Hipotiroidismo Subclínico (TSH 4.5 a 9.9 mIU/L)',
      headers: ['Condición Clínica del Paciente', 'Nivel de TSH', 'Conducta Terapéutica Recomendada', 'Justificación Basada en Evidencia'],
      rows: [
        ['Cualquier paciente no anciano', 'TSH ≥ 10.0 mIU/L', 'TRATAR SIEMPRE con Levotiroxina', 'Alto riesgo de progresión y disfunción cardiovascular'],
        ['Embarazo o deseo de fertilidad', 'TSH > 2.5 mIU/L (o > corte)', 'TRATAR INMEDIATAMENTE', 'Prevenir aborto, preeclampsia y daño neurocognitivo fetal'],
        ['Presencia de Bocio o Anti-TPO (+)', 'TSH entre 4.5 y 9.9 mIU/L', 'TRATAR con Levotiroxina (25-50 mcg)', 'Tasa de progresión anual a falla clínica > 5%'],
        ['Síntomas sugerentes o Dislipidemia', 'TSH entre 4.5 y 9.9 mIU/L', 'Ensayo terapéutico por 3-6 meses', 'Evalúa mejoría sintomática y reducción de c-LDL'],
        ['Adulto Mayor > 70–80 años asintomático', 'TSH entre 4.5 y 9.9 mIU/L', 'OBSERVACIÓN y control anual (NO tratar)', 'No hay beneficio y aumenta fibrilación auricular y fracturas'],
      ],
    },
    treatmentTable: {
      title: 'Protocolo de Inicio y Titulación de Levotiroxina según Grupo de Pacientes',
      headers: ['Grupo de Pacientes', 'Dosis Inicial de Levotiroxina', 'Ajuste de Dosis', 'Meta de TSH en Control'],
      rows: [
        ['Adulto joven sin antecedentes cardíacos', '1.6 mcg/kg/día dosis plena (75–125 mcg/d)', 'Ajustes de 12.5 a 25 mcg según TSH c/6-8 sem', '0.5 a 2.5 mIU/L'],
        ['Adulto mayor (> 65 años) sin cardiopatía', '25 a 50 mcg/día en ayunas', 'Aumentar 12.5 a 25 mcg cada 6 a 8 semanas', '1.0 a 3.5 mIU/L (meta más laxa)'],
        ['Cardiopatía coronaria / Insuficiencia cardíaca', '12.5 a 25 mcg/día ("Start low, go slow")', 'Aumentar 12.5 mcg cada 6 a 8 semanas con ECG', '1.0 a 3.5 mIU/L (evitar taquicardia)'],
        ['Gestante con hipotiroidismo previo', 'Aumentar 20–30% la dosis al confirmar embarazo', 'Control de TSH cada 4 semanas hasta sem 20', '< 2.5 mIU/L en 1° trimestre; < 3.0 en 2° y 3°'],
      ],
    },
    vignette: 'Una mujer de 62 años con antecedentes de hipertensión arterial controlada consulta por astenia progresiva de 6 meses, constipación pertinaz y una ganancia de 4 kg de peso a pesar de haber reducido su ingesta. Al examen físico se observa piel pálida, seca y fría, frecuencia cardíaca de 54 lpm, PA 138/86 mmHg, reflejos osteotendinosos con relajación aquiliana prolongada y tiroides aumentado de tamaño en forma difusa, indoloro y de consistencia firme. Sus exámenes revelan: TSH de 42.5 mIU/L, T4 Libre de 0.41 ng/dL, Colesterol total 268 mg/dL y anticuerpos Anti-TPO fuertemente positivos a 650 UI/mL.',
    explicacion: 'La paciente presenta un hipotiroidismo primario clínico establecido (TSH > 10 con T4L francamente disminuida) de etiología autoinmune (Tiroiditis de Hashimoto confirmada por bocio firme y títulos elevados de Anti-TPO). La hipercolesterolemia es secundaria al hipotiroidismo. La conducta correcta y garantizada por el GES N° 35 es iniciar tratamiento con levotiroxina sódica oral en ayunas estricta (iniciando con 50 mcg/día por su edad y titulando a las 6-8 semanas según TSH), sin necesidad de iniciar estatinas en este momento.',
    keyPoints: [
      'La Tiroiditis Crónica Autoinmune de Hashimoto (Anti-TPO positivo) es la causa número uno de hipotiroidismo primario en el adulto.',
      'La lentitud en la fase de relajación del reflejo aquiliano es el signo clínico físico más específico del hipotiroidismo.',
      'El hipotiroidismo produce dislipidemia secundaria con elevación marcada de Colesterol Total y LDL; se normaliza al compensar la TSH sin estatinas.',
      'El hipotiroidismo subclínico con TSH ≥ 10.0 mIU/L se trata SIEMPRE con levotiroxina, independientemente de la presencia de síntomas.',
      'En hipotiroidismo subclínico con TSH entre 4.5 y 9.9 mIU/L, se trata si hay: embarazo, Anti-TPO positivo, bocio, síntomas o dislipidemia en jóvenes.',
      'En ancianos (> 70-80 años) con TSH < 10 mIU/L asintomáticos, la conducta es observación, evitando el sobretratamiento y la fibrilación auricular.',
      'La dosis de levotiroxina es 1.6 mcg/kg/d en jóvenes; en ancianos o cardiópatas se inicia a 25-50 mcg/d para prevenir eventos isquémicos.',
      'La levotiroxina debe tomarse en ayunas estricta con agua pura, 30 a 60 minutos antes del desayuno, separada por 4 horas de hierro, calcio y omeprazol.',
    ],
    questions: [
      {
        stem: 'Un paciente de 60 años es diagnosticado de hipotiroidismo primario por tiroiditis de Hashimoto, con TSH de 38 mIU/L y T4 libre de 0.4 ng/dL. Como antecedentes refiere hipertensión arterial e infarto agudo de miocardio hace 3 años, actualmente asintomático. ¿Cuál es la dosis inicial de levotiroxina más recomendada para este paciente?',
        opciones: [
          'A) 150 mcg al día',
          'B) 100 mcg al día',
          'C) 1.6 mcg/kg de peso al día de inmediato',
          'D) 25 a 50 mcg al día con titulación gradual según TSH',
          'E) 12.5 mcg una vez a la semana en días alternos'
        ],
        correcta: 'D',
        explicacion: 'En pacientes adultos mayores (> 60 años) o con antecedentes de cardiopatía coronaria (infarto agudo de miocardio previo), el inicio de la terapia sustitutiva con levotiroxina debe ser cauteloso ("start low, go slow"). Iniciar la dosis completa sustitutiva (1.6 mcg/kg/d) puede desencadenar un aumento brusco del consumo miocárdico de oxígeno, precipitando crisis de angina, infarto agudo o arritmias ventriculares graves. La conducta recomendada es iniciar con 25 a 50 mcg/día (o incluso 12.5-25 mcg en coronarios inestables) e incrementar progresivamente en 12.5-25 mcg cada 6 a 8 semanas según el nivel de TSH.',
        recTag: 'EUNACOM Diciembre 2016 (Q#45)'
      },
      {
        stem: 'Una mujer de 32 años, asintomática, que desea embarazarse en los próximos meses, se realiza exámenes de control de salud que muestran: TSH de 6.8 mIU/L y T4 libre de 1.1 ng/dL (rango normal 0.8 a 1.8 ng/dL). Sus anticuerpos anti-TPO resultan positivos en títulos elevados (480 UI/mL). ¿Cuál es la conducta más adecuada a seguir?',
        opciones: [
          'A) Tranquilizar a la paciente y citar a nuevo control de TSH en 1 año sin tratamiento',
          'B) Iniciar tratamiento con levotiroxina a dosis bajas (25 a 50 mcg/día) con meta de TSH menor a 2.5 mIU/L',
          'C) Iniciar tratamiento con propiltiouracilo para bloquear la autoinmunidad',
          'D) Indicar dieta rica en yodo y suplementos de selenio sin fármacos',
          'E) Solicitar una punción aspirativa con aguja fina de la glándula tiroides'
        ],
        correcta: 'B',
        explicacion: 'La paciente presenta un hipotiroidismo subclínico (TSH entre 4.5 y 9.9 con T4L normal) con dos factores de indicación formal indiscutida para iniciar levotiroxina: 1) Deseo inminente de embarazo (donde la meta preconcepcional y del primer trimestre es TSH < 2.5 mIU/L para optimizar la fertilidad y prevenir pérdidas reproductivas y daño en el neurodesarrollo fetal); y 2) Presencia de anticuerpos Anti-TPO positivos a títulos altos, lo que confiere un alto riesgo de progresión rápida a falla clínica durante la gestación. La indicación es iniciar levotiroxina 25 a 50 mcg/día.',
        recTag: 'EUNACOM Julio 2018 (Q#22)'
      },
      {
        stem: '¿A las cuántas semanas de iniciado el tratamiento con levotiroxina o de un ajuste de dosis se debe solicitar el control de TSH plasmática para evaluar la eficacia y adecuar la dosificación?',
        opciones: [
          'A) A las 24 a 48 horas',
          'B) A las 2 semanas',
          'C) A las 6 a 8 semanas',
          'D) A los 6 meses',
          'E) Al año calendario'
        ],
        correcta: 'C',
        explicacion: 'La tiroxina (T4) tiene una vida media plasmática prolongada de aproximadamente 7 días. Por consiguiente, se requieren al menos 5 a 6 vidas medias (unas 4 a 6 semanas) para alcanzar un nuevo estado de equilibrio plasmático estacionario y un tiempo adicional para que el eje hipofisario reajuste plenamente la secreción de TSH. Las guías clínicas universales establecen que el control de TSH debe solicitarse a las 6 a 8 semanas tras el inicio o cambio de dosis de levotiroxina.',
        recTag: 'EUNACOM Diciembre 2020 (Q#31)'
      },
      {
        stem: 'Un paciente de 52 años en tratamiento con levotiroxina 100 mcg al día por hipotiroidismo primario acude a control con TSH de 12.8 mIU/L. Refiere que toma rigurosamente su tableta todas las mañanas junto con el desayuno, acompañada de una taza de café con leche y una pastilla de carbonato de calcio con vitamina D y sulfato ferroso que le prescribieron para osteoporosis y anemia. ¿Cuál es la causa más probable de la falta de control bioquímico?',
        opciones: [
          'A) Desarrollo de anticuerpos bloqueadores del receptor de TSH',
          'B) Interferencia y quelación en la absorción intestinal de levotiroxina por los alimentos, el café, el calcio y el hierro',
          'C) Resistencia periférica severa a hormonas tiroideas de origen genético',
          'D) Depuración renal acelerada de la hormona tiroidea por el calcio',
          'E) Conversión periférica masiva de T4 a T3 tóxica'
        ],
        correcta: 'B',
        explicacion: 'La levotiroxina requiere un pH gástrico ácido y un medio libre de alimentos para su adecuada absorción en el intestino delgado. El consumo concomitante con alimentos, café con leche, suplementos de calcio y sales de hierro quelan el fármaco en el lumen intestinal y disminuyen su biodisponibilidad hasta en un 50–70%, provocando una aparente resistencia al tratamiento. La indicación correcta es instruir la ingesta de levotiroxina en ayuno estricto con agua pura al menos 30 a 60 minutos antes del desayuno, y distanciar el calcio y el hierro por al menos 4 horas.',
        recTag: 'EUNACOM Julio 2023 (Q#48)'
      }
    ]
  },
  {
    id: 'endo-03',
    classId: 'endo-03',
    tier: 3,
    blockNum: 1,
    blockName: 'Patología Tiroidea Funcional: Hipotiroidismo y Tiroiditis',
    topicLabel: '1.3',
    title: 'Coma Mixedematoso y Urgencias Hipotiroideas',
    perfilCode: '1.05.2.003',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Patología de Urgencia Vital / Cuidados Intensivos (Red de Alta Complejidad)',
    reconstrucciones: 'EUNACOM Julio 2017 (Q#30) · EUNACOM Diciembre 2019 (Q#15) · EUNACOM Diciembre 2021 (Q#40) · EUNACOM Julio 2023 (Q#22)',
    frecuencia: 'Alta · Reconocimiento clínico (hipotermia + bradicardia + sopor), regla de hidrocortisona EV previa y recalentamiento pasivo',
    svg: null, algoTitle: 'Algoritmo de Manejo de Emergencia y Rescate en Coma Mixedematoso en UPC',
    diagram: flow('Protocolo de Rescate y Soporte Intensivo en Coma Mixedematoso', [
      { t: 'Sospecha Clínica de Coma Mixedematoso en Urgencias / UPC', s: 'Tríada Cardinal: Hipotermia (< 35 °C) + Hiponatremia + Compromiso del sensorio (sopor/coma) en hipotiroideo' },
      { k: 'split', q: '¿Paso 1 Inmediato: Asegurar Hidrocortisona EV antes de Hormona Tiroidea?', s: '¡REGLA VITAL!: La levotiroxina acelera el aclaramiento hepático de cortisol y desata crisis suprarrenal letal', ll: 'HIDROCORTISONA EV INMEDIATA', rl: 'Levotiroxina en Bolo EV / SNG',
        left: { t: 'Hidrocortisona 100 mg EV en Bolo + 100 mg c/8h', s: 'Administrar SIEMPRE ANTES o junto con la levotiroxina · Previene colapso cardiovascular agudo', type: 'crit' },
        right: { t: 'Levotiroxina 300 – 500 mcg EV / SNG de Carga', s: 'Seguir con 50 a 100 mcg/día de mantención (+ Liotironina T3 si disponible)', type: 'acc' },
        ll: 'corticoide primero', rl: 'carga tiroidea' },
      { t: 'Medidas de Soporte Crítico Indispensables', s: 'Recalentamiento PASIVO (mantas térmicas; ¡prohibido recalentamiento activo rápido!) + Suero Salino Hipertónico 3% si Na < 120', type: 'dec', al: 'soporte UPC', from: 'left' },
    ]),
    contexto: 'El coma mixedematoso es la máxima emergencia médica derivada del hipotiroidismo, caracterizada por una mortalidad histórica del 30 al 50%. En el EUNACOM se evalúa de forma reiterada la capacidad de sospecharlo ante un paciente anciano en invierno con hipotermia profunda refractaria, bradicardia, hiponatremia y sopor, y aplicar de inmediato la regla de oro que salva la vida: administrar hidrocortisona endovenosa antes o junto con la levotiroxina para evitar una crisis adisoniana mortal, acompañada de recalentamiento pasivo lento.',
    contentSections: [
      {
        subhead: '1. Fisiopatología y Factores Gatillantes de la Descompensación',
        paragraphs: [
          'El <strong>Coma Mixedematoso</strong> es un estado de insuficiencia metabólica celular generalizada extremo, resultante de un hipotiroidismo severo de larga data no diagnosticado o por abandono del tratamiento sustitutivo. La carencia crítica de hormonas tiroideas produce colapso de la termogénesis, hipoventilación alveolar con hipercapnia e hipoxia, disminución de la contractilidad miocárdica con bajo gasto cardíaco y reducción de la filtración glomerular con retención hídrica severa.',
          'Rara vez ocurre de forma espontánea; en más del 90% de los casos existe un <strong>factor precipitante identificable: exposición a frío ambiental intenso (típico en meses de invierno), infecciones bacterianas agudas (neumonía, ITU, sepsis), uso de depresores del sistema nervioso central (sedantes, opioides, anestésicos generales), accidente cerebrovascular o infarto agudo de miocardio</strong>.',
        ],
      },
      {
        subhead: '2. Cuadro Clínico y Tríada Cardinal de Sospecha',
        paragraphs: [
          'El paciente típico es una mujer de edad avanzada que ingresa en letargia progresiva, sopor o coma profundo. La tríada cardinal de sospecha diagnóstica está compuesta por:',
          '1) <strong>Hipotermia Severa:</strong> Temperatura corporal central < 35.0 °C (frecuente entre 30.0 y 34.0 °C). Los termómetros clínicos estándar pueden no registrarla; se requiere termómetro rectal para hipotermia profunda.<br/>' +
          '2) <strong>Alteración del Estado Mental:</strong> Somnolencia extrema, estupor, confusión, psicosis ("locura mixedematosa") o coma franco.<br/>' +
          '3) <strong>Compromiso Cardiovascular y Respiratorio:</strong> <strong>Bradicardia sinusal extrema (< 50 lpm), hipotensión arterial persistente o shock refractario</strong> a volumen por depresión miocárdica y derrame pericárdico asociado, acompañada de hipoventilación alveolar, hipercapnia marcada y bradipnea que exige intubación orotraqueal inmediata.',
        ],
      },
      {
        subhead: '3. Alteraciones de Laboratorio Típicas',
        paragraphs: [
          'El perfil hormonal confirma <strong>TSH marcadamente elevada (> 50–100 mIU/L) con T4 Libre indetectable o muy disminuida</strong> (excepto en hipotiroidismo central donde la TSH es baja).',
          'Los exámenes de urgencia evidencian: <strong>Hiponatremia hiposmolar severa (Na < 120–125 mEq/L)</strong> por incapacidad para excretar agua libre e incremento de ADH, <strong>Hipoglicemia</strong> (que debe alertar sobre coexistencia de insuficiencia suprarrenal o hipopituitarismo), anemia, elevación extrema de CK total y gases arteriales con acidosis respiratoria hipercápnica e hipoxemia.',
        ],
      },
      {
        subhead: '4. La Regla de Oro Indiscutida: Hidrocortisona EV ANTES de la Levotiroxina',
        paragraphs: [
          '<strong>Regla de Salvamento Vital EUNACOM:</strong> En todo paciente con sospecha de coma mixedematoso, <strong>SE DEBE ADMINISTRAR HIDROCORTISONA ENDOVENOSA (100 mg en bolo seguido de 100 mg cada 8 horas) ANTES O SIMULTÁNEAMENTE CON LA HORMONA TIROIDEA</strong>.',
          '<em>Fundamento Fisiopatológico:</em> Los pacientes con hipotiroidismo de larga data tienen frecuentemente una reserva suprarrenal limítrofe o insuficiente por coexistencia de autoinmunidad poliglandular (Síndrome de Schmidt) o hipopituitarismo. Si se administra levotiroxina sola, la hormona tiroidea acelera súbitamente la tasa metabólica hepática y la degradación periférica del cortisol circulante, <strong>desencadenando una CRISIS ADISONIANA AGUDA FULMINANTE con colapso vascular y paro cardíaco irreversible</strong>. No se debe esperar el resultado del cortisol sérico para iniciar la hidrocortisona.',
        ],
      },
      {
        subhead: '5. Tratamiento Específico con Hormona Tiroidea y Medidas de Soporte Crítico',
        paragraphs: [
          '• <strong>Terapia Hormonal Tiroidea:</strong> Ante la absorción digestiva errática por íleo mixedematoso, la vía de elección es <strong>Levotiroxina endovenosa: bolo de carga de 300 a 500 mcg EV en 30 minutos</strong> (o por sonda nasogástrica si no hay formulación EV), seguido de 50 a 100 mcg diarios de mantención. Si se dispone, se puede asociar Liotironina (T3) en dosis bajas.<br/>' +
          '• <strong>Recalentamiento Corporal:</strong> Debe ser <strong>ESTRICTAMENTE PASIVO</strong> (uso de mantas convencionales en habitación calefaccionada). <em>¡Está terminantemente prohibido el recalentamiento activo externo agresivo con mantas térmicas eléctricas o baños calientes!</em> El calentamiento rápido produce vasodilatación periférica masiva súbita que colapsa el retorno venoso, precipitando shock distributivo letal e infarto de miocardio.<br/>' +
          '• <strong>Manejo de Fluidos y Sodio:</strong> Restricción moderada de volumen con fluidos glucosados isotónicos. Si la hiponatremia es sintomática o severa (< 120 mEq/L con convulsiones), administrar solución salina hipertónica al 3% en infusión lenta y controlada.',
        ],
      },
    ],
    table: {
      title: 'Manifestaciones Clínicas y Alteraciones de Laboratorio en Coma Mixedematoso',
      headers: ['Sistema Orgánico', 'Manifestación Clínica Cardinal', 'Hallazgo de Laboratorio Clave', 'Riesgo Vital Inmediato'],
      rows: [
        ['Termorregulación', 'Hipotermia severa (< 35.0 °C, hasta 30 °C)', 'Carencia de termogénesis tiroidea', 'Fibrilación ventricular y parada cardíaca'],
        ['Neurológico', 'Sopor, estupor, psicosis o coma profundo', 'Hiponatremia hiposmolar severa (Na < 120)', 'Edema cerebral y enclavamiento'],
        ['Cardiovascular', 'Bradicardia extrema, shock refractario a volumen', 'Derrame pericárdico, bajo voltaje en ECG', 'Colapso hemodinámico y shock cardiogénico'],
        ['Respiratorio', 'Hipoventilación, bradipnea, respiración superficial', 'Acidosis respiratoria grave (pH < 7.20, PaCO2 > 60)', 'Paro respiratorio por falla del centro ventilatorio'],
        ['Endocrino/Metabólico', 'Facies mixedematosa, piel apergaminada', 'TSH > 50-100 mIU/L, T4L indetectable, hipoglicemia', 'Crisis suprarrenal aguda concomitante'],
      ],
    },
    severityTable: {
      title: 'Parámetros del Score Diagnóstico de Coma Mixedematoso (Popoveniuc et al.)',
      headers: ['Categoría de Evaluación', 'Criterios Clínicos / Puntaje Mayor', 'Umbral de Alerta', 'Conducta según Puntaje'],
      rows: [
        ['Temperatura Corporal Central', '< 32.0 °C (30 pts) · 32.0 - 35.0 °C (15 pts)', '< 35.0 °C', 'Puntaje ≥ 60 puntos: Diagnóstico casi certero'],
        ['Efectos en Sistema Nervioso', 'Coma (30 pts) · Estupor (20 pts) · Letargia (15 pts)', 'Compromiso sensorio', 'Iniciar inmediatamente hidrocortisona EV'],
        ['Cardiovascular / Disfunción', 'Bradicardia < 50 (15 pts) · Hipotensión (20 pts)', 'Shock refractario', 'Traslado urgente a Unidad de Paciente Crítico'],
        ['Factor Desencadenante', 'Infección aguda, frío extremo, opioides (10 pts)', 'Infección bacteriana', 'Hemocultivos y antibióticos empíricos precoces'],
      ],
    },
    treatmentTable: {
      title: 'Protocolo de Rescate Terapéutico en Unidad de Cuidados Intensivos',
      headers: ['Intervención Médica', 'Fármaco / Medida Terapéutica', 'Dosis y Vía de Administración', 'Fundamento Fisiopatológico'],
      rows: [
        ['1° Prioridad: Corticoide Suprarrenal', 'Hidrocortisona sódica', '100 mg EV en bolo, luego 100 mg c/8h EV', 'Prevenir crisis adisoniana fatal por aceleración de T4'],
        ['2° Prioridad: Hormona Tiroidea', 'Levotiroxina sódica (L-T4)', '300 a 500 mcg EV en bolo de carga, luego 50-100 mcg/d', 'Restaurar reserva hormonal para reactivar metabolismo'],
        ['Soporte de Temperatura', 'Recalentamiento PASIVO', 'Mantas térmicas convencionales; ambiente cálido', 'Evitar vasodilatación periférica rápida y shock'],
        ['Soporte Ventilatorio', 'Intubación orotraqueal + VMI', 'Ventilación mecánica protectora en UPC', 'Revertir hipoventilación hipercápnica y acidosis'],
        ['Soporte Hidroelectrolítico', 'Suero Glucosado 5% o Salino 3%', 'Restricción hídrica; NaCl 3% si Na < 120 mEq/L', 'Corregir hipoglicemia e hiponatremia dilucional severa'],
      ],
    },
    vignette: 'Una mujer de 78 años con antecedente de hipotiroidismo en abandono de tratamiento es encontrada por vecinos en su hogar durante una ola de frío invernal en estado de inconciencia. Al llegar al servicio de urgencias se constata paciente en coma, sin respuesta a estímulos dolorosos, con piel extremadamente fría, seca y engrosada, temperatura rectal de 31.8 °C, frecuencia cardíaca de 42 lpm, presión arterial de 80/50 mmHg y bradipnea de 8 rpm. Sus exámenes de urgencia revelan: glicemia 55 mg/dL, sodio 118 mEq/L, potasio 4.9 mEq/L, gases arteriales con acidosis respiratoria hipercápnica y TSH plasmática mayor a 100 mIU/L con T4 libre indetectable.',
    explicacion: 'El cuadro clínico es diagnóstico de Coma Mixedematoso desencadenado por hipotermia ambiental extrema en una paciente con hipotiroidismo severo no tratado. Presenta la tríada patognomónica de hipotermia severa (< 32 °C), compromiso neurológico profundo e inestabilidad hemodinámica y respiratoria con hiponatremia. La conducta terapéutica inmediata que salva la vida es intubación orotraqueal, administración inmediata de Hidrocortisona 100 mg EV antes o junto con la dosis de carga de Levotiroxina endovenosa (o por sonda), y recalentamiento pasivo con mantas.',
    keyPoints: [
      'El coma mixedematoso es una urgencia vital con 30-50% de mortalidad; ocurre típicamente en ancianas expuestas al frío o sepsis.',
      'La tríada clásica es: Hipotermia profunda (< 35 °C) + Hiponatremia dilucional + Sopor/Coma con bradicardia e hipoventilación.',
      '¡REGLA ABSOLUTA DE ORO!: Administrar SIEMPRE Hidrocortisona EV (100 mg) ANTES o junto con la levotiroxina para evitar crisis suprarrenal fatal.',
      'La levotiroxina acelera la degradación metabólica hepática del cortisol; si no se da corticoide previo, el paciente fallece por shock suprarrenal.',
      'La dosis de carga de levotiroxina es de 300 a 500 mcg por vía endovenosa (o sonda nasogástrica), seguida de 50-100 mcg diarios.',
      'El recalentamiento corporal debe ser estrictamente PASIVO con mantas convencionales; el recalentamiento activo rápido induce shock vasodilatador mortal.',
      'En presencia de hiponatremia severa sintomática (< 120 mEq/L) se debe corregir con solución salina hipertónica al 3% en infusión controlada.',
      'Siempre se deben tomar hemocultivos e iniciar cobertura antibiótica empírica de amplio espectro, ya que la infección es el desencadenante #1.',
    ],
    questions: [
      {
        stem: 'Una paciente de 76 años es llevada a la urgencia en estado de sopor profundo durante el invierno. Al examen físico destaca temperatura axilar de 32.5 °C, frecuencia cardíaca de 44 latidos por minuto, presión arterial de 82/50 mmHg y reflejos osteotendinosos abolidos. En sus exámenes destaca sodio plasmático de 121 mEq/L, glicemia de 62 mg/dL y una TSH de 88 mIU/L con T4 libre menor a 0.2 ng/dL. Además de intubación orotraqueal y soporte hemodinámico, ¿cuál es la medida farmacológica inmediata más importante?',
        opciones: [
          'A) Administrar 500 mcg de levotiroxina endovenosa en bolo exclusivo sin corticoides',
          'B) Administrar hidrocortisona endovenosa en dosis de estrés antes o simultáneamente con la levotiroxina',
          'C) Iniciar infusión de bicarbonato de sodio y realizar recalentamiento corporal activo en tina caliente',
          'D) Administrar metimazol endovenoso para modular la respuesta autoinmune',
          'E) Indicar hemodiálisis de urgencia para corregir la hiponatremia'
        ],
        correcta: 'B',
        explicacion: 'En el tratamiento del coma mixedematoso es una regla de seguridad biológica primordial administrar hidrocortisona endovenosa (100 mg en bolo seguido de 100 mg cada 8 horas) antes o junto con la administración de levotiroxina. La administración aislada de hormona tiroidea incrementa súbitamente el aclaramiento metabólico hepático del cortisol circulante, lo que en pacientes con reserva adrenal agotada desencadenará una crisis suprarrenal aguda fulminante con shock irreversible y muerte.',
        recTag: 'EUNACOM Julio 2017 (Q#30)'
      },
      {
        stem: '¿Cuál es el método de recalentamiento corporal indicado y seguro en un paciente cursando un coma mixedematoso con temperatura corporal central de 32 °C?',
        opciones: [
          'A) Inmersión inmediata del paciente en baño de agua caliente a 42 °C',
          'B) Uso de lámparas infrarrojas y calentadores radiantes sobre la piel desnuda',
          'C) Recalentamiento pasivo con mantas convencionales en un ambiente térmico templado',
          'D) Infusión de suero fisiológico calentado a 50 °C por vía venosa central masiva',
          'E) No se debe recalentar al paciente hasta que la TSH descienda a menos de 10 mIU/L'
        ],
        correcta: 'C',
        explicacion: 'En el coma mixedematoso el recalentamiento debe ser estrictamente pasivo mediante el uso de frazadas o mantas convencionales en una sala climatizada. El recalentamiento activo externo rápido (como baños calientes o mantas térmicas potentes) está formalmente contraindicado porque provoca una vasodilatación periférica brusca e incontrolable que secuestra el volumen sanguíneo en el lecho cutáneo, precipitando un colapso cardiovascular profundo, shock distributivo y muerte por isquemia coronaria.',
        recTag: 'EUNACOM Diciembre 2019 (Q#15)'
      },
      {
        stem: '¿Cuál de las siguientes alteraciones electrolíticas y metabólicas es característica y forma parte fundamental del síndrome de coma mixedematoso en adultos mayores?',
        opciones: [
          'A) Hipernatremia hiperosmolar severa',
          'B) Hiponatremia hiposmolar dilucional asociada a hipoglicemia',
          'C) Hipercalcemia maligna refractaria',
          'D) Hipokalemia severa con alcalosis metabólica',
          'E) Cetoacidosis con elevación del Anion Gap'
        ],
        correcta: 'B',
        explicacion: 'El hipotiroidismo severo reduce la tasa de filtración glomerular y la entrega de agua al túbulo distal, estimulando al mismo tiempo la secreción no osmótica de vasopresina (ADH). Esto conduce a una retención severa de agua libre que se traduce clínicamente en una hiponatremia dilucional significativa (frecuentemente < 125 mEq/L). Además, la menor gluconeogénesis y la probable coexistencia de insuficiencia adrenal condicionan una tendencia marcada a la hipoglicemia.',
        recTag: 'EUNACOM Diciembre 2021 (Q#40)'
      },
      {
        stem: 'Un paciente de 72 años con coma mixedematoso confirmado se encuentra intubado en la UCI recibiendo hidrocortisona EV y levotiroxina. Al monitor se observa PA 78/48 mmHg y bradicardia de 46 lpm refractaria a la administración de 2.000 ml de cristaloides. La ecocardiografía muestra derrame pericárdico moderado sin taponamiento y fracción de eyección de 35%. ¿A qué mecanismo fisiopatológico principal se atribuye la refractariedad del shock?',
        opciones: [
          'A) Vasoplejía séptica pura por toxina estreptocócica',
          'B) Depresión miocárdica severa y cronotropismo negativo inducidos por déficit crítico de hormonas tiroideas a nivel celular',
          'C) Tromboembolismo pulmonar masivo bilateral',
          'D) Hiperaldosteronismo secundario con escape de sodio',
          'E) Rotura de cuerda tendinosa mitral'
        ],
        correcta: 'B',
        explicacion: 'Las hormonas tiroideas modulan directamente la expresión de las cadenas pesadas de miosina (alfa-MHC) y la recaptación de calcio en el retículo sarcoplásmico por la bomba SERCA2a en los miocitos cardíacos. Su carencia crítica en el coma mixedematoso produce una severa disfunción inotrópica y cronotrópica negativa con bajo gasto cardíaco refractario al aporte de volumen, requiriendo el inicio de soporte inotrópico y vasopresor mientras la levotiroxina ejerce su efecto genómico.',
        recTag: 'EUNACOM Julio 2023 (Q#22)'
      }
    ]
  },
  {
    id: 'endo-04',
    classId: 'endo-04',
    tier: 2,
    blockNum: 1,
    blockName: 'Patología Tiroidea Funcional: Hipotiroidismo y Tiroiditis',
    topicLabel: '1.4',
    title: 'Hipotiroidismo en Situaciones Especiales: Embarazo y Tamizaje Neonatal Congénito',
    perfilCode: '1.05.1.005, 4.01.1.013',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES): Hipotiroidismo Congénito (Tamizaje Universal Neonatal)',
    reconstrucciones: 'EUNACOM Diciembre 2018 (Q#33) · EUNACOM Diciembre 2022 (Q#27)',
    frecuencia: 'Alta · Metas de TSH por trimestre gestacional, tamizaje neonatal universal a las 40-48h y prevención de cretinismo',
    svg: null, algoTitle: 'Algoritmo de Hipotiroidismo Gestacional y Tamizaje Neonatal Universal',
    diagram: flow('Protocolo de Manejo en Embarazo y Tamizaje Neonatal en Chile', [
      { t: 'Evaluación de Tiroides en Grupos Críticos: Gestantes y Recién Nacidos', s: 'La hormona tiroidea es INDISPENSABLE para el desarrollo y maduración cerebral neurocognitiva' },
      { k: 'split', q: '¿Escenario Clínico: Gestante vs Recién Nacido?', s: 'Define la prueba de laboratorio y el umbral de intervención terapéutica', ll: 'Embarazo (Diagnóstico o DM previa)', rl: 'Recién Nacido (Tamizaje Neonatal PNI/GES)',
        left: { t: 'Metas Estrictas de TSH Gestacional', s: '1° Trimestre: TSH < 2.5 mIU/L · 2° y 3° Trimestre: < 3.0 mIU/L · Subir dosis de levotiroxina 25-30% al confirmar', type: 'acc' },
        right: { t: 'Tamizaje Neonatal Universal con TSH en Talón', s: 'Toma a las 40-48h de vida en papel filtro · Si TSH > 15-20 mIU/L -> Confirmar e iniciar antes de 15 días', type: 'crit' },
        ll: 'metas embarazo', rl: 'tamizaje talón' },
      { t: 'Prevención de Cretinismo y Retraso Mental Irreversible', s: 'Iniciar Levotiroxina 10 a 15 mcg/kg/día en el neonato antes de las 2 semanas de vida evita secuelas cognitivas', type: 'dec', al: 'neurodesarrollo', from: 'right' },
    ]),
    contexto: 'El hipotiroidismo adquiere una relevancia crítica en la mujer embarazada y en el recién nacido, siendo evaluado con gran frecuencia en el EUNACOM. Durante el primer trimestre el feto depende exclusivamente de la T4 materna que atraviesa la placenta para el desarrollo cerebral; el déficit tiroideo materno incrementa el riesgo de aborto espontáneo, preeclampsia y menor coeficiente intelectual del hijo. En el recién nacido, el Hipotiroidismo Congénito es la principal causa prevenible de retraso mental (cretinismo), contando con tamizaje universal garantizado por el Estado chileno a través del examen de TSH en papel filtro de talón.',
    contentSections: [
      {
        subhead: '1. Fisiología Tiroidea Materna y Metas de TSH en el Embarazo',
        paragraphs: [
          'Durante la gestación, la tiroides materna experimenta una sobrecarga fisiológica: la gonadotropina coriónica humana (hCG) comparte la subunidad beta con la TSH y ejerce un efecto estimulador débil sobre el receptor de TSH, mientras que los estrógenos elevan al doble la globulina fijadora de tiroxina (TBG) hepática y la desyodasa placentaria tipo 3 degrada T4 a T3 reversa.',
          'Por esta razón, <strong>los rangos de referencia normales de TSH en no embarazadas NO aplican durante la gestación</strong>. Según la Guía Perinatal del MINSAL y la Asociación Americana de Tiroides (ATA), las metas terapéuticas de TSH en el embarazo son:',
          '• <strong>Primer Trimestre:</strong> <strong>TSH < 2.5 mIU/L</strong> (o según corte local, habitualmente 0.1 a 2.5 mIU/L).<br/>' +
          '• <strong>Segundo y Tercer Trimestre:</strong> <strong>TSH < 3.0 mIU/L</strong>.<br/>' +
          '<strong>Regla de Oro en Hipotiroideas Conocidas:</strong> Toda mujer en tratamiento con levotiroxina debe <strong>incrementar su dosis habitual en un 20% a 30% (equivalente a tomar 2 tabletas adicionales a la semana) de forma inmediata al confirmar el atraso menstrual o test de embarazo positivo</strong>, sin esperar el control médico, para suplir la demanda fetal temprana.',
        ],
      },
      {
        subhead: '2. Diagnóstico y Tratamiento del Hipotiroidismo Gestacional',
        paragraphs: [
          'Se diagnostica <strong>Hipotiroidismo Clínico Gestacional</strong> si la TSH es > 2.5 mIU/L en 1° trimestre con T4L baja, o TSH ≥ 10 mIU/L independiente de la T4L. Se diagnostica <strong>Hipotiroidismo Subclínico Gestacional</strong> si la TSH se encuentra entre 2.5 y 10 mIU/L con T4L normal.',
          'En embarazadas, <strong>TODO hipotiroidismo clínico o subclínico con TSH > 2.5 mIU/L (especialmente si tiene anticuerpos Anti-TPO positivos) DEBE SER TRATADO CON LEVOTIROXINA</strong>. El monitoreo se realiza con controles de TSH cada 4 semanas durante la primera mitad del embarazo y al menos una vez entre las semanas 26 y 32.',
        ],
      },
      {
        subhead: '3. Hipotiroidismo Congénito y el Programa Nacional de Tamizaje Neonatal GES',
        paragraphs: [
          'El <strong>Hipotiroidismo Congénito</strong> tiene una incidencia en Chile de 1 en cada 2.500 a 3.000 recién nacidos vivos. La causa más frecuente en más del 85% de los casos es la <strong>Disgenesia Tiroidea (ectopia tiroidea en 50-60%, agenesia/atireosis en 20-30% o hipoplasia)</strong>, mientras que el 10–15% restante corresponde a dishormonogénesis.',
          'Dado que al nacer más del 95% de los niños son <em>clínicamente asintomáticos</em> gracias al paso transplacentario de T4 materna, los síntomas clásicos (ictericia neonatal prolongada > 2 semanas, llanto ronco, macroglosia, hernia umbilical, fontanela posterior amplia > 0.5 cm, piel moteada, hipotonía y letargia) aparecen tardíamente cuando el daño cerebral ya se ha consumado.',
          '<strong>Protocolo Nacional de Detección (Garantía GES):</strong> Se realiza tamizaje universal mediante <strong>punción del talón y recolección de sangre capilar en papel filtro (Test de Guthrie modificado) entre las 40 y 48 horas de vida</strong> (para evitar el pico fisiológico neonatal de TSH que ocurre en las primeras 24h). Si la TSH de talón es > 15–20 mIU/L, se confirma con TSH y T4L en sangre venosa de inmediato y se inicia <strong>Levotiroxina a dosis de 10 a 15 mcg/kg/día por vía oral antes de los 15 días de vida</strong>, lo que garantiza un coeficiente intelectual y neurodesarrollo completamente normal.',
        ],
      },
    ],
    table: {
      title: 'Comparación entre Hipotiroidismo Gestacional e Hipotiroidismo Congénito',
      headers: ['Aspecto Clínico', 'Hipotiroidismo en el Embarazo', 'Hipotiroidismo Congénito Neonatal'],
      rows: [
        ['Población Objetivo', 'Mujer gestante (tamizaje en primer control prenatal)', 'Todo recién nacido vivo en Chile (Tamizaje Universal GES)'],
        ['Método Diagnóstico', 'TSH y T4 Libre plasmáticas venosas en sangre materna', 'Medición de TSH en sangre de talón en papel filtro (40-48h vida)'],
        ['Umbral de Intervención', 'TSH > 2.5 mIU/L (1° trim) o > 3.0 mIU/L (2°-3° trim)', 'TSH de talón > 15 a 20 mIU/L (confirmación venosa urgente)'],
        ['Causa más Frecuente', 'Tiroiditis autoinmune crónica (Hashimoto)', 'Disgenesia tiroidea (ectopia tiroidea lingual / sublingual en 60%)'],
        ['Riesgo del No Tratamiento', 'Aborto espontáneo, preeclampsia, bajo peso, déficit cognitivo', 'Cretinismo, retraso mental severo irreversible, enanismo'],
        ['Tratamiento de Elección', 'Levotiroxina oral en ayunas (subir dosis 25-30% precoz)', 'Levotiroxina 10 a 15 mcg/kg/día VO iniciada ANTES de 15 días de vida'],
      ],
    },
    vignette: 'Una primigesta de 28 años, con un embarazo de 8 semanas confirmado por ecografía, acude a su primer control prenatal en el CESFAM. Dentro de los exámenes de ingreso prenatal, su TSH plasmática resulta en 5.2 mIU/L con T4 libre de 1.1 ng/dL (normal). Se encuentra completamente asintomática, con PA 115/70 mmHg y examen segmentario normal.',
    explicacion: 'En el primer trimestre del embarazo, la meta estricta de TSH es inferior a 2.5 mIU/L. Un valor de 5.2 mIU/L con T4L normal configura un hipotiroidismo subclínico gestacional. Dado que el cerebro fetal depende absolutamente del aporte tiroideo transplacentario durante las primeras 12 semanas para la migración neuronal, la conducta obligatoria e inmediata es iniciar tratamiento con levotiroxina sódica a dosis de 50 mcg/día y citar a control con TSH en 4 semanas para asegurar niveles < 2.5 mIU/L.',
    keyPoints: [
      'En el embarazo la meta de TSH es más estricta: < 2.5 mIU/L en el 1° trimestre y < 3.0 mIU/L en el 2° y 3° trimestre.',
      'Toda mujer con hipotiroidismo previo debe aumentar su dosis de levotiroxina en un 20-30% apenas confirme el atraso menstrual.',
      'En la gestante se debe tratar todo hipotiroidismo con TSH > 2.5 mIU/L para prevenir pérdidas fetales y retraso psicomotor.',
      'El tamizaje neonatal universal de hipotiroidismo congénito se realiza por punción de talón en papel filtro entre las 40 y 48 horas de vida.',
      'La causa más frecuente de hipotiroidismo congénito es la Disgenesia Tiroidea (ectopia tiroidea y agenesia en > 85%).',
      'El tratamiento con levotiroxina (10-15 mcg/kg/d) debe iniciarse ANTES de los 15 días de vida para prevenir el cretinismo y retraso mental.',
    ],
    questions: [
      {
        stem: 'Una mujer de 29 años, con diagnóstico de hipotiroidismo primario en tratamiento estable con levotiroxina 75 mcg al día y TSH reciente de 1.8 mIU/L, acude a la consulta médica confirmando que tiene 5 semanas de amenorrea y un test de embarazo en orina positivo. ¿Cuál es la indicación médica inmediata más adecuada respecto a su terapia hormonal?',
        opciones: [
          'A) Suspender la levotiroxina durante el primer trimestre por riesgo teratogénico fetal',
          'B) Mantener la dosis de 75 mcg/día sin cambios hasta el parto dado que la última TSH estaba normal',
          'C) Incrementar de inmediato la dosis de levotiroxina en un 25 a 30% (por ejemplo, agregando dos comprimidos semanales) y controlar TSH en 4 semanas',
          'D) Cambiar la levotiroxina por propiltiouracilo durante el primer trimestre',
          'E) Reducir la dosis a la mitad para evitar inducir hipertiroidismo fetal'
        ],
        correcta: 'C',
        explicacion: 'Al confirmarse el embarazo, los requerimientos maternos de tiroxina aumentan precozmente entre un 20% y un 50% debido a la elevación de la TBG por hiperestrogenismo, la transferencia transplacentaria de T4 al feto y la degradación placentaria de hormonas tiroideas. Las guías internacionales y del MINSAL recomiendan enfáticamente instruir a las pacientes hipotiroideas a incrementar su dosis en dos comprimidos semanales (aumento del 25-30%) de manera inmediata al confirmar el embarazo, realizando un control de TSH cada 4 semanas para ajustar la dosis.',
        recTag: 'EUNACOM Diciembre 2018 (Q#33)'
      },
      {
        stem: '¿Cuál es el momento óptimo para la toma de la muestra de sangre en papel filtro para el tamizaje neonatal universal de hipotiroidismo congénito en Chile según la norma del Ministerio de Salud?',
        opciones: [
          'A) En sangre de cordón umbilical inmediatamente al momento del alumbramiento',
          'B) En las primeras 6 horas de vida',
          'C) Entre las 40 y 48 horas de vida, antes del alta de la maternidad',
          'D) A los 7 días de vida en el primer control ambulatorio del recién nacido',
          'E) Al mes de vida en el control de salud de la díada'
        ],
        correcta: 'C',
        explicacion: 'Inmediatamente después del nacimiento se produce una elevación fisiológica súbita y marcada de TSH en el recién nacido ("pico neonatal de TSH") inducida por el enfriamiento térmico extrauterino, la cual desciende gradualmente en las primeras 24 a 36 horas. Para evitar una tasa inaceptable de falsos positivos, la norma técnica del Programa Nacional de Tamizaje Neonatal de Chile (Garantía GES) establece que la muestra de sangre de talón debe recolectarse entre las 40 y 48 horas de vida (o idealmente entre el 2° y 3° día, antes del alta hospitalaria).',
        recTag: 'EUNACOM Diciembre 2022 (Q#27)'
      }
    ]
  },
  {
    id: 'endo-05',
    classId: 'endo-05',
    tier: 2,
    blockNum: 1,
    blockName: 'Patología Tiroidea Funcional: Hipotiroidismo y Tiroiditis',
    topicLabel: '1.5',
    title: 'Tiroiditis: Hashimoto, De Quervain (Subaguda), Silente y Fármacos (Amiodarona, Litio)',
    perfilCode: '1.05.1.007',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Patología con Cobertura Primaria y de Especialidad en Red Asistencial',
    reconstrucciones: 'EUNACOM Diciembre 2017 (Q#51) · EUNACOM Julio 2020 (Q#18) · EUNACOM Diciembre 2022 (Q#39)',
    frecuencia: 'Muy Alta · Tiroiditis subaguda de De Quervain (dolor exquisito + VHS alta + captación nula), tiroiditis por amiodarona tipo 1 vs 2 y efecto del litio',
    svg: null, algoTitle: 'Algoritmo Diagnóstico Diferencial de Tiroiditis Dolorosa vs No Dolorosa',
    diagram: flow('Algoritmo de Diagnóstico Diferencial de las Tiroiditis', [
      { t: 'Paciente con Inflamación o Disfunción Tiroidea Aguda/Subaguda', s: 'Paso 1: Evaluar presencia de DOLOR CERVICAL ANTERIOR exquisito a la palpación' },
      { k: 'split', q: '¿Tiroides Dolorosa a la Palpación vs Tiroides Indolora?', s: 'Diferenciación semiológica cardinal', ll: 'DOLOROSA: De Quervain / Infecciosa Aguda', rl: 'INDOLORA: Hashimoto / Silente / Postparto',
        left: { t: 'Tiroiditis Subaguda de De Quervain (Post-viral)', s: 'Dolor irradiado a mandíbula/oído · VHS > 50-100 mm/h · Captación I-131 casi nula · Tratar: AINEs / Prednisona', type: 'warn' },
        right: { t: 'Hashimoto / Silente / Inducida por Fármacos', s: 'Hashimoto: Anti-TPO (+) bocio firme · Fármacos: Amiodarona (Tipo 1 vs 2) o Litio (bocio/hipotiroidismo)', type: 'acc' },
        ll: 'dolor y VHS alta', rl: 'indolora / anticuerpos' },
      { t: 'Evolución Trifásica Clásica de las Tiroiditis Destructivas', s: 'Fase 1: Tirotoxicosis transitoria (liberación hormonal) -> Fase 2: Hipotiroidismo transitorio -> Fase 3: Eutiroidismo', type: 'dec', al: 'evolución trifásica', from: 'left' },
    ]),
    contexto: 'Las tiroiditis son un motivo frecuente de preguntas trampa en el EUNACOM. El alumno debe diferenciar de inmediato la Tiroiditis Subaguda de De Quervain (la única caracterizada por dolor cervical anterior intenso que irradia a mandíbula/oídos, aumento masivo de la VHS y captación de yodo radiactivo casi nula) de la Tiroiditis de Hashimoto y de la Tiroiditis Silente postparto. Asimismo, el reconocimiento de la patología tiroidea inducida por Amiodarona (Tipo 1 con bocio preexistente vs Tipo 2 destructiva) y por Litio es evaluado sistemáticamente.',
    contentSections: [
      {
        subhead: '1. Tiroiditis Subaguda Granulomatosa de De Quervain',
        paragraphs: [
          'Es un cuadro inflamatorio autolimitado de presunta etiología post-viral (asociado a Coxsackie, adenovirus, parotiditis o enterovirus), más frecuente en mujeres jóvenes de 30 a 50 años.',
          '<strong>Cuadro Clínico Clásico:</strong> Aparición súbita de <strong>DOLOR CERVICAL ANTERIOR INTENSO que se irradia hacia los ángulos mandibulares, oídos u occipucio</strong>, precedido 1 a 3 semanas antes por una infección de la vía aérea superior. Se acompaña de malestar general, fiebre moderada o febrículas, disfagia y palpación tiroidea sumamente dolorosa con glándula aumentada de tamaño y caliente.',
          '<strong>Hallazgos de Laboratorio e Imágenes Patognomónicos:</strong><br/>' +
          '• <strong>Velocidad de Eritrosedimentación (VHS) marcadamente elevada:</strong> Suele superar los <strong>60 a 100 mm/hora</strong> (reactantes de fase aguda muy altos con PCR elevada).<br/>' +
          '• <strong>Cintigrama Tiroideo con Captación de Yodo-131 (I-131) CASI NULA (< 1–2% a las 24h, "tiroides en blanco"):</strong> La destrucción folicular impide la captación activa de yodo, lo que permite diferenciarlo con certeza de la Enfermedad de Graves (donde la captación está marcadamente aumentada).<br/>' +
          '• <strong>Tratamiento Médico:</strong> No responde a fármacos antitiroideos. <strong>Primera línea: Antiinflamatorios no esteroidales (AINEs como ibuprofeno o naproxeno) en casos leves a moderados</strong>; si el dolor es refractario o muy intenso, se prescribe <strong>Prednisona oral (30 a 40 mg/día con reducción progresiva en 4 a 6 semanas)</strong>. Para los síntomas adrenérgicos de la fase tirotóxica se usa propranolol.',
        ],
      },
      {
        subhead: '2. Evolución Trifásica Clásica de las Tiroiditis Destructivas',
        paragraphs: [
          'Tanto la tiroiditis de De Quervain como la tiroiditis silente o postparto cursan con una evolución cronológica característica en tres fases sucesivas:',
          '1) <strong>Fase Tirotóxica Inicial (semanas 1 a 6):</strong> La lisis de los folículos libera hormonas tiroideas preformadas al torrente sanguíneo (TSH baja con T4L alta). Dura pocas semanas y <em>no es un verdadero hipertiroidismo sino una tirotoxicosis destructiva</em>.<br/>' +
          '2) <strong>Fase Hipotiroidea Intermedia (semanas 6 a 16):</strong> Al agotarse las reservas foliculares antes de la regeneración celular, el paciente cae en hipotiroidismo transitorio (TSH alta con T4L baja), que puede requerir levotiroxina transitoria.<br/>' +
          '3) <strong>Fase de Recuperación y Eutiroidismo (meses 4 a 6):</strong> En > 90% de los pacientes la arquitectura folicular se repara y se restablece la función tiroidea normal definitiva.',
        ],
      },
      {
        subhead: '3. Tiroiditis Inducida por Fármacos: Amiodarona y Litio',
        paragraphs: [
          '• <strong>Amiodarona:</strong> Fármaco antiarrítmico con alto contenido de yodo (cada comprimido de 200 mg aporta 75 mg de yodo, 100 veces el requerimiento diario). Puede inducir hipotiroidismo por el <em>efecto Wolff-Chaikoff prolongado</em> (falla de escape al exceso de yodo), o bien inducir tirotoxicosis en dos formas:<br/>' +
          '&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Tirotoxicosis por Amiodarona Tipo 1:</strong> Fenómeno de Jod-Basedow en pacientes con bocio multinodular o Graves latente. El exceso de yodo sobreactiva la síntesis hormonal. Hay hipervascularización en Eco-Doppler y captación detectable. Tratamiento: <strong>Tiamazol a dosis altas</strong>.<br/>' +
          '&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Tirotoxicosis por Amiodarona Tipo 2:</strong> Tiroiditis destructiva citotóxica directa por amiodarona en tiroides previamente normal. Eco-Doppler avascular y captación nula. Tratamiento: <strong>Corticoides sistémicos (Prednisona 40 mg/día)</strong>.<br/>' +
          '• <strong>Litio:</strong> Inhibe la proteólisis y liberación de T3/T4 desde el coloide folicular. Produce <strong>bocio e hipotiroidismo subclínico o clínico en el 20–30% de los pacientes tratados crónicamente</strong>. No exige suspender el litio; la conducta estándar es agregar levotiroxina para normalizar la TSH.',
        ],
      },
    ],
    table: {
      title: 'Diagnóstico Diferencial de las Principales Tiroiditis Clínicas',
      headers: ['Tipo de Tiroiditis', 'Dolor Cervical', 'VHS / PCR', 'Anti-TPO', 'Captación I-131', 'Tratamiento de Elección'],
      rows: [
        ['De Quervain (Subaguda)', 'SÍ (Intenso, irradiado a mandíbula)', 'MUY ALTA (> 60-100 mm/h)', 'Negativo o títulos bajos', 'CASI NULA (< 1%, "Blanco")', 'AINEs / Prednisona 30-40 mg/d + Propranolol'],
        ['Hashimoto (Crónica autoinmune)', 'NO (Indoloro, bocio firme elástico)', 'Normal', 'POSITIVO ALTO (> 90%)', 'Variable / Irregular', 'Levotiroxina de por vida según TSH (GES)'],
        ['Silente o Postparto', 'NO (Totalmente indolora)', 'Normal o levemente alta', 'Positivo moderado (50-70%)', 'Casi nula en fase tirotóxica', 'Propranolol en fase 1; L-T4 transitoria si hipo'],
        ['Amiodarona Tipo 1 (Jod-Basedow)', 'NO', 'Normal', 'Variable', 'Baja o detectable', 'Antitiroideos (Tiamazol a altas dosis)'],
        ['Amiodarona Tipo 2 (Destructiva)', 'NO (o molestia leve)', 'Normal o levemente alta', 'Negativo', 'NULA / Indetectable', 'Corticoides orales (Prednisona 40 mg/d)'],
        ['Infecciosa Supurada Aguda', 'SÍ (Eritema, calor local, fluctuación)', 'Alta con Leucocitosis', 'Negativo', 'Normal con defecto focal', 'Drenaje quirúrgico + Antibióticos EV'],
      ],
    },
    vignette: 'Una mujer de 34 años consulta en atención primaria por dolor cervical anterior intenso de 5 días de evolución, que se incrementa con la deglución y se irradia hacia ambos oídos y la mandíbula. Como antecedente refiere haber cursado un resfrío común febril hace dos semanas. Al examen físico: febrícula de 37.7 °C, FC 96 lpm, dolor exquisito a la palpación de la glándula tiroides, la cual se encuentra difusamente aumentada de tamaño. Sus exámenes informan: TSH 0.08 mIU/L, T4 libre 2.3 ng/dL y una VHS de 88 mm/hora. El cintigrama tiroideo muestra una captación de I-131 menor al 1% a las 24 horas.',
    explicacion: 'El cuadro clínico y de laboratorio es patognomónico de una Tiroiditis Subaguda de De Quervain (granulomatosa post-viral): dolor cervical anterior intenso con irradiación típica a oídos/mandíbula, glándula tiroides hipersensible al tacto, fase tirotóxica inicial por lisis folicular, VHS marcadamente elevada (> 60 mm/h) y captación de yodo-131 casi nula ("tiroides blanco"). La conducta médica de primera línea es indicar antiinflamatorios (AINEs o prednisona si el dolor es severo) y betabloqueadores para el alivio de las palpitaciones, sin indicar fármacos antitiroideos.',
    keyPoints: [
      'La Tiroiditis de De Quervain es la causa más común de tiroides DOLOROSA; presenta dolor exquisito cervical irradiado a oídos y mandíbula.',
      'El cintigrama tiroideo en De Quervain y en tiroiditis destructivas muestra captación de I-131 CASI NULA (< 1%), a diferencia de Graves.',
      'La VHS marcadamente elevada (> 60-100 mm/h) asociada a dolor tiroideo es el marcador de laboratorio cardinal de De Quervain.',
      'El tratamiento de De Quervain se basa en AINEs en casos leves a moderados y corticoides (prednisona) en casos severos o refractarios.',
      'Los fármacos antitiroideos (tiamazol) NO sirven en las tiroiditis destructivas porque no hay hiperfunción glandular sino lisis con fuga hormonal.',
      'La amiodarona tipo 1 (Jod-Basedow) se trata con antitiroideos; la tipo 2 (tiroiditis destructiva citotóxica) se trata con corticoides.',
      'El litio inhibe la liberación de hormonas tiroideas produciendo hipotiroidismo y bocio en el 20-30% de los pacientes; se trata agregando levotiroxina.',
    ],
    questions: [
      {
        stem: 'Una paciente de 38 años consulta por dolor en la región anterior del cuello de 7 días de evolución, irradiado hacia la mandíbula y el oído izquierdo, asociado a palpitaciones y nerviosismo. Refiere haber presentado un cuadro respiratorio alto febril hace dos semanas. Al examen físico destaca tiroides doloroso al tacto, difusamente aumentado de volumen. Sus exámenes de laboratorio revelan: TSH 0.1 mIU/L, T4 libre 2.1 ng/dL y VHS de 92 mm/hora. La captación tiroidea con I-131 a las 24 horas es de 0.8%. ¿Cuál es el tratamiento de elección para este cuadro clínico?',
        opciones: [
          'A) Tiamazol 20 mg cada 12 horas por vía oral',
          'B) Antiinflamatorios no esteroidales (o prednisona oral si el dolor es severo) asociados a propranolol sintomático',
          'C) Dosis ablativa de radioyodo I-131 de forma urgente',
          'D) Tiroidectomía subtotal de urgencia',
          'E) Cloxacilina endovenosa más gentamicina por sospecha de absceso piógeno'
        ],
        correcta: 'B',
        explicacion: 'El diagnóstico es Tiroiditis Subaguda de De Quervain (granulomatosa), confirmada por el dolor cervical típico post-viral, tiroides hipersensible, VHS marcadamente elevada (> 90 mm/h) y captación de yodo prácticamente nula (< 1%). La tirotoxicosis es transitoria y autolimitada provocada por la liberación de hormonas preformadas por la destrucción folicular, por lo que los fármacos antitiroideos de síntesis (como el tiamazol) son completamente ineficaces. El tratamiento de elección son los antiinflamatorios (AINEs o prednisona oral) para controlar el dolor y la inflamación, junto con betabloqueadores (propranolol) para mitigar los síntomas adrenérgicos.',
        recTag: 'EUNACOM Diciembre 2017 (Q#51)'
      },
      {
        stem: 'Un paciente de 48 años con trastorno afectivo bipolar en tratamiento crónico regular con carbonato de litio desde hace 3 años acude a control psiquiátrico de rutina. En los exámenes preventivos se pesquisa una TSH de 8.9 mIU/L con T4 libre de 1.1 ng/dL y presencia de un bocio difuso indoloro grado I. El paciente se encuentra psiquiátricamente eutímico y asintomático. ¿Cuál es la conducta médica más adecuada?',
        opciones: [
          'A) Suspender inmediatamente el carbonato de litio y cambiar a ácido valproico',
          'B) Mantener el litio e iniciar tratamiento con levotiroxina a dosis bajas para normalizar la TSH',
          'C) Indicar tiamazol para suprimir el bocio inducido por litio',
          'D) Indicar radioyodo I-131 para tratar el bocio',
          'E) Suspender todo psicofármaco y no indicar hormonas tiroideas'
        ],
        correcta: 'B',
        explicacion: 'El litio interfiere con la captación de yodo, la yodotirosina y fundamentalmente inhibe la proteólisis de la tiroglobulina y la liberación de T4 y T3 al torrente sanguíneo, lo que genera hipotiroidismo subclínico o clínico y bocio compensatorio en el 20 a 30% de los pacientes tratados a largo plazo. Dado que el litio es un estabilizador del ánimo de gran eficacia y la disfunción tiroidea es fácilmente manejable, la conducta de elección NO es suspender el litio, sino mantenerlo e iniciar suplementación con levotiroxina para normalizar la TSH y frenar el crecimiento del bocio.',
        recTag: 'EUNACOM Diciembre 2022 (Q#39)'
      }
    ]
  }
];

module.exports = { bloque1, flow };
