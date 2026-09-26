// Clase 11.8 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_cirugia.cjs / dataset_cirugia_bloque_2.cjs (cir-08, classId cirugia-08).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-08',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuándo solo drenas y cuándo tienes que pedir una resonancia antes de tocar nada',
      say: 'Hoy vemos tres cosas que se ven mucho en la práctica: la enfermedad pilonidal, la hidrosadenitis, y los tumores de partes blandas. Y aquí la idea central es una sola: aprender a distinguir lo que se resuelve con una simple incisión de lo que nunca debes tocar sin antes pedir una imagen. Vamos por partes.',
    },

    {
      type: 'flow',
      kicker: 'Enfermedad pilonidal',
      title: 'Pelos que se meten donde no deben',
      nodes: [
        { id: 'pel', col: 0, row: 1, k: 'cause', t: 'Pelo se invagina', s: 'En el surco interglúteo' },
        { id: 'fri', col: 1, row: 1, k: 'mech', t: 'Fricción al sentarse', s: 'Favorece la entrada del pelo' },
        { id: 'que', col: 2, row: 0, k: 'risk', t: 'Absceso pilonidal', s: 'Fase aguda, dolorosa' },
        { id: 'dre', col: 3, row: 0, k: 'good', t: 'Drenaje simple lateral', s: 'Con curetaje de pelos' },
        { id: 'fis', col: 2, row: 2, k: 'effect', t: 'Seno crónico', s: 'Orificios con pelos visibles' },
        { id: 'res', col: 3, row: 2, k: 'refer', t: 'Resección electiva', s: 'Después, en frío' },
      ],
      edges: [
        { from: 'pel', to: 'fri' }, { from: 'fri', to: 'que' }, { from: 'que', to: 'dre' },
        { from: 'fri', to: 'fis', label: 'si no se infecta' }, { from: 'fis', to: 'res' },
      ],
      steps: [
        { show: ['pel'], note: 'Típico en joven hirsuto con sobrepeso',
          say: 'Todo empieza cuando un pelo se invagina en un folículo dilatado del surco interglúteo, cerca del cóccix. Es típico del adulto joven, hirsuto, con algo de sobrepeso.' },
        { show: ['fri'], note: 'Sentarse horas favorece la invaginación',
          say: 'La fricción de estar sentado mucho tiempo, el sudor y el vello abundante favorecen que ese pelo se siga metiendo.' },
        { show: ['que', 'dre'], note: 'Incisión fuera de la línea media',
          say: 'Cuando esto se infecta, tienes un absceso pilonidal: masa dolorosa, fluctuante y caliente. Y aquí va la conducta de urgencia: drenaje simple, con una incisión lateralizada, no en la línea media, más curetaje para sacar los mechones de pelo. Nada de resección amplia mientras está infectado.' },
        { show: ['fis'], note: 'Orificios puntiformes con pelos asomando',
          say: 'Si no se infecta, o después de drenado, puede quedar un seno crónico: uno o varios orificios puntiformes con secreción intermitente y pelos visibles.' },
        { show: ['res'], note: 'Nunca en fase aguda',
          say: 'Y el tratamiento definitivo de ese seno crónico es la resección quirúrgica completa, pero programada, en frío, nunca durante la infección activa, porque la herida se abre y se infecta de nuevo.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Hidrosadenitis supurativa',
      title: 'La enfermedad de las glándulas apocrinas',
      cards: [
        { title: 'Dónde y por qué', tag: 'Enfermedad de Verneuil', kind: 'criteria', items: [
          { t: 'Axilas, ingles, periné', d: 'Donde hay glándulas apocrinas',
            say: 'La hidrosadenitis compromete las glándulas sudoríparas apocrinas, así que aparece en axilas, ingles, periné y bajo las mamas, con nódulos dolorosos que se hacen abscesos y fístulas.' },
          { t: 'Tabaco: el gran gatillante', d: 'Dejarlo es parte del tratamiento',
            say: 'El tabaco es el principal desencadenante, y dejarlo es tan parte del tratamiento como cualquier fármaco.' },
        ] },
        { title: 'Tratamiento escalonado', tag: 'Médico primero', kind: 'pharma', items: [
          { t: 'Doxiciclina o clinda-rifampicina', d: 'En los brotes',
            say: 'El manejo médico usa doxiciclina, o la combinación de clindamicina con rifampicina en los brotes, y en casos más severos se llega a terapia biológica anti factor de necrosis tumoral.' },
          { t: 'Cirugía: solo lo crónico', d: 'Destechar o extirpar el tejido',
            say: 'La cirugía queda para los trayectos ya crónicos y organizados: destechar el trayecto o extirpar el tejido glandular comprometido.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tumores de partes blandas',
      title: 'Lipoma, quiste o algo que no debes tocar',
      nodes: [
        { id: 'mas', col: 0, row: 1, k: 'start', t: 'Masa subcutánea', s: 'Blanda, móvil e indolora' },
        { id: 'lip', col: 1, row: 0, k: 'good', t: 'Lipoma', s: 'Se resbala bajo los dedos' },
        { id: 'qui', col: 1, row: 2, k: 'good', t: 'Quiste epidérmico', s: 'Poro central visible' },
        { id: 'ban', col: 2, row: 1, k: 'q', t: 'Banderas rojas', s: '¿Más de 5 cm y creciendo rápido?' },
        { id: 'rmn', col: 3, row: 1, k: 'alert', t: 'Resonancia magnética', s: 'Antes de tocar nada' },
        { id: 'tru', col: 4, row: 1, k: 'refer', t: 'Biopsia tru-cut', s: 'En centro oncológico' },
      ],
      edges: [
        { from: 'mas', to: 'lip' }, { from: 'mas', to: 'qui' },
        { from: 'mas', to: 'ban' }, { from: 'ban', to: 'rmn' }, { from: 'rmn', to: 'tru' },
      ],
      steps: [
        { show: ['mas'], note: 'La mayoría son benignas',
          say: 'La mayoría de las masas de partes blandas que ves en la práctica son benignas, y se distinguen con el examen físico.' },
        { show: ['lip'], note: 'El signo del resbalamiento',
          say: 'El lipoma es el tumor benigno más común: blando, lobulado, móvil, y se resbala bajo tus dedos al palparlo.' },
        { show: ['qui'], note: 'La cápsula debe salir entera',
          say: 'El quiste epidérmico tiene un poro central visible, pegado a la piel. Ojo con esto: si al operarlo se rompe la cápsula, casi siempre recidiva. Y si está infectado, primero drenas, y recién después, ya frío, sacas la cápsula completa.' },
        { show: ['ban'], note: 'Cuatro preguntas antes de tocar la masa',
          say: 'Pero antes de decidir cualquier cirugía, hazte estas preguntas: ¿mide más de cinco centímetros, está profunda, bajo la fascia o el músculo, creció rápido en semanas, o está fija a un plano profundo? Cualquiera de estas es una bandera roja de sarcoma.' },
        { show: ['rmn'], note: 'Prohibida la resección a ciegas',
          say: 'Con una sola bandera roja, está formalmente prohibida la resección marginal a ciegas. Lo primero es una resonancia magnética con contraste, para ver cuánto se extiende.' },
        { show: ['tru'], note: 'La biopsia se planifica con oncología',
          say: 'Y después derivas a un centro oncológico para una biopsia con aguja gruesa, planificada en el mismo eje que va a usar la cirugía definitiva. Operar a ciegas antes de esto contamina los planos musculares y empeora el pronóstico.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos todo esto en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Cuándo drenar y cuándo pedir imagen primero',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Absceso pilonidal agudo', 'Drenaje simple lateralizado', 'Resección amplia en fase aguda'],
          say: 'Repasemos las trampas. Absceso pilonidal agudo: drenaje simple, lateralizado. Resecar todo el trayecto en plena infección es el error clásico.' },
        { cells: ['Seno pilonidal crónico', 'Resección electiva, en frío', 'Operar mientras está infectado'],
          say: 'Seno pilonidal crónico: resección electiva, cuando ya no hay infección activa.' },
        { cells: ['Quiste epidérmico infectado', 'Drenar primero, resecar después', 'Extirpar la cápsula en plena infección'],
          say: 'Quiste epidérmico infectado: drenas primero, y la cápsula la sacas completa cuando ya bajó la inflamación.' },
        { cells: ['Masa mayor a 5 cm, profunda, creciendo', 'Resonancia y biopsia tru-cut', 'Resección marginal ambulatoria'],
          say: 'Y una masa grande, profunda y de crecimiento rápido: resonancia y biopsia planificada. Resecarla en el policlínico, a ciegas, es el error más grave de todo el tema.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 24 años, con vello abundante y sobrepeso, consulta por 2 días de dolor y aumento de volumen en la región sacrococcígea, que empeora al sentarse. Al examen, en la línea interglútea se aprecia una masa de 3 cm, eritematosa, caliente y fluctuante, con un mechón de pelos saliendo por un orificio central.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Resección amplia en bloque del trayecto pilonidal' },
        { letter: 'B', text: 'Antibióticos orales por 10 días y control' },
        { letter: 'C', text: 'Drenaje quirúrgico simple con incisión lateralizada' },
        { letter: 'D', text: 'Solicitar resonancia magnética de pelvis antes de decidir' },
        { letter: 'E', text: 'Observación, ya que suele resolver solo' },
      ],
      correct: 'C',
      explanation: 'Masa fluctuante, eritematosa y dolorosa en la región interglútea, con pelos visibles: absceso pilonidal agudo. La conducta es el drenaje quirúrgico simple, con incisión lateralizada y curetaje de pelos; la resección amplia se difiere para cuando ceda la infección.',
      say: {
        stem: 'Vamos con un caso. Hombre de veinticuatro años, con harto vello y algo de sobrepeso, con dos días de dolor y aumento de volumen en la zona sacrococcígea, que empeora al sentarse. En la línea interglútea hay una masa de tres centímetros, eritematosa, caliente y fluctuante, con un mechón de pelos saliendo por un orificio central.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Tienes cinco opciones: resección amplia en bloque, antibióticos orales por diez días, drenaje quirúrgico simple con incisión lateralizada, resonancia magnética antes de decidir, u observación. Piénsalo.',
        answer: 'Es la C. El cuadro es un absceso pilonidal agudo, y la conducta de urgencia es drenarlo con una incisión lateralizada, más curetaje de los pelos retenidos. La resección amplia, la opción A, es la trampa: hacerla en plena infección aumenta el riesgo de que la herida no cicatrice bien. Esa resección definitiva se deja para más adelante, con el paciente ya sin inflamación.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 43',
      stem: 'Paciente de 20 años presenta aumento de volumen eritematoso y doloroso en la zona interglútea, a dos centímetros de la línea media, sobre el cóccix. Al examen se observa aumento de volumen de 5 centímetros, doloroso, con dos orificios negros en la piel cerca de la lesión.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Linfoma' },
        { letter: 'B', text: 'Sarcoma' },
        { letter: 'C', text: 'Quiste pilonidal' },
        { letter: 'D', text: 'Absceso anorrectal' },
        { letter: 'E', text: 'Lipoma' },
      ],
      correct: 'C',
      explanation: 'La ubicación sacrococcígea, sobre la línea media, con orificios puntiformes con pelos, es el cuadro característico del quiste o seno pilonidal, aquí ya en fase inflamatoria.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de agosto de dos mil veintiuno. Paciente de veinte años, con aumento de volumen eritematoso y doloroso en la zona interglútea, cerca del cóccix. Al examen mide cinco centímetros, y tiene dos orificios negros en la piel cerca de la lesión.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: linfoma, sarcoma, quiste pilonidal, absceso anorrectal, o lipoma. Piénsalo.',
        answer: 'Es la C, quiste pilonidal. La ubicación sacrococcígea, sobre la línea media, junto con esos orificios puntiformes, es la huella típica de la enfermedad pilonidal. El absceso anorrectal se ubica más cerca del ano, no tan arriba en la línea interglútea, y ni el linfoma ni el sarcoma dan esos orificios con pelos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2024 · Pregunta 77',
      stem: 'Paciente con absceso interglúteo de 2 centímetros, en buenas condiciones generales.',
      question: '¿Cuál es la conducta?',
      options: [
        { letter: 'A', text: 'Antibióticos exclusivos' },
        { letter: 'B', text: 'Drenar' },
        { letter: 'C', text: 'Marsupialización' },
        { letter: 'D', text: 'Solicitar cultivo antes de cualquier procedimiento' },
        { letter: 'E', text: 'Observación' },
      ],
      correct: 'B',
      explanation: 'Todo absceso pilonidal se drena. Los antibióticos se pueden sumar, pero no reemplazan el drenaje; si el cuadro recurre, ahí sí se plantea la extirpación completa del quiste.',
      say: {
        stem: 'Y otra pregunta real, del EUNACOM de diciembre de dos mil veinticuatro. Paciente con un absceso interglúteo de dos centímetros, en buenas condiciones generales.',
        question: '¿Cuál es la conducta?',
        options: 'Las opciones son: antibióticos exclusivos, drenar, marsupialización, solicitar cultivo antes de cualquier procedimiento, u observación. Piénsalo.',
        answer: 'Es la B, drenar. Por pequeño que sea, un absceso pilonidal se drena siempre. Puedes sumar antibióticos, pero no los usas solos en lugar del drenaje. Y si este cuadro se repite, ahí recién planteas la extirpación completa del quiste, ya en frío.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 101',
      stem: 'Paciente de 18 años consulta porque desde hace un año presenta aumento de volumen progresivo en la cara anterior del muslo derecho, que recientemente se ha vuelto doloroso. Al examen se palpa una masa de 10 centímetros de diámetro, de consistencia dura, no pétrea, sin afectación de la piel.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Realizar resección y biopsia' },
        { letter: 'B', text: 'Observar evolución' },
        { letter: 'C', text: 'Solicitar ecografía de partes blandas' },
        { letter: 'D', text: 'Solicitar radiografía de fémur' },
        { letter: 'E', text: 'Realizar punción y drenaje' },
      ],
      correct: 'C',
      explanation: 'Masa de más de 5 centímetros, de un año de evolución y crecimiento reciente: bandera roja de sarcoma de partes blandas. Antes de resecar, se estudia con imagen; si no hay resonancia disponible de entrada, la ecografía distingue lo benigno de lo sospechoso y guía el paso siguiente.',
      say: {
        stem: 'Y una última pregunta real, del EUNACOM de julio de dos mil dieciséis. Paciente de dieciocho años, con un año de aumento de volumen progresivo en la cara anterior del muslo derecho, que hace poco se volvió doloroso. Al examen mide diez centímetros, es dura, no pétrea, y no compromete la piel.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: resección y biopsia, observar evolución, solicitar ecografía de partes blandas, solicitar radiografía de fémur, o punción y drenaje. Piénsalo.',
        answer: 'Es la C. Con más de cinco centímetros y creciendo, esto ya es una bandera roja de sarcoma de partes blandas, y la regla es no tocarlo sin estudio. Lo ideal es la resonancia, pero si no está disponible, la ecografía al menos te separa lo benigno de lo sospechoso, antes de definir la biopsia y la cirugía. Operar directo, la opción A, es el error que el examen castiga.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Enfermedad pilonidal', tag: 'Fase decide todo', kind: 'key', items: [
          { t: 'Agudo: drenaje lateralizado', d: 'Crónico: resección electiva',
            say: 'Cerremos con las reglas de oro. En fase aguda, drenaje simple y lateralizado; el trayecto crónico se reseca después, en frío.' },
        ] },
        { title: 'Tumores de partes blandas', tag: 'Cuatro banderas rojas', kind: 'alert', items: [
          { t: 'Grande, profunda, rápida, fija', d: 'Resonancia antes de tocar nada',
            say: 'Y si una masa mide más de cinco centímetros, es profunda, crece rápido o está fija a un plano, primero resonancia, nunca resección a ciegas.' },
        ] },
        { title: 'Lo simple', tag: 'Examen físico', kind: 'normal', items: [
          { t: 'Lipoma se resbala', d: 'Quiste tiene poro central',
            say: 'Y para lo simple, te basta el examen físico: el lipoma se resbala bajo los dedos, y el quiste epidérmico tiene su poro central. Si te llevas una sola idea de hoy: pregúntate siempre si esa masa tiene alguna bandera roja antes de decidir si la tocas o la estudias primero. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Partes blandas: cuándo drenar y cuándo estudiar antes',
    root: N('start', 'Masa o absceso en piel y partes blandas', 'Ubica la zona primero',
      'Un paciente llega con un bulto o un absceso. Antes de decidir la conducta, ubica dónde está y cómo se ve.',
      ['', N('q', '¿Dónde está la lesión?', 'Interglútea, axilar o subcutánea',
        'La ubicación cambia por completo lo que sigue.',
        ['Interglútea, dolorosa y fluctuante', N('alert', 'Absceso pilonidal agudo', 'Drenaje simple lateralizado',
          'Incisión lateralizada, fuera de la línea media, con curetaje de pelos. La resección amplia se difiere para cuando ceda la infección.')],
        ['Axilas o ingles, nódulos y fístulas', N('do', 'Hidrosadenitis supurativa', 'Dejar el tabaco, más tratamiento médico',
          'Enfermedad crónica de las glándulas apocrinas. El manejo inicial es médico, y la cirugía se reserva para trayectos ya organizados.')],
        ['Subcutánea, blanda, móvil, indolora', N('q', '¿Se resbala o tiene poro central?', 'Lipoma o quiste epidérmico',
          'Con el examen físico ya distingues las dos lesiones benignas más frecuentes.',
          ['Se resbala bajo los dedos', N('ok', 'Lipoma', 'Extirpación electiva si molesta',
            'Tumor benigno más común de partes blandas, sin urgencia de resecarlo.')],
          ['Poro central visible', N('ok', 'Quiste epidérmico', 'Extirpar la cápsula completa',
            'Si está infectado, drenar primero y resecar la cápsula íntegra ya sin inflamación, para evitar la recidiva.')])],
        ['Profunda, más de 5 cm, crece rápido', N('alert', 'Sospecha de sarcoma', 'Resonancia y biopsia tru-cut',
          'Con cualquier bandera roja, está prohibida la resección a ciegas: primero resonancia magnética, y biopsia planificada en un centro oncológico.')])]),
  },
};
