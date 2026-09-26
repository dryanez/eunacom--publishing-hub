// Clase 11.3 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_cirugia.cjs / dataset_cirugia_bloque_1.cjs (cir-03, classId cirugia-03).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-03',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'La apendicitis del lado izquierdo, y por qué nunca la endoscopias en agudo',
      say: 'Bienvenido de nuevo. Hoy vemos diverticulitis aguda, la patología colónica más frecuente del adulto mayor, y que muchos le dicen la apendicitis izquierda, porque el razonamiento es casi idéntico. Vas a aprender a etapificarla con el TAC, usando la clasificación de Hinchey, y sobre todo, una regla que se pregunta siempre: qué examen nunca se pide en la fase aguda, aunque parezca el más lógico. Partamos por el mecanismo.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Del divertículo débil a la microperforación',
      nodes: [
        { id: 'div', col: 0, row: 1, k: 'cause', t: 'Divertículos en el sigmoides', s: 'Puntos débiles de la pared' },
        { id: 'fec', col: 1, row: 0, k: 'cause', t: 'Fecalito lo obstruye', s: 'Dentro del divertículo' },
        { id: 'isq', col: 2, row: 1, k: 'mech', t: 'Isquemia y necrosis local', s: 'De la pared diverticular' },
        { id: 'mic', col: 3, row: 1, k: 'risk', t: 'Microperforación', s: 'Inflamación de la grasa vecina' },
        { id: 'sin', col: 4, row: 1, k: 'effect', t: 'Dolor en FII y fiebre', s: 'La "apendicitis izquierda"' },
      ],
      edges: [
        { from: 'div', to: 'fec' }, { from: 'fec', to: 'isq' },
        { from: 'isq', to: 'mic' }, { from: 'mic', to: 'sin' },
      ],
      steps: [
        { show: ['div'], note: 'Herniaciones de la mucosa por puntos débiles',
          say: 'Todo parte de los divertículos, que son herniaciones de la mucosa por los puntos débiles de la pared del colon, casi siempre en el sigmoides y el colon descendente, donde la presión intraluminal es más alta. Tener divertículos no es lo mismo que estar enfermo: la mayoría de las personas que los tienen nunca se complican, y esa condición se llama diverticulosis, no diverticulitis.' },
        { show: ['fec'], note: 'El mismo mecanismo que en el apéndice',
          say: 'El problema empieza cuando un fecalito se aloja dentro de uno de esos divertículos y lo obstruye. Fíjate que es exactamente el mismo mecanismo inicial que viste en la apendicitis.' },
        { show: ['isq'], note: 'La pared se necrosa por la presión',
          say: 'Esa obstrucción eleva la presión, la pared se isquemia y empieza a necrosarse.' },
        { show: ['mic'], note: 'Perforación pequeña, contenida al principio',
          say: 'Y esa pared debilitada termina con una microperforación, que inflama la grasa que rodea al colon.' },
        { show: ['sin'], note: 'Por eso la llaman la apendicitis izquierda',
          say: 'El resultado es dolor continuo en la fosa ilíaca izquierda, con fiebre y leucocitosis: la misma lógica de la apendicitis, pero del lado contrario. Por eso a la diverticulitis le dicen la apendicitis izquierda.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'Cómo llega este paciente a tu consulta',
      cards: [
        { title: 'Cuadro típico', tag: 'Adulto mayor', kind: 'key', items: [
          { t: 'Dolor progresivo en FII', d: 'De varios días, con fiebre',
            say: 'El cuadro típico es un dolor progresivo, de varios días, en la fosa ilíaca izquierda, con sensación febril y anorexia. Suele venir con constipación, aunque a veces hay diarrea.' },
          { t: 'Masa palpable en 20%', d: 'Resistencia muscular y Blumberg focal',
            say: 'Al examen, encuentras resistencia muscular y Blumberg localizado en esa zona, y en uno de cada cinco pacientes hasta se palpa una masa inflamatoria.' },
          { t: 'Puede haber síntomas urinarios', d: 'Si el flemón toca la vejiga',
            say: 'Y si el flemón queda pegado a la vejiga, puede dar síntomas urinarios, como si fuera una cistitis. No te dejes engañar: revisa siempre el abdomen antes de cerrar ese diagnóstico.' },
        ] },
        { title: 'Ojo con el antecedente', tag: 'Post colonoscopía', kind: 'alert', items: [
          { t: 'Dolor tras una colonoscopía', d: 'Puede ser diverticulitis iatrogénica',
            say: 'Y hay un antecedente que se pregunta seguido: si el dolor en la fosa ilíaca izquierda aparece horas después de una colonoscopía, sobre todo con resección de pólipos, piensa en una diverticulitis provocada por la insuflación de aire durante el procedimiento.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico',
      title: 'El TAC etapifica con la clasificación de Hinchey',
      nodes: [
        { id: 'tac', col: 0, row: 1, k: 'start', t: 'TAC de abdomen y pelvis', s: 'Con contraste intravenoso' },
        { id: 'h0', col: 1, row: 0, k: 'good', t: 'Hinchey 0 o Ia', s: 'Sin absceso ni peritonitis' },
        { id: 'h2', col: 1, row: 1, k: 'risk', t: 'Hinchey Ib o II', s: 'Absceso pequeño o a distancia' },
        { id: 'h34', col: 1, row: 2, k: 'alert', t: 'Hinchey III o IV', s: 'Peritonitis generalizada' },
        { id: 'med', col: 2, row: 0, k: 'good', t: 'Manejo médico', s: 'Antibióticos, sin cirugía' },
        { id: 'dre', col: 2, row: 1, k: 'refer', t: 'Drenaje percutáneo', s: 'Si el absceso mide 4 cm o más' },
        { id: 'har', col: 2, row: 2, k: 'trap', t: 'Operación de Hartmann', s: 'Cirugía de urgencia' },
      ],
      edges: [
        { from: 'tac', to: 'h0' }, { from: 'tac', to: 'h2' }, { from: 'tac', to: 'h34' },
        { from: 'h0', to: 'med' }, { from: 'h2', to: 'dre' }, { from: 'h34', to: 'har' },
      ],
      steps: [
        { show: ['tac'], note: 'El examen de elección, sin discusión',
          say: 'El examen de elección en la fase aguda, sin discusión, es el TAC de abdomen y pelvis con contraste intravenoso. Con él clasificas la severidad según la clasificación de Hinchey.' },
        { show: ['h0'], note: 'Solo engrosamiento o flemón, sin colección líquida',
          say: 'Hinchey cero y uno A son las formas leves: solo hay engrosamiento de la pared, o un flemón sólido, sin ninguna colección líquida.' },
        { show: ['h2'], note: 'Aquí ya hay una colección con líquido adentro',
          say: 'Hinchey uno B y dos son cuando ya se formó un absceso: pequeño y cercano en el uno B, o más grande y a distancia en el dos.' },
        { show: ['h34'], note: 'El colon ya no contiene la perforación',
          say: 'Y Hinchey tres y cuatro son cuando la perforación ya no está contenida: peritonitis purulenta generalizada en el tres, y peritonitis con contenido fecal libre en el cuatro.' },
        { show: ['med'], note: 'La mayoría se resuelve sin ninguna cirugía',
          say: 'En las formas leves, el tratamiento es médico: reposo digestivo y antibióticos, orales si el paciente tolera y está bien, o endovenosos si hay comorbilidad o fiebre alta. Más del noventa por ciento responde sin necesitar cirugía.' },
        { show: ['dre'], note: 'El drenaje evita una colostomía de urgencia',
          say: 'Si el absceso mide cuatro centímetros o más, el tratamiento de elección es el drenaje percutáneo guiado por TAC, más antibióticos. Esto evita una cirugía de urgencia con colostomía, y permite operar después, de forma electiva y con anastomosis directa.' },
        { show: ['har'], note: 'Peritonitis generalizada: cirugía inaplazable',
          say: 'Y con peritonitis generalizada, la cirugía ya no se puede posponer: la operación de Hartmann, que reseca el segmento perforado, cierra el muñón rectal y deja una colostomía terminal.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Factores de riesgo',
      title: 'Quién tiene más probabilidad de complicarse',
      cards: [
        { title: 'Dieta y estilo de vida', tag: 'Lo que aumenta la presión colónica', kind: 'normal', items: [
          { t: 'Dieta baja en fibra', d: 'Más carnes rojas y grasas',
            say: 'Antes de seguir con el manejo, vale la pena que sepas quién tiene más riesgo. La dieta baja en fibra y rica en carnes rojas aumenta la presión dentro del colon, y con el tiempo favorece que aparezcan más divertículos.' },
        ] },
        { title: 'Otros factores', tag: 'Suman riesgo de complicación', kind: 'criteria', items: [
          { t: 'Obesidad y tabaquismo', d: 'También AINE de uso frecuente',
            say: 'La obesidad, el tabaquismo, y el uso frecuente de antiinflamatorios no esteroidales también suman riesgo, tanto de tener divertículos como de que se compliquen con una diverticulitis, e incluso de que ese episodio termine en una perforación libre en vez de quedar contenido.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Dos reglas que se preguntan siempre',
      title: 'Lo que nunca haces, y lo que nunca olvidas',
      cards: [
        { title: 'Colonoscopía: contraindicada en agudo', tag: 'Riesgo de perforación libre', kind: 'alert', items: [
          { t: 'La insuflación puede perforar', d: 'Convierte un sello en una peritonitis fecal',
            say: 'La primera regla: la colonoscopía está formalmente contraindicada en la fase aguda. La insuflación de aire puede romper una microperforación que estaba sellada y provocar una peritonitis fecal masiva.' },
        ] },
        { title: 'Colonoscopía diferida: obligatoria', tag: 'A las 6 a 8 semanas', kind: 'key', items: [
          { t: 'Descartar cáncer de colon', d: 'Hasta 5% son cáncer disfrazado',
            say: 'Y la segunda regla, que parece contradecir a la primera pero no lo hace: una vez que el episodio agudo se resolvió, a las seis u ocho semanas, la colonoscopía completa es obligatoria. Hasta un cinco por ciento de lo que parecía diverticulitis termina siendo un cáncer de colon perforado o coexistente.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento médico',
      title: 'Ambulatorio, hospitalizado, o con el umbral más bajo',
      cards: [
        { title: 'Ambulatorio', tag: 'Joven, estable, tolera comer', kind: 'normal', items: [
          { t: 'Ciprofloxacino más metronidazol', d: 'Vía oral, por 7 a 10 días',
            say: 'Si el paciente es joven, está estable y tolera comer, el manejo puede ser ambulatorio: ciprofloxacino más metronidazol por vía oral, durante siete a diez días.' },
        ] },
        { title: 'Hospitalizado', tag: 'Comorbilidad o mala tolerancia oral', kind: 'pharma', items: [
          { t: 'Ceftriaxona más metronidazol EV', d: 'Al menos 3 a 5 días endovenoso',
            say: 'Si es un adulto mayor, tiene comorbilidad, o no tolera comer, hospitalizas: ceftriaxona más metronidazol endovenoso, al menos tres a cinco días, y luego completas por vía oral.' },
        ] },
        { title: 'Umbral bajo para hospitalizar', tag: 'Inmunosuprimidos', kind: 'alert', items: [
          { t: 'Corticoides o quimioterapia', d: 'Pueden no hacer fiebre ni leucocitosis',
            say: 'Y un grupo especial: el paciente inmunosuprimido, por corticoides crónicos o quimioterapia, puede no mostrar fiebre ni leucocitosis a pesar de tener una perforación seria, porque no monta una respuesta inflamatoria normal. Con ellos, el umbral para hospitalizar y para operar tiene que ser mucho más bajo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Cuando no responde al tratamiento médico',
      title: 'Señales de que algo se está complicando',
      cards: [
        { title: 'Falla del tratamiento', tag: 'Persistencia más de 48 a 72 h', kind: 'alert', items: [
          { t: 'Fiebre o dolor que no ceden', d: 'Repetir el TAC de abdomen',
            say: 'Ahora, ¿qué haces si el paciente no mejora con antibióticos? Si la fiebre o el dolor persisten más de cuarenta y ocho a setenta y dos horas, repites el TAC, porque puede haber progresado de un flemón a un absceso, o a una perforación.' },
        ] },
        { title: 'Signos de alarma inmediata', tag: 'No esperes el TAC de control', kind: 'criteria', items: [
          { t: 'Inestabilidad hemodinámica', d: 'Presión baja, lactato elevado',
            say: 'Y hay señales que no esperan ningún control: presión arterial baja, lactato elevado, o un abdomen que pasa de doloroso localizado a un abdomen en tabla generalizado. Ahí no repites examen, activas cirugía de inmediato.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora ordenemos todo en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que más se confunde en diverticulitis',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Sospecha de diverticulitis aguda', 'TAC de abdomen y pelvis con contraste', 'Pedir colonoscopía para confirmar'],
          say: 'Repasemos las trampas. Ante la sospecha, el examen es el TAC. El error más grave es pedir una colonoscopía para "confirmar": eso es justo lo que no se hace en agudo.' },
        { cells: ['Absceso menor a 4 cm (Hinchey Ib)', 'Antibióticos, sin drenar', 'Drenar cualquier colección pequeña'],
          say: 'Un absceso menor a cuatro centímetros responde solo con antibióticos. Drenar cualquier colección, por chica que sea, es intervencionismo de más.' },
        { cells: ['Absceso de 4 cm o más (Hinchey II)', 'Drenaje percutáneo guiado por TAC', 'Operar de urgencia igual'],
          say: 'Con cuatro centímetros o más, el drenaje percutáneo es lo indicado. Operar de urgencia igual, cuando el drenaje pudo evitarlo, te deja con una colostomía innecesaria.' },
        { cells: ['Peritonitis generalizada (Hinchey III-IV)', 'Operación de Hartmann', 'Insistir en manejo médico'],
          say: 'Con peritonitis generalizada, la cirugía no espera. Insistir en manejo médico aquí solo empeora la sepsis.' },
        { cells: ['Alta tras el episodio agudo', 'Colonoscopía a las 6 a 8 semanas', 'No estudiar más el colon'],
          say: 'Y al alta, siempre programas la colonoscopía diferida. No estudiar más el colon, pensando que el TAC ya lo dijo todo, deja pasar un cáncer.' },
        { cells: ['Paciente inmunosuprimido', 'Umbral bajo para hospitalizar y operar', 'Confiar en que no tiene fiebre'],
          say: 'Y en el inmunosuprimido, el umbral para hospitalizar y para operar es bajo. Confiar en que está bien porque no tiene fiebre es la trampa: puede tener una perforación seria y no mostrar ningún signo inflamatorio clásico.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 68 años consulta por 3 días de dolor progresivo en la fosa ilíaca izquierda, con fiebre de 38 grados y constipación. Al examen: resistencia muscular localizada en esa zona, sin masa palpable. Leucocitos 14.800.',
      question: '¿Cuál es el examen más adecuado para continuar el estudio?',
      options: [
        { letter: 'A', text: 'Colonoscopía para visualizar directamente el colon' },
        { letter: 'B', text: 'TAC de abdomen y pelvis con contraste intravenoso' },
        { letter: 'C', text: 'Enema baritado para evaluar los divertículos' },
        { letter: 'D', text: 'Radiografía simple de abdomen de pie' },
        { letter: 'E', text: 'Ecografía transvaginal para descartar causa ginecológica' },
      ],
      correct: 'B',
      explanation: 'Cuadro clásico de diverticulitis aguda: dolor progresivo en FII con fiebre y leucocitosis en una adulta mayor. El TAC de abdomen y pelvis con contraste es el examen de elección para confirmar el diagnóstico y etapificar según Hinchey. La colonoscopía y el enema baritado están contraindicados en la fase aguda por riesgo de perforación.',
      say: {
        stem: 'Vamos con un caso. Mujer de sesenta y ocho años, con tres días de dolor progresivo en la fosa ilíaca izquierda, fiebre de treinta y ocho grados y constipación. Al examen, resistencia muscular localizada en esa zona, sin masa palpable. Catorce mil ochocientos leucocitos.',
        question: '¿Cuál es el examen más adecuado para continuar el estudio?',
        options: 'Tienes cinco opciones: colonoscopía para ver el colon directamente, TAC de abdomen y pelvis con contraste, enema baritado, radiografía simple de abdomen, o ecografía transvaginal. Piénsalo.',
        answer: 'Es la B. El cuadro es una diverticulitis aguda clásica, y el examen de elección para confirmarla y etapificarla es el TAC. La colonoscopía y el enema baritado son justamente los que están contraindicados en esta fase: el riesgo de perforar una microperforación ya existente es demasiado alto. La ecografía transvaginal solo tendría sentido si la clínica ginecológica fuera más sugerente, y aquí no lo es.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 34',
      stem: 'Un paciente se realiza una colonoscopía para la resección de unos pólipos intestinales. Algunas horas después presenta dolor abdominal bajo, asociado a hematoquezia escasa y malestar general. Al examen físico presenta dolor a la palpación de la fosa ilíaca izquierda.',
      question: '¿Qué examen es el más adecuado para proseguir con el estudio en este paciente?',
      options: [
        { letter: 'A', text: 'Resonancia magnética nuclear de abdomen y pelvis' },
        { letter: 'B', text: 'Ecografía abdominal y pélvica' },
        { letter: 'C', text: 'Colonoscopía' },
        { letter: 'D', text: 'Radiografía de abdomen y pelvis' },
        { letter: 'E', text: 'TAC de abdomen y pelvis' },
      ],
      correct: 'E',
      explanation: 'Diverticulitis aguda post-colonoscópica: el dolor en la fosa ilíaca izquierda que aparece horas después de una colonoscopía con manipulación de pólipos orienta a una perforación diverticular iatrogénica. El TAC de abdomen y pelvis es el examen de elección; repetir la colonoscopía está absolutamente contraindicado en este contexto agudo.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil quince. Un paciente se hace una colonoscopía para resecar unos pólipos. Algunas horas después, tiene dolor abdominal bajo, con algo de sangre en las deposiciones y malestar general. Al examen, duele la fosa ilíaca izquierda.',
        question: '¿Qué examen es el más adecuado para proseguir con el estudio en este paciente?',
        options: 'Las opciones son: resonancia magnética de abdomen y pelvis, ecografía abdominal y pélvica, colonoscopía, radiografía de abdomen y pelvis, o TAC de abdomen y pelvis.',
        answer: 'Es la E, TAC. Esta pregunta pone a prueba justo la regla de oro del tema: nunca repites la colonoscopía cuando sospechas una diverticulitis aguda, así sea que la sospecha nació de la colonoscopía misma. Volver a insuflar aire ahí es el error más peligroso que puedes cometer.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 169',
      stem: 'Un paciente de 68 años consulta por dolor abdominal bajo, asociado a fiebre, mayor en el cuadrante inferior izquierdo. Temperatura 37,7 grados, frecuencia cardíaca 94, presión arterial 110/76. Abdomen doloroso a la palpación, con marcada resistencia muscular en la fosa ilíaca izquierda y disminución de los ruidos hidroaéreos.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Diverticulitis aguda' },
        { letter: 'B', text: 'Colitis isquémica' },
        { letter: 'C', text: 'Apendicitis aguda' },
        { letter: 'D', text: 'Vólvulo de sigmoides' },
        { letter: 'E', text: 'Cáncer de colon complicado' },
      ],
      correct: 'A',
      explanation: 'Dolor y fiebre localizados en la fosa ilíaca izquierda, con resistencia muscular y ruidos hidroaéreos disminuidos por el íleo reflejo local, en un adulto mayor: presentación clásica de diverticulitis aguda, la "apendicitis izquierda".',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil diecinueve. Paciente de sesenta y ocho años, con dolor abdominal bajo y fiebre, mayor en el cuadrante inferior izquierdo. Temperatura de treinta y siete coma siete, abdomen doloroso con resistencia muscular marcada en la fosa ilíaca izquierda y ruidos hidroaéreos disminuidos.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: diverticulitis aguda, colitis isquémica, apendicitis aguda, vólvulo de sigmoides, o cáncer de colon complicado. Piénsalo.',
        answer: 'Es la A. La localización en la fosa ilíaca izquierda ya casi cierra el diagnóstico: es exactamente lo que llamamos la apendicitis izquierda. La colitis isquémica suele doler más difuso y en pacientes con enfermedad vascular; el vólvulo da distensión masiva, no este dolor focal con resistencia; y el cáncer de colon complicado no suele debutar con fiebre tan marcada desde el inicio.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'El TAC manda', kind: 'key', items: [
          { t: 'TAC con contraste', d: 'Etapifica con Hinchey',
            say: 'Cerremos con las reglas de oro. Ante la sospecha, siempre TAC con contraste, y ahí etapificas con Hinchey.' },
        ] },
        { title: 'Tratamiento', tag: 'Según el Hinchey', kind: 'pharma', items: [
          { t: 'Sin absceso: antibióticos', d: 'Más del 90% resuelve sin cirugía',
            say: 'Sin absceso, antibióticos y nada más. Con absceso de cuatro centímetros o más, drenaje percutáneo. Y con peritonitis generalizada, Hartmann de urgencia.' },
        ] },
        { title: 'Lo que nunca olvidas', tag: 'Contraindicada, y luego obligatoria', kind: 'alert', items: [
          { t: 'Colonoscopía: no en agudo', d: 'Sí, obligatoria, a las 6 a 8 semanas',
            say: 'Y la colonoscopía: nunca en la fase aguda, y siempre a las seis u ocho semanas después. Si te llevas una sola idea de hoy: en diverticulitis, el TAC diagnostica y el tiempo decide cuándo mirar adentro con el endoscopio. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Diverticulitis aguda: del TAC a la conducta',
    root: N('start', 'Sospecha de diverticulitis', 'Dolor progresivo en la FII, con fiebre',
      'Llega un paciente con dolor en la fosa ilíaca izquierda y fiebre. Antes de pensar en endoscopía, pide un TAC de abdomen y pelvis con contraste.',
      ['', N('q', '¿Qué muestra el TAC?', 'La clasificación de Hinchey decide todo',
        'El TAC te dice si hay solo inflamación, un absceso, o una peritonitis ya establecida.',
        ['Hinchey 0 o Ia, sin colección', N('ok', 'Manejo médico', 'Reposo digestivo y antibióticos',
          'Sin absceso ni peritonitis, el tratamiento es médico: antibióticos, y la gran mayoría resuelve sin cirugía.')],
        ['Hinchey Ib o II, absceso', N('q', '¿El absceso mide 4 cm o más?', 'El tamaño decide si drenas',
          'Un absceso pequeño puede resolver solo con antibióticos; uno grande necesita drenaje.',
          ['Menor a 4 cm', N('ok', 'Antibióticos, sin drenar', 'Vigilancia con TAC si persiste la fiebre',
            'Los abscesos pequeños responden bien a antibióticos solos, sin necesidad de intervencionismo.')],
          ['4 cm o más', N('refer', 'Drenaje percutáneo', 'Guiado por TAC, evita la cirugía de urgencia',
            'El drenaje percutáneo controla el foco y permite operar después, de forma electiva y sin colostomía.')])],
        ['Hinchey III o IV, peritonitis', N('alert', 'Operación de Hartmann', 'Cirugía de urgencia inaplazable',
          'Con peritonitis purulenta o fecaloidea generalizada, la cirugía de urgencia ya no se puede posponer.')])],
      ['', N('q', '¿Ya se resolvió el episodio agudo?', 'No olvides el paso final',
        'Una vez resuelto el cuadro, todavía falta descartar lo que puede estar escondido detrás.',
        ['Sí, en 6 a 8 semanas', N('do', 'Colonoscopía total', 'Descartar cáncer de colon',
          'La colonoscopía diferida es obligatoria: hasta un cinco por ciento de los cuadros iniciales resultan ser un cáncer de colon.')])]),
  },
};
