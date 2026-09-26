// Clase 19.2 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_obstetricia_bloque_1.cjs (ob-02).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

const pwTrisom = N('do', 'Estudio invasivo', 'Biopsia de vellosidad corial u amniocentesis',
  'Con un riesgo alto en la primera ecografía, ya no basta con seguir mirando: pides un estudio invasivo. Entre las once y las catorce semanas, biopsia de vellosidad corial; desde las quince o dieciséis, amniocentesis.');

const pwAspirina = N('do', 'Aspirina 150 mg en la noche', 'Antes de la semana 16',
  'Con el Doppler de uterinas alterado, indicas aspirina, ciento cincuenta miligramos, tomada en la noche, y la partida antes de la semana dieciséis es lo que hace la diferencia.');

const pwMarcador = N('q', '¿Qué marcador salió alterado?', 'Translucencia nucal o Doppler de uterinas',
  'En esta ecografía hay dos marcadores distintos, y cada uno te manda por un camino distinto: ¿cuál de los dos salió alterado?',
  ['Translucencia nucal aumentada', pwTrisom],
  ['Doppler de arterias uterinas alterado', pwAspirina]);

const pwEco1 = N('do', 'Ecografía de 11 a 14 semanas', 'Translucencia nucal y Doppler de uterinas',
  'Si tu paciente está entre las once y las catorce semanas, la ecografía busca dos cosas a la vez: la translucencia nucal, y el Doppler de las arterias uterinas.',
  ['', pwMarcador]);

const pwProgesterona = N('alert', 'Progesterona vaginal', '200 mg cada noche hasta la semana 36',
  'Con un cuello menor a veinticinco milímetros, indicas progesterona natural micronizada, doscientos miligramos cada noche, hasta la semana treinta y seis.');

const pwCuelloOk = N('ok', 'No necesita progesterona', 'Cuello normal, sigue su control',
  'Si el cuello mide veinticinco milímetros o más, sigue con su control habitual, sin progesterona.');

const pwCuello = N('q', '¿El cuello mide menos de 25 mm?', 'Cervicometría transvaginal',
  'Y aquí la pregunta es sobre el cuello: ¿mide menos de veinticinco milímetros?',
  ['Sí', pwProgesterona],
  ['No', pwCuelloOk]);

const pwEco2 = N('do', 'Ecografía de 20 a 24 semanas', 'Morfológica y cervicometría',
  'Si en cambio está entre las veinte y las veinticuatro semanas, la ecografía revisa la anatomía completa del feto, y además mide el cuello por vía transvaginal.',
  ['', pwCuello]);

const pwRoot = N('start', '¿En qué ecografía universal estás?', 'Cada una busca algo distinto',
  'Tu paciente llega a una de las dos ecografías universales del embarazo. Lo primero es saber en cuál está, porque cada una busca algo completamente distinto.',
  ['Semana 11 a 14', pwEco1],
  ['Semana 20 a 24', pwEco2]);

