// Clase 4.1 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_diabetes.cjs (diab-15).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'diab-15',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Separarlas con el pH, las cetonas y la osmolaridad, y no confundirlas con un abdomen agudo',
      say: 'Bienvenidos. Hoy abrimos el bloque de emergencias hiperglicémicas con las dos crisis clásicas: la cetoacidosis diabética y el estado hiperglicémico hiperosmolar. Son preguntas fijas del EUNACOM. Y aunque las dos tienen la glicemia alta, son enfermedades distintas: una es un problema de ácido, la otra, un problema de agua. Si entiendes por qué, el diagnóstico diferencial sale solo. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Falta total o falta parcial de insulina',
      nodes: [
        { id: 'abs', col: 0, row: 0, k: 'cause', t: 'Déficit absoluto de insulina', s: 'DM1 + hormonas contrarreguladoras' },
        { id: 'lip', col: 1, row: 0, k: 'mech', t: 'Lipólisis sin freno', s: 'Ácidos grasos al hígado' },
        { id: 'cet', col: 2, row: 0, k: 'mech', t: 'Cuerpos cetónicos', s: 'Beta-hidroxibutirato y acetoacetato' },
        { id: 'cad', col: 3, row: 0, k: 'alert', t: 'Cetoacidosis diabética', s: 'Problema de ácido' },
        { id: 'rel', col: 0, row: 3, k: 'cause', t: 'Déficit relativo de insulina', s: 'DM2 con resistencia severa' },
        { id: 'fre', col: 1, row: 3, k: 'mech', t: 'Algo de insulina portal', s: 'Frena la cetogénesis, no la glicemia' },
        { id: 'osm', col: 2, row: 3, k: 'mech', t: 'Diuresis osmótica por días', s: 'Hiperglicemia extrema' },
        { id: 'ehh', col: 3, row: 3, k: 'alert', t: 'Estado hiperosmolar', s: 'Problema de agua' },
      ],
      edges: [
        { from: 'abs', to: 'lip' }, { from: 'lip', to: 'cet' }, { from: 'cet', to: 'cad' },
        { from: 'rel', to: 'fre' }, { from: 'fre', to: 'osm' }, { from: 'osm', to: 'ehh' },
      ],
      steps: [
        { show: ['abs'], note: 'Sin insulina y con las hormonas del estrés al máximo',
          say: 'Empecemos por el mecanismo. En la cetoacidosis hay un déficit absoluto, o casi absoluto, de insulina, sumado a una descarga masiva de hormonas contrarreguladoras: glucagón, catecolaminas, cortisol y hormona de crecimiento.' },
        { show: ['lip'], note: 'La insulina es el freno de la lipólisis',
          say: 'La insulina es el freno del tejido adiposo. Sin ella, se desinhibe la lipasa sensible a hormonas, y los ácidos grasos libres llegan en masa al hígado.' },
        { show: ['cet', 'cad'], note: 'El beta-hidroxibutirato es el cetoácido predominante',
          say: 'El hígado los convierte en cuerpos cetónicos: acetoacetato y beta-hidroxibutirato, que es el predominante. Son ácidos, y se acumulan. Eso es la cetoacidosis: un problema de ácido.' },
        { show: ['rel', 'fre'], note: 'Un poco de insulina basta para frenar las cetonas',
          say: 'En el estado hiperosmolar la historia es otra. Es un diabético tipo dos con un déficit relativo: todavía produce algo de insulina. Esa poca insulina que llega al hígado por la vena porta alcanza para frenar la lipólisis y la cetogénesis, pero no alcanza para que los tejidos capten la glucosa.' },
        { show: ['osm', 'ehh'], note: 'Días a semanas perdiendo agua',
          say: 'Entonces no hay cetonas, pero la glicemia sube sin control. Esa glucosa arrastra agua por la orina, durante días o semanas, y el paciente se deshidrata hasta la hiperosmolaridad, el colapso circulatorio y el compromiso neurológico. Eso es un problema de agua. Guarda esta idea: explica toda la clínica.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Criterios diagnósticos',
      title: 'Cetoacidosis diabética',
      cards: [
        { title: 'Los cuatro criterios', tag: 'ADA y MINSAL', kind: 'criteria', items: [
          { t: 'Glicemia > 250 mg/dL', d: 'Típicamente entre 300 y 600',
            say: 'Vamos a los criterios. La cetoacidosis necesita, primero, una glicemia sobre doscientos cincuenta, típicamente entre trescientos y seiscientos. Fíjate que no es tan alta.' },
          { t: 'pH < 7,30 y HCO₃ < 18 mEq/L', d: 'pH venoso < 7,25',
            say: 'Segundo, acidosis metabólica: pH arterial bajo siete coma treinta, o venoso bajo siete coma veinticinco, con bicarbonato bajo dieciocho.' },
          { t: 'Anion gap > 10–12 mEq/L', d: 'Na − (Cl + HCO₃)',
            say: 'Tercero, anion gap elevado, sobre diez a doce. Se calcula como el sodio menos la suma del cloro y el bicarbonato. Ese gap alto es la huella de los cetoácidos.' },
          { t: 'Cetonas positivas', d: 'β-hidroxibutirato > 3 mmol/L o cetonuria ++',
            say: 'Y cuarto, cetonas positivas: beta-hidroxibutirato en sangre sobre tres milimoles por litro, o cetonuria moderada a intensa.' },
        ] },
        { title: 'Severidad', tag: 'Define dónde se hospitaliza', kind: 'alert', items: [
          { t: 'Leve: pH 7,25–7,30', d: 'HCO₃ 15–18 · alerta · sala o intermedio',
            say: 'Y se clasifica en tres grados. Leve: pH siete coma veinticinco a siete coma treinta, bicarbonato quince a dieciocho, paciente alerta. Va a sala o intermedio.' },
          { t: 'Moderada: pH 7,00–7,24', d: 'HCO₃ 10–14 · somnoliento · intermedio',
            say: 'Moderada: pH siete a siete coma veinticuatro, bicarbonato diez a catorce, alerta a somnoliento. Va a intermedio.' },
          { t: 'Severa: pH < 7,00', d: 'HCO₃ < 10 · estupor o coma · UCI',
            say: 'Severa: pH bajo siete, bicarbonato bajo diez, con estupor o coma. Va a la unidad de cuidados intensivos.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Criterios diagnósticos',
      title: 'Estado hiperglicémico hiperosmolar',
      cards: [
        { title: 'Los criterios', tag: 'Sin acidosis', kind: 'criteria', items: [
          { t: 'Glicemia > 600 mg/dL', d: 'Frecuente 800 a 1.200',
            say: 'Ahora el estado hiperosmolar. La glicemia es mucho más alta: sobre seiscientos, y con frecuencia entre ochocientos y mil doscientos. Es la consecuencia de días de hiperglicemia sin freno.' },
          { t: 'pH > 7,30 y HCO₃ > 18', d: 'Cetonas ausentes o trazas',
            say: 'Pero el pH está sobre siete coma treinta, el bicarbonato sobre dieciocho, y las cetonas están ausentes o apenas en trazas. Recuerda el mecanismo: la poca insulina frenó la cetogénesis.' },
          { t: 'Osmolaridad efectiva > 320', d: 'mOsm/kg',
            say: 'Y el criterio que lo define: la osmolaridad plasmática efectiva sobre trescientos veinte.' },
        ] },
        { title: 'La fórmula', tag: 'Se pregunta', kind: 'key', items: [
          { t: '2 × Na + glicemia / 18', d: 'Normal: 275–295 mOsm/kg',
            say: 'La osmolaridad efectiva se calcula como dos veces el sodio, más la glicemia dividida por dieciocho. El valor normal es doscientos setenta y cinco a doscientos noventa y cinco.' },
          { t: 'Sin nitrógeno ureico', d: 'Cruza las membranas libremente',
            say: '¿Y por qué no se suma el nitrógeno ureico, como en la osmolaridad total? Porque la urea atraviesa libremente las membranas celulares, y no mueve agua. Lo que deshidrata a la neurona es lo que no puede cruzar: el sodio y la glucosa.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'Dos pacientes muy distintos',
      cards: [
        { title: 'Cetoacidosis', tag: 'Rápida, menos de 24 h', kind: 'alert', items: [
          { t: 'Joven, DM1', d: 'Debut en 25–30% o abandono de insulina',
            say: 'Ahora la clínica, y aquí el mecanismo te lo explica todo. La cetoacidosis es típica del niño o el joven con diabetes tipo uno: es la forma de debut en un veinticinco a treinta por ciento, o aparece cuando se abandona la insulina. Se instala rápido, en menos de un día.' },
          { t: 'Dolor abdominal y vómitos', d: 'Simula un abdomen agudo',
            say: 'Da náuseas, vómitos y un dolor abdominal difuso que simula un abdomen agudo quirúrgico, como una apendicitis. Lo produce la propia acidosis, por gastroparesia e hipoperfusión mesentérica. Ojo: ese dolor cede al corregir la acidosis, no con cirugía.' },
          { t: 'Kussmaul y aliento cetósico', d: 'Déficit de 3 a 6 litros',
            say: 'Y respira profundo y rápido, la respiración de Kussmaul, para botar dióxido de carbono y compensar la acidosis. Tiene aliento a fruta y una deshidratación moderada, de tres a seis litros.' },
        ] },
        { title: 'Estado hiperosmolar', tag: 'Insidioso, días a semanas', kind: 'criteria', items: [
          { t: 'Adulto mayor, DM2', d: 'Días de poliuria y polidipsia',
            say: 'El hiperosmolar es el adulto mayor con diabetes tipo dos, a veces institucionalizado, con días o semanas de poliuria y polidipsia.' },
          { t: 'Deshidratación extrema', d: '8 a 12 litros · hipotensión, shock',
            say: 'La deshidratación es extrema: ocho a doce litros. Llega hipotenso, a veces en shock, con piel marmórea.' },
          { t: 'Compromiso de conciencia', d: 'Puede simular un ACV',
            say: 'Y lo que domina es el compromiso de conciencia, desde confusión hasta coma, que se correlaciona con la osmolaridad sobre trescientos veinte. Puede dar signos focales transitorios, como hemiparesia o convulsiones, que simulan un accidente cerebrovascular.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Gatillantes y fórmulas',
      title: 'Siempre busca la causa y corrige el sodio',
      cards: [
        { title: 'Gatillantes', tag: 'Más del 80% tiene uno', kind: 'alert', items: [
          { t: 'Infecciones: la número uno', d: 'Neumonía e infección urinaria',
            say: 'En más del ochenta por ciento de los casos hay un gatillante, y el primero son las infecciones bacterianas: neumonía e infección urinaria. Por eso a estos pacientes siempre se les busca un foco.' },
          { t: 'Omisión de insulina, IAM, ACV', d: 'Pancreatitis, corticoides, antipsicóticos',
            say: 'Después vienen la omisión de la insulina, el infarto, el accidente cerebrovascular, la pancreatitis, y fármacos como los corticoides en dosis altas o los antipsicóticos atípicos.' },
        ] },
        { title: 'Sodio corregido', tag: 'Decide el suero', kind: 'pharma', items: [
          { t: 'Na + 1,6 × (glicemia − 100) / 100', d: 'La glucosa diluye el sodio',
            say: 'Y una fórmula que vas a necesitar la próxima clase: el sodio corregido. La glucosa alta saca agua de las células y diluye el sodio, así que el sodio medido aparece falsamente bajo. Por cada cien de glicemia sobre cien, se suma uno coma seis al sodio medido.' },
          { t: 'Ejemplo: Na 132, glicemia 420', d: 'Corregido ≈ 137 mEq/L',
            say: 'Por ejemplo, sodio de ciento treinta y dos con glicemia de cuatrocientos veinte: cuatrocientos veinte menos cien son trescientos veinte, tres coma dos veces cien, y eso por uno coma seis da cerca de cinco. El sodio real es alrededor de ciento treinta y siete. Ese número es el que elige el suero.' },
        ] },
        { title: 'Anion gap', tag: 'Normal 8–12', kind: 'key', items: [
          { t: 'Na − (Cl + HCO₃)', d: 'Su cierre marca la resolución',
            say: 'Y el anion gap, normal entre ocho y doce, no solo diagnostica la cetoacidosis: su cierre es lo que se sigue para saber que se está resolviendo.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'La trampa moderna',
      title: 'Cetoacidosis euglicémica por iSGLT2',
      nodes: [
        { id: 'sg', col: 0, row: 1, k: 'cause', t: 'Inhibidor de SGLT2', s: 'Dapagliflozina, empagliflozina' },
        { id: 'glu', col: 1, row: 0, k: 'mech', t: 'Glucosuria masiva', s: 'Glicemia normal o < 200–250' },
        { id: 'hor', col: 1, row: 2, k: 'mech', t: 'Menos insulina, más glucagón', s: 'El cuerpo cree que no hay hiperglicemia' },
        { id: 'est', col: 2, row: 1, k: 'risk', t: 'Estrés intercurrente', s: 'Cirugía, ayuno, infección' },
        { id: 'eug', col: 3, row: 1, k: 'alert', t: 'CAD sin hiperglicemia marcada', s: 'Gap alto + cetonemia positiva' },
        { id: 'tra', col: 3, row: 3, k: 'trap', t: 'Descartar CAD por la glicemia', s: 'Pedir gases y cetonemia igual' },
      ],
      edges: [
        { from: 'sg', to: 'glu' }, { from: 'sg', to: 'hor' },
        { from: 'glu', to: 'est' }, { from: 'hor', to: 'est' },
        { from: 'est', to: 'eug' }, { from: 'eug', to: 'tra', label: 'error' },
      ],
      steps: [
        { show: ['sg', 'glu'], note: 'La glucosa se va por la orina',
          say: 'Y ahora la entidad que el examen pregunta cada vez más: la cetoacidosis euglicémica por inhibidores de SGLT dos, como dapagliflozina o empagliflozina. Estos fármacos botan glucosa por la orina, así que la glicemia queda normal o apenas elevada, bajo doscientos a doscientos cincuenta.' },
        { show: ['hor'], note: 'Se produce menos insulina',
          say: 'Con la glicemia baja, el páncreas secreta menos insulina, y sube el glucagón. Es exactamente el ambiente que favorece las cetonas.' },
        { show: ['est'], note: 'El gatillante',
          say: 'Si a eso se suma un estrés, como una cirugía, un ayuno o una infección, se desata la cetogénesis. Por eso en la clase anterior los suspendíamos al hospitalizar.' },
        { show: ['eug'], note: 'Acidosis con cetonas, sin glicemia alta',
          say: 'El resultado es una cetoacidosis con anion gap elevado y cetonemia positiva, pero sin la hiperglicemia marcada que esperarías.' },
        { show: ['tra'], note: 'La glicemia no descarta',
          say: 'Y la trampa es descartar la cetoacidosis porque la glicemia capilar es de ciento ochenta. Todo paciente con un inhibidor de SGLT dos que consulta por náuseas, vómitos, dolor abdominal o disnea necesita gases venosos y cetonemia, sea cual sea su glicemia.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en el árbol que vas a usar frente a un diabético descompensado.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Cetoacidosis frente a estado hiperosmolar',
      head: ['Parámetro', 'Cetoacidosis', 'Estado hiperosmolar'],
      rows: [
        { cells: ['Paciente e instalación', 'Joven DM1 · < 24–48 h', 'Adulto mayor DM2 · días a semanas'],
          say: 'Repasemos la comparación en una tabla. Cetoacidosis: joven con diabetes tipo uno, instalación en horas. Hiperosmolar: adulto mayor con tipo dos, en días a semanas.' },
        { cells: ['Glicemia', '250–600 (o < 250 con iSGLT2)', '> 600, hasta 1.200'],
          say: 'La glicemia: en la cetoacidosis, doscientos cincuenta a seiscientos, o menos con inhibidores de SGLT dos. En el hiperosmolar, sobre seiscientos. Ojo: la glicemia más alta no significa la crisis más ácida.' },
        { cells: ['pH y bicarbonato', 'pH < 7,30 · HCO₃ < 18', 'pH > 7,30 · HCO₃ > 18'],
          say: 'El pH y el bicarbonato: bajos en la cetoacidosis, normales en el hiperosmolar.' },
        { cells: ['Anion gap y cetonas', 'Gap > 12 · cetonas intensas', 'Gap normal · cetonas negativas o trazas'],
          say: 'El anion gap y las cetonas: altos en la cetoacidosis; normales, o apenas trazas de cetonas, en el hiperosmolar.' },
        { cells: ['Osmolaridad efectiva', 'Habitualmente < 320', '> 320 mOsm/kg'],
          say: 'La osmolaridad efectiva: habitualmente bajo trescientos veinte en la cetoacidosis, sobre trescientos veinte en el hiperosmolar.' },
        { cells: ['Déficit de agua', '3–6 litros', '8–12 litros'],
          say: 'El déficit de agua: tres a seis litros contra ocho a doce.' },
        { cells: ['Clínica que confunde', 'Dolor abdominal: no es quirúrgico', 'Coma y signos focales: no es un ACV'],
          say: 'Y la clínica que confunde: el dolor abdominal de la cetoacidosis no es quirúrgico, y los signos focales del hiperosmolar no son un accidente cerebrovascular.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 54 años, DM2 en tratamiento con metformina y dapagliflozina, cursa el segundo día postoperatorio de una colectomía, en ayuno. Presenta náuseas, vómitos, dolor abdominal y polipnea. Hemoglucotest 176 mg/dL. Gases venosos: pH 7,18, HCO₃ 11 mEq/L. Na 139, Cl 102 mEq/L. Cetonemia 4,5 mmol/L.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Acidosis láctica por metformina' },
        { letter: 'B', text: 'Cetoacidosis diabética euglicémica asociada a iSGLT2' },
        { letter: 'C', text: 'Estado hiperglicémico hiperosmolar' },
        { letter: 'D', text: 'Íleo postoperatorio con deshidratación' },
        { letter: 'E', text: 'Acidosis metabólica hiperclorémica por suero fisiológico' },
      ],
      correct: 'B',
      explanation: 'Acidosis metabólica con anion gap elevado (139 − [102 + 11] = 26) y cetonemia > 3 mmol/L, con glicemia < 200 mg/dL, en una usuaria de dapagliflozina con ayuno y cirugía: cetoacidosis euglicémica. La glicemia normal no descarta la cetoacidosis.',
      say: {
        stem: 'Vamos con un caso. Mujer de cincuenta y cuatro años, diabética tipo dos con metformina y dapagliflozina, en el segundo día después de una colectomía, en ayuno. Tiene náuseas, vómitos, dolor abdominal y respira rápido. Su hemoglucotest es ciento setenta y seis. Los gases muestran pH siete coma dieciocho y bicarbonato once. Sodio ciento treinta y nueve, cloro ciento dos, y cetonemia de cuatro coma cinco.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: acidosis láctica por metformina, cetoacidosis euglicémica por el inhibidor de SGLT dos, estado hiperosmolar, íleo postoperatorio, o acidosis hiperclorémica por el suero. Piénsalo.',
        answer: 'Es la B. Calcula el anion gap: ciento treinta y nueve menos ciento trece da veintiséis, muy elevado, y la cetonemia está sobre tres. Es una cetoacidosis, con glicemia bajo doscientos, en una usuaria de dapagliflozina operada y en ayuno. La A tienta por la metformina, pero la cetonemia positiva te dice de dónde viene el ácido. Y la hiperclorémica tendría el gap normal.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 16',
      stem: 'Un joven de 14 años, deportista de alto rendimiento, consulta por un cuadro de poldipsia y poliuria de 3 semanas de evolución, al que hace 7 días se agrega astenia, náuseas y malestar general. Refiere marcada debilidad, después de realizar ejercicio. Se solicitan exámenes, en las que destaca glicemia: 312 mg/dl, Na+: 132 mEq/L, K+: 5,0 mEq/L, pH sanguíneo: 7,26, bicarbonato plasmático: 11 mEq/L, exceso de base: -13.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Hiperglicemia secundaria al ejercicio' },
        { letter: 'B', text: 'Cetoacidosis diabética' },
        { letter: 'C', text: 'Debut de diabetes tipo 2' },
        { letter: 'D', text: 'Diabetes insípida descompensada' },
        { letter: 'E', text: 'Coma hiperosmolar' },
      ],
      correct: 'B',
      explanation: 'Glicemia > 250 mg/dL con acidosis metabólica (pH < 7,30 y HCO₃ < 18) en un adolescente con síntomas cardinales: cetoacidosis diabética como debut de una DM1. No es hiperosmolar: la glicemia es < 600 y hay acidosis.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil dieciocho. Joven de catorce años, deportista, con tres semanas de polidipsia y poliuria, al que hace una semana se agregan astenia, náuseas y malestar. Glicemia trescientos doce, sodio ciento treinta y dos, potasio cinco, pH siete coma veintiséis, bicarbonato once y exceso de base menos trece.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: hiperglicemia por ejercicio, cetoacidosis diabética, debut de diabetes tipo dos, diabetes insípida, o coma hiperosmolar. Piénsalo.',
        answer: 'Es la B. Aplica los criterios: glicemia sobre doscientos cincuenta, pH bajo siete coma treinta y bicarbonato bajo dieciocho. Es una cetoacidosis, y en un adolescente es la forma de debut de la diabetes tipo uno. El deporte es un distractor. Y el coma hiperosmolar cae por dos razones: la glicemia no llega a seiscientos y hay acidosis.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 39',
      stem: 'Un paciente de 70 años presenta un cuadro de malestar general y poliuria de dos semanas de evolución, agregándose desorientación y compromiso de conciencia cuantitativo en las últimas 48 horas. En su examen, no presenta focalidad neurológica y sus laboratorios revelan glicemia: 950 mg/dL, pH venoso: 7,37, bicarbonato: 18 mEq/L, cetonemia (-), cetonuria (+), sodio plasmático: 149 mEq/L y potasio plasmático: 5,0 mEq/L.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Coma hiperosmolar no cetósico' },
        { letter: 'B', text: 'Cetoacidosis diabética' },
        { letter: 'C', text: 'Síndrome hiperglicémico mixto (hiperosmolar + cetoacidosis)' },
        { letter: 'D', text: 'Hipernatremia sintomática' },
        { letter: 'E', text: 'Edema cerebral' },
      ],
      correct: 'A',
      explanation: 'Adulto mayor, dos semanas de poliuria, compromiso de conciencia, glicemia > 600 sin acidosis (pH 7,37) y cetonemia negativa. Osmolaridad efectiva: 2 × 149 + 950/18 ≈ 351 mOsm/kg (> 320). Una cetonuria aislada no hace una cetoacidosis.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Paciente de setenta años con dos semanas de malestar y poliuria, que en los últimos dos días se desorienta y compromete conciencia, sin focalidad. Glicemia novecientos cincuenta, pH venoso siete coma treinta y siete, bicarbonato dieciocho, cetonemia negativa, cetonuria positiva, sodio ciento cuarenta y nueve y potasio cinco.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: coma hiperosmolar no cetósico, cetoacidosis diabética, síndrome mixto, hipernatremia sintomática, o edema cerebral. Piénsalo.',
        answer: 'Es la A, el estado hiperosmolar. Adulto mayor, semanas de poliuria, compromiso de conciencia y glicemia sobre seiscientos, sin acidosis. Calcula la osmolaridad: dos por ciento cuarenta y nueve, más novecientos cincuenta dividido por dieciocho, da unos trescientos cincuenta. La trampa es la cetonuria positiva, que empuja al síndrome mixto; pero sin acidosis y con cetonemia negativa, no hay cetoacidosis.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 54',
      stem: 'Un paciente de 20 años presenta un cuadro de poliuria y polidipsia, de 2 días de evolución, a lo que se ha agregado dolor abdominal y vómitos hace pocas horas. Se solicita una glicemia, que resulta 360 mg/dl.',
      question: '¿Qué examen es más adecuado para proseguir con el estudio de este paciente?',
      options: [
        { letter: 'A', text: 'Cetonemia' },
        { letter: 'B', text: 'Creatininemia' },
        { letter: 'C', text: 'Perfil lipídico' },
        { letter: 'D', text: 'Hemoglobina glicosilada' },
        { letter: 'E', text: 'Hemograma' },
      ],
      correct: 'A',
      explanation: 'Joven con síntomas cardinales, dolor abdominal, vómitos y glicemia > 250: sospecha de cetoacidosis. Lo urgente es confirmarla con cetonemia (junto con gases venosos). La HbA1c no cambia la conducta en la urgencia.',
      say: {
        stem: 'Una más, del EUNACOM de julio de dos mil dieciséis. Paciente de veinte años con dos días de poliuria y polidipsia, al que hace pocas horas se agregan dolor abdominal y vómitos. La glicemia es trescientos sesenta.',
        question: '¿Qué examen es más adecuado para seguir el estudio?',
        options: 'Las opciones: cetonemia, creatinina, perfil lipídico, hemoglobina glicosilada o hemograma. Piénsalo.',
        answer: 'Es la A, la cetonemia. Joven, síntomas cardinales, dolor abdominal y vómitos, con glicemia sobre doscientos cincuenta: estás pensando en cetoacidosis, y el criterio que falta confirmar son las cetonas, junto con los gases. La hemoglobina glicosilada es la trampa: sirve para el control crónico, pero no te dice si hoy el paciente está en cetoacidosis.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Cetoacidosis', tag: 'Problema de ácido', kind: 'alert', items: [
          { t: '> 250 + pH < 7,30 + gap alto', d: 'Con cetonas positivas',
            say: 'Cerremos con las reglas de oro. Cetoacidosis: glicemia sobre doscientos cincuenta, pH bajo siete coma treinta con bicarbonato bajo dieciocho, anion gap elevado y cetonas positivas.' },
          { t: 'Dolor abdominal no quirúrgico', d: 'Kussmaul, vómitos, joven DM1',
            say: 'Es el joven con dolor abdominal, vómitos y Kussmaul. Ese dolor no se opera: se corrige la acidosis.' },
        ] },
        { title: 'Estado hiperosmolar', tag: 'Problema de agua', kind: 'criteria', items: [
          { t: '> 600 + osmolaridad > 320', d: '2 × Na + glicemia / 18',
            say: 'Estado hiperosmolar: glicemia sobre seiscientos y osmolaridad efectiva sobre trescientos veinte, sin acidosis ni cetosis.' },
          { t: 'Adulto mayor con compromiso de conciencia', d: 'Deshidratación de 8 a 12 litros',
            say: 'Es el adulto mayor con semanas de poliuria, deshidratación extrema y compromiso de conciencia.' },
        ] },
        { title: 'No olvidar', tag: 'Trampas', kind: 'key', items: [
          { t: 'iSGLT2: CAD con glicemia normal', d: 'Pedir gases y cetonemia igual',
            say: 'Con inhibidores de SGLT dos, la cetoacidosis puede venir con glicemia normal.' },
          { t: 'Buscar el gatillante', d: 'Infección: la número uno',
            say: 'Y siempre busca el gatillante, primero una infección. Si te llevas una sola idea de hoy: la cetoacidosis es un problema de ácido y el hiperosmolar, un problema de agua. En la próxima clase vemos cómo se repone esa agua. Nos vemos.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Diabético descompensado: CAD o EHH',
    root: N('start', 'Diabético con hiperglicemia y malestar', 'Vómitos, dolor abdominal o compromiso de conciencia',
      'Llega un diabético descompensado. Antes de tratar, necesitas saber cuál de las dos crisis es, y para eso pides gases venosos, electrolitos y cetonas.',
      ['', N('q', '¿pH < 7,30 y HCO₃ < 18?', 'Gases venosos',
        'La primera pregunta es el ácido: ¿hay acidosis metabólica?',
        ['SÍ', N('q', '¿Gap alto y cetonas positivas?', 'Na − (Cl + HCO₃)',
          'Si hay acidosis, calcula el anion gap y mira las cetonas.',
          ['SÍ', N('alert', 'Cetoacidosis diabética', 'Glicemia > 250 · o menor con iSGLT2',
            'Gap alto con cetonas positivas es cetoacidosis. Si la glicemia está bajo doscientos cincuenta y el paciente usa un inhibidor de SGLT dos, es la forma euglicémica. Luego clasificas la severidad por el pH y el bicarbonato.')])],
        ['NO', N('q', '¿Glicemia > 600 y osmolaridad > 320?', '2 × Na + glicemia / 18',
          'Sin acidosis, calcula la osmolaridad efectiva: dos veces el sodio, más la glicemia dividida por dieciocho.',
          ['SÍ', N('alert', 'Estado hiperosmolar', 'Cetonas negativas o trazas',
            'Glicemia sobre seiscientos con osmolaridad sobre trescientos veinte, sin acidosis: estado hiperglicémico hiperosmolar. En los dos casos, busca el gatillante, primero una infección.')])])]),
  },
};
