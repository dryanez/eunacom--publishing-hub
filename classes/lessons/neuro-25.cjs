// Clase 10.25 (Neurología y Geriatría) — guion docente escrito a mano (estándar Módulo 1). Tema nuevo de hueco del Perfil V3.
// Fuente clínica: books/scripts/neurologia_extra/c.cjs (neuro-25, tema 10.25, tier 3). Códigos 1.07.1.009 (HTA en el adulto mayor) y
// 1.07.2.002 (evento coronario en el adulto mayor) según books/data/v3_codemap.json (Dx específico/sospecha · Tx completo/inicial · Seg completo).
// Preguntas reales (class_questions.cjs neuro-25 no trae códigos; búsqueda por tema y verificación en el banco real):
// Diciembre 2017 P65 (85 años con 145/75: mantener), Julio 2016 P55 (BCRI nuevo: reperfusión), Diciembre 2018 P7 (urgencia hipertensiva).
// Enunciados y alternativas tomados del banco real, no de las fechas del libro (el libro de neurología no trae reconstrucciones).
// No usadas: Julio 2025 P96 (IAM con SDST en hospital sin angioplastia con centro a 60 minutos: la clave dice trombolisis inmediata, pero la
// explicación del banco la condiciona a un traslado mayor de 120 minutos; con 60 minutos el libro indica angioplastia primaria: se anota
// como discrepancia), Diciembre 2022 P38 (87 años con edema bimaleolar por amlodipino: la clave dice cambiar enalapril por losartán, que no
// resuelve un edema por calcioantagonista), Julio 2017 P110 (síncope con soplo: estenosis aórtica, otra clase) y las de dolor torácico lancinante
// (disección aórtica, otra clase).
// Fotos: retinopatía hipertensiva (Harrison, ya en la carpeta de la clase) y dos ECG de IAM con supradesnivel (ECG from Basics to Essentials,
// ejemplos 28 y 11). La clase no usa fotos de ortostatismo ni de pseudohipertensión: no hay figura local.
// En movimiento: scenes/neuro_nuevas.html (?v=coronaria) sobre Blausen "Coronary Circulation (Anterior)", CC BY 3.0.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'neuro-25',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Hipertensión arterial y evento coronario en el adulto mayor: metas distintas, presentación atípica y reperfusión sin prejuicio por la edad',
      say: 'Bienvenido. Cerramos el bloque de geriatría con el corazón y los vasos del adulto mayor, y la clase tiene dos mitades. En la primera, la hipertensión: el anciano tiene una hipertensión distinta, con metas individualizadas y el riesgo del ortostatismo. En la segunda, el infarto, que en el adulto mayor muchas veces no duele. El examen pregunta tres cosas: la meta de presión, qué fármacos evitar, y no dejar pasar un infarto atípico.',
    },

    {
      type: 'points',
      kicker: 'Hipertensión en el adulto mayor',
      title: 'Diagnóstico: predomina la sistólica aislada',
      cards: [
        { title: 'Definición', tag: 'GES número 1 desde los 15 años', kind: 'key', items: [
          { t: 'PA ≥ 140/90 en dos o más controles', d: 'Dos o más tomas por control',
            say: 'La hipertensión se define como una presión de ciento cuarenta sobre noventa o más, en dos o más tomas, en dos o más controles. Es una condición GES desde los quince años, y se maneja en el Programa de Salud Cardiovascular de la atención primaria.' },
          { t: 'Hipertensión sistólica aislada', d: 'PAS ≥ 140 con PAD < 90, pulso amplio',
            say: 'Con la edad, las grandes arterias se rigidizan. Por eso en el anciano predomina la hipertensión sistólica aislada, con la sistólica desde ciento cuarenta y la diastólica bajo noventa, y una presión de pulso amplia.' },
          { t: 'Más de 70% de los mayores de 65', d: 'Principal factor de riesgo modificable',
            say: 'Afecta a más de setenta por ciento de los mayores de sesenta y cinco años, y es el principal factor de riesgo modificable de accidente cerebrovascular, insuficiencia cardíaca, fibrilación auricular y demencia vascular.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Hipertensión en el adulto mayor',
      title: 'Medir bien antes de tratar',
      cards: [
        { title: 'Medición correcta', tag: 'En el anciano se mide también de pie', kind: 'criteria', items: [
          { t: 'Sentado, 5 min de reposo, 2 tomas', d: 'Brazalete adecuado, promedio',
            say: 'La medición correcta es con el paciente sentado y en reposo cinco minutos, con el brazalete adecuado, dos mediciones y su promedio.' },
          { t: 'De pie al minuto 1 y 3', d: 'Hipotensión ortostática en ~20%',
            say: 'En el anciano se mide también de pie, al minuto uno y al minuto tres, para detectar la hipotensión ortostática, que está presente en cerca de veinte por ciento.' },
          { t: 'Pseudohipertensión', d: 'Arterias calcificadas · signo de Osler',
            say: 'Se descarta la pseudohipertensión: arterias tan calcificadas que no se colapsan con el brazalete, con signo de Osler positivo. Y el efecto de bata blanca se aclara con monitoreo ambulatorio de la presión o con automedición en casa.' },
        ] },
        { title: 'Antes de tratar', tag: 'Qué más se busca', kind: 'alert', items: [
          { t: 'Daño de órgano blanco', d: 'Fondo de ojo, ECG, creatinina, proteinuria',
            say: 'Se busca el daño de órgano blanco: fondo de ojo, electrocardiograma, creatinina y proteinuria. Mira este fondo de ojo de una retinopatía hipertensiva: el disco óptico está borroso, hay hemorragias y exudados algodonosos. Es el cerebro y la retina contando cuánto lleva dañando la presión.',
            photo: { src: 'biblioteca/09_neurologia/neuro-25/01_retinopatia_hipertensiva__harrison_p263.jpg', label: 'Retinopatía hipertensiva', at: 'Mira este fondo de ojo', credit: 'Harrison 21.ª ed., Fig. 32-7, p. 263' } },
          { t: 'Causas secundarias', d: 'Apnea, estenosis de arteria renal, AINE, corticoides',
            say: 'Y las causas secundarias: apnea del sueño, estenosis de la arteria renal por ateroesclerosis, y fármacos como los antiinflamatorios no esteroidales, los corticoides y los descongestionantes.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento de la hipertensión',
      title: 'Metas individualizadas',
      cards: [
        { title: 'Según el paciente', tag: 'Lo más preguntado', kind: 'key', items: [
          { t: 'Autovalente: < 140/90', d: '65-79 años: PAS 130-139 si lo tolera',
            say: 'La meta depende del paciente. En el adulto mayor autovalente se busca menos de ciento cuarenta sobre noventa, y hasta una sistólica de ciento treinta a ciento treinta y nueve entre los sesenta y cinco y los setenta y nueve años, si lo tolera.' },
          { t: '> 80 años o frágil: PAS 140-150', d: 'No bajar PAS < 120 ni PAD < 60',
            say: 'En los mayores de ochenta años, los frágiles o los que tienen ortostatismo, la meta es menos estricta: una sistólica de ciento cuarenta a ciento cincuenta, y se evita bajar la sistólica de ciento veinte o la diastólica de sesenta.' },
        ] },
        { title: 'Por qué tratar', tag: 'Incluso después de los 80', kind: 'criteria', items: [
          { t: 'Baja ACV, IC y mortalidad', d: 'Estudio HYVET',
            say: 'Tratar la hipertensión sistólica aislada reduce el accidente cerebrovascular, la insuficiencia cardíaca y la mortalidad, incluso después de los ochenta años. Esa es la evidencia del estudio HYVET.' },
          { t: 'Start low, go slow', d: 'Dosis baja y subir lento',
            say: 'La regla de oro es empezar con dosis baja y subir lento. En inglés se resume en start low, go slow.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento de la hipertensión',
      title: 'Fármacos: qué usar y qué evitar',
      cards: [
        { title: 'Medidas no farmacológicas', tag: 'Siempre', kind: 'normal', items: [
          { t: 'Sal < 5 g/día, dieta DASH', d: 'Ejercicio, bajar de peso, moderar alcohol',
            say: 'Siempre parten las medidas no farmacológicas: menos de cinco gramos de sal al día, dieta DASH, actividad física, baja de peso y moderar el alcohol.' },
        ] },
        { title: 'Primera línea', tag: 'Dosis baja', kind: 'pharma', items: [
          { t: 'Tiazida o afín', d: 'HCTZ 12,5-25 mg · hiponatremia, hipoK, ↑ úrico',
            say: 'De primera línea: los diuréticos tiazídicos o afines, como la hidroclorotiazida de doce coma cinco a veinticinco miligramos, la clortalidona o la indapamida. El riesgo es hiponatremia, hipopotasemia e hiperuricemia.' },
          { t: 'IECA o ARA II', d: 'Control de creatinina y K a 1-2 semanas',
            say: 'Los inhibidores de la enzima convertidora o los antagonistas del receptor de angiotensina, como enalapril y losartán. Se controlan la creatinina y el potasio a la semana o a las dos semanas.' },
          { t: 'Amlodipino', d: 'Calcioantagonista dihidropiridínico · edema',
            say: 'Y el amlodipino, un calcioantagonista dihidropiridínico, que da edema de tobillos como efecto adverso.' },
        ] },
        { title: 'Evitar', tag: 'Criterios de Beers', kind: 'alert', items: [
          { t: 'Alfa-bloqueadores, clonidina, metildopa', d: 'Hipotensión, sedación',
            say: 'Se evitan los alfa-bloqueadores, la clonidina y la metildopa, por los criterios de Beers. Los betabloqueadores no son de primera línea, salvo insuficiencia cardíaca, infarto previo, angina o fibrilación auricular.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento de la hipertensión',
      title: 'Seguimiento y crisis hipertensiva',
      cards: [
        { title: 'Seguimiento', tag: 'Completo', kind: 'criteria', items: [
          { t: 'Control cada 1-3 meses', d: 'Luego cada 3-6 meses',
            say: 'El seguimiento es completo: control cada uno a tres meses hasta lograr la meta, y después cada tres a seis meses.' },
          { t: 'Creatinina, K y glicemia al año', d: 'Riesgo cardiovascular global',
            say: 'Se piden creatinina, potasio y glicemia una vez al año, se evalúa el riesgo cardiovascular global, y se revisan la adherencia y las interacciones, porque la polifarmacia es la norma en esta edad.' },
        ] },
        { title: 'Crisis hipertensiva', tag: 'Daño agudo o no', kind: 'alert', items: [
          { t: 'Urgencia: sin daño agudo', d: 'Bajar en horas o días con fármacos orales',
            say: 'La crisis hipertensiva se divide por el daño agudo. En la urgencia no lo hay, y la presión se baja en horas a días con fármacos orales. La hipertensión sin síntomas ni daño agudo no es una urgencia, y no se baja de forma brusca.' },
          { t: 'Emergencia: con daño agudo', d: 'Encefalopatía, SCA, EPA, disección',
            say: 'En la emergencia sí hay daño agudo: encefalopatía, síndrome coronario agudo, edema pulmonar o disección aórtica. Se hospitaliza y se usa tratamiento endovenoso.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Evento coronario en el adulto mayor',
      title: 'El infarto que no duele',
      cards: [
        { title: 'Presentación atípica', tag: 'Hasta 1/3 de los > 75 años sin dolor', kind: 'alert', items: [
          { t: 'Disnea súbita, síncope, caída', d: 'Fatiga inexplicada',
            say: 'Pasamos a la segunda mitad. El síndrome coronario agudo es una causa principal de muerte y de pérdida de funcionalidad en el adulto mayor, y su presentación suele ser atípica. Hasta un tercio de los mayores de setenta y cinco años no tiene dolor torácico, y consulta por disnea súbita, síncope o presíncope, una caída, o fatiga inexplicada.' },
          { t: 'Náuseas, dolor epigástrico, delirium', d: 'Un delirium puede ser el único síntoma',
            say: 'Otros consultan por náuseas o dolor epigástrico, o por un delirium, que puede ser el único síntoma. Por eso, ante cualquier síntoma sugerente, el infarto se descarta con un electrocardiograma y no con la historia.' },
        ] },
        { title: 'Qué cambia en el anciano', tag: 'Peor pronóstico', kind: 'criteria', items: [
          { t: 'Más infarto sin supradesnivel', d: 'Más IC, arritmias y complicaciones mecánicas',
            say: 'Hay más infarto sin supradesnivel del ST, más insuficiencia cardíaca, más arritmias y más complicaciones mecánicas.' },
          { t: 'Comorbilidad', d: 'Diabetes, ERC, anemia, deterioro cognitivo',
            say: 'Y mucha comorbilidad: diabetes, enfermedad renal, anemia y deterioro cognitivo, que complican el diagnóstico y el tratamiento.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Evento coronario en el adulto mayor',
      title: 'Sospecha: ECG en menos de 10 minutos',
      cards: [
        { title: 'Qué se pide', tag: 'Sin demora', kind: 'key', items: [
          { t: 'ECG de 12 derivaciones < 10 min', d: 'Repetir cada 15-30 min si persiste el síntoma',
            say: 'La conducta es fija: electrocardiograma de doce derivaciones en menos de diez minutos, repetido cada quince a treinta minutos si es dudoso y el síntoma persiste. Mira cómo se ve un infarto anterior agudo, por oclusión de la arteria descendente anterior: el segmento ST sube con una convexidad hacia arriba en las derivaciones precordiales.',
            photo: { src: 'biblioteca/09_neurologia/neuro-25/02_ecg-iam-anterior-sdst__ecg_p188.jpg', label: 'IAM anterior con SDST', at: 'Mira cómo se ve', credit: 'ECG from Basics to Essentials, ejemplo 28' } },
          { t: 'Troponina ultrasensible seriada', d: 'Se interpreta el cambio (delta)',
            say: 'Se piden troponinas ultrasensibles seriadas. En el anciano pueden estar elevadas crónicamente, por enfermedad renal o insuficiencia cardíaca, así que importa el cambio, el delta, y no solo el valor.' },
        ] },
        { title: 'Otros diagnósticos', tag: 'Descartar', kind: 'criteria', items: [
          { t: 'TEP, disección, neumonía', d: 'Pericarditis, patología esofágica',
            say: 'Se descartan otras causas de dolor o disnea: tromboembolismo pulmonar, disección aórtica, neumonía, pericarditis y patología esofágica.' },
          { t: 'La edad no justifica no estudiar', d: 'Ni no tratar',
            say: 'Y una regla ética y clínica: la edad avanzada por sí sola no justifica omitir el estudio ni el tratamiento.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo inicial',
      title: 'Monitor, aspirina y traslado',
      cards: [
        { title: 'Lo que haces tú', tag: 'Manejo inicial', kind: 'pharma', items: [
          { t: 'Monitor, vía venosa', d: 'Saturación y signos vitales',
            say: 'El manejo inicial es tuyo: monitorización, vía venosa y toma de signos vitales y saturación.' },
          { t: 'Aspirina 250-500 mg masticada', d: 'Si no hay contraindicación',
            say: 'Aspirina, doscientos cincuenta a quinientos miligramos, masticada, si no hay contraindicación. Se agrega un segundo antiagregante y anticoagulación según el protocolo.' },
          { t: 'Oxígeno solo si SatO₂ < 90%', d: 'Morfina en dosis bajas si persiste dolor',
            say: 'El oxígeno solo si la saturación es menor de noventa por ciento. Si persiste el dolor, morfina en dosis bajas, con riesgo de depresión respiratoria y de delirium.' },
        ] },
        { title: 'Nitroglicerina', tag: 'Con cuidado', kind: 'alert', items: [
          { t: 'Sublingual si hay dolor y la PA lo permite', d: 'No en IAM de VD, hipotensión, sildenafilo',
            say: 'La nitroglicerina sublingual se usa si hay dolor y la presión lo permite. No se da en el infarto del ventrículo derecho, con hipotensión, ni si usa inhibidores de la fosfodiesterasa.' },
          { t: 'Trasladar a unidad coronaria', d: 'Centro con hemodinamia',
            say: 'Y se traslada a un centro con unidad coronaria.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Reperfusión',
      title: 'IAM con supradesnivel del ST: GES número 5',
      cards: [
        { title: 'Reperfusión urgente', tag: 'SDST o BRI nuevo', kind: 'key', items: [
          { t: 'Angioplastia primaria < 90 min', d: 'Desde el primer contacto',
            say: 'El infarto con supradesnivel del ST, o con un bloqueo de rama izquierda nuevo, tiene GES número cinco, y la reperfusión es urgente. La angioplastia primaria, en menos de noventa minutos desde el primer contacto, es de elección. Mira un infarto inferior, con supradesnivel en las derivaciones dos, tres y aVF: son las derivaciones donde se mira esta oclusión.',
            photo: { src: 'biblioteca/09_neurologia/neuro-25/03_ecg-iam-inferior-sdst__ecg_p179.jpg', label: 'IAM inferior con SDST', at: 'Mira un infarto inferior', credit: 'ECG from Basics to Essentials, ejemplo 11' } },
          { t: 'Trombólisis si no hay hemodinamia en 120 min', d: 'Tenecteplasa o estreptoquinasa',
            say: 'Si la angioplastia no está disponible en ciento veinte minutos, se hace trombólisis, con tenecteplasa o estreptoquinasa, en las primeras horas.' },
        ] },
        { title: 'Ajustes por edad', tag: 'Lo que cambia en el anciano', kind: 'alert', items: [
          { t: '> 75 años: mitad de dosis de tenecteplasa', d: 'Sin bolo de enoxaparina',
            say: 'En los mayores de setenta y cinco años se usa la mitad de la dosis de tenecteplasa y se evita el bolo de enoxaparina, por el riesgo de hemorragia intracraneal. La enoxaparina va a cero coma setenta y cinco miligramos por kilo cada doce horas.' },
          { t: 'Función renal para anticoagular', d: 'Clearance < 30: 1 mg/kg cada 24 h',
            say: 'Y la dosis de enoxaparina se ajusta a la función renal: con un clearance bajo treinta mililitros por minuto, un miligramo por kilo cada veinticuatro horas.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Seguimiento posinfarto',
      title: 'Prevención secundaria y objetivos de cuidado',
      cards: [
        { title: 'Fármacos', tag: 'Seguimiento completo', kind: 'pharma', items: [
          { t: 'Doble antiagregación hasta 12 meses', d: 'Más corta si el riesgo de sangrado es alto',
            say: 'El seguimiento es completo. Doble antiagregación hasta por doce meses, más corta si el riesgo de sangrado es alto, con protección gástrica.' },
          { t: 'Estatina de alta intensidad', d: 'Betabloqueador, IECA o ARA II',
            say: 'Estatina de alta intensidad, betabloqueador, y un IECA o un ARA dos, sobre todo si hay disfunción ventricular o diabetes.' },
        ] },
        { title: 'Más allá del fármaco', tag: 'Lo que también se pregunta', kind: 'criteria', items: [
          { t: 'Rehabilitación cardíaca', d: 'Cese del tabaco, vacunación, control de PA, DM y LDL',
            say: 'Rehabilitación cardíaca, cese del tabaco, vacunación, y control estricto de la presión, la diabetes y el LDL. Se pesquisan también la depresión y el declive funcional.' },
          { t: 'Fragilidad y preferencias', d: 'Plan de cuidados acordado',
            say: 'Y las decisiones consideran la fragilidad, la expectativa de vida y las preferencias del paciente, con un plan de cuidados acordado.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Tiempo es músculo: la arteria ocluida',
      images: [
        { src: 'animaciones/neuro-25/A1_oclusion_coronaria_reperfusion.mp4', label: 'Oclusión de la descendente anterior y reperfusión', credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Se cierra la arteria, sube el ST, se muere el músculo',
          say: 'Mira el corazón y su arteria descendente anterior. Un trombo la ocluye, el flujo se detiene, y el músculo que irriga se va oscureciendo: es isquemia, y cada minuto cuenta. El electrocardiograma lo delata con el supradesnivel del ST. Por eso hay una meta de tiempo: angioplastia en menos de noventa minutos, o trombólisis si no hay hemodinamia en ciento veinte. Al reabrir la arteria, el flujo vuelve y el ST baja. Y esto vale también para el anciano.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del adulto mayor con presión elevada o con un síntoma sugerente, a la conducta.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'HTA e infarto en el adulto mayor: dato, decisión, error',
      head: ['Situación', 'Conducta', 'Error típico'],
      rows: [
        { cells: ['HTA sistólica aislada', 'Tiazida, IECA/ARA II o amlodipino en dosis baja; sal < 5 g', 'Bajar la PAS < 120 o provocar ortostatismo'],
          say: 'Hipertensión sistólica aislada: tiazida, IECA o ARA dos, o amlodipino, en dosis baja, y sal bajo cinco gramos. El error es bajar demasiado la sistólica, bajo ciento veinte, o provocar ortostatismo.' },
        { cells: ['85 años, PA 145/75 con tratamiento', 'Mantener: meta PAS 140-150', 'Intensificar el tratamiento'],
          say: 'Un paciente de ochenta y cinco años con ciento cuarenta y cinco sobre setenta y cinco en tratamiento está en meta. El error es intensificar.' },
        { cells: ['PA elevada sin síntomas ni daño agudo', 'Fármacos orales, en horas o días', 'Bajarla de golpe, como emergencia'],
          say: 'La presión muy elevada sin síntomas ni daño agudo es una urgencia, no una emergencia. Fármacos orales, sin bajarla de golpe.' },
        { cells: ['Alfa-bloqueador, clonidina, metildopa', 'Evitar (Beers)', 'Indicarlos como primera línea'],
          say: 'Alfa-bloqueadores, clonidina y metildopa se evitan por los criterios de Beers.' },
        { cells: ['Disnea, síncope, caída o delirium', 'ECG < 10 min y troponinas seriadas', 'Descartar el infarto por no haber dolor'],
          say: 'Una disnea, un síncope, una caída o un delirium en el anciano pueden ser un infarto. Electrocardiograma en diez minutos y troponinas seriadas. El error es descartar el infarto porque no hay dolor.' },
        { cells: ['SDST o BRI nuevo', 'AAS + reperfusión: ACTP < 90 min o trombólisis', 'Esperar la troponina o negarla por la edad'],
          say: 'Supradesnivel del ST o bloqueo de rama izquierda nuevo: aspirina y reperfusión de inmediato. Esperar la troponina o negar la reperfusión por la edad es el error.' },
        { cells: ['> 75 años en trombólisis', 'Mitad de dosis de tenecteplasa; sin bolo de enoxaparina', 'Dosis plena: hemorragia intracraneal'],
          say: 'Si es mayor de setenta y cinco y se trombolisa, mitad de dosis de tenecteplasa y sin bolo de enoxaparina. Dosis plena aumenta el riesgo de hemorragia intracraneal.' },
        { cells: ['Hipotensión o IAM de VD', 'Sin nitroglicerina', 'Nitrato sublingual de rutina'],
          say: 'Con hipotensión, infarto del ventrículo derecho o uso de sildenafilo, no se da nitroglicerina.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 82 años, con diabetes e hipertensión, vive con su hija. Consulta por 3 horas de malestar general, náuseas y sensación de falta de aire; no refiere dolor torácico. Está sudorosa y confusa. PA 105/65 mmHg, FC 98 lpm, saturación 93%. Toma enalapril, metformina y un diurético.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'ECG de 12 derivaciones en menos de 10 minutos, troponinas seriadas, aspirina masticada y monitorización' },
        { letter: 'B', text: 'Tratar como gastroenteritis con hidratación y observación en domicilio' },
        { letter: 'C', text: 'Descartar infarto por la ausencia de dolor y estudiar el delirium en forma ambulatoria' },
        { letter: 'D', text: 'Nitroglicerina sublingual y controlar la PA en una hora' },
        { letter: 'E', text: 'Suspender el estudio coronario por la edad y dejar tratamiento sintomático' },
      ],
      correct: 'A',
      explanation: 'Sospecha de síndrome coronario agudo con presentación atípica (disnea, náuseas y delirium en una anciana diabética): se hace un ECG de 12 derivaciones en menos de 10 minutos, se piden troponinas seriadas, se administra aspirina masticada y se monitoriza. Si hay supradesnivel del ST, se traslada para reperfusión urgente (GES N° 5). No se descarta el infarto por la ausencia de dolor ni se posterga el estudio por la edad. Se evitan los nitratos si hay hipotensión o infarto del ventrículo derecho.',
      say: {
        stem: 'Una mujer de ochenta y dos años, con diabetes e hipertensión, consulta por tres horas de malestar general, náuseas y falta de aire, sin dolor torácico. Está sudorosa y confusa, con presión de ciento cinco sobre sesenta y cinco, frecuencia cardíaca de noventa y ocho y saturación de noventa y tres por ciento. Toma enalapril, metformina y un diurético.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: electrocardiograma en menos de diez minutos, troponinas seriadas, aspirina masticada y monitor; tratarla como gastroenteritis; descartar infarto por la falta de dolor; nitroglicerina sublingual; o suspender el estudio por la edad. Piénsalo.',
        answer: 'Es la A. Disnea, náuseas y delirium en una anciana diabética son un infarto atípico mientras no se demuestre lo contrario. Electrocardiograma en diez minutos, troponinas seriadas, aspirina y monitor. La C tienta, pero la ausencia de dolor no descarta el infarto, y la D es peligrosa con una presión de ciento cinco. Y la edad nunca justifica dejar de estudiar.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 65',
      stem: 'Un paciente de 85 años, hipertenso, está en tratamiento con losartán 50 mg/12 horas y amlodipino 2,5 mg/día. Acude a control y refiere múltiples tomas de presión arterial, las que promedian 145/75 mmHg.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Aumentar la dosis de losartán a 100 mg/12 horas' },
        { letter: 'B', text: 'Aumentar el amlodipino a 5 mg/día' },
        { letter: 'C', text: 'Agregar atenolol 12,5 mg/día' },
        { letter: 'D', text: 'Agregar hidroclorotiazida 25 mg/día' },
        { letter: 'E', text: 'Mantener el tratamiento' },
      ],
      correct: 'E',
      explanation: 'Por su edad está bien controlado: en los mayores de 80 años la meta es menos estricta (PAS 140-150 mmHg) y se evita bajar la PAS de 120 o la PAD de 60. Intensificar el tratamiento solo agrega riesgo de hipotensión y ortostatismo.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecisiete. Un paciente de ochenta y cinco años, hipertenso, toma losartán y amlodipino en dosis bajas. Refiere múltiples tomas de presión que promedian ciento cuarenta y cinco sobre setenta y cinco.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: aumentar el losartán; aumentar el amlodipino; agregar atenolol; agregar hidroclorotiazida; o mantener el tratamiento. Piénsalo.',
        answer: 'Es la E. Con ochenta y cinco años la meta de sistólica es de ciento cuarenta a ciento cincuenta, y este paciente ya está ahí. Cualquier aumento solo agrega riesgo de hipotensión y de ortostatismo. La A y la D tientan porque la sistólica pasa de ciento cuarenta, pero esa es la meta de un adulto autovalente más joven, no de un octogenario.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 55',
      stem: 'Paciente de 63 años, fumador y diabético, que hace una hora comienza con dolor torácico opresivo, intenso, que se irradia a cuello, con diaforesis y sensación de angustia. Se solicita un electrocardiograma, que muestra ritmo sinusal, a 80 lpm, con bloqueo completo de rama izquierda, que no se había visualizado en electrocardiogramas previos.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Solicitar enzimas cardíacas' },
        { letter: 'B', text: 'Solicitar angiografía pulmonar' },
        { letter: 'C', text: 'Solicitar ecocardiograma transesofágico' },
        { letter: 'D', text: 'Instalar marcapaso externo transitorio' },
        { letter: 'E', text: 'Iniciar terapia de reperfusión miocárdica precoz' },
      ],
      correct: 'E',
      explanation: 'El bloqueo completo de rama izquierda nuevo es equivalente al supradesnivel del ST en el manejo del infarto: se debe reperfundir de inmediato, idealmente con angioplastia o con trombólisis si la angioplastia no está disponible en el plazo indicado (< 90 min desde el primer contacto; hasta 120 min si se requiere traslado).',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil dieciséis. Un paciente de sesenta y tres años, fumador y diabético, tiene desde hace una hora un dolor torácico opresivo e intenso, con diaforesis. El electrocardiograma muestra un bloqueo completo de rama izquierda que no estaba en trazados previos.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: pedir enzimas cardíacas; una angiografía pulmonar; un ecocardiograma transesofágico; instalar un marcapaso externo; o iniciar reperfusión miocárdica precoz. Piénsalo.',
        answer: 'Es la E. Un bloqueo de rama izquierda nuevo, con un dolor típico, equivale a un supradesnivel del ST: se reperfunde de inmediato, con angioplastia o con trombólisis si no hay hemodinamia a tiempo. La A tienta, porque las enzimas se piden igual, pero esperarlas retrasa la reperfusión y cada minuto cuenta.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 7',
      stem: 'Una paciente de 75 años, con antecedente de hipertensión arterial y diabetes, en tratamiento con metformina, glibenclamida, hidroclorotiazida y enalapril consulta por un cuadro de cefalea y malestar general. Refiere que sus presiones arteriales habituales son cercanas a 150/90 mmHg. Al examen físico presenta PA: 200/105 mmHg, FC: 73 x’, con examen pulmonar normal.',
      question: '¿Cuál es el tratamiento del cuadro actual?',
      options: [
        { letter: 'A', text: 'Nifedipino sublingual' },
        { letter: 'B', text: 'Nitroglicerina sublingual' },
        { letter: 'C', text: 'Nitroprusiato endovenoso' },
        { letter: 'D', text: 'Captopril oral' },
        { letter: 'E', text: 'Labetalol endovenoso' },
      ],
      correct: 'D',
      explanation: 'Presión muy elevada sin daño agudo de órgano blanco (examen pulmonar normal, sin signos neurológicos ni cardíacos): urgencia hipertensiva. Se baja la presión en horas a días con un fármaco oral, como el captopril; no se usan fármacos endovenosos ni se baja de golpe.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil dieciocho. Una paciente de setenta y cinco años, hipertensa y diabética, consulta por cefalea y malestar general. Su presión habitual es de ciento cincuenta sobre noventa, y hoy tiene doscientos sobre ciento cinco, con examen pulmonar normal.',
        question: '¿Cuál es el tratamiento del cuadro actual?',
        options: 'Las opciones: nifedipino sublingual; nitroglicerina sublingual; nitroprusiato endovenoso; captopril oral; o labetalol endovenoso. Piénsalo.',
        answer: 'Es la D. Una presión muy elevada, sin daño agudo de órgano blanco, es una urgencia hipertensiva, y se baja en horas a días con un fármaco oral. El nitroprusiato y el labetalol endovenoso tientan porque la cifra impresiona, pero son para la emergencia, con daño agudo. Y el nifedipino sublingual baja la presión de golpe, justo lo que se evita en el anciano.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: HTA e infarto en el adulto mayor',
      cards: [
        { title: 'Hipertensión', tag: 'Metas y fármacos', kind: 'key', items: [
          { t: 'Meta < 140/90; > 80 años o frágil: PAS 140-150', d: 'No bajar PAS < 120 ni PAD < 60',
            say: 'Cerremos con las reglas de oro. En la hipertensión, la meta es menos de ciento cuarenta sobre noventa en el autovalente, y una sistólica de ciento cuarenta a ciento cincuenta en el mayor de ochenta o frágil, sin bajar de ciento veinte.' },
          { t: 'Dosis baja, subir lento', d: 'Tiazida, IECA/ARA II, amlodipino',
            say: 'Se parte con dosis baja y se sube lento, con tiazida, IECA o ARA dos, o amlodipino. Se evitan los alfa-bloqueadores, la clonidina y la metildopa. Y se mide la presión también de pie.' },
        ] },
        { title: 'Evento coronario', tag: 'Lo que se pregunta', kind: 'alert', items: [
          { t: 'Disnea, síncope, caída o delirium: ECG', d: 'En menos de 10 minutos',
            say: 'El infarto del anciano suele ser atípico. Ante disnea, síncope, caída, náuseas o delirium, electrocardiograma en menos de diez minutos y troponinas seriadas.' },
          { t: 'SDST o BRI nuevo: reperfusión', d: 'ACTP < 90 min o trombólisis < 120 min',
            say: 'Con supradesnivel o bloqueo de rama izquierda nuevo, reperfusión urgente: angioplastia en menos de noventa minutos, o trombólisis si no hay hemodinamia en ciento veinte, con mitad de dosis de tenecteplasa sobre los setenta y cinco años.' },
          { t: 'La edad no contraindica', d: 'Ajustar a función renal, sangrado y fragilidad',
            say: 'Se ajusta la anticoagulación a la función renal y se acuerdan los objetivos de cuidado según la fragilidad y las preferencias. Si te llevas una sola idea de hoy: en el adulto mayor, la presión se trata con metas individualizadas y suavidad, pero un infarto atípico se estudia y se reperfunde sin prejuicio por la edad. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Adulto mayor: presión elevada o síntoma sugerente de infarto',
    root: N('start', 'Adulto mayor con presión elevada o síntoma sugerente', 'Disnea, síncope, caída, delirium o PA ≥ 140/90',
      'El adulto mayor llega con una presión elevada o con un síntoma que sugiere un evento coronario: dolor torácico, pero también disnea súbita, síncope, una caída, náuseas, fatiga o un delirium. Primero separas el síntoma sugerente de la presión sola.',
      ['Síntoma sugerente', N('alert', 'ECG < 10 min y troponinas seriadas', 'Monitor, vía y aspirina masticada',
        'Con un síntoma sugerente, aunque no haya dolor, haces un electrocardiograma en menos de diez minutos, pides troponinas seriadas, monitorizas y das aspirina masticada. Y te preguntas si hay supradesnivel del ST o un bloqueo de rama izquierda nuevo.',
        ['SDST o BRI nuevo', N('refer', 'Reperfusión urgente', 'ACTP < 90 min o trombólisis; GES número 5',
          'Si lo hay, es un infarto con supradesnivel: reperfusión urgente. Angioplastia primaria en menos de noventa minutos, o trombólisis si no hay hemodinamia en ciento veinte, con mitad de dosis de tenecteplasa sobre los setenta y cinco años.')],
        ['Sin SDST, troponina o ECG dinámico', N('refer', 'Hospitalizar con monitor', 'AAS, anticoagulante, estrategia invasiva según riesgo',
          'Sin supradesnivel, pero con troponina elevada o electrocardiograma dinámico, hospitalizas en unidad coronaria o con monitor, con aspirina y anticoagulante, y una estrategia invasiva según el riesgo.')],
      )],
      ['PA ≥ 140/90 en 2 controles', N('q', 'Medir sentado y de pie', 'Pseudohipertensión, ortostatismo y daño de órgano',
        'Si es solo una presión elevada, la mides sentado y de pie, descartas pseudohipertensión y bata blanca, y buscas daño de órgano blanco y causas secundarias.',
        ['Con síntomas o daño agudo', N('refer', 'Emergencia hipertensiva', 'Hospitalizar, tratamiento endovenoso',
          'Si hay encefalopatía, síndrome coronario, edema pulmonar o disección, es una emergencia hipertensiva: hospitalizas y usas tratamiento endovenoso.')],
        ['Sin daño agudo', N('do', 'Tratar con meta individualizada', 'Dosis baja; tiazida, IECA/ARA II o amlodipino',
          'Sin daño agudo, fijas una meta individualizada, menos de ciento cuarenta sobre noventa en el autovalente y una sistólica de ciento cuarenta a ciento cincuenta en el mayor de ochenta o frágil. Partes con dosis baja de tiazida, IECA o ARA dos, o amlodipino, y subes lento.',
          ['Control en 1-3 meses', N('ok', 'Seguimiento', 'Cada 3-6 meses al lograr la meta',
            'Controlas cada uno a tres meses hasta lograr la meta y luego cada tres a seis, vigilando el ortostatismo, la creatinina y el potasio.')],
        )],
      )],
    ),
  },
};
