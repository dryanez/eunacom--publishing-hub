// Clase 10.4 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neurologia.cjs (neuro-04).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'neuro-04',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cefalea en trueno: TAC, punción lumbar si el TAC es normal, asegurar el aneurisma y nimodipino',
      say: 'Bienvenidos. En la clase anterior vimos la sangre dentro del cerebro. Hoy vemos la sangre alrededor de él: la hemorragia subaracnoidea por rotura de un aneurisma. Es una de las emergencias más preguntadas del EUNACOM, y casi todas las preguntas se responden con una secuencia fija: cefalea en trueno, TAC sin contraste, y si el TAC es normal, punción lumbar. Después viene el manejo: asegurar el aneurisma y prevenir el vasoespasmo. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Un aneurisma que se rompe en el polígono de Willis',
      nodes: [
        { id: 'fr', col: 0, row: 0, k: 'risk', t: 'Tabaco, HTA, cocaína', s: 'Familiar de 1er grado, poliquistosis renal' },
        { id: 'ane', col: 0, row: 2, k: 'cause', t: 'Aneurisma sacular', s: 'En bifurcaciones del polígono · 85 %' },
        { id: 'rot', col: 1, row: 2, k: 'mech', t: 'Sangre arterial al espacio subaracnoideo', s: 'Entre aracnoides y piamadre' },
        { id: 'pic', col: 2, row: 1, k: 'effect', t: 'La PIC sube de golpe', s: 'Puede igualar la presión de perfusión' },
        { id: 'sin', col: 3, row: 1, k: 'alert', t: 'Síncope o paro transitorio', s: 'Pérdida de conciencia al inicio' },
        { id: 'men', col: 2, row: 3, k: 'effect', t: 'Irritación meníngea', s: 'Rigidez de nuca en 6–12 h' },
      ],
      edges: [
        { from: 'fr', to: 'ane' }, { from: 'ane', to: 'rot', label: 'se rompe' },
        { from: 'rot', to: 'pic' }, { from: 'pic', to: 'sin' }, { from: 'rot', to: 'men', label: 'horas después' },
      ],
      steps: [
        { show: ['ane'], note: 'La causa no traumática más frecuente',
          say: 'Partamos por el mecanismo. En la hemorragia subaracnoidea, la sangre entra al espacio entre la aracnoides y la piamadre. La causa no traumática más frecuente, el ochenta y cinco por ciento, es la rotura de un aneurisma sacular, también llamado en baya, ubicado en las bifurcaciones del polígono de Willis.' },
        { show: ['fr'], note: 'El tabaco es el principal modificable',
          say: '¿Quién tiene más riesgo? El tabaquismo activo, que es el principal factor modificable, la hipertensión crónica, la cocaína y las anfetaminas, el alcoholismo severo, y tener un familiar de primer grado con hemorragia subaracnoidea. Y se asocia a enfermedades del tejido conectivo: la poliquistosis renal autosómica dominante, el Marfan y el Ehlers-Danlos tipo cuatro.' },
        { show: ['rot', 'pic'], note: 'Sangre arterial a presión',
          say: 'Cuando el aneurisma se rompe, entra sangre arterial a presión al espacio subaracnoideo, y la presión intracraneana sube de golpe. Tanto, que puede igualar la presión de perfusión cerebral.' },
        { show: ['sin'], note: 'Por eso se desmayan',
          say: 'Y eso explica un dato clínico: la mitad de los pacientes pierde la conciencia al inicio. Por un momento, el cerebro deja de recibir flujo.' },
        { show: ['men'], note: 'La rigidez de nuca llega tarde',
          say: 'La irritación meníngea, en cambio, llega después, porque la sangre tiene que degradarse para irritar las raíces. Guarda esa idea: los signos meníngeos pueden tardar seis a doce horas.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Anatomía',
      title: '¿Dónde están los aneurismas?',
      cards: [
        { title: 'Distribución', tag: 'Polígono de Willis', kind: 'criteria', items: [
          { t: 'Comunicante anterior', d: '30–35 %, la más frecuente',
            say: 'Veamos dónde están. El más frecuente es el de la arteria comunicante anterior, entre un treinta y un treinta y cinco por ciento.' },
          { t: 'Comunicante posterior', d: 'Unión con la carótida interna · 25–30 %',
            say: 'Le sigue la comunicante posterior, en su unión con la carótida interna, con un veinticinco a treinta por ciento. Este es el que más se pregunta, por lo que vemos en un momento con el tercer par.' },
          { t: 'Cerebral media y basilar', d: 'Bifurcación ACM 20 % · circulación posterior 10 %',
            say: 'Luego la bifurcación de la cerebral media, con un veinte por ciento, y la circulación posterior, con la bifurcación de la basilar, un diez por ciento.' },
        ] },
        { title: 'Aneurismas múltiples', tag: 'Ojo', kind: 'alert', items: [
          { t: '15–20 % tiene más de uno', d: 'Por eso se estudian todos los vasos',
            say: 'Y un dato práctico: entre el quince y el veinte por ciento de los pacientes tiene más de un aneurisma. Por eso el estudio vascular revisa todo el polígono, no solo el vaso sospechoso.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'La cefalea en trueno',
      cards: [
        { title: 'El síntoma cardinal', tag: 'La peor de mi vida', kind: 'key', items: [
          { t: 'Intensidad máxima en < 1 minuto', d: 'EVA 10/10, explosiva',
            say: 'Pasemos a la clínica. El síntoma cardinal es la cefalea en trueno: un dolor de intensidad máxima, diez de diez, que llega a su peak en menos de un minuto. El paciente te dice que es el peor dolor de cabeza de su vida.' },
          { t: 'Durante esfuerzo o Valsalva', d: 'Ejercicio, coito, defecación',
            say: 'Y muchas veces empieza durante un esfuerzo: haciendo deporte, durante el coito o al defecar. En el examen, esa frase, mientras hacía ejercicio, es una pista enorme.' },
        ] },
        { title: 'Acompañantes', tag: 'Frecuentes', kind: 'criteria', items: [
          { t: 'Pérdida de conciencia inicial', d: 'En la mitad de los pacientes',
            say: 'Se acompaña de pérdida transitoria de conciencia al inicio, en la mitad de los casos, vómitos explosivos, fotofobia, y dolor y rigidez del cuello.' },
        ] },
        { title: 'Perla EUNACOM', tag: 'No descarta', kind: 'alert', items: [
          { t: 'Sin signos meníngeos en la 1ª hora', d: 'No descarta una hemorragia',
            say: 'Y la perla que se pregunta: la rigidez de nuca, el Kernig y el Brudzinski pueden tardar seis a doce horas en aparecer. Un paciente con cefalea en trueno hace una hora y sin signos meníngeos no está descartado. Nunca.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'Signos que localizan y avisan',
      cards: [
        { title: 'Parálisis del III par', tag: 'Comunicante posterior', kind: 'key', items: [
          { t: 'Midriasis fija y ptosis', d: 'Ojo hacia abajo y afuera',
            say: 'Hay signos que ayudan a localizar. El más importante es la parálisis del tercer par: midriasis del mismo lado, fija y arreactiva, ptosis del párpado, y el ojo desviado hacia abajo y hacia afuera.' },
          { t: 'Aneurisma de la comunicante posterior', d: 'Que se expande o se rompe',
            say: 'Ese cuadro apunta a un aneurisma de la comunicante posterior, que comprime el nervio al crecer o al romperse. Fíjate que la pupila está comprometida: es una compresión desde afuera.' },
        ] },
        { title: 'Síndrome de Terson', tag: 'Fondo de ojo', kind: 'criteria', items: [
          { t: 'Hemorragias subhialoideas', d: '15–20 % de las HSA severas',
            say: 'En el fondo de ojo pueden verse hemorragias prerretinianas, subhialoideas: el síndrome de Terson. Aparece en el quince a veinte por ciento de las hemorragias severas, y se asocia a peor pronóstico.' },
        ] },
        { title: 'Cefalea centinela', tag: 'El aviso perdido', kind: 'alert', items: [
          { t: '2 a 4 semanas antes', d: 'Moderada, por microfugas',
            say: 'Y la cefalea centinela: una cefalea moderada, en las dos a cuatro semanas previas a la rotura, por pequeñas fugas o distensión del aneurisma.' },
          { t: 'Confundida con tensional o sinusitis', d: 'Una oportunidad perdida',
            say: 'Suele diagnosticarse mal, como una cefalea tensional o una sinusitis. Es la misma lógica que el AIT de hace dos clases: un aviso que, si se reconoce, permite actuar antes de la catástrofe.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico',
      title: 'La secuencia que no se salta',
      nodes: [
        { id: 'tru', col: 0, row: 1, k: 'start', t: 'Cefalea en trueno', s: 'Sospecha de HSA' },
        { id: 'tac', col: 1, row: 1, k: 'q', t: 'TAC sin contraste inmediato', s: 'Sensibilidad 98–100 % en < 6 h' },
        { id: 'pos', col: 2, row: 0, k: 'effect', t: 'Sangre en cisternas', s: 'Silviana, interhemisférica, ventrículos' },
        { id: 'neg', col: 2, row: 2, k: 'alert', t: 'TAC normal', s: 'No descarta' },
        { id: 'pl', col: 3, row: 2, k: 'q', t: 'Punción lumbar', s: 'Idealmente a las 6–12 h' },
        { id: 'ang', col: 4, row: 1, k: 'good', t: 'AngioTAC o angiografía', s: 'Busca el aneurisma y otros' },
        { id: 'alt', col: 4, row: 3, k: 'trap', t: 'Alta con TAC normal', s: 'Error grave' },
      ],
      edges: [
        { from: 'tru', to: 'tac' }, { from: 'tac', to: 'pos', label: 'positivo' }, { from: 'tac', to: 'neg', label: 'normal' },
        { from: 'neg', to: 'pl' }, { from: 'pos', to: 'ang' }, { from: 'pl', to: 'ang', label: 'xantocromía' },
        { from: 'neg', to: 'alt', label: 'nunca' },
      ],
      steps: [
        { show: ['tru', 'tac'], note: 'Paso 1: TAC sin contraste',
          say: 'Ahora el diagnóstico, que es una secuencia fija. Ante una cefalea en trueno, el primer examen es un TAC de encéfalo sin contraste, inmediato. Si se hace en las primeras seis horas, su sensibilidad supera el noventa y ocho por ciento.' },
        { show: ['pos'], note: 'La sangre dibuja las cisternas',
          say: 'Si es positivo, la sangre hiperdensa se ve donde está el líquido: en las cisternas basales, la cisura de Silvio, el espacio interhemisférico, o dentro de los ventrículos.' },
        { show: ['neg', 'pl'], note: 'Paso 2: TAC normal obliga a punción',
          say: 'Pero si el TAC es normal y la clínica es sugerente, la punción lumbar es obligatoria. Y tiene un momento ideal: seis a doce horas desde el inicio del dolor, para dar tiempo a que los glóbulos rojos se destruyan y aparezca la xantocromía.' },
        { show: ['alt'], note: 'El error más grave del tema',
          say: 'Mandar a la casa a un paciente con cefalea en trueno porque el TAC salió normal, sin puncionarlo, es uno de los errores más graves que evalúa el examen.' },
        { show: ['ang'], note: 'Paso 3: encontrar el aneurisma',
          say: 'Y cuando la hemorragia está confirmada, por TAC o por punción, el paso siguiente es el estudio vascular: AngioTAC cerebral o angiografía por sustracción digital. Muestra el aneurisma, su cuello, su tamaño, y busca otros aneurismas.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Punción lumbar',
      title: 'Hemorragia real o punción traumática',
      cards: [
        { title: 'Hemorragia subaracnoidea', tag: 'Prueba de los 3 tubos', kind: 'key', items: [
          { t: 'Glóbulos rojos iguales en los 3 tubos', d: 'La sangre no aclara',
            say: 'Un problema clásico de la punción es saber si la sangre es real o si la pusiste tú con la aguja. Para eso sirve la prueba de los tres tubos. En la hemorragia subaracnoidea, el recuento de glóbulos rojos es parejo en los tres frascos: el líquido no se aclara.' },
          { t: 'Sobrenadante xantocrómico', d: 'Amarillo por bilirrubina y oxihemoglobina',
            say: 'Y al centrifugar, el sobrenadante es xantocrómico, amarillo o rosado, por la bilirrubina y la oxihemoglobina que deja la sangre al degradarse. Eso solo pasa si la sangre llevaba horas ahí.' },
        ] },
        { title: 'Punción traumática', tag: 'Iatrogénica', kind: 'alert', items: [
          { t: 'Los glóbulos rojos bajan del tubo 1 al 3', d: 'La sangre se va aclarando',
            say: 'En la punción traumática, en cambio, los glóbulos rojos disminuyen claramente del primer al tercer tubo.' },
          { t: 'Sobrenadante transparente', d: 'Sangre recién puesta, sin degradar',
            say: 'Y el sobrenadante es transparente, incoloro, porque esa sangre recién entró y no alcanzó a degradarse. Por eso la xantocromía es el dato que decide.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Escalas',
      title: 'Hunt y Hess mide la clínica; Fisher, el TAC',
      cards: [
        { title: 'Hunt y Hess', tag: 'Estado clínico', kind: 'criteria', items: [
          { t: 'I: asintomático o cefalea leve', d: 'Mortalidad ~2 %',
            say: 'La hemorragia se clasifica con dos escalas que miden cosas distintas. Hunt y Hess mide la clínica. Grado uno: asintomático o cefalea leve, con rigidez mínima; mortalidad cercana al dos por ciento.' },
          { t: 'II: cefalea intensa y rigidez', d: 'Sin déficit, salvo par craneal · ~5 %',
            say: 'Grado dos: cefalea moderada a severa con rigidez de nuca, sin déficit focal, salvo la paresia de un par craneal, como el tercer par. Mortalidad cercana al cinco por ciento.' },
          { t: 'III: somnolencia o confusión · IV: estupor', d: 'V: coma, descerebración · > 70 %',
            say: 'Grado tres: somnolencia, confusión o un déficit focal leve. Grado cuatro: estupor con hemiparesia moderada a severa. Y grado cinco: coma profundo, descerebración, aspecto moribundo, con mortalidad sobre setenta por ciento.' },
        ] },
        { title: 'Fisher modificada', tag: 'Predice vasoespasmo', kind: 'alert', items: [
          { t: '1: capa fina · 2: fina + ventricular', d: 'Menor riesgo',
            say: 'La escala de Fisher modificada, en cambio, mira el TAC, y sirve para una sola cosa: predecir el vasoespasmo. Grado uno, una capa fina de sangre sin sangre ventricular; grado dos, capa fina con sangre en los ventrículos.' },
          { t: '3: coágulo grueso · 4: grueso + ventricular', d: 'Riesgo máximo de isquemia tardía',
            say: 'Grado tres, un coágulo grueso sin sangre ventricular; y grado cuatro, coágulo grueso con hemorragia intraventricular, el riesgo máximo de vasoespasmo e infartos tardíos. La lógica es simple: más sangre, más vasoespasmo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo',
      title: 'Primer objetivo: que no vuelva a sangrar',
      cards: [
        { title: 'Resangrado', tag: 'La complicación más letal', kind: 'alert', items: [
          { t: 'Mortalidad > 70–80 %', d: 'Máximo riesgo en las primeras 24 h',
            say: 'Pasemos al manejo, que se hace en la unidad de paciente crítico y tiene cuatro objetivos. El primero, y el más urgente, es evitar el resangrado. Tiene una mortalidad sobre setenta a ochenta por ciento, y su mayor riesgo está en las primeras veinticuatro horas.' },
        ] },
        { title: 'Asegurar el aneurisma', tag: 'En 24 a 72 h', kind: 'key', items: [
          { t: 'Embolización con coils', d: 'Endovascular, de primera elección',
            say: 'La única medida definitiva es excluir el aneurisma de la circulación, precozmente, en las primeras veinticuatro a setenta y dos horas. El método de elección en la mayoría es endovascular: la embolización con coils.' },
          { t: 'Clipaje microquirúrgico', d: 'Cuello ancho de ACM o hematoma compresivo',
            say: 'El clipaje quirúrgico se prefiere en aneurismas de cuello ancho de la cerebral media, o cuando hay un hematoma en el parénquima que comprime y hay que evacuar.' },
        ] },
        { title: 'Mientras tanto', tag: 'Antes de asegurar', kind: 'pharma', items: [
          { t: 'PAS < 160 mmHg', d: 'Labetalol o nicardipino EV',
            say: 'Mientras el aneurisma no está asegurado, la sistólica se mantiene bajo ciento sesenta, con labetalol o nicardipino, sin caídas bruscas. Fíjate en la diferencia con la clase anterior: allá la meta era ciento treinta a ciento cuarenta.' },
          { t: 'Analgesia y antieméticos', d: 'Opioides, ondansetrón: evitar Valsalva',
            say: 'Y analgesia con opioides, más antieméticos como el ondansetrón, porque el dolor, la tos y los vómitos son esfuerzos que suben la presión y pueden hacer resangrar.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Vasoespasmo',
      title: 'Segundo objetivo: la isquemia tardía',
      nodes: [
        { id: 'san', col: 0, row: 1, k: 'cause', t: 'Sangre en el espacio subaracnoideo', s: 'Más sangre, más riesgo (Fisher)' },
        { id: 'lis', col: 1, row: 1, k: 'mech', t: 'Productos de la hemoglobina', s: 'Oxihemoglobina, endotelina' },
        { id: 'vas', col: 2, row: 1, k: 'risk', t: 'Vasoespasmo', s: 'Días 4 a 14 · peak 7 a 10' },
        { id: 'dci', col: 3, row: 1, k: 'alert', t: 'Isquemia cerebral tardía', s: 'Infartos días después' },
        { id: 'nim', col: 2, row: 3, k: 'good', t: 'Nimodipino 60 mg c/4 h VO', s: '21 días, desde el ingreso' },
        { id: 'euv', col: 3, row: 3, k: 'good', t: 'Euvolemia estricta', s: 'Suero fisiológico · no triple H' },
      ],
      edges: [
        { from: 'san', to: 'lis' }, { from: 'lis', to: 'vas' }, { from: 'vas', to: 'dci' },
        { from: 'nim', to: 'vas', label: 'previene' }, { from: 'euv', to: 'dci', label: 'previene' },
      ],
      steps: [
        { show: ['san', 'lis'], note: 'La sangre degradada es la culpable',
          say: 'El segundo objetivo es el vasoespasmo. La sangre que quedó en el espacio subaracnoideo se degrada, y sus productos, la oxihemoglobina y la endotelina, contraen las arterias que están bañadas en ella.' },
        { show: ['vas'], note: 'No es el día 1',
          say: 'Y ojo con el tiempo, porque se pregunta: el vasoespasmo no aparece el primer día. Ocurre entre el día cuatro y el catorce, con un peak entre el siete y el diez.' },
        { show: ['dci'], note: 'El paciente que empeora a la semana',
          say: 'Su consecuencia es la isquemia cerebral tardía: el paciente que estaba bien, a la semana presenta un déficit nuevo, por un infarto.' },
        { show: ['nim'], note: 'El único fármaco con evidencia',
          say: 'La prevención es el nimodipino oral, sesenta miligramos cada cuatro horas, por boca o por sonda, durante veintiún días seguidos. Es el único fármaco que ha demostrado reducir la mortalidad y la isquemia tardía, y se parte de inmediato, sin esperar el vasoespasmo.' },
        { show: ['euv'], note: 'Ni seco ni sobrecargado',
          say: 'Y se mantiene euvolemia estricta con suero fisiológico. La antigua terapia triple H, con hipervolemia agresiva, está proscrita. Solo se induce hipertensión controlada si ya se demostró un vasoespasmo.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Complicaciones',
      title: 'Hidrocefalia, sodio y corazón',
      cards: [
        { title: 'Hidrocefalia aguda', tag: '20–30 %', kind: 'alert', items: [
          { t: 'Sangre que bloquea la reabsorción', d: 'Primeras 24 a 48 horas',
            say: 'El tercer objetivo es la hidrocefalia aguda, que ocurre en el veinte a treinta por ciento, en las primeras veinticuatro a cuarenta y ocho horas, porque la sangre bloquea la circulación y la reabsorción del líquido cefalorraquídeo.' },
          { t: 'Deterioro de conciencia: DVE', d: 'Drenaje ventricular externo urgente',
            say: 'Si el paciente se deteriora de conciencia, se instala un drenaje ventricular externo de urgencia, igual que en la hemorragia intracerebral.' },
        ] },
        { title: 'Hiponatremia', tag: 'Pérdida de sal cerebral', kind: 'key', items: [
          { t: 'Pierde sodio y volumen', d: 'Primera semana',
            say: 'El cuarto es la hiponatremia, en la primera semana. Se debe sobre todo a un síndrome de pérdida de sal cerebral, aunque también puede ser un SIADH.' },
          { t: 'Suero 0,9 % o hipertónico 3 %', d: 'Nunca restricción hídrica',
            say: 'Y aquí está la trampa: el reflejo es restringir agua, como en el SIADH. Pero en la hemorragia subaracnoidea la restricción hídrica está contraindicada, porque la hipovolemia desencadena vasoespasmo e infarto. Se trata con suero fisiológico o hipertónico al tres por ciento.' },
        ] },
        { title: 'Corazón', tag: 'Primeras 48 h', kind: 'normal', items: [
          { t: 'Arritmias, troponinas, T negativas', d: 'Descarga de catecolaminas',
            say: 'Y el corazón: la descarga simpática masiva puede dar arritmias, elevación de troponinas, ondas T invertidas o un Takotsubo. Por eso va con monitoreo electrocardiográfico continuo.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol, desde la cefalea en trueno hasta el manejo en la unidad crítica.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Cefalea en trueno', 'TAC sin contraste inmediato', 'Analgesia o triptán y alta'],
          say: 'Repasemos las trampas. Cefalea en trueno: TAC sin contraste inmediato. Tratarla como una migraña es el error.' },
        { cells: ['Cefalea en trueno, TAC normal', 'Punción lumbar a las 6–12 h', 'Alta porque el TAC salió normal'],
          say: 'Cefalea en trueno con TAC normal: punción lumbar, idealmente a las seis a doce horas. El alta es el error más grave del tema.' },
        { cells: ['Sin signos meníngeos en la 1ª hora', 'No descarta HSA', 'Descartarla por el examen'],
          say: 'Sin signos meníngeos en la primera hora: no descarta nada, porque tardan seis a doce horas.' },
        { cells: ['LCR con GR iguales en 3 tubos y xantocromía', 'Hemorragia subaracnoidea', 'Llamarla punción traumática'],
          say: 'Glóbulos rojos parejos en los tres tubos y xantocromía: es una hemorragia real, no una punción traumática.' },
        { cells: ['HSA confirmada', 'AngioTAC o angiografía', 'Resonancia o punción lumbar'],
          say: 'Hemorragia confirmada: el siguiente examen es vascular, AngioTAC o angiografía. Puncionar un TAC ya positivo no aporta.' },
        { cells: ['Midriasis fija + ptosis + cefalea súbita', 'Aneurisma de comunicante posterior', 'Pensar en migraña o cluster'],
          say: 'Tercer par con pupila comprometida y cefalea súbita: aneurisma de la comunicante posterior.' },
        { cells: ['Prevención del vasoespasmo', 'Nimodipino 60 mg c/4 h por 21 días + euvolemia', 'Triple H o esperar el vasoespasmo'],
          say: 'Vasoespasmo: se previene con nimodipino por veintiún días desde el ingreso y euvolemia. La triple H está proscrita.' },
        { cells: ['Hiponatremia en HSA', 'Suero fisiológico o hipertónico', 'Restricción hídrica'],
          say: 'Y la hiponatremia: suero fisiológico o hipertónico, nunca restricción de agua.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 39 años, fumadora, consulta por cefalea occipital explosiva que alcanzó su máxima intensidad en segundos hace 3 horas, mientras levantaba peso, con un vómito. Nunca había tenido cefaleas así. PA 150/90 mmHg, vigil, sin rigidez de nuca ni déficit focal. TAC de encéfalo sin contraste: normal.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Alta con analgesia y control si reaparecen los síntomas' },
        { letter: 'B', text: 'Sumatriptán subcutáneo y observación por 2 horas' },
        { letter: 'C', text: 'Punción lumbar diferida a las 6–12 horas del inicio para buscar xantocromía' },
        { letter: 'D', text: 'Nimodipino 60 mg cada 4 horas y alta' },
        { letter: 'E', text: 'Repetir el TAC sin contraste en 1 semana' },
      ],
      correct: 'C',
      explanation: 'Cefalea en trueno: sospecha de HSA hasta demostrar lo contrario. La ausencia de signos meníngeos a las 3 horas no la descarta (tardan 6–12 h). Con TAC normal, la punción lumbar es obligatoria, idealmente a las 6–12 horas para detectar xantocromía. Si es positiva, sigue el estudio vascular (AngioTAC o angiografía).',
      say: {
        stem: 'Vamos con un caso. Mujer de treinta y nueve años, fumadora, con una cefalea occipital explosiva que llegó a su máximo en segundos, hace tres horas, mientras levantaba peso, con un vómito. Nunca había tenido algo así. Está vigil, sin rigidez de nuca ni déficit focal, y el TAC sin contraste es normal.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: alta con analgesia, sumatriptán y observación, punción lumbar a las seis a doce horas del inicio, nimodipino y alta, o repetir el TAC en una semana. Piénsalo.',
        answer: 'Es la C. Es una cefalea en trueno durante un esfuerzo, en una fumadora: es hemorragia subaracnoidea hasta demostrar lo contrario. A las tres horas todavía no tiene por qué haber rigidez de nuca. Y con el TAC normal, la punción es obligatoria, a las seis a doce horas, para ver xantocromía. La A es justamente el error más grave del tema, y el triptán trata una migraña que no es.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 136',
      stem: 'Un paciente de 50 años, sin antecedentes, presenta cefalea de inicio súbito mientras hacía deporte, asociado a dolor en la zona cervical posterior y dorsal. Al examen físico presenta reflejo fotomotor conservado, signos meníngeos presentes, fuerza y sensibilidad disminuidas en hemicuerpo izquierdo.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Hemorragia subaracnoídea' },
        { letter: 'B', text: 'Hematoma epidural' },
        { letter: 'C', text: 'Hematoma subdural' },
        { letter: 'D', text: 'Hemorragia cerebral intraparenquimatosa' },
        { letter: 'E', text: 'Accidente vascular isquémico' },
      ],
      correct: 'A',
      explanation: 'Cefalea súbita durante el ejercicio, con dolor cervical y signos meníngeos: hemorragia subaracnoidea. Los signos focales no son lo típico, pero pueden aparecer. Sin trauma no se piensa en hematoma epidural ni subdural; la hemorragia intraparenquimatosa daría cefalea con déficit focal, y lo que domina aquí es lo meníngeo.',
      say: {
        stem: 'Ahora las preguntas reales. La primera, del EUNACOM de julio de dos mil trece. Paciente de cincuenta años, sin antecedentes, con cefalea de inicio súbito mientras hacía deporte, y dolor cervical posterior y dorsal. Tiene signos meníngeos, y además fuerza y sensibilidad disminuidas en el hemicuerpo izquierdo.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: hemorragia subaracnoidea, hematoma epidural, hematoma subdural, hemorragia intraparenquimatosa, o infarto cerebral. Piénsalo.',
        answer: 'Es la A, hemorragia subaracnoidea. Cefalea súbita durante un esfuerzo, con dolor de cuello y signos meníngeos: es el cuadro clásico. El distractor es la hemorragia intraparenquimatosa, por el déficit del hemicuerpo. Pero lo que domina aquí son los signos meníngeos, y los signos focales pueden aparecer en la subaracnoidea. Y sin trauma, no piensas en hematoma epidural ni subdural.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 139',
      stem: 'Un paciente de 54 años, alcohólico e hipertenso, hace una semana suspende todos los antihipertensivos. Es traído a la urgencia por cefalea muy intensa, de inicio agudo, asociado a desorientación y compromiso de conciencia. Al examen físico está soporoso, no habla ni sigue indicaciones, aunque mantiene movilidad espontánea de las 4 extremidades. Sus reflejos osteotendíneos y tono muscular son normales y tiene signo de Babinski bilateral.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Hemorragia subaracnoidea' },
        { letter: 'B', text: 'Meningitis bacteriana' },
        { letter: 'C', text: 'Edema cerebral' },
        { letter: 'D', text: 'Intoxicación etílica' },
        { letter: 'E', text: 'Accidente vascular isquémico extenso' },
      ],
      correct: 'A',
      explanation: 'Cefalea muy intensa de inicio agudo con compromiso de conciencia y sin déficit motor focal, en un hipertenso sin tratamiento: hemorragia subaracnoidea (el alza brusca de la PIC explica el compromiso de conciencia). No hay fiebre para meningitis, y un infarto extenso daría un déficit focal evidente.',
      say: {
        stem: 'La segunda, del EUNACOM de diciembre de dos mil diecinueve. Hombre de cincuenta y cuatro años, alcohólico e hipertenso, que suspendió sus antihipertensivos hace una semana. Llega con una cefalea muy intensa, de inicio agudo, desorientado y con compromiso de conciencia. Está soporoso, pero mueve las cuatro extremidades, con reflejos y tono normales, y Babinski bilateral.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: hemorragia subaracnoidea, meningitis bacteriana, edema cerebral, intoxicación etílica, o infarto isquémico extenso. Piénsalo.',
        answer: 'Es la A. Es una pregunta difícil, pero la clave es la cefalea muy intensa de inicio agudo, y el compromiso de conciencia, que se explica por el alza brusca de la presión intracraneana. La intoxicación etílica es el distractor tentador por el antecedente, pero no explica una cefalea así. No hay fiebre para pensar en meningitis, y un infarto extenso daría un déficit focal claro, y este paciente mueve las cuatro extremidades.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 178',
      stem: 'Una paciente de 42 años, hipertensa, presenta cefalea intensa, que inició súbitamente hace 6 horas, mientras realizaba ejercicio y se ha acompañado de vómitos alimentarios. Al examen físico está vigil y orientada, adolorida, con FC: 70x’, PA: 140/90 mmHg, en el examen neurológico tiene signos meníngeos presentes, sin alteraciones motoras ni sensitivas. Se solicita TAC de cerebro sin contraste, que muestra hiperdensidad del espacio intercomisural frontal y del espacio subaracnoideo basal.',
      question: '¿Cuál es el examen de elección para proseguir el estudio?',
      options: [
        { letter: 'A', text: 'Resonancia magnética nuclear de cerebro' },
        { letter: 'B', text: 'Punción lumbar' },
        { letter: 'C', text: 'TAC de cerebro con contraste' },
        { letter: 'D', text: 'Angiografía cerebral' },
        { letter: 'E', text: 'Ecocardiograma' },
      ],
      correct: 'D',
      explanation: 'El TAC ya confirmó la hemorragia subaracnoidea (sangre en el espacio interhemisférico y en las cisternas basales). El paso siguiente es el estudio vascular para encontrar el aneurisma y planificar su exclusión: angiografía cerebral (o AngioTAC). La punción lumbar solo se indica si el TAC es normal.',
      say: {
        stem: 'Y la tercera, del EUNACOM de agosto de dos mil veintiuno. Mujer de cuarenta y dos años, hipertensa, con cefalea intensa de inicio súbito hace seis horas, mientras hacía ejercicio, con vómitos. Está vigil, con signos meníngeos y sin déficit motor ni sensitivo. El TAC sin contraste muestra sangre en el espacio interhemisférico frontal y en el espacio subaracnoideo basal.',
        question: '¿Cuál es el examen de elección para proseguir el estudio?',
        options: 'Las opciones: resonancia de cerebro, punción lumbar, TAC con contraste, angiografía cerebral, o ecocardiograma. Piénsalo.',
        answer: 'Es la D, angiografía cerebral. El TAC ya mostró la sangre: la hemorragia está confirmada, y ahora hay que encontrar el aneurisma para asegurarlo. La punción lumbar es la trampa: solo se hace cuando el TAC es normal. Aquí no aporta nada, porque el diagnóstico ya está hecho.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'La secuencia', kind: 'key', items: [
          { t: 'Cefalea en trueno: TAC sin contraste', d: 'Signos meníngeos tardan 6–12 h',
            say: 'Cerremos con las reglas de oro. Cefalea en trueno es hemorragia subaracnoidea hasta demostrar lo contrario, y el primer examen es el TAC sin contraste. La ausencia de signos meníngeos al inicio no descarta nada.' },
          { t: 'TAC normal: punción lumbar', d: 'Xantocromía · luego angiografía',
            say: 'Si el TAC es normal, punción lumbar buscando xantocromía. Y confirmada la hemorragia, estudio vascular con AngioTAC o angiografía.' },
        ] },
        { title: 'Manejo', tag: 'Unidad crítica', kind: 'pharma', items: [
          { t: 'Asegurar en 24–72 h', d: 'Coils de elección · PAS < 160',
            say: 'El resangrado se previene asegurando el aneurisma en veinticuatro a setenta y dos horas, de preferencia con coils, y con sistólica bajo ciento sesenta mientras tanto.' },
          { t: 'Nimodipino 60 mg c/4 h por 21 días', d: 'Vasoespasmo días 4 a 14',
            say: 'El vasoespasmo se previene con nimodipino por veintiún días, desde el ingreso, y euvolemia.' },
        ] },
        { title: 'Trampas', tag: 'No caer', kind: 'alert', items: [
          { t: 'III par con midriasis', d: 'Aneurisma de comunicante posterior',
            say: 'El tercer par con midriasis apunta a la comunicante posterior.' },
          { t: 'Hiponatremia: nunca restringir agua', d: 'Suero fisiológico o hipertónico',
            say: 'Y la hiponatremia nunca se trata restringiendo agua. Si te llevas una sola idea de hoy: ante una cefalea en trueno, un TAC normal no es un alta, es una punción lumbar. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Hemorragia subaracnoidea aneurismática',
    root: N('start', 'Cefalea en trueno', 'Máxima en < 1 minuto',
      'Paciente con la peor cefalea de su vida, que llegó a su máximo en menos de un minuto. Es hemorragia subaracnoidea hasta demostrar lo contrario.',
      ['', N('q', 'TAC sin contraste: ¿hay sangre?', 'Cisternas, cisuras, ventrículos',
        'El primer paso es el TAC sin contraste inmediato. ¿Hay sangre en las cisternas o en las cisuras?',
        ['NO', N('q', 'Punción lumbar a las 6–12 h', '¿Xantocromía?',
          'Si el TAC es normal, la sospecha sigue en pie: punción lumbar a las seis a doce horas. ¿Hay xantocromía, con glóbulos rojos parejos en los tres tubos?',
          ['NO', N('ok', 'HSA descartada', 'Buscar otra causa de cefalea',
            'Si el líquido es normal, la hemorragia queda descartada y buscas otra causa.')],
          ['SÍ', N('do', 'HSA confirmada', 'Pasar al estudio vascular',
            'Si hay xantocromía, la hemorragia está confirmada, y sigues igual que con un TAC positivo.')])],
        ['SÍ', N('do', 'AngioTAC o angiografía', 'Encontrar el aneurisma',
          'Si el TAC muestra sangre, el paso siguiente es el estudio vascular: AngioTAC o angiografía, para encontrar el aneurisma.',
          ['', N('alert', 'Unidad de paciente crítico', 'Nimodipino + PAS < 160 + euvolemia',
            'Y en la unidad crítica: nimodipino sesenta miligramos cada cuatro horas por veintiún días, sistólica bajo ciento sesenta, euvolemia y analgesia.',
            ['', N('refer', 'Coils o clipaje en 24–72 h', 'Previene el resangrado',
              'Y se asegura el aneurisma en las primeras veinticuatro a setenta y dos horas, con coils o clipaje. Es lo único que previene el resangrado.')])])])]),
  },
};
