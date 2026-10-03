// Clase 18.15 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-15).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-15',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'El minuto de oro que decide el pronóstico neurológico',
      say: 'Bienvenido a la clase de atención inmediata del recién nacido y reanimación neonatal, uno de los temas de mayor rentabilidad del examen. Vas a aprender el algoritmo completo: qué preguntas te haces al nacer, cuándo empiezas a ventilar, cuándo agregas masaje cardíaco, y qué significa realmente el puntaje de Apgar. Todo se decide en el primer minuto de vida, así que prepárate para pensar rápido. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Los primeros segundos',
      title: 'Tres preguntas antes de decidir dónde va el recién nacido',
      nodes: [
        { id: 'preg', col: 0, row: 1, k: 'q', t: 'Tres preguntas al nacer', s: 'Término, tono y respiración' },
        { id: 'api', col: 2, row: 0, k: 'good', t: 'Apego piel a piel', s: 'Si las tres respuestas son sí' },
        { id: 'cun', col: 2, row: 2, k: 'alert', t: 'Cuna de calor radiante', s: 'Si alguna respuesta es no' },
        { id: 'pas', col: 3, row: 2, k: 'mech', t: 'Pasos iniciales', s: 'Calor, posición, secar, estimular' },
      ],
      edges: [
        { from: 'preg', to: 'api', label: 'sí a las tres' },
        { from: 'preg', to: 'cun', label: 'no a alguna' },
        { from: 'cun', to: 'pas' },
      ],
      steps: [
        { show: ['preg'], note: 'Se hacen en simultáneo',
          say: 'Al momento de nacer, te haces tres preguntas al mismo tiempo: ¿es una gestación de término? ¿tiene buen tono muscular? ¿respira o llora con fuerza?' },
        { show: ['api'], note: 'No se separa de la madre',
          say: 'Si las tres respuestas son sí, el recién nacido no se separa de la madre: contacto piel a piel de inmediato, se seca, se abriga, y ahí mismo empieza la lactancia.' },
        { show: ['cun'], note: 'Basta que una sola sea no',
          say: 'Pero si cualquiera de las tres respuestas es no, el niño va de inmediato a la cuna de calor radiante.' },
        { show: ['pas'], note: 'En menos de 30 segundos',
          say: 'Ahí parten los pasos iniciales, y los haces en menos de treinta segundos: das calor, pones la cabeza en posición de olfateo, despejas la vía aérea solo si hay secreciones que obstruyen, secas retirando el paño húmedo, y estimulas la espalda o las plantas.' },
      ],
    },

    {
      type: 'points',
      kicker: 'A los 60 segundos',
      title: 'El minuto de oro: ¿cuándo empiezas a ventilar?',
      cards: [
        { title: 'Se evalúan dos cosas', tag: 'Al minuto de vida', kind: 'key', items: [
          { t: 'Frecuencia cardíaca', d: 'Auscultas 6 segundos y multiplicas por 10',
            say: 'Al minuto de vida evalúas dos parámetros. El primero es la frecuencia cardíaca: la auscultas durante seis segundos y multiplicas por diez.' },
          { t: 'Esfuerzo respiratorio', d: 'Apnea o boqueadas no cuentan',
            say: 'El segundo es el esfuerzo respiratorio. Si el niño está en apnea, o solo boquea, eso tampoco te sirve.' },
        ] },
        { title: 'Inicias ventilación si...', tag: 'VPP inmediata', kind: 'alert', items: [
          { t: 'FC menor a 100', d: 'O hay apnea, o boqueadas',
            say: 'Si la frecuencia cardíaca está bajo cien, o hay apnea, o boqueadas, inicias de inmediato la ventilación a presión positiva. No esperas nada más.' },
        ] },
        { title: 'Con qué oxígeno partes', tag: 'FiO2 inicial', kind: 'pharma', items: [
          { t: '35 semanas o más: aire ambiental', d: 'Nunca oxígeno al 100%',
            say: 'Y aquí viene un detalle que se pregunta mucho: si el niño tiene treinta y cinco semanas o más, partes con aire ambiental, oxígeno al veintiuno por ciento. Jamás partas con oxígeno al cien por ciento en un recién nacido de término: el exceso daña por radicales libres.' },
          { t: 'Menos de 35 semanas: 21 a 30%', d: 'Ajustas según la saturación',
            say: 'Si es menor de treinta y cinco semanas, partes un poco más alto, entre veintiuno y treinta por ciento, y vas ajustando según la saturación preductal.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Ventilación a presión positiva',
      title: 'Técnica y qué hacer si no funciona',
      cards: [
        { title: 'Técnica de la VPP', tag: '40 a 60 por minuto', kind: 'key', items: [
          { t: 'Bolsa autoinflable o reanimador en T', d: '40 a 60 ventilaciones por minuto',
            say: 'La ventilación se da con bolsa autoinflable o con reanimador en T, a una frecuencia de cuarenta a sesenta ventilaciones por minuto.' },
          { t: 'Oxímetro en la mano derecha', d: 'Mide la saturación preductal',
            say: 'Y pones el oxímetro de pulso en la mano o muñeca derecha, porque ahí mides la saturación preductal, la misma que le llega al cerebro y al corazón.' },
        ] },
        { title: 'Si el tórax no se expande', tag: 'Corrección en orden', kind: 'alert', items: [
          { t: 'Máscara, cabeza, succión', d: 'Antes de subir la presión',
            say: 'Si a los quince segundos la frecuencia no sube y el tórax no se mueve, corriges en orden: ajustas la máscara, reposicionas la cabeza, succionas secreciones, abres la boca, y solo después subes la presión o buscas una vía aérea alternativa.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Si la VPP no basta',
      title: 'Cuándo agregas masaje y cuándo adrenalina',
      nodes: [
        { id: 'vpp', col: 0, row: 1, k: 'start', t: '30 segundos de VPP efectiva', s: 'Con buena expansión torácica' },
        { id: 'fcq', col: 1, row: 1, k: 'q', t: '¿Frecuencia bajo 60?', s: 'Pese a la ventilación' },
        { id: 'mas', col: 2, row: 0, k: 'alert', t: 'Masaje cardíaco', s: 'Dos pulgares, relación tres a uno' },
        { id: 'fio', col: 2, row: 2, k: 'mech', t: 'Sube el oxígeno a 100%', s: 'Al iniciar el masaje' },
        { id: 'adr', col: 3, row: 1, k: 'risk', t: 'Adrenalina', s: 'Si persiste bajo 60 tras 60 segundos' },
      ],
      edges: [
        { from: 'vpp', to: 'fcq' },
        { from: 'fcq', to: 'mas', label: 'sí' },
        { from: 'mas', to: 'fio' },
        { from: 'mas', to: 'adr', label: 'si persiste' },
      ],
      steps: [
        { show: ['vpp'], note: 'El punto de partida',
          say: 'Ya estás ventilando de forma efectiva por treinta segundos, con el tórax expandiéndose bien. Reevalúas.' },
        { show: ['fcq'], note: 'La pregunta que decide el masaje',
          say: 'Y la pregunta es: ¿la frecuencia cardíaca sigue bajo sesenta, a pesar de esa ventilación?' },
        { show: ['mas'], note: 'Recién ahí, no antes',
          say: 'Si la respuesta es sí, recién ahí agregas el masaje cardíaco, con la técnica de los dos pulgares en el tercio inferior del esternón, en una relación de tres compresiones por una ventilación.' },
        { show: ['fio'], note: 'Lo que antes estaba prohibido',
          say: 'Y en ese momento subes la concentración de oxígeno al cien por ciento, algo que antes del masaje estaba prohibido.' },
        { show: ['adr'], note: 'Por la vena umbilical',
          say: 'Si después de sesenta segundos de masaje coordinado con ventilación la frecuencia sigue bajo sesenta, recién ahí das adrenalina, por la vena umbilical.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Una excepción se pregunta',
      title: '¿Aspiras siempre que hay meconio?',
      cards: [
        { title: 'Vigoroso', tag: 'Buen tono, respira', kind: 'normal', items: [
          { t: 'Se queda con la madre', d: 'Apego normal, sin aspirar',
            say: 'Si nace con líquido con meconio, pero está vigoroso, con buen tono y respira, se queda con la madre en apego, igual que cualquier recién nacido sano.' },
        ] },
        { title: 'No vigoroso', tag: 'Deprimido', kind: 'alert', items: [
          { t: 'Cuna radiante y VPP directa', d: 'Ya no se aspira la tráquea de rutina',
            say: 'Si en cambio nace deprimido, sin tono ni esfuerzo respiratorio, va a la cuna radiante e inicias la ventilación a presión positiva de inmediato. La norma cambió: ya no se intuba para aspirar la tráquea antes de ventilar, ese paso se sacó de la guía.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Al minuto y a los 5 minutos',
      title: 'El test de Apgar: qué mide y qué no decide',
      cards: [
        { title: 'Cinco parámetros', tag: 'Cero, uno o dos puntos', kind: 'key', items: [
          { t: 'Color, pulso y esfuerzo', d: 'Además de tono y reflejos',
            say: 'El Apgar evalúa cinco cosas, cada una de cero a dos puntos: el color, el pulso, la respuesta a estímulos, el tono muscular, y el esfuerzo respiratorio.' },
          { t: 'Al minuto y a los 5 minutos', d: 'Repite cada 5 minutos si sigue bajo',
            say: 'Se calcula al minuto uno y a los cinco minutos de vida, y si a los cinco sigue bajo siete, se repite cada cinco minutos hasta los veinte.' },
        ] },
        { title: 'Lo que se pregunta siempre', tag: 'La trampa clásica', kind: 'alert', items: [
          { t: 'No decide cuándo reanimar', d: 'La reanimación no espera el puntaje',
            say: 'Y aquí está el dato que más se pregunta: el Apgar no decide cuándo empezar la reanimación. Esa decisión ya la tomaste al minuto de oro, con la frecuencia cardíaca y la respiración. El Apgar de los cinco minutos es el que tiene valor pronóstico.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora arma todo el algoritmo en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'El orden de la reanimación',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['RN de término, FC bajo 100 al minuto', 'VPP con aire ambiental', 'Partir con oxígeno al 100%'],
          say: 'Repasemos las trampas. Recién nacido de término con frecuencia bajo cien al minuto: ventilación con aire ambiental. El error es partir con oxígeno al cien por ciento.' },
        { cells: ['FC bajo 60 tras VPP mal aplicada', 'Corregir la técnica primero', 'Saltar directo al masaje cardíaco'],
          say: 'Frecuencia bajo sesenta, pero con una ventilación mal aplicada: corriges la técnica primero. El error es saltar directo al masaje.' },
        { cells: ['FC bajo 60 tras 30 s de VPP efectiva', 'Masaje cardíaco en relación 3 a 1', 'Seguir solo con VPP otros minutos'],
          say: 'Frecuencia bajo sesenta tras treinta segundos de ventilación efectiva: recién ahí masaje cardíaco. El error es seguir solo con ventilación varios minutos más.' },
        { cells: ['Meconio y recién nacido vigoroso', 'Apego con la madre, sin aspirar', 'Aspirar la tráquea de todas formas'],
          say: 'Meconio con un recién nacido vigoroso: apego con la madre, sin aspirar. El error, ya superado, es aspirar la tráquea igual.' },
        { cells: ['Apgar bajo a los 5 minutos', 'Valor pronóstico, no inicia la reanimación', 'Esperar el puntaje para decidir'],
          say: 'Y un Apgar bajo a los cinco minutos tiene valor pronóstico, pero no inicia nada. El error es esperar el puntaje para decidir si reanimas.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Parto vaginal de una primigesta de 39 semanas. El recién nacido nace con llanto débil y tono flácido. Se traslada a cuna de calor radiante: se seca, se posiciona la cabeza en olfateo y se estimula. Al minuto de vida: continúa en apnea, no llora, y la auscultación muestra una frecuencia cardíaca de 72 latidos por minuto.',
      question: '¿Cuál es la conducta inmediata?',
      options: [
        { letter: 'A', text: 'Iniciar compresiones torácicas en relación 3:1' },
        { letter: 'B', text: 'Iniciar ventilación a presión positiva con aire ambiental' },
        { letter: 'C', text: 'Administrar adrenalina por vena umbilical' },
        { letter: 'D', text: 'Dar oxígeno libre en flujo continuo al 100%' },
        { letter: 'E', text: 'Calcular el Apgar y esperar al minuto 5 para intervenir' },
      ],
      correct: 'B',
      explanation: 'Al minuto de vida, apnea y frecuencia cardíaca bajo 100 obligan a iniciar ventilación a presión positiva de inmediato. En un recién nacido de término se inicia con aire ambiental. El masaje y la adrenalina no tienen indicación todavía.',
      say: {
        stem: 'Vamos al caso. Parto vaginal de una primigesta de treinta y nueve semanas. El recién nacido nace con llanto débil y tono flácido. Lo llevan a la cuna de calor radiante, lo secan, lo posicionan y lo estimulan. Al minuto de vida sigue en apnea, no llora, y la frecuencia cardíaca es de setenta y dos latidos por minuto.',
        question: '¿Cuál es la conducta inmediata?',
        options: 'Tienes cinco opciones: compresiones torácicas, ventilación a presión positiva con aire ambiental, adrenalina por vena umbilical, oxígeno libre continuo al cien por ciento, o esperar al minuto cinco para calcular el Apgar. Piénsalo.',
        answer: 'Es la B. Al minuto de vida, apnea y una frecuencia bajo cien te obligan a iniciar la ventilación a presión positiva ya, y como es un recién nacido de término, partes con aire ambiental. El masaje todavía no tiene espacio, porque no le has dado los treinta segundos de ventilación efectiva. Y esperar el Apgar es exactamente lo que nunca debes hacer.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 50',
      stem: 'Recién nacido de término por parto vaginal, con líquido amniótico claro. Al nacer llora inmediatamente, con frecuencia cardíaca de 145 latidos por minuto, buen tono muscular y piel rosada.',
      question: '¿Cuál es la primera maniobra que realizas?',
      options: [
        { letter: 'A', text: 'Aspiración rutinaria de vías aéreas' },
        { letter: 'B', text: 'Contacto piel a piel con la madre' },
        { letter: 'C', text: 'Vitamina K intramuscular' },
        { letter: 'D', text: 'Profilaxis ocular con eritromicina' },
        { letter: 'E', text: 'Oxígeno suplementario' },
      ],
      correct: 'B',
      explanation: 'Con las tres preguntas iniciales en sí (término, buen tono, llanto vigoroso), no se aspira de rutina ni se separa al recién nacido: la primera prioridad es el apego piel a piel precoz.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil veinticinco. Recién nacido de término, por parto vaginal, con líquido amniótico claro. Al nacer llora de inmediato, con una frecuencia de ciento cuarenta y cinco latidos por minuto, buen tono muscular y piel rosada.',
        question: '¿Cuál es la primera maniobra que realizas?',
        options: 'Las opciones: aspiración rutinaria, contacto piel a piel, vitamina K intramuscular, profilaxis ocular, u oxígeno suplementario.',
        answer: 'Es la B. Las tres preguntas iniciales están en sí: es de término, tiene buen tono y llora fuerte. Con eso, no se aspira de rutina y no se separa de la madre: la primera prioridad es el apego precoz, piel a piel. La vitamina K y la profilaxis ocular vienen después.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 59',
      stem: 'Recién nacido de término que nace deprimido, con apnea y una frecuencia cardíaca de 40 latidos por minuto. Se estimula, se administra oxígeno y se inician ventilaciones a presión positiva. Al reevaluar a los 30 segundos, la frecuencia cardíaca se mantiene en el mismo valor.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Administrar adrenalina por vía endovenosa' },
        { letter: 'B', text: 'Realizar intubación orotraqueal' },
        { letter: 'C', text: 'Continuar con ventilación a presión positiva y reevaluar en 30 segundos' },
        { letter: 'D', text: 'Aumentar la presión de ventilación y reevaluar en 30 segundos' },
        { letter: 'E', text: 'Iniciar compresiones torácicas' },
      ],
      correct: 'E',
      explanation: 'Tras 30 segundos de VPP efectiva, la frecuencia cardíaca sigue bajo 60: corresponde agregar masaje cardíaco coordinado con la ventilación.',
      say: {
        stem: 'Una segunda pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Recién nacido de término que nace deprimido, con apnea y una frecuencia de cuarenta latidos por minuto. Lo estimulan, le dan oxígeno e inician ventilación a presión positiva. A los treinta segundos, la frecuencia se mantiene igual.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: adrenalina endovenosa, intubación orotraqueal, continuar solo con la ventilación, aumentar la presión de ventilación, o iniciar compresiones torácicas.',
        answer: 'Es la E. Ya se cumplieron los treinta segundos de ventilación a presión positiva y la frecuencia sigue bajo sesenta: ese es exactamente el momento de agregar el masaje cardíaco, coordinado con la ventilación. Seguir solo ventilando, como dicen la C y la D, ya no corresponde.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 57',
      stem: 'Recién nacido por cesárea de urgencia, por un registro fetal con signos de hipoxia. Al examen tiene cianosis generalizada e hipotonía, sin esfuerzo respiratorio; se seca y se pone bajo calor radiante, en posición de olfateo, con aporte de oxígeno. A los 50 segundos persiste en apnea y el pulso carotídeo es de 30 latidos por minuto.',
      question: '¿Cuál es la conducta más adecuada en este momento?',
      options: [
        { letter: 'A', text: 'Conectar a ventilación mecánica' },
        { letter: 'B', text: 'Administrar bicarbonato endovenoso' },
        { letter: 'C', text: 'Administrar adrenalina por vía orotraqueal' },
        { letter: 'D', text: 'Dar ventilación a presión positiva con mascarilla facial' },
        { letter: 'E', text: 'Realizar masaje cardíaco' },
      ],
      correct: 'D',
      explanation: 'Tras los pasos iniciales, un recién nacido en apnea con bradicardia grave requiere primero ventilación a presión positiva; el masaje cardíaco solo se agrega si la frecuencia sigue bajo 60 pese a la VPP efectiva.',
      say: {
        stem: 'Y una tercera pregunta real, del EUNACOM de agosto de dos mil veintiuno. Recién nacido por cesárea de urgencia, por hipoxia en el registro fetal. Está cianótico, hipotónico y sin esfuerzo respiratorio; lo secan y lo ponen bajo calor radiante, con oxígeno. A los cincuenta segundos sigue en apnea, con un pulso de treinta latidos por minuto.',
        question: '¿Cuál es la conducta más adecuada en este momento?',
        options: 'Las opciones: ventilación mecánica, bicarbonato endovenoso, adrenalina orotraqueal, ventilación a presión positiva con mascarilla, o masaje cardíaco.',
        answer: 'Es la D. Aunque la frecuencia esté muy baja, el paso que corresponde ahora, después de la estimulación, es la ventilación a presión positiva con mascarilla. El masaje cardíaco, como en la pregunta anterior, solo se agrega si la frecuencia sigue bajo sesenta después de darle esa ventilación efectiva. Saltarse ese paso es la trampa de esta pregunta.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'El minuto de oro', tag: 'FC y respiración', kind: 'key', items: [
          { t: 'FC menor a 100 o apnea', d: 'Inicia VPP de inmediato',
            say: 'Cerremos con las reglas de oro. Al minuto de vida, frecuencia menor a cien o apnea: inicias ventilación a presión positiva de inmediato.' },
          { t: 'Término: aire ambiental', d: 'Nunca oxígeno al 100% de partida',
            say: 'Y en el recién nacido de término, siempre con aire ambiental, nunca con oxígeno al cien por ciento de partida.' },
        ] },
        { title: 'El siguiente escalón', tag: 'En orden', kind: 'alert', items: [
          { t: 'Masaje solo si FC menor a 60', d: 'Tras 30 segundos de VPP efectiva',
            say: 'El masaje cardíaco solo entra si la frecuencia sigue bajo sesenta, después de treinta segundos de ventilación ya efectiva.' },
          { t: 'Adrenalina: el último recurso', d: 'Por vena umbilical',
            say: 'Y la adrenalina, por vena umbilical, queda para el final, si el masaje coordinado con la ventilación no basta.' },
        ] },
        { title: 'El Apgar', tag: 'Pronóstico, no decisión', kind: 'normal', items: [
          { t: 'Nunca decide si reanimas', d: 'Eso lo decide la FC y la respiración',
            say: 'Y el Apgar nunca decide si reanimas: eso ya lo decidiste con la frecuencia y la respiración. Si te llevas una sola idea de hoy: el orden es ventilar, después masajear, y adrenalina al final. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Reanimación neonatal: el orden que decide todo',
    root: N('start', 'Recién nacido no vigoroso', 'En la cuna de calor radiante',
      'Tienes un recién nacido que no cumplió las tres preguntas iniciales, y ya está en la cuna de calor radiante.',
      ['', N('q', '¿FC bajo 100 o en apnea al minuto de vida?', 'Decide si ventilas',
        'Al minuto de vida te preguntas: ¿la frecuencia cardíaca está bajo cien, o está en apnea?',
        ['No', N('ok', 'Observación y cuidados de rutina', 'Sigue junto a la madre',
          'Si ninguna de las dos cosas pasa, sigue con cuidados de rutina, junto a la madre.')],
        ['Sí', N('do', 'Ventilación a presión positiva', 'Aire ambiental si es de término',
          'Si la respuesta es sí, inicias la ventilación a presión positiva, con aire ambiental si es de término.',
          ['', N('q', '¿FC bajo 60 tras 30 segundos de VPP efectiva?', 'Decide si agregas masaje',
            'A los treinta segundos de una ventilación ya efectiva, reevalúas: ¿la frecuencia sigue bajo sesenta?',
            ['No', N('ok', 'Continúa la VPP y reevalúa', 'Hasta respirar y subir la frecuencia',
              'Si no, sigues solo con la ventilación, reevaluando hasta que respire y la frecuencia suba.')],
            ['Sí', N('alert', 'Masaje cardíaco y oxígeno al 100%', 'Si persiste bajo 60: adrenalina por vía umbilical',
              'Si la respuesta es sí, agregas masaje cardíaco y subes el oxígeno al cien por ciento; si aun así persiste bajo sesenta, das adrenalina por la vena umbilical.')])])])]),
  },
};
