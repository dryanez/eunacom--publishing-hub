// Clase 2.5 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_gastroenterologia.cjs (gastro-11).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gastro-11',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Del adenoma al cáncer: a quién se le hace colonoscopía y a quién tamizaje',
      say: 'Bienvenidos. Hoy vemos pólipos y cáncer colorrectal, con su tamizaje. Es un tema de alta rentabilidad, y se ordena con una idea: casi todos los cánceres de colon nacen de un pólipo que tarda años en malignizarse. Si entiendes esa ventana de tiempo, entiendes el tamizaje y la conducta. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Pólipos de colon',
      title: '¿Qué pólipo se transforma en cáncer?',
      nodes: [
        { id: 'pol', col: 0, row: 1, k: 'start', t: 'Pólipo en la colonoscopía', s: '¿Qué dice la histología?' },
        { id: 'hip', col: 1, row: 0, k: 'good', t: 'Hiperplásico', s: 'No es premaligno: se observa' },
        { id: 'ade', col: 1, row: 2, k: 'risk', t: 'Adenomatoso', s: 'Tubular, tubulovelloso, velloso' },
        { id: 'sec', col: 2, row: 2, k: 'mech', t: 'Secuencia adenoma-carcinoma', s: 'Tarda ~10 años' },
        { id: 'pe', col: 3, row: 2, k: 'good', t: 'Polipectomía + control', s: 'Colonoscopía en 1–3 años' },
      ],
      edges: [
        { from: 'pol', to: 'hip' }, { from: 'pol', to: 'ade' },
        { from: 'ade', to: 'sec' }, { from: 'sec', to: 'pe', label: 'ventana' },
      ],
      steps: [
        { show: ['pol'], note: 'La histología decide',
          say: 'Partamos por el pólipo. Cuando la colonoscopía encuentra uno, lo que decide la conducta es la histología.' },
        { show: ['hip'], note: 'Sin riesgo',
          say: 'El pólipo hiperplásico no es premaligno. No evoluciona a cáncer, así que se observa y listo. No necesita cirugía ni vigilancia especial.' },
        { show: ['ade'], note: 'El velloso es el de mayor riesgo',
          say: 'El adenomatoso, en cambio, es la lesión precursora del cáncer. Puede ser tubular, tubulovelloso o velloso, y el velloso es el de mayor riesgo.' },
        { show: ['sec'], note: 'La ventana del tamizaje',
          say: 'El paso de adenoma a carcinoma tarda alrededor de diez años. Esa es la ventana que aprovecha el tamizaje: encontrar el adenoma antes de que se transforme.' },
        { show: ['pe'], note: 'Resecar el adenoma previene el cáncer',
          say: 'Por eso el adenoma se reseca en la misma colonoscopía, con polipectomía, y se controla con una nueva colonoscopía en uno a tres años, según el número, el tamaño y la histología. Resecar adenomas es prevenir cáncer. Fíjate que aquí la colonoscopía no solo diagnostica: también trata.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Clínica',
      title: 'Dónde está el tumor decide cómo se presenta',
      nodes: [
        { id: 'der', col: 0, row: 0, k: 'cause', t: 'Colon derecho', s: 'Sangrado oculto' },
        { id: 'an', col: 1, row: 0, k: 'effect', t: 'Anemia ferropénica', s: 'Y masa palpable' },
        { id: 'izq', col: 0, row: 2, k: 'cause', t: 'Colon izquierdo', s: 'Lumen más estrecho' },
        { id: 'con', col: 1, row: 2, k: 'effect', t: 'Constipación progresiva', s: 'Cambio de hábito, rectorragia' },
        { id: 'obs', col: 2, row: 2, k: 'alert', t: 'Obstrucción intestinal', s: '1ª causa de obstrucción del colon en el adulto' },
        { id: 'rec', col: 2, row: 0, k: 'cause', t: 'Recto', s: 'Hematoquecia, tenesmo, disquecia' },
        { id: 'fr', col: 3, row: 0, k: 'risk', t: 'Factores de riesgo', s: 'Colitis ulcerosa, VIH, VPH' },
      ],
      edges: [
        { from: 'der', to: 'an' }, { from: 'izq', to: 'con' }, { from: 'con', to: 'obs' }, { from: 'rec', to: 'fr' },
      ],
      steps: [
        { show: ['der', 'an'], note: 'Sangra sin que se note',
          say: 'La clínica depende de dónde está el tumor. En el colon derecho, sangra de forma oculta, así que se presenta como una anemia ferropénica, a veces con una masa palpable.' },
        { show: ['izq', 'con'], note: 'Cambio del hábito intestinal',
          say: 'En el colon izquierdo, el tumor estrecha el lumen: da cambio del hábito, constipación progresiva y rectorragia. El escenario clásico es el adulto mayor con constipación que antes no tenía, y anemia. Es cáncer de colon hasta que la colonoscopía diga lo contrario.' },
        { show: ['obs'], note: 'Su complicación más frecuente',
          say: 'Y la complicación más frecuente del izquierdo es la obstrucción intestinal. De hecho, es la primera causa de obstrucción del colon en el adulto.' },
        { show: ['rec'], note: 'Deformación del bolo fecal',
          say: 'El cáncer de recto da hematoquecia, disquecia, tenesmo y deformación del bolo fecal. Ojo: esa hematoquecia se parece a la de un hemorroide, y en la próxima clase vas a ver que un sangrado atribuido a hemorroides siempre obliga a descartar otras causas, como un cáncer.' },
        { show: ['fr'], note: 'Conecta con la clase de EII',
          say: 'Y tiene factores de riesgo propios: la colitis ulcerosa, que vimos en la clase anterior, el VIH y el virus papiloma humano.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico y etapificación',
      title: 'Confirmar, etapificar y seguir',
      cards: [
        { title: 'Diagnóstico', tag: 'Siempre', kind: 'key', items: [
          { t: 'Colonoscopía total con biopsia', d: 'Ve todo el colon y confirma',
            say: 'Frente a la sospecha, el diagnóstico se hace con colonoscopía total y biopsia. Es el mismo examen que vimos en la enfermedad inflamatoria: permite ver todo el colon y tomar la muestra que confirma.' },
        ] },
        { title: 'Etapificación', tag: 'Recto: más estudio', kind: 'criteria', items: [
          { t: 'TAC de tórax, abdomen y pelvis', d: 'Busca metástasis',
            say: 'Una vez confirmado, hay que saber cuán extendido está. La etapificación se hace con TAC de tórax, abdomen y pelvis, buscando metástasis.' },
          { t: 'Recto: RM de pelvis + endosonografía', d: 'TAC de tórax obligatorio',
            say: 'En el recto se agregan resonancia de pelvis y endosonografía. Y el TAC de tórax es obligatorio, porque el recto puede dar metástasis pulmonares sin pasar por el hígado.' },
        ] },
        { title: 'CEA', tag: 'Trampa clásica', kind: 'alert', items: [
          { t: 'Solo para seguimiento posoperatorio', d: 'No diagnostica',
            say: 'Y ojo con el antígeno carcinoembrionario. Solo sirve para el seguimiento después de la cirugía. No sirve para diagnosticar ni para tamizar, y en el examen aparece como distractor. Si te ofrecen pedir CEA para confirmar un cáncer, descártalo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Síndromes hereditarios',
      title: 'Cientos de pólipos o pocos pólipos',
      cards: [
        { title: 'Poliposis adenomatosa familiar', tag: '100 % maligniza', kind: 'alert', items: [
          { t: 'Cientos de pólipos', d: '"Innumerables pólipos" en paciente joven',
            say: 'Hay dos síndromes hereditarios que se preguntan. El primero es la poliposis adenomatosa familiar: cientos de pólipos adenomatosos. Si el enunciado dice innumerables pólipos, ya sabes qué es.' },
          { t: 'Colectomía total profiláctica', d: 'Resecar uno a uno es inviable',
            say: 'Como el cien por ciento maligniza, la conducta es la colectomía total profiláctica. Sacar los pólipos uno a uno es imposible y no elimina el riesgo.' },
        ] },
        { title: 'Síndrome de Lynch', tag: 'Pocos pólipos', kind: 'key', items: [
          { t: 'Pocos pólipos, alto riesgo', d: 'Cáncer colorrectal hereditario no polipósico',
            say: 'El segundo es el síndrome de Lynch, el cáncer colorrectal hereditario no polipósico. Aquí hay pocos pólipos, pero el riesgo es alto.' },
          { t: 'Vigilancia colonoscópica intensiva', d: 'No colectomía de entrada',
            say: 'Y la conducta es distinta: vigilancia colonoscópica intensiva. Muchos pólipos, colectomía; pocos pólipos con alto riesgo, vigilancia. Esa diferencia se pregunta.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Cirugía siempre',
      cards: [
        { title: 'Cirugía', tag: 'Incluso avanzado', kind: 'key', items: [
          { t: 'Hemicolectomía derecha o izquierda', d: 'Según la localización',
            say: 'El tratamiento del cáncer de colon es quirúrgico: hemicolectomía derecha o izquierda según dónde esté el tumor.' },
          { t: 'También en enfermedad avanzada', d: 'Para evitar la obstrucción',
            say: 'Y se opera siempre, incluso en enfermedad avanzada, para evitar que el tumor termine obstruyendo el colon. Recuerda que la obstrucción es su complicación más frecuente.' },
        ] },
        { title: 'Quimioterapia', tag: 'Muy eficaz', kind: 'pharma', items: [
          { t: 'Puede curar con metástasis hepáticas', d: 'Si son resecables',
            say: 'La quimioterapia del cáncer de colon es especialmente eficaz. Incluso con metástasis hepáticas resecables se puede lograr la curación. Así que un cáncer de colon con metástasis en el hígado no es, de entrada, un paciente solo paliativo.' },
        ] },
        { title: 'Cáncer de recto', tag: 'Agrega radioterapia', kind: 'alert', items: [
          { t: 'Radioterapia', d: 'Complicación: rectitis actínica',
            say: 'El cáncer de recto, a diferencia del de colon, agrega radioterapia, y su complicación es la rectitis actínica: una inflamación del recto por la radiación.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tamizaje',
      title: '¿Asintomático o sintomático?',
      nodes: [
        { id: 'p', col: 0, row: 1, k: 'start', t: 'Adulto sin diagnóstico', s: '¿Tiene síntomas?' },
        { id: 'asi', col: 1, row: 0, k: 'good', t: 'Asintomático, riesgo promedio', s: 'Desde los 50 años (GES)' },
        { id: 'tso', col: 2, row: 0, k: 'mech', t: 'Sangre oculta inmunoquímico', s: 'Anual o bienal; o colonoscopía c/10 años' },
        { id: 'pos', col: 3, row: 0, k: 'good', t: 'Positivo: colonoscopía', s: 'Confirma y reseca adenomas' },
        { id: 'sin', col: 1, row: 2, k: 'alert', t: 'Sintomático o con alarma', s: 'Anemia, constipación nueva, rectorragia' },
        { id: 'col', col: 2, row: 2, k: 'trap', t: 'Colonoscopía directa', s: 'NO test de sangre oculta' },
      ],
      edges: [
        { from: 'p', to: 'asi', label: 'no' }, { from: 'asi', to: 'tso' }, { from: 'tso', to: 'pos', label: '+' },
        { from: 'p', to: 'sin', label: 'sí' }, { from: 'sin', to: 'col' },
      ],
      steps: [
        { show: ['p'], note: 'La pregunta que ordena todo',
          say: 'Para cerrar la teoría, el tamizaje. Recuerda la ventana de diez años del adenoma: el tamizaje existe para aprovecharla. Y la pregunta que lo ordena es una sola: ¿el paciente tiene síntomas?' },
        { show: ['asi'], note: 'Garantía GES',
          say: 'Si es asintomático y de riesgo promedio, corresponde tamizaje desde los cincuenta años. Está en las garantías GES. El objetivo es encontrar adenomas y cánceres tempranos, cuando todavía no dan síntomas. Esperar a que aparezcan síntomas anula el sentido del tamizaje.' },
        { show: ['tso', 'pos'], note: 'Dos estrategias válidas',
          say: 'Hay dos estrategias. Test de sangre oculta inmunoquímico, anual o cada dos años, y si sale positivo, colonoscopía. O directamente colonoscopía cada diez años.' },
        { show: ['sin', 'col'], note: 'La trampa más frecuente',
          say: 'Pero si el paciente tiene síntomas o signos de alarma, ya no estamos haciendo tamizaje. A ese paciente se le hace colonoscopía directamente. Pedir un test de sangre oculta a alguien con anemia y constipación nueva es la trampa más frecuente del tema.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos todo en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Pólipos y síndromes hereditarios',
      head: ['Hallazgo', 'Riesgo', 'Conducta'],
      rows: [
        { cells: ['Pólipo hiperplásico', 'Nulo', 'Observar'],
          say: 'Repasemos en una tabla. Pólipo hiperplásico: riesgo nulo, se observa.' },
        { cells: ['Pólipo adenomatoso', 'Premaligno', 'Polipectomía + colonoscopía en 1–3 años'],
          say: 'Pólipo adenomatoso: premaligno, se hace polipectomía y colonoscopía de control en uno a tres años.' },
        { cells: ['Poliposis adenomatosa familiar', '100 % evoluciona a cáncer', 'Colectomía total profiláctica'],
          say: 'Poliposis adenomatosa familiar: el cien por ciento evoluciona a cáncer, colectomía total profiláctica.' },
        { cells: ['Síndrome de Lynch', 'Alto, pocos pólipos', 'Vigilancia colonoscópica intensiva'],
          say: 'Síndrome de Lynch: riesgo alto con pocos pólipos, vigilancia colonoscópica intensiva.' },
        { cells: ['Sintomático con signos de alarma', 'Descartar cáncer', 'Colonoscopía (no sangre oculta)'],
          say: 'Y el paciente sintomático con signos de alarma: colonoscopía, nunca test de sangre oculta.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 74 años con 4 meses de constipación progresiva que antes no tenía, deposiciones más delgadas y episodios de rectorragia escasa. Hemograma: anemia microcítica hipocroma con ferritina baja.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Test de sangre oculta inmunoquímico' },
        { letter: 'B', text: 'Solicitar CEA para confirmar el diagnóstico' },
        { letter: 'C', text: 'Colonoscopía total con biopsia' },
        { letter: 'D', text: 'Fibra, laxantes y sulfato ferroso, control en 3 meses' },
        { letter: 'E', text: 'TAC de abdomen como examen diagnóstico inicial' },
      ],
      correct: 'C',
      explanation: 'Constipación reciente, deposiciones acintadas, rectorragia y anemia ferropénica en una adulta mayor: cáncer colorrectal hasta demostrar lo contrario. Se confirma con colonoscopía total y biopsia; el test de sangre oculta es tamizaje de asintomáticos y el CEA solo sirve para el seguimiento. Luego se etapifica con TAC.',
      say: {
        stem: 'Vamos al caso. Mujer de setenta y cuatro años con cuatro meses de constipación progresiva que antes no tenía, deposiciones más delgadas y episodios de rectorragia escasa. El hemograma muestra una anemia microcítica con ferritina baja.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las alternativas: test de sangre oculta, CEA para confirmar, colonoscopía total con biopsia, fibra y fierro con control en tres meses, o TAC de abdomen como examen inicial. Piénsalo.',
        answer: 'Es la C, colonoscopía total con biopsia. Adulta mayor, constipación nueva, deposiciones acintadas, rectorragia y anemia ferropénica: es un cáncer colorrectal hasta que se demuestre lo contrario. El distractor tentador es el test de sangre oculta, pero esta paciente tiene síntomas: ya no es tamizaje. Y el CEA no diagnostica; el TAC viene después, para etapificar.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 175',
      stem: 'Paciente mayor de 50 años con pólipo resecado en la colonoscopía: adenoma velloso con displasia de bajo grado.',
      question: '¿Cuál es la conducta?',
      options: [
        { letter: 'A', text: 'Colonoscopía de control en 1 año' },
        { letter: 'B', text: 'Colonoscopía de control en 3 años' },
        { letter: 'C', text: 'Colonoscopía de control en 5 años' },
        { letter: 'D', text: 'Hemicolectomía profiláctica' },
        { letter: 'E', text: 'Colonoscopía de control en 10 años' },
      ],
      correct: 'B',
      explanation: 'El adenoma resecado, cualquiera sea su histología o su grado de displasia, se controla con una nueva colonoscopía en 1 a 3 años. No corresponde cirugía por un solo pólipo resecado por completo en la endoscopía.',
      say: {
        stem: 'Vamos con una pregunta real, del EUNACOM de enero de dos mil veintitrés. Paciente mayor de cincuenta años al que le resecan un pólipo en la colonoscopía: es un adenoma velloso con displasia de bajo grado.',
        question: '¿Cuál es la conducta?',
        options: 'Las opciones: colonoscopía de control en un año, en tres años, en cinco años, hemicolectomía profiláctica, o colonoscopía de control en diez años. Piénsalo.',
        answer: 'Es la B, colonoscopía de control en tres años. Ya resecaste el adenoma en la misma colonoscopía, así que ya trataste el riesgo. Lo que queda es vigilar, y la ventana estándar es de uno a tres años. La hemicolectomía es la trampa: se reserva para el cáncer o para la poliposis con cientos de pólipos, nunca para un solo adenoma resecado.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo · banco EUNACOM',
      stem: 'En una colonoscopía realizada a un hombre de 28 años con antecedentes familiares de cáncer de colon se describen más de 150 pólipos distribuidos por todo el colon y el recto. Varias biopsias muestran adenomas tubulares con displasia de bajo grado.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Polipectomía endoscópica de los pólipos mayores y control anual' },
        { letter: 'B', text: 'Colectomía total (proctocolectomía) profiláctica' },
        { letter: 'C', text: 'Quimioprevención con AINE y seguimiento' },
        { letter: 'D', text: 'Control con CEA seriado cada 6 meses' },
        { letter: 'E', text: 'Colonoscopía de control en 3 años' },
      ],
      correct: 'B',
      explanation: 'Cientos de pólipos adenomatosos en un joven con historia familiar: poliposis adenomatosa familiar, que evoluciona a cáncer en prácticamente el 100 % si no se interviene. La conducta es la colectomía total profiláctica; la polipectomía es inviable por el número de lesiones y no elimina el riesgo.',
      say: {
        stem: 'Y ahora una pregunta del banco EUNACOM. Hombre de veintiocho años con antecedentes familiares de cáncer de colon. La colonoscopía describe más de ciento cincuenta pólipos en todo el colon y el recto, y las biopsias muestran adenomas tubulares con displasia de bajo grado.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: polipectomía de los pólipos mayores con control anual, colectomía total profiláctica, quimioprevención con antiinflamatorios, CEA seriado cada seis meses, o colonoscopía de control en tres años. Piénsalo.',
        answer: 'La respuesta es la B, colectomía total profiláctica. Innumerables pólipos adenomatosos en un joven con historia familiar es una poliposis adenomatosa familiar, y el cien por ciento maligniza. El distractor tentador es la polipectomía de los más grandes, que suena conservadora, pero con ciento cincuenta pólipos es inviable y no elimina el riesgo.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Pólipos', tag: 'Adenoma = precursor', kind: 'key', items: [
          { t: 'Adenoma: polipectomía y control', d: 'Hiperplásico: observar',
            say: 'Cerremos con las reglas de oro. El adenoma es el precursor del cáncer: se reseca y se controla. El hiperplásico se observa.' },
          { t: 'Innumerables pólipos: colectomía', d: 'Lynch: vigilancia intensiva',
            say: 'Innumerables pólipos es poliposis adenomatosa familiar, y va a colectomía profiláctica. Lynch, con pocos pólipos, va a vigilancia intensiva.' },
        ] },
        { title: 'Diagnóstico', tag: 'Colonoscopía', kind: 'alert', items: [
          { t: 'Constipación nueva + anemia', d: 'Colonoscopía, no sangre oculta',
            say: 'Adulto mayor con constipación nueva y anemia ferropénica: colonoscopía, nunca test de sangre oculta.' },
          { t: 'CEA solo para seguimiento', d: 'No diagnostica',
            say: 'El CEA solo sirve para el seguimiento posoperatorio.' },
        ] },
        { title: 'Tamizaje', tag: 'GES desde 50 años', kind: 'pharma', items: [
          { t: 'Sangre oculta inmunoquímico', d: 'O colonoscopía cada 10 años',
            say: 'Y el tamizaje, desde los cincuenta años en asintomáticos, con sangre oculta inmunoquímico o colonoscopía cada diez años. Si te llevas una sola idea de hoy: el test de sangre oculta es para el asintomático; al que tiene síntomas se le hace colonoscopía. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Cáncer colorrectal: ¿tamizaje o colonoscopía?',
    root: N('start', 'Adulto que consulta', 'Sin diagnóstico de cáncer colorrectal',
      'Partimos de un adulto que consulta. La primera pregunta define si hacemos tamizaje o estudio diagnóstico.',
      ['', N('q', '¿Síntomas o signos de alarma?', 'Anemia · constipación nueva · rectorragia',
        '¿Tiene síntomas o signos de alarma? Anemia ferropénica, cambio del hábito, constipación nueva, rectorragia.',
        ['SÍ', N('alert', 'Colonoscopía total con biopsia', 'Sin pasar por sangre oculta',
          'Con síntomas, colonoscopía total con biopsia directamente. El test de sangre oculta no tiene lugar aquí.',
          ['Cáncer', N('refer', 'Etapificar y operar', 'TAC tórax-abdomen-pelvis; hemicolectomía',
            'Si confirma cáncer, se etapifica con TAC de tórax, abdomen y pelvis, más resonancia y endosonografía si es rectal, y se opera siempre, con hemicolectomía según la localización.')],
          ['Innumerables pólipos', N('refer', 'Colectomía total profiláctica', 'Poliposis adenomatosa familiar',
            'Si muestra innumerables pólipos adenomatosos, es una poliposis adenomatosa familiar: colectomía total profiláctica.')])],
        ['NO', N('q', '¿50 años o más, riesgo promedio?', 'Tamizaje GES',
          'Sin síntomas, preguntamos la edad y el riesgo. Desde los cincuenta años, con riesgo promedio, corresponde tamizaje GES.',
          ['SÍ', N('do', 'Sangre oculta inmunoquímico', 'Anual o bienal; o colonoscopía cada 10 años',
            'Test de sangre oculta inmunoquímico anual o bienal, o colonoscopía cada diez años. Si el test sale positivo, colonoscopía.',
            ['Adenoma', N('ok', 'Polipectomía + control', 'Colonoscopía en 1–3 años',
              'Si la colonoscopía encuentra un adenoma, se reseca y se controla en uno a tres años. Eso es prevenir el cáncer.')])])])]),
  },
};
