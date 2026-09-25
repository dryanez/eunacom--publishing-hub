// Clase 16.14 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_dermatologia.cjs (derma-14, CBC vs CEC).
// El código de la clase (1.08.1.001) solo devuelve 1 pregunta real de confianza suficiente, y es en
// realidad de anemia de enfermedades crónicas (falso positivo de código). Se buscó por tema con
// --search "basocelular|espinocelular|carcinoma cutáneo|perlad|telangiectasia|úlcera de Rodent|
// escamoso" y se encontraron 2 preguntas reales que sí son del tema y que no dependen de una
// fotografía para responderse: EUNACOM Diciembre 2019 P80 (carcinoma espinocelular en minero,
// código 6.01.1.003) y EUNACOM Enero 2023 P112 (carcinoma basocelular palpebral, código 6.02.1.028).
// Se usan ambas.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'derma-14',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'La pápula perlada que casi nunca mata, y la placa costrosa que sí puede hacerlo',
      say: 'Bienvenidos. Hoy vemos los dos cánceres de piel no melanoma, que juntos son el cáncer más frecuente del ser humano: el carcinoma basocelular y el carcinoma espinocelular. Se parecen en que los dos nacen del daño solar acumulado, pero se comportan distinto, y esa diferencia de comportamiento es exactamente lo que el EUNACOM pregunta. Partamos por el más frecuente de los dos.',
    },

    {
      type: 'flow',
      kicker: 'Carcinoma basocelular',
      title: 'La pápula perlada: mucha destrucción local, casi ninguna metástasis',
      nodes: [
        { id: 'que', col: 0, row: 1, k: 'cause', t: 'Quemaduras solares en la infancia', s: 'Exposición intermitente e intensa' },
        { id: 'shh', col: 1, row: 1, k: 'mech', t: 'Mutación en la vía Sonic Hedgehog', s: 'Célula basal pluripotencial' },
        { id: 'per', col: 2, row: 0, k: 'effect', t: 'Pápula perlada con telangiectasias', s: 'Brillante, translúcida, borde arrollado' },
        { id: 'ulc', col: 2, row: 1, k: 'effect', t: 'Úlcera de Rodent', s: 'Se ulcera al centro con el tiempo' },
        { id: 'met', col: 3, row: 0, k: 'good', t: 'Metástasis prácticamente nulas', s: 'Menos de 0,01% de los casos' },
        { id: 'des', col: 3, row: 1, k: 'risk', t: 'Destrucción local si no se trata', s: 'Invade cartílago, hueso u órbita' },
      ],
      edges: [
        { from: 'que', to: 'shh' }, { from: 'shh', to: 'per' }, { from: 'per', to: 'ulc' },
        { from: 'ulc', to: 'met' }, { from: 'ulc', to: 'des', label: 'si no se trata' },
      ],
      steps: [
        { show: ['que'], note: 'El más frecuente de todos los cánceres de piel',
          say: 'Empecemos por el carcinoma basocelular, que es el ochenta por ciento de los cánceres de piel no melanoma, y el cáncer humano más común en todo el mundo. Igual que el melanoma, se asocia a las quemaduras solares agudas e intermitentes en la infancia y la adolescencia.' },
        { show: ['shh'], note: 'Nace de la célula basal, con una vía molecular propia',
          say: 'A nivel molecular, hay mutaciones en la vía Sonic Hedgehog, y el tumor nace de las células pluripotenciales de la capa basal de la epidermis.' },
        { show: ['per'], note: 'La lesión que hay que reconocer a la primera',
          say: 'Y eso produce la lesión que tienes que reconocer a la primera: una pápula o nódulo perlado, translúcido, brillante, con telangiectasias finas y ramificadas en la superficie, y bordes arrollados o acordonados.' },
        { show: ['ulc'], note: 'Con el tiempo, se ulcera al centro',
          say: 'Con el tiempo, esa pápula suele ulcerarse en el centro, dando la clásica úlcera de Rodent, o forma nódulo-ulcerativa, que es el subtipo más común, con el sesenta por ciento de los casos.' },
        { show: ['met'], note: 'Casi nunca da metástasis',
          say: 'Y aquí está el dato que más se pregunta: el riesgo de metástasis a distancia es prácticamente nulo, menos de cero coma cero uno por ciento.' },
        { show: ['des'], note: 'Pero destruye si se deja evolucionar',
          say: 'Sin embargo, no es un tumor inofensivo: si se deja crecer sin tratar, invade y destruye el tejido local, y puede llegar a comprometer cartílago, hueso o incluso la órbita.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Carcinoma basocelular',
      title: 'Tres formas clínicas, una mucho más agresiva localmente',
      cards: [
        { title: 'Nódulo-ulcerativo', tag: 'El más común: 60%', kind: 'normal', items: [
          { t: 'Pápula perlada que se ulcera', d: 'La forma clásica que ya conoces',
            say: 'De las variantes, el nódulo-ulcerativo es la más común, con el sesenta por ciento, y es justamente la pápula perlada que ya describimos.' },
        ] },
        { title: 'Superficial', tag: 'En tronco, imita otras dermatosis', kind: 'normal', items: [
          { t: 'Placa eritematosa descamativa', d: 'Puede confundirse con eccema o psoriasis',
            say: 'El superficial se ve como una placa eritematosa y descamativa en el tronco, y por eso a veces se confunde con un eccema o una psoriasis.' },
        ] },
        { title: 'Morfeiforme o esclerosante', tag: 'El más agresivo localmente', kind: 'alert', items: [
          { t: 'Placa amarillenta tipo cicatriz', d: 'Bordes infiltrativos mal definidos',
            say: 'Y el morfeiforme, o esclerosante, es el más traicionero: una placa amarillenta que parece una cicatriz, con bordes infiltrativos mal definidos. Es el subtipo más agresivo localmente, porque es fácil subestimar hasta dónde llega por debajo de la piel.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Carcinoma espinocelular',
      title: 'La placa queratósica: la que sí puede dar metástasis',
      nodes: [
        { id: 'dos', col: 0, row: 1, k: 'cause', t: 'Dosis acumulada de sol de toda la vida', s: 'Trabajadores al aire libre' },
        { id: 'ris', col: 0, row: 2, k: 'cause', t: 'Inmunosupresión crónica', s: 'Trasplantados: riesgo 65 veces mayor' },
        { id: 'qa', col: 1, row: 1, k: 'mech', t: 'Sobre una queratosis actínica previa', s: 'Su precursor obligado más común' },
        { id: 'pla', col: 2, row: 1, k: 'effect', t: 'Placa o nódulo queratósico', s: 'Escama hiperqueratósica que sangra al roce' },
        { id: 'lab', col: 3, row: 0, k: 'risk', t: 'Labio inferior y pabellón auricular', s: 'Localizaciones de alto riesgo' },
        { id: 'met', col: 3, row: 2, k: 'trap', t: 'Riesgo real de metástasis', s: '2 a 5% en piel; hasta 15-20% en labio y oreja' },
      ],
      edges: [
        { from: 'dos', to: 'qa' }, { from: 'ris', to: 'qa', label: 'agrava' }, { from: 'qa', to: 'pla' },
        { from: 'pla', to: 'lab' }, { from: 'pla', to: 'met' }, { from: 'lab', to: 'met', label: 'sube el riesgo' },
      ],
      steps: [
        { show: ['dos'], note: 'Es la dosis acumulada, no las quemaduras puntuales',
          say: 'El carcinoma espinocelular es el segundo más frecuente, con el veinte por ciento. Y a diferencia del basocelular, aquí lo que importa es la dosis acumulada de radiación ultravioleta a lo largo de toda la vida: es el cáncer típico del trabajador al aire libre.' },
        { show: ['ris'], note: 'Los trasplantados tienen un riesgo enormemente mayor',
          say: 'Y hay un grupo de riesgo que se pregunta mucho: los pacientes trasplantados en inmunosupresión crónica, que tienen un riesgo hasta sesenta y cinco veces mayor de desarrollar un carcinoma espinocelular agresivo.' },
        { show: ['qa'], note: 'Casi siempre nace sobre una lesión previa',
          say: 'Y casi siempre nace sobre una lesión precursora: la queratosis actínica, que vamos a ver en detalle en la próxima clase. Es su precursor obligado más frecuente.' },
        { show: ['pla'], note: 'La clínica es indurada y costrosa, no brillante',
          say: 'La lesión ya establecida es una placa o nódulo indurado, eritematoso, cubierto por una escama gruesa y muy adherente, que sangra con el roce o se ulcera sobre una base firme e infiltrada. Nada que ver con el brillo perlado del basocelular.' },
        { show: ['lab'], note: 'El labio inferior es la localización que más se pregunta',
          say: 'Y hay localizaciones de alto riesgo que tienes que memorizar: el labio inferior, precedido por la queilitis actínica, y el pabellón auricular.' },
        { show: ['met'], note: 'Aquí sí hay que pensar en metástasis',
          say: 'Porque, a diferencia del basocelular, el espinocelular sí tiene capacidad de invasión perineural y de dar metástasis ganglionares regionales: entre dos y cinco por ciento en piel sana, pero hasta un quince o veinte por ciento cuando nace en el labio o en la oreja.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol de decisión: de la morfología de la lesión al tratamiento definitivo.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Carcinoma basocelular versus carcinoma espinocelular',
      head: ['Parámetro', 'Carcinoma basocelular', 'Carcinoma espinocelular'],
      rows: [
        { cells: ['Frecuencia', '75 a 80%, el más frecuente', '15 a 20%'],
          say: 'Repasemos con la tabla. En frecuencia, el basocelular es el más común, con setenta y cinco a ochenta por ciento; el espinocelular es el quince a veinte por ciento restante.' },
        { cells: ['Lesión precursora', 'Ninguna conocida', 'Queratosis actínica o queilitis actínica'],
          say: 'El basocelular aparece de novo, sin lesión previa conocida. El espinocelular casi siempre nace sobre una queratosis actínica, o una queilitis actínica en el labio.' },
        { cells: ['Aspecto clínico', 'Pápula perlada con telangiectasias', 'Placa o nódulo queratósico costroso'],
          say: 'El aspecto: perlado y translúcido en el basocelular; costroso e indurado en el espinocelular.' },
        { cells: ['Riesgo de metástasis', 'Prácticamente nulo, menor a 0,01%', 'Real: 2 a 5%, hasta 15-20% en labio u oreja'],
          say: 'Y la diferencia que más se pregunta: el basocelular casi nunca da metástasis; el espinocelular sí, sobre todo si nace en el labio o la oreja. Confundir esto es el error más caro del tema.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 74 años, jubilado, ex trabajador agrícola, consulta por una lesión en el labio inferior de 4 meses de evolución que no cicatriza. Al examen se observa una placa de 1 cm, de base indurada, cubierta por una costra hiperqueratósica amarillenta adherente, que sangra al desprenderse. No se palpan adenopatías submentonianas.',
      question: '¿Cuál es el diagnóstico más probable y qué característica obliga a un seguimiento estricto?',
      options: [
        { letter: 'A', text: 'Carcinoma basocelular; el riesgo de metástasis es prácticamente nulo' },
        { letter: 'B', text: 'Carcinoma espinocelular; el labio inferior es una localización de alto riesgo metastásico' },
        { letter: 'C', text: 'Queilitis actínica simple; basta con fotoprotección' },
        { letter: 'D', text: 'Herpes labial recidivante; tratar con aciclovir tópico' },
        { letter: 'E', text: 'Chancro sifilítico; solicitar serología para sífilis' },
      ],
      correct: 'B',
      explanation: 'Placa indurada, costrosa y ulcerada que no cicatriza en el labio inferior de un paciente con antecedente de exposición solar acumulada: carcinoma espinocelular. El labio inferior es una localización de alto riesgo de metástasis ganglionar (hasta 15-20%), a diferencia del carcinoma basocelular, que casi nunca metastiza.',
      say: {
        stem: 'Vamos con un caso. Hombre de setenta y cuatro años, jubilado, ex trabajador agrícola, con una lesión en el labio inferior de cuatro meses que no cicatriza. Al examen: una placa de un centímetro, base indurada, costra hiperqueratósica amarillenta adherente, que sangra al desprenderse. No se palpan adenopatías submentonianas.',
        question: '¿Cuál es el diagnóstico más probable, y qué característica obliga a un seguimiento estricto?',
        options: 'Las opciones: carcinoma basocelular con riesgo de metástasis prácticamente nulo, carcinoma espinocelular con el labio inferior como zona de alto riesgo metastásico, queilitis actínica simple, herpes labial recidivante, o chancro sifilítico. Piénsalo.',
        answer: 'Es la B. La placa indurada, costrosa, que no cicatriza en cuatro meses, con antecedente de sol acumulado durante años de trabajo agrícola, es un carcinoma espinocelular. Y el labio inferior no es un dato menor: es justamente la localización de más riesgo de metástasis ganglionar, hasta un quince o veinte por ciento. Por eso, aunque hoy no se palpen adenopatías, este paciente necesita seguimiento estricto.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 80',
      stem: 'Un hombre de 70 años, consulta por una lesión en la mano derecha, que apareció hace 6 meses y que ha crecido progresivamente. Es dolorosa y se ulcera y sangra con facilidad. Al examen físico se aprecia una lesión escamosa, ulcerada, de 2 cm de diámetro. Como antecedente, trabajó por 20 años, como minero, en la región de Tarapacá.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Carcinoma espinocelular' },
        { letter: 'B', text: 'Carcinoma basocelular' },
        { letter: 'C', text: 'Melanoma maligno' },
        { letter: 'D', text: 'Granuloma piógeno' },
        { letter: 'E', text: 'Queratosis actínica' },
      ],
      correct: 'A',
      explanation: 'Lesión escamosa, ulcerada, dolorosa y sangrante, con antecedente de décadas de fotoexposición como minero: carcinoma espinocelular clásico. El granuloma piógeno sangra mucho, pero tiene un aspecto rojo y húmedo, no escamoso.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil diecinueve. Hombre de setenta años, con una lesión en la mano derecha, aparecida hace seis meses, que ha crecido progresivamente, es dolorosa, y se ulcera y sangra con facilidad. Al examen: una lesión escamosa, ulcerada, de dos centímetros. Trabajó veinte años como minero en la región de Tarapacá.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: carcinoma espinocelular, carcinoma basocelular, melanoma maligno, granuloma piógeno, o queratosis actínica.',
        answer: 'Es la A, carcinoma espinocelular. La lesión escamosa, ulcerada y dolorosa, sumada a veinte años de exposición solar como minero, arma el cuadro clásico. El granuloma piógeno es el distractor tentador porque también sangra fácil, pero se ve rojo y húmedo, no escamoso como este caso.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 112',
      stem: 'Adulto que consulta por lesión pruriginosa de 3 meses en párpado inferior que aumentó de volumen.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Chalazión crónico' },
        { letter: 'B', text: 'Orzuelo interno' },
        { letter: 'C', text: 'Carcinoma basocelular' },
        { letter: 'D', text: 'Carcinoma espinocelular' },
        { letter: 'E', text: 'Melanoma ocular' },
      ],
      correct: 'C',
      explanation: 'Una lesión palpebral de crecimiento lento y progresivo en un adulto, sobre todo si persiste más allá de lo esperable para un chalazión u orzuelo, obliga a descartar un carcinoma basocelular, la neoplasia maligna palpebral más frecuente por lejos.',
      say: {
        stem: 'Y una pregunta real más, del EUNACOM de enero de dos mil veintitrés. Un adulto consulta por una lesión pruriginosa de tres meses en el párpado inferior, que ha ido aumentando de volumen.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: chalazión crónico, orzuelo interno, carcinoma basocelular, carcinoma espinocelular, o melanoma ocular.',
        answer: 'Es la C, carcinoma basocelular. El párpado, sobre todo el inferior, es una de las localizaciones típicas del basocelular, y una lesión palpebral que crece durante meses, a diferencia de un chalazión o un orzuelo que resuelven en semanas, tiene que hacerte sospechar un cáncer basocelular, que es por lejos el tumor palpebral maligno más frecuente.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Reconoce la lesión', tag: 'Perlada versus costrosa', kind: 'key', items: [
          { t: 'Basocelular: perlado, con telangiectasias', d: 'Espinocelular: queratósico, indurado',
            say: 'Cerremos con las reglas de oro. Perlado y con telangiectasias es basocelular; costroso e indurado sobre una queratosis previa es espinocelular.' },
        ] },
        { title: 'La metástasis marca la diferencia', tag: 'Casi nunca versus a veces sí', kind: 'alert', items: [
          { t: 'Basocelular: destruye local, no metastiza', d: 'Espinocelular: riesgo real, más en labio y oreja',
            say: 'El basocelular destruye localmente pero casi nunca metastiza. El espinocelular sí tiene riesgo real de metástasis, sobre todo si nace en el labio o el pabellón auricular.' },
        ] },
        { title: 'Tratamiento curativo', tag: 'Cirugía, con Mohs en zonas críticas', kind: 'pharma', items: [
          { t: 'Extirpación con margen oncológico', d: 'Mohs en la cara, donde el margen cosmético importa',
            say: 'El tratamiento de ambos es quirúrgico, con márgenes oncológicos de seguridad, y la cirugía micrográfica de Mohs se reserva para las zonas cosméticamente críticas de la cara o los bordes mal definidos. Si te llevas una sola idea de hoy: la morfología te dice cuál es, y la metástasis te dice qué tan urgente es. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Del daño solar a la cirugía: basocelular versus espinocelular',
    root: N(
      'start', 'Tumor cutáneo en zona fotoexpuesta', 'Cara, cuello o manos, en un paciente con daño solar',
      'Frente a un tumor cutáneo en una zona fotoexpuesta, primero hay que definir la morfología de la lesión.',
      ['', N(
        'q', '¿Cómo se ve la lesión?', 'Perlada y brillante, o queratósica y costrosa',
        'La morfología separa de entrada las dos posibilidades más frecuentes.',
        ['Pápula perlada con telangiectasias', N(
          'do', 'Carcinoma basocelular', 'Extirpación con margen de 4 a 5 mm, o Mohs si es facial',
          'La pápula perlada con telangiectasias es carcinoma basocelular: metástasis prácticamente nulas, pero destrucción local si no se trata.',
        )],
        ['Placa o nódulo queratósico costroso', N(
          'q', '¿Dónde está ubicada la lesión?', 'El labio y la oreja cambian el riesgo',
          'Confirmada la lesión como espinocelular, la localización decide qué tan agresivo hay que ser con el estudio ganglionar.',
          ['Piel general, sin antecedente de labio u oreja', N(
            'do', 'Carcinoma espinocelular de bajo riesgo', 'Extirpación con margen de 5 a 10 mm',
            'En piel general, el riesgo de metástasis es bajo, de dos a cinco por ciento, y basta la extirpación con margen amplio.',
          )],
          ['Labio inferior o pabellón auricular', N(
            'refer', 'Carcinoma espinocelular de alto riesgo', 'Extirpación amplia más evaluación ganglionar',
            'En el labio inferior o el pabellón auricular, el riesgo de metástasis sube hasta un quince o veinte por ciento, y se agrega evaluación de la cadena ganglionar regional.',
          )],
        )],
      )],
    ),
  },
};
