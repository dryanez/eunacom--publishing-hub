// Clase 20.6 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_ginecologia.cjs (gin-06).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gin-06',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cómo se desencadena el escape decide si operas o no',
      say: 'Bienvenida. Hoy vemos el piso pélvico: el prolapso de órganos y la incontinencia urinaria. Y ahí hay una pregunta que vas a ver una y otra vez en el examen: incontinencia de esfuerzo versus incontinencia de urgencia. Se parecen en el síntoma, pero el tratamiento es completamente opuesto. Vamos a aprender a separarlas.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: '¿Por qué se escapa la orina?',
      nodes: [
        { id: 'par', col: 0, row: 1, k: 'cause', t: 'Daño obstétrico del piso pélvico', s: 'Partos vaginales, fórceps' },
        { id: 'hip', col: 1, row: 0, k: 'mech', t: 'Hipermovilidad uretral', s: 'Se pierde el soporte' },
        { id: 'esf', col: 2, row: 0, k: 'effect', t: 'Escape con tos o esfuerzo', s: 'Incontinencia de esfuerzo' },
        { id: 'det', col: 1, row: 2, k: 'mech', t: 'Detrusor hiperactivo', s: 'Se contrae solo, sin avisar' },
        { id: 'urg', col: 2, row: 2, k: 'effect', t: 'Escape con deseo urgente', s: 'Incontinencia de urgencia' },
      ],
      edges: [
        { from: 'par', to: 'hip' }, { from: 'hip', to: 'esf' },
        { from: 'det', to: 'urg' },
      ],
      steps: [
        { show: ['par'], note: 'El origen suele ser obstétrico',
          say: 'Empecemos por el mecanismo, porque son dos enfermedades distintas que comparten un síntoma. La primera empieza con el daño del piso pélvico durante el parto vaginal, sobre todo si hubo fórceps o bebés grandes.' },
        { show: ['hip'], note: 'La uretra pierde su soporte',
          say: 'Ese daño deja a la uretra sin el soporte que la mantiene fija: se vuelve hipermóvil.' },
        { show: ['esf'], note: 'Sube la presión, se escapa la orina',
          say: 'Y por eso, cuando sube la presión abdominal, al toser, reír o correr, se escapa la orina. Esto es la incontinencia de esfuerzo: un problema anatómico de soporte.' },
        { show: ['det'], note: 'Nada que ver con el esfuerzo',
          say: 'La segunda es completamente distinta: el músculo detrusor de la vejiga se contrae solo, sin que tú lo controles, durante el llenado.' },
        { show: ['urg'], note: 'El escape avisa con un deseo imposible de aguantar',
          say: 'Y esa contracción da un deseo miccional urgente y súbito, que termina en escape antes de llegar al baño. Esto es la incontinencia de urgencia: un problema funcional del músculo, no del soporte. Guarda esta diferencia, porque de ella depende todo el tratamiento.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: '¿Cómo las distingues en la consulta?',
      cards: [
        { title: 'Incontinencia de esfuerzo', tag: 'Escape con la presión', kind: 'key', items: [
          { t: 'Escape sincrónico con la tos', d: 'Poco volumen, sin aviso previo',
            say: 'En la incontinencia de esfuerzo, el escape ocurre justo cuando tose o se ríe, en poco volumen, y sin ningún aviso previo.' },
          { t: 'Prueba de esfuerzo positiva', d: 'Se ve el escape al toser con vejiga llena',
            say: 'La confirmas con la prueba de esfuerzo: le pides que tosa con la vejiga llena y ves el escape en el momento.' },
          { t: 'Test de Bonney', d: 'El escape cede al levantar el cuello vesical',
            say: 'Y si quieres confirmar que el mecanismo es el soporte, está el test de Bonney: al elevar con los dedos el cuello vesical, sin ocluir la uretra, el escape desaparece.' },
        ] },
        { title: 'Incontinencia de urgencia', tag: 'Vejiga hiperactiva', kind: 'alert', items: [
          { t: 'Deseo imperioso antes del escape', d: 'Con volumen abundante',
            say: 'En la incontinencia de urgencia, primero viene el deseo urgente e incontrolable, y después un escape de bastante volumen.' },
          { t: 'Polaquiuria y nicturia', d: 'Ocho veces de día, dos o más de noche',
            say: 'Y casi siempre se acompaña de polaquiuria y nicturia. Con ese cuadro, ya deberías pensar en vejiga hiperactiva, no en un problema de soporte.' },
          { t: 'Todo esto sin infección', d: 'Confírmalo con un urocultivo negativo',
            say: 'Y algo que siempre te van a pedir en el examen: antes de etiquetarla como vejiga hiperactiva, confirma con un urocultivo negativo que no es simplemente una infección urinaria la que le da esos síntomas.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Prolapso',
      title: 'Cuando lo que baja es el órgano completo',
      cards: [
        { title: 'Factores de riesgo', tag: 'El mismo origen', kind: 'normal', items: [
          { t: 'Partos vaginales traumáticos', d: 'Y la menopausia',
            say: 'El prolapso de órganos pélvicos comparte el mismo origen: partos vaginales traumáticos, y después la menopausia, que debilita el colágeno de sostén.' },
        ] },
        { title: 'POP-Q', tag: 'El himen es el punto cero', kind: 'criteria', items: [
          { t: 'Estadio dos', d: 'Entre un centímetro arriba y abajo del himen',
            say: 'Para medirlo se usa el sistema POP-Q, donde el himen es el punto de referencia cero. El estadio dos es cuando el descenso queda entre un centímetro por encima y un centímetro por debajo del himen.' },
          { t: 'Estadio cuatro', d: 'Eversión vaginal completa',
            say: 'Y el estadio cuatro es la procidencia total, con la vagina completamente evertida.' },
        ] },
        { title: 'Tratamiento', tag: 'Según los síntomas', kind: 'pharma', items: [
          { t: 'Pesario vaginal', d: 'Si rechaza o no tolera la cirugía',
            say: 'Si es sintomático, el pesario vaginal es la opción conservadora de elección cuando la paciente rechaza la cirugía o tiene alto riesgo quirúrgico.' },
          { t: 'Colporrafia o sacrocolpopexia', d: 'La opción quirúrgica definitiva',
            say: 'Y si va a cirugía, se corrige con colporrafia anterior o posterior, según el compartimento, o con sacrocolpopexia si es apical.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Un tratamiento, y su contrario',
      cards: [
        { title: 'Incontinencia de esfuerzo', tag: 'Kegel, luego cirugía', kind: 'key', items: [
          { t: 'Ejercicios de Kegel', d: 'Primera línea, siempre',
            say: 'En la incontinencia de esfuerzo empiezas siempre con los ejercicios de Kegel, para fortalecer el piso pélvico.' },
          { t: 'Cabestrillo TOT o TVT', d: 'Si falla la kinesioterapia',
            say: 'Si eso falla, o el caso es más severo, la cirugía de elección es el cabestrillo mediouretral, la cinta TOT o TVT, con una curación sobre el ochenta y cinco por ciento.' },
        ] },
        { title: 'Incontinencia de urgencia', tag: '¡Nunca se opera!', kind: 'alert', items: [
          { t: 'Reeducación vesical', d: 'Micciones a horario fijo',
            say: 'En la incontinencia de urgencia, empiezas con la reeducación vesical: micciones a horario fijo, y menos café, té y alcohol.' },
          { t: 'Anticolinérgicos o mirabegrón', d: 'Solifenacina, oxibutinina',
            say: 'Y sumas fármacos: solifenacina u oxibutinina, o mirabegrón si quieres evitar la boca seca en el adulto mayor. Y acuérdate de esto siempre: la cirugía de cabestrillo está formalmente contraindicada aquí, porque empeora la urgencia.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ordenemos todo en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Esfuerzo versus urgencia, en una tabla',
      head: ['Característica', 'Incontinencia de esfuerzo', 'Incontinencia de urgencia'],
      rows: [
        { cells: ['Gatillo', 'Tos, risa o esfuerzo físico', 'Deseo miccional súbito'],
          say: 'Repasemos en una tabla. El gatillo: presión abdominal en una, deseo súbito en la otra.' },
        { cells: ['Síntomas asociados', 'Sin polaquiuria ni nicturia', 'Polaquiuria y nicturia frecuentes'],
          say: 'Los síntomas asociados: casi nunca hay polaquiuria en la de esfuerzo; casi siempre la hay en la de urgencia.' },
        { cells: ['Tratamiento inicial', 'Kegel', 'Reeducación vesical y fármacos'],
          say: 'El tratamiento inicial: Kegel en una, reeducación y fármacos en la otra.' },
        { cells: ['Cirugía', 'Estándar de oro: TOT o TVT', 'Formalmente contraindicada'],
          say: 'Y la cirugía: es el estándar de oro en la de esfuerzo, y está formalmente contraindicada en la de urgencia. Esta última fila es la que más se pregunta.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 52 años, con 3 partos vaginales de recién nacidos grandes, consulta por escapes de orina de 2 años. Ocurren al toser fuerte, reírse o hacer ejercicio. Niega deseo urgente de orinar, no tiene polaquiuria y duerme sin levantarse. Al examen, con vejiga llena, se le pide toser y se observa un chorro de escape sincrónico con la tos. El urocultivo es negativo.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar oxibutinina oral' },
        { letter: 'B', text: 'Indicar ejercicios de Kegel de piso pélvico' },
        { letter: 'C', text: 'Realizar cistoscopía' },
        { letter: 'D', text: 'Instalar sonda Foley permanente' },
        { letter: 'E', text: 'Indicar cabestrillo mediouretral de entrada, sin kinesioterapia previa' },
      ],
      correct: 'B',
      explanation: 'El escape sincrónico con la tos, sin urgencia ni polaquiuria, y con la prueba de esfuerzo positiva, confirma incontinencia urinaria de esfuerzo. El manejo inicial siempre es la kinesioterapia de piso pélvico; el cabestrillo se reserva para cuando esta falla.',
      say: {
        stem: 'Vamos al caso. Mujer de cincuenta y dos años, con tres partos vaginales de recién nacidos grandes, consulta por escapes de orina de dos años de evolución. Ocurren al toser fuerte, reírse o hacer ejercicio. Niega deseo urgente de orinar, no tiene polaquiuria y duerme sin levantarse en la noche. Al examen, con la vejiga llena, se le pide toser y se ve un chorro de escape sincrónico con la tos. El urocultivo es negativo.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Tienes cinco opciones: iniciar oxibutinina, indicar ejercicios de Kegel, realizar cistoscopía, instalar una sonda permanente, o ir directo al cabestrillo sin kinesioterapia previa. Piénsalo.',
        answer: 'Es la B. Todo el cuadro es incontinencia de esfuerzo: escape sincrónico con la tos, sin urgencia ni polaquiuria, y prueba de esfuerzo positiva. El manejo siempre empieza con Kegel. La oxibutinina es para la urgencia, y el cabestrillo se reserva para cuando la kinesioterapia ya falló, no para partir.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 101',
      stem: 'Mujer de 56 años con escapes de orina en grandes cantidades, precedidos por deseos incontrolables de orinar. También presenta escapes en la noche. Al examen no hay pérdida con la maniobra de Valsalva. Urocultivo negativo y sedimento normal. La ecografía muestra vejiga de paredes delgadas, sin cálculos ni residuo postmiccional.',
      question: '¿Cuál es el tratamiento más adecuado?',
      options: [
        { letter: 'A', text: 'Iniciar tamsulosina' },
        { letter: 'B', text: 'Iniciar oxibutinina' },
        { letter: 'C', text: 'Realizar cistoscopía' },
        { letter: 'D', text: 'Realizar suspensión uretral con cinta transvaginal' },
        { letter: 'E', text: 'Indicar ejercicios de kinesioterapia pélvica' },
      ],
      correct: 'B',
      explanation: 'El escape precedido por deseo urgente, sin relación con el esfuerzo, y con Valsalva negativo, es incontinencia de urgencia. El tratamiento inicial es conductual y farmacológico con anticolinérgicos como la oxibutinina; la cirugía no tiene rol aquí.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil diecinueve. Mujer de cincuenta y seis años con escapes de orina en grandes cantidades, precedidos por deseos incontrolables de orinar, incluso en la noche. Al examen, la maniobra de Valsalva no provoca escape. El urocultivo es negativo y la ecografía muestra una vejiga normal.',
        question: '¿Cuál es el tratamiento más adecuado?',
        options: 'Las opciones: iniciar tamsulosina, iniciar oxibutinina, realizar cistoscopía, hacer una suspensión con cinta transvaginal, o indicar kinesioterapia pélvica. Piénsalo.',
        answer: 'La respuesta es la B, oxibutinina. Fíjate que la Valsalva salió negativa: esto descarta el componente de esfuerzo. El deseo urgente que precede al escape es la firma de la incontinencia de urgencia, y ahí el tratamiento es el anticolinérgico, nunca la cirugía.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 45',
      stem: 'Mujer de 58 años, multípara de 4, presenta sensación de peso vaginal, asociada a escapes de orina al inicio del deseo miccional. Al examen físico presenta prolapso genital.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar oxibutinina oral' },
        { letter: 'B', text: 'Realizar prueba de Q-tip' },
        { letter: 'C', text: 'Realizar la estadificación POP-Q' },
        { letter: 'D', text: 'Solicitar resonancia magnética pelviana' },
        { letter: 'E', text: 'Realizar histerectomía' },
      ],
      correct: 'C',
      explanation: 'Ante un prolapso genital confirmado al examen, el paso siguiente es cuantificarlo formalmente con el sistema POP-Q, que mide cada compartimento tomando el himen como plano de referencia. Recién con esa estadificación se decide el tratamiento.',
      say: {
        stem: 'Y una última pregunta real, del EUNACOM de julio de dos mil diecinueve. Mujer de cincuenta y ocho años, multípara de cuatro, con sensación de peso vaginal y escapes de orina al inicio del deseo miccional. Al examen físico se confirma un prolapso genital.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: iniciar oxibutinina, realizar la prueba de Q-tip, hacer la estadificación POP-Q, pedir una resonancia pelviana, o realizar histerectomía. Piénsalo.',
        answer: 'Es la C. Confirmado el prolapso al examen, el paso que sigue es cuantificarlo con el sistema POP-Q, tomando el himen como plano cero. Recién con ese grado definido decides entre pesario u observación, o cirugía. Ir directo a la histerectomía, sin siquiera estadificar, es la trampa.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Lo primero que preguntas', kind: 'key', items: [
          { t: '¿Con esfuerzo o con urgencia?', d: 'Esa pregunta ordena todo',
            say: 'Cerremos. La primera pregunta siempre es cómo se desencadena el escape: con el esfuerzo, o con un deseo urgente.' },
        ] },
        { title: 'Tratamiento', tag: 'Uno es cirugía, el otro nunca', kind: 'pharma', items: [
          { t: 'Esfuerzo: Kegel, luego TOT o TVT', d: 'Cirugía estándar de oro',
            say: 'En la de esfuerzo, Kegel primero, y si falla, cirugía con cabestrillo.' },
          { t: 'Urgencia: reeducación y fármacos', d: 'Nunca cirugía',
            say: 'En la de urgencia, reeducación vesical y anticolinérgicos o mirabegrón, y la cirugía nunca entra.' },
        ] },
        { title: 'Última idea', tag: 'Para el examen', kind: 'alert', items: [
          { t: 'Prolapso: siempre POP-Q primero', d: 'Antes de decidir el tratamiento',
            say: 'Si te llevas una sola idea de hoy: nunca operes una incontinencia de urgencia, y nunca trates un prolapso sin antes estadificarlo con POP-Q. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Incontinencia urinaria: qué decide el tratamiento',
    root: N('start', 'Mujer con escapes de orina', 'Confirma primero que no hay infección',
      'Partamos con una mujer que consulta por escapes de orina. Antes de nada, descarta una infección urinaria con el sedimento y el urocultivo.',
      ['', N('q', '¿Cómo se desencadena el escape?', 'Esa respuesta separa dos enfermedades distintas',
        'Con eso descartado, la pregunta clave es cómo se desencadena el escape.',
        ['Con la tos o el esfuerzo', N('do', 'Confirma con la prueba de esfuerzo', 'Vejiga llena, se le pide toser',
          'Si el escape es con la tos o el esfuerzo, confírmalo con la prueba de esfuerzo: vejiga llena, y se le pide toser.',
          ['', N('q', '¿Responde a los ejercicios de Kegel?', 'Incontinencia de esfuerzo',
            'Confirmada la incontinencia de esfuerzo, empiezas con Kegel. ¿Responde?',
            ['Sí responde', N('ok', 'Continúa con la kinesioterapia', 'Sin necesidad de cirugía',
              'Si responde, continúas con la kinesioterapia de piso pélvico, sin necesidad de operar.')],
            ['No responde', N('do', 'Cabestrillo mediouretral TOT o TVT', 'Curación sobre el ochenta y cinco por ciento',
              'Si no responde, el cabestrillo mediouretral, TOT o TVT, es la cirugía de elección.')])])],
        ['Con deseo miccional urgente', N('alert', 'Incontinencia de urgencia', 'Aquí la cirugía nunca es la respuesta',
          'Si el escape viene precedido de un deseo urgente, con polaquiuria y nicturia, es incontinencia de urgencia. Y aquí la cirugía nunca es la respuesta.',
          ['', N('do', 'Reeducación vesical más anticolinérgico o mirabegrón', 'Solifenacina, oxibutinina o mirabegrón',
            'El tratamiento es reeducación vesical, sumado a un anticolinérgico como la solifenacina o la oxibutinina, o mirabegrón si quieres evitar la boca seca.')])])]),
  },
};
