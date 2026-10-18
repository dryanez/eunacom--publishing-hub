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
      kicker: 'Luxaciones',
      title: 'Luxación de hombro y principios de reducción',
      cards: [
        { title: 'Hombro', tag: 'Más del 95 % anterior', kind: 'key', items: [
          { t: 'Brazo en abducción y rotación externa', d: 'Signo de la charretera',
            say: 'La luxación de hombro es la más frecuente, y en más del noventa y cinco por ciento es anterior: una caída sobre el brazo en abducción y rotación externa. El paciente llega con el brazo ligeramente separado, sosteniéndolo con la otra mano, sin poder aducirlo, y con el deltoides aplanado y el acromion prominente. Es el signo de la charretera.' },
          { t: 'Axilar y pulso antes y después', d: 'Parche deltoideo',
            say: 'Siempre examinas el nervio axilar, con la sensibilidad del parche deltoideo, y el pulso radial, antes y después de reducir. En la radiografía la cabeza queda subcoracoidea, y se buscan la lesión de Hill-Sachs en la cabeza humeral y la de Bankart en el rodete glenoideo.' },
          { t: 'Reducción cerrada precoz', d: 'Cabestrillo 2 a 3 semanas',
            say: 'Se reduce de forma cerrada y precoz, con analgesia o sedación, y después radiografía de control y cabestrillo por dos a tres semanas. En menores de veinticinco años la recidiva es muy frecuente, y por eso se deriva a traumatología. La luxación posterior es rara y se asocia a convulsiones o electrocución.' },
        ] },
        { title: 'Principios para toda luxación', tag: 'Es una urgencia', kind: 'alert', items: [
          { t: 'Diagnosticar, inmovilizar y derivar', d: 'En la posición hallada',
            say: 'Toda luxación es una urgencia, más aún si hay compromiso neurovascular. El médico general diagnostica, evalúa pulsos, sensibilidad y movilidad, da analgesia, inmoviliza en la posición en que la encontró y deriva.' },
          { t: 'Tracción suave y radiografía previa y posterior', d: 'Sin movimientos bruscos',
            say: 'La reducción se hace con analgesia o sedación, con tracción suave y progresiva, y siempre con radiografía antes y después.' },
          { t: 'Codo: cubital, mediano y braquial', d: 'Valva braquiopalmar a 90 grados',
            say: 'La luxación de codo, habitualmente posterior, puede dañar el nervio cubital o el mediano y la arteria braquial, y se inmoviliza con valva braquiopalmar a noventa grados. Si el pulso está ausente y la derivación se demora, la reducción inmediata la hace el médico entrenado.' },
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
      kicker: 'Lesión vascular',
      title: 'Isquemia aguda sin trauma: embolia o trombosis',
      cards: [
        { title: 'Cómo distinguirlas', tag: 'Misma clínica, distinto origen', kind: 'criteria', items: [
          { t: 'Embolia: origen cardíaco', d: 'Fibrilación auricular, infarto, valvulopatía',
            say: 'Además de la causa traumática, la oclusión arterial aguda puede ser embolia o trombosis. La embolia viene del corazón: fibrilación auricular, infarto reciente o valvulopatía. Aparece de golpe en una extremidad previamente sana, con pulsos normales en la otra pierna, y se atasca en una bifurcación, como la femoral común.' },
          { t: 'Trombosis: sobre una placa', d: 'Claudicación previa, inicio gradual',
            say: 'La trombosis ocurre in situ sobre una placa aterosclerótica. Hay claudicación previa, los pulsos del otro lado están disminuidos y el inicio es más gradual.' },
        ] },
        { title: 'Manejo inicial', tag: 'Ventana de unas 6 horas', kind: 'alert', items: [
          { t: 'Heparina no fraccionada endovenosa', d: 'Bolo de 5.000 UI u 80 UI/kg',
            say: 'La clínica son las seis P. El médico general inicia heparina no fraccionada endovenosa de inmediato, con un bolo de cinco mil unidades, o de ochenta unidades por kilo.' },
          { t: 'Declive, abrigo sin calor y traslado urgente', d: 'A cirugía vascular',
            say: 'Da analgesia, deja la extremidad en declive y abrigada, sin calor directo, y traslada de urgencia a cirugía vascular, porque el tiempo útil para revascularizar es de unas seis horas.' },
          { t: 'Embolia: Fogarty. Trombosis: trombolisis o bypass', d: 'Cuidado con la reperfusión',
            say: 'La embolia se trata con embolectomía con catéter de Fogarty, y la trombosis con trombolisis o bypass. Tras reperfundir hay riesgo de síndrome de reperfusión, con hiperkalemia y mioglobinuria, y de síndrome compartimental.' },
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
      type: 'points',
      kicker: 'En el niño',
      title: 'Fracturas del niño y supracondílea de húmero',
      cards: [
        { title: 'El hueso inmaduro', tag: 'Remodela', kind: 'key', items: [
          { t: 'Tallo verde, rodete y fisarias', d: 'Periostio grueso y placa de crecimiento',
            photo: { src: 'biblioteca/18_traumatologia/trauma-04/21_torus-radio-distal__sherman_p776.jpg', label: 'Rodete del radio distal', at: 'En estas radiografías', credit: 'Sherman, Atlas of Clinical Emergency Medicine, p. 776' },
            say: 'El hueso del niño tiene un periostio grueso y una placa de crecimiento abierta, y por eso tiene patrones propios: el tallo verde, con la cortical rota de un solo lado, y el rodete o torus, por compresión de la metáfisis. En estas radiografías las flechas señalan un rodete del radio distal. Además existen las fracturas fisarias, de Salter-Harris.' },
          { t: 'Casi todas ortopédicas', d: 'Derivar desplazadas, articulares, fisarias y expuestas',
            say: 'La mayoría se trata de forma ortopédica, porque el niño remodela el hueso. Das analgesia, valva, evalúas lo neurovascular y pides radiografías en dos proyecciones. Se derivan las desplazadas, las articulares, las fisarias y las expuestas.' },
          { t: 'Sospechar maltrato', d: 'Lactante que no camina, fémur menor de 1 año',
            say: 'Y sospecha maltrato ante una fractura en un lactante que no camina, una de fémur en menor de un año, fracturas en distintas etapas de consolidación, fracturas costales posteriores, o un mecanismo que no explica la lesión.' },
        ] },
        { title: 'Supracondílea de húmero', tag: 'Niño de 5 a 8 años', kind: 'alert', items: [
          { t: 'Caída con la mano extendida', d: 'Codo doloroso, con edema y deformidad',
            say: 'La fractura de codo más frecuente en el niño de cinco a ocho años es la supracondílea, por una caída con la mano extendida. La radiografía lateral muestra el fragmento distal desplazado hacia atrás.' },
          { t: 'Braquial, mediano y Volkmann', d: 'Mano fría y sin pulso',
            say: 'Es una urgencia porque se asocia a lesión de la arteria braquial, con mano fría y pulso ausente, a lesión del nervio mediano y a síndrome compartimental, con contractura de Volkmann.' },
          { t: 'No forzar la extensión: derivar ya', d: 'Clavos percutáneos; mala reducción: cúbito varo',
            say: 'Se inmoviliza en posición cómoda, sin forzar la extensión, se evalúa lo neurovascular y se deriva de inmediato para reducción y clavos percutáneos. Una mala reducción deja deformidad en varo, el cúbito varo.' },
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
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Luxación anterior de hombro',
      images: [
        { src: 'animaciones/trauma-04/A1_luxacion_hombro.mp4', label: 'La cabeza del húmero sale por delante de la glenoides', credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Luxación, nervio axilar y reducción',
          say: 'Mira la articulación del hombro. En la luxación anterior, tras una caída con el brazo en abducción y rotación externa, la cabeza del húmero se sale por delante de la glenoides. Puede dejar la lesión de Hill-Sachs en la cabeza y la de Bankart en el rodete, y estirar el nervio axilar. Por eso examinas el nervio y el pulso antes y después de reducir. Se reduce de forma cerrada y precoz.' },
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
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2022 · Pregunta 131",
      "stem": "Una paciente de 62 años sufre una caída a nivel, con una fractura del extremo distal del radio izquierdo, que es manejada ortopédicamente con un yeso braquiopalmar. A las 5 horas evoluciona con dolor intenso, EVA 10/10, que no responde a la analgesia y se asocia a dificultad para mover los dedos. Al examen físico, los dedos tienen llene capilar enlentecido.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Síndrome de dolor locorregional complejo"
        },
        {
          "letter": "B",
          "text": "Lesión de la arteria radial"
        },
        {
          "letter": "C",
          "text": "Trombosis venosa profunda"
        },
        {
          "letter": "D",
          "text": "Compresión del nervio mediano"
        },
        {
          "letter": "E",
          "text": "Síndrome compartimental"
        }
      ],
      "correct": "E",
      "explanation": "Dolor desproporcionado que no cede con analgesia, dificultad para mover los dedos y llene capilar lento pocas horas después de enyesar una fractura son un síndrome compartimental. Se debe abrir o retirar el yeso de inmediato y, si no mejora, fasciotomía.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil veintidós. Una mujer de sesenta y dos años tiene una fractura de radio distal enyesada. Cinco horas después tiene un dolor de diez sobre diez que no cede con analgésicos, le cuesta mover los dedos y el llene capilar está lento.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: síndrome de dolor locorregional complejo, lesión de la arteria radial, trombosis venosa profunda, compresión del nervio mediano o síndrome compartimental. Piénsalo.",
        "answer": "Es la E. Dolor desproporcionado pocas horas después de un yeso, con dedos que se mueven mal y circulación lenta, es un síndrome compartimental. El dolor locorregional complejo tienta, pero aparece semanas después, no a las cinco horas."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.2.023 · Traumatismos vasculares",
      "stem": "Hombre de 22 años sufre una herida por arma blanca en la cara medial del muslo derecho. Ingresa con un hematoma pulsátil que aumenta de tamaño, frémito palpable y ausencia de pulsos poplíteo y pedio en esa extremidad. PA 110/70 mmHg tras la reanimación inicial.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Medir el índice tobillo-brazo y reevaluar en 6 horas"
        },
        {
          "letter": "B",
          "text": "Exploración quirúrgica vascular inmediata"
        },
        {
          "letter": "C",
          "text": "AngioTAC electiva al día siguiente"
        },
        {
          "letter": "D",
          "text": "Vendaje compresivo y alta con control"
        },
        {
          "letter": "E",
          "text": "Ecografía Doppler venosa"
        }
      ],
      "correct": "B",
      "explanation": "Los signos duros de lesión vascular (hemorragia pulsátil, hematoma expansivo, frémito o soplo, ausencia de pulsos distales o isquemia) indican exploración quirúrgica inmediata, sin necesidad de imágenes previas. El índice tobillo-brazo o la angioTAC se usan ante signos blandos, como un hematoma estable o un déficit neurológico vecino.",
      "say": {
        "stem": "Hombre de veintidós años con una herida por arma blanca en la cara interna del muslo derecho. Tiene un hematoma pulsátil que crece, frémito palpable y no se palpan los pulsos poplíteo ni pedio en esa pierna.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: índice tobillo brazo y reevaluar, exploración quirúrgica inmediata, angioTAC al día siguiente, vendaje compresivo y alta, o Doppler venoso. Piénsalo.",
        "answer": "Es la B. Hematoma pulsátil que crece, frémito y ausencia de pulsos son signos duros de lesión arterial, y eso va directo a pabellón. La angioTAC tienta porque precisa la lesión, pero se reserva para los signos blandos, cuando hay tiempo para estudiar."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.2.009 · Fracturas",
      "stem": "Un niño de 6 años cae de un columpio sobre la mano con el codo en extensión. Presenta dolor, aumento de volumen y deformidad del codo. La radiografía muestra una fractura supracondílea del húmero desplazada. La mano está pálida, fría y no se palpa el pulso radial.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Inmovilización con yeso braquiopalmar y control en una semana"
        },
        {
          "letter": "B",
          "text": "Solicitar angiografía y esperar el resultado antes de cualquier maniobra"
        },
        {
          "letter": "C",
          "text": "Analgesia y cirugía electiva en 7 días"
        },
        {
          "letter": "D",
          "text": "Reducción e inmovilización urgente, con evaluación vascular inmediata"
        },
        {
          "letter": "E",
          "text": "Vendaje elástico y elevación de la extremidad"
        }
      ],
      "correct": "D",
      "explanation": "La fractura supracondílea es la fractura de codo más frecuente en niños. Si está desplazada y hay compromiso vascular (lesión o compresión de la arteria braquial), es una urgencia: se reduce de inmediato, habitualmente en pabellón con fijación percutánea, y se reevalúa el pulso y la perfusión. Si no se resuelve, se explora la arteria.",
      "say": {
        "stem": "Un niño de seis años tiene una fractura supracondílea de húmero desplazada, con la mano pálida, fría y sin pulso radial.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: yeso y control, angiografía antes de todo, cirugía electiva, reducción urgente con evaluación vascular o vendaje elástico. Piénsalo.",
        "answer": "Es la D. Una fractura supracondílea desplazada sin pulso es una urgencia y se reduce de inmediato, reevaluando la perfusión. La angiografía tienta, pero no debe retrasar la reducción, que muchas veces recupera el pulso."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2025 · Pregunta 35",
      "stem": "Paciente de 23 años sufre una caída mientras jugaba fútbol, cayendo con el hombro derecho contra el piso, con una luxación anterior de hombro derecho confirmada por radiografías que descartan fracturas.",
      "question": "¿Qué evaluación debe realizarse obligatoriamente en el examen físico antes de proceder con las maniobras de reducción?",
      "options": [
        {
          "letter": "A",
          "text": "Buscar presencia de equimosis"
        },
        {
          "letter": "B",
          "text": "Buscar deformación en \"charretera\""
        },
        {
          "letter": "C",
          "text": "Explorar la sensibilidad de la zona deltoidea"
        },
        {
          "letter": "D",
          "text": "Evaluar la impotencia funcional"
        },
        {
          "letter": "E",
          "text": "Evaluar crépito óseo"
        }
      ],
      "correct": "C",
      "explanation": "El nervio axilar es el más lesionado en la luxación anterior de hombro. Antes y después de reducir se debe documentar la sensibilidad de la cara lateral del hombro (zona del parche deltoideo) y los pulsos distales. La charretera e impotencia funcional confirman la luxación, pero no cambian la conducta.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil veinticinco. Jugador de fútbol de veintitrés años con luxación anterior de hombro confirmada, sin fracturas.",
        "question": "¿Qué debe evaluarse obligatoriamente antes de reducir?",
        "options": "Las opciones: equimosis, signo de la charretera, sensibilidad de la zona deltoidea, impotencia funcional o crépito óseo. Piénsalo.",
        "answer": "Es la C. Hay que explorar la sensibilidad del deltoides, porque el nervio axilar es el que más se lesiona y debe quedar documentado antes de reducir. La charretera tienta, pero solo confirma una luxación que ya está diagnosticada."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.02.5.003 · Reducción de luxaciones de codo, hombro e interfalángicas",
      "stem": "Hombre de 30 años con luxación posterior de codo izquierdo tras caída, sin fracturas en la radiografía. Antes de reducir, el pulso radial está presente y la sensibilidad de la mano es normal. Se reduce mediante tracción longitudinal del antebrazo con contratracción del brazo y flexión progresiva.",
      "question": "Inmediatamente después de la reducción, ¿cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Dar de alta con analgesia, sin inmovilización"
        },
        {
          "letter": "B",
          "text": "Solicitar resonancia magnética urgente"
        },
        {
          "letter": "C",
          "text": "Inmovilizar con yeso en extensión por 6 semanas"
        },
        {
          "letter": "D",
          "text": "Reevaluar pulsos y función neurológica, controlar con radiografía y dejar férula braquiopalmar por un período corto"
        },
        {
          "letter": "E",
          "text": "Iniciar ejercicios de fuerza inmediatamente"
        }
      ],
      "correct": "D",
      "explanation": "Tras toda reducción de una luxación se debe reexaminar el estado neurovascular (la arteria braquial y los nervios mediano y cubital pueden quedar atrapados), confirmar la reducción con radiografía e inmovilizar brevemente en flexión, con movilización precoz para evitar rigidez. Inmovilizar en extensión o por largo tiempo produce rigidez.",
      "say": {
        "stem": "Hombre de treinta años con luxación posterior de codo, sin fracturas, que se reduce con tracción y flexión. Antes estaba indemne en pulsos y sensibilidad.",
        "question": "¿Qué hacer inmediatamente después de reducir?",
        "options": "Las opciones: alta sin inmovilizar, resonancia urgente, yeso en extensión por seis semanas, reevaluar pulsos y nervios con radiografía y férula breve o ejercicios de fuerza inmediatos. Piénsalo.",
        "answer": "Es la D. Siempre se reevalúa el estado neurovascular, se confirma con radiografía y se inmoviliza poco tiempo. El yeso prolongado tienta por dar seguridad, pero el codo se pone rígido con facilidad."
      }
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
