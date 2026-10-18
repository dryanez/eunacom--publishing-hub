/**
 * Migración única (oct-2026): Cardiología de 25 temas antiguos (master_cardiology_23_full_dataset.cjs + dataset_bloque_1..5.cjs)
 * a 38 temas con el formato estándar de los otros tomos (classId cardio-01 … cardio-38).
 *
 *   node books/scripts/_old_cardio/migrar_a_38_temas.cjs            → escribe books/scripts/dataset_cardiologia_bloque_1..5.cjs
 *                                                                     y books/data/v3_topic_codes.json / v3_section_codes.json (claves cardio)
 *
 * Cada tema nuevo toma secciones (o párrafos) de los temas antiguos; nada se descarta. `_origen` deja la traza
 * («1.2§4p0-2» = tema antiguo 1.2, sección 4, párrafos 0 a 2). Los códigos al margen (v3_section_codes) se trasladan
 * párrafo a párrafo con los índices nuevos. Ya se corrió: NO volver a correr (pisaría el trabajo hecho después).
 */
const fs = require('fs');
const path = require('path');
const OLD = require('./master_cardiology_23_full_dataset.cjs').master23ClassesFullData;
const DATA = path.join(__dirname, '..', '..', 'data');
const CODEMAP = require(path.join(DATA, 'v3_codemap.json'));
const SECOLD = JSON.parse(fs.readFileSync('/tmp/v3_section_codes.bak.json', 'utf8'));
const old = l => { const c = OLD.find(x => x.topicLabel === l); if (!c) throw new Error('falta ' + l); return c; };
const parasOf = s => s.paragraphs || [s.text];

const BLOCKS = {
  1: 'Arritmias y Paro Cardiorrespiratorio',
  2: 'Cardiopatía Coronaria',
  3: 'Insuficiencia Cardíaca y Enfermedades del Miocardio',
  4: 'Valvulopatías, Cardiopatías Congénitas y Endocarditis',
  5: 'Hipertensión Arterial, Pericardio y Patología Vascular',
};

// Contenido inicial para los temas que no existían (lo completan los agentes del bloque).
const STUB = {
  'cardio-07': {
    secs: [
      { subhead: 'Taquicardia de Complejo Ancho: Asumir Taquicardia Ventricular', paragraphs: [
        'Toda taquicardia regular de <strong>QRS ancho (≥ 120 ms)</strong> se considera <strong>taquicardia ventricular (TV) hasta demostrar lo contrario</strong>, sobre todo si hay cardiopatía estructural o infarto previo. La primera pregunta es siempre si el paciente tiene pulso y si está estable: sin pulso se trata como paro (desfibrilación, ver Tema 1.3); con pulso e inestabilidad (hipotensión, compromiso de conciencia, dolor torácico isquémico o edema pulmonar) se indica <strong>cardioversión eléctrica sincronizada inmediata</strong>.',
        'En la TV estable el fármaco de elección es la <strong>amiodarona 150 mg EV en 10 minutos</strong>. El <strong>verapamilo está contraindicado</strong> en toda taquicardia de complejo ancho: si la arritmia es ventricular provoca colapso hemodinámico.',
      ] },
      { subhead: 'QT Largo y Torsión de Puntas', paragraphs: [
        'El QT corregido (QTc, fórmula de Bazett) es normal bajo 440 ms en hombres y 460 ms en mujeres; un <strong>QTc > 500 ms</strong> es el umbral de alarma para torsión de puntas. Las causas adquiridas más preguntadas son fármacos (macrólidos, quinolonas, antipsicóticos, ondansetrón, metadona, antiarrítmicos clase IA y III) y la hipokalemia, hipomagnesemia o hipocalcemia.',
        'Conducta: suspender el fármaco causante, monitorizar y corregir los electrolitos. La torsión de puntas se trata con <strong>sulfato de magnesio 2 g EV</strong>; si degenera en fibrilación ventricular, desfibrilación.',
      ] },
    ],
    kp: ['Taquicardia regular de QRS ancho = TV hasta demostrar lo contrario; verapamilo contraindicado.',
      'TV con pulso e inestable = cardioversión eléctrica sincronizada inmediata; estable = amiodarona 150 mg EV.',
      'Torsión de puntas = sulfato de magnesio 2 g EV y suspender el fármaco que alarga el QT.'],
  },
  'cardio-10': {
    secs: [
      { subhead: 'Enfoque Inicial del Dolor Torácico Agudo', paragraphs: [
        'Ante todo dolor torácico agudo en urgencias la primera acción es un <strong>ECG de 12 derivaciones interpretado en ≤ 10 minutos</strong> desde el primer contacto médico (garantía GES de infarto): define de inmediato si hay un SCACEST que requiere reperfusión. Se monitoriza, se toman signos vitales en ambos brazos y se solicita troponina.',
        'El objetivo es descartar los <strong>cinco diagnósticos letales</strong>: síndrome coronario agudo, disección aórtica, tromboembolismo pulmonar, neumotórax a tensión y rotura esofágica (síndrome de Boerhaave). El taponamiento cardíaco completa la lista de urgencias que no se pueden pasar.',
      ] },
      { subhead: 'Troponina y Diagnósticos Diferenciales', paragraphs: [
        'La <strong>troponina ultrasensible</strong> es el biomarcador de necrosis miocárdica; se interpreta por su curva (algoritmo 0/1 h o 0/3 h). Una troponina normal no descarta angina inestable y una troponina elevada sin curva sugiere daño crónico (insuficiencia renal, insuficiencia cardíaca). El SCACEST no espera la troponina.',
        'Claves del diferencial: dolor desgarrante irradiado a la espalda con asimetría de pulsos (disección); disnea súbita con taquicardia y factores de riesgo de trombosis (TEP); dolor pleurítico que alivia al inclinarse adelante con supradesnivel ST difuso (pericarditis); dolor tras vómitos con enfisema subcutáneo (Boerhaave).',
      ] },
    ],
    kp: ['Dolor torácico = ECG en ≤ 10 minutos; el SCACEST se reperfunde sin esperar troponinas.',
      'Cinco letales: SCA, disección aórtica, TEP, neumotórax a tensión y rotura esofágica.',
      'La troponina ultrasensible se interpreta por su curva (0/1 h); una sola troponina normal no descarta angina inestable.'],
  },
};

