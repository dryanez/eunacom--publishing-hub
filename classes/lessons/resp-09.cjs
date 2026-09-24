// Clase 2.4 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neumologia.cjs (resp-09).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'resp-09',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Una cavidad con nivel hidroaéreo: antibióticos por semanas y no olvidar el cáncer',
      say: 'Bienvenidos. Hoy vemos el absceso pulmonar, que es la continuación natural de la clase de neumonía aspirativa: es lo que pasa cuando esa aspiración no se trata a tiempo. El examen pregunta tres cosas: reconocer la imagen, saber que el tratamiento es médico y largo, y no dejar pasar un cáncer escondido detrás de una cavidad. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: '¿De dónde sale un absceso pulmonar?',
      nodes: [
        { id: 'den', col: 0, row: 0, k: 'cause', t: 'Sepsis dental', s: 'Periodontitis grave' },
        { id: 'con', col: 0, row: 2, k: 'cause', t: 'Conciencia o deglución alteradas', s: 'Alcohol, epilepsia, sedantes' },
        { id: 'asp', col: 1, row: 1, k: 'mech', t: 'Aspiración de flora oral', s: 'Anaerobios de la boca' },
        { id: 'neu', col: 2, row: 1, k: 'mech', t: 'Neumonitis aspirativa', s: 'No tratada o mal tratada' },
        { id: 'nec', col: 3, row: 1, k: 'effect', t: 'Necrosis del parénquima', s: 'Cavidad llena de pus' },
        { id: 'abs', col: 4, row: 1, k: 'risk', t: 'Absceso pulmonar', s: 'Más del 85% viene de aquí' },
      ],
      edges: [
        { from: 'den', to: 'asp', label: 'carga bacteriana' }, { from: 'con', to: 'asp', label: 'sin defensa' },
        { from: 'asp', to: 'neu' }, { from: 'neu', to: 'nec', label: 'si no se trata' }, { from: 'nec', to: 'abs' },
      ],
      steps: [
        { show: ['den'], note: 'Una boca con mucha carga bacteriana',
          say: 'Empecemos por el origen, porque explica al paciente que te van a describir. El primer ingrediente es una boca sucia: periodontitis o sepsis dental grave. Esa boca tiene una carga enorme de bacterias anaerobias.' },
        { show: ['con'], note: 'Alguien que no protege su vía aérea',
          say: 'El segundo ingrediente es alguien que no protege bien su vía aérea: el alcohólico crónico, el epiléptico, el que abusa de sedantes o el que tiene un trastorno de la deglución. Todos comparten lo mismo: pierden el reflejo que impide que la saliva caiga al pulmón.' },
        { show: ['asp', 'neu'], note: 'Es la neumonitis aspirativa de la clase anterior',
          say: 'Juntos, esos dos ingredientes producen la aspiración de flora oral, y con ella, una neumonitis aspirativa. Es exactamente lo que vimos en la clase anterior.' },
        { show: ['nec', 'abs'], note: 'Absceso = aspiración que no se trató bien',
          say: 'Si esa neumonitis no se trata, o se trata mal, el parénquima se necrosa y queda una cavidad llena de pus. Eso es el absceso pulmonar, y en más del ochenta y cinco por ciento de los casos nace así. Por eso, cuando leas alcohol y mala dentadura en un enunciado, ya sabes hacia dónde va.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'Un cuadro lento que se confunde con TBC o cáncer',
      cards: [
        { title: 'Presentación', tag: 'Semanas de evolución', kind: 'criteria', items: [
          { t: 'Subaguda o crónica', d: 'Fiebre vespertina, sudoración nocturna',
            say: 'Veamos cómo llega. A diferencia de la neumonía típica, que se instala en días, el absceso evoluciona en semanas: compromiso del estado general, fiebre vespertina y sudoración nocturna.' },
          { t: 'Baja de peso', d: 'Simula tuberculosis o neoplasia',
            say: 'Y baja de peso. Fíjate que esa combinación es la misma de la tuberculosis y del cáncer pulmonar. Por eso el absceso siempre compite con esos dos diagnósticos, y lo vamos a ver en la tabla del final.' },
        ] },
        { title: 'La pista clave', tag: 'Vómica', kind: 'key', items: [
          { t: 'Expectoración purulenta y fétida', d: 'Muy abundante: la vómica',
            say: 'La pista que lo distingue es el esputo: expectoración purulenta, muy abundante y de olor fétido, lo que se llama vómica. El mal olor tiene lógica: son anaerobios, los mismos gérmenes de la boca que se aspiraron.' },
        ] },
        { title: 'Los gérmenes', tag: 'Polimicrobiano', kind: 'normal', items: [
          { t: 'Anaerobios de la boca', d: 'Fusobacterium, Prevotella, Peptostreptococcus',
            say: 'La flora es polimicrobiana, con predominio absoluto de anaerobios orales: Fusobacterium nucleatum, Prevotella y Peptostreptococcus.' },
          { t: '+ estreptococos grupo anginosus', d: 'Todo tratamiento debe cubrir anaerobios',
            say: 'Se asocian a estreptococos del grupo anginosus. Guarda esta idea, porque define el antibiótico: cualquier esquema que no cubra anaerobios es una respuesta incorrecta.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Imagen',
      title: 'La imagen que se pregunta',
      cards: [
        { title: 'Radiografía y TAC', tag: 'Diagnóstico', kind: 'key', items: [
          { t: 'Cavidad redondeada de pared gruesa', d: 'Márgenes irregulares',
            say: 'El diagnóstico se hace con la imagen. En la radiografía y en la TAC de tórax se ve una cavidad redondeada, de pared gruesa y márgenes irregulares.' },
          { t: 'Nivel hidroaéreo evidente', d: 'Aire arriba, pus abajo',
            say: 'Y adentro, un nivel hidroaéreo evidente: aire arriba y pus abajo, con una línea horizontal. Cavidad de pared gruesa con nivel hidroaéreo: esa es la frase que tienes que asociar con absceso.' },
        ] },
        { title: 'Localización', tag: 'Segmentos dependientes', kind: 'criteria', items: [
          { t: 'Posteriores de lóbulos superiores', d: 'Y apicales de lóbulos inferiores',
            say: 'Y fíjate dónde aparece: en los segmentos dependientes, es decir, los segmentos posteriores de los lóbulos superiores y los apicales de los lóbulos inferiores. Son justamente los lugares donde cae lo aspirado en un paciente acostado. De nuevo, el mecanismo te explica la imagen.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'La diferencia que más se pregunta',
      title: '¿Absceso o cáncer cavitado?',
      cards: [
        { title: 'Orienta a absceso', tag: 'Benigno', kind: 'normal', items: [
          { t: 'Esputo fétido, sepsis dental', d: 'Alcohol, aspiración',
            say: 'Una de las preguntas favoritas es separar el absceso del cáncer cavitado. A favor del absceso: el esputo fétido, la sepsis dental, el alcohol, el antecedente de aspiración.' },
          { t: 'Pared gruesa pero regular por dentro', d: 'Nivel hidroaéreo frecuente',
            say: 'Y en la imagen, una pared gruesa, pero regular por dentro, con nivel hidroaéreo frecuente y evidente.' },
        ] },
        { title: 'Orienta a cáncer', tag: 'Carcinoma epidermoide', kind: 'alert', items: [
          { t: 'Pared muy gruesa, más de 15 mm', d: 'Nodular o irregular por dentro',
            say: 'A favor del cáncer: una pared muy gruesa, de más de quince milímetros, con el borde interno irregular o con nódulos. El típico es el carcinoma epidermoide, que se necrosa por dentro.' },
          { t: 'Mayor de 50 años y fumador', d: 'Aunque parezca absceso típico',
            say: 'Y el terreno: mayor de cincuenta años y fumador. Ojo, porque aquí está la regla del examen: en ese paciente hay que descartar el cáncer aunque el cuadro parezca un absceso de libro.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Médico, anaerobios y largo',
      cards: [
        { title: 'El principio', tag: 'Sin cirugía', kind: 'key', items: [
          { t: '85–90% cura solo con antibióticos', d: 'Drena por el árbol bronquial',
            say: 'Vamos al tratamiento, y aquí está la sorpresa para muchos: el absceso pulmonar no se drena de rutina. Entre el ochenta y cinco y el noventa por ciento cura solo con antibióticos, porque la cavidad drena espontáneamente por los bronquios. De hecho, eso es la vómica.' },
        ] },
        { title: 'Esquema de elección', tag: 'EV y luego oral', kind: 'pharma', items: [
          { t: 'Ampicilina/sulbactam EV', d: '1,5 a 3 g cada 6 horas',
            say: 'Se parte por vía endovenosa con ampicilina sulbactam, de uno coma cinco a tres gramos cada seis horas. Alternativas: ceftriaxona más metronidazol, o clindamicina en el alérgico. Todas tienen algo en común: cubren anaerobios.' },
          { t: 'Luego amoxicilina/clavulánico VO', d: '875/125 mg cada 8 a 12 horas',
            say: 'Cuando el paciente se estabiliza, se pasa a amoxicilina con ácido clavulánico oral, ochocientos setenta y cinco con ciento veinticinco miligramos, cada ocho a doce horas.' },
        ] },
        { title: 'Duración', tag: 'Se pregunta', kind: 'criteria', items: [
          { t: '4 a 6 semanas en total', d: 'Hasta que la cavidad se cierre',
            say: 'Y lo que más se pregunta: la duración total es de cuatro a seis semanas, guiada por la clínica y por el cierre de la cavidad en la imagen. Una alternativa que diga siete días de antibiótico es incorrecta: una cavidad necrótica no se esteriliza en una semana.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Cuándo ir más allá',
      title: 'Fibrobroncoscopía y cirugía',
      nodes: [
        { id: 'abs', col: 0, row: 1, k: 'start', t: 'Absceso en tratamiento', s: 'Antibióticos anti anaerobios' },
        { id: 'rie', col: 1, row: 0, k: 'q', t: '¿Riesgo de cáncer?', s: 'Mayor de 50, fumador' },
        { id: 'fbc', col: 2, row: 0, k: 'alert', t: 'Fibrobroncoscopía', s: 'Descartar carcinoma o cuerpo extraño' },
        { id: 'res', col: 1, row: 2, k: 'q', t: '¿Responde?', s: 'Clínica e imagen' },
        { id: 'ok', col: 2, row: 2, k: 'good', t: 'Completar 4–6 semanas', s: 'Sin procedimientos' },
        { id: 'cx', col: 3, row: 1, k: 'refer', t: 'Cirugía o drenaje percutáneo', s: 'Mayor de 6 cm, refractario, hemoptisis masiva' },
      ],
      edges: [
        { from: 'abs', to: 'rie' }, { from: 'rie', to: 'fbc', label: 'sí' },
        { from: 'abs', to: 'res' }, { from: 'res', to: 'ok', label: 'sí' },
        { from: 'res', to: 'fbc', label: 'no' }, { from: 'fbc', to: 'cx', label: 'falla médica' },
      ],
      steps: [
        { show: ['abs'], note: 'La mayoría termina aquí',
          say: 'Ahora, ¿cuándo no basta con el antibiótico? Partimos del paciente ya en tratamiento con cobertura anaerobia.' },
        { show: ['rie', 'fbc'], note: 'Regla EUNACOM: el fumador mayor de 50',
          say: 'Primera pregunta: ¿tiene riesgo de cáncer? Si es mayor de cincuenta años o fumador, la fibrobroncoscopía es mandatoria, para descartar un carcinoma broncogénico, o un cuerpo extraño que tape el bronquio y explique la supuración.' },
        { show: ['res', 'ok'], note: 'Si responde, solo se completa el esquema',
          say: 'Segunda pregunta: ¿responde? Si mejora la clínica y la cavidad se va cerrando, se completan las cuatro a seis semanas y nada más.' },
        { show: ['cx'], note: 'La cirugía es la excepción',
          say: 'Si la cavidad no responde, también va a fibrobroncoscopía. Y la cirugía o el drenaje percutáneo quedan para la falla médica: absceso de más de seis centímetros, refractario a siete a diez días de antibióticos, hemoptisis masiva o sospecha de malignidad.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol, desde la sospecha hasta la cirugía.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Cuatro cavidades que se confunden',
      head: ['Entidad', 'Imagen', 'Conducta'],
      rows: [
        { cells: ['Absceso pulmonar', 'Pared gruesa regular, nivel hidroaéreo evidente', 'Ampicilina/sulbactam → amox/clav 4–6 semanas'],
          say: 'Repasemos las cuatro cavidades que el examen mezcla. El absceso: pared gruesa pero regular por dentro, nivel hidroaéreo evidente, en segmentos dependientes. Tratamiento médico de cuatro a seis semanas.' },
        { cells: ['Cáncer cavitado', 'Pared más de 15 mm, nodular; nivel ocasional', 'Biopsia, etapificación, oncología'],
          say: 'El cáncer cavitado, típicamente epidermoide de lóbulos superiores: pared de más de quince milímetros, nodular por dentro, y el nivel es ocasional o no está. La conducta es biopsia y etapificación.' },
        { cells: ['Tuberculosis cavitada', 'Pared fina a moderada; nivel raro; ápices', 'Esquema de 4 drogas MINSAL'],
          say: 'La tuberculosis cavitada: pared fina a moderada, casi nunca con nivel, en los segmentos apicales y posteriores superiores. Se trata con el esquema de cuatro drogas, que es justamente la próxima clase.' },
        { cells: ['Quiste hidatídico complicado', 'Membrana desprendida: signo del camalote', 'Albendazol + cirugía conservadora'],
          say: 'Y el quiste hidatídico complicado: pared fina con la membrana desprendida flotando, el signo del camalote, más frecuente en la base derecha. Se trata con albendazol y cirugía. Esta última te va a servir en una de las preguntas reales.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 45 años, bebedor excesivo, con mala dentadura, consulta por 3 semanas de fiebre nocturna, baja de peso de 4 kg y tos con expectoración abundante, verde oscura y de olor pestilente. Radiografía: cavidad de 4,5 cm con nivel hidroaéreo horizontal en el segmento posterior del lóbulo superior derecho. Está estable.',
      question: '¿Cuál es el tratamiento de elección?',
      options: [
        { letter: 'A', text: 'Lobectomía superior derecha' },
        { letter: 'B', text: 'Ampicilina/sulbactam EV y luego amoxicilina/clavulánico oral, 4 a 6 semanas en total' },
        { letter: 'C', text: 'Drenaje percutáneo del absceso guiado por TAC' },
        { letter: 'D', text: 'Ciprofloxacino oral por 7 días y control' },
        { letter: 'E', text: 'Esquema RHZE por 6 meses' },
      ],
      correct: 'B',
      explanation: 'Absceso pulmonar primario por aspiración (alcohol, mala dentadura, esputo fétido, cavidad con nivel en segmento dependiente). El tratamiento es médico, con cobertura anaerobia, por 4 a 6 semanas: 85–90% cura sin procedimientos. Cirugía y drenaje quedan para la falla médica; el ciprofloxacino no cubre anaerobios.',
      say: {
        stem: 'Vamos con un caso. Hombre de cuarenta y cinco años, bebedor excesivo y con mala dentadura, con tres semanas de fiebre nocturna, baja de cuatro kilos y tos con expectoración abundante, verde oscura y de olor pestilente. La radiografía muestra una cavidad de cuatro coma cinco centímetros con nivel hidroaéreo, en el segmento posterior del lóbulo superior derecho. Está estable.',
        question: '¿Cuál es el tratamiento de elección?',
        options: 'Las opciones: lobectomía, ampicilina sulbactam seguida de amoxicilina con clavulánico por cuatro a seis semanas, drenaje percutáneo, ciprofloxacino por siete días, o el esquema antituberculoso. Piénsalo.',
        answer: 'Es la B. Todo calza con un absceso por aspiración: alcohol, boca séptica, esputo fétido y cavidad con nivel en un segmento dependiente. El tratamiento es médico, con cobertura anaerobia, por cuatro a seis semanas. La lobectomía y el drenaje son la trampa: quedan para la falla médica. Y el ciprofloxacino falla dos veces: no cubre anaerobios y siete días no alcanzan.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 165',
      stem: 'Un paciente alcohólico, fumador de 10 paquetes año, presenta, desde hace 7 días, un cuadro de tos, con expectoración purulenta y fiebre hasta 38°C. Ha evolucionado con empeoramiento de los síntomas. Al examen físico está febril, con apremio respiratorio. Se solicita una radiografía de tórax, que se muestra a continuación:',
      question: 'El examen más adecuado para proseguir el estudio es:',
      options: [
        { letter: 'A', text: 'Broncoscopía' },
        { letter: 'B', text: 'Videotoracoscopía' },
        { letter: 'C', text: 'TAC de tórax' },
        { letter: 'D', text: 'PET-TC' },
        { letter: 'E', text: 'Resonancia magnética nuclear de tórax' },
      ],
      correct: 'C',
      explanation: 'La radiografía mostraba un absceso pulmonar gigante. La TAC de tórax lo caracteriza mejor y ayuda a descartar un cáncer subyacente. La broncoscopía viene después, si hay riesgo de cáncer o falla el tratamiento.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil diecinueve. Paciente alcohólico y fumador, con siete días de tos con expectoración purulenta y fiebre, que va empeorando. Está febril y con apremio respiratorio. En el examen original venía la radiografía, que mostraba un absceso pulmonar gigante.',
        question: '¿Cuál es el examen más adecuado para proseguir el estudio?',
        options: 'Las opciones: broncoscopía, videotoracoscopía, TAC de tórax, PET scan, o resonancia de tórax. Piénsalo.',
        answer: 'Es la C, TAC de tórax. Es el examen que caracteriza mejor la cavidad y su pared, y ayuda a buscar un cáncer debajo, algo obligatorio en un fumador. La broncoscopía es el distractor tentador, porque este paciente la puede necesitar, pero viene después de la TAC. Y la videotoracoscopía es cirugía: no es un examen para seguir el estudio.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 11',
      stem: 'Un paciente de 42 años presenta tos seca de 7 días de evolución que hace 3 días se volvió productiva, con secreción de sabor salado. Al examen físico tiene frecuencia cardíaca 68 lpm, presión arterial 120/80 mmHg y frecuencia respiratoria 16 rpm. El examen pulmonar muestra matidez en la zona inferior del campo pulmonar derecho, con disminución del murmullo pulmonar en dicha zona. Los exámenes de laboratorio revelan un hematocrito: 38%, plaquetas: 312.000 por mm³, y glóbulos blancos: 12.000 por mm³, con 10% de eosinófilos.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Derrame pleural tuberculoso' },
        { letter: 'B', text: 'Hidatidosis pulmonar' },
        { letter: 'C', text: 'Absceso pulmonar' },
        { letter: 'D', text: 'Neumonía' },
        { letter: 'E', text: 'Carcinoma broncogénico' },
      ],
      correct: 'B',
      explanation: 'Vómica de sabor salado, en la base derecha y con eosinofilia: quiste hidatídico pulmonar roto. La vómica del absceso es purulenta y fétida, con fiebre y un cuadro consuntivo de semanas.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Paciente de cuarenta y dos años con tos seca de siete días, que hace tres se volvió productiva, con una secreción de sabor salado. Signos vitales normales, matidez y murmullo disminuido en la base derecha. En el hemograma, doce mil blancos con diez por ciento de eosinófilos.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: derrame pleural tuberculoso, hidatidosis pulmonar, absceso pulmonar, neumonía, o carcinoma broncogénico. Piénsalo.',
        answer: 'Es la B, hidatidosis pulmonar. Fíjate en tres pistas: una vómica de sabor salado, que es el líquido del quiste roto; la base derecha, que es donde predomina; y la eosinofilia, que es de parásito. El absceso es el distractor, porque también da vómica, pero la suya es purulenta y fétida, con fiebre y semanas de compromiso del estado general. Esa diferencia es la tabla que acabamos de ver.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Reconocerlo', tag: 'Aspiración', kind: 'key', items: [
          { t: 'Alcohol + mala dentadura + esputo fétido', d: 'Anaerobios orales aspirados',
            say: 'Cerremos con las reglas de oro. Alcohol, mala dentadura y esputo fétido: piensa en un absceso por anaerobios aspirados.' },
          { t: 'Cavidad de pared gruesa con nivel', d: 'En segmentos dependientes',
            say: 'En la imagen, una cavidad de pared gruesa con nivel hidroaéreo en un segmento dependiente.' },
        ] },
        { title: 'Tratarlo', tag: 'Médico', kind: 'pharma', items: [
          { t: 'Ampicilina/sulbactam → amox/clav', d: '4 a 6 semanas, sin drenaje de rutina',
            say: 'El tratamiento es médico: ampicilina sulbactam y luego amoxicilina con clavulánico, cuatro a seis semanas. No se drena de rutina.' },
        ] },
        { title: 'No olvidar', tag: 'Cáncer', kind: 'alert', items: [
          { t: 'Mayor de 50 y fumador', d: 'Fibrobroncoscopía obligatoria',
            say: 'Si el paciente es mayor de cincuenta años y fumador, o la cavidad no responde, fibrobroncoscopía para descartar un carcinoma.' },
          { t: 'Cirugía solo si falla', d: 'Más de 6 cm, refractario, hemoptisis masiva',
            say: 'Y la cirugía queda para la falla médica. Si te llevas una sola idea de hoy: el absceso se trata con antibióticos por semanas, pero en el fumador mayor siempre se busca el cáncer. En la próxima clase vemos la otra gran cavidad del pulmón, la tuberculosis. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Absceso pulmonar: de la sospecha a la conducta',
    root: N('start', 'Supuración pulmonar subaguda', 'Fiebre, baja de peso, esputo fétido',
      'Paciente con semanas de fiebre, baja de peso y tos con expectoración fétida. Lo primero es confirmar con la imagen.',
      ['', N('q', '¿Cavidad con nivel hidroaéreo?', 'Radiografía y TAC de tórax',
        'La radiografía y la TAC buscan una cavidad de pared gruesa con nivel hidroaéreo. Si la encuentras, la siguiente pregunta es si hay riesgo de cáncer.',
        ['Absceso por aspiración', N('do', 'Antibióticos anti anaerobios', 'Ampicilina/sulbactam → amox/clav, 4–6 sem',
          'Si es un absceso primario por aspiración, tratamiento médico: ampicilina sulbactam endovenosa y luego amoxicilina con clavulánico oral, hasta completar cuatro a seis semanas.',
          ['Responde', N('ok', 'Completar el esquema', 'El 85–90% cura sin cirugía',
            'Si responde, se completa el esquema. Así termina la gran mayoría, sin ningún procedimiento.')],
          ['Falla médica', N('refer', 'Cirugía o drenaje percutáneo', 'Mayor de 6 cm, refractario, hemoptisis masiva',
            'Si falla tras siete a diez días, si mide más de seis centímetros o hay hemoptisis masiva, se evalúa cirugía o drenaje percutáneo.')])],
        ['Mayor de 50, fumador o no responde', N('alert', 'Fibrobroncoscopía obligatoria', 'Descartar carcinoma o cuerpo extraño',
          'Si es mayor de cincuenta años, fumador, o la cavidad no responde, la fibrobroncoscopía es obligatoria para descartar un carcinoma broncogénico o un cuerpo extraño.')])]),
  },
};
