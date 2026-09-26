// Clase 18.18 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-18).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

const pwSam = N('alert', 'Síndrome de aspiración meconial', 'Infiltrados en parches, riesgo de hipertensión pulmonar',
  'Y si es de término o postérmino, con líquido amniótico con meconio espeso, piensas en síndrome de aspiración meconial. La radiografía muestra infiltrados en parches, y el riesgo mayor es la hipertensión pulmonar persistente.');

const pwTtnr = N('ok', 'Taquipnea transitoria', 'Autolimitada, resuelve en 24 a 72 horas',
  'Si nació por cesárea electiva, sin trabajo de parto, y respira rápido pero sin gran esfuerzo, es taquipnea transitoria. Solo necesita oxígeno de soporte, y se resuelve sola en veinticuatro a setenta y dos horas.');

const pwEmh = N('do', 'Enfermedad de membrana hialina', 'CPAP y surfactante endotraqueal',
  'Si es un prematuro con dificultad respiratoria desde el nacimiento y quejido intenso, sospechas enfermedad de membrana hialina. Inicias CPAP nasal precoz y administras surfactante exógeno por vía endotraqueal.');

const pwEdad = N('q', '¿Cuál es el antecedente obstétrico?', 'Prematuro, cesárea electiva, o meconio',
  'La pregunta que separa los tres cuadros es el antecedente: ¿nació prematuro sin corticoides, por cesárea sin trabajo de parto, o con meconio espeso en el líquido amniótico? Cada antecedente apunta a un diagnóstico distinto.',
  ['Prematuro, sin corticoides', pwEmh],
  ['Cesárea electiva, término', pwTtnr],
  ['Término o postérmino, meconio', pwSam]);

const pwRoot = N('start', 'Recién nacido con dificultad respiratoria', 'Puntúas con la escala de Silverman-Andersen',
  'Aquí tienes al recién nacido con dificultad respiratoria. Lo primero es puntuar la gravedad con la escala de Silverman-Andersen, y después buscas el antecedente que te va a decir cuál de los tres cuadros es.',
  ['', pwEdad]);

