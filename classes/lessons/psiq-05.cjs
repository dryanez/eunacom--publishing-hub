// Clase 17.5 (Psiquiatría) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_psiquiatria.cjs (psiq-05). Preguntas: banco real EUNACOM (class_questions.cjs y --search).
// El código de la clase (1.11.1.002) no tiene preguntas reales propias (la que sale con ese código es de artritis reactiva); la psiquiatría real está bajo 5.01.1.xxx. De la búsqueda por tema se usaron:
//   Agosto 2021 P129 (adaptativo de tipo ansioso, no somatización), Julio 2024 P81 (adolescente: depresión mayor y no distimia), Diciembre 2025 P74 (parece adaptativo, evoluciona a depresión: sertralina).
// No usadas: Diciembre 2025 P90 (la usa psiq-01); Enero 2023 P167 (mismo punto que Agosto 2021 P129); Julio 2016 P128 y Julio 2025 P155 (mismo punto que Diciembre 2025 P90, y la segunda describe testigo de un accidente grave, que podría confundirse con estrés agudo);
//   Diciembre 2024 P142 (alternativas sin relación con el enunciado); Diciembre 2024 P145 y Diciembre 2017 P35 (tiroides, no psiquiatría); Julio 2013 P116 (artritis reactiva).
// Sin pregunta real de distimia del adulto: una pregunta del libro como "Banco EUNACOM · Caso representativo". La pregunta del libro de adaptativo (ruptura de pareja) se cubre con las reales.
// Imágenes: ninguna (psiquiatría; no hay figura clínica útil en los libros extraídos).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'psiq-05',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Trastorno adaptativo y trastorno depresivo persistente (distimia): estresor, tiempo y gravedad',
      say: 'Bienvenido. Hoy vemos dos cuadros del ánimo que se confunden mucho con la depresión mayor en la consulta de atención primaria: el trastorno adaptativo y el trastorno depresivo persistente, que antes se llamaba distimia. Lo que los separa de la depresión mayor, y entre sí, se reduce a tres ejes: el estresor, la gravedad y el tiempo. Esa lógica se pregunta una y otra vez en el EUNACOM.',
    },

    {
      type: 'points',
      kicker: 'Trastorno adaptativo',
      title: 'Reacción a un estresor identificable',
      cards: [
        { title: 'Criterios', tag: 'DSM-5', kind: 'criteria', items: [
          { t: 'Estresor claro: divorcio, despido, migración', d: 'Síntomas dentro de los primeros 3 meses',
            say: 'Hay un estresor identificable, como un divorcio, un despido, una migración o el diagnóstico de una enfermedad médica no invalidante. Los síntomas aparecen dentro de los primeros tres meses desde ese estresor.' },
          { t: 'Malestar desproporcionado o deterioro', d: 'Emocional o conductual; ánimo bajo o ansiedad',
            say: 'El malestar es mayor de lo esperable para el estresor, o hay deterioro social o laboral. Puede ser de tipo depresivo, ansioso o mixto.' },
          { t: 'No es depresión mayor', d: 'No alcanza los 5 criterios',
            say: 'Y clave: no cumple criterios de depresión mayor ni de otro trastorno mental. Esa es su definición por exclusión.' },
        ] },
        { title: 'Evolución y manejo', tag: 'Temporal', kind: 'key', items: [
          { t: 'Termina antes de 6 meses', d: 'Una vez que cesa el estresor',
            say: 'Cuando el estresor o sus consecuencias terminan, los síntomas no pasan de seis meses.' },
          { t: 'Psicoterapia breve y resolución de problemas', d: 'Es el pilar del tratamiento',
            say: 'El pilar es la psicoterapia breve, centrada en la crisis y en resolver el problema, con psicoeducación y apoyo.' },
          { t: 'Sin antidepresivos de entrada', d: 'Benzodiacepinas: evitarlas',
            say: 'Los antidepresivos no son la primera línea. Las benzodiacepinas conviene evitarlas; el libro las acepta solo por una o dos semanas si hay insomnio incapacitante, avisando del riesgo de dependencia.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Línea de tiempo',
      title: 'Los plazos del adaptativo',
      nodes: [
        { id: 'a', col: 0, row: 2, k: 'cause', t: 'Estresor', s: 'Identificable' },
        { id: 'b', col: 1, row: 2, k: 'effect', t: 'Síntomas', s: 'Dentro de 3 meses' },
        { id: 'c', col: 2, row: 1, k: 'good', t: 'Termina el estresor', s: 'O sus consecuencias' },
        { id: 'd', col: 3, row: 1, k: 'good', t: 'Remite', s: 'Menos de 6 meses' },
        { id: 'e', col: 2, row: 3, k: 'alert', t: 'Cumple 5 criterios', s: 'Ya es depresión mayor' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' }, { from: 'b', to: 'e', label: 'Si se agrava' },
      ],
      steps: [
        { show: ['a', 'b'], note: 'Primero el estresor',
          say: 'Primero ocurre algo identificable en la vida de la persona, y los síntomas aparecen dentro de los tres primeros meses. Ese orden, estresor y luego síntomas, es la huella del adaptativo.' },
        { show: ['c', 'd'], note: 'Se resuelve en menos de 6 meses',
          say: 'Cuando el estresor termina o se supera, los síntomas no persisten más de seis meses. Es un cuadro limitado en el tiempo.' },
        { show: ['e'], note: 'Si se agrava, se reclasifica',
          say: 'Pero ojo: si el cuadro crece y cumple los cinco criterios de depresión mayor, el diagnóstico cambia. Un adaptativo que no mejora con psicoterapia hay que reevaluarlo, porque puede haber evolucionado a depresión.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Distimia',
      title: 'Trastorno depresivo persistente',
      cards: [
        { title: 'Criterios', tag: 'Cronicidad', kind: 'criteria', items: [
          { t: 'Ánimo bajo casi todos los días', d: 'Más días presente que ausente',
            say: 'El ánimo está deprimido durante la mayor parte del día, y hay más días con síntomas que sin ellos.' },
          { t: '2 años en adultos', d: '1 año en niños y adolescentes',
            say: 'La duración mínima es de dos años en adultos, y de un año en niños y adolescentes.' },
          { t: 'Sin pausas de más de 2 meses', d: 'Más 2 síntomas: apetito, sueño, energía',
            say: 'En ese período nunca ha estado libre de síntomas por más de dos meses seguidos. Y se suman al menos dos más: alteración del apetito o del sueño, poca energía, baja autoestima, mala concentración o desesperanza.' },
        ] },
        { title: 'Cómo consulta', tag: 'Clínica', kind: 'key', items: [
          { t: '"Siempre he sido así"', d: 'Lo vive como su forma de ser',
            say: 'El paciente suele decir que siempre ha sido así, taciturno o negativo. Lo asume como un rasgo de personalidad, y por eso se diagnostica tarde.' },
          { t: 'Responde a tratamiento', d: 'ISRS más psicoterapia',
            say: 'Pero no es un rasgo inmodificable: responde bien a farmacoterapia y psicoterapia combinadas.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Depresión doble',
      title: 'Episodio mayor sobre distimia',
      nodes: [
        { id: 'a', col: 0, row: 2, k: 'start', t: 'Distimia de base', s: 'Crónica, 2 años o más' },
        { id: 'b', col: 1, row: 2, k: 'alert', t: 'Episodio mayor', s: 'Cumple todos los criterios' },
        { id: 'c', col: 2, row: 2, k: 'mech', t: 'Depresión doble', s: 'Dos trastornos juntos' },
        { id: 'd', col: 3, row: 1, k: 'good', t: 'Antidepresivo', s: 'Trata el episodio' },
        { id: 'e', col: 4, row: 2, k: 'risk', t: 'Vuelve a la base', s: 'Optimizar a largo plazo' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' }, { from: 'd', to: 'e' },
      ],
      steps: [
        { show: ['a', 'b', 'c'], note: 'Dos trastornos a la vez',
          say: 'Una persona con distimia crónica puede sufrir una exacerbación aguda que cumple todos los criterios de un episodio depresivo mayor. A eso se le llama depresión doble: un episodio mayor sobreimpuesto a la distimia.' },
        { show: ['d', 'e'], note: 'Se trata y queda la base',
          say: 'Se trata el episodio mayor con antidepresivo, y esa garantía explícita en salud, la número veintiuno, aplica. Pero el paciente vuelve a su línea de base distímica, así que hay que optimizar el tratamiento farmacológico y psicoterapéutico a largo plazo.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico diferencial',
      title: 'Tres ejes: estresor, gravedad, tiempo',
      cards: [
        { title: 'Qué es cada cuadro', tag: 'Lógica', kind: 'key', items: [
          { t: 'Estresor claro, menos de 5 criterios', d: 'Trastorno adaptativo; psicoterapia',
            say: 'Si hay un estresor claro, los síntomas empezaron en menos de tres meses, no completan los criterios de depresión y se resuelven en menos de seis meses después, es un adaptativo, y se hace psicoterapia.' },
          { t: '5 de 9 criterios, 2 semanas', d: 'Episodio depresivo mayor; ISRS y TCC',
            say: 'Si hay cinco o más de nueve criterios durante al menos dos semanas, con deterioro evidente, es un episodio depresivo mayor, con ISRS y terapia cognitivo-conductual.' },
          { t: 'Ánimo bajo crónico por 2 años', d: 'Distimia; ISRS prolongado y TCC',
            say: 'Si el ánimo está crónicamente bajo por dos años o más, es distimia, con ISRS a largo plazo y psicoterapia.' },
        ] },
        { title: 'No todo es enfermedad', tag: 'Duelo', kind: 'normal', items: [
          { t: 'Duelo no complicado', d: 'Tristeza y llanto, sin culpa patológica',
            say: 'Y después de la muerte de un ser querido, la tristeza, el llanto y el dolor sin culpa patológica ni ideas de muerte son un duelo normal.' },
          { t: 'Autoestima conservada', d: 'Acompañar; sin intervención médica',
            say: 'Es un proceso normal, con la autoestima conservada, y no requiere tratamiento médico: se acompaña y se refuerza la red de apoyo.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del cuadro depresivo a su diagnóstico y conducta.',
    },

    {
      type: 'table',
      kicker: 'Diagnóstico diferencial',
      title: 'Cuatro cuadros, cuatro conductas',
      head: ['Entidad', 'Desencadenante', 'Duración', 'Tratamiento'],
      rows: [
        { cells: ['Trastorno adaptativo', 'Estresor previo; menos de 3 meses', 'Menos de 6 meses tras el estresor', 'Psicoterapia; sin ISRS'],
          say: 'El adaptativo tiene un estresor claro, un malestar desproporcionado pero con menos de cinco criterios, y se resuelve antes de seis meses. Psicoterapia, sin antidepresivos.' },
        { cells: ['Distimia', 'Insidioso; sin gatillante claro', '2 años o más continuos', 'ISRS más psicoterapia'],
          say: 'La distimia es insidiosa, subumbral pero persistente, de al menos dos años, con sertralina o escitalopram más psicoterapia.' },
        { cells: ['Episodio depresivo mayor', 'Variable', '2 semanas o más', 'ISRS y psicoterapia; GES 21'],
          say: 'El episodio depresivo mayor puede ser reactivo o no, dura al menos dos semanas con cinco de nueve criterios y deterioro marcado. ISRS y psicoterapia, con garantía explícita.' },
        { cells: ['Duelo no complicado', 'Muerte de un ser querido', 'Meses; olas de dolor', 'Acompañamiento y red de apoyo'],
          say: 'El duelo normal sigue a una muerte, dura meses con olas de dolor, mantiene la autoestima y solo requiere acompañamiento.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Estresor claro; conserva el disfrute', 'Psicoterapia breve', 'Iniciar antidepresivo'],
          say: 'Estresor claro, conserva el apetito y el disfrute, menos de cinco criterios: adaptativo y psicoterapia. El error es dar antidepresivos de entrada.' },
        { cells: ['Adaptativo que no mejora', 'Reevaluar: ¿depresión?', 'Seguir igual sin revisar'],
          say: 'Si un cuadro que parecía adaptativo no mejora con psicoterapia y completa criterios, se reclasifica como depresión y se trata como tal.' },
        { cells: ['Ánimo bajo de más de 2 años', 'Distimia: ISRS y TCC', 'Solo reposo o adaptativo'],
          say: 'Toda la vida triste, más de dos años continuos: distimia, con ISRS y psicoterapia. El error es llamarlo adaptativo.' },
        { cells: ['Adolescente: más de 1 año de síntomas', 'Distimia posible', 'Exigir 2 años'],
          say: 'En niños y adolescentes basta un año. Pero si ya completa los criterios de depresión mayor, es depresión mayor.' },
        { cells: ['Distimia más episodio mayor', 'Depresión doble', 'Tratar solo la distimia'],
          say: 'Distimia con un episodio mayor encima es depresión doble: se trata el episodio y se optimiza el tratamiento de base.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 32 años, ingeniero comercial. Hace 2 meses lo trasladaron a una sucursal lejana, con nueva jefatura y más responsabilidades. Desde hace 6 semanas tiene desánimo, cefalea tensional, dificultad para conciliar el sueño, ansiedad los domingos y llanto ocasional. Mantiene su apetito, disfruta con sus hijos, juega fútbol con sus amigos y no tiene culpa, enlentecimiento ni ideas de muerte. PHQ-9: 7 puntos.',
      question: '¿Cuál es la conducta más adecuada en APS?',
      options: [
        { letter: 'A', text: 'Sertralina 50 mg al día y control en 2 semanas' },
        { letter: 'B', text: 'Psicoeducación, psicoterapia de apoyo breve, higiene del sueño y control en 3 a 4 semanas' },
        { letter: 'C', text: 'Clonazepam por 3 meses' },
        { letter: 'D', text: 'Derivar de urgencia por depresión grave' },
        { letter: 'E', text: 'Alta sin seguimiento: es una reacción normal' },
      ],
      correct: 'B',
      explanation: 'Trastorno adaptativo con ánimo deprimido y ansiedad: estresor laboral claro, síntomas dentro de 3 meses, sin los 5 criterios de depresión mayor y con funcionamiento conservado. Se trata con psicoeducación, psicoterapia breve y seguimiento, sin antidepresivos ni benzodiacepinas prolongadas.',
      say: {
        stem: 'Un hombre de treinta y dos años, ingeniero comercial. Hace dos meses lo trasladaron a una sucursal lejana, con nueva jefatura y más responsabilidades. Seis semanas con desánimo, dolor de cabeza tensional, dificultad para conciliar el sueño, ansiedad los domingos y algo de llanto. Mantiene el apetito, disfruta con sus hijos, juega fútbol y no tiene culpa, enlentecimiento ni ideas de muerte. El PHQ nueve da siete.',
        question: '¿Cuál es la conducta más adecuada en atención primaria?',
        options: 'Las opciones: sertralina con control en dos semanas; psicoeducación, psicoterapia breve, higiene del sueño y control en tres a cuatro semanas; clonazepam por tres meses; derivar de urgencia; o alta sin seguimiento. Piénsalo.',
        answer: 'Es la B. Hay un estresor claro, los síntomas empezaron dentro de tres meses, no completa los cinco criterios y conserva su funcionamiento: trastorno adaptativo. Se maneja con psicoeducación, psicoterapia breve y seguimiento. El antidepresivo y el clonazepam sobran, y darlo de alta sin seguimiento tampoco, porque hay malestar y hay que vigilar la evolución.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 129',
      stem: 'Un paciente de 35 años refiere sensación de angustia e inquietud, de un mes de evolución, asociado a insomnio de conciliación y cefalea diaria, de localización occipital, que se irradia hacia los hombros. Refiere que los síntomas iniciaron en relación a la necesidad de cambiarse de casa, ya que fue asignado a nuevo cargo en su trabajo, en una ciudad distinta. ¿Cuál es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Trastorno por somatización' },
        { letter: 'B', text: 'Depresión mayor' },
        { letter: 'C', text: 'Trastorno conversivo' },
        { letter: 'D', text: 'Trastorno adaptativo' },
        { letter: 'E', text: 'Trastorno disociativo' },
      ],
      correct: 'D',
      explanation: 'Trastorno adaptativo de tipo ansioso: gatillante claro y síntomas de ansiedad. La cefalea tensional no lo convierte en somatización, que implica múltiples síntomas de todo tipo.',
      say: {
        stem: 'Una pregunta real del EUNACOM de agosto de dos mil veintiuno. Un paciente de treinta y cinco años con angustia e inquietud de un mes, insomnio de conciliación y dolor de cabeza diario en la nuca, que se irradia a los hombros. Los síntomas empezaron al saber que debía cambiarse de casa por un nuevo cargo en otra ciudad.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: somatización; depresión mayor; trastorno conversivo; trastorno adaptativo; o trastorno disociativo. Piénsalo.',
        answer: 'Es la D. Hay un gatillante claro, el cambio de ciudad, y síntomas de ansiedad: es un adaptativo de tipo ansioso. Fíjate que el adaptativo no es solo triste, también puede ser ansioso. La cefalea tensional es una expresión de la ansiedad, no una somatización, que exige muchos síntomas de todo tipo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 74',
      stem: 'Una paciente de 38 años inicia un cuadro de ánimo bajo, desconcentración e insomnio de conciliación, que inició después de que su marido fuera diagnosticado de una enfermedad grave. No ha tenido cambios en el peso ni ideación suicida. Inicia psicoterapia sin notar mejoría de sus síntomas. ¿Cuál es el tratamiento farmacológico de elección para el manejo de esta paciente?',
      question: '¿Cuál es el tratamiento farmacológico de elección?',
      options: [
        { letter: 'A', text: 'Bupropión' },
        { letter: 'B', text: 'Venlafaxina' },
        { letter: 'C', text: 'Sertralina' },
        { letter: 'D', text: 'Carbonato de litio' },
        { letter: 'E', text: 'Mirtazapina' },
      ],
      correct: 'C',
      explanation: 'Parecía un trastorno adaptativo, pero sin mejoría con psicoterapia el cuadro evoluciona a una depresión. Su primera línea es un ISRS, como la sertralina.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veinticinco. Una mujer de treinta y ocho años con ánimo bajo, desconcentración e insomnio de conciliación, desde que diagnosticaron una enfermedad grave a su marido. Sin cambios de peso ni ideas suicidas. Inició psicoterapia y no ha mejorado.',
        question: '¿Cuál es el tratamiento farmacológico de elección?',
        options: 'Las opciones: bupropión; venlafaxina; sertralina; carbonato de litio; o mirtazapina. Piénsalo.',
        answer: 'Es la C. Partió como un cuadro reactivo, pero no mejoró con psicoterapia y se comporta como una depresión. Cuando se decide usar fármaco, la primera línea es un ISRS, como la sertralina. Venlafaxina y mirtazapina son segundas opciones, y el litio es para otro trastorno. Esta pregunta enseña la otra cara del adaptativo: si no mejora, se reevalúa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 81',
      stem: 'Un adolescente de 16 años presenta, desde hace 3 meses, anhedonia, disminución en su rendimiento escolar y presencia de pensamientos negativos sobre sí mismo y su situación, con aislamiento social. Además, relata dificultades para concentrarse en sus actividades académicas e insomnio tanto de inicio como de mantención. Ha subido 5 kilogramos de peso en los últimos meses. Niega autoagresiones y no tiene ideación suicida actual. ¿Cuál es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Distimia' },
        { letter: 'B', text: 'Trastorno del espectro autista' },
        { letter: 'C', text: 'Episodio depresivo mayor' },
        { letter: 'D', text: 'Trastorno por déficit atencional' },
        { letter: 'E', text: 'Trastorno de personalidad' },
      ],
      correct: 'C',
      explanation: 'Cumple criterios de depresión mayor: se afectan el peso, el sueño, el rendimiento escolar y la vida social. En adolescentes la distimia exige un año de ánimo bajo sin cumplir criterios de depresión.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticuatro. Un adolescente de dieciséis años, tres meses con anhedonia, caída del rendimiento escolar, pensamientos negativos sobre sí mismo, aislamiento, mala concentración, insomnio de inicio y mantención, y cinco kilos de aumento de peso. Niega autoagresión e ideación suicida.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: distimia; trastorno del espectro autista; episodio depresivo mayor; déficit atencional; o trastorno de personalidad. Piénsalo.',
        answer: 'Es la C. Tiene muchos criterios de depresión mayor y deterioro marcado en sueño, peso, rendimiento y vida social. La distimia en adolescentes pide al menos un año de ánimo bajo sin llegar a ese cuadro. Esa es la trampa: la palabra crónico no es lo que decide, decide la gravedad y los criterios.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Una mujer de 39 años consulta en salud mental refiriendo: "Toda mi vida he sido una persona triste y sin energía; desde la universidad, hace más de 10 años, siento que veo el mundo en blanco y negro, me canso con facilidad y tengo muy baja autoestima". Refiere que nunca ha tenido episodios de euforia ni períodos libres de síntomas que superen las 3 o 4 semanas seguidas. Su examen físico y tiroideo son normales. ¿Cuál es el diagnóstico más probable y el pilar terapéutico?',
      question: '¿Cuál es el diagnóstico más probable y el pilar terapéutico?',
      options: [
        { letter: 'A', text: 'Trastorno adaptativo; reposo laboral exclusivo' },
        { letter: 'B', text: 'Trastorno depresivo persistente (distimia); ISRS a largo plazo y psicoterapia cognitivo-conductual' },
        { letter: 'C', text: 'Trastorno de personalidad esquizoide; antipsicóticos típicos' },
        { letter: 'D', text: 'Episodio depresivo mayor único; suspender fármacos a los 3 meses' },
        { letter: 'E', text: 'Trastorno ciclotímico; valproato sódico en monoterapia' },
      ],
      correct: 'B',
      explanation: 'Ánimo bajo, poca energía y baja autoestima de curso continuo por más de 10 años, sin períodos libres de más de 2 meses: distimia. El tratamiento óptimo combina un ISRS a dosis plenas por tiempo prolongado con psicoterapia cognitivo-conductual.',
      say: {
        stem: 'Un caso representativo del banco de preguntas. Una mujer de treinta y nueve años que dice: toda mi vida he sido triste y sin energía, desde la universidad, hace más de diez años; me canso con facilidad y tengo muy baja autoestima. Nunca ha tenido euforia ni períodos libres de síntomas de más de tres o cuatro semanas. Examen físico y tiroideo normales.',
        question: '¿Cuál es el diagnóstico más probable y el pilar terapéutico?',
        options: 'Las opciones: adaptativo con reposo; distimia con ISRS prolongado y psicoterapia; trastorno esquizoide con antipsicóticos; episodio único con suspensión a los tres meses; o ciclotimia con valproato. Piénsalo.',
        answer: 'Es la B. Más de diez años de ánimo bajo continuo, con baja energía y baja autoestima y sin períodos libres de más de dos meses: distimia. Se trata con ISRS a largo plazo y psicoterapia cognitivo-conductual. El adaptativo necesita un estresor reciente, y no hay euforia que sugiera ciclotimia.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: adaptativo y distimia',
      cards: [
        { title: 'Adaptativo', tag: 'Estresor', kind: 'key', items: [
          { t: 'Estresor, menos de 5 criterios', d: 'Dentro de 3 meses; termina en 6',
            say: 'Cerremos con las reglas de oro. El adaptativo aparece dentro de los tres meses de un estresor identificable, no completa los cinco criterios de depresión y termina antes de seis meses.' },
          { t: 'Psicoterapia breve primero', d: 'Sin antidepresivos de entrada',
            say: 'Se trata con psicoterapia breve, no con antidepresivos de entrada. Y si no mejora o crece, se reevalúa: puede ser una depresión.' },
        ] },
        { title: 'Distimia', tag: 'Cronicidad', kind: 'alert', items: [
          { t: 'Dos años de ánimo bajo continuo', d: 'Un año en niños y adolescentes',
            say: 'La distimia pide dos años de ánimo bajo continuo en adultos, y un año en niños y adolescentes, sin más de dos meses libres de síntomas.' },
          { t: 'ISRS más psicoterapia prolongados', d: 'Con episodio mayor: depresión doble',
            say: 'Se trata con ISRS y psicoterapia a largo plazo, y si se suma un episodio mayor, es depresión doble. Si te llevas una sola idea de hoy: estresor y menos de cinco criterios es adaptativo y se trata con psicoterapia; dos años continuos es distimia y se trata con ISRS más psicoterapia. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Cuadro depresivo: adaptativo, distimia o depresión mayor',
    root: N('start', 'Ánimo bajo en la consulta', 'Estresor, criterios y tiempo',
      'Un paciente consulta por ánimo bajo. Lo ordenamos con tres ejes: estresor, gravedad y tiempo.',
      ['Siempre', N('do', 'Preguntar por estresor y duelo', 'Y por riesgo suicida',
        'Se pregunta por un estresor reciente, por una pérdida, y siempre por ideas de muerte.',
        ['Muerte de un ser querido, sin culpa patológica', N('ok', 'Duelo no complicado', 'Acompañar y red de apoyo',
          'Tristeza y llanto, con autoestima conservada y sin ideas de muerte: es un duelo normal. Se acompaña.')],
        ['5 de 9 criterios por 2 semanas', N('do', 'Episodio depresivo mayor', 'ISRS y psicoterapia; GES 21',
          'Cumple criterios de depresión mayor: ISRS y psicoterapia. Si además hay un ánimo bajo crónico de base, es depresión doble.')],
        ['Estresor claro; menos de 5 criterios', N('ok', 'Trastorno adaptativo', 'Psicoterapia breve; seguimiento',
          'Estresor claro, síntomas dentro de tres meses y sin completar criterios: adaptativo. Psicoterapia breve y seguimiento; si no mejora, se reevalúa.')],
        ['Ánimo bajo crónico, 2 años o más', N('ok', 'Distimia', 'ISRS prolongado y psicoterapia',
          'Dos años o más de ánimo bajo continuo, sin completar el cuadro mayor: distimia. ISRS a largo plazo más psicoterapia.')],
      )],
    ),
  },
};
