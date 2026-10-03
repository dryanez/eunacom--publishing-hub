// Clase 2.1 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_infectologia.cjs (inf-05).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'infecto-05',
  tier: 1,
  slides: [
    {
      type: 'cover',
      subtitle: 'Quién recibe profilaxis, con qué fármaco y en cuánto tiempo',
      say: 'Bienvenidos. Abrimos el bloque de salud pública con una clase muy rentable: el manejo de contactos y el accidente cortopunzante. Son preguntas de reglas exactas, y casi todas se responden con tres ideas. Todo menor de quince años contacto de tuberculosis recibe isoniazida de entrada. El contacto de meningococo recibe rifampicina. Y la profilaxis del VIH después de un pinchazo tiene una ventana de setenta y dos horas. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Tuberculosis',
      title: 'Contacto de tuberculosis: la edad decide',
      nodes: [
        { id: 'bk', col: 0, row: 1, k: 'cause', t: 'Caso índice BK (+)', s: 'Transmisión por aerosoles' },
        { id: 'act', col: 1, row: 1, k: 'q', t: '¿Tiene TBC activa?', s: 'Radiografía y baciloscopías' },
        { id: 'nin', col: 2, row: 0, k: 'risk', t: 'Menor de 15 años o VIH', s: 'Riesgo de meningitis TBC y miliar' },
        { id: 'inh', col: 3, row: 0, k: 'good', t: 'Isoniazida de entrada', s: '10 mg/kg/día, sin esperar el PPD' },
        { id: 'ppd', col: 4, row: 0, k: 'q', t: 'PPD al 3.er mes', s: 'Negativo: suspender · vira: 6 meses' },
        { id: 'adu', col: 2, row: 2, k: 'mech', t: 'Adulto', s: 'Trata solo si PPD > 10 mm' },
        { id: 'vih', col: 3, row: 2, k: 'effect', t: 'Adulto: 6 meses', s: 'VIH: PPD > 5 mm, 9 meses' },
      ],
      edges: [
        { from: 'bk', to: 'act' },
        { from: 'act', to: 'nin', label: 'no' },
        { from: 'act', to: 'adu', label: 'no' },
        { from: 'nin', to: 'inh' },
        { from: 'inh', to: 'ppd' },
        { from: 'adu', to: 'vih' },
      ],
      steps: [
        { show: ['bk'], note: 'La fuente es el bacilífero',
          say: 'Partamos por la tuberculosis. El caso índice es un paciente bacilífero, con baciloscopía positiva, que transmite por aerosoles a quienes viven con él.' },
        { show: ['act'], note: 'Primero, descartar enfermedad activa',
          say: 'Lo primero con cada contacto es descartar que ya esté enfermo: se pregunta por síntomas y se piden radiografía de tórax y baciloscopías. Si tiene tuberculosis activa, no es profilaxis, es tratamiento completo. Eso lo verás en una pregunta real.' },
        { show: ['nin'], note: 'Niños y VIH: respuesta celular deficiente',
          say: 'Si no está enfermo, la conducta depende de quién es. En el menor de quince años y en el paciente con VIH, la respuesta celular es inmadura o deficiente, y el riesgo es enorme: meningitis tuberculosa y tuberculosis miliar.' },
        { show: ['inh'], note: 'La regla de oro chilena',
          say: 'Por eso la regla de oro en Chile es que todo menor de quince años conviviente recibe isoniazida oral de entrada, diez miligramos por kilo al día, sin esperar el PPD. Aunque el PPD inicial sea cero milímetros. Esa es la trampa que más se pregunta.' },
        { show: ['ppd'], note: 'El PPD se repite al tercer mes',
          say: '¿Y para qué sirve el PPD entonces? Si el inicial es negativo, se repite al tercer mes. Si sigue negativo, se suspende la isoniazida. Si se positivizó, el niño se infectó, y se completan seis meses.' },
        { show: ['adu', 'vih'], note: 'En el adulto sí manda el PPD',
          say: 'En el adulto la lógica es otra: solo se trata si el PPD es mayor de diez milímetros, y se da isoniazida por seis meses. En el paciente con VIH el corte baja a cinco milímetros, y la profilaxis dura nueve meses.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Recién nacido',
      title: 'Hijo de madre con TBC activa: tres medidas a la vez',
      cards: [
        { title: 'Para el recién nacido', tag: 'Simultáneas', kind: 'key', items: [
          { t: 'Isoniazida oral por 6 meses', d: 'Al recién nacido',
            say: 'Un caso especial que se pregunta: el recién nacido de una madre con tuberculosis pulmonar activa bacilífera. La conducta son tres medidas simultáneas. La primera, isoniazida oral por seis meses al recién nacido.' },
          { t: 'Postergar la BCG', d: 'Hasta terminar la isoniazida',
            say: 'La segunda, postergar la vacuna BCG hasta terminar la quimioprofilaxis. ¿Por qué? Porque la BCG es un bacilo vivo atenuado, y la isoniazida lo mataría: la vacuna quedaría neutralizada.' },
        ] },
        { title: 'Lo que no se hace', tag: 'Trampa', kind: 'alert', items: [
          { t: 'Mantener la lactancia', d: 'Con mascarilla quirúrgica materna',
            say: 'Y la tercera, que es la trampa: se mantiene la lactancia materna. La tuberculosis se transmite por aerosoles, no por la leche, así que la madre amamanta usando mascarilla quirúrgica.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Profilaxis respiratoria',
      title: 'Meningococo y coqueluche',
      cards: [
        { title: 'Meningococo', tag: 'Neisseria meningitidis', kind: 'pharma', items: [
          { t: 'Contactos de los últimos 7 días', d: 'Pernoctan bajo el mismo techo o secreciones',
            say: 'Pasemos al meningococo, que conecta con la clase de meningitis. Se da profilaxis a los contactos que duermen bajo el mismo techo o que se expusieron a sus secreciones en los siete días previos.' },
          { t: 'Rifampicina 600 mg c/12 h por 2 días', d: 'O ciprofloxacino 500 mg dosis única',
            say: 'El fármaco de elección es rifampicina oral, seiscientos miligramos cada doce horas por dos días. La alternativa es ciprofloxacino, quinientos miligramos en dosis única.' },
          { t: 'Embarazada: ceftriaxona 250 mg IM', d: 'Dosis única',
            say: 'Y en la embarazada, ceftriaxona doscientos cincuenta miligramos intramuscular en dosis única. Esa variante se pregunta.' },
        ] },
        { title: 'Solo dos meningitis', tag: 'Ojo en el examen', kind: 'alert', items: [
          { t: 'Meningococo y Haemophilus b', d: 'Hib: rifampicina por 4 días',
            say: 'Ojo: la profilaxis de contactos de meningitis se hace solo en dos casos, el meningococo y el Haemophilus influenzae tipo b, este último con rifampicina por cuatro días. El neumococo no requiere profilaxis de contactos.' },
        ] },
        { title: 'Coqueluche', tag: 'Bordetella pertussis', kind: 'normal', items: [
          { t: 'Azitromicina por 5 días', d: 'Contactos sintomáticos, < 1 año, embarazadas',
            say: 'Y en la coqueluche, azitromicina oral por cinco días a los contactos con síntomas y a los grupos de alto riesgo: los menores de un año y las embarazadas.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Accidente cortopunzante',
      title: 'Pinchazo laboral: la ventana de 72 horas',
      nodes: [
        { id: 'pun', col: 0, row: 1, k: 'start', t: 'Punción con aguja hueca', s: 'Con sangre de la fuente' },
        { id: 'lav', col: 1, row: 1, k: 'good', t: 'Lavado inmediato', s: 'Agua y jabón' },
        { id: 'gan', col: 1, row: 3, k: 'mech', t: 'El virus tarda 48 a 72 h', s: 'En llegar a los ganglios' },
        { id: 'pep', col: 2, row: 1, k: 'good', t: 'Triterapia por 28 días', s: 'Antes de 72 h · ideal 2 a 4 h' },
        { id: 'eli', col: 3, row: 0, k: 'mech', t: 'ELISA basal al trabajador', s: 'Controles: día 0, 6 semanas, 3 meses' },
        { id: 'tra', col: 3, row: 2, k: 'trap', t: 'Esperar la serología de la fuente', s: 'O su consentimiento' },
      ],
      edges: [
        { from: 'pun', to: 'lav' },
        { from: 'lav', to: 'pep' },
        { from: 'gan', to: 'pep', label: 'explica' },
        { from: 'pep', to: 'eli' },
        { from: 'pep', to: 'tra', label: 'nunca' },
      ],
      steps: [
        { show: ['pun'], note: 'El accidente de riesgo',
          say: 'Y el último escenario, el que te puede pasar a ti: el accidente cortopunzante. El de mayor riesgo es la punción profunda con una aguja hueca con sangre, por ejemplo después de tomar gases arteriales.' },
        { show: ['lav'], note: 'Primero, lavar',
          say: 'Lo primero es el lavado inmediato de la herida con abundante agua y jabón.' },
        { show: ['gan'], note: 'Por qué hay una ventana',
          say: 'Ahora, el mecanismo que explica la urgencia. Después de la punción, el VIH tarda cuarenta y ocho a setenta y dos horas en diseminarse a los ganglios linfáticos. Mientras está en la puerta de entrada, todavía se puede frenar.' },
        { show: ['pep'], note: 'Profilaxis post exposición',
          say: 'Por eso la profilaxis post exposición, una triterapia antirretroviral por veintiocho días, se inicia antes de las setenta y dos horas, e idealmente en las primeras dos a cuatro horas. Se ofrece si la fuente es VIH positiva o desconocida.' },
        { show: ['eli'], note: 'Documentar el estado basal',
          say: 'Al trabajador se le pide un ELISA basal, para documentar que no estaba infectado antes del accidente, y luego controles serológicos a las seis semanas y a los tres meses.' },
        { show: ['tra'], note: 'Trampa: esperar a la fuente',
          say: 'Y la trampa: esperar el resultado del examen de la fuente antes de iniciar. La serología de la fuente requiere su consentimiento, y no se le puede obligar. Pero la profilaxis del trabajador no espera ni el consentimiento ni el resultado.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol de decisión: frente a una exposición, qué agente es y qué profilaxis corresponde.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Reglas de quimioprofilaxis',
      head: ['Escenario', 'Quién la recibe', 'Esquema', 'Perla de examen'],
      rows: [
        { cells: ['TBC pulmonar BK (+)', 'Menores de 15 años convivientes', 'Isoniazida: 3 meses si PPD (−), 6 si vira', 'Aunque el PPD inicial sea 0 mm'],
          say: 'Repasemos las reglas. Tuberculosis bacilífera: todo menor de quince años conviviente recibe isoniazida, tres meses si el PPD sigue negativo y seis si vira. Aunque el PPD inicial sea cero.' },
        { cells: ['RN de madre con TBC', 'Hijo de madre con TBC activa', 'Isoniazida 6 meses + BCG al final', 'Lactancia con mascarilla materna'],
          say: 'Recién nacido de madre con tuberculosis: isoniazida seis meses, la BCG al final, y lactancia con mascarilla. No se separa al niño de la madre.' },
        { cells: ['Meningitis meningocócica', 'Convivientes de los últimos 7 días', 'Rifampicina 600 mg c/12 h × 2 días', 'Embarazada: ceftriaxona 250 mg IM'],
          say: 'Meningococo: rifampicina por dos días a los convivientes, y en la embarazada, ceftriaxona intramuscular en dosis única.' },
        { cells: ['Accidente cortopunzante', 'Fuente VIH (+) o desconocida', 'Triterapia × 28 días, antes de 72 h', 'No esperar la serología de la fuente'],
          say: 'Y accidente cortopunzante con fuente positiva o desconocida: triterapia por veintiocho días antes de las setenta y dos horas, sin esperar la serología de la fuente.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Recién nacido de término, sano, de 2 días de vida. A su madre se le diagnostica tuberculosis pulmonar con baciloscopía positiva durante la hospitalización del puerperio. El niño está asintomático, con examen físico normal. Aún no ha recibido la vacuna BCG.',
      question: '¿Cuál es la conducta más adecuada con el recién nacido?',
      options: [
        { letter: 'A', text: 'Vacunar con BCG hoy y suspender la lactancia materna' },
        { letter: 'B', text: 'Isoniazida por 6 meses, postergar la BCG y mantener la lactancia con mascarilla materna' },
        { letter: 'C', text: 'Isoniazida por 6 meses junto con la BCG hoy' },
        { letter: 'D', text: 'Solicitar PPD y decidir la isoniazida según el resultado' },
        { letter: 'E', text: 'Separar al niño de la madre hasta que ella negativice la baciloscopía' },
      ],
      correct: 'B',
      explanation: 'Hijo de madre con TBC activa bacilífera: tres medidas simultáneas. Isoniazida por 6 meses, BCG al término de la quimioprofilaxis (la isoniazida neutraliza el bacilo vacunal) y lactancia materna con mascarilla quirúrgica materna.',
      say: {
        stem: 'Vamos con un caso. Recién nacido de término, sano, de dos días de vida. A su madre se le diagnostica tuberculosis pulmonar con baciloscopía positiva durante el puerperio. El niño está asintomático y aún no recibe la BCG.',
        question: '¿Cuál es la conducta más adecuada con el recién nacido?',
        options: 'Las opciones son: vacunar hoy y suspender la lactancia; isoniazida por seis meses, postergar la BCG y mantener la lactancia con mascarilla; isoniazida junto con la BCG hoy; pedir un PPD y decidir según el resultado; o separar al niño de la madre. Piénsalo.',
        answer: 'La respuesta es la B, las tres medidas juntas. La C es el distractor más tentador, porque parece proteger doble, pero la isoniazida mataría el bacilo vivo de la vacuna. La D cae porque en el menor de quince años no se espera el PPD. Y separar al niño o suspender la lactancia no corresponde: basta la mascarilla.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 142',
      stem: '¿Cuál es la conducta más adecuada para un paciente, que es contacto intradomiciliario de otro individuo diagnosticado de tuberculosis pulmonar bacilífera?',
      question: 'Seleccione la alternativa correcta:',
      options: [
        { letter: 'A', text: 'Solicitar PPD y cultivo de expectoración' },
        { letter: 'B', text: 'Solicitar radiografía de tórax y baciloscopías' },
        { letter: 'C', text: 'Controlar clínicamente por 3 meses' },
        { letter: 'D', text: 'Indicar profilaxis con isoniazida por 6 meses' },
        { letter: 'E', text: 'Solicitar cultivo de Koch y broncoscopía' },
      ],
      correct: 'B',
      explanation: 'El primer paso con todo contacto es descartar tuberculosis activa: síntomas, radiografía de tórax y baciloscopías. Recién después se decide la profilaxis (de entrada en menores de 15 años; según PPD en adultos).',
      say: {
        stem: 'Ahora las preguntas reales. La primera es del EUNACOM de julio de dos mil diecinueve, y es corta. Un paciente es contacto intradomiciliario de alguien con tuberculosis pulmonar bacilífera.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: PPD y cultivo de expectoración; radiografía de tórax y baciloscopías; control clínico por tres meses; isoniazida por seis meses; o cultivo de Koch y broncoscopía. Piénsalo.',
        answer: 'Es la B. Antes de hablar de profilaxis, tienes que descartar que el contacto ya esté enfermo, y eso se hace con radiografía de tórax y baciloscopías. La D es el distractor: la isoniazida es la profilaxis, pero no sabes aún si el paciente es un adulto con PPD negativo o si ya tiene una tuberculosis activa, que necesita tratamiento completo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 16',
      stem: 'Una paciente de 30 años, asintomática, está cursando un embarazo de 20 semanas. Su marido fue recientemente diagnosticado de tuberculosis pulmonar, mediante baciloscopías de expetoración que resultaron (+++). La mujer se realiza baciloscopías, que son negativas y un PPD que resulta 26 mm.',
      question: '¿Cuál es la conducta más adecuada para con ella?',
      options: [
        { letter: 'A', text: 'Mantener una conducta expectante como protección fetal' },
        { letter: 'B', text: 'Iniciar tratamiento con 4 fármacos (isoniazida, rifampicina, pirazinamida y etambutol).' },
        { letter: 'C', text: 'Repetir las baciloscopías periódicamente' },
        { letter: 'D', text: 'Administrar la vacuna BCG' },
        { letter: 'E', text: 'Indicar profilaxis con isoniazida por 6 meses' },
      ],
      correct: 'E',
      explanation: 'Adulta asintomática, con baciloscopías negativas (sin TBC activa) y PPD > 10 mm tras contacto bacilífero: profilaxis con isoniazida por 6 meses. El embarazo no la contraindica.',
      say: {
        stem: 'La siguiente es del EUNACOM de diciembre de dos mil diecisiete. Mujer de treinta años, asintomática, con veinte semanas de embarazo. Su marido tiene tuberculosis pulmonar con baciloscopías positivas. Ella tiene baciloscopías negativas y un PPD de veintiséis milímetros.',
        question: '¿Cuál es la conducta más adecuada con ella?',
        options: 'Las opciones son: conducta expectante para proteger al feto; tratamiento con cuatro fármacos; repetir baciloscopías; vacuna BCG; o isoniazida por seis meses. Piénsalo.',
        answer: 'Es la E. Aplica la regla del adulto: está asintomática y sin baciloscopías positivas, así que no tiene enfermedad activa, y su PPD supera los diez milímetros. Entonces, isoniazida por seis meses. El tratamiento con cuatro fármacos es el distractor: eso es para la tuberculosis activa. Y el embarazo no es motivo para quedarse expectante.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 44',
      stem: '¿Por qué la meningococcemia es una enfermedad de notificación inmediata?',
      question: 'Seleccione la alternativa correcta:',
      options: [
        { letter: 'A', text: 'Para aislar a los contactos' },
        { letter: 'B', text: 'Para vacunar a la familia' },
        { letter: 'C', text: 'Para identificar y manejar a los contactos' },
        { letter: 'D', text: 'Para detectar casos secundarios' },
        { letter: 'E', text: 'Por la gravedad de la enfermedad' },
      ],
      correct: 'C',
      explanation: 'La notificación inmediata permite identificar a los contactos y darles quimioprofilaxis (rifampicina, ciprofloxacino o ceftriaxona en la embarazada) a tiempo.',
      say: {
        stem: 'La siguiente es del EUNACOM de julio de dos mil diecinueve, sobre salud pública.',
        question: '¿Por qué la meningococcemia es una enfermedad de notificación inmediata?',
        options: 'Las opciones son: para aislar a los contactos; para vacunar a la familia; para identificar y manejar a los contactos; para detectar casos secundarios; o por la gravedad de la enfermedad. Piénsalo.',
        answer: 'Es la C. Se notifica de inmediato para encontrar a los contactos y darles profilaxis con rifampicina a tiempo. La gravedad es el distractor tentador: la enfermedad es grave, pero muchas enfermedades graves no se notifican de inmediato. Lo que justifica la urgencia es que existe una medida eficaz para los contactos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Médica de 30 años sufre accidente cortopunzante con aguja de paciente cuya serología VIH es desconocida. Tras el lavado profuso de la herida, ¿cuál es la conducta más adecuada a seguir?',
      question: 'Seleccione la alternativa correcta:',
      options: [
        { letter: 'A', text: 'Esperar resultado del ELISA del paciente fuente antes de decidir' },
        { letter: 'B', text: 'Ofrecer de inmediato triterapia antirretroviral profiláctica (PEP) por 28 días a 6 semanas' },
        { letter: 'C', text: 'Simplemente observar ya que la fuente probablemente es VIH negativa' },
        { letter: 'D', text: 'Solicitar PCR para VIH al trabajador de salud de inmediato y esperar resultado' },
        { letter: 'E', text: 'Iniciar monoterapia con zidovudina por 4 semanas' },
      ],
      correct: 'B',
      explanation: 'Con fuente desconocida o seropositiva, la PEP con triterapia se ofrece de inmediato (idealmente < 2–4 horas, máximo 72 horas) por 28 días. No se posterga esperando la serología de la fuente.',
      say: {
        stem: 'Y cerramos con un caso representativo del banco sobre el accidente cortopunzante. Una médica de treinta años se pincha con la aguja de un paciente cuya serología para VIH se desconoce. Ya lavó la herida.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: esperar el ELISA de la fuente; ofrecer de inmediato triterapia profiláctica; solo observar; pedir una PCR a la trabajadora y esperar; o monoterapia con zidovudina. Piénsalo.',
        answer: 'Es la B. La ventana es corta, así que la triterapia se ofrece de inmediato. La A es el distractor más tentador, porque parece lógico saber primero si la fuente está infectada. Pero la eficacia cae con cada hora, y la fuente puede no consentir. Y la monoterapia no es el esquema: son tres fármacos.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Tuberculosis', tag: 'Isoniazida', kind: 'key', items: [
          { t: 'Primero descartar TBC activa', d: 'Radiografía y baciloscopías',
            say: 'Cerremos con las reglas de oro. Con todo contacto de tuberculosis, primero descartas enfermedad activa.' },
          { t: 'Menor de 15: isoniazida de entrada', d: 'Adulto: solo si PPD > 10 mm',
            say: 'El menor de quince años recibe isoniazida de entrada, sin esperar el PPD. El adulto, solo si el PPD supera los diez milímetros.' },
          { t: 'RN: isoniazida, BCG diferida, lactancia', d: 'Madre con mascarilla',
            say: 'Y el hijo de madre con tuberculosis recibe isoniazida, la BCG se difiere y la lactancia sigue con mascarilla.' },
        ] },
        { title: 'Meningococo', tag: 'Contactos', kind: 'pharma', items: [
          { t: 'Rifampicina por 2 días', d: 'Embarazada: ceftriaxona IM',
            say: 'Los contactos de meningococo reciben rifampicina por dos días, y la embarazada, ceftriaxona intramuscular.' },
        ] },
        { title: 'Cortopunzante', tag: 'Ventana', kind: 'alert', items: [
          { t: 'Triterapia × 28 días antes de 72 h', d: 'Sin esperar a la fuente',
            say: 'Y en el pinchazo, triterapia por veintiocho días antes de las setenta y dos horas. Si te llevas una sola idea de hoy: la profilaxis se da a tiempo, y ningún examen que no cambie la conducta la retrasa. La próxima clase seguimos con profilaxis: rabia y tétanos. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Exposición a un agente transmisible: qué profilaxis',
    root: N('start', 'Exposición de riesgo', 'Contacto o accidente',
      'Tienes a alguien expuesto. Lo primero es identificar a qué agente se expuso, porque cada uno tiene su propia regla.',
      ['', N('q', '¿A qué se expuso?', 'TBC · meningococo · sangre',
        'Pregúntate a qué se expuso: a un bacilífero, a un caso de meningococo, o a sangre en un accidente.',
        ['TBC bacilífera', N('q', '¿Tiene TBC activa?', 'Radiografía y baciloscopías',
          'Si es tuberculosis, primero descartas enfermedad activa con radiografía y baciloscopías.',
          ['NO, menor de 15', N('do', 'Isoniazida de entrada', 'PPD al 3.er mes decide 3 o 6 meses',
            'Si no la tiene y es menor de quince años, isoniazida de entrada, y el PPD del tercer mes decide si se suspende o se completan seis meses.')],
          ['NO, adulto', N('do', 'Isoniazida 6 meses si PPD > 10 mm', 'VIH: > 5 mm, 9 meses',
            'Si es adulto, isoniazida por seis meses solo si el PPD supera los diez milímetros; en VIH, sobre cinco milímetros y por nueve meses.')])],
        ['Meningococo', N('ok', 'Rifampicina 2 días', 'Embarazada: ceftriaxona IM',
          'Si es meningococo, rifampicina por dos días a los contactos de los últimos siete días, y ceftriaxona intramuscular en la embarazada.')],
        ['Pinchazo con sangre', N('alert', 'Triterapia antes de 72 h', 'Por 28 días, sin esperar a la fuente',
          'Si es un pinchazo con fuente positiva o desconocida, lavado y triterapia antes de las setenta y dos horas, por veintiocho días, sin esperar a la fuente.')])]),
  },
};
