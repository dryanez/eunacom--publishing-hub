// Clase 2.3 (Diabetes) — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_diabetes.cjs (diab-08).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'diab-08',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Elegir el segundo fármaco según el órgano que hay que proteger',
      say: 'Bienvenidos. Hoy vemos las tres familias nuevas de antidiabéticos: los inhibidores de SGLT dos, los agonistas de GLP uno y los inhibidores de DPP cuatro. En la clase de tratamiento escalonado ya asomaron como segundo fármaco. Lo que los hace distintos es que no solo bajan la glicemia: algunos protegen el corazón y el riñón. Y el examen pregunta justamente eso: qué familia para qué órgano, y qué efecto adverso es el sello de cada una.',
    },

    {
      type: 'flow',
      kicker: 'Inhibidores SGLT2',
      title: 'Gliflozinas: botar glucosa por la orina',
      nodes: [
        { id: 'isg', col: 0, row: 1, k: 'cause', t: 'Empagliflozina, dapagliflozina', s: 'También canagliflozina' },
        { id: 'tub', col: 1, row: 1, k: 'mech', t: 'Bloquean SGLT2', s: 'Túbulo contorneado proximal' },
        { id: 'glu', col: 2, row: 1, k: 'mech', t: 'Glucosuria y natriuresis', s: '60 a 80 g de glucosa al día' },
        { id: 'efe', col: 3, row: 0, k: 'effect', t: 'HbA1c −0,6 a 0,8 %', s: 'Peso −2 a 3 kg · PA −4 a 6 mmHg' },
        { id: 'ic', col: 3, row: 2, k: 'good', t: 'Protección cardiorrenal', s: 'IC y ERC con albuminuria' },
        { id: 'hip', col: 4, row: 1, k: 'good', t: 'Sin hipoglicemia', s: 'No tocan la insulina' },
      ],
      edges: [
        { from: 'isg', to: 'tub' }, { from: 'tub', to: 'glu' },
        { from: 'glu', to: 'efe' }, { from: 'glu', to: 'ic' }, { from: 'efe', to: 'hip' },
      ],
      steps: [
        { show: ['isg'], note: 'Las gliflozinas',
          say: 'Partamos por los inhibidores de SGLT dos, las gliflozinas: empagliflozina, dapagliflozina y canagliflozina.' },
        { show: ['tub'], note: 'Actúan en el riñón',
          say: 'Actúan en un lugar que ningún otro antidiabético usa: el riñón. Bloquean el cotransportador sodio glucosa tipo dos del túbulo contorneado proximal, que es el que normalmente recupera la glucosa filtrada.' },
        { show: ['glu'], note: 'El riñón deja escapar glucosa y sodio',
          say: 'Si lo bloqueas, la glucosa y el sodio se van por la orina: glucosuria y natriuresis osmótica. El paciente pierde de sesenta a ochenta gramos de glucosa al día.' },
        { show: ['efe'], note: 'Efectos metabólicos modestos',
          say: 'El efecto sobre la glicemia es moderado: baja la hemoglobina glicosilada de cero coma seis a cero coma ocho puntos. Además baja dos a tres kilos de peso, y la presión en cuatro a seis milímetros de mercurio, por la pérdida de sodio.' },
        { show: ['ic'], note: 'Lo que realmente importa',
          say: 'Pero lo importante es otra cosa. Reducen en más de un treinta por ciento las hospitalizaciones por insuficiencia cardíaca, con fracción de eyección reducida o preservada, y frenan la caída de la filtración en la enfermedad renal crónica con albuminuria. Por eso son de elección en el paciente con corazón o riñón enfermo.' },
        { show: ['hip'], note: 'Independiente de la insulina',
          say: 'Y como su mecanismo no depende de la insulina, no producen hipoglicemia.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Inhibidores SGLT2',
      title: 'Los efectos adversos que se preguntan',
      cards: [
        { title: 'El más frecuente', tag: 'Sello', kind: 'alert', items: [
          { t: 'Micosis genitales', d: 'Candidiasis vulvovaginal y balanitis',
            say: 'Los efectos adversos salen del mismo mecanismo. El más frecuente, y el que más se pregunta, son las infecciones micóticas genitales: candidiasis vulvovaginal en la mujer y balanitis en el hombre. Una orina cargada de glucosa es un buen medio para los hongos.' },
        ] },
        { title: 'Por la pérdida de volumen', tag: 'Adulto mayor', kind: 'criteria', items: [
          { t: 'Depleción de volumen', d: 'Hipotensión ortostática en ancianos',
            say: 'El segundo viene de la natriuresis: depleción de volumen e hipotensión ortostática, sobre todo en el adulto mayor.' },
        ] },
        { title: 'El más grave', tag: 'Trampa', kind: 'alert', items: [
          { t: 'Cetoacidosis euglicémica', d: 'Glicemia < 200 a 250 mg/dL',
            say: 'Y el más grave: la cetoacidosis diabética euglicémica. Es una cetoacidosis con glicemias bajo doscientos a doscientos cincuenta, porque el fármaco sigue botando glucosa por la orina.' },
          { t: 'Gatillada por cirugía o ayuno', d: 'No descartar CAD por la glicemia',
            say: 'Se gatilla con cirugías o ayunos prolongados. La trampa es descartar la cetoacidosis porque la glicemia no está tan alta. Si un paciente con gliflozina está acidótico, piensa en ella.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Agonistas GLP-1',
      title: 'Incretinas: saciedad y protección arterial',
      nodes: [
        { id: 'glp', col: 0, row: 1, k: 'cause', t: 'Liraglutida, semaglutida', s: 'También dulaglutida' },
        { id: 'ins', col: 1, row: 0, k: 'mech', t: 'Más insulina, menos glucagón', s: 'Solo si hay glucosa' },
        { id: 'vac', col: 1, row: 2, k: 'mech', t: 'Vaciamiento lento y saciedad', s: 'Estómago e hipotálamo' },
        { id: 'a1c', col: 2, row: 0, k: 'effect', t: 'HbA1c −1,0 a 1,8 %', s: 'Potentes' },
        { id: 'pes', col: 2, row: 2, k: 'good', t: 'Baja de peso 5 a 15 %', s: 'Del peso corporal' },
        { id: 'cv', col: 3, row: 1, k: 'good', t: 'Menos IAM, ACV y muerte CV', s: 'LEADER, SUSTAIN-6' },
      ],
      edges: [
        { from: 'glp', to: 'ins' }, { from: 'glp', to: 'vac' },
        { from: 'ins', to: 'a1c' }, { from: 'vac', to: 'pes' },
        { from: 'a1c', to: 'cv' }, { from: 'pes', to: 'cv' },
      ],
      steps: [
        { show: ['glp'], note: 'Imitan una hormona intestinal',
          say: 'La segunda familia son los agonistas del receptor de GLP uno: liraglutida, semaglutida y dulaglutida. Imitan a la incretina GLP uno, una hormona que el intestino libera al comer, pero son resistentes a la enzima que la degrada.' },
        { show: ['ins'], note: 'Dependiente de glucosa',
          say: 'Estimulan la secreción de insulina, pero solo si hay glucosa, y suprimen el glucagón. Fíjate en la diferencia con la glibenclamida: esta insulina depende de la glucosa, así que por sí solos no deberían bajar la glicemia más de lo necesario.' },
        { show: ['vac'], note: 'Actúan también en el cerebro',
          say: 'Además enlentecen el vaciamiento gástrico y actúan en el hipotálamo, generando saciedad precoz. El paciente come menos.' },
        { show: ['a1c'], note: 'Más potentes que los orales',
          say: 'El resultado es una baja potente de la hemoglobina glicosilada, de uno a uno coma ocho puntos.' },
        { show: ['pes'], note: 'El sello: bajar de peso',
          say: 'Y una baja de peso marcada, del cinco al quince por ciento del peso corporal. Por eso son la familia que se elige cuando la obesidad pesa en la decisión.' },
        { show: ['cv'], note: 'Protegen la arteria',
          say: 'Pero lo más importante es que reducen el infarto, el accidente cerebrovascular y la muerte cardiovascular, como mostraron los estudios LEADER y SUSTAIN seis. Entonces, si en el enunciado hay un infarto o un ACV previo, piensa en un GLP uno.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Agonistas GLP-1',
      title: 'Cómo se usan y cuándo no',
      cards: [
        { title: 'Vía de administración', tag: 'Inyectables casi todos', kind: 'pharma', items: [
          { t: 'Liraglutida', d: 'Subcutánea diaria',
            say: '¿Cómo se usan? La liraglutida es subcutánea, una vez al día.' },
          { t: 'Semaglutida', d: 'Subcutánea semanal u oral diaria',
            say: 'La semaglutida puede ser subcutánea una vez a la semana, o en comprimido oral diario.' },
        ] },
        { title: 'Efectos adversos', tag: 'Digestivos', kind: 'alert', items: [
          { t: 'Náuseas, vómitos, diarrea', d: 'Al inicio: titular lento',
            say: 'Sus efectos adversos son digestivos: náuseas, vómitos y diarrea transitoria al inicio. Se manejan igual que con la metformina: titulando lento.' },
        ] },
        { title: 'Contraindicación', tag: 'Se pregunta', kind: 'criteria', items: [
          { t: 'Carcinoma medular de tiroides', d: 'Personal o familiar; también NEM 2',
            say: 'Y una contraindicación que se pregunta: el antecedente personal o familiar de carcinoma medular de tiroides, o de neoplasia endocrina múltiple tipo dos.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Inhibidores DPP-4',
      title: 'Gliptinas: seguras y neutras',
      cards: [
        { title: 'Mecanismo', tag: 'GLP-1 propio', kind: 'key', items: [
          { t: 'Sitagliptina, vildagliptina, linagliptina', d: 'Inhiben la enzima DPP-4',
            say: 'La tercera familia son los inhibidores de DPP cuatro, las gliptinas: sitagliptina, vildagliptina y linagliptina. En vez de dar un GLP uno de afuera, inhiben la enzima que lo degrada, y así prolongan la vida del GLP uno propio.' },
          { t: 'Potencia moderada', d: 'HbA1c −0,5 a 0,7 %',
            say: 'Por eso su potencia es moderada: bajan la hemoglobina glicosilada de cero coma cinco a cero coma siete puntos. Y no tienen el efecto sobre el peso ni la protección cardiovascular de los agonistas.' },
        ] },
        { title: 'Ventajas', tag: 'Adulto mayor', kind: 'normal', items: [
          { t: 'Sin hipoglicemia, peso neutro', d: 'Excelente perfil de seguridad',
            say: 'Su gran ventaja es la seguridad: son neutras en el peso y no producen hipoglicemia. Por eso son muy cómodas en el adulto mayor, y son el reemplazo natural de la glibenclamida cuando esta da hipoglicemias, como viste en la clase anterior.' },
          { t: 'Raro: pancreatitis aguda', d: 'Efecto adverso poco frecuente',
            say: 'Como efecto adverso, rara vez, pancreatitis aguda.' },
        ] },
        { title: 'Perla renal', tag: 'Se pregunta', kind: 'criteria', items: [
          { t: 'Linagliptina: eliminación biliar', d: 'Sin ajuste en ninguna falla renal',
            say: 'Y una perla de examen: la linagliptina es la única gliptina que se elimina principalmente por la bilis y las heces. Por eso no necesita ajuste de dosis en ningún grado de insuficiencia renal, y es de elección en hemodiálisis. Las otras gliptinas se eliminan por el riñón y se ajustan.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'La diferencia que más se pregunta',
      title: '¿Qué órgano hay que proteger?',
      nodes: [
        { id: 'pac', col: 0, row: 2, k: 'start', t: 'DM2 con metformina', s: 'Sobre la meta' },
        { id: 'ic', col: 1, row: 0, k: 'q', t: 'Insuficiencia cardíaca', s: 'Reducida o preservada' },
        { id: 'erc', col: 1, row: 1, k: 'q', t: 'ERC con albuminuria', s: 'VFG 20 a 60' },
        { id: 'ath', col: 1, row: 3, k: 'q', t: 'IAM o ACV previo', s: 'U obesidad marcada' },
        { id: 'am', col: 1, row: 4, k: 'q', t: 'Adulto mayor o hipoglicemias', s: 'Sin falla de órgano' },
        { id: 'sg', col: 2, row: 0, k: 'good', t: 'iSGLT2', s: 'Empagliflozina o dapagliflozina' },
        { id: 'gl', col: 2, row: 3, k: 'good', t: 'Agonista GLP-1', s: 'O un iSGLT2' },
        { id: 'dp', col: 2, row: 4, k: 'good', t: 'iDPP-4', s: 'Linagliptina si hay falla renal avanzada' },
      ],
      edges: [
        { from: 'pac', to: 'ic' }, { from: 'pac', to: 'erc' }, { from: 'pac', to: 'ath' }, { from: 'pac', to: 'am' },
        { from: 'ic', to: 'sg' }, { from: 'erc', to: 'sg' }, { from: 'ath', to: 'gl' }, { from: 'am', to: 'dp' },
      ],
      steps: [
        { show: ['pac'], note: 'El mismo paciente, distintos órganos',
          say: 'Juntemos las tres familias en la pregunta del examen. Un paciente con metformina que no llega a la meta, y hay que elegir el segundo fármaco. La clave no es la hemoglobina glicosilada: es qué órgano hay que proteger.' },
        { show: ['ic', 'sg'], note: 'Corazón que falla: gliflozina',
          say: 'Si tiene insuficiencia cardíaca, con fracción de eyección reducida o preservada, el segundo fármaco es un inhibidor de SGLT dos. Reduce las hospitalizaciones, independiente de la hemoglobina glicosilada.' },
        { show: ['erc'], note: 'Riñón con albuminuria: gliflozina',
          say: 'Si tiene enfermedad renal crónica con albuminuria, también un inhibidor de SGLT dos, porque frena la caída de la filtración. Pero ojo: su efecto depende de que el riñón filtre, y el libro lo indica con una filtración entre veinte y sesenta.' },
        { show: ['ath', 'gl'], note: 'Arteria enferma: GLP-1',
          say: 'Si lo que predomina es la enfermedad aterosclerótica, un infarto o un ACV previo, o una obesidad importante, un agonista de GLP uno. Un inhibidor de SGLT dos también es aceptable en este escenario.' },
        { show: ['am', 'dp'], note: 'Sin órgano que proteger: seguridad',
          say: 'Y si no hay un órgano que proteger, pero el paciente es mayor o ya hizo hipoglicemias, una gliptina, por su seguridad. Con falla renal avanzada o en diálisis, la linagliptina, que no se ajusta.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Pongamos esa misma lógica en el árbol de decisión que vas a usar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Tres familias, tres sellos',
      head: ['Familia', 'Beneficio que se pregunta', 'Efecto adverso sello', 'Peso'],
      rows: [
        { cells: ['iSGLT2 (gliflozinas)', 'Insuficiencia cardíaca y nefroprotección', 'Micosis genitales · CAD euglicémica', 'Baja 2 a 3 kg'],
          say: 'Repasemos los sellos de cada familia. Gliflozinas: insuficiencia cardíaca y riñón; como efecto adverso, las micosis genitales y la cetoacidosis euglicémica; y bajan dos a tres kilos.' },
        { cells: ['Agonistas GLP-1', 'Enfermedad aterosclerótica (IAM, ACV)', 'Náuseas y vómitos al titular', 'Baja 5 a 15 % del peso'],
          say: 'Agonistas de GLP uno: enfermedad aterosclerótica; náuseas y vómitos al titular; y la mayor baja de peso, del cinco al quince por ciento.' },
        { cells: ['iDPP-4 (gliptinas)', 'Seguridad: sin hipoglicemia', 'Raro: pancreatitis aguda', 'Neutro'],
          say: 'Gliptinas: seguridad, sin hipoglicemia; rara vez pancreatitis; y neutras en el peso.' },
        { cells: ['Linagliptina', 'Sin ajuste en ninguna falla renal', 'Eliminación biliar', 'Neutro'],
          say: 'Y la linagliptina, la gliptina que no se ajusta por riñón, porque se elimina por la bilis. La trampa es elegir sitagliptina o vildagliptina en un paciente en diálisis.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 64 años con DM2 en tratamiento con metformina 850 mg cada 12 horas e insuficiencia cardíaca con fracción de eyección de 32%, con disnea de esfuerzo CF II. HbA1c 8,2%. VFG 62 mL/min. Se decide asociar un segundo fármaco.',
      question: '¿Cuál es el segundo fármaco de elección?',
      options: [
        { letter: 'A', text: 'Glibenclamida' },
        { letter: 'B', text: 'Pioglitazona' },
        { letter: 'C', text: 'Empagliflozina o dapagliflozina' },
        { letter: 'D', text: 'Sitagliptina' },
        { letter: 'E', text: 'Insulina NPH nocturna' },
      ],
      correct: 'C',
      explanation: 'DM2 con insuficiencia cardíaca con fracción de eyección reducida: el segundo fármaco de elección es un iSGLT2, que reduce en más de 30% las hospitalizaciones por insuficiencia cardíaca y frena el deterioro renal, sin hipoglicemias. La pioglitazona retiene líquido y está contraindicada.',
      say: {
        stem: 'Vamos con un caso. Hombre de sesenta y cuatro años con metformina, e insuficiencia cardíaca con fracción de eyección de treinta y dos por ciento. Hemoglobina glicosilada de ocho coma dos y filtración de sesenta y dos. Hay que agregar un segundo fármaco.',
        question: '¿Cuál es el segundo fármaco de elección?',
        options: 'Las opciones: glibenclamida, pioglitazona, empagliflozina o dapagliflozina, sitagliptina, o insulina NPH. Piénsalo.',
        answer: 'Es la C. El órgano que hay que proteger es el corazón, y la familia que reduce las hospitalizaciones por insuficiencia cardíaca es la de las gliflozinas. Su filtración de sesenta y dos le permite usarlas. La pioglitazona es la trampa peligrosa: retiene líquido y descompensa la insuficiencia cardíaca. La glibenclamida y la sitagliptina bajan la glicemia, pero no protegen el corazón.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 141',
      stem: 'Un paciente con antecedente de una angioplastia coronaria hace 6 meses, diabético e hipertenso, en tratamiento con metformina 2 gramos al día, presenta HbA1c de 8,2% y glicemia de ayuno de 180 mg/dl.',
      question: '¿Cuál es el tratamiento más adecuada?',
      options: [
        { letter: 'A', text: 'Agregar glibenclamida' },
        { letter: 'B', text: 'Iniciar empaglifozina' },
        { letter: 'C', text: 'Iniciar saxagliptina' },
        { letter: 'D', text: 'Agregar insulina NPH nocturna' },
        { letter: 'E', text: 'Iniciar pioglitazona' },
      ],
      correct: 'B',
      explanation: 'Con enfermedad coronaria establecida, los fármacos de elección para agregar a la metformina son los que reducen eventos cardiovasculares: iSGLT2 como la empagliflozina, o agonistas GLP-1.',
      say: {
        stem: 'Ahora las preguntas reales. La primera, del EUNACOM de julio de dos mil diecinueve. Paciente con una angioplastia coronaria hace seis meses, diabético e hipertenso, con metformina dos gramos al día. Hemoglobina glicosilada de ocho coma dos.',
        question: '¿Cuál es el tratamiento más adecuado?',
        options: 'Las opciones: agregar glibenclamida, empagliflozina, saxagliptina, insulina NPH nocturna, o pioglitazona. Piénsalo.',
        answer: 'Es la B, empagliflozina. Tiene enfermedad coronaria: el segundo fármaco tiene que proteger el corazón. Lo ideal sería un agonista de GLP uno o una gliflozina, y aquí la única de esas opciones es la empagliflozina. La glibenclamida es el distractor, porque es lo que hay en la canasta GES, pero no reduce eventos. Y con ocho coma dos no hay criterio de insulina.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 107',
      stem: 'Un paciente de 72 años, con antecedente de un infarto miocárdico, hace 2 meses. Durante la hospitalización, se diagnosticó diabetes mellitus, iniciándose metformina 850 mg cada 12 horas. Sin embargo, desde entonces ha presentado diarrea. Sus glicemias de ayuno son cercanas a 140 mg/dl y su hemoglobina glicosilada resulta 8,2%.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Reemplazar la metformina por glibenclamida' },
        { letter: 'B', text: 'Agregar insulina NPH' },
        { letter: 'C', text: 'Reemplazar el tratamiento por metformina 750 mg XR' },
        { letter: 'D', text: 'Reemplazar la metformina por sitagliptina' },
        { letter: 'E', text: 'Aumentar la dosis de metformina' },
      ],
      correct: 'D',
      explanation: 'La metformina le produce efectos adversos, por lo que se suspende. En un adulto mayor con infarto reciente, se prefiere la sitagliptina sobre la glibenclamida por su seguridad (sin hipoglicemia). No tiene indicaciones de insulina.',
      say: {
        stem: 'Del EUNACOM de diciembre de dos mil dieciocho. Paciente de setenta y dos años, con un infarto hace dos meses, en que se le diagnosticó diabetes y se inició metformina. Desde entonces tiene diarrea. Hemoglobina glicosilada de ocho coma dos.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: cambiar la metformina por glibenclamida, agregar insulina NPH, cambiar a metformina de liberación prolongada, cambiar la metformina por sitagliptina, o subir la metformina. Piénsalo.',
        answer: 'Es la D, sitagliptina. La metformina le está dando su efecto adverso cardinal, la diarrea, y hay que cambiarla. ¿Por qué no glibenclamida? Porque es un adulto mayor, frágil, con un infarto reciente: una hipoglicemia en él es peligrosa, y la gliptina no la produce. Subir la metformina empeoraría la diarrea, y con ocho coma dos no hay criterio de insulina.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 37',
      stem: 'Una paciente de 67 años, monorrena, es diagnosticada recientemente de diabetes mellitus tipo 2. Sus exámenes muestran HbA1c de 8,5%, glicemia de ayuno de 132 mg/dL, creatinina de 4,1 mg/dL, nitrógeno ureico de 68 mg/dL, potasio plasmático de 4,2 mEq/L y un clearance de creatinina estimado de 12 mL/min. Presenta una relación albuminuria/creatinuria de 1.100 mg/g.',
      question: '¿Qué fármaco es el más adecuado para iniciar el tratamiento?',
      options: [
        { letter: 'A', text: 'Metformina' },
        { letter: 'B', text: 'Glibenclamida' },
        { letter: 'C', text: 'Vildagliptina' },
        { letter: 'D', text: 'Dapagliflozina' },
        { letter: 'E', text: 'Semaglutida' },
      ],
      correct: 'E',
      explanation: 'Con clearance de 12 mL/min, la metformina y la glibenclamida están contraindicadas; los iSGLT2 necesitan filtración para actuar (glucosuria) y no se inician con esta función renal; la vildagliptina se elimina por el riñón. Los agonistas GLP-1 como la semaglutida son la alternativa a la insulina, con beneficio cardiovascular.',
      say: {
        stem: 'Y la última, del EUNACOM de diciembre de dos mil veinticinco. Paciente de sesenta y siete años, monorrena, con diabetes tipo dos recién diagnosticada y hemoglobina glicosilada de ocho coma cinco. Su creatinina es cuatro coma uno, con un clearance de doce, y una albuminuria muy elevada.',
        question: '¿Qué fármaco es el más adecuado para iniciar el tratamiento?',
        options: 'Las opciones: metformina, glibenclamida, vildagliptina, dapagliflozina o semaglutida. Piénsalo.',
        answer: 'Es la E, semaglutida. Descartemos por el riñón. Con un clearance de doce, la metformina y la glibenclamida están contraindicadas. La dapagliflozina tienta por la albuminuria, pero funciona botando glucosa por la orina, y con esta filtración ya no se inicia. La vildagliptina se elimina por el riñón; la gliptina sin ajuste era la linagliptina, que no está. Queda el agonista de GLP uno, la alternativa a la insulina.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Gliflozinas', tag: 'Corazón y riñón', kind: 'key', items: [
          { t: 'IC y ERC con albuminuria', d: 'Glucosuria, sin hipoglicemia',
            say: 'Cerremos con las reglas de oro. Las gliflozinas botan glucosa por la orina y son de elección en la insuficiencia cardíaca y en la enfermedad renal con albuminuria.' },
          { t: 'Micosis genitales · CAD euglicémica', d: 'El frecuente y el grave',
            say: 'Su efecto adverso más frecuente son las micosis genitales, y el más grave, la cetoacidosis euglicémica tras una cirugía o un ayuno.' },
        ] },
        { title: 'Agonistas GLP-1', tag: 'Arteria y peso', kind: 'pharma', items: [
          { t: 'IAM o ACV previo, obesidad', d: 'Baja de peso 5 a 15 %',
            say: 'Los agonistas de GLP uno son de elección en la enfermedad aterosclerótica y en la obesidad, con la mayor baja de peso. Dan náuseas al inicio y se contraindican con carcinoma medular de tiroides.' },
        ] },
        { title: 'Gliptinas', tag: 'Seguridad', kind: 'normal', items: [
          { t: 'Sin hipoglicemia, peso neutro', d: 'Adulto mayor',
            say: 'Las gliptinas son seguras y neutras, ideales en el adulto mayor. Y la linagliptina no se ajusta por riñón.' },
          { t: 'Linagliptina: sin ajuste renal', d: 'De elección en hemodiálisis',
            say: 'Si te llevas una sola idea de hoy: el segundo fármaco no se elige por la hemoglobina glicosilada, sino por el órgano que hay que proteger. Corazón o riñón, gliflozina; arteria o peso, GLP uno; y seguridad, gliptina. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Segundo fármaco según el órgano diana',
    root: N('start', 'DM2 con metformina, fuera de meta', 'Elegir el segundo fármaco',
      'Paciente con diabetes tipo dos, con metformina y fuera de meta. El segundo fármaco lo decide la comorbilidad, no la cifra de hemoglobina glicosilada.',
      ['', N('q', '¿Insuficiencia cardíaca o ERC con albuminuria?', 'Corazón o riñón',
        'Primera pregunta: ¿tiene insuficiencia cardíaca, o enfermedad renal crónica con albuminuria?',
        ['Sí', N('ok', 'iSGLT2', 'Empagliflozina o dapagliflozina',
          'Si la tiene, un inhibidor de SGLT dos, empagliflozina o dapagliflozina. Advertirle de las micosis genitales y suspenderlo ante cirugía o ayuno.')],
        ['No', N('q', '¿IAM, ACV previo u obesidad?', 'Arteria o peso',
          'Si no, segunda pregunta: ¿tiene enfermedad aterosclerótica establecida, o una obesidad que pesa en la decisión?',
          ['Sí', N('ok', 'Agonista GLP-1', 'Liraglutida o semaglutida',
            'Si la tiene, un agonista de GLP uno, liraglutida o semaglutida, que reduce eventos y baja de peso. Un inhibidor de SGLT dos también es aceptable.')],
          ['No', N('q', '¿Adulto mayor o hipoglicemias?', 'Priorizar seguridad',
            'Si no hay un órgano que proteger, se prioriza la seguridad.',
            ['Sí', N('do', 'iDPP-4', 'Linagliptina si hay falla renal avanzada',
              'En el adulto mayor o con hipoglicemias, una gliptina. Si además tiene falla renal avanzada o está en diálisis, la linagliptina.')],
            ['No', N('refer', 'Glibenclamida o iDPP-4', 'Opción GES en APS: glibenclamida',
              'Y en el paciente de riesgo estándar, glibenclamida, que es la opción de la canasta GES, o una gliptina.')])])])]),
  },
};
