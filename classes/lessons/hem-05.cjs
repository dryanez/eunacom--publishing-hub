// Clase 8.5 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_hematologia.cjs (hem-05).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'hem-05',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Una médula que se vacía, un bazo que no crece y un fármaco que hay que suspender',
      say: 'Bienvenidos. En la clase anterior vimos anemias en las que a la médula le faltaba hierro o eritropoyetina. Hoy vemos algo más grave: una médula que se vacía. Es la aplasia medular, y el examen la evalúa con tres ideas: la pancitopenia, un examen físico sin bazo ni ganglios, y un fármaco mielotóxico que tienes que suspender de inmediato.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: '¿Por qué se vacía la médula?',
      nodes: [
        { id: 'lt', col: 0, row: 1, k: 'cause', t: 'Linfocitos T CD8+ activados', s: 'Autoinmune idiopática, > 75 %' },
        { id: 'cit', col: 1, row: 1, k: 'mech', t: 'Interferón gamma y TNF', s: 'Atacan a la célula madre' },
        { id: 'cd34', col: 2, row: 1, k: 'mech', t: 'Apoptosis de la célula madre', s: 'Progenitores CD34+' },
        { id: 'gra', col: 3, row: 0, k: 'effect', t: 'Médula reemplazada por grasa', s: 'Celularidad < 25 %' },
        { id: 'pan', col: 3, row: 2, k: 'risk', t: 'Pancitopenia', s: 'Caen las tres series' },
        { id: 'sec', col: 1, row: 3, k: 'cause', t: 'Causas secundarias', s: 'Fármacos, tóxicos, virus' },
      ],
      edges: [
        { from: 'lt', to: 'cit' }, { from: 'cit', to: 'cd34' },
        { from: 'cd34', to: 'gra' }, { from: 'cd34', to: 'pan' },
        { from: 'sec', to: 'cd34', label: 'también dañan' },
      ],
      steps: [
        { show: ['lt'], note: 'La causa más frecuente es autoinmune e idiopática',
          say: 'Partamos por el mecanismo. En más del setenta y cinco por ciento de los casos, la aplasia medular es autoinmune e idiopática. Los protagonistas son linfocitos T citotóxicos, los CD ocho, que se activan contra un blanco equivocado.' },
        { show: ['cit', 'cd34'], note: 'El blanco es la célula madre pluripotencial',
          say: 'Ese blanco es la célula madre hematopoyética, la CD treinta y cuatro. Los linfocitos liberan interferón gamma y factor de necrosis tumoral, y la célula madre entra en apoptosis. Fíjate que el daño está en la raíz: no falla una serie, falla la célula de la que salen todas.' },
        { show: ['gra'], note: 'El espacio vacío se llena de adipocitos',
          say: 'Sin células madre, la médula queda vacía, y ese espacio lo ocupa la grasa. La biopsia muestra una celularidad bajo el veinticinco por ciento, reemplazada por adipocitos maduros. Por eso se habla de médula vacía.' },
        { show: ['pan'], note: 'Anemia, neutropenia y trombocitopenia a la vez',
          say: 'Y como la falla es en la raíz, caen las tres series al mismo tiempo: glóbulos rojos, neutrófilos y plaquetas. Eso es la pancitopenia, y es la puerta de entrada de toda la clase.' },
        { show: ['sec'], note: 'Idiopática es lo más frecuente; fármacos es lo que más se pregunta',
          say: 'Hay también causas secundarias, que llegan al mismo punto dañando la médula: fármacos, tóxicos y virus. Ojo con la diferencia: la causa más frecuente es la idiopática, pero la que más se pregunta en el examen es el fármaco, porque es la que tú puedes suspender.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Etiología',
      title: 'Las causas secundarias que tienes que buscar',
      cards: [
        { title: 'Fármacos mielotóxicos', tag: 'Se preguntan siempre', kind: 'pharma', items: [
          { t: 'Cloranfenicol', d: 'El clásico del examen',
            say: 'En la anamnesis de toda pancitopenia hay que preguntar por fármacos. El clásico es el cloranfenicol, el antibiótico que aparece una y otra vez como causa de aplasia.' },
          { t: 'Antitiroideos: tiamazol y propiltiouracilo', d: 'Mujer joven con Graves',
            say: 'Luego los antitiroideos, tiamazol y propiltiouracilo. Piensa en la mujer joven con enfermedad de Graves que, semanas después de iniciar el tratamiento, llega con fiebre y úlceras en la boca.' },
          { t: 'Carbamazepina, fenitoína, sulfas, oro', d: 'Y los quimioterápicos citostáticos',
            say: 'Y completan la lista la carbamazepina, la fenitoína, las sulfonamidas, las sales de oro y, por supuesto, los quimioterápicos, que dañan la médula de forma dependiente de la dosis.' },
        ] },
        { title: 'Tóxicos y virus', tag: 'Anamnesis ocupacional', kind: 'alert', items: [
          { t: 'Benceno, organofosforados, radiación', d: 'Exposición laboral o ambiental',
            say: 'Fuera de los fármacos, pregunta por la exposición laboral o ambiental: el benceno, los pesticidas organofosforados y las radiaciones ionizantes.' },
          { t: 'Hepatitis no A no B no C, Epstein-Barr', d: 'Parvovirus B19: crisis aplásica pura',
            say: 'Y por los virus. La aplasia que aparece después de una hepatitis que no es A, ni B, ni C; el virus de Epstein-Barr; y el parvovirus B diecinueve, que típicamente produce una crisis aplásica pura de la serie roja.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Clínica',
      title: 'Tres series caídas, tres síndromes',
      nodes: [
        { id: 'pan', col: 0, row: 1, k: 'start', t: 'Pancitopenia', s: 'Médula vacía' },
        { id: 'gr', col: 1, row: 0, k: 'effect', t: 'Síndrome anémico', s: 'Insidioso: astenia, palidez' },
        { id: 'neu', col: 1, row: 1, k: 'risk', t: 'Infecciones graves', s: 'Bacterianas y fúngicas' },
        { id: 'pla', col: 1, row: 2, k: 'risk', t: 'Síndrome purpúrico', s: 'Petequias, epistaxis, gingivorragia' },
        { id: 'exf', col: 3, row: 1, k: 'good', t: 'Sin esplenomegalia', s: 'Ni hepatomegalia ni adenopatías' },
      ],
      edges: [
        { from: 'pan', to: 'gr', label: 'glóbulos rojos' },
        { from: 'pan', to: 'neu', label: 'neutrófilos' },
        { from: 'pan', to: 'pla', label: 'plaquetas' },
        { from: 'neu', to: 'exf', label: 'al examen' },
      ],
      steps: [
        { show: ['pan'], note: 'La clínica es la consecuencia directa de cada serie',
          say: 'Veamos cómo llega el paciente. No necesitas memorizar síntomas: cada serie que cae da su propio síndrome.' },
        { show: ['gr'], note: 'Los glóbulos rojos viven 120 días: la anemia es lenta',
          say: 'La falta de glóbulos rojos da un síndrome anémico insidioso, con astenia y palidez. Es lento porque el glóbulo rojo vive cuatro meses, y la anemia se instala de a poco.' },
        { show: ['neu'], note: 'La neutropenia es lo que mata',
          say: 'La falta de neutrófilos da infecciones bacterianas, e incluso fúngicas oportunistas, que pueden ser graves. Es la complicación que más mata en la aplasia, y la que vuelve urgente el cuadro.' },
        { show: ['pla'], note: 'Sangrado mucocutáneo con plaquetas < 20.000',
          say: 'Y la falta de plaquetas da un síndrome purpúrico: petequias, equimosis, gingivorragia y epistaxis, sobre todo cuando las plaquetas bajan de veinte mil.' },
        { show: ['exf'], note: 'El dato semiológico que más se pregunta',
          say: 'Y ahora el dato que más se pregunta. En la aplasia, el examen físico es negativo: no hay esplenomegalia, ni hepatomegalia, ni adenopatías. Tiene lógica: la médula está vacía, no hay nada que infiltre ni prolifere. Si palpas el bazo, ya no estás frente a una aplasia primaria.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'La diferencia que más se pregunta',
      title: 'Pancitopenia: ¿se palpa el bazo?',
      nodes: [
        { id: 'pan', col: 0, row: 1, k: 'start', t: 'Pancitopenia confirmada', s: 'Frotis, descartar seudotrombocitopenia' },
        { id: 'bz', col: 1, row: 1, k: 'q', t: '¿Esplenomegalia o adenopatías?', s: 'El discriminador semiológico' },
        { id: 'apl', col: 2, row: 0, k: 'good', t: 'Sospecha de aplasia', s: 'Médula vacía' },
        { id: 'sus', col: 3, row: 0, k: 'alert', t: 'Suspender el fármaco', s: 'Y derivar a biopsia' },
        { id: 'inf', col: 2, row: 2, k: 'risk', t: 'Destrucción o infiltración', s: 'Otra enfermedad' },
        { id: 'cau', col: 3, row: 2, k: 'refer', t: 'Cirrosis, leucemia, mielofibrosis', s: 'También linfoma' },
      ],
      edges: [
        { from: 'pan', to: 'bz' },
        { from: 'bz', to: 'apl', label: 'no' }, { from: 'apl', to: 'sus' },
        { from: 'bz', to: 'inf', label: 'sí' }, { from: 'inf', to: 'cau' },
      ],
      steps: [
        { show: ['pan'], note: 'Primero, que la pancitopenia sea real',
          say: 'Ordenemos el enfrentamiento. Primero confirma que la pancitopenia es real, mirando el frotis y descartando la seudotrombocitopenia por el anticoagulante EDTA, que agrupa las plaquetas y las hace parecer bajas.' },
        { show: ['bz'], note: 'Una sola pregunta separa los dos caminos',
          say: 'Después, una sola pregunta al examen físico: ¿se palpa el bazo, o hay adenopatías?' },
        { show: ['apl', 'sus'], note: 'Sin bazo: médula vacía',
          say: 'Si no hay organomegalia, la sospecha es aplasia medular. La conducta inmediata es suspender cualquier fármaco mielotóxico, y derivar para la biopsia de médula ósea.' },
        { show: ['inf'], note: 'Con bazo: se destruye o se infiltra',
          say: 'Si hay esplenomegalia, la pancitopenia se explica de otra forma: las células se destruyen en un bazo grande, o la médula está infiltrada.' },
        { show: ['cau'], note: 'Ninguna de estas es aplasia primaria',
          say: 'Piensa en cirrosis con hipertensión portal e hiperesplenismo, en leucemia, en mielofibrosis o en linfoma. El bazo te saca de la aplasia, y esa distinción es la que el examen pone en el caso clínico.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'La biopsia confirma, Camitta gradúa',
      cards: [
        { title: 'Confirmación', tag: 'Biopsia de médula ósea', kind: 'key', items: [
          { t: 'Mielograma + biopsia de cresta ilíaca', d: 'El diagnóstico exige histología',
            say: 'El diagnóstico se confirma con mielograma y biopsia de médula ósea, habitualmente de la cresta ilíaca. El hemograma te hace sospechar; la biopsia confirma.' },
          { t: 'Celularidad < 25 %, reemplazo graso', d: 'Sin blastos, sin fibrosis, sin tumor',
            say: 'Lo que tiene que mostrar es una celularidad bajo el veinticinco por ciento, reemplazada por grasa, y sin células neoplásicas, sin blastos y sin aumento de reticulina. Esos tres ausentes son los que la separan de la leucemia y de la mielofibrosis.' },
        ] },
        { title: 'Aplasia grave: Camitta', tag: 'Al menos 2 de 3', kind: 'criteria', items: [
          { t: 'Neutrófilos < 500/µL', d: 'Riesgo infeccioso alto',
            say: 'Una vez confirmada, se gradúa con los criterios de Camitta. La aplasia es grave si cumple al menos dos de tres. El primero: neutrófilos bajo quinientos.' },
          { t: 'Plaquetas < 20.000/µL', d: 'Riesgo de sangrado',
            say: 'El segundo: plaquetas bajo veinte mil.' },
          { t: 'Reticulocitos < 20.000/µL o < 1 %', d: 'Médula que no regenera',
            say: 'Y el tercero: reticulocitos absolutos bajo veinte mil, o bajo el uno por ciento. Conecta con la primera clase del bloque: es la anemia arregenerativa por excelencia.' },
        ] },
        { title: 'Muy grave', tag: 'La cifra extrema', kind: 'alert', items: [
          { t: 'Neutrófilos < 200/µL', d: 'Aplasia muy grave',
            say: 'Y si los neutrófilos bajan de doscientos, se clasifica como aplasia muy grave.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Qué haces tú y qué hace el hematólogo',
      cards: [
        { title: 'Manejo inicial', tag: 'Lo que se pregunta al médico general', kind: 'alert', items: [
          { t: 'Suspender todo fármaco mielotóxico', d: 'Primera medida, de inmediato',
            say: 'Vamos al tratamiento, separando lo que haces tú de lo que hace el especialista. Tu primera medida es suspender de inmediato cualquier fármaco potencialmente mielotóxico.' },
          { t: 'Prevenir infecciones', d: 'Aislamiento protector, nada intramuscular',
            say: 'Después, prevenir las infecciones con aislamiento protector. Y un detalle que se pregunta: nada de inyecciones intramusculares, porque con las plaquetas bajas producen hematomas profundos.' },
          { t: 'Transfusión restrictiva', d: 'Productos desleucocitados e irradiados',
            say: 'El soporte transfusional es restrictivo, con glóbulos rojos y plaquetas desleucocitados e irradiados. ¿Por qué? Para no sensibilizar al paciente contra antígenos HLA, porque puede ser candidato a trasplante.' },
          { t: 'Derivación inmediata', d: 'A centro de hematología terciario',
            say: 'Y derivación inmediata a un centro de hematología. La aplasia no se maneja en atención primaria.' },
        ] },
        { title: 'Tratamiento definitivo', tag: 'Especialista', kind: 'pharma', items: [
          { t: 'Joven < 40–50 con hermano HLA idéntico', d: 'Trasplante alogénico de progenitores',
            say: 'El tratamiento curativo de elección, en el paciente joven, menor de cuarenta a cincuenta años, con un hermano HLA idéntico, es el trasplante alogénico de progenitores hematopoyéticos.' },
          { t: 'Mayor o sin donante', d: 'Globulina antitimocito + ciclosporina + eltrombopag',
            say: 'En el paciente mayor, o sin donante familiar, se usa inmunosupresión intensa: globulina antitimocito más ciclosporina, y eltrombopag, un agonista del receptor de trombopoyetina. Tiene lógica: si la causa es un ataque de linfocitos T, se apaga ese ataque.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol de decisión, partiendo del hemograma con pancitopenia.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Pancitopenia: cinco causas, cinco claves',
      head: ['Patología', 'Médula ósea', 'Bazo', 'Clave diagnóstica'],
      rows: [
        { cells: ['Aplasia medular', 'Hipocelular < 25 %, grasa', 'No', 'Médula vacía sin organomegalia ni blastos'],
          say: 'Repasemos el diagnóstico diferencial de la pancitopenia. Aplasia medular: médula vacía, llena de grasa, sin bazo y sin blastos.' },
        { cells: ['Leucemia aguda', 'Hipercelular, > 20 % blastos', 'Frecuente, sobre todo LLA', 'Blastos en el frotis; bastones de Auer en LMA'],
          say: 'Leucemia aguda: la médula está llena, pero de blastos, más del veinte por ciento. El bazo suele estar grande, sobre todo en la leucemia linfoblástica, y el frotis muestra blastos. Los bastones de Auer apuntan a la mieloide.' },
        { cells: ['Síndrome mielodisplásico', 'Normo o hipercelular, displasia', 'Rara', 'Displasia multilínea en adulto mayor'],
          say: 'Síndrome mielodisplásico: médula normal o llena, pero con células displásicas, como los neutrófilos hipogranulares o de tipo Pelger. Piensa en el adulto mayor.' },
        { cells: ['Mielofibrosis primaria', 'Fibrosis, punción seca', 'Masiva', 'Dacriocitos + leucoeritroblastosis'],
          say: 'Mielofibrosis primaria: la punción sale seca por la fibrosis, el bazo es gigante y el frotis muestra dacriocitos, los glóbulos rojos en forma de lágrima.' },
        { cells: ['Cirrosis con hiperesplenismo', 'Normal o reactiva', 'Sí, hipertensión portal', 'Estigmas de daño hepático crónico'],
          say: 'Y cirrosis con hiperesplenismo: la médula es normal, el problema es el bazo grande por la hipertensión portal, con estigmas de daño hepático. La trampa del tema es llamar aplasia a una pancitopenia con bazo palpable.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 32 años con enfermedad de Graves en tratamiento con tiamazol 20 mg/día desde hace 5 semanas. Consulta en urgencias por fiebre de 38,8 °C, odinofagia con úlceras orales necróticas y petequias en extremidades inferiores. Sin esplenomegalia ni adenopatías. Hb 7,8 g/dL, leucocitos 900/µL, RAN 120/µL, plaquetas 14.000/µL, reticulocitos 0,2 %.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Reducir el tiamazol a 10 mg/día y controlar el hemograma en una semana' },
        { letter: 'B', text: 'Cambiar tiamazol por propiltiouracilo y dar antibiótico oral ambulatorio' },
        { letter: 'C', text: 'Suspender el tiamazol, hospitalizar en aislamiento, antibióticos EV de amplio espectro y derivar a hematología' },
        { letter: 'D', text: 'Indicar ácido fólico y hierro oral y controlar en un mes' },
        { letter: 'E', text: 'Iniciar prednisona 1 mg/kg por sospecha de PTI' },
      ],
      correct: 'C',
      explanation: 'Pancitopenia grave (RAN < 200, plaquetas < 20.000, reticulocitos < 1 %) sin organomegalia en usuaria de tiamazol: aplasia medular medicamentosa con neutropenia febril de alto riesgo. Se suspende el tiamazol, se hospitaliza en aislamiento protector con antibiótico EV empírico (ceftazidima o piperacilina/tazobactam), se transfunden plaquetas si sangra y se deriva con urgencia a hematología para biopsia medular.',
      say: {
        stem: 'Vamos con un caso. Mujer de treinta y dos años con enfermedad de Graves, en tratamiento con tiamazol desde hace cinco semanas. Llega a urgencias con fiebre de treinta y ocho coma ocho, odinofagia con úlceras orales necróticas y petequias en las piernas. No hay bazo ni ganglios. Hemoglobina siete coma ocho, novecientos leucocitos con ciento veinte neutrófilos, catorce mil plaquetas y reticulocitos de cero coma dos por ciento.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: bajar la dosis de tiamazol, cambiarlo por propiltiouracilo con antibiótico oral, suspender el tiamazol y hospitalizar con antibióticos endovenosos y derivación, dar ácido fólico y hierro, o iniciar prednisona por un PTI. Piénsalo.',
        answer: 'Es la C. Es una aplasia medicamentosa por tiamazol, y además muy grave, con neutrófilos bajo doscientos, y con fiebre. Se suspende el fármaco, se hospitaliza en aislamiento, se inicia antibiótico endovenoso de amplio espectro, como ceftazidima o piperacilina con tazobactam, y se deriva a hematología. El distractor tentador es cambiar a propiltiouracilo, pero también es mielotóxico, y esta paciente no puede ir a su casa con antibiótico oral.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'El mejor tratamiento en la aplasia medular idiopática es:',
      question: 'Seleccione la alternativa correcta.',
      options: [
        { letter: 'A', text: 'Trasplante de médula ósea' },
        { letter: 'B', text: 'Quimioterapia combinada' },
        { letter: 'C', text: 'Radioterapia' },
        { letter: 'D', text: 'Cloranfenicol' },
        { letter: 'E', text: 'No tiene tratamiento' },
      ],
      correct: 'A',
      explanation: 'El trasplante alogénico de médula ósea, idealmente de un hermano HLA idéntico, es el tratamiento curativo de elección, sobre todo en jóvenes. Si no hay donante o el paciente es mayor, se usa inmunosupresión con globulina antitimocito y ciclosporina. La quimioterapia y la radioterapia dañan más la médula, y el cloranfenicol es una causa de aplasia.',
      say: {
        stem: 'Ahora una pregunta representativa del banco EUNACOM, directa y sin caso clínico. El mejor tratamiento en la aplasia medular idiopática es...',
        question: '¿Cuál eliges?',
        options: 'Las opciones: trasplante de médula ósea, quimioterapia combinada, radioterapia, cloranfenicol, o no tiene tratamiento. Piénsalo.',
        answer: 'Es la A, el trasplante de médula ósea. Es el único tratamiento curativo, porque reemplaza la célula madre que se perdió, idealmente desde un hermano HLA idéntico. La quimioterapia y la radioterapia vaciarían todavía más la médula, y el cloranfenicol es justamente una de sus causas. Y cuidado con la E: la aplasia sí tiene tratamiento; si no hay donante, está la inmunosupresión con globulina antitimocito y ciclosporina.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Sospecha', tag: 'Pancitopenia sin bazo', kind: 'key', items: [
          { t: 'Pancitopenia sin organomegalia', d: 'Aplasia hasta demostrar lo contrario',
            say: 'Cerremos con las reglas de oro. Pancitopenia sin esplenomegalia ni adenopatías: piensa en aplasia medular.' },
          { t: 'Bazo palpable: no es aplasia', d: 'Cirrosis, leucemia, mielofibrosis',
            say: 'Si el bazo se palpa, la respuesta es otra: hiperesplenismo por cirrosis, leucemia o mielofibrosis.' },
        ] },
        { title: 'Diagnóstico y gravedad', tag: 'Biopsia y Camitta', kind: 'criteria', items: [
          { t: 'Biopsia: celularidad < 25 %', d: 'Grasa, sin blastos ni fibrosis',
            say: 'La biopsia de médula ósea confirma, con una celularidad bajo el veinticinco por ciento y reemplazo graso.' },
          { t: 'Grave: 2 de 3 criterios', d: 'Neutrófilos < 500, plaquetas < 20.000, reticulocitos < 20.000',
            say: 'Es grave con dos de tres: neutrófilos bajo quinientos, plaquetas bajo veinte mil, reticulocitos bajo veinte mil.' },
        ] },
        { title: 'Conducta', tag: 'Lo tuyo y lo del especialista', kind: 'alert', items: [
          { t: 'Suspender el mielotóxico y derivar', d: 'Cloranfenicol, tiamazol, carbamazepina',
            say: 'Tu conducta: suspender el fármaco mielotóxico, aislar, transfundir productos irradiados y derivar. El trasplante es la cura en el joven con donante.' },
          { t: 'Próxima clase: anemia megaloblástica', d: 'La otra pancitopenia',
            say: 'En la próxima clase vemos otra causa de pancitopenia, pero con glóbulos rojos gigantes y compromiso neurológico: el déficit de vitamina B doce. Si te llevas una sola idea de hoy: pancitopenia sin bazo es aplasia, y lo primero es suspender el fármaco. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Pancitopenia en el adulto: sospecha de aplasia medular',
    root: N('start', 'Pancitopenia', 'Anemia + neutropenia + trombocitopenia',
      'Tienes un hemograma con las tres series bajas. Antes de nada, confirma en el frotis que la pancitopenia es real y descarta la seudotrombocitopenia por EDTA.',
      ['', N('q', '¿Esplenomegalia o adenopatías?', 'Examen físico',
        'La primera pregunta se responde con las manos: ¿se palpa el bazo, o hay adenopatías?',
        ['Sí', N('refer', 'Hiperesplenismo o infiltración', 'Cirrosis, leucemia, mielofibrosis, linfoma',
          'Si hay organomegalia, no es una aplasia primaria. Busca cirrosis con hipertensión portal, leucemia, mielofibrosis o linfoma.')],
        ['No', N('alert', 'Sospecha de aplasia', 'Suspender todo mielotóxico',
          'Sin organomegalia, la sospecha es aplasia medular. Lo primero es suspender cualquier fármaco mielotóxico: cloranfenicol, antitiroideos, carbamazepina.',
          ['', N('q', '¿Fiebre con neutropenia?', 'Neutropenia febril',
            'Luego pregunta si hay fiebre. Con los neutrófilos en el suelo, la fiebre es una urgencia.',
            ['Sí', N('alert', 'Hospitalizar y antibiótico EV', 'Aislamiento protector',
              'Si hay fiebre, se hospitaliza en aislamiento protector y se inicia de inmediato antibiótico endovenoso de amplio espectro.')],
            ['No', N('do', 'Soporte y derivación', 'Transfusión irradiada, nada intramuscular',
              'Sin fiebre, o una vez tratada la infección, se da soporte: transfusión restrictiva con productos desleucocitados e irradiados, sin inyecciones intramusculares, y derivación inmediata a hematología.',
              ['Hematología', N('ok', 'Biopsia: celularidad < 25 %', 'Joven con donante: trasplante',
                'El hematólogo confirma con la biopsia, celularidad bajo el veinticinco por ciento. En el joven con hermano HLA idéntico, trasplante alogénico; si es mayor o sin donante, globulina antitimocito, ciclosporina y eltrombopag.')])])])])]),
  },
};
