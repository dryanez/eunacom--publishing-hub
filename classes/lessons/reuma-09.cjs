// Clase 1.9 — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_reumatologia_bloque_2.cjs (reuma-09).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: "reuma-09",
  tier: 3,
  slides: [
    {
      type: "cover",
      subtitle: "Biopsia renal oportuna, inducción con micofenolato y rescate con pulsos de metilprednisolona",
      say: "Bienvenidos. Hoy revisamos la nefritis lúpica y el compromiso orgánico mayor en el lupus eritematoso sistémico, una de las urgencias médicas más temidas y preguntadas en el EUNACOM. Aprenderemos las indicaciones formales de la biopsia renal percutánea, las seis clases histológicas con énfasis en la clase cuatro proliferativa difusa y la clase cinco membranosa, el protocolo moderno de inducción con pulsos y micofenolato, y la mantención obligatoria por al menos tres a cinco años. Comencemos.",
    },

    {
      type: "flow",
      kicker: "Fisiopatología renal",
      title: "Depósito de inmunocomplejos y patrones glomerulares",
      nodes: [
        { id: "inm", col: 0, row: 1, k: "start", t: "Inmunocomplejos circulantes", s: "Autoanticuerpos ADN y anti-ADN" },
        { id: "sub", col: 1, row: 0, k: "mech", t: "Depósitos subendoteliales", s: "Contacto directo con la circulación capilar" },
        { id: "epi", col: 1, row: 2, k: "mech", t: "Depósitos subepiteliales", s: "Entre la membrana basal y los podocitos" },
        { id: "pro", col: 2, row: 0, k: "alert", t: "Patrón proliferativo (Clase III y IV)", s: "Inflamación endocapilar y semilunas" },
        { id: "mem", col: 2, row: 2, k: "alert", t: "Patrón membranoso (Clase V)", s: "Daño podocitario sin proliferación" },
        { id: "cli", col: 3, row: 1, k: "effect", t: "Síndrome nefrítico versus nefrótico", s: "Falla renal aguda o proteinuria masiva" },
      ],
      edges: [
        { from: "inm", to: "sub" },
        { from: "inm", to: "epi" },
        { from: "sub", to: "pro" },
        { from: "epi", to: "mem" },
        { from: "pro", to: "cli" },
        { from: "mem", to: "cli" },
      ],
      steps: [
        { show: ["inm", "sub", "pro"], note: "El patrón proliferativo subendotelial",
          say: "Cuando los inmunocomplejos se depositan en el espacio subendotelial, quedan en contacto directo con los neutrófilos y el complemento sanguíneo. Esto desencadena una inflamación vascular severa, proliferación celular intensa y necrosis, configurando las clases proliferativas tres y cuatro." },
        { show: ["epi", "mem"], note: "El patrón membranoso subepitelial",
          say: "En cambio, cuando los depósitos se localizan en el espacio subepitelial, lesionan los podocitos y la barrera de filtración sin reclutar neutrófilos directamente. Esto origina la clase cinco membranosa, que cursa como un síndrome nefrótico puro con proteinuria en rango masivo." },
        { show: ["cli"], note: "Repercusión clínica cardinal",
          say: "Las formas proliferativas debutan como síndrome nefrítico agudo con hematuria glomerular, cilindros hemáticos, hipertensión y alza rápida de creatinina, mientras que la forma membranosa cursa con anasarca y alto riesgo de trombosis venosa." },
      ],
    },

    {
      type: "points",
      kicker: "Indicaciones de biopsia",
      title: "Criterios formales para biopsia renal percutánea",
      cards: [
        { title: "Proteinuria persistente", tag: "Mayor o igual a 0.5 g al día", kind: "criteria", items: [
          { t: "Proteinuria sobre quinientos miligramos", d: "En recolección de veinticuatro horas",
            say: "Cualquier paciente lúpico con proteinuria confirmada mayor o igual a quinientos miligramos en veinticuatro horas, o un índice proteinuria creatininuria mayor a cero coma cinco, tiene indicación formal de biopsia renal percutánea." },
          { t: "Confirmación del patrón histológico", d: "Diferencia formas proliferativas de membranosas",
            say: "La biopsia es el único procedimiento que permite clasificar el tipo de nefritis y determinar si el daño glomerular predominante es inflamatorio activo o fibrótico irreversible." },
        ] },
        { title: "Sedimento urinario activo", tag: "Hematuria glomerular", kind: "alert", items: [
          { t: "Cilindros hemáticos y acantocitos", d: "Cinco o más eritrocitos por campo dismórficos",
            say: "El hallazgo de sedimento activo con hematuria dismórfica o cilindros hemáticos es una señal de alarma inmediata que exige biopsia urgente, ya que traduce glomerulonefritis proliferativa necrosante en curso." },
          { t: "Deterioro inexplicable de función renal", d: "Alza aguda de creatinina sérica",
            say: "Una elevación de creatinina plasmática no atribuible a deshidratación o fármacos nefrotóxicos obliga a realizar la biopsia sin demora para rescatar masa nefronal viable." },
        ] },
      ],
    },

    {
      type: "flow",
      kicker: "Clasificación histológica",
      title: "Las seis clases de la clasificación internacional",
      nodes: [
        { id: "c1", col: 0, row: 0, k: "start", t: "Clase I: Mesangial mínima", s: "Glomérulos normales en microscopía óptica" },
        { id: "c2", col: 0, row: 1, k: "start", t: "Clase II: Proliferativa mesangial", s: "Microhematuria y proteinuria leve" },
        { id: "c3", col: 1, row: 0, k: "alert", t: "Clase III: Proliferativa focal", s: "Menos del cincuenta por ciento de glomérulos" },
        { id: "c4", col: 1, row: 1, k: "trap", t: "Clase IV: Proliferativa difusa", s: "Cincuenta por ciento o más de glomérulos afectados" },
        { id: "c5", col: 2, row: 0, k: "alert", t: "Clase V: Membranosa pura", s: "Engrosamiento de membrana y síndrome nefrótico" },
        { id: "c6", col: 2, row: 1, k: "risk", t: "Clase VI: Esclerosante avanzada", s: "Más del noventa por ciento esclerosado" },
      ],
      edges: [
        { from: "c1", to: "c2" },
        { from: "c2", to: "c3" },
        { from: "c3", to: "c4" },
        { from: "c4", to: "c5" },
        { from: "c4", to: "c6" },
      ],
      steps: [
        { show: ["c1", "c2"], note: "Clases mesangiales leves",
          say: "Las clases uno y dos corresponden a afecciones mesangiales leves. Cursan con función renal conservada y mínima proteinuria, requiriendo únicamente el tratamiento basal del lupus con hidroxicloroquina." },
        { show: ["c3", "c4"], note: "Clases proliferativas de alto riesgo",
          say: "La clase tres afecta a menos del cincuenta por ciento de los glomérulos, mientras que la clase cuatro afecta al cincuenta por ciento o más. La clase cuatro es la más frecuente, la más agresiva y la que presenta el peor pronóstico vital si no se trata a tiempo." },
        { show: ["c5", "c6"], note: "Membranosa y esclerosis terminal",
          say: "La clase cinco es la forma membranosa pura con engrosamiento capilar y síndrome nefrótico grave. Y la clase seis representa la fibrosis terminal irreversible con más del noventa por ciento de los glomérulos esclerosados, donde la inmunosupresión ya no es útil." },
      ],
    },

    {
      type: "points",
      kicker: "Perfil de la clase cuatro",
      title: "Nefritis proliferativa difusa: hallazgos cardinales",
      cards: [
        { title: "Histopatología clásica", tag: "Asas en alambre y semilunas", kind: "alert", items: [
          { t: "Engrosamiento en asa de alambre", d: "Depósitos subendoteliales masivos",
            say: "La biopsia en la clase cuatro muestra las características asas capilares engrosadas en asa de alambre o wire-loop, necrosis fibrinoide y proliferación extracapilar con formación de semilunas celulares." },
          { t: "Índice de actividad y cronicidad", d: "Orienta la agresividad terapéutica",
            say: "El patólogo informa el índice de actividad inflamatoria reversible frente al índice de cronicidad fibrótica, lo que define qué tan agresiva debe ser la inmunosupresión farmacológica." },
        ] },
        { title: "Serología y laboratorio florido", tag: "Consumo máximo de complemento", kind: "criteria", items: [
          { t: "Títulos de anti-ADN marcadamente elevados", d: "Fuerte correlación patogénica",
            say: "La clase cuatro cursa típicamente con títulos de anticuerpos anti-ADN de doble hebra muy elevados, siendo el marcador biológico clásico de daño renal proliferativo activo." },
          { t: "Hipocomplementemia profunda", d: "Caída crítica de C tres y C cuatro",
            say: "Existe un consumo masivo del sistema del complemento por vía clásica, evidenciando niveles plasmáticos de C tres y C cuatro extremadamente bajos durante el brote nefrítico." },
        ] },
      ],
    },

    {
      type: "points",
      kicker: "Inducción de la remisión",
      title: "Protocolo de inmunosupresión intensiva inicial",
      cards: [
        { title: "Pulsos de metilprednisolona", tag: "Rescate antiinflamatorio agudo", kind: "pharma", items: [
          { t: "Pulsos de 500 a 1.000 mg diarios EV", d: "Durante tres días consecutivos",
            say: "El tratamiento de inducción para las clases tres y cuatro parte de inmediato con pulsos endovenosos de metilprednisolona de quinientos a mil miligramos al día durante tres días consecutivos en régimen hospitalario." },
          { t: "Prednisona oral en descenso rápido", d: "Cero coma cinco a un miligramo por kilo al día",
            say: "Tras los pulsos se continúa con prednisona oral a dosis de cero coma cinco a un miligramo por kilo al día, iniciando un desescalamiento progresivo semanal para reducir la toxicidad esteroidal." },
        ] },
        { title: "Inmunosupresor mayor de primera línea", tag: "Micofenolato mofetilo", kind: "pharma", items: [
          { t: "Micofenolato 2 a 3 gramos al día oral", d: "Fármaco de elección por eficacia y menor toxicidad",
            say: "El micofenolato mofetilo a dosis de dos a tres gramos al día es hoy el fármaco de primera línea para inducir la remisión, demostrando igual o mayor eficacia que la ciclofosfamida y sin producir toxicidad ovárica." },
          { t: "Ciclofosfamida endovenosa como alternativa", d: "Pauta Euro-Lupus o dosis altas",
            say: "La ciclofosfamida endovenosa se reserva para casos rápidamente progresivos con semilunas masivas o afectación neurológica simultánea, requiriendo siempre prevención de cistitis hemorrágica con mesna e hiperhidratación." },
        ] },
        { title: "Profilaxis contra infecciones", tag: "Cotrimoxazol obligatorio", kind: "key", items: [
          { t: "Prevención de Pneumocystis jirovecii", d: "Cotrimoxazol tres veces por semana",
            say: "Dada la profunda inmunosupresión con corticoides y micofenolato, es obligatorio prescribir profilaxis con cotrimoxazol para prevenir neumonía por Pneumocystis jirovecii." },
          { t: "Mantener hidroxicloroquina siempre", d: "Dosis ajustada al peso real",
            say: "La hidroxicloroquina jamás se suspende durante el episodio renal, ya que protege la microcirculación y favorece la tasa de respuesta nefronal." },
        ] },
      ],
    },

    {
      type: "flow",
      kicker: "Mantenimiento y sobrevida",
      title: "Consolidación a largo plazo y prevención de recaídas",
      nodes: [
        { id: "rem", col: 0, row: 1, k: "start", t: "Remisión clínica alcanzada", s: "A los seis meses de inducción exitosa" },
        { id: "man", col: 1, row: 0, k: "good", t: "Micofenolato de mantenimiento", s: "Uno a dos gramos diarios vía oral" },
        { id: "aza", col: 1, row: 2, k: "mech", t: "Azatioprina como alternativa", s: "Dos miligramos por kilo al día" },
        { id: "dur", col: 2, row: 1, k: "alert", t: "Duración de tres a cinco años", s: "Mínimo estricto antes de intentar desescalar" },
        { id: "emb", col: 3, row: 2, k: "good", t: "Seguridad ante deseo de embarazo", s: "Cambiar micofenolato por azatioprina" },
      ],
      edges: [
        { from: "rem", to: "man" },
        { from: "rem", to: "aza" },
        { from: "man", to: "dur" },
        { from: "aza", to: "dur" },
        { from: "man", to: "emb", label: "si planea gestar" },
        { from: "aza", to: "emb" },
      ],
      steps: [
        { show: ["rem", "man", "dur"], note: "Micofenolato como fármaco de mantención",
          say: "Una vez lograda la remisión a los seis meses, se inicia la fase de mantenimiento con micofenolato mofetilo en dosis de uno a dos gramos al día, manteniendo dosis mínimas de prednisona oral." },
        { show: ["dur"], note: "Regla innegociable de duración",
          say: "Esta es una regla clave del examen: la terapia inmunosupresora de mantenimiento debe prolongarse por un mínimo estricto de tres a cinco años continuos para evitar recaídas que destruyan el riñón." },
        { show: ["aza", "emb"], note: "Manejo reproductivo en la mantención",
          say: "El micofenolato es altamente teratogénico. Si una paciente en remisión estable desea buscar un embarazo planificado, debe cambiarse oportunamente a azatioprina al menos tres meses antes de la concepción." },
      ],
    },

    {
      type: "points",
      kicker: "Medidas nefroprotectoras",
      title: "Control de presión arterial y riesgo trombótico",
      cards: [
        { title: "Bloqueo del eje renina angiotensina", tag: "Meta de presión menor a 120/80", kind: "criteria", items: [
          { t: "Uso mandatorio de IECA o ARA dos", d: "Enalapril o losartán para reducir proteinuria",
            say: "Todo paciente con nefritis lúpica debe recibir inhibidores de la enzima convertidora o antagonistas del receptor de angiotensina para lograr una presión arterial estricta menor a ciento veinte con ochenta y disminuir la hiperfiltración glomerular." },
          { t: "Efecto antiproteinúrico directo", d: "Frena la esclerosis glomerular a largo plazo",
            say: "El bloqueo de la angiotensina dos reduce la presión intraglomerular, disminuye la pérdida de proteínas en la orina y retarda significativamente la fibrosis renal." },
        ] },
        { title: "Riesgo trombótico en Clase cinco", tag: "Síndrome nefrótico grave", kind: "alert", items: [
          { t: "Trombosis venosa y de la vena renal", d: "Pérdida urinaria de antitrombina tres",
            say: "En la clase cinco membranosa la proteinuria masiva con hipoalbuminemia menor a dos gramos por decilitro genera un estado hipercoagulable extremo con alto riesgo de trombosis venosa profunda y trombosis de la vena renal." },
          { t: "Anticoagulación profiláctica con heparina", d: "Ante albúmina sérica menor a 2 g/dL",
            say: "Si la albúmina sérica cae por debajo de dos a dos coma cinco gramos por decilitro en síndrome nefrótico grave, se debe considerar anticoagulación profiláctica para prevenir fenómenos embólicos pulmonares." },
        ] },
      ],
    },

    {
      type: "pathway",
      intro: "Revisemos el algoritmo escalonado para la evaluación y rescate de la nefritis lúpica.",
    },

    {
      type: "table",
      kicker: "Trampas EUNACOM",
      title: "Resumen comparativo de las Clases de Nefritis Lúpica",
      head: ["Clase Histológica", "Patrón Dominante", "Presentación Clínica Típica", "Tratamiento de Elección"],
      rows: [
        { cells: ["Clase I y II", "Mesangial mínima o proliferativa mesangial", "Microhematuria o proteinuria menor a 1 g/día", "Hidroxicloroquina basal · Corticoides solo si síntomas extra-renales"],
          say: "Repasemos las clases. Clase uno y dos: daño mesangial puro con función renal conservada. Requieren únicamente hidroxicloroquina basal." },
        { cells: ["Clase III", "Proliferativa focal (menor al 50% de glomérulos)", "Síndrome nefrítico, hipertensión, proteinuria", "Pulsos de Metilprednisolona más Micofenolato o Ciclofosfamida"],
          say: "Clase tres: proliferación en menos del cincuenta por ciento de glomérulos. Requiere pulsos de metilprednisolona y micofenolato." },
        { cells: ["Clase IV", "Proliferativa difusa (mayor o igual al 50%)", "Síndrome nefrítico grave, cilindros hemáticos, falla renal", "Pulsos de Metilprednisolona más Micofenolato (2-3 g/d) o Ciclofosfamida"],
          say: "Clase cuatro: la más frecuente y destructiva con asas en alambre. Cursa con falla renal aguda y exige inducción urgente con pulsos y micofenolato." },
        { cells: ["Clase V", "Membranosa pura (depósitos subepiteliales)", "Síndrome nefrótico florido puro, riesgo de TVP", "Prednisona oral más Micofenolato o Tacrolimus más IECA o ARA dos"],
          say: "Clase cinco: síndrome nefrótico puro con depósitos subepiteliales y alto riesgo trombótico. Se trata con micofenolato, corticoides e IECA." },
        { cells: ["Clase VI", "Esclerosante avanzada (mayor al 90% esclerosado)", "Insuficiencia renal crónica avanzada irreversible", "Preparación para hemodiálisis o trasplante renal · No inmunosupresión"],
          say: "Clase seis: esclerosis avanzada irreversible. No responde a fármacos inmunosupresores y se prepara para hemodiálisis o trasplante." },
      ],
    },

    {
      type: "quiz",
      kicker: "Caso clínico",
      title: "Caso clínico tipo EUNACOM",
      stem: "Mujer de 24 años con antecedente de LES diagnosticado hace 1 año en tratamiento irregular con hidroxicloroquina. Consulta por edema progresivo de extremidades inferiores hasta rodillas, orinas espumosas y cefalea. Al examen físico destaca PA 160/100 mmHg, edema pretibial +++ con fóvea, y eritema malar tenue. Exámenes: creatinina 1.9 mg/dL (basal 0.8 mg/dL hace 4 meses), nitrógeno ureico 38 mg/dL, albúmina sérica 2.4 g/dL. El examen de orina muestra proteinuria de 3.8 g/24 horas y sedimento con 30 a 40 glóbulos rojos dismórficos por campo y cilindros hemáticos. El complemento C3 está en 42 mg/dL y el Anti-dsDNA fuertemente positivo.",
      question: "¿Cuál es el procedimiento diagnóstico mandatorio de elección y qué esquema farmacológico de inducción inicial debe indicarse de inmediato?",
      options: [
        { letter: "A", text: "Biopsia renal percutánea urgente y hospitalización para pulsos de Metilprednisolona EV más Micofenolato Mofetilo" },
        { letter: "B", text: "Iniciar diálisis peritoneal de urgencia sin realizar biopsia renal" },
        { letter: "C", text: "Aumentar la dosis de hidroxicloroquina y citar a control ambulatorio en 3 meses" },
        { letter: "D", text: "Indicar ciprofloxacino oral por sospecha de infección urinaria complicada" },
        { letter: "E", text: "Tomografía computarizada con contraste endovenoso y furosemida oral exclusiva" },
      ],
      correct: "A",
      explanation: "La paciente presenta un síndrome nefrítico-nefrótico severo con deterioro agudo de función renal e hipertensión arterial, altamente sugerente de Nefritis Lúpica proliferativa difusa activa (Clase IV). El procedimiento mandatario para clasificar histológicamente el daño renal es la biopsia renal percutánea perentoria. El tratamiento de inducción urgente de primera línea consiste en hospitalización, pulsos de Metilprednisolona endovenosa (500 a 1.000 mg/día por 3 días) seguidos de prednisona oral, asociados a Micofenolato Mofetilo a dosis plenas (2 a 3 g/día).",
      say: {
        stem: "Caso clínico de urgencia. Mujer de veinticuatro años con lupus que presenta edema pretibial marcado, hipertensión severa, orinas espumosas, deterioro agudo de función renal con creatinina en uno coma nueve, sedimento con cilindros hemáticos, hipocomplementemia y anti-ADN elevado.",
        question: "¿Cuál es el procedimiento diagnóstico mandatorio de elección y qué esquema farmacológico de inducción inicial debe indicarse de inmediato?",
        options: "Las alternativas: biopsia renal percutánea con pulsos de metilprednisolona y micofenolato, diálisis peritoneal inmediata sin biopsia, subir hidroxicloroquina ambulatoria, antibióticos por infección urinaria, o tomografía con contraste y furosemida sola. Piénsalo.",
        answer: "La respuesta correcta es la A. Ante un síndrome nefrítico nefrótico agudo con sedimento activo, la biopsia renal percutánea es mandatoria para clasificar el daño histológico, y se debe iniciar de inmediato la inducción con pulsos de metilprednisolona y micofenolato mofetilo para frenar la necrosis glomerular.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2017 · Pregunta 18",
      stem: "Mujer de 22 años con diagnóstico de LES consulta por astenia y edema facial matinal. En sus exámenes destaca creatinina de 1.4 mg/dL, proteinuria en orina de 24 horas de 2.2 gramos y sedimento urinario con 25 glóbulos rojos por campo con acantocitos y abundantes cilindros hemáticos. El C3 es de 45 mg/dL. ¿Cuál es el procedimiento mandatorio de elección para definir la conducta terapéutica e inmunosupresora?",
      options: [
        { letter: "A", text: "Tomografía computarizada contrastada de abdomen y pelvis" },
        { letter: "B", text: "Biopsia renal percutánea con microscopía óptica e inmunofluorescencia" },
        { letter: "C", text: "Cistoscopía diagnóstica con toma de muestra de mucosa vesical" },
        { letter: "D", text: "Iniciar antibióticos empíricos por sospecha de pielonefritis" },
        { letter: "E", text: "Urocultivo cuantitativo y diferir nuevas decisiones por 3 meses" },
      ],
      correct: "B",
      explanation: "En un paciente con LES que debuta con proteinuria significativa (≥ 0.5 g/24h), sedimento urinario activo (hematuria glomerular con cilindros hemáticos) y deterioro de función renal, la realización de una biopsia renal percutánea es el examen de elección mandatario. Permite identificar la clase histopatológica de nefritis lúpica (según clasificación ISN/RPS) y los índices de actividad y cronicidad, de los cuales depende la agresividad del esquema inmunosupresor.",
      say: {
        stem: "Pregunta real del EUNACOM dos mil diecisiete, pregunta dieciocho. Paciente lúpica joven que debuta con proteinuria de dos gramos en veinticuatro horas y sedimento con cilindros hemáticos y acantocitos.",
        question: "¿Cuál es el procedimiento mandatorio de elección para definir la conducta terapéutica e inmunosupresora?",
        options: "Las opciones: tomografía contrastada de abdomen, biopsia renal percutánea con microscopía e inmunofluorescencia, cistoscopía diagnóstica, antibióticos empíricos, o urocultivo y esperar tres meses. Piénsalo.",
        answer: "La respuesta correcta es la B. La presencia de proteinuria significativa y sedimento activo con cilindros hemáticos en un paciente lúpico exige realizar una biopsia renal percutánea para definir con certeza la clase histológica y guiar la inmunosupresión.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2019 · Pregunta 49",
      stem: "La biopsia renal de una paciente con LES informa una Nefritis Lúpica Clase IV (Proliferativa Difusa) con semilunas celulares en 30% de los glomérulos y necrosis fibrinoide activa. ¿Cuál es el esquema farmacológico de inducción de primera línea indicado para rescatar la función renal?",
      options: [
        { letter: "A", text: "Pulsos de Metilprednisolona endovenosa seguidos de Prednisona oral más Micofenolato Mofetilo" },
        { letter: "B", text: "Monoterapia con Hidroxicloroquina 200 mg al día sin corticoides" },
        { letter: "C", text: "Prednisona oral 10 mg al día más calcio y vitamina D" },
        { letter: "D", text: "Metotrexato 15 mg por semana más ácido fólico" },
        { letter: "E", text: "Infliximab endovenoso más AINEs a dosis plenas" },
      ],
      correct: "A",
      explanation: "El tratamiento de inducción de primera línea para la Nefritis Lúpica Clase IV (proliferativa difusa, la forma más destructiva) consiste en la combinación sinérgica de corticoides a dosis altas (iniciando con pulsos de Metilprednisolona endovenosa de 500-1000 mg/día por 3 días consecutivos seguidos de prednisona oral) asociado a un inmunosupresor mayor potente como Micofenolato Mofetilo (2-3 g/día) o Ciclofosfamida EV.",
      say: {
        stem: "EUNACOM dos mil diecinueve, pregunta cuarenta y nueve. Paciente con biopsia renal que demuestra nefritis lúpica clase cuatro proliferativa difusa con semilunas celulares y necrosis activa.",
        question: "¿Cuál es el esquema farmacológico de inducción de primera línea indicado para rescatar la función renal?",
        options: "Las alternativas: pulsos de metilprednisolona endovenosa seguidos de prednisona oral más micofenolato mofetilo, hidroxicloroquina en monoterapia, prednisona en dosis bajas, metotrexato semanal, o infliximab con antiinflamatorios. Piénsalo.",
        answer: "Es la A. La nefritis lúpica clase cuatro es una urgencia renal que se trata con pulsos de metilprednisolona endovenosa combinados con micofenolato mofetilo a dosis de dos a tres gramos diarios para detener la proliferación y rescatar los glomérulos viables.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2021 · Pregunta 05",
      stem: "¿Cuál de las siguientes clases histológicas de nefritis lúpica según la clasificación ISN/RPS cursa típicamente con síndrome nefrótico florido PURO, con engrosamiento difuso de la membrana basal sin proliferación endocapilar marcada y con menor consumo de complemento?",
      options: [
        { letter: "A", text: "Clase I (Mesangial mínima)" },
        { letter: "B", text: "Clase II (Proliferativa mesangial)" },
        { letter: "C", text: "Clase IV (Proliferativa difusa)" },
        { letter: "D", text: "Clase V (Membranosa)" },
        { letter: "E", text: "Clase VI (Esclerosante avanzada)" },
      ],
      correct: "D",
      explanation: "La Nefritis Lúpica Clase V (Membranosa) se caracteriza por depósitos inmunes predominantemente subepiteliales que causan engrosamiento uniforme de la pared capilar. Clínicamente se manifiesta como un síndrome nefrótico puro con proteinuria en rango masivo, hipoalbuminemia y dislipidemia, habitualmente sin hematuria proliferativa y con complemento normal o mínimamente disminuido.",
      say: {
        stem: "Pregunta del EUNACOM dos mil veintiuno, pregunta cinco. Se evalúan los patrones clínicos de las clases histológicas de nefritis lúpica.",
        question: "¿Cuál de las siguientes clases histológicas cursa típicamente con síndrome nefrótico florido puro, sin proliferación endocapilar marcada?",
        options: "Las opciones: clase uno mesangial mínima, clase dos proliferativa mesangial, clase cuatro proliferativa difusa, clase cinco membranosa, o clase seis esclerosante. Piénsalo.",
        answer: "La respuesta correcta es la D. La clase cinco membranosa se debe a depósitos subepiteliales que dañan los podocitos, presentándose típicamente como un síndrome nefrótico florido puro con edema masivo y sin proliferación endocapilar severa.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2023 · Pregunta 12",
      stem: "Una paciente de 27 años con nefritis lúpica Clase IV tratada exitosamente con micofenolato mofetilo y corticoides alcanza la remisión completa tras 6 meses de tratamiento. Desea conocer el pronóstico y la duración de la terapia de mantenimiento. ¿Cuál es la indicación correcta?",
      options: [
        { letter: "A", text: "Suspender toda la medicación inmunosupresora de inmediato por haber alcanzado la remisión" },
        { letter: "B", text: "Mantener la terapia inmunosupresora de mantención (micofenolato o azatioprina) por un mínimo de 3 a 5 años" },
        { letter: "C", text: "Continuar con pulsos mensuales de ciclofosfamida durante toda la vida" },
        { letter: "D", text: "Cambiar a prednisona 60 mg al día de forma permanente sin otros fármacos" },
        { letter: "E", text: "Suspender corticoides y realizar nueva biopsia renal mensual" },
      ],
      correct: "B",
      explanation: "En la nefritis lúpica proliferativa que alcanza la remisión clínica completa tras los 6 meses de inducción, la terapia de mantenimiento (con Micofenolato Mofetilo a dosis de 1 a 2 g/día o Azatioprina) debe prolongarse por un mínimo estricto de 3 a 5 años antes de plantear un retiro gradual muy lento. Suspender precozmente la medicación condiciona una tasa de recaída renal superior al 50%.",
      say: {
        stem: "Pregunta del EUNACOM dos mil veintitrés, pregunta doce. Paciente con nefritis lúpica clase cuatro que alcanza la remisión completa tras seis meses de inducción exitosa con micofenolato.",
        question: "¿Cuál es la indicación correcta respecto a la duración de la terapia de mantenimiento?",
        options: "Las opciones: suspender todo de inmediato, mantener micofenolato o azatioprina por un mínimo de tres a cinco años, pulsos de ciclofosfamida de por vida, prednisona alta permanente sola, o biopsias renales mensuales. Piénsalo.",
        answer: "La respuesta correcta es la B. La fase de mantenimiento en nefritis lúpica debe prolongarse al menos tres a cinco años con micofenolato o azatioprina. Suspender antes el tratamiento provoca recaídas inflamatorias graves que conllevan fibrosis y diálisis.",
      },
    },

    {
      type: "points",
      kicker: "Cierre",
      title: "Reglas de oro para el examen",
      cards: [
        { title: "Indicación de biopsia y Clase cuatro", tag: "Procedimiento obligado", kind: "alert", items: [
          { t: "Biopsia ante proteinuria o sedimento activo", d: "Mayor a 0.5 g al día o cilindros hemáticos",
            say: "Cerramos con las tres reglas de oro de nefritis lúpica. Primero: la biopsia renal es mandatoria ante proteinuria mayor a quinientos miligramos o sedimento activo para diagnosticar precozmente la temida clase cuatro proliferativa difusa." },
          { t: "Clase cuatro es la más frecuente y grave", d: "Asas en alambre, hematuria e hipocomplementemia",
            say: "La clase cuatro es la forma más frecuente y agresiva, presentándose como síndrome nefrítico agudo con asas en alambre, alza de anti-ADN y caída de complemento." },
        ] },
        { title: "Inducción y mantenimiento", tag: "Pulsos y micofenolato", kind: "pharma", items: [
          { t: "Pulsos de metilprednisolona más micofenolato", d: "Inducción intensiva de seis meses",
            say: "Segundo: el tratamiento de inducción de elección combina pulsos endovenosos de metilprednisolona con micofenolato mofetilo en dosis plenas de dos a tres gramos diarios." },
          { t: "Mantención mínima de 3 a 5 años", d: "Micofenolato o azatioprina",
            say: "La mantención con micofenolato o azatioprina debe sostenerse de forma ininterrumpida por un mínimo estricto de tres a cinco años para consolidar la sobrevida renal." },
        ] },
        { title: "Clase cinco membranosa y GES", tag: "Síndrome nefrótico y garantías", kind: "criteria", items: [
          { t: "Clase cinco es síndrome nefrótico puro", d: "Depósitos subepiteliales y riesgo trombótico",
            say: "Tercero: la clase cinco es membranosa pura y cursa con síndrome nefrótico y alto riesgo de trombosis venosa, requiriendo estatinas, IECA y profilaxis antitrombótica." },
          { t: "Cobertura integral por GES en Chile", d: "Biopsia, medicamentos y seguimiento cubiertos",
            say: "En Chile la nefritis lúpica tiene garantía GES completa. Si te llevas una sola idea de hoy: proteinuria en lupus exige biopsia urgente, la clase cuatro se rescata con pulsos y micofenolato, y la mantención dura de tres a cinco años. Nos vemos en la próxima clase." },
        ] },
      ],
    },
  ],

  pathway: {
    title: "Algoritmo de enfrentamiento y manejo: Nefritis Lúpica",
    root: N("start", "Paciente con Lupus y sospecha de compromiso renal", "Proteinuria, hematuria o alza de creatinina sérica",
      "Paciente con diagnóstico de lupus eritematoso sistémico que presenta alteraciones en el sedimento urinario o en la función renal.",
      ["", N("q", "¿Proteinuria mayor o igual a 0.5 g/24h o sedimento activo con cilindros hemáticos?", "Criterio formal de biopsia renal",
        "Se verifica la presencia de criterios formales de compromiso glomerular activo.",
        ["NO: Sedimento limpio y proteinuria menor a 0.5 g/d", N("ok", "Control renal periódico cada 3 a 6 meses", "Mantener Hidroxicloroquina y monitoreo con C3 y C4",
          "Sin evidencia de glomerulopatía activa. Continuar hidroxicloroquina basal y solicitar sedimento de orina y creatinina cada tres a seis meses.")],
        ["SÍ: Criterio formal cumplido", N("do", "Biopsia Renal Percutánea Urgente", "Clasificación histológica ISN/RPS y microscopía óptica con inmunofluorescencia",
          "Se realiza biopsia renal percutánea perentoria para tipificar el patrón histológico y evaluar índices de actividad y cronicidad.",
          ["", N("q", "¿Resultado histopatológico en la biopsia renal?", "Clasificación en seis clases",
            "Se analiza el informe histopatológico de la biopsia.",
            ["Clase I o II: Mesangial leve", N("ok", "Manejo médico basal con Hidroxicloroquina", "Corticoides solo ante compromiso extrarrenal",
              "Afectación mesangial leve. Mantener hidroxicloroquina y optimizar factores de riesgo cardiovascular sin inmunosupresión mayor.")],
            ["Clase V: Membranosa pura", N("do", "Prednisona oral más Micofenolato o Tacrolimus", "Más IECA o ARA dos y prevención de trombosis venosa",
              "Síndrome nefrótico membranoso. Indicar prednisona oral asociada a micofenolato mofetilo o inhibidores de calcineurina, más enalapril o losartán para proteinuria.")],
            ["Clase III o IV: Proliferativa focal o difusa", N("alert", "Inducción Urgente: Pulsos de Metilprednisolona EV más Micofenolato Mofetilo", "500 a 1.000 mg EV diarios por 3 días más MMF 2 a 3 g/d",
              "Nefritis proliferativa activa con alto riesgo de necrosis glomerular. Hospitalizar de inmediato para tres pulsos de metilprednisolona endovenosa seguidos de prednisona oral y micofenolato mofetilo a dosis plenas.",
              ["", N("q", "¿Respuesta y remisión clínica a los 6 meses de inducción?", "Descenso de proteinuria y estabilización de creatinina",
                "Se evalúa la respuesta biológica al esquema de inducción intensivo.",
                ["Falla o refractariedad", N("refer", "Cambio a Ciclofosfamida EV o Rituximab", "Evaluación por Comité de Especialidades Reumatológicas",
                  "Ausencia de remisión clínica. Escalar a pauta de ciclofosfamida endovenosa o terapia biológica con rituximab bajo supervisión nefrológica estricta.")],
                ["Remisión parcial o completa", N("ok", "Terapia de Mantenimiento por un mínimo de 3 a 5 años", "Micofenolato 1 a 2 g/d o Azatioprina 2 mg/kg/d más dosis bajas de prednisona",
                  "Remisión alcanzada exitosamente. Consolidar con micofenolato mofetilo o azatioprina durante un mínimo estricto de tres a cinco años continuos para evitar recaídas.")])])])])])]),
  },
};
