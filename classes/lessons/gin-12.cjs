// Clase 20.12 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_ginecologia.cjs (gin-12).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gin-12',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'La ventana de oportunidad, y la pregunta que decide si va progestágeno',
      say: 'Bienvenida. Hoy vemos climaterio, menopausia y la terapia de reemplazo hormonal. Es un tema muy preguntado, y se resuelve con dos preguntas simples: si la paciente está dentro de la ventana de oportunidad para partir la terapia, y si tiene o no tiene útero. Con esas dos respuestas, sabes exactamente qué recetar.',
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Menopausia: un diagnóstico clínico',
      cards: [
        { title: 'Cómo se define', tag: 'No pidas exámenes de rutina', kind: 'key', items: [
          { t: 'Doce meses sin regla', d: 'En una mujer mayor de 45 años',
            say: 'Empecemos por el diagnóstico. La menopausia se define solo con la clínica: doce meses seguidos sin menstruar, en una mujer mayor de cuarenta y cinco años.' },
          { t: 'No pidas FSH de rutina', d: 'Solo si sospechas falla ovárica antes de los 40',
            say: 'Y fíjate en algo importante: no necesitas pedir la hormona folículo estimulante para confirmarlo. Solo la pides si sospechas una falla ovárica antes de los cuarenta años.' },
        ] },
        { title: 'Síntomas por plazo', tag: 'Corto, mediano y largo', kind: 'criteria', items: [
          { t: 'Bochornos e insomnio', d: 'Lo primero que aparece',
            say: 'A corto plazo, lo que más molesta son los bochornos y el insomnio.' },
          { t: 'Sequedad vaginal y disuria', d: 'El síndrome genitourinario de la menopausia',
            say: 'A mediano plazo, aparece la atrofia: sequedad vaginal, dispareunia, y más infecciones urinarias.' },
          { t: 'Osteoporosis y riesgo cardiovascular', d: 'A largo plazo, sin tratar',
            say: 'Y a largo plazo, osteoporosis y más riesgo cardiovascular, si nunca se trata el hipoestrogenismo.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Terapia de reemplazo hormonal',
      title: 'La ventana de oportunidad',
      nodes: [
        { id: 'sint', col: 0, row: 1, k: 'start', t: 'Síntomas climatéricos', s: 'Que afectan la calidad de vida' },
        { id: 'vent', col: 1, row: 1, k: 'q', t: '¿Está en la ventana?', s: 'Menos de 60 años, o menos de 10 postmenopausia' },
        { id: 'si', col: 2, row: 0, k: 'good', t: 'Beneficio claro', s: 'Cardiovascular y óseo' },
        { id: 'no', col: 2, row: 2, k: 'alert', t: 'Riesgo aumenta', s: 'Más eventos coronarios y ACV' },
      ],
      edges: [
        { from: 'sint', to: 'vent' },
        { from: 'vent', to: 'si', label: 'sí' },
        { from: 'vent', to: 'no', label: 'no' },
      ],
      steps: [
        { show: ['sint'], note: 'El punto de partida',
          say: 'Toda paciente con síntomas climatéricos que le afectan la vida diaria es candidata a terapia. Pero antes de recetar, tienes que ubicarla en el tiempo.' },
        { show: ['vent'], note: 'El concepto que más se pregunta',
          say: 'Y aquí está el concepto central: la ventana de oportunidad. Se considera segura si la mujer tiene menos de sesenta años, o si está a menos de diez años de su menopausia.' },
        { show: ['si'], note: 'Iniciar dentro de la ventana protege',
          say: 'Dentro de esa ventana, iniciar la terapia da un beneficio claro: protege el hueso y ayuda al perfil cardiovascular.' },
        { show: ['no'], note: 'Fuera de la ventana, el riesgo supera al beneficio',
          say: 'Pero fuera de esa ventana, iniciarla por primera vez aumenta el riesgo de infarto, accidente vascular y demencia. Guarda ese contraste, porque el examen lo pregunta directo.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Terapia de reemplazo hormonal',
      title: '¿Tiene útero, o no lo tiene?',
      cards: [
        { title: 'Con útero intacto', tag: 'El progestágeno es obligatorio', kind: 'pharma', items: [
          { t: 'Estrógeno más progestágeno', d: 'Siempre juntos',
            say: 'Si tu paciente tiene el útero intacto, siempre das estrógeno con progestágeno.' },
          { t: 'El progestágeno protege el endometrio', d: 'Sin él, el estrógeno da hiperplasia',
            say: 'El progestágeno no es opcional: sin él, el estrógeno solo estimula el endometrio y puede terminar en un cáncer.' },
        ] },
        { title: 'Sin útero, histerectomizada', tag: 'Estrógeno solo', kind: 'pharma', items: [
          { t: 'Solo estrógeno', d: 'Nunca agregues progestágeno',
            say: 'Si ya no tiene útero, porque fue histerectomizada, das solo estrógeno. No hay endometrio que proteger.' },
          { t: 'Agregarlo sube el riesgo mamario', d: 'Sin ningún beneficio extra',
            say: 'Y agregar progestágeno aquí solo suma riesgo de cáncer de mama, sin ningún beneficio a cambio. Esa es la trampa más repetida del tema.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Contraindicaciones',
      title: 'Cuándo no se puede dar hormonas',
      cards: [
        { title: 'Contraindicaciones absolutas', tag: 'No se discuten', kind: 'alert', items: [
          { t: 'Cáncer de mama o de endometrio', d: 'Antecedente personal',
            say: 'Hay contraindicaciones que no se negocian. La primera: antecedente de cáncer de mama, o de endometrio.' },
          { t: 'Trombosis o evento cardiovascular', d: 'Activo o antecedente personal',
            say: 'La segunda: trombosis venosa activa, o un infarto o accidente vascular previo.' },
          { t: 'Sangrado uterino sin estudiar', d: 'Primero hay que filiarlo',
            say: 'Y la tercera: un sangrado uterino anormal que todavía no tienes estudiado. Primero lo filias, después decides sobre la terapia.' },
        ] },
        { title: 'Si está contraindicada', tag: 'Alternativas no hormonales', kind: 'pharma', items: [
          { t: 'Venlafaxina o paroxetina', d: 'Para los bochornos',
            say: 'Con una contraindicación, para los bochornos usas venlafaxina o paroxetina.' },
          { t: 'Ojo: paroxetina y tamoxifeno', d: 'No se combinan',
            say: 'Pero ojo con un detalle: la paroxetina no se combina con tamoxifeno, porque bloquea su activación. Ahí prefieres venlafaxina.' },
          { t: 'Estrógeno tópico para la atrofia', d: 'Mínima absorción, incluso con cáncer previo',
            say: 'Y para la sequedad vaginal exclusiva, el estrógeno tópico local, que casi no se absorbe, y que muchas veces se puede usar incluso con cáncer de mama previo.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que más se confunde en el examen',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Bochornos, con útero intacto', 'Estrógeno más progestágeno', 'Dar estrógeno solo'],
          say: 'Repasemos las trampas. Bochornos con útero intacto: estrógeno más progestágeno. El error es olvidar el progestágeno.' },
        { cells: ['Histerectomizada, con bochornos', 'Estrógeno solo', 'Agregar progestágeno igual'],
          say: 'Histerectomizada con bochornos: estrógeno solo. El error clásico es agregar progestágeno sin necesidad.' },
        { cells: ['Cáncer de mama previo', 'TRH sistémica contraindicada', 'Darla porque los síntomas son severos'],
          say: 'Cáncer de mama previo: la terapia sistémica está contraindicada, sin importar qué tan intensos sean los síntomas.' },
        { cells: ['Mujer de 65 años, sin terapia previa', 'No iniciar TRH', 'Iniciarla porque tiene síntomas'],
          say: 'Y una mujer de sesenta y cinco años que nunca ha usado terapia: no la inicias, porque ya está fuera de la ventana de oportunidad.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 54 años, menopáusica desde hace 3 años, con bochornos intensos y sudoración nocturna que alteran su sueño. No tiene antecedentes de trombosis ni cáncer, su mamografía reciente es normal, y conserva su útero.',
      question: '¿Cuál es la terapia de reemplazo hormonal más adecuada?',
      options: [
        { letter: 'A', text: 'Estrógeno solo, por vía oral' },
        { letter: 'B', text: 'Estrógeno más progestágeno' },
        { letter: 'C', text: 'Progestágeno solo, a dosis altas' },
        { letter: 'D', text: 'Venlafaxina, evitando toda hormona' },
        { letter: 'E', text: 'Estrógeno tópico vaginal exclusivamente' },
      ],
      correct: 'B',
      explanation: 'Paciente dentro de la ventana de oportunidad (menor de 60 años, menos de 10 años desde la menopausia), sin contraindicaciones y con útero intacto: el esquema correcto es estrógeno más progestágeno, para proteger el endometrio.',
      say: {
        stem: 'Vamos al caso. Mujer de cincuenta y cuatro años, menopáusica hace tres, con bochornos intensos y sudoración nocturna que le alteran el sueño. No tiene antecedentes de trombosis ni de cáncer, su mamografía es normal, y conserva su útero.',
        question: '¿Cuál es la terapia de reemplazo hormonal más adecuada?',
        options: 'Tienes cinco opciones: estrógeno solo por vía oral, estrógeno más progestágeno, progestágeno solo a dosis altas, venlafaxina evitando toda hormona, o estrógeno tópico vaginal exclusivamente. Piénsalo.',
        answer: 'Es la B. Está dentro de la ventana de oportunidad, sin contraindicaciones, y con el útero intacto. Eso obliga a agregar el progestágeno: dárselo sin él sería dejar el endometrio sin protección.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 78',
      stem: 'Mujer de 52 años con reglas irregulares desde hace 8 meses, asociadas a bochornos frecuentes, con calor, enrojecimiento de la cara, sudoración nocturna y dificultad para dormir.',
      question: '¿Cuál es la indicación más adecuada para el manejo de sus síntomas?',
      options: [
        { letter: 'A', text: 'Fitoestrógenos' },
        { letter: 'B', text: 'Terapia de reemplazo hormonal combinada continua' },
        { letter: 'C', text: 'Terapia de reemplazo hormonal combinada cíclica' },
        { letter: 'D', text: 'Estrógenos solos continuos' },
        { letter: 'E', text: 'Progestágenos solos continuos' },
      ],
      correct: 'B',
      explanation: 'Síntomas vasomotores en una mujer con reglas irregulares (útero intacto): terapia de reemplazo hormonal combinada continua, con estrógeno más progestágeno.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de agosto de dos mil veintiuno. Mujer de cincuenta y dos años con reglas irregulares desde hace ocho meses, junto con bochornos frecuentes, calor, sudoración nocturna, y dificultad para dormir.',
        question: '¿Cuál es la indicación más adecuada para el manejo de sus síntomas?',
        options: 'Las opciones: fitoestrógenos, terapia combinada continua, terapia combinada cíclica, estrógenos solos continuos, o progestágenos solos continuos. Piénsalo.',
        answer: 'Es la B. Que todavía tenga reglas, aunque irregulares, te dice que conserva su útero. Con útero, la terapia va combinada, y en la práctica se usa en forma continua.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 139',
      stem: 'Estás evaluando los criterios para elegir el esquema de terapia de reemplazo hormonal.',
      question: '¿Qué antecedente es indicación del uso de estrógenos orales solos, en la terapia de reemplazo hormonal?',
      options: [
        { letter: 'A', text: 'Antecedente de cáncer de mama' },
        { letter: 'B', text: 'Antecedente de dislipidemia' },
        { letter: 'C', text: 'Antecedente de histerectomía total' },
        { letter: 'D', text: 'Osteoporosis' },
        { letter: 'E', text: 'Edad mayor a 70 años' },
      ],
      correct: 'C',
      explanation: 'El progestágeno se agrega únicamente para proteger el endometrio. Si la paciente fue histerectomizada, ya no tiene endometrio que proteger, y se indica estrógeno solo.',
      say: {
        stem: 'Una pregunta real más, del EUNACOM de julio de dos mil diecisiete, directa sobre los criterios de la terapia de reemplazo hormonal.',
        question: '¿Qué antecedente es indicación del uso de estrógenos orales solos, en la terapia de reemplazo hormonal?',
        options: 'Las opciones: cáncer de mama, dislipidemia, histerectomía total, osteoporosis, o edad mayor a setenta años. Piénsalo.',
        answer: 'Es la C, histerectomía total. El progestágeno solo existe para proteger el endometrio, así que sin útero, no tiene ningún sentido darlo. El cáncer de mama, de hecho, es contraindicación absoluta de toda la terapia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 87',
      stem: 'Mujer de 35 años, con antecedente de histerectomía radical por cáncer de cuello uterino hace 2 años, consulta por bochornos frecuentes, sequedad genital, dispareunia e insomnio. IMC de 28. Colesterol total 221 mg/dL, colesterol HDL 32 mg/dL, triglicéridos 456 mg/dL.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Estrógeno más progestágeno oral' },
        { letter: 'B', text: 'Estrógeno solo vía oral' },
        { letter: 'C', text: 'Estrógeno en parches' },
        { letter: 'D', text: 'Venlafaxina oral' },
        { letter: 'E', text: 'Progestágenos tópicos' },
      ],
      correct: 'C',
      explanation: 'Histerectomía radical (sin útero, sin ovarios): estrógeno solo, sin progestágeno. Por la hipertrigliceridemia marcada, se prefiere la vía transdérmica, que evita el paso hepático.',
      say: {
        stem: 'Y la última pregunta real, del EUNACOM de julio de dos mil diecinueve. Mujer de treinta y cinco años, con histerectomía radical por cáncer de cuello uterino hace dos años, con bochornos, sequedad genital, dispareunia e insomnio. Su índice de masa corporal es veintiocho, con un colesterol total de doscientos veintiuno, colesterol bueno de treinta y dos, y triglicéridos de cuatrocientos cincuenta y seis.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: estrógeno más progestágeno oral, estrógeno solo oral, estrógeno en parches, venlafaxina oral, o progestágenos tópicos. Piénsalo.',
        answer: 'Es la C. Al no tener útero, va estrógeno solo, así que ya puedes descartar la que lleva progestágeno. Y con los triglicéridos tan altos, la vía oral empeora el perfil lipídico: por eso prefieres el parche, que evita el paso por el hígado.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Clínico', kind: 'key', items: [
          { t: 'Doce meses sin regla', d: 'Sin exámenes de rutina',
            say: 'Cerremos con las reglas de oro. Doce meses sin regla, después de los cuarenta y cinco: menopausia, y no necesitas exámenes de rutina.' },
        ] },
        { title: 'Terapia', tag: 'Las dos preguntas que deciden todo', kind: 'pharma', items: [
          { t: '¿Está en la ventana?', d: 'Menos de 60, o menos de 10 años',
            say: 'Antes de recetar, pregúntate si está en la ventana de oportunidad.' },
          { t: '¿Tiene útero?', d: 'Con útero: progestágeno. Sin útero: estrógeno solo',
            say: 'Y pregúntate si tiene útero: eso decide si agregas o no el progestágeno.' },
        ] },
        { title: 'Última idea', tag: 'Para el examen', kind: 'alert', items: [
          { t: 'Cáncer de mama: nunca hormonas', d: 'Usa venlafaxina o paroxetina',
            say: 'Si te llevas una sola idea de hoy: cáncer de mama es contraindicación absoluta, sin importar qué tan intensos sean los bochornos. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Terapia de reemplazo hormonal: a quién, y cómo',
    root: N('start', 'Mujer con síntomas climatéricos', 'Bochornos, insomnio o atrofia',
      'Partamos de la paciente sintomática. Antes de recetar, revisa dos cosas: la ventana de oportunidad, y las contraindicaciones.',
      ['', N('q', '¿Tiene alguna contraindicación absoluta?', 'Cáncer de mama, trombosis, sangrado sin estudiar',
        'Lo primero es descartar contraindicaciones formales.',
        ['Sí', N('alert', 'TRH sistémica contraindicada', 'Venlafaxina o paroxetina para los bochornos',
          'Con una contraindicación, nada de terapia sistémica: usa venlafaxina o paroxetina para los síntomas vasomotores, y estrógeno tópico solo para la atrofia.')],
        ['No', N('q', '¿Está en la ventana de oportunidad?', 'Menos de 60 años o menos de 10 desde la menopausia',
          'Sin contraindicaciones, revisa la ventana de oportunidad.',
          ['No, está fuera', N('alert', 'No iniciar TRH', 'El riesgo supera al beneficio',
            'Fuera de la ventana, no inicias la terapia por primera vez: el riesgo cardiovascular supera el beneficio.')],
          ['Sí, está dentro', N('q', '¿Tiene útero?', 'Eso decide si agregas progestágeno',
            'Dentro de la ventana, la última pregunta es si conserva el útero.',
            ['Sí, útero intacto', N('do', 'Estrógeno más progestágeno', 'El progestágeno protege el endometrio',
              'Con útero intacto, siempre estrógeno más progestágeno.')],
            ['No, histerectomizada', N('ok', 'Estrógeno solo', 'Nunca agregues progestágeno',
              'Histerectomizada, estrógeno solo: no hay endometrio que proteger, y el progestágeno solo sumaría riesgo.')])])])]),
  },
};
