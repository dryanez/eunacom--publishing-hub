// Clase 12.12 (Traumatología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_traumatologia.cjs (trauma-12). Preguntas: banco real EUNACOM (class_questions.cjs --search).
// Se enseña desde el texto de este libro; las ideas se pueden cruzar con reuma-01 a reuma-04, pero no se repiten sus preguntas reales.
// El libro deja vacías las secciones de análisis del líquido sinovial, de gota (clínica y cristales de urato) y de artritis séptica.
// Se completan solo con lo que dicen el banco real y los pies de figura de Harrison y Bailey (ver informe, categoría C).
// No se enseñan las metas de ácido úrico del libro (menor de 6 en mujeres y menor de 7 en hombres) ni "AINE endovenosos" en la crisis de gota (ver informe, categoría A).
// El GES de artrosis lo cubre reuma-04. Las tablas plantilla del libro (Parámetro clínico / Criterio quirúrgico, "Salter-Harris",
// "codo de niñera") no corresponden al tema y no se usan.
// Preguntas reales que ya usan otras clases (no se repiten): Julio 2017 P121, Julio 2016 P102, Diciembre 2018 P30, Julio 2013 P55, Julio 2019 P64,
// Diciembre 2019 P69, Agosto 2021 P95, Julio 2016 P103, Julio 2016 P39.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'trauma-12',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Artrosis y monoartritis aguda: líquido sinovial, gota, pseudogota y artritis séptica',
      say: 'Bienvenido. Hoy vemos dos problemas que llenan las consultas de traumatología y de urgencia. Uno es la artrosis, un dolor mecánico y crónico. El otro es la articulación aguda, caliente e hinchada, donde la regla es una sola: puncionar para analizar el líquido. De ahí salen la gota, la pseudogota y la artritis séptica.',
    },

    {
      type: 'points',
      kicker: 'Artrosis',
      title: 'Qué es y por qué aparece',
      cards: [
        { title: 'Concepto', tag: 'Degeneración', kind: 'key', items: [
          { t: 'Destrucción del cartílago articular', d: 'Progresiva e irreversible',
            say: 'La artrosis, u osteoartritis, es una enfermedad degenerativa que destruye de forma progresiva el cartílago articular. Y hay que entender algo fundamental: el cartílago no se regenera.' },
          { t: 'Primaria: degenerativa', d: 'Idiopática, con fuerte componente genético',
            say: 'La artrosis primaria es la degenerativa idiopática, con un fuerte componente genético.' },
        ] },
        { title: 'Artrosis secundaria', tag: 'Daño previo', kind: 'alert', items: [
          { t: 'Luxaciones crónicas', d: 'La articulación queda mal alineada',
            say: 'La secundaria es la que resulta de un daño previo de la articulación. Por ejemplo, luxaciones crónicas.' },
          { t: 'Fracturas con rasgo intraarticular', d: 'La superficie articular queda irregular',
            say: 'También las fracturas con rasgo intraarticular, que dejan la superficie articular irregular.' },
          { t: 'Artritis reumatoide o séptica previa', d: 'Secuela de inflamación o infección',
            say: 'Y las secuelas de una artritis reumatoide o de una artritis séptica.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Artrosis',
      title: 'Clínica de la artrosis',
      cards: [
        { title: 'Síntomas', tag: 'Mecánico', kind: 'key', items: [
          { t: 'Dolor articular mecánico', d: 'Empeora con el uso, mejora con reposo',
            say: 'El síntoma cardinal es el dolor articular, de tipo mecánico. Empeora con el uso y mejora con el reposo, al contrario del dolor inflamatorio.' },
          { t: 'Derrame no inflamatorio', d: 'Puede haber líquido, sin signos inflamatorios',
            say: 'Puede haber derrame articular, pero es de tipo no inflamatorio: sin eritema ni calor marcados.' },
          { t: 'Anquilosis', d: 'Rigidez total de la articulación',
            say: 'Con el tiempo puede evolucionar a la anquilosis, que es la rigidez total de la articulación.' },
        ] },
        { title: 'Cadera y manos', tag: 'Lo que se pregunta', kind: 'alert', items: [
          { t: 'Coxartrosis: dolor inguinal', d: 'Limita la marcha; pierde rotación interna y flexión',
            say: 'La artrosis de cadera, o coxartrosis, da dolor inguinal que aumenta con la marcha y la limita. Al examen se pierde la rotación interna y la flexión de la cadera. Si el cuadro lleva años, piensa en artrosis y no en necrosis avascular.' },
          { t: 'Manos: interfalángicas', d: 'Rigidez matinal breve y osteofitos',
            say: 'En las manos compromete las interfalángicas, con rigidez matinal de pocos minutos. Es lo que la separa de la artritis reumatoide, cuya rigidez es larga.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tratamiento',
      title: 'La escalera de la artrosis',
      nodes: [
        { id: 'p', col: 0, row: 1, k: 'start', t: 'Paracetamol más ejercicio', s: '1 g cada 8 horas · cuádriceps' },
        { id: 'a', col: 1, row: 0, k: 'mech', t: 'AINE', s: 'Con omeprazol si es COX-1' },
        { id: 'c', col: 1, row: 2, k: 'trap', t: 'Insuficiencia renal o úlcera', s: 'AINE contraindicados' },
        { id: 't', col: 2, row: 1, k: 'risk', t: 'Tramadol', s: 'Opiáceo débil' },
        { id: 'i', col: 3, row: 1, k: 'good', t: 'Corticoide intraarticular', s: 'Infiltración' },
        { id: 'q', col: 4, row: 1, k: 'refer', t: 'Prótesis o artrodesis', s: 'Última línea' },
      ],
      edges: [
        { from: 'p', to: 'a' },
        { from: 'p', to: 'c' },
        { from: 'a', to: 't' },
        { from: 'c', to: 't', label: 'se salta el AINE' },
        { from: 't', to: 'i' },
        { from: 'i', to: 'q' },
      ],
      steps: [
        { show: ['p'], note: 'Primera línea: paracetamol y ejercicio',
          say: 'El tratamiento es escalonado. La primera línea es paracetamol, un gramo cada ocho horas, más ejercicio de fortalecimiento muscular, sobre todo del cuádriceps en la artrosis de rodilla.' },
        { show: ['a'], note: 'Segunda línea: AINE',
          say: 'Si no basta, la segunda línea son los antiinflamatorios no esteroidales. Los que inhiben la ciclooxigenasa uno, como el ibuprofeno, van siempre con omeprazol para proteger el estómago. Los que inhiben la ciclooxigenasa dos, como el celecoxib, tienen menor riesgo de úlcera.' },
        { show: ['c', 't'], note: 'Tercera línea: tramadol',
          say: 'La tercera línea son los opiáceos débiles, sobre todo el tramadol. Y aquí viene la trampa del examen: si el paciente tiene insuficiencia renal crónica o una úlcera gastroduodenal, los AINE están contraindicados, y el tratamiento salta directo del paracetamol al tramadol.' },
        { show: ['i', 'q'], note: 'Infiltración y cirugía al final',
          say: 'La cuarta línea son los corticoides intraarticulares. Y la última es quirúrgica: una prótesis articular o una artrodesis, que es la fijación de la articulación y es común en las interfalángicas.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Monoartritis aguda',
      title: 'Articulación caliente: puncionar',
      cards: [
        { title: 'Conducta', tag: 'Mandatoria', kind: 'key', items: [
          { t: 'Dolor, hinchazón, eritema y calor', d: 'Eso es una monoartritis aguda',
            say: 'Ante una articulación inflamada, con dolor, aumento de volumen, eritema y calor, la conducta mandatoria es la artrocentesis, la punción articular, para analizar el líquido sinovial.' },
          { t: 'Antes de iniciar antibióticos', d: 'Para no esterilizar la muestra',
            say: 'Y se punciona antes de iniciar antibióticos, para no esterilizar la muestra. No empiezas con antiinflamatorios ni con una resonancia.' },
        ] },
        { title: 'Causas principales', tag: 'Diferencial', kind: 'alert', items: [
          { t: 'Gota y pseudogota', d: 'Cristales de urato o de pirofosfato',
            say: 'Las causas más importantes son las artritis por cristales: la gota y la pseudogota.' },
          { t: 'Artritis séptica', d: 'La que no puedes dejar pasar',
            say: 'Y la artritis séptica, que es la que no puedes dejar pasar, porque destruye la articulación en poco tiempo.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Líquido sinovial',
      title: 'Qué te dice el líquido',
      head: ['Tipo de líquido', 'Leucocitos', 'Qué pensar'],
      rows: [
        { cells: ['No inflamatorio', 'Pocos, menos de 2.000', 'Artrosis'],
          say: 'El líquido no inflamatorio tiene pocos leucocitos, menos de dos mil por milímetro cúbico. Es el de la artrosis.' },
        { cells: ['Inflamatorio', '2.000 a 50.000', 'Cristales, artritis reumatoide'],
          say: 'El inflamatorio tiene entre dos mil y cincuenta mil leucocitos. Es el de las artritis por cristales y de las artropatías inflamatorias como la artritis reumatoide.' },
        { cells: ['Séptico', 'Más de 50.000', 'Artritis séptica'],
          say: 'El séptico tiene más de cincuenta mil leucocitos, y el Gram y el cultivo orientan al germen.' },
        { cells: ['Trampa', 'Los cristales no descartan infección', 'Una pseudogota puede superar 100.000'],
          say: 'Y hay dos trampas. Los cristales no descartan una infección. Y una condrocalcinosis muy inflamada puede superar los cien mil leucocitos sin que haya bacterias. Por eso se mira el cuadro completo.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Gota',
      title: 'Gota: cristales de urato',
      cards: [
        { title: 'Diagnóstico', tag: 'Clínico y cristales', kind: 'key', items: [
          { t: 'Podagra: primer ortejo', d: 'Se diagnostica sin punción',
            say: 'La podagra, el ataque en la articulación del primer ortejo, es la única monoartritis aguda que suele diagnosticarse clínicamente, sin necesidad de punción, a menos que se sospeche infección.' },
          { t: 'Cristales de urato en aguja', d: 'Birrefringencia negativa en luz polarizada',
            say: 'En el líquido, los cristales de urato tienen forma de aguja y una birrefringencia fuertemente negativa con luz polarizada.' },
        ] },
        { title: 'Crisis aguda', tag: 'Tratamiento', kind: 'pharma', items: [
          { t: 'AINE, colchicina o corticoides', d: 'Los tres sirven en la crisis',
            say: 'En la crisis aguda sirven los antiinflamatorios no esteroidales, la colchicina o los corticoides. De la colchicina, recuerda que su efecto adverso típico es la diarrea.' },
          { t: 'Nunca iniciar alopurinol en la crisis', d: 'Ni suspenderlo si ya lo toma',
            say: 'Jamás inicies ni suspendas el alopurinol durante una crisis aguda, porque los cambios bruscos en el ácido úrico pueden empeorar o prolongar la inflamación.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Gota',
      title: 'Gota: prevenir nuevas crisis',
      cards: [
        { title: 'Cuándo tratar de forma crónica', tag: 'Profilaxis', kind: 'criteria', items: [
          { t: 'Dos o más crisis al año', d: 'Indica tratamiento para bajar el ácido úrico',
            say: 'El tratamiento crónico se indica si el paciente tiene dos o más crisis al año. Se hace cuando la crisis ya pasó.' },
          { t: 'Alopurinol o probenecid', d: 'Inhibidor de la xantina oxidasa o uricosúrico',
            say: 'Los fármacos son el alopurinol, que inhibe la xantina oxidasa, y el probenecid, que es uricosúrico.' },
        ] },
        { title: 'Ojo con la colchicina', tag: 'Trampa', kind: 'alert', items: [
          { t: 'Para la crisis, no para siempre', d: 'Tiene muchos efectos adversos',
            say: 'La colchicina tiene muchos efectos adversos, por eso se prefiere usarla en la crisis aguda, y no dejarla como tratamiento permanente de la gota.' },
          { t: 'Cuidado con los diuréticos', d: 'La hidroclorotiazida puede desencadenar la crisis',
            say: 'Y recuerda que algunos fármacos desencadenan crisis, como la hidroclorotiazida. En un hipertenso con gota, conviene cambiarla.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Pseudogota',
      title: 'Condrocalcinosis: cristales de pirofosfato',
      cards: [
        { title: 'Cuadro típico', tag: 'Adulto mayor', kind: 'key', items: [
          { t: 'Afecta frecuentemente la rodilla', d: 'En el adulto mayor',
            say: 'La pseudogota, o condrocalcinosis, la causan los cristales de pirofosfato de calcio, y afecta con frecuencia la rodilla. Es la causa más frecuente de monoartritis aguda en el adulto mayor.' },
          { t: 'Se gatilla con el reposo', d: 'Por ejemplo, tras hospitalizarse',
            say: 'Suele desencadenarse por reposo, por ejemplo en un paciente hospitalizado por otra causa, como un accidente vascular.' },
        ] },
        { title: 'Cristales y prevención', tag: 'Lo que se pregunta', kind: 'alert', items: [
          { t: 'Birrefringencia débil positiva', d: 'Cristales romboidales',
            say: 'Los cristales de pirofosfato tienen elongación positiva débil, y brillan de color azulado. Son romboidales, no en aguja como el urato.' },
          { t: 'Prevención: colchicina profiláctica', d: 'No alopurinol, que es para gota',
            say: 'Para prevenir nuevas crisis se usa colchicina profiláctica. El alopurinol no sirve, porque el cristal no es de urato.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Artritis séptica',
      title: 'Artritis séptica: la que no debes perder',
      cards: [
        { title: 'Cómo sospecharla', tag: 'Clínica', kind: 'alert', items: [
          { t: 'Fiebre y articulación grande muy dolorosa', d: 'Hombro, codo o rodilla',
            say: 'Sospéchala ante fiebre con una articulación grande muy caliente y dolorosa, como el hombro, el codo o la rodilla. La gota y la pseudogota rara vez dan fiebre, y prefieren otras articulaciones.' },
          { t: 'Duele todo el rango de movimiento', d: 'Activo y pasivo',
            say: 'Hay derrame profundo y limitación dolorosa de todo el rango de movimiento, tanto activo como pasivo. Eso la separa de la bursitis, que es superficial.' },
        ] },
        { title: 'Conducta', tag: 'Urgencia', kind: 'key', items: [
          { t: 'Artrocentesis primero', d: 'Líquido con más de 50.000 leucocitos y Gram',
            say: 'Se confirma con artrocentesis: más de cincuenta mil leucocitos, Gram y cultivo. Si hay duda, se trata como séptica, aunque no se vean bacterias.' },
          { t: 'Antibióticos y drenaje de la articulación', d: 'La infección destruye el cartílago',
            say: 'El tratamiento son antibióticos y el drenaje de la articulación, porque tratar solo con medicamentos rara vez basta. Si no se trata a tiempo, deja la articulación destruida y una artrosis secundaria.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'gallery',
      kicker: 'Así se ve',
      title: 'Artrosis de cadera y cristales',
      images: [
        { src: 'biblioteca/18_traumatologia/trauma-12/01_artrosis-cadera-rx__bailey-love_p535.jpg', label: 'Radiografía de cadera con artrosis', credit: 'Bailey & Love 27.ª ed., Fig. 35.5' },
        { src: 'biblioteca/18_traumatologia/trauma-12/02_cristales-urato-liquido-sinovial__harrison_p2905.jpg', label: 'Cristales de urato en aguja en líquido sinovial; recuadro con luz polarizada', credit: 'Harrison 21.ª ed., Fig. 372-2A' },
        { src: 'biblioteca/18_traumatologia/trauma-12/03_cristales-pirofosfato-liquido-sinovial__harrison_p2905.jpg', label: 'Cristales romboidales de pirofosfato de calcio; recuadro con luz polarizada', credit: 'Harrison 21.ª ed., Fig. 372-2B' },
      ],
      steps: [
        { note: 'La cadera artrósica en la radiografía',
          say: 'Esta es una cadera con artrosis. Fíjate en que el espacio entre la cabeza del fémur y el acetábulo está disminuido, y que el hueso del techo del acetábulo se ve más blanco, esclerótico. No hay signos de inflamación aguda: es un proceso mecánico y crónico.' },
        { note: 'Urato: cristales largos, en aguja',
          say: 'Y aquí el líquido sinovial de una gota. Mira la forma: son cristales largos, en aguja, dentro y fuera de las células. Con luz polarizada, en el recuadro, brillan con fuerza.' },
        { note: 'Pirofosfato: cristales romboidales',
          say: 'Y este es el líquido de una pseudogota. Ahora los cristales son cortos y romboidales, no en aguja. Esa diferencia de forma, y la birrefringencia débil positiva, es lo que los separa del urato.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del dolor articular, crónico o agudo, a la conducta que corresponde.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Artrosis y monoartritis: dato, diagnóstico, conducta',
      head: ['Dato', 'Diagnóstico', 'Conducta'],
      rows: [
        { cells: ['Dolor que mejora con el reposo', 'Artrosis', 'Paracetamol y ejercicio'],
          say: 'Dolor mecánico que mejora con el reposo: artrosis. Parte con paracetamol y ejercicio.' },
        { cells: ['Artrosis con IRC o úlcera', 'AINE contraindicados', 'Del paracetamol al tramadol'],
          say: 'Artrosis con insuficiencia renal o úlcera gastroduodenal: no hay AINE, y se salta del paracetamol al tramadol.' },
        { cells: ['Articulación caliente', 'Monoartritis aguda', 'Artrocentesis'],
          say: 'Articulación caliente e hinchada: monoartritis aguda, y la conducta es la artrocentesis.' },
        { cells: ['Podagra en crisis', 'Gota', 'AINE, colchicina o corticoides; no alopurinol'],
          say: 'Podagra: gota. En la crisis, AINE, colchicina o corticoides. El alopurinol no se inicia en la crisis.' },
        { cells: ['Rodilla de anciano hospitalizado', 'Pseudogota', 'Colchicina para prevenir'],
          say: 'Rodilla de un anciano hospitalizado: pseudogota. Se previene con colchicina.' },
        { cells: ['Fiebre y hombro, codo o rodilla', 'Artritis séptica', 'Antibióticos y drenaje'],
          say: 'Fiebre y una articulación grande muy dolorosa: artritis séptica, con antibióticos y drenaje.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Un hombre de 52 años consulta por dolor muy intenso, de 12 horas, en el primer ortejo del pie izquierdo, con eritema y edema. Ha tenido tres episodios similares en el último año. No tiene fiebre ni toma tratamiento crónico.',
      question: '¿Cuál es la conducta más adecuada ahora?',
      options: [
        { letter: 'A', text: 'Iniciar alopurinol hoy' },
        { letter: 'B', text: 'Tratar la crisis con un antiinflamatorio y plantear alopurinol cuando se resuelva' },
        { letter: 'C', text: 'Iniciar antibióticos endovenosos' },
        { letter: 'D', text: 'Solicitar una resonancia de pie' },
        { letter: 'E', text: 'Iniciar colchicina como tratamiento permanente' },
      ],
      correct: 'B',
      explanation: 'Es una podagra, que se diagnostica de forma clínica. La crisis se trata con antiinflamatorio (también sirven colchicina o corticoides). Como tuvo tres crisis en un año, tiene indicación de tratamiento crónico con alopurinol, pero nunca se inicia durante la crisis aguda. La colchicina no se deja como tratamiento permanente por sus efectos adversos.',
      say: {
        stem: 'Un hombre de cincuenta y dos años con dolor muy intenso en el primer ortejo izquierdo desde hace doce horas, con eritema y edema. Ha tenido tres episodios iguales en el último año, no tiene fiebre ni tratamiento crónico.',
        question: '¿Cuál es la conducta más adecuada ahora?',
        options: 'Las opciones: iniciar alopurinol hoy; tratar la crisis con antiinflamatorio y plantear alopurinol cuando se resuelva; antibióticos endovenosos; resonancia de pie; o colchicina como tratamiento permanente. Piénsalo.',
        answer: 'Es la B. Es una podagra, de diagnóstico clínico. Se trata la crisis y el alopurinol se plantea después, porque tiene tres crisis al año. La A es la trampa: el alopurinol nunca se inicia en plena crisis.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Mujer de 58 años con insuficiencia renal crónica estadio 3 y úlcera duodenal activa consulta por artrosis de cadera con dolor que no cede con paracetamol.',
      question: '¿Cuál es el siguiente paso correcto en el manejo?',
      options: [
        { letter: 'A', text: 'Agregar ibuprofeno más omeprazol como protección gástrica' },
        { letter: 'B', text: 'Agregar celecoxib, ya que los COX-2 no producen úlcera' },
        { letter: 'C', text: 'Tramadol oral, saltando el escalón de los AINE por contraindicación' },
        { letter: 'D', text: 'Corticoides orales en dosis bajas como antiinflamatorio alternativo' },
        { letter: 'E', text: 'Derivar directamente a cirugía por la complejidad del caso' },
      ],
      correct: 'C',
      explanation: 'Con insuficiencia renal crónica o úlcera péptica activa los AINE están contraindicados, aunque se agregue omeprazol y aunque sean COX-2, que siguen siendo riesgosos para el riñón. El tratamiento salta del paracetamol al tramadol. Los corticoides orales no forman parte de la escalera, y la cirugía es la última línea.',
      say: {
        stem: 'Una mujer de cincuenta y ocho años con insuficiencia renal crónica en etapa tres y una úlcera duodenal activa, con artrosis de cadera y un dolor que no cede con paracetamol.',
        question: '¿Cuál es el siguiente paso correcto en el manejo?',
        options: 'Las opciones: ibuprofeno con omeprazol; celecoxib; tramadol oral saltando el escalón de los AINE; corticoides orales en dosis bajas; o derivar directo a cirugía. Piénsalo.',
        answer: 'Es la C. Con insuficiencia renal y úlcera, los AINE están contraindicados, y se salta del paracetamol al tramadol. La A es la trampa: el omeprazol protege el estómago, pero no el riñón. Y el celecoxib tampoco es seguro en insuficiencia renal.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 95',
      stem: 'Paciente con artralgias en IFD e IFP, rigidez matinal de 3-5 minutos, dolor que aumenta con actividad. Radiografía: disminución de espacio articular, esclerosis subcondral y osteofitos.',
      question: '¿Diagnóstico?',
      options: [
        { letter: 'A', text: 'Artritis reumatoide' },
        { letter: 'B', text: 'Artrosis' },
        { letter: 'C', text: 'Artritis psoriásica' },
        { letter: 'D', text: 'Artritis gotosa crónica' },
        { letter: 'E', text: 'Espondilitis anquilosante' },
      ],
      correct: 'B',
      explanation: 'Dolor mecánico, que aumenta con la actividad, rigidez matinal muy corta y una radiografía con disminución del espacio articular, esclerosis subcondral y osteofitos: artrosis.',
      say: {
        stem: 'Una pregunta real del EUNACOM de enero de dos mil veintitrés. Un paciente con dolor en las interfalángicas distales y proximales, con rigidez matinal de tres a cinco minutos, y dolor que aumenta con la actividad. La radiografía muestra disminución del espacio articular, esclerosis subcondral y osteofitos.',
        question: '¿Cuál es el diagnóstico?',
        options: 'Las opciones: artritis reumatoide; artrosis; artritis psoriásica; artritis gotosa crónica; o espondilitis anquilosante. Piénsalo.',
        answer: 'Es la B. Dolor que aumenta con la actividad, rigidez matinal de minutos y una radiografía con osteofitos y esclerosis, es artrosis. En la artritis reumatoide la rigidez matinal sería larga, de más de una hora.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 5',
      stem: 'Un paciente de 77 años presenta dolor inguinal derecho de 2 años de evolución, que aumenta con la marcha, limitándola. Al examen físico se aprecia pérdida de la rotación interna y la flexión de la cadera derecha.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Necrosis avascular de la cabeza femoral' },
        { letter: 'B', text: 'Coxartrosis' },
        { letter: 'C', text: 'Hernia foraminal S1' },
        { letter: 'D', text: 'Pinzamiento femoroacetabular' },
        { letter: 'E', text: 'Estenosis raquimedular' },
      ],
      correct: 'B',
      explanation: 'Dolor inguinal que lleva dos años, aumenta con la marcha y se acompaña de pérdida de la rotación interna y la flexión de la cadera, en un adulto mayor: coxartrosis, la artrosis de cadera.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil quince. Un paciente de setenta y siete años con dolor inguinal derecho de dos años, que aumenta con la marcha y la limita. Al examen pierde la rotación interna y la flexión de la cadera derecha.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: necrosis avascular de la cabeza femoral; coxartrosis; hernia foraminal S uno; pinzamiento femoroacetabular; o estenosis raquimedular. Piénsalo.',
        answer: 'Es la B. Dolor inguinal que aumenta con la marcha, con pérdida de la rotación interna en un adulto mayor, es coxartrosis. El tiempo ayuda: dos años de evolución orientan a artrosis y no a una necrosis avascular.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 2',
      stem: 'Un paciente de 75 años, es hospitalizado hace 2 días, por un accidente vascular encefálico. Presenta dolor, eritema y aumento de volumen de la rodilla izquierda, con impotencia funcional. Al examen se aprecia eritema y signos de derrame articular.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Artritis séptica' },
        { letter: 'B', text: 'Artritis por cristales' },
        { letter: 'C', text: 'Artritis reactiva' },
        { letter: 'D', text: 'Artritis reumatoide' },
        { letter: 'E', text: 'Osteoartritis' },
      ],
      correct: 'B',
      explanation: 'La condrocalcinosis es la causa más frecuente de monoartritis aguda en el adulto mayor y suele desencadenarse por el reposo, como en este paciente hospitalizado. Hay que descartar infección con la punción articular.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecisiete. Un paciente de setenta y cinco años, hospitalizado hace dos días por un accidente vascular, con dolor, eritema y aumento de volumen de la rodilla izquierda, con signos de derrame.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: artritis séptica; artritis por cristales; artritis reactiva; artritis reumatoide; o osteoartritis. Piénsalo.',
        answer: 'Es la B. Rodilla de un adulto mayor, tras reposo por hospitalización, es una artritis por cristales: la condrocalcinosis. La A es la tentación, pero faltan la fiebre y el foco infeccioso. Aun así, ante la duda, se punciona.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 34',
      stem: 'Un paciente de 48 años, obeso e hipertenso en tratamiento con losartán e hidroclorotiazida consulta por dolor muy intenso y aumento de volumen en relación al primer ortejo derecho, de 24 horas de evolución. Al examen físico, tiene FC: 80x’, PA: 144/96 mmHg, T°:37°C y se aprecia aumento de volumen y eritema de la primera articulación metatarsofalángica de ese pie, asociado a intenso dolor a la movilización. Refiere que ya había tenido un episodio similar hace un año.',
      question: '¿Cuál es el fármaco de elección para el manejo de este paciente?',
      options: [
        { letter: 'A', text: 'Diclofenaco' },
        { letter: 'B', text: 'Metotrexato' },
        { letter: 'C', text: 'Cloxacilina' },
        { letter: 'D', text: 'Alopurinol' },
        { letter: 'E', text: 'Prednisona' },
      ],
      correct: 'E',
      explanation: 'Es una crisis de gota aguda, probablemente desencadenada por la hidroclorotiazida. La crisis se trata con AINE, prednisona o colchicina. Los AINE son la recomendación tradicional en Chile, pero las guías internacionales sugieren corticoides, que además evitan agravar la presión y el riñón de un paciente hipertenso. El alopurinol no se inicia en la crisis.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticuatro. Un paciente de cuarenta y ocho años, obeso e hipertenso, con losartán e hidroclorotiazida, con dolor muy intenso y aumento de volumen del primer ortejo derecho desde hace veinticuatro horas, con eritema y dolor a la movilización. Tuvo un episodio igual hace un año, y no tiene fiebre.',
        question: '¿Cuál es el fármaco de elección para manejar a este paciente?',
        options: 'Las opciones: diclofenaco; metotrexato; cloxacilina; alopurinol; o prednisona. Piénsalo.',
        answer: 'Es la E. Es una gota aguda, probablemente desencadenada por la hidroclorotiazida. La crisis se trata con AINE, corticoides o colchicina, y aquí el examen marcó el corticoide. Los AINE son la recomendación tradicional en Chile, pero en un hipertenso con losartán y diurético tienen un riesgo adicional. La D es la trampa: el alopurinol nunca se inicia en la crisis.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 96',
      stem: 'Paciente con varios episodios de artritis de rodilla; punción muestra cristales de pirofosfato de calcio intracelulares.',
      question: '¿Tratamiento para prevenir nuevas crisis?',
      options: [
        { letter: 'A', text: 'AINES a demanda' },
        { letter: 'B', text: 'Alopurinol' },
        { letter: 'C', text: 'Metotrexato oral semanal' },
        { letter: 'D', text: 'Infiltración con corticoides' },
        { letter: 'E', text: 'Colchicina profiláctica' },
      ],
      correct: 'E',
      explanation: 'Con cristales de pirofosfato de calcio, es una pseudogota recurrente. Para prevenir nuevas crisis se usa colchicina profiláctica; el alopurinol es para el urato.',
      say: {
        stem: 'Una pregunta real del EUNACOM de enero de dos mil veintitrés. Un paciente con varios episodios de artritis de rodilla, y una punción que muestra cristales de pirofosfato de calcio dentro de las células.',
        question: '¿Qué tratamiento previene nuevas crisis?',
        options: 'Las opciones: AINE a demanda; alopurinol; metotrexato semanal; infiltración con corticoides; o colchicina profiláctica. Piénsalo.',
        answer: 'Es la E. Pirofosfato de calcio es pseudogota, y para prevenir nuevas crisis se usa colchicina en dosis bajas, de forma profiláctica. La B es la trampa: el alopurinol baja el urato, y aquí no hay urato.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: artrosis y monoartritis',
      cards: [
        { title: 'Artrosis', tag: 'Crónica', kind: 'key', items: [
          { t: 'Paracetamol y ejercicio primero', d: 'Luego AINE, tramadol, infiltración, prótesis',
            say: 'Cerremos con las reglas de oro. La artrosis es dolor mecánico y se trata de forma escalonada: paracetamol más ejercicio, luego AINE, tramadol, corticoide intraarticular y, al final, prótesis.' },
          { t: 'IRC o úlcera: sin AINE', d: 'Del paracetamol al tramadol',
            say: 'Si hay insuficiencia renal crónica o úlcera gastroduodenal, los AINE están contraindicados, y se salta directo al tramadol.' },
        ] },
        { title: 'Monoartritis aguda', tag: 'Urgencia', kind: 'alert', items: [
          { t: 'Articulación caliente: artrocentesis', d: 'Antes de dar antibióticos',
            say: 'Articulación caliente e hinchada: artrocentesis, antes de iniciar antibióticos. La podagra es la única que se diagnostica sin punción.' },
          { t: 'Gota: nunca alopurinol en crisis', d: 'Pseudogota: colchicina profiláctica',
            say: 'En la gota, la crisis se trata con AINE, colchicina o corticoides, y el alopurinol nunca se inicia en plena crisis. La pseudogota se previene con colchicina. Si te llevas una sola idea de hoy: una articulación caliente se punciona, y el líquido te dice si es cristal o infección. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Dolor articular: artrosis o monoartritis aguda',
    root: N('start', 'Paciente con dolor articular', 'Crónico o agudo',
      'Un paciente con dolor articular. Lo primero es decidir si el cuadro es crónico y mecánico, o agudo con signos inflamatorios.',
      ['Crónico, mecánico', N('do', 'Artrosis', 'Mejora con el reposo',
        'Si el dolor es mecánico, empeora con el uso y mejora con el reposo, es artrosis. Se trata de forma escalonada.',
        ['Sin contraindicación', N('ok', 'Paracetamol y ejercicio', 'Luego AINE y tramadol',
          'Parte con paracetamol y ejercicio. Si no basta, agregas un AINE, luego tramadol, infiltración y, al final, prótesis.')],
        ['Insuficiencia renal o úlcera', N('refer', 'Paracetamol, luego tramadol', 'Sin AINE',
          'Si tiene insuficiencia renal crónica o una úlcera gastroduodenal, los AINE están contraindicados, y pasas directo al tramadol.')],
      )],
      ['Agudo: dolor, eritema y calor', N('alert', 'Monoartritis aguda', 'Artrocentesis',
        'Si la articulación está caliente, hinchada y con eritema, es una monoartritis aguda, y se hace la artrocentesis para analizar el líquido.',
        ['Más de 50.000 leucocitos, fiebre', N('refer', 'Artritis séptica', 'Antibióticos y drenaje',
          'Con más de cincuenta mil leucocitos, fiebre y una articulación grande muy dolorosa, es una artritis séptica. Necesita antibióticos y drenaje de la articulación.')],
        ['Cristales en aguja, podagra', N('do', 'Gota', 'AINE, colchicina o corticoides',
          'Con cristales de urato en aguja, o una podagra típica, es gota. La crisis se trata con AINE, colchicina o corticoides, y el alopurinol se inicia después si hay dos o más crisis al año.')],
        ['Cristales romboidales, rodilla', N('do', 'Pseudogota', 'Colchicina para prevenir',
          'Con cristales romboidales de pirofosfato, en la rodilla de un adulto mayor, es pseudogota. Se previene con colchicina.')],
      )],
    ),
  },
};
