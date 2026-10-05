// Clase 12.9 (Traumatología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_traumatologia.cjs (trauma-09). El banco real no tiene preguntas de contusión, hematoma, esguince,
// quiste de Baker ni Aquiles (las dos del código 4.02.2.004 son de cadera y van en trauma-10): se usan tres casos del libro rotulados
// "Banco EUNACOM · Caso representativo". Los grados del esguince vienen de las explicaciones de las preguntas del libro (la tabla de
// clasificación del texto principal quedó vacía). Las tablas de severidad y tratamiento del libro (fracturas, cefazolina, enoxaparina)
// son plantilla ajena al tema y no se usan. El libro indica cirugía urgente para el Aquiles; se enseña la derivación y la cirugía como
// plantea el libro, sin inventar plazos (ver nota de revisión). Esguince de tobillo y radiografía previa se conectan con trauma-07.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'trauma-09',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Partes blandas: contusión, hematoma, esguince, quiste de Baker y rotura del Aquiles',
      say: 'Bienvenido. Después de los huesos y la rodilla, hoy vemos lo que está alrededor: músculos, ligamentos y tendones. Son los motivos de consulta más frecuentes en urgencia y en atención primaria, y casi todos se resuelven con manejo conservador. Pero hay dos que no se pueden pasar por alto: el quiste de Baker roto, que simula una trombosis, y la rotura del tendón de Aquiles, que se deriva.',
    },

    {
      type: 'points',
      kicker: 'Concepto',
      title: 'Qué son las partes blandas',
      cards: [
        { title: 'Definición', tag: 'No es hueso', kind: 'key', items: [
          { t: 'Músculos, ligamentos y tendones', d: 'Más el tejido celular subcutáneo',
            say: 'A diferencia de las fracturas, las lesiones de partes blandas afectan estructuras como músculos, ligamentos, tendones y tejido celular subcutáneo.' },
          { t: 'Diagnóstico mayormente clínico', d: 'La radiografía descarta el hueso',
            say: 'El diagnóstico es sobre todo clínico. La radiografía se pide para descartar una lesión ósea, no para ver la lesión de partes blandas.' },
        ] },
        { title: 'Contusión', tag: 'Golpe directo', kind: 'criteria', items: [
          { t: 'Golpe sin romper la piel', d: 'Traumatismo directo sobre partes blandas',
            say: 'La contusión es una lesión producida por un golpe directo sobre las partes blandas, sin romper la continuidad de la piel.' },
          { t: 'Dolor, edema y equimosis', d: 'Clínico; sin signos de fractura',
            say: 'Da dolor local, aumento de volumen y equimosis, que es sangrado superficial. El diagnóstico es clínico, y el punto clave es que no hay signos de fractura.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Contusión',
      title: 'Contusión: estudio y manejo',
      cards: [
        { title: 'Estudio', tag: 'Cuándo pedir imagen', kind: 'alert', items: [
          { t: 'Radiografía si hay alta energía', d: 'O dolor muy invalidante',
            say: 'Pides radiografía principalmente para descartar una lesión ósea cuando el mecanismo fue de alta energía o el dolor es muy invalidante. Si no, no es necesaria.' },
          { t: 'Con fractura, cambia la gravedad', d: 'Aspecto médico-legal',
            say: 'Un dato médico-legal que se pregunta: una contusión simple es una lesión leve, pero si se asocia a una fractura, el cuadro pasa a ser una lesión grave.' },
        ] },
        { title: 'Tratamiento', tag: 'Conservador', kind: 'pharma', items: [
          { t: 'Antiinflamatorios para el dolor', d: 'AINE',
            say: 'El manejo del dolor se hace con antiinflamatorios no esteroidales.' },
          { t: 'Frío 48 horas, luego calor', d: 'Crioterapia al inicio',
            say: 'Aplicas frío local las primeras cuarenta y ocho horas, y después calor local.' },
          { t: 'Reposo relativo', d: 'Pronóstico excelente en pocos días',
            say: 'Y reposo relativo. El pronóstico suele ser excelente en pocos días.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Hematoma',
      title: 'Hematoma: cuándo drenar',
      cards: [
        { title: 'Qué es y cómo se ve', tag: 'Colección de sangre', kind: 'key', items: [
          { t: 'Sangre en un espacio o tejido', d: 'Por trauma o desgarro',
            say: 'Un hematoma es una colección de sangre dentro de un tejido o de un espacio anatómico, secundaria a un traumatismo o a un desgarro.' },
          { t: 'Aumento de volumen fluctuante', d: 'Dolor y color violáceo',
            say: 'Se ve como un aumento de volumen fluctuante y doloroso, a veces con coloración violácea si la sangre se desplaza al tejido subcutáneo.' },
          { t: 'Ecografía de apoyo', d: 'Colección organizada o inflamación difusa',
            say: 'El diagnóstico es clínico y se apoya en la ecografía, que distingue una inflamación difusa de una colección líquida organizada.' },
        ] },
        { title: 'Tratamiento', tag: 'Casi siempre conservador', kind: 'alert', items: [
          { t: 'Frío, calor y AINE', d: 'La mayoría se manejan así',
            say: 'La mayoría de los hematomas se maneja de forma conservadora, con frío, calor y antiinflamatorios.' },
          { t: 'Drenaje quirúrgico', d: 'Muy grande, muy doloroso o infectado',
            say: 'El drenaje quirúrgico queda para el hematoma muy grande o extremadamente doloroso, o cuando aparecen signos de infección secundaria: calor, rubor y fiebre.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Esguince',
      title: 'Qué es un esguince',
      cards: [
        { title: 'Definición', tag: 'Ligamento', kind: 'key', items: [
          { t: 'Lesión de los ligamentos', d: 'Unen hueso con hueso',
            say: 'El esguince es la lesión de los ligamentos, que son las estructuras que unen hueso con hueso.' },
          { t: 'Movimiento más allá del límite', d: 'Supera lo fisiológico de la articulación',
            say: 'Ocurre tras un movimiento que supera los límites fisiológicos de la articulación. El ejemplo típico es la torcedura del tobillo por inversión.' },
        ] },
        { title: 'Primero, descartar fractura', tag: 'Regla', kind: 'alert', items: [
          { t: 'Radiografía antes del diagnóstico', d: 'Como en la clase de tobillo',
            say: 'Y recuerda la regla de la clase anterior: el diagnóstico de esguince se hace cuando la radiografía descarta una fractura. Siempre se pide radiografía de tobillo antes de decir esguince.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Clasificación',
      title: 'Grados del esguince',
      head: ['Grado', 'Lesión del ligamento', 'Clínica'],
      rows: [
        { cells: ['I', 'Distensión leve', 'Dolor; sin equimosis ni inestabilidad'],
          say: 'El grado uno es una distensión leve del ligamento. Hay dolor, pero sin equimosis y sin inestabilidad.' },
        { cells: ['II', 'Rotura parcial', 'Equimosis; sin inestabilidad'],
          say: 'El grado dos es una rotura parcial. Aparece equimosis, pero la articulación sigue estable.' },
        { cells: ['III', 'Rotura total', 'Equimosis e inestabilidad articular'],
          say: 'El grado tres es la rotura total del ligamento. Hay equimosis y, lo que lo define, inestabilidad de la articulación. Esa es la clave del examen: equimosis más inestabilidad es grado tres.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Esguince',
      title: 'Tratamiento del esguince',
      cards: [
        { title: 'Manejo habitual', tag: 'Conservador', kind: 'pharma', items: [
          { t: 'Reposo, hielo, compresión, elevación', d: 'Más antiinflamatorios',
            say: 'El manejo se basa en reposo, hielo, compresión y elevación, junto con antiinflamatorios.' },
          { t: 'Inmovilización con órtesis removible', d: 'Incluso en el grado tres',
            say: 'Se agrega una órtesis removible para inmovilizar, y esto vale incluso para el grado tres, el de rotura total.' },
        ] },
        { title: 'Qué no hacer', tag: 'Trampas', kind: 'alert', items: [
          { t: 'Cirugía no es el tratamiento inicial', d: 'Solo si queda inestabilidad persistente',
            say: 'La cirugía no es el tratamiento inicial, ni siquiera en el grado tres. Se considera solo si la inestabilidad persiste en el tiempo.' },
          { t: 'Nunca sin descartar fractura', d: 'Radiografía de tobillo primero',
            say: 'Y no clasificas el esguince ni lo tratas hasta haber descartado la fractura con radiografía.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'gallery',
      kicker: 'Así se ve',
      title: 'Cajón anterior del tobillo',
      images: [
        { src: 'biblioteca/18_traumatologia/trauma-09/01_cajon-anterior-tobillo__bailey-love_p482.jpg', label: 'Prueba del cajón anterior del tobillo', credit: 'Bailey & Love 27.ª ed., Fig. 31.40' },
      ],
      steps: [
        { note: 'Se prueba la laxitud del ligamento',
          say: 'Esta es la prueba del cajón anterior del tobillo. Con el pie apoyado, el examinador sujeta la parte baja de la tibia con una mano y con la otra tira del talón hacia adelante. Si el pie se desliza más que el del lado sano, hay un ligamento roto: eso es inestabilidad, la clave del esguince grado tres.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Quiste de Baker',
      title: 'Quiste de Baker',
      cards: [
        { title: 'Qué es', tag: 'Fosa poplítea', kind: 'key', items: [
          { t: 'Bursa distendida de líquido sinovial', d: 'Asociada a la articulación de la rodilla',
            say: 'Es una distensión de una bursa asociada a la articulación de la rodilla, que se llena de líquido sinovial y forma una tumoración en la fosa poplítea.' },
          { t: 'Masa posterior, casi asintomática', d: 'Molesta solo si crece o se rompe',
            say: 'Se palpa y se ve un aumento de volumen en la parte posterior de la rodilla. Suele ser asintomático, a menos que crezca mucho o se rompa.' },
        ] },
        { title: 'Cuando se rompe', tag: 'Simulador de TVP', kind: 'alert', items: [
          { t: 'El líquido baja a la pantorrilla', d: 'Dolor agudo, edema y aumento de volumen',
            say: 'Cuando se rompe, el líquido se desplaza hacia la pantorrilla y causa dolor agudo, edema y aumento de volumen.' },
          { t: 'Antecedente de masa poplítea', d: 'Es la clave frente a la TVP',
            say: 'Eso lo hace un gran simulador de una trombosis venosa profunda. La clave diagnóstica es el antecedente de una masa previa en la zona poplítea, que ahora desapareció.' },
          { t: 'Observación y analgesia', d: 'Punción solo si es gigante; cirugía excepcional',
            say: 'El tratamiento es observación y analgesia. Solo se punciona si es gigante y molesta mucho, y la cirugía es excepcional.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diferencial',
      title: 'Pantorrilla dolorosa: Baker o TVP',
      nodes: [
        { id: 'pa', col: 0, row: 1, k: 'start', t: 'Dolor y edema de pantorrilla', s: 'Unilateral, de inicio reciente' },
        { id: 'ba', col: 1, row: 0, k: 'q', t: 'Bulto poplíteo previo que desapareció', s: 'Antecedente clave' },
        { id: 'ro', col: 2, row: 0, k: 'good', t: 'Quiste de Baker roto', s: 'Analgesia con AINE' },
        { id: 'tv', col: 1, row: 2, k: 'alert', t: 'Sin ese antecedente', s: 'Pensar en TVP' },
        { id: 'do', col: 2, row: 2, k: 'refer', t: 'Estudiar la trombosis', s: 'Ecodoppler venoso' },
      ],
      edges: [
        { from: 'pa', to: 'ba' },
        { from: 'ba', to: 'ro' },
        { from: 'pa', to: 'tv' },
        { from: 'tv', to: 'do' },
      ],
      steps: [
        { show: ['pa', 'ba', 'ro'], note: 'Mira el antecedente, no solo la pantorrilla',
          say: 'Un paciente con dolor y edema de pantorrilla. Si hace meses tenía un bulto indoloro en la parte posterior de la rodilla y ahora desapareció, es un quiste de Baker roto. Se trata con analgesia con antiinflamatorios, porque el cuadro es doloroso pero transitorio.' },
        { show: ['tv', 'do'], note: 'Sin el antecedente, no lo asumas',
          say: 'Si no hay ese antecedente, no asumas un Baker. Piensa en trombosis venosa profunda, sobre todo si hay trauma, fractura o inmovilidad, y la estudias con ecodoppler venoso. Anticoagular a ciegas un Baker roto sería un error, y no estudiar una trombosis también.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tendón de Aquiles',
      title: 'Rotura del tendón de Aquiles',
      cards: [
        { title: 'Quién y cómo', tag: 'Degenerativa', kind: 'key', items: [
          { t: 'Etiología degenerativa', d: 'Tendón debilitado con los años',
            say: 'Es una lesión grave, de origen generalmente degenerativo. El tendón viene debilitado y se rompe con un esfuerzo.' },
          { t: 'Adulto de mediana edad', d: 'Con actividad física esporádica',
            say: 'Afecta sobre todo a adultos de mediana edad que hacen actividad física de forma esporádica: el deportista de fin de semana, por ejemplo corriendo.' },
        ] },
        { title: 'Cuadro clínico', tag: 'Muy preguntado', kind: 'alert', items: [
          { t: 'Dolor súbito, como una pedrada', d: 'En el talón, al correr',
            say: 'El relato clásico es un dolor súbito e intenso en el talón, como una pedrada, mientras el paciente corre, y después no puede caminar.' },
          { t: 'Maniobra de Thompson alterada', d: 'Apretar la pantorrilla no mueve el pie',
            say: 'El examen que confirma es la maniobra de Thompson: se comprime la pantorrilla y el pie no hace la flexión plantar. Si la maniobra está alterada, el tendón está roto.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Aquiles',
      title: 'Del esfuerzo a la derivación',
      nodes: [
        { id: 'ef', col: 0, row: 1, k: 'cause', t: 'Esfuerzo en tendón degenerado', s: 'Correr, saltar' },
        { id: 'ro', col: 1, row: 1, k: 'mech', t: 'Rotura del tendón', s: 'Pedrada en el talón' },
        { id: 'th', col: 2, row: 0, k: 'q', t: 'Thompson alterado', s: 'Confirma el diagnóstico' },
        { id: 'dr', col: 3, row: 1, k: 'refer', t: 'Derivar al traumatólogo', s: 'Cirugía según el libro' },
        { id: 'no', col: 2, row: 2, k: 'trap', t: 'No es esguince', s: 'No es solo bota' },
      ],
      edges: [
        { from: 'ef', to: 'ro' },
        { from: 'ro', to: 'th' },
        { from: 'th', to: 'dr' },
        { from: 'ro', to: 'no' },
      ],
      steps: [
        { show: ['ef', 'ro'], note: 'Tendón débil más esfuerzo brusco',
          say: 'El mecanismo es un tendón degenerado sometido a un esfuerzo brusco, como correr o saltar. Se rompe, y el paciente siente la pedrada.' },
        { show: ['th', 'no'], note: 'Diagnóstico clínico con Thompson',
          say: 'El diagnóstico es clínico, con la maniobra de Thompson alterada. Y no lo confundas con un esguince de tobillo, que se produce por inversión y afecta los ligamentos laterales, ni con un desgarro de los gemelos.' },
        { show: ['dr'], note: 'Se deriva con urgencia',
          say: 'La conducta es derivar al traumatólogo, y el libro plantea tratamiento quirúrgico. Un yeso o una bota para un esguince no es la respuesta que el examen espera. Un dato aparte: en la práctica actual muchas roturas también se manejan sin cirugía, pero en el examen pesa el diagnóstico y la derivación.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Partes blandas: lo que se confunde',
      head: ['Cuadro', 'Clave', 'Conducta'],
      rows: [
        { cells: ['Contusión simple', 'Golpe directo, sin fractura', 'AINE, frío 48 horas y reposo'],
          say: 'Contusión simple: golpe directo sin signos de fractura. Antiinflamatorios, frío las primeras cuarenta y ocho horas y reposo. Radiografía solo si hubo alta energía.' },
        { cells: ['Hematoma', 'Fluctuante; ecografía', 'Drenar si es grande o se infecta'],
          say: 'Hematoma: colección fluctuante, que se apoya con ecografía. Conservador casi siempre, y drenaje si es muy grande, muy doloroso o infectado.' },
        { cells: ['Esguince grado III', 'Equimosis e inestabilidad', 'RICE y órtesis, no cirugía'],
          say: 'Esguince grado tres: equimosis más inestabilidad. Se maneja con reposo, hielo, compresión, elevación y órtesis, no con cirugía inicial.' },
        { cells: ['Baker roto', 'Bulto poplíteo previo que desapareció', 'Analgesia con AINE'],
          say: 'Quiste de Baker roto: el bulto poplíteo previo que desapareció. Analgesia, no anticoagulación ni cirugía de urgencia.' },
        { cells: ['Rotura del Aquiles', 'Pedrada y Thompson alterado', 'Derivar; no es esguince'],
          say: 'Rotura del Aquiles: pedrada en el talón al correr y Thompson alterado. Derivas al traumatólogo, y no es un esguince.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del paciente con dolor de partes blandas al diagnóstico y la conducta.',
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Un hombre de 35 años sufrió una patada en el muslo hace cuatro días jugando fútbol. Consulta por aumento de volumen fluctuante, muy doloroso, con la piel enrojecida y caliente, y fiebre de 38,5 °C. La radiografía de fémur no muestra fractura y la ecografía muestra una colección líquida organizada.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Frío local y antiinflamatorios, con control en una semana' },
        { letter: 'B', text: 'Drenaje quirúrgico del hematoma' },
        { letter: 'C', text: 'Calor local y reposo absoluto' },
        { letter: 'D', text: 'Inmovilización con yeso por tres semanas' },
        { letter: 'E', text: 'Solo analgesia y alta, porque es una contusión' },
      ],
      correct: 'B',
      explanation: 'Un hematoma se maneja de forma conservadora, pero está indicado el drenaje quirúrgico cuando es muy grande, muy doloroso o con signos de infección secundaria (calor, rubor, fiebre). Aquí hay una colección organizada con signos de infección.',
      say: {
        stem: 'Un hombre de treinta y cinco años recibe una patada en el muslo jugando fútbol. Cuatro días después tiene un aumento de volumen fluctuante y muy doloroso, con la piel roja y caliente, y fiebre de treinta y ocho coma cinco grados. La radiografía no muestra fractura y la ecografía muestra una colección líquida organizada.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: frío y antiinflamatorios con control; drenaje quirúrgico; calor y reposo absoluto; yeso por tres semanas; o solo analgesia y alta. Piénsalo.',
        answer: 'Es la B. La mayoría de los hematomas se manejan sin cirugía, pero el calor, el rubor y la fiebre son signos de infección secundaria, y una colección organizada y dolorosa se drena. Frío y antiinflamatorios es el manejo del hematoma simple, y no alcanza aquí.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un deportista de cuarenta años va corriendo y siente súbitamente como una pedrada intensa en el talón. No puede caminar. La maniobra de Thompson está alterada.',
      question: '¿Cuál es el diagnóstico y el tratamiento?',
      options: [
        { letter: 'A', text: 'Esguince de tobillo grado tres; inmovilización con bota removible' },
        { letter: 'B', text: 'Rotura del tendón de Aquiles; cirugía urgente' },
        { letter: 'C', text: 'Rotura del tendón de Aquiles; inmovilización con yeso' },
        { letter: 'D', text: 'Fractura de calcáneo; radiografía de pie' },
        { letter: 'E', text: 'Desgarro muscular de gemelos; RICE y AINEs' },
      ],
      correct: 'B',
      explanation: 'El dolor súbito en el talón, como una pedrada, al correr, más la maniobra de Thompson alterada, es el cuadro clásico de rotura del tendón de Aquiles. El libro indica cirugía. El esguince de tobillo afecta los ligamentos laterales y no altera la maniobra de Thompson.',
      say: {
        stem: 'Un deportista de cuarenta años va corriendo y siente de golpe una pedrada intensa en el talón. No puede caminar y la maniobra de Thompson está alterada.',
        question: '¿Cuál es el diagnóstico y el tratamiento?',
        options: 'Las opciones: esguince de tobillo grado tres con bota; rotura del Aquiles con cirugía urgente; rotura del Aquiles con yeso; fractura de calcáneo con radiografía; o desgarro de gemelos con reposo y antiinflamatorios. Piénsalo.',
        answer: 'Es la B. La pedrada en el talón al correr y el Thompson alterado son la rotura del tendón de Aquiles, y el libro la trata con cirugía. El esguince no altera el Thompson, la fractura de calcáneo viene de una caída de altura, y el desgarro de gemelos tampoco altera la maniobra.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un paciente tiene dolor y edema en la pantorrilla izquierda. Refiere que desde hace varios meses tenía un bulto indoloro en la zona posterior de la rodilla que ahora desapareció.',
      question: '¿Cuál es el diagnóstico y el tratamiento?',
      options: [
        { letter: 'A', text: 'TVP; ecodoppler y anticoagulación urgente' },
        { letter: 'B', text: 'Quiste de Baker roto; analgesia con AINEs' },
        { letter: 'C', text: 'Quiste de Baker roto; cirugía de extirpación urgente' },
        { letter: 'D', text: 'Hematoma de pantorrilla; frío local y AINEs' },
        { letter: 'E', text: 'Esguince de rodilla; inmovilizador y AINEs' },
      ],
      correct: 'B',
      explanation: 'El bulto previo indoloro en la fosa poplítea que desapareció, más el dolor y el edema de la pantorrilla, es un quiste de Baker roto. El tratamiento es analgesia con AINE, porque el cuadro es transitorio; la cirugía es excepcional.',
      say: {
        stem: 'Un paciente con dolor y edema de la pantorrilla izquierda. Cuenta que, desde hace meses, tenía un bulto indoloro en la parte de atrás de la rodilla, y que ahora desapareció.',
        question: '¿Cuál es el diagnóstico y el tratamiento?',
        options: 'Las opciones: trombosis con ecodoppler y anticoagulación urgente; Baker roto con analgesia; Baker roto con cirugía urgente; hematoma con frío; o esguince de rodilla con inmovilizador. Piénsalo.',
        answer: 'Es la B. El bulto poplíteo previo que desapareció es la clave de un quiste de Baker roto, y se trata con analgesia y antiinflamatorios. La A es la trampa: la trombosis también da dolor y edema de pantorrilla, pero requiere un contexto de trauma o inmovilidad, no ese bulto previo. La cirugía es excepcional.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un paciente sufre un esguince de tobillo por inversión y presenta equimosis lateral más inestabilidad articular al examen.',
      question: '¿Cuál es el grado y el tratamiento?',
      options: [
        { letter: 'A', text: 'Grado uno; solo analgesia sin inmovilización' },
        { letter: 'B', text: 'Grado dos; RICE más inmovilización con órtesis removible' },
        { letter: 'C', text: 'Grado tres; RICE más inmovilización con órtesis removible' },
        { letter: 'D', text: 'Grado tres; cirugía de reparación ligamentaria urgente' },
        { letter: 'E', text: 'Grado uno; RICE sin necesidad de radiografía' },
      ],
      correct: 'C',
      explanation: 'La equimosis más la inestabilidad articular corresponden a una rotura total del ligamento, grado tres. El tratamiento es RICE, antiinflamatorios e inmovilización con órtesis removible; la cirugía se considera solo si la inestabilidad persiste. Antes se pide radiografía de tobillo para descartar fractura.',
      say: {
        stem: 'Un paciente con un esguince de tobillo por inversión, con equimosis lateral e inestabilidad de la articulación al examen.',
        question: '¿Cuál es el grado y el tratamiento?',
        options: 'Las opciones: grado uno con solo analgesia; grado dos con reposo, hielo, compresión, elevación y órtesis; grado tres con lo mismo; grado tres con cirugía urgente; o grado uno con reposo y sin radiografía. Piénsalo.',
        answer: 'Es la C. Equimosis más inestabilidad es una rotura total, grado tres, y se maneja con reposo, hielo, compresión, elevación y órtesis removible. La D es la trampa: la cirugía no es el tratamiento inicial, se considera solo si la inestabilidad persiste. Y antes de todo, radiografía para descartar fractura.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: partes blandas',
      cards: [
        { title: 'Golpes y colecciones', tag: 'Conservador', kind: 'key', items: [
          { t: 'Contusión y hematoma: AINE, frío, reposo', d: 'Frío 48 horas, luego calor',
            say: 'Cerremos con las reglas de oro. La contusión y el hematoma se manejan con antiinflamatorios, frío las primeras cuarenta y ocho horas y luego calor, y reposo. El hematoma se drena si es muy grande o se infecta.' },
          { t: 'Esguince: radiografía y órtesis', d: 'Equimosis e inestabilidad: grado III',
            say: 'El esguince se diagnostica con la radiografía normal. Equimosis más inestabilidad es grado tres, y se maneja con reposo, hielo, compresión, elevación y órtesis, no con cirugía inicial.' },
        ] },
        { title: 'Dos que se confunden', tag: 'Alerta', kind: 'alert', items: [
          { t: 'Baker roto simula TVP', d: 'Bulto poplíteo previo; analgesia',
            say: 'El quiste de Baker roto simula una trombosis venosa profunda: la clave es el bulto poplíteo previo que desapareció, y se trata con analgesia.' },
          { t: 'Aquiles: pedrada y Thompson', d: 'Derivar al traumatólogo',
            say: 'La rotura del Aquiles es la pedrada en el talón al correr con Thompson alterado, y se deriva al traumatólogo. Si te llevas una sola idea de hoy: en las partes blandas, el antecedente que cuenta el paciente decide el diagnóstico. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Lesión de partes blandas de la extremidad inferior',
    root: N('start', 'Dolor tras un golpe o esfuerzo', 'Sin signos claros de fractura',
      'Un paciente con dolor tras un golpe o un esfuerzo. Lo primero es decidir si hay signos de fractura; si hay duda, radiografía.',
      ['Golpe directo con equimosis', N('do', 'Contusión', 'AINE, frío 48 horas, reposo',
        'Si hubo un golpe directo con equimosis y sin signos de fractura, es una contusión: antiinflamatorios, frío las primeras cuarenta y ocho horas y reposo.',
        ['Aumento de volumen fluctuante', N('alert', 'Hematoma', 'Ecografía; drenar si grande o infectado',
          'Si hay un aumento de volumen fluctuante, es un hematoma. Lo confirmas con ecografía y lo drenas si es muy grande, doloroso o se infecta.')],
      )],
      ['Torcedura de tobillo', N('do', 'Radiografía primero', 'Descartar fractura',
        'Si es una torcedura de tobillo, primero radiografía para descartar fractura.',
        ['Radiografía normal, con inestabilidad y equimosis', N('ok', 'Esguince grado III', 'RICE, AINE y órtesis',
          'Si la radiografía es normal y hay equimosis con inestabilidad, es un esguince grado tres: reposo, hielo, compresión, elevación y órtesis. La cirugía solo si persiste la inestabilidad.')],
      )],
      ['Dolor y edema de pantorrilla', N('q', 'Bulto poplíteo previo', 'Pregunta clave',
        'Si hay dolor y edema de la pantorrilla, preguntas por un bulto previo detrás de la rodilla.',
        ['Bulto que desapareció', N('ok', 'Quiste de Baker roto', 'Analgesia con AINE',
          'Si el bulto desapareció, es un quiste de Baker roto, y se trata con analgesia.')],
        ['Sin ese antecedente', N('refer', 'Descartar TVP', 'Ecodoppler venoso',
          'Sin ese antecedente, piensas en trombosis venosa profunda y la estudias con ecodoppler.')],
      )],
      ['Pedrada en el talón al correr', N('refer', 'Rotura del Aquiles', 'Thompson alterado; derivar',
        'Si hay una pedrada en el talón al correr y la maniobra de Thompson está alterada, es una rotura del tendón de Aquiles: derivas al traumatólogo, y el libro indica cirugía.')],
    ),
  },
};
