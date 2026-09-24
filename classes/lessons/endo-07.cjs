// Clase 7.7 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_endocrinologia.cjs (endo-07).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'endo-07',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Fármacos, radioyodo o cirugía: qué se elige, cuándo, y qué se exige antes',
      say: 'Bienvenidos. En la clase anterior diagnosticamos el hipertiroidismo; hoy decidimos cómo tratarlo. Hay tres caminos: fármacos, radioyodo y cirugía. El examen no pregunta cuál es mejor en general, sino cuál corresponde a cada paciente, y qué hay que hacer antes de cada uno. Partamos.',
    },

    {
      type: 'points',
      kicker: 'Fármacos',
      title: 'Tiamazol versus propiltiouracilo',
      cards: [
        { title: 'Tiamazol', tag: 'Primera elección', kind: 'pharma', items: [
          { t: 'Una toma diaria, 10 a 30 mg', d: 'Vida media larga, más potente',
            say: 'Empecemos por los fármacos. El tiamazol es el de primera elección en Chile para la enfermedad de Graves. Tiene vida media larga, así que basta una sola toma diaria de diez a treinta miligramos, y es más potente miligramo a miligramo.' },
          { t: 'Mejor tolerado', d: 'Menos riesgo de falla hepática fulminante',
            say: 'Y se tolera mejor: el riesgo de falla hepática fulminante es mucho menor que con el propiltiouracilo.' },
          { t: 'Remisión en 40 a 50 %', d: 'La otra mitad recae',
            say: 'Su gran ventaja es que conserva la glándula. Su límite: logra la remisión en cerca de cuarenta a cincuenta por ciento, y la otra mitad recae. Esa recaída es la que después nos lleva al radioyodo.' },
        ] },
        { title: 'Propiltiouracilo', tag: 'Solo dos escenarios', kind: 'alert', items: [
          { t: '50 a 100 mg cada 8 horas', d: 'Vida media corta',
            say: 'El propiltiouracilo tiene vida media corta y se da cincuenta a cien miligramos cada ocho horas.' },
          { t: 'Primer trimestre y tormenta', d: 'Bloquea también la conversión de T4 a T3',
            say: 'Y queda acotado a dos escenarios: el primer trimestre del embarazo, para evitar la embriopatía del tiamazol, y la tormenta tiroidea, porque además frena la conversión periférica de T cuatro a T tres.' },
          { t: 'Ambos: agranulocitosis', d: 'Y el PTU, hepatitis fulminante',
            say: 'Los dos comparten el riesgo de agranulocitosis, que vimos la clase pasada. El PTU suma el de hepatitis fulminante.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Decisión',
      title: '¿Quién necesita un tratamiento definitivo?',
      nodes: [
        { id: 'hip', col: 0, row: 2, k: 'start', t: 'Hipertiroidismo confirmado', s: 'Betabloqueo si hay síntomas' },
        { id: 'gra', col: 1, row: 1, k: 'good', t: 'Graves, primer episodio', s: 'Tiamazol 12 a 18 meses' },
        { id: 'nod', col: 1, row: 3, k: 'risk', t: 'BMNT o adenoma tóxico', s: 'No remiten con fármacos' },
        { id: 'rec', col: 2, row: 1, k: 'risk', t: 'Recidiva', s: 'Tras ciclo completo' },
        { id: 'def', col: 3, row: 2, k: 'q', t: 'Tratamiento definitivo', s: '¿Radioyodo o cirugía?' },
      ],
      edges: [
        { from: 'hip', to: 'gra', label: 'Graves' },
        { from: 'hip', to: 'nod', label: 'nodular' },
        { from: 'gra', to: 'rec', label: 'si recae' },
        { from: 'rec', to: 'def' },
        { from: 'nod', to: 'def', label: 'obligatorio' },
      ],
      steps: [
        { show: ['hip'], note: 'El betabloqueo va desde el primer día',
          say: 'Veamos la lógica de la decisión. Confirmado el hipertiroidismo, si el paciente tiene síntomas adrenérgicos, se inicia betabloqueo con propranolol o atenolol, sea cual sea el camino que elijas después.' },
        { show: ['gra'], note: 'En Graves, primero se intenta con fármacos',
          say: 'Si es un primer episodio de Graves, sobre todo en un paciente joven, se parte con tiamazol por doce a dieciocho meses, esperando la remisión.' },
        { show: ['rec'], note: 'La recaída cambia el plan',
          say: 'Si después de un ciclo completo el paciente recae, ya no insistimos con otro ciclo largo: pasamos a un tratamiento definitivo.' },
        { show: ['nod'], note: 'Lo nodular no remite',
          say: 'Ahora, el bocio multinodular tóxico y el adenoma tóxico son otra historia. Se deben a mutaciones del receptor, no a un anticuerpo, y no logran remisión a largo plazo con fármacos. Por eso el tratamiento definitivo es obligatorio desde el comienzo.' },
        { show: ['def'], note: 'Dos opciones, y cada una tiene sus indicaciones',
          say: 'Y el tratamiento definitivo tiene dos opciones: radioyodo o cirugía. Veamos cuándo corresponde cada uno.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Radioyodo',
      title: 'Radioyodo: indicaciones y reglas de seguridad',
      cards: [
        { title: 'Cómo actúa y a quién', tag: 'Elección en Chile', kind: 'pharma', items: [
          { t: 'Radiación beta sobre los folículos', d: 'Efecto en 6 a 16 semanas',
            say: 'El radioyodo se toma por vía oral, la tiroides lo capta, y su radiación beta destruye de forma selectiva el tejido que está funcionando de más, en un plazo de seis a dieciséis semanas.' },
          { t: 'Recidiva de Graves, BMNT, adenoma tóxico', d: 'O contraindicación quirúrgica',
            say: 'Es el tratamiento de elección en Chile para la recidiva de Graves, para el bocio multinodular tóxico y el adenoma tóxico, y para el paciente cuyas comorbilidades contraindican la cirugía.' },
        ] },
        { title: 'Contraindicaciones', tag: 'Se pregunta', kind: 'alert', items: [
          { t: 'Embarazo y lactancia: absolutas', d: 'Beta-hCG negativa antes de la dosis',
            say: 'Las contraindicaciones absolutas son el embarazo y la lactancia. Por eso toda mujer en edad fértil necesita una beta-hCG negativa antes de la dosis.' },
          { t: 'Anticoncepción por 6 meses', d: 'Antes de buscar embarazo',
            say: 'Y debe usar anticoncepción eficaz por al menos seis meses después, antes de buscar un embarazo.' },
          { t: 'Orbitopatía activa: corticoide', d: 'El radioyodo la puede empeorar',
            say: 'Si hay orbitopatía activa moderada a grave, el radioyodo la puede empeorar, y exige corticoterapia profiláctica al mismo tiempo.' },
        ] },
        { title: 'El resultado esperado', tag: 'No es una falla', kind: 'key', items: [
          { t: 'Hipotiroidismo en más del 80 a 90 %', d: 'Levotiroxina de por vida',
            say: 'Y el concepto que más se pregunta: la mayoría queda hipotiroidea, más del ochenta a noventa por ciento. Eso no es una complicación ni un fracaso; es el objetivo. Cambiamos una enfermedad difícil de controlar por una que se maneja con una pastilla de levotiroxina al día.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Cirugía',
      title: '¿Cuándo la cirugía va primero?',
      cards: [
        { title: 'Indicaciones', tag: 'Tiroidectomía total', kind: 'criteria', items: [
          { t: 'Síntomas compresivos', d: 'Disfagia, disfonía, estridor, compresión traqueal',
            say: 'La cirugía va primero cuando hay compresión: disfagia, disfonía, estridor, o compresión traqueal demostrada en el TAC. Un bocio que aprieta no se trata esperando semanas a que haga efecto el radioyodo.' },
          { t: 'Bocio mayor a 80 g', d: 'Bocio masivo',
            say: 'Cuando el bocio es masivo, sobre ochenta gramos.' },
          { t: 'Nódulo sospechoso de cáncer', d: 'Bethesda IV, V o VI',
            say: 'Cuando coexiste un nódulo sospechoso de malignidad, con citología Bethesda cuatro, cinco o seis. Eso lo veremos en la clase de nódulo tiroideo.' },
          { t: 'Orbitopatía moderada a severa', d: 'Si se rechaza o contraindica el radioyodo',
            say: 'Y en la orbitopatía moderada a severa, cuando el radioyodo se rechaza o está contraindicado.' },
        ] },
        { title: 'Ventaja', tag: 'Resolución inmediata', kind: 'key', items: [
          { t: 'Resuelve de inmediato', d: 'Ideal en bocios gigantes',
            say: 'Su gran ventaja es la resolución inmediata. Y, como el radioyodo, deja al paciente hipotiroideo, con levotiroxina de por vida.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Preparación quirúrgica',
      title: 'Antes de pabellón: tiamazol y Lugol',
      nodes: [
        { id: 'rie', col: 0, row: 1, k: 'risk', t: 'Operar a un tirotóxico', s: 'Riesgo de tormenta intraoperatoria' },
        { id: 'tia', col: 1, row: 0, k: 'good', t: 'Tiamazol', s: 'Hasta normalizar la T4L' },
        { id: 'lug', col: 1, row: 2, k: 'good', t: 'Lugol 7 a 10 días antes', s: '3 a 5 gotas cada 8 horas' },
        { id: 'wc', col: 2, row: 2, k: 'mech', t: 'Efecto Wolff-Chaikoff', s: 'Frena la secreción y la vascularización' },
        { id: 'pab', col: 3, row: 1, k: 'good', t: 'Cirugía segura', s: 'Eutiroideo y con menos sangrado' },
      ],
      edges: [
        { from: 'rie', to: 'tia', label: 'primero' },
        { from: 'rie', to: 'lug', label: 'además' },
        { from: 'lug', to: 'wc' },
        { from: 'tia', to: 'pab' },
        { from: 'wc', to: 'pab' },
      ],
      steps: [
        { show: ['rie'], note: 'Manipular una glándula tóxica la vacía en la sangre',
          say: 'Esta es una regla EUNACOM. Si operas a un paciente tirotóxico, la manipulación de la glándula libera hormona a la sangre y puede desencadenar una tormenta tiroidea en pabellón.' },
        { show: ['tia'], note: 'Llegar eutiroideo es obligatorio',
          say: 'Por eso el paciente debe llegar en eutiroidismo químico: se da tiamazol hasta normalizar la T cuatro libre.' },
        { show: ['lug'], note: 'Siete a diez días, no más',
          say: 'Y además, siete a diez días antes de la cirugía, se indica solución de Lugol o solución saturada de yoduro de potasio, tres a cinco gotas cada ocho horas.' },
        { show: ['wc'], note: 'Mucho yodo frena la glándula',
          say: '¿Por qué yodo, si es un hipertiroidismo? Porque una dosis alta de yodo frena de forma transitoria la secreción de hormona, el efecto Wolff-Chaikoff, y además reduce mucho la vascularización de la glándula.' },
        { show: ['pab'], note: 'Menos riesgo de tormenta y de hemorragia',
          say: 'El resultado es un paciente eutiroideo, con una tiroides menos vascularizada: menos riesgo de tormenta y menos sangrado en la cirugía.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Seguimiento',
      title: 'Complicaciones y controles',
      cards: [
        { title: 'Complicaciones de la tiroidectomía', tag: 'Se preguntan', kind: 'alert', items: [
          { t: 'Hipoparatiroidismo', d: 'Hipocalcemia; permanente en 1 a 2 %',
            say: 'La tiroidectomía tiene dos complicaciones que tienes que reconocer. La primera es el hipoparatiroidismo, por extirpación o isquemia de las paratiroides, que se manifiesta como hipocalcemia. Puede ser transitorio, y es permanente en uno a dos por ciento.' },
          { t: 'Lesión del nervio laríngeo recurrente', d: 'Disfonía',
            say: 'La segunda es la lesión del nervio laríngeo recurrente, que se manifiesta como disfonía.' },
        ] },
        { title: 'Controles', tag: 'Cada terapia', kind: 'normal', items: [
          { t: 'Tiamazol: perfil a las 4 a 6 semanas', d: 'Con T4L',
            say: 'Y los controles: con fármacos, perfil tiroideo a las cuatro a seis semanas de iniciar.' },
          { t: 'Radioyodo o cirugía: TSH anual', d: 'Para pesquisar el hipotiroidismo',
            say: 'Después de radioyodo o cirugía, TSH al menos anual, porque el hipotiroidismo es la regla, y hay que tratarlo apenas aparezca.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Pongamos todo en un árbol, como vas a razonar frente al enunciado.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las tres modalidades, comparadas',
      head: ['Modalidad', 'Riesgo clave', 'Indicación EUNACOM'],
      rows: [
        { cells: ['Tiamazol', 'Agranulocitosis; recidiva ~50 %', 'Primer episodio de Graves; preparación quirúrgica'],
          say: 'Repasemos. Tiamazol: su riesgo clave es la agranulocitosis y la recidiva de la mitad. Se usa en el primer episodio de Graves y para preparar la cirugía.' },
        { cells: ['Propiltiouracilo', 'Hepatitis fulminante', 'Primer trimestre del embarazo; tormenta tiroidea'],
          say: 'Propiltiouracilo: riesgo de hepatitis fulminante. Solo primer trimestre y tormenta.' },
        { cells: ['Radioyodo', 'Hipotiroidismo > 80 %; empeora orbitopatía activa', 'Recidiva de Graves, BMNT, adenoma tóxico, alto riesgo quirúrgico'],
          say: 'Radioyodo: deja hipotiroidismo, que es lo esperado, y puede empeorar la orbitopatía activa. Se usa en la recidiva de Graves, en el bocio multinodular, en el adenoma tóxico y en el paciente de alto riesgo quirúrgico. Y nunca en embarazo ni lactancia.' },
        { cells: ['Tiroidectomía total', 'Hipoparatiroidismo; nervio laríngeo recurrente', 'Bocio > 80 g o compresivo, sospecha de cáncer, orbitopatía severa'],
          say: 'Tiroidectomía total: hipoparatiroidismo y lesión del recurrente. Se usa en el bocio grande o compresivo, en la sospecha de cáncer y en la orbitopatía severa, siempre preparada con tiamazol y Lugol.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 34 años con enfermedad de Graves que recae 6 meses después de completar 18 meses de tiamazol. No fuma y no tiene orbitopatía. Tiroides de 35 g sin nódulos. Planea su primer embarazo el próximo año. Se decide tratamiento con radioyodo.',
      question: '¿Cuál es la indicación más importante asociada a esta terapia?',
      options: [
        { letter: 'A', text: 'Prednisona profiláctica por 6 semanas' },
        { letter: 'B', text: 'Beta-hCG negativa antes de la dosis y anticoncepción eficaz por al menos 6 meses' },
        { letter: 'C', text: 'Solución de Lugol 7 a 10 días antes del radioyodo' },
        { letter: 'D', text: 'Suspender el radioyodo y reiniciar tiamazol hasta después del embarazo' },
        { letter: 'E', text: 'Evitar la levotiroxina después del tratamiento para no interferir con el embarazo' },
      ],
      correct: 'B',
      explanation: 'Recidiva de Graves sin orbitopatía ni bocio compresivo: el radioyodo es una buena opción. Por el deseo de embarazo, lo fundamental es descartar embarazo actual (beta-hCG negativa) y asegurar anticoncepción al menos 6 meses después de la dosis. La prednisona profiláctica es para la orbitopatía activa; el Lugol es la preparación de la cirugía.',
      say: {
        stem: 'Vamos al caso. Mujer de treinta y cuatro años con Graves, que recae seis meses después de completar dieciocho meses de tiamazol. No fuma, no tiene orbitopatía, y su tiroides es de treinta y cinco gramos, sin nódulos. Quiere embarazarse el próximo año, y se decide radioyodo.',
        question: '¿Cuál es la indicación más importante asociada a esta terapia?',
        options: 'Las alternativas: prednisona profiláctica, beta-hCG negativa y anticoncepción por seis meses, Lugol antes del radioyodo, volver al tiamazol, o evitar la levotiroxina después. Piénsalo.',
        answer: 'Es la B. Recidiva, sin orbitopatía y sin bocio compresivo: el radioyodo está bien indicado. Y como quiere embarazarse, lo fundamental es descartar un embarazo actual y asegurar anticoncepción por al menos seis meses. La prednisona es tentadora, pero es para la orbitopatía activa, y ella no tiene. El Lugol pertenece a la preparación de la cirugía. Y la levotiroxina la va a necesitar, justamente para embarazarse eutiroidea.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 82',
      stem: 'Una mujer de 29 años, con antecedente de tiroidectomía por cáncer de tiroides hace 5 meses, consulta por síntomas de una semana de evolución, consistentes en astenia, nerviosismo y palpitaciones, que han ido en aumento. Además, el día de hoy presentó convulsiones en una oportunidad, por lo que fue traída al Servicio de Urgencia. Al examen físico está en Glasgow 15, sin convulsiones actuales ni focalidad neurológica. Se solicitan exámenes de laboratorio, entre los que destacan glicemia: 120 mg/dl, potasemia: 4,0 mEq/l, natremia: 144 mEq/L, calcemia 6,3 mg/dl, fósforo: 5,5 mg/dl, albúmina: 3,9 g/dl y hematocrito: 48%.',
      question: '¿Cuál es la conducta inicial más adecuada en esta paciente?',
      options: [
        { letter: 'A', text: 'Administrar suero fisiológico' },
        { letter: 'B', text: 'Solicitar TAC de cerebro' },
        { letter: 'C', text: 'Administrar calcio endovenoso' },
        { letter: 'D', text: 'Administrar lorazepam endovenoso' },
        { letter: 'E', text: 'Administrar calcitonina' },
      ],
      correct: 'C',
      explanation: 'Tiroidectomía reciente, calcio bajo con fósforo alto y albúmina normal: hipocalcemia por hipoparatiroidismo postquirúrgico, sintomática (convulsión). La conducta inicial es gluconato de calcio endovenoso.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil veinticuatro, sobre la complicación que acabamos de ver. Mujer de veintinueve años, operada de la tiroides hace cinco meses. Tiene una semana de astenia, nerviosismo y palpitaciones, y hoy convulsionó. Está lúcida y sin focalidad. En los exámenes, calcio de seis coma tres, fósforo alto y albúmina normal.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: suero fisiológico, TAC de cerebro, calcio endovenoso, lorazepam endovenoso, o calcitonina. Piénsalo.',
        answer: 'Es la C, calcio endovenoso. Tiroidectomía previa, calcio bajo con fósforo alto y albúmina normal: hipoparatiroidismo postquirúrgico, y la convulsión lo hace una urgencia. Se trata con gluconato de calcio endovenoso, que verás en detalle en la clase de hipocalcemia. El distractor es el nerviosismo y las palpitaciones, que te empujan a pensar en la tiroides; pero lo que explica la convulsión es el calcio.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Paciente de 38 años con enfermedad de Graves y bocio difuso de 120 g con compresión traqueal sintomática, programado para tiroidectomía total. Está eutiroideo con tiamazol 20 mg/día. Se busca reducir la vascularización glandular y el sangrado operatorio.',
      question: '¿Cuál es la medida farmacológica recomendada en los 7 a 10 días previos a la cirugía?',
      options: [
        { letter: 'A', text: 'Solución de Lugol oral, 3 a 5 gotas cada 8 horas' },
        { letter: 'B', text: 'Suspender el tiamazol e iniciar propiltiouracilo a dosis altas' },
        { letter: 'C', text: 'Una dosis baja de radioyodo 48 horas antes de la incisión' },
        { letter: 'D', text: 'Anticoagulación plena con heparina de bajo peso molecular' },
        { letter: 'E', text: 'Carbonato de litio para aumentar la captación de hormonas' },
      ],
      correct: 'A',
      explanation: 'La solución de Lugol (o SSKI) 7 a 10 días antes de la tiroidectomía produce el efecto Wolff-Chaikoff transitorio y disminuye el flujo sanguíneo glandular, reduciendo el riesgo de tormenta y de hemorragia intraoperatoria.',
      say: {
        stem: 'Y ahora una pregunta del banco EUNACOM. Paciente de treinta y ocho años con Graves y un bocio difuso de ciento veinte gramos que comprime la tráquea. Está eutiroideo con tiamazol y será operado.',
        question: '¿Qué medida farmacológica se recomienda en los siete a diez días previos a la cirugía?',
        options: 'Las opciones: solución de Lugol, cambiar a propiltiouracilo, una dosis de radioyodo, anticoagulación, o litio. Piénsalo.',
        answer: 'Es la A, solución de Lugol. Bocio de ciento veinte gramos que comprime: la indicación de cirugía es clara. El paciente ya está eutiroideo, así que falta el segundo paso de la preparación: el yodo en dosis alta, que frena la secreción y colapsa la vascularización. Cambiar a PTU no agrega nada, porque ya está eutiroideo con tiamazol, y el radioyodo no tiene ningún papel antes de una cirugía.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Paciente de 42 años con bocio multinodular tóxico de 45 g, sin síntomas compresivos, con paridad completa y sin deseo de embarazo. Se le propone tratamiento ablativo con radioyodo.',
      question: '¿Cuál de las siguientes afirmaciones respecto a esta terapia es correcta?',
      options: [
        { letter: 'A', text: 'La probabilidad de remisión completa sin requerir levotiroxina es superior al 95 %' },
        { letter: 'B', text: 'El resultado esperado más frecuente a largo plazo es el hipotiroidismo permanente, que requiere suplementación de por vida' },
        { letter: 'C', text: 'Puede amamantar sin restricciones a su hijo lactante el día posterior al radioyodo' },
        { letter: 'D', text: 'El radioyodo está contraindicado porque el bocio multinodular responde solo a tiamazol de por vida' },
        { letter: 'E', text: 'Debe asociarse a dosis altas de aspirina para potenciar la fijación del isótopo' },
      ],
      correct: 'B',
      explanation: 'Más del 80 % de los pacientes tratados con radioyodo desarrolla hipotiroidismo permanente: no es un fracaso, sino la consecuencia esperada de la ablación. Requiere controles de TSH y levotiroxina de por vida. La lactancia es contraindicación absoluta, y el BMNT no remite con fármacos.',
      say: {
        stem: 'Una más del banco EUNACOM. Paciente de cuarenta y dos años con bocio multinodular tóxico de cuarenta y cinco gramos, sin compresión, con paridad completa. Se le propone radioyodo.',
        question: '¿Cuál afirmación es correcta?',
        options: 'Las opciones: remisión sin levotiroxina en más del noventa y cinco por ciento, hipotiroidismo permanente como resultado esperado, lactancia sin restricciones al día siguiente, radioyodo contraindicado en el multinodular, o asociar aspirina. Piénsalo.',
        answer: 'Es la B. El resultado esperado del radioyodo es el hipotiroidismo permanente, y hay que advertírselo al paciente desde el comienzo. Por eso la alternativa A es exactamente al revés. La lactancia es una contraindicación absoluta, y el bocio multinodular es, al contrario de lo que dice la D, una de las mejores indicaciones del radioyodo, porque no remite con fármacos.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Fármacos', tag: 'Primera línea', kind: 'pharma', items: [
          { t: 'Tiamazol de elección', d: 'PTU: primer trimestre y tormenta',
            say: 'Cerremos con las reglas de oro. Tiamazol de elección; propiltiouracilo solo en el primer trimestre y en la tormenta.' },
          { t: 'Nodular: siempre definitivo', d: 'BMNT y adenoma tóxico no remiten',
            say: 'El bocio multinodular y el adenoma tóxico no remiten con fármacos: van a tratamiento definitivo.' },
        ] },
        { title: 'Radioyodo', tag: 'Reglas de seguridad', kind: 'alert', items: [
          { t: 'Nunca en embarazo ni lactancia', d: 'Anticoncepción por 6 meses',
            say: 'El radioyodo nunca en embarazo ni lactancia, y con anticoncepción por seis meses.' },
          { t: 'El hipotiroidismo es el objetivo', d: 'Levotiroxina de por vida',
            say: 'Y el hipotiroidismo después del radioyodo no es una falla: es el objetivo.' },
        ] },
        { title: 'Cirugía', tag: 'Preparación', kind: 'key', items: [
          { t: 'Eutiroideo + Lugol 7 a 10 días', d: 'Evita la tormenta y el sangrado',
            say: 'A pabellón se llega eutiroideo y con Lugol los siete a diez días previos. Si te llevas una sola idea de hoy: cada terapia tiene su paciente, y cada una exige algo antes, una beta-hCG para el radioyodo y el Lugol para la cirugía. En la próxima clase vemos qué pasa cuando todo esto falla: la tormenta tiroidea. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Hipertiroidismo: elegir el tratamiento',
    root: N('start', 'Hipertiroidismo confirmado', 'Betabloqueo si hay síntomas',
      'Paciente con hipertiroidismo confirmado. Si tiene síntomas adrenérgicos, parte el betabloqueo mientras decides.',
      ['', N('q', '¿Cuál es la causa?', 'Graves o nodular',
        'La primera pregunta es la causa, porque lo nodular no remite con fármacos.',
        ['Graves, primer episodio', N('ok', 'Tiamazol 12 a 18 meses', 'PTU si primer trimestre',
          'Primer episodio de Graves: tiamazol por doce a dieciocho meses, o propiltiouracilo si cursa el primer trimestre del embarazo.')],
        ['Recidiva o nodular', N('q', '¿Compresión, cáncer u orbitopatía severa?', 'O bocio mayor a 80 g',
          'Recidiva de Graves, bocio multinodular o adenoma tóxico: tratamiento definitivo. Ahora pregunta si hay compresión, bocio masivo, sospecha de cáncer u orbitopatía severa.',
          ['Sí', N('do', 'Tiroidectomía total', 'Tiamazol + Lugol 7 a 10 días',
            'Si hay alguno de ellos: tiroidectomía total, preparada con tiamazol hasta el eutiroidismo y Lugol los siete a diez días previos.')],
          ['No', N('q', '¿Embarazo o lactancia?', 'Contraindicación absoluta',
            'Si no hay ninguno, el radioyodo es la opción; pero antes, descarta embarazo y lactancia.',
            ['No', N('ok', 'Radioyodo', 'Anticoncepción 6 meses; TSH anual',
              'Sin embarazo ni lactancia: radioyodo, con anticoncepción por seis meses y TSH anual, porque vendrá el hipotiroidismo.')],
            ['Sí', N('alert', 'No dar radioyodo', 'Fármacos o cirugía',
              'Con embarazo o lactancia, el radioyodo está prohibido: se maneja con fármacos o, si hace falta, cirugía.')])])])]),
  },
};
