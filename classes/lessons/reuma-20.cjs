// Clase 1.20 — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_reumatologia_bloque_4.cjs (reuma-20).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: "reuma-20",
  tier: 2,
  slides: [
    {
      type: "cover",
      subtitle: "Aftosis orogenital recurrente, fenómeno de patergia, panuveítis con hipopión y la regla de las cicatrices genitales",
      say: "Bienvenidos a la clase veinte. Cerramos el bloque cuatro con la Enfermedad de Behçet, una vasculitis sistémica muy singular asociada al antígeno HLA-B cincuenta y uno. Aprenderemos a reconocer las aftas orales que curan sin secuelas frente a las aftas genitales que dejan cicatriz atrófica indeleble, la uveítis con hipopión estéril como urgencia visual, el fenómeno de patergia en la piel y el manejo diferenciado con colchicina para las mucosas y biológicos anti-TNF para los ojos. Comencemos.",
    },

    {
      type: "flow",
      kicker: "Inmunopatogenia vascular",
      title: "Vasculitis neutrofílica variable y el alelo HLA-B51",
      nodes: [
        { id: "hla", col: 0, row: 1, k: "start", t: "Asociación genética HLA-B51", s: "Prevalente en la antigua Ruta de la Seda" },
        { id: "neu", col: 1, row: 0, k: "mech", t: "Hiperreactividad neutrofílica", s: "Infiltración inflamatoria de vasos sanguíneos" },
        { id: "vas", col: 2, row: 0, k: "alert", t: "Vasculitis de vaso variable", s: "Compromete arterias y venas de cualquier calibre" },
        { id: "trom", col: 2, row: 2, k: "risk", t: "Trombosis venosa y Aneurismas", s: "Tromboflebitis recurrente y aneurismas pulmonares" },
      ],
      edges: [
        { from: "hla", to: "neu" },
        { from: "neu", to: "vas" },
        { from: "vas", to: "trom" },
      ],
      steps: [
        { show: ["hla", "neu", "vas"], note: "Hiperreactividad neutrofílica innata",
          say: "La enfermedad de Behçet se asocia estrechamente al alelo HLA-B cincuenta y uno en la cuenca mediterránea y Asia. Se caracteriza por una hiperreactividad patológica de la inmunidad innata, donde los neutrófilos activados infiltran la pared vascular produciendo una vasculitis necrotizante no granulomatosa de vasos de cualquier calibre." },
        { show: ["trom"], note: "Compromiso venoso y arterial mayor",
          say: "A diferencia de otras vasculitis que solo atacan arterias, Behçet afecta frecuentemente el territorio venoso con trombosis venosas profundas recurrentes adheridas al endotelio inflamado, y el territorio arterial con temibles aneurismas de la arteria pulmonar con riesgo de hemoptisis letal." },
      ],
    },

    {
      type: "points",
      kicker: "Signos mucosos cardinales",
      title: "Aftas orales versus Aftas genitales: La regla de la cicatriz",
      cards: [
        { title: "Aftas orales: Universales y sin cicatriz", tag: "Criterio obligatorio de sospecha", kind: "criteria", items: [
          { t: "Úlceras orales recurrentes y dolorosas", d: "Al menos tres episodios en un año",
            say: "Las aftas bucales son la manifestación más temprana y constante de la enfermedad, estando presentes en el cien por ciento de los pacientes. Son úlceras superficiales dolorosas de fondo blanquecino y halo eritematoso en labios, encías o lengua." },
          { t: "Curación completa sin dejar cicatriz", d: "Resuelven espontáneamente en una a dos semanas",
            say: "Esta es una regla cardinal de semiología: las aftas orales en Behçet curan en siete a catorce días de forma completa, sin dejar jamás cicatriz residual en la mucosa de la boca." },
        ] },
        { title: "Aftas genitales: Muy dolorosas con cicatriz", tag: "Signo patognomónico permanente", kind: "alert", items: [
          { t: "Úlceras profundas en escroto o vulva", d: "Altamente dolorosas con base necrótica",
            say: "Las aftas genitales se localizan predominantemente en el escroto en los varones o en los labios mayores en las mujeres. Son menos frecuentes pero mucho más profundas, destructivas y exquisitamente dolorosas." },
          { t: "Curación con cicatriz atrófica indeleble", d: "Permite el diagnóstico retrospectivo en la piel genital",
            say: "A diferencia de las aftas de la boca, las úlceras genitales curan siempre dejando una cicatriz blanquecina deprimida o atrófica permanente, cuya búsqueda al examen físico permite confirmar episodios previos pasados por alto." },
        ] },
      ],
    },

    {
      type: "points",
      kicker: "Compromiso ocular y cutáneo",
      title: "Uveítis con hipopión y el Fenómeno de Patergia",
      cards: [
        { title: "Compromiso ocular: Uveítis con hipopión", tag: "Principal causa de discapacidad y ceguera", kind: "alert", items: [
          { t: "Uveítis anterior con hipopión estéril", d: "Nivel de exudado leucocitario en cámara anterior",
            say: "El compromiso ocular más temido es la panuveítis y la uveítis anterior aguda con hipopión: un nivel horizontal blanquecino de pus estéril en la cámara anterior del ojo. Ocurre por acumulación masiva de neutrófilos sin infección bacteriana activa." },
          { t: "Vasculitis retiniana y riesgo de ceguera", d: "Edema macular y oclusiones vasculares de retina",
            say: "La vasculitis retiniana recurrente puede provocar isquemia de retina, neovascularización y pérdida irreversible de la agudeza visual si no se instala de inmediato un tratamiento inmunosupresor agresivo por oftalmología." },
        ] },
        { title: "Fenómeno de Patergia cutánea", tag: "Prueba semiológica de hiperreactividad", kind: "key", items: [
          { t: "Punción dérmica con aguja estéril", d: "Microtraumatismo en la piel del antebrazo",
            say: "El fenómeno de patergia evalúa la respuesta inflamatoria ante un traumatismo mínimo: se pincha la piel volar del antebrazo con una aguja estéril de calibre veinte de forma oblicua." },
          { t: "Aparición de pústula estéril en 24 a 48 horas", d: "Pápula eritematosa o pústula aséptica positiva",
            say: "La prueba se considera francamente positiva si al cabo de veinticuatro a cuarenta y ocho horas se desarrolla una pápula eritematosa o una pústula estéril de más de dos milímetros en el sitio del pinchazo, reflejando hiperquimiotaxis neutrofílica." },
        ] },
      ],
    },

    {
      type: "flow",
      kicker: "Estrategia terapéutica diferenciada",
      title: "Tratamiento según el órgano comprometido",
      nodes: [
        { id: "dx", col: 0, row: 1, k: "start", t: "Enfermedad de Behçet confirmada", s: "Criterios ICBD cumplidos con cuatro o más puntos" },
        { id: "col", col: 1, row: 0, k: "good", t: "Aftas orogenitales y piel: Colchicina", s: "Inhibe quimiotaxis neutrofílica a dosis de 1 a 2 mg" },
        { id: "ocu", col: 1, row: 2, k: "alert", t: "Uveítis grave o compromiso vascular", s: "Amenaza de ceguera o trombosis visceral" },
        { id: "bio", col: 2, row: 2, k: "good", t: "Corticoides más Infliximab o Adalimumab", s: "Inmunosupresión mayor con Anti-TNF precoz" },
      ],
      edges: [
        { from: "dx", to: "col" },
        { from: "dx", to: "ocu" },
        { from: "ocu", to: "bio" },
      ],
      steps: [
        { show: ["dx", "col"], note: "Colchicina para aftas mucocutáneas",
          say: "Para el control de las aftas orales, las aftas genitales y las lesiones cutáneas de eritema nodoso, el fármaco de primera línea de elección es la colchicina oral. Al inhibir la migración y activación de los neutrófilos, reduce notablemente la frecuencia e intensidad de los brotes." },
        { show: ["ocu", "bio"], note: "Terapia biológica agresiva en afección ocular",
          say: "Cuando existe inflamación ocular activa con uveítis, hipopión, vasculitis retiniana o compromiso vascular mayor, la colchicina es insuficiente. Se requiere hospitalización para administrar pulsos de metilprednisolona seguidos de terapia biológica anti-TNF como infliximab o adalimumab." },
      ],
    },

    {
      type: "points",
      kicker: "Manifestaciones sistémicas mayores",
      title: "Neuro-Behçet y complicaciones vasculares graves",
      cards: [
        { title: "Neuro-Behçet: Compromiso del SNC", tag: "Tronco cerebral y senos venosos", kind: "alert", items: [
          { t: "Meningoencefalitis de tronco encefálico", d: "Ataxia, parálisis de pares craneales y piramidalismo",
            say: "La afección parenquimatosa del sistema nervioso central o neuro-Behçet lesiona con predilección el tronco del encéfalo, manifestándose con parálisis de nervios craneales, ataxia cerebelosa progresiva y signos de primera motoneurona." },
          { t: "Trombosis de senos venosos durales", d: "Cefalea intensa con hipertensión endocraneana",
            say: "La inflamación vascular puede provocar trombosis del seno venoso sagital o transverso, presentándose como síndrome de hipertensión endocraneana con edema de papila bilateral que exige resonancia con venografía urgente." },
        ] },
        { title: "Aneurismas arteriales pulmonares", tag: "Causa de hemoptisis exanguinante", kind: "criteria", items: [
          { t: "Aneurismas inflamatorios de arteria pulmonar", d: "Vasculitis destructiva de la pared arterial elástica",
            say: "La formación de aneurismas en las ramas de la arteria pulmonar es la causa cardiovascular de muerte más frecuente en Behçet. Su rotura hacia el árbol bronquial produce hemoptisis masiva y asfixia inmediata." },
          { t: "Inmunosupresión antes de cirugía", d: "Los corticoides y ciclofosfamida evitan la dehiscencia",
            say: "La reparación quirúrgica vascular tiene altísima tasa de fracaso por dehiscencia de suturas y recidiva aneurismática. Por ello, el pilar inicial es el tratamiento médico agresivo con corticoides e inmunosupresores para apagar la inflamación." },
        ] },
      ],
    },

    {
      type: "table",
      kicker: "Trampas EUNACOM",
      title: "Criterios Internacionales para la Enfermedad de Behçet (ICBD)",
      head: ["Manifestación Clínica", "Puntaje Asignado (Corte >= 4)", "Detalle Semiológico Clave"],
      rows: [
        { cells: ["Aftas Bucales Recurrentes", "2 puntos", "Al menos 3 episodios al año · Curan SIN cicatriz"],
          say: "Aftas bucales: suman dos puntos; son dolorosas, recurrentes y curan sin dejar cicatriz en la mucosa." },
        { cells: ["Aftas Genitales Recurrentes", "2 puntos", "En escroto o vulva · Curan DEJANDO cicatriz atrófica"],
          say: "Aftas genitales: suman dos puntos; sumamente dolorosas y curan dejando cicatriz atrófica permanente." },
        { cells: ["Lesiones Oculares (Uveítis)", "2 puntos", "Uveítis anterior con hipopión estéril o panuveítis"],
          say: "Lesiones oculares: suman dos puntos; uveítis con hipopión estéril y vasculitis retiniana amenazante." },
        { cells: ["Fenómeno de Patergia / Piel", "1 punto cada uno", "Pústula estéril a 24-48h · Eritema nodoso en piernas"],
          say: "Patergia y piel: suman un punto cada uno; pústula estéril tras pinchazo con aguja y eritema nodoso." },
      ],
    },

    {
      type: "quiz",
      kicker: "Caso clínico",
      title: "Caso clínico tipo EUNACOM",
      stem: "Hombre de 31 años consulta por dolor ocular derecho, visión borrosa y fotofobia intensa de 24 horas. Como antecedentes refiere haber presentado múltiples episodios de úlceras dolorosas en la boca (4 episodios en el último año) y úlceras en el escroto que le dejaron cicatrices deprimidas. Al examen oftalmológico con lámpara de hendidura se aprecia inyección ciliar profunda y un nivel blanquecino de 1 mm de exudado leucocitario purulento en la porción inferior de la cámara anterior del ojo derecho (hipopión estéril). En las piernas presenta nódulos eritematosos dolorosos compatibles con eritema nodoso.",
      question: "¿Cuál es el diagnóstico clínico más probable y cuál es la conducta terapéutica inmediata?",
      options: [
        { letter: "A", text: "Enfermedad de Behçet con uveítis anterior e hipopión; hospitalizar de inmediato, indicar corticoides sistémicos a dosis altas y derivar a oftalmología para inmunosupresión con biológicos Anti-TNF" },
        { letter: "B", text: "Endoftalmitis bacteriana aguda; realizar vitrectomía anterior urgente y vancomicina intravítrea exclusiva" },
        { letter: "C", text: "Lupus eritematoso sistémico; iniciar hidroxicloroquina oral ambulatoria" },
        { letter: "D", text: "Artritis reactiva con conjuntivitis purulenta; indicar ciprofloxacino en colirio y paracetamol" },
        { letter: "E", text: "Síndrome de Sjögren descompensado; indicar lágrimas artificiales y pilocarpina oral" },
      ],
      correct: "A",
      explanation: "El cuadro clínico reúne los criterios de la Enfermedad de Behçet: aftas orales recurrentes (≥ 3 al año sin cicatriz), aftas genitales escrotales que dejaron cicatriz permanente, lesiones cutáneas de eritema nodoso y una complicación oftalmológica de extrema gravedad: uveítis anterior aguda con hipopión estéril (acumulación de neutrófilos en cámara anterior). Esta manifestación ocular amenaza gravemente la visión y requiere hospitalización inmediata, pulsos de corticoides y terapia inmunosupresora agresiva con biológicos anti-TNF.",
      say: {
        stem: "Caso clínico. Varón de treinta y un años con dolor ocular y fotofobia con nivel de hipopión en cámara anterior, antecedente de aftas orales recurrentes, úlceras en escroto con cicatrices residuales y eritema nodoso en piernas.",
        question: "¿Cuál es el diagnóstico clínico más probable y cuál es la conducta terapéutica inmediata?",
        options: "Las alternativas: enfermedad de Behçet con corticoides sistémicos y terapia biológica anti-TNF, endoftalmitis bacteriana con vitrectomía, lupus con hidroxicloroquina, artritis reactiva con ciprofloxacino, o síndrome de Sjögren. Piénsalo.",
        answer: "La respuesta correcta es la A. Cumple criterios de Behçet con hipopión ocular estéril y cicatrices escrotales. La uveítis con hipopión es una urgencia oftalmológica que exige hospitalización inmediata, corticoides en dosis altas y agentes anti-TNF.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2019 · Pregunta 11",
      stem: "Hombre de 29 años consulta por aftas bucales dolorosas muy recurrentes en labios y encías desde hace 2 años y antecedentes de úlceras dolorosas en escroto que dejaron cicatriz. En la exploración oftalmológica se detecta uveítis anterior con nivel de hipopión en cámara anterior. Al realizar una prueba de punción cutánea con aguja estéril en el antebrazo se aprecia a las 36 horas una pápula eritematosa con una pústula estéril central de 3 mm. ¿Cómo se denomina esta prueba cutánea diagnóstica?",
      options: [
        { letter: "A", text: "Prueba de Mitsuda" },
        { letter: "B", text: "Fenómeno de Patergia" },
        { letter: "C", text: "Signo de Darier" },
        { letter: "D", text: "Prueba de Kveim-Siltzbach" },
        { letter: "E", text: "Signo de Nikolsky" },
      ],
      correct: "B",
      explanation: "El desarrollo de una pápula eritematosa o pústula estéril entre las 24 y 48 horas posteriores a una microagresión traumática con aguja estéril en la piel del antebrazo se denomina Fenómeno de Patergia. Es un hallazgo semiológico característico de la Enfermedad de Behçet y traduce hiperreactividad del sistema inmune innato y neutrofílico.",
      say: {
        stem: "EUNACOM dos mil diecinueve, pregunta once. Paciente con sospecha de enfermedad de Behçet al que se le realiza una punción cutánea con aguja estéril en el antebrazo, observándose a las treinta y seis horas una pústula estéril.",
        question: "¿Cómo se denomina esta prueba cutánea diagnóstica característica?",
        options: "Las opciones: prueba de Mitsuda, fenómeno de patergia, signo de Darier, prueba de Kveim, o signo de Nikolsky. Piénsalo.",
        answer: "Es la B. El fenómeno de patergia consiste en la aparición de una pápula o pústula estéril tras un pinchazo con aguja en la piel, reflejando la hiperreactividad neutrofílica típica de la enfermedad de Behçet.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2022 · Pregunta 44",
      stem: "¿Cuál de las siguientes afirmaciones respecto a las úlceras orales y genitales en la Enfermedad de Behçet es CORRECTA?",
      options: [
        { letter: "A", text: "Las úlceras orales son indoloras y las genitales no duelen" },
        { letter: "B", text: "Las úlceras genitales curan típicamente dejando cicatriz atrófica permanente, mientras que las orales curan sin cicatriz" },
        { letter: "C", text: "Las úlceras genitales se acompañan de adenopatías inguinales supurativas" },
        { letter: "D", text: "Las úlceras orales están presentes en menos del 20% de los pacientes diagnosticados" },
        { letter: "E", text: "El tratamiento de elección de las úlceras orales es aciclovir oral" },
      ],
      correct: "B",
      explanation: "En la Enfermedad de Behçet las aftas bucales están presentes en el 100% de los casos y curan espontáneamente en 7-14 días sin dejar secuelas cicatriciales. En contraste, las aftas genitales (localizadas típicamente en escroto o vulva) son más profundas, sumamente dolorosas y curan dejando una cicatriz blanquecina o atrófica permanente que permite documentar retrospectivamente su presencia.",
      say: {
        stem: "EUNACOM dos mil veintidós, pregunta cuarenta y cuatro. Se evalúan las diferencias clínicas entre las aftas orales y genitales en la enfermedad de Behçet.",
        question: "¿Cuál de las siguientes afirmaciones respecto a las úlceras orales y genitales en Behçet es correcta?",
        options: "Las alternativas: las orales son indoloras, las genitales curan dejando cicatriz atrófica mientras las orales curan sin cicatriz, se acompañan de adenopatías supurativas, las orales se ven en menos del veinte por ciento, o responden a aciclovir. Piénsalo.",
        answer: "La respuesta correcta es la B. Las aftas genitales curan dejando una cicatriz atrófica indeleble muy característica, mientras que las aftas orales curan de forma completa sin dejar cicatriz.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2024 · Pregunta 12",
      stem: "Hombre de 28 años con diagnóstico de Enfermedad de Behçet presenta brotes frecuentes de aftosis oral y genital dolorosa recurrente, sin compromiso ocular, neurológico ni vascular en sus controles periódicos. ¿Cuál es el fármaco de primera línea de elección para prevenir y tratar estas manifestaciones mucocutáneas recurrentes?",
      options: [
        { letter: "A", text: "Ciclofosfamida endovenosa mensual" },
        { letter: "B", text: "Colchicina oral continua" },
        { letter: "C", text: "Infliximab endovenoso bimensual" },
        { letter: "D", text: "Acenocumarol oral ajustado por INR" },
        { letter: "E", text: "Metotrexato en dosis de 25 mg semanales" },
      ],
      correct: "B",
      explanation: "La Colchicina oral (1 a 2 mg al día) constituye el tratamiento farmacológico de primera línea para las manifestaciones mucocutáneas (aftas orales recurrentes, aftas genitales y eritema nodoso) y articulares de la Enfermedad de Behçet. Su mecanismo de acción inhibe la polimerización de microtúbulos y la quimiotaxis excesiva de los neutrófilos. Los agentes biológicos o la ciclofosfamida se reservan para complicaciones graves que amenazan la visión o la vida.",
      say: {
        stem: "EUNACOM dos mil veinticuatro, pregunta doce. Paciente con enfermedad de Behçet que presenta brotes recurrentes de aftas orales y genitales sin compromiso ocular ni orgánico mayor.",
        question: "¿Cuál es el fármaco de primera línea para prevenir y tratar estas manifestaciones mucocutáneas?",
        options: "Las opciones: ciclofosfamida endovenosa, colchicina oral continua, infliximab endovenoso, acenocumarol, o metotrexato semanal. Piénsalo.",
        answer: "Es la B. La colchicina oral continua es el fármaco de primera elección para el manejo de las aftas orales y genitales en Behçet gracias a su capacidad de frenar la quimiotaxis neutrofílica.",
      },
    },

    {
      type: "points",
      kicker: "Cierre",
      title: "Reglas de oro para el examen",
      cards: [
        { title: "Aftosis orogenital y Fenómeno de Patergia", tag: "Cicatriz escrotal y pústula estéril", kind: "criteria", items: [
          { t: "La regla de oro de las cicatrices", d: "Aftas orales sin cicatriz y aftas genitales con cicatriz",
            say: "Revisemos las tres reglas de oro. Primero: las aftas orales son recurrentes y curan sin cicatriz, mientras que las aftas genitales en escroto o vulva curan dejando siempre una cicatriz atrófica permanente." },
          { t: "Patergia como sello neutrofílico", d: "Pústula estéril veinticuatro a cuarenta y ocho horas postpunción",
            say: "Segundo: el fenómeno de patergia consiste en la aparición de una pústula estéril tras un pinchazo con aguja en el antebrazo, reflejando la hiperreactividad neutrofílica ligada al antígeno HLA-B cincuenta y uno." },
        ] },
        { title: "Hipopión y manejo farmacológico", tag: "Colchicina en mucosas y Anti-TNF en ojos", kind: "pharma", items: [
          { t: "Uveítis con hipopión estéril", d: "Nivel de pus en cámara anterior sin bacterias",
            say: "Tercero: la uveítis anterior con hipopión estéril es la gran complicación visual que amenaza la visión del paciente y requiere corticoides con biológicos anti-TNF." },
          { t: "Colchicina de primera línea en piel y mucosas", d: "Reserva de inmunosupresores para órganos nobles",
            say: "El tratamiento parte con colchicina oral para las aftas mucosas y la piel. Si te llevas una sola idea de hoy: aftas orales más aftas genitales con cicatriz y uveítis con hipopión es Behçet; trátalo con colchicina para las mucosas y biológicos anti-TNF si los ojos están en peligro. Nos vemos en la próxima clase." },
        ] },
      ],
    },
  ],

  pathway: {
    title: "Algoritmo de enfrentamiento: Sospecha de Enfermedad de Behçet",
    root: N("start", "Sospecha de Enfermedad de Behçet", "Paciente con aftosis bucal recurrente o uveítis inexplicable",
      "Paciente que consulta por múltiples episodios de aftas orales en el año o dolor ocular agudo.",
      ["", N("q", "¿Presencia de aftas genitales previas (con cicatriz) o uveítis anterior con hipopión?", "Búsqueda de criterios mayores de Behçet",
        "Se examina la zona genital y se realiza exploración ocular especializada.",
        ["SÍ: Aftas genitales con cicatriz o Uveítis", N("do", "Evaluar Criterios Internacionales ICBD (≥ 4 puntos)", "Puntuar aftas orales (2p), genitales (2p), oculares (2p) y realizar prueba de patergia",
          "Alta probabilidad de Behçet. Se suma el puntaje de criterios internacionales y se practica prueba de patergia cutánea.",
          ["", N("q", "¿Compromiso ocular activo (uveítis/hipopión) o compromiso vascular/SNC?", "Estratificación de gravedad y riesgo de daño orgánico",
            "Se evalúa si existe amenaza visual o de órganos nobles.",
            ["SÍ: Compromiso ocular o visceral grave", N("alert", "Urgencia médica: Hospitalización y Terapia Biológica", "Pulsos de Metilprednisolona seguidos de Infliximab/Adalimumab y derivación a Oftalmología",
              "Amenaza visual severa. Hospitalizar de inmediato para corticoides endovenosos en pulsos e inicio de terapia biológica anti-TNF.")],
            ["NO: Compromiso mucocutáneo o articular aislado", N("ok", "Manejo médico con Colchicina oral de primera línea", "Iniciar Colchicina 1 a 2 mg al día más corticoides tópicos en las aftas",
              "Enfermedad limitada a mucosas y piel. Indicar colchicina oral de mantención y controles periódicos para vigilar ojos.")])])],
        ["NO: Solo aftas orales aisladas sin otros signos", N("ok", "Aftosis oral idiopática recurrente común", "Manejo sintomático con anestésicos tópicos y descartar déficit de vitamina B12 o hierro",
          "Sin datos de patología sistémica. Manejo conservador de la aftosis común y control SOS.")])]),
  },
};
