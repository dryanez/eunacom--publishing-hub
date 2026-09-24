// Clase 1.10 — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_reumatologia_bloque_2.cjs (reuma-10).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: "reuma-10",
  tier: 2,
  slides: [
    {
      type: "cover",
      subtitle: "Placas discoides con alopecia cicatricial, fotosensibilidad anti-Ro y el respeto renal del lupus farmacológico",
      say: "Bienvenidos. Hoy abordamos las variantes cutáneas del lupus y el lupus inducido por drogas. Aprenderemos a distinguir el lupus discoide crónico, que deja cicatrices atróficas y alopecia irreversible, del lupus cutáneo subagudo fotosensible asociado a anticuerpos anti-Ro y riesgo de bloqueo cardíaco fetal. Finalmente revisaremos el lupus farmacológico, caracterizado por anticuerpos anti-histona y su regla de oro: el respeto absoluto del riñón y del sistema nervioso central. Comencemos.",
    },

    {
      type: "flow",
      kicker: "Espectro cutáneo",
      title: "Tres entidades cutáneas y farmacológicas distintas",
      nodes: [
        { id: "les", col: 0, row: 1, k: "start", t: "Lesión cutánea o sospecha de lupus", s: "Evaluación morfológica y anamnesis farmacológica" },
        { id: "dis", col: 1, row: 0, k: "alert", t: "Lupus Discoide Crónico", s: "Placas atróficas con tapones córneos y cicatriz" },
        { id: "sub", col: 1, row: 1, k: "mech", t: "Lupus Cutáneo Subagudo", s: "Lesiones anulares policíclicas que curan sin cicatriz" },
        { id: "far", col: 1, row: 2, k: "risk", t: "Lupus Inducido por Drogas", s: "Reacción autoinmune gatillada por fármacos" },
        { id: "dif", col: 2, row: 1, k: "good", t: "Diferenciación clínica y serológica", s: "Pronóstico visceral y conducta terapéutica" },
      ],
      edges: [
        { from: "les", to: "dis" },
        { from: "les", to: "sub" },
        { from: "les", to: "far" },
        { from: "dis", to: "dif" },
        { from: "sub", to: "dif" },
        { from: "far", to: "dif" },
      ],
      steps: [
        { show: ["les", "dis"], note: "Lupus discoide cicatricial",
          say: "El lupus eritematoso cutáneo discoide crónico se manifiesta por placas eritematosas redondeadas con hiperqueratosis y atrofia central. Su sello distintivo es que deja cicatrices permanentes y destruye los folículos pilosos del cuero cabelludo de forma irreversible." },
        { show: ["sub"], note: "Lupus subagudo no cicatricial",
          say: "Por el contrario, el lupus cutáneo subagudo produce erupciones anulares o policíclicas fotosensibles en tronco y extremidades que curan sin dejar cicatriz atrófica ni alopecia definitiva, pero con alta correlación serológica." },
        { show: ["far", "dif"], note: "El lupus por medicamentos",
          say: "El lupus inducido por drogas es un cuadro sistémico reversible desencadenado por fármacos como hidralazina o procainamida. Comprender estas diferencias es crucial para el examen y la práctica médica ambulatoria." },
      ],
    },

    {
      type: "points",
      kicker: "Lupus discoide crónico",
      title: "Morfología de la placa y riesgo de alopecia definitiva",
      cards: [
        { title: "Tríada morfológica de la lesión", tag: "Placa en tres zonas concéntricas", kind: "criteria", items: [
          { t: "Borde activo eritematoso sobreelevado", d: "Con telangiectasias periféricas",
            say: "La placa discoide clásica presenta un borde activo inflamatorio con telangiectasias que delimita la lesión en áreas expuestas como mejillas, dorso nasal y pabellones auriculares." },
          { t: "Escama con signo de la tachuela", d: "Tapones córneos foliculares hiperqueratósicos",
            say: "En la superficie presenta una escama adherente gruesa. Al despegarla se aprecian pequeñas prolongaciones córneas que ocupaban los folículos, conocido semiológicamente como el signo de la tachuela." },
          { t: "Centro atrófico despigmentado", d: "Fibrosis irreversible y pérdida de anejos",
            say: "El centro de la placa cicatriza con atrofia dérmica, pérdida de glándulas y despigmentación central permanente que no recupera su aspecto ni elasticidad normal." },
        ] },
        { title: "Alopecia cicatricial en cuero cabelludo", tag: "Daño folicular irreversible", kind: "alert", items: [
          { t: "Destrucción definitiva de los folículos", d: "Placa alopécica lisa y brillante",
            say: "Cuando el lupus discoide afecta el cuero cabelludo, destruye de forma irreversible las unidades foliculares, provocando alopecia cicatricial definitiva donde el pelo nunca volverá a crecer." },
          { t: "Serología habitualmente negativa", d: "ANA negativos en el setenta por ciento",
            say: "A diferencia del lupus sistémico, los pacientes con lupus discoide puro suelen tener anticuerpos antinucleares negativos o en títulos bajos, y menos del diez por ciento evoluciona a compromiso de órganos internos." },
        ] },
      ],
    },

    {
      type: "points",
      kicker: "Lupus cutáneo subagudo",
      title: "Fotosensibilidad, anti-Ro y el bloqueo cardíaco neonatal",
      cards: [
        { title: "Lesiones fotosensibles no cicatriciales", tag: "Distribución en tronco y escote", kind: "criteria", items: [
          { t: "Patrón anular policíclico y papuloescamoso", d: "En escote en V y parte alta de espalda",
            say: "El lupus cutáneo subagudo cursa con placas eritematosas circulares o anulares en zonas fotoexpuestas del tronco, escote y brazos, respetando llamativamente el rostro." },
          { t: "Curación completa sin cicatriz", d: "Puede dejar hipopigmentación transitoria",
            say: "A diferencia del discoide, las lesiones del lupus subagudo resuelven por completo sin dejar cicatrices atróficas ni pérdida definitiva de anejos cutáneos ni alopecia." },
        ] },
        { title: "Asociación a Anti-Ro SSA y riesgo fetal", tag: "Paso transplacentario de IgG", kind: "alert", items: [
          { t: "Anti-Ro positivo en más del ochenta por ciento", d: "Marcador serológico característico",
            say: "Se asocia de forma abrumadora a anticuerpos anti-Ro o SSA positivos. Estos autoanticuerpos de clase IgG atraviesan activamente la barrera placentaria durante la gestación." },
          { t: "Bloqueo auriculoventricular congénito", d: "Necrosis y fibrosis del nodo AV fetal",
            say: "Los anticuerpos anti-Ro maternos lesionan el sistema de conducción cardíaco fetal entre las semanas dieciséis y veinticuatro, provocando un bloqueo auriculoventricular congénito completo e irreversible que requiere marcapasos definitivo al nacer." },
        ] },
      ],
    },

    {
      type: "points",
      kicker: "Lupus neonatal",
      title: "Manifestaciones transitorias versus daño permanente",
      cards: [
        { title: "Manifestaciones cutáneas y hematológicas", tag: "Completamente reversibles", kind: "normal", items: [
          { t: "Lesiones anulares en cara y cuero cabelludo", d: "Desaparecen hacia los seis meses de vida",
            say: "El recién nacido puede presentar placas eritematosas anulares periorbitarias en antifaz. Estas lesiones cutáneas y las citopenias transitorias desaparecen espontáneamente hacia los seis meses, al metabolizarse los anticuerpos maternos." },
          { t: "Buen pronóstico dermatológico", d: "No requieren terapia inmunosupresora agresiva",
            say: "Las lesiones dérmicas neonatales curan sin dejar cicatriz residual, requiriendo únicamente fotoprotección y cuidados locales de la piel infantil." },
        ] },
        { title: "Compromiso cardíaco irreversible", tag: "Bloqueo cardíaco completo", kind: "alert", items: [
          { t: "Bradicardia fetal persistente intraútero", d: "Frecuencia cardíaca menor a cien por minuto",
            say: "El daño del nodo auriculoventricular es definitivo y no cicatriza. El feto presenta bradicardia extrema que puede llevar a hidrops fetal o insuficiencia cardíaca intrauterina." },
          { t: "Implante de marcapasos definitivo", d: "Tratamiento de elección al nacimiento",
            say: "Todo recién nacido con bloqueo cardíaco congénito completo secundario a anti-Ro materno requiere control estrecho en neonatología e implante precoz de marcapasos definitivo." },
        ] },
      ],
    },

    {
      type: "flow",
      kicker: "Lupus farmacológico",
      title: "Fármacos causales y su mecanismo autoinmune",
      nodes: [
        { id: "far", col: 0, row: 1, k: "start", t: "Fármacos de alto riesgo", s: "Exposición prolongada en adultos" },
        { id: "hid", col: 1, row: 0, k: "cause", t: "Hidralazina y Procainamida", s: "Fármacos clásicos de mayor incidencia" },
        { id: "iso", col: 1, row: 2, k: "cause", t: "Isoniazida y Anti-TNF", s: "Otros desencadenantes frecuentes" },
        { id: "his", col: 2, row: 1, k: "mech", t: "Anticuerpos Anti-Histona", s: "Positivos en más del noventa y cinco por ciento" },
        { id: "sus", col: 3, row: 1, k: "good", t: "Resolución al suspender fármaco", s: "Remisión clínica espontánea" },
      ],
      edges: [
        { from: "far", to: "hid" },
        { from: "far", to: "iso" },
        { from: "hid", to: "his" },
        { from: "iso", to: "his" },
        { from: "his", to: "sus" },
      ],
      steps: [
        { show: ["far", "hid", "iso"], note: "Fármacos de mayor riesgo",
          say: "El lupus inducido por drogas es ocasionado principalmente por procainamida e hidralazina, y con menor frecuencia por isoniazida, minociclina o biológicos inhibidores del factor de necrosis tumoral." },
        { show: ["his"], note: "El marcador patognomónico",
          say: "La exposición continua al fármaco desencadena la formación de anticuerpos dirigidos contra las histonas nucleares, estando presentes los anticuerpos anti-histona en más del noventa y cinco por ciento de los afectados." },
        { show: ["sus"], note: "Evolución curativa",
          say: "La regla de oro del manejo es retirar de inmediato el medicamento culpable. Tras la suspensión, las manifestaciones clínicas desaparecen progresivamente en pocas semanas sin dejar secuelas." },
      ],
    },

    {
      type: "points",
      kicker: "La regla de oro del lupus farmacológico",
      title: "Respeto visceral absoluto y serología diferencial",
      cards: [
        { title: "El riñón y el cerebro están a salvo", tag: "Respeto absoluto de órganos vitales", kind: "alert", items: [
          { t: "Ausencia de nefritis lúpica", d: "Sedimento de orina y creatinina normales",
            say: "Esta es la regla de oro que siempre pregunta el EUNACOM: el lupus inducido por drogas respeta rigurosamente el riñón y el sistema nervioso central. No hay proteinuria ni glomerulonefritis proliferativa." },
          { t: "Ausencia de convulsiones y psicosis", d: "Sintomatología limitada a serosas y articulaciones",
            say: "El cuadro se manifiesta únicamente por artralgias simétricas, mialgias, fiebre vespertina y pleuropericarditis leve, sin convulsiones ni alteraciones neuropsiquiátricas mayores." },
        ] },
        { title: "Perfil serológico diferencial", tag: "Anti-ADN y anti-Sm negativos", kind: "key", items: [
          { t: "Anti-ADN de doble hebra negativo", d: "Excluye lupus sistémico clásico",
            say: "En el lupus farmacológico los anticuerpos anti-ADN de doble hebra y el anti-Smith son rigurosamente negativos, y los niveles de complemento sérico C tres y C cuatro son estrictamente normales." },
          { t: "Conducta de elección: suspender el fármaco", d: "No requiere inmunosupresión agresiva",
            say: "No se requieren pulsos de metilprednisolona ni inmunosupresores mayores. Basta con retirar el fármaco causante y usar antiinflamatorios de forma transitoria para aliviar las molestias articulares." },
        ] },
      ],
    },

    {
      type: "table",
      kicker: "Trampas EUNACOM",
      title: "Diagnóstico diferencial: LES vs Cutáneo vs Farmacológico",
      head: ["Condición", "Lesión Cutánea Típica", "Serología Dominante", "Compromiso Renal y Tratamiento"],
      rows: [
        { cells: ["LES Sistémico Clásico", "Eritema malar que respeta surcos nasogenianos", "ANA positivos (>98%) · Anti-Sm específico · Anti-ADN alto", "Muy frecuente y grave (Clase IV) · Hidroxicloroquina de por vida"],
          say: "Comparemos las entidades. Lupus sistémico clásico: eritema malar, anti-ADN y anti-Smith positivos, nefritis frecuente y requiere hidroxicloroquina continua." },
        { cells: ["Lupus Discoide Crónico", "Placas eritematosas con hiperqueratosis y atrofia", "ANA frecuentemente negativos (70%)", "Compromiso renal ausente · Fotoprotección, corticoides locales e hidroxicloroquina"],
          say: "Lupus discoide: placas con tapones córneos y alopecia cicatricial permanente en cuero cabelludo. ANA habitualmente negativos y sin daño renal." },
        { cells: ["Lupus Cutáneo Subagudo", "Lesiones anulares policíclicas fotosensibles no cicatriciales", "Anti-Ro (SSA) positivo en más del 80%", "Riesgo de bloqueo AV congénito fetal · Fotoprotección estricta"],
          say: "Lupus subagudo: lesiones policíclicas fotosensibles que no dejan cicatriz. Se asocia a anti-Ro positivo y riesgo de bloqueo cardíaco congénito en el feto." },
        { cells: ["Lupus Inducido por Drogas", "Exantema macular inespecífico con pleuritis", "Anti-Histona positivo (>95%) · Anti-ADN y Anti-Sm negativos", "RESPETA riñón y cerebro · Tratamiento: suspender el fármaco causante"],
          say: "Lupus farmacológico por hidralazina o procainamida: anti-histona positivo, respeta riñón y cerebro, y cura al suspender el medicamento." },
      ],
    },

    {
      type: "quiz",
      kicker: "Caso clínico",
      title: "Caso clínico tipo EUNACOM",
      stem: "Hombre de 68 años con hipertensión arterial en tratamiento con Hidralazina 100 mg cada 12 horas desde hace 9 meses consulta por 4 semanas de astenia, fiebre de 38 grados, artralgias simétricas en muñecas y manos y dolor torácico de tipo pleurítico. Al examen físico se ausculta frote pericárdico leve y sinovitis en muñecas. Exámenes: creatinina 0.9 mg/dL y sedimento de orina completamente normal sin proteinuria. ANA positivos 1:320, anticuerpos Anti-Histona fuertemente positivos, Anti-dsDNA negativo y complemento C3 y C4 normales.",
      question: "¿Cuál es el diagnóstico más probable y cuál es la conducta médica de elección inmediata?",
      options: [
        { letter: "A", text: "Lupus inducido por drogas secundario a hidralazina y suspender de inmediato el fármaco" },
        { letter: "B", text: "Lupus eritematoso sistémico idiopático y hospitalizar para pulsos de ciclofosfamida" },
        { letter: "C", text: "Endocarditis infecciosa subaguda e iniciar vancomicina con gentamicina" },
        { letter: "D", text: "Artritis reumatoide seronegativa e iniciar metotrexato semanal" },
        { letter: "E", text: "Pericarditis tuberculosa e iniciar terapia cuádruple antibacteriana" },
      ],
      correct: "A",
      explanation: "El cuadro clínico reúne todos los criterios clásicos de un Lupus Inducido por Drogas por hidralazina: presencia de artralgias, serositis (pleuropericarditis) y síntomas constitucionales, con respeto absoluto de la función renal y ausencia de proteinuria. El perfil inmunológico con anticuerpos Anti-Histona fuertemente positivos (>95%), Anti-dsDNA negativo y niveles normales de complemento es diagnóstico. La conducta terapéutica curativa y de primera línea es la suspensión inmediata de la hidralazina.",
      say: {
        stem: "Caso clínico. Paciente hipertenso de sesenta y ocho años que toma hidralazina y consulta por fiebre, artralgias y pleuropericarditis, con orina y creatinina normales, anticuerpos anti-histona positivos y anti-ADN negativo.",
        question: "¿Cuál es el diagnóstico más probable y cuál es la conducta médica de elección inmediata?",
        options: "Las alternativas: lupus inducido por drogas y suspender la hidralazina, lupus sistémico con ciclofosfamida, endocarditis bacteriana, artritis reumatoide, o pericarditis tuberculosa. Piénsalo.",
        answer: "La respuesta correcta es la A. Es el cuadro clásico de lupus inducido por hidralazina, confirmado por anti-histona positivos, complemento normal y respeto renal absoluto. La conducta es suspender de inmediato el medicamento causante.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2018 · Pregunta 39",
      stem: "Hombre de 65 años en tratamiento crónico con Hidralazina por hipertensión arterial refractaria consulta por poliartralgias en manos, astenia y dolor torácico pleurítico de 3 semanas. Los exámenes de laboratorio revelan ANA positivos 1:320 y anticuerpos Anti-Histona positivos en títulos altos. El sedimento de orina es normal sin proteinuria, la función renal es óptima y los anticuerpos Anti-dsDNA son negativos. ¿Cuál es la conducta terapéutica inicial más apropiada?",
      options: [
        { letter: "A", text: "Iniciar pulsos de Ciclofosfamida endovenosa mensual" },
        { letter: "B", text: "Suspender de inmediato la hidralazina" },
        { letter: "C", text: "Indicar prednisona 60 mg al día por 2 años sin retirar fármacos" },
        { letter: "D", text: "Realizar biopsia renal percutánea urgente" },
        { letter: "E", text: "Prescribir metotrexato subcutáneo a dosis máximas" },
      ],
      correct: "B",
      explanation: "El cuadro corresponde a un Lupus Inducido por Drogas secundario a hidralazina, respaldado por la presencia de síntomas sistémicos y articulares con respeto renal, ausencia de anti-dsDNA y presencia característica de anticuerpos anti-histona positivos. La conducta primaria y curativa consiste en la suspensión inmediata del fármaco causante, lo que conduce a la resolución progresiva del cuadro clínico en pocas semanas.",
      say: {
        stem: "Pregunta real del EUNACOM dos mil dieciocho, pregunta treinta y nueve. Paciente en hidralazina que consulta por artralgias y pleuritis con anticuerpos anti-histona positivos y función renal normal.",
        question: "¿Cuál es la conducta terapéutica inicial más apropiada?",
        options: "Las opciones: pulsos de ciclofosfamida mensual, suspender de inmediato la hidralazina, prednisona alta dos años, biopsia renal urgente, o metotrexato subcutáneo. Piénsalo.",
        answer: "La respuesta correcta es la B. El lupus farmacológico cura al retirar el agente causal. Suspender la hidralazina permite que la inflamación remita y los anticuerpos desaparezcan progresivamente sin necesidad de fármacos tóxicos.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2021 · Pregunta 14",
      stem: "Mujer de 32 años embarazada de 18 semanas con diagnóstico de Lupus Cutáneo Subagudo acude a control prenatal. Sus exámenes confirman anticuerpos Anti-Ro (SSA) y Anti-La (SSB) fuertemente positivos. ¿Qué complicación fetal congénita irreversible debe monitorizarse estrictamente mediante ecocardiografía fetal seriada?",
      options: [
        { letter: "A", text: "Tetralogía de Fallot" },
        { letter: "B", text: "Bloqueo auriculoventricular congénito completo" },
        { letter: "C", text: "Agenesia renal unilateral" },
        { letter: "D", text: "Coartación aórtica severa" },
        { letter: "E", text: "Transposición de grandes vasos" },
      ],
      correct: "B",
      explanation: "Los anticuerpos maternos Anti-Ro (SSA) y Anti-La (SSB) de clase IgG atraviesan la barrera placentaria y pueden unirse a las células del sistema de conducción cardíaco fetal en desarrollo, provocando inflamación, necrosis y fibrosis del nodo auriculoventricular. Esto produce un Bloqueo Auriculoventricular Congénito Completo, complicación irreversible que requiere seguimiento ecocardiográfico fetal estrecho y frecuentemente marcapasos definitivo tras el nacimiento.",
      say: {
        stem: "Pregunta del EUNACOM dos mil veintiuno, pregunta catorce. Paciente embarazada de dieciocho semanas con lupus cutáneo subagudo y anticuerpos anti-Ro y anti-La fuertemente positivos.",
        question: "¿Qué complicación fetal congénita irreversible debe monitorizarse estrictamente mediante ecocardiografía fetal seriada?",
        options: "Las opciones: tetralogía de Fallot, bloqueo auriculoventricular congénito completo, agenesia renal, coartación aórtica, o transposición de grandes vasos. Piénsalo.",
        answer: "La respuesta correcta es la B. Los anticuerpos anti-Ro de la madre dañan el tejido de conducción cardíaco del feto entre las semanas dieciséis y veinticuatro de gestación, produciendo bloqueo auriculoventricular completo irreversible.",
      },
    },

    {
      type: "points",
      kicker: "Cierre",
      title: "Reglas de oro para el examen",
      cards: [
        { title: "Lupus discoide y alopecia", tag: "Cicatriz irreversible", kind: "alert", items: [
          { t: "Placas con hiperqueratosis y atrofia", d: "Signo de la tachuela folicular",
            say: "Cerremos con las tres reglas de oro. Primero: el lupus discoide crónico destruye los folículos pilosos produciendo alopecia cicatricial irreversible, con ANA negativos en la gran mayoría y sin daño visceral." },
          { t: "Tratamiento local y sistémico", d: "Fotoprotección y corticoides tópicos",
            say: "Requiere fotoprotección estricta y corticoides tópicos o intralesionales potentes, recurriendo a hidroxicloroquina oral en formas extensas." },
        ] },
        { title: "Lupus subagudo y anti-Ro", tag: "Riesgo obstétrico fetal", kind: "criteria", items: [
          { t: "Lesiones anulares no cicatriciales", d: "En tronco, escote y extremidades",
            say: "Segundo: el lupus cutáneo subagudo se manifiesta por lesiones anulares fotosensibles que no dejan cicatriz y se asocian en más del ochenta por ciento a anticuerpos anti-Ro." },
          { t: "Vigilancia cardíaca fetal seriada", d: "Ecocardiografía entre semanas 16 y 24",
            say: "En embarazadas con anti-Ro positivo es mandatorio el seguimiento ecocardiográfico fetal estricto por riesgo de bloqueo auriculoventricular completo irreversible." },
        ] },
        { title: "Lupus por drogas y respeto renal", tag: "Anti-histona curativo", kind: "key", items: [
          { t: "Respeto absoluto de riñón y cerebro", d: "Causado por hidralazina o procainamida",
            say: "Tercero: el lupus farmacológico presenta anticuerpos anti-histona en más del noventa y cinco por ciento de los casos y se caracteriza por el respeto absoluto de riñón y sistema nervioso central." },
          { t: "Suspensión inmediata curativa", d: "Cede progresivamente en pocas semanas",
            say: "La conducta de elección es retirar el fármaco causante. Si te llevas una sola idea de hoy: el discoide deja cicatriz y calvicie, el subagudo porta anti-Ro y amenaza el corazón del feto, y el farmacológico tiene anti-histonas y perdona el riñón. Nos vemos en la próxima clase." },
        ] },
      ],
    },
  ],

  pathway: {
    title: "Algoritmo de enfrentamiento: Variantes Cutáneas y Lupus Inducido por Drogas",
    root: N("start", "Sospecha de afección lúpica cutánea o farmacológica", "Placas eritematosas, fotosensibilidad o clínica lúpica con fármacos",
      "Paciente que consulta por lesiones cutáneas compatibles con lupus o síntomas sistémicos bajo terapia farmacológica crónica.",
      ["", N("q", "¿Existe antecedente de consumo de fármacos gatillantes como Hidralazina o Procainamida?", "Evaluación farmacológica",
        "Se investiga la exposición a medicamentos inductores de lupus.",
        ["SÍ: Uso de fármaco sospechoso", N("do", "Solicitar Anticuerpos Anti-Histona y función renal", "Verificar respeto renal y complemento C3 y C4",
          "Se solicitan anticuerpos anti-histona, anti-ADN y sedimento de orina.",
          ["", N("q", "¿Anti-Histona positivo con sedimento limpio y Anti-ADN negativo?", "Criterio de lupus farmacológico",
            "Se evalúa la concordancia serológica.",
            ["SÍ: Lupus Inducido por Drogas confirmado", N("ok", "Suspender de inmediato el fármaco causante", "Resolución clínica en pocas semanas sin inmunosupresión mayor",
              "Diagnóstico de lupus farmacológico confirmado. Suspender de inmediato el fármaco inductor; los síntomas remitirán en pocas semanas.")])])],
        ["NO: Sin fármacos gatillantes", N("do", "Evaluar morfología de las placas cutáneas", "Determinar si curan con cicatriz atrófica o sin cicatriz",
          "Se examina clínicamente el patrón morfológico de las lesiones dérmicas.",
          ["", N("q", "¿Placas con hiperqueratosis, tapones córneos y atrofia cicatricial?", "Diferenciación discoide versus subagudo",
            "Se inspecciona la presencia de cicatriz y daño folicular.",
            ["SÍ: Placas discoides cicatriciales", N("ok", "Lupus Eritematoso Cutáneo Crónico Discoide", "Fotoprotección estricta FPS 50+ y corticoides tópicos o intralesionales",
              "Diagnóstico de lupus discoide crónico. Riesgo de alopecia cicatricial definitiva. Indicar fotoprotección estricta, corticoides tópicos potentes e hidroxicloroquina oral si es refractario.")],
            ["NO: Lesiones anulares fotosensibles sin cicatriz", N("alert", "Lupus Cutáneo Subagudo: Solicitar Anti-Ro (SSA)", "Tamizaje de bloqueo AV fetal si existe embarazo",
              "Diagnóstico de lupus cutáneo subagudo. Solicitar anticuerpos anti-Ro y anti-La por alta asociación, y vigilar con ecocardiografía fetal si la paciente se encuentra embarazada.")])])])]),
  },
};
