// Clase 16.4 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_dermatologia_bloque_1.cjs (derma-04).
// Pregunta real EUNACOM: node classes/scripts/class_questions.cjs derma-04
// -> EUNACOM Diciembre 2018 · Pregunta 151 (código 6.01.1.002, confianza 0.95).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'derma-04',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'La primera pregunta es si el orificio folicular sigue ahí',
      say: 'Bienvenidos. Cerramos el bloque de semiología y anexos cutáneos con las alopecias, un motivo de consulta que angustia mucho al paciente y que en el examen se ordena con una sola mirada: buscar el orificio folicular. Con eso separas lo que es reversible de lo que no lo es, y después entramos a las tres causas no cicatriciales más frecuentes: la androgenética, la areata, y el efluvio telógeno. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'La gran división',
      title: '¿El orificio folicular sigue ahí?',
      nodes: [
        { id: 'con', col: 0, row: 1, k: 'start', t: 'Paciente con pérdida de cabello', s: 'Primero, examinar el cuero cabelludo' },
        { id: 'noc', col: 1, row: 0, k: 'good', t: 'Orificios conservados', s: 'Folículo vivo dentro de la piel' },
        { id: 'rev', col: 2, row: 0, k: 'effect', t: 'No cicatricial', s: 'Potencialmente reversible' },
        { id: 'cic', col: 1, row: 2, k: 'risk', t: 'Piel lisa, sin orificios', s: 'Folículo destruido por fibrosis' },
        { id: 'irr', col: 2, row: 2, k: 'alert', t: 'Cicatricial', s: 'Irreversible, de por vida' },
      ],
      edges: [
        { from: 'con', to: 'noc' }, { from: 'noc', to: 'rev' },
        { from: 'con', to: 'cic' }, { from: 'cic', to: 'irr' },
      ],
      steps: [
        { show: ['con'], note: 'Un solo gesto que ordena todo el diagnóstico',
          say: 'Frente a cualquier paciente que consulta por pérdida de cabello, la primera tarea no es adivinar la causa: es examinar el cuero cabelludo buscando los orificios foliculares.' },
        { show: ['noc'], note: 'El folículo sigue vivo',
          say: 'Si los orificios están conservados, significa que el folículo piloso sigue vivo e íntegro dentro de la dermis.' },
        { show: ['rev'], note: 'El pelo puede volver',
          say: 'Y eso hace que la alopecia sea no cicatricial: el pelo puede volver a crecer si se elimina la causa. Aquí están la androgenética, la areata y el efluvio telógeno, que vamos a ver hoy.' },
        { show: ['cic'], note: 'La piel se ve lisa y brillante',
          say: 'En cambio, si la piel se ve lisa, brillante y atrófica, con desaparición total de los orificios foliculares, hay un proceso inflamatorio que arrasó el folículo y sus células madre, reemplazándolo por tejido fibroso.' },
        { show: ['irr'], note: 'No vuelve a crecer',
          say: 'Esa es la alopecia cicatricial, y es irreversible: ese pelo no vuelve a crecer nunca. Causas como el lupus discoide o el liquen plano pilar exigen biopsia e inmunosupresión precoz, porque cada semana que pasa es folículo que se pierde para siempre.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Alopecia androgenética',
      title: 'La causa más frecuente en ambos sexos',
      cards: [
        { title: 'Mecanismo', tag: 'Dihidrotestosterona', kind: 'key', items: [
          { t: 'Miniaturización folicular', d: 'Por la enzima 5-alfa reductasa tipo 2',
            say: 'Es la causa más prevalente de alopecia. La dihidrotestosterona, producida por la enzima cinco alfa reductasa tipo dos, acorta la fase de crecimiento del pelo y lo va miniaturizando: pelos terminales gruesos se transforman en vellos finos y despigmentados.' },
        ] },
        { title: 'Patrones', tag: 'Distinto en cada sexo', kind: 'criteria', items: [
          { t: 'Masculino: entradas y vértice', d: 'Escala de Hamilton-Norwood',
            say: 'En el hombre, el patrón es el retroceso de la línea frontotemporal, las entradas, y la pérdida en la coronilla.' },
          { t: 'Femenino: raya central ensanchada', d: 'Escala de Ludwig, respeta la línea frontal',
            say: 'En la mujer, en cambio, es una pérdida difusa de densidad en el vértex con ensanchamiento de la raya central, el signo del árbol de navidad, pero respetando la línea de implantación frontal. Esa diferencia de patrón entre hombre y mujer se pregunta.' },
        ] },
        { title: 'Tratamiento', tag: 'Minoxidil y finasteride', kind: 'pharma', items: [
          { t: 'Minoxidil tópico', d: 'Al 2 o 5 por ciento, estimula el anágeno',
            say: 'El tratamiento de primera línea combina minoxidil tópico, un vasodilatador que estimula la fase de crecimiento y aumenta el calibre del pelo.' },
          { t: 'Finasteride oral', d: 'Contraindicado en mujeres fértiles por teratogenicidad',
            say: 'Y finasteride oral, que inhibe esa cinco alfa reductasa y baja la dihidrotestosterona en gran parte. Pero está contraindicado en mujeres en edad fértil, por el riesgo de feminizar a un feto masculino.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Alopecia areata',
      title: 'Una placa lisa, con pelos en signo de exclamación',
      nodes: [
        { id: 'aut', col: 0, row: 1, k: 'cause', t: 'Ataque autoinmune', s: 'Linfocitos T CD8 contra el folículo' },
        { id: 'pla', col: 1, row: 0, k: 'effect', t: 'Placa alopécica', s: 'Redonda, lisa, piel normal' },
        { id: 'exc', col: 1, row: 2, k: 'effect', t: 'Pelos en signo de exclamación', s: 'Cortos, delgados en la base' },
        { id: 'sev', col: 2, row: 1, k: 'risk', t: 'Formas severas', s: 'Total o universal' },
        { id: 'tto', col: 3, row: 1, k: 'good', t: 'Corticoide intralesional', s: 'Triamcinolona' },
      ],
      edges: [
        { from: 'aut', to: 'pla' }, { from: 'aut', to: 'exc' },
        { from: 'pla', to: 'sev', label: 'si progresa' }, { from: 'sev', to: 'tto' }, { from: 'exc', to: 'tto' },
      ],
      steps: [
        { show: ['aut'], note: 'Autoinmune, en fase de crecimiento',
          say: 'La alopecia areata es una enfermedad autoinmune: linfocitos T que atacan al folículo mientras está en su fase de crecimiento.' },
        { show: ['pla'], note: 'Sin descamación ni eritema',
          say: 'La clínica es muy reconocible: una o varias placas alopécicas redondeadas u ovaladas, de piel completamente lisa y normal, sin descamación ni eritema.' },
        { show: ['exc'], note: 'El signo patognomónico',
          say: 'Y el signo patognomónico está en el borde activo de la placa: pelos en signo de exclamación, cortos, fracturados, más delgados en su base que en la punta.' },
        { show: ['sev'], note: 'Frecuente asociación autoinmune',
          say: 'En sus formas más severas puede perderse todo el cabello del cuero cabelludo, la alopecia total, o todo el vello corporal, la alopecia universal. Se asocia con frecuencia a tiroiditis autoinmune o a vitíligo, así que conviene tamizarlos.' },
        { show: ['tto'], note: 'Primera línea para placas localizadas',
          say: 'El tratamiento de primera línea para las placas localizadas es la infiltración intralesional de corticoide, acetónido de triamcinolona, o un corticoide tópico de muy alta potencia.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Efluvio telógeno',
      title: 'Caída difusa después de un estrés fisiológico',
      cards: [
        { title: 'Mecanismo y gatillante', tag: '2 a 3 meses antes', kind: 'criteria', items: [
          { t: 'Paso sincrónico a telógeno', d: 'Muchos folículos pasan de golpe a la fase de caída',
            say: 'El efluvio telógeno agudo es el paso prematuro y sincrónico de muchos folículos, todos juntos, desde la fase de crecimiento a la fase de caída.' },
          { t: 'Parto, cirugía, fiebre alta', d: 'O déficit de fierro o baja de peso brusca',
            say: 'Aparece de dos a tres meses después de un estresor fisiológico intenso: un parto, una cirugía mayor, una infección febril grave, un déficit de fierro severo, o una baja de peso brusca.' },
        ] },
        { title: 'Clínica y conducta', tag: 'Benigno y autolimitado', kind: 'normal', items: [
          { t: 'Caída masiva y difusa', d: 'Prueba de tracción positiva en toda la cabeza',
            say: 'La clínica es una caída masiva y difusa al peinarse o lavarse el pelo, con la prueba de tracción positiva en todo el cuero cabelludo, y sin placas circunscritas.' },
          { t: 'Tranquilizar; se resuelve solo', d: 'En unos 6 meses, sin tratamiento invasivo',
            say: 'Es un cuadro completamente benigno y autolimitado: se resuelve solo en unos seis meses, y la conducta es tranquilizar al paciente, no partir con tratamientos invasivos.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos las tres causas no cicatriciales en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Androgenética vs areata vs efluvio telógeno',
      head: ['Característica', 'Androgenética', 'Areata', 'Efluvio telógeno'],
      rows: [
        { cells: ['Patrón', 'Entradas y coronilla, o raya ensanchada', 'Placas redondas bien delimitadas', 'Caída difusa de todo el cuero cabelludo'],
          say: 'Repasemos en una tabla. El patrón: la androgenética da entradas y coronilla en el hombre, o raya ensanchada en la mujer; la areata da placas redondas bien delimitadas; el efluvio da una caída difusa, sin placas.' },
        { cells: ['Signo clave', 'Miniaturización folicular', 'Pelos en signo de exclamación', 'Prueba de tracción positiva difusa'],
          say: 'El signo clave: miniaturización en la androgenética, pelos en signo de exclamación en la areata, y tracción positiva y difusa en el efluvio.' },
        { cells: ['Tratamiento', 'Minoxidil + finasteride', 'Corticoide intralesional', 'Tranquilizar; resolución espontánea'],
          say: 'Y el tratamiento: minoxidil y finasteride en la androgenética, corticoide intralesional en la areata, y en el efluvio, solo tranquilizar, porque se resuelve solo. El error clásico es tratar el efluvio como si fuera areata o androgenética, cuando no necesita ningún fármaco.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 32 años consulta 3 meses después de dar a luz, porque nota caída masiva del cabello al peinarse y en la almohada. Al examen no hay placas alopécicas circunscritas; el cuero cabelludo es normal, con orificios foliculares conservados, y la prueba de tracción es positiva de forma difusa en toda la cabeza.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar minoxidil tópico al 5 % de inmediato' },
        { letter: 'B', text: 'Solicitar biopsia de cuero cabelludo con urgencia' },
        { letter: 'C', text: 'Tranquilizar a la paciente y explicar que se resolverá en unos meses' },
        { letter: 'D', text: 'Indicar corticoide intralesional en el vértex' },
        { letter: 'E', text: 'Iniciar finasteride oral 1 mg al día' },
      ],
      correct: 'C',
      explanation: 'Caída difusa, sin placas circunscritas, con tracción positiva generalizada y 3 meses después del parto: efluvio telógeno agudo puerperal. Es benigno y autolimitado; la conducta es tranquilizar a la paciente. La biopsia es para la alopecia cicatricial, el corticoide intralesional para la areata, y el minoxidil o el finasteride para la androgenética; ninguno corresponde aquí.',
      say: {
        stem: 'Vamos al caso. Mujer de treinta y dos años que consulta tres meses después de dar a luz, porque nota que se le cae mucho el pelo al peinarse y en la almohada. Al examen no hay placas alopécicas, el cuero cabelludo es normal, con los orificios foliculares conservados, y la prueba de tracción es positiva en toda la cabeza, de forma difusa.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: minoxidil tópico de inmediato, biopsia urgente, tranquilizar y explicar que se resolverá sola, corticoide intralesional, o finasteride oral. Piénsalo.',
        answer: 'Es la C. Caída difusa, sin placas, con tracción positiva generalizada, y a los tres meses del parto: es un efluvio telógeno puerperal, benigno y autolimitado. La biopsia sería para una alopecia cicatricial, que aquí no existe, porque los orificios están conservados. El corticoide intralesional es para la areata, que necesita placas redondas que este caso no tiene. Y el minoxidil o el finasteride son para la androgenética, de pérdida progresiva, no para esta caída aguda y difusa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 151',
      stem: 'Un paciente de 19 años consulta por caída de cabello en la zona occipital, que inició hace 2 semanas. Al examen físico se aprecia una zona sin cabellos, redondeada y de piel lisa, sin eritema ni descamación.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Lupus eritematoso cutáneo crónico' },
        { letter: 'B', text: 'Alopecia areata' },
        { letter: 'C', text: 'Alopecia androgénica' },
        { letter: 'D', text: 'Tricotilomanía' },
        { letter: 'E', text: 'Tiña capitis' },
      ],
      correct: 'B',
      explanation: 'Zona alopécica única, de aparición reciente, de piel lisa sin eritema ni descamación, en un joven de 19 años: alopecia areata. El lupus discoide es cicatricial y de curso más lento; la androgenética no aparece así de rápido ni en placa única a esta edad; la tricotilomanía muestra pelos rotos irregulares por arrancamiento; la tiña capitis suele tener descamación.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil dieciocho. Paciente de diecinueve años que consulta por una zona sin cabello en la región occipital, que notó hace dos semanas. Al examen se ve una zona redondeada, de piel lisa, sin eritema ni descamación.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: lupus eritematoso cutáneo crónico, alopecia areata, alopecia androgénica, tricotilomanía, o tiña capitis. Piénsalo.',
        answer: 'Es la B, alopecia areata. Una placa única, de aparición rápida, en un joven, con piel lisa y sin ningún signo inflamatorio, es el cuadro típico. El lupus discoide es cicatricial y de curso mucho más lento. La androgénica no da placas redondas de aparición súbita a esta edad. Y tanto la tricotilomanía como la tiña capitis suelen dejar pelos rotos o descamación, que aquí no se describen.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'La gran división', tag: 'Buscar el orificio', kind: 'key', items: [
          { t: 'Orificios conservados: reversible', d: 'Sin orificios: cicatricial, irreversible',
            say: 'Cerremos con las reglas de oro. Orificios foliculares conservados es potencialmente reversible; sin orificios es cicatricial e irreversible, y exige biopsia.' },
        ] },
        { title: 'Tres causas frecuentes', tag: 'No cicatriciales', kind: 'criteria', items: [
          { t: 'Androgenética: minoxidil + finasteride', d: 'Finasteride contraindicado en mujer fértil',
            say: 'La androgenética se trata con minoxidil y finasteride, salvo en la mujer en edad fértil, donde el finasteride está contraindicado.' },
          { t: 'Areata: corticoide intralesional', d: 'Pelos en signo de exclamación',
            say: 'La areata, con sus pelos en signo de exclamación, se trata con corticoide intralesional.' },
        ] },
        { title: 'Efluvio telógeno', tag: 'No se trata, se explica', kind: 'alert', items: [
          { t: 'Caída difusa 2 a 3 meses post-estrés', d: 'Autolimitado, se resuelve solo',
            say: 'Y el efluvio telógeno, dos a tres meses después de un estrés fisiológico, no necesita fármacos: se resuelve solo. Si te llevas una sola idea de hoy: primero busca el orificio, y después piensa en la causa. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Alopecia: del orificio folicular a la causa',
    root: N('start', 'Paciente con pérdida de cabello', 'Primero examina el cuero cabelludo',
      'Ante cualquier paciente con pérdida de cabello, antes de pensar en la causa, examina el cuero cabelludo buscando los orificios foliculares.',
      ['', N('q', '¿Hay orificios foliculares?', 'Conservados o ausentes',
        'Si los orificios están conservados, el folículo sigue vivo y la alopecia puede ser reversible. Si desaparecieron, hay fibrosis irreversible.',
        ['No, piel lisa sin orificios', N('alert', 'Alopecia cicatricial', 'Biopsia y tratamiento inmunosupresor precoz',
          'Piel lisa, brillante, sin orificios foliculares: alopecia cicatricial, como el lupus discoide o el liquen plano pilar. Es irreversible, y requiere biopsia y tratamiento precoz.')],
        ['Sí, orificios conservados', N('q', '¿Cuál es el patrón?', 'Progresivo · en placa · difuso agudo',
          'Con los orificios conservados, ahora hay que mirar el patrón de la caída para llegar a la causa.',
          ['Progresivo, en entradas o vértex', N('do', 'Alopecia androgenética', 'Minoxidil tópico + finasteride oral',
            'Pérdida progresiva por miniaturización, con el patrón de Hamilton-Norwood en el hombre o de Ludwig en la mujer: minoxidil tópico y finasteride oral, salvo en mujer fértil.')],
          ['Placa redonda, piel lisa', N('do', 'Alopecia areata', 'Corticoide intralesional (triamcinolona)',
            'Placa alopécica redonda, de piel lisa, con pelos en signo de exclamación en el borde: corticoide intralesional. Tamizar tiroiditis autoinmune y vitíligo.')],
          ['Caída difusa tras un estrés', N('ok', 'Efluvio telógeno agudo', 'Tranquilizar; resolución espontánea en 6 meses',
            'Caída difusa, con tracción positiva generalizada, dos a tres meses después de un parto, cirugía o fiebre alta: efluvio telógeno. Benigno, se resuelve solo.')])])]),
  },
};
