// Clase 12.6 (Traumatología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_traumatologia.cjs (trauma-06).
// OJO: el título del libro (trauma raquimedular, ASIA, shock neurogénico) no coincide con su contenido, que trata de las complicaciones
// de la consolidación (retardo, pseudoartrosis, mala unión; código 4.01.2.020). Se sigue el contenido del libro. No se inventa trauma raquimedular.
// El banco real no tiene preguntas de pseudoartrosis ni de consolidación: se usan 3 casos del libro, rotulados "Caso representativo".

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'trauma-06',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuando la fractura no consolida bien: retardo, pseudoartrosis y mala unión',
      say: 'Bienvenido. Hoy hablamos del final de la historia de una fractura: la consolidación. El objetivo es que el hueso se una, pero a veces se demora, a veces nunca se une, y a veces se une mal. Son tres problemas distintos, con manejos distintos, y el examen te pide que los separes. Para eso te voy a dar tres preguntas guía: cuánto duele, si el foco se mueve y si el hueso está pegado.',
    },

    {
      type: 'flow',
      kicker: 'Panorama',
      title: 'Tres formas de fallar al consolidar',
      nodes: [
        { id: 'fx', col: 0, row: 1, k: 'start', t: 'Fractura tratada', s: 'Se espera consolidación' },
        { id: 're', col: 1, row: 0, k: 'risk', t: 'Retardo de consolidación', s: 'Tarda, pero puede consolidar' },
        { id: 'ps', col: 1, row: 1, k: 'alert', t: 'Pseudoartrosis', s: 'La curación se detuvo' },
        { id: 'mu', col: 1, row: 2, k: 'effect', t: 'Mala unión', s: 'Consolida en mala posición' },
        { id: 'tr', col: 2, row: 0, k: 'good', t: 'Mejorar inmovilización', s: 'Y quitar factores' },
        { id: 'ci', col: 2, row: 1, k: 'refer', t: 'Cirugía', s: 'No consolida sola' },
        { id: 'os', col: 2, row: 2, k: 'refer', t: 'Osteotomía correctora', s: 'Si el defecto es inaceptable' },
      ],
      edges: [
        { from: 'fx', to: 're' },
        { from: 'fx', to: 'ps' },
        { from: 'fx', to: 'mu' },
        { from: 're', to: 'tr' },
        { from: 'ps', to: 'ci' },
        { from: 'mu', to: 'os' },
      ],
      steps: [
        { show: ['fx', 're', 'tr'], note: 'Retardo: lento, pero aún consolida',
          say: 'El retardo de consolidación es un proceso de curación que dura más de lo esperado para esa fractura y esa localización, pero que conserva la capacidad de consolidar por sí solo si eliminas lo que lo frena. Se maneja mejorando las condiciones.' },
        { show: ['ps', 'ci'], note: 'Pseudoartrosis: fracaso definitivo',
          say: 'La pseudoartrosis es el fracaso definitivo: la curación se detuvo por completo y no ocurrirá sin una cirugía.' },
        { show: ['mu', 'os'], note: 'Mala unión: el hueso sí se pegó',
          say: 'Y en la mala unión, o consolidación viciosa, el hueso sí consolida, pero en una posición incorrecta. Si el defecto es funcionalmente inaceptable, se corrige con una osteotomía.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Retardo de consolidación',
      title: 'El hueso aún puede consolidar',
      cards: [
        { title: 'Clínica', tag: 'Dolor que persiste', kind: 'key', items: [
          { t: 'Dolor persistente en el foco', d: 'Más tiempo del habitual',
            say: 'La clave del retardo es el dolor. A diferencia de una consolidación normal, el dolor en el foco de fractura persiste más tiempo de lo habitual. Y el hueso conserva su capacidad de consolidar.' },
        ] },
        { title: 'Causas', tag: 'Lo que frena el callo', kind: 'alert', items: [
          { t: 'Inmovilización inadecuada', d: 'Micromovimientos impiden estabilizar el callo',
            say: 'La causa principal es una inmovilización inadecuada. El exceso de micromovimientos impide que el callo óseo se estabilice.' },
          { t: 'Uso de AINEs', d: 'Frenan la inflamación que inicia el callo',
            say: 'Los antiinflamatorios no esteroideos pueden reducir el flujo de sangre al hueso y bloquear las prostaglandinas, que reclutan las células que forman hueso en las etapas iniciales del callo.' },
          { t: 'Tabaquismo, diabetes, desnutrición', d: 'Factores sistémicos',
            say: 'También influyen factores del paciente: tabaquismo, diabetes y desnutrición. Si los corriges, el hueso puede seguir su camino.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Pseudoartrosis',
      title: 'El hueso dejó de intentar',
      cards: [
        { title: 'Clínica', tag: 'Falsa articulación', kind: 'alert', items: [
          { t: 'Movilidad anormal sin dolor', d: 'Signo patognomónico',
            say: 'El signo patognomónico es la movilidad anormal en el foco de fractura, indolora o poco dolorosa. Es como si se hubiera formado una falsa articulación.' },
          { t: 'Casi no hay dolor', d: 'Molestia leve al cargar peso',
            say: 'El dolor agudo ya desapareció. A lo más queda una molestia leve al cargar peso. Esta es la diferencia con el retardo, donde el dolor persiste.' },
          { t: 'Partes blandas entre los extremos', d: 'Fibrosis o músculo impiden la unión',
            say: 'Entre los extremos óseos se interpone tejido fibroso o muscular, que impide físicamente la unión.' },
        ] },
        { title: 'Conducta', tag: 'Siempre quirúrgico', kind: 'key', items: [
          { t: 'No consolidará sin cirugía', d: 'Tratamiento quirúrgico',
            say: 'La curación se detuvo por completo y no va a ocurrir sin una intervención quirúrgica. Por eso el tratamiento de una pseudoartrosis es siempre quirúrgico.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tipos de pseudoartrosis',
      title: 'Hipertrófica o atrófica',
      cards: [
        { title: 'Hipertrófica', tag: 'Hay vida, falta quietud', kind: 'key', items: [
          { t: 'Causa: mala inmovilización', d: 'Exceso de movilidad',
            say: 'En la pseudoartrosis hipertrófica el hueso sí quiere consolidar, y forma mucho hueso, pero hay demasiado movimiento y no logra cerrar el puente. La causa es una mala inmovilización.' },
          { t: 'Radiografía: pata de elefante', d: 'Extremos óseos ensanchados',
            say: 'En la radiografía, los extremos se ven ensanchados, en pata de elefante. Esa imagen es la pista del examen.' },
        ] },
        { title: 'Atrófica', tag: 'No hay vida', kind: 'alert', items: [
          { t: 'Causa: mala irrigación o hueso patológico', d: 'Isquemia, infección',
            say: 'En la pseudoartrosis atrófica ocurre lo contrario: no hay vida ni energía biológica suficiente. La causa es mala irrigación sanguínea o un hueso patológico, como una isquemia o una infección.' },
          { t: 'Radiografía: punta de lápiz', d: 'Extremos adelgazados y redondeados',
            say: 'La radiografía muestra los extremos adelgazados, redondeados o en punta de lápiz.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Consolidación viciosa',
      title: 'Mala unión: pegó, pero chueco',
      cards: [
        { title: 'Clínica', tag: 'El hueso sí consolidó', kind: 'key', items: [
          { t: 'Deformidad visible, sin dolor', d: 'Angulación, rotación o acortamiento',
            say: 'En la mala unión el hueso consolida, pero en una posición incorrecta: con angulación, rotación o acortamiento. Se ve la deformidad, el miembro chueco, y ya no duele, porque el hueso pegó.' },
          { t: 'Limitación funcional', d: 'Y dolor en articulaciones vecinas',
            say: 'Puede haber limitación funcional según el grado de desviación, y dolor en las articulaciones vecinas por una mala distribución de las cargas.' },
        ] },
        { title: 'Causa y manejo', tag: 'Osteotomía', kind: 'alert', items: [
          { t: 'Mala reducción o pérdida de ella', d: 'Nunca se alineó o se desplazó después',
            say: 'La causa es una mala reducción inicial, o una pérdida de la reducción: estaba bien alineada, pero se desplazó durante la inmovilización y no se corrigió a tiempo.' },
          { t: 'Osteotomía correctora si es inaceptable', d: 'Cortar, reducir y fijar',
            say: 'Si la deformidad es funcionalmente inaceptable, se opera con una osteotomía correctora, también llamada cirugía de refractura: se corta el hueso consolidado, se reduce de forma anatómica y se estabiliza con osteosíntesis.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Retardo, pseudoartrosis y mala unión',
      head: ['Cuadro', 'Dolor', 'Foco', 'Conducta'],
      rows: [
        { cells: ['Retardo de consolidación', 'Persistente', 'Callo en maduración', 'Mejorar inmovilización'],
          say: 'Esta tabla separa los tres cuadros. Retardo: dolor persistente, callo todavía en maduración, y se mejora la inmovilización.' },
        { cells: ['Pseudoartrosis', 'Casi ausente', 'Movilidad anormal', 'Cirugía'],
          say: 'Pseudoartrosis: casi sin dolor, con movilidad anormal en el foco, y se opera.' },
        { cells: ['Mala unión', 'Ausente', 'Consolidado y desviado', 'Osteotomía si es inaceptable'],
          say: 'Mala unión: sin dolor, el hueso está consolidado pero desviado, y se corrige con osteotomía si el defecto es funcionalmente inaceptable.' },
        { cells: ['Hipertrófica versus atrófica', 'Casi ausente', 'Pata de elefante o punta de lápiz', 'Cirugía'],
          say: 'Y dentro de la pseudoartrosis: pata de elefante es hipertrófica, por mala inmovilización; punta de lápiz es atrófica, por mala irrigación o hueso patológico. No confundas no unión con mala unión.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol completo: de la fractura que no evoluciona bien al diagnóstico y la conducta.',
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Un hombre de 55 años, fumador y diabético, tuvo una fractura de tibia manejada con yeso hace 8 meses. Consulta porque nota que "se mueve" el sitio de la fractura, casi sin dolor. La radiografía muestra los extremos óseos adelgazados, redondeados, en punta de lápiz.',
      question: '¿Cuál es el diagnóstico y la causa más probable?',
      options: [
        { letter: 'A', text: 'Retardo de consolidación; inmovilización inadecuada' },
        { letter: 'B', text: 'Pseudoartrosis hipertrófica; mala inmovilización' },
        { letter: 'C', text: 'Pseudoartrosis atrófica; mala irrigación' },
        { letter: 'D', text: 'Consolidación viciosa; mala reducción inicial' },
        { letter: 'E', text: 'Consolidación normal; no requiere estudio' },
      ],
      correct: 'C',
      explanation: 'La movilidad anormal casi sin dolor orienta a pseudoartrosis. Los extremos adelgazados en punta de lápiz corresponden a la forma atrófica, por mala irrigación sanguínea, y el tabaquismo y la diabetes la favorecen. La hipertrófica se ve con extremos ensanchados en pata de elefante.',
      say: {
        stem: 'Un hombre de cincuenta y cinco años, fumador y diabético, con una fractura de tibia tratada con yeso hace ocho meses. Nota que el sitio de la fractura se mueve y casi no duele. La radiografía muestra los extremos óseos adelgazados, redondeados, en punta de lápiz.',
        question: '¿Cuál es el diagnóstico y la causa más probable?',
        options: 'Las opciones: retardo de consolidación; pseudoartrosis hipertrófica; pseudoartrosis atrófica por mala irrigación; consolidación viciosa; o consolidación normal. Piénsalo.',
        answer: 'Es la C. Movilidad anormal casi sin dolor es pseudoartrosis, no retardo. Y la punta de lápiz marca la forma atrófica, por mala irrigación, que el tabaco y la diabetes favorecen. La hipertrófica tendría los extremos ensanchados, en pata de elefante, y la causa sería mala inmovilización.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un paciente con fractura de tibia en yeso desde hace cuatro meses sigue con dolor leve en el foco de fractura. La radiografía muestra callo óseo en formación pero sin terminar de consolidar.',
      question: '¿Cuál es el diagnóstico y la conducta?',
      options: [
        { letter: 'A', text: 'Pseudoartrosis; cirugía para remover partes blandas' },
        { letter: 'B', text: 'Retraso de consolidación; mejorar la inmovilización' },
        { letter: 'C', text: 'Consolidación viciosa; cirugía de refractura' },
        { letter: 'D', text: 'Pseudoartrosis atrófica; tratamiento de la mala irrigación' },
        { letter: 'E', text: 'Osteomielitis; antibióticos endovenosos' },
      ],
      correct: 'B',
      explanation: 'El retraso de consolidación se presenta con dolor persistente más allá del tiempo normal y callo en maduración en la radiografía. El tratamiento es mejorar la inmovilización, que era la causa. La pseudoartrosis tiene movilidad anormal y poco dolor.',
      say: {
        stem: 'Un paciente con una fractura de tibia en yeso desde hace cuatro meses sigue con dolor leve en el foco. La radiografía muestra un callo en formación, pero sin terminar de consolidar.',
        question: '¿Cuál es el diagnóstico y la conducta?',
        options: 'Las opciones: pseudoartrosis con cirugía; retraso de consolidación mejorando la inmovilización; consolidación viciosa con refractura; pseudoartrosis atrófica; o osteomielitis con antibióticos. Piénsalo.',
        answer: 'Es la B. Hay dolor persistente y un callo que todavía madura: es un retardo, y el hueso aún puede consolidar. Se mejora la inmovilización, que era la causa. La pseudoartrosis tendría movilidad anormal y casi sin dolor, y la osteomielitis traería fiebre y secreción.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un paciente con fractura de fémur tratada hace seis meses presenta movilidad anormal en el muslo y ausencia de dolor. La radiografía muestra los extremos óseos hipertróficos como pata de elefante con partes blandas interpuestas.',
      question: '¿Cuál es el diagnóstico y el tratamiento?',
      options: [
        { letter: 'A', text: 'Retraso de consolidación; mejorar la inmovilización' },
        { letter: 'B', text: 'Pseudoartrosis hipertrófica; cirugía para remover partes blandas' },
        { letter: 'C', text: 'Consolidación viciosa; refractura quirúrgica' },
        { letter: 'D', text: 'Pseudoartrosis atrófica; tratamiento de la irrigación' },
        { letter: 'E', text: 'Fractura patológica; descartar tumor óseo' },
      ],
      correct: 'B',
      explanation: 'La pseudoartrosis hipertrófica tiene movilidad anormal sin dolor, extremos óseos en pata de elefante y partes blandas interpuestas, causada por mala inmovilización. El tratamiento es siempre quirúrgico.',
      say: {
        stem: 'Un paciente con una fractura de fémur tratada hace seis meses tiene movilidad anormal en el muslo y no le duele. La radiografía muestra los extremos óseos hipertróficos, en pata de elefante, con partes blandas interpuestas.',
        question: '¿Cuál es el diagnóstico y el tratamiento?',
        options: 'Las opciones: retraso de consolidación; pseudoartrosis hipertrófica con cirugía; consolidación viciosa con refractura; pseudoartrosis atrófica; o fractura patológica. Piénsalo.',
        answer: 'Es la B. Movilidad anormal sin dolor, pata de elefante y partes blandas interpuestas: pseudoartrosis hipertrófica, causada por mala inmovilización. El tratamiento es quirúrgico, y como la causa fue el exceso de movimiento, el foco tiene que quedar bien estabilizado. La D es la trampa: atrófica se ve con extremos adelgazados.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un paciente con fractura de antebrazo tratada hace tres meses consulta por deformidad del antebrazo sin dolor. La radiografía muestra consolidación completa pero con desviación de los ejes.',
      question: '¿Cuál es el diagnóstico y el tratamiento?',
      options: [
        { letter: 'A', text: 'Retraso de consolidación; mejorar inmovilización' },
        { letter: 'B', text: 'Pseudoartrosis; cirugía para remover partes blandas' },
        { letter: 'C', text: 'Consolidación viciosa; cirugía de refractura con nueva reducción' },
        { letter: 'D', text: 'Fractura patológica; estudio de causa subyacente' },
        { letter: 'E', text: 'Consolidación normal; alta sin tratamiento' },
      ],
      correct: 'C',
      explanation: 'La consolidación viciosa es un hueso consolidado de forma desviada, sin dolor, por mala reducción o mala inmovilización. El tratamiento es la refractura quirúrgica con nueva reducción e inmovilización adecuada, cuando la deformidad es funcionalmente inaceptable.',
      say: {
        stem: 'Un paciente con una fractura de antebrazo tratada hace tres meses consulta por una deformidad del antebrazo, sin dolor. La radiografía muestra consolidación completa, pero con desviación de los ejes.',
        question: '¿Cuál es el diagnóstico y el tratamiento?',
        options: 'Las opciones: retraso de consolidación; pseudoartrosis con cirugía; consolidación viciosa con refractura y nueva reducción; fractura patológica; o consolidación normal con alta. Piénsalo.',
        answer: 'Es la C. El hueso ya consolidó, pero desviado: mala unión. La clave es la consolidación completa. El tratamiento es una osteotomía correctora, la cirugía de refractura, cuando la deformidad es funcionalmente inaceptable. Y la E es falsa: una desviación de los ejes no es una consolidación normal.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: consolidación',
      cards: [
        { title: 'Tres preguntas guía', tag: 'Para el examen', kind: 'key', items: [
          { t: '¿Duele? Retardo', d: 'Dolor persistente, callo en maduración',
            say: 'Cerremos con las reglas de oro. Frente a un hueso que no evoluciona bien, hazte tres preguntas. Si duele y hay callo en maduración, es un retardo de consolidación, y se mejora la inmovilización.' },
          { t: '¿Se mueve sin dolor? Pseudoartrosis', d: 'Falsa articulación; cirugía',
            say: 'Si el foco se mueve casi sin dolor, es una pseudoartrosis, y se opera.' },
          { t: '¿Está pegado y chueco? Mala unión', d: 'Osteotomía si es inaceptable',
            say: 'Y si el hueso está consolidado pero desviado, es una mala unión, y se corrige con osteotomía cuando el defecto es funcionalmente inaceptable.' },
        ] },
        { title: 'Tipos de pseudoartrosis', tag: 'Radiografía', kind: 'alert', items: [
          { t: 'Pata de elefante: hipertrófica', d: 'Mala inmovilización',
            say: 'Para los tipos, mira la radiografía. Pata de elefante es hipertrófica, por mala inmovilización.' },
          { t: 'Punta de lápiz: atrófica', d: 'Mala irrigación o hueso patológico',
            say: 'Y punta de lápiz es atrófica, por mala irrigación o hueso patológico. Si te llevas una sola idea de hoy: duele es retardo, se mueve sin dolor es pseudoartrosis, y consolidó chueco es mala unión. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de la fractura que no evoluciona bien',
    root: N('start', 'Fractura sin buena evolución', '¿Duele? ¿Se mueve? ¿Está pegada?',
      'Un paciente con una fractura tratada hace semanas o meses que no evoluciona como se esperaba. Te haces tres preguntas: si duele, si el foco se mueve y si el hueso ya está pegado.',
      ['Dolor persistente, callo en maduración', N('do', 'Retardo de consolidación', 'Aún puede consolidar solo',
        'Con dolor persistente y un callo todavía en maduración, es un retardo de consolidación.',
        ['Buscar la causa', N('ok', 'Mejorar la inmovilización', 'Suspender AINEs; corregir tabaco y diabetes',
          'Se mejora la inmovilización y se corrigen los factores: AINEs, tabaquismo, diabetes y desnutrición.')],
      )],
      ['Movilidad anormal, casi sin dolor', N('alert', 'Pseudoartrosis', 'Falsa articulación',
        'Si el foco se mueve casi sin dolor, es una pseudoartrosis. No va a consolidar sin cirugía.',
        ['Extremos ensanchados', N('refer', 'Hipertrófica: cirugía', 'Pata de elefante; mala inmovilización',
          'Con pata de elefante es hipertrófica, causada por mala inmovilización, y se opera.')],
        ['Extremos adelgazados', N('refer', 'Atrófica: cirugía', 'Punta de lápiz; mala irrigación',
          'Con punta de lápiz es atrófica, por mala irrigación o hueso patológico, y se opera.')],
      )],
      ['Consolidada pero desviada', N('do', 'Mala unión', 'Deformidad sin dolor',
        'Si el hueso está consolidado, pero desviado, y no duele, es una mala unión.',
        ['Defecto funcionalmente inaceptable', N('refer', 'Osteotomía correctora', 'Cortar, reducir y fijar',
          'Si el defecto es funcionalmente inaceptable, se hace una osteotomía correctora, la cirugía de refractura: cortar, reducir de forma anatómica y estabilizar con osteosíntesis.')],
      )],
    ),
  },
};
