// Clase piloto 1.1 — guion docente escrito a mano. La pantalla muestra puntos cortos;
// `say` es lo que dice el locutor en ese paso (explica, conecta, no lee la diapositiva).
// Fuente clínica: books/scripts/dataset_gastroenterologia.cjs (gastro-01).

module.exports = {
  id: 'gastro-01',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuándo basta la clínica, cuándo se endoscopia y qué decide la conducta en el Barrett',
      say: 'Bienvenidos. Hoy vemos reflujo gastroesofágico y esófago de Barrett, uno de los temas que más se repite en el EUNACOM: ocho preguntas en los últimos años. Y la buena noticia es que casi todas se responden con una sola idea: saber cuándo basta la clínica y cuándo hay que pedir una endoscopía. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: '¿Por qué se produce el reflujo?',
      nodes: [
        { id: 'her', col: 0, row: 0, k: 'cause', t: 'Hernia hiatal', s: 'El cardias sube al tórax' },
        { id: 'eei', col: 0, row: 1, k: 'cause', t: 'Relajación transitoria del EEI', s: 'El esfínter se abre sin tragar' },
        { id: 'acl', col: 0, row: 2, k: 'cause', t: 'Aclaramiento lento', s: 'El ácido se queda más tiempo' },
        { id: 'ref', col: 1, row: 1, k: 'mech', t: 'El ácido sube al esófago', s: 'Reflujo gastroesofágico' },
        { id: 'sin', col: 2, row: 1, k: 'effect', t: 'Pirosis y regurgitación', s: 'Peor al acostarse y tras comer' },
        { id: 'cro', col: 2, row: 2, k: 'risk', t: 'Ácido por años', s: 'Más de 5 años de pirosis' },
        { id: 'bar', col: 3, row: 2, k: 'risk', t: 'Esófago de Barrett', s: 'Riesgo de adenocarcinoma' },
      ],
      edges: [
        { from: 'eei', to: 'ref' },
        { from: 'ref', to: 'sin' },
        { from: 'her', to: 'ref', label: 'agrava' },
        { from: 'acl', to: 'ref', label: 'prolonga' },
        { from: 'ref', to: 'cro', label: 'si persiste' },
        { from: 'cro', to: 'bar' },
      ],
      steps: [
        { show: ['eei'], note: 'No es exceso de ácido: es una barrera que falla',
          say: 'Empecemos por el mecanismo, porque explica todo lo demás. El reflujo no se produce porque el estómago fabrique demasiado ácido. El problema es la barrera: el esfínter esofágico inferior se relaja de forma transitoria, sin que el paciente esté tragando, y en ese momento la puerta queda abierta.' },
        { show: ['ref'], note: 'Por la puerta abierta, el contenido gástrico sube',
          say: 'Y por esa puerta abierta, el contenido del estómago sube al esófago. Eso es el reflujo.' },
        { show: ['sin'], note: 'Ácido sobre una mucosa que no está preparada',
          say: 'Cuando ese ácido toca una mucosa que no está preparada para él, aparecen los síntomas: la pirosis, ese ardor que sube por detrás del esternón, y la regurgitación ácida. ¿Y por qué empeoran al acostarse o después de una comida abundante? Porque la gravedad deja de ayudar y el estómago está lleno. El mecanismo te explica la clínica.' },
        { show: ['her'], note: 'Hernia hiatal: la barrera pierde el apoyo del diafragma',
          say: 'Hay factores que empeoran este escenario. El primero es la hernia hiatal: el cardias sube al tórax, pierde el apoyo del diafragma, y la barrera queda todavía más débil.' },
        { show: ['acl'], note: 'Si el esófago limpia lento, cada episodio daña más',
          say: 'El segundo es el aclaramiento. Si el esófago es lento para devolver ese ácido al estómago, cada episodio dura más, y por lo tanto daña más.' },
        { show: ['cro', 'bar'], note: 'Ácido por años → Barrett → riesgo de cáncer',
          say: 'Y aquí está la conexión con lo más importante de la clase. Cuando esa exposición al ácido se mantiene por años, el epitelio del esófago se adapta y se transforma. Eso es el esófago de Barrett, y su importancia es que abre la puerta al adenocarcinoma. Guarda esta idea, porque la retomamos más adelante.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: '¿Cómo llega este paciente a tu consulta?',
      cards: [
        { title: 'Presentación típica', tag: 'Diagnóstico clínico', kind: 'key', items: [
          { t: 'Pirosis retroesternal', d: 'Ardor que sube detrás del esternón',
            say: 'Veamos cómo llega el paciente. En la forma típica te cuenta exactamente lo que el mecanismo predice: pirosis, ese ardor que sube por detrás del esternón.' },
          { t: 'Regurgitación ácida', d: 'Peor al acostarse y tras comidas abundantes',
            say: 'Y regurgitación ácida, que empeora al acostarse o después de comer mucho. Fíjate en algo importante: si el cuadro es así de típico y no hay signos de alarma, no necesitas ningún examen. El diagnóstico es clínico.' },
        ] },
        { title: 'Presentación atípica', tag: 'Ojo en el examen', kind: 'alert', items: [
          { t: 'Tos crónica y asma difícil', d: 'También disfonía y erosiones dentales',
            say: 'Pero el reflujo también puede disfrazarse. El ácido que sube puede irritar la vía aérea, y dar tos crónica, un asma de difícil control, disfonía, e incluso erosiones en los dientes.' },
          { t: 'Dolor torácico no cardíaco', d: 'Primero descartar el corazón',
            say: 'Y la forma atípica más delicada es el dolor torácico. Antes de decir que un dolor torácico es reflujo, tienes que descartar el corazón. Primero electrocardiograma y troponinas; recién después piensas en el esófago.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Banderas rojas',
      title: 'Signos de alarma: cuándo la endoscopía no se discute',
      nodes: [
        { id: 'dis', col: 0, row: 0, k: 'risk', t: 'Disfagia u odinofagia', s: 'Algo obstruye o ulcera' },
        { id: 'pes', col: 0, row: 1, k: 'risk', t: 'Baja de peso o anemia', s: 'Pensar en cáncer' },
        { id: 'hem', col: 0, row: 2, k: 'risk', t: 'Hemorragia digestiva', s: 'Hematemesis o melena' },
        { id: 'eda', col: 0, row: 3, k: 'risk', t: 'Inicio después de los 50', s: 'Más riesgo de neoplasia' },
        { id: 'noc', col: 0, row: 4, k: 'risk', t: 'Pirosis de más de 5 años', s: 'O síntomas que despiertan' },
        { id: 'end', col: 2, row: 2, k: 'good', t: 'Endoscopía digestiva alta', s: 'Con biopsias' },
        { id: 'tra', col: 3, row: 2, k: 'trap', t: 'Subir el IBP a ciegas', s: 'Retrasa el diagnóstico' },
      ],
      edges: [
        { from: 'dis', to: 'end' }, { from: 'pes', to: 'end' }, { from: 'hem', to: 'end' },
        { from: 'eda', to: 'end' }, { from: 'noc', to: 'end' },
        { from: 'end', to: 'tra', label: 'nunca' },
      ],
      steps: [
        { show: ['dis'], note: 'Disfagia: la bandera roja más importante',
          say: 'Ahora, la pregunta que más se repite en el examen: ¿cuándo este paciente necesita una endoscopía? La respuesta está en los signos de alarma. El primero, y el más importante, es la disfagia, o la odinofagia. Si la comida se detiene o duele al pasar, algo está obstruyendo o ulcerando el esófago.' },
        { show: ['pes'], note: 'Baja de peso o anemia: cáncer hasta demostrar lo contrario',
          say: 'El segundo grupo es la baja de peso y la anemia. En un paciente con síntomas digestivos altos, eso te obliga a pensar en un cáncer hasta demostrar lo contrario.' },
        { show: ['hem'], note: 'Cualquier sangrado digestivo alto',
          say: 'Luego, cualquier hemorragia digestiva: hematemesis o melena.' },
        { show: ['eda'], note: 'Síntomas nuevos después de los 50 años',
          say: 'Después viene la edad. Si los síntomas comienzan después de los cincuenta años, el riesgo de neoplasia sube lo suficiente como para estudiar de entrada.' },
        { show: ['noc'], note: 'Reflujo de larga data: buscar Barrett',
          say: 'Y el último conecta con lo que vimos en el mecanismo: la pirosis de más de cinco años, o los síntomas que despiertan al paciente en la noche. Aquí lo que buscamos es el esófago de Barrett.' },
        { show: ['end'], note: 'Basta un solo signo',
          say: 'Cualquiera de estos signos, y basta uno solo, te lleva al mismo lugar: endoscopía digestiva alta con biopsias.' },
        { show: ['tra'], note: 'Trampa: duplicar el omeprazol y controlar',
          say: 'Y ojo con la trampa clásica. La alternativa que dice duplicar el omeprazol y controlar suena prudente, pero es incorrecta. Si hay alarma, tratar a ciegas solo retrasa el diagnóstico de un cáncer.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Tratamiento: de las medidas generales a la cirugía',
      cards: [
        { title: 'Medidas generales', tag: 'Siempre', kind: 'normal', items: [
          { t: 'Elevar la cabecera', d: 'Y fraccionar la alimentación',
            say: 'Pasemos al tratamiento. Todo parte con medidas generales, y tienen lógica si recuerdas el mecanismo: elevar la cabecera de la cama y fraccionar las comidas, para que la gravedad ayude y el estómago no esté tan lleno.' },
          { t: 'Bajar de peso, dejar el tabaco', d: 'Evitar alcohol, cafeína y grasas',
            say: 'Además, bajar de peso, dejar el tabaco, y evitar el alcohol, la cafeína y las comidas grasas, que relajan todavía más el esfínter.' },
        ] },
        { title: 'Inhibidor de la bomba de protones', tag: 'Fármaco de elección', kind: 'pharma', items: [
          { t: 'Omeprazol en ayunas', d: '30 a 60 minutos antes del desayuno',
            say: 'Pero el pilar es el inhibidor de la bomba de protones: omeprazol, esomeprazol o lansoprazol. Y un detalle que se pregunta: se toma en ayunas, treinta a sesenta minutos antes del desayuno, para que esté actuando justo cuando la comida enciende las bombas de ácido.' },
          { t: 'Antagonistas H2: desplazados', d: 'No se combinan con el IBP',
            say: '¿Y la ranitidina? Los antagonistas H2 quedaron desplazados. Si aparecen como tratamiento de primera línea, descártalos, y tampoco se combinan con el IBP.' },
        ] },
        { title: 'Cirugía antirreflujo', tag: 'Funduplicatura de Nissen', kind: 'alert', items: [
          { t: 'Joven dependiente de IBP', d: 'Con reflujo grave',
            say: 'La cirugía, la funduplicatura de Nissen, queda para casos bien puntuales. El paciente joven, con reflujo grave, que depende del IBP.' },
          { t: 'Hernia hiatal voluminosa', d: 'Que da síntomas',
            say: 'La hernia hiatal voluminosa que da síntomas.' },
          { t: 'Barrett con displasia de alto grado', d: 'No por la metaplasia sola',
            say: 'Y el esófago de Barrett con displasia de alto grado. Fíjate que dije displasia: el Barrett sin displasia no se opera. Y eso es justamente lo que vamos a ver ahora.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Esófago de Barrett',
      title: 'Barrett: lo que decide la conducta es la biopsia',
      nodes: [
        { id: 'aci', col: 0, row: 1, k: 'cause', t: 'Ácido por años', s: 'Reflujo crónico' },
        { id: 'met', col: 1, row: 1, k: 'mech', t: 'Metaplasia intestinal', s: 'Epitelio plano pasa a cilíndrico' },
        { id: 'bio', col: 2, row: 1, k: 'q', t: '¿Hay displasia?', s: 'Lo define la biopsia' },
        { id: 'sin', col: 3, row: 0, k: 'good', t: 'Sin displasia', s: 'IBP + endoscopía de vigilancia' },
        { id: 'baj', col: 3, row: 1, k: 'refer', t: 'Displasia de bajo grado', s: 'Ablación endoscópica' },
        { id: 'alt', col: 3, row: 2, k: 'risk', t: 'Displasia de alto grado', s: 'Resección endoscópica o esofagectomía' },
      ],
      edges: [
        { from: 'aci', to: 'met' }, { from: 'met', to: 'bio' },
        { from: 'bio', to: 'sin', label: 'no' }, { from: 'bio', to: 'baj', label: 'bajo grado' }, { from: 'bio', to: 'alt', label: 'alto grado' },
      ],
      steps: [
        { show: ['aci'], note: 'Retomamos la conexión pendiente',
          say: 'Volvamos a la conexión que dejamos pendiente. Cuando el ácido baña el esófago durante años...' },
        { show: ['met'], note: 'Barrett = metaplasia intestinal en la biopsia',
          say: '...el epitelio plano normal es reemplazado por un epitelio cilíndrico, de tipo intestinal. Eso es la metaplasia intestinal, y eso es el esófago de Barrett. Es asintomático: el paciente solo tiene los síntomas de su reflujo, y por eso lo encontramos cuando lo buscamos.' },
        { show: ['bio'], note: 'Metaplasia y displasia son conceptos distintos',
          say: 'Su importancia es el riesgo de progresar a adenocarcinoma. Y aquí está la clave de todo el tema: la conducta no la define la metaplasia. La define la biopsia, y en particular, si hay o no displasia.' },
        { show: ['sin'], note: 'Sin displasia: no se opera',
          say: 'Sin displasia: inhibidor de la bomba de protones y endoscopías de vigilancia. Nada más. No se opera.' },
        { show: ['baj'], note: 'Bajo grado: ablación',
          say: 'Con displasia de bajo grado, el tratamiento es la ablación endoscópica.' },
        { show: ['alt'], note: 'Lo que lleva a tratar es la displasia',
          say: 'Y con displasia de alto grado, resección endoscópica o esofagectomía. Si te quedas con una sola frase de esta parte, que sea esta: metaplasia y displasia no son lo mismo, y lo que lleva a tratar es la displasia.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol de decisión, tal como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Pirosis típica, menor de 50, sin alarma', 'Prueba con IBP 4–8 semanas', 'Pedir endoscopía de entrada'],
          say: 'Repasemos las trampas que más se repiten. Pirosis típica, menor de cincuenta, sin alarma: prueba con IBP por cuatro a ocho semanas. El error es pedir una endoscopía de entrada.' },
        { cells: ['Pirosis con disfagia o baja de peso', 'Endoscopía digestiva alta', 'Subir el IBP sin estudiar'],
          say: 'En cambio, si a la pirosis se suma disfagia o baja de peso, ahora sí va la endoscopía. Y el error es el contrario: subir la dosis de IBP sin estudiar.' },
        { cells: ['Duda diagnóstica o clínica atípica', 'pH-metría de 24 horas', 'Tratar a ciegas de forma indefinida'],
          say: 'Si hay duda diagnóstica o la clínica es atípica, la pH-metría de veinticuatro horas, en vez de dejar al paciente con tratamiento empírico para siempre.' },
        { cells: ['Barrett sin displasia', 'IBP + vigilancia endoscópica', 'Operar por la metaplasia'],
          say: 'Barrett sin displasia: IBP y vigilancia. Operar por la metaplasia es la respuesta incorrecta más clásica del tema.' },
        { cells: ['Barrett con displasia de alto grado', 'Resección endoscópica o esofagectomía', 'Solo aumentar el IBP'],
          say: 'Barrett con displasia de alto grado: resección endoscópica o esofagectomía. Aquí la trampa es quedarse corto, solo subiendo el IBP.' },
        { cells: ['Línea Z más de 2 cm sobre el diafragma', 'Hernia hiatal por deslizamiento', 'Llamarlo Barrett'],
          say: 'Y una última, que te va a servir en la pregunta real que viene. Si la endoscopía muestra la línea Z más de dos centímetros por encima de la impresión del diafragma, eso es una hernia hiatal por deslizamiento. No es Barrett: el Barrett solo lo diagnostica la biopsia.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 32 años, oficinista, consulta por 4 meses de ardor retroesternal ascendente que empeora tras el almuerzo y al acostarse, con regurgitación ácida. Niega disfagia, odinofagia, vómitos, baja de peso o anemia. Examen físico normal.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar omeprazol 20 mg al día en ayunas por 4 a 8 semanas' },
        { letter: 'B', text: 'Solicitar endoscopía digestiva alta con biopsias' },
        { letter: 'C', text: 'Solicitar pH-impedanciometría esofágica de 24 horas' },
        { letter: 'D', text: 'Indicar ranitidina 150 mg cada 12 horas y medidas posturales' },
        { letter: 'E', text: 'Solicitar radiografía de esófago, estómago y duodeno con bario' },
      ],
      correct: 'A',
      explanation: 'Joven, clínica típica y sin alarma: el diagnóstico es clínico y se indica prueba con IBP por 4–8 semanas. La endoscopía se reserva para la alarma o el inicio después de los 50 años; la pH-metría, para la duda o la clínica atípica; los antagonistas H2 están desplazados.',
      say: {
        stem: 'Vamos con un caso. Hombre de treinta y dos años, oficinista, con cuatro meses de ardor retroesternal que empeora después de almorzar y al acostarse, y regurgitación ácida. Niega disfagia, odinofagia, vómitos, baja de peso o anemia, y su examen es normal.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Tienes cinco opciones: iniciar omeprazol por cuatro a ocho semanas, pedir una endoscopía con biopsias, pedir una pH-impedanciometría, indicar ranitidina, o pedir una radiografía con bario. Tómate unos segundos.',
        answer: 'La respuesta es la A. Piensa en lo que acabamos de ver: es joven, el cuadro es típico, y buscamos alarma con cuidado: no hay ninguna. Entonces el diagnóstico es clínico y la conducta es la prueba con omeprazol en ayunas. La endoscopía es la trampa: sería correcta con alarma, o si los síntomas empezaran después de los cincuenta. La pH-metría es para la duda o la clínica atípica. Y la ranitidina, ya lo dijimos, está desplazada.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 65',
      stem: 'Paciente con pirosis y regurgitación. La endoscopía digestiva alta muestra la línea Z a 20 cm y la impresión diafragmática a 30 cm de la arcada dentaria.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Esófago de Barrett' },
        { letter: 'B', text: 'Hernia hiatal por deslizamiento (tipo I)' },
        { letter: 'C', text: 'Hernia hiatal paraesofágica (tipo II)' },
        { letter: 'D', text: 'Acalasia' },
        { letter: 'E', text: 'Esofagitis erosiva grado B' },
      ],
      correct: 'B',
      explanation: 'La línea Z debería coincidir con la impresión diafragmática. Aquí está 10 cm por encima: la unión gastroesofágica subió al tórax, lo que define la hernia hiatal por deslizamiento. El Barrett es un diagnóstico de biopsia, no de centímetros.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de enero de dos mil veintitrés. Paciente con pirosis y regurgitación. La endoscopía muestra la línea Z a veinte centímetros de la arcada dentaria, y la impresión diafragmática a treinta.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: esófago de Barrett, hernia hiatal por deslizamiento, hernia paraesofágica, acalasia, o esofagitis erosiva.',
        answer: 'Es la B, hernia hiatal por deslizamiento. La línea Z, que marca la unión entre el esófago y el estómago, debería estar a la altura del diafragma. Aquí está diez centímetros más arriba: el cardias subió al tórax. Y fíjate en el distractor: Barrett suena tentador porque hay reflujo, pero el Barrett se diagnostica con biopsia, no con una regla.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Primero la alarma', kind: 'key', items: [
          { t: 'Típico, joven y sin alarma', d: 'Diagnóstico clínico + prueba con IBP',
            say: 'Cerremos con las reglas de oro. Si el cuadro es típico, en un paciente joven y sin alarma, el diagnóstico es clínico y basta la prueba con IBP.' },
          { t: 'Un solo signo de alarma', d: 'Endoscopía con biopsias',
            say: 'Pero basta un solo signo de alarma para que la respuesta sea endoscopía con biopsias.' },
        ] },
        { title: 'Tratamiento', tag: 'Fármaco de elección', kind: 'pharma', items: [
          { t: 'IBP en ayunas', d: '30 a 60 minutos antes del desayuno',
            say: 'El IBP se toma en ayunas, antes del desayuno.' },
          { t: 'No se erradica H. pylori por reflujo', d: 'Sí en la úlcera péptica',
            say: 'Y un dato que nos sirve de puente para la próxima clase: el Helicobacter pylori no se erradica por reflujo, porque no tienen relación. Donde sí es obligatorio erradicarlo es en la úlcera péptica, que es justamente lo que viene.' },
        ] },
        { title: 'Esófago de Barrett', tag: 'Decide la biopsia', kind: 'alert', items: [
          { t: 'Barrett = metaplasia en la biopsia', d: 'No se diagnostica por centímetros',
            say: 'El Barrett es un diagnóstico de biopsia, no de centímetros.' },
          { t: 'La displasia decide', d: 'Sin displasia: IBP + vigilancia, sin cirugía',
            say: 'Y lo que decide la conducta es la displasia. Si te llevas una sola idea de hoy: en el reflujo, la pregunta es si hay alarma; en el Barrett, si hay displasia. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],
};
