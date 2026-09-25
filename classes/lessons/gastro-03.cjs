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
      title: 'EUNACOM Julio 2013 · Pregunta 22',
      stem: 'Paciente de 80 años, con antecedente de hipertensión, diabetes insulinodependiente con mal control metabólico y epigastralgia en tratamiento crónico con omeprazol, consulta por cuadro de disfagia lógica asociado a odinofagia de un mes de evolución. Al examen físico no se encuentran alteraciones.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Cáncer esofágico' },
        { letter: 'B', text: 'Reflujo gastroesofágico' },
        { letter: 'C', text: 'Acalasia' },
        { letter: 'D', text: 'Candidiasis esofágica' },
        { letter: 'E', text: 'Divertículo esofágico' },
      ],
      correct: 'A',
      explanation: 'La disfagia es lógica, y eso ya apunta a una obstrucción que crece, no a un trastorno motor: cae la acalasia. El uso crónico de omeprazol sugiere un reflujo de base, y a los ochenta años, con este patrón progresivo, hay que descartar cáncer de esófago antes que quedarse con el reflujo. La candidiasis esofágica es el distractor, porque el paciente es diabético mal controlado y tiene odinofagia, pero no da una disfagia lógica progresiva como esta.',
      say: {
        stem: 'Vamos con una pregunta real, de julio de dos mil trece. Paciente de ochenta años, con hipertensión, diabetes insulinodependiente con mal control metabólico, y epigastralgia en tratamiento crónico con omeprazol, que consulta por disfagia lógica asociada a odinofagia de un mes de evolución. El examen físico es normal.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las alternativas: cáncer esofágico, reflujo gastroesofágico, acalasia, candidiasis esofágica, o divertículo esofágico. Piénsalo.',
        answer: 'Es la A, cáncer esofágico. La disfagia es lógica, y eso apunta a una obstrucción que crece, no al músculo: por eso cae la acalasia. El distractor más tentador es la candidiasis esofágica, porque el paciente es diabético con mal control y tiene odinofagia. Pero la candidiasis no da una disfagia lógica progresiva, y el omeprazol crónico habla de un reflujo de base que, a los ochenta años, obliga a descartar cáncer antes que quedarte tranquilo con el reflujo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 112',
      stem: 'Un paciente de 80 años consulta por dificultades para comer, caracterizada por disfagia alta intermitente, tanto para alimentos sólidos como líquidos. Refiere, además, regurgitación frecuente de alimentos, halitosis y una pérdida de peso de 4 kg en los últimos meses.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Acalasia esofágica' },
        { letter: 'B', text: 'Cáncer de esófago' },
        { letter: 'C', text: 'Divertículo de Zenker' },
        { letter: 'D', text: 'Esclerosis sistémica con compromiso esofágico' },
        { letter: 'E', text: 'Reflujo gastroesofágico' },
      ],
      correct: 'C',
      explanation: 'La disfagia es alta, no baja, y viene con halitosis marcada porque el alimento retenido en el saco fermenta: divertículo de Zenker. El distractor es la acalasia, que también da disfagia ilógica y regurgitación de comida sin digerir, pero es baja y no explica una halitosis tan marcada.',
      say: {
        stem: 'Ahora una pregunta real de julio de dos mil veinticuatro. Un paciente de ochenta años consulta por dificultad para comer: disfagia alta e intermitente, tanto para sólidos como para líquidos. Además tiene regurgitación frecuente de alimentos, halitosis, y ha bajado cuatro kilos en los últimos meses.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las alternativas: acalasia esofágica, cáncer de esófago, divertículo de Zenker, esclerosis sistémica con compromiso esofágico, o reflujo gastroesofágico. Piénsalo.',
        answer: 'Es la C, divertículo de Zenker. La clave es que la disfagia es alta, no baja, y viene con halitosis marcada, porque el alimento retenido en el saco fermenta. El distractor es la acalasia, que también da disfagia ilógica y regurgitación de comida sin digerir, pero es baja y no trae esa halitosis tan marcada.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 31',
      stem: 'Una paciente de 47 años, con antecedente de pirosis y dolor epigástrico de 8 meses de evolución, consulta por disfagia ilógica, de localización alta, que ha ido en aumento. Refiere fenómeno de Raynaud y al examen físico se aprecia esclerodactilia, telangiectasias en el pecho y piel de la cara indurada, sin líneas de expresión.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Acalasia esofágica' },
        { letter: 'B', text: 'Esclerosis sistémica' },
        { letter: 'C', text: 'Dermatomiositis' },
        { letter: 'D', text: 'Lupus eritematoso sistémico' },
        { letter: 'E', text: 'Enfermedad mixta del tejido conectivo' },
      ],
      correct: 'B',
      explanation: 'El combo de Raynaud, esclerodactilia, telangiectasias y piel indurada, más un trastorno motor esofágico con pirosis, es un CREST clásico: esclerosis sistémica. La acalasia también da disfagia ilógica, pero no explica el resto del cuadro, que es de la piel y los vasos, no solo del músculo esofágico.',
      say: {
        stem: 'Una pregunta real de diciembre de dos mil dieciocho. Mujer de cuarenta y siete años, con pirosis y dolor epigástrico de ocho meses, que consulta por disfagia ilógica alta que ha ido en aumento. Tiene fenómeno de Raynaud, esclerodactilia, telangiectasias en el pecho, y la piel de la cara indurada, sin líneas de expresión.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las alternativas: acalasia esofágica, esclerosis sistémica, dermatomiositis, lupus eritematoso sistémico, o enfermedad mixta del tejido conectivo. Piénsalo.',
        answer: 'Es la B, esclerosis sistémica, un CREST. Fíjate en el combo: Raynaud, esclerodactilia, telangiectasias y piel indurada, más un trastorno motor esofágico con pirosis. El distractor es la acalasia, que también da disfagia ilógica, pero no explica el resto: el Raynaud y la piel indurada son de la esclerodermia, no del músculo esofágico solo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 38',
      stem: 'Una paciente de 56 años, con antecedente de haber vivido en Brasil hasta hace 6 meses, consulta por disfagia lógica y progresiva, asociada a baja de peso de 6 kilogramos. Su examen físico no tiene alteraciones. Tiene antecedente de pirosis y regurgitación de larga data.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Cáncer de esófago' },
        { letter: 'B', text: 'Estenosis péptica' },
        { letter: 'C', text: 'Esofagitis eosinofílica' },
        { letter: 'D', text: 'Acalasia esofágica' },
        { letter: 'E', text: 'Cáncer gástrico' },
      ],
      correct: 'A',
      explanation: 'El antecedente de vivir en Brasil sugiere Chagas, que también da un trastorno motor esofágico, pero la clínica es de disfagia lógica: progresiva, primero sólidos y luego líquidos. Chagas, esclerodermia y acalasia suelen dar disfagia ilógica. El patrón manda sobre el antecedente epidemiológico.',
      say: {
        stem: 'Otra pregunta real, de julio de dos mil diecinueve. Mujer de cincuenta y seis años, que vivió en Brasil hasta hace seis meses, consulta por disfagia lógica y progresiva, con baja de seis kilos. El examen físico es normal, y tiene pirosis y regurgitación de larga data.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las alternativas: cáncer de esófago, estenosis péptica, esofagitis eosinofílica, acalasia esofágica, o cáncer gástrico. Piénsalo.',
        answer: 'Es la A, cáncer de esófago. El antecedente de Brasil tienta a pensar en la enfermedad de Chagas, que también compromete el esófago. Pero Chagas, igual que la acalasia y la esclerodermia, da disfagia ilógica, y aquí el patrón es lógico y progresivo, de sólidos a líquidos. El patrón clínico manda por sobre el antecedente epidemiológico.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2024 · Pregunta 50',
      stem: 'Disfagia a nivel de la apófisis xifoides luego de comer pollo, que no permitía el paso ni siquiera del agua.',
      question: '¿Cuál es la conducta?',
      options: [
        { letter: 'A', text: 'Endoscopía digestiva alta' },
        { letter: 'B', text: 'Radiografía' },
        { letter: 'C', text: 'Nasolaringoscopia' },
        { letter: 'D', text: 'Manometría esofágica' },
        { letter: 'E', text: 'Derrame pleural' },
      ],
      correct: 'A',
      explanation: 'Un trozo de comida que se impacta y bloquea por completo el esófago, incluso para el agua, es una urgencia: la conducta es la endoscopía digestiva alta, que retira el bolo y de paso muestra si hay una causa de base, como un anillo de Schatzki o una estenosis péptica.',
      say: {
        stem: 'Una pregunta real más, de diciembre de dos mil veinticuatro, corta y directa. Un paciente tiene disfagia a nivel del esternón después de comer pollo, y no le pasa ni el agua.',
        question: '¿Cuál es la conducta?',
        options: 'Las alternativas: endoscopía digestiva alta, radiografía, nasolaringoscopia, manometría esofágica, o derrame pleural. Piénsalo.',
        answer: 'Es la A, endoscopía digestiva alta. Un bolo de comida que bloquea el esófago por completo, ni el agua pasa, es una urgencia, y el mismo procedimiento que retira el trozo atascado te muestra si detrás hay un anillo de Schatzki o una estenosis péptica, que es justamente el cuadro que vimos como disfagia lógica intermitente y sin baja de peso.',
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
