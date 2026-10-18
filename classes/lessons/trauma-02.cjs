// Clase 12.2 (Traumatología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_traumatologia.cjs (trauma-02). Preguntas: banco real EUNACOM (class_questions.cjs --search).
// El banco real no tiene preguntas de fractura expuesta (Gustilo, antibióticos, traslado): se usan 3 casos del libro, rotulados "Caso representativo".

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'trauma-02',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Gustilo y Anderson, antibióticos según el grado y qué hacer antes del traslado',
      say: 'Bienvenido. En la clase pasada viste que la fractura expuesta es una urgencia quirúrgica. Hoy la estudiamos completa. Es un tema que el libro marca como muy preguntado, y casi siempre cae lo mismo: clasificar la herida según Gustilo y Anderson, elegir el antibiótico que corresponde a ese grado, y saber cómo dejar al paciente antes de derivarlo. Vamos paso a paso.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'El problema es la exposición',
      nodes: [
        { id: 'fx', col: 0, row: 1, k: 'cause', t: 'Fractura con herida', s: 'El hueso toca el ambiente' },
        { id: 'co', col: 1, row: 1, k: 'mech', t: 'Contaminación al momento del trauma', s: 'Tierra, agua, detritos' },
        { id: 'pb', col: 2, row: 0, k: 'risk', t: 'Hueso y partes blandas dañados', s: 'Poco flujo sanguíneo' },
        { id: 'in', col: 3, row: 1, k: 'alert', t: 'Infección y osteomielitis', s: 'Complicación más temida' },
        { id: 'ac', col: 2, row: 3, k: 'good', t: 'Aseo precoz y antibiótico', s: 'Corta la cadena' },
      ],
      edges: [
        { from: 'fx', to: 'co' },
        { from: 'co', to: 'pb' },
        { from: 'pb', to: 'in' },
        { from: 'co', to: 'ac' },
      ],
      steps: [
        { show: ['fx'], note: 'Fractura más herida comunicada',
          say: 'Una fractura expuesta es una fractura con una herida de partes blandas que deja el foco en contacto directo con el ambiente: aire, agua, contaminantes. Por eso se considera una urgencia traumatológica que no se puede derivar sin tratamiento inicial. El tratamiento definitivo es quirúrgico, pero el médico general hace el manejo inmediato.' },
        { show: ['co', 'pb'], note: 'La contaminación ocurre en el trauma',
          say: 'Fíjate en el mecanismo. La contaminación bacteriana ocurre en el momento del golpe. Y el hueso fracturado tiene poco flujo de sangre, y las partes blandas están dañadas. Eso es un ambiente ideal para que las bacterias se multipliquen.' },
        { show: ['in', 'ac'], note: 'Aseo y antibiótico precoz cortan la cadena',
          say: 'El resultado es la infección, y su forma más temida es la osteomielitis, que puede impedir la consolidación y llevar a perder la extremidad. Lo que corta esta cadena es el aseo y el antibiótico precoces. Por eso el principal problema de la fractura expuesta no es la fractura en sí, sino la exposición.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Riesgos y diagnóstico',
      title: 'Qué se teme y cómo se reconoce',
      cards: [
        { title: 'Riesgos', tag: 'Complicaciones', kind: 'alert', items: [
          { t: 'Infección y osteomielitis', d: 'La más específica y temida',
            say: 'Los riesgos son varios. El principal es la infección y la osteomielitis, la complicación más específica de la fractura expuesta.' },
          { t: 'Lesión neurovascular', d: 'Nervios y vasos vecinos',
            say: 'Puede haber daño de nervios o de vasos sanguíneos vecinos.' },
          { t: 'Síndrome compartimental', d: 'Trauma de alta energía y edema',
            say: 'También el síndrome compartimental, por la alta energía y el edema. Lo vemos en la próxima clase. Y finalmente, retardo de consolidación o pseudoartrosis.' },
        ] },
        { title: 'Diagnóstico', tag: 'Clínico', kind: 'key', items: [
          { t: 'Herida que comunica con el hueso', d: 'Examen físico',
            say: 'El diagnóstico es clínico: una herida que comunica con el hueso fracturado. La radiografía confirma la fractura y muestra aire en los tejidos o cuerpos extraños.' },
          { t: 'Toda herida cerca es expuesta', d: 'Hasta demostrar lo contrario',
            say: 'Y la regla práctica: toda herida cercana a una fractura es una fractura expuesta hasta demostrar lo contrario, aunque no veas el hueso.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento inicial',
      title: 'Cinco pilares en urgencia',
      cards: [
        { title: 'Primero el ABC, luego la herida', tag: 'Manejo inmediato', kind: 'key', items: [
          { t: 'Lavado con suero fisiológico', d: '3 a 10 litros, a chorro',
            say: 'Después del ABC del trauma, el primer pilar y la medida inicial más importante es el aseo con suero fisiológico. Se irriga la herida a chorro con grandes volúmenes, de tres a diez litros, para arrastrar restos vegetales, tierra y detritos.' },
          { t: 'Antibiótico endovenoso precoz', d: 'Idealmente en la primera hora',
            say: 'El segundo pilar es el antibiótico endovenoso, lo antes posible, idealmente en la primera hora. Más adelante vemos cuál se elige.' },
          { t: 'Analgesia', d: 'AINE u opioide según el dolor',
            say: 'Tercero, analgesia con antiinflamatorios u opioides, según la escala de dolor.' },
          { t: 'Vacuna antitetánica', d: 'Según antecedente y suciedad',
            say: 'Cuarto, la vacunación antitetánica, según el antecedente del paciente y qué tan sucia está la herida.' },
          { t: 'Cirugía: aseo quirúrgico y osteosíntesis', d: 'Es el tratamiento definitivo',
            say: 'Y quinto, el tratamiento definitivo: aseo quirúrgico y estabilización en pabellón.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Clasificación',
      title: 'Gustilo y Anderson',
      cards: [
        { title: 'Grados I y II', tag: 'Menos grave', kind: 'criteria', items: [
          { t: 'Grado I: herida < 1 cm', d: 'Baja energía, contaminación mínima',
            say: 'La clasificación de Gustilo y Anderson es la más usada para el pronóstico y el tratamiento. En el grado uno la herida mide menos de un centímetro, es de baja energía, normalmente de adentro hacia afuera: el hueso rompe la piel. Contaminación mínima.' },
          { t: 'Grado II: herida > 1 cm', d: 'Habitualmente menor de 10 cm',
            say: 'En el grado dos la herida es mayor de un centímetro, pero habitualmente menor de diez, con daño moderado de partes blandas y energía moderada.' },
        ] },
        { title: 'Grado III', tag: 'Más de 10 cm o alta energía', kind: 'alert', items: [
          { t: 'III A: cobertura cutánea adecuada', d: 'Aunque la laceración sea extensa',
            say: 'El grado tres es una herida de más de diez centímetros o de alta energía, y tiene subtipos. El tres A conserva una cobertura cutánea adecuada, pese a una laceración extensa.' },
          { t: 'III B: periostio denudado, requiere colgajo', d: 'La que más se infecta',
            photos: [
              { src: 'biblioteca/18_traumatologia/trauma-02/01_fractura-expuesta__atls_p210.jpg', label: 'Herida amplia con hueso', at: 'Mira esta fractura expuesta', credit: 'ATLS 10.ª ed., Fig. 8-6' },
              { src: 'biblioteca/18_traumatologia/trauma-02/21_expuesta-iiib__sherman_p631.jpg', label: 'Expuesta tipo IIIB', at: 'Y esta pierna', credit: 'Sherman, Atlas of Clinical Emergency Medicine, p. 631' },
            ],
            say: 'El tres B tiene daño extenso de partes blandas, con el periostio denudado y el hueso expuesto, y requiere colgajos para cerrar. Es la que más se infecta. Mira esta fractura expuesta: el hueso sale por una herida amplia, con sangre y tejidos dañados. Y esta pierna es un tres B típico, con el músculo destruido y sin piel que cubra. Estas heridas no se exploran con los dedos ni se suturan: se cubren y se prepara el traslado.' },
          { t: 'III C: lesión arterial a reparar', d: 'Sin importar el tamaño de la herida',
            say: 'El tres C es el que tiene una lesión arterial que requiere reparación vascular, sin importar el tamaño de la herida. Y el tres D es la amputación traumática.' },
          { t: 'Arma de fuego: siempre III', d: 'Siempre grado III, sin importar la herida',
            say: 'Ojo con la trampa: una fractura por arma de fuego, en una catástrofe o con gran contaminación, como tierra de campo o aguas servidas, se clasifica automáticamente como grado tres, aunque la herida sea pequeña.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Antibiótico según el grado',
      head: ['Grado', 'Cobertura', 'Antibiótico'],
      rows: [
        { cells: ['I', 'Gram positivos (S. aureus)', 'Cefazolina EV'],
          say: 'Esta es la tabla que cae. En el grado uno se cubren los gram positivos, sobre todo estafilococo aureus, con cefazolina endovenosa sola.' },
        { cells: ['II', 'Gram positivos y gram negativos', 'Cefazolina + gentamicina'],
          say: 'En el grado dos se agregan los gram negativos: cefazolina más un aminoglucósido, que el libro nombra como gentamicina.' },
        { cells: ['III', 'Gram positivos, negativos y anaerobios', 'Cefazolina + gentamicina + clindamicina'],
          say: 'En el grado tres se suman los anaerobios, con clindamicina, o con metronidazol. Es el esquema de triple cobertura. La regla para recordar es que a mayor grado, más cobertura.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Derivación',
      title: 'Cómo dejar al paciente antes del traslado',
      cards: [
        { title: 'Médico general', tag: 'Antes de derivar', kind: 'key', items: [
          { t: 'No suturar la herida', d: 'Queda abierta para el aseo quirúrgico',
            say: 'Después del aseo, los antibióticos y la analgesia, se deriva a un centro de mayor complejidad. Y hay reglas para el traslado. No se sutura la herida: queda abierta para el aseo quirúrgico formal. Solo se admite un punto si es estrictamente necesario para una hemostasia activa.' },
          { t: 'Apósito estéril empapado en suero', d: 'Sin reintroducir el hueso expuesto',
            say: 'Antes del traslado controlas la hemorragia con compresión directa, retiras la contaminación gruesa e irrigas. Luego cubres con un apósito estéril empapado en suero, y nunca reintroduces el hueso expuesto.' },
          { t: 'Valva de yeso larga', d: 'Incluye articulación proximal y distal',
            say: 'Se inmoviliza con una valva de yeso larga, que incluya la articulación de arriba y la de abajo de la fractura.' },
          { t: 'Valva abierta, no yeso circular', d: 'Previene el síndrome compartimental',
            say: 'Y tiene que ser una valva abierta, no un yeso circular, para que los tejidos puedan expandirse y no se produzca un síndrome compartimental.' },
          { t: 'Neurovascular antes y después', d: 'Registrado, más antibiótico y antitetánica',
            say: 'Dejas registrado el estado neurovascular antes y después de inmovilizar. Y, ojo, no se hacen maniobras de reducción forzada: se alinea suavemente el eje, nada más.' },
        ] },
        { title: 'En el centro terciario', tag: 'Tratamiento quirúrgico', kind: 'pharma', items: [
          { t: 'Aseo quirúrgico y desbridamiento', d: 'Se retira el tejido necrótico',
            say: 'En el centro terciario, el traumatólogo hace el aseo quirúrgico, con desbridamiento del tejido necrótico.' },
          { t: 'Fijación externa o interna', d: 'La externa es común en el grado III',
            say: 'Luego estabiliza el hueso con fijación externa, que es común en el grado tres, o con fijación interna.' },
          { t: 'III C: cirujano vascular', d: 'Intervención conjunta obligatoria',
            say: 'Y si es un grado tres C, es obligatoria la intervención conjunta con un cirujano vascular.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Traslado',
      title: 'Estabilizar primero, trasladar después',
      cards: [
        { title: 'Antes de mover', tag: 'ABCDE completo', kind: 'key', items: [
          { t: 'ABCDE, dos vías y oxígeno', d: 'Analgesia y control de hemorragias',
            say: 'El traumatizado primero se estabiliza y después se traslada. Eso significa ABCDE completo, dos vías venosas de buen calibre, oxígeno, analgesia y control de las hemorragias.' },
          { t: 'Collar rígido y movilización en bloque', d: 'Si el mecanismo es de riesgo',
            say: 'Si el mecanismo es de riesgo, mantienes la columna cervical protegida con collar rígido, y el paciente se mueve en bloque, con una persona sosteniendo la cabeza. El casco del motociclista solo lo retira personal entrenado, entre dos personas.' },
          { t: 'Abrigar al paciente', d: 'Evita la hipotermia',
            say: 'Se abriga al paciente para evitar la hipotermia.' },
        ] },
        { title: 'Durante y al entregar', tag: 'Coordinación', kind: 'criteria', items: [
          { t: 'Coordinar con el centro receptor', d: 'Mayor complejidad, vía SAMU',
            say: 'Se coordina con el centro receptor, de mayor complejidad, por teléfono o por la regulación del SAMU. Acompaña personal capacitado en vía aérea y reanimación.' },
          { t: 'Vigilar signos vitales y neurovascular', d: 'Durante todo el traslado',
            say: 'Durante el traslado vigilas signos vitales y el estado neurovascular distal.' },
          { t: 'Entregar hora, mecanismo y tratamientos', d: 'Y el tiempo de isquemia',
            say: 'Y al entregar, informas la hora del trauma, el mecanismo, los hallazgos, los tratamientos dados, como analgesia, antibiótico y antitetánica, y el tiempo de isquemia si lo hubo.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol completo: de la herida junto a la fractura hasta el antibiótico y el traslado.',
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Un hombre de 34 años recibe un disparo en la pierna izquierda. Hay un orificio de 1 cm en la cara anterior de la tibia, sin hueso visible, y la radiografía muestra una fractura diafisaria. Tiene pulsos distales presentes y está hemodinámicamente estable.',
      question: '¿Cómo se clasifica y qué esquema antibiótico corresponde?',
      options: [
        { letter: 'A', text: 'Grado I; cefazolina sola' },
        { letter: 'B', text: 'Grado II; cefazolina más gentamicina' },
        { letter: 'C', text: 'Grado III; cefazolina, gentamicina y clindamicina' },
        { letter: 'D', text: 'No es fractura expuesta; yeso circular y control' },
        { letter: 'E', text: 'Grado III; solo metronidazol' },
      ],
      correct: 'C',
      explanation: 'Toda fractura por arma de fuego se clasifica automáticamente como grado III, aunque la herida sea pequeña. Corresponde triple cobertura: cefazolina, gentamicina y clindamicina, además del aseo y el traslado con valva abierta.',
      say: {
        stem: 'Un hombre de treinta y cuatro años recibe un disparo en la pierna izquierda. Hay un orificio de un centímetro sobre la tibia, sin hueso visible, y la radiografía muestra una fractura de la diáfisis. Los pulsos están presentes y está estable.',
        question: '¿Cómo se clasifica y qué antibiótico corresponde?',
        options: 'Las opciones: grado uno con cefazolina; grado dos con cefazolina y gentamicina; grado tres con triple esquema; no es expuesta y se pone yeso circular; o grado tres con solo metronidazol. Piénsalo.',
        answer: 'Es la C. La herida de un centímetro te tienta a pensar en un grado uno, pero toda fractura por arma de fuego es grado tres automáticamente, y lleva triple cobertura. Y la D es peligrosa: toda herida cerca de una fractura es expuesta hasta demostrar lo contrario.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un paciente tiene fractura de pierna expuesta grado 1 de Gustilo: herida menor de un centímetro, baja energía, contaminación mínima.',
      question: '¿Cuál es el antibiótico endovenoso inicial?',
      options: [
        { letter: 'A', text: 'Cefazolina' },
        { letter: 'B', text: 'Amikacina más cefazolina' },
        { letter: 'C', text: 'Cefazolina más amikacina más clindamicina' },
        { letter: 'D', text: 'Metronidazol intravenoso' },
        { letter: 'E', text: 'Amoxicilina clavulánico oral' },
      ],
      correct: 'A',
      explanation: 'El grado I requiere cobertura para gram positivos, especialmente estafilococo aureus, y la cefazolina es la cefalosporina de primera línea. La amikacina se agrega en el grado II, y la triple combinación es del grado III. En la fractura expuesta el tratamiento es endovenoso.',
      say: {
        stem: 'Un paciente con una fractura de pierna expuesta, grado uno de Gustilo: herida menor de un centímetro, de baja energía y con contaminación mínima.',
        question: '¿Cuál es el antibiótico endovenoso inicial?',
        options: 'Las opciones: cefazolina; amikacina más cefazolina; cefazolina, amikacina y clindamicina; metronidazol endovenoso; o amoxicilina con ácido clavulánico oral. Piénsalo.',
        answer: 'Es la A. En el grado uno solo se necesita cubrir gram positivos, y para eso basta la cefazolina. Las opciones B y C son más cobertura de la que corresponde a este grado. Y la E es oral, y la fractura expuesta se trata por vía endovenosa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un paciente tiene fractura de pierna expuesta con herida de quince centímetros muy contaminada con restos vegetales.',
      question: '¿Cuál es la clasificación de Gustilo y el esquema antibiótico?',
      options: [
        { letter: 'A', text: 'Grado 2; cefazolina más amikacina' },
        { letter: 'B', text: 'Grado 3; cefazolina más amikacina más clindamicina' },
        { letter: 'C', text: 'Grado 1; solo cefazolina' },
        { letter: 'D', text: 'Grado 3; solo metronidazol' },
        { letter: 'E', text: 'Grado 2; solo cefazolina' },
      ],
      correct: 'B',
      explanation: 'Una herida mayor de diez centímetros y muy contaminada es grado III. Requiere triple cobertura: cefazolina para gram positivos, amikacina para gram negativos y clindamicina para anaerobios. El metronidazol solo no basta.',
      say: {
        stem: 'Un paciente con una fractura de pierna expuesta, con herida de quince centímetros muy contaminada con restos vegetales.',
        question: '¿Cuál es el grado de Gustilo y el esquema antibiótico?',
        options: 'Las opciones: grado dos con cefazolina y amikacina; grado tres con cefazolina, amikacina y clindamicina; grado uno con cefazolina sola; grado tres con solo metronidazol; o grado dos con cefazolina sola. Piénsalo.',
        answer: 'Es la B. Más de diez centímetros y muy contaminada: grado tres, con tres coberturas, gram positivos, gram negativos y anaerobios. Fíjate que la pregunta usa amikacina como el aminoglucósido, y el libro en su texto principal usa gentamicina: lo que importa es la lógica de la triple cobertura.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un médico general maneja una fractura expuesta y va a trasladar al paciente al centro de referencia.',
      question: '¿Cuál es la forma correcta de inmovilizar y preparar el traslado?',
      options: [
        { letter: 'A', text: 'Suturar la herida completamente y colocar yeso circular' },
        { letter: 'B', text: 'Cubrir con apósitos estériles e inmovilizar con valva de yeso larga y abierta' },
        { letter: 'C', text: 'Dejar la herida al aire sin cubrir y trasladar sin inmovilización' },
        { letter: 'D', text: 'Suturar la herida y colocar valva corta de yeso' },
        { letter: 'E', text: 'Yeso circular inmediato para asegurar la fractura durante el traslado' },
      ],
      correct: 'B',
      explanation: 'La herida se cubre con apósitos estériles y no se sutura, porque necesita aseo quirúrgico en pabellón. La valva es larga, para inmovilizar bien, y abierta, para prevenir un síndrome compartimental. El yeso circular puede causarlo.',
      say: {
        stem: 'Un médico general maneja una fractura expuesta y va a trasladar al paciente al centro de referencia.',
        question: '¿Cuál es la forma correcta de preparar el traslado?',
        options: 'Las opciones: suturar y poner yeso circular; cubrir con apósitos e inmovilizar con valva larga y abierta; dejar la herida al aire sin inmovilizar; suturar y poner valva corta; o yeso circular inmediato. Piénsalo.',
        answer: 'Es la B. Se cubre y no se sutura, y la valva es larga y abierta. Cada alternativa falla en una de esas tres cosas: suturar encierra la contaminación, la valva corta no inmoviliza las articulaciones vecinas, y el yeso circular puede producir un síndrome compartimental.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.02.5.001 · Inmovilizaciones de urgencia",
      "stem": "Hombre de 26 años cae de una escalera sobre la mano extendida. Llega al SAPU con dolor y deformidad en dorso de tenedor en la muñeca derecha. Piel indemne, llene capilar normal y sensibilidad conservada en los dedos. Se decide inmovilizar antes de derivarlo para radiografía y manejo definitivo.",
      "question": "¿Cuál es la inmovilización de urgencia más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Yeso circular braquiopalmar cerrado"
        },
        {
          "letter": "B",
          "text": "Vendaje elástico compresivo apretado desde la mano al codo"
        },
        {
          "letter": "C",
          "text": "Solo cabestrillo, sin férula"
        },
        {
          "letter": "D",
          "text": "Valva o férula antebraquiopalmar acolchada, sin cerrar en forma circular, con cabestrillo y control neurovascular"
        },
        {
          "letter": "E",
          "text": "Reducción forzada sin analgesia y luego vendaje"
        }
      ],
      "correct": "D",
      "explanation": "En urgencia se inmoviliza con férulas o valvas acolchadas no circulares que incluyan las articulaciones vecinas, dejando espacio para el edema, con elevación y registro neurovascular antes y después. El yeso circular cerrado y los vendajes compresivos en agudo arriesgan un síndrome compartimental.",
      "say": {
        "stem": "Un hombre de veintiséis años cae sobre la mano extendida y tiene la muñeca derecha deformada en dorso de tenedor, con buena circulación y sensibilidad. Hay que inmovilizarlo antes de derivarlo.",
        "question": "¿Cuál es la mejor inmovilización de urgencia?",
        "options": "Las opciones: yeso circular cerrado, vendaje elástico apretado, solo cabestrillo, valva acolchada no circular con cabestrillo o reducción forzada sin analgesia. Piénsalo.",
        "answer": "Es la D. En urgencia se usa una valva acolchada que no cierre en forma circular, con cabestrillo y control de pulsos y sensibilidad. El yeso circular tienta porque parece más firme, pero con el edema de las primeras horas puede causar un síndrome compartimental."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.02.5.005 · Traslado del traumatizado",
      "stem": "Un motociclista de 30 años choca a alta velocidad en una carretera rural. Al llegar el equipo de rescate, está confuso con Glasgow 13, se queja de dolor cervical y tiene deformidad del muslo derecho. Respira espontáneamente, presión arterial 110/70 mmHg y frecuencia cardíaca 105 por minuto. Aún tiene el casco puesto.",
      "question": "¿Cuál es la conducta más adecuada para su traslado?",
      "options": [
        {
          "letter": "A",
          "text": "Sentarlo en el auto de un testigo para llegar más rápido al hospital"
        },
        {
          "letter": "B",
          "text": "Mantener la vía aérea, retirar el casco entre dos personas con estabilización manual de la columna, colocar collar cervical, tabla espinal y férula de la extremidad, y trasladar monitorizado al centro adecuado"
        },
        {
          "letter": "C",
          "text": "Retirar el casco tirando de él rápidamente para evaluar la cara"
        },
        {
          "letter": "D",
          "text": "Esperar en el lugar a tener radiografías antes de movilizarlo"
        },
        {
          "letter": "E",
          "text": "Trasladarlo en decúbito lateral sin inmovilización cervical para evitar aspiración"
        }
      ],
      "correct": "B",
      "explanation": "Todo politraumatizado con mecanismo de alta energía, compromiso de conciencia o dolor cervical se traslada con restricción de movimiento espinal: vía aérea primero, retiro del casco entre dos operadores con estabilización manual, collar, tabla, férulas en las fracturas, oxígeno y monitorización, hacia el centro con capacidad resolutiva.",
      "say": {
        "stem": "Un motociclista de treinta años choca a alta velocidad. Está confuso, con dolor en el cuello y deformidad del muslo derecho, respira bien y aún tiene el casco puesto.",
        "question": "¿Cómo debe trasladarse?",
        "options": "Las opciones: en el auto de un testigo, con casco retirado entre dos personas, collar, tabla y férula, tirando del casco de una vez, esperar radiografías en el lugar, o de lado sin collar. Piénsalo.",
        "answer": "Es la B. Con alta energía y dolor cervical se asegura la vía aérea, se retira el casco entre dos personas protegiendo la columna, y se traslada con collar, tabla y férula, monitorizado. Retirar el casco rápido de un tirón tienta para ver la cara, pero puede agravar una lesión medular."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: fractura expuesta',
      cards: [
        { title: 'Primera hora', tag: 'Urgencia', kind: 'alert', items: [
          { t: 'Aseo abundante y antibiótico EV', d: 'Lavado con 3 a 10 litros; primera hora',
            say: 'Cerremos con las reglas de oro. La fractura expuesta es una urgencia: aseo con abundante suero fisiológico y antibiótico endovenoso en la primera hora, además de analgesia y vacuna antitetánica.' },
          { t: 'Más grado, más cobertura', d: 'I cefazolina; II suma gram negativos; III suma anaerobios',
            say: 'El antibiótico sigue al grado: en el grado uno, cefazolina; en el dos se suman los gram negativos; en el tres, los anaerobios. Y arma de fuego o gran contaminación es grado tres siempre.' },
        ] },
        { title: 'Antes de derivar', tag: 'Traslado', kind: 'key', items: [
          { t: 'No suturar; cubrir con apósito estéril', d: 'Aseo quirúrgico en pabellón',
            say: 'Para el traslado, no se sutura la herida y se cubre con apósito estéril.' },
          { t: 'Valva larga y abierta', d: 'No yeso circular',
            say: 'Se inmoviliza con una valva de yeso larga y abierta.' },
          { t: 'Revisar nervios y pulsos', d: 'Antes y después de inmovilizar',
            say: 'Si te llevas una sola idea de hoy: aseo y antibiótico precoces, el antibiótico según el grado, y una herida que se cubre pero no se sutura. Nos vemos en la próxima clase, con el síndrome compartimental.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de la fractura expuesta: del aseo al traslado',
    root: N('start', 'Herida cerca de una fractura', 'Es expuesta hasta demostrar lo contrario',
      'Un paciente con una herida junto a una fractura. Aunque no veas el hueso, lo tratas como fractura expuesta.',
      ['Inestable', N('alert', 'ABC del trauma primero', 'Luego la extremidad',
        'Antes de la herida, estabilizas la vía aérea, la ventilación y la circulación.')],
      ['Estable', N('do', 'Aseo con suero, analgesia, vacuna antitetánica', 'Lavar con 3 a 10 litros a chorro',
        'Con el paciente estable, haces el aseo con grandes volúmenes de suero, das analgesia y completas la vacuna antitetánica según el caso. Y clasificas la herida con Gustilo y Anderson.',
        ['Grado I: herida < 1 cm', N('ok', 'Cefazolina EV', 'Cubre gram positivos',
          'En el grado uno, cefazolina endovenosa.')],
        ['Grado II: herida de 1 a 10 cm', N('do', 'Cefazolina más gentamicina', 'Suma gram negativos',
          'En el grado dos, cefazolina más aminoglucósido.')],
        ['Grado III: más de 10 cm, alta energía, arma de fuego o contaminación', N('alert', 'Cefazolina, gentamicina y clindamicina', 'Suma anaerobios; III C: cirujano vascular',
          'En el grado tres, triple cobertura. Si hay lesión arterial, es un tres C, y se opera junto con un cirujano vascular.',
          ['Antes de derivar', N('refer', 'Sin suturar; valva larga abierta', 'Aseo quirúrgico y osteosíntesis en pabellón',
            'Para el traslado: sin suturar, con apósito estéril y valva de yeso larga y abierta. El aseo quirúrgico y la osteosíntesis se hacen en el centro terciario.')],
        )],
      )],
    ),
  },
};
