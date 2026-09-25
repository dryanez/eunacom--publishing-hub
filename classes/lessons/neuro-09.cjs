// Clase 10.9 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neurologia.cjs (neuro-09).
// Preguntas reales: banco real (classes/scripts/class_questions.cjs neuro-09 y --search).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'neuro-09',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Un reloj de 5 y 30 minutos: qué fármaco va en cada fase y qué complicaciones buscar',
      say: 'Bienvenidos. En la clase pasada vimos la epilepsia crónica y cómo elegir el antiepiléptico. Hoy vemos su emergencia: el estatus epiléptico convulsivo, cuando la crisis no se detiene. Es una urgencia vital que depende del tiempo, y toda la clase se ordena con un reloj: cinco minutos y treinta minutos. Si sabes qué pasa en cada punto del reloj, sabes qué fármaco dar. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Por qué el reloj manda',
      nodes: [
        { id: 'nor', col: 0, row: 0, k: 'good', t: 'Crisis habitual', s: 'Se autolimita antes de 2 min' },
        { id: 'fal', col: 0, row: 2, k: 'cause', t: 'Falla la terminación', s: 'La crisis no se apaga' },
        { id: 't1', col: 1, row: 2, k: 'alert', t: 't1: 5 minutos', s: 'Iniciar rescate ya' },
        { id: 'gab', col: 2, row: 1, k: 'mech', t: 'GABA-A se internaliza', s: 'Las benzodiacepinas pierden efecto' },
        { id: 't2', col: 2, row: 3, k: 'alert', t: 't2: 30 minutos', s: 'Daño neuronal irreversible' },
        { id: 'exc', col: 3, row: 3, k: 'risk', t: 'Excitotoxicidad', s: 'Glutamato, calcio, necrosis' },
        { id: 'sis', col: 4, row: 3, k: 'risk', t: 'Daño sistémico', s: 'Rabdomiolisis, falla renal' },
      ],
      edges: [
        { from: 'fal', to: 't1' }, { from: 't1', to: 'gab', label: 'si sigue' },
        { from: 't1', to: 't2', label: 'si sigue' }, { from: 't2', to: 'exc' }, { from: 'exc', to: 'sis' },
      ],
      steps: [
        { show: ['nor'], note: 'Lo normal: la crisis se apaga sola',
          say: 'Partamos por lo normal. Una crisis tónico-clónica generalizada se apaga sola antes de los dos minutos. Las sinapsis se agotan y los circuitos inhibitorios, los del GABA, recuperan el control.' },
        { show: ['fal'], note: 'Estatus: fallan los mecanismos que terminan la crisis',
          say: 'El estatus epiléptico aparece cuando esos mecanismos de término fracasan. La crisis no se apaga, y cada minuto que pasa se vuelve más difícil de detener.' },
        { show: ['t1'], note: 'A los 5 minutos ya no va a parar sola',
          say: 'La Liga Internacional contra la Epilepsia definió dos puntos en el reloj. El primero, t uno, son cinco minutos. Desde ahí es muy poco probable que la crisis ceda sola, y hay que iniciar el tratamiento de rescate de inmediato. No se espera más.' },
        { show: ['gab'], note: 'Por eso la benzodiacepina se da precoz',
          say: '¿Y por qué tanta prisa? Porque desde los cinco minutos los receptores GABA-A se internalizan: la neurona los mete hacia dentro de la célula. Y como las benzodiacepinas actúan sobre ese receptor, cada minuto de espera les quita efecto. Por eso la benzodiacepina funciona mejor cuanto antes se da.' },
        { show: ['t2'], note: 'A los 30 minutos el daño ya es permanente',
          say: 'El segundo punto, t dos, son treinta minutos. Desde ahí la actividad eléctrica continua produce daño neuronal permanente.' },
        { show: ['exc', 'sis'], note: 'Cerebro y cuerpo se dañan a la vez',
          say: 'El mecanismo es la excitotoxicidad: exceso de glutamato, entrada masiva de calcio y necrosis, sobre todo en la corteza, el hipocampo y el tálamo. Y no es solo el cerebro: la contracción muscular sostenida trae rabdomiolisis y falla multiorgánica. Guarda esto, porque lo retomamos al final.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Definición',
      title: 'Cada tipo de estatus tiene su reloj',
      cards: [
        { title: 'Convulsivo tónico-clónico', tag: 'El que más se pregunta', kind: 'alert', items: [
          { t: 'Crisis de 5 minutos o más', d: 'O crisis repetidas sin recuperar conciencia',
            say: 'Con esto, la definición operativa. Estatus epiléptico convulsivo es una crisis de cinco minutos o más, o crisis repetidas sin que el paciente recupere la conciencia entre ellas. Esa segunda parte se olvida y se pregunta.' },
          { t: 't1: 5 min · t2: 30 min', d: 'Tratar ya · daño irreversible',
            say: 'Su reloj es el que vimos: cinco minutos para tratar, treinta minutos para el daño irreversible.' },
        ] },
        { title: 'Otros estatus', tag: 'Relojes más largos', kind: 'criteria', items: [
          { t: 'Focal con alteración de conciencia', d: 't1: 10 min · t2: más de 60 min',
            say: 'Los otros tipos tienen relojes más largos. El estatus focal con alteración de conciencia se trata a los diez minutos, y su daño aparece después de sesenta, con riesgo de secuelas cognitivas y lesión del hipocampo.' },
          { t: 'Estatus de ausencia', d: 't1: 10–15 min · sin necrosis demostrada',
            say: 'Y el estatus de ausencia: un estado crepuscular continuo, con punta-onda a tres por segundo en el electroencefalograma. Se trata a los diez a quince minutos con benzodiacepinas, pero no se ha demostrado que produzca necrosis neuronal.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Fase 1 · 0 a 10 minutos',
      title: 'Primero, una benzodiacepina',
      nodes: [
        { id: 'abc', col: 0, row: 1, k: 'start', t: 'ABC + glicemia', s: 'Vía aérea, oxígeno 100 %' },
        { id: 'via', col: 1, row: 1, k: 'q', t: '¿Hay vía venosa?', s: 'No perder tiempo' },
        { id: 'lor', col: 2, row: 0, k: 'good', t: 'Lorazepam 4 mg EV', s: '0,1 mg/kg en 2 minutos' },
        { id: 'mid', col: 2, row: 2, k: 'good', t: 'Midazolam 10 mg IM', s: '5 mg si pesa menos de 40 kg' },
        { id: 'rep', col: 3, row: 1, k: 'mech', t: 'Si sigue a los 5 min', s: 'Repetir una sola vez' },
        { id: 'f2', col: 4, row: 1, k: 'refer', t: 'Pasar a Fase 2', s: 'Antiepiléptico EV' },
      ],
      edges: [
        { from: 'abc', to: 'via' }, { from: 'via', to: 'lor', label: 'sí' }, { from: 'via', to: 'mid', label: 'no' },
        { from: 'lor', to: 'rep' }, { from: 'mid', to: 'rep' }, { from: 'rep', to: 'f2', label: 'persiste' },
      ],
      steps: [
        { show: ['abc'], note: 'Estabilizar mientras se prepara el fármaco',
          say: 'Pasemos a la conducta. Como en toda urgencia, primero el ABC: posicionar la vía aérea, aspirar secreciones y dar oxígeno al cien por ciento con mascarilla de reservorio. Y un hemoglucotest, porque una hipoglicemia se corrige de inmediato.' },
        { show: ['via'], note: 'La fase 1 dura de 0 a 10 minutos',
          say: 'La fase uno va de los cero a los diez minutos, y su objetivo es cortar la crisis con una benzodiacepina. La primera pregunta práctica es: ¿el paciente tiene una vía venosa?' },
        { show: ['lor'], note: 'Elección hospitalaria',
          say: 'Si la tiene, el fármaco de elección en el hospital es el lorazepam, cuatro miligramos endovenosos en bolo lento, en dos minutos. Tiene alta afinidad por el receptor y es menos liposoluble que el diazepam, así que se queda en el cerebro y su efecto dura de doce a veinticuatro horas.' },
        { show: ['mid'], note: 'Elección prehospitalaria o sin vía',
          say: 'Si no hay vía venosa, no se pierde tiempo buscándola: midazolam diez miligramos intramuscular en el adulto, o cinco si pesa menos de cuarenta kilos. El estudio RAMPART mostró que, puesto por paramédicos, es tan eficaz o mejor que el lorazepam endovenoso, justamente porque ahorra el tiempo de la vía. También sirve por vía nasal o bucal.' },
        { show: ['rep'], note: 'Una sola repetición',
          say: 'Si a los cinco minutos la crisis sigue, se repite la benzodiacepina, pero una sola vez, vigilando siempre la depresión respiratoria.' },
        { show: ['f2'], note: 'Si persiste, fase 2 sin esperar',
          say: 'Y si después de eso la crisis persiste, se pasa de inmediato a la fase dos.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Fase 1',
      title: 'El diazepam: rápido, pero dura poco',
      cards: [
        { title: 'Diazepam EV', tag: 'Alternativa', kind: 'pharma', items: [
          { t: '10 mg EV a 2–5 mg/min', d: 'Repetible a los 5 min · máximo 20 mg',
            say: 'El diazepam es la alternativa endovenosa estándar: diez miligramos, a una velocidad de dos a cinco miligramos por minuto, repetible a los cinco minutos, con un máximo de veinte.' },
          { t: 'Entra al cerebro en segundos', d: 'Es muy liposoluble',
            say: 'Tiene una ventaja: es tan liposoluble que cruza al cerebro en segundos.' },
          { t: 'Se va a la grasa en 15–30 min', d: 'Las crisis reaparecen precozmente',
            say: 'Pero esa misma liposolubilidad es su problema. En quince a treinta minutos se redistribuye al tejido graso, los niveles en el cerebro caen, y las crisis vuelven. Por eso el lorazepam, que se queda más tiempo en el cerebro, es el de elección.' },
        ] },
        { title: 'La idea que se pregunta', tag: 'Ojo', kind: 'alert', items: [
          { t: 'El primer fármaco es una benzodiacepina', d: 'Nunca fenitoína de entrada',
            say: 'Y lo que el examen pregunta una y otra vez: el primer fármaco del estatus siempre es una benzodiacepina. La fenitoína o el valproato de entrada son la trampa. Vienen después, en la fase dos.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Fase 2 · 10 a 30 minutos',
      title: 'Segundo, un antiepiléptico endovenoso',
      cards: [
        { title: 'Levetiracetam EV', tag: 'Primera elección moderna', kind: 'pharma', items: [
          { t: '60 mg/kg EV · máximo 4.500 mg', d: 'En 100 mL de suero fisiológico, en 10 min',
            say: 'Si la crisis sigue pasados diez minutos pese a una benzodiacepina bien dada, estamos en la fase dos, de los diez a los treinta minutos. Se da un antiepiléptico endovenoso en dosis de carga plena. La primera elección moderna es el levetiracetam: sesenta miligramos por kilo, con un máximo de cuatro mil quinientos, en diez minutos.' },
          { t: 'ESETT 2019: igual eficacia', d: 'Sin hipotensión ni arritmias',
            say: 'El estudio ESETT, de dos mil diecinueve, mostró que levetiracetam, fenitoína y valproato cortan el estatus en cerca de la mitad de los casos. La eficacia es la misma; lo que cambia es la seguridad, y el levetiracetam no da hipotensión ni arritmias.' },
        ] },
        { title: 'Fenitoína EV', tag: 'Alternativa clásica', kind: 'alert', items: [
          { t: '20 mg/kg EV', d: 'En adulto: 1.250 a 1.500 mg',
            say: 'La alternativa clásica es la fenitoína, veinte miligramos por kilo, en el adulto entre mil doscientos cincuenta y mil quinientos miligramos. Y tiene tres reglas de oro que se preguntan.' },
          { t: 'Solo en suero fisiológico', d: 'En glucosado cristaliza',
            say: 'Primera: se diluye solo en suero fisiológico. En suero glucosado cristaliza y precipita en la vía.' },
          { t: 'Máximo 50 mg/min con monitor', d: 'Hipotensión, bloqueo AV, asistolia',
            say: 'Segunda y tercera: nunca más de cincuenta miligramos por minuto, y siempre con monitor de electrocardiograma y presión. La fenitoína y su vehículo, el propilenglicol, pueden dar hipotensión, bloqueo auriculoventricular y asistolia.' },
        ] },
        { title: 'Ácido valproico EV', tag: 'Epilepsia generalizada', kind: 'normal', items: [
          { t: '40 mg/kg EV · máximo 3.000 mg', d: 'En 10 minutos',
            say: 'La tercera opción es el ácido valproico, cuarenta miligramos por kilo, con un máximo de tres mil, en diez minutos.' },
          { t: 'Si hay epilepsia generalizada previa', d: 'Evitar si se sospecha hepatopatía',
            say: 'Es muy buena opción si el paciente ya tiene una epilepsia generalizada o mioclónica, que conecta con la clase pasada. Y se evita si sospechas daño hepático.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Fase 3 · más de 30 minutos',
      title: 'Estatus refractario: coma inducido en UCI',
      cards: [
        { title: 'Conducta inmediata', tag: 'Estatus refractario', kind: 'alert', items: [
          { t: 'Falla benzodiacepina + antiepiléptico', d: 'Crisis clínica o eléctrica que persiste',
            say: 'Si la crisis sigue pese a la benzodiacepina de la fase uno y al antiepiléptico en dosis plena de la fase dos, ya pasados los treinta minutos, hablamos de estatus epiléptico refractario. Y ojo: cuenta tanto la crisis clínica como la eléctrica.' },
          { t: 'Intubación y traslado a UCI', d: 'Anestesia general continua',
            say: 'La conducta es intubación orotraqueal con secuencia rápida, ventilación mecánica, traslado a la unidad de cuidados intensivos y anestesia general continua.' },
        ] },
        { title: 'Anestésicos', tag: 'Coma inducido', kind: 'pharma', items: [
          { t: 'Propofol: 2 mg/kg + 2–10 mg/kg/h', d: 'Riesgo de PRIS con dosis altas por 48 h',
            say: 'El propofol se da en bolo de dos miligramos por kilo y luego infusión de dos a diez miligramos por kilo por hora. Se despierta rápido al suspenderlo, pero sobre cinco miligramos por kilo por hora por más de cuarenta y ocho horas da el síndrome de infusión de propofol: acidosis, rabdomiolisis, hiperkalemia y colapso cardiovascular.' },
          { t: 'Midazolam en infusión', d: 'Más estable hemodinámicamente',
            say: 'La alternativa es el midazolam en infusión continua, con bolo de cero coma dos miligramos por kilo. Da más estabilidad hemodinámica que el propofol.' },
          { t: 'Barbitúricos', d: 'Solo en el super-refractario',
            say: 'Y los barbitúricos, tiopental o pentobarbital, quedan para el super-refractario, porque deprimen el corazón y dilatan los vasos.' },
        ] },
        { title: 'Monitoreo', tag: 'EEG continuo', kind: 'key', items: [
          { t: 'Meta: supresión de brotes', d: 'Por 24 a 48 horas, luego destete lento',
            say: 'El electroencefalograma continuo es obligatorio. La meta no es solo que el paciente deje de moverse: es un patrón de supresión de brotes, con silencios eléctricos de diez a quince segundos, mantenido veinticuatro a cuarenta y ocho horas antes de bajar la anestesia muy lento.' },
          { t: 'Super-refractario: 24 h de anestesia', d: 'Inmunomodulación, ketamina, dieta cetogénica',
            say: 'Si las crisis siguen o vuelven tras veinticuatro horas de anestesia, o al bajarla, es un estatus super-refractario. Ahí se agregan corticoides o inmunoglobulinas, dieta cetogénica, ketamina o hipotermia controlada.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Complicaciones',
      title: 'El cuerpo también convulsiona',
      nodes: [
        { id: 'mus', col: 0, row: 1, k: 'cause', t: 'Contracción sostenida', s: 'Músculo trabajando sin parar' },
        { id: 'rab', col: 1, row: 0, k: 'mech', t: 'Rabdomiolisis', s: 'CPK sobre 10.000 U/L' },
        { id: 'ira', col: 2, row: 0, k: 'risk', t: 'Falla renal aguda', s: 'Mioglobina tapa túbulos' },
        { id: 'hid', col: 3, row: 0, k: 'good', t: 'Suero fisiológico vigoroso', s: 'Diuresis sobre 200 mL/h' },
        { id: 'aci', col: 1, row: 2, k: 'effect', t: 'Acidosis láctica', s: 'Se corrige sola al cesar' },
        { id: 'fie', col: 2, row: 2, k: 'risk', t: 'Hipertermia', s: 'Sobre 40 °C' },
        { id: 'nc', col: 3, row: 3, k: 'trap', t: 'Estatus no convulsivo', s: 'Coma sin clonías: pedir EEG' },
      ],
      edges: [
        { from: 'mus', to: 'rab' }, { from: 'rab', to: 'ira' }, { from: 'ira', to: 'hid', label: 'tratar' },
        { from: 'mus', to: 'aci', label: 'anaerobia' }, { from: 'mus', to: 'fie' }, { from: 'mus', to: 'nc', label: 'agotamiento' },
      ],
      steps: [
        { show: ['mus'], note: 'Un síndrome hipermetabólico sistémico',
          say: 'Retomemos lo que dejamos pendiente. El estatus prolongado no es solo un problema del cerebro: es un síndrome hipermetabólico de todo el cuerpo, y todo parte del músculo contrayéndose sin parar.' },
        { show: ['rab'], note: 'La complicación que más se pregunta',
          say: 'La contracción violenta y sostenida rompe la membrana de la fibra muscular. Salen mioglobina, potasio y creatina quinasa, con valores habitualmente sobre diez mil. Eso es la rabdomiolisis.' },
        { show: ['ira'], note: 'Oliguria y alza de creatinina tras el estatus',
          say: 'La mioglobina precipita en los túbulos del riñón, los obstruye y los daña. Resultado: una necrosis tubular aguda oligúrica, con alza de creatinina y riesgo de hiperkalemia. Si en el examen un paciente queda oligúrico horas después de un estatus, piensa en rabdomiolisis.' },
        { show: ['hid'], note: 'Hidratación y control de CPK',
          say: 'El tratamiento es hidratación vigorosa con suero fisiológico, buscando diuresis sobre doscientos a trescientos mililitros por hora, y alcalinizar la orina con bicarbonato. Y se controla la CPK y la creatinina seriadas.' },
        { show: ['aci'], note: 'No requiere bicarbonato de rutina',
          say: 'La glicólisis anaeróbica del músculo, más la hipoxemia, dan una acidosis láctica importante, con pH bajo siete coma uno. Pero fíjate: revierte sola en pocas horas cuando cesan las convulsiones. No necesita bicarbonato de rutina.' },
        { show: ['fie'], note: 'Enfriar de inmediato',
          say: 'El trabajo muscular también sube la temperatura, sobre cuarenta grados, y el calor acelera la muerte neuronal y el edema cerebral. Se enfría de forma activa e inmediata.' },
        { show: ['nc'], note: 'Dejó de moverse no significa que paró',
          say: 'Y la trampa final. Tras treinta a cuarenta y cinco minutos, el músculo se agota y los movimientos se apagan. El paciente queda en coma, a veces con pequeñas mioclonías en los párpados o los dedos, pero la corteza sigue en estatus. Es el estatus no convulsivo, y solo lo ve el electroencefalograma.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo el reloj en un solo árbol de decisión, tal como lo vas a razonar en la urgencia.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Crisis activa de 5 minutos o más', 'Benzodiacepina de inmediato', 'Esperar a que ceda sola'],
          say: 'Repasemos las trampas. Crisis activa de cinco minutos o más: benzodiacepina de inmediato. Esperar a que ceda sola es el error, porque cada minuto le quita efecto al fármaco.' },
        { cells: ['Estatus sin vía venosa', 'Midazolam 10 mg IM', 'Retrasar el fármaco buscando vía'],
          say: 'Estatus sin vía venosa: midazolam intramuscular. El error es perder minutos buscando una vía.' },
        { cells: ['Primer fármaco del estatus', 'Lorazepam EV', 'Fenitoína o valproato de entrada'],
          say: 'El primer fármaco siempre es una benzodiacepina. La fenitoína de entrada es la alternativa trampa.' },
        { cells: ['Fenitoína EV', 'Suero fisiológico, máx 50 mg/min, monitor', 'Diluir en suero glucosado'],
          say: 'La fenitoína va en suero fisiológico, a no más de cincuenta miligramos por minuto y con monitor. Diluirla en glucosado es el error clásico.' },
        { cells: ['Persiste tras fase 1 y fase 2', 'Intubar, anestesia y EEG continuo en UCI', 'Tercer antiepiléptico en sala'],
          say: 'Si persiste tras la fase uno y la fase dos: intubar, coma anestésico y electroencefalograma continuo en la UCI. No se sigue probando antiepilépticos en la sala.' },
        { cells: ['Coma sin clonías tras estatus', 'EEG continuo', 'Asumir que la crisis terminó'],
          say: 'Coma sin movimientos después de un estatus: electroencefalograma continuo. Asumir que la crisis terminó porque dejó de moverse es la trampa.' },
        { cells: ['Oliguria y alza de creatinina post-estatus', 'Rabdomiolisis: hidratación vigorosa', 'Culpar a los fármacos'],
          say: 'Y oliguria con alza de creatinina después del estatus: rabdomiolisis, y se hidrata con fuerza. No es toxicidad del lorazepam ni de la fenitoína.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 44 años con epilepsia secundaria a un TEC antiguo, que abandonó sus antiepilépticos hace 5 días. Llega en ambulancia con una crisis tónico-clónica generalizada continua de 25 minutos. Inconsciente, clonías bilaterales, trismus, sialorrea y cianosis peribucal. FC 138 lpm, PA 165/100 mmHg, SatO2 86 % ambiental, T° 38,6 °C. HGT 112 mg/dL. Tiene vía venosa permeable.',
      question: 'Tras asegurar la vía aérea y administrar oxígeno, ¿cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Fenitoína 20 mg/kg EV diluida en suero glucosado al 5 %' },
        { letter: 'B', text: 'Lorazepam 4 mg EV en bolo lento' },
        { letter: 'C', text: 'Observar 5 minutos más, dado que la crisis podría ceder sola' },
        { letter: 'D', text: 'Suero glucosado al 30 % EV' },
        { letter: 'E', text: 'TAC de cerebro urgente antes de administrar fármacos' },
      ],
      correct: 'B',
      explanation: 'Estatus epiléptico convulsivo de 25 minutos: superó con creces t1 (5 min) y se acerca a t2 (30 min). Tras el ABC, el primer fármaco es una benzodiacepina: lorazepam 4 mg EV (midazolam 10 mg IM si no hubiera vía). Si no cede, fase 2 con levetiracetam 60 mg/kg o fenitoína 20 mg/kg en suero fisiológico a ≤ 50 mg/min con monitor. El HGT es normal, así que la glucosa no está indicada.',
      say: {
        stem: 'Vamos con un caso. Hombre de cuarenta y cuatro años con epilepsia por un traumatismo encéfalo craneano antiguo, que dejó sus antiepilépticos hace cinco días. Llega en ambulancia con una crisis tónico-clónica continua de veinticinco minutos: inconsciente, con clonías bilaterales, trismus, sialorrea y cianosis. Frecuencia de ciento treinta y ocho, saturación de ochenta y seis por ciento, temperatura de treinta y ocho coma seis, y hemoglucotest de ciento doce. Tiene vía venosa.',
        question: 'Tras asegurar la vía aérea y dar oxígeno, ¿cuál es la conducta más adecuada?',
        options: 'Las opciones: fenitoína en suero glucosado, lorazepam cuatro miligramos endovenoso, observar cinco minutos más, suero glucosado al treinta por ciento, o un TAC antes de dar fármacos. Piénsalo.',
        answer: 'Es la B, lorazepam. Lleva veinticinco minutos: pasó hace rato los cinco minutos y está a punto de llegar a los treinta. Tras el ABC, lo primero es una benzodiacepina, y si no cede, la fase dos. La A tienta porque la fenitoína es un fármaco del estatus, pero no es el primero, y además en glucosado cristaliza. Esperar es perder neuronas, la glucosa no corresponde con un hemoglucotest normal, y el TAC nunca va antes de cortar la crisis.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 33',
      stem: 'Un lactante de 18 meses de edad, presenta un convulsión tónico-clónica de 3 minutos de duración. Al examen físico está afebril, sin alteraciones en el examen segmentario.',
      question: '¿Cuál es el tratamiento de la crisis?',
      options: [
        { letter: 'A', text: 'Diazepam' },
        { letter: 'B', text: 'Ácido valproico' },
        { letter: 'C', text: 'Fenitoína' },
        { letter: 'D', text: 'Carbamazepina' },
        { letter: 'E', text: 'Topiramato' },
      ],
      correct: 'A',
      explanation: 'Se pregunta el tratamiento de la crisis en curso: se corta con una benzodiacepina. La de elección es el lorazepam, pero no está entre las opciones; el diazepam es la alternativa. Valproato y fenitoína son de segunda fase; carbamazepina y topiramato son de mantención.',
      say: {
        stem: 'Ahora las preguntas reales. La primera, del EUNACOM de julio de dos mil diecisiete. Un lactante de dieciocho meses presenta una convulsión tónico-clónica de tres minutos. Está afebril y su examen segmentario es normal.',
        question: '¿Cuál es el tratamiento de la crisis?',
        options: 'Las opciones: diazepam, ácido valproico, fenitoína, carbamazepina o topiramato. Piénsalo.',
        answer: 'Es la A, diazepam. La pregunta es cómo se corta la crisis, y una crisis se corta con una benzodiacepina. La de elección sería el lorazepam, pero no está, así que queda su alternativa. La fenitoína y el valproato tientan, pero son la fase dos, después de la benzodiacepina. Y la carbamazepina y el topiramato son fármacos de mantención: no cortan una crisis activa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 40',
      stem: 'Mujer embarazada de 34 semanas es encontrada convulsionando en la calle. Previamente tenía presión arterial de 165/110 mmHg. Al llegar a urgencias persiste con crisis convulsiva.',
      question: '¿Cuál es el tratamiento de elección?',
      options: [
        { letter: 'A', text: 'Fenitoína IV' },
        { letter: 'B', text: 'Sulfato de magnesio IV' },
        { letter: 'C', text: 'Diazepam IV' },
        { letter: 'D', text: 'Nifedipino sublingual' },
        { letter: 'E', text: 'Labetalol IV' },
      ],
      correct: 'B',
      explanation: 'Convulsión en una embarazada con presión elevada: eclampsia. El anticonvulsivante de elección es el sulfato de magnesio, no las benzodiacepinas ni la fenitoína. Luego se controla la presión y se evalúa la interrupción del embarazo.',
      say: {
        stem: 'La segunda es una excepción que hay que conocer, del EUNACOM de julio de dos mil veinticinco. Una embarazada de treinta y cuatro semanas es encontrada convulsionando en la calle. Antes tenía una presión de ciento sesenta y cinco con ciento diez. En la urgencia sigue convulsionando.',
        question: '¿Cuál es el tratamiento de elección?',
        options: 'Las opciones: fenitoína, sulfato de magnesio, diazepam, nifedipino o labetalol. Piénsalo.',
        answer: 'Es la B, sulfato de magnesio. Una embarazada hipertensa que convulsiona tiene una eclampsia, y ahí el anticonvulsivante de elección es el magnesio. El diazepam es el distractor que esta clase te hace elegir, y por eso esta pregunta es valiosa: antes de aplicar el protocolo, mira quién es el paciente. Después viene controlar la presión y evaluar la interrupción del embarazo.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'El reloj', tag: 't1 y t2', kind: 'key', items: [
          { t: '5 minutos: tratar ya', d: 'O crisis repetidas sin recuperar conciencia',
            say: 'Cerremos con las reglas de oro. A los cinco minutos de crisis, o con crisis repetidas sin recuperar la conciencia, es estatus y se trata de inmediato.' },
          { t: '30 minutos: daño irreversible', d: 'Cerebro y músculo',
            say: 'A los treinta minutos empieza el daño irreversible, en el cerebro y en el cuerpo.' },
        ] },
        { title: 'Las tres fases', tag: 'En orden', kind: 'pharma', items: [
          { t: 'Fase 1: benzodiacepina', d: 'Lorazepam EV o midazolam IM',
            say: 'Fase uno, benzodiacepina: lorazepam endovenoso, o midazolam intramuscular si no hay vía, repetible una vez.' },
          { t: 'Fase 2: antiepiléptico EV', d: 'Levetiracetam · fenitoína en SF · valproato',
            say: 'Fase dos, antiepiléptico endovenoso: levetiracetam, fenitoína en suero fisiológico con monitor, o valproato.' },
          { t: 'Fase 3: intubar y anestesiar', d: 'UCI con EEG continuo',
            say: 'Fase tres, refractario: intubar, coma anestésico con propofol o midazolam, y electroencefalograma continuo en la UCI.' },
        ] },
        { title: 'Después del estatus', tag: 'No olvidar', kind: 'alert', items: [
          { t: 'Oliguria = rabdomiolisis', d: 'Hidratación vigorosa · CPK y creatinina',
            say: 'Si queda oligúrico, piensa en rabdomiolisis y se hidrata con fuerza.' },
          { t: 'Coma sin clonías = pedir EEG', d: 'Puede seguir en estatus no convulsivo',
            say: 'Y si queda en coma sin moverse, pide un electroencefalograma, porque puede seguir en estatus. Si te llevas una sola idea de hoy: en el estatus manda el reloj, y el primer fármaco siempre es una benzodiacepina. En la próxima clase vemos el paciente que llega después de su primera crisis, y cómo separarla de un síncope. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Estatus epiléptico convulsivo',
    root: N('start', 'Crisis convulsiva activa', 'ABC, oxígeno, hemoglucotest',
      'Paciente convulsionando. Primero el ABC: vía aérea, oxígeno al cien por ciento, y hemoglucotest.',
      ['', N('q', '¿Dura 5 minutos o más?', 'O crisis repetidas sin recuperar conciencia',
        '¿La crisis ya dura cinco minutos, o son crisis repetidas sin recuperar la conciencia entre ellas?',
        ['SÍ', N('q', '¿Hay vía venosa?', 'Fase 1: benzodiacepina',
          'Es estatus y empieza la fase uno. ¿Hay una vía venosa disponible?',
          ['SÍ', N('do', 'Lorazepam 4 mg EV', 'Repetir 1 vez a los 5 min',
            'Si hay vía, lorazepam cuatro miligramos endovenoso, repetible una sola vez a los cinco minutos.',
            ['Persiste', N('do', 'Fase 2: levetiracetam 60 mg/kg', 'O fenitoína 20 mg/kg en SF · valproato',
              'Si persiste pasados los diez minutos, fase dos: levetiracetam, o fenitoína en suero fisiológico con monitor, o valproato.',
              ['Cede', N('ok', 'Buscar la causa y complicaciones', 'CPK, creatinina, EEG si no despierta',
                'Si cede, se busca la causa y las complicaciones: CPK y creatinina por la rabdomiolisis, y electroencefalograma si no despierta.')],
              ['Persiste', N('alert', 'Fase 3: estatus refractario', 'IOT + propofol o midazolam + EEG continuo',
                'Si persiste pese a las dos fases, es refractario: intubación, coma anestésico con propofol o midazolam, y electroencefalograma continuo en la UCI, con meta de supresión de brotes.')])])],
          ['NO', N('do', 'Midazolam 10 mg IM', 'O intranasal · no buscar vía',
            'Si no hay vía, midazolam diez miligramos intramuscular, sin perder tiempo buscando la vía. Si persiste, sigue el mismo camino a la fase dos.')])],
        ['NO', N('ok', 'Proteger y observar', 'Suele autolimitarse antes de 2 min',
          'Si la crisis dura menos de cinco minutos, se protege al paciente y se observa: una crisis habitual se apaga sola antes de dos minutos.')])]),
  },
};
