// Clase 1.3 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_gastroenterologia.cjs (gastro-03).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gastro-03',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cómo traga el paciente te dice qué examen pedir',
      say: 'Bienvenidos. Hoy vemos disfagia y trastornos motores del esófago. Es una pregunta clásica del examen, y siempre tiene la misma forma: te describen cómo traga el paciente, y tú tienes que elegir el examen correcto. La buena noticia es que el patrón clínico te da la respuesta. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'La primera pregunta',
      title: 'Disfagia lógica vs disfagia ilógica',
      nodes: [
        { id: 'dis', col: 0, row: 1, k: 'start', t: 'Disfagia', s: '¿Cómo traga el paciente?' },
        { id: 'log', col: 1, row: 0, k: 'effect', t: 'Disfagia lógica', s: 'Sólidos → líquidos, progresiva' },
        { id: 'obs', col: 2, row: 0, k: 'mech', t: 'Obstrucción que crece', s: 'Algo ocupa el lumen' },
        { id: 'ca', col: 3, row: 0, k: 'risk', t: 'Cáncer de esófago', s: 'Sobre todo con baja de peso' },
        { id: 'ilo', col: 1, row: 2, k: 'effect', t: 'Disfagia ilógica', s: 'Líquidos desde el inicio, fluctuante' },
        { id: 'mot', col: 2, row: 2, k: 'mech', t: 'Trastorno motor', s: 'El músculo no coordina' },
        { id: 'aca', col: 3, row: 2, k: 'cause', t: 'Acalasia o esclerodermia', s: 'Piensa en el músculo, no en un tumor' },
      ],
      edges: [
        { from: 'dis', to: 'log' }, { from: 'log', to: 'obs' }, { from: 'obs', to: 'ca' },
        { from: 'dis', to: 'ilo' }, { from: 'ilo', to: 'mot' }, { from: 'mot', to: 'aca' },
      ],
      steps: [
        { show: ['dis'], note: 'La descripción del paciente ya orienta la causa',
          say: 'Empecemos por la idea que ordena toda la clase. Antes de pedir cualquier examen, pregúntale al paciente cómo traga. Esa sola descripción ya te orienta a la causa.' },
        { show: ['log'], note: 'Primero la carne y el pan, después el agua',
          say: 'El primer patrón es la disfagia lógica. Es progresiva: parte con los sólidos, la carne o el pan, y con el tiempo le cuesta tragar también los líquidos. Se llama lógica porque tiene sentido.' },
        { show: ['obs'], note: 'Un lumen que se achica cada vez más',
          say: '¿Y por qué tiene sentido? Porque hay algo que ocupa el lumen y que va creciendo. Primero se atasca lo grande, y a medida que el espacio se achica, pasa cada vez menos.' },
        { show: ['ca'], note: 'Con baja de peso, cáncer hasta demostrar lo contrario',
          say: 'Esa obstrucción que crece, sobre todo si el paciente está bajando de peso, es un cáncer de esófago hasta demostrar lo contrario.' },
        { show: ['ilo'], note: 'Errática, y con líquidos desde el primer día',
          say: 'El otro patrón es la disfagia ilógica. Es fluctuante, hay días buenos y días malos, y afecta a los líquidos desde el inicio. Eso no calza con un tumor.' },
        { show: ['mot', 'aca'], note: 'Regla de oro: líquidos desde el inicio = músculo',
          say: 'Aquí el lumen está libre; lo que falla es el músculo, que no coordina. Es un trastorno motor, y los dos que se preguntan son la acalasia y la esclerodermia. Regla de oro: si afecta a los líquidos desde el principio, piensa en el músculo, no en un tumor.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Disfagia lógica',
      title: 'Cáncer de esófago: la obstrucción que crece',
      cards: [
        { title: 'Sospecha', tag: 'Progresiva + baja de peso', kind: 'key', items: [
          { t: 'Fumador: carcinoma escamoso', d: 'ERGE o Barrett largo: adenocarcinoma',
            say: 'Veamos el primer cuadro. Disfagia lógica progresiva con baja de peso. Si el paciente es fumador, piensa en carcinoma escamoso; si tiene reflujo o Barrett de larga data, en adenocarcinoma. Esa es justamente la puerta que dejamos abierta en la clase de reflujo.' },
          { t: 'Cáncer de cardias', d: 'Se comporta igual',
            say: 'El cáncer del cardias se comporta exactamente igual, así que en el examen lo tratas del mismo modo.' },
          { t: 'Intermitente, sin baja de peso', d: 'Anillo de Schatzki o estenosis péptica',
            say: 'Y ojo con un matiz. Si la disfagia a sólidos es intermitente y no hay baja de peso, piensa en un anillo de Schatzki o en una estenosis péptica. También se estudia con endoscopía, que además permite dilatar.' },
        ] },
        { title: 'Diagnóstico', tag: 'Endoscopía primero', kind: 'alert', items: [
          { t: 'EDA con biopsia', d: 'Confirma el diagnóstico',
            say: '¿Qué examen pides? Endoscopía digestiva alta con biopsia. No la manometría ni el esofagograma: esos son para el músculo.' },
          { t: 'TAC + endosonografía', d: 'Invasión transmural: principal pronóstico',
            say: 'Una vez confirmado, se etapifica con TAC de tórax y abdomen, y con endosonografía transesofágica. La endosonografía mide la invasión de la pared, que es el principal factor pronóstico.' },
        ] },
        { title: 'Tratamiento', tag: 'Curativo', kind: 'pharma', items: [
          { t: 'Cirugía: único curativo', d: 'La radioterapia tiene rol relevante',
            say: 'El único tratamiento curativo es la cirugía, y en el esófago la radioterapia tiene un rol importante. Todo esto lo profundizamos en la clase de cáncer de esófago y gástrico.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Disfagia ilógica baja',
      title: 'Acalasia: un esfínter que no se abre',
      nodes: [
        { id: 'eei', col: 0, row: 0, k: 'cause', t: 'EEI hipertónico', s: 'No relaja al tragar' },
        { id: 'per', col: 0, row: 2, k: 'cause', t: 'Peristalsis disminuida', s: 'El cuerpo no empuja' },
        { id: 'ret', col: 1, row: 1, k: 'mech', t: 'La comida queda en el esófago', s: 'Nunca llega al estómago' },
        { id: 'dis', col: 2, row: 0, k: 'effect', t: 'Disfagia ilógica baja', s: 'Fluctuante, a nivel del EEI' },
        { id: 'reg', col: 2, row: 1, k: 'effect', t: 'Regurgitación no ácida', s: 'Comida sin sabor ácido' },
        { id: 'neu', col: 3, row: 2, k: 'risk', t: 'Neumonías aspirativas', s: 'A repetición' },
      ],
      edges: [
        { from: 'eei', to: 'ret' }, { from: 'per', to: 'ret' },
        { from: 'ret', to: 'dis' }, { from: 'ret', to: 'reg' }, { from: 'reg', to: 'neu', label: 'de noche' },
      ],
      steps: [
        { show: ['eei'], note: 'La puerta está cerrada, al revés que en el reflujo',
          say: 'Ahora el músculo. En la acalasia, el esfínter esofágico inferior tiene el tono aumentado y no se relaja al tragar. Fíjate que es exactamente lo contrario del reflujo: allá la puerta se abría cuando no debía; aquí no se abre cuando debe.' },
        { show: ['per'], note: 'Y el cuerpo del esófago no empuja',
          say: 'A eso se suma que la peristalsis del cuerpo está disminuida. El esófago no empuja, y la puerta de salida no se abre.' },
        { show: ['ret'], note: 'El alimento se queda estancado',
          say: 'Resultado: la comida queda estancada en el esófago y nunca llega al estómago.' },
        { show: ['dis'], note: 'Disfagia baja y fluctuante',
          say: 'Eso da una disfagia ilógica, fluctuante, y baja, porque el problema está en el esfínter inferior.' },
        { show: ['reg'], note: 'No es ácida: nunca tocó el estómago',
          say: 'Y da una pista muy preguntada: el paciente regurgita alimentos sin sabor ácido. ¿Por qué? Porque esa comida nunca estuvo en contacto con el ácido del estómago.' },
        { show: ['neu'], note: 'La clave del enunciado: neumonías a repetición',
          say: 'Si esa regurgitación ocurre de noche, el contenido se aspira, y aparecen neumonías aspirativas a repetición. Disfagia ilógica más neumonías aspirativas: piensa en acalasia.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Acalasia',
      title: 'Cómo se confirma y cómo se trata',
      cards: [
        { title: 'Diagnóstico', tag: 'Manometría', kind: 'criteria', items: [
          { t: 'Manometría esofágica', d: 'Peristalsis ↓ + EEI que no relaja',
            say: 'El examen de elección es la manometría esofágica. Mide presiones, así que muestra justo el mecanismo: peristalsis disminuida y un esfínter hipertónico que no se relaja.' },
          { t: 'Esofagograma: pico de pájaro', d: 'Cuerpo dilatado',
            say: 'El esofagograma con bario muestra el cuerpo dilatado que termina afinándose, la imagen en pico de pájaro. Es una imagen típica, pero no es el examen que confirma.' },
          { t: 'EDA igual se hace', d: 'Descarta un cáncer de cardias',
            say: 'Y la endoscopía se hace igual, para descartar una pseudoacalasia, es decir, un cáncer del cardias que imita el cuadro.' },
        ] },
        { title: 'Tratamiento', tag: 'Abrir el esfínter', kind: 'pharma', items: [
          { t: 'Miotomía del EEI', d: 'Tratamiento de elección',
            say: 'La lógica del tratamiento es abrir la puerta. El de elección es la esfinterotomía, o miotomía, del esfínter esofágico inferior.' },
          { t: 'Toxina botulínica', d: 'Etapas iniciales o no operables',
            say: 'La toxina botulínica por vía endoscópica queda para etapas iniciales o para pacientes que no se pueden operar.' },
          { t: 'Bloqueadores de calcio', d: 'Relajan el EEI, pero dan reflujo',
            say: 'Y los bloqueadores de calcio relajan el esfínter, pero producen reflujo. Por eso sirven en la acalasia inicial, y justamente por eso no se usan para tratar el reflujo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Los otros dos',
      title: 'Esclerodermia y divertículo de Zenker',
      cards: [
        { title: 'Esclerodermia · CREST', tag: 'Motor + reflujo', kind: 'criteria', items: [
          { t: 'Disfagia ilógica + pirosis intensa', d: 'Reflujo ácido grave',
            say: 'El segundo trastorno motor es la esclerodermia. También da disfagia ilógica, pero con una diferencia clave frente a la acalasia: pirosis intensa. Aquí el esfínter pierde tono, así que hay reflujo ácido grave.' },
          { t: 'Raynaud, calcinosis, telangiectasias', d: 'El contexto delata el diagnóstico',
            say: 'El enunciado te lo va a delatar con el contexto: fenómeno de Raynaud, calcinosis y telangiectasias.' },
          { t: 'Manometría + anticuerpos', d: 'Anti-Scl-70 y anticentrómero',
            say: 'Se estudia con manometría, más anticuerpos: anti Scl setenta y anticentrómero.' },
        ] },
        { title: 'Divertículo de Zenker', tag: 'Disfagia alta', kind: 'alert', items: [
          { t: 'Disfagia alta + halitosis', d: 'Comida retenida que fermenta',
            say: 'Y el último cuadro está arriba, en el esfínter esofágico superior: el divertículo de Zenker. El paciente siente que la comida se le queda en la garganta, y tiene una halitosis marcada, porque el alimento retenido en el saco fermenta.' },
          { t: 'Regurgita comida no digerida', d: 'La halitosis lo separa de la acalasia',
            say: 'También regurgita comida sin digerir, igual que en la acalasia. Lo que los separa es la halitosis y que la disfagia es alta.' },
          { t: 'Esofagograma con bario', d: 'Cirugía: diverticulectomía + miotomía',
            say: 'El examen es el esofagograma con bario, no la endoscopía ni la manometría. Y el tratamiento es quirúrgico: diverticulectomía más miotomía cricofaríngea.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol: dos preguntas clínicas y ya sabes qué examen pedir.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'El patrón clínico elige el examen',
      head: ['Cuadro', 'Clave clínica', 'Examen de elección'],
      rows: [
        { cells: ['Cáncer de esófago', 'Disfagia lógica progresiva + baja de peso', 'EDA + biopsia'],
          say: 'Repasemos en una tabla, que es como lo pregunta el examen. Disfagia lógica progresiva con baja de peso: cáncer de esófago, endoscopía con biopsia.' },
        { cells: ['Acalasia', 'Disfagia ilógica baja + neumonías aspirativas', 'Manometría esofágica'],
          say: 'Disfagia ilógica baja con neumonías aspirativas: acalasia, manometría.' },
        { cells: ['Esclerodermia (CREST)', 'Disfagia ilógica + pirosis + Raynaud', 'Manometría + anti-Scl-70 / anticentrómero'],
          say: 'Disfagia ilógica con pirosis y Raynaud: esclerodermia, manometría más anticuerpos.' },
        { cells: ['Divertículo de Zenker', 'Disfagia alta + halitosis + regurgitación', 'Esofagograma con bario'],
          say: 'Disfagia alta con halitosis: Zenker, esofagograma con bario.' },
        { cells: ['Schatzki / estenosis péptica', 'Lógica intermitente a sólidos, sin baja de peso', 'EDA (permite dilatar)'],
          say: 'Y disfagia intermitente a sólidos, sin baja de peso: anillo de Schatzki o estenosis péptica, endoscopía, que además permite dilatar.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 46 años con 8 meses de dificultad para tragar, más marcada con líquidos que con sólidos y de carácter fluctuante. Ha tenido 2 neumonías basales derechas en el último año y regurgita de noche alimentos sin sabor ácido. No ha bajado de peso.',
      question: '¿Cuál es el examen que confirma el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Endoscopía digestiva alta con biopsia' },
        { letter: 'B', text: 'Manometría esofágica' },
        { letter: 'C', text: 'pH-metría esofágica de 24 horas' },
        { letter: 'D', text: 'TAC de tórax con contraste' },
        { letter: 'E', text: 'Prueba terapéutica con omeprazol por 8 semanas' },
      ],
      correct: 'B',
      explanation: 'Disfagia ilógica (líquidos, fluctuante) + neumonías aspirativas + regurgitación no ácida = acalasia. La manometría confirma: aperistalsis y EEI hipertónico que no relaja. La endoscopía se hace igual para descartar pseudoacalasia, pero no confirma el trastorno motor.',
      say: {
        stem: 'Vamos al caso. Mujer de cuarenta y seis años con ocho meses de dificultad para tragar, más marcada con los líquidos que con los sólidos, y fluctuante. Ha tenido dos neumonías basales derechas en el último año, y de noche regurgita alimentos sin sabor ácido. No ha bajado de peso.',
        question: '¿Cuál es el examen que confirma el diagnóstico más probable?',
        options: 'Las alternativas: endoscopía con biopsia, manometría esofágica, pH-metría de veinticuatro horas, TAC de tórax, o prueba con omeprazol. Piénsalo.',
        answer: 'Es la B, la manometría. Líquidos desde el inicio y fluctuante: disfagia ilógica, o sea, músculo. Súmale neumonías aspirativas y regurgitación no ácida, y tienes una acalasia. La alternativa tentadora es la endoscopía, porque igual se hace para descartar un cáncer del cardias. Pero la pregunta es qué examen confirma el trastorno motor, y ese es la manometría.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'Caso representativo · banco EUNACOM',
      stem: 'Hombre de 62 años, fumador de 40 paquetes-año, consulta por 3 meses de disfagia que comenzó con la carne y el pan y ahora también le cuesta tragar líquidos, con baja de 7 kg de peso.',
      question: '¿Cuál es la conducta inicial?',
      options: [
        { letter: 'A', text: 'Manometría esofágica' },
        { letter: 'B', text: 'Esofagograma con bario' },
        { letter: 'C', text: 'Endoscopía digestiva alta con biopsia' },
        { letter: 'D', text: 'TAC de tórax con contraste' },
        { letter: 'E', text: 'Prueba terapéutica con inhibidor de la bomba de protones' },
      ],
      correct: 'C',
      explanation: 'Disfagia lógica (progresiva, de sólidos a líquidos) con baja de peso en un fumador es cáncer de esófago mientras no se demuestre lo contrario. El diagnóstico se hace con endoscopía y biopsia; el TAC y la endosonografía vienen después, para etapificar. Manometría y esofagograma se reservan para la disfagia ilógica.',
      say: {
        stem: 'Ahora una pregunta del banco EUNACOM, un caso representativo. Hombre de sesenta y dos años, fumador de cuarenta paquetes año, con tres meses de disfagia que partió con la carne y el pan, y que ahora también le cuesta con los líquidos. Ha bajado siete kilos.',
        question: '¿Cuál es la conducta inicial?',
        options: 'Las opciones: manometría, esofagograma con bario, endoscopía con biopsia, TAC de tórax, o prueba con IBP. Piénsalo.',
        answer: 'La respuesta es la C. De sólidos a líquidos y progresiva: disfagia lógica. Con baja de peso y tabaco, es un cáncer escamoso hasta demostrar lo contrario, y se confirma con endoscopía y biopsia. El distractor es el TAC: se pide, pero después, para etapificar. Y la manometría y el esofagograma son para el músculo, no para un tumor.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'Caso representativo · banco EUNACOM',
      stem: 'Mujer de 71 años con sensación de que la comida "se le queda en la garganta" desde hace 1 año, regurgitación de alimentos no digeridos y halitosis intensa que le notan sus familiares.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Cáncer de esófago' },
        { letter: 'B', text: 'Acalasia' },
        { letter: 'C', text: 'Divertículo de Zenker' },
        { letter: 'D', text: 'Esclerodermia esofágica' },
        { letter: 'E', text: 'Estenosis péptica por reflujo' },
      ],
      correct: 'C',
      explanation: 'Disfagia alta (a nivel del esfínter esofágico superior) + halitosis marcada + regurgitación de alimento no digerido = divertículo de Zenker: el alimento se acumula en el saco y fermenta. Se confirma con esofagograma con bario. La halitosis lo separa de la acalasia.',
      say: {
        stem: 'Y una más del banco. Mujer de setenta y un años que siente que la comida se le queda en la garganta desde hace un año. Regurgita alimentos sin digerir, y su familia le nota una halitosis intensa.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: cáncer de esófago, acalasia, divertículo de Zenker, esclerodermia, o estenosis péptica. Piénsalo.',
        answer: 'Es la C, divertículo de Zenker. La comida se queda en la garganta, o sea, disfagia alta, y hay halitosis marcada porque el alimento fermenta en el saco. El distractor es la acalasia, que también regurgita comida sin digerir. Pero la acalasia es baja, da neumonías, y no tiene esa halitosis. Y recuerda el examen: esofagograma con bario.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'El patrón', tag: 'Lógica vs ilógica', kind: 'key', items: [
          { t: 'Lógica: EDA con biopsia', d: 'Obstrucción, descartar cáncer',
            say: 'Cerremos con las reglas de oro. Disfagia lógica, de sólidos a líquidos y progresiva: obstrucción, y endoscopía con biopsia.' },
          { t: 'Ilógica: manometría', d: 'Trastorno motor',
            say: 'Disfagia ilógica, con líquidos desde el inicio: trastorno motor, y manometría.' },
        ] },
        { title: 'Los cuadros', tag: 'Una clave cada uno', kind: 'criteria', items: [
          { t: 'Acalasia: miotomía del EEI', d: 'Regurgitación no ácida + neumonías',
            say: 'Acalasia: regurgitación no ácida y neumonías aspirativas, y se trata con miotomía del esfínter.' },
          { t: 'Esclerodermia: pirosis + Raynaud', d: 'Motor con reflujo grave',
            say: 'Esclerodermia: trastorno motor con pirosis intensa y Raynaud.' },
        ] },
        { title: 'Arriba', tag: 'Zenker', kind: 'alert', items: [
          { t: 'Disfagia alta + halitosis', d: 'Esofagograma con bario y cirugía',
            say: 'Y disfagia alta con halitosis: Zenker, esofagograma con bario y cirugía. Si te llevas una sola idea de hoy: si afecta a los líquidos desde el principio, piensa en el músculo y pide manometría; si parte con los sólidos y progresa, piensa en un tumor y pide endoscopía. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Disfagia: ¿obstrucción o trastorno motor?',
    root: N('start', 'Disfagia', 'Dificultad para tragar',
      'Paciente con disfagia. Con dos preguntas clínicas ya sabes qué examen pedir.',
      ['', N('q', '¿Disfagia alta + halitosis?', 'Regurgitación de comida no digerida',
        'Primero: ¿la disfagia es alta, en la garganta, con halitosis marcada y regurgitación de comida sin digerir?',
        ['SÍ', N('refer', 'Esofagograma con bario', 'Divertículo de Zenker → cirugía',
          'Eso es un divertículo de Zenker. El examen es el esofagograma con bario, no la endoscopía ni la manometría, y el tratamiento es quirúrgico.')],
        ['NO', N('q', '¿Sólidos → líquidos, progresiva?', 'Lógica vs ilógica',
          'Si no, preguntamos el patrón. ¿Empezó con sólidos y progresó a líquidos? Eso es disfagia lógica. ¿Afecta a los líquidos desde el inicio y fluctúa? Eso es ilógica.',
          ['Lógica', N('alert', 'EDA + biopsia', 'Descartar cáncer de esófago',
            'Disfagia lógica significa obstrucción mecánica que crece. Hay que descartar un cáncer de esófago, sobre todo con baja de peso: endoscopía digestiva alta con biopsia.')],
          ['Ilógica', N('do', 'Manometría esofágica', 'Trastorno motor',
            'Disfagia ilógica es un problema del músculo, no un tumor. El examen de elección es la manometría esofágica.',
            ['', N('q', '¿Pirosis intensa + Raynaud?', 'Calcinosis, telangiectasias',
              '¿Se acompaña de pirosis intensa, fenómeno de Raynaud o calcinosis?',
              ['SÍ', N('refer', 'Esclerodermia (CREST)', 'Anti-Scl-70 · anticentrómero',
                'Eso es esclerodermia: un trastorno motor con reflujo ácido grave. Se piden anticuerpos anti Scl setenta y anticentrómero.')],
              ['NO', N('refer', 'Acalasia', 'Miotomía del EEI de elección',
                'Sin reflujo, con regurgitación no ácida y neumonías aspirativas: acalasia. El esfínter no se relaja, y el tratamiento de elección es la miotomía del esfínter esofágico inferior.')])])])])]),
  },
};
