// Clase 15.5 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_oftalmologia.cjs (oftal-05).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'oftal-05',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'La prueba de fenilefrina que separa lo benigno de lo que amenaza el ojo y avisa de una enfermedad sistémica',
      say: 'Bienvenidos. Hoy vemos dos inflamaciones de la cubierta externa del ojo que se parecen a primera vista y son radicalmente distintas en el fondo: la epiescleritis y la escleritis. Una es benigna y se va sola; la otra es destructiva y, en más de la mitad de los casos, es la primera señal de una enfermedad autoinmune grave. Y hay una prueba de un solo paso que las separa. Vamos a eso.',
    },

    {
      type: 'flow',
      kicker: 'Semiología',
      title: 'La prueba de fenilefrina: qué plexo está inflamado',
      nodes: [
        { id: 'ple', col: 0, row: 1, k: 'cause', t: 'Tres plexos vasculares', s: 'Conjuntival, epiescleral superficial y profundo' },
        { id: 'fen', col: 1, row: 1, k: 'mech', t: 'Gota de fenilefrina tópica', s: 'Se reevalúa a los 10-15 minutos' },
        { id: 'bla', col: 2, row: 0, k: 'good', t: 'Blanquea por completo', s: 'El plexo superficial se contrae' },
        { id: 'per', col: 2, row: 2, k: 'risk', t: 'No blanquea', s: 'El plexo profundo no responde' },
        { id: 'epi', col: 3, row: 0, k: 'effect', t: 'Epiescleritis', s: 'Inflamación superficial' },
        { id: 'esc', col: 3, row: 2, k: 'risk', t: 'Escleritis', s: 'Inflamación de la esclera' },
      ],
      edges: [
        { from: 'ple', to: 'fen' },
        { from: 'fen', to: 'bla', label: 'vasoconstricción' },
        { from: 'fen', to: 'per', label: 'sin respuesta' },
        { from: 'bla', to: 'epi' },
        { from: 'per', to: 'esc' },
      ],
      steps: [
        { show: ['ple'], note: 'Tres capas de vasos superpuestas',
          say: 'Partamos por la anatomía, porque de ahí sale la prueba clave de la clase. La pared externa del ojo tiene tres plexos vasculares superpuestos: el conjuntival, el más superficial; el epiescleral superficial; y el epiescleral profundo, adosado a la esclera misma.' },
        { show: ['fen'], note: 'Vasoconstrictor tópico, reevaluar en minutos',
          say: 'La prueba es simple: se instila una gota de fenilefrina tópica y se reevalúa el ojo diez a quince minutos después.' },
        { show: ['bla'], note: 'El plexo superficial responde al alfa uno agonista',
          say: 'Si el enrojecimiento desaparece casi por completo, es porque el plexo comprometido es el superficial, que responde intensamente al agonista alfa uno adrenérgico. Eso confirma epiescleritis.' },
        { show: ['per', 'esc'], note: 'El plexo profundo no tiene esos receptores',
          say: 'Pero si el enrojecimiento y el tono violáceo persisten sin cambios, el problema está en el plexo profundo y en la esclera misma, que no responden al vasoconstrictor tópico. Eso confirma escleritis, y ahí el pronóstico cambia por completo.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Epiescleritis',
      title: 'El lado benigno: molesta pero no amenaza',
      cards: [
        { title: 'Cómo se presenta', tag: 'Adultos jóvenes, más en mujeres', kind: 'criteria', items: [
          { t: 'Rojo salmón sectorial', d: 'En cuña, habitualmente temporal',
            say: 'Veamos primero el lado tranquilo. La epiescleritis se ve como un enrojecimiento en cuña, sectorial, de un rojo salmón brillante, casi siempre en el sector temporal. Es más frecuente en adultos jóvenes y en mujeres.' },
          { t: 'Molestia leve, sin dolor real', d: 'Visión y pupila normales',
            say: 'La molestia es leve, como ardor o sensación de arenilla, pero sin dolor ocular intenso. La agudeza visual es estrictamente normal, la pupila reactiva, y no hay compromiso de la córnea ni de la cámara anterior.' },
        ] },
        { title: 'Conducta', tag: 'Autolimitada', kind: 'normal', items: [
          { t: 'Se resuelve sola en una a tres semanas', d: 'La mayoría no necesita fármacos',
            say: 'La conducta es simple: es un cuadro benigno que se resuelve solo, entre una y tres semanas. La mayoría de los pacientes no necesita ningún fármaco.' },
          { t: 'Compresas frías y lágrimas', d: 'AINE tópico u oral si molesta más',
            say: 'Se indican compresas frías y lágrimas artificiales, y si la molestia es mayor, un curso corto de AINE tópico o AINE oral. Nada más. Y con eso ya tienes resuelto el lado fácil de la clase; ahora viene el que sí importa.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Escleritis',
      title: 'El lado peligroso: dolor terebrante y enfermedad sistémica',
      nodes: [
        { id: 'esc', col: 0, row: 1, k: 'cause', t: 'Escleritis confirmada', s: 'No blanquea con fenilefrina' },
        { id: 'art', col: 1, row: 0, k: 'risk', t: 'Artritis reumatoide', s: 'La causa más frecuente' },
        { id: 'vas', col: 1, row: 2, k: 'risk', t: 'Wegener, lupus, policondritis', s: 'Vasculitis sistémicas' },
        { id: 'sis', col: 2, row: 1, k: 'mech', t: 'Más de la mitad tiene enfermedad sistémica', s: 'Estudio reumatológico obligatorio' },
        { id: 'com', col: 3, row: 0, k: 'alert', t: 'Escleromalacia perforante', s: 'Adelgazamiento indoloro, riesgo de perforar' },
        { id: 'tto', col: 3, row: 2, k: 'good', t: 'AINE orales o corticoides sistémicos', s: 'Jamás responde a colirios' },
      ],
      edges: [
        { from: 'esc', to: 'art' }, { from: 'esc', to: 'vas' },
        { from: 'art', to: 'sis' }, { from: 'vas', to: 'sis' },
        { from: 'sis', to: 'com', label: 'si no se trata' },
        { from: 'sis', to: 'tto', label: 'tratamiento' },
      ],
      steps: [
        { show: ['esc'], note: 'El dolor ya te lo anuncia',
          say: 'Retomemos la escleritis, ya confirmada con la fenilefrina. Su clínica cardinal es un dolor ocular sordo, profundo, terebrante, que irradia a la órbita, la frente y hasta la mandíbula, y que despierta al paciente en la noche. El ojo se ve rojo oscuro o violáceo, muy distinto al rojo salmón de la epiescleritis.' },
        { show: ['art', 'vas'], note: 'La causa más frecuente y sus alternativas',
          say: 'Y aquí está la conexión que hace importante esta clase. La escleritis se asocia a enfermedades reumatológicas sistémicas, siendo la artritis reumatoide la causa más frecuente, seguida de la granulomatosis con poliangeítis, antes llamada Wegener, el lupus eritematoso sistémico y la policondritis recidivante.' },
        { show: ['sis'], note: 'Más de la mitad de los casos',
          say: 'Más de la mitad de los pacientes con escleritis tienen, o van a tener, una de estas enfermedades. Por eso todo paciente con escleritis necesita estudio reumatológico completo, no solo tratamiento ocular.' },
        { show: ['com'], note: 'La coroides se ve azul oscura por debajo',
          say: 'Si no se trata, la complicación más temida es la escleromalacia perforante: la esclera se adelgaza tanto que se ve traslúcida, dejando ver la coroides oscura por debajo, y puede terminar en perforación del ojo. Y ojo, es indolora, típica de artritis reumatoide de larga data.' },
        { show: ['tto'], note: 'Nunca colirios',
          say: 'El tratamiento nunca es un colirio. Se usan AINE orales en dosis altas, como indometacina, como primera línea; si no responde o es necrotizante, corticoides sistémicos e inmunosupresores, junto con derivación urgente a oftalmología y a reumatología.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol de decisión, tal como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Epiescleritis versus escleritis: lo que decide todo',
      head: ['Parámetro', 'Epiescleritis', 'Escleritis'],
      rows: [
        { cells: ['Dolor ocular', 'Leve, ardor o arenilla', 'Terebrante, severo, despierta de noche'],
          say: 'Repasemos las trampas. En dolor: la epiescleritis da apenas ardor o arenilla; la escleritis, un dolor terebrante que despierta al paciente en la noche.' },
        { cells: ['Color del ojo', 'Rojo salmón sectorial', 'Rojo violáceo, difuso o nodular'],
          say: 'En color: rojo salmón brillante en la epiescleritis, contra un rojo violáceo oscuro en la escleritis.' },
        { cells: ['Prueba de fenilefrina', 'Blanquea por completo', 'No blanquea, persiste el enrojecimiento'],
          say: 'Y la prueba que lo confirma: blanquea en la epiescleritis, no blanquea en la escleritis. Esta es la que más se pregunta.' },
        { cells: ['Asociación sistémica', 'Rara, menos de un veinte por ciento', 'Más de la mitad, autoinmune'],
          say: 'En asociación sistémica: rara en la epiescleritis, presente en más de la mitad de las escleritis.' },
        { cells: ['Amenaza para el ojo', 'Nula, benigna y autolimitada', 'Alta: adelgazamiento y perforación'],
          say: 'En amenaza visual: nula en una, alta en la otra, por el riesgo de escleromalacia.' },
        { cells: ['Tratamiento', 'Lágrimas, AINE tópico si molesta', 'AINE orales o corticoides sistémicos'],
          say: 'Y en tratamiento: lágrimas o un AINE tópico alcanzan para la epiescleritis. La escleritis exige tratamiento sistémico, nunca un colirio solo. Esa es la trampa que más cae en el examen.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 52 años con antecedente de artritis reumatoide en tratamiento con metotrexato consulta por dolor ocular izquierdo muy intenso, de 5 días de evolución, continuo y profundo, que le irradia al hemicráneo y no le deja dormir. Al examen: agudeza visual conservada, hiperemia difusa con marcada coloración violácea en el ojo izquierdo. Se instila fenilefrina al 2,5% y a los 15 minutos el enrojecimiento y el dolor persisten sin cambios.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Indicar colirio de cloranfenicol y control en 1 semana' },
        { letter: 'B', text: 'Indicar colirio de dexametasona cada 4 horas' },
        { letter: 'C', text: 'Iniciar AINE oral en dosis altas y derivar de urgencia a oftalmología y reumatología' },
        { letter: 'D', text: 'Tranquilizar a la paciente e indicar solo lágrimas artificiales' },
        { letter: 'E', text: 'Indicar colirio de timolol para bajar la presión ocular' },
      ],
      correct: 'C',
      explanation: 'Dolor terebrante nocturno, ojo violáceo profundo, que no blanquea con fenilefrina, en una paciente con artritis reumatoide, es escleritis. Nunca responde a colirios: se trata con AINE oral en dosis altas o corticoides sistémicos, y se deriva de urgencia a oftalmología y reumatología.',
      say: {
        stem: 'Vamos con un caso. Mujer de cincuenta y dos años, con artritis reumatoide en tratamiento con metotrexato, consulta por dolor ocular izquierdo muy intenso, de cinco días, continuo, profundo, que le irradia al hemicráneo y no la deja dormir. Al examen, la visión está conservada, y el ojo izquierdo tiene una hiperemia difusa muy violácea. Se instila fenilefrina, y a los quince minutos el enrojecimiento y el dolor siguen exactamente igual.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: colirio de cloranfenicol y control en una semana, colirio de dexametasona cada cuatro horas, AINE oral en dosis altas y derivar de urgencia, tranquilizar con solo lágrimas artificiales, o colirio de timolol. Piénsalo.',
        answer: 'Es la C. Todo el enunciado apunta a escleritis: dolor terebrante nocturno, color violáceo profundo, sin respuesta a la fenilefrina, y artritis reumatoide de base. Un colirio, sea antibiótico o corticoide, no sirve aquí, porque la inflamación no está en la superficie. Y tranquilizar sería grave: esto no es benigno. La conducta correcta es AINE oral en dosis altas y derivación urgente, porque además hay que estudiar la enfermedad sistémica de fondo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo · banco EUNACOM',
      stem: 'Una mujer de 32 años consulta por enrojecimiento sectorial en el ojo derecho de 3 días de evolución, asociado a sensación leve de arenilla, sin dolor intenso ni baja de visión. Al examen: agudeza visual normal bilateral, inyección vascular roja brillante triangular en el sector temporal de la conjuntiva bulbar. Tras instilar una gota de fenilefrina al 2,5%, la hiperemia vascular desaparece casi por completo a los 10 minutos.',
      question: '¿Cuál es el diagnóstico más probable y la conducta médica indicada?',
      options: [
        { letter: 'A', text: 'Escleritis necrotizante; iniciar pulsos de metilprednisolona endovenosa' },
        { letter: 'B', text: 'Epiescleritis simple; indicar lubricantes oculares o AINE tópico y tranquilizar a la paciente' },
        { letter: 'C', text: 'Glaucoma agudo incipiente; indicar pilocarpina al 2% en colirio' },
        { letter: 'D', text: 'Uveítis anterior aguda; solicitar resonancia magnética cerebral' },
        { letter: 'E', text: 'Queratitis estromal herpética; iniciar aciclovir endovenoso' },
      ],
      correct: 'B',
      explanation: 'El blanqueamiento vascular completo tras la fenilefrina confirma que el plexo comprometido es el superficial: epiescleritis simple. La conducta es sintomática, con resolución espontánea en una a dos semanas.',
      say: {
        stem: 'Cerremos con un caso representativo del banco. Mujer de treinta y dos años, con enrojecimiento sectorial en el ojo derecho de tres días, con sensación leve de arenilla, sin dolor intenso ni baja de visión. Al examen, visión normal en ambos ojos, e inyección roja brillante, triangular, en el sector temporal. Tras instilar fenilefrina al dos coma cinco por ciento, la hiperemia desaparece casi por completo a los diez minutos.',
        question: '¿Cuál es el diagnóstico más probable y la conducta médica indicada?',
        options: 'Las opciones: escleritis necrotizante con pulsos de corticoide endovenoso, epiescleritis simple con lubricantes y tranquilizar, glaucoma agudo incipiente con pilocarpina, uveítis anterior con resonancia cerebral, o queratitis herpética con aciclovir endovenoso. Piénsalo.',
        answer: 'Es la B. El blanqueamiento casi completo con fenilefrina certifica que el plexo comprometido es el superficial: epiescleritis simple. La conducta en atención primaria es sintomática, con lágrimas o un AINE tópico, y tranquilizar explicando que se resuelve sola en una a dos semanas. La escleritis necrotizante es la trampa: ahí el ojo no habría blanqueado y el dolor sería terebrante, no una simple arenilla.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'La prueba que decide', tag: 'Fenilefrina', kind: 'key', items: [
          { t: 'Blanquea: epiescleritis', d: 'No blanquea: escleritis',
            say: 'Cerremos con las reglas de oro. Si la fenilefrina blanquea, es epiescleritis, benigna. Si no blanquea, es escleritis, y ahí cambia todo.' },
        ] },
        { title: 'La escleritis no es solo ocular', tag: 'Estudio sistémico', kind: 'alert', items: [
          { t: 'Más de la mitad tiene enfermedad autoinmune', d: 'Artritis reumatoide, la más frecuente',
            say: 'Más de la mitad de las escleritis anuncian una enfermedad reumatológica sistémica, y la artritis reumatoide es la más frecuente.' },
          { t: 'Nunca responde a colirios', d: 'AINE orales o corticoides sistémicos',
            say: 'Y la escleritis nunca responde a colirios: necesita AINE orales o corticoides sistémicos, y derivación urgente doble, a oftalmología y a reumatología.' },
        ] },
        { title: 'La complicación temida', tag: 'Escleromalacia perforante', kind: 'alert', items: [
          { t: 'Adelgazamiento indoloro de la esclera', d: 'Riesgo de perforación del globo ocular',
            say: 'Y si te llevas una sola idea de hoy: la escleritis no tratada puede terminar en escleromalacia perforante, un adelgazamiento indoloro que amenaza con perforar el ojo. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Ojo rojo profundo: la fenilefrina decide',
    root: (() => {
      const epi = N('ok', 'Epiescleritis', 'Lágrimas artificiales; AINE tópico si molesta',
        'Si el enrojecimiento desaparece, el plexo comprometido es el superficial: epiescleritis. Conducta sintomática, se resuelve sola.');
      const escSistemica = N('alert', 'Escleritis con sospecha sistémica', 'AINE oral en dosis altas o corticoides sistémicos; derivar a reumatología',
        'Dolor terebrante que despierta de noche, o antecedente de artritis reumatoide u otra vasculitis: iniciar AINE oral en dosis altas o corticoides sistémicos, y derivar de urgencia a oftalmología y reumatología para descartar enfermedad autoinmune.');
      const escIdiopatica = N('refer', 'Escleritis idiopática', 'Igual requiere tratamiento sistémico y estudio',
        'Aunque no haya un antecedente evidente, la escleritis siempre exige tratamiento sistémico y estudio reumatológico, porque puede ser la primera manifestación de la enfermedad de base.');
      const preguntaEscleritis = N('q', '¿Hay dolor terebrante nocturno o antecedente reumatológico?', 'Escleritis confirmada',
        'Si el enrojecimiento no cambia, el plexo profundo y la esclera están comprometidos: escleritis. Ahora define la gravedad y la asociación sistémica.',
        ['Sí, dolor severo o antecedente autoinmune', escSistemica],
        ['Escleritis sin antecedente claro', escIdiopatica]);
      const preguntaFenilefrina = N('q', '¿Blanquea con fenilefrina al 2,5%?', 'Reevaluar a los 10 a 15 minutos',
        'Instila una gota de fenilefrina tópica y reevalúa el ojo a los diez o quince minutos.',
        ['Sí, blanquea por completo', epi],
        ['No blanquea, persiste violáceo', preguntaEscleritis]);
      return N('start', 'Ojo rojo sectorial o profundo con dolor', 'Evalúa intensidad del dolor y color del ojo',
        'Paciente con ojo rojo sectorial o profundo, con dolor. El primer paso siempre es la prueba de fenilefrina.',
        ['', preguntaFenilefrina]);
    })(),
  },
};
