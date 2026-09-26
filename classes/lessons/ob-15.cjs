// Clase 3.15 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_obstetricia.cjs (ob-15).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ob-15',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cómo se define, qué fármaco frena y qué protege al cerebro del prematuro',
      say: 'Bienvenido a la amenaza de parto prematuro: cómo la defines, qué tocolítico usas, y por qué das corticoides y sulfato de magnesio. Es la continuación natural de las dos clases anteriores: ahí viste las urgencias que obligan a nacer ya; hoy vas a ver cómo ganar tiempo, cuando ganar tiempo todavía es posible. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico',
      title: 'Contracciones y cuello: los dos datos que confirman todo',
      nodes: [
        { id: 'con', col: 0, row: 1, k: 'cause', t: 'Contracciones dolorosas frecuentes', s: 'Cuatro o más en veinte minutos' },
        { id: 'cer', col: 1, row: 0, k: 'mech', t: 'Cervicometría transvaginal', s: 'Mide el cuello con vejiga vacía' },
        { id: 'cor', col: 2, row: 0, k: 'risk', t: 'Cuello menor a 25 milímetros', s: 'El predictor más fuerte que existe' },
        { id: 'app', col: 3, row: 1, k: 'alert', t: 'Amenaza de parto prematuro', s: 'Entre 22 y 34 semanas' },
        { id: 'lar', col: 2, row: 2, k: 'good', t: 'Cuello largo, sin dilatación', s: 'Riesgo bajo, se observa' },
      ],
      edges: [
        { from: 'con', to: 'cer' },
        { from: 'cer', to: 'cor', label: 'corto' },
        { from: 'cer', to: 'lar', label: 'largo' },
        { from: 'cor', to: 'app' },
      ],
      steps: [
        { show: ['con'], note: 'No basta con que duela',
          say: 'Una amenaza de parto prematuro no es solo que la paciente sienta contracciones. Necesitas dinámica uterina de verdad: cuatro o más contracciones dolorosas en veinte a treinta minutos.' },
        { show: ['cer'], note: 'Vejiga vacía, por vía transvaginal',
          say: 'Y el segundo dato lo da la cervicometría transvaginal, que mide el largo del cuello con la vejiga vacía.' },
        { show: ['cor'], note: 'El predictor independiente más fuerte',
          say: 'Un cuello menor a veinticinco milímetros es el predictor independiente más fuerte de parto prematuro que existe, y es justo el corte que se pregunta.' },
        { show: ['app'], note: 'Contracciones más cuello corto',
          say: 'Con contracciones frecuentes y ese cuello acortado, entre las veintidós y las treinta y cuatro semanas, confirmas la amenaza de parto prematuro.' },
        { show: ['lar'], note: 'La progesterona previene, no trata',
          say: 'Si el cuello es largo y no hay dilatación, el riesgo es bajo y basta con observar. Y si el cuello viene corto desde antes, sin contracciones, ahí lo que se usa es progesterona vaginal como prevención, no como tratamiento de una crisis ya en curso.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tocolisis',
      title: 'El nifedipino no cura, solo compra 48 horas',
      nodes: [
        { id: 'obj', col: 0, row: 1, k: 'start', t: 'Objetivo real de la tocolisis', s: 'Frenar la dinámica 48 horas' },
        { id: 'nif', col: 1, row: 0, k: 'good', t: 'Nifedipino oral', s: 'Primera línea desde las 32 semanas' },
        { id: 'ind', col: 1, row: 2, k: 'good', t: 'Indometacina', s: 'Solo si es menor a 32 semanas' },
        { id: 'con', col: 2, row: 1, k: 'trap', t: 'Contraindicaciones absolutas', s: 'Corioamnionitis, DPPNI, eclampsia' },
        { id: 'no', col: 3, row: 1, k: 'alert', t: 'No se frena el parto', s: 'Se nace, aunque sea prematuro' },
      ],
      edges: [
        { from: 'obj', to: 'nif' }, { from: 'obj', to: 'ind' },
        { from: 'nif', to: 'con' }, { from: 'con', to: 'no' },
      ],
      steps: [
        { show: ['obj'], note: 'No prolonga el embarazo al término',
          say: 'Ojo con esto, porque es lo que más se pregunta mal entendido: la tocolisis no evita el parto prematuro a largo plazo. Su único objetivo es frenar la dinámica uterina por cuarenta y ocho horas.' },
        { show: ['nif'], note: 'Bloqueador de canales de calcio',
          say: 'Y esas cuarenta y ocho horas sirven para completar los corticoides, dar el sulfato de magnesio si corresponde, y trasladar a la paciente a un centro con neonatología. El fármaco de primera línea en Chile es el nifedipino oral, desde las treinta y dos semanas.' },
        { show: ['ind'], note: 'Cierra el ductus si se usa tarde',
          say: 'Antes de las treinta y dos semanas se prefiere la indometacina, pero nunca después, porque cierra antes de tiempo el ductus arterioso del feto.' },
        { show: ['con'], note: 'Frenar aquí sería un error grave',
          say: 'Y hay contraindicaciones absolutas que ya conoces de las clases anteriores: corioamnionitis, desprendimiento de placenta, eclampsia, o sufrimiento fetal agudo.' },
        { show: ['no'], note: 'El escenario decide, no el fármaco',
          say: 'En cualquiera de esos escenarios, frenar el parto sería un error grave: ahí no se tocoliza, se nace, aunque sea prematuro.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Los otros dos pilares',
      title: 'Corticoides y sulfato de magnesio',
      cards: [
        { title: 'Maduración pulmonar', tag: 'Entre 24 y 34 semanas', kind: 'pharma', items: [
          { t: 'Betametasona, 2 dosis en 24 horas', d: 'Baja la membrana hialina y la hemorragia',
            say: 'Los corticoides se dan siempre que hay riesgo de parto prematuro entre las veinticuatro y las treinta y cuatro semanas: betametasona, dos dosis, una cada veinticuatro horas. Bajan a la mitad la enfermedad de membrana hialina, y también la hemorragia intraventricular.' },
        ] },
        { title: 'Neuroprotección fetal', tag: 'Menor a 32 semanas', kind: 'alert', items: [
          { t: 'Sulfato de magnesio si el parto es inminente', d: 'Baja la parálisis cerebral del prematuro',
            say: 'El sulfato de magnesio no frena el parto, y esa es justamente la trampa del examen. Se da cuando el parto ya es inminente y la gestación es menor a treinta y dos semanas, y lo que hace es bajar la tasa de parálisis cerebral del recién nacido.' },
        ] },
        { title: 'Prevención primaria', tag: 'Antes de la crisis', kind: 'key', items: [
          { t: 'Progesterona vaginal hasta las 36 semanas', d: 'Si el cuello viene corto o hay antecedente',
            say: 'Y la prevención primaria, con progesterona vaginal hasta las treinta y seis semanas, en toda paciente con cuello corto en la ecografía de rutina o con un parto prematuro previo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Segunda línea',
      title: 'Si el nifedipino no basta, y la profilaxis que no debes olvidar',
      cards: [
        { title: 'Tocolíticos de segunda línea', tag: 'Si falla el nifedipino', kind: 'pharma', items: [
          { t: 'Atosibán, antagonista de la oxitocina', d: 'Muy seguro, pero de alto costo',
            say: 'Si el nifedipino no frena la dinámica, la alternativa es el atosibán, un antagonista de la oxitocina con muy buen perfil de seguridad materna, aunque de mayor costo.' },
          { t: 'Fenoterol, casi en desuso', d: 'Por edema pulmonar y taquicardia',
            say: 'El fenoterol quedó casi en desuso, porque puede provocar edema pulmonar, taquicardia e hiperglicemia en la madre.' },
        ] },
        { title: 'Profilaxis del estreptococo', tag: 'Todo parto prematuro', kind: 'criteria', items: [
          { t: 'Penicilina si el cultivo es positivo', d: 'O si el resultado se desconoce',
            say: 'Y no olvides la profilaxis intraparto contra el estreptococo del grupo B, con penicilina o ampicilina, en todo parto prematuro con cultivo positivo o sin resultado conocido.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos los cuatro pilares del manejo en un solo árbol.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Qué hacer y qué fármaco corresponde',
      head: ['Situación', 'Conducta', 'Error frecuente'],
      rows: [
        { cells: ['Cuello corto, sin antecedentes', 'Progesterona vaginal', 'Hacer un cerclaje de rutina'],
          say: 'Repasemos en una tabla. Cuello corto, sin antecedentes: progesterona vaginal. El error es indicar un cerclaje sin que haya un parto muy prematuro previo.' },
        { cells: ['APP desde las 32 semanas', 'Nifedipino oral', 'Usar indometacina'],
          say: 'Amenaza de parto prematuro desde las treinta y dos semanas: nifedipino oral. La indometacina ya no corresponde a esta edad.' },
        { cells: ['Parto inminente, menor a 32 semanas', 'Sulfato de magnesio', 'Olvidar la neuroprotección'],
          say: 'Parto inminente antes de las treinta y dos semanas: sulfato de magnesio. El error clásico es olvidarlo, pensando que ya se dio suficiente con los corticoides.' },
        { cells: ['Corioamnionitis o DPPNI', 'Nunca tocolisis, se interrumpe', 'Intentar frenar el parto'],
          say: 'Con corioamnionitis o desprendimiento: nunca tocolisis, se interrumpe. Intentar frenar el parto ahí pone en riesgo a los dos.' },
        { cells: ['Trabajo de parto en fase activa', 'Ya no sirven los tocolíticos', 'Insistir con nifedipino'],
          say: 'Y si ya está en fase activa, con dilatación avanzada, los tocolíticos ya no sirven. Insistir con nifedipino solo retrasa lo inevitable.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Primigesta de 29 semanas consulta por dolor tipo cólico menstrual de 3 horas de evolución. Al examen: signos vitales normales, afebril. El tocodinamómetro muestra 4 contracciones dolorosas en 20 minutos. La cervicometría transvaginal muestra un cuello de 18 milímetros, con dilatación de 1,5 centímetros. No hay pérdida de líquido ni sangrado, y el monitor fetal es reactivo.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Indicar reposo en domicilio y control en una semana' },
        { letter: 'B', text: 'Hospitalizar e iniciar nifedipino, betametasona y sulfato de magnesio' },
        { letter: 'C', text: 'Realizar cesárea de urgencia por riesgo de parto inminente' },
        { letter: 'D', text: 'Administrar indometacina rectal por 14 días y dar el alta' },
        { letter: 'E', text: 'Realizar un cerclaje cervical de urgencia' },
      ],
      correct: 'B',
      explanation: 'Contracciones frecuentes con cuello corto y dilatado a las 29 semanas confirman una amenaza de parto prematuro, sin contraindicaciones para tocolisis. El manejo integral es nifedipino, betametasona, y sulfato de magnesio por ser menor a 32 semanas.',
      say: {
        stem: 'Vamos con un caso. Primigesta de veintinueve semanas, con dolor tipo cólico de tres horas de evolución. Está afebril y con signos vitales normales. El monitor muestra cuatro contracciones dolorosas en veinte minutos, y la cervicometría muestra un cuello de dieciocho milímetros, con dilatación de un centímetro y medio. No hay sangrado ni pérdida de líquido, y el feto está reactivo.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: reposo en domicilio, hospitalizar con nifedipino, betametasona y sulfato de magnesio, cesárea de urgencia, indometacina rectal por catorce días, o un cerclaje de urgencia. Piénsalo.',
        answer: 'Es la B. Contracciones frecuentes con un cuello corto y ya dilatado a las veintinueve semanas confirman la amenaza de parto prematuro, y no hay ninguna contraindicación para frenarla. El manejo completo es nifedipino para la tocolisis, betametasona para el pulmón, y sulfato de magnesio porque es menor a treinta y dos semanas. El cerclaje de urgencia con contracciones activas está contraindicado.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 72',
      stem: 'Una paciente de 27 años, cursando un embarazo de 32 semanas, consulta en urgencias por contracciones uterinas dolorosas. Al examen físico se constatan contracciones de tres en diez minutos, cuello uterino borrado en un 50 por ciento y con un centímetro de dilatación. La frecuencia cardíaca fetal es de 130 por minuto, con buena variabilidad.',
      question: '¿Cuál de los siguientes fármacos es el más adecuado para el manejo inicial?',
      options: [
        { letter: 'A', text: 'Ampicilina' },
        { letter: 'B', text: 'Indometacina' },
        { letter: 'C', text: 'Nifedipino' },
        { letter: 'D', text: 'Sulfato de magnesio' },
        { letter: 'E', text: 'Atosibán' },
      ],
      correct: 'C',
      explanation: 'A partir de las 32 semanas, el tocolítico de primera línea es el nifedipino oral. La indometacina se reserva para menores de 32 semanas. El atosibán es de segunda línea.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil veinticuatro. Paciente de veintisiete años, con un embarazo de treinta y dos semanas, con contracciones dolorosas. Tiene tres contracciones cada diez minutos, el cuello borrado a la mitad y un centímetro de dilatación. El feto está en ciento treinta, con buena variabilidad.',
        question: '¿Cuál de los siguientes fármacos es el más adecuado para el manejo inicial?',
        options: 'Las opciones: ampicilina, indometacina, nifedipino, sulfato de magnesio, o atosibán. Piénsalo.',
        answer: 'Es la C, nifedipino. Desde las treinta y dos semanas en adelante, el tocolítico de primera línea es el nifedipino oral. La indometacina ya quedó atrás, porque se reserva para menos de treinta y dos semanas, y el atosibán es la alternativa de segunda línea si el nifedipino falla.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 155',
      stem: 'Una primigesta de 23 años, cursando un embarazo de 20 semanas, se realiza una ecografía transvaginal que muestra un cuello de 20 milímetros de longitud, sin otras alteraciones.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Indicar pesario cervical' },
        { letter: 'B', text: 'Iniciar progesterona vaginal' },
        { letter: 'C', text: 'Realizar cerclaje' },
        { letter: 'D', text: 'Administrar corticoides sistémicos' },
        { letter: 'E', text: 'Observar la evolución' },
      ],
      correct: 'B',
      explanation: 'Cuello menor a 25 mm sin antecedentes de partos muy prematuros ni incompetencia cervical: se maneja con progesterona vaginal como prevención primaria. El cerclaje se reserva para quien tiene ese antecedente.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil diecinueve. Primigesta de veintitrés años, con un embarazo de veinte semanas, a quien la ecografía transvaginal le muestra un cuello de veinte milímetros, sin otras alteraciones.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: indicar un pesario cervical, iniciar progesterona vaginal, hacer un cerclaje, dar corticoides sistémicos, u observar la evolución. Piénsalo.',
        answer: 'Es la B, progesterona vaginal. Tiene el cuello corto, bajo los veinticinco milímetros, pero es primigesta y no tiene ningún antecedente de parto muy prematuro. Sin ese antecedente, el cerclaje no corresponde: lo que se indica es progesterona vaginal, como prevención primaria.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 164',
      stem: 'Una paciente de 32 años, cursando un embarazo de 32 semanas, consulta por dolor abdominal. Se constatan contracciones uterinas de tres a cuatro en diez minutos y un tacto vaginal que muestra dilatación de 6 centímetros, con borramiento completo.',
      question: '¿Cuál de los siguientes fármacos es el más importante para mejorar el pronóstico del recién nacido?',
      options: [
        { letter: 'A', text: 'Corticoides' },
        { letter: 'B', text: 'Sulfato de magnesio' },
        { letter: 'C', text: 'Tocolíticos' },
        { letter: 'D', text: 'Antibióticos' },
        { letter: 'E', text: 'Progesterona' },
      ],
      correct: 'B',
      explanation: 'Con 6 cm de dilatación y borramiento completo, el parto ya es inminente: no alcanzan a actuar ni los tocolíticos ni los corticoides. Lo que sí sigue teniendo efecto y protege al recién nacido es el sulfato de magnesio.',
      say: {
        stem: 'La última pregunta real, del EUNACOM de diciembre de dos mil diecisiete. Paciente de treinta y dos años, con un embarazo de treinta y dos semanas, con contracciones frecuentes y un tacto vaginal que ya muestra seis centímetros de dilatación, con el cuello completamente borrado.',
        question: '¿Cuál de los siguientes fármacos es el más importante para mejorar el pronóstico del recién nacido?',
        options: 'Las opciones: corticoides, sulfato de magnesio, tocolíticos, antibióticos, o progesterona. Piénsalo.',
        answer: 'Es la B, sulfato de magnesio. Con seis centímetros y el cuello borrado, el parto ya es inminente: ni los tocolíticos van a frenar nada, ni los corticoides alcanzan a hacer efecto a tiempo. Lo que sigue teniendo un beneficio real, protegiendo el cerebro del recién nacido, es el sulfato de magnesio.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Contracciones + cuello', kind: 'key', items: [
          { t: 'Cuello menor a 25 milímetros', d: 'El predictor más fuerte de parto prematuro',
            say: 'Cerremos con las reglas de oro. Contracciones frecuentes más un cuello menor a veinticinco milímetros confirman la amenaza de parto prematuro.' },
        ] },
        { title: 'Tocolisis', tag: 'Solo compra tiempo', kind: 'pharma', items: [
          { t: 'Nifedipino desde las 32 semanas', d: 'Solo para ganar 48 horas',
            say: 'El nifedipino es la primera línea desde las treinta y dos semanas, y su único objetivo es ganar cuarenta y ocho horas, no evitar el parto.' },
          { t: 'Nunca con corioamnionitis o DPPNI', d: 'Ahí se nace, no se frena',
            say: 'Y nunca la uses con corioamnionitis o desprendimiento de placenta: ahí se nace, no se frena.' },
        ] },
        { title: 'Neuroprotección', tag: 'No lo olvides', kind: 'alert', items: [
          { t: 'Sulfato de magnesio si es menor a 32', d: 'Con parto ya inminente',
            say: 'Y si el parto es inminente y la gestación es menor a treinta y dos semanas, sulfato de magnesio, para proteger el cerebro del recién nacido. Si te llevas una sola idea de hoy: la tocolisis solo compra tiempo, y ese tiempo es para dar corticoides y sulfato de magnesio. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Amenaza de parto prematuro: los cuatro pilares del manejo',
    root: N('start', 'Contracciones + cuello corto', 'Entre 22 y 34 semanas',
      'Con la amenaza de parto prematuro confirmada, cuatro preguntas ordenan el manejo completo.',
      ['¿Hay contraindicación de tocolisis?', N('q', 'Corioamnionitis, DPPNI o eclampsia', 'Ahí se nace, no se frena',
        'Si hay corioamnionitis, desprendimiento de placenta o eclampsia, la tocolisis está prohibida: se interrumpe el embarazo, no se frena el parto.')],
      ['Sin contraindicación, 32 semanas o más', N('ok', 'Nifedipino oral', 'Solo para ganar 48 horas',
        'Sin contraindicaciones y con treinta y dos semanas o más, nifedipino oral, con el único fin de ganar cuarenta y ocho horas.')],
      ['Sin contraindicación, menor a 32 semanas', N('ok', 'Indometacina + sulfato de magnesio', 'Neuroprotección obligatoria',
        'Bajo las treinta y dos semanas se prefiere la indometacina, y como el parto puede ser inminente, sumas sulfato de magnesio para proteger el cerebro fetal.')],
      ['En cualquier caso, 24 a 34 semanas', N('do', 'Betametasona', 'Dos dosis en 24 horas',
        'Y en paralelo, siempre que la gestación esté entre veinticuatro y treinta y cuatro semanas, betametasona para madurar el pulmón fetal.')]),
  },
};