module.exports = {
  id: 'ob-02',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Dos ecografías universales, dos riesgos distintos, dos tratamientos que se te pueden olvidar',
      say: 'Bienvenido de vuelta. Hoy revisamos las dos ecografías que se le hacen a toda embarazada: la de las once a catorce semanas, y la de las veinte a veinticuatro. La primera te habla de aneuploidías y de preeclampsia; la segunda, de malformaciones y de parto prematuro. Y en las dos hay un hallazgo que, si lo pescas a tiempo, cambia el tratamiento. Vamos a eso.',
    },

    {
      type: 'flow',
      kicker: 'Ecografía de 11 a 14 semanas',
      title: 'Un examen, dos marcadores distintos',
      nodes: [
        { id: 'lcn', col: 0, row: 1, k: 'start', t: 'LCN entre 45 y 84 mm', s: 'Ventana de la primera ecografía' },
        { id: 'tn', col: 1, row: 0, k: 'mech', t: 'Translucencia nucal', s: 'Espacio entre piel y tejido retrocervical' },
        { id: 'tris', col: 2, row: 0, k: 'risk', t: 'Riesgo de trisomías', s: '≥ 3 mm, o sin hueso nasal' },
        { id: 'dop', col: 1, row: 2, k: 'mech', t: 'Doppler de arterias uterinas', s: 'Evalúa la invasión trofoblástica' },
        { id: 'pre', col: 2, row: 2, k: 'risk', t: 'Riesgo de preeclampsia precoz', s: 'Índice de pulsatilidad sobre percentil 95' },
      ],
      edges: [
        { from: 'lcn', to: 'tn' },
        { from: 'lcn', to: 'dop' },
        { from: 'tn', to: 'tris' },
        { from: 'dop', to: 'pre' },
      ],
      steps: [
        { show: ['lcn'], note: 'Se hace con LCN entre 45 y 84 mm',
          say: 'Empecemos por la primera ecografía, entre las once y las trece semanas más seis días. Se hace con una longitud céfalo-nalgas entre cuarenta y cinco y ochenta y cuatro milímetros, y en el mismo examen te está evaluando dos cosas completamente distintas.' },
        { show: ['tn'], note: 'Fíjate: es del feto',
          say: 'La primera es del feto: la translucencia nucal, ese espacio entre la piel y el tejido blando por detrás del cuello.' },
        { show: ['tris'], note: 'Ojo con el hueso nasal también',
          say: 'Si mide tres milímetros o más, o si no ves el hueso nasal, sube el riesgo de trisomía veintiuno, dieciocho y trece, y también de cardiopatías.' },
        { show: ['dop'], note: 'La segunda es de la madre',
          say: 'La segunda medición ya no es del feto: es de la madre. El Doppler de las arterias uterinas te dice cómo va la invasión de las arterias espirales por la placenta.' },
        { show: ['pre'], note: 'Ojo: esta alteración predice preeclampsia, no trisomía',
          say: 'Si el índice de pulsatilidad está sobre el percentil noventa y cinco, tienes alto riesgo de preeclampsia precoz y de restricción de crecimiento. Y esa es justamente la diferencia que se pregunta: la translucencia te habla del feto, el Doppler de uterinas te habla de la placenta.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Lo que haces con cada hallazgo',
      title: 'Un marcador, una conducta',
      cards: [
        { title: 'Translucencia nucal alterada', tag: 'Estudio genético', kind: 'alert', items: [
          { t: 'Riesgo alto', d: 'Biopsia de vellosidad corial o amniocentesis',
            say: 'Si la translucencia sale alterada, y el riesgo calculado es alto, más de uno en cien, vas directo al estudio invasivo: biopsia de vellosidad corial si tienes entre once y catorce semanas, o amniocentesis desde las quince o dieciséis. Si el riesgo es intermedio, entre uno en cien y uno en mil, primero pruebas con el ADN fetal libre en sangre materna, y dejas el examen invasivo para confirmar.' },
        ] },
        { title: 'Doppler de uterinas alterado', tag: 'Fármaco de elección', kind: 'pharma', items: [
          { t: 'Aspirina 150 mg en la noche', d: 'Iniciada antes de la semana 16',
            say: 'Si en cambio lo que sale alterado es el Doppler de uterinas, la conducta es dar aspirina, ciento cincuenta miligramos, tomados en la noche.' },
          { t: 'El momento lo es todo', d: 'Después de la semana 16 pierde efecto',
            say: 'Y aquí está el dato que más se pregunta: tiene que partir antes de la semana dieciséis. Iniciada después, la aspirina ya no te reduce la preeclampsia precoz de la misma forma.' },
        ] },
        { title: 'Ecografía de 20 a 24 semanas', tag: 'Dos objetivos', kind: 'key', items: [
          { t: 'Anatomía fetal completa', d: 'Cabeza, corazón, pared, riñones',
            say: 'Y en la segunda ecografía, entre las veinte y las veinticuatro semanas, revisas la anatomía fetal completa, buscando malformaciones: la cabeza y el cerebro, la cara, el corazón con sus cuatro cámaras, la pared abdominal, los riñones y las extremidades. También miras la placenta, para descartar que esté previa, y el volumen del líquido amniótico.' },
          { t: 'Cervicometría transvaginal', d: 'Siempre con la vejiga vacía',
            say: 'En el mismo examen mides el cuello por vía transvaginal, con la vejiga vacía. Y ese dato conecta con lo que viene ahora.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Cuello corto',
      title: 'La cervicometría decide el tratamiento',
      nodes: [
        { id: 'cer', col: 0, row: 1, k: 'start', t: 'Cervicometría a las 20-24 semanas', s: 'Vía transvaginal' },
        { id: 'cor', col: 1, row: 1, k: 'q', t: '¿Menos de 25 mm?', s: 'Cuello corto' },
        { id: 'pro', col: 2, row: 0, k: 'good', t: 'Progesterona vaginal', s: '200 mg cada noche' },
        { id: 'has', col: 3, row: 0, k: 'good', t: 'Hasta la semana 36', s: 'No se suspende antes' },
        { id: 'nor', col: 2, row: 2, k: 'effect', t: 'Cuello normal', s: 'Control habitual, sin fármaco' },
      ],
      edges: [
        { from: 'cer', to: 'cor' },
        { from: 'cor', to: 'pro', label: 'sí' },
        { from: 'pro', to: 'has' },
        { from: 'cor', to: 'nor', label: 'no' },
      ],
      steps: [
        { show: ['cer'], note: 'Se mide junto con la ecografía morfológica',
          say: 'Sigamos con el cuello. Ya viste que la cervicometría se toma junto con la ecografía de las veinte a veinticuatro semanas.' },
        { show: ['cor'], note: 'El corte es 25 mm',
          say: 'Y la pregunta que decide todo es si mide menos de veinticinco milímetros.' },
        { show: ['pro'], note: 'Reduce el parto prematuro a la mitad',
          say: 'Si es así, indicas progesterona natural micronizada por vía vaginal, doscientos miligramos cada noche. Reduce en cerca de la mitad el riesgo de un parto antes de las treinta y cuatro semanas.' },
        { show: ['has'], note: 'No confundir con el momento de la aspirina',
          say: 'Y la mantienes hasta la semana treinta y seis. Fíjate que aquí el fármaco se sostiene por meses, al revés que la aspirina, que se suspendía antes, a las treinta y seis semanas también, pero porque ya cumplió su función.' },
        { show: ['nor'], note: 'Sin hallazgo, sin fármaco',
          say: 'Y si el cuello mide veinticinco milímetros o más, sigue con su control habitual: no le das progesterona porque sí.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora ordenemos las dos ecografías y sus tratamientos en un solo árbol.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Qué marcador, qué conducta',
      head: ['Hallazgo', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Translucencia nucal ≥ 3 mm', 'Estudio genético invasivo', 'Repetir la ecografía en unas semanas'],
          say: 'Repasemos las trampas. Translucencia nucal aumentada: vas al estudio genético invasivo. El error es solo repetir la ecografía más adelante.' },
        { cells: ['Doppler de uterinas alterado', 'Aspirina antes de la semana 16', 'Iniciar aspirina después de la semana 20'],
          say: 'Doppler de uterinas alterado: aspirina antes de la semana dieciséis. El error clásico es partir tarde, después de la semana veinte, cuando ya perdió gran parte de su efecto.' },
        { cells: ['Cuello menor a 25 mm, sin antecedentes', 'Progesterona vaginal hasta la semana 36', 'Indicar cerclaje de entrada'],
          say: 'Cuello menor a veinticinco milímetros, sin antecedente de parto prematuro: progesterona vaginal. El cerclaje de entrada es la trampa, porque se reserva para otro escenario.' },
        { cells: ['Translucencia normal, Doppler alterado', 'Riesgo es de preeclampsia, no de trisomía', 'Pedir cariograma fetal'],
          say: 'Y si la translucencia es normal pero el Doppler de uterinas está alterado, el riesgo es de preeclampsia, no de trisomía. Pedir un cariograma aquí es confundir a qué paciente pertenece cada marcador.'},
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Secundigesta de 13 semanas, con antecedente de preeclampsia severa en su primer embarazo, se realiza la ecografía de 11 a 14 semanas: translucencia nucal de 1,8 mm, hueso nasal presente, y Doppler de arterias uterinas con índice de pulsatilidad sobre el percentil 95.',
      question: '¿Cuál es la conducta más adecuada en este control?',
      options: [
        { letter: 'A', text: 'Indicar aspirina 150 mg en la noche' },
        { letter: 'B', text: 'Solicitar biopsia de vellosidad corial' },
        { letter: 'C', text: 'Indicar progesterona vaginal 200 mg cada noche' },
        { letter: 'D', text: 'Solicitar amniocentesis a las 16 semanas' },
        { letter: 'E', text: 'Mantener el control habitual, sin ninguna intervención' },
      ],
      correct: 'A',
      explanation: 'La translucencia nucal y el hueso nasal son normales: no hay indicación de estudio genético. El Doppler de uterinas alterado, sumado al antecedente de preeclampsia previa, define alto riesgo de preeclampsia precoz, y la intervención con mayor evidencia es la aspirina, iniciada antes de la semana 16.',
      say: {
        stem: 'Un caso. Secundigesta de trece semanas, con antecedente de preeclampsia severa en su primer embarazo. En la ecografía de once a catorce semanas, la translucencia nucal sale en uno coma ocho milímetros, con hueso nasal presente, pero el Doppler de arterias uterinas muestra un índice de pulsatilidad sobre el percentil noventa y cinco.',
        question: '¿Cuál es la conducta más adecuada en este control?',
        options: 'Las opciones: indicar aspirina en la noche, pedir biopsia de vellosidad corial, indicar progesterona vaginal, pedir amniocentesis a las dieciséis semanas, o mantener el control sin intervenir. Piénsalo.',
        answer: 'Es la A. Fíjate que la translucencia y el hueso nasal están completamente normales, así que el estudio genético no tiene ningún lugar aquí. Lo que está alterado es el Doppler de uterinas, y con el antecedente de preeclampsia previa, el riesgo de preeclampsia precoz es alto. La conducta con más evidencia es la aspirina, y tiene que partir antes de la semana dieciséis. La progesterona no aplica: eso es para el cuello corto, y aquí no se ha medido.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 133',
      stem: 'Embarazada de 12 semanas, con translucencia nucal aumentada en la ecografía.',
      question: '¿Cuál es el examen definitivo para confirmar una trisomía 21?',
      options: [
        { letter: 'A', text: 'Biopsia de vellosidades coriales (11 a 14 semanas)' },
        { letter: 'B', text: 'Amniocentesis (15 a 20 semanas)' },
        { letter: 'C', text: 'ADN fetal en sangre materna' },
        { letter: 'D', text: 'Fetoscopía' },
        { letter: 'E', text: 'Marcadores séricos maternos (triple marcador)' },
      ],
      correct: 'A',
      explanation: 'A las 12 semanas, la biopsia de vellosidades coriales es el examen invasivo de elección para el cariotipo fetal, dentro de su ventana de las 10 a 14 semanas. La amniocentesis se reserva para después de las 15 semanas.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de julio de dos mil veinticinco. Embarazada de doce semanas, con translucencia nucal aumentada en la ecografía.',
        question: '¿Cuál es el examen definitivo para confirmar una trisomía veintiuno?',
        options: 'Las opciones: biopsia de vellosidades coriales, amniocentesis, ADN fetal en sangre materna, fetoscopía, o marcadores séricos maternos. Piénsalo.',
        answer: 'Es la A. A las doce semanas estás justo en la ventana de la biopsia de vellosidades coriales, que va de las diez a las catorce semanas. La amniocentesis suena parecida, pero recién se hace desde las quince semanas en adelante: a las doce todavía no toca.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 155',
      stem: 'Primigesta de 23 años, cursando un embarazo de 20 semanas, se realiza una ecografía transvaginal que muestra un cuello de 20 mm de longitud, sin otras alteraciones.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Indicar pesario cervical' },
        { letter: 'B', text: 'Iniciar progesterona vaginal' },
        { letter: 'C', text: 'Realizar cerclaje cervical' },
        { letter: 'D', text: 'Administrar corticoides sistémicos' },
        { letter: 'E', text: 'Observar evolución, sin intervenir' },
      ],
      correct: 'B',
      explanation: 'Cuello menor a 25 mm en paciente sin antecedente de parto prematuro ni de incompetencia cervical: la conducta es progesterona vaginal. El cerclaje se reserva para cuando además hay antecedente de aborto tardío o parto muy prematuro previo.',
      say: {
        stem: 'Y otra pregunta real, del EUNACOM de diciembre de dos mil diecinueve. Primigesta de veintitrés años, con un embarazo de veinte semanas, a la que una ecografía transvaginal le muestra un cuello de veinte milímetros de longitud, sin otras alteraciones.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: indicar pesario cervical, iniciar progesterona vaginal, hacer cerclaje, dar corticoides sistémicos, u observar sin intervenir. Piénsalo.',
        answer: 'Es la B. El cuello está bajo veinticinco milímetros, así que algo hay que hacer, y como es primigesta, sin antecedente de parto prematuro ni de incompetencia cervical, la conducta es la progesterona vaginal. El cerclaje sería la respuesta si además tuviera ese antecedente, y no es el caso.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Ecografía 11 a 14 semanas', tag: 'Dos marcadores', kind: 'key', items: [
          { t: 'Translucencia alterada', d: 'Riesgo del feto: estudio genético',
            say: 'Cerremos con las reglas de oro. La translucencia nucal alterada es riesgo del feto, y te lleva al estudio genético.' },
          { t: 'Doppler de uterinas alterado', d: 'Riesgo de la placenta: aspirina antes de la 16',
            say: 'El Doppler de uterinas alterado es riesgo de la placenta, y te lleva a la aspirina, siempre antes de la semana dieciséis.' },
        ] },
        { title: 'Ecografía 20 a 24 semanas', tag: 'El cuello decide', kind: 'pharma', items: [
          { t: 'Cuello menor a 25 mm', d: 'Progesterona vaginal hasta la semana 36',
            say: 'Y en la segunda ecografía, un cuello menor a veinticinco milímetros te lleva a la progesterona vaginal, hasta la semana treinta y seis.' },
        ] },
        { title: 'No los confundas', tag: 'Cada hallazgo, su fármaco', kind: 'alert', items: [
          { t: 'Aspirina es para la placenta', d: 'Progesterona es para el cuello',
            say: 'Si te llevas una sola idea de hoy: la aspirina es para el Doppler de la placenta, y la progesterona es para el cuello corto. No se reemplazan entre sí. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Las dos ecografías universales del embarazo',
    root: pwRoot,
  },
};
