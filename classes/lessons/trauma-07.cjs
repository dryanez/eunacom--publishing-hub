// Clase 12.7 (Traumatología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_traumatologia.cjs (trauma-07). Preguntas: banco real EUNACOM (class_questions.cjs --search).
// El libro nombra "reglas de Ottawa" solo en el campo GES; el texto principal enseña los puntos de palpación (maléolos, base del quinto
// metatarsiano, cabeza del peroné) y la imposibilidad de apoyar, que es lo que se resume aquí como criterio para pedir radiografía.
// Síndrome compartimental (trauma-03) y fracturas expuestas (trauma-02) se mencionan solo como enlace. Esguince (grados) queda en trauma-09.
// Los textos genéricos del libro sobre luxación glenohumeral / Colles / escafoides y las tablas plantilla no se usan.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'trauma-07',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Fracturas de pierna y tobillo: cuándo sospechar, cuándo pedir radiografía y qué se hace',
      say: 'Bienvenido. Hoy vemos las fracturas de extremidad inferior que más caen en el examen: fémur, pierna y, sobre todo, tobillo. Hay una regla simple que ordena casi todo: estas fracturas son quirúrgicas. Y hay una trampa clásica: confundir una fractura de tobillo con un esguince. Vamos a aprender a distinguirlas, a decidir cuándo pedir radiografía y qué hacer mientras llega la cirugía.',
    },

    {
      type: 'points',
      kicker: 'Concepto',
      title: 'Cómo sospechar una fractura',
      cards: [
        { title: 'Clínica común', tag: 'Cualquier hueso', kind: 'key', items: [
          { t: 'Dolor intenso e impotencia funcional', d: 'No puede apoyar ni caminar',
            say: 'Sea cual sea el hueso, la fractura de extremidad inferior da un dolor intenso de inicio súbito, justo después del golpe, y una impotencia funcional: el paciente no puede apoyar ni caminar.' },
          { t: 'Deformidad y crepitación', d: 'Eje desviado, ruido óseo al mover',
            say: 'Además puedes ver deformidad, con desviación del eje de la extremidad, y sentir crepitación ósea al mover o palpar.' },
          { t: 'Equimosis y aumento de volumen', d: 'Local, a veces extensa',
            say: 'Y aparecen equimosis y aumento de volumen local. Si el cuadro es este, sospechas fractura de inmediato.' },
        ] },
        { title: 'Regla del examen', tag: 'Muy preguntada', kind: 'alert', items: [
          { t: 'Fémur, pierna y tobillo: cirugía', d: 'El yeso es la excepción',
            say: 'Esta es la regla que tienes que llevarte: las fracturas de fémur, de pierna, es decir tibia y peroné, y de tobillo se tratan, por regla general, con cirugía. El manejo ortopédico es la excepción, reservado a casos muy específicos o a pacientes que no pueden operarse.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Fémur y pierna',
      title: 'Fémur y pierna: estudio y tratamiento',
      cards: [
        { title: 'Fractura de fémur', tag: 'Diáfisis', kind: 'key', items: [
          { t: 'Radiografía AP y lateral', d: 'Incluye cadera y rodilla',
            say: 'En el fémur, el diagnóstico se confirma con radiografía anteroposterior y lateral, e incluyes la articulación de arriba, la cadera, y la de abajo, la rodilla, para no perder una lesión asociada.' },
          { t: 'Tratamiento siempre quirúrgico', d: 'Clavo intramedular o placa',
            say: 'El tratamiento es quirúrgico, habitualmente con un clavo intramedular o una placa. El yeso no logra vencer la fuerza de los músculos del muslo y termina en consolidación viciosa o en pseudoartrosis, que vimos en la clase anterior.' },
        ] },
        { title: 'Fractura de pierna', tag: 'Tibia y peroné', kind: 'alert', items: [
          { t: 'Diáfisis de la tibia', d: 'Con frecuencia asociada a fractura del peroné',
            say: 'La fractura de pierna es la de la diáfisis de la tibia, que a menudo se acompaña de una fractura del peroné.' },
          { t: 'Síndrome compartimental', d: 'Urgencia quirúrgica: fasciotomía',
            say: 'Es peligrosa por dos complicaciones que siempre se preguntan. La primera es el síndrome compartimental: los compartimentos de la pierna tienen poco espacio, el edema y el sangrado suben la presión y cae la perfusión. Es una urgencia quirúrgica, con fasciotomía, como vimos en su clase.' },
          { t: 'Trombosis venosa profunda', d: 'Trauma e inmovilización prolongada',
            say: 'La segunda es la trombosis venosa profunda, porque el trauma y la inmovilización prolongada son factores de riesgo mayores.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnóstico diferencial',
      title: 'Esguince o fractura de tobillo',
      head: ['Hallazgo', 'Esguince', 'Fractura'],
      rows: [
        { cells: ['Apoyo', 'Doloroso, pero posible', 'Imposible apoyar'],
          say: 'En el esguince el paciente puede apoyar, aunque le duela. En la fractura no logra apoyar. La imposibilidad de apoyar es el signo que más orienta a fractura.' },
        { cells: ['Crepitación ósea', 'Ausente', 'Presente'],
          say: 'La crepitación ósea no existe en el esguince y sí puede estar en la fractura.' },
        { cells: ['Dolor a la palpación', 'En ligamentos', 'Sobre prominencias óseas'],
          say: 'Si el dolor está sobre el hueso, sobre las prominencias óseas, piensas en fractura. Si está sobre los ligamentos, piensas en esguince.' },
        { cells: ['Equimosis', 'Tardía y localizada', 'Inmediata y extensa'],
          say: 'Y la equimosis del esguince suele ser tardía y localizada, mientras que la de la fractura es inmediata y extensa. Ojo: ninguno de estos signos reemplaza a la radiografía, como vamos a ver.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Examen del tobillo',
      title: 'Qué palpar: criterios para radiografía',
      cards: [
        { title: 'Puntos óseos a palpar', tag: 'Sistemático', kind: 'key', items: [
          { t: 'Maléolos medial y lateral', d: 'Su fractura es la más común del tobillo',
            say: 'Palpa siempre los dos maléolos, el medial y el lateral. Su fractura es la más frecuente en el tobillo.' },
          { t: 'Base del quinto metatarsiano', d: 'Avulsión por el peroneo lateral corto',
            say: 'Luego la base del quinto metatarsiano: el músculo peroneo lateral corto tracciona y puede arrancar un fragmento. Es la fractura por avulsión que se confunde con un esguince.' },
          { t: 'Cabeza del peroné', d: 'Fractura de Maisonneuve',
            say: 'Y la cabeza del peroné. El golpe se transmite por la sindesmosis, que es la unión fibrosa entre tibia y peroné, y puede fracturar el peroné arriba, cerca de la rodilla. Eso se llama fractura de Maisonneuve. Si solo miras el tobillo, la pierdes.' },
        ] },
        { title: 'Cuándo pedir radiografía', tag: 'Reglas de Ottawa', kind: 'alert', items: [
          { t: 'Dolor óseo en esos puntos', d: 'Maléolos o base del quinto metatarsiano',
            say: 'La idea de las reglas de Ottawa es no pedir radiografía a todo el mundo, pero sí a quien tiene dolor sobre esos puntos óseos.' },
          { t: 'Imposibilidad de apoyar', d: 'Signo que orienta a fractura',
            say: 'Y a quien no logra apoyar el pie. En el examen, como veremos, una torcedura con dolor óseo o equimosis bimaleolar se estudia con radiografía.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Conducta',
      title: 'Torcedura de tobillo: radiografía primero',
      nodes: [
        { id: 'to', col: 0, row: 1, k: 'start', t: 'Torcedura de tobillo', s: 'Dolor, equimosis, no apoya bien' },
        { id: 'rx', col: 1, row: 1, k: 'q', t: 'Radiografía de tobillo', s: 'Descarta fractura primero' },
        { id: 'fx', col: 2, row: 0, k: 'alert', t: 'Hay fractura', s: 'Tratamiento quirúrgico' },
        { id: 'es', col: 2, row: 2, k: 'good', t: 'Radiografía normal', s: 'Recién ahí: esguince' },
      ],
      edges: [
        { from: 'to', to: 'rx' },
        { from: 'rx', to: 'fx', label: 'Alterada' },
        { from: 'rx', to: 'es', label: 'Normal' },
      ],
      steps: [
        { show: ['to', 'rx'], note: 'Ante la duda, es fractura hasta demostrar lo contrario',
          say: 'La regla del libro dice que un esguince es una fractura hasta que se demuestre lo contrario con una radiografía. Ante una torcedura con dolor, equimosis o dificultad para apoyar, tu primera conducta es pedir radiografía de tobillo.' },
        { show: ['fx', 'es'], note: 'El esguince es un diagnóstico de exclusión',
          say: 'Si la radiografía muestra fractura, el tratamiento es quirúrgico. Solo si sale normal haces el diagnóstico de esguince, que ves en la clase de partes blandas. Aquí hay un matiz que se pregunta: si te piden el diagnóstico más probable de una torcedura simple con equimosis, la respuesta es esguince; pero si te piden la conducta, es la radiografía.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Fractura de tobillo: qué se hace',
      cards: [
        { title: 'Tratamiento definitivo', tag: 'Quirúrgico', kind: 'key', items: [
          { t: 'Reducción y osteosíntesis', d: 'Sobre todo si hay dos maléolos o sindesmosis inestable',
            say: 'El tratamiento definitivo de la fractura de tobillo es la reducción y la osteosíntesis quirúrgica, sobre todo si hay compromiso de ambos maléolos o inestabilidad de la sindesmosis.' },
          { t: 'No es RICE con bota', d: 'Eso es el esguince',
            say: 'Cuidado con la trampa: el reposo, hielo, compresión y elevación con bota removible es el manejo del esguince, no el de una fractura confirmada.' },
        ] },
        { title: 'Mientras llega la cirugía', tag: 'Manejo inicial', kind: 'alert', items: [
          { t: 'Analgesia y reducción cerrada', d: 'Bajo sedación o anestesia',
            say: 'Si la fractura o luxofractura está desplazada, el manejo inicial es analgesia y reducción cerrada, bajo sedación o anestesia, para devolver el pie a su eje.' },
          { t: 'Valva de yeso abierta', d: 'Inmovilización transitoria; evita compartimental',
            say: 'Después se inmoviliza de forma transitoria con una valva de yeso abierta, no con un yeso circular cerrado, para evitar un síndrome compartimental. Esto vale para otras fracturas desplazadas que esperan cirugía.' },
          { t: 'Neurovascular antes y después', d: 'Pulsos, llene capilar, sensibilidad',
            say: 'Y siempre evalúas la parte neurovascular distal, con pulsos, llene capilar y sensibilidad, antes y después de inmovilizar.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Tobillo y pierna: errores típicos',
      head: ['Situación', 'Haces', 'No haces'],
      rows: [
        { cells: ['Torcedura con dolor o equimosis', 'Radiografía de tobillo', 'Alta como esguince sin radiografía'],
          say: 'Torcedura con dolor, equimosis o dificultad para apoyar: pides radiografía. No das el alta con un diagnóstico de esguince sin haber descartado la fractura.' },
        { cells: ['Fractura de tobillo confirmada', 'Cirugía; férula mientras', 'RICE con bota removible'],
          say: 'Fractura de tobillo confirmada: cirugía, y una inmovilización transitoria mientras tanto. La bota con hielo y elevación es del esguince.' },
        { cells: ['Primera imagen del tobillo', 'Radiografía simple', 'TAC o resonancia de entrada'],
          say: 'La primera imagen del tobillo es la radiografía simple. Ni el TAC ni la resonancia son el examen inicial.' },
        { cells: ['Dolor intenso bajo el yeso', 'Retirar el yeso ya', 'Elevar o repetir radiografías'],
          say: 'Y dolor intenso con edema bajo un yeso en una fractura de pierna es síndrome compartimental hasta demostrar lo contrario: retiras el yeso de inmediato.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la lesión de extremidad inferior a la radiografía, la cirugía y las complicaciones.',
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Un hombre de 32 años sufre un accidente de moto y llega con dolor intenso en el muslo derecho, deformidad del eje de la extremidad y crepitación. No puede mover la pierna. Los pulsos distales están presentes.',
      question: '¿Cuál es el estudio y el tratamiento más adecuados?',
      options: [
        { letter: 'A', text: 'Radiografía de fémur AP y lateral con cadera y rodilla; cirugía con clavo intramedular' },
        { letter: 'B', text: 'Radiografía solo de la zona del dolor; yeso por seis semanas' },
        { letter: 'C', text: 'Resonancia magnética de muslo; reposo y analgesia' },
        { letter: 'D', text: 'Solo radiografía de pelvis; manejo ortopédico' },
        { letter: 'E', text: 'Ecografía de partes blandas; vendaje compresivo' },
      ],
      correct: 'A',
      explanation: 'La fractura de fémur se confirma con radiografía AP y lateral que incluya las articulaciones proximal y distal, y su tratamiento es siempre quirúrgico, habitualmente con clavo intramedular o placa. El manejo ortopédico no vence la fuerza muscular y termina en consolidación viciosa o pseudoartrosis.',
      say: {
        stem: 'Un hombre de treinta y dos años tras un accidente de moto, con dolor intenso en el muslo derecho, deformidad del eje de la extremidad y crepitación. No puede mover la pierna y los pulsos distales están presentes.',
        question: '¿Cuál es el estudio y el tratamiento más adecuados?',
        options: 'Las opciones: radiografía de fémur con cadera y rodilla, y cirugía con clavo; radiografía de la zona y yeso por seis semanas; resonancia y reposo; solo pelvis y manejo ortopédico; o ecografía y vendaje. Piénsalo.',
        answer: 'Es la A. Deformidad, crepitación e impotencia funcional son una fractura de fémur. Se confirma con radiografía anteroposterior y lateral que incluya cadera y rodilla, y se opera, habitualmente con clavo intramedular. El yeso es la trampa: no contrarresta la fuerza muscular y deja una consolidación viciosa o una pseudoartrosis.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 7',
      stem: 'Una paciente de 68 años hace dos días sufre torsión del tobillo derecho, mientras bajaba escaleras. Evoluciona con intenso dolor, que le dificulta caminar. Al examen físico presenta edema de tobillo derecho, con equimosis bimaleolar, asociado a dolor a la palpación fibular ipsilateral.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Indicar inmovilizador de tobillo' },
        { letter: 'B', text: 'Inmovilizar con bota larga de yeso' },
        { letter: 'C', text: 'Solicitar radiografías de tobillo' },
        { letter: 'D', text: 'Solicitar TAC de tobillo' },
        { letter: 'E', text: 'Indicar reposo y analgesia, con elevación de la extremidad' },
      ],
      correct: 'C',
      explanation: 'La sospecha es una fractura de tobillo, principalmente por el dolor a la palpación ósea. Sin embargo, tanto en un esguince como en una sospecha de fractura, la conducta inicial es descartar la fractura con radiografías de tobillo (AP, lateral y oblicua).',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticuatro. Una paciente de sesenta y ocho años, con torsión del tobillo hace dos días al bajar escaleras. Tiene dolor intenso que le dificulta caminar, edema, equimosis en ambos maléolos y dolor al palpar el peroné.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: inmovilizador de tobillo; bota larga de yeso; radiografías de tobillo; tomografía de tobillo; o reposo, analgesia y elevación. Piénsalo.',
        answer: 'Es la C. El dolor sobre el hueso y la equimosis bimaleolar orientan a fractura, pero incluso si fuera un esguince, lo primero siempre es descartar la fractura con radiografías de tobillo, anteroposterior, lateral y oblicua. Inmovilizar o dar reposo sin imagen es partir por el final, y el TAC no es el examen inicial.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un paciente con fractura de tobillo confirmada en la radiografía.',
      question: '¿Cuál es el tratamiento?',
      options: [
        { letter: 'A', text: 'RICE más bota removible por cuatro semanas' },
        { letter: 'B', text: 'Yeso de pierna por seis semanas' },
        { letter: 'C', text: 'Cirugía con reducción y osteosíntesis' },
        { letter: 'D', text: 'Observación ambulatoria y control en una semana' },
        { letter: 'E', text: 'Inmovilización con bota de yeso y evaluar en dos semanas' },
      ],
      correct: 'C',
      explanation: 'Las fracturas de fémur, pierna y tobillo se tratan quirúrgicamente por regla general. La cirugía permite reducir y fijar bien, y que el paciente apoye antes. El RICE con bota es el manejo del esguince; la inmovilización solo es parte del manejo mientras llega la cirugía.',
      say: {
        stem: 'Un paciente con una fractura de tobillo confirmada en la radiografía.',
        question: '¿Cuál es el tratamiento?',
        options: 'Las opciones: reposo, hielo, compresión y elevación con bota removible; yeso de pierna por seis semanas; cirugía con reducción y osteosíntesis; observación ambulatoria; o bota de yeso y control en dos semanas. Piénsalo.',
        answer: 'Es la C. Fémur, pierna y tobillo se operan por regla general: la cirugía reduce y fija bien, y permite apoyar antes. La A es la trampa: esa bota con hielo y elevación es el manejo del esguince, no de una fractura confirmada. La inmovilización solo acompaña mientras llega la cirugía.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: pierna y tobillo',
      cards: [
        { title: 'Pierna y fémur', tag: 'Cirugía', kind: 'key', items: [
          { t: 'Fémur, pierna y tobillo: cirugía', d: 'El yeso definitivo es la excepción',
            say: 'Cerremos con las reglas de oro. Fémur, pierna y tobillo se operan por regla general. Y en la pierna vigilas el síndrome compartimental y la trombosis venosa profunda.' },
          { t: 'Dolor bajo el yeso: retirarlo', d: 'Síndrome compartimental hasta demostrar lo contrario',
            say: 'Si hay dolor intenso o edema distal bajo un yeso, lo retiras de inmediato y llamas al traumatólogo.' },
        ] },
        { title: 'Tobillo', tag: 'Radiografía', kind: 'alert', items: [
          { t: 'Torcedura: radiografía primero', d: 'Dolor óseo o imposibilidad de apoyar',
            say: 'En el tobillo, toda torcedura con dolor sobre el hueso, equimosis o dificultad para apoyar se estudia con radiografía, y palpas maléolos, base del quinto metatarsiano y cabeza del peroné.' },
          { t: 'Esguince: solo con radiografía normal', d: 'Fractura: cirugía; valva abierta mientras',
            say: 'El esguince se diagnostica solo con la radiografía normal. Si hay fractura, cirugía, y mientras tanto reducción cerrada y valva de yeso abierta. Si te llevas una sola idea de hoy: un tobillo que se torció es una fractura hasta que la radiografía diga lo contrario. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Lesión de extremidad inferior tras un trauma',
    root: N('start', 'Trauma de extremidad inferior', 'Dolor, impotencia, deformidad',
      'Un paciente con un trauma de extremidad inferior, con dolor y dificultad para apoyar. Primero evalúas el estado neurovascular y luego decides el estudio.',
      ['Deformidad o crepitación en muslo o pierna', N('do', 'Radiografía AP y lateral', 'Con articulaciones vecinas',
        'Si hay deformidad y crepitación en el muslo o la pierna, pides radiografía anteroposterior y lateral, incluyendo la articulación de arriba y la de abajo.',
        ['Fractura de fémur, tibia o peroné', N('refer', 'Tratamiento quirúrgico', 'Clavo o placa; derivar',
          'Las fracturas de fémur y de pierna se operan, habitualmente con clavo intramedular o placa.')],
        ['Dolor intenso o edema bajo el yeso', N('alert', 'Síndrome compartimental', 'Retirar el yeso; fasciotomía',
          'Si después de inmovilizar aparece dolor intenso y edema distal, sospechas síndrome compartimental: retiras el yeso de inmediato y fasciotomía.')],
      )],
      ['Torcedura de tobillo', N('do', 'Palpar y pedir radiografía', 'Maléolos, quinto metatarsiano, peroné',
        'Si es una torcedura de tobillo, palpas maléolos, base del quinto metatarsiano y cabeza del peroné, y pides radiografía de tobillo.',
        ['Fractura o luxofractura', N('refer', 'Reducir, valva abierta y cirugía', 'Analgesia y neurovascular',
          'Si hay fractura o luxofractura, analgesia, reducción cerrada, valva de yeso abierta y cirugía definitiva.')],
        ['Radiografía normal', N('ok', 'Esguince de tobillo', 'Manejo según grado',
          'Si la radiografía es normal, recién ahí haces el diagnóstico de esguince, que se maneja según su grado.')],
      )],
    ),
  },
};
