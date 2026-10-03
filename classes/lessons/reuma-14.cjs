// Clase 1.14 — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_reumatologia_bloque_3.cjs (reuma-14).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: "reuma-14",
  tier: 2,
  slides: [
    {
      type: "cover",
      subtitle: "Fases vasculares, diagnóstico diferencial entre primario y secundario, capilaroscopía periungueal y calcioantagonistas",
      say: "Bienvenidos a la clase catorce. Hoy abordamos el fenómeno de Raynaud, un motivo de consulta muy habitual tanto en atención primaria como en el examen nacional. Analizaremos las tres fases vasculares cardinales, los criterios para diferenciar con total seguridad un Raynaud primario benigno de un Raynaud secundario a conectivopatía, el rol indiscutible de la capilaroscopía periungueal, el manejo con calcioantagonistas y las contraindicaciones farmacológicas absolutas. Comencemos.",
    },

    {
      type: "flow",
      kicker: "Fisiopatología vascular",
      title: "Las tres fases cardinales del fenómeno de Raynaud",
      nodes: [
        { id: "frio", col: 0, row: 1, k: "start", t: "Estímulo desencadenante", s: "Exposición al frío o estrés emocional" },
        { id: "blan", col: 1, row: 0, k: "alert", t: "Fase 1: Palidez isquémica (Blanco)", s: "Vasoespasmo arteriolar digital intenso" },
        { id: "azul", col: 2, row: 1, k: "mech", t: "Fase 2: Cianosis por estasis (Azul)", s: "Acumulación de sangre venosa desoxigenada" },
        { id: "rojo", col: 1, row: 2, k: "good", t: "Fase 3: Rubor reactivo (Rojo)", s: "Reperfusión vascular e hiperemia reactiva" },
      ],
      edges: [
        { from: "frio", to: "blan" },
        { from: "blan", to: "azul" },
        { from: "azul", to: "rojo" },
      ],
      steps: [
        { show: ["frio", "blan"], note: "Fase de palidez por vasoespasmo",
          say: "El cuadro inicia ante la exposición al frío ambiental o situaciones de estrés emocional. Se produce un vasoespasmo súbito e intenso de las arterias digitales terminales, provocando una palidez cérea completa de los dedos que se tornan fríos e insensibles." },
        { show: ["azul"], note: "Fase de cianosis por hipoxia local",
          say: "A los pocos minutos, la sangre atrapada en los capilares y vénulas se desoxigena progresivamente por la extracción tisular residual. Los dedos adquieren entonces una coloración azulada o violácea característica acompañada de parestesias y dolor sordo." },
        { show: ["rojo"], note: "Fase de rubor por hiperemia reactiva",
          say: "Al volver a una temperatura cálida, el espasmo cede y se produce una apertura vascular reactiva masiva. La hiperemia de reperfusión tiñe los dedos de rojo intenso, causando sensación pulsátil, calor y dolor urente antes de normalizarse por completo." },
      ],
    },

    {
      type: "points",
      kicker: "Enfermedad funcional benigna",
      title: "Fenómeno de Raynaud Primario o Enfermedad de Raynaud",
      cards: [
        { title: "Perfil demográfico y simetría", tag: "Mujeres jóvenes de 15 a 30 años", kind: "criteria", items: [
          { t: "Inicio precoz y bilateral", d: "Afectación simétrica en ambas manos",
            say: "El fenómeno de Raynaud primario es una respuesta vasomotora funcional exagerada sin enfermedad estructural de fondo. Se presenta típicamente en mujeres jóvenes de quince a treinta años de edad, de forma estrictamente simétrica y bilateral en ambas manos." },
          { t: "Pulsos periféricos normales", d: "Sin compromiso de arterias mayores",
            say: "Los pulsos radiales y cubitales son perfectamente simétricos y amplios. No existe patología oclusiva de grandes o medianos vasos, limitándose la alteración a la microcirculación termorreguladora de los pulpejos." },
        ] },
        { title: "Ausencia estricta de daño tisular", tag: "Cero necrosis ni úlceras", kind: "normal", items: [
          { t: "Integridad trófica digital absoluta", d: "Sin úlceras, cicatrices ni esclerodactilia",
            say: "Un criterio cardinal es la total ausencia de daño tisular isquémico. Jamás encontraremos úlceras en los pulpejos, necrosis, pérdida de tejido ni cicatrices puntiformes en un Raynaud primario puro." },
          { t: "Laboratorio y capilaroscopía normales", d: "ANA negativos y asas capilares en horquilla",
            say: "Los anticuerpos antinucleares son rigurosamente negativos o presentan títulos insignificantes. La velocidad de sedimentación globular es normal y la capilaroscopía periungueal muestra asas capilares finas y regulares." },
        ] },
      ],
    },

    {
      type: "points",
      kicker: "Signo de alarma autoinmune",
      title: "Fenómeno de Raynaud Secundario o Síndrome de Raynaud",
      cards: [
        { title: "Banderas rojas de conectivopatía", tag: "Alerta clínica ante inicio tardío", kind: "alert", items: [
          { t: "Inicio sobre los treinta o cuarenta años", d: "Frecuente asimetría entre ambas manos",
            say: "El Raynaud secundario suele debutar en personas mayores de treinta o cuarenta años, afectando a menudo los dedos de forma asimétrica e intensa con episodios muy prolongados y dolorosos que no ceden fácilmente." },
          { t: "Presencia de úlceras o necrosis digital", d: "Complicación trófica de máxima gravedad",
            say: "La aparición de úlceras en los pulpejos de los dedos, pequeñas cicatrices puntiformes en mordedura de rata o gangrena digital es patognomónica de daño microvascular estructural severo por Raynaud secundario." },
        ] },
        { title: "Patologías causales frecuentes", tag: "Esclerosis sistémica y otras", kind: "key", items: [
          { t: "Esclerosis sistémica como principal causa", d: "Precede en años a las manifestaciones cutáneas",
            say: "La esclerosis sistémica es la causa autoinmune más frecuente de Raynaud secundario. En la forma limitada o síndrome de CREST el Raynaud puede preceder por más de una década al engrosamiento de la piel." },
          { t: "Lupus, Sjögren y vasculitis", d: "Siempre solicitar perfil de autoinmunidad",
            say: "Otras etiologías secundarias incluyen el lupus eritematoso sistémico, la enfermedad mixta del tejido conectivo, el síndrome de Sjögren y diversas vasculitis sistémicas con depósito de inmunocomplejos." },
        ] },
      ],
    },

    {
      type: "flow",
      kicker: "Estándar de oro no invasivo",
      title: "Capilaroscopía periungueal: Normal versus Patológica",
      nodes: [
        { id: "inm", col: 0, row: 1, k: "start", t: "Inspección lecho ungueal", s: "Microscopio estereoscópico o dermatoscopio" },
        { id: "nor", col: 1, row: 0, k: "good", t: "Patrón Normal (Primario)", s: "Asas en horquilla regulares y paralelas" },
        { id: "pat", col: 1, row: 2, k: "alert", t: "Patrón Esclerodérmico (Secundario)", s: "Megacapilares y daño endotelial severo" },
        { id: "evo", col: 2, row: 2, k: "risk", t: "Microhemorragias y Áreas Avasculares", s: "Pérdida vascular y riesgo inminente de úlcera" },
      ],
      edges: [
        { from: "inm", to: "nor" },
        { from: "inm", to: "pat" },
        { from: "pat", to: "evo" },
      ],
      steps: [
        { show: ["inm", "nor"], note: "Capilaroscopía normal en Raynaud primario",
          say: "La capilaroscopía periungueal evalúa las asas capilares del lecho de la uña con aumento óptico. En el Raynaud primario se observan asas capilares delgadas, en forma de horquilla regular, perfectamente distribuidas en empalizada y sin pérdida de densidad." },
        { show: ["pat", "evo"], note: "Patrón esclerodérmico en Raynaud secundario",
          say: "En el Raynaud secundario a esclerosis sistémica aparecen dilataciones gigantes llamadas megacapilares, microhemorragias en gota y una progresiva desertificación o pérdida de capilares con extensas áreas avasculares de alto riesgo isquémico." },
      ],
    },

    {
      type: "points",
      kicker: "Etiologías no autoinmunes",
      title: "Causas secundarias ocupacionales, tóxicas y fármacos",
      cards: [
        { title: "Factores ocupacionales y mecánicos", tag: "Vibración y microtraumatismo", kind: "normal", items: [
          { t: "Síndrome de vibración mano-brazo", d: "Uso de martillos neumáticos o motosierras",
            say: "El uso laboral prolongado de herramientas vibratorias como taladros o motosierras daña el endotelio microvascular digital, produciendo el clásico síndrome de vibración de la mano o dedo blanco ocupacional." },
          { t: "Síndrome del martillo hipotenar", d: "Trombosis de la arteria cubital por golpes",
            say: "Golpear objetos duros usando la palma de la mano como martillo lesiona la arteria cubital contra el hueso ganchoso, provocando aneurismas y microémbolos distales hacia los dedos." },
        ] },
        { title: "Fármacos y tóxicos gatillantes", tag: "Contraindicaciones farmacológicas", kind: "pharma", items: [
          { t: "Tabaquismo: vasoconstricción directa", d: "El cese del tabaco es mandatorio e innegociable",
            say: "La nicotina es un potente vasoconstrictor simpático. El cese absoluto del tabaquismo es la primera indicación médica obligatoria en cualquier paciente que consulte por fenómeno de Raynaud." },
          { t: "Fármacos contraindicados en Raynaud", d: "Betabloqueadores y ergotamínicos",
            say: "Los betabloqueadores no cardioselectivos empeoran el vasoespasmo al bloquear los receptores beta dos vasodilatadores. Están formalmente contraindicados, al igual que los derivados ergotamínicos usados en migraña." },
        ] },
      ],
    },

    {
      type: "flow",
      kicker: "Estrategia terapéutica",
      title: "Manejo escalonado: Medidas generales a vasodilatadores",
      nodes: [
        { id: "paso1", col: 0, row: 1, k: "start", t: "Paso 1: Medidas generales de abrigo", s: "Guantes térmicos, evitar frío y cese de tabaco" },
        { id: "paso2", col: 1, row: 1, k: "good", t: "Paso 2: Calcioantagonistas orales", s: "Nifedipino de liberación prolongada 10 a 60 mg" },
        { id: "paso3", col: 2, row: 0, k: "alert", t: "Paso 3: Inhibidores de PDE-5", s: "Sildenafil o Tadalafilo en refractariedad" },
        { id: "paso4", col: 2, row: 2, k: "risk", t: "Paso 4: Prostanoides Endovenosos", s: "Iloprost en úlceras isquémicas graves activas" },
      ],
      edges: [
        { from: "paso1", to: "paso2" },
        { from: "paso2", to: "paso3", label: "si refractario" },
        { from: "paso2", to: "paso4", label: "si necrosis" },
      ],
      steps: [
        { show: ["paso1"], note: "Medidas conservadoras y de abrigo",
          say: "El pilar inicial para todos los pacientes son las medidas no farmacológicas: abrigo corporal general y guantes térmicos, evitar los cambios bruscos de temperatura ambiental y suspender de forma estricta el consumo de cigarrillos." },
        { show: ["paso2"], note: "Calcioantagonistas: primera línea médica",
          say: "Cuando los síntomas son frecuentes o dolorosos, los bloqueadores de los canales de calcio dihidropiridínicos son el tratamiento de primera línea de elección, destacando el nifedipino de liberación retardada en dosis de diez a sesenta miligramos diarios." },
        { show: ["paso3", "paso4"], note: "Terapia avanzada en casos refractarios",
          say: "Si no hay respuesta a los calcioantagonistas o aparecen úlceras digitales activas, se asocian inhibidores de fosfodiesterasa cinco como sildenafil, o análogos endovenosos de prostaciclina como iloprost para rescate isquémico urgente." },
      ],
    },

    {
      type: "table",
      kicker: "Trampas EUNACOM",
      title: "Diagnóstico diferencial: Raynaud Primario vs Raynaud Secundario",
      head: ["Parámetro Clínico", "Raynaud Primario (Enfermedad)", "Raynaud Secundario (Síndrome)"],
      rows: [
        { cells: ["Edad de inicio y sexo", "Mujeres jóvenes entre 15 y 30 años", "Mayores de 30 a 40 años, ambos sexos"],
          say: "Comencemos revisando la edad: el Raynaud primario afecta a mujeres jóvenes entre quince y treinta años, mientras que el secundario suele debutar sobre los treinta a cuarenta años." },
        { cells: ["Simetría clínica", "Estrictamente simétrico y bilateral", "Frecuentemente asimétrico entre los dedos"],
          say: "La simetría es clave: el primario es estrictamente bilateral y simétrico, mientras que el secundario suele comprometer dedos aislados con asimetría llamativa." },
        { cells: ["Daño trófico o úlceras", "AUSENTE (sin daño tisular ni necrosis)", "PRESENTE: Úlceras en pulpejos y cicatrices"],
          say: "Daño trófico: el primario jamás produce úlceras ni necrosis. Si hay una sola úlcera en un pulpejo, es un Raynaud secundario por definición." },
        { cells: ["ANA y Capilaroscopía", "ANA negativos · Capilaroscopía NORMAL", "ANA positivos · Megacapilares y áreas avasculares"],
          say: "Laboratorio: el primario tiene anticuerpos negativos y capilaroscopía normal. El secundario tiene anticuerpos positivos y megacapilares con áreas avasculares." },
      ],
    },

    {
      type: "quiz",
      kicker: "Caso clínico",
      title: "Caso clínico tipo EUNACOM",
      stem: "Mujer de 21 años, estudiante universitaria, consulta por cambios de coloración en los dedos de ambas manos al exponerse al frío invernal. Refiere que los dedos se tornan completamente blancos y fríos, luego azulados y finalmente enrojecidos y calientes al volver a una habitación temperada. Los episodios son simétricos en ambas manos. Al examen físico no se observan úlceras, cicatrices ni esclerodactilia, los pulsos radiales son simétricos y amplios. Los exámenes de laboratorio revelan hemograma, VHS y función renal normales, con anticuerpos antinucleares (ANA) negativos. La capilaroscopía periungueal muestra asas capilares finas y regulares sin dilataciones.",
      question: "¿Cuál es el diagnóstico clínico más probable y cuál es la indicación inicial de elección?",
      options: [
        { letter: "A", text: "Fenómeno de Raynaud primario (Enfermedad de Raynaud); educar en medidas de abrigo, evitar exposición al frío y cese de tabaco si corresponde" },
        { letter: "B", text: "Esclerosis sistémica limitada incipiente; indicar Prednisona 40 mg al día de inmediato" },
        { letter: "C", text: "Trombangiítis obliterante de Buerger; derivar a cirugía vascular para simpatectomía cervical urgente" },
        { letter: "D", text: "Lupus eritematoso sistémico; iniciar hidroxicloroquina y aspirina en dosis bajas" },
        { letter: "E", text: "Fenómeno de Raynaud secundario; iniciar anticoagulación oral con acenocumarol por seis meses" },
      ],
      correct: "A",
      explanation: "El cuadro corresponde a un Fenómeno de Raynaud Primario o Enfermedad de Raynaud: mujer joven de 21 años, episodios trifásicos estrictamente simétricos en ambas manos, ausencia total de lesiones tróficas o úlceras, laboratorio con ANA negativos y capilaroscopía periungueal normal. En esta condición benigna el pilar fundamental del manejo son las medidas no farmacológicas de abrigo y educación para evitar desencadenantes.",
      say: {
        stem: "Caso clínico. Paciente de veintiún años con episodios simétricos de palidez, cianosis y rubor en ambas manos con el frío, sin úlceras digitales, con anticuerpos negativos y capilaroscopía periungueal normal.",
        question: "¿Cuál es el diagnóstico clínico más probable y cuál es la indicación inicial de elección?",
        options: "Las alternativas: Raynaud primario con medidas de abrigo, esclerosis sistémica con prednisona, tromboangeítis con simpatectomía, lupus con hidroxicloroquina, o Raynaud secundario con anticoagulación oral. Piénsalo.",
        answer: "La respuesta correcta es la A. Es un Raynaud primario o funcional típico por su edad, simetría, ausencia de úlceras, anticuerpos antinucleares negativos y capilaroscopía normal. El manejo inicial consiste en medidas de abrigo y protección frente al frío.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2018 · Pregunta 33",
      stem: "Mujer de 38 años consulta por dolor y cambios de coloración trifásicos en los dedos de las manos desencadenados por el frío. Al examen físico se aprecia una pequeña úlcera necrótica dolorosa en el pulpejo del tercer dedo de la mano derecha y pérdida de los pliegues cutáneos dorsales en dedos (esclerodactilia). Los ANA son positivos en dilución 1:320. ¿Qué examen de consultorio o imagen permite evaluar de forma no invasiva la microcirculación periungueal para confirmar conectivopatía?",
      options: [
        { letter: "A", text: "Capilaroscopía periungueal" },
        { letter: "B", text: "Angiografía por sustracción digital de manos" },
        { letter: "C", text: "Resonancia magnética nuclear con gadolinio de muñecas" },
        { letter: "D", text: "Ecografía Doppler carotídea y vertebral bilateral" },
        { letter: "E", text: "Pletismografía de volumen por pulso arterial" },
      ],
      correct: "A",
      explanation: "La capilaroscopía periungueal es la técnica no invasiva estándar de oro para estudiar el fenómeno de Raynaud y descartar esclerosis sistémica precoz. Permite visualizar directamente la morfología de las asas capilares del lecho ungueal, detectando precozmente megacapilares, microhemorragias y áreas avasculares características del patrón esclerodérmico.",
      say: {
        stem: "EUNACOM dos mil dieciocho, pregunta treinta y tres. Mujer de treinta y ocho años con Raynaud, úlcera digital dolorosa en pulpejo y anticuerpos antinucleares positivos en dilución uno en trescientos veinte.",
        question: "¿Qué examen no invasivo permite evaluar la microcirculación periungueal para confirmar conectivopatía?",
        options: "Las opciones: capilaroscopía periungueal, angiografía por sustracción digital, resonancia magnética con contraste, ecografía Doppler carotídea, o pletismografía arterial. Piénsalo.",
        answer: "Es la A. La capilaroscopía periungueal es el examen de elección en el consultorio. Permite observar las asas capilares del lecho ungueal e identificar de inmediato el patrón esclerodérmico con megacapilares y zonas avasculares.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2020 · Pregunta 47",
      stem: "¿Cuál es el fármaco de primera línea de elección para el tratamiento del fenómeno de Raynaud sintomático recurrente que no responde adecuadamente a las medidas generales de abrigo?",
      options: [
        { letter: "A", text: "Propranolol oral en dosis ascendentes" },
        { letter: "B", text: "Bloqueadores de canales de calcio dihidropiridínicos (Nifedipino oral)" },
        { letter: "C", text: "Ergotamina combinada con cafeína" },
        { letter: "D", text: "Prednisona oral a dosis inmunosupresoras" },
        { letter: "E", text: "Metotrexato subcutáneo semanal" },
      ],
      correct: "B",
      explanation: "Los bloqueadores de los canales de calcio dihidropiridínicos (especialmente Nifedipino oral de liberación prolongada a dosis de 10 a 60 mg/día) constituyen el tratamiento farmacológico de primera elección en el fenómeno de Raynaud sintomático. Producen vasodilatación arteriolar periférica disminuyendo la frecuencia e intensidad de los espasmos vasomotores.",
      say: {
        stem: "EUNACOM dos mil veinte, pregunta cuarenta y siete. Se indaga el tratamiento farmacológico inicial del fenómeno de Raynaud.",
        question: "¿Cuál es el fármaco de primera línea de elección para el fenómeno de Raynaud sintomático recurrente tras medidas de abrigo?",
        options: "Las alternativas: propranolol oral, bloqueadores de canales de calcio dihidropiridínicos como nifedipino, ergotamina con cafeína, prednisona oral, o metotrexato subcutáneo. Piénsalo.",
        answer: "La respuesta correcta es la B. Los calcioantagonistas dihidropiridínicos como el nifedipino oral son el tratamiento farmacológico de primera línea por su potente efecto vasodilatador sobre las arteriolas digitales.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2023 · Pregunta 18",
      stem: "¿Cuál de los siguientes fármacos antihipertensivos se encuentra formalmente CONTRAINDICADO en un paciente con diagnóstico de fenómeno de Raynaud debido al riesgo de desencadenar o agravar crisis de vasoespasmo digital severo?",
      options: [
        { letter: "A", text: "Losartán oral" },
        { letter: "B", text: "Enalapril oral" },
        { letter: "C", text: "Amlodipino oral" },
        { letter: "D", text: "Propranolol oral (Betabloqueador no selectivo)" },
        { letter: "E", text: "Hidroclorotiazida oral" },
      ],
      correct: "D",
      explanation: "Los betabloqueadores (especialmente los no cardioselectivos como el propranolol) están formalmente contraindicados en pacientes con fenómeno de Raynaud. Al bloquear los receptores beta-2 adrenérgicos vasculares, predomina el tono alfa-adrenérgico vasoconstrictor, lo que puede precipitar o agravar severamente las crisis de isquemia digital e incluso gatillar necrosis.",
      say: {
        stem: "Pregunta del EUNACOM dos mil veintitrés, pregunta dieciocho. Se evalúan contraindicaciones farmacológicas en patología vascular periférica.",
        question: "¿Cuál de los siguientes fármacos antihipertensivos se encuentra contraindicado en un paciente con fenómeno de Raynaud por riesgo de vasoespasmo severo?",
        options: "Las opciones: losartán, enalapril, amlodipino, propranolol, o hidroclorotiazida. Piénsalo.",
        answer: "Es la D. Los betabloqueadores no selectivos como el propranolol están contraindicados en el fenómeno de Raynaud porque dejan sin oposición los receptores alfa vasoconstrictores periféricos, agravando la isquemia tisular.",
      },
    },

    {
      type: "points",
      kicker: "Cierre",
      title: "Reglas de oro para el examen",
      cards: [
        { title: "Secuencia clínica trifásica", tag: "Blanco, azul y rojo", kind: "criteria", items: [
          { t: "Palidez, cianosis y rubor reactivo", d: "Vasoespasmo isquémico, estasis e hiperemia",
            say: "Repasemos las tres reglas de oro. Primero: el fenómeno de Raynaud es una respuesta vascular trifásica con palidez isquémica, cianosis por estasis desoxigenada y rubor por hiperemia reactiva de reperfusión." },
          { t: "Primario versus Secundario", d: "La úlcera digital y la capilaroscopía marcan la diferencia",
            say: "Segundo: el Raynaud primario es de mujeres jóvenes, simétrico, sin úlceras, con anticuerpos negativos y capilaroscopía normal. Si hay una sola úlcera en un pulpejo o anticuerpos positivos, es secundario a conectivopatía." },
        ] },
        { title: "Capilaroscopía y tratamiento", tag: "Nifedipino y contraindicación de betabloqueo", kind: "pharma", items: [
          { t: "Capilaroscopía como estándar de oro", d: "Megacapilares y áreas avasculares",
            say: "La capilaroscopía periungueal identifica precozmente el patrón esclerodérmico con megacapilares y áreas avasculares mucho antes de que aparezcan las manifestaciones cutáneas mayores." },
          { t: "Nifedipino de elección y jamás betabloqueadores", d: "Calcioantagonistas orales en dosis ascendentes",
            say: "Tercero: el fármaco de primera línea es el nifedipino oral y los betabloqueadores están formalmente contraindicados. Si te llevas una sola idea de hoy: mujer joven simétrica y sin úlceras es primario con abrigo; si hay una úlcera o anticuerpos positivos, capilaroscopía urgente y descarta esclerodermia. Nos vemos en la próxima clase." },
        ] },
      ],
    },
  ],

  pathway: {
    title: "Algoritmo de enfrentamiento clínico: Fenómeno de Raynaud",
    root: N("start", "Sospecha de Fenómeno de Raynaud", "Cambios de coloración distal en dedos gatillados por frío o estrés",
      "Paciente que consulta por palidez o coloración azulada en dedos ante la exposición a bajas temperaturas.",
      ["", N("q", "¿Presencia de banderas rojas (úlceras en pulpejos, necrosis, asimetría o inicio sobre 30 años)?", "Evaluación de daño tisular y riesgo estructural",
        "Se examinan minuciosamente los pulpejos en busca de úlceras o esclerodactilia.",
        ["SÍ: Úlceras, necrosis o inicio tardío", N("alert", "Alta sospecha de Raynaud Secundario (Conectivopatía)", "Solicitar ANA, ENA, perfil esclerodermia y derivar a Capilaroscopía Periungueal",
          "Banderas rojas presentes. Sospecha de esclerosis sistémica u otra conectivopatía. Solicitar anticuerpos y capilaroscopía de inmediato.",
          ["", N("q", "¿Presencia de úlcera isquémica activa o refractariedad a tratamiento?", "Severidad del compromiso microvascular",
            "Se evalúa la gravedad de la isquemia periférica.",
            ["SÍ: Úlcera activa o necrosis", N("refer", "Hospitalización y Rescate Vasodilatador", "Iniciar Iloprost endovenoso o Inhibidores PDE-5 y derivar a Reumatología urgente",
              "Riesgo de amputación digital. Hospitalizar para infusión de prostanoides y manejo avanzado por especialista.")],
            ["NO: Sin úlceras abiertas", N("ok", "Manejo médico con Calcioantagonistas", "Iniciar Nifedipino oral de liberación retardada y seguimiento ambulatorio",
              "Iniciar nifedipino oral a dosis progresivas, asegurando abrigo estricto y cese absoluto del tabaquismo.")])])],
        ["NO: Dedos simétricos, sin úlceras, en mujer joven de 15 a 30 años", N("do", "Sospecha de Fenómeno de Raynaud Primario (Enfermedad funcional)", "Solicitar ANA de tamizaje y Capilaroscopía Periungueal para confirmar benignidad",
          "Cuadro clínico compatible con causa primaria benigna. Se confirman anticuerpos negativos y capilaroscopía normal.",
          ["", N("q", "¿ANA negativos y Capilaroscopía con patrón normal en horquilla?", "Confirmación de normalidad microvascular",
            "Se verifica la ausencia de microangiopatía estructural.",
            ["SÍ: Capilaroscopía normal y ANA (-)", N("ok", "Raynaud Primario confirmado: Medidas de abrigo y educación", "Uso de guantes térmicos, evitar cambios bruscos y proscribir betabloqueadores",
              "Diagnóstico confirmado. No requiere fármacos si es leve. Enfatizar abrigo de manos y pies, y evitar betabloqueadores.")],
            ["NO: Capilaroscopía patológica (megacapilares)", N("refer", "Raynaud Secundario muy precoz", "Derivar a Reumatología para estudio de esclerosis sistémica incipiente",
              "La presencia de megacapilares con o sin ANA positivos diagnostica una esclerosis sistémica muy precoz que requiere seguimiento reumatológico.")])])])]),
  },
};
