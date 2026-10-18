// Clase 3.2 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neumologia.cjs (resp-12).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'resp-12',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuándo basta el antibiótico y cuándo el tubo pleural no puede esperar',
      say: 'Bienvenidos. En la clase anterior vimos que un exudado con neutrófilos es, casi siempre, un derrame paraneumónico. Hoy lo miramos de cerca, porque es una de las preguntas que más discrimina en el EUNACOM: decidir si a ese paciente con neumonía y derrame le basta el antibiótico, o necesita un tubo de drenaje ya. Y esa decisión se toma con un número: el pH.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Tres fases de un mismo derrame',
      nodes: [
        { id: 'neu', col: 0, row: 1, k: 'cause', t: 'Neumonía bacteriana', s: 'Hasta 40% de las hospitalizadas' },
        { id: 'f1', col: 1, row: 1, k: 'good', t: 'Fase exudativa', s: 'No complicado: estéril, pH > 7,20' },
        { id: 'f2', col: 2, row: 1, k: 'risk', t: 'Fase fibrinopurulenta', s: 'Complicado: bacterias, pH < 7,20' },
        { id: 'tab', col: 2, row: 3, k: 'effect', t: 'Fibrina: tabiques', s: 'Loculaciones' },
        { id: 'f3', col: 3, row: 1, k: 'alert', t: 'Fase de organización', s: 'Coraza pleural: pulmón atrapado' },
      ],
      edges: [
        { from: 'neu', to: 'f1', label: 'permeabilidad' }, { from: 'f1', to: 'f2', label: 'invaden bacterias' },
        { from: 'f2', to: 'tab' }, { from: 'f2', to: 'f3', label: 'fibroblastos' },
      ],
      steps: [
        { show: ['neu'], note: 'Frecuente: hasta 4 de cada 10',
          say: 'Partamos por el mecanismo, porque explica cada criterio que vas a memorizar. El derrame paraneumónico es el exudado que acompaña a una neumonía bacteriana, a un absceso pulmonar o a bronquiectasias infectadas. Y es frecuente: aparece en hasta el cuarenta por ciento de las neumonías hospitalizadas.' },
        { show: ['f1'], note: 'Líquido estéril: basta el antibiótico',
          say: 'Primera fase, la exudativa. La pleura vecina al foco neumónico se vuelve permeable y deja pasar líquido, pero ese líquido es estéril: claro, con neutrófilos, pH sobre siete coma veinte, glucosa normal, sobre sesenta, y LDH bajo mil. Este es el derrame no complicado, y se resuelve solo con el antibiótico de la neumonía.' },
        { show: ['f2'], note: 'Las bacterias consumen glucosa y producen ácido',
          say: 'Segunda fase, la fibrinopurulenta. Ahora las bacterias invaden el espacio pleural. Los neutrófilos se lisan, y el metabolismo anaerobio consume la glucosa y produce ácido láctico. Por eso el pH cae bajo siete coma veinte, la glucosa baja de cuarenta a sesenta, y la LDH sube sobre mil. Este es el derrame complicado.' },
        { show: ['tab'], note: 'Por qué el tiempo importa',
          say: 'Y en esta misma fase se depositan gruesas bandas de fibrina que forman tabiques y loculaciones. Esto es lo que vuelve urgente el drenaje: mientras más se espera, más compartimentos, y menos drena un tubo.' },
        { show: ['f3'], note: 'Ya no basta un tubo',
          say: 'Tercera fase, la de organización. Los fibroblastos forman una coraza rígida, el peel pleural, que atrapa el pulmón e impide que se reexpanda. En esta etapa ya no basta un tubo: se necesita cirugía.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Definiciones',
      title: 'Complicado y empiema no son lo mismo',
      cards: [
        { title: 'Empiema pleural', tag: 'Se ve o se tiñe', kind: 'alert', items: [
          { t: 'Pus macroscópico franco', d: 'Se ve al puncionar',
            say: 'Dos definiciones que el examen separa. El empiema, en sentido estricto, se define por pus franco, visible al puncionar.' },
          { t: 'O Gram o cultivo positivos', d: 'Bacterias demostradas en el líquido',
            say: 'O bien por demostrar bacterias en el líquido, con una tinción de Gram o un cultivo positivos. Basta uno de los dos.' },
        ] },
        { title: 'Derrame complicado', tag: 'Lo dice la bioquímica', kind: 'criteria', items: [
          { t: 'Sin pus visible', d: 'Pero no resolverá con antibióticos',
            say: 'El derrame complicado, en cambio, puede verse claro o apenas turbio. Lo que lo define es la bioquímica, que predice que no se va a resolver con antibióticos solos y que va a progresar a empiema si no se drena.' },
          { t: 'pH < 7,20: el mejor predictor', d: 'Luego glucosa < 40–60 y LDH > 1.000',
            say: 'El parámetro individual con mayor valor es el pH pleural bajo siete coma veinte, seguido de la glucosa bajo cuarenta a sesenta y la LDH sobre mil. Y un detalle técnico que se pregunta: el pH se mide en jeringa de gases con heparina.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Punción pleural en el niño',
      title: 'La técnica cambia: ecografía y sedación',
      cards: [
        { title: 'Cómo se hace', tag: 'Hospital', kind: 'key', items: [
          { t: 'Guiada por ecografía', d: 'Con anestesia local o sedoanalgesia',
            say: 'En el niño con neumonía y derrame paraneumónico, causado por neumococo, Staphylococcus aureus o Streptococcus pyogenes, la punción se hace guiada por ecografía, con anestesia local o sedoanalgesia, y en general en el hospital. En lactantes pequeños puede requerir sedación.' },
          { t: 'Aguja fina o catéter', d: 'Sentado o en decúbito lateral; borde superior de la costilla',
            say: 'Se usa aguja fina o catéter, con el niño sentado o en decúbito lateral, por el borde superior de la costilla, en la línea axilar media o posterior.' },
        ] },
        { title: 'Qué se pide al líquido', tag: 'Y qué se hace con él', kind: 'criteria', items: [
          { t: 'pH, glucosa, LDH, proteínas, recuento, Gram, cultivo', d: 'Siempre',
            say: 'Se envía el líquido para pH, glucosa, LDH, proteínas, recuento celular, Gram y cultivo.' },
          { t: 'pH < 7,2, glucosa baja o pus', d: 'Tubo + fibrinolítico o VATS precoz + antibiótico EV',
            say: 'Un derrame con pH menor de siete coma dos, glucosa baja o pus franco se maneja con tubo de drenaje y fibrinolíticos, o VATS precoz, más antibiótico endovenoso.' },
        ] },
        { title: 'Cuándo no puncionar', tag: 'Trampa', kind: 'alert', items: [
          { t: 'Derrame mínimo: < 10 mm en decúbito lateral', d: 'Principal complicación: neumotórax',
            say: 'No se hace punción diagnóstica si el derrame es mínimo, de menos de diez milímetros en decúbito lateral. Y la complicación mayor de la punción es el neumotórax.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Indicaciones de tubo',
      title: 'Cualquiera de estos: tubo de drenaje ya',
      cards: [
        { title: 'Lo que muestra la punción', tag: 'Líquido', kind: 'alert', items: [
          { t: 'Pus franco', d: 'Empiema evidente',
            say: 'Ahora lo más importante de la clase: las indicaciones de tubo de drenaje torácico. Basta cualquiera de ellas. La primera, pus franco al aspirar.' },
          { t: 'Gram o cultivo positivos', d: 'Aunque el líquido se vea claro',
            say: 'La segunda, una tinción de Gram o un cultivo positivos, aunque el líquido no se vea purulento.' },
          { t: 'pH < 7,20 · glucosa < 40 mg/dL', d: 'Bioquímica de complicado',
            say: 'La tercera y la cuarta son bioquímicas: pH bajo siete coma veinte, y glucosa bajo cuarenta miligramos por decilitro.' },
        ] },
        { title: 'Lo que muestra la imagen', tag: 'Anatomía', kind: 'criteria', items: [
          { t: 'Tabiques o loculaciones', d: 'O engrosamiento pleural en eco o TAC',
            say: 'Y las dos últimas vienen de la imagen: tabiques, loculaciones o engrosamiento pleural en la ecografía o la TAC, que te dicen que ya está en fase fibrinopurulenta. Mira esta radiografía: un derrame encapsulado, que no se mueve con los cambios de posición.',
            photo: { src: 'biblioteca/02_neumologia/resp-12/01_derrame-encapsulado_1__cto-neumo_p111.jpg', label: 'Derrame encapsulado', at: 'Mira esta radiografía', credit: 'Manual CTO Neumología 14.ª ed., p. 111' } },
          { t: 'Más de la mitad del hemitórax', d: 'En la radiografía',
            say: 'O un derrame que ocupa más de la mitad del hemitórax en la radiografía. Y en esta otra, un derrame masivo izquierdo: el hemitórax blanco y el mediastino empujado.',
            photo: { src: 'biblioteca/02_neumologia/resp-12/01_derrame-encapsulado_2__cto-neumo_p111.jpg', label: 'Derrame masivo izquierdo', at: 'Y en esta otra', credit: 'Manual CTO Neumología 14.ª ed., p. 111' } },
        ] },
        { title: 'El tubo', tag: 'Pleurostomía cerrada', kind: 'key', items: [
          { t: 'Tubo 24–28 Fr a trampa de agua', d: 'Succión suave de −10 a −20 cmH2O',
            say: 'El procedimiento es una pleurostomía cerrada: un tubo de veinticuatro a veintiocho French, conectado a trampa de agua, con succión negativa suave de diez a veinte centímetros de agua. La meta es evacuar el pus y que el pulmón se reexpanda por completo.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'La diferencia que más se pregunta',
      title: 'El error de esperar',
      nodes: [
        { id: 'der', col: 0, row: 1, k: 'start', t: 'Neumonía + derrame > 10 mm', s: 'Toracocentesis diagnóstica' },
        { id: 'q', col: 1, row: 1, k: 'q', t: '¿pH < 7,20, pus o Gram +?', s: 'O glucosa < 40, tabiques' },
        { id: 'atb', col: 2, row: 0, k: 'good', t: 'Solo antibióticos EV', s: 'Vigilancia clínica y ecográfica' },
        { id: 'tub', col: 2, row: 2, k: 'alert', t: 'Tubo de drenaje inmediato', s: '+ antibióticos EV' },
        { id: 'esp', col: 3, row: 2, k: 'trap', t: 'Esperar la respuesta al antibiótico', s: 'Tabiques y empiema organizado' },
      ],
      edges: [
        { from: 'der', to: 'q' }, { from: 'q', to: 'atb', label: 'no' }, { from: 'q', to: 'tub', label: 'sí' },
        { from: 'tub', to: 'esp', label: 'nunca' },
      ],
      steps: [
        { show: ['der'], note: 'Se punciona si mide más de 10 mm',
          say: 'Veamos la decisión que más se pregunta. Paciente con neumonía y derrame. Si el derrame mide más de diez milímetros, se hace una toracocentesis diagnóstica de inmediato. Si mide menos, basta el antibiótico de la neumonía.' },
        { show: ['q'], note: 'Una sola pregunta',
          say: 'Y con el líquido en la mano, una sola pregunta: ¿cumple algún criterio de derrame complicado o empiema?' },
        { show: ['atb'], note: 'No complicado: antibiótico',
          say: 'Si no cumple ninguno, es un derrame no complicado: antibióticos endovenosos para la neumonía, con vigilancia clínica y ecográfica. No necesita tubo.' },
        { show: ['tub'], note: 'Complicado: tubo ahora',
          say: 'Si cumple cualquiera, tubo de drenaje inmediato, más antibióticos endovenosos.' },
        { show: ['esp'], note: 'La trampa clásica',
          say: 'Y ojo con la trampa. La alternativa que dice mantener el antibiótico y repetir la punción en cuarenta y ocho horas suena prudente, pero es incorrecta. Con un pH bajo siete coma veinte, cada hora sin drenaje deja depositar más fibrina, y el paciente termina en pabellón.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Antibióticos',
      title: 'Cubrir anaerobios, por semanas',
      cards: [
        { title: 'Gérmenes a cubrir', tag: 'Siempre anaerobios', kind: 'criteria', items: [
          { t: 'Neumococo y S. aureus', d: 'Los de la neumonía',
            say: 'Vamos al antibiótico. El esquema tiene que cubrir los gérmenes de la neumonía, el neumococo y el Staphylococcus aureus.' },
          { t: 'Anaerobios de la orofaringe', d: 'Bacteroides, Peptostreptococcus, Fusobacterium',
            say: 'Pero sobre todo, los anaerobios de la orofaringe: Bacteroides, Peptostreptococcus y Fusobacterium. Son los mismos que vimos en el absceso pulmonar, y por la misma razón: aspiración de flora oral.' },
        ] },
        { title: 'Esquemas de primera línea', tag: 'EV, 2 a 4 semanas', kind: 'pharma', items: [
          { t: 'Ampicilina/sulbactam 1,5–3 g c/6 h EV', d: 'O ceftriaxona 2 g/día + metronidazol 500 mg c/8 h',
            say: 'Los esquemas de primera línea: ampicilina sulbactam, uno coma cinco a tres gramos cada seis horas endovenoso; o ceftriaxona dos gramos al día más metronidazol quinientos miligramos cada ocho horas. Otra opción es clindamicina, seiscientos cada ocho horas. Fíjate: la ceftriaxona sola no cubre anaerobios.' },
          { t: '2 a 4 semanas en total', d: 'Mínimo 14 días EV, luego oral',
            say: 'La duración es de dos a cuatro semanas, con un mínimo de catorce días endovenosos, y se completa por vía oral según la evolución clínica y los marcadores inflamatorios.' },
        ] },
        { title: 'Intrahospitalario o UCI', tag: 'Ampliar', kind: 'alert', items: [
          { t: 'Cubrir Pseudomonas y SAMR', d: 'Piperacilina/tazobactam o cefepime + vancomicina',
            say: 'Y si la infección es intrahospitalaria o el paciente está en la UCI, se amplía para cubrir Pseudomonas y Staphylococcus resistente a meticilina: piperacilina con tazobactam, o cefepime, más vancomicina.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Escalamiento',
      title: 'Si el tubo no basta',
      nodes: [
        { id: 'tub', col: 0, row: 1, k: 'start', t: 'Tubo instalado', s: 'Antibióticos EV' },
        { id: 'fal', col: 1, row: 1, k: 'q', t: 'Deja de drenar, sigue febril', s: 'Colecciones tabicadas en eco o TAC' },
        { id: 'fib', col: 2, row: 0, k: 'refer', t: 'Fibrinolíticos intrapleurales', s: 't-PA 10 mg + DNAsa 5 mg c/12 h × 3 días' },
        { id: 'vats', col: 2, row: 2, k: 'alert', t: 'VATS precoz', s: 'Sepsis que no cede en 48–72 h' },
        { id: 'dec', col: 3, row: 1, k: 'risk', t: 'Toracotomía y decorticación', s: 'Peel grueso: pulmón atrapado' },
      ],
      edges: [
        { from: 'tub', to: 'fal' }, { from: 'fal', to: 'fib' }, { from: 'fal', to: 'vats', label: 'multiloculado' },
        { from: 'fib', to: 'vats', label: 'no cede' }, { from: 'vats', to: 'dec', label: 'fase organizada' },
      ],
      steps: [
        { show: ['tub'], note: 'La mayoría termina aquí',
          say: '¿Y si el tubo no alcanza? Partimos del paciente con tubo y antibióticos.' },
        { show: ['fal'], note: 'La señal de alarma',
          say: 'La señal de alarma es esta: el tubo deja de drenar precozmente, pero el paciente sigue con fiebre y leucocitosis, y la ecografía o la TAC muestran colecciones tabicadas. El tubo está drenando un solo compartimento.' },
        { show: ['fib'], note: 'Disolver fibrina y ADN',
          say: 'El siguiente paso son los fibrinolíticos intrapleurales combinados: alteplasa, diez miligramos, más dornasa alfa, cinco miligramos, dos veces al día por tres días. Es el esquema del estudio MIST dos. La alteplasa disuelve la fibrina y la dornasa licúa el ADN de los detritos, y así el tubo vuelve a drenar.' },
        { show: ['vats'], note: 'El estándar de oro si la sepsis persiste',
          say: 'Si la sepsis pleural no cede en cuarenta y ocho a setenta y dos horas, o el derrame es multiloculado complejo, el estándar de oro es la cirugía toracoscópica videoasistida precoz, la VATS, para debridar y soltar las adherencias bajo visión directa.' },
        { show: ['dec'], note: 'Solo en la fase de organización',
          say: 'Y la toracotomía con decorticación queda para la fase de organización, cuando la coraza pleural es gruesa y el pulmón está atrapado. Si la ves como respuesta en un empiema agudo recién diagnosticado, es la trampa: primero va el tubo.' },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Tres fases',
      images: [
        { src: 'animaciones/resp-12/A1_tres_fases.mp4', label: 'Derrame paraneumónico', credit: 'Ilustración: Servier Medical Art, CC BY 4.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'pH bajo siete coma veinte: drenar',
          say: 'Primero el derrame es exudativo y estéril, y basta el antibiótico. Después las bacterias invaden: el pH baja de siete coma veinte, la glucosa cae y aparecen tabiques, y hay que drenarlo con tubo. Al final se forma una cáscara que atrapa el pulmón, y se necesita cirugía.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un árbol, desde la neumonía con derrame hasta la decorticación.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'No complicado, complicado y empiema',
      head: ['Parámetro', 'No complicado', 'Complicado', 'Empiema'],
      rows: [
        { cells: ['Aspecto', 'Claro o turbio seroso', 'Turbio espeso', 'Pus franco'],
          say: 'Repasemos en una tabla. El aspecto: el no complicado es claro, el complicado turbio, y el empiema es pus franco. Pero ojo: el complicado puede no verse purulento, y por eso manda la bioquímica.' },
        { cells: ['pH', '> 7,20', '< 7,20', '< 7,10–7,20'],
          say: 'El pH: sobre siete coma veinte, no complicado; bajo siete coma veinte, complicado. Es el corte que más se pregunta.' },
        { cells: ['Glucosa', '> 60 mg/dL', '< 40–60 mg/dL', '< 40 mg/dL'],
          say: 'La glucosa: sobre sesenta en el no complicado, y cae a medida que las bacterias la consumen.' },
        { cells: ['LDH', '< 1.000 U/L', '> 1.000 U/L', '> 1.000 U/L'],
          say: 'La LDH: bajo mil en el no complicado, sobre mil en el complicado y el empiema.' },
        { cells: ['Gram / cultivo', 'Negativos', 'Negativos o positivos', 'Positivos en > 70%'],
          say: 'El Gram y el cultivo: negativos en el no complicado. Un Gram negativo no descarta un derrame complicado, si el pH está bajo.' },
        { cells: ['Conducta', 'Solo antibióticos EV', 'Tubo de drenaje inmediato', 'Tubo de drenaje inmediato'],
          say: 'Y la conducta, que es lo que te van a preguntar: no complicado, solo antibióticos; complicado o empiema, tubo de drenaje inmediato.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 58 años, tabáquico y con mala dentadura, hospitalizado por neumonía basal derecha en tratamiento con ceftriaxona 2 g/día EV. Al 4.º día persiste febril (38,6 °C), con más dolor pleurítico y disnea. Rx: derrame derecho que ocupa el tercio inferior del hemitórax. Toracocentesis: líquido turbio y espeso, pH 7,12, glucosa 28 mg/dL, LDH 2.450 U/L, Gram con diplococos grampositivos.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Mantener ceftriaxona y repetir la toracocentesis en 48 horas' },
        { letter: 'B', text: 'Tubo de drenaje pleural a trampa de agua y agregar cobertura anaerobia' },
        { letter: 'C', text: 'Toracotomía con decorticación de urgencia' },
        { letter: 'D', text: 'Cambiar a ciprofloxacino oral y control ambulatorio' },
        { letter: 'E', text: 'Fibrinolíticos intrapleurales como primera medida, sin tubo' },
      ],
      correct: 'B',
      explanation: 'pH < 7,20, glucosa < 40 mg/dL, LDH > 1.000 U/L y Gram positivo: derrame complicado que ya es empiema. Indicación inmediata de pleurostomía con tubo a trampa de agua, ajustando el antibiótico con cobertura anaerobia (agregar metronidazol o cambiar a ampicilina/sulbactam).',
      say: {
        stem: 'Vamos con un caso. Hombre de cincuenta y ocho años, fumador y con mala dentadura, hospitalizado por neumonía basal derecha con ceftriaxona. Al cuarto día sigue febril, con más dolor pleurítico y disnea. La radiografía muestra un derrame en el tercio inferior del hemitórax. La punción da un líquido turbio y espeso, con pH siete coma doce, glucosa de veintiocho, LDH de dos mil cuatrocientos cincuenta, y diplococos grampositivos en el Gram.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: mantener la ceftriaxona y repetir la punción en cuarenta y ocho horas, tubo de drenaje con cobertura anaerobia, toracotomía con decorticación, ciprofloxacino ambulatorio, o fibrinolíticos sin tubo. Piénsalo.',
        answer: 'Es la B. Cumple todo: pH bajo siete coma veinte, glucosa bajo cuarenta, LDH sobre mil, y un Gram positivo, que ya lo define como empiema. Tubo de drenaje inmediato, y como es fumador con mala dentadura, se agrega cobertura anaerobia, con metronidazol o cambiando a ampicilina sulbactam. La A es la trampa clásica: esperar con antibióticos. Y la decorticación es para la fase organizada, no para empezar.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 124',
      stem: 'Un paciente de 43 años, con antecedentes de tabaquismo y consumo excesivo de alcohol, consulta por un cuadro de 5 días de evolución caracterizado por sensación febril, tos con expectoración mucopurulenta y en ocasiones hemoptoica. Al examen físico, se observa delgado, con T°: 38,5°C, frecuencia cardíaca: 100x’, PA: 118/76 mmHg, saturación arterial de 95% y frecuencia respiratoria: 17x’. Su examen pulmonar muestra crepitaciones y algunos estertores bilaterales y su examen cardíaco muestra ritmo regular en dos tiempos, sin soplos. Se solicita una radiografía de tórax, que se muestra a continuación:',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Realizar una prueba de quantiferón para tuberculosis' },
        { letter: 'B', text: 'Realizar una broncoscopia' },
        { letter: 'C', text: 'Solicitar una prueba de elisa de cuarta generación para VIH' },
        { letter: 'D', text: 'Realizar una toracocentesis diagnóstica y evacuadora' },
        { letter: 'E', text: 'Solicitar una tomografía axial computarizada (TAC) de tórax' },
      ],
      correct: 'D',
      explanation: 'La radiografía mostraba un derrame pleural izquierdo en un cuadro de neumonía o tuberculosis. Lo más importante es puncionar: toracocentesis diagnóstica y evacuadora. El quantiferón solo sirve para la tuberculosis latente.',
      say: {
        stem: 'Ahora las preguntas reales. La primera, del EUNACOM de julio de dos mil veinticuatro. Hombre de cuarenta y tres años, fumador y bebedor excesivo, con cinco días de fiebre y tos con expectoración mucopurulenta, a veces hemoptoica. Está febril y taquicárdico, con crepitaciones bilaterales. En el examen original venía la radiografía, que mostraba un derrame pleural izquierdo.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: quantiferón, broncoscopía, test de VIH, toracocentesis diagnóstica y evacuadora, o TAC de tórax. Piénsalo.',
        answer: 'Es la D. Neumonía con derrame: el primer paso es puncionar. El líquido te dice si es paraneumónico simple, complicado, o incluso tuberculoso, y si necesita tubo. El quantiferón es la trampa, porque la hemoptisis hace pensar en tuberculosis; pero solo sirve para la infección latente, no para este paciente con síntomas. Y la TAC no reemplaza al análisis del líquido.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 138',
      stem: 'Un paciente de 50 años presenta un cuadro de tos, con expectoración mucopurulenta y fiebre. Al examen físico está se auscultan crepitaciones basales. Se solicita una radiografía de tórax, que se muestra más abajo: NOTA: la radiografía mostraba infiltrados en la base izquierda, que ocupaban el lóbulo inferior izquierdo, pero que permitían ver la cúpula diafragmática, con un pequeño derrame pleural, limitado al ángulo costofrénico. Se punciona el derrame pleural, que muestra un lactato: 2,4 mmol/L, pH: 7,34, con 350 células, 90% de polimorfonucleares.',
      question: '¿Qué antibiótico debe dejar?',
      options: [
        { letter: 'A', text: 'Claritromicina' },
        { letter: 'B', text: 'Clindamicina' },
        { letter: 'C', text: 'Ceftriaxona' },
        { letter: 'D', text: 'Azitromicina' },
        { letter: 'E', text: 'Amoxicilina' },
      ],
      correct: 'C',
      explanation: 'Neumonía con derrame paraneumónico simple (pH > 7,20, derrame pequeño): no requiere tubo. Se maneja hospitalizado, con antibiótico endovenoso: ceftriaxona.',
      say: {
        stem: 'Una del EUNACOM de julio de dos mil quince. Paciente de cincuenta años con tos, expectoración mucopurulenta, fiebre y crepitaciones basales. La radiografía muestra una neumonía del lóbulo inferior izquierdo, con un pequeño derrame limitado al ángulo costofrénico. Se punciona: pH siete coma treinta y cuatro, trescientas cincuenta células, noventa por ciento polimorfonucleares.',
        question: '¿Qué antibiótico debe dejar?',
        options: 'Las opciones: claritromicina, clindamicina, ceftriaxona, azitromicina, o amoxicilina. Piénsalo.',
        answer: 'Es la C. El pH sobre siete coma veinte y el derrame pequeño dicen que es un paraneumónico no complicado: no necesita tubo, basta el antibiótico. Y el antibiótico va endovenoso, como en la neumonía que requiere hospitalización: de las opciones, la ceftriaxona. La amoxicilina es la trampa: es oral, y aquí se necesita un antibiótico endovenoso.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2025 · Pregunta 94",
      "stem": "Paciente con derrame pleural unilateral. Se realiza toracocentesis.",
      "question": "¿Cuál es el examen del líquido pleural que permite clasificarlo como exudado o trasudado según los criterios de Light?",
      "options": [
        {
          "letter": "A",
          "text": "Proteínas y LDH en líquido pleural y suero"
        },
        {
          "letter": "B",
          "text": "Glucosa en líquido pleural"
        },
        {
          "letter": "C",
          "text": "ADA en líquido pleural"
        },
        {
          "letter": "D",
          "text": "pH del líquido pleural"
        },
        {
          "letter": "E",
          "text": "Recuento celular diferencial"
        }
      ],
      "correct": "A",
      "explanation": "Criterios de Light: es exudado si cumple al menos uno: proteínas pleura/suero mayor de 0,5, LDH pleura/suero mayor de 0,6, o LDH pleural mayor de 2/3 del límite superior normal sérico. Glucosa, pH y ADA orientan la causa del exudado, pero no lo clasifican.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil veinticinco. A un paciente con derrame pleural unilateral se le hace una toracocentesis.",
        "question": "¿Qué examen del líquido permite clasificarlo como exudado o trasudado según los criterios de Light?",
        "options": "Las opciones: proteínas y deshidrogenasa láctica en líquido y suero, glucosa, adenosina deaminasa, pH o recuento celular. Piénsalo.",
        "answer": "Es la A. Light compara proteínas y deshidrogenasa láctica del líquido con las del suero, y basta un criterio para llamarlo exudado. El pH tienta porque es clave en el derrame paraneumónico, pero sirve para decidir el drenaje, no para separar exudado de trasudado."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.05.5.004 · Drenaje pleural",
      "stem": "Hombre de 45 años con empiema pleural izquierdo confirmado. Se decide instalar un tubo de drenaje pleural en decúbito supino con el brazo en abducción.",
      "question": "¿Cuál es el sitio de inserción recomendado?",
      "options": [
        {
          "letter": "A",
          "text": "2.º espacio intercostal, línea medioclavicular"
        },
        {
          "letter": "B",
          "text": "8.º espacio intercostal, línea escapular"
        },
        {
          "letter": "C",
          "text": "4.º o 5.º espacio intercostal, entre las líneas axilares anterior y media (triángulo de seguridad)"
        },
        {
          "letter": "D",
          "text": "Región subxifoidea"
        },
        {
          "letter": "E",
          "text": "Borde inferior de la 5.ª costilla, línea axilar posterior"
        }
      ],
      "correct": "C",
      "explanation": "El tubo se instala en el triángulo de seguridad: borde lateral del pectoral mayor, borde anterior del dorsal ancho y línea del pezón (4.º a 5.º espacio), sobre el borde superior de la costilla inferior. Evita la arteria mamaria, el diafragma y las vísceras abdominales, y se conecta a trampa de agua.",
      "say": {
        "stem": "Un hombre de cuarenta y cinco años tiene un empiema izquierdo y se le instalará un tubo pleural, acostado y con el brazo levantado.",
        "question": "¿Cuál es el sitio de inserción recomendado?",
        "options": "Las opciones: segundo espacio en línea medioclavicular, octavo espacio posterior, cuarto o quinto espacio entre las líneas axilares anterior y media, subxifoideo o borde inferior de la quinta costilla. Piénsalo.",
        "answer": "Es la C, el triángulo de seguridad, en el cuarto o quinto espacio en la línea axilar media. Ahí no hay grandes vasos, el diafragma queda abajo y el músculo es delgado. El octavo espacio tienta porque el líquido está abajo, pero con el diafragma subido en espiración se arriesga perforar el hígado o el bazo."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.4.010 · Citoquímico de líquido cefaloraquídeo y pleural",
      "stem": "Un niño de 5 años con neumonía en tratamiento antibiótico persiste febril al cuarto día. La radiografía muestra derrame pleural moderado. Se realiza toracocentesis, que obtiene líquido turbio con pH 7,0, glucosa 25 mg/dL y LDH 1.800 UI/L. La tinción de Gram muestra cocáceas grampositivas.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Mantener el mismo antibiótico y controlar con radiografía en 1 semana"
        },
        {
          "letter": "B",
          "text": "Agregar corticoides sistémicos"
        },
        {
          "letter": "C",
          "text": "Instalar drenaje pleural y mantener antibiótico endovenoso"
        },
        {
          "letter": "D",
          "text": "Repetir la toracocentesis en 1 semana"
        },
        {
          "letter": "E",
          "text": "Cambiar a antibiótico oral y alta"
        }
      ],
      "correct": "C",
      "explanation": "Un líquido pleural con pH menor a 7,2, glucosa menor a 40 mg/dL, LDH muy elevada o gérmenes en el Gram (o pus) corresponde a derrame paraneumónico complicado o empiema. Requiere drenaje pleural con tubo (eventualmente con fibrinolíticos o videotoracoscopía) además de antibiótico endovenoso. El neumococo es el agente más frecuente en niños.",
      "say": {
        "stem": "Un niño de cinco años con neumonía sigue febril y la toracocentesis muestra líquido turbio con pH de siete, glucosa baja, LDH alta y cocos grampositivos.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: mismo antibiótico y control, corticoides, drenaje pleural con antibiótico endovenoso, repetir la punción o alta con antibiótico oral. Piénsalo.",
        "answer": "Es la C. El citoquímico muestra un derrame complicado o empiema, que necesita drenaje pleural además del antibiótico. Mantener solo el antibiótico tienta, pero sin drenaje el pus no se resuelve."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.5.009 · Punción pleural",
      "stem": "Se realizará una punción pleural diagnóstica en un niño de 7 años con derrame pleural paraneumónico moderado, sentado e inclinado hacia adelante, con ecografía que marca el sitio de punción.",
      "question": "¿Cuál es la técnica correcta para introducir la aguja?",
      "options": [
        {
          "letter": "A",
          "text": "Por el borde superior de la costilla inferior"
        },
        {
          "letter": "B",
          "text": "Por el borde inferior de la costilla superior"
        },
        {
          "letter": "C",
          "text": "Por el centro del espacio intercostal, sin referencia costal"
        },
        {
          "letter": "D",
          "text": "En la línea medioclavicular, segundo espacio intercostal"
        },
        {
          "letter": "E",
          "text": "Por debajo de la décima costilla posterior"
        }
      ],
      "correct": "A",
      "explanation": "El paquete vasculonervioso intercostal (vena, arteria y nervio) discurre por el borde inferior de cada costilla. Por eso la aguja se introduce rasando el borde superior de la costilla inferior, en la línea axilar media o posterior, idealmente guiada por ecografía. El segundo espacio en la línea medioclavicular se usa para descomprimir un neumotórax a tensión, no para derrames.",
      "say": {
        "stem": "Se hará una punción pleural diagnóstica en un niño de siete años con derrame, guiada por ecografía.",
        "question": "¿Por dónde se introduce la aguja?",
        "options": "Las opciones: borde superior de la costilla inferior, borde inferior de la costilla superior, centro del espacio, segundo espacio medioclavicular o bajo la décima costilla. Piénsalo.",
        "answer": "Es la A. Se punciona por el borde superior de la costilla inferior, porque el paquete vasculonervioso corre bajo cada costilla. El segundo espacio medioclavicular tienta, pero es el sitio para descomprimir un neumotórax a tensión."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.05.4.008 · Examen microbiológico de líquido pleural",
      "stem": "Un hombre de 55 años con neumonía basal derecha persiste febril al 4° día de tratamiento. La toracocentesis obtiene líquido turbio, no purulento, con pH 7,10, glucosa 35 mg/dL y LDH 1.500 U/L. El Gram del líquido muestra diplococos grampositivos.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Mantener los antibióticos sin otra intervención"
        },
        {
          "letter": "B",
          "text": "Suspender los antibióticos y observar"
        },
        {
          "letter": "C",
          "text": "Repetir la toracocentesis en 1 semana"
        },
        {
          "letter": "D",
          "text": "Instalar drenaje pleural (tubo pleural) además de los antibióticos"
        },
        {
          "letter": "E",
          "text": "Iniciar corticoides"
        }
      ],
      "correct": "D",
      "explanation": "Un Gram o cultivo positivo del líquido pleural, o pH bajo 7,20, glucosa bajo 60 mg/dL o pus, definen un derrame paraneumónico complicado o empiema, que requiere drenaje pleural además de antibióticos. Si hay loculaciones que impiden el drenaje, se consideran fibrinolíticos intrapleurales o videotoracoscopía.",
      "say": {
        "stem": "Un hombre de cincuenta y cinco años con neumonía basal derecha sigue con fiebre al cuarto día. El líquido pleural es turbio, con pH de siete coma diez, glucosa baja, LDH muy alta y Gram con diplococos grampositivos.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: solo antibióticos, suspender antibióticos, repetir la punción en una semana, tubo pleural más antibióticos o corticoides. Piénsalo.",
        "answer": "Es la D. Un Gram positivo o un pH bajo siete coma dos definen derrame complicado, que necesita drenaje pleural. Solo antibióticos tienta, pero no resuelven una colección pleural infectada."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Definir', tag: 'Bioquímica', kind: 'key', items: [
          { t: 'Empiema: pus o Gram/cultivo +', d: 'Complicado: pH < 7,20, glucosa < 40–60, LDH > 1.000',
            say: 'Cerremos con las reglas de oro. Empiema es pus franco o bacterias en el Gram o el cultivo. Complicado es la bioquímica: pH bajo siete coma veinte, glucosa baja y LDH sobre mil.' },
          { t: 'El pH es el mejor predictor', d: 'En jeringa de gases',
            say: 'Y de todos, el mejor predictor es el pH, medido en jeringa de gases.' },
        ] },
        { title: 'Drenar', tag: 'Sin esperar', kind: 'alert', items: [
          { t: 'Complicado o empiema: tubo inmediato', d: 'Nunca esperar la respuesta al antibiótico',
            say: 'Complicado o empiema: tubo de drenaje inmediato, a trampa de agua. Nunca se espera la respuesta al antibiótico.' },
          { t: 'Tabicado: fibrinolíticos o VATS', d: 'Decorticación solo si hay peel',
            say: 'Si queda tabicado, fibrinolíticos o VATS; y la decorticación, solo con el pulmón atrapado.' },
        ] },
        { title: 'Tratar', tag: 'Anaerobios', kind: 'pharma', items: [
          { t: 'Ampicilina/sulbactam o ceftriaxona + metronidazol', d: '2 a 4 semanas',
            say: 'Y el antibiótico siempre cubre anaerobios, por dos a cuatro semanas. Si te llevas una sola idea de hoy: en la neumonía con derrame se punciona, y si el pH está bajo siete coma veinte, el tubo va ahora. En la próxima clase seguimos en la pleura, pero con aire: el neumotórax. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Neumonía con derrame: ¿antibiótico o tubo?',
    root: N('start', 'Neumonía con derrame pleural', 'Rx o ecografía',
      'Paciente con neumonía y un derrame en la radiografía o la ecografía. Lo primero es medirlo.',
      ['', N('q', '¿Derrame > 10 mm?', 'Decúbito lateral o ecografía',
        '¿Mide más de diez milímetros?',
        ['NO', N('ok', 'Antibióticos para la neumonía', 'No requiere toracocentesis',
          'Si es muy pequeño, basta el antibiótico de la neumonía, sin puncionar.')],
        ['SÍ', N('q', '¿Pus, Gram +, pH < 7,20, glucosa < 40 o tabiques?', 'Toracocentesis diagnóstica',
          'Si mide más, toracocentesis diagnóstica inmediata. ¿Hay pus, Gram positivo, pH bajo siete coma veinte, glucosa bajo cuarenta, o tabiques?',
          ['NO', N('ok', 'No complicado: antibióticos EV', 'Vigilancia clínica y ecográfica',
            'Si no hay ninguno, es un derrame no complicado: antibióticos endovenosos y vigilancia.')],
          ['SÍ', N('alert', 'Tubo de drenaje inmediato', '+ antibióticos con cobertura anaerobia',
            'Si hay cualquiera, tubo de drenaje inmediato a trampa de agua, con antibióticos que cubran anaerobios.',
            ['Tabicado, sigue febril', N('refer', 'Fibrinolíticos o VATS', 't-PA + DNAsa; VATS si no cede en 48–72 h',
              'Si queda tabicado y sigue con fiebre, fibrinolíticos intrapleurales, o VATS si la sepsis no cede en cuarenta y ocho a setenta y dos horas.')],
            ['Peel, pulmón atrapado', N('refer', 'Toracotomía y decorticación', 'Fase de organización',
              'Y si ya hay una coraza pleural que atrapa el pulmón, toracotomía con decorticación.')])])])]),
  },
};
