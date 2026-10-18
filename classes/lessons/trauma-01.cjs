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
          { t: 'Signos sutiles: almohadilla grasa', d: 'Codo: derrame que sugiere fractura oculta',
            photo: { src: 'biblioteca/18_traumatologia/trauma-01/24_codo-almohadilla-grasa__sherman_p770.jpg', label: 'Almohadilla grasa del codo', at: 'Mira esta radiografía de codo', credit: 'Sherman, Atlas of Clinical Emergency Medicine, p. 770' },
            say: 'Al informar una radiografía buscas también signos sutiles: una interrupción de la cortical, una línea radiolúcida o el rodete en el niño. Mira esta radiografía de codo: la flecha señala la almohadilla grasa posterior elevada, que es un derrame y sugiere una fractura oculta. Y si la radiografía sale normal pero la clínica es sugerente, inmovilizas como fractura y repites la imagen a los siete a diez días.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Inmovilización',
      title: 'Inmovilizar de urgencia: la valva',
      cards: [
        { title: 'Antes de trasladar', tag: 'Procedimiento', kind: 'criteria', items: [
          { t: 'Retirar anillos y reloj', d: 'Antes de que aparezca el edema',
            say: 'Toda sospecha de fractura se inmoviliza antes de mover al paciente. Primero retiras anillos, reloj y ropa ajustada, porque después del edema ya no salen.' },
          { t: 'Articulación proximal y distal', d: 'En la posición en que está',
            say: 'La inmovilización incluye la articulación de arriba y la de abajo del foco, en la posición en que se encuentra. Con analgesia, frío local y elevación, y el paciente en ayunas por si necesita pabellón.' },
          { t: 'Valva acolchada, no yeso circular', d: 'Deja espacio para el edema',
            photo: { src: 'biblioteca/18_traumatologia/trauma-01/01_ferula-fractura-tobillo__atls_p217.jpg', label: 'Valva posterior y en estribo', at: 'Mira esta inmovilización', credit: 'ATLS 10.ª ed., Fig. 8-10' },
            say: 'La inmovilización de elección en la urgencia es la valva de yeso. Mira esta inmovilización bien hecha: férulas con mucho acolchado, sujetas con una venda elástica sin apretar. Es una valva y no un yeso circular, porque el miembro se va a hinchar. El yeso circular se reserva para cuando el edema ya cedió, entre veinticuatro y setenta y dos horas después, y lo coloca el equipo de traumatología.' },
        ] },
        { title: 'Cuidar la piel y la circulación', tag: 'Alarma', kind: 'alert', items: [
          { t: 'Piel pálida y tensa', d: 'Reducir pronto y revisar pulsos',
            photo: { src: 'biblioteca/18_traumatologia/trauma-01/02_piel-palida-luxofractura-tobillo__atls_p209.jpg', label: 'Piel pálida sobre el maléolo', at: 'Y aquí un tobillo', credit: 'ATLS 10.ª ed., Fig. 8-5' },
            say: 'Y aquí un tobillo luxado con la piel pálida y tensa sobre el maléolo. Una piel así se necrosa rápido. Por eso se reduce pronto y se vuelve a revisar la circulación y los nervios después de la maniobra.' },
          { t: 'No se reduce en terreno', d: 'Tracción suave solo si no hay pulso',
            say: 'En terreno no se intenta reducir ni se reintroduce hueso expuesto. La única excepción es una extremidad muy angulada y sin pulso: ahí se alinea con tracción suave y continua, sin forzar.' },
        ] },
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
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Tratamiento ortopédico y complicaciones del yeso',
      cards: [
        { title: 'Si no se opera', tag: 'Cerrada, estable, extraarticular', kind: 'key', items: [
          { t: 'Reducción cerrada e inmovilización', d: 'Incluye la articulación proximal y la distal',
            say: 'Cuando no hay indicación quirúrgica, la fractura es cerrada, estable, poco desplazada y extraarticular, y el tratamiento es ortopédico. Si hay desplazamiento, se hace una reducción cerrada con tracción y contratracción, y se inmoviliza incluyendo la articulación de arriba y la de abajo.' },
          { t: 'Control radiográfico a los 5 a 7 días', d: 'El yeso se afloja al ceder el edema',
            say: 'A los cinco a siete días se repite la radiografía, porque al ceder el edema el yeso se afloja y la fractura puede desplazarse.' },
          { t: 'Retiro: 4 a 6 semanas, tibia 8 a 12', d: 'Más corto en niños; luego kinesiterapia',
            say: 'El yeso se retira a las cuatro a seis semanas en antebrazo y muñeca, y a las ocho a doce en la tibia, más corto en niños. Después viene la kinesiterapia para recuperar rango y fuerza. Típicamente ortopédicas son las fracturas del niño, de clavícula, de metacarpianos y de costillas.' },
        ] },
        { title: 'Complicaciones del yeso', tag: 'Se preguntan', kind: 'alert', items: [
          { t: 'Compartimental por yeso apretado', d: 'Abrir el yeso de inmediato',
            say: 'La complicación más grave es el síndrome compartimental por un yeso apretado: dolor desproporcionado que aumenta al estirar los dedos, parestesias y dedos fríos o azulados. La conducta es abrir el yeso de inmediato, cortando todas las capas, incluido el algodón, y reevaluar.' },
          { t: 'Úlcera por presión', d: 'Talón, maléolos, cabeza del peroné',
            say: 'Si hay dolor localizado bajo el yeso, mal olor o secreción, piensa en una úlcera por presión, y se hace una ventana o se cambia el yeso.' },
          { t: 'Nervio peroneo y cubital', d: 'Compresión en el peroné y en el codo',
            say: 'La compresión nerviosa afecta sobre todo al peroneo en la cabeza del peroné, y al cubital en el codo. Y no olvides la trombosis venosa profunda en la extremidad inferior. El paciente debe saber que dolor intenso o dedos fríos y azulados son motivo de consulta inmediata, después de elevar la extremidad.' },
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
      type: 'points',
      kicker: 'Dos fracturas de la muñeca',
      title: 'Colles y escafoides',
      cards: [
        { title: 'Radio distal', tag: 'Adulto mayor osteoporótico', kind: 'key', items: [
          { t: 'Colles: dorso de tenedor', d: 'Caída sobre la mano extendida',
            photos: [
              { src: 'biblioteca/18_traumatologia/trauma-01/21_colles-dorso-de-tenedor__sherman_p569.jpg', label: 'Dorso de tenedor', at: 'Mira esta muñeca', credit: 'Sherman, Atlas of Clinical Emergency Medicine, p. 569' },
              { src: 'biblioteca/18_traumatologia/trauma-01/22_radio-distal-rx__sherman_p569.jpg', label: 'Radio distal, AP y lateral', at: 'En estas radiografías', credit: 'Sherman, Atlas of Clinical Emergency Medicine, p. 569' },
            ],
            say: 'La fractura más frecuente del adulto mayor osteoporótico es la del radio distal, por caída sobre la mano extendida. Mira esta muñeca: el desplazamiento dorsal le da la forma de dorso de tenedor. Es la fractura de Colles. En estas radiografías ves el acortamiento del radio y la pérdida de la inclinación palmar. La de Smith es la inversa, con desplazamiento volar, y la de Barton compromete el borde articular.' },
          { t: 'Valva y buscar el mediano', d: 'Parestesias de los tres primeros dedos',
            say: 'El manejo inicial es analgesia, valva antebraquiopalmar, radiografías anteroposterior y lateral, y buscar compresión del nervio mediano. Si es estable y poco desplazada, yeso por cuatro a seis semanas; si es desplazada, inestable o intraarticular, se deriva para osteosíntesis.' },
        ] },
        { title: 'Escafoides', tag: 'Adulto joven', kind: 'alert', items: [
          { t: 'Dolor en la tabaquera anatómica', d: 'La radiografía inicial puede ser normal',
            photo: { src: 'biblioteca/18_traumatologia/trauma-01/23_escafoides-rx__sherman_p662.jpg', label: 'Escafoides en la radiografía', at: 'En esta radiografía', credit: 'Sherman, Atlas of Clinical Emergency Medicine, p. 662' },
            say: 'Un adulto joven que cae sobre la mano y duele en la tabaquera anatómica tiene un escafoides fracturado hasta que se demuestre lo contrario. En esta radiografía la fractura es sutil, y la imagen inicial puede incluso salir normal.' },
          { t: 'Espica de pulgar y repetir', d: 'Imagen a los 10 a 14 días o resonancia',
            say: 'Con clínica compatible, inmovilizas con yeso en espica de pulgar y repites la imagen a los diez a catorce días, o pides resonancia. Por su irrigación retrógrada, el polo proximal puede sufrir necrosis avascular y pseudoartrosis, así que toda fractura confirmada se deriva.' },
        ] },
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
        { cells: ['Muñeca y yeso', 'Colles o tabaquera dolorosa', 'Radiografía normal con clínica; dedos fríos bajo el yeso', 'Valva o espica y repetir imagen; abrir el yeso'],
          say: 'En la muñeca, una radiografía normal con la tabaquera dolorosa no descarta el escafoides: inmovilizas y repites la imagen. Y si los dedos se ponen fríos bajo el yeso, lo abres de inmediato.' },
        { cells: ['Cirugía', 'Desplazada, inestable o expuesta', 'Lesión vascular o nerviosa aguda', 'Cirugía urgente'],
          say: 'Y la cirugía se indica por desplazamiento inaceptable, inestabilidad o exposición. Si hay lesión vascular o nerviosa aguda, la cirugía es urgente.' },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'La valva de urgencia',
      images: [
        { src: 'animaciones/trauma-01/A1_valva_de_yeso.mp4', label: 'Valva acolchada que deja espacio al edema', credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Valva, no yeso circular',
          say: 'Mira la inmovilización de urgencia. Es una valva de yeso sobre un buen acolchado, sujeta con una venda elástica sin apretar, e incluye la articulación de arriba y la de abajo. Cuando el edema crece, la valva se abre y deja espacio. Un yeso circular, en cambio, aprieta y produce un síndrome compartimental. Antes y después de inmovilizar, revisa pulsos, llene capilar, sensibilidad y motilidad.' },
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
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.02.5.001 · Inmovilizaciones de urgencia",
      "stem": "Mujer de 34 años se cae de una bicicleta y llega al SAPU con dolor y deformidad en el tercio medio de la pierna izquierda. La piel está indemne, pulsos pedios presentes, llene capilar menor de 2 segundos y sensibilidad conservada. Debe ser trasladada al hospital, a 40 minutos.",
      "question": "¿Cuál es la inmovilización de urgencia más adecuada antes del traslado?",
      "options": [
        {
          "letter": "A",
          "text": "Yeso circular cerrado desde el muslo hasta el pie"
        },
        {
          "letter": "B",
          "text": "Vendaje elástico compresivo solo sobre el foco de fractura"
        },
        {
          "letter": "C",
          "text": "Férula que incluya la articulación proximal y distal (rodilla y tobillo), previa alineación suave y con control neurovascular antes y después"
        },
        {
          "letter": "D",
          "text": "No inmovilizar para no retrasar el traslado"
        },
        {
          "letter": "E",
          "text": "Reducción forzada bajo anestesia local y luego traslado sin férula"
        }
      ],
      "correct": "C",
      "explanation": "La inmovilización de urgencia debe incluir la articulación por encima y por debajo de la fractura, alinear con tracción suave, usar férulas acolchadas no circulares y registrar el estado neurovascular antes y después. El yeso circular en agudo está contraindicado por el edema y el riesgo de síndrome compartimental.",
      "say": {
        "stem": "Una mujer de treinta y cuatro años se cae en bicicleta y tiene deformidad en la mitad de la pierna izquierda, con piel indemne y buenos pulsos. Hay que trasladarla al hospital.",
        "question": "¿Cuál es la mejor inmovilización antes del traslado?",
        "options": "Las opciones: yeso circular cerrado, vendaje elástico solo en el foco, férula que incluya rodilla y tobillo con control neurovascular, no inmovilizar o reducción forzada sin férula. Piénsalo.",
        "answer": "Es la C. Se alinea suavemente y se usa una férula que tome la articulación de arriba y la de abajo, revisando pulsos y sensibilidad antes y después. El yeso circular tienta, pero en agudo el edema puede provocar un síndrome compartimental."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2025 · Pregunta 57",
      "stem": "Mujer de 40 años con fractura de muñeca que fue enyesada. 3 horas después refiere dolor intenso y progresivo en el antebrazo que no cede con analgesia, parestesias y sensación de tensión bajo el yeso.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Síndrome compartimental agudo"
        },
        {
          "letter": "B",
          "text": "Trombosis venosa profunda"
        },
        {
          "letter": "C",
          "text": "Reacción alérgica al yeso"
        },
        {
          "letter": "D",
          "text": "Fractura secundaria"
        },
        {
          "letter": "E",
          "text": "Distrofia simpática refleja"
        }
      ],
      "correct": "A",
      "explanation": "Dolor desproporcionado que no cede con analgesia, parestesias y tensión bajo un yeso recién puesto sugieren síndrome compartimental agudo. Es una emergencia: abrir o retirar el yeso de inmediato y, si no mejora, fasciotomía. La pérdida de pulso es un signo tardío.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil veinticinco. A una mujer de cuarenta años le enyesan una fractura de muñeca. Tres horas después tiene dolor intenso y creciente en el antebrazo que no cede con analgésicos, hormigueo y sensación de tensión bajo el yeso.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: síndrome compartimental agudo, trombosis venosa profunda, alergia al yeso, fractura secundaria o distrofia simpática refleja. Piénsalo.",
        "answer": "Es la A. Dolor desproporcionado, parestesias y tensión bajo un yeso reciente son un síndrome compartimental, y hay que retirar el yeso de inmediato. La distrofia simpática refleja tienta por el dolor, pero aparece semanas después, no a las tres horas."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.5.032 · Vendajes e inmovilizaciones con férulas",
      "stem": "Hombre de 30 años sufre una fractura de radio distal no desplazada hace 3 horas. Presenta edema moderado de la muñeca y antebrazo. Se decide tratamiento ortopédico.",
      "question": "¿Cuál es la inmovilización inicial más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Yeso circular cerrado ajustado"
        },
        {
          "letter": "B",
          "text": "Sin inmovilización, con analgesia"
        },
        {
          "letter": "C",
          "text": "Vendaje elástico compresivo exclusivo"
        },
        {
          "letter": "D",
          "text": "Férula (valva) de yeso antebraquiopalmar, no circular, con extremidad elevada"
        },
        {
          "letter": "E",
          "text": "Yeso braquiopalmar circular cerrado"
        }
      ],
      "correct": "D",
      "explanation": "En una fractura aguda con edema, la inmovilización inicial debe ser una férula o valva no circular, que inmoviliza las articulaciones vecinas y permite el aumento de volumen sin comprimir, previniendo un síndrome compartimental. Se indica elevar la extremidad, mover los dedos y vigilar dolor y perfusión; el yeso circular se coloca cuando cede el edema.",
      "say": {
        "stem": "Hombre de treinta años con una fractura no desplazada del radio distal de tres horas de evolución, con edema moderado de muñeca y antebrazo, que se tratará en forma ortopédica.",
        "question": "¿Cuál es la inmovilización inicial más adecuada?",
        "options": "Las opciones: yeso circular cerrado ajustado, sin inmovilización, solo vendaje elástico, férula de yeso no circular con la extremidad elevada o yeso circular desde el brazo. Piénsalo.",
        "answer": "Es la D. En una fractura reciente con edema se usa una férula no circular, que deja espacio para que se hinche sin comprimir. El yeso circular tienta porque inmoviliza mejor, pero con el edema puede apretar y provocar un síndrome compartimental."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2018 · Pregunta 141",
      "stem": "Paciente de 70 años sufre una caída a nivel, con apoyo de la extremidad superior en extensión contra el suelo. Evoluciona con dolor en la muñeca que le impide moverla. Consulta al día siguiente con la muñeca deformada en \"dorso de tenedor\", equimosis palmar y dorsal, y dolor a la compresión del radio distal.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Esguince de muñeca"
        },
        {
          "letter": "B",
          "text": "Fractura de la epífisis distal del radio"
        },
        {
          "letter": "C",
          "text": "Disyunción del extremo distal del radio"
        },
        {
          "letter": "D",
          "text": "Luxofractura de Monteggia"
        },
        {
          "letter": "E",
          "text": "Fractura de escafoides carpiano"
        }
      ],
      "correct": "B",
      "explanation": "Adulto mayor que cae sobre la mano en extensión y presenta deformidad en dorso de tenedor tiene una fractura de radio distal con desplazamiento dorsal (Colles), típica de hueso osteoporótico. La disyunción ocurre en niños con fisis abierta; el escafoides duele en la tabaquera anatómica sin esta deformidad.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil dieciocho. Paciente de setenta años que cae sobre la mano extendida y queda con la muñeca deformada en dorso de tenedor y dolor en el radio distal.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: esguince, fractura de la epífisis distal del radio, disyunción del radio distal, Monteggia o fractura de escafoides. Piénsalo.",
        "answer": "Es la B. La deformidad en dorso de tenedor tras caer sobre la mano extendida es la fractura de radio distal tipo Colles. La disyunción tienta, pero solo ocurre en niños con el cartílago de crecimiento abierto."
      }
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
