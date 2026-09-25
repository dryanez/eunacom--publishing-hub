// Clase 1.21 — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_reumatologia_bloque_5.cjs (reuma-21).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: "reuma-21",
  tier: 3,
  slides: [
    {
      type: "cover",
      subtitle: "Arteritis de la temporal, neuropatía óptica isquémica, tocilizumab y la enfermedad sin pulsos de Takayasu",
      say: "Bienvenidos a la clase veintiuno. Hoy abordamos las vasculitis de vaso grande: la arteritis de la temporal o de células gigantes y la arteritis de Takayasu. Aprenderemos a reconocer la cefalea temporal de nuevo inicio, la claudicación mandibular, la neuropatía óptica isquémica como emergencia visual absoluta, la regla de oro de iniciar corticoides de inmediato sin esperar la biopsia, el rol del tocilizumab, y la asimetría de pulsos en mujeres jóvenes con Takayasu. Comencemos.",
    },

    {
      type: "flow",
      kicker: "Inmunopatogenia de gran calibre",
      title: "Panarteritis granulomatosa con fragmentación elástica",
      nodes: [
        { id: "adven", col: 0, row: 1, k: "start", t: "Infiltración adventicial precoz", s: "Activación de células dendríticas y macrófagos" },
        { id: "gran", col: 1, row: 0, k: "mech", t: "Panarteritis granulomatosa transmural", s: "Células gigantes multinucleadas y linfocitos T CD cuatro" },
        { id: "elas", col: 2, row: 0, k: "alert", t: "Fragmentación de la lámina elástica", s: "Disrupción de la elástica interna e hiperplasia de la íntima" },
        { id: "ocl", col: 2, row: 2, k: "risk", t: "Oclusión luminal isquémica aguda", s: "Trombosis vascular y ceguera irreversible" },
      ],
      edges: [
        { from: "adven", to: "gran" },
        { from: "gran", to: "elas" },
        { from: "elas", to: "ocl" },
      ],
      steps: [
        { show: ["adven", "gran"], note: "Inflamación transmural granulomatosa",
          say: "La arteritis de células gigantes afecta a ramas de la carótida externa e interna en personas mayores de cincuenta años. Se inicia por la activación de células presentadoras de antígenos en la adventicia, atrayendo linfocitos T cooperadores y macrófagos tisulares que secretan interleuquina uno e interleuquina seis, formando granulomas y células gigantes multinucleadas." },
        { show: ["elas", "ocl"], note: "Destrucción elástica y estenosis luminal",
          say: "La inflamación libera metaloproteinasas que fragmentan y destruyen la lámina elástica interna de la pared arterial. En respuesta reparativa anómala, se desencadena una intensa proliferación de miofibroblastos en la íntima que estenosa la luz del vaso, provocando trombosis e isquemia tisular distal devastadora." },
      ],
    },

    {
      type: "points",
      kicker: "Semiología clínica cardinal",
      title: "Cefalea de nuevo inicio y claudicación mandibular",
      cards: [
        { title: "Cefalea temporal y cuero cabelludo", tag: "Dolor localizado e hiperestesia", kind: "criteria", items: [
          { t: "Cefalea unilateral de reciente comienzo", d: "Dolor sordo frontotemporal continuo en ancianos",
            say: "Todo paciente mayor de cincuenta años que debute con una cefalea de nuevo inicio, típicamente unilateral, persistente y rebelde a analgésicos comunes, debe ser evaluado de inmediato para descartar arteritis de la temporal, especialmente si nunca antes había sufrido dolores de cabeza." },
          { t: "Hipersensibilidad al peinarse el cabello", d: "Alodinia al apoyar la cabeza en la almohada",
            say: "La alodinia o dolor exquisito al rozar el cuero cabelludo con el cepillo al peinarse o al apoyar la cabeza sobre la almohada es un síntoma semiológico clásico producto de la isquemia e inflamación de las ramas temporales superficiales y occipitales." },
        ] },
        { title: "Claudicación mandibular y arteria indurada", tag: "Signo semiológico de máxima especificidad", kind: "alert", items: [
          { t: "Dolor y fatiga maseterina al masticar", d: "Isquemia inducible de arterias maxilares",
            say: "La claudicación mandibular es el signo semiológico más específico de arteritis temporal: el paciente relata dolor y fatiga muscular intensa en los músculos maseteros al masticar alimentos duros como carne o pan, obligándolo a detenerse a mitad de la comida." },
          { t: "Arteria temporal engrosada y sin pulso", d: "Cordón indurado y nodular a la palpación",
            say: "Al palpar la región temporal se aprecia un trayecto arterial engrosado, tortuoso, con nodulaciones dolorosas y disminución o ausencia completa del pulso temporal, acompañado en ocasiones de necrosis isquémica del cuero cabelludo o de la lengua." },
        ] },
      ],
    },

    {
      type: "points",
      kicker: "Emergencia oftalmológica absoluta",
      title: "Neuropatía Óptica Isquémica Anterior Arterítica (NOIAA)",
      cards: [
        { title: "Pérdida visual súbita e indolora", tag: "Urgencia médica que amenaza la visión", kind: "alert", items: [
          { t: "Amaurosis fugax premonitoria", d: "Episodios transitorios de oscurecimiento visual",
            say: "Muchos enfermos refieren episodios previos de amaurosis fugax: pérdida de visión transitoria como una cortina oscura en un ojo que dura pocos minutos y actúa como alarma inminente antes del infarto retiniano definitivo e irreversible." },
          { t: "Ceguera brusca e irreversible", d: "Oclusión de arterias ciliares posteriores cortas",
            say: "La neuropatía óptica isquémica anterior arterítica provoca una pérdida brusca, indolora y devastadora de la agudeza visual. Al fondo de ojo destaca edema de papila pálido y blanquecino con pequeñas hemorragias peripapilares en llama." },
        ] },
        { title: "Riesgo extremo de ceguera bilateral", tag: "Ventana terapéutica de 24 a 48 horas", kind: "alert", items: [
          { t: "Compromiso inminente del ojo contralateral", d: "Riesgo de ceguera bilateral en pocas horas o días",
            say: "El ojo contralateral tiene un riesgo superior al cincuenta por ciento de sufrir el mismo infarto isquémico en las siguientes veinticuatro a cuarenta y ocho horas si no se instala de inmediato una dosis masiva de corticoides sistémicos endovenosos." },
          { t: "Diplopía y parálisis oculomotoras", d: "Isquemia transitoria de pares craneales",
            say: "Hasta un diez por ciento de los pacientes pueden presentar diplopía fluctuante o ptosis palpebral por isquemia del tercer o sexto par craneal, lo que precede con frecuencia al daño irreversible del nervio óptico." },
        ] },
      ],
    },

    {
      type: "flow",
      kicker: "Regla de oro del EUNACOM",
      title: "Corticoides inmediatos: Jamás esperar la biopsia",
      nodes: [
        { id: "sos", col: 0, row: 1, k: "start", t: "Sospecha de Arteritis Temporal", s: "Mayor de cincuenta años con cefalea o claudicación" },
        { id: "cor", col: 1, row: 0, k: "alert", t: "REGLA DE ORO: Corticoides Inmediatos", s: "Pulsos de metilprednisolona si hay síntomas visuales" },
        { id: "eco", col: 1, row: 2, k: "good", t: "Ecografía Doppler (Signo del Halo)", s: "Halo hipoecoico circunferencial en corte transversal" },
        { id: "bx", col: 2, row: 1, k: "good", t: "Biopsia de Arteria Temporal", s: "Segmento de al menos uno coma cinco a dos centímetros" },
      ],
      edges: [
        { from: "sos", to: "cor" },
        { from: "sos", to: "eco" },
        { from: "cor", to: "bx" },
        { from: "eco", to: "bx" },
      ],
      steps: [
        { show: ["sos", "cor"], note: "Iniciar corticoides sin demora alguna",
          say: "Esta es la regla de oro más evaluada en todo el examen: jamás se debe esperar el resultado de la biopsia ni de ningún examen complementario para iniciar corticoides. El tratamiento debe comenzarse en el minuto exacto en que se sospecha la enfermedad para salvar la visión del paciente." },
        { show: ["eco", "bx"], note: "Ecografía Doppler y biopsia quirúrgica",
          say: "La ecografía Doppler de arterias temporales muestra el característico signo del halo hipoecoico circunferencial que traduce edema de la pared. La biopsia quirúrgica de la arteria temporal debe resecar un fragmento amplio de al menos dos centímetros para evitar falsos negativos por lesiones saltatorias." },
      ],
    },

    {
      type: "points",
      kicker: "Técnica histológica y rendimiento",
      title: "Rendimiento y técnica quirúrgica de la Biopsia Temporal",
      cards: [
        { title: "Longitud de la muestra y lesiones saltatorias", tag: "Mínimo uno coma cinco a dos centímetros", kind: "criteria", items: [
          { t: "Fenómeno de lesiones saltatorias (skip lesions)", d: "Segmentos inflamados intercalados con tejido normal",
            say: "La vasculitis no afecta toda la arteria de manera homogénea sino que deja zonas sanas entre los focos inflamados. Tomar una muestra pequeña de pocos milímetros genera falsos negativos; por ello se exige resecar al menos dos centímetros de longitud arterial." },
          { t: "Biopsia contralateral en alta sospecha", d: "Duplica la sensibilidad diagnóstica",
            say: "Si la primera biopsia resulta informada como normal o no concluyente pero el paciente mantiene una alta sospecha clínica con reactantes muy elevados, está indicada la toma de biopsia de la arteria temporal contralateral." },
        ] },
        { title: "Ventana de tiempo para la biopsia", tag: "Hasta dos semanas con corticoides", kind: "key", items: [
          { t: "Persistencia de la histología bajo corticoides", d: "El infiltrado granulomatoso no desaparece de inmediato",
            say: "Los corticoides deben iniciarse de inmediato y no alteran los hallazgos anatomopatológicos típicos durante las primeras una a dos semanas de tratamiento, permitiendo programar la cirugía de biopsia con tranquilidad y seguridad." },
          { t: "Hallazgos histopatológicos diagnósticos", d: "Panarteritis con células gigantes multinucleadas",
            say: "El informe de biopsia confirma el diagnóstico al evidenciar panarteritis necrotizante transmural, células gigantes multinucleadas devorando restos de elastina e hiperplasia concéntrica extrema de la íntima." },
        ] },
      ],
    },

    {
      type: "points",
      kicker: "Criterios y reactantes de fase aguda",
      title: "Elevación extrema de VSG, PCR y Polimialgia asociada",
      cards: [
        { title: "Reactantes de fase aguda masivos", tag: "VSG mayor a cincuenta milímetros por hora", kind: "criteria", items: [
          { t: "Velocidad de sedimentación globular muy acelerada", d: "Típicamente superior a ochenta o cien milímetros por hora",
            say: "La velocidad de sedimentación globular se encuentra masivamente acelerada, superando casi siempre los ochenta a cien milímetros en la primera hora por método de Westergren, acompañada de proteína C reactiva muy elevada y trombocitosis reactiva por interleuquina seis." },
          { t: "Anemia de trastornos crónicos normocítica", d: "Hemoglobina disminuida con ferritina normal o alta",
            say: "Los pacientes suelen presentar anemia normocítica y normocrómica como reflejo de la tormenta inflamatoria sistémica mediada por citoquinas, con elevación moderada de fosfatasas alcalinas de origen hepático en ausencia de colestasia mecánica." },
        ] },
        { title: "Asociación con Polimialgia Reumática", tag: "Coexistencia en la mitad de los casos", kind: "key", items: [
          { t: "Dolor y rigidez matinal de hombros y caderas", d: "Dificultad simétrica para elevar brazos y levantarse",
            say: "Hasta un cincuenta por ciento de los enfermos con arteritis temporal presentan síntomas de polimialgia reumática concomitante, con dolor y rigidez matinal prolongada e invalidante en cinturas escapular y pelviana." },
        ] },
      ],
    },

    {
      type: "points",
      kicker: "Compromiso de grandes vasos",
      title: "Aortitis torácica y aneurismas en Arteritis de Células Gigantes",
      cards: [
        { title: "Aortitis torácica y ramas extracraneales", tag: "Quince a veinte por ciento de los enfermos", kind: "alert", items: [
          { t: "Aortitis torácica ascendente asintomática", d: "Dilatación de la raíz aórtica y riesgo de disección",
            say: "La arteritis de células gigantes no se limita al cráneo: en hasta un veinte por ciento inflama la aorta torácica ascendente. La pérdida de fibras elásticas aórticas predispone a la formación tardía de aneurismas de aorta torácica y disección aórtica mortal." },
          { t: "Seguimiento por imágenes de tórax", d: "Angiotomografía o resonancia cada uno a dos años",
            say: "Se recomienda realizar un estudio vascular de aorta mediante angio-tomografía computarizada o resonancia magnética al diagnóstico y en el seguimiento periódico para pesquisar precozmente la dilatación aneurismática asintomática." },
        ] },
        { title: "Claudicación de miembros superiores", tag: "Afección de arterias subclavias y axilares", kind: "criteria", items: [
          { t: "Isquemia de extremidades superiores", d: "Dolor en brazos con la elevación y trabajo físico",
            say: "Cuando la vasculitis afecta las arterias subclavias o axilares, los pacientes presentan fatiga y dolor en brazos al peinarse o limpiar estantes, con asimetría de pulsos braquiales semejando un síndrome de Takayasu en ancianos." },
        ] },
      ],
    },

    {
      type: "flow",
      kicker: "Protocolo terapéutico y biológicos",
      title: "Tratamiento escalonado y el rol de Tocilizumab",
      nodes: [
        { id: "urg", col: 0, row: 1, k: "start", t: "Estratificación de riesgo visual", s: "Presencia o ausencia de síntomas oculares" },
        { id: "pul", col: 1, row: 0, k: "alert", t: "Con síntomas visuales: Pulsos EV", s: "Metilprednisolona quinientos a mil miligramos por tres días" },
        { id: "ora", col: 1, row: 2, k: "good", t: "Sin síntomas visuales: Prednisona oral", s: "Prednisona oral un miligramo por kilo al día continuo" },
        { id: "toci", col: 2, row: 1, k: "good", t: "Ahorrador de elección: Tocilizumab", s: "Anticuerpo anti-IL-6R en recaídas o alta toxicidad" },
      ],
      edges: [
        { from: "urg", to: "pul", label: "si amaurosis" },
        { from: "urg", to: "ora", label: "si solo cefalea" },
        { from: "pul", to: "toci", label: "recaídas" },
        { from: "ora", to: "toci", label: "recaídas" },
      ],
      steps: [
        { show: ["urg", "pul"], note: "Pulsos endovenosos en riesgo visual",
          say: "Si existen síntomas visuales como amaurosis fugax, visión borrosa o pérdida visual parcial, se hospitaliza de inmediato para infundir pulsos de metilprednisolona endovenosa de quinientos a mil miligramos diarios por tres días consecutivos antes de continuar con la vía oral." },
        { show: ["ora", "toci"], note: "Prednisona oral y Tocilizumab ahorrador",
          say: "Sin síntomas oculares, se inicia prednisona oral a un miligramo por kilo al día. En pacientes con recaídas frecuentes al intentar descender la dosis de esteroides o con efectos adversos severos como diabetes o fracturas osteoporóticas, tocilizumab es el biológico ahorrador de elección." },
      ],
    },

    {
      type: "points",
      kicker: "Vasculitis de grandes vasos en jóvenes",
      title: "Arteritis de Takayasu: La enfermedad sin pulsos",
      cards: [
        { title: "Epidemiología y territorio vascular", tag: "Mujeres jóvenes menores de 40 años", kind: "criteria", items: [
          { t: "Mujeres jóvenes entre quince y treinta años", d: "Afecta el cayado aórtico y sus ramas supraaórticas",
            say: "La arteritis de Takayasu es la contraparte juvenil de la arteritis temporal: predomina abrumadoramente en mujeres jóvenes de quince a treinta años de edad, afectando predominantemente la aorta torácica, aorta abdominal y los grandes troncos arteriales supraaórticos y renales." },
          { t: "Fase inflamatoria sistémica inicial", d: "Fiebre, astenia, pérdida de peso y artralgias",
            say: "Comienza a menudo con una fase inflamatoria insidiosa con febrícula, sudoración nocturna, malestar general y elevación de reactantes de fase aguda antes de que aparezcan las estenosis vasculares definitivas en el examen vascular." },
        ] },
        { title: "Signos clínicos de isquemia y soplos", tag: "Asimetría de pulsos y presión arterial", kind: "alert", items: [
          { t: "Asimetría de pulsos en extremidades superiores", d: "Ausencia o disminución de pulso radial unilateral",
            say: "El hallazgo cardinal es la asimetría de pulsos periféricos y la diferencia de presión arterial mayor a diez o veinte milímetros de mercurio entre ambos brazos, con pulsos radiales apenas perceptibles que motivan el nombre histórico de enfermedad sin pulsos." },
          { t: "Soplos vasculares carotídeos y supraclaviculares", d: "Turbulencia arterial audible por estenosis",
            say: "A la auscultación se detectan soplos sistólicos eyectivos intensos en trayectos carotídeos, fosas supraclaviculares o sobre la aorta abdominal, acompañados de claudicación en brazos al escribir o trabajar y mareos ortostáticos por robo subclavio." },
        ] },
      ],
    },

    {
      type: "flow",
      kicker: "Diagnóstico por imagen y manejo",
      title: "Angio-Resonancia Magnética y revascularización",
      nodes: [
        { id: "taka", col: 0, row: 1, k: "start", t: "Sospecha de Arteritis de Takayasu", s: "Mujer joven con asimetría de pulsos y soplos" },
        { id: "arm", col: 1, row: 0, k: "good", t: "Angio-Resonancia Magnética toracoabdominal", s: "Estudio de elección para aorta y troncos" },
        { id: "med", col: 2, row: 0, k: "good", t: "Corticoides más Inmunosupresores", s: "Prednisona oral más Metotrexato o Anti-TNF" },
        { id: "qx", col: 2, row: 2, k: "alert", t: "Cirugía vascular en fase inactiva", s: "Bypass o angioplastía solo con inflamación apagada" },
      ],
      edges: [
        { from: "taka", to: "arm" },
        { from: "arm", to: "med" },
        { from: "med", to: "qx", label: "tras remisión" },
      ],
      steps: [
        { show: ["taka", "arm"], note: "Angio-RM como imagen de elección",
          say: "El método de imagen de elección para el diagnóstico de la arteritis de Takayasu es la angio-resonancia magnética o la angio-tomografía toracoabdominal, que demuestra el engrosamiento mural inflamatorio concéntrico, las estenosis luminales y las dilataciones aneurismáticas." },
        { show: ["med", "qx"], note: "Inmunosupresión médica y cirugía electiva",
          say: "El tratamiento inicial requiere corticoides a dosis altas asociados a fármacos inmunosupresores como metotrexato o agentes biológicos anti-TNF. Las cirugías de revascularización o angioplastías vasculares solo deben realizarse con la inflamación completamente apagada para evitar la dehiscencia de injertos." },
      ],
    },

    {
      type: "table",
      kicker: "Trampas EUNACOM",
      title: "Diagnóstico diferencial: Arteritis de la Temporal vs Arteritis de Takayasu",
      head: ["Parámetro Clínico", "Arteritis de la Temporal", "Arteritis de Takayasu"],
      rows: [
        { cells: ["Edad típica y sexo", "Mayores de 50 años (pico 70 a 80 años)", "Mujeres jóvenes menores de 40 años"],
          say: "Edad y sexo: la arteritis temporal afecta a personas mayores de cincuenta años, mientras que Takayasu afecta casi exclusivamente a mujeres jóvenes menores de cuarenta años." },
        { cells: ["Vasos afectados", "Ramas de carótida externa (temporal, maxilar)", "Aorta y grandes troncos supraaórticos y renales"],
          say: "Vasos comprometidos: la temporal lesiona ramas craneales de la carótida, mientras que Takayasu compromete la aorta toracoabdominal y los troncos supraaórticos." },
        { cells: ["Clínica distintiva", "Cefalea, claudicación mandibular y amaurosis", "Asimetría de pulsos, soplos y claudicación de brazos"],
          say: "Signos clínicos: la temporal cursa con cefalea, claudicación mandibular y amaurosis; Takayasu se caracteriza por asimetría de pulsos y soplos supraclaviculares." },
        { cells: ["Conducta urgente", "Corticoides INMEDIATOS sin esperar biopsia", "Angio-RM toracoabdominal e inmunosupresión"],
          say: "Conducta: en arteritis temporal se inician corticoides de inmediato para salvar el ojo; en Takayasu se confirma con angio-resonancia y se inicia inmunosupresión." },
      ],
    },

    {
      type: "quiz",
      kicker: "Caso clínico",
      title: "Caso clínico tipo EUNACOM",
      stem: "Hombre de 72 años consulta por cefalea frontotemporal derecha intensa de 3 semanas, acompañada de dolor en la mandíbula al masticar que lo obliga a detenerse durante las comidas y dolor en cuero cabelludo al peinarse. Hace 24 horas presentó un episodio transitorio de pérdida de visión en el ojo derecho de 10 minutos de duración (amaurosis fugax). Al examen físico la arteria temporal derecha se palpa indurada, tortuosa y con pulso disminuido. El laboratorio muestra una VSG de 95 mm/h y PCR de 48 mg/L.",
      question: "¿Cuál es la sospecha diagnóstica principal y cuál es la conducta médica inmediata e ineludible?",
      options: [
        { letter: "A", text: "Arteritis de células gigantes (temporal); hospitalizar de inmediato para iniciar pulsos de corticoides endovenosos sin esperar la biopsia arterial" },
        { letter: "B", text: "Neuralgia del trigémino; iniciar carbamazepina oral y derivar a neurología ambulatoria" },
        { letter: "C", text: "Accidente isquémico transitorio carotídeo; iniciar aspirina 100 mg y solicitar angio-TC cerebral urgente" },
        { letter: "D", text: "Arteritis temporal incipiente; programar biopsia de arteria temporal e iniciar corticoides solo tras recibir el informe histológico" },
        { letter: "E", text: "Cefalea tensional en el adulto mayor; prescribir paracetamol con relajante muscular y reposo" },
      ],
      correct: "A",
      explanation: "El cuadro clínico reúne todos los criterios de la Arteritis de Células Gigantes (Arteritis de la Temporal): paciente > 50 años (72 años), cefalea de nuevo inicio, hipersensibilidad del cuero cabelludo, claudicación mandibular (el síntoma más específico), arteria temporal indurada, VSG > 50 mm/h y un síntoma de alarma oftalmológica extrema: amaurosis fugax. La presencia de síntomas visuales confiere un riesgo inminente de ceguera irreversible bilateral. La conducta médica inmediata e ineludible es hospitalizar e iniciar corticoides en pulsos endovenosos (Metilprednisolona) de forma inmediata, sin esperar la biopsia de arteria temporal.",
      say: {
        stem: "Caso clínico. Paciente de setenta y dos años con cefalea frontotemporal, claudicación mandibular, dolor al peinarse, amaurosis fugax en ojo derecho, arteria temporal indurada y velocidad de sedimentación globular en noventa y cinco milímetros por hora.",
        question: "¿Cuál es la sospecha diagnóstica principal y cuál es la conducta médica inmediata e ineludible?",
        options: "Las alternativas: arteritis de la temporal con corticoides endovenosos inmediatos sin esperar la biopsia, neuralgia del trigémino, accidente isquémico transitorio, arteritis temporal esperando la biopsia para tratar, o cefalea tensional. Piénsalo.",
        answer: "La respuesta correcta es la A. Es una arteritis temporal con amaurosis fugax. Se debe hospitalizar e iniciar de inmediato pulsos de corticoides endovenosos para prevenir la ceguera permanente, sin retrasar el tratamiento esperando la biopsia.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM · Ahorrador de corticoides en Arteritis Temporal",
      stem: "En un paciente de 70 años con arteritis de células gigantes que ha presentado múltiples recaídas al intentar reducir la dosis de prednisona por debajo de 20 mg/día, desarrollando además fractura vertebral osteoporótica y diabetes inducida por corticoides. ¿Cuál es el fármaco biológico modificador de la enfermedad de primera línea con aprobación formal para actuar como ahorrador de corticoides en esta patología?",
      options: [
        { letter: "A", text: "Infliximab (anti-TNF alfa)" },
        { letter: "B", text: "Tocilizumab (antagonista del receptor de interleucina-6)" },
        { letter: "C", text: "Rituximab (anti-CD20 de células B)" },
        { letter: "D", text: "Anakinra (antagonista del receptor de interleucina-1)" },
        { letter: "E", text: "Secukinumab (inhibidor de interleucina-17A)" },
      ],
      correct: "B",
      explanation: "Tocilizumab es un anticuerpo monoclonal humanizado dirigido contra el receptor de la interleucina-6 (IL-6R). El ensayo pivotal GiACTA demostró que la adición de Tocilizumab permite alcanzar y sostener la remisión libre de corticoides en más del 50% de los pacientes con arteritis de células gigantes, reduciendo sustancialmente la dosis acumulada de glucocorticoides y sus severos efectos adversos osteoporóticos y metabólicos.",
      say: {
        stem: "Pregunta sobre terapia biológica en vasculitis de vaso grande. Paciente anciano con arteritis temporal y recaídas continuas con fractura osteoporótica y diabetes inducida por corticoides.",
        question: "¿Cuál es el fármaco biológico modificador de primera línea con aprobación formal como ahorrador de corticoides en esta patología?",
        options: "Las opciones: infliximab, tocilizumab antagonista del receptor de interleuquina seis, rituximab, anakinra, o secukinumab. Piénsalo.",
        answer: "Es la B. Tocilizumab, anticuerpo dirigido contra el receptor de interleuquina seis, es el fármaco biológico de elección y formalmente aprobado como ahorrador de corticoides en arteritis de células gigantes.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM · Sospecha clínica de Arteritis de Takayasu",
      stem: "Mujer de 26 años consulta por astenia, mareos posturales y parestesias progresivas en el brazo derecho al escribir o trabajar en el teclado. Al examen físico se constata presión arterial de 135/85 mmHg en el brazo izquierdo y 95/60 mmHg en el brazo derecho (diferencia de 40 mmHg), con pulso radial derecho apenas perceptible. A la auscultación se detecta un soplo sistólico eyectivo intenso en la región supraclavicular derecha y en el trayecto carotídeo. La VSG se encuentra en 65 mm/h y la PCR en 32 mg/L. ¿Cuál es la sospecha diagnóstica principal y el método de imagen vascular de elección para confirmar el diagnóstico?",
      options: [
        { letter: "A", text: "Enfermedad de Kawasaki · Ecocardiograma transtorácico con foco en arterias coronarias" },
        { letter: "B", text: "Poliarteritis Nodosa · Biopsia de nervio sural y piel" },
        { letter: "C", text: "Arteritis de Takayasu · Angio-Resonancia Magnética (o Angio-TC) de aorta y troncos supraaórticos" },
        { letter: "D", text: "Síndrome de Raynaud primario · Capilaroscopía periungueal" },
        { letter: "E", text: "Granulomatosis con Poliangeítis · Radiografía simple de tórax y senos paranasales" },
      ],
      correct: "C",
      explanation: "El cuadro clínico de una mujer joven (< 40 años) con síntomas isquémicos en extremidades superiores, marcada asimetría de pulsos periféricos y de presión arterial (> 10-20 mmHg de diferencia entre ambos brazos), soplos vasculares carotídeos/supraclaviculares y reactantes de fase aguda elevados es patognomónico de la Arteritis de Takayasu (\"enfermedad sin pulsos\"). El estudio de elección es la Angio-RM o Angio-TC toracoabdominal, que evidencia engrosamiento parietal inflamatorio, estenosis o aneurismas en la aorta y sus ramas.",
      say: {
        stem: "Pregunta sobre diagnóstico de vasculitis de vaso grande. Mujer de veintiséis años con mareos, claudicación de brazo derecho, diferencia de presión de cuarenta milímetros de mercurio entre ambos brazos, soplos y reactantes elevados.",
        question: "¿Cuál es la sospecha diagnóstica principal y el método de imagen vascular de elección para confirmarla?",
        options: "Las alternativas: Kawasaki con ecocardiograma, poliarteritis nodosa con biopsia de nervio, arteritis de Takayasu con angio-resonancia magnética, Raynaud primario con capilaroscopía, o granulomatosis con radiografía. Piénsalo.",
        answer: "La respuesta correcta es la C. Es una arteritis de Takayasu típica en mujer joven con asimetría de pulsos y presión braquial. El método diagnóstico de elección es la angio-resonancia magnética de aorta y troncos supraaórticos.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM · Semiología en Arteritis de Células Gigantes",
      stem: "¿Cuál de los siguientes signos o síntomas clínicos presenta la mayor especificidad semiológica para confirmar isquemia vascular craneal activa en un paciente con sospecha de Arteritis de la Temporal?",
      options: [
        { letter: "A", text: "Cefalea holocraneana pulsátil" },
        { letter: "B", text: "Claudicación mandibular al masticar" },
        { letter: "C", text: "Mialgias proximales en cinturas" },
        { letter: "D", text: "Fiebre vespertina de origen desconocido" },
        { letter: "E", text: "Sudoración nocturna profusa" },
      ],
      correct: "B",
      explanation: "La claudicación mandibular (dolor y fatiga de los músculos maseteros al masticar que cede con el reposo) es el síntoma clínico más específico de la arteritis de la temporal, reflejando isquemia inducible de las arterias maxilares y linguales. Los otros síntomas son muy frecuentes pero poco específicos.",
      say: {
        stem: "Pregunta de semiología reumatológica. Se evalúa el valor diagnóstico de los síntomas en la arteritis de células gigantes.",
        question: "¿Cuál de los siguientes signos o síntomas clínicos presenta la mayor especificidad semiológica para isquemia craneal en arteritis de la temporal?",
        options: "Las opciones: cefalea holocraneana, claudicación mandibular al masticar, mialgias proximales, fiebre de origen desconocido, o sudoración nocturna. Piénsalo.",
        answer: "Es la B. La claudicación mandibular al masticar alimentos es el síntoma con mayor especificidad clínica para el diagnóstico de arteritis de células gigantes.",
      },
    },

    {
      type: "points",
      kicker: "Cierre",
      title: "Reglas de oro para el examen",
      cards: [
        { title: "Arteritis temporal y emergencia visual", tag: "Corticoides inmediatos sin demora", kind: "alert", items: [
          { t: "Regla de oro: Jamás esperar la biopsia", d: "Iniciar corticoides en el momento exacto de la sospecha",
            say: "Cerramos con las tres reglas de oro. Primero: ante sospecha de arteritis temporal en mayores de cincuenta años con cefalea o claudicación mandibular, los corticoides se inician de inmediato para salvar el ojo, sin esperar la biopsia." },
          { t: "Pulsos de metilprednisolona en amaurosis", d: "Urgencia oftalmológica para proteger el ojo contralateral",
            say: "Si el paciente presenta amaurosis fugax o pérdida visual, se hospitaliza para administrar pulsos endovenosos de metilprednisolona de quinientos a mil miligramos por tres días, evitando el infarto bilateral." },
        ] },
        { title: "Tocilizumab y Arteritis de Takayasu", tag: "Anti-IL-6 y asimetría de pulsos en jóvenes", kind: "pharma", items: [
          { t: "Tocilizumab como ahorrador de primera línea", d: "Anticuerpo anti-IL-6R en recaídas y toxicidad esteroidal",
            say: "Segundo: tocilizumab es el fármaco biológico de elección como ahorrador de corticoides en arteritis temporal refractaria con osteoporosis o diabetes inducida." },
          { t: "Takayasu en mujeres jóvenes sin pulsos", d: "Diferencia de presión mayor a diez mmHg y Angio-RM",
            say: "Tercero: mujer joven con claudicación de brazos, asimetría de pulsos braquiales y soplos es arteritis de Takayasu; el estudio de elección es la angio-resonancia magnética. Si te llevas una sola idea de hoy: en arteritis temporal los corticoides van primero y la biopsia después para evitar la ceguera; y en mujeres jóvenes con pulsos asimétricos piensa en Takayasu. Nos vemos en la próxima clase." },
        ] },
      ],
    },
  ],

  pathway: {
    title: "Algoritmo de emergencia: Vasculitis de Gran Calibre (Temporal y Takayasu)",
    root: N("start", "Sospecha de Vasculitis de Gran Calibre", "Cefalea en anciano o asimetría de pulsos en mujer joven",
      "Paciente que consulta por cefalea temporal nueva con claudicación o síntomas isquémicos en extremidades superiores.",
      ["", N("q", "¿Paciente mayor de 50 años con cefalea temporal, claudicación mandibular y VSG alta?", "Diferenciación por grupo etario y territorio",
        "Se evalúa si la clínica corresponde a ramas craneales en adultos mayores o a troncos aórticos en jóvenes.",
        ["SÍ: Mayor de 50 años con cefalea y claudicación", N("alert", "Sospecha de Arteritis de la Temporal (Células Gigantes)", "REGLA DE ORO: Iniciar Corticoides de Inmediato para salvar la visión. No esperar biopsia",
          "Emergencia médica. Se inicia corticoterapia inmediata y se programa ecografía o biopsia.",
          ["", N("q", "¿Presencia de síntomas visuales agudos (amaurosis fugax o pérdida de visión)?", "Estratificación de riesgo oftalmológico inminente",
            "Se evalúa la presencia de neuropatía óptica isquémica.",
            ["SÍ: Síntomas visuales presentes", N("do", "Hospitalización y Pulsos de Metilprednisolona EV", "Metilprednisolona 500 a 1000 mg EV al día por 3 días, luego Prednisona 1 mg/kg/día",
              "Riesgo de ceguera bilateral. Hospitalizar de urgencia para pulsos endovenosos y biopsia diferida.")],
            ["NO: Sin compromiso visual activo", N("ok", "Prednisona oral 1 mg/kg/día y Biopsia de Arteria Temporal", "Programar biopsia quirúrgica (segmento ≥ 1.5-2 cm) en los próximos 7 a 14 días",
              "Iniciar prednisona oral a dosis plenas y coordinar biopsia quirúrgica sin suspender el tratamiento.")])])],
        ["NO: Mujer joven < 40 años con asimetría de pulsos braquiales y soplos", N("do", "Sospecha de Arteritis de Takayasu (Enfermedad sin pulsos)", "Solicitar Angio-Resonancia Magnética de aorta y troncos supraaórticos",
          "Sospecha de Takayasu en mujer joven. Confirmar estenosis o engrosamiento parietal aórtico.",
          ["", N("q", "¿Angio-RM demuestra engrosamiento parietal y estenosis en ramas de la aorta?", "Confirmación angiográfica no invasiva",
            "Se revisa la integridad del cayado aórtico y troncos supraaórticos.",
            ["SÍ: Hallazgos confirmatorios de Takayasu", N("ok", "Tratamiento con Prednisona a dosis plenas más Inmunosupresor", "Asociar Metotrexato o Anti-TNF y reservar cirugía para fase inactiva",
              "Diagnóstico confirmado. Indicar corticoides en dosis altas más inmunosupresores para apagar la inflamación vascular.")],
            ["NO: Angio-RM normal sin vasculitis", N("refer", "Descartar síndrome del opérculo torácico o coartación aórtica", "Derivar a cirugía vascular para evaluación hemodinámica estructural",
              "Sin evidencia de vasculitis aórtica. Evaluar causas compresivas mecánicas o congénitas.")])])])]),
  },
};
