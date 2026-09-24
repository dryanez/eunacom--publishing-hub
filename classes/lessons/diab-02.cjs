// Clase Diabetes 1.2 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_diabetes.cjs (diab-02).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'diab-02',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuatro criterios, una regla de confirmación y qué examen pedir en cada escenario',
      say: 'Bienvenidos. En la clase anterior vimos qué tipo de diabetes tiene el paciente; hoy vamos un paso antes: cómo se diagnostica. Es de los temas más preguntados del examen, y casi todo se juega en números: ciento veintiséis, doscientos, seis coma cinco, cien, ciento cuarenta. Al final vas a saber qué hacer con cada valor: si confirma, si hay que repetir, o si hay que pedir otro examen.',
    },

    {
      type: 'points',
      kicker: 'Criterios diagnósticos',
      title: 'Cuatro formas de hacer el diagnóstico',
      cards: [
        { title: 'En ayunas o con carga', tag: 'Requieren confirmación', kind: 'criteria', items: [
          { t: 'Glicemia de ayuno ≥ 126 mg/dL', d: 'Plasmática venosa, ayuno de 8 horas',
            say: 'En el adulto no embarazado, basta cumplir cualquiera de cuatro criterios. El primero, la glicemia de ayuno igual o mayor a ciento veintiséis, en plasma venoso y con al menos ocho horas de ayuno.' },
          { t: 'PTGO: 2 horas ≥ 200 mg/dL', d: 'Carga de 75 g de glucosa',
            say: 'El segundo, la prueba de tolerancia a la glucosa oral: se dan setenta y cinco gramos de glucosa, y si a las dos horas la glicemia es igual o mayor a doscientos, es diabetes.' },
          { t: 'HbA1c ≥ 6,5 %', d: 'Laboratorio estandarizado',
            say: 'El tercero, la hemoglobina glicosilada igual o mayor a seis coma cinco por ciento, medida en un laboratorio estandarizado.' },
        ] },
        { title: 'Con síntomas', tag: 'Basta una vez', kind: 'alert', items: [
          { t: 'Glicemia al azar ≥ 200 mg/dL', d: 'Más síntomas: las "4 P"',
            say: 'Y el cuarto, una glicemia tomada a cualquier hora, igual o mayor a doscientos, pero con síntomas: las cuatro P, polidipsia, poliuria, polifagia y pérdida de peso. Fíjate en el detalle: doscientos al azar sin síntomas no es este criterio.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'La regla de oro',
      title: '¿Hay que repetir el examen?',
      nodes: [
        { id: 'val', col: 0, row: 1, k: 'start', t: 'Valor en rango de diabetes', s: '¿Tiene síntomas?' },
        { id: 'sin', col: 1, row: 0, k: 'alert', t: 'Síntomas + glicemia ≥ 200', s: 'Hiperglicemia inequívoca' },
        { id: 'dx', col: 2, row: 0, k: 'good', t: 'Diagnóstico confirmado', s: 'No se repite: se trata' },
        { id: 'asi', col: 1, row: 2, k: 'q', t: 'Asintomático', s: 'Ayuno ≥ 126 o HbA1c ≥ 6,5 %' },
        { id: 'rep', col: 2, row: 2, k: 'mech', t: 'Repetir en otro día', s: 'Segunda medición confirmatoria' },
        { id: 'tra', col: 3, row: 0, k: 'trap', t: 'Esperar una glicemia de ayuno', s: 'Retrasa el tratamiento' },
      ],
      edges: [
        { from: 'val', to: 'sin', label: 'con síntomas' }, { from: 'sin', to: 'dx' }, { from: 'dx', to: 'tra', label: 'nunca' },
        { from: 'val', to: 'asi', label: 'sin síntomas' }, { from: 'asi', to: 'rep' },
      ],
      steps: [
        { show: ['val'], note: 'La pregunta que decide: ¿hay síntomas?',
          say: 'Ahora la regla que más se pregunta. Tienes un valor en rango de diabetes. Lo que decide si confirmas o repites es una sola pregunta: ¿el paciente tiene síntomas?' },
        { show: ['sin', 'dx'], note: 'Síntomas + 200: diagnóstico hecho',
          say: 'Si tiene síntomas clásicos y una glicemia igual o mayor a doscientos, la hiperglicemia es inequívoca. El diagnóstico está hecho con ese solo examen, y se inicia el tratamiento.' },
        { show: ['tra'], note: 'Trampa: pedir una glicemia de ayuno para confirmar',
          say: 'Y ojo con la trampa: la alternativa que dice pedir una glicemia de ayuno la próxima semana para confirmar suena prudente, pero es incorrecta. Solo retrasa el tratamiento de un paciente que ya está descompensado.' },
        { show: ['asi', 'rep'], note: 'Asintomático: una sola medición no basta',
          say: 'Si en cambio está asintomático, una sola glicemia de ayuno sobre ciento veintiséis, o una sola hemoglobina glicosilada sobre seis coma cinco, no basta. Hay que repetir en un día diferente. Un solo examen alterado en un paciente sin síntomas es sospecha, no diagnóstico.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Prediabetes',
      title: 'Prediabetes: la zona gris',
      cards: [
        { title: 'Tres formas de prediabetes', tag: 'Alto riesgo', kind: 'criteria', items: [
          { t: 'Glicemia de ayuno alterada', d: 'Ayuno entre 100 y 125 mg/dL',
            say: 'Entre lo normal y la diabetes hay una zona gris: la prediabetes. No es un detalle, porque identifica a pacientes con riesgo cardiovascular alto y con gran probabilidad de llegar a ser diabéticos. La primera forma es la glicemia de ayuno alterada: entre cien y ciento veinticinco.' },
          { t: 'Intolerancia a la glucosa oral', d: 'PTGO a las 2 h entre 140 y 199 mg/dL',
            say: 'La segunda es la intolerancia a la glucosa oral: en la prueba de tolerancia, el valor a las dos horas queda entre ciento cuarenta y ciento noventa y nueve.' },
          { t: 'HbA1c 5,7 a 6,4 %', d: 'Rango de prediabetes',
            say: 'Y la tercera, una hemoglobina glicosilada entre cinco coma siete y seis coma cuatro por ciento.' },
        ] },
        { title: 'Resistencia a la insulina', tag: 'No es diabetes', kind: 'key', items: [
          { t: 'HOMA-IR > 2,6', d: 'Glicemia × insulina de ayuno / 405',
            say: 'Aparte está la resistencia a la insulina, que se mide con el índice HOMA: glicemia de ayuno por insulina de ayuno, dividido por cuatrocientos cinco. En adultos chilenos, un valor sobre dos coma seis certifica resistencia a la insulina. Pero no es un criterio de diabetes ni de prediabetes: es el mecanismo de la tipo dos que vimos la clase pasada, medido en un número.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tamizaje en APS',
      title: 'A quién se tamiza y qué hacer con la glicemia de ayuno',
      nodes: [
        { id: 'qui', col: 0, row: 1, k: 'start', t: 'A quién tamizar', s: 'IMC ≥ 25 + 1 factor, o mayor de 45' },
        { id: 'ga', col: 1, row: 1, k: 'q', t: 'Glicemia de ayuno', s: 'El examen de tamizaje' },
        { id: 'nor', col: 2, row: 0, k: 'good', t: 'Menor de 100', s: 'Normal: repetir en 3 años' },
        { id: 'gaa', col: 2, row: 1, k: 'refer', t: '100 a 125', s: 'Solicitar PTGO' },
        { id: 'sos', col: 2, row: 2, k: 'risk', t: '126 o más', s: 'Repetir glicemia de ayuno' },
        { id: 'tra', col: 3, row: 1, k: 'trap', t: 'Repetir la glicemia', s: 'No aporta: ya está en rango' },
      ],
      edges: [
        { from: 'qui', to: 'ga' }, { from: 'ga', to: 'nor' }, { from: 'ga', to: 'gaa' }, { from: 'ga', to: 'sos' },
        { from: 'gaa', to: 'tra', label: 'error' },
      ],
      steps: [
        { show: ['qui'], note: 'Sobrepeso con un factor de riesgo, o edad',
          say: 'Pasemos al tamizaje en atención primaria. ¿A quién? A todo adulto con sobrepeso u obesidad, es decir, índice de masa corporal de veinticinco o más, que tenga además un factor de riesgo: sedentarismo, hipertensión, dislipidemia o un familiar de primer grado diabético. Y a toda persona mayor de cuarenta y cinco años.' },
        { show: ['ga'], note: 'Se parte con glicemia de ayuno',
          say: 'El examen con que se parte es la glicemia de ayuno. Y según el resultado, hay tres caminos.' },
        { show: ['nor'], note: 'Normal: control cada 3 años',
          say: 'Si es menor a cien, es normal, y se repite en tres años.' },
        { show: ['gaa'], note: 'Entre 100 y 125: PTGO',
          say: 'Si está entre cien y ciento veinticinco, es una glicemia de ayuno alterada, y el paso siguiente es la prueba de tolerancia a la glucosa oral. ¿Por qué? Porque la curva puede destapar una intolerancia o incluso una diabetes que la glicemia de ayuno no mostraba.' },
        { show: ['tra'], note: 'Trampa: repetir la glicemia de ayuno',
          say: 'Y aquí está la trampa más repetida del tema: repetir la glicemia de ayuno. No sirve, porque ya sabemos que está en rango de prediabetes. Entre cien y ciento veinticinco, la respuesta es la PTGO.' },
        { show: ['sos'], note: '126 o más sin síntomas: repetir',
          say: 'Si es ciento veintiséis o más en un paciente asintomático, ahora sí se repite la glicemia de ayuno, en otro día. Fíjate que es exactamente la regla de oro que acabamos de ver.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tamizaje en APS',
      title: 'Cómo se resuelve: la PTGO desempata',
      nodes: [
        { id: 'seg', col: 0, row: 0, k: 'start', t: 'Segunda glicemia de ayuno', s: 'Tras una primera ≥ 126' },
        { id: 'con', col: 1, row: 0, k: 'risk', t: '126 o más', s: 'Diabetes confirmada' },
        { id: 'dis', col: 1, row: 1, k: 'q', t: 'Menor de 126', s: 'Resultado discordante' },
        { id: 'ptg', col: 2, row: 1, k: 'mech', t: 'PTGO con 75 g', s: 'Glicemia a las 2 horas' },
        { id: 'n', col: 3, row: 0, k: 'good', t: 'Menor de 140', s: 'Normal (o solo GAA)' },
        { id: 'itg', col: 3, row: 1, k: 'refer', t: '140 a 199', s: 'Intolerancia a la glucosa' },
        { id: 'dm', col: 3, row: 2, k: 'risk', t: '200 o más', s: 'Diabetes' },
      ],
      edges: [
        { from: 'seg', to: 'con', label: 'se repite' }, { from: 'seg', to: 'dis', label: 'no se repite' },
        { from: 'dis', to: 'ptg' }, { from: 'ptg', to: 'n' }, { from: 'ptg', to: 'itg' }, { from: 'ptg', to: 'dm' },
      ],
      steps: [
        { show: ['seg', 'con'], note: 'Dos glicemias ≥ 126: diabetes',
          say: 'Veamos cómo se resuelve. Si la segunda glicemia de ayuno vuelve a dar ciento veintiséis o más, dos valores en días distintos: diabetes confirmada.' },
        { show: ['dis'], note: 'Discordante: no se descarta ni se confirma',
          say: 'Pero si la segunda sale bajo ciento veintiséis, tienes dos resultados discordantes. Y aquí el examen pone dos trampas opuestas: confirmar la diabetes por la primera, o descartarla por la segunda. Ninguna es correcta.' },
        { show: ['ptg'], note: 'La PTGO desempata',
          say: 'Lo que corresponde es desempatar con la prueba de tolerancia a la glucosa oral. Y la lectura de la curva es siempre la misma: lo que manda es el valor a las dos horas.' },
        { show: ['n', 'itg'], note: 'Menor de 140: normal · 140 a 199: ITG',
          say: 'Bajo ciento cuarenta, es normal; y si la basal estaba entre cien y ciento veinticinco, queda como glicemia de ayuno alterada. Entre ciento cuarenta y ciento noventa y nueve, intolerancia a la glucosa oral.' },
        { show: ['dm'], note: 'PTGO ≥ 200: diabetes',
          say: 'Y doscientos o más a las dos horas es diabetes. En el algoritmo de atención primaria del libro, una PTGO en ese rango no se repite: confirma.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Paciente hospitalizado',
      title: 'Hiperglicemia de estrés: aquí manda la HbA1c',
      nodes: [
        { id: 'agu', col: 0, row: 1, k: 'cause', t: 'Enfermedad aguda', s: 'Sepsis, IAM, neumonía, corticoides' },
        { id: 'hor', col: 1, row: 1, k: 'mech', t: 'Cortisol y catecolaminas', s: 'Hormonas de estrés' },
        { id: 'hip', col: 2, row: 0, k: 'effect', t: 'Hiperglicemia', s: 'Aunque no sea diabético' },
        { id: 'no', col: 2, row: 2, k: 'trap', t: 'Glicemia o PTGO', s: 'Salen alteradas por el estrés' },
        { id: 'a1c', col: 3, row: 1, k: 'good', t: 'HbA1c', s: '≥ 6,5 %: ya era diabético' },
      ],
      edges: [
        { from: 'agu', to: 'hor' }, { from: 'hor', to: 'hip' }, { from: 'hor', to: 'no', label: 'invalida' },
        { from: 'hip', to: 'a1c', label: '¿de base?' },
      ],
      steps: [
        { show: ['agu', 'hor'], note: 'La enfermedad aguda libera hormonas contrarreguladoras',
          say: 'Un escenario que el examen adora: el paciente hospitalizado. Una sepsis, un infarto, un politrauma, una neumonía grave, o un tratamiento con corticoides, liberan cortisol y catecolaminas, que son hormonas que suben la glicemia.' },
        { show: ['hip'], note: 'Hiperglicemia incluso sin diabetes',
          say: 'Por eso estos pacientes tienen hiperglicemia, sobre ciento ochenta o doscientos, aunque no sean diabéticos. Es la hiperglicemia de estrés.' },
        { show: ['no'], note: 'Glicemia y PTGO no sirven en este contexto',
          say: 'Entonces, en este contexto, la glicemia no sirve para diagnosticar diabetes de base, y la prueba de tolerancia tampoco, porque el mismo estrés la altera. Esa es la trampa.' },
        { show: ['a1c'], note: 'La HbA1c mira los 2–3 meses previos',
          say: 'El examen de elección es la hemoglobina glicosilada. Como refleja el promedio de los dos a tres meses previos, no se deja engañar por el estrés de hoy. Si es seis coma cinco o más, el paciente ya era diabético antes de ingresar.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Hemoglobina glicosilada',
      title: 'Cuándo la HbA1c engaña',
      cards: [
        { title: 'Qué mide', tag: 'Vida del glóbulo rojo', kind: 'key', items: [
          { t: 'Promedio de 2 a 3 meses', d: 'Lo que dura el eritrocito',
            say: 'Para entender cuándo falla la hemoglobina glicosilada, recuerda qué mide: la glucosa pegada a la hemoglobina durante la vida del glóbulo rojo, es decir, el promedio de los últimos dos a tres meses. Si la vida del glóbulo rojo cambia, el resultado cambia.' },
        ] },
        { title: 'Falsamente baja', tag: 'Glóbulos rojos jóvenes', kind: 'alert', items: [
          { t: 'Anemia hemolítica', d: 'También hemorragia aguda y hemodiálisis',
            say: 'Sale falsamente baja cuando los glóbulos rojos viven menos o son reemplazados por glóbulos nuevos: en las anemias hemolíticas, en las pérdidas agudas de sangre y en la hemodiálisis. Hubo menos tiempo para que la glucosa se pegara.' },
        ] },
        { title: 'Falsamente alta', tag: 'Glóbulos rojos viejos', kind: 'alert', items: [
          { t: 'Ferropenia severa prolongada', d: 'También la esplenectomía',
            say: 'Y sale falsamente alta cuando los glóbulos rojos viven más de la cuenta: en la anemia ferropénica severa y prolongada, y después de una esplenectomía, porque falta el bazo que los retira.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'GES',
      title: 'Confirmado el diagnóstico: notificar e ingresar',
      cards: [
        { title: 'Garantía GES', tag: 'DM2 en 15 años y más', kind: 'key', items: [
          { t: 'Notificación GES obligatoria', d: 'Tras la confirmación documentada',
            say: 'Una vez confirmado el diagnóstico, se notifica al paciente la garantía GES de diabetes mellitus tipo dos, que cubre a personas de quince años y más.' },
          { t: 'Confirmación y evaluación inicial', d: 'En menos de 45 días',
            say: 'La garantía asegura la confirmación diagnóstica y la evaluación integral inicial en menos de cuarenta y cinco días.' },
          { t: 'Fármacos e insumos', d: 'Metformina, sulfonilureas, insulina',
            say: 'El acceso a los fármacos de primera línea: metformina, sulfonilureas e insulina, con sus insumos.' },
          { t: 'Controles periódicos', d: 'HbA1c cada 3–6 meses; RAC, fondo de ojo y pies',
            say: 'Y los exámenes de control: hemoglobina glicosilada cada tres a seis meses, creatinina, y una vez al año la albuminuria, el fondo de ojo y la evaluación de los pies.' },
        ] },
        { title: 'Qué sigue', tag: 'Según el estrato', kind: 'normal', items: [
          { t: 'Prediabetes: estilo de vida', d: 'Dieta y ejercicio; ITG: ± metformina si IMC > 35',
            say: 'Y el diagnóstico ya orienta el manejo. En la prediabetes, cambios de estilo de vida, y en la intolerancia a la glucosa se puede sumar metformina si el índice de masa corporal supera treinta y cinco.' },
          { t: 'Diabetes: metformina de inicio', d: 'HbA1c ≥ 9 %: terapia combinada precoz',
            say: 'En la diabetes, metformina más dieta y ejercicio; y si la hemoglobina glicosilada está en nueve o más, terapia combinada precoz. El detalle del tratamiento lo vemos en el bloque siguiente.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol de decisión, tal como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Qué hacer con cada resultado',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Síntomas + glicemia al azar ≥ 200', 'Diagnóstico confirmado: tratar', 'Pedir glicemia de ayuno para confirmar'],
          say: 'Repasemos las trampas. Síntomas con glicemia al azar de doscientos o más: diagnóstico confirmado, y se trata. El error es pedir una glicemia de ayuno para confirmar.' },
        { cells: ['Asintomático, ayuno ≥ 126', 'Repetir en otro día', 'Diagnosticar con un solo valor'],
          say: 'Asintomático con un ayuno de ciento veintiséis o más: se repite en otro día. El error es diagnosticar con un solo valor.' },
        { cells: ['Ayuno 100–125', 'PTGO con 75 g', 'Repetir la glicemia de ayuno'],
          say: 'Ayuno entre cien y ciento veinticinco: prueba de tolerancia a la glucosa. El error es repetir la glicemia de ayuno.' },
        { cells: ['Primera ≥ 126, segunda < 126', 'PTGO para desempatar', 'Confirmar o descartar sin más'],
          say: 'Primera glicemia sobre ciento veintiséis y segunda bajo ciento veintiséis: desempata la PTGO. El error es confirmar por la primera, o descartar por la segunda.' },
        { cells: ['Hospitalizado o con corticoides', 'HbA1c', 'Glicemia de ayuno o PTGO'],
          say: 'Paciente hospitalizado, con una enfermedad aguda o con corticoides: hemoglobina glicosilada. El error es pedir glicemia o PTGO, que salen alteradas por el estrés.' },
        { cells: ['HOMA-IR > 2,6 con glicemia normal', 'Resistencia a la insulina: estilo de vida', 'Llamarlo diabetes o prediabetes'],
          say: 'Y un HOMA alto con glicemia normal es resistencia a la insulina. No es diabetes ni prediabetes, y se maneja con estilo de vida.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 49 años, transportista, IMC 31 kg/m², hipertenso, asintomático. En un examen preventivo laboral presenta glicemia de ayuno de 132 mg/dL. Niega polidipsia y baja de peso. Consulta en su CESFAM.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Confirmar diabetes mellitus tipo 2 e iniciar metformina' },
        { letter: 'B', text: 'Repetir la glicemia de ayuno en otro día' },
        { letter: 'C', text: 'Solicitar una PTGO con 75 g' },
        { letter: 'D', text: 'Solicitar péptido C y anticuerpos anti-GAD' },
        { letter: 'E', text: 'Control con glicemia de ayuno en 3 años' },
      ],
      correct: 'B',
      explanation: 'Asintomático con una única glicemia de ayuno ≥ 126 mg/dL: no basta para diagnosticar. Se repite la glicemia de ayuno en un día distinto; si vuelve a ser ≥ 126 mg/dL se confirma DM2 y se ingresa a GES. La PTGO corresponde a una glicemia de 100–125 o a un resultado discordante.',
      say: {
        stem: 'Vamos con un caso. Hombre de cuarenta y nueve años, transportista, obeso, hipertenso y sin síntomas. En un examen preventivo laboral le sale una glicemia de ayuno de ciento treinta y dos. Niega sed y baja de peso.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las alternativas: confirmar diabetes e iniciar metformina, repetir la glicemia de ayuno en otro día, pedir una prueba de tolerancia a la glucosa, pedir péptido C y anticuerpos, o controlar en tres años. Piénsalo.',
        answer: 'Es la B. Paciente asintomático, un solo valor sobre ciento veintiséis: es sospecha, y se repite en otro día. El distractor más tentador es la A, porque el paciente tiene todo el perfil de tipo dos, pero el perfil no reemplaza la confirmación. Y la PTGO sería la respuesta si la glicemia hubiera estado entre cien y ciento veinticinco.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 158',
      stem: 'Mujer asintomática de 46 años de edad, con IMC de 24. Tiene antecedente de diabetes gestacional con su último embarazo. Se practica una glicemia en ayunas que resulta en 112 mg/dl.',
      question: 'La conducta más adecuada es:',
      options: [
        { letter: 'A', text: 'Repetir la glicemia en ayunas' },
        { letter: 'B', text: 'Practicar niveles de hemoglobina glicosilada' },
        { letter: 'C', text: 'Indicar metformina' },
        { letter: 'D', text: 'Realizar control de glicemia en 6 meses' },
        { letter: 'E', text: 'Solicitar curva de tolerancia a la glucosa' },
      ],
      correct: 'E',
      explanation: 'Glicemia de ayuno entre 100 y 125 mg/dL en una mujer no embarazada: glicemia de ayuno alterada. La conducta es la PTGO con 75 g; repetir la glicemia de ayuno no aporta.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil dieciséis. Mujer asintomática de cuarenta y seis años, de peso normal, con antecedente de diabetes gestacional en su último embarazo. Su glicemia de ayuno es ciento doce.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: repetir la glicemia en ayunas, pedir hemoglobina glicosilada, indicar metformina, controlar en seis meses, o pedir una curva de tolerancia a la glucosa. Piénsalo.',
        answer: 'Es la E. Ciento doce está entre cien y ciento veinticinco: glicemia de ayuno alterada, y el paso siguiente es la curva. El distractor clásico es repetir la glicemia, que no aporta nada. Y un detalle: esta mujer ya no está embarazada, así que se usan los cortes del adulto. En el embarazo los cortes cambian, como veremos en la próxima clase.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 95',
      stem: 'Un paciente de 39 años, con antecedente de obesidad, se realiza un test de tolerancia a la glucosa oral, que muestra una glicemia basal de 117 mg/dl y postcarga de 75 gramos de glucosa de 136 mg/dl.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Normal' },
        { letter: 'B', text: 'Diabetes mellitus 2' },
        { letter: 'C', text: 'Intolerancia a la glucosa oral' },
        { letter: 'D', text: 'Diabetes mellitus 1' },
        { letter: 'E', text: 'Prediabetes' },
      ],
      correct: 'E',
      explanation: 'Basal 117 mg/dL: glicemia de ayuno alterada. Postcarga 136 mg/dL (< 140): sin intolerancia ni diabetes. La GAA es una forma de prediabetes.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil diecinueve. Paciente de treinta y nueve años, obeso, con una prueba de tolerancia a la glucosa que muestra una basal de ciento diecisiete y, a las dos horas, ciento treinta y seis.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: normal, diabetes tipo dos, intolerancia a la glucosa oral, diabetes tipo uno, o prediabetes. Piénsalo.',
        answer: 'Es la E, prediabetes. Lee los dos valores por separado. La basal de ciento diecisiete está entre cien y ciento veinticinco: glicemia de ayuno alterada. La de las dos horas, ciento treinta y seis, está bajo ciento cuarenta: no hay intolerancia. El distractor es justamente la intolerancia a la glucosa, que exigiría ciento cuarenta o más a las dos horas. Glicemia de ayuno alterada sola es prediabetes.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 93',
      stem: 'Un paciente de 35 años, con antecedente de obesidad y resistencia a la insulina, presenta una reacción alérgica severa relacionada con el uso de fármacos, por lo que es hospitalizado para manejo con soporte y corticoides sistémicos. Durante su hospitalización se realizan exámenes entre los que destaca glicemia de 180 mg/dL, que se mantiene en rangos similares en varias tomas.',
      question: '¿Cuál es el examen de elección para confirmar el diagnóstico?',
      options: [
        { letter: 'A', text: 'Péptido C' },
        { letter: 'B', text: 'Test de tolerancia a la glucosa oral' },
        { letter: 'C', text: 'Hemoglobina glicosilada' },
        { letter: 'D', text: 'Índice de HOMA' },
        { letter: 'E', text: 'Insulinemia postcarga de glucosa' },
      ],
      correct: 'C',
      explanation: 'Con un descompensante agudo (reacción alérgica grave, corticoides) la glicemia y la PTGO salen alteradas por el estrés. La HbA1c refleja los 2–3 meses previos y es el examen de elección: ≥ 6,5 % confirma diabetes.',
      say: {
        stem: 'Una pregunta reciente, del EUNACOM de diciembre de dos mil veinticinco. Paciente de treinta y cinco años, obeso y con resistencia a la insulina, hospitalizado por una reacción alérgica severa, en tratamiento con corticoides sistémicos. Sus glicemias se mantienen en torno a ciento ochenta.',
        question: '¿Cuál es el examen de elección para confirmar el diagnóstico?',
        options: 'Las opciones: péptido C, test de tolerancia a la glucosa, hemoglobina glicosilada, índice HOMA, o insulinemia postcarga. Piénsalo.',
        answer: 'Es la C, hemoglobina glicosilada. Hay dos factores de estrés: la reacción alérgica y los corticoides, y ambos suben la glicemia. En ese contexto, la curva de tolerancia es el distractor tentador, pero sale alterada por el mismo estrés. La hemoglobina glicosilada mira los meses previos y responde lo que importa: si era diabético antes de hospitalizarse.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 20',
      stem: 'Un adolescente de 16 años, con IMC de 33, se realiza una glicemia de ayuno, que resulta 96 mg/dl, más una insulina basal que resulta 23 UI/L.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar insulina' },
        { letter: 'B', text: 'Iniciar dieta y ejercicio' },
        { letter: 'C', text: 'Iniciar metformina' },
        { letter: 'D', text: 'Solicitar un test de tolerancia a la glucosa' },
        { letter: 'E', text: 'Iniciar metformina más glibenclamida' },
      ],
      correct: 'B',
      explanation: 'HOMA-IR = 96 × 23 / 405 ≈ 5,5 (> 2,6): resistencia a la insulina. La glicemia de ayuno es normal (< 100), así que no hay diabetes ni glicemia alterada: dieta y ejercicio.',
      say: {
        stem: 'Y la última, del EUNACOM de julio de dos mil quince. Adolescente de dieciséis años, obeso, con glicemia de ayuno de noventa y seis e insulina basal de veintitrés.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: iniciar insulina, dieta y ejercicio, metformina, pedir una curva de tolerancia, o metformina más glibenclamida. Piénsalo.',
        answer: 'Es la B. Calcula el HOMA: noventa y seis por veintitrés, dividido por cuatrocientos cinco, da cerca de cinco coma cinco. Está sobre dos coma seis, así que hay resistencia a la insulina. Pero con glicemia bajo cien no hay diabetes ni glicemia alterada, y la curva no está indicada. Corresponde dieta y ejercicio. Los fármacos son el distractor: tratan un diagnóstico que el paciente no tiene.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Criterios', tag: 'Los números', kind: 'criteria', items: [
          { t: 'Ayuno 126 · PTGO 200 · HbA1c 6,5 %', d: 'O azar 200 con síntomas',
            say: 'Cerremos con las reglas de oro. Los cuatro criterios: ayuno de ciento veintiséis, curva de doscientos a las dos horas, hemoglobina glicosilada de seis coma cinco, o glicemia al azar de doscientos con síntomas.' },
          { t: 'Asintomático: se confirma', d: 'Síntomas + 200: no se repite',
            say: 'En el asintomático, el valor alterado se confirma en otro día. Con síntomas y doscientos, no se repite nada: se trata.' },
        ] },
        { title: 'Tamizaje', tag: 'Qué pedir', kind: 'key', items: [
          { t: 'Ayuno 100–125: PTGO', d: 'Primera ≥ 126 y segunda < 126: PTGO',
            say: 'Entre cien y ciento veinticinco, curva de tolerancia, no otra glicemia. Y si dos glicemias no concuerdan, también desempata la curva.' },
        ] },
        { title: 'Hospitalizado', tag: 'Estrés', kind: 'alert', items: [
          { t: 'Enfermedad aguda o corticoides', d: 'HbA1c, no glicemia ni PTGO',
            say: 'En el hospitalizado o con corticoides, hemoglobina glicosilada. Si te llevas una sola idea de hoy: antes de mirar el número, mira al paciente; si tiene síntomas, si está asintomático o si está hospitalizado, porque eso decide qué hacer con el valor. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Diagnóstico de diabetes en el adulto no embarazado',
    root: N('start', 'Adulto no embarazado', 'Glicemia alterada o tamizaje',
      'Adulto no embarazado, con una glicemia alterada o en tamizaje. Lo primero no es el número, sino el contexto.',
      ['', N('q', '¿Cuál es el contexto?', 'Síntomas · asintomático · hospitalizado',
        '¿Tiene síntomas clásicos, está asintomático, o está hospitalizado con una enfermedad aguda?',
        ['Síntomas + azar ≥ 200', N('ok', 'Diabetes confirmada', 'No repetir: tratar e ingresar a GES',
          'Síntomas clásicos con una glicemia al azar de doscientos o más: diagnóstico confirmado. No se repite, se trata y se ingresa a GES.')],
        ['Hospitalizado o corticoides', N('do', 'HbA1c', '≥ 6,5 %: diabetes previa',
          'Hospitalizado con una enfermedad aguda o con corticoides: la glicemia no sirve. Se pide hemoglobina glicosilada; seis coma cinco o más indica diabetes previa.')],
        ['Asintomático', N('q', 'Glicemia de ayuno', '¿En qué rango está?',
          'Asintomático: todo parte de la glicemia de ayuno. ¿En qué rango está?',
          ['< 100', N('ok', 'Normal', 'Repetir en 3 años',
            'Menor a cien: normal. Se repite el tamizaje en tres años.')],
          ['100–125', N('do', 'PTGO con 75 g', '140–199: ITG · ≥ 200: diabetes',
            'Entre cien y ciento veinticinco: curva de tolerancia. Entre ciento cuarenta y ciento noventa y nueve a las dos horas es intolerancia; doscientos o más, diabetes.')],
          ['≥ 126', N('alert', 'Repetir en otro día', '≥ 126 confirma · < 126: PTGO',
            'Ciento veintiséis o más: se repite en otro día. Si se confirma, es diabetes; si la segunda sale menor, desempata la curva de tolerancia.')])])]),
  },
};
