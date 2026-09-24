// Clase 5.3 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neumologia.cjs (resp-23, en dataset_neumologia_bloque_5.cjs).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'resp-23',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Sospechar con la tríada, confirmar con polisomnografía y tratar con CPAP',
      say: 'Bienvenidos. Hoy vemos el síndrome de apnea hipopnea obstructiva del sueño, el SAHOS. Es muy frecuente, tiene impacto cardiovascular y laboral, y en el EUNACOM se pregunta casi siempre de la misma forma: un paciente obeso que ronca y se duerme de día. La pregunta es qué examen pides, y qué tratamiento indicas. Al final de la clase vas a responder las dos sin dudar.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Una faringe que se cierra al dormir',
      nodes: [
        { id: 'fr', col: 0, row: 1, k: 'cause', t: 'Faringe estrecha', s: 'Obesidad, cuello ancho, retrognatia' },
        { id: 'col', col: 1, row: 1, k: 'mech', t: 'Colapso faríngeo', s: 'Durante el sueño' },
        { id: 'ev', col: 2, row: 1, k: 'mech', t: 'Apnea o hipopnea', s: 'Apnea ≥ 10 s; hipopnea con desaturación ≥ 3–4%' },
        { id: 'hx', col: 3, row: 0, k: 'effect', t: 'Microdespertares', s: 'Sueño fragmentado: somnolencia diurna' },
        { id: 'sim', col: 3, row: 2, k: 'risk', t: 'Descarga simpática', s: 'Hipoxemia intermitente: HTA' },
      ],
      edges: [
        { from: 'fr', to: 'col' }, { from: 'col', to: 'ev' },
        { from: 'ev', to: 'hx' }, { from: 'ev', to: 'sim' },
      ],
      steps: [
        { show: ['fr'], note: 'Una vía aérea que ya viene estrecha',
          say: 'Partamos por el mecanismo. La faringe es un tubo de tejidos blandos, sin hueso que la sostenga. En el paciente obeso, con el cuello ancho o la mandíbula retraída, ese tubo ya viene estrecho.' },
        { show: ['col'], note: 'Al dormir, el tono muscular cae',
          say: 'Durante el sueño, los músculos que mantienen abierta la faringe se relajan, y los tejidos blandos colapsan hacia adentro. Por eso el alcohol y las benzodiacepinas en la noche empeoran el cuadro: relajan todavía más esos músculos.' },
        { show: ['ev'], note: 'Obstrucción total o parcial',
          say: 'Si la obstrucción es total por diez segundos o más, es una apnea. Si es parcial y produce una desaturación de tres a cuatro por ciento, es una hipopnea. El ronquido es el ruido del aire pasando por esa faringe estrecha.' },
        { show: ['hx'], note: 'Por eso se duerme de día',
          say: 'Cada evento termina con un microdespertar: el cerebro despierta un instante para reabrir la vía aérea. El paciente no lo recuerda, pero su sueño queda fragmentado toda la noche. Eso explica la somnolencia diurna.' },
        { show: ['sim'], note: 'Por eso se asocia a hipertensión',
          say: 'Y cada evento también produce hipoxemia, hipercapnia y una descarga simpática masiva. Repetido cientos de veces por noche, eso explica la hipertensión, muchas veces refractaria, y el riesgo cardiovascular. El mecanismo te explica toda la clínica.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Sospecha clínica',
      title: 'Quién es y qué cuenta',
      cards: [
        { title: 'Factores de riesgo', tag: 'Obesidad, el principal', kind: 'criteria', items: [
          { t: 'Obesidad: IMC > 30', d: 'El principal factor modificable',
            say: 'Veamos quién es este paciente. El factor de riesgo principal, y el más importante porque se puede modificar, es la obesidad, con un índice de masa corporal sobre treinta.' },
          { t: 'Cuello > 43 cm (H) o > 40 cm (M)', d: 'Hombre de mediana edad, retrognatia',
            say: 'Además, el sexo masculino, la edad mediana, un perímetro de cuello sobre cuarenta y tres centímetros en el hombre o cuarenta en la mujer, la retrognatia, y el alcohol o las benzodiacepinas en la noche.' },
        ] },
        { title: 'La tríada', tag: 'Lo que se pregunta', kind: 'key', items: [
          { t: 'Ronquidos fuertes', d: 'Entrecortados',
            say: 'La clínica es una tríada. Primero, ronquidos fuertes y entrecortados.' },
          { t: 'Apneas presenciadas', d: 'Deja de respirar y despierta con un resoplido',
            say: 'Segundo, apneas presenciadas por la pareja: el paciente deja de respirar y luego despierta con un resoplido o un jadeo. Muchas veces consulta obligado por quien duerme con él.' },
          { t: 'Somnolencia diurna excesiva', d: 'Se duerme leyendo, viendo TV o manejando',
            say: 'Y tercero, somnolencia diurna excesiva: se queda dormido leyendo, viendo televisión, o, lo más peligroso, manejando. El semáforo en rojo es un clásico del enunciado.' },
        ] },
        { title: 'Otros síntomas', tag: 'Pistas', kind: 'normal', items: [
          { t: 'Cefalea matinal, nicturia', d: 'Fatiga, irritabilidad, mala memoria',
            say: 'Hay pistas adicionales: cefalea frontal al despertar, nicturia, sudoración, sueño inquieto, fatiga matinal, irritabilidad y pérdida de memoria. Ojo con esa última: en un adulto mayor con sobrepeso, la falla de memoria con hipersomnia puede ser un SAHOS.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Epworth sospecha, la polisomnografía confirma',
      cards: [
        { title: 'Escala de Epworth', tag: 'Tamizaje', kind: 'normal', items: [
          { t: 'Epworth > 10', d: 'Somnolencia anormal: estudiar',
            say: 'Pasemos al diagnóstico. La escala de somnolencia de Epworth es un cuestionario validado. Un puntaje sobre diez confirma que la somnolencia es anormal, pero no confirma el SAHOS: solo indica que hay que estudiar.' },
        ] },
        { title: 'Polisomnografía', tag: 'Estándar de oro', kind: 'key', items: [
          { t: 'Polisomnografía nocturna', d: 'En laboratorio; alternativa: poligrafía',
            say: 'El estándar de oro es la polisomnografía nocturna supervisada en laboratorio. Registra el flujo aéreo, el esfuerzo toracoabdominal, la saturación, el electrocardiograma y el electroencefalograma. La poligrafía respiratoria ambulatoria es una alternativa, pero cuando el examen pregunta el examen de elección, la respuesta es polisomnografía.' },
          { t: 'IAH = eventos por hora', d: 'Apneas + hipopneas por hora de sueño',
            say: 'Su resultado clave es el índice de apnea hipopnea: el número de apneas más hipopneas por cada hora de sueño.' },
        ] },
        { title: 'Severidad por IAH', tag: 'Cortes', kind: 'criteria', items: [
          { t: 'Leve 5–14 · Moderado 15–29', d: 'Normal: menos de 5',
            say: 'Con ese índice se clasifica. Menos de cinco es normal. Entre cinco y catorce, leve. Entre quince y veintinueve, moderado.' },
          { t: 'Severo: IAH ≥ 30', d: 'El corte de CPAP es 15',
            say: 'Y treinta o más, severo. Pero el número que más importa para el examen es quince, porque desde ahí se indica el tratamiento, como vemos ahora.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tratamiento',
      title: '¿Quién necesita CPAP?',
      nodes: [
        { id: 'psg', col: 0, row: 1, k: 'start', t: 'SAHOS confirmado', s: 'Polisomnografía con IAH' },
        { id: 'q', col: 1, row: 1, k: 'q', t: '¿IAH ≥ 15?', s: 'Moderado o severo' },
        { id: 'cp', col: 2, row: 0, k: 'good', t: 'CPAP nasal nocturno', s: 'Férula neumática' },
        { id: 'lev', col: 2, row: 2, k: 'q', t: 'Leve: ¿somnolencia, HTA o chofer?', s: 'IAH 5–14' },
        { id: 'gen', col: 3, row: 3, k: 'mech', t: 'Medidas generales', s: 'Baja de peso, sin alcohol ni sedantes' },
        { id: 'ben', col: 3, row: 0, k: 'effect', t: 'Beneficio', s: 'Menos somnolencia, accidentes y HTA' },
      ],
      edges: [
        { from: 'psg', to: 'q' }, { from: 'q', to: 'cp', label: 'sí' }, { from: 'q', to: 'lev', label: 'no' },
        { from: 'lev', to: 'cp', label: 'sí' }, { from: 'lev', to: 'gen', label: 'no' }, { from: 'cp', to: 'ben' },
      ],
      steps: [
        { show: ['psg', 'q'], note: 'El corte es 15',
          say: 'Con la polisomnografía hecha, la decisión es una sola: ¿el índice es de quince o más?' },
        { show: ['cp'], note: 'Mantiene abierta la faringe',
          say: 'Si lo es, el tratamiento de elección es el CPAP nasal durante el sueño: presión positiva continua en la vía aérea. Funciona como una férula neumática: el aire a presión mantiene abierta la faringe que tiende a colapsar. Ataca justo el mecanismo que vimos al principio.' },
        { show: ['ben'], note: 'Beneficio comprobado',
          say: 'Y su beneficio está comprobado: normaliza la somnolencia diurna, previene accidentes de tránsito y reduce la presión en la hipertensión refractaria.' },
        { show: ['lev'], note: 'El leve también puede necesitar CPAP',
          say: 'Ojo con el SAHOS leve, con índice entre cinco y catorce. También se indica CPAP si tiene hipersomnolencia diurna marcada, comorbilidad cardiovascular como hipertensión refractaria, o una profesión de riesgo, como un chofer.' },
        { show: ['gen'], note: 'Siempre, en todos',
          say: 'Si no tiene nada de eso, medidas generales: bajar de peso, que puede reducir el índice hasta en un cincuenta por ciento, evitar el alcohol y los sedantes nocturnos, terapia postural, y un dispositivo de avance mandibular. Y recuerda: la baja de peso y la suspensión de sedantes acompañan siempre al CPAP, no lo reemplazan.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos todo en un solo árbol, desde el ronquido hasta el CPAP.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Severidad y conducta',
      head: ['Severidad', 'IAH', 'Conducta'],
      rows: [
        { cells: ['Normal', '< 5 eventos/hora', 'Medidas higiénicas de sueño'],
          say: 'Repasemos la tabla de severidad con su conducta. Índice bajo cinco: normal, solo medidas higiénicas de sueño.' },
        { cells: ['Leve', '5 a 14', 'Baja de peso, sin alcohol ni BZD, avance mandibular; CPAP si somnolencia, HTA o chofer'],
          say: 'Leve, de cinco a catorce: baja de peso, sin alcohol ni benzodiacepinas, y dispositivo de avance mandibular. Pero CPAP si hay somnolencia marcada, hipertensión refractaria o una profesión de riesgo.' },
        { cells: ['Moderado', '15 a 29', 'CPAP nocturno: primera línea'],
          say: 'Moderado, de quince a veintinueve: CPAP nocturno, que es la primera línea.' },
        { cells: ['Severo', '≥ 30', 'CPAP obligatorio + control de HTA'],
          say: 'Y severo, treinta o más: CPAP obligatorio, con control de la presión arterial. Las trampas del examen en este punto son el oxígeno nocturno, la cirugía de la faringe y los hipnóticos. Ninguno reemplaza al CPAP, y las benzodiacepinas empeoran el colapso.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 50 años, conductor de camiones, IMC 36 kg/m², perímetro de cuello 46 cm, hipertenso con tres fármacos y mal control. Su esposa refiere ronquidos intensos y pausas respiratorias nocturnas. Epworth 15. La polisomnografía muestra un IAH de 42 eventos/hora, de predominio obstructivo.',
      question: '¿Cuál es el tratamiento de elección?',
      options: [
        { letter: 'A', text: 'Oxigenoterapia nocturna por naricera a 2 L/min' },
        { letter: 'B', text: 'Zopiclona nocturna para consolidar el sueño' },
        { letter: 'C', text: 'CPAP nasal nocturno más baja de peso' },
        { letter: 'D', text: 'Solo baja de peso y control en 6 meses' },
        { letter: 'E', text: 'Modafinilo diurno en monoterapia' },
      ],
      correct: 'C',
      explanation: 'IAH ≥ 30: SAHOS severo, con HTA refractaria y profesión de riesgo. El tratamiento de elección es CPAP nasal nocturno, siempre acompañado de baja de peso y sin sedantes. La baja de peso sola no basta en un SAHOS severo; los hipnóticos empeoran el colapso faríngeo.',
      say: {
        stem: 'Vamos con un caso. Hombre de cincuenta años, conductor de camiones, con índice de masa corporal de treinta y seis y cuello de cuarenta y seis centímetros, hipertenso mal controlado con tres fármacos. Su esposa cuenta ronquidos intensos y pausas respiratorias. Epworth de quince. La polisomnografía muestra un índice de cuarenta y dos eventos por hora, de predominio obstructivo.',
        question: '¿Cuál es el tratamiento de elección?',
        options: 'Las alternativas: oxígeno nocturno, zopiclona para dormir mejor, CPAP nasal más baja de peso, solo baja de peso y control, o modafinilo de día. Piénsalo.',
        answer: 'Es la C. Con un índice de cuarenta y dos es un SAHOS severo, y además tiene hipertensión refractaria y maneja camiones. CPAP, acompañado siempre de baja de peso. La D es la trampa tentadora: bajar de peso ayuda, pero en un severo no basta, y este paciente no puede esperar seis meses al volante. Y el hipnótico empeoraría el colapso de la faringe.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 13',
      stem: 'Un paciente de 43 años, obeso mórbido, consulta por cansancio y somnolencia diurna. Refiere que ronca en la noche y se queda dormido en las luces rojas del semáforo. En su examen físico destaca PA: 140/90 mmHg, FC: 72x’ y faringe normal.',
      question: '¿Qué examen es el más adecuado para proseguir el estudio en este paciente?',
      options: [
        { letter: 'A', text: 'Poligrafía nocturna' },
        { letter: 'B', text: 'Polisomnografía' },
        { letter: 'C', text: 'Saturación arterial de oxígeno durante el sueño' },
        { letter: 'D', text: 'Monitorización de presión arterial de 24 horas' },
        { letter: 'E', text: 'Nasofibroscopía' },
      ],
      correct: 'B',
      explanation: 'Obesidad, ronquidos y somnolencia diurna (se duerme en el semáforo): sospecha de SAHOS. El estándar de oro para confirmarlo y medir el IAH es la polisomnografía nocturna; la poligrafía es una alternativa, no el examen de elección.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil diecisiete. Paciente de cuarenta y tres años, obeso mórbido, con cansancio y somnolencia de día. Ronca en la noche y se queda dormido en la luz roja del semáforo. Presión de ciento cuarenta noventa, y faringe normal.',
        question: '¿Qué examen es el más adecuado para proseguir el estudio?',
        options: 'Las opciones: poligrafía nocturna, polisomnografía, saturación durante el sueño, monitoreo de presión de veinticuatro horas, o nasofibroscopía. Piénsalo.',
        answer: 'Es la B. Obeso, ronca y se duerme en el semáforo: es la sospecha típica de SAHOS, y el estándar de oro es la polisomnografía. La poligrafía es el distractor más fino, porque también sirve, pero es la alternativa ambulatoria, no el examen de elección. Y la faringe normal no descarta nada: el colapso ocurre al dormir.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 86',
      stem: 'Un paciente de 78 años, con sobrepeso, presenta alteraciones de la memoria y dificultades para concentrarse, que iniciaron hace 2 años y que han progresado, asociado a hipersomnia y cansancio.',
      question: '¿Cuál es el examen de elección para iniciar el estudio?',
      options: [
        { letter: 'A', text: 'Electrocardiograma' },
        { letter: 'B', text: 'Ecocardiograma' },
        { letter: 'C', text: 'Polisomnografía' },
        { letter: 'D', text: 'RMN de cerebro' },
        { letter: 'E', text: 'TAC de cerebro' },
      ],
      correct: 'C',
      explanation: 'Sobrepeso con hipersomnia y cansancio orientan a SAHOS; el sueño fragmentado explica la falla de memoria y concentración. El examen de elección es la polisomnografía.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de agosto de dos mil veintiuno, que también apareció casi igual en diciembre de dos mil diecinueve. Paciente de setenta y ocho años, con sobrepeso, con alteraciones de memoria y de concentración que progresan desde hace dos años, asociadas a hipersomnia y cansancio.',
        question: '¿Cuál es el examen de elección para iniciar el estudio?',
        options: 'Las opciones: electrocardiograma, ecocardiograma, polisomnografía, resonancia de cerebro, o TAC de cerebro. Piénsalo.',
        answer: 'Es la C. La pista es la hipersomnia en un paciente con sobrepeso. El sueño fragmentado por las apneas explica la falla de memoria y de concentración, y el examen es la polisomnografía. El distractor tentador son las imágenes de cerebro, porque la edad y la memoria hacen pensar en demencia. Pero la hipersomnia te dice que busques primero lo que pasa de noche.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 81',
      stem: 'Un Paciente de 52 años con historia de ronquidos frecuentes, de larga data, que desde hace 5 años, se asocia a somnolencia diurna excesiva y deterioro cognitivo. Al examen físico tiene frecuencia cardiaca de 75x\' y presión arterial de 140/100 mmHg. Su IMC es de 35. Se realiza polisomnografía que evidencia índice de apneas de 50 eventos de apnea / hipopnea por hora, con predominio de los eventos obstructivos.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Oxígeno nocturno' },
        { letter: 'B', text: 'C-PAP nocturno' },
        { letter: 'C', text: 'Cirugía bariátrica' },
        { letter: 'D', text: 'Uvulopalatoplastía' },
        { letter: 'E', text: 'Dispositivo orofaríngeo' },
      ],
      correct: 'B',
      explanation: 'IAH 50 (≥ 30): SAHOS severo, obstructivo, con somnolencia e HTA. El tratamiento de elección es el CPAP nasal nocturno. El oxígeno no evita el colapso faríngeo; la cirugía y los dispositivos no son primera línea en el SAHOS severo.',
      say: {
        stem: 'Una más, del EUNACOM de julio de dos mil dieciséis. Paciente de cincuenta y dos años, con ronquidos de larga data, somnolencia diurna y deterioro cognitivo. Presión de ciento cuarenta cien, e índice de masa corporal de treinta y cinco. La polisomnografía muestra cincuenta eventos por hora, de predominio obstructivo.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: oxígeno nocturno, CPAP nocturno, cirugía bariátrica, uvulopalatoplastía, o dispositivo orofaríngeo. Piénsalo.',
        answer: 'Es la B. Cincuenta eventos por hora es un SAHOS severo, y el tratamiento de elección es el CPAP. El oxígeno nocturno es el distractor: corrige la desaturación, pero no abre la faringe, así que las apneas y los microdespertares siguen igual. La cirugía y los dispositivos no son la primera línea en un severo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2024 · Pregunta 146',
      stem: 'Paciente con apnea del sueño, tenía polisomnografía con 65 episodios por hora, hipertrofia de cornetes conducta:',
      question: '¿Cuál es la conducta?',
      options: [
        { letter: 'A', text: 'CPAP' },
        { letter: 'B', text: 'Cirugía de cornetes' },
        { letter: 'C', text: 'Laparotomía exploratoria' },
        { letter: 'D', text: 'Cirugía laparoscópica' },
        { letter: 'E', text: 'Manejo conservador' },
      ],
      correct: 'A',
      explanation: 'IAH 65: SAHOS severo. El CPAP es el tratamiento de elección aunque exista un hallazgo anatómico como la hipertrofia de cornetes; la cirugía de cornetes no resuelve el colapso faríngeo.',
      say: {
        stem: 'Y la última, del EUNACOM de diciembre de dos mil veinticuatro, con un enunciado muy breve. Paciente con apnea del sueño, polisomnografía con sesenta y cinco eventos por hora, e hipertrofia de cornetes.',
        question: '¿Cuál es la conducta?',
        options: 'Las opciones: CPAP, cirugía de cornetes, laparotomía, cirugía laparoscópica, o manejo conservador. Piénsalo.',
        answer: 'Es la A. Sesenta y cinco eventos por hora es severo, y el severo va a CPAP. La cirugía de cornetes es la trampa: el enunciado te pone un hallazgo anatómico para que lo operes, pero el problema es el colapso de la faringe al dormir, y los cornetes no lo resuelven. Y el manejo conservador se queda corto en un severo.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Sospecha', tag: 'Tríada', kind: 'key', items: [
          { t: 'Ronquido + apneas + somnolencia', d: 'En obeso de cuello ancho',
            say: 'Cerremos con las reglas de oro. La sospecha es la tríada: ronquido, apneas presenciadas y somnolencia diurna, en un paciente obeso de cuello ancho.' },
          { t: 'Epworth > 10: estudiar', d: 'No confirma el diagnóstico',
            say: 'Un Epworth sobre diez indica estudiar, pero no confirma.' },
        ] },
        { title: 'Diagnóstico', tag: 'Estándar de oro', kind: 'criteria', items: [
          { t: 'Polisomnografía nocturna', d: 'IAH: 5, 15, 30',
            say: 'Lo que confirma es la polisomnografía, que da el índice de apnea hipopnea, con cortes en cinco, quince y treinta.' },
        ] },
        { title: 'Tratamiento', tag: 'Primera línea', kind: 'pharma', items: [
          { t: 'IAH ≥ 15: CPAP nasal', d: 'O leve con somnolencia, HTA o chofer',
            say: 'Desde quince, CPAP nasal nocturno, y también en el leve con somnolencia marcada, hipertensión refractaria o profesión de riesgo.' },
          { t: 'Siempre bajar de peso', d: 'Sin alcohol ni sedantes',
            say: 'Y siempre, bajar de peso y suspender el alcohol y los sedantes. Si te llevas una sola idea de hoy: el que ronca y se duerme de día va a polisomnografía, y desde un índice de quince, a CPAP. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'SAHOS: de la sospecha al CPAP',
    root: N('start', 'Ronquido + apneas + somnolencia', 'Obeso, cuello ancho',
      'Paciente obeso, de cuello ancho, que ronca, tiene pausas respiratorias que ve su pareja, y se duerme de día.',
      ['', N('q', 'Polisomnografía: ¿IAH?', 'Estándar de oro',
          'Un Epworth sobre diez confirma que la somnolencia es anormal, pero el diagnóstico lo da la polisomnografía nocturna, que entrega el índice de apnea hipopnea.',
          ['< 5', N('ok', 'Normal', 'Medidas higiénicas de sueño',
            'Bajo cinco eventos por hora es normal: medidas higiénicas de sueño.')],
          ['5–14', N('q', '¿Somnolencia, HTA o chofer?', 'SAHOS leve',
            'Entre cinco y catorce es leve. ¿Tiene somnolencia marcada, hipertensión refractaria o una profesión de riesgo?',
            ['NO', N('do', 'Medidas generales', 'Baja de peso, sin alcohol ni BZD, avance mandibular',
              'Si no, medidas generales: baja de peso, sin alcohol ni benzodiacepinas, terapia postural y avance mandibular.')],
            ['SÍ', N('alert', 'CPAP nocturno', 'Más medidas generales',
              'Si tiene alguna, CPAP nocturno, más las medidas generales.')])],
          ['≥ 15', N('alert', 'CPAP nasal nocturno', 'Más baja de peso',
            'Quince o más es moderado o severo: CPAP nasal nocturno, siempre con baja de peso y sin sedantes.')])]),
  },
};
