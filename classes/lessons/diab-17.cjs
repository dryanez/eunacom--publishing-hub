// Clase 4.3 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_diabetes.cjs (diab-17).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'diab-17',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'El potasio decide cuándo parte la insulina, y el pH decide si hay bicarbonato',
      say: 'Bienvenidos. En la clase anterior vimos que la primera medida en la cetoacidosis diabética es siempre el suero. Hoy damos el paso siguiente: la insulina endovenosa, y los dos números que la rodean. El potasio, que decide si la insulina puede partir, y el pH, que decide si hay bicarbonato. Son dos cortes que el EUNACOM pregunta una y otra vez, y los vamos a entender, no solo memorizar.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'El potasio: poco en el cuerpo, normal en la sangre',
      nodes: [
        { id: 'per', col: 0, row: 0, k: 'cause', t: 'Diuresis osmótica y vómitos', s: 'Se pierde potasio por días' },
        { id: 'def', col: 1, row: 0, k: 'mech', t: 'Déficit corporal total', s: '3 a 5 mEq/kg' },
        { id: 'aci', col: 0, row: 2, k: 'cause', t: 'Acidosis y falta de insulina', s: 'El K sale de la célula' },
        { id: 'eng', col: 1, row: 2, k: 'trap', t: 'Potasemia normal o alta', s: 'Un número engañoso' },
        { id: 'ins', col: 2, row: 1, k: 'q', t: 'Insulina + hidratación', s: 'El K entra masivamente a la célula' },
        { id: 'hip', col: 3, row: 1, k: 'alert', t: 'Hipokalemia crítica', s: 'Arritmias ventriculares, paro' },
      ],
      edges: [
        { from: 'per', to: 'def' }, { from: 'aci', to: 'eng' },
        { from: 'def', to: 'ins' }, { from: 'eng', to: 'ins' },
        { from: 'ins', to: 'hip', label: 'en minutos' },
      ],
      steps: [
        { show: ['per'], note: 'Días de orina abundante y vómitos',
          say: 'Partamos por el mecanismo, porque explica la regla más peligrosa del tema. Este paciente lleva días orinando en exceso por la diuresis osmótica, y muchas veces vomitando. Con esa orina y esos vómitos se va el potasio.' },
        { show: ['def'], note: 'Todos los pacientes con cetoacidosis tienen déficit',
          say: 'Por eso, todos los pacientes con cetoacidosis tienen un déficit severo de potasio corporal total, de tres a cinco miliequivalentes por kilo. Todos, sin excepción.' },
        { show: ['aci', 'eng'], note: 'La acidosis saca el potasio de la célula',
          say: 'Pero cuando llega el examen, el potasio aparece normal, o incluso alto. ¿Cómo se explica? La acidosis y la falta de insulina sacan el potasio desde dentro de las células hacia la sangre. El número de la sangre es engañoso: el tanque está vacío, aunque el indicador marque lleno.' },
        { show: ['ins'], note: 'La insulina devuelve el potasio a la célula',
          say: 'Ahora piensa qué hace la insulina. Mete glucosa a la célula, y con ella mete potasio. Y la hidratación corrige la acidosis, que empuja en la misma dirección.' },
        { show: ['hip'], note: 'Si no se anticipa: hipokalemia en minutos',
          say: 'Resultado: el poco potasio que quedaba en la sangre se va hacia adentro, y en cuestión de minutos el paciente cae en una hipokalemia crítica, con riesgo de arritmias ventriculares y paro. De este mecanismo sale la regla que viene.' },
      ],
    },

    {
      type: 'points',
      kicker: 'La regla del potasio',
      title: 'Antes de la insulina, mira el potasio',
      cards: [
        { title: 'K menor de 3,3', tag: 'No hay insulina', kind: 'alert', items: [
          { t: 'Postergar o suspender la insulina', d: 'Está contraindicada',
            say: 'Esta es la regla de oro del tema. Si el potasio está bajo tres coma tres miliequivalentes por litro, la insulina no se administra. Si ya estaba corriendo, se suspende. Está contraindicada.' },
          { t: 'KCl 20 a 30 mEq por hora', d: 'Hasta que el K supere 3,3',
            say: 'Lo que se hace es reponer potasio: cloruro de potasio a veinte a treinta miliequivalentes por hora, y recién cuando el potasio supera tres coma tres, se inicia la insulina.' },
        ] },
        { title: 'K entre 3,3 y 5,2', tag: 'Insulina + potasio', kind: 'key', items: [
          { t: 'Iniciar insulina', d: 'Y sumar KCl a los sueros',
            say: 'Entre tres coma tres y cinco coma dos, se inicia la insulina, pero siempre con potasio: veinte a treinta miliequivalentes de cloruro de potasio por cada litro de suero.' },
          { t: 'Meta: K entre 4 y 5', d: 'Mantener estable',
            say: 'La meta es mantener el potasio estable, entre cuatro y cinco. Recuerda que el déficit está ahí aunque el número se vea normal.' },
        ] },
        { title: 'K mayor de 5,2', tag: 'Insulina sola', kind: 'criteria', items: [
          { t: 'Insulina sin potasio', d: 'Controlar K cada 2 horas',
            say: 'Y si el potasio está sobre cinco coma dos, se inicia la insulina sin aportar potasio, y se controla cada dos horas. Aquí dejas que la propia insulina baje el potasio al rango normal, y lo empiezas a reponer cuando entre al rango del medio.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Insulina endovenosa',
      title: 'La pauta de la bomba',
      cards: [
        { title: 'Qué y cómo', tag: 'Vía de elección', kind: 'pharma', items: [
          { t: 'Insulina cristalina en infusión continua', d: 'CAD moderada a severa y EHH',
            say: 'Con el potasio resuelto, pasemos a la insulina. En la cetoacidosis moderada a severa y en el estado hiperglicémico hiperosmolar, la vía de elección es la insulina cristalina, o regular, en infusión endovenosa continua por bomba.' },
          { t: '100 UI en 100 ml de suero fisiológico', d: '1 UI por ml',
            say: 'La preparación es simple: cien unidades en cien mililitros de suero fisiológico, para que cada mililitro tenga una unidad.' },
        ] },
        { title: 'Dosis', tag: 'Tasa fija', kind: 'criteria', items: [
          { t: '0,1 UI/kg/h', d: 'Con o sin bolo de 0,1 UI/kg',
            say: 'La dosis es fija: cero coma uno unidades por kilo por hora, con o sin un bolo inicial de cero coma uno unidades por kilo.' },
          { t: 'O 0,14 UI/kg/h sin bolo', d: 'Infusión directa',
            say: 'La alternativa es partir directo con cero coma catorce unidades por kilo por hora, sin bolo.' },
        ] },
        { title: 'Meta', tag: 'Ni muy lento ni muy rápido', kind: 'key', items: [
          { t: 'Bajar 50 a 75 mg/dL por hora', d: 'Descenso controlado',
            say: 'La meta es que la glicemia baje entre cincuenta y setenta y cinco por hora. Más rápido no es mejor: en unas clases más vamos a ver que la caída brusca se asocia a edema cerebral.' },
          { t: 'Si no baja 50 en la 1ª hora', d: 'Duplicar la infusión',
            say: 'Y si en la primera hora la glicemia no bajó al menos cincuenta, se duplica la velocidad de la infusión.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Bicarbonato',
      title: 'Bicarbonato: casi nunca',
      nodes: [
        { id: 'bic', col: 0, row: 2, k: 'start', t: 'Bicarbonato de rutina', s: 'Abandonado' },
        { id: 'k', col: 1, row: 0, k: 'risk', t: 'Hipokalemia severa', s: 'Mete más K a la célula' },
        { id: 'snc', col: 1, row: 1, k: 'risk', t: 'Acidosis paradójica del SNC', s: 'El CO2 cruza, el HCO3 no' },
        { id: 'cet', col: 1, row: 2, k: 'risk', t: 'Prolonga la cetosis', s: 'Retrasa la curación' },
        { id: 'hb', col: 1, row: 3, k: 'risk', t: 'Curva de la Hb a la izquierda', s: 'Peor oxigenación tisular' },
        { id: 'ph', col: 2, row: 2, k: 'q', t: '¿pH menor de 6,90?', s: 'Único criterio' },
        { id: 'si', col: 3, row: 1, k: 'good', t: '100 mmol NaHCO3 en 400 ml', s: '+ 20 mEq KCl en 2 horas' },
        { id: 'no', col: 3, row: 3, k: 'trap', t: 'pH 6,90 o más', s: 'Prohibido' },
      ],
      edges: [
        { from: 'bic', to: 'k' }, { from: 'bic', to: 'snc' }, { from: 'bic', to: 'cet' }, { from: 'bic', to: 'hb' },
        { from: 'cet', to: 'ph', label: 'por eso' },
        { from: 'ph', to: 'si', label: 'sí' }, { from: 'ph', to: 'no', label: 'no' },
      ],
      steps: [
        { show: ['bic'], note: 'Parece lógico, pero hace daño',
          say: 'Ahora el bicarbonato. Suena lógico: el paciente está ácido, le doy base. Pero los ensayos clínicos mostraron que hace daño, y por eso se abandonó de la práctica rutinaria. Veamos por qué.' },
        { show: ['k'], note: 'Otra vez el potasio',
          say: 'Primero, induce hipokalemia severa. Al corregir la acidosis, empuja todavía más potasio hacia la célula, justo lo que acabamos de aprender a temer.' },
        { show: ['snc'], note: 'El cerebro se acidifica más',
          say: 'Segundo, la acidosis paradójica del sistema nervioso central. El bicarbonato que pasas se transforma en dióxido de carbono, que cruza libremente la barrera hematoencefálica. El bicarbonato, en cambio, no la cruza. Resultado: la sangre mejora, pero el cerebro se acidifica más.' },
        { show: ['cet', 'hb'], note: 'Retrasa la curación y oxigena peor',
          say: 'Además prolonga la cetosis, o sea, retrasa la curación, y desvía la curva de disociación de la hemoglobina a la izquierda, lo que dificulta la entrega de oxígeno a los tejidos.' },
        { show: ['ph'], note: 'ADA y MINSAL: solo pH menor de 6,90',
          say: 'Por eso las guías de la ADA y del MINSAL lo restringen a un solo escenario: pH arterial bajo seis coma nueve, la acidosis extrema, habitualmente con inestabilidad hemodinámica o depresión miocárdica refractaria.' },
        { show: ['si'], note: 'Repetir hasta pH de 7,00 o más',
          say: 'En ese caso se pasan cien milimoles de bicarbonato de sodio en cuatrocientos mililitros de agua destilada, con veinte miliequivalentes de cloruro de potasio, en dos horas. Fíjate que va con potasio, por lo mismo que vimos. Se repite hasta que el pH llegue a siete.' },
        { show: ['no'], note: 'Trampa: bicarbonato por Kussmaul o por HCO3 bajo',
          say: 'Y con pH de seis coma nueve o más, el bicarbonato está prohibido. Ojo con los distractores: ni el bicarbonato sérico bajo, ni la respiración de Kussmaul, ni la cetonuria son indicación. Solo el pH.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en el orden en que lo vas a razonar al lado de la cama.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Los números que deciden la conducta',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['K menor de 3,3 mEq/L', 'Suspender insulina; KCl 20–30 mEq/h', 'Iniciar insulina y reponer K después'],
          say: 'Repasemos las trampas. Potasio bajo tres coma tres: no hay insulina, se repone potasio a veinte a treinta por hora. El error es partir con la insulina pensando en reponer el potasio después.' },
        { cells: ['K entre 3,3 y 5,2 mEq/L', 'Insulina + 20–30 mEq KCl por litro', 'Insulina sin potasio'],
          say: 'Potasio entre tres coma tres y cinco coma dos: insulina, y potasio en cada litro. El error es olvidar el potasio porque el número se ve normal.' },
        { cells: ['K mayor de 5,2 mEq/L', 'Insulina sin K; control cada 2 h', 'Tratar la hiperkalemia con calcio'],
          say: 'Potasio sobre cinco coma dos: insulina sin potasio, y control cada dos horas. No es una hiperkalemia para tratar con gluconato de calcio: la insulina misma la corrige.' },
        { cells: ['Glicemia no baja 50 mg/dL en la 1ª hora', 'Duplicar la infusión', 'Esperar otra hora igual'],
          say: 'Si la glicemia no bajó cincuenta en la primera hora, se duplica la infusión.' },
        { cells: ['pH 7,08 con Kussmaul', 'Sin bicarbonato', 'Bicarbonato por la acidosis'],
          say: 'Y un pH de siete coma cero ocho, aunque sea una acidosis severa y el paciente respire con Kussmaul: no lleva bicarbonato. El corte es seis coma nueve, y solo el pH decide.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 18 años con DM1 llega a urgencia en cetoacidosis severa: glicemia 460 mg/dL, pH venoso 7,08. Ionograma: Na 134 mEq/L, Cl 96 mEq/L, K 2,9 mEq/L. Ya recibió el primer litro de suero fisiológico. El interno prepara un bolo de 10 UI de insulina cristalina EV y una bomba a 6 UI/h.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Aprobar el bolo y la bomba de insulina, y reponer potasio cuando la glicemia baje de 250 mg/dL' },
        { letter: 'B', text: 'Postergar la insulina e infundir KCl a 20–30 mEq/h hasta que el K supere 3,3 mEq/L' },
        { letter: 'C', text: 'Administrar bicarbonato de sodio y luego iniciar la insulina' },
        { letter: 'D', text: 'Iniciar la bomba de insulina sin bolo, con 20 mEq de KCl por litro de suero' },
        { letter: 'E', text: 'Cambiar a insulina NPH subcutánea para que el potasio baje más lento' },
      ],
      correct: 'B',
      explanation: 'Con K menor de 3,3 mEq/L la insulina está contraindicada: mete el poco potasio extracelular a la célula y precipita hipokalemia severa, fibrilación ventricular y paro. Primero KCl a 20–30 mEq/h; la insulina parte cuando el K supera 3,3. El pH de 7,08 no indica bicarbonato.',
      say: {
        stem: 'Vamos a un caso. Mujer de dieciocho años con diabetes tipo uno, en cetoacidosis severa: glicemia de cuatrocientos sesenta y pH venoso de siete coma cero ocho. El potasio es de dos coma nueve. Ya recibió su primer litro de suero, y el interno prepara un bolo de diez unidades de insulina y una bomba a seis unidades por hora.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: aprobar la insulina y reponer potasio más tarde, postergar la insulina y pasar cloruro de potasio, dar bicarbonato primero, iniciar la bomba sin bolo pero con potasio, o cambiar a insulina NPH. Piénsalo.',
        answer: 'La respuesta es la B. El potasio es dos coma nueve, bajo tres coma tres: la insulina metería a la célula el poco potasio que queda, con riesgo de fibrilación ventricular. Primero cloruro de potasio, y la insulina cuando el potasio supere tres coma tres. La D es el distractor más tentador porque suena prudente, pero esa conducta es para un potasio entre tres coma tres y cinco coma dos. Y el pH no llega al corte del bicarbonato.',
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
      explanation: 'Cetoacidosis diabética en debut de DM1. La primera medida siempre es el suero fisiológico. Después, con K de 5,1 mEq/L (entre 3,3 y 5,2), se inicia insulina EV y se agrega KCl a los sueros. El bicarbonato no corresponde: el pH es 7,11.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Niño de once años con cuatro días de poliuria y polidipsia, que llega soporoso y taquicárdico. Glicemia de trescientos veinte, pH de siete coma once, bicarbonato de doce, cetonas positivas, y un potasio de cinco coma uno.',
        question: '¿Cuál es la primera medida a administrar?',
        options: 'Las opciones son: suero fisiológico a veinte centímetros cúbicos por kilo, insulina endovenosa, adrenalina, cloruro de potasio, u oxígeno. Piénsalo.',
        answer: 'Es la A, el suero fisiológico: como vimos en la clase anterior, lo primero es siempre el volumen. Pero sigamos al paciente con lo de hoy. Su potasio es cinco coma uno, entre tres coma tres y cinco coma dos, así que después del suero va la insulina, con cloruro de potasio en los sueros. La insulina es el distractor tentador, pero no es lo primero. Y con pH de siete coma once, nada de bicarbonato.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Potasio', tag: 'Lo primero que miras', kind: 'alert', items: [
          { t: 'Siempre hay déficit total', d: 'Aunque la potasemia sea normal o alta',
            say: 'Cerremos con las reglas de oro. Todo paciente con cetoacidosis tiene déficit de potasio, aunque el examen lo muestre normal o alto.' },
          { t: 'K menor de 3,3: no hay insulina', d: 'Primero KCl 20–30 mEq/h',
            say: 'Con potasio bajo tres coma tres, no hay insulina: primero potasio.' },
          { t: 'Entre 3,3 y 5,2: insulina + KCl', d: 'Sobre 5,2: insulina sola',
            say: 'Entre tres coma tres y cinco coma dos, insulina con potasio. Sobre cinco coma dos, insulina sola y control cada dos horas.' },
        ] },
        { title: 'Insulina', tag: 'Infusión EV', kind: 'pharma', items: [
          { t: 'Cristalina 0,1 UI/kg/h', d: 'Meta: bajar 50–75 mg/dL por hora',
            say: 'La insulina es cristalina endovenosa a cero coma uno unidades por kilo por hora, buscando bajar cincuenta a setenta y cinco por hora, y se duplica si en la primera hora no bajó cincuenta.' },
        ] },
        { title: 'Bicarbonato', tag: 'Solo el pH decide', kind: 'key', items: [
          { t: 'Solo con pH menor de 6,90', d: 'Si no: hipokalemia y acidosis del SNC',
            say: 'Y el bicarbonato, solo con pH bajo seis coma nueve. En la próxima clase vemos cuándo se considera resuelta la cetoacidosis y cómo se apaga la bomba sin que el paciente recaiga. Si te llevas una sola idea de hoy: antes de la insulina, mira el potasio; antes del bicarbonato, mira el pH. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Cetoacidosis: potasio, insulina y bicarbonato',
    root: N('start', 'CAD en reanimación con suero', 'Ya corre el suero fisiológico',
      'El paciente con cetoacidosis ya está recibiendo suero fisiológico. Antes de colgar la insulina, hay una sola pregunta que no puedes saltarte.',
      ['', N('q', '¿Cuánto es el potasio?', 'Antes de cualquier insulina',
        '¿Cuánto es el potasio? Recuerda que siempre hay déficit total, aunque la sangre diga otra cosa.',
        ['Menor de 3,3', N('alert', 'Sin insulina: KCl 20–30 mEq/h', 'Hasta que el K supere 3,3',
          'Bajo tres coma tres: la insulina se posterga o se suspende, y se pasa cloruro de potasio a veinte a treinta miliequivalentes por hora. Cuando el potasio supera tres coma tres, vuelves a esta misma pregunta.')],
        ['3,3 a 5,2', N('do', 'Insulina + KCl en los sueros', '0,1 UI/kg/h + 20–30 mEq de KCl por litro',
          'Entre tres coma tres y cinco coma dos: insulina cristalina a cero coma uno unidades por kilo por hora, y veinte a treinta miliequivalentes de cloruro de potasio en cada litro. Si en la primera hora la glicemia no bajó cincuenta, se duplica la infusión.')],
        ['Mayor de 5,2', N('do', 'Insulina sin potasio', 'Control de K cada 2 horas',
          'Sobre cinco coma dos: insulina sin potasio, y control cada dos horas, porque la propia insulina lo va a bajar.')])],
      ['Y el pH', N('q', '¿pH menor de 6,90?', 'Único criterio de bicarbonato',
        'En paralelo, mira el pH. Es lo único que decide el bicarbonato.',
        ['SÍ', N('refer', 'Bicarbonato 100 mmol en 2 horas', 'Con 20 mEq de KCl',
          'Bajo seis coma nueve: cien milimoles de bicarbonato de sodio en cuatrocientos mililitros de agua, con veinte miliequivalentes de potasio, en dos horas, hasta llegar a pH siete.')],
        ['NO', N('ok', 'Sin bicarbonato', 'Aunque el HCO3 esté muy bajo',
          'Con pH de seis coma nueve o más, no hay bicarbonato, por muy bajo que esté el bicarbonato sérico.')])]),
  },
};
