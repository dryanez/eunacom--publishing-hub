// Clase 21.10 — guion docente escrito a mano (ver gastro-01.cjs, gastro-02.cjs y sp-08.cjs para el formato).
// Fuente: books/scripts/dataset_saludpublica.cjs (sp-10).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'sp-10',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Diez criterios para decidir si conviene tamizar, y por qué la sobrevida a cinco años puede engañarte',
      say: 'Bienvenidos. Hoy vemos el tamizaje poblacional: los criterios de Wilson y Jungner que justifican un programa de cribado, y los sesgos que hacen parecer útil un tamizaje que en realidad no salva vidas. Este tema se conecta directo con lo que vimos en pruebas diagnósticas: ahora la pregunta ya no es si el test funciona, sino si conviene aplicarlo a toda una población sana. Partamos por la idea central.',
    },

    {
      type: 'points',
      kicker: 'Qué es tamizar',
      title: 'Tamizaje: clasificar, no diagnosticar',
      cards: [
        { title: 'El objetivo del tamizaje', tag: 'Separar en dos grupos', kind: 'key', items: [
          { t: 'No diagnostica, clasifica', d: 'Alta probabilidad versus baja probabilidad',
            say: 'El tamizaje no busca diagnosticar de forma definitiva. Busca clasificar a personas sin síntomas en dos grupos: los que tienen alta probabilidad de tener la enfermedad, que van a un examen confirmatorio, y los que tienen baja probabilidad.' },
        ] },
        { title: 'De masa y oportunista', tag: 'Dos formas de aplicarlo', kind: 'normal', items: [
          { t: 'Tamizaje de masa', d: 'A toda una cohorte, sin selección individual',
            say: 'El tamizaje de masa se aplica a toda una cohorte demográfica sin seleccionar por riesgo individual, como el Papanicolaou a todas las mujeres de veinticinco a sesenta y cuatro años, o la fenilcetonuria a todos los recién nacidos.' },
          { t: 'Tamizaje oportunista', d: 'Aprovecha una consulta por otro motivo',
            say: 'Y el tamizaje oportunista se hace cuando la persona consulta espontáneamente por otra razón, como tomar la presión arterial en cada control médico, aunque el paciente haya venido por algo completamente distinto.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Criterios de Wilson y Jungner',
      title: 'Diez condiciones para justificar un programa de tamizaje',
      cards: [
        { title: 'Sobre la enfermedad', tag: 'Debe merecer la pena buscarla', kind: 'key', items: [
          { t: 'Problema de salud importante', d: 'Alta prevalencia o morbimortalidad',
            say: 'La OMS adoptó diez criterios de Wilson y Jungner para justificar un tamizaje. Los primeros son sobre la enfermedad: tiene que ser un problema de salud importante, con alta prevalencia o morbimortalidad, y su historia natural tiene que estar bien conocida.' },
          { t: 'Fase preclínica detectable y prolongada', d: 'Si no hay ventana antes de los síntomas, no se puede tamizar',
            say: 'Y tiene que existir una fase presintomática, latente, lo bastante prolongada como para detectarla antes de que aparezcan los síntomas. Sin esa ventana, no hay nada que buscar de forma anticipada.' },
        ] },
        { title: 'Sobre el test y el tratamiento', tag: 'Deben ser útiles de verdad', kind: 'alert', items: [
          { t: 'Test simple, seguro y aceptable', d: 'De alta sensibilidad y bajo costo',
            say: 'Los siguientes criterios son sobre el examen: tiene que ser simple, seguro, aceptable para la población, no invasivo, y de alta sensibilidad.' },
          { t: 'Tratamiento eficaz disponible', d: 'Y mejor en fase precoz que en fase tardía',
            say: 'Y el criterio que más se pregunta: tiene que existir un tratamiento eficaz disponible, y ese tratamiento tiene que dar más beneficio aplicado en la fase precoz que en la fase sintomática. Si no hay ningún beneficio en adelantar el diagnóstico, tamizar solo genera angustia sin ningún provecho.' },
          { t: 'Costo razonable y proceso continuo', d: 'No una campaña de una sola vez',
            say: 'A esto se suma que el costo de encontrar cada caso sea razonable frente al gasto total en salud, y que la búsqueda sea un proceso continuo y regular, no una campaña de una sola vez.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Sesgos del tamizaje',
      title: 'Por qué la sobrevida a cinco años puede engañar',
      nodes: [
        { id: 'tam', col: 0, row: 1, k: 'start', t: 'Se tamiza a una población', s: 'Se compara con no tamizados' },
        { id: 'lead', col: 1, row: 0, k: 'trap', t: 'Sesgo de adelanto', s: 'Lead-time bias' },
        { id: 'leadr', col: 2, row: 0, k: 'alert', t: 'La sobrevida parece mayor', s: 'La muerte no se posterga' },
        { id: 'len', col: 1, row: 2, k: 'trap', t: 'Sesgo de duración', s: 'Length-time bias' },
        { id: 'lenr', col: 2, row: 2, k: 'alert', t: 'Se detectan tumores lentos', s: 'Los agresivos se escapan entre rondas' },
        { id: 'mort', col: 3, row: 1, k: 'good', t: 'Mortalidad específica', s: 'El único indicador que no engaña' },
      ],
      edges: [
        { from: 'tam', to: 'lead' }, { from: 'lead', to: 'leadr' },
        { from: 'tam', to: 'len' }, { from: 'len', to: 'lenr' },
        { from: 'leadr', to: 'mort', label: 'se corrige comparando' },
        { from: 'lenr', to: 'mort', label: 'se corrige comparando' },
      ],
      steps: [
        { show: ['tam'], note: 'Comparar sobrevida entre tamizados y no tamizados es engañoso',
          say: 'Ahora la parte que más se pregunta: cómo saber si un tamizaje realmente funciona. Y aquí hay dos sesgos clásicos que hacen parecer útil un programa que en realidad no cambia nada.' },
        { show: ['lead', 'leadr'], note: 'El diagnóstico se adelanta, pero la muerte no',
          say: 'El sesgo de adelanto, o lead time bias, ocurre porque el tamizaje detecta la enfermedad varios años antes de lo que se habría diagnosticado por síntomas. La sobrevida calculada desde el diagnóstico parece más larga, pero el paciente no vive más tiempo en total: solo vivió más tiempo sabiendo que estaba enfermo. La fecha de la muerte no cambió en absoluto.' },
        { show: ['len', 'lenr'], note: 'Los tumores lentos son más fáciles de pescar',
          say: 'El sesgo de duración, o length time bias, ocurre porque las pruebas periódicas tienen mucha más probabilidad de detectar tumores de crecimiento lento e indolente, que pasan mucho tiempo en fase preclínica. Los tumores agresivos, en cambio, aparecen y progresan entre una ronda de tamizaje y la siguiente, y se escapan. Entonces el grupo tamizado termina lleno de casos de buen pronóstico, y eso sobreestima falsamente el beneficio del test.' },
        { show: ['mort'], note: 'La regla de oro epidemiológica',
          say: 'Por eso, el único indicador que no se deja engañar por ninguno de estos dos sesgos es la reducción de la mortalidad específica por la enfermedad, demostrada en un ensayo clínico aleatorizado. Nunca la sobrevida a cinco años desde el diagnóstico.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora ordenemos todo en un solo árbol, tal como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Los programas de tamizaje chilenos que más se preguntan',
      head: ['Programa', 'Población objetivo', 'Prueba', 'Periodicidad'],
      rows: [
        { cells: ['Cáncer cervicouterino', 'Mujeres de 25 a 64 años', 'Papanicolaou o test de VPH', 'Cada 3 años, o 5 con VPH'],
          say: 'Repasemos los programas chilenos que más se preguntan. Cáncer cervicouterino: mujeres de veinticinco a sesenta y cuatro años, con Papanicolaou cada tres años, o test de virus papiloma cada cinco.' },
        { cells: ['Cáncer de mama', 'Mujeres de 50 a 69 años', 'Mamografía bilateral', 'Cada 2 años'],
          say: 'Cáncer de mama: mujeres de cincuenta a sesenta y nueve años, con mamografía bilateral cada dos años.' },
        { cells: ['Hipotiroidismo y fenilcetonuria', 'Todo recién nacido vivo', 'Gota de sangre en papel filtro', 'Al nacer, universal'],
          say: 'Hipotiroidismo congénito y fenilcetonuria: a todo recién nacido vivo, con una gota de sangre en papel filtro, de forma universal al nacer.' },
        { cells: ['Displasia de caderas', 'Lactantes a los 3 meses', 'Radiografía de pelvis', 'A los 3 meses, universal'],
          say: 'Y displasia del desarrollo de caderas: a los lactantes, con radiografía de pelvis a los tres meses. Fíjate que todos cumplen los mismos criterios: enfermedad prevalente, fase preclínica detectable, y tratamiento que funciona mejor si se aplica temprano.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Un hospital tamiza cáncer pulmonar con tomografía computarizada de baja dosis en fumadores. Un estudio preliminar reporta que los pacientes con cáncer detectado por el tamizaje tienen una sobrevida a 5 años del 60 por ciento, comparado con solo un 20 por ciento en los que se diagnosticaron por síntomas como hemoptisis y baja de peso. Sin embargo, al revisar las defunciones, la mortalidad por cáncer pulmonar en la población tamizada es idéntica a la de la población no tamizada a los 10 años de seguimiento.',
      question: '¿Cuál es el sesgo metodológico que explica este fenómeno?',
      options: [
        { letter: 'A', text: 'Sesgo de adelanto diagnóstico (lead-time bias)' },
        { letter: 'B', text: 'Sesgo de duración (length-time bias)' },
        { letter: 'C', text: 'Factor de confusión no controlado' },
        { letter: 'D', text: 'Sesgo de selección de Berkson' },
        { letter: 'E', text: 'No existe ningún sesgo, el tamizaje realmente funciona' },
      ],
      correct: 'A',
      explanation: 'Es el sesgo de adelanto diagnóstico: la sobrevida calculada desde el diagnóstico aumenta solo porque el tamizaje adelantó el momento en que se supo del cáncer, pero la mortalidad, que es el indicador que no se deja engañar, es idéntica entre tamizados y no tamizados. El diagnóstico se adelantó, pero la muerte no se postergó.',
      say: {
        stem: 'Vamos con un caso. Un hospital tamiza cáncer pulmonar con tomografía de baja dosis en fumadores. Los pacientes con cáncer detectado por tamizaje tienen una sobrevida a cinco años de sesenta por ciento, contra solo veinte por ciento en los diagnosticados por síntomas. Pero al revisar las defunciones, la mortalidad es idéntica entre tamizados y no tamizados a los diez años.',
        question: '¿Cuál es el sesgo metodológico que explica este fenómeno?',
        options: 'Las opciones: sesgo de adelanto diagnóstico, sesgo de duración, factor de confusión no controlado, sesgo de selección de Berkson, o que no existe ningún sesgo. Piénsalo.',
        answer: 'Es la A, sesgo de adelanto diagnóstico. La sobrevida calculada desde el diagnóstico sube solo porque se adelantó el momento en que el paciente supo que tenía cáncer, pero la fecha de la muerte no cambió, y eso se confirma porque la mortalidad es idéntica en ambos grupos. Si fuera sesgo de duración, la pista habría sido que el tamizaje detecta tumores más indolentes, no una sobrevida calculada más larga con la misma mortalidad final.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 6',
      stem: 'Se pregunta cuál es el mejor indicador para determinar si un programa de tamizaje del cáncer de mama es efectivo.',
      question: '¿Cuál es el mejor indicador para determinar si un programa de tamizaje del cáncer de mama es efectivo?',
      options: [
        { letter: 'A', text: 'Tasa de incidencia de cáncer de mama' },
        { letter: 'B', text: 'Tasa de prevalencia de cáncer de mama' },
        { letter: 'C', text: 'Tasa de letalidad de cáncer de mama' },
        { letter: 'D', text: 'Tasa de mortalidad de cáncer de mama' },
        { letter: 'E', text: 'Tasa de positividad de las pruebas de tamizaje' },
      ],
      correct: 'D',
      explanation: 'El indicador válido para evaluar un tamizaje es la reducción de la mortalidad. El tamizaje no reduce la incidencia, porque no evita que aparezca el cáncer, solo lo detecta antes; y la sobrevida o la letalidad calculadas desde el diagnóstico pueden estar infladas por el sesgo de adelanto o el de duración.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de agosto de dos mil veintiuno, va directo al punto que acabamos de ver. Preguntan cuál es el mejor indicador para determinar si un programa de tamizaje del cáncer de mama es efectivo.',
        question: '¿Cuál es el mejor indicador para determinar si un programa de tamizaje del cáncer de mama es efectivo?',
        options: 'Las opciones: tasa de incidencia, tasa de prevalencia, tasa de letalidad, tasa de mortalidad, o tasa de positividad de las pruebas.',
        answer: 'Es la D, la tasa de mortalidad. El tamizaje no reduce la incidencia, porque no evita que el cáncer aparezca, solo lo encuentra antes. Y ni la letalidad ni la sobrevida son indicadores confiables, porque el sesgo de adelanto y el de duración las pueden inflar sin que haya ningún beneficio real. Solo la caída en la mortalidad demuestra que el programa de verdad salva vidas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 72',
      stem: 'Se pregunta a qué tipo de medida corresponde el tamizaje de fenilcetonuria que se hace a todos los recién nacidos en Chile.',
      question: '¿A qué tipo de medida corresponde este tamizaje?',
      options: [
        { letter: 'A', text: 'Promoción de la salud' },
        { letter: 'B', text: 'Protección de la salud' },
        { letter: 'C', text: 'Prevención primaria' },
        { letter: 'D', text: 'Prevención secundaria' },
        { letter: 'E', text: 'Prevención terciaria' },
      ],
      correct: 'D',
      explanation: 'Las pruebas de tamizaje, como la fenilcetonuria neonatal, son prevención secundaria: detectan una enfermedad que ya existe, en su fase preclínica, antes de que produzca síntomas, para tratarla precozmente. No la evitan, como haría la prevención primaria, ni tratan sus secuelas, como la terciaria.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil diecisiete. Preguntan a qué tipo de medida corresponde el tamizaje de fenilcetonuria que se hace a todos los recién nacidos en Chile.',
        question: '¿A qué tipo de medida corresponde este tamizaje?',
        options: 'Las opciones: promoción de la salud, protección de la salud, prevención primaria, prevención secundaria, o prevención terciaria.',
        answer: 'Es la D, prevención secundaria. El tamizaje siempre es prevención secundaria: la enfermedad ya existe, solo que todavía no da síntomas, y lo que haces es encontrarla antes para tratarla a tiempo. Si evitara que la enfermedad apareciera, sería prevención primaria; y si tratara secuelas ya instaladas, sería terciaria.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 122',
      stem: 'Se pregunta cuál es la mejor estrategia para la detección temprana del cáncer testicular en la población en riesgo.',
      question: '¿Cuál es la mejor estrategia para la detección temprana del cáncer testicular?',
      options: [
        { letter: 'A', text: 'Niveles plasmáticos de alfafetoproteína' },
        { letter: 'B', text: 'Consultorios especializados para dolor testicular' },
        { letter: 'C', text: 'Campañas de autoexamen testicular' },
        { letter: 'D', text: 'Ecografías testiculares como prueba de detección' },
        { letter: 'E', text: 'Niveles plasmáticos de gonadotropina coriónica humana' },
      ],
      correct: 'C',
      explanation: 'El autoexamen testicular es la estrategia que cumple los criterios de un tamizaje aplicable a toda la población en riesgo: es simple, no invasivo, de bajo costo y aceptable. La ecografía y los marcadores tumorales son exámenes diagnósticos, no herramientas de tamizaje masivo, y no se recomiendan de rutina en población asintomática.',
      say: {
        stem: 'Y esta pregunta real, del EUNACOM de julio de dos mil veinticuatro. Preguntan cuál es la mejor estrategia para la detección temprana del cáncer testicular en la población en riesgo.',
        question: '¿Cuál es la mejor estrategia para la detección temprana del cáncer testicular?',
        options: 'Las opciones: alfafetoproteína en sangre, consultorios especializados para dolor testicular, campañas de autoexamen testicular, ecografías testiculares como prueba de detección, o gonadotropina coriónica humana en sangre.',
        answer: 'Es la C, las campañas de autoexamen testicular. Recuerda los criterios de Wilson y Jungner: el test de tamizaje tiene que ser simple, no invasivo y aceptable para toda la población en riesgo. La ecografía y los marcadores tumorales sirven para confirmar un hallazgo sospechoso, pero no se piden de rutina a toda la población asintomática, porque no cumplen esos criterios de un test de tamizaje.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Antes de tamizar', tag: 'Wilson y Jungner', kind: 'key', items: [
          { t: 'Fase preclínica detectable', d: 'Y un tratamiento que funcione mejor si se aplica temprano',
            say: 'Cerremos con las reglas de oro. Para justificar un tamizaje necesitas una enfermedad con fase preclínica detectable, y un tratamiento que de verdad funcione mejor aplicado temprano que aplicado tarde.' },
        ] },
        { title: 'Al evaluar un tamizaje', tag: 'Solo la mortalidad no engaña', kind: 'alert', items: [
          { t: 'Desconfía de la sobrevida a 5 años', d: 'Puede estar inflada por adelanto o duración',
            say: 'Y al evaluar si un tamizaje funciona, desconfía siempre de la sobrevida a cinco años, porque el sesgo de adelanto y el de duración la pueden inflar sin ningún beneficio real.' },
          { t: 'Solo la mortalidad específica confirma', d: 'Demostrada en un ensayo clínico aleatorizado',
            say: 'Solo la reducción de la mortalidad específica, demostrada en un ensayo clínico aleatorizado, confirma que el tamizaje realmente sirve. Si te llevas una sola idea de hoy: un buen test no basta, tiene que existir un tratamiento que gane con el tiempo, y el que decide si funcionó es la mortalidad, nunca la sobrevida. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Decidir si un programa de tamizaje está justificado',
    root: N(
      'start', 'Se propone un nuevo programa de tamizaje', '¿Cumple los criterios de Wilson y Jungner?',
      'Antes de implementar cualquier cribado masivo hay que revisar la enfermedad, el test y el tratamiento.',
      ['¿La enfermedad es prevalente y tiene fase preclínica?', N(
        'q', '¿Hay una ventana antes de los síntomas?', 'Historia natural conocida',
        'Sin una fase presintomática prolongada y detectable, no hay nada que tamizar de forma anticipada.',
        ['Sí, hay fase preclínica prolongada', N(
          'ok', 'Cumple el primer filtro', 'Sigue evaluando el test y el tratamiento',
          'La enfermedad es lo bastante frecuente y su historia natural lo permite.',
        )],
        ['No, es rara o de curso fulminante', N(
          'refer', 'Tamizaje no procedente', 'No hay ventana para detectarla antes',
          'Sin fase preclínica detectable, cualquier programa de tamizaje sería inútil.',
        )],
      )],
      ['¿El test y el tratamiento son idóneos?', N(
        'q', '¿El tratamiento precoz da más beneficio que el tardío?', 'El criterio que más se pregunta',
        'Un test excelente no sirve de nada si tratar antes no cambia el pronóstico.',
        ['Sí, y el test es simple y seguro', N(
          'ok', 'Tamizaje justificado', 'Se implementa de forma continua y regular',
          'Cumple los criterios de Wilson y Jungner: se evalúa después con la mortalidad, nunca con la sobrevida.',
        )],
        ['No hay ventaja de tratar temprano', N(
          'alert', 'Tamizaje contraindicado', 'Riesgo de sobrediagnóstico sin beneficio',
          'Diagnosticar antes a alguien sano, sin que eso cambie su pronóstico, solo genera daño y angustia.',
        )],
      )],
    ),
  },
};
