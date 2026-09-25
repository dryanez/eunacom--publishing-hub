// Clase 15.4 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_oftalmologia.cjs (oftal-04).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'oftal-04',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'La regla de oro que más se pregunta en oftalmología: jamás corticoides en la úlcera',
      say: 'Bienvenidos. Hoy llegamos a la córnea, el tejido más inervado del cuerpo, y por eso el más doloroso cuando se lesiona. Vamos a ver la queratitis herpética y la bacteriana, pero toda la clase gira en torno a una sola regla, la más rentable de toda la oftalmología: frente a una úlcera corneal, los corticoides tópicos están prohibidos. Vamos a entender por qué.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'La tríada protectora de la córnea',
      nodes: [
        { id: 'ner', col: 0, row: 1, k: 'cause', t: 'Córnea muy inervada', s: 'Nervio oftálmico, rama del trigémino' },
        { id: 'les', col: 1, row: 1, k: 'mech', t: 'Lesión epitelial o del estroma', s: 'Infección, trauma o químico' },
        { id: 'dol', col: 2, row: 0, k: 'effect', t: 'Dolor punzante intenso', s: 'Sensación de que algo corta el ojo' },
        { id: 'ble', col: 2, row: 1, k: 'effect', t: 'Blefarospasmo invencible', s: 'No puede abrir el párpado' },
        { id: 'fot', col: 2, row: 2, k: 'effect', t: 'Fotofobia y lagrimeo', s: 'Extremos' },
        { id: 'flu', col: 3, row: 1, k: 'good', t: 'Fluoresceína con luz azul', s: 'El examen que confirma la lesión' },
      ],
      edges: [
        { from: 'ner', to: 'les' }, { from: 'les', to: 'dol' }, { from: 'les', to: 'ble' }, { from: 'les', to: 'fot' },
        { from: 'dol', to: 'flu' }, { from: 'ble', to: 'flu' }, { from: 'fot', to: 'flu' },
      ],
      steps: [
        { show: ['ner'], note: 'El tejido más inervado del cuerpo',
          say: 'Partamos del mecanismo. La córnea es el tejido más densamente inervado del cuerpo, por el nervio oftálmico, la primera rama del trigémino.' },
        { show: ['les'], note: 'Por infección, trauma o químico',
          say: 'Por eso, cualquier lesión de su epitelio o de su estroma, ya sea por infección, trauma o un químico, desencadena una respuesta muy característica.' },
        { show: ['dol', 'ble', 'fot'], note: 'La tríada protectora',
          say: 'Es la tríada protectora de la córnea: dolor punzante intenso, como si algo cortara el ojo; blefarospasmo, una imposibilidad casi invencible de abrir el párpado; y fotofobia extrema con lagrimeo abundante. Se acompaña de inyección ciliar marcada, la que ya conoces de la primera clase.' },
        { show: ['flu'], note: 'El examen de cabecera en atención primaria',
          say: 'Con esa sospecha, el examen que confirma la lesión es la tinción con fluoresceína, mirada bajo luz azul de cobalto. Es el examen de cabecera en atención primaria, y de ahí sale el diagnóstico.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Queratitis herpética',
      title: 'La úlcera dendrítica: patognomónica',
      cards: [
        { title: 'Cómo se ve', tag: 'Virus herpes simple tipo 1', kind: 'criteria', items: [
          { t: 'Lesión en forma de árbol o helecho', d: 'Con botones en los extremos',
            say: 'La causa más frecuente de ceguera corneal infecciosa en países desarrollados es el virus herpes simple tipo uno, que se reactiva desde el ganglio del trigémino por fiebre, estrés o inmunosupresión. La lesión que produce es patognomónica: la úlcera dendrítica, una lesión lineal y ramificada, en forma de árbol o de helecho, con pequeños botones en los extremos.' },
          { t: 'Hipoestesia corneal', d: 'La córnea pierde sensibilidad al tacto',
            say: 'Y un dato que se pregunta: la córnea queda hipoestésica, pierde la sensibilidad al tocarla con una torunda de algodón, justo lo opuesto de lo esperado en un ojo tan doloroso.' },
        ] },
        { title: 'Tratamiento', tag: 'Aciclovir tópico', kind: 'pharma', items: [
          { t: 'Pomada oftálmica al 3 por ciento', d: 'Cinco veces al día, por 10 a 14 días',
            say: 'El tratamiento es aciclovir en pomada oftálmica al tres por ciento, cinco veces al día, por diez a catorce días. En inmunodeprimidos se puede sumar aciclovir oral.' },
        ] },
        { title: 'La regla de oro', tag: 'Nunca corticoides', kind: 'alert', items: [
          { t: 'Frena la inmunidad local', d: 'Multiplica el virus y crea úlcera geográfica',
            say: 'Y aquí está la regla de oro de máxima rentabilidad de toda la oftalmología: los corticoides tópicos están estrictamente prohibidos. Frenan la inmunidad local, multiplican la replicación viral, y transforman esa dendrita pequeña en una úlcera geográfica gigante, con lisis del estroma y riesgo de perforación corneal permanente.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Queratitis bacteriana',
      title: 'Lentes de contacto y Pseudomonas',
      nodes: [
        { id: 'len', col: 0, row: 1, k: 'cause', t: 'Lentes de contacto blandos', s: 'Dormir con ellos, higiene con agua' },
        { id: 'pse', col: 1, row: 1, k: 'mech', t: 'Pseudomonas aeruginosa', s: 'Elastasas que destruyen la córnea' },
        { id: 'inf', col: 2, row: 0, k: 'risk', t: 'Infiltrado blanquecino denso', s: 'Con defecto epitelial encima' },
        { id: 'hip', col: 2, row: 2, k: 'risk', t: 'Hipopión precoz', s: 'Nivel de pus en la cámara anterior' },
        { id: 'ret', col: 3, row: 1, k: 'good', t: 'Retirar los lentes', s: 'Guardarlos para cultivo' },
        { id: 'atb', col: 4, row: 1, k: 'good', t: 'Antibióticos reforzados', s: 'Vancomicina más ceftazidima, o moxifloxacino' },
      ],
      edges: [
        { from: 'len', to: 'pse' }, { from: 'pse', to: 'inf' }, { from: 'pse', to: 'hip' },
        { from: 'inf', to: 'ret' }, { from: 'hip', to: 'ret' }, { from: 'ret', to: 'atb' },
      ],
      steps: [
        { show: ['len'], note: 'El factor de riesgo que se pregunta siempre',
          say: 'La otra gran causa de queratitis es bacteriana, y su principal factor de riesgo, el que siempre aparece en el enunciado, es el uso indebido de lentes de contacto blandos: dormir con ellos puestos, o lavarlos con agua corriente.' },
        { show: ['pse'], note: 'Altamente destructiva',
          say: 'El germen protagonista es Pseudomonas aeruginosa, que produce enzimas capaces de destruir la córnea con una rapidez enorme.' },
        { show: ['inf'], note: 'Infiltrado estromal denso',
          say: 'Da un infiltrado corneal blanquecino o amarillento, denso, con un defecto epitelial encima.' },
        { show: ['hip'], note: 'Nivel de pus en la cámara anterior',
          say: 'Y con frecuencia se forma hipopión de manera precoz, ese nivel de pus estéril en el fondo de la cámara anterior que ya conoces de la primera clase.' },
        { show: ['ret', 'atb'], note: 'Urgencia visual extrema',
          say: 'El manejo es retirar y guardar los lentes para cultivo, iniciar colirios antibióticos reforzados de amplio espectro, como vancomicina más ceftazidima, o una fluoroquinolona de cuarta generación como moxifloxacino, y derivar el mismo día. Y un detalle importante: este ojo nunca se ocluye con parche.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol: el patrón de tinción decide el camino.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Queratitis: el patrón que decide el tratamiento',
      head: ['Hallazgo', 'Diagnóstico', 'Trampa frecuente'],
      rows: [
        { cells: ['Úlcera dendrítica con botones terminales', 'Queratitis herpética', 'Indicar corticoide tópico'],
          say: 'Repasemos las trampas. Úlcera dendrítica con botones en los extremos: queratitis herpética, con aciclovir tópico. La trampa más grave de la clase es indicar un corticoide para desinflamar, que la transforma en una úlcera geográfica.' },
        { cells: ['Infiltrado blanco en usuario de lentes de contacto', 'Queratitis bacteriana por Pseudomonas', 'Ocluir el ojo con parche'],
          say: 'Infiltrado blanco en un usuario de lentes de contacto, con hipopión: queratitis por Pseudomonas, con antibióticos reforzados. La trampa es ocluir el ojo con un parche, que favorece que la bacteria siga creciendo.' },
        { cells: ['Dolor bilateral tras exposición a luz UV sin protección', 'Queratitis actínica', 'Usar anestésico tópico de forma repetida'],
          say: 'Dolor bilateral después de exponerse a luz ultravioleta sin protección, como un soldador: queratitis actínica, que cura sola en veinticuatro a cuarenta y ocho horas con lubricante. La trampa es que el paciente siga usando el anestésico tópico para el dolor, porque eso destruye el epitelio.' },
        { cells: ['Cualquier úlcera o infiltrado corneal', 'Derivación prioritaria a oftalmología', 'Tratar solo con antibiótico tópico sin derivar'],
          say: 'Y la regla general: cualquier úlcera o infiltrado corneal se deriva de forma prioritaria a oftalmología. Tratarlo solo en atención primaria, sin derivar, es siempre la respuesta incorrecta.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Joven de 28 años consulta por ojo derecho muy rojo, doloroso y con fotofobia intensa de 24 horas de evolución. Refiere antecedente de herpes labial recurrente. Al examen: inyección periquerática intensa. La tinción con fluoresceína bajo filtro azul de cobalto revela una úlcera epitelial ramificada, en forma de dendrita, con botones terminales en el tercio central de la córnea.',
      question: '¿Cuál es la conducta más adecuada en atención primaria?',
      options: [
        { letter: 'A', text: 'Aciclovir en pomada oftálmica al 3 por ciento, 5 veces al día, y derivar a oftalmología' },
        { letter: 'B', text: 'Colirio de dexametasona cada 4 horas y control en 1 semana' },
        { letter: 'C', text: 'Colirio de cloranfenicol y parche ocular oclusivo' },
        { letter: 'D', text: 'Colirio anestésico para el dolor y alta con reposo' },
        { letter: 'E', text: 'Colirio de ciprofloxacino reforzado y derivar en 1 semana' },
      ],
      correct: 'A',
      explanation: 'Úlcera dendrítica con botones terminales, en un paciente con antecedente de herpes labial, es queratitis herpética. El tratamiento correcto es aciclovir tópico y derivación a oftalmología; el corticoide está formalmente contraindicado, y ni el antibiótico ni el anestésico tópico repetido tienen un rol aquí.',
      say: {
        stem: 'Vamos al caso. Joven de veintiocho años, con ojo derecho muy rojo, doloroso y con fotofobia intensa, de un día de evolución. Tiene antecedente de herpes labial recurrente. Al examen: inyección periquerática intensa, y la fluoresceína bajo luz azul de cobalto muestra una úlcera ramificada, en forma de dendrita, con botones en los extremos, en el centro de la córnea.',
        question: '¿Cuál es la conducta más adecuada en atención primaria?',
        options: 'Las opciones: aciclovir en pomada y derivar, colirio de dexametasona con control en una semana, cloranfenicol con parche ocular, colirio anestésico y alta, o ciprofloxacino reforzado y derivar en una semana. Piénsalo.',
        answer: 'Es la A. La dendrita con botones, más el antecedente de herpes labial, no dejan duda: es queratitis herpética. Aciclovir tópico y derivación. La dexametasona es la trampa central de la clase: transformaría esta dendrita pequeña en una úlcera geográfica destructiva. Y el anestésico tópico repetido, aunque calme el dolor, destruye el epitelio corneal si se usa fuera del box de examen.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 107',
      stem: 'Una paciente miope, usuaria de lentes de contacto blando, consulta por dolor ocular izquierdo, asociado a epífora. Al examen muestra ojo rojo periquerático en el ojo izquierdo, con lagrimeo y una zona de opacidad corneal de 2,1 milímetros de diámetro.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Conjuntivitis bacteriana' },
        { letter: 'B', text: 'Úlcera corneal' },
        { letter: 'C', text: 'Uveítis aguda' },
        { letter: 'D', text: 'Glaucoma agudo' },
        { letter: 'E', text: 'Blefaritis' },
      ],
      correct: 'B',
      explanation: 'Usuaria de lentes de contacto con dolor ocular, inyección periquerática y una zona de opacidad corneal focal es una úlcera corneal, el diagnóstico que hay que sospechar siempre en portadores de lentes con ojo rojo doloroso. La conjuntivitis no da opacidad corneal ni dolor real; la uveítis y el glaucoma no explican la opacidad focal de la córnea.',
      say: {
        stem: 'Pregunta real, del EUNACOM de julio de dos mil quince. Paciente miope, usuaria de lentes de contacto blandos, con dolor en el ojo izquierdo y lagrimeo. Al examen: ojo rojo periquerático izquierdo, y una zona de opacidad corneal de poco más de dos milímetros de diámetro.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: conjuntivitis bacteriana, úlcera corneal, uveítis aguda, glaucoma agudo, o blefaritis.',
        answer: 'Es úlcera corneal. El dato que arma toda la pregunta es la usuaria de lentes de contacto con dolor real e inyección periquerática: eso ya te saca de la conjuntivitis, que no da ese tipo de dolor. Y la opacidad corneal focal es justamente el hallazgo que confirma que el problema está en la córnea, no en la úvea ni en la presión ocular.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 156',
      stem: 'Una paciente de 42 años consulta por dolor ocular derecho, asociado a ojo rojo que inició hace 5 horas y se ha vuelto muy intenso. Al examen físico, presenta epífora y ojo rojo derecho de tipo central. Como antecedente, tiene astigmatismo y es usuaria de lentes de contacto.',
      question: '¿Cuál de los siguientes exámenes es más adecuado para confirmar la sospecha diagnóstica?',
      options: [
        { letter: 'A', text: 'Fondo de ojo' },
        { letter: 'B', text: 'Tonometría ocular' },
        { letter: 'C', text: 'TAC de órbitas' },
        { letter: 'D', text: 'Tinción con fluoresceína' },
        { letter: 'E', text: 'Gonioscopía' },
      ],
      correct: 'D',
      explanation: 'Usuaria de lentes de contacto, con dolor ocular agudo, ojo rojo central y epífora: la sospecha es una queratitis o una erosión corneal. El examen que confirma la lesión epitelial de la córnea es la tinción con fluoresceína bajo luz azul de cobalto, no la tonometría ni la gonioscopía, que son propias del estudio del glaucoma.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Paciente de cuarenta y dos años, con dolor ocular derecho y ojo rojo que empezó hace cinco horas y se ha vuelto muy intenso, con lagrimeo. Tiene astigmatismo y usa lentes de contacto.',
        question: '¿Cuál de los siguientes exámenes es más adecuado para confirmar la sospecha diagnóstica?',
        options: 'Las opciones: fondo de ojo, tonometría ocular, tomografía de órbitas, tinción con fluoresceína, o gonioscopía.',
        answer: 'Es tinción con fluoresceína. Usuaria de lentes de contacto con dolor agudo es la misma alerta que ya conoces: sospecha de queratitis o erosión corneal. Y el examen que confirma esa lesión en atención primaria es siempre la fluoresceína bajo luz azul de cobalto. La tonometría y la gonioscopía son para el estudio del glaucoma, no de la córnea, así que son la trampa si mezclas los dos temas de esta unidad.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo · banco EUNACOM',
      stem: 'Un paciente de 35 años consulta por dolor ocular derecho punzante, fotofobia intensa y lagrimeo de 2 días de evolución. Al teñir la córnea con una gota de fluoresceína y observar bajo luz azul de cobalto, se aprecia una lesión epitelial corneal superficial de aspecto arborescente y ramificado, con extremos bulbosos.',
      question: '¿Cuál de los siguientes fármacos está formalmente contraindicado por el riesgo de inducir perforación corneal?',
      options: [
        { letter: 'A', text: 'Aciclovir ungüento oftálmico al 3 por ciento' },
        { letter: 'B', text: 'Ganciclovir gel oftálmico al 0,15 por ciento' },
        { letter: 'C', text: 'Dexametasona colirio oftálmico al 0,1 por ciento' },
        { letter: 'D', text: 'Ciclopentolato colirio al 1 por ciento' },
        { letter: 'E', text: 'Lágrimas artificiales de hialuronato de sodio' },
      ],
      correct: 'C',
      explanation: 'La lesión descrita, arborescente y con botones terminales, es una úlcera dendrítica herpética. Los corticoides tópicos, como la dexametasona, están terminantemente contraindicados: inhiben la inmunidad local, favorecen la replicación viral y pueden transformar la dendrita en una úlcera geográfica con perforación corneal.',
      say: {
        stem: 'Cerremos con un caso representativo del banco, pensado justo para fijar la regla de oro. Paciente de treinta y cinco años, con dolor ocular punzante, fotofobia intensa y lagrimeo de dos días. La fluoresceína bajo luz azul de cobalto muestra una lesión arborescente y ramificada, con extremos abultados.',
        question: '¿Cuál de los siguientes fármacos está formalmente contraindicado por el riesgo de inducir perforación corneal?',
        options: 'Las opciones: aciclovir en ungüento, ganciclovir en gel, dexametasona en colirio, ciclopentolato en colirio, o lágrimas artificiales. Piénsalo.',
        answer: 'Es la dexametasona. Es otra vez la dendrita herpética, y la pregunta esta vez no te pide el diagnóstico, te pide identificar lo prohibido. El aciclovir y el ganciclovir son tratamiento correcto; el ciclopentolato, un ciclopléjico, sirve para el dolor; y las lágrimas artificiales no hacen daño. El corticoide es el único que puede convertir esta úlcera pequeña en una perforación corneal.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'El examen que confirma', tag: 'Fluoresceína', kind: 'key', items: [
          { t: 'Luz azul de cobalto', d: 'El examen de cabecera ante dolor corneal',
            say: 'Cerremos con las reglas de oro. Ante dolor corneal, blefarospasmo y fotofobia, el examen de cabecera es la fluoresceína bajo luz azul de cobalto.' },
        ] },
        { title: 'Dos patrones, dos causas', tag: 'Dendrítica versus infiltrado', kind: 'criteria', items: [
          { t: 'Dendrítica con botones: herpética', d: 'Infiltrado blanco en lentes de contacto: bacteriana',
            say: 'Una úlcera dendrítica con botones en los extremos es herpética, con aciclovir tópico. Un infiltrado blanco denso en un usuario de lentes de contacto es bacteriana, casi siempre por Pseudomonas, con antibióticos reforzados y derivación el mismo día.' },
        ] },
        { title: 'La regla que nunca se rompe', tag: 'Corticoides', kind: 'alert', items: [
          { t: 'Jamás en una úlcera corneal', d: 'Perforan el ojo que debían proteger',
            say: 'Y si te llevas una sola idea de hoy: jamás indiques corticoides tópicos frente a una úlcera corneal, confirmada o sospechada. Es la regla más rentable de toda la oftalmología. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Queratitis: el patrón de tinción decide',
    root: N('start', 'Ojo rojo doloroso, fluoresceína positiva', 'Mira el patrón de la tinción',
      'Paciente con dolor corneal, blefarospasmo y fotofobia, confirmado con fluoresceína positiva bajo luz azul de cobalto. El patrón de la lesión decide el camino.',
      ['', N('q', '¿Qué patrón tiñe la córnea?', 'Dendrítica, infiltrado, o difusa bilateral',
        'Fíjate si la lesión es una dendrita ramificada, un infiltrado blanco denso, o una tinción punteada difusa y bilateral.',
        ['Dendrítica con botones', N('alert', 'Queratitis herpética', 'Aciclovir tópico; nunca corticoides',
          'Úlcera dendrítica con botones terminales, con hipoestesia corneal: queratitis herpética. Aciclovir en pomada al tres por ciento, cinco veces al día, y jamás corticoides tópicos.')],
        ['Infiltrado blanco, lentes de contacto', N('alert', 'Queratitis bacteriana', 'Retirar lentes + antibióticos reforzados',
          'Infiltrado corneal blanquecino, con posible hipopión, en usuario de lentes de contacto: sospecha de Pseudomonas. Retirar los lentes, antibióticos reforzados de amplio espectro y derivación el mismo día, sin parche.')],
        ['Punteada difusa, bilateral, sin lentes', N('ok', 'Queratitis actínica', 'Ciclopléjico + lubricante; cura en 24 a 48 h',
          'Tinción punteada superficial y difusa, bilateral, tras exposición a luz ultravioleta sin protección: queratitis actínica. Ciclopléjico y pomada lubricante; cura sola en veinticuatro a cuarenta y ocho horas, sin usar anestésico tópico repetido.')])]),
  },
};