module.exports = {
  id: 'ped-18',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Tres cuadros, un mismo síntoma: cómo distinguirlos por el antecedente y la radiografía',
      say: 'Bienvenido a la clase de dificultad respiratoria neonatal. Vas a ver tres cuadros que se preguntan todo el tiempo: la enfermedad de membrana hialina, la taquipnea transitoria y el síndrome de aspiración meconial. Los tres se ven parecidos al inicio, pero el antecedente obstétrico y la radiografía te dicen exactamente cuál es cada uno. Empecemos.',
    },

    {
      type: 'points',
      kicker: 'Cómo mides la gravedad',
      title: 'El Silverman-Andersen: al revés que el Apgar',
      cards: [
        { title: 'La escala de Silverman-Andersen', tag: 'Cero es lo bueno', kind: 'key', items: [
          { t: 'Cero puntos: sin dificultad', d: 'Diez puntos: gravedad máxima',
            say: 'Antes de entrar a los tres cuadros, aprende a medir la gravedad. La escala de Silverman-Andersen funciona al revés que el Apgar: cero puntos significa que no hay dificultad respiratoria, y diez puntos es la gravedad máxima. No te confundas con el sentido de los números.' },
          { t: 'Suma 5 signos clínicos', d: 'Quejido, aleteo, tiraje, retracción, disociación',
            say: 'Suma cinco signos: el quejido espiratorio, el aleteo nasal, el tiraje intercostal, la retracción del esternón, y la disociación entre el tórax y el abdomen al respirar. Cada uno se puntúa de cero a dos.' },
          { t: 'Siete puntos o más: grave', d: 'Necesita soporte de inmediato',
            say: 'Con siete puntos o más, la dificultad es grave y necesita soporte respiratorio de inmediato. Ahora sí, vamos a los tres cuadros que la producen.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Silverman-Andersen',
      title: 'Cómo se puntúa cada signo',
      head: ['Signo', '0 puntos', '1 punto', '2 puntos'],
      rows: [
        { cells: ['Movimiento toracoabdominal', 'Rítmico y sincrónico', 'Tórax quieto, abdomen se mueve', 'Disociación: respiración en balancín'],
          say: 'Vamos signo por signo. El movimiento toracoabdominal: si es rítmico y sincrónico, cero puntos. Si el tórax queda quieto y solo se mueve el abdomen, un punto. Y si están totalmente disociados, en balancín, dos puntos.' },
        { cells: ['Tiraje intercostal', 'Ausente', 'Discreto', 'Acentuado y visible'],
          say: 'El tiraje intercostal va de ausente, a discreto, a acentuado y visible.' },
        { cells: ['Retracción xifoidea', 'Ausente', 'Discreta', 'Acentuada'],
          say: 'La retracción xifoidea, debajo del esternón, se puntúa igual: ausente, discreta o acentuada.' },
        { cells: ['Aleteo nasal', 'Ausente', 'Discreto', 'Acentuado'],
          say: 'El aleteo nasal, lo mismo.' },
        { cells: ['Quejido espiratorio', 'Ausente', 'Con fonendoscopio', 'Audible a distancia'],
          say: 'Y el quejido espiratorio: ausente, audible solo con el fonendoscopio, o audible a distancia, sin necesitar ningún instrumento. Suma los cinco signos y con siete puntos o más ya sabes que la dificultad es grave.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Enfermedad de membrana hialina',
      title: 'El prematuro sin surfactante',
      nodes: [
        { id: 'pre', col: 0, row: 0, k: 'cause', t: 'Prematuro menor de 35 semanas', s: 'Los neumocitos aún no maduran' },
        { id: 'sur', col: 1, row: 0, k: 'mech', t: 'Falta surfactante pulmonar', s: 'Sube la tensión superficial alveolar' },
        { id: 'col', col: 2, row: 0, k: 'effect', t: 'El alvéolo colapsa al espirar', s: 'Quejido para sostener la presión' },
        { id: 'diab', col: 0, row: 2, k: 'risk', t: 'Hijo de madre diabética', s: 'La insulina frena el surfactante' },
        { id: 'ces', col: 1, row: 2, k: 'risk', t: 'Cesárea sin trabajo de parto', s: 'Otro factor de riesgo' },
      ],
      edges: [
        { from: 'pre', to: 'sur' },
        { from: 'sur', to: 'col' },
        { from: 'diab', to: 'sur', label: 'agrava' },
        { from: 'ces', to: 'sur', label: 'agrava' },
      ],
      steps: [
        { show: ['pre'], note: 'Antes de la semana 32 a 34, el surfactante casi no existe',
          say: 'Empecemos por el primer cuadro. En un prematuro menor de treinta y cinco semanas, los neumocitos que fabrican el surfactante todavía no maduran del todo. Mientras más chico, menos surfactante tiene.' },
        { show: ['sur'], note: 'Sin surfactante, la tensión superficial se dispara',
          say: 'Y sin surfactante, la tensión superficial dentro del alvéolo se dispara, porque el surfactante es justo lo que la mantiene baja.' },
        { show: ['col'], note: 'El quejido es un mecanismo compensatorio, no un capricho',
          say: 'Por eso el alvéolo colapsa cada vez que el bebé espira. Y aquí está el porqué del quejido: el recién nacido cierra parcialmente la glotis para mantener algo de presión y evitar que el pulmón se colapse del todo. No es un ruido cualquiera, es un mecanismo de defensa.' },
        { show: ['diab', 'ces'], note: 'La insulina frena la maduración del surfactante',
          say: 'Dos factores lo agravan: el hijo de madre diabética, porque el exceso de insulina frena la maduración del surfactante, y la cesárea sin trabajo de parto, que le quita al pulmón el estímulo hormonal del parto.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Membrana hialina',
      title: 'Clínica, radiografía y tratamiento',
      cards: [
        { title: 'Clínica', tag: 'Desde el nacimiento', kind: 'criteria', items: [
          { t: 'Quejido desde las primeras horas', d: 'Polipnea y cianosis progresiva',
            say: 'La clínica empieza desde el nacimiento o en las primeras horas: quejido intenso, polipnea y cianosis que va progresando.' },
        ] },
        { title: 'Radiografía', tag: 'Vidrio esmerilado', kind: 'key', items: [
          { t: 'Pulmón hipoinsuflado', d: 'Menos de 7 espacios intercostales',
            say: 'La radiografía es al revés de lo que vas a ver en el siguiente cuadro: el pulmón está hipoinsuflado, con menos de siete espacios intercostales visibles.' },
          { t: 'Vidrio esmerilado y broncograma', d: 'El aire dibuja los bronquios',
            say: 'Y aparece el patrón en vidrio esmerilado, con broncograma aéreo bien marcado: el aire que queda dentro de los bronquios se ve nítido sobre un pulmón colapsado alrededor.' },
        ] },
        { title: 'Tratamiento', tag: 'Prevención y soporte', kind: 'pharma', items: [
          { t: 'Corticoides prenatales a la madre', d: 'Betametasona entre las semanas 24 y 34',
            say: 'La prevención es corticoides prenatales a la madre, betametasona, entre las semanas veinticuatro y treinta y cuatro de gestación, en dos dosis con un día de diferencia. Es una de las intervenciones que más reduce esta enfermedad, y por eso se pregunta tanto.' },
          { t: 'CPAP precoz y surfactante', d: 'Por vía endotraqueal',
            say: 'Y ya nacido, el tratamiento es CPAP nasal precoz más surfactante exógeno por vía endotraqueal, entre cien y doscientos miligramos por kilo, administrado apenas el bebé necesita más de treinta por ciento de oxígeno en el CPAP. Sin este tratamiento, el cuadro empeora hasta el tercer día.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Taquipnea transitoria',
      title: 'El pulmón que tarda en secarse',
      nodes: [
        { id: 'ces2', col: 0, row: 1, k: 'cause', t: 'Cesárea electiva, sin trabajo de parto', s: 'Falta la oleada de catecolaminas' },
        { id: 'liq', col: 1, row: 1, k: 'mech', t: 'Líquido pulmonar se reabsorbe lento', s: 'Los canales de sodio no se activan' },
        { id: 'taq', col: 2, row: 1, k: 'effect', t: 'Taquipnea, sin tiraje importante', s: 'Bebé taquipneico pero contento' },
      ],
      edges: [
        { from: 'ces2', to: 'liq' },
        { from: 'liq', to: 'taq' },
      ],
      steps: [
        { show: ['ces2'], note: 'Sin trabajo de parto, falta el estímulo hormonal',
          say: 'El segundo cuadro es la taquipnea transitoria, y parte de un antecedente distinto: la cesárea electiva, sin trabajo de parto previo.' },
        { show: ['liq'], note: 'El trabajo de parto activa los canales que secan el pulmón',
          say: 'El feto viene con líquido dentro del pulmón, y normalmente el trabajo de parto y sus catecolaminas activan los canales de sodio que lo reabsorben. Sin ese estímulo, el líquido se reabsorbe lento.' },
        { show: ['taq'], note: 'Taquipneico pero contento: la frase que lo describe',
          say: 'Y el resultado es un bebé que respira muy rápido, hasta cien veces por minuto, pero con poco tiraje y poco quejido. La frase clásica es un bebé taquipneico pero contento, muy distinto del que viste en la membrana hialina.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Taquipnea transitoria',
      title: 'Radiografía y curso benigno',
      cards: [
        { title: 'Radiografía', tag: 'Cisuritis', kind: 'criteria', items: [
          { t: 'Pulmón hiperinsuflado', d: 'Más de 8 espacios intercostales',
            say: 'La radiografía aquí es opuesta a la anterior: el pulmón está hiperinsuflado, con más de ocho espacios intercostales visibles.' },
          { t: 'Líquido en la cisura', d: 'Congestión perihiliar en sol radiante',
            say: 'Y se ve líquido metido en la cisura pulmonar, con congestión alrededor del hilio en un patrón que llaman en sol radiante.' },
        ] },
        { title: 'Curso', tag: 'Benigno y autolimitado', kind: 'normal', items: [
          { t: 'Resuelve en 24 a 72 horas', d: 'Solo con oxígeno de soporte',
            say: 'El curso es benigno, resuelve solo en veinticuatro a setenta y dos horas, y basta con oxígeno de soporte por naricera o halo.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Síndrome de aspiración meconial',
      title: 'El postérmino que respiró meconio',
      nodes: [
        { id: 'asf', col: 0, row: 1, k: 'cause', t: 'Asfixia intrauterina', s: 'El feto relaja el esfínter anal' },
        { id: 'mec', col: 1, row: 1, k: 'mech', t: 'Meconio espeso en el líquido', s: 'El feto lo aspira al jadear' },
        { id: 'obs', col: 2, row: 0, k: 'effect', t: 'Obstrucción en válvula', s: 'Zonas de atelectasia y de enfisema' },
        { id: 'hpp', col: 2, row: 2, k: 'alert', t: 'Hipertensión pulmonar persistente', s: 'La complicación más grave' },
      ],
      edges: [
        { from: 'asf', to: 'mec' },
        { from: 'mec', to: 'obs' },
        { from: 'mec', to: 'hpp', label: 'grave' },
      ],
      steps: [
        { show: ['asf'], note: 'El estrés fetal es el punto de partida',
          say: 'El tercer cuadro, el síndrome de aspiración meconial, empieza con un feto sometido a asfixia o estrés intrauterino, que por eso relaja el esfínter anal y elimina meconio al líquido amniótico.' },
        { show: ['mec'], note: 'Casi nunca en el prematuro',
          say: 'Ese mismo estrés lo hace jadear dentro del útero, y al jadear aspira ese meconio espeso hacia la vía aérea. Es un cuadro de término o postérmino: casi nunca ocurre en el prematuro menor de treinta y cuatro semanas.' },
        { show: ['obs'], note: 'El meconio tapa como una válvula',
          say: 'El meconio obstruye como una válvula: deja entrar el aire pero no salir, así que quedan zonas de atelectasia junto a zonas de enfisema, alternadas en el mismo pulmón.' },
        { show: ['hpp'], note: 'La complicación que puede matar',
          say: 'Y la complicación que más te importa es la hipertensión pulmonar persistente, con una hipoxemia que no responde a oxígeno solo, y que necesita óxido nítrico inhalado y ventilación de alta frecuencia. La radiografía, otra vez distinta a las dos anteriores, muestra infiltrados algodonosos en parches, alternados con zonas hiperinsufladas y el diafragma aplanado.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos los tres cuadros en un solo árbol de decisión, tal como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'El antecedente que resuelve la pregunta',
      head: ['Antecedente', 'Diagnóstico', 'Error frecuente'],
      rows: [
        { cells: ['Prematuro sin corticoides, pulmón hipoinsuflado', 'Membrana hialina', 'Confundir con taquipnea transitoria'],
          say: 'Repasemos las trampas. Prematuro sin corticoides, con pulmón hipoinsuflado en la radiografía: membrana hialina. El error es confundirla con taquipnea transitoria, que va justo al revés.' },
        { cells: ['Cesárea electiva, pulmón hiperinsuflado', 'Taquipnea transitoria', 'Dar surfactante sin necesitarlo'],
          say: 'Cesárea electiva, sin trabajo de parto, con pulmón hiperinsuflado: taquipnea transitoria. Darle surfactante a este bebé es un error, porque no le falta surfactante, solo tiene líquido de más.' },
        { cells: ['Postérmino con meconio espeso', 'Aspiración meconial', 'Olvidar el riesgo de hipertensión pulmonar'],
          say: 'Postérmino con meconio espeso en el líquido amniótico: aspiración meconial. El error es no vigilar la hipertensión pulmonar, que es lo que complica el pronóstico.' },
        { cells: ['Bebé taquipneico pero contento', 'Taquipnea transitoria', 'Tratarlo como si fuera grave'],
          say: 'Y un bebé taquipneico, pero contento, sin gran tiraje ni quejido: taquipnea transitoria. Tratarlo como si fuera membrana hialina es sobretratar un cuadro que se resuelve solo.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Recién nacido de 31 semanas de gestación, nace por parto prematuro espontáneo. La madre no recibió corticoides prenatales. Inmediatamente presenta quejido audible a distancia, aleteo nasal y retracción xifoidea acentuada, con una saturación de oxígeno de 82% al aire ambiental. La radiografía muestra pulmones con volumen disminuido, patrón difuso en vidrio esmerilado y broncograma aéreo.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Oxígeno por naricera y control en 24 horas' },
        { letter: 'B', text: 'CPAP nasal precoz más surfactante exógeno endotraqueal' },
        { letter: 'C', text: 'Ventilación mecánica invasiva sin surfactante' },
        { letter: 'D', text: 'Antibióticos endovenosos de amplio espectro' },
        { letter: 'E', text: 'Observación, porque es un cuadro autolimitado' },
      ],
      correct: 'B',
      explanation: 'Prematuro de 31 semanas, sin corticoides, con dificultad respiratoria desde el nacimiento y radiografía en vidrio esmerilado con broncograma: enfermedad de membrana hialina. Tratamiento estándar: CPAP nasal precoz más surfactante exógeno endotraqueal.',
      say: {
        stem: 'Vamos con un caso. Recién nacido de treinta y una semanas, por parto prematuro espontáneo, cuya madre no recibió corticoides prenatales. Desde el nacimiento tiene quejido audible a distancia, aleteo nasal y retracción marcada, con una saturación de ochenta y dos por ciento al aire ambiental. La radiografía muestra pulmones con poco volumen, vidrio esmerilado y broncograma aéreo.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: oxígeno por naricera y control en veinticuatro horas, CPAP más surfactante endotraqueal, ventilación mecánica sin surfactante, antibióticos de amplio espectro, u observación porque es autolimitado. Tómate unos segundos.',
        answer: 'Es la B. Prematuro, sin corticoides, dificultad desde el nacimiento, y una radiografía que es el retrato exacto de la membrana hialina: vidrio esmerilado con broncograma. El tratamiento estándar es CPAP nasal precoz más surfactante por vía endotraqueal. Observarlo como si fuera autolimitado es el error clásico: eso es taquipnea transitoria, no esto.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 177',
      stem: 'Un recién nacido de 36 semanas de edad gestacional, nacido por cesárea, presenta dificultad respiratoria luego de nacer, con taquipnea, retracción subcostal y crepitantes basales. La radiografía de tórax muestra ambos campos pulmonares con hiperinsuflación, reforzamiento hiliar, aplanamiento de los diafragmas y silueta cardiaca normal.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Neumomediastino' },
        { letter: 'B', text: 'Neumonía connatal' },
        { letter: 'C', text: 'Taquipnea transitoria' },
        { letter: 'D', text: 'Enfermedad de membrana hialina' },
        { letter: 'E', text: 'Cardiopatía congénita' },
      ],
      correct: 'C',
      explanation: 'Nacido por cesárea, sin antecedentes de asfixia ni prematurez extrema, con radiografía hiperinsuflada y silueta cardiaca normal: taquipnea transitoria. La membrana hialina daría el patrón opuesto, con pulmón hipoinsuflado.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil dieciséis. Recién nacido de treinta y seis semanas, nacido por cesárea, con dificultad respiratoria luego de nacer: taquipnea, retracción subcostal y crepitantes en las bases. La radiografía muestra hiperinsuflación en ambos pulmones, refuerzo alrededor del hilio, diafragmas aplanados, y una silueta cardiaca normal.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: neumomediastino, neumonía connatal, taquipnea transitoria, enfermedad de membrana hialina, o cardiopatía congénita. Piénsalo.',
        answer: 'Es la C, taquipnea transitoria. El antecedente de cesárea, sin trabajo de parto, ya te orienta, y la radiografía lo confirma: hiperinsuflación, no el pulmón chico y colapsado que verías en la membrana hialina. La silueta cardiaca normal descarta la cardiopatía, y no hay antecedente de meconio ni de fiebre materna para pensar en las otras opciones.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo · banco EUNACOM',
      stem: 'Un recién nacido de 30 semanas de gestación presenta dificultad respiratoria grave desde el nacimiento, con quejido espiratorio constante, cianosis y retracción costal severa. La radiografía de tórax revela campos pulmonares poco expandidos, con opacificación reticulonodular bilateral difusa y broncograma aéreo visible.',
      question: '¿Cuál es la etiología y el tratamiento de elección?',
      options: [
        { letter: 'A', text: 'Retardo en la reabsorción de líquido alveolar; oxígeno por naricera' },
        { letter: 'B', text: 'Déficit de surfactante pulmonar; CPAP nasal e instilación de surfactante exógeno' },
        { letter: 'C', text: 'Aspiración masiva de meconio; lavado traqueal con solución fisiológica' },
        { letter: 'D', text: 'Neumotórax a tensión bilateral; toracocentesis inmediata' },
        { letter: 'E', text: 'Atresia esofágica congénita; sonda con tracción' },
      ],
      correct: 'B',
      explanation: 'Prematuro de 30 semanas, distrés severo desde el nacimiento, con radiografía hipoinsuflada en vidrio esmerilado y broncograma: enfermedad de membrana hialina por déficit de surfactante. Tratamiento: CPAP nasal más surfactante exógeno endotraqueal.',
      say: {
        stem: 'Una más del banco. Recién nacido de treinta semanas, con dificultad respiratoria grave desde el nacimiento: quejido constante, cianosis y retracción costal severa. La radiografía muestra pulmones poco expandidos, con un patrón reticulonodular difuso y broncograma aéreo visible.',
        question: '¿Cuál es la etiología y el tratamiento de elección?',
        options: 'Las opciones: retardo en la reabsorción de líquido con naricera, déficit de surfactante con CPAP y surfactante exógeno, aspiración masiva de meconio con lavado traqueal, neumotórax con toracocentesis, o atresia esofágica con sonda. Piénsalo.',
        answer: 'Es la B. Treinta semanas, distrés desde el nacimiento, y una radiografía que muestra exactamente el patrón hipoinsuflado con broncograma: es déficit de surfactante, la enfermedad de membrana hialina. El tratamiento de elección es CPAP nasal con surfactante exógeno endotraqueal. La aspiración de meconio no calza, porque el meconio casi nunca aparece en un prematuro tan chico.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'El antecedente decide', tag: 'Antes de mirar la radiografía', kind: 'key', items: [
          { t: 'Prematuro sin corticoides', d: 'Membrana hialina',
            say: 'Cerremos con las reglas de oro. Prematuro sin corticoides, con dificultad desde el nacimiento: membrana hialina.' },
          { t: 'Cesárea electiva, término', d: 'Taquipnea transitoria',
            say: 'Cesárea electiva en un recién nacido de término: taquipnea transitoria.' },
          { t: 'Postérmino con meconio', d: 'Aspiración meconial',
            say: 'Y postérmino con meconio espeso: aspiración meconial.' },
        ] },
        { title: 'La radiografía confirma', tag: 'Hipoinsuflado vs hiperinsuflado', kind: 'alert', items: [
          { t: 'Vidrio esmerilado, pulmón chico', d: 'Membrana hialina',
            say: 'Vidrio esmerilado con pulmón chico y broncograma: membrana hialina.' },
          { t: 'Cisuritis, pulmón hiperinsuflado', d: 'Taquipnea transitoria',
            say: 'Cisuritis con pulmón hiperinsuflado: taquipnea transitoria, benigna y autolimitada.' },
        ] },
        { title: 'Tratamiento', tag: 'Lo que no puedes confundir', kind: 'pharma', items: [
          { t: 'CPAP y surfactante', d: 'Solo si de verdad falta surfactante',
            say: 'Reserva el CPAP con surfactante para cuando de verdad falta surfactante, no para todo recién nacido taquipneico.' },
          { t: 'Fiebre materna cambia todo', d: 'Piensa en neumonía connatal, no solo en estos tres',
            say: 'Y guarda un cuarto nombre para la próxima clase: si a la dificultad respiratoria se suma fiebre materna o rotura de membranas prolongada, ya no pienses solo en estos tres cuadros, piensa en neumonía connatal por estreptococo grupo B, que se trata con ampicilina y cefotaxima o gentamicina. Si te llevas una sola idea de hoy: el antecedente obstétrico te dice el diagnóstico antes de mirar la radiografía, y la radiografía solo lo confirma. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Dificultad respiratoria neonatal: EMH, TTNR y SAM',
    root: pwRoot,
  },
};
