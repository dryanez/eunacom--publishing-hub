// Clase 18.22 — guion docente escrito a mano (formato: ver gastro-01.cjs y gastro-17.cjs).
// Fuente clínica: books/scripts/dataset_pediatria.cjs / dataset_pediatria_bloque_4.cjs (ped-22).
// Preguntas reales: EUNACOM Julio 2017 · Pregunta 137; EUNACOM Julio 2015 · Pregunta 7;
// EUNACOM Agosto 2021 · Pregunta 40; EUNACOM Diciembre 2025 · Pregunta 34.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-22',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Ortolani, Barlow, la radiografía a los tres meses, y cuándo va el arnés',
      say: 'Bienvenido. Cerramos pediatría con la displasia del desarrollo de la cadera, uno de los temas de mayor rentabilidad de todo el módulo. Vas a ver que todo se ordena con dos preguntas: cómo la examinas según la edad, y qué te dice la imagen. Y con eso decides si va arnés, o si solo sigues controlando. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Factores de riesgo',
      title: '¿A quién le pones más atención?',
      nodes: [
        { id: 'sex', col: 0, row: 0, k: 'cause', t: 'Sexo femenino', s: 'Cuatro veces más frecuente' },
        { id: 'pod', col: 0, row: 1, k: 'cause', t: 'Presentación podálica', s: 'Cadera forzada en el útero' },
        { id: 'fam', col: 0, row: 2, k: 'cause', t: 'Antecedente familiar', s: 'Primer grado' },
        { id: 'mec', col: 1, row: 1, k: 'mech', t: 'El cotilo no contiene bien', s: 'La cabeza femoral se desliza' },
        { id: 'ines', col: 2, row: 1, k: 'risk', t: 'Cadera inestable o luxada', s: 'Displasia del desarrollo' },
      ],
      edges: [
        { from: 'sex', to: 'mec' }, { from: 'pod', to: 'mec' }, { from: 'fam', to: 'mec' },
        { from: 'mec', to: 'ines' },
      ],
      steps: [
        { show: ['sex'], note: 'Cuatro mujeres por cada hombre',
          say: 'Partamos por quién tiene más riesgo. El primer factor es el sexo: las niñas se afectan cuatro veces más que los niños, por la laxitud que les dan las hormonas maternas.' },
        { show: ['pod'], note: 'La cadera queda forzada en flexión y aducción',
          say: 'El segundo es venir de nalgas: la presentación podálica deja la cadera en una postura forzada dentro del útero.' },
        { show: ['fam'], note: 'Y también el oligoamnios',
          say: 'Y el tercero es tener un familiar directo con este mismo problema. Súmale el oligoamnios, que también comprime la cadera del feto.' },
        { show: ['mec'], note: 'El techo del acetábulo no sostiene',
          say: 'Con cualquiera de estos factores, el acetábulo no termina de formar un techo firme, y la cabeza femoral no queda bien contenida ahí adentro.' },
        { show: ['ines'], note: 'De inestable a luxada',
          say: 'El resultado va desde una cadera que se sale con facilidad, hasta una que ya nace luxada. Y justo eso es lo que buscas al examinar.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Examen físico',
      title: 'Antes de los 3 meses: Ortolani y Barlow',
      cards: [
        { title: 'Maniobra de Ortolani', tag: 'Reduce', kind: 'key', items: [
          { t: 'Abduces y empujas hacia adelante', d: 'Sientes un resalto al reducirse',
            say: 'Empecemos con las dos maniobras que más se preguntan. En Ortolani, flexionas la cadera y la rodilla, abduces el muslo y empujas hacia adelante. Es positiva cuando sientes un resalto: es la cabeza femoral que estaba luxada, entrando de vuelta al acetábulo.' },
        ] },
        { title: 'Maniobra de Barlow', tag: 'Luxa', kind: 'alert', items: [
          { t: 'Aduces y empujas hacia atrás', d: 'Sale del acetábulo si es inestable',
            say: 'Barlow es al revés: aduces y empujas hacia atrás. Si la cadera es inestable, se te sale del acetábulo. Ojo con no confundirlas: Ortolani reduce, Barlow luxa.' },
        ] },
        { title: 'Después de los 3 meses', tag: 'Cambia el signo', kind: 'criteria', items: [
          { t: 'Abducción bajo 60 grados', d: 'El signo más confiable a esta edad',
            say: 'Y fíjate en algo importante: pasados los tres meses, estas maniobras pierden fuerza. Ahí el signo que más confías es la abducción limitada, bajo sesenta grados.' },
          { t: 'Signo de Galeazzi', d: 'Una rodilla más baja que la otra',
            say: 'Y el signo de Galeazzi: con las caderas flectadas, una rodilla te queda más abajo que la otra, por el fémur acortado del lado luxado.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico por imágenes',
      title: 'Ecografía o radiografía: decide la edad',
      nodes: [
        { id: 'ctl', col: 0, row: 1, k: 'start', t: 'Control de salud infantil', s: '¿Qué edad tiene?' },
        { id: 'eco', col: 1, row: 0, k: 'good', t: 'Ecografía de cadera', s: 'Bajo los 3 meses' },
        { id: 'rxu', col: 1, row: 2, k: 'good', t: 'Radiografía de pelvis', s: 'A los 3 meses, a todos' },
        { id: 'lin', col: 2, row: 2, k: 'mech', t: 'Hilgenreiner y Perkin', s: 'Marcan los cuadrantes' },
        { id: 'nor', col: 3, row: 1, k: 'good', t: 'Núcleo ínfero-interno', s: 'Ángulo de 30 grados o menos' },
        { id: 'lux', col: 3, row: 3, k: 'risk', t: 'Núcleo súpero-externo', s: 'Ángulo sobre 30 grados' },
      ],
      edges: [
        { from: 'ctl', to: 'eco', label: 'menor de 3 meses' },
        { from: 'ctl', to: 'rxu', label: 'a los 3 meses' },
        { from: 'rxu', to: 'lin' }, { from: 'lin', to: 'nor' }, { from: 'lin', to: 'lux' },
      ],
      steps: [
        { show: ['ctl'], note: 'La edad decide el examen',
          say: 'Ahora, la imagen. Y lo primero que decide cuál pedir es la edad del niño.' },
        { show: ['eco'], note: 'El núcleo aún es cartílago',
          say: 'Bajo los tres meses, el examen es la ecografía de cadera, porque a esa edad el hueso todavía es puro cartílago y no se ve en una radiografía.' },
        { show: ['rxu'], note: 'A todos, tengan o no factores de riesgo',
          say: 'Y a los tres meses, en Chile se le toma una radiografía de pelvis a todo lactante, tenga o no tenga factores de riesgo. Esto es una garantía GES, y ese detalle universal se pregunta harto.' },
        { show: ['lin'], note: 'Dos líneas que dividen la pelvis en cuadrantes',
          say: 'En esa radiografía se trazan dos líneas: una horizontal, la de Hilgenreiner, y una vertical, la de Perkin. Juntas dividen la cadera en cuadrantes.' },
        { show: ['nor'], note: 'Ahí es donde debe estar',
          say: 'Si el núcleo de la cabeza femoral está en el cuadrante de abajo y hacia adentro, con un ángulo acetabular de treinta grados o menos, la cadera es normal.' },
        { show: ['lux'], note: 'Se corrió hacia arriba y afuera',
          say: 'Pero si el núcleo se corrió al cuadrante de arriba y hacia afuera, con el ángulo por sobre treinta, ahí tienes la displasia.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Correas de Pavlik: el estándar antes de los 6 meses',
      cards: [
        { title: 'Cómo actúa', tag: 'Bajo los 6 meses', kind: 'pharma', items: [
          { t: 'Flexión de 90 a 100 grados', d: 'Con abducción moderada',
            say: 'Confirmada la displasia en un lactante menor de seis meses, el tratamiento es el arnés de Pavlik. Mantiene la cadera flectada entre noventa y cien grados, con una abducción moderada.' },
          { t: 'Deja que se centre sola', d: 'Sin forzar nada',
            say: 'Con esa posición, la cabeza femoral se va centrando dentro del cotilo por sí sola, sin que tengas que forzar nada.' },
        ] },
        { title: 'Lo que hay que evitar', tag: 'Complicaciones', kind: 'alert', items: [
          { t: 'Abducción forzada sobre 70', d: 'Riesgo de necrosis de la cabeza femoral',
            say: 'Y ojo con no pasarte: si fuerzas la abducción sobre setenta grados, arriesgas una necrosis avascular de la cabeza femoral, justo lo que estabas tratando de evitar.' },
        ] },
        { title: 'Si falla o llega tarde', tag: 'Mayor de 6 meses', kind: 'normal', items: [
          { t: 'Reducción bajo anestesia', d: 'Con yeso pelvipédico',
            say: 'Y si el arnés falla, o el niño ya tiene más de seis meses, el manejo sube a una reducción bajo anestesia general y un yeso pelvipédico. Por eso el diagnóstico precoz es tan importante.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora ordenemos el examen y la imagen en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Edad, examen y ángulo',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Menor de 3 meses, Ortolani positivo', 'Derivar y ecografía de caderas', 'Esperar a la radiografía de los 3 meses'],
          say: 'Repasemos con una tabla. Menor de tres meses, con Ortolani positivo: derivas y pides ecografía de caderas. El error es esperar a la radiografía de los tres meses.' },
        { cells: ['3 meses, sin factores de riesgo', 'Igual se toma radiografía de pelvis', 'Omitirla por no tener factores de riesgo'],
          say: 'A los tres meses, aunque no tenga ningún factor de riesgo: igual se toma la radiografía de pelvis. Es un error saltársela porque el examen físico salió normal.' },
        { cells: ['Ángulo acetabular de 30 o menos', 'Mantener controles habituales', 'Indicar arnés de todos modos'],
          say: 'Ángulo acetabular de treinta o menos: sigues con los controles habituales. Indicar arnés igual, sin displasia, es un error.' },
        { cells: ['Displasia confirmada, menor de 6 meses', 'Arnés de Pavlik', 'Doble pañal'],
          say: 'Con la displasia confirmada, en menor de seis meses: arnés de Pavlik. El doble pañal es la trampa clásica que suena razonable pero no corrige nada.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Lactante femenina de 3 meses, nacida de término en presentación podálica. En su control sano, la cadera está estable al examen, sin resaltos. Se toma radiografía de pelvis por la Garantía Explícita en Salud: cadera derecha con núcleo en cuadrante ínfero-interno e índice acetabular de 26 grados; cadera izquierda con núcleo en cuadrante súpero-externo, índice acetabular de 38 grados y arco de Shenton roto.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Mantener controles habituales, ya que el examen físico es normal' },
        { letter: 'B', text: 'Derivar a traumatología infantil e instalar correas de Pavlik' },
        { letter: 'C', text: 'Indicar doble pañal y control ecográfico en un mes' },
        { letter: 'D', text: 'Solicitar resonancia magnética de caderas antes de decidir' },
        { letter: 'E', text: 'Programar osteotomía femoral de urgencia' },
      ],
      correct: 'B',
      explanation: 'La radiografía muestra displasia franca en la cadera izquierda (núcleo súpero-externo, índice acetabular sobre 30 y arco de Shenton roto), a pesar de que el examen físico ya no la detecta a esta edad. La conducta es derivar y comenzar de inmediato con correas de Pavlik, el estándar en menores de 6 meses.',
      say: {
        stem: 'Vamos al caso. Lactante mujer de tres meses, nacida de término en presentación podálica. En el control sano, la cadera se examina estable, sin ningún resalto. Pero por la garantía GES le toman la radiografía de pelvis: la cadera derecha sale con el núcleo bien ubicado y un ángulo de veintiséis grados; la izquierda, con el núcleo corrido al cuadrante de arriba y afuera, un ángulo de treinta y ocho grados, y el arco de Shenton roto.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: mantener controles porque el examen físico es normal, derivar e instalar correas de Pavlik, doble pañal con control ecográfico, resonancia magnética antes de decidir, u osteotomía de urgencia. Piénsalo.',
        answer: 'Es la B. Este caso está armado justo para mostrarte por qué se toma la radiografía a todos: el examen físico ya no alcanza a detectar esta displasia a los tres meses, pero la imagen la muestra clarísima en la cadera izquierda. Con esos hallazgos, se deriva y se instala el arnés de Pavlik de inmediato. Pedir otra imagen, o esperar, solo retrasa un tratamiento que funciona mejor mientras antes empiece.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 137',
      stem: 'Niño diagnosticado de displasia de cadera a los 6 meses de vida, mediante radiografía que muestra luxación del extremo proximal del fémur izquierdo.',
      question: '¿Cuál es el tratamiento de elección?',
      options: [
        { letter: 'A', text: 'Doble pañal' },
        { letter: 'B', text: 'Correas de Pavlik' },
        { letter: 'C', text: 'Yeso con fijador' },
        { letter: 'D', text: 'Osteotomía periacetabular tipo Ganz' },
        { letter: 'E', text: 'Reducción abierta y fijación con osteosíntesis' },
      ],
      correct: 'B',
      explanation: 'A los 6 meses todavía está dentro de la ventana en que el arnés de Pavlik funciona como tratamiento de elección. La cirugía y la osteotomía quedan para el niño mayor o para cuando el arnés fracasa.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil diecisiete. Niño diagnosticado de displasia de cadera a los seis meses, con una radiografía que muestra la cabeza femoral izquierda luxada.',
        question: '¿Cuál es el tratamiento de elección?',
        options: 'Las opciones: doble pañal, correas de Pavlik, yeso con fijador, osteotomía periacetabular, o reducción abierta con osteosíntesis.',
        answer: 'Es la B, correas de Pavlik. A los seis meses todavía estás dentro de la ventana en la que el arnés funciona como primera línea. La cirugía y la osteotomía se reservan para cuando el arnés fracasa o el niño ya es mayor, y el doble pañal, ya lo vimos, no corrige nada.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 7',
      stem: 'Niño de 3 meses de edad, radiografía de pelvis que muestra displasia de cadera izquierda, con índice acetabular de 36 grados.',
      question: '¿Cuál es la indicación más adecuada?',
      options: [
        { letter: 'A', text: 'Ejercicios de rotación y compresión' },
        { letter: 'B', text: 'Bota larga bilateral de yeso, con yugo' },
        { letter: 'C', text: 'Yeso pelvipédico' },
        { letter: 'D', text: 'Uso de doble pañal' },
        { letter: 'E', text: 'Arnés de Pavlik' },
      ],
      correct: 'E',
      explanation: 'Un índice acetabular de 36 grados a los 3 meses está sobre el corte normal de 30, y confirma la displasia. En un lactante de esta edad, el tratamiento es arnés de Pavlik.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil quince. Niño de tres meses, con una radiografía de pelvis que muestra displasia de cadera izquierda, con un índice acetabular de treinta y seis grados.',
        question: '¿Cuál es la indicación más adecuada?',
        options: 'Las opciones: ejercicios de rotación y compresión, bota larga de yeso con yugo, yeso pelvipédico, doble pañal, o arnés de Pavlik.',
        answer: 'Es la E. Treinta y seis grados está claramente sobre el corte normal de treinta, así que hay displasia confirmada. A los tres meses, la respuesta es arnés de Pavlik. El yeso pelvipédico es para cuando el arnés no funciona o el niño es mayor, y esa es la trampa que quiere hacerte confundir edades y tratamientos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 40',
      stem: 'Niño de 3 meses, radiografía anteroposterior de pelvis como tamizaje para displasia de cadera. Ángulo acetabular: 26 grados a derecha y 28 grados a izquierda.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Derivar a traumatología infantil' },
        { letter: 'B', text: 'Indicar doble pañal' },
        { letter: 'C', text: 'Indicar arnés de Pavlik' },
        { letter: 'D', text: 'Realizar ecografía de cadera' },
        { letter: 'E', text: 'Mantener los controles habituales de niño sano' },
      ],
      correct: 'E',
      explanation: 'A los 3 meses, un índice acetabular de 30 grados o menos en ambas caderas es normal. No hay displasia que tratar ni que confirmar con otro examen: se continúa con los controles habituales.',
      say: {
        stem: 'Una tercera pregunta real, del EUNACOM de agosto de dos mil veintiuno. Niño de tres meses, con la radiografía de tamizaje para displasia de cadera: ángulo acetabular de veintiséis grados a la derecha, y veintiocho a la izquierda.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: derivar a traumatología infantil, doble pañal, arnés de Pavlik, ecografía de cadera, o mantener los controles habituales.',
        answer: 'Es la E. Y esta pregunta es el espejo de la anterior: aquí los dos ángulos están bajo treinta, así que la cadera es normal para esta edad. Derivar, poner un arnés o pedir otra imagen sería sobretratar a un niño sano. El ángulo normal es el que decide, no la sospecha por sí sola.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 34',
      stem: 'Lactante de 2 meses, con lactancia materna exclusiva y buen incremento de peso, presenta signo de Ortolani y limitación en la abducción de la cadera derecha. Sin antecedentes familiares.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Solicitar ecografía de caderas' },
        { letter: 'B', text: 'Solicitar resonancia magnética de caderas' },
        { letter: 'C', text: 'Indicar doble pañal y control en un mes' },
        { letter: 'D', text: 'Realizar radiografía anteroposterior de pelvis de rutina a los 3 meses' },
        { letter: 'E', text: 'Realizar cirugía' },
      ],
      correct: 'A',
      explanation: 'Ante un Ortolani positivo antes de los 3 meses, el examen de elección es la ecografía de caderas, porque el núcleo femoral todavía es cartilaginoso y no se ve en radiografía. Esperar a la radiografía de los 3 meses retrasaría la derivación de un hallazgo ya positivo.',
      say: {
        stem: 'Y la última pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Lactante de dos meses, con lactancia materna exclusiva y buen aumento de peso, en quien el examen muestra Ortolani positivo y una abducción limitada de la cadera derecha, sin antecedentes familiares.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: ecografía de caderas, resonancia magnética, doble pañal con control en un mes, esperar la radiografía de rutina de los tres meses, o cirugía.',
        answer: 'Es la A. Tiene solo dos meses y ya tiene un examen físico positivo, así que no esperas a la radiografía universal de los tres meses: ese examen es para el que no tiene hallazgos. Aquí ya hay una sospecha clínica clara, y bajo los tres meses el examen de elección es la ecografía de caderas, porque a esa edad la radiografía todavía no muestra el núcleo óseo.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'El examen físico', tag: 'Cambia con la edad', kind: 'key', items: [
          { t: 'Bajo 3 meses: Ortolani y Barlow', d: 'Uno reduce, el otro luxa',
            say: 'Cerremos con las reglas de oro. Bajo los tres meses, el examen es Ortolani y Barlow: uno reduce, el otro luxa.' },
          { t: 'Sobre 3 meses: abducción limitada', d: 'Y el signo de Galeazzi',
            say: 'Sobre los tres meses, el signo más confiable es la abducción limitada, junto con el signo de Galeazzi.' },
        ] },
        { title: 'La imagen', tag: 'Decide la edad', kind: 'criteria', items: [
          { t: 'Bajo 3 meses: ecografía', d: 'A los 3 meses: radiografía a todos',
            say: 'Bajo los tres meses, ecografía. A los tres meses, radiografía de pelvis a todo lactante, sea o no de riesgo.' },
          { t: 'Índice acetabular sobre 30', d: 'Es displasia',
            say: 'Y un índice acetabular sobre treinta confirma la displasia.' },
        ] },
        { title: 'El tratamiento', tag: 'Cuanto antes, mejor', kind: 'pharma', items: [
          { t: 'Menor de 6 meses: arnés de Pavlik', d: 'Sin forzar la abducción',
            say: 'Menor de seis meses, arnés de Pavlik, sin forzar la abducción. Si te llevas una sola idea de hoy: el examen cambia con la edad, y cuanto antes trates, menos cirugía necesita este niño. Con esto cerramos pediatría completa. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: (() => {
    const nDerivarEco = N('alert', 'Derivar y ecografía de caderas', 'No esperar a los 3 meses',
      'Si alguna sale positiva, derivas de inmediato y pides ecografía de caderas, sin esperar la radiografía universal.');
    const nIgualRx = N('do', 'Igual va radiografía a los 3 meses', 'Garantía GES para todos',
      'Si el examen es normal, igual continúa hacia la radiografía de los tres meses, porque es universal y no depende del examen físico.');
    const nMenor3 = N('q', '¿Ortolani o Barlow positivo?', 'Resalto o cadera que se sale',
      'Bajo los tres meses, tus maniobras son Ortolani y Barlow.',
      ['Sí', nDerivarEco],
      ['No', nIgualRx]);
    const nNormal = N('ok', 'Cadera normal', 'Controles habituales',
      'Treinta grados o menos, con el núcleo en el cuadrante correcto: cadera normal, sigues con los controles habituales.');
    const nDisplasia = N('alert', 'Displasia confirmada', 'Arnés de Pavlik si es menor de 6 meses',
      'Sobre treinta grados, con el núcleo desplazado: displasia confirmada. Si el lactante tiene menos de seis meses, el tratamiento es el arnés de Pavlik.');
    const nMayor3 = N('q', '¿Cuánto mide el índice acetabular?', 'En la radiografía de pelvis',
      'A los tres meses, la radiografía de pelvis con las líneas de Hilgenreiner y Perkin te da el índice acetabular.',
      ['30 grados o menos', nNormal],
      ['Más de 30 grados', nDisplasia]);
    return {
      title: 'Displasia de cadera: examen e imagen según la edad',
      root: N('start', 'Control de salud infantil', '¿Qué edad tiene el lactante?',
        'Todo lactante se examina la cadera en su control sano. Pero cómo lo examinas, y qué imagen le pides, depende de la edad.',
        ['Menor de 3 meses', nMenor3],
        ['3 meses o más', nMayor3]),
    };
  })(),
};