/* Especificación de los 38 temas.
 *  s:   ['<tema antiguo>:<sección>[:p0,p1…]']   secciones (o párrafos) que pasan al tema nuevo
 *  tb:  ['<tema antiguo>', [filas]?, 'título nuevo'?]
 *  q:   [['<tema antiguo>', índice]]   kp: igual con keyPoints
 *  v:   tema antiguo del que viene la viñeta + explicación      x: tema antiguo de ges/frecuencia/contexto
 *  t3:  tema antiguo con severityTable/treatmentTable (tier 3)   svg / algo: diagrama antiguo (books/svg_diagrams)
 */
const T = [
  // ── Bloque 1
  { b: 1, l: '1.1', title: 'Lectura Sistemática del Electrocardiograma', codes: ['1.01.4.007'],
    s: ['1.1:0', '1.1:1', '1.1:2'], tb: ['1.1'], v: '1.1', x: '1.1', q: [['1.1', 1]], kp: [['1.1', 0], ['1.1', 1], ['1.1', 3]] },
  { b: 1, l: '1.2', title: 'Paro Cardiorrespiratorio: Reconocimiento, RCP de Alta Calidad y Desfibrilador Externo Automático', codes: ['1.01.2.006', '1.01.5.006', '1.05.2.012', '1.05.5.010', '4.01.2.030', '4.01.5.028'],
    s: ['1.2:0', '1.2:1', '1.2:4:0,1,2'], x: '1.2', svg: 'algo_pcr.svg', kp: [['1.2', 1]] },
  { b: 1, l: '1.3', title: 'ACLS: Ritmos Desfibrilables y No Desfibrilables, Fármacos y Cuidados Post-Paro', codes: ['1.01.5.004', '1.01.2.006', '1.01.5.006'],
    s: ['1.2:2', '1.2:3', '1.2:4:3'], tb: ['1.2'], v: '1.2', x: '1.2', svg: 'algo_urgencias.svg', algo: 'Arritmia peri-paro en urgencias: inestable → cardioversión o marcapaso',
    q: [['1.2', 0], ['1.2', 1]], kp: [['1.2', 0], ['1.2', 2], ['1.2', 3]] },
  { b: 1, l: '1.4', title: 'Fibrilación Auricular y Flutter Auricular: Diagnóstico, Control de Frecuencia y de Ritmo', codes: ['1.01.1.012', '1.01.1.013', '1.01.1.014'],
    s: ['1.3:0', '1.3:3', '1.3:4'], tb: ['1.3', [2, 3, 4, 5], 'Fármacos para Control de Frecuencia y de Ritmo en Fibrilación Auricular'], v: '1.3', x: '1.3', svg: 'algo_fa.svg',
    kp: [['1.3', 2], ['1.3', 3]] },
  { b: 1, l: '1.5', title: 'Anticoagulación en Fibrilación Auricular: CHA₂DS₂-VASc, Anticoagulantes Directos y Antagonistas de Vitamina K', codes: ['1.01.3.003'],
    s: ['1.3:1', '1.3:2'], tb: ['1.3', [0, 1], 'Anticoagulantes Orales en Fibrilación Auricular'], x: '1.3', q: [['1.3', 0], ['1.3', 1]], kp: [['1.3', 0], ['1.3', 1]] },
  { b: 1, l: '1.6', title: 'Taquicardia Paroxística Supraventricular y Síndrome de Wolff-Parkinson-White', codes: ['1.01.1.024'],
    s: ['1.4:0', '1.4:1', '1.4:2', '1.4:3'], tb: ['1.4', [0, 1, 3]], v: '1.4', x: '1.4', svg: 'algo_tpsv.svg', q: [['1.4', 0], ['1.4', 1]], kp: [['1.4', 0], ['1.4', 1], ['1.4', 2], ['1.4', 3]] },
  { b: 1, l: '1.7', title: 'Taquicardia de Complejo Ancho, Taquicardia Ventricular, QT Largo y Cardioversión Eléctrica', codes: ['1.01.2.009', '1.01.5.002'],
    stub: 'cardio-07', tb: ['1.4', [2], 'Taquicardia Ventricular: Reconocimiento y Manejo de Urgencia'], x: '1.4', svg: 'algo_tv.svg', q: [['1.1', 0]], kp: [['1.1', 2]] },
  { b: 1, l: '1.8', title: 'Bradicardias, Bloqueos Aurículo-Ventriculares y Marcapasos', codes: ['1.01.1.002', '1.01.2.009'],
    s: ['1.5:0', '1.5:1', '1.5:2', '1.5:3'], tb: ['1.5'], v: '1.5', x: '1.5', svg: 'algo_bav.svg', q: [['1.5', 0], ['1.5', 1]], kp: [['1.5', 0], ['1.5', 1], ['1.5', 2], ['1.5', 3]] },
  { b: 1, l: '1.9', title: 'Extrasístoles Ventriculares y Holter de Ritmo', codes: ['1.01.1.011', '1.01.4.014'],
    s: ['1.6:0', '1.6:1', '1.6:2'], tb: ['1.6'], t3: '1.6', v: '1.6', x: '1.6', q: [['1.6', 0], ['1.6', 1], ['1.6', 2], ['1.6', 3]], kp: [0, 1, 2, 3, 4, 5, 6].map(i => ['1.6', i]) },
  // ── Bloque 2
  { b: 2, l: '2.1', title: 'Dolor Torácico Agudo en Urgencias: Enfoque Inicial y Diagnósticos que No se Pueden Pasar', codes: ['1.01.4.007', '1.01.4.009'],
    stub: 'cardio-10', x: '2.2', svg: 'algo_dolor_toracico.svg', algo: 'Dolor torácico en urgencias: ECG en 10 minutos y cinco diagnósticos letales' },
  { b: 2, l: '2.2', title: 'Angina Crónica Estable: Diagnóstico, Estratificación Funcional y Coronariografía', codes: ['1.01.1.001', '1.01.4.008', '1.01.4.005', '1.01.4.001'],
    s: ['2.1:0', '2.1:1', '2.1:2', '2.1:4:0,1,2,3,5,6'], v: '2.1', x: '2.1', svg: 'algo_angina_estable.svg', q: [['2.1', 0]], kp: [['2.1', 0], ['2.1', 3]] },
  { b: 2, l: '2.3', title: 'Angina Crónica Estable: Terapia Médica Óptima, Revascularización y Prevención Secundaria', codes: ['1.01.1.001'],
    s: ['2.1:3', '2.1:4:4=Elección del Método de Revascularización: Angioplastía (PCI) vs Cirugía (CABG)'], tb: ['2.1'], x: '2.1', q: [['2.1', 1]], kp: [['2.1', 1], ['2.1', 2], ['2.1', 4]] },
  { b: 2, l: '2.4', title: 'SCA sin Supradesnivel del ST: Angina Inestable e Infarto sin Supradesnivel', codes: ['1.01.2.001', '1.01.4.009'],
    s: ['2.2:0', '2.2:1', '2.2:2', '2.2:3'], tb: ['2.2'], v: '2.2', x: '2.2', q: [['2.2', 0], ['2.2', 1]], kp: [0, 1, 2, 3, 4].map(i => ['2.2', i]) },
  { b: 2, l: '2.5', title: 'SCA con Supradesnivel del ST: Diagnóstico Electrocardiográfico y Reperfusión GES', codes: ['1.01.2.004', '1.01.5.009', '1.01.4.007'],
    s: ['2.3:0', '2.3:1', '2.3:2', '2.3:4', '2.3:5'], tb: ['2.3'], v: '2.3', x: '2.3', svg: 'algo_sca_reperfusion.svg', q: [['2.3', 0]], kp: [['2.3', 0], ['2.3', 1], ['2.3', 2]] },
  { b: 2, l: '2.6', title: 'Complicaciones del Infarto: Ventrículo Derecho, Complicaciones Mecánicas y Angina de Prinzmetal', codes: ['1.01.2.004', '1.01.4.006'],
    s: ['2.3:3', '2.4:0', '2.4:1', '2.4:2'], tb: ['2.4'], v: '2.4', x: '2.4', svg: 'algo_iam_vd.svg', q: [['2.3', 1], ['2.4', 0], ['2.4', 1]], kp: [['2.3', 3], ['2.4', 0], ['2.4', 1], ['2.4', 2], ['2.4', 3]] },
  // ── Bloque 3
  { b: 3, l: '3.1', title: 'Insuficiencia Cardíaca Crónica: Diagnóstico, Fenotipos y Péptidos Natriuréticos', codes: ['1.01.1.018', '1.01.4.006'],
    s: ['3.1:0', '3.1:1', '3.1:2', '3.1:3'], tb: ['3.1'], v: '3.1', x: '3.1', svg: 'algo_ic_dx.svg', q: [['3.1', 0], ['3.1', 1]], kp: [0, 1, 2, 3].map(i => ['3.1', i]) },
  { b: 3, l: '3.2', title: 'Insuficiencia Cardíaca Crónica: Tratamiento GDMT (Cuádruple Terapia) y Dispositivos', codes: ['1.01.1.018'],
    s: ['3.2:0', '3.2:1', '3.2:2'], tb: ['3.2'], v: '3.2', x: '3.2', svg: 'algo_ic_tratamiento.svg', q: [['3.2', 0], ['3.2', 1]], kp: [0, 1, 2, 3].map(i => ['3.2', i]) },
  { b: 3, l: '3.3', title: 'Insuficiencia Cardíaca Aguda y Edema Agudo de Pulmón', codes: ['1.01.2.005'],
    s: ['3.3:0', '3.3:1'], tb: ['3.3'], v: '3.3', x: '3.3', q: [['3.3', 0], ['3.3', 1]], kp: [0, 1, 2, 3].map(i => ['3.3', i]) },
  { b: 3, l: '3.4', title: 'Shock Cardiogénico y Diagnóstico Diferencial de los Cuatro Shocks', codes: ['1.01.2.007', '1.01.2.005'],
    s: ['3.4:0', '3.4:1', '3.4:2'], tb: ['3.4'], v: '3.4', x: '3.4', svg: 'algo_shock.svg', q: [['3.4', 0], ['3.4', 1]], kp: [0, 1, 2, 3].map(i => ['3.4', i]) },
  { b: 3, l: '3.5', title: 'Miocardiopatía Hipertrófica y Muerte Súbita del Joven', codes: ['1.01.1.020'],
    s: ['3.5:0'], v: '3.5', x: '3.5', q: [['3.5', 0]], kp: [['3.5', 0], ['3.5', 1], ['3.5', 2]] },
  { b: 3, l: '3.6', title: 'Miocardiopatía Dilatada, Miocardiopatía Restrictiva y Miocarditis', codes: ['1.01.1.020'],
    s: ['3.5:1', '3.5:2'], tb: ['3.5'], x: '3.5', q: [['3.5', 1]], kp: [['3.5', 3]] },
  // ── Bloque 4
  { b: 4, l: '4.1', title: 'Paciente con Soplo: Semiología y Maniobras Dinámicas', codes: ['1.01.1.021'],
    s: ['4.4:0'], x: '4.4', kp: [['4.4', 0]] },
  { b: 4, l: '4.2', title: 'Estenosis Aórtica: Semiología, Severidad Ecocardiográfica y Reemplazo Valvular', codes: ['1.01.1.009', '1.01.4.006'],
    s: ['4.1:0', '4.1:1', '4.1:2', '4.1:3'], tb: ['4.1'], v: '4.1', x: '4.1', svg: 'algo_estenosis_aortica.svg', q: [['4.1', 0], ['4.1', 1]], kp: [0, 1, 2, 3].map(i => ['4.1', i]) },
  { b: 4, l: '4.3', title: 'Insuficiencia Aórtica: Signos Periféricos, Ecocardiograma e Indicación Quirúrgica', codes: ['1.01.1.017'],
    s: ['4.2:0', '4.2:2'], tb: ['4.2'], x: '4.2', q: [['4.2', 0]], kp: [['4.2', 0]] },
  { b: 4, l: '4.4', title: 'Estenosis Mitral y Fiebre Reumática', codes: ['1.01.1.010', '1.01.1.008', '1.01.3.005'],
    s: ['4.2:1'], v: '4.2', x: '4.2', svg: 'algo_fiebre_reumatica.svg', q: [['4.2', 1]], kp: [['4.2', 1], ['4.2', 2], ['4.2', 3]] },
  { b: 4, l: '4.5', title: 'Insuficiencia Mitral y Prolapso de la Válvula Mitral', codes: ['1.01.1.019'],
    s: ['4.3:0', '4.3:1', '4.3:2'], tb: ['4.3'], v: '4.3', x: '4.3', q: [['4.3', 0], ['4.3', 1]], kp: [0, 1, 2, 3].map(i => ['4.3', i]) },
  { b: 4, l: '4.6', title: 'Cardiopatías Congénitas del Adulto', codes: ['1.01.1.003'],
    s: ['4.4:1'], tb: ['4.4'], v: '4.4', x: '4.4', svg: 'algo_congenitas.svg', q: [['4.4', 0], ['4.4', 1]], kp: [['4.4', 1], ['4.4', 2], ['4.4', 3]] },
  { b: 4, l: '4.7', title: 'Endocarditis Infecciosa: Criterios de Duke, Tratamiento y Profilaxis', codes: ['1.01.1.007', '1.04.2.003', '1.04.3.007'],
    s: ['4.5:0', '4.5:1', '4.5:2', '4.5:3'], tb: ['4.5'], t3: '4.5', v: '4.5', x: '4.5', q: [0, 1, 2, 3, 4, 5].map(i => ['4.5', i]), kp: [0, 1, 2, 3, 4, 5, 6].map(i => ['4.5', i]) },
  // ── Bloque 5
  { b: 5, l: '5.1', title: 'Hipertensión Arterial: Diagnóstico, MAPA y Etapificación', codes: ['1.01.1.015', '1.01.4.011'],
    s: ['5.1:0', '5.1:4'], x: '5.1', kp: [['5.1', 0]] },
  { b: 5, l: '5.2', title: 'Hipertensión Arterial: Tratamiento Farmacológico, Metas y GES', codes: ['1.01.1.015'],
    s: ['5.1:1', '5.1:2'], x: '5.1', kp: [['5.1', 1], ['5.1', 2]] },
  { b: 5, l: '5.3', title: 'Hipertensión Arterial Secundaria: Cuándo Sospecharla y Cómo Estudiarla', codes: ['1.01.1.016'],
    s: ['5.1:3'], tb: ['5.1'], v: '5.1', x: '5.1', q: [['5.1', 0], ['5.1', 1]], kp: [['5.1', 3]] },
  { b: 5, l: '5.4', title: 'Crisis Hipertensivas: Urgencia versus Emergencia Hipertensiva', codes: ['1.09.2.002'],
    s: ['5.2:0', '5.2:1'], tb: ['5.2'], v: '5.2', x: '5.2', q: [['5.2', 0], ['5.2', 1]], kp: [0, 1, 2, 3].map(i => ['5.2', i]) },
  { b: 5, l: '5.5', title: 'Pericarditis Aguda', codes: ['1.01.1.022'],
    s: ['5.3:0'], v: '5.3', x: '5.3', svg: 'algo_pericarditis.svg', q: [['5.3', 0]], kp: [['5.3', 0], ['5.3', 1]] },
  { b: 5, l: '5.6', title: 'Taponamiento Cardíaco y Pericardiocentesis', codes: ['1.01.2.008', '1.01.5.007'],
    s: ['5.3:1'], tb: ['5.3'], x: '5.3', q: [['5.3', 1]], kp: [['5.3', 2], ['5.3', 3]] },
  { b: 5, l: '5.7', title: 'Disección Aórtica Aguda', codes: ['1.01.2.002', '1.01.4.002'],
    s: ['5.4:0', '5.4:1'], tb: ['5.4'], v: '5.4', x: '5.4', svg: 'algo_diseccion_aortica.svg', q: [['5.4', 0]], kp: [['5.4', 0], ['5.4', 1], ['5.4', 2]] },
  { b: 5, l: '5.8', title: 'Aneurisma de Aorta Abdominal', codes: ['4.01.2.022'],
    s: ['5.4:2'], x: '5.4', svg: 'algo_aaa.svg', algo: 'Aneurisma de aorta abdominal: medición y criterios de cirugía', q: [['5.4', 1]], kp: [['5.4', 3]] },
  { b: 5, l: '5.9', title: 'Tromboembolismo Pulmonar', codes: ['1.01.1.006', '1.05.2.005', '1.01.4.002'],
    s: ['5.5:0', '5.5:1', '5.5:2'], tb: ['5.5'], v: '5.5', x: '5.5', svg: 'algo_tep.svg', q: [['5.5', 0], ['5.5', 1]], kp: [0, 1, 2, 3].map(i => ['5.5', i]) },
  { b: 5, l: '5.10', title: 'Trombosis Venosa Profunda', codes: ['4.01.1.049'],
    s: ['5.5:3'], x: '5.5' },
];

