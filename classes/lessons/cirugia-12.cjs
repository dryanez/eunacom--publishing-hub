// Clase 11.12 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_cirugia.cjs / dataset_cirugia_bloque_3.cjs (cir-12, classId cirugia-12).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-12',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'El Glasgow abre la puerta, y la biopsia de imagen decide todo lo demás',
      say: 'Cerramos el bloque de trauma con el traumatismo encéfalo craneano, la primera causa de muerte traumática en gente joven. Vas a ver que el examen te pide dos cosas: primero, saber a quién le pides un TAC de cerebro después de un golpe en la cabeza que parece leve; y segundo, distinguir dos hematomas que se ven parecidos, pero se comportan muy distinto. Empecemos.',
    },

    {
      type: 'points',
      kicker: 'Clasificación',
      title: 'El Glasgow separa tres escenarios distintos',
      cards: [
        { title: 'Leve, moderado, grave', tag: 'Según el puntaje', kind: 'key', items: [
          { t: 'Leve: 13 a 15 puntos', d: 'Ochenta por ciento de las consultas',
            say: 'Todo empieza con el Glasgow, medido después de haber reanimado al paciente. Leve es de trece a quince puntos, y es, por lejos, la mayoría de las consultas.' },
          { t: 'Moderado: 9 a 12', d: 'Grave: 8 o menos',
            say: 'Moderado es de nueve a doce, y grave es ocho o menos: ahí el paciente ya no puede proteger su propia vía aérea, y ya sabes lo que corresponde de la clase de ATLS.' },
        ] },
        { title: 'Daño primario y secundario', tag: 'Solo uno se puede evitar', kind: 'criteria', items: [
          { t: 'Primario: en el impacto', d: 'Irreversible, no depende de ti',
            say: 'Y hay una idea que ordena todo el tratamiento: el daño primario ocurre en el mismo golpe, y es irreversible, no depende de lo que tú hagas después.' },
          { t: 'Secundario: minutos u horas después', d: 'Hipoxia, hipotensión, fiebre: todo esto se puede evitar',
            say: 'El daño secundario aparece después, por hipoxia, hipotensión o fiebre, y este sí lo puedes evitar. Todo lo que viene ahora es, justamente, para prevenir ese daño secundario.' },
        ] },
        { title: 'Por qué la presión sube tan rápido', tag: 'El cráneo no se estira', kind: 'normal', items: [
          { t: 'Un espacio fijo, sin dónde crecer', d: 'Cerebro, sangre y líquido cefalorraquídeo',
            say: 'Y entiende por qué un sangrado pequeño ya es grave adentro del cráneo: es una caja rígida, con un volumen fijo de cerebro, sangre y líquido cefalorraquídeo. Cuando aparece una masa nueva, como un hematoma, algo de lo demás tiene que salir para compensar.' },
          { t: 'Cuando se agota, la presión sube de golpe', d: 'Y cae la perfusión de todo el cerebro',
            say: 'Al principio el cuerpo compensa desplazando líquido y sangre venosa, pero ese margen se agota rápido, y entonces la presión intracraneana sube de golpe, la perfusión del cerebro cae, y empieza la isquemia global.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'TEC leve',
      title: '¿A quién le pides el TAC de cerebro?',
      nodes: [
        { id: 'lev', col: 0, row: 1, k: 'start', t: 'TEC leve, Glasgow 15', s: 'Aparentemente sin gravedad' },
        { id: 'frx', col: 1, row: 0, k: 'risk', t: 'Fractura de base de cráneo', s: 'Ojos de mapache, signo de Battle' },
        { id: 'eda', col: 1, row: 1, k: 'risk', t: 'Edad de 65 años o más', s: 'O anticoagulado' },
        { id: 'vom', col: 1, row: 2, k: 'risk', t: 'Vómitos repetidos', s: 'O mecanismo de alta energía' },
        { id: 'tac', col: 2, row: 1, k: 'alert', t: 'TAC de cerebro sin contraste', s: 'De urgencia' },
        { id: 'obs', col: 2, row: 2, k: 'good', t: 'Observar 4 a 6 horas', s: 'Sin ninguno de estos factores' },
      ],
      edges: [
        { from: 'lev', to: 'frx' }, { from: 'lev', to: 'eda' }, { from: 'lev', to: 'vom' },
        { from: 'frx', to: 'tac' }, { from: 'eda', to: 'tac' }, { from: 'vom', to: 'tac' },
        { from: 'lev', to: 'obs', label: 'sin factores' },
      ],
      steps: [
        { show: ['lev'], note: 'La mayoría de las consultas',
          say: 'Con un Glasgow de quince, el paciente parece estar bien. Pero acá está la pregunta que más se pregunta: ¿a quién le pides el TAC igual?' },
        { show: ['frx'], note: 'Los cuatro signos clásicos',
          say: 'Primero, si hay signos de fractura de la base del cráneo: ojos de mapache, que son los moretones alrededor de los ojos sin golpe directo ahí; el signo de Battle, detrás de la oreja; o salida de líquido claro por la nariz o el oído.' },
        { show: ['eda'], note: 'Dos factores que se preguntan mucho',
          say: 'Segundo, la edad: sesenta y cinco años o más. Y también si el paciente toma anticoagulantes, porque su riesgo de sangrar adentro es mucho más alto, aunque el golpe se vea leve.' },
        { show: ['vom'], note: 'El resto de las banderas rojas',
          say: 'Tercero, vómitos repetidos, dos o más veces. Y cuarto, un mecanismo de alta energía: eyección de un vehículo, o una caída de más de un metro.' },
        { show: ['tac'], note: 'Basta uno solo de estos factores',
          say: 'Con cualquiera de estos factores, basta uno solo, pides el TAC de cerebro sin contraste de urgencia.' },
        { show: ['obs'], note: 'Sin ninguno de estos factores',
          say: 'Y si el paciente no tiene ninguno de estos factores, y está completamente asintomático, lo observas en urgencias entre cuatro y seis horas, y lo das de alta con un cuidador responsable y las pautas de alarma.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Los dos hematomas',
      title: 'Epidural con intervalo lúcido, subdural que se demora',
      nodes: [
        { id: 'gol', col: 0, row: 1, k: 'cause', t: 'Golpe en la sien', s: 'Fractura de la escama temporal' },
        { id: 'art', col: 1, row: 0, k: 'mech', t: 'Rotura de la arteria meníngea media', s: 'Sangrado arterial, rápido' },
        { id: 'epi', col: 2, row: 0, k: 'risk', t: 'Hematoma epidural', s: 'Lente biconvexa, no cruza suturas' },
        { id: 'luc', col: 3, row: 0, k: 'alert', t: 'Intervalo lúcido', s: 'Y después, deterioro brusco' },
        { id: 'ven', col: 1, row: 2, k: 'cause', t: 'Rotura de venas puente', s: 'Ancianos con atrofia cerebral' },
        { id: 'sub', col: 2, row: 2, k: 'risk', t: 'Hematoma subdural', s: 'Semiluna, sí cruza suturas' },
        { id: 'ins', col: 3, row: 2, k: 'trap', t: 'Deterioro lento', s: 'Días, no horas' },
      ],
      edges: [
        { from: 'gol', to: 'art' }, { from: 'art', to: 'epi' }, { from: 'epi', to: 'luc' },
        { from: 'ven', to: 'sub' }, { from: 'sub', to: 'ins' },
      ],
      steps: [
        { show: ['gol'], note: 'La fractura rompe la arteria por dentro',
          say: 'Vamos a los dos hematomas que más se confunden. El primero empieza con un golpe en la sien, que fractura la escama del hueso temporal.' },
        { show: ['art'], note: 'Sangre a presión arterial',
          say: 'Y esa fractura rompe la arteria meníngea media, que corre justo por ahí debajo. Es un sangrado arterial, a alta presión, y por eso se acumula rápido.' },
        { show: ['epi'], note: 'La imagen que no cruza las suturas',
          say: 'Se junta entre el hueso y la duramadre: eso es el hematoma epidural. En el TAC se ve como una lente biconvexa, bien definida, y algo clave: no cruza las líneas de sutura del cráneo, porque ahí la duramadre está pegada al hueso.' },
        { show: ['luc'], note: 'El patrón que se pregunta siempre',
          say: 'Y la clínica es la que más se pregunta de todo el tema: el paciente pierde el conocimiento un momento, se recupera y queda perfectamente lúcido durante horas, y de golpe se derrumba, con una pupila dilatada que ya no reacciona a la luz. Ese intervalo lúcido es la firma del hematoma epidural.' },
        { show: ['ven'], note: 'Un sangrado venoso, más lento',
          say: 'El segundo hematoma es distinto desde el mecanismo: se rompen las venas puente, que conectan la superficie del cerebro con los senos venosos. Es típico en personas mayores, porque la atrofia cerebral les da más espacio para que esas venas se estiren y se rompan con la desaceleración.' },
        { show: ['sub'], note: 'La imagen que sí cruza las suturas',
          say: 'Al ser un sangrado venoso, se acumula más lento, y se distribuye libremente por toda la convexidad del cerebro. En el TAC se ve como una semiluna cóncava que sí cruza las suturas, porque ahí no hay nada que la detenga.' },
        { show: ['ins'], note: 'El anciano que empeora días después',
          say: 'Y por eso la clínica es tan distinta: en vez de un colapso brusco en pocas horas, ves un deterioro progresivo a lo largo de días, en un paciente que muchas veces ni siquiera recuerda haberse golpeado. Y otro detalle que se pregunta: el subdural agudo se opera si es grueso, de más de diez milímetros, o si desplaza mucho la línea media; si es delgado y el paciente está bien, a veces se vigila sin cirugía.' },
      ],
    },

    {
      type: 'points',
      kicker: 'TEC grave',
      title: 'Lo que nunca le puedes hacer a este cerebro',
      cards: [
        { title: 'Metas que no se negocian', tag: 'Evitar el daño secundario', kind: 'alert', items: [
          { t: 'Nunca hipotenso', d: 'Un solo episodio duplica la mortalidad',
            say: 'Con Glasgow ocho o menos, intubas de inmediato y buscas metas estrictas. La presión arterial nunca puede bajar: un solo episodio de hipotensión duplica la mortalidad de este paciente, aunque dure solo unos minutos.' },
          { t: 'Cabecera a 30 grados', d: 'Cuello alineado, para que drene bien la sangre venosa',
            say: 'Elevas la cabecera a treinta grados, con el cuello bien alineado, para que la sangre venosa del cerebro drene sin obstáculos.' },
          { t: 'Normocapnia, nunca hiperventilar', d: 'Hiperventilar de más produce isquemia',
            say: 'Y mantienes la ventilación en normocapnia. Hiperventilar de más para bajar la presión intracraneana suena lógico, pero contrae tanto los vasos que termina produciendo isquemia cerebral. Está formalmente prohibido usarlo de rutina.' },
          { t: 'Normotermia estricta', d: 'La fiebre dispara el consumo del cerebro',
            say: 'Y también controlas la temperatura, con normotermia estricta. La fiebre dispara el consumo de oxígeno del cerebro, justo cuando menos te lo puedes permitir.' },
        ] },
        { title: 'Si hay herniación', tag: 'Suero hipertónico o manitol', kind: 'pharma', items: [
          { t: 'Midriasis unilateral que no reacciona', d: 'Signo de herniación, actúa ya',
            say: 'Si aparece una pupila dilatada que ya no reacciona, eso es una herniación en curso, y ahí actúas de inmediato con osmoterapia.' },
          { t: 'Con hipotensión: suero hipertónico', d: 'El manitol empeora la presión baja',
            say: 'Si el paciente además está con la presión baja, usas suero salino hipertónico al tres por ciento, que expande el volumen y baja el edema al mismo tiempo. El manitol, en cambio, hace orinar tanto que puede empeorar esa hipotensión, así que ahí se evita.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en el árbol de decisión del TEC.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Epidural, subdural, y los errores del TEC leve',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Glasgow 15, mayor de 65 años o anticoagulado', 'TAC de cerebro de urgencia', 'Dar de alta por estar bien al examen'],
          say: 'Repasemos las trampas. Glasgow quince, pero mayor de sesenta y cinco años o anticoagulado: TAC de urgencia igual. Darlo de alta solo porque se ve bien es el error más caro de este tema.' },
        { cells: ['Intervalo lúcido y luego coma con midriasis', 'Craneotomía urgente por hematoma epidural', 'Atribuirlo a una embriaguez o sedación'],
          say: 'Intervalo lúcido y después coma con una pupila dilatada: hematoma epidural, craneotomía urgente. Atribuir ese deterioro a la embriaguez o a un sedante es la trampa clásica.' },
        { cells: ['Anciano con deterioro progresivo en días', 'Sospechar hematoma subdural', 'Buscar solo una causa metabólica o infecciosa'],
          say: 'Anciano que empeora en varios días, a veces sin recordar el golpe: sospecha hematoma subdural. Buscar solo una causa metabólica o infecciosa hace perder tiempo valioso.' },
        { cells: ['TEC grave con presión baja', 'Suero hipertónico si hay herniación', 'Manitol con el paciente hipotenso'],
          say: 'Y en el TEC grave con la presión baja, si hay herniación usas suero hipertónico. Dar manitol en ese momento empeora la hipotensión que ya tenías.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 19 años recibe un golpe con un palo en la región temporal izquierda durante un asalto. Pierde el conocimiento por un minuto, se recupera por completo, y queda conversando normalmente en la ambulancia. Una hora y media después, en urgencias, empieza con cefalea intensa, vomita, y en minutos queda en coma, con la pupila izquierda dilatada y sin reflejo a la luz.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Hemorragia subaracnoidea aneurismática' },
        { letter: 'B', text: 'Hematoma epidural agudo' },
        { letter: 'C', text: 'Hematoma subdural crónico' },
        { letter: 'D', text: 'Contusión cerebral bifrontal' },
        { letter: 'E', text: 'Trombosis del seno venoso' },
      ],
      correct: 'B',
      explanation: 'El golpe temporal, la pérdida de conciencia inicial, el intervalo lúcido de más de una hora y el colapso súbito con midriasis ipsilateral son el cuadro clásico del hematoma epidural agudo, por rotura de la arteria meníngea media.',
      say: {
        stem: 'Vamos con un caso. Hombre de diecinueve años, golpeado con un palo en la sien izquierda durante un asalto. Pierde el conocimiento por un minuto, se recupera por completo, y va conversando normal en la ambulancia. Una hora y media después, en urgencias, le da una cefalea intensa, vomita, y en minutos queda en coma, con la pupila izquierda dilatada y sin reacción a la luz.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Tienes cinco opciones: hemorragia subaracnoidea, hematoma epidural agudo, hematoma subdural crónico, contusión cerebral, o trombosis del seno venoso. Piénsalo.',
        answer: 'Es la B. Este caso tiene los tres tiempos exactos del hematoma epidural: pérdida de conciencia breve, un intervalo lúcido de más de una hora en el que parece estar perfecto, y después el colapso brusco con la pupila dilatada del mismo lado del golpe. El golpe en la sien es la pista que confirma la fractura temporal y la arteria meníngea media rota debajo, y esa combinación no aparece en ninguna de las otras opciones.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 97',
      stem: 'Adolescente de 17 años sufre un accidente de tránsito en bicicleta, con golpe en la cabeza. Inicialmente está sin signos neurológicos focales, con Glasgow 15. Una radiografía de cráneo muestra una fractura de la escama del temporal. A las 2 horas evoluciona con cefalea intensa y vómitos, seguido de compromiso de conciencia. Se aprecia midriasis derecha, arreactiva.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Hematoma subdural derecho' },
        { letter: 'B', text: 'Hematoma epidural derecho' },
        { letter: 'C', text: 'Hemorragia subaracnoidea' },
        { letter: 'D', text: 'Contusión encefálica frontal' },
        { letter: 'E', text: 'Contusión encefálica temporal' },
      ],
      correct: 'B',
      explanation: 'Fractura de la escama temporal, intervalo lúcido de dos horas y deterioro brusco con midriasis unilateral son el cuadro clásico del hematoma epidural, por rotura de la arteria meníngea media bajo la fractura.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil diecisiete. Adolescente de diecisiete años, tras un golpe en la cabeza andando en bicicleta. Al principio está sin ningún signo neurológico, con Glasgow quince. La radiografía muestra una fractura de la escama temporal. A las dos horas, le da cefalea intensa y vómitos, y luego compromiso de conciencia, con la pupila derecha dilatada y sin reacción.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: hematoma subdural derecho, hematoma epidural derecho, hemorragia subaracnoidea, contusión frontal, o contusión temporal. Piénsalo.',
        answer: 'Es la B, hematoma epidural derecho. Es exactamente el mismo patrón que ya viste: fractura temporal, un intervalo lúcido de un par de horas en que parece estar bien, y después el deterioro brusco con la pupila dilatada del mismo lado. Ese es el sello del epidural, y por eso no dudas entre las otras opciones.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 142',
      stem: 'Paciente de 72 años sufre una caída en bicicleta, golpeando la cabeza contra el suelo. Es evaluado en el servicio de urgencia, donde se encuentra en buenas condiciones, sin alteraciones del nivel de conciencia ni del examen neurológico, y es dado de alta con indicación de reposo y control. Tres días después inicia cefalea progresiva, y al día siguiente se agregan vómitos y dificultad para mover las extremidades derechas. Al examen está vigil, orientado en el espacio pero desorientado en el tiempo, con hemiparesia derecha.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Hematoma epidural' },
        { letter: 'B', text: 'Hemorragia subaracnoidea' },
        { letter: 'C', text: 'Hematoma intraparenquimatoso' },
        { letter: 'D', text: 'Trombosis del seno cavernoso' },
        { letter: 'E', text: 'Hematoma subdural' },
      ],
      correct: 'E',
      explanation: 'La edad avanzada, la atrofia cerebral y un mecanismo de sangrado venoso lento explican que los síntomas del hematoma subdural aparezcan varios días después de un golpe que inicialmente pareció leve, algo que no ocurre con el epidural.',
      say: {
        stem: 'Y una última pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Paciente de setenta y dos años, tras una caída en bicicleta. Al principio está en buenas condiciones, sin ningún signo neurológico, y es dado de alta con indicación de reposo. Tres días después le da una cefalea progresiva, y al día siguiente se agregan vómitos y dificultad para mover el lado derecho.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: hematoma epidural, hemorragia subaracnoidea, hematoma intraparenquimatoso, trombosis del seno cavernoso, o hematoma subdural. Piénsalo.',
        answer: 'Es la E. Fíjate en el contraste con los dos casos anteriores: aquí no hay ningún intervalo lúcido de horas, sino un deterioro que se arma en varios días, después de un golpe que al principio ni parecía grave. Ese ritmo lento, sumado a la edad avanzada, es la firma del hematoma subdural: un sangrado venoso que se acumula despacio, típico del adulto mayor con el cerebro más atrofiado.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'A quién le pides el TAC', tag: 'Aunque el Glasgow sea 15', kind: 'key', items: [
          { t: 'Fractura de base, 65 años, anticoagulado', d: 'O vómitos repetidos y mecanismo de alta energía',
            say: 'Cerremos con las reglas de oro. Con fractura de base de cráneo, sesenta y cinco años o más, anticoagulado, vómitos repetidos o mecanismo de alta energía, pides el TAC igual, aunque el Glasgow sea quince.' },
        ] },
        { title: 'Los dos hematomas', tag: 'Distinto ritmo, distinta imagen', kind: 'alert', items: [
          { t: 'Epidural: intervalo lúcido', d: 'Lente biconvexa que no cruza suturas',
            say: 'El epidural avisa con un intervalo lúcido y colapsa en pocas horas; en el TAC se ve como una lente que no cruza las suturas.' },
          { t: 'Subdural: días de evolución', d: 'Semiluna que sí cruza las suturas',
            say: 'El subdural se demora varios días, típico del anciano; en el TAC es una semiluna que sí cruza las suturas. Si te llevas una sola idea de hoy: el ritmo del deterioro es el que te dice cuál de los dos hematomas tienes enfrente. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'TEC: del Glasgow al hematoma que corresponde',
    root: N('start', 'Paciente con traumatismo encéfalo craneano', 'Primero, calcula el Glasgow',
      'Llega un paciente tras un golpe en la cabeza. Lo primero es calcular el Glasgow, ya reanimado, porque de ahí sale todo el resto del razonamiento.',
      ['Glasgow 8 o menos', N('alert', 'TEC grave', 'Intubación y TAC de cerebro inmediato',
        'Con Glasgow de ocho o menos, intubas de inmediato y pides el TAC sin ninguna demora, manteniendo la presión arterial y evitando la hiperventilación.')],
      ['Glasgow 15, ¿tiene factores de riesgo?', N('q', '¿Fractura de base, 65 años, anticoagulado o vómitos?', 'Las banderas rojas del TEC leve',
        'Con Glasgow quince, la decisión depende de si aparece alguna de las banderas rojas del TEC leve.',
        ['Sí, algún factor presente', N('do', 'TAC de cerebro sin contraste', 'De urgencia, aunque se vea bien',
          'Con cualquiera de estos factores, pides el TAC de urgencia, aunque el paciente parezca estar perfectamente bien.')],
        ['No, ningún factor', N('ok', 'Observación de 4 a 6 horas', 'Alta con cuidador y pautas de alarma',
          'Sin ningún factor de riesgo, observas unas horas y das de alta con indicaciones claras de cuándo volver.')])],
      ['¿Intervalo lúcido y luego coma brusco?', N('alert', 'Hematoma epidural', 'Craneotomía urgente',
        'Con un intervalo lúcido de horas seguido de un colapso brusco y una pupila dilatada, sospechas un hematoma epidural y vas a craneotomía urgente para evacuarlo.')],
      ['¿Anciano con deterioro progresivo en días?', N('refer', 'Hematoma subdural', 'TAC de cerebro y evaluación por neurocirugía',
        'Con un deterioro lento a lo largo de días en un adulto mayor, sospechas un hematoma subdural, que se opera si es grueso o desplaza mucho la línea media.')]),
  },
};
