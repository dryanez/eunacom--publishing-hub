// Clase 2.5 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_diabetes.cjs (diab-10).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'diab-10',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Meta bajo 130/80 y un fármaco que protege el riñón',
      say: 'Bienvenidos. Hoy juntamos dos enfermedades que casi siempre llegan juntas: la diabetes y la hipertensión. Juntas multiplican por cuatro el riesgo cardiovascular y aceleran el camino a la diálisis. El examen pregunta tres cosas: la meta de presión, qué fármaco se elige cuando hay albuminuria, y qué combinación está prohibida. Las tres se entienden mirando un solo lugar: el glomérulo.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: '¿Cómo se daña el glomérulo diabético?',
      nodes: [
        { id: 'hig', col: 0, row: 0, k: 'cause', t: 'Hiperglicemia crónica', s: 'Daño endotelial y rigidez arterial' },
        { id: 'afe', col: 1, row: 0, k: 'mech', t: 'Aferente dilatada', s: 'Entra más presión al glomérulo' },
        { id: 'hta', col: 0, row: 2, k: 'cause', t: 'Hipertensión', s: 'Presión que llega al capilar' },
        { id: 'pig', col: 2, row: 1, k: 'mech', t: 'Presión intraglomerular alta', s: 'Hiperfiltración' },
        { id: 'pod', col: 3, row: 1, k: 'effect', t: 'Albuminuria', s: 'Se rompen podocitos y membrana basal' },
        { id: 'esc', col: 4, row: 1, k: 'risk', t: 'Glomeruloesclerosis', s: 'Camino a la ERC terminal' },
      ],
      edges: [
        { from: 'hig', to: 'afe' }, { from: 'afe', to: 'pig' }, { from: 'hta', to: 'pig', label: 'transmite' },
        { from: 'pig', to: 'pod' }, { from: 'pod', to: 'esc' },
      ],
      steps: [
        { show: ['hig'], note: 'La glucosa daña la pared de los vasos',
          say: 'Partamos por el mecanismo. La hiperglicemia crónica daña los vasos: glica las proteínas, altera el endotelio y endurece las arterias.' },
        { show: ['afe'], note: 'La puerta de entrada queda abierta',
          say: 'Y en el riñón pasa algo particular: en el glomérulo diabético, la arteriola aferente, la que trae la sangre, queda relativamente dilatada. La puerta de entrada queda abierta.' },
        { show: ['hta', 'pig'], note: 'La presión sistémica llega directo al capilar',
          say: 'Si a eso le sumas hipertensión, toda esa presión llega directo al capilar glomerular. La presión dentro del glomérulo sube, y eso es la hiperfiltración.' },
        { show: ['pod'], note: 'La albuminuria es la señal de alarma',
          say: 'Esa presión rompe los podocitos y la membrana basal, y la albúmina empieza a escaparse a la orina. La albuminuria es la primera señal visible del daño, y por eso la vamos a usar para elegir el fármaco.' },
        { show: ['esc'], note: 'Si no se frena, cicatriz',
          say: 'Si nadie baja esa presión, el glomérulo termina cicatrizando: glomeruloesclerosis, y avance hacia la enfermedad renal terminal. La nefropatía la vemos en detalle más adelante; hoy nos quedamos con cómo protegerla.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Nefroprotección',
      title: 'Abrir la puerta de salida: la arteriola eferente',
      nodes: [
        { id: 'at2', col: 0, row: 1, k: 'cause', t: 'Angiotensina II', s: 'Contrae sobre todo la eferente' },
        { id: 'blq', col: 1, row: 1, k: 'good', t: 'IECA o ARA-II', s: 'Enalapril o losartán' },
        { id: 'efe', col: 2, row: 1, k: 'mech', t: 'Eferente dilatada', s: 'Se abre la salida' },
        { id: 'baj', col: 3, row: 1, k: 'good', t: 'Baja la presión intraglomerular', s: 'Menos proteinuria' },
        { id: 'ren', col: 4, row: 1, k: 'good', t: 'Se frena el daño renal', s: 'A largo plazo' },
      ],
      edges: [
        { from: 'at2', to: 'blq', label: 'se bloquea' }, { from: 'blq', to: 'efe' },
        { from: 'efe', to: 'baj' }, { from: 'baj', to: 'ren' },
      ],
      steps: [
        { show: ['at2'], note: 'La angiotensina II cierra la salida',
          say: 'Ahora el mecanismo que más se pregunta. La angiotensina II contrae de preferencia la arteriola eferente, la de salida del glomérulo. Si la salida se estrecha, la presión adentro sube todavía más.' },
        { show: ['blq', 'efe'], note: 'Bloquear el sistema renina angiotensina',
          say: 'Los inhibidores de la enzima convertidora, los IECA como el enalapril, y los antagonistas del receptor de angiotensina, los ARA dos como el losartán, bloquean ese efecto. El resultado es una vasodilatación selectiva de la arteriola eferente.' },
        { show: ['baj'], note: 'Se abre la salida, baja la presión',
          say: 'Al abrir la salida, la presión dentro del glomérulo baja de inmediato, y se filtra menos proteína. Fíjate que el efecto no depende solo de bajar la presión del brazo: actúan dentro del riñón.' },
        { show: ['ren'], note: 'Por eso son obligatorios con albuminuria',
          say: 'Y con menos presión intraglomerular se frena el deterioro renal a largo plazo. Por eso, con albuminuria, estos fármacos no son una opción entre otras: son obligatorios. Dilatación de la eferente: esa es la frase del examen.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: '¿Qué fármaco se elige?',
      cards: [
        { title: 'Con albuminuria', tag: 'RAC ≥ 30 mg/g', kind: 'alert', items: [
          { t: 'IECA o ARA-II obligatorio', d: 'Enalapril o losartán',
            say: 'Veamos la elección. El paso uno es medir la razón albúmina creatinina en orina, la RAC, y estimar la filtración glomerular. Si la RAC es de treinta o más, o hay enfermedad renal crónica, el fármaco de primera línea es un IECA o un ARA dos. Enalapril o losartán.' },
        ] },
        { title: 'Sin albuminuria', tag: 'RAC < 30 mg/g', kind: 'normal', items: [
          { t: 'Cualquiera de primera línea', d: 'IECA, ARA-II, amlodipino o tiazida',
            say: 'Si no hay albuminuria, sirve cualquier antihipertensivo de primera línea: un IECA, un ARA dos, amlodipino o una tiazida.' },
        ] },
        { title: 'Betabloqueadores', tag: 'No de primera línea', kind: 'criteria', items: [
          { t: 'Solo con indicación cardíaca', d: 'Infarto previo o insuficiencia cardíaca',
            say: 'Y los betabloqueadores no son de primera línea en el diabético hipertenso. Se agregan solo si hay una indicación cardiológica: un infarto previo o insuficiencia cardíaca. En el coronario, se suman a un IECA o ARA dos, no lo reemplazan.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Seguridad',
      title: 'La combinación prohibida',
      cards: [
        { title: 'Nunca IECA + ARA-II', tag: 'Prohibición absoluta', kind: 'alert', items: [
          { t: 'Sin beneficio adicional', d: 'Demostrado en ONTARGET',
            say: 'Una regla que se pregunta: nunca se combina un IECA con un ARA dos. Parece lógico sumar dos fármacos que protegen el riñón, pero los ensayos clínicos, como el ONTARGET, mostraron que no agrega beneficio.' },
          { t: 'Más falla renal aguda', d: 'E hiperkalemia severa',
            say: 'Y sí agrega daño: aumenta el riesgo de insuficiencia renal aguda y de hiperkalemia severa. Si te ofrecen enalapril más losartán, descártalo.' },
        ] },
        { title: 'Riñón avanzado', tag: 'VFG < 30 mL/min', kind: 'pharma', items: [
          { t: 'IECA o ARA-II con potasio vigilado', d: 'Segundo fármaco: furosemida o amlodipino',
            say: 'Con una filtración bajo treinta, se mantiene el IECA o el ARA dos, pero con monitoreo estricto del potasio. Y como segundo fármaco, un diurético de asa como la furosemida, o amlodipino.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Metas',
      title: 'Bajo 130/80, y biterapia si parte alto',
      cards: [
        { title: 'Meta tensional', tag: 'ADA y MINSAL', kind: 'key', items: [
          { t: 'PA < 130/80 mmHg', d: 'Para casi todos los diabéticos',
            say: 'Ahora la meta. En la gran mayoría de los diabéticos, la presión debe quedar bajo ciento treinta ochenta. Es más exigente que en el hipertenso sin diabetes, y ese número se pregunta.' },
          { t: 'De forma gradual', d: 'Sin hipotensión ortostática en ancianos',
            say: 'Se alcanza de forma gradual, siempre que se tolere bien, sin provocar hipotensión ortostática en el adulto mayor.' },
        ] },
        { title: 'Biterapia de inicio', tag: 'PA ≥ 140/90', kind: 'pharma', items: [
          { t: 'IECA o ARA-II + amlodipino', d: 'Amlodipino 5 a 10 mg/día',
            say: 'Si la presión de partida es de ciento cuarenta noventa o más, no se empieza con un fármaco: se parte con biterapia. La combinación típica es un IECA o ARA dos con amlodipino, de cinco a diez miligramos al día.' },
          { t: 'O IECA o ARA-II + tiazida', d: 'Hidroclorotiazida o indapamida',
            say: 'La alternativa es combinar el IECA o ARA dos con un diurético tiazídico, como hidroclorotiazida, o uno similar, como la indapamida.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Llevemos todo a un árbol de decisión, como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Qué se elige y qué error se comete',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Diabético hipertenso con RAC ≥ 30 mg/g', 'IECA o ARA-II', 'Partir con atenolol o tiazida'],
          say: 'Repasemos las trampas. Diabético hipertenso con albuminuria: IECA o ARA dos. El error es partir con atenolol o con una tiazida sola.' },
        { cells: ['Diabético con PA 138/83', 'Tratar: meta < 130/80', 'Esperar a 140/90'],
          say: 'Diabético con una presión de ciento treinta y ocho ochenta y tres: está sobre la meta y se trata. El error es aplicar el corte de ciento cuarenta noventa del no diabético.' },
        { cells: ['PA ≥ 140/90 al inicio', 'Biterapia: IECA o ARA-II + amlodipino', 'Monoterapia y esperar'],
          say: 'Si parte en ciento cuarenta noventa o más, biterapia de entrada, IECA o ARA dos más amlodipino.' },
        { cells: ['Proteinuria que persiste', 'Optimizar un solo bloqueador', 'Sumar IECA + ARA-II'],
          say: 'Si la proteinuria persiste, jamás se suma un ARA dos al IECA: falla renal e hiperkalemia.' },
        { cells: ['Ya usa tiazida y atenolol, con proteinuria', 'Agregar IECA', 'Mantener o cambiar el diurético'],
          say: 'Y si el paciente ya viene con tiazida y atenolol, sigue alto y tiene proteinuria, lo que falta es el IECA. Esa es justamente una de las preguntas reales que vienen.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 56 años con DM2 en tratamiento con metformina 850 mg c/12 h, HbA1c 7,1 %. En sus últimos 3 controles presenta PA promedio de 144/92 mmHg. RAC 160 mg/g (confirmada) y creatinina 1,0 mg/dL.',
      question: '¿Cuál es el antihipertensivo de primera línea?',
      options: [
        { letter: 'A', text: 'Atenolol' },
        { letter: 'B', text: 'Hidroclorotiazida' },
        { letter: 'C', text: 'Enalapril o losartán' },
        { letter: 'D', text: 'Enalapril más losartán' },
        { letter: 'E', text: 'Furosemida' },
      ],
      correct: 'C',
      explanation: 'Diabético hipertenso con albuminuria (RAC 30–299 mg/g): IECA o ARA-II, que dilatan la arteriola eferente, bajan la presión intraglomerular y reducen la proteinuria. Meta < 130/80. Con PA ≥ 140/90 se asocia amlodipino. Nunca IECA + ARA-II.',
      say: {
        stem: 'Vamos con un caso. Hombre de cincuenta y seis años, diabético en tratamiento con metformina, con hemoglobina glicosilada de siete coma uno. En sus tres últimos controles tiene presiones promedio de ciento cuarenta y cuatro noventa y dos. La razón albúmina creatinina es de ciento sesenta, confirmada, y la creatinina es normal.',
        question: '¿Cuál es el antihipertensivo de primera línea?',
        options: 'Las opciones: atenolol, hidroclorotiazida, enalapril o losartán, enalapril más losartán, o furosemida. Piénsalo.',
        answer: 'Es la C. Tiene albuminuria, así que el objetivo no es solo bajar la presión, sino proteger el riñón: IECA o ARA dos, que dilatan la eferente. La D es la trampa más tentadora, porque parece doble protección, pero la combinación está prohibida por falla renal e hiperkalemia. Y como parte sobre ciento cuarenta noventa, lo correcto es asociarle amlodipino, no un segundo bloqueador.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 76',
      stem: 'Un paciente de 46 años, con antecedente de diabetes mellitus tipo 2 en tratamiento con metformina, acude a control, refiere estar asintomático. Al examen físico se encuentra presión arterial de 138/83, sin otros hallazgos. Sus exámenes de control muestran hemoglobina glicosilada en 6.9%, indice proteinuria creatininuria de 0.3, creatinina 0.8 mg/mL.',
      question: 'La conducta más adecuada en este caso es:',
      options: [
        { letter: 'A', text: 'Aumentar dosis de metformina' },
        { letter: 'B', text: 'Iniciar hidroclorotiazida' },
        { letter: 'C', text: 'Iniciar enalapril' },
        { letter: 'D', text: 'Suspender metformina e indicar insulina' },
        { letter: 'E', text: 'Mantener tratamiento actual y reforzar medidas como dieta y ejercicio' },
      ],
      correct: 'C',
      explanation: 'PA sobre la meta del diabético (< 130/80) y proteinuria positiva: se inicia un IECA. La HbA1c de 6,9 % está en meta, así que no hay que tocar la metformina.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil trece. Paciente de cuarenta y seis años, diabético en tratamiento con metformina, asintomático. Tiene una presión de ciento treinta y ocho ochenta y tres. Su hemoglobina glicosilada es seis coma nueve, el índice proteinuria creatininuria es cero coma tres, y la creatinina es normal.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: subir la metformina, iniciar hidroclorotiazida, iniciar enalapril, cambiar a insulina, o mantener el tratamiento con dieta y ejercicio. Piénsalo.',
        answer: 'Es la C, iniciar enalapril. Dos razones: la presión está sobre ciento treinta ochenta, que es la meta del diabético, y hay proteinuria. Con proteinuria, el fármaco es un IECA. La E es la trampa: ciento treinta y ocho parece normal si piensas en el corte del no diabético. La glicemia está en meta, así que la metformina no se toca.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 114',
      stem: 'Un paciente de 62 años, diabético e hipertenso, en tratamiento con metformina 850 mg/8h, hidroclorotiazina 50 mg/día y atenolol 50 mg/día, acude a control. Su presión arterial es 146/100 mmHg, Su examen físico segmentario no aporta mayor información. Trae algunos exámenes, entre los que destacan clearence de creatinina de 48 mililitros por minuto y proteinuria de 500 mg/litro.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Agregar amlodipino' },
        { letter: 'B', text: 'Agregar doxazosina' },
        { letter: 'C', text: 'Agregar enalapril' },
        { letter: 'D', text: 'Mantener las indicaciones' },
        { letter: 'E', text: 'Reemplazar la hidroclorotiazida por furosemida' },
      ],
      correct: 'C',
      explanation: 'Diabético hipertenso, fuera de meta y con proteinuria: le falta el bloqueo del sistema renina-angiotensina. Se agrega un IECA, que además protege el riñón. Ni la tiazida ni el atenolol lo reemplazan.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil dieciocho. Paciente de sesenta y dos años, diabético e hipertenso, en tratamiento con metformina, hidroclorotiazida y atenolol. Su presión es de ciento cuarenta y seis cien. Tiene un clearance de creatinina de cuarenta y ocho y proteinuria.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: agregar amlodipino, agregar doxazosina, agregar enalapril, mantener las indicaciones, o cambiar la tiazida por furosemida. Piénsalo.',
        answer: 'Es la C, agregar enalapril. Está lejos de la meta y tiene proteinuria, y fíjate lo que le falta: ninguno de sus fármacos bloquea la angiotensina. El atenolol no es de primera línea sin indicación cardíaca, y la tiazida no protege el glomérulo. El amlodipino es el distractor tentador porque baja la presión, pero no reemplaza al IECA cuando hay proteinuria.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 144',
      stem: 'Un paciente diabético de larga data en tratamiento con empagliflozina 10 mg al día, metformina 1.000 mg cada 8 horas y atorvastatina 20 mg al día, presenta presiones arteriales de 140/90 mmHg y 158/87 mmHg en dos controles diferentes. El resto de su examen físico es normal y trae exámenes, entre los que destaca hemoglobina glicosilada de 6.9%.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar terapia depletiva de potasio' },
        { letter: 'B', text: 'Iniciar tratamiento antihipertensivo' },
        { letter: 'C', text: 'Solicitar un monitoreo ambulatorio de presión arterial (MAPA)' },
        { letter: 'D', text: 'Iniciar terapia antiagregante plaquetaria' },
        { letter: 'E', text: 'Iniciar insulina' },
      ],
      correct: 'B',
      explanation: 'En el diabético la meta es < 130/80 mmHg; con dos controles claramente sobre ese valor se inicia tratamiento antihipertensivo (IECA o ARA-II de primera línea). La HbA1c está en meta.',
      say: {
        stem: 'La última, del EUNACOM de julio de dos mil veinticuatro. Paciente diabético de larga data, con empagliflozina, metformina y atorvastatina. Tiene presiones de ciento cuarenta noventa y de ciento cincuenta y ocho ochenta y siete en dos controles distintos, y su hemoglobina glicosilada es seis coma nueve.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: terapia depletiva de potasio, iniciar tratamiento antihipertensivo, pedir un monitoreo ambulatorio de presión, antiagregar, o iniciar insulina. Piénsalo.',
        answer: 'Es la B. La meta en el diabético es bajo ciento treinta ochenta, y este paciente está claramente por encima en dos controles. Se trata, y de primera línea con un IECA o ARA dos. El monitoreo ambulatorio es el distractor tentador, porque suena prudente, pero con estas cifras en un diabético no cambia la conducta. Y la glicemia está en meta, así que la insulina no tiene nada que hacer aquí.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Meta', tag: 'Diabético', kind: 'key', items: [
          { t: 'PA < 130/80 mmHg', d: 'Biterapia si parte ≥ 140/90',
            say: 'Cerremos con las reglas de oro. En el diabético, la meta es bajo ciento treinta ochenta, y si parte en ciento cuarenta noventa o más, se inicia biterapia.' },
        ] },
        { title: 'Fármaco', tag: 'Con albuminuria', kind: 'pharma', items: [
          { t: 'RAC ≥ 30: IECA o ARA-II', d: 'Dilatan la arteriola eferente',
            say: 'Con albuminuria, IECA o ARA dos, porque dilatan la eferente y bajan la presión dentro del glomérulo.' },
          { t: 'Betabloqueador: solo si hay cardiopatía', d: 'Infarto o insuficiencia cardíaca',
            say: 'El betabloqueador queda para el que tiene una indicación cardíaca.' },
        ] },
        { title: 'Prohibido', tag: 'ONTARGET', kind: 'alert', items: [
          { t: 'Nunca IECA + ARA-II', d: 'Falla renal aguda e hiperkalemia',
            say: 'Y nunca un IECA con un ARA dos. Si te llevas una sola idea de hoy: en el diabético hipertenso, la presión se baja por el corazón, pero el fármaco se elige por el glomérulo. En la próxima clase entramos al bloque de insulinoterapia. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Hipertensión en el diabético',
    root: N('start', 'Diabético con PA ≥ 130/80', 'Medir RAC y estimar VFG',
      'Paciente diabético con presión de ciento treinta ochenta o más. Antes de elegir el fármaco, se mide la razón albúmina creatinina en orina y se estima la filtración glomerular.',
      ['', N('q', '¿Albuminuria?', 'RAC ≥ 30 mg/g o daño renal',
        '¿Tiene una RAC de treinta o más, o enfermedad renal? Esa respuesta define el fármaco de primera línea.',
        ['SÍ', N('alert', 'IECA o ARA-II obligatorio', 'Enalapril o losartán',
          'Con albuminuria, IECA o ARA dos obligatorio, por su efecto sobre la arteriola eferente. Nunca los dos juntos.',
          ['', N('q', '¿PA ≥ 140/90?', 'Presión de partida',
            'Luego se mira cuánto hay que bajar. ¿La presión de partida es de ciento cuarenta noventa o más?',
            ['SÍ', N('do', 'Biterapia', '+ amlodipino o tiazida',
              'Si parte alto, biterapia de entrada: se suma amlodipino o una tiazida, hasta llegar bajo ciento treinta ochenta.')],
            ['NO', N('ok', 'Monoterapia y titular', 'Meta < 130/80',
              'Si no, se parte con el bloqueador solo y se titula hasta la meta, de forma gradual.')])])],
        ['NO', N('do', 'Cualquier primera línea', 'IECA, ARA-II, amlodipino o tiazida',
          'Sin albuminuria, sirve cualquiera de las cuatro familias de primera línea, con la misma meta bajo ciento treinta ochenta.')])]),
  },
};
