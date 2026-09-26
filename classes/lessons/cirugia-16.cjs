// Clase 11.16 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_cirugia.cjs (cir-16).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-16',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Las cinco W que ordenan la fiebre según el día postoperatorio',
      say: 'Bienvenido. Ya vimos evaluación preoperatoria y anestesia, y hoy damos el primer paso después de la cirugía: la fiebre postoperatoria. Es de las preguntas más repetidas del examen, y tiene un truco simple: casi siempre se responde con el día en que aparece la fiebre, más que con exámenes complicados. Vamos a ordenar eso con las cinco W, una regla mnemotécnica en inglés que te va a servir toda la vida.',
    },

    {
      type: 'flow',
      kicker: 'Cronología',
      title: '¿Qué día apareció la fiebre?',
      nodes: [
        { id: 'ini', col: 0, row: 2, k: 'start', t: 'Paciente operado, con fiebre', s: '¿Qué día es hoy?' },
        { id: 'd1', col: 1, row: 0, k: 'risk', t: 'Día 1 a 2', s: 'Wind' },
        { id: 'd3', col: 1, row: 1, k: 'risk', t: 'Día 3', s: 'Water' },
        { id: 'd5', col: 1, row: 2, k: 'risk', t: 'Día 5 a 7', s: 'Wound' },
        { id: 'd7', col: 1, row: 3, k: 'risk', t: 'Día 7 a 10', s: 'Walking' },
        { id: 'dm', col: 1, row: 4, k: 'risk', t: 'Día 7 en adelante', s: 'Wonder drugs' },
        { id: 'w1', col: 2, row: 0, k: 'effect', t: 'Atelectasia pulmonar', s: 'La causa número uno' },
        { id: 'w2', col: 2, row: 1, k: 'effect', t: 'Infección urinaria', s: 'Por la sonda Foley' },
        { id: 'w3', col: 2, row: 2, k: 'effect', t: 'Infección de la herida', s: 'El sitio quirúrgico' },
        { id: 'w4', col: 2, row: 3, k: 'alert', t: 'Trombosis venosa profunda', s: 'O tromboembolismo pulmonar' },
        { id: 'w5', col: 2, row: 4, k: 'alert', t: 'Fiebre por fármacos', s: 'Diagnóstico de exclusión' },
      ],
      edges: [
        { from: 'ini', to: 'd1' }, { from: 'ini', to: 'd3' }, { from: 'ini', to: 'd5' }, { from: 'ini', to: 'd7' }, { from: 'ini', to: 'dm' },
        { from: 'd1', to: 'w1' }, { from: 'd3', to: 'w2' }, { from: 'd5', to: 'w3' }, { from: 'd7', to: 'w4' }, { from: 'dm', to: 'w5' },
      ],
      steps: [
        { show: ['ini'], note: 'El día manda más que los exámenes',
          say: 'Fíjate en algo antes de partir: frente a un paciente operado con fiebre, la primera pregunta que te tienes que hacer no es qué examen pedir, sino qué día postoperatorio es. Eso ya te acerca muchísimo a la respuesta.' },
        { show: ['d1', 'w1'], note: 'Wind: viento, o sea pulmón',
          say: 'En el día uno y dos, la letra es Wind, viento, y apunta al pulmón. La causa más frecuente de toda la fiebre postoperatoria es la atelectasia pulmonar. Guarda ese dato, porque el examen vuelve a él una y otra vez.' },
        { show: ['d3', 'w2'], note: 'Water: agua, la vía urinaria',
          say: 'Al tercer día, la letra es Water, agua, y piensas en la vía urinaria. Es la infección asociada a la sonda vesical.' },
        { show: ['d5', 'w3'], note: 'Wound: la herida operatoria',
          say: 'Entre el día cinco y el día siete, Wound, herida: ahora el foco es la infección del sitio quirúrgico.' },
        { show: ['d7', 'w4'], note: 'Walking: el paciente empieza a caminar',
          say: 'Hacia el día siete a diez, Walking, caminar, porque coincide con cuando el paciente empieza a moverse más: piensas en trombosis venosa profunda, y su complicación temida, el tromboembolismo pulmonar.' },
        { show: ['dm', 'w5'], note: 'Wonder drugs: la última en pensarse',
          say: 'Y de ahí en adelante, Wonder drugs, fármacos maravillosos, con ironía: es la fiebre por medicamentos. Es un diagnóstico de exclusión, así que la piensas al final, no al principio.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Wind',
      title: 'Atelectasia: la causa número uno',
      cards: [
        { title: 'Cómo se presenta', tag: 'Día uno y dos', kind: 'key', items: [
          { t: 'Fiebre moderada y taquipnea', d: 'Con murmullo vesicular disminuido',
            say: 'Empecemos por la atelectasia, porque es la que más se pregunta. Aparece con fiebre moderada, taquipnea, y murmullo vesicular disminuido, con crepitaciones en las bases.' },
          { t: 'Herida limpia', d: 'Sin eritema ni secreción',
            say: 'Y algo clave para diferenciarla: la herida está limpia, sin eritema ni secreción. El problema está en el pulmón, no en la piel.' },
        ] },
        { title: 'Por qué se produce', tag: 'Mecanismo', kind: 'normal', items: [
          { t: 'Dolor y anestesia', d: 'Hacen que respire poco profundo',
            say: 'El mecanismo explica todo: el dolor de la herida y los efectos de la anestesia hacen que el paciente respire poco profundo, y los alvéolos de las bases se colapsan.' },
        ] },
        { title: 'Tratamiento', tag: 'Nunca antibióticos', kind: 'alert', items: [
          { t: 'Kinesiterapia respiratoria', d: 'Espirometría incentivada y buena analgesia',
            say: 'El tratamiento es kinesiterapia respiratoria, espirometría incentivada, y sobre todo, buena analgesia, porque un paciente sin dolor respira profundo.' },
          { t: 'Deambulación precoz', d: 'Sacarlo de la cama ayuda',
            say: 'Y deambulación precoz. Y fíjate en la trampa clásica: la atelectasia no necesita antibióticos. Si ves esa opción en el examen, es el distractor.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Water y Wound',
      title: 'Vía urinaria y herida operatoria',
      cards: [
        { title: 'Water: infección urinaria', tag: 'Día tres', kind: 'normal', items: [
          { t: 'Ligada a la sonda Foley', d: 'Cuanto más tiempo, más riesgo',
            say: 'Al tercer día piensa en la vía urinaria. Casi siempre está ligada a la sonda Foley: cuanto más tiempo la dejas puesta, más riesgo de infección.' },
          { t: 'Retirar la sonda', d: 'Cultivo y antibiótico dirigido',
            say: 'La conducta es retirar la sonda apenas puedas, tomar un urocultivo, y dar un antibiótico dirigido según ese resultado.' },
        ] },
        { title: 'Wound: infección de la herida', tag: 'Día cinco a siete', kind: 'alert', items: [
          { t: 'Eritema, calor y dolor', d: 'Con salida de pus por la herida',
            say: 'Entre el día cinco y siete, revisa la herida: eritema, calor, dolor creciente, y a veces salida de secreción purulenta.' },
          { t: 'Abrir y drenar', d: 'Antibióticos solo si hay celulitis extensa',
            say: 'El tratamiento es abrir la herida y drenar todo el pus. Los antibióticos se agregan solo si hay celulitis extensa o el paciente está comprometido, y esto lo vas a ver con más detalle en la próxima clase.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Walking y Wonder drugs',
      title: 'Trombosis y fiebre por fármacos',
      cards: [
        { title: 'Walking: trombosis venosa profunda', tag: 'Día siete a diez', kind: 'alert', items: [
          { t: 'Pantorrilla asimétrica y dolorosa', d: 'Empastamiento y signo de Homans',
            say: 'Hacia el día siete a diez, piensa en trombosis. La clínica es una pantorrilla que aumenta de volumen de forma asimétrica, dolorosa, con empastamiento muscular.' },
          { t: 'Disnea súbita', d: 'Piensa en tromboembolismo pulmonar',
            say: 'Y si en vez de eso aparece disnea súbita con taquipnea, ahí piensas en tromboembolismo pulmonar, la complicación grave de la misma trombosis.' },
          { t: 'Eco-Doppler y anticoagular', d: 'Con heparina de bajo peso molecular',
            say: 'Se confirma con eco-Doppler venoso, y se trata con anticoagulación plena, típicamente heparina de bajo peso molecular.' },
        ] },
        { title: 'Wonder drugs: fármacos', tag: 'De exclusión', kind: 'normal', items: [
          { t: 'Buen estado general', d: 'A veces con rash o eosinofilia',
            say: 'Y la última letra, Wonder drugs: el paciente está con buen estado general, a veces con un rash o eosinofilia, y ya descartaste todo lo anterior.' },
          { t: 'Suspender el fármaco', d: 'Sospecha en antibióticos y heparina',
            say: 'El tratamiento es suspender el fármaco sospechoso, y los que más dan esta fiebre son los betalactámicos y la heparina.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Enfrentamiento clínico',
      title: 'Antes de pedir nada, examina',
      cards: [
        { title: 'El examen dirigido', tag: 'Siempre primero', kind: 'key', items: [
          { t: 'Mira la herida', d: 'Retira el apósito, no la asumas limpia',
            say: 'Antes de pedir cualquier examen, tienes que examinar al paciente completo. Primero, mira la herida de verdad: retira el apósito, no te quedes con que se ve limpia por fuera.' },
          { t: 'Ausculta el pulmón', d: 'Y revisa las vías venosas',
            say: 'Ausculta los pulmones, revisa los accesos venosos buscando flebitis, y palpa las pantorrillas.' },
        ] },
        { title: 'La trampa que más se repite', tag: 'Ojo en el examen', kind: 'alert', items: [
          { t: 'Antibióticos a ciegas', d: 'Frente a una fiebre de un día',
            say: 'Y aquí está la trampa que el examen repite con distintos disfraces: partir con antibióticos de amplio espectro apenas aparece la fiebre, en el primer día, con la herida limpia y crepitaciones en las bases.' },
          { t: 'Esa fiebre es Wind', d: 'Se trata sin antibióticos',
            say: 'Ese cuadro es atelectasia. Se trata con kinesiterapia y analgesia, y elegir el antibiótico ahí es la respuesta incorrecta.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora ordenemos todo el enfrentamiento en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las cinco W en una sola tabla',
      head: ['Letra', 'Día habitual', 'Clínica cardinal', 'Tratamiento'],
      rows: [
        { cells: ['Wind', 'Día 1 a 2', 'Crepitaciones bibasales, herida limpia', 'Kinesiterapia y analgesia, no antibióticos'],
          say: 'Repasemos en la tabla. Wind, día uno y dos: crepitaciones en las bases y herida limpia. Kinesiterapia y analgesia, nunca antibióticos.' },
        { cells: ['Water', 'Día 3', 'Disuria, sonda Foley', 'Retiro de sonda + cultivo + antibiótico'],
          say: 'Water, día tres: disuria con sonda Foley puesta. Retiras la sonda, tomas cultivo, y das antibiótico dirigido.' },
        { cells: ['Wound', 'Día 5 a 7', 'Eritema, calor y pus en la herida', 'Abrir y drenar la herida'],
          say: 'Wound, día cinco a siete: eritema, calor y pus en la herida. Se abre y se drena.' },
        { cells: ['Walking', 'Día 7 a 10', 'Pantorrilla asimétrica y dolorosa', 'Eco-Doppler + anticoagulación'],
          say: 'Walking, día siete a diez: pantorrilla asimétrica y dolorosa. Eco-Doppler y anticoagulación.' },
        { cells: ['Wonder drugs', 'Día 7 en adelante', 'Buen estado general, rash', 'Suspender el fármaco sospechoso'],
          say: 'Y Wonder drugs, desde el día siete en adelante: buen estado general y a veces rash. Se suspende el fármaco sospechoso, y solo después de descartar todo lo anterior.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 54 años, fumador, operado hace 20 horas de hemicolectomía izquierda por cáncer de colon. Presenta temperatura de 38,3 °C y frecuencia respiratoria de 22 por minuto. La herida está limpia, sin eritema ni secreción. Al examen pulmonar hay murmullo vesicular disminuido y crepitaciones finas en ambas bases.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar ceftriaxona endovenosa por sospecha de neumonía' },
        { letter: 'B', text: 'Indicar analgesia adecuada, espirometría incentivada y deambulación precoz' },
        { letter: 'C', text: 'Abrir la herida operatoria para descartar infección oculta' },
        { letter: 'D', text: 'Solicitar tomografía de tórax de urgencia' },
        { letter: 'E', text: 'Instalar catéter venoso central para monitorización' },
      ],
      correct: 'B',
      explanation: 'Fiebre en las primeras 24 horas, herida limpia y crepitaciones bibasales: es el cuadro clásico de atelectasia pulmonar, favorecido por el tabaquismo. Se trata con analgesia, kinesiterapia respiratoria y movilización precoz, sin antibióticos ni estudio invasivo de la herida.',
      say: {
        stem: 'Vamos al caso. Hombre de cincuenta y cuatro años, fumador, operado hace veinte horas de una hemicolectomía izquierda por cáncer de colon. Tiene fiebre de treinta y ocho grados y tres décimas, y respira veintidós veces por minuto. La herida está limpia, sin eritema ni secreción, y en el pulmón hay murmullo vesicular disminuido con crepitaciones finas en ambas bases.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Tienes cinco opciones: partir con ceftriaxona por sospecha de neumonía, indicar analgesia con espirometría y deambulación, abrir la herida para buscar infección oculta, pedir un escáner de tórax, o instalar un catéter venoso central. Piénsalo.',
        answer: 'La respuesta es la B. Es el día uno, la herida está limpia, y la clínica pulmonar es típica: esto es atelectasia, la causa número uno de fiebre tan temprana. El tratamiento es analgesia, kinesiterapia y movilización, no antibióticos. Y fíjate que la herida limpia descarta de entrada la opción de abrirla.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 123',
      stem: 'Paciente de 17 años, apendicectomizado hace 6 horas, evoluciona con malestar general y dolor abdominal intenso. Pulso regular de 120 por minuto, presión arterial de 90/50 mmHg y temperatura de 37,7 °C. Al examen abdominal hay dolor a la palpación profunda y superficial, con signos peritoneales difusos, mayores en el hemiabdomen inferior.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Hemoperitoneo' },
        { letter: 'B', text: 'Evisceración' },
        { letter: 'C', text: 'Trombosis de la vena porta' },
        { letter: 'D', text: 'Dehiscencia de la base apendicular' },
        { letter: 'E', text: 'Tromboembolismo pulmonar masivo' },
      ],
      correct: 'D',
      explanation: 'La dehiscencia de la base apendicular produce una peritonitis franca: dolor y signos peritoneales que empiezan localizados y se vuelven difusos, con fiebre y progresión a shock hipovolémico y séptico. Es mucho más frecuente que el hemoperitoneo, que se presenta primero con compromiso hemodinámico y palidez, y el dolor abdominal aparece después.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de agosto de dos mil veintiuno. Paciente de diecisiete años, apendicectomizado hace seis horas, con malestar general y dolor abdominal intenso. El pulso está en ciento veinte por minuto, la presión en noventa sobre cincuenta, y la temperatura en treinta y siete grados y siete décimas. Al examen hay dolor a la palpación y signos peritoneales difusos, mayores en la parte baja del abdomen.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: hemoperitoneo, evisceración, trombosis de la vena porta, dehiscencia de la base apendicular, o tromboembolismo pulmonar masivo. Piénsalo.',
        answer: 'La respuesta es la D, dehiscencia de la base apendicular. Fíjate en la secuencia: dolor localizado que se vuelve difuso, signos peritoneales, y recién ahí el compromiso hemodinámico. Eso es peritonitis progresando a shock séptico, y es mucho más frecuente que el hemoperitoneo, que da compromiso hemodinámico primero y el dolor aparece después.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 173',
      stem: 'Paciente de 46 años sometido a colecistectomía abierta. A las 48 horas presenta fiebre de 37,8 °C, eupneico, con frecuencia respiratoria de 14 por minuto y saturación de 98 por ciento. La herida está sin eritema ni secreción, y las vías venosas están permeables y sin signos inflamatorios. El examen pulmonar muestra crepitaciones localizadas en la base derecha.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Neumonía' },
        { letter: 'B', text: 'Dehiscencia de la anastomosis' },
        { letter: 'C', text: 'Atelectasia' },
        { letter: 'D', text: 'Infección de la herida operatoria' },
        { letter: 'E', text: 'Tromboembolismo pulmonar' },
      ],
      correct: 'C',
      explanation: 'La atelectasia es la causa más frecuente de fiebre en las primeras 48 horas, y las crepitaciones localizadas la confirman. La neumonía necesitaría tos y expectoración mucopurulenta; el tromboembolismo suele tener taquicardia o inicio súbito; y la dehiscencia de la anastomosis da signos de peritonitis, no crepitaciones aisladas.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil diecinueve. Paciente de cuarenta y seis años, operado de una colecistectomía abierta. A las cuarenta y ocho horas tiene fiebre de treinta y siete grados y ocho décimas, respira bien, con catorce respiraciones por minuto y buena saturación. La herida está sin eritema ni secreción, las vías venosas están sanas, y en el pulmón hay crepitaciones localizadas en la base derecha.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: neumonía, dehiscencia de la anastomosis, atelectasia, infección de la herida operatoria, o tromboembolismo pulmonar. Piénsalo.',
        answer: 'Es la C, atelectasia. Estamos dentro de las primeras cuarenta y ocho horas, con crepitaciones localizadas y todo lo demás normal. La neumonía necesita tos y expectoración, que aquí no aparecen; el tromboembolismo suele venir con taquicardia o un inicio brusco; y la dehiscencia de la anastomosis daría signos de peritonitis, no solo crepitaciones.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'El orden que manda', tag: 'Las cinco W', kind: 'key', items: [
          { t: 'Wind, Water, Wound', d: 'Días uno, tres y cinco a siete',
            say: 'Cerremos con las reglas de oro. El orden es Wind, Water, Wound: pulmón en los primeros días, vía urinaria al tercero, y herida entre el cinco y el siete.' },
          { t: 'Walking y Wonder drugs', d: 'Trombosis y fármacos, después',
            say: 'Y después, Walking y Wonder drugs: trombosis hacia el día siete, y fármacos, siempre como diagnóstico de exclusión.' },
        ] },
        { title: 'La trampa', tag: 'No dispares antibióticos', kind: 'alert', items: [
          { t: 'Primer día, herida limpia', d: 'No es infección, es atelectasia',
            say: 'La trampa que más se repite: fiebre el primer día, con herida limpia. No es infección, es atelectasia, y no lleva antibióticos.' },
          { t: 'Siempre examina primero', d: 'La herida, el pulmón y las piernas',
            say: 'Si te llevas una sola idea de hoy: antes de pedir cualquier examen, revisa la herida, el pulmón y las piernas, porque el día y el examen físico casi siempre te dan la respuesta. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Fiebre postoperatoria: el día decide la causa',
    root: N('start', 'Paciente operado con fiebre', 'Lo primero es el día',
      'Paciente que después de una cirugía presenta fiebre. Antes de pedir cualquier examen, la pregunta clave es una sola: en qué día postoperatorio estás.',
      ['', N('q', '¿Qué día postoperatorio es?', 'Las cinco W',
        'Cada franja de días apunta a una causa distinta, y en ese orden es como se pregunta en el examen.',
        ['Día 1 a 2', N('alert', 'Wind: atelectasia pulmonar', 'Kinesiterapia + analgesia, sin antibióticos',
          'Día uno o dos, con herida limpia y crepitaciones bibasales: atelectasia pulmonar. Se trata con kinesiterapia respiratoria, buena analgesia y deambulación precoz, nunca con antibióticos de entrada.')],
        ['Día 3', N('do', 'Water: infección urinaria', 'Retirar sonda + cultivo + antibiótico',
          'Día tres, con sonda Foley puesta: infección urinaria. Se retira la sonda, se toma un urocultivo y se trata según ese resultado.')],
        ['Día 5 a 7', N('alert', 'Wound: infección de la herida', 'Abrir y drenar la herida',
          'Día cinco a siete, con eritema, calor y salida de pus por la herida: infección del sitio quirúrgico. El pilar es abrir y drenar; los antibióticos se agregan solo si hay celulitis extensa.')],
        ['Día 7 a 10', N('alert', 'Walking: trombosis venosa profunda', 'Eco-Doppler + anticoagulación',
          'Día siete a diez, con una pantorrilla asimétrica y dolorosa, o disnea súbita: trombosis venosa profunda, o su complicación, el tromboembolismo pulmonar. Se confirma con eco-Doppler y se trata con anticoagulación plena.')],
        ['Después del día 7', N('ok', 'Wonder drugs: fiebre por fármacos', 'Suspender el fármaco sospechoso',
          'Buen estado general, a veces con rash, y ya descartaste todo lo anterior: fiebre por fármacos. Es diagnóstico de exclusión, y se resuelve suspendiendo el medicamento sospechoso, típicamente un betalactámico o la heparina.')])]),
  },
};
