// Clase 3.4 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_gastroenterologia.cjs (gastro-16).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gastro-16',
  tier: 1,
  slides: [
    {
      type: 'cover',
      subtitle: 'La palabra clave de la ecografía y el contexto del paciente',
      say: 'Bienvenidos. Hoy vemos las lesiones hepáticas focales y los pólipos de la vesícula. Es un tema acotado, y tiene un truco: casi todo se resuelve leyendo la palabra clave del informe de ecografía y mirando quién es el paciente. Vamos a aprender a traducir esas palabras en una conducta.',
    },

    {
      type: 'points',
      kicker: 'Lesiones quísticas',
      title: 'Quiste, hidatídico o absceso',
      cards: [
        { title: 'Quiste simple', tag: 'Observar', kind: 'normal', items: [
          { t: 'Anecogénico, pared fina', d: 'Sin tabiques ni contenido',
            say: 'Partamos por lo que tiene líquido. Anecogénico, de pared fina, sin tabiques ni contenido: es un quiste simple, y se observa.' },
        ] },
        { title: 'Quiste hidatídico', tag: 'Contexto rural', kind: 'alert', items: [
          { t: 'Membrana, tabiques, vesículas hijas', d: 'Contacto con perros',
            say: 'Si el quiste tiene membrana, tabiques o vesículas hijas, en un paciente rural que convive con perros, piensa en un quiste hidatídico. Mira esta imagen: una lesión quística con membranas en su interior.',
            photo: { src: 'biblioteca/01_gastroenterologia/gastro-16/02_quiste-hidatidico-hepatico__cto-radiologia_p43.jpg', label: 'Quiste hidatídico', at: 'Mira esta imagen', credit: 'Manual CTO Radiología 14.ª ed., p. 43' } },
          { t: 'Albendazol + cirugía', d: 'Nunca punción libre',
            say: 'Se trata con albendazol y cirugía, o con la técnica de punción, aspiración, inyección y reaspiración. Lo que nunca se hace es puncionarlo libremente: el líquido puede dar anafilaxia y sembrar la enfermedad.' },
        ] },
        { title: 'Absceso hepático', tag: 'Con fiebre y dolor', kind: 'pharma', items: [
          { t: 'Hipoecogénico, irregular', d: 'Fiebre y dolor',
            say: 'El absceso se ve como una lesión hipoecogénica de bordes irregulares, pero lo que lo delata es la clínica: fiebre y dolor.' },
          { t: 'Amebiano: metronidazol', d: 'Piógeno: antibióticos + drenaje',
            say: 'Si es amebiano, en un viajero y con serología positiva, basta el metronidazol, habitualmente sin drenaje. Si es piógeno, antibióticos de amplio espectro y drenaje. Esa diferencia se pregunta.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Lesiones sólidas benignas',
      title: 'Se observan, salvo el adenoma',
      cards: [
        { title: 'Se observan', tag: 'Benignas sin riesgo', kind: 'normal', items: [
          { t: 'Hemangioma', d: 'Hiperecogénico, homogéneo, bien delimitado',
            say: 'Ahora las sólidas. La benigna más frecuente es el hemangioma: hiperecogénico, homogéneo y bien delimitado. Mira cómo se llena desde la periferia hacia el centro, en glóbulos. Se observa; solo se opera si es gigante y da síntomas.',
            photo: { src: 'biblioteca/01_gastroenterologia/gastro-16/01_hemangioma-realce-periferico__cto-radiologia_p51.jpg', label: 'Hemangioma', at: 'Mira cómo se llena', credit: 'Manual CTO Radiología 14.ª ed., p. 51' } },
          { t: 'Hiperplasia nodular focal', d: 'Cicatriz central',
            say: 'La hiperplasia nodular focal, con su cicatriz central, también es benigna y sin riesgo: se observa.' },
        ] },
        { title: 'Adenoma', tag: 'Se reseca', kind: 'alert', items: [
          { t: 'Hipoecogénico, único, homogéneo', d: 'Mujer con anticonceptivos o anabólicos',
            say: 'El adenoma es distinto, y aunque es benigno, no se deja tranquilo. Es hipoecogénico, único y homogéneo, en una mujer que usa anticonceptivos orales, o en quien usa esteroides anabólicos.' },
          { t: 'Suspender estrógenos, resecar', d: 'Si mide > 5 cm o da síntomas',
            say: 'Puede sangrar y puede malignizarse. Por eso se suspenden los estrógenos y se reseca si mide más de cinco centímetros o da síntomas.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Lesiones sólidas malignas',
      title: 'El contexto delata el cáncer',
      cards: [
        { title: 'Hepatocarcinoma', tag: 'En el hígado dañado', kind: 'key', items: [
          { t: 'Heterogéneo, irregular, en un cirrótico', d: 'Sobre todo cirrosis por virus B o C',
            say: 'Pasemos a las malignas. El hepatocarcinoma es heterogéneo e irregular, y aparece en un hígado dañado, sobre todo por cirrosis por virus B o C, como vimos en la clase de daño hepático crónico. La alfafetoproteína está alta.' },
          { t: 'TAC o RM trifásico', d: 'Realce arterial + lavado',
            say: 'Se confirma con TAC o resonancia trifásica: realce en fase arterial y lavado después. Mira esta tomografía trifásica: la lesión capta contraste en la fase arterial y lo pierde en la fase portal. Se trata con resección, ablación o trasplante, según los criterios de Milán.',
            photo: { src: 'biblioteca/01_gastroenterologia/gastro-16/01_tc_trifasica_hcc__commons.jpg', label: 'Hepatocarcinoma', at: 'Mira esta tomografía', credit: 'Wikimedia Commons «Triphasic CT scan of hepatocellular carcinoma.jpg», CC BY 4.0, Zhenyu Pan, Guozi Yang, Tingting Yuan, Lihua Dong, Lihua Don' } },
        ] },
        { title: 'Metástasis', tag: 'El hígado más frecuente', kind: 'alert', items: [
          { t: 'Lesiones múltiples, hipoecogénicas', d: 'Buscar el primario',
            say: 'Y si las lesiones son múltiples e hipoecogénicas, son metástasis. Mira esta tomografía: muchas lesiones hipodensas, repartidas por todo el parénquima. Hay que buscar el primario, en colon, mama, pulmón o estómago. En el cáncer de colon, algunas son resecables con intención curativa.',
            photo: { src: 'biblioteca/01_gastroenterologia/gastro-16/04_metastasis-hepaticas-tc__atlas-eunacom.jpg', label: 'Metástasis hepáticas (TAC)', at: 'Mira esta tomografía: muchas', credit: 'Atlas EUNACOM 2026' } },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Biopsia hepática',
      title: 'Biopsia de una lesión focal: cuándo y cuándo no',
      cards: [
        { title: 'Cuándo', tag: 'Solo si la imagen no basta', kind: 'key', items: [
          { t: 'Imagen no concluyente', d: 'La hace el especialista, guiada por eco o TAC',
            say: 'La biopsia de una lesión focal se indica solo cuando la imagen no es concluyente. La realiza el especialista, guiada por ecografía o TAC.' },
          { t: 'Cirrótico con lesión típica de hepatocarcinoma: no se biopsia', d: 'Basta el realce y el lavado',
            say: 'En un cirrótico con una lesión típica de hepatocarcinoma, no se biopsia. El realce arterial y el lavado bastan.' },
        ] },
        { title: 'Contraindicada', tag: 'Ojo', kind: 'alert', items: [
          { t: 'Sospecha de quiste hidatídico', d: 'Diseminación y anafilaxia',
            say: 'Está contraindicada ante la sospecha de un quiste hidatídico, por el riesgo de diseminación y de anafilaxia.' },
          { t: 'Lesión vascular o coagulopatía no corregible', d: 'Hemangioma; vía transyugular',
            say: 'También ante una lesión vascular, como el hemangioma, o una coagulopatía que no se corrige. En ese caso se usa la vía transyugular.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Vesícula y vías biliares',
      title: 'Cáncer de vesícula y de vías biliares',
      cards: [
        { title: 'Cáncer de vesícula', tag: 'Silente', kind: 'alert', items: [
          { t: 'Colelitiasis antigua, porcelana, pólipo mayor de 1 cm', d: 'Chile: incidencia de las más altas; predomina en mujeres',
            say: 'El cáncer de vesícula es un adenocarcinoma asociado a colelitiasis de larga data con cálculos grandes, a la vesícula en porcelana, a pólipos de más de un centímetro y a las anomalías de la unión biliopancreática. Chile tiene una de las incidencias más altas del mundo, con predominio femenino.' },
          { t: 'Hallazgo en la pieza de colecistectomía', d: 'Dolor, baja de peso o ictericia: avanzado',
            say: 'Es silente. Si hay dolor, baja de peso, ictericia o una masa, ya está avanzado. Muchas veces es un hallazgo en la pieza de la colecistectomía.' },
        ] },
        { title: 'Tratamiento', tag: 'Según la invasión', kind: 'pharma', items: [
          { t: 'T1a: colecistectomía', d: 'Invade solo la mucosa',
            say: 'Si invade solo la mucosa, T uno a, basta la colecistectomía.' },
          { t: 'Desde T1b: colecistectomía radical', d: 'Cuña hepática y linfadenectomía',
            say: 'Desde T uno b, se hace una colecistectomía radical, con resección hepática en cuña y linfadenectomía. Y la colecistectomía preventiva en la colelitiasis sintomática de treinta y cinco a cuarenta y nueve años está garantizada por el GES.' },
        ] },
        { title: 'Colangiocarcinoma', tag: 'Ictericia indolora', kind: 'key', items: [
          { t: 'Ictericia progresiva, indolora, con prurito', d: 'Hiliar (Klatskin), intrahepático o distal',
            say: 'El cáncer de vías biliares se presenta como ictericia progresiva, indolora y con prurito. Puede ser intrahepático, hiliar, el tumor de Klatskin, que es el más frecuente y deja la vesícula colapsada, o distal, con vesícula palpable. Mira esta colangiografía endoscópica de un colangiocarcinoma hiliar: la flecha señala la estenosis de la vía biliar, con dilatación por encima.',
            photo: { src: 'biblioteca/01_gastroenterologia/gastro-16/03_colangiocarcinoma-hiliar-cpre__harrison_p2436.jpg', label: 'Colangiocarcinoma hiliar', at: 'Mira esta colangiografía', credit: 'Harrison 21.ª ed., p. 2436' } },
          { t: 'Ecografía, colangiorresonancia y CA 19-9', d: 'Resección o prótesis paliativa',
            say: 'Los factores de riesgo son la colangitis esclerosante primaria, el quiste de colédoco y la litiasis intrahepática. Se estudia con ecografía, colangiorresonancia y CA diecinueve nueve, y se trata con resección, o con prótesis de drenaje si no es posible.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Vesícula',
      title: 'Pólipos vesiculares: el corte es 1 cm',
      cards: [
        { title: 'Colesterolínicos', tag: 'Los más frecuentes', kind: 'normal', items: [
          { t: 'Pequeños, múltiples, homogéneos', d: 'Menores de 10 mm',
            say: 'Pasemos a la vesícula. La mayoría de los pólipos son colesterolínicos: pequeños, bajo diez milímetros, múltiples y homogéneos. Se siguen con ecografía.' },
        ] },
        { title: 'Colecistectomía', tag: 'Sospecha de neoplasia', kind: 'criteria', items: [
          { t: '10 mm o más, único, sésil', d: 'O heterogéneo, o crece rápido',
            say: 'Se sospecha un pólipo neoplásico cuando mide diez milímetros o más, es único, sésil o heterogéneo, o crece rápido. Ahí la conducta es colecistectomía.' },
          { t: 'Mayor de 50, colelitiasis', d: 'O colangitis esclerosante primaria',
            say: 'También suman riesgo tener más de cincuenta años, cálculos asociados o colangitis esclerosante primaria. Recuerda que en Chile el cáncer de vesícula es especialmente frecuente.' },
        ] },
        { title: 'Cáncer invasor', tag: 'Ojo', kind: 'alert', items: [
          { t: 'Cirugía abierta', d: 'Colecistectomía radical',
            say: 'Y un detalle que se pregunta: si se sospecha un cáncer de vesícula invasor, la cirugía es abierta, una colecistectomía radical, no laparoscópica.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Realce arterial y lavado',
      images: [
        { src: 'animaciones/gastro-16/A1_realce_hcc.mp4', label: 'Hepatocarcinoma', credit: 'Ilustración: Servier Medical Art, CC BY 4.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'En un cirrótico',
          say: 'En la fase arterial, el hepatocarcinoma brilla, y en la fase portal se lava. El hemangioma, en cambio, se llena desde la periferia hacia el centro. En un cirrótico, el realce arterial con lavado basta para el diagnóstico.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos las lesiones del hígado en un solo árbol.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lesión hepática en la ecografía: diagnóstico y conducta',
      head: ['Aspecto ecográfico', 'Diagnóstico probable', 'Conducta'],
      rows: [
        { cells: ['Anecogénica, pared fina, sin tabiques', 'Quiste simple', 'Observar'],
          say: 'Repasemos todo en una tabla. Anecogénica, de pared fina y sin tabiques: quiste simple, se observa.' },
        { cells: ['Quística con membrana o tabiques, contexto rural', 'Quiste hidatídico', 'Albendazol + cirugía'],
          say: 'Quística con membrana o tabiques, en contexto rural: quiste hidatídico, albendazol más cirugía, y nunca punción libre.' },
        { cells: ['Hiperecogénica, homogénea', 'Hemangioma', 'Observar'],
          say: 'Hiperecogénica y homogénea: hemangioma, se observa.' },
        { cells: ['Hipoecogénica única y homogénea, mujer con ACO', 'Adenoma hepático', 'Suspender estrógenos; resecar si > 5 cm'],
          say: 'Hipoecogénica, única y homogénea, en una mujer con anticonceptivos: adenoma. Suspender estrógenos y resecar si pasa de cinco centímetros.' },
        { cells: ['Heterogénea irregular en cirrótico + AFP alta', 'Hepatocarcinoma', 'TAC o RM trifásico → resección, ablación o trasplante'],
          say: 'Heterogénea e irregular en un cirrótico con alfafetoproteína alta: hepatocarcinoma, se confirma con TAC o resonancia trifásica.' },
        { cells: ['Múltiples lesiones hipoecogénicas', 'Metástasis', 'Buscar el tumor primario'],
          say: 'Y múltiples lesiones hipoecogénicas: metástasis, hay que buscar el primario.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 34 años, usuaria de anticonceptivos orales hace 8 años, con dolor vago en hipocondrio derecho. Ecografía: lesión hepática sólida, hipoecogénica, homogénea, única, de 6 cm. Sin daño hepático crónico; alfa-fetoproteína normal.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Observación con ecografía anual' },
        { letter: 'B', text: 'Suspender anticonceptivos y resecar la lesión' },
        { letter: 'C', text: 'Punción biopsia percutánea' },
        { letter: 'D', text: 'Albendazol y cirugía' },
        { letter: 'E', text: 'Evaluar trasplante hepático según criterios de Milán' },
      ],
      correct: 'B',
      explanation: 'Lesión sólida hipoecogénica, homogénea y única en mujer joven usuaria de ACO, sin cirrosis: adenoma hepático. Por su tamaño (> 5 cm) y el riesgo de hemorragia y malignización, se suspenden los estrógenos y se reseca. El hemangioma sería hiperecogénico; el hepatocarcinoma, en hígado dañado con AFP alta.',
      say: {
        stem: 'Vamos al caso. Mujer de treinta y cuatro años, usuaria de anticonceptivos orales hace ocho años, con dolor vago en el hipocondrio derecho. La ecografía muestra una lesión hepática sólida, hipoecogénica, homogénea y única, de seis centímetros. No tiene daño hepático crónico y la alfafetoproteína es normal.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las alternativas: observar con ecografía anual, suspender los anticonceptivos y resecar, puncionar para biopsia, albendazol y cirugía, o evaluar trasplante. Piénsalo.',
        answer: 'Es la B. Hipoecogénica, única y homogénea, en una mujer con anticonceptivos: es un adenoma. Y mide más de cinco centímetros, así que se suspenden los estrógenos y se reseca. El distractor tentador es observar, pero eso es para el hemangioma, que sería hiperecogénico. Y el trasplante es para el hepatocarcinoma, que exige un hígado dañado.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 93',
      stem: 'Paciente de 70 años, con cirrosis hepática, sin hábito alcohólico actual, AgHBs negativo y anticuerpos anti-VHC negativos, Child Pugh clase A. Ecografía abdominal: lesión sólida en el lóbulo hepático derecho, de 3,5 cm, de aspecto hipoecogénico. Alfafetoproteína 5,3 ng/mL (VN 0–7).',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Metástasis hepática' },
        { letter: 'B', text: 'Adenoma hepático' },
        { letter: 'C', text: 'Carcinoma hepatocelular' },
        { letter: 'D', text: 'Quiste hepático' },
        { letter: 'E', text: 'Hemangioma hepático' },
      ],
      correct: 'B',
      explanation: 'Lesión sólida, hipoecogénica, homogénea, con alfafetoproteína normal: adenoma hepático. La cirrosis eleva el riesgo tanto de adenoma como de hepatocarcinoma, pero aquí la AFP no está elevada, lo que aleja el hepatocarcinoma. Las metástasis serían múltiples; el hemangioma sería hiperecogénico; el quiste sería anecogénico.',
      say: {
        stem: 'Ahora preguntas reales. Esta es del EUNACOM de julio de dos mil dieciséis. Paciente de setenta años, con cirrosis hepática, sin alcohol actual, con las serologías B y C negativas. La ecografía muestra una lesión sólida en el lóbulo hepático derecho, de tres coma cinco centímetros, hipoecogénica. La alfafetoproteína es de cinco coma tres, normal.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: metástasis, adenoma hepático, carcinoma hepatocelular, quiste hepático, o hemangioma hepático. Piénsalo.',
        answer: 'Es la B, adenoma hepático. La trampa es que hay cirrosis, y uno salta de inmediato a hepatocarcinoma. Pero fíjate en la alfafetoproteína: está normal. Y la cirrosis también aumenta el riesgo de adenoma, no solo de cáncer. Hipoecogénica, única y homogénea, con alfafetoproteína normal, es adenoma. El hemangioma sería hiperecogénico, y las metástasis vendrían múltiples.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 24',
      stem: 'Paciente con daño hepático crónico por consumo de alcohol, en TAC abdominal de control: tumor sólido en el lóbulo hepático derecho, de 3 cm, hipervascular en la fase arterial.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Nódulo de regeneración' },
        { letter: 'B', text: 'Hepatocarcinoma' },
        { letter: 'C', text: 'Hemangioma hepático' },
        { letter: 'D', text: 'Hiperplasia nodular' },
        { letter: 'E', text: 'Adenoma hepático' },
      ],
      correct: 'B',
      explanation: 'El daño hepático crónico se asocia tanto a adenoma como a hepatocarcinoma, pero la hipervascularización en fase arterial —el realce arterial que después lava— orienta a hepatocarcinoma. Es exactamente el patrón que se busca con el TAC o la RM trifásico.',
      say: {
        stem: 'Esta es del EUNACOM de diciembre de dos mil diecisiete. Paciente con daño hepático crónico por alcohol, al que en un TAC de control le encuentran un tumor sólido en el lóbulo hepático derecho, de tres centímetros, hipervascular en la fase arterial.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: nódulo de regeneración, hepatocarcinoma, hemangioma hepático, hiperplasia nodular, o adenoma hepático. Piénsalo.',
        answer: 'Es la B, hepatocarcinoma. El daño hepático crónico también da adenoma, pero lo que decide aquí es el patrón vascular: hipervascular en fase arterial es justo el realce arterial que buscamos en el TAC o la resonancia trifásica para confirmar hepatocarcinoma.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 54',
      stem: 'Paciente de 39 años, con obesidad, en quien una ecografía abdominal muestra hígado graso leve, un quiste hepático simple de 1,0 cm y un pólipo vesicular de 0,5 cm.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Biopsia por punción del pólipo' },
        { letter: 'B', text: 'Controlar con una nueva ecografía en 6 meses' },
        { letter: 'C', text: 'Laparotomía exploradora' },
        { letter: 'D', text: 'Colecistectomía laparoscópica' },
        { letter: 'E', text: 'Punción del quiste hepático' },
      ],
      correct: 'B',
      explanation: 'Pólipo vesicular bajo 10 mm, en un hallazgo de rutina: colesterolínico, se sigue con ecografía. El quiste hepático simple menor a 1 cm tampoco requiere intervención. Ni la colecistectomía ni la punción tienen indicación aquí: el corte para operar un pólipo es 1 cm o más.',
      say: {
        stem: 'Esta es del EUNACOM de diciembre de dos mil dieciocho. Paciente de treinta y nueve años, con obesidad, a quien una ecografía le muestra un hígado graso leve, un quiste hepático simple de un centímetro, y un pólipo vesicular de cero coma cinco centímetros.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: biopsia del pólipo, control ecográfico en seis meses, laparotomía exploradora, colecistectomía laparoscópica, o punción del quiste. Piénsalo.',
        answer: 'Es la B, control ecográfico en seis meses. El pólipo mide menos de un centímetro, así que es colesterolínico y se sigue, no se opera. Y el quiste hepático simple, menor a un centímetro, tampoco necesita nada. El distractor es la colecistectomía, pero esa se reserva para el pólipo de un centímetro o más.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo · banco EUNACOM',
      stem: 'En una ecografía solicitada por dispepsia se informa una lesión hepática de 3 cm, hiperecogénica, homogénea y de bordes bien definidos, en un paciente de 40 años sin antecedentes hepáticos ni baja de peso.',
      question: '¿Cuál es el diagnóstico más probable y la conducta?',
      options: [
        { letter: 'A', text: 'Metástasis hepática; TAC de tórax-abdomen-pelvis' },
        { letter: 'B', text: 'Hemangioma hepático; observación' },
        { letter: 'C', text: 'Hepatocarcinoma; derivar para resección' },
        { letter: 'D', text: 'Absceso hepático; antibióticos y drenaje' },
        { letter: 'E', text: 'Quiste hidatídico; albendazol' },
      ],
      correct: 'B',
      explanation: 'Lesión hiperecogénica, homogénea y bien delimitada en un hígado sano: hemangioma, la lesión hepática benigna más frecuente. Se observa; si hay dudas, se confirma con RM. La cirugía solo en hemangiomas gigantes y sintomáticos.',
      say: {
        stem: 'Y una última, del banco EUNACOM. En una ecografía pedida por dispepsia aparece una lesión hepática de tres centímetros, hiperecogénica, homogénea y de bordes bien definidos, en un paciente de cuarenta años sin antecedentes hepáticos ni baja de peso.',
        question: '¿Cuál es el diagnóstico más probable y la conducta?',
        options: 'Las opciones: metástasis, hemangioma, hepatocarcinoma, absceso, o quiste hidatídico. Piénsalo.',
        answer: 'La respuesta es la B, hemangioma, y se observa. La palabra clave es hiperecogénica y homogénea, en un hígado sano. Las metástasis serían múltiples e hipoecogénicas, el hepatocarcinoma necesita un hígado cirrótico, y el absceso vendría con fiebre y dolor. Si hubiera dudas, se confirma con resonancia, pero no se opera.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.1.023 · Quistes y abscesos hepáticos",
      "stem": "Hombre de 62 años, diabético, con 10 días de fiebre de 39 °C, calofríos y dolor en hipocondrio derecho. Leucocitos 19.000/mm³ y PCR 220 mg/L. La ecografía muestra una lesión hepática hipoecogénica de 7 cm, de contenido líquido con detritus.",
      "question": "¿Cuál es el tratamiento más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Hepatectomía de urgencia"
        },
        {
          "letter": "B",
          "text": "Albendazol y cirugía"
        },
        {
          "letter": "C",
          "text": "Antibióticos orales y control ecográfico en 3 meses"
        },
        {
          "letter": "D",
          "text": "Antibióticos endovenosos y drenaje percutáneo guiado por imagen"
        },
        {
          "letter": "E",
          "text": "Observación, ya que es un quiste simple"
        }
      ],
      "correct": "D",
      "explanation": "Fiebre, dolor en hipocondrio derecho y una colección hepática en un diabético es un absceso hepático piógeno. Se trata con antibióticos endovenosos que cubran gramnegativos y anaerobios, por ejemplo ceftriaxona y metronidazol, más drenaje percutáneo si mide más de 5 cm. Hay que buscar el origen, a menudo biliar.",
      "say": {
        "stem": "Vamos con una pregunta de práctica. Hombre de sesenta y dos años, diabético, con diez días de fiebre alta, calofríos y dolor en el hipocondrio derecho, con leucocitosis y PCR muy elevada. La ecografía muestra una lesión hepática de siete centímetros con contenido líquido y detritus.",
        "question": "¿Cuál es el tratamiento más adecuado?",
        "options": "Las opciones: hepatectomía de urgencia, albendazol y cirugía, antibióticos orales y control, antibióticos endovenosos con drenaje percutáneo o observar. Piénsalo.",
        "answer": "Es la D. Es un absceso hepático piógeno, y una colección grande necesita antibióticos endovenosos y drenaje percutáneo. El albendazol con cirugía es el distractor, porque es el tratamiento del quiste hidatídico, que no se presenta con este cuadro séptico."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.1.022 · Hidatidosis hepática",
      "stem": "Hombre de 40 años, criador de ovejas en la Región de Aysén, asintomático. En una ecografía solicitada por otro motivo se detecta un quiste hepático de 8 cm con membranas internas desprendidas y vesículas hijas.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Punción diagnóstica percutánea del quiste"
        },
        {
          "letter": "B",
          "text": "Biopsia hepática"
        },
        {
          "letter": "C",
          "text": "Observación, por estar asintomático"
        },
        {
          "letter": "D",
          "text": "Metronidazol y drenaje percutáneo"
        },
        {
          "letter": "E",
          "text": "Albendazol perioperatorio y cirugía"
        }
      ],
      "correct": "E",
      "explanation": "Un quiste con vesículas hijas en zona ganadera es un quiste hidatídico activo; se apoya con serología. Los quistes grandes o complicados se tratan con cirugía y albendazol antes y después, para reducir el riesgo de siembra. La punción sin protección puede causar anafilaxia y diseminación; la técnica PAIR solo en casos seleccionados.",
      "say": {
        "stem": "Vamos con una pregunta de práctica. Hombre de cuarenta años, criador de ovejas en Aysén, sin síntomas. En una ecografía por otro motivo aparece un quiste hepático de ocho centímetros, con membranas desprendidas y vesículas hijas en su interior.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: puncionar el quiste, biopsia hepática, observar, metronidazol con drenaje o albendazol con cirugía. Piénsalo.",
        "answer": "Es la E. Las vesículas hijas en un paciente de zona ganadera son un quiste hidatídico, y uno de ocho centímetros se opera con albendazol antes y después. Puncionarlo es la trampa: el líquido puede provocar una reacción anafiláctica y sembrar nuevos quistes."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2019 · Pregunta 180",
      "stem": "Mujer de 91 años, diabética, con antecedente de cólicos biliares a repetición, consulta por astenia, decaimiento, ictericia marcada y orinas oscuras de 3 semanas de evolución, asociadas a dolor epigástrico moderado. Al examen físico se aprecia ictericia de piel y mucosas y se palpa una masa en el hipocondrio derecho. Las pruebas hepáticas muestran SGOT 60 UI/L, SGPT 56 UI/L, GGT 570 UI/L, FA 755 UI/L, bilirrubina total 21 mg/dL y bilirrubina directa 19 mg/dL.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Cáncer de la cabeza de páncreas"
        },
        {
          "letter": "B",
          "text": "Cáncer de vesícula"
        },
        {
          "letter": "C",
          "text": "Colangiocarcinoma"
        },
        {
          "letter": "D",
          "text": "Hepatocarcinoma"
        },
        {
          "letter": "E",
          "text": "Cáncer de la ampolla de Vater"
        }
      ],
      "correct": "B",
      "explanation": "Colestasia marcada con masa en hipocondrio derecho en una mujer mayor con cólicos biliares de larga data orienta a cáncer de vesícula, muy frecuente en Chile. La colelitiasis es su principal factor de riesgo, y por eso existe la colecistectomía preventiva GES entre los 35 y 49 años.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil diecinueve. Mujer de noventa y un años, diabética, con cólicos biliares a repetición, que hace tres semanas tiene cansancio, ictericia marcada, orina oscura y dolor epigástrico moderado. Se palpa una masa en el hipocondrio derecho y la bilirrubina está en veintiuno, casi toda directa.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: cáncer de cabeza de páncreas, cáncer de vesícula, colangiocarcinoma, hepatocarcinoma, o cáncer de la ampolla de Vater. Piénsalo.",
        "answer": "Es la B. Mujer, mayor, con años de cálculos biliares, ictericia obstructiva y una masa en el hipocondrio derecho: es el perfil del cáncer de vesícula en Chile. El cáncer de páncreas tienta porque también da ictericia indolora con vesícula palpable, pero aquí el antecedente de colelitiasis inclina la balanza."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.1.024 · Tumores hepáticos",
      "stem": "Hombre de 63 años con cirrosis hepática por alcohol, en seguimiento con ecografía semestral, presenta un nódulo hepático nuevo de 3 cm. La TAC trifásica muestra captación intensa de contraste en fase arterial y lavado en las fases portal y tardía.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Hemangioma hepático"
        },
        {
          "letter": "B",
          "text": "Hiperplasia nodular focal"
        },
        {
          "letter": "C",
          "text": "Metástasis de cáncer colorrectal"
        },
        {
          "letter": "D",
          "text": "Hepatocarcinoma"
        },
        {
          "letter": "E",
          "text": "Absceso hepático"
        }
      ],
      "correct": "D",
      "explanation": "En un paciente cirrótico, un nódulo mayor de 1 cm con hiperrealce arterial y lavado en fase portal o tardía es diagnóstico de hepatocarcinoma por imagen, sin necesidad de biopsia. El hemangioma muestra relleno periférico globular centrípeto, y la hiperplasia nodular focal aparece en mujeres jóvenes con hígado sano.",
      "say": {
        "stem": "Hombre de sesenta y tres años con cirrosis alcohólica, en control con ecografía cada seis meses, a quien aparece un nódulo hepático nuevo de tres centímetros. En la TAC trifásica capta intensamente en fase arterial y se lava en las fases portal y tardía.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: hemangioma, hiperplasia nodular focal, metástasis de cáncer colorrectal, hepatocarcinoma o absceso hepático. Piénsalo.",
        "answer": "Es la D. En un cirrótico, captación arterial más lavado es hepatocarcinoma, y ni siquiera necesitas biopsia. El hemangioma tienta por ser el tumor hepático benigno más frecuente, pero capta de la periferia hacia el centro y no se lava."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2017 · Pregunta 95",
      "stem": "Paciente de 60 años se realiza una colecistectomía laparoscópica electiva por colelitiasis. La biopsia informa adenocarcinoma invasor en el fondo vesicular, que compromete hasta la subserosa. Una TAC de abdomen y pelvis con contraste no muestra metástasis.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Quimioterapia"
        },
        {
          "letter": "B",
          "text": "Radioterapia"
        },
        {
          "letter": "C",
          "text": "Cuidados paliativos"
        },
        {
          "letter": "D",
          "text": "Control con TAC cada 3 meses"
        },
        {
          "letter": "E",
          "text": "Colecistectomía radical"
        }
      ],
      "correct": "E",
      "explanation": "En un cáncer de vesícula incidental T1b o mayor (aquí T2, subseroso) sin enfermedad a distancia, está indicada la reintervención con colecistectomía radical o extendida: resección del lecho hepático y linfadenectomía, que mejora la sobrevida. Solo el T1a, limitado a la lámina propia, se considera tratado con la colecistectomía simple.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil diecisiete. Paciente de sesenta años operado de colecistectomía laparoscópica por colelitiasis. La biopsia muestra un adenocarcinoma invasor en el fondo, que llega a la subserosa, y la TAC no muestra metástasis.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: quimioterapia, radioterapia, cuidados paliativos, control con TAC cada tres meses, o colecistectomía radical. Piénsalo.",
        "answer": "Es la E. Un cáncer de vesícula incidental que llega a la subserosa, sin metástasis, se reopera con colecistectomía radical, sacando el lecho hepático y los ganglios. El control con TAC tienta porque la vesícula ya se sacó, pero eso solo basta en tumores muy superficiales, limitados a la lámina propia."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.08.5.003 · Biopsia hepática",
      "stem": "Hombre de 63 años con cirrosis por virus hepatitis C, en seguimiento con ecografía semestral, presenta un nódulo hepático de 3 cm. En la TAC trifásica la lesión muestra hiperrealce en fase arterial y lavado en fases portal y tardía.",
      "question": "¿Cuál es la conducta más adecuada respecto del diagnóstico?",
      "options": [
        {
          "letter": "A",
          "text": "Biopsia hepática percutánea obligatoria antes de tratar"
        },
        {
          "letter": "B",
          "text": "Control con ecografía en 6 meses"
        },
        {
          "letter": "C",
          "text": "Diagnóstico de carcinoma hepatocelular sin necesidad de biopsia y derivar para tratamiento"
        },
        {
          "letter": "D",
          "text": "Medir CA 19-9 para confirmar"
        },
        {
          "letter": "E",
          "text": "Biopsia transyugular"
        }
      ],
      "correct": "C",
      "explanation": "En un cirrótico, un nódulo mayor de 1 cm con hiperrealce arterial y lavado en fase portal o tardía en TAC o RM permite diagnosticar carcinoma hepatocelular sin biopsia. La biopsia se reserva para lesiones con imagen atípica o hígado no cirrótico, por su riesgo de sangrado y siembra tumoral. El CA 19-9 se usa en colangiocarcinoma.",
      "say": {
        "stem": "Hombre cirrótico con un nódulo de tres centímetros con realce arterial y lavado en la TAC trifásica.",
        "question": "¿Qué haces respecto al diagnóstico?",
        "options": "Las opciones: biopsia obligatoria, control en seis meses, diagnosticar hepatocarcinoma sin biopsia, CA diecinueve nueve o biopsia transyugular. Piénsalo.",
        "answer": "Es la C. Se diagnostica hepatocarcinoma por imagen, sin biopsia. La biopsia parece más segura, pero no es necesaria con un patrón típico y tiene riesgo de sangrado y siembra."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Se observan', tag: 'Benignas', kind: 'normal', items: [
          { t: 'Anecogénica lisa = quiste simple', d: 'Hiperecogénica homogénea = hemangioma',
            say: 'Cerremos. Anecogénica y lisa es un quiste simple; hiperecogénica y homogénea es un hemangioma. Los dos se observan.' },
        ] },
        { title: 'Se tratan', tag: 'Contexto', kind: 'alert', items: [
          { t: 'Adenoma: resecar si > 5 cm', d: 'Y suspender estrógenos',
            say: 'Hipoecogénica única en una mujer con anticonceptivos es un adenoma: suspender estrógenos y resecar si pasa de cinco centímetros.' },
          { t: 'Cirrótico + AFP alta = hepatocarcinoma', d: 'Múltiples = metástasis',
            say: 'Heterogénea en un cirrótico con alfafetoproteína alta es hepatocarcinoma, y si son múltiples, metástasis.' },
        ] },
        { title: 'Vesícula', tag: 'El corte es 1 cm', kind: 'key', items: [
          { t: '10 mm o más: colecistectomía', d: 'Sospecha de invasor: cirugía abierta',
            say: 'Y en la vesícula, el corte es un centímetro. Si te llevas una sola idea de hoy: la ecografía te da la palabra clave, pero el contexto del paciente es el que decide. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Lesión hepática en la ecografía',
    root: N('start', 'Lesión hepática', 'Hallazgo en la ecografía',
      'Aparece una lesión en el hígado en la ecografía. Su aspecto y el contexto del paciente orientan casi todo.',
      ['', N('q', '¿Cómo se ve?', 'Quística, sólida homogénea o heterogénea',
        '¿Es quística, sólida y homogénea, o heterogénea?',
        ['Quística', N('q', '¿Tabiques o membrana?', 'Contexto rural, perros',
          '¿Tiene tabiques, membrana o vesículas hijas?',
          ['NO', N('ok', 'Quiste simple: observar', 'Anecogénico, pared fina',
            'Anecogénico y de pared fina, sin tabiques: quiste simple, se observa.')],
          ['SÍ', N('refer', 'Hidatídico: albendazol + cirugía', 'Nunca punción libre',
            'Con tabiques o membrana en un contexto rural: quiste hidatídico. Albendazol y cirugía, y nunca una punción libre, por riesgo de anafilaxia.')])],
        ['Sólida homogénea', N('q', '¿Hiper o hipoecogénica?', 'Benignas',
          '¿Es hiperecogénica o hipoecogénica?',
          ['Hiper', N('ok', 'Hemangioma: observar', 'La benigna más frecuente',
            'Hiperecogénica y homogénea: hemangioma, la lesión benigna más frecuente. Se observa.')],
          ['Hipo', N('refer', 'Adenoma: suspender estrógenos', 'Resecar si > 5 cm',
            'Hipoecogénica y única en una mujer con anticonceptivos: adenoma. Se suspenden los estrógenos y se reseca si mide más de cinco centímetros o da síntomas.')])],
        ['Heterogénea', N('alert', 'Hepatocarcinoma o metástasis', 'Cirrosis + AFP alta · múltiples',
          'Heterogénea e irregular en un cirrótico con alfafetoproteína alta: hepatocarcinoma, se confirma con TAC o resonancia trifásica. Si son varias lesiones hipoecogénicas, metástasis, y se busca el primario.')])]),
  },
};
