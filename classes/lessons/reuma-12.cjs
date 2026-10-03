// Clase 1.12 — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_reumatologia_bloque_3.cjs (reuma-12).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: "reuma-12",
  tier: 3,
  slides: [
    {
      type: "cover",
      subtitle: "Difusa versus CREST, fibrosis pulmonar, crisis renal hiperreninémica y el rescate con captopril",
      say: "Bienvenidos. Hoy revisamos la esclerosis sistémica o esclerodermia, una conectivopatía compleja caracterizada por vasculopatía obliterante y fibrosis tisular progresiva. Aprenderemos a diferenciar con precisión la forma cutánea difusa con anticuerpos anti-Scl setenta y riesgo de fibrosis pulmonar, de la forma limitada o síndrome de CREST con anticuerpos anticentrómero e hipertensión pulmonar tardía. Además, abordaremos la temida crisis renal esclerodérmica y la prohibición estricta de corticoides en dosis altas. Comencemos.",
    },

    {
      type: "flow",
      kicker: "Fisiopatología",
      title: "La tríada de daño vascular, autoinmunidad y fibrosis",
      nodes: [
        { id: "end", col: 0, row: 1, k: "cause", t: "Daño endotelial temprano", s: "Apoptosis y pérdida capilar periférica" },
        { id: "aut", col: 1, row: 0, k: "mech", t: "Autoinmunidad y citoquinas", s: "Secreción masiva de factor de crecimiento profibrótico" },
        { id: "vas", col: 1, row: 2, k: "alert", t: "Vasculopatía obliterante", s: "Proliferación intimal y fenómeno de Raynaud severo" },
        { id: "fib", col: 2, row: 1, k: "mech", t: "Diferenciación a miofibroblastos", s: "Producción descontrolada de colágeno tipos uno y tres" },
        { id: "org", col: 3, row: 1, k: "effect", t: "Esclerosis cutánea y visceral", s: "Pulmón, riñón, miocardio y tubo digestivo" },
      ],
      edges: [
        { from: "end", to: "aut" },
        { from: "end", to: "vas" },
        { from: "aut", to: "fib" },
        { from: "vas", to: "fib" },
        { from: "fib", to: "org" },
      ],
      steps: [
        { show: ["end", "vas"], note: "El defecto endotelial inicial",
          say: "La enfermedad comienza en los pequeños vasos. Se produce una lesión endotelial precoz con pérdida progresiva de capilares y proliferación concéntrica de la íntima, lo que condiciona vasoespasmo severo e isquemia tisular crónica en los dedos y órganos nobles." },
        { show: ["aut", "fib"], note: "Activación de la cascada fibrótica",
          say: "Los linfocitos infiltrantes liberan citoquinas profibróticas como el factor de crecimiento transformante beta. Esto induce la transformación permanente de los fibroblastos en miofibroblastos hiperactivos, incapaces de responder a las señales habituales de apoptosis celular." },
        { show: ["org"], note: "Depósito masivo de colágeno",
          say: "Estos miofibroblastos sintetizan grandes cantidades de colágeno en la dermis, en el intersticio pulmonar, en las arterias renales y en la capa muscular del tubo digestivo, conduciendo a rigidez progresiva y falla funcional multiorgánica." },
      ],
    },

    {
      type: "points",
      kicker: "Clasificación clínica",
      title: "Esclerosis cutánea difusa versus limitada o CREST",
      cards: [
        { title: "Esclerosis cutánea difusa", tag: "Compromiso proximal y visceral precoz", kind: "alert", items: [
          { t: "Piel proximal a codos, rodillas y tronco", d: "Rápida progresión desde dedos en salchicha",
            say: "En la forma difusa el engrosamiento cutáneo avanza rápidamente afectando antebrazos, brazos, muslos, tórax y abdomen. Comienza con una fase edematosa de dedos hinchados y progresa a induración pétrea difusa en pocos meses." },
          { t: "Raynaud simultáneo con daño orgánico", d: "Aparición reciente menor a un año",
            say: "El fenómeno de Raynaud aparece de forma simultánea o apenas meses antes que los cambios cutáneos, acompañándose de compromiso temprano y grave de pulmones, riñones y miocardio." },
        ] },
        { title: "Esclerosis cutánea limitada y CREST", tag: "Afección distal con Raynaud prolongado", kind: "criteria", items: [
          { t: "Respeto riguroso de tronco y muslos", d: "Limitado a manos, antebrazos distales y cara",
            say: "En la forma limitada el engrosamiento de la piel se detiene en los codos y las rodillas, respetando estrictamente el tronco y el abdomen, con una evolución mucho más lenta y larvada en el tiempo." },
          { t: "Acrónimo del Síndrome de CREST", d: "Calcinosis, Raynaud, Esófago, Sclerodactilia, Telangiectasias",
            say: "El acrónimo CREST resume sus cinco hallazgos cardinales: calcinosis cutánea en pulpejos de dedos, fenómeno de Raynaud de muy larga data, esofagopatía por atrofia muscular con reflujo severo, esclerodactilia y telangiectasias faciales y labiales muy prominentes." },
        ] },
      ],
    },

    {
      type: "flow",
      kicker: "Inmunología y correlación",
      title: "Los anticuerpos definen el pronóstico orgánico",
      nodes: [
        { id: "ana", col: 0, row: 1, k: "start", t: "Anticuerpos Antinucleares en Esclerodermia", s: "Positivos en más del noventa por ciento" },
        { id: "scl", col: 1, row: 0, k: "alert", t: "Anti-Scl setenta (Topoisomerasa I)", s: "Patrón nucleolar · Asocia Fibrosis Pulmonar (EPID)" },
        { id: "aca", col: 1, row: 2, k: "good", t: "Anticuerpos Anticentrómero (ACA)", s: "Patrón centromérico · Asocia Síndrome de CREST" },
        { id: "arn", col: 2, row: 0, k: "risk", t: "Anti-ARN Polimerasa tres", s: "Máximo riesgo de Crisis Renal Esclerodérmica" },
        { id: "htp", col: 2, row: 2, k: "alert", t: "Riesgo tardío de HTP grupo uno", s: "Hipertensión arterial pulmonar en CREST" },
      ],
      edges: [
        { from: "ana", to: "scl" },
        { from: "ana", to: "aca" },
        { from: "scl", to: "arn" },
        { from: "aca", to: "htp" },
      ],
      steps: [
        { show: ["ana", "scl"], note: "Anti-Scl setenta en forma difusa",
          say: "El anticuerpo anti-Scl setenta, dirigido contra la topoisomerasa uno, es característico de la esclerosis difusa. Su presencia predice fuertemente el desarrollo de fibrosis pulmonar intersticial severa." },
        { show: ["aca"], note: "Anticentrómero en forma limitada",
          say: "Por el contrario, los anticuerpos anticentrómero están presentes en más del setenta por ciento de los pacientes con esclerosis limitada o síndrome de CREST, marcando un curso cutáneo benigno pero con vigilancia pulmonar." },
        { show: ["arn", "htp"], note: "Complicaciones orgánicas mayores",
          say: "Los anticuerpos anti-ARN polimerasa tres se asocian al mayor riesgo de crisis renal hipertensiva, mientras que los pacientes anticentrómero tienen riesgo de hipertensión pulmonar tardía tras diez a quince años." },
      ],
    },

    {
      type: "points",
      kicker: "Compromiso osteomuscular",
      title: "Frotes tendinosos y acroosteólisis en pulpejos",
      cards: [
        { title: "Frote o roce tendinoso palpable", tag: "Signo de alta agresividad", kind: "alert", items: [
          { t: "Sensación de cuero crujiente al movilizar", d: "En flexores y extensores de muñecas y tobillos",
            say: "El roce tendinoso es un crujido palpable al mover los tendones inflamados dentro de sus vainas engrosadas. Su presencia en la esclerosis difusa es un predictor independiente de rápida progresión cutánea y crisis renal inminente." },
          { t: "Contracturas fijas articulares", d: "Retracción cutánea que inmoviliza los dedos",
            say: "La induración de la dermis periarticular provoca flexión fija de las articulaciones interfalángicas, con pérdida de la capacidad de prensión manual si no se interviene con fisioterapia precoz." },
        ] },
        { title: "Acroosteólisis y calcinosis", tag: "Resorción ósea isquémica", kind: "criteria", items: [
          { t: "Reabsorción de las falanges distales", d: "Acortamiento de dedos por isquemia grave",
            say: "La isquemia microvascular crónica y severa en los pulpejos produce reabsorción ósea de los penachos de las falanges distales, llamada acroosteólisis, visible con claridad en las radiografías de manos." },
          { t: "Calcinosis cutánea dolorosa", d: "Extrusión de material calcáreo ulcerado",
            say: "En el CREST los depósitos subcutáneos de sales de calcio pueden erosionar la piel y expulsar un material blanquecino como tiza, con alto riesgo de sobreinfección bacteriana secundaria." },
        ] },
      ],
    },

    {
      type: "points",
      kicker: "Compromiso pulmonar",
      title: "Fibrosis intersticial versus hipertensión arterial pulmonar",
      cards: [
        { title: "Enfermedad pulmonar intersticial (EPID)", tag: "Primera causa de muerte en esclerodermia", kind: "alert", items: [
          { t: "Fibrosis con patrón de neumonía no específica", d: "Tos seca y crepitantes tipo velcro basales",
            say: "La fibrosis pulmonar intersticial es la principal causa de muerte global en la esclerosis difusa. Se manifiesta por disnea progresiva, tos seca y estertores crepitantes secos en las bases pulmonares." },
          { t: "Tratamiento de elección con micofenolato", d: "Dos a tres gramos diarios vía oral",
            say: "El tratamiento de primera línea para frenar la fibrosis activa es el micofenolato mofetilo, asociando el antifibrótico nintedanib si la pérdida de capacidad vital forzada persiste en la espirometría." },
        ] },
        { title: "Hipertensión arterial pulmonar aislada", tag: "Complicación tardía en síndrome de CREST", kind: "criteria", items: [
          { t: "Vasculopatía proliferativa pulmonar pura", d: "Sin fibrosis en la tomografía computarizada",
            say: "En la esclerosis limitada surge una hipertensión arterial pulmonar del grupo uno por cierre progresivo de las arterias pulmonares pequeñas, con parénquima pulmonar limpio en la tomografía." },
          { t: "Ecocardiograma anual obligatorio", d: "Confirmación por cateterismo cardíaco derecho",
            say: "Todo paciente con CREST exige tamizaje anual con ecocardiograma Doppler para pesquisar sobrecarga ventricular derecha precoz antes de que aparezca disnea invalidante." },
        ] },
      ],
    },

    {
      type: "points",
      kicker: "Emergencia vital",
      title: "Crisis renal esclerodérmica y la regla de los IECA",
      cards: [
        { title: "Cuadro clínico y laboratorio", tag: "Emergencia hipertensiva hiperreninémica", kind: "alert", items: [
          { t: "Hipertensión arterial maligna de inicio brusco", d: "Presión arterial mayor a 180 con 110",
            say: "La crisis renal esclerodérmica es una emergencia médica devastadora caracterizada por una elevación súbita y masiva de la presión arterial, con cefalea intensa, encefalopatía y edema pulmonar." },
          { t: "Falla renal aguda con microangiopatía", d: "Esquistocitos y trombocitopenia de consumo",
            say: "La isquemia renal desencadena una secreción masiva de renina, con alza acelerada de creatinina sérica y anemia hemolítica microangiopática con esquistocitos en el frotis sanguíneo." },
        ] },
        { title: "Rescate farmacológico inmediato", tag: "Captopril oral a dosis plenas", kind: "pharma", items: [
          { t: "Inhibidores de la ECA de elección absoluta", d: "Captopril oral en dosis rápidamente crecientes",
            say: "El tratamiento que salva la vida y rescata los riñones del paciente es el inicio perentorio de un inhibidor de la enzima convertidora, de preferencia captopril oral de acción corta, titulando rápidamente cada ocho horas para frenar la vasoconstricción masiva mediada por angiotensina dos." },
          { t: "Reducción histórica de la mortalidad", d: "Baja de noventa por ciento a menos de veinte",
            say: "El uso oportuno de IECA redujo la mortalidad de un noventa a menos del veinte por ciento. No debe suspenderse el fármaco aunque la creatinina suba transitoriamente al iniciar." },
        ] },
      ],
    },

    {
      type: "flow",
      kicker: "Alerta de seguridad crítica",
      title: "Prohibición de corticoides en esclerosis sistémica difusa",
      nodes: [
        { id: "dif", col: 0, row: 1, k: "start", t: "Paciente con esclerosis sistémica difusa", s: "Especialmente con anti-ARN polimerasa tres" },
        { id: "cor", col: 1, row: 1, k: "trap", t: "Prednisona mayor a 15 mg al día", s: "Dosis moderadas o altas por dolor o artritis" },
        { id: "ren", col: 2, row: 1, k: "alert", t: "Gatillamiento de Crisis Renal", s: "Vasoconstricción renal yatrogénica aguda" },
        { id: "fal", col: 3, row: 1, k: "risk", t: "Falla renal hiperreninémica grave", s: "Urgencia en cuidados intensivos" },
      ],
      edges: [
        { from: "dif", to: "cor" },
        { from: "cor", to: "ren" },
        { from: "ren", to: "fal" },
      ],
      steps: [
        { show: ["dif", "cor"], note: "Un error farmacológico frecuente",
          say: "Esta es una regla de oro de prohibición que interroga siempre el examen: el uso de corticoides en dosis moderadas o altas, como prednisona mayor a quince miligramos al día, está contraindicado en la esclerosis sistémica difusa." },
        { show: ["ren", "fal"], note: "El factor desencadenante yatrogénico",
          say: "Los glucocorticoides en dosis altas son el principal factor precipitante demostrado de crisis renal esclerodérmica yatrogénica. Si el paciente tiene dolor articular, deben preferirse analgésicos o dosis mínimas bajo estricto monitoreo tensional." },
      ],
    },

    {
      type: "points",
      kicker: "Tracto digestivo y piel",
      title: "Esofagopatía por atrofia muscular y rigidez cutánea",
      cards: [
        { title: "Dismotilidad esofágica severa", tag: "Atrofia de músculo liso en dos tercios distales", kind: "criteria", items: [
          { t: "Reflujo gastroesofágico severo y pirosis", d: "Incompetencia del esfínter esofágico inferior",
            say: "Más del noventa por ciento de los pacientes presenta atrofia del músculo liso en el esófago distal, con hipotonía del esfínter inferior que provoca reflujo ácido severo, esofagitis péptica y disfagia motora a sólidos." },
          { t: "Inhibidores de bomba a dosis dobles", d: "Omeprazol cuarenta miligramos cada doce horas",
            say: "El tratamiento exige inhibidores de bomba de protones a dosis altas continuas junto a medidas antirreflujo estrictas para prevenir estenosis esofágica y aspiración pulmonar oculta." },
        ] },
        { title: "Manejo del compromiso cutáneo", tag: "Metotrexato para induración", kind: "pharma", items: [
          { t: "Metotrexato semanal en fase inflamatoria", d: "Quince a veinte miligramos a la semana",
            say: "En la fase edematosa e indurativa temprana de la piel, el metotrexato en dosis de quince a veinte miligramos semanales ha demostrado frenar la progresión del puntaje cutáneo modificado de Rodnan." },
          { t: "Rehabilitación y prevención de flexión", d: "Ejercicios diarios de apertura bucal y manos",
            say: "Se debe indicar terapia kinésica precoz para prevenir la microstomía por rigidez peribucal y las contracturas fijas en flexión de los dedos de las manos." },
        ] },
      ],
    },

    {
      type: "points",
      kicker: "Monitoreo integral",
      title: "Tamizaje visceral y seguimiento ambulatorio",
      cards: [
        { title: "Espirometría y DLCO periódica", tag: "Cada 6 meses los primeros años", kind: "criteria", items: [
          { t: "Difusión de monóxido de carbono (DLCO)", d: "Detección precoz de daño intersticial y vascular",
            say: "La caída aislada de la difusión de monóxido de carbono en la espirometría completa es el primer signo de alarma de hipertensión pulmonar o fibrosis incipiente, precediendo a los cambios en las imágenes." },
          { t: "Capacidad vital forzada seriada", d: "Monitoreo de progresión fibrótica",
            say: "Una caída del diez por ciento o más en la capacidad vital forzada define progresión rápida de la fibrosis pulmonar y obliga a escalar a agentes antifibróticos." },
        ] },
        { title: "Automonitoreo tensional domiciliario", tag: "Vigilancia de crisis renal", kind: "key", items: [
          { t: "Toma de presión arterial dos veces por semana", d: "En pacientes con forma difusa reciente",
            say: "Todo paciente con esclerosis difusa debe tener un tensiómetro validado en casa para controlar su presión periódicamente. Cualquier alza persistente sobre ciento cuarenta con noventa exige consulta médica urgente." },
        ] },
      ],
    },

    {
      type: "table",
      kicker: "Trampas EUNACOM",
      title: "Diferencias cardinales: Esclerosis difusa vs Síndrome de CREST",
      head: ["Parámetro", "Esclerosis Cutánea Difusa", "Esclerosis Cutánea Limitada (CREST)", "Regla de oro EUNACOM"],
      rows: [
        { cells: ["Extensión cutánea", "Proximal a codos, rodillas y tronco", "Distal a codos y rodillas; respeta tronco", "El compromiso de tronco define la forma difusa"],
          say: "Comparemos ambas formas. Difusa: afecta tronco y zonas proximales. Limitada o CREST: respeta estrictamente tronco y muslos." },
        { cells: ["Fenómeno de Raynaud", "Inicio reciente simultáneo (< 1 año)", "Precede por muchos años o décadas", "Raynaud de larga data apunta a forma limitada"],
          say: "El fenómeno de Raynaud es simultáneo en la difusa y precede por décadas en la limitada." },
        { cells: ["Autoanticuerpo clave", "Anti-Scl-70 (Topoisomerasa I)", "Anticuerpos Anticentrómero (ACA)", "Anti-Scl setenta en difusa; anticentrómero en CREST"],
          say: "Autoanticuerpos: anti-Scl setenta en la forma difusa y anticuerpos anticentrómero en el síndrome de CREST." },
        { cells: ["Complicación pulmonar", "Fibrosis pulmonar intersticial precoz (EPID)", "Hipertensión arterial pulmonar tardía (HTP)", "EPID es la principal causa de muerte en difusa"],
          say: "Pulmón: fibrosis pulmonar intersticial en la difusa e hipertensión pulmonar tardía en el CREST." },
        { cells: ["Crisis renal", "Frecuente (10-15%) · Gatillada por corticoides", "Excepcional / Muy rara", "Crisis renal se trata con Captopril oral · Prohibido prednisona alta"],
          say: "Crisis renal: típica de la difusa, gatillada por corticoides y tratada de urgencia con captopril oral." },
      ],
    },

    {
      type: "quiz",
      kicker: "Caso clínico",
      title: "Caso clínico tipo EUNACOM",
      stem: "Mujer de 54 años con antecedente de esclerosis sistémica cutánea difusa diagnosticada hace 14 meses (Anti-Scl-70 positivo), en tratamiento con metotrexato y prednisona 20 mg/día por poliartralgias. Es traída a urgencias por cefalea intensa, visión borrosa y ortopnea. Al examen físico se constata PA 210/125 mmHg, FC 98 lpm, fondo de ojo con exudados algodonosos. Piel indurada en brazos y tronco. Exámenes: creatinina plasmática 3.2 mg/dL (basal 0.8 mg/dL hace 1 mes), nitrógeno ureico 55 mg/dL. El frotis sanguíneo evidencia abundantes esquistocitos (3%), plaquetas 82.000/mm³ y LDH marcadamente elevada.",
      question: "¿Cuál es el diagnóstico de esta emergencia médica, cuál fue el factor desencadenante y qué fármaco es el tratamiento de elección inmediato?",
      options: [
        { letter: "A", text: "Crisis renal esclerodérmica gatillada por prednisona a dosis alta y tratada con Captopril oral a dosis crecientes" },
        { letter: "B", text: "Glomerulonefritis postestreptocócica tratada con penicilina benzatina intramuscular" },
        { letter: "C", text: "Púrpura trombocitopénica trombótica idiopática tratada con plasmaféresis de urgencia exclusiva" },
        { letter: "D", text: "Nefritis lúpica proliferativa difusa tratada con pulsos de ciclofosfamida endovenosa" },
        { letter: "E", text: "Estenosis bilateral de arteria renal tratada con angioplastía con balón urgente" },
      ],
      correct: "A",
      explanation: "El cuadro clínico corresponde a una Crisis Renal Esclerodérmica clásica: emergencia hipertensiva maligna hiperreninémica con falla renal aguda oligoanúrica y anemia hemolítica microangiopática con esquistocitos. El uso de prednisona en dosis > 15 mg/día fue el factor desencadenante yatrogénico directo. El tratamiento de urgencia indiscutido que salva la función renal y la vida es la administración inmediata de un inhibidor de la ECA, de elección Captopril oral a dosis rápidamente crecientes, suspendiendo los corticoides.",
      say: {
        stem: "Caso clínico de urgencia. Mujer de cincuenta y cuatro años con esclerosis difusa tratada con prednisona veinte miligramos al día que ingresa con presión de doscientos diez con ciento veinticinco, creatinina en tres coma dos, esquistocitos en frotis y plaquetopenia.",
        question: "¿Cuál es el diagnóstico de esta emergencia médica, cuál fue el factor desencadenante y qué fármaco es el tratamiento de elección inmediato?",
        options: "Las alternativas: crisis renal esclerodérmica gatillada por prednisona y tratada con captopril oral, glomerulonefritis postestreptocócica, púrpura trombótica trombocitopénica sola, nefritis lúpica con ciclofosfamida, o estenosis de arteria renal. Piénsalo.",
        answer: "La respuesta correcta es la A. Es una crisis renal esclerodérmica clásica, precipitada por la dosis alta de prednisona. El tratamiento de elección inmediata son los inhibidores de la ECA, específicamente captopril oral a dosis crecientes para bloquear el sistema renina angiotensina.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2018 · Pregunta 11",
      stem: "Mujer de 50 años con esclerosis sistémica cutánea difusa en tratamiento con prednisona 20 mg al día por sinovitis consulta en urgencias por cefalea pulsátil intensa y mareos. Al examen físico se constata presión arterial de 205/115 mmHg. Los exámenes muestran una creatinina de 2.8 mg/dL (basal de 0.7 mg/dL) y el frotis sanguíneo revela abundantes esquistocitos con plaquetas de 85.000/mm³. ¿Cuál es el tratamiento antihipertensivo de elección indispensable para esta emergencia médica?",
      options: [
        { letter: "A", text: "Nitroprusiato de sodio en infusión continua exclusiva" },
        { letter: "B", text: "Inhibidor de la Enzima Convertidora de Angiotensina (Captopril oral en dosis crecientes)" },
        { letter: "C", text: "Metilprednisolona 1 g endovenoso por 3 días" },
        { letter: "D", text: "Amlodipino asociado a hidroclorotiazida oral" },
        { letter: "E", text: "Furosemida 80 mg endovenosa en bolo cada 6 horas" },
      ],
      correct: "B",
      explanation: "El cuadro corresponde a una Crisis Renal Esclerodérmica (urgencia hipertensiva hiperreninémica con anemia hemolítica microangiopática), gatillada con frecuencia por el uso de corticoides a dosis > 15 mg/día. El tratamiento farmacológico de elección absoluta que detiene la cascada renina-angiotensina y salva la función renal es el inicio inmediato de un IECA de acción corta como Captopril oral a dosis tituladas.",
      say: {
        stem: "Pregunta real del EUNACOM dos mil dieciocho, pregunta once. Paciente con esclerosis sistémica difusa que toma prednisona y consulta por crisis hipertensiva con alza de creatinina y esquistocitos.",
        question: "¿Cuál es el tratamiento antihipertensivo de elección indispensable para esta emergencia médica?",
        options: "Las opciones: nitroprusiato de sodio en infusión exclusiva, inhibidor de la ECA como captopril oral en dosis crecientes, metilprednisolona endovenosa, amlodipino con diurético, o furosemida en bolo. Piénsalo.",
        answer: "La respuesta correcta es la B. Los inhibidores de la enzima convertidora, de preferencia captopril oral, son el tratamiento de elección absoluta que bloquea la renina y salva el riñón en la crisis renal esclerodérmica.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2020 · Pregunta 23",
      stem: "Mujer de 45 años con antecedente de fenómeno de Raynaud severo de 10 años de evolución consulta por disfagia a sólidos, pirosis retroesternal y tirantez en la piel de los dedos. Al examen se observa engrosamiento cutáneo circunscrito a dedos de manos y antebrazos distales, calcificaciones subcutáneas periarticulares en pulpejos y telangiectasias faciales. El tronco y muslos presentan piel normal. ¿Cuál es el autoanticuerpo sérico más probablemente positivo en esta paciente?",
      options: [
        { letter: "A", text: "Anticuerpos Anti-Scl-70 (Anti-Topoisomerasa I)" },
        { letter: "B", text: "Anticuerpos Anticentrómero (ACA)" },
        { letter: "C", text: "Anticuerpos Anti-dsDNA" },
        { letter: "D", text: "Anticuerpos Anti-Sm" },
        { letter: "E", text: "Anticuerpos Anti-Jo-1" },
      ],
      correct: "B",
      explanation: "La paciente presenta la clínica clásica del síndrome de CREST (Calcinosis, Raynaud, Esofagopatía, Sclerodactilia, Telangiectasias), que corresponde a la forma cutánea limitada de la esclerosis sistémica (engrosamiento cutáneo restringido a manos/antebrazos distales y cara). El marcador serológico característico, presente en el 70-80% de estos pacientes, son los Anticuerpos Anticentrómero (ACA).",
      say: {
        stem: "EUNACOM dos mil veinte, pregunta veintitrés. Paciente de cuarenta y cinco años con fenómeno de Raynaud prolongado, reflujo severo, esclerodactilia, calcinosis en pulpejos y telangiectasias, con tronco y muslos respetados.",
        question: "¿Cuál es el autoanticuerpo sérico más probablemente positivo en esta paciente?",
        options: "Las opciones: anti-Scl setenta, anticuerpos anticentrómero, anti-ADN doble hebra, anti-Smith, o anti-Jo uno. Piénsalo.",
        answer: "Es la B. La paciente presenta un síndrome de CREST o esclerosis sistémica cutánea limitada clásica, cuyo marcador serológico por excelencia son los anticuerpos anticentrómero, positivos en más del setenta por ciento.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2022 · Pregunta 39",
      stem: "¿Cuál es la principal causa de muerte global en los pacientes con Esclerosis Sistémica Cutánea Difusa en la actualidad?",
      options: [
        { letter: "A", text: "Crisis renal esclerodérmica hiperreninémica" },
        { letter: "B", text: "Enfermedad pulmonar intersticial difusa (Fibrosis Pulmonar)" },
        { letter: "C", text: "Rotura de aneurisma aórtico torácico" },
        { letter: "D", text: "Hemorragia digestiva alta por esofagitis péptica" },
        { letter: "E", text: "Amiloidosis renal secundaria" },
      ],
      correct: "B",
      explanation: "Históricamente la crisis renal era la primera causa de muerte, pero tras la introducción de los IECA, la principal causa de muerte en la Esclerosis Sistémica Cutánea Difusa es la afectación pulmonar, específicamente la Enfermedad Pulmonar Intersticial Difusa (EPID / fibrosis pulmonar), seguida de la Hipertensión Arterial Pulmonar.",
      say: {
        stem: "Pregunta del EUNACOM dos mil veintidós, pregunta treinta y nueve. Se evalúa la mortalidad y causas de fallecimiento en esclerodermia.",
        question: "¿Cuál es la principal causa de muerte global en los pacientes con esclerosis sistémica cutánea difusa en la actualidad?",
        options: "Las alternativas: crisis renal esclerodérmica, enfermedad pulmonar intersticial difusa, rotura de aneurisma, hemorragia digestiva, o amiloidosis renal. Piénsalo.",
        answer: "La respuesta correcta es la B. Desde la introducción del captopril y los IECA que controlaron la crisis renal, la principal causa de muerte en la esclerosis difusa es la enfermedad pulmonar intersticial difusa o fibrosis pulmonar progresiva.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2023 · Pregunta 45",
      stem: "Una mujer de 58 años con antecedente de esclerosis sistémica cutánea limitada (CREST) de 15 años de evolución consulta por disnea de esfuerzo rápidamente progresiva en los últimos 3 meses, sin tos ni ortopnea. El examen pulmonar es limpio sin estertores crepitantes. El ecocardiograma Doppler transtorácico revela dilatación severa de cavidades derechas y una presión sistólica de arteria pulmonar (PSAP) estimada en 65 mmHg. La tomografía computarizada de tórax de alta resolución no muestra infiltrados intersticiales ni fibrosis. ¿Cuál es el diagnóstico más probable?",
      options: [
        { letter: "A", text: "Neumonía intersticial no específica (NINE)" },
        { letter: "B", text: "Hipertensión Arterial Pulmonar (HTP Grupo 1)" },
        { letter: "C", text: "Insuficiencia cardíaca con fracción de eyección preservada izquierda" },
        { letter: "D", text: "Tromboembolismo pulmonar crónico recurrente" },
        { letter: "E", text: "Estenosis mitral reumática severa" },
      ],
      correct: "B",
      explanation: "En la esclerosis sistémica cutánea limitada (CREST), la complicación visceral tardía más temida es la Hipertensión Arterial Pulmonar (HTP Grupo 1) por vasculopatía proliferativa obliterante de las arterias pulmonares pequeñas, que ocurre en ausencia de enfermedad pulmonar intersticial significativa. Se manifiesta típicamente tras más de 10-15 años de evolución con disnea de esfuerzo progresiva y sobrecarga de cavidades derechas.",
      say: {
        stem: "EUNACOM dos mil veintitrés, pregunta cuarenta y cinco. Mujer con síndrome de CREST de quince años de evolución que presenta disnea progresiva con pulmones limpios en tomografía y presión de arteria pulmonar estimada en sesenta y cinco milímetros de mercurio.",
        question: "¿Cuál es el diagnóstico más probable?",
        options: "Las opciones: neumonía intersticial no específica, hipertensión arterial pulmonar grupo uno, insuficiencia cardíaca izquierda, tromboembolismo crónico, o estenosis mitral. Piénsalo.",
        answer: "Es la B. En la esclerosis limitada o CREST, la complicación tardía típica tras más de una década de evolución es la hipertensión arterial pulmonar aislada del grupo uno, en ausencia de fibrosis parenquimatosa.",
      },
    },

    {
      type: "points",
      kicker: "Cierre",
      title: "Reglas de oro para el examen",
      cards: [
        { title: "Difusa vs Limitada (CREST)", tag: "Anticuerpos y extensión", kind: "alert", items: [
          { t: "Difusa: tronco, anti-Scl-70 y EPID", d: "Fibrosis pulmonar como principal causa de muerte",
            say: "Cerramos con las tres reglas de oro. Primero: la forma difusa compromete el tronco, porta anticuerpos anti-Scl setenta y su principal causa de muerte es la fibrosis pulmonar intersticial." },
          { t: "Limitada: respeta tronco, ACA y CREST", d: "Hipertensión pulmonar aislada como complicación tardía",
            say: "La forma limitada respeta el tronco, conforma el síndrome de CREST con anticuerpos anticentrómero y desarrolla hipertensión pulmonar tardía." },
        ] },
        { title: "Crisis renal y regla de los IECA", tag: "Rescate hiperreninémico", kind: "pharma", items: [
          { t: "Emergencia hipertensiva con esquistocitos", d: "Tratamiento inmediato con Captopril oral",
            say: "Segundo: la crisis renal esclerodérmica cursa con hipertensión maligna, alza de creatinina y esquistocitos, y su tratamiento indiscutido de elección es el captopril oral a dosis plenas." },
          { t: "Prohibición formal de corticoides altos", d: "Prednisona mayor a 15 mg al día contraindicada",
            say: "Los corticoides en dosis sobre quince miligramos al día están terminantemente prohibidos en esclerosis difusa porque precipitan la crisis renal." },
        ] },
        { title: "Dismotilidad y manejo digestivo", tag: "Esofagopatía y reflujo", kind: "criteria", items: [
          { t: "Atrofia del músculo liso esofágico", d: "IBP a dosis dobles permanentes",
            say: "Tercero: el compromiso esofágico por atrofia muscular lisa produce reflujo grave y disfagia motora, requiriendo inhibidores de bomba a dosis dobles." },
          { t: "Seguimiento interdisciplinario", d: "Ecocardiograma anual y función pulmonar",
            say: "Todo paciente exige ecocardiograma anual para pesquisar hipertensión pulmonar. Si te llevas una sola idea de hoy: la difusa tiene anti-Scl setenta y mata por fibrosis pulmonar, el CREST tiene anticentrómero y hace hipertensión pulmonar tardía, y la crisis renal se rescata con captopril y jamás con corticoides. Nos vemos en la próxima clase." },
        ] },
      ],
    },
  ],

  pathway: {
    title: "Algoritmo diagnóstico y terapéutico: Esclerosis Sistémica",
    root: N("start", "Sospecha de Esclerosis Sistémica", "Fenómeno de Raynaud, dedos hinchados (puffy fingers) o induración cutánea",
      "Paciente que consulta por fenómeno de Raynaud y cambios cutáneos indurativos sugerentes de conectivopatía.",
      ["", N("q", "¿Extensión del engrosamiento cutáneo proximal a codos/rodillas o tronco?", "Clasificación de LeRoy",
        "Se evalúa la extensión anatómica de la afectación dérmica mediante examen físico.",
        ["SÍ: Afecta tronco y extremidades proximales", N("do", "Esclerosis Sistémica Cutánea Difusa", "Solicitar Anti-Scl-70 y Anti-ARN Polimerasa III",
          "Diagnóstico de esclerosis sistémica difusa. Solicitar anticuerpos anti-Scl setenta y anti-ARN polimerasa tres, y evaluar parénquima pulmonar con tomografía de alta resolución.",
          ["", N("q", "¿Aparición aguda de hipertensión severa o deterioro de función renal?", "Sospecha de Crisis Renal Esclerodérmica",
            "Se monitoriza la presión arterial y la creatinina sérica.",
            ["SÍ: Crisis Renal Esclerodérmica", N("alert", "Iniciar Captopril oral a dosis tituladas crecientes", "PROHIBIDO usar dosis altas de glucocorticoides",
              "Emergencia vital. Hospitalizar de inmediato e iniciar inhibidores de la ECA con captopril oral a dosis plenas. Prohibidos los corticoides en dosis mayores a quince miligramos al día.")],
            ["NO: Sin crisis renal", N("ok", "Tratar Fibrosis Pulmonar (EPID) con Micofenolato", "Monitoreo tensional ambulatorio y función pulmonar",
              "Manejo de la enfermedad pulmonar intersticial con micofenolato mofetilo o nintedanib, manteniendo vigilancia tensional domiciliaria estricta.")])])],
        ["NO: Restringido a dedos, manos y cara (respeta tronco)", N("do", "Esclerosis Sistémica Cutánea Limitada (Síndrome de CREST)", "Solicitar Anticuerpos Anticentrómero (ACA)",
          "Diagnóstico de esclerosis limitada o CREST. Confirmar con anticuerpos anticentrómero.",
          ["", N("q", "¿Presencia de disnea de esfuerzo o sospecha de Hipertensión Pulmonar?", "Tamizaje ecocardiográfico anual",
            "Se realiza ecocardiograma Doppler transtorácico anual para evaluar presión pulmonar.",
            ["SÍ: PSAP elevada en ecocardiograma", N("refer", "Cateterismo cardíaco derecho y vasodilatadores pulmonares", "Sildenafil más antagonistas del receptor de endotelina",
              "Confirmar hipertensión arterial pulmonar grupo uno mediante cateterismo derecho e iniciar terapia vasodilatadora específica combinada.")],
            ["NO: PSAP normal y asintomático", N("ok", "Manejo sintomático de reflujo y Raynaud", "IBP a dosis dobles más nifedipino oral para vasoespasmo",
              "Manejo del síndrome seco y esofagopatía con inhibidores de bomba de protones a dosis altas continuas y nifedipino para el fenómeno de Raynaud.")])])])]),
  },
};
