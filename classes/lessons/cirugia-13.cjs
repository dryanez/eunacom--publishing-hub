// Clase 11.13 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_cirugia.cjs (cir-13, classId cirugia-13).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-13',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuánto quemó, cuánto repones y a quién derivas antes de las veinticuatro horas',
      say: 'Cerramos el bloque de trauma con el gran quemado, uno de los temas de mayor rentabilidad del EUNACOM. Vas a ver que casi todo se resuelve con tres preguntas en orden: cuánta superficie se quemó, si eso lo hace un gran quemado según el GES, y cuánto suero le repones en las primeras horas. Empecemos.',
    },

    {
      type: 'points',
      kicker: 'Profundidad',
      title: '¿Qué tan profunda es esta quemadura?',
      cards: [
        { title: 'Superficiales', tag: 'Duelen mucho', kind: 'normal', items: [
          { t: 'Primer grado', d: 'Eritema seco, sin flictenas, no cuenta',
            say: 'Antes de calcular nada, fíjate qué tan profunda es la quemadura, porque de eso depende todo lo que viene. El primer grado es solo eritema seco y doloroso, como una quemadura solar, y ojo con esto: no se cuenta para ningún cálculo de superficie.' },
          { t: 'Segundo grado superficial', d: 'Flictenas húmedas, rosadas, muy dolorosas',
            say: 'El segundo grado superficial sí tiene flictenas, con un lecho húmedo y rosado, y es el más doloroso de todos, porque las terminaciones nerviosas siguen intactas.' },
        ] },
        { title: 'Profundas', tag: 'Duelen poco o nada', kind: 'alert', items: [
          { t: 'Segundo grado profundo', d: 'Lecho pálido, seco, sensibilidad ya baja',
            say: 'El segundo grado profundo ya destruyó parte de esas terminaciones: el lecho se ve pálido y seco, y duele menos. Casi siempre necesita injerto.' },
          { t: 'Tercer grado', d: 'Escara acartonada, indolora, sin llenado capilar',
            say: 'Y el tercer grado es la escara acartonada, blanca o negra, completamente indolora. Guarda esta idea de que no duele, porque te va a servir más adelante para reconocer una complicación grave.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Extensión',
      title: 'La regla de Wallace: cuánto se quemó',
      nodes: [
        { id: 'nue', col: 0, row: 0, k: 'start', t: 'Regla de los nueve', s: 'Solo cuenta el segundo y tercer grado' },
        { id: 'cab', col: 1, row: 0, k: 'mech', t: 'Cabeza y cuello', s: 'Nueve por ciento' },
        { id: 'tro', col: 1, row: 1, k: 'mech', t: 'Tronco anterior o posterior', s: 'Dieciocho por ciento cada uno' },
        { id: 'bra', col: 1, row: 2, k: 'mech', t: 'Cada brazo entero', s: 'Nueve por ciento' },
        { id: 'pie', col: 1, row: 3, k: 'mech', t: 'Cada pierna entera', s: 'Dieciocho por ciento' },
        { id: 'pal', col: 2, row: 2, k: 'good', t: 'Regla de la palma', s: 'La mano del paciente vale uno por ciento' },
      ],
      edges: [
        { from: 'nue', to: 'cab' }, { from: 'nue', to: 'tro' }, { from: 'nue', to: 'bra' }, { from: 'nue', to: 'pie' },
        { from: 'bra', to: 'pal', label: 'parches dispersos' },
      ],
      steps: [
        { show: ['nue'], note: 'El primer grado nunca entra en la cuenta',
          say: 'Ahora sí, calculemos la superficie quemada, y la herramienta es la regla de los nueve de Wallace. Recuerda la regla de oro: solo sumas el segundo y el tercer grado. El eritema del primer grado no entra en ninguna cuenta.' },
        { show: ['cab'], note: 'Cabeza y cuello: nueve por ciento',
          say: 'La cabeza y el cuello valen nueve por ciento.' },
        { show: ['tro'], note: 'Tronco: dieciocho por ciento adelante, dieciocho atrás',
          say: 'El tronco vale dieciocho por ciento por delante, y otro dieciocho por atrás.' },
        { show: ['bra'], note: 'Cada brazo completo: nueve por ciento',
          say: 'Cada brazo completo vale nueve por ciento, así que los dos juntos son dieciocho.' },
        { show: ['pie'], note: 'Cada pierna completa: dieciocho por ciento',
          say: 'Y cada pierna completa vale dieciocho por ciento, treinta y seis entre las dos. El perineo, aparte, vale solo uno.' },
        { show: ['pal'], note: 'Útil en quemaduras parchadas',
          say: 'Y cuando las quemaduras están repartidas en parches, en vez de sumar segmentos completos, usa la palma del propio paciente con los dedos juntos: esa palma vale uno por ciento. Con esta suma, ya tienes el porcentaje de superficie corporal quemada, y ese número es la puerta de entrada a todo lo que viene.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Gravedad',
      title: '¿Es un gran quemado según el GES?',
      nodes: [
        { id: 'scq', col: 0, row: 1, k: 'q', t: '¿Cuánto suma la superficie?', s: 'Y qué zonas están comprometidas' },
        { id: 'gar', col: 1, row: 0, k: 'mech', t: 'Índice de Garcés', s: 'Edad más superficie ponderada por grado' },
        { id: 'maj', col: 1, row: 2, k: 'risk', t: 'Más de veinte por ciento', s: 'O más de diez en niños y ancianos' },
        { id: 'esp', col: 1, row: 3, k: 'risk', t: 'Zonas especiales o inhalación', s: 'Cara, manos, pies, genitales, vía aérea' },
        { id: 'ges', col: 2, row: 1, k: 'alert', t: 'Gran quemado, GES cincuenta y seis', s: 'Traslado antes de veinticuatro horas' },
        { id: 'men', col: 2, row: 3, k: 'good', t: 'Quemadura menor', s: 'Manejo ambulatorio' },
      ],
      edges: [
        { from: 'scq', to: 'gar' }, { from: 'gar', to: 'ges', label: 'más de setenta puntos' },
        { from: 'scq', to: 'maj', label: 'cumple' }, { from: 'maj', to: 'ges' },
        { from: 'scq', to: 'esp', label: 'cumple' }, { from: 'esp', to: 'ges' },
        { from: 'scq', to: 'men', label: 'nada de esto' },
      ],
      steps: [
        { show: ['scq'], note: 'La misma pregunta de siempre: ¿esto es grave?',
          say: 'Con el porcentaje ya calculado, viene la pregunta que decide todo: ¿esto es un gran quemado? Y aquí el examen te da varios caminos distintos para llegar a la misma respuesta.' },
        { show: ['gar'], note: 'Un puntaje sobre setenta ya es grave',
          say: 'El primer camino es el índice de Garcés: la edad del paciente, más la superficie de segundo grado, más el doble de la superficie de tercer grado. Si ese puntaje pasa de setenta, ya estás frente a un quemado grave.' },
        { show: ['maj'], note: 'El corte cambia en los extremos de la vida',
          say: 'El segundo camino es directo: más de veinte por ciento de superficie en un adulto, o más de diez en un niño o un adulto mayor, porque a esas edades toleran mucho peor la misma quemadura.' },
        { show: ['esp'], note: 'Aunque la superficie total sea chica',
          say: 'Y el tercer camino no depende del porcentaje, sino de dónde está la quemadura: cara, manos, pies, genitales, o si sospechas que la vía aérea también se quemó. Con cualquiera de estos tres caminos, llegas al mismo lugar.' },
        { show: ['ges'], note: 'Antes de veinticuatro horas, no antes de una semana',
          say: 'Gran quemado, y eso activa la garantía GES número cincuenta y seis: acceso a un centro especializado antes de veinticuatro horas. Fíjate en ese plazo, porque se pregunta tal cual.' },
        { show: ['men'], note: 'Sin ninguno de los criterios anteriores',
          say: 'Si no cumple ninguno de estos criterios, es una quemadura menor, y se maneja de forma ambulatoria con analgesia y curaciones.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Reanimación',
      title: 'Parkland: cuánto suero y en qué tiempo',
      cards: [
        { title: 'La fórmula', tag: 'Ringer lactato', kind: 'key', items: [
          { t: 'Cuatro por kilo por SCQ', d: 'Solo con segundo y tercer grado',
            say: 'Ya sabes que es un gran quemado, así que ahora repones el volumen que perdió, con la fórmula de Parkland: cuatro mililitros, por el peso en kilos, por el porcentaje de superficie quemada. Y de nuevo, solo cuenta el segundo y el tercer grado.' },
          { t: 'Ese total en veinticuatro horas', d: 'Todo en Ringer lactato',
            say: 'Ese resultado es el volumen total de Ringer lactato para las primeras veinticuatro horas.' },
        ] },
        { title: 'La distribución horaria', tag: 'El detalle que se pregunta', kind: 'alert', items: [
          { t: 'Mitad en las primeras ocho horas', d: 'Contadas desde el accidente, no del ingreso',
            say: 'Y aquí está el detalle que más se pregunta: la mitad de ese volumen se pasa en las primeras ocho horas, pero esas ocho horas se cuentan desde el momento del accidente, no desde que el paciente llega al hospital. Si demoró dos horas en llegar, te quedan solo seis para pasar esa mitad.' },
          { t: 'La otra mitad, en dieciséis horas', d: 'Completa las veinticuatro horas totales',
            say: 'La otra mitad se pasa en las dieciséis horas que quedan.' },
        ] },
        { title: 'La meta que manda', tag: 'Diuresis horaria', kind: 'pharma', items: [
          { t: 'Medio a un mililitro por hora', d: 'Por kilo, en adultos, con sonda Foley',
            say: 'Pero no te quedes solo con la fórmula: Parkland es una estimación inicial, y lo que de verdad decide cuánto sigues pasando es la diuresis horaria, con sonda Foley. En el adulto, la meta es de medio a un mililitro por kilo por hora.' },
          { t: 'Más alto en niños', d: 'Sube la meta si hay mioglobinuria',
            say: 'En los niños la meta sube un poco, y si hay mioglobinuria por una quemadura eléctrica, sube todavía más, para arrastrar esa mioglobina y proteger el riñón.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Urgencias del quemado',
      title: 'Lo que mata antes de que llegues al suero',
      nodes: [
        { id: 'sos', col: 0, row: 0, k: 'risk', t: 'Sospecha de vía aérea quemada', s: 'Vibrisas chamuscadas, esputo con hollín' },
        { id: 'int', col: 1, row: 0, k: 'alert', t: 'Intubación precoz', s: 'Antes de que el edema cierre la glotis' },
        { id: 'mon', col: 0, row: 1, k: 'risk', t: 'Intoxicación por monóxido', s: 'Todo rescatado de incendio cerrado' },
        { id: 'oxi', col: 1, row: 1, k: 'alert', t: 'Oxígeno al cien por ciento', s: 'El saturómetro engaña, sale normal' },
        { id: 'cir', col: 0, row: 2, k: 'risk', t: 'Escara circular de tercer grado', s: 'En una extremidad o en el tórax' },
        { id: 'esc', col: 1, row: 2, k: 'alert', t: 'Escarotomía de urgencia', s: 'Corta la escara, no la piel sana' },
      ],
      edges: [
        { from: 'sos', to: 'int' }, { from: 'mon', to: 'oxi' }, { from: 'cir', to: 'esc' },
      ],
      steps: [
        { show: ['sos'], note: 'Busca estos signos en la cara',
          say: 'Antes de terminar, tres urgencias que pueden matar mucho antes que la falta de volumen. La primera es la vía aérea: sospecha injuria por inhalación si ves vibrisas nasales chamuscadas, esputo con hollín, o disfonía.' },
        { show: ['int'], note: 'No esperes a que aparezca el estridor',
          say: 'Y la conducta es intubar de forma precoz, antes de que el edema de la glotis avance tanto que ya no puedas pasar el tubo.' },
        { show: ['mon'], note: 'Se asume en todo incendio en un espacio cerrado',
          say: 'La segunda urgencia es el monóxido de carbono. A todo paciente rescatado de un incendio en un espacio cerrado lo tratas como intoxicado, aunque se vea bien. Y aquí va la trampa clásica: el saturómetro de dedo sale normal, porque no distingue el oxígeno de la carboxihemoglobina.' },
        { show: ['oxi'], note: 'El oxígeno es tratamiento, no solo soporte',
          say: 'Por eso das oxígeno al cien por ciento con mascarilla con reservorio de inmediato: eso saca el monóxido de la hemoglobina mucho más rápido.' },
        { show: ['cir'], note: 'La escara actúa como un torniquete',
          say: 'Y la tercera es mecánica: una escara de tercer grado que rodea completamente una extremidad o el tórax se comporta como un torniquete que no cede, mientras el edema de abajo sigue creciendo.' },
        { show: ['esc'], note: 'Se corta sin anestesia porque la escara es insensible',
          say: 'Ahí no esperas: escarotomía de urgencia, cortando solo la escara hasta la grasa, sin necesidad de anestesia, porque el tercer grado ya no siente. Si esperas a que se pierdan los pulsos, ya perdiste la extremidad.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora ordenemos todo el razonamiento del gran quemado en un solo árbol.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Los errores que más se repiten en el gran quemado',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Calcular la superficie quemada', 'Sumar solo segundo y tercer grado', 'Incluir el eritema de primer grado'],
          say: 'Repasemos las trampas. Al calcular la superficie, solo se suma el segundo y el tercer grado. Sumar el eritema de primer grado infla el cálculo y te hace pasar suero de más.' },
        { cells: ['Contar las ocho horas de Parkland', 'Desde la hora del accidente', 'Desde que el paciente llega al hospital'],
          say: 'Las ocho horas de Parkland se cuentan desde el accidente, no desde el ingreso. Contarlas desde el ingreso deja al paciente sub reanimado justo cuando más lo necesita.' },
        { cells: ['Rescatado de incendio, satura noventa y ocho por ciento', 'Sospechar monóxido igual, pedir carboxihemoglobina', 'Confiar en la oximetría de pulso'],
          say: 'Un rescatado de incendio con saturación de noventa y ocho por ciento igual puede estar intoxicado con monóxido: pide carboxihemoglobina. Confiar en el saturómetro es el error que más cuesta.' },
        { cells: ['Escara circular con pulsos que se pierden', 'Escarotomía de urgencia', 'Esperar a la evaluación de un especialista'],
          say: 'Y con una escara circular y pulsos que empiezan a perderse, la escarotomía se hace ya, sin esperar a un especialista que puede llegar tarde.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 28 años sufre quemaduras por líquido caliente hace 3 horas. Presenta flictenas húmedas y rosadas, muy dolorosas, en todo el tronco anterior y en toda una extremidad inferior. No tiene compromiso facial ni de la vía aérea. Pesa 60 kg.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Manejo ambulatorio con analgesia oral y curaciones' },
        { letter: 'B', text: 'Calcular Parkland con 36 % de superficie quemada y derivar como gran quemada' },
        { letter: 'C', text: 'Calcular Parkland con 18 % de superficie quemada y derivar como gran quemada' },
        { letter: 'D', text: 'Indicar antibióticos profilácticos y control ambulatorio en 48 horas' },
        { letter: 'E', text: 'Realizar escarotomía profiláctica antes de cualquier examen' },
      ],
      correct: 'B',
      explanation: 'Tronco anterior (18 %) más una extremidad inferior completa (18 %) suman 36 % de superficie quemada de segundo grado, que supera el 20 % que define gran quemado en adultos. Se calcula Parkland con ese 36 % y se activa el traslado GES. La escarotomía no aplica: no hay escara circular de tercer grado.',
      say: {
        stem: 'Vamos con un caso. Mujer de veintiocho años con quemaduras por líquido caliente hace tres horas: flictenas húmedas, rosadas y muy dolorosas en todo el tronco anterior y en toda una pierna. Sin compromiso facial ni de la vía aérea, y pesa sesenta kilos.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Tienes cinco opciones: manejo ambulatorio, calcular Parkland con treinta y seis por ciento y derivar como gran quemada, calcular Parkland con dieciocho por ciento y derivar, dar antibióticos y controlar en dos días, o hacer una escarotomía profiláctica. Piénsalo.',
        answer: 'Es la B. Suma la superficie: tronco anterior, dieciocho por ciento, más una pierna completa, otro dieciocho. Son treinta y seis por ciento, muy por encima del veinte que define gran quemado en un adulto. Con ese número calculas Parkland y activas el traslado GES. La escarotomía es la trampa: aquí no hay ninguna escara circular de tercer grado, así que no corresponde.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 77',
      stem: 'Niño con quemadura en palmas y dedos, con eritema importante y ampollas, que llega a urgencias inquieto e irritable.',
      question: '¿Cuál es la conducta inicial?',
      options: [
        { letter: 'A', text: 'Aplicar apósitos de plata y hospitalizar' },
        { letter: 'B', text: 'Enfriar con agua fría y cubrir con gasa estéril' },
        { letter: 'C', text: 'Indicar analgesia endovenosa' },
        { letter: 'D', text: 'Hospitalizar para manejo de quemaduras' },
        { letter: 'E', text: 'Debridación bajo anestesia general inmediata' },
      ],
      correct: 'C',
      explanation: 'Antes de cualquier cálculo, examen o curación, el paciente quemado necesita analgesia endovenosa: el dolor de las quemaduras es intenso y tratarlo primero facilita todo lo que viene después, incluyendo la evaluación de la extensión y la profundidad.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de enero de dos mil veintitrés. Un niño llega a urgencias con una quemadura en las palmas y los dedos, con eritema importante y ampollas, inquieto e irritable.',
        question: '¿Cuál es la conducta inicial?',
        options: 'Las opciones son: apósitos de plata y hospitalizar, enfriar con agua fría y cubrir, dar analgesia endovenosa, hospitalizar para manejo de quemaduras, o debridar bajo anestesia general de inmediato. Piénsalo.',
        answer: 'La respuesta es la C. Antes de medir superficie, antes de curar, lo primero siempre es tratar el dolor: analgesia endovenosa. Y fíjate en el distractor del agua fría: se enfría con agua tibia, nunca fría, porque el agua fría agrega hipotermia a un paciente que ya está perdiendo calor por la piel quemada.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 10',
      stem: 'Paciente de 27 años presenta cefalea, malestar general, disnea y opresión precordial, 3 horas después de estar expuesto a humo en un incendio en su casa. Frecuencia cardíaca 100 por minuto, presión arterial 130/85, frecuencia respiratoria 35, saturación de oxígeno 96 %. Sin cianosis, examen cardiopulmonar normal.',
      question: '¿Qué examen confirma la sospecha diagnóstica?',
      options: [
        { letter: 'A', text: 'Radiografía de tórax' },
        { letter: 'B', text: 'TAC de tórax' },
        { letter: 'C', text: 'Niveles de carboxihemoglobina' },
        { letter: 'D', text: 'Gases en sangre arterial' },
        { letter: 'E', text: 'Monitorización transcutánea de anhídrido carbónico' },
      ],
      correct: 'C',
      explanation: 'El cuadro corresponde a intoxicación por monóxido de carbono. La saturación de pulso es falsamente normal porque no distingue oxihemoglobina de carboxihemoglobina, y los gases arteriales tampoco alteran la presión de oxígeno. El examen que confirma el diagnóstico es la medición directa de carboxihemoglobina.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Paciente de veintisiete años con cefalea, malestar, dificultad para respirar y opresión en el pecho, tres horas después de estar expuesto a humo en un incendio en su casa. Su saturación es noventa y seis por ciento, sin cianosis, y el examen cardiopulmonar es normal.',
        question: '¿Qué examen confirma la sospecha diagnóstica?',
        options: 'Las opciones son: radiografía de tórax, TAC de tórax, niveles de carboxihemoglobina, gases arteriales, o monitorización del anhídrido carbónico. Piénsalo.',
        answer: 'Es la C. Fíjate en la trampa: la saturación sale casi normal, y por eso muchos alumnos descartan la intoxicación. Pero eso es justo lo que vimos: el saturómetro no distingue el monóxido del oxígeno. Los gases arteriales tampoco te sirven, porque la presión de oxígeno sigue normal. Lo único que confirma el diagnóstico es medir la carboxihemoglobina de forma directa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 41',
      stem: 'Paciente de 25 años, encontrada inconsciente en el baño de su casa. Glasgow 15, presión arterial 110/60, frecuencia cardíaca 115, frecuencia respiratoria 12, saturación de oxígeno 98 %. Examen cardiopulmonar normal. Carboxihemoglobina de 20 por ciento.',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Administrar oxígeno por naricera de alto flujo' },
        { letter: 'B', text: 'Solicitar una TAC de cerebro' },
        { letter: 'C', text: 'Realizar terapia hiperbárica' },
        { letter: 'D', text: 'Administrar broncodilatadores por vía inhalada' },
        { letter: 'E', text: 'Administrar oxígeno por mascarilla de no recirculación' },
      ],
      correct: 'E',
      explanation: 'Confirmada la intoxicación por monóxido de carbono, el tratamiento inicial es oxígeno al cien por ciento con mascarilla de no recirculación, que acelera la eliminación del monóxido de la hemoglobina. La terapia hiperbárica se reserva para carboxihemoglobina sobre veinticinco por ciento o compromiso de conciencia importante, criterios que este caso no cumple.',
      say: {
        stem: 'Y una última pregunta real, del EUNACOM de julio de dos mil veinticuatro. Paciente de veinticinco años, encontrada inconsciente en su baño. Glasgow quince, signos vitales casi normales, y una carboxihemoglobina de veinte por ciento.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: oxígeno por naricera de alto flujo, TAC de cerebro, terapia hiperbárica, broncodilatadores inhalados, u oxígeno por mascarilla de no recirculación. Piénsalo.',
        answer: 'Es la E. El tratamiento siempre parte con oxígeno al cien por ciento en mascarilla de no recirculación, que desplaza al monóxido de la hemoglobina mucho más rápido que el aire ambiental. La cámara hiperbárica es la trampa tentadora, pero se reserva para cuando la carboxihemoglobina pasa de veinticinco por ciento o hay compromiso de conciencia, y aquí no se cumple ninguno de los dos.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Cálculo', tag: 'Solo segundo y tercer grado', kind: 'key', items: [
          { t: 'Wallace para la extensión', d: 'El primer grado nunca se suma',
            say: 'Cerremos con las reglas de oro. Calcula con Wallace, y nunca sumes el primer grado.' },
          { t: 'Gran quemado', d: 'Más de veinte por ciento, o zonas especiales, o inhalación',
            say: 'Y es gran quemado con más de veinte por ciento de superficie, con zonas especiales comprometidas, o con sospecha de inhalación.' },
        ] },
        { title: 'Reanimación', tag: 'Parkland guiado por diuresis', kind: 'pharma', items: [
          { t: 'Mitad en las primeras ocho horas', d: 'Contadas desde el accidente, no del ingreso',
            say: 'La mitad del volumen se pasa en las primeras ocho horas contadas desde el accidente.' },
          { t: 'La diuresis manda sobre la fórmula', d: 'Medio a un mililitro por kilo por hora',
            say: 'Y por sobre la fórmula, siempre manda la diuresis horaria.' },
        ] },
        { title: 'Urgencias', tag: 'Lo que mata primero', kind: 'alert', items: [
          { t: 'Saturación normal no descarta monóxido', d: 'Pide carboxihemoglobina si hay sospecha',
            say: 'Y no confíes en una saturación normal si hubo un incendio cerrado: pide carboxihemoglobina. Si te llevas una sola idea de hoy: primero calcula bien la superficie, porque de ese número dependen la reposición de volumen y la decisión de derivar. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: (() => {
    const escarotomia = N('alert', 'Escarotomía de urgencia', 'Sin esperar evaluación de especialista',
      'La escara actúa como un torniquete: cortas de inmediato, sin anestesia, porque el tercer grado ya no siente.');

    const parkland = N('do', 'Fórmula de Parkland', 'Cuatro por kilo por el porcentaje quemado',
      'Calculas el volumen total, y pasas la mitad en las primeras ocho horas desde el accidente, y la otra mitad en las dieciséis horas siguientes.',
      ['¿Escara circular de tercer grado con pulsos que se pierden?', escarotomia]);

    const granQuemado = N('alert', 'Gran quemado, GES cincuenta y seis', 'Traslado a centro especializado antes de veinticuatro horas',
      'Con cualquiera de estos criterios, activas la garantía GES y trasladas antes de veinticuatro horas.',
      ['¿Cuánto Ringer lactato en veinticuatro horas?', parkland]);

    const quemaduraMenor = N('ok', 'Quemadura menor', 'Manejo ambulatorio con analgesia y curaciones',
      'Sin ninguno de esos criterios, el manejo es ambulatorio, con buena analgesia y curaciones oclusivas estériles.');

    const wallace = N('do', 'Calcular con la regla de Wallace', 'El primer grado nunca se cuenta',
      'Con la regla de los nueve calculas el porcentaje exacto, sumando solo el segundo y el tercer grado.',
      ['¿Más de veinte por ciento, zona especial o inhalación?', granQuemado],
      ['¿No cumple ningún criterio de gran quemado?', quemaduraMenor]);

    const intubacion = N('alert', 'Intubación precoz', 'Antes de que el edema cierre la glotis',
      'Si hay vibrisas chamuscadas, esputo con hollín o disfonía, intubas antes de que el edema avance y ya no puedas.');

    const root = N('start', 'Paciente con quemaduras', 'Enfriar con agua tibia, nunca fría',
      'Llega un paciente quemado. Primero detienes el proceso de la quemadura y enfrías con agua tibia, nunca fría, para no agregar hipotermia.',
      ['¿Signos de vía aérea quemada o inhalación?', intubacion],
      ['¿Cuánto suma la superficie de segundo y tercer grado?', wallace]);

    return { title: 'Gran quemado: la superficie decide la reposición y la derivación', root };
  })(),
};
