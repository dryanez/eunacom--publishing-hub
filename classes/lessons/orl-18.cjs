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
          say: 'Y esto ocurre rápido: la necrosis por licuefacción puede perforar el cartílago del tabique, o el tímpano, en dos horas. Por eso se trata como una emergencia quirúrgica. En la radiografía, la pila muestra el signo del doble contorno, o del halo.' },
        { show: ['ag', 'ex'], note: 'Nunca irrigar: el líquido acelera la reacción',
          say: 'La regla de oro: está prohibido lavar con agua o suero. El líquido conduce la corriente y acelera la electrólisis cáustica. Lo que corresponde es la extracción inmediata, bajo visión directa por el otorrinolaringólogo, y con anestesia general si el niño no coopera.' },
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
            say: 'Si el cuerpo extraño es una semilla, como un poroto o una lenteja, está terminantemente contraindicado el lavado de oídos. El material orgánico absorbe agua, aumenta de volumen en pocas horas y se impacta contra el hueso y el tímpano, con dolor intenso y necrosis de la piel.' },
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
          say: 'Por eso hay asimetría al auscultar: el murmullo está disminuido de un lado y hay sibilancias unilaterales. En la radiografía, los frutos secos casi no se ven, pero sí su efecto: el pulmón afectado queda hiperinsuflado, atrapa aire, o se colapsa con una atelectasia.' },
        { show: ['br'], note: 'Diagnóstico y tratamiento en un solo acto',
          say: 'El procedimiento de elección es la broncoscopía rígida de urgencia en pabellón, con anestesia general. Es diagnóstica y terapéutica a la vez, y no se difiere por el riesgo de atelectasia y neumonía distal.' },
      ],
    },

    {
      type: 'image',
      layout: 'gallery',
      kicker: 'Así se ve',
      title: 'Cuerpo extraño en oído y bronquio',
      images: [
        { src: 'biblioteca/17_otorrino/orl-18/01_cuerpo-extrano-conducto-auditivo__bailey-love_p728.jpg', label: 'Cuerpo extraño ocupando el conducto auditivo externo', credit: 'Bailey & Love 27.ª ed., Fig. 46.10' },
        { src: 'biblioteca/17_otorrino/orl-18/02_mani-bronquio-derecho-inspiracion__cxr_p210.jpg', label: 'Maní en bronquio derecho: inspiración, pulmón derecho más negro', credit: 'CXR, Fig. 14.13 (a)' },
        { src: 'biblioteca/17_otorrino/orl-18/03_mani-bronquio-derecho-espiracion__cxr_p210.jpg', label: 'Misma radiografía en espiración: el aire queda atrapado', credit: 'CXR, Fig. 14.13 (b)' },
      ],
      steps: [
        { note: 'Oído: el objeto llena el conducto',
          say: 'Aquí tienes un cuerpo extraño en el conducto auditivo, visto por otoscopía. Ocupa todo el calibre del conducto y tapa el tímpano. Como se ve, sacarlo puede ser un desafío, y por eso el especialista usa microscopio y, en niños que no cooperan, anestesia general.' },
        { note: 'Bronquio: inspiración, el pulmón derecho se ve más negro',
          say: 'Y esta es una radiografía de tórax de un niño con un maní en el bronquio principal derecho. En inspiración, el pulmón derecho se ve más negro que el izquierdo: entra aire, pero el objeto actúa como una válvula.' },
        { note: 'Espiración: el pulmón afectado no se vacía',
          say: 'En espiración la diferencia se acentúa: el pulmón derecho no se vacía y el mediastino se desplaza hacia el lado sano. Ese atrapamiento aéreo unilateral es el signo que tienes que buscar.' },
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
