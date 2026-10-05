// Clase 17.6 (Psiquiatría) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_psiquiatria.cjs (psiq-06). Preguntas: banco real EUNACOM (class_questions.cjs y --search).
// El código de la clase (1.03.1.003) no tiene preguntas reales propias de pánico (las que salen son de tiroides); la psiquiatría real del banco está bajo 5.01.1.001 y 5.01.1.003. De la búsqueda por tema se usaron:
//   Julio 2019 P66 (crisis recurrentes más evitación: trastorno de pánico y agorafobia), Agosto 2021 P12 (tratamiento: ISRS, no clonazepam), Julio 2013 P67 (crisis aguda con ECG normal: lorazepam sublingual),
//   Julio 2013 P113 (crisis más miedo a salir: el diagnóstico es trastorno de pánico con agorafobia), Julio 2019 P103 (agorafobia en embarazo: ISRS, no benzodiacepina).
// No usadas: Diciembre 2018 P37, Agosto 2021 P132 y Enero 2023 P133 (mismo punto que Agosto 2021 P12: ISRS de primera línea); Julio 2015 P83 (mismo punto que Julio 2013 P67);
//   Diciembre 2017 P103 y Enero 2023 P134 (solo diagnóstico de pánico; ya cubierto); Julio 2017 P155 (agorafobia versus angustia, con correcta discutida por el propio explicador);
//   preguntas de fobia social (Julio 2025 P89, Julio 2024 P123, Julio 2016 P129, Julio 2015 P82, Julio 2013 P9, Julio 2016 P35, Diciembre 2024 P156) y de ansiedad generalizada (Diciembre 2017 P104): otras clases de ansiedad.
// Cuidado clínico: las benzodiacepinas se enseñan solo como rescate agudo o puente de 2 a 4 semanas, nunca como tratamiento de mantenimiento (el libro y el banco coinciden). No se enseña respirar en bolsa.
// Imágenes: ninguna (psiquiatría; no hay figura clínica útil en los libros extraídos).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'psiq-06',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Trastorno de pánico y agorafobia: descartar lo somático, ISRS y terapia cognitivo-conductual',
      say: 'Bienvenido. Hoy vemos el trastorno de pánico y la agorafobia. Es una causa muy frecuente de consulta en urgencias, porque el paciente llega aterrorizado creyendo que tiene un infarto. En el examen se repiten tres ideas: primero se descarta lo somático, segundo la benzodiacepina es solo para el rescate, y tercero el tratamiento de fondo son los inhibidores selectivos de la recaptación de serotonina, junto con terapia cognitivo-conductual.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'De la amígdala al miedo a morir',
      nodes: [
        { id: 'a', col: 0, row: 2, k: 'cause', t: 'Amígdala hiperreactiva', s: 'Circuito del miedo' },
        { id: 'b', col: 1, row: 2, k: 'mech', t: 'Locus coeruleus', s: 'Centro noradrenérgico pontino' },
        { id: 'c', col: 2, row: 2, k: 'effect', t: 'Descarga simpática', s: 'Palpitaciones, sudor, temblor' },
        { id: 'd', col: 3, row: 1, k: 'alert', t: 'Miedo a morir', s: 'Creen que es un infarto' },
        { id: 'e', col: 3, row: 3, k: 'mech', t: 'Hiperventilación', s: 'Alcalosis respiratoria' },
        { id: 'f', col: 4, row: 3, k: 'effect', t: 'Parestesias', s: 'Peribucales y en manos' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' }, { from: 'c', to: 'e' }, { from: 'e', to: 'f' },
      ],
      steps: [
        { show: ['a', 'b', 'c'], note: 'Una descarga simpática brusca',
          say: 'El ataque de pánico nace de un circuito del miedo hiperreactivo. La amígdala activa el locus coeruleus, que es el centro noradrenérgico del puente, y se produce una oleada simpática brusca: palpitaciones, sudor, temblor.' },
        { show: ['d', 'e', 'f'], note: 'Y el cuerpo lo refuerza',
          say: 'El paciente interpreta esos síntomas como una catástrofe y siente que va a morir. Además hiperventila, y la alcalosis respiratoria explica el hormigueo alrededor de la boca y en las manos. Por eso, enseñarle a respirar lento es parte del tratamiento. El pico llega en menos de diez minutos.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Ataque de pánico',
      title: 'Cuatro de trece síntomas',
      cards: [
        { title: 'Cuerpo: corazón y pecho', tag: 'Cardiorrespiratorio', kind: 'key', items: [
          { t: 'Palpitaciones, disnea, atragantamiento', d: 'Y dolor o molestia precordial',
            say: 'El manual DSM cinco define el ataque de pánico como miedo o malestar intenso de inicio súbito, con pico en pocos minutos, y al menos cuatro de trece síntomas. Los primeros son cardiorrespiratorios: palpitaciones o taquicardia, sensación de falta de aire o de atragantamiento, y dolor o molestia en el pecho.' },
        ] },
        { title: 'Cuerpo: autonómicos', tag: 'Simpático', kind: 'criteria', items: [
          { t: 'Sudor, temblor, mareo, náuseas', d: 'Escalofríos o calor, parestesias',
            say: 'Luego los síntomas autonómicos y neurológicos: sudoración, temblor, náuseas, mareo o sensación de desmayo, escalofríos o calor, y hormigueo o adormecimiento.' },
        ] },
        { title: 'Mente', tag: 'Cognitivos', kind: 'alert', items: [
          { t: 'Desrealización, despersonalización', d: 'Miedo a perder el control',
            say: 'Y los síntomas psicológicos: sensación de irrealidad o de separarse de uno mismo, y miedo a perder el control o a volverse loco.' },
          { t: 'Miedo inminente a morir', d: 'El más típico del cuadro',
            say: 'Y el más característico: el miedo inminente a morir. Cuando oigas que la paciente cree que se infarta pero el examen es normal, piensa en pánico.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico',
      title: 'De un ataque a un trastorno',
      nodes: [
        { id: 'a', col: 0, row: 2, k: 'start', t: 'Ataque de pánico', s: 'Un episodio aislado' },
        { id: 'b', col: 1, row: 2, k: 'effect', t: 'Ataques recurrentes', s: 'Imprevistos, sin gatillante' },
        { id: 'c', col: 2, row: 1, k: 'risk', t: 'Un mes de preocupación', s: 'Miedo a nuevas crisis' },
        { id: 'd', col: 2, row: 3, k: 'risk', t: 'Cambio de conducta', s: 'Evitar ejercicio, salir solo' },
        { id: 'e', col: 3, row: 2, k: 'alert', t: 'Trastorno de pánico', s: 'Uno u otro, por un mes' },
        { id: 'f', col: 4, row: 2, k: 'trap', t: 'Agorafobia', s: 'Evita lugares sin escape' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'b', to: 'd' }, { from: 'c', to: 'e' }, { from: 'd', to: 'e' }, { from: 'e', to: 'f', label: 'Si se extiende' },
      ],
      steps: [
        { show: ['a', 'b'], note: 'Un ataque aislado no basta',
          say: 'Tener un ataque de pánico no es tener trastorno de pánico. El trastorno exige ataques recurrentes e imprevistos, sin un desencadenante inmediato evidente.' },
        { show: ['c', 'd', 'e'], note: 'Más un mes de miedo o evitación',
          say: 'Además, tras al menos uno de los ataques tiene que haber pasado un mes con alguna de dos cosas: preocupación persistente por nuevas crisis o sus consecuencias, es decir ansiedad anticipatoria, o un cambio de conducta desadaptativo, como evitar el ejercicio o no salir solo.' },
        { show: ['f'], note: 'La evitación puede ser agorafobia',
          say: 'Y cuando esa evitación se generaliza a lugares donde escapar sería difícil, aparece la agorafobia. Muchas veces las dos van juntas, y se habla de pánico con agorafobia.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Agorafobia',
      title: 'Miedo a no poder escapar',
      cards: [
        { title: 'Qué es', tag: 'DSM-5', kind: 'criteria', items: [
          { t: 'Miedo en 2 o más situaciones', d: 'Transporte, espacios abiertos o cerrados',
            say: 'Es miedo o ansiedad intensa en dos o más de estas situaciones: transporte público, espacios abiertos como plazas o estacionamientos, sitios cerrados como tiendas o cines, hacer filas o estar en multitudes, o estar fuera de casa solo.' },
          { t: 'Temor a no poder escapar', d: 'O a no recibir ayuda',
            say: 'El motivo central es el temor a que escapar sea difícil o a no recibir ayuda si aparecen síntomas de pánico u otros incapacitantes.' },
        ] },
        { title: 'Cómo no confundirla', tag: 'Diferencial', kind: 'alert', items: [
          { t: 'No es fobia social', d: 'Allí el miedo es al juicio de otros',
            say: 'Ojo con la fobia social: allí el miedo es a ser juzgado o a hacer el ridículo ante otros. En la agorafobia el miedo es a quedar atrapado y sin ayuda.' },
          { t: 'Con pánico, se diagnostica pánico', d: 'La agorafobia es una complicación',
            say: 'Y cuando hay crisis de pánico recurrentes y además evitación, el diagnóstico que se prefiere es el trastorno de pánico con agorafobia. Esa fue la lógica de una pregunta real que veremos.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Descarte somático',
      title: 'Lo que puede parecer pánico',
      head: ['Cuadro', 'Pista clínica', 'Examen de descarte', 'Diferencia con pánico'],
      rows: [
        { cells: ['Pánico primario', 'Pico en menos de 10 min; miedo a morir', 'ECG y laboratorio normales', 'Ataques recurrentes con ansiedad anticipatoria'],
          say: 'El pánico primario tiene un pico en menos de diez minutos, miedo a morir, y un electrocardiograma y laboratorio normales. Lo marca la recurrencia con ansiedad anticipatoria.' },
        { cells: ['Síndrome coronario agudo', 'Dolor opresivo a mandíbula o brazo, sudor frío', 'ECG de 12 derivaciones y troponinas', 'Dura más de 20 a 30 minutos; factores de riesgo'],
          say: 'El síndrome coronario agudo da dolor retroesternal opresivo irradiado, con sudor frío. Se prolonga más de veinte a treinta minutos y aparece con esfuerzo o factores de riesgo. Se descarta con electrocardiograma y troponinas.' },
        { cells: ['Tromboembolismo pulmonar', 'Disnea súbita, dolor pleurítico, taquipnea', 'AngioTAC de tórax; dímero D', 'Hipoxemia marcada'],
          say: 'El tromboembolismo pulmonar trae disnea súbita sin explicación, dolor pleurítico y baja saturación. En el pánico la saturación es normal.' },
        { cells: ['Feocromocitoma', 'Cefalea, sudor y palpitaciones con HTA', 'Metanefrinas en plasma u orina', 'Crisis hipertensivas muy severas'],
          say: 'El feocromocitoma da la tríada de cefalea, sudor y palpitaciones, con crisis de hipertensión muy marcada. Se confirma con metanefrinas.' },
        { cells: ['Hipertiroidismo', 'Baja de peso, temblor, bocio, calor', 'TSH baja y T4 libre alta', 'Síntomas sostenidos entre episodios'],
          say: 'El hipertiroidismo cursa con pérdida de peso, temblor fino, bocio e intolerancia al calor. La ansiedad no remite entre episodios, y la TSH está baja.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Primer episodio',
      title: 'Descartar antes de rotular',
      cards: [
        { title: 'Exámenes iniciales', tag: 'Obligatorios', kind: 'key', items: [
          { t: 'ECG de 12 derivaciones', d: 'Arritmias, isquemia, QT largo',
            say: 'En todo paciente que consulta por primera vez con síntomas de pánico se descarta patología médica potencialmente letal. El electrocardiograma de doce derivaciones es obligatorio, y las troponinas si hay factores de riesgo o dolor atípico.' },
          { t: 'Glicemia capilar y saturación', d: 'Hipoglicemia e hipoxemia',
            say: 'Se mide la glicemia capilar para descartar una hipoglicemia, y la saturación para descartar hipoxemia.' },
          { t: 'TSH y, si hay sospecha, tóxicos', d: 'Hipertiroidismo; cocaína, cafeína, abstinencia',
            say: 'Se pide TSH para el hipertiroidismo, y se pregunta por cocaína, anfetaminas, exceso de cafeína y abstinencia de alcohol o benzodiacepinas.' },
        ] },
        { title: 'Otras causas a tener en mente', tag: 'Diferencial', kind: 'alert', items: [
          { t: 'Cardiovasculares y respiratorias', d: 'Arritmias, TEP, asma, neumotórax',
            say: 'Entre las causas cardiovasculares están el síndrome coronario, las arritmias paroxísticas y la miocardiopatía hipertrófica. Entre las respiratorias, el tromboembolismo, el asma y el neumotórax.' },
          { t: 'Endocrinas y metabólicas', d: 'Feocromocitoma, hipocalcemia',
            say: 'Y entre las endocrinas, el feocromocitoma y la hipocalcemia. Todo esto se piensa antes de rotular algo como ansiedad.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Crisis aguda',
      title: 'Manejo en urgencias',
      cards: [
        { title: 'Primero, sin fármacos', tag: 'Contención', kind: 'key', items: [
          { t: 'Contención verbal en un box tranquilo', d: 'Voz calmada y firme',
            say: 'Lo primero es contención verbal: un box silencioso, tono calmado y firme, y explicarle que sus síntomas son una descarga de ansiedad y que su corazón está sano.' },
          { t: 'Respiración diafragmática lenta', d: 'Revierte la hiperventilación',
            say: 'Se le guía una respiración diafragmática pausada, que corrige la hiperventilación y alivia el hormigueo.' },
        ] },
        { title: 'Si no cede', tag: 'Rescate', kind: 'pharma', items: [
          { t: 'Benzodiacepina de acción rápida', d: 'Lorazepam o clonazepam, sublingual u oral',
            say: 'Si la angustia es intolerable, se da una benzodiacepina de acción rápida por vía sublingual u oral. En el banco real la respuesta fue lorazepam sublingual, de uno a dos miligramos; el libro también acepta clonazepam, de medio a un miligramo.' },
          { t: 'Evitar vía parenteral', d: 'Salvo agitación extrema',
            say: 'Se desaconsejan las vías intramuscular y endovenosa, salvo agitación psicomotora extrema.' },
          { t: 'No sirve respirar en bolsa', d: 'Puede causar hipoxia',
            say: 'Y la antigua bolsa de plástico para respirar ya no se usa, porque puede producir hipoxia.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Mantenimiento',
      title: 'El ISRS parte con media dosis',
      nodes: [
        { id: 'a', col: 0, row: 2, k: 'start', t: 'ISRS en pánico', s: 'Sertralina o escitalopram' },
        { id: 'b', col: 1, row: 2, k: 'mech', t: 'Más serotonina al inicio', s: 'Estimulación 5-HT precoz' },
        { id: 'c', col: 2, row: 1, k: 'trap', t: 'Más ansiedad', s: 'Primeros días; paradójica' },
        { id: 'd', col: 2, row: 3, k: 'good', t: 'Empezar con media dosis', s: '1 a 2 semanas' },
        { id: 'e', col: 3, row: 3, k: 'good', t: 'Subir a dosis plena', s: 'Sertralina 25, luego 50' },
        { id: 'f', col: 4, row: 2, k: 'refer', t: 'Benzodiacepina puente', s: '2 a 4 semanas; retiro gradual' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'a', to: 'd' }, { from: 'd', to: 'e' }, { from: 'e', to: 'f' },
      ],
      steps: [
        { show: ['a', 'b', 'c'], note: 'Empeoramiento paradójico',
          say: 'Hay un fenómeno clásico: en los primeros días de un ISRS, el paciente con pánico puede sentir más ansiedad, más temblor y más palpitaciones, por una hipersensibilidad serotoninérgica inicial. Si no se le avisa, abandona el tratamiento.' },
        { show: ['d', 'e'], note: 'Titular lento',
          say: 'La regla es empezar con la mitad de la dosis habitual durante una a dos semanas, por ejemplo veinticinco miligramos de sertralina, y luego subir a la dosis plena, que parte en cincuenta.' },
        { show: ['f'], note: 'La benzodiacepina es solo un puente',
          say: 'Mientras el ISRS tarda en actuar, se puede usar una benzodiacepina como puente transitorio, de dos a cuatro semanas, con retiro gradual. Nunca como monoterapia permanente, porque produce tolerancia, dependencia y rebote.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento de fondo',
      title: 'ISRS y terapia cognitivo-conductual',
      cards: [
        { title: 'Fármacos', tag: 'Primera línea', kind: 'pharma', items: [
          { t: 'ISRS: sertralina, escitalopram', d: 'También paroxetina o venlafaxina',
            say: 'La primera línea son los inhibidores selectivos de la recaptación de serotonina, como sertralina, escitalopram y paroxetina, o el inhibidor dual venlafaxina. La sertralina es la que aparece una y otra vez en el banco real.' },
          { t: 'Benzodiacepina: solo puente', d: 'Nunca monoterapia continua',
            say: 'La benzodiacepina es un puente de pocas semanas. Dejar a la paciente solo con benzodiacepinas de forma permanente es un error clásico.' },
        ] },
        { title: 'Psicoterapia', tag: 'TCC', kind: 'key', items: [
          { t: 'Tan eficaz como el fármaco', d: 'Menos recaídas al suspender',
            say: 'La terapia cognitivo-conductual es tan eficaz como el fármaco y tiene menos recaídas después de suspender el tratamiento.' },
          { t: 'Psicoeducación y reestructuración', d: 'Pensamientos catastróficos',
            say: 'Incluye psicoeducación sobre el origen benigno de los síntomas, y reestructuración de los pensamientos catastróficos, como creer que el corazón acelerado significa un paro.' },
          { t: 'Exposición interoceptiva y en vivo', d: 'También para la agorafobia',
            say: 'Y la exposición: interoceptiva, provocando de forma controlada la hiperventilación o la taquicardia para romper el condicionamiento del miedo, y en vivo, acercándose de forma gradual a los lugares evitados.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Fármacos por fase',
      title: 'Crisis, puente y mantención',
      head: ['Fase', 'Fármaco', 'Dosis', 'Regla de oro'],
      rows: [
        { cells: ['Crisis aguda', 'Lorazepam o clonazepam', 'Lorazepam 1 a 2 mg SL; clonazepam 0,5 a 1 mg', 'Tras contención verbal; no EV de rutina'],
          say: 'En la crisis aguda, una benzodiacepina sublingual u oral después de la contención verbal. No se usa la vía endovenosa de rutina.' },
        { cells: ['Inicio de mantención', 'Sertralina o escitalopram', 'Sertralina 25 mg por 7 días, luego 50 mg', 'Titulación lenta'],
          say: 'En la mantención parte la sertralina con veinticinco miligramos durante una semana, luego cincuenta, con titulación lenta para evitar el empeoramiento paradójico.' },
        { cells: ['Alternativa', 'Paroxetina o venlafaxina', 'Paroxetina 10 y luego 20 a 40 mg; venlafaxina 75 a 150 mg', 'Más sedación o efecto noradrenérgico'],
          say: 'Como alternativas, paroxetina o venlafaxina, con mayor sedación o efecto noradrenérgico.' },
        { cells: ['Puente', 'Benzodiacepina a dosis baja', 'Clonazepam 0,5 mg cada 12 horas, 3 a 4 semanas', 'Retiro gradual hacia la semana 4 a 6'],
          say: 'El puente es una benzodiacepina a dosis baja durante las primeras semanas, mientras llega el efecto del ISRS, y se retira gradualmente.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la crisis en urgencias al tratamiento de fondo.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Primer episodio con dolor torácico', 'ECG y descartar lo somático', 'Rotular ansiedad sin examinar'],
          say: 'Primer episodio de síntomas de pánico: electrocardiograma y descarte médico antes de rotular. El error es llamarlo ansiedad sin examinar.' },
        { cells: ['Crisis aguda, ECG normal', 'Contención y lorazepam SL', 'Adenosina, morfina o intubar'],
          say: 'Crisis aguda con electrocardiograma normal: contención verbal y una benzodiacepina sublingual si no cede. La adenosina es para la taquicardia supraventricular, no para la taquicardia sinusal del pánico.' },
        { cells: ['Pánico recurrente', 'ISRS más TCC', 'Benzodiacepina en monoterapia'],
          say: 'Pánico recurrente: ISRS más terapia cognitivo-conductual. El error clásico es dejar benzodiacepinas solas.' },
        { cells: ['Empeora los primeros días con ISRS', 'Media dosis; explicar; puente', 'Duplicar o suspender'],
          say: 'Si empeora los primeros días con el ISRS, es un fenómeno esperable: se parte con media dosis, se explica y se usa un puente. No se duplica la dosis ni se abandona.' },
        { cells: ['Crisis recurrentes y miedo a salir', 'Pánico con agorafobia', 'Diagnosticar solo agorafobia'],
          say: 'Crisis recurrentes más evitación: trastorno de pánico con agorafobia. Si el miedo es al juicio de otros, es fobia social, otro cuadro.' },
        { cells: ['Agorafobia', 'TCC con exposición en vivo', 'Hospitalización prolongada'],
          say: 'Para la agorafobia, la psicoterapia de elección es la terapia cognitivo-conductual con exposición gradual en vivo.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 33 años llega a urgencias a las 02:00 AM. Hace 30 minutos, estando en su cama, sintió palpitaciones, opresión retroesternal, asfixia, hormigueo en ambas manos y la certeza de que moriría de un infarto. Está sudorosa y angustiada. PA 135/85, FC 115 regular, SatO2 99%, examen cardiopulmonar normal. ECG: taquicardia sinusal sin cambios de ST ni T. Troponinas negativas. Tuvo episodios idénticos hace 2 y 4 semanas y desde entonces no viaja en metro ni sale sola por miedo a otra crisis.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Alta con alprazolam cada 8 horas en forma indefinida' },
        { letter: 'B', text: 'Contención verbal, respiración lenta, benzodiacepina sublingual si no cede; luego ISRS a dosis baja y TCC' },
        { letter: 'C', text: 'Hospitalizar en cardiología por probable síndrome coronario' },
        { letter: 'D', text: 'Propranolol como tratamiento definitivo' },
        { letter: 'E', text: 'Haloperidol intramuscular' },
      ],
      correct: 'B',
      explanation: 'Trastorno de pánico con agorafobia: crisis recurrentes imprevistas con un mes de evitación. ECG y troponinas descartan un síndrome coronario. En urgencias, contención y respiración, y benzodiacepina sublingual si no cede. El tratamiento de fondo es ISRS, partiendo bajo, más TCC, con retiro programado de la benzodiacepina.',
      say: {
        stem: 'Una mujer de treinta y tres años llega a urgencias a las dos de la mañana. Hace treinta minutos, en su cama, sintió palpitaciones, opresión en el pecho, asfixia, hormigueo y la certeza de que moriría de un infarto. Está sudorosa y angustiada, con saturación normal y frecuencia de ciento quince. El electrocardiograma muestra solo taquicardia sinusal y las troponinas son negativas. Tuvo episodios idénticos hace dos y cuatro semanas, y desde entonces no sale sola.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: alta con alprazolam indefinido; contención, respiración y benzodiacepina sublingual, luego ISRS bajo y psicoterapia; hospitalizar por síndrome coronario; propranolol definitivo; o haloperidol intramuscular. Piénsalo.',
        answer: 'Es la B. Crisis recurrentes con evitación por un mes: pánico con agorafobia, y el electrocardiograma y las troponinas ya descartaron el infarto. En urgencias, contención, respiración y rescate sublingual. Para el largo plazo, ISRS partiendo bajo más terapia cognitivo-conductual. Dejar solo benzodiacepinas indefinidas es el error, el propranolol no trata el trastorno y el haloperidol no tiene lugar.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 66',
      stem: 'Una paciente presenta múltiples episodios de 5 minutos de duración, recurrentes, en los que presenta mucha angustia, llanto, sensación de ahogo, parestesias en las cuatro extremidades y marcado miedo a sufrir un infarto al corazón. Ya no sale de la casa por miedo a presentar uno de esos episodios en la calle. El diagnóstico más probable es:',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Trastorno de pánico' },
        { letter: 'B', text: 'Agorafobia' },
        { letter: 'C', text: 'Trastorno de angustia generalizada' },
        { letter: 'D', text: 'Trastorno de ansiedad social' },
        { letter: 'E', text: 'Crisis de pánico' },
      ],
      correct: 'A',
      explanation: 'Crisis de pánico recurrentes e inexplicadas: trastorno de pánico. Que ya no salga de su casa sugiere además agorafobia, pero predomina el diagnóstico de trastorno de pánico. "Crisis de pánico" es solo el episodio, no el trastorno.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecinueve. Una paciente con múltiples episodios recurrentes de cinco minutos, con mucha angustia, llanto, ahogo, hormigueo en las cuatro extremidades y miedo a sufrir un infarto. Ya no sale de casa por miedo a tener uno de esos episodios en la calle.',
        question: 'El diagnóstico más probable es:',
        options: 'Las opciones: trastorno de pánico; agorafobia; angustia generalizada; ansiedad social; o crisis de pánico. Piénsalo.',
        answer: 'Es la A. Hay episodios recurrentes con miedo a morir: trastorno de pánico. La evitación de salir sugiere además agorafobia, pero esa es una complicación y manda el pánico. La crisis de pánico es solo el episodio aislado, y la ansiedad generalizada es una preocupación constante, no episodios.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 113',
      stem: 'Una paciente de 36 años, sin antecedentes, consulta porque desde hace tres meses ha presentado varios episodios caracterizados por taquicardia, sudoración, dificultad para respirar, náuseas y sensación de muerte que tienen una duración de 30 minutos máximo y que ceden espontáneamente, por lo cual está muy preocupada, ya que dos de ellos le ocurrieron cuando se encontraba en una cafetería. Refiere que hace tres meses su pareja le pidió el divorcio en un restaurant, tras lo cual, intenta no salir de su hogar por miedo a que algo le ocurra y nadie la ayude. El diagnóstico más probable es:',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Trastorno por ansiedad social' },
        { letter: 'B', text: 'Trastorno adaptativo' },
        { letter: 'C', text: 'Trastorno por estrés post traumático' },
        { letter: 'D', text: 'Agorafobia' },
        { letter: 'E', text: 'Trastorno de ansiedad' },
      ],
      correct: 'E',
      explanation: 'Tiene un trastorno de pánico (ansiedad o angustia) con agorafobia. Se prefiere el diagnóstico de trastorno de pánico por ser más completo; la agorafobia es en este caso una consecuencia, y el pánico se clasifica con o sin agorafobia.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil trece. Una paciente de treinta y seis años, tres meses con varios episodios de taquicardia, sudor, falta de aire, náuseas y sensación de muerte, de hasta treinta minutos y que ceden solos. Dos le ocurrieron en una cafetería. Hace tres meses su pareja le pidió el divorcio en un restaurante, y desde entonces intenta no salir de casa por miedo a que algo le pase y nadie la ayude.',
        question: 'El diagnóstico más probable es:',
        options: 'Las opciones: ansiedad social; trastorno adaptativo; estrés postraumático; agorafobia; o trastorno de ansiedad, es decir, de pánico. Piénsalo.',
        answer: 'Es la E, el trastorno de pánico, que en la pregunta aparece como trastorno de ansiedad. Hay crisis recurrentes y evitación, o sea, pánico con agorafobia, y se prefiere el diagnóstico más completo. El estresor del divorcio tienta a pensar en adaptativo o estrés postraumático, pero las crisis recurrentes con miedo a morir mandan.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 67',
      stem: 'Una paciente de 24 años, sin antecedentes, consulta en urgencias por cuadro de inicio brusco caracterizado por sensación de falta de aire, dolor en hemitórax izquierdo, mareos, sudoración y adormecimiento de manos, de 30 minutos de duración. Al examen físico presenta frecuencia cardiaca 120 por minuto, presión arterial 140/90, cardiopulmonar normal. Se solicita electrocardiograma que muestra ritmo sinusal, QRS angosto, sin signos de isquemia. El fármaco de elección para el manejo en este caso es:',
      question: 'El fármaco de elección para el manejo en este caso es:',
      options: [
        { letter: 'A', text: 'Haloperidol' },
        { letter: 'B', text: 'Diazepam' },
        { letter: 'C', text: 'Lorazepam' },
        { letter: 'D', text: 'Fenitoína' },
        { letter: 'E', text: 'Clonazepam' },
      ],
      correct: 'C',
      explanation: 'Crisis de pánico con electrocardiograma normal. El fármaco de rescate de elección es lorazepam sublingual, de vida media más corta que diazepam y clonazepam.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil trece. Una paciente de veinticuatro años, sin antecedentes, llega a urgencias con inicio brusco de falta de aire, dolor en el hemitórax izquierdo, mareo, sudor y adormecimiento de las manos, de treinta minutos. Frecuencia de ciento veinte, presión de ciento cuarenta sobre noventa, examen cardiopulmonar normal y electrocardiograma con ritmo sinusal, sin isquemia.',
        question: 'El fármaco de elección para el manejo en este caso es:',
        options: 'Las opciones: haloperidol; diazepam; lorazepam; fenitoína; o clonazepam. Piénsalo.',
        answer: 'Es la C. Es una crisis de pánico con descarte cardíaco hecho, y para el rescate se usa una benzodiacepina de acción rápida y corta, lorazepam sublingual. Ojo con el matiz: esto es para la crisis aguda. Para evitar nuevas crisis el tratamiento es el ISRS, no la benzodiacepina. El haloperidol y la fenitoína no tienen indicación.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 12',
      stem: 'Una paciente de 28 años presenta un episodio de rápida instalación de marcada angustia y variados síntomas como disnea con “imposibilidad de sacar el aire”, vértigo, parestesias en las extremidades, imposibilidad de tragar, opresión en el pecho, náuseas, visión borrosa y miedo a morir. En las últimas 4 semanas ha presentado varios episodios similares, por lo que teme salir de su casa. Su examen físico es normal y los exámenes generales descartan patología orgánica. ¿Cuál es el tratamiento más adecuado para esta paciente?',
      question: '¿Cuál es el tratamiento más adecuado para esta paciente?',
      options: [
        { letter: 'A', text: 'Amitriptilina 25 mg/día' },
        { letter: 'B', text: 'Sertralina 50 mg/día' },
        { letter: 'C', text: 'Risperidona 3 mg/día' },
        { letter: 'D', text: 'Clonazepam 2 mg/día' },
        { letter: 'E', text: 'Clorpromazina 300 mg/día' },
      ],
      correct: 'B',
      explanation: 'Crisis de pánico recurrentes: trastorno de pánico, probablemente con agorafobia. El tratamiento principal es un ISRS. Las benzodiacepinas sirven como tratamiento sintomático, pero el ISRS es la base.',
      say: {
        stem: 'Una pregunta real del EUNACOM de agosto de dos mil veintiuno. Una paciente de veintiocho años con un episodio de instalación rápida, con angustia marcada, falta de aire, vértigo, hormigueo, dificultad para tragar, opresión en el pecho, náuseas, visión borrosa y miedo a morir. En las últimas cuatro semanas ha tenido varios episodios similares y teme salir de su casa. Examen y exámenes generales normales.',
        question: '¿Cuál es el tratamiento más adecuado para esta paciente?',
        options: 'Las opciones: amitriptilina; sertralina; risperidona; clonazepam; o clorpromazina. Piénsalo.',
        answer: 'Es la B. Son crisis de pánico recurrentes con temor a salir: trastorno de pánico con agorafobia. El tratamiento principal es un ISRS, como la sertralina. El clonazepam es la trampa: alivia síntomas, pero no es el tratamiento de fondo. Risperidona y clorpromazina son antipsicóticos sin indicación, y la amitriptilina ya no es de primera línea.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 103',
      stem: 'Una paciente de 31 años, embarazada de 3 meses, presenta angustia y temor, que aparece al estar en presencia de aglomeraciones de personas, especialmente en la calle, sintiéndose atrapada y ahogada en esas situaciones. Refiere síntomas similares al ir al supermercado y al tener que cruzar puentes muy largos, por lo que evita exponerse a esto y ha salido menos de su casa. ¿Cuál es el tratamiento de elección?',
      question: '¿Cuál es el tratamiento de elección?',
      options: [
        { letter: 'A', text: 'Diazepam' },
        { letter: 'B', text: 'Citalopram' },
        { letter: 'C', text: 'Clorpromazina' },
        { letter: 'D', text: 'Risperidona' },
        { letter: 'E', text: 'Mirtazapina' },
      ],
      correct: 'B',
      explanation: 'Es una agorafobia, que se trata con ISRS como los demás trastornos ansiosos crónicos. Las benzodiacepinas se intentan evitar en el embarazo.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecinueve. Una paciente de treinta y un años, embarazada de tres meses, con angustia y temor al estar entre aglomeraciones, sobre todo en la calle, donde se siente atrapada y ahogada. Algo similar en el supermercado y al cruzar puentes largos. Evita esas situaciones y sale menos de casa.',
        question: '¿Cuál es el tratamiento de elección?',
        options: 'Las opciones: diazepam; citalopram; clorpromazina; risperidona; o mirtazapina. Piénsalo.',
        answer: 'Es la B. Miedo a aglomeraciones y lugares de los que no puede escapar, con evitación: agorafobia. Se trata con un ISRS, y aquí el banco eligió citalopram. El diazepam es la trampa: las benzodiacepinas se intentan evitar en el embarazo. En el embarazo la elección del fármaco se decide junto con obstetricia.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: pánico y agorafobia',
      cards: [
        { title: 'Diagnóstico', tag: 'Criterios', kind: 'key', items: [
          { t: 'Crisis recurrentes más un mes', d: 'Miedo a nuevas crisis o evitación',
            say: 'Cerremos con las reglas de oro. El trastorno de pánico son crisis recurrentes e imprevistas, seguidas por al menos un mes de miedo a nuevas crisis o de evitación. La agorafobia es el miedo a no poder escapar.' },
          { t: 'Primer episodio: ECG y descarte somático', d: 'Antes de rotular ansiedad',
            say: 'En un primer episodio, siempre electrocardiograma y descarte médico antes de rotular.' },
        ] },
        { title: 'Conducta', tag: 'Tratamiento', kind: 'alert', items: [
          { t: 'Crisis: contención y lorazepam SL', d: 'Rescate acotado; sin vía EV de rutina',
            say: 'En la crisis, contención verbal, respiración lenta y, si no cede, una benzodiacepina sublingual como rescate acotado.' },
          { t: 'Fondo: ISRS y TCC', d: 'Benzodiacepina solo como puente',
            say: 'Y para el largo plazo, un ISRS partiendo con media dosis más terapia cognitivo-conductual, con la benzodiacepina solo como puente de dos a cuatro semanas. Si te llevas una sola idea de hoy: la benzodiacepina rescata, el ISRS con terapia cognitivo-conductual cura. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Síntomas de pánico: de la urgencia al tratamiento de fondo',
    root: N('start', 'Síntomas de pánico en urgencias', 'Palpitaciones, ahogo, miedo a morir',
      'Un paciente llega aterrorizado con palpitaciones, sensación de ahogo y miedo a morir. Partimos asegurando que no sea una causa somática.',
      ['Siempre', N('do', 'ECG y descarte somático', 'Glicemia, saturación, TSH, tóxicos',
        'Se pide electrocardiograma de doce derivaciones, glicemia capilar y saturación, y TSH y tóxicos si corresponde. Con dolor típico o factores de riesgo, troponinas.',
        ['Anormal', N('refer', 'Tratar la causa médica', 'Síndrome coronario, TEP, tiroides',
          'Si el electrocardiograma o los exámenes muestran isquemia, tromboembolismo u otra causa, se maneja esa causa y no se rotula como pánico.')],
        ['Normal', N('do', 'Contención y respiración lenta', 'Box tranquilo; explicar',
          'Contención verbal en un box tranquilo y respiración diafragmática lenta.',
          ['No cede', N('ok', 'Benzodiacepina sublingual', 'Lorazepam o clonazepam; rescate acotado',
            'Si la angustia sigue intolerable, una benzodiacepina de acción rápida por vía sublingual u oral.')],
          ['Crisis recurrentes con ansiedad anticipatoria', N('ok', 'ISRS más TCC', 'Media dosis al inicio; puente 2 a 4 semanas',
            'Se diagnostica trastorno de pánico, con agorafobia si hay evitación. Se inicia un ISRS a media dosis más terapia cognitivo-conductual, y la benzodiacepina solo como puente con retiro gradual.')],
        )],
      )],
    ),
  },
};