const used = { s: new Set(), q: new Set(), kp: new Set(), tb: new Set(), v: new Set() };
const topicCodes = {}, secCodes = {};
const out = { 1: [], 2: [], 3: [], 4: [], 5: [] };

T.forEach((t, i) => {
  const cid = 'cardio-' + String(i + 1).padStart(2, '0');
  const X = old(t.x);
  const secs = [], par = {}, origen = [];
  if (t.stub) STUB[t.stub].secs.forEach(s => secs.push(s));
  (t.s || []).forEach(ref => {
    const [ref0, newHead] = ref.split('=');
    const [ol, si, pl] = ref0.split(':');
    const sec = old(ol).contentSections[+si];
    const all = parasOf(sec);
    const pick = pl ? pl.split(',').map(Number) : all.map((_, k) => k);
    pick.forEach(k => used.s.add(`${ol}:${si}:${k}`));
    const ni = secs.length;
    const P = ((SECOLD[`cardiologia|${ol}`] || {}).parrafos) || {};
    pick.forEach((k, j) => { if (P[`${si}.${k}`]) par[`${ni}.${j}`] = P[`${si}.${k}`]; });
    secs.push({ subhead: newHead || sec.subhead.replace(/^\s*\d+\.\s*/, ''), paragraphs: pick.map(k => all[k]) });
    origen.push(`${ol}§${si}${pl ? 'p' + pl : ''}`);
  });
  secs.forEach((s, k) => { s.subhead = `${k + 1}. ${s.subhead.replace(/^\s*\d+\.\s*/, '')}`; });
  let table = null;
  if (t.tb) {
    const [ol, rows, title] = t.tb; const src = old(ol).table;
    const r = rows || src.rows.map((_, k) => k);
    r.forEach(k => used.tb.add(`${ol}:${k}`));
    table = { title: title || src.title, headers: src.headers, rows: r.map(k => src.rows[k]) };
  }
  const q = (t.q || []).map(([ol, k]) => { used.q.add(`${ol}:${k}`); return old(ol).questions[k]; });
  const kp = (t.kp || []).map(([ol, k]) => { used.kp.add(`${ol}:${k}`); return old(ol).keyPoints[k]; }).concat(t.stub ? STUB[t.stub].kp : []);
  const V = t.v ? old(t.v) : null; if (V) used.v.add(t.v);
  const lvl = t.codes.map(c => CODEMAP[c]).find(e => e && e.dx) || {};
  const T3 = t.t3 ? old(t.t3) : null;
  const c = {
    id: cid, classId: cid, tier: T3 ? 3 : 2, blockNum: t.b, blockName: BLOCKS[t.b], topicLabel: t.l, title: t.title,
    perfilCode: t.codes.join(', '), dx: lvl.dx || 'No aplica', tx: lvl.tx || 'No aplica', seg: lvl.seg || 'No aplica',
    ges: X.ges || '', reconstrucciones: X.reconstrucciones || '', frecuencia: X.frecuencia || '',
    svg: t.svg || null, algoTitle: t.svg ? (t.algo || (old(t.x).svg === t.svg ? X.algoTitle : null) || OLD.find(o => o.svg === t.svg).algoTitle) : null,
    diagram: null, contexto: (T3 && T3.contexto) || '',
    contentSections: secs, table,
    ...(T3 ? { severityTable: T3.severityTable, treatmentTable: T3.treatmentTable } : {}),
    vignette: V ? V.vignette : '', explicacion: V ? V.explicacion : '',
    keyPoints: kp, questions: q,
    _origen: origen.concat(t.stub ? ['nuevo (borrador inicial)'] : []).join(' · '),
    _estado: t.stub ? 'borrador' : 'migrado',
  };
  out[t.b].push(c);
  topicCodes[cid] = { codes: t.codes, names: t.codes.map(k => (CODEMAP[k] || {}).name || '') };
  secCodes[`cardiologia|${cid}`] = { parrafos: par, no_cubiertos: [], parcial: [], sugerencia: {} };
});

