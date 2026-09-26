// Clase 11.2 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_cirugia.cjs / dataset_cirugia_bloque_1.cjs (cir-02, classId cirugia-02).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-02',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuándo operar antes de 72 horas y cuándo solo drenar',
      say: 'Bienvenido de nuevo. Seguimos en el abdomen agudo con colecistitis aguda, la segunda causa más frecuente después de la apendicitis, y un tema con mucha historia en Chile: acá tenemos una de las tasas más altas del mundo de cáncer de vesícula. Hoy vas a aprender a confirmarla con las Guías de Tokio, y sobre todo, cuándo operar antes de setenta y dos horas y cuándo, en el paciente grave, solo drenar. Partamos por el mecanismo.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Del cálculo enclavado a la vesícula inflamada',
      nodes: [
        { id: 'cal', col: 0, row: 1, k: 'cause', t: 'Cálculo se enclava', s: 'En el cuello o el cístico' },
        { id: 'est', col: 1, row: 1, k: 'mech', t: 'Se estanca la bilis', s: 'La vesícula no se vacía' },
        { id: 'inf', col: 2, row: 0, k: 'effect', t: 'Inflamación química', s: 'Por la bilis concentrada' },
        { id: 'bac', col: 2, row: 2, k: 'risk', t: 'Sobreinfección bacteriana', s: 'E. coli y otras enterobacterias' },
        { id: 'sin', col: 3, row: 1, k: 'effect', t: 'Dolor continuo y fiebre', s: 'Más de 6 horas, con Murphy' },
      ],
      edges: [
        { from: 'cal', to: 'est' },
        { from: 'est', to: 'inf', label: 'química' },
        { from: 'est', to: 'bac', label: 'después' },
        { from: 'inf', to: 'sin' }, { from: 'bac', to: 'sin' },
      ],
      steps: [
        { show: ['cal'], note: 'A diferencia del cólico, este cálculo no se suelta',
          say: 'Todo parte igual que en el cólico biliar: un cálculo se enclava en el cuello de la vesícula o en el cístico. La diferencia con el cólico simple es que aquí el cálculo no se suelta solo.' },
        { show: ['est'], note: 'La vesícula queda distendida, sin salida',
          say: 'Con la salida tapada, la bilis se estanca adentro y la vesícula se distiende.' },
        { show: ['inf'], note: 'Primero es química, no infección',
          say: 'Esa bilis concentrada, sin poder salir, inflama la pared por un mecanismo químico, antes de que exista cualquier infección.' },
        { show: ['bac'], note: 'La bacteria llega después, no es la causa inicial',
          say: 'Y recién después se suma la sobreinfección bacteriana, típicamente por enterobacterias como la Escherichia coli.' },
        { show: ['sin'], note: 'Más de 6 horas de dolor continuo, con Murphy',
          say: 'El resultado es el cuadro que ves en la consulta: dolor continuo en el hipocondrio derecho de más de seis horas, con fiebre y el signo de Murphy positivo. Fíjate en el "más de seis horas": eso es justo lo que lo separa del cólico biliar, que cede solo antes de esas seis horas. También puede irradiarse a la escápula derecha, y en un tercio de los pacientes se llega a palpar la vesícula distendida como una masa dolorosa.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Las Guías de Tokio: tres pilares que suman',
      cards: [
        { title: 'A. Inflamación local', tag: 'Al examen', kind: 'key', items: [
          { t: 'Murphy clínico positivo', d: 'O masa dolorosa en el hipocondrio derecho',
            say: 'Las Guías de Tokio ordenan el diagnóstico en tres pilares que se suman. El primero es la inflamación local: Murphy clínico positivo, o una masa dolorosa en el hipocondrio derecho.' },
        ] },
        { title: 'B. Inflamación sistémica', tag: 'En el laboratorio', kind: 'key', items: [
          { t: 'Fiebre o leucocitosis', d: 'O PCR elevada',
            say: 'El segundo pilar es la inflamación sistémica: fiebre sobre treinta y ocho grados, leucocitosis sobre diez mil, o PCR elevada. Con estos dos primeros ya tienes un diagnóstico de sospecha.' },
        ] },
        { title: 'C. La ecografía confirma', tag: 'Da el diagnóstico definitivo', kind: 'criteria', items: [
          { t: 'Murphy ecográfico positivo', d: 'El hallazgo más específico',
            say: 'Y el tercer pilar es la imagen: la ecografía, que busca el Murphy ecográfico, dolor al comprimir la vesícula con el transductor. Es el hallazgo más específico de todos.' },
          { t: 'Pared sobre 4 mm', d: 'Más líquido perivesicular',
            say: 'Junto con eso, la pared engrosada, sobre cuatro milímetros, y líquido alrededor de la vesícula. Con los tres pilares juntos, ya tienes el diagnóstico definitivo.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Severidad',
      title: 'El grado de Tokio decide entre operar o drenar',
      nodes: [
        { id: 'diag', col: 0, row: 1, k: 'start', t: 'Colecistitis confirmada', s: '¿Qué grado de Tokio?' },
        { id: 'g1', col: 1, row: 0, k: 'good', t: 'Grado I', s: 'Sin falla de órganos' },
        { id: 'g2', col: 1, row: 1, k: 'risk', t: 'Grado II', s: 'Inflamación local avanzada' },
        { id: 'g3', col: 1, row: 2, k: 'alert', t: 'Grado III', s: 'Con falla de algún órgano' },
        { id: 'cir', col: 2, row: 0, k: 'good', t: 'Colecistectomía precoz', s: 'Antes de 72 horas' },
        { id: 'dre', col: 2, row: 2, k: 'trap', t: 'Colecistostomía percutánea', s: 'Drenaje, sin operar aún' },
      ],
      edges: [
        { from: 'diag', to: 'g1' }, { from: 'diag', to: 'g2' }, { from: 'diag', to: 'g3' },
        { from: 'g1', to: 'cir' }, { from: 'g2', to: 'cir', label: 'cirujano con experiencia' },
        { from: 'g3', to: 'dre' },
      ],
      steps: [
        { show: ['diag'], note: 'La severidad, no solo el diagnóstico, decide la conducta',
          say: 'Una vez que confirmaste el diagnóstico, todavía falta un paso: clasificar la severidad, porque de eso depende si operas o solo drenas.' },
        { show: ['g1'], note: 'Paciente sano, inflamación confinada',
          say: 'Grado uno, leve: el paciente está sano, sin falla de ningún órgano, y la inflamación está confinada a la vesícula.' },
        { show: ['g2'], note: 'Más de 72 horas, leucocitos sobre 18 mil, o masa',
          say: 'Grado dos, moderado: cuando se suma algún factor de riesgo local, como más de setenta y dos horas de evolución, leucocitos sobre dieciocho mil, o una masa dolorosa palpable.' },
        { show: ['g3'], note: 'Shock, falla renal, compromiso de conciencia',
          say: 'Y grado tres, grave: cuando ya hay falla de algún órgano, como shock que necesita drogas vasoactivas, falla renal o compromiso de conciencia.' },
        { show: ['cir'], note: 'Grado I y II van a pabellón',
          say: 'En grado uno y dos, la conducta es la misma: colecistectomía laparoscópica precoz, dentro de las primeras setenta y dos horas. En el grado dos, eso sí, mejor que la haga un cirujano con experiencia, porque la disección va a ser más difícil.' },
        { show: ['dre'], note: 'El grado III no se opera de entrada',
          say: 'Pero en grado tres, con falla de órganos o un riesgo anestésico prohibitivo, no operas de entrada. La conducta es la colecistostomía percutánea: un drenaje guiado por ecografía o TAC, con antibióticos, y dejas la cirugía definitiva para después de que el paciente se recupere.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Formas complicadas',
      title: 'Cuando la vesícula ya no es sencilla',
      cards: [
        { title: 'Gangrenosa y enfisematosa', tag: 'Riesgo de perforación', kind: 'alert', items: [
          { t: 'Gangrena', d: 'Necrosis de la pared, sin buena irrigación',
            say: 'Antes de seguir, fíjate en dos formas complicadas que se preguntan. La colecistitis gangrenosa es cuando la pared ya se necrosó por mala irrigación, y el riesgo de perforación es alto.' },
          { t: 'Enfisematosa', d: 'Gas en la pared, por Clostridium',
            say: 'Y la enfisematosa es una variante donde el Clostridium produce gas dentro de la pared vesicular. Es más frecuente en diabéticos, y también tiene alto riesgo de perforación temprana: acá el TAC es el que la detecta mejor que la ecografía, y la cirugía no debería esperar las setenta y dos horas completas.' },
        ] },
        { title: 'Síndrome de Mirizzi', tag: 'Cálculo gigante en el bacinete', kind: 'criteria', items: [
          { t: 'Comprime el hepático común', d: 'Da ictericia sin ser coledocolitiasis',
            say: 'Y el síndrome de Mirizzi es cuando un cálculo grande, enclavado en el bacinete, comprime desde afuera el conducto hepático común. Da ictericia, pero no es porque el cálculo esté dentro del colédoco, sino porque lo aplasta desde el lado de la vesícula. Reconocerlo antes de operar evita una lesión de la vía biliar durante la disección, porque el hepático común queda pegado y deformado justo donde el cirujano espera encontrar el cístico.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Otros exámenes',
      title: 'Cuando la ecografía no basta',
      cards: [
        { title: 'TAC de abdomen', tag: 'Ante sospecha de complicación', kind: 'criteria', items: [
          { t: 'Gangrena o perforación', d: 'O gas intramural por Clostridium',
            say: 'La ecografía es tu primera línea, pero hay veces que necesitas más. El TAC de abdomen se reserva para cuando sospechas una complicación: colecistitis gangrenosa, perforación, o la forma enfisematosa, con gas dentro de la pared por Clostridium.' },
        ] },
        { title: 'Cintigrafía HIDA', tag: 'La más sensible', kind: 'normal', items: [
          { t: 'No se llena la vesícula', d: 'Confirma obstrucción del cístico',
            say: 'Y si la ecografía queda dudosa pero la sospecha clínica sigue siendo alta, la cintigrafía con HIDA es el examen más sensible y específico de todos: muestra que la vesícula no se llena, porque el cístico está obstruido. Se reserva para esos casos límite, no para el estudio de rutina.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'En pabellón',
      title: 'La visión crítica de seguridad: lo que evita cortar el colédoco',
      cards: [
        { title: 'Visión crítica de Strasberg', tag: 'Antes de cortar nada', kind: 'criteria', items: [
          { t: 'Solo 2 estructuras a la vesícula', d: 'El cístico y la arteria cística',
            say: 'Durante la cirugía laparoscópica hay una regla que nunca te puedes saltar: la visión crítica de seguridad de Strasberg. Antes de cortar cualquier estructura, tienes que ver con certeza solo dos elementos entrando a la vesícula: el conducto cístico y la arteria cística. Para llegar a esa visión, primero liberas de grasa el triángulo hepatocístico y despegas el tercio inferior de la vesícula del hígado.' },
        ] },
        { title: 'Si no la logras', tag: 'Triángulo congelado', kind: 'alert', items: [
          { t: 'Colecistectomía subtotal', d: 'O convertir a cirugía abierta',
            say: 'Y si la inflamación es tan intensa que no logras esa visión, el triángulo está congelado, la conducta segura no es seguir cortando a ciegas. Es hacer una colecistectomía subtotal, dejando el muñón cerrado o un drenaje, o convertir a cirugía abierta. Cortar la estructura más gruesa "presumiendo" que es el cístico es exactamente el error que provoca la lesión de la vía biliar.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora ordenemos todo en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que más se confunde en colecistitis',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Grado I o II, estable', 'Colecistectomía laparoscópica antes de 72 h', 'Diferir la cirugía a semanas'],
          say: 'Repasemos las trampas. Grado uno o dos, estable: colecistectomía antes de setenta y dos horas. El error es diferirla semanas, como si fuera una colelitiasis simple.' },
        { cells: ['Grado III o riesgo anestésico prohibitivo', 'Colecistostomía percutánea', 'Operar igual, a toda costa'],
          say: 'Grado tres o riesgo anestésico prohibitivo: colecistostomía percutánea. El error es operar igual, exponiendo al paciente a una mortalidad quirúrgica altísima.' },
        { cells: ['Bilirrubina mayor a 4', 'Sospechar coledocolitiasis o Mirizzi', 'Atribuirla a la colecistitis sola'],
          say: 'Y si la bilirrubina sube por sobre cuatro, esa ictericia no es de la colecistitis sola: tienes que sospechar una coledocolitiasis asociada, o un síndrome de Mirizzi.' },
        { cells: ['Diabético con dolor en HCD y gas en la pared', 'Colecistitis enfisematosa', 'Tratarla como una colecistitis simple'],
          say: 'Un diabético con dolor en el hipocondrio derecho y gas visible en la pared vesicular: eso es una colecistitis enfisematosa. Tratarla como si fuera una simple, sin apurar la cirugía, es el error, porque perfora rápido.' },
        { cells: ['Triángulo congelado en cirugía', 'Subtotal o conversión a abierta', 'Seccionar la estructura más gruesa'],
          say: 'Y en pabellón, con el triángulo congelado: subtotal o conversión a cirugía abierta. Seccionar la estructura más gruesa asumiendo que es el cístico es el error que lesiona la vía biliar.' },
        { cells: ['Ecografía dudosa, sospecha alta', 'Cintigrafía HIDA', 'Repetir la ecografía nada más'],
          say: 'Y si la ecografía no confirma pero la sospecha sigue alta, el siguiente paso es la cintigrafía HIDA, no repetir la misma ecografía esperando que esta vez sí muestre algo.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 50 años con 18 horas de dolor continuo en el hipocondrio derecho, fiebre de 38,2 grados y Murphy positivo. Leucocitos 13.200. La ecografía muestra un cálculo enclavado en el bacinete, pared vesicular de 5 milímetros y líquido perivesicular. No tiene falla de ningún órgano.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Hospitalizar, iniciar antibióticos y colecistectomía laparoscópica antes de 72 horas' },
        { letter: 'B', text: 'Indicar analgesia oral y programar cirugía electiva en 3 meses' },
        { letter: 'C', text: 'Realizar colecistostomía percutánea de urgencia' },
        { letter: 'D', text: 'Solicitar CPRE antes de cualquier cirugía' },
        { letter: 'E', text: 'Indicar ácido ursodesoxicólico y dieta hipograsa' },
      ],
      correct: 'A',
      explanation: 'Colecistitis aguda Grado I de Tokio, sin falla de órganos: el tratamiento de elección es hospitalizar, iniciar antibióticos endovenosos y realizar colecistectomía laparoscópica precoz, dentro de las primeras 72 horas. La colecistostomía se reserva para el Grado III o riesgo anestésico prohibitivo, y no hay ictericia que justifique una CPRE.',
      say: {
        stem: 'Vamos con un caso. Mujer de cincuenta años, con dieciocho horas de dolor continuo en el hipocondrio derecho, fiebre de treinta y ocho coma dos y Murphy positivo. Trece mil doscientos leucocitos. La ecografía muestra un cálculo enclavado en el bacinete, pared de cinco milímetros y líquido perivesicular. No tiene falla de ningún órgano.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Tienes cinco opciones: hospitalizar con antibióticos y operar antes de setenta y dos horas, dar analgesia oral y cirugía en tres meses, hacer una colecistostomía de urgencia, pedir una CPRE antes de operar, o dar ácido ursodesoxicólico. Piénsalo.',
        answer: 'Es la A. Cumple los tres pilares de Tokio: Murphy positivo, fiebre con leucocitosis, y la ecografía confirmatoria. Sin falla de órganos, es Grado uno: hospitalizas, das antibióticos, y operas antes de setenta y dos horas. La colecistostomía es para el paciente grave que no puedes operar, y aquí no hay ictericia que justifique pensar en una CPRE ni en un síndrome de Mirizzi.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 151',
      stem: 'Mujer de 55 años con colecistitis aguda de 48 horas de evolución. Está estable hemodinámicamente, con fiebre de 38 grados y 14.000 leucocitos.',
      question: '¿Cuál es el manejo quirúrgico más adecuado?',
      options: [
        { letter: 'A', text: 'Colecistectomía laparoscópica precoz, dentro de 72 horas' },
        { letter: 'B', text: 'Cirugía electiva en 6 semanas' },
        { letter: 'C', text: 'Drenaje percutáneo y cirugía diferida' },
        { letter: 'D', text: 'Solo antibióticos endovenosos y observación' },
        { letter: 'E', text: 'Colecistostomía abierta de urgencia' },
      ],
      correct: 'A',
      explanation: 'Colecistitis aguda no complicada, paciente estable: la colecistectomía laparoscópica precoz, antes de 72 horas, es superior al manejo diferido, con menos complicaciones, menor estadía hospitalaria y menor conversión a cirugía abierta.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil veinticinco. Mujer de cincuenta y cinco años, con colecistitis aguda de cuarenta y ocho horas de evolución. Está estable, con fiebre de treinta y ocho grados y catorce mil leucocitos.',
        question: '¿Cuál es el manejo quirúrgico más adecuado?',
        options: 'Las opciones son: colecistectomía laparoscópica precoz antes de setenta y dos horas, cirugía electiva en seis semanas, drenaje percutáneo con cirugía diferida, solo antibióticos y observación, o colecistostomía abierta de urgencia.',
        answer: 'Es la A. Está estable y sin falla de órganos, así que no hay ningún motivo para diferir ni para drenar. La colecistectomía precoz, antes de las setenta y dos horas, es mejor que esperar: menos complicaciones y menos conversión a cirugía abierta que si la dejas enfriar.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 11',
      stem: 'Mujer de 35 años con dolor epigástrico recurrente. La ecografía muestra múltiples cálculos en la vesícula biliar. Se decide colecistectomía laparoscópica electiva.',
      question: '¿Cuál esquema antibiótico es de elección como profilaxis de la herida operatoria?',
      options: [
        { letter: 'A', text: 'Amoxicilina más ácido clavulánico' },
        { letter: 'B', text: 'Ceftriaxona' },
        { letter: 'C', text: 'Clindamicina' },
        { letter: 'D', text: 'Cloxacilina' },
        { letter: 'E', text: 'Cefazolina' },
      ],
      correct: 'E',
      explanation: 'La cefazolina es el fármaco de elección para profilaxis quirúrgica en la colecistectomía electiva: cubre bien cocáceas grampositivas de piel y las enterobacterias que puede haber en la bilis, con un espectro más acotado y menor costo que otras opciones.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil veinticuatro. Mujer de treinta y cinco años, con dolor epigástrico recurrente. La ecografía muestra múltiples cálculos en la vesícula, y se decide una colecistectomía laparoscópica electiva.',
        question: '¿Cuál esquema antibiótico es de elección como profilaxis de la herida operatoria?',
        options: 'Las opciones son: amoxicilina con ácido clavulánico, ceftriaxona, clindamicina, cloxacilina, o cefazolina. Piénsalo.',
        answer: 'Es la E, cefazolina. Es el estándar para profilaxis en cirugía limpia-contaminada como esta: cubre bien la piel y las enterobacterias que puede traer la bilis, sin la cobertura de más que sí necesitarías si ya hubiera una colecistitis complicada. Fíjate que esta pregunta no es sobre tratamiento de una infección, sino sobre profilaxis en una cirugía electiva sin infección activa: por eso el antibiótico de amplio espectro sobra.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Tres pilares', kind: 'key', items: [
          { t: 'Murphy + fiebre o leucocitosis + eco', d: 'Los tres juntos confirman',
            say: 'Cerremos con las reglas de oro. Murphy positivo, fiebre o leucocitosis, y ecografía confirmatoria: los tres juntos dan el diagnóstico definitivo.' },
        ] },
        { title: 'Tratamiento', tag: 'Según el grado', kind: 'pharma', items: [
          { t: 'Grado I y II: operar antes de 72 h', d: 'Colecistectomía laparoscópica',
            say: 'Grado uno y dos: colecistectomía laparoscópica antes de setenta y dos horas.' },
          { t: 'Grado III: drenar, no operar', d: 'Colecistostomía percutánea',
            say: 'Grado tres, con falla de órganos: colecistostomía percutánea, y difieres la cirugía definitiva.' },
        ] },
        { title: 'En pabellón', tag: 'Nunca cortar a ciegas', kind: 'alert', items: [
          { t: 'Visión crítica de Strasberg', d: 'Solo 2 estructuras a la vesícula',
            say: 'Y en pabellón, nunca cortes sin la visión crítica de Strasberg.' },
          { t: 'Bilirrubina alta no es de la vesícula', d: 'Pensar en coledocolitiasis o Mirizzi',
            say: 'Si te llevas una sola idea de hoy: el grado de Tokio, no solo el diagnóstico, es lo que decide si operas o si drenas, y una ictericia marcada nunca es solo de la vesícula. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Colecistitis aguda: del diagnóstico a la conducta',
    root: N('start', 'Sospecha de colecistitis', 'Dolor en HCD de más de 6 horas, con Murphy',
      'Llega un paciente con dolor continuo en el hipocondrio derecho de más de seis horas y Murphy positivo. Antes de decidir nada, confirma el diagnóstico con los tres pilares de Tokio.',
      ['', N('q', '¿Hay fiebre o leucocitosis, y confirma la ecografía?', 'Los tres pilares juntos',
        'Necesitas inflamación local, inflamación sistémica, y la imagen que lo confirme.',
        ['Sí, los tres', N('q', '¿Qué grado de Tokio tiene?', 'La severidad decide la conducta',
          'Con el diagnóstico confirmado, clasifica la severidad antes de decidir si operas o drenas.',
          ['Grado I o II', N('do', 'Colecistectomía laparoscópica', 'Antes de 72 horas',
            'Sin falla de órganos, la colecistectomía laparoscópica precoz es la conducta, idealmente antes de las setenta y dos horas.')],
          ['Grado III', N('alert', 'Colecistostomía percutánea', 'Drenaje guiado por imagen, sin operar aún',
            'Con falla de algún órgano o riesgo anestésico prohibitivo, drenas primero y difieres la cirugía definitiva.')])],
        ['No, cuadro incompleto', N('ok', 'Buscar otro diagnóstico', 'Cólico biliar u otra causa',
          'Si no se cumplen los tres pilares, replantea el diagnóstico: puede ser un cólico biliar simple u otra causa de dolor en el hipocondrio derecho.')])],
      ['', N('q', '¿La bilirrubina está sobre 4?', 'Esa ictericia no es de la vesícula sola',
        'Si además hay ictericia franca, no la atribuyas a la colecistitis: busca una causa en la vía biliar.',
        ['Sí', N('refer', 'Sospechar coledocolitiasis o Mirizzi', 'Estudiar la vía biliar antes de operar',
          'Una bilirrubina así de alta obliga a evaluar el colédoco antes de ir a pabellón, para no encontrarte una sorpresa en plena cirugía.')])]),
  },
};
