// Clase 1.19 — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_reumatologia_bloque_4.cjs (reuma-19).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: "reuma-19",
  tier: 2,
  slides: [
    {
      type: "cover",
      subtitle: "Tríada clásica de Reiter, infección por Chlamydia, lesiones mucocutáneas y líquido sinovial estéril",
      say: "Bienvenidos a la clase diecinueve. Hoy abordamos la Artritis Reactiva, históricamente denominada Síndrome de Reiter. Analizaremos su origen inmunológico desencadenado semanas después de una infección urogenital o gastrointestinal, la tríada clínica de uretritis, conjuntivitis y oligoartritis asimétrica de extremidades inferiores, las lesiones cutáneas patognomónicas como la balanitis circinada y la queratodermia blenorrágica, y el tratamiento con antiinflamatorios y antibióticos dirigidos a la pareja. Comencemos.",
    },

    {
      type: "flow",
      kicker: "Inmunopatogenia postinfecciosa",
      title: "De la infección mucosa al mimetismo molecular sinovial",
      nodes: [
        { id: "inf", col: 0, row: 1, k: "start", t: "Infección urogenital o digestiva", s: "Chlamydia trachomatis o enteropatógenos entéricos" },
        { id: "lat", col: 1, row: 0, k: "mech", t: "Período de latencia inmune", s: "Una a cuatro semanas tras el cuadro primario" },
        { id: "art", col: 2, row: 0, k: "alert", t: "Artritis aséptica estéril", s: "Sinovitis inmunológica sin bacterias viables" },
        { id: "hla", col: 1, row: 2, k: "good", t: "Asociación con HLA-B27", s: "Presente en hasta el ochenta por ciento de casos" },
      ],
      edges: [
        { from: "inf", to: "lat" },
        { from: "lat", to: "art" },
        { from: "inf", to: "hla" },
      ],
      steps: [
        { show: ["inf", "lat"], note: "Infección desencadenante previa",
          say: "La artritis reactiva se gatilla tras una infección primaria mucosa, ya sea urogenital por Chlamydia trachomatis tras un contacto sexual no protegido, o entérica por bacterias como Salmonella, Shigella, Yersinia o Campylobacter tras una gastroenteritis aguda." },
        { show: ["art", "hla"], note: "Artritis aséptica mediada por inmunidad",
          say: "Tras un período de latencia de una a cuatro semanas, los pacientes con predisposición genética por antígeno HLA-B veintisiete desarrollan una sinovitis estéril por mimetismo molecular. El líquido articular está inflamado pero no contiene bacterias vivas en los cultivos." },
      ],
    },

    {
      type: "points",
      kicker: "Semiología cardinal",
      title: "La Tríada Clásica de Reiter y el compromiso articular",
      cards: [
        { title: "La tríada clínica clásica de Reiter", tag: "Uretritis, conjuntivitis y artritis", kind: "criteria", items: [
          { t: "Uretritis no gonocócica o cervicitis", d: "Disuria y secreción seromucosa escasa matinal",
            say: "El primer componente es la inflamación genitourinaria, manifestada como uretritis con disuria leve y secreción serosa o mucinosa matinal en el varón, o cervicitis habitualmente asintomática en mujeres." },
          { t: "Conjuntivitis estéril y artritis periférica", d: "Ojo rojo bilateral y afección de grandes articulaciones",
            say: "A la uretritis se suma una conjuntivitis bilateral estéril de resolución espontánea y una oligoartritis periférica asimétrica con gran derrame en rodillas o tobillos, configurando la clásica tríada semiológica del síndrome de Reiter." },
        ] },
        { title: "Patrón articular característico", tag: "Oligoartritis asimétrica de piernas", kind: "alert", items: [
          { t: "Predilección por extremidades inferiores", d: "Rodillas, tobillos y dactilitis en dedos del pie",
            say: "La artritis compromete típicamente articulaciones de carga de los miembros inferiores de forma asimétrica. Es muy frecuente encontrar además dactilitis o dedo en salchicha en los dedos de los pies y dolor en el tendón de Aquiles." },
          { t: "Líquido sinovial inflamatorio pero aséptico", d: "Gram y cultivos bacterianos negativos",
            say: "Al puncionar la articulación, el líquido sinovial es turbio con recuentos de veinte a cincuenta mil leucocitos por milímetro cúbico, pero la tinción de Gram y los cultivos microbiológicos son estrictamente negativos." },
        ] },
      ],
    },

    {
      type: "points",
      kicker: "Lesiones mucocutáneas patognomónicas",
      title: "Balanitis circinada y Queratodermia blenorrágica",
      cards: [
        { title: "Balanitis circinada en genitales", tag: "Erosiones no dolorosas en el glande", kind: "key", items: [
          { t: "Erosiones superficiales serpiginosas", d: "Placas eritematosas con borde sobreelevado en prepucio",
            say: "La balanitis circinada consiste en pequeñas vesículas o erosiones eritematosas superficiales no dolorosas que confluyen formando placas serpiginosas en el glande y surco balanoprepucial, siendo un signo altamente orientador." },
          { t: "Indolora y autolimitada", d: "Diferente de las úlceras dolorosas de herpes",
            say: "A diferencia de las lesiones dolorosas causadas por el virus herpes simple, la balanitis circinada es indolora para el enfermo y suele pasar inadvertida a menos que el médico examine prolijamente la zona genital." },
        ] },
        { title: "Queratodermia blenorrágica palmoplantar", tag: "Placas hiperqueratósicas costrosas", kind: "alert", items: [
          { t: "Lesiones pustulo-costrosas en palmas y plantas", d: "Pápulas amarillentas que semejan psoriasis pustulosa",
            say: "La queratodermia blenorrágica se caracteriza por pápulas o placas hiperqueratósicas amarillentas con centro costroso localizadas en las palmas de las manos y plantas de los pies, histológicamente idénticas a la psoriasis." },
          { t: "Aftas orales asintomáticas", d: "Úlceras superficiales en mucosa oral y lengua",
            say: "Muchos pacientes presentan además pequeñas erosiones o aftas superficiales no dolorosas en la mucosa del paladar duro y lengua, que curan espontáneamente sin dejar cicatrización residual." },
        ] },
      ],
    },

    {
      type: "flow",
      kicker: "Diagnóstico diferencial de monoartritis",
      title: "Artritis Reactiva versus Artritis Séptica Gonocócica",
      nodes: [
        { id: "mon", col: 0, row: 1, k: "start", t: "Joven sexualmente activo con derrame", s: "Monoartritis o oligoartritis aguda de rodilla" },
        { id: "artro", col: 1, row: 1, k: "mech", t: "Artrocentesis obligatoria inmediata", s: "Citoquímico, Gram y cultivo de líquido sinovial" },
        { id: "sep", col: 2, row: 0, k: "alert", t: "Artritis Séptica (Gonococo o Staph)", s: "Cultivo positivo o PCR positiva; requiere antibiótico EV" },
        { id: "rea", col: 2, row: 2, k: "good", t: "Artritis Reactiva (Aséptica)", s: "Líquido estéril; cuadro postinfeccioso autoinmune" },
      ],
      edges: [
        { from: "mon", to: "artro" },
        { from: "artro", to: "sep", label: "si cultivo (+)" },
        { from: "artro", to: "rea", label: "si cultivo (-)" },
      ],
      steps: [
        { show: ["mon", "artro"], note: "La artrocentesis es obligatoria",
          say: "Ante todo adulto joven con derrame articular agudo de rodilla y antecedente de contacto sexual de riesgo, es mandatorio realizar una artrocentesis evacuadora inmediata para descartar en primer lugar una artritis séptica bacteriana." },
        { show: ["sep", "rea"], note: "Diferenciación microbiológica",
          say: "Si el Gram o los cultivos sinoviales aíslan gonococo u otro germen, se confirma artritis infecciosa. Si el líquido es turbio e inflamatorio pero rigurosamente estéril con lesiones mucocutáneas típicas, el diagnóstico es artritis reactiva." },
      ],
    },

    {
      type: "points",
      kicker: "Estrategia terapéutica integral",
      title: "Manejo articular con AINEs y tratamiento antibiótico",
      cards: [
        { title: "Tratamiento de la artritis: AINEs de primera línea", tag: "Antiinflamatorios a dosis plenas", kind: "pharma", items: [
          { t: "Indometacina o Naproxeno continuo", d: "Respuesta rápida del dolor y del derrame articular",
            say: "El tratamiento sintomático de primera línea para la inflamación articular son los AINEs a dosis plenas continuas, como indometacina o naproxeno. La mayoría de los pacientes experimenta alivio progresivo en las primeras semanas." },
          { t: "Corticoides intraarticulares o Sulfasalazina", d: "En monoartritis refractaria o curso crónico",
            say: "En casos de monoartritis persistente que no responde a AINEs, la infiltración articular con corticoides de depósito es muy efectiva. Si el cuadro se cronifica más allá de tres meses, se inicia sulfasalazina oral." },
        ] },
        { title: "Tratamiento antibiótico de la infección activa", tag: "Manejo estricto de la pareja sexual", kind: "alert", items: [
          { t: "Doxiciclina o Azitromicina para Chlamydia", d: "Erradicación del reservorio genitourinario primario",
            say: "Si se confirma infección activa por Chlamydia trachomatis en uretra o cérvix, se prescribe doxiciclina por siete a catorce días o azitromicina oral en dosis única para erradicar el microorganismo primario." },
          { t: "Tratamiento obligatorio a la pareja sexual", d: "Evitar reinfección y romper la cadena epidemiológica",
            say: "Es estrictamente obligatorio tratar a la pareja sexual del paciente de forma simultánea, incluso si se encuentra totalmente asintomática, para cortar la cadena de transmisión venérea." },
        ] },
      ],
    },

    {
      type: "points",
      kicker: "Diagnóstico diferencial infeccioso",
      title: "Infección Gonocócica Diseminada (IGD) vs Artritis Reactiva",
      cards: [
        { title: "Síndrome artritis-dermatitis por gonococo", tag: "Tenosinovitis y pústulas necróticas", kind: "alert", items: [
          { t: "Tenosinovitis asimétrica y pústulas acrales", d: "Lesiones cutáneas pustulosas con centro necrótico",
            say: "La infección gonocócica diseminada cursa clásicamente con la tríada de tenosinovitis migratoria de muñecas y tobillos, poliartralgias y escasas pústulas hemorrágicas con centro necrótico en el dorso de manos y pies." },
          { t: "Microbiología y cultivos en Thayer-Martin", d: "Aislamiento de Neisseria gonorrhoeae en mucosas",
            say: "A diferencia de la artritis reactiva donde el proceso es postinfeccioso y estéril, en la infección gonocócica diseminada hay diseminación hematógena activa de bacterias viables, aislables en hemocultivos o frotis de exudado genital." },
        ] },
        { title: "Respuesta al tratamiento antimicrobiano", tag: "Ceftriaxona versus AINEs", kind: "pharma", items: [
          { t: "Ceftriaxona endovenosa inmediata", d: "Respuesta espectacular del gonococo en cuarenta y ocho horas",
            say: "La infección gonocócica diseminada mejora de forma espectacular en veinticuatro a cuarenta y ocho horas tras iniciar ceftriaxona endovenosa, mientras que la artritis reactiva no remite con antibióticos y exige antiinflamatorios continuos." },
          { t: "Cronicidad y pronóstico a largo plazo", d: "La artritis reactiva puede prolongarse por meses",
            say: "La artritis reactiva puede durar de tres a seis meses de forma autolimitada, requiriendo sulfasalazina o infiltraciones locales si persiste actividad inflamatoria crónica a pesar de los AINEs." },
        ] },
      ],
    },

    {
      type: "table",
      kicker: "Trampas EUNACOM",
      title: "Espectro Clínico del Síndrome de Reiter / Artritis Reactiva",
      head: ["Sistema Orgánico", "Manifestación Típica", "Signo Semiológico Clave"],
      rows: [
        { cells: ["Articular", "Oligoartritis asimétrica de piernas", "Derrame en rodillas, tobillos y dactilitis en pie"],
          say: "Articular: oligoartritis asimétrica en miembros inferiores con dactilitis en pies y entesitis aquiliana." },
        { cells: ["Genitourinario", "Uretritis no gonocócica / cervicitis", "Disuria leve y secreción seromucosa matinal escasa"],
          say: "Genitourinario: uretritis no gonocócica con disuria y secreción serosa matinal tras contacto sexual." },
        { cells: ["Ocular", "Conjuntivitis no infecciosa transitoria", "Ojo rojo bilateral estéril de corta duración"],
          say: "Ocular: conjuntivitis estéril leve o uveítis anterior aguda unilateral dolorosa con fotofobia." },
        { cells: ["Cutáneo y Mucoso", "Balanitis circinada y queratodermia", "Erosiones en glande y placas queratósicas en plantas"],
          say: "Cutáneo y mucoso: balanitis circinada indolora en glande y queratodermia descamativa en plantas de pies." },
      ],
    },

    {
      type: "quiz",
      kicker: "Caso clínico",
      title: "Caso clínico tipo EUNACOM",
      stem: "Hombre de 23 años consulta por dolor e inflamación en rodilla izquierda y tobillo derecho de 10 días de evolución, con gran dificultad para apoyar el pie. Refiere que hace 3 semanas presentó ardor al orinar con escasa secreción uretral blanquecina matinal tras un contacto sexual de riesgo sin protección, a lo que siguió ojo rojo bilateral leve que resolvió espontáneamente. Al examen físico destaca rodilla izquierda con derrame articular a tensión y dactilitis en el segundo dedo del pie derecho. En el glande se aprecian erosiones circulares confluentes no dolorosas (balanitis circinada). La artrocentesis de rodilla da salida a líquido turbio con 32.000 leucocitos/mm³ con Gram negativo y cultivos bacterianos negativos.",
      question: "¿Cuál es el diagnóstico clínico más probable y cuál es la conducta terapéutica indicada?",
      options: [
        { letter: "A", text: "Artritis Reactiva (Síndrome de Reiter); iniciar AINEs a dosis plenas, tratar Chlamydia con Doxiciclina y tratar obligatoriamente a su pareja sexual" },
        { letter: "B", text: "Artritis séptica gonocócica; hospitalizar para Ceftriaxona 1 g endovenoso diario por 14 días" },
        { letter: "C", text: "Gota poliarticular aguda; iniciar Alopurinol 300 mg al día de inmediato" },
        { letter: "D", text: "Lupus eritematoso sistémico; iniciar Prednisona e Hidroxicloroquina oral" },
        { letter: "E", text: "Espondilitis anquilosante avanzada; indicar terapia biológica Anti-TNF inmediata" },
      ],
      correct: "A",
      explanation: "El cuadro clínico reúne la tríada clásica del Síndrome de Reiter (uretritis previa, conjuntivitis y oligoartritis asimétrica de extremidades inferiores con dactilitis) junto a la lesión mucocutánea patognomónica de balanitis circinada y líquido articular inflamatorio estrictamente estéril. El manejo requiere AINEs a dosis plenas para la inflamación articular, tratamiento antimicrobiano para Chlamydia trachomatis con doxiciclina o azitromicina, y tratamiento epidemiológico mandatorio a la pareja sexual.",
      say: {
        stem: "Caso clínico. Varón de veintitrés años con dolor en rodilla izquierda y tobillo derecho tras uretritis y ojo rojo hace tres semanas, dactilitis en dedo del pie, balanitis circinada indolora y líquido articular con treinta y dos mil leucocitos con cultivos negativos.",
        question: "¿Cuál es el diagnóstico clínico más probable y cuál es la conducta terapéutica indicada?",
        options: "Las alternativas: artritis reactiva con AINEs y doxiciclina para él y su pareja, artritis gonocócica con ceftriaxona, gota con alopurinol, lupus con corticoides, o espondilitis con biológicos. Piénsalo.",
        answer: "La respuesta correcta es la A. Cumple la tríada clásica de Reiter con balanitis circinada y líquido sinovial estéril. Se indican AINEs continuos para la artritis y tratamiento de Chlamydia con doxiciclina tanto al paciente como a su pareja.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2018 · Pregunta 44",
      stem: "Hombre de 26 años consulta por dolor e inflamación en rodilla derecha y tobillo izquierdo de 2 semanas de evolución. Como antecedente refiere un cuadro de uretritis con disuria hace 1 mes tras una relación sexual no protegida. Al examen físico destaca artritis de rodilla derecha y placas hiperqueratósicas indoloras de aspecto descamativo en plantas de pies (queratodermia blenorrágica). La artrocentesis muestra 25.000 leucocitos/mm³ con cultivos negativos. ¿Cuál es el patógeno causante de la infección primaria desencadenante más probable?",
      options: [
        { letter: "A", text: "Neisseria gonorrhoeae" },
        { letter: "B", text: "Chlamydia trachomatis" },
        { letter: "C", text: "Treponema pallidum" },
        { letter: "D", text: "Trichomonas vaginalis" },
        { letter: "E", text: "Herpes simplex virus tipo 2" },
      ],
      correct: "B",
      explanation: "En el síndrome de artritis reactiva tras exposición sexual (artritis periférica asimétrica + antecedente de uretritis + queratodermia blenorrágica con líquido articular estéril), el agente etiológico primario responsable de la infección urogenital desencadenante es Chlamydia trachomatis. No se trata de una artritis séptica gonocócica, ya que el líquido sinovial es aséptico.",
      say: {
        stem: "EUNACOM dos mil dieciocho, pregunta cuarenta y cuatro. Joven de veintiséis años con oligoartritis asimétrica, antecedente de uretritis previa, placas de queratodermia blenorrágica en plantas de pies y líquido articular estéril.",
        question: "¿Cuál es el patógeno causante de la infección primaria desencadenante más probable?",
        options: "Las opciones: gonococo, Chlamydia trachomatis, Treponema pallidum, tricomonas, o virus herpes simple tipo dos. Piénsalo.",
        answer: "Es la B. Chlamydia trachomatis es la causa número uno de infección urogenital desencadenante de artritis reactiva tras contacto sexual.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2020 · Pregunta 15",
      stem: "¿Cuál de las siguientes combinaciones de hallazgos clínicos conforma la denominación clásica del Síndrome de Reiter?",
      options: [
        { letter: "A", text: "Artritis reumatoide, esplenomegalia y neutropenia" },
        { letter: "B", text: "Uretritis, conjuntivitis y artritis periférica asimétrica" },
        { letter: "C", text: "Xerostomía, xeroftalmia y artralgias" },
        { letter: "D", text: "Calcinosis, fenómeno de Raynaud y esclerodactilia" },
        { letter: "E", text: "Aftas orales, aftas genitales y uveítis con hipopión" },
      ],
      correct: "B",
      explanation: "El Síndrome de Reiter se define clásicamente por la tríada clínica de: 1) Uretritis no gonocócica (o cervicitis), 2) Conjuntivitis bilateral y 3) Artritis periférica asimétrica de extremidades inferiores. La tríada de AR + esplenomegalia + neutropenia corresponde al síndrome de Felty, y las aftas orogenitales más uveítis a la enfermedad de Behçet.",
      say: {
        stem: "EUNACOM dos mil veinte, pregunta quince. Se indagan las definiciones sindromáticas clásicas en reumatología.",
        question: "¿Cuál de las siguientes combinaciones de hallazgos clínicos conforma la denominación clásica del Síndrome de Reiter?",
        options: "Las alternativas: artritis con esplenomegalia y neutropenia, uretritis con conjuntivitis y artritis asimétrica, ojo seco con boca seca, calcinosis con Raynaud, o aftas orogenitales con uveítis. Piénsalo.",
        answer: "La respuesta correcta es la B. La tríada de Reiter reúne uretritis no gonocócica, conjuntivitis estéril y artritis periférica asimétrica de predominio en extremidades inferiores.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2023 · Pregunta 30",
      stem: "¿Cuál de las siguientes afirmaciones respecto al líquido sinovial obtenido mediante artrocentesis en un paciente con Artritis Reactiva aguda es CORRECTA?",
      options: [
        { letter: "A", text: "Presenta invariablemente tinción de Gram con diplococos gramnegativos intracelulares abundantes" },
        { letter: "B", text: "Es francamente inflamatorio (recuentos de 20.000 a 50.000 leucocitos/mm³) pero rigurosamente ESTÉRIL al cultivo" },
        { letter: "C", text: "Es no inflamatorio con viscosidad normal y menos de 200 leucocitos/mm³" },
        { letter: "D", text: "Contiene cristales de urato monosódico birrefringentes fuertemente negativos" },
        { letter: "E", text: "Presenta microhemorragias masivas por fragilidad capilar pura" },
      ],
      correct: "B",
      explanation: "El líquido articular en la artritis reactiva es de tipo inflamatorio (frecuentemente turbio con 20.000 a 50.000 leucocitos/mm³ de predominio polimorfonuclear), pero es típicamente estéril; tanto el Gram como los cultivos bacterianos estándar resultan negativos, confirmando su naturaleza inmunológica postinfecciosa aséptica.",
      say: {
        stem: "EUNACOM dos mil veintitrés, pregunta treinta. Se evalúan las características del líquido sinovial en artropatías postinfecciosas.",
        question: "¿Cuál afirmación respecto al líquido sinovial en una artritis reactiva aguda es correcta?",
        options: "Las opciones: Gram con diplococos gramnegativos, líquido inflamatorio pero rigurosamente estéril al cultivo, líquido no inflamatorio mecánico, cristales de urato, o microhemorragias masivas. Piénsalo.",
        answer: "Es la B. El líquido sinovial es francamente inflamatorio pero estéril en los cultivos bacterianos, reflejando una sinovitis reactiva inmunológica mediada a distancia.",
      },
    },

    {
      type: "points",
      kicker: "Cierre",
      title: "Reglas de oro para el examen",
      cards: [
        { title: "Tríada de Reiter y desencadenantes", tag: "Chlamydia y líquido estéril", kind: "criteria", items: [
          { t: "Uretritis, conjuntivitis y oligoartritis", d: "Aparición una a cuatro semanas postcontacto",
            say: "Cerramos con las tres reglas de oro. Primero: el síndrome de Reiter es la tríada de uretritis no gonocócica, conjuntivitis estéril y oligoartritis asimétrica en miembros inferiores con dactilitis en dedos del pie." },
          { t: "Chlamydia trachomatis número uno", d: "Microorganismo desencadenante más frecuente",
            say: "Segundo: Chlamydia trachomatis es la causa más común tras contacto sexual venéreo, y el líquido articular es francamente inflamatorio pero rigurosamente estéril al cultivo." },
        ] },
        { title: "Lesiones patognomónicas y tratamiento", tag: "Balanitis, queratodermia y pareja", kind: "pharma", items: [
          { t: "Balanitis circinada y queratodermia", d: "Erosiones indoloras en glande y placas en plantas",
            say: "Tercero: la balanitis circinada y la queratodermia blenorrágica son lesiones patognomónicas que confirman el diagnóstico." },
          { t: "AINEs continuos y manejo de pareja", d: "Doxiciclina o azitromicina al paciente y a la pareja",
            say: "El tratamiento articular se basa en AINEs a dosis plenas, y la infección por Chlamydia exige tratar obligatoriamente tanto al paciente como a su pareja sexual. Si te llevas una sola idea de hoy: uretritis previa con ojo rojo y rodilla inflamada estéril es artritis reactiva; indica AINEs, trata a la pareja y descarta Chlamydia. Nos vemos en la próxima clase." },
        ] },
      ],
    },
  ],

  pathway: {
    title: "Algoritmo de enfrentamiento: Oligoartritis Asimétrica y Sospecha de Artritis Reactiva",
    root: N("start", "Oligoartritis Asimétrica de Extremidades Inferiores", "Hombre o mujer joven con derrame agudo de rodilla o tobillo",
      "Paciente joven que consulta por monoartritis o oligoartritis aguda en miembros inferiores.",
      ["", N("q", "¿Antecedente de uretritis, disuria, diarrea aguda o contacto sexual 1 a 4 semanas previas?", "Interrogatorio de foco infeccioso gatillante",
        "Se pesquisa antecedente de infección mucosa previa reciente.",
        ["SÍ: Infección previa urogenital o entérica", N("do", "Artrocentesis Inmediata obligatoria", "Descartar artritis séptica bacteriana activa con Gram y cultivo",
          "La punción articular es mandataria para diferenciar artritis séptica de reactiva.",
          ["", N("q", "¿Líquido articular francamente inflamatorio pero Gram y cultivos negativos?", "Verificación de esterilidad sinovial",
            "Se examina el resultado microbiológico del líquido sinovial.",
            ["SÍ: Líquido sinovial estéril con lesiones de Reiter", N("ok", "Artritis Reactiva confirmada: AINEs y Tratamiento de Pareja", "AINEs a dosis plenas continuas más Doxiciclina si hay Chlamydia activa, tratando a la pareja",
              "Diagnóstico de artritis reactiva confirmado. Prescribir AINEs continuos y erradicar Chlamydia en el paciente y su pareja sexual.")],
            ["NO: Gram positivo o desarrollo bacteriano", N("refer", "Artritis Séptica Infecciosa (Gonococo / S. aureus)", "Hospitalización urgente, drenaje articular y antibióticos endovenosos dirigidos",
              "Infección articular verdadera activa. Iniciar terapia antibiótica parenteral urgente y lavado articular por traumatología.")])])],
        ["NO: Sin antecedente infeccioso ni lesiones mucosas", N("do", "Estudio de otras causas de artritis", "Descartar gota por microcristales, artritis psoriásica u osteoartritis",
          "Sin datos de proceso reactivo. Solicitar estudio de microcristales y factor reumatoide.")])]),
  },
};
