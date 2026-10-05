// Clase 12.1 (Traumatología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_traumatologia.cjs (trauma-01). Preguntas: banco real EUNACOM (class_questions.cjs --search).
// El banco real no tiene pregunta de estudio radiológico ni de indicaciones quirúrgicas: se usan 2 casos del libro, rotulados "Caso representativo".

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'trauma-01',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cómo se sospecha, se inmoviliza y se decide el tratamiento de una fractura',
      say: 'Bienvenido a Traumatología. Esta primera clase es la base de todo el libro: los principios generales de las fracturas. Vamos a ver cómo se sospecha una fractura, qué se hace antes de mirar el hueso, cómo se inmoviliza, cuándo se opera y qué puede fallar en la consolidación. Son conceptos simples, pero el examen los usa en casi todas las preguntas de trauma.',
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'Cómo se sospecha una fractura',
      cards: [
        { title: 'Signos clásicos', tag: 'Diagnóstico clínico', kind: 'key', items: [
          { t: 'Dolor intenso en el foco', d: 'Aumenta al movilizar',
            say: 'El diagnóstico de una fractura es clínico, y la imagen lo confirma. El primer signo es un dolor intenso, localizado en el foco, que aumenta cuando movilizas la zona.' },
          { t: 'Deformidad y desviación de ejes', d: 'Cambia la anatomía normal del miembro',
            say: 'Después viene la deformidad: el miembro pierde su eje normal. Si además hay equimosis y aumento de volumen, estás viendo el hematoma de la fractura y la inflamación de las partes blandas.' },
          { t: 'Impotencia funcional', d: 'No puede usar la extremidad',
            say: 'La impotencia funcional es la incapacidad de usar la extremidad. Junto con el dolor y la deformidad, completa el cuadro típico.' },
          { t: 'Crepitación ósea', d: 'Signo más característico',
            say: 'El signo más característico es la crepitación: el roce de los fragmentos, que se siente o se escucha. Pero ojo con esto: no la busques a propósito ni con fuerza, porque puedes dañar vasos, nervios y partes blandas.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo inicial',
      title: 'Antes del hueso, el ABC',
      cards: [
        { title: 'Protocolo ATLS', tag: 'Primero la vida', kind: 'alert', items: [
          { t: 'A: vía aérea y columna cervical', d: 'Collar si hay trauma axial',
            say: 'Antes de enfocarte en la fractura evidente, haces el manejo general del trauma. La A es la vía aérea con control de la columna cervical, con collar cervical si sospechas un trauma axial.' },
          { t: 'B: ventilación y oxigenación', d: 'Respirar bien',
            say: 'La B es la ventilación y la oxigenación adecuadas.' },
          { t: 'C: circulación y hemodinamia', d: 'Fémur y pelvis sangran mucho',
            say: 'La C es la circulación. Aquí está la trampa: una fractura de pelvis o de fémur puede dar una gran hemorragia interna y shock hipovolémico. Un fémur puede perder hasta un litro y medio de sangre. Nunca te quedes mirando la extremidad si el paciente está hipotenso.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Estudio y primeras medidas',
      title: 'Evaluar, inmovilizar y radiografiar',
      cards: [
        { title: 'En la extremidad', tag: 'Rutina obligatoria', kind: 'criteria', items: [
          { t: 'Examen neurovascular distal', d: 'Pulsos, llene capilar, sensibilidad y motilidad',
            say: 'Primero, la evaluación neurovascular distal: pulsos, llene capilar, sensibilidad y motilidad. Se hace antes y después de inmovilizar o reducir. Así detectas a tiempo una lesión y no te culpan después de haberla causado.' },
          { t: 'Inmovilización provisoria inmediata', d: 'Alinear y fijar en posición',
            say: 'Segundo, la inmovilización provisoria inmediata. Alivia el dolor y evita más daño de partes blandas mientras se completa el estudio.' },
          { t: 'Analgesia escalonada', d: 'Paracetamol, AINE u opioide',
            say: 'La analgesia es escalonada: paracetamol más antiinflamatorio, y opioide si hace falta. Pero fíjate: un dolor refractario o desproporcionado no es un problema de analgesia, es una alarma de síndrome compartimental.' },
        ] },
        { title: 'En la imagen', tag: 'Dos proyecciones', kind: 'key', items: [
          { t: 'Radiografía AP y lateral', d: 'Dos proyecciones perpendiculares',
            say: 'Para confirmar, toda fractura necesita radiografías en al menos dos proyecciones perpendiculares: anteroposterior y lateral. Una sola proyección puede esconder el desplazamiento.' },
          { t: 'Incluir articulación proximal y distal', d: 'Sin perder luxaciones asociadas',
            say: 'Y la radiografía incluye la articulación de arriba y la de abajo del hueso, para no perder una luxación o una fractura asociada.' },
          { t: 'TAC si hay rasgo articular', d: 'Define el desplazamiento y el plan',
            say: 'Si el rasgo llega a la articulación, o hay luxación asociada, se complementa con un escáner.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'gallery',
      kicker: 'Así se ve',
      title: 'Inmovilizar y cuidar la piel',
      images: [
        { src: 'biblioteca/18_traumatologia/trauma-01/01_ferula-fractura-tobillo__atls_p217.jpg', label: 'Férula de yeso posterior y en estribo en fractura de tobillo', credit: 'ATLS 10.ª ed., Fig. 8-10' },
        { src: 'biblioteca/18_traumatologia/trauma-01/02_piel-palida-luxofractura-tobillo__atls_p209.jpg', label: 'Tobillo deformado con piel pálida y tensa', credit: 'ATLS 10.ª ed., Fig. 8-5' },
      ],
      steps: [
        { note: 'Férula acolchada, no yeso circular',
          say: 'Esta es una inmovilización provisoria bien hecha: férulas de yeso con mucho acolchado, sujetas con una venda elástica. Se deja una férula, no un yeso circular, porque el miembro se va a hinchar. Esa idea la vamos a necesitar en la clase de síndrome compartimental.' },
        { note: 'Piel pálida: reducir pronto',
          say: 'Y aquí un tobillo luxado con la piel pálida y tensa sobre el maléolo. Una piel así se necrosa rápido. Por eso se reduce pronto y se vuelve a revisar la circulación y los nervios después de la maniobra.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Cuándo una fractura se opera',
      cards: [
        { title: 'Por el trazo', tag: 'Indicación quirúrgica', kind: 'criteria', items: [
          { t: 'Rasgo intraarticular', d: 'Un escalón milimétrico lleva a artrosis precoz',
            say: 'No todas las fracturas van a pabellón. Si el rasgo compromete la superficie articular, tiene que quedar perfectamente alineado, porque un pequeño escalón produce artrosis postraumática precoz.' },
          { t: 'Desplazada e irreductible', d: 'No se alinea con maniobras externas',
            say: 'Si está muy desplazada y no se logra alinear con maniobras externas, o sea con reducción cerrada, se opera.' },
          { t: 'Conminuta', d: 'Hueso astillado en muchos fragmentos',
            say: 'La fractura conminuta, con el hueso astillado, tiene mucho riesgo de fallar en la unión.' },
          { t: 'Segmentaria', d: 'Dos rasgos y un segmento flotante',
            say: 'La segmentaria tiene al menos dos rasgos en el mismo hueso, y deja un segmento flotante con riesgo de problemas de vascularización.' },
        ] },
        { title: 'Por la situación', tag: 'Urgencia o inestabilidad', kind: 'alert', items: [
          { t: 'Fractura expuesta', d: 'Urgencia quirúrgica',
            say: 'La fractura expuesta es una urgencia quirúrgica. Necesita aseo prolijo y estabilización para prevenir la osteomielitis. La vemos completa en la próxima clase.' },
          { t: 'Inestable', d: 'Se reduce y no se mantiene con yeso',
            say: 'Y la fractura inestable es la que, aunque la reduzcas, no se mantiene en posición con un yeso.' },
          { t: 'Más energía, más complicaciones', d: 'Peor daño de partes blandas',
            say: 'Una regla que sirve para todo: cuanto mayor es la energía del trauma y el daño de músculo, piel y vasos, más probable es que se necesite cirugía y que la consolidación se complique.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Consolidación',
      title: 'Cuando el hueso no pega bien',
      nodes: [
        { id: 'fr', col: 0, row: 1, k: 'start', t: 'Fractura tratada', s: 'Se espera consolidación' },
        { id: 'ok', col: 1, row: 0, k: 'good', t: 'Consolida en posición funcional', s: 'Objetivo del tratamiento' },
        { id: 'ps', col: 1, row: 2, k: 'risk', t: 'Pseudoartrosis', s: 'El hueso no pega' },
        { id: 'at', col: 2, row: 1, k: 'effect', t: 'Atrófica', s: 'Falta biología o sangre' },
        { id: 'hi', col: 2, row: 3, k: 'effect', t: 'Hipertrófica', s: 'Falta estabilidad' },
        { id: 'vi', col: 1, row: 4, k: 'trap', t: 'Consolidación viciosa', s: 'Pega, pero mal ubicado' },
      ],
      edges: [
        { from: 'fr', to: 'ok' },
        { from: 'fr', to: 'ps' },
        { from: 'ps', to: 'at' },
        { from: 'ps', to: 'hi' },
        { from: 'fr', to: 'vi' },
      ],
      steps: [
        { show: ['fr', 'ok'], note: 'El objetivo: pegar bien alineado',
          say: 'El tratamiento busca la consolidación ósea en una posición funcional adecuada. Eso es lo normal, y es lo que intentamos con la inmovilización o con la cirugía.' },
        { show: ['ps', 'at', 'hi'], note: 'No-unión: una falsa articulación',
          say: 'La primera falla es la pseudoartrosis, o no-unión: el hueso simplemente no pega y se forma una falsa articulación en el foco. Si es atrófica, falta biología, o sea sangre. Si es hipertrófica, lo que falta es estabilidad.' },
        { show: ['vi'], note: 'Mala unión: angulado, rotado o cabalgado',
          say: 'La segunda es la consolidación viciosa: el hueso sí pega, pero en una posición incorrecta, angulado, rotado o cabalgado. Puede dejar limitación funcional o un problema estético. La diferencia que se pregunta es simple: en la pseudoartrosis no pega, en la viciosa pega mal.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Enfrentamiento de una fractura',
      head: ['Paso', 'Qué se hace', 'Alarma', 'Conducta'],
      rows: [
        { cells: ['Evaluación inicial', 'Energía del trauma y deformidad', 'Compromiso neurovascular distal', 'Inmovilización provisoria inmediata'],
          say: 'Esta tabla resume la clase. En la evaluación inicial pesas la energía del trauma y buscas deformidad. Si hay compromiso neurovascular distal, inmovilizas de inmediato y no esperas.' },
        { cells: ['Radiología', 'AP y lateral', 'Rasgo articular o luxación', 'Reducción precoz o TAC'],
          say: 'En radiología, siempre dos proyecciones. Si el rasgo es articular o hay una luxación asociada, se reduce pronto o se pide un escáner.' },
        { cells: ['Analgesia', 'Paracetamol, AINE u opioide', 'Dolor refractario o desproporcionado', 'Sospechar síndrome compartimental'],
          say: 'En la analgesia, la alarma es el dolor que no cede o que es desproporcionado. Eso te hace sospechar un síndrome compartimental.' },
        { cells: ['Cirugía', 'Desplazada, inestable o expuesta', 'Lesión vascular o nerviosa aguda', 'Cirugía urgente'],
          say: 'Y la cirugía se indica por desplazamiento inaceptable, inestabilidad o exposición. Si hay lesión vascular o nerviosa aguda, la cirugía es urgente.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol completo: del paciente con sospecha de fractura hasta el tratamiento.',
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Un hombre de 28 años es atropellado. Llega con dolor intenso y deformidad del muslo derecho. Presión arterial 82/50 mmHg, frecuencia cardíaca 128 por minuto, piel fría y sudorosa. Está consciente, con vía aérea permeable.',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Radiografías de fémur AP y lateral antes de cualquier otra medida' },
        { letter: 'B', text: 'Cirugía inmediata de osteosíntesis sin otra evaluación' },
        { letter: 'C', text: 'Manejo ABC con reposición de volumen e inmovilización provisoria' },
        { letter: 'D', text: 'Yeso circular e indicar control ambulatorio' },
        { letter: 'E', text: 'Analgesia oral y observación' },
      ],
      correct: 'C',
      explanation: 'Un fémur puede perder hasta 1,5 litros de sangre, y este paciente está en shock hipovolémico. Primero va el ABC: reposición de volumen y control de la hemorragia, con inmovilización provisoria. La radiografía y la cirugía vienen después de estabilizarlo.',
      say: {
        stem: 'Un hombre de veintiocho años atropellado, con dolor y deformidad del muslo derecho. Presión ochenta y dos sobre cincuenta, frecuencia cardíaca ciento veintiocho, piel fría y sudorosa. Está consciente y con vía aérea permeable.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: radiografías de fémur antes de todo; cirugía inmediata; manejo ABC con reposición de volumen e inmovilización provisoria; yeso circular y control ambulatorio; o analgesia oral y observación. Piénsalo.',
        answer: 'Es la C. Está en shock, y un fémur puede perder hasta un litro y medio de sangre. Primero se estabiliza la circulación y se inmoviliza. La A es tentadora porque es lo que haces con toda fractura, pero la radiografía no puede ir antes que la hemodinamia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un hombre de 30 años llega a urgencias tras un accidente de tránsito con dolor e impotencia funcional en el antebrazo derecho, con deformidad visible y crepitación al examen.',
      question: '¿Cuál es el diagnóstico y el estudio inicial?',
      options: [
        { letter: 'A', text: 'Contusión de antebrazo; ecografía de partes blandas' },
        { letter: 'B', text: 'Fractura de antebrazo; radiografías anteroposterior y lateral' },
        { letter: 'C', text: 'Luxación de codo; TAC de antebrazo' },
        { letter: 'D', text: 'Fractura de antebrazo; solo radiografía anteroposterior' },
        { letter: 'E', text: 'Contusión grave; solo analgesia y observación' },
      ],
      correct: 'B',
      explanation: 'Dolor, deformidad, impotencia funcional y crepitación son la clínica clásica de fractura. Se confirma con radiografías en dos proyecciones, anteroposterior y lateral. Una sola proyección no basta.',
      say: {
        stem: 'Un hombre de treinta años, tras un accidente de tránsito, con dolor e impotencia funcional del antebrazo derecho, deformidad visible y crepitación.',
        question: '¿Cuál es el diagnóstico y el estudio inicial?',
        options: 'Las opciones: contusión con ecografía; fractura con radiografías anteroposterior y lateral; luxación de codo con escáner; fractura con solo una proyección; o contusión grave con analgesia. Piénsalo.',
        answer: 'Es la B. La crepitación con deformidad es una fractura, no una contusión. Y el estudio inicial son dos proyecciones. La D es la trampa: tiene el diagnóstico correcto, pero una sola proyección puede esconder el desplazamiento.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un paciente tiene una fractura de pierna con el hueso muy desplazado, irreductible por maniobra ortopédica, y con múltiples fragmentos conminutos.',
      question: '¿Cuál es la conducta?',
      options: [
        { letter: 'A', text: 'Inmovilización con yeso e indicar control en dos semanas' },
        { letter: 'B', text: 'Cirugía con reducción y osteosíntesis' },
        { letter: 'C', text: 'Tracción continua por cuatro semanas y luego yeso' },
        { letter: 'D', text: 'Observación porque las fracturas de pierna siempre consolidan solas' },
        { letter: 'E', text: 'Inmovilización con órtesis funcional por seis semanas' },
      ],
      correct: 'B',
      explanation: 'Una fractura muy desplazada, irreductible y conminuta tiene indicación quirúrgica clara: reducción y osteosíntesis. Con yeso solo hay alto riesgo de pseudoartrosis y consolidación viciosa.',
      say: {
        stem: 'Un paciente con una fractura de pierna muy desplazada, irreductible con maniobras ortopédicas, y con múltiples fragmentos.',
        question: '¿Cuál es la conducta?',
        options: 'Las opciones: yeso y control en dos semanas; cirugía con reducción y osteosíntesis; tracción por cuatro semanas; observación; u órtesis funcional por seis semanas. Piénsalo.',
        answer: 'Es la B. Desplazada, irreductible y conminuta: tres criterios quirúrgicos juntos. La D es falsa: una fractura conminuta no consolida sola, tiene alto riesgo de pseudoartrosis y de consolidación viciosa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 138',
      stem: 'Un paciente de 21 años sufre accidente en esquí con caída y torsión del tobillo derecho, evolucionando con dolor e impotencia funcional. Se solicita radiografía de tobillo que muestra una luxofractura.',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Reposo con extremidad en elevación' },
        { letter: 'B', text: 'Reducción cerrada e inmovilización con valva de yeso' },
        { letter: 'C', text: 'Analgésicos y apoyo progresivo con mínima carga' },
        { letter: 'D', text: 'Vendaje compresivo' },
        { letter: 'E', text: 'Tracción e inmovilización con yeso de la extremidad' },
      ],
      correct: 'B',
      explanation: 'Es una luxofractura de tobillo, de manejo quirúrgico. Mientras tanto, el manejo inicial es analgesia, reducción cerrada e inmovilización transitoria con valva de yeso abierta, para evitar un síndrome compartimental. Aplica a otras fracturas desplazadas que esperan cirugía.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veinticinco. Un paciente de veintiún años se tuerce el tobillo esquiando, con dolor e impotencia funcional. La radiografía muestra una luxofractura.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: reposo con elevación; reducción cerrada e inmovilización con valva de yeso; analgésicos y apoyo progresivo; vendaje compresivo; o tracción con yeso. Piénsalo.',
        answer: 'Es la B. La luxofractura se termina operando, pero mientras tanto se reduce y se inmoviliza con una valva abierta, que deja espacio para que el miembro se hinche y previene el síndrome compartimental. Es lo mismo que viste en la imagen de la férula, y sirve para toda fractura desplazada que espera cirugía.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 35',
      stem: 'Un paciente de 23 años sufre una caída jugando fútbol, cayendo con el hombro derecho contra el piso, con una luxación anterior de hombro derecho confirmada con radiografías, que descartan fracturas.',
      question: '¿Qué evaluación debe realizarse obligatoriamente en el examen físico antes de proceder con las maniobras de reducción?',
      options: [
        { letter: 'A', text: 'Buscar presencia de equimosis' },
        { letter: 'B', text: 'Buscar deformación en "charretera"' },
        { letter: 'C', text: 'Explorar la sensibilidad de la zona deltoidea' },
        { letter: 'D', text: 'Evaluar la impotencia funcional' },
        { letter: 'E', text: 'Evaluar crépito óseo' },
      ],
      correct: 'C',
      explanation: 'La luxación anterior se asocia a lesión del nervio axilar, que da la sensibilidad de la zona deltoidea. Se debe registrar su estado antes de reducir, para que no se atribuya después a la maniobra. Las demás opciones ya se evaluaron con la clínica y la radiografía.',
      say: {
        stem: 'Otra pregunta real del EUNACOM de diciembre de dos mil veinticinco. Un paciente de veintitrés años con una luxación anterior de hombro, confirmada con radiografías que descartan fracturas.',
        question: '¿Qué evaluación es obligatoria antes de reducir?',
        options: 'Las opciones: buscar equimosis; buscar la deformidad en charretera; explorar la sensibilidad de la zona deltoidea; evaluar la impotencia funcional; o buscar crépito. Piénsalo.',
        answer: 'Es la C. Es la regla de la evaluación neurovascular antes y después de reducir. La luxación anterior puede lesionar el nervio axilar, y su sensibilidad se explora en el deltoides. Si no lo registras antes, después te culpan de haberlo dañado con la maniobra.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 103',
      stem: 'Un paciente sufre una fractura de húmero derecho, que es manejada mediante reducción quirúrgica y osteosíntesis. Al quinto día, evoluciona con parestesias y dolor de la extremidad, asociada a imposibilidad de extender la muñeca.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Síndrome compartimental' },
        { letter: 'B', text: 'Compresión del nervio mediano' },
        { letter: 'C', text: 'Lesión del nervio musculocutáneo' },
        { letter: 'D', text: 'Atrapamiento del nervio cubital' },
        { letter: 'E', text: 'Lesión del nervio radial' },
      ],
      correct: 'E',
      explanation: 'Es la afectación clásica del nervio radial, que está en estrecho contacto con la diáfisis humeral. No poder extender la muñeca es la clave.',
      say: {
        stem: 'Una pregunta real del EUNACOM de agosto de dos mil veintiuno. Un paciente operado de una fractura de húmero, que al quinto día tiene parestesias, dolor y no puede extender la muñeca.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: síndrome compartimental; compresión del nervio mediano; lesión del musculocutáneo; atrapamiento del cubital; o lesión del nervio radial. Piénsalo.',
        answer: 'Es la E. El nervio radial recorre la diáfisis del húmero, así que una fractura o una cirugía ahí lo daña, y el signo es no poder extender la muñeca. Por eso en toda fractura se examina la función nerviosa distal antes y después de tratarla.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: fracturas',
      cards: [
        { title: 'Primero y siempre', tag: 'Seguridad', kind: 'alert', items: [
          { t: 'ABC antes que el hueso', d: 'Fémur y pelvis dan shock hipovolémico',
            say: 'Cerremos con las reglas de oro. Primero el ABC: una fractura de fémur o de pelvis puede dejar al paciente en shock, y eso va antes que cualquier radiografía.' },
          { t: 'Neurovascular antes y después', d: 'De inmovilizar o reducir',
            say: 'Segundo, examina pulsos, llene capilar, sensibilidad y motilidad antes y después de inmovilizar o reducir.' },
        ] },
        { title: 'Estudio y decisión', tag: 'Para el examen', kind: 'key', items: [
          { t: 'Radiografía en dos proyecciones', d: 'AP y lateral, con articulaciones vecinas',
            say: 'Tercero, toda fractura se estudia con dos proyecciones, anteroposterior y lateral.' },
          { t: 'Se opera la expuesta o inestable', d: 'Intraarticular, irreductible, conminuta, segmentaria',
            say: 'Cuarto, se opera la fractura expuesta, la intraarticular, la irreductible, la conminuta, la segmentaria y la inestable.' },
          { t: 'Pseudoartrosis: no pega; viciosa: pega mal', d: 'Más energía, más complicaciones',
            say: 'Y la pseudoartrosis es que no pega, mientras que la viciosa es que pega mal. Si te llevas una sola idea de hoy: primero la vida, después el hueso, y siempre revisa los nervios y la circulación. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de la fractura: sospecha, estudio y tratamiento',
    root: N('start', 'Sospecha de fractura', 'Dolor, deformidad, impotencia funcional',
      'Un paciente con dolor, deformidad e impotencia funcional tras un trauma. Lo primero no es el hueso: es el estado general.',
      ['Inestable hemodinámicamente', N('alert', 'ABC del trauma', 'Fémur y pelvis: shock hipovolémico',
        'Si hay hipotensión, manejas primero la vía aérea, la ventilación y la circulación. Un fémur puede perder hasta un litro y medio de sangre.')],
      ['Estable', N('do', 'Examen neurovascular e inmovilización', 'Analgesia y radiografía AP y lateral',
        'Si está estable, evalúas pulsos, llene capilar, sensibilidad y motilidad. Inmovilizas, das analgesia y pides radiografías en dos proyecciones.',
        ['Dolor desproporcionado o pérdida neurovascular', N('refer', 'Sospechar síndrome compartimental', 'Cirugía traumatológica de urgencia',
          'Un dolor refractario o un compromiso neurovascular agudo exige descartar un síndrome compartimental y derivar para cirugía urgente.')],
        ['Expuesta, desplazada irreductible, conminuta, segmentaria, intraarticular o inestable', N('refer', 'Cirugía: reducción y osteosíntesis', 'Aseo quirúrgico si es expuesta',
          'Si cumple un criterio quirúrgico, se deriva a cirugía con reducción y osteosíntesis. La fractura expuesta además requiere aseo quirúrgico.')],
        ['Estable, sin desplazamiento inaceptable', N('ok', 'Inmovilización con valva y control', 'Valva abierta, no yeso circular',
          'Una fractura estable y bien alineada se trata con inmovilización, con valva y control, y se vigila la consolidación.')],
      )],
    ),
  },
};
