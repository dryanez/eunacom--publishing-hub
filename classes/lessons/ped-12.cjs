// Clase ped-12 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_pediatria_bloque_3.cjs (ped-12).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-12',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'De la regurgitación sin importancia a la urgencia que no puedes dejar pasar',
      say: 'Bienvenido. Hoy vemos los vómitos del lactante, desde el reflujo fisiológico, que no necesita nada, hasta la estenosis hipertrófica del píloro y la invaginación intestinal, que sí son urgencias. Vas a aprender a separarlos con dos preguntas simples: la edad del niño, y si el vómito tiene bilis o no. Empecemos.',
    },

    {
      type: 'flow',
      kicker: 'Dos preguntas que ordenan todo',
      title: '¿Bilioso, y a qué edad?',
      nodes: [
        { id: 'vom', col: 0, row: 1, k: 'start', t: 'Lactante con vómitos', s: 'Antes de nada, mira el color' },
        { id: 'bil', col: 1, row: 0, k: 'alert', t: 'Vómito bilioso, verde', s: 'Urgencia quirúrgica hasta descartarla' },
        { id: 'nob', col: 1, row: 2, k: 'q', t: 'Vómito no bilioso', s: 'Ahora la edad decide' },
        { id: 'rge', col: 2, row: 0, k: 'good', t: 'Menor de 6 meses, sin dolor', s: 'Reflujo fisiológico' },
        { id: 'ehp', col: 2, row: 1, k: 'risk', t: '2 a 8 semanas, en proyectil', s: 'Estenosis hipertrófica del píloro' },
        { id: 'inv', col: 2, row: 2, k: 'alert', t: '3 a 12 meses, dolor cólico', s: 'Invaginación intestinal' },
      ],
      edges: [
        { from: 'vom', to: 'bil' }, { from: 'vom', to: 'nob' },
        { from: 'nob', to: 'rge' }, { from: 'nob', to: 'ehp' }, { from: 'nob', to: 'inv' },
      ],
      steps: [
        { show: ['vom'], note: 'Lo primero es mirar el color',
          say: 'Tienes un lactante que vomita. Antes de pensar en cualquier diagnóstico, mira el color del vómito, porque esa sola observación te separa un susto de una urgencia real.' },
        { show: ['bil'], note: 'Verde es sinónimo de urgencia',
          say: 'Si el vómito es bilioso, de color verde, trátalo como una urgencia quirúrgica hasta que la descartes. En el recién nacido, eso te obliga a pensar en un vólvulo por malrotación intestinal.' },
        { show: ['nob'], note: 'Ahora sí, la edad te da el diagnóstico',
          say: 'Si el vómito no es bilioso, la siguiente pregunta es la edad, y con eso ya casi tienes el diagnóstico.' },
        { show: ['rge'], note: 'El regurgitador feliz',
          say: 'Menor de seis meses, sin dolor, y con buena ganancia de peso: es reflujo fisiológico, el llamado regurgitador feliz.' },
        { show: ['ehp'], note: 'El vomitador hambriento',
          say: 'Entre dos y ocho semanas, con vómito en proyectil y un niño que después pide comer con desesperación: piensa en la estenosis hipertrófica del píloro.' },
        { show: ['inv'], note: 'El del dolor que va y viene',
          say: 'Y entre tres y doce meses, con crisis de dolor cólico intenso: piensa en la invaginación intestinal. Vamos a ver cada uno con calma.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Reflujo fisiológico',
      title: 'El regurgitador feliz: no necesita nada',
      cards: [
        { title: 'Cómo lo reconoces', tag: 'Menor de 6 meses', kind: 'criteria', items: [
          { t: 'Regurgita leche sin digerir', d: 'Sin dolor, sin esfuerzo',
            say: 'Empecemos por el más tranquilo. Más de la mitad de los menores de seis meses regurgita leche después de comer, sin dolor y sin esfuerzo.' },
          { t: 'Sube de peso con normalidad', d: 'Y su desarrollo es completamente normal',
            say: 'Y lo que confirma que es benigno es esto: sube de peso con normalidad y su desarrollo es el esperado para su edad. Eso es lo que hace la diferencia con todo lo que viene después.' },
        ] },
        { title: 'Manejo', tag: 'Tranquilizar, no medicar', kind: 'key', items: [
          { t: 'Posición erguida tras comer', d: 'Veinte a treinta minutos, y fraccionar tomas',
            say: 'El manejo es simple: tranquilizas a la familia, y le pides mantenerlo erguido veinte a treinta minutos después de cada toma, fraccionando las comidas.' },
          { t: 'Nada de fármacos', d: 'Ni inhibidores de bomba, ni procinéticos',
            say: 'Y aquí está el dato que se pregunta: nada de fármacos. Ni inhibidores de la bomba de protones ni procinéticos, porque este niño no los necesita, y se le va a pasar solo antes del año.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Estenosis hipertrófica del píloro',
      title: 'El lactante hambriento que vomita a chorro',
      cards: [
        { title: 'Clínica', tag: 'Varón, 3 a 5 semanas', kind: 'criteria', items: [
          { t: 'Vómito postprandial en proyectil', d: 'Nunca con bilis, sale con fuerza',
            say: 'Ahora sí, una urgencia. La estenosis hipertrófica del píloro afecta más a varones, entre las tres y cinco semanas de vida. El vómito sale con fuerza, a chorro, después de comer, y nunca tiene bilis.' },
          { t: 'Pide comer de nuevo', d: 'Con desesperación, apenas termina de vomitar',
            say: 'Y el dato que lo distingue de cualquier otra causa: apenas termina de vomitar, quiere volver a mamar, con desesperación. No perdió el apetito, al contrario.' },
        ] },
        { title: 'Laboratorio y examen', tag: 'El dato patognomónico', kind: 'key', items: [
          { t: 'Alcalosis metabólica hipoclorémica', d: 'Con potasio bajo, por vomitar tanto ácido',
            say: 'Pierde tanto ácido clorhídrico al vomitar que desarrolla una alteración muy característica: alcalosis metabólica, con el cloro y el potasio bajos.' },
          { t: 'Ecografía abdominal confirma', d: 'Músculo engrosado y canal alargado',
            say: 'Y el examen que confirma el diagnóstico es la ecografía abdominal, que muestra el músculo pilórico engrosado y el canal alargado. No necesitas nada más invasivo.' },
        ] },
        { title: 'Tratamiento', tag: 'Orden que se pregunta siempre', kind: 'pharma', items: [
          { t: 'Primero corriges el electrolito', d: 'Nunca operes con la alcalosis sin corregir',
            say: 'Y aquí está la secuencia que más se pregunta: antes de operar, corriges por completo la deshidratación y la alcalosis. Operar con el electrolito alterado puede darle apnea con la anestesia.' },
          { t: 'Luego, piloromiotomía de Ramstedt', d: 'Es electiva, no de urgencia inmediata',
            say: 'Recién después vas a la cirugía, la piloromiotomía de Ramstedt. Es electiva: puede esperar esas horas que te toma corregir al paciente.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Invaginación intestinal',
      title: 'El dolor que va y viene, y la jalea de grosella',
      nodes: [
        { id: 'edad', col: 0, row: 1, k: 'start', t: 'Lactante 3 a 12 meses', s: 'El pico es entre 6 y 9 meses' },
        { id: 'dol', col: 1, row: 0, k: 'effect', t: 'Dolor cólico en crisis', s: 'Llora, encoge las piernas, palidece' },
        { id: 'cal', col: 1, row: 1, k: 'good', t: 'Entre crisis, se calma', s: 'Incluso queda letárgico o dormido' },
        { id: 'vom', col: 1, row: 2, k: 'risk', t: 'Vómitos biliosos', s: 'Signo más tardío que el dolor' },
        { id: 'jal', col: 2, row: 1, k: 'alert', t: 'Jalea de grosella', s: 'Sangre y moco, signo tardío' },
        { id: 'eco', col: 3, row: 1, k: 'good', t: 'Ecografía: imagen en diana', s: 'El estándar de oro' },
      ],
      edges: [
        { from: 'edad', to: 'dol' }, { from: 'dol', to: 'cal' }, { from: 'dol', to: 'vom' },
        { from: 'vom', to: 'jal' }, { from: 'jal', to: 'eco' },
      ],
      steps: [
        { show: ['edad'], note: 'La causa más frecuente de obstrucción a esta edad',
          say: 'La invaginación intestinal es la causa más frecuente de obstrucción intestinal entre los tres meses y los dos años, con su pico entre los seis y los nueve meses.' },
        { show: ['dol'], note: 'La crisis es inconfundible',
          say: 'La crisis es inconfundible: el niño llora fuerte, de la nada, encoge las piernas sobre el abdomen, y se pone pálido.' },
        { show: ['cal'], note: 'Y eso engaña a muchos padres',
          say: 'Y después de diez o quince minutos, se calma solo, y hasta queda letárgico o dormido. Eso engaña a muchos padres, que piensan que ya pasó, pero la crisis vuelve.' },
        { show: ['vom'], note: 'Empiezan alimentarios, después con bilis',
          say: 'Los vómitos empiezan siendo de contenido alimentario, y después se vuelven biliosos, porque la obstrucción ya es mecánica y más distal.' },
        { show: ['jal'], note: 'Un signo tardío, no esperes verlo siempre',
          say: 'La deposición en jalea de grosella, con sangre oscura y moco, es un signo tardío. No necesitas esperarla para sospechar: la tríada del dolor cólico y los vómitos ya te tiene que alertar antes.' },
        { show: ['eco'], note: 'Imagen en diana, en dona, o en pseudoriñón',
          say: 'El examen de elección es la ecografía abdominal, que muestra la clásica imagen en diana. Con eso confirmas el diagnóstico y decides el tratamiento, que viene ahora.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Invaginación intestinal',
      title: 'Tratamiento: reducir antes de operar',
      cards: [
        { title: 'Primera línea', tag: 'Sin peritonitis', kind: 'key', items: [
          { t: 'Reducción neumática o hidrostática', d: 'Guiada por ecografía, es lo primero',
            say: 'Si no hay peritonitis ni perforación, la primera línea es la reducción neumática o hidrostática, guiada por ecografía. Resuelve la mayoría de los casos sin pasar por pabellón.' },
        ] },
        { title: 'Cuándo operar', tag: 'Si el enema falla', kind: 'alert', items: [
          { t: 'Peritonitis o perforación', d: 'O si el enema no logra reducirla',
            say: 'Vas a cirugía si hay signos de peritonitis, perforación, o si el enema simplemente no logra reducir la invaginación.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos las tres causas en un solo árbol, con la edad y el color del vómito como guía.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que más se confunde entre estas tres causas',
      head: ['Cuadro', 'Clave clínica', 'Conducta'],
      rows: [
        { cells: ['Reflujo fisiológico', 'Sin dolor, buen peso, menor de 6 meses', 'Medidas posturales, sin fármacos'],
          say: 'Repasemos las trampas. Reflujo fisiológico: sin dolor, buen peso, menor de seis meses. La conducta son medidas posturales, sin fármacos.' },
        { cells: ['Estenosis hipertrófica del píloro', 'Proyectil, hambriento, alcalosis hipoclorémica', 'Corregir electrolitos, luego piloromiotomía'],
          say: 'Estenosis del píloro: vómito en proyectil, niño hambriento, y alcalosis hipoclorémica. Primero corriges los electrolitos, y recién después la piloromiotomía.' },
        { cells: ['Invaginación intestinal', 'Dolor cólico en crisis, jalea de grosella', 'Ecografía y reducción neumática'],
          say: 'Invaginación intestinal: dolor cólico en crisis, y jalea de grosella como signo tardío. Ecografía para confirmar, y reducción neumática para tratarla.' },
        { cells: ['Vómito bilioso en el recién nacido', 'Vólvulo por malrotación hasta descartarlo', 'Cirugía de urgencia inmediata'],
          say: 'Y el vómito bilioso en el recién nacido: es un vólvulo por malrotación hasta que lo descartes, y va a cirugía de urgencia inmediata.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Lactante varón de 4 semanas, primogénito, con vómitos postprandiales que han ido aumentando en intensidad hasta salir con fuerza, en proyectil. El vómito es de leche cortada, sin color verde. Tras vomitar, llora buscando mamar de nuevo. Su peso está estancado desde el nacimiento.',
      question: '¿Cuál es el examen de elección para confirmar el diagnóstico?',
      options: [
        { letter: 'A', text: 'pH-metría esofágica de 24 horas' },
        { letter: 'B', text: 'Ecografía abdominal dirigida al píloro' },
        { letter: 'C', text: 'Enema baritado con fluoroscopía' },
        { letter: 'D', text: 'Endoscopía digestiva alta' },
        { letter: 'E', text: 'Colonoscopía con biopsia' },
      ],
      correct: 'B',
      explanation: 'Varón de 4 semanas con vómitos en proyectil no biliosos, avidez por alimentarse y peso estancado: estenosis hipertrófica del píloro. El examen de elección es la ecografía abdominal, que muestra el músculo pilórico engrosado.',
      say: {
        stem: 'Vamos con un caso. Lactante varón de cuatro semanas, primogénito, con vómitos después de comer que han ido aumentando hasta salir con fuerza, en proyectil. El vómito es de leche cortada, sin color verde. Después de vomitar, llora buscando mamar de nuevo. Su peso está estancado desde que nació.',
        question: '¿Cuál es el examen de elección para confirmar el diagnóstico?',
        options: 'Las opciones: pH-metría esofágica, ecografía abdominal dirigida al píloro, enema baritado, endoscopía digestiva alta, o colonoscopía con biopsia. Piénsalo.',
        answer: 'Es la B. Todo el cuadro apunta a la estenosis hipertrófica del píloro: vómito en proyectil sin bilis, hambre voraz, y peso estancado. El examen que confirma el diagnóstico, sin necesidad de nada invasivo, es la ecografía abdominal dirigida al píloro.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 155',
      stem: 'Niño de 28 días con vómitos después de comer, que iniciaron hace una semana y han aumentado en frecuencia e intensidad. La madre refiere que llora después de comer y vomitar, y se observa que no ha incrementado bien de peso, algo enflaquecido.',
      question: '¿Cuál es el examen de elección para iniciar el estudio en este paciente?',
      options: [
        { letter: 'A', text: 'Radiografía baritada de esófago, estómago y duodeno' },
        { letter: 'B', text: 'Ecografía abdominal' },
        { letter: 'C', text: 'Endoscopía digestiva alta con biopsia duodenal' },
        { letter: 'D', text: 'Colonoscopía con biopsia de la pared intestinal' },
        { letter: 'E', text: 'Radiografía simple toracoabdominal' },
      ],
      correct: 'B',
      explanation: 'Lactante de 28 días con vómitos postprandiales, llanto tras alimentarse y mal incremento ponderal: cuadro compatible con estenosis hipertrófica del píloro. El examen de elección para iniciar el estudio es la ecografía abdominal.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de diciembre de dos mil dieciocho. Niño de veintiocho días con vómitos después de comer, que empezaron hace una semana y han ido aumentando. La madre cuenta que llora después de comer y de vomitar, y se ve que no ha subido bien de peso, algo enflaquecido.',
        question: '¿Cuál es el examen de elección para iniciar el estudio en este paciente?',
        options: 'Las opciones: radiografía baritada de esófago, estómago y duodeno, ecografía abdominal, endoscopía digestiva alta con biopsia, colonoscopía con biopsia, o radiografía simple toracoabdominal. Piénsalo.',
        answer: 'Es la B. El cuadro, con la edad, el vómito postprandial y el mal incremento de peso, apunta a una estenosis hipertrófica del píloro, y el examen de elección para estudiarla es la ecografía abdominal.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 130',
      stem: 'Recién nacido de 4 semanas con vómitos postprandiales abundantes desde hace una semana, asociados a detención del incremento ponderal. La madre refiere que lo nota hambriento y que toma leche con avidez.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Solicitar radiografía de abdomen simple' },
        { letter: 'B', text: 'Realizar tratamiento endoscópico' },
        { letter: 'C', text: 'Observar la evolución' },
        { letter: 'D', text: 'Realizar piloromiotomía de Ramstedt' },
        { letter: 'E', text: 'Realizar funduplicatura gástrica' },
      ],
      correct: 'D',
      explanation: 'Cuadro clásico de estenosis hipertrófica del píloro. Lo ideal sería confirmar primero con ecografía, pero de las opciones disponibles, la piloromiotomía de Ramstedt es el tratamiento de elección (siempre corrigiendo antes la deshidratación y la alcalosis).',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil diecisiete. Recién nacido de cuatro semanas, con vómitos abundantes después de comer desde hace una semana, y detención del aumento de peso. La madre lo nota hambriento, y toma la leche con muchas ganas.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: radiografía de abdomen simple, tratamiento endoscópico, observar la evolución, piloromiotomía de Ramstedt, o funduplicatura gástrica. Piénsalo.',
        answer: 'Es la D. El cuadro es una estenosis hipertrófica del píloro clásica. Lo ideal sería pedir primero una ecografía para confirmar, pero de las alternativas que te dan, el tratamiento de elección es la piloromiotomía de Ramstedt, siempre corrigiendo antes la deshidratación y la alcalosis del paciente.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Las tres claves', tag: 'Edad y color', kind: 'key', items: [
          { t: 'Bilioso es urgencia', d: 'Vólvulo hasta que lo descartes',
            say: 'Cerremos con las reglas de oro. Todo vómito bilioso es una urgencia hasta que la descartes.' },
          { t: 'Proyectil y hambriento', d: 'Piensa en estenosis del píloro',
            say: 'Vómito en proyectil, con un lactante hambriento: piensa en la estenosis del píloro.' },
        ] },
        { title: 'La otra urgencia', tag: 'Dolor en crisis', kind: 'alert', items: [
          { t: 'Dolor cólico que va y viene', d: 'Piensa en invaginación intestinal',
            say: 'Y el dolor cólico que va y viene te lleva a la invaginación intestinal.' },
        ] },
        { title: 'El orden importa', tag: 'En la estenosis', kind: 'pharma', items: [
          { t: 'Primero corregir, luego operar', d: 'Nunca al revés, por el riesgo de apnea',
            say: 'Y en la estenosis del píloro, primero corriges la alcalosis, y después operas, nunca al revés. Si te llevas una sola idea de hoy: mira el color del vómito y la edad del niño, y ya tienes casi todo el diagnóstico. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Vómitos del lactante: edad y color deciden',
    root: N('start', 'Lactante con vómitos', 'Antes de nada, mira el color',
      'Tienes un lactante que vomita. Lo primero, siempre, es fijarte en el color del vómito.',
      ['', N('q', '¿El vómito tiene bilis?', 'Verde cambia todo el enfoque',
        'Si es bilioso, es una urgencia quirúrgica hasta que la descartes. Si no lo es, la edad te da el diagnóstico.',
        ['Bilioso, verde', N('alert', 'Sospecha vólvulo por malrotación', 'Cirugía de urgencia inmediata',
          'En el recién nacido, todo vómito bilioso es un vólvulo hasta que se demuestre lo contrario.')],
        ['No bilioso, menor de 6 meses, sin dolor', N('ok', 'Reflujo fisiológico', 'Medidas posturales, sin fármacos',
          'El regurgitador feliz: buen peso, buen desarrollo. Se resuelve solo antes del año, sin inhibidores de bomba ni procinéticos.')],
        ['No bilioso, 2 a 8 semanas, en proyectil', N('do', 'Estenosis hipertrófica del píloro', 'Corregir electrolitos, luego piloromiotomía',
          'Vómito en proyectil, niño hambriento, alcalosis metabólica hipoclorémica. Confirmas con ecografía, corriges antes de operar.')],
        ['No bilioso, 3 a 12 meses, dolor cólico', N('alert', 'Invaginación intestinal', 'Ecografía y reducción neumática',
          'Crisis de dolor con encogimiento de piernas, y jalea de grosella como signo tardío. Reduces con enema guiado por ecografía antes de pensar en cirugía.')])]),
  },
};
