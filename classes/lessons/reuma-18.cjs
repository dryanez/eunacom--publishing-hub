// Clase 1.18 — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_reumatologia_bloque_4.cjs (reuma-18).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: "reuma-18",
  tier: 2,
  slides: [
    {
      type: "cover",
      subtitle: "Dactilitis en salchicha, pitting ungueal, imagen en lápiz en copa y comportamiento de la artropatía enteropática",
      say: "Bienvenidos a la clase dieciocho. Hoy abordamos la Artritis Psoriásica y la Artritis asociada a Enfermedad Inflamatoria Intestinal. Aprenderemos a reconocer la dactilitis o dedo en salchicha, la afección de las articulaciones interfalángicas distales con distrofia ungueal en piqueteado, el signo radiológico del lápiz en copa, el uso de metotrexato como primera línea periférica, y la distinción clave de la artritis enteropática: la forma periférica paralela a los brotes intestinales versus la forma axial independiente. Comencemos.",
    },

    {
      type: "flow",
      kicker: "Inmunopatogenia cutáneo-articular",
      title: "Artritis Psoriásica: De las placas cutáneas a la entesitis",
      nodes: [
        { id: "pso", col: 0, row: 1, k: "start", t: "Psoriasis cutánea en placas", s: "Afecta al quince a treinta por ciento de los enfermos de piel" },
        { id: "ent", col: 1, row: 0, k: "mech", t: "Entesitis y tenosinovitis digital", s: "Eje interleuquina veintitrés y diecisiete activo" },
        { id: "dac", col: 2, row: 0, k: "alert", t: "Dactilitis o dedo en salchicha", s: "Tumefacción uniforme de todo el rayo digital" },
        { id: "ser", col: 1, row: 2, k: "good", t: "Seronegatividad inmunológica", s: "Factor reumatoide y anti-CCP constantemente negativos" },
      ],
      edges: [
        { from: "pso", to: "ent" },
        { from: "ent", to: "dac" },
        { from: "pso", to: "ser" },
      ],
      steps: [
        { show: ["pso", "ent", "dac"], note: "Desarrollo de dactilitis y compromiso periférico",
          say: "Aproximadamente un tercio de los pacientes con psoriasis cutánea desarrollan artritis psoriásica. La lesión elemental es la entesitis de las inserciones tendinosas y ligamentosas digitales, provocando sinovitis articular y tenosinovitis que confluyen en la tumefacción global de todo el dedo, conocida como dactilitis." },
        { show: ["ser"], note: "Seronegatividad y criterios CASPAR",
          say: "A diferencia de la artritis reumatoide, la artritis psoriásica es seronegativa: el factor reumatoide y los anticuerpos antipéptidos citrulinados son negativos. El diagnóstico se sustenta en los criterios CASPAR, donde la presencia o antecedente familiar de psoriasis cutánea suma el mayor puntaje." },
      ],
    },

    {
      type: "points",
      kicker: "Semiología clínica distintiva",
      title: "Dactilitis, interfalángicas distales y distrofia ungueal",
      cards: [
        { title: "Dactilitis o dedo en salchicha", tag: "Signo patognomónico de espondiloartritis", kind: "alert", items: [
          { t: "Tumefacción difusa y cilíndrica", d: "Afectación de un rayo digital completo",
            say: "La dactilitis es la hinchazón uniforme, eritematosa y dolorosa de todo un dedo de la mano o del pie, confiriéndole un aspecto de salchicha. Ocurre por la inflamación conjunta de las articulaciones interfalángicas y la vaina del tendón flexor subyacente." },
          { t: "Diferenciación con artritis reumatoide", d: "La artritis reumatoide jamás produce dactilitis",
            say: "Este signo clínico es crucial para el examen: la dactilitis es altamente sugerente de artritis psoriásica o reactiva, y jamás se observa en la artritis reumatoide convencional, donde la sinovitis se limita estrictamente a la cavidad articular sin tenosinovitis difusa." },
        ] },
        { title: "Compromiso de IFD y lesiones ungueales", tag: "Asociación anatómica estrecha", kind: "key", items: [
          { t: "Afectación de interfalángicas distales", d: "Articulación respetada en artritis reumatoide",
            say: "La artritis de las articulaciones interfalángicas distales es un sello distintivo de la psoriasis articular, mientras que en la artritis reumatoide estas articulaciones distales están estrictamente preservadas." },
          { t: "Distrofia ungueal en dedal o pitting", d: "Piqueteado, onicólisis y manchas en gota de aceite",
            say: "La afección de las interfalángicas distales se asocia estrechamente a distrofia ungueal adyacente: pequeñas depresiones puntiformes en dedal o pitting, engrosamiento hiperqueratósico subungueal y onicólisis con manchas amarillentas en aceite." },
        ] },
      ],
    },

    {
      type: "points",
      kicker: "Patrones clínicos y radiología",
      title: "Patrones de Moll y Wright e imagen en Lápiz en Copa",
      cards: [
        { title: "Formas de presentación articular", tag: "Oligoartritis versus Poliartritis", kind: "criteria", items: [
          { t: "Oligoartritis asimétrica periférica", d: "El patrón más frecuente en la práctica médica",
            say: "El patrón clásico más habitual es la oligoartritis asimétrica de cuatro o menos articulaciones, comprometiendo rodillas, tobillos o dedos de manos de forma parcheada, a menudo asociada a dactilitis precoz." },
          { t: "Forma mutilante con telescopaje", d: "Reabsorción ósea severa de falanges",
            say: "Una variante infrecuente pero muy destructiva es la artritis mutilante, caracterizada por la lisis y reabsorción de las falanges, provocando un colapso telescópico de los dedos de las manos con dedos en catalejo." },
        ] },
        { title: "Radiología: El signo del lápiz en copa", tag: "Erosión más proliferación ósea simultánea", kind: "alert", items: [
          { t: "Adelgazamiento y ensanchamiento óseo", d: "Pencil-in-cup característico en interfalángicas",
            say: "En la radiografía destaca la imagen en lápiz en copa: el extremo proximal de la falange distal se ensancha de forma cóncava como una copa, mientras que el extremo de la falange media se afila como un lápiz, encajando en ella." },
          { t: "Periostitis con neoformación ósea", d: "Aposición de hueso nuevo yuxtaarticular",
            say: "A diferencia de la artritis reumatoide, donde la lesión ósea es puramente lítica y desmineralizante, en la artritis psoriásica coexisten erosiones óseas con intensa proliferación perióstica y esclerosis de hueso nuevo." },
        ] },
      ],
    },

    {
      type: "flow",
      kicker: "Manejo terapéutico escalonado",
      title: "Tratamiento farmacológico de la Artritis Psoriásica",
      nodes: [
        { id: "leve", col: 0, row: 1, k: "start", t: "Artritis psoriásica confirmada", s: "Compromiso articular periférico activo" },
        { id: "mtx", col: 1, row: 0, k: "good", t: "Metotrexato oral o subcutáneo", s: "Fármaco modificador sintético de primera elección" },
        { id: "pau", col: 1, row: 2, k: "mech", t: "Infiltración articular con corticoides", s: "En sinovitis o dactilitis monoarticular localizada" },
        { id: "bio", col: 2, row: 1, k: "alert", t: "Terapia Biológica (Anti-TNF o Anti-IL-17)", s: "En fracaso de metotrexato o compromiso axial" },
      ],
      edges: [
        { from: "leve", to: "mtx" },
        { from: "leve", to: "pau" },
        { from: "mtx", to: "bio", label: "si refractario" },
      ],
      steps: [
        { show: ["leve", "mtx"], note: "Metotrexato de primera elección periférica",
          say: "En la artritis psoriásica periférica, el metotrexato semanal es el fármaco de primera línea de elección indiscutido. Presenta el enorme beneficio adicional de controlar simultáneamente la proliferación de las placas cutáneas de psoriasis y la inflamación de la sinovial." },
        { show: ["bio"], note: "Biológicos en refractariedad o compromiso axial",
          say: "Si el paciente no responde adecuadamente al metotrexato o si presenta compromiso axial con sacroilitis de columna, se indica terapia biológica de rescate con antagonistas del factor de necrosis tumoral alfa o inhibidores de interleuquina diecisiete como secukinumab." },
      ],
    },

    {
      type: "points",
      kicker: "Artropatía enteropática",
      title: "Artritis en Colitis Ulcerosa y Enfermedad de Crohn",
      cards: [
        { title: "Artritis periférica: Curso paralelo al intestino", tag: "Tipo uno pauciarticular", kind: "criteria", items: [
          { t: "Grandes articulaciones en crisis digestiva", d: "Rodillas y tobillos con curso paralelo",
            say: "La artritis periférica tipo uno afecta a menos de cinco articulaciones, predominantemente rodillas y tobillos. Su rasgo fundamental es que sigue un curso estrictamente paralelo a la actividad inflamatoria del intestino: brota junto con la diarrea sanguinolenta y remite al calmar la mucosa." },
          { t: "Efecto curativo de la colectomía en colitis", d: "La resección del colon resuelve la artritis periférica",
            say: "En pacientes con colitis ulcerosa refractaria, la proctocolectomía total cura la enfermedad colónica y produce la remisión definitiva y completa de la artritis periférica tipo uno, sin dejar secuelas articulares crónicas." },
        ] },
        { title: "Compromiso axial: Curso independiente del intestino", tag: "Espondilitis y sacroilitis en EII", kind: "alert", items: [
          { t: "Sacroilitis y columna independientes del colon", d: "Evolución propia con HLA-B27 positivo",
            say: "Por el contrario, el compromiso axial con espondilitis y sacroilitis es completamente independiente de los brotes digestivos. Continúa progresando aunque el intestino esté asintomático y no mejora tras la extirpación quirúrgica del colon." },
          { t: "Asociación muy alta con HLA-B27", d: "Positivo en más del cincuenta por ciento",
            say: "El compromiso axial en enfermedad inflamatoria intestinal comparte la genética con la espondilitis anquilosante, mostrando positividad para el antígeno HLA-B veintisiete en más del cincuenta al setenta por ciento de los pacientes." },
        ] },
      ],
    },

    {
      type: "table",
      kicker: "Trampas EUNACOM",
      title: "Diagnóstico diferencial: Artritis Periférica EII vs Afección Axial EII",
      head: ["Característica", "Artritis Periférica Tipo 1 (EII)", "Afección Axial / Espondilitis (EII)"],
      rows: [
        { cells: ["Articulaciones afectadas", "Grandes articulaciones (rodillas y tobillos)", "Sacroilíacas bilaterales y columna vertebral"],
          say: "Articulaciones: la periférica afecta grandes articulaciones como rodillas y tobillos, mientras que la axial ataca las sacroilíacas y la columna vertebral." },
        { cells: ["Relación con brotes intestinales", "ESTRICTAMENTE PARALELA a la diarrea", "TOTALMENTE INDEPENDIENTE de la mucosa colónica"],
          say: "Relación intestinal: la artritis periférica es estrictamente paralela al brote intestinal; en cambio, la espondilitis axial es completamente independiente." },
        { cells: ["Efecto de la colectomía en CU", "CURA o induce remisión de la artritis", "NULO: la columna continúa progresando"],
          say: "Cirugía en colitis: la colectomía total cura la artritis periférica, pero no tiene ningún impacto sobre la progresión de la espondilitis axial." },
        { cells: ["Asociación con HLA-B27", "Baja (alrededor del diez por ciento)", "Muy ALTA (cincuenta a setenta por ciento)"],
          say: "Genética: la artritis periférica apenas se asocia a HLA-B veintisiete en un diez por ciento, mientras que la espondilitis axial se asocia en más del cincuenta por ciento." },
      ],
    },

    {
      type: "quiz",
      kicker: "Caso clínico",
      title: "Caso clínico tipo EUNACOM",
      stem: "Hombre de 36 años con antecedente de psoriasis en placas en codos de 5 años de evolución consulta por dolor e hinchazón en el tercer dedo de la mano derecha de 3 semanas. Al examen físico el dedo completo luce uniformemente engrosado, eritematoso y tumefacto, con aspecto de salchicha, con dolor exquisito a la palpación del tendón flexor y sinovitis de la articulación interfalángica distal. Las uñas muestran múltiples depresiones puntiformes en dedal (pitting) y desprendimiento ungueal distal. El factor reumatoide y los anticuerpos anti-CCP son negativos.",
      question: "¿Cuál es el diagnóstico clínico más probable y cuál es el fármaco modificador sintético de primera elección?",
      options: [
        { letter: "A", text: "Artritis Psoriásica con dactilitis; indicar Metotrexato oral semanal más ácido fólico" },
        { letter: "B", text: "Artritis reumatoide seronegativa; indicar Sulfasalazina en monoterapia" },
        { letter: "C", text: "Gota tofácea poliarticular; prescribir Alopurinol en dosis altas inmediatas" },
        { letter: "D", text: "Osteoartritis erosiva de manos; prescribir condroitín sulfato y paracetamol SOS" },
        { letter: "E", text: "Tenovaginitis infecciosa bacteriana; hospitalizar para drenaje quirúrgico y cloxacilina" },
      ],
      correct: "A",
      explanation: "El cuadro clínico es diagnóstico de Artritis Psoriásica: paciente con antecedente de psoriasis cutánea que debuta con dactilitis (\"dedo en salchicha\"), compromiso de interfalángica distal, distrofia ungueal característica (pitting y onicólisis) y seronegatividad inmunológica (FR y anti-CCP negativos). El fármaco modificador de la enfermedad sintético de primera elección para la artritis psoriásica periférica es el Metotrexato, que ayuda a controlar simultáneamente la piel y las articulaciones.",
      say: {
        stem: "Caso clínico. Varón de treinta y seis años con placas de psoriasis que consulta por dedo medio tumefacto en salchicha, inflamación de interfalángica distal, piqueteado ungueal en dedal y factor reumatoide negativo.",
        question: "¿Cuál es el diagnóstico clínico más probable y cuál es el fármaco modificador de primera elección?",
        options: "Las alternativas: artritis psoriásica con metotrexato semanal, artritis reumatoide con sulfasalazina, gota tofácea con alopurinol, osteoartritis con condroitina, o tenosinovitis bacteriana con antibióticos. Piénsalo.",
        answer: "La respuesta correcta es la A. La combinación de psoriasis, dactilitis, afección de interfalángicas distales y piqueteado ungueal confirma artritis psoriásica. El metotrexato es el modificador de primera elección.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2017 · Pregunta 38",
      stem: "Hombre de 38 años con antecedente de psoriasis en placas consulta por tumefacción dolorosa difusa y uniforme del segundo dedo de la mano izquierda, que adquiere un aspecto engrosado cilíndrico en \"salchicha\". Al examen se constata dolor en interfalángicas proximales y distales con dolor a la palpación del trayecto del tendón flexor. Las uñas muestran piqueteado puntiforme (pitting). ¿Cómo se denomina este hallazgo semiológico característico?",
      options: [
        { letter: "A", text: "Nódulos de Heberden" },
        { letter: "B", text: "Dactilitis (\"dedo en salchicha\")" },
        { letter: "C", text: "Pannus sinovial erosivo" },
        { letter: "D", text: "Tofo gotoso interarticular" },
        { letter: "E", text: "Eritema nudoso digital" },
      ],
      correct: "B",
      explanation: "La dactilitis o \"dedo en salchicha\" es la inflamación uniforme y difusa de la totalidad de un dedo ocasionada por la combinación simultánea de sinovitis articular y tenosinovitis de los tendones flexores. Es una manifestación característica y altamente específica de las espondiloartropatías, particularmente de la Artritis Psoriásica y de la Artritis Reactiva.",
      say: {
        stem: "EUNACOM dos mil diecisiete, pregunta treinta y ocho. Paciente con psoriasis que presenta tumefacción difusa y uniforme de todo el segundo dedo de la mano en forma cilíndrica de salchicha con dolor del tendón flexor.",
        question: "¿Cómo se denomina este hallazgo semiológico característico de las espondiloartritis?",
        options: "Las opciones: nódulos de Heberden, dactilitis, pannus sinovial, tofo gotoso, o eritema nudoso. Piénsalo.",
        answer: "Es la B. La dactilitis o dedo en salchicha se produce por la combinación de sinovitis y tenosinovitis del flexor en todo el trayecto digital, constituyendo una marca semiológica de la artritis psoriásica.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2021 · Pregunta 20",
      stem: "Mujer de 32 años con antecedente de Colitis Ulcerosa de 4 años de evolución presenta un brote intestinal agudo con diarrea sanguinolenta (6 deposiciones al día con pujo y tenesmo). De forma simultánea inicia dolor y derrame articular en rodilla derecha y tobillo izquierdo. ¿Cuál es el comportamiento clínico esperado de esta artritis periférica con relación a la evolución de su enfermedad intestinal?",
      options: [
        { letter: "A", text: "La artritis progresará de forma independiente requiriendo cirugía protésica precoz" },
        { letter: "B", text: "La artritis remitirá completamente al resolverse el brote inflamatorio de la colitis" },
        { letter: "C", text: "La artritis transformará la enfermedad en espondilitis anquilosante irreversible" },
        { letter: "D", text: "La artritis indica degeneración neoplásica colónica maligna inmediata" },
        { letter: "E", text: "La artritis persistirá de forma crónica sin responder a corticoides" },
      ],
      correct: "B",
      explanation: "La artropatía periférica asociada a Enfermedad Inflamatoria Intestinal de tipo pauciarticular (Tipo 1, que afecta rodillas y tobillos en menos de 5 articulaciones) sigue un curso estrictamente paralelo a la actividad de la mucosa colónica. Al tratar el brote de colitis ulcerosa con corticoides o aminosalicilatos y remitir la inflamación intestinal, la artritis periférica cede de forma completa sin dejar daño articular residual.",
      say: {
        stem: "EUNACOM dos mil veintiuno, pregunta veinte. Mujer con colitis ulcerosa activa con diarrea con sangre y dolor simultáneo en rodilla y tobillo.",
        question: "¿Cuál es el comportamiento clínico esperado de esta artritis periférica respecto a la evolución de su enfermedad intestinal?",
        options: "Las alternativas: progresará de forma independiente, remitirá completamente al resolverse el brote intestinal, se transformará en espondilitis, indica neoplasia colónica, o persistirá de forma crónica. Piénsalo.",
        answer: "La respuesta correcta es la B. La artritis periférica tipo uno sigue un curso estrictamente paralelo a la actividad intestinal. Al remitir el brote de colitis ulcerosa, la inflamación articular cede por completo.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2023 · Pregunta 41",
      stem: "¿Cuál de los siguientes hallazgos en la radiografía simple de manos es característico y distintivo de la fase destructiva de la Artritis Psoriásica en articulaciones interfalángicas distales?",
      options: [
        { letter: "A", text: "Osteopenia yuxtaarticular en banda aislada sin neoformación ósea" },
        { letter: "B", text: "Deformidad destructiva con aspecto en lápiz en copa (pencil-in-cup)" },
        { letter: "C", text: "Geodas subcondrales gigantes con esclerosis circular pura" },
        { letter: "D", text: "Condrocalcinosis del fibrocartílago triangular" },
        { letter: "E", text: "Subluxación atloaxoidea aislada" },
      ],
      correct: "B",
      explanation: "La imagen radiológica en \"lápiz en copa\" (pencil-in-cup) en las articulaciones interfalángicas de las manos es clásica de la artritis psoriásica. Se produce por la reabsorción y afilamiento del extremo de la falange media (\"lápiz\") junto con la erosión cóncava y proliferación perióstica de la base de la falange distal (\"copa\").",
      say: {
        stem: "EUNACOM dos mil veintitrés, pregunta cuarenta y uno. Se evalúan los patrones radiológicos típicos de las artropatías destructivas en manos.",
        question: "¿Cuál de los siguientes hallazgos en la radiografía simple de manos es característico de la artritis psoriásica en interfalángicas distales?",
        options: "Las opciones: osteopenia yuxtaarticular aislada, deformidad en lápiz en copa, geodas subcondrales puras, condrocalcinosis, o subluxación atloaxoidea. Piénsalo.",
        answer: "Es la B. La imagen en lápiz en copa es la alteración radiológica patognomónica de la artritis psoriásica avanzada en las articulaciones interfalángicas distales.",
      },
    },

    {
      type: "points",
      kicker: "Cierre",
      title: "Reglas de oro para el examen",
      cards: [
        { title: "Artritis Psoriásica cardinal", tag: "Dactilitis, IFD y Metotrexato", kind: "criteria", items: [
          { t: "Dactilitis y piqueteado ungueal", d: "Dedo en salchicha e interfalángicas distales afectadas",
            say: "Revisemos las tres reglas de oro. Primero: la artritis psoriásica cursa con dactilitis o dedo en salchicha, compromiso de interfalángicas distales y distrofia ungueal en piqueteado, siendo seronegativa para factor reumatoide." },
          { t: "Metotrexato de primera elección periférica", d: "Trata conjuntamente las placas de piel y las articulaciones",
            say: "Segundo: el metotrexato semanal es el fármaco modificador de primera línea para la enfermedad articular periférica, escalando a terapia biológica anti-TNF o anti-IL diecisiete si hay refractariedad o compromiso axial." },
        ] },
        { title: "Artritis enteropática en EII", tag: "Periférica paralela versus axial independiente", kind: "alert", items: [
          { t: "Artritis periférica paralela al intestino", d: "Remite al calmar la colitis y cura con la colectomía",
            say: "Tercero: en la enfermedad inflamatoria intestinal, la artritis periférica tipo uno sigue un curso paralelo a los brotes digestivos y cura con la colectomía en colitis ulcerosa." },
          { t: "Afección axial independiente del colon", d: "Espondilitis y sacroilitis asociadas a HLA-B27",
            say: "En cambio, el compromiso axial de columna y sacroilíacas es completamente independiente de la inflamación intestinal. Si te llevas una sola idea de hoy: dedo en salchicha con afección de interfalángicas distales y uñas es artritis psoriásica; en colitis ulcerosa la artritis periférica sigue al intestino pero la columna va por su cuenta. Nos vemos en la próxima clase." },
        ] },
      ],
    },
  ],

  pathway: {
    title: "Algoritmo de enfrentamiento: Artritis Psoriásica y Artropatía en EII",
    root: N("start", "Sospecha de Artritis Psoriásica o Enteropática", "Artritis periférica o dactilitis en paciente con patología cutánea o intestinal previa",
      "Paciente que consulta por sinovitis articular o dedo hinchado en salchicha.",
      ["", N("q", "¿Antecedente de Psoriasis cutánea o antecedentes de Enfermedad Inflamatoria Intestinal?", "Identificación de patología de base",
        "Se evalúa el contexto clínico cutáneo o gastrointestinal.",
        ["Psoriasis cutánea: Dactilitis o compromiso IFD", N("do", "Evaluación de Artritis Psoriásica (Criterios CASPAR)", "Solicitar Radiografía de manos (buscar lápiz en copa) y descartar FR/anti-CCP",
          "Sospecha de artritis psoriásica. Solicitar radiografías de manos y confirmar seronegatividad inmunológica.",
          ["", N("q", "¿Compromiso articular predominantemente periférico o compromiso axial de columna?", "Patrón anatómico dominante",
            "Se clasifica el tipo de afección anatómica.",
            ["Predominio periférico: Manos, pies o rodillas", N("ok", "Artritis Psoriásica Periférica: Iniciar Metotrexato", "Prescribir Metotrexato semanal más ácido fólico y AINEs de apoyo",
              "Diagnóstico confirmado. El metotrexato es el modificador de primera línea de elección para piel y articulaciones periféricas.")],
            ["Compromiso axial: Sacroilitis o columna", N("refer", "Artritis Psoriásica Axial: Terapia Biológica", "Derivar a Reumatología para Terapia Biológica Anti-TNF o Anti-IL-17",
              "Al igual que en espondilitis anquilosante, el compromiso axial no responde a metotrexato y requiere terapia biológica.")])])],
        ["Enfermedad Inflamatoria Intestinal: Colitis Ulcerosa o Crohn", N("do", "Evaluación de Artropatía Enteropática", "Determinar si la artritis es periférica de grandes articulaciones o axial",
          "Paciente con antecedente de colitis o Crohn con artritis.",
          ["", N("q", "¿Artritis de rodilla o tobillo durante brote activo de diarrea (Tipo 1)?", "Correlación cronológica con el intestino",
            "Se evalúa la sincronía con la inflamación colónica.",
            ["SÍ: Brote simultáneo a diarrea (Paralela)", N("ok", "Artritis Periférica Tipo 1: Tratar la mucosa intestinal", "Optimizar corticoides o aminosalicilatos para el intestino; remitirá en conjunto",
              "Artritis enteropática tipo uno. El pilar es inducir la remisión del brote colónico, resolviéndose el derrame articular sin secuelas.")],
            ["NO: Dolor lumbar inflamatorio crónico (Axial)", N("refer", "Espondilitis asociada a EII (Independiente)", "Manejo reumatológico con Anti-TNF; no se altera con tratamiento intestinal ni colectomía",
              "Compromiso axial independiente de la actividad digestiva. Requiere agentes biológicos anti-TNF y seguimiento reumatológico.")])])])]),
  },
};
