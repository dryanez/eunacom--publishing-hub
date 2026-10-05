// Clase 12.4 (Traumatología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_traumatologia.cjs (trauma-04). Preguntas: banco real EUNACOM (class_questions.cjs --search).
// OJO: el título del libro (embolia grasa, pseudoartrosis, osteomielitis) no coincide con su contenido, que trata de lesiones
// nerviosas y vasculares de las fracturas. Se sigue el contenido del libro (código 1.01.2.007). Embolia grasa ya está en trauma-03.
// El banco real no tiene pregunta de lesión vascular de una fractura: se usa un caso escrito para la clase, rotulado como tal.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'trauma-04',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Lesiones neurovasculares de las fracturas: qué nervio, qué arteria y qué hacer primero',
      say: 'Bienvenido. Hoy vemos lo que puede dañarse junto con el hueso: los nervios y las arterias. En el examen aparece de dos formas. Una, el nervio que corresponde a cada fractura, sobre todo el radial. Otra, la hemorragia o la isquemia de un miembro, donde importa qué haces primero. Parte con una idea simple: antes y después de inmovilizar cualquier fractura, tú examinas pulsos, sensibilidad y movilidad.',
    },

    {
      type: 'flow',
      kicker: 'Lesión nerviosa',
      title: 'Déficit nervioso: parcial o total',
      nodes: [
        { id: 'fx', col: 0, row: 1, k: 'cause', t: 'Fractura o luxación', s: 'El nervio se lesiona al instante' },
        { id: 'de', col: 1, row: 1, k: 'mech', t: 'Déficit distal a la lesión', s: 'Motor, sensitivo, a veces reflejos' },
        { id: 'pa', col: 2, row: 0, k: 'good', t: 'Déficit parcial', s: 'Mueve o siente algo' },
        { id: 'to', col: 2, row: 2, k: 'alert', t: 'Déficit total', s: 'No mueve ni siente' },
        { id: 'ne', col: 3, row: 0, k: 'good', t: 'Neuroapraxia: observar', s: 'Suele recuperarse' },
        { id: 'ex', col: 3, row: 2, k: 'refer', t: 'Exploración quirúrgica', s: 'No se distingue el grado' },
      ],
      edges: [
        { from: 'fx', to: 'de' },
        { from: 'de', to: 'pa' },
        { from: 'de', to: 'to' },
        { from: 'pa', to: 'ne' },
        { from: 'to', to: 'ex' },
      ],
      steps: [
        { show: ['fx', 'de'], note: 'El diagnóstico es solo clínico',
          say: 'Las lesiones de los nervios periféricos ocurren en el momento del trauma, con la fractura o la luxación. Y el diagnóstico es estrictamente clínico: hay un déficit distal a la lesión. Puede haber paresia o plejia, hipoestesia o anestesia, y a veces falta un reflejo si el nervio participa en él.' },
        { show: ['pa', 'ne'], note: 'Si algo se mueve o se siente, se observa',
          say: 'Ahora la decisión. Si el déficit es parcial, el paciente todavía mueve o siente algo, se asume una neuroapraxia, que es la forma más leve, y se observa.' },
        { show: ['to', 'ex'], note: 'Déficit total: se explora',
          say: 'Si el déficit es total, no hay cómo distinguir con la clínica entre axonotmesis y neurotmesis, que son las formas graves. Por eso se suele indicar exploración quirúrgica.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Qué nervio con qué lesión',
      title: 'Miembro superior: los nervios clásicos',
      cards: [
        { title: 'Húmero y hombro', tag: 'Los más preguntados', kind: 'alert', items: [
          { t: 'Radial: fractura de diáfisis humeral', d: 'Mano caída; sensibilidad posterior',
            say: 'El nervio radial pasa pegado a la diáfisis del húmero, por el surco radial. Si se fractura la diáfisis, se daña. El paciente no puede extender la muñeca ni los dedos: es la mano caída. Y pierde la sensibilidad de la cara posterior de la extremidad. Este es el nervio que más se pregunta.' },
          { t: 'Axilar: luxación anterior de hombro', d: 'No abduce; pierde parche deltoideo',
            say: 'El nervio axilar, o circunflejo, se lesiona en la luxación anterior de hombro y en las fracturas del cuello del húmero. Paraliza el deltoides, así que no puede abducir el hombro, y deja sin sensibilidad la zona deltoidea.' },
        ] },
        { title: 'Codo', tag: 'Flexión de los dedos', kind: 'key', items: [
          { t: 'Mediano: supracondílea de húmero', d: 'No flecta dedos 1 al 3',
            say: 'El nervio mediano se asocia a la fractura supracondílea de húmero. Cuesta flectar los tres primeros dedos, y la sensibilidad falla en los tres primeros dedos y la mitad radial del cuarto.' },
          { t: 'Cubital: fractura de codo medial', d: 'No flecta dedos 4 y 5',
            say: 'El nervio cubital se lesiona en las fracturas de codo, por la cara medial, la epitróclea. Cuesta flectar el cuarto y el quinto dedo, y se pierde la sensibilidad del quinto dedo y la mitad cubital del cuarto.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Miembro inferior y otras causas',
      title: 'Ciático y neuropatías por compresión',
      cards: [
        { title: 'Nervio ciático', tag: 'Luxación posterior de cadera', kind: 'key', items: [
          { t: 'Choque frontal: rodilla contra el tablero', d: 'Típico accidente de tránsito',
            say: 'El nervio ciático se asocia a la luxación posterior de cadera. El escenario típico es un accidente de tránsito: la rodilla golpea contra el tablero y empuja la cabeza femoral hacia atrás.' },
          { t: 'No flecta rodilla ni dorsiflexiona', d: 'Baja el reflejo aquiliano',
            say: 'El paciente no puede flectar la rodilla ni hacer dorsiflexión del pie, pierde la sensibilidad de la cara posterior del muslo, la pierna y el pie, y baja el reflejo aquiliano, que depende de la primera raíz sacra.' },
        ] },
        { title: 'Compresión sin fractura', tag: 'Dos clásicas', kind: 'criteria', items: [
          { t: 'Parálisis del borracho: radial', d: 'Brazo sobre una silla, sueño profundo',
            say: 'No todo daño del nervio radial viene de una fractura. La parálisis del borracho es una compresión del radial: el brazo queda colgando sobre una silla durante un sueño profundo. Despierta con mano caída, sin trauma óseo.' },
          { t: 'Luna de miel: plexo braquial', d: 'Pareja durmiendo sobre el brazo',
            say: 'Y la parálisis de la luna de miel es la compresión del plexo braquial, cuando la pareja duerme sobre el brazo o la axila. Que la fractura no te confunda: sin fractura, piensa en compresión.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Lesión vascular',
      title: 'Arteria dañada: cómo se presenta',
      cards: [
        { title: 'Isquemia aguda', tag: 'Las seis P', kind: 'alert', items: [
          { t: 'Dolor, palidez y ausencia de pulsos', d: 'Pain, pallor, pulselessness',
            say: 'Frente a una oclusión arterial por una fractura o luxación, buscas activamente las seis P. Dolor intenso, palidez y ausencia de pulsos.' },
          { t: 'Parestesias, parálisis y frialdad', d: 'Paresthesia, paralysis, poikilothermia',
            say: 'Después, parestesias, parálisis y frialdad del miembro, que en inglés es poiquilotermia. Si el miembro está pálido, frío y sin pulso, es una urgencia que se cuenta en horas.' },
        ] },
        { title: 'Hemorragia', tag: 'Lo característico', kind: 'key', items: [
          { t: 'Hemorragia pulsátil', d: 'Es el signo de lesión arterial',
            say: 'Lo característico de una lesión arterial con hemorragia es el sangrado pulsátil, a chorro, que sale al ritmo del corazón.' },
          { t: 'Examen neurovascular siempre', d: 'Antes y después de inmovilizar',
            say: 'Recuerda la regla de oro de la traumatología: pulsos, llene capilar, sensibilidad y movilidad distal, antes y después de inmovilizar o reducir. Así detectas la lesión y no te culpan de haberla causado.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo de urgencia',
      title: 'Hemorragia arterial: qué hacer primero',
      cards: [
        { title: 'Control del sangrado', tag: 'Dentro del ABC', kind: 'alert', items: [
          { t: 'Compresión directa primero', d: 'Es parte del ABC del trauma',
            say: 'La prioridad es la compresión directa de la herida, dentro de la circulación del ABC del trauma. Es lo primero, antes de cualquier otra maniobra.' },
          { t: 'Torniquete solo si no cede', d: 'Hemorragia exanguinante que persiste',
            say: 'El torniquete se reserva para una hemorragia exanguinante que no cede con la compresión. Si el sangrado pone en riesgo la vida, se usa sin dudar, porque salvar la vida va antes que salvar el miembro.' },
        ] },
        { title: 'Tratamiento definitivo', tag: 'Cirugía vascular', kind: 'key', items: [
          { t: 'Reparación de la arteria', d: 'Por cirugía vascular',
            say: 'El tratamiento definitivo es la reparación quirúrgica de la arteria por cirugía vascular.' },
          { t: 'Ligadura: último recurso', d: 'Luego, traslado urgente',
            say: 'La ligadura se deja para casos extremos, cuando la compresión no logra la hemostasia. Después se traslada de urgencia para revascularizar el miembro.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Nervio, lesión y déficit',
      head: ['Nervio', 'Se lesiona con', 'Déficit', 'Sensibilidad'],
      rows: [
        { cells: ['Radial', 'Diáfisis de húmero', 'No extiende muñeca ni dedos', 'Cara posterior del miembro'],
          say: 'Esta tabla es para memorizar y se pregunta tal cual. Radial: diáfisis de húmero, mano caída, y sensibilidad de la cara posterior del miembro.' },
        { cells: ['Axilar', 'Luxación anterior de hombro', 'No abduce el hombro', 'Zona deltoidea'],
          say: 'Axilar: luxación anterior de hombro, no puede abducir, y falla la sensibilidad deltoidea.' },
        { cells: ['Mediano', 'Supracondílea de húmero', 'No flecta dedos 1 al 3', 'Dedos 1 al 3 y mitad del 4'],
          say: 'Mediano: supracondílea de húmero, falla la flexión de los tres primeros dedos.' },
        { cells: ['Cubital', 'Fractura de codo medial', 'No flecta dedos 4 y 5', 'Dedo 5 y mitad del 4'],
          say: 'Cubital: fractura de codo, falla la flexión del cuarto y quinto dedo.' },
        { cells: ['Ciático', 'Luxación posterior de cadera', 'No flecta rodilla ni dorsiflexiona', 'Cara posterior de muslo a pie'],
          say: 'Y ciático: luxación posterior de cadera, no flecta la rodilla ni hace dorsiflexión. Si asocias el nervio con su lesión, resuelves casi todas las preguntas de este tema.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la fractura con compromiso distal al nervio o la arteria y su conducta.',
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Un hombre de 30 años sufre una fractura de antebrazo en un accidente. En el servicio de urgencia tiene una herida de la cual sale sangre en chorro, a ritmo del pulso. Está pálido y taquicárdico.',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Ligadura inmediata de la arteria' },
        { letter: 'B', text: 'Compresión directa de la herida' },
        { letter: 'C', text: 'Instalar un torniquete de inmediato' },
        { letter: 'D', text: 'Elevar el brazo y esperar' },
        { letter: 'E', text: 'Solicitar una arteriografía antes de actuar' },
      ],
      correct: 'B',
      explanation: 'La hemorragia pulsátil indica lesión arterial. La prioridad es la compresión directa, dentro del ABC del trauma. El torniquete se reserva para una hemorragia exanguinante que no cede, y la ligadura es un último recurso. La reparación definitiva es quirúrgica.',
      say: {
        stem: 'Un hombre de treinta años con una fractura de antebrazo tras un accidente. En urgencia tiene una herida de la que sale sangre en chorro, al ritmo del pulso. Está pálido y con taquicardia.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: ligadura inmediata de la arteria; compresión directa de la herida; torniquete de inmediato; elevar el brazo y esperar; o pedir una arteriografía antes de actuar. Piénsalo.',
        answer: 'Es la B. El sangrado pulsátil es una lesión arterial, y lo primero es la compresión directa, que es parte del ABC. El torniquete es tentador, pero se reserva para la hemorragia exanguinante que no cede. La ligadura es último recurso, y esperar una arteriografía deja al paciente sangrando.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 70',
      stem: 'Paciente de 35 años sufre traumatismo en la región posterior del húmero. Al examen: no puede extender la muñeca ni los dedos (caída de muñeca). ¿Qué nervio fue lesionado?',
      question: '¿Qué nervio fue lesionado?',
      options: [
        { letter: 'A', text: 'Nervio radial (en canal de torsión)' },
        { letter: 'B', text: 'Nervio cubital' },
        { letter: 'C', text: 'Nervio mediano' },
        { letter: 'D', text: 'Nervio musculocutáneo' },
        { letter: 'E', text: 'Nervio axilar' },
      ],
      correct: 'A',
      explanation: 'Fractura de húmero con caída de muñeca es una lesión del nervio radial en el canal de torsión, o surco espiral. Inerva los extensores de la muñeca y de los dedos.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Un paciente de treinta y cinco años con un traumatismo en la región posterior del húmero. No puede extender la muñeca ni los dedos: caída de muñeca.',
        question: '¿Qué nervio fue lesionado?',
        options: 'Las opciones: radial; cubital; mediano; musculocutáneo; o axilar. Piénsalo.',
        answer: 'Es la A. Trauma en la cara posterior del húmero y mano caída: el nervio radial, que corre pegado al hueso por el canal de torsión. Inerva los extensores de la muñeca y de los dedos. Los otros nervios no explican la pérdida de extensión.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 41',
      stem: 'Una paciente de 35 años, sin antecedentes, sufre fractura de diáfisis humeral izquierda, evolucionando posteriormente con hipostesia del dorso de dicha mano, asociado a imposibilidad de realizar extensión de muñeca y falanges. ¿La estructura más probablemente dañada en este caso es?',
      question: '¿La estructura más probablemente dañada en este caso es?',
      options: [
        { letter: 'A', text: 'Nervio mediano' },
        { letter: 'B', text: 'Nervio ulnar' },
        { letter: 'C', text: 'Nervio radial' },
        { letter: 'D', text: 'Nervio axilar' },
        { letter: 'E', text: 'Nervio musculocutáneo' },
      ],
      correct: 'C',
      explanation: 'Fractura de la diáfisis humeral con hipoestesia del dorso de la mano e imposibilidad de extender la muñeca y las falanges corresponde al nervio radial. Es una pregunta clásica de libro.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil trece. Una mujer de treinta y cinco años con fractura de la diáfisis del húmero. Después tiene hipoestesia del dorso de la mano y no puede extender la muñeca ni las falanges.',
        question: '¿Qué estructura es la más probablemente dañada?',
        options: 'Las opciones: nervio mediano; ulnar, que es lo mismo que cubital; radial; axilar; o musculocutáneo. Piénsalo.',
        answer: 'Es la C. Misma pareja de siempre: diáfisis humeral y pérdida de extensión de muñeca y dedos, con la sensibilidad del dorso de la mano alterada. Es el nervio radial. Fíjate que el examen repite el patrón, así que la asociación tiene que quedar automática.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 30',
      stem: 'Un paciente de 65 años, alcohólico inveterado, se queda dormido sobre el costado derecho, mientras estaba borracho. Al despertar, al día siguiente, no puede mover la mano derecha. Al examen neurológico, no puede extender los dedos ni la muñeca, aunque puede flectarlos sin problemas. Además no tiene alteraciones visuales ni afasia.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Hematoma subdural izquierdo' },
        { letter: 'B', text: 'Trombosis de la vena subclavia' },
        { letter: 'C', text: 'Neuropatía compresiva del nervio radial' },
        { letter: 'D', text: 'Trombosis de la arteria subclavia' },
        { letter: 'E', text: 'Hematoma capsular izquierdo' },
      ],
      correct: 'C',
      explanation: 'Es una presentación clásica de neuropatía compresiva del nervio radial, la llamada parálisis del borracho.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil dieciséis. Un hombre de sesenta y cinco años, alcohólico, se duerme ebrio sobre el costado derecho. Al despertar no puede extender los dedos ni la muñeca, pero sí flectarlos. No tiene alteraciones visuales ni afasia.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: hematoma subdural izquierdo; trombosis de la vena subclavia; neuropatía compresiva del radial; trombosis de la arteria subclavia; o hematoma capsular izquierdo. Piénsalo.',
        answer: 'Es la C. Es la parálisis del borracho: compresión del radial por dormir sobre el brazo. Los hematomas darían afasia o compromiso de la cara, y las trombosis vasculares no explican una mano caída aislada. Sin fractura, piensa en compresión.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: nervios y arterias',
      cards: [
        { title: 'Nervios', tag: 'Para el examen', kind: 'key', items: [
          { t: 'Diáfisis humeral es radial', d: 'Mano caída y sensibilidad posterior',
            say: 'Cerremos con las reglas de oro. Diáfisis humeral: nervio radial, mano caída. Luxación de hombro: axilar. Supracondílea: mediano. Codo medial: cubital. Luxación posterior de cadera: ciático.' },
          { t: 'Parcial: observar. Total: explorar', d: 'Neuroapraxia versus lesión grave',
            say: 'Si el déficit es parcial, es una neuroapraxia y se observa. Si es total, no se puede distinguir el grado y se explora quirúrgicamente.' },
        ] },
        { title: 'Arterias', tag: 'Urgencia', kind: 'alert', items: [
          { t: 'Seis P y hemorragia pulsátil', d: 'Isquemia aguda o lesión arterial',
            say: 'Si el miembro está pálido, frío y sin pulso, o hay sangrado pulsátil, es una lesión arterial.' },
          { t: 'Compresión directa primero', d: 'Torniquete solo si es exanguinante y no cede',
            say: 'Lo primero es la compresión directa. Después, cirugía vascular. Y examina siempre pulsos, sensibilidad y movilidad antes y después de inmovilizar. Si te llevas una sola idea de hoy: cada fractura tiene su nervio, y cada hemorragia pulsátil se comprime primero. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de la fractura con compromiso neurovascular',
    root: N('start', 'Fractura o luxación con compromiso distal', '¿Nervio o arteria?',
      'Un paciente con una fractura o una luxación y algo anormal más allá de la lesión. Lo primero es separar si falla un nervio o una arteria.',
      ['Déficit motor o sensitivo', N('q', 'Lesión nerviosa', 'Identificar el nervio por la lesión',
        'Si hay déficit motor o sensitivo, piensas en un nervio. Identificas cuál por la fractura: radial en la diáfisis humeral, axilar en el hombro, ciático en la cadera.',
        ['Déficit parcial', N('ok', 'Neuroapraxia: observar', 'Mueve o siente algo',
          'Si el déficit es parcial, es una neuroapraxia y se observa.')],
        ['Déficit total', N('refer', 'Exploración quirúrgica', 'No se distingue axonotmesis de neurotmesis',
          'Si es total, no puedes distinguir el grado con la clínica, y se indica exploración quirúrgica.')],
      )],
      ['Hemorragia pulsátil', N('do', 'Compresión directa', 'Parte del ABC del trauma',
        'Si hay sangrado pulsátil, es una lesión arterial, y lo primero es la compresión directa.',
        ['No cede y es exanguinante', N('alert', 'Torniquete y traslado urgente', 'Ligadura solo en casos extremos',
          'Si no cede y el sangrado es exanguinante, se usa un torniquete y se traslada de urgencia. La ligadura es el último recurso.')],
      )],
      ['Miembro pálido, frío y sin pulso', N('refer', 'Isquemia aguda: cirugía vascular', 'Buscar las seis P',
        'Si el miembro está pálido, frío y sin pulso, con dolor y parestesias, es una isquemia aguda. Se deriva de urgencia a cirugía vascular para reparar la arteria.')],
    ),
  },
};
