// ============================================================================
// BLOQUE 05 GERIATRÍA: GERIATRÍA CLÍNICA Y GRANDES SÍNDROMES GERIÁTRICOS
// Manual EUNACOM 2026 · Tomo 10 Neurología & Geriatría (Accent color: #6d28d9 - Púrpura)
// 4 Temas Curriculares (10.21 a 10.24) · Cobertura 100% Perfil V3 & Garantías GES
// ============================================================================

const aeeData = require('./aee_formatted_neurologia.json');

function cleanQ(q) {
  if (!q) return null;
  return {
    stem: q.stem.replace(/\u00ad/g, '').replace(/::$/, ':').replace(/\r/g, '').trim(),
    options: (q.options || []).map(opt => ({
      id: opt.id,
      text: opt.text.replace(/\u00ad/g, '').replace(/­­10­neurologia­y­geriatria\/\s*5\/10\s*/g, '').replace(/\r/g, '').trim()
    })),
    correcta: q.correcta,
    explicacion: q.explicacion.replace(/\u00ad/g, '').replace(/\r/g, '').trim(),
    recTag: q.recTag
  };
}

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
    const cls = { acc: 'acc', dec: 'dec', warn: 'warn', crit: 'crit' }[o.type] || 'b';
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
  <defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#6d28d9"/></marker></defs>
  <style>
    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}
    .t{font-size:10px;fill:#15181d}
    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#6d28d9;font-weight:700}
    .acc{fill:#6d28d9;stroke:#5b21b6}.accT{fill:#fff}.accS{font-size:8px;fill:#ede9fe}
    .dec{fill:#f5f3ff;stroke:#c4b5fd;stroke-width:1}
    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}
    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}
    .ln{stroke:#6d28d9;stroke-width:1.2;fill:none;marker-end:url(#ar)}
  </style>
  ${P.join('\n  ')}
</svg>`;
  return { title, svg };
}

const bloque5 = [
  // ==========================================================================
  // TEMA 10.21: SÍNDROME CONFUSIONAL AGUDO (DELIRIUM) [TIER 3 · 4 PÁGINAS]
  // ==========================================================================
  {
    id: 'neuro-21',
    classId: 'neuro-21',
    tier: 3,
    blockNum: 5,
    blockName: 'Geriatría Clínica y Grandes Síndromes Geriátricos',
    topicLabel: '10.21',
    title: 'Síndrome Confusional Agudo (Delirium): Criterios CAM, Factores Precipitantes y Abordaje Multicomponente',
    perfilCode: '1.07.2.005',
    dx: 'Específico',
    tx: 'Completo',
    seg: 'Hospitalario / Ambulatorio',
    ges: 'Sin garantía GES directa · Emergencia neuropsiquiátrica transversal de máxima prevalencia en servicios médico-quirúrgicos, UPC y urgencias. Marcador independiente de morbimortalidad, institucionalización y declive cognitivo acelerado.',
    reconstrucciones: 'EUNACOM 2023 (Q#112) · EUNACOM 2021 (Q#45) · EUNACOM Julio 2019 (Q#104) · EUNACOM Diciembre 2017 (Q#88) · EUNACOM Julio 2015 (Q#51)',
    frecuencia: 'Máxima rentabilidad geriátrica · Pregunta obligada en urgencias, medicina interna y geriatría',
    svg: null,
    algoTitle: 'Algoritmo de Abordaje Diagnóstico Etiológico y Terapéutico del Síndrome Confusional Agudo (Delirium)',
    diagram: flow('Algoritmo de Abordaje del Síndrome Confusional Agudo (Delirium)', [
      { t: 'Deterioro Agudo y Fluctuante de Cognición o Nivel de Alerta', s: 'Sospecha clínica en adulto mayor hospitalizado o institucionalizado · Evaluar en ≤ 10 minutos', type: 'acc' },
      { t: 'Aplicación de Criterios Diagnósticos CAM (Confusion Assessment Method)', s: '1. Inicio agudo y fluctuante + 2. Inatención + [3. Pensamiento desorganizado Ó 4. Nivel alterado]', type: 'warn' },
      { k: 'split', q: '¿Cumple Criterios CAM Positivo (1 + 2 + [3 ó 4])?', s: 'Sensibilidad > 94%, Especificidad > 89% para Delirium',
        ll: 'CAM Positivo (Delirium Confirmado)',
        left: { t: 'Pesquisa Sistemática Etiológica (I WATCH DEATH)', s: 'Infección (ITU/NAC), Retención urinaria, Fecaloma, Fármacos (anticolinérgicos/BZD), Metabólico', type: 'crit' },
        rl: 'CAM Negativo (Atención Preservada)',
        right: { t: 'Explorar Diagnóstico Diferencial Crónico', s: 'Demencia primaria (Alzheimer/Lewy), Depresión mayor (Pseudodemencia), Afasia aguda aislada', type: 'dec' }
      },
      { t: 'Intervención No Farmacológica Multicomponente Inmediata (1ª Línea)', s: 'Reorientación continua, retiro de sujeciones, hidratación oral, corrección sensorial (lentes/audífonos), sueño fisiológico', type: 'acc' },
      { t: 'Farmacoterapia de Rescate (Exclusivo en Agitación Severa o Riesgo Vital)', s: 'Haloperidol 0.5 – 1 mg VO/IM c/8-12 h · Quetiapina 12.5 – 25 mg si Parkinson o Lewy · PROSCRIBIR Benzodiacepinas', type: 'acc' }
    ]),
    contexto: 'El síndrome confusional agudo (delirium) es una disfunción cerebral difusa, aguda y fluctuante que afecta hasta al 30-50% de los pacientes adultos mayores hospitalizados en servicios de medicina, cirugía y cuidados intensivos. No constituye una patología psiquiátrica primaria, sino un síntoma cardinal de descompensación sistémica severa. Su reconocimiento inmediato mediante los criterios estandarizados CAM, la búsqueda meticulosa y resolución del factor precipitante subyacente y la instauración de medidas ambientales no farmacológicas multicomponentes son conductas obligatorias para reducir la mortalidad intrahospitalaria, que duplica a la de pacientes comparables no delirantes.',
    contentSections: [
      {
        subhead: '1. Fisiopatología Neurobiológica y Modelo Interactivo de Vulnerabilidad',
        paragraphs: [
          'La neurobiología del delirium responde a una claudicación aguda de la neurotransmisión cerebral ante estresores orgánicos. El modelo fisiopatológico universalmente aceptado postula una <strong>hipoactividad colinérgica cerebral</strong> combinada con una <strong>hiperactividad dopaminérgica</strong> central, a la que se suman disfunciones noradrenérgicas, serotoninérgicas y GABAérgicas. De forma paralela, la activación de la cascada inflamatoria sistémica (inducida por infecciones, sepsis, cirugía mayor o daño tisular) libera citoquinas proinflamatorias circulantes (TNF-α, IL-1β, IL-6, IL-8), las cuales aumentan la permeabilidad de la barrera hematoencefálica, activan la microglía residente, promueven neuroinflamación y alteran la fosforilación oxidativa mitocondrial neuronal.',
          'Clínicamente, el delirium se estructura bajo un <strong>modelo interactivo de vulnerabilidad</strong>: el cuadro resulta de la compleja interacción entre factores <em>predisponentes</em> basales y factores <em>precipitantes</em> agudos. A mayor vulnerabilidad previa del huésped (edad &gt; 75 años, deterioro cognitivo o demencia subyacente, fragilidad, polifarmacia, déficit sensorial auditivo o visual no corregido, dependencia funcional), menor es la intensidad del estímulo precipitante necesario para desencadenar el delirium. Así, en un paciente con demencia avanzada, un simple cambio de habitación, un fecaloma o una retención urinaria asintomática bastan para desatar un cuadro confusional severo; por el contrario, en un adulto mayor cognitivamente sano y robusto se requiere una noxa de gran magnitud (shock séptico, cirugía cardíaca con bypass, hipoxia crítica o intoxicación medicamentosa masiva) (véase Algoritmo 10.21).'
        ]
      },
      {
        subhead: '2. Criterios Diagnósticos CAM y Subtipos Motores de Delirium',
        paragraphs: [
          'El diagnóstico del delirium es estrictamente <strong>clínico</strong> y no depende de exámenes de laboratorio ni de neuroimagen. El instrumento estandarizado de mayor sensibilidad (&gt; 94%) y especificidad (&gt; 89%) validado internacionalmente y por el Ministerio de Salud es el <strong>Confusion Assessment Method (CAM)</strong>. Para establecer el diagnóstico formal de delirium se exige el cumplimiento mandatorio de los <strong>criterios 1 y 2</strong>, más al menos <strong>uno de los criterios 3 o 4</strong> (véase Tabla 10.21: Criterios Diagnósticos CAM):',
          '• <strong>Criterio 1: Inicio agudo y curso fluctuante:</strong> Evidencia por anamnesis con familiares o registro de enfermería de un cambio brusco en el estado mental basal del paciente (instaurado en horas o días), que fluctúa en gravedad a lo largo del día con exacerbación vespertina o nocturna (fenómeno de <em>sundowning</em>).',
          '• <strong>Criterio 2: Inatención cardinal:</strong> El paciente presenta dificultad evidente para fijar, mantener o desviar la atención. Se pesquisa solicitando deletrear la palabra "MUNDO" al revés, recitar los meses del año en orden inverso (diciembre a enero) o contar del 20 al 1. Es el rasgo patognomónico y diferenciador clave frente a la demencia.',
          '• <strong>Criterio 3: Pensamiento desorganizado:</strong> Conversación incoherente, divagatoria, fuga de ideas, respuestas ilógicas o inconsistentes.',
          '• <strong>Criterio 4: Alteración del nivel de conciencia:</strong> Cualquier estado que no sea la alerta normal, abarcando desde la hipervigilancia extrema hasta la letargia, estupor o coma.',
          'Desde el punto de vista psicomotor, el delirium se clasifica en tres subtipos: <strong>1) Hipoactivo (50% de los casos):</strong> Caracterizado por somnolencia, letargia, bradipsiquia, pasividad motora y reducción del lenguaje espontáneo; es el subtipo más frecuente en adultos mayores, el más subdiagnosticado (confundido con depresión o senilidad) y el que asocia <strong>mayor tasa de complicaciones y mortalidad intrahospitalaria</strong> por inmovilidad, atelectasias, úlceras por presión y aspiración; <strong>2) Hiperactivo (25%):</strong> Con agitación psicomotora, inquietud, taquipsiquia, alucinaciones visuales floridas, hostilidad e hiperreactividad simpática autonómica; y <strong>3) Mixto (25%):</strong> Alternancia rápida e impredecible entre periodos hipoactivos e hiperactivos.'
        ]
      },
      {
        subhead: '3. Diagnóstico Diferencial Riguroso: Delirium vs Demencia vs Depresión',
        paragraphs: [
          'La distinción diferencial entre el delirium, la demencia y el trastorno depresivo mayor en el adulto mayor es una de las competencias más evaluadas en el EUNACOM (véase Tabla de Gravedad 10.21: Diagnóstico Diferencial Delirium vs Demencia vs Depresión).',
          'A diferencia de la <strong>demencia</strong>, cuyo inicio es insidioso (meses a años), con curso progresivo y donde la atención permanece relativamente preservada hasta estadios muy avanzados de la enfermedad, el <strong>delirium</strong> irrumpe súbitamente en horas o días, su curso es marcadamente fluctuante y la inatención es inmediata y prominente. Sin embargo, debe recordarse que la demencia preexistente es el <em>principal factor predisponente</em> para desarrollar delirium, conformando el frecuente cuadro de "delirium sobreimpuesto a demencia".',
          'Frente a la <strong>depresión</strong> (pseudodemencia depresiva), el paciente anciano deprimido mantiene la atención intacta en pruebas estructuradas, presenta respuestas características de "no sé" o falta de esfuerzo ante preguntas de memoria, conserva el ciclo vigilia-sueño sin fluctuaciones rápidas de conciencia y no manifiesta el pensamiento desorganizado agudo ni las alucinaciones visuales del delirium.'
        ]
      },
      {
        subhead: '4. Pesquisa Sistemática Etiológica: Mnemotecnia I WATCH DEATH',
        paragraphs: [
          'Identificado el delirium mediante CAM, el objetivo clínico urgente es identificar y corregir el gatillante orgánico. Ningún delirium debe catalogarse como "idiopático". La mnemotecnia clínica clásica <strong>I WATCH DEATH</strong> orienta el estudio etiológico escalonado:',
          '• <strong>I (Infección):</strong> Infección del tracto urinario (ITU aguda, piuria, bacteriuria sintomática) y neumonía adquirida en la comunidad (NAC) son los dos focos más comunes; también sepsis abdominal y bacteriemia.',
          '• <strong>W (Withdrawal / Abstinencia):</strong> Supresión brusca de alcohol (<em>Delirium Tremens</em>) o deprivación aguda de benzodiacepinas u opioides.',
          '• <strong>A (Agudo metabólico / Hidroelectrolítico):</strong> Hipoglicemia, deshidratación hiperosmolar, hiponatremia o hipernatremia, hipo/hiperkalemia, hipercalcemia, uremia o falla hepática aguda.',
          '• <strong>T (Trauma):</strong> Fractura ósea no desplazada (cadera/costal) o hematoma subdural subagudo/crónico tras traumatismo craneano menor no reportado.',
          '• <strong>C (SNC / Intracraneal):</strong> ACV isquémico agudo, hematoma intraparenquimatoso, meningitis/encefalitis o estado epiléptico no convulsivo.',
          '• <strong>H (Hipoxia / Hipercapnia):</strong> Insuficiencia cardíaca congestiva descompensada, edema pulmonar agudo, EPOC exacerbado, tromboembolismo pulmonar (TEP) o infarto agudo al miocardio (IAM silente o atípico en geriatría).',
          '• <strong>D (Deficiencias vitamínicas):</strong> Déficit agudo de tiamina (Encefalopatía de Wernicke) o déficit de vitamina B12.',
          '• <strong>E (Endocrinopatías):</strong> Tormenta tiroidea, coma mixedematoso, crisis tiotóxica o insuficiencia suprarrenal aguda.',
          '• <strong>A (Agentes farmacológicos / Tóxicos):</strong> La causa médica iatrogénica más prevenible. Destacan fármacos con actividad anticolinérgica (antihistamínicos de 1ª generación como clorfenamina, antidepresivos tricíclicos, antiespasmódicos como pargeverina), benzodiacepinas, opioides, corticoesteroides sistémicos, digoxina y anticonvulsivantes.',
          '• <strong>T (Trombosis / Isquemia sistémica):</strong> Isquemia mesentérica o síndrome coronario agudo sin supradesnivel ST.',
          '• <strong>H (Heces y Orina - Retención mecánica):</strong> <em>Regla de Oro del EUNACOM:</em> Dos causas no infecciosas sumamente prevalentes que pasan desapercibidas en el examen físico son el <strong>globo vesical (retención aguda de orina)</strong> y la <strong>impactación fecal (fecaloma)</strong>. La colocación de una sonda vesical descompresiva o la evacuación rectal de un fecaloma resuelven el delirium de manera inmediata sin requerir psicofármacos.'
        ]
      },
      {
        subhead: '5. Abordaje Terapéutico Multicomponente y Manejo Farmacológico de Rescate',
        paragraphs: [
          'El tratamiento del delirium se fundamenta en dos ejes complementarios e indisolubles (véase Tabla de Tratamiento 10.21: Protocolo Multicomponente y Farmacoterapia):',
          '<strong>1. Medidas Ambientales y No Farmacológicas Multicomponentes (Primera Línea Mandatoria):</strong> Inspiradas en el modelo HELP (<em>Hospital Elder Life Program</em>), constituyen la única intervención con sólida evidencia en reducir la duración y severidad del delirium. Incluyen: reorientación verbal frecuente y tranquila por parte del personal y familiares (relojes visibles, calendarios, ventanas con luz natural); reposición inmediata de ayudas sensoriales (colocar lentes ópticos y audífonos basales del paciente); favorecer la arquitectura fisiológica del sueño (minimizar ruidos y toma de signos vitales nocturnos, apagar luces artificiales de noche, mantener iluminación diurna); hidratación oral y movilización precoz fuera de la cama; retiro sistemático de sondas y vías venosas innecesarias; y acompañamiento familiar continuo en sala.',
          '<em>Proscripción absoluta de sujeciones mecánicas:</em> Las contenciones físicas no previenen caídas ni extubaciones, sino que agravan exponencialmente la agitación psicomotora, causan isquemia de extremidades, asfixia posicional, rabdomiolisis y perpetúan el delirium.',
          '<strong>2. Farmacoterapia de Rescate (Indicación Restrictiva y Excepcional):</strong> Los fármacos antipsicóticos NO previenen ni curan el delirium, ni reducen la mortalidad; su uso se restringe con rigor a pacientes con <strong>agitación psicomotora severa que pone en peligro inminente la integridad física del paciente o de terceros</strong>, o cuando la agitación impide la realización de tratamientos de soporte vital indispensables (ej. intento reiterado de retiro de tubo endotraqueal o accesos vasculares mayores), siempre a las dosis más bajas posibles y por el menor tiempo necesario.',
          '• <strong>Fármaco de elección estándar: Haloperidol</strong>. Dosis geriátrica de inicio: <strong>0.5 a 1 mg vía oral o intramuscular</strong> cada 8 a 12 horas (máximo 2 a 3 mg/día). Presenta mínimo efecto anticolinérgico y no induce depresión respiratoria ni hipotensión. Monitorear electrocardiograma basal por riesgo de prolongación del intervalo QTc y taquicardia ventricular en <em>torsades de pointes</em>.',
          '• <strong>Antipsicóticos atípicos (alternativas):</strong> Quetiapina (12.5 a 25 mg VO cada 12-24 h), Risperidona (0.25 a 0.5 mg VO cada 12 h) u Olanzapina (2.5 a 5 mg VO al acostarse). Tienen menor incidencia de efectos extrapiramidales.',
          '• <em>Regla de Oro en Parkinson y Demencia por Cuerpos de Lewy:</em> El Haloperidol está <strong>formalmente CONTRAINDICADO</strong> por desencadenar parkinsonismo severo irreversible, catatonía y síndrome neuroléptico maligno letal. El fármaco de elección absoluta es la <strong>Quetiapina</strong> (a dosis de 12.5 a 25 mg VO) o Clozapina.',
          '• <em>Regla de Oro sobre Benzodiacepinas:</em> Las benzodiacepinas (Diazepam, Lorazepam, Midazolam) están <strong>estrictamente CONTRAINDICADAS</strong> en el delirium geriátrico común, dado que generan sedación excesiva, depresión respiratoria, ataxia, desinhibición paradójica y perpetúan el cuadro confusional. La <strong>ÚNICA excepción médica</strong> en que las benzodiacepinas son el tratamiento de primera línea de elección es el <strong>Delirium Tremens (abstinencia alcohólica)</strong> o el síndrome de abstinencia a benzodiacepinas/sedantes, donde actúan compensando la hiperexcitabilidad GABAérgica de rebote.'
        ]
      }
    ],
    table: {
      title: 'Criterios Diagnósticos CAM (Confusion Assessment Method) y Pesquisa Clínica',
      headers: ['Criterio CAM', 'Descripción Clínica Operativa', 'Método de Evaluación al Lado de la Cama', 'Interpretación y Rendimiento'],
      rows: [
        ['1. Inicio Agudo y Curso Fluctuante', 'Cambio súbito respecto al estado cognitivo basal previo (horas o días) con fluctuación diurna y acentuación vespertina/nocturna (sundowning)', 'Anamnesis rigurosa con familiares y registro de cambios conductuales turno a turno por el personal de enfermería', 'Requisito OBLIGATORIO (debe estar presente siempre para diagnóstico positivo)'],
        ['2. Inatención Cardinal', 'Dificultad marcada para enfocar, sostener o cambiar la atención; el paciente se distrae con estímulos irrelevantes o no sigue el hilo', 'Pruebas de atención activa: deletrear M-U-N-D-O al revés, meses del año en orden inverso (diciembre a enero) o restar de 7 en 7', 'Requisito OBLIGATORIO (marca la diferencia biológica con demencias puras)'],
        ['3. Pensamiento Desorganizado', 'Discurso incoherente, divagatorio, saltos ilógicos de tema a tema, ideas delirantes transitorias o desorientación temporoespacial franca', 'Evaluación durante el diálogo clínico espontáneo; preguntas directas de orientación personal, temporal y geográfica', 'Requisito VARIABLE (debe cumplirse Criterio 3 O Criterio 4 para confirmar)'],
        ['4. Alteración del Nivel de Conciencia', 'Cualquier estado distinto a la alerta lúcida normal: hiperalerta/hipervigilancia, somnolencia, letargia, estupor o coma reactivo', 'Observación del contacto visual, respuesta al llamado verbal suave, al tacto o a estímulos auditivos ambientales', 'Requisito VARIABLE (CAM Positivo = Criterio 1 + Criterio 2 + [Criterio 3 ó 4])']
      ]
    },
    severityTable: {
      title: 'Diagnóstico Diferencial Clínico: Delirium vs Demencia vs Depresión en la Persona Mayor',
      headers: ['Parámetro Clínico', 'Delirium (Síndrome Confusional)', 'Demencia (Trastorno Neurocognitivo Mayor)', 'Depresión Mayor (Pseudodemencia)'],
      rows: [
        ['Instalación / Inicio', 'Agudo (horas a días), súbito y perfectamente fechable por familiares', 'Insidioso, crónico, lento y progresivo (meses a años)', 'Subagudo (semanas a meses), frecuentemente asociado a duelo o pérdida'],
        ['Curso Diario', 'Fluctuante, con lucidez intermitente y empeoramiento nocturno (sundowning)', 'Estable y lentamente progresivo; empeora sutilmente al fatigarse', 'Constante; frecuentemente peor en las mañanas al despertar'],
        ['Nivel de Alerta / Conciencia', 'Alterado (hipervigilante, letárgico, estuporoso o fluctuante)', 'Preservado y lúcido hasta etapas muy avanzadas terminales', 'Intacto; el paciente está alerta aunque con psicomotricidad lenta'],
        ['Atención y Concentración', 'Gravemente alterada e inatenta desde el inicio (eje cardinal)', 'Conservada en fases leves y moderadas; se pierde tardíamente', 'Conservada en pruebas dirigidas; aparente falta de esfuerzo motivacional'],
        ['Memoria y Respuestas', 'Amnesia anterógrada y retrógrada inmediata por falla atencional severa', 'Pérdida de memoria episódica reciente; confabulaciones compensatorias', 'Respuestas frecuentes de "no sé" o abandono rápido; mejora con insistencia'],
        ['Fenómenos Perceptuales', 'Alucinaciones visuales vívidas y terrores nocturnos muy comunes', 'Ausentes en etapas iniciales (salvo alucinaciones visuales precoces en Lewy)', 'Raras; ideas delusivas de culpa, ruina o hipocondría en depresión psicótica'],
        ['Actividad Psicomotora', 'Hiperactiva (agitación/temblor), hipoactiva (letargia) o mixta', 'Normal; puede haber apraxia motora o vagabundeo en fases intermedias', 'Inhibición psicomotora marcada o inquietud ansiosa'],
        ['Reversibilidad y Pronóstico', 'Potencialmente 100% reversible si se resuelve la causa médica precozmente', 'Irreversible y progresiva (salvo hidrocefalia normotensiva o déficit B12)', 'Reversible con tratamiento antidepresivo y psicoterapia orientada']
      ]
    },
    treatmentTable: {
      title: 'Protocolo Terapéutico Multicomponente y Farmacoterapia de Rescate en Delirium Geriátrico',
      headers: ['Línea de Manejo', 'Intervención / Fármaco', 'Dosis / Esquema Terapéutico', 'Objetivos Clínicos y Reglas de Oro EUNACOM'],
      rows: [
        ['1ª Línea No Farmacológica (HELP)', 'Medidas Ambientales y Neurocognitivas', 'Reorientación verbal continua · Relojes/calendarios · Acompañamiento familiar en sala · Luz natural diurna y silencio nocturno', 'Intervención universal obligatoria; reduce duración del delirium en > 40%. NO usar sujeciones físicas mecánicas'],
        ['1ª Línea No Farmacológica', 'Soporte Fisiológico y Corrección Sensorial', 'Reposición de lentes ópticos y audífonos · Hidratación guiada · Retiro de sondas vesicales y vías venosas · Kinesioterapia motora precoz', 'Restaura la aferencia sensorial y previene complicaciones de inmovilidad (escaras, trombosis y neumonía aspirativa)'],
        ['Resolución de Gatillantes Mecánicos', 'Descompresión Vesical y Evacuación Rectal', 'Sondaje vesical transitorio si globo vesical · Tacto rectal y enema evacuante si impacto fecal (fecaloma)', 'Regla de Oro: resuelve el delirium en minutos en pacientes con agitación inexplicada post-quirúrgica o postrada'],
        ['2ª Línea Farmacológica de Rescate', 'Haloperidol (VO / IM)', '0.5 a 1 mg VO o IM c/8-12 h (máx 2-3 mg/día) · Titular a la dosis mínima eficaz y suspender en 24-48 h', 'Elección estándar ante agitación severa con riesgo vital. Evaluar QTc basal. PROSCRITO en Enfermedad de Parkinson'],
        ['Alternativa en Parkinson / Lewy', 'Quetiapina oral', '12.5 a 25 mg VO al acostarse o c/12 h (titulable hasta 50 mg/día)', 'Elección obligatoria en Parkinson o Demencia por Cuerpos de Lewy. Menor efecto extrapiramidal'],
        ['Alternativa Atípica General', 'Risperidona oral', '0.25 a 0.5 mg VO cada 12 horas (máximo 1.5 mg/día)', 'Alternativa en pacientes con delirium hiperactivo sin patología extrapiramidal subyacente'],
        ['Excepción: Delirium Tremens', 'Benzodiacepinas (Diazepam / Lorazepam)', 'Diazepam 5 a 10 mg EV lento o Lorazepam 1 a 2 mg EV/VO c/4-6 h según escala CIWA-Ar', 'ÚNICA indicación de benzodiacepinas en delirium (abstinencia alcohólica). En todo otro delirium están CONTRAINDICADAS']
      ]
    },
    vignette: 'Hombre de 79 años, autovalente con antecedente de hipertensión arterial y artrosis de rodilla en tratamiento con enalapril y paracetamol, cursa el segundo día postoperatorio de una artroplastia total de cadera programada. Durante la madrugada comienza bruscamente con inquietud extrema, habla incoherencias diciendo que "hay animales debajo de la cama", intenta retirarse la vía venosa periférica y no reconoce a su hija. Al examen físico: PA 145/85 mmHg, FC 98 lpm, afebril (T° 36.8 °C), satO₂ 95% ambiental. Se encuentra vigil pero desorientado en tiempo y espacio, incapaz de deletrear la palabra MUNDO al revés ni de seguir una orden simple sin distraerse. El abdomen es blando, depresible, pero se palpa una masa hipogástrica dolorosa mate a la percusión. La herida quirúrgica se encuentra limpia y sin eritema.',
    explicacion: 'El cuadro corresponde a un Síndrome Confusional Agudo (Delirium) de tipo hiperactivo, confirmado por Criterios CAM: 1) inicio agudo (segundo día postoperatorio) y fluctuante; 2) inatención cardinal (falla al deletrear al revés y seguir instrucciones); 3) pensamiento desorganizado (habla incoherencias y alucinaciones visuales zoópsicas); y 4) alteración psicomotora/alerta. El hallazgo físico cardinal de una masa hipogástrica mate y dolorosa confirma una Retención Aguda de Orina (globo vesical), complicación postoperatoria sumamente frecuente tras anestesia neuroaxial y analgesia con opioides. La conducta inmediata y resolutiva es instalar una sonda Foley descompresiva, lo cual habitualmente revierte la agitación confusional en minutos, junto con implementar medidas ambientales no farmacológicas (acompañamiento de la hija, reorientación y luz natural). La administración de antipsicóticos o la contención física sin haber drenado el globo vesical constituye una mala práctica médica.',
    keyPoints: [
      'El delirium es una urgencia médica y un marcador pronóstico independiente de mortalidad intrahospitalaria; su diagnóstico es 100% clínico mediante los criterios CAM.',
      'Los criterios CAM exigen obligatoriamente inicio agudo y fluctuante (1) + inatención cardinal (2) + pensamiento desorganizado (3) O alteración del nivel de conciencia (4).',
      'El subtipo hipoactivo (letargia, bradipsiquia, pasividad) es el más frecuente (50%), el más inadvertido y el de peor pronóstico vital intrahospitalario.',
      'Dos causas mecánicas clásicas en EUNACOM que deben descartarse siempre antes de indicar psicofármacos son el globo vesical (retención aguda de orina) y el fecaloma.',
      'El abordaje no farmacológico multicomponente (HELP: reorientación, audífonos/lentes, sueño natural, presencia familiar) es la primera línea obligatoria; las sujeciones físicas están proscritas.',
      'La farmacoterapia de rescate (Haloperidol 0.5-1 mg) se reserva para agitación severa con riesgo vital; en Parkinson y Lewy se usa Quetiapina (Haloperidol está contraindicado); las benzodiacepinas se evitan siempre salvo en Delirium Tremens.'
    ],
    questions: [
      cleanQ(aeeData['10.21'][0]),
      cleanQ(aeeData['10.21'][1]),
      cleanQ(aeeData['10.21'][2]),
      cleanQ(aeeData['10.21'][3])
    ]
  },

  // ==========================================================================
  // TEMA 10.22: FRAGILIDAD, SARCOPENIA Y VALORACIÓN GERIÁTRICA INTEGRAL (VGI) [TIER 2 · 2-3 PÁGINAS]
  // ==========================================================================
  {
    id: 'neuro-22',
    classId: 'neuro-22',
    tier: 2,
    blockNum: 5,
    blockName: 'Geriatría Clínica y Grandes Síndromes Geriátricos',
    topicLabel: '10.22',
    title: 'Fragilidad, Sarcopenia y Valoración Geriátrica Integral (VGI)',
    perfilCode: '1.07.1.008',
    dx: 'Específico',
    tx: 'Inicial',
    seg: 'Control ambulatorio',
    ges: 'Evaluación y cribado en el Examen de Medicina Preventiva del Adulto Mayor (EMPAM) en Atención Primaria de Salud (APS) · Programa Nacional del Adulto Mayor.',
    reconstrucciones: 'EUNACOM 2024 (Q#95) · EUNACOM 2022 (Q#108) · EUNACOM 2019 (Q#114) · EUNACOM 2015 (Q#82)',
    frecuencia: 'Alta rentabilidad · Concepto central en atención primaria, medicina preventiva y geriatría',
    svg: null,
    algoTitle: null,
    diagram: null,
    contexto: 'La fragilidad y la sarcopenia representan el sustrato biológico del declive funcional en la persona mayor. La fragilidad es un síndrome biológico multisistémico caracterizado por la pérdida de la reserva homeostática y de la capacidad de adaptación ante estresores menores, lo que predispone a caídas, discapacidad, hospitalización y muerte. No equivale a envejecimiento cronológico ni a discapacidad terminal: es un estado dinámico, prevenible y potencialmente reversible. Su detección sistemática mediante el fenotipo de Linda Fried y los instrumentos de la Valoración Geriátrica Integral (VGI) en el EMPAM permite instaurar programas de ejercicio multicomponente e intervenciones nutricionales que rescatan la autonomía funcional.',
    contentSections: [
      {
        subhead: '1. Concepto Biológico de Fragilidad y Fenotipo de Linda Fried',
        paragraphs: [
          'La <strong>fragilidad</strong> se define como un estado de vulnerabilidad biológica aumentada resultante del declive acumulativo de múltiples sistemas fisiológicos (inmune, neuroendocrino, osteomuscular y cardiovascular), mediado por senescencia celular, inflamación crónica de bajo grado (<em>inflammaging</em>), estrés oxidativo y disfunción mitocondrial. Este deterioro agota la reserva funcional orgánica, de modo que ante un estresor clínico menor (una infección urinaria no complicada, un cambio en la pauta farmacológica o un reposo en cama de 48 horas), el adulto mayor frágil experimenta una caída catastrófica y desproporcionada de su capacidad funcional.',
          'El modelo fenotípico más validado y empleado en investigación y clínica geriátrica es el <strong>Fenotipo de Linda Fried (Cardiovascular Health Study)</strong>, que evalúa 5 criterios objetivos (véase Tabla 10.22: Criterios de Fried de Fragilidad e Instrumentos de la VGI):',
          '• <strong>1. Pérdida involuntaria de peso:</strong> Pérdida no intencionada de ≥ 4.5 kg o ≥ 5% del peso corporal en el último año.',
          '• <strong>2. Agotamiento o fatiga autorreportada:</strong> Sentimiento de que "todo lo que hacía requería un esfuerzo inmenso" o "no podía ponerse en marcha" durante la última semana (preguntas de la escala CES-D).',
          '• <strong>3. Debilidad muscular (fuerza de prensión disminuida):</strong> Fuerza de prensión palmar reducida cuantificada mediante dinamometría hidráulica de mano, ajustada por sexo e índice de masa corporal (habitualmente &lt; 20-27 kg en hombres y &lt; 16 kg en mujeres).',
          '• <strong>4. Lentitud en la velocidad de la marcha:</strong> Tiempo prolongado para recorrer 4 metros a paso habitual (velocidad de marcha &lt; 0.8 m/s o &gt; 5-6 segundos en 4 metros).',
          '• <strong>5. Bajo nivel de actividad física:</strong> Gasto calórico semanal estimado reducido (&lt; 383 kcal/semana en varones o &lt; 270 kcal/semana en mujeres).',
          '<strong>Estratificación fenotípica:</strong> La presencia de <strong>0 criterios</strong> clasifica al paciente como <em>Robusto</em>; la presencia de <strong>1 o 2 criterios</strong> define el estadio de <strong>Prefragilidad</strong> (fase de altísima rentabilidad para intervenciones preventivas); y la presencia de <strong>≥ 3 criterios</strong> establece el diagnóstico formal de <strong>Síndrome de Fragilidad</strong>.'
        ]
      },
      {
        subhead: '2. Sarcopenia: Consenso Europeo EWGSOP2 y Criterios Diagnósticos',
        paragraphs: [
          'La <strong>sarcopenia</strong> es una enfermedad del músculo esquelético de base progresiva y generalizada, caracterizada por la pérdida acelerada de masa muscular, fuerza muscular y función física, asociada a un incremento significativo de caídas, fracturas, discapacidad y mortalidad (véase Tabla de Gravedad 10.22: Consenso Europeo EWGSOP2 de Sarcopenia).',
          'El Consenso Europeo <strong>EWGSOP2 (European Working Group on Sarcopenia in Older People, actualización 2019)</strong> revolucionó su enfoque clínico al posicionar a la <strong>fuerza muscular</strong> (y no a la masa) como el parámetro cardinal primario de sospecha y diagnóstico probable:',
          '• <strong>Paso 1 (Cribado clínico):</strong> Se pesquisa mediante el cuestionario autoadministrado <strong>SARC-F</strong> (evalúa fuerza, asistencia para caminar, levantarse de una silla, subir escaleras y caídas). Una puntuación ≥ 4 puntos predice sarcopenia e indica evaluación objetiva.',
          '• <strong>Paso 2 (Diagnóstico Probable de Sarcopenia):</strong> Documentación de <strong>baja fuerza muscular</strong>. Se mide mediante dinamometría manual (corte: &lt; 27 kg en varones y &lt; 16 kg en mujeres) o mediante la <strong>Prueba de levantarse de la silla (Chair Stand Test)</strong>: requerir más de 15 segundos para completar 5 levantamientos consecutivos de una silla sin ayudarse con los brazos. <em>La sola presencia de baja fuerza muscular confirma sarcopenia probable e impone el inicio inmediato de intervención terapéutica</em>.',
          '• <strong>Paso 3 (Confirmación Diagnóstica):</strong> Demostración de <strong>baja cantidad o calidad de masa muscular</strong> mediante técnicas de imagen corporal: Densitometría Ósea de cuerpo entero (DEXA - Dual-energy X-ray Absorptiometry) cuantificando el Índice de Masa Muscular Apendicular (IMAE &lt; 7.0 kg/m² en hombres y &lt; 5.5 kg/m² en mujeres) o Bioimpedanciometría Eléctrica (BIA).',
          '• <strong>Paso 4 (Determinación de Severidad):</strong> Sarcopenia Severa se diagnostica cuando a la baja fuerza muscular y a la baja masa muscular confirmada se añade un <strong>bajo rendimiento físico funcional</strong>, evaluado mediante velocidad de la marcha &lt; 0.8 m/s, test Timed Up and Go (TUG) ≥ 20 segundos o batería SPPB (Short Physical Performance Battery) ≤ 8 puntos.'
        ]
      },
      {
        subhead: '3. Valoración Geriátrica Integral (VGI) y el EMPAM en Chile',
        paragraphs: [
          'La <strong>Valoración Geriátrica Integral (VGI)</strong> es la tecnología diagnóstica nuclear de la medicina geriátrica. Consiste en un proceso diagnóstico interdisciplinario y multidimensional diseñado para identificar las capacidades y problemas clínicos, funcionales, mentales y sociales del adulto mayor, con el fin de elaborar un plan coordinado de tratamiento y seguimiento a largo plazo.',
          'La VGI abarca 4 esferas fundamentales evaluadas mediante instrumentos estructurados y validados:',
          '• <strong>1. Esfera Funcional:</strong> Evalúa la capacidad del individuo para desempeñarse en su entorno habitual. Se divide en: <em>Actividades Básicas de la Vida Diaria (ABVD)</em> mediante el <strong>Índice de Barthel</strong> (0 a 100 puntos: alimentación, baño, vestido, aseo personal, continencia vesical y fecal, uso de retrete, transferencias y deambulación; &lt; 20 dependencia total, 20-55 dependencia grave, 60-95 dependencia leve/moderada, 100 independiente) o Índice de Katz; y <em>Actividades Instrumentales de la Vida Diaria (AIVD)</em> mediante la <strong>Escala de Lawton y Brody</strong> (0 a 8 puntos: uso de teléfono, compras, preparación de comida, cuidado del hogar, lavado de ropa, uso de transporte, manejo de medicación y finanzas; sensible a pérdidas iniciales por deterioro cognitivo).',
          '• <strong>2. Esfera Mental (Cognitiva y Afectiva):</strong> Evaluación cognitiva mediante el <strong>Cuestionario de Pfeiffer (SPMSQ)</strong> (10 preguntas breves de orientación, memoria y cálculo; 0-2 errores normal, 3-4 leve, 5-7 moderado, 8-10 severo) y el Mini-Mental de Folstein (MMSE) o MoCA. La esfera afectiva se cribea con la <strong>Escala de Depresión Geriátrica de Yesavage (GDS-15)</strong> (puntuación ≥ 5 sugiere depresión activa).',
          '• <strong>3. Esfera Clínica y Nutricional:</strong> Registro exhaustivo de comorbilidades, polifarmacia y cribado nutricional mediante el <strong>Mini Nutritional Assessment (MNA)</strong> (&lt; 17 puntos desnutrición establecida, 17-23.5 riesgo de desnutrición).',
          '• <strong>4. Esfera Social:</strong> Evaluación del soporte familiar, cuidador principal, redes de apoyo y recursos económicos mediante la <strong>Escala de Valoración Sociofamiliar de Gijón</strong>.',
          'En el sistema público de salud de Chile (APS), el <strong>Examen de Medicina Preventiva del Adulto Mayor (EMPAM)</strong> aplica anualmente el instrumento <strong>EFAM-Chile (Evaluación Funcional del Adulto Mayor)</strong> en personas de 65 años y más, clasificándolas en: <em>Autovalente sin riesgo</em>, <em>Autovalente con riesgo</em> (derivado a talleres de prevención y actividad física) y <em>En riesgo de dependencia</em> (derivado a médico para VGI completa y manejo multifactorial).'
        ]
      },
      {
        subhead: '4. Intervenciones Basadas en Evidencia: Ejercicio Multicomponente y Nutrición',
        paragraphs: [
          'La evidencia médica contemporánea demuestra que el síndrome de fragilidad y la sarcopenia son entidades reversibles si se interviene oportunamente:',
          '• <strong>Ejercicio Físico Multicomponente (Pilar Angular):</strong> Es la intervención no farmacológica de mayor impacto clínico. El modelo estandarizado internacional <strong>Vivifrail</strong> prescribe un programa combinado de: 1) Ejercicio de fuerza y potencia muscular (contracciones contra resistencia progresiva para cuádriceps, glúteos y prensión); 2) Entrenamiento del equilibrio estático y dinámico (prevención directa de caídas); 3) Marcha funcional; y 4) Flexibilidad articular. Debe practicarse al menos 3 a 5 días a la semana.',
          '• <strong>Optimización Nutricional Proteico-Calórica:</strong> Los adultos mayores requieren un aporte proteico superior al adulto joven para superar la resistencia anabólica muscular: meta de <strong>1.2 a 1.5 g de proteínas por kg de peso corporal al día</strong> (en ausencia de insuficiencia renal avanzada terminal sin diálisis), distribuido homogéneamente en las tres comidas principales y enriquecido con aminoácidos ramificados (especialmente leucina 2.5 a 3 g por porción).',
          '• <strong>Vitamina D:</strong> Suplementación con Colecalciferol (800 a 2000 UI/día) si los niveles séricos de 25-hidroxivitamina D son inferiores a 20-30 ng/mL, mejorando la fuerza de las fibras musculares tipo II y reduciendo el riesgo de caídas.',
          '• <strong>Revisión Farmacológica:</strong> Desprescripción activa de fármacos sedantes, anticolinérgicos y anorexígenos que perpetúan la inmovilidad y la anorexia senil.'
        ]
      }
    ],
    table: {
      title: 'Criterios de Fried de Fragilidad e Instrumentos Cardinales de la Valoración Geriátrica Integral (VGI)',
      headers: ['Dominio / Criterio', 'Definición Operativa y Puntos de Corte', 'Herramienta Estandarizada / Escala', 'Utilidad Clínica en EUNACOM y APS'],
      rows: [
        ['Pérdida Involuntaria de Peso', 'Pérdida no intencionada ≥ 4.5 kg o ≥ 5% del peso basal en los últimos 12 meses', 'Registro antropométrico seriado de peso corporal e IMC', 'Criterio 1 de Fried · Alerta de sarcopenia, desnutrición o neoplasia oculta'],
        ['Agotamiento / Fatiga Subjetiva', 'Sensación autorreportada de que todo esfuerzo es insuperable ≥ 3 días/semana', 'Preguntas estructuradas escala CES-D de depresión', 'Criterio 2 de Fried · Marcador de declive psicobiológico y anergia'],
        ['Debilidad Muscular', 'Fuerza prensil disminuida en dinamometría (< 27 kg hombres, < 16 kg mujeres)', 'Dinamómetro hidráulico Jamar (o Chair Stand Test > 15 s)', 'Criterio 3 de Fried · Parámetro cardinal EWGSOP2 para Sarcopenia Probable'],
        ['Lentitud de la Marcha', 'Velocidad de marcha habitual reducida: tiempo > 5-6 s para recorrer 4 metros (< 0.8 m/s)', 'Test de marcha cronometrada de 4 metros a paso usual', 'Criterio 4 de Fried · Predictor potente de caídas, institucionalización y muerte'],
        ['Bajo Nivel de Actividad Física', 'Gasto calórico semanal mínimo (< 383 kcal/sem hombres, < 270 kcal/sem mujeres)', 'Cuestionario de actividad física para el anciano (Minnesota / IPAQ)', 'Criterio 5 de Fried · 0 criterios: Robusto; 1-2: Prefrágil; ≥ 3: Frágil'],
        ['Esfera Funcional Básica (ABVD)', 'Independencia para baño, vestido, alimentación, continencia y deambular', 'Índice de Barthel (0 a 100 puntos) / Índice de Katz (A a G)', 'Puntaje < 60 define dependencia funcional moderada a severa'],
        ['Esfera Instrumental (AIVD)', 'Capacidad para tareas comunitarias: teléfono, finanzas, transporte y remedios', 'Escala de Lawton y Brody (0 a 8 puntos)', 'Primera esfera que claudica ante deterioro cognitivo inicial'],
        ['Esfera Cognitiva de Cribado', 'Orientación temporoespacial, memoria biográfica y cálculo matemático simple', 'Cuestionario de Pfeiffer (SPMSQ) (0 a 10 errores)', '≥ 3 errores indica deterioro cognitivo que requiere estudio formal'],
        ['Esfera Nutricional', 'Cribado de pérdida de peso, apetito, movilidad y estrés agudo reciente', 'Mini Nutritional Assessment (MNA) (0 a 30 puntos)', '< 17 puntos confirma desnutrición calórico-proteica establecida']
      ]
    },
    severityTable: {
      title: 'Consenso Europeo EWGSOP2 para el Diagnóstico y Estadificación de Sarcopenia',
      headers: ['Nivel de Progresión', 'Criterio Diagnóstico EWGSOP2', 'Método Clínico / Umbrales', 'Acción Terapéutica Inmediata'],
      rows: [
        ['1. Sospecha Clínica', 'Cuestionario SARC-F alterado (evalúa fuerza, ayuda marcha, levantarse silla, escaleras, caídas)', 'Puntuación SARC-F ≥ 4 puntos', 'Proceder de inmediato a la medición cuantitativa de fuerza muscular'],
        ['2. Sarcopenia Probable', 'Disminución objetiva de la FUERZA MUSCULAR (parámetro primario obligatorio)', 'Dinamometría manual: < 27 kg (hombres) / < 16 kg (mujeres) Ó Chair Stand Test > 15 s (5 repeticiones)', 'SUFICIENTE para iniciar intervención: Ejercicio de fuerza multicomponente + aporte proteico 1.2-1.5 g/kg/d'],
        ['3. Sarcopenia Confirmada', 'Baja fuerza muscular + Disminución documentada de la MASA o CALIDAD MUSCULAR', 'DEXA de cuerpo entero: IMAE < 7.0 kg/m² (hombres) / < 5.5 kg/m² (mujeres) Ó Bioimpedanciometría (BIA)', 'Confirma diagnóstico anatomopatológico; optimizar nutrición con leucina y Vitamina D si sérica < 30 ng/mL'],
        ['4. Sarcopenia Severa', 'Baja fuerza muscular + Baja masa muscular + Bajo RENDIMIENTO FÍSICO funcional', 'Velocidad de marcha < 0.8 m/s Ó Timed Up and Go (TUG) ≥ 20 s Ó batería SPPB ≤ 8 puntos', 'Alto riesgo de caídas y dependencia; programa de rehabilitación motora intensiva y evaluación de ayudas técnicas']
      ]
    },
    vignette: 'Mujer de 78 años, autovalente con antecedente de osteoporosis e hipotiroidismo en tratamiento con levotiroxina y carbonato de calcio, acude a control en su consultorio de atención primaria. Su hija refiere que en el último año "ha bajado de peso sin hacer dieta" (pesaba 58 kg y actualmente pesa 52 kg; IMC 21.5 kg/m²), camina más lento arrastrando los pies y ya no sale a comprar porque "se cansa enseguida". En el examen físico: signos vitales normales. En la dinamometría manual registra una fuerza prensil de 13 kg en la mano dominante. En la prueba de velocidad de la marcha demora 7.2 segundos en recorrer 4 metros (0.55 m/s). En el cuestionario de Pfeiffer comete 1 error (normal). Su Índice de Barthel es de 95/100 y Lawton-Brody 6/8.',
    explicacion: 'La paciente cumple criterios diagnósticos inequívocos para Síndrome de Fragilidad según los Criterios de Linda Fried: 1) Pérdida involuntaria de peso (> 10% en 1 año; 6 kg perdidos de 58 kg basales); 2) Fatiga o agotamiento autorreportado; 3) Debilidad muscular demostrada por dinamometría palmar < 16 kg (13 kg); y 4) Lentitud de la marcha (< 0.8 m/s; 0.55 m/s). Al presentar 4 de los 5 criterios de Fried (se requieren ≥ 3), se confirma el diagnóstico de Fragilidad establecida. Asimismo, según el consenso europeo EWGSOP2, la presencia de baja fuerza muscular (< 16 kg) establece el diagnóstico de Sarcopenia Probable, y la velocidad de marcha < 0.8 m/s cataloga el cuadro como Sarcopenia Severa. La conducta prioritaria en APS es indicar un programa de ejercicio físico multicomponente adaptado (programa Vivifrail: fuerza muscular progresiva, marcha y equilibrio), asegurar aporte proteico de 1.2 a 1.5 g/kg/día, medir niveles de 25-OH-Vitamina D y descartar causas orgánicas secundarias de baja de peso.',
    keyPoints: [
      'La fragilidad es un síndrome de vulnerabilidad biológica y pérdida de reserva homeostática frente a estresores; es dinámica, prevenible y reversible.',
      'El fenotipo de Fried evalúa 5 criterios: baja de peso involuntaria, fatiga, debilidad muscular (dinamometría), marcha lenta y baja actividad física (≥ 3: Frágil; 1-2: Prefrágil).',
      'El consenso EWGSOP2 define la Sarcopenia Probable únicamente por baja fuerza muscular (dinamometría < 27 kg hombres / < 16 kg mujeres o Chair Stand Test > 15 s), lo que autoriza iniciar tratamiento inmediato.',
      'La Valoración Geriátrica Integral (VGI) abarca cuatro esferas: funcional (Barthel, Lawton-Brody), mental (Pfeiffer, Yesavage), clínica-nutricional (MNA) y social (Gijón).',
      'La intervención de primera línea con mayor nivel de evidencia para revertir fragilidad y sarcopenia es el ejercicio físico multicomponente (fuerza, equilibrio y marcha: Vivifrail) asociado a nutrición proteica (1.2-1.5 g/kg/día).'
    ],
    questions: [
      cleanQ(aeeData['10.22'][0]),
      cleanQ(aeeData['10.22'][1])
    ]
  },

  // ==========================================================================
  // TEMA 10.23: CAÍDAS EN EL ADULTO MAYOR, TRASTORNOS DE LA MARCHA Y FRACTURA DE CADERA GES [TIER 2 · 2-3 PÁGINAS]
  // ==========================================================================
  {
    id: 'neuro-23',
    classId: 'neuro-23',
    tier: 2,
    blockNum: 5,
    blockName: 'Geriatría Clínica y Grandes Síndromes Geriátricos',
    topicLabel: '10.23',
    title: 'Caídas en el Adulto Mayor, Trastornos de la Marcha y Fractura de Cadera GES',
    perfilCode: '1.07.1.001',
    dx: 'Específico',
    tx: 'Inicial / Derivación',
    seg: 'Urgencia traumatológica / Ortogeriatría',
    ges: 'Garantía Explícita en Salud (GES N° 45): Tratamiento Quirúrgico de la Fractura de Cadera en personas de 65 años y más · Confirmación diagnóstica y resolución quirúrgica dentro de 48 horas desde el ingreso hospitalario, profilaxis tromboembólica obligatoria y rehabilitación precoz.',
    reconstrucciones: 'EUNACOM Diciembre 2024 (Q#82) · EUNACOM Julio 2023 (Q#109) · EUNACOM 2020 (Q#77) · EUNACOM 2018 (Q#121) · EUNACOM 2016 (Q#64)',
    frecuencia: 'Máxima prioridad clínica · Patología GES angular evaluada con alta frecuencia en traumatología, urgencias y geriatría',
    svg: null,
    algoTitle: 'Algoritmo de Manejo Integral del Síndrome de Caídas y Co-Manejo Ortogeriátrico de Fractura de Cadera GES N° 45',
    diagram: flow('Algoritmo de Abordaje de Caídas y Fractura de Cadera GES', [
      { t: 'Adulto Mayor que Sufre Caída a Nivel o Presenta Trastorno de la Marcha', s: 'Descartar síncope, evento neurovascular agudo y compromiso hemodinámico · Evaluar cadera', type: 'acc' },
      { t: 'Examen Físico: Búsqueda de la Deformidad Clásica de Fractura de Cadera', s: 'Extremidad acortada + Rotación externa + Leve abducción del muslo + Impotencia funcional total', type: 'warn' },
      { k: 'split', q: '¿Presenta Deformidad Clásica o Dolor Inguinal Agudo con Impotencia Funcional?', s: 'Radiografía de pelvis AP y cadera afectada axial inmediata',
        ll: 'Fractura Confirmada (Garantía GES N° 45)',
        left: { t: 'Protocolo de Co-Manejo Ortogeriátrico Urgente', s: 'Cirugía meta < 48 h · Tromboprofilaxis con HBPM por 28-35 d · Analgesia multimodal · Carga precoz < 24-48 h', type: 'crit' },
        rl: 'Sin Fractura (Caída sin Deformidad Ósea)',
        right: { t: 'Evaluación Biomecánica del Riesgo de Recaída', s: 'Timed Up and Go (TUG > 12 s) · Estación unipodal < 5 s · Corregir factores extrínsecos e fármacos', type: 'dec' }
      },
      { t: 'Selección del Procedimiento Quirúrgico según Localización Anatómica', s: 'Intracapsular (cuello femoral desplazada): Hemiartroplastia o Prótesis Total · Extracapsular (pertrocantérica): Osteosíntesis (clavo endomedular/DHS)', type: 'acc' },
      { t: 'Prevención Secundaria Integral y Tratamiento de Osteoporosis Subyacente', s: 'Calcio 1000-1200 mg/d + Vitamina D 800-2000 UI/d · Antirreabsortivo (Ácido Zoledrónico EV o Denosumab SC) · Taller prevención caídas', type: 'acc' }
    ]),
    contexto: 'Las caídas constituyen uno de los grandes síndromes geriátricos y la principal causa de traumatismo mayor e institucionalización en el adulto mayor. Aproximadamente el 30% de las personas mayores de 65 años que viven en la comunidad sufre al menos una caída al año, cifra que se eleva al 50% en mayores de 80 años e institucionalizados. El 90% de las fracturas de cadera se origina por una caída a nivel desde la propia altura sobre hueso osteoporótico. En Chile, la Fractura de Cadera en mayores de 65 años está protegida por la Garantía GES N° 45, cuya exigencia legal de intervención quirúrgica dentro de 48 horas y manejo ortogeriátrico integral reduce sustantivamente la mortalidad a un año, que de lo contrario alcanza un alarmante 25-30%.',
    contentSections: [
      {
        subhead: '1. Epidemiología, Mecanismo Biomecánico y Consecuencias de las Caídas',
        paragraphs: [
          'Una caída se define como la consecuencia de cualquier acontecimiento que precipita al paciente al suelo contra su voluntad. En la población geriátrica, más del <strong>90% de las caídas corresponden a caídas a nivel</strong> (producidas desde la propia altura durante la deambulación o cambios posturales), y no a caídas de altura ni accidentes vehiculares.',
          'Las consecuencias abarcan: 1) Consecuencias físicas agudas: contusiones, desgarros, hematoma subdural y fracturas (cadera, muñeca [Colles], húmero proximal y pelvis); 2) Permanencia prolongada en el suelo (incapacidad para levantarse por más de 1 hora): gatilla rabdomiolisis, deshidratación, hipotermia, úlceras por presión e infección respiratoria; y 3) <strong>Síndrome post-caída (Ptophobia)</strong>: trastorno psicológico caracterizado por un miedo intenso a volver a caer, lo que induce una restricción voluntaria severa de la deambulación, pérdida acelerada de masa muscular, dependencia funcional y aislamiento social (véase Algoritmo 10.23).'
        ]
      },
      {
        subhead: '2. Factores Etiológicos Intrínsecos y Extrínsecos Determinantes',
        paragraphs: [
          'La etiología de las caídas es multifactorial, resultante de la interacción entre factores intrínsecos del paciente y factores extrínsecos de su entorno (véase Tabla 10.23: Evaluación del Riesgo de Caídas y Protocolo GES):',
          '• <strong>Factores Intrínsecos:</strong> Declive biológico sensorial (disminución de agudeza visual por cataratas o degeneración macular, hipoacusia, pérdida de la sensibilidad propioceptiva vibratoria por neuropatía); patologías musculoesqueléticas (sarcopenia, artrosis de rodilla/cadera, deformidades podálicas); patologías neurológicas (secuela de ACV, Enfermedad de Parkinson, hidrocefalia normotensiva, demencia); y desbalances cardiovasculares (arritmias, estenosis aórtica severa e <strong>hipotensión ortostática</strong>, definida como la caída de PAS ≥ 20 mmHg o PAD ≥ 10 mmHg dentro de los 3 minutos posteriores a la bipedestación).',
          '• <strong>Factores Farmacológicos (Polifarmacia):</strong> Constituyen el factor de riesgo modificable más potente. Los fármacos inductores de sedación, ataxia, confusión o hipotensión duplican el riesgo de caídas: psicofármacos (benzodiacepinas, antidepresivos, antipsicóticos, inductores Z), antihipertensivos (betabloqueadores como atenolol por producir bradicardia e hipoperfusión, diuréticos por depleción de volumen, vasodilatadores) e hipoglicemiantes (sulfonilureas por hipoglicemia).',
          '• <strong>Factores Extrínsecos Ambientales (30-50% de las causas):</strong> Obstáculos en el hogar: alfombras no fijadas al suelo, iluminación deficiente o deslumbrante, cables sueltos, suelos resbaladizos, ausencia de barras de sujeción en baños y duchas, tazas de baño demasiado bajas, escalones sin pasamanos y calzado inapropiado (chancletas, pantuflas sin talón, zapatos de suela resbaladiza o tacones).'
        ]
      },
      {
        subhead: '3. Evaluación Funcional de la Marcha y Equilibrio: Test TUG y Estación Unipodal',
        paragraphs: [
          'Todo adulto mayor que consulte por caídas o presente factores de riesgo debe ser evaluado con pruebas biomecánicas estandarizadas validadas en el EMPAM:',
          '• <strong>Test Timed Up and Go (TUG):</strong> Cuantifica la movilidad funcional, el equilibrio dinámico y la velocidad de reacción. El paciente se sienta en una silla estándar con apoyabrazos, se le indica levantarse (sin usar los brazos si es posible), caminar 3 metros a paso cómodo y seguro, girar 180°, regresar a la silla y sentarse de nuevo. Interpretación: <strong>&lt; 10 segundos:</strong> Movilidad normal e independiente; <strong>10 a 12 segundos:</strong> Límite de normalidad para adultos mayores; <strong>&gt; 12 a 14 segundos:</strong> <em>Alto riesgo de caídas</em> (requiere intervención kinesiológica y revisión ambiental); <strong>&gt; 20 segundos:</strong> Fragilidad física marcada y dependencia motora.',
          '• <strong>Test de Estación Unipodal:</strong> El paciente intenta mantenerse sobre una sola pierna con los ojos abiertos y brazos cruzados sobre el pecho. La incapacidad para sostener la postura unipodal durante <strong>al menos 5 segundos</strong> identifica un déficit severo de equilibrio estático y un riesgo triplicado de fracturas por caída.'
        ]
      },
      {
        subhead: '4. Fractura de Cadera: Presentación Clínica Clásica y Clasificación Anatómica',
        paragraphs: [
          'La fractura del extremo proximal del fémur es la complicación más devastadora del síndrome de caídas. Su sospecha clínica se fundamenta en una presentación semiológica clásica que constituye una de las preguntas de mayor reiteración histórica en el EUNACOM:',
          '<em>Semiología Cardinal EUNACOM:</em> Tras una caída a nivel, el paciente se presenta con <strong>imposibilidad absoluta para ponerse de pie o caminar</strong> (impotencia funcional), dolor intenso en la región inguinal irradiado al muslo y rodilla, y una postura patognomónica de la extremidad inferior afectada caracterizada por: <strong>1) Acortamiento evidente del miembro</strong> (por tracción cefálica de los músculos glúteos e iliopsoas); <strong>2) Rotación externa marcada</strong> (el borde lateral del pie contacta con la camilla por la acción de la gravedad y de los músculos rotadores externos); y <strong>3) Leve abducción del muslo</strong>.',
          '<strong>Clasificación Anatómica y Decisión Quirúrgica</strong> (véase Tabla de Gravedad 10.23: Clasificación Anatómica de Fracturas de Cadera):',
          '• <strong>1. Fracturas Intracapsulares (Del Cuello Femoral):</strong> Abarcan las fracturas subcapitales, transcervicales y basicervicales. La cápsula articular envuelve los vasos retinaculares nutricios derivados de la arteria circunfleja femoral medial que ascienden hacia la cabeza femoral. El desplazamiento óseo desgarra estos vasos terminales, condicionando un riesgo extremadamente alto de <strong>necrosis avascular de la cabeza femoral (NAV)</strong> y de pseudoartrosis. En el adulto mayor frágil con fractura desplazada (Garden III y IV), la osteosíntesis fracasa; el tratamiento de elección es la <strong>artroplastia de cadera</strong> (Hemiartroplastia bipolar en pacientes con baja demanda funcional o Prótesis Total de Cadera en pacientes activos sin deterioro cognitivo).',
          '• <strong>2. Fracturas Extracapsulares (Pertrocantéricas y Subtrocantéricas):</strong> Ocurren en la región metafisaria entre el trocánter mayor y menor. Es una zona de hueso esponjoso profusamente vascularizada por ramas musculares extracapsulares; el riesgo de necrosis avascular es prácticamente nulo y la consolidación ósea es excelente. El tratamiento de elección es la <strong>osteosíntesis biológica</strong> mediante implantes de fijación interna: Clavo Cefalomedular endomedular (clavo Gamma / PFN) o tornillo-placa deslizante (DHS - Dynamic Hip Screw).'
        ]
      },
      {
        subhead: '5. Garantía GES N° 45 y Protocolo de Co-Manejo Ortogeriátrico',
        paragraphs: [
          'El tratamiento de la fractura de cadera en personas de 65 años y más está normado por la <strong>Garantía Explícita en Salud (GES N° 45)</strong> en Chile. Sus pilares clínicos obligatorios son:',
          '• <strong>Meta Quirúrgica &lt; 48 Horas:</strong> Todo paciente debe ser operado dentro de las primeras 48 horas desde su ingreso al hospital. La cirugía precoz reduce drásticamente la tasa de complicaciones médicas intrahospitalarias (neumonía intrahospitalaria, delirium, atelectasias, trombosis venosa profunda y úlceras por presión) y disminuye a la mitad la mortalidad perioperatoria.',
          '• <strong>Analgesia Multimodal Precoz:</strong> Bloqueo nervioso periférico de fascia ilíaca o femoral ecoguiado en el servicio de urgencia, complementado con Paracetamol reglado EV; minimiza el requerimiento de opioides sistémicos y previene el delirium postoperatorio.',
          '• <strong>Profilaxis Tromboembólica Obligatoria:</strong> Administrar <strong>Heparina de Bajo Peso Molecular (Enoxaparina 40 mg SC al día)</strong> o Fondaparinux iniciada al ingreso, suspendiéndola 12 horas antes de la anestesia raquídea y reiniciándola 12 horas después de la cirugía. La tromboprofilaxis DEBE extenderse estrictamente por <strong>28 a 35 días</strong> en el postoperatorio.',
          '• <strong>Rehabilitación y Bipedestación Precoz:</strong> Movilización fuera de la cama y bipedestación con carga tutelada dentro de las primeras <strong>24 a 48 horas postoperatorias</strong> coordinada por kinesiología.',
          '• <strong>Prevención Secundaria de Nuevas Fracturas:</strong> Evaluación de osteoporosis subyacente mediante densitometría ósea post-alta, inicio de Calcio (1000-1200 mg/día), Vitamina D (800-2000 UI/día) y terapia antirreabsortiva parenteral (Ácido Zoledrónico 5 mg EV anual o Denosumab 60 mg SC semestral).'
        ]
      }
    ],
    table: {
      title: 'Evaluación Clínica del Riesgo de Caídas, Factores Determinantes y Protocolo Ortogeriátrico de Fractura de Cadera GES N° 45',
      headers: ['Componente / Test', 'Criterios Operativos y Valores de Corte', 'Mecanismo / Hallazgo Clínico', 'Conducta Médica Inmediata'],
      rows: [
        ['Test Timed Up and Go (TUG)', 'Tiempo para levantarse, caminar 3 m, girar y sentarse: > 12-14 s (anormal)', 'Refleja inestabilidad dinámica, debilidad de cuádriceps y lentitud neuromuscular', 'Derivar a taller de equilibrio/marcha (Vivifrail) y kinesiología motora'],
        ['Test Estación Unipodal', 'Tiempo sosteniéndose en una sola extremidad sin apoyo: < 5 segundos (anormal)', 'Pérdida de equilibrio estático y respuesta propioceptiva protectora ante tropiezos', 'Alto riesgo de caída; evaluar uso de bastón o ayuda técnica de marcha'],
        ['Factores Intrínsecos', 'Déficit visual, neuropatía periférica, sarcopenia, hipotensión ortostática', 'Caída de PAS ≥ 20 mmHg o PAD ≥ 10 mmHg a los 3 min de bipedestación', 'Ajustar dosis antihipertensivas, hidratación, medias de compresión gradual'],
        ['Factores Fármacos de Riesgo', 'Benzodiacepinas, antidepresivos, antipsicóticos, betabloqueadores (atenolol)', 'Causan sedación, ataxia, bradicardia, retardo de reflejos posturales e hipotensión', 'Conciliación farmacológica y desprescripción gradual de psicotrópicos'],
        ['Factores Extrínsecos', 'Alfombras sueltas, baños sin barras de apoyo, cables en el suelo, calzado sin talón', 'Desencadenan tropiezos y resbalones mecánicos en el 40% de las caídas', 'Intervención de terapia ocupacional para adaptación ambiental domiciliaria'],
        ['Semiología Fractura Cadera', 'Extremidad ACORTADA + ROTACIÓN EXTERNA + LEVE ABDUCCIÓN + Impotencia total', 'Acción muscular desbalanceada de iliopsoas, glúteos y rotadores sobre fémur fracturado', 'Inmovilización suave, analgesia multimodal y radiografía de pelvis/cadera AP'],
        ['Garantía Oportunidad GES N° 45', 'Resolución quirúrgica dentro de 48 horas desde el ingreso hospitalario', 'Evita claudicación hemodinámica, escaras, trombosis y neumonía intrahospitalaria', 'Pabellón prioritario con anestesia regional y profilaxis antibiótica precoz'],
        ['Tromboprofilaxis GES N° 45', 'Enoxaparina 40 mg SC cada 24 horas iniciada al ingreso y postoperatorio', 'Riesgo masivo de TVP/TEP por inmovilidad y daño tisular traumatológico', 'Mantener estrictamente durante 28 a 35 días posteriores a la cirugía']
      ]
    },
    severityTable: {
      title: 'Clasificación Anatómica de las Fracturas de Cadera en el Adulto Mayor: Implicancias Vasculares y Decisión Quirúrgica',
      headers: ['Tipo Anatómico', 'Localización y Compromiso Capsular', 'Irrigación Sanguínea y Riesgo Vascular', 'Conducta Quirúrgica de Elección en el Adulto Mayor'],
      rows: [
        ['Intracapsular No Desplazada (Garden I - II)', 'Subcapital o transcervical sin desplazamiento ni angulación de trabéculas', 'Vasos retinaculares preservados; riesgo moderado de necrosis avascular (NAV)', 'Osteosíntesis percutánea con tornillos canulados o artroplastia según reserva funcional'],
        ['Intracapsular Desplazada (Garden III - IV)', 'Subcapital o transcervical con desplazamiento completo y disrupción trabecular', 'Ruptura completa de vasos retinaculares; ALTO riesgo de necrosis avascular y pseudoartrosis', 'Hemiartroplastia de cadera (bipolar) en anciano frágil Ó Prótesis Total en autovalente activo'],
        ['Extracapsular Pertrocantérica', 'Línea intertrocantérica entre trocánter mayor y menor (zona metafisaria)', 'Excelente vascularización por ramas musculares; riesgo de NAV prácticamente nulo', 'Osteosíntesis con Clavo Cefalomedular (Gamma/PFN) o Tornillo Placa Deslizante (DHS)'],
        ['Extracapsular Subtrocantérica', 'Por debajo del trocánter menor (hasta 5 cm distal a la cortical femoral)', 'Zona cortical diafisaria sometida a grandes fuerzas biomecánicas de cizallamiento', 'Osteosíntesis con Clavo Endomedular largo bloqueado para estabilidad axial']
      ]
    },
    vignette: 'Mujer de 82 años, con antecedente de hipertensión arterial y fibrilación auricular crónica tratada con atenolol y apixabán, tropieza con una alfombra en el pasillo de su casa y cae desde su propia altura golpeándose la región glútea derecha. Inmediatamente experimenta dolor inguinal intolerable que le impide ponerse de pie. Es traída en ambulancia a la urgencia. Al examen físico: la extremidad inferior derecha se encuentra notablemente acortada, con rotación externa marcada del muslo y pie apoyado sobre su borde lateral, y dolor exquisito a la palpación anterior de la ingle y movilización suave. No presenta déficit neurovascular distal. La radiografía de pelvis AP y cadera derecha muestra una fractura subcapital de cuello femoral desplazada (Garden IV).',
    explicacion: 'El cuadro clínico corresponde a la presentación clásica e inequívoca de una fractura de cadera intracapsular desplazada: antecedente de caída a nivel en una mujer mayor con factores de riesgo intrínsecos (uso de betabloqueadores como atenolol que aumentan el riesgo de caídas por bradicardia/hipotensión) y extrínsecos (alfombra suelta), asociada a la tríada semiológica patognomónica de acortamiento de la extremidad, rotación externa y leve abducción con impotencia funcional total para la marcha. Al ser una fractura intracapsular desplazada (Garden IV), los vasos retinaculares nutricios de la cabeza femoral están desgarrados, con un riesgo prohibitivo de necrosis avascular y falla de osteosíntesis, por lo que la indicación quirúrgica de elección es el reemplazo protésico (hemiartroplastia o prótesis total). La paciente ingresa bajo la Garantía GES N° 45, que exige resolución quirúrgica antes de 48 horas, analgesia multimodal con bloqueo regional, tromboprofilaxis con HBPM por 28-35 días y rehabilitación precoz.',
    keyPoints: [
      'Más del 90% de las fracturas de cadera en el adulto mayor son secundarias a caídas a nivel desde su propia altura sobre hueso osteoporótico.',
      'La tríada semiológica patognomónica de fractura de cadera es: extremidad inferior acortada, en rotación externa y con impotencia funcional total para la marcha.',
      'En fracturas intracapsulares desplazadas (cuello femoral), la ruptura de los vasos retinaculares impone artroplastia protésica (hemiartroplastia/total) por alto riesgo de necrosis avascular.',
      'En fracturas extracapsulares (pertrocantéricas), la rica vascularización metafisaria permite la consolidación ósea mediante osteosíntesis (clavo cefalomedular o DHS).',
      'La Garantía GES N° 45 exige tratamiento quirúrgico antes de 48 horas desde el ingreso, tromboprofilaxis obligatoria con HBPM durante 28 a 35 días y movilización precoz en 24-48 horas.'
    ],
    questions: [
      cleanQ(aeeData['10.23'][0]),
      cleanQ(aeeData['10.23'][1])
    ]
  },

  // ==========================================================================
  // TEMA 10.24: POLIFARMACIA, CRITERIOS DE BEERS / STOPP-START E INCONTINENCIA URINARIA [TIER 2 · 2-3 PÁGINAS]
  // ==========================================================================
  {
    id: 'neuro-24',
    classId: 'neuro-24',
    tier: 2,
    blockNum: 5,
    blockName: 'Geriatría Clínica y Grandes Síndromes Geriátricos',
    topicLabel: '10.24',
    title: 'Polifarmacia, Criterios de Beers / STOPP-START e Incontinencia Urinaria en la Persona Mayor',
    perfilCode: '1.07.3.007',
    dx: 'Específico',
    tx: 'Inicial',
    seg: 'Control ambulatorio',
    ges: 'Sin garantía GES directa · Evaluación integral en APS, control de multimorbilidad en el Programa del Adulto Mayor y cribado preventivo en el EMPAM.',
    reconstrucciones: 'EUNACOM Julio 2019 (Q#127) · EUNACOM Diciembre 2018 (Q#121) · EUNACOM Julio 2016 (Q#9 y Q#160) · EUNACOM Julio 2015 (Q#108)',
    frecuencia: 'Alta rentabilidad · Prescripción prudente en geriatría, uroginecología geriátrica y farmacovigilancia',
    svg: null,
    algoTitle: 'Algoritmo de Revisión Sistemática de Polifarmacia y Manejo Escalonado de la Incontinencia Urinaria Geriátrica',
    diagram: flow('Algoritmo de Conciliación Farmacológica e Incontinencia Urinaria', [
      { t: 'Adulto Mayor con Polifarmacia (≥ 5 Fármacos) o Incontinencia Urinaria', s: 'Revisión periódica de la bolsa de medicamentos en cada control de salud o transición asistencial', type: 'acc' },
      { t: 'Pesquisa de Prescripción Potencialmente Inapropiada (Criterios Beers / STOPP)', s: 'Identificar benzodiacepinas, anticolinérgicos, AINEs crónicos y sulfonilureas de acción prolongada', type: 'warn' },
      { k: 'split', q: '¿Presenta Fármacos Inapropiados o Sospecha de Cascada Terapéutica?', s: 'Aplicación de criterios Beers 2023 / STOPP-START v3',
        ll: 'Fármacos Inapropiados Detectados',
        left: { t: 'Desprescripción Estructurada y Segura', s: 'Retiro gradual de BZD · Suspender glibenclamida si HbA1c < 8% · Suspender AINEs en HTA/IC · Ajustar donepecilo si diarrea', type: 'crit' },
        rl: 'Tratamiento Médico Optimizado',
        right: { t: 'Evaluación Dirigida de Incontinencia Urinaria', s: 'Descartar causas transitorias (DIAPPERS) · Orina completa + Urocultivo · Medir residuo postmiccional', type: 'dec' }
      },
      { t: 'Clasificación de Incontinencia Urinaria Crónica', s: 'Urgencia (vejiga hiperactiva): escapes imperiosos · Esfuerzo: maniobras Valsalva · Rebose: goteo con RPM > 200 mL', type: 'acc' },
      { t: 'Manejo Terapéutico Escalonado Racional', s: '1ª Línea: Medidas conductuales y ejercicios de Kegel · 2ª Línea Urgencia: Anticolinérgicos (Oxibutinina) o Mirabegrón (agonista β3)', type: 'acc' }
    ]),
    contexto: 'La polifarmacia (consumo habitual de ≥ 5 medicamentos) y la prescripción potencialmente inapropiada representan una de las mayores amenazas para la salud del adulto mayor. Los cambios farmacocinéticos y farmacodinámicos del envejecimiento aumentan drásticamente la susceptibilidad a reacciones adversas medicamentosas (RAM), interacciones farmacológicas y cascadas de prescripción. Los Criterios de Beers (AGS 2023) y STOPP/START proporcionan directrices explícitas para desprescribir fármacos de alto riesgo como benzodiacepinas, AINEs, anticolinérgicos y sulfonilureas prolongadas. Paralelamente, la incontinencia urinaria afecta a un tercio de las personas mayores, deteriorando la calidad de vida y precipitando institucionalización; su manejo escalonado exige descartar causas transitorias y fármacos desencadenantes antes de iniciar terapias específicas.',
    contentSections: [
      {
        subhead: '1. Farmacocinética, Farmacodinámica del Envejecimiento y Cascada de Prescripción',
        paragraphs: [
          'El envejecimiento fisiológico altera profundamente los parámetros que rigen la biodisponibilidad y acción de los medicamentos:',
          '• <strong>Cambios Farmacocinéticos:</strong> 1) <em>Composición corporal:</em> Disminuye el agua corporal total (menor volumen de distribución para fármacos hidrosolubles como digoxina, litio o alcohol, aumentando su concentración plasmática máxima) y aumenta la proporción de grasa corporal (mayor volumen de distribución para fármacos liposolubles como diazepam y benzodiacepinas, prolongando sustantivamente su vida media de eliminación de 24 a más de 72 horas con efecto sedante acumulativo); 2) <em>Metabolismo hepático:</em> Disminución de la masa hepática y del flujo sanguíneo esplácnico con declive de las reacciones oxidativas del citocromo P450 (fase I), lo que prolonga la vida media de fármacos con aclaramiento hepático de primer paso; y 3) <em>Eliminación renal:</em> Reducción progresiva del filtrado glomerular (declive de ~1 mL/min/año a partir de los 40 años). <em>Regla de Oro:</em> Una creatinina sérica en rango normal (0.8-1.0 mg/dL) NO descarta insuficiencia renal en un anciano sarcopénico; siempre debe calcularse el Clearance de Creatinina estimado mediante la fórmula de Cockcroft-Gault para ajustar fármacos de eliminación renal estrecha.',
          '• <strong>Cambios Farmacodinámicos:</strong> Aumento de la sensibilidad de los receptores cerebrales a sedantes y opioides (mayor depresión del SNC a dosis convencionales) y disminución de la sensibilidad barorrefleja y de los receptores beta-adrenérgicos (mayor propensión a hipotensión ortostática ante antihipertensivos).',
          '• <strong>Cascada de Prescripción:</strong> Fenómeno iatrogénico en el cual el efecto adverso de un medicamento se interpreta erróneamente como una nueva condición patológica, lo que lleva a la prescripción de un segundo fármaco para tratar el síntoma provocado por el primero. Ejemplos clásicos de examen: amlodipino produce edema maleolar -&gt; se indica furosemida; AINEs elevan la presión arterial -&gt; se agrega un segundo antihipertensivo; donepecilo causa diarrea e incontinencia de urgencia colinérgica -&gt; se indica oxibutinina anticolinérgica (véase Algoritmo 10.24).'
        ]
      },
      {
        subhead: '2. Criterios de Beers (AGS 2023) y STOPP/START: Fármacos de Alto Riesgo',
        paragraphs: [
          'Los <strong>Criterios de Beers de la American Geriatrics Society (AGS 2023)</strong> y los criterios europeos <strong>STOPP/START (Screening Tool of Older Persons\' Prescriptions / Screening Tool to Alert to Right Treatment, versión 3)</strong> identifican medicamentos cuyos riesgos superan sus beneficios en adultos mayores (véase Tabla 10.24: Fármacos de Alto Riesgo e Incontinencia Urinaria):',
          '• <strong>Benzodiacepinas y Sedantes Z (Zolpidem, Zopiclona):</strong> Deben evitarse siempre. Multiplican por cuatro el riesgo de caídas, fracturas de cadera, deterioro cognitivo, delirium y accidentes de tránsito. En el insomnio geriátrico, la primera línea son las medidas no farmacológicas de higiene del sueño.',
          '• <strong>Anticolinérgicos y Antihistamínicos de 1ª Generación:</strong> Clorfenamina, hidroxicina, amitriptilina, pargeverina, ciclobenzaprina. Bloquean los receptores muscarínicos periféricos y centrales, provocando boca seca, estreñimiento severo, retención urinaria aguda, visión borrosa, confusión y agravamiento del deterioro cognitivo.',
          '• <strong>Antiinflamatorios No Esteroidales (AINEs):</strong> Ibuprofeno, ketorolaco, diclofenaco, naproxeno. Su uso crónico está formalmente contraindicado por inducir hemorragia digestiva alta, falla renal aguda por vasoconstricción de la arteriola aferente, empeoramiento de hipertensión arterial y descompensación de insuficiencia cardíaca por retención hidrosalina. El analgésico de primera línea es el Paracetamol; en dolor osteoarticular refractario con HTA o falla cardíaca, se prefiere titular opioides débiles (Tramadol) antes que AINEs orales.',
          '• <strong>Sulfonilureas de Acción Prolongada (Glibenclamida):</strong> <em>Regla de Oro en Diabetes Geriátrica:</em> Presenta un riesgo inaceptable de hipoglicemia severa y prolongada por acumulación de metabolitos activos. En mayores de 75 años, las metas de hemoglobina glicosilada son más laxas (HbA1c &lt; 8.0-8.5%). Si un adulto mayor en tratamiento con glibenclamida presenta una HbA1c &lt; 7.0-7.5% o normal, <strong>la conducta mandatoria e inmediata es suspender la glibenclamida</strong> para erradicar el riesgo de hipoglicemias potencialmente fatales.'
        ]
      },
      {
        subhead: '3. Incontinencia Urinaria en la Persona Mayor: Fisiopatología y Clasificación',
        paragraphs: [
          'La incontinencia urinaria es la pérdida involuntaria de orina demostrable objetivamente que condiciona un problema social e higiénico. Afecta al 30-50% de las mujeres mayores y a más del 50% de los pacientes institucionalizados.',
          '<strong>Incontinencia Urinaria Transitoria (Causas Reversibles - Mnemotecnia DIAPPERS):</strong>',
          '• <strong>D:</strong> Delirium / estado confusional agudo.',
          '• <strong>I:</strong> Infección del tracto urinario (ITU sintomática).',
          '• <strong>A:</strong> Atrofia urogenital (vaginitis/uretritis atrófica por hipoestrogenismo).',
          '• <strong>P:</strong> Psicológica (depresión severa con abandono del autocuidado).',
          '• <strong>P:</strong> Farmacológica (diuréticos potentes, anticolinérgicos, sedantes, calcioantagonistas).',
          '• <strong>E:</strong> Exceso de diuresis (hiperglicemia descompensada, hipercalcemia, sobrecarga hídrica).',
          '• <strong>R:</strong> Restricción de la movilidad (artrosis severa, postración).',
          '• <strong>S:</strong> Retención fecal (impactación fecal / fecaloma que comprime la base vesical).',
          '<strong>Incontinencia Urinaria Crónica o Establecida</strong> (véase Tabla de Gravedad 10.24: Diagnóstico Diferencial de Incontinencia Urinaria):',
          '• <strong>1. Incontinencia de Urgencia (Vejiga Hiperactiva "Húmeda"):</strong> Pérdida involuntaria de orina precedida inmediatamente por un deseo miccional imperioso, súbito e incontrolable ("no alcanzo a llegar al baño"). Fisiopatología: contracciones involuntarias no inhibidas del músculo detrusor durante la fase de llenado vesical. Es el tipo más frecuente en personas mayores de ambos sexos.',
          '• <strong>2. Incontinencia de Esfuerzo (Estrés):</strong> Pérdida involuntaria de pequeñas cantidades de orina sincronizada con maniobras que aumentan la presión intraabdominal (toser, estornudar, reírse, levantar peso o agacharse). Fisiopatología: debilidad del piso pélvico e hipermovilidad uretral (por multiparidad y déficit estrogénico) o incompetencia del esfínter uretral interno.',
          '• <strong>3. Incontinencia por Rebose (Overflow):</strong> Pérdida involuntaria por goteo continuo o intermitente asociada a una vejiga sobredistendida crónicamente con incapacidad de vaciamiento completo. Fisiopatología: obstrucción mecánica del tracto de salida (hiperplasia prostática benigna severa, estenosis uretral) o vejiga acontráctil hipoactiva (neuropatía diabética, lesión medular sacra, fármacos anticolinérgicos). Se confirma por un <strong>Residuo Postmiccional (RPM) elevado &gt; 150-200 mL</strong> cuantificado por ecografía vesical o cateterismo.',
          '• <strong>4. Incontinencia Funcional:</strong> Pérdida de orina debida exclusivamente a limitaciones físicas (inmovilidad severa, dolor osteoarticular) o cognitivas (demencia avanzada) que impiden al paciente acceder a tiempo al inodoro, con tracto urinario fisiológicamente intacto.'
        ]
      },
      {
        subhead: '4. Abordaje Diagnóstico y Tratamiento Escalonado de la Incontinencia',
        paragraphs: [
          'El estudio diagnóstico inicial incluye: anamnesis dirigida (diario miccional de 3 días), examen físico ginecológico y rectal (evaluar prolapsos genitales, atrofia de mucosa, tono del esfínter anal y volumen prostático), sedimento de orina y urocultivo (para descartar infección urinaria activa) y <strong>medición ecográfica del residuo postmiccional (RPM)</strong>.',
          'El tratamiento sigue un esquema escalonado riguroso:',
          '• <strong>Primera Línea Universal (No Farmacológica):</strong> Modificaciones del estilo de vida (control de peso, evitar irritantes vesicales como café, mate, té y alcohol; restringir ingesta hídrica nocturna), entrenamiento vesical con micciones programadas cada 2 a 3 horas y <strong>ejercicios de fortalecimiento muscular del suelo pélvico (ejercicios de Kegel)</strong> con kinesioterapeuta especializado.',
          '• <strong>Segunda Línea en Incontinencia de Urgencia:</strong> Farmacoterapia relajante del detrusor:',
          '  - <em>Fármacos Antimuscarínicos / Anticolinérgicos:</em> <strong>Oxibutinina</strong> (2.5 a 5 mg c/8-12 h), Tolterodina o Solifenacina. Bloquean los receptores muscarínicos M2 y M3 de la vejiga, inhibiendo las contracciones involuntarias. <em>Precaución crítica en geriatría:</em> sus efectos anticolinérgicos sistémicos pueden desencadenar boca seca, constipación, retención urinaria aguda y deterioro cognitivo o delirium en pacientes frágiles.',
          '  - <em>Agonistas Adrenérgicos Beta-3:</em> <strong>Mirabegrón</strong> (25 a 50 mg VO al día). Estimula los receptores β3 del detrusor promoviendo su relajación durante el llenado vesical. Presenta la inmensa ventaja de <strong>carecer de efectos adversos anticolinérgicos centrales</strong>, siendo el fármaco de elección en pacientes mayores con deterioro cognitivo o riesgo de delirium. Monitorear presión arterial (puede inducir hipertensión).',
          '• <strong>Manejo de la Incontinencia de Esfuerzo:</strong> Ejercicios de Kegel; en mujeres postmenopáusicas con atrofia urogenital se asocia <em>estrógeno tópico vaginal</em> (promueve engrosamiento epitelial y tono vascular periuretral). Si fracasa la terapia médica, la opción definitiva es la cirugía uroginecológica con cabestrillos mediouretrales libres de tensión (mallas TVT o TOT).',
          '• <strong>Manejo de la Incontinencia por Rebose:</strong> Si es obstructiva por HPB, desobstrucción médica con alfa-bloqueadores (Tamsulosina) o resección transuretral de próstata (RTU); si la vejiga es acontráctil, cateterismo vesical limpio intermitente. <em>Regla de Oro:</em> Los fármacos anticolinérgicos están formalmente CONTRAINDICADOS en la incontinencia por rebose, pues abolen la escasa contractilidad del detrusor y precipitan un globo vesical masivo.'
        ]
      }
    ],
    table: {
      title: 'Medicamentos de Alto Riesgo según Criterios de Beers / STOPP y Diagnóstico Diferencial de la Incontinencia Urinaria Geriátrica',
      headers: ['Fármaco / Síndrome', 'Riesgo Geriátrico Principal (Beers/STOPP)', 'Mecanismo Fisiopatológico Adverso', 'Recomendación Clínica y Alternativa Segura'],
      rows: [
        ['Benzodiacepinas (Diazepam, Lorazepam, Clonazepam)', 'Aumento de caídas, fracturas de cadera, delirium y sedación residual diurna', 'Semivida prolongada por aumento de grasa corporal y sensibilidad GABAérgica aumentada', 'EVITAR siempre · Retiro gradual y pautado; higiene del sueño no farmacológica'],
        ['AINEs (Ibuprofeno, Diclofenaco, Ketorolaco, Naproxeno)', 'Hemorragia digestiva alta, falla renal aguda, hipertensión arterial y descompensación IC', 'Inhibición de COX-1 gástrica y de prostaglandinas vasodilatadoras renales', 'EVITAR uso crónico · Analgesia de 1ª línea: Paracetamol (hasta 3 g/d); 2ª línea: Tramadol'],
        ['Sulfonilureas Prolongadas (Glibenclamida)', 'Hipoglicemia severa, prolongada e inadvertida con daño neurológico', 'Aclaramiento renal disminuido y acumulación de metabolitos activos hipoglicemiantes', 'EVITAR en ancianos · Suspender si HbA1c < 8%; preferir Metformina o iDPP-4'],
        ['Anticolinérgicos (Clorfenamina, Pargeverina, Amitriptilina)', 'Constipación, retención urinaria aguda, boca seca, glaucoma agudo y delirium', 'Bloqueo competitivo no selectivo de receptores muscarínicos centrales y periféricos', 'EVITAR · En alergias usar antihistamínicos de 2ª generación (Loratadina/Cetirizina)'],
        ['Donepecilo / Anticolinesterásicos', 'Diarrea motora, incontinencia de urgencia, bradicardia sinusal y síncope', 'Exceso de estimulación colinérgica sobre receptores muscarínicos digestivos y vesicales', 'Reconocer como efecto adverso colinérgico; reducir dosis o retirar en vez de agregar oxibutinina'],
        ['Incontinencia de Urgencia', 'Pérdida involuntaria precedida de deseo imperioso súbito ("no llego al baño")', 'Hiperactividad no inhibida del músculo detrusor durante el llenado vesical', '1ª línea: Ejercicios de Kegel y micción programada; 2ª línea: Oxibutinina o Mirabegrón'],
        ['Incontinencia de Esfuerzo', 'Pérdida en gotas sincronizada con tos, risa, estornudos o carga de peso', 'Debilidad de la musculatura del suelo pélvico e hipermovilidad de la uretra', 'Ejercicios de Kegel y kinesioterapia de piso pélvico; estrógenos tópicos; mallas TVT/TOT'],
        ['Incontinencia por Rebose', 'Pérdida por goteo continuo asociada a residuo postmiccional elevado (> 200 mL)', 'Obstrucción mecánica uretral (HPB) o vejiga hipoactiva acontráctil (neuropatía)', 'Descompresión o alfa-bloqueadores; CONTRAINDICADOS los anticolinérgicos']
      ]
    },
    severityTable: {
      title: 'Diagnóstico Diferencial y Abordaje Terapéutico de los Tipos de Incontinencia Urinaria Crónica en la Persona Mayor',
      headers: ['Tipo de Incontinencia', 'Mecanismo Fisiopatológico', 'Síntomas Clínicos Cardinales', 'Residuo Postmiccional (RPM)', 'Tratamiento de 1ª y 2ª Línea'],
      rows: [
        ['Incontinencia de Urgencia (Vejiga Hiperactiva)', 'Contracciones involuntarias del músculo detrusor mediadas por receptores M2/M3', 'Deseo súbito incontrolable de orinar con escape abundante antes de llegar al baño; nicturia', 'Normal (< 50-100 mL)', '1ª Línea: Reentrenamiento vesical + Kegel · 2ª Línea: Mirabegrón (50 mg/d) u Oxibutinina'],
        ['Incontinencia de Esfuerzo (Estrés)', 'Incompetencia del soporte uretral y debilidad del suelo pélvico ante presión intraabdominal', 'Escapes de pequeño volumen coincidentes con tos, estornudo, risa o esfuerzos físicos', 'Normal (< 50 mL)', '1ª Línea: Ejercicios de suelo pélvico (Kegel) + estrógenos tópicos · 2ª Línea: Cirugía TVT/TOT'],
        ['Incontinencia por Rebose (Overflow)', 'Sobredistensión vesical crónica por obstrucción de salida o detrusor acontráctil', 'Goteo continuo o intermitente diurno y nocturno; chorro débil; sensación de vaciado incompleto', 'Significativamente ELEVADO (> 150 - 200 mL)', 'Desobstrucción (Tamsulosina / RTU) o cateterismo limpio intermitente · PROSCRITOS antimuscarínicos'],
        ['Incontinencia Funcional', 'Tracto genitourinario anatómicamente normal; barrera física o cognitiva para llegar al inodoro', 'Pérdida de orina en volumen normal asociada a retraso locomotor o desorientación', 'Normal', 'Adaptaciones arquitectónicas del hogar (orinal/silla comodo cerca), micciones regladas c/2-3 h']
      ]
    },
    vignette: 'Mujer de 82 años, con antecedente de hipertensión arterial, artrosis de rodilla bilateral e insomnio crónico, acude a la consulta médica ambulatoria. Su lista de medicamentos habituales incluye: losartán 50 mg c/12 h, clonazepam 1 mg en la noche, paracetamol 1 g c/8 h, ibuprofeno 400 mg c/8 h (agregado por dolor articular hace 3 semanas) y clorfenamina 4 mg en la noche "para dormir mejor". Trae exámenes recientes solicitados por su consultorio: creatinina 1.6 mg/dL (basal 0.9 mg/dL hace 4 meses), BUN 38 mg/dL, potasio 5.2 mEq/L, PA 165/95 mmHg. Además, su hija refiere que la paciente ha presentado dos episodios de caídas nocturnas al levantarse al baño y se le escapan gotas de orina cuando tose o se ríe.',
    explicacion: 'Este caso clínico representa el ejemplo prototípico de polifarmacia y prescripción de fármacos de alto riesgo según los Criterios de Beers: 1) El uso de AINEs (ibuprofeno) en una paciente hipertensa mayor gatilló un deterioro agudo de la función renal (falla renal aguda prerrenal/hemodinámica por vasoconstricción de la arteriola aferente con alza de creatinina de 0.9 a 1.6 mg/dL, hiperkalemia y descompensación hipertensiva); 2) El uso concomitante de una benzodiacepina (clonazepam) y un antihistamínico anticolinérgico de 1ª generación (clorfenamina) genera una carga sedante y anticolinérgica extrema, responsable directa de las caídas nocturnas y de riesgo inminente de delirium; 3) La incontinencia urinaria que presenta coincide con maniobras de Valsalva (tos y risa), diagnosticando una Incontinencia de Esfuerzo. La conducta prioritaria es suspender de inmediato el ibuprofeno y la clorfenamina, planificar un retiro gradual supervisado del clonazepam, optimizar el paracetamol como analgésico de base y enseñar ejercicios de Kegel para el suelo pélvico.',
    keyPoints: [
      'La polifarmacia (≥ 5 fármacos) y los cambios farmacocinéticos (aumento de grasa corporal, declive renal) multiplican el riesgo de RAM y caídas.',
      'Los Criterios de Beers y STOPP contraindican benzodiacepinas, anticolinérgicos potentes y AINEs crónicos en la persona mayor.',
      'En adultos mayores diabéticos (> 75 años), la glibenclamida debe suspenderse de inmediato ante valores de HbA1c < 8% por riesgo de hipoglicemia severa.',
      'La incontinencia de urgencia (vejiga hiperactiva) se maneja con ejercicios vesicales y antimuscarínicos (Oxibutinina) o Mirabegrón (preferido si hay riesgo cognitivo).',
      'La incontinencia por rebose se diagnostica por un residuo postmiccional elevado (> 150-200 mL); los anticolinérgicos están formalmente contraindicados en este subtipo.'
    ],
    questions: [
      cleanQ(aeeData['10.24'][0]),
      cleanQ(aeeData['10.24'][1])
    ]
  }
];

module.exports = {
  bloque5,
  flow,
  bloque5Classes: bloque5,
};
