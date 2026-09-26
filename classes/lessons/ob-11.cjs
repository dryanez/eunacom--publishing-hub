// Clase 19.11 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_obstetricia_bloque_3.cjs (ob-11).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ob-11',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'La zona discriminatoria y tres criterios deciden todo',
      say: 'Bienvenida. Hoy vemos el embarazo ectópico, la causa más frecuente de muerte materna en el primer trimestre por hemorragia interna. Es un tema que se aprende con una lógica clara: primero decides si está roto o no, y si no está roto, tres números te dicen si puedes tratarlo con un fármaco o necesitas cirugía. Empecemos.',
    },

    {
      type: 'points',
      kicker: 'Dónde ocurre',
      title: 'Casi siempre en la trompa',
      cards: [
        { title: 'Localización', tag: 'Noventa y cinco por ciento tubárico', kind: 'criteria', items: [
          { t: 'Ampular, la más frecuente', d: 'Se rompe entre las seis y ocho semanas',
            say: 'Casi todos los embarazos ectópicos, más del noventa y cinco por ciento, están en la trompa de Falopio. El sitio más frecuente es la porción ampular, y ahí la rotura ocurre entre las seis y las ocho semanas.' },
          { t: 'Intersticial, la más peligrosa', d: 'Se rompe tarde, pero con hemorragia masiva',
            say: 'Fíjate en la porción intersticial, la que atraviesa el músculo del útero. Se rompe más tarde, entre las doce y las dieciséis semanas, pero cuando se rompe, la hemorragia es masiva, porque está junto a la arteria uterina.' },
        ] },
        { title: 'Factor de riesgo mayor', tag: 'Se pregunta siempre', kind: 'alert', items: [
          { t: 'Ectópico previo', d: 'Multiplica el riesgo de cinco a diez veces',
            say: 'Y el antecedente que más multiplica el riesgo es haber tenido un ectópico antes: de cinco a diez veces más riesgo de repetirlo.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico',
      title: '¿Está roto? Esa es tu primera pregunta',
      nodes: [
        { id: 'sos', col: 0, row: 1, k: 'start', t: 'Dolor anexial + atraso + test positivo', s: 'Sospecha de ectópico' },
        { id: 'est', col: 1, row: 1, k: 'q', t: '¿Está hemodinámicamente estable?', s: 'Presión, pulso, dolor peritoneal' },
        { id: 'ino', col: 2, row: 0, k: 'risk', t: 'Inestable', s: 'Hemoperitoneo por rotura' },
        { id: 'cir', col: 3, row: 0, k: 'alert', t: 'Cirugía de urgencia', s: 'No se espera ningún examen' },
        { id: 'ok', col: 2, row: 2, k: 'good', t: 'Estable', s: 'Puedes estudiar con calma' },
        { id: 'bhcg', col: 3, row: 2, k: 'mech', t: 'Beta-hCG y ecografía', s: 'Zona discriminatoria' },
      ],
      edges: [
        { from: 'sos', to: 'est' },
        { from: 'est', to: 'ino', label: 'no' }, { from: 'ino', to: 'cir' },
        { from: 'est', to: 'ok', label: 'sí' }, { from: 'ok', to: 'bhcg' },
      ],
      steps: [
        { show: ['sos'], note: 'La tríada que despierta la sospecha',
          say: 'Todo parte con la sospecha: dolor en la fosa ilíaca, atraso menstrual, y una prueba de embarazo positiva. Ante eso, tu primera pregunta no es qué examen pedir, sino algo más urgente.' },
        { show: ['est'], note: 'Antes de cualquier examen, evalúa la hemodinamia',
          say: '¿Esta paciente está hemodinámicamente estable? Mira la presión, el pulso, y si hay dolor peritoneal generalizado.' },
        { show: ['ino'], note: 'Hipotensión, taquicardia, omalgia',
          say: 'Si está inestable, con hipotensión, taquicardia, y a veces dolor en el hombro por la sangre irritando el diafragma, ya tienes tu diagnóstico: ectópico roto, con hemoperitoneo.' },
        { show: ['cir'], note: 'Se opera, no se estudia',
          say: 'Y ahí no hay ninguna ecografía que valga la pena esperar: reanimas con volumen y sangre, y vas directo a cirugía, salpingectomía de urgencia.' },
        { show: ['ok'], note: 'Con calma, puedes estudiar',
          say: 'Pero si está estable, tienes tiempo para estudiar con cuidado.' },
        { show: ['bhcg'], note: 'Aquí entra el número clave de la clase',
          say: 'Y ahí pides beta-hCG cuantitativa y ecografía transvaginal, para aplicar la zona discriminatoria. Vamos a esa idea ahora.' },
      ],
    },

    {
      type: 'points',
      kicker: 'La zona discriminatoria',
      title: 'El número que confirma el ectópico',
      cards: [
        { title: 'Mil quinientos a dos mil', tag: 'Se pregunta el corte exacto', kind: 'key', items: [
          { t: 'Con el útero vacío', d: 'Confirma el ectópico',
            say: 'La zona discriminatoria son mil quinientas a dos mil unidades de beta-hCG. Si tu paciente supera ese nivel y el útero está vacío en la ecografía, ya tienes confirmado el diagnóstico de embarazo ectópico.' },
        ] },
        { title: 'Por debajo del corte', tag: 'No descarta nada', kind: 'normal', items: [
          { t: 'Repite en cuarenta y ocho horas', d: 'Un embarazo normal duplica su valor',
            say: 'Si está por debajo, no descarta nada: puede ser un embarazo intrauterino normal, pero muy precoz para verse. Repites la beta-hCG en cuarenta y ocho horas: si se duplica, es normal; si no sube así, sospechas ectópico.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tratamiento',
      title: 'Tres criterios deciden entre fármaco y cirugía',
      nodes: [
        { id: 'noc', col: 0, row: 1, k: 'start', t: 'Ectópico no complicado', s: 'Confirmado, sin hemoperitoneo' },
        { id: 'cri', col: 1, row: 1, k: 'q', t: 'Tres criterios', s: 'Beta-hCG, tamaño, latidos' },
        { id: 'cum', col: 2, row: 0, k: 'good', t: 'Cumple los tres', s: 'Menos de cinco mil, menos de tres coma cinco, sin latidos' },
        { id: 'mtx', col: 3, row: 0, k: 'good', t: 'Metotrexato intramuscular', s: 'Dosis única' },
        { id: 'nocu', col: 2, row: 2, k: 'risk', t: 'No cumple alguno', s: 'Más de cinco mil, más de tres coma cinco, o con latidos' },
        { id: 'lap', col: 3, row: 2, k: 'alert', t: 'Cirugía laparoscópica', s: 'Salpingostomía o salpingectomía' },
      ],
      edges: [
        { from: 'noc', to: 'cri' },
        { from: 'cri', to: 'cum' }, { from: 'cum', to: 'mtx' },
        { from: 'cri', to: 'nocu' }, { from: 'nocu', to: 'lap' },
      ],
      steps: [
        { show: ['noc'], note: 'Ya confirmaste que no está roto',
          say: 'Con el ectópico confirmado y sin signos de rotura, la pregunta pasa a ser otra: ¿fármaco o cirugía? Y eso lo deciden tres números.' },
        { show: ['cri'], note: 'Memoriza estos tres números',
          say: 'Los tres criterios para el metotrexato son: beta-hCG menor a cinco mil, masa anexial menor a tres coma cinco centímetros, y sin latidos cardíacos embrionarios.' },
        { show: ['cum'], note: 'Los tres a la vez, no solo uno',
          say: 'Si cumple los tres a la vez, es candidata a tratamiento médico.' },
        { show: ['mtx'], note: 'Dosis única, y luego se mide en el día cuatro y siete',
          say: 'Le das metotrexato intramuscular, y mides la beta-hCG en el día cuatro y en el día siete. Si entre esos dos días bajó al menos un quince por ciento, el tratamiento funcionó.' },
        { show: ['nocu'], note: 'Basta con que falle uno solo',
          say: 'Pero si no cumple aunque sea uno de los tres, ya sea que la beta-hCG sea mayor, la masa más grande, o que haya latidos, el metotrexato queda descartado.' },
        { show: ['lap'], note: 'Salpingostomía si quiere fertilidad, salpingectomía si no',
          say: 'Ahí vas a cirugía laparoscópica: salpingostomía si quiere conservar la fertilidad y la otra trompa está dañada, o salpingectomía si la trompa está muy destruida o la paridad ya está cumplida.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora ordenemos todo en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Roto, candidato a metotrexato, o para cirugía',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Inestable, con dolor peritoneal', 'Cirugía de urgencia', 'Pedir ecografía o esperar la beta-hCG'],
          say: 'Repasemos las trampas. Paciente inestable, con dolor peritoneal: cirugía de urgencia. El error es pedir una ecografía o esperar un examen antes de operar.' },
        { cells: ['Beta-hCG mayor a la zona discriminatoria, útero vacío', 'Ectópico confirmado', 'Pedir otra ecografía en una semana'],
          say: 'Beta-hCG por sobre la zona discriminatoria y útero vacío: el diagnóstico ya está confirmado. El error es seguir esperando otra ecografía.' },
        { cells: ['Cumple los tres criterios de metotrexato', 'Tratamiento médico', 'Operar de entrada por costumbre'],
          say: 'Si cumple los tres criterios, va con metotrexato. El error es operar de entrada, sin darle la opción médica.' },
        { cells: ['Masa mayor a tres coma cinco o latidos presentes', 'Cirugía laparoscópica', 'Insistir con metotrexato'],
          say: 'Y si la masa supera los tres coma cinco centímetros, o hay latidos, va a cirugía. El error es insistir con el metotrexato aunque no cumpla los criterios.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 29 años, con 7 semanas de amenorrea, consulta por dolor leve en fosa ilíaca derecha. Está hemodinámicamente estable. La beta-hCG cuantitativa es 3.200 unidades por litro, y la ecografía transvaginal muestra útero vacío con una masa anexial derecha de 2,4 centímetros, sin latidos cardíacos y sin líquido libre.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Salpingectomía laparoscópica de urgencia' },
        { letter: 'B', text: 'Metotrexato intramuscular a dosis única' },
        { letter: 'C', text: 'Manejo expectante sin ningún control' },
        { letter: 'D', text: 'Laparotomía exploradora inmediata' },
        { letter: 'E', text: 'Repetir la beta-hCG en 4 semanas' },
      ],
      correct: 'B',
      explanation: 'Estable, beta-hCG bajo cinco mil, masa menor de 3,5 centímetros y sin latidos: cumple los tres criterios de metotrexato. La cirugía se reserva para cuando falla alguno de esos criterios o hay rotura.',
      say: {
        stem: 'Vamos con un caso. Mujer de veintinueve años, con siete semanas de amenorrea, consulta por dolor leve en la fosa ilíaca derecha. Está estable. La beta-hCG es tres mil doscientas, y la ecografía muestra el útero vacío, con una masa anexial derecha de dos coma cuatro centímetros, sin latidos y sin líquido libre.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Tus opciones: salpingectomía de urgencia, metotrexato a dosis única, manejo expectante sin control, laparotomía inmediata, o repetir la beta-hCG en cuatro semanas. Piénsalo.',
        answer: 'Es la B. Repasa los tres criterios: beta-hCG bajo cinco mil, sí; masa bajo tres coma cinco centímetros, sí; sin latidos, sí. Cumple los tres, así que el metotrexato es tu primera opción, no la cirugía. Y el manejo expectante sin ningún control sería un error grave: aunque esté estable ahora, este embarazo puede romperse.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 62',
      stem: 'Mujer joven con dolor súbito en la fosa ilíaca derecha, hipotensión y taquicardia súbitas, con dolor en ambas fosas ilíacas.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Apendicitis aguda complicada' },
        { letter: 'B', text: 'Quiste ovárico torcido' },
        { letter: 'C', text: 'Embarazo ectópico roto' },
        { letter: 'D', text: 'Salpingitis aguda con absceso tubo-ovárico' },
        { letter: 'E', text: 'Rotura folicular hemorrágica' },
      ],
      correct: 'C',
      explanation: 'Dolor súbito con hipotensión y taquicardia súbitas en una mujer joven es el cuadro clásico de hemoperitoneo por rotura tubárica: embarazo ectópico roto.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de enero de dos mil veintitrés. Mujer joven con dolor súbito en la fosa ilíaca derecha, con hipotensión y taquicardia que aparecen de golpe, y dolor en ambas fosas ilíacas.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: apendicitis complicada, quiste ovárico torcido, embarazo ectópico roto, absceso tubo-ovárico, o rotura folicular hemorrágica. Piénsalo.',
        answer: 'Es la C. Un dolor que aparece de golpe, con hipotensión y taquicardia también súbitas, en una mujer joven, es la firma del hemoperitoneo por rotura tubárica. Fíjate que el enunciado no menciona embarazo, y esa es la trampa: siempre tienes que pensar en el ectópico roto ante un cuadro así, y confirmarlo con un test de embarazo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 29',
      stem: 'Mujer de 24 años con amenorrea de 7 semanas. Su examen físico es normal. La beta-hCG plasmática resulta 4.000 unidades por litro, y la ecografía transvaginal muestra una masa anexial derecha de 3 centímetros, sin líquido libre.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Repetir los niveles de hCG en 48 horas' },
        { letter: 'B', text: 'Realizar salpingostomía por laparotomía' },
        { letter: 'C', text: 'Realizar salpingectomía por vía laparoscópica' },
        { letter: 'D', text: 'Indicar metotrexato por vía intramuscular' },
        { letter: 'E', text: 'Controlar con una ecografía en 10 días' },
      ],
      correct: 'D',
      explanation: 'Beta-hCG sobre la zona discriminatoria con útero vacío confirma el ectópico. Cumple los tres criterios de metotrexato: hCG menor de cinco mil, masa menor de 3,5 centímetros, sin latidos.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil veinticuatro. Mujer de veinticuatro años, con siete semanas de amenorrea y examen físico normal. La beta-hCG es cuatro mil, y la ecografía muestra una masa anexial derecha de tres centímetros, sin líquido libre.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: repetir la hCG en cuarenta y ocho horas, salpingostomía por laparotomía, salpingectomía laparoscópica, metotrexato intramuscular, o control con ecografía en diez días. Piénsalo.',
        answer: 'Es la D. La beta-hCG ya supera la zona discriminatoria y el útero está vacío: el ectópico está confirmado, así que repetir la hCG no tiene sentido. Y revisando los tres criterios, todos se cumplen: menos de cinco mil, masa menor a tres coma cinco, sin latidos. Corresponde metotrexato, no cirugía.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 149',
      stem: 'Mujer de 25 años, con atraso menstrual de 3 semanas y dolor abdominal de 5 días, mayor en la fosa ilíaca izquierda. La beta-hCG resulta 5.500 unidades por litro. La ecografía transvaginal muestra útero sin gestación intrauterina y un tumor anexial izquierdo de 53 milímetros, de aspecto complejo, sin líquido libre.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Realizar laparoscopía exploradora' },
        { letter: 'B', text: 'Realizar laparotomía exploradora' },
        { letter: 'C', text: 'Indicar metotrexato' },
        { letter: 'D', text: 'Solicitar ecografía en 7 días' },
        { letter: 'E', text: 'Solicitar niveles de hCG y ecografía en 48 horas' },
      ],
      correct: 'A',
      explanation: 'La masa mide más de 3,5 centímetros y la beta-hCG supera las cinco mil unidades: no cumple los criterios de metotrexato. Al no estar rota, la vía es laparoscópica, no la laparotomía.',
      say: {
        stem: 'Y una última pregunta real, del EUNACOM de julio de dos mil dieciséis. Mujer de veinticinco años, con tres semanas de atraso y dolor abdominal de cinco días, mayor a la izquierda. La beta-hCG es cinco mil quinientas, y la ecografía muestra el útero sin embarazo dentro, con un tumor anexial izquierdo de cincuenta y tres milímetros, sin líquido libre.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: laparoscopía exploradora, laparotomía exploradora, metotrexato, ecografía en siete días, o hCG y ecografía en cuarenta y ocho horas. Piénsalo.',
        answer: 'Es la A. Aquí falla el criterio del tamaño: cincuenta y tres milímetros es mucho más de los treinta y cinco que permite el metotrexato, y la beta-hCG también está sobre el corte. No está roto, porque no hay líquido libre, así que no necesitas la laparotomía; te alcanza con la laparoscopía, que tiene menos riesgo.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Primera pregunta', tag: '¿Está roto?', kind: 'key', items: [
          { t: 'Inestable: cirugía ya', d: 'Ningún examen se interpone',
            say: 'Cerremos con las reglas de oro. Frente a un ectópico, tu primera pregunta es si está roto. Si está inestable, cirugía de urgencia, sin esperar ningún examen.' },
        ] },
        { title: 'Diagnóstico', tag: 'El número que confirma', kind: 'criteria', items: [
          { t: 'Beta-hCG sobre mil quinientos', d: 'Con útero vacío, confirma',
            say: 'Si está estable, la beta-hCG por sobre mil quinientas a dos mil, con el útero vacío, confirma el diagnóstico.' },
        ] },
        { title: 'Tratamiento', tag: 'Tres criterios', kind: 'pharma', items: [
          { t: 'Menos de cinco mil, menos de tres coma cinco, sin latidos', d: 'Los tres juntos: metotrexato',
            say: 'Y para el metotrexato, tienes que cumplir los tres a la vez: beta-hCG menor a cinco mil, masa menor a tres coma cinco centímetros, y sin latidos. Si te llevas una sola idea de hoy: primero decide si está roto, y si no lo está, son esos tres números los que deciden entre fármaco y cirugía. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Embarazo ectópico: roto, fármaco, o cirugía',
    root: N('start', 'Sospecha de embarazo ectópico', 'Dolor anexial + atraso + test positivo',
      'Paciente con dolor anexial, atraso menstrual y prueba de embarazo positiva. La primera decisión no es qué examen pedir: es si está roto o no.',
      ['', N('q', '¿Está hemodinámicamente inestable?', 'Presión, pulso, dolor peritoneal',
        '¿Hay hipotensión, taquicardia o dolor peritoneal generalizado?',
        ['SÍ', N('alert', 'Ectópico roto', 'Cirugía de urgencia',
          'Reanimación con volumen y sangre, y traslado inmediato a pabellón para salpingectomía. No se espera ningún examen.')],
        ['NO', N('q', '¿Beta-hCG sobre mil quinientos con útero vacío?', 'Zona discriminatoria',
          'Con la paciente estable, mides beta-hCG y ecografía.',
          ['NO', N('do', 'Repetir en 48 horas', 'Un embarazo normal duplica el valor',
            'Puede ser un embarazo intrauterino muy precoz: repites la beta-hCG en cuarenta y ocho horas.')],
          ['SÍ', N('q', '¿Cumple los tres criterios de metotrexato?', 'Menos de cinco mil, menos de tres coma cinco, sin latidos',
            'Ectópico confirmado. Revisa los tres criterios juntos.',
            ['SÍ', N('ok', 'Metotrexato intramuscular', 'Control en el día cuatro y siete',
              'Dosis única, con control de beta-hCG en el día cuatro y en el día siete: debe bajar al menos un quince por ciento entre esos días.')],
            ['NO', N('do', 'Cirugía laparoscópica', 'Salpingostomía o salpingectomía',
              'Falla algún criterio: salpingostomía si desea fertilidad y la otra trompa está dañada, o salpingectomía si la trompa está muy destruida o la paridad está cumplida.')])])])]),
  },
};
