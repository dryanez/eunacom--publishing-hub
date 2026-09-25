// Clase 21.4 — guion docente escrito a mano (ver gastro-01.cjs y gastro-02.cjs para el formato).
// Fuente: books/scripts/dataset_saludpublica.cjs / dataset_saludpublica_bloque_1.cjs (sp-04).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'sp-04',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Ante la sola sospecha, o dentro de veinticuatro horas: la distinción que más se pregunta',
      say: 'Bienvenidos. Hoy vemos las Enfermedades de Notificación Obligatoria en Chile, uno de los temas de más alta frecuencia del EUNACOM. La pregunta clásica es siempre la misma: frente a una enfermedad, hay que decidir si se notifica de inmediato o dentro de un día. El marco legal es el Decreto Supremo número siete, y de esa decisión depende si el paciente y sus contactos reciben profilaxis a tiempo. Vamos a ordenarla.',
    },

    {
      type: 'points',
      kicker: 'Marco legal',
      title: 'La obligación y la plataforma Epivigila',
      cards: [
        { title: 'Deber legal de todo médico', tag: 'Público y privado', kind: 'alert', items: [
          { t: 'Notificar es obligatorio', d: 'En cualquier establecimiento, público o privado',
            say: 'Partamos por lo legal. Todo médico cirujano que ejerce en Chile, en un hospital público, una clínica privada, un laboratorio o un centro comunitario, tiene la obligación de notificar las enfermedades transmisibles sujetas a vigilancia.' },
          { t: 'No notificar es una infracción grave', d: 'Sumario sanitario, multas e inhabilidad',
            say: 'No es una sugerencia: el incumplimiento constituye una infracción sanitaria severa, contemplada en el Código Sanitario, sancionable con sumario sanitario, multas e incluso inhabilidad profesional.' },
        ] },
        { title: 'Cómo se notifica', tag: 'Epivigila', kind: 'key', items: [
          { t: 'Sistema Epivigila', d: 'O comunicación directa a la SEREMI de Salud en emergencias',
            say: 'La vía es el sistema informático nacional Epivigila, o la comunicación telefónica directa a la Unidad de Epidemiología de la SEREMI de Salud cuando la emergencia lo exige. Y este es el puente con la clase de rectoría del sistema: la vigilancia epidemiológica depende de la Subsecretaría de Salud Pública, que coordina a las SEREMI.' },
        ] },
        { title: 'Tres formas de vigilar', tag: 'No son lo mismo', kind: 'normal', items: [
          { t: 'Vigilancia activa: la notificación obligatoria', d: 'El sistema busca cada caso, sea inmediato o diario',
            say: 'Y para que no se te mezclen los términos: la notificación obligatoria, sea inmediata o diaria, es una forma de vigilancia activa. El sistema exige que cada caso, uno por uno, se reporte apenas aparece.' },
          { t: 'Vigilancia pasiva: solo estadística', d: 'Para enfermedades leves y poco transmisibles',
            say: 'La vigilancia pasiva es distinta: se usa para cuadros leves y poco transmisibles, como las infecciones urinarias o los exantemas banales, donde simplemente se reportan estadísticas generales para analizarlas después, sin urgencia de caso por caso. Ordénalas así: la activa exige buscar cada caso, la centinela muestrea en algunos centros, y la pasiva solo junta lo que ya se reportó por otra vía.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Notificación inmediata',
      title: 'Ante la sola sospecha, sin esperar el laboratorio',
      cards: [
        { title: 'La regla', tag: 'No se espera confirmación', kind: 'alert', items: [
          { t: 'Se notifica con la sospecha clínica', d: 'Por la vía más rápida disponible',
            say: 'Las enfermedades de notificación inmediata se notifican por la vía más rápida disponible, dentro de las primeras horas, y con un principio que se pregunta mucho: nunca se espera el resultado de laboratorio. La sospecha clínica basta.' },
          { t: 'Por qué la urgencia', d: 'Permite bloquear el brote y proteger a los contactos',
            say: 'La razón es que estas enfermedades son graves y poco frecuentes, y esperar la confirmación retrasa el control del brote y la protección de los contactos, que a veces necesitan una profilaxis en las primeras horas.' },
        ] },
        { title: 'Ejemplos que se preguntan', tag: 'La lista clásica', kind: 'criteria', items: [
          { t: 'Meningococo y Hantavirus', d: 'Sarampión, rubéola y rabia',
            say: 'En esta lista están la enfermedad meningocócica invasora y el síndrome cardiopulmonar por Hantavirus, el sarampión, la rubéola y la rabia.' },
          { t: 'Cólera, botulismo, ántrax y peste', d: 'Y los brotes de enfermedades transmitidas por alimentos',
            say: 'También el cólera, el botulismo, el ántrax, la peste, y los brotes de enfermedades transmitidas por alimentos, que se definen como dos o más personas con el mismo cuadro tras compartir un alimento común.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Notificación diaria',
      title: 'Dentro de veinticuatro horas',
      cards: [
        { title: 'La regla', tag: 'Menos urgente, no menos importante', kind: 'normal', items: [
          { t: 'Al confirmarse o sospecharse', d: 'Dentro de las veinticuatro horas siguientes',
            say: 'Las enfermedades de notificación diaria se notifican dentro de las veinticuatro horas siguientes a la atención o a la confirmación, de forma agrupada o individual según el formulario oficial. Son enfermedades menos virulentas o más frecuentes, así que el sistema no necesita reaccionar en el acto, pero igual necesita el dato para vigilar tendencias en el tiempo y detectar a tiempo si una de ellas empieza a comportarse como un brote.' },
        ] },
        { title: 'Ejemplos que se preguntan', tag: 'La lista clásica', kind: 'criteria', items: [
          { t: 'Tuberculosis, sífilis, gonorrea y VIH', d: 'Todas sus formas',
            say: 'Aquí están la tuberculosis en todas sus formas, y las infecciones de transmisión sexual: sífilis, gonorrea, y la infección por VIH.' },
          { t: 'Hepatitis virales, coqueluche y Chagas', d: 'Y tétanos, hidatidosis y brucelosis',
            say: 'También las hepatitis virales agudas, la coqueluche o tos ferina, la enfermedad de Chagas, el tétanos, la hidatidosis y la brucelosis. Fíjate en la lógica: si una enfermedad de esta lista aparece en un brote inusual, con varios casos agrupados, ahí sí puede exigir una notificación más urgente, porque lo que cambia la velocidad no es solo el nombre de la enfermedad, sino la letalidad y la frecuencia con la que se está presentando.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Después de notificar',
      title: 'Qué hace la autoridad sanitaria',
      nodes: [
        { id: 'sos', col: 0, row: 1, k: 'start', t: 'Sospecha notificada', s: 'A la SEREMI de Salud' },
        { id: 'inv', col: 1, row: 1, k: 'mech', t: 'Investigación epidemiológica', s: 'Estudio de contactos' },
        { id: 'men', col: 2, row: 0, k: 'good', t: 'Meningococo', s: 'Rifampicina o ciprofloxacino a contactos' },
        { id: 'coq', col: 2, row: 1, k: 'good', t: 'Coqueluche', s: 'Azitromicina a convivientes' },
        { id: 'han', col: 2, row: 2, k: 'trap', t: 'Hantavirus', s: 'No existe quimioprofilaxis' },
        { id: 'eta', col: 3, row: 1, k: 'alert', t: 'Brote de ETA', s: 'Inspección y decomiso del alimento' },
      ],
      edges: [
        { from: 'sos', to: 'inv' },
        { from: 'inv', to: 'men' }, { from: 'inv', to: 'coq' }, { from: 'inv', to: 'han' }, { from: 'inv', to: 'eta' },
      ],
      steps: [
        { show: ['sos', 'inv'], note: 'La notificación gatilla la investigación',
          say: 'Una vez notificada la sospecha, la SEREMI de Salud despliega una investigación epidemiológica y un estudio de contactos. Pero lo que se hace con esos contactos cambia según la enfermedad.' },
        { show: ['men'], note: 'Contacto estrecho: mismo techo o saliva compartida en diez días',
          say: 'En el meningococo, se define contacto estrecho a quien durmió bajo el mismo techo o compartió saliva en los últimos diez días, y a ellos se les da profilaxis con rifampicina, seiscientos miligramos cada doce horas por dos días, o ciprofloxacino en dosis única. En la embarazada se prefiere ceftriaxona intramuscular en dosis única.' },
        { show: ['coq'], note: 'Convivientes y cuidadores de lactantes',
          say: 'En la coqueluche, la profilaxis con azitromicina se da a los convivientes domiciliarios y a los cuidadores de lactantes, que son los que más riesgo tienen de un cuadro grave.' },
        { show: ['han'], note: 'Aquí no hay fármaco que prevenga',
          say: 'Y en el Hantavirus, ojo con la trampa: no existe quimioprofilaxis farmacológica. Lo que se hace es seguimiento clínico estrecho de los convivientes expuestos, y consulta precoz ante la fiebre.' },
        { show: ['eta'], note: 'Primero se confirma el brote, luego se busca el alimento',
          say: 'Y en un brote de enfermedades transmitidas por alimentos, la investigación sigue un orden. Primero se confirma que de verdad es un brote, con dos o más personas que comieron lo mismo, usando una curva epidémica y calculando la tasa de ataque.' },
        { show: ['eta'], note: 'El alimento es la escena del brote',
          say: 'Luego se identifica el alimento causante con un cuestionario alimentario y el cálculo del riesgo relativo de cada plato, y con eso se decide qué clausurar. La medida inmediata es la inspección sanitaria del lugar, el decomiso del alimento sospechoso y la toma de coprocultivos a los afectados para aislar al agente, casi siempre Salmonella o Staphylococcus.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora ordenemos la decisión completa: inmediata, diaria, o centinela.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Inmediata, diaria o centinela: quién es quién',
      head: ['Tipo de vigilancia', 'Cuándo se notifica', 'Ejemplos'],
      rows: [
        { cells: ['Notificación inmediata', 'Ante la sola sospecha, sin esperar laboratorio', 'Meningococo, Hantavirus, sarampión, cólera, brote de ETA'],
          say: 'Repasemos con una tabla. La notificación inmediata es ante la sola sospecha, sin esperar el laboratorio: meningococo, Hantavirus, sarampión, cólera y brotes de intoxicación alimentaria.' },
        { cells: ['Notificación diaria', 'Dentro de veinticuatro horas de confirmar o sospechar', 'Tuberculosis, sífilis, VIH, hepatitis, coqueluche'],
          say: 'La notificación diaria es dentro de veinticuatro horas: tuberculosis, sífilis, VIH, hepatitis virales y coqueluche.' },
        { cells: ['Vigilancia centinela', 'Muestreo periódico en centros determinados', 'Infecciones respiratorias altas, diarreas, influenza'],
          say: 'Y la vigilancia centinela no es notificación caso a caso, sino un muestreo periódico en centros de salud específicos, para enfermedades frecuentes y poco graves: infecciones respiratorias altas, diarreas y virus respiratorios como la influenza. El error clásico es tratar estas enfermedades frecuentes como si fueran de notificación inmediata.' },
        { cells: ['Brote de hepatitis A confirmado', 'Notificación diaria a la SEREMI', 'Confundirla con una enfermedad de notificación inmediata'],
          say: 'Y un dato fino: la hepatitis A, como enfermedad aislada, es de notificación diaria, no inmediata. Lo que sí exige reacción inmediata es un brote, dos o más casos ligados a una fuente común, porque ahí el objetivo pasa a ser cortar la transmisión.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Médico de urgencia rural atiende a un niño de 6 años con fiebre alta, cefalea, vómitos, rigidez de nuca y petequias en extremidades inferiores de 8 horas de evolución. Sospecha una enfermedad meningocócica invasora y solicita punción lumbar.',
      question: '¿Cuál es la conducta correcta respecto a la notificación epidemiológica?',
      options: [
        { letter: 'A', text: 'Notificar de inmediato a la SEREMI de Salud, sin esperar el resultado del citoquímico ni el cultivo de LCR' },
        { letter: 'B', text: 'Esperar el resultado del Gram del líquido cefalorraquídeo antes de notificar' },
        { letter: 'C', text: 'Notificar dentro de 24 horas, ya que se trata de una enfermedad de notificación diaria' },
        { letter: 'D', text: 'Notificar solo si el hemocultivo confirma Neisseria meningitidis' },
        { letter: 'E', text: 'No corresponde notificar hasta que el paciente sea dado de alta' },
      ],
      correct: 'A',
      explanation: 'La enfermedad meningocócica invasora es de notificación inmediata ante la sola sospecha clínica, sin esperar la confirmación de laboratorio, para permitir la quimioprofilaxis oportuna de los contactos estrechos.',
      say: {
        stem: 'Vamos con un caso. Un médico de urgencia rural atiende a un niño de seis años con fiebre alta, cefalea, vómitos, rigidez de nuca y petequias en las piernas, de ocho horas de evolución. Sospecha una enfermedad meningocócica y pide una punción lumbar.',
        question: '¿Cuál es la conducta correcta respecto a la notificación epidemiológica?',
        options: 'Las alternativas: notificar de inmediato sin esperar el citoquímico ni el cultivo, esperar el Gram del líquido cefalorraquídeo, notificar dentro de veinticuatro horas por ser de notificación diaria, notificar solo si el hemocultivo confirma la bacteria, o no notificar hasta el alta. Piénsalo.',
        answer: 'Es la A. La enfermedad meningocócica es de notificación inmediata, y la regla de oro es que la sospecha clínica ya basta: no se espera el Gram, ni el cultivo, ni el alta. Cada hora que se demora la notificación es una hora menos de profilaxis para los contactos de este niño.' },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 60',
      stem: 'Usted atiende a 5 pacientes que consultan por vómitos y diarrea de inicio agudo en el mismo servicio de urgencia. Todos ellos son compañeros de trabajo, que almuerzan en el mismo comedor, por lo que se sospecha una intoxicación alimentaria.',
      question: 'Además del manejo de cada paciente, ¿cuál es la medida más adecuada?',
      options: [
        { letter: 'A', text: 'Notificar al encargado de epidemiología del Hospital' },
        { letter: 'B', text: 'Realizar un interrogatorio detallado a cada uno de los pacientes, para identificar el agente causal' },
        { letter: 'C', text: 'Notificar a la SEREMI de Salud' },
        { letter: 'D', text: 'Notificar al Director del Hospital' },
        { letter: 'E', text: 'Notificar a la Superintendencia de Salud' },
      ],
      correct: 'C',
      explanation: 'Un brote de enfermedad transmitida por alimentos, con dos o más casos ligados a una fuente común, es de notificación inmediata a la SEREMI de Salud, que es la autoridad sanitaria territorial competente para desplegar la investigación del brote.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil veinticuatro. Usted atiende a cinco pacientes con vómitos y diarrea de inicio agudo en la misma urgencia, todos compañeros de trabajo que almuerzan en el mismo comedor. Se sospecha una intoxicación alimentaria.',
        question: 'Además del manejo de cada paciente, ¿cuál es la medida más adecuada?',
        options: 'Las opciones: notificar al encargado de epidemiología del hospital, interrogar a cada paciente para buscar el agente causal, notificar a la SEREMI de Salud, notificar al director del hospital, o notificar a la Superintendencia de Salud.',
        answer: 'Es la C, notificar a la SEREMI de Salud. Este es el destino correcto de toda enfermedad de notificación obligatoria, sea inmediata o diaria: la autoridad sanitaria territorial. El encargado de epidemiología del hospital y el director son actores internos, no la autoridad sanitaria; y la Superintendencia fiscaliza seguros y prestadores, no investiga brotes.' },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 44',
      stem: '¿Qué tipo de vigilancia se utiliza en patologías como las infecciones respiratorias altas, las diarreas y las enfermedades de transmisión sexual?',
      question: '¿Cuál es el tipo de vigilancia correcto?',
      options: [
        { letter: 'A', text: 'Vigilancia activa' },
        { letter: 'B', text: 'Vigilancia centinela' },
        { letter: 'C', text: 'Vigilancia de notificación obligatoria' },
        { letter: 'D', text: 'Estudios de prevalencia' },
        { letter: 'E', text: 'Estudios experimentales' },
      ],
      correct: 'B',
      explanation: 'La vigilancia centinela se usa en enfermedades frecuentes y de menor gravedad, como infecciones respiratorias altas, diarreas y varicela, con muestreo en centros de salud determinados; excepto sífilis y gonorrea, que sí son de notificación obligatoria.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil dieciocho. Preguntan qué tipo de vigilancia se usa en las infecciones respiratorias altas, las diarreas y las enfermedades de transmisión sexual.',
        question: '¿Cuál es el tipo de vigilancia correcto?',
        options: 'Las opciones: vigilancia activa, vigilancia centinela, vigilancia de notificación obligatoria, estudios de prevalencia, o estudios experimentales.',
        answer: 'Es la B, vigilancia centinela. Estas son enfermedades frecuentes y de baja letalidad, así que no tiene sentido notificar cada caso: se muestrea en centros centinela determinados. Ojo con la trampa dentro de la misma pregunta: la sífilis y la gonorrea son la excepción entre las infecciones de transmisión sexual, porque ellas sí son de notificación obligatoria diaria.' },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 44',
      stem: '¿Por qué la meningococcemia es una enfermedad de notificación inmediata?',
      question: '¿Cuál es la razón correcta?',
      options: [
        { letter: 'A', text: 'Para aislar a los contactos' },
        { letter: 'B', text: 'Para vacunar a la familia' },
        { letter: 'C', text: 'Para identificar y manejar a los contactos' },
        { letter: 'D', text: 'Para detectar casos secundarios' },
        { letter: 'E', text: 'Por la gravedad de la enfermedad' },
      ],
      correct: 'C',
      explanation: 'La notificación inmediata de la meningococcemia busca identificar a los contactos estrechos y manejarlos con quimioprofilaxis antibiótica, no aislamiento ni vacunación, que no son las medidas indicadas en este contexto.',
      say: {
        stem: 'Y esta pregunta real, del EUNACOM de julio de dos mil diecinueve, va directo a la razón de fondo. Preguntan por qué la meningococcemia es una enfermedad de notificación inmediata.',
        question: '¿Cuál es la razón correcta?',
        options: 'Las opciones: para aislar a los contactos, para vacunar a la familia, para identificar y manejar a los contactos, para detectar casos secundarios, o por la gravedad de la enfermedad.',
        answer: 'Es la C. La opción que suena más obvia es la gravedad, pero esa es la razón general de todas las enfermedades de notificación inmediata, no la específica de esta pregunta. Lo que se busca puntualmente es identificar a los contactos estrechos y darles quimioprofilaxis. Y fíjate en un matiz importante: en el meningococo no se aísla a los contactos, como sí se hace en otras enfermedades; se les da el antibiótico preventivo.' },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'La regla que decide todo', tag: 'Letalidad y frecuencia', kind: 'key', items: [
          { t: 'Grave y poco frecuente', d: 'Notificación inmediata, ante la sola sospecha',
            say: 'Cerremos con las reglas de oro. Lo que decide si una enfermedad es de notificación inmediata o diaria es su letalidad y su frecuencia: grave y poco frecuente, inmediata, ante la sola sospecha, sin esperar el laboratorio.' },
          { t: 'Frecuente y menos grave', d: 'Notificación diaria, dentro de veinticuatro horas',
            say: 'Frecuente y menos grave, notificación diaria, dentro de veinticuatro horas. Y un brote agrupado de cualquier enfermedad puede exigir la reacción inmediata, aunque la enfermedad en sí sea de notificación diaria.' },
        ] },
        { title: 'Profilaxis de contactos', tag: 'No es igual en todas', kind: 'pharma', items: [
          { t: 'Meningococo y coqueluche: sí', d: 'Rifampicina o ciprofloxacino; azitromicina',
            say: 'En el meningococo y en la coqueluche, sí hay quimioprofilaxis para los contactos estrechos. En el meningococo, rifampicina cada doce horas por dos días, o ciprofloxacino en dosis única; en la coqueluche, azitromicina a convivientes y cuidadores de lactantes.' },
          { t: 'Hantavirus: no existe', d: 'Solo seguimiento clínico estrecho',
            say: 'En el Hantavirus no existe quimioprofilaxis: solo seguimiento clínico de los convivientes expuestos y consulta precoz ante la fiebre. Si te llevas una sola idea de hoy: la sospecha, no el resultado del laboratorio, es lo que gatilla la notificación inmediata, y esa misma sospecha es la que activa la profilaxis de los contactos cuando corresponde. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Inmediata, diaria o centinela: cómo se decide',
    root: N(
      'start', 'Médico sospecha una enfermedad transmisible', 'Cuál es su vigilancia',
      'Frente a cualquier enfermedad transmisible, la pregunta es cómo se vigila: caso a caso de inmediato, caso a caso dentro de un día, o por muestreo en centros determinados.',
      ['', N(
        'q', '¿Qué tan grave y qué tan frecuente es?', 'Eso define la velocidad',
        'La velocidad de la notificación depende de dos cosas: la letalidad de la enfermedad y su frecuencia en la población.',
        ['Grave y poco frecuente', N(
          'ok', 'Notificación inmediata', 'Ante la sola sospecha, sin esperar laboratorio',
          'Meningococo, Hantavirus, sarampión, cólera, botulismo o un brote de intoxicación alimentaria: se notifica de inmediato, ante la sola sospecha clínica, y se activa la investigación de contactos.',
        )],
        ['Frecuente y menos grave, con seguimiento individual', N(
          'ok', 'Notificación diaria', 'Dentro de veinticuatro horas de sospecha o confirmación',
          'Tuberculosis, sífilis, VIH, hepatitis virales o coqueluche: se notifica dentro de veinticuatro horas, caso por caso, para mantener la vigilancia sin la urgencia de un bloqueo inmediato.',
        )],
        ['Muy frecuente y de baja gravedad', N(
          'ok', 'Vigilancia centinela', 'Muestreo en centros de salud determinados',
          'Infecciones respiratorias altas, diarreas o influenza: no se notifica cada caso, sino que se muestrea en centros centinela seleccionados, para seguir la tendencia general.',
        )],
      )],
    ),
  },
};
