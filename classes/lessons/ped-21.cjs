// Clase 18.21 — guion docente escrito a mano (formato: ver gastro-01.cjs y gastro-17.cjs).
// Fuente clínica: books/scripts/dataset_pediatria.cjs / dataset_pediatria_bloque_4.cjs (ped-21).
// Preguntas reales: EUNACOM Diciembre 2024 · Pregunta 92; EUNACOM Diciembre 2017 · Pregunta 72;
// EUNACOM Julio 2019 · Pregunta 53.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-21',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Por qué se pesquisa a todos, aunque nazcan perfectos',
      say: 'Bienvenido. Hoy vemos el tamizaje neonatal universal en Chile: el hipotiroidismo congénito, la fenilcetonuria, y también la pesquisa auditiva y de cardiopatías. Vas a ver que las tres comparten una misma lógica: el daño ya está avanzando antes de que aparezca cualquier síntoma, y por eso se busca en todos, no solo en el que se ve enfermo. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'La lógica del tamizaje',
      title: '¿Por qué buscarlo si el niño se ve bien?',
      nodes: [
        { id: 'nac', col: 0, row: 1, k: 'start', t: 'Recién nacido sin síntomas', s: 'El 95 % se ve perfecto' },
        { id: 'hc', col: 1, row: 0, k: 'cause', t: 'Tiroides que no funciona', s: 'Disgenesia tiroidea' },
        { id: 'pku', col: 1, row: 2, k: 'cause', t: 'Enzima que falta', s: 'No se metaboliza la fenilalanina' },
        { id: 'sil', col: 2, row: 1, k: 'mech', t: 'El daño avanza en silencio', s: 'Semanas sin ninguna señal' },
        { id: 'ret', col: 3, row: 1, k: 'risk', t: 'Retraso mental si se demora', s: 'Y ya no se revierte' },
        { id: 'tam', col: 4, row: 1, k: 'good', t: 'Tamizaje al segundo día', s: 'Detecta antes del síntoma' },
      ],
      edges: [
        { from: 'hc', to: 'sil' }, { from: 'pku', to: 'sil' },
        { from: 'nac', to: 'sil' },
        { from: 'sil', to: 'ret', label: 'si no se busca' },
        { from: 'sil', to: 'tam', label: 'si se busca' },
      ],
      steps: [
        { show: ['nac'], note: 'Nace sin ninguna señal de alarma',
          say: 'Fíjate en el punto de partida: un recién nacido con hipotiroidismo congénito o fenilcetonuria nace casi siempre sin nada que llame la atención. El noventa y cinco por ciento se ve completamente sano.' },
        { show: ['hc'], note: 'La tiroides no se formó bien',
          say: 'En el hipotiroidismo congénito, la causa más frecuente es que la tiroides no se formó donde debía, o quedó demasiado pequeña.' },
        { show: ['pku'], note: 'Falta la enzima que procesa un aminoácido',
          say: 'En la fenilcetonuria, lo que falta es una enzima del hígado. Sin ella, un aminoácido de la dieta se acumula y se vuelve tóxico para el cerebro.' },
        { show: ['sil'], note: 'Meses de daño sin que nadie lo note',
          say: 'Y en las dos, el problema avanza en silencio, semana tras semana, mientras el niño sigue pareciendo normal.' },
        { show: ['ret'], note: 'El daño no se revierte',
          say: 'Si nadie lo busca, cuando por fin aparecen los síntomas ya pasaron semanas, y ese daño en el desarrollo cerebral ya no se recupera.' },
        { show: ['tam'], note: 'Se anticipa al síntoma',
          say: 'Por eso Chile pesquisa a todos los recién nacidos con una muestra de sangre del talón, antes de que exista cualquier síntoma. Esa es la idea que explica toda la clase.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Hipotiroidismo congénito',
      title: 'La causa más frecuente de retraso prevenible',
      cards: [
        { title: 'Cuándo sospecharlo si se escapó', tag: 'Signos tardíos', kind: 'alert', items: [
          { t: 'Fontanela posterior amplia', d: 'Y llanto ronco',
            say: 'Si este niño se te escapó del tamizaje, vas a verlo con signos tardíos: fontanela posterior amplia, y un llanto ronco.' },
          { t: 'Macroglosia y hernia umbilical', d: 'Con ictericia prolongada y constipación',
            say: 'Además, macroglosia, hernia umbilical, ictericia que se prolonga, y constipación pertinaz. Acuérdate de este conjunto, porque en el examen suele venir así, junto.' },
        ] },
        { title: 'Confirmación y tratamiento', tag: 'No se espera', kind: 'pharma', items: [
          { t: 'TSH y T4 libre venosa', d: 'Ante cualquier tamizaje alterado',
            say: 'Si el tamizaje de talón sale alterado, confirmas con TSH y T cuatro libre en sangre venosa.' },
          { t: 'Levotiroxina antes de los 15 días', d: 'Para proteger el coeficiente intelectual',
            say: 'Y parte con levotiroxina antes de los quince días de vida. Cuanto antes la inicies, mejor es el pronóstico intelectual. Esto no se espera ni un día más de lo necesario.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Fenilcetonuria',
      title: 'Una dieta puede evitar el retraso mental',
      cards: [
        { title: 'La condición para tomar el examen', tag: 'Ojo con esto', kind: 'key', items: [
          { t: 'Necesita alimentación previa', d: 'Al menos un día con leche',
            say: 'Un detalle que se pregunta seguido: para pesquisar la fenilcetonuria, el niño tiene que haber comido antes. Si tomas la muestra sin que haya recibido leche, la fenilalanina te va a salir falsamente normal.' },
        ] },
        { title: 'Tratamiento', tag: 'De por vida', kind: 'criteria', items: [
          { t: 'Dieta sin fenilalanina', d: 'Con fórmula especial y tirosina',
            say: 'El tratamiento no es un fármaco: es una dieta estricta, restringida en fenilalanina, con una fórmula especial que la reemplaza. Y es de por vida.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Logística del tamizaje',
      title: '¿Cuándo se toma la muestra de talón?',
      nodes: [
        { id: 'nac', col: 0, row: 1, k: 'start', t: 'Recién nacido en maternidad', s: 'Antes del alta' },
        { id: 'mom', col: 1, row: 1, k: 'mech', t: '40 a 48 horas de vida', s: 'Con alimentación láctea ya iniciada' },
        { id: 'tem', col: 2, row: 0, k: 'trap', t: 'Tomarla al cortar el cordón', s: 'Da falsos resultados' },
        { id: 'lab', col: 2, row: 2, k: 'good', t: 'Papel filtro al laboratorio', s: 'TSH y fenilalanina' },
      ],
      edges: [
        { from: 'nac', to: 'mom' }, { from: 'mom', to: 'lab' }, { from: 'mom', to: 'tem', label: 'error' },
      ],
      steps: [
        { show: ['nac'], note: 'Se toma antes del alta',
          say: 'Ahora, la logística. La muestra se toma en la misma maternidad, antes de que la mamá y el niño se vayan a casa.' },
        { show: ['mom'], note: 'El momento justo',
          say: 'El momento correcto es entre las cuarenta y las cuarenta y ocho horas de vida, y con el niño ya alimentándose, porque la fenilalanina necesita ese tiempo con leche para subir si hay enfermedad.' },
        { show: ['tem'], note: 'Muy temprano, sin alimentación',
          say: 'Y la trampa clásica es tomarla apenas nace, antes de la primera mamada: ahí la fenilalanina todavía no ha subido, y te puede quedar un falso normal.' },
        { show: ['lab'], note: 'Se procesa en un laboratorio central',
          say: 'Con el momento correcto, la muestra en papel filtro se envía y se miden ahí la TSH y la fenilalanina.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Otros dos tamizajes universales',
      title: 'Oído y corazón, el mismo día',
      cards: [
        { title: 'Tamizaje auditivo', tag: 'Antes del alta', kind: 'key', items: [
          { t: 'Emisiones otoacústicas', d: 'A todo recién nacido',
            say: 'Junto con el papel filtro van otros dos tamizajes. El del oído se hace con emisiones otoacústicas, antes de que el niño salga de la maternidad.' },
          { t: 'Si falla, se repite al mes', d: 'Y si sigue alterado, potenciales evocados',
            say: 'Si la primera prueba sale alterada, se repite al mes. Y si persiste, ahí recién van los potenciales evocados auditivos, para confirmar antes de los seis meses.' },
        ] },
        { title: 'Tamizaje cardíaco', tag: 'Oximetría de pulso', kind: 'criteria', items: [
          { t: 'Mano derecha y un pie', d: 'A las 24 a 48 horas de vida',
            say: 'Y el del corazón se hace con oximetría de pulso, comparando la mano derecha con un pie, a las veinticuatro o cuarenta y ocho horas de vida.' },
          { t: 'Busca cardiopatías dependientes del ductus', d: 'Antes de que se cierre y colapse',
            say: 'Lo que busca es una cardiopatía que depende del ductus para funcionar, y quieres encontrarla antes de que ese ductus se cierre solo y el niño colapse.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Pongamos todo el flujo del tamizaje en un solo árbol.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Momento, método y confirmación',
      head: ['Programa', 'Momento', 'Confirmación', 'Tratamiento'],
      rows: [
        { cells: ['Hipotiroidismo congénito', 'TSH de talón, 40 a 48 h', 'TSH y T4 libre venosa', 'Levotiroxina antes de los 15 días'],
          say: 'Repasemos en una tabla. Hipotiroidismo congénito: TSH de talón entre las cuarenta y las cuarenta y ocho horas, se confirma con TSH y T cuatro libre venosa, y se trata con levotiroxina antes de los quince días.' },
        { cells: ['Fenilcetonuria', 'Con alimentación láctea previa', 'Fenilalanina cuantitativa', 'Dieta sin fenilalanina de por vida'],
          say: 'Fenilcetonuria: exige alimentación láctea previa, se confirma con fenilalanina cuantitativa, y se trata con dieta sin fenilalanina de por vida.' },
        { cells: ['Hipoacusia', 'Emisiones otoacústicas al alta', 'Potenciales evocados si falla', 'Audífono o implante coclear'],
          say: 'Hipoacusia: emisiones otoacústicas al alta, y si falla, potenciales evocados para confirmar.' },
        { cells: ['Cardiopatía crítica', 'Oximetría a las 24–48 h', 'Ecocardiografía urgente', 'Prostaglandina si depende del ductus'],
          say: 'Y cardiopatía crítica: oximetría entre las veinticuatro y las cuarenta y ocho horas, y si sale alterada, ecocardiografía urgente.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Lactante de 1 mes, nacido de término en parto domiciliario rural, sin controles ni tamizaje de talón. La madre lo describe muy tranquilo, duerme todo el día, le cuesta mamar y tiene el abdomen distendido. Al examen: fontanela posterior amplia de 1,5 cm, ictericia leve, macroglosia, llanto ronco y hernia umbilical de 2 cm reducible.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Solicitar ecografía de tiroides como primer examen' },
        { letter: 'B', text: 'Solicitar TSH y T4 libre en sangre venosa, e iniciar levotiroxina oral' },
        { letter: 'C', text: 'Indicar fórmula libre de fenilalanina de forma empírica' },
        { letter: 'D', text: 'Control en un mes más, ya que a esta edad puede ser variante normal' },
        { letter: 'E', text: 'Solicitar cintigrama tiroideo antes de decidir cualquier tratamiento' },
      ],
      correct: 'B',
      explanation: 'El cuadro reúne los signos tardíos clásicos del hipotiroidismo congénito, que se debió pesquisar con el tamizaje que nunca se tomó. La conducta inmediata es confirmar con TSH y T4 libre en sangre venosa e iniciar levotiroxina oral sin retraso, para minimizar el daño en el desarrollo.',
      say: {
        stem: 'Vamos al caso. Lactante de un mes, nacido de término en un parto domiciliario rural, sin ningún control ni tamizaje de talón. La madre cuenta que es muy tranquilo, duerme todo el día, le cuesta mamar y tiene el abdomen distendido. Al examen tiene la fontanela posterior amplia, ictericia leve, macroglosia, llanto ronco y una hernia umbilical.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: ecografía de tiroides primero, TSH y T cuatro libre venosa con inicio de levotiroxina, fórmula libre de fenilalanina empírica, controlar en un mes más, o cintigrama tiroideo antes de tratar. Piénsalo.',
        answer: 'Es la B. Junta los signos: fontanela amplia, macroglosia, llanto ronco, hernia umbilical, y todo en un niño al que nunca le tomaron el talón. Es un hipotiroidismo congénito que se escapó del tamizaje. No hay tiempo que perder: TSH y T cuatro libre para confirmar, y levotiroxina de inmediato. Esperar un cintigrama, o esperar otro mes, solo suma más días de daño.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2024 · Pregunta 92',
      stem: 'Lactante que llega sin test de audición a su primer control.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Emisiones otoacústicas' },
        { letter: 'B', text: 'Impedanciometría' },
        { letter: 'C', text: 'Evaluación por fonoaudiología' },
        { letter: 'D', text: 'Audiometría' },
        { letter: 'E', text: 'Reflejo cocleopalpebral' },
      ],
      correct: 'A',
      explanation: 'El examen de tamizaje auditivo universal en el recién nacido es la medición de emisiones otoacústicas. Los potenciales evocados quedan para cuando esta prueba sale alterada, no como primera opción.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de diciembre de dos mil veinticuatro. Un lactante llega a su primer control sin haberse hecho el test de audición.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: emisiones otoacústicas, impedanciometría, evaluación por fonoaudiología, audiometría, o reflejo cocleopalpebral.',
        answer: 'Es la A, emisiones otoacústicas. Es exactamente el examen de tamizaje que vimos: se hace primero, y es el que le faltó a este niño. La audiometría y los potenciales evocados vienen después, solo si esta primera prueba sale alterada.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 72',
      stem: 'Screening de fenilcetonuria que se hace a todos los recién nacidos en Chile.',
      question: '¿A qué tipo de medida corresponde?',
      options: [
        { letter: 'A', text: 'Promoción de la salud' },
        { letter: 'B', text: 'Protección de la salud' },
        { letter: 'C', text: 'Prevención primaria' },
        { letter: 'D', text: 'Prevención secundaria' },
        { letter: 'E', text: 'Prevención terciaria' },
      ],
      correct: 'D',
      explanation: 'Un tamizaje detecta una enfermedad que ya está presente, antes de que dé síntomas: eso es prevención secundaria. La prevención primaria evitaría que la enfermedad apareciera; aquí la enfermedad ya existe, solo se adelanta el diagnóstico.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil diecisiete. Te preguntan por el tamizaje de fenilcetonuria que se hace a todos los recién nacidos en Chile.',
        question: '¿A qué tipo de medida corresponde?',
        options: 'Las opciones: promoción de la salud, protección de la salud, prevención primaria, prevención secundaria, o prevención terciaria.',
        answer: 'Es la D, prevención secundaria. Y esto conecta con toda la clase: la enfermedad ya está ahí, ya tiene la falla enzimática o la tiroides que no funciona, solo que todavía no da síntomas. Detectarla en esa etapa silenciosa es prevención secundaria, no primaria. La primaria evitaría que la enfermedad ocurriera, y eso aquí no se puede.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 53',
      stem: 'Lactante de 3 meses, diagnosticado de hipotiroidismo congénito, en tratamiento con levotiroxina. TSH: 0,09 (normal 0,7 a 5,7). T4 libre: 2,18 (normal 0,9 a 2,1).',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Suspender la levotiroxina' },
        { letter: 'B', text: 'Subir la dosis de levotiroxina' },
        { letter: 'C', text: 'Repetir la TSH en 6 semanas, sin cambios' },
        { letter: 'D', text: 'Disminuir la dosis de levotiroxina' },
        { letter: 'E', text: 'Solicitar cintigrafía tiroidea' },
      ],
      correct: 'D',
      explanation: 'La TSH está bajo lo normal y la T4 libre sobre lo normal: el lactante está sobretratado. La conducta es disminuir la dosis de levotiroxina y reevaluar, no suspenderla, porque el tratamiento de por vida sigue siendo necesario.',
      say: {
        stem: 'Y la última pregunta real, del EUNACOM de julio de dos mil diecinueve. Lactante de tres meses, ya diagnosticado de hipotiroidismo congénito y en tratamiento con levotiroxina. La TSH le sale muy baja, y la T cuatro libre por sobre lo normal.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: suspender la levotiroxina, subir la dosis, repetir la TSH sin cambios, disminuir la dosis, o pedir un cintigrama tiroideo.',
        answer: 'Es la D. Esto es después del diagnóstico, así que ya cambia la pregunta: aquí no se trata de confirmar, sino de ajustar. Una TSH tan baja con la T cuatro libre alta te dice que la dosis está muy alta para este lactante, así que la bajas y controlas. Suspenderla sería un error grave, porque el hipotiroidismo congénito se trata de por vida.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'La idea que ordena todo', tag: 'Antes del síntoma', kind: 'key', items: [
          { t: 'Se busca en todos', d: 'Aunque el niño se vea sano',
            say: 'Cerremos con las reglas de oro. El tamizaje se hace a todos, aunque el niño se vea perfectamente sano, porque el daño avanza antes del síntoma.' },
          { t: 'Es prevención secundaria', d: 'Detecta lo que ya existe',
            say: 'Y en salud pública, esto es prevención secundaria: la enfermedad ya está, se adelanta el diagnóstico.' },
        ] },
        { title: 'Los dos condicionantes', tag: 'Momento y método', kind: 'criteria', items: [
          { t: 'Talón entre 40 y 48 horas', d: 'Con alimentación láctea ya iniciada',
            say: 'La muestra de talón se toma entre las cuarenta y las cuarenta y ocho horas, con alimentación láctea ya iniciada para no perder la fenilcetonuria.' },
          { t: 'Confirmar en sangre venosa', d: 'Nunca tratar solo con el talón alterado',
            say: 'Y todo tamizaje alterado se confirma en sangre venosa antes de tratar. Si te llevas una sola idea de hoy: se busca antes del síntoma, y se confirma antes de tratar. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: (() => {
    const nEsperar = N('alert', 'Esperar antes de tomar la muestra', 'Si no, sale falsamente normal',
      'Si todavía no ha comido, esperas: sin alimentación previa, la fenilalanina puede salir falsamente normal.');
    const nHipotiroidismo = N('refer', 'Sospecha de hipotiroidismo congénito', 'Confirmar con TSH y T4 libre venosa',
      'TSH alta en el talón: confirmas con TSH y T cuatro libre en sangre venosa, e inicias levotiroxina antes de los quince días.');
    const nPKU = N('refer', 'Sospecha de fenilcetonuria', 'Confirmación cuantitativa',
      'Fenilalanina alta en el talón: confirmas de forma cuantitativa e inicias la dieta sin fenilalanina.');
    const nContinua = N('ok', 'Continúa con el resto del tamizaje', 'Auditivo y cardíaco',
      'Si el talón sale normal, igual continúas con el tamizaje auditivo y el de cardiopatías críticas, porque son programas independientes.');
    const nResultado = N('q', '¿Resultado alterado?', 'TSH alta o fenilalanina alta',
      'El resultado te separa en dos sospechas distintas.',
      ['TSH alta', nHipotiroidismo],
      ['Fenilalanina alta', nPKU],
      ['Normal', nContinua]);
    const nToma = N('do', 'Toma de talón entre 40 y 48 horas', 'TSH y fenilalanina',
      'Con alimentación ya iniciada, tomas el papel filtro entre las cuarenta y las cuarenta y ocho horas de vida.',
      ['', nResultado]);
    const nAlimentacion = N('q', '¿Ya recibió alimentación láctea?', 'Al menos 24 a 48 horas',
      'Antes de tomar la muestra de talón, preguntas si ya comió, porque de eso depende que la fenilalanina sea confiable.',
      ['NO', nEsperar],
      ['SÍ', nToma]);
    return {
      title: 'Tamizaje neonatal: qué se busca y cuándo',
      root: N('start', 'Recién nacido en maternidad', 'Sin ningún síntoma, antes del alta',
        'Punto de partida: un recién nacido que se ve completamente sano, antes de irse a casa.',
        ['', nAlimentacion]),
    };
  })(),
};
