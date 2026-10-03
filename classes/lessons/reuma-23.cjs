// Clase 1.23 — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_reumatologia_bloque_5.cjs (reuma-23).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: "reuma-23",
  tier: 2,
  slides: [
    {
      type: "cover",
      subtitle: "Diagnóstico diferencial, reactantes de fase aguda, prednisona a dosis bajas y las contraindicaciones en dolor nociplástico",
      say: "Bienvenidos a la clase veintitrés. Hoy abordamos el enfrentamiento diferencial entre dos entidades cardinales en la atención primaria y en el examen: la Polimialgia Reumática y la Fibromialgia. Aprenderemos a distinguir el cuadro inflamatorio de cinturas en adultos mayores con velocidad de sedimentación masivamente elevada que responde de forma espectacular a prednisona baja, frente al dolor nociplástico por sensibilización central con exámenes estrictamente normales, donde los corticoides y los opioides están formalmente contraindicados. Comencemos.",
    },

    {
      type: "flow",
      kicker: "Fisiopatología comparada",
      title: "Inflamación sistémica versus Sensibilización central",
      nodes: [
        { id: "pmr", col: 0, row: 0, k: "start", t: "Polimialgia Reumática (PMR)", s: "Bursitis y sinovitis de cinturas en mayores de cincuenta años" },
        { id: "fm", col: 0, row: 2, k: "start", t: "Fibromialgia (FM)", s: "Dolor nociplástico por alteración del procesamiento del dolor" },
        { id: "cit", col: 1, row: 0, k: "mech", t: "Tormenta de interleuquina seis", s: "Elevación extrema de reactantes de fase aguda" },
        { id: "cen", col: 1, row: 2, k: "mech", t: "Falla de vías descendentes inhibitorias", s: "Hiperalgesia y alodinia generalizada sin inflamación" },
        { id: "pred", col: 2, row: 0, k: "good", t: "Respuesta dramática a Prednisona baja", s: "Alivio en cuarenta y ocho a setenta y dos horas" },
        { id: "aer", col: 2, row: 2, k: "alert", t: "Ejercicio aeróbico y neuromoduladores", s: "Cero corticoides y cero opioides" },
      ],
      edges: [
        { from: "pmr", to: "cit" },
        { from: "fm", to: "cen" },
        { from: "cit", to: "pred" },
        { from: "cen", to: "aer" },
      ],
      steps: [
        { show: ["pmr", "cit", "pred"], note: "PMR: Sinovitis inflamatoria de cinturas",
          say: "La polimialgia reumática es una enfermedad inflamatoria sistémica del adulto mayor. Se caracteriza por sinovitis y bursitis subacromial y trocantérea mediadas por interleuquina seis, con elevación masiva de reactantes y una respuesta espectacular a dosis bajas de prednisona oral." },
        { show: ["fm", "cen", "aer"], note: "Fibromialgia: Sensibilización central nociplástica",
          say: "Por el contrario, la fibromialgia es un dolor nociplástico puro sin inflamación periférica. Ocurre por una alteración en el procesamiento central de las señales dolorosas con amplificación medular, exigiendo ejercicio físico y neuromoduladores, estando proscritos los corticoides." },
      ],
    },

    {
      type: "points",
      kicker: "Polimialgia Reumática cardinal",
      title: "Semiología de la PMR: Cinturas, rigidez y fuerza normal",
      cards: [
        { title: "Dolor y rigidez bilateral en hombros y caderas", tag: "Mayores de cincuenta años con inicio agudo", kind: "criteria", items: [
          { t: "Rigidez matinal severa mayor a cuarenta y cinco minutos", d: "Incapacidad para vestirse o peinarse el cabello",
            say: "La polimialgia reumática se presenta en mayores de cincuenta años con dolor y rigidez matinal prolongada en cinturas escapular y pelviana. Los enfermos relatan gran dificultad para elevar los brazos para peinarse, ponerse el abrigo o levantarse de un sillón bajo." },
          { t: "Fuerza muscular y enzimas estrictamente normales", d: "La limitación es por dolor, no por paresia miopática",
            say: "Al examen físico la fuerza muscular segmentaria es normal, aunque esté inhibida por el dolor, y la creatina fosfoquinasa plasmática es rigurosamente normal. Si la CPK estuviera elevada o hubiera debilidad muscular real, se debe descartar una miositis inflamatoria." },
        ] },
        { title: "Reactantes de fase aguda y arteritis temporal", tag: "VSG mayor a cincuenta milímetros por hora", kind: "alert", items: [
          { t: "VSG y PCR masivamente elevadas", d: "VSG típicamente entre cincuenta y cien milímetros por hora",
            say: "El laboratorio muestra una elevación extrema de la velocidad de sedimentación globular y de la proteína C reactiva. Una velocidad de sedimentación globular normal descarta prácticamente el diagnóstico de polimialgia reumática activa." },
          { t: "Asociación con arteritis de células gigantes", d: "Quince a veinte por ciento desarrollan arteritis temporal",
            say: "Hasta un veinte por ciento de los pacientes con polimialgia reumática presentan arteritis de la temporal concomitante. Es mandatorio interrogar dirigidamente por cefalea temporal, claudicación mandibular y alteraciones visuales en cada control." },
        ] },
      ],
    },

    {
      type: "flow",
      kicker: "Tratamiento de la Polimialgia Reumática",
      title: "Prednisona oral a dosis bajas: Respuesta diagnóstica",
      nodes: [
        { id: "dx", col: 0, row: 1, k: "start", t: "Polimialgia Reumática confirmada", s: "Mayor de cincuenta años con VSG acelerada" },
        { id: "cor", col: 1, row: 0, k: "good", t: "Prednisona oral quince a veinte miligramos al día", s: "Dosis bajas de esteroide matinal" },
        { id: "aliv", col: 2, row: 0, k: "good", t: "Alivio espectacular en 48 a 72 horas", s: "Disminución mayor al setenta por ciento del dolor" },
        { id: "des", col: 2, row: 2, k: "alert", t: "Desescalamiento muy lento (uno a dos años)", s: "Reducción de un miligramo por mes según PCR" },
      ],
      edges: [
        { from: "dx", to: "cor" },
        { from: "cor", to: "aliv" },
        { from: "aliv", to: "des" },
      ],
      steps: [
        { show: ["dx", "cor", "aliv"], note: "Respuesta diagnóstica a corticoides bajos",
          say: "El tratamiento de elección indiscutido es la prednisona oral a dosis bajas, entre quince y veinte miligramos diarios. La mejoría clínica es tan rápida y espectacular en cuarenta y ocho a setenta y dos horas que se considera una verdadera prueba diagnóstica terapéutica." },
        { show: ["des"], note: "Reducción lenta y prevención de recaídas",
          say: "Tras un mes con control de síntomas y normalización de reactantes, se inicia un descenso muy lento y protocolizado a razón de uno a dos miligramos por mes, prolongando el tratamiento por uno a dos años para evitar recaídas frecuentes." },
      ],
    },

    {
      type: "points",
      kicker: "Fibromialgia clínica cardinal",
      title: "Semiología de la Fibromialgia: Dolor generalizado y fatiga",
      cards: [
        { title: "Dolor nociplástico difuso en cuatro cuadrantes", tag: "Duración mayor a tres meses", kind: "criteria", items: [
          { t: "Dolor musculoesquelético crónico generalizado", d: "Presente en ambos lados del cuerpo y sobre y bajo la cintura",
            say: "La fibromialgia afecta preferentemente a mujeres entre veinte y cincuenta y cinco años. Se define por dolor difuso crónico en al menos cuatro de cinco regiones corporales durante más de tres meses, sin evidencia de daño tisular articular." },
          { t: "Hiperalgesia y alodinia al examen físico", d: "Dolor exquisito a la presión suave de partes blandas",
            say: "Al examen físico destaca una sensibilidad exagerada con dolor desencadenado por estímulos táctiles suaves sobre inserciones musculotendinosas, sin signos objetivos de sinovitis, calor o derrame articular en ninguna articulación." },
        ] },
        { title: "Cortejo somático y normalidad analítica", tag: "Sueño no reparador y exámenes normales", kind: "alert", items: [
          { t: "Fatiga extrema matinal y sueño no reparador", d: "Sensación constante de despertar cansado o agarrotado",
            say: "Los pacientes sufren fatiga crónica intensa y sueño fragmentado no reparador, sintiéndose exhaustos al despertar. Se asocia con frecuencia a colon irritable, cefaleas tensionales recurrentes y dificultades de concentración o niebla mental." },
          { t: "Laboratorio rigurosamente normal", d: "VSG, PCR, hemograma, CPK y tiroides normales",
            say: "Esta es la regla de oro para el examen: en la fibromialgia la velocidad de sedimentación globular, la proteína C reactiva, el hemograma y la creatina fosfoquinasa son estrictamente normales. Si la VSG o la PCR están elevadas, no es fibromialgia." },
        ] },
      ],
    },

    {
      type: "points",
      kicker: "Manejo en APS y contraindicaciones",
      title: "Pilares terapéuticos en Fibromialgia: Ejercicio y Fármacos",
      cards: [
        { title: "Pilar no farmacológico obligatorio", tag: "Ejercicio aeróbico de bajo impacto", kind: "normal", items: [
          { t: "Educación en neurobiología del dolor", d: "Desactivar la catastrofización y el miedo al movimiento",
            say: "El primer paso es la educación empática: explicar que el dolor es real pero que no existe daño destructivo en articulaciones ni músculos, promoviendo la higiene del sueño y la reactivación motora progresiva." },
          { t: "Ejercicio aeróbico gradual de bajo impacto", d: "Caminata, bicicleta estática, natación o yoga",
            say: "La actividad física aeróbica de baja intensidad practicada de forma regular es la intervención más efectiva y con mayor evidencia científica para reactivar las vías inhibitorias descendentes del dolor en la médula espinal." },
        ] },
        { title: "Farmacoterapia y contraindicaciones absolutas", tag: "Neuromoduladores aprobados", kind: "pharma", items: [
          { t: "Duloxetina, Pregabalina o Amitriptilina", d: "Modulan vías noradrenérgicas y canales de calcio",
            say: "Los fármacos de primera línea son los moduladores del dolor: duloxetina a dosis de treinta a sesenta miligramos al día, pregabalina nocturna o amitriptilina en dosis bajas para mejorar la conciliación del sueño." },
          { t: "Corticoides y opioides FORMALMENTE CONTRAINDICADOS", d: "Riesgo de adicción, hiperalgesia y toxicidad severa",
            say: "Pregunta fija de examen: los corticoides y los opioides mayores como morfina o tramadol están formalmente contraindicados en fibromialgia. No tienen ninguna eficacia en dolor nociplástico e inducen hiperalgesia paradójica y dependencia." },
        ] },
      ],
    },

    {
      type: "table",
      kicker: "Trampas EUNACOM",
      title: "Diagnóstico diferencial: Fibromialgia vs Polimialgia Reumática",
      head: ["Parámetro Diferencial", "Polimialgia Reumática (PMR)", "Fibromialgia (FM)"],
      rows: [
        { cells: ["Edad de inicio y sexo", "Mayores de 50 años (pico > 70 años)", "Mujeres jóvenes y edad media (20 a 55 años)"],
          say: "Edad: la polimialgia afecta a mayores de cincuenta o setenta años; la fibromialgia debuta en mujeres jóvenes y de edad media." },
        { cells: ["Localización del dolor", "Cinturas escapular y pelviana bilateral", "Dolor difuso generalizado en cuatro cuadrantes"],
          say: "Localización: la polimialgia se limita estrictamente a cinturas proximales; la fibromialgia duele en todo el cuerpo de forma difusa." },
        { cells: ["Reactantes (VSG / PCR)", "Masivamente elevados (VSG > 50 a 100 mm/h)", "RIGUROSAMENTE NORMALES (VSG normal)"],
          say: "Reactantes: la polimialgia tiene velocidad de sedimentación masiva; la fibromialgia tiene reactantes rigurosamente normales." },
        { cells: ["Respuesta a corticoides", "ESPECTACULAR a Prednisona 15 mg/día en 48-72h", "NULA: FORMALMENTE CONTRAINDICADOS"],
          say: "Corticoides: la polimialgia responde espectacularmente a prednisona baja; en la fibromialgia los corticoides están contraindicados." },
      ],
    },

    {
      type: "quiz",
      kicker: "Caso clínico",
      title: "Caso clínico tipo EUNACOM",
      stem: "Mujer de 71 años consulta por rigidez matinal de 90 minutos de duración en cuello, hombros y caderas de 2 meses de evolución, que le impide levantarse del sillón y peinarse. Al examen físico no se palpan sinovitis periféricas y la fuerza muscular segmentaria es normal. El laboratorio revela hemoglobina de 11.0 g/dL, VSG de 92 mm/h, PCR de 54 mg/L y CPK normal de 65 U/L. No refiere cefalea ni síntomas oculares.",
      question: "¿Cuál es el diagnóstico clínico más probable y cuál es el tratamiento de primera línea de elección?",
      options: [
        { letter: "A", text: "Polimialgia Reumática; iniciar Prednisona oral 15 a 20 mg al día con desescalamiento lento" },
        { letter: "B", text: "Fibromialgia senil; indicar ejercicio aeróbico de bajo impacto y pregabalina nocturna" },
        { letter: "C", text: "Polimiositis inflamatoria; hospitalizar para pulsos de metilprednisolona 1.000 mg EV" },
        { letter: "D", text: "Artritis reumatoide seronegativa; iniciar Metotrexato 15 mg semanales más ácido fólico" },
        { letter: "E", text: "Lumbago mecánico degenerativo; indicar paracetamol con tramadol SOS" },
      ],
      correct: "A",
      explanation: "El cuadro clínico de una paciente mayor de 50 años (71 años) con dolor y rigidez matinal prolongada en cinturas escapular y pélvica, marcada aceleración de la VSG (92 mm/h) y PCR, con fuerza muscular y CPK normales corresponde a una Polimialgia Reumática clásica. El tratamiento de primera línea de elección son los corticoides a dosis bajas: Prednisona oral 15 a 20 mg/día, produciendo una mejoría espectacular en menos de 48 a 72 horas.",
      say: {
        stem: "Caso clínico. Paciente de setenta y un años con rigidez matinal prolongada de noventa minutos en hombros y caderas, fuerza normal, CPK normal y velocidad de sedimentación globular en noventa y dos milímetros por hora.",
        question: "¿Cuál es el diagnóstico clínico más probable y cuál es el tratamiento de primera línea de elección?",
        options: "Las alternativas: polimialgia reumática con prednisona oral baja, fibromialgia con pregabalina, polimiositis con pulsos de metilprednisolona, artritis reumatoide con metotrexato, o lumbago mecánico con tramadol. Piénsalo.",
        answer: "La respuesta correcta es la A. Es una polimialgia reumática típica por edad, afectación de cinturas y reactantes masivos con enzimas musculares normales. El tratamiento de elección es la prednisona oral en dosis bajas de quince miligramos diarios.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM · Diagnóstico de Polimialgia Reumática",
      stem: "¿Cuál de los siguientes hallazgos de laboratorio es INDISPENSABLE para apoyar el diagnóstico clínico de Polimialgia Reumática, permitiendo distinguirla con seguridad de la Fibromialgia primaria?",
      options: [
        { letter: "A", text: "Elevación marcada de Creatina Fosfoquinasa (CPK > 10 veces el valor normal)" },
        { letter: "B", text: "Aceleración marcada de la Velocidad de Sedimentación Globular (VSG > 50 mm/h) y PCR elevada" },
        { letter: "C", text: "Presencia de anticuerpos antipéptidos cíclicos citrulinados (anti-CCP) a títulos altos" },
        { letter: "D", text: "Anticuerpos antinucleares positivos con patrón moteado homogéneo" },
        { letter: "E", text: "Hipocomplementemia severa con descenso de C3 y C4 séricos" },
      ],
      correct: "B",
      explanation: "La Polimialgia Reumática se caracteriza analíticamente por una marcada elevación de los reactantes de fase aguda (VSG habitualmente > 50 a 100 mm/h y PCR alta). En contraste, en la Fibromialgia los reactantes de fase aguda son estrictamente normales. La CPK es normal en ambas (su elevación orienta a miositis).",
      say: {
        stem: "Pregunta del EUNACOM sobre diagnóstico diferencial analítico. Paciente con dolor osteomuscular en quien se sospecha polimialgia reumática.",
        question: "¿Cuál de los siguientes hallazgos de laboratorio es indispensable para apoyar el diagnóstico de polimialgia reumática distinguiéndola de fibromialgia?",
        options: "Las opciones: elevación marcada de CPK, aceleración marcada de la velocidad de sedimentación globular y PCR elevada, anticuerpos anti-CCP, anticuerpos antinucleares, o hipocomplementemia. Piénsalo.",
        answer: "Es la B. La elevación marcada de la velocidad de sedimentación globular y de la proteína C reactiva es el sello analítico de la polimialgia reumática, siendo rigurosamente normal en la fibromialgia.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM · Manejo de primera línea en Fibromialgia",
      stem: "Mujer de 36 años consulta por dolores osteomusculares generalizados en extremidades superiores, inferiores y columna de 10 meses de evolución. Refiere insomnio de mantención, sensación de fatiga extrema matinal, colon irritable y cefaleas tensionales frecuentes. Al examen físico no hay artritis, la fuerza muscular es 5/5 simétrica y presenta dolor a la presión suave en múltiples puntos musculotendinosos del cuerpo. La VSG (8 mm/h), la PCR, la TSH, la CPK y los ANA son normales. ¿Cuál es el tratamiento de primera línea más apropiado?",
      options: [
        { letter: "A", text: "Prednisona 40 mg/día oral por 4 semanas y reposo en cama" },
        { letter: "B", text: "Educación del dolor, ejercicio aeróbico progresivo de bajo impacto y Duloxetina oral" },
        { letter: "C", text: "Sulfasalazina 1 g cada 12 horas e infiltración intraarticular con triamcinolona" },
        { letter: "D", text: "Sulfato de morfina de liberación prolongada y reposo absoluto" },
        { letter: "E", text: "Celecoxib 200 mg cada 12 horas de forma indefinida" },
      ],
      correct: "B",
      explanation: "La paciente cumple criterios de Fibromialgia: dolor musculoesquelético crónico generalizado (> 3 meses en 4 cuadrantes), sueño no reparador, fatiga crónica, síntomas somáticos acompañantes y normalidad estricta de reactantes de fase aguda y enzimas musculares. El pilar fundamental de manejo es la educación, la actividad física aeróbica regular de bajo impacto (caminata, natación, bicicleta) y fármacos neuromoduladores como la Duloxetina (30-60 mg/día) o Pregabalina/Amitriptilina. Los corticoides y opioides están formalmente contraindicados.",
      say: {
        stem: "Pregunta del EUNACOM sobre tratamiento en atención primaria. Mujer de treinta y seis años con dolor crónico difuso en cuatro cuadrantes, fatiga, colon irritable y exámenes de laboratorio completamente normales.",
        question: "¿Cuál es el tratamiento de primera línea más apropiado para su manejo?",
        options: "Las alternativas: prednisona oral en dosis altas, educación del dolor con ejercicio aeróbico progresivo de bajo impacto y duloxetina, sulfasalazina, sulfato de morfina con reposo, o celecoxib continuo. Piénsalo.",
        answer: "La respuesta correcta es la B. En fibromialgia el pilar terapéutico es la educación, el ejercicio aeróbico regular de bajo impacto y fármacos neuromoduladores como duloxetina o pregabalina.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM · Contraindicaciones farmacológicas en Fibromialgia",
      stem: "¿Cuál de los siguientes grupos farmacológicos se encuentra FORMALMENTE CONTRAINDICADO en el manejo a largo plazo de la Fibromialgia debido a su total ineficacia para modular el dolor nociplástico y su alto riesgo de inducir hiperalgesia paradójica y dependencia?",
      options: [
        { letter: "A", text: "Inhibidores duales de la recaptura de serotonina y noradrenalina (Duloxetina)" },
        { letter: "B", text: "Ligandos de la subunidad alfa-2-delta de canales de calcio (Pregabalina)" },
        { letter: "C", text: "Antidepresivos tricíclicos en dosis bajas (Amitriptilina)" },
        { letter: "D", text: "Corticoides sistémicos y analgésicos opioides mayores" },
        { letter: "E", text: "Analgésicos no opioides puros (Paracetamol SOS)" },
      ],
      correct: "D",
      explanation: "Tanto las guías clínicas internacionales (EULAR, ACR) como las recomendaciones nacionales contraindican formalmente el uso de corticoides (prednisona) y de opioides mayores en el tratamiento de la fibromialgia. No existe evidencia de eficacia en dolor por sensibilización central, y los opioides inducen hiperalgesia paradójica mediada por receptores NMDA, dependencia física y deterioro cognitivo severo.",
      say: {
        stem: "Pregunta de farmacología clínica en dolor crónico. Se evalúan las contraindicaciones terapéuticas en síndromes nociplásticos.",
        question: "¿Cuál de los siguientes grupos farmacológicos se encuentra formalmente contraindicado en el manejo de la fibromialgia?",
        options: "Las opciones: inhibidores duales como duloxetina, ligandos alfa dos delta como pregabalina, antidepresivos tricíclicos como amitriptilina, corticoides sistémicos y opioides mayores, o paracetamol. Piénsalo.",
        answer: "Es la D. Los corticoides sistémicos y los opioides mayores están formalmente contraindicados en fibromialgia por ineficacia demostrada y riesgo de inducir hiperalgesia paradójica y adicción.",
      },
    },

    {
      type: "points",
      kicker: "Cierre",
      title: "Reglas de oro para el examen",
      cards: [
        { title: "Polimialgia Reumática y respuesta a Prednisona", tag: "Cinturas, VSG acelerada y dosis bajas", kind: "criteria", items: [
          { t: "Mayores de cincuenta años con VSG acelerada", d: "Dolor y rigidez matinal de hombros y caderas con CPK normal",
            say: "Concluimos con las tres reglas de oro. Primero: la polimialgia reumática afecta a mayores de cincuenta años con dolor y rigidez en hombros y caderas, fuerza normal, CPK normal y velocidad de sedimentación globular muy elevada." },
          { t: "Respuesta espectacular a Prednisona baja", d: "Alivio del dolor en cuarenta y ocho a setenta y dos horas",
            say: "Segundo: responde de forma diagnóstica y espectacular a prednisona oral a dosis bajas de quince a veinte miligramos diarios, vigilando siempre la aparición de arteritis temporal concomitante." },
        ] },
        { title: "Fibromialgia y contraindicaciones absolutas", tag: "Exámenes normales y cero opioides", kind: "pharma", items: [
          { t: "Dolor nociplástico con laboratorio normal", d: "Sensibilización central con sueño no reparador y fatiga",
            say: "Tercero: la fibromialgia es un dolor nociplástico difuso en mujeres jóvenes con fatiga, sueño no reparador y reactantes de fase aguda rigurosamente normales." },
          { t: "Pilar es ejercicio aeróbico y neuromoduladores", d: "Cero corticoides y cero opioides mayores",
            say: "El tratamiento de elección en APS es el ejercicio aeróbico de bajo impacto junto a duloxetina o pregabalina, estando formalmente contraindicados los corticoides y los opioides. Si te llevas una sola idea de hoy: dolor de cinturas con VSG alta en anciano es PMR y se trata con prednisona baja; dolor difuso con VSG normal en joven es fibromialgia y se trata con ejercicio aeróbico y jamás con corticoides. Nos vemos en la próxima clase." },
        ] },
      ],
    },
  ],

  pathway: {
    title: "Algoritmo diferencial: Dolor Musculoesquelético Proximal vs Generalizado",
    root: N("start", "Sospecha de Polimialgia Reumática vs Fibromialgia", "Dolor en cinturas o dolor corporal generalizado difuso",
      "Paciente que consulta por dolor osteomuscular continuo y sensación de rigidez o fatiga.",
      ["", N("q", "¿Edad mayor de 50 años con dolor de cinturas escapular y pélvica y rigidez matinal?", "Evaluación de grupo etario y distribución anatómica",
        "Se evalúa si el dolor se limita a cinturas proximales o es difuso corporal.",
        ["SÍ: Mayor de 50 años con dolor en hombros y caderas", N("do", "Solicitar VSG, PCR y CPK", "Descartar miositis inflamatoria y cuantificar inflamación sistémica",
          "Sospecha de polimialgia reumática. Solicitar velocidad de sedimentación globular y enzimas musculares.",
          ["", N("q", "¿VSG muy acelerada (> 50 mm/h) con fuerza muscular y CPK normales?", "Confirmación de perfil inflamatorio sistémico",
            "Se verifica la aceleración de reactantes de fase aguda y normalidad enzimática.",
            ["SÍ: VSG muy alta con CPK normal", N("ok", "Polimialgia Reumática confirmada: Prednisona a dosis bajas", "Iniciar Prednisona 15 mg/día oral; verificar alivio espectacular en 48-72h y vigilar cefalea",
              "Diagnóstico de polimialgia reumática confirmado. Indicar prednisona oral quince miligramos al día y vigilar síntomas de arteritis temporal.")],
            ["NO: CPK elevada con debilidad real", N("refer", "Sospecha de Miositis Inflamatoria (Polimiositis)", "Derivar a Reumatología para estudio electromiográfico y biopsia muscular",
              "La elevación de CPK descarta PMR pura. Requiere estudio de miopatía inflamatoria autoinmune.")])])],
        ["NO: Mujer joven o media con dolor difuso en 4 cuadrantes y fatiga", N("do", "Evaluar Criterios de Fibromialgia y solicitar exámenes básicos", "Confirmar ausencia de inflamación orgánica con hemograma, VSG, TSH y CPK normales",
          "Sospecha de fibromialgia. Confirmar normalidad estricta de reactantes y función tiroidea.",
          ["", N("q", "¿Dolor > 3 meses, fatiga, sueño no reparador y exámenes estrictamente normales?", "Verificación de criterios diagnósticos de dolor nociplástico",
            "Se confirma la presencia de cortejo somático con laboratorio normal.",
            ["SÍ: Cumple criterios con laboratorio normal", N("ok", "Fibromialgia confirmada: Ejercicio aeróbico y Duloxetina", "REGLA DE ORO: Contraindicados corticoides y opioides. Indicar caminata diaria más neuromoduladores",
              "Diagnóstico de fibromialgia. Manejo con ejercicio aeróbico de bajo impacto, educación y duloxetina o pregabalina.")],
            ["NO: Reactantes elevados o dolor articular objetivo", N("refer", "Estudio de conectivopatía o patología osteoarticular", "Descartar lupus, hipotiroidismo descompensado o artritis reumatoide",
              "La presencia de reactantes anormales descarta fibromialgia pura y exige descartar patología autoinmune.")])])])]),
  },
};
