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
            say: 'Si el quiste tiene membrana, tabiques o vesículas hijas, en un paciente rural que convive con perros, piensa en un quiste hidatídico.' },
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
            say: 'Ahora las sólidas. La benigna más frecuente es el hemangioma: hiperecogénico, homogéneo y bien delimitado. Se observa; solo se opera si es gigante y da síntomas.' },
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
            say: 'Se confirma con TAC o resonancia trifásica: realce en fase arterial y lavado después. Se trata con resección, ablación o trasplante, según los criterios de Milán.' },
        ] },
        { title: 'Metástasis', tag: 'El hígado más frecuente', kind: 'alert', items: [
          { t: 'Lesiones múltiples, hipoecogénicas', d: 'Buscar el primario',
            say: 'Y si las lesiones son múltiples e hipoecogénicas, son metástasis: hay que buscar el primario, en colon, mama, pulmón o estómago. En el cáncer de colon, algunas son resecables con intención curativa.' },
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
