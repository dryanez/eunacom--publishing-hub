// Clase 11.10 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_cirugia.cjs / dataset_cirugia_bloque_3.cjs (cir-10, classId cirugia-10).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-10',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Timpanismo o matidez: ese solo dato decide el tratamiento',
      say: 'Seguimos en trauma, ahora con el tórax. La clase pasada viste que en el paso B tienes que buscar lesiones que matan en minutos. Hoy vamos a esas lesiones una por una, y vas a ver que casi todas se distinguen con dos datos simples del examen físico: la percusión del tórax, y cómo están las venas del cuello en ese momento. Partamos por la más urgente de todas.',
    },

    {
      type: 'flow',
      kicker: 'Neumotórax a tensión',
      title: 'El aire que entra y no puede salir',
      nodes: [
        { id: 'val', col: 0, row: 1, k: 'cause', t: 'Válvula unidireccional', s: 'En el pulmón o la pared' },
        { id: 'atr', col: 1, row: 1, k: 'mech', t: 'El aire se atrapa', s: 'Entra al respirar, no sale al espirar' },
        { id: 'med', col: 2, row: 1, k: 'risk', t: 'El mediastino se desplaza', s: 'Colapsa el retorno venoso' },
        { id: 'shk', col: 3, row: 0, k: 'risk', t: 'Shock obstructivo', s: 'Hipotensión severa' },
        { id: 'cli', col: 3, row: 2, k: 'effect', t: 'Timpanismo e ingurgitación yugular', s: 'Con desviación de la tráquea' },
      ],
      edges: [
        { from: 'val', to: 'atr' }, { from: 'atr', to: 'med' },
        { from: 'med', to: 'shk' }, { from: 'med', to: 'cli' },
      ],
      steps: [
        { show: ['val'], note: 'Una laceración que actúa como válvula',
          say: 'Empecemos por la lesión que más rápido mata dentro del paso B. Una laceración en el pulmón o en la pared torácica arma una válvula que solo deja pasar el aire en un sentido, casi siempre en un paciente que tuvo un trauma cerrado de alta energía o una herida penetrante.' },
        { show: ['atr'], note: 'Entra y se queda adentro',
          say: 'El aire entra a la pleura cuando el paciente inspira, pero no puede salir cuando espira. Con cada respiración se acumula más presión adentro del tórax.' },
        { show: ['med'], note: 'La vena cava se comprime',
          say: 'Esa presión termina desplazando todo el mediastino hacia el lado sano, y comprime la vena cava. El corazón deja de recibir sangre de vuelta.' },
        { show: ['shk'], note: 'Un shock que no es por sangrado',
          say: 'Y eso produce un shock obstructivo: la presión arterial cae, no porque el paciente esté sangrando, sino porque el corazón no se puede llenar. Es un mecanismo completamente distinto al del hemotórax que viene después.' },
        { show: ['cli'], note: 'Los cuatro signos que se preguntan juntos',
          say: 'Al examen encuentras el murmullo pulmonar abolido de ese lado, timpanismo al percutir, las venas del cuello ingurgitadas, y la tráquea desviada hacia el lado contrario. Con estos cuatro signos juntos, el diagnóstico es clínico y no necesita ningún examen de imagen.' },
        { show: ['cli'], note: 'No esperes la radiografía',
          say: 'Nunca esperes una radiografía para descomprimir: eso solo demora una emergencia que se mide en segundos. Pero mira esta radiografía para que reconozcas lo que pasa por dentro: el pulmón colapsado a un lado y el mediastino empujado hacia el lado sano.',
          photo: { src: 'biblioteca/10_cirugia/cirugia-10/03_neumotorax-a-tension__cto-cirugia_p71.jpg', label: 'Neumotórax a tensión', at: 'Pero mira esta radiografía', credit: 'Manual CTO Cirugía 14.ª ed., p. 71' } },
      ],
    },

    {
      type: 'points',
      kicker: 'Neumotórax a tensión',
      title: 'Tratamiento y el neumotórax abierto',
      cards: [
        { title: 'Descompresión', tag: 'Antes que cualquier examen', kind: 'alert', items: [
          { t: 'Aguja gruesa', d: 'Segundo espacio intercostal, línea medioclavicular',
            say: 'El tratamiento es descomprimir ya, con una aguja gruesa en el segundo espacio intercostal, en la línea media de la clavícula.' },
          { t: 'Tubo pleural después', d: 'Deja el drenaje definitivo instalado',
            say: 'La aguja es solo el primer paso: después va un tubo pleural, en el quinto espacio intercostal, para dejar el drenaje definitivo.' },
        ] },
        { title: 'Neumotórax abierto', tag: 'Herida que silba', kind: 'criteria', items: [
          { t: 'Parche pegado en tres lados', d: 'Deja un lado libre, como una válvula',
            say: 'Distinto es el neumotórax abierto, cuando la herida de la pared es tan grande que el aire prefiere entrar por ahí. Ahí pones un parche oclusivo, pero pegado solo en tres de sus cuatro lados.' },
          { t: 'Nunca los cuatro lados', d: 'Sin tubo pleural antes, se ahoga en su propio aire',
            say: 'Ese lado libre deja escapar el aire al espirar. Si lo pegas por los cuatro lados sin haber puesto antes un tubo pleural, conviertes esa herida en un neumotórax a tensión.' },
        ] },
        { title: 'Dónde va el tubo', tag: 'El triángulo de seguridad', kind: 'normal', items: [
          { t: 'Quinto espacio intercostal', d: 'Entre la línea axilar anterior y la media',
            say: 'Y un detalle técnico que se pregunta bastante: el tubo pleural se instala en el quinto espacio intercostal, entre la línea axilar anterior y la media, en lo que se llama el triángulo de seguridad de la pared torácica lateral.' },
          { t: 'Por el borde superior costal', d: 'Ahí no está el paquete vascular',
            say: 'Y siempre pasando por el borde superior de la costilla inferior, nunca por el borde inferior, porque ahí es donde corre el paquete vascular intercostal.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Técnica del tubo pleural',
      title: 'Cómo se instala, se maneja y se retira',
      cards: [
        { title: 'Paso a paso', tag: 'Anestesia local', kind: 'criteria', items: [
          { t: 'Incisión de 2 a 3 cm', d: 'Por encima de la costilla inferior',
            say: 'Ya viste dónde va el tubo; ahora cómo se pone. Con anestesia local, y pasando siempre sobre el borde superior de la costilla inferior para no tocar el paquete vasculonervioso, haces una incisión de dos a tres centímetros.' },
          { t: 'Disección roma y dedo', d: 'Explorar el espacio pleural antes del tubo',
            say: 'Después disecas con una pinza, sin cortar, hasta entrar en la pleura, y metes el dedo para explorar el espacio y comprobar que estás dentro. Nunca se empuja el tubo a ciegas.' },
          { t: 'Tubo al vértice o a la base', d: 'Neumotórax arriba; hemotórax abajo y atrás',
            say: 'Y la dirección depende de lo que quieres sacar. Si es aire, el tubo se orienta hacia el vértice. Si es sangre, hacia la base y hacia atrás.' },
        ] },
        { title: 'Sello de agua', tag: 'Conexión y control', kind: 'key', items: [
          { t: 'Conectar a sello de agua', d: 'Aspiración de 20 cm de agua si hay fuga',
            say: 'El tubo se conecta a un sello de agua, que deja salir el aire y la sangre pero no deja que entre nada. Si la fuga de aire persiste, se agrega aspiración de veinte centímetros de agua.' },
          { t: 'Fijar y pedir radiografía', d: 'Confirma posición y expansión',
            say: 'Lo fijas con un punto y confirmas con una radiografía de tórax que el tubo está bien posicionado y que el pulmón se expandió.' },
        ] },
        { title: 'Retiro y complicaciones', tag: 'Cuándo sacarlo', kind: 'alert', items: [
          { t: 'Sin fuga, pulmón expandido', d: 'Débito menor de 100 a 200 mL al día',
            say: 'El tubo se retira cuando ya no hay fuga de aire, el pulmón está expandido en la radiografía, y el débito baja de cien a doscientos mililitros al día.' },
          { t: 'Lesión de órganos, infección', d: 'Mal posicionamiento y empiema',
            say: 'Las complicaciones que se preguntan son la lesión de un órgano vecino, el tubo mal posicionado, y la infección, que puede terminar en un empiema.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Hemotórax y tórax volante',
      title: 'Cuando el tórax se llena de sangre, o pierde su marco',
      nodes: [
        { id: 'vas', col: 0, row: 0, k: 'cause', t: 'Vaso roto en el tórax', s: 'Mamaria, intercostal o hilio' },
        { id: 'hem', col: 1, row: 0, k: 'risk', t: 'Hemotórax masivo', s: 'Más de 1.500 mililitros' },
        { id: 'mat', col: 2, row: 0, k: 'effect', t: 'Matidez y yugulares colapsadas', s: 'Al revés que en el neumotórax' },
        { id: 'cos', col: 0, row: 2, k: 'cause', t: '3 o más costillas rotas', s: 'En dos segmentos cada una' },
        { id: 'vol', col: 1, row: 2, k: 'risk', t: 'Tórax volante', s: 'Movimiento paradójico de la pared' },
        { id: 'con', col: 2, row: 2, k: 'alert', t: 'Contusión pulmonar', s: 'La verdadera causa de la hipoxia' },
      ],
      edges: [
        { from: 'vas', to: 'hem' }, { from: 'hem', to: 'mat' },
        { from: 'cos', to: 'vol' }, { from: 'vol', to: 'con' },
      ],
      steps: [
        { show: ['vas'], note: 'Vasos de alta presión',
          say: 'Ahora, cuando lo que se rompe es un vaso, mamaria, intercostal o del hilio pulmonar, la sangre se acumula en la cavidad pleural.' },
        { show: ['hem'], note: 'Más de 1.500 mililitros de entrada',
          say: 'Si esa acumulación pasa de mil quinientos mililitros, o sigue drenando más de doscientos por hora durante varias horas, es un hemotórax masivo.' },
        { show: ['mat'], note: 'El contraste que más se pregunta',
          say: 'Y aquí está el contraste que el examen adora: a diferencia del neumotórax a tensión, aquí la percusión da matidez, no timpanismo, y las venas del cuello están planas, colapsadas por la hipovolemia, no ingurgitadas como en la otra emergencia. En esta radiografía, todo el hemitórax derecho está blanco: eso es la sangre ocupando la cavidad pleural.',
          photo: { src: 'biblioteca/10_cirugia/cirugia-10/02_hemotorax-derrame-rx__cto-neumo_p111.jpg', label: 'Hemotórax', at: 'En esta radiografía', credit: 'Manual CTO Neumología 14.ª ed., p. 111' } },
        { show: ['cos'], note: 'Un segmento que ya no tiene marco óseo',
          say: 'El otro escenario es distinto: tres o más costillas rotas, cada una en dos puntos. Ese segmento pierde su marco óseo y queda flotando, separado del resto de la pared.' },
        { show: ['vol'], note: 'Se mete al inspirar, sale al espirar',
          say: 'Por eso se mueve al revés que el resto del tórax: mira este esquema, el segmento se hunde cuando el paciente inspira, y se abomba cuando espira. Eso es el tórax volante.',
          photo: { src: 'biblioteca/10_cirugia/cirugia-10/01_torax_volante__atls_p127.jpg', label: 'Movimiento paradójico', at: 'mira este esquema', credit: 'ATLS 10.ª ed., p. 127' } },
        { show: ['con'], note: 'El dato que más se pregunta de este tema',
          say: 'Pero fíjate en el dato que más se pregunta: la hipoxia grave de este paciente no la explica el movimiento paradójico. La explica la contusión pulmonar que va por debajo, con sangre y edema llenando los alvéolos, algo que el impacto de alta energía deja sobre ese mismo segmento de la pared.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento y taponamiento',
      title: 'Cómo tratar cada una, y la tríada de Beck',
      cards: [
        { title: 'Hemotórax masivo', tag: 'Tubo grueso y sangre', kind: 'pharma', items: [
          { t: 'Tubo pleural grueso', d: 'Con transfusión de hemoderivados en paralelo',
            say: 'El hemotórax se trata con un tubo pleural grueso, y en paralelo, transfusión de hemoderivados.' },
          { t: 'Toracotomía si no para', d: 'Débito inicial alto o sangrado que persiste',
            say: 'Si al ponerlo sale mil quinientos mililitros de entrada, o sigue drenando más de doscientos por hora durante varias horas seguidas, ahí ya no basta el tubo: va a toracotomía para controlar el vaso que sigue sangrando.' },
        ] },
        { title: 'Tórax volante', tag: 'Analgesia y cuidado con el suero', kind: 'criteria', items: [
          { t: 'Analgesia potente', d: 'Para que el paciente respire hondo sin dolor',
            say: 'El tórax volante se trata con analgesia potente, idealmente con un bloqueo regional del nervio, para que el paciente pueda respirar hondo sin tanto dolor, y así prevenir que el pulmón se colapse por debajo con atelectasias.' },
          { t: 'Restringir el suero', d: 'La sobrecarga inunda el pulmón contundido',
            say: 'Y con el suero hay que ser prudente: pasar mucho volumen inunda el pulmón ya contundido y empeora la hipoxia.' },
        ] },
        { title: 'Taponamiento cardíaco', tag: 'Tríada de Beck', kind: 'alert', items: [
          { t: 'Hipotensión, yugulares altas, ruidos apagados', d: 'Con murmullo pulmonar normal',
            say: 'Y el último cuadro es el taponamiento: sangre en el saco pericárdico que no deja llenarse al corazón. La tríada de Beck es hipotensión, yugulares ingurgitadas y ruidos cardíacos apagados, con el murmullo pulmonar completamente normal.' },
          { t: 'Eco-FAST subxifoideo', d: 'Confirma en segundos, y decide el pabellón',
            say: 'Esa última parte es la clave para no confundirlo con el neumotórax a tensión. El Eco-FAST subxifoideo lo confirma en segundos, y el destino es pabellón para abrir el pericardio. Si no hay pabellón disponible de inmediato, la pericardiocentesis con aguja es solo una medida transitoria mientras se traslada. Mira esta imagen subxifoidea: el líquido negro alrededor del corazón es el derrame pericárdico.',
            photo: { src: 'biblioteca/10_cirugia/cirugia-10/04_taponamiento-eco-fast__pocketus_p146.jpg', label: 'Derrame pericárdico', at: 'Mira esta imagen subxifoidea', credit: 'Pocket Atlas of Emergency Ultrasound (Reardon, Ma), p. 146' } },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Trauma torácico simple',
      title: 'La contusión y la fractura costal aislada',
      cards: [
        { title: 'Cómo se sospecha', tag: 'El más frecuente', kind: 'key', items: [
          { t: 'Dolor a la compresión del tórax', d: 'Dolor pleurítico localizado y crepitación',
            say: 'Antes de las emergencias, no olvides el trauma de tórax más frecuente, el simple: contusión de la pared o una fractura costal aislada. Se sospecha por dolor pleurítico localizado, dolor cuando comprimes el tórax, y a veces crepitación.' },
          { t: 'Radiografía: descartar lo grave', d: 'Puede no ver la fractura',
            say: 'La radiografía sirve sobre todo para descartar neumotórax y hemotórax, y puede no mostrar la fractura. Mira esta radiografía: un neumotórax derecho pequeño, de esos que se vigilan con radiografías seriadas.',
            photo: { src: 'biblioteca/10_cirugia/cirugia-10/01_neumotorax-rx__cto-neumo_p116.jpg', label: 'Neumotórax pequeño', at: 'Mira esta radiografía', credit: 'Manual CTO Neumología 14.ª ed., p. 116' } },
        ] },
        { title: 'Tratamiento', tag: 'Ambulatorio si no hay riesgo', kind: 'pharma', items: [
          { t: 'Analgesia multimodal', d: 'Paracetamol más AINE; opioide o bloqueo si hace falta',
            say: 'Si no hay neumotórax, hemotórax ni comorbilidad, se maneja ambulatorio. El eje es la analgesia multimodal: paracetamol más antiinflamatorio, con opioide si es necesario, y bloqueo intercostal o epidural en casos seleccionados.' },
          { t: 'Kinesiterapia y tos asistida', d: 'Vendaje compresivo contraindicado',
            say: 'Y kinesiterapia respiratoria con tos asistida. El vendaje compresivo está contraindicado, porque limita la ventilación y favorece la atelectasia y la neumonía.' },
        ] },
        { title: 'A quién hospitalizar', tag: 'Y qué buscar', kind: 'alert', items: [
          { t: 'Tres o más costillas, o riesgo', d: 'Mayor de 65, EPOC, anticoagulado, saturación baja',
            say: 'Se hospitalizan los pacientes con tres o más costillas fracturadas, los mayores de sesenta y cinco años, con EPOC, anticoagulados, con saturación baja o con dolor no controlado.' },
          { t: 'Costillas 9 a 12, o 1 y 2', d: 'Hígado, bazo, riñón; o vaso por alta energía',
            say: 'Y la localización orienta. Una fractura de las costillas nueve a doce obliga a buscar lesión de hígado, bazo o riñón. Una de la primera o segunda costilla habla de un golpe de alta energía, con posible lesión vascular.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Neumotórax a tensión',
      images: [
        { src: 'animaciones/cirugia-10/A1_neumotorax_tension.mp4', label: 'Neumotórax a tensión', credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Entra aire, no sale',
          say: 'Mira cómo se arma el neumotórax a tensión. Una herida que actúa como válvula deja entrar aire al inspirar y no lo deja salir. El mediastino y la tráquea se desplazan al lado sano, la vena cava se comprime y la presión cae. Hay timpanismo, murmullo abolido y yugulares ingurgitadas. No esperas la radiografía: aguja en el segundo espacio intercostal, y después tubo pleural.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos las tres emergencias torácicas en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que se confunde: percusión y venas del cuello',
      head: ['Signo clave', 'Neumotórax a tensión', 'Hemotórax masivo', 'Taponamiento cardíaco'],
      rows: [
        { cells: ['Percusión torácica', 'Timpanismo', 'Matidez', 'Sonoridad normal'],
          say: 'Repasemos con una tabla. En la percusión: el neumotórax a tensión da timpanismo, el hemotórax da matidez, y el taponamiento tiene el tórax completamente normal.' },
        { cells: ['Venas del cuello', 'Ingurgitadas', 'Colapsadas', 'Ingurgitadas'],
          say: 'En las venas del cuello: ingurgitadas en el neumotórax a tensión, colapsadas en el hemotórax por la hipovolemia, e ingurgitadas otra vez en el taponamiento.' },
        { cells: ['Murmullo pulmonar', 'Abolido de un lado', 'Abolido de un lado', 'Normal, sin cambios'],
          say: 'Y el murmullo pulmonar es el que separa al taponamiento de los otros dos: en el taponamiento está completamente normal, porque el problema nunca fue el pulmón, sino el saco que envuelve al corazón.' },
        { cells: ['Ante la duda diagnóstica', 'Descomprimir sin esperar radiografía', 'Tubo pleural grueso', 'Eco-FAST subxifoideo'],
          say: 'Y ante la duda, el error más caro es esperar una radiografía en el neumotórax a tensión. Ahí se descomprime primero y se piensa después, porque cada minuto que pasa el mediastino se desplaza un poco más.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 27 años recibe una patada en el hemitórax izquierdo durante una riña. Llega con disnea marcada, pálido y sudoroso. Presión arterial de 78/44, frecuencia cardíaca de 128. Al examen, el murmullo pulmonar está abolido a izquierda, con timpanismo a la percusión, ingurgitación yugular y la tráquea desviada hacia la derecha.',
      question: '¿Cuál es la conducta inmediata más adecuada?',
      options: [
        { letter: 'A', text: 'Solicitar radiografía de tórax portátil antes de actuar' },
        { letter: 'B', text: 'Descomprimir con aguja gruesa en el segundo espacio intercostal izquierdo' },
        { letter: 'C', text: 'Realizar ventana pericárdica subxifoidea' },
        { letter: 'D', text: 'Iniciar transfusión de hemoderivados y observar' },
        { letter: 'E', text: 'Solicitar TAC de tórax con contraste' },
      ],
      correct: 'B',
      explanation: 'Timpanismo, murmullo abolido, ingurgitación yugular y desviación traqueal contralateral son el cuadro clínico completo del neumotórax a tensión. El diagnóstico es clínico y la conducta es descomprimir de inmediato, sin esperar ninguna imagen.',
      say: {
        stem: 'Vamos con un caso. Hombre de veintisiete años, recibe una patada en el hemitórax izquierdo durante una pelea. Llega con disnea marcada, pálido y sudoroso. Su presión arterial es de setenta y ocho sobre cuarenta y cuatro, con frecuencia cardíaca de ciento veintiocho. El murmullo pulmonar está abolido a izquierda, con timpanismo a la percusión, las venas del cuello ingurgitadas, y la tráquea desviada hacia la derecha.',
        question: '¿Cuál es la conducta inmediata más adecuada?',
        options: 'Tienes cinco opciones: pedir una radiografía portátil antes de actuar, descomprimir con aguja en el segundo espacio intercostal, hacer una ventana pericárdica, transfundir hemoderivados y observar, o pedir un TAC de tórax. Piénsalo.',
        answer: 'Es la B. Tienes los cuatro signos completos del neumotórax a tensión: timpanismo, murmullo abolido, yugulares ingurgitadas y tráquea desviada al lado contrario. Con este cuadro, el diagnóstico ya está hecho, y pedir una radiografía o un TAC antes de actuar solo demora una descompresión que se necesita en segundos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 71',
      stem: 'Paciente de 25 años, tras un accidente de tránsito, llega con timpanismo a la percusión del hemitórax derecho, ausencia de murmullo vesicular derecho, disnea severa y desviación traqueal hacia la izquierda.',
      question: '¿Cuál es el diagnóstico y la conducta inmediata?',
      options: [
        { letter: 'A', text: 'Neumotórax a tensión: descompresión con aguja en el 2° espacio intercostal' },
        { letter: 'B', text: 'Hemotórax masivo: drenaje pleural' },
        { letter: 'C', text: 'Contusión pulmonar: oxígeno y observación' },
        { letter: 'D', text: 'Fractura de costillas: analgesia' },
        { letter: 'E', text: 'Taponamiento cardíaco: pericardiocentesis' },
      ],
      correct: 'A',
      explanation: 'Timpanismo con ausencia del murmullo vesicular y desviación traqueal contralateral son el cuadro clínico del neumotórax a tensión. La emergencia se resuelve con descompresión inmediata con aguja, sin esperar radiografía.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil veinticinco. Paciente de veinticinco años, tras un accidente de tránsito, con timpanismo a la percusión del hemitórax derecho, ausencia de murmullo vesicular derecho, disnea severa, y la tráquea desviada hacia la izquierda.',
        question: '¿Cuál es el diagnóstico y la conducta inmediata?',
        options: 'Las opciones son: neumotórax a tensión con descompresión en el segundo espacio intercostal, hemotórax masivo con drenaje pleural, contusión pulmonar con oxígeno, fractura de costillas con analgesia, o taponamiento con pericardiocentesis. Piénsalo.',
        answer: 'Es la A. Timpanismo, murmullo abolido y tráquea desviada hacia el lado sano son la firma del neumotórax a tensión. Es exactamente el mismo cuadro del caso anterior, solo que ahora del lado derecho, y la conducta es la misma: descompresión inmediata con aguja, sin exámenes de por medio.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 32',
      stem: 'Paciente de 28 años sufre una puñalada en el tórax, lado derecho. Al examen físico está en buenas condiciones, con dolor torácico y presenta disminución del murmullo pulmonar, asociado a hipersonoridad a la percusión en el hemitórax derecho.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Pedir radiografía de tórax' },
        { letter: 'B', text: 'Pedir resonancia magnética de tórax' },
        { letter: 'C', text: 'Instalar un tubo pleural de inmediato' },
        { letter: 'D', text: 'Solicitar TAC de tórax' },
        { letter: 'E', text: 'Realizar videotoracoscopía' },
      ],
      correct: 'A',
      explanation: 'Hay un neumotórax traumático, pero sin los signos de tensión: el paciente está en buenas condiciones, sin hipotensión ni desviación traqueal. Sin esa urgencia, sí corresponde pedir primero la radiografía, para ver el grado del neumotórax y descartar un hemotórax asociado.',
      say: {
        stem: 'Y una última pregunta real, del EUNACOM de julio de dos mil quince. Paciente de veintiocho años, con una puñalada en el tórax derecho. Está en buenas condiciones generales, con dolor torácico, murmullo pulmonar disminuido e hipersonoridad a la percusión del lado derecho.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: pedir radiografía de tórax, pedir resonancia magnética, instalar un tubo pleural de inmediato, pedir TAC de tórax, o hacer una videotoracoscopía. Piénsalo.',
        answer: 'Es la A. Y este caso es justo el contraste que tienes que aprender a distinguir: hay un neumotórax, pero el paciente está en buenas condiciones, sin hipotensión ni desviación de la tráquea. Sin esos signos de tensión, sí tiene sentido pedir primero la radiografía, para ver cuánto pulmón está colapsado y descartar un hemotórax al mismo tiempo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 102',
      stem: 'Mujer de 56 años ingresa tras un accidente automovilístico de alta energía, con hemorragia masiva e inestabilidad hemodinámica. Las imágenes muestran un hematoma subdural con desplazamiento de 11 mm, múltiples fracturas costales con neumotórax izquierdo y desviación traqueal hacia la derecha, y una fractura de pelvis desplazada.',
      question: '¿Cuál de las siguientes medidas terapéuticas es la más urgente?',
      options: [
        { letter: 'A', text: 'Intubación orotraqueal' },
        { letter: 'B', text: 'Laparotomía exploradora' },
        { letter: 'C', text: 'Evacuación quirúrgica del hematoma subdural' },
        { letter: 'D', text: 'Pleurostomía izquierda' },
        { letter: 'E', text: 'Estabilización de la fractura de pelvis' },
      ],
      correct: 'D',
      explanation: 'De todas las lesiones, la que mata primero es el neumotórax a tensión, evidenciado por la desviación traqueal. El hematoma subdural y la fractura de pelvis son graves, pero no matan en el mismo minuto: se tratan una vez resuelta la lesión torácica.',
      say: {
        stem: 'Y una última pregunta real, del EUNACOM de julio de dos mil veinticuatro, que conecta con lo que viste la clase pasada. Mujer de cincuenta y seis años, tras un accidente de alta energía, con hemorragia masiva e inestabilidad hemodinámica. Las imágenes muestran, a la vez, un hematoma subdural, múltiples fracturas costales con neumotórax izquierdo y desviación traqueal, y una fractura de pelvis desplazada.',
        question: '¿Cuál de las siguientes medidas terapéuticas es la más urgente?',
        options: 'Las opciones son: intubación orotraqueal, laparotomía exploradora, evacuar el hematoma subdural, pleurostomía izquierda, o estabilizar la fractura de pelvis. Piénsalo.',
        answer: 'Es la D. Aquí hay varias lesiones graves a la vez, y por eso este caso es perfecto para recordar la regla de la clase anterior: se trata primero lo que mata primero. La desviación traqueal te dice que hay un neumotórax a tensión, y eso mata en minutos. El hematoma subdural y la fractura de pelvis son urgentes, pero no tan urgentes como para saltarse el paso B.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2017 · Pregunta 3",
      "stem": "Un paciente con antecedente de ser fumador de 30 paquetes año, suspendido hace 5 años, consulta por un cuadro de 24 horas de disnea de mínimos esfuerzos, asociada a intolerancia al ejercicio y malestar general. Al examen físico su presión arterial es 90/60 y su frecuencia cardíaca 110. Además destacan yugulares ingurgitadas a 45 grados y ruidos cardíacos apagados a la auscultación. Su electrocardiograma muestra disminución difusa del voltaje.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Tromboembolismo pulmonar"
        },
        {
          "letter": "B",
          "text": "Neumotórax"
        },
        {
          "letter": "C",
          "text": "Derrame pleural"
        },
        {
          "letter": "D",
          "text": "Infarto agudo al miocardio"
        },
        {
          "letter": "E",
          "text": "Taponamiento cardíaco"
        }
      ],
      "correct": "E",
      "explanation": "Hipotensión, ingurgitación yugular y ruidos cardíacos apagados forman la tríada de Beck. El bajo voltaje difuso en el electrocardiograma apoya un derrame pericárdico, aquí probablemente neoplásico por el tabaquismo. Se confirma con ecocardiograma y se trata con pericardiocentesis.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil diecisiete. Paciente exfumador de treinta paquetes año, con un día de disnea de mínimos esfuerzos y malestar general. Tiene presión de noventa sobre sesenta, frecuencia de ciento diez, yugulares ingurgitadas y ruidos cardíacos apagados. El electrocardiograma muestra bajo voltaje difuso.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: tromboembolismo pulmonar, neumotórax, derrame pleural, infarto agudo al miocardio o taponamiento cardíaco. Piénsalo.",
        "answer": "Es la E. Hipotensión, yugulares ingurgitadas y ruidos apagados son la tríada de Beck, y el bajo voltaje confirma líquido alrededor del corazón. El tromboembolismo tienta porque también da hipotensión e ingurgitación yugular, pero no apaga los ruidos cardíacos ni baja el voltaje del electrocardiograma."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.5.026 · Drenaje pleural",
      "stem": "Hombre de 30 años con herida por arma blanca en el hemitórax derecho, hemodinámicamente estable. La radiografía de tórax muestra un hemotórax moderado. Se decide instalar un tubo de drenaje pleural.",
      "question": "¿Cuál es el sitio y la técnica correctos de inserción?",
      "options": [
        {
          "letter": "A",
          "text": "Segundo espacio intercostal, línea medioclavicular, por el borde inferior de la costilla superior"
        },
        {
          "letter": "B",
          "text": "Cuarto espacio intercostal paraesternal, junto al esternón"
        },
        {
          "letter": "C",
          "text": "Octavo espacio intercostal, línea escapular, por el borde inferior de la costilla"
        },
        {
          "letter": "D",
          "text": "Quinto espacio intercostal, entre las líneas axilares anterior y media, por el borde superior de la costilla inferior"
        },
        {
          "letter": "E",
          "text": "Cualquier espacio intercostal donde se palpe mejor el derrame"
        }
      ],
      "correct": "D",
      "explanation": "El tubo pleural se instala en el triángulo de seguridad: quinto espacio intercostal, entre las líneas axilares anterior y media, rasando el borde superior de la costilla inferior, porque el paquete vasculonervioso corre por el borde inferior de cada costilla. El segundo espacio medioclavicular es el sitio de punción descompresiva clásica.",
      "say": {
        "stem": "Hombre de treinta años con una puñalada en el hemitórax derecho, estable. La radiografía muestra un hemotórax moderado, y se decide instalar un tubo de drenaje pleural.",
        "question": "¿Cuál es el sitio y la técnica correctos?",
        "options": "Las opciones: segundo espacio en la línea medioclavicular, cuarto espacio junto al esternón, octavo espacio en la línea escapular, quinto espacio entre las axilares anterior y media por el borde superior de la costilla o donde se palpe mejor. Piénsalo.",
        "answer": "Es la D. El triángulo de seguridad es el quinto espacio, entre las líneas axilares anterior y media, siempre por el borde superior de la costilla inferior para no lesionar el paquete vasculonervioso. El segundo espacio medioclavicular tienta, pero ese es el sitio de la punción con aguja en el neumotórax a tensión, no del tubo para un hemotórax."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.05.2.014 · Traumatismo torácico simple",
      "stem": "Un hombre de 45 años cae de su altura y se golpea el hemitórax derecho. Consulta por dolor al respirar. Está hemodinámicamente estable, con saturación de 97% y murmullo pulmonar simétrico. La radiografía muestra fractura no desplazada del 7° arco costal derecho, sin neumotórax ni hemotórax.",
      "question": "¿Cuál es el manejo más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Instalación de tubo pleural"
        },
        {
          "letter": "B",
          "text": "Vendaje torácico compresivo"
        },
        {
          "letter": "C",
          "text": "Analgesia adecuada, ejercicios respiratorios y control ambulatorio con signos de alarma"
        },
        {
          "letter": "D",
          "text": "Fijación quirúrgica de la costilla"
        },
        {
          "letter": "E",
          "text": "Hospitalización en UCI"
        }
      ],
      "correct": "C",
      "explanation": "Una fractura costal única sin complicaciones (neumotórax, hemotórax, tórax volante) en un paciente estable es un traumatismo torácico simple. Se maneja en forma ambulatoria con analgesia efectiva, que permite respirar profundo y toser, previniendo atelectasias y neumonía. El vendaje compresivo está contraindicado porque restringe la ventilación.",
      "say": {
        "stem": "Un hombre de cuarenta y cinco años se cae y se golpea el lado derecho del tórax. Está estable, satura bien y la radiografía muestra una fractura costal única no desplazada, sin neumotórax ni hemotórax.",
        "question": "¿Cuál es el manejo más adecuado?",
        "options": "Las opciones: tubo pleural, vendaje torácico compresivo, analgesia con ejercicios respiratorios y control ambulatorio, fijación quirúrgica o UCI. Piénsalo.",
        "answer": "Es la C. Una fractura costal simple se maneja con buena analgesia y ejercicios respiratorios para evitar atelectasias. El vendaje compresivo tienta para aliviar el dolor, pero limita la ventilación y favorece la neumonía."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'El signo que decide todo', tag: 'Percusión y yugulares', kind: 'key', items: [
          { t: 'Timpanismo con yugulares altas', d: 'Neumotórax a tensión: descomprime ya',
            say: 'Cerremos con las reglas de oro. Timpanismo con yugulares ingurgitadas es neumotórax a tensión: descomprimes de inmediato, sin radiografía, porque cada minuto de espera empeora el colapso del retorno venoso.' },
          { t: 'Matidez con yugulares planas', d: 'Hemotórax masivo: tubo pleural grueso',
            say: 'Matidez con yugulares planas es hemotórax masivo: tubo pleural grueso, con transfusión en paralelo, y toracotomía si el débito no cede.' },
        ] },
        { title: 'Trauma simple y tubo pleural', tag: 'Lo que también se pregunta', kind: 'criteria', items: [
          { t: 'Fractura costal simple: analgesia', d: 'Nunca vendaje compresivo',
            say: 'Una fractura costal simple se maneja con analgesia y kinesiterapia, sin vendaje compresivo, y se hospitaliza al que tiene tres o más costillas, es mayor de sesenta y cinco años o tiene EPOC.' },
          { t: 'Tubo: borde superior de la costilla', d: 'Triángulo de seguridad, sello de agua',
            say: 'Y el tubo pleural va por el triángulo de seguridad, pasando sobre el borde superior de la costilla inferior, conectado a sello de agua.' },
        ] },
        { title: 'Lo que no es el pulmón', tag: 'Tórax volante y taponamiento', kind: 'alert', items: [
          { t: 'Tórax volante', d: 'La hipoxia es por la contusión, no por el movimiento',
            say: 'En el tórax volante, la hipoxia grave la explica la contusión pulmonar, no el movimiento paradójico de la pared.' },
          { t: 'Taponamiento', d: 'Murmullo pulmonar normal, más tríada de Beck',
            say: 'Y el taponamiento se reconoce porque el pulmón está completamente normal, con la tríada de Beck instalada. Si te llevas una sola idea de hoy: la percusión y las venas del cuello te dicen, en segundos, cuál de estas tres emergencias tienes enfrente. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Trauma torácico mayor: qué lesión es, según percusión y yugulares',
    root: N('start', 'Trauma torácico con dificultad respiratoria', 'Evaluación rápida en el paso B',
      'Un paciente con trauma torácico y dificultad respiratoria. Percute el tórax y mira las venas del cuello: eso separa las tres emergencias.',
      ['Timpanismo, yugulares ingurgitadas, tráquea desviada', N('alert', 'Neumotórax a tensión', 'Descompresión con aguja, sin esperar radiografía',
        'Con estos cuatro signos, el diagnóstico es clínico: descomprimes con aguja en el segundo espacio intercostal, y después dejas instalado un tubo pleural definitivo en el quinto espacio.')],
      ['Matidez, yugulares colapsadas, hipovolemia', N('do', 'Hemotórax masivo', 'Tubo pleural grueso y hemoderivados',
        'Con matidez y yugulares planas por la pérdida de sangre, instalas un tubo pleural grueso y transfundes en paralelo.',
        ['¿Débito inicial mayor a 1.500 mL o sangrado persistente?', N('alert', 'Toracotomía', 'Control quirúrgico del vaso sangrante',
          'Si el sangrado por el tubo es masivo de entrada o no se detiene, el destino es la toracotomía para controlar el vaso.')])],
      ['Murmullo pulmonar normal, tríada de Beck', N('do', 'Taponamiento cardíaco', 'Eco-FAST subxifoideo y pabellón',
        'Con el pulmón normal pero hipotensión, yugulares altas y ruidos apagados, el Eco-FAST confirma el derrame pericárdico y el destino es pabellón.')],
      ['3 o más costillas rotas, movimiento paradójico', N('ok', 'Tórax volante', 'Analgesia potente y suero restringido',
        'Con el segmento costal flotando, la clave es la analgesia para que respire bien, y restringir el suero para no inundar el pulmón contundido.')]),
  },
};
