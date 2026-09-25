// Clase 10.8 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neurologia.cjs (neuro-08).
// Preguntas reales: banco real (classes/scripts/class_questions.cjs neuro-08 y --search).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'neuro-08',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Clasificar la crisis, elegir el fármaco según el paciente y conocer las toxicidades que se preguntan',
      say: 'Bienvenidos. En la clase pasada terminamos con la carbamazepina en la neuralgia del trigémino. Hoy la vemos en su terreno principal: la epilepsia del adulto, una enfermedad crónica muy prevalente en Chile y con garantía GES. En el examen se juegan tres cosas: clasificar bien la crisis, elegir el fármaco según el tipo de crisis y según el paciente, y conocer las toxicidades de cada antiepiléptico. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Cuando la excitación le gana a la inhibición',
      nodes: [
        { id: 'glu', col: 0, row: 0, k: 'cause', t: 'Glutamato', s: 'NMDA y AMPA: entra sodio y calcio' },
        { id: 'gaba', col: 0, row: 2, k: 'cause', t: 'GABA', s: 'GABA-A: entra cloro, hiperpolariza' },
        { id: 'des', col: 1, row: 1, k: 'mech', t: 'Se rompe el equilibrio', s: 'Excitación sobre inhibición' },
        { id: 'hip', col: 2, row: 1, k: 'effect', t: 'Descarga hipersincrónica', s: 'Una población neuronal cortical' },
        { id: 'foc', col: 3, row: 0, k: 'effect', t: 'Inicio focal', s: 'Red de un hemisferio' },
        { id: 'gen', col: 3, row: 2, k: 'effect', t: 'Inicio generalizado', s: 'Redes de ambos hemisferios' },
      ],
      edges: [
        { from: 'glu', to: 'des', label: 'excita' }, { from: 'gaba', to: 'des', label: 'frena' },
        { from: 'des', to: 'hip' }, { from: 'hip', to: 'foc' }, { from: 'hip', to: 'gen' },
      ],
      steps: [
        { show: ['glu', 'gaba'], note: 'Un acelerador y un freno',
          say: 'Partamos por el mecanismo. El cerebro funciona con un acelerador y un freno. El acelerador es el glutamato, que por sus receptores hace entrar sodio y calcio a la neurona. El freno es el GABA, que hace entrar cloro y la hiperpolariza.' },
        { show: ['des', 'hip'], note: 'La crisis es una descarga excesiva y sincrónica',
          say: 'Cuando ese equilibrio se rompe a favor de la excitación, una población de neuronas de la corteza descarga de forma excesiva, anormal e hipersincrónica. Esa descarga es la crisis epiléptica. Y fíjate que los fármacos que veremos actúan justamente aquí: bloquean canales de sodio, reducen el glutamato o potencian el GABA.' },
        { show: ['foc', 'gen'], note: 'Lo que clasifica es dónde empieza',
          say: 'Lo que importa para clasificar es dónde empieza esa descarga. Si parte en una red de un solo hemisferio, la crisis es de inicio focal. Si compromete desde el comienzo redes de ambos hemisferios, es de inicio generalizado. Y esa diferencia decide el fármaco.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Definición',
      title: '¿Cuándo una crisis ya es epilepsia?',
      cards: [
        { title: 'Definición ILAE', tag: 'Basta una', kind: 'criteria', items: [
          { t: '2 crisis no provocadas', d: 'Separadas por más de 24 horas',
            say: 'Una crisis no es lo mismo que epilepsia. Según la Liga Internacional contra la Epilepsia, el diagnóstico se confirma con al menos dos crisis no provocadas, separadas por más de veinticuatro horas.' },
          { t: '1 crisis con riesgo de recurrencia alto', d: 'Más de 60 % a 10 años: EEG epileptiforme o lesión',
            say: 'O con una sola crisis no provocada, si el riesgo de repetir a diez años supera el sesenta por ciento. ¿Cómo sabemos eso? Porque el electroencefalograma muestra actividad epileptiforme, o la neuroimagen muestra una lesión que explica la crisis.' },
        ] },
        { title: 'Garantía GES', tag: '15 años y más', kind: 'key', items: [
          { t: 'Epilepsia no refractaria', d: 'Especialista y EEG en 30 días',
            say: 'Y es una patología GES: toda persona de quince años o más con sospecha de epilepsia no refractaria tiene garantizada la confirmación con especialista y el electroencefalograma en un plazo máximo de treinta días desde la derivación.' },
          { t: 'Tratamiento garantizado', d: 'Inicio inmediato del antiepiléptico',
            say: 'Y el inicio inmediato del tratamiento antiepiléptico, cubierto por la canasta GES.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Clasificación ILAE',
      title: 'Crisis de inicio focal',
      cards: [
        { title: 'Conciencia preservada', tag: 'Antigua focal simple', kind: 'normal', items: [
          { t: 'Consciente, interactúa y recuerda', d: 'Clonías focales, marcha jacksoniana, parestesias',
            say: 'La clasificación moderna abandona términos como parcial o gran mal y clasifica por el inicio. La crisis focal con conciencia preservada, la antigua focal simple: el paciente sigue consciente, interactúa y recuerda. Puede tener clonías de un segmento que avanzan, la marcha jacksoniana, o parestesias.' },
          { t: 'No motoras: auras', d: 'Déjà vu, sensación epigástrica ascendente',
            say: 'También hay crisis focales no motoras: sensitivas, autonómicas o psíquicas, como el déjà vu o una sensación que sube desde el epigastrio.' },
        ] },
        { title: 'Conciencia alterada', tag: 'Antigua focal compleja', kind: 'alert', items: [
          { t: 'Desconexión, mirada fija, amnesia', d: 'Automatismos: chupeteo, deglución, manuales',
            say: 'La crisis focal con alteración de conciencia, la antigua focal compleja: el paciente se desconecta, queda con la mirada extraviada, no recuerda el episodio, y hace automatismos, como chupeteo, tragar, o movimientos de las manos. Típicamente viene del lóbulo temporal.' },
        ] },
        { title: 'Focal a bilateral', tag: 'Antigua secundariamente generalizada', kind: 'criteria', items: [
          { t: 'Empieza focal y se propaga', d: 'Termina tónico-clónica bilateral',
            say: 'Y la focal a tónico-clónica bilateral, la antigua secundariamente generalizada: parte con un signo focal, como una mano o la mirada desviada, y después se propaga a ambos hemisferios y termina en una convulsión. Ojo con esto: ese signo inicial la hace focal, aunque termine generalizada.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Clasificación ILAE',
      title: 'Crisis de inicio generalizado',
      cards: [
        { title: 'Tónico-clónica generalizada', tag: 'Motora mayor', kind: 'key', items: [
          { t: 'Pérdida brusca de conciencia', d: 'Grito, fase tónica 10–20 s, clónica 30–60 s',
            say: 'Las crisis de inicio generalizado comprometen la conciencia desde el principio. La tónico-clónica: pérdida brusca de conciencia, un grito, una fase tónica de diez a veinte segundos con cianosis, y luego una fase clónica simétrica de treinta a sesenta segundos, con relajación de esfínteres.' },
        ] },
        { title: 'Ausencias típicas', tag: 'No motora', kind: 'criteria', items: [
          { t: 'Desconexión de 5 a 15 segundos', d: 'Sin caída ni confusión posterior',
            say: 'La ausencia típica: una detención súbita, con la mirada fija, de cinco a quince segundos. No se cae, no queda confuso, y retoma lo que hacía de inmediato. Por eso puede pasar como un niño distraído.' },
          { t: 'EEG: punta-onda a 3 Hz', d: 'Patognomónico',
            say: 'Y en el electroencefalograma tiene un hallazgo patognomónico: descargas generalizadas de punta-onda a tres por segundo.' },
        ] },
        { title: 'Mioclónicas', tag: 'Epilepsia mioclónica juvenil', kind: 'alert', items: [
          { t: 'Sacudidas bruscas al despertar', d: 'En brazos, bilaterales, breves',
            say: 'Las crisis mioclónicas son sacudidas bruscas y breves, en los brazos, típicamente en la mañana al despertar. Son el sello de la epilepsia mioclónica juvenil: el adolescente que bota la taza del desayuno y que después de trasnochar hace una convulsión.' },
          { t: 'Inicio desconocido', d: 'Sin testigos, por ejemplo durmiendo',
            say: 'Y si nadie vio cómo empezó, por ejemplo durante el sueño, se clasifica como de inicio desconocido.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'El diagnóstico es clínico; los exámenes lo apoyan',
      cards: [
        { title: 'Electroencefalograma', tag: 'Examen de elección', kind: 'key', items: [
          { t: 'Busca actividad interictal', d: 'Puntas, ondas agudas, punta-onda',
            say: 'El diagnóstico es clínico, y se basa en lo que cuenta el testigo. El electroencefalograma es el examen neurofisiológico de elección, y busca actividad epileptiforme entre crisis: puntas, ondas agudas y complejos punta-onda.' },
          { t: 'Normal en la mitad de los epilépticos', d: 'Repetir con privación de sueño o video-EEG',
            say: 'Pero un electroencefalograma de rutina es normal en la mitad de los pacientes con epilepsia. Si la sospecha es alta, se repite con privación de sueño, hiperventilación y fotoestimulación, o se hace un video monitoreo prolongado. La regla de oro: un EEG normal no descarta epilepsia, y ondas lentas inespecíficas no la confirman.' },
        ] },
        { title: 'Neuroimagen', tag: 'Buscar la causa', kind: 'criteria', items: [
          { t: 'RM con protocolo de epilepsia', d: 'Esclerosis mesial temporal, displasias, cavernomas',
            say: 'Para buscar la causa, el examen de elección es la resonancia con protocolo de epilepsia, con cortes finos perpendiculares al hipocampo. Detecta la esclerosis mesial temporal, las displasias corticales, cavernomas, tumores de bajo grado y secuelas de infartos o traumas.' },
          { t: 'TAC: para la urgencia', d: 'No es el examen de estudio',
            say: 'El TAC queda para la urgencia inmediata, no para el estudio de la epilepsia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Fármacos',
      title: 'Los clásicos y sus toxicidades',
      cards: [
        { title: 'Ácido valproico', tag: 'Generalizadas', kind: 'alert', items: [
          { t: 'El más potente en generalizadas', d: 'Tónico-clónicas, mioclonías, ausencias',
            say: 'Vamos a los fármacos, que es de lo más preguntado. El ácido valproico es de amplio espectro, y el más potente para las epilepsias generalizadas idiopáticas: tónico-clónicas, mioclonías y ausencias.' },
          { t: 'Teratógeno mayor', d: 'Tubo neural 1–2 %, cardiopatías, autismo, bajo CI',
            say: 'Pero es altamente teratogénico: defectos del tubo neural, como la espina bífida, en uno a dos por ciento, cardiopatías, menor coeficiente intelectual y más riesgo de autismo. Además da hepatotoxicidad fulminante, pancreatitis, aumento de peso, alopecia y trombocitopenia.' },
        ] },
        { title: 'Carbamazepina', tag: 'Focales', kind: 'pharma', items: [
          { t: 'Stevens-Johnson, hiponatremia, agranulocitosis', d: 'Controlar sodio y hemograma',
            say: 'La carbamazepina bloquea canales de sodio y es el clásico de las crisis focales. Su toxicidad: Stevens-Johnson y necrólisis epidérmica, asociados a un alelo HLA en población asiática; hiponatremia por secreción inadecuada de hormona antidiurética, sobre todo en el adulto mayor; y aplasia y agranulocitosis.' },
          { t: 'Inductor enzimático potente', d: 'Baja anticonceptivos, warfarina, estatinas',
            say: 'Es un inductor enzimático potente de los citocromos hepáticos: baja los niveles de anticonceptivos, warfarina y estatinas. Y el peligro que más se pregunta: empeora las ausencias y las mioclonías.' },
        ] },
        { title: 'Fenitoína', tag: 'Cinética de saturación', kind: 'criteria', items: [
          { t: 'Cinética no lineal · 10–20 mcg/mL', d: 'Un pequeño aumento dispara el nivel',
            say: 'La fenitoína tiene una cinética de saturación: a dosis terapéuticas su metabolismo se satura, y un pequeño aumento de dosis dispara el nivel a rango tóxico. Su rango es estrecho, de diez a veinte microgramos por mililitro.' },
          { t: 'Hiperplasia gingival, hirsutismo, ataxia', d: 'Neuropatía, osteomalacia, anemia megaloblástica',
            say: 'Y a largo plazo da hiperplasia gingival, hirsutismo, facies tosca, neuropatía, osteomalacia, anemia megaloblástica por déficit de folato, y atrofia cerebelosa con ataxia y nistagmo irreversibles. Por eso quedó en segunda o tercera línea.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Fármacos',
      title: 'Los modernos de amplio espectro',
      cards: [
        { title: 'Lamotrigina', tag: 'Titular lento', kind: 'pharma', items: [
          { t: 'Rash y Stevens-Johnson', d: 'Iniciar 25 mg/día, subir cada 2 semanas',
            say: 'La lamotrigina bloquea canales de sodio y reduce la liberación de glutamato. Es de amplio espectro. Su riesgo es el rash grave y el Stevens-Johnson, y para evitarlo se titula muy lento: se parte con veinticinco miligramos al día y se sube cada dos semanas.' },
          { t: 'Con valproato: la mitad de dosis', d: 'El valproato duplica su vida media',
            say: 'Y la interacción de oro: el valproato inhibe la glucuronidación de la lamotrigina y duplica su vida media. Si se usan juntos, la dosis de lamotrigina se reduce a la mitad.' },
        ] },
        { title: 'Levetiracetam', tag: 'Sin interacciones', kind: 'key', items: [
          { t: 'Se une a la proteína SV2A', d: 'Excreción renal, sin citocromo P450',
            say: 'El levetiracetam se une a una proteína de las vesículas sinápticas y frena la liberación de glutamato. Es de amplio espectro, se elimina por el riñón y no pasa por los citocromos hepáticos, así que prácticamente no tiene interacciones.' },
          { t: 'Efectos psiquiátricos', d: 'Irritabilidad, agresividad, depresión, psicosis',
            say: 'Su efecto adverso típico es psiquiátrico: irritabilidad, hostilidad, agresividad, depresión, ideación suicida e incluso psicosis. Si un paciente se pone muy irritable después de empezar un antiepiléptico, piensa en levetiracetam.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Selección',
      title: 'El fármaco depende de la crisis y del paciente',
      nodes: [
        { id: 'tip', col: 0, row: 2, k: 'q', t: '¿Qué tipo de crisis?', s: 'Y ¿quién es el paciente?' },
        { id: 'foc', col: 1, row: 0, k: 'good', t: 'Focal', s: 'Lamotrigina, levetiracetam o carbamazepina' },
        { id: 'gen', col: 1, row: 2, k: 'good', t: 'Generalizada idiopática', s: 'Valproato en hombres · o LEV, LTG' },
        { id: 'aus', col: 1, row: 4, k: 'good', t: 'Ausencias puras', s: 'Etosuximida o valproato' },
        { id: 'tra', col: 2, row: 3, k: 'trap', t: 'Carbamazepina o fenitoína', s: 'Agravan ausencias y mioclonías' },
        { id: 'muj', col: 3, row: 1, k: 'alert', t: 'Mujer en edad fértil', s: 'LTG o LEV + ácido fólico 5 mg' },
        { id: 'am', col: 3, row: 3, k: 'refer', t: 'Mayor de 65 o polifarmacia', s: 'Levetiracetam o lamotrigina' },
      ],
      edges: [
        { from: 'tip', to: 'foc' }, { from: 'tip', to: 'gen' }, { from: 'tip', to: 'aus' },
        { from: 'gen', to: 'tra', label: 'nunca' }, { from: 'aus', to: 'tra', label: 'nunca' },
        { from: 'gen', to: 'muj', label: 'si es mujer' }, { from: 'foc', to: 'am', label: 'si es mayor' },
      ],
      steps: [
        { show: ['tip'], note: 'Dos preguntas: la crisis y el paciente',
          say: 'Ahora juntemos todo para elegir el fármaco. Son dos preguntas: qué tipo de crisis tiene, y quién es el paciente.' },
        { show: ['foc'], note: 'Focal',
          say: 'En las crisis de inicio focal, con o sin evolución a bilateral, la primera línea es lamotrigina, levetiracetam o carbamazepina, u oxcarbazepina. La fenitoína quedó relegada.' },
        { show: ['gen', 'aus'], note: 'Generalizada',
          say: 'En las generalizadas idiopáticas, como la mioclónica juvenil, el más efectivo es el valproato, en hombres. La alternativa moderna es levetiracetam o lamotrigina. Y en las ausencias puras, la tabla del libro da la etosuximida como elección, o el valproato.' },
        { show: ['tra'], note: 'La regla de exclusión',
          say: 'Y la regla de exclusión que más se pregunta: nunca carbamazepina ni fenitoína en una epilepsia generalizada idiopática. Tampoco gabapentina ni pregabalina. Agravan las ausencias y las mioclonías, y pueden precipitar un estatus de ausencia.' },
        { show: ['muj'], note: 'La mujer en edad fértil',
          say: 'Ahora el paciente. En la mujer en edad fértil, el valproato está formalmente contraindicado. Se usa lamotrigina o levetiracetam, en monoterapia y a la menor dosis eficaz, más ácido fólico cinco miligramos al día, desde al menos tres meses antes de concebir y durante todo el primer trimestre.' },
        { show: ['am'], note: 'El adulto mayor',
          say: 'Y en el mayor de sesenta y cinco años o polimedicado, se evitan los inductores enzimáticos, carbamazepina, fenitoína y fenobarbital, por interacciones con anticoagulantes, hiponatremia y osteoporosis. La elección es levetiracetam en dosis bajas, ajustado a la función renal, o lamotrigina.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Seguimiento',
      title: 'Niveles plasmáticos y epilepsia refractaria',
      cards: [
        { title: 'Niveles plasmáticos', tag: 'No de rutina', kind: 'criteria', items: [
          { t: 'Fenitoína', d: 'Por su cinética no lineal',
            say: 'Los niveles plasmáticos no se piden de rutina para todos. Son obligatorios con la fenitoína, por su cinética de saturación.' },
          { t: 'Toxicidad o mala adherencia', d: 'Sospecha fundada',
            say: 'También si se sospecha toxicidad o sobredosis, o si se sospecha que el paciente no está tomando el fármaco.' },
          { t: 'Embarazo con lamotrigina', d: 'Sus niveles caen en 2° y 3° trimestre',
            say: 'Y en el embarazo, porque los niveles de lamotrigina caen mucho en el segundo y tercer trimestre, por la hiperfiltración y la glucuronidación inducida por estrógenos. Hay que medir y subir la dosis para evitar crisis.' },
        ] },
        { title: 'Epilepsia refractaria', tag: 'Derivar', kind: 'alert', items: [
          { t: 'Falla de 2 fármacos adecuados', d: 'Bien tolerados, bien elegidos, en dosis plenas',
            say: 'La epilepsia refractaria, o farmacorresistente, es la que no se controla tras un ensayo adecuado de al menos dos fármacos de primera línea, bien tolerados, bien elegidos para el tipo de crisis, y en dosis plenas, solos o combinados.' },
          { t: 'Centro de epilepsia', d: 'Cirugía resectiva o estimulador vagal',
            say: 'Ese paciente se deriva a un centro terciario con unidad de epilepsia, para evaluar una cirugía, como la lobectomía temporal anterior o la lesionectomía, o una neuroestimulación del nervio vago.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol: confirmar la epilepsia, clasificar la crisis y elegir el fármaco según el paciente.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Mioclonías matinales + convulsión tras trasnochar', 'Epilepsia mioclónica juvenil: valproato (hombre)', 'Carbamazepina'],
          say: 'Repasemos las trampas. Adolescente con mioclonías matinales que convulsiona después de trasnochar: epilepsia mioclónica juvenil, y en un hombre, valproato. La carbamazepina es la trampa: la empeora.' },
        { cells: ['Mujer en edad fértil con epilepsia generalizada', 'Lamotrigina o levetiracetam + ácido fólico 5 mg', 'Mantener o iniciar valproato'],
          say: 'Mujer en edad fértil: lamotrigina o levetiracetam con ácido fólico en dosis alta. Nunca valproato.' },
        { cells: ['Adulto mayor polimedicado', 'Levetiracetam en dosis bajas', 'Carbamazepina o fenitoína'],
          say: 'Adulto mayor polimedicado: levetiracetam en dosis bajas. Los inductores enzimáticos son el error.' },
        { cells: ['Signo focal que termina en convulsión', 'Crisis focal a bilateral', 'Llamarla generalizada primaria'],
          say: 'Mirada desviada o una mano que se mueve, y después convulsión: es una crisis focal a bilateral. No es generalizada primaria.' },
        { cells: ['EEG normal con clínica sugerente', 'EEG con privación de sueño o video-EEG', 'Descartar epilepsia'],
          say: 'Electroencefalograma normal con clínica sugerente: se repite con privación de sueño o video monitoreo. Un EEG normal no descarta.' },
        { cells: ['Lamotrigina junto a valproato', 'Reducir lamotrigina a la mitad', 'Dosis habitual'],
          say: 'Lamotrigina con valproato: la dosis de lamotrigina a la mitad, porque el valproato duplica su vida media.' },
        { cells: ['Crisis pese a 2 fármacos bien usados', 'Epilepsia refractaria: centro de epilepsia', 'Agregar un tercer fármaco indefinidamente'],
          say: 'Y crisis pese a dos fármacos bien usados: epilepsia refractaria, y se deriva a un centro de epilepsia.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 26 años, recién casada, desea embarazarse a corto plazo. Tiene epilepsia generalizada idiopática diagnosticada a los 16 años, sin crisis hace 3 años con ácido valproico 500 mg cada 12 horas. Examen neurológico normal; hemograma y pruebas hepáticas normales.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Mantener el ácido valproico y agregar ácido fólico 1 mg al día' },
        { letter: 'B', text: 'Suspender de inmediato el ácido valproico' },
        { letter: 'C', text: 'Cambiar gradualmente a lamotrigina o levetiracetam e indicar ácido fólico 5 mg al día desde 3 meses antes de concebir' },
        { letter: 'D', text: 'Cambiar a carbamazepina, por su menor teratogenicidad' },
        { letter: 'E', text: 'Contraindicar el embarazo' },
      ],
      correct: 'C',
      explanation: 'El valproato es el antiepiléptico más teratogénico (tubo neural 1–2 %, cardiopatías, autismo, bajo CI) y está contraindicado en la mujer en edad fértil. Se rota de forma programada y gradual a lamotrigina o levetiracetam, con ácido fólico 5 mg/día desde 3 meses antes de la concepción. Suspender bruscamente expone a crisis; la carbamazepina agrava las epilepsias generalizadas.',
      say: {
        stem: 'Vamos con un caso. Mujer de veintiséis años, recién casada, que quiere embarazarse pronto. Tiene una epilepsia generalizada idiopática desde los dieciséis, y lleva tres años sin crisis con ácido valproico, quinientos miligramos cada doce horas. Su examen y sus exámenes son normales.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: mantener el valproato con ácido fólico en dosis baja; suspender el valproato de inmediato; cambiar gradualmente a lamotrigina o levetiracetam con ácido fólico cinco miligramos desde tres meses antes; cambiar a carbamazepina; o contraindicar el embarazo. Piénsalo.',
        answer: 'Es la C. El valproato es el antiepiléptico más teratogénico, y en una mujer que planifica un embarazo se cambia, de forma programada y gradual, a lamotrigina o levetiracetam, con ácido fólico en dosis alta. La B tienta, pero suspender de golpe la expone a crisis, que también dañan al embarazo. Y la carbamazepina es la trampa doble: empeora una epilepsia generalizada.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 143',
      stem: 'Paciente con mirada forzada hacia la derecha, luego espasmo hemifacial, luego movimientos de sacudidas en las 4 extremidades.',
      question: '¿Diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Crisis focal con generalización secundaria' },
        { letter: 'B', text: 'Crisis tónico-clónica generalizada primaria' },
        { letter: 'C', text: 'Estatus epiléptico no convulsivo' },
        { letter: 'D', text: 'Accidente isquémico transitorio (AIT)' },
        { letter: 'E', text: 'Crisis mioclónica juvenil' },
      ],
      correct: 'A',
      explanation: 'La crisis parte con signos focales (desviación forzada de la mirada, espasmo de una hemicara) y luego compromete las 4 extremidades: crisis focal con evolución a tónico-clónica bilateral (antigua secundariamente generalizada). El signo inicial define el inicio focal.',
      say: {
        stem: 'Ahora las preguntas reales. La primera, del EUNACOM de enero de dos mil veintitrés. Un paciente parte con la mirada forzada a la derecha, luego un espasmo de la mitad de la cara, y luego sacudidas de las cuatro extremidades.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: crisis focal con generalización secundaria, tónico-clónica generalizada primaria, estatus no convulsivo, isquemia transitoria, o crisis mioclónica juvenil. Piénsalo.',
        answer: 'Es la A. Parte con signos focales, la mirada desviada y una hemicara, y después se propaga a las cuatro extremidades. Eso es una crisis focal que evoluciona a bilateral. La B es el distractor: termina igual, pero lo que define la clasificación es cómo empieza. Y la isquemia transitoria no da sacudidas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 133',
      stem: 'Una paciente de 14 años sufre una convulsión tónico clónica, luego de una noche con privación de sueño y exposición a pantallas. Previo a esto, presentaba movimientos bruscos, como sacudidos, de manera involuntaria. Sus amigas relatan que en ocasiones "se queda pegada" por algunos segundos.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Epilepsia mioclónica juvenil' },
        { letter: 'B', text: 'Epilepsia de ausencia juvenil' },
        { letter: 'C', text: 'Epilepsia tónicoclónica' },
        { letter: 'D', text: 'Epilepsia focal' },
        { letter: 'E', text: 'Crisis convulsiva por privación de sueño' },
      ],
      correct: 'A',
      explanation: 'Adolescente con mioclonías, ausencias ocasionales y una convulsión tónico-clónica gatillada por privación de sueño: epilepsia mioclónica juvenil, que combina los tres tipos de crisis generalizadas. La privación de sueño es el gatillante, no el diagnóstico.',
      say: {
        stem: 'La segunda, del EUNACOM de diciembre de dos mil diecisiete. Una adolescente de catorce años convulsiona después de una noche sin dormir, frente a las pantallas. Desde antes tenía sacudidas bruscas involuntarias, y sus amigas cuentan que a veces se queda pegada unos segundos.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: epilepsia mioclónica juvenil, epilepsia de ausencia juvenil, epilepsia tónico-clónica, epilepsia focal, o crisis por privación de sueño. Piénsalo.',
        answer: 'Es la A, epilepsia mioclónica juvenil. Junta las tres crisis generalizadas: mioclonías, ausencias, y una tónico-clónica después de trasnochar. La ausencia juvenil tienta por el quedarse pegada, pero no explica las sacudidas. Y la privación de sueño es el gatillante, no el diagnóstico.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 41',
      stem: 'Un niño de 16 años convulsiona al despertar, en la mañana siguiente de haber estado jugando videojuegos hasta tarde. Además, refiere mioclonías matinales frecuentes, desde hace algunos meses. Su examen físico es normal, al igual que su examen neurológico.',
      question: '¿Cuál es el tratamiento de elección?',
      options: [
        { letter: 'A', text: 'Suspender por completo los videojuegos' },
        { letter: 'B', text: 'Ácido valproico' },
        { letter: 'C', text: 'Carbamazepina' },
        { letter: 'D', text: 'Melatonina en la noche' },
        { letter: 'E', text: 'Diazepam si convulsiona nuevamente' },
      ],
      correct: 'B',
      explanation: 'Epilepsia mioclónica juvenil en un hombre: el fármaco más efectivo es el ácido valproico. La carbamazepina agrava las mioclonías y las ausencias. En una mujer en edad fértil se preferiría lamotrigina o levetiracetam.',
      say: {
        stem: 'La tercera, del EUNACOM de diciembre de dos mil diecinueve. Un joven de dieciséis años convulsiona al despertar, después de jugar videojuegos hasta tarde. Hace meses tiene mioclonías en las mañanas. Su examen es normal.',
        question: '¿Cuál es el tratamiento de elección?',
        options: 'Las opciones: suspender por completo los videojuegos, ácido valproico, carbamazepina, melatonina, o diazepam si vuelve a convulsionar. Piénsalo.',
        answer: 'Es la B, ácido valproico. Es la misma epilepsia mioclónica juvenil, ahora en un hombre, y en él el valproato es el fármaco más efectivo. La carbamazepina es la trampa clásica: es un buen antiepiléptico, pero empeora las mioclonías. Y fíjate: si fuera una mujer en edad fértil, la respuesta cambiaría a lamotrigina o levetiracetam.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2024 · Pregunta 140',
      stem: 'Niño o adolescente con conducta disruptiva + crisis de ausencia.',
      question: '¿Como estudiarlo?',
      options: [
        { letter: 'A', text: 'Electroencefalograma' },
        { letter: 'B', text: 'TAC' },
        { letter: 'C', text: 'RNM' },
        { letter: 'D', text: 'Psicometria' },
        { letter: 'E', text: 'Control sano habitual' },
      ],
      correct: 'A',
      explanation: 'Ante la sospecha de crisis de ausencia, el examen de elección es el electroencefalograma, que muestra la punta-onda generalizada a 3 Hz, patognomónica. La neuroimagen no es el estudio inicial de una epilepsia generalizada, y la psicometría confunde las ausencias con un problema de conducta o atención.',
      say: {
        stem: 'Y la última, del EUNACOM de diciembre de dos mil veinticuatro. Un niño o adolescente con conducta disruptiva y crisis de ausencia.',
        question: '¿Cómo se estudia?',
        options: 'Las opciones: electroencefalograma, TAC, resonancia, psicometría, o control sano habitual. Piénsalo.',
        answer: 'Es la A, electroencefalograma, que muestra la punta-onda generalizada a tres por segundo, patognomónica de la ausencia. La psicometría es el distractor, porque la ausencia se confunde con un problema de atención o de conducta. Y la imagen no es el estudio de una epilepsia generalizada.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Clasificar el inicio', kind: 'key', items: [
          { t: '2 crisis no provocadas, o 1 con alto riesgo', d: 'EEG normal no descarta · RM busca la causa',
            say: 'Cerremos con las reglas de oro. Epilepsia es dos crisis no provocadas, o una con alto riesgo de repetir. El electroencefalograma normal no la descarta, y la resonancia busca la causa.' },
          { t: 'Un signo focal al inicio = crisis focal', d: 'Aunque termine en convulsión',
            say: 'Si la crisis parte con un signo focal, es focal, aunque termine en una convulsión.' },
        ] },
        { title: 'Elección del fármaco', tag: 'Crisis y paciente', kind: 'pharma', items: [
          { t: 'Focal: LTG, LEV o carbamazepina', d: 'Generalizada: valproato en hombres',
            say: 'Focal: lamotrigina, levetiracetam o carbamazepina. Generalizada idiopática: valproato en el hombre, y nunca carbamazepina ni fenitoína.' },
          { t: 'Mujer fértil: LTG o LEV + fólico 5 mg', d: 'Adulto mayor: levetiracetam',
            say: 'Mujer en edad fértil: lamotrigina o levetiracetam con ácido fólico en dosis alta. Adulto mayor: levetiracetam.' },
        ] },
        { title: 'Toxicidades', tag: 'Lo que se pregunta', kind: 'alert', items: [
          { t: 'Valproato teratógeno · CBZ hiponatremia', d: 'Fenitoína encías · LEV irritabilidad',
            say: 'Y las toxicidades: valproato teratógeno y hepatotóxico, carbamazepina con hiponatremia y Stevens-Johnson, fenitoína con hiperplasia gingival, y levetiracetam con irritabilidad. Si te llevas una sola idea de hoy: el antiepiléptico se elige por cómo empieza la crisis y por quién es el paciente. En la próxima clase vemos qué hacer cuando la crisis no se detiene: el estatus epiléptico. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Epilepsia del adulto',
    root: N('start', 'Crisis no provocada', 'Relato del testigo',
      'Paciente con una crisis no provocada. Lo primero es el relato del testigo.',
      ['', N('q', '¿Cumple la definición de epilepsia?', '2 crisis, o 1 con EEG o lesión',
        '¿Tiene dos crisis no provocadas separadas por más de un día, o una sola con un electroencefalograma epileptiforme o una lesión en la resonancia?',
        ['SÍ', N('do', 'EEG y RM con protocolo', 'GES: especialista y EEG en 30 días',
          'Se confirma con especialista, electroencefalograma y resonancia con protocolo de epilepsia, con garantía GES.',
          ['', N('q', '¿Cómo empieza la crisis?', 'Focal o generalizada',
            'Luego se clasifica según cómo empieza la crisis.',
            ['Focal', N('ok', 'Lamotrigina, levetiracetam o CBZ', 'Adulto mayor: levetiracetam',
              'Si es focal: lamotrigina, levetiracetam o carbamazepina. En el adulto mayor, levetiracetam.',
              ['Si fallan 2 FAE', N('refer', 'Epilepsia refractaria', 'Centro de epilepsia: cirugía o VNS',
                'Y en cualquier tipo de epilepsia, si las crisis siguen pese a dos fármacos bien elegidos y en dosis plenas, es refractaria: se deriva a un centro de epilepsia.')])],
            ['Generalizada', N('q', '¿Mujer en edad fértil?', 'Nunca CBZ ni fenitoína',
              'Si es generalizada idiopática, nunca carbamazepina ni fenitoína. Y la pregunta siguiente es si es una mujer en edad fértil.',
              ['NO', N('ok', 'Ácido valproico', 'O levetiracetam, lamotrigina',
                'Si es hombre, el valproato es el más efectivo.')],
              ['SÍ', N('alert', 'Lamotrigina o levetiracetam', '+ ácido fólico 5 mg · sin valproato',
                'Si es mujer en edad fértil, lamotrigina o levetiracetam con ácido fólico cinco miligramos, y nunca valproato.')])])])])]),
  },
};