// Verificación: todo lo antiguo quedó en algún tema
const miss = [];
OLD.forEach(c => {
  c.contentSections.forEach((s, si) => parasOf(s).forEach((_, k) => { if (!used.s.has(`${c.topicLabel}:${si}:${k}`)) miss.push(`párrafo ${c.topicLabel}:${si}:${k}`); }));
  c.questions.forEach((_, k) => { if (!used.q.has(`${c.topicLabel}:${k}`)) miss.push(`pregunta ${c.topicLabel}:${k}`); });
  c.keyPoints.forEach((_, k) => { if (!used.kp.has(`${c.topicLabel}:${k}`)) miss.push(`keyPoint ${c.topicLabel}:${k}`); });
  (c.table ? c.table.rows : []).forEach((_, k) => { if (!used.tb.has(`${c.topicLabel}:${k}`)) miss.push(`fila tabla ${c.topicLabel}:${k}`); });
  if (!used.v.has(c.topicLabel)) miss.push(`viñeta ${c.topicLabel}`);
});
if (miss.length) { console.error('SIN DESTINO:\n' + miss.join('\n')); process.exit(1); }

const HEAD = n => `/**\n * Tomo 01 · Cardiología — Bloque ${n}: ${BLOCKS[n]}\n * Formato estándar (igual que dataset_endocrinologia_bloque_*.cjs). Migrado desde los 25 temas antiguos\n * (books/scripts/_old_cardio/) por _old_cardio/migrar_a_38_temas.cjs; \`_origen\` indica de dónde viene cada sección.\n * \`_estado\`: 'migrado' (contenido antiguo sin reescribir) · 'borrador' (tema nuevo, contenido mínimo) · 'estandar' (reescrito al estándar).\n */\n`;
for (const n of [1, 2, 3, 4, 5]) {
  const f = path.join(__dirname, '..', `dataset_cardiologia_bloque_${n}.cjs`);
  fs.writeFileSync(f, HEAD(n) + `const bloque${n} = ${JSON.stringify(out[n], null, 2)};\n\nmodule.exports = { bloque${n} };\n`);
  console.log('ok', path.relative(process.cwd(), f), out[n].length, 'temas');
}
// v3_topic_codes / v3_section_codes: fuera las claves cardiologia:* y cardiologia|<label>, dentro cardio-NN
const tcFile = path.join(DATA, 'v3_topic_codes.json'), scFile = path.join(DATA, 'v3_section_codes.json');
const TC = JSON.parse(fs.readFileSync(tcFile, 'utf8')), SC = JSON.parse(fs.readFileSync(scFile, 'utf8'));
for (const k of Object.keys(TC)) if (k.startsWith('cardiologia:')) delete TC[k];
for (const k of Object.keys(SC)) if (/^cardiologia\|\d/.test(k)) delete SC[k];
Object.assign(TC, topicCodes); Object.assign(SC, secCodes);
fs.writeFileSync(tcFile, JSON.stringify(TC, null, 1));
fs.writeFileSync(scFile, JSON.stringify(SC, null, 1));
console.log('ok v3_topic_codes.json y v3_section_codes.json (38 temas cardio)');
