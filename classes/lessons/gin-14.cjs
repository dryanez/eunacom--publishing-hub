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
          say: 'Y BI-RADS cuatro o cinco es sospechoso o muy sospechoso, con un riesgo que va de dos hasta más de noventa y cinco de cada cien. Mira esta mamografía: una masa espiculada, sospechosa. Y estas microcalcificaciones finas y agrupadas también lo son.',
          photos: [
            { src: 'biblioteca/13_ginecologia/gin-14/01_mamografia_carcinoma__bailey_p882.jpg', label: 'Masa espiculada', at: 'Mira esta mamografía', credit: 'Bailey & Love 27.ª ed., Fig. 53.2' },
            { src: 'biblioteca/13_ginecologia/gin-14/01_microcalcificaciones-sospechosas-mamogra_alt2__amir-gyo_p135.jpg', label: 'Microcalcificaciones', at: 'estas microcalcificaciones', credit: 'Manual AMIR Ginecología y Obstetricia, p. 135' },
          ] },
        { show: ['biopsia'], note: 'Solo la aguja gruesa sirve para esto',
          say: 'Ahí la conducta es una sola: biopsia con aguja gruesa. Y ojo, no cualquier biopsia sirve: la punción con aguja fina solo saca células sueltas, y no te permite diferenciar un carcinoma in situ de uno invasor. Para eso necesitas el cilindro de tejido que da la aguja gruesa, porque además es el que te entrega el panel completo de receptores hormonales, HER2 y Ki-67.' },
        { show: ['biopsia'], note: 'BI-RADS 6: ya no hay nada que discutir',
          say: 'Y un dato final del sistema: BI-RADS seis ya no es una categoría de sospecha, es malignidad confirmada por una biopsia previa. Ahí lo que sigue es planificar el tratamiento, no seguir estudiando.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Signos en la piel',
      title: 'Piel de naranja y carcinoma inflamatorio',
      cards: [
        { title: 'Lo que se ve al examen', tag: 'Compromiso de la piel', kind: 'alert', items: [
          { t: 'Piel de naranja', d: 'Edema por compromiso de los linfáticos de la piel',
            say: 'Antes del tratamiento, dos signos de la piel que se preguntan. Mira esta mama: la piel con aspecto de cáscara de naranja indica compromiso de los linfáticos de la piel.',
            photo: { src: 'biblioteca/13_ginecologia/gin-14/02_piel_de_naranja__bailey_p895.jpg', label: 'Piel de naranja', at: 'Mira esta mama', credit: 'Bailey & Love 27.ª ed., Fig. 53.24' } },
          { t: 'Carcinoma inflamatorio', d: 'Mama roja y edematosa que simula una mastitis',
            say: 'Y el carcinoma inflamatorio: mira esta imagen, una mama enrojecida y edematosa que puede confundirse con una mastitis. Si no responde al tratamiento antibiótico, se biopsia. Fíjate en cómo se ve, porque así puede aparecer en el examen.',
            photo: { src: 'biblioteca/13_ginecologia/gin-14/04_carcinoma-inflamatorio__cto-gyo_p20.jpg', label: 'Carcinoma inflamatorio', at: 'mira esta imagen', credit: 'Manual CTO Ginecología y Obstetricia 14.ª ed., p. 20' } },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Ecografía mamaria',
      title: 'Cuándo se pide y cómo se lee',
      cards: [
        { title: 'Indicaciones', tag: 'No es tamizaje', kind: 'key', items: [
          { t: 'Nódulo o dolor focal en menores de 30-35', d: 'Mama densa: la mamografía rinde poco',
            say: 'La ecografía mamaria no se usa como tamizaje en la población general. Sus indicaciones son: el estudio inicial de un nódulo palpable o dolor focal en menores de treinta a treinta y cinco años, por la mama densa; caracterizar una lesión vista en la mamografía, como quiste contra sólido; las mamas densas como complemento; y la guía de punción o biopsia con aguja gruesa.' },
          { t: 'Mastitis, absceso y axila', d: 'Evalúa adenopatías',
            say: 'También sirve ante una mastitis o un absceso, y para evaluar la axila en busca de adenopatías.' },
        ] },
        { title: 'Criterios benignos', tag: 'Más ancha que alta', kind: 'normal', items: [
          { t: 'Oval o redondo, márgenes netos', d: 'Eje mayor paralelo a la piel, ecos homogéneos',
            say: 'Un nódulo benigno es oval o redondo, con su eje mayor paralelo a la piel, es decir, más ancho que alto, con márgenes netos y ecogenicidad homogénea.' },
          { t: 'Quiste simple', d: 'Anecoico con refuerzo posterior; punción solo si es sintomático',
            say: 'El quiste simple es anecoico, con refuerzo acústico posterior, y se punciona solo si es sintomático. Mira este quiste: un área negra, de paredes finas, y más brillante por detrás.',
            photo: { src: 'biblioteca/13_ginecologia/gin-14/05_quiste-simple-mama-eco__rumack_p821.jpg', label: 'Quiste simple (eco)', at: 'Mira este quiste', credit: 'Diagnostic Ultrasound (Rumack), Fig. 20-40' } },
        ] },
        { title: 'Criterios de sospecha', tag: 'Más alta que ancha', kind: 'alert', items: [
          { t: 'Irregular, espiculado, más alto que ancho', d: 'Hipoecoico con sombra acústica',
            say: 'La sospecha de malignidad es la forma irregular, los márgenes espiculados o angulados, más alto que ancho, hipoecoico y con sombra acústica posterior. Mira este nódulo de bordes irregulares: es el aspecto sospechoso. Suman las microcalcificaciones y una adenopatía axilar de aspecto patológico.',
            photo: { src: 'biblioteca/13_ginecologia/gin-14/02_nodulo-maligno-vs-benigno-eco-mama__cto-gyo_p9.jpg', label: 'Nódulo de bordes irregulares', at: 'Mira este nódulo', credit: 'Manual CTO Ginecología y Obstetricia 14.ª ed., p. 9' } },
          { t: 'El informe usa BI-RADS', d: '2 benigno, 3 control a 6 meses, 4-5 biopsia',
            say: 'El informe ecográfico también usa las categorías BI-RADS: dos es benigno, tres probablemente benigno con control a los seis meses, y cuatro o cinco, biopsia. Con eso decides entre seguimiento, biopsia con aguja gruesa o derivación a mastología.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Patología benigna',
      title: 'Los tres nódulos que más se preguntan',
      cards: [
        { title: 'Fibroadenoma', tag: 'La joven con nódulo móvil', kind: 'criteria', items: [
          { t: 'Firme, móvil, indoloro', d: 'En mujeres de 15 a 35 años',
            say: 'El nódulo benigno más frecuente es el fibroadenoma, en mujeres jóvenes, entre quince y treinta y cinco años. Al tacto es firme, móvil e indoloro, con bordes bien definidos. En la ecografía se ve más ancho que alto, con el eje mayor paralelo a la piel. Mira esta ecografía: un nódulo ovalado, de bordes lisos y bien delimitado.',
            photo: { src: 'biblioteca/13_ginecologia/gin-14/03_fibroadenoma-mamografia__cto-radiologia_p132.jpg', label: 'Fibroadenoma (eco)', at: 'Mira esta ecografía', credit: 'Manual CTO Radiología 14.ª ed., p. 132' } },
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
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'BI-RADS y biopsia',
      images: [
        { src: 'animaciones/gin-14/A1_birads.mp4', label: 'Del hallazgo a la conducta', credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Cuanto más sospechoso, más pronto la aguja',
          say: 'Una masa espiculada y microcalcificaciones agrupadas son hallazgos sospechosos. El informe BI-RADS ordena la conducta: cero pide una ecografía complementaria; uno y dos, control cada dos años; tres, control a los seis meses; cuatro y cinco, biopsia con aguja gruesa, porque la aguja fina solo da células sueltas. Y BI-RADS seis es malignidad ya confirmada: se planifica el tratamiento.' },
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
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2025 · Pregunta 166",
      "stem": "Una paciente de 47 años acude a control ginecológico, observándose salida de secreción escasa por el pezón a la compresión, que ella no había notado previamente. Se solicita mamografía, que es informada como BI-RADS 2, y ecografía mamaria, que muestra ectasia ductal retroareolar, BI-RADS 2.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Solicitar mamografía con compresión focal"
        },
        {
          "letter": "B",
          "text": "Realizar control mamográfico en un año"
        },
        {
          "letter": "C",
          "text": "Solicitar resonancia magnética nuclear de mama"
        },
        {
          "letter": "D",
          "text": "Indicar mupirocina tópica"
        },
        {
          "letter": "E",
          "text": "Resolver mediante resección quirúrgica"
        }
      ],
      "correct": "B",
      "explanation": "BI-RADS 2 es un hallazgo benigno (aquí, ectasia ductal) y se maneja con control habitual en 1 a 2 años. La compresión focal o la resonancia aclaran estudios incompletos o dudosos; BI-RADS 3 se controla en 6 meses y BI-RADS 4 o 5 exige biopsia.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil veinticinco. Mujer de cuarenta y siete años a la que, en un control, se le exprime una secreción escasa por el pezón. La mamografía es birads dos, y la ecografía muestra una ectasia ductal retroareolar, también birads dos.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: mamografía con compresión focal, control mamográfico en un año, resonancia de mama, mupirocina tópica, o resección quirúrgica. Piénsalo.",
        "answer": "Es la B. Birads dos es benigno, y la ectasia ductal explica la secreción: se sigue con la mamografía anual de tamizaje. La compresión focal tienta, pero sirve para aclarar un hallazgo dudoso, y aquí el estudio ya está completo."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2025 · Pregunta 172",
      "stem": "Una mujer de 34 años, con vacunación completa contra el virus papiloma humano, se realiza un PAP, que es informado como muestra satisfactoria sin presencia de atipias celulares, y una prueba de detección de virus papiloma humano que es informada como positiva para VPH de alto riesgo, serotipo 56.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Indicar refuerzo de la vacunación contra el VPH"
        },
        {
          "letter": "B",
          "text": "Realizar control de PAP en un año"
        },
        {
          "letter": "C",
          "text": "Realizar colposcopía"
        },
        {
          "letter": "D",
          "text": "Repetir el PAP en este momento"
        },
        {
          "letter": "E",
          "text": "Realizar conización cervical"
        }
      ],
      "correct": "B",
      "explanation": "A diferencia de los genotipos 16 y 18, que se derivan a colposcopía de inmediato por ser los más agresivos, otros genotipos de alto riesgo, como el 56, con un PAP normal se manejan con observación y control en un año.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil veinticinco, sobre tamizaje. Mujer de treinta y cuatro años, con la vacuna contra el VPH completa, con un Papanicolau normal y una prueba de VPH positiva para un genotipo de alto riesgo, el cincuenta y seis.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: reforzar la vacuna, controlar el Papanicolau en un año, colposcopía, repetir el Papanicolau ahora, o conización. Piénsalo.",
        "answer": "Es la B. Solo el dieciséis y el dieciocho van directo a colposcopía; otro genotipo de alto riesgo, con Papanicolau normal, se controla en un año. La colposcopía tienta porque el VPH salió positivo, pero aquí sería sobretratar."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2025 · Pregunta 41",
      "stem": "Mujer de 45 años con ecografía mamaria informada como BI-RADS 0.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Completar el estudio con mamografía bilateral"
        },
        {
          "letter": "B",
          "text": "Biopsia core guiada por ecografía"
        },
        {
          "letter": "C",
          "text": "Control en 6 meses"
        },
        {
          "letter": "D",
          "text": "Alta y control anual"
        },
        {
          "letter": "E",
          "text": "Resonancia magnética mamaria de urgencia"
        }
      ],
      "correct": "A",
      "explanation": "BI-RADS 0 significa estudio incompleto: no se puede categorizar y se debe complementar con otra imagen. En una mujer de 45 años, la ecografía es complementaria de la mamografía, que es el examen base, por lo que se completa con mamografía bilateral antes de decidir biopsia o seguimiento.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil veinticinco. Mujer de cuarenta y cinco años con una ecografía mamaria informada como BI RADS cero.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: mamografía bilateral, biopsia core, control en seis meses, alta, o resonancia urgente. Piénsalo.",
        "answer": "Es la A. BI RADS cero es un estudio incompleto, y a esta edad se completa con mamografía. La biopsia tienta, pero todavía no hay una lesión categorizada como sospechosa."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2015 · Pregunta 27",
      "stem": "Mujer de 60 años presenta aumento de volumen en la axila derecha, de 4 cm de diámetro, indoloro, de consistencia dura y adherido a planos profundos.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Hidrosadenitis"
        },
        {
          "letter": "B",
          "text": "Cáncer de mama"
        },
        {
          "letter": "C",
          "text": "Cáncer de pulmón"
        },
        {
          "letter": "D",
          "text": "Lipoma"
        },
        {
          "letter": "E",
          "text": "Tuberculosis ganglionar"
        }
      ],
      "correct": "B",
      "explanation": "Una adenopatía axilar dura, indolora y fija en una mujer de 60 años corresponde, hasta demostrar lo contrario, a metástasis de un cáncer de mama, aunque no se palpe el tumor primario. Debe estudiarse con mamografía, ecografía y biopsia. La hidrosadenitis es dolorosa y supurativa, y el lipoma es blando y móvil.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil quince. Mujer de sesenta años con un aumento de volumen en la axila derecha, de cuatro centímetros, indoloro, duro y adherido a planos profundos.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: hidrosadenitis, cáncer de mama, cáncer de pulmón, lipoma, o tuberculosis ganglionar. Piénsalo.",
        "answer": "Es la B. Una adenopatía axilar dura y fija en una mujer de esta edad es metástasis de cáncer de mama hasta demostrar lo contrario, aunque no palpes el tumor. La tuberculosis ganglionar tienta, pero suele ser cervical, y aquí la edad y el sitio apuntan a la mama."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Agosto 2021 · Pregunta 50",
      "stem": "Mujer de 35 años presenta un nódulo mamario desde hace 8 meses. La ecografía mamaria muestra un tumor de aspecto sólido, de bordes bien delimitados, sin refuerzo posterior, clasificado como BI-RADS 3.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Mastopatía fibroquística"
        },
        {
          "letter": "B",
          "text": "Papiloma ductal"
        },
        {
          "letter": "C",
          "text": "Fibroadenoma"
        },
        {
          "letter": "D",
          "text": "Tumor phyllodes"
        },
        {
          "letter": "E",
          "text": "Carcinoma ductal"
        }
      ],
      "correct": "C",
      "explanation": "Un nódulo sólido, bien delimitado y probablemente benigno (BI-RADS 3) en una mujer joven corresponde con mayor probabilidad a un fibroadenoma, el tumor benigno de mama más frecuente entre los 15 y 35 años. El tumor phyllodes es mucho menos frecuente, de crecimiento rápido y mayor tamaño.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de agosto de dos mil veintiuno. Mujer de treinta y cinco años con un nódulo mamario de ocho meses de evolución. La ecografía muestra un tumor sólido, de bordes bien delimitados, sin refuerzo posterior, clasificado BI-RADS tres.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: mastopatía fibroquística, papiloma ductal, fibroadenoma, tumor phyllodes, o carcinoma ductal. Piénsalo.",
        "answer": "Es la C. Un nódulo sólido, bien delimitado y probablemente benigno en una mujer joven es un fibroadenoma. El tumor phyllodes tienta porque se le parece en la ecografía, pero es mucho menos frecuente y crece rápido hasta hacerse grande."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2016 · Pregunta 134",
      "stem": "Mujer de 55 años se realiza una mamografía que es informada como BI-RADS 4, con microcalcificaciones agrupadas.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Ecotomografía mamaria"
        },
        {
          "letter": "B",
          "text": "Biopsia estereotáxica"
        },
        {
          "letter": "C",
          "text": "Resonancia magnética"
        },
        {
          "letter": "D",
          "text": "Control mamográfico en 6 meses"
        },
        {
          "letter": "E",
          "text": "Mastectomía parcial"
        }
      ],
      "correct": "B",
      "explanation": "BI-RADS 4 implica sospecha de malignidad y exige biopsia. Las microcalcificaciones agrupadas no palpables y habitualmente no visibles en ecografía se biopsian con guía estereotáxica (mamográfica), que permite el diagnóstico precoz de un carcinoma in situ o invasor. El control en 6 meses es la conducta del BI-RADS 3.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil dieciséis. Mujer de cincuenta y cinco años cuya mamografía se informa como BI-RADS cuatro, con microcalcificaciones agrupadas.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: ecotomografía mamaria, biopsia estereotáxica, resonancia magnética, control mamográfico en seis meses, o mastectomía parcial. Piénsalo.",
        "answer": "Es la B. BI-RADS cuatro obliga a biopsiar, y las microcalcificaciones, que no se palpan ni se ven bien en la ecografía, se biopsian con guía estereotáxica. El control en seis meses tienta, pero esa es la conducta del BI-RADS tres, no del cuatro."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Enero 2023 · Pregunta 179",
      "stem": "Paciente con una lesión mamográfica clasificada como BI-RADS 3.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Biopsia core guiada por imagen"
        },
        {
          "letter": "B",
          "text": "Ecografía mamaria dirigida"
        },
        {
          "letter": "C",
          "text": "Resonancia magnética mamaria bilateral"
        },
        {
          "letter": "D",
          "text": "Mamografía de control en 6 meses"
        },
        {
          "letter": "E",
          "text": "Control en 1 año sin exámenes"
        }
      ],
      "correct": "D",
      "explanation": "BI-RADS 3 significa hallazgo probablemente benigno, con riesgo de malignidad menor de 2%. Se maneja con seguimiento a corto plazo: mamografía de control a los 6 meses y luego periódicamente hasta completar 2 años de estabilidad. La biopsia se reserva para BI-RADS 4 y 5, o si la lesión cambia en el seguimiento.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de enero de dos mil veintitrés. Paciente con una lesión en la mamografía clasificada como BI-RADS tres.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: biopsia core, ecografía dirigida, resonancia bilateral, mamografía de control en seis meses, o control en un año sin exámenes. Piénsalo.",
        "answer": "Es la D. BI-RADS tres es probablemente benigno, con menos de dos por ciento de riesgo, y se controla con mamografía a los seis meses. La biopsia tienta para quedar tranquilo, pero se reserva para el BI-RADS cuatro y cinco."
      }
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
