// Clase 14.18 (Otorrinolaringología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_otorrino.cjs (orl-18). Preguntas: banco real EUNACOM (class_questions.cjs --search).
// El banco real no tiene pregunta de pila de botón ni de rinorrea unilateral fétida: la pila usa el caso clínico de la clase
// y la rinorrea un caso representativo del libro.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'orl-18',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Pila de botón, rinorrea fétida de un solo lado, semillas e insectos en el oído, y el maní en el bronquio',
      say: 'Bienvenido. Los cuerpos extraños en otorrino son muy frecuentes en preescolares, y el examen no pregunta cómo se sacan, sino qué hay que evitar. En cada cuerpo extraño hay una regla: la pila de botón no se lava, la semilla del oído no se lava, y el niño con rinorrea de un solo lado tiene un cuerpo extraño hasta que se demuestre lo contrario. Veámoslas una por una.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Por qué la pila de botón es urgencia',
      nodes: [
        { id: 'pi', col: 0, row: 1, k: 'cause', t: 'Pila de botón en la nariz', s: 'O en el oído' },
        { id: 'co', col: 1, row: 0, k: 'mech', t: 'Corriente eléctrica continua', s: 'Descompone el agua del tejido' },
        { id: 'qu', col: 2, row: 0, k: 'effect', t: 'Quemadura alcalina', s: 'Hidróxido de potasio' },
        { id: 'ne', col: 3, row: 0, k: 'alert', t: 'Perforación en 2 horas', s: 'Tabique nasal o tímpano' },
        { id: 'ag', col: 1, row: 2, k: 'trap', t: 'Irrigar con agua o suero', s: 'Conduce la corriente' },
        { id: 'ex', col: 2, row: 2, k: 'good', t: 'Extracción inmediata', s: 'Por el especialista ORL' },
      ],
      edges: [
        { from: 'pi', to: 'co' },
        { from: 'co', to: 'qu' },
        { from: 'qu', to: 'ne' },
        { from: 'pi', to: 'ag', label: 'prohibido' },
        { from: 'pi', to: 'ex', label: 'sí' },
      ],
      steps: [
        { show: ['pi', 'co', 'qu'], note: 'Una pila húmeda funciona como circuito',
          say: 'Una pila de botón dentro de una cavidad húmeda sigue funcionando. Genera una corriente continua que descompone el agua del tejido y produce iones hidroxilo, es decir, una quemadura alcalina. Además hay fuga cáustica de hidróxido de potasio y necrosis por presión.' },
        { show: ['ne'], note: 'Necrosis y perforación en tan solo 2 horas',
          say: 'Y esto ocurre rápido: la necrosis por licuefacción puede perforar el cartílago del tabique, o el tímpano, en dos horas. Por eso se trata como una emergencia quirúrgica. En la radiografía, la pila muestra el signo del doble contorno, o del halo: mira esta pila en el esófago de un niño, con ese borde doble.',
          photo: { src: 'biblioteca/17_otorrino/orl-18/04_pila-de-boton-esofago-rx__knoop_p490.jpg', label: 'Pila: doble contorno', at: 'mira esta pila', credit: 'The Atlas of Emergency Medicine (Knoop), p. 490' } },
        { show: ['ag', 'ex'], note: 'Nunca irrigar: el líquido acelera la reacción',
          say: 'La regla de oro: está prohibido lavar con agua o suero. El líquido conduce la corriente y acelera la electrólisis cáustica. Lo que corresponde es la extracción inmediata, bajo visión directa por el otorrinolaringólogo, y con anestesia general si el niño no coopera.' },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'La pila que quema en dos horas',
      images: [
        { src: 'animaciones/orl-18/A1_pila_boton_quemadura.mp4', label: 'Pila de botón en la nariz: corriente, quemadura y perforación', credit: 'Ilustración: Servier Medical Art (smart.servier.com), CC BY 4.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'La pila húmeda es un circuito',
          say: 'Mira la pila de botón en la fosa nasal. En una cavidad húmeda sigue funcionando: genera corriente, descompone el agua del tejido y produce una quemadura alcalina. En dos horas puede perforar el tabique, o el tímpano si está en el oído. Por eso no se irriga, porque el líquido conduce la corriente, y se extrae de inmediato, bajo visión directa, con el especialista.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Nariz',
      title: 'Cuerpo extraño nasal: la pista del olor',
      cards: [
        { title: 'Cómo sospecharlo', tag: 'Preescolar', kind: 'key', items: [
          { t: 'Rinorrea unilateral y fétida', d: 'Purulenta, espesa; sin respuesta a antibióticos',
            say: 'Los preescolares se meten esponjas, papeles, semillas o juguetes por la nariz, más a menudo por la fosa derecha. Si el objeto pasa inadvertido, el niño llega con una rinorrea purulenta, espesa, de un solo lado y de olor muy fétido.' },
          { t: 'Un solo lado: cuerpo extraño', d: 'Hasta demostrar lo contrario',
            say: 'La palabra clave es unilateral. Una rinosinusitis o una alergia dan síntomas de ambos lados. Un niño con rinorrea fétida de un solo lado tiene un cuerpo extraño hasta que se demuestre lo contrario, y el antibiótico no lo resuelve.' },
        ] },
        { title: 'Cómo se saca', tag: 'Técnica', kind: 'criteria', items: [
          { t: 'Vasoconstrictor y rinoscopía', d: 'Gancho romo por detrás del objeto',
            say: 'Se pone un vasoconstrictor tópico, como la oximetazolina, se mira con rinoscopía anterior y se usa un gancho romo de punta angulada, pasándolo por arriba y por detrás del objeto para traerlo hacia adelante por el piso de la fosa.' },
          { t: 'Pinzas lisas: desaconsejadas', d: 'El objeto esférico resbala y se aspira',
            say: 'Con objetos redondos, las pinzas lisas están desaconsejadas. Al apretar, el objeto resbala, se empuja hacia la rinofaringe y puede terminar aspirado a los bronquios.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Oído',
      title: 'Cuerpo extraño en el oído',
      cards: [
        { title: 'Semillas y legumbres', tag: 'Prohibido el agua', kind: 'alert', items: [
          { t: 'Poroto, lenteja, arveja', d: 'Absorben agua y se hinchan',
            say: 'Si el cuerpo extraño es una semilla, como un poroto o una lenteja, está terminantemente contraindicado el lavado de oídos. El material orgánico absorbe agua, aumenta de volumen en pocas horas y se impacta contra el hueso y el tímpano, con dolor intenso y necrosis de la piel. Mira este conducto: el objeto ocupa todo el calibre y tapa el tímpano.',
            photo: { src: 'biblioteca/17_otorrino/orl-18/01_cuerpo-extrano-conducto-auditivo__bailey-love_p728.jpg', label: 'Objeto en el conducto', at: 'Mira este conducto', credit: 'Bailey & Love 27.ª ed., Fig. 46.10' } },
          { t: 'Extracción con instrumental seco', d: 'Gancho romo o microaspirador',
            say: 'Se extrae con instrumental seco: gancho romo o microaspirador.' },
        ] },
        { title: 'Insecto vivo', tag: 'Primero matarlo', kind: 'key', items: [
          { t: 'Vaselina líquida o lidocaína', d: 'Se instila para inmovilizarlo',
            say: 'El insecto vivo es el caso inverso, y se pregunta por el orden. Su aleteo contra el tímpano produce un dolor desesperante. Lo primero es matarlo e inmovilizarlo, instilando vaselina líquida, aceite mineral o lidocaína dos por ciento.' },
          { t: 'Después se extrae', d: 'Lavado con agua a 37 °C o pinza',
            say: 'Una vez muerto e inmóvil, se retira con lavado de agua tibia a treinta y siete grados, o con pinza. Fíjate en la lógica: con la semilla el agua es el problema, con el insecto el agua viene después de matarlo.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Vía aérea',
      title: 'Aspiración de cuerpo extraño',
      nodes: [
        { id: 'sp', col: 0, row: 1, k: 'start', t: 'Síndrome de penetración', s: 'Tos asfíctica súbita comiendo' },
        { id: 'bd', col: 1, row: 1, k: 'mech', t: 'Bronquio principal derecho', s: 'Más vertical y ancho' },
        { id: 'as', col: 2, row: 0, k: 'effect', t: 'Murmullo disminuido', s: 'Sibilancias unilaterales' },
        { id: 'rx', col: 2, row: 2, k: 'effect', t: 'Atrapamiento aéreo', s: 'Rx a menudo con maní radiolúcido' },
        { id: 'br', col: 3, row: 1, k: 'refer', t: 'Broncoscopía rígida', s: 'Urgente, bajo anestesia general' },
      ],
      edges: [
        { from: 'sp', to: 'bd' },
        { from: 'bd', to: 'as' },
        { from: 'bd', to: 'rx' },
        { from: 'as', to: 'br' },
        { from: 'rx', to: 'br' },
      ],
      steps: [
        { show: ['sp', 'bd'], note: 'Tos súbita mientras come o juega',
          say: 'La aspiración de un maní, un fruto seco o un trozo de juguete es una de las primeras causas de muerte accidental en lactantes y preescolares. Empieza con el síndrome de penetración: una crisis de tos asfíctica súbita, con cianosis y náuseas, mientras el niño comía o jugaba. El objeto se aloja más a menudo en el bronquio principal derecho, que es más vertical y más ancho.' },
        { show: ['as', 'rx'], note: 'Un pulmón suena distinto, y se ve más negro',
          say: 'Por eso hay asimetría al auscultar: el murmullo está disminuido de un lado y hay sibilancias unilaterales. En la radiografía, los frutos secos casi no se ven, pero sí su efecto: el pulmón afectado queda hiperinsuflado, atrapa aire, o se colapsa con una atelectasia. Mira esta radiografía de un maní en el bronquio derecho: en inspiración el pulmón derecho se ve más negro; y en espiración, el aire queda atrapado y el mediastino se desplaza hacia el lado sano.',
          photos: [
            { src: 'biblioteca/17_otorrino/orl-18/02_mani-bronquio-derecho-inspiracion__cxr_p210.jpg', label: 'Inspiración', at: 'Mira esta radiografía', credit: 'CXR, Fig. 14.13 (a)' },
            { src: 'biblioteca/17_otorrino/orl-18/03_mani-bronquio-derecho-espiracion__cxr_p210.jpg', label: 'Espiración: aire atrapado', at: 'y en espiración', credit: 'CXR, Fig. 14.13 (b)' },
          ] },
        { show: ['br'], note: 'Diagnóstico y tratamiento en un solo acto',
          say: 'El procedimiento de elección es la broncoscopía rígida de urgencia en pabellón, con anestesia general. Es diagnóstica y terapéutica a la vez, y no se difiere por el riesgo de atelectasia y neumonía distal.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Cinco cuerpos extraños, cinco conductas',
      head: ['Cuerpo extraño', 'Dónde', 'Peligro o clave', 'Conducta'],
      rows: [
        { cells: ['Pila de botón', 'Nariz u oído', 'Perforación en menos de 2 h', 'Extracción inmediata; no irrigar'],
          say: 'Esta tabla ordena todo. La pila de botón en nariz u oído: peligro de perforación en dos horas, se extrae de inmediato y jamás se irriga.' },
        { cells: ['Cuerpo extraño nasal inadvertido', 'Fosa nasal', 'Rinorrea unilateral fétida', 'Rinoscopía y gancho romo por detrás'],
          say: 'El cuerpo extraño nasal inadvertido se delata por la rinorrea fétida de un solo lado. Se extrae con gancho romo por detrás.' },
        { cells: ['Semilla o poroto', 'Conducto auditivo', 'Se hincha con agua', 'No lavar; instrumental seco'],
          say: 'La semilla en el oído se hincha con el agua, así que no se lava y se extrae con instrumental seco.' },
        { cells: ['Insecto vivo', 'Conducto auditivo', 'Dolor atroz por aleteo', 'Vaselina o lidocaína, luego extraer'],
          say: 'El insecto vivo se inmoviliza primero con vaselina líquida o lidocaína, y luego se extrae.' },
        { cells: ['Maní o fruto seco', 'Bronquio derecho', 'Síndrome de penetración', 'Broncoscopía rígida urgente'],
          say: 'Y el maní en el bronquio derecho, con síndrome de penetración, va a broncoscopía rígida de urgencia.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Esófago',
      title: 'Cuerpo extraño esofágico: qué sacar de urgencia',
      cards: [
        { title: 'Qué se traga', tag: 'Niño y adulto', kind: 'key', items: [
          { t: 'Niño: moneda; adulto: bolo de carne', d: 'Moneda en el esófago superior; bolo: descartar esofagitis eosinofílica o estenosis',
            say: 'En el niño, el cuerpo extraño esofágico más frecuente es la moneda, que se detiene en el esófago superior. En el adulto, es la impactación de un bolo de carne, que obliga a descartar esofagitis eosinofílica, estenosis péptica o anillo de Schatzki. Hay disfagia, odinofagia, sialorrea, vómitos y rechazo alimentario.' },
          { t: 'Radiografía de cuello y tórax, frente y perfil', d: 'La moneda esofágica se ve de frente',
            say: 'Se estudia con radiografía de cuello y tórax, de frente y de perfil: la moneda en el esófago se ve de frente, y la que está en la vía aérea se ve de canto. Una moneda asintomática en el esófago distal puede observarse hasta veinticuatro horas.' },
        ] },
        { title: 'Extracción inmediata', tag: 'No se espera', kind: 'alert', items: [
          { t: 'Pila de botón, imanes, cortopunzantes, obstrucción completa', d: 'Bolo de carne: endoscopía en 24 horas, en 6 si es completa',
            say: 'Son urgencias de extracción inmediata las pilas de botón, los imanes múltiples, los objetos cortopunzantes y la obstrucción completa con sialorrea. El bolo de carne se extrae por endoscopía en veinticuatro horas, y en seis si es completa.' },
          { t: 'Nunca inducir vómito ni empujar', d: 'Complicación temida: perforación y mediastinitis',
            say: 'Está contraindicado inducir el vómito, empujar el objeto o intentar sacarlo a ciegas. La complicación temida es la perforación con mediastinitis.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Prevención',
      title: 'Cómo se previene el cuerpo extraño en niños',
      cards: [
        { title: 'Comida y juguetes', tag: 'Menores de 5 años', kind: 'pharma', items: [
          { t: 'Sin frutos secos, uvas enteras, maní, zanahoria cruda ni cabritas', d: 'Alimentos cortados; comer sentado, sin correr ni reír',
            say: 'A menores de cinco años no se les dan frutos secos, uvas enteras, maní, zanahoria cruda ni cabritas. Los alimentos se cortan, y el niño come sentado, sin correr, reír ni hablar.' },
          { t: 'Juguetes que no pasen por un rollo de papel higiénico', d: 'Pilas, imanes y monedas fuera de su alcance',
            say: 'Los juguetes no deben tener piezas que pasen por un rollo de papel higiénico, y las pilas de botón, los imanes y las monedas se guardan fuera de su alcance.' },
        ] },
        { title: 'Educación a los cuidadores', tag: 'Lo que se enseña', kind: 'key', items: [
          { t: 'No meter objetos en nariz ni oídos', d: 'Maniobra de desobstrucción de la vía aérea',
            say: 'Se enseña al niño a no introducir objetos en la nariz ni en los oídos, y a los cuidadores, la maniobra de desobstrucción de la vía aérea.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del tipo de cuerpo extraño a la conducta que no debes olvidar.',
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Una niña de 3 años es llevada a urgencia porque hace 2 horas se introdujo en la fosa nasal derecha un objeto metálico plano, sacado del control remoto del televisor. Tiene dolor nasal y escasa secreción sanguinolenta por esa narina. En la rinoscopía anterior se ve una superficie metálica circular brillante a 1,5 cm del vestíbulo, con mucosa septal edematosa, pálida y de tinte negruzco.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Lavado abundante de la fosa nasal con suero fisiológico para neutralizar el pH' },
        { letter: 'B', text: 'Extracción inmediata con gancho romo por detrás del objeto o derivación urgente a pabellón, sin irrigar' },
        { letter: 'C', text: 'Descongestionantes orales y control con otorrinolaringólogo en 48 horas' },
        { letter: 'D', text: 'Gotas de vaselina líquida para que la pila se deslice a la rinofaringe' },
        { letter: 'E', text: 'Compresión externa del dorso nasal para aplastar la pila' },
      ],
      correct: 'B',
      explanation: 'Es una pila de botón en la fosa nasal, una emergencia quirúrgica por quemadura alcalina que puede perforar el tabique en menos de 2 horas. Se extrae de inmediato y está prohibido irrigar, porque el líquido acelera la electrólisis.',
      say: {
        stem: 'Una niña de tres años llega a urgencia porque hace dos horas se metió por la nariz un objeto metálico plano, sacado de un control remoto. Tiene dolor y un poco de sangre. En la rinoscopía se ve una superficie metálica circular brillante, y el tabique alrededor está edematoso, pálido y negruzco.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: lavado abundante con suero fisiológico; extracción inmediata con gancho romo o derivación urgente a pabellón sin irrigar; descongestionantes y control en cuarenta y ocho horas; vaselina líquida para que la pila se deslice; o comprimir el dorso nasal. Piénsalo.',
        answer: 'Es la B. Una pila de botón en la nariz es una urgencia quirúrgica: el tabique ya se ve dañado. La tentación es la A, lavar para sacarla, pero el suero conduce la corriente y acelera la quemadura. Se extrae de inmediato con un gancho romo por detrás del objeto, y si la niña no coopera, a pabellón.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un niño de 4 años consulta por 3 semanas de mucosidad purulenta amarillenta que sale solo por la fosa nasal derecha, con olor fétido muy intenso. Fue tratado con amoxicilina oral por sospecha de rinosinusitis, sin mejoría.',
      question: '¿Cuál es el diagnóstico clínico más probable que debe descartarse en primer lugar?',
      options: [
        { letter: 'A', text: 'Rinitis alérgica estacional unilateral' },
        { letter: 'B', text: 'Cuerpo extraño nasal desapercibido en la fosa nasal derecha' },
        { letter: 'C', text: 'Atresia de coanas bilateral congénita tardía' },
        { letter: 'D', text: 'Fibrosis quística con sobreinfección por Pseudomonas' },
        { letter: 'E', text: 'Desviación septal cartilaginosa sin componente inflamatorio' },
      ],
      correct: 'B',
      explanation: 'La rinorrea purulenta, unilateral y fétida persistente en un niño pequeño es el cuadro clásico de un cuerpo extraño nasal retenido. Requiere rinoscopía anterior o nasofibroscopía para verlo y extraerlo.',
      say: {
        stem: 'Un caso representativo del banco. Un niño de cuatro años con tres semanas de mucosidad purulenta que sale solo por la fosa nasal derecha, con olor fétido muy intenso, y que no mejoró con amoxicilina.',
        question: '¿Cuál es el diagnóstico que debe descartarse primero?',
        options: 'Las opciones: rinitis alérgica unilateral; cuerpo extraño nasal desapercibido; atresia de coanas bilateral; fibrosis quística; o desviación septal. Piénsalo.',
        answer: 'Es la B. Dos palabras deciden: unilateral y fétida, en un niño pequeño. Una infección o una alergia darían síntomas de ambos lados, y el objeto retenido bloquea el drenaje y se sobreinfecta con anaerobios. Por eso no mejora con el antibiótico. Se confirma con rinoscopía o nasofibroscopía.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 85',
      stem: 'Una niña de dos años presenta un episodio brusco de tos intensa, asociado a cianosis y disnea, que remite luego de pocos minutos. Persiste luego con tos en salvas y expectoración. Al examen pulmonar se auscultan roncus y sibilancias, mayores en el lado derecho.',
      question: 'La conducta más adecuada es:',
      options: [
        { letter: 'A', text: 'Solicitar PCR para Bordetella pertussis' },
        { letter: 'B', text: 'Solicitar TAC de tórax' },
        { letter: 'C', text: 'Solicitar broncoscopía' },
        { letter: 'D', text: 'Realizar laringoscopía rígida' },
        { letter: 'E', text: 'Iniciar antibióticos' },
      ],
      correct: 'C',
      explanation: 'Es un cuerpo extraño bronquial clásico, probablemente en el bronquio derecho. Aunque la radiografía suele ser el primer examen, el manejo y la extracción se hacen con broncoscopía, y una clínica tan categórica la obliga.',
      say: {
        stem: 'Una pregunta real del EUNACOM de agosto de dos mil veintiuno. Una niña de dos años con un episodio brusco de tos intensa, cianosis y disnea que cede en pocos minutos. Después queda con tos en salvas y expectoración, y se auscultan roncus y sibilancias, mayores a la derecha.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: reacción en cadena de la polimerasa para Bordetella; escáner de tórax; broncoscopía; laringoscopía rígida; o antibióticos. Piénsalo.',
        answer: 'Es la C. El episodio brusco de tos con cianosis es el síndrome de penetración, y lo que sigue, una obstrucción localizada a la derecha. El examen es la broncoscopía, que diagnostica y extrae. El escáner no aporta más que la radiografía, y los antibióticos tratarían una consecuencia, no la causa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 64',
      stem: 'Una niña de 3 años presenta tos persistente desde hace 7 días, inicialmente seca, pero que desde hace 3 días se volvió productiva, por lo que se le indicó amoxicilina oral, sin mayor respuesta. Sus signos vitales muestran temperatura 37,1 °C, frecuencia respiratoria 25 por minuto, saturación de oxígeno 97% y frecuencia cardíaca 95 latidos por minuto. Al examen físico, se escucha estridor respiratorio, y se observa tiraje supraesternal y subcostal. En la auscultación respiratoria se constatan sibilancias en el lado derecho, además de oírse el estridor respiratorio. Se solicita radiografía de tórax que muestra atelectasia del lóbulo medio.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Laringitis viral' },
        { letter: 'B', text: 'Bronquiolitis aguda' },
        { letter: 'C', text: 'Neumonía atípica' },
        { letter: 'D', text: 'Cuerpo extraño bronquial' },
        { letter: 'E', text: 'Traqueítis bacteriana' },
      ],
      correct: 'D',
      explanation: 'Es un cuerpo extraño bronquial clásico, por la localización de las alteraciones: bronquio derecho, con afectación del lóbulo medio. La conducta es la broncoscopía rígida, que es diagnóstica y terapéutica.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Una niña de tres años con una semana de tos que pasó de seca a productiva, sin respuesta a la amoxicilina. No tiene fiebre. Hay estridor, tiraje, sibilancias solo en el lado derecho, y la radiografía muestra atelectasia del lóbulo medio.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: laringitis viral; bronquiolitis aguda; neumonía atípica; cuerpo extraño bronquial; o traqueítis bacteriana. Piénsalo.',
        answer: 'Es la D. Aquí no hay síndrome de penetración, y esa es la trampa: el cuerpo extraño puede pasar inadvertido. Lo que te lo delata es todo lo unilateral: sibilancias solo a la derecha, atelectasia de un lóbulo y ninguna mejoría con antibiótico. La conducta es la broncoscopía rígida.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 35',
      stem: 'Un lactante de 10 meses de edad, sin antecedentes, mientras come su almuerzo comienza súbitamente con tos asociado a disminución del esfuerzo respiratorio e hipotonía.',
      question: 'La conducta más adecuada en este caso es:',
      options: [
        { letter: 'A', text: 'Iniciar reanimación cardiopulmonar' },
        { letter: 'B', text: 'Exploración digital de su cavidad oral' },
        { letter: 'C', text: 'Iniciar presión digital en epigastrio' },
        { letter: 'D', text: 'Dar golpes en la espalda' },
        { letter: 'E', text: 'Iniciar ventilaciones boca a boca' },
      ],
      correct: 'D',
      explanation: 'Es un cuerpo extraño laríngeo obstructivo en un menor de un año, por lo que se dan cinco golpes en la espalda. Si no funciona, se hacen cinco compresiones en el pecho y se repite la secuencia. Desde el año se hace la maniobra de Heimlich.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil trece, y es la urgencia que sigue al atoro. Un lactante de diez meses que, mientras almuerza, comienza de pronto con tos, disminución del esfuerzo respiratorio e hipotonía.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: iniciar reanimación cardiopulmonar; explorar con el dedo la cavidad oral; presión digital en el epigastrio; golpes en la espalda; o ventilaciones boca a boca. Piénsalo.',
        answer: 'Es la D. Un atoro con obstrucción de la vía aérea en un menor de un año se maneja con golpes en la espalda, y si no resultan, compresiones en el pecho. La exploración con el dedo a ciegas puede empujar el objeto más abajo, y la maniobra de Heimlich se reserva para desde el año de edad. Esto complementa lo de hoy: si el objeto no sale solo, termina en el bronquio, y ahí viene la broncoscopía.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.03.2.008 · Cuerpo extraño en el esófago",
      "stem": "Un niño de 2 años es traído a urgencia porque hace 1 hora se tragó una pila de botón del control remoto. Presenta sialorrea y rechaza los líquidos, sin dificultad respiratoria. La radiografía muestra una imagen redonda radiopaca con doble contorno en el tercio superior del esófago.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Esperar 24 horas a que pase al estómago y controlar con radiografía"
        },
        {
          "letter": "B",
          "text": "Dar una bebida carbonatada para empujarla al estómago"
        },
        {
          "letter": "C",
          "text": "Inducir el vómito"
        },
        {
          "letter": "D",
          "text": "Indicar laxantes y revisar las deposiciones"
        },
        {
          "letter": "E",
          "text": "Endoscopía digestiva alta de urgencia para extraer la pila de inmediato"
        }
      ],
      "correct": "E",
      "explanation": "Una pila de botón en el esófago es una emergencia: la corriente eléctrica produce necrosis por licuefacción en unas 2 horas, con riesgo de perforación y de fístula traqueoesofágica o aortoesofágica. Se extrae por endoscopía urgente. El doble contorno la distingue de una moneda. Inducir el vómito está contraindicado.",
      "say": {
        "stem": "Niño de dos años que hace una hora se tragó una pila de botón. Tiene sialorrea y rechaza los líquidos. La radiografía muestra una imagen redonda con doble contorno en el tercio superior del esófago.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: esperar veinticuatro horas a que pase, una bebida gaseosa, inducir el vómito, laxantes o endoscopía de urgencia. Piénsalo.",
        "answer": "Es la E. Una pila de botón en el esófago quema por corriente eléctrica en menos de dos horas, así que va a endoscopía de urgencia, sin esperar. Esperar que pase al estómago tienta porque es lo que se hace con una moneda distal sin síntomas, pero con una pila esa espera puede terminar en perforación."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.03.2.007 · Cuerpo extraño en el oído",
      "stem": "Un niño de 5 años se introdujo un poroto en el oído derecho hace 1 día. Coopera con el examen. A la otoscopía se observa un cuerpo extraño redondo y liso que ocupa el conducto auditivo externo, sin visualizar el tímpano.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Extracción en seco con gancho romo o microaspiración bajo visión directa, derivando a otorrinolaringología si falla"
        },
        {
          "letter": "B",
          "text": "Lavado ótico con agua tibia"
        },
        {
          "letter": "C",
          "text": "Gotas de agua oxigenada para disolverlo"
        },
        {
          "letter": "D",
          "text": "Extracción con pinza cocodrilo"
        },
        {
          "letter": "E",
          "text": "Esperar su expulsión espontánea"
        }
      ],
      "correct": "A",
      "explanation": "Semillas y legumbres absorben agua y se hinchan, así que el lavado está prohibido. Se extraen en seco, con gancho romo pasado por detrás del objeto o con microaspirador, bajo visión. La pinza resbala sobre un objeto redondo y lo empuja hacia el tímpano. Si el niño no coopera o falla el intento, se deriva para extracción bajo microscopio.",
      "say": {
        "stem": "Niño de cinco años que hace un día se metió un poroto en el oído derecho. A la otoscopía se ve un objeto redondo y liso que tapa el conducto, sin ver el tímpano.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: extracción en seco con gancho romo o aspiración, lavado con agua tibia, gotas de agua oxigenada, pinza cocodrilo o esperar que salga solo. Piénsalo.",
        "answer": "Es la A. El poroto absorbe agua y se hincha, así que el lavado está prohibido, y se saca en seco con un gancho romo por detrás. La pinza tienta, pero con un objeto redondo resbala y lo empuja más adentro, hacia el tímpano."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.03.2.009 · Cuerpo extraño en vía aérea",
      "stem": "Un niño de 3 años, mientras comía maní, presentó tos asfíctica súbita con cianosis que cedió en pocos minutos. Ahora tiene tos ocasional, está eupneico y saturando 96%. Al examen hay murmullo pulmonar disminuido y sibilancias localizadas en la base derecha. La radiografía en inspiración y espiración muestra atrapamiento aéreo en el pulmón derecho.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Salbutamol inhalado y alta con control"
        },
        {
          "letter": "B",
          "text": "Broncoscopía rígida urgente en pabellón, bajo anestesia general"
        },
        {
          "letter": "C",
          "text": "Fibrobroncoscopía flexible ambulatoria en 2 semanas"
        },
        {
          "letter": "D",
          "text": "Kinesioterapia respiratoria con drenaje postural"
        },
        {
          "letter": "E",
          "text": "Amoxicilina oral y control en 7 días"
        }
      ],
      "correct": "B",
      "explanation": "Un síndrome de penetración seguido de signos focales (hipoventilación y sibilancias unilaterales) y atrapamiento aéreo es aspiración de cuerpo extraño hasta demostrar lo contrario, incluso con radiografía normal. La conducta es la broncoscopía rígida urgente, diagnóstica y terapéutica. La kinesioterapia puede movilizar el cuerpo extraño y obstruir la vía aérea.",
      "say": {
        "stem": "Niño de tres años que, comiendo maní, tuvo una tos asfíctica súbita con cianosis que cedió en minutos. Ahora está estable, pero tiene menos murmullo y sibilancias solo en la base derecha, y la radiografía muestra atrapamiento de aire en ese pulmón.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: salbutamol y alta, broncoscopía rígida urgente, fibrobroncoscopía ambulatoria en dos semanas, kinesioterapia con drenaje postural, o amoxicilina. Piénsalo.",
        "answer": "Es la B. Un síndrome de penetración comiendo maní, con signos en un solo pulmón, va a broncoscopía rígida de urgencia, que diagnostica y extrae en el mismo acto. El salbutamol tienta por las sibilancias, pero aquí no hay asma: hay un maní en el bronquio."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.03.3.005 · Prevención de cuerpo extraño en niños",
      "stem": "En el control sano de los 12 meses, la madre pregunta qué alimentos y objetos debe evitar para prevenir la aspiración de cuerpos extraños.",
      "question": "¿Cuál es la recomendación más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Ofrecer maní y frutos secos enteros desde el año para estimular la masticación"
        },
        {
          "letter": "B",
          "text": "Evitar frutos secos enteros, uvas y salchichas enteras, caramelos duros y juguetes con piezas pequeñas hasta al menos los 4 a 5 años, y supervisar siempre la alimentación sentado"
        },
        {
          "letter": "C",
          "text": "Permitir que coma mientras corre para que no se distraiga"
        },
        {
          "letter": "D",
          "text": "Los juguetes con pilas de botón son seguros si están cerrados con pegamento"
        },
        {
          "letter": "E",
          "text": "Solo los globos de látex son peligrosos"
        }
      ],
      "correct": "B",
      "explanation": "La aspiración de cuerpo extraño es más frecuente entre 1 y 3 años. Se previene evitando frutos secos enteros, semillas, uvas y salchichas enteras (cortarlas en trozos pequeños longitudinalmente), dulces duros, globos y objetos pequeños; con pilas de botón en compartimentos asegurados con tornillo; y comiendo sentado y supervisado, sin correr ni reír con comida en la boca.",
      "say": {
        "stem": "La madre de un niño de un año pregunta cómo prevenir la aspiración de cuerpos extraños.",
        "question": "¿Cuál es la recomendación más adecuada?",
        "options": "Las opciones: maní entero para estimular la masticación, evitar frutos secos, uvas y salchichas enteras y piezas pequeñas comiendo sentado y supervisado, comer corriendo, pilas pegadas con pegamento, o que solo los globos son peligrosos. Piénsalo.",
        "answer": "Es la B. Se evitan los frutos secos, uvas y salchichas enteras y las piezas pequeñas, comiendo sentado y supervisado. Las pilas pegadas tientan como seguras, pero el pegamento falla y deben ir bajo tapa con tornillo."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.03.5.006 · Extracción de cuerpo extraño del oído",
      "stem": "Niño de 4 años con un poroto seco introducido en el conducto auditivo externo derecho hace 1 día. Coopera parcialmente. La otoscopía muestra el cuerpo extraño en la porción lateral del conducto, con tímpano no visible.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Lavado de oído con agua tibia a presión"
        },
        {
          "letter": "B",
          "text": "Extraerlo con pinza de punta lisa empujando hacia adentro"
        },
        {
          "letter": "C",
          "text": "Instilar gotas de agua para ablandarlo"
        },
        {
          "letter": "D",
          "text": "Extracción bajo visión directa con gancho o cureta, pasando por detrás del objeto, o derivar a ORL si no coopera o el objeto está en la porción medial"
        },
        {
          "letter": "E",
          "text": "Esperar expulsión espontánea"
        }
      ],
      "correct": "D",
      "explanation": "Los cuerpos extraños del oído se extraen bajo visión directa con gancho o cureta pasado por detrás del objeto, con el niño inmovilizado o sedado. Las semillas y granos no se lavan con agua porque se hinchan. Las pinzas pueden empujar objetos redondos hacia el tímpano. Las pilas de botón son una urgencia.",
      "say": {
        "stem": "Niño de cuatro años con un poroto en el conducto auditivo desde hace un día, en la parte lateral del conducto.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: lavado a presión, pinza empujando hacia adentro, gotas de agua, extracción bajo visión directa con gancho detrás del objeto o derivar si no coopera o esperar. Piénsalo.",
        "answer": "Es la D. Se extrae bajo visión directa con un gancho pasado por detrás del objeto, o se deriva si el niño no coopera. El lavado tienta por ser fácil, pero un poroto se hincha con el agua y queda más atrapado."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.03.5.007 · Extracción de cuerpo extraño nasal",
      "stem": "Niño de 3 años con rinorrea purulenta, fétida y unilateral derecha de 2 semanas que no ha mejorado con antibióticos. A la rinoscopía anterior se ve un objeto plástico en la fosa nasal anterior derecha.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Repetir antibióticos por 10 días"
        },
        {
          "letter": "B",
          "text": "Extracción del cuerpo extraño bajo visión directa con gancho romo o pinza, previa vasoconstricción tópica, o con técnica de presión positiva (\"beso de la madre\"), derivando si no se logra"
        },
        {
          "letter": "C",
          "text": "Instilar suero para empujar el objeto hacia la faringe"
        },
        {
          "letter": "D",
          "text": "TAC de cavidades perinasales y control"
        },
        {
          "letter": "E",
          "text": "Lavado nasal a presión"
        }
      ],
      "correct": "B",
      "explanation": "La rinorrea unilateral fétida en un niño es un cuerpo extraño nasal hasta demostrar lo contrario. Se extrae bajo visión directa con gancho romo o pinza, con vasoconstrictor tópico e inmovilización, o con presión positiva por la boca ocluyendo la fosa contralateral. Empujarlo hacia atrás arriesga aspiración. Pilas de botón e imanes son urgentes.",
      "say": {
        "stem": "Niño de tres años con rinorrea purulenta, fétida y de un solo lado por dos semanas, con un objeto plástico visible en la fosa nasal.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: repetir antibióticos, extraer bajo visión directa con gancho o con la técnica del beso de la madre, empujarlo a la faringe con suero, TAC o lavado a presión. Piénsalo.",
        "answer": "Es la B. Se extrae bajo visión directa con gancho o con presión positiva, y se deriva si no se logra. Empujarlo hacia la faringe tienta para sacarlo de la nariz, pero puede aspirarse a la vía aérea."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: cuerpos extraños',
      cards: [
        { title: 'Lo que no se hace', tag: 'Prohibiciones', kind: 'alert', items: [
          { t: 'Pila de botón: no irrigar', d: 'Extracción inmediata; perfora en 2 horas',
            say: 'Cerremos con las reglas de oro. La pila de botón es una emergencia quirúrgica: se extrae de inmediato y nunca se irriga.' },
          { t: 'Semilla en el oído: no lavar', d: 'Se hincha; instrumental seco',
            say: 'La semilla en el oído no se lava, porque se hincha. Y las pinzas lisas no se usan en objetos redondos de la nariz.' },
        ] },
        { title: 'Lo que se sospecha', tag: 'Claves', kind: 'key', items: [
          { t: 'Rinorrea unilateral fétida', d: 'Cuerpo extraño nasal',
            say: 'La rinorrea fétida de un solo lado es un cuerpo extraño nasal, hasta demostrar lo contrario.' },
          { t: 'Insecto vivo: matarlo primero', d: 'Vaselina líquida o lidocaína',
            say: 'Al insecto vivo se le instila vaselina líquida o lidocaína antes de extraerlo.' },
          { t: 'Aspiración: bronquio derecho', d: 'Broncoscopía rígida urgente',
            say: 'Si te llevas una sola idea de hoy: pila de botón, extracción inmediata y nunca lavarla; y el maní en el bronquio derecho se saca con broncoscopía rígida. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de manejo de cuerpos extraños en oído, nariz y vía aérea',
    root: N('start', 'Cuerpo extraño ORL', '¿Qué es y dónde está?',
      'Un niño con un cuerpo extraño. Lo primero es saber qué es y dónde está.',
      ['Pila de botón, nariz u oído', N('alert', 'Emergencia quirúrgica', 'Perforación en menos de 2 horas',
        'Una pila de botón es una emergencia: se extrae de inmediato.',
        ['Extracción urgente', N('do', 'Extraer ya; no irrigar', 'Gancho romo o pabellón',
          'Se extrae con gancho romo por detrás o en pabellón, y se evita cualquier irrigación.')],
      )],
      ['Rinorrea unilateral fétida', N('do', 'Cuerpo extraño nasal', 'Rinoscopía y gancho romo',
        'Se mira con rinoscopía, y se extrae con gancho romo por detrás del objeto, no con pinzas lisas.')],
      ['Oído', N('q', 'Semilla o insecto', '¿Qué tipo de objeto?',
        'En el oído, lo decisivo es si es una semilla o un insecto vivo.',
        ['Semilla vegetal', N('do', 'No lavar con agua', 'Instrumental seco',
          'La semilla se hincha con agua: se extrae con gancho romo o microaspirador.')],
        ['Insecto vivo', N('do', 'Vaselina o lidocaína primero', 'Luego extraer o lavar',
          'Se inmoviliza con vaselina líquida o lidocaína, y después se extrae.')],
      )],
      ['Tos súbita comiendo', N('refer', 'Aspiración en vía aérea', 'Bronquio derecho',
        'Es un síndrome de penetración, con cuerpo extraño en la vía aérea.',
        ['Obstrucción total en menor de un año', N('do', 'Golpes en la espalda', 'Luego compresiones torácicas',
          'Si obstruye por completo a un lactante, golpes en la espalda y compresiones torácicas.')],
        ['Obstrucción parcial persistente', N('refer', 'Broncoscopía rígida', 'Urgente, bajo anestesia general',
          'Si el objeto quedó alojado en el bronquio, la broncoscopía rígida en pabellón es el tratamiento.')],
      )],
    ),
  },
};
