// Clase 1.13 — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_reumatologia_bloque_3.cjs (reuma-13).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: "reuma-13",
  tier: 3,
  slides: [
    {
      type: "cover",
      subtitle: "Heliotropo y Gottron, citotoxicidad versus complemento y la regla de oro del tamizaje de cáncer oculto",
      say: "Bienvenidos. Hoy abordamos las miopatías inflamatorias autoinmunes: la polimiositis y la dermatomiositis. Aprenderemos a distinguir su cuadro clínico caracterizado por debilidad proximal simétrica de cinturas con respeto estricto de los músculos oculares, las lesiones cutáneas patognomónicas como el eritema en heliotropo y las pápulas de Gottron, el síndrome antisintetasa por anticuerpos anti-Jo uno, y la regla de oro oncológica ineludible en el EUNACOM: el tamizaje de cáncer oculto en todo adulto con dermatomiositis. Comencemos.",
    },

    {
      type: "flow",
      kicker: "Inmunopatogenia comparada",
      title: "Dos mecanismos distintos bajo una misma debilidad",
      nodes: [
        { id: "dm", col: 0, row: 0, k: "start", t: "Dermatomiositis (DM)", s: "Microangiopatía mediada por complemento e inmunocomplejos" },
        { id: "pm", col: 0, row: 2, k: "start", t: "Polimiositis (PM)", s: "Citotoxicidad celular directa por linfocitos T CD ocho" },
        { id: "end", col: 1, row: 0, k: "mech", t: "Ataque capilar perimisial", s: "Depósito de complejo C cinco b nueve y linfocitos CD cuatro" },
        { id: "fib", col: 1, row: 2, k: "mech", t: "Invasión endomisial intrafascicular", s: "Perforación de miofibras que expresan MHC clase uno" },
        { id: "atr", col: 2, row: 0, k: "alert", t: "Atrofia perifascicular típica", s: "Isquemia y daño en la periferia del fascículo" },
        { id: "nec", col: 2, row: 2, k: "alert", t: "Necrosis celular difusa", s: "Destrucción miocítica sin afección de la piel" },
      ],
      edges: [
        { from: "dm", to: "end" },
        { from: "pm", to: "fib" },
        { from: "end", to: "atr" },
        { from: "fib", to: "nec" },
      ],
      steps: [
        { show: ["dm", "end", "atr"], note: "Dermatomiositis: daño vascular por complemento",
          say: "La dermatomiositis es en realidad una microangiopatía vascular mediada por anticuerpos y complemento. Se deposita el complejo lítico de ataque a la membrana en los capilares endomisiales, atrayendo linfocitos CD cuatro y células B en el perimisio. Esto conduce a una característica atrofia perifascicular por hipoperfusión e isquemia capilar." },
        { show: ["pm", "fib", "nec"], note: "Polimiositis: ataque celular citotóxico directo",
          say: "Por el contrario, la polimiositis es una agresión celular pura. Las fibras musculares no necróticas expresan de forma anómala antígenos de histocompatibilidad clase uno. Esto gatilla que sean invadidas y perforadas directamente dentro del fascículo por linfocitos T citotóxicos CD ocho antígeno específicos y macrófagos tisulares." },
      ],
    },

    {
      type: "points",
      kicker: "Cuadro muscular",
      title: "Debilidad proximal simétrica y respeto ocular",
      cards: [
        { title: "Debilidad de cinturas proximales", tag: "Cintura escapular y pelviana", kind: "criteria", items: [
          { t: "Dificultad para levantarse y peinarse", d: "Subir escaleras o peinarse el cabello",
            say: "La debilidad muscular es bilateral, simétrica y de predominio proximal en hombros y caderas. Los pacientes refieren dificultad para levantarse de una silla sin apoyarse con los brazos, subir escalones o levantar los brazos para peinarse y alcanzar repisas altas." },
          { t: "Fuerza distal conservada", d: "Prensión manual y pies normales al inicio",
            say: "La fuerza distal de manos y pies se mantiene perfectamente conservada en las etapas iniciales. Este hallazgo clínico es fundamental para diferenciarla con rapidez de las polineuropatías periféricas desmielinizantes, las cuales comprometen antes la fuerza en pies y manos." },
        ] },
        { title: "Regla de oro: Músculos respetados", tag: "Clave para diferenciar de miastenia", kind: "alert", items: [
          { t: "Respeto absoluto de músculos oculares", d: "Sin ptosis palpebral ni diplopía",
            say: "Esta es una regla cardinal del examen: la polimiositis y la dermatomiositis respetan de forma estricta los músculos extraoculares y la musculatura facial. Si un paciente tiene ptosis palpebral o visión doble fluctuante, orienta de inmediato a miastenia gravis." },
          { t: "Disfagia orofaríngea alta de alarma", d: "Compromiso de musculatura estriada faríngea",
            say: "El compromiso de la musculatura faríngea y esofágica superior estriada produce disfagia orofaríngea para líquidos y disfonía. Este es un signo de severidad extrema por el altísimo riesgo de neumonía por aspiración que amenaza la vida del paciente." },
        ] },
      ],
    },

    {
      type: "points",
      kicker: "Signos cutáneos patognomónicos",
      title: "Eritema en heliotropo y pápulas de Gottron",
      cards: [
        { title: "Eritema en heliotropo", tag: "Párpados violáceos patognomónicos", kind: "alert", items: [
          { t: "Coloración violácea periorbitaria", d: "Con edema blando palpebral bilateral",
            say: "El eritema en heliotropo consiste en una coloración violácea característica en los párpados superiores y la zona periorbitaria, habitualmente acompañada de edema blando que confiere un aspecto aborregado muy llamativo a la mirada del enfermo." },
          { t: "Patognomónico de dermatomiositis", d: "Presente en la gran mayoría de los casos",
            say: "Es una lesión dermatológica prácticamente patognomónica que permite establecer el diagnóstico clínico certero de dermatomiositis desde la inspección inicial, mucho antes de recibir las enzimas musculares o el informe de la biopsia." },
        ] },
        { title: "Pápulas y signo de Gottron", tag: "Erupciones en nudillos articulares", kind: "key", items: [
          { t: "Pápulas violáceas en articulaciones de manos", d: "Sobre metacarpofalángicas e interfalángicas",
            say: "Las pápulas de Gottron son placas o pápulas eritematovioláceas sobreelevadas y descamativas que se ubican simétricamente sobre el dorso de las articulaciones metacarpofalángicas e interfalángicas de las manos, respetando las falanges intermedias." },
          { t: "Signo de Gottron en codos y rodillas", d: "Superficies extensoras articulares",
            say: "Cuando estas lesiones eritematosas descamativas aparecen en las superficies extensoras de los codos o las rodillas se denominan signo de Gottron, sumándose al signo del chal en la espalda superior y al signo en uve en el escote anterior." },
        ] },
      ],
    },

    {
      type: "points",
      kicker: "Compromiso extramuscular",
      title: "Enfermedad pulmonar intersticial y riesgo de disfagia",
      cards: [
        { title: "Enfermedad pulmonar intersticial difusa", tag: "Principal causa de morbimortalidad", kind: "alert", items: [
          { t: "Neumopatía intersticial y disnea", d: "Tos seca y crepitaciones velcro bibasales",
            say: "La afectación pulmonar es la causa principal de muerte no neoplásica en miopatías. Se manifiesta con disnea de esfuerzo progresiva y tos seca irritativa, requiriendo siempre auscultación atenta en busca de crujidos tipo velcro bibasales." },
          { t: "Patrón de vidrio esmerilado en tomografía", d: "Compromiso bibasal reticular tomográfico",
            say: "La tomografía computarizada pulmonar de alta resolución demuestra infiltrados bibasales reticulares o en vidrio esmerilado, obligando a solicitar pruebas de función pulmonar seriadas con difusión de monóxido de carbono para monitorizar la respuesta." },
        ] },
        { title: "Disfagia y compromiso cardíaco", tag: "Signos clínicos de severidad extrema", kind: "criteria", items: [
          { t: "Disfagia de transferencia orofaríngea", d: "Paresia del tercio superior del esófago",
            say: "La afección del tercio superior del esófago y de los músculos constrictores faríngeos produce atragantamiento frecuente y regurgitación nasal, justificando hospitalización inmediata con régimen cero y soporte enteral si existe riesgo aspirativo." },
          { t: "Afectación miocárdica y arritmias", d: "Miocarditis y trastornos de conducción",
            say: "El miocardio también es músculo estriado y puede sufrir inflamación subclínica. Es mandatorio solicitar electrocardiograma basal a todo paciente para pesquisar arritmias o bloqueos de conducción antes de iniciar inmunosupresores." },
        ] },
      ],
    },

    {
      type: "flow",
      kicker: "Perfil serológico",
      title: "Síndrome antisintetasa y anticuerpos específicos",
      nodes: [
        { id: "ana", col: 0, row: 1, k: "start", t: "Autoanticuerpos específicos de miositis", s: "Definen fenotipos clínicos y pronósticos" },
        { id: "jo1", col: 1, row: 0, k: "alert", t: "Anti-Jo uno (Histidil-tRNA)", s: "Síndrome Antisintetasa característico" },
        { id: "mi2", col: 1, row: 1, k: "good", t: "Anti-Mi dos específico", s: "Dermatomiositis clásica con excelente respuesta" },
        { id: "tif", col: 1, row: 2, k: "risk", t: "Anti-TIF uno gamma", s: "Asociación extrema a Cáncer Oculto" },
        { id: "epi", col: 2, row: 0, k: "alert", t: "Fibrosis pulmonar severa (EPID)", s: "Manos de mecánico y fenómeno de Raynaud" },
      ],
      edges: [
        { from: "ana", to: "jo1" },
        { from: "ana", to: "mi2" },
        { from: "ana", to: "tif" },
        { from: "jo1", to: "epi" },
      ],
      steps: [
        { show: ["ana", "jo1", "epi"], note: "El Síndrome Antisintetasa",
          say: "El anticuerpo anti-Jo uno es el más frecuente y define el temido síndrome antisintetasa: una combinación de miositis inflamatoria, enfermedad pulmonar intersticial difusa de rápida progresión, fenómeno de Raynaud, artritis no erosiva y manos de mecánico con dolorosas fisuras laterales." },
        { show: ["mi2"], note: "Anti-Mi dos y excelente respuesta",
          say: "El anticuerpo anti-Mi dos es altamente específico de la dermatomiositis cutánea clásica. Se correlaciona clínicamente con un eritema florido, una respuesta terapéutica muy favorable al uso de corticoides y un riesgo notablemente bajo de neoplasia oculta." },
        { show: ["tif"], note: "Anti-TIF uno gamma y sospecha tumoral",
          say: "En cambio, los anticuerpos anti-TIF uno gamma y anti-NXP dos en personas adultas se asocian de forma muy estrecha con neoplasias malignas ocultas, exigiendo un protocolo de cribado oncológico intensivo e inmediato." },
      ],
    },

    {
      type: "points",
      kicker: "Regla de oro oncológica",
      title: "Tamizaje exhaustivo de neoplasia oculta en adultos",
      cards: [
        { title: "Asociación paraneoplásica mayor", tag: "Veinticinco a treinta por ciento de casos", kind: "alert", items: [
          { t: "Síndrome paraneoplásico en el adulto", d: "Riesgo máximo en mayores de cincuenta años",
            say: "Esta es la regla de oro que jamás debes olvidar: hasta un treinta por ciento de los adultos con dermatomiositis presentan una neoplasia maligna oculta subyacente. La miositis actúa como un verdadero síndrome paraneoplásico de presentación." },
          { t: "Cánceres más prevalentes", d: "Ovario, mama, pulmón, colon y próstata",
            say: "Las neoplasias más fuertemente asociadas son el cáncer de ovario en mujeres, seguido por cáncer de mama, neoplasias de pulmón, colon y próstata, así como linfomas no Hodgkin de diversas estirpes celulares." },
        ] },
        { title: "Protocolo de tamizaje obligatorio", tag: "Cribado inmediato al diagnóstico", kind: "criteria", items: [
          { t: "Tomografía computarizada completa", d: "Tórax, abdomen y pelvis con contraste",
            say: "Todo paciente adulto con dermatomiositis confirmada debe someterse a una tomografía computarizada de tórax, abdomen y pelvis con medio de contraste para descartar adenopatías o tumores viscerales asintomáticos." },
          { t: "Exámenes ginecológicos y digestivos", d: "Mamografía, ecografía transvaginal, endoscopías",
            say: "Se deben incluir mamografía bilateral, ecografía ginecológica transvaginal con papanicolau en mujeres, antígeno prostático específico en hombres y colonoscopía o endoscopía alta según el cuadro digestivo." },
        ] },
      ],
    },

    {
      type: "points",
      kicker: "Diagnóstico diferencial clínico",
      title: "Miopatía por cuerpos de inclusión y causas tóxicas",
      cards: [
        { title: "Miopatía por cuerpos de inclusión (MCI)", tag: "Mayor en hombres sobre 50 años", kind: "criteria", items: [
          { t: "Debilidad asimétrica con atrofia de cuádriceps", d: "Compromiso precoz de flexores profundos de dedos",
            say: "La miopatía por cuerpos de inclusión se diferencia por afectar preferentemente a varones mayores de cincuenta años con debilidad asimétrica y atrofia precoz de cuádriceps y flexores de los dedos de las manos." },
          { t: "Resistencia característica a corticoides", d: "Vacuolas ribeteadas en la biopsia",
            say: "A diferencia de la polimiositis, la miopatía por cuerpos de inclusión no responde al tratamiento con corticoides o inmunosupresores convencionales, demostrando vacuolas ribeteadas patognomónicas al microscopio óptico." },
        ] },
        { title: "Miopatías tóxicas y metabólicas", tag: "Estatinas e hipotiroidismo", kind: "normal", items: [
          { t: "Miopatía por estatinas", d: "Mialgias y alza de CPK tras atorvastatina",
            say: "Siempre se debe interrogar el uso de fármacos hipolipemiantes como atorvastatina o simvastatina, cuyo cuadro de dolor y debilidad muscular suele resolver por completo al suspender el tratamiento." },
          { t: "Miopatía hipotiroídea", d: "Reflejos osteotendinosos lentos y TSH alta",
            say: "El hipotiroidismo descompensado puede elevar marcadamente la creatina fosfoquinasa con debilidad muscular de cinturas, requiriendo siempre solicitar niveles de tirotropina sérica antes de iniciar terapias inmunosupresoras." },
        ] },
      ],
    },

    {
      type: "points",
      kicker: "Diagnóstico de certeza",
      title: "Enzimas musculares, resonancia y biopsia tisular",
      cards: [
        { title: "Elevación extrema de CPK sérica", tag: "Diez a cincuenta veces el valor normal", kind: "criteria", items: [
          { t: "Creatina fosfoquinasa muy elevada", d: "Marcador de lisis y necrosis muscular activa",
            say: "La creatina fosfoquinasa plasmática se eleva masivamente entre diez y cincuenta veces sobre el límite normal, acompañada de elevación marcada de aldolasa, transaminasas de origen muscular y deshidrogenasa láctica." },
          { t: "Resonancia magnética muscular STIR", d: "Visualiza edema inflamatorio y guía la biopsia",
            say: "La resonancia magnética muscular en secuencias STIR muestra edema inflamatorio activo en los grupos musculares afectados, permitiendo elegir con enorme precisión el sitio anatómico óptimo para dirigir la biopsia tisular." },
        ] },
        { title: "Biopsia muscular como patrón oro", tag: "Confirmación histopatológica definitiva", kind: "key", items: [
          { t: "Diferencia polimiositis de dermatomiositis", d: "Infiltrado endomisial versus perifascicular",
            say: "La biopsia muscular es el patrón de oro confirmatorio: demuestra atrofia perifascicular perimisial mediada por complemento en la dermatomiositis frente a invasión endomisial de fibras por linfocitos CD ocho en la polimiositis." },
          { t: "Electromiografía complementaria", d: "Potenciales miopáticos polifásicos breves",
            say: "La electromiografía apoya el diagnóstico al demostrar un patrón miopático con potenciales polifásicos de corta duración y baja amplitud, junto a potenciales de fibrilación en reposo que confirman irritabilidad de membrana." },
        ] },
      ],
    },

    {
      type: "flow",
      kicker: "Tratamiento inmunosupresor",
      title: "Inducción con corticoides y ahorradores precoces",
      nodes: [
        { id: "dx", col: 0, row: 1, k: "start", t: "Miopatía inflamatoria confirmada", s: "Debilidad proximal y CPK masiva" },
        { id: "cor", col: 1, row: 0, k: "good", t: "Prednisona un miligramo por kilo al día", s: "O pulsos de metilprednisolona en disfagia" },
        { id: "aho", col: 2, row: 0, k: "good", t: "Metotrexato o Azatioprina precoz", s: "Fármaco ahorrador de corticoides" },
        { id: "igv", col: 2, row: 2, k: "alert", t: "Inmunoglobulina Endovenosa (IGEV)", s: "En casos refractarios o compromiso respiratorio" },
        { id: "rem", col: 3, row: 1, k: "good", t: "Normalización de CPK y fuerza", s: "Rehabilitación kinésica motora continua" },
      ],
      edges: [
        { from: "dx", to: "cor" },
        { from: "cor", to: "aho" },
        { from: "cor", to: "igv", label: "si disfagia grave" },
        { from: "aho", to: "rem" },
        { from: "igv", to: "rem" },
      ],
      steps: [
        { show: ["dx", "cor"], note: "Corticoides a dosis altas inmediatos",
          say: "El tratamiento de inducción de primera línea son los corticoides a dosis plenas: prednisona oral a un miligramo por kilo al día, recurriendo a pulsos de metilprednisolona endovenosa si existe disfagia orofaríngea o compromiso ventilatorio agudo." },
        { show: ["aho"], note: "Ahorradores precoces de corticoides",
          say: "Desde las primeras semanas se debe iniciar metotrexato o azatioprina como fármaco ahorrador para permitir el descenso gradual de la prednisona y evitar la miopatía esteroidal yatrogénica secundaria a dosis acumuladas." },
        { show: ["igv", "rem"], note: "Rescate con inmunoglobulinas",
          say: "En pacientes con disfagia severa con riesgo aspirativo o refractariedad al tratamiento con corticoides, la infusión de inmunoglobulina endovenosa es el tratamiento de rescate más eficaz y seguro reportado en la literatura médica." },
      ],
    },

    {
      type: "table",
      kicker: "Trampas EUNACOM",
      title: "Diagnóstico diferencial: Polimiositis vs Dermatomiositis vs Miastenia",
      head: ["Patología", "Músculos Oculares", "Lesiones Cutáneas", "Hallazgo Clave de Laboratorio"],
      rows: [
        { cells: ["Polimiositis", "ESTRICTAMENTE RESPETADOS", "Ausentes (afección muscular pura)", "Infiltrado endomisial CD8+ · CPK masiva (10 a 50x)"],
          say: "Repasemos la tabla comparativa. Polimiositis: respeta estrictamente los músculos oculares, sin lesiones cutáneas, con infiltrado endomisial CD ocho en la biopsia y creatina fosfoquinasa masivamente elevada." },
        { cells: ["Dermatomiositis", "ESTRICTAMENTE RESPETADOS", "Heliotropo y pápulas de Gottron", "Atrofia perifascicular · ALERTA: tamizaje de cáncer oculto"],
          say: "Dermatomiositis: respeta ojos, presenta heliotropo periorbitario y pápulas de Gottron en manos, con atrofia perifascicular y exigencia absoluta de tamizaje de cáncer oculto en adultos." },
        { cells: ["Miastenia Gravis", "TÍPICAMENTE AFECTADOS (Ptosis / Diplopía)", "Ausentes", "Anticuerpos anti-receptor de acetilcolina · CPK NORMAL"],
          say: "Miastenia gravis: afecta típicamente la musculatura ocular con ptosis palpebral y diplopía fluctuante, sin lesiones cutáneas y con niveles de creatina fosfoquinasa estrictamente normales." },
        { cells: ["Miopatía por estatinas", "Respetados", "Ausentes", "Antecedente de atorvastatina · Cede al suspender fármaco"],
          say: "Miopatía por estatinas: mialgias con alza moderada de enzimas tras iniciar hipolipemiantes, mejorando notablemente al suspender el medicamento causante." },
      ],
    },

    {
      type: "quiz",
      kicker: "Caso clínico",
      title: "Caso clínico tipo EUNACOM",
      stem: "Mujer de 58 años sin antecedentes previos consulta por debilidad progresiva en hombros y muslos de 2 meses, con gran dificultad para subir escaleras y peinarse. Al examen físico destaca fuerza 3/5 en cuádriceps y deltoides con fuerza distal 5/5. Los párpados superiores muestran eritema violáceo con edema blando (heliotropo), y en el dorso de las articulaciones metacarpofalángicas de ambas manos se observan pápulas violáceas descamativas (Gottron). La CPK es de 4.200 U/L y las transaminasas están elevadas.",
      question: "¿Cuál es el diagnóstico clínico, cuál es el tratamiento farmacológico inicial y qué estudio complementario mandatario debe solicitarse?",
      options: [
        { letter: "A", text: "Dermatomiositis, iniciar Prednisona 1 mg/kg/día y realizar tamizaje exhaustivo de neoplasia oculta" },
        { letter: "B", text: "Miastenia Gravis, iniciar piridostigmina oral y solicitar anticuerpos anti-MuSK" },
        { letter: "C", text: "Polimialgia reumática, indicar Prednisona 15 mg al día sin otros exámenes" },
        { letter: "D", text: "Lupus eritematoso sistémico, iniciar hidroxicloroquina ambulatoria exclusiva" },
        { letter: "E", text: "Esclerosis lateral amiotrófica, derivar a cuidados paliativos neurológicos" },
      ],
      correct: "A",
      explanation: "El cuadro clínico reúne los signos patognomónicos de la Dermatomiositis: debilidad muscular proximal simétrica, elevación masiva de CPK (con transaminasas de origen muscular) y las lesiones cutáneas cardinales: eritema en heliotropo y pápulas de Gottron. El tratamiento de primera línea son los corticoides a dosis plenas (Prednisona 1 mg/kg/día). En una mujer adulta de 58 años es estrictamente obligatorio realizar un tamizaje exhaustivo de neoplasia oculta (TAC de tórax, abdomen y pelvis, mamografía y evaluación ginecológica) debido a que hasta un 30% de los casos corresponden a un síndrome paraneoplásico.",
      say: {
        stem: "Caso clínico. Paciente de cincuenta y ocho años con debilidad proximal de hombros y muslos, CPK de cuatro mil doscientas unidades, párpados violáceos con edema y pápulas descamativas en nudillos.",
        question: "¿Cuál es el diagnóstico clínico, cuál es el tratamiento farmacológico inicial y qué estudio complementario mandatario debe solicitarse?",
        options: "Las alternativas: dermatomiositis con prednisona y tamizaje de neoplasia oculta, miastenia gravis con piridostigmina, polimialgia reumática con prednisona baja, lupus con hidroxicloroquina, o esclerosis lateral amiotrófica. Piénsalo.",
        answer: "La respuesta correcta es la A. Los hallazgos de heliotropo y Gottron con debilidad proximal y CPK masiva confirman dermatomiositis. Se inicia prednisona en dosis plenas y es mandatorio realizar un tamizaje completo de cáncer oculto por el altísimo riesgo de síndrome paraneoplásico en adultos.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2017 · Pregunta 24",
      stem: "Mujer de 56 años consulta por debilidad proximal en cuatro extremidades y erupción cutánea de 6 semanas. Al examen físico se aprecian pápulas eritematovioláceas sobre las articulaciones metacarpofalángicas de ambas manos (pápulas de Gottron) y coloración violácea en párpados superiores. La CPK plasmática es de 3.800 U/L. Tras iniciar tratamiento con prednisona a dosis plenas, ¿qué estudio médico complementario es INDISPENSABLE y prioritario realizar?",
      options: [
        { letter: "A", text: "Cintigrama óseo para descartar metástasis osteoblásticas difusas" },
        { letter: "B", text: "Tamizaje exhaustivo de neoplasia oculta mediante TAC toracoabdominal, mamografía y evaluación ginecológica" },
        { letter: "C", text: "Punción lumbar para estudio citoquímico de líquido cefalorraquídeo" },
        { letter: "D", text: "Cateterismo cardíaco izquierdo con coronariografía urgente" },
        { letter: "E", text: "Biopsia de médula ósea para descartar mielofibrosis primaria" },
      ],
      correct: "B",
      explanation: "En adultos con dermatomiositis (especialmente mayores de 50 años), hasta un 25-30% de los casos corresponden a un síndrome paraneoplásico secundario a un cáncer oculto (cáncer de ovario, mama, pulmón, colon, etc.). Por tanto, además de confirmar la miopatía e iniciar inmunosupresión, es prioritario y mandatorio realizar un cribado oncológico completo e intensivo.",
      say: {
        stem: "Pregunta real del EUNACOM dos mil diecisiete, pregunta veinticuatro. Mujer de cincuenta y seis años con pápulas de Gottron, eritema palpebral violáceo y debilidad muscular con CPK en tres mil ochocientos.",
        question: "¿Qué estudio médico complementario es indispensable y prioritario realizar tras iniciar prednisona?",
        options: "Las opciones: cintigrama óseo, tamizaje exhaustivo de neoplasia oculta mediante tomografía y evaluación ginecológica, punción lumbar, coronariografía, o biopsia de médula ósea. Piénsalo.",
        answer: "La respuesta correcta es la B. La dermatomiositis en el adulto exige descartar neoplasia oculta de inmediato. El tamizaje tumoral con tomografía computarizada y exámenes ginecológicos es una regla de oro obligatoria en el examen.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2019 · Pregunta 15",
      stem: "¿Cuál de las siguientes características anatomopatológicas e inmunohistoquímicas es típica de la biopsia muscular en una POLIMIOSITIS, permitiendo diferenciarla de la dermatomiositis?",
      options: [
        { letter: "A", text: "Atrofia perifascicular prominente con depósito vascular de complemento C5b-9" },
        { letter: "B", text: "Infiltrado inflamatorio endomisial compuesto por linfocitos T citotóxicos CD8+ que invaden miofibras" },
        { letter: "C", text: "Infiltración exclusiva de eosinófilos con vasculitis necrotizante transmural" },
        { letter: "D", text: "Depósito masivo de sustancia amiloide rojo Congo positiva en el endomisio" },
        { letter: "E", text: "Ausencia total de células inflamatorias con degeneración grasa aislada" },
      ],
      correct: "B",
      explanation: "En la polimiositis el mecanismo inmune es una citotoxicidad celular directa mediada por linfocitos T CD8+ que infiltran el endomisio e invaden activamente miofibras no necróticas que sobreexpresan antígenos HLA clase I. En cambio, la dermatomiositis es una microangiopatía mediada por complemento/anticuerpos que produce atrofia perifascicular e infiltrado perimisial por linfocitos CD4+ y B.",
      say: {
        stem: "EUNACOM dos mil diecinueve, pregunta quince. Se evalúan las diferencias histopatológicas entre las dos miopatías autoinmunes principales.",
        question: "¿Cuál de las siguientes características es típica de la biopsia muscular en una polimiositis, permitiendo diferenciarla de la dermatomiositis?",
        options: "Las alternativas: atrofia perifascicular con complemento, infiltrado endomisial con linfocitos T citotóxicos CD ocho que invaden miofibras, vasculitis eosinofílica, sustancia amiloide, o degeneración grasa pura. Piénsalo.",
        answer: "Es la B. La polimiositis presenta un infiltrado inflamatorio endomisial intrafascicular de linfocitos CD ocho citotóxicos que atacan miofibras con complejo mayor de histocompatibilidad clase uno. Recuerda que la dermatomiositis produce atrofia perifascicular.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2022 · Pregunta 27",
      stem: "Hombre de 48 años con diagnóstico de miopatía inflamatoria presenta debilidad muscular proximal moderada y disnea de esfuerzo progresiva. La radiografía y el TAC de tórax confirman una neumopatía intersticial difusa de patrón reticular bilateral. Al examen destaca fenómeno de Raynaud, artralgias y manos con hiperqueratosis y fisuras descamativas dolorosas en los bordes laterales de los dedos (manos de mecánico). ¿Cuál es el autoanticuerpo sérico más probablemente positivo en este paciente?",
      options: [
        { letter: "A", text: "Anticuerpos Anti-Jo-1 (Anti-histidil-tRNA sintetasa)" },
        { letter: "B", text: "Anticuerpos Anticentrómero" },
        { letter: "C", text: "Anticuerpos Anti-Smith" },
        { letter: "D", text: "Anticuerpos Anti-dsDNA" },
        { letter: "E", text: "Anticuerpos Anti-Histona" },
      ],
      correct: "A",
      explanation: "La constelación clínica de miopatía inflamatoria + enfermedad pulmonar intersticial difusa (EPID) + fenómeno de Raynaud + manos de mecánico + artritis no erosiva define el Síndrome Antisintetasa, cuyo marcador serológico patognomónico es el anticuerpo Anti-Jo-1 (anti-tRNA sintetasa).",
      say: {
        stem: "Pregunta del EUNACOM dos mil veintidós, pregunta veintisiete. Paciente con miopatía inflamatoria, fibrosis pulmonar intersticial difusa bilateral, fenómeno de Raynaud y manos de mecánico con fisuras laterales.",
        question: "¿Cuál es el autoanticuerpo sérico más probablemente positivo en este paciente?",
        options: "Las opciones: anticuerpos anti-Jo uno, anticuerpos anticentrómero, anticuerpos anti-Smith, anticuerpos anti-ADN, o anticuerpos anti-histona. Piénsalo.",
        answer: "La respuesta correcta es la A. El anticuerpo anti-Jo uno define el síndrome antisintetasa, caracterizado por miositis, fibrosis pulmonar grave, manos de mecánico y fenómeno de Raynaud.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2024 · Pregunta 20",
      stem: "¿Cuál de los siguientes grupos musculares se encuentra característicamente RESPETADO en la polimiositis y dermatomiositis, orientando el diagnóstico hacia Miastenia Gravis si se encuentra afectado?",
      options: [
        { letter: "A", text: "Músculos deltoides y supraespinoso" },
        { letter: "B", text: "Músculos psoas ilíaco y cuádriceps femoral" },
        { letter: "C", text: "Músculos flexores profundos del cuello" },
        { letter: "D", text: "Músculos extraoculares y palpebrales intrínsecos" },
        { letter: "E", text: "Músculos constrictores de la faringe" },
      ],
      correct: "D",
      explanation: "Las miopatías inflamatorias autoinmunes afectan típicamente la musculatura estriada proximal de las cinturas escapular y pelviana, flexores del cuello y faringe, pero RESPETAN de forma estricta los músculos extraoculares y la musculatura facial. La presencia de ptosis palpebral fluctuante o diplopía es característica de la Miastenia Gravis, no de la polimiositis ni dermatomiositis.",
      say: {
        stem: "Pregunta del EUNACOM dos mil veinticuatro, pregunta veinte. Se evalúa el diagnóstico diferencial neurofisiológico de debilidad muscular.",
        question: "¿Cuál de los siguientes grupos musculares se encuentra característicamente respetado en las miopatías inflamatorias, orientando a miastenia gravis si está afectado?",
        options: "Las opciones: deltoides y supraespinoso, psoas y cuádriceps, flexores del cuello, músculos extraoculares, o constrictores de la faringe. Piénsalo.",
        answer: "Es la D. Los músculos extraoculares están estrictamente respetados en las miopatías inflamatorias. La presencia de diplopía o ptosis palpebral debe hacer sospechar inmediatamente una miastenia gravis con CPK normal.",
      },
    },

    {
      type: "points",
      kicker: "Cierre",
      title: "Reglas de oro para el examen",
      cards: [
        { title: "Clínica muscular y lesiones cutáneas", tag: "Debilidad proximal simétrica", kind: "alert", items: [
          { t: "Debilidad proximal con respeto ocular", d: "Cintura escapular y pelviana con CPK masiva",
            say: "Cerramos con las tres reglas de oro. Primero: la debilidad es simétrica y proximal, con elevación masiva de creatina fosfoquinasa y respeto absoluto de los músculos extraoculares." },
          { t: "Heliotropo y Gottron patognomónicos", d: "Lesiones violáceas en párpados y nudillos",
            say: "El eritema en heliotropo y las pápulas de Gottron son patognomónicos de dermatomiositis y confirman el diagnóstico clínico al examen físico dermatológico." },
        ] },
        { title: "Histopatología y anticuerpos", tag: "CD8+ versus complemento", kind: "criteria", items: [
          { t: "Polimiositis: endomisial CD8+", d: "Citotoxicidad directa contra miofibras con MHC-I",
            say: "Segundo: la polimiositis presenta infiltrado endomisial por linfocitos CD ocho citotóxicos, mientras que la dermatomiositis muestra atrofia perifascicular mediada por complemento e inmunocomplejos." },
          { t: "Anti-Jo-1 y Síndrome Antisintetasa", d: "Miositis, EPID severa y manos de mecánico",
            say: "El anticuerpo anti-Jo uno define el síndrome antisintetasa con fibrosis pulmonar grave, fenómeno de Raynaud y dolorosas manos de mecánico con fisuras descamativas." },
        ] },
        { title: "Alerta oncológica y tratamiento", tag: "Tamizaje obligatorio en adultos", kind: "pharma", items: [
          { t: "Tamizaje de cáncer oculto obligatorio", d: "Hasta un 30% paraneoplásico en adultos",
            say: "Tercero: todo adulto con dermatomiositis exige un tamizaje riguroso e ineludible de neoplasia oculta mediante tomografías completas y evaluación ginecológica o urológica exhaustiva." },
          { t: "Corticoides a dosis altas y ahorradores", d: "Prednisona 1 mg/kg/día más metotrexato",
            say: "El tratamiento parte con prednisona a dosis plenas asociada a metotrexato o azatioprina precoz. Si te llevas una sola idea de hoy: heliotropo y Gottron son dermatomiositis, los ojos están a salvo, y en adultos el tamizaje de cáncer oculto es mandatorio e innegociable. Nos vemos en la próxima clase." },
        ] },
      ],
    },
  ],

  pathway: {
    title: "Algoritmo de enfrentamiento: Miopatías Inflamatorias Autoinmunes",
    root: N("start", "Sospecha de Miopatía Inflamatoria", "Debilidad muscular proximal simétrica y dificultad para levantarse",
      "Paciente que consulta por debilidad progresiva en hombros y muslos sin dolor neuropático distal.",
      ["", N("q", "¿Presencia de lesiones cutáneas patognomónicas (Heliotropo o Gottron)?", "Examen físico dermatológico detallado",
        "Se evalúa la piel de párpados, nudillos y superficies extensoras.",
        ["SÍ: Heliotropo o pápulas de Gottron presentes", N("do", "Dermatomiositis confirmada clínicamente", "Iniciar Prednisona 1 mg/kg/día oral y solicitar CPK",
          "Diagnóstico de dermatomiositis. Iniciar de inmediato corticoides a dosis plenas y dosificar creatina fosfoquinasa.",
          ["", N("q", "¿Paciente adulto (especialmente mayor de 45-50 años)?", "Evaluación de riesgo paraneoplásico",
            "Se evalúa la edad para pesquisar síndrome paraneoplásico tumoral.",
            ["SÍ: Adulto mayor de 45 años", N("alert", "Tamizaje Exhaustivo de Neoplasia Oculta Obligatorio", "TAC tórax-abdomen-pelvis, mamografía, PAP/eco transvaginal y endoscopías",
              "Regla de oro: solicitar de inmediato cribado tumoral completo para pesquisar cáncer de ovario, mama, pulmón o digestivo subyacente.")],
            ["NO: Forma juvenil o sin sospecha neoplásica", N("ok", "Manejo inmunosupresor estándar con FARME ahorrador", "Asociar Metotrexato o Azatioprina y kinesioterapia",
              "Asociar metotrexato o azatioprina para permitir descenso de corticoides, y mantener kinesioterapia motora continua.")])])],
        ["NO: Sin lesiones cutáneas (debilidad muscular pura)", N("do", "Polimiositis versus otras miopatías", "Solicitar CPK, descartar fármacos y programar Biopsia Muscular",
          "Sospecha de polimiositis. Descartar consumo de estatinas o hipotiroidismo y solicitar CPK sérica.",
          ["", N("q", "¿Compromiso de músculos extraoculares (ptosis o diplopía)?", "Diagnóstico diferencial con unión neuromuscular",
            "Se evalúa la motilidad ocular intrínseca y extrínseca.",
            ["SÍ: Ptosis palpebral o diplopía", N("refer", "Sospecha de Miastenia Gravis (CPK normal)", "Solicitar anticuerpos anti-receptor de acetilcolina y electromiografía de fibra única",
              "Los músculos oculares están respetados en miopatías inflamatorias. Su afectación orienta a miastenia gravis.")],
            ["NO: Músculos oculares estrictamente normales", N("ok", "Biopsia muscular confirmatoria e Inmunosupresión", "Infiltrado endomisial CD8+ y tratamiento con Prednisona a dosis plenas",
              "Biopsia confirma polimiositis con infiltrado endomisial CD ocho. Iniciar prednisona a un miligramo por kilo al día más fármaco ahorrador precoz.")])])])]),
  },
};
