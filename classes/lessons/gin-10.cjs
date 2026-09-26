// Clase 20.10 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_ginecologia.cjs (gin-10).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gin-10',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Quiste que observas, absceso que marsupializas, y una placa blanca que biopsias si dudas',
      say: 'Bienvenida. Hoy vemos dos temas de la vulva que se preguntan mucho: la patología de la glándula de Bartolino y el liquen escleroso. Vas a ver que en los dos casos hay una regla simple que decide todo: en el Bartolino, si duele o no duele; en el liquen, si hay o no hay una lesión sospechosa. Vamos a ese detalle.',
    },

    {
      type: 'points',
      kicker: 'Glándula de Bartolino',
      title: 'Quiste: una masa que no duele',
      cards: [
        { title: 'Mecanismo y clínica', tag: 'Estéril, sin inflamación', kind: 'criteria', items: [
          { t: 'A las 4 u 8', d: 'Tercio posterior del labio mayor',
            say: 'Empecemos por el quiste. La glándula de Bartolino está a los dos lados del introito, en las posiciones de las cuatro y las ocho del reloj. Si su conducto se tapa, se acumula moco estéril, y eso es el quiste.' },
          { t: 'Masa redondeada, indolora', d: 'Sin eritema ni calor',
            say: 'Al examinarla, es una masa redonda, móvil, y completamente indolora, sin ningún signo de infección.' },
        ] },
        { title: 'Manejo', tag: 'La mayoría se observa', kind: 'normal', items: [
          { t: 'Asintomático: observación', d: 'No necesita ningún procedimiento',
            say: 'Si no le molesta, simplemente observas. No hace falta drenar ni operar un quiste que no da síntomas.' },
          { t: 'Si molesta: marsupialización', d: 'Cuando duele al caminar o en el coito',
            say: 'Y si es grande y le molesta al caminar o durante las relaciones, ahí sí ofreces la marsupialización.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Glándula de Bartolino',
      title: 'Absceso: la infección que necesita drenaje',
      nodes: [
        { id: 'inf', col: 0, row: 1, k: 'cause', t: 'Sobreinfección bacteriana', s: 'Del quiste o la glándula' },
        { id: 'clin', col: 1, row: 1, k: 'effect', t: 'Masa fluctuante y muy dolorosa', s: 'Impide sentarse o caminar' },
        { id: 'mar', col: 2, row: 0, k: 'good', t: 'Marsupialización', s: 'Crea un nuevo orificio permanente' },
        { id: 'word', col: 2, row: 2, k: 'good', t: 'Catéter de Word', s: 'Alternativa, cuatro semanas' },
        { id: 'punc', col: 3, row: 1, k: 'trap', t: 'Punción simple', s: 'Recidiva en más del 80 por ciento' },
      ],
      edges: [
        { from: 'inf', to: 'clin' },
        { from: 'clin', to: 'mar' },
        { from: 'clin', to: 'word' },
        { from: 'mar', to: 'punc', label: 'nunca' },
      ],
      steps: [
        { show: ['inf'], note: 'Ya no es estéril, ahora hay bacterias',
          say: 'Ahora, si ese quiste, o la glándula misma, se infecta, cambia todo el cuadro: aparece el absceso de Bartolino.' },
        { show: ['clin'], note: 'Eritema, calor y fluctuación',
          say: 'Y la clínica es opuesta al quiste: dolor intenso, una masa fluctuante, roja y caliente, que le impide sentarse o caminar con normalidad.' },
        { show: ['mar'], note: 'Sutura los bordes a la mucosa vestibular',
          say: 'El tratamiento de elección es la marsupialización: se drena, y se suturan los bordes de la cápsula a la mucosa, para crear un orificio nuevo que quede abierto para siempre.' },
        { show: ['word'], note: 'Sonda con balón, se retira a las 4 semanas',
          say: 'Una alternativa moderna es el catéter de Word: una sonda con un pequeño balón que se deja puesta cuatro semanas, mientras se forma el nuevo trayecto.' },
        { show: ['punc'], note: 'Vuelve a cerrarse casi siempre',
          say: 'Y la trampa clásica: la punción simple con aguja. Suena menos invasiva, pero recidiva en más del ochenta por ciento de los casos, porque el orificio se vuelve a cerrar. Nunca es la respuesta correcta.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Liquen escleroso vulvar',
      title: 'Prurito crónico en la mujer mayor',
      cards: [
        { title: 'Clínica', tag: 'Figura en ocho', kind: 'criteria', items: [
          { t: 'Prurito crónico intratable', d: 'De meses o años de evolución',
            say: 'Cambiemos de tema. El liquen escleroso da un prurito vulvar crónico, que no cede, y que suele llevar meses o años.' },
          { t: 'Placas blancas nacaradas', d: 'En figura de ocho, vulva y ano',
            say: 'Al examinarla, ves placas blancas, atróficas, como papel de cigarrillo, que rodean la vulva y el ano en forma de ocho.' },
        ] },
        { title: 'Riesgo y tratamiento', tag: 'Biopsia si hay duda', kind: 'alert', items: [
          { t: 'Riesgo de cáncer: 3 a 5%', d: 'Cáncer epidermoide de vulva',
            say: 'Y el dato que más se pregunta: tiene un riesgo de tres a cinco por ciento de terminar en un cáncer epidermoide de vulva.' },
          { t: 'Biopsia si hay lesión sospechosa', d: 'Engrosada, ulcerada o sobreelevada',
            say: 'Por eso, cualquier zona que se vea engrosada, ulcerada o sobreelevada, se biopsia. No se asume que todo es liquen.' },
          { t: 'Clobetasol tópico', d: 'Corticoide ultrapotente, en las noches',
            say: 'Y el tratamiento es un corticoide ultrapotente: propionato de clobetasol, aplicado en las noches. Revierte la atrofia y te quita el prurito.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos Bartolino y liquen escleroso en un solo árbol.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que más se confunde en el examen',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Masa vulvar indolora, sin eritema', 'Observación si es asintomática', 'Drenar un quiste que no molesta'],
          say: 'Repasemos las trampas. Masa vulvar indolora, sin eritema: observación. El error es drenar un quiste que no está infectado.' },
        { cells: ['Masa fluctuante, eritematosa, muy dolorosa', 'Drenaje con marsupialización', 'Punción simple con aguja'],
          say: 'Masa fluctuante, roja, dolorosa: marsupialización. El error clásico es la punción simple, que casi siempre recidiva.' },
        { cells: ['Prurito crónico, placas en cerradura', 'Clobetasol tópico', 'Tratarlo como candidiasis'],
          say: 'Prurito crónico con placas en cerradura: clobetasol. El error es tratarlo como una candidiasis que nunca mejora.' },
        { cells: ['Liquen con área ulcerada', 'Biopsia con sacabocados', 'Aumentar el corticoide sin biopsiar'],
          say: 'Y liquen con un área ulcerada nueva: biopsia primero. El error es solo subir la dosis del corticoide, sin descartar cáncer.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 34 años, con tres episodios previos de absceso de Bartolino tratados con drenaje simple, consulta de nuevo por dolor y una masa de 4 cm, fluctuante y eritematosa, en el labio mayor derecho.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Nueva punción evacuadora con aguja' },
        { letter: 'B', text: 'Drenaje quirúrgico con marsupialización' },
        { letter: 'C', text: 'Solo antibióticos orales, sin drenar' },
        { letter: 'D', text: 'Observación, porque ya se drenó antes' },
        { letter: 'E', text: 'Vulvectomía simple' },
      ],
      correct: 'B',
      explanation: 'Absceso recurrente de Bartolino: el drenaje simple o la punción ya fallaron antes, por lo que la conducta es el drenaje con marsupialización, que crea un orificio permanente y baja el riesgo de recidiva.',
      say: {
        stem: 'Vamos al caso. Mujer de treinta y cuatro años, con tres episodios previos de absceso de Bartolino tratados con drenaje simple, que vuelve a consultar por dolor y una masa de cuatro centímetros, fluctuante y eritematosa, en el labio mayor derecho.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Tienes cinco opciones: nueva punción con aguja, drenaje con marsupialización, solo antibióticos, observación, o vulvectomía simple. Piénsalo.',
        answer: 'Es la B. Fíjate en el dato clave: ya van tres episodios drenados de forma simple, y sigue recidivando. Eso es justamente lo que la marsupialización previene, al dejar un orificio permanente. La vulvectomía es una cirugía para cáncer, no para esto.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 168',
      stem: 'Mujer de 30 años, con actividad sexual, consulta por dolor vulvar y sensación febril. Al examen físico se aprecia un aumento de volumen eritematoso, de 6 centímetros de diámetro, doloroso, en relación a la zona posterior del labio mayor derecho.',
      question: '¿Cuál es la conducta terapéutica más adecuada?',
      options: [
        { letter: 'A', text: 'Cistectomía de Bartolino' },
        { letter: 'B', text: 'Drenaje por punción' },
        { letter: 'C', text: 'Drenaje quirúrgico simple' },
        { letter: 'D', text: 'Iniciar antibióticos orales y esperar el drenaje espontáneo' },
        { letter: 'E', text: 'Bartholinocistostomía' },
      ],
      correct: 'E',
      explanation: 'Absceso de Bartolino de 6 cm: la conducta recomendada es la marsupialización (bartholinocistostomía), que drena la colección y crea un orificio permanente, con menor tasa de recidiva que la punción o el drenaje simple.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil dieciocho. Mujer de treinta años, con dolor vulvar y sensación febril. Al examen, un aumento de volumen eritematoso, de seis centímetros, doloroso, en la zona posterior del labio mayor derecho.',
        question: '¿Cuál es la conducta terapéutica más adecuada?',
        options: 'Las opciones: cistectomía de Bartolino, drenaje por punción, drenaje quirúrgico simple, antibióticos y esperar, o bartholinocistostomía. Piénsalo.',
        answer: 'Es la E, que es otro nombre para la marsupialización. Con seis centímetros de diámetro, es un absceso que se beneficia de crear un orificio permanente desde el principio. La punción y el drenaje simple se asocian a mucha más recidiva.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2022 · Pregunta 111',
      stem: 'Mujer de 35 años, con antecedente de tres abscesos de Bartolino que han requerido drenaje quirúrgico, consulta por dolor vulvar de dos días. Al examen se observa un aumento de volumen de 3 centímetros en el labio menor derecho, a tensión, doloroso, sin signos inflamatorios.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Bartholinocistoneostomía' },
        { letter: 'B', text: 'Evacuación por punción' },
        { letter: 'C', text: 'Vaciamiento por incisión' },
        { letter: 'D', text: 'Antibióticos orales' },
        { letter: 'E', text: 'Baños de asiento y analgésicos' },
      ],
      correct: 'A',
      explanation: 'Recidiva de absceso de Bartolino tras varios drenajes previos: la conducta es la marsupialización (bartholinocistoneostomía), que crea un trayecto de drenaje definitivo y evita una cuarta recidiva.',
      say: {
        stem: 'Y una pregunta real más, del EUNACOM de diciembre de dos mil veintidós. Mujer de treinta y cinco años, con tres abscesos de Bartolino previos ya drenados, que consulta por dolor vulvar de dos días. Al examen, un aumento de volumen de tres centímetros, a tensión, doloroso, sin signos inflamatorios evidentes.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: bartholinocistoneostomía, evacuación por punción, vaciamiento por incisión, antibióticos orales, o baños de asiento con analgésicos. Piénsalo.',
        answer: 'Es la A. Con tres recidivas ya drenadas antes, seguir puncionando o incidiendo solo te da una cuarta recidiva. La marsupialización, que aquí se llama bartholinocistoneostomía, es la que rompe ese ciclo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo · banco EUNACOM',
      stem: 'Mujer de 64 años, con prurito vulvar intenso y constante de más de 8 meses, que le interrumpe el sueño. Al examen se aprecia atrofia de los labios menores, con enterramiento parcial del clítoris, y placas blanquecinas nacaradas en figura de ocho en la vulva y la región perianal, sin úlceras activas.',
      question: '¿Cuál es el diagnóstico y el fármaco tópico de primera línea?',
      options: [
        { letter: 'A', text: 'Candidiasis vulvovaginal crónica; clotrimazol crema' },
        { letter: 'B', text: 'Liquen escleroso vulvar; propionato de clobetasol en ungüento' },
        { letter: 'C', text: 'Condilomas acuminados gigantes; imiquimod crema' },
        { letter: 'D', text: 'Herpes genital recurrente; aciclovir tópico' },
        { letter: 'E', text: 'Psoriasis invertida; ácido salicílico' },
      ],
      correct: 'B',
      explanation: 'Prurito crónico intratable en mujer postmenopáusica, con placas atróficas blanquecinas en figura de ocho y enterramiento del clítoris: liquen escleroso vulvar. El tratamiento de primera línea es el clobetasol tópico ultrapotente.',
      say: {
        stem: 'Una más del banco. Mujer de sesenta y cuatro años, con prurito vulvar intenso y constante de más de ocho meses, que le interrumpe el sueño. Al examen, atrofia de los labios menores, con el clítoris parcialmente enterrado, y placas blancas nacaradas en figura de ocho en la vulva y la región perianal, sin úlceras activas.',
        question: '¿Cuál es el diagnóstico y el fármaco tópico de primera línea?',
        options: 'Las opciones: candidiasis crónica con clotrimazol, liquen escleroso con clobetasol, condilomas con imiquimod, herpes con aciclovir, o psoriasis con ácido salicílico. Piénsalo.',
        answer: 'Es la B. La descripción es la del liquen escleroso: prurito crónico, placas nacaradas en figura de ocho, y esa atrofia que entierra el clítoris. Ninguna de las otras cuatro da esa atrofia tan característica. El tratamiento de primera línea es el clobetasol.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Bartolino', tag: 'Duele o no duele', kind: 'key', items: [
          { t: 'Sin dolor: observar', d: 'No se drena un quiste sano',
            say: 'Cerremos con las reglas de oro. Si la masa de Bartolino no duele, observas.' },
          { t: 'Con dolor y fluctuación: marsupializar', d: 'Nunca solo puncionar',
            say: 'Y si duele y fluctúa, marsupializas. La punción simple recidiva casi siempre, y nunca es la respuesta correcta.' },
        ] },
        { title: 'Liquen escleroso', tag: 'Vigila el cáncer', kind: 'alert', items: [
          { t: 'Clobetasol para el prurito', d: 'Corticoide ultrapotente, tópico',
            say: 'En el liquen escleroso, el clobetasol tópico controla el prurito.' },
          { t: 'Biopsia si hay lesión sospechosa', d: 'Riesgo de tres a cinco por ciento de cáncer',
            say: 'Y cualquier lesión sospechosa se biopsia, porque el riesgo de cáncer epidermoide no es cero. Si te llevas una sola idea de hoy: en la vulva, el dolor decide la conducta, y la duda siempre se resuelve con biopsia. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Patología vulvar: qué decide la conducta',
    root: N('start', 'Lesión vulvar', 'Masa en el labio mayor, o placa blanca',
      'Partamos de lo que encuentras en la vulva. Lo primero es distinguir si es una masa de Bartolino o una placa blanquecina.',
      ['', N('q', '¿Masa de Bartolino, o placa blanca?', 'Dos caminos distintos',
        'La pregunta que ordena todo.',
        ['Masa de Bartolino', N('q', '¿Duele y fluctúa?', 'Eso decide entre observar y drenar',
          '¿La masa está dolorosa, roja y fluctuante, o es indolora?',
          ['No, indolora', N('ok', 'Quiste de Bartolino', 'Observación si no molesta',
            'Si no duele, es un quiste: observas, y solo marsupializas si molesta al caminar o al tener relaciones.')],
          ['Sí, dolorosa y fluctuante', N('alert', 'Absceso de Bartolino', 'Drenaje con marsupialización',
            'Si duele y fluctúa, es un absceso: drenaje con marsupialización, o catéter de Word. Nunca solo punción.')])],
        ['Placa blanca con prurito crónico', N('q', '¿Hay lesión sospechosa?', 'Liquen escleroso vulvar',
          'Placas nacaradas en figura de ocho, con prurito crónico: liquen escleroso. ¿Hay alguna zona engrosada, ulcerada o sobreelevada?',
          ['No', N('do', 'Clobetasol tópico', 'Corticoide ultrapotente en la noche',
            'Sin lesión sospechosa, tratas con clobetasol tópico y controlas la respuesta.')],
          ['Sí', N('refer', 'Biopsia con sacabocados', 'Descarta cáncer epidermoide',
            'Con una lesión sospechosa, biopsias antes de seguir tratando, para no dejar pasar un cáncer epidermoide de vulva.')])])]),
  },
};
