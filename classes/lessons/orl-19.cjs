// Clase 14.19 (Otorrinolaringología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_otorrino.cjs (orl-19). Preguntas: banco real EUNACOM (class_questions.cjs --search).
// El banco real no tiene pregunta de sialolitiasis ni de parotiditis supurada: la sialolitiasis usa un caso representativo del
// libro y la parotiditis, el caso clínico de la clase.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'orl-19',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cólico salival, parotiditis supurada y adenoma pleomorfo: tres cuadros, tres glándulas, tres conductas',
      say: 'Bienvenido. Las glándulas salivales dan tres cuadros que el examen mezcla en una misma pregunta. El cólico salival, que duele cuando el paciente come. La parotiditis bacteriana, que aparece en el anciano deshidratado. Y el tumor de la parótida, donde la pregunta casi siempre es qué hacer con el nervio facial. Si identificas la glándula y el momento en que aparece el síntoma, resuelves casi todo.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Por qué se obstruye la submandibular',
      nodes: [
        { id: 'an', col: 0, row: 0, k: 'cause', t: 'Conducto de Wharton largo', s: 'Sube contra la gravedad' },
        { id: 'sa', col: 0, row: 2, k: 'cause', t: 'Saliva espesa y alcalina', s: 'Mucina, calcio y fosfatos' },
        { id: 'li', col: 1, row: 1, k: 'mech', t: 'Lito en el conducto', s: '80 a 90% en la submandibular' },
        { id: 'co', col: 2, row: 1, k: 'alert', t: 'Cólico salival', s: 'Dolor y aumento de volumen al comer' },
        { id: 'ce', col: 3, row: 1, k: 'good', t: 'Cede en 1 a 2 horas', s: 'Baja la secreción' },
      ],
      edges: [
        { from: 'an', to: 'li' },
        { from: 'sa', to: 'li' },
        { from: 'li', to: 'co', label: 'comida' },
        { from: 'co', to: 'ce' },
      ],
      steps: [
        { show: ['an', 'sa', 'li'], note: 'Camino difícil y saliva espesa: se forma el lito',
          say: 'Empecemos por el mecanismo. Entre ochenta y noventa por ciento de los cálculos salivales se forman en la glándula submandibular, en el conducto de Wharton. Hay dos razones. Su trayecto es largo y asciende contra la gravedad, con una curva sobre el músculo milohioideo. Y su saliva es espesa, rica en mucina, con más calcio y fosfatos, y alcalina.' },
        { show: ['co', 'ce'], note: 'Comer estimula la saliva, y no tiene salida',
          say: 'Esto explica la clínica. Cuando el paciente come, o apenas ve u huele la comida, la glándula produce saliva, pero el lito bloquea la salida. Aparecen dolor agudo y aumento de volumen submandibular, como un huevo bajo la mandíbula. Es el cólico salival. Cede en una o dos horas, cuando baja la secreción, y vuelve en la comida siguiente. Esa relación con las comidas es la pista del examen.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Sialolitiasis',
      title: 'Cólico salival: diagnóstico y manejo',
      cards: [
        { title: 'Diagnóstico', tag: 'Submandibular', kind: 'key', items: [
          { t: 'Dolor al comer', d: 'Con aumento de volumen submandibular',
            say: 'El paciente cuenta dolor y aumento de volumen submandibular que aparecen al empezar a comer y ceden unas horas después.' },
          { t: 'Palpación bimanual del piso de boca', d: 'Se siente el lito en el Wharton',
            say: 'En el examen, la palpación bimanual del piso de la boca, a lo largo del conducto de Wharton, permite sentir el cálculo como una formación dura.' },
          { t: 'Ecografía o radiografía oclusal', d: 'Confirman el lito',
            say: 'La ecografía de cuello o la radiografía oclusal del piso de la boca confirman el diagnóstico.' },
        ] },
        { title: 'Tratamiento', tag: 'Escalonado', kind: 'criteria', items: [
          { t: 'Hidratación, calor, masaje y limón', d: 'Sialogogos para estimular el flujo',
            say: 'El tratamiento inicial es conservador: mucha hidratación, calor local, masaje de la glándula y sialogogos naturales, como gotas de limón o caramelos ácidos, para empujar el lito con la saliva.' },
          { t: 'Lito mayor de 5 mm', d: 'Extracción transoral o sialoendoscopía',
            say: 'Si el cálculo es mayor de cinco milímetros, o no sale, se extrae por vía transoral, abriendo el conducto, o con sialoendoscopía. Se hace por la boca y con anestesia local, sin cicatriz en el cuello.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Parotiditis',
      title: 'Parotiditis bacteriana en el anciano',
      cards: [
        { title: 'Cuadro típico', tag: 'Infección ascendente', kind: 'alert', items: [
          { t: 'Anciano deshidratado o postoperado', d: 'Menos saliva y mala higiene oral',
            say: 'La parotiditis aguda supurada es una infección bacteriana que sube desde la boca por el conducto de Stenon. El terreno típico es el anciano deshidratado, el postoperado grave en ayuno prolongado, o quien usa fármacos anticolinérgicos. En todos, hay poca saliva, y la saliva es la que normalmente limpia el conducto.' },
          { t: 'Dolor, eritema, fiebre y trismus', d: 'Región parotídea y preauricular',
            say: 'La región parotídea y preauricular se pone dolorosa, caliente y eritematosa, con fiebre y a veces trismus. La bacteria más frecuente, en más de ochenta por ciento, es Staphylococcus aureus.' },
          { t: 'Pus por la papila de Stenon', d: 'Al exprimir la glándula',
            say: 'El signo clave es que, al exprimir la glándula hacia adelante, sale pus franco por la papila del conducto de Stenon, frente al segundo molar superior.' },
        ] },
        { title: 'Tratamiento', tag: 'Hospitalizar', kind: 'pharma', items: [
          { t: 'Hidratación EV y cloxacilina', d: 'O cefazolina; vancomicina si SAMR',
            say: 'Se hospitaliza, se rehidrata con vigor y se da un antibiótico endovenoso contra estafilococo: cloxacilina, dos gramos cada cuatro a seis horas, o cefazolina. Si hay sospecha de estafilococo resistente a meticilina, se usa vancomicina.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tumores',
      title: 'Tumores salivales: la regla del 80%',
      cards: [
        { title: 'Regla del 80%', tag: 'Epidemiología', kind: 'key', items: [
          { t: '80% en la parótida', d: 'De ellos, 80% benignos',
            say: 'Hay una regla que ordena todo: ochenta por ciento de los tumores de glándulas salivales están en la parótida, ochenta por ciento de los tumores parotídeos son benignos, y ochenta por ciento de esos benignos son adenomas pleomorfos.' },
          { t: 'Glándula más pequeña, más maligno', d: 'Parótida 20%, submandibular 50%, menores 80%',
            say: 'Pero hay una regla inversa de malignidad: cuanto más pequeña la glándula, más probable que el tumor sea maligno. En la parótida es veinte por ciento, en la submandibular cincuenta, y en las glándulas salivales menores del paladar, ochenta.' },
        ] },
        { title: 'Adenoma pleomorfo', tag: 'Benigno, se opera', kind: 'criteria', items: [
          { t: 'Nódulo firme, móvil, indoloro', d: 'Crece lento; sin parálisis facial',
            say: 'El adenoma pleomorfo, o tumor mixto benigno, es un nódulo parotídeo firme, de superficie lisa, móvil, indoloro y de crecimiento lento, durante meses o años. Y lo que lo define: nunca compromete el nervio facial.' },
          { t: 'Parálisis facial: cáncer', d: 'Masa fija, dolorosa o pétrea',
            say: 'La parálisis facial en una masa parotídea es signo de cáncer, como el carcinoma adenoide quístico o el mucoepidermoide. Una masa pétrea, fija y dolorosa también apunta a malignidad.' },
          { t: 'PAAF y parotidectomía superficial', d: 'Con preservación del nervio facial',
            say: 'El estudio parte con punción con aguja fina guiada por ecografía, y resonancia o escáner. El tratamiento es la parotidectomía superficial, identificando y preservando el nervio facial. La enucleación simple está prohibida: recurre más de cuarenta por ciento por prolongaciones microscópicas, y el tumor puede malignizar, un cinco a diez por ciento a quince o veinte años.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'gallery',
      kicker: 'Así se ve',
      title: 'Lito, pus y tumor parotídeo',
      images: [
        { src: 'biblioteca/17_otorrino/orl-19/01_calculo-conducto-submandibular__bailey-love_p802.jpg', label: 'Radiografía oclusal: cálculo en el conducto submandibular', credit: 'Bailey & Love 27.ª ed., Fig. 49.9' },
        { src: 'biblioteca/17_otorrino/orl-19/02_sialadenitis-submandibular-supurada__bailey-love_p802.jpg', label: 'Pus saliendo por la papila sublingual izquierda', credit: 'Bailey & Love 27.ª ed., Fig. 49.11' },
        { src: 'biblioteca/17_otorrino/orl-19/03_tumor-parotideo-benigno__bailey-love_p809.jpg', label: 'Tumor benigno de la parótida izquierda, con desvío del lóbulo de la oreja', credit: 'Bailey & Love 27.ª ed., Fig. 49.21 (a)' },
      ],
      steps: [
        { note: 'Lito radiopaco en el conducto',
          say: 'Esta es una radiografía oclusal del piso de la boca. La flecha de punta señala un cálculo radiopaco dentro del conducto submandibular, y hay otro más grande, atrás, en el hilio de la glándula. Fíjate que se ve en una radiografía simple, porque estos litos son ricos en calcio.' },
        { note: 'Pus en la papila: infección del conducto',
          say: 'Aquí hay una sialadenitis submandibular aguda supurada: sale pus por la papila sublingual. Es la misma señal que buscas en la parótida: al exprimir la glándula, el pus sale por el orificio del conducto.' },
        { note: 'Masa preauricular que levanta el lóbulo de la oreja',
          say: 'Y este es un tumor benigno de la parótida izquierda. Fíjate que el crecimiento empuja el lóbulo de la oreja hacia afuera. Es un nódulo de crecimiento lento, sin signos de agresividad: el rasgo de un tumor benigno, como el adenoma pleomorfo.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Cuatro cuadros salivales',
      head: ['Cuadro', 'Glándula', 'Clínica', 'Tratamiento'],
      rows: [
        { cells: ['Sialolitiasis', 'Submandibular, conducto de Wharton', 'Cólico al comer', 'Limón e hidratación; extracción'],
          say: 'Esta tabla ordena los cuadros. La sialolitiasis es de la submandibular, por el conducto de Wharton, con cólico al comer. Se trata con hidratación y limón, y se extrae si es grande.' },
        { cells: ['Parotiditis supurada', 'Parótida, conducto de Stenon', 'Fiebre, pus por la papila', 'Hospitalizar; cloxacilina o cefazolina EV'],
          say: 'La parotiditis supurada es de la parótida, con fiebre y pus por el conducto de Stenon. Se hospitaliza y se da cloxacilina o cefazolina endovenosas.' },
        { cells: ['Adenoma pleomorfo', 'Parótida, lóbulo superficial', 'Nódulo indoloro, móvil, años', 'PAAF y parotidectomía superficial'],
          say: 'El adenoma pleomorfo es de la parótida, un nódulo indoloro y móvil de años de evolución. Se hace punción con aguja fina y parotidectomía superficial, preservando el nervio facial.' },
        { cells: ['Carcinoma', 'Parótida, submandibular o menores', 'Masa fija, dolor, parálisis facial', 'Parotidectomía total y vaciamiento'],
          say: 'Y el carcinoma es una masa pétrea y fija, con dolor y parálisis facial del mismo lado. Requiere parotidectomía total y vaciamiento cervical.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la tumefacción salival a la glándula, el cuadro y la conducta.',
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Un hombre de 82 años, hospitalizado hace 5 días tras una cirugía abdominal mayor, en ayuno prolongado y con mala higiene oral, presenta fiebre de 38,9 °C y dolor intenso con aumento de volumen eritematoso y caliente de la región preauricular derecha. Tiene trismus leve. Al exprimir la glándula hacia adelante sale pus franco por la mucosa yugal, frente al segundo molar superior.',
      question: '¿Cuál es el tratamiento más adecuado?',
      options: [
        { letter: 'A', text: 'Extracción transoral del cálculo con anestesia local' },
        { letter: 'B', text: 'Hidratación endovenosa y cloxacilina endovenosa' },
        { letter: 'C', text: 'Parotidectomía superficial con preservación del nervio facial' },
        { letter: 'D', text: 'Sialogogos con gotas de limón y calor local' },
        { letter: 'E', text: 'Enucleación simple de la masa' },
      ],
      correct: 'B',
      explanation: 'Es una parotiditis bacteriana aguda supurada, por vía ascendente a través del conducto de Stenon, en un paciente deshidratado. Se trata con hospitalización, rehidratación endovenosa y antibiótico antiestafilocócico, como cloxacilina o cefazolina.',
      say: {
        stem: 'Un hombre de ochenta y dos años, hospitalizado hace cinco días por una cirugía abdominal mayor, en ayuno prolongado. Tiene fiebre, dolor intenso y aumento de volumen rojo y caliente delante de la oreja derecha, con trismus leve. Al exprimir la glándula, sale pus por la mucosa de la mejilla, frente al segundo molar superior.',
        question: '¿Cuál es el tratamiento más adecuado?',
        options: 'Las opciones: extracción transoral de un cálculo; hidratación y cloxacilina endovenosas; parotidectomía superficial; sialogogos con limón y calor; o enucleación simple de una masa. Piénsalo.',
        answer: 'Es la B. Anciano deshidratado, fiebre y pus por el conducto de Stenon: parotiditis supurada, causada por estafilococo. Se trata con rehidratación y cloxacilina endovenosa. La D es la tentación, porque limón y calor son lo que se usa en el cólico salival, pero aquí hay una infección con pus, y eso ya es de hospital.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un paciente de 50 años consulta por dolor y aumento de volumen agudo recurrente en la región submandibular derecha, que aparece típicamente al comenzar a comer y cede gradualmente 2 horas después. La palpación bimanual del piso de la boca revela una zona indurada milimétrica dolorosa a lo largo del trayecto del conducto salival.',
      question: '¿Cuál es el diagnóstico más probable y cuál es el conducto excretor involucrado?',
      options: [
        { letter: 'A', text: 'Parotiditis viral urliana; conducto de Stenon' },
        { letter: 'B', text: 'Sialolitiasis submandibular; conducto de Wharton' },
        { letter: 'C', text: 'Adenoma pleomorfo submandibular; conducto de Rivinus' },
        { letter: 'D', text: 'Ranula sublingual simple; conducto de Bartolino' },
        { letter: 'E', text: 'Angina de Ludwig inicial; conducto tirogloso persistente' },
      ],
      correct: 'B',
      explanation: 'El dolor y el aumento de volumen desencadenados por la comida, el cólico salival, son propios de la sialolitiasis. La mayoría de los cálculos se forman en la glándula submandibular y se impactan en el conducto de Wharton.',
      say: {
        stem: 'Un caso representativo del banco. Un paciente de cincuenta años con dolor y aumento de volumen submandibular derecho que aparecen al empezar a comer y ceden a las dos horas. En el piso de la boca se palpa una zona dura y dolorosa a lo largo del conducto.',
        question: '¿Cuál es el diagnóstico y qué conducto está comprometido?',
        options: 'Las opciones: parotiditis viral con conducto de Stenon; sialolitiasis submandibular con conducto de Wharton; adenoma pleomorfo con conducto de Rivinus; ránula sublingual; o angina de Ludwig inicial. Piénsalo.',
        answer: 'Es la B. El dato que decide es que el dolor aparece al comer: cólico salival. Y la glándula es la submandibular, cuyo conducto es el de Wharton. La parotiditis viral te dejaría la glándula inflamada de forma continua, sin relación con la comida, y su conducto sería el de Stenon, que es el de la parótida.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 71',
      stem: 'Un paciente de 38 años con cuadro de 6 meses con aumento de volumen en región preauricular derecha. Al examen físico se constata nódulo en región preauricular de 4 cm de diámetro, de consistencia blanda, indoloro a la palpación y fija, sin afectación de la piel que lo recubre.',
      question: 'El diagnóstico más probable:',
      options: [
        { letter: 'A', text: 'Adenopatía tuberculosa' },
        { letter: 'B', text: 'Adenoma pleomorfo' },
        { letter: 'C', text: 'Lipoma' },
        { letter: 'D', text: 'Quiste sebáceo' },
        { letter: 'E', text: 'Sarcoma' },
      ],
      correct: 'B',
      explanation: 'La ubicación preauricular sugiere un tumor de la parótida, y el adenoma pleomorfo es el tumor benigno más frecuente de esa glándula. Además, el cuadro es indoloro, de crecimiento lento y sin compromiso de la piel.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil dieciséis. Un paciente de treinta y ocho años con seis meses de aumento de volumen delante de la oreja derecha. Hay un nódulo de cuatro centímetros, blando, indoloro, sin compromiso de la piel.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: adenopatía tuberculosa; adenoma pleomorfo; lipoma; quiste sebáceo; o sarcoma. Piénsalo.',
        answer: 'Es la B. Aquí la clave es la ubicación: delante de la oreja está la parótida, y el tumor más frecuente de la parótida es el adenoma pleomorfo. Indoloro y de crecimiento lento, como lo describe. El examen físico solo no distingue este nódulo de un lipoma, pero la localización pesa más, y es la regla del ochenta por ciento.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 178',
      stem: 'Un paciente de 50 años consulta por aumento de volumen en la región masetérica izquierda, de crecimiento lento y consistencia dura. Al examen físico se palpa un tumor de 2 cm de diámetro, ubicado sobre la rama mandibular izquierda, de consistencia aumentada.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Lipoma' },
        { letter: 'B', text: 'Rabdomiosarcoma' },
        { letter: 'C', text: 'Adenopatía preauricular' },
        { letter: 'D', text: 'Tumor de parótida' },
        { letter: 'E', text: 'Quiste sebáceo' },
      ],
      correct: 'D',
      explanation: 'Un tumor ubicado en esa zona sugiere un tumor de parótida. Los tumores benignos son más frecuentes que los malignos, y la parálisis facial y las adenopatías tumorales sugieren malignidad.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil veinticuatro. Un paciente de cincuenta años con un aumento de volumen de crecimiento lento en la región del masetero izquierdo. Se palpa un tumor de dos centímetros, duro, sobre la rama de la mandíbula.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: lipoma; rabdomiosarcoma; adenopatía preauricular; tumor de parótida; o quiste sebáceo. Piénsalo.',
        answer: 'Es la D. Una masa de crecimiento lento sobre la rama mandibular es un tumor de la parótida, porque la glándula se extiende sobre el masetero. Y la estadística juega a tu favor: la mayoría son benignos. Lo que cambiaría la historia sería una parálisis facial o adenopatías, que sugieren malignidad.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: glándulas salivales',
      cards: [
        { title: 'Dolor y comida', tag: 'Glándulas e infección', kind: 'key', items: [
          { t: 'Cólico al comer: submandibular', d: 'Wharton; limón, hidratación, extracción',
            say: 'Cerremos con las reglas de oro. El dolor submandibular que aparece al comer es un lito en el conducto de Wharton, y se trata con limón e hidratación, y extracción si es grande.' },
          { t: 'Anciano deshidratado con pus', d: 'Parotiditis: hospital y cloxacilina',
            say: 'El anciano deshidratado con pus por el conducto de Stenon tiene parotiditis supurada: hospitalización, hidratación y cloxacilina endovenosa.' },
        ] },
        { title: 'Tumor de parótida', tag: 'Regla del 80%', kind: 'criteria', items: [
          { t: 'Adenoma pleomorfo: móvil, indoloro', d: 'Sin parálisis facial',
            say: 'El adenoma pleomorfo es un nódulo móvil e indoloro, sin parálisis facial.' },
          { t: 'Parotidectomía superficial', d: 'Nunca enucleación; preservar el facial',
            say: 'Si te llevas una sola idea de hoy: el adenoma pleomorfo se opera con parotidectomía superficial preservando el nervio facial, nunca con enucleación simple, y una parálisis facial en una masa parotídea es cáncer. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo diagnóstico y terapéutico en patología de glándulas salivales',
    root: N('start', 'Aumento de volumen salival', '¿Cuándo aparece y qué glándula es?',
      'Un paciente con una tumefacción en una glándula salival. Lo primero es cuándo aparece y de qué glándula se trata.',
      ['Dolor al comer, submandibular', N('do', 'Sialolitiasis', 'Cólico salival',
        'Dolor y aumento de volumen submandibular con las comidas es sialolitiasis.',
        ['Lito pequeño', N('ok', 'Hidratación y limón', 'Calor y masaje',
          'Hidratación, calor, masaje y sialogogos, como el limón.')],
        ['Lito mayor de 5 mm', N('refer', 'Extracción transoral', 'O sialoendoscopía',
          'Si es grande o no sale, extracción transoral o sialoendoscopía.')],
      )],
      ['Fiebre, dolor y pus por Stenon', N('alert', 'Parotiditis supurada', 'Anciano deshidratado',
        'Es una parotiditis bacteriana, habitualmente por estafilococo.',
        ['Hospitalizar', N('do', 'Hidratación y cloxacilina EV', 'O cefazolina',
          'Rehidratación y antibiótico antiestafilocócico endovenoso.')],
      )],
      ['Nódulo parotídeo de crecimiento lento', N('q', 'Tumor de parótida', '¿Hay parálisis facial?',
        'Un nódulo que crece lento. La pregunta clave es si hay compromiso del nervio facial.',
        ['Móvil, sin parálisis', N('do', 'Adenoma pleomorfo', 'PAAF y parotidectomía superficial',
          'Es un adenoma pleomorfo: punción con aguja fina y parotidectomía superficial con preservación del nervio facial.')],
        ['Fijo, doloroso, con parálisis facial', N('refer', 'Carcinoma', 'Parotidectomía total y vaciamiento',
          'La parálisis facial es signo de cáncer, y requiere cirugía oncológica.')],
      )],
    ),
  },
};
