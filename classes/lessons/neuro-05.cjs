// Clase 10.5 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neurologia.cjs (neuro-05).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'neuro-05',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'La mujer joven con cefalea progresiva y convulsiones: sospechar, confirmar y anticoagular aunque haya sangre',
      say: 'Bienvenidos. Cerramos el bloque de enfermedad cerebrovascular con la trombosis venosa cerebral. Es menos frecuente que el infarto arterial y las hemorragias que ya vimos, pero engaña mucho, porque no se presenta como un ACV típico. Y tiene una regla de oro que el examen pregunta una y otra vez: se anticoagula, incluso si la imagen muestra sangre. Hoy vas a entender por qué. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Cuando el cerebro no puede drenar',
      nodes: [
        { id: 'tro', col: 0, row: 1, k: 'cause', t: 'Trombo en un seno dural', s: 'Sagital superior 60 % · transverso 40 %' },
        { id: 'hve', col: 1, row: 0, k: 'mech', t: 'Hipertensión venosa retrógrada', s: 'La presión se devuelve a los capilares' },
        { id: 'inf', col: 2, row: 0, k: 'effect', t: 'Edema e infarto venoso', s: 'Fuera de territorios arteriales' },
        { id: 'hem', col: 3, row: 0, k: 'alert', t: 'Transformación hemorrágica', s: 'Se rompen las vénulas' },
        { id: 'lcr', col: 1, row: 2, k: 'mech', t: 'No se reabsorbe el LCR', s: 'Granulaciones de Pacchioni bloqueadas' },
        { id: 'hic', col: 2, row: 2, k: 'effect', t: 'Hipertensión endocraneana', s: 'Sin ventrículos dilatados' },
      ],
      edges: [
        { from: 'tro', to: 'hve' }, { from: 'hve', to: 'inf' }, { from: 'inf', to: 'hem' },
        { from: 'tro', to: 'lcr', label: 'seno sagital' }, { from: 'lcr', to: 'hic' },
      ],
      steps: [
        { show: ['tro'], note: 'El problema es la salida, no la entrada',
          say: 'Partamos por el mecanismo, porque aquí está la clave de toda la clase. En el infarto arterial, la sangre no llega. En la trombosis venosa, la sangre llega, pero no puede salir. Un trombo ocluye un seno dural: el sagital superior en el sesenta por ciento, o el transverso y el sigmoideo en el cuarenta.' },
        { show: ['hve'], note: 'La presión se devuelve',
          say: 'Si la salida está tapada, la presión se devuelve hacia atrás, a las venas y los capilares. Es una hipertensión venosa retrógrada, que baja la perfusión del tejido.' },
        { show: ['inf'], note: 'Infarto venoso',
          say: 'El resultado es edema, y luego un infarto venoso. Y como depende de la vena y no de una arteria, ese infarto no respeta los territorios arteriales que conocemos: puede ser bilateral y parasagital.' },
        { show: ['hem'], note: 'La sangre viene de la presión, no de la pared',
          say: 'Además, esa presión tan alta rompe las vénulas, y el infarto se transforma en hemorragia con mucha frecuencia. Fíjate bien: esa sangre no viene de un vaso frágil, viene de un drenaje tapado. Esa idea es la que justifica el tratamiento.' },
        { show: ['lcr', 'hic'], note: 'El segundo mecanismo',
          say: 'Y hay un segundo mecanismo. El seno sagital superior es donde las granulaciones de Pacchioni devuelven el líquido cefalorraquídeo a la sangre. Si está trombosado, el líquido no se reabsorbe, y aparece una hipertensión endocraneana, sin ventrículos dilatados, parecida a un pseudotumor cerebral.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Factores de riesgo',
      title: '¿Quién hace una trombosis venosa cerebral?',
      cards: [
        { title: 'Estados hormonales', tag: 'Lo más preguntado', kind: 'key', items: [
          { t: 'Mujer de 20 a 45 años', d: 'Más del 75–80 % de los casos',
            say: 'A diferencia del infarto arterial, que es del adulto mayor con aterosclerosis, más del setenta y cinco por ciento de estas pacientes son mujeres de veinte a cuarenta y cinco años.' },
          { t: 'Anticonceptivos orales combinados', d: 'O terapia hormonal: riesgo 6 a 10 veces',
            say: 'Y la razón son los estados hormonales protrombóticos. Los anticonceptivos orales combinados, o la terapia de reemplazo hormonal, multiplican el riesgo por seis a diez.' },
          { t: 'Embarazo y puerperio', d: 'Máximo riesgo en las 6 semanas posparto',
            say: 'El embarazo, y sobre todo el puerperio, con el máximo riesgo en las primeras seis semanas después del parto. Una puérpera con cefalea que no cede es una trombosis venosa hasta que se demuestre lo contrario.' },
        ] },
        { title: 'Trombofilias y sistémicas', tag: 'Buscarlas', kind: 'criteria', items: [
          { t: 'Factor V Leiden, protrombina, SAF', d: 'Déficit de proteína C, S o antitrombina',
            say: 'Luego las trombofilias: el factor cinco Leiden, la mutación de la protrombina, los déficits de proteína C, S o antitrombina, la hiperhomocisteinemia, y el síndrome antifosfolípidos.' },
          { t: 'Lupus, Behçet, neoplasias hematológicas', d: 'HPN, policitemia vera',
            say: 'Y enfermedades sistémicas: lupus, Behçet, neoplasias hematológicas, hemoglobinuria paroxística nocturna, anemia falciforme y policitemia vera.' },
        ] },
        { title: 'Trombosis séptica', tag: 'Por vecindad', kind: 'alert', items: [
          { t: 'Otitis o mastoiditis', d: 'Seno transverso y sigmoideo',
            say: 'Y la trombosis séptica, por una infección vecina. La otitis media o la mastoiditis complicada trombosan el seno transverso y el sigmoideo.' },
          { t: 'Celulitis facial, forúnculo nasal, sinusitis', d: 'Seno cavernoso',
            say: 'Y la celulitis facial, el forúnculo nasal o la sinusitis etmoidal o esfenoidal complicada, trombosan el seno cavernoso.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'Una cefalea que avanza por días',
      cards: [
        { title: 'Cefalea', tag: 'Más del 90 %', kind: 'key', items: [
          { t: 'Progresiva, rebelde a analgésicos', d: 'Se instala en días, no en segundos',
            say: 'Veamos la clínica, que es subaguda y variada. El síntoma casi constante, en más del noventa por ciento, es la cefalea: holocránea, opresiva, que va aumentando en días y no responde a los analgésicos.' },
          { t: 'Peor en decúbito, en la madrugada y con Valsalva', d: 'En trueno solo en 10 %',
            say: 'Y tiene el sello de la presión alta: empeora al acostarse, en la madrugada y al toser o pujar. Solo en un diez por ciento es una cefalea en trueno, que se confunde con la subaracnoidea de la clase pasada.' },
        ] },
        { title: 'Hipertensión endocraneana', tag: 'Fondo de ojo', kind: 'alert', items: [
          { t: 'Vómitos matinales y papiledema', d: 'Oscurecimientos visuales transitorios',
            say: 'Se suma el síndrome de hipertensión endocraneana: náuseas, vómitos explosivos de predominio matinal, oscurecimientos visuales transitorios, y el dato que tienes que buscar: papiledema bilateral en el fondo de ojo.' },
        ] },
        { title: 'Lo que la separa de otros ACV', tag: 'Ojo en el examen', kind: 'criteria', items: [
          { t: 'Convulsiones en 35–40 %', d: 'Mucho más que en el infarto arterial',
            say: 'Y lo que la distingue: las convulsiones, en el treinta y cinco a cuarenta por ciento, focales o generalizadas. Son mucho más frecuentes que en el infarto arterial, porque la estasis venosa y las microhemorragias irritan la corteza.' },
          { t: 'Déficit focal fluctuante', d: 'Paraparesia si es parasagital bilateral',
            say: 'Puede haber un déficit focal que fluctúa, afasia, o compromiso de conciencia. Y si el infarto es parasagital bilateral, por trombosis del seno sagital superior, una paraparesia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Seno cavernoso',
      title: 'Trombosis del seno cavernoso',
      cards: [
        { title: 'Clínica orbitaria', tag: 'Por los nervios que pasan', kind: 'key', items: [
          { t: 'Oftalmoplejia dolorosa', d: 'Pares III, IV y VI',
            say: 'La trombosis del seno cavernoso merece una mención aparte, porque su clínica es distinta. Por dentro del seno pasan los nervios que mueven el ojo, y por eso da una oftalmoplejia dolorosa, con parálisis del tercer, cuarto y sexto par.' },
          { t: 'Quemosis, proptosis, dolor periorbitario', d: 'Parestesias en V1 y V2',
            say: 'Además hay quemosis conjuntival marcada, proptosis, dolor alrededor de la órbita, y parestesias en las dos primeras ramas del trigémino, que también pasan por ahí.' },
        ] },
        { title: 'El contexto', tag: 'Infección facial', kind: 'alert', items: [
          { t: 'Forúnculo nasal, celulitis, sinusitis', d: 'Trombosis séptica',
            say: 'Y el contexto que la delata es una infección de la cara: el forúnculo nasal, una celulitis facial, o una sinusitis esfenoidal o etmoidal complicada.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'El TAC puede ser normal: hay que ver las venas',
      cards: [
        { title: 'TAC sin contraste', tag: 'Normal en 25–30 %', kind: 'alert', items: [
          { t: 'Un TAC normal no la descarta', d: 'Normal en uno de cada cuatro',
            say: 'Vamos al diagnóstico. El TAC sin contraste es el primer examen en urgencia, pero es normal en el veinticinco a treinta por ciento de los casos. Un TAC normal no descarta la trombosis.' },
          { t: 'Signo de la cuerda', d: 'Trombo hiperdenso en vena o seno',
            say: 'Cuando es positivo, puede mostrar el signo de la cuerda, un trombo fresco hiperdenso dentro de una vena cortical o del seno, o infartos con edema y hemorragias petequiales que no calzan con ningún territorio arterial.' },
        ] },
        { title: 'TAC con contraste', tag: 'Signo clásico', kind: 'criteria', items: [
          { t: 'Delta vacío', d: 'Seno sagital superior, tercio posterior',
            say: 'Con contraste aparece el signo clásico: el delta vacío. En el tercio posterior del seno sagital superior se ve un triángulo oscuro, que es el trombo, rodeado por las paredes del seno, que sí captan contraste.' },
        ] },
        { title: 'Examen de elección', tag: 'Gold standard no invasivo', kind: 'key', items: [
          { t: 'Angio-RM venosa', d: 'O AngioTAC en fase venosa',
            say: 'Pero el examen de elección es la angiorresonancia venosa, o la AngioTAC en fase venosa. Muestran que no hay flujo en el seno trombosado y permiten ver el trombo directamente. La idea es simple: si sospechas un problema de las venas, tienes que pedir un examen que mire las venas.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tratamiento',
      title: 'La regla de oro: anticoagular aunque haya sangre',
      nodes: [
        { id: 'dx', col: 0, row: 1, k: 'start', t: 'TVC confirmada', s: 'Con o sin infarto hemorrágico' },
        { id: 'hbpm', col: 1, row: 1, k: 'good', t: 'Enoxaparina 1 mg/kg c/12 h SC', s: 'Anticoagulación plena inmediata' },
        { id: 'rec', col: 2, row: 0, k: 'mech', t: 'Recanaliza el seno', s: 'Baja la presión retrógrada' },
        { id: 'fre', col: 3, row: 0, k: 'good', t: 'Frena isquemia y sangrado', s: 'Trata la causa de la hemorragia' },
        { id: 'hnf', col: 2, row: 2, k: 'refer', t: 'Heparina no fraccionada', s: 'Si cirugía urgente o ClCr < 30' },
        { id: 'tra', col: 3, row: 2, k: 'trap', t: 'Suspender por la hemorragia', s: 'Grave error' },
      ],
      edges: [
        { from: 'dx', to: 'hbpm' }, { from: 'hbpm', to: 'rec' }, { from: 'rec', to: 'fre' },
        { from: 'hbpm', to: 'hnf', label: 'alternativa' }, { from: 'dx', to: 'tra', label: 'nunca' },
      ],
      steps: [
        { show: ['dx', 'hbpm'], note: 'Anticoagulación plena inmediata',
          say: 'Y llegamos a la regla de oro. El tratamiento de la trombosis venosa cerebral es la anticoagulación plena inmediata, y el fármaco de primera línea es la heparina de bajo peso molecular: enoxaparina, un miligramo por kilo cada doce horas, subcutánea, en dosis terapéutica completa.' },
        { show: ['rec', 'fre'], note: 'Por qué se anticoagula con sangre',
          say: '¿Y si la imagen muestra un infarto hemorrágico? Se anticoagula igual. Vuelve al mecanismo: esa sangre salió por la presión de un drenaje tapado. Al anticoagular, el seno se recanaliza, la presión retrógrada baja, y se frena tanto la isquemia como la propia hemorragia.' },
        { show: ['tra'], note: 'La trampa del examen',
          say: 'Por eso, suspender o postergar la heparina por miedo a la hemorragia es un grave error. En el examen, la alternativa que dice no anticoagular porque hay sangre en el TAC es la trampa.' },
        { show: ['hnf'], note: 'Cuándo heparina no fraccionada',
          say: 'La heparina de bajo peso molecular fue superior a la no fraccionada, con menos sangrado. La no fraccionada se reserva si se anticipa una cirugía descompresiva urgente, o si hay falla renal severa, con un clearance menor de treinta.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Después de la fase aguda',
      cards: [
        { title: 'Anticoagulación oral', tag: 'Mantención', kind: 'pharma', items: [
          { t: 'Acenocumarol o warfarina', d: 'INR 2 a 3 · o dabigatrán, rivaroxabán',
            say: 'Pasada la fase aguda, se cambia a anticoagulación oral: acenocumarol o warfarina con meta de INR dos a tres, o un anticoagulante directo, como dabigatrán o rivaroxabán.' },
        ] },
        { title: 'Duración', tag: 'Según la causa', kind: 'criteria', items: [
          { t: 'Factor transitorio: 3 a 6 meses', d: 'Anticonceptivos, embarazo, puerperio',
            say: 'La duración depende de la causa. Si el gatillo fue transitorio y reversible, como los anticonceptivos, el embarazo o el puerperio, tres a seis meses.' },
          { t: 'Idiopática o trombofilia leve: 6 a 12 meses', d: 'Trombofilia mayor o recurrencia: indefinida',
            say: 'Si fue idiopática o hay una trombofilia leve, seis a doce meses. Y si hay una trombofilia mayor, como el síndrome antifosfolípidos, o eventos recurrentes, indefinida.' },
        ] },
        { title: 'Medidas asociadas', tag: 'Según la clínica', kind: 'normal', items: [
          { t: 'Levetiracetam si hubo una crisis', d: 'Sin profilaxis si no convulsionó',
            say: 'Si la paciente convulsionó, aunque sea una vez, se indica un anticonvulsivante, como levetiracetam. Si nunca convulsionó, no se da profilaxis.' },
          { t: 'HTEC refractaria', d: 'Acetazolamida, punción evacuadora, craniectomía',
            say: 'Y si la hipertensión endocraneana es severa y refractaria: acetazolamida, punción lumbar evacuadora, o una craniectomía descompresiva de rescate en infartos venosos masivos.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol, desde la sospecha hasta la duración del tratamiento.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Trombosis venosa, infarto arterial o pseudotumor',
      head: ['Característica', 'Trombosis venosa cerebral', 'ACV isquémico arterial', 'Hipertensión intracraneal idiopática'],
      rows: [
        { cells: ['Paciente típico', 'Mujer 20–45 años con ACO, embarazo, puerperio o SAF', 'Mayor de 60 con HTA, DM, FA, tabaco', 'Mujer joven con obesidad'],
          say: 'Repasemos con el diagnóstico diferencial que más se pregunta. La trombosis venosa es de la mujer joven con un factor protrombótico; el infarto arterial, del mayor de sesenta con factores de riesgo vascular; y la hipertensión intracraneal idiopática, de la mujer joven con obesidad.' },
        { cells: ['Instalación', 'Subaguda, días a semanas', 'Súbita, segundos a minutos', 'Crónica, semanas a meses'],
          say: 'La instalación: la trombosis avanza en días; el infarto es súbito; y el pseudotumor, crónico, de semanas a meses.' },
        { cells: ['Clínica clave', 'Cefalea + papiledema + convulsiones', 'Déficit en un territorio arterial', 'Cefalea + papiledema, sin déficit (salvo VI par)'],
          say: 'La clínica: la trombosis junta cefalea, papiledema y convulsiones; el infarto da un déficit que calza con una arteria; y el pseudotumor, cefalea con papiledema, sin déficit focal, salvo una paresia del sexto par.' },
        { cells: ['Imagen', 'Delta vacío · sin flujo en Angio-RM', 'Hipodensidad en territorio arterial', 'Senos permeables, silla turca vacía'],
          say: 'La imagen: en la trombosis, el delta vacío y la falta de flujo en la angiorresonancia; en el pseudotumor, los senos están permeables. Por eso, antes de diagnosticar un pseudotumor, siempre hay que mirar las venas.' },
        { cells: ['Tratamiento', 'Enoxaparina plena, aunque haya sangre', 'Reperfusión o antiagregación', 'Punción evacuadora, acetazolamida, bajar de peso'],
          say: 'Y el tratamiento: anticoagulación plena en la trombosis, aunque haya sangre; reperfusión o antiagregación en el infarto; y punción evacuadora, acetazolamida y baja de peso en el pseudotumor.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 29 años, en su 4° día de puerperio, usuaria de anticonceptivos orales combinados hasta el embarazo. Consulta por 4 días de cefalea holocránea progresiva que empeora al acostarse y al toser, con vómitos matinales. En las últimas 12 horas presentó 3 crisis focales del brazo derecho con generalización. Somnolienta, con papiledema bilateral y leve paresia braquial derecha. TAC sin contraste: lesión hipodensa temporoparietal izquierda con focos hiperdensos petequiales, que no respeta un territorio arterial.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Evitar la anticoagulación por la transformación hemorrágica e iniciar levetiracetam' },
        { letter: 'B', text: 'Trombolisis intravenosa con alteplase' },
        { letter: 'C', text: 'Enoxaparina 1 mg/kg cada 12 horas SC, levetiracetam EV e ingreso a UPC' },
        { letter: 'D', text: 'Punción lumbar evacuadora y acetazolamida' },
        { letter: 'E', text: 'Aspirina 300 mg y control con resonancia en 48 horas' },
      ],
      correct: 'C',
      explanation: 'Trombosis venosa cerebral con infarto venoso hemorrágico en una puérpera usuaria de ACO: cefalea progresiva con signos de HTEC, convulsiones y lesión que no respeta territorios arteriales. La hemorragia se debe a la hipertensión venosa retrógrada: se anticoagula igual, con HBPM en dosis plena. Como hubo crisis, se agrega levetiracetam. Se confirma con Angio-RM venosa o AngioTAC venosa.',
      say: {
        stem: 'Vamos con un caso. Mujer de veintinueve años, en su cuarto día de puerperio, usuaria de anticonceptivos hasta el embarazo. Tiene cuatro días de cefalea progresiva, que empeora al acostarse y al toser, con vómitos matinales. En las últimas doce horas, tres crisis focales del brazo derecho que se generalizaron. Está somnolienta, con papiledema y una leve paresia del brazo derecho. El TAC muestra una lesión temporoparietal izquierda con focos de sangre, que no respeta ningún territorio arterial.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: evitar anticoagular por la sangre y dar levetiracetam; trombolisis; enoxaparina plena con levetiracetam e ingreso a la unidad crítica; punción evacuadora y acetazolamida; o aspirina y control. Piénsalo.',
        answer: 'Es la C. Puerperio, anticonceptivos, cefalea de días con signos de hipertensión endocraneana, convulsiones, y un infarto hemorrágico que no calza con una arteria: es una trombosis venosa cerebral. La A es la trampa: la sangre viene de la presión venosa, y anticoagular es justamente lo que la frena. Y como convulsionó, se agrega levetiracetam. La trombolisis y la aspirina son tratamientos del infarto arterial.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 55',
      stem: 'Una paciente de 40 años, usuaria de anticonceptivos orales, consulta por cefalea holocránea, muy intensa, de 5 días de evolución, que se ha asociado a vómitos alimentarios, mayores en la mañana, y que no ha respondido al uso de analgésicos orales. En su examen físico no hay signos neurológicos focales.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Trombosis venosa profunda de seno encefálico' },
        { letter: 'B', text: 'Hemorragia subaracnoidea' },
        { letter: 'C', text: 'Infarto lacunar' },
        { letter: 'D', text: 'Hematoma intraparenquimatoso' },
        { letter: 'E', text: 'Crisis de migraña' },
      ],
      correct: 'A',
      explanation: 'Usuaria de ACO con cefalea progresiva de días, rebelde a analgésicos y con vómitos matinales (hipertensión endocraneana): trombosis venosa de un seno dural. No es migraña (hay signos de alarma), no es HSA (5 días, no inicio en trueno) y sin déficit focal no se piensa en infarto lacunar ni hematoma.',
      say: {
        stem: 'Ahora las preguntas reales. La primera, del EUNACOM de diciembre de dos mil diecisiete. Mujer de cuarenta años, usuaria de anticonceptivos orales, con cinco días de cefalea holocránea muy intensa, vómitos de predominio matinal, y sin respuesta a los analgésicos. No tiene signos focales.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: trombosis de un seno venoso encefálico, hemorragia subaracnoidea, infarto lacunar, hematoma intraparenquimatoso, o crisis de migraña. Piénsalo.',
        answer: 'Es la A, trombosis de un seno venoso. Anticonceptivos, cefalea que avanza en días, no cede con analgésicos y trae vómitos matinales: hipertensión endocraneana en una mujer con un factor protrombótico. La migraña es el distractor tentador, pero una cefalea con signos de alarma no es una migraña. Y la subaracnoidea empieza en trueno, no se arrastra por cinco días.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 1',
      stem: 'Una paciente de 40 años, usuaria de anticonceptivos orales, consulta por cefalea holocránea, muy intensa, de 5 días de evolución, que se ha asociado a náuseas y vómitos alimentarios, mayores en la mañana, y que no ha respondido al uso de analgésicos orales. Hoy presentó una convulsión tónico-clónica. En su examen físico tiene sopor superficial paresia de las extremidades derechas.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Migraña por anticonceptivos' },
        { letter: 'B', text: 'Infarto cerebral extenso' },
        { letter: 'C', text: 'Accidente vascular lacunar' },
        { letter: 'D', text: 'Epilepsia con parálisis de Todd' },
        { letter: 'E', text: 'Trombosis venosa cerebral' },
      ],
      correct: 'E',
      explanation: 'Mismo escenario, ahora completo: cefalea progresiva con signos de hipertensión endocraneana, convulsión, compromiso de conciencia y déficit focal en usuaria de ACO. Es la presentación completa de la trombosis venosa cerebral. El infarto arterial es súbito, no precedido por días de cefalea; la parálisis de Todd no explica la cefalea de días.',
      say: {
        stem: 'La segunda, del EUNACOM de diciembre de dos mil diecinueve, y quizás la recuerdes de la primera clase del bloque. Es la misma paciente de cuarenta años con anticonceptivos, cinco días de cefalea y vómitos matinales. Pero hoy convulsionó, y está soporosa, con paresia de las extremidades derechas.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: migraña por anticonceptivos, infarto cerebral extenso, infarto lacunar, epilepsia con parálisis de Todd, o trombosis venosa cerebral. Piénsalo.',
        answer: 'Es la E. Fíjate que es la pregunta anterior, pero completa: a la cefalea con hipertensión endocraneana se suman la convulsión, el compromiso de conciencia y el déficit focal. Ese es el cuadro completo de la trombosis venosa. El infarto extenso tienta por la paresia, pero se instala de golpe. Y la parálisis de Todd explica la paresia, pero no cinco días de cefalea que va en aumento.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Sospecha', tag: 'El perfil', kind: 'key', items: [
          { t: 'Mujer joven con ACO, embarazo o puerperio', d: 'Cefalea progresiva + HTEC + convulsiones',
            say: 'Cerremos con las reglas de oro. Mujer joven con anticonceptivos, embarazo o puerperio, y una cefalea que avanza en días, con signos de hipertensión endocraneana y convulsiones: piensa en trombosis venosa cerebral.' },
          { t: 'Infarto que no respeta territorios', d: 'A menudo hemorrágico',
            say: 'Un infarto que no calza con ninguna arteria, y que sangra, refuerza la sospecha.' },
        ] },
        { title: 'Diagnóstico', tag: 'Mirar las venas', kind: 'criteria', items: [
          { t: 'TAC normal no descarta', d: 'Angio-RM venosa o AngioTAC venosa',
            say: 'El TAC puede ser normal; el examen de elección es la angiorresonancia o la AngioTAC en fase venosa. Y el delta vacío es el signo clásico.' },
        ] },
        { title: 'Tratamiento', tag: 'Regla de oro', kind: 'pharma', items: [
          { t: 'Enoxaparina plena aunque haya sangre', d: '1 mg/kg cada 12 horas',
            say: 'El tratamiento es la anticoagulación plena con enoxaparina, aunque haya hemorragia, y luego anticoagulación oral según la causa.' },
          { t: 'Transitorio 3–6 meses · SAF indefinida', d: 'Levetiracetam si convulsionó',
            say: 'Tres a seis meses si el factor fue transitorio, e indefinida si hay una trombofilia mayor. Si te llevas una sola idea de hoy: en la trombosis venosa, la sangre no contraindica la heparina, porque la heparina trata la causa de esa sangre. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Trombosis venosa cerebral',
    root: N('start', 'Cefalea progresiva de días', 'Mujer joven con factor protrombótico',
      'Mujer joven, con anticonceptivos, embarazo o puerperio, y una cefalea que avanza en días y no cede con analgésicos.',
      ['', N('q', '¿HTEC, convulsiones o déficit focal?', 'Papiledema, vómitos matinales',
        'Busca los signos que la delatan: papiledema y vómitos matinales, convulsiones, o un déficit focal que fluctúa.',
        ['SÍ', N('do', 'TAC sin contraste', 'Normal en 25–30 %',
          'Primero el TAC sin contraste, sabiendo que puede ser normal en uno de cada cuatro casos.',
          ['', N('q', 'Angio-RM o AngioTAC venosa', '¿Hay trombo en un seno?',
            'Luego el examen de elección, que mira las venas: angiorresonancia o AngioTAC en fase venosa. ¿Hay un seno sin flujo?',
            ['NO', N('refer', 'Buscar otra causa', 'Ej.: hipertensión intracraneal idiopática',
              'Si los senos están permeables, buscas otra causa, como la hipertensión intracraneal idiopática.')],
            ['SÍ', N('alert', 'Enoxaparina plena inmediata', 'Aunque haya infarto hemorrágico',
              'Si hay trombosis, enoxaparina en dosis plena de inmediato, aunque haya sangre en la imagen. Y levetiracetam si convulsionó.',
              ['', N('ok', 'Anticoagulación oral', 'Transitorio 3–6 m · SAF indefinida',
                'Después, anticoagulación oral: tres a seis meses si el factor fue transitorio, seis a doce si fue idiopática, e indefinida en trombofilias mayores.')])])])])]),
  },
};
