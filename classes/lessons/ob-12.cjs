// Clase 19.12 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_obstetricia_bloque_3.cjs (ob-12).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ob-12',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Un embarazo que crece de más, y una vigilancia que no puedes olvidar',
      say: 'Bienvenida. Hoy vemos la enfermedad trofoblástica gestacional: la mola hidatiforme completa y la parcial, y cómo saber si evolucionó a una neoplasia trofoblástica. Es un tema que se reconoce por un patrón muy característico, y que exige algo que muchos olvidan: seguir a la paciente después de tratarla, porque ahí es donde se juega si detectas a tiempo un cáncer.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Una fecundación que sale mal',
      nodes: [
        { id: 'vac', col: 0, row: 0, k: 'cause', t: 'Óvulo vacío', s: 'Sin material genético materno' },
        { id: 'esp', col: 0, row: 2, k: 'cause', t: 'Espermatozoide lo fecunda', s: 'Y se duplica' },
        { id: 'com', col: 1, row: 1, k: 'mech', t: 'Todo el genoma es paterno', s: 'Cuarenta y seis, XX' },
        { id: 'sin', col: 2, row: 1, k: 'effect', t: 'Nunca hay embrión', s: 'Mola completa' },
        { id: 'nor', col: 0, row: 4, k: 'cause', t: 'Óvulo normal', s: 'Fecundado por dos espermatozoides' },
        { id: 'tri', col: 1, row: 4, k: 'mech', t: 'Triploide', s: 'Sesenta y nueve cromosomas' },
        { id: 'par', col: 2, row: 4, k: 'effect', t: 'Sí hay embrión', s: 'Pero malformado, no viable: mola parcial' },
      ],
      edges: [
        { from: 'vac', to: 'com' }, { from: 'esp', to: 'com', label: 'se duplica' }, { from: 'com', to: 'sin' },
        { from: 'nor', to: 'tri' }, { from: 'tri', to: 'par' },
      ],
      steps: [
        { show: ['vac'], note: 'Todo parte de un óvulo sin núcleo',
          say: 'Empecemos por el mecanismo, porque de él se deduce todo lo demás. La mola completa nace de un óvulo vacío, sin ningún material genético de la madre.' },
        { show: ['esp'], note: 'Un espermatozoide que se duplica',
          say: 'Ese óvulo vacío es fecundado por un espermatozoide, que luego se duplica.' },
        { show: ['com'], note: 'Todo el material genético es del padre',
          say: 'El resultado es un embrión con todo su material genético de origen paterno, generalmente cuarenta y seis, XX.' },
        { show: ['sin'], note: 'Nunca hay tejido fetal',
          say: 'Y como nunca hubo aporte materno, nunca se forma ningún embrión ni tejido fetal. Todas las vellosidades se hinchan por igual: esa es la mola completa.' },
        { show: ['nor'], note: 'La mola parcial parte distinto',
          say: 'La mola parcial es otra historia. Aquí el óvulo sí es normal, pero lo fecundan dos espermatozoides a la vez.' },
        { show: ['tri'], note: 'Sesenta y nueve cromosomas, no cuarenta y seis',
          say: 'El resultado es triploide, con sesenta y nueve cromosomas en vez de cuarenta y seis.' },
        { show: ['par'], note: 'Sí hay embrión, pero no llega a nacer',
          say: 'Y como sí hay aporte genético materno, sí se forma un embrión, aunque con malformaciones múltiples que no son compatibles con la vida. Guarda esta diferencia, porque es la base de toda la clase: completa, sin embrión nunca; parcial, con embrión, pero que no va a llegar a término.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'Cómo llega esta paciente a tu consulta',
      cards: [
        { title: 'Presentación clásica', tag: 'Mola completa', kind: 'key', items: [
          { t: 'Metrorragia indolora', d: 'Y útero mucho más grande de lo esperado',
            say: 'La mola completa llega con metrorragia indolora, y algo que llama la atención al examen: el útero es mucho más grande de lo que corresponde a las semanas de embarazo.' },
          { t: 'Náuseas y vómitos intensos', d: 'Por la beta-hCG tan elevada',
            say: 'Y como la beta-hCG está altísima, arrastra síntomas por su similitud con otras hormonas: náuseas y vómitos muy intensos, a veces hipertiroidismo, y quistes en los ovarios por el hiperestímulo.' },
        ] },
        { title: 'Ojo con esto', tag: 'Casi siempre es mola', kind: 'alert', items: [
          { t: 'Preeclampsia antes de las veinte semanas', d: 'En el examen, piensa en mola',
            say: 'Y aquí tienes un dato que se pregunta directo: si una paciente hace preeclampsia antes de las veinte semanas, en el examen esa combinación casi siempre apunta a una mola hidatiforme.' },
        ] },
        { title: 'Ecografía', tag: 'El patrón que la confirma', kind: 'criteria', items: [
          { t: 'Tormenta de nieve', d: 'Sin ningún saco ni embrión',
            say: 'La ecografía muestra el patrón que le da nombre a la clase: la imagen en tormenta de nieve, con múltiples quistes pequeños ocupando la cavidad, y sin ningún saco gestacional ni embrión.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento primario',
      title: 'La evacuación no se discute',
      cards: [
        { title: 'Aspiración', tag: 'Sobre el legrado', kind: 'pharma', items: [
          { t: 'Aspiración manual endouterina', d: 'Con oxitocina en la misma infusión',
            say: 'El tratamiento inicial es la evacuación con aspiración manual endouterina, junto con oxitocina en la misma infusión, para ayudar a que el útero se contraiga.' },
          { t: 'Todo el tejido se biopsia', d: 'Confirma si es completa o parcial',
            say: 'Y todo el tejido que sacas se manda a biopsia, sin excepción, porque ahí se confirma si es completa o parcial.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Seguimiento',
      title: 'Lo que no puedes olvidar después de evacuar',
      nodes: [
        { id: 'eva', col: 0, row: 1, k: 'start', t: 'Ya evacuaste la mola', s: 'El trabajo no termina aquí' },
        { id: 'sem', col: 1, row: 0, k: 'mech', t: 'Beta-hCG semanal', s: 'Hasta tres valores normales seguidos' },
        { id: 'mes', col: 2, row: 0, k: 'mech', t: 'Luego mensual', s: 'Por seis meses' },
        { id: 'aco', col: 1, row: 2, k: 'good', t: 'Anticoncepción obligatoria', s: 'Durante todo el seguimiento' },
        { id: 'sub', col: 3, row: 1, k: 'trap', t: 'Si se estanca o sube', s: 'Es una neoplasia trofoblástica' },
      ],
      edges: [
        { from: 'eva', to: 'sem' }, { from: 'sem', to: 'mes' },
        { from: 'eva', to: 'aco' },
        { from: 'sem', to: 'sub', label: 'si falla' }, { from: 'mes', to: 'sub', label: 'si falla' },
      ],
      steps: [
        { show: ['eva'], note: 'Un error frecuente: dar el alta y no citar más',
          say: 'Aquí está la parte que más se olvida en la práctica, y que más se pregunta en el examen. Evacuar la mola no es el final del tratamiento, es la mitad.' },
        { show: ['sem'], note: 'Semanal, hasta tres seguidas en rango normal',
          say: 'Mides la beta-hCG toda las semanas, hasta tener tres valores seguidos ya en rango normal.' },
        { show: ['mes'], note: 'Después, mensual por medio año',
          say: 'Y ahí no terminas: sigues con control mensual, durante seis meses más, para confirmar que no vuelve a subir.' },
        { show: ['aco'], note: 'Por qué es obligatoria, no una sugerencia',
          say: 'Y mientras dura todo este seguimiento, la anticoncepción es obligatoria. Si la paciente se embaraza de nuevo, su beta-hCG sube por el embarazo normal, y tú ya no puedes distinguir eso de una recaída.' },
        { show: ['sub'], note: 'Ese estancamiento es la señal de alarma',
          say: 'Y si en cualquier momento la beta-hCG se estanca o empieza a subir en vez de bajar, eso ya no es normal: es una neoplasia trofoblástica gestacional, y necesita quimioterapia.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos el diagnóstico y el seguimiento en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Completa versus parcial, y la señal de neoplasia',
      head: ['Característica', 'Mola completa', 'Mola parcial'],
      rows: [
        { cells: ['Embrión', 'Nunca hay', 'Sí hay, pero malformado'],
          say: 'Repasemos en la tabla. Embrión: en la completa nunca hay; en la parcial sí hay, aunque malformado.' },
        { cells: ['Beta-hCG', 'Muy elevada, sobre cien mil', 'Normal o algo elevada'],
          say: 'La beta-hCG: en la completa está muy elevada, por sobre cien mil; en la parcial, normal o apenas elevada.' },
        { cells: ['Riesgo de neoplasia', 'Quince a veinte por ciento', 'Uno a cinco por ciento'],
          say: 'Y el riesgo de que progrese a neoplasia: mucho mayor en la completa, de quince a veinte por ciento, contra uno a cinco en la parcial.' },
        { cells: ['Beta-hCG que se estanca o sube en el seguimiento', 'Neoplasia trofoblástica', 'Observar y esperar a que baje sola'],
          say: 'Y la trampa más clásica: si la beta-hCG se estanca o sube durante el seguimiento, es neoplasia trofoblástica. El error es pensar que todavía puede bajar sola y seguir observando.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 22 años, con doce semanas por fecha de última regla, consulta por metrorragia y vómitos intensos. El útero se palpa como de dieciocho semanas. La beta-hCG resulta 190.000 unidades por litro, y la ecografía transvaginal muestra la cavidad ocupada por múltiples quistes pequeños, sin saco gestacional ni embrión.',
      question: '¿Cuál es el diagnóstico y la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Mola hidatiforme completa; evacuación con aspiración manual endouterina' },
        { letter: 'B', text: 'Aborto retenido; misoprostol vaginal' },
        { letter: 'C', text: 'Embarazo gemelar; control ecográfico en 4 semanas' },
        { letter: 'D', text: 'Mola parcial; quimioterapia profiláctica de inmediato' },
        { letter: 'E', text: 'Embarazo ectópico; metotrexato intramuscular' },
      ],
      correct: 'A',
      explanation: 'Útero mucho mayor a la edad gestacional, beta-hCG extremadamente elevada y el patrón ecográfico en tormenta de nieve, sin embrión, son diagnósticos de mola completa. El tratamiento inicial es la evacuación con aspiración manual endouterina, con estudio histopatológico de todo el material.',
      say: {
        stem: 'Vamos con un caso. Mujer de veintidós años, con doce semanas por fecha de última regla, consulta por metrorragia y vómitos intensos. El útero se palpa como de dieciocho semanas. La beta-hCG es ciento noventa mil, y la ecografía muestra la cavidad ocupada por múltiples quistes pequeños, sin saco gestacional ni embrión.',
        question: '¿Cuál es el diagnóstico y la conducta inicial más adecuada?',
        options: 'Tus opciones: mola completa con aspiración manual, aborto retenido con misoprostol, embarazo gemelar con control en cuatro semanas, mola parcial con quimioterapia de inmediato, o embarazo ectópico con metotrexato. Piénsalo.',
        answer: 'Es la A. El útero mucho más grande de lo esperado, la beta-hCG estratosférica y la tormenta de nieve sin ningún embrión, son la firma de la mola completa. Y el tratamiento inicial siempre es evacuar, no dar quimioterapia de entrada: la quimioterapia se reserva para cuando el seguimiento demuestra que se convirtió en una neoplasia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 82',
      stem: 'Paciente de 25 años acude por metrorragia abundante de 2 días, con atraso menstrual de 4 semanas, dudoso por reglas irregulares. La palpación uterina muestra un útero aumentado de tamaño como para un embarazo de 12 semanas. La beta-hCG resulta 200.000 unidades por litro, y la ecografía transvaginal muestra imagen en tormenta de nieve.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Aborto en evolución' },
        { letter: 'B', text: 'Embarazo ectópico roto' },
        { letter: 'C', text: 'Mola hidatiforme' },
        { letter: 'D', text: 'Metrorragia disfuncional' },
        { letter: 'E', text: 'Tumor del sitio de inserción placentaria' },
      ],
      correct: 'C',
      explanation: 'La imagen en tormenta de nieve junto con la beta-hCG muy elevada y el útero mayor a la edad gestacional confirman la mola hidatiforme.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Paciente de veinticinco años, con metrorragia abundante de dos días y atraso menstrual de cuatro semanas, dudoso por reglas irregulares. El útero se palpa como de doce semanas. La beta-hCG es doscientas mil, y la ecografía muestra la imagen en tormenta de nieve.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: aborto en evolución, embarazo ectópico roto, mola hidatiforme, metrorragia disfuncional, o tumor del sitio de inserción placentaria. Piénsalo.',
        answer: 'Es la C, mola hidatiforme. La imagen en tormenta de nieve ya es prácticamente diagnóstica, y se suma la beta-hCG muy elevada y el útero mucho más grande de lo que marca el atraso menstrual. Nada de esto encaja con un aborto ni con un ectópico.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 174',
      stem: 'Mujer de 30 años, cursando un embarazo inicial, presenta un aborto espontáneo, manejado con legrado, sin complicaciones. Se controla dos semanas después y la biopsia es informada como mola hidatiforme.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Indicar anticonceptivos orales por 12 meses' },
        { letter: 'B', text: 'Controlar con beta-hCG seriada' },
        { letter: 'C', text: 'Controlar con ecografía transvaginal en 2 semanas' },
        { letter: 'D', text: 'Quimioterapia profiláctica' },
        { letter: 'E', text: 'Realizar histerectomía' },
      ],
      correct: 'B',
      explanation: 'El hallazgo de mola en la biopsia obliga al seguimiento hormonal seriado para detectar precozmente una neoplasia trofoblástica, junto con anticoncepción durante todo el seguimiento.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil dieciocho. Mujer de treinta años, con un aborto espontáneo manejado con legrado, sin complicaciones. Se controla dos semanas después y la biopsia informa mola hidatiforme.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: anticonceptivos orales por doce meses, control con beta-hCG seriada, control con ecografía en dos semanas, quimioterapia profiláctica, o histerectomía. Piénsalo.',
        answer: 'Es la B. Lo esencial, apenas te llega ese resultado de biopsia, es partir el seguimiento hormonal seriado, porque ahí es donde vas a pescar a tiempo una neoplasia trofoblástica. La anticoncepción también va, pero acompañando ese seguimiento, no reemplazándolo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 138',
      stem: 'Mujer de 25 años presenta un aborto espontáneo hace 2 meses, que no requirió legrado. Actualmente presenta metrorragia de 7 días, que en la especuloscopía sale por el orificio cervical externo. Su beta-hCG resulta 135.000 unidades por litro. La ecografía transvaginal muestra útero aumentado de tamaño, con contenido uterino irregular y múltiples vesículas.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar metotrexato' },
        { letter: 'B', text: 'Esperar evolución espontánea' },
        { letter: 'C', text: 'Realizar legrado' },
        { letter: 'D', text: 'Realizar resonancia magnética de pelvis' },
        { letter: 'E', text: 'Realizar histerectomía' },
      ],
      correct: 'E',
      explanation: 'Una mola que persiste sin tratamiento durante dos meses, con beta-hCG muy elevada y hallazgos molares francos, corresponde ya a una neoplasia trofoblástica establecida, que se trata con histerectomía y quimioterapia posterior.',
      say: {
        stem: 'Y una última pregunta real, del EUNACOM de julio de dos mil diecisiete. Mujer de veinticinco años con un aborto espontáneo hace dos meses, que nunca se legró. Ahora tiene metrorragia de siete días, y la beta-hCG resulta ciento treinta y cinco mil. La ecografía muestra el útero grande, con contenido irregular y múltiples vesículas.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: metotrexato, esperar evolución espontánea, legrado, resonancia de pelvis, o histerectomía. Piénsalo.',
        answer: 'Es la E. Fíjate en el tiempo: dos meses de una mola que nunca se trató, con la beta-hCG todavía altísima, ya no es una mola simple que evacúas y sigues. Es una neoplasia trofoblástica ya establecida, y por eso el manejo salta directo a la histerectomía, con quimioterapia después. Este caso te muestra lo que pasa exactamente cuando no haces el seguimiento que vimos hoy.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'El patrón que la confirma', kind: 'key', items: [
          { t: 'Tormenta de nieve, sin embrión', d: 'Beta-hCG muy elevada',
            say: 'Cerremos con las reglas de oro. La mola se reconoce por la tormenta de nieve en la ecografía, sin ningún embrión, y una beta-hCG muy elevada.' },
        ] },
        { title: 'Tratamiento', tag: 'Evacuar primero', kind: 'pharma', items: [
          { t: 'Aspiración manual endouterina', d: 'Con biopsia de todo el material',
            say: 'El tratamiento inicial es siempre evacuar con aspiración manual, y biopsiar todo lo que sale.' },
        ] },
        { title: 'Seguimiento', tag: 'Lo que no puedes saltarte', kind: 'alert', items: [
          { t: 'Beta-hCG semanal y luego mensual', d: 'Con anticoncepción obligatoria',
            say: 'Y el seguimiento con beta-hCG, semanal y luego mensual, con anticoncepción durante todo ese tiempo, no es opcional. Si te llevas una sola idea de hoy: evacuar la mola es solo la mitad del tratamiento; la otra mitad es no dejar de seguirla. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Enfermedad trofoblástica gestacional: diagnóstico y seguimiento',
    root: N('start', 'Metrorragia con útero mayor a lo esperado', 'Sospecha de mola',
      'Paciente con metrorragia del primer trimestre y un útero que se palpa más grande de lo que corresponde a sus semanas. Pide beta-hCG y ecografía transvaginal.',
      ['', N('q', '¿La ecografía muestra tormenta de nieve, sin embrión?', 'El patrón que confirma la mola completa',
        '¿Ves quistes pequeños ocupando la cavidad, sin ningún saco ni embrión?',
        ['SÍ', N('do', 'Mola completa: aspiración manual endouterina', 'Con biopsia de todo el material',
          'Evacúas con aspiración manual y oxitocina, y mandas todo el tejido a biopsia. Pero esto es solo la mitad del tratamiento.',
          ['', N('q', '¿La beta-hCG baja como corresponde?', 'Semanal, luego mensual',
            'Sigues la beta-hCG semanal hasta tres valores normales, y luego mensual por seis meses, con anticoncepción obligatoria durante todo ese tiempo.',
            ['SÍ, baja y se normaliza', N('ok', 'Remisión completa', 'Termina el seguimiento a los seis meses',
              'La beta-hCG llega a valores indetectables y se mantiene así: es una remisión completa.')],
            ['NO, se estanca o sube', N('alert', 'Neoplasia trofoblástica gestacional', 'Etapificar y dar quimioterapia',
              'Estudias con imágenes, calculas el score de riesgo, y tratas con metotrexato en bajo riesgo, o poliquimioterapia en alto riesgo.')])])],
        ['NO, hay embrión malformado', N('do', 'Mola parcial: aspiración manual endouterina', 'Con biopsia de todo el material',
          'Igual se evacúa con aspiración manual; el riesgo de progresar a neoplasia es mucho menor que en la completa, pero el seguimiento es el mismo.',
          ['', N('q', '¿La beta-hCG baja como corresponde?', 'Semanal, luego mensual',
            'Mismo esquema de seguimiento: semanal hasta tres valores normales, y luego mensual por seis meses, con anticoncepción.',
            ['SÍ, baja y se normaliza', N('ok', 'Remisión completa', 'Termina el seguimiento a los seis meses',
              'La beta-hCG llega a valores indetectables y se mantiene así: es una remisión completa.')],
            ['NO, se estanca o sube', N('alert', 'Neoplasia trofoblástica gestacional', 'Etapificar y dar quimioterapia',
              'Estudias con imágenes, calculas el score de riesgo, y tratas con metotrexato en bajo riesgo, o poliquimioterapia en alto riesgo.')])])])]),
  },
};
