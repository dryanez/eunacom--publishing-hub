// Clase 5.4 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neumologia.cjs (resp-24, en dataset_neumologia_bloque_5.cjs).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'resp-24',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Por qué el saturómetro miente y cuándo va la cámara hiperbárica',
      say: 'Bienvenidos a la última clase del bloque. Hoy vemos la intoxicación por monóxido de carbono, una de las intoxicaciones letales más frecuentes del invierno en Chile, por braseros y calefones defectuosos. El examen la pregunta casi siempre con la misma trampa: un paciente con cefalea y una saturación de noventa y nueve por ciento. Vamos a entender por qué ese número no sirve, cómo se confirma y cuándo se deriva a cámara hiperbárica.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Dos golpes al oxígeno',
      nodes: [
        { id: 'fu', col: 0, row: 1, k: 'cause', t: 'Combustión incompleta', s: 'Brasero, calefón, incendio' },
        { id: 'co', col: 1, row: 1, k: 'mech', t: 'Monóxido de carbono', s: 'Inodoro, incoloro, no irritante' },
        { id: 'hb', col: 2, row: 0, k: 'mech', t: 'Carboxihemoglobina', s: 'Afinidad 200–250 veces mayor que el O2' },
        { id: 'cur', col: 3, row: 0, k: 'effect', t: 'Curva a la izquierda', s: 'La Hb no suelta el O2 a los tejidos' },
        { id: 'mit', col: 2, row: 2, k: 'mech', t: 'Citocromo c oxidasa', s: 'Bloqueo de la respiración celular' },
        { id: 'lac', col: 3, row: 2, k: 'alert', t: 'Hipoxia celular', s: 'Acidosis láctica' },
      ],
      edges: [
        { from: 'fu', to: 'co' }, { from: 'co', to: 'hb' }, { from: 'hb', to: 'cur' },
        { from: 'co', to: 'mit' }, { from: 'mit', to: 'lac' }, { from: 'cur', to: 'lac' },
      ],
      steps: [
        { show: ['fu', 'co'], note: 'Un gas que no se nota',
          say: 'Partamos por el mecanismo. El monóxido de carbono se produce por la combustión incompleta: un brasero en una pieza cerrada, un calefón defectuoso en el baño, un incendio. Es inodoro, incoloro, insípido y no irritante. El paciente no se da cuenta de que lo está respirando.' },
        { show: ['hb'], note: 'Le gana al oxígeno',
          say: 'El primer golpe es sobre la hemoglobina. El monóxido se une a ella con una afinidad doscientas a doscientas cincuenta veces mayor que el oxígeno, y forma carboxihemoglobina. Esa hemoglobina ya no puede transportar oxígeno.' },
        { show: ['cur'], note: 'Y lo poco que lleva, no lo suelta',
          say: 'Además, desplaza la curva de disociación hacia la izquierda: la hemoglobina que sí lleva oxígeno se aferra a él y no lo entrega a los tejidos. Es un doble problema de transporte.' },
        { show: ['mit', 'lac'], note: 'Y la mitocondria tampoco lo usa',
          say: 'El segundo golpe es en la mitocondria. El monóxido bloquea el complejo cuatro de la cadena respiratoria, la citocromo c oxidasa. La célula no puede usar oxígeno aunque le llegue, y aparece la acidosis láctica. Por eso es una hipoxia celular, no una hipoxemia: y eso explica la trampa que viene.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'Cefalea en invierno, en un espacio cerrado',
      cards: [
        { title: 'Síntomas', tag: 'Lo más precoz', kind: 'criteria', items: [
          { t: 'Cefalea holocraneana pulsátil', d: 'El síntoma más precoz',
            say: 'Veamos la clínica. El síntoma más precoz es la cefalea holocraneana pulsátil. Súmale náuseas, vómitos, mareos y debilidad muscular.' },
          { t: 'Varios afectados a la vez', d: 'Misma casa, mismo brasero',
            say: 'Y la clave para sospecharla está en el contexto: invierno, un espacio cerrado con combustión, y muchas veces varias personas de la misma casa con los mismos síntomas. Una familia entera con cefalea es monóxido hasta demostrar lo contrario.' },
        ] },
        { title: 'Gravedad', tag: 'Neurológico y cardíaco', kind: 'alert', items: [
          { t: 'Síncope, convulsiones, coma', d: 'También ataxia y arritmias',
            say: 'En los casos graves aparece el compromiso neurológico y cardíaco: ataxia, síncope, convulsiones, coma y arritmias. El cerebro y el corazón son los que más sufren la hipoxia celular.' },
          { t: 'Rojo cereza: raro y tardío', d: 'Menos del 5%',
            say: 'Y ojo con la piel rojo cereza. Es el signo clásico de los libros, pero se ve en menos del cinco por ciento y es tardío. Si esperas verlo para sospechar, vas a llegar tarde.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'La trampa que más se pregunta',
      title: 'El saturómetro marca 99%',
      nodes: [
        { id: 'sos', col: 0, row: 1, k: 'start', t: 'Sospecha de CO', s: 'Cefalea + espacio cerrado' },
        { id: 'sat', col: 1, row: 0, k: 'trap', t: 'Oxímetro de pulso: 98–100%', s: 'Falsamente normal' },
        { id: 'por', col: 2, row: 0, k: 'mech', t: 'Solo dos longitudes de onda', s: 'No distingue COHb de oxihemoglobina' },
        { id: 'coox', col: 1, row: 2, k: 'good', t: 'Co-oximetría', s: 'COHb en gases arteriales o venosos' },
        { id: 'dx', col: 2, row: 2, k: 'alert', t: 'COHb elevada', s: '> 3–5% no fumador · > 10% fumador' },
      ],
      edges: [
        { from: 'sos', to: 'sat', label: 'no confiar' }, { from: 'sat', to: 'por', label: 'porque' },
        { from: 'sos', to: 'coox' }, { from: 'coox', to: 'dx' },
      ],
      steps: [
        { show: ['sos', 'sat'], note: 'Un número que tranquiliza y engaña',
          say: 'Ahora la trampa. Llega el paciente con cefalea desde una casa con brasero, le pones el saturómetro de dedo, y marca noventa y nueve por ciento. La tentación es tranquilizarse. No lo hagas.' },
        { show: ['por'], note: 'Confunde la COHb con oxígeno',
          say: 'El oxímetro de pulso estándar mide solo dos longitudes de onda de luz, y con eso no puede distinguir la oxihemoglobina de la carboxihemoglobina. Lee la carboxihemoglobina como si fuera hemoglobina llena de oxígeno, y marca una saturación falsamente normal, incluso con niveles letales.' },
        { show: ['coox'], note: 'El examen que confirma',
          say: 'Entonces, ¿cómo se confirma? Midiendo directamente la carboxihemoglobina en sangre, con co-oximetría, en gases arteriales o venosos. Ese es el examen de elección. Y fíjate que los gases convencionales tampoco sirven: la presión de oxígeno suele ser normal, porque el problema no es el oxígeno disuelto.' },
        { show: ['dx'], note: 'Cortes diagnósticos',
          say: 'Los niveles diagnósticos son una carboxihemoglobina sobre tres a cinco por ciento en el no fumador, o sobre diez por ciento en el fumador habitual, que ya parte con un nivel basal más alto.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Oxígeno al 100%: desplazar al monóxido',
      cards: [
        { title: 'Para todos', tag: 'De inmediato', kind: 'pharma', items: [
          { t: 'O2 100% con mascarilla con reservorio', d: '15 L/min, al menos 6 horas',
            say: 'El tratamiento inmediato, para todos los pacientes, es oxígeno al cien por ciento por mascarilla con bolsa de no reinhalación, con reservorio, a quince litros por minuto y sin interrupciones por al menos seis horas. No se espera el resultado de la co-oximetría para empezar.' },
          { t: 'No sirve la naricera', d: 'Hace falta FiO2 cercana al 100%',
            say: '¿Por qué con reservorio y no con naricera? Porque el oxígeno compite con el monóxido por la hemoglobina, y para ganar esa competencia necesitas la fracción inspirada más alta posible.' },
        ] },
        { title: 'Vida media de la COHb', tag: 'La cinética se pregunta', kind: 'key', items: [
          { t: 'Aire ambiental: 320 min', d: 'Unas 5,5 horas',
            say: 'Y la competencia se mide en vida media. Respirando aire ambiental, la carboxihemoglobina tarda trescientos veinte minutos en bajar a la mitad, unas cinco horas y media.' },
          { t: 'O2 100% normobárico: 80 min', d: 'En urgencias',
            say: 'Con oxígeno al cien por ciento en la urgencia, baja a ochenta minutos. Eso es lo que hace el tratamiento: acelerar la salida del monóxido.' },
          { t: 'Hiperbárico: 20–25 min', d: '2,5 a 3 atmósferas',
            say: 'Y en la cámara hiperbárica, a dos coma cinco a tres atmósferas, baja a veinte o veinticinco minutos. Pero la cámara no es para todos, como vemos ahora.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Oxígeno hiperbárico',
      title: '¿Cuándo va la cámara hiperbárica?',
      cards: [
        { title: 'Por el nivel', tag: 'Carboxihemoglobina', kind: 'criteria', items: [
          { t: 'COHb > 25%', d: 'En cualquier paciente',
            say: 'Las indicaciones de oxígeno hiperbárico son estrictas, y se preguntan. La primera es por el nivel: carboxihemoglobina sobre veinticinco por ciento, en cualquier paciente.' },
          { t: 'Embarazada con COHb > 15%', d: 'La Hb fetal concentra más CO',
            say: 'En la embarazada el corte es más bajo: sobre quince por ciento. La hemoglobina fetal concentra más monóxido que la materna, y el feto puede sufrir hipoxia grave con una madre que se ve relativamente bien.' },
        ] },
        { title: 'Por la clínica', tag: 'Aunque la COHb sea menor', kind: 'alert', items: [
          { t: 'Pérdida de conciencia o síncope', d: 'Coma o convulsiones',
            say: 'Y por la clínica, aunque el nivel sea menor: la pérdida de conciencia o el síncope, el coma o las convulsiones.' },
          { t: 'Déficit neurológico persistente', d: 'O focalidad',
            say: 'También el compromiso neurológico persistente o un déficit focal.' },
          { t: 'Isquemia miocárdica o pH < 7,15', d: 'Angina, troponinas, acidosis severa',
            say: 'Y la isquemia miocárdica, con angina o troponinas elevadas, o una acidosis metabólica severa y refractaria, con pH bajo siete coma quince. Fuera de estas indicaciones, el tratamiento es oxígeno normobárico.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol, desde la sospecha hasta la cámara.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que el examen quiere que olvides',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Cefalea + brasero, SatO2 99%', 'O2 100% y co-oximetría', 'Alta por saturación normal'],
          say: 'Repasemos las trampas. Cefalea con brasero y saturación de noventa y nueve: oxígeno al cien por ciento y co-oximetría. El error es dar el alta porque el saturómetro está normal.' },
        { cells: ['Confirmar la sospecha', 'Carboxihemoglobina', 'Gases convencionales o TAC de cerebro'],
          say: 'Para confirmar, carboxihemoglobina. Los gases convencionales suelen salir normales, y el TAC de cerebro no diagnostica la intoxicación.' },
        { cells: ['COHb 12%, sin síntomas graves', 'O2 100% normobárico', 'Cámara hiperbárica'],
          say: 'Carboxihemoglobina de doce por ciento, sin síntomas graves: oxígeno normobárico. Mandar a cámara a todos es un error.' },
        { cells: ['Embarazada con COHb 18%', 'Oxígeno hiperbárico', 'Tratar como adulto no embarazado'],
          say: 'Embarazada con dieciocho por ciento: cámara hiperbárica, porque su corte es quince. Aplicarle el corte de veinticinco es la trampa.' },
        { cells: ['Síncope durante la exposición', 'O2 100% ya + evaluar hiperbárico', 'Esperar a ver el nivel de COHb'],
          say: 'Y si hubo síncope o pérdida de conciencia, el oxígeno parte de inmediato, y hay indicación de hiperbárico aunque el nivel no llegue a veinticinco.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 29 años, embarazada de 26 semanas, es traída desde su casa donde tenía un brasero encendido en el dormitorio. Refiere cefalea intensa, náuseas y mareo. Consciente, sin focalidad neurológica. PA 118/72 mmHg, FC 96 lpm, SatO2 99% con oxímetro de pulso. Co-oximetría: COHb 17%.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Alta con paracetamol, dado que la saturación es normal' },
        { letter: 'B', text: 'O2 por naricera a 3 L/min y control de COHb en 24 horas' },
        { letter: 'C', text: 'O2 al 100% con mascarilla con reservorio y derivar a oxígeno hiperbárico' },
        { letter: 'D', text: 'O2 al 100% normobárico solamente, porque la COHb es menor de 25%' },
        { letter: 'E', text: 'TAC de cerebro sin contraste antes de iniciar oxígeno' },
      ],
      correct: 'C',
      explanation: 'Intoxicación por CO confirmada (COHb 17%) con saturación falsamente normal. En la embarazada el corte para oxígeno hiperbárico es COHb > 15%, porque la hemoglobina fetal concentra más CO. Se inicia O2 al 100% con reservorio de inmediato y se deriva a cámara hiperbárica.',
      say: {
        stem: 'Vamos con un caso. Mujer de veintinueve años, embarazada de veintiséis semanas, traída desde su casa, donde tenía un brasero encendido en el dormitorio. Tiene cefalea intensa, náuseas y mareo, está consciente y sin focalidad. El saturómetro marca noventa y nueve por ciento, y la co-oximetría muestra una carboxihemoglobina de diecisiete por ciento.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las alternativas: alta con paracetamol, naricera y control en veinticuatro horas, oxígeno al cien por ciento con reservorio y derivar a cámara hiperbárica, oxígeno normobárico solamente porque no llega a veinticinco, o TAC de cerebro antes del oxígeno. Piénsalo.',
        answer: 'Es la C. La intoxicación está confirmada, y el saturómetro normal no significa nada. El detalle que decide es el embarazo: su corte para cámara hiperbárica es quince por ciento, no veinticinco, porque la hemoglobina fetal concentra más monóxido. La D es la trampa: sería correcta en un adulto no embarazado, pero aquí deja al feto sin la protección que necesita.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 10',
      stem: 'Un paciente de 27 años presenta cefalea, malestar general, disnea y sensación de opresión precordial, 3 horas después de haber estado expuesto a humo durante un incendio en su casa. Al examen físico registra frecuencia cardíaca 100 lpm, presión arterial 130/85 mmHg, frecuencia respiratoria 35 rpm y saturación de oxígeno de 96%. No presenta cianosis ni uso de musculatura accesoria, y su examen cardiopulmonar es normal.',
      question: '¿Qué examen es el más adecuado para confirmar la sospecha diagnóstica?',
      options: [
        { letter: 'A', text: 'Radiografía de tórax' },
        { letter: 'B', text: 'TAC de tórax' },
        { letter: 'C', text: 'Niveles de carboxihemoglobina' },
        { letter: 'D', text: 'Gases en sangre arterial' },
        { letter: 'E', text: 'Monitorización transcutánea de niveles de anhídrido carbónico' },
      ],
      correct: 'C',
      explanation: 'Exposición a humo con cefalea, disnea y opresión precordial y saturación normal: sospecha de intoxicación por CO. El oxímetro de pulso marca falsamente normal y los gases convencionales suelen ser normales. El examen de elección es la carboxihemoglobina por co-oximetría.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Paciente de veintisiete años con cefalea, malestar, disnea y opresión precordial, tres horas después de estar expuesto al humo de un incendio en su casa. Frecuencia respiratoria de treinta y cinco, saturación de noventa y seis, sin cianosis, y examen cardiopulmonar normal.',
        question: '¿Qué examen es el más adecuado para confirmar la sospecha diagnóstica?',
        options: 'Las opciones: radiografía de tórax, TAC de tórax, carboxihemoglobina, gases arteriales, o monitoreo transcutáneo de CO dos. Piénsalo.',
        answer: 'Es la C. Humo de incendio más cefalea, con una saturación normal: la sospecha es monóxido, y se confirma con carboxihemoglobina. Los gases arteriales son el distractor más tentador, porque suenan completos, pero los convencionales miden la presión de oxígeno, que suele salir normal. Lo que necesitas es la co-oximetría. Y la opresión precordial te obliga además a buscar isquemia, que sería indicación de cámara.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 41',
      stem: 'Una paciente de 25 años fue encontrada inconsciente por su pareja en el baño de su casa, por lo que es llevada de inmediato al servicio de urgencias. Al examen físico, presenta escala de Glasgow: 15 puntos, tiene presión arterial: 110/60 mmHg, frecuencia cardíaca: 115 lpm, frecuencia respiratoria: 12 rpm y saturación de oxígeno: 98%. Su examen cardiopulmonar no muestra alteraciones. Se solicitan exámenes, que muestran glicemia: 98 mg/dl y carboxihemoglobina: 20%.',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Administrar oxígeno por naricera de alto flujo' },
        { letter: 'B', text: 'Solicitar una TAC de cerebro' },
        { letter: 'C', text: 'Realizar terapia hiperbárica' },
        { letter: 'D', text: 'Administrar broncodilatadores por vía inhalada' },
        { letter: 'E', text: 'Administrar oxígeno por mascarilla de no recirculación' },
      ],
      correct: 'E',
      explanation: 'Intoxicación por CO confirmada (COHb 20%) con saturación falsamente normal. La conducta inicial en todo paciente es O2 al 100% por mascarilla de no recirculación, que acelera la eliminación del CO. La pérdida de conciencia agrega indicación de oxígeno hiperbárico, pero eso viene después del oxígeno inmediato.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil veinticuatro. Paciente de veinticinco años encontrada inconsciente en el baño de su casa. En la urgencia ya está con Glasgow quince, frecuencia cardíaca de ciento quince y saturación de noventa y ocho. La glicemia es normal, y la carboxihemoglobina es de veinte por ciento.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: naricera de alto flujo, TAC de cerebro, terapia hiperbárica, broncodilatadores, u oxígeno por mascarilla de no recirculación. Piénsalo.',
        answer: 'Es la E. Fíjate en la palabra inicial. Lo primero, en todo paciente con monóxido, es oxígeno al cien por ciento por mascarilla de no recirculación. La hiperbárica es el distractor tentador, y no por error: la pérdida de conciencia es una indicación de cámara. Pero la cámara viene después; lo que no puede esperar ni un minuto es el oxígeno. La naricera se queda corta.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2024 · Pregunta 144',
      stem: 'Paciente encontrada en el baño, tenía carboxiHb de 12% tto de elección:',
      question: '¿Cuál es el tratamiento de elección?',
      options: [
        { letter: 'A', text: 'O2 mascarilla' },
        { letter: 'B', text: 'Cámara hiperbarica' },
        { letter: 'C', text: 'Ninguna de las anteriores es correcta' },
        { letter: 'D', text: 'Todas las anteriores son correctas' },
        { letter: 'E', text: 'No se dispone de información suficiente' },
      ],
      correct: 'A',
      explanation: 'COHb 12%, bajo el corte de 25% y sin otra indicación descrita: el tratamiento es oxígeno al 100% por mascarilla con reservorio (normobárico). La cámara hiperbárica se reserva para sus indicaciones estrictas.',
      say: {
        stem: 'La última, del EUNACOM de diciembre de dos mil veinticuatro, con un enunciado muy corto. Paciente encontrada en el baño, con una carboxihemoglobina de doce por ciento.',
        question: '¿Cuál es el tratamiento de elección?',
        options: 'Las opciones: oxígeno por mascarilla, cámara hiperbárica, ninguna, todas, o información insuficiente. Piénsalo.',
        answer: 'Es la A. Doce por ciento está lejos del corte de veinticinco, y el enunciado no describe pérdida de conciencia, embarazo ni isquemia. Entonces el tratamiento es oxígeno al cien por ciento por mascarilla. La cámara es el distractor para quien cree que todo monóxido va a cámara hiperbárica.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'No confiar en el dedo', kind: 'alert', items: [
          { t: 'SatO2 normal no descarta CO', d: 'El oxímetro marca falsamente 100%',
            say: 'Cerremos con las reglas de oro. La saturación normal no descarta la intoxicación: el oxímetro de pulso confunde la carboxihemoglobina con oxígeno.' },
          { t: 'Confirma la carboxihemoglobina', d: 'Co-oximetría',
            say: 'Lo que confirma es la carboxihemoglobina por co-oximetría, no los gases convencionales ni el TAC.' },
        ] },
        { title: 'Tratamiento', tag: 'Para todos', kind: 'pharma', items: [
          { t: 'O2 100% con reservorio, ≥ 6 h', d: 'Vida media: 320 → 80 min',
            say: 'El tratamiento para todos es oxígeno al cien por ciento con reservorio por al menos seis horas, que baja la vida media de trescientos veinte a ochenta minutos.' },
        ] },
        { title: 'Cámara hiperbárica', tag: 'Indicaciones estrictas', kind: 'criteria', items: [
          { t: 'COHb > 25% o embarazada > 15%', d: 'Síncope, coma, convulsiones, isquemia',
            say: 'Y la cámara hiperbárica, solo con carboxihemoglobina sobre veinticinco, embarazada sobre quince, pérdida de conciencia, compromiso neurológico, isquemia miocárdica o acidosis severa. Si te llevas una sola idea de hoy: frente a cefalea en invierno con brasero, el saturómetro miente; das oxígeno al cien por ciento y mides la carboxihemoglobina. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Monóxido de carbono: de la sospecha a la cámara',
    root: N('start', 'Cefalea + fuente de combustión', 'Brasero, calefón, incendio',
      'Paciente con cefalea, náuseas o mareo, que estuvo en un espacio cerrado con un brasero, un calefón o un incendio.',
      ['', N('do', 'O2 100% con reservorio + co-oximetría', 'Ignorar la SatO2 del oxímetro',
        'Aunque el saturómetro marque noventa y nueve, se inicia oxígeno al cien por ciento con reservorio y se pide carboxihemoglobina por co-oximetría.',
        ['', N('q', '¿COHb elevada?', '> 3–5% no fumador · > 10% fumador',
          '¿La carboxihemoglobina está elevada? Sobre tres a cinco en el no fumador, o sobre diez en el fumador.',
          ['NO', N('ok', 'Buscar otra causa', 'De la cefalea o el compromiso',
            'Si no está elevada, busca otra causa para los síntomas.')],
          ['SÍ', N('q', '¿Indicación de hiperbárico?', 'COHb > 25%, embarazo > 15%, síncope, coma, isquemia',
            'Confirmada la intoxicación, ¿tiene alguna indicación de cámara? Carboxihemoglobina sobre veinticinco, embarazada sobre quince, pérdida de conciencia, coma, convulsiones, déficit neurológico, isquemia o acidosis severa.',
            ['NO', N('do', 'O2 100% normobárico ≥ 6 h', 'Vida media 80 min',
              'Si no tiene ninguna, sigue con oxígeno normobárico al cien por ciento por al menos seis horas.')],
            ['SÍ', N('refer', 'Oxígeno hiperbárico', 'Centro de medicina hiperbárica',
              'Si tiene alguna, se deriva a oxígeno hiperbárico, sin suspender el oxígeno mientras tanto.')])])])]),
  },
};
