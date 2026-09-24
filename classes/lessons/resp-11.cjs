// Clase 3.1 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neumologia.cjs (resp-11).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'resp-11',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Criterios de Light: exudado o trasudado, y qué hacer con cada uno',
      say: 'Bienvenidos. Abrimos el bloque de pleura con el derrame pleural, y en particular con los criterios de Light, que se preguntan en casi todas las convocatorias. La buena noticia es que todo el tema se ordena con una sola pregunta: ¿el problema está en la pleura, o está fuera de ella? Partamos.',
    },

    {
      type: 'points',
      kicker: 'Sospecha clínica',
      title: 'Cómo se reconoce un derrame',
      cards: [
        { title: 'Examen físico', tag: 'Todo disminuye', kind: 'criteria', items: [
          { t: 'Amplexión y vibraciones vocales disminuidas', d: 'El líquido no transmite la voz',
            say: 'Empecemos por el examen físico, que se pregunta directo. El líquido se interpone entre el pulmón y la pared, así que todo lo que el pulmón transmite disminuye: la amplexión está disminuida y las vibraciones vocales, abolidas.' },
          { t: 'Matidez hídrica', d: 'Curva parabólica de Damoiseau',
            say: 'A la percusión, matidez hídrica, que dibuja una curva parabólica, la curva de Damoiseau.' },
          { t: 'Murmullo abolido', d: 'Soplo pleurítico o egofonía en el borde superior',
            say: 'Y a la auscultación, murmullo pulmonar abolido, con un posible soplo pleurítico o egofonía justo en el límite superior del líquido. Fíjate en el patrón: en el derrame, todo lo que el pulmón transmite está disminuido o abolido.' },
        ] },
        { title: 'Imagen', tag: 'Confirma', kind: 'key', items: [
          { t: 'Rx de pie: más de 150–200 mL', d: 'Borra el ángulo costofrénico',
            say: 'La radiografía de tórax de pie lo detecta cuando hay más de ciento cincuenta a doscientos mililitros, borrando el ángulo costofrénico.' },
          { t: 'Ecografía: desde 20 mL', d: 'La más sensible y guía la punción',
            say: 'Pero la ecografía torácica es más sensible: detecta desde veinte mililitros, y además es el estándar de seguridad para guiar la toracocentesis.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: '¿El problema está dentro o fuera de la pleura?',
      nodes: [
        { id: 'sis', col: 0, row: 0, k: 'cause', t: 'Falla de presiones sistémicas', s: 'Hidrostática alta u oncótica baja' },
        { id: 'tra', col: 1, row: 0, k: 'mech', t: 'Trasudado', s: 'La pleura está sana' },
        { id: 'trc', col: 2, row: 0, k: 'good', t: 'IC, cirrosis, nefrótico', s: 'Tratar la enfermedad de base' },
        { id: 'loc', col: 0, row: 2, k: 'cause', t: 'Pleura inflamada', s: 'Permeabilidad capilar aumentada' },
        { id: 'exu', col: 1, row: 2, k: 'mech', t: 'Exudado', s: 'Pasan proteínas y LDH' },
        { id: 'exc', col: 2, row: 2, k: 'risk', t: 'Paraneumónico, cáncer, TBC', s: 'Hay que estudiar' },
      ],
      edges: [
        { from: 'sis', to: 'tra' }, { from: 'tra', to: 'trc' },
        { from: 'loc', to: 'exu' }, { from: 'exu', to: 'exc' },
      ],
      steps: [
        { show: ['sis'], note: 'La pleura no tiene la culpa',
          say: 'Ahora el mecanismo, que es la clave para entender los criterios de Light. Hay dos formas de acumular líquido. La primera: la pleura está sana, pero fallan las presiones del cuerpo. Sube la presión hidrostática, o cae la presión coloidosmótica.' },
        { show: ['tra', 'trc'], note: 'Trasudado: sistémico',
          say: 'Eso da un trasudado: un líquido pobre en proteínas, porque la barrera está intacta. Las causas son sistémicas: la insuficiencia cardíaca, que es la más frecuente, la cirrosis con ascitis y el síndrome nefrótico.' },
        { show: ['loc'], note: 'La pleura está enferma',
          say: 'La segunda forma: la pleura misma está inflamada, y sus capilares se vuelven permeables.' },
        { show: ['exu', 'exc'], note: 'Exudado: local',
          say: 'Por esa barrera rota pasan proteínas y LDH, y eso es un exudado. Sus causas son locales: el derrame paraneumónico, el cáncer y la tuberculosis. Y esta es la idea central: el trasudado se trata desde fuera; el exudado obliga a estudiar la pleura.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Toracocentesis',
      title: 'Criterios de Light: basta uno',
      nodes: [
        { id: 'der', col: 0, row: 1, k: 'start', t: 'Derrame de causa no clara', s: 'Espesor > 10 mm' },
        { id: 'pun', col: 1, row: 1, k: 'mech', t: 'Toracocentesis diagnóstica', s: 'Proteínas y LDH en líquido y suero' },
        { id: 'c1', col: 2, row: 0, k: 'q', t: 'Proteínas LP/suero > 0,5', s: 'Criterio 1' },
        { id: 'c2', col: 2, row: 1, k: 'q', t: 'LDH LP/suero > 0,6', s: 'Criterio 2' },
        { id: 'c3', col: 2, row: 2, k: 'q', t: 'LDH LP > 2/3 del límite normal', s: 'Habitualmente > 200 U/L' },
        { id: 'exu', col: 3, row: 0, k: 'risk', t: '≥ 1 criterio: exudado', s: 'Sensibilidad 98%' },
        { id: 'tra', col: 3, row: 2, k: 'good', t: 'Ninguno: trasudado', s: 'Causa sistémica' },
      ],
      edges: [
        { from: 'der', to: 'pun' }, { from: 'pun', to: 'c1' }, { from: 'pun', to: 'c2' }, { from: 'pun', to: 'c3' },
        { from: 'c1', to: 'exu' }, { from: 'c2', to: 'exu' }, { from: 'c3', to: 'exu' }, { from: 'c2', to: 'tra', label: 'ninguno' },
      ],
      steps: [
        { show: ['der'], note: 'Cuándo se punciona',
          say: '¿Cuándo se punciona? En todo derrame de causa no clara con un espesor de más de diez milímetros en la ecografía, o en la radiografía en decúbito lateral.' },
        { show: ['pun'], note: 'Siempre líquido y suero al mismo tiempo',
          say: 'Se hace una toracocentesis diagnóstica, y un detalle que se pregunta: se miden proteínas y LDH en el líquido pleural y en el suero al mismo tiempo, porque dos de los criterios son cocientes.' },
        { show: ['c1'], note: 'Proteínas: más de la mitad',
          say: 'Primer criterio: proteínas del líquido divididas por las del suero, mayor a cero coma cinco. Es decir, el líquido tiene más de la mitad de las proteínas de la sangre: la barrera está rota.' },
        { show: ['c2'], note: 'LDH: el cociente',
          say: 'Segundo criterio: LDH del líquido dividida por la LDH del suero, mayor a cero coma seis.' },
        { show: ['c3'], note: 'LDH: el valor absoluto',
          say: 'Tercer criterio: LDH del líquido mayor a dos tercios del límite superior normal del suero, que habitualmente significa más de doscientas unidades por litro.' },
        { show: ['exu', 'tra'], note: 'Basta un solo criterio',
          say: 'Y la regla de oro: basta cumplir uno solo para que sea exudado. Solo si no cumple ninguno de los tres, es trasudado. Por eso los criterios de Light son tan sensibles, cerca del noventa y ocho por ciento para detectar un exudado.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico etiológico',
      title: 'Qué hacer con cada resultado',
      nodes: [
        { id: 'tra', col: 0, row: 0, k: 'good', t: 'Trasudado', s: 'IC, a menudo bilateral' },
        { id: 'dx', col: 1, row: 0, k: 'good', t: 'Tratar la causa', s: 'Diuréticos; sin estudio invasivo' },
        { id: 'exu', col: 0, row: 2, k: 'risk', t: 'Exudado', s: 'Estudio de segunda línea' },
        { id: 'lab', col: 1, row: 2, k: 'mech', t: 'Glucosa, pH, células, ADA', s: 'Citología y cultivos' },
        { id: 'neu', col: 2, row: 1, k: 'refer', t: 'Neutrofílico', s: 'Paraneumónico' },
        { id: 'lin', col: 2, row: 3, k: 'q', t: 'Linfocítico > 50%', s: 'TBC o cáncer' },
        { id: 'tbc', col: 3, row: 2, k: 'alert', t: 'ADA > 40 U/L', s: 'Tuberculosis pleural' },
        { id: 'neo', col: 3, row: 4, k: 'alert', t: 'ADA bajo, fumador, baja de peso', s: 'Neoplasia: citología y biopsia' },
      ],
      edges: [
        { from: 'tra', to: 'dx' }, { from: 'exu', to: 'lab' }, { from: 'lab', to: 'neu' }, { from: 'lab', to: 'lin' },
        { from: 'lin', to: 'tbc' }, { from: 'lin', to: 'neo' },
      ],
      steps: [
        { show: ['tra', 'dx'], note: 'No requiere estudio invasivo',
          say: 'Con el resultado en la mano, la conducta se separa. Si es trasudado, la causa más común es la insuficiencia cardíaca, típicamente bilateral. Se trata la enfermedad de base, con diuréticos, y no requiere estudio invasivo.' },
        { show: ['exu', 'lab'], note: 'El exudado se estudia',
          say: 'Si es exudado, viene el estudio de segunda línea: glucosa, pH, recuento celular con diferencial, ADA, citología y cultivos.' },
        { show: ['neu'], note: 'Neutrófilos: infección bacteriana',
          say: 'Si predominan los neutrófilos, piensa en el derrame paraneumónico, que es justamente la próxima clase.' },
        { show: ['lin'], note: 'Linfocitos: dos sospechosos',
          say: 'Si más de la mitad son linfocitos, tienes dos sospechosos: la tuberculosis y el cáncer.' },
        { show: ['tbc'], note: 'ADA alta: TBC',
          say: 'Los separa la ADA. Un exudado linfocítico con ADA mayor a cuarenta unidades por litro orienta a tuberculosis pleural, que conecta con lo que vimos en la clase de tuberculosis.' },
        { show: ['neo'], note: 'ADA baja: cáncer',
          say: 'Y si la ADA es baja, en un fumador con baja de peso, piensa en un derrame neoplásico. Ahí la conducta es citología y biopsia pleural. Este patrón aparece en varias preguntas reales.' },
      ],
    },

    {
      type: 'points',
      kicker: 'La trampa',
      title: 'El TEP no respeta la regla',
      cards: [
        { title: 'Tromboembolismo pulmonar', tag: 'Ojo en el examen', kind: 'alert', items: [
          { t: 'Puede ser exudado o trasudado', d: 'Frecuentemente serohemático',
            say: 'Hay una causa que rompe el esquema, y por eso se pregunta: el tromboembolismo pulmonar. Puede dar un trasudado o un exudado, y con frecuencia el líquido es serohemático.' },
          { t: 'Pensarlo si el cuadro es súbito', d: 'Disnea brusca en paciente de riesgo',
            say: 'Entonces, si ves un derrame con líquido hemorrágico en un paciente que tuvo disnea brusca, no te quedes con el cociente de proteínas: piensa en TEP. Lo vas a ver en una pregunta real.' },
        ] },
        { title: 'Recuerda', tag: 'Basta uno', kind: 'key', items: [
          { t: 'Un solo criterio = exudado', d: 'Aunque los otros dos sean normales',
            say: 'Y la otra trampa es numérica: si un solo criterio de Light está alterado, es exudado, aunque los otros dos sean normales. Muchas alternativas incorrectas cuentan criterios como si hiciera falta la mayoría.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Pongamos todo en un árbol, desde el derrame hasta la causa.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Trasudado frente a exudado',
      head: ['Parámetro', 'Trasudado', 'Exudado', 'Comentario'],
      rows: [
        { cells: ['Mecanismo', 'Presión hidrostática u oncótica', 'Permeabilidad pleural', 'El trasudado no daña la pleura'],
          say: 'Repasemos en una tabla. El trasudado nace de las presiones sistémicas y no daña la pleura; el exudado, de una pleura con permeabilidad aumentada.' },
        { cells: ['Proteínas LP/suero', '≤ 0,5', '> 0,5', 'Basta 1 criterio'],
          say: 'Proteínas del líquido sobre las del suero: sobre cero coma cinco es exudado. Y recuerda que basta un criterio.' },
        { cells: ['LDH LP/suero', '≤ 0,6', '> 0,6', 'Sensible a inflamación'],
          say: 'LDH del líquido sobre la del suero: sobre cero coma seis es exudado.' },
        { cells: ['LDH absoluta LP', '≤ 2/3 del límite', '> 2/3 del límite', 'Habitualmente > 200 U/L'],
          say: 'LDH absoluta en el líquido: sobre dos tercios del límite superior normal del suero, que suele ser más de doscientas unidades.' },
        { cells: ['Causas', 'IC, cirrosis, nefrótico', 'Paraneumónico, cáncer, TBC, TEP', 'El TEP puede dar ambos'],
          say: 'Y las causas: el trasudado es insuficiencia cardíaca, cirrosis o nefrótico; el exudado es paraneumónico, cáncer o tuberculosis. El TEP puede estar en las dos columnas.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 64 años, fumador, con baja de peso, disnea progresiva y dolor sordo en el hemitórax izquierdo. Rx: derrame pleural izquierdo moderado. Toracocentesis: líquido amarillo cetrino, proteínas 4,2 g/dL (plasma 6,8 g/dL), LDH 380 U/L (plasma 240 U/L; límite superior normal 250 U/L).',
      question: '¿Cuál es la clasificación del líquido y la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Trasudado; iniciar furosemida' },
        { letter: 'B', text: 'Exudado; citología y biopsia pleural' },
        { letter: 'C', text: 'Trasudado; ecocardiograma' },
        { letter: 'D', text: 'Exudado; instalar tubo pleural de inmediato' },
        { letter: 'E', text: 'No clasificable; repetir la punción en 1 semana' },
      ],
      correct: 'B',
      explanation: 'Proteínas LP/S = 4,2/6,8 = 0,62 (> 0,5); LDH LP/S = 380/240 = 1,58 (> 0,6); LDH LP 380 > 2/3 de 250. Es un exudado. En un fumador con síndrome consuntivo, se estudia con citología y biopsia pleural para descartar neoplasia.',
      say: {
        stem: 'Vamos con un caso. Hombre de sesenta y cuatro años, fumador, con baja de peso, disnea progresiva y dolor sordo en el hemitórax izquierdo. La radiografía muestra un derrame moderado. En la toracocentesis sale un líquido amarillo cetrino, con proteínas de cuatro coma dos, y en el plasma seis coma ocho; LDH de trescientos ochenta, y en el plasma doscientos cuarenta, con un límite normal de doscientos cincuenta.',
        question: '¿Cuál es la clasificación y la conducta más adecuada?',
        options: 'Las opciones: trasudado con furosemida, exudado con citología y biopsia pleural, trasudado con ecocardiograma, exudado con tubo pleural inmediato, o repetir la punción. Piénsalo.',
        answer: 'Es la B. Haz la cuenta: cuatro coma dos sobre seis coma ocho da cero coma sesenta y dos, sobre cero coma cinco; y la LDH da uno coma cincuenta y ocho. Con uno bastaba, y aquí se cumplen los tres: es exudado. Y en un fumador con baja de peso, lo que buscas es un cáncer, con citología y biopsia pleural. El tubo pleural es la trampa: se usa en el empiema, no para diagnosticar.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 94',
      stem: 'Paciente con derrame pleural unilateral. Se realiza toracocentesis.',
      question: '¿Cuál es el examen del líquido pleural que permite clasificarlo como exudado o trasudado según los criterios de Light?',
      options: [
        { letter: 'A', text: 'Proteínas y LDH en líquido pleural y suero' },
        { letter: 'B', text: 'Glucosa en líquido pleural' },
        { letter: 'C', text: 'ADA en líquido pleural' },
        { letter: 'D', text: 'pH del líquido pleural' },
        { letter: 'E', text: 'Recuento celular diferencial' },
      ],
      correct: 'A',
      explanation: 'Criterios de Light: proteínas LP/suero > 0,5, LDH LP/suero > 0,6, LDH LP > 2/3 del límite normal. Uno o más criterios clasifican como exudado.',
      say: {
        stem: 'Ahora las preguntas reales. La primera es del EUNACOM de julio de dos mil veinticinco, y es directa: paciente con derrame pleural unilateral al que se le hace una toracocentesis.',
        question: '¿Qué examen del líquido permite clasificarlo como exudado o trasudado según los criterios de Light?',
        options: 'Las opciones: proteínas y LDH en líquido y suero, glucosa, ADA, pH, o recuento celular. Piénsalo.',
        answer: 'Es la A: proteínas y LDH, en el líquido y en el suero. Los otros exámenes son reales y útiles, pero son de segunda línea: sirven para buscar la causa una vez que ya sabes que es un exudado. El pH, por ejemplo, es clave en el derrame paraneumónico, y la ADA en la tuberculosis. Primero Light, después la causa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 171',
      stem: 'Un paciente de 40 años, consulta por disnea desde hace 2 semanas, no asociado a otros síntomas. Al examen físico se aprecia matidez a la percusión y disminución del murmullo pulmonar en base izquierda. Se realiza radiografía que se muestra a continuación:',
      question: 'El examen más adecuado para seguir con el estudio es:',
      options: [
        { letter: 'A', text: 'TAC' },
        { letter: 'B', text: 'AngioTAC' },
        { letter: 'C', text: 'Ecocardiografía' },
        { letter: 'D', text: 'Análisis citoquímico del líquido pleural' },
        { letter: 'E', text: 'Ecografía pleural' },
      ],
      correct: 'D',
      explanation: 'Derrame pleural de causa no clara: se punciona y se analiza el líquido (criterios de Light y estudio de segunda línea).',
      say: {
        stem: 'Del EUNACOM de julio de dos mil diecisiete. Paciente de cuarenta años con dos semanas de disnea, sin otros síntomas. Al examen, matidez y murmullo disminuido en la base izquierda. En el examen original venía la radiografía, que mostraba un derrame pleural.',
        question: '¿Cuál es el examen más adecuado para seguir con el estudio?',
        options: 'Las opciones: TAC, angioTAC, ecocardiografía, análisis citoquímico del líquido pleural, o ecografía pleural. Piénsalo.',
        answer: 'Es la D. Un derrame sin causa clara se punciona, y lo que decide todo es el análisis del líquido. La ecografía es el distractor más tentador, porque es muy sensible y guía la punción; pero aquí el derrame ya está confirmado, y lo que falta es saber qué líquido es.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 87',
      stem: 'Un paciente de 56 años, fumador de 20 paquetes año, consulta por disnea progresiva de 2 meses de evolución, asociada a tos irritativa y compromiso del estado general. Sus signos vitales son FC: 88x’, PA: 130/80 mmHg, saturación 93% a FiO2 ambiental y al examen pulmonar presenta matidez y crépitos en la base derecha. Se solicita una radiografía de tórax, que muestra un derrame pleural moderado, a derecha, el que se confirma con la TAC de tórax. Se realiza toracocentesis, que da salida a un líquido pleural opalescente, con LDH: 700 UI/L, mayor a 0,6 en relación a la LDH plasmática y proteínas mayores a 0,5, en relación a las proteínas plasmáticas, con 40 células por mm3, 90% de mononucleares, ADA: 24 UI/L y citología negativa.',
      question: '¿Cuál es el examen más adecuado para proseguir el estudio?',
      options: [
        { letter: 'A', text: 'Biopsia pulmonar por videotoracoscopía' },
        { letter: 'B', text: 'Broncoscopía con biopsia pulmonar' },
        { letter: 'C', text: 'PET-TC' },
        { letter: 'D', text: 'Biopsia pleural por videotoracoscopía' },
        { letter: 'E', text: 'Broncoscopía con lavado bronquioalveolar' },
      ],
      correct: 'D',
      explanation: 'Exudado (cumple los criterios de Light), mononuclear, con ADA baja y citología negativa: sugerente de cáncer. Sin tumor pulmonar visible, se biopsia la pleura, idealmente por videotoracoscopía.',
      say: {
        stem: 'Del EUNACOM de diciembre de dos mil diecinueve. Hombre de cincuenta y seis años, fumador de veinte paquetes año, con dos meses de disnea progresiva, tos y compromiso del estado general. Tiene un derrame derecho moderado. La punción muestra un exudado que cumple los criterios de Light, con noventa por ciento de mononucleares, ADA de veinticuatro, y citología negativa.',
        question: '¿Cuál es el examen más adecuado para proseguir el estudio?',
        options: 'Las opciones: biopsia pulmonar por videotoracoscopía, broncoscopía con biopsia pulmonar, PET scan, biopsia pleural por videotoracoscopía, o broncoscopía con lavado. Piénsalo.',
        answer: 'Es la D. Sigue el árbol: exudado, linfocítico, con ADA baja, en un fumador. Eso es cáncer hasta demostrar lo contrario, y una citología negativa no lo descarta. Como el problema está en la pleura, lo que se biopsia es la pleura. La A es la trampa: tiene la técnica correcta, la videotoracoscopía, pero apunta al órgano equivocado.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 121',
      stem: 'Un paciente de 56 años, diabético, hospitalizado en su quinto día, por un síndrome nefrótico, presenta un cuadro de disnea y dolor torácico, por lo que se realiza una radiografía de tórax, la que muestra un derrame pleural derecho. Se realiza la punción pleural, dado salida a un líquido pleural de aspecto hemorrágico, con LDH: 650 UI/L, células 80% de polimorfonucleares, 20% de mononucleares, ADA: 30 UI/L.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Derrame paraneumónico' },
        { letter: 'B', text: 'Trasudado por hipoalbuminemia' },
        { letter: 'C', text: 'Empiema' },
        { letter: 'D', text: 'Tromboembolismo pulmonar' },
        { letter: 'E', text: 'Derrame pleural canceroso' },
      ],
      correct: 'D',
      explanation: 'Paciente hospitalizado con síndrome nefrótico (estado que favorece la trombosis), disnea y dolor torácico, con un exudado hemorrágico: tromboembolismo pulmonar. El TEP puede dar exudado o trasudado, frecuentemente serohemático.',
      say: {
        stem: 'La última, también del EUNACOM de diciembre de dos mil diecinueve. Paciente de cincuenta y seis años, diabético, en su quinto día de hospitalización por un síndrome nefrótico, que presenta disnea y dolor torácico. Tiene un derrame derecho, y la punción da un líquido de aspecto hemorrágico, con LDH de seiscientos cincuenta, predominio de polimorfonucleares y ADA de treinta.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: derrame paraneumónico, trasudado por hipoalbuminemia, empiema, tromboembolismo pulmonar, o derrame canceroso. Piénsalo.',
        answer: 'Es la D. Es la trampa que vimos: el nefrótico te invita a pensar en un trasudado por hipoalbuminemia, pero una LDH de seiscientos cincuenta ya es exudado, y el líquido es hemorrágico. Paciente hospitalizado, con un síndrome nefrótico, que es un estado que favorece la trombosis, y disnea con dolor torácico: tromboembolismo pulmonar.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Light', tag: 'Basta uno', kind: 'key', items: [
          { t: 'Proteínas > 0,5 · LDH > 0,6 · LDH > 2/3', d: 'Líquido y suero al mismo tiempo',
            say: 'Cerremos con las reglas de oro. Los tres criterios de Light: proteínas sobre cero coma cinco, LDH sobre cero coma seis, y LDH sobre dos tercios del límite normal. Siempre con líquido y suero al mismo tiempo.' },
          { t: 'Un criterio = exudado', d: 'Ninguno = trasudado',
            say: 'Basta uno para exudado; ninguno, trasudado.' },
        ] },
        { title: 'Causas', tag: 'Dentro o fuera', kind: 'criteria', items: [
          { t: 'Trasudado: IC, cirrosis, nefrótico', d: 'Tratar la causa, sin estudio invasivo',
            say: 'El trasudado es un problema de fuera de la pleura: insuficiencia cardíaca ante todo, y se trata la causa.' },
          { t: 'Exudado: paraneumónico, cáncer, TBC', d: 'Linfocítico: ADA alta TBC, baja cáncer',
            say: 'El exudado es un problema de la pleura: neutrofílico, paraneumónico; linfocítico con ADA alta, tuberculosis; con ADA baja en un fumador, cáncer.' },
        ] },
        { title: 'Trampa', tag: 'TEP', kind: 'alert', items: [
          { t: 'El TEP puede dar ambos', d: 'Líquido serohemático',
            say: 'Y el TEP puede dar cualquiera de los dos. Si te llevas una sola idea de hoy: primero Light para saber si la pleura está enferma, y después el estudio del exudado para saber por qué. En la próxima clase vemos el exudado que más se pregunta: el derrame paraneumónico y el empiema. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Derrame pleural: de Light a la causa',
    root: N('start', 'Derrame de causa no clara', 'Espesor > 10 mm',
      'Paciente con un derrame pleural cuya causa no es evidente, de más de diez milímetros de espesor.',
      ['', N('do', 'Toracocentesis diagnóstica', 'Proteínas y LDH en líquido y suero',
        'Se hace una toracocentesis, idealmente guiada por ecografía, y se miden proteínas y LDH en el líquido y en el suero.',
        ['', N('q', '¿Cumple al menos 1 criterio de Light?', 'Proteínas > 0,5 · LDH > 0,6 · LDH > 2/3',
          'La pregunta es si cumple al menos uno de los tres criterios de Light.',
          ['NO', N('ok', 'Trasudado', 'IC, cirrosis, nefrótico: tratar la causa',
            'Si no cumple ninguno, es trasudado. Se trata la enfermedad de base, habitualmente la insuficiencia cardíaca, sin estudio invasivo.')],
          ['SÍ', N('q', 'Exudado: ¿qué célula predomina?', 'Glucosa, pH, ADA, citología, cultivo',
            'Si cumple uno o más, es exudado, y viene el estudio de segunda línea. La fórmula celular orienta la causa.',
            ['Neutrófilos', N('refer', 'Paraneumónico', 'Ver pH y glucosa: ¿complicado?',
              'Si predominan los neutrófilos, es un derrame paraneumónico, y el siguiente paso es saber si está complicado.')],
            ['Linfocitos, ADA > 40', N('alert', 'Tuberculosis pleural', 'Esquema de 6 meses',
              'Linfocitos con ADA mayor a cuarenta: tuberculosis pleural.')],
            ['Linfocitos, ADA baja', N('alert', 'Sospecha de neoplasia', 'Citología y biopsia pleural',
              'Linfocitos con ADA baja, en un fumador con baja de peso: neoplasia, y se estudia con citología y biopsia pleural.')])])])]),
  },
};
