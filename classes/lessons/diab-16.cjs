// Clase 4.2 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_diabetes.cjs (diab-16).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'diab-16',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Primero volumen, después el sodio corregido y, a tiempo, la glucosa',
      say: 'Bienvenidos. En la clase anterior aprendiste a separar la cetoacidosis del estado hiperosmolar, y dijimos que el hiperosmolar es un problema de agua. Pero la verdad es que los dos pacientes llegan secos. Hoy vemos cómo se repone esa agua: qué suero, a qué velocidad y en qué momento se cambia. El examen insiste en tres decisiones: la primera medida, el suero según el sodio corregido, y cuándo se agrega glucosa. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Primera medida',
      title: '¿Por qué el suero va antes que la insulina?',
      nodes: [
        { id: 'pac', col: 0, row: 1, k: 'start', t: 'Paciente en CAD o EHH', s: 'Deshidratado' },
        { id: 'ins', col: 1, row: 0, k: 'trap', t: 'Insulina primero', s: 'Sin expandir volumen' },
        { id: 'glu', col: 2, row: 0, k: 'mech', t: 'La glucosa entra a la célula', s: 'Y el agua la sigue' },
        { id: 'sho', col: 3, row: 0, k: 'alert', t: 'Colapso intravascular', s: 'Shock' },
        { id: 'sf', col: 1, row: 2, k: 'good', t: 'Suero fisiológico primero', s: 'Cristaloide isotónico' },
        { id: 'baj', col: 2, row: 2, k: 'effect', t: 'La glicemia ya baja', s: '50–100 mg/dL en 60–90 min' },
      ],
      edges: [
        { from: 'pac', to: 'ins', label: 'error' }, { from: 'ins', to: 'glu' }, { from: 'glu', to: 'sho' },
        { from: 'pac', to: 'sf', label: 'correcto' }, { from: 'sf', to: 'baj' },
      ],
      steps: [
        { show: ['pac'], note: 'La primera intervención es el volumen',
          say: 'Empecemos por la regla más preguntada del tema. En toda crisis hiperglicémica, cetoacidosis o hiperosmolar, la primera intervención es la infusión rápida de volumen con cristaloides isotónicos. No la insulina. Veamos por qué.' },
        { show: ['ins', 'glu'], note: 'La insulina mueve glucosa, y la glucosa mueve agua',
          say: 'Imagina que pones insulina a un paciente que no has hidratado. La insulina hace entrar la glucosa a las células, y el agua del espacio extracelular la sigue por osmosis.' },
        { show: ['sho'], note: 'Se vacía lo poco que quedaba en los vasos',
          say: 'Y el paciente, que ya tenía poco volumen dentro de los vasos, pierde todavía más. El resultado puede ser un colapso hemodinámico y un shock. Por eso la insulina antes del suero es un error grave.' },
        { show: ['sf'], note: 'Primero, llenar el estanque',
          say: 'Lo correcto es partir con suero fisiológico. Primero se llena el estanque, y después se trata la glucosa.' },
        { show: ['baj'], note: 'Tres mecanismos',
          say: 'Y fíjate en un detalle: el suero solo, sin insulina, ya baja la glicemia cincuenta a cien en la primera hora a hora y media. Lo hace por tres vías: diluye la glucosa, disminuye las hormonas contrarreguladoras y, al mejorar el filtrado del riñón, vuelve a eliminar glucosa por la orina.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Fase 1',
      title: 'La primera hora: expandir',
      cards: [
        { title: 'Todos los pacientes', tag: 'Hora 1', kind: 'pharma', items: [
          { t: 'Suero fisiológico 0,9%', d: '1.000 a 1.500 ml/h, o 15 a 20 ml/kg',
            say: 'La primera hora es igual para todos: suero fisiológico al cero coma nueve por ciento, mil a mil quinientos mililitros en la hora, o quince a veinte mililitros por kilo.' },
          { t: 'Vía venosa periférica gruesa', d: 'Objetivo: volemia y perfusión renal',
            say: 'Por una vía venosa periférica gruesa. El objetivo es restaurar el volumen circulante y la perfusión del riñón.' },
        ] },
        { title: 'Si está en shock', tag: 'Antes que todo', kind: 'alert', items: [
          { t: 'PAS < 90, frialdad, anuria', d: 'Shock hipovolémico franco',
            say: 'Si el paciente llega en shock franco, con presión sistólica bajo noventa, frialdad periférica o anuria, se da más volumen todavía.' },
          { t: 'Bolos de 1.000 ml en 30 min', d: 'Hasta PAM ≥ 65 mmHg',
            say: 'Bolos adicionales de mil mililitros de suero fisiológico en treinta minutos, hasta lograr una presión arterial media de sesenta y cinco o más. Y recién entonces se inicia cualquier otra terapia.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Fase 2',
      title: 'Después de la hora 1, decide el sodio corregido',
      nodes: [
        { id: 'exp', col: 0, row: 1, k: 'start', t: 'Hora 1 completada', s: 'Suero fisiológico' },
        { id: 'nac', col: 1, row: 1, k: 'q', t: '¿Sodio corregido?', s: 'Na + 1,6 × (glicemia − 100) / 100' },
        { id: 'alto', col: 2, row: 0, k: 'mech', t: '≥ 135 mEq/L', s: 'Perdió más agua que sodio' },
        { id: 'hip', col: 3, row: 0, k: 'good', t: 'NaCl 0,45%', s: '250–500 ml/h · hipotónico' },
        { id: 'bajo', col: 2, row: 2, k: 'mech', t: '< 135 mEq/L', s: 'Falta sodio corporal' },
        { id: 'iso', col: 3, row: 2, k: 'good', t: 'NaCl 0,9%', s: '250–500 ml/h' },
      ],
      edges: [
        { from: 'exp', to: 'nac' },
        { from: 'nac', to: 'alto', label: 'normal o alto' }, { from: 'alto', to: 'hip' },
        { from: 'nac', to: 'bajo', label: 'bajo' }, { from: 'bajo', to: 'iso' },
      ],
      steps: [
        { show: ['exp', 'nac'], note: 'La fórmula de la clase anterior',
          say: 'Terminada la primera hora, empieza la fase de mantención, y aquí el suero ya no es igual para todos. Lo decide el sodio corregido, la fórmula que vimos la clase anterior: el sodio medido más uno coma seis por cada cien de glicemia sobre cien.' },
        { show: ['alto'], note: 'Pérdida desproporcionada de agua libre',
          say: 'Si el sodio corregido es normal o alto, de ciento treinta y cinco o más, significa que el paciente perdió más agua que sodio. Sus células están deshidratadas.' },
        { show: ['hip'], note: 'Devolver agua libre a la célula',
          say: 'Entonces necesita agua libre, y se cambia a suero salino al cero coma cuarenta y cinco por ciento, una solución hipotónica, a doscientos cincuenta a quinientos mililitros por hora. Esa agua libre vuelve a entrar a las células.' },
        { show: ['bajo', 'iso'], note: 'Todavía falta sodio',
          say: 'Si el sodio corregido es bajo, menor de ciento treinta y cinco, todavía falta sodio en el cuerpo. Se sigue con suero fisiológico al cero coma nueve, a la misma velocidad, hasta normalizarlo.' },
        { show: ['nac'], note: 'Por qué hay que corregirlo',
          say: 'Ojo con la trampa: usar el sodio medido. En un hiperosmolar con glicemia de novecientos y sodio medido de ciento cuarenta, el corregido es casi ciento cincuenta y tres. El medido parece normal, pero el paciente está hipernatrémico y necesita agua libre.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Fase 3 · La regla de oro',
      title: 'Cuando la glicemia llega a 200, se agrega glucosa',
      nodes: [
        { id: 'gli', col: 0, row: 0, k: 'effect', t: 'La glicemia baja rápido', s: 'Llega a ≤ 200 en CAD' },
        { id: 'aci', col: 0, row: 2, k: 'risk', t: 'La acidosis baja lento', s: 'El anion gap sigue abierto' },
        { id: 'dil', col: 1, row: 1, k: 'q', t: '¿Qué hago con la insulina?', s: 'El dilema' },
        { id: 'sus', col: 2, row: 0, k: 'trap', t: 'Suspender la insulina', s: 'La cetoacidosis no se resuelve' },
        { id: 'man', col: 2, row: 2, k: 'trap', t: 'Mantenerla sin glucosa', s: 'Hipoglicemia severa' },
        { id: 'sg', col: 3, row: 1, k: 'good', t: 'SG 5% + insulina a la mitad', s: '150–250 ml/h · 0,02–0,05 UI/kg/h' },
      ],
      edges: [
        { from: 'gli', to: 'dil' }, { from: 'aci', to: 'dil' },
        { from: 'dil', to: 'sus' }, { from: 'dil', to: 'man' },
        { from: 'dil', to: 'sg', label: 'correcto' },
      ],
      steps: [
        { show: ['gli', 'aci'], note: 'Dos relojes que corren a distinta velocidad',
          say: 'Ahora la regla más evaluada de esta clase. Durante el tratamiento corren dos relojes a distinta velocidad. La glicemia baja rápido. La acidosis, y el cierre del anion gap, bajan mucho más lento.' },
        { show: ['dil'], note: 'Glicemia en 200, gap todavía abierto',
          say: 'Entonces llega un momento en que la glicemia ya está en doscientos, pero la cetoacidosis sigue ahí. Y aparece el dilema: ¿qué hago con la insulina?' },
        { show: ['sus'], note: 'La insulina es la que frena las cetonas',
          say: 'Si la suspendes para no bajar más la glicemia, la cetoacidosis no se resuelve. Recuerda el mecanismo: la insulina es la que frena la lipólisis y la producción de cetonas.' },
        { show: ['man'], note: 'Insulina sin sustrato',
          say: 'Y si la mantienes con suero salino solo, sin aportar glucosa, el paciente cae en una hipoglicemia severa.' },
        { show: ['sg'], note: 'CAD ≤ 200 · EHH ≤ 300',
          say: 'La salida es cambiar el suero a glucosado al cinco por ciento, o glucosalino, a ciento cincuenta a doscientos cincuenta por hora, y bajar la insulina a la mitad, a cero coma cero dos a cero coma cero cinco unidades por kilo por hora. Así la glicemia se mantiene entre ciento cincuenta y doscientos, y la insulina sigue cerrando el gap.' },
        { show: ['sg'], note: 'El umbral cambia en el hiperosmolar',
          say: 'Ese cambio se hace con doscientos en la cetoacidosis, y con trescientos en el estado hiperosmolar, donde el objetivo es evitar una caída brusca de la osmolaridad. Esos dos números se preguntan.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Cuánto y qué tan rápido',
      title: 'Déficit de agua y velocidad segura',
      cards: [
        { title: 'Déficit estimado', tag: 'Cuánto falta', kind: 'criteria', items: [
          { t: 'CAD: 3 a 6 litros', d: 'Alrededor de 100 ml/kg',
            say: '¿Cuánta agua falta? En la cetoacidosis, tres a seis litros, alrededor de cien mililitros por kilo.' },
          { t: 'EHH: 8 a 12 litros', d: '150 a 200 ml/kg',
            say: 'En el estado hiperosmolar, ocho a doce litros, ciento cincuenta a doscientos mililitros por kilo. Es el problema de agua del que hablamos la clase pasada.' },
        ] },
        { title: 'Velocidad', tag: 'Sin apuro', kind: 'alert', items: [
          { t: 'Reponer en 24 a 48 horas', d: 'No todo el primer día de golpe',
            say: 'Y ese déficit no se repone de golpe. Se planifica para completarlo en veinticuatro a cuarenta y ocho horas.' },
          { t: 'Osmolaridad: ≤ 3 mOsm/kg/h', d: 'Glicemia: bajar 50–75 mg/dL/h',
            say: 'La osmolaridad no debe caer más de tres por hora, y la glicemia debe bajar cincuenta a setenta y cinco por hora. Caídas de más de cien por hora predisponen al edema cerebral.' },
          { t: 'Edema cerebral', d: 'El agua entra de golpe a la neurona',
            say: '¿Por qué? Porque la neurona se adaptó a un ambiente hiperosmolar. Si la osmolaridad de afuera cae de golpe, el agua entra a la célula y el cerebro se hincha. Lo vemos en detalle en la clase de complicaciones.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Monitoreo',
      title: 'Qué se controla y cada cuánto',
      cards: [
        { title: 'Cada hora', tag: 'Horario', kind: 'key', items: [
          { t: 'Glicemia capilar', d: 'Meta: bajar 50–75 mg/dL por hora',
            say: 'Veamos el monitoreo. La glicemia capilar se controla cada hora. Si baja menos de cincuenta por hora, se sube la insulina; si baja más de cien, se reduce.' },
          { t: 'Diuresis horaria', d: '> 0,5 ml/kg/h · catéter vesical',
            say: 'La diuresis también es horaria, con catéter vesical, buscando más de medio mililitro por kilo por hora. Si hay oliguria, primero se revisa la volemia.' },
        ] },
        { title: 'Cada 2 a 4 horas', tag: 'Laboratorio', kind: 'criteria', items: [
          { t: 'Electrolitos', d: 'K entre 4 y 5 mEq/L',
            say: 'Los electrolitos, cada dos a cuatro horas, con el potasio entre cuatro y cinco. El manejo del potasio lo vemos en detalle la próxima clase.' },
          { t: 'Gases venosos', d: 'HCO₃ sube; el gap se cierra',
            say: 'Y los gases venosos, también cada dos a cuatro horas: el bicarbonato debe subir y el anion gap cerrarse. Mientras no se cierre, la insulina y el glucosado siguen.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Errores que se pagan caro',
      title: 'Cada error tiene su mecanismo',
      nodes: [
        { id: 'e1', col: 0, row: 0, k: 'trap', t: 'Insulina antes que el suero', s: 'Agua al intracelular' },
        { id: 'c1', col: 2, row: 0, k: 'alert', t: 'Shock refractario', s: 'Colapso hemodinámico' },
        { id: 'e2', col: 0, row: 1, k: 'trap', t: 'No agregar glucosa en 200', s: 'La insulina sigue consumiendo' },
        { id: 'c2', col: 2, row: 1, k: 'alert', t: 'Hipoglicemia', s: 'O insulina suspendida antes de tiempo' },
        { id: 'e3', col: 0, row: 2, k: 'trap', t: 'Reponer demasiado rápido', s: 'La osmolaridad cae de golpe' },
        { id: 'c3', col: 2, row: 2, k: 'alert', t: 'Edema cerebral', s: 'Herniación y muerte' },
        { id: 'e4', col: 0, row: 3, k: 'trap', t: 'Solo NaCl 0,9% por > 24 h', s: 'Mucho cloro' },
        { id: 'c4', col: 2, row: 3, k: 'risk', t: 'Acidosis hiperclorémica', s: 'Con anion gap normal' },
      ],
      edges: [
        { from: 'e1', to: 'c1' }, { from: 'e2', to: 'c2' }, { from: 'e3', to: 'c3' }, { from: 'e4', to: 'c4' },
      ],
      steps: [
        { show: ['e1', 'c1'], note: 'Primero volumen',
          say: 'Juntemos los errores, porque cada uno tiene su mecanismo. Insulina antes que el suero: el agua se va al intracelular y el paciente cae en un shock refractario.' },
        { show: ['e2', 'c2'], note: 'Glucosa a tiempo',
          say: 'No agregar glucosa al llegar a doscientos: la insulina sigue haciendo entrar glucosa a las células, y terminas en hipoglicemia, o suspendiendo la insulina antes de tiempo.' },
        { show: ['e3', 'c3'], note: 'Sin apuro',
          say: 'Reponer demasiado rápido: la osmolaridad cae de golpe y aparece el edema cerebral, que puede terminar en herniación y muerte. Por eso, después de la expansión, doscientos cincuenta a quinientos por hora.' },
        { show: ['e4', 'c4'], note: 'No confundir con la cetoacidosis',
          say: 'Y el más sutil: usar solo suero fisiológico por más de veinticuatro horas. Aporta mucho cloro, que desplaza al bicarbonato, y produce una acidosis hiperclorémica con anion gap normal. Fíjate en el gap: si está normal, no es que la cetoacidosis persista. Por eso se cambia al cero coma cuarenta y cinco según el sodio corregido.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos toda la fluidoterapia en un solo árbol, en el orden en que la vas a indicar.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Qué suero, cuándo y a qué velocidad',
      head: ['Momento', 'Suero', 'Velocidad'],
      rows: [
        { cells: ['Hora 1, todos', 'NaCl 0,9%', '1.000–1.500 ml/h (15–20 ml/kg)'],
          say: 'Repasemos en una tabla. Hora uno, todos los pacientes: suero fisiológico, mil a mil quinientos por hora. Nunca insulina antes.' },
        { cells: ['Shock: PAS < 90', 'Bolos de NaCl 0,9%', '1.000 ml en 30 min hasta PAM ≥ 65'],
          say: 'Si está en shock, bolos de mil en media hora hasta una presión media de sesenta y cinco.' },
        { cells: ['Na corregido ≥ 135', 'NaCl 0,45%', '250–500 ml/h'],
          say: 'Después, sodio corregido de ciento treinta y cinco o más: suero al cero coma cuarenta y cinco.' },
        { cells: ['Na corregido < 135', 'NaCl 0,9%', '250–500 ml/h'],
          say: 'Sodio corregido bajo ciento treinta y cinco: se sigue con suero fisiológico.' },
        { cells: ['CAD: glicemia ≤ 200', 'SG 5% + insulina a la mitad', '150–250 ml/h'],
          say: 'Cetoacidosis con glicemia de doscientos o menos: glucosado al cinco por ciento y la insulina a la mitad. La trampa es suspender la insulina.' },
        { cells: ['EHH: glicemia ≤ 300', 'SG 5% + insulina a la mitad', '150–250 ml/h'],
          say: 'Y en el hiperosmolar, lo mismo, pero con trescientos.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 24 años con DM1, en tratamiento por cetoacidosis diabética severa. Recibió 1.500 ml de NaCl 0,9% en la primera hora y luego insulina cristalina en infusión. A las 5 horas: hemoglucotest 188 mg/dL, pH 7,21, HCO₃ 12 mEq/L, anion gap 18 mEq/L.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Suspender la infusión de insulina hasta que la glicemia vuelva a subir' },
        { letter: 'B', text: 'Agregar suero glucosado al 5% y reducir la infusión de insulina a la mitad' },
        { letter: 'C', text: 'Pasar a insulina NPH subcutánea y suspender los fluidos' },
        { letter: 'D', text: 'Mantener la misma infusión de insulina con NaCl 0,9%' },
        { letter: 'E', text: 'Administrar bicarbonato para corregir el pH y suspender la insulina' },
      ],
      correct: 'B',
      explanation: 'La glicemia ya está ≤ 200 mg/dL, pero la cetoacidosis no está resuelta (pH < 7,30, HCO₃ < 18, gap abierto). Se mantiene la insulina a menor dosis (0,02–0,05 UI/kg/h) y se agrega SG 5% para evitar la hipoglicemia mientras se cierra el gap.',
      say: {
        stem: 'Vamos con un caso. Mujer de veinticuatro años, diabética tipo uno, en tratamiento por una cetoacidosis severa. Recibió mil quinientos de suero fisiológico en la primera hora y luego insulina en infusión. A las cinco horas, el hemoglucotest es ciento ochenta y ocho, el pH siete coma veintiuno, el bicarbonato doce y el anion gap dieciocho.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: suspender la insulina, agregar glucosado al cinco por ciento y bajar la insulina a la mitad, pasar a NPH y suspender los fluidos, mantener todo igual con suero fisiológico, o dar bicarbonato y suspender la insulina. Piénsalo.',
        answer: 'Es la B. Mira los dos relojes: la glicemia ya bajó de doscientos, pero el pH, el bicarbonato y el gap dicen que la cetoacidosis sigue. La A es la trampa: sin insulina, las cetonas vuelven. Y la D, mantener todo igual, la lleva a la hipoglicemia. Lo correcto es aportar glucosa y seguir con la insulina, a menor dosis, hasta cerrar el gap.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 19',
      stem: 'Un paciente de 12 años consulta por un cuadro de malestar general, asociado a bajo de peso, que en las últimas horas se le agrega poliuria importante. Consulta porque en las últimas horas se agrega gran compromiso del estado general, seguido de compromiso de conciencia. Al examen físico está taquicárdico, soporoso, con polipnea y signos de deshidratación. En sus exámenes presenta glicemia de 470 mg/dl, sodio de 143 mEq/L, potasio de 4,8 mEq/L, cloro de 97 mEq/L, bicarbonato de 12 mEq/L y pH de 7,05.',
      question: '¿Qué fluido debe administrarse a este paciente?',
      options: [
        { letter: 'A', text: 'Suero glucosado' },
        { letter: 'B', text: 'Suerlo glucosalino' },
        { letter: 'C', text: 'Solución salina al 0,45%' },
        { letter: 'D', text: 'Solución salina al 0,9%' },
        { letter: 'E', text: 'Suloción ringer lactato' },
      ],
      correct: 'D',
      explanation: 'Cetoacidosis (glicemia > 250, pH 7,05, HCO₃ 12, gap 34) con deshidratación y compromiso de conciencia. La primera medida es expandir con NaCl 0,9%. El suero al 0,45% se decide después de la primera hora según el sodio corregido; el glucosado, cuando la glicemia llega a ≤ 200.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil quince. Paciente de doce años con baja de peso y poliuria, que en las últimas horas compromete conciencia. Está taquicárdico, soporoso, con polipnea y deshidratado. Glicemia cuatrocientos setenta, sodio ciento cuarenta y tres, potasio cuatro coma ocho, cloro noventa y siete, bicarbonato doce y pH siete coma cero cinco.',
        question: '¿Qué fluido debe administrarse?',
        options: 'Las opciones: suero glucosado, glucosalino, salino al cero coma cuarenta y cinco, salino al cero coma nueve, o Ringer lactato. Piénsalo.',
        answer: 'Es la D, suero fisiológico al cero coma nueve. Es una cetoacidosis severa con deshidratación, y la primera hora siempre es suero fisiológico. La C es la trampa fina: si calculas el sodio corregido da cerca de ciento cuarenta y nueve, y eso te llevaría al cero coma cuarenta y cinco, pero recién después de la primera hora. Y el glucosado es para cuando la glicemia llegue a doscientos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 41',
      stem: 'Un niño de 11 años es llevado al servicio de urgencia por sus padres, debido a que presenta compromiso de conciencia desde hace algunos minutos. Sus padres refieren que desde hace 4 días presenta poliuria, polidipsia y malestar general. Al examen físico destaca frecuencia cardíaca: 150 lpm, presión arterial: 100/60 mmHg, temperatura: 37°C y sopor superficial. En la exploración neurológica no tiene signos focales. Entre los exámenes de laboratorio destacan glicemia: 320 mg/dL; gases venosos con pH: 7,11, bicarbonato plasmático: 12 mEq/L, exceso de base: -9, PaCO₂: 24 mmHg; cetonemia y cetonuria positivas; sodio plasmático: 145 mEq/L, potasio plasmático: 5,1 mEq/L y creatinina plasmática: 1,8 mg/dL.',
      question: '¿Cuál es la primera medida a administrar?',
      options: [
        { letter: 'A', text: 'Suero fisiológico 20 cc/kg endovenoso' },
        { letter: 'B', text: 'Insulina endovenosa' },
        { letter: 'C', text: 'Adrenalina endovenosa' },
        { letter: 'D', text: 'Cloruro de potasio intravenoso' },
        { letter: 'E', text: 'Oxígeno por mascarilla de recirculación' },
      ],
      correct: 'A',
      explanation: 'Cetoacidosis de debut con deshidratación, taquicardia y falla renal prerrenal. La primera medida es el volumen con suero fisiológico (15–20 ml/kg en la primera hora). La insulina va después de iniciar la expansión; el potasio está en 5,1 y no requiere aporte inmediato.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Niño de once años con cuatro días de poliuria y polidipsia, que llega soporoso. Frecuencia cardíaca ciento cincuenta, presión cien sesenta. Glicemia trescientos veinte, pH siete coma once, bicarbonato doce, cetonas positivas, sodio ciento cuarenta y cinco, potasio cinco coma uno y creatinina uno coma ocho.',
        question: '¿Cuál es la primera medida a administrar?',
        options: 'Las opciones: suero fisiológico veinte por kilo, insulina endovenosa, adrenalina, cloruro de potasio, u oxígeno por mascarilla. Piénsalo.',
        answer: 'Es la A. Es una cetoacidosis de debut, con taquicardia y una creatinina alta que habla de riñón mal perfundido. La primera medida es siempre el volumen, y veinte por kilo está dentro de lo que vimos. La B es la trampa clásica: la insulina es parte del tratamiento, pero va después de iniciar el suero. Y el potasio en cinco coma uno no pide aporte inmediato.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'En un paciente cursando un Estado Hiperglicémico Hiperosmolar con glicemia de 900 mg/dL y sodio plasmático medido de 140 mEq/L, tras haber completado la reanimación inicial con 1.500 ml de solución salina al 0.9% en la primera hora.',
      question: '¿Cuál es el fluido intravenoso de elección para la fase de mantenimiento?',
      options: [
        { letter: 'A', text: 'Suero Fisiológico al 0.9% (NaCl 0.9%)' },
        { letter: 'B', text: 'Solución Salina Hipotónica al 0.45% (NaCl 0.45%)' },
        { letter: 'C', text: 'Suero Glucosado al 10%' },
        { letter: 'D', text: 'Ringer Lactato con bicarbonato' },
        { letter: 'E', text: 'Agua destilada endovenosa pura sin electrolitos' },
      ],
      correct: 'B',
      explanation: 'Na corregido = 140 + 1,6 × (900 − 100)/100 = 152,8 mEq/L. Con sodio corregido ≥ 135 hay déficit de agua libre: se usa NaCl 0,45% a 250–500 ml/h. El glucosado se agrega recién cuando la glicemia llega a ≤ 300 en el EHH.',
      say: {
        stem: 'Y una pregunta del banco EUNACOM. Paciente en estado hiperosmolar, con glicemia de novecientos y sodio medido de ciento cuarenta, que ya completó la primera hora con mil quinientos de suero fisiológico.',
        question: '¿Cuál es el fluido de elección para la fase de mantención?',
        options: 'Las opciones: suero fisiológico, salino hipotónico al cero coma cuarenta y cinco, glucosado al diez, Ringer con bicarbonato, o agua destilada. Piénsalo.',
        answer: 'Es la B. Corrige el sodio: ochocientos sobre cien son ocho, por uno coma seis da casi trece, y el corregido queda en ciento cincuenta y tres. Sobre ciento treinta y cinco, se usa el cero coma cuarenta y cinco. La A es la trampa si miras solo el sodio medido. Y el glucosado es prematuro: en el hiperosmolar se agrega cuando la glicemia llega a trescientos.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Primero', tag: 'Hora 1', kind: 'key', items: [
          { t: 'Suero fisiológico antes que insulina', d: '1.000–1.500 ml en la primera hora',
            say: 'Cerremos con las reglas de oro. La primera medida es siempre suero fisiológico, mil a mil quinientos en la primera hora. Nunca insulina antes.' },
        ] },
        { title: 'Después', tag: 'Sodio corregido', kind: 'pharma', items: [
          { t: '≥ 135: NaCl 0,45%', d: '< 135: NaCl 0,9%',
            say: 'Después de la primera hora, decide el sodio corregido: ciento treinta y cinco o más, suero al cero coma cuarenta y cinco; menos, suero fisiológico.' },
          { t: 'Reponer en 24–48 h', d: 'Glicemia: bajar 50–75 por hora',
            say: 'El déficit se repone en veinticuatro a cuarenta y ocho horas, bajando la glicemia cincuenta a setenta y cinco por hora, para no provocar edema cerebral.' },
        ] },
        { title: 'La regla de la glucosa', tag: 'No suspender la insulina', kind: 'alert', items: [
          { t: 'CAD ≤ 200 · EHH ≤ 300', d: 'SG 5% + insulina a la mitad',
            say: 'Y cuando la glicemia llega a doscientos en la cetoacidosis, o a trescientos en el hiperosmolar, se agrega glucosado al cinco por ciento y la insulina baja a la mitad.' },
          { t: 'Hasta cerrar el gap', d: 'La glicemia no marca el final',
            say: 'Si te llevas una sola idea de hoy: la glicemia baja primero, pero lo que manda es el anion gap; la glucosa se agrega para que la insulina pueda seguir. La próxima clase vemos la insulina y el potasio. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Fluidoterapia en CAD y EHH',
    root: N('start', 'CAD o EHH confirmado', 'Deshidratado · sin insulina aún',
      'Paciente con cetoacidosis o estado hiperosmolar. Antes de la insulina, el volumen.',
      ['', N('q', '¿Está en shock?', 'PAS < 90, frialdad, anuria',
        'La primera pregunta es si está en shock.',
        ['SÍ', N('alert', 'Bolos NaCl 0,9% 1.000 ml en 30 min', 'Hasta PAM ≥ 65',
          'Si está en shock, bolos de mil mililitros de suero fisiológico en treinta minutos hasta lograr una presión media de sesenta y cinco, antes de cualquier otra terapia.')],
        ['NO', N('do', 'NaCl 0,9% 1.000–1.500 ml en hora 1', '15–20 ml/kg',
          'Si no, suero fisiológico mil a mil quinientos mililitros en la primera hora.',
          ['Luego', N('q', '¿Sodio corregido ≥ 135?', 'Na + 1,6 × (glicemia − 100) / 100',
            'Terminada la primera hora, calcula el sodio corregido.',
            ['SÍ', N('do', 'NaCl 0,45% 250–500 ml/h', 'Agua libre',
              'Si es ciento treinta y cinco o más, suero al cero coma cuarenta y cinco, porque falta agua libre. Y cuando la glicemia llegue a doscientos en la cetoacidosis, o trescientos en el hiperosmolar, glucosado al cinco por ciento con la insulina a la mitad.')],
            ['NO', N('do', 'NaCl 0,9% 250–500 ml/h', 'Hasta normalizar',
              'Si es menor, se sigue con suero fisiológico. La misma regla de la glucosa aplica al llegar a doscientos o trescientos.')])])])]),
  },
};
