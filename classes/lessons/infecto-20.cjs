// Clase 5.1 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_infectologia.cjs (inf-20).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'infecto-20',
  tier: 1,
  slides: [
    {
      type: 'cover',
      subtitle: 'El borde de la lesión dice la profundidad, el agente y el antibiótico',
      say: 'Bienvenidos. Empezamos un bloque nuevo, el de las infecciones comunitarias, con las infecciones de piel: erisipela, celulitis y las infecciones del folículo. Las ves todos los días en atención primaria, y el examen pregunta dos cosas una y otra vez: separar la erisipela de la celulitis mirando el borde, y elegir el antibiótico oral de primera línea. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'La profundidad explica el borde',
      nodes: [
        { id: 'pue', col: 0, row: 1, k: 'cause', t: 'Puerta de entrada', s: 'Grieta, herida, micosis' },
        { id: 'sup', col: 1, row: 0, k: 'mech', t: 'Dermis superior y linfáticos', s: 'Streptococcus pyogenes >90%' },
        { id: 'eri', col: 2, row: 0, k: 'effect', t: 'Erisipela', s: 'Bordes netos y sobreelevados' },
        { id: 'pro', col: 1, row: 2, k: 'mech', t: 'Dermis profunda y subcutáneo', s: 'S. aureus y S. pyogenes' },
        { id: 'cel', col: 2, row: 2, k: 'effect', t: 'Celulitis', s: 'Bordes difusos, no sobreelevados' },
      ],
      edges: [
        { from: 'pue', to: 'sup', label: 'superficial' }, { from: 'sup', to: 'eri' },
        { from: 'pue', to: 'pro', label: 'profunda' }, { from: 'pro', to: 'cel' },
      ],
      steps: [
        { show: ['pue'], note: 'La bacteria entra por una solución de continuidad',
          say: 'Partamos por el mecanismo. En ambas infecciones la bacteria entra por una puerta en la piel: una grieta, una herida, una micosis entre los dedos. Lo que las separa es qué tan profundo llega.' },
        { show: ['sup'], note: 'Superficial: casi siempre estreptococo',
          say: 'Si se queda en la dermis superior y los linfáticos superficiales, el agente es casi siempre el Streptococcus pyogenes, el estreptococo betahemolítico del grupo A, en más del noventa por ciento.' },
        { show: ['eri'], note: 'Placa roja brillante con borde en escalón',
          say: 'Eso es la erisipela. Como la infección es superficial y los linfáticos se llenan de edema, la placa queda levantada, con un borde nítido que se toca como un escalón frente a la piel sana.' },
        { show: ['pro'], note: 'Profunda: estafilococo y estreptococo',
          say: 'Si en cambio llega a la dermis profunda y al tejido celular subcutáneo, los agentes son el Staphylococcus aureus, sensible o resistente a meticilina, y también el Streptococcus pyogenes.' },
        { show: ['cel'], note: 'El eritema se difumina hacia la piel sana',
          say: 'Eso es la celulitis. Al estar más profunda, el eritema se difumina, sin un borde claro y sin relieve. Fíjate que el borde no es un detalle estético: te dice la profundidad, y la profundidad te dice el agente.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'Erisipela versus celulitis',
      cards: [
        { title: 'Erisipela', tag: 'S. pyogenes', kind: 'criteria', items: [
          { t: 'Placa rojo brillante, piel de naranja', d: 'Bordes netos y sobreelevados',
            say: 'Veamos cómo llegan. La erisipela es una placa de color rojo brillante, caliente, indurada, con aspecto de piel de naranja, y con esos bordes netos y sobreelevados.' },
          { t: 'Inicio súbito', d: 'Fiebre alta y calofríos precoces',
            say: 'Su inicio es brusco, con fiebre alta y calofríos desde el principio. Muchas veces la fiebre aparece antes de que la placa sea evidente.' },
          { t: 'Piernas y cara', d: 'Mejillas en alas de mariposa',
            say: 'Se localiza en las extremidades inferiores y en la cara, donde puede tomar ambas mejillas en alas de mariposa.' },
        ] },
        { title: 'Celulitis', tag: 'S. aureus y S. pyogenes', kind: 'key', items: [
          { t: 'Eritema, calor, edema con fóvea', d: 'Bordes difusos y mal delimitados',
            say: 'La celulitis, en cambio, tiene eritema, calor y edema con fóvea, pero con bordes difusos, mal delimitados y planos.' },
          { t: 'Progresión en 24 a 48 horas', d: 'Más insidiosa',
            say: 'Y su instalación es más insidiosa, progresiva en uno a dos días.' },
        ] },
        { title: 'Puerta de entrada', tag: 'Búscala siempre', kind: 'alert', items: [
          { t: 'Tinea pedis interdigital', d: 'La más común en las piernas',
            say: 'Y siempre busca la puerta de entrada. En la pierna, la más común es la micosis entre los dedos del pie, la tinea pedis. Si no la tratas, la celulitis vuelve.' },
          { t: 'Úlcera, trauma menor, picadura', d: 'Linfedema: predispone a erisipela',
            say: 'Otras puertas son una úlcera venosa, un traumatismo menor o una picadura. Y el linfedema crónico predispone a la erisipela, porque los linfáticos ya no drenan bien.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Infecciones del folículo',
      title: 'Foliculitis, forúnculo y carbunco estafilocócico',
      cards: [
        { title: 'Foliculitis', tag: 'Superficial', kind: 'normal', items: [
          { t: 'Pústula centrada en un vello', d: 'Aseo con clorhexidina o mupirocina 2%',
            say: 'Pasemos al folículo piloso, donde el agente es casi siempre el Staphylococcus aureus. La foliculitis es una pequeña pústula indolora centrada en un vello. Se trata con aseo con jabón de clorhexidina o mupirocina tópica al dos por ciento.' },
          { t: 'Tras tina caliente o piscina', d: 'Pseudomonas, autolimitada',
            say: 'Un detalle: si aparece después de un hidromasaje o una piscina temperada, piensa en Pseudomonas aeruginosa, la foliculitis de las tinas calientes, que es autolimitada.' },
        ] },
        { title: 'Forúnculo', tag: 'Profundo', kind: 'key', items: [
          { t: 'Nódulo muy doloroso', d: 'Necrosis central y pus: el clavo',
            say: 'El forúnculo es más profundo: un nódulo rojo muy doloroso que toma todo el folículo y el tejido alrededor, y termina con necrosis central y salida de pus, el famoso clavo.' },
          { t: 'Calor local y drenaje', d: 'Antibiótico solo si hay celulitis o signos sistémicos',
            say: 'Se trata con calor local y drenaje, espontáneo o quirúrgico. El antibiótico sistémico solo va si hay celulitis alrededor o signos sistémicos.' },
        ] },
        { title: 'Carbunco estafilocócico', tag: 'Ojo con el nombre', kind: 'alert', items: [
          { t: 'Forúnculos coalescentes', d: 'Nuca o espalda de diabéticos',
            say: 'Y el carbunco estafilocócico, o ántrax benigno: varios forúnculos unidos por trayectos bajo la piel, típicamente en la nuca o la espalda de un diabético. Ojo con el nombre: no tiene nada que ver con el Bacillus anthracis de la clase anterior.' },
          { t: 'Drenaje quirúrgico', d: 'Más antibiótico endovenoso',
            say: 'Este sí exige drenaje quirúrgico y antibiótico endovenoso.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento ambulatorio',
      title: 'Marcar el borde y cubrir estafilococo y estreptococo',
      cards: [
        { title: 'Regla de oro', tag: 'Siempre', kind: 'key', items: [
          { t: 'Marcar el borde con lápiz', d: 'Evaluar a las 24 y 48 horas',
            say: 'Antes del antibiótico, una regla de oro: se marca el borde del eritema con un lápiz indeleble. Así, a las veinticuatro y cuarenta y ocho horas sabes objetivamente si la lesión retrocede o avanza.' },
        ] },
        { title: 'Primera línea oral', tag: '7 a 10 días', kind: 'pharma', items: [
          { t: 'Cefadroxilo 500 mg c/12 h', d: 'O cefalexina 500 mg c/6 h',
            say: 'El tratamiento oral de primera línea en Chile es cefadroxilo, quinientos miligramos cada doce horas, o cefalexina, quinientos miligramos cada seis horas.' },
          { t: 'O flucloxacilina 500 mg c/8 h', d: 'Cubren S. aureus y S. pyogenes',
            say: 'O flucloxacilina, quinientos miligramos cada ocho horas. Todos por siete a diez días, y todos cubren a los dos agentes, estafilococo y estreptococo. Por eso, si no tienes claro si es erisipela o celulitis, igual aciertas.' },
        ] },
        { title: 'Alergia o SAMR', tag: 'Alternativas', kind: 'alert', items: [
          { t: 'Clindamicina 300 mg c/8 h', d: 'Alergia a betalactámicos',
            say: 'Si el paciente es alérgico a los betalactámicos, clindamicina, trescientos miligramos cada ocho horas.' },
          { t: 'Cotrimoxazol forte c/12 h', d: 'Sospecha de SAMR comunitario',
            say: 'Y si sospechas un estafilococo resistente a meticilina de la comunidad, por abscesos o forúnculos a repetición, o porque falló el betalactámico, cotrimoxazol forte, un comprimido cada doce horas.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Hospitalización',
      title: '¿Cuándo pasar a la vía endovenosa?',
      nodes: [
        { id: 'pac', col: 0, row: 2, k: 'start', t: 'Celulitis o erisipela', s: 'Evaluar gravedad' },
        { id: 'sep', col: 1, row: 0, k: 'risk', t: 'Toxicidad sistémica', s: 'SIRS o sepsis' },
        { id: 'fal', col: 1, row: 1, k: 'risk', t: 'Progresión a 48 h', s: 'Pese a antibiótico oral' },
        { id: 'com', col: 1, row: 3, k: 'risk', t: 'Comorbilidad descompensada', s: 'Diabetes, cirrosis, inmunosupresión' },
        { id: 'fac', col: 1, row: 4, k: 'alert', t: 'Celulitis facial', s: 'Riesgo de trombosis del seno cavernoso' },
        { id: 'ev', col: 3, row: 2, k: 'good', t: 'Hospitalizar + EV', s: 'Cefazolina 1 g c/8 h o cloxacilina' },
      ],
      edges: [
        { from: 'pac', to: 'sep' }, { from: 'pac', to: 'fal' }, { from: 'pac', to: 'com' }, { from: 'pac', to: 'fac' },
        { from: 'sep', to: 'ev' }, { from: 'fal', to: 'ev' }, { from: 'com', to: 'ev' }, { from: 'fac', to: 'ev' },
      ],
      steps: [
        { show: ['pac'], note: 'La mayoría se trata en casa',
          say: 'La mayoría de estos pacientes se trata en casa. Pero hay cuatro situaciones que te obligan a hospitalizar.' },
        { show: ['sep'], note: 'Primera: el paciente está séptico',
          say: 'La primera es la toxicidad sistémica: un paciente con respuesta inflamatoria sistémica o sepsis, como vimos en la primera clase del curso.' },
        { show: ['fal'], note: 'Segunda: el borde marcado avanza',
          say: 'La segunda es la progresión a pesar de cuarenta y ocho horas de antibiótico oral. Aquí es donde sirve el borde que marcaste con lápiz.' },
        { show: ['com'], note: 'Tercera: un terreno frágil',
          say: 'La tercera, las comorbilidades descompensadas: diabetes, cirrosis o inmunosupresión.' },
        { show: ['fac'], note: 'Cuarta: la cara drena hacia el cerebro',
          say: 'Y la cuarta, la celulitis facial. La razón es anatómica: las venas de la cara drenan hacia el seno cavernoso, y la infección puede trombosarlo.' },
        { show: ['ev'], note: 'Antiestafilocócico endovenoso',
          say: 'En cualquiera de estos casos, hospitalizar y pasar a la vía endovenosa: cefazolina, un gramo cada ocho horas, o cloxacilina, uno a dos gramos cada cuatro a seis horas.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos todo en un árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Erisipela versus celulitis',
      head: ['Característica', 'Erisipela', 'Celulitis'],
      rows: [
        { cells: ['Profundidad', 'Dermis superficial y linfáticos', 'Dermis profunda y subcutáneo'],
          say: 'Repasemos lado a lado. La erisipela es superficial, en la dermis y los linfáticos; la celulitis es profunda, en la dermis profunda y el subcutáneo.' },
        { cells: ['Agente', 'Streptococcus pyogenes (>90%)', 'S. aureus y S. pyogenes'],
          say: 'La erisipela es casi siempre estreptococo; la celulitis, estafilococo y estreptococo.' },
        { cells: ['Bordes', 'Netos y sobreelevados', 'Difusos y mal definidos'],
          say: 'Y el dato que más se pregunta: bordes netos y sobreelevados en la erisipela, difusos en la celulitis.' },
        { cells: ['Inicio', 'Brusco, fiebre alta precoz', 'Insidioso, 24 a 48 horas'],
          say: 'La erisipela empieza de golpe con fiebre alta; la celulitis progresa en uno o dos días.' },
        { cells: ['Puerta de entrada', 'A menudo imperceptible', 'Tinea pedis, úlcera, herida visible'],
          say: 'En la erisipela la puerta de entrada a menudo no se ve; en la celulitis suele ser visible: la tinea pedis, una úlcera o una herida.' },
        { cells: ['Tratamiento oral', 'Penicilina oral, cefadroxilo o flucloxacilina', 'Cefadroxilo, cefalexina o flucloxacilina'],
          say: 'Y el tratamiento se superpone: en la erisipela también sirve la penicilina oral, pero el cefadroxilo o la flucloxacilina cubren a las dos. La trampa es la amoxicilina en una celulitis, porque no cubre bien al estafilococo.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 58 años con linfedema crónico de la pierna derecha tras safenectomía. Hace 12 horas inicia calofríos intensos, fiebre de 39 °C y dolor ardiente en esa pierna. En la cara anterior hay una placa eritematosa extensa, rojo brillante, indurada y dolorosa, con bordes nítidos y sobreelevados. Sin colecciones ni fluctuación.',
      question: '¿Cuál es el agente etiológico más probable?',
      options: [
        { letter: 'A', text: 'Staphylococcus aureus meticilino resistente' },
        { letter: 'B', text: 'Streptococcus pyogenes' },
        { letter: 'C', text: 'Pseudomonas aeruginosa' },
        { letter: 'D', text: 'Staphylococcus epidermidis' },
        { letter: 'E', text: 'Escherichia coli' },
      ],
      correct: 'B',
      explanation: 'Inicio súbito con fiebre alta y calofríos, placa rojo brillante con bordes nítidos y sobreelevados, sobre un linfedema: erisipela por Streptococcus pyogenes. Conducta: marcar el borde, reposo con la pierna elevada y cefadroxilo oral (o penicilina V o flucloxacilina); si hay compromiso del estado general, hospitalizar para cefazolina o penicilina G sódica EV.',
      say: {
        stem: 'Vamos al caso. Mujer de cincuenta y ocho años con linfedema crónico de la pierna derecha después de una safenectomía. Hace doce horas empieza con calofríos intensos, fiebre de treinta y nueve y dolor ardiente en esa pierna. Tiene una placa roja brillante, indurada y dolorosa, con bordes nítidos y sobreelevados, sin colecciones.',
        question: '¿Cuál es el agente etiológico más probable?',
        options: 'Las opciones: estafilococo resistente a meticilina, Streptococcus pyogenes, Pseudomonas, Staphylococcus epidermidis, o Escherichia coli. Piénsalo.',
        answer: 'Es la B, Streptococcus pyogenes. Inicio de golpe con fiebre alta, bordes netos y sobreelevados, y un linfedema de base: es una erisipela, y la erisipela es estreptocócica en más del noventa por ciento. El estafilococo tienta porque es el agente de la piel que más recordamos, pero da celulitis de bordes difusos, abscesos y forúnculos. Conducta: marcar el borde, elevar la pierna y cefadroxilo oral.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 137',
      stem: 'Una paciente de 62 años presenta una caída a nivel, con erosión en la rodilla derecha. Tres días después presenta una lesión eritematosa, que rodea la herida, de 10 cm de diámetro y bordes difusos, con aumento de la temperatura local.',
      question: '¿Cuál es la conducta de elección?',
      options: [
        { letter: 'A', text: 'Indicar mupirocina tópica' },
        { letter: 'B', text: 'Realizar curación con suero fisiológico y control en 48 horas' },
        { letter: 'C', text: 'Realizar curaciones diarias con suero fisiológico y povidona yodada' },
        { letter: 'D', text: 'Indicar amoxicilina oral por 7 días' },
        { letter: 'E', text: 'Indicar cefadroxilo oral por 7 días' },
      ],
      correct: 'E',
      explanation: 'Erosión como puerta de entrada + eritema de bordes difusos con calor local: celulitis. Requiere antibiótico sistémico que cubra S. aureus (cefadroxilo, flucloxacilina, cloxacilina; clindamicina en alérgicos). La amoxicilina no cubre bien al estafilococo y las medidas locales no bastan.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil diecinueve. Mujer de sesenta y dos años que se cae y se erosiona la rodilla. Tres días después tiene una lesión eritematosa alrededor de la herida, de diez centímetros, con bordes difusos y calor local.',
        question: '¿Cuál es la conducta de elección?',
        options: 'Las opciones: mupirocina tópica, curación con suero y control, curaciones con povidona yodada, amoxicilina oral por siete días, o cefadroxilo oral por siete días. Piénsalo.',
        answer: 'Es la E, cefadroxilo oral. La erosión es la puerta de entrada y los bordes difusos te dicen celulitis, así que hay que cubrir al estafilococo. La amoxicilina es el distractor más tentador, pero no cubre bien al Staphylococcus aureus. Y las curaciones o la mupirocina no alcanzan una infección que ya está en el subcutáneo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 55',
      stem: 'Un paciente de 21 años consulta por aparición de lesiones cutáneas en la zona glútea de 6 días de evolución, consistentes en pápulas y pústulas, que están en estrecha relación con los folículos pilosos.',
      question: '¿Cuál es el tratamiento de elección para este paciente?',
      options: [
        { letter: 'A', text: 'Flucloxacilina' },
        { letter: 'B', text: 'Ceftriaxona' },
        { letter: 'C', text: 'Doxiciclina' },
        { letter: 'D', text: 'Amoxicilina' },
        { letter: 'E', text: 'Azitromicina' },
      ],
      correct: 'A',
      explanation: 'Pápulas y pústulas centradas en folículos: foliculitis por Staphylococcus aureus. Entre las opciones, el único antiestafilocócico de elección es la flucloxacilina (también cloxacilina o cefadroxilo; clindamicina en alérgicos). En la foliculitis leve y localizada basta el aseo con clorhexidina o la mupirocina tópica.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Paciente de veintiún años con seis días de pápulas y pústulas en la zona glútea, en estrecha relación con los folículos pilosos.',
        question: '¿Cuál es el tratamiento de elección?',
        options: 'Las opciones: flucloxacilina, ceftriaxona, doxiciclina, amoxicilina, o azitromicina. Piénsalo.',
        answer: 'Es la A, flucloxacilina. Pústulas centradas en el folículo son una foliculitis, y el agente es el Staphylococcus aureus, así que la respuesta es el antiestafilocócico. Recuerda que en una foliculitis leve y acotada basta el aseo con clorhexidina o la mupirocina, pero aquí no hay opción tópica. La amoxicilina vuelve a ser la trampa: no cubre bien al estafilococo. Y la ceftriaxona es endovenosa, excesiva para este cuadro.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 172',
      stem: 'Un paciente de 53 años, diabético mal controlado, presenta una lesión en la pierna derecha, desde hace 2 días, que se ha extendido hasta alcanzar un gran tamaño y se ha asociado a malestar general y fiebre. Al examen físico tiene T°: 39,0°C, FC: 115x’, PA: 90/60 mmHg. Además, se aprecia la lesión eritematosa de 20 cm, con zonas violáceas y bulas en su superficie.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Erisipela' },
        { letter: 'B', text: 'Herpes zóster' },
        { letter: 'C', text: 'Pioderma gangrenoso' },
        { letter: 'D', text: 'Fasceítis necrotizante' },
        { letter: 'E', text: 'Celulitis bacteriana' },
      ],
      correct: 'D',
      explanation: 'Extensión rápida en un diabético, con compromiso hemodinámico, zonas violáceas y bulas: fasceítis necrotizante. La erisipela y la celulitis se distinguen por los bordes nítidos o difusos, pero no explican las zonas violáceas, las bulas ni el shock.',
      say: {
        stem: 'Y una última pregunta real, del EUNACOM de agosto de dos mil veintiuno, para marcar el límite de esta clase. Diabético mal controlado de cincuenta y tres años, con una lesión en la pierna que en dos días creció hasta veinte centímetros, con fiebre de treinta y nueve, frecuencia cardíaca de ciento quince y presión de noventa sesenta. La lesión tiene zonas violáceas y bulas.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: erisipela, herpes zóster, pioderma gangrenoso, fasceítis necrotizante, o celulitis bacteriana. Piénsalo.',
        answer: 'Es la D, fasceítis necrotizante. Al principio podía parecer una erisipela o una celulitis, pero las zonas violáceas, las bulas, la progresión rápida y la hipotensión en un diabético son banderas rojas de una infección necrotizante, que vimos en la clase de partes blandas. La celulitis es el distractor tentador, pero no explica el shock. Esto ya no es un antibiótico oral: es una urgencia quirúrgica.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Mira el borde', kind: 'key', items: [
          { t: 'Bordes netos y sobreelevados', d: 'Erisipela: Streptococcus pyogenes',
            say: 'Cerremos con las reglas de oro. Bordes netos y sobreelevados, con fiebre de inicio brusco: erisipela, por Streptococcus pyogenes.' },
          { t: 'Bordes difusos', d: 'Celulitis: S. aureus y S. pyogenes',
            say: 'Bordes difusos: celulitis, por estafilococo y estreptococo. Y siempre busca la puerta de entrada, sobre todo la tinea pedis.' },
        ] },
        { title: 'Tratamiento', tag: 'Oral', kind: 'pharma', items: [
          { t: 'Marcar el borde con lápiz', d: 'Control a las 24–48 h',
            say: 'Marca el borde con lápiz para controlar a las veinticuatro y cuarenta y ocho horas.' },
          { t: 'Cefadroxilo, cefalexina o flucloxacilina', d: '7 a 10 días; amoxicilina no',
            say: 'El tratamiento oral es cefadroxilo, cefalexina o flucloxacilina por siete a diez días. La amoxicilina sola no cubre bien al estafilococo.' },
        ] },
        { title: 'Hospitalizar', tag: 'Endovenoso', kind: 'alert', items: [
          { t: 'Sepsis, falla oral, comorbilidad, cara', d: 'Cefazolina o cloxacilina EV',
            say: 'Se hospitaliza con sepsis, progresión a las cuarenta y ocho horas, comorbilidad descompensada o celulitis facial, y se pasa a cefazolina o cloxacilina endovenosa. Si te llevas una sola idea de hoy: el borde te dice la profundidad y el agente, y un betalactámico antiestafilocócico cubre a los dos. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Infección de piel: borde, gravedad y antibiótico',
    root: N('start', 'Eritema, calor y dolor en la piel', 'Infección de piel comunitaria',
      'Paciente con una zona roja, caliente y dolorosa en la piel. Primero descarta lo grave, después mira el borde.',
      ['', N('q', '¿Criterios de hospitalización?', 'Sepsis · falla a 48 h · comorbilidad · cara',
        'La primera pregunta es de gravedad: toxicidad sistémica, progresión pese a cuarenta y ocho horas de antibiótico oral, comorbilidad descompensada o celulitis facial.',
        ['SÍ', N('alert', 'Hospitalizar + EV', 'Cefazolina o cloxacilina',
          'Si hay cualquiera de ellos, se hospitaliza y se usa cefazolina o cloxacilina endovenosa.')],
        ['NO', N('q', '¿Cómo es el borde?', 'Marcarlo con lápiz',
          'Sin criterios de gravedad, se trata en forma ambulatoria. Marca el borde con lápiz y mira cómo es.',
          ['Neto y sobreelevado', N('do', 'Erisipela', 'Streptococcus pyogenes',
            'Borde neto y sobreelevado, con fiebre de inicio brusco: erisipela por Streptococcus pyogenes.',
            ['', N('ok', 'Cefadroxilo o flucloxacilina oral', 'O penicilina oral · 7 a 10 días',
              'Cefadroxilo o flucloxacilina oral, o penicilina oral, por siete a diez días, con control del borde a las cuarenta y ocho horas.')])],
          ['Difuso', N('do', 'Celulitis', 'S. aureus y S. pyogenes · buscar tinea pedis',
            'Borde difuso y progresión en uno a dos días: celulitis. Busca y trata la puerta de entrada.',
            ['', N('ok', 'Cefadroxilo, cefalexina o flucloxacilina', '7 a 10 días · alérgico: clindamicina',
              'Cefadroxilo, cefalexina o flucloxacilina oral por siete a diez días. En alérgicos, clindamicina; si sospechas estafilococo resistente comunitario, cotrimoxazol.')])])])]),
  },
};
