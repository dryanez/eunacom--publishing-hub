// Clase ped-07 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_pediatria_bloque_2.cjs (id "ped-07").

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-07',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'La taquipnea, la edad y una dosis de amoxicilina que se pregunta siempre',
      say: 'Bienvenido. Hoy vemos neumonía adquirida en la comunidad en el niño, y este tema tiene una particularidad: casi no necesitas exámenes para diagnosticarla, porque un solo signo, bien medido, te basta. Además vamos a fijar una dosis exacta que se repite en el examen una y otra vez, así que ten papel a mano. Empecemos.',
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico',
      title: 'Un signo que reemplaza cualquier examen',
      nodes: [
        { id: 'inf', col: 0, row: 0, k: 'cause', t: 'Fiebre y tos', s: 'El motivo de consulta' },
        { id: 'taq', col: 1, row: 0, k: 'q', t: '¿Respira rápido para su edad?', s: 'El signo más sensible' },
        { id: 'dx', col: 2, row: 0, k: 'effect', t: 'Neumonía', s: 'Diagnóstico clínico' },
        { id: 'rx', col: 3, row: 0, k: 'refer', t: 'Radiografía', s: 'Solo con duda o gravedad' },
      ],
      edges: [
        { from: 'inf', to: 'taq' }, { from: 'taq', to: 'dx', label: 'sí, según su edad' }, { from: 'dx', to: 'rx' },
      ],
      steps: [
        { show: ['inf'], note: 'El punto de partida',
          say: 'Este niño llega igual que cualquier otro cuadro respiratorio: con fiebre y tos. Lo que tienes que hacer de inmediato es contar la frecuencia respiratoria.' },
        { show: ['taq'], note: 'El umbral cambia con la edad',
          say: 'Y aquí está el signo que ordena todo el tema: la taquipnea según la edad, definida por la organización mundial de la salud. Este umbral baja a medida que el niño crece, así que tienes que memorizarlo por tramos de edad, no como un número único.' },
        { show: ['dx'], note: 'Sin necesidad de ningún examen',
          say: 'Si el niño tiene fiebre, tos y taquipnea para su edad, más algún hallazgo focal al auscultar, como crépitos localizados, ya tienes el diagnóstico de neumonía. Es clínico, y esto lo digo porque el examen ama tentarte con pedir exámenes que no hacen falta.' },
        { show: ['rx'], note: 'No es el primer paso',
          say: 'La radiografía de tórax se reserva para cuando hay duda diagnóstica, criterios de hospitalización, sospecha de una complicación, o cuando el niño no responde al tratamiento después de cuarenta y ocho horas. En la atención primaria, con clínica leve a moderada y un niño previamente sano, ni siquiera hace falta pedirla para partir el tratamiento.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Los números que definen taquipnea',
      cards: [
        { title: 'Menores de un año', tag: 'Umbral OMS', kind: 'criteria', items: [
          { t: 'Menos de dos meses', d: 'Sesenta o más por minuto',
            say: 'Vamos con los números. En el menor de dos meses, taquipnea es sesenta respiraciones por minuto o más.' },
          { t: 'De dos a once meses', d: 'Cincuenta o más por minuto',
            say: 'Entre los dos y los once meses, el corte baja a cincuenta o más.' },
        ] },
        { title: 'Preescolares y escolares', tag: 'Umbral OMS', kind: 'criteria', items: [
          { t: 'Uno a cuatro años', d: 'Cuarenta o más por minuto',
            say: 'De uno a cuatro años, cuarenta o más.' },
          { t: 'Cinco años o más', d: 'Treinta o más por minuto',
            say: 'Y desde los cinco años, el corte ya se parece al del adulto joven: treinta o más. Fíjate en la lógica: mientras más pequeño el niño, más rápido respira de forma normal, así que el umbral para llamarlo taquipnea también es más alto.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Etiología',
      title: 'El germen cambia según la edad',
      nodes: [
        { id: 'rn', col: 0, row: 0, k: 'risk', t: 'Recién nacido', s: 'Estreptococo grupo B, E. coli, Listeria' },
        { id: 'la', col: 1, row: 0, k: 'risk', t: 'Uno a tres meses', s: 'Clamidia: tos y ojo rojo al nacer' },
        { id: 'pe', col: 2, row: 0, k: 'good', t: 'Tres meses a cinco años', s: 'Neumococo: la bacteria clásica' },
        { id: 'es', col: 3, row: 0, k: 'alert', t: 'Mayor de cinco años', s: 'Mycoplasma: la atípica' },
      ],
      edges: [
        { from: 'rn', to: 'la' }, { from: 'la', to: 'pe' }, { from: 'pe', to: 'es' },
      ],
      steps: [
        { show: ['rn'], note: 'Los mismos gérmenes del parto',
          say: 'El germen que buscas depende muchísimo de la edad. En el recién nacido, piensa en los mismos que causan sepsis neonatal: estreptococo del grupo B, bacterias entéricas como la escherichia coli, y listeria. Y por esa misma razón, en este grupo el tratamiento nunca es amoxicilina sola, sino un esquema hospitalario que cubra a todos esos gérmenes.' },
        { show: ['la'], note: 'Ojo con el antecedente de conjuntivitis',
          say: 'Entre el mes y los tres meses, aparece un germen particular: la clamidia trachomatis, que da una neumonía afebril, con tos entrecortada, y casi siempre precedida por una conjuntivitis neonatal a los diez o quince días de vida. Ese antecedente es la pista que el examen te va a dar, y si la ves, ya puedes anticipar la respuesta antes de leer las alternativas.' },
        { show: ['pe'], note: 'La bacteria que domina esta edad',
          say: 'Entre los tres meses y los cinco años, aunque los virus son los más frecuentes en general, la bacteria clásica que tienes que dominar es el neumococo, el estreptococo pneumoniae.' },
        { show: ['es'], note: 'Cambia el cuadro y cambia el fármaco',
          say: 'Y desde los cinco años, empiezan a aparecer los gérmenes atípicos: mycoplasma pneumoniae y clamidia pneumoniae, con un cuadro más insidioso, tos seca prolongada, y síntomas que no son solo del pulmón, como dolor de cabeza o dolores musculares.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Radiografía',
      title: 'Cuando sí la pides, qué esperas ver',
      cards: [
        { title: 'Consolidación lobar', tag: 'Neumonía típica', kind: 'criteria', items: [
          { t: 'Foco denso, con broncograma', d: 'Es la imagen del neumococo',
            say: 'Cuando sí terminas pidiendo la radiografía, conviene que sepas qué esperar según el germen. La consolidación lobar, con broncograma aéreo, es la imagen típica del neumococo: un foco denso y bien delimitado, que coincide con lo que ya escuchaste al examinar al niño.' },
        ] },
        { title: 'Infiltrado intersticial', tag: 'Viral o atípica', kind: 'criteria', items: [
          { t: 'Difuso, peribronquial', d: 'Neumonía viral o por mycoplasma',
            say: 'En cambio, un infiltrado intersticial difuso, peribronquial, o una hiperinsuflación, apuntan a un virus o a un germen atípico como el mycoplasma. Fíjate que esta diferencia radiológica va de la mano con la diferencia clínica que ya vimos: foco localizado y purulento en la típica, cuadro difuso e insidioso en la atípica.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'La dosis que se pregunta siempre',
      cards: [
        { title: 'Ambulatorio', tag: 'Primera línea', kind: 'pharma', items: [
          { t: 'Amoxicilina en dosis alta', d: 'Ochenta a noventa por kilo, al día',
            say: 'El tratamiento ambulatorio de primera línea es amoxicilina oral, y la dosis es alta: ochenta a noventa miligramos por kilo al día, dividida cada ocho o cada doce horas, por siete días completos, sin acortarlo aunque el niño mejore antes.' },
          { t: '¿Por qué tan alta?', d: 'Para vencer la resistencia del neumococo',
            say: 'Y esto se pregunta seguido: ¿por qué tan alta, si en el adulto la dosis es menor? Porque en Chile hay cepas de neumococo con resistencia intermedia, y esa dosis alta satura los receptores de la bacteria y la vence igual.' },
        ] },
        { title: 'Hospitalizado', tag: 'Sin complicaciones', kind: 'pharma', items: [
          { t: 'Ampicilina endovenosa', d: 'Ciento cincuenta a doscientos por kilo',
            say: 'Si el niño está hospitalizado sin complicaciones, el fármaco de primera línea es ampicilina endovenosa, en dosis de ciento cincuenta a doscientos miligramos por kilo al día. Y si el lactante no está vacunado, la infección se ve grave, o sospechas resistencia, se prefiere cefotaxima endovenosa en dosis similares.' },
        ] },
        { title: 'Atípica', tag: 'Escolar con clínica insidiosa', kind: 'pharma', items: [
          { t: 'Azitromicina', d: 'No amoxicilina: sin pared celular',
            say: 'Y en el escolar con sospecha de mycoplasma, el fármaco es azitromicina, no amoxicilina. Fíjate por qué: el mycoplasma no tiene pared celular, así que un betalactámico como la amoxicilina no le hace absolutamente nada. El esquema es una dosis mayor el primer día, y una dosis menor los siguientes cuatro días.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Criterios de hospitalización',
      title: '¿Cuándo este niño no se va a la casa?',
      cards: [
        { title: 'Riesgo por edad y oxigenación', tag: 'Los más importantes', kind: 'alert', items: [
          { t: 'Menor de tres meses', d: 'Riesgo alto de sepsis',
            say: 'Vamos a los criterios de hospitalización, que también se preguntan bastante. El primero es la edad: menor de tres meses cumplidos, por el riesgo de que la infección se vuelva sistémica.' },
          { t: 'Saturación baja noventa y tres', d: 'O dificultad respiratoria severa',
            say: 'El segundo es la oxigenación: saturación bajo noventa y tres por ciento, o signos de dificultad respiratoria severa, como quejido o aleteo nasal.' },
        ] },
        { title: 'Los otros criterios', tag: 'No los olvides', kind: 'criteria', items: [
          { t: 'No tolera la vía oral', d: 'Ni líquidos ni el antibiótico',
            say: 'También hospitalizas si el niño rechaza los líquidos, o no tolera tomar el antibiótico por boca.' },
          { t: 'Falla del tratamiento ambulatorio', d: 'Fiebre que persiste a las cuarenta y ocho horas',
            say: 'Y si ya venía con amoxicilina y a las cuarenta y ocho horas sigue con fiebre o empeora, eso también es indicación de hospitalizar y replantear el antibiótico.' },
          { t: 'Complicación radiológica', d: 'Derrame, absceso o neumotórax',
            say: 'Y por supuesto, cualquier complicación que veas en la radiografía, como un derrame pleural, un absceso pulmonar o un neumotórax, obliga a hospitalizar sin discusión.' },
          { t: 'Riesgo social', d: 'Sin red de apoyo cercana',
            say: 'Y no olvides el factor social: si la familia vive muy lejos de un centro de salud, o no hay quien vigile al niño en la casa, eso también inclina la balanza hacia hospitalizar, aunque la clínica sea leve.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Complicación',
      title: 'Cuando la fiebre no cede: derrame pleural',
      nodes: [
        { id: 'per', col: 0, row: 1, k: 'start', t: 'Fiebre que no cede', s: 'A las cuarenta y ocho horas de amoxicilina' },
        { id: 'exa', col: 1, row: 1, k: 'q', t: 'Matidez y sin murmullo', s: 'Al examen pulmonar' },
        { id: 'rx2', col: 2, row: 1, k: 'mech', t: 'Radiografía', s: 'Confirma el derrame' },
        { id: 'hos2', col: 3, row: 1, k: 'alert', t: 'Hospitalizar', s: 'Ecografía pleural y punción' },
        { id: 'ev', col: 4, row: 1, k: 'good', t: 'Antibiótico endovenoso', s: 'Ya no basta la vía oral' },
      ],
      edges: [
        { from: 'per', to: 'exa' }, { from: 'exa', to: 'rx2' }, { from: 'rx2', to: 'hos2' }, { from: 'hos2', to: 'ev' },
      ],
      steps: [
        { show: ['per', 'exa'], note: 'La falla de tratamiento no es solo mala suerte',
          say: 'Piensa en un niño que ya lleva dos días con amoxicilina y sigue con fiebre, además con más trabajo respiratorio que al inicio. Al examinarlo, encuentras matidez y el murmullo pulmonar abolido en una base. Eso ya no es una neumonía sin complicaciones.' },
        { show: ['rx2'], note: 'Confirma lo que sospechaste',
          say: 'La radiografía confirma un derrame pleural paraneumónico, la complicación más frecuente de la neumonía bacteriana, sobre todo por neumococo.' },
        { show: ['hos2', 'ev'], note: 'Cambia todo el manejo',
          say: 'Y esto cambia todo el manejo: se hospitaliza, se estudia el líquido con ecografía y punción pleural, y se cambia el antibiótico a vía endovenosa. Ya no alcanza con la amoxicilina oral que traía.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora armemos todo el razonamiento en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que más se confunde en neumonía infantil',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Fiebre, tos y taquipnea típica', 'Diagnóstico clínico, sin radiografía', 'Pedir radiografía a todos'],
          say: 'Repasemos con la tabla. Fiebre, tos y taquipnea típica: el diagnóstico es clínico, sin necesidad de radiografía. El error es pedirla siempre, como paso obligado.' },
        { cells: ['Neumonía típica, no complicada', 'Amoxicilina oral en dosis alta', 'Usar amoxicilina con ácido clavulánico'],
          say: 'Neumonía típica no complicada: amoxicilina oral en dosis alta. El error frecuente es sumarle ácido clavulánico, que aquí no aporta nada.' },
        { cells: ['Escolar con clínica atípica', 'Azitromicina', 'Tratar con amoxicilina'],
          say: 'Escolar con clínica atípica e infiltrado intersticial: azitromicina. El error es insistir con amoxicilina, que no cubre al mycoplasma.' },
        { cells: ['Menor de tres meses con neumonía', 'Hospitalizar siempre', 'Manejarlo de forma ambulatoria'],
          say: 'Menor de tres meses con neumonía: se hospitaliza siempre. El error es manejarlo de forma ambulatoria por verse con buen estado general.' },
        { cells: ['Fiebre persiste a las cuarenta y ocho horas', 'Sospechar derrame, hospitalizar', 'Solo esperar y repetir el antibiótico oral'],
          say: 'Y si la fiebre persiste a las cuarenta y ocho horas de tratamiento, sospechas derrame y hospitalizas. El error es simplemente esperar más, o repetir el mismo antibiótico oral.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Lactante de 9 meses, previamente sano, con 2 días de fiebre hasta 38,9°C y tos. Al examen: FR 52 rpm, saturación 96% ambiental, buen estado general, crépitos localizados en la base pulmonar derecha. Tolera bien la alimentación.',
      question: '¿Cuál es el tratamiento de primera línea más adecuado?',
      options: [
        { letter: 'A', text: 'Amoxicilina oral 80 a 90 mg/kg/día por 7 días' },
        { letter: 'B', text: 'Azitromicina oral por 5 días' },
        { letter: 'C', text: 'Ampicilina endovenosa en hospitalización' },
        { letter: 'D', text: 'Amoxicilina con ácido clavulánico' },
        { letter: 'E', text: 'Solo control ambulatorio, sin antibiótico' },
      ],
      correct: 'A',
      explanation: 'Lactante de 9 meses con neumonía típica sin criterios de hospitalización: amoxicilina oral en dosis alta por 7 días es la primera línea.',
      say: {
        stem: 'Vamos con un caso. Lactante de nueve meses, previamente sano, con dos días de fiebre hasta treinta y ocho con nueve y tos. Al examen: frecuencia respiratoria de cincuenta y dos, saturando noventa y seis por ciento, en buen estado general, con crépitos localizados en la base pulmonar derecha. Tolera bien la alimentación.',
        question: '¿Cuál es el tratamiento de primera línea más adecuado?',
        options: 'Tienes cinco opciones: amoxicilina oral en dosis alta por siete días, azitromicina oral, ampicilina endovenosa hospitalizado, amoxicilina con ácido clavulánico, o solo control sin antibiótico. Piénsalo.',
        answer: 'Es la A. Este lactante cumple los criterios de neumonía: fiebre, tos, taquipnea para su edad y un foco auscultatorio. No tiene ningún criterio de hospitalización, así que no necesita la vía endovenosa. Y como el germen esperado es el neumococo, no el mycoplasma, la azitromicina no corresponde aquí; esa se reserva para el escolar con clínica atípica. La amoxicilina con ácido clavulánico tampoco aporta nada, porque la resistencia del neumococo no es por betalactamasas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 45',
      stem: 'Un niño de 4 años presenta un cuadro de fiebre hasta 39,5°C, asociada a tos con expectoración mucopurulenta, de 2 días de evolución. Además refiere cefalea y marcado malestar general. Al examen físico está decaído, febril, con FC 100x\', examen pulmonar con crepitaciones localizadas en la zona superior.',
      question: '¿Cuál es el agente etiológico más probable?',
      options: [
        { letter: 'A', text: 'Mycoplasma pneumoniae' },
        { letter: 'B', text: 'Chlamydia pneumoniae' },
        { letter: 'C', text: 'Streptococcus pneumoniae' },
        { letter: 'D', text: 'Haemophilus influenzae' },
        { letter: 'E', text: 'Staphylococcus aureus' },
      ],
      correct: 'C',
      explanation: 'Cuadro agudo, fiebre alta, crépitos localizados en un niño de 4 años: neumonía típica bacteriana, cuyo agente clásico es Streptococcus pneumoniae.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil diecisiete. Niño de cuatro años, con fiebre hasta treinta y nueve y medio, tos con expectoración mucopurulenta de dos días, cefalea y malestar general marcado. Al examen: decaído, febril, con crepitaciones localizadas en una zona del pulmón.',
        question: '¿Cuál es el agente etiológico más probable?',
        options: 'Las opciones: Mycoplasma pneumoniae, Chlamydia pneumoniae, Streptococcus pneumoniae, Haemophilus influenzae, o Staphylococcus aureus.',
        answer: 'Es la C, Streptococcus pneumoniae. Fíjate en el patrón: inicio agudo, fiebre alta, y un foco bien localizado en la auscultación. Eso es la neumonía típica bacteriana, justo la que domina entre los tres meses y los cinco años, y el neumococo es su agente clásico.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 15',
      stem: 'Niña escolar con tos seca, crepitaciones bilaterales e infiltrados intersticiales en la radiografía de tórax.',
      question: '¿Cuál es el agente etiológico más probable?',
      options: [
        { letter: 'A', text: 'Streptococcus pneumoniae' },
        { letter: 'B', text: 'Mycoplasma pneumoniae' },
        { letter: 'C', text: 'Virus sincicial respiratorio' },
        { letter: 'D', text: 'Haemophilus influenzae' },
        { letter: 'E', text: 'Chlamydia trachomatis' },
      ],
      correct: 'B',
      explanation: 'Escolar con tos seca prolongada e infiltrado intersticial bilateral: cuadro típico de neumonía atípica, cuyo agente clásico en esta edad es Mycoplasma pneumoniae.',
      say: {
        stem: 'Y una última pregunta real, del EUNACOM de enero de dos mil veintitrés. Niña escolar con tos seca, crepitaciones en ambos pulmones, e infiltrados intersticiales en la radiografía de tórax.',
        question: '¿Cuál es el agente etiológico más probable?',
        options: 'Las opciones: Streptococcus pneumoniae, Mycoplasma pneumoniae, virus respiratorio sincicial, Haemophilus influenzae, o Chlamydia trachomatis.',
        answer: 'Es la B, Mycoplasma pneumoniae. Compara esta pregunta con la anterior: ahí tenías un niño pequeño con foco localizado y expectoración purulenta, aquí tienes una escolar con tos seca y un infiltrado difuso e intersticial. Es exactamente la diferencia entre neumonía típica y atípica que vimos, y por eso el tratamiento tampoco es el mismo: aquí correspondería azitromicina, no amoxicilina.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Sin exámenes de más', kind: 'key', items: [
          { t: 'Fiebre, tos y taquipnea', d: 'Diagnóstico clínico, sin radiografía de rutina',
            say: 'Cerremos con las reglas de oro de esta clase. Fiebre, tos y taquipnea para la edad: el diagnóstico es clínico, y no necesitas radiografía de rutina.' },
        ] },
        { title: 'Tratamiento según el germen', tag: 'La dosis importa', kind: 'pharma', items: [
          { t: 'Neumococo: amoxicilina alta', d: 'Ochenta a noventa por kilo',
            say: 'Contra el neumococo, siempre amoxicilina oral en dosis alta.' },
          { t: 'Mycoplasma: azitromicina', d: 'En el escolar con clínica insidiosa',
            say: 'Contra el mycoplasma en el escolar, azitromicina, nunca amoxicilina.' },
        ] },
        { title: 'Cuándo se complica', tag: 'No lo pases por alto', kind: 'alert', items: [
          { t: 'Menor de tres meses', d: 'Se hospitaliza siempre',
            say: 'Y menor de tres meses, siempre se hospitaliza.' },
          { t: 'Fiebre que persiste', d: 'A las cuarenta y ocho horas: piensa en derrame',
            say: 'Si la fiebre persiste a las cuarenta y ocho horas de tratamiento, piensa en derrame pleural. Si te llevas una sola idea de hoy: la taquipnea según la edad te hace el diagnóstico, y la edad del niño te elige el antibiótico. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Neumonía en el niño: de la taquipnea al antibiótico',
    root: N('start', 'Niño con fiebre y tos', 'Sospecha de neumonía',
      'Tienes un niño con fiebre y tos. Lo primero, antes de pedir cualquier examen, es contar la frecuencia respiratoria según su edad.',
      ['', N('q', '¿Tiene taquipnea para su edad?', 'Más un foco auscultatorio',
        'Si además hay un hallazgo focal al auscultar, ya tienes el diagnóstico de neumonía, sin necesidad de radiografía.',
        ['Sin criterios de hospitalización', N('q', '¿Qué edad tiene?', 'Eso decide el antibiótico',
          'Sin criterios de hospitalización, revisa la edad para elegir el fármaco.',
          ['Tres meses a cinco años', N('ok', 'Amoxicilina oral', 'Ochenta a noventa por kilo, siete días',
            'Entre los tres meses y los cinco años, amoxicilina oral en dosis alta por siete días, contra el neumococo.')],
          ['Cinco años o más, clínica atípica', N('ok', 'Azitromicina oral', 'El mycoplasma no tiene pared celular',
            'Desde los cinco años, con clínica insidiosa e infiltrado intersticial, azitromicina, porque el mycoplasma no responde a los betalactámicos.')])],
        ['Con criterios de hospitalización', N('alert', 'Hospitalizar', 'Ampicilina endovenosa',
          'Si es menor de tres meses, satura bajo noventa y tres, no tolera la vía oral, o tiene un derrame en la radiografía, se hospitaliza y se trata con ampicilina endovenosa.',
          ['Falla a las cuarenta y ocho horas', N('refer', 'Sospechar derrame pleural', 'Ecografía y punción pleural',
            'Y si un niño en tratamiento ambulatorio sigue febril a las cuarenta y ocho horas, sospecha un derrame pleural, hospitaliza y estudia el líquido con ecografía y punción.')])])]),
  },
};
