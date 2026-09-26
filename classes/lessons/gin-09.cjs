// Clase 20.9 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_ginecologia.cjs (gin-09).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gin-09',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'pH, aminas y microscopía: la regla que separa vaginosis, candidiasis y tricomoniasis',
      say: 'Bienvenida. Hoy vemos las infecciones más frecuentes de la vagina y el cuello uterino: vaginosis bacteriana, candidiasis, tricomoniasis y cervicitis. Los cuatro cuadros dan flujo vaginal, así que se parecen mucho al principio. Pero se separan con tres datos muy simples: el pH, el test de aminas y lo que ves al microscopio. Aprende esa regla y vas a resolver casi cualquier pregunta de este tema.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: '¿Por qué se rompe el equilibrio vaginal?',
      nodes: [
        { id: 'gard', col: 0, row: 0, k: 'cause', t: 'Gardnerella y anaerobios', s: 'Reemplazan a los lactobacilos' },
        { id: 'vagi', col: 1, row: 0, k: 'effect', t: 'Vaginosis bacteriana', s: 'No es inflamación, es disbiosis' },
        { id: 'cand', col: 0, row: 1, k: 'cause', t: 'Candida albicans', s: 'Gatillada por antibióticos o embarazo' },
        { id: 'cane', col: 1, row: 1, k: 'effect', t: 'Candidiasis vulvovaginal', s: 'Ahora sí, mucho prurito' },
        { id: 'tric', col: 0, row: 2, k: 'cause', t: 'Trichomonas vaginalis', s: 'Es una infección de transmisión sexual' },
        { id: 'trie', col: 1, row: 2, k: 'effect', t: 'Tricomoniasis vaginal', s: 'Se trata también a la pareja' },
      ],
      edges: [
        { from: 'gard', to: 'vagi' },
        { from: 'cand', to: 'cane' },
        { from: 'tric', to: 'trie' },
      ],
      steps: [
        { show: ['gard'], note: 'No es una infección clásica, es disbiosis',
          say: 'Partamos por el mecanismo, porque cambia según la causa. En la vaginosis bacteriana no hay una bacteria invasora: lo que pasa es que los lactobacilos, que mantienen la vagina ácida y protegida, disminuyen, y en su lugar crecen la Gardnerella y otros anaerobios.' },
        { show: ['vagi'], note: 'Flujo gris, olor a pescado, sin dolor',
          say: 'Por eso la vaginosis no duele ni pica: es un desequilibrio de la flora, no una inflamación. El flujo es gris, homogéneo, y con un olor característico a pescado.' },
        { show: ['cand'], note: 'Antibióticos, embarazo o diabetes abren la puerta',
          say: 'La candidiasis es distinta: aquí sí hay un hongo, la Candida albicans, que aprovecha un ambiente favorable. Antibióticos recientes, embarazo o una diabetes mal controlada son los gatillantes típicos.' },
        { show: ['cane'], note: 'Ahora sí hay inflamación e intenso prurito',
          say: 'Y ahora sí hay inflamación: prurito intenso, que es el síntoma que manda en este cuadro.' },
        { show: ['tric'], note: 'Un protozoo flagelado, transmisión sexual',
          say: 'Y la tricomoniasis cambia otra vez de familia: es un protozoo flagelado, la Trichomona vaginalis, y se transmite por contacto sexual.' },
        { show: ['trie'], note: 'Por ser ITS, se trata también a la pareja',
          say: 'Justamente por ser una infección de transmisión sexual, aquí vas a tener que tratar también a la pareja. Guarda esa diferencia, porque es la que más se pregunta.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Vaginosis bacteriana',
      title: 'Los criterios de Amsel',
      cards: [
        { title: 'Diagnóstico', tag: 'Necesitas 3 de 4', kind: 'criteria', items: [
          { t: 'Flujo gris y homogéneo', d: 'Baña las paredes vaginales por completo',
            say: 'Para confirmar la vaginosis usas los criterios de Amsel, y necesitas al menos tres de cuatro. El primero: un flujo gris, fino, que baña toda la vagina por igual.' },
          { t: 'pH sobre 4,5', d: 'Y test de aminas positivo',
            say: 'El segundo, un pH sobre cuatro coma cinco. El tercero, el test de aminas positivo: le agregas hidróxido de potasio a la muestra y sale ese olor a pescado.' },
          { t: 'Clue cells en el frotis', d: 'Más del veinte por ciento de las células',
            say: 'Y el cuarto, al mirar al microscopio, encuentras las clue cells: células cubiertas de bacterias, con el borde borrado, en más del veinte por ciento.' },
        ] },
        { title: 'Tratamiento', tag: 'Metronidazol', kind: 'pharma', items: [
          { t: 'Metronidazol oral', d: 'Quinientos miligramos cada doce horas, siete días',
            say: 'El tratamiento es metronidazol oral, quinientos miligramos cada doce horas, por siete días.' },
          { t: 'No se trata a la pareja', d: 'No baja las recurrencias',
            say: 'Y fíjate en algo importante: no tienes que tratar a la pareja. Se ha demostrado que no cambia las recurrencias. Esa es justamente la diferencia con lo que viene ahora.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Candidiasis vulvovaginal',
      title: 'Prurito, y un pH que no cambia',
      cards: [
        { title: 'Clínica', tag: 'El pH la delata', kind: 'criteria', items: [
          { t: 'Prurito vulvar intenso', d: 'El síntoma que manda en este cuadro',
            say: 'En la candidiasis, lo que manda es el prurito vulvar, intenso y persistente.' },
          { t: 'Flujo en leche cortada', d: 'Blanco, espeso y bien adherido',
            say: 'El flujo se describe como leche cortada: blanco, espeso, en grumos, adherido a la pared vaginal.' },
          { t: 'pH normal, test negativo', d: 'Es el único de los tres que no sube',
            say: 'Y aquí está el dato que la separa de las otras dos: el pH sigue normal, bajo cuatro coma cinco, y el test de aminas es negativo. Es el único cuadro de los tres que no altera el pH.' },
        ] },
        { title: 'Tratamiento', tag: 'Fluconazol', kind: 'pharma', items: [
          { t: 'Fluconazol en dosis única', d: 'Ciento cincuenta miligramos vía oral',
            say: 'El tratamiento es fluconazol, ciento cincuenta miligramos, en una sola dosis oral.' },
          { t: 'Si está embarazada: tópico', d: 'Clotrimazol vaginal, nunca fluconazol oral',
            say: 'Pero ojo con la embarazada: ahí el fluconazol oral se evita, y usas clotrimazol tópico. Guarda ese dato, porque el examen lo pregunta seguido.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tricomoniasis vaginal',
      title: 'La única de las tres que es ITS',
      cards: [
        { title: 'Clínica', tag: 'Ojo con el cuello', kind: 'alert', items: [
          { t: 'Flujo espumoso y verdoso', d: 'Con mal olor y bastante prurito',
            say: 'En la tricomoniasis, el flujo es abundante, espumoso, de color amarillo verdoso, y con mal olor.' },
          { t: 'Cuello en fresa', d: 'Petequias visibles en el exocérvix',
            say: 'Y al mirar el cuello uterino puedes ver el signo del cuello en fresa: pequeñas petequias rojas sobre la mucosa.' },
        ] },
        { title: 'Tratamiento', tag: 'Metronidazol, y a la pareja', kind: 'pharma', items: [
          { t: 'Metronidazol, dos gramos', d: 'Una sola dosis por vía oral',
            say: 'El tratamiento es metronidazol, dos gramos, en una sola dosis.' },
          { t: 'Trata siempre a la pareja', d: 'Es obligatorio, porque es una ITS',
            say: 'Y a diferencia de la vaginosis, aquí tratas siempre a la pareja, de forma simultánea, porque es una infección de transmisión sexual y si no la vuelves a contagiar de inmediato.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Cervicitis',
      title: 'Cuando el problema sube al cuello',
      cards: [
        { title: 'Clínica', tag: 'No es lo mismo que vaginitis', kind: 'criteria', items: [
          { t: 'Secreción purulenta del cuello', d: 'Sale por el orificio cervical, no de la vagina',
            say: 'Cambiemos de nivel. En la cervicitis, la secreción purulenta sale del cuello uterino, no de las paredes vaginales.' },
          { t: 'Cuello friable, sangra fácil', d: 'Al tocarlo con la tórula',
            say: 'Y el cuello está friable: sangra apenas lo tocas con la tórula al examinarlo.' },
        ] },
        { title: 'Tratamiento dual', tag: 'Gonococo + Chlamydia', kind: 'pharma', items: [
          { t: 'Ceftriaxona intramuscular', d: 'Quinientos miligramos, una sola dosis',
            say: 'El tratamiento cubre los dos agentes de siempre. Ceftriaxona, quinientos miligramos intramuscular, en una sola dosis, para el gonococo.' },
          { t: 'Más doxiciclina, siete días', d: 'Cien miligramos cada doce horas',
            say: 'Y doxiciclina, cien miligramos cada doce horas, por siete días, para la Chlamydia. Casi siempre van juntas, así que tratas las dos aunque solo confirmes una.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos las cuatro entidades en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que más se confunde en el examen',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Flujo gris, sin dolor, pH alto', 'Metronidazol solo a la paciente', 'Tratar también a la pareja'],
          say: 'Repasemos las trampas. Flujo gris sin dolor y pH alto: metronidazol solo a la paciente. El error es tratar a la pareja sin necesidad.' },
        { cells: ['Prurito y leche cortada, pH normal', 'Fluconazol en dosis única', 'Confundirlo con vaginosis por el pH'],
          say: 'Prurito con flujo en leche cortada y pH normal: fluconazol. El error es pensar que todo flujo anormal tiene el pH alto.' },
        { cells: ['Flujo espumoso, cuello en fresa', 'Metronidazol a la paciente y a su pareja', 'Tratar solo a la paciente'],
          say: 'Flujo espumoso con cuello en fresa: metronidazol a los dos, porque es una ITS. El error clásico es olvidar a la pareja.' },
        { cells: ['Secreción purulenta del cuello', 'Ceftriaxona más doxiciclina', 'Usar solo metronidazol'],
          say: 'Secreción purulenta que sale del cuello: ceftriaxona más doxiciclina. El metronidazol no cubre ni gonococo ni Chlamydia.' },
        { cells: ['Candidiasis en el embarazo', 'Clotrimazol tópico', 'Dar fluconazol oral'],
          say: 'Y candidiasis en el embarazo: siempre tópico. El fluconazol oral se evita en la gestante.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 24 años, embarazada de 12 semanas, consulta por prurito vulvar intenso de una semana, con flujo blanco, espeso, en grumos, adherido a la pared vaginal. El pH vaginal es de 4,0 y el test de aminas resulta negativo.',
      question: '¿Cuál es el tratamiento más adecuado?',
      options: [
        { letter: 'A', text: 'Fluconazol 150 mg vía oral en dosis única' },
        { letter: 'B', text: 'Clotrimazol óvulos vaginales por 7 días' },
        { letter: 'C', text: 'Metronidazol 500 mg cada 12 horas por 7 días' },
        { letter: 'D', text: 'Metronidazol 2 g vía oral en dosis única, a ella y su pareja' },
        { letter: 'E', text: 'Ceftriaxona 500 mg intramuscular en dosis única' },
      ],
      correct: 'B',
      explanation: 'El cuadro es candidiasis vulvovaginal (prurito, flujo en leche cortada, pH normal, aminas negativas). Por estar embarazada, el fluconazol oral se evita y se prefiere el azol tópico.',
      say: {
        stem: 'Vamos al caso. Mujer de veinticuatro años, embarazada de doce semanas, con prurito vulvar intenso de una semana, y flujo blanco, espeso, en grumos, adherido a la pared vaginal. El pH vaginal es de cuatro, y el test de aminas es negativo.',
        question: '¿Cuál es el tratamiento más adecuado?',
        options: 'Tienes cinco opciones: fluconazol oral en dosis única, clotrimazol en óvulos por siete días, metronidazol oral por siete días, metronidazol en dosis única para ella y su pareja, o ceftriaxona intramuscular. Piénsalo.',
        answer: 'Es la B. El cuadro es una candidiasis clásica: prurito, leche cortada, y un pH que no sube. La trampa está en el embarazo: el fluconazol oral, que sería tu primera opción fuera del embarazo, aquí se evita, y usas clotrimazol tópico. El metronidazol es para vaginosis o tricomoniasis, y la ceftriaxona, para cervicitis.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 121',
      stem: 'Mujer de 28 años con dispareunia y flujo vaginal gris homogéneo con mal olor, que empeora tras el coito. El pH vaginal es de 5,5 y el test de aminas con KOH resulta positivo.',
      question: '¿Cuál es el diagnóstico y tratamiento más adecuado?',
      options: [
        { letter: 'A', text: 'Vaginosis bacteriana: metronidazol oral 500 mg cada 12 horas por 7 días' },
        { letter: 'B', text: 'Candidiasis vaginal: fluconazol oral 150 mg dosis única' },
        { letter: 'C', text: 'Tricomoniasis: metronidazol 2 g dosis única' },
        { letter: 'D', text: 'Herpes genital: aciclovir' },
        { letter: 'E', text: 'Cervicitis por Chlamydia: azitromicina' },
      ],
      correct: 'A',
      explanation: 'Flujo gris homogéneo, pH sobre 4,5 y test de aminas positivo: vaginosis bacteriana. Se trata con metronidazol oral 500 mg cada 12 horas por 7 días.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil veinticinco. Mujer de veintiocho años con dispareunia y flujo vaginal gris homogéneo, con mal olor que empeora después de las relaciones. El pH vaginal es de cinco coma cinco, y el test de aminas con KOH resulta positivo.',
        question: '¿Cuál es el diagnóstico y tratamiento más adecuado?',
        options: 'Las opciones: vaginosis bacteriana con metronidazol oral, candidiasis con fluconazol, tricomoniasis con metronidazol en dosis única, herpes genital con aciclovir, o cervicitis por Chlamydia con azitromicina. Piénsalo.',
        answer: 'Es la A. Flujo gris homogéneo, pH sobre cuatro coma cinco y aminas positivas: son tres de los criterios de Amsel, y con eso ya tienes vaginosis bacteriana. El tratamiento es metronidazol oral por siete días, sin necesidad de tratar a la pareja.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 178',
      stem: 'Mujer de 26 años, sin antecedentes, consulta por secreción vaginal asociada a prurito. Al examen se aprecia liquenificación y signos de grataje vulvar, y a la especuloscopía, leucorrea blanquecina.',
      question: '¿Cuál es el fármaco de elección para el manejo de este caso?',
      options: [
        { letter: 'A', text: 'Metronidazol' },
        { letter: 'B', text: 'Fluconazol' },
        { letter: 'C', text: 'Miconazol' },
        { letter: 'D', text: 'Doxiciclina' },
        { letter: 'E', text: 'Ceftriaxona' },
      ],
      correct: 'B',
      explanation: 'Prurito intenso con signos de rascado y leucorrea blanquecina: candidiasis genital. El fármaco de elección es fluconazol 150 mg oral en dosis única.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil trece. Mujer de veintiséis años, sin antecedentes, con secreción vaginal y prurito. Al examen se ven marcas de rascado en la vulva, y en la especuloscopía, una leucorrea blanquecina.',
        question: '¿Cuál es el fármaco de elección para el manejo de este caso?',
        options: 'Las opciones: metronidazol, fluconazol, miconazol, doxiciclina, o ceftriaxona. Piénsalo.',
        answer: 'Es la B, fluconazol. El prurito intenso con las marcas de rascado te tiene que hacer pensar de inmediato en candidiasis. Y aunque el miconazol también es un antifúngico, la vía oral en dosis única con fluconazol es la respuesta que el examen busca como fármaco de elección.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 117',
      stem: 'Mujer de 30 años consulta por leucorrea y prurito. Al examen ginecológico destaca especuloscopía con leucorrea abundante, amarilla y espumosa.',
      question: '¿Cuál es el examen de elección para el diagnóstico etiológico?',
      options: [
        { letter: 'A', text: 'Prueba de aminas vaginales (test de KOH)' },
        { letter: 'B', text: 'Cultivo para Cándida albicans' },
        { letter: 'C', text: 'Examen de determinación de células clave (clue cells)' },
        { letter: 'D', text: 'Frotis fresco de la secreción vaginal' },
        { letter: 'E', text: 'PCR para Chlamydia trachomatis' },
      ],
      correct: 'D',
      explanation: 'Flujo amarillo y espumoso: cuadro clásico de tricomoniasis. El diagnóstico se confirma con el frotis fresco, donde se ve el protozoo flagelado móvil.',
      say: {
        stem: 'Una pregunta real más, del EUNACOM de julio de dos mil diecisiete. Mujer de treinta años con leucorrea y prurito. A la especuloscopía, un flujo abundante, amarillo y espumoso.',
        question: '¿Cuál es el examen de elección para el diagnóstico etiológico?',
        options: 'Las opciones: prueba de aminas, cultivo para Cándida, células clave, frotis fresco de la secreción, o PCR para Chlamydia. Piénsalo.',
        answer: 'Es la D, frotis fresco. El flujo amarillo y espumoso es tricomoniasis, y ahí el examen que la confirma en el momento es mirar la muestra fresca al microscopio: vas a ver al protozoo moviéndose. Las clue cells son para vaginosis, y las aminas apoyan pero no confirman por sí solas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 86',
      stem: 'Mujer de 26 años, sexualmente activa y alérgica a la penicilina, consulta por disuria y molestias genitales de 4 días, con leucorrea. Al examen hay signos inflamatorios en el cuello uterino, con escasa leucorrea. El cultivo de Thayer Martin resulta positivo, y la prueba de aminas, negativa.',
      question: '¿Cuál es el tratamiento de elección?',
      options: [
        { letter: 'A', text: 'Ciprofloxacino' },
        { letter: 'B', text: 'Ceftriaxona' },
        { letter: 'C', text: 'Azitromicina' },
        { letter: 'D', text: 'Doxiciclina' },
        { letter: 'E', text: 'Penicilina benzatina' },
      ],
      correct: 'B',
      explanation: 'Cultivo de Thayer Martin positivo: cervicitis gonocócica. A pesar de la alergia a penicilina, la ceftriaxona sigue siendo el fármaco de elección para el gonococo.',
      say: {
        stem: 'Y la última pregunta real, del EUNACOM de julio de dos mil diecinueve. Mujer de veintiséis años, alérgica a la penicilina, con disuria y molestias genitales de cuatro días, con leucorrea. El cultivo de Thayer Martin sale positivo, y la prueba de aminas, negativa.',
        question: '¿Cuál es el tratamiento de elección?',
        options: 'Las opciones: ciprofloxacino, ceftriaxona, azitromicina, doxiciclina, o penicilina benzatina. Piénsalo.',
        answer: 'Es la B, ceftriaxona. El cultivo positivo confirma gonococo, y la ceftriaxona sigue siendo de elección aunque la paciente sea alérgica a la penicilina, porque son familias distintas de antibiótico. Ojo: en la práctica también cubrirías Chlamydia con doxiciclina, pero esta pregunta apunta específicamente al tratamiento del gonococo.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Tres datos que separan todo', tag: 'pH, aminas, microscopía', kind: 'key', items: [
          { t: 'pH normal: candidiasis', d: 'Es el único que no lo altera',
            say: 'Cerremos con las reglas de oro. Si el pH es normal, piensa en candidiasis: es el único cuadro que no lo altera.' },
          { t: 'pH alto y aminas: vaginosis o tricomoniasis', d: 'La microscopía las separa',
            say: 'Si el pH está alto y las aminas son positivas, es vaginosis o tricomoniasis, y ahí la microscopía decide: clue cells o protozoo móvil.' },
        ] },
        { title: 'Tratamiento', tag: 'Quién trata a la pareja', kind: 'pharma', items: [
          { t: 'Solo tricomoniasis trata pareja', d: 'Por ser la única infección de transmisión sexual',
            say: 'De las tres, solo en la tricomoniasis tratas a la pareja, porque es la única de transmisión sexual.' },
          { t: 'Cervicitis: ceftriaxona y doxiciclina', d: 'Gonococo y Chlamydia, casi siempre juntos',
            say: 'Y en la cervicitis, siempre las dos: ceftriaxona y doxiciclina.' },
        ] },
        { title: 'Última idea', tag: 'Para el examen', kind: 'alert', items: [
          { t: 'Embarazada: candidiasis se trata tópica', d: 'Nunca fluconazol oral',
            say: 'Si te llevas una sola idea de hoy: mira el pH antes de decidir el tratamiento, y recuerda que en la embarazada la candidiasis siempre se trata tópica. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Vulvovaginitis y cervicitis: qué decide el diagnóstico',
    root: N('start', 'Mujer con flujo vaginal patológico', 'Prurito, mal olor o secreción',
      'Partamos de la sospecha. Lo primero que necesitas es el pH y el test de aminas.',
      ['', N('q', '¿Dónde está el pH?', 'Eso separa las tres primeras causas',
        'La pregunta que ordena todo: ¿el pH está normal, o está alto?',
        ['Normal, bajo 4,5', N('ok', 'Candidiasis vulvovaginal', 'Prurito y flujo en leche cortada',
          'Con pH normal y prurito intenso, es candidiasis. Fluconazol en dosis única, o clotrimazol tópico si está embarazada.')],
        ['Alto, sobre 4,5', N('q', '¿Qué ves al microscopio?', 'Vaginosis o tricomoniasis',
          'Con el pH alto, la microscopía decide entre las dos.',
          ['Clue cells', N('do', 'Vaginosis bacteriana', 'Metronidazol oral, sin tratar a la pareja',
            'Si ves clue cells, es vaginosis bacteriana. Metronidazol oral por siete días, y no necesitas tratar a la pareja.')],
          ['Protozoo móvil', N('alert', 'Tricomoniasis vaginal', 'Metronidazol a ella y a su pareja',
            'Si ves un protozoo flagelado moviéndose, es tricomoniasis. Metronidazol en dosis única, y esta vez sí, a la paciente y a su pareja.')])],
        ['Secreción del cuello, no de la vagina', N('alert', 'Cervicitis mucopurulenta', 'Ceftriaxona más doxiciclina',
          'Y si la secreción purulenta sale del cuello uterino y no de las paredes vaginales, es cervicitis: ceftriaxona más doxiciclina, cubriendo gonococo y Chlamydia juntos.')])]),
  },
};
