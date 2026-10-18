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
          { t: 'La presión sube de golpe', d: 'Y cae la perfusión de todo el cerebro',
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
          say: 'Primero, si hay signos de fractura de la base del cráneo: ojos de mapache, que son los moretones alrededor de los ojos sin golpe directo ahí; el signo de Battle, detrás de la oreja; o salida de líquido claro por la nariz o el oído. Mira estos ojos de mapache, y este moretón detrás de la oreja, que es el signo de Battle.',
          photos: [
            { src: 'biblioteca/10_cirugia/cirugia-12/01_ojos_de_mapache__commons.jpg', label: 'Ojos de mapache', at: 'Mira estos ojos de mapache', credit: 'Wikimedia Commons «Bilateral periorbital ecchymosis (raccoon eyes).jpg», Public domain, Marion County Sheriff\'s Office' },
            { src: 'biblioteca/10_cirugia/cirugia-12/03_signo_de_battle__nelson_p5133.jpg', label: 'Signo de Battle', at: 'este moretón detrás de la oreja', credit: 'Nelson 22.ª ed., Fig. 683.3A' },
          ] },
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
      type: 'points',
      kicker: 'TEC leve',
      title: 'Alta con pautas de alarma, u hospitalizar',
      cards: [
        { title: 'Observación', tag: 'Después del TAC si estaba indicado', kind: 'key', items: [
          { t: 'Observar 4 a 6 horas', d: 'Controles neurológicos seriados',
            say: 'Ya sabes a quién le pides el TAC. Ahora, qué haces después con el TEC leve. El paciente se observa en urgencia al menos cuatro a seis horas, con controles neurológicos seriados.' },
        ] },
        { title: 'Puede irse a la casa', tag: 'Si cumple todo', kind: 'normal', items: [
          { t: 'Glasgow 15, TAC normal o no indicado', d: 'Sin déficit, vómitos ni intoxicación; tolera vía oral',
            say: 'Puede ser dado de alta si tiene Glasgow quince, TAC normal o no indicado, ningún déficit, vómitos ni intoxicación, y tolera la vía oral. Además tiene que haber un acompañante responsable.' },
          { t: 'Pautas de alarma por escrito', d: 'Durante 24 a 48 horas',
            say: 'Ese acompañante recibe pautas de alarma por escrito para las siguientes veinticuatro a cuarenta y ocho horas: somnolencia o dificultad para despertar, vómitos repetidos, cefalea intensa o progresiva, convulsión, confusión, debilidad, o alteraciones visuales o del habla, y salida de sangre o líquido por el oído o la nariz.' },
          { t: 'Paracetamol y reposo relativo', d: 'Retorno gradual a la actividad',
            say: 'Se indica paracetamol, reposo relativo y retorno gradual a la actividad.' },
        ] },
        { title: 'Hospitalizar', tag: 'Cualquiera de estos', kind: 'alert', items: [
          { t: 'TAC anormal o Glasgow menor de 15', d: 'Que persiste',
            say: 'Y se hospitalizan los casos con TAC anormal o un Glasgow menor de quince que persiste.' },
          { t: 'Anticoagulado, fractura o convulsión', d: 'Intoxicación o sin acompañante',
            say: 'También al anticoagulado, con sospecha de fractura, convulsión, intoxicación, o si no tiene un acompañante responsable.' },
        ] },
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
          say: 'Se junta entre el hueso y la duramadre: eso es el hematoma epidural. En el TAC se ve como una lente biconvexa, bien definida, y algo clave: no cruza las líneas de sutura del cráneo, porque ahí la duramadre está pegada al hueso. Mira este TAC, donde se comparan los dos hematomas: la lente del epidural frente a la media luna del subdural.',
          photo: { src: 'biblioteca/10_cirugia/cirugia-12/01_hematoma-epidural-vs-subdural-tc__cto-neuro_p142.jpg', label: 'Epidural vs subdural', at: 'Mira este TAC', credit: 'Manual CTO Neurología 14.ª ed., p. 142' } },
        { show: ['luc'], note: 'El patrón que se pregunta siempre',
          say: 'Y la clínica es la que más se pregunta de todo el tema: el paciente pierde el conocimiento un momento, se recupera y queda perfectamente lúcido durante horas, y de golpe se derrumba, con una pupila dilatada que ya no reacciona a la luz. Ese intervalo lúcido es la firma del hematoma epidural.' },
        { show: ['ven'], note: 'Un sangrado venoso, más lento',
          say: 'El segundo hematoma es distinto desde el mecanismo: se rompen las venas puente, que conectan la superficie del cerebro con los senos venosos. Es típico en personas mayores, porque la atrofia cerebral les da más espacio para que esas venas se estiren y se rompan con la desaceleración.' },
        { show: ['sub'], note: 'La imagen que sí cruza las suturas',
          say: 'Al ser un sangrado venoso, se acumula más lento, y se distribuye libremente por toda la convexidad del cerebro. En el TAC se ve como una semiluna cóncava que sí cruza las suturas, porque ahí no hay nada que la detenga.' },
        { show: ['ins'], note: 'El anciano que empeora días después',
          say: 'Y por eso la clínica es tan distinta: en vez de un colapso brusco en pocas horas, ves un deterioro progresivo a lo largo de días, en un paciente que muchas veces ni siquiera recuerda haberse golpeado.' },
        { show: ['ins'], note: 'Cuándo se opera el subdural',
          say: 'Y otro detalle que se pregunta:: el subdural agudo se opera si es grueso, de más de diez milímetros, o si desplaza mucho la línea media; si es delgado y el paciente está bien, a veces se vigila sin cirugía. Mira este TAC de un adulto mayor: la media luna cubre todo un hemisferio.',
          photo: { src: 'biblioteca/10_cirugia/cirugia-12/01_hematoma-epidural-vs-subdural-tc_alt2__cto-neuro_p174.jpg', label: 'Subdural crónico', at: 'Mira este TAC de un adulto mayor', credit: 'Manual CTO Neurología 14.ª ed., p. 174' } },
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
      type: 'points',
      kicker: 'Hipertensión endocraneana',
      title: 'Cómo se reconoce y qué se hace',
      cards: [
        { title: 'Clínica', tag: 'Cefalea que empeora acostado', kind: 'key', items: [
          { t: 'Cefalea matinal, con tos o en decúbito', d: 'Vómitos en proyectil sin náuseas',
            say: 'Ya viste por qué la presión sube tan rápido en el cráneo. Ahora, cómo se reconoce: cefalea progresiva, de predominio matinal, que empeora con la tos, con la maniobra de Valsalva y acostado, y vómitos en proyectil, sin náuseas previas.' },
          { t: 'Edema de papila, diplopía', d: 'Parálisis del VI par y somnolencia',
            say: 'Al examen aparece edema de papila, diplopía por parálisis del sexto par, y somnolencia. En el lactante se ve la fontanela abombada y el signo del sol naciente.' },
        ] },
        { title: 'Signos tardíos', tag: 'Enclavamiento', kind: 'alert', items: [
          { t: 'Tríada de Cushing', d: 'Hipertensión con presión de pulso amplia, bradicardia, respiración irregular',
            say: 'Los signos tardíos son la tríada de Cushing: hipertensión con presión de pulso amplia, bradicardia y respiración irregular. Y la midriasis unilateral que no reacciona, que es la herniación uncal.' },
        ] },
        { title: 'Conducta', tag: 'Neurocirugía urgente', kind: 'pharma', items: [
          { t: 'TAC; punción lumbar contraindicada', d: 'Hematomas, tumores, hidrocefalia, abscesos, meningitis',
            say: 'Las causas incluyen hematomas, tumores, hidrocefalia, edema cerebral, abscesos y meningitis. Se estudia con TAC, y la punción lumbar está contraindicada si sospechas hipertensión endocraneana.' },
          { t: 'Cabecera a 30°, cuello neutro', d: 'Normoxia, normotensión y normotermia',
            say: 'Mientras derivas con urgencia a neurocirugía, mantienes la cabecera a treinta grados, el cuello neutro, y normoxia, normotensión y normotermia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Compromiso de conciencia',
      title: 'Primero ABC y glicemia, después la causa',
      cards: [
        { title: 'Lo inmediato', tag: 'Causas reversibles', kind: 'alert', items: [
          { t: 'ABC y glicemia capilar a todos', d: 'La hipoglicemia es una causa reversible',
            say: 'Un paciente con compromiso de conciencia se aborda con ABC, y con glicemia capilar en todos, sin excepción, porque la hipoglicemia es una causa reversible.' },
          { t: 'Oxígeno, tiamina, naloxona', d: 'Tiamina antes de la glucosa en el alcohólico',
            say: 'Das oxígeno, tiamina antes de la glucosa si es alcohólico, y naloxona si hay pupilas puntiformes con bradipnea.' },
        ] },
        { title: 'Estructural o metabólica', tag: 'Las pupilas orientan', kind: 'criteria', items: [
          { t: 'Estructural: focalidad o pupilas asimétricas', d: 'Hematoma, ACV, tumor',
            say: 'Mides el Glasgow y examinas pupilas, signos focales, rigidez de nuca, fiebre y trauma. Una lesión estructural, como un hematoma, un accidente cerebrovascular o un tumor, da focalidad o asimetría pupilar.' },
          { t: 'Metabólica o tóxica: simétrica', d: 'Pupilas reactivas',
            say: 'Las causas metabólicas y tóxicas, como hipoglicemia, uremia, encefalopatía hepática, sobredosis o sepsis, suelen dar compromiso simétrico con pupilas reactivas.' },
        ] },
        { title: 'Estudio', tag: 'Y tratamiento', kind: 'key', items: [
          { t: 'Laboratorio y TAC de cerebro', d: 'Trauma, focalidad o causa no aclarada',
            say: 'Pides gasometría, electrolitos, función renal y hepática y toxicología, y TAC de cerebro si hay trauma, focalidad o la causa no se aclara. La punción lumbar va después del TAC, si hay fiebre o rigidez de nuca.' },
          { t: 'Tratamiento etiológico', d: 'Derivar a unidad de paciente crítico',
            say: 'El tratamiento es el de la causa, y el paciente se deriva a una unidad de paciente crítico.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Epidural o subdural',
      images: [
        { src: 'animaciones/cirugia-12/A1_hematomas_real.mp4', label: 'Epidural y subdural', credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Lente en horas, media luna en días',
          say: 'El hematoma epidural viene de la arteria meníngea media y queda entre el hueso y la duramadre: crece rápido, tiene forma de lente porque no cruza las suturas, y el paciente puede tener un intervalo lúcido antes de deteriorarse. El subdural viene de las venas puente y queda bajo la duramadre: se extiende en media luna siguiendo el cerebro, crece lento y la conciencia empeora en días. Es típico del adulto mayor o el alcohólico.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Otorragia y radiografía de cráneo',
      title: 'Sangre por el oído tras un golpe, y qué muestra la radiografía',
      cards: [
        { title: 'Otorragia', tag: 'Fractura de base hasta demostrar lo contrario', kind: 'alert', items: [
          { t: 'Tras un golpe: fractura de peñasco', d: 'Hemotímpano, hipoacusia, signo de Battle',
            say: 'Después de un traumatismo craneano, la sangre por el oído es una fractura de base de cráneo, del peñasco, hasta demostrar lo contrario, a menudo con hemotímpano, hipoacusia y signo de Battle. Otras causas son los hisopos, la perforación timpánica, la otitis externa necrotizante, la miringitis bulosa y los tumores.' },
          { t: 'Fractura transversa: parálisis facial', d: 'Inmediata, con hipoacusia neurosensorial',
            say: 'La fractura transversa del peñasco da parálisis facial inmediata e hipoacusia neurosensorial.' },
          { t: 'No irrigar ni taponar', d: 'Gasa estéril, TAC de cráneo y hueso temporal',
            say: 'La conducta es no irrigar ni taponar el conducto, cubrir con gasa estéril, cabecera a treinta grados y buscar salida de líquido cefalorraquídeo con el signo del doble anillo. Pides TAC de cráneo y de hueso temporal, y derivas a otorrino o neurocirugía. Y no se pasa sonda por la nariz.' },
        ] },
        { title: 'Radiografía de cráneo', tag: 'Hoy manda el TAC', kind: 'criteria', items: [
          { t: 'Muestra fracturas y cuerpos extraños', d: 'Lineal, con hundimiento, neumoencéfalo',
            say: 'La radiografía de cráneo hoy tiene un rol limitado, porque el estudio de elección es el TAC. Muestra fracturas lineales, que son una línea nítida que no sigue una sutura ni los surcos vasculares, y fracturas con hundimiento, de bordes superpuestos. También cuerpos extraños, y un nivel hidroaéreo en el seno esfenoidal o neumoencéfalo, que apuntan a fractura de base. Mira este corte de TAC: el hueso se hunde, es un hundimiento.',
            photo: { src: 'biblioteca/10_cirugia/cirugia-12/05_fractura-deprimida-tac__knoop_p6.jpg', label: 'Fractura con hundimiento', at: 'Mira este corte de TAC', credit: 'The Atlas of Emergency Medicine (Knoop), p. 6' } },
          { t: 'Normal no descarta lesión', d: 'Una fractura lineal obliga a TAC',
            say: 'Una radiografía normal no descarta una lesión intracraneal, y una fractura lineal aumenta mucho la probabilidad de un hematoma, así que obliga a TAC. En el niño con sospecha de maltrato se completa con serie esquelética.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Procedimiento',
      title: 'Sonda nasogástrica: cómo se pone y cómo se confirma',
      cards: [
        { title: 'Indicación y técnica', tag: 'Nivel realizar', kind: 'criteria', items: [
          { t: 'Descomprimir, alimentar, dar fármacos', d: 'Obstrucción, íleo, hemorragia digestiva alta',
            say: 'Un procedimiento que debes saber hacer es la sonda nasogástrica. Sirve para descomprimir el estómago, en obstrucción, íleo o hemorragia digestiva alta, y para alimentar o dar fármacos.' },
          { t: 'Medir nariz, lóbulo, xifoides', d: 'Lubricar, cuello flexionado, pedir que degluta',
            say: 'Mides la distancia desde la nariz al lóbulo de la oreja y de ahí al apéndice xifoides, lubricas, la introduces por una fosa nasal con el cuello levemente flexionado, y le pides al paciente que degluta.' },
        ] },
        { title: 'Confirmar y cuidarse', tag: 'Antes de alimentar', kind: 'alert', items: [
          { t: 'Aspirar, auscultar y radiografía', d: 'Radiografía antes de alimentar',
            say: 'Confirmas aspirando contenido gástrico e insuflando aire mientras auscultas el epigastrio, y con una radiografía antes de alimentar. Si hay tos, cianosis o resistencia, la retiras, porque puede estar en la vía aérea.' },
          { t: 'Fractura de base: vía orogástrica', d: 'Complicaciones: epistaxis, sinusitis, erosión',
            say: 'En una fractura de base de cráneo o un trauma facial grave, se coloca por vía orogástrica. Las complicaciones son epistaxis, mala posición, sinusitis y erosión.' },
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
        { cells: ['Otorragia tras un golpe en la cabeza', 'Fractura de peñasco: no taponar, TAC y derivar', 'Irrigar o taponar el conducto'],
          say: 'Sangre por el oído después de un golpe en la cabeza es una fractura de base hasta demostrar lo contrario. No se irriga ni se tapona el conducto: gasa estéril, TAC y derivación.' },
        { cells: ['Cefalea matinal, vómitos en proyectil, edema de papila', 'TAC y neurocirugía urgente', 'Hacer una punción lumbar'],
          say: 'Y con sospecha de hipertensión endocraneana, la punción lumbar está contraindicada: primero TAC y derivación urgente a neurocirugía.' },
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
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.10.2.019 · Traumatismo encéfalo craneano leve",
      "stem": "Mujer de 30 años se golpea la cabeza contra un mueble. No perdió el conocimiento, no ha vomitado, no tiene cefalea intensa ni amnesia. No usa anticoagulantes. Glasgow 15, examen neurológico normal, sin signos de fractura de base de cráneo. Vive acompañada.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Solicitar TAC de cerebro sin contraste"
        },
        {
          "letter": "B",
          "text": "Solicitar radiografía de cráneo"
        },
        {
          "letter": "C",
          "text": "Alta con indicaciones de signos de alarma y vigilancia por un adulto responsable"
        },
        {
          "letter": "D",
          "text": "Hospitalizar en observación por 24 horas"
        },
        {
          "letter": "E",
          "text": "Solicitar resonancia magnética de cerebro"
        }
      ],
      "correct": "C",
      "explanation": "TEC leve de bajo riesgo: Glasgow 15, sin pérdida de conciencia, vómitos, amnesia, anticoagulación, edad avanzada ni focalidad. No requiere imágenes: se da de alta con signos de alarma, como cefalea progresiva, vómitos, somnolencia o focalidad, y vigilancia por un adulto. La radiografía de cráneo no tiene rol.",
      "say": {
        "stem": "Mujer de treinta años que se golpea la cabeza contra un mueble. No perdió el conocimiento, no vomitó, no tiene amnesia ni cefalea intensa, y no usa anticoagulantes. Tiene Glasgow quince y examen neurológico normal, y vive acompañada.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: TAC de cerebro, radiografía de cráneo, alta con signos de alarma y vigilancia, hospitalizar veinticuatro horas, o resonancia. Piénsalo.",
        "answer": "Es la C. Es un traumatismo leve sin ningún factor de riesgo, así que no necesita imágenes: alta con signos de alarma y un adulto que la vigile. La TAC tienta por precaución, pero sin factores de riesgo solo agrega radiación y costo sin cambiar la conducta."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.10.4.001 · TAC de encefalo y columna",
      "stem": "Hombre de 76 años, usuario de acenocumarol por fibrilación auricular, se cae en su casa y se golpea la cabeza. Está con Glasgow 15, sin focalidad neurológica, con un hematoma en la región frontal.",
      "question": "¿Cuál es el examen más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Radiografía de cráneo"
        },
        {
          "letter": "B",
          "text": "TAC de cerebro con contraste"
        },
        {
          "letter": "C",
          "text": "TAC de cerebro sin contraste"
        },
        {
          "letter": "D",
          "text": "Resonancia magnética de cerebro"
        },
        {
          "letter": "E",
          "text": "No requiere imágenes por tener Glasgow 15"
        }
      ],
      "correct": "C",
      "explanation": "Edad mayor de 65 años y anticoagulación son factores de alto riesgo de hemorragia intracraneana aun con Glasgow 15. El examen de elección en trauma es la TAC de cerebro sin contraste: rápida, disponible y muestra la sangre aguda como hiperdensa. El contraste podría confundirse con sangre.",
      "say": {
        "stem": "Hombre de setenta y seis años, anticoagulado con acenocumarol por fibrilación auricular, que se cae y se golpea la cabeza. Tiene Glasgow quince, sin focalidad, con un hematoma frontal.",
        "question": "¿Cuál es el examen más adecuado?",
        "options": "Las opciones: radiografía de cráneo, TAC con contraste, TAC de cerebro sin contraste, resonancia o ningún examen por tener Glasgow quince. Piénsalo.",
        "answer": "Es la C. La edad y el anticoagulante lo convierten en alto riesgo, aunque se vea perfecto, y la TAC sin contraste muestra la sangre aguda brillante. La opción E tienta por el Glasgow quince, pero los anticoagulados pueden sangrar en forma tardía y silenciosa."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.10.2.009 · Hipertensión endocraneana",
      "stem": "Hombre de 45 años con TEC grave y contusiones cerebrales, intubado. Evoluciona con presión arterial 190/100, frecuencia cardíaca 48, respiración irregular y midriasis derecha arreactiva. Se coordina con neurocirugía.",
      "question": "¿Cuál es la medida inicial más adecuada mientras tanto?",
      "options": [
        {
          "letter": "A",
          "text": "Administrar labetalol para normalizar la presión arterial"
        },
        {
          "letter": "B",
          "text": "Administrar atropina por la bradicardia"
        },
        {
          "letter": "C",
          "text": "Hiperventilar en forma prolongada hasta PaCO2 de 25"
        },
        {
          "letter": "D",
          "text": "Realizar punción lumbar para medir la presión"
        },
        {
          "letter": "E",
          "text": "Elevar la cabecera a 30 grados, asegurar oxigenación y normoventilación, y administrar manitol o suero hipertónico"
        }
      ],
      "correct": "E",
      "explanation": "Hipertensión, bradicardia y respiración irregular son la tríada de Cushing, signo de hipertensión endocraneana con herniación inminente. Se trata con cabecera a 30 grados, oxigenación y normoventilación, y osmoterapia con manitol o suero hipertónico. La hipertensión es compensatoria y no se debe bajar; la punción lumbar está contraindicada.",
      "say": {
        "stem": "Hombre de cuarenta y cinco años con traumatismo encéfalo craneano grave, intubado. Evoluciona con presión de ciento noventa sobre cien, frecuencia cardíaca de cuarenta y ocho, respiración irregular y la pupila derecha dilatada sin reacción. Ya se avisó a neurocirugía.",
        "question": "¿Cuál es la medida inicial más adecuada mientras tanto?",
        "options": "Las opciones: labetalol para bajar la presión, atropina por la bradicardia, hiperventilación prolongada, punción lumbar o cabecera elevada con normoventilación y manitol o suero hipertónico. Piénsalo.",
        "answer": "Es la E. Esa es la tríada de Cushing: el cerebro se está herniando, y lo que baja la presión intracraneana es la cabecera elevada, la buena ventilación y la osmoterapia. Bajar la presión arterial tienta, pero esa hipertensión es la que mantiene la perfusión cerebral; bajarla empeora la isquemia."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.4.003 · Radiografía de cráneo",
      "stem": "Hombre de 40 años sufre un golpe en la cabeza en una caída de escalera. Ingresa con Glasgow 13, cefalea intensa y 2 vómitos. No tiene déficit focal.",
      "question": "¿Cuál es el examen de imagen de elección?",
      "options": [
        {
          "letter": "A",
          "text": "Radiografía de cráneo AP y lateral"
        },
        {
          "letter": "B",
          "text": "Resonancia magnética de cerebro con gadolinio"
        },
        {
          "letter": "C",
          "text": "TAC de cerebro sin contraste"
        },
        {
          "letter": "D",
          "text": "Ecografía transfontanelar"
        },
        {
          "letter": "E",
          "text": "Observación sin imágenes"
        }
      ],
      "correct": "C",
      "explanation": "En el traumatismo encéfalo-craneano con Glasgow menor de 15, vómitos repetidos o cefalea intensa, el examen de elección es la TAC de cerebro sin contraste, que detecta hematomas, contusiones y fracturas. La radiografía de cráneo tiene un rol muy limitado: una fractura no descarta ni confirma lesión intracraneana. La resonancia es más lenta y menos práctica en urgencia.",
      "say": {
        "stem": "Hombre de cuarenta años que se golpea la cabeza al caer de una escalera. Llega con Glasgow trece, cefalea intensa y dos vómitos, sin déficit focal.",
        "question": "¿Cuál es el examen de imagen de elección?",
        "options": "Las opciones: radiografía de cráneo, resonancia con gadolinio, TAC de cerebro sin contraste, ecografía transfontanelar o observar sin imágenes. Piénsalo.",
        "answer": "Es la C. Un traumatismo con Glasgow trece y vómitos se estudia con TAC sin contraste, que muestra sangre y fracturas en minutos. La radiografía de cráneo tienta por ser barata, pero no ve el cerebro, y una radiografía normal no descarta un hematoma."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.5.019 · Intubación nasogástrica",
      "stem": "Hombre de 35 años ingresa tras un accidente de tránsito con traumatismo encéfalo-craneano. Presenta equimosis periorbitaria bilateral (ojos de mapache), equimosis retroauricular y salida de líquido claro por la nariz. Se requiere descomprimir el estómago.",
      "question": "¿Cuál es la forma más adecuada de hacerlo?",
      "options": [
        {
          "letter": "A",
          "text": "Sonda nasogástrica"
        },
        {
          "letter": "B",
          "text": "Sonda nasoyeyunal"
        },
        {
          "letter": "C",
          "text": "Sonda orogástrica"
        },
        {
          "letter": "D",
          "text": "Gastrostomía percutánea de urgencia"
        },
        {
          "letter": "E",
          "text": "No descomprimir el estómago"
        }
      ],
      "correct": "C",
      "explanation": "Los signos de fractura de base de cráneo (ojos de mapache, signo de Battle, rinorrea u otorraquia de líquido cefalorraquídeo) contraindican la instalación de sondas por vía nasal, por riesgo de que la sonda ingrese a la cavidad craneana a través de la lámina cribosa. En estos casos la descompresión gástrica se realiza por vía orogástrica.",
      "say": {
        "stem": "Hombre de treinta y cinco años con un traumatismo encéfalo-craneano tras un choque. Tiene ojos de mapache, equimosis detrás de la oreja y salida de líquido claro por la nariz, y se necesita descomprimir el estómago.",
        "question": "¿Cuál es la forma más adecuada de hacerlo?",
        "options": "Las opciones: sonda nasogástrica, sonda nasoyeyunal, sonda orogástrica, gastrostomía de urgencia o no descomprimir. Piénsalo.",
        "answer": "Es la C. Ojos de mapache, signo de Battle y rinorrea son fractura de base de cráneo, y ahí ninguna sonda debe ir por la nariz, porque puede entrar al cráneo; se usa la orogástrica. La nasogástrica tienta por ser la habitual, pero en este paciente está contraindicada."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.2.026 · Traumatismo encéfalo- craneano",
      "stem": "Un niño de 7 años cae de su bicicleta sin casco y se golpea la cabeza. Tuvo pérdida de conciencia de 1 minuto y ha vomitado 3 veces. En urgencia tiene Glasgow 14 persistente, con cefalea, sin focalidad neurológica.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Radiografía de cráneo"
        },
        {
          "letter": "B",
          "text": "TAC de cerebro sin contraste"
        },
        {
          "letter": "C",
          "text": "Alta con indicaciones de alarma"
        },
        {
          "letter": "D",
          "text": "Observación domiciliaria por 24 horas"
        },
        {
          "letter": "E",
          "text": "Resonancia magnética de cerebro electiva"
        }
      ],
      "correct": "B",
      "explanation": "Un TEC con Glasgow menor a 15, pérdida de conciencia y vómitos repetidos es de alto riesgo de lesión intracraneana según los criterios PECARN, y requiere TAC de cerebro sin contraste. La radiografía de cráneo no descarta lesiones intracraneanas. El alta con indicaciones corresponde solo a TEC leve sin factores de riesgo.",
      "say": {
        "stem": "Un niño de siete años cayó de la bicicleta sin casco, perdió la conciencia un minuto, vomitó tres veces y tiene Glasgow catorce.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: radiografía de cráneo, TAC de cerebro sin contraste, alta con indicaciones, observación en casa o resonancia electiva. Piénsalo.",
        "answer": "Es la B. Glasgow menor a quince, pérdida de conciencia y vómitos repetidos son criterios de TAC de cerebro sin contraste. La radiografía de cráneo tienta, pero no muestra las lesiones intracraneanas, que son lo que importa."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.4.005 · Radiografía de cráneo",
      "stem": "Un niño de 3 años se cae de una silla de 50 cm de altura y se golpea la frente. No perdió la conciencia, no ha vomitado, está activo, juega con normalidad, tiene Glasgow 15 y solo un pequeño hematoma frontal.",
      "question": "¿Cuál es la conducta más adecuada respecto de la radiografía de cráneo?",
      "options": [
        {
          "letter": "A",
          "text": "Solicitar radiografía de cráneo para descartar fractura"
        },
        {
          "letter": "B",
          "text": "Solicitar radiografía y TAC de cerebro"
        },
        {
          "letter": "C",
          "text": "Solicitar radiografía de cráneo y, si es normal, dar el alta"
        },
        {
          "letter": "D",
          "text": "Solicitar radiografía de cráneo y columna cervical"
        },
        {
          "letter": "E",
          "text": "No solicitar radiografía: observar y dar indicaciones de alarma"
        }
      ],
      "correct": "E",
      "explanation": "La radiografía de cráneo no se recomienda en el TEC pediátrico: una radiografía normal no descarta lesión intracraneana y una fractura no siempre la implica. En un TEC leve de bajo riesgo (mecanismo menor, Glasgow 15, sin pérdida de conciencia, vómitos ni hematoma no frontal), se observa y se educa sobre signos de alarma.",
      "say": {
        "stem": "Un niño de tres años se cayó de una silla y se golpeó la frente, sin pérdida de conciencia ni vómitos, con Glasgow quince y un hematoma frontal pequeño.",
        "question": "¿Qué hace con la radiografía de cráneo?",
        "options": "Las opciones: pedirla para descartar fractura, radiografía y TAC, pedirla y dar el alta si es normal, cráneo y columna o no pedirla y observar con indicaciones. Piénsalo.",
        "answer": "Es la E. Es un TEC leve de bajo riesgo y no se pide radiografía: se observa con indicaciones de alarma. Pedirla y dar el alta si es normal tienta, pero una radiografía normal no descarta una lesión intracraneana."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.10.1.002 · Compromiso de conciencia",
      "stem": "Hombre de 35 años tras un accidente de tránsito: abre los ojos solo ante estímulo doloroso, emite sonidos incomprensibles y retira la extremidad ante el dolor.",
      "question": "¿Cuál es su puntaje en la escala de Glasgow y la conducta respecto de la vía aérea?",
      "options": [
        {
          "letter": "A",
          "text": "Glasgow 6; solo ventilación con mascarilla"
        },
        {
          "letter": "B",
          "text": "Glasgow 10; observar"
        },
        {
          "letter": "C",
          "text": "Glasgow 8; requiere intubación para proteger la vía aérea"
        },
        {
          "letter": "D",
          "text": "Glasgow 12; oxígeno por naricera"
        },
        {
          "letter": "E",
          "text": "Glasgow 9; cánula orofaríngea y alta"
        }
      ],
      "correct": "C",
      "explanation": "Apertura ocular al dolor suma 2, sonidos incomprensibles 2 y retiro ante el dolor 4: Glasgow 8. Un Glasgow de 8 o menos define un compromiso de conciencia grave y es indicación de intubación para proteger la vía aérea, con protección de la columna cervical. Luego se realiza TAC de cerebro.",
      "say": {
        "stem": "Hombre de treinta y cinco años tras un accidente: abre los ojos al dolor, emite sonidos incomprensibles y retira ante el dolor.",
        "question": "¿Cuál es su Glasgow y qué haces con la vía aérea?",
        "options": "Las opciones: seis con solo mascarilla, diez y observar, ocho e intubar, doce con naricera o nueve con cánula y alta. Piénsalo.",
        "answer": "Es la C. Glasgow ocho: dos ocular, dos verbal y cuatro motor, y con ocho o menos se intuba. El error típico es puntuar el retiro como flexión anormal, que vale tres."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.03.2.015 · Otorragia",
      "stem": "Hombre de 30 años sufre un TEC por caída de altura. Glasgow 14. Presenta otorragia derecha, equimosis retroauricular derecha (signo de Battle) e hipoacusia derecha. La otoscopía muestra sangre en el conducto auditivo externo.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Lavado de oído para visualizar el tímpano"
        },
        {
          "letter": "B",
          "text": "Taponamiento compacto del conducto auditivo"
        },
        {
          "letter": "C",
          "text": "Gotas óticas de ciprofloxacino y alta"
        },
        {
          "letter": "D",
          "text": "No manipular ni lavar el oído; TAC de cerebro y de hueso temporal por sospecha de fractura de base de cráneo y evaluación de parálisis facial"
        },
        {
          "letter": "E",
          "text": "Aspirar el conducto en el servicio de urgencia"
        }
      ],
      "correct": "D",
      "explanation": "La otorragia postraumática con signo de Battle sugiere fractura del hueso temporal (base de cráneo media), que puede asociarse a fístula de LCR, lesión del oído medio o interno y parálisis facial. No se debe lavar ni taponar el oído (riesgo de meningitis). Se estudia con TAC de cerebro y de peñasco, se evalúa el nervio facial y la audición.",
      "say": {
        "stem": "Hombre de treinta años con TEC por caída de altura, sangre por el oído derecho, equimosis detrás de la oreja e hipoacusia del mismo lado.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: lavar el oído, taponarlo, gotas óticas y alta, no manipularlo y pedir TAC de cerebro y peñasco evaluando el nervio facial o aspirar el conducto. Piénsalo.",
        "answer": "Es la D. Se sospecha fractura de base de cráneo: no se manipula el oído y se pide TAC de cerebro y hueso temporal. Lavar el oído tienta para ver el tímpano, pero arriesga una meningitis si hay fístula de líquido cefalorraquídeo."
      }
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
        { title: 'Otras urgencias del capítulo', tag: 'Conciencia, presión intracraneana, oído', kind: 'criteria', items: [
          { t: 'Compromiso de conciencia: glicemia capilar', d: 'Tiamina antes de glucosa en el alcohólico',
            say: 'Ante cualquier compromiso de conciencia, ABC y glicemia capilar en todos, y tiamina antes de la glucosa si es alcohólico.' },
          { t: 'Hipertensión endocraneana: sin punción lumbar', d: 'Otorragia tras trauma: no taponar',
            say: 'Con hipertensión endocraneana, TAC y nunca punción lumbar. Y la otorragia tras un golpe es fractura de base: no se tapona ni se pasa sonda por la nariz.' },
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
      ['Glasgow 15, ¿tiene factores de riesgo?', N('q', '¿Alguna bandera roja presente?', 'Las banderas rojas del TEC leve',
        'Con Glasgow quince, la decisión depende de si aparece alguna de las banderas rojas del TEC leve.',
        ['Sí, algún factor presente', N('do', 'TAC de cerebro sin contraste', 'De urgencia, aunque se vea bien',
          'Con cualquiera de estos factores, pides el TAC de urgencia, aunque el paciente parezca estar perfectamente bien.')],
        ['No, ningún factor', N('ok', 'Observación de 4 a 6 horas', 'Alta con cuidador y pautas de alarma',
          'Sin ningún factor de riesgo, observas unas horas y das de alta con indicaciones claras de cuándo volver.')])],
      ['¿Compromiso de conciencia sin causa clara?', N('do', 'ABC y glicemia capilar a todos', 'Luego Glasgow, pupilas, laboratorio y TAC',
        'Si hay compromiso de conciencia sin una causa evidente, parte por el ABC y la glicemia capilar, da tiamina antes de la glucosa en el alcohólico, y pide el TAC si hay trauma, focalidad o la causa no se aclara.')],
      ['¿Intervalo lúcido y luego coma brusco?', N('alert', 'Hematoma epidural', 'Craneotomía urgente',
        'Con un intervalo lúcido de horas seguido de un colapso brusco y una pupila dilatada, sospechas un hematoma epidural y vas a craneotomía urgente para evacuarlo.')],
      ['¿Anciano con deterioro progresivo en días?', N('refer', 'Hematoma subdural', 'TAC de cerebro y evaluación por neurocirugía',
        'Con un deterioro lento a lo largo de días en un adulto mayor, sospechas un hematoma subdural, que se opera si es grueso o desplaza mucho la línea media.')]),
  },
};
