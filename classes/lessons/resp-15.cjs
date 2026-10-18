// Clase 3.5 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neumologia.cjs (resp-15).
// Preguntas reales: banco EUNACOM (books/data/real_questions_by_code.json).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'resp-15',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Exudado linfocítico: el ADA separa la tuberculosis del cáncer, y la biopsia confirma',
      say: 'Bienvenidos. Cerramos el bloque de pleura volviendo al líquido. En la clase de derrame pleural aprendiste a separar transudado de exudado con los criterios de Light. Hoy damos el paso siguiente: qué hacer con un exudado de predominio linfocítico. Ahí el examen siempre te pone a elegir entre dos diagnósticos, tuberculosis y cáncer, y hay un número que casi siempre decide: el ADA.',
    },

    {
      type: 'flow',
      kicker: 'Enfrentamiento',
      title: 'Exudado linfocítico: dos sospechas',
      nodes: [
        { id: 'exu', col: 0, row: 1, k: 'start', t: 'Exudado por criterios de Light', s: 'Toracocentesis diagnóstica' },
        { id: 'lin', col: 1, row: 1, k: 'q', t: 'Más de 50 % linfocitos', s: 'Escasas células mesoteliales' },
        { id: 'tbc', col: 2, row: 0, k: 'cause', t: 'Tuberculosis pleural', s: 'Primera sospecha' },
        { id: 'neo', col: 2, row: 2, k: 'cause', t: 'Derrame neoplásico', s: 'Metástasis pleural' },
        { id: 'otr', col: 3, row: 1, k: 'mech', t: 'Más lejos: linfoma, AR', s: 'Pleuritis reumatoidea' },
      ],
      edges: [
        { from: 'exu', to: 'lin' }, { from: 'lin', to: 'tbc' }, { from: 'lin', to: 'neo' }, { from: 'lin', to: 'otr', label: 'menos frecuente' },
      ],
      steps: [
        { show: ['exu'], note: 'Partimos donde quedó la clase de derrame',
          say: 'Partamos donde quedamos. Puncionaste el derrame, y los criterios de Light te dicen que es un exudado. Eso ya descarta la insuficiencia cardíaca y los otros transudados.' },
        { show: ['lin'], note: 'El recuento celular orienta',
          say: 'El siguiente dato es el recuento celular. Si más de la mitad de las células son linfocitos, mononucleares, y hay escasas células mesoteliales, el diagnóstico diferencial se achica mucho.' },
        { show: ['tbc'], note: 'Tuberculosis: la primera sospecha',
          say: 'Se reduce fundamentalmente a dos enfermedades. La primera es la tuberculosis pleural.' },
        { show: ['neo'], note: 'Cáncer: la segunda',
          say: 'Y la segunda es el derrame neoplásico, por metástasis en la pleura. Esas dos son las que el examen te pone en las alternativas, casi siempre juntas.' },
        { show: ['otr'], note: 'Muy atrás: linfoma y pleuritis reumatoidea',
          say: 'Mucho más atrás quedan el linfoma y la pleuritis reumatoidea. Ahora veamos cómo separar las dos grandes.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Pleuritis tuberculosa',
      title: 'Por qué el bacilo no aparece y el ADA sí',
      nodes: [
        { id: 'foc', col: 0, row: 1, k: 'cause', t: 'Rotura de foco caseoso', s: 'Foco subpleural' },
        { id: 'hip', col: 1, row: 1, k: 'mech', t: 'Hipersensibilidad retardada', s: 'Reacción inmune, pocos bacilos' },
        { id: 'cli', col: 2, row: 0, k: 'effect', t: 'Joven con fiebre y dolor pleurítico', s: 'Y tos seca' },
        { id: 'bac', col: 2, row: 2, k: 'trap', t: 'Baciloscopía del líquido', s: 'Positiva en menos de 5–10 %' },
        { id: 'ada', col: 3, row: 1, k: 'good', t: 'ADA ≥ 40 U/L', s: 'Sensibilidad y especificidad > 90 %' },
        { id: 'bio', col: 4, row: 1, k: 'good', t: 'Biopsia pleural con aguja', s: 'Granulomas caseificantes > 80 %' },
      ],
      edges: [
        { from: 'foc', to: 'hip' }, { from: 'hip', to: 'cli' }, { from: 'hip', to: 'bac', label: 'paucibacilar' },
        { from: 'hip', to: 'ada' }, { from: 'ada', to: 'bio', label: 'confirma' },
      ],
      steps: [
        { show: ['foc'], note: 'Se rompe un foco bajo la pleura',
          say: 'Empecemos por la tuberculosis, y por el mecanismo, porque explica la pregunta más repetida. Todo parte cuando se rompe un foco caseoso que estaba justo bajo la pleura, y unos pocos bacilos llegan al espacio pleural.' },
        { show: ['hip'], note: 'El derrame es la respuesta inmune',
          say: 'Lo que produce el derrame no es la cantidad de bacilos, sino la reacción del paciente: una hipersensibilidad retardada, mediada por células. Por eso hay muchos linfocitos y muy pocos bacilos. Es un derrame paucibacilar.' },
        { show: ['cli'], note: 'Clínica típica',
          say: 'Clínicamente, es clásico en adultos jóvenes, con fiebre, tos seca y dolor pleurítico.' },
        { show: ['bac'], note: 'Trampa: la baciloscopía negativa no descarta',
          say: 'Y aquí está la trampa. Como hay tan pocos bacilos, la baciloscopía del líquido pleural sale positiva en menos del cinco a diez por ciento de los casos. Una baciloscopía negativa no descarta nada, y repetirla tampoco ayuda.' },
        { show: ['ada'], note: 'El marcador que decide',
          say: 'Lo que sí refleja esa reacción de linfocitos es la adenosina deaminasa, el ADA. Un ADA en el líquido pleural de cuarenta unidades por litro o más tiene sensibilidad y especificidad sobre el noventa por ciento para tuberculosis pleural en Chile. Ese corte, cuarenta, se pregunta.' },
        { show: ['bio'], note: 'Confirmación histológica',
          say: 'La confirmación estándar es la biopsia pleural con aguja, de Cope o de Abrams, que muestra granulomas con necrosis de caseificación en más del ochenta por ciento. Y el tratamiento es el esquema antituberculoso habitual, que vimos en la clase de tuberculosis. Con él, se resuelve por completo.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Derrame neoplásico',
      title: 'Cómo se confirma el derrame maligno',
      cards: [
        { title: 'Quién lo produce', tag: 'Metástasis pleural', kind: 'key', items: [
          { t: 'Adenocarcinoma de pulmón', d: 'También mama, linfoma y mesotelioma',
            say: 'Ahora el otro lado. El derrame neoplásico es la infiltración tumoral de la pleura. La causa más frecuente es el adenocarcinoma de pulmón, seguido por el cáncer de mama, el linfoma y el mesotelioma.' },
          { t: 'Adulto mayor, líquido serohemático', d: 'ADA bajo',
            say: 'Suele ser un adulto mayor, de más de cincuenta o sesenta años, con un líquido serohemático o francamente hemorrágico. Y el ADA está bajo, bajo cuarenta. Ese contraste con la tuberculosis es el que más se pregunta. Mira esta radiografía: un derrame neoplásico masivo, con el hemitórax casi blanco.',
            photo: { src: '_verificadas/342_resp_Derrame_linfocítico_TBC_vs_cán__nelsontext_p3358_1.jpg', label: 'Derrame neoplásico masivo', at: 'Mira esta radiografía', credit: 'Nelson Textbook of Pediatrics, p. 3358' } },
        ] },
        { title: 'Diagnóstico', tag: 'Paso a paso', kind: 'criteria', items: [
          { t: 'Citología del líquido', d: '60 % en la 1.ª muestra; 80–85 % con la 2.ª',
            say: 'El primer examen es la citología del líquido pleural. Detecta células malignas en cerca del sesenta por ciento con la primera muestra, y sube a ochenta u ochenta y cinco por ciento si la repites.' },
          { t: 'Citología negativa y sospecha: VATS', d: 'Biopsia pleural por videotoracoscopía',
            say: 'Y si la citología es negativa pero la sospecha persiste, el estándar definitivo es la biopsia pleural por videotoracoscopía, la VATS, que permite ver la pleura y biopsiar lo que se ve. Fíjate en la diferencia: en la tuberculosis basta la biopsia con aguja; en el cáncer, el estándar es la VATS.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Derrame maligno: el objetivo es paliar la disnea',
      cards: [
        { title: 'Por qué paliativo', tag: 'Estadio avanzado', kind: 'alert', items: [
          { t: 'M1a en el cáncer pulmonar', d: 'Ya es enfermedad avanzada',
            say: 'El manejo parte de un concepto. En el cáncer de pulmón, un derrame pleural maligno ya es enfermedad metastásica, M uno a. Por lo tanto, el objetivo no es curar el derrame, es aliviar la disnea.' },
        ] },
        { title: 'Opciones', tag: 'De menos a más', kind: 'pharma', items: [
          { t: 'Toracocentesis evacuadora', d: 'SOS, cuando da disnea',
            say: 'La opción más simple es la toracocentesis evacuadora cuando el derrame da disnea. El problema es que el derrame maligno vuelve a llenarse.' },
          { t: 'Pleurodesis con talco estéril', d: 'Sella el espacio pleural',
            say: 'Para el derrame que recidiva y da síntomas, la opción clásica es la pleurodesis química con talco estéril: inflama y pega las dos hojas de la pleura, y el líquido ya no tiene dónde acumularse. Es la misma idea que vimos en el neumotórax, ahora para el líquido.' },
          { t: 'Catéter pleural tunelizado', d: 'Drenaje en domicilio',
            say: 'La alternativa es un catéter pleural tunelizado permanente, que permite drenar el líquido en la casa del paciente.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Mesotelioma',
      title: 'El tumor primario de la pleura',
      cards: [
        { title: 'Qué es', tag: 'Asbesto', kind: 'key', items: [
          { t: 'Exposición a asbesto', d: 'Minería, construcción, astilleros, aislación',
            say: 'El mesotelioma pleural es el tumor primario de la pleura, y casi siempre hay exposición a asbesto: minería, construcción, astilleros, aislación. La latencia es larga, de veinte a cuarenta años. Mira esta tomografía: un engrosamiento pleural lobulado que rodea el pulmón.',
            photos: [{ src: 'biblioteca/02_neumologia/resp-15/10_mesotelioma-tc-engrosamiento-pleural__ctmri-atlas_p242.jpg', label: 'Mesotelioma en la TC', at: 'Mira esta tomografía', credit: 'CT and MRI Pathology atlas, p. 242' }] },
          { t: 'Derrame serohemático unilateral recurrente', d: 'Dolor, disnea, engrosamiento pleural nodular',
            say: 'Se presenta con dolor torácico y disnea, un derrame unilateral serohemático o hemorrágico que se repite, y engrosamiento pleural nodular o circunferencial en la TAC, con retracción del hemitórax.' },
        ] },
        { title: 'Diagnóstico', tag: 'Lo que se pregunta', kind: 'alert', items: [
          { t: 'La citología rinde poco', d: 'Se necesita biopsia pleural',
            say: 'La citología del líquido tiene bajo rendimiento. El diagnóstico exige biopsia pleural, toracoscópica o guiada por TAC, con inmunohistoquímica.' },
        ] },
        { title: 'Pronóstico y Perfil', tag: 'Qué haces tú', kind: 'pharma', items: [
          { t: 'Sobrevida promedio de 1 año', d: 'Solo se opera si es muy inicial',
            say: 'El pronóstico es malo, con una sobrevida promedio de un año, y solo se opera en etapas muy iniciales.' },
          { t: 'Sospecha y derivación; enfermedad profesional', d: 'Ley 16.744; manejo paliativo inicial',
            say: 'Tu nivel es sospecha y derivación al especialista. En Chile es una enfermedad profesional notificable, por la Ley dieciséis mil setecientos cuarenta y cuatro, y el manejo inicial es paliativo: toracocentesis, analgesia y pleurodesis.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Tuberculosis o cáncer: el ADA decide',
      images: [
        { src: 'animaciones/resp-15/A1_adA_tbc_cancer.mp4', label: 'Derrame linfocítico', credit: 'Ilustración: Servier Medical Art, CC BY 4.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Dos derrames linfocíticos, dos ADA',
          say: 'En la tuberculosis pleural, un foco bajo la pleura se rompe y llegan pocos bacilos, pero el paciente responde con muchos linfocitos. Por eso la baciloscopía rinde poco y el ADA sube sobre cuarenta. En el derrame neoplásico, el líquido es serohemático, hay células tumorales, y el ADA queda bajo cuarenta. La citología rinde cerca de sesenta por ciento, y si es negativa y la sospecha persiste, se hace VATS.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol de decisión, tal como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Tuberculosis pleural vs derrame neoplásico',
      head: ['Característica', 'Tuberculosis pleural', 'Derrame neoplásico'],
      rows: [
        { cells: ['Edad habitual', 'Joven', 'Mayor de 50–60 años'],
          say: 'Repasemos el contraste. La tuberculosis pleural es típica del joven, aunque también del adulto mayor; el derrame neoplásico, del mayor de cincuenta a sesenta años.' },
        { cells: ['Aspecto del líquido', 'Amarillo cetrino', 'Serohemático o hemorrágico'],
          say: 'El líquido tuberculoso es amarillo cetrino; el neoplásico, serohemático o hemorrágico.' },
        { cells: ['ADA pleural', '≥ 40 U/L', 'Bajo, < 40 U/L'],
          say: 'El dato clave: el ADA es de cuarenta o más en la tuberculosis, y bajo en el cáncer, salvo algunos linfomas.' },
        { cells: ['Baciloscopía / citología', 'Baciloscopía < 10 %', 'Citología positiva 60–80 %'],
          say: 'La baciloscopía rinde menos del diez por ciento en la tuberculosis; la citología encuentra células malignas en sesenta a ochenta por ciento de los derrames neoplásicos.' },
        { cells: ['Biopsia', 'Con aguja: granulomas', 'VATS: infiltración tumoral'],
          say: 'La biopsia: con aguja muestra los granulomas de la tuberculosis; por videotoracoscopía confirma la infiltración tumoral.' },
        { cells: ['Tratamiento', 'Esquema antituberculoso', 'Pleurodesis con talco o catéter'],
          say: 'Y el tratamiento: esquema antituberculoso en un caso; pleurodesis con talco o catéter tunelizado en el otro.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 34 años con 3 semanas de fiebre vespertina, dolor pleurítico derecho y baja de 2 kg. Radiografía: derrame pleural derecho. Toracocentesis: exudado con 85 % de linfocitos, glucosa 72 mg/dL, ADA 58 U/L. Baciloscopía del líquido negativa.',
      question: '¿Cuál es la conducta más adecuada para confirmar el diagnóstico?',
      options: [
        { letter: 'A', text: 'Repetir la baciloscopía del líquido en 3 muestras' },
        { letter: 'B', text: 'Biopsia pleural percutánea con aguja' },
        { letter: 'C', text: 'Citología del líquido pleural seriada' },
        { letter: 'D', text: 'Pleurodesis con talco' },
        { letter: 'E', text: 'Broncoscopía con lavado broncoalveolar' },
      ],
      correct: 'B',
      explanation: 'Exudado linfocítico con ADA 58 U/L (≥ 40) en un joven febril: pleuritis tuberculosa. La baciloscopía del líquido es positiva en menos del 10 % porque el derrame es paucibacilar; repetirla no ayuda. La confirmación es la biopsia pleural con aguja (granulomas caseificantes y cultivo).',
      say: {
        stem: 'Vamos con un caso. Hombre de treinta y cuatro años con tres semanas de fiebre en las tardes, dolor pleurítico derecho y baja de dos kilos. Tiene un derrame derecho. La punción muestra un exudado con ochenta y cinco por ciento de linfocitos y un ADA de cincuenta y ocho. La baciloscopía del líquido es negativa.',
        question: '¿Cuál es la conducta más adecuada para confirmar el diagnóstico?',
        options: 'Las alternativas: repetir la baciloscopía, biopsia pleural con aguja, citología seriada, pleurodesis con talco, o broncoscopía con lavado. Piénsalo.',
        answer: 'Es la B. Joven, febril, exudado linfocítico y ADA sobre cuarenta: pleuritis tuberculosa. La trampa es repetir la baciloscopía, porque es un derrame paucibacilar y rinde menos del diez por ciento, la repitas o no. La confirmación es la biopsia pleural con aguja, que muestra los granulomas. La pleurodesis es para el derrame maligno, no para este.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 116',
      stem: 'Un paciente de 68 años presenta tos de 4 meses de evolución, y disnea de esfuerzos. Al examen pulmonar tiene disminución del murmullo pulmonar a derecha, más matidez en la base derecha. Punción pleural con líquido claro, pH: 7,47, células: 70 por mm3, 80% mononucleares, ADA: 20 UI/L, LDH: 167 UI/L, colesterol: 119 mg/dl.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Insuficiencia cardíaca' },
        { letter: 'B', text: 'Tuberculosis pleural' },
        { letter: 'C', text: 'Empiema' },
        { letter: 'D', text: 'Cáncer bronquial' },
        { letter: 'E', text: 'Derrame secundario a artritis reumatoide' },
      ],
      correct: 'D',
      explanation: 'Aunque la LDH es baja, el colesterol mayor de 40 mg/dL lo clasifica como exudado. Exudado mononuclear con ADA bajo en un adulto mayor: cáncer. La insuficiencia cardíaca da un transudado; la tuberculosis y la artritis reumatoide dan exudados mononucleares con ADA alto; el empiema es un exudado polimorfonuclear.',
      say: {
        stem: 'Ahora preguntas reales. La primera es del EUNACOM de julio de dos mil diecinueve. Paciente de sesenta y ocho años con cuatro meses de tos y disnea de esfuerzos, con matidez en la base derecha. El líquido es claro, con ochenta por ciento de mononucleares, ADA de veinte, LDH de ciento sesenta y siete, y colesterol de ciento diecinueve.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: insuficiencia cardíaca, tuberculosis pleural, empiema, cáncer bronquial, o derrame por artritis reumatoide. Piénsalo.',
        answer: 'Es la D, cáncer bronquial. La parte difícil era ver que es un exudado: la LDH es baja, pero el colesterol sobre cuarenta lo clasifica como exudado. Y un exudado mononuclear con ADA de veinte, en un adulto mayor, es cáncer. La tuberculosis es el distractor, pero tendría el ADA alto. La insuficiencia cardíaca sería un transudado.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 87',
      stem: 'Un paciente de 56 años, fumador de 20 paquetes año, consulta por disnea progresiva de 2 meses de evolución, asociada a tos irritativa y compromiso del estado general. Sus signos vitales son FC: 88x’, PA: 130/80 mmHg, saturación 93% a FiO2 ambiental y al examen pulmonar presenta matidez y crépitos en la base derecha. Se solicita una radiografía de tórax, que muestra un derrame pleural moderado, a derecha, el que se confirma con la TAC de tórax. Se realiza toracocentesis, que da salida a un líquido pleural opalescente, con LDH: 700 UI/L, mayor a 0,6 en relación a la LDH plasmática y proteínas mayores a 0,5, en relación a las proteínas plasmáticas, con 40 células por mm3, 90% de mononucleares, ADA: 24 UI/L y citología negativa.',
      question: '¿Cuál es el examen más adecuado para proseguir el estudio?',
      options: [
        { letter: 'A', text: 'Biopsia pulmonar por videotoracoscopía' },
        { letter: 'B', text: 'Broncoscopía con biopsia pulmonar' },
        { letter: 'C', text: 'PET-TC' },
        { letter: 'D', text: 'Biopsia pleural por videotoracoscopía' },
        { letter: 'E', text: 'Broncoscopía con lavado bronquioalveolar' },
      ],
      correct: 'D',
      explanation: 'Exudado (cumple los criterios de Light), mononuclear, con ADA bajo: sugerente de cáncer. La citología es negativa y la imagen no muestra un tumor pulmonar: se biopsia la pleura, idealmente por videotoracoscopía.',
      say: {
        stem: 'La siguiente es del EUNACOM de diciembre de dos mil diecinueve. Fumador de cincuenta y seis años con dos meses de disnea progresiva y compromiso del estado general. Tiene un derrame derecho moderado. El líquido es un exudado por criterios de Light, con noventa por ciento de mononucleares, ADA de veinticuatro, y la citología es negativa.',
        question: '¿Cuál es el examen más adecuado para proseguir el estudio?',
        options: 'Las alternativas: biopsia pulmonar por videotoracoscopía, broncoscopía con biopsia, PET, biopsia pleural por videotoracoscopía, o broncoscopía con lavado. Piénsalo.',
        answer: 'Es la D, biopsia pleural por videotoracoscopía. Exudado mononuclear con ADA bajo: sospecha de cáncer. La citología fue negativa, y ya sabes que eso no descarta. El siguiente paso es biopsiar la pleura, que es donde está la enfermedad. Fíjate en la A: dice biopsia pulmonar, no pleural. Esa palabra es la trampa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 20',
      stem: 'Un paciente de 60 años, fumador de 5 cigarrillos al día, consulta por disnea de esfuerzos que ha aumentado en el último tiempo. Ha bajado de peso cerca de 6 kilogramos en los últimos 3 meses. Como antecedente, trabajó durante 30 años en una fábrica de producción de pizarras de asbesto para la construcción. Al examen físico presenta signos vitales normales, edema de extremidades inferiores, yugulares visibles al decúbito y examen pulmonar con MP presente, disminuido a derecha. Se solicita una radiografía de tórax que muestra derrame pleural marcado en el lado derecho, por lo que se realiza punción pleural, que da salida a líquido con 300 células por mm3, con 90% de mononucleares, ADA: 22 UI/L, proteínas: 6 g/dL, estudio citológico negativo, pH: 7,37, lactato: 3 mmol/L.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Carcinoma pavimentoso' },
        { letter: 'B', text: 'Adenocarcinoma' },
        { letter: 'C', text: 'Tuberculosis pleural' },
        { letter: 'D', text: 'Mesotelioma' },
        { letter: 'E', text: 'Silicosis' },
      ],
      correct: 'D',
      explanation: 'Exudado mononuclear con ADA bajo: derrame neoplásico. El antecedente de 30 años de exposición a asbesto se relaciona fuertemente con mesotelioma. La citología negativa no lo descarta.',
      say: {
        stem: 'Y la última, del EUNACOM de diciembre de dos mil diecisiete. Paciente de sesenta años con disnea progresiva y baja de seis kilos, que trabajó treinta años en una fábrica de pizarras de asbesto. Tiene un derrame derecho marcado: exudado con noventa por ciento de mononucleares, ADA de veintidós, y citología negativa.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: carcinoma pavimentoso, adenocarcinoma, tuberculosis pleural, mesotelioma o silicosis. Piénsalo.',
        answer: 'Es la D, mesotelioma. El líquido ya te dice cáncer: mononuclear y con ADA bajo. Pero la pista que elige entre los cánceres es el asbesto, que se relaciona fuertemente con el mesotelioma. El adenocarcinoma es el distractor tentador, porque es la causa más frecuente de derrame maligno, pero aquí la exposición manda.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.05.5.002 · Biopsia pleural",
      "stem": "Mujer de 68 años, exfumadora, con baja de peso y derrame pleural derecho recidivante. Dos toracocentesis muestran exudado linfocitario con ADA 18 U/L y citología negativa para células neoplásicas en ambas muestras. TAC de tórax: engrosamiento pleural nodular derecho.",
      "question": "¿Cuál es el procedimiento más adecuado para confirmar el diagnóstico?",
      "options": [
        {
          "letter": "A",
          "text": "Toracoscopía (pleuroscopía) con biopsia pleural dirigida"
        },
        {
          "letter": "B",
          "text": "Pleurodesis con talco sin diagnóstico histológico"
        },
        {
          "letter": "C",
          "text": "Tercera citología del líquido pleural"
        },
        {
          "letter": "D",
          "text": "Tratamiento antituberculoso empírico"
        },
        {
          "letter": "E",
          "text": "Marcadores tumorales en sangre"
        }
      ],
      "correct": "A",
      "explanation": "Ante sospecha de derrame neoplásico con 2 citologías negativas, una tercera rinde poco. La toracoscopía permite ver la pleura y biopsiar los nódulos bajo visión directa, con rendimiento superior a 90 % para neoplasia, y en el mismo acto hacer pleurodesis. El ADA bajo hace improbable la tuberculosis.",
      "say": {
        "stem": "Una mujer de sesenta y ocho años, exfumadora, con baja de peso, tiene un derrame pleural derecho que se repite. Dos punciones muestran un exudado linfocitario con adenosina deaminasa baja y citología negativa. La tomografía muestra engrosamiento pleural nodular.",
        "question": "¿Cuál es el procedimiento más adecuado para confirmar el diagnóstico?",
        "options": "Las opciones: toracoscopía con biopsia dirigida, pleurodesis sin diagnóstico, tercera citología, antituberculosos empíricos o marcadores tumorales. Piénsalo.",
        "answer": "Es la A. Con dos citologías negativas y pleura nodular, hay que ver y biopsiar directamente, y la toracoscopía lo logra en casi todos los cánceres pleurales. Tratar como tuberculosis tienta por ser un exudado linfocitario, pero la adenosina deaminasa baja casi la descarta."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.1.042 · Mesotelioma pleural",
      "stem": "Hombre de 68 años, que trabajó 25 años instalando aislantes de asbesto, consulta por disnea progresiva, dolor torácico sordo persistente y baja de peso de 3 meses. La radiografía muestra derrame pleural derecho y la TAC revela engrosamiento pleural nodular y circunferencial. El líquido pleural es un exudado hemático con citología negativa.",
      "question": "¿Cuál es el examen más adecuado para confirmar el diagnóstico?",
      "options": [
        {
          "letter": "A",
          "text": "Biopsia pleural por toracoscopía"
        },
        {
          "letter": "B",
          "text": "Repetir la citología del líquido pleural"
        },
        {
          "letter": "C",
          "text": "Fibrobroncoscopía"
        },
        {
          "letter": "D",
          "text": "Marcadores tumorales en sangre"
        },
        {
          "letter": "E",
          "text": "Adenosina deaminasa en líquido pleural"
        }
      ],
      "correct": "A",
      "explanation": "Exposición a asbesto con derrame unilateral y engrosamiento pleural nodular y circunferencial sugiere mesotelioma pleural maligno. La citología tiene baja sensibilidad para este tumor; el diagnóstico requiere histología con inmunohistoquímica, idealmente por biopsia pleural toracoscópica. La ADA orienta a tuberculosis pleural, que no explica el engrosamiento nodular.",
      "say": {
        "stem": "Hombre de sesenta y ocho años, que trabajó veinticinco años instalando aislantes de asbesto, con tres meses de disnea progresiva, dolor torácico sordo y baja de peso. Tiene derrame pleural derecho, la TAC muestra un engrosamiento pleural nodular que rodea el pulmón, y el líquido es un exudado hemático con citología negativa.",
        "question": "¿Cuál es el examen más adecuado para confirmar el diagnóstico?",
        "options": "Las opciones: biopsia pleural por toracoscopía, repetir la citología, fibrobroncoscopía, marcadores tumorales o adenosina deaminasa en el líquido. Piénsalo.",
        "answer": "Es la A. Asbesto más engrosamiento pleural nodular es un mesotelioma hasta demostrar lo contrario, y se confirma con histología obtenida por toracoscopía. Repetir la citología tienta, pero en el mesotelioma rinde muy poco y solo retrasa el diagnóstico."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'El enfrentamiento', tag: 'Exudado linfocítico', kind: 'key', items: [
          { t: 'Linfocitos > 50 %: TBC o cáncer', d: 'El ADA decide la sospecha',
            say: 'Cerremos con las reglas de oro. Todo exudado con más de la mitad de linfocitos te obliga a pensar en tuberculosis y en cáncer, y el ADA orienta cuál.' },
        ] },
        { title: 'Tuberculosis pleural', tag: 'ADA ≥ 40', kind: 'pharma', items: [
          { t: 'Baciloscopía negativa no descarta', d: 'Rinde menos de 10 %',
            say: 'En la tuberculosis, el ADA es de cuarenta o más, y la baciloscopía del líquido casi siempre sale negativa, porque es paucibacilar.' },
          { t: 'Confirma la biopsia con aguja', d: 'Granulomas caseificantes',
            say: 'Se confirma con biopsia pleural con aguja, y se trata con el esquema antituberculoso.' },
        ] },
        { title: 'Derrame neoplásico', tag: 'ADA bajo', kind: 'alert', items: [
          { t: 'Citología; si es negativa, VATS', d: 'Biopsia pleural, no pulmonar',
            say: 'En el derrame neoplásico, el ADA es bajo. Primero citología, y si es negativa con sospecha persistente, biopsia pleural por videotoracoscopía.' },
          { t: 'Paliativo: pleurodesis con talco', d: 'O catéter tunelizado',
            say: 'Y el manejo es paliativo: pleurodesis con talco o catéter tunelizado. Si te llevas una sola idea de hoy: exudado linfocítico con ADA alto es tuberculosis y se confirma con aguja; con ADA bajo es cáncer hasta demostrar lo contrario. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Exudado linfocítico: tuberculosis o cáncer',
    root: N('start', 'Exudado linfocítico', 'Light + más de 50 % linfocitos',
      'Punción pleural con un exudado por criterios de Light, y más de la mitad de las células son linfocitos. Piensas en tuberculosis y en cáncer.',
      ['', N('q', '¿ADA en líquido pleural?', 'Corte: 40 U/L',
          'El ADA decide la sospecha. El corte es cuarenta unidades por litro.',
          ['≥ 40 U/L', N('do', 'Pleuritis tuberculosa', 'Biopsia pleural con aguja',
            'ADA de cuarenta o más: pleuritis tuberculosa. No repitas la baciloscopía: confirmas con biopsia pleural con aguja y tratas con el esquema antituberculoso.')],
          ['Bajo', N('q', 'Sospecha de cáncer: ¿citología?', '60 % en la 1.ª muestra',
            'ADA bajo: sospecha de derrame neoplásico. Primero la citología del líquido.',
            ['Positiva', N('alert', 'Derrame maligno', 'Pleurodesis con talco o catéter',
              'Citología positiva: derrame maligno, enfermedad avanzada. El manejo es paliativo: pleurodesis con talco o catéter tunelizado.')],
            ['Negativa', N('refer', 'Biopsia pleural por VATS', 'Si la sospecha persiste',
              'Citología negativa con sospecha persistente: biopsia pleural por videotoracoscopía, el estándar definitivo.')])])]),
  },
};
