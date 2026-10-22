// Clase 17.13 (Psiquiatría) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_psiquiatria.cjs (psiq-13). Preguntas: banco real EUNACOM (class_questions.cjs y --search).
// El código de la clase (1.13.2.001) no trae preguntas reales; las de síndrome neuroléptico maligno y de síndromes por fármacos están bajo 5.01.1.010, 5.01.2.003 y 5.01.5.002. Usadas:
//   Julio 2016 P141 (haloperidol subido, rigidez, fiebre, CPK: SNM clásico), Diciembre 2019 P9 (sertralina, clorpromazina y diazepam con rigidez: serotoninérgico),
//   Julio 2016 P61 (clorpromazina subida con midriasis y retención: anticolinérgico, el otro síndrome de los antipsicóticos).
// No usadas por repetir lo mismo: Julio 2019 P18 (mismo anticolinérgico por clorpromazina que Julio 2016 P61), Enero 2023 P109 (SNM con flufenazina; ya lo usa neuro-13).
// DESCARTADA: Diciembre 2022 P78 (flufenazina de depósito con fiebre, rigidez y obnubilación; la clave del banco dice distonía aguda, pero el cuadro es un SNM). No se enseña.
// Sin pregunta real sobre hipertermia maligna, bromocriptina/dantroleno ni reintroducción: se usa un caso escrito para la clase y la pregunta de rescate del libro como "Caso representativo".
// Cuidado clínico: el haloperidol está prohibido en SNM; el libro dice "inicio subagudo, días a semanas" en la tabla y "24 a 72 horas" en el texto: se enseña "horas a pocos días" sin fijar una cifra rígida.
// Imágenes: ninguna (los libros extraídos no traen figuras de SNM ni de síndrome serotoninérgico); se proponen animaciones.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'psiq-13',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Síndrome neuroléptico maligno: mecanismo, tétrada, CPK, diferencias con el serotoninérgico y la hipertermia maligna, y manejo',
      say: 'Bienvenido. Hoy vemos la urgencia más grave que pueden causar los antipsicóticos: el síndrome neuroléptico maligno. Partimos por el mecanismo, que explica la fiebre, la rigidez y el daño renal. Después viene la tétrada clínica, el laboratorio y, sobre todo, la comparación con el síndrome serotoninérgico y la hipertermia maligna, que es lo que más se pregunta. Cerramos con el manejo: qué se suspende, qué se hidrata y qué fármacos de rescate existen.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Bloqueo dopaminérgico agudo',
      nodes: [
        { id: 'a', col: 0, row: 2, k: 'cause', t: 'Bloqueo D2 brusco y masivo', s: 'Antipsicótico, o retiro de levodopa' },
        { id: 'b', col: 1, row: 1, k: 'mech', t: 'Hipotálamo anterior', s: 'Se pierde el termostato' },
        { id: 'c', col: 1, row: 3, k: 'mech', t: 'Vía nigroestriada', s: 'Contracción tónica sostenida' },
        { id: 'd', col: 2, row: 1, k: 'effect', t: 'Hipertermia sobre 40 °C', s: 'No baja con antipiréticos' },
        { id: 'e', col: 2, row: 3, k: 'effect', t: 'Rigidez en caño de plomo', s: 'Generalizada y continua' },
        { id: 'f', col: 3, row: 3, k: 'alert', t: 'Rabdomiólisis', s: 'CPK alta, mioglobina' },
        { id: 'g', col: 4, row: 3, k: 'risk', t: 'Falla renal aguda', s: 'Necrosis tubular' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'a', to: 'c' }, { from: 'b', to: 'd' }, { from: 'c', to: 'e' }, { from: 'e', to: 'f' }, { from: 'f', to: 'g' },
      ],
      steps: [
        { show: ['a', 'b', 'd'], note: 'Sin dopamina, el termostato falla',
          say: 'Recuerda la clase de esquizofrenia: los antipsicóticos bloquean los receptores de dopamina D dos. En el síndrome neuroléptico maligno ese bloqueo es brusco y masivo, y llega al hipotálamo anterior. El centro que regula la temperatura se descontrola y aparece una hipertermia que puede superar los cuarenta grados.' },
        { show: ['c', 'e'], note: 'Sin dopamina, el músculo se contrae',
          say: 'El mismo bloqueo en la vía nigroestriada, la que controla el tono muscular, produce una contracción tónica sostenida. Es la rigidez en caño de plomo, generalizada y continua. No es un espasmo de un solo grupo muscular, como en la distonía.' },
        { show: ['f', 'g'], note: 'Músculo destruido, riñón en riesgo',
          say: 'Un músculo que se contrae sin parar se destruye. Es la rabdomiólisis: sube la creatina fosfoquinasa, la CPK, y sale mioglobina a la sangre. La mioglobina tapa y daña los túbulos, y el resultado es una falla renal aguda. Esa cadena explica casi todo el tratamiento.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'La tétrada del síndrome',
      cards: [
        { title: 'Cuatro pilares', tag: 'Tétrada', kind: 'criteria', items: [
          { t: 'Hipertermia sobre 38 °C', d: 'Hasta 41 °C, refractaria a antipiréticos',
            say: 'El primer pilar es la fiebre alta, sobre treinta y ocho grados y muchas veces de treinta y nueve y medio a cuarenta y uno. No cede con los antipiréticos comunes, porque el problema es central.' },
          { t: 'Rigidez en caño de plomo', d: 'Uniforme, en todas las articulaciones',
            say: 'El segundo es la rigidez extrema: una resistencia uniforme al movimiento pasivo, que puede acompañarse de rueda dentada. Los reflejos están normales o disminuidos.' },
          { t: 'Inestabilidad autonómica', d: 'Presión lábil, taquicardia, sudoración',
            say: 'El tercero es la disautonomía: presión arterial que sube y baja, taquicardia marcada, sudoración profusa, taquipnea e incontinencia.' },
          { t: 'Alteración de conciencia', d: 'De confusión y mutismo a coma',
            say: 'Y el cuarto es el compromiso de conciencia, que va desde la confusión y el mutismo hasta el estupor y el coma.' },
        ] },
        { title: 'Cuándo sospecharlo', tag: 'Contexto', kind: 'alert', items: [
          { t: 'Antipsicótico recién iniciado o subido', d: 'Sobre todo alta potencia: haloperidol',
            say: 'El antecedente clave es un antipsicótico recién iniciado o con la dosis aumentada, sobre todo de alta potencia, como el haloperidol. Muchas veces el paciente estaba agitado y por eso se subió la dosis, y ahí está la trampa.' },
          { t: 'Puede ocurrir con cualquier antipsicótico', d: 'Y tras suspender levodopa',
            say: 'Puede ocurrir con cualquier antipsicótico, incluidos los atípicos y los inyectables de depósito. También aparece al suspender de golpe un fármaco dopaminérgico, como la levodopa en la enfermedad de Parkinson.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Riesgo y laboratorio',
      title: 'Quién lo hace y qué muestra',
      cards: [
        { title: 'Factores de riesgo', tag: 'Del libro', kind: 'alert', items: [
          { t: 'Dosis altas o subida rápida', d: 'Formulaciones de depósito',
            say: 'Los factores de riesgo son las dosis altas, el escalamiento rápido y las formulaciones inyectables de depósito.' },
          { t: 'Deshidratación y agitación previa', d: 'Más frecuente en hombres',
            say: 'También la deshidratación, la agitación previa y el sexo masculino. Fíjate que la persona agitada, deshidratada y recién medicada es el paciente típico.' },
        ] },
        { title: 'Laboratorio', tag: 'Sello bioquímico', kind: 'key', items: [
          { t: 'CPK sobre 1.000 UI/L', d: 'A veces sobre 10.000: rabdomiólisis',
            say: 'El sello bioquímico es la CPK muy elevada: habitualmente sobre mil unidades por litro y a menudo sobre diez mil.' },
          { t: 'Leucocitos 15.000 a 30.000', d: 'Neutrofilia sin foco: parece sepsis',
            say: 'Hay leucocitosis de quince mil a treinta mil, que simula una sepsis, además de creatinina elevada, acidosis láctica y mioglobina en la orina. Una orina de color pardo oscuro es una pista.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Lo que más se pregunta',
      title: 'Tres cuadros con fiebre y rigidez',
      head: ['Dato', 'Neuroléptico maligno', 'Serotoninérgico', 'Hipertermia maligna'],
      rows: [
        { cells: ['Gatillo', 'Antipsicótico; retiro de levodopa', 'ISRS, tramadol, IMAO, éxtasis', 'Anestésico halogenado, succinilcolina'],
          say: 'Primero, qué fármaco hay detrás. El neuroléptico maligno viene de un antipsicótico o del retiro de levodopa. El serotoninérgico, de fármacos que suben la serotonina: antidepresivos como la sertralina, el tramadol, los inhibidores de la monoaminooxidasa o el éxtasis. Y la hipertermia maligna, de un anestésico inhalatorio halogenado o de la succinilcolina en el pabellón.' },
        { cells: ['Inicio', 'Horas a pocos días', 'Muy rápido, horas', 'Minutos, en cirugía'],
          say: 'El inicio ayuda. El neuroléptico maligno se instala en horas a pocos días tras el cambio de dosis. El serotoninérgico, en horas tras una combinación o una sobredosis. Y la hipertermia maligna, en minutos, dentro del pabellón.' },
        { cells: ['Tono y reflejos', 'Caño de plomo; reflejos normales o bajos', 'Hiperreflexia y clonus', 'Rigidez masiva'],
          say: 'La diferencia que más cae: en el neuroléptico maligno la rigidez es plástica y los reflejos están normales o disminuidos. En el serotoninérgico hay hiperreflexia y clonus, es decir, sacudidas rítmicas del pie o del ojo, y la rigidez es leve a moderada.' },
        { cells: ['Otros signos', 'Pupilas normales; constipación', 'Midriasis, diarrea, temblor', 'Hipercapnia, CPK alta'],
          say: 'El serotoninérgico además trae midriasis, diarrea y temblor. El neuroléptico maligno tiene pupilas normales y más bien constipación. La hipertermia maligna se da por una alteración del receptor de rianodina, y empeora en minutos.' },
        { cells: ['Tratamiento específico', 'Bromocriptina, dantroleno', 'Ciproheptadina, benzodiacepinas', 'Dantroleno, suspender anestésico'],
          say: 'Y el tratamiento específico: bromocriptina y dantroleno en el neuroléptico maligno; ciproheptadina, que bloquea la serotonina, y benzodiacepinas en el serotoninérgico; y dantroleno con suspensión inmediata del anestésico en la hipertermia maligna.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Otros diagnósticos',
      title: 'Fiebre con alteración de conciencia',
      cards: [
        { title: 'Descartar siempre', tag: 'Diferencial', kind: 'alert', items: [
          { t: 'Meningitis o encefalitis', d: 'Punción lumbar si hay duda',
            say: 'Un paciente con fiebre, rigidez y alteración de conciencia puede tener una infección del sistema nervioso central. Si la duda es real, se hace punción lumbar. Pero no se retrasa la suspensión del antipsicótico mientras tanto.' },
          { t: 'Distonía aguda: vigil y sin fiebre', d: 'Espasmo focal que cede con biperideno',
            say: 'Recuerda lo que dijimos en esquizofrenia: la distonía es un espasmo focal, con el paciente vigil y sin fiebre. Fiebre más rigidez generalizada más conciencia alterada no es distonía.' },
        ] },
        { title: 'El otro síndrome de los antipsicóticos', tag: 'Anticolinérgico', kind: 'key', items: [
          { t: 'Midriasis, mucosas secas, retención urinaria', d: 'Constipación y confusión; sin rigidez',
            say: 'Los antipsicóticos de baja potencia, como la clorpromazina, tienen además efecto anticolinérgico. Con la dosis alta aparecen midriasis, mucosas secas, retención urinaria, constipación y confusión, pero sin rigidez muscular. Eso se pregunta como contraste del neuroléptico maligno.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo',
      title: 'Qué se hace de inmediato',
      cards: [
        { title: 'Primeras medidas', tag: 'Urgencia vital', kind: 'alert', items: [
          { t: 'Suspender todo bloqueador dopaminérgico', d: 'Antipsicóticos, metoclopramida',
            say: 'La primera medida, y no se espera el laboratorio para hacerla, es suspender el antipsicótico y cualquier otro bloqueador dopaminérgico, como la metoclopramida. Y nunca se da haloperidol para tratar la agitación de este cuadro.' },
          { t: 'Traslado a unidad crítica', d: 'Monitorización y vía aérea',
            say: 'Es una emergencia vital, con una mortalidad histórica de diez a veinte por ciento por falla multiorgánica. Requiere unidad de paciente crítico, monitorización continua y protección de la vía aérea.' },
          { t: 'Enfriamiento físico activo', d: 'Paracetamol no actúa en la fiebre central',
            say: 'La temperatura se baja con enfriamiento físico: compresas frías en cuello, axilas e ingles, y sueros fríos. El paracetamol no sirve, porque la fiebre es central y no inflamatoria.' },
        ] },
        { title: 'Proteger el riñón', tag: 'Hidratación', kind: 'key', items: [
          { t: 'Suero fisiológico 3 a 6 L/día', d: 'Meta: diuresis sobre 2 mL/kg/h',
            say: 'El segundo gran pilar es hidratar de forma masiva con suero fisiológico, de tres a seis litros al día, con una meta de diuresis de al menos dos mililitros por kilo por hora. Así se arrastra la mioglobina y se previene la necrosis tubular.' },
          { t: 'Bicarbonato si hay acidosis grave', d: 'Alcalinizar la orina',
            say: 'Si además hay acidosis grave, el libro agrega bicarbonato para alcalinizar la orina.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Fármacos de rescate',
      title: 'Cuando no basta con lo anterior',
      cards: [
        { title: 'Para el neuroléptico maligno', tag: 'En unidad crítica', kind: 'pharma', items: [
          { t: 'Bromocriptina 2,5 a 5 mg', d: 'Cada 8 h; agonista D2, hasta 20 mg/día',
            say: 'La bromocriptina es un agonista dopaminérgico: devuelve el tono dopaminérgico al hipotálamo y al estriado. Se da por vía oral o por sonda, de dos coma cinco a cinco miligramos cada ocho horas, hasta veinte miligramos al día.' },
          { t: 'Amantadina 100 a 200 mg', d: 'Cada 12 h; agonista dopaminérgico alternativo',
            say: 'La amantadina es otro fármaco dopaminérgico alternativo, de cien a doscientos miligramos cada doce horas.' },
          { t: 'Dantroleno 1 a 2,5 mg/kg EV', d: 'Relaja el músculo; si rigidez e hipertermia graves',
            say: 'El dantroleno es un relajante muscular que bloquea la salida de calcio del retículo sarcoplásmico. Se usa en rigidez extrema con hipertermia severa, de uno a dos coma cinco miligramos por kilo endovenoso.' },
        ] },
        { title: 'Para no confundirse', tag: 'Distractores', kind: 'alert', items: [
          { t: 'Ciproheptadina: es del serotoninérgico', d: 'Antagonista 5-HT2A',
            say: 'La ciproheptadina bloquea la serotonina, así que es del síndrome serotoninérgico, junto con las benzodiacepinas. No es para el neuroléptico maligno.' },
          { t: 'Biperideno, flumazenil, naloxona: no', d: 'No tratan este síndrome',
            say: 'El biperideno sirve para la distonía, el flumazenil para las benzodiacepinas y la naloxona para los opioides. Ninguno trata el neuroléptico maligno.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Después de la crisis',
      title: 'Volver a un antipsicótico',
      cards: [
        { title: 'Reintroducción segura', tag: 'Del libro', kind: 'key', items: [
          { t: 'Esperar al menos 2 semanas', d: 'Con CPK y temperatura normales',
            say: 'Si la enfermedad de base exige volver a un antipsicótico, se espera al menos dos semanas desde la recuperación completa, con temperatura y CPK normalizadas.' },
          { t: 'Atípico de baja afinidad D2', d: 'Quetiapina o clozapina; dosis mínimas',
            say: 'El libro propone un antipsicótico de segunda generación con baja afinidad por el receptor D dos, como quetiapina o clozapina, empezando con la dosis mínima eficaz.' },
          { t: 'Vigilar temperatura y CPK', d: 'Titulación lenta',
            say: 'Y se vigilan de cerca la temperatura y la CPK mientras se sube la dosis lentamente. Esta decisión corresponde al psiquiatra; tu tarea es reconocer la urgencia y suspender el fármaco.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la persona con antipsicótico y fiebre al manejo del síndrome.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Haloperidol subido; fiebre, rigidez, CPK alta', 'SNM: suspender, hidratar, UPC', 'Subir el antipsicótico por la agitación'],
          say: 'Antipsicótico recién subido, con fiebre, rigidez y CPK alta: neuroléptico maligno. Se suspende, se hidrata y se traslada. El error mortal es subir el antipsicótico porque el paciente sigue agitado.' },
        { cells: ['Rigidez, reflejos normales o bajos', 'Neuroléptico maligno', 'Pensar en serotoninérgico'],
          say: 'Rigidez plástica con reflejos normales o disminuidos y sin clonus: neuroléptico maligno, no serotoninérgico.' },
        { cells: ['Hiperreflexia, clonus, diarrea, midriasis', 'Serotoninérgico: ciproheptadina', 'Tratarlo con dantroleno o bromocriptina'],
          say: 'Hiperreflexia, clonus, diarrea y midriasis tras un antidepresivo o tramadol: serotoninérgico. Se suspende el fármaco serotoninérgico y se usan benzodiacepinas y ciproheptadina.' },
        { cells: ['Fiebre en cirugía, tras anestésico halogenado', 'Hipertermia maligna: dantroleno', 'Confundir con SNM'],
          say: 'Fiebre y rigidez en minutos dentro del pabellón, tras un anestésico inhalatorio: hipertermia maligna, que se trata con dantroleno.' },
        { cells: ['Midriasis, mucosas secas, retención, sin rigidez', 'Anticolinérgico por clorpromazina', 'Llamarlo neuroléptico maligno'],
          say: 'Midriasis, mucosas secas y retención urinaria sin rigidez ni fiebre alta: síndrome anticolinérgico.' },
        { cells: ['Fiebre que no cede con paracetamol', 'Enfriamiento y suspender el fármaco', 'Solo dar antipiréticos'],
          say: 'La fiebre central no cede con paracetamol. Sin suspender el antipsicótico, el antipirético no resuelve nada.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 34 años con esquizofrenia, hospitalizada hace 3 días por descompensación agitada, a quien se subió haloperidol de 10 a 20 mg al día. Hoy está soporosa, con temperatura de 39,6 °C, sudoración profusa, PA fluctuante entre 170/100 y 95/60, FC 126 por minuto y rigidez generalizada «en caño de plomo» con reflejos osteotendinosos disminuidos. No hay clonus ni diarrea. CPK 12.400 UI/L, leucocitos 18.000/mm³ y creatinina 2,1 mg/dL. La enfermera pregunta si se puede dar una dosis extra de haloperidol porque «está muy inquieta».',
      question: '¿Cuál es el diagnóstico y la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Síndrome serotoninérgico; ciproheptadina y mantener el haloperidol' },
        { letter: 'B', text: 'Síndrome neuroléptico maligno; suspender el haloperidol, hidratar con suero fisiológico, enfriar y trasladar a unidad crítica' },
        { letter: 'C', text: 'Distonía aguda; biperideno endovenoso y observar' },
        { letter: 'D', text: 'Meningitis bacteriana; solo ceftriaxona y mantener el haloperidol' },
        { letter: 'E', text: 'Agitación psicótica; subir el haloperidol a 30 mg al día' },
      ],
      correct: 'B',
      explanation: 'Antipsicótico de alta potencia con dosis recién aumentada, fiebre, rigidez plástica con reflejos disminuidos, disautonomía, conciencia alterada, CPK muy alta y daño renal: síndrome neuroléptico maligno. Se suspende el haloperidol, se hidrata para forzar diuresis y proteger el riñón, se enfría y se traslada a unidad crítica. Subir el haloperidol, o mantenerlo, es la conducta peligrosa. El serotoninérgico tendría clonus, hiperreflexia y diarrea.',
      say: {
        stem: 'Una mujer de treinta y cuatro años con esquizofrenia, hospitalizada por una descompensación agitada, con el haloperidol subido de diez a veinte miligramos al día. Hoy está soporosa, con treinta y nueve coma seis grados, sudor profuso, presión lábil, taquicardia y rigidez en caño de plomo, con reflejos disminuidos. No hay clonus ni diarrea. La CPK está en doce mil cuatrocientos y la creatinina elevada. La enfermera pregunta si puede dar más haloperidol, porque está muy inquieta.',
        question: '¿Cuál es el diagnóstico y la conducta más adecuada?',
        options: 'Las opciones: serotoninérgico con ciproheptadina; neuroléptico maligno con suspensión, hidratación, enfriamiento y unidad crítica; distonía con biperideno; meningitis tratada solo con antibiótico; o agitación psicótica con más haloperidol. Piénsalo.',
        answer: 'Es la B. Tiene la tétrada completa, una CPK altísima y daño renal, tras subir un antipsicótico de alta potencia. La rigidez plástica con reflejos disminuidos y sin clonus aleja al serotoninérgico. Se suspende el haloperidol, se hidrata fuerte, se enfría y se traslada. La respuesta a la enfermera es no: más haloperidol es justo lo que empeora el cuadro.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 141',
      stem: 'Un hombre de 48 años, diagnosticado de esquizofrenia, presenta episodio agitación, por lo cual se aumenta la dosis de haloperidol de 10 a 20 mg al día, evolucionando con malestar general, dificultad para la marcha y disminución del nivel de conciencia. Al examen físico, tiene FC: 100x\', PA: 140/90 mmHg, temperatura 38 grados Celsius y rigidez de las extremidades. Se solicitan exámenes, en los que destaca leucocitosis de 19.000 blancos por mm3 y CPK de 1200 UI/L. El diagnóstico más probable es:',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Distonía' },
        { letter: 'B', text: 'Síndrome neuroléptico maligno' },
        { letter: 'C', text: 'Síndrome anticolinérgico' },
        { letter: 'D', text: 'Síndrome adrenérgico' },
        { letter: 'E', text: 'Distrofia muscular de Duchenne' },
      ],
      correct: 'B',
      explanation: 'Es un síndrome neuroléptico maligno clásico: se inicia o aumenta la dosis de un neuroléptico (sinónimo de antipsicótico) y evoluciona con la tríada de rigidez, hipertermia y compromiso de conciencia.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil dieciséis. Un hombre de cuarenta y ocho años con esquizofrenia se agita, y le suben el haloperidol de diez a veinte miligramos al día. Evoluciona con malestar general, dificultad para caminar y menor nivel de conciencia. Tiene pulso de cien, presión ciento cuarenta sobre noventa, temperatura de treinta y ocho grados y rigidez de las extremidades. Hay leucocitosis de diecinueve mil y una CPK de mil doscientos.',
        question: 'El diagnóstico más probable es:',
        options: 'Las opciones: distonía; neuroléptico maligno; anticolinérgico; adrenérgico; o distrofia muscular de Duchenne. Piénsalo.',
        answer: 'Es la B. Dosis de haloperidol aumentada, más rigidez, fiebre, alteración de conciencia, leucocitosis y CPK elevada: neuroléptico maligno. La distonía no da fiebre ni baja la conciencia, y el anticolinérgico tiene midriasis y mucosas secas, no rigidez. Fíjate que aquí la CPK es solo moderada, mil doscientos, y aun así el diagnóstico es neuroléptico maligno: lo que decide es la tríada en el contexto del fármaco.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 9',
      stem: 'Un paciente de 78 años, con patologías psiquiátricas en tratamiento con diazepam, sertralina y clorpromazina, presenta un cuadro de 24 horas de evolución de confusión y desorientación, asociado a náuseas, vómitos y sudoración. Al examen físico tiene taquicardia de 115x’, hipertensión arterial de 170/110 mmHg, aumento del tono muscular, y sopor superficial. ¿Cuál es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Síndrome neuroléptico maligno' },
        { letter: 'B', text: 'Síndrome de discontinuación de antidepresivos inhibidores de la recaptura de serotonina' },
        { letter: 'C', text: 'Síndrome de privación de benzodiacepinas' },
        { letter: 'D', text: 'Síndrome serotoninérgico' },
        { letter: 'E', text: 'Síndrome anticolinérgico' },
      ],
      correct: 'D',
      explanation: 'Es una pregunta difícil. El diazepam da síndrome narcótico. La sertralina, síndrome serotoninérgico. La clorpromazina, síndrome neuroléptico maligno y síndrome anticolinérgico. La clínica sugiere síndrome serotoninérgico, que mezcla elementos del síndrome neuroléptico maligno (hipertonía, hipertermia y compromiso de conciencia), con el síndrome adrenérgico (HTA, taquicardia, hipertermia).',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecinueve. Un paciente de setenta y ocho años recibe diazepam, sertralina y clorpromazina. En veinticuatro horas desarrolla confusión, desorientación, náuseas, vómitos y sudoración. Tiene taquicardia, presión de ciento setenta sobre ciento diez, aumento del tono muscular y sopor superficial.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: neuroléptico maligno; discontinuación de antidepresivos; privación de benzodiacepinas; serotoninérgico; o anticolinérgico. Piénsalo.',
        answer: 'Es la D. Hay tres fármacos y la pregunta es difícil, porque la clorpromazina tienta con el neuroléptico maligno. Pero fíjate en el tiempo: veinticuatro horas, con vómitos, sudoración e hipertensión, y un inhibidor de la recaptura de serotonina como la sertralina. Un cuadro tan rápido y con esa activación autonómica orienta al serotoninérgico. El neuroléptico maligno suele instalarse más lento, con la rigidez plástica y la fiebre alta como protagonistas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 61',
      stem: 'Un paciente de 24 años, con antecedente de retraso mental severo, en tratamiento con clorpromazina, aumenta la dosis de 100 mg al día, a 300 mg al día. Evoluciona con mayor agresividad, asociada a retención urinaria y constipación. Al examen destacan mucosas secas y midriasis. El diagnóstico más probable es:',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Síndrome colinérgico' },
        { letter: 'B', text: 'Síndrome anticolinérgico' },
        { letter: 'C', text: 'Síndrome neuroléptico maligno' },
        { letter: 'D', text: 'Síndrome serotoninérgico' },
        { letter: 'E', text: 'Síndrome adrenérgico' },
      ],
      correct: 'B',
      explanation: 'Es un síndrome anticolinérgico clásico (compromiso de conciencia, retención urinaria, constipación, midriasis, sequedad de mucosas y taquicardia). El colinérgico tiene vómitos, miosis, bradicardia, temblor, contracturas musculares y dificultad respiratoria: ej. organofosforados). El neuroléptico maligno se caracteriza por compromiso de conciencia, hipertermia e hipertonía. El serotoninérgico tiene HTA, aumento del tono muscular, vasoconstricción periférica, compromiso de conciencia. El adrenérgico tiene HTA, taquicardia, hipertermia, midriasis, temblor.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil dieciséis. Un paciente de veinticuatro años con retraso mental severo recibe clorpromazina, y le suben la dosis de cien a trescientos miligramos al día. Evoluciona con más agresividad, retención urinaria y constipación. Tiene las mucosas secas y midriasis.',
        question: 'El diagnóstico más probable es:',
        options: 'Las opciones: colinérgico; anticolinérgico; neuroléptico maligno; serotoninérgico; o adrenérgico. Piénsalo.',
        answer: 'Es la B. Midriasis, mucosas secas, retención urinaria y constipación son el síndrome anticolinérgico, un efecto de la clorpromazina a dosis alta. El neuroléptico maligno tendría rigidez, fiebre y alteración de la conciencia. Y el colinérgico es lo contrario: miosis, vómitos y secreciones, como en los organofosforados.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un paciente ingresado en la UCI con diagnóstico de síndrome neuroléptico maligno grave persiste con temperatura de 40,2 °C y rigidez generalizada severa a pesar de 6 horas de suspensión de neurolépticos, enfriamiento físico e hidratación intensa. Se decide iniciar farmacoterapia específica de rescate. ¿Cuál de los siguientes esquemas farmacológicos es el indicado en esta situación?',
      question: '¿Cuál esquema es el indicado?',
      options: [
        { letter: 'A', text: 'Dantroleno sódico endovenoso y/o bromocriptina por sonda nasogástrica' },
        { letter: 'B', text: 'Flumazenil endovenoso en bolo continuo' },
        { letter: 'C', text: 'Naloxona subcutánea seriada' },
        { letter: 'D', text: 'Haloperidol en infusión continua de baja dosis' },
        { letter: 'E', text: 'Ciproheptadina oral exclusiva' },
      ],
      correct: 'A',
      explanation: 'En el neuroléptico maligno grave o refractario, los fármacos de rescate son el dantroleno endovenoso, que relaja el músculo, y la bromocriptina, agonista dopaminérgico. El flumazenil es para benzodiacepinas, la naloxona para opioides y la ciproheptadina para el serotoninérgico. El haloperidol está contraindicado porque es justo el fármaco que causa el cuadro.',
      say: {
        stem: 'Una pregunta de práctica del banco EUNACOM. Un paciente en la unidad de cuidados intensivos tiene un síndrome neuroléptico maligno grave y persiste con cuarenta coma dos grados de temperatura y rigidez severa, a pesar de seis horas con el neuroléptico suspendido, enfriamiento físico e hidratación intensa. Se decide usar farmacoterapia específica de rescate.',
        question: '¿Cuál esquema es el indicado?',
        options: 'Las opciones: dantroleno endovenoso y o bromocriptina por sonda; flumazenil; naloxona; haloperidol en infusión; o ciproheptadina sola. Piénsalo.',
        answer: 'Es la A. Dantroleno y bromocriptina son los dos fármacos de rescate. El flumazenil y la naloxona son antídotos de benzodiacepinas y opioides, y la ciproheptadina es del serotoninérgico. El haloperidol es la peor opción: es el fármaco que provocó el cuadro.',
      },
    },

    {
      type: 'points',
      kicker: 'Reglas de oro',
      title: 'Lo que te llevas',
      cards: [
        { title: 'Reconocer', tag: 'Diagnóstico', kind: 'key', items: [
          { t: 'Antipsicótico, fiebre, rigidez, CPK alta', d: 'Más conciencia alterada y disautonomía',
            say: 'Cerremos con las reglas de oro. Un antipsicótico recién iniciado o aumentado, con fiebre, rigidez en caño de plomo, disautonomía, conciencia alterada y CPK alta, es un síndrome neuroléptico maligno hasta demostrar lo contrario.' },
          { t: 'Hiperreflexia y clonus: serotoninérgico', d: 'Rigidez plástica sin clonus: SNM',
            say: 'Si hay hiperreflexia, clonus, diarrea y midriasis, es serotoninérgico. Si la rigidez es plástica y los reflejos son normales o bajos, es neuroléptico maligno. Y si ocurre en pabellón, tras un anestésico, es hipertermia maligna.' },
        ] },
        { title: 'Actuar', tag: 'Conducta', kind: 'alert', items: [
          { t: 'Suspender el antipsicótico primero', d: 'Nunca más haloperidol en ese momento',
            say: 'La primera medida siempre es suspender el antipsicótico, sin esperar exámenes y sin dar más haloperidol.' },
          { t: 'Hidratar, enfriar y unidad crítica', d: 'Rescate: bromocriptina y dantroleno',
            say: 'Después hidratación masiva para proteger el riñón, enfriamiento físico y traslado a unidad crítica, donde se usan bromocriptina y dantroleno si es grave. Si te llevas una sola idea de hoy: ante fiebre y rigidez con un antipsicótico, se suspende el fármaco y se hidrata. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Persona con antipsicótico, fiebre y rigidez: del reconocimiento al rescate',
    root: N('start', 'Antipsicótico, fiebre y rigidez', 'Dosis recién subida o iniciada',
      'Una persona en tratamiento con antipsicótico, con la dosis recién iniciada o aumentada, llega con fiebre, rigidez y alteración de la conciencia. Lo primero es decidir qué síndrome es, porque el tratamiento cambia.',
      ['Rigidez plástica, reflejos normales o bajos', N('alert', 'Neuroléptico maligno', 'Tétrada más CPK alta',
        'Si hay rigidez en caño de plomo, reflejos normales o disminuidos, disautonomía y CPK alta, es un síndrome neuroléptico maligno. Es una emergencia vital.',
        ['Primera medida', N('do', 'Suspender el antipsicótico', 'Y todo bloqueador D2',
          'Se suspende el antipsicótico de inmediato, y la metoclopramida, sin esperar los exámenes.',
          ['Soporte', N('do', 'Hidratar, enfriar, UPC', 'Suero fisiológico, diuresis alta',
            'Se traslada a unidad crítica, se hidrata con suero fisiológico buscando diuresis alta y se enfría de forma física.',
            ['Grave o refractario', N('ok', 'Bromocriptina y dantroleno', 'Rescate farmacológico',
              'Si la hipertermia y la rigidez persisten, se agregan bromocriptina y dantroleno endovenoso.')],
          )],
        )],
      )],
      ['Hiperreflexia, clonus, diarrea, midriasis', N('refer', 'Serotoninérgico', 'Fármaco serotoninérgico reciente',
        'Si hay hiperreflexia, clonus, diarrea y midriasis, con un antidepresivo o tramadol, es un síndrome serotoninérgico. Se suspende el fármaco, se dan benzodiacepinas y ciproheptadina.')],
      ['Fiebre en el pabellón tras un anestésico', N('refer', 'Hipertermia maligna', 'Dantroleno y suspender anestésico',
        'Si ocurre en minutos dentro de cirugía, tras un anestésico halogenado o succinilcolina, es una hipertermia maligna, que se trata con dantroleno.')],
      ['Midriasis, mucosas secas, sin rigidez', N('ok', 'Anticolinérgico', 'Bajar o cambiar el antipsicótico',
        'Si hay midriasis, mucosas secas y retención urinaria sin rigidez, es un síndrome anticolinérgico, y se maneja con soporte y ajustando el fármaco.')],
    ),
  },
};
