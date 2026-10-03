// Clase 1.15 — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_reumatologia_bloque_3.cjs (reuma-15).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: "reuma-15",
  tier: 2,
  slides: [
    {
      type: "cover",
      subtitle: "Xeroftalmia, xerostomía, biopsia labial, riesgo de linfoma MALT y síndrome de Sharp por anticuerpos anti-U1-RNP",
      say: "Bienvenidos. En esta clase quince revisamos dos entidades autoinmunes de enorme relevancia en el examen: el Síndrome de Sjögren primario y la Enfermedad Mixta del Tejido Conectivo. Analizaremos el síndrome sicca con sequedad ocular y bucal, el test de Schirmer, la biopsia de glándulas salivales menores, el riesgo aumentado cuarenta veces de linfoma no Hodgkin tipo MALT, y la tríada clínica de la enfermedad mixta definida por los anticuerpos anti-U uno RNP y su temida hipertensión pulmonar. Comencemos.",
    },

    {
      type: "flow",
      kicker: "Inmunopatogenia epitelial",
      title: "Exocrinopatía autoinmune: del infiltrado a la atrofia acinar",
      nodes: [
        { id: "auto", col: 0, row: 1, k: "start", t: "Autoinmunidad epiteliotrópica", s: "Activación linfocítica T CD4+ y células B" },
        { id: "inf", col: 1, row: 0, k: "mech", t: "Infiltración periductal focal", s: "Agresión inflamatoria de glándulas exocrinas" },
        { id: "apo", col: 2, row: 0, k: "alert", t: "Apoptosis y atrofia de acinos", s: "Pérdida irreversible de lágrimas y saliva" },
        { id: "clon", col: 2, row: 2, k: "risk", t: "Hiperreactividad policlonal B", s: "Riesgo de transformación a Linfoma MALT" },
      ],
      edges: [
        { from: "auto", to: "inf" },
        { from: "inf", to: "apo" },
        { from: "auto", to: "clon" },
      ],
      steps: [
        { show: ["auto", "inf", "apo"], note: "Destrucción glandular exocrina progresiva",
          say: "El síndrome de Sjögren es una exocrinopatía autoinmune caracterizada por la infiltración linfocitaria progresiva de las glándulas exocrinas. Linfocitos T cooperadores y células B secretoras rodean los conductos secretores, induciendo la apoptosis y la atrofia del tejido acinar lagrimal y salival." },
        { show: ["clon"], note: "Proliferación clonal B y riesgo de linfoma",
          say: "En paralelo, ocurre una estimulación continua y desregulada de los linfocitos B periféricos. Esto produce una hipergammaglobulinemia policlonal marcada y crea el sustrato celular para una eventual transformación neoplásica hacia un linfoma de células B tipo MALT." },
      ],
    },

    {
      type: "points",
      kicker: "Cuadro glandular cardinal",
      title: "El Síndrome Sicca: Xeroftalmia, xerostomía y parotidomegalia",
      cards: [
        { title: "Xeroftalmia (Queratoconjuntivitis seca)", tag: "Sensación de arenilla y ardor", kind: "criteria", items: [
          { t: "Cuerpo extraño ocular crónico", d: "Ardor, ojo rojo y dificultad con pantallas",
            say: "La xeroftalmia se manifiesta como una molesta sensación constante de cuerpo extraño o arenilla bajo los párpados. Los pacientes sufren ardor, fotofobia, hiperemia conjuntival y gran fatiga visual al leer o mirar pantallas por evaporación lagrimal acelerada." },
          { t: "Erosiones corneales por desecación", d: "Riesgo de queratopatía punteada",
            say: "La pérdida de la película lagrimal deja expuesto el epitelio corneal al roce mecánico, originando microerosiones que pueden evolucionar a úlceras corneales e infecciones bacterianas graves si no se lubrican adecuadamente." },
        ] },
        { title: "Xerostomía y aumento parotídeo", tag: "Caries cervicales e hipertrofia", kind: "alert", items: [
          { t: "Boca seca y necesidad de líquidos", d: "Imposibilidad de tragar alimentos secos",
            say: "La xerostomía severa obliga a los pacientes a beber agua constantemente para humedecer la mucosa y poder deglutir alimentos secos como pan o galletas, despertándose con frecuencia por las noches debido a la sequedad oral extrema." },
          { t: "Caries cervicales y aumento de parótidas", d: "Pérdida de la protección antibacteriana de saliva",
            say: "La falta de saliva barre la protección enzimática bucal, generando múltiples caries en el cuello de los dientes y candidiasis oral recurrente. En un tercio de los pacientes se palpa un aumento de volumen indoloro y blando de ambas glándulas parótidas." },
        ] },
      ],
    },

    {
      type: "points",
      kicker: "Pruebas objetivas y biopsia",
      title: "Confirmación diagnóstica: Test de Schirmer y Glándula Salival",
      cards: [
        { title: "Evaluación objetiva del flujo lagrimal", tag: "Test de Schirmer en el consultorio", kind: "criteria", items: [
          { t: "Test de Schirmer menor a cinco milímetros", d: "Papel filtro en fondo de saco durante cinco minutos",
            say: "El test de Schirmer confirma objetivamente el ojo seco: se coloca una tira milimetrada de papel filtro en el fondo de saco conjuntival inferior durante cinco minutos. Si la impregnación lagrimal es menor a cinco milímetros, el test es estrictamente patológico." },
          { t: "Tinciones corneales de fluoresceína", d: "Puntaje de verde de lisamina o rosa de bengala",
            say: "Las tinciones con fluoresceína o rosa de bengala permiten cuantificar el daño y la descamación del epitelio corneal y conjuntival provocados por la sequedad crónica mediante lámpara de hendidura." },
        ] },
        { title: "Biopsia de glándula salival menor", tag: "Patrón de oro histopatológico", kind: "key", items: [
          { t: "Puntaje focal de infiltración linfocitaria", d: "Al menos un foco por cada cuatro milímetros cuadrados",
            say: "La biopsia de glándulas salivales accesorias del labio inferior es el patrón de oro diagnóstico. Demuestra sialoadenitis linfocítica focal con un puntaje de foco igual o superior a un agregado de cincuenta linfocitos por cada cuatro milímetros cuadrados de tejido." },
        ] },
      ],
    },

    {
      type: "flow",
      kicker: "Perfil serológico y riesgo oncológico",
      title: "Anti-Ro, Anti-La y la temida complicación por Linfoma MALT",
      nodes: [
        { id: "ser", col: 0, row: 1, k: "start", t: "Autoanticuerpos circulantes", s: "Marcadores serológicos distintivos" },
        { id: "ro", col: 1, row: 0, k: "alert", t: "Anti-Ro (SSA) y Anti-La (SSB)", s: "Positivos en la mayoría de los enfermos" },
        { id: "neo", col: 1, row: 2, k: "good", t: "Lupus neonatal y Bloqueo Cardíaco", s: "Paso transplacentario a fetos en embarazadas" },
        { id: "mal", col: 2, row: 1, k: "risk", t: "Linfoma No Hodgkin de células B (MALT)", s: "Riesgo cuarenta veces mayor que la población general" },
      ],
      edges: [
        { from: "ser", to: "ro" },
        { from: "ro", to: "neo" },
        { from: "ser", to: "mal" },
      ],
      steps: [
        { show: ["ser", "ro"], note: "Anticuerpos anti-Ro y anti-La",
          say: "Los anticuerpos anti-Ro o SSA resultan positivos en hasta un ochenta por ciento de los casos, y los anti-La o SSB en un cincuenta por ciento. Son marcadores fundamentales en los criterios diagnósticos internacionales de la sociedad de reumatología." },
        { show: ["neo"], note: "Riesgo obstétrico de bloqueo AV fetal",
          say: "El anticuerpo anti-Ro atraviesa la placenta durante el embarazo y puede atacar el tejido de conducción cardíaco del feto, causando un bloqueo aurículoventricular congénito completo e irreversible que exige ecocardiografías fetales seriadas." },
        { show: ["mal"], note: "Alerta máxima: Linfoma MALT",
          say: "Esta es una de las preguntas favoritas del EUNACOM: los pacientes con síndrome de Sjögren presentan un riesgo hasta cuarenta veces mayor de desarrollar linfoma no Hodgkin de células B, especialmente del tejido linfoide asociado a mucosas en glándulas parótidas." },
      ],
    },

    {
      type: "points",
      kicker: "Manifestaciones extraglandulares",
      title: "Compromiso sistémico: Artritis, acidosis renal y vasculitis",
      cards: [
        { title: "Manifestaciones osteoarticulares y renales", tag: "Compromiso articular y tubular", kind: "criteria", items: [
          { t: "Poliartritis no erosiva", d: "Dolor simétrico en manos sin destrucción ósea",
            say: "Hasta la mitad de los enfermos presentan poliartralgias o artritis simétrica no erosiva de pequeñas articulaciones, semejante al lupus pero sin la destrucción articular que caracteriza a la artritis reumatoide." },
          { t: "Acidosis tubular renal distal tipo uno", d: "Hipopotasemia y riesgo de nefrocalcinosis",
            say: "La nefritis intersticial autoinmune lesiona los túbulos distales, provocando acidosis tubular renal con incapacidad para acidificar la orina, hipopotasemia con debilidad muscular y formación de cálculos renales de repetición." },
        ] },
        { title: "Banderas rojas de linfoma B activo", tag: "Signos de alarma hematológica", kind: "alert", items: [
          { t: "Parotidomegalia unilateral dura o persistente", d: "Crecimiento asimétrico tumoral",
            say: "Si una parótida se torna dura, nodular o crece de forma marcadamente asimétrica, se debe sospechar de inmediato una transformación linfomatosa maligna y solicitar una biopsia tisular guiada por imágenes." },
          { t: "Púrpura palpable e hipocomplementemia", d: "Crioglobulinemia mixta tipo dos",
            say: "La aparición de púrpura palpable en extremidades inferiores, descenso brusco del complemento sérico y pico monoclonal en la electroforesis de proteínas son claros heraldos de proliferación linfoide clonal neoplásica." },
        ] },
      ],
    },

    {
      type: "flow",
      kicker: "Síndrome de superposición",
      title: "Enfermedad Mixta del Tejido Conectivo (Síndrome de Sharp)",
      nodes: [
        { id: "tri", col: 0, row: 1, k: "start", t: "Superposición clínica", s: "Rasgos combinados de Lupus, Esclerodermia y Polimiositis" },
        { id: "rnp", col: 1, row: 0, k: "alert", t: "Anti-U1-RNP a títulos muy altos", s: "Marcador patognomónico con anti-ADN y anti-Sm negativos" },
        { id: "man", col: 1, row: 2, k: "mech", t: "Fenómeno de Raynaud y Dedos tumefactos", s: "Manos hinchadas en salchicha (puffy fingers)" },
        { id: "htp", col: 2, row: 1, k: "risk", t: "Hipertensión Arterial Pulmonar (HTP)", s: "Principal causa de mortalidad en la EMTC" },
      ],
      edges: [
        { from: "tri", to: "rnp" },
        { from: "tri", to: "man" },
        { from: "rnp", to: "htp" },
        { from: "man", to: "htp" },
      ],
      steps: [
        { show: ["tri", "rnp"], note: "Superposición y anticuerpo anti-U1-RNP",
          say: "La enfermedad mixta del tejido conectivo o síndrome de Sharp fusiona características del lupus, la esclerosis sistémica y la polimiositis. Su sello serológico patognomónico es la presencia de anticuerpos anti-U uno RNP a títulos muy altos, mayores a uno en mil." },
        { show: ["man"], note: "Manos tumefactas y Raynaud universal",
          say: "Casi el cien por ciento de los pacientes presentan fenómeno de Raynaud severo y manos tumefactas con dedos en salchicha o puffy fingers, junto a miositis con elevación de enzimas musculares y artralgias periféricas difusas." },
        { show: ["htp"], note: "Principal causa de muerte: HTP",
          say: "La principal causa de mortalidad en la enfermedad mixta del tejido conectivo es la hipertensión arterial pulmonar. Es una complicación insidiosa y letal que exige un cribado anual protocolizado con ecocardiograma transtorácico con Doppler." },
      ],
    },

    {
      type: "table",
      kicker: "Trampas EUNACOM",
      title: "Diagnóstico diferencial: Sjögren vs EMTC vs Lupus Eritematoso",
      head: ["Patología", "Manifestación Cardinal", "Anticuerpo Clave", "Complicación de Mayor Alerta"],
      rows: [
        { cells: ["Síndrome de Sjögren", "Xeroftalmia + Xerostomía + Parótidas", "Anti-Ro (SSA) y Anti-La (SSB)", "Linfoma No Hodgkin B (MALT en parótidas)"],
          say: "Revisemos la tabla. El síndrome de Sjögren cursa con sequedad ocular y bucal, anticuerpos anti-Ro y anti-La, y su principal alarma es el linfoma no Hodgkin tipo MALT." },
        { cells: ["Enfermedad Mixta (EMTC)", "Raynaud + Puffy fingers + Miositis", "Anti-U1-RNP en títulos altos (>1:1.000)", "Hipertensión Arterial Pulmonar (HTP letal)"],
          say: "La enfermedad mixta combina Raynaud, dedos tumefactos y miositis, con anticuerpos anti-U uno RNP muy elevados y la hipertensión pulmonar como principal causa de muerte." },
        { cells: ["Lupus Eritematoso Sistémico", "Eritema malar + Fotosensibilidad + Artritis", "Anti-ADN doble hebra y Anti-Smith", "Nefritis lúpica proliferativa difusa"],
          say: "El lupus eritematoso sistémico destaca por eritema en mariposa, anticuerpos anti-ADN de doble cadena y anti-Smith, con la nefritis lúpica como mayor amenaza de falla orgánica." },
      ],
    },

    {
      type: "quiz",
      kicker: "Caso clínico",
      title: "Caso clínico tipo EUNACOM",
      stem: "Mujer de 48 años consulta por sensación constante de arenilla en ambos ojos y ardor ocular que le dificulta leer y usar pantallas, de 1 año de evolución. Además refiere boca seca que la obliga a levantarse por las noches a beber agua y necesidad de líquidos abundantes para deglutir alimentos secos como pan o galletas. Su odontólogo le ha tratado 5 caries en el cuello de las piezas dentarias en los últimos 6 meses. Al examen físico se palpa aumento de volumen indoloro y blando de ambas glándulas parótidas. El test de Schirmer muestra un lagrimeo de 2 mm en 5 minutos en ambos ojos. Los exámenes revelan ANA positivos 1:320 y anticuerpos Anti-Ro (SSA) fuertemente positivos.",
      question: "¿Cuál es el diagnóstico clínico más probable y cuál es el pilar del tratamiento sintomático inicial?",
      options: [
        { letter: "A", text: "Síndrome de Sjögren primario; indicar lágrimas artificiales sin preservantes, lubricantes salivales y medidas de higiene oral estricta" },
        { letter: "B", text: "Lupus eritematoso sistémico; iniciar pulsos de ciclofosfamida endovenosa urgente" },
        { letter: "C", text: "Sarcoidosis sistémica; iniciar prednisona oral 1 mg/kg/día por seis meses" },
        { letter: "D", text: "Amiloidosis primaria; programar biopsia de grasa subcutánea periumbilical" },
        { letter: "E", text: "Artritis reumatoide seronegativa; iniciar metotrexato subcutáneo inmediato" },
      ],
      correct: "A",
      explanation: "El cuadro clínico reúne todos los criterios del Síndrome de Sjögren primario: queratoconjuntivitis seca sintomática y objetivada por Test de Schirmer patológico (< 5 mm en 5 minutos), xerostomía severa con caries rampantes de cuello, hipertrofia parotídea bilateral indolora y presencia de autoanticuerpos Anti-Ro (SSA) positivos. El tratamiento inicial de las manifestaciones sicca es el reemplazo tópico con lágrimas artificiales, lubricación salival constante, pilocarpina oral si hay reserva glandular e higiene odontológica rigurosa.",
      say: {
        stem: "Caso clínico. Mujer de cuarenta y ocho años con ardor ocular, sensación de arenilla, boca seca con caries cervicales múltiples, parótidas aumentadas de volumen, test de Schirmer en dos milímetros y anticuerpos anti-Ro positivos.",
        question: "¿Cuál es el diagnóstico clínico más probable y cuál es el pilar del tratamiento sintomático inicial?",
        options: "Las alternativas: síndrome de Sjögren primario con lágrimas artificiales y lubricación oral, lupus con ciclofosfamida, sarcoidosis con corticoides, amiloidosis con biopsia de grasa, o artritis reumatoide con metotrexato. Piénsalo.",
        answer: "La respuesta correcta es la A. Es un síndrome de Sjögren primario de libro. El manejo de la sequedad glandular se basa en la lubricación sintomática con lágrimas artificiales sin conservantes, sustitutos salivales e higiene dental preventiva rigurosa.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2018 · Pregunta 08",
      stem: "Mujer de 52 años consulta por sensación de cuerpo extraño ocular persistente y boca seca de 8 meses. Al examen se observa hiperemia conjuntival bilateral y caries cervicales múltiples. El test de Schirmer arroja 3 mm en 5 minutos en ojo derecho y 2 mm en ojo izquierdo. Los anticuerpos Anti-Ro (SSA) son positivos. ¿Cuál es la complicación neoplásica hematológica que presenta un riesgo incrementado de hasta 40 veces en esta patología?",
      options: [
        { letter: "A", text: "Leucemia mieloide aguda" },
        { letter: "B", text: "Linfoma No Hodgkin de células B (tipo MALT)" },
        { letter: "C", text: "Mieloma múltiple de cadenas pesadas" },
        { letter: "D", text: "Enfermedad de Hodgkin esclerosante nodular" },
        { letter: "E", text: "Carcinoma epidermoide de labio inferior" },
      ],
      correct: "B",
      explanation: "Los pacientes con Síndrome de Sjögren primario tienen un riesgo relativo hasta 40 veces superior al de la población general de desarrollar Linfoma No Hodgkin de células B, especialmente del subtipo de tejido linfoide asociado a mucosas (Linfoma MALT) con asiento en glándulas salivales mayores (parótidas) o tracto digestivo.",
      say: {
        stem: "EUNACOM dos mil dieciocho, pregunta ocho. Paciente de cincuenta y dos años con síndrome de Sjögren confirmado por test de Schirmer y anticuerpos anti-Ro positivos.",
        question: "¿Cuál es la complicación neoplásica hematológica que presenta un riesgo incrementado de hasta cuarenta veces en esta patología?",
        options: "Las opciones: leucemia mieloide aguda, linfoma no Hodgkin de células B tipo MALT, mieloma múltiple, enfermedad de Hodgkin, o carcinoma epidermoide. Piénsalo.",
        answer: "Es la B. El riesgo de linfoma no Hodgkin de células B, particularmente de tejido linfoide asociado a mucosas en las parótidas, se eleva hasta cuarenta veces en pacientes con síndrome de Sjögren primario.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2021 · Pregunta 35",
      stem: "Mujer de 34 años consulta por fenómeno de Raynaud bilateral intenso, dedos de las manos tumefactos en salchicha (puffy fingers), debilidad muscular proximal en muslos y hombros con CPK elevada en 1.200 U/L y artralgias en muñecas. No presenta compromiso renal ni neurológico. Se solicitan anticuerpos antinucleares que resultan positivos en título 1:1.280 con patrón moteado. ¿Qué anticuerpo específico confirma el diagnóstico de Enfermedad Mixta del Tejido Conectivo?",
      options: [
        { letter: "A", text: "Anticuerpos Anti-U1-RNP (ribonucleoproteína) a títulos elevados" },
        { letter: "B", text: "Anticuerpos Anti-centrómero" },
        { letter: "C", text: "Anticuerpos Anti-dsDNA" },
        { letter: "D", text: "Anticuerpos Anti-Scl-70" },
        { letter: "E", text: "Anticuerpos Anti-histona" },
      ],
      correct: "A",
      explanation: "La presencia de características clínicas superpuestas de lupus, esclerodermia y polimiositis (Raynaud, dedos en salchicha, miositis proximal con CPK alta) asociada a la presencia de anticuerpos dirigidos contra la ribonucleoproteína U1 (Anti-U1-RNP) en títulos muy elevados (> 1:1.000) en ausencia de anti-dsDNA y anti-Sm define patognomónicamente la Enfermedad Mixta del Tejido Conectivo (Síndrome de Sharp).",
      say: {
        stem: "Pregunta del EUNACOM dos mil veintiuno, pregunta treinta y cinco. Paciente joven con fenómeno de Raynaud, dedos tumefactos en salchicha, debilidad con CPK elevada y anticuerpos antinucleares moteados.",
        question: "¿Qué anticuerpo específico confirma el diagnóstico de Enfermedad Mixta del Tejido Conectivo?",
        options: "Las alternativas: anticuerpos anti-U uno RNP a títulos altos, anticentrómero, anti-ADN de doble cadena, anti-Scl setenta, o anti-histona. Piénsalo.",
        answer: "La respuesta correcta es la A. El anticuerpo anti-U uno RNP a títulos altos es el sello patognomónico de la enfermedad mixta del tejido conectivo o síndrome de Sharp.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2023 · Pregunta 41",
      stem: "¿Cuál es la principal causa de mortalidad en los pacientes con diagnóstico confirmado de Enfermedad Mixta del Tejido Conectivo (Síndrome de Sharp), justificando su tamizaje anual mediante ecocardiograma Doppler transtorácico?",
      options: [
        { letter: "A", text: "Glomerulonefritis lúpica rápidamente progresiva" },
        { letter: "B", text: "Hipertensión Arterial Pulmonar (HTP)" },
        { letter: "C", text: "Hemorragia alveolar difusa autoinmune" },
        { letter: "D", text: "Crisis renal esclerodérmica con hiperreninemia" },
        { letter: "E", text: "Tromboembolismo pulmonar masivo recurrente" },
      ],
      correct: "B",
      explanation: "A diferencia del LES (donde la nefropatía y las infecciones son líderes de letalidad) o de la esclerosis sistémica difusa (fibrosis pulmonar y crisis renal), en la Enfermedad Mixta del Tejido Conectivo la Hipertensión Arterial Pulmonar es la principal causa de muerte, siendo a menudo asintomática en etapas tempranas.",
      say: {
        stem: "EUNACOM dos mil veintitrés, pregunta cuarenta y uno. Se interroga sobre el pronóstico y letalidad en el síndrome de Sharp.",
        question: "¿Cuál es la principal causa de mortalidad en la Enfermedad Mixta del Tejido Conectivo, justificando el cribado anual con ecocardiograma Doppler?",
        options: "Las opciones: glomerulonefritis rápidamente progresiva, hipertensión arterial pulmonar, hemorragia alveolar, crisis renal esclerodérmica, o tromboembolismo pulmonar. Piénsalo.",
        answer: "Es la B. La hipertensión arterial pulmonar es la causa número uno de fallecimiento en la enfermedad mixta. Su progresión silenciosa obliga a realizar un ecocardiograma Doppler de control cada doce meses.",
      },
    },

    {
      type: "points",
      kicker: "Cierre",
      title: "Reglas de oro para el examen",
      cards: [
        { title: "Síndrome de Sjögren diagnóstico y oncológico", tag: "Schirmer, anti-Ro y Linfoma MALT", kind: "criteria", items: [
          { t: "Ojo seco, boca seca y test de Schirmer", d: "Test menor a cinco milímetros y biopsia salival con focos",
            say: "Concluimos con las reglas de oro de la clase. Primero: el síndrome de Sjögren cursa con xeroftalmia, xerostomía, test de Schirmer menor a cinco milímetros y biopsia de glándula salival menor con focos linfocitarios." },
          { t: "Riesgo de Linfoma MALT cuarenta veces mayor", d: "Alerta máxima ante parótida dura o asimétrica",
            say: "Segundo: los anticuerpos anti-Ro y anti-La apoyan el diagnóstico, recordando siempre el riesgo aumentado cuarenta veces de linfoma no Hodgkin tipo MALT si hay crecimiento tumoral parotídeo." },
        ] },
        { title: "Enfermedad Mixta y mortalidad", tag: "Anti-U1-RNP e Hipertensión Pulmonar", kind: "alert", items: [
          { t: "Anti-U1-RNP y dedos tumefactos", d: "Superposición de lupus, esclerodermia y miositis",
            say: "Tercero: la enfermedad mixta del tejido conectivo fusiona lupus, esclerodermia y miositis en presencia del anticuerpo anti-U uno RNP a títulos muy altos." },
          { t: "Hipertensión pulmonar como principal causa de muerte", d: "Tamizaje anual con ecocardiograma Doppler",
            say: "La hipertensión arterial pulmonar es la principal causa de muerte en la enfermedad mixta y exige ecocardiograma Doppler anual. Si te llevas una sola idea de hoy: ojo seco y boca seca con anti-Ro orienta a Sjögren y vigila el linfoma; dedos tumefactos y miositis con anti-U uno RNP es enfermedad mixta y vigila la hipertensión pulmonar. Nos vemos en la próxima clase." },
        ] },
      ],
    },
  ],

  pathway: {
    title: "Algoritmo de enfrentamiento: Síndrome Sicca y Sospecha de Sjögren o EMTC",
    root: N("start", "Sospecha de Síndrome Sicca o Conectivopatía Superpuesta", "Xeroftalmia, xerostomía o dedos tumefactos con Raynaud",
      "Paciente que consulta por sequedad bucoocular crónica o clínica inflamatoria superpuesta de manos.",
      ["", N("q", "¿Síndrome Sicca puro (ojo seco y boca seca) o síntomas de superposición conectiva?", "Diferenciación sindromática inicial",
        "Se evalúa si la clínica es predominantemente de glándulas exocrinas o de conectivopatía múltiple.",
        ["Predominio glandular: Ojo seco y boca seca", N("do", "Estudio de Síndrome de Sjögren", "Realizar Test de Schirmer y solicitar ANA, Anti-Ro y Anti-La",
          "Sospecha de Sjögren primario. Confirmar hiposecreción lagrimal con test de Schirmer y solicitar perfil de autoanticuerpos.",
          ["", N("q", "¿Test de Schirmer patológico (<5 mm) y Anti-Ro / Anti-La positivos?", "Confirmación de criterios diagnósticos",
            "Se evalúan los criterios de clasificación internacionales.",
            ["SÍ: Criterios cumplidos", N("ok", "Síndrome de Sjögren confirmado: Lubricación y Vigilancia de Linfoma", "Lágrimas artificiales, higiene oral y seguimiento de glándulas parótidas",
              "Diagnóstico de Sjögren. Manejo sintomático de sequedad y vigilancia periódica de aumento parotídeo o linfoma MALT.")],
            ["NO: Dudoso o anticuerpos negativos", N("refer", "Programar Biopsia de Glándula Salival Menor", "Derivar a Reumatología para estudio histopatológico del labio inferior",
              "Ante alta sospecha con serología negativa, la biopsia de glándula salival menor es el estándar de oro para confirmar sialoadenitis.")])])],
        ["Superposición conectiva: Raynaud, puffy fingers y miositis", N("do", "Estudio de Enfermedad Mixta del Tejido Conectivo", "Solicitar CPK sérica, ANA y anticuerpos Anti-U1-RNP",
          "Clínica sugerente de síndrome de Sharp. Dosificar enzimas musculares y solicitar anticuerpos anti-U uno RNP.",
          ["", N("q", "¿Anti-U1-RNP positivo a títulos altos (>1:1.000) con anti-ADN (-)?", "Confirmación serológica patognomónica",
            "Se revisa el perfil inmunológico específico.",
            ["SÍ: Anti-U1-RNP positivo alto", N("ok", "Diagnóstico de EMTC: Inmunosupresión y Tamizaje de HTP", "Indicar corticoides, FARME y solicitar Ecocardiograma Doppler anual",
              "Confirmación de EMTC. Iniciar tratamiento según órganos afectados y realizar ecocardiograma Doppler anual obligatorio para pesquisar hipertensión pulmonar.")],
            ["NO: Otros anticuerpos positivos", N("refer", "Reclasificar como LES, Esclerodermia o Polimiositis pura", "Derivar a Reumatología para manejo de conectivopatía específica",
              "Reclasificar cuadro según compromiso dominante y perfil serológico hacia lupus, esclerodermia o miopatía inflamatoria pura.")])])])]),
  },
};
