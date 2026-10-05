// Clase 14.15 (Otorrinolaringología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_otorrino.cjs (orl-15). Preguntas: banco real EUNACOM (class_questions.cjs --search).
// El banco real no tiene pregunta de criterios de Paradise: se usa 1 del libro como "Caso representativo".

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'orl-15',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Respirador bucal, SAHOS infantil, escala de Brodsky y cuándo se operan las amígdalas y las adenoides',
      say: 'Bienvenido. En esta clase vemos el niño que ronca y respira por la boca. El examen quiere que sepas dos cosas: cuál es la indicación quirúrgica absoluta, que es el síndrome de apnea obstructiva del sueño, y cuándo las infecciones repetidas justifican operar, que se decide con los criterios de Paradise. Parto por el mecanismo.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Del tejido linfoide a la facies adenoidea',
      nodes: [
        { id: 'wa', col: 0, row: 1, k: 'cause', t: 'Anillo de Waldeyer', s: 'Máximo desarrollo entre 2 y 6 años' },
        { id: 'hi', col: 1, row: 1, k: 'mech', t: 'Adenoides y amígdalas grandes', s: 'Obstrucción mecánica fija' },
        { id: 'rb', col: 2, row: 0, k: 'effect', t: 'Respirador bucal crónico', s: 'La nariz no deja pasar aire' },
        { id: 'fa', col: 3, row: 0, k: 'risk', t: 'Facies adenoidea', s: 'Cara alargada, paladar ojival' },
        { id: 'sa', col: 2, row: 2, k: 'alert', t: 'Obstrucción nocturna', s: 'Ronquido y apneas' },
      ],
      edges: [
        { from: 'wa', to: 'hi' },
        { from: 'hi', to: 'rb' },
        { from: 'rb', to: 'fa' },
        { from: 'hi', to: 'sa' },
      ],
      steps: [
        { show: ['wa', 'hi'], note: 'Crecimiento desproporcionado del tejido linfoide',
          say: 'El anillo linfático de Waldeyer, que incluye las adenoides en el cavum y las amígdalas palatinas, tiene su mayor desarrollo entre los dos y los seis años. Si crece de forma desproporcionada, produce una obstrucción mecánica fija de la vía aérea y digestiva alta. Es la causa más frecuente de obstrucción de la vía aérea superior en pediatría.' },
        { show: ['rb', 'fa'], note: 'Boca entreabierta, paladar ojival, ojeras',
          say: 'Si el niño respira por la boca durante años, cambia el desarrollo de su cara. Es la facies adenoidea: cara alargada y estrecha, boca siempre entreabierta, labio superior corto, labio inferior evertido, paladar ojival, mandíbula pequeña, maloclusión dentaria y ojeras oscuras por la estasis venosa.' },
        { show: ['sa'], note: 'De noche, la obstrucción se hace peligrosa',
          say: 'Y de noche, con los músculos relajados, la obstrucción se vuelve más crítica. Ahí aparece el ronquido y, en los casos importantes, las apneas.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'SAHOS infantil',
      cards: [
        { title: 'Durante el sueño', tag: 'Lo que cuentan los padres', kind: 'key', items: [
          { t: 'Ronquido y pausas respiratorias', d: 'Seguidas de ronquido de rescate',
            say: 'El síndrome de apnea hipoapnea obstructiva del sueño en el niño se cuenta desde la noche. Los padres relatan ronquido fuerte, pausas en que el niño deja de respirar y que terminan con un ronquido de rescate.' },
          { t: 'Sueño inquieto y sudoración', d: 'Enuresis secundaria, cuello en hiperextensión',
            say: 'Además el sueño es inquieto y fragmentado, con sudoración profusa, enuresis secundaria y posturas raras para dormir, con el cuello en hiperextensión.' },
        ] },
        { title: 'Durante el día', tag: 'No es como el adulto', kind: 'alert', items: [
          { t: 'Hiperactivo, no somnoliento', d: 'Irritable; mal rendimiento escolar',
            say: 'Aquí viene la diferencia que se pregunta. El adulto con apnea tiene somnolencia diurna. El niño, en cambio, está hiperactivo, irritable, no se concentra y rinde mal en el colegio, y muchas veces se le diagnostica erróneamente un trastorno por déficit de atención.' },
          { t: 'Retraso del crecimiento', d: 'Más gasto calórico, menos hormona de crecimiento',
            say: 'Puede haber retraso pondoestatural, porque el niño gasta más calorías y secreta menos hormona de crecimiento por la noche.' },
          { t: 'Cor pulmonale crónico', d: 'Hipoxemia e hipercapnia nocturnas',
            say: 'En los casos graves y prolongados, la hipoxemia y la hipercapnia de la noche producen vasoconstricción pulmonar y un cor pulmonale crónico, con hipertrofia del ventrículo derecho. Es la complicación que justifica operar.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Examen físico',
      title: 'Escala de Brodsky',
      head: ['Grado', 'Obstrucción', 'Hallazgo', 'Relevancia'],
      rows: [
        { cells: ['0', '0%', 'Sin amígdalas o en fosas profundas', 'Sin repercusión'],
          say: 'La escala de Brodsky gradúa el tamaño de las amígdalas palatinas según cuánta orofaringe ocupan. El grado cero es amigdalectomía previa o amígdalas en fosas profundas, sin repercusión clínica.' },
        { cells: ['1', 'Menos de 25%', 'Dentro de las fosas', 'Normal'],
          say: 'En el grado uno, las amígdalas están confinadas a las fosas amigdalinas, y se considera normal.' },
        { cells: ['2', '25 a 50%', 'Pasan los pilares, sin tocar la línea media', 'Común en niños; observar'],
          say: 'En el grado dos sobrepasan los pilares anteriores sin llegar a la línea media. Es común en niños y se observa.' },
        { cells: ['3', '50 a 75%', 'Más de la mitad de la orofaringe', 'Respirador bucal; evaluar SAHOS'],
          say: 'En el grado tres ocupan más de la mitad del espacio orofaríngeo. Es el respirador bucal frecuente y obliga a buscar apnea del sueño.' },
        { cells: ['4', 'Más de 75%', 'Se tocan en la línea media', 'Alta indicación quirúrgica'],
          say: 'En el grado cuatro, las amígdalas se tocan en la línea media: son las amígdalas en beso. Ocupan más de tres cuartos de la vía aérea y tienen alta indicación quirúrgica por el riesgo de apneas obstructivas.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Cirugía',
      title: 'Indicaciones de adenoamigdalectomía',
      cards: [
        { title: 'Indicaciones absolutas', tag: 'No se discuten', kind: 'alert', items: [
          { t: 'SAHOS o amígdalas grado 4', d: 'Apneas, cor pulmonale o daño del crecimiento',
            say: 'Hay indicaciones absolutas. La primera, y la que más se pregunta, es el SAHOS infantil documentado o la hipertrofia severa, grado cuatro, que produce apneas, cor pulmonale o alteraciones graves del crecimiento craneofacial.' },
          { t: 'Sospecha de neoplasia amigdalina', d: 'Asimetría, ulceración o dureza pétrea',
            say: 'La segunda es la sospecha fundada de neoplasia: una amígdala marcadamente asimétrica, ulcerada o de dureza pétrea, por la posibilidad de un linfoma o un carcinoma.' },
          { t: 'Hemorragia amigdalina severa', d: 'Recurrente',
            say: 'Y la tercera, la hemorragia amigdalina severa y recurrente.' },
        ] },
        { title: 'Indicaciones relativas', tag: 'Criterios de Paradise', kind: 'criteria', items: [
          { t: '7 episodios en 1 año', d: 'Documentados y bien tratados',
            say: 'Las indicaciones relativas son las infecciones recurrentes y se miden con los criterios de Paradise. Cuentan los episodios de faringoamigdalitis bien documentados, con fiebre sobre treinta y ocho coma tres grados, exudado o cultivo positivo, y tratados adecuadamente. El primer criterio es siete episodios en el último año.' },
          { t: '5 por año durante 2 años', d: 'O 3 por año durante 3 años',
            say: 'El segundo es cinco episodios por año durante dos años seguidos. El tercero, tres episodios por año durante tres años seguidos. Cumplir uno solo de los tres basta.' },
          { t: 'Otros: 2 abscesos periamigdalinos', d: 'O amigdalitis hemorrágica',
            say: 'Otras indicaciones relativas son el antecedente de dos abscesos periamigdalinos y la amigdalitis hemorrágica.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol completo: del niño que ronca a la decisión de operar.',
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Un niño de 5 años tiene ronquidos nocturnos desde hace 6 meses y pausas respiratorias de hasta 15 segundos, con despertares sobresaltados y sudoración profusa. De día respira por la boca y tiene retraso pondoestatural. Sus amígdalas son grado 4 de Brodsky y se tocan en la línea media.',
      question: '¿Cuál es la conducta más indicada?',
      options: [
        { letter: 'A', text: 'Antibióticos orales profilácticos por 6 meses' },
        { letter: 'B', text: 'Adenoamigdalectomía bilateral' },
        { letter: 'C', text: 'Descongestionantes nasales tópicos nocturnos' },
        { letter: 'D', text: 'Observación hasta los 12 años' },
        { letter: 'E', text: 'Estimulantes del sistema nervioso central' },
      ],
      correct: 'B',
      explanation: 'SAHOS infantil con repercusión en el crecimiento y amígdalas grado 4: es la indicación quirúrgica absoluta de adenoamigdalectomía. Esperar expone a cor pulmonale, falla de crecimiento y alteraciones craneofaciales.',
      say: {
        stem: 'Un niño de cinco años con ronquidos de seis meses y pausas respiratorias de hasta quince segundos, con despertares bruscos y sudoración profusa. Respira por la boca y tiene retraso pondoestatural. Las amígdalas son grado cuatro de Brodsky y se tocan en la línea media.',
        question: '¿Cuál es la conducta más indicada?',
        options: 'Las opciones: antibióticos profilácticos por seis meses; adenoamigdalectomía bilateral; descongestionantes nasales; observación hasta los doce años; o estimulantes del sistema nervioso central. Piénsalo.',
        answer: 'Es la B. Tienes apneas presenciadas, retraso de crecimiento y amígdalas en beso: un SAHOS infantil severo, que es la indicación absoluta de adenoamigdalectomía. La E es la trampa, porque la hiperactividad del niño no es un trastorno de atención: es consecuencia de dormir mal. Tratas la obstrucción y la conducta mejora.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 23',
      stem: 'Un niño de 5 años presenta infecciones respiratorias a repetición, rinorrea bilateral frecuente y obstrucción nasal con respiración bucal habitual. La madre relata roncopatía y dificultades para dormir. Ha tenido dos episodios recientes de otitis media aguda que respondieron a amoxicilina.',
      question: '¿Cuál es el examen de elección para iniciar el estudio en este paciente?',
      options: [
        { letter: 'A', text: 'Radiografía de cavum' },
        { letter: 'B', text: 'TAC de cavidades paranasales' },
        { letter: 'C', text: 'Nasofibroscopía' },
        { letter: 'D', text: 'Polisomnografía' },
        { letter: 'E', text: 'Niveles plasmáticos de IgE específica contra alérgenos respiratorios' },
      ],
      correct: 'A',
      explanation: 'La sospecha es hipertrofia de adenoides. Aunque la nasofibroscopía es el mejor examen y se hará en segunda línea, el inicial es la radiografía de cavum, que es barata y menos molesta para el niño.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Un niño de cinco años con infecciones respiratorias repetidas, rinorrea, obstrucción nasal con respiración bucal habitual, ronquido y mal dormir. Además dos otitis medias agudas recientes.',
        question: '¿Cuál es el examen de elección para iniciar el estudio?',
        options: 'Las opciones: radiografía de cavum; escáner de cavidades paranasales; nasofibroscopía; polisomnografía; o IgE específica contra alérgenos. Piénsalo.',
        answer: 'Es la A. Sospechas hipertrofia de adenoides, y el examen para empezar es la radiografía de cavum, barata y poco molesta para un niño. La nasofibroscopía es mejor, pero queda como segunda línea.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 48',
      stem: 'Un niño de 7 años, respirador bucal, es traído por su madre. No presenta apnea del sueño ni infecciones a repetición. Al examen físico no tiene obstrucción nasal y se observa faringe con amígdalas grado II. Se solicita radiografía de cavum, que constata hipertrofia adenoidea con 80% de obstrucción.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Desloratadina oral' },
        { letter: 'B', text: 'Fluticasona intranasal' },
        { letter: 'C', text: 'Adenoidectomía' },
        { letter: 'D', text: 'Observar evolución y controlar ambulatoriamente' },
        { letter: 'E', text: 'Solicitar TAC de cavidades paranasales' },
      ],
      correct: 'D',
      explanation: 'Sin apnea, sin infecciones recurrentes y sin complicaciones, no hay indicación quirúrgica: se observa. La hipertrofia adenoidea involuciona con la edad. La cirugía se reserva para SAHOS u otras complicaciones.',
      say: {
        stem: 'Una última pregunta real, del EUNACOM de julio de dos mil diecisiete. Un niño de siete años, respirador bucal, sin apnea del sueño ni infecciones repetidas. No tiene obstrucción nasal y sus amígdalas son grado dos. La radiografía de cavum muestra adenoides con ochenta por ciento de obstrucción.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: desloratadina oral; fluticasona intranasal; adenoidectomía; observar y controlar ambulatoriamente; o escáner de cavidades paranasales. Piénsalo.',
        answer: 'Es la D. Esto conecta con todo lo que vimos: se opera por complicaciones, no por el tamaño que muestra la radiografía. Sin apnea, sin infecciones recurrentes y sin complicaciones, se observa. La C es la tentación, porque ochenta por ciento suena a mucho, pero la cirugía se reserva para el SAHOS y las demás indicaciones. Es una pregunta discutida, así que quédate con esta lógica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: '¿Cuál de las siguientes situaciones clínicas constituye una indicación formal para considerar una amigdalectomía en un paciente pediátrico, de acuerdo con los criterios de Paradise?',
      question: 'Elija la alternativa correcta.',
      options: [
        { letter: 'A', text: 'Haber presentado 2 episodios de amigdalitis bacteriana en el último año' },
        { letter: 'B', text: 'Presentar 7 episodios documentados de faringoamigdalitis bacteriana en el último año tratados con antibióticos' },
        { letter: 'C', text: 'Presentar ronquido nasal esporádico únicamente durante los resfriados comunes' },
        { letter: 'D', text: 'Presencia de placas de caseum amigdalino fétido en criptas sin fiebre ni odinofagia' },
        { letter: 'E', text: 'Un único episodio de amigdalitis viral asociada a conjuntivitis por adenovirus' },
      ],
      correct: 'B',
      explanation: 'Paradise exige episodios bacterianos documentados y tratados: siete en un año, o cinco por año durante dos años, o tres por año durante tres años. La caseosis amigdalina es benigna y no justifica cirugía.',
      say: {
        stem: 'Esta es una pregunta representativa del banco EUNACOM. Cuál de estas situaciones es una indicación formal de amigdalectomía en un niño según los criterios de Paradise.',
        question: 'Elige la alternativa correcta.',
        options: 'Las opciones: dos episodios de amigdalitis en un año; siete episodios documentados y tratados en un año; ronquido sólo durante los resfríos; caseum amigdalino sin fiebre; o un único episodio viral por adenovirus. Piénsalo.',
        answer: 'Es la B. Siete episodios documentados en el último año es el primero de los tres criterios. Fíjate en lo que hace trampa en las otras: pocos episodios, episodios virales, o caseum, que es una condición benigna sin fiebre ni odinofagia.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: amígdalas y SAHOS',
      cards: [
        { title: 'Diagnóstico', tag: 'Lo que se pregunta', kind: 'key', items: [
          { t: 'Niño que ronca con apneas', d: 'SAHOS: hiperactivo, no somnoliento',
            say: 'Cerremos con las reglas de oro. El niño que ronca y hace pausas respiratorias tiene un SAHOS, y se manifiesta con hiperactividad e irritabilidad, no con somnolencia como el adulto.' },
          { t: 'Brodsky 4: amígdalas en beso', d: 'Ocupan más del 75% de la vía aérea',
            say: 'Las amígdalas en beso son el grado cuatro de Brodsky.' },
        ] },
        { title: 'Cirugía', tag: 'Cuándo operar', kind: 'alert', items: [
          { t: 'SAHOS: indicación absoluta', d: 'Adenoamigdalectomía',
            say: 'El SAHOS infantil severo es la indicación absoluta de adenoamigdalectomía.' },
          { t: 'Paradise: 7, 5x2 o 3x3', d: 'Episodios documentados y tratados',
            say: 'Por infecciones, la cifra de Paradise es siete en un año, cinco por año durante dos años, o tres por año durante tres años. Y una amígdala asimétrica en un adulto obliga a descartar un linfoma o un carcinoma. Si te llevas una sola idea de hoy: se opera por apnea o por complicaciones, no por el tamaño. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo del niño con hipertrofia adenotonsilar y SAHOS',
    root: N('start', 'Niño que ronca y respira por la boca', '¿Tiene apneas, cor pulmonale o falla de crecimiento?',
      'Un niño con ronquido y respiración bucal. La primera pregunta es si hay apneas o complicaciones.',
      ['Sí', N('do', 'SAHOS: adenoamigdalectomía', 'Indicación absoluta, más aún con Brodsky 4',
        'Con apneas, cor pulmonale o falla de crecimiento, es un SAHOS infantil: indicación absoluta de adenoamigdalectomía, sobre todo si las amígdalas son grado cuatro.')],
      ['No', N('q', '¿Infecciones recurrentes?', 'Criterios de Paradise',
        'Sin complicaciones obstructivas, miras las infecciones: ¿cumple los criterios de Paradise?',
        ['Cumple Paradise', N('do', 'Amigdalectomía', 'Siete en 1 año, cinco por 2 años o tres por 3 años',
          'Si cumple siete episodios documentados en un año, cinco por año durante dos años o tres por año durante tres años, está indicada la amigdalectomía.')],
        ['No cumple', N('ok', 'Observar', 'Sin complicaciones, no se opera',
          'Sin SAHOS, sin complicaciones y sin criterios de Paradise, se observa y se controla.')],
      )],
    ),
  },
};
