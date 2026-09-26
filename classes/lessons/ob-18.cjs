// Clase 19.18 — guion docente reescrito (voz "tú", texto en pantalla corto; ver gastro-01.cjs y gastro-02.cjs para el formato).
// Fuente clínica: books/scripts/dataset_obstetricia_bloque_4.cjs (ob-18).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ob-18',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Las cuatro T que explican toda hemorragia postparto y su manejo escalonado',
      say: 'Bienvenido. Hoy vemos la hemorragia postparto, la primera causa de muerte materna evitable en el mundo. Es la emergencia obstétrica que más rinde en el examen, y se ordena con una regla muy simple: las cuatro T. Vas a aprender a diagnosticar cuál de las cuatro tienes delante, y a subir la escalera de tratamiento sin saltarte pasos. Partamos.',
    },

    {
      type: 'points',
      kicker: 'Definición',
      title: '¿Cuándo hablamos de código rojo?',
      cards: [
        { title: 'La cifra que activa todo', tag: 'Primeras 24 horas', kind: 'key', items: [
          { t: 'Un litro de sangre', d: 'O signos de hipovolemia tras el parto',
            say: 'Empecemos por la definición. Hablas de hemorragia postparto cuando la pérdida acumulada llega a un litro de sangre, o antes, si aparecen signos de hipovolemia, dentro de las primeras veinticuatro horas.' },
          { t: 'Activas el código rojo', d: 'Ayuda, dos vías gruesas, exámenes ya',
            say: 'Ahí activas el código rojo: pides ayuda, pones dos vías periféricas de grueso calibre, y tomas exámenes y pruebas cruzadas de inmediato. No esperas a que la paciente se ponga mal para moverte.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico',
      title: 'Las cuatro T de la hemorragia',
      nodes: [
        { id: 'ton', col: 0, row: 0, k: 'cause', t: 'Tono', s: 'Atonía uterina, setenta por ciento' },
        { id: 'tra', col: 1, row: 0, k: 'cause', t: 'Trauma', s: 'Desgarros, veinte por ciento' },
        { id: 'tej', col: 2, row: 0, k: 'cause', t: 'Tejido', s: 'Restos placentarios, diez por ciento' },
        { id: 'trb', col: 3, row: 0, k: 'cause', t: 'Trombina', s: 'Coagulopatía, uno por ciento' },
        { id: 'hem', col: 1, row: 2, k: 'risk', t: 'Hemorragia postparto', s: 'Un mismo destino' },
      ],
      edges: [
        { from: 'ton', to: 'hem' }, { from: 'tra', to: 'hem' }, { from: 'tej', to: 'hem' }, { from: 'trb', to: 'hem' },
      ],
      steps: [
        { show: ['ton'], note: 'La causa más frecuente, de lejos',
          say: 'La regla que ordena todo esto son las cuatro T. La primera, y la más frecuente, es el tono: la atonía uterina. Tu útero no se contrae, y las arterias que deberían quedar comprimidas siguen sangrando. Explica siete de cada diez casos.' },
        { show: ['tra'], note: 'Útero duro, pero igual sangra',
          say: 'La segunda es el trauma: desgarros del cuello, la vagina o el periné, o una inversión uterina. Aquí tu útero está bien contraído, pero el sangrado sigue por otra parte del canal.' },
        { show: ['tej'], note: 'Algo se quedó adentro',
          say: 'La tercera es el tejido: un resto de placenta que no salió completo. Revisas la placenta y te falta un cotiledón o una membrana.' },
        { show: ['trb'], note: 'La sangre no coagula',
          say: 'Y la cuarta, la más rara, es la trombina: una coagulopatía, previa o adquirida, en que la sangre simplemente no coagula.' },
        { show: ['hem'], note: 'Cuatro causas, un mismo cuadro',
          say: 'Cualquiera de las cuatro te lleva al mismo lugar, una hemorragia postparto. Y saber cuál de las cuatro tienes delante es lo que decide todo lo que viene.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Atonía uterina',
      title: 'La escalera del tratamiento',
      nodes: [
        { id: 'mas', col: 0, row: 1, k: 'start', t: 'Masaje bimanual', s: 'Primer paso, siempre' },
        { id: 'oxi', col: 1, row: 0, k: 'mech', t: 'Oxitocina', s: 'Primera línea' },
        { id: 'txa', col: 1, row: 2, k: 'mech', t: 'Ácido tranexámico', s: 'Un gramo, antes de tres horas' },
        { id: 'seg', col: 2, row: 1, k: 'mech', t: 'Ergometrina o misoprostol', s: 'Segunda línea' },
        { id: 'bak', col: 3, row: 0, k: 'refer', t: 'Balón de Bakri', s: 'Si sigue sangrando' },
        { id: 'cir', col: 4, row: 1, k: 'alert', t: 'Cirugía o histerectomía', s: 'Último recurso' },
      ],
      edges: [
        { from: 'mas', to: 'oxi' }, { from: 'mas', to: 'txa' }, { from: 'oxi', to: 'seg', label: 'si persiste' },
        { from: 'seg', to: 'bak', label: 'si persiste' }, { from: 'bak', to: 'cir', label: 'si persiste' },
      ],
      steps: [
        { show: ['mas'], note: 'Lo primero, con las dos manos',
          say: 'Con atonía confirmada, subes una escalera de tratamiento, sin saltarte peldaños. El primer paso, siempre, es el masaje uterino bimanual: una mano adentro, en la vagina, y la otra comprimiendo el fondo desde afuera.' },
        { show: ['oxi', 'txa'], note: 'Al mismo tiempo que masajeas',
          say: 'En paralelo, la oxitocina endovenosa es tu primera línea farmacológica. Y súmale siempre el ácido tranexámico, un gramo endovenoso, dentro de las primeras tres horas de sangrado: baja la mortalidad materna, y es obligatorio en toda hemorragia postparto.' },
        { show: ['seg'], note: 'Ojo con las contraindicaciones',
          say: 'Si el sangrado persiste, pasas a la segunda línea: ergometrina, o misoprostol si tu paciente es hipertensa. Guarda esa diferencia, porque el examen la pregunta seguido.' },
        { show: ['bak'], note: 'Rescate mecánico antes de operar',
          say: 'Si aun así sigue sangrando, viene el balón de Bakri: lo inflas dentro del útero y comprime el sangrado desde adentro, antes de abrir el abdomen.' },
        { show: ['cir'], note: 'Se conserva el útero mientras se pueda',
          say: 'Y si nada de esto funciona, cirugía: suturas de compresión, ligar las arterias, y como último recurso, histerectomía, para salvar la vida de tu paciente.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Fármacos uterotónicos',
      title: 'Lo que nunca puedes olvidar',
      cards: [
        { title: 'Ergometrina', tag: 'Contraindicación absoluta', kind: 'alert', items: [
          { t: 'Nunca en hipertensas', d: 'Riesgo de crisis hipertensiva y ACV',
            say: 'Presta mucha atención aquí. La ergometrina está formalmente contraindicada en la preeclampsia y en cualquier paciente hipertensa: le produces una vasoconstricción tan fuerte que puedes desencadenar una crisis hipertensiva o un accidente cerebrovascular.' },
        ] },
        { title: 'Carboprost', tag: 'Contraindicación absoluta', kind: 'alert', items: [
          { t: 'Nunca en asmáticas', d: 'Provoca broncoespasmo grave',
            say: 'Y el carboprost está prohibido en el asma bronquial, porque provoca un broncoespasmo severo. Si tu paciente es hipertensa o asmática, el fármaco seguro que te queda es el misoprostol.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Inversión uterina',
      title: 'Cuando el útero se da vuelta',
      nodes: [
        { id: 'trac', col: 0, row: 1, k: 'cause', t: 'Tracción indebida del cordón', s: 'Con el útero relajado' },
        { id: 'inv', col: 1, row: 1, k: 'risk', t: 'Útero invertido', s: 'Masa en la vagina, fondo ausente' },
        { id: 'sho', col: 2, row: 0, k: 'alert', t: 'Shock neurogénico', s: 'Bradicardia con hipotensión' },
        { id: 'joh', col: 2, row: 2, k: 'good', t: 'Maniobra de Johnson', s: 'Reposición manual inmediata' },
      ],
      edges: [
        { from: 'trac', to: 'inv' }, { from: 'inv', to: 'sho' }, { from: 'inv', to: 'joh' },
      ],
      steps: [
        { show: ['trac'], note: 'Rara, pero muy grave',
          say: 'Un cuadro raro, pero letal: la inversión uterina. Ocurre cuando alguien tracciona el cordón con fuerza, mientras tu útero todavía está relajado y la placenta sigue pegada.' },
        { show: ['inv'], note: 'El fondo del útero desaparece',
          say: 'El útero se da vuelta como un guante, y su fondo protruye o sale por la vulva. Al palpar el abdomen, el útero simplemente no está.' },
        { show: ['sho'], note: 'La pista que lo distingue de otras causas',
          say: 'Lo que te avisa que es esto, y no otra causa de sangrado, es un shock neurogénico: hipotensión con bradicardia, por la tracción de los nervios peritoneales. Es al revés de lo que esperarías en una hemorragia.' },
        { show: ['joh'], note: 'Suspende los uterotónicos primero',
          say: 'La conducta es suspender de inmediato cualquier uterotónico, relajar el útero, y hacer la reposición manual con la maniobra de Johnson, empujando el fondo hacia arriba. Solo después de reponerlo das oxitocina, para que se quede contraído.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos las cuatro T en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Cómo diferenciar las cuatro T',
      head: ['Causa', 'Cómo se ve el útero', 'Conducta'],
      rows: [
        { cells: ['Tono', 'Blando, no se retrae', 'Masaje + oxitocina + ácido tranexámico'],
          say: 'Repasemos en una tabla. Si el útero está blando y no se retrae, es tono: masaje, oxitocina y ácido tranexámico.' },
        { cells: ['Trauma', 'Duro, contraído, igual sangra', 'Revisar el canal y suturar'],
          say: 'Si el útero está duro y contraído, pero el sangrado sigue, es trauma: revisas el canal con valvas y suturas los desgarros.' },
        { cells: ['Tejido', 'Placenta incompleta', 'Revisión manual o instrumental'],
          say: 'Si la placenta salió incompleta, es tejido: revisión manual o instrumental de la cavidad.' },
        { cells: ['Trombina', 'Sangre que no coagula', 'Hemoderivados'],
          say: 'Y si la sangre no coagula en ningún lado, es trombina: plasma, crioprecipitados y plaquetas.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Puérpera de un embarazo gemelar, con trabajo de parto prolongado. Diez minutos después del alumbramiento presenta sangrado masivo, con útero blando a cuatro centímetros sobre el ombligo, sin tono contráctil. Antecedente de preeclampsia con presión habitual de 150/95.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Masaje uterino bimanual, oxitocina, ácido tranexámico, y evitar la ergometrina' },
        { letter: 'B', text: 'Administrar ergometrina intramuscular de inmediato' },
        { letter: 'C', text: 'Realizar histerectomía como primera medida' },
        { letter: 'D', text: 'Revisar el canal del parto en busca de desgarros' },
        { letter: 'E', text: 'Administrar heparina para descartar coagulopatía' },
      ],
      correct: 'A',
      explanation: 'Sobredistensión por embarazo gemelar más trabajo de parto prolongado: atonía uterina. Se maneja con masaje, oxitocina y ácido tranexámico. La ergometrina está contraindicada por el antecedente hipertensivo; la histerectomía es el último recurso y la heparina empeoraría el sangrado.',
      say: {
        stem: 'Vamos con un caso. Una puérpera de un embarazo gemelar, con un trabajo de parto prolongado, presenta sangrado masivo diez minutos después del alumbramiento. El útero está blando, a cuatro centímetros sobre el ombligo, sin ningún tono. Tiene antecedente de preeclampsia, con presión habitual de ciento cincuenta sobre noventa y cinco.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: masaje uterino con oxitocina y ácido tranexámico evitando la ergometrina, dar ergometrina de inmediato, hacer histerectomía como primera medida, revisar el canal buscando desgarros, o dar heparina. Piénsalo.',
        answer: 'Es la A. El embarazo gemelar y el trabajo de parto prolongado sobredistendieron el útero, y eso explica la atonía. El manejo inicial es masaje, oxitocina y ácido tranexámico. La trampa es la B: con este antecedente hipertensivo, la ergometrina está formalmente contraindicada por el riesgo de una crisis hipertensiva.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2018 · Pregunta 144',
      stem: 'Paciente de 24 años con metrorragia importante en el puerperio inmediato, con flujo abundante de sangre roja. El fondo uterino se palpa por sobre el ombligo.',
      question: '¿Cuál es la medida inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Metilergonovina' },
        { letter: 'B', text: 'Misoprostol' },
        { letter: 'C', text: 'Masaje uterino' },
        { letter: 'D', text: 'Carbetocina' },
        { letter: 'E', text: 'Oxitocina' },
      ],
      correct: 'C',
      explanation: 'Ante una hemorragia postparto por atonía, el primer paso siempre es el masaje uterino bimanual, y en paralelo se inician los uterotónicos, empezando por la oxitocina.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de julio de dos mil dieciocho. Una paciente de veinticuatro años presenta una metrorragia importante en el puerperio inmediato, con sangre roja abundante. El fondo uterino se palpa por sobre el ombligo.',
        question: '¿Cuál es la medida inicial más adecuada?',
        options: 'Las opciones: metilergonovina, misoprostol, masaje uterino, carbetocina, u oxitocina. Piénsalo.',
        answer: 'Es la C, masaje uterino. Es siempre lo primero, con las dos manos, y en paralelo empiezas los fármacos uterotónicos, partiendo por la oxitocina. Los otros fármacos vienen después, si el masaje y la oxitocina no bastan.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 54',
      stem: 'Puérpera con hemorragia postparto importante. Su hemograma muestra hematocrito veintiocho por ciento, plaquetas ochenta mil, con tiempo de protrombina y TTPA alargados, y fibrinógeno de 90 miligramos por decilitro.',
      question: '¿Cuál es la mejor indicación transfusional?',
      options: [
        { letter: 'A', text: 'Crioprecipitado' },
        { letter: 'B', text: 'Glóbulos rojos' },
        { letter: 'C', text: 'Plaquetas' },
        { letter: 'D', text: 'Sangre fresca' },
        { letter: 'E', text: 'Plasma fresco congelado' },
      ],
      correct: 'E',
      explanation: 'Tiempos de coagulación alargados con fibrinógeno bajo, en el contexto de una hemorragia postparto: es una coagulación intravascular diseminada, la T de trombina. El plasma fresco congelado repone los factores de coagulación consumidos.',
      say: {
        stem: 'Y esta es del EUNACOM de diciembre de dos mil diecisiete. Una puérpera con una hemorragia postparto importante tiene un hematocrito de veintiocho por ciento, plaquetas en ochenta mil, con los tiempos de coagulación alargados y un fibrinógeno de noventa.',
        question: '¿Cuál es la mejor indicación transfusional?',
        options: 'Las opciones: crioprecipitado, glóbulos rojos, plaquetas, sangre fresca, o plasma fresco congelado. Piénsalo.',
        answer: 'Es la E. Los tiempos alargados junto con un fibrinógeno bajo te dicen que esto ya no es solo tono ni trauma: es la T de trombina, una coagulación intravascular diseminada. El plasma fresco congelado repone los factores de coagulación que se están consumiendo.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Las cuatro T', tag: 'Diagnóstico', kind: 'key', items: [
          { t: 'Tono: útero blando', d: 'La causa más frecuente, de lejos',
            say: 'Cerremos con las reglas de oro. El tono, con el útero blando, es la causa más frecuente, de lejos.' },
          { t: 'Trauma: útero duro', d: 'Pero sigue sangrando',
            say: 'Si el útero está duro y aun así sangra, piensa en trauma.' },
        ] },
        { title: 'Tratamiento', tag: 'Escalera sin saltarse pasos', kind: 'pharma', items: [
          { t: 'Masaje primero', d: 'Luego oxitocina y ácido tranexámico',
            say: 'El masaje siempre va primero, junto con oxitocina y ácido tranexámico.' },
          { t: 'Ergometrina: nunca hipertensa', d: 'Carboprost: nunca asmática',
            say: 'Y nunca dés ergometrina a una hipertensa, ni carboprost a una asmática. Si te llevas una sola idea de hoy: primero identifica cuál de las cuatro T tienes, y después sube la escalera sin saltarte pasos. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Hemorragia postparto: las cuatro T',
    root: N('start', 'Sangrado importante postparto', 'Un litro o signos de hipovolemia',
      'Tu paciente sangra más de lo esperado tras el parto. Activas el código rojo: ayuda, dos vías gruesas, y exámenes de inmediato. Ahora hay que encontrar cuál de las cuatro T tienes delante.',
      ['', N('q', '¿Cómo está el útero al palpar?', 'Blando o duro',
        'La pregunta que ordena todo: ¿el útero está blando, o está bien contraído?',
        ['Blando, no se retrae', N('alert', 'Tono: atonía uterina', 'Setenta por ciento de los casos',
          'Un útero blando que no se retrae es atonía, la causa más frecuente.',
          ['', N('do', 'Masaje + oxitocina + ácido tranexámico', 'Escalera de tratamiento',
            'Masaje bimanual, oxitocina y ácido tranexámico de inmediato.',
            ['Persiste', N('do', 'Ergometrina o misoprostol', 'Según si es hipertensa',
              'Si persiste, ergometrina, salvo que sea hipertensa, donde usas misoprostol.',
              ['Persiste', N('refer', 'Balón de Bakri', 'Y si no cede, cirugía',
                'Si aun así sangra, balón de Bakri, y si no cede, cirugía o histerectomía.')])])])],
        ['Duro, contraído', N('q', '¿La placenta estaba completa?', 'Trauma o tejido',
          'Si el útero está duro y sigue sangrando, revisa si la placenta salió completa.',
          ['Sí, completa', N('do', 'Trauma: revisar el canal', 'Suturar desgarros',
            'Con placenta completa y útero duro, busca desgarros del canal y sutúralos.')],
          ['No, incompleta', N('do', 'Tejido: revisión de la cavidad', 'Manual o instrumental',
            'Con placenta incompleta, revisas la cavidad uterina para sacar los restos.')])])]),
  },
};
