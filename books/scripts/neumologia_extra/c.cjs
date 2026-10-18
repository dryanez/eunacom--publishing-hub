/* Tema nuevo del libro Respiratorio (hueco V3): 5.5 Ahogamiento e hipotermia accidental (resp-25). Misma estructura que uro-16. */
const { flow } = require('./flow.cjs');

const ahogamiento = {
  id: 'resp-25', classId: 'resp-25', tier: 2, blockNum: 5,
  blockName: 'Cuidados Críticos, Ventilación y Medicina del Sueño', topicLabel: '5.5',
  title: 'Ahogamiento (Asfixia por Inmersión) e Hipotermia Accidental',
  codes: ['1.05.2.001', '1.07.1.011'], qcodes: ['1.05.2.001', '1.07.1.011'],
  dx: 'Específico', tx: 'Completo', seg: 'Completo',
  ges: 'No GES · Urgencia vital: la hipoxia es la causa del paro y la ventilación es la prioridad',
  reconstrucciones: '',
  frecuencia: 'Media · RCP que parte por ventilaciones, no drenar agua, hipotermia con recalentamiento activo y manipulación cuidadosa',
  svg: null,
  algoTitle: 'Algoritmo del Ahogamiento y la Hipotermia',
  diagram: flow('Algoritmo del Ahogamiento y la Hipotermia', [
    { t: 'Rescate seguro de la víctima del agua', s: 'Sin ponerse en riesgo · inmovilizar columna solo si hay trauma probable (clavado, accidente)', type: 'acc' },
    { k: 'split', q: '¿Responde y respira?', s: 'Evaluar en menos de 10 segundos',
      ll: 'No: sin respuesta o sin respiración',
      left: { t: 'RCP: 5 ventilaciones de rescate primero', s: 'Luego compresiones 30:2 (15:2 niños con 2 rescatadores) · DEA · oxígeno al 100%', type: 'crit' },
      rl: 'Sí',
      right: { t: 'Oxígeno, retirar ropa mojada, observar', s: 'Monitor · SatO2 · radiografía · observación 6 a 8 horas', type: 'dec' } },
    { t: 'Medir temperatura central', s: 'Menor de 35 °C es hipotermia: leve 32-35, moderada 28-32, grave menor de 28', type: 'warn' },
    { t: 'Recalentamiento según gravedad', s: 'Leve: pasivo y externo · Moderada: activo externo + suero tibio · Grave o paro: manipular con cuidado, derivar a centro con ECMO/bypass', type: 'acc' },
  ]),
  contexto: 'El ahogamiento es la insuficiencia respiratoria por inmersión o sumersión en líquido. La víctima queda hipoxémica y el paro cardíaco es consecuencia de la hipoxia, por lo que la reanimación parte por las ventilaciones. La cantidad de agua aspirada importa menos que la duración de la hipoxia; el agua fría puede además enfriar al paciente y proteger al cerebro. La hipotermia accidental (temperatura central menor de 35 °C) aparece en el ahogamiento en agua fría, en la intemperie y, sobre todo, en el adulto mayor que vive solo; se reconoce por la bradicardia, la depresión de conciencia y las ondas J de Osborn, y se trata con recalentamiento escalonado y manipulación cuidadosa por el riesgo de fibrilación ventricular.',
  contentSections: [
    { subhead: '1. Ahogamiento: Fisiopatología y Clasificación',
      paragraphs: [
        'El <strong>ahogamiento</strong> es el proceso de dificultad respiratoria por <strong>inmersión (cabeza bajo el agua) o sumersión</strong> en un líquido. Se prefiere hablar de ahogamiento con desenlace de muerte, morbilidad o sin morbilidad, y se abandonan los términos "seco" y "húmedo". Predomina en <strong>niños de 1 a 4 años</strong> (piscinas, tinas, canales) y en <strong>hombres jóvenes</strong> (alcohol, drogas, clavados, ríos y mar). La secuencia es: pánico, apnea voluntaria, <strong>laringoespasmo</strong>, aspiración de agua, hipoxemia progresiva, pérdida de conciencia, bradicardia y <strong>paro cardíaco por hipoxia</strong>.',
        'La <strong>aspiración de agua</strong> (dulce o salada) lava el surfactante y causa <strong>edema pulmonar no cardiogénico, atelectasias y SDRA</strong>; las diferencias de electrolitos entre agua dulce y salada no tienen importancia clínica. Un paciente asintomático puede deteriorarse horas después, por lo que se observa. Factores asociados: alcohol, convulsiones, arritmias (QT largo), trauma cervical en clavados y falta de supervisión. Hipotermia, trauma y consumo de sustancias se buscan siempre.',
      ] },
    { subhead: '2. Reanimación y Manejo Hospitalario',
      paragraphs: [
        'La víctima se saca del agua con seguridad para el rescatista; se inmoviliza la columna cervical solo si hay mecanismo de trauma. <strong>El paro es hipóxico: la RCP parte por 5 ventilaciones de rescate</strong> y luego compresiones (30:2; 15:2 en niños con dos rescatistas), con oxígeno al 100% y desfibrilador si el ritmo lo permite. <strong>No se pierde tiempo en intentar drenar el agua</strong> (maniobra de Heimlich o poner al paciente boca abajo): no sirve y aumenta el vómito y la aspiración. Se retira la ropa mojada y se cubre al paciente. La reanimación se prolonga más que en el paro habitual si el agua es fría, y <strong>no se suspende hasta recalentar</strong> a 32-35 °C.',
        'En el hospital: monitorización, <strong>oxígeno con meta de SatO2 mayor de 94%</strong>, gases arteriales, radiografía de tórax, glicemia, electrolitos, ECG y búsqueda de trauma. Con hipoxemia persistente se usa CPAP o VMNI, o intubación con ventilación protectora (como en el SDRA). <strong>No se indican antibióticos profilácticos ni corticoides</strong> (solo si hay infección clara, por ejemplo agua contaminada). El paciente asintomático con radiografía y saturación normales se observa por <strong>6 a 8 horas</strong> antes del alta; si hay tos, disnea, hipoxemia o infiltrados se hospitaliza. Pronóstico: peor con sumersión mayor de 10 minutos, asistolia y pH bajo 7,0.',
      ] },
    { subhead: '3. Hipotermia Accidental: Reconocimiento y Clasificación',
      paragraphs: [
        'La <strong>hipotermia</strong> es una <strong>temperatura central menor de 35 °C</strong> (rectal, esofágica o vesical; el termómetro oral no sirve en este rango). Se clasifica en <strong>leve (32-35 °C)</strong>: temblor, taquicardia, taquipnea, confusión y torpeza; <strong>moderada (28-32 °C)</strong>: cesa el temblor, hay letargo, bradicardia, hipotensión, <strong>ondas J de Osborn</strong> en el ECG y riesgo de fibrilación auricular; y <strong>grave (menor de 28 °C)</strong>: coma, pupilas poco reactivas, bradicardia extrema, riesgo de <strong>fibrilación ventricular y asistolia</strong>, aparente muerte.',
        'Los más expuestos son <strong>adultos mayores</strong> (menor termorregulación, pobreza, vivir solos, caídas, hipotiroidismo, fármacos sedantes), personas con alcohol u otras drogas, sin hogar, niños pequeños y los sumergidos en agua fría. Hay que descartar hipoglicemia, sepsis, hipotiroidismo (mixedema), insuficiencia suprarrenal, intoxicaciones y trauma como causa o consecuencia. Exámenes: glicemia, gases arteriales (se corrigen con la temperatura del paciente según el laboratorio), electrolitos (potasio), creatinina y CK, hemograma, coagulación (coagulopatía fría) y lactato.',
      ] },
    { subhead: '4. Tratamiento de la Hipotermia: Recalentamiento Escalonado',
      paragraphs: [
        'Medidas generales: retirar de la exposición, <strong>quitar la ropa húmeda</strong>, aislar del suelo y cubrir con mantas y la cabeza, monitorización continua y <strong>manipular con cuidado</strong> (los movimientos bruscos pueden gatillar fibrilación ventricular). Se evita el masaje de extremidades y el alcohol. En la <strong>hipotermia leve</strong> basta el recalentamiento pasivo y externo (mantas, ambiente cálido, bebidas calientes dulces si está consciente). En la <strong>moderada</strong> se agrega <strong>recalentamiento activo externo</strong> (mantas de aire caliente o eléctricas) y <strong>suero fisiológico tibio (38-42 °C)</strong> endovenoso, con meta de subir 0,5 a 2 °C por hora; la bradicardia es fisiológica y <strong>no responde a atropina</strong> ni a marcapaso.',
        'En la <strong>hipotermia grave</strong> o con inestabilidad se hace recalentamiento <strong>interno</strong> (lavado pleural o peritoneal con líquido tibio) y, si está disponible, <strong>circulación extracorpórea (ECMO o bypass)</strong>, por lo que se deriva a un centro con esa capacidad. En <strong>paro cardíaco</strong> se inicia RCP y se dan hasta tres descargas; con temperatura menor de 30 °C se limitan fármacos y descargas hasta recalentar (<strong>"nadie está muerto hasta que está tibio y muerto"</strong>). Se vigilan hipoglicemia, hiperkalemia, arritmias y la reanimación con volumen (hipovolemia por diuresis fría); la <strong>complicación del recalentamiento</strong> es el colapso y el shock por vasodilatación, por lo que se calienta primero el tronco.',
      ] },
  ],
  table: { title: 'Hipotermia: Clasificación por Temperatura Central y Conducta',
    headers: ['Grado', 'Temperatura Central', 'Cuadro Clínico', 'Manejo'],
    rows: [
      ['Leve', '32 a 35 °C', 'Temblor, taquicardia, taquipnea, confusión', 'Recalentamiento pasivo y externo'],
      ['Moderada', '28 a 32 °C', 'Letargo, sin temblor, bradicardia, ondas J, FA', 'Activo externo + suero tibio · monitor'],
      ['Grave', 'Menor de 28 °C', 'Coma, bradicardia extrema, FV o asistolia', 'Recalentamiento interno, ECMO · RCP prolongada'],
    ] },
  vignette: 'Niño de 6 años rescatado de una piscina tras 3 minutos sumergido. No responde, no respira y no tiene pulso. Hay dos rescatistas capacitados presentes. Temperatura axilar 35,5 °C.',
  explicacion: 'Ahogamiento con paro por hipoxia: la RCP parte con ventilaciones de rescate y luego compresiones (15:2 con dos rescatistas en el niño). No se intenta drenar agua ni se hace maniobra de Heimlich. Se mide la temperatura central y se recalienta si hay hipotermia.',
  keyPoints: [
    'El paro en el ahogamiento es hipóxico: la RCP parte con 5 ventilaciones de rescate y luego compresiones.',
    'No se pierde tiempo en drenar el agua (Heimlich o posición boca abajo): no sirve y aumenta el vómito.',
    'Todo ahogado se observa 6 a 8 horas: puede desarrollar edema pulmonar o SDRA tardío.',
    'Hipotermia es temperatura central menor de 35 °C: leve 32-35, moderada 28-32, grave menor de 28 (ondas J de Osborn).',
    'Recalentamiento escalonado y manipulación cuidadosa por riesgo de fibrilación ventricular; la bradicardia no responde a atropina.',
    'Nadie está muerto hasta que está tibio y muerto: en paro hipotérmico la RCP se prolonga hasta recalentar.',
  ],
  questions: [
    { stem: 'Un niño de 4 años es sacado de una piscina tras 4 minutos sumergido. No respira, no responde y tiene pulso lento. ¿Cuál es el primer paso de la reanimación?',
      options: [{ id: 'A', text: 'Maniobra de Heimlich para expulsar el agua' }, { id: 'B', text: 'Colocarlo boca abajo para drenar el agua' }, { id: 'C', text: 'Ventilaciones de rescate con oxígeno y luego compresiones si no hay pulso' }, { id: 'D', text: 'Solo compresiones torácicas sin ventilaciones' }, { id: 'E', text: 'Esperar al desfibrilador antes de iniciar maniobras' }],
      correcta: 'C', explicacion: 'El ahogamiento causa paro por hipoxia, por lo que la ventilación es la prioridad; no se intenta drenar agua porque retrasa la RCP y aumenta la aspiración.', recTag: 'Banco Oficial AEE · Perfil V3 1.05.2.001' },
    { stem: 'Una mujer de 88 años que vive sola es encontrada en el suelo en invierno. Está somnolienta, con temperatura rectal de 30 °C, FC 44 por minuto y ondas J de Osborn en el ECG. ¿Cuál es la conducta más adecuada?',
      options: [{ id: 'A', text: 'Atropina y marcapaso transcutáneo inmediato' }, { id: 'B', text: 'Recalentamiento activo externo y suero tibio, con monitor y manipulación cuidadosa' }, { id: 'C', text: 'Iniciar compresiones torácicas' }, { id: 'D', text: 'Baño de agua a 45 °C' }, { id: 'E', text: 'Solo frazadas a temperatura ambiente' }],
      correcta: 'B', explicacion: 'Con 30 °C la hipotermia es moderada; la bradicardia es fisiológica y no responde a atropina, y la manipulación brusca puede producir fibrilación ventricular.', recTag: 'Banco Oficial AEE · Perfil V3 1.07.1.011' },
    { stem: 'Un joven rescatado del mar es observado y está asintomático, con SatO2 98% y radiografía de tórax normal. ¿Cuál es la conducta más adecuada?',
      options: [{ id: 'A', text: 'Alta inmediata sin observación' }, { id: 'B', text: 'Antibióticos profilácticos por 7 días' }, { id: 'C', text: 'Corticoides endovenosos' }, { id: 'D', text: 'Observación por 6 a 8 horas antes del alta' }, { id: 'E', text: 'Intubación electiva' }],
      correcta: 'D', explicacion: 'El edema pulmonar por aspiración puede aparecer tardíamente, por lo que se observa por 6 a 8 horas; no se indican antibióticos ni corticoides profilácticos.', recTag: 'Banco Oficial AEE · Perfil V3 1.05.2.001' },
  ],
};
module.exports = { NEW_TOPICS: [ahogamiento] };
