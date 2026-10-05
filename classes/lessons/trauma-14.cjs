// Clase 12.14 (Traumatología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_traumatologia.cjs (trauma-14). Preguntas: banco real EUNACOM (class_questions.cjs y --search).
// La displasia del desarrollo de la cadera (maniobras, líneas de Hilgenreiner y Perkins, radiografía a los 3 meses, GES) se enseña a fondo en ped-22:
// aquí solo se repasa lo mínimo y se centra en el tratamiento escalonado. No se repiten las preguntas reales de ped-22
// (Julio 2017 P137, Julio 2015 P7, Agosto 2021 P40, Diciembre 2025 P34) ni sus imágenes. La primera pregunta de ejemplo del libro (Ortolani) tampoco se usa.
// Las tablas plantilla del libro (Parámetro clínico / Criterio quirúrgico, etc.) no corresponden al tema y no se usan.
// Edad límite del arnés de Pavlik: el libro dice menor de 10 meses; ped-22 dice 6 meses; la explicación del banco dice menor de 9 meses (ver informe, categoría B).
// Preguntas reales: Julio 2016 P178 es la misma que Diciembre 2019 P111 (se usa una sola). Julio 2025 P130 y P76 tienen baja confianza de código en el banco,
// pero el enunciado es del tema. El caso clínico (escoliosis) está escrito para la clase.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'trauma-14',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Ortopedia infantil: cadera, columna, pie bot y el niño que cojea',
      say: 'Bienvenido. En esta clase ordenamos la ortopedia del niño. Vemos cuatro cosas: la displasia de cadera, que ya se estudió en pediatría; la escoliosis; el pie bot; y el niño que cojea, donde la edad te dice casi todo el diagnóstico.',
    },

    {
      type: 'points',
      kicker: 'Displasia de cadera',
      title: 'Repaso rápido de la displasia',
      cards: [
        { title: 'Por qué importa', tag: 'Diagnóstico precoz', kind: 'key', items: [
          { t: 'Sin tratar: artrosis precoz', d: 'Dolor crónico y cojera', say: 'La displasia del desarrollo de la cadera va desde la inestabilidad del recién nacido hasta la luxación. Si no se trata a tiempo, termina en artrosis precoz, dolor crónico y cojera. Los detalles del screening los viste en la clase de pediatría; aquí solo lo esencial.' },
          { t: 'Ortolani reduce, Barlow luxa', d: 'Maniobras del recién nacido', say: 'El signo de Ortolani reduce una cadera luxada, y se siente un clic de entrada al abducir. El de Barlow luxa una cadera que estaba encajada. Ortolani es la que entra, Barlow es la que se sale.' },
        ] },
        { title: 'Radiografía', tag: 'Dato del libro', kind: 'criteria', items: [
          { t: 'Núcleo arriba y afuera', d: 'Normal: ínfero-interno', say: 'En la radiografía, lo normal es que el núcleo de osificación esté abajo y adentro. En la displasia se desplaza hacia arriba y afuera, y el arco de Shenton se ve interrumpido.' },
          { t: 'Ángulo acetabular sobre 30', d: 'Más de 36 confirma la displasia', say: 'Un ángulo acetabular sobre treinta grados es sospechoso, y sobre treinta y seis grados confirma la displasia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Displasia de cadera',
      title: 'Tratamiento: a menor edad, mejor',
      cards: [
        { title: 'Escalera según la edad', tag: 'Precocidad', kind: 'pharma', items: [
          { t: 'Correas de Pavlik', d: 'Lactante: cadera flexionada y abducida', say: 'El éxito depende de la precocidad: a menor edad, mayor éxito. En el lactante, el tratamiento de elección son las correas de Pavlik, un arnés funcional que mantiene la cadera flexionada y en abducción.' },
          { t: 'Yeso pelvipedio con yugo', d: 'Si falla el arnés o es mayor', say: 'Si el arnés falla, o el niño es mayor y no lo tolera, se pasa a un yeso pelvipedio.' },
          { t: 'Reducción cruenta', d: 'Casos graves o diagnóstico tardío', say: 'Y la reducción cruenta, es decir, quirúrgica, queda para los casos graves o de diagnóstico tardío, sobre todo después del año y medio.' },
        ] },
        { title: 'Ojo con la edad', tag: 'Dato que varía', kind: 'alert', items: [
          { t: 'Arnés: límite según la fuente', d: 'El libro dice menos de 10 meses', say: 'Ojo con el límite de edad del arnés. Tu libro dice generalmente menos de diez meses, y el examen real lo dio como tratamiento de elección a los seis meses. La regla práctica: lactante menor, arnés; mayor, derivas.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Escoliosis',
      title: 'Escoliosis: Adams y grados',
      cards: [
        { title: 'Diagnóstico', tag: 'Clínico', kind: 'key', items: [
          { t: 'Desviación lateral con rotación', d: 'Columna en el plano coronal', say: 'La escoliosis es una desviación lateral de la columna en el plano coronal, con rotación de las vértebras.' },
          { t: 'Test de Adams positivo', d: 'Giba costal al inclinarse adelante', say: 'Se diagnostica con el test de Adams. Le pides al paciente que se incline hacia adelante. Si aparece una giba costal, es una escoliosis verdadera, estructural. Si no aparece, es una actitud escoliótica, postural.' },
        ] },
        { title: 'Tratamiento por grados', tag: 'Ángulo de Cobb', kind: 'criteria', items: [
          { t: 'Menos de 30 grados', d: 'Ejercicios y observación', say: 'Con menos de treinta grados, ejercicios de fortalecimiento y observación.' },
          { t: '30 a 50 grados', d: 'Corsé', say: 'Entre treinta y cincuenta grados, un corsé, que es una ortesis rígida.' },
          { t: 'Más de 50 grados', d: 'Cirugía: artrodesis', say: 'Y sobre cincuenta grados, cirugía, con artrodesis de la columna.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Pie bot',
      title: 'Pie bot: cuatro deformidades',
      cards: [
        { title: 'Qué es', tag: 'Congénito', kind: 'key', items: [
          { t: 'Pie equinovaro o zambo', d: 'Malformación congénita compleja', say: 'El pie bot, también llamado pie zambo o equinovaro, es una malformación congénita compleja.' },
          { t: 'Varo, equino, cavo y aducto', d: 'Las cuatro deformidades', say: 'Combina cuatro deformidades: varo, equino, cavo y aducto.' },
        ] },
        { title: 'Tratamiento', tag: 'Ortopédico', kind: 'pharma', items: [
          { t: 'Método de Ponseti', d: 'Yesos seriados desde el inicio', say: 'El tratamiento de hoy es ortopédico, con el método de Ponseti: yesos seriados. Ha desplazado a la cirugía porque da mejores resultados con menos secuelas.' },
          { t: 'Comenzar lo antes posible', d: 'Derivar al nacer', say: 'Y tiene que empezar cuanto antes, en las primeras semanas de vida. Por eso, cuando lo ves en un recién nacido, derivas de inmediato a ortopedia infantil.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'El niño que cojea',
      title: 'Cadera dolorosa: la edad decide',
      head: ['Diagnóstico', 'Edad', 'Dato clave', 'Tratamiento'],
      rows: [
        { cells: ['Sinovitis transitoria', '2 a 4 años', 'Infección viral previa; Rx normal', 'Paracetamol y reposo'],
          say: 'En el niño de dos a cuatro años, con una infección viral reciente y una radiografía normal, piensa en sinovitis transitoria. Se trata con paracetamol y reposo.' },
        { cells: ['Enfermedad de Perthes', '5 a 10 años', 'Talla baja; cabeza plana y densa', 'Reposo o cirugía'],
          say: 'Entre los cinco y los diez años, con talla baja y una cabeza femoral plana y densa: enfermedad de Perthes. El manejo es reposo o cirugía, y lo decide el especialista.' },
        { cells: ['Epifisiólisis', '12 a 15 años', 'Obesidad; helado caído', 'Cirugía: osteosíntesis'],
          say: 'Entre los doce y los quince años, en un adolescente obeso en plena pubertad: epifisiólisis, con el signo del helado caído en la radiografía. Se opera con osteosíntesis.' },
      ],
    },

    {
      type: 'points',
      kicker: 'El niño que cojea',
      title: 'Sinovitis, Perthes y epifisiólisis',
      cards: [
        { title: 'Sinovitis transitoria', tag: 'Benigna', kind: 'normal', items: [
          { t: 'Autolimitada, sin fiebre', d: 'Dolor en ingle o rodilla; buen estado', say: 'La sinovitis transitoria es una inflamación benigna y autolimitada de la sinovial. Da dolor en la ingle o la rodilla y cojera, con buen estado general y sin fiebre.' },
          { t: 'Diagnóstico clínico', d: 'Punción si dudas de artritis séptica', say: 'El diagnóstico es clínico. Si dudas con una artritis séptica, se punciona la articulación, y en la sinovitis el líquido es normal.' },
        ] },
        { title: 'Perthes y epifisiólisis', tag: 'Cabeza femoral', kind: 'alert', items: [
          { t: 'Perthes: necrosis de la cabeza', d: 'Niño bajo y muy activo', say: 'La enfermedad de Perthes es una necrosis avascular de la cabeza femoral en un niño de talla baja y de mucha actividad física. La radiografía muestra la cabeza aplanada y densa.' },
          { t: 'Epifisiólisis: obeso en pubertad', d: 'Helado caído en la radiografía', say: 'La epifisiólisis es el deslizamiento de la cabeza femoral en un adolescente obeso. Se ve el signo del helado caído, la cabeza que resbala hacia atrás y abajo, y se opera.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'gallery',
      kicker: 'Así se ve',
      title: 'Cadera, columna y pie del niño',
      images: [
        { src: 'biblioteca/18_traumatologia/trauma-14/01_enfermedad-de-perthes__bailey-love_p593.jpg', label: 'Enfermedad de Perthes: cabeza densa y colapsada', credit: 'Bailey & Love 27.ª ed., Fig. 39.21' },
        { src: 'biblioteca/18_traumatologia/trauma-14/02_epifisiolisis-femoral__bailey-love_p595.jpg', label: 'Epifisiólisis leve de la cadera derecha', credit: 'Bailey & Love 27.ª ed., Fig. 39.22' },
        { src: 'biblioteca/18_traumatologia/trauma-14/03_escoliosis-angulo-de-cobb__bailey-love_p603.jpg', label: 'Escoliosis torácica derecha, Cobb de 40 grados', credit: 'Bailey & Love 27.ª ed., Fig. 39.36' },
        { src: 'biblioteca/18_traumatologia/trauma-14/04_yesos-seriados-ponseti__bailey-love_p599.jpg', label: 'Yesos seriados del método de Ponseti', credit: 'Bailey & Love 27.ª ed., Fig. 39.30' },
      ],
      steps: [
        { note: 'Perthes: cabeza densa y colapsada',
          say: 'En la enfermedad de Perthes, la cabeza femoral de un lado se ve más densa, porque el hueso está necrótico, y con el tiempo se colapsa y se fragmenta. Compárala con la cadera sana.' },
        { note: 'Epifisiólisis: la cabeza resbala',
          say: 'En la epifisiólisis, la cabeza femoral se desliza hacia atrás y abajo respecto del cuello. Es el signo del helado caído, en un adolescente.' },
        { note: 'Escoliosis: curva lateral medida con Cobb',
          say: 'Esta es una escoliosis torácica derecha, con un ángulo de Cobb de cuarenta grados. Según el libro, ese rango, entre treinta y cincuenta grados, se maneja con corsé.' },
        { note: 'Ponseti: yesos que corrigen paso a paso',
          say: 'Y aquí la serie de yesos del método de Ponseti, que corrige paso a paso el pie bot. Se empieza cuanto antes.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del niño que cojea o consulta por una deformidad, a su diagnóstico.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Ortopedia infantil: dato, diagnóstico, conducta',
      head: ['Dato', 'Diagnóstico', 'Conducta'],
      rows: [
        { cells: ['Giba costal al inclinarse', 'Escoliosis estructural', 'Rx y grados; corsé de 30 a 50'],
          say: 'Giba costal en el test de Adams: escoliosis verdadera. La conducta depende de los grados.' },
        { cells: ['Recién nacido con pie equinovaro', 'Pie bot', 'Derivar a Ponseti'],
          say: 'Recién nacido con pie equinovaro: pie bot. No es observación ni cirugía inmediata, es derivar para Ponseti.' },
        { cells: ['Preescolar, viral previo, Rx normal', 'Sinovitis transitoria', 'Paracetamol y reposo'],
          say: 'Preescolar con un resfrío reciente, buen estado y radiografía normal: sinovitis transitoria.' },
        { cells: ['Niño bajo, cabeza plana y densa', 'Perthes', 'Derivar a ortopedia'],
          say: 'Niño de talla baja con la cabeza femoral aplanada y densa: Perthes, y lo derivas a ortopedia infantil.' },
        { cells: ['Adolescente obeso, helado caído', 'Epifisiólisis', 'Cirugía urgente'],
          say: 'Adolescente obeso con dolor de cadera y cojera, y el helado caído: epifisiólisis. Necesita cirugía.' },
        { cells: ['Cojera con fiebre', 'Artritis séptica', 'Puncionar'],
          say: 'La trampa: una cojera con fiebre no es una sinovitis. Ahí piensas en artritis séptica y punzas la cadera.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Una niña de 13 años es llevada por su madre porque se le nota un hombro más alto. Al inclinarse hacia adelante se ve una giba costal derecha. La radiografía de columna muestra una escoliosis torácica con un ángulo de Cobb de 38 grados.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Solo ejercicios y observación' },
        { letter: 'B', text: 'Corsé' },
        { letter: 'C', text: 'Artrodesis de columna' },
        { letter: 'D', text: 'Tranquilizar: es una actitud escoliótica' },
        { letter: 'E', text: 'Reposo en cama' },
      ],
      correct: 'B',
      explanation: 'La giba costal con el test de Adams confirma una escoliosis verdadera, no una actitud postural. Con una desviación de 38 grados, entre 30 y 50, corresponde corsé. Los ejercicios y la observación son para menos de 30 grados, y la cirugía para más de 50.',
      say: {
        stem: 'Una niña de trece años con un hombro más alto. Al inclinarse hacia adelante se ve una giba costal derecha, y la radiografía muestra una escoliosis torácica con un Cobb de treinta y ocho grados.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: ejercicios y observación; corsé; artrodesis; tranquilizar porque es una actitud escoliótica; o reposo en cama. Piénsalo.',
        answer: 'Es la B. La giba costal confirma una escoliosis verdadera, y con treinta y ocho grados, entre treinta y cincuenta, se usa corsé. La D es la trampa: la actitud escoliótica no deja giba al inclinarse.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 178',
      stem: 'Niño de 12 años, obeso, refiere dolor de 3 meses en cadera izquierda y claudicación progresiva, que actualmente impide la marcha. Al examen físico presenta dolor a la rotación interna y externa de la cadera izquierda. Se realiza radiografía AP pelvis y caderas, que se muestra a continuación: El diagnóstico es:',
      question: 'El diagnóstico es:',
      options: [
        { letter: 'A', text: 'Displasia del desarrollo de la cadera' },
        { letter: 'B', text: 'Epifisiolisis' },
        { letter: 'C', text: 'Fractura del cuello del fémur' },
        { letter: 'D', text: 'Luxacion de la Cadera izquierda' },
        { letter: 'E', text: 'Necrosis avascular de la cabeza del fémur' },
      ],
      correct: 'B',
      explanation: 'Es una epifisiolisis de la cabeza femoral clásica: un adolescente con claudicación y dolor de cadera, asociada a sobrepeso y obesidad. Además se ve el signo del helado caído.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil dieciséis. Un niño de doce años, obeso, con tres meses de dolor en la cadera izquierda y una cojera que ya le impide caminar. Le duele la rotación interna y externa de la cadera, y se muestra una radiografía de pelvis.',
        question: '¿Cuál es el diagnóstico?',
        options: 'Las opciones: displasia del desarrollo de la cadera; epifisiólisis; fractura del cuello del fémur; luxación de la cadera; o necrosis avascular de la cabeza del fémur. Piénsalo.',
        answer: 'Es la B. Un niño de doce años, obeso, con cojera progresiva y dolor de cadera: epifisiólisis, con el signo del helado caído en la radiografía. La E es la tentación, pero la necrosis avascular de Perthes es de niños más chicos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 105',
      stem: 'Una niña de 5 años presenta dolor en muslo izquierdo, que luego se ubica en la cadera izquierda y que limita su movimiento. Al examen físico está en buenas condiciones. El diagnóstico más probable es:',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Sinovitis transitoria' },
        { letter: 'B', text: 'Atritis séptica' },
        { letter: 'C', text: 'Artritis reumatoidea' },
        { letter: 'D', text: 'Osteomielitis' },
        { letter: 'E', text: 'Tumor de Ewing' },
      ],
      correct: 'A',
      explanation: 'Aunque la sinovitis transitoria suele ser en menores de 5 años, la clínica es compatible, porque la niña está en buenas condiciones.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil dieciséis. Una niña de cinco años con dolor en el muslo izquierdo que luego se ubica en la cadera y limita el movimiento. Al examen, está en buenas condiciones.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: sinovitis transitoria; artritis séptica; artritis reumatoide; osteomielitis; o tumor de Ewing. Piénsalo.',
        answer: 'Es la A. Un niño pequeño, con dolor de cadera y buen estado general, es una sinovitis transitoria. La B es la trampa: la artritis séptica daría fiebre y mal aspecto.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 130',
      stem: 'Niño de 9 años con cojera indolora progresiva de 3 semanas. Rx de cadera: aplanamiento y fragmentación de la cabeza femoral derecha. ¿Cuál es el diagnóstico y conducta?',
      question: '¿Cuál es el diagnóstico y conducta?',
      options: [
        { letter: 'A', text: 'Enfermedad de Legg-Calvé-Perthes: derivar a ortopedia infantil' },
        { letter: 'B', text: 'Sinovitis transitoria: reposo y AINEs' },
        { letter: 'C', text: 'Artritis séptica: hospitalizar y cirugía' },
        { letter: 'D', text: 'Displasia del desarrollo de cadera: arnés de Pavlik' },
        { letter: 'E', text: 'Osteosarcoma: biopsia urgente' },
      ],
      correct: 'A',
      explanation: 'Necrosis avascular de la cabeza femoral en un niño de 4 a 10 años, con radiografía de fragmentación y aplanamiento: enfermedad de Perthes. Se deriva a ortopedia para decidir tratamiento conservador o quirúrgico.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Un niño de nueve años con tres semanas de cojera progresiva e indolora. La radiografía muestra aplanamiento y fragmentación de la cabeza femoral derecha.',
        question: '¿Cuál es el diagnóstico y la conducta?',
        options: 'Las opciones: Perthes, derivar a ortopedia infantil; sinovitis transitoria con reposo y antiinflamatorios; artritis séptica con hospitalización y cirugía; displasia con arnés de Pavlik; o osteosarcoma con biopsia urgente. Piénsalo.',
        answer: 'Es la A. Nueve años, cojera indolora y una cabeza femoral aplanada y fragmentada: enfermedad de Perthes, y se deriva a ortopedia infantil. La B es la trampa: la sinovitis tiene la radiografía normal.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 76',
      stem: 'Recién nacido con pie equino varo bilateral (CTEV) detectado al nacimiento. ¿Cuál es la conducta más adecuada?',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Control en el próximo control de salud infantil' },
        { letter: 'B', text: 'Derivar a ortopedia infantil para inicio de método Ponseti' },
        { letter: 'C', text: 'Hospitalizar para cirugía inmediata' },
        { letter: 'D', text: 'Observación domiciliaria: se corrige solo' },
        { letter: 'E', text: 'Kinesiología ambulatoria y férulas' },
      ],
      correct: 'B',
      explanation: 'Pie equino varo congénito: derivación urgente a ortopedia pediátrica para iniciar el método de Ponseti, con yesos seriados y tenotomía percutánea del Aquiles si hace falta. Debe comenzar en las primeras semanas de vida y es corregible con tratamiento precoz.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Un recién nacido con pie equino varo bilateral, detectado al nacimiento.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: esperar al próximo control infantil; derivar a ortopedia infantil para el método de Ponseti; hospitalizar para cirugía inmediata; observar en la casa porque se corrige solo; o kinesiología con férulas. Piénsalo.',
        answer: 'Es la B. El pie bot se trata con yesos seriados de Ponseti, y mientras antes parta, mejor el resultado. La C es la tentación, porque suena a deformidad quirúrgica, pero hoy la cirugía quedó desplazada. La D es un error: no se corrige solo.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: ortopedia infantil',
      cards: [
        { title: 'Deformidades', tag: 'Diagnóstico precoz', kind: 'key', items: [
          { t: 'Displasia: mientras antes, mejor', d: 'Pavlik, yeso y luego cirugía', say: 'Cerremos con las reglas de oro. En la displasia de cadera, a menor edad, mayor éxito: arnés de Pavlik, luego yeso, y la cirugía para los tardíos.' },
          { t: 'Escoliosis: Adams y grados', d: 'Menos de 30, de 30 a 50, más de 50', say: 'En la escoliosis, el test de Adams confirma que es verdadera, y los grados deciden: observación, corsé o cirugía.' },
          { t: 'Pie bot: Ponseti desde el inicio', d: 'Yesos seriados, no cirugía primero', say: 'En el pie bot, derivas para yesos seriados de Ponseti cuanto antes.' },
        ] },
        { title: 'Niño que cojea', tag: 'La edad decide', kind: 'alert', items: [
          { t: '2 a 4 años: sinovitis', d: 'Radiografía normal, sin fiebre', say: 'En el niño que cojea, la edad decide. De dos a cuatro años, con un resfrío previo, es sinovitis transitoria.' },
          { t: 'Perthes y epifisiólisis', d: '5 a 10 años; 12 a 15 años', say: 'De cinco a diez años, talla baja y cabeza femoral densa: Perthes. De doce a quince, adolescente obeso con helado caído: epifisiólisis. Si te llevas una sola idea de hoy: en un niño que cojea, la edad te dice el diagnóstico y la fiebre te dice que puncionas. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Ortopedia infantil: edad y signo',
    root: N('start', 'Niño con cojera o deformidad', 'Pregunta la edad primero',
      'Un niño con cojera o con una deformidad. En ortopedia infantil, la edad es la clave del diagnóstico.',
      ['Deformidad de columna', N('do', 'Escoliosis', 'Test de Adams',
        'Si es una deformidad de columna, haces el test de Adams. Una giba costal confirma la escoliosis, y los grados deciden el tratamiento.',
        ['Menos de 30 grados', N('ok', 'Ejercicios y observación', 'Control',
          'Con menos de treinta grados, se indican ejercicios y se observa.')],
        ['30 a 50 grados', N('do', 'Corsé', 'Ortesis rígida',
          'Entre treinta y cincuenta grados, se indica corsé.')],
        ['Más de 50 grados', N('refer', 'Cirugía', 'Artrodesis',
          'Con más de cincuenta grados, el tratamiento es quirúrgico, con artrodesis.')],
      )],
      ['Deformidad del pie al nacer', N('refer', 'Pie bot', 'Ponseti',
        'Un recién nacido con el pie en varo, equino, cavo y aducto es un pie bot. Se deriva para yesos seriados de Ponseti desde las primeras semanas.')],
      ['Cojera o dolor de cadera', N('alert', 'Cadera dolorosa del niño', 'Edad y fiebre',
        'Si es una cojera o dolor de cadera, miras la edad, y miras si hay fiebre. Con fiebre, no es una sinovitis: punzas por una artritis séptica.',
        ['2 a 4 años, viral previo', N('ok', 'Sinovitis transitoria', 'Paracetamol y reposo',
          'De dos a cuatro años, con una infección viral previa y radiografía normal: sinovitis transitoria. Paracetamol y reposo.')],
        ['5 a 10 años, talla baja', N('refer', 'Enfermedad de Perthes', 'Derivar a ortopedia',
          'De cinco a diez años, con talla baja y la cabeza femoral aplanada y densa: Perthes. Se deriva a ortopedia infantil.')],
        ['12 a 15 años, obeso', N('refer', 'Epifisiólisis', 'Cirugía: osteosíntesis',
          'De doce a quince años, obeso y en la pubertad, con el signo del helado caído: epifisiólisis, que se opera con osteosíntesis.')],
      )],
    ),
  },
};
