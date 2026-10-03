// Clase Neumología 1.1 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neumologia.cjs (resp-01, bloque 1).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'resp-01',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Leer una espirometría en tres pasos: obstrucción, reversibilidad y sospecha de restricción',
      say: 'Bienvenidos a la primera clase de neumología. Partimos por la espirometría, porque es la llave de todo el bloque: con ella se confirma el asma y la EPOC, que son las dos garantías GES que vienen en las próximas clases. Y la buena noticia es que el examen siempre pregunta lo mismo: si hay obstrucción, si revierte con el broncodilatador, y qué hacer cuando la espirometría sugiere restricción. Partamos.',
    },

    {
      type: 'points',
      kicker: 'Parámetros',
      title: 'Tres números y una prueba válida',
      cards: [
        { title: 'Las tres variables', tag: 'Lo que se mide', kind: 'key', items: [
          { t: 'VEF1', d: 'Volumen espirado en el primer segundo',
            say: 'La espirometría mide tres cosas. La primera es el volumen espiratorio forzado en el primer segundo, el VEF uno: cuánto aire logra sacar el paciente en el primer segundo de un soplido máximo.' },
          { t: 'CVF', d: 'Todo el aire que sale en la espiración forzada',
            say: 'La segunda es la capacidad vital forzada, la CVF: todo el aire que sale, desde la inspiración máxima hasta vaciar el pulmón.' },
          { t: 'VEF1/CVF', d: 'Índice de Tiffeneau',
            say: 'Y la tercera es la relación entre ambas, el índice de Tiffeneau. Esta relación es la que más importa, porque es la que define si hay obstrucción.' },
        ] },
        { title: 'Prueba válida', tag: 'Antes de interpretar', kind: 'criteria', items: [
          { t: 'Al menos 3 maniobras reproducibles', d: 'Con esfuerzo máximo',
            say: 'Antes de interpretar, la prueba tiene que ser válida: al menos tres maniobras reproducibles, con esfuerzo máximo.' },
          { t: 'Meseta espiratoria ≥ 6 segundos', d: 'El paciente sopla hasta vaciar',
            say: 'Y una meseta espiratoria de seis segundos o más. Si el paciente corta el soplido antes, la CVF sale falsamente baja, y puedes terminar sospechando una restricción que no existe.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Patrón obstructivo',
      title: 'La relación define, el VEF1 gradúa',
      cards: [
        { title: 'Define la obstrucción', tag: 'Paso 1', kind: 'key', items: [
          { t: 'VEF1/CVF < 0,70', d: 'O bajo el límite inferior de normalidad',
            say: 'Ahora el primer paso de la lectura. Hay patrón obstructivo cuando la relación VEF uno sobre CVF es menor de cero coma setenta, o está bajo el límite inferior de normalidad. La lógica es simple: en la obstrucción el aire sale lento, entonces en el primer segundo sale una fracción menor del total.' },
          { t: 'Sin relación baja, no hay obstrucción', d: 'Aunque el VEF1 esté bajo',
            say: 'Y ojo: sin relación baja no hay obstrucción, aunque el VEF uno esté bajo. Un VEF uno bajo con relación normal es otra historia, que vemos al final.' },
        ] },
        { title: 'Gradúa la severidad', tag: 'VEF1 post-BD', kind: 'criteria', items: [
          { t: 'Leve ≥ 80% · moderada 50–79%', d: 'Del valor predicho',
            say: 'Una vez que sabes que hay obstrucción, la severidad se gradúa solo con el VEF uno después del broncodilatador. Leve, ochenta por ciento o más; moderada, entre cincuenta y setenta y nueve.' },
          { t: 'Grave 30–49% · muy grave < 30%', d: 'No se gradúa con la relación',
            say: 'Grave, entre treinta y cuarenta y nueve; y muy grave, bajo treinta. Fíjate en la división de tareas, porque se pregunta: la relación dice si hay obstrucción, y el VEF uno dice cuán grave es.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Prueba broncodilatadora',
      title: '¿La obstrucción revierte?',
      nodes: [
        { id: 'obs', col: 0, row: 1, k: 'start', t: 'Patrón obstructivo', s: 'VEF1/CVF < 0,70' },
        { id: 'sal', col: 1, row: 1, k: 'mech', t: 'Salbutamol 400 mcg', s: 'Con aerocámara; repetir a los 15 min' },
        { id: 'q', col: 2, row: 1, k: 'q', t: '¿VEF1 o CVF ≥ 12% y ≥ 200 mL?', s: 'Respecto del basal' },
        { id: 'asm', col: 3, row: 0, k: 'good', t: 'Reversible: asma', s: 'Se normaliza la relación' },
        { id: 'epo', col: 3, row: 2, k: 'risk', t: 'Fija: EPOC', s: 'Relación < 0,70 post-BD en fumador' },
        { id: 'tra', col: 4, row: 1, k: 'trap', t: 'Las dos condiciones', s: 'Porcentaje Y mililitros' },
      ],
      edges: [
        { from: 'obs', to: 'sal' }, { from: 'sal', to: 'q' },
        { from: 'q', to: 'asm', label: 'sí' }, { from: 'q', to: 'epo', label: 'no' },
        { from: 'q', to: 'tra', label: 'ojo' },
      ],
      steps: [
        { show: ['obs'], note: 'Ya sabemos que hay obstrucción',
          say: 'Segundo paso. Ya sabemos que hay obstrucción; ahora la pregunta es si revierte, porque eso es lo que separa el asma de la EPOC.' },
        { show: ['sal'], note: 'Se repite la maniobra tras el broncodilatador',
          say: 'Para eso se administran cuatrocientos microgramos de salbutamol en aerosol con aerocámara, y se repite la espirometría a los quince minutos.' },
        { show: ['q'], note: 'Respuesta broncodilatadora positiva',
          say: 'La respuesta es positiva cuando el VEF uno o la CVF suben doce por ciento o más, y además doscientos mililitros o más, respecto del valor basal.' },
        { show: ['asm'], note: 'Obstrucción reversible',
          say: 'Si la prueba es positiva y la relación se normaliza, la obstrucción es reversible, y eso confirma asma bronquial. Es un bronquio que se contrae y se relaja.' },
        { show: ['epo'], note: 'Obstrucción fija',
          say: 'Si la obstrucción persiste después del broncodilatador en un fumador, es una obstrucción fija, y eso confirma EPOC. Un matiz del libro: hasta un tercio de los pacientes con EPOC tiene algo de reversibilidad parcial, así que lo que manda es que la relación siga bajo cero coma setenta después del broncodilatador.' },
        { show: ['tra'], note: 'Porcentaje sobre el basal, no puntos',
          say: 'Y la trampa de cálculo. Se exigen las dos condiciones a la vez, el porcentaje y los mililitros. Por ejemplo, un VEF uno que pasa de uno coma sesenta a uno coma setenta y dos litros subió ciento veinte mililitros, apenas siete coma cinco por ciento: no es respuesta positiva.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Sospecha de restricción',
      title: 'La espirometría sugiere, la pletismografía confirma',
      nodes: [
        { id: 'nor', col: 0, row: 1, k: 'start', t: 'VEF1/CVF ≥ 0,70', s: 'No hay obstrucción' },
        { id: 'cvf', col: 1, row: 1, k: 'q', t: '¿CVF < 80%?', s: 'Del valor predicho' },
        { id: 'sug', col: 2, row: 1, k: 'risk', t: 'Sugiere restricción', s: 'Defecto no obstructivo' },
        { id: 'ple', col: 3, row: 1, k: 'good', t: 'Pletismografía corporal', s: 'CPT < 80% confirma' },
        { id: 'mix', col: 2, row: 3, k: 'refer', t: 'Relación baja + CVF < 80%', s: 'Posible patrón mixto' },
        { id: 'tra', col: 4, row: 1, k: 'trap', t: 'Diagnosticar fibrosis', s: 'Solo con la espirometría' },
      ],
      edges: [
        { from: 'nor', to: 'cvf' }, { from: 'cvf', to: 'sug', label: 'sí' },
        { from: 'sug', to: 'ple' }, { from: 'mix', to: 'ple' }, { from: 'ple', to: 'tra', label: 'nunca' },
      ],
      steps: [
        { show: ['nor'], note: 'Tercer paso: relación normal',
          say: 'Tercer paso. ¿Qué pasa si la relación es normal, cero coma setenta o más? No hay obstrucción. Pero todavía falta mirar la CVF.' },
        { show: ['cvf', 'sug'], note: 'Relación normal con CVF baja',
          say: 'Si la CVF está bajo el ochenta por ciento del predicho, el pulmón está sacando menos aire en total. La espirometría sugiere una posible alteración restrictiva, o lo que se llama un defecto ventilatorio no obstructivo.' },
        { show: ['ple'], note: 'Se miden los volúmenes estáticos',
          say: 'Y aquí está la regla de oro de esta clase: la espirometría nunca confirma restricción. Para confirmarla hay que medir los volúmenes pulmonares estáticos con una pletismografía corporal, y demostrar una capacidad pulmonar total, la CPT, bajo el ochenta por ciento.' },
        { show: ['mix'], note: 'Obstrucción con CVF baja',
          say: 'Lo mismo vale para el patrón mixto: relación baja y CVF baja a la vez. La espirometría no alcanza a separar cuánto es obstrucción y cuánto restricción, y también se resuelve con pletismografía.' },
        { show: ['tra'], note: 'Primero la CPT, después el diagnóstico',
          say: 'La trampa es saltarse ese paso: ver una CVF baja y diagnosticar una fibrosis pulmonar, o empezar un tratamiento. Primero se confirma la restricción con la CPT.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos los tres pasos en un solo árbol, en el orden en que vas a leer cualquier espirometría del examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Los patrones espirométricos',
      head: ['Patrón', 'VEF1/CVF', 'CVF', 'Qué lo confirma'],
      rows: [
        { cells: ['Normal', '≥ 0,70', '≥ 80%', 'Espirometría normal'],
          say: 'Repasemos los patrones. Normal: relación de cero coma setenta o más y CVF de ochenta por ciento o más. Con eso la espirometría es concluyente.' },
        { cells: ['Obstructivo reversible', '< 0,70', 'Normal o baja', 'Prueba BD positiva: asma'],
          say: 'Obstructivo reversible: relación baja que mejora con el broncodilatador, doce por ciento y doscientos mililitros. Eso es asma.' },
        { cells: ['Obstructivo fijo', '< 0,70 post-BD', 'Normal o baja', 'Espirometría post-BD: EPOC'],
          say: 'Obstructivo fijo: la relación sigue bajo cero coma setenta después del broncodilatador. En un fumador, eso es EPOC.' },
        { cells: ['Sugerente de restricción', '≥ 0,70', '< 80%', 'Pletismografía: CPT < 80%'],
          say: 'Sugerente de restricción: relación normal con CVF baja. La trampa es darla por confirmada; la confirma la pletismografía, con CPT bajo ochenta por ciento.' },
        { cells: ['Mixto', '< 0,70', '< 80%', 'Pletismografía: CPT baja'],
          say: 'Y el mixto: relación baja y CVF baja a la vez. También necesita pletismografía.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 54 años, fumador de 25 paquetes-año, con disnea de esfuerzo progresiva. Espirometría basal: VEF1/CVF 0,58; VEF1 1,60 L (52% del predicho); CVF 2,76 L (78%). Tras 400 mcg de salbutamol: VEF1 1,72 L (aumento de 120 mL y 7,5%), VEF1/CVF 0,60.',
      question: '¿Cuál es la interpretación más adecuada?',
      options: [
        { letter: 'A', text: 'Asma bronquial con respuesta broncodilatadora positiva' },
        { letter: 'B', text: 'EPOC con limitación moderada al flujo aéreo' },
        { letter: 'C', text: 'Restricción pulmonar confirmada por CVF bajo 80%' },
        { letter: 'D', text: 'EPOC con limitación muy grave al flujo aéreo' },
        { letter: 'E', text: 'Espirometría normal para la edad' },
      ],
      correct: 'B',
      explanation: 'VEF1/CVF post-BD < 0,70 con cambio < 12% y < 200 mL: obstrucción no reversible, que en un fumador confirma EPOC. La severidad se gradúa por el VEF1 post-BD: 52% es moderada (50–79%). La CVF baja no confirma restricción.',
      say: {
        stem: 'Vamos con un caso. Hombre de cincuenta y cuatro años, fumador de veinticinco paquetes año, con disnea de esfuerzo progresiva. La relación basal es cero coma cincuenta y ocho, el VEF uno está en cincuenta y dos por ciento del predicho y la CVF en setenta y ocho. Después del salbutamol, el VEF uno sube ciento veinte mililitros, un siete coma cinco por ciento, y la relación queda en cero coma sesenta.',
        question: '¿Cuál es la interpretación más adecuada?',
        options: 'Las opciones: asma con prueba broncodilatadora positiva, EPOC moderada, restricción confirmada por la CVF baja, EPOC muy grave, o espirometría normal. Piénsalo.',
        answer: 'Es la B. Aplica los tres pasos. La relación es baja: hay obstrucción. Sube ciento veinte mililitros y siete coma cinco por ciento, no cumple ninguna de las dos condiciones: es fija, y en un fumador es EPOC. Y la severidad la da el VEF uno post broncodilatador, cincuenta y dos por ciento: moderada. La A es el distractor tentador porque algo mejoró, pero no alcanzó el umbral. Y la C cae porque la CVF baja nunca confirma restricción.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 76',
      stem: 'Paciente de 45 años, fumadora activa de 40 paquetes año, consulta por tos irritativa asociada a disnea y crisis de sibilancias que aparecen en relación a la actividad física e infecciones respiratorias. Se realiza una espirometría que muestra: Basal: VEF1/CVF: 62% VEF1: 2,4L (62% del valor teórico) CVF: 4,9L (92% del valor teórico) Post-Salbutamol VEF1/CVF: 74% VEF1: 3,6L (89% del valor teórico) CVF: 5,0L (95% del valor teórico)',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Asma' },
        { letter: 'B', text: 'EPOC' },
        { letter: 'C', text: 'Fibrosis pulmonar' },
        { letter: 'D', text: 'Bronquiectasias' },
        { letter: 'E', text: 'Bronquitis crónica' },
      ],
      correct: 'A',
      explanation: 'Patrón obstructivo (VEF1/CVF 62%) que revierte con broncodilatador: el VEF1 sube 1,2 L (50%) y la relación se normaliza a 74%. Es una obstrucción reversible, es decir, asma, aunque la paciente fume.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil diecisiete. Mujer de cuarenta y cinco años, fumadora activa de cuarenta paquetes año, con tos, disnea y crisis de sibilancias con el ejercicio y las infecciones. La relación basal es sesenta y dos por ciento y el VEF uno dos coma cuatro litros. Después del salbutamol, la relación sube a setenta y cuatro y el VEF uno a tres coma seis litros.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: asma, EPOC, fibrosis pulmonar, bronquiectasias o bronquitis crónica. Piénsalo.',
        answer: 'Es la A, asma. Hay obstrucción, y el VEF uno sube un litro doscientos, un cincuenta por ciento, y la relación se normaliza: es reversible. El distractor es la EPOC, porque la paciente fuma cuarenta paquetes año. Pero el tabaco no decide el diagnóstico; lo decide la espirometría. Una obstrucción que se normaliza con el broncodilatador es asma.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2024 · Pregunta 175',
      stem: 'Espirometría con VEF1/CVF 0.35, no mejora post broncodilatador, VEF1 50%',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Fibrosis pulmonar' },
        { letter: 'B', text: 'Insuficiencia cardiaca derecha' },
        { letter: 'C', text: 'EPOC' },
        { letter: 'D', text: 'Asma' },
        { letter: 'E', text: 'Bronquiectasias' },
      ],
      correct: 'C',
      explanation: 'Relación VEF1/CVF muy baja que no mejora con broncodilatador: obstrucción fija, es decir, EPOC. Con VEF1 de 50%, la limitación es moderada (50–79%).',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil veinticuatro. Espirometría con relación de cero coma treinta y cinco, que no mejora después del broncodilatador, y VEF uno de cincuenta por ciento.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: fibrosis pulmonar, insuficiencia cardíaca derecha, EPOC, asma o bronquiectasias. Piénsalo.',
        answer: 'Es la C, EPOC. La relación es muy baja: hay obstrucción. No mejora con el broncodilatador: es fija. Eso es EPOC, y con un VEF uno de cincuenta por ciento, la limitación es moderada. La fibrosis cae porque da un patrón restrictivo, con relación normal. Y fíjate que la relación tan baja no te dice la severidad; eso lo dice el VEF uno.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Obstrucción', tag: 'Paso 1', kind: 'key', items: [
          { t: 'VEF1/CVF < 0,70 define', d: 'El VEF1 post-BD gradúa',
            say: 'Cerremos con las reglas de oro. La relación bajo cero coma setenta define la obstrucción, y el VEF uno post broncodilatador gradúa la severidad.' },
        ] },
        { title: 'Reversibilidad', tag: 'Paso 2', kind: 'criteria', items: [
          { t: '≥ 12% Y ≥ 200 mL', d: 'En el VEF1 o la CVF',
            say: 'La prueba broncodilatadora es positiva con doce por ciento y doscientos mililitros, las dos condiciones a la vez.' },
          { t: 'Reversible = asma · fija = EPOC', d: 'El tabaco no decide, decide la curva',
            say: 'Reversible es asma, y fija, en un fumador, es EPOC. Justamente las dos clases que vienen: la crisis asmática y el asma crónica, y después la EPOC.' },
        ] },
        { title: 'Restricción', tag: 'Paso 3', kind: 'alert', items: [
          { t: 'La espirometría solo sugiere', d: 'Relación normal + CVF < 80%',
            say: 'Relación normal con CVF baja solo sugiere restricción.' },
          { t: 'La pletismografía confirma', d: 'CPT < 80%',
            say: 'Y la confirma la pletismografía, con CPT bajo ochenta por ciento. Si te llevas una sola idea de hoy: la relación define la obstrucción, el broncodilatador separa asma de EPOC, y la espirometría nunca confirma restricción. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Lectura sistemática de la espirometría',
    root: N('start', 'Espirometría basal y post-BD', 'Prueba válida: 3 maniobras',
      'Tienes una espirometría válida, con prueba broncodilatadora. Siempre la lees en el mismo orden.',
      ['', N('q', '¿VEF1/CVF < 0,70?', 'O bajo el LIN',
        'Primero la relación: ¿está bajo cero coma setenta? Esa pregunta abre dos caminos.',
        ['SÍ: obstrucción', N('q', '¿Respuesta BD positiva?', '≥ 12% y ≥ 200 mL',
          'Hay obstrucción. Ahora, ¿el VEF uno o la CVF suben doce por ciento y doscientos mililitros con el broncodilatador?',
          ['SÍ, se normaliza', N('ok', 'Obstrucción reversible', 'Asma bronquial',
            'Si revierte y la relación se normaliza, es asma bronquial.')],
          ['NO, persiste', N('do', 'Obstrucción fija', 'EPOC; gradúa con el VEF1 post-BD',
            'Si la relación sigue baja después del broncodilatador en un fumador, es EPOC. La severidad la da el VEF uno post broncodilatador.')],
          ['CVF también < 80%', N('refer', 'Posible patrón mixto', 'Pletismografía',
            'Si además la CVF está baja, puede ser un patrón mixto, y se aclara con pletismografía.')])],
        ['NO', N('q', '¿CVF < 80%?', 'Relación normal',
          'Sin obstrucción, mira la CVF. ¿Está bajo el ochenta por ciento?',
          ['NO', N('ok', 'Espirometría normal', 'Concluyente',
            'Si la CVF es normal, la espirometría es normal.')],
          ['SÍ', N('refer', 'Sugiere restricción', 'Pletismografía: CPT < 80% confirma',
            'Si la CVF está baja, solo sugiere restricción. Se confirma con pletismografía, con una CPT bajo ochenta por ciento.')])])]),
  },
};
