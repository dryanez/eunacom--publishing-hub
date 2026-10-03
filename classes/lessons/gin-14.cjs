// Clase 20.14 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_ginecologia.cjs (gin-14, bloque 4).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gin-14',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'BI-RADS, patología mamaria benigna y los subtipos que deciden el tratamiento',
      say: 'Bienvenido a la clase de hoy. El cáncer de mama es la primera causa de muerte por cáncer en mujeres en Chile, y hoy vas a aprender a leer un informe mamográfico con el sistema BI-RADS, a diferenciar los nódulos benignos que más se preguntan, y a entender por qué el subtipo molecular del tumor cambia todo el tratamiento. Partamos por el tamizaje.',
    },

    {
      type: 'points',
      kicker: 'Tamizaje GES',
      title: '¿A quién y cómo se tamiza?',
      cards: [
        { title: 'Tamizaje poblacional', tag: 'Garantía GES N.º 4', kind: 'key', items: [
          { t: 'Mamografía bilateral', d: 'Cada 2 años, de los 50 a los 69',
            say: 'Empecemos por el tamizaje, porque es lo único que ha demostrado bajar la mortalidad. En Chile, la mamografía bilateral se garantiza cada dos años, entre los cincuenta y los sesenta y nueve años.' },
          { t: 'Alto riesgo genético', d: 'Se parte antes, entre los 30 y 35',
            say: 'Si hay riesgo genético familiar importante, el tamizaje parte antes, entre los treinta y los treinta y cinco años, o diez años antes de la edad del familiar más joven diagnosticado.' },
        ] },
        { title: 'Factores de riesgo mayores', tag: 'BRCA1 y BRCA2', kind: 'alert', items: [
          { t: 'Mutación BRCA1 o BRCA2', d: 'Hasta 80 de cada 100 con el riesgo',
            say: 'Y el factor de riesgo más potente es genético: las mutaciones BRCA uno y BRCA dos, que llevan el riesgo acumulado de cáncer de mama hasta ochenta de cada cien mujeres portadoras.' },
          { t: 'Familiar de 1.er grado', d: 'Sobre todo si fue antes de los 40',
            say: 'También pesa mucho el antecedente familiar directo, en especial si el cáncer fue bilateral, o apareció antes de los cuarenta años.' },
        ] },
        { title: 'Otros factores', tag: 'También se preguntan', kind: 'normal', items: [
          { t: 'Radioterapia torácica joven', d: 'Por ejemplo, tras un linfoma de Hodgkin',
            say: 'También suma la radioterapia en el tórax durante la juventud, como la que se usa para tratar un linfoma de Hodgkin.' },
          { t: 'Hiperplasia atípica previa', d: 'O un carcinoma lobulillar in situ',
            say: 'Y una biopsia previa con hiperplasia ductal atípica, o con carcinoma lobulillar in situ, también marca mayor riesgo a futuro.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'BI-RADS',
      title: 'Leer el informe y decidir la conducta',
      nodes: [
        { id: 'brd0', col: 0, row: 0, k: 'start', t: 'BI-RADS 0', s: 'Estudio incompleto' },
        { id: 'eco', col: 1, row: 0, k: 'mech', t: 'Ecografía complementaria', s: 'Para completar el estudio' },
        { id: 'brd12', col: 0, row: 1, k: 'good', t: 'BI-RADS 1 o 2', s: 'Normal o hallazgo benigno' },
        { id: 'ctrl2', col: 1, row: 1, k: 'good', t: 'Control en 2 años', s: 'Riesgo prácticamente nulo' },
        { id: 'brd3', col: 0, row: 2, k: 'q', t: 'BI-RADS 3', s: 'Probablemente benigno' },
        { id: 'ctrl6', col: 1, row: 2, k: 'good', t: 'Control en 6 meses', s: 'Riesgo menor a 2 de cada 100' },
        { id: 'brd45', col: 0, row: 3, k: 'risk', t: 'BI-RADS 4 o 5', s: 'Sospechoso o muy sospechoso' },
        { id: 'biopsia', col: 1, row: 3, k: 'alert', t: 'Biopsia con aguja gruesa', s: 'Obligatoria, define todo' },
      ],
      edges: [
        { from: 'brd0', to: 'eco' }, { from: 'brd12', to: 'ctrl2' }, { from: 'brd3', to: 'ctrl6' }, { from: 'brd45', to: 'biopsia' },
      ],
      steps: [
        { show: ['brd0'], note: 'Falta información, no es diagnóstico',
          say: 'El sistema BI-RADS ordena toda la conducta. Si el informe dice BI-RADS cero, es que el estudio quedó incompleto, y el paso es pedir una ecografía complementaria.' },
        { show: ['brd12'], note: 'Cero riesgo de cáncer',
          say: 'BI-RADS uno o dos son hallazgos normales o claramente benignos, con cero riesgo de cáncer. Ahí sigues con el control habitual, cada dos años.' },
        { show: ['brd3'], note: 'Riesgo bajo, pero no cero',
          say: 'BI-RADS tres es distinto: probablemente benigno, con un riesgo menor a dos de cada cien. No se biopsia todavía, pero tampoco se espera dos años: se controla a los seis meses.' },
        { show: ['brd45'], note: 'Aquí ya no hay dudas',
          say: 'Y BI-RADS cuatro o cinco es sospechoso o muy sospechoso, con un riesgo que va de dos hasta más de noventa y cinco de cada cien.' },
        { show: ['biopsia'], note: 'Solo la aguja gruesa sirve para esto',
          say: 'Ahí la conducta es una sola: biopsia con aguja gruesa. Y ojo, no cualquier biopsia sirve: la punción con aguja fina solo saca células sueltas, y no te permite diferenciar un carcinoma in situ de uno invasor. Para eso necesitas el cilindro de tejido que da la aguja gruesa, porque además es el que te entrega el panel completo de receptores hormonales, HER2 y Ki-67.' },
        { show: ['biopsia'], note: 'BI-RADS 6: ya no hay nada que discutir',
          say: 'Y un dato final del sistema: BI-RADS seis ya no es una categoría de sospecha, es malignidad confirmada por una biopsia previa. Ahí lo que sigue es planificar el tratamiento, no seguir estudiando.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Patología benigna',
      title: 'Los tres nódulos que más se preguntan',
      cards: [
        { title: 'Fibroadenoma', tag: 'La joven con nódulo móvil', kind: 'criteria', items: [
          { t: 'Firme, móvil, indoloro', d: 'En mujeres de 15 a 35 años',
            say: 'El nódulo benigno más frecuente es el fibroadenoma, en mujeres jóvenes, entre quince y treinta y cinco años. Al tacto es firme, móvil e indoloro, con bordes bien definidos. En la ecografía se ve más ancho que alto, con el eje mayor paralelo a la piel.' },
          { t: 'Se observa si es pequeño', d: 'Se opera si crece o genera dudas',
            say: 'Si es pequeño, de menos de dos a tres centímetros, y estable, se observa. Si crece, o genera dudas, se extirpa.' },
        ] },
        { title: 'Condición fibroquística', tag: '30 a 50 años', kind: 'normal', items: [
          { t: 'Mastalgia cíclica bilateral', d: 'Nodularidad difusa antes de la regla',
            say: 'La segunda es la condición fibroquística, la más frecuente entre los treinta y los cincuenta años: mastalgia cíclica, bilateral, con una nodularidad difusa que muchos describen como bolsa de perdigones, antes de la menstruación. El manejo es sintomático, con sostén y antiinflamatorios.' },
        ] },
        { title: 'Papiloma intraductal', tag: 'Telorrea hemática uniporo', kind: 'alert', items: [
          { t: 'Secreción por un solo poro', d: 'Serohemática, espontánea, sin lactancia',
            say: 'Y la tercera es la causa más frecuente de telorrea con sangre que sale por un solo poro del pezón, de forma espontánea: el papiloma intraductal. Se estudia con ecografía y se reseca el conducto, para descartar un carcinoma papilar detrás.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Subtipos moleculares',
      title: 'El receptor decide el tratamiento',
      cards: [
        { title: 'Luminal A', tag: 'El de mejor pronóstico', kind: 'key', items: [
          { t: 'RE y RP positivos, HER2 negativo', d: 'Hormonoterapia, casi nunca quimioterapia',
            say: 'Con el diagnóstico hecho, lo que decide el tratamiento sistémico es el subtipo molecular. El Luminal A tiene receptores de estrógeno y progesterona positivos, y HER2 negativo. Se trata con hormonoterapia, y rara vez necesita quimioterapia.' },
        ] },
        { title: 'HER2 enriquecido', tag: 'Agresivo, pero con blanco', kind: 'pharma', items: [
          { t: 'HER2 sobreexpresado', d: 'Quimioterapia más trastuzumab',
            say: 'El HER2 enriquecido tiene los receptores hormonales negativos, pero sobreexpresa la proteína HER2. Por eso se trata con quimioterapia más un anticuerpo dirigido, el trastuzumab.' },
        ] },
        { title: 'Luminal B', tag: 'Pronóstico intermedio', kind: 'pharma', items: [
          { t: 'Ki-67 alto o HER2 positivo', d: 'Combina quimioterapia y hormonoterapia',
            say: 'Entre esos dos extremos está el Luminal B: también tiene receptores hormonales positivos, pero con un Ki-67 alto o con HER2 positivo. Por eso combina quimioterapia con hormonoterapia, a diferencia del Luminal A.' },
        ] },
        { title: 'Triple negativo', tag: 'El más agresivo', kind: 'alert', items: [
          { t: 'RE, RP y HER2 negativos', d: 'No responde a hormonas ni a trastuzumab',
            say: 'Y el triple negativo tiene los tres marcadores negativos: no responde ni a la hormonoterapia ni al trastuzumab. Es más frecuente en mujeres jóvenes con mutación BRCA1, y se trata con quimioterapia citotóxica intensiva.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Hormonoterapia',
      title: 'Tamoxifeno o inhibidor de aromatasa',
      cards: [
        { title: 'Tamoxifeno', tag: 'Premenopáusica', kind: 'pharma', items: [
          { t: 'Modulador de receptores', d: 'Bloquea el estrógeno en la mama',
            say: 'Cuando el tumor tiene receptores hormonales positivos, se agrega hormonoterapia. En la premenopáusica se usa el tamoxifeno, un modulador selectivo que bloquea el estrógeno en la mama.' },
          { t: 'Riesgo de endometrio y trombosis', d: 'Exige control ginecológico',
            say: 'Pero fíjate en el costo: el tamoxifeno actúa como estrógeno en el endometrio, y eso sube el riesgo de cáncer endometrial y de trombosis venosa. Por eso toda paciente con tamoxifeno y metrorragia se biopsia.' },
        ] },
        { title: 'Inhibidores de aromatasa', tag: 'Postmenopáusica', kind: 'pharma', items: [
          { t: 'Anastrozol o letrozol', d: 'Bloquean la aromatización periférica',
            say: 'En la postmenopáusica se prefieren los inhibidores de aromatasa, como el anastrozol, que bloquean la conversión de andrógenos a estrógeno en la grasa periférica.' },
          { t: 'Artralgias y osteoporosis', d: 'Piden densitometría y calcio',
            say: 'Su costo es distinto: aceleran la osteoporosis y dan artralgias, así que requieren densitometría ósea y suplemento de calcio y vitamina D.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Cirugía',
      title: 'Conservadora o mastectomía: la regla que no falla',
      nodes: [
        { id: 'peq', col: 0, row: 0, k: 'start', t: 'Tumor pequeño, unifocal', s: 'Buena relación mama-tumor' },
        { id: 'cons', col: 1, row: 0, k: 'good', t: 'Cirugía conservadora', s: 'Tumorectomía o cuadrantectomía' },
        { id: 'rt', col: 2, row: 0, k: 'alert', t: 'Radioterapia obligatoria', s: 'Sobre la mama restante' },
        { id: 'multi', col: 0, row: 2, k: 'risk', t: 'Multicéntrico o grande', s: 'Mala relación mama-tumor' },
        { id: 'mast', col: 1, row: 2, k: 'good', t: 'Mastectomía total', s: 'Con reconstrucción posible' },
        { id: 'gc', col: 2, row: 1, k: 'good', t: 'Ganglio centinela', s: 'Si la axila es negativa' },
      ],
      edges: [
        { from: 'peq', to: 'cons' }, { from: 'cons', to: 'rt', label: 'siempre' },
        { from: 'multi', to: 'mast' }, { from: 'cons', to: 'gc' }, { from: 'mast', to: 'gc' },
      ],
      steps: [
        { show: ['peq', 'cons'], note: 'Misma sobrevida que la mastectomía',
          say: 'Para la cirugía, la regla es simple. Con un tumor pequeño, unifocal, y una buena relación entre el tamaño de la mama y el tumor, se hace cirugía conservadora: tumorectomía o cuadrantectomía. Tiene la misma sobrevida que la mastectomía.' },
        { show: ['rt'], note: 'Sin esto, la recidiva se dispara',
          say: 'Pero fíjate en esto, porque se pregunta mucho: la cirugía conservadora exige siempre radioterapia sobre la mama restante. Sin ella, la recidiva local sube muchísimo.' },
        { show: ['multi', 'mast'], note: 'Cuando conservar no es una opción',
          say: 'Si el tumor es multicéntrico, tiene microcalcificaciones difusas muy extensas, la relación con la mama es mala, o hay una contraindicación para la radioterapia, se hace mastectomía total, con posibilidad de reconstrucción inmediata.' },
        { show: ['gc'], note: 'Evita el linfedema del brazo',
          say: 'Y en cualquiera de los dos casos, si la axila está clínicamente negativa, se hace biopsia del ganglio centinela: se inyecta un radioisótopo o un tinte azul junto al tumor, y se extirpa solo el primer ganglio que lo capta. Si sale negativo, te ahorras el vaciamiento axilar completo, y con eso reduces el linfedema del brazo en más de noventa de cada cien casos.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos el informe BI-RADS y la conducta en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'BI-RADS y patología benigna',
      head: ['Hallazgo', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['BI-RADS 3', 'Control mamográfico en 6 meses', 'Biopsiar de entrada'],
          say: 'Repasemos las trampas. BI-RADS tres: control en seis meses. Biopsiar de entrada es un exceso, porque el riesgo es menor a dos de cada cien.' },
        { cells: ['BI-RADS 4 o 5', 'Biopsia con aguja gruesa', 'PAAF o solo controlar'],
          say: 'BI-RADS cuatro o cinco: biopsia con aguja gruesa siempre. La PAAF no sirve aquí, y controlar sin biopsiar retrasa el diagnóstico.' },
        { cells: ['Nódulo joven, móvil, BI-RADS 2', 'Fibroadenoma: observar o control', 'Extirpación inmediata'],
          say: 'Un nódulo típico de fibroadenoma, con BI-RADS dos, se observa o se controla. Operar de inmediato es tratar de más algo benigno.' },
        { cells: ['Telorrea hemática uniporo', 'Ecografía y resección del conducto', 'Atribuirla a mastopatía fibroquística'],
          say: 'Y telorrea con sangre por un solo poro: se estudia y se reseca el conducto. Atribuirla a la mastopatía fibroquística es el error clásico, porque esa da secreción, pero no hemática ni por un solo poro.' },
        { cells: ['Cirugía conservadora', 'Radioterapia siempre', 'Omitirla si el margen quedó libre'],
          say: 'Y la cirugía conservadora siempre lleva radioterapia. Omitirla, aunque el margen haya quedado libre, es la trampa más repetida del tratamiento quirúrgico.' },
        { cells: ['Receptores + y Ki-67 alto', 'Luminal B: quimioterapia y hormonoterapia', 'Tratarlo solo con hormonoterapia'],
          say: 'Y si el tumor tiene receptores positivos pero un Ki-67 alto, es Luminal B, no Luminal A: necesita quimioterapia además de la hormonoterapia. Tratarlo solo con hormonas es quedarse corto.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 58 años, sin antecedentes, en control de tamizaje GES. Su mamografía bilateral informa un nódulo espiculado de 12 mm en la mama izquierda, con microcalcificaciones agrupadas, clasificado como BI-RADS 5. La paciente está asintomática y solicita saber qué examen sigue.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Control mamográfico en 6 meses' },
        { letter: 'B', text: 'Punción con aguja fina para estudio citológico' },
        { letter: 'C', text: 'Biopsia con aguja gruesa guiada por imagen' },
        { letter: 'D', text: 'Mastectomía total sin confirmación histológica' },
        { letter: 'E', text: 'Resonancia magnética mamaria de control' },
      ],
      correct: 'C',
      explanation: 'BI-RADS 5 tiene más de 95 % de riesgo de malignidad y exige biopsia con aguja gruesa, que permite diferenciar carcinoma in situ de invasor y obtener el panel de receptores. El control a 6 meses es para BI-RADS 3; la PAAF no aporta lo suficiente; y operar sin biopsia previa es mala práctica.',
      say: {
        stem: 'Vamos con un caso. Mujer de cincuenta y ocho años, sin antecedentes, en control de tamizaje GES. Su mamografía muestra un nódulo espiculado de doce milímetros en la mama izquierda, con microcalcificaciones agrupadas, clasificado como BI-RADS cinco. Está asintomática y pregunta qué examen sigue.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: control en seis meses, punción con aguja fina, biopsia con aguja gruesa guiada por imagen, mastectomía sin confirmación, o resonancia de control. Piénsalo.',
        answer: 'Es la C. BI-RADS cinco tiene más de noventa y cinco de cada cien de probabilidad de ser cáncer, y eso exige biopsia con aguja gruesa. El control a seis meses es para el BI-RADS tres, no para este. La punción con aguja fina no alcanza para diferenciar in situ de invasor. Y operar sin biopsia previa, directamente, es mala práctica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 178',
      stem: 'Una paciente de 41 años presenta un nódulo mamario derecho, de 2 cm de diámetro, que se autopalpó hace 2 meses. Al examen físico tiene consistencia dura e irregular. Cuenta con una mamografía, que es informada como BI-RADS 4.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Controlar con nueva mamografía en 1 año' },
        { letter: 'B', text: 'Solicitar ecotomografía mamaria' },
        { letter: 'C', text: 'Solicitar resonancia magnética de mama' },
        { letter: 'D', text: 'Realizar biopsia con aguja gruesa' },
        { letter: 'E', text: 'Realizar biopsia estereotáxica' },
      ],
      correct: 'E',
      explanation: 'BI-RADS 4 se biopsia siempre. Con aguja gruesa si el nódulo es palpable, o estereotáxica si no lo es; ambas son aceptables, pero la estereotáxica suele ser más fidedigna cuando el caso lo permite.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de diciembre de dos mil dieciocho. Paciente de cuarenta y un años, con un nódulo de dos centímetros que se autopalpó hace dos meses, de consistencia dura e irregular. Su mamografía informa BI-RADS cuatro.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: controlar en un año, pedir ecografía mamaria, pedir resonancia, hacer biopsia con aguja gruesa, o hacer biopsia estereotáxica. Piénsalo.',
        answer: 'Es la E. Con BI-RADS cuatro, la biopsia es obligatoria, sin excepción. Tanto la aguja gruesa como la estereotáxica son aceptables, pero acá se prefiere la estereotáxica. Lo que no es aceptable es controlar, pedir más imágenes sin biopsiar, o dejarlo pasar un año.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 161',
      stem: 'Una paciente de 24 años se autopalpa un nódulo mamario de 2 cm, indoloro, que no está adherido a la piel ni a planos profundos. Se solicita una ecografía mamaria que muestra una lesión bien delimitada, de 25 mm de diámetro, homogénea, con una fina pared que la rodea.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Quiste mamario' },
        { letter: 'B', text: 'Fibroadenoma' },
        { letter: 'C', text: 'Cáncer de mama' },
        { letter: 'D', text: 'Papiloma mamario' },
        { letter: 'E', text: 'Tumor filoides' },
      ],
      correct: 'B',
      explanation: 'Mujer joven con nódulo firme, móvil, bien delimitado y homogéneo en la ecografía: es el cuadro clásico del fibroadenoma, el tumor sólido benigno más frecuente entre los 15 y los 35 años.',
      say: {
        stem: 'Una más, del EUNACOM de julio de dos mil diecinueve. Paciente de veinticuatro años que se autopalpa un nódulo de dos centímetros, indoloro, no adherido a la piel. La ecografía muestra una lesión bien delimitada, de veinticinco milímetros, homogénea, con una pared fina alrededor.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: quiste mamario, fibroadenoma, cáncer de mama, papiloma mamario, o tumor filoides. Piénsalo.',
        answer: 'Es la B. Todo calza con el fibroadenoma: mujer joven, nódulo bien delimitado, homogéneo, con pared fina. El quiste se ve anecoico, no homogéneo sólido; el cáncer se ve irregular; y el papiloma da telorrea, que aquí no aparece.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 153',
      stem: 'Una mujer de 45 años se realiza una mamografía, que muestra microcalcificaciones agrupadas y espiculadas en el cuadrante superior externo de la mama derecha, de 2 cm de diámetro. Su examen mamario no tiene alteraciones y cuenta con una mamografía previa, de hace 2 años, informada como BI-RADS 2.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Pedir ecotomografía mamaria' },
        { letter: 'B', text: 'Realizar biopsia con aguja gruesa' },
        { letter: 'C', text: 'Programar biopsia estereotáxica' },
        { letter: 'D', text: 'Solicitar resonancia magnética mamaria' },
        { letter: 'E', text: 'Realizar control mamográfico en un año' },
      ],
      correct: 'C',
      explanation: 'Las microcalcificaciones agrupadas y espiculadas corresponden a un BI-RADS 4 a 5 actual, sin importar que hace 2 años fuera BI-RADS 2. Como el examen mamario es normal, la lesión no es palpable, así que la biopsia se hace guiada por estereotaxia, no con aguja gruesa a mano alzada.',
      say: {
        stem: 'Una pregunta real más, del EUNACOM de julio de dos mil diecinueve. Mujer de cuarenta y cinco años, cuya mamografía muestra microcalcificaciones agrupadas y espiculadas, de dos centímetros, en el cuadrante superior externo. Su examen mamario es normal, y tiene una mamografía de hace dos años informada como BI-RADS dos.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: pedir ecografía mamaria, biopsia con aguja gruesa, biopsia estereotáxica, resonancia mamaria, o control en un año. Piénsalo.',
        answer: 'Es la C. Ojo con la trampa: el BI-RADS dos es de hace dos años, la imagen de hoy ya es otra, con microcalcificaciones espiculadas que la hacen BI-RADS cuatro a cinco. Y como el examen físico es normal, la lesión no se palpa, así que se biopsia guiada por estereotaxia, no con aguja gruesa a mano alzada.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Tamizaje y BI-RADS', tag: 'La conducta según categoría', kind: 'key', items: [
          { t: 'Mamografía bienal', d: 'De los 50 a los 69 años',
            say: 'Cerremos con las reglas de oro. La mamografía se hace cada dos años, entre los cincuenta y los sesenta y nueve.' },
          { t: 'BI-RADS 4 o 5', d: 'Biopsia con aguja gruesa, sin excepción',
            say: 'Y BI-RADS cuatro o cinco es biopsia con aguja gruesa, sin excepción; la PAAF no sirve para esto.' },
        ] },
        { title: 'Tratamiento', tag: 'Lo que no puede faltar', kind: 'pharma', items: [
          { t: 'Cirugía conservadora', d: 'Exige radioterapia siempre',
            say: 'La cirugía conservadora exige radioterapia siempre, sin excepción.' },
          { t: 'El subtipo decide el fármaco', d: 'Hormonoterapia, trastuzumab o quimioterapia',
            say: 'Y el subtipo molecular decide el fármaco: hormonoterapia en el Luminal A, quimioterapia más hormonoterapia en el Luminal B, trastuzumab en el HER2 enriquecido, y quimioterapia intensiva en el triple negativo.' },
          { t: 'Ganglio centinela negativo', d: 'Evita el vaciamiento axilar completo',
            say: 'Y con el ganglio centinela negativo, te ahorras el vaciamiento axilar y su linfedema.' },
        ] },
        { title: 'Patología benigna', tag: 'No todo es cáncer', kind: 'normal', items: [
          { t: 'Fibroadenoma en la joven', d: 'Nódulo firme, móvil, indoloro',
            say: 'El fibroadenoma es el nódulo típico de la mujer joven: firme, móvil e indoloro.' },
          { t: 'Papiloma en la telorrea uniporo', d: 'La causa benigna más frecuente',
            say: 'Y el papiloma intraductal es la causa benigna más frecuente de telorrea hemática por un solo poro. Si te llevas una sola idea de hoy: el número BI-RADS manda la conducta, y solo el cuatro y el cinco biopsian. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'BI-RADS: leer el informe y decidir',
    root: N('start', 'Informe mamográfico', '¿Qué categoría BI-RADS informa?',
      'Paciente con una mamografía o ecografía mamaria ya realizada. El número BI-RADS es lo primero que hay que leer.',
      ['BI-RADS 0', N('do', 'Ecografía complementaria', 'El estudio quedó incompleto',
        'BI-RADS cero significa que el estudio no alcanzó a concluir: se completa con ecografía.')],
      ['BI-RADS 1 o 2', N('ok', 'Control en 2 años', 'Riesgo prácticamente nulo',
        'Normal o claramente benigno: sigue el control habitual, cada dos años.')],
      ['BI-RADS 3', N('q', '¿Hay factores de riesgo?', 'Igual se controla, no se biopsia',
        'Probablemente benigno, con menos de dos de cada cien de riesgo. Aquí no se biopsia todavía.',
        ['No', N('ok', 'Control mamográfico en 6 meses', 'Vigilar la estabilidad de la lesión',
          'Sin factores de riesgo agregados, control estricto a los seis meses.')],
        ['Sí, riesgo genético alto', N('refer', 'Considerar biopsia igual', 'Individualizar con el equipo de mama',
          'Con riesgo genético importante, se puede adelantar la biopsia, evaluando el caso con el equipo de mama.')])],
      ['BI-RADS 4 o 5', N('alert', 'Biopsia con aguja gruesa', 'Nunca PAAF, nunca solo observar',
        'Sospechoso o muy sospechoso: biopsia con aguja gruesa siempre, porque permite diferenciar in situ de invasor y medir los receptores.')]),
  },
};
