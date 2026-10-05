// Clase 14.9 (Otorrinolaringología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_otorrino.cjs (orl-09). Preguntas: banco real EUNACOM (class_questions.cjs --search);
// la clasificación ARIA no tiene pregunta real, por eso se usa un caso del libro rotulado "Banco EUNACOM · Caso representativo".

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'orl-09',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cómo clasificar la rinitis alérgica según ARIA, por qué los corticoides intranasales son la primera línea y cómo reconocer la rinitis medicamentosa',
      say: 'Bienvenido. La rinitis alérgica es la enfermedad inmunológica crónica más frecuente, y el examen pregunta casi siempre lo mismo: cuál es el fármaco de primera línea, cómo se clasifica por severidad, y qué pasa cuando el paciente se pasa con el descongestionante. Si dominas esas tres ideas, tienes el tema.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'De un ácaro a la nariz tapada',
      nodes: [
        { id: 'al', col: 0, row: 1, k: 'cause', t: 'Aeroalérgenos', s: 'Ácaros, pólenes, caspa, hongos' },
        { id: 'ig', col: 1, row: 1, k: 'mech', t: 'IgE sobre mastocitos', s: 'Hipersensibilidad tipo I' },
        { id: 'me', col: 2, row: 1, k: 'effect', t: 'Histamina y leucotrienos', s: 'Inflamación de la mucosa' },
        { id: 'pr', col: 3, row: 0, k: 'alert', t: 'Prurito y estornudos en salva', s: 'Rinorrea acuosa' },
        { id: 'ob', col: 3, row: 2, k: 'risk', t: 'Obstrucción nasal', s: 'Mucosa pálida y edematosa' },
      ],
      edges: [
        { from: 'al', to: 'ig' },
        { from: 'ig', to: 'me' },
        { from: 'me', to: 'pr' },
        { from: 'me', to: 'ob' },
      ],
      steps: [
        { show: ['al', 'ig'], note: 'Un alérgeno que se une a la IgE',
          say: 'La rinitis alérgica es una reacción de hipersensibilidad inmediata, tipo uno. El paciente inhala un aeroalérgeno, como el ácaro del polvo, un polen, la caspa de animales o un hongo, y ese alérgeno se une a la inmunoglobulina E que ya está pegada a los mastocitos.' },
        { show: ['me'], note: 'El mastocito libera sus mediadores',
          say: 'El mastocito se activa y libera histamina, leucotrienos y prostaglandinas. Eso inflama la mucosa nasal.' },
        { show: ['pr', 'ob'], note: 'Cuatro síntomas cardinales',
          say: 'El resultado es una tétrada: rinorrea acuosa, anterior y posterior; obstrucción nasal bilateral; prurito nasal, ocular y faríngeo, con el clásico saludo alérgico; y estornudos en salva. Guarda esto, porque la obstrucción es el síntoma que va a decidir el tratamiento.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Rinitis alérgica',
      title: 'Qué se ve al examen',
      cards: [
        { title: 'Rinoscopía', tag: 'Mucosa alterada', kind: 'key', items: [
          { t: 'Mucosa pálida, edematosa o azulada', d: 'Secreción hialina',
            say: 'En la rinoscopía anterior la mucosa es pálida, edematosa, a veces azulada o violácea, con cornetes inferiores hipertróficos y secreción líquida y transparente.' },
          { t: 'Ojeras alérgicas', d: 'Pliegues de Dennie-Morgan',
            say: 'Es frecuente ver ojeras alérgicas y pliegues bajo los párpados, los pliegues de Dennie-Morgan.' },
        ] },
        { title: 'Una sola vía aérea', tag: 'Asociación con asma', kind: 'alert', items: [
          { t: 'Se asocia a asma bronquial', d: 'Tratar bien la nariz ayuda al pulmón',
            say: 'La rinitis alérgica se asocia estrechamente al asma bronquial, es el concepto de una sola vía aérea. Por eso, ante un asmático, siempre pregunta por la nariz.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'gallery',
      kicker: 'Así se ve',
      title: 'La cara del niño con rinitis alérgica',
      images: [
        { src: 'biblioteca/17_otorrino/orl-09/01_facies-rinitis-alergica-perenne__bates_p945.jpg', label: 'Niño con rinitis alérgica perenne: boca abierta y ojeras con coloración oscura bajo los ojos', credit: 'Bates, Guía de exploración clínica, p. 945' },
      ],
      steps: [
        { note: 'Respira por la boca y tiene ojeras',
          say: 'Mira la cara. La boca está entreabierta, porque no puede respirar por la nariz, y bajo los ojos hay ojeras oscuras por el edema y la congestión venosa. Esta facies, en un niño con rinorrea y estornudos, apunta a una rinitis alérgica, que es la causa más frecuente de obstrucción nasal y respiración bucal en pediatría.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clasificación ARIA',
      title: 'Frecuencia y severidad',
      cards: [
        { title: 'Frecuencia', tag: 'Intermitente o persistente', kind: 'criteria', items: [
          { t: 'Intermitente', d: 'Menos de 4 días/semana o de 4 semanas',
            say: 'La clasificación ARIA reemplazó la vieja división entre estacional y perenne. Primero la frecuencia. Es intermitente si los síntomas duran menos de cuatro días a la semana, o menos de cuatro semanas seguidas.' },
          { t: 'Persistente', d: '4 o más días/semana y 4 o más semanas',
            say: 'Es persistente si duran cuatro o más días a la semana y, además, cuatro o más semanas consecutivas. Fíjate en la diferencia: en la intermitente basta con cumplir una condición, en la persistente tienes que cumplir las dos.' },
        ] },
        { title: 'Severidad', tag: 'Leve o moderada a severa', kind: 'criteria', items: [
          { t: 'Leve', d: 'Sin alteración funcional',
            say: 'Después la severidad. Es leve si no hay ninguna alteración funcional.' },
          { t: 'Moderada a severa', d: 'Al menos uno: sueño, actividades, rendimiento o molestia',
            say: 'Es moderada a severa si hay al menos uno de estos cuatro: alteración del sueño, interferencia con actividades cotidianas o deportivas, deterioro del rendimiento laboral o escolar, o síntomas intensamente molestos. Un solo criterio basta.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Corticoide intranasal primero',
      cards: [
        { title: 'Primera línea', tag: 'Moderada a severa o persistente', kind: 'pharma', items: [
          { t: 'Corticoide intranasal', d: 'Fluticasona o mometasona, 1 vez al día',
            say: 'Para las formas moderadas a severas y persistentes, el fármaco más potente es el corticoide intranasal: fluticasona o mometasona, una a dos pulverizaciones en cada fosa, una vez al día.' },
          { t: 'Controla la obstrucción', d: 'Biodisponibilidad sistémica menor de 1%',
            say: 'Es el único que controla bien la obstrucción nasal, además del prurito y los estornudos. Y como su absorción sistémica es menor de uno por ciento, no suprime el eje hipotálamo-hipofisario.' },
        ] },
        { title: 'Antihistamínicos orales', tag: 'Segunda generación', kind: 'key', items: [
          { t: 'Cetirizina, desloratadina, loratadina', d: 'Sin sedación',
            say: 'Los antihistamínicos orales de segunda generación, como cetirizina, desloratadina o loratadina, no sedan.' },
          { t: 'Para formas leves e intermitentes', d: 'Controlan prurito y estornudos, poco la congestión',
            say: 'Son de elección en las formas leves e intermitentes, o como apoyo en las crisis de prurito y rinorrea. Controlan los estornudos y el picor, pero poco la congestión. La regla: si la obstrucción manda, corticoide; si no hay obstrucción, antihistamínico.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Rinitis medicamentosa',
      title: 'Cuando el descongestionante empeora la nariz',
      nodes: [
        { id: 'ox', col: 0, row: 1, k: 'cause', t: 'Oximetazolina más de 5 días', s: 'Descongestionante tópico' },
        { id: 'ta', col: 1, row: 1, k: 'mech', t: 'Taquifilaxia', s: 'Baja de receptores alfa 1' },
        { id: 're', col: 2, row: 1, k: 'effect', t: 'Vasodilatación de rebote', s: 'Congestión peor que antes' },
        { id: 'tx', col: 3, row: 0, k: 'good', t: 'Suspender el vasoconstrictor', s: 'De inmediato' },
        { id: 'cn', col: 3, row: 2, k: 'good', t: 'Corticoide intranasal', s: 'Para desinflamar la mucosa' },
      ],
      edges: [
        { from: 'ox', to: 'ta' },
        { from: 'ta', to: 're' },
        { from: 're', to: 'tx' },
        { from: 're', to: 'cn' },
      ],
      steps: [
        { show: ['ox', 'ta'], note: 'El efecto se agota con el uso prolongado',
          say: 'La rinitis medicamentosa es una pregunta clásica. El paciente usa un descongestionante tópico, como oximetazolina o tramazolina, por más de cinco a siete días seguidos. Al principio destapa la nariz, pero con el uso repetido aparece taquifilaxia y baja el número de receptores alfa uno.' },
        { show: ['re'], note: 'Rebote: peor congestión',
          say: 'Cuando se pasa el efecto, los vasos se dilatan de forma masiva. El paciente se tapa más que antes, se aplica más spray, y entra en un círculo vicioso. A la rinoscopía hay una mucosa eritematosa, violácea, con cornetes engrosados.' },
        { show: ['tx', 'cn'], note: 'Suspender y desinflamar',
          say: 'El tratamiento tiene dos pasos: suspender el vasoconstrictor de inmediato y empezar un corticoide intranasal en dosis plenas para desinflamar la mucosa. Aumentar la frecuencia del spray es siempre la opción incorrecta.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las cuatro rinitis',
      head: ['Rinitis', 'Gatillante', 'Clave clínica', 'Tratamiento'],
      rows: [
        { cells: ['Alérgica', 'IgE contra aeroalérgenos', 'Prurito, estornudos, mucosa pálida', 'Corticoide intranasal y antihistamínico'],
          say: 'Esta tabla ordena las cuatro. La alérgica: mediada por IgE, con prurito, estornudos en salva y mucosa pálida. Se trata con corticoide intranasal, con o sin antihistamínico.' },
        { cells: ['Medicamentosa', 'Oximetazolina más de 5 a 7 días', 'Congestión de rebote, mucosa violácea', 'Suspender spray y corticoide intranasal'],
          say: 'La medicamentosa: abuso de oximetazolina, congestión de rebote y mucosa violácea. Se suspende el spray y se parte con corticoide intranasal.' },
        { cells: ['Vasomotora', 'Cambios de temperatura u olores', 'Rinorrea acuosa sin prurito', 'Ipratropio intranasal'],
          say: 'La vasomotora: hiperreactividad parasimpática por cambios de temperatura u olores, rinorrea acuosa profusa, a veces al comer, y sin prurito. Se trata con bromuro de ipratropio intranasal.' },
        { cells: ['Infecciosa aguda', 'Rinovirus o coronavirus', 'Rinorrea que se hace purulenta, fiebre', 'Lavados con suero; autolimitada'],
          say: 'Y la infecciosa aguda: un resfrío viral, con fiebre y secreción que se vuelve mucopurulenta. Lavados con suero fisiológico y paracetamol, y se resuelve sola.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol para el paciente con la nariz tapada y la nariz que gotea.',
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Un joven de 19 años consulta por obstrucción nasal bilateral constante, estornudos matinales y goteo nasal transparente desde hace 2 meses. No duerme bien por la nariz tapada y en clases está desconcentrado. Hace 3 semanas se aplica spray de oximetazolina 4 veces al día: al comienzo se destapaba de inmediato, pero ahora el efecto dura una hora y se tapa peor. A la rinoscopía, cornetes inferiores engrosados y eritematosos que contactan el tabique.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Aumentar la oximetazolina a cada 4 horas' },
        { letter: 'B', text: 'Suspender la oximetazolina e iniciar corticoide intranasal, con lavados nasales' },
        { letter: 'C', text: 'Amoxicilina oral por 7 días' },
        { letter: 'D', text: 'Solo clorfenamina oral en la noche' },
        { letter: 'E', text: 'Cirugía de cornetes inmediata' },
      ],
      correct: 'B',
      explanation: 'Es una rinitis alérgica persistente moderada a severa, con una rinitis medicamentosa por oximetazolina sobre 5 días. Se suspende el descongestionante de inmediato, se inicia corticoide intranasal en dosis plenas por 1 a 2 meses y se asocian lavados nasales.',
      say: {
        stem: 'Veamos un caso. Joven de diecinueve años con la nariz tapada y estornudos desde hace dos meses. No duerme bien y en clases está desconcentrado. Lleva tres semanas con oximetazolina cuatro veces al día: al principio se destapaba, ahora el efecto dura una hora y queda peor. Los cornetes están engrosados y eritematosos.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: aumentar la oximetazolina, suspenderla e iniciar corticoide intranasal, amoxicilina, clorfenamina sola, o cirugía de cornetes. Piénsalo.',
        answer: 'Es la B. Tiene dos problemas: una rinitis alérgica persistente moderada a severa, por los síntomas y la alteración del sueño, y sobre ella una rinitis medicamentosa. Se suspende la oximetazolina, y se inicia corticoide intranasal por uno a dos meses con lavados nasales. Dar más oximetazolina es justo lo que perpetúa el rebote.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco EUNACOM · Caso representativo',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un estudiante de 24 años consulta por rinorrea acuosa profusa, prurito ocular y nasal intenso y salvas de estornudos que se presentan durante 5 a 6 días a la semana desde hace 2 meses, coincidiendo con la primavera. Se despierta en la noche con la nariz totalmente obstruida y esto afecta su concentración para estudiar. A la rinoscopía anterior se aprecian cornetes inferiores hipertróficos y pálidos.',
      question: 'De acuerdo con las guías ARIA, ¿cuál es la clasificación de su enfermedad y el tratamiento de primera línea más adecuado?',
      options: [
        { letter: 'A', text: 'Rinitis alérgica intermitente leve; clorfenamina oral 4 mg cada 8 horas' },
        { letter: 'B', text: 'Rinitis alérgica persistente moderada-severa; corticoide intranasal en spray diario (ej. fluticasona o mometasona)' },
        { letter: 'C', text: 'Rinitis vasomotora pura; bromuro de ipratropio nasal según necesidad' },
        { letter: 'D', text: 'Rinosinusitis crónica poliposa; amoxicilina oral con ácido clavulánico por 21 días' },
        { letter: 'E', text: 'Rinitis alérgica persistente leve; oximetazolina nasal tópica cada 12 horas por 1 mes' },
      ],
      correct: 'B',
      explanation: 'Los síntomas aparecen 4 o más días a la semana por 4 o más semanas: persistente. Hay alteración del sueño y de la concentración: moderada a severa. La primera línea son los corticoides intranasales, superiores a los antihistamínicos orales para la obstrucción nasal.',
      say: {
        stem: 'Un caso representativo del banco. Estudiante de veinticuatro años con rinorrea acuosa, prurito intenso y salvas de estornudos, cinco a seis días a la semana desde hace dos meses, en primavera. Se despierta de noche con la nariz obstruida y le cuesta concentrarse. Tiene cornetes hipertróficos y pálidos.',
        question: 'Según ARIA, ¿cómo se clasifica y cuál es el tratamiento de primera línea?',
        options: 'Las opciones: intermitente leve con clorfenamina, persistente moderada a severa con corticoide intranasal, vasomotora con ipratropio, rinosinusitis poliposa con antibiótico, o persistente leve con oximetazolina. Piénsalo.',
        answer: 'Es la B. Más de cuatro días a la semana por más de cuatro semanas es persistente, y la alteración del sueño y del estudio la hace moderada a severa. Para ese grado, la primera línea es el corticoide intranasal. La oximetazolina por un mes es la trampa de la rinitis medicamentosa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 146',
      stem: 'Un paciente de 8 años de edad, con historia de un año de evolución de rinorrea mucopurulenta bilateral intermitente asociado a prurito y en algunas ocasiones a epistaxis, actualmente sin síntomas. El tratamiento de elección en este caso es:',
      question: 'El tratamiento de elección en este caso es:',
      options: [
        { letter: 'A', text: 'Antihistamínicos orales' },
        { letter: 'B', text: 'Antibióticos orales' },
        { letter: 'C', text: 'Corticoides tópicos' },
        { letter: 'D', text: 'Derivar a cirugía de adenoides' },
        { letter: 'E', text: 'Oximetazolina tópica' },
      ],
      correct: 'A',
      explanation: 'Es una rinitis alérgica intermitente, sin obstrucción: se trata con antihistamínicos orales. Los corticoides tópicos se reservan para cuando hay obstrucción nasal.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de julio de dos mil trece. Niño de ocho años con un año de rinorrea bilateral intermitente, con prurito y a veces epistaxis, y que hoy está sin síntomas.',
        question: '¿Cuál es el tratamiento de elección?',
        options: 'Las opciones: antihistamínicos orales, antibióticos orales, corticoides tópicos, cirugía de adenoides u oximetazolina tópica. Piénsalo.',
        answer: 'Es la A, antihistamínicos orales. Es una rinitis alérgica intermitente, con prurito, y sin obstrucción. Cuando lo que manda es la obstrucción, el corticoide intranasal gana; aquí no la hay. La oximetazolina es la trampa de la rinitis medicamentosa, y el antibiótico no tiene lugar porque no hay infección.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 79',
      stem: 'Un paciente de 80 años consulta por rinorrea bilateral, de tres meses de evolución, muy molesta, asociada a congestión nasal, que es más intensa en las mañanas y aumenta con los cambios de temperatura.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Cáncer nasal' },
        { letter: 'B', text: 'Pólipos nasales' },
        { letter: 'C', text: 'Sinusitis bacteriana crónica' },
        { letter: 'D', text: 'Rinitis vasomotora' },
        { letter: 'E', text: 'Rinitis alérgica' },
      ],
      correct: 'D',
      explanation: 'Rinitis vasomotora: empeora en la mañana y con los cambios de temperatura, también con el estrés y los alimentos muy calientes o condimentados. El cáncer da obstrucción y rinorrea serosanguinolenta unilateral, y los pólipos son bilaterales con marcada obstrucción, en pacientes jóvenes.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de julio de dos mil diecinueve. Paciente de ochenta años con rinorrea bilateral muy molesta de tres meses, con congestión nasal que es peor en las mañanas y con los cambios de temperatura.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: cáncer nasal, pólipos, sinusitis bacteriana crónica, rinitis vasomotora o rinitis alérgica. Piénsalo.',
        answer: 'Es la D, rinitis vasomotora. El gatillante son los cambios de temperatura y la mañana, sin prurito ni estornudos, en un paciente que no tiene antecedente alérgico. Eso es una hiperreactividad parasimpática, que se trata con bromuro de ipratropio intranasal. El cáncer da secreción con sangre y de un solo lado, y los pólipos aparecen en jóvenes.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: rinitis',
      cards: [
        { title: 'Clasificar y tratar', tag: 'ARIA', kind: 'key', items: [
          { t: 'Persistente: 4 días y 4 semanas', d: 'Moderada a severa: un solo criterio funcional',
            say: 'Cerremos con las reglas de oro. Persistente es cuatro días a la semana y cuatro semanas. Moderada a severa es que haya al menos una alteración: sueño, actividades, rendimiento o molestia intensa.' },
          { t: 'Corticoide intranasal primero', d: 'Antihistamínico si es leve e intermitente',
            say: 'La primera línea para lo moderado a severo y persistente es el corticoide intranasal. El antihistamínico de segunda generación queda para lo leve e intermitente.' },
        ] },
        { title: 'Trampas', tag: 'Otras rinitis', kind: 'alert', items: [
          { t: 'Oximetazolina más de 5 días', d: 'Rinitis medicamentosa',
            say: 'Si el paciente usó oximetazolina por más de cinco a siete días y se tapa peor, es una rinitis medicamentosa: se suspende y se inicia corticoide.' },
          { t: 'Vasomotora: frío y olores, sin prurito', d: 'Ipratropio intranasal',
            say: 'Si hay rinorrea con frío u olores y sin prurito, es vasomotora y va con ipratropio. Si te llevas una sola idea de hoy: la obstrucción nasal se trata con corticoide intranasal, y el descongestionante no se usa más de una semana. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo terapéutico de la rinitis: ARIA y rinitis medicamentosa',
    root: N('start', 'Paciente con rinitis', '¿Usa descongestionante tópico por más de 5 a 7 días?',
      'Un paciente consulta por nariz tapada y goteo. Antes de clasificar, pregunta si ha usado descongestionantes tópicos por más de una semana.',
      ['Sí, con empeoramiento', N('refer', 'Rinitis medicamentosa', 'Suspender y corticoide intranasal',
        'Es una rinitis medicamentosa. Se suspende el vasoconstrictor de inmediato y se inicia corticoide intranasal en dosis plenas.')],
      ['No', N('q', '¿Prurito y estornudos en salva?', 'Orienta a un mecanismo alérgico',
        'Si no hay descongestionante, la pregunta es si hay prurito y estornudos en salva.',
        ['Sí: rinitis alérgica', N('q', '¿Persistente o moderada a severa?', 'Cuatro días y cuatro semanas, o repercusión funcional',
          'Se clasifica con ARIA, según la frecuencia y la repercusión en el sueño, las actividades o el rendimiento.',
          ['Sí', N('ok', 'Corticoide intranasal', 'Fluticasona o mometasona, una vez al día',
            'Si es persistente o moderada a severa, corticoide intranasal una vez al día.')],
          ['No: leve e intermitente', N('do', 'Antihistamínico oral de 2.ª generación', 'Cetirizina, desloratadina o loratadina',
            'Si es leve e intermitente, basta un antihistamínico de segunda generación.')],
        )],
        ['No: rinorrea acuosa con frío u olores', N('do', 'Rinitis vasomotora', 'Ipratropio intranasal',
          'Sin prurito y con gatillantes como el frío o los olores, es vasomotora, y se trata con bromuro de ipratropio intranasal.')],
      )],
    ),
  },
};
