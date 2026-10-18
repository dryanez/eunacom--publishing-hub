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
          say: 'Eso es la erisipela: mira esta placa. Como la infección es superficial y los linfáticos se llenan de edema, la placa queda levantada, con un borde nítido que se toca como un escalón frente a la piel sana.',
            photo: { src: 'biblioteca/07_infectologia/infecto-20/01_erisipela__cto-derma_p25.jpg', label: 'Erisipela', at: 'mira esta placa', credit: 'Manual CTO Dermatología 14.ª ed., p. 25' } },
        { show: ['pro'], note: 'Profunda: estafilococo y estreptococo',
          say: 'Si en cambio llega a la dermis profunda y al tejido celular subcutáneo, los agentes son el Staphylococcus aureus, sensible o resistente a meticilina, y también el Streptococcus pyogenes.' },
        { show: ['cel'], note: 'El eritema se difumina hacia la piel sana',
          say: 'Eso es la celulitis, como ves aquí. Al estar más profunda, el eritema se difumina, sin un borde claro y sin relieve. Fíjate que el borde no es un detalle estético: te dice la profundidad, y la profundidad te dice el agente.',
            photo: { src: 'biblioteca/07_infectologia/infecto-20/02_celulitis_1__amir-infecto_p67.jpg', label: 'Celulitis', at: 'como ves aquí', credit: 'Manual AMIR Infecciosas, p. 67' } },
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
            say: 'Pasemos al folículo piloso, donde el agente es casi siempre el Staphylococcus aureus. La foliculitis son estas pequeñas pústulas indoloras, cada una centrada en un vello. Se trata con aseo con jabón de clorhexidina o mupirocina tópica al dos por ciento.',
            photo: { src: 'biblioteca/07_infectologia/infecto-20/03_foliculitis__atlas208.jpg', label: 'Foliculitis', at: 'estas pequeñas pústulas', credit: 'Atlas EUNACOM 2026' } },
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
            say: 'Y el carbunco estafilocócico, o ántrax benigno: varios forúnculos unidos por trayectos bajo la piel, como ves en esta lesión, típicamente en la nuca o la espalda de un diabético. Ojo con el nombre: no tiene nada que ver con el Bacillus anthracis de la clase anterior.',
            photo: { src: 'biblioteca/07_infectologia/infecto-20/04_furunculo-antrax__fitzpatrick_p1739.jpg', label: 'Ántrax estafilocócico', at: 'como ves en esta lesión', credit: 'Fitzpatrick\'s Dermatology in General Medicine, p. 1739' } },
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
      type: 'points',
      kicker: 'Piodermias y absceso',
      title: 'Ántrax, piodermias, cultivo y drenaje',
      cards: [
        { title: 'Ántrax estafilocócico', tag: 'No es el carbunco', kind: 'key', items: [
          { t: 'Varios folículos, varios orificios', d: 'Nuca, espalda, muslos de diabéticos',
            say: 'El ántrax estafilocócico es la infección profunda de varios folículos vecinos, con drenaje por múltiples orificios, en nuca, espalda y muslos de diabéticos y obesos. No lo confundas con el carbunco por Bacillus anthracis.' },
          { t: 'Drenaje + cloxacilina o cefadroxilo', d: 'Sospecha de SAMR: TMP-SMX, clindamicina, doxiciclina',
            say: 'Se drena y se da cloxacilina o cefadroxilo. Si se sospecha SAMR, cotrimoxazol, clindamicina o doxiciclina.' },
          { t: 'Hidradenitis y piel escaldada', d: 'Signo de Nikolsky en niños',
            say: 'Otras piodermias: impétigo, con estas costras color miel, típicas de los niños, y aquí en la cara de un niño; ectima, paroniquia, hidradenitis supurativa y el síndrome de piel escaldada estafilocócica, con signo de Nikolsky en niños.',
            photos: [
              { src: 'biblioteca/07_infectologia/infecto-20/03_impetigo__cto-derma_p25.jpg', label: 'Impétigo', at: 'con estas costras', credit: 'Manual CTO Dermatología 14.ª ed., p. 25' },
              { src: 'biblioteca/07_infectologia/infecto-20/03_impetigo_alt1__amir-derma_p55.jpg', label: 'Impétigo en la cara', at: 'y aquí en la cara de un niño', credit: 'Manual AMIR Dermatología, p. 55' },
            ] },
        ] },
        { title: 'Gram y cultivo', tag: 'Cuándo pedirlos', kind: 'criteria', items: [
          { t: 'Pus, mala respuesta, SAMR o inmunosupresión', d: 'Del pus, no de la costra',
            say: 'Se piden cuando hay pus o absceso, mala respuesta al antibiótico, sospecha de SAMR o inmunosupresión. La muestra es el pus aspirado, no una costra colonizada.' },
          { t: 'Celulitis sin pus: poco rentable', d: 'Hemocultivos si hay fiebre',
            say: 'En la celulitis sin pus el cultivo de piel rinde poco; se piden hemocultivos si hay fiebre. Y un cultivo sin signos de infección es colonización, no se trata.' },
        ] },
        { title: 'Drenar un absceso', tag: 'Realizar', kind: 'pharma', items: [
          { t: 'Incisión amplia sobre lo fluctuante', d: 'Romper loculaciones, irrigar, mecha 24–48 h',
            say: 'El drenaje es el tratamiento principal. Con anestesia local, incisión lineal amplia sobre el punto más fluctuante, rompes las lóculos, evacuas el pus, mandas cultivo e irrigas. Dejas mecha por veinticuatro a cuarenta y ocho horas.' },
          { t: 'Antibiótico si celulitis > 5 cm, SIRS o riesgo', d: 'Cara, manos, genitales, diabetes',
            say: 'Se agrega antibiótico si hay celulitis extensa, fiebre, inmunosupresión, diabetes, abscesos múltiples o localización en cara, manos o genitales. Y no olvides la profilaxis antitetánica.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'La profundidad',
      images: [
        { src: 'animaciones/infecto-20/A1_profundidad_piel.mp4', label: 'Cuatro niveles', credit: 'Animación propia' },
      ],
      steps: [
        { note: 'Del impétigo a la fascitis',
          say: 'El impétigo queda en la epidermis; la erisipela, en la dermis superficial, con borde nítido; la celulitis, más profunda, con borde difuso; y la fascitis necrotizante corre por la fascia.' },
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
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.04.1.006 · Celulitis bacteriana",
      "stem": "Hombre de 58 años, diabético, con 3 días de eritema caliente y doloroso, de bordes difusos, en la pierna izquierda, que se extiende desde una fisura interdigital. T° 38,8 °C, FC 108 por minuto, PA 125/75 mmHg. Sin crepitación ni dolor desproporcionado; la ecografía no muestra colecciones.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Cefadroxilo oral y control ambulatorio en 48 horas"
        },
        {
          "letter": "B",
          "text": "Aciclovir oral"
        },
        {
          "letter": "C",
          "text": "Desbridamiento quirúrgico de urgencia"
        },
        {
          "letter": "D",
          "text": "Mupirocina tópica"
        },
        {
          "letter": "E",
          "text": "Hospitalizar y tratar con cefazolina endovenosa, además de manejar la puerta de entrada"
        }
      ],
      "correct": "E",
      "explanation": "Celulitis con compromiso sistémico, fiebre y taquicardia, en un diabético requiere hospitalización y antibiótico endovenoso contra estreptococo y estafilococo, como cefazolina; además se trata la puerta de entrada, el intertrigo. El cefadroxilo oral sirve para la celulitis leve sin toxicidad. El desbridamiento se reserva para la fasceítis necrotizante.",
      "say": {
        "stem": "Vamos con una pregunta de práctica. Hombre de cincuenta y ocho años, diabético, con tres días de una zona roja, caliente y dolorosa, de bordes difusos, en la pierna, que partió de una fisura entre los dedos. Tiene fiebre de treinta y ocho coma ocho y taquicardia, pero sin crepitación ni colecciones.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: cefadroxilo oral ambulatorio, aciclovir, desbridamiento quirúrgico, mupirocina o hospitalizar con cefazolina endovenosa. Piénsalo.",
        "answer": "Es la E. Es una celulitis con compromiso sistémico en un diabético, y eso exige hospitalizar y dar antibiótico endovenoso. El cefadroxilo oral es la trampa: es el tratamiento correcto de la celulitis leve, pero no de una con fiebre y taquicardia."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.1.055 · Abscesos, forúnculos, panadizos, flegmones",
      "stem": "Hombre de 32 años, sin comorbilidades, con 5 días de un nódulo doloroso en la axila derecha. Al examen hay una lesión de 3 cm, eritematosa, caliente y fluctuante, con mínima celulitis alrededor. Está afebril.",
      "question": "¿Cuál es el tratamiento principal?",
      "options": [
        {
          "letter": "A",
          "text": "Compresas tibias y control en 1 semana"
        },
        {
          "letter": "B",
          "text": "Cefadroxilo oral como única medida"
        },
        {
          "letter": "C",
          "text": "Incisión y drenaje del absceso"
        },
        {
          "letter": "D",
          "text": "Hospitalizar para vancomicina endovenosa"
        },
        {
          "letter": "E",
          "text": "Punción con aguja fina para cultivo y observar"
        }
      ],
      "correct": "C",
      "explanation": "Una colección fluctuante es un absceso y su tratamiento fundamental es la incisión y el drenaje. En un paciente sano, afebril y sin celulitis extensa, el antibiótico no es necesario; se agrega si hay compromiso sistémico, celulitis importante, inmunosupresión o una ubicación de riesgo. El antibiótico solo no resuelve una colección.",
      "say": {
        "stem": "Vamos con una pregunta de práctica. Hombre de treinta y dos años, sano, con cinco días de un nódulo doloroso en la axila. Mide tres centímetros, está rojo, caliente y fluctuante, con muy poca celulitis alrededor, y no tiene fiebre.",
        "question": "¿Cuál es el tratamiento principal?",
        "options": "Las opciones: compresas tibias, cefadroxilo oral solo, incisión y drenaje, hospitalizar con vancomicina o punción con aguja fina. Piénsalo.",
        "answer": "Es la C. Si hay fluctuación hay pus, y el pus se drena: la incisión y el drenaje son el tratamiento. El cefadroxilo solo es la trampa: el antibiótico no penetra bien una colección y, en un paciente sano sin fiebre, ni siquiera es necesario."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2019 · Pregunta 26",
      "stem": "Un niño de 3 años presenta lesiones pruriginosas en la nariz y la cara de 3 días de evolución. Al examen físico se aprecian erosiones con costras amarillentas de aspecto melicérico sobre base eritematosa, en región perinasal y peribucal.",
      "question": "¿Cuál es el tratamiento más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Curaciones con suero fisiológico"
        },
        {
          "letter": "B",
          "text": "Curaciones con povidona yodada"
        },
        {
          "letter": "C",
          "text": "Aciclovir oral por 5 días"
        },
        {
          "letter": "D",
          "text": "Prednisona oral por 7 días"
        },
        {
          "letter": "E",
          "text": "Flucloxacilina por 7 días"
        }
      ],
      "correct": "E",
      "explanation": "Costras melicéricas periorificiales en un preescolar corresponden a impétigo, causado por S. aureus y S. pyogenes. Se trata con antibiótico antiestafilocócico: tópico (mupirocina) si es muy localizado, u oral (flucloxacilina, cloxacilina o cefadroxilo) por 7 a 10 días. Las curaciones solas no erradican la infección y los corticoides la empeoran.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil diecinueve. Un niño de tres años tiene lesiones pruriginosas en la nariz y la cara hace tres días, con costras amarillas como miel alrededor de la nariz y la boca.",
        "question": "¿Cuál es el tratamiento más adecuado?",
        "options": "Las opciones: curaciones con suero, curaciones con povidona, aciclovir oral, prednisona oral o flucloxacilina por siete días. Piénsalo.",
        "answer": "Es la E. Las costras melicéricas son un impétigo, que se trata con un antibiótico antiestafilocócico como la flucloxacilina. El aciclovir tienta si se piensa en herpes, pero el herpes da vesículas agrupadas, no costras color miel."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.04.5.001 · Drenaje de abscesos superficiales",
      "stem": "Un hombre de 30 años presenta un absceso de 3 cm en el muslo, fluctuante, con eritema alrededor de 1 cm, sin fiebre ni compromiso sistémico. No es diabético ni inmunosuprimido.",
      "question": "¿Cuál es el tratamiento más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Antibiótico oral solamente por 10 días"
        },
        {
          "letter": "B",
          "text": "Punción con aguja fina sin drenaje"
        },
        {
          "letter": "C",
          "text": "Compresas frías y observación"
        },
        {
          "letter": "D",
          "text": "Incisión y drenaje bajo anestesia local, con lavado de la cavidad"
        },
        {
          "letter": "E",
          "text": "Hospitalizar para antibiótico endovenoso"
        }
      ],
      "correct": "D",
      "explanation": "El tratamiento fundamental de un absceso cutáneo fluctuante es la incisión y drenaje: incisión amplia sobre la zona de mayor fluctuación, ruptura de tabiques, lavado con suero y curaciones. Sin celulitis extensa, compromiso sistémico ni inmunosupresión, el antibiótico no es indispensable; sin drenaje, el antibiótico solo no resuelve la colección.",
      "say": {
        "stem": "Un hombre sano de treinta años tiene un absceso fluctuante de tres centímetros en el muslo, con poco eritema alrededor y sin fiebre.",
        "question": "¿Cuál es el tratamiento más adecuado?",
        "options": "Las opciones: solo antibiótico oral, punción con aguja fina, compresas frías, incisión y drenaje con anestesia local o hospitalizar para antibiótico endovenoso. Piénsalo.",
        "answer": "Es la D. Un absceso fluctuante se trata con incisión y drenaje, y en un paciente sano sin celulitis extensa el antibiótico no es indispensable. El antibiótico solo tienta, pero no resuelve la colección."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2025 · Pregunta 111",
      "stem": "Niño de 7 años con 3 lesiones eritematosas con costra melicérica en el abdomen, pruriginosas, sin fiebre.",
      "question": "¿Cuál es el tratamiento más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Mupirocina tópica al 2%"
        },
        {
          "letter": "B",
          "text": "Amoxicilina oral 7 días"
        },
        {
          "letter": "C",
          "text": "Cefadroxilo oral 10 días"
        },
        {
          "letter": "D",
          "text": "Clindamicina oral"
        },
        {
          "letter": "E",
          "text": "Peróxido de benzoilo tópico"
        }
      ],
      "correct": "A",
      "explanation": "Costras color miel sobre base eritematosa son un impétigo no ampollar (S. aureus o S. pyogenes). Con pocas lesiones, localizado y sin síntomas sistémicos, se trata con antibiótico tópico (mupirocina o ácido fusídico) por 5 a 7 días y aseo. El tratamiento oral (cefadroxilo, cloxacilina) se reserva para lesiones extensas, ampollares o brotes.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil veinticinco. Niño de siete años con tres lesiones con costra color miel en el abdomen, sin fiebre.",
        "question": "¿Cuál es el tratamiento más adecuado?",
        "options": "Las opciones: mupirocina tópica, amoxicilina oral, cefadroxilo oral, clindamicina oral o peróxido de benzoilo. Piénsalo.",
        "answer": "Es la A. Un impétigo con pocas lesiones y sin fiebre se trata con mupirocina tópica. El cefadroxilo tienta porque cubre bien al estafilococo, pero se reserva para impétigo extenso o ampollar."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.01.2.002 · Ántrax",
      "stem": "Hombre de 60 años, diabético mal controlado, consulta por una placa indurada, muy dolorosa, de 6 cm en la nuca, con múltiples orificios por los que drena pus (aspecto en espumadera), de 5 días. Tiene fiebre de 38,5 °C.",
      "question": "¿Cuál es el diagnóstico y el manejo más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Forúnculo simple; calor local"
        },
        {
          "letter": "B",
          "text": "Carbunco por Bacillus anthracis; ciprofloxacino y notificación"
        },
        {
          "letter": "C",
          "text": "Ántrax (carbunco estafilocócico); drenaje quirúrgico, antibiótico sistémico antiestafilocócico y control de la glicemia"
        },
        {
          "letter": "D",
          "text": "Quiste epidérmico infectado; exéresis electiva"
        },
        {
          "letter": "E",
          "text": "Hidradenitis supurativa; doxiciclina"
        }
      ],
      "correct": "C",
      "explanation": "El ántrax es la confluencia de varios forúnculos (S. aureus) que forman una placa inflamatoria con múltiples bocas de drenaje, típico en nuca y espalda de diabéticos. Es una infección profunda que requiere drenaje y antibiótico sistémico (cloxacilina o cefazolina, o según riesgo de SAMR) y compensación metabólica. El carbunco por B. anthracis es una escara negra indolora.",
      "say": {
        "stem": "Hombre de sesenta años, diabético mal controlado, con una placa dolorosa de seis centímetros en la nuca con muchos orificios que drenan pus, y fiebre.",
        "question": "¿Cuál es el diagnóstico y manejo?",
        "options": "Las opciones: forúnculo simple con calor, carbunco por Bacillus anthracis, ántrax estafilocócico con drenaje y antibiótico, quiste epidérmico infectado o hidradenitis. Piénsalo.",
        "answer": "Es la C. Es un ántrax, la unión de varios forúnculos por estafilococo, que se drena y trata con antibiótico sistémico controlando la glicemia. El carbunco por Bacillus anthracis tienta por el nombre, pero produce una escara negra indolora, no una placa supurada."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.01.4.003 · Gram y cultivo",
      "stem": "Hombre de 45 años con un absceso de 4 cm en el muslo, fluctuante, recurrente por tercera vez en el año. Su pareja tuvo forúnculos recientemente. Se drena en urgencia.",
      "question": "¿Qué examen debe solicitarse de la secreción obtenida y por qué?",
      "options": [
        {
          "letter": "A",
          "text": "Ninguno, el drenaje es suficiente en todos los casos"
        },
        {
          "letter": "B",
          "text": "Gram y cultivo con antibiograma, para identificar S. aureus y su susceptibilidad (incluida resistencia a meticilina) por la recurrencia"
        },
        {
          "letter": "C",
          "text": "Baciloscopía"
        },
        {
          "letter": "D",
          "text": "PCR para virus herpes"
        },
        {
          "letter": "E",
          "text": "Micológico directo"
        }
      ],
      "correct": "B",
      "explanation": "En abscesos y piodermias recurrentes, extensos, con compromiso sistémico, en inmunosuprimidos o con falla de tratamiento, el Gram y el cultivo con antibiograma de la secreción identifican al agente (habitualmente S. aureus) y su susceptibilidad, incluida la resistencia a meticilina comunitaria, lo que orienta el antibiótico y la descolonización.",
      "say": {
        "stem": "Hombre de cuarenta y cinco años con su tercer absceso del año en el muslo, cuya pareja tuvo forúnculos. Se drena en urgencia.",
        "question": "¿Qué examen se pide de la secreción?",
        "options": "Las opciones: ninguno, Gram y cultivo con antibiograma, baciloscopía, PCR para herpes o micológico directo. Piénsalo.",
        "answer": "Es la B. Por la recurrencia se pide Gram y cultivo con antibiograma, para identificar al estafilococo y si es resistente a meticilina. No pedir nada tienta porque el drenaje basta en un absceso aislado, pero en recurrentes cambia el tratamiento."
      }
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
