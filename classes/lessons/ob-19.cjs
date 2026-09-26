// Clase 19.19 — guion docente reescrito (voz "tú", texto en pantalla corto; ver gastro-01.cjs y gastro-02.cjs para el formato).
// Fuente clínica: books/scripts/dataset_obstetricia_bloque_4.cjs (ob-19).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ob-19',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Fiebre puerperal: cuándo el foco es el útero y cuándo es la mama',
      say: 'Bienvenido. Hoy vemos la fiebre puerperal, y son en realidad dos temas que conviene separar: la endometritis, que es la causa más frecuente de fiebre después del parto, y la patología de la mama, que confunde mucho porque tiene tres caras distintas. Vas a salir sabiendo tratar cada una, y con una regla de oro que se te va a quedar grabada. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fiebre puerperal',
      title: '¿Dónde está el foco?',
      nodes: [
        { id: 'fie', col: 0, row: 1, k: 'start', t: 'Fiebre puerperal', s: 'Dos tomas separadas por horas' },
        { id: 'ute', col: 1, row: 0, k: 'risk', t: 'Útero doloroso, loquios fétidos', s: 'Endometritis' },
        { id: 'mam', col: 1, row: 2, k: 'risk', t: 'Mama roja y dolorosa', s: 'Patología mamaria' },
      ],
      edges: [
        { from: 'fie', to: 'ute', label: 'foco uterino' }, { from: 'fie', to: 'mam', label: 'foco mamario' },
      ],
      steps: [
        { show: ['fie'], note: 'No es solo por la bajada de leche',
          say: 'Empecemos por lo básico. Tienes fiebre puerperal cuando tu paciente marca treinta y ocho grados o más, en dos tomas separadas por varias horas, después del primer día postparto. Lo primero que haces es buscar el foco.' },
        { show: ['ute'], note: 'Debuta al segundo a cuarto día',
          say: 'Si el útero está doloroso y subinvolucionado, con loquios de mal olor, tu foco está en el útero: es una endometritis.' },
        { show: ['mam'], note: 'Aparece más tarde, en semanas',
          say: 'Y si en cambio hay una mama roja, caliente y dolorosa, el foco es mamario. Aquí tienes que distinguir tres cuadros distintos, y eso es justo lo que viene ahora.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Endometritis puerperal',
      title: 'La causa más frecuente de fiebre',
      cards: [
        { title: 'Factor de riesgo mayor', tag: 'La cesárea', kind: 'alert', items: [
          { t: 'Cesárea de urgencia', d: 'El factor de riesgo más importante',
            say: 'Vamos con la endometritis. El factor de riesgo más importante, con diferencia, es la cesárea, sobre todo la de urgencia. Súmale el trabajo de parto prolongado y la rotura de membranas de muchas horas.' },
        ] },
        { title: 'Clínica', tag: 'Segundo a cuarto día', kind: 'criteria', items: [
          { t: 'Fiebre con calofríos', d: 'Y dolor uterino a la palpación',
            say: 'Aparece típicamente entre el segundo y el cuarto día. Tu paciente tiene fiebre con calofríos, y el útero le duele al palparlo.' },
          { t: 'Útero blando y grande', d: 'Con loquios turbios y de mal olor',
            say: 'El útero está más blando y más grande de lo esperado, y salen loquios turbios, achocolatados, con un olor muy fétido. Esa combinación es la que te confirma el diagnóstico.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Endometritis puerperal',
      title: 'Tratamiento: siempre hospitalizada',
      cards: [
        { title: 'Antibióticos endovenosos', tag: 'Esquema de elección', kind: 'pharma', items: [
          { t: 'Clindamicina más gentamicina', d: 'Cubre anaerobios y bacilos gram negativos',
            say: 'No se maneja en la casa: hospitalizas siempre, por el riesgo de que se complique con una sepsis. El esquema de elección es clindamicina más gentamicina, endovenosas, que juntas cubren la flora polimicrobiana de este cuadro.' },
          { t: 'Hasta 48 horas afebril', d: 'No necesitas seguir con antibióticos orales',
            say: 'Mantienes el esquema hasta que tu paciente lleve cuarenta y ocho horas sin fiebre. Y fíjate en un detalle que se pregunta: si respondió bien, no necesitas mandarla a la casa con antibióticos orales.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Patología mamaria',
      title: 'Congestión, no mastitis',
      cards: [
        { title: 'Congestión mamaria', tag: 'Bajada de leche', kind: 'normal', items: [
          { t: 'Ambas mamas, sin fiebre', d: 'Duras y tensas, en los primeros días',
            say: 'Ahora la mama, con tres cuadros que tienes que separar. El primero, la congestión, aparece con la bajada de leche, en los primeros días. Las dos mamas están duras y tensas, pero sin fiebre significativa ni enrojecimiento focal.' },
          { t: 'Se trata sin antibióticos', d: 'Vaciamiento, calor y lactancia a libre demanda',
            say: 'Se maneja sin ningún antibiótico: vaciamiento frecuente, calor local, y seguir dando pecho a libre demanda. Es fisiológico, no una infección.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Patología mamaria',
      title: 'Mastitis infecciosa: nunca suspendas la lactancia',
      cards: [
        { title: 'Clínica', tag: 'Unilateral, con fiebre', kind: 'alert', items: [
          { t: 'Placa roja en una mama', d: 'Fiebre alta y calofríos, en semanas',
            say: 'La mastitis infecciosa aparece más tarde, entre la segunda y la cuarta semana, y solo en una mama. Ves una placa roja, caliente y muy dolorosa, casi siempre en el cuadrante superior externo, con fiebre alta y calofríos.' },
        ] },
        { title: 'Tratamiento', tag: 'La regla de oro', kind: 'pharma', items: [
          { t: 'Cloxacilina oral', d: 'Diez a catorce días, cubre estafilococo',
            say: 'Se trata con antibióticos orales contra el estafilococo dorado, como cloxacilina o cefadroxilo, por diez a catorce días.' },
          { t: 'Nunca suspendas la lactancia', d: 'Vaciar la mama evita el absceso',
            say: 'Y aquí está la regla de oro que más se pregunta: jamás suspendas la lactancia. Al contrario, tienes que mantener el amamantamiento y el vaciamiento completo, porque la leche estancada es justo lo que forma un absceso.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Patología mamaria',
      title: 'Cuando la mastitis no responde',
      nodes: [
        { id: 'mas', col: 0, row: 1, k: 'cause', t: 'Mastitis mal tratada', s: 'O sin tratar' },
        { id: 'abs', col: 1, row: 1, k: 'risk', t: 'Absceso mamario', s: 'Masa fluctuante, con eco' },
        { id: 'dre', col: 2, row: 1, k: 'good', t: 'Drenaje', s: 'Quirúrgico o por punción' },
      ],
      edges: [
        { from: 'mas', to: 'abs' }, { from: 'abs', to: 'dre' },
      ],
      steps: [
        { show: ['mas'], note: 'Complicación de una mastitis',
          say: 'Y el tercer cuadro es su complicación: el absceso mamario, cuando la mastitis no se trató a tiempo o no respondió.' },
        { show: ['abs'], note: 'La ecografía lo confirma',
          say: 'Se palpa una masa que fluctúa, y la ecografía mamaria confirma la colección líquida.' },
        { show: ['dre'], note: 'La piel comprometida decide la técnica',
          say: 'El tratamiento es drenarlo, junto con antibióticos. Hoy se prefiere la punción guiada por ecografía, salvo que haya compromiso de la piel, donde vas directo al drenaje quirúrgico con incisión.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos la fiebre puerperal en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Los tres cuadros mamarios, uno al lado del otro',
      head: ['Cuadro', 'Cuándo aparece', 'Conducta'],
      rows: [
        { cells: ['Congestión', 'Primeros días, ambas mamas', 'Vaciamiento y calor, sin antibióticos'],
          say: 'Repasemos en una tabla. La congestión aparece en los primeros días, en ambas mamas, y se trata sin antibióticos.' },
        { cells: ['Mastitis infecciosa', 'Segunda a cuarta semana, una mama', 'Cloxacilina y mantener la lactancia'],
          say: 'La mastitis infecciosa aparece más tarde, en una sola mama, y se trata con cloxacilina, manteniendo siempre la lactancia.' },
        { cells: ['Absceso mamario', 'Mastitis que no responde', 'Drenaje por punción o quirúrgico'],
          say: 'Y el absceso es una mastitis que no respondió: se confirma con ecografía y se drena.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Puérpera de tres días, tras una cesárea de urgencia por rotura de membranas prolongada, con fiebre de 38,7 grados, dolor abdominal bajo y útero doloroso, subinvolucionado, con loquios achocolatados y de mal olor.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Manejo ambulatorio con amoxicilina oral' },
        { letter: 'B', text: 'Hospitalizar e iniciar clindamicina más gentamicina endovenosas' },
        { letter: 'C', text: 'Indicar ciprofloxacino oral en el domicilio' },
        { letter: 'D', text: 'Suspender la lactancia mientras se estudia' },
        { letter: 'E', text: 'Solicitar ecografía mamaria antes de decidir' },
      ],
      correct: 'B',
      explanation: 'Fiebre, dolor uterino, útero subinvolucionado y loquios fétidos tras una cesárea: endometritis puerperal. Se hospitaliza siempre, con clindamicina más gentamicina endovenosas hasta 48 horas afebril.',
      say: {
        stem: 'Vamos con un caso. Una puérpera de tres días, después de una cesárea de urgencia por rotura de membranas prolongada, tiene fiebre de treinta y ocho coma siete, dolor abdominal bajo, y un útero doloroso y subinvolucionado, con loquios achocolatados y de mal olor.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: manejo ambulatorio con amoxicilina, hospitalizar con clindamicina y gentamicina, dar ciprofloxacino en la casa, suspender la lactancia mientras se estudia, o pedir una ecografía mamaria antes de decidir. Piénsalo.',
        answer: 'Es la B. Todo apunta a una endometritis puerperal: fiebre, útero doloroso y subinvolucionado, y loquios fétidos, con el antecedente de cesárea de urgencia. Se hospitaliza siempre, y el esquema de elección es clindamicina más gentamicina. La ecografía mamaria no tiene nada que ver aquí: el foco es uterino, no mamario.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 174',
      stem: 'Puérpera hace 7 días, con antecedente de hemorragia puerperal, evoluciona con aumento de la metrorragia, fiebre hasta 38,5 grados y dolor abdominal bajo.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Inercia uterina' },
        { letter: 'B', text: 'Neoplasia trofoblástica gestacional' },
        { letter: 'C', text: 'Endometritis' },
        { letter: 'D', text: 'Restos ovulares' },
        { letter: 'E', text: 'Miometritis' },
      ],
      correct: 'C',
      explanation: 'Fiebre, dolor abdominal bajo y aumento del sangrado en el puerperio es el cuadro clásico de endometritis puerperal, con o sin restos asociados.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de diciembre de dos mil diecisiete. Una puérpera de siete días, con antecedente de hemorragia puerperal, presenta ahora más sangrado, fiebre hasta treinta y ocho coma cinco, y dolor abdominal bajo.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: inercia uterina, neoplasia trofoblástica gestacional, endometritis, restos ovulares, o miometritis. Piénsalo.',
        answer: 'Es la C. Fiebre, dolor bajo y más sangrado en el puerperio son el cuadro clásico de endometritis. Fíjate que restos ovulares también podría estar detrás de este cuadro, pero el diagnóstico que engloba la fiebre y el dolor es la endometritis, y por eso es la respuesta más completa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 176',
      stem: 'Puérpera de 15 días, en lactancia materna, con dolor en la mama derecha de 3 días de evolución, eritema y malestar general. La mama derecha tiene los cuadrantes superiores dolorosos, indurados, con aumento de temperatura local y eritema.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Realizar drenaje mamario quirúrgico' },
        { letter: 'B', text: 'Suspender la lactancia materna' },
        { letter: 'C', text: 'Iniciar antibióticos' },
        { letter: 'D', text: 'Indicar analgésicos' },
        { letter: 'E', text: 'Aplicar frío y luego calor local, alternadamente' },
      ],
      correct: 'C',
      explanation: 'Mastitis puerperal sin fluctuación: se trata con antibióticos orales con cobertura de estafilococo. No hay indicación de drenaje ni de suspender la lactancia; al contrario, se debe mejorar la técnica de amamantamiento.',
      say: {
        stem: 'Y esta es del EUNACOM de agosto de dos mil veintiuno. Una puérpera de quince días, dando lactancia, tiene dolor en la mama derecha de tres días, con enrojecimiento y malestar general. La mama tiene los cuadrantes superiores dolorosos, indurados y calientes.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: drenaje mamario quirúrgico, suspender la lactancia, iniciar antibióticos, dar analgésicos, o alternar frío y calor local. Piénsalo.',
        answer: 'Es la C. Sin masa que fluctúe, esto es una mastitis, no un absceso: se trata con antibióticos que cubran el estafilococo. La trampa es la B: nunca suspendes la lactancia, al contrario, mejoras la técnica y mantienes el vaciamiento.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 45',
      stem: 'Puérpera de 10 días con dolor y aumento de volumen en la mama derecha. La mama tiene eritema, una masa fluctuante y dolorosa de 6 centímetros, con afectación de la piel y secreción purulenta que sale por una lesión cutánea al comprimir.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Antibióticos de amplio espectro por vía oral' },
        { letter: 'B', text: 'Realizar drenaje quirúrgico de la lesión' },
        { letter: 'C', text: 'Realizar drenaje por punción' },
        { letter: 'D', text: 'Realizar extracción láctea' },
        { letter: 'E', text: 'Aplicar calor local y antiinflamatorios orales' },
      ],
      correct: 'B',
      explanation: 'Absceso mamario con compromiso y necrosis de la piel, y secreción purulenta ya exteriorizada: aquí el drenaje quirúrgico con incisión es de elección por sobre la punción, que se reserva para cuando la piel está sana.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Una puérpera de diez días tiene dolor y aumento de volumen en la mama derecha, con enrojecimiento, una masa que fluctúa de seis centímetros, compromiso de la piel y salida de pus al comprimir.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: antibióticos orales de amplio espectro, drenaje quirúrgico, drenaje por punción, extracción láctea, o calor local con antiinflamatorios. Piénsalo.',
        answer: 'Es la B. Es un absceso mamario, y hoy en general se prefiere drenarlo por punción guiada con ecografía. Pero aquí la piel ya está comprometida, con pus saliendo por una lesión cutánea, y eso te obliga a elegir el drenaje quirúrgico en vez de la punción.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Endometritis', tag: 'Fiebre en el útero', kind: 'key', items: [
          { t: 'Cesárea, el factor de riesgo', d: 'Fiebre + útero doloroso + loquios fétidos',
            say: 'Cerremos con las reglas de oro. La cesárea es el factor de riesgo mayor de endometritis, y la clínica es fiebre con útero doloroso y loquios fétidos.' },
          { t: 'Siempre hospitalizada', d: 'Clindamicina más gentamicina',
            say: 'Se hospitaliza siempre, con clindamicina más gentamicina.' },
        ] },
        { title: 'Mama', tag: 'Tres cuadros distintos', kind: 'alert', items: [
          { t: 'Mastitis: nunca suspender lactancia', d: 'Absceso: drenar y confirmar con eco',
            say: 'Y en la mama, la mastitis nunca suspende la lactancia, y el absceso se confirma con ecografía y se drena. Si te llevas una sola idea de hoy: la fiebre te dice dónde mirar, el útero o la mama, y de ahí sale todo lo demás. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: buildPathway(),
};

function buildPathway() {
  const hospitalizarNode = N('do', 'Hospitalizar', 'Clindamicina más gentamicina',
    'Hospitalizas siempre, con clindamicina más gentamicina hasta cuarenta y ocho horas afebril.');
  const endometritisNode = N('alert', 'Endometritis puerperal', 'Loquios fétidos, útero subinvolucionado',
    'Útero doloroso, subinvolucionado, con loquios fétidos: es endometritis.',
    ['', hospitalizarNode]);

  const congestionNode = N('ok', 'Congestión mamaria', 'Vaciamiento, sin antibióticos',
    'Ambas mamas duras, sin fiebre: es congestión, se trata sin antibióticos.');
  const mastitisNode = N('do', 'Mastitis infecciosa', 'Cloxacilina, mantener lactancia',
    'Sin masa fluctuante, es mastitis: cloxacilina, y nunca suspendes la lactancia.');
  const abscesoNode = N('alert', 'Absceso mamario', 'Confirmar con eco y drenar',
    'Con masa fluctuante, es un absceso: lo confirmas con ecografía y lo drenas.');
  const fluctuaNode = N('q', '¿Hay masa que fluctúa?', 'Mastitis o absceso',
    'Con una mama roja y fiebre, revisa si hay una masa que fluctúa.',
    ['No fluctúa', mastitisNode],
    ['Sí fluctúa', abscesoNode]);
  const mamaNode = N('q', '¿Fiebre alta y unilateral?', 'O ambas mamas sin fiebre',
    '¿Es una sola mama con fiebre alta, o ambas mamas sin fiebre significativa?',
    ['Ambas, sin fiebre', congestionNode],
    ['Una mama, con fiebre', fluctuaNode]);

  const focoNode = N('q', '¿Dónde está el foco?', 'Útero o mama',
    '¿El dolor está en el útero, o en una mama?',
    ['Útero doloroso', endometritisNode],
    ['Mama roja y dolorosa', mamaNode]);

  return {
    title: 'Fiebre puerperal: útero o mama',
    root: N('start', 'Fiebre en el puerperio', 'Dos tomas separadas por horas',
      'Tu paciente tiene fiebre después del parto. Antes de tratar nada, buscas dónde está el foco.',
      ['', focoNode]),
  };
}
