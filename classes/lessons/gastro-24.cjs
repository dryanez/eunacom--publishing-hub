// Clase 6.2 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_gastroenterologia.cjs (gastro-24).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gastro-24',
  tier: 2,
  pathway: {
    title: 'El lactante que vomita o regurgita',
    root: N('start', 'Lactante que regurgita o vomita', 'Padres angustiados',
      'Partimos del lactante que regurgita o vomita, con padres angustiados. Antes de pensar en reflujo, hay que descartar el diferencial quirúrgico.',
      ['', N('q', '¿Vómitos explosivos entre la 2.ª y 6.ª semana?', 'Ávido por comer · alcalosis hipoclorémica',
        '¿Son vómitos explosivos y proyectivos, que empezaron entre la segunda y la sexta semana de vida, en un lactante hambriento?',
        ['SÍ', N('do', 'Ecografía abdominal', 'Píloro engrosado: oliva pilórica',
          'Eso es una estenosis hipertrófica del píloro. El examen es la ecografía abdominal, que muestra el píloro engrosado.',
          ['', N('refer', 'Hidratar y corregir electrolitos', 'Luego pilorotomía de Ramstedt',
            'Primero se corrige la hidratación y los electrolitos, y recién después se opera: pilorotomía de Ramstedt.')])],
        ['NO', N('q', '¿Lactante feliz que crece bien?', 'Examen normal, buen incremento',
          'Si no, la pregunta del reflujo: ¿es un lactante feliz, que crece bien y tiene el examen normal?',
          ['SÍ', N('ok', 'Reflujo fisiológico', 'Educar, tranquilizar, medidas posturales',
            'Es un reflujo fisiológico. Se educa y se tranquiliza a los padres, con medidas posturales y alimentación fraccionada. Sin fármacos ni exámenes.')],
          ['NO', N('alert', 'Reflujo patológico', 'IBP (omeprazol) · funduplicatura al final',
            'Con mal incremento, síntomas respiratorios o sangre, es un reflujo patológico: se estudia si hay duda y se trata con omeprazol. La funduplicatura es la última opción.')])])]),
  },
  slides: [
    {
      type: 'cover',
      subtitle: 'El lactante feliz, el niño que no quiere ir al colegio y el fecaloma',
      say: 'Bienvenidos. Hoy vemos tres motivos de consulta muy frecuentes en pediatría: el reflujo del lactante, el dolor abdominal crónico y la constipación. No tienen preguntas en los exámenes recientes, pero son foco prioritario del nuevo perfil, así que conviene llegar preparado. Y los tres comparten una idea: muchas veces lo que corresponde es tranquilizar, y el arte está en saber cuándo no.',
    },

    {
      type: 'flow',
      kicker: 'Reflujo del lactante',
      title: '¿Es un lactante feliz?',
      nodes: [
        { id: 'reg', col: 0, row: 1, k: 'start', t: 'Lactante que regurgita', s: 'Después de casi todas las tomas' },
        { id: 'q', col: 1, row: 1, k: 'q', t: '¿Crece bien y está contento?', s: 'Incremento de peso y examen' },
        { id: 'fis', col: 2, row: 0, k: 'good', t: 'Reflujo fisiológico', s: 'Pico 2–6 meses, cede al año–año y medio' },
        { id: 'edu', col: 3, row: 0, k: 'good', t: 'Educar y tranquilizar', s: 'Postura y alimentación fraccionada' },
        { id: 'pat', col: 2, row: 2, k: 'alert', t: 'Reflujo patológico', s: 'Mal incremento, respiratorio, sangre' },
        { id: 'ibp', col: 3, row: 2, k: 'good', t: 'IBP: omeprazol', s: 'Primera línea' },
        { id: 'fun', col: 4, row: 2, k: 'refer', t: 'Funduplicatura', s: 'La última opción' },
      ],
      edges: [
        { from: 'reg', to: 'q' }, { from: 'q', to: 'fis', label: 'sí' }, { from: 'fis', to: 'edu' },
        { from: 'q', to: 'pat', label: 'no' }, { from: 'pat', to: 'ibp' }, { from: 'ibp', to: 'fun', label: 'si falla' },
      ],
      steps: [
        { show: ['reg'], note: 'Regurgitar es muy común a esta edad',
          say: 'Partamos por el reflujo del lactante. Es un motivo de consulta muy frecuente: un lactante que regurgita después de casi todas las tomas, y unos padres preocupados.' },
        { show: ['q'], note: 'La pregunta que decide todo',
          say: 'Y todo se decide con una sola pregunta, que no es cuánto regurgita, sino cómo está. ¿Es un lactante feliz, que crece bien y tiene un examen normal?' },
        { show: ['fis'], note: 'Es la regla, no la excepción',
          say: 'Si la respuesta es sí, es un reflujo fisiológico. El lactante regurgita, pero no le afecta. Tiene un pico entre los dos y los seis meses, y desaparece solo hacia el año, año y medio.' },
        { show: ['edu'], note: 'Sin fármacos y sin exámenes',
          say: 'La conducta es educar y tranquilizar a los padres, con medidas posturales y fraccionando la alimentación. Sin fármacos y sin exámenes. Conecta con la clase de reflujo del adulto: allá la clínica típica también bastaba, pero se trataba; aquí, lo que se trata es la angustia de los padres.' },
        { show: ['pat'], note: 'Cuando el reflujo sí le hace daño',
          say: 'Si la respuesta es no, pensamos en reflujo patológico. Las señales son: mal incremento de peso, irritabilidad, rechazo alimentario, síntomas respiratorios como sibilancias o neumonías, hematemesis, o episodios de aparente amenaza a la vida.' },
        { show: ['ibp'], note: 'Estudio si hay duda; omeprazol',
          say: 'Aquí sí se actúa. Si hay duda diagnóstica, se estudia con pH-metría o impedanciometría, y se trata con un inhibidor de la bomba de protones, el omeprazol, que es la primera línea.' },
        { show: ['fun'], note: 'Cirugía al final del camino',
          say: 'Y la cirugía, la funduplicatura, queda como la última opción, cuando todo lo demás falló.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico diferencial',
      title: 'Estenosis hipertrófica del píloro',
      nodes: [
        { id: 'pil', col: 0, row: 1, k: 'cause', t: 'Píloro engrosado', s: 'Aparece entre la 2.ª y la 6.ª semana' },
        { id: 'vom', col: 1, row: 1, k: 'effect', t: 'Vómitos explosivos', s: 'Proyectivos, lactante ávido por comer' },
        { id: 'alc', col: 2, row: 0, k: 'mech', t: 'Alcalosis metabólica', s: 'Hipoclorémica e hipopotasémica' },
        { id: 'des', col: 2, row: 2, k: 'risk', t: 'Deshidratación', s: 'Pierde agua y electrolitos' },
        { id: 'eco', col: 3, row: 1, k: 'good', t: 'Ecografía abdominal', s: 'Oliva pilórica' },
        { id: 'ram', col: 4, row: 1, k: 'good', t: 'Pilorotomía de Ramstedt', s: 'Tras corregir hidratación y electrolitos' },
        { id: 'hsc', col: 3, row: 3, k: 'trap', t: 'Acidosis + hiperpotasemia', s: 'Pensar en hiperplasia suprarrenal' },
      ],
      edges: [
        { from: 'pil', to: 'vom' }, { from: 'vom', to: 'alc' }, { from: 'vom', to: 'des' },
        { from: 'alc', to: 'eco' }, { from: 'des', to: 'eco' }, { from: 'eco', to: 'ram' },
        { from: 'des', to: 'hsc', label: 'si es al revés' },
      ],
      steps: [
        { show: ['pil'], note: 'No desde el nacimiento',
          say: 'Antes de etiquetar un reflujo, hay un diferencial que no puedes pasar por alto: la estenosis hipertrófica del píloro. El músculo del píloro se engruesa y cierra la salida del estómago. Y fíjate en el momento: aparece entre la segunda y la sexta semana de vida, no desde el nacimiento.' },
        { show: ['vom'], note: 'Vomita y quiere comer de nuevo',
          say: 'Como el estómago no se puede vaciar, el lactante vomita de forma explosiva y proyectiva. Y un detalle muy típico: después de vomitar sigue con hambre, está ávido por comer. No es un lactante enfermo que rechaza la comida.' },
        { show: ['alc'], note: 'Pierde ácido clorhídrico',
          say: 'Ahora el mecanismo explica el laboratorio. Lo que vomita es contenido gástrico, es decir, ácido clorhídrico. Si pierde ácido y pierde cloro, queda una alcalosis metabólica hipoclorémica, y además hipopotasémica.' },
        { show: ['des'], note: 'Vómitos repetidos: deshidratación',
          say: 'Y con tantos vómitos, se deshidrata.' },
        { show: ['eco'], note: 'La oliva pilórica',
          say: 'El diagnóstico se hace con ecografía abdominal, que muestra el píloro engrosado, la llamada oliva pilórica.' },
        { show: ['ram'], note: 'Primero hidratar, después operar',
          say: 'Y el tratamiento tiene un orden: primero se corrige la hidratación y los electrolitos, y recién después se opera, con la pilorotomía de Ramstedt. Nunca se opera a un lactante deshidratado y alcalótico.' },
        { show: ['hsc'], note: 'El laboratorio al revés cambia el diagnóstico',
          say: 'Y una trampa de laboratorio. Si un lactante vomita, pero en vez de alcalosis tiene acidosis con hiperpotasemia, no es el píloro. Piensa en hiperplasia suprarrenal congénita.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Dolor abdominal crónico',
      title: '¿Estudiar o tranquilizar?',
      cards: [
        { title: 'Con signos de alarma', tag: 'Estudiar', kind: 'alert', items: [
          { t: 'Baja de peso o examen alterado', d: 'Algo orgánico está pasando',
            say: 'Pasemos al niño con dolor abdominal crónico. Igual que en el adulto, lo primero es buscar signos de alarma. Baja de peso, o un examen físico alterado.' },
          { t: 'Vómitos, sangre, fiebre recurrente', d: 'O dolor que lo despierta',
            say: 'También vómitos o sangre, fiebre recurrente, o un dolor que lo despierta en la noche. Con cualquiera de ellos, se estudia con exámenes e imágenes, según hacia dónde oriente la clínica.' },
        ] },
        { title: 'Sin signos de alarma', tag: 'Lo más frecuente', kind: 'key', items: [
          { t: 'Dolor abdominal funcional', d: 'Psicógeno, periumbilical',
            say: 'Pero sin alarma, lo más frecuente, por lejos, es el dolor abdominal funcional, o psicógeno. Típicamente es periumbilical.' },
          { t: 'Aumenta con el estrés escolar', d: 'Cede en vacaciones y fines de semana',
            say: 'Y tiene una pista de oro: aumenta con el estrés escolar, y cede en las vacaciones y los fines de semana. Si el enunciado te cuenta que el dolor desaparece en vacaciones, ya sabes la respuesta.' },
        ] },
        { title: 'Conducta', tag: 'Sin exámenes', kind: 'normal', items: [
          { t: 'Explicar, tranquilizar, manejar el estrés', d: 'Con examen físico normal, no hacen falta exámenes',
            say: 'La conducta es explicar, tranquilizar, y manejar el estrés. Si el examen físico es normal, no hacen falta exámenes. Pedir una batería de estudios a un niño sin alarma es la respuesta equivocada.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Constipación',
      title: 'El círculo vicioso y el fecaloma',
      nodes: [
        { id: 'con', col: 0, row: 1, k: 'cause', t: 'Constipación funcional', s: 'Menos de 3 deposiciones por semana' },
        { id: 'dol', col: 1, row: 0, k: 'mech', t: 'Deposiciones duras y dolorosas', s: 'El niño aprende a retener' },
        { id: 'ret', col: 1, row: 2, k: 'mech', t: 'Retención', s: 'Más constipación' },
        { id: 'fec', col: 2, row: 1, k: 'risk', t: 'Fecaloma', s: 'Masa abdominal más frecuente en pediatría' },
        { id: 'enc', col: 3, row: 0, k: 'effect', t: 'Encopresis', s: 'Pseudoincontinencia por rebosamiento' },
        { id: 'tac', col: 3, row: 2, k: 'good', t: 'Examen abdominal + tacto rectal', s: 'Con testigo y registro' },
      ],
      edges: [
        { from: 'con', to: 'dol' }, { from: 'dol', to: 'ret', label: 'miedo' }, { from: 'ret', to: 'con', label: 'círculo' },
        { from: 'ret', to: 'fec' }, { from: 'fec', to: 'enc' }, { from: 'fec', to: 'tac' },
      ],
      steps: [
        { show: ['con'], note: 'Menos de 3 por semana, duras y dolorosas',
          say: 'Y el tercer tema, la constipación funcional. Como vimos en la clase de diarrea y constipación, es tener menos de tres deposiciones por semana, y en el niño además son duras y dolorosas.' },
        { show: ['dol', 'ret'], note: 'Dolor, retención, más constipación',
          say: 'Y aquí se arma un círculo vicioso. Como defecar duele, el niño aprende a aguantarse. Al retener, la deposición se seca y se endurece más, y la próxima vez duele todavía más. Dolor, retención, más constipación.' },
        { show: ['fec'], note: 'Ojo: la masa abdominal más frecuente',
          say: 'Si el círculo sigue, se forma un fecaloma. Y este es un dato que se pregunta: el fecaloma es la causa más frecuente de masa abdominal en pediatría. Antes de pensar en un tumor, piensa en deposiciones.' },
        { show: ['enc'], note: 'No es diarrea: es rebosamiento',
          say: 'El fecaloma además produce encopresis: el niño mancha la ropa interior. Pero no es incontinencia verdadera, es pseudoincontinencia por rebosamiento: la deposición líquida se escurre alrededor del fecaloma. Los padres a veces lo consultan como diarrea.' },
        { show: ['tac'], note: 'Siempre con testigo',
          say: 'El diagnóstico es clínico: examen abdominal, donde se palpa la masa, y tacto rectal, que en un niño siempre se hace con un testigo presente y dejando registro.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Constipación: primero desimpactar, después mantener',
      cards: [
        { title: 'Fase 1', tag: 'Desimpactar', kind: 'pharma', items: [
          { t: 'Polietilenglicol oral', d: 'De elección; alternativa: enema',
            say: 'El manejo tiene dos fases, y el orden es obligatorio. La primera es desimpactar, es decir, sacar el fecaloma. El tratamiento de elección es el polietilenglicol por vía oral, y la alternativa es el enema.' },
        ] },
        { title: 'Fase 2', tag: 'Mantener', kind: 'pharma', items: [
          { t: 'Laxante osmótico, al menos 4 semanas', d: 'Para romper el círculo',
            say: 'Recién después viene la segunda fase, el mantenimiento: un laxante osmótico por al menos cuatro semanas, para que las deposiciones sean blandas y el niño pierda el miedo a defecar.' },
          { t: 'Sentarse tras las comidas', d: 'Más fibra y agua',
            say: 'Junto con eso, el hábito de sentarse al baño después de las comidas, más fibra y agua. Y fíjate por qué el orden importa: si partes con fibra y laxante de mantención sin desimpactar, el fecaloma no sale, y todo empeora.' },
        ] },
        { title: 'Descartar organicidad', tag: 'Siempre', kind: 'alert', items: [
          { t: 'Retraso en eliminar el meconio', d: 'Pensar en enfermedad de Hirschsprung',
            say: 'Y siempre descarta una causa orgánica. La pregunta clave es si hubo retraso en la eliminación del meconio al nacer: si lo hubo, piensa en enfermedad de Hirschsprung, que retomamos en la clase de cirugía pediátrica.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos el lactante que vomita en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Reflujo del lactante: fisiológico vs patológico',
      head: ['Rasgo', 'Fisiológico', 'Patológico'],
      rows: [
        { cells: ['Estado del lactante', '"Lactante feliz"', 'Irritable, rechazo alimentario'],
          say: 'Repasemos en una tabla. El estado del lactante: el fisiológico es un lactante feliz; el patológico está irritable y rechaza la comida.' },
        { cells: ['Incremento ponderal', 'Normal', 'Enlentecido o descenso'],
          say: 'El peso: en el fisiológico el incremento es normal; en el patológico se enlentece o incluso baja.' },
        { cells: ['Síntomas respiratorios / sangre', 'Ausentes', 'Presentes'],
          say: 'Síntomas respiratorios o sangre: ausentes en el fisiológico, presentes en el patológico.' },
        { cells: ['Conducta', 'Educar y tranquilizar', 'Estudiar + IBP (omeprazol)'],
          say: 'Y la conducta: el fisiológico se educa y se tranquiliza; el patológico se estudia y se trata con omeprazol. La trampa es dar un fármaco a un lactante feliz porque los padres lo piden.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Lactante de 3 meses con lactancia materna, traído por regurgitaciones después de casi todas las mamadas. Está tranquilo y sonriente, con incremento de peso adecuado y examen físico normal. Los padres, angustiados, piden "algo para el reflujo".',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar omeprazol por 4 semanas' },
        { letter: 'B', text: 'Solicitar pH-metría esofágica de 24 horas' },
        { letter: 'C', text: 'Educar y tranquilizar a los padres, con medidas posturales y tomas fraccionadas' },
        { letter: 'D', text: 'Solicitar ecografía abdominal para descartar estenosis del píloro' },
        { letter: 'E', text: 'Suspender la lactancia materna e iniciar fórmula antirreflujo' },
      ],
      correct: 'C',
      explanation: 'Lactante feliz que regurgita pero crece bien y tiene examen normal: reflujo fisiológico. Se educa y tranquiliza, se explica que el pico es entre los 2 y 6 meses y que se resuelve hacia el año, con medidas posturales y fraccionamiento. IBP y estudios se reservan para el reflujo patológico.',
      say: {
        stem: 'Vamos al caso. Lactante de tres meses, alimentado al pecho, traído por regurgitaciones después de casi todas las mamadas. Está tranquilo y sonriente, con un incremento de peso adecuado y un examen normal. Los padres están angustiados, y piden algo para el reflujo.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las alternativas: omeprazol por cuatro semanas, pH-metría, educar y tranquilizar con medidas posturales, ecografía para descartar el píloro, o suspender la lactancia materna. Piénsalo.',
        answer: 'Es la C. Es un lactante feliz que crece bien: reflujo fisiológico, y se educa y tranquiliza. La trampa más tentadora es la A, porque los padres piden un remedio, pero el omeprazol se reserva para el reflujo patológico. La ecografía tampoco va: no hay vómitos explosivos ni un lactante deshidratado. Y suspender la lactancia no tiene ningún fundamento.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 155',
      stem: 'Niño de 28 días con vómitos después de comer, que iniciaron hace una semana y han aumentado en frecuencia e intensidad. La madre refiere que llora después de comer y vomitar, y se objetiva que no ha incrementado bien de peso en el último tiempo, viéndose algo enflaquecido.',
      question: '¿Cuál es el examen de elección para iniciar el estudio en este paciente?',
      options: [
        { letter: 'A', text: 'Radiografía baritada de esófago-estómago-duodeno' },
        { letter: 'B', text: 'Ecografía abdominal' },
        { letter: 'C', text: 'Endoscopía digestiva alta con biopsia duodenal' },
        { letter: 'D', text: 'Colonoscopía con biopsia de la pared intestinal' },
        { letter: 'E', text: 'Radiografía simple toracoabdominal' },
      ],
      correct: 'B',
      explanation: 'Vómitos posprandiales que empiezan hacia las cuatro semanas de vida y van en aumento, con mal incremento de peso: estenosis hipertrófica del píloro. El examen de elección para iniciar el estudio es la ecografía abdominal, que muestra el píloro engrosado.',
      say: {
        stem: 'Ahora una pregunta real del examen, de diciembre de dos mil dieciocho. Niño de veintiocho días con vómitos después de comer, que empezaron hace una semana y han ido aumentando. La madre cuenta que llora después de comer y de vomitar, y el niño no ha subido bien de peso, se ve algo enflaquecido.',
        question: '¿Cuál es el examen de elección para iniciar el estudio en este paciente?',
        options: 'Las opciones: radiografía baritada de esófago, estómago y duodeno, ecografía abdominal, endoscopía digestiva alta con biopsia, colonoscopía con biopsia, o radiografía simple de tórax y abdomen. Piénsalo.',
        answer: 'Es la B. Vómitos posprandiales desde las cuatro semanas de vida, en aumento, con mal incremento de peso: es la estenosis hipertrófica del píloro, y el examen que la confirma es la ecografía abdominal, buscando el píloro engrosado.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 130',
      stem: 'Recién nacido de 4 semanas de vida presenta vómitos posprandiales abundantes, desde hace una semana, asociados a detención del incremento ponderal. La madre refiere que lo nota hambriento y toma leche ávidamente.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Solicitar radiografía de abdomen simple' },
        { letter: 'B', text: 'Realizar tratamiento endoscópico' },
        { letter: 'C', text: 'Observar evolución' },
        { letter: 'D', text: 'Realizar pilorotomía de Ramstedt' },
        { letter: 'E', text: 'Realizar funduplicatura gástrica' },
      ],
      correct: 'D',
      explanation: 'El cuadro es una estenosis hipertrófica del píloro clásica: vómitos posprandiales abundantes desde la cuarta semana, con detención del incremento de peso y un lactante ávido por comer. De las conductas ofrecidas, la que resuelve el cuadro es la pilorotomía de Ramstedt (siempre después de corregir la hidratación y los electrolitos, aunque acá el enunciado no los mencione).',
      say: {
        stem: 'Y otra pregunta real, de diciembre de dos mil diecisiete. Recién nacido de cuatro semanas con vómitos posprandiales abundantes desde hace una semana, y detención del incremento de peso. La madre lo nota hambriento, toma la leche con avidez.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: radiografía de abdomen simple, tratamiento endoscópico, observar la evolución, pilorotomía de Ramstedt, o funduplicatura gástrica. Piénsalo.',
        answer: 'Es la D. Es la misma estenosis del píloro que ya conoces, y de las conductas que te ofrecen, la que la resuelve es la pilorotomía de Ramstedt. Recuerda el orden: siempre se corrige antes la hidratación y los electrolitos, y recién después se opera.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 165',
      stem: 'Niño de 7 años que desde hace 3 años presenta deposiciones cada vez más infrecuentes y duras. Hace algunas semanas empeoran los síntomas, por lo que se inicia lactulosa 15 mililitros al día, sin lograr cambios. Además, comienza a manchar frecuentemente los calzoncillos con deposiciones.',
      question: '¿Cuál es la causa más probable de la falta de respuesta en este paciente?',
      options: [
        { letter: 'A', text: 'Dosis insuficiente de laxante' },
        { letter: 'B', text: 'Dieta baja en fibra' },
        { letter: 'C', text: 'Enfermedad de Hirschsprung' },
        { letter: 'D', text: 'Presencia de fecaloma' },
        { letter: 'E', text: 'Concomitancia de patología psiquiátrica' },
      ],
      correct: 'D',
      explanation: 'Constipación progresiva que no responde a un laxante de mantención, y que ahora se acompaña de manchado fecal: es un fecaloma, con pseudoincontinencia por rebosamiento. Un laxante de mantención no desimpacta; primero hay que sacar el fecaloma, con polietilenglicol oral, y recién después mantener.',
      say: {
        stem: 'Y una más del banco real, de diciembre de dos mil diecinueve. Niño de siete años que desde hace tres años tiene deposiciones cada vez más infrecuentes y duras. Hace algunas semanas empeoró, así que le iniciaron lactulosa, sin lograr cambios. Y ahora empezó a manchar los calzoncillos con deposiciones.',
        question: '¿Cuál es la causa más probable de la falta de respuesta en este paciente?',
        options: 'Las opciones: dosis insuficiente de laxante, dieta baja en fibra, enfermedad de Hirschsprung, presencia de fecaloma, o patología psiquiátrica concomitante. Piénsalo.',
        answer: 'Es la D. El manchado fecal es la pista: no es que el laxante esté fallando por la dosis, es que ya hay un fecaloma, y el líquido se escurre alrededor por rebosamiento. Un laxante de mantención no desimpacta nada; primero hay que sacarlo con polietilenglicol, y recién después mantener.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Lactante', tag: 'Reflujo y píloro', kind: 'key', items: [
          { t: 'Lactante feliz que crece bien', d: 'Reflujo fisiológico: educar, sin fármacos',
            say: 'Cerremos con las reglas de oro. El lactante feliz que crece bien tiene un reflujo fisiológico: se educa y se tranquiliza, sin fármacos.' },
          { t: 'Patológico: omeprazol', d: 'Mal incremento, respiratorio o sangre',
            say: 'Con mal incremento, síntomas respiratorios o sangre, es patológico, y la primera línea es el omeprazol.' },
          { t: 'Vómitos explosivos + alcalosis', d: 'Píloro: ecografía y Ramstedt',
            say: 'Vómitos explosivos entre la segunda y la sexta semana, con alcalosis hipoclorémica: estenosis del píloro, ecografía, y Ramstedt después de hidratar.' },
        ] },
        { title: 'Niño mayor', tag: 'Dolor y constipación', kind: 'pharma', items: [
          { t: 'Dolor sin alarma, cede en vacaciones', d: 'Funcional: explicar y tranquilizar',
            say: 'El dolor abdominal sin alarma, que cede en vacaciones, es funcional: se explica y se tranquiliza.' },
          { t: 'Fecaloma: primero desimpactar', d: 'Polietilenglicol, luego mantener 4 semanas o más',
            say: 'Y en la constipación con fecaloma, primero desimpactar con polietilenglicol, y después mantener por al menos cuatro semanas. Si te llevas una sola idea de hoy: en pediatría, primero mira al niño; si crece bien y está feliz, muchas veces la mejor receta es tranquilizar. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],
};
