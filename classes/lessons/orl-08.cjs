// Clase 14.8 (Otorrinolaringología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_otorrino.cjs (orl-08). El banco real no tiene preguntas de este tema:
// se usan dos casos del libro, rotulados "Banco EUNACOM · Caso representativo", sin fecha.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'orl-08',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cómo distinguir una parálisis facial central de una periférica, y tratar la parálisis de Bell y el síndrome de Ramsay Hunt',
      say: 'Bienvenido. Cuando llega alguien con la cara torcida, la primera pregunta es una sola: ¿puede arrugar la frente? Si la frente se salva, piensa en un infarto cerebral. Si no se salva, el problema está en el nervio facial, y ahí la pregunta siguiente es si hay vesículas en la oreja. Con esas dos preguntas resuelves casi todo lo que el examen pregunta de este tema.',
    },

    {
      type: 'flow',
      kicker: 'Semiología',
      title: 'Por qué la frente se salva en la parálisis central',
      nodes: [
        { id: 'ni', col: 0, row: 0, k: 'cause', t: 'Núcleo facial: porción superior', s: 'Frente y párpados' },
        { id: 'bi', col: 1, row: 0, k: 'mech', t: 'Fibras de ambos hemisferios', s: 'Inervación bilateral' },
        { id: 'ns', col: 0, row: 2, k: 'cause', t: 'Núcleo facial: porción inferior', s: 'Mejilla y boca' },
        { id: 'cr', col: 1, row: 2, k: 'mech', t: 'Fibras del hemisferio contralateral', s: 'Solo cruzadas' },
        { id: 'ce', col: 2, row: 1, k: 'effect', t: 'Lesión central: frente respetada', s: 'Solo cae la mitad inferior' },
        { id: 'pe', col: 3, row: 1, k: 'alert', t: 'Lesión periférica: todo el hemicara', s: 'Frente, ojo y boca' },
      ],
      edges: [
        { from: 'ni', to: 'bi' },
        { from: 'ns', to: 'cr' },
        { from: 'bi', to: 'ce' },
        { from: 'cr', to: 'ce' },
        { from: 'ce', to: 'pe', label: 'si se daña el nervio' },
      ],
      steps: [
        { show: ['ni', 'bi'], note: 'La frente tiene doble inervación',
          say: 'El núcleo motor del facial está en la protuberancia y tiene dos porciones. La superior, que mueve la frente y los párpados, recibe fibras de los dos hemisferios cerebrales. Es decir, tiene un respaldo.' },
        { show: ['ns', 'cr'], note: 'La mitad inferior depende de un solo lado',
          say: 'La porción inferior, que mueve la mejilla y la boca, solo recibe fibras cruzadas del hemisferio contrario. No tiene respaldo.' },
        { show: ['ce'], note: 'Infarto: cae la boca, la frente se salva',
          say: 'Por eso, cuando un infarto o una hemorragia cerebral daña un hemisferio, la mitad inferior de la cara se cae, pero la frente sigue funcionando porque el otro hemisferio la cubre. El paciente arruga la frente y cierra los ojos con fuerza. Esa es la parálisis facial central.' },
        { show: ['pe'], note: 'Nervio dañado: cae toda la hemicara',
          say: 'En cambio, si la lesión está en el nervio facial mismo, ya no hay ningún respaldo. Cae la frente, no se puede cerrar el ojo, que es el lagoftalmos, y cae la comisura. Es la parálisis periférica, y la compromete todo el lado de la cara.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Parálisis periférica',
      title: 'Cómo se reconoce',
      cards: [
        { title: 'Hallazgos', tag: 'Todo el hemicara', kind: 'key', items: [
          { t: 'No arruga la frente', d: 'Borramiento de arrugas y de la ceja',
            say: 'El paciente con parálisis periférica no puede arrugar la frente ni levantar la ceja del lado afectado. Ese es el dato que la separa de la central.' },
          { t: 'Lagoftalmos y signo de Bell', d: 'El ojo sube y afuera al intentar cerrar',
            say: 'No logra cerrar el ojo. Y al intentarlo, el globo ocular se desvía hacia arriba y afuera. Ese movimiento se llama signo de Bell.' },
          { t: 'Cae la comisura bucal', d: 'Se escapan los líquidos',
            say: 'Además cae la comisura de la boca, y por ahí se le escapan los líquidos al tomar.' },
        ] },
        { title: 'Por qué importa', tag: 'Peligro para la córnea', kind: 'alert', items: [
          { t: 'Sin parpadeo, el ojo se seca', d: 'Queratitis por exposición',
            say: 'Un ojo que no cierra ni parpadea se seca. Eso explica que en toda parálisis periférica la protección de la córnea sea obligatoria, y lo veremos en el tratamiento.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Parálisis de Bell',
      title: 'La causa más común',
      cards: [
        { title: 'Clínica', tag: 'Idiopática', kind: 'key', items: [
          { t: '60 a 75% de las periféricas', d: 'Reactivación de herpes simple tipo 1',
            say: 'La parálisis de Bell es la causa más frecuente de parálisis facial periférica aguda, entre sesenta y setenta y cinco por ciento. Se atribuye a la reactivación del virus herpes simple tipo uno, que inflama el nervio dentro del hueso temporal.' },
          { t: 'Se instala en 1 a 2 días', d: 'Dolor retroauricular y disgeusia',
            say: 'Se instala en uno o dos días, muchas veces precedida de dolor detrás de la oreja y de alteración del gusto en los dos tercios anteriores de la lengua, porque por el mismo nervio viaja la cuerda del tímpano. La otoscopía y el pabellón son normales.' },
        ] },
        { title: 'Tratamiento', tag: 'Primeras 72 horas', kind: 'pharma', items: [
          { t: 'Prednisona 1 mg/kg/día', d: 'Máximo 60 mg; 7 a 10 días, con descenso',
            say: 'El pilar es el corticoide oral dentro de las primeras setenta y dos horas: prednisona uno miligramo por kilo al día, con un máximo de sesenta miligramos, por siete a diez días, y después un descenso en cinco días.' },
          { t: 'Antivirales solos no sirven', d: 'Solo se suman en casos graves',
            say: 'Los antivirales solos no tienen utilidad. Se agregan al corticoide únicamente en los casos severos, grados cuatro a seis de la escala de House-Brackmann.' },
          { t: 'Lágrimas, gel y parche nocturno', d: 'Obligatorio en toda periférica',
            say: 'Y siempre se protege el ojo: lágrimas artificiales cada una o dos horas durante el día, gel lubricante en la noche y oclusión con parche nocturno, para evitar una úlcera corneal.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Síndrome de Ramsay Hunt',
      title: 'Cuando el herpes es zóster',
      cards: [
        { title: 'Clínica', tag: 'Virus varicela-zóster', kind: 'alert', items: [
          { t: 'Reactivación en el ganglio geniculado', d: 'Segunda causa de periférica',
            say: 'El síndrome de Ramsay Hunt es la segunda causa de parálisis periférica. Es el virus varicela-zóster, que estaba latente en el ganglio geniculado del nervio facial, y se reactiva.' },
          { t: 'Parálisis, otalgia y vesículas', d: 'En concha, conducto o tímpano',
            say: 'La tríada es una parálisis facial periférica severa, un dolor de oído intenso y quemante, y vesículas herpéticas dolorosas en la concha, el conducto auditivo externo o la membrana timpánica. A veces también en el paladar blando.' },
          { t: 'Puede afectar el VIII par', d: 'Hipoacusia y vértigo',
            say: 'Como el octavo par está pegado al facial, puede haber hipoacusia sensorioneural y vértigo. Conecta con la clase anterior: ante un vértigo con parálisis facial, mira la oreja.' },
        ] },
        { title: 'Pronóstico y tratamiento', tag: 'Peor que Bell', kind: 'pharma', items: [
          { t: 'Recuperación completa: 30 a 50%', d: 'Sin tratamiento precoz',
            say: 'El pronóstico es peor que el de Bell: solo treinta a cincuenta por ciento se recupera por completo si no se trata a tiempo.' },
          { t: 'Valaciclovir 1 g cada 8 horas', d: '7 a 10 días; o aciclovir 800 mg x5',
            say: 'Aquí el antiviral sí es obligatorio: valaciclovir un gramo cada ocho horas por siete a diez días, o aciclovir ochocientos miligramos cinco veces al día.' },
          { t: 'Más prednisona y analgesia', d: '1 mg/kg/día por 10 a 14 días',
            say: 'Se asocia prednisona uno miligramo por kilo al día por diez a catorce días, analgesia potente por el riesgo de neuralgia posherpética, y la misma protección ocular.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'gallery',
      kicker: 'Así se ve',
      title: 'Ramsay Hunt: la cara y la oreja',
      images: [
        { src: 'biblioteca/17_otorrino/orl-08/01_asimetria-facial-al-sonreir__bailey-love_p736.jpg', label: 'Parálisis facial por herpes zóster: la comisura de un lado no se eleva', credit: 'Bailey & Love 27.ª ed., Fig. 46.30a' },
        { src: 'biblioteca/17_otorrino/orl-08/02_vesiculas-en-concha-ramsay-hunt__bailey-love_p736.jpg', label: 'Ramsay Hunt: vesículas y costras en la concha', credit: 'Bailey & Love 27.ª ed., Fig. 46.30b' },
      ],
      steps: [
        { note: 'Primero, la cara en movimiento',
          say: 'Mira la comisura bucal al sonreír: de un lado se eleva, del otro no. Pero la foto sola no te dice si es central o periférica. Para eso tienes que pedirle al paciente que arrugue la frente y cierre los ojos con fuerza.' },
        { note: 'Después, la oreja',
          say: 'Esta es la oreja de un síndrome de Ramsay Hunt. Fíjate en las lesiones costrosas y vesiculares dentro de la concha, que llegan hacia el conducto. Si ves esto junto a una parálisis facial periférica, el diagnóstico está hecho: no es Bell, y cambia el tratamiento.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Bell, Ramsay Hunt y ACV',
      head: ['', 'Bell', 'Ramsay Hunt', 'Central (ACV)'],
      rows: [
        { cells: ['Frente', 'Comprometida', 'Comprometida', 'Respetada'],
          say: 'Esta tabla es la que más rinde. La frente: comprometida en Bell y en Ramsay Hunt, respetada en el infarto.' },
        { cells: ['Cierre del ojo', 'Lagoftalmos', 'Lagoftalmos doloroso', 'Normal'],
          say: 'El cierre del ojo: no se puede cerrar en las dos periféricas, y es normal en la central.' },
        { cells: ['Oído', 'Normal', 'Vesículas en concha o conducto', 'Normal; puede haber déficit motor'],
          say: 'La oreja: normal en Bell, con vesículas en Ramsay Hunt. En el infarto el oído es normal, pero puede haber debilidad de las extremidades.' },
        { cells: ['Causa', 'Herpes simple tipo 1', 'Varicela-zóster', 'Infarto o hemorragia'],
          say: 'La causa: herpes simple en Bell, varicela-zóster en Ramsay Hunt, y un infarto o una hemorragia en la central.' },
        { cells: ['Tratamiento', 'Prednisona y protección ocular', 'Valaciclovir y prednisona', 'Código ACV y neuroimagen'],
          say: 'Y el tratamiento: prednisona con protección ocular en Bell, valaciclovir más prednisona en Ramsay Hunt, y activar el código de accidente cerebrovascular con neuroimagen urgente en la central.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol para el paciente con la cara asimétrica: primero la frente, después la oreja.',
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Una mujer de 38 años consulta por asimetría facial de instalación rápida en las últimas 24 horas. No puede cerrar el ojo derecho y al tomar líquidos se le escapan por la comisura derecha. Tiene borramiento de los pliegues de la frente derecha, con imposibilidad de arrugarla o levantar la ceja, lagoftalmos derecho y desviación de la comisura hacia la izquierda al sonreír. El resto del examen neurológico es normal. La otoscopía es normal y no hay vesículas.',
      question: '¿Cuál es el manejo más adecuado?',
      options: [
        { letter: 'A', text: 'Valaciclovir 1 g cada 8 horas, sin corticoides' },
        { letter: 'B', text: 'Prednisona 1 mg/kg/día por 7 a 10 días, lágrimas artificiales y parche ocular nocturno' },
        { letter: 'C', text: 'TAC de cerebro urgente y activar código ACV' },
        { letter: 'D', text: 'Observación sin tratamiento por 2 semanas' },
        { letter: 'E', text: 'Ciprofloxacino tópico en el oído' },
      ],
      correct: 'B',
      explanation: 'No arruga la frente y tiene lagoftalmos: parálisis periférica. Sin vesículas ni otalgia, es una parálisis de Bell. Se trata con prednisona 1 mg/kg/día por 7 a 10 días dentro de las primeras 72 horas, más protección ocular. Los antivirales solos no sirven y el código ACV corresponde a la parálisis central.',
      say: {
        stem: 'Veamos un caso. Mujer de treinta y ocho años con la cara asimétrica desde hace veinticuatro horas. No puede cerrar el ojo derecho y se le escapan los líquidos por la comisura. No puede arrugar la frente derecha ni subir la ceja, tiene lagoftalmos y la comisura se desvía hacia la izquierda al sonreír. El resto del examen neurológico y la otoscopía son normales, y no hay vesículas.',
        question: '¿Cuál es el manejo más adecuado?',
        options: 'Las opciones: valaciclovir solo, prednisona con protección ocular, TAC de cerebro y código de infarto, observar dos semanas, o ciprofloxacino tópico. Piénsalo.',
        answer: 'Es la B. No arruga la frente y tiene lagoftalmos, así que es periférica. Sin vesículas ni dolor de oído, es una parálisis de Bell, y se trata con prednisona dentro de las primeras setenta y dos horas, más lágrimas, gel y parche para proteger la córnea. El antiviral solo no tiene utilidad, y el código de infarto sería para una parálisis que respeta la frente.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco EUNACOM · Caso representativo',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un paciente de 60 años consulta en urgencia por desviación de la comisura bucal hacia la derecha y dificultad para pronunciar las palabras desde hace 2 horas. Al examen físico se aprecia incapacidad para elevar la comisura labial izquierda; sin embargo, el paciente arruga la frente de forma perfectamente simétrica y ocluye ambos ojos con fuerza normal sin lagoftalmos.',
      question: '¿Cuál es la localización topográfica más probable de la lesión y la conducta inmediata?',
      options: [
        { letter: 'A', text: 'Lesión del nervio facial periférico izquierdo en el foramen estilomastoideo; indicar prednisona oral ambulatoria' },
        { letter: 'B', text: 'Lesión corticonuclear o hemisférica cerebral derecha (parálisis facial central); activar código de sospecha de ACV y solicitar TAC de cerebro de urgencia' },
        { letter: 'C', text: 'Síndrome de Ramsay Hunt atípico; iniciar valaciclovir oral en altas dosis' },
        { letter: 'D', text: 'Parálisis de Bell de curso frustro; indicar reposo y control ambulatorio en una semana' },
        { letter: 'E', text: 'Otitis media aguda complicada con compresión del canal de Falopio; solicitar TAC de peñasco' },
      ],
      correct: 'B',
      explanation: 'La frente está respetada y no hay lagoftalmos: es una parálisis facial central. Por la doble inervación corticonuclear de la frente, una lesión hemisférica unilateral la respeta. Requiere código ACV y TAC de cerebro urgente. Tratarla como Bell con corticoides ambulatorios es un error grave.',
      say: {
        stem: 'Un caso representativo del banco. Hombre de sesenta años con la comisura desviada y dificultad para hablar desde hace dos horas. No puede subir la comisura izquierda, pero arruga la frente de forma simétrica y cierra ambos ojos con fuerza normal.',
        question: '¿Dónde está la lesión y qué haces de inmediato?',
        options: 'Las opciones: nervio periférico con prednisona ambulatoria, lesión hemisférica con código de infarto y TAC, Ramsay Hunt atípico, Bell leve con control en una semana, u otitis complicada con TAC de peñasco. Piénsalo.',
        answer: 'Es la B. La frente respetada y el cierre ocular normal señalan lesión central, en el hemisferio contrario. Se activa el código de infarto y se pide un TAC de cerebro urgente, porque lleva solo dos horas y puede estar dentro de la ventana de tratamiento. Si lo confundes con un Bell y lo mandas a la casa con prednisona, pierdes un infarto.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco EUNACOM · Caso representativo',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un paciente de 68 años consulta por intenso dolor en la oreja derecha de 3 días de evolución, asociándose hoy a parálisis facial derecha completa con imposibilidad para cerrar el ojo y mareo rotatorio. A la inspección del pabellón auricular y del conducto auditivo externo derecho se observan múltiples vesículas eritematosas, algunas de ellas con costras melicéricas, muy sensibles a la palpación.',
      question: '¿Cuál es el tratamiento de elección?',
      options: [
        { letter: 'A', text: 'Gotas óticas de ciprofloxacino asociadas a paracetamol oral por 7 días' },
        { letter: 'B', text: 'Valaciclovir oral 1000 mg cada 8 horas asociado a prednisona oral 1 mg/kg/día por 10 días y protección ocular' },
        { letter: 'C', text: 'Cefazolina endovenosa hospitalizada para cobertura de Staphylococcus aureus meticilino-sensible' },
        { letter: 'D', text: 'Carbamazepina oral en dosis crecientes como tratamiento exclusivo de neuralgia del trigémino' },
        { letter: 'E', text: 'Drenaje quirúrgico urgente de las vesículas en sala de procedimientos menores' },
      ],
      correct: 'B',
      explanation: 'Otalgia intensa, parálisis facial periférica y vesículas en el pabellón y el conducto: síndrome de Ramsay Hunt. Se trata con un antiviral activo contra varicela-zóster, valaciclovir 1 g cada 8 horas, más prednisona 1 mg/kg/día por 10 a 14 días y protección ocular.',
      say: {
        stem: 'Otro caso representativo del banco. Hombre de sesenta y ocho años con un dolor intenso en la oreja derecha desde hace tres días. Hoy aparece una parálisis facial derecha completa, con imposibilidad de cerrar el ojo y mareo rotatorio. En el pabellón y el conducto hay múltiples vesículas con costras, muy dolorosas.',
        question: '¿Cuál es el tratamiento de elección?',
        options: 'Las opciones: gotas de ciprofloxacino, valaciclovir con prednisona y protección ocular, cefazolina endovenosa, carbamazepina, o drenaje de las vesículas. Piénsalo.',
        answer: 'Es la B. Dolor de oído, parálisis periférica y vesículas: es un Ramsay Hunt, un herpes zóster ótico. Necesita valaciclovir más prednisona, y protección ocular. Las gotas antibióticas y la cefazolina tratan bacterias, y las vesículas nunca se drenan.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: parálisis facial',
      cards: [
        { title: 'Distinguir', tag: 'Frente y oreja', kind: 'key', items: [
          { t: 'La frente decide', d: 'Respetada: central. Comprometida: periférica',
            say: 'Cerremos con las reglas de oro. Si la frente se salva, es central, por la doble inervación, y se activa el código de infarto con neuroimagen. Si la frente está comprometida, es periférica.' },
          { t: 'Vesículas en la oreja', d: 'Ramsay Hunt: varicela-zóster',
            say: 'En la periférica, mira la oreja. Con vesículas y dolor intenso, es Ramsay Hunt.' },
        ] },
        { title: 'Tratar', tag: 'Rápido y con el ojo protegido', kind: 'pharma', items: [
          { t: 'Bell: prednisona en 72 horas', d: '1 mg/kg/día, 7 a 10 días',
            say: 'La parálisis de Bell se trata con prednisona dentro de las primeras setenta y dos horas. Los antivirales solos no sirven.' },
          { t: 'Ramsay Hunt: valaciclovir y prednisona', d: 'Más analgesia',
            say: 'El Ramsay Hunt se trata con valaciclovir y prednisona, además de analgesia potente.' },
          { t: 'Proteger siempre la córnea', d: 'Lágrimas, gel y parche',
            say: 'Y en toda parálisis periférica, lágrimas, gel nocturno y parche. Si te llevas una sola idea de hoy: la frente te dice si es el cerebro o el nervio, y la oreja te dice si es Bell o es Ramsay Hunt. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo diagnóstico de la parálisis facial: central contra periférica',
    root: N('start', 'Paciente con asimetría facial', '¿Puede arrugar la frente?',
      'Un paciente consulta por la cara asimétrica. La primera pregunta es si puede arrugar la frente.',
      ['Sí, la frente se salva', N('alert', 'Parálisis facial central', 'Sospecha de infarto o hemorragia',
        'Si arruga la frente y cierra bien los ojos, la lesión está en el cerebro. Se activa el código de infarto y se pide un TAC de cerebro urgente.')],
      ['No, compromete toda la hemicara', N('q', 'Parálisis facial periférica', '¿Vesículas y dolor intenso en la oreja?',
        'Si no puede arrugar la frente, es periférica. Ahora se revisa la oreja.',
        ['No: otoscopía normal', N('ok', 'Parálisis de Bell', 'Prednisona en 72 horas y protección ocular',
          'Es una parálisis de Bell. Prednisona uno miligramo por kilo al día por siete a diez días, con lágrimas, gel y parche nocturno.')],
        ['Sí: vesículas en concha o conducto', N('refer', 'Síndrome de Ramsay Hunt', 'Valaciclovir, prednisona y analgesia',
          'Es un Ramsay Hunt. Valaciclovir un gramo cada ocho horas más prednisona por diez a catorce días, analgesia potente y protección ocular.')],
      )],
    ),
  },
};
