// Clase 5.1 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neumologia.cjs (resp-21, en dataset_neumologia_bloque_5.cjs).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'resp-21',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Leer los gases, calcular el gradiente y elegir el soporte correcto',
      say: 'Bienvenidos. Abrimos el bloque de cuidados críticos con la insuficiencia respiratoria aguda, un tema transversal que aparece en neumonía, en EPOC, en intoxicaciones y en la unidad de intensivo. Todo se ordena con tres preguntas sobre los gases arteriales: ¿hay hipoxemia?, ¿está alto el CO dos?, y ¿está alto el gradiente alvéolo arterial? Si respondes esas tres, sabes el mecanismo, y el mecanismo te dice qué soporte darle al paciente.',
    },

    {
      type: 'points',
      kicker: 'Definición',
      title: 'La definición es gasométrica',
      cards: [
        { title: 'Criterio diagnóstico', tag: 'Gases arteriales', kind: 'criteria', items: [
          { t: 'PaO2 < 60 mmHg', d: 'Aire ambiental, a nivel del mar',
            say: 'Partamos por la definición, porque en el examen es estricta. La insuficiencia respiratoria aguda se diagnostica con gases arteriales, no con la clínica. El criterio es una presión arterial de oxígeno menor de sesenta milímetros de mercurio, respirando aire ambiental y a nivel del mar.' },
          { t: 'Equivale a SatO2 < 90%', d: 'Falla al oxigenar y/o al eliminar CO2',
            say: 'Eso equivale, más o menos, a una saturación bajo noventa por ciento. Y la idea de fondo es que el sistema respiratorio no logra oxigenar la sangre venosa, no logra eliminar el CO dos que produce el metabolismo, o no logra ninguna de las dos cosas.' },
        ] },
        { title: '¿Por qué 60?', tag: 'Curva de disociación', kind: 'key', items: [
          { t: 'Inflexión de la curva', d: 'Bajo 60, la saturación cae en picada',
            say: '¿Y por qué sesenta, y no cincuenta o setenta? Porque es el punto de inflexión de la curva de disociación de la hemoglobina. Por encima de sesenta la curva es plana, y la saturación se mantiene aunque baje la presión de oxígeno.' },
          { t: 'Se compromete la entrega tisular', d: 'Pequeñas caídas, grandes efectos',
            say: 'Por debajo de sesenta, en cambio, pequeñas caídas de presión producen caídas enormes de saturación, y los tejidos dejan de recibir el oxígeno que necesitan. Por eso ese número no es arbitrario: marca el borde del precipicio.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Mecanismos',
      title: 'Cinco caminos a la hipoxemia',
      nodes: [
        { id: 'vq', col: 0, row: 0, k: 'cause', t: 'Bajo V/Q', s: 'NAC, EPOC, asma, TEP' },
        { id: 'sh', col: 0, row: 1, k: 'alert', t: 'Shunt', s: 'SDRA, edema masivo, atelectasia' },
        { id: 'di', col: 0, row: 2, k: 'cause', t: 'Difusión', s: 'Fibrosis pulmonar avanzada' },
        { id: 'hv', col: 0, row: 3, k: 'cause', t: 'Hipoventilación', s: 'Opioides, Guillain-Barré, miastenia' },
        { id: 'pi', col: 0, row: 4, k: 'cause', t: 'Baja PiO2', s: 'Altura > 3.000 m' },
        { id: 'hx', col: 2, row: 2, k: 'effect', t: 'Hipoxemia', s: 'PaO2 < 60 mmHg' },
        { id: 'pul', col: 3, row: 1, k: 'risk', t: 'Pulmón dañado', s: 'Gradiente A-a alto' },
        { id: 'ext', col: 3, row: 3, k: 'good', t: 'Pulmón sano', s: 'Gradiente A-a normal' },
      ],
      edges: [
        { from: 'vq', to: 'hx' }, { from: 'sh', to: 'hx' }, { from: 'di', to: 'hx' },
        { from: 'hv', to: 'hx' }, { from: 'pi', to: 'hx' },
        { from: 'hx', to: 'pul', label: 'V/Q · shunt · difusión' },
        { from: 'hx', to: 'ext', label: 'hipoventilación · altura' },
      ],
      steps: [
        { show: ['vq', 'hx'], note: 'El mecanismo más frecuente',
          say: 'Toda hipoxemia sale de uno de cinco mecanismos, y conocerlos es lo que te permite leer los gases. El más frecuente es el desbalance ventilación perfusión: zonas del pulmón que reciben sangre, pero poco aire. Es lo que pasa en la neumonía, la EPOC, el asma y el tromboembolismo pulmonar. Su sello es que corrige bien con oxígeno.' },
        { show: ['sh'], note: 'El único que no corrige con oxígeno al 100%',
          say: 'El segundo es el shunt, o cortocircuito. La sangre pasa por alvéolos completamente colapsados o llenos de líquido o pus, como en el distrés respiratorio grave, el edema pulmonar masivo o una atelectasia lobar total. Esa sangre nunca toca el aire.' },
        { show: ['hv'], note: 'Falla de la bomba: el CO2 sube sí o sí',
          say: 'El tercero es la hipoventilación alveolar pura. El pulmón está sano, pero la bomba falla: el centro respiratorio está deprimido por opioides o benzodiacepinas, o los músculos no responden, como en el Guillain-Barré, la crisis miasténica o la ELA. Aquí el CO dos sube obligadamente, porque no se ventila.' },
        { show: ['di', 'pi'], note: 'Difusión y altura',
          say: 'Los dos últimos son menos preguntados. La alteración de la difusión, por una membrana engrosada como en la fibrosis pulmonar avanzada, que al principio da hipoxemia solo con el ejercicio. Y la baja presión inspirada de oxígeno, en la altura sobre tres mil metros.' },
        { show: ['pul', 'ext'], note: 'El gradiente separa pulmón enfermo de pulmón sano',
          say: 'Y fíjate en cómo se agrupan. Desbalance, shunt y difusión son enfermedades del pulmón, y elevan el gradiente alvéolo arterial. La hipoventilación y la altura dejan el pulmón intacto, y el gradiente queda normal. Ese es el cálculo que vemos ahora.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Gradiente alvéolo-arterial',
      title: 'Cómo se calcula el gradiente A-a',
      cards: [
        { title: 'Ecuación del gas alveolar', tag: 'Aire ambiental, nivel del mar', kind: 'criteria', items: [
          { t: 'PAO2 = 150 − PaCO2/0,8', d: 'El oxígeno que llega al alvéolo',
            say: 'El gradiente compara el oxígeno que hay en el alvéolo con el que llega a la sangre arterial. Primero calculas el oxígeno alveolar: respirando aire ambiental a nivel del mar, es ciento cincuenta menos la presión arterial de CO dos dividida por cero coma ocho.' },
          { t: 'Gradiente = PAO2 − PaO2', d: 'Alveolar menos arterial',
            say: 'Después, al oxígeno alveolar le restas la presión arterial de oxígeno de los gases. Esa diferencia es el gradiente. Si el pulmón funciona bien, casi todo el oxígeno del alvéolo pasa a la sangre y la diferencia es pequeña.' },
        ] },
        { title: 'Valor normal', tag: 'Sube con la edad', kind: 'normal', items: [
          { t: '5 a 15 mmHg en el joven', d: 'Edad/4 + 4',
            say: 'En el adulto joven el gradiente normal va de cinco a quince milímetros de mercurio. Aumenta con la edad: se estima como la edad dividida por cuatro, más cuatro.' },
          { t: 'Hasta 20 mmHg sobre los 70', d: 'Sobre 20: pulmón enfermo',
            say: 'En mayores de setenta años puede llegar a veinte. Por eso, en la práctica, sobre veinte milímetros de mercurio hablamos de un gradiente elevado a cualquier edad.' },
        ] },
        { title: 'Interpretación', tag: 'Regla de oro', kind: 'key', items: [
          { t: 'Normal: el problema está fuera del pulmón', d: 'Hipoventilación o altura',
            say: 'Y esta es la regla de oro que se pregunta. Hipoxemia con gradiente normal significa que el parénquima y la circulación pulmonar están sanos: la causa está fuera del pulmón, y es hipoventilación o altura.' },
          { t: 'Elevado: daño del pulmón', d: 'Neumonía, SDRA, edema, TEP',
            say: 'Hipoxemia con gradiente elevado significa daño del propio pulmón, ya sea del parénquima, como la neumonía, el distrés o el edema, o de los vasos, como el tromboembolismo pulmonar.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'La diferencia que más se pregunta',
      title: 'Tres preguntas a los gases',
      nodes: [
        { id: 'hx', col: 0, row: 2, k: 'start', t: 'PaO2 < 60 mmHg', s: 'Insuficiencia respiratoria' },
        { id: 'co2', col: 1, row: 2, k: 'q', t: '¿PaCO2 > 45?', s: 'Tipo 1 o tipo 2' },
        { id: 't1', col: 2, row: 0, k: 'risk', t: 'Tipo 1: hipoxémica', s: 'PaCO2 ≤ 45, gradiente alto' },
        { id: 'aa', col: 2, row: 3, k: 'q', t: '¿Gradiente A-a?', s: 'En la tipo 2' },
        { id: 'hv', col: 3, row: 4, k: 'good', t: 'Hipoventilación pura', s: 'Gradiente normal' },
        { id: 'o2', col: 3, row: 0, k: 'q', t: '¿Corrige con O2 100%?', s: 'Test de oxígeno' },
        { id: 'sh', col: 4, row: 1, k: 'alert', t: 'No corrige: shunt', s: 'SDRA, edema masivo' },
      ],
      edges: [
        { from: 'hx', to: 'co2' },
        { from: 'co2', to: 't1', label: 'no' }, { from: 'co2', to: 'aa', label: 'sí' },
        { from: 'aa', to: 'hv', label: 'normal' }, { from: 'aa', to: 't1', label: 'alto' },
        { from: 't1', to: 'o2' }, { from: 'o2', to: 'sh', label: 'no' },
      ],
      steps: [
        { show: ['hx', 'co2'], note: 'Primera pregunta: el CO2',
          say: 'Juntemos todo en la secuencia que usas frente a unos gases. Confirmada la hipoxemia, la primera pregunta es el CO dos. Si está sobre cuarenta y cinco, es una insuficiencia respiratoria tipo dos, hipercápnica. Si está normal o bajo, es tipo uno, hipoxémica.' },
        { show: ['t1'], note: 'Tipo 1: siempre gradiente elevado',
          say: 'La tipo uno es una falla de oxigenación del parénquima, y su gradiente está siempre elevado. El paciente hiperventila para compensar, y por eso el CO dos queda normal o incluso bajo.' },
        { show: ['aa', 'hv'], note: 'CO2 alto + gradiente normal = la bomba',
          say: 'En la tipo dos, la segunda pregunta es el gradiente. Si es normal, el pulmón está sano y la falla es la bomba: hipoventilación pura. El caso clásico es la sobredosis de opioides. Si el gradiente también está alto, hay daño pulmonar además de la falla ventilatoria, como en el EPOC que se cansa.' },
        { show: ['o2', 'sh'], note: 'Refractario al O2 al 100%: shunt',
          say: 'Y la tercera pregunta es la respuesta al oxígeno. El desbalance ventilación perfusión, la hipoventilación y la difusión corrigen con oxígeno. El shunt es el único mecanismo que no corrige con oxígeno al cien por ciento, porque el aire nunca llega a esa sangre. Hipoxemia refractaria al oxígeno es shunt: esa frase se pregunta.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'Cómo se ve cada tipo',
      cards: [
        { title: 'Tipo 1: hipoxémica', tag: 'Falla de oxigenación', kind: 'criteria', items: [
          { t: 'PaO2 < 60 con PaCO2 ≤ 45', d: 'Gradiente A-a elevado',
            say: 'Ahora la clínica, que también te ayuda a separarlas. La tipo uno es la falla de oxigenación: presión de oxígeno bajo sesenta, con CO dos normal o bajo, y el gradiente elevado.' },
          { t: 'Taquipnea, taquicardia, cianosis', d: 'Musculatura accesoria y sudoración',
            say: 'El paciente se ve luchando por respirar: taquipnea, taquicardia, uso de musculatura accesoria, sudoración y cianosis. Es el paciente con neumonía que llega desaturado y respirando rápido.' },
        ] },
        { title: 'Tipo 2: hipercápnica', tag: 'Falla de bomba', kind: 'alert', items: [
          { t: 'PaCO2 > 45 mmHg', d: 'Con acidosis respiratoria si es aguda: pH < 7,35',
            say: 'La tipo dos es la falla de la bomba: CO dos sobre cuarenta y cinco, y si es aguda, con acidosis respiratoria, un pH bajo siete coma treinta y cinco. Puede tener o no hipoxemia asociada.' },
          { t: 'Narcosis por CO2', d: 'Cefalea, somnolencia, confusión, asterixis',
            say: 'Y lo que la delata es la narcosis por CO dos. El CO dos dilata los vasos cerebrales, y el paciente tiene cefalea pulsátil, somnolencia fluctuante, confusión, estupor, asterixis e incluso convulsiones. Ojo: un EPOC que se pone somnoliento no está descansando, está reteniendo CO dos.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Oxígeno: el dispositivo según el paciente',
      cards: [
        { title: 'Tipo 1', tag: 'Meta SatO2 92–96%', kind: 'pharma', items: [
          { t: 'Cánula nasal 1–5 L/min', d: 'FiO2 24 a 40%',
            say: 'Pasemos al tratamiento, que es escalonado. En la tipo uno, sin retención de CO dos, se da oxígeno titulado para una saturación de noventa y dos a noventa y seis por ciento. Se parte con cánula nasal, de uno a cinco litros por minuto.' },
          { t: 'Cánula nasal de alto flujo', d: 'Hasta 60 L/min si PaFi < 200',
            say: 'Si la hipoxemia persiste y es moderada a severa, con una relación PaFi bajo doscientos, se sube a cánula nasal de alto flujo, hasta sesenta litros por minuto. Reduce el trabajo respiratorio y genera un poco de presión positiva al final de la espiración.' },
          { t: 'Índice ROX < 3,88', d: 'Alto riesgo de falla del alto flujo',
            say: 'Para saber si el alto flujo está fracasando se usa el índice ROX. Si entre las dos y doce horas está bajo tres coma ochenta y ocho, el riesgo de falla es alto y hay que escalar.' },
        ] },
        { title: 'Retenedor de CO2', tag: 'EPOC', kind: 'alert', items: [
          { t: 'Mascarilla Venturi', d: 'FiO2 fija: 24, 28, 35 o 50%',
            say: 'En el paciente que retiene CO dos, como el EPOC, el dispositivo de elección es la mascarilla Venturi, porque entrega una fracción de oxígeno fija y precisa: veinticuatro, veintiocho, treinta y cinco o cincuenta por ciento.' },
          { t: 'Evitar el exceso de oxígeno', d: 'Empeora la hipoventilación',
            say: '¿Por qué tanto cuidado? Porque en el retenedor, el exceso de oxígeno empeora la hipoventilación y el CO dos sigue subiendo. Darle oxígeno a chorro a un EPOC somnoliento es una trampa clásica.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Soporte ventilatorio',
      title: 'VMNI o intubación',
      nodes: [
        { id: 'ac', col: 0, row: 1, k: 'start', t: 'Acidosis hipercápnica', s: 'pH 7,25–7,35 y PaCO2 > 45' },
        { id: 'ind', col: 0, row: 3, k: 'cause', t: 'EPOC exacerbado', s: 'o edema pulmonar cardiogénico' },
        { id: 'vmni', col: 1, row: 2, k: 'good', t: 'VMNI BiPAP', s: 'IPAP 10–15 · EPAP 4–6 cmH2O' },
        { id: 'ben', col: 2, row: 1, k: 'effect', t: 'Menos intubación', s: 'Más del 60%, y menos mortalidad' },
        { id: 'q', col: 2, row: 3, k: 'q', t: '¿Falla en 1–2 h?', s: 'O criterio de intubación' },
        { id: 'vmi', col: 3, row: 3, k: 'alert', t: 'Intubación y VMI', s: 'Glasgow ≤ 8, shock, paro' },
      ],
      edges: [
        { from: 'ac', to: 'vmni' }, { from: 'ind', to: 'vmni' },
        { from: 'vmni', to: 'ben' }, { from: 'vmni', to: 'q' }, { from: 'q', to: 'vmi', label: 'sí' },
      ],
      steps: [
        { show: ['ac', 'ind'], note: 'Las dos indicaciones de primera línea',
          say: 'Cuando el oxígeno no basta, viene el soporte ventilatorio. La ventilación mecánica no invasiva, la VMNI en modalidad BiPAP, es de primera línea en dos escenarios: la exacerbación de EPOC con acidosis hipercápnica, con pH entre siete coma veinticinco y siete coma treinta y cinco y CO dos sobre cuarenta y cinco, y el edema pulmonar agudo cardiogénico.' },
        { show: ['vmni'], note: 'Dos presiones por mascarilla',
          say: 'La BiPAP entrega dos presiones por una mascarilla: una inspiratoria, de diez a quince centímetros de agua, que ayuda a ventilar y lava el CO dos, y una espiratoria, de cuatro a seis, que mantiene abiertos los alvéolos.' },
        { show: ['ben'], note: 'Evidencia categoría A',
          say: '¿Por qué es tan importante? Porque tiene evidencia categoría A: reduce la necesidad de intubación en más del sesenta por ciento y disminuye la mortalidad hospitalaria. Frente a un EPOC con acidosis respiratoria, la respuesta del examen es VMNI.' },
        { show: ['q'], note: 'Prueba de 1 a 2 horas',
          say: 'Pero la VMNI es una prueba, no un destino. Se evalúa en una a dos horas. Si el pH sigue bajo siete coma veinticinco, si aparece encefalopatía o si el paciente empeora, la prueba fracasó.' },
        { show: ['vmi'], note: 'Criterios de intubación',
          say: 'Y ahí va la intubación orotraqueal con ventilación mecánica invasiva. Sus criterios son: paro cardiorrespiratorio o apnea, compromiso grave de conciencia con Glasgow de ocho o menos, shock refractario, fatiga muscular extrema con respiración paradójica, y el fracaso de la VMNI. Fíjate que el paciente comprometido de conciencia no protege su vía aérea: en él la mascarilla no sirve.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol, desde los gases hasta el soporte.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Los mecanismos en una tabla',
      head: ['Mecanismo', 'PaCO2', 'Gradiente A-a', 'O2 al 100%'],
      rows: [
        { cells: ['Hipoventilación pura (opioides, ACV)', 'Elevada (> 45)', 'Normal', 'Corrige'],
          say: 'Repasemos los mecanismos, que son la base de las preguntas. Hipoventilación pura, por opioides o un accidente cerebrovascular: CO dos alto, gradiente normal, y corrige con oxígeno. La trampa es pensar que el pulmón está enfermo.' },
        { cells: ['Bajo V/Q (NAC, EPOC, asma, TEP)', 'Normal o baja', 'Elevado (> 20)', 'Corrige fácilmente'],
          say: 'Desbalance ventilación perfusión, en la neumonía, la EPOC, el asma o el tromboembolismo: CO dos normal o bajo, gradiente elevado, y corrige fácilmente con oxígeno.' },
        { cells: ['Shunt (SDRA, edema cardiogénico)', 'Normal o baja', 'Muy elevado', 'Refractario'],
          say: 'Shunt, en el distrés o el edema masivo: gradiente muy elevado, y es refractario al oxígeno al cien por ciento. Es el único que no corrige, y lo retomamos en la próxima clase de distrés respiratorio.' },
        { cells: ['Difusión (EPID avanzada)', 'Normal o baja', 'Elevado', 'Corrige'],
          say: 'Alteración de la difusión, en la enfermedad pulmonar intersticial avanzada: gradiente elevado, hipoxemia que aparece primero con el esfuerzo, y corrige con oxígeno.' },
        { cells: ['Baja PiO2 (altura > 3.000 m)', 'Baja', 'Normal', 'Corrige'],
          say: 'Y la altura: gradiente normal y CO dos bajo, porque el paciente hiperventila para compensar. Corrige de inmediato con oxígeno.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 30 años es traído a urgencias tras ser encontrado en su casa con compromiso de conciencia, junto a blísteres vacíos de un opioide. Glasgow 7, FR 6 rpm, pupilas mióticas puntiformes, murmullo pulmonar normal. Gases con aire ambiental: pH 7,24, PaO2 58 mmHg, PaCO2 64 mmHg, HCO3 26 mEq/L.',
      question: '¿Cuál es la conducta inmediata más adecuada?',
      options: [
        { letter: 'A', text: 'Ventilación mecánica no invasiva con BiPAP' },
        { letter: 'B', text: 'Ventilar con bolsa-mascarilla y administrar naloxona endovenosa' },
        { letter: 'C', text: 'Oxígeno por cánula nasal a 2 L/min y observar' },
        { letter: 'D', text: 'Bicarbonato de sodio endovenoso para corregir el pH' },
        { letter: 'E', text: 'Solicitar angio-TAC de tórax por sospecha de TEP' },
      ],
      correct: 'B',
      explanation: 'PAO2 = 150 − 64/0,8 = 70; gradiente = 70 − 58 = 12 mmHg (normal). IRA tipo 2 con gradiente normal: hipoventilación alveolar pura por opioides, con pulmón sano. Se ventila con bolsa-mascarilla y se revierte con naloxona. La VMNI no sirve en un paciente con Glasgow ≤ 8 que no protege su vía aérea.',
      say: {
        stem: 'Vamos con un caso. Hombre de treinta años, encontrado con compromiso de conciencia junto a blísteres vacíos de un opioide. Glasgow siete, frecuencia respiratoria de seis por minuto, pupilas puntiformes, y pulmones que se auscultan normales. Gases con aire ambiental: pH siete coma veinticuatro, presión de oxígeno cincuenta y ocho, CO dos sesenta y cuatro, y bicarbonato veintiséis.',
        question: '¿Cuál es la conducta inmediata más adecuada?',
        options: 'Las alternativas: ventilación no invasiva con BiPAP, ventilar con bolsa mascarilla y dar naloxona, oxígeno por cánula a dos litros y observar, bicarbonato endovenoso, o un angio TAC por sospecha de tromboembolismo. Piénsalo.',
        answer: 'Es la B. Calcula el gradiente: ciento cincuenta menos sesenta y cuatro dividido por cero coma ocho da setenta, y setenta menos cincuenta y ocho da doce. Gradiente normal con CO dos alto: hipoventilación pura, el pulmón está sano y la bomba está apagada por el opioide. Se ventila y se revierte con naloxona. La BiPAP es el distractor tentador, pero con Glasgow siete el paciente no protege su vía aérea. Y el bicarbonato no trata una acidosis respiratoria.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 163',
      stem: 'Un paciente de 72 años, con antecedente de tabaquismo de 50 paquetes/año, complicado con enfermedad pulmonar obstructiva crónica severa en tratamiento con salmeterol y fluticasona inhalados, presenta aumento de su tos y disnea desde hace 3 días, agregándose expectoración mucopurulenta y fiebre hasta 38,4 °C. Luego evoluciona con marcado aumento de su disnea, la que se vuelve de reposo. Al examen físico se observa agitado, orientado en tiempo y espacio, disneico, con uso de musculatura accesoria, frecuencia respiratoria: 40 rpm, saturación de oxígeno: 84%, frecuencia cardíaca: 108 lpm y presión arterial: 146/92 mmHg. El examen pulmonar muestra aumento del diámetro torácico, hipersonoridad a la percusión, sibilancias y roncus bilaterales difusos, con algunos crépitos más intensos en el lado derecho. Los gases arteriales muestran: PaO₂: 65 mmHg, PaCO₂: 55 mmHg, HCO₃⁻: 28 mEq/L, pH: 7,29. Su hemograma muestra hematocrito: 50%, hemoglobina: 17 g/dL, plaquetas: 380.000/mm³ y glóbulos blancos: 14.500/mm³. Se inicia nebulización con broncodilatadores y se administran antibióticos y corticoides por vía endovenosa.',
      question: '¿Cuál es la conducta más adecuada para su manejo respiratorio?',
      options: [
        { letter: 'A', text: 'Oxígeno por mascarilla Venturi al 50%' },
        { letter: 'B', text: 'Oxígeno por mascarilla de no recirculación' },
        { letter: 'C', text: 'Oxígeno por naricera al 24%' },
        { letter: 'D', text: 'Oxígeno por cánula nasal de alto flujo a 15 L/min' },
        { letter: 'E', text: 'Ventilación mecánica no invasiva' },
      ],
      correct: 'E',
      explanation: 'Exacerbación de EPOC con acidosis respiratoria hipercápnica (pH 7,29, PaCO2 55 mmHg), vigil y orientado: indicación de primera línea de VMNI BiPAP. Subir el oxígeno no corrige la hipercapnia y puede empeorarla; la intubación se reserva para el fracaso de la VMNI o el compromiso grave de conciencia.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Hombre de setenta y dos años con EPOC severa, que en tres días aumenta su tos y disnea, con expectoración purulenta y fiebre, hasta tener disnea de reposo. Está agitado pero orientado, con musculatura accesoria, frecuencia respiratoria de cuarenta y saturación de ochenta y cuatro. Los gases: presión de oxígeno sesenta y cinco, CO dos cincuenta y cinco, pH siete coma veintinueve. Ya recibió broncodilatadores, antibióticos y corticoides.',
        question: '¿Cuál es la conducta más adecuada para su manejo respiratorio?',
        options: 'Las opciones: Venturi al cincuenta por ciento, mascarilla de no recirculación, naricera al veinticuatro por ciento, cánula nasal de alto flujo, o ventilación mecánica no invasiva. Piénsalo.',
        answer: 'Es la E. Es exactamente la indicación de primera línea: EPOC exacerbado con acidosis hipercápnica, pH entre siete coma veinticinco y siete coma treinta y cinco, y el paciente vigil y orientado. Fíjate que cuatro alternativas son formas de dar más oxígeno, y ninguna lava el CO dos; en un retenedor, incluso lo empeoran. Lo que corrige la acidosis es ventilar, y aquí se ventila con BiPAP.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 95',
      stem: 'Paciente de 55 años, con antecedente de enfermedad pulmonar obstructiva crónica por tabaquismo, es derivado desde servicio de urgencia rural por aumento de su disnea basal, asociado a sensación febril y luego confusión, al ingreso en nuestro centro se solicitan gases arteriales que muestran pH 7.3, PaCO2 80, PaO2 86 con FiO2 al 100%. En su examen físico destaca sopor superficial, murmullo pulmonar disminuido en ambos campos pulmonares, con sibilancias difusas y crepitaciones en base pulmonar izquierda.',
      question: 'La medida más adecuada en este momento es:',
      options: [
        { letter: 'A', text: 'Administrar hidrocortisona en bolo' },
        { letter: 'B', text: 'Nebulizar con salbutamol' },
        { letter: 'C', text: 'Administrar ceftriaxona' },
        { letter: 'D', text: 'Intubar e iniciar ventilación mecánica' },
        { letter: 'E', text: 'Disminuir el aporte de oxígeno a 24%' },
      ],
      correct: 'D',
      explanation: 'EPOC exacerbado con hipercapnia severa (PaCO2 80) y encefalopatía hipercápnica (confusión, sopor). El compromiso de conciencia es criterio de escalar a intubación y ventilación mecánica invasiva: el paciente no protege su vía aérea y la VMNI no es segura. Bajar el oxígeno no revierte una narcosis ya instalada.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil trece. Paciente de cincuenta y cinco años con EPOC, derivado por aumento de su disnea, fiebre y luego confusión. Los gases, con oxígeno al cien por ciento: pH siete coma tres, CO dos ochenta, y presión de oxígeno ochenta y seis. Al examen está en sopor superficial, con sibilancias difusas y crepitaciones en la base izquierda.',
        question: '¿Cuál es la medida más adecuada en este momento?',
        options: 'Las opciones: hidrocortisona en bolo, nebulizar con salbutamol, ceftriaxona, intubar e iniciar ventilación mecánica, o disminuir el oxígeno al veinticuatro por ciento. Piénsalo.',
        answer: 'Es la D. Este paciente tiene un CO dos de ochenta y está soporoso: es una encefalopatía hipercápnica, la narcosis que vimos en la clínica de la tipo dos. El compromiso de conciencia es criterio de intubación, porque no protege su vía aérea. La E es el distractor tentador: es cierto que le sobra oxígeno, pero bajarlo no revierte una narcosis ya instalada. Los corticoides, el salbutamol y el antibiótico van, pero no son lo prioritario.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Leer los gases', kind: 'key', items: [
          { t: 'IRA = PaO2 < 60 mmHg', d: 'Aire ambiental, nivel del mar',
            say: 'Cerremos con las reglas de oro. La insuficiencia respiratoria aguda es una presión de oxígeno bajo sesenta, con aire ambiental y a nivel del mar.' },
          { t: 'PaCO2 > 45 = tipo 2', d: 'Con narcosis: cefalea, somnolencia, asterixis',
            say: 'El CO dos sobre cuarenta y cinco la hace tipo dos, hipercápnica, y la delata la narcosis: cefalea, somnolencia y asterixis.' },
        ] },
        { title: 'Mecanismo', tag: 'Gradiente y oxígeno', kind: 'alert', items: [
          { t: 'Gradiente normal = pulmón sano', d: 'Hipoventilación o altura',
            say: 'Hipoxemia con gradiente normal es un pulmón sano: hipoventilación o altura. Con gradiente elevado, el pulmón está dañado.' },
          { t: 'Refractaria al O2 100% = shunt', d: 'SDRA, edema masivo',
            say: 'Y la hipoxemia que no corrige con oxígeno al cien por ciento es shunt, que es justo lo que define al distrés respiratorio de la próxima clase.' },
        ] },
        { title: 'Soporte', tag: 'Escalonado', kind: 'pharma', items: [
          { t: 'Retenedor: Venturi', d: 'FiO2 fija, sin exceso',
            say: 'En el retenedor de CO dos, oxígeno con Venturi, sin excesos.' },
          { t: 'EPOC con pH 7,25–7,35: VMNI', d: 'Intubar si Glasgow ≤ 8 o falla la VMNI',
            say: 'EPOC con acidosis hipercápnica: VMNI BiPAP, e intubación si hay compromiso grave de conciencia o fracasa la prueba. Si te llevas una sola idea de hoy: el CO dos te dice si falla la bomba, el gradiente te dice si falla el pulmón. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Insuficiencia respiratoria aguda: de los gases al soporte',
    root: N('start', 'PaO2 < 60 mmHg', 'Aire ambiental, nivel del mar',
      'Paciente con presión arterial de oxígeno bajo sesenta, respirando aire ambiental a nivel del mar. Tiene una insuficiencia respiratoria aguda, y ahora hay que saber de qué tipo.',
      ['', N('q', '¿PaCO2 > 45 mmHg?', 'Tipo 1 o tipo 2',
        'La primera pregunta es el CO dos. ¿Está sobre cuarenta y cinco?',
        ['NO · tipo 1', N('q', '¿Corrige con O2?', 'Gradiente A-a elevado',
          'Es una tipo uno, hipoxémica, con el gradiente elevado: el pulmón está dañado. Se da oxígeno titulado y se observa la respuesta.',
          ['SÍ', N('do', 'O2 titulado, meta 92–96%', 'Cánula nasal → alto flujo si PaFi < 200',
            'Si corrige, es desbalance ventilación perfusión o difusión. Cánula nasal para saturar noventa y dos a noventa y seis, y alto flujo si la PaFi baja de doscientos.')],
          ['NO', N('alert', 'Shunt: SDRA o edema masivo', 'Refractario al O2 al 100%',
            'Si no corrige ni con oxígeno al cien por ciento, es shunt: distrés respiratorio o edema masivo. Ese paciente necesita presión positiva y probablemente intubación.')])],
        ['SÍ · tipo 2', N('q', '¿Gradiente A-a?', 'Pulmón sano o dañado',
          'Es una tipo dos, hipercápnica. La segunda pregunta es el gradiente alvéolo arterial.',
          ['Normal', N('do', 'Hipoventilación pura', 'Ventilar + revertir la causa (naloxona)',
            'Gradiente normal: el pulmón está sano y falla la bomba. Se ventila y se revierte la causa, como la naloxona en la sobredosis de opioides.')],
          ['Elevado', N('q', '¿Glasgow ≤ 8 o shock?', 'EPOC exacerbado',
            'Gradiente elevado con CO dos alto: el ejemplo típico es el EPOC exacerbado. ¿Tiene compromiso grave de conciencia, shock o paro?',
            ['NO', N('ok', 'VMNI BiPAP', 'pH 7,25–7,35; reevaluar en 1–2 h',
              'Si no, VMNI BiPAP, y se reevalúa en una a dos horas.')],
            ['SÍ', N('refer', 'Intubación + VMI', 'También si falla la VMNI',
              'Si lo tiene, o si la VMNI fracasa, intubación orotraqueal y ventilación mecánica invasiva en la unidad de intensivo.')])])])]),
  },
};
