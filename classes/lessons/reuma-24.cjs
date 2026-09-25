// Clase 1.24 — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_reumatologia_bloque_5.cjs (reuma-24).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: "reuma-24",
  tier: 2,
  slides: [
    {
      type: "cover",
      subtitle: "Fracturas por fragilidad, densitometría (T-score vs Z-score), reglas del alendronato y manejo escalonado",
      say: "Bienvenidos a la clase veinticuatro. Concluimos el libro completo de Reumatología abordando la Osteoporosis y la salud ósea. Aprenderemos la regla de oro diagnóstica de las fracturas por fragilidad que no requieren densitometría para iniciar tratamiento, los criterios de la Organización Mundial de la Salud en densitometría ósea, la diferencia clave entre el índice T y el índice Z, las normas estrictas de administración del alendronato para evitar la esofagitis erosiva, y el rol de denosumab y teriparatida. Comencemos.",
    },

    {
      type: "flow",
      kicker: "Remodelado óseo patológico",
      title: "Desbalance acoplado: De la pérdida trabecular a la fractura",
      nodes: [
        { id: "des", col: 0, row: 1, k: "start", t: "Desbalance óseo senil o posmenopáusico", s: "Déficit estrogénico y envejecimiento osteoblástico" },
        { id: "res", col: 1, row: 0, k: "mech", t: "Hiperactividad osteoclástica", s: "Reabsorción acelerada mediada por la vía RANKL" },
        { id: "tra", col: 2, row: 0, k: "alert", t: "Adelgazamiento y pérdida de trabéculas", s: "Deterioro microarquitectónico esquelético severo" },
        { id: "fra", col: 2, row: 2, k: "risk", t: "Fractura por fragilidad de bajo impacto", s: "Colapso vertebral o fractura de cadera al caer" },
      ],
      edges: [
        { from: "des", to: "res" },
        { from: "res", to: "tra" },
        { from: "tra", to: "fra" },
      ],
      steps: [
        { show: ["des", "res"], note: "Reabsorción ósea acelerada por osteoclastos",
          say: "La osteoporosis se origina por un desacoplamiento en el remodelado óseo. Tras la menopausia, la caída de los estrógenos libera el freno biológico sobre la citoquina RANKL, estimulando la diferenciación y sobrevida de los osteoclastos que reabsorben matriz ósea a un ritmo superior a la síntesis." },
        { show: ["tra", "fra"], note: "Fragilidad mecánica y fractura clínica",
          say: "Este balance óseo negativo adelgaza la cortical y destruye las trabéculas del hueso esponjoso en cuerpos vertebrales y cuello femoral. El esqueleto pierde su resistencia biomecánica, predisponiendo a fracturas ante traumatismos mínimos como una caída desde la propia altura." },
      ],
    },

    {
      type: "points",
      kicker: "Regla diagnóstica directa",
      title: "Fractura por fragilidad: Diagnóstico clínico automático",
      cards: [
        { title: "Definición de fractura por bajo impacto", tag: "Caída desde la propia altura o espontánea", kind: "alert", items: [
          { t: "Traumatismo menor en sitios centinela", d: "Cadera, vértebra, radio distal o húmero proximal",
            say: "Esta es la regla de oro que jamás debes olvidar: toda fractura producida por un traumatismo de bajo impacto, como tropezar y caer desde la propia altura al caminar, establece de forma automática e inmediata el diagnóstico clínico de osteoporosis establecida." },
          { t: "Cero necesidad de densitometría previa", d: "El tratamiento antirresortivo no debe diferirse",
            say: "En un paciente anciano con fractura de cadera o aplastamiento vertebral por caída de nivel no es necesario ni correcto posponer el inicio del tratamiento a la espera de una densitometría ósea. Se inicia terapia antirresortiva farmacológica de inmediato." },
        ] },
        { title: "Sitios anatómicos cardinales de fractura", tag: "Cadera, columna y muñeca", kind: "criteria", items: [
          { t: "Fractura de cadera: Máxima morbimortalidad", d: "Mortalidad superior al veinte por ciento al primer año",
            say: "La fractura del cuello femoral o pertrocantérea es la complicación más devastadora, con una mortalidad de hasta un treinta por ciento al año por inmovilidad e infecciones, exigiendo cirugía de artroplastía precoz y profilaxis secundaria estricta." },
          { t: "Fracturas vertebrales asintomáticas", d: "Pérdida de estatura y cifosis progresiva",
            say: "Hasta dos tercios de las fracturas vertebrales son silentes y no duelen de forma aguda. Se manifiestan clínicamente por pérdida insidiosa de estatura corporal mayor a tres o cuatro centímetros y acentuación progresiva de la cifosis dorsal senil." },
        ] },
      ],
    },

    {
      type: "points",
      kicker: "Densitometría ósea por DEXA",
      title: "Criterios de la OMS: T-score versus Z-score",
      cards: [
        { title: "El índice T-score en posmenopausia", tag: "Comparación con adulto joven sano", kind: "criteria", items: [
          { t: "Criterio de la OMS en mujeres posmenopáusicas", d: "Desviaciones estándar respecto al pico de masa ósea",
            say: "La densitometría ósea de doble fotón o DEXA evalúa la columna lumbar y el fémur proximal. En mujeres posmenopáusicas y hombres mayores de cincuenta años se utiliza el índice T, que compara la densidad mineral con el pico de masa de un adulto joven sano." },
          { t: "Rangos diagnósticos operativos de la OMS", d: "Normal, osteopenia y osteoporosis por corte de menos dos coma cinco",
            say: "Normal corresponde a un índice T mayor o igual a menos uno coma cero. Osteopenia es entre menos uno coma cero y menos dos coma cinco. Osteoporosis se define por un índice T menor o igual a menos dos coma cinco desviaciones estándar en columna o cadera." },
        ] },
        { title: "El índice Z-score en jóvenes y causas secundarias", tag: "Comparación con la misma edad cronológica", kind: "key", items: [
          { t: "Uso de Z-score en premenopáusicas y menores de 50 años", d: "Baja masa ósea para la edad cronológica si es menor a menos dos",
            say: "En mujeres premenopáusicas, varones jóvenes y niños se utiliza estrictamente el índice Z, que compara la masa ósea con personas de la misma edad cronológica. Un índice Z menor o igual a menos dos coma cero se informa como baja masa ósea para la edad." },
          { t: "Estudio exhaustivo de causas secundarias", d: "Corticoides, mieloma, celiaquía o hiperparatiroidismo",
            say: "Un índice Z muy bajo en una persona joven obliga a buscar causas secundarias de pérdida ósea acelerada: consumo crónico de corticoides, hiperparatiroidismo primario, mieloma múltiple, enfermedad celíaca o hipogonadismo hipogonadotrópico." },
        ] },
      ],
    },

    {
      type: "flow",
      kicker: "Herramienta de predicción de riesgo",
      title: "Algoritmo FRAX y umbrales terapéuticos",
      nodes: [
        { id: "frax", col: 0, row: 1, k: "start", t: "Calculadora FRAX internacional", s: "Riesgo a diez años ajustado por factores clínicos" },
        { id: "fac", col: 1, row: 0, k: "mech", t: "Factores clínicos de riesgo óseo", s: "Edad, tabaquismo, corticoides, fractura previa y alcohol" },
        { id: "maj", col: 2, row: 0, k: "alert", t: "Fractura mayor mayor o igual a 20%", s: "Indicación formal de tratamiento farmacológico" },
        { id: "cad", col: 2, row: 2, k: "alert", t: "Fractura de cadera mayor o igual a 3%", s: "Tratar incluso con densitometría en rango de osteopenia" },
      ],
      edges: [
        { from: "frax", to: "fac" },
        { from: "fac", to: "maj" },
        { from: "fac", to: "cad" },
      ],
      steps: [
        { show: ["frax", "fac"], note: "Factores clínicos independientes de la densidad",
          say: "La herramienta FRAX estima la probabilidad porcentual a diez años de sufrir una fractura osteoporótica mayor o una fractura de cadera, combinando la edad del paciente, antecedente de fractura en padres, consumo de corticoides, peso y tabaquismo." },
        { show: ["maj", "cad"], note: "Umbrales para iniciar tratamiento en osteopenia",
          say: "Constituye una indicación formal para iniciar tratamiento farmacológico antirresortivo cuando el riesgo de fractura osteoporótica mayor es igual o superior al veinte por ciento, o cuando el riesgo de fractura de cadera es igual o superior al tres por ciento, aun teniendo osteopenia." },
      ],
    },

    {
      type: "points",
      kicker: "Pilar basal preventivo",
      title: "Calcio, Vitamina D y medidas no farmacológicas",
      cards: [
        { title: "Aporte diario de calcio y vitamina D", tag: "Soporte metabólico obligatorio", kind: "criteria", items: [
          { t: "Calcio elemental de mil a mil doscientos miligramos al día", d: "Priorizar consumo dietético lácteo sobre suplementos orales",
            say: "Todo paciente con osteopenia u osteoporosis debe asegurar una ingesta de mil a mil doscientos miligramos de calcio elemental al día, prefiriendo siempre los alimentos lácteos por su mejor tolerancia y absorción digestiva." },
          { t: "Vitamina D3 de ochocientas a dos mil unidades diarias", d: "Meta plasmática mayor o igual a treinta nanogramos por mililitro",
            say: "La suplementación con colecalciferol o vitamina D tres asegura una absorción intestinal óptima del calcio. Se busca mantener niveles séricos de veinticinco hidroxivitamina D iguales o superiores a treinta nanogramos por mililitro." },
        ] },
        { title: "Estilo de vida y prevención de caídas", tag: "Intervención motora en atención primaria", kind: "normal", items: [
          { t: "Ejercicio físico regular con carga de peso", d: "Caminatas y ejercicios de fortalecimiento muscular",
            say: "El ejercicio aeróbico con impacto y carga de peso estimula el remodelado óseo mediante mecanotransducción osteocitaria, mejorando además el equilibrio y la masa muscular para prevenir tropiezos." },
          { t: "Retiro de fármacos sedantes y obstáculos hogareños", d: "Evitar benzodiacepinas, alfombras sueltas y mala iluminación",
            say: "En personas mayores es mandatorio retirar benzodiacepinas y psicofármacos sedantes que inducen hipotensión o somnolencia, instalando barras de sujeción en baños y eliminando alfombras para evitar caídas." },
        ] },
      ],
    },

    {
      type: "flow",
      kicker: "Antirresortivos orales de primera línea",
      title: "Bifosfonatos: Reglas estrictas de administración oral",
      nodes: [
        { id: "alen", col: 0, row: 1, k: "start", t: "Alendronato 70 mg oral semanal", s: "Inhibe farnesil pirofosfato sintasa en osteoclastos" },
        { id: "ayu", col: 1, row: 0, k: "good", t: "Ayuno matinal con vaso de agua pura", s: "Biodisponibilidad menor al uno por ciento con comida" },
        { id: "erg", col: 2, row: 0, k: "alert", t: "Bipedestación estricta de 30 a 60 minutos", s: "PROHIBIDO acostarse para evitar esofagitis química" },
        { id: "con", col: 2, row: 2, k: "trap", t: "Contraindicación: Clearance menor a 35", s: "Toxicidad tubular renal por retención del fármaco" },
      ],
      edges: [
        { from: "alen", to: "ayu" },
        { from: "ayu", to: "erg" },
        { from: "alen", to: "con" },
      ],
      steps: [
        { show: ["alen", "ayu"], note: "Ayuno absoluto y vaso de agua corriente",
          say: "El alendronato semanal es el fármaco de primera línea de elección. Presenta una biodisponibilidad oral bajísima, menor al uno por ciento. Debe tomarse en ayuno absoluto inmediatamente al levantarse por las mañanas, con un vaso grande de agua corriente pura, sin té ni leche." },
        { show: ["erg", "con"], note: "Posición erguida obligatoria y función renal",
          say: "Para prevenir úlceras esofágicas graves o perforación por reflujo del comprimido, el paciente debe permanecer de pie o sentado erguido durante al menos treinta a sesenta minutos, sin ingerir alimentos. Además, está contraindicado si la velocidad de filtración glomerular es menor a treinta y cinco." },
      ],
    },

    {
      type: "points",
      kicker: "Terapias avanzadas de rescate",
      title: "Ácido Zoledrónico, Denosumab y Teriparatida",
      cards: [
        { title: "Zoledrónico endovenoso y Denosumab subcutáneo", tag: "Opciones ante intolerancia oral o falla renal", kind: "pharma", items: [
          { t: "Ácido Zoledrónico endovenoso anual", d: "Infusión de cinco miligramos en quince minutos una vez al año",
            say: "El ácido zoledrónico endovenoso anual es el antirresortivo más potente disponible. Es de elección ante mala tolerancia digestiva al alendronato o tras una fractura de cadera, asegurando adherencia terapéutica completa." },
          { t: "Denosumab anti-RANKL en insuficiencia renal", d: "Sesenta miligramos subcutáneos cada seis meses",
            say: "Denosumab es un anticuerpo monoclonal anti-RANKL que se administra cada seis meses por vía subcutánea. Puede utilizarse con seguridad en falla renal avanzada, pero jamás debe suspenderse bruscamente sin un bifosfonato puente por riesgo de rebote con múltiples fracturas vertebrales." },
        ] },
        { title: "Teriparatida: El único osteoformador anabólico", tag: "Osteoporosis severa con fracturas previas", kind: "criteria", items: [
          { t: "Teriparatida análogo de PTH recombinante", d: "Veinte microgramos diarios subcutáneos por máximo dos años",
            say: "La teriparatida es el único fármaco anabólico que estimula directamente a los osteoblastos para formar hueso nuevo de alta calidad, estando indicado en osteoporosis muy severa con fracturas repetidas bajo bifosfonatos." },
        ] },
      ],
    },

    {
      type: "table",
      kicker: "Trampas EUNACOM",
      title: "Diagnóstico diferencial: Osteoporosis vs Osteomalacia vs Mieloma",
      head: ["Patología", "Calcio y Fósforo Sérico", "Fosfatasas Alcalinas", "Hallazgo Distintivo"],
      rows: [
        { cells: ["Osteoporosis senil / posmenopáusica", "ESTRICTAMENTE NORMALES", "NORMALES (salvo fractura aguda)", "Masa ósea baja con mineralización normal · T-score <= -2.5"],
          say: "Osteoporosis: calcio, fósforo y fosfatasas alcalinas rigurosamente normales; masa ósea baja con mineralización de matriz normal." },
        { cells: ["Osteomalacia por déficit de Vitamina D", "Calcio y Fósforo DISMINUIDOS", "Fosfatasas alcalinas MUY ELEVADAS", "Defecto de mineralización osteoide · Líneas de Looser-Milkman"],
          say: "Osteomalacia: calcio y fósforo bajos con fosfatasas alcalinas muy altas; defecto de mineralización de matriz con pseudofracturas." },
        { cells: ["Mieloma Múltiple en ancianos", "Hipercalcemia frecuente", "Normales (no osteoblásticas)", "Lesiones líticas en sacabocado sin halo esclerótico y anemia"],
          say: "Mieloma múltiple: hipercalcemia con fosfatasas normales, lesiones líticas óseas en sacabocado y pico monoclonal sérico." },
        { cells: ["Enfermedad de Paget ósea", "Calcio y fósforo normales", "Fosfatasas alcalinas EXTREMADAMENTE ALTAS", "Remodelado caótico focal con engrosamiento y deformidad ósea"],
          say: "Enfermedad de Paget: fosfatasas alcalinas masivamente elevadas con calcio normal, remodelado caótico y deformidad ósea focal." },
      ],
    },

    {
      type: "quiz",
      kicker: "Caso clínico",
      title: "Caso clínico tipo EUNACOM",
      stem: "Mujer de 76 años previamente autovalente resbala en el pasillo de su casa y cae desde su propia altura, sufriendo dolor intenso en la ingle derecha e incapacidad funcional para la bipedestación. La radiografía de pelvis confirma una fractura subcapital desplazada del cuello femoral derecho, por lo que es hospitalizada para artroplastía de cadera. No cuenta con densitometría ósea previa. ¿Cuál es el diagnóstico esquelético que se establece clínicamente de manera automática y cuál es la conducta farmacológica apropiada para el alta?",
      options: [
        { letter: "A", text: "Osteopenia leve; indicar suplemento de vitamina D3 aislada y solicitar densitometría ósea ambulatoria antes de cualquier fármaco" },
        { letter: "B", text: "Osteoporosis clínica establecida; iniciar tratamiento con calcio, vitamina D y terapia antirresortiva (bifosfonato o denosumab) sin requerir densitometría previa" },
        { letter: "C", text: "Trauma mecánico aislado sin osteoporosis; no requiere tratamiento farmacológico óseo ya que la fractura es traumática" },
        { letter: "D", text: "Osteomalacia por déficit de calcio; indicar calcitriol a altas dosis y diferir los antirresortivos de forma definitiva" },
        { letter: "E", text: "Artrosis de cadera complicada; iniciar condroitín sulfato y AINEs de forma indefinida" },
      ],
      correct: "B",
      explanation: "Toda fractura producida por un traumatismo de bajo impacto (caída desde la propia altura) en sitios cardinales como cadera o columna vertebral en un adulto mayor establece por sí misma el diagnóstico clínico de Osteoporosis (incluso Osteoporosis Severa/Establecida). No es necesario realizar ni esperar una densitometría ósea previa para justificar el inicio de terapia antirresortiva farmacológica (bifosfonato como alendronato o ácido zoledrónico, o denosumab) asociada a suplementación de calcio y vitamina D.",
      say: {
        stem: "Caso clínico. Mujer de setenta y seis años que sufre fractura de cuello femoral tras caer desde su propia altura en el pasillo de su casa, sin densitometría ósea previa.",
        question: "¿Cuál es el diagnóstico esquelético que se establece clínicamente de manera automática y cuál es la conducta farmacológica apropiada al alta?",
        options: "Las alternativas: osteopenia leve esperando densitometría ambulatoria, osteoporosis clínica establecida iniciando calcio, vitamina D y antirresortivo sin requerir densitometría previa, traumatismo mecánico aislado sin fármacos, osteomalacia con calcitriol, o artrosis de cadera. Piénsalo.",
        answer: "La respuesta correcta es la B. La fractura de cadera por caída de nivel es diagnóstica de osteoporosis automática. No requiere densitometría previa para indicar de inmediato calcio, vitamina D y fármacos antirresortivos.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM · Instrucciones de toma del Alendronato",
      stem: "Mujer de 64 años acude a control con densitometría ósea que informa un T-score de -2.8 DE en columna lumbar L1-L4 y -2.6 DE en cuello femoral. No tiene antecedentes de fracturas previas, su clearance de creatinina es de 62 mL/min y no presenta antecedentes digestivos. Se decide iniciar Alendronato 70 mg vía oral semanal. ¿Cuáles son las instrucciones farmacológicas indispensables que deben entregarse a la paciente para garantizar la absorción y prevenir la esofagitis química erosiva?",
      options: [
        { letter: "A", text: "Tomar el comprimido junto con el almuerzo acompañado de un vaso de leche para proteger la mucosa gástrica" },
        { letter: "B", text: "Tomar el comprimido en ayunas al despertar con un vaso lleno de agua pura, permaneciendo en bipedestación o sentado erguido al menos 30 a 60 minutos sin comer" },
        { letter: "C", text: "Tomar el comprimido justo antes de acostarse en la cama con jugo de naranja para acidificar el medio gástrico" },
        { letter: "D", text: "Masticar o disolver el comprimido en agua tibia junto con el suplemento de carbonato de calcio" },
        { letter: "E", text: "Ingerir el fármaco cada 12 horas con las comidas principales y mantener reposo en decúbito supino por 1 hora" },
      ],
      correct: "B",
      explanation: "Los bifosfonatos orales (alendronato, risedronato) presentan una biodisponibilidad oral extremadamente baja (< 1%) y son altamente irritantes para el epitelio esofágico. Para evitar esofagitis erosiva, úlceras esofágicas graves o perforación, y garantizar su absorción, deben ingerirse estrictamente en ayunas al despertar, con un vaso completo de agua corriente pura (sin gas, leche, té ni café), el paciente debe permanecer en posición erguida (de pie o sentado) durante al menos 30 a 60 minutos (prohibido acostarse), y posponer cualquier alimento, bebida o medicamento por al menos una hora.",
      say: {
        stem: "Pregunta del EUNACOM sobre administración farmacológica en osteoporosis. Paciente con densitometría que muestra osteoporosis e inicia alendronato semanal.",
        question: "¿Cuáles son las instrucciones farmacológicas indispensables para garantizar la absorción y prevenir la esofagitis química?",
        options: "Las opciones: tomar con el almuerzo y leche, tomar en ayunas al despertar con agua pura permaneciendo erguido al menos treinta a sesenta minutos sin comer, tomar antes de acostarse con jugo de naranja, masticar junto con calcio, o tomar cada doce horas acostado. Piénsalo.",
        answer: "Es la B. El alendronato exige ayuno matinal estricto con un vaso lleno de agua pura y permanecer de pie o sentado erguido al menos treinta a sesenta minutos para evitar la esofagitis erosiva.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM · Densitometría ósea T-score vs Z-score",
      stem: "En la interpretación de una densitometría ósea mediante absorciometría de rayos X de doble energía (DEXA), ¿cuál es la diferencia conceptual y poblacional fundamental entre el T-score y el Z-score?",
      options: [
        { letter: "A", text: "El T-score compara la densidad mineral ósea con una población joven sana del mismo sexo en su pico de masa ósea, mientras que el Z-score compara con personas de la misma edad cronológica y sexo" },
        { letter: "B", text: "El T-score se utiliza exclusivamente en niños y adolescentes, mientras que el Z-score se utiliza en adultos mayores" },
        { letter: "C", text: "El T-score evalúa únicamente el hueso cortical periférico, mientras que el Z-score mide la trabecular vertebral" },
        { letter: "D", text: "Un Z-score bajo define osteoporosis clínica per se, mientras que el T-score solo predice artrosis" },
        { letter: "E", text: "El T-score y el Z-score son idénticos y se intercambian de forma aleatoria en el informe" },
      ],
      correct: "A",
      explanation: "El T-score expresa el número de desviaciones estándar en relación con el pico de masa ósea medio de un adulto joven sano del mismo sexo (utilizado para clasificar osteoporosis en mujeres posmenopáusicas y varones ≥ 50 años). El Z-score compara la DMO del paciente con los valores de referencia medios de personas de su misma edad y sexo; se usa en mujeres premenopáusicas, varones jóvenes y niños, y cuando es ≤ -2.0 DE obliga a buscar causas secundarias de osteoporosis.",
      say: {
        stem: "Pregunta de fisiología y diagnóstico por imágenes. Se evalúan los parámetros de la densitometría ósea.",
        question: "¿Cuál es la diferencia conceptual y poblacional fundamental entre el índice T y el índice Z?",
        options: "Las alternativas: el índice T compara con adultos jóvenes en su pico de masa ósea y el índice Z compara con personas de la misma edad y sexo, el índice T se usa solo en niños, el índice T mide hueso cortical y el índice Z trabecular, el índice Z define osteoporosis directa, o son términos idénticos. Piénsalo.",
        answer: "La respuesta correcta es la A. El índice T compara con el pico de masa ósea de adultos jóvenes y define osteoporosis en posmenopausia; el índice Z compara con la misma edad y un valor muy bajo orienta a causas secundarias en jóvenes.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM · Tratamiento antirresortivo en insuficiencia renal severa",
      stem: "Mujer de 78 años con osteoporosis severa y enfermedad renal crónica avanzada en etapa 4 con una velocidad de filtración glomerular estimada de 22 mL/min presenta alto riesgo de fractura de cadera. Dado que los bifosfonatos están formalmente contraindicados con clearance de creatinina menor a 35 mL/min, ¿cuál es el fármaco antirresortivo de elección aprobado para su uso en falla renal avanzada?",
      options: [
        { letter: "A", text: "Alendronato oral en dosis reducida de 35 mg quincenales" },
        { letter: "B", text: "Ácido Zoledrónico endovenoso en infusión lenta de 2 horas" },
        { letter: "C", text: "Denosumab (anticuerpo monoclonal anti-RANKL) 60 mg subcutáneo cada 6 meses" },
        { letter: "D", text: "Calcitriol oral a dosis suprafisiológicas de 2 mcg al día" },
        { letter: "E", text: "Ibandronato oral diario sin ayuno" },
      ],
      correct: "C",
      explanation: "Denosumab es un anticuerpo monoclonal completamente humano dirigido contra el ligando de RANK (RANKL). A diferencia de los bifosfonatos (que se eliminan por vía renal y son nefrotóxicos con VFG < 30-35 mL/min), el Denosumab se metaboliza por el sistema retículo endotelial como cualquier inmunoglobulina, por lo que no requiere ajuste de dosis ni está contraindicado en insuficiencia renal avanzada. Requiere monitorización estricta de calcemia por riesgo de hipocalcemia.",
      say: {
        stem: "Pregunta del EUNACOM sobre farmacología en insuficiencia renal avanzada. Paciente con osteoporosis severa y clearance de creatinina en veintidós mililitros por minuto donde los bifosfonatos están contraindicados.",
        question: "¿Cuál es el fármaco antirresortivo de elección aprobado para su uso en falla renal severa?",
        options: "Las opciones: alendronato oral a dosis baja, ácido zoledrónico en infusión lenta, denosumab anticuerpo monoclonal anti-RANKL cada seis meses, calcitriol oral, o ibandronato. Piénsalo.",
        answer: "Es la C. Denosumab no tiene excreción renal y es el antirresortivo de elección en insuficiencia renal con filtración menor a treinta mililitros por minuto, vigilando los niveles de calcio para evitar hipocalcemia.",
      },
    },

    {
      type: "points",
      kicker: "Cierre",
      title: "Reglas de oro para el examen",
      cards: [
        { title: "Diagnóstico clínico directo y Densitometría", tag: "Fractura automática y corte de menos dos coma cinco", kind: "criteria", items: [
          { t: "Fractura por bajo impacto es Osteoporosis directa", d: "No requiere densitometría para iniciar tratamiento",
            say: "Revisemos las tres reglas de oro. Primero: la fractura de cadera o vértebra por caída desde la propia altura establece de inmediato el diagnóstico de osteoporosis, debiendo iniciarse calcio, vitamina D y antirresortivos sin esperar una densitometría." },
          { t: "Criterios OMS: T-score versus Z-score", d: "T-score menor a menos dos coma cinco en posmenopausia",
            say: "Segundo: en densitometría el índice T menor o igual a menos dos coma cinco desviaciones estándar define osteoporosis en posmenopausia; el índice Z menor a menos dos en jóvenes obliga a buscar causas secundarias." },
        ] },
        { title: "Manejo farmacológico y normas del Alendronato", tag: "Ayuno con agua pura y Denosumab en falla renal", kind: "pharma", items: [
          { t: "Alendronato: Ayuno con agua y posición erguida", d: "Evitar esofagitis permaneciendo erguido treinta a sesenta minutos",
            say: "Tercero: el alendronato oral semanal se toma estrictamente en ayuno con un vaso de agua pura, permaneciendo de pie o sentado al menos treinta a sesenta minutos para evitar úlceras esofágicas." },
          { t: "Denosumab en insuficiencia renal y regla de rebote", d: "Seguro con filtración menor a treinta pero no suspender sin puente",
            say: "Denosumab es de elección en falla renal pero nunca debe suspenderse sin bifosfonato puente por riesgo de rebote. Si te llevas una sola idea de hoy: fractura por caída de nivel es osteoporosis directa y se trata sin esperar densitometría; y el alendronato se toma con agua pura y media hora de pie. Con esto cerramos el libro de Reumatología. Muchas gracias." },
        ] },
      ],
    },
  ],

  pathway: {
    title: "Algoritmo de enfrentamiento clínico y terapéutico: Osteoporosis",
    root: N("start", "Sospecha o Tamizaje de Osteoporosis", "Mujer posmenopáusica, adulto mayor o fractura por caída de nivel",
      "Paciente que consulta para evaluación de salud ósea o que ha sufrido una fractura reciente.",
      ["", N("q", "¿Antecedente de fractura reciente de cadera o vértebra por caída desde su propia altura?", "Evaluación de fractura por fragilidad de bajo impacto",
        "Se verifica si el evento traumático fue de baja energía cinética.",
        ["SÍ: Fractura por fragilidad en cadera o columna", N("alert", "Osteoporosis Clínica Establecida: Tratar de inmediato", "REGLA DE ORO: No esperar densitometría. Iniciar Calcio, Vitamina D3 y Antirresortivo",
          "Diagnóstico automático de osteoporosis severa. Iniciar tratamiento farmacológico protector sin diferir por exámenes.")],
        ["NO: Sin antecedentes de fracturas por fragilidad", N("do", "Solicitar Densitometría Ósea (DEXA) y calcular FRAX", "Evaluar columna lumbar L1-L4 y cuello femoral para categorizar según la OMS",
          "Se programa absorciometría radiológica para cuantificar la densidad mineral ósea.",
          ["", N("q", "¿T-score menor o igual a -2.5 DE en cadera o columna?", "Criterio densitométrico de osteoporosis de la OMS",
            "Se evalúa el informe densitométrico en población adulta.",
            ["SÍ: T-score ≤ -2.5 DE (Osteoporosis)", N("ok", "Iniciar Terapia Antirresortiva de Primera Línea", "Alendronato 70 mg/semana en ayunas con agua pura más Calcio y Vitamina D3",
              "Osteoporosis densitométrica confirmada. Prescribir bifosfonato oral con instrucciones estrictas de toma o Denosumab en falla renal.")],
            ["NO: T-score entre -1.0 y -2.5 DE (Osteopenia)", N("q", "¿Herramienta FRAX con riesgo mayor ≥ 20% o cadera ≥ 3%?", "Evaluación de riesgo absoluto a 10 años",
              "Se evalúa la probabilidad de fractura calculada por FRAX.",
              ["SÍ: FRAX elevado sobre umbral de corte", N("ok", "Tratar farmacológicamente igual que osteoporosis", "Iniciar bifosfonato de primera línea más optimización de calcio y vitamina D",
                "Osteopenia con alto riesgo de fractura. Se inicia tratamiento antirresortivo activo para prevenir eventos mayores.")],
              ["NO: FRAX bajo umbral de intervención", N("ok", "Manejo no farmacológico y prevención", "Asegurar dieta con 1.000 mg de calcio, actividad física y control DEXA en 2 a 3 años",
                "Bajo riesgo. Promover estilo de vida activo, nutrición adecuada y control periódico.")])])])])]),
  },
};
