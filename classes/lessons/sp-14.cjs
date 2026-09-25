// Clase 21.14 — guion docente escrito a mano (ver gastro-01.cjs, gastro-02.cjs y sp-11.cjs para el formato).
// Fuente: books/scripts/dataset_saludpublica.cjs (sp-14).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'sp-14',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Las tres causales de la Ley IVE, el límite de la objeción de conciencia, y el fraude en las licencias médicas',
      say: 'Bienvenidos. Cerramos el módulo con tres leyes especiales que se preguntan seguido: la Ley veintiún mil treinta, que despenalizó la interrupción voluntaria del embarazo en tres causales, el Código Sanitario, que regula quién puede ejercer la medicina, y la ley que castiga penalmente las licencias médicas fraudulentas. El hilo de hoy es simple: cada una de estas leyes tiene un límite exacto, y ese límite es justamente lo que se pregunta.',
    },

    {
      type: 'points',
      kicker: 'Ley IVE veintiún mil treinta',
      title: 'Tres causales, y solo tres',
      cards: [
        { title: 'Causal uno: riesgo vital', tag: 'Sin límite de semanas', kind: 'key', items: [
          { t: 'Riesgo vital actual o inminente', d: 'La interrupción evita un peligro para la vida de la madre',
            say: 'La ley regula la interrupción del embarazo bajo tres causales, y nada más que esas tres. La primera es el riesgo vital: la mujer está en riesgo vital actual o inminente, y la interrupción evita ese peligro para su vida. No tiene límite de edad gestacional, y en general se exige el diagnóstico del médico tratante más la ratificación de un segundo especialista, aunque en una urgencia extrema esa segunda ratificación puede no ser exigible antes de actuar.' },
        ] },
        { title: 'Causal dos: inviabilidad fetal', tag: 'Sin límite de semanas', kind: 'key', items: [
          { t: 'Patología letal incompatible con la vida', d: 'Estructural o cromosómica, extrauterina',
            say: 'La segunda causal es la inviabilidad fetal: el feto tiene una patología congénita, estructural o cromosómica, incompatible con la vida fuera del útero, como una anencefalia. Tampoco tiene límite de semanas, y exige el diagnóstico concordante y por escrito de dos médicos especialistas.' },
        ] },
        { title: 'Causal tres: violación', tag: 'Hasta doce semanas', kind: 'alert', items: [
          { t: 'Embarazo producto de agresión sexual', d: 'Límite de doce semanas de gestación',
            say: 'Y la tercera causal es la violación: el embarazo es resultado de una agresión sexual, y aquí sí hay un límite, hasta las doce semanas de gestación.' },
          { t: 'Niñas menores de catorce años', d: 'El límite se extiende a catorce semanas',
            say: 'Pero hay una excepción que se pregunta directo: si la víctima es una niña menor de catorce años, ese límite se amplía hasta las catorce semanas de gestación. Guarda ese número, porque es justamente la trampa de la pregunta real que viene más adelante.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Objeción de conciencia',
      title: 'Un derecho real, pero no absoluto',
      nodes: [
        { id: 'obj', col: 0, row: 1, k: 'start', t: 'Médico objetor de conciencia', s: 'Manifestado antes, por escrito' },
        { id: 'req', col: 1, row: 0, k: 'q', t: 'Caso no urgente', s: '¿Hay otro médico disponible?' },
        { id: 'der', col: 2, row: 0, k: 'good', t: 'Deriva de inmediato', s: 'A un médico no objetor de la red' },
        { id: 'urg', col: 1, row: 2, k: 'q', t: 'Causal uno, riesgo vital inminente', s: '¿Hay otro médico disponible?' },
        { id: 'sin', col: 2, row: 2, k: 'refer', t: 'No hay otro médico', s: 'La paciente puede morir' },
        { id: 'ope', col: 3, row: 2, k: 'alert', t: 'Debe intervenir igual', s: 'La objeción queda suspendida por ley' },
      ],
      edges: [
        { from: 'obj', to: 'req' }, { from: 'req', to: 'der', label: 'siempre hay otro' },
        { from: 'obj', to: 'urg' }, { from: 'urg', to: 'sin' }, { from: 'sin', to: 'ope' },
      ],
      steps: [
        { show: ['obj'], note: 'Es personalísimo, del médico y del pabellón',
          say: 'Ahora el punto que más se pregunta de esta ley: la objeción de conciencia. Es el derecho del médico requerido, y también del resto del equipo de pabellón, a abstenerse de realizar la interrupción por razones éticas o religiosas. Pero para que valga, tiene que haberse manifestado antes, por escrito, ante el director del establecimiento. No sirve decirlo recién en el momento.' },
        { show: ['req', 'der'], note: 'El objetor no atiende, pero no puede dejar sola a la paciente',
          say: 'En un caso que no es urgente, el objetor tiene la obligación de informar de inmediato a la dirección, para que reasignen a la paciente a un médico no objetor, dentro del mismo centro o derivándola a otro de la red. El objetor no interviene, pero tampoco puede simplemente dejarla sin atención.' },
        { show: ['urg'], note: 'Aquí cambia todo',
          say: 'Pero hay un escenario donde la objeción deja de proteger al médico: la causal uno, con riesgo vital inminente para la madre.' },
        { show: ['sin', 'ope'], note: 'La objeción se suspende por ley ante el peligro vital',
          say: 'Si la mujer necesita atención inmediata, y no existe ningún otro médico cirujano disponible en ese establecimiento, el objetor tiene la obligación legal y ética de intervenir igual, para evitar que la madre muera. La objeción de conciencia queda suspendida por ley ante un peligro vital inminente. Esta excepción es la que garantiza pregunta.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Código Sanitario',
      title: 'Quién puede ejercer la medicina',
      cards: [
        { title: 'Artículo ciento doce', tag: 'Título habilitante', kind: 'criteria', items: [
          { t: 'Exige título de médico cirujano', d: 'Y revalidación o aprobar el EUNACOM si es extranjero',
            say: 'Cambiemos de ley. El Código Sanitario es el cuerpo normativo que regula el ejercicio de las profesiones de salud en Chile. Su artículo ciento doce exige un título oficial de médico cirujano, legalmente habilitado, y en el caso de un extranjero, la revalidación de su título o la aprobación del EUNACOM.' },
        ] },
        { title: 'Artículo ciento trece', tag: 'Ejercicio médico legal', kind: 'criteria', items: [
          { t: 'Diagnóstico, pronóstico y tratamiento', d: 'La prescripción de fármacos éticos es exclusiva',
            say: 'El artículo ciento trece define el ejercicio médico como el diagnóstico, el pronóstico y el tratamiento de las enfermedades humanas, y reserva la prescripción de fármacos éticos a los médicos cirujanos, a los odontólogos en su ámbito, y a las matronas, exclusivamente en el área gineco obstétrica y de planificación familiar.' },
          { t: 'Ejercicio sin título: delito', d: 'Intrusismo profesional, sancionado penalmente',
            say: 'Y ejercer la medicina sin ese título habilitante constituye un delito penal de ejercicio ilegal de la profesión, lo que en la práctica se llama intrusismo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Licencias médicas',
      title: 'Un documento legal, no solo un trámite',
      cards: [
        { title: 'Naturaleza y fiscalización', tag: 'COMPIN y SUSESO', kind: 'normal', items: [
          { t: 'Certifica incapacidad laboral transitoria', d: 'Da origen al subsidio por incapacidad laboral',
            say: 'La licencia médica es a la vez un acto médico y un documento legal oficial: certifica que el trabajador está incapacitado transitoriamente, y justifica su ausencia, dando origen al pago del subsidio correspondiente. La COMPIN autoriza, reduce o rechaza las licencias, y la SUSESO es la instancia técnica que resuelve las apelaciones.' },
        ] },
        { title: 'Emisión fraudulenta', tag: 'Delito penal', kind: 'alert', items: [
          { t: 'Sin evaluación clínica real', d: 'O sin que exista la patología que se alega',
            say: 'Emitir una licencia médica falsa, o sin que haya mediado una evaluación clínica real o una patología que la justifique, es un delito penal, no una simple infracción administrativa.' },
          { t: 'Presidio, multa e inhabilitación', d: 'Multas de cincuenta a quinientas UTM',
            say: 'Las sanciones incluyen presidio, multas económicas a beneficio fiscal de entre cincuenta y quinientas UTM, e inhabilitación, temporal o incluso perpetua, para emitir licencias médicas y ejercer cargos en el sistema público de salud.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol de decisión frente a una solicitud de interrupción del embarazo.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las tres causales de la Ley IVE',
      head: ['Causal', 'Límite de edad gestacional', 'Requisito de acreditación'],
      rows: [
        { cells: ['Riesgo vital materno', 'Sin límite', 'Médico tratante más un segundo especialista'],
          say: 'Repasemos con la tabla. La causal de riesgo vital materno no tiene límite de semanas, y exige el diagnóstico del médico tratante más un segundo especialista.' },
        { cells: ['Inviabilidad fetal', 'Sin límite', 'Diagnóstico concordante de dos especialistas'],
          say: 'La inviabilidad fetal tampoco tiene límite de semanas, y exige el diagnóstico concordante de dos médicos especialistas.' },
        { cells: ['Violación, mayor de 14 años', 'Hasta doce semanas', 'Evaluación del equipo de salud'],
          say: 'La violación en una mujer mayor de catorce años tiene tope de doce semanas.' },
        { cells: ['Violación, niña menor de 14 años', 'Hasta catorce semanas', 'Evaluación del equipo de salud'],
          say: 'Y la violación en una niña menor de catorce años amplía el tope hasta las catorce semanas. Confundir estos dos números es el error más común del tema.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'En un hospital provincial de baja complejidad, una gestante de 16 semanas ingresa a la urgencia obstétrica con un shock hipovolémico severo por rotura uterina espontánea y hemoperitoneo masivo, con riesgo de muerte inminente. Es Causal 1 de la Ley IVE. El único gineco-obstetra de turno está inscrito como objetor de conciencia, manifiesta que por sus convicciones no realizará la intervención, y solicita trasladar a la paciente a un hospital regional ubicado a 3 horas de distancia.',
      question: '¿Cuál es la conducta correcta?',
      options: [
        { letter: 'A', text: 'Trasladar a la paciente al hospital regional, respetando la objeción del médico' },
        { letter: 'B', text: 'El médico debe intervenir de inmediato: la objeción se suspende ante el riesgo vital sin otro médico disponible' },
        { letter: 'C', text: 'Esperar la autorización de la dirección del hospital antes de decidir' },
        { letter: 'D', text: 'Convocar al Comité de Ética Asistencial antes de intervenir' },
        { letter: 'E', text: 'Sedar a la paciente y esperar a que llegue otro especialista' },
      ],
      correct: 'B',
      explanation: 'La objeción de conciencia no es absoluta: cesa por ley cuando hay riesgo vital inminente bajo la Causal 1 y no existe otro médico disponible. Trasladarla a tres horas de distancia, esperar una autorización o convocar a un comité expone a la paciente a morir mientras se completa un trámite; el deber de preservar la vida prima sobre la objeción personal en ese escenario extremo.',
      say: {
        stem: 'Vamos con un caso. En un hospital provincial de baja complejidad, una gestante de dieciséis semanas ingresa a la urgencia obstétrica con un shock grave por rotura uterina espontánea y hemoperitoneo masivo, con riesgo de muerte inminente. Es la causal uno de la Ley IVE. El único gineco obstetra de turno está inscrito como objetor de conciencia, dice que por sus convicciones no hará la intervención, y pide trasladarla a un hospital regional lejano.',
        question: '¿Cuál es la conducta correcta?',
        options: 'Las opciones: trasladarla respetando la objeción, que el médico intervenga de inmediato porque la objeción se suspende, esperar autorización de la dirección, convocar al comité de ética, o sedarla mientras llega otro especialista. Piénsalo.',
        answer: 'Es la B. Este caso está armado exactamente para la excepción que vimos: riesgo vital inminente, causal uno, y ningún otro médico disponible en el establecimiento. En ese escenario, la objeción de conciencia se suspende por ley, y el médico tiene la obligación de intervenir de inmediato. Trasladarla tres horas, esperar un trámite o convocar a un comité son formas de dejarla morir mientras se resuelve un papeleo, y eso es justamente lo que la ley busca evitar.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 118',
      stem: 'Paciente de 22 años con embarazo de 18 semanas acude a urgencias solicitando la interrupción voluntaria del embarazo. No presenta ninguna de las tres causales legales vigentes en Chile.',
      question: '¿Cuál es la conducta médica correcta?',
      options: [
        { letter: 'A', text: 'Informar que la interrupción no procede legalmente y derivar a consejería' },
        { letter: 'B', text: 'Realizar la interrupción por solicitud de la paciente' },
        { letter: 'C', text: 'Derivar de urgencia a matrona' },
        { letter: 'D', text: 'Hospitalizar para observación' },
        { letter: 'E', text: 'Referir al comité de ética del hospital' },
      ],
      correct: 'A',
      explanation: 'La Ley 21.030 permite la interrupción solo dentro de las tres causales taxativas. Sin ninguna de ellas presente, la interrupción no procede aunque la paciente la solicite: el médico debe informar, orientar y derivar a apoyo psicosocial, no ejecutar el procedimiento ni delegarlo sin fundamento legal.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil veinticinco. Una paciente de veintidós años, con un embarazo de dieciocho semanas, llega a urgencias pidiendo que le interrumpan el embarazo. No cumple ninguna de las tres causales legales vigentes en Chile.',
        question: '¿Cuál es la conducta médica correcta?',
        options: 'Las opciones: informar que no procede legalmente y derivar a consejería, realizar la interrupción porque ella lo solicita, derivarla de urgencia a matrona, hospitalizarla para observación, o referirla al comité de ética.',
        answer: 'Es la A. La ley es taxativa: solo se puede interrumpir el embarazo dentro de una de las tres causales. Sin ninguna presente, la sola voluntad de la paciente no basta, por más respetable que sea. Lo correcto es informarle con claridad que no procede, y derivarla a apoyo psicosocial. Derivarla a otro profesional o a un comité no resuelve nada, porque el problema no es de competencia clínica: es que la ley simplemente no lo permite.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 5',
      stem: 'Se evalúa cuál de las siguientes situaciones corresponde a una licencia médica tipo I, es decir, por enfermedad o accidente común.',
      question: '¿Cuál de las siguientes corresponde a una licencia médica tipo I?',
      options: [
        { letter: 'A', text: 'Amigdalitis aguda' },
        { letter: 'B', text: 'Accidente laboral con fractura' },
        { letter: 'C', text: 'Enfermedad profesional por ruido' },
        { letter: 'D', text: 'Reposo por embarazo de alto riesgo' },
        { letter: 'E', text: 'Licencia por maternidad' },
      ],
      correct: 'A',
      explanation: 'La licencia tipo I es por enfermedad o accidente común, es decir, sin relación con el trabajo ni con el embarazo. Una amigdalitis aguda es una enfermedad común corriente. El accidente laboral y la enfermedad profesional se cubren por la ley de accidentes del trabajo, no como tipo I; el embarazo de alto riesgo y la maternidad tienen sus propios regímenes de licencia, distintos del tipo I.',
      say: {
        stem: 'Y una segunda pregunta real, del EUNACOM de enero de dos mil veintitrés, sobre otro punto de las licencias médicas. Se pregunta cuál de las siguientes situaciones corresponde a una licencia médica tipo uno, por enfermedad o accidente común.',
        question: '¿Cuál de las siguientes corresponde a una licencia médica tipo uno?',
        options: 'Las opciones: amigdalitis aguda, accidente laboral con fractura, enfermedad profesional por ruido, reposo por embarazo de alto riesgo, o licencia por maternidad.',
        answer: 'Es la A, amigdalitis aguda. Es una enfermedad común, sin relación con el trabajo, y eso es exactamente lo que define al tipo uno. El accidente laboral y la enfermedad por ruido se cubren por la ley de accidentes del trabajo, no como tipo uno, y el embarazo de alto riesgo y la maternidad tienen sus propios regímenes de licencia. Fíjate en el patrón: el tipo de licencia lo define el origen de la incapacidad, no la gravedad del cuadro.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Ley IVE', tag: 'Tres causales, un límite', kind: 'key', items: [
          { t: 'Riesgo vital e inviabilidad: sin límite', d: 'Violación: doce semanas, o catorce en menores',
            say: 'Cerremos con las reglas de oro. Las causales de riesgo vital y de inviabilidad fetal no tienen límite de semanas; la de violación sí, doce semanas, o catorce si la víctima es una niña menor de catorce años.' },
          { t: 'Objeción de conciencia', d: 'Se suspende ante riesgo vital sin otro médico disponible',
            say: 'Y la objeción de conciencia es un derecho real, pero se suspende por ley cuando hay riesgo vital inminente y no hay otro médico disponible.' },
        ] },
        { title: 'Ejercicio y licencias', tag: 'Título y honestidad clínica', kind: 'alert', items: [
          { t: 'Sin título habilitante: delito', d: 'El Código Sanitario reserva el ejercicio médico',
            say: 'El Código Sanitario reserva el ejercicio de la medicina a quien tiene el título habilitante; ejercer sin él es un delito.' },
          { t: 'Licencia fraudulenta: presidio e inhabilitación', d: 'No es una falta administrativa menor',
            say: 'Y emitir una licencia médica fraudulenta trae presidio, multa e inhabilitación, no una simple amonestación. Si te llevas una sola idea de hoy: cada una de estas leyes protege algo distinto, pero todas fallan igual cuando se cruza el límite exacto que fija la norma. Con esto cerramos el módulo completo de salud pública. Mucho éxito en tu examen.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Decidir frente a una solicitud de interrupción del embarazo',
    root: N(
      'start', 'Una paciente solicita la interrupción de su embarazo', '¿Cumple alguna de las tres causales legales?',
      'La ley es taxativa: sin una causal, la sola voluntad de la paciente no habilita el procedimiento.',
      ['No cumple ninguna causal', N(
        'alert', 'No procede: informar y derivar', 'Orientación y apoyo psicosocial',
        'Se explica con claridad por qué no procede, y se deriva a apoyo, sin ejecutar el procedimiento.',
      )],
      ['Cumple la causal de riesgo vital o inviabilidad fetal', N(
        'q', '¿El médico tratante es objetor de conciencia?', 'No hay límite de semanas en estas dos causales',
        'Estas dos causales se acreditan con el diagnóstico correspondiente, sin tope de edad gestacional.',
        ['No es objetor', N(
          'ok', 'Realiza el procedimiento', 'Con los requisitos de acreditación de la causal',
          'Se cumplen los requisitos de la causal y se procede con la interrupción.',
        )],
        ['Es objetor, y hay riesgo vital sin otro médico', N(
          'refer', 'Debe intervenir de todas formas', 'La objeción se suspende por ley',
          'Ante un riesgo vital inminente sin médico alternativo, la objeción de conciencia no protege al objetor.',
        )],
      )],
      ['Cumple la causal de violación', N(
        'q', '¿Cuántas semanas de gestación, y qué edad tiene la paciente?', 'El límite depende de la edad de la víctima',
        'Doce semanas es el límite general; catorce, si la víctima es una niña menor de catorce años.',
        ['Dentro del límite que corresponde', N(
          'do', 'Procede la interrupción', 'Tras la evaluación del equipo de salud',
          'Se acredita la concurrencia de los hechos y se procede dentro del plazo legal.',
        )],
        ['Fuera del límite que corresponde', N(
          'alert', 'No procede por esta causal', 'Evaluar si aplica otra causal distinta',
          'Superado el plazo, esta causal específica ya no habilita el procedimiento.',
        )],
      )],
    ),
  },
};
