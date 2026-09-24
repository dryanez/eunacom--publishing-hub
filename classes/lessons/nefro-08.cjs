// Clase 2.4 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_nefrologia.cjs (nefro-08).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'nefro-08',
  tier: 1,
  slides: [
    {
      type: 'cover',
      subtitle: 'El suero y el diurético se recetan como cualquier fármaco',
      say: 'Bienvenidos. Cerramos el bloque de sodio y agua con una clase práctica: qué suero dar y qué diurético elegir. En las clases anteriores ya apareció la regla de oro, en el shock primero el volumen. Hoy vamos a entender por qué, y a elegir el diurético según la función renal. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiología',
      title: '¿Dónde se queda cada suero?',
      nodes: [
        { id: 'iso', col: 0, row: 0, k: 'start', t: 'Cristaloide isotónico', s: 'SF 0,9% o Ringer lactato' },
        { id: 'ext', col: 1, row: 0, k: 'good', t: 'Se queda afuera de la célula', s: 'Expande el intravascular' },
        { id: 'sg', col: 0, row: 2, k: 'start', t: 'Suero glucosado 5%', s: 'La glucosa se metaboliza' },
        { id: 'agu', col: 1, row: 2, k: 'mech', t: 'Queda agua libre', s: '67% entra a las células' },
        { id: 'vas', col: 2, row: 2, k: 'trap', t: 'Solo 8% queda en los vasos', s: 'No sirve para el shock' },
        { id: 'shk', col: 3, row: 1, k: 'alert', t: 'Shock o deshidratación grave', s: 'Primero el volumen' },
      ],
      edges: [
        { from: 'iso', to: 'ext' }, { from: 'sg', to: 'agu' }, { from: 'agu', to: 'vas' },
        { from: 'ext', to: 'shk', label: 'reanima' }, { from: 'vas', to: 'shk', label: 'no reanima' },
      ],
      steps: [
        { show: ['iso', 'ext'], note: 'Isotónico: no hay gradiente para entrar a la célula',
          say: 'Partamos por una pregunta: ¿dónde se queda el suero que pones? Un cristaloide isotónico, como el suero fisiológico o el Ringer lactato, tiene la misma osmolaridad que el plasma. No hay gradiente que lo haga entrar a las células, así que se queda afuera y expande el espacio intravascular.' },
        { show: ['sg', 'agu'], note: 'La glucosa desaparece y queda agua',
          say: 'El suero glucosado al cinco por ciento es distinto. La glucosa se metaboliza rápido y lo que queda es agua libre. Y el agua libre se reparte por todo el cuerpo: dos tercios se van dentro de las células.' },
        { show: ['vas'], note: 'Casi nada queda donde lo necesitas',
          say: 'De cada litro de suero glucosado, solo un ocho por ciento queda dentro de los vasos. Por eso sirve para dar agua, en la hipernatremia o la hipoglicemia, pero no sirve para reanimar.' },
        { show: ['shk'], note: 'Regla de oro: en el shock, isotónico',
          say: 'De ahí sale la regla que el examen repite: frente a un shock o una deshidratación grave, primero se expande con un cristaloide isotónico, sin importar cuánto marque el sodio. Los electrolitos se corrigen después.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Cristaloides',
      title: 'Suero fisiológico vs Ringer lactato',
      cards: [
        { title: 'Suero fisiológico 0,9%', tag: 'NaCl 154 / Cl 154', kind: 'normal', items: [
          { t: 'Na 154 y Cl 154 mEq/L', d: 'Osmolaridad 308 mOsm/L',
            say: 'Veamos los dos cristaloides. El suero fisiológico al cero coma nueve por ciento tiene ciento cincuenta y cuatro de sodio y ciento cincuenta y cuatro de cloro. Y ese cloro es su problema: es mucho más que el del plasma.' },
          { t: 'Grandes volúmenes: acidosis hiperclorémica', d: 'Con anion gap normal',
            say: 'Si pasas grandes volúmenes, el exceso de cloro produce una acidosis metabólica hiperclorémica con anion gap normal, y además contrae la arteriola aferente del riñón. Esta acidosis la retomamos en el bloque ácido base.' },
        ] },
        { title: 'Ringer lactato', tag: 'Más fisiológico', kind: 'key', items: [
          { t: 'Na 130, Cl 109, K 4, Ca 3', d: 'Más parecido al plasma',
            say: 'El Ringer lactato es más fisiológico: ciento treinta de sodio, ciento nueve de cloro, y trae un poco de potasio y calcio.' },
          { t: 'Lactato 28: se vuelve bicarbonato', d: 'Se metaboliza en el hígado',
            say: 'Y trae veintiocho miliequivalentes de lactato, que el hígado convierte en bicarbonato. Por eso no acidifica.' },
          { t: 'Elección en shock séptico', d: 'Y en la deshidratación severa',
            say: 'Es la solución de elección para reanimar el shock séptico y la deshidratación severa.' },
        ] },
        { title: 'Las otras dos soluciones', tag: 'Indicaciones puntuales', kind: 'alert', items: [
          { t: 'SG 5%: agua libre', d: 'Hipernatremia e hipoglicemia',
            say: 'Y recuerda las otras dos: el suero glucosado, para dar agua libre en la hipernatremia o glucosa en la hipoglicemia.' },
          { t: 'NaCl 3%: 513 mEq/L de Na', d: 'Hiponatremia sintomática grave',
            say: 'Y el suero al tres por ciento, con quinientos trece de sodio, que vimos en la hiponatremia con convulsiones.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diuréticos',
      title: 'Asa o tiazida: lo decide la filtración',
      cards: [
        { title: 'Diuréticos de asa', tag: 'Furosemida, torsemida', kind: 'pharma', items: [
          { t: 'Asa de Henle: Na-K-2Cl', d: 'Elimina hasta 20 a 25% del sodio filtrado',
            say: 'Pasemos a los diuréticos. Los de asa, como la furosemida, bloquean el cotransportador sodio, potasio, dos cloros en el asa gruesa de Henle. Son muy potentes: pueden eliminar hasta un veinte a veinticinco por ciento del sodio filtrado.' },
          { t: 'Funcionan con TFG menor de 30', d: 'Elección para edema y sobrecarga',
            say: 'Y lo más importante: siguen funcionando aunque la filtración glomerular esté bajo treinta. Por eso son el diurético de elección para el edema y la sobrecarga de volumen.' },
          { t: 'Hipokalemia, hipomagnesemia', d: 'Alcalosis metabólica, hiperuricemia',
            say: 'Sus efectos adversos: hipokalemia, hipomagnesemia, alcalosis metabólica e hiperuricemia.' },
        ] },
        { title: 'Tiazidas', tag: 'Hidroclorotiazida, clortalidona', kind: 'alert', items: [
          { t: 'Túbulo distal: Na-Cl', d: 'Antihipertensivo de primera línea',
            say: 'Las tiazidas, como la hidroclorotiazida y la clortalidona, bloquean el cotransportador sodio cloro en el túbulo contorneado distal. Son antihipertensivos de primera línea.' },
          { t: 'Pierden eficacia con TFG menor de 30', d: 'En ERC avanzada: furosemida',
            say: 'Pero pierden su efecto diurético cuando la filtración cae bajo treinta. Entonces, en el paciente con enfermedad renal crónica avanzada y edema, la tiazida no sirve: se usa furosemida.' },
          { t: 'Hiponatremia, hipokalemia', d: 'Hipercalcemia, hiperglicemia, hiperuricemia',
            say: 'Y sus efectos adversos son los que ya conoces del bloque: hiponatremia, que puede ser grave, hipokalemia, hipercalcemia, hiperglicemia e hiperuricemia.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol de decisión, tal como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Shock con hipernatremia', 'SF 0,9% o Ringer primero', 'Suero glucosado 5%'],
          say: 'Repasemos las trampas. Shock con sodio alto: primero cristaloide isotónico. El error es el suero glucosado, que no se queda en los vasos.' },
        { cells: ['Shock séptico o deshidratación severa', 'Ringer lactato', 'Grandes volúmenes solo de SF'],
          say: 'Shock séptico o deshidratación severa: Ringer lactato. Pasar solo suero fisiológico en grandes volúmenes arriesga la acidosis hiperclorémica.' },
        { cells: ['Edema con TFG menor de 30', 'Furosemida', 'Tiazida'],
          say: 'Edema con filtración bajo treinta: furosemida. La tiazida ya no funciona ahí.' },
        { cells: ['Hiponatremia en usuario de diurético', 'Pensar primero en la tiazida', 'Culpar a la furosemida'],
          say: 'Y la hiponatremia en un usuario de diurético: la culpable clásica es la tiazida, no la furosemida.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 45 años hospitalizado por deshidratación severa, reanimado solo con 6 litros de suero fisiológico 0,9% en 24 horas. Hoy está estable. Na 142 mEq/L, Cl 118 mEq/L, HCO3 16 mEq/L, glicemia 110 mg/dL, lactato normal, cetonemia negativa.',
      question: '¿Cuál es la causa más probable de su alteración ácido-base?',
      options: [
        { letter: 'A', text: 'Acidosis metabólica hiperclorémica por el suero fisiológico' },
        { letter: 'B', text: 'Acidosis láctica por hipoperfusión' },
        { letter: 'C', text: 'Cetoacidosis diabética' },
        { letter: 'D', text: 'Alcalosis metabólica por contracción de volumen' },
        { letter: 'E', text: 'Acidosis por uremia' },
      ],
      correct: 'A',
      explanation: 'Anion gap = 142 − (118 + 16) = 8: acidosis metabólica con anion gap normal y cloro alto tras grandes volúmenes de SF 0,9% (154 mEq/L de cloro). Lactato y cetonas normales descartan las acidosis con anion gap elevado. El Ringer lactato habría evitado este efecto.',
      say: {
        stem: 'Vamos con un caso. Hombre de cuarenta y cinco años con una deshidratación severa, reanimado solo con seis litros de suero fisiológico en un día. Ahora está estable, pero tiene cloro de ciento dieciocho y bicarbonato de dieciséis, con lactato y cetonas normales.',
        question: '¿Cuál es la causa más probable de su alteración ácido base?',
        options: 'Las alternativas: acidosis hiperclorémica por el suero, acidosis láctica, cetoacidosis, alcalosis por contracción, o acidosis urémica. Piénsalo.',
        answer: 'Es la A. Calcula el anion gap: ciento cuarenta y dos menos la suma de ciento dieciocho y dieciséis, da ocho. Es normal. Acidosis con anion gap normal y cloro alto, después de seis litros de un suero que trae ciento cincuenta y cuatro de cloro: la causa es el propio suero. El distractor tentador es la acidosis láctica, pero el lactato es normal y esa acidosis subiría el anion gap.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 31',
      stem: "Un paciente de 70 años, diabético tipo 2 e hipertenso, en tratamiento con metformina, losartán e hidroclorotiazida, presenta un cuadro de 4 días de vómitos alimentarios y diarrea, evolucionando con malestar general y disminución del volumen urinario. Al examen físico está bradipsíquico, con presión arterial de 100/50 mmHg, frecuencia cardíaca de 110x'. En sus exámenes de laboratorio destaca creatinina: 2,0 mg/dl, BUN: 78 mg/dl, FeNa: 0,5%, sodio: 130 mEq/L, potasio: 2,0 mEq/L y cloro: 110 mEq/L.",
      question: '¿Qué fluido debe administrarse inicialmente?',
      options: [
        { letter: 'A', text: 'Solución glucosada al 5%' },
        { letter: 'B', text: 'Solución ringer lactato' },
        { letter: 'C', text: 'Albúmina al 5%' },
        { letter: 'D', text: 'Solución glucosalina isotónica' },
        { letter: 'E', text: 'Solución de bicarbonato al 2/3 molar' },
      ],
      correct: 'B',
      explanation: 'Hipovolemia con hipoperfusión e injuria renal prerrenal (FeNa 0,5%): lo primero es reponer la volemia con un cristaloide isotónico. Entre las opciones, el Ringer lactato, que además aporta algo de potasio. El suero glucosado no expande el intravascular.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil dieciséis. Hombre de setenta años, diabético e hipertenso, que toma losartán e hidroclorotiazida, con cuatro días de vómitos y diarrea. Está bradipsíquico, con presión de cien sobre cincuenta y frecuencia de ciento diez. Tiene creatinina de dos, fracción excretada de sodio de cero coma cinco, sodio de ciento treinta y potasio de dos.',
        question: '¿Qué fluido debe administrarse inicialmente?',
        options: 'Las opciones: suero glucosado, Ringer lactato, albúmina, solución glucosalina, o bicarbonato. Piénsalo.',
        answer: 'Es la B, Ringer lactato. El paciente está hipovolémico, con una injuria renal prerrenal, y la fracción excretada de sodio baja lo confirma, como vimos en la clase de injuria renal. Lo primero es el volumen con un cristaloide isotónico, y el Ringer además trae algo de potasio. El distractor es el suero glucosado, que no sirve para reanimar.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 56',
      stem: 'Un paciente de 75 años, con antecedente de hipertensión y diabetes, sin tratamiento, consulta por edema de las extremidades inferiores y malestar. Al examen físico tiene PA: 150/100 mmHg, FC: 70x’, edema marcado en ambas extremidades inferiores, con signo de la fóvea, hígado palpable, examen cardíaco normal y murmullo pulmonar presente, con escasos crépitos basales. En sus exámenes destaca creatinina: 2,2 mg/dl, 5 mg/dl, Na+: 136 mEq/l, K+: 5,3 mEq/l y Cl-: 95 mEq/l.',
      question: '¿Qué diurético es de elección para el manejo del edema en este paciente?',
      options: [
        { letter: 'A', text: 'Clortalidona' },
        { letter: 'B', text: 'Hidroclorotiazida' },
        { letter: 'C', text: 'Furosemida' },
        { letter: 'D', text: 'Indapamida' },
        { letter: 'E', text: 'Espironolactona' },
      ],
      correct: 'C',
      explanation: 'Edema con función renal disminuida (creatinina 2,2): el diurético de asa mantiene su eficacia con TFG baja, mientras las tiazidas (clortalidona, hidroclorotiazida y la cercana indapamida) la pierden. Con potasio de 5,3, la espironolactona además agravaría la hiperkalemia.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil diecinueve. Hombre de setenta y cinco años, hipertenso y diabético sin tratamiento, con edema marcado de las piernas, hígado palpable y escasos crépitos. Tiene creatinina de dos coma dos y potasio de cinco coma tres.',
        question: '¿Qué diurético es de elección para el manejo del edema?',
        options: 'Las opciones: clortalidona, hidroclorotiazida, furosemida, indapamida, o espironolactona. Piénsalo.',
        answer: 'Es la C, furosemida. Hay edema con la función renal disminuida, y ahí el diurético de asa sigue funcionando, mientras que las tiazidas pierden su efecto. Fíjate que tres alternativas son tiazidas o parecidas, y se descartan juntas. Y la espironolactona es el distractor peligroso: con un potasio de cinco coma tres, lo subiría todavía más.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Fluidos', tag: 'Primero el volumen', kind: 'key', items: [
          { t: 'Shock: cristaloide isotónico', d: 'Sin importar el sodio',
            say: 'Cerremos con las reglas de oro. En el shock o la deshidratación grave, primero un cristaloide isotónico, sin importar el sodio.' },
          { t: 'SG 5% no reanima', d: 'Solo 8% queda en los vasos',
            say: 'El suero glucosado no reanima: casi todo se va dentro de las células.' },
          { t: 'Mucho SF: acidosis hiperclorémica', d: 'Ringer lactato en shock séptico',
            say: 'Mucho suero fisiológico da acidosis hiperclorémica; el Ringer lactato es la elección en el shock séptico.' },
        ] },
        { title: 'Diuréticos', tag: 'Según la filtración', kind: 'pharma', items: [
          { t: 'Edema con TFG menor de 30: furosemida', d: 'La tiazida pierde eficacia',
            say: 'Para el edema con filtración bajo treinta, furosemida, porque la tiazida pierde su efecto.' },
          { t: 'Tiazida: hiponatremia e hipokalemia', d: 'La causa clásica en el examen',
            say: 'Y la tiazida es la causa clásica de hiponatremia e hipokalemia. Si te llevas una sola idea de hoy: el suero se elige por dónde se queda, y el diurético por cuánto filtra el riñón. En el próximo bloque entramos al potasio, partiendo por la hiperkalemia grave. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Fluidos y diuréticos: qué indicar',
    root: N('start', 'Paciente con alteración de volumen', '¿Le falta o le sobra?',
      'Frente a un paciente con un problema de volumen, la primera pregunta es simple: ¿le falta volumen o le sobra?',
      ['Falta', N('q', '¿Está inestable?', 'Hipotensión, taquicardia, sopor',
        'Si le falta volumen, ¿está inestable?',
        ['SÍ', N('alert', 'Cristaloide isotónico', 'SF 0,9% o Ringer lactato',
          'Si está en shock, cristaloide isotónico, suero fisiológico o Ringer lactato, sin importar el sodio. En el shock séptico, Ringer lactato.')],
        ['NO, con sodio alto', N('do', 'Agua libre lenta', 'SG 5% o agua enteral',
          'Si está estable y el problema es un sodio alto, se repone agua libre con suero glucosado o por vía enteral, lento.')])],
      ['Sobra', N('q', '¿Cómo está la filtración?', 'TFG',
        'Si le sobra volumen, con edema, el diurético se elige según la filtración glomerular.',
        ['Menor de 30', N('do', 'Furosemida', 'Diurético de asa',
          'Con filtración bajo treinta, furosemida: es la que sigue funcionando.')],
        ['Mayor de 30, hipertenso', N('ok', 'Tiazida', 'Vigilar sodio y potasio',
          'Con filtración conservada, en el hipertenso, la tiazida es de primera línea, vigilando el sodio y el potasio.')])]),
  },
};
