// Clase 8.14 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_hematologia.cjs (hem-14).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'hem-14',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Vitamina K, hígado y anticoagulantes: cuándo basta suspender y cuándo revertir ya',
      say: 'Bienvenidos. En la clase anterior vimos las coagulopatías congénitas, que son raras. Hoy vemos las adquiridas, que son las que realmente vas a encontrar en el adulto: el déficit de vitamina K, el daño hepático crónico y, sobre todo, el paciente sobreanticoagulado. Esta última es una de las urgencias iatrogénicas más frecuentes, y el examen pregunta exactamente eso: qué hacer según el INR y según si el paciente sangra.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Vitamina K: la llave de cuatro factores',
      nodes: [
        { id: 'vk', col: 0, row: 1, k: 'cause', t: 'Vitamina K', s: 'Liposoluble · cofactor hepático' },
        { id: 'car', col: 1, row: 1, k: 'mech', t: 'Carboxilación', s: 'Gamma-glutamil carboxilasa' },
        { id: 'fac', col: 2, row: 0, k: 'effect', t: 'Factores II, VII, IX y X', s: 'Procoagulantes' },
        { id: 'pcs', col: 2, row: 2, k: 'effect', t: 'Proteínas C y S', s: 'Anticoagulantes naturales' },
        { id: 'ine', col: 3, row: 1, k: 'risk', t: 'Sin vitamina K: factores inertes', s: 'No fijan calcio ni fosfolípidos' },
      ],
      edges: [
        { from: 'vk', to: 'car' }, { from: 'car', to: 'fac' }, { from: 'car', to: 'pcs' },
        { from: 'fac', to: 'ine', label: 'si falta' }, { from: 'pcs', to: 'ine' },
      ],
      steps: [
        { show: ['vk', 'car'], note: 'La vitamina K activa factores en el hígado',
          say: 'Partamos por el mecanismo, porque ordena toda la clase. La vitamina K es una vitamina liposoluble que el hepatocito usa como cofactor de una enzima, la gamma-glutamil carboxilasa. Esa enzima termina de fabricar ciertos factores de la coagulación.' },
        { show: ['fac'], note: 'II, VII, IX y X: los cuatro que dependen de ella',
          say: '¿Cuáles? Los factores dos, siete, nueve y diez. Memorízalos juntos, porque son exactamente los mismos que bloquea el acenocumarol y los mismos que trae el concentrado de complejo protrombínico. Es un solo concepto que se repite tres veces.' },
        { show: ['pcs'], note: 'También las proteínas C y S',
          say: 'Y ojo, que la vitamina K también activa a dos anticoagulantes naturales: las proteínas C y S. Guarda ese detalle para cuando hablemos del hígado.' },
        { show: ['ine'], note: 'Sin carboxilar, el factor existe pero no funciona',
          say: 'Sin esa carboxilación, el factor se fabrica, pero no puede fijar calcio ni pegarse a la membrana de la plaqueta. Está, pero no sirve. Por eso el laboratorio muestra tiempos prolongados.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Déficit de vitamina K',
      title: '¿Por qué falta y cómo se ve en el laboratorio?',
      nodes: [
        { id: 'des', col: 0, row: 0, k: 'cause', t: 'Desnutrición extrema', s: 'No entra' },
        { id: 'atb', col: 0, row: 1, k: 'cause', t: 'Antibióticos prolongados', s: 'Se pierde la flora que la produce' },
        { id: 'mal', col: 0, row: 2, k: 'cause', t: 'Malabsorción', s: 'Celíaca · resección ileal' },
        { id: 'col', col: 0, row: 3, k: 'cause', t: 'Colestasis crónica', s: 'Sin sales biliares no se absorbe' },
        { id: 'tp', col: 2, row: 1, k: 'effect', t: 'Primero cae el VII', s: 'TP prolongado' },
        { id: 'ttpk', col: 2, row: 2, k: 'effect', t: 'Luego cae el IX', s: 'TTPK prolongado' },
        { id: 'vit', col: 3, row: 1, k: 'good', t: 'Vitamina K1', s: 'Normaliza el TP en 12–24 h' },
      ],
      edges: [
        { from: 'des', to: 'tp' }, { from: 'atb', to: 'tp' }, { from: 'mal', to: 'tp' }, { from: 'col', to: 'tp' },
        { from: 'tp', to: 'ttpk', label: 'después' }, { from: 'tp', to: 'vit', label: 'corrige' },
      ],
      steps: [
        { show: ['des', 'atb'], note: 'Falta de aporte o falta de flora',
          say: '¿Cuándo falta la vitamina K? Primero, cuando no entra: la desnutrición extrema. Segundo, cuando el antibiótico de amplio espectro por tiempo prolongado barre la flora del colon, que es la que fabrica parte de esta vitamina.' },
        { show: ['mal', 'col'], note: 'La colestasis es la causa que más se pregunta',
          say: 'Tercero, la malabsorción, como la enfermedad celíaca o la resección ileal. Y cuarto, la colestasis crónica. Fíjate en la lógica: sin bilis en el intestino, no se absorben las grasas, y con ellas se pierden las vitaminas liposolubles, A, D, E y K.' },
        { show: ['tp'], note: 'El VII tiene la vida media más corta',
          say: 'En el laboratorio, el primer factor que cae es el siete. Y como vimos en la clase de exámenes de la hemostasia, el siete se mide con el tiempo de protrombina. Por eso lo primero que se alarga es el TP.' },
        { show: ['ttpk'], note: 'Más tarde se alarga también el TTPK',
          say: 'Si el déficit sigue, cae después el factor nueve, y entonces se alarga también el TTPK.' },
        { show: ['vit'], note: 'Si corrige con vitamina K, era déficit',
          say: 'Y aquí está la prueba terapéutica: al administrar fitomenadiona, que es la vitamina K uno, el TP se normaliza en doce a veinticuatro horas. Si corrige, el hígado estaba sano y solo le faltaba la vitamina.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Daño hepático crónico',
      title: 'Hígado dañado vs falta de vitamina K',
      cards: [
        { title: 'Cirrosis', tag: 'Falla la fábrica', kind: 'alert', items: [
          { t: 'Cae la síntesis de todo', d: 'Dependientes o no de vitamina K',
            say: 'Ahora el daño hepático crónico. El hígado fabrica prácticamente todos los factores de la coagulación. En la cirrosis se pierde masa de hepatocitos, y cae la síntesis de todos los factores, dependan o no de la vitamina K.' },
          { t: 'Equilibrio frágil', d: 'También bajan C, S y antitrombina',
            say: 'Pero recuerda que el hígado también fabrica los anticoagulantes naturales: proteína C, proteína S y antitrombina. Por eso el cirrótico no solo sangra: tiene a la vez una tendencia paradójica a trombosar. Un INR alto no lo protege de una trombosis.' },
        ] },
        { title: 'Factor V', tag: 'La clave', kind: 'key', items: [
          { t: 'Hepático, sin vitamina K', d: 'Mide la síntesis hepática directa',
            say: 'Y la herramienta para separar ambos cuadros es el factor cinco. Se fabrica solo en el hígado, pero no necesita vitamina K. Por eso mide directamente la función de síntesis.' },
          { t: 'TP largo + factor V bajo', d: 'Daño hepático: no corrige con vitamina K',
            say: 'Si el TP está largo y el factor cinco está bajo, el problema es el hígado, y la vitamina K parenteral no lo va a corregir. Si el factor cinco está normal, piensa en déficit de vitamina K. Esa diferencia se pregunta.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Anticoagulantes cumarínicos',
      title: 'Acenocumarol y warfarina: lo que tienes que saber',
      cards: [
        { title: 'Mecanismo', tag: 'Bloquean el reciclaje', kind: 'pharma', items: [
          { t: 'Inhiben la VKORC1', d: 'Epóxido reductasa de la vitamina K',
            say: 'Pasemos al paciente anticoagulado. El acenocumarol y la warfarina inhiben la enzima que recicla la vitamina K, la epóxido reductasa. Sin vitamina K activa, el hígado produce factores dos, siete, nueve y diez que no funcionan. Es un déficit de vitamina K provocado a propósito.' },
        ] },
        { title: 'Meta de INR', tag: 'Rango terapéutico', kind: 'criteria', items: [
          { t: 'Habitual: INR 2 a 3', d: 'Fibrilación auricular, trombosis venosa',
            say: 'La meta habitual es un INR entre dos y tres.' },
          { t: 'Válvula mecánica mitral: 2,5 a 3,5', d: 'Meta más alta',
            say: 'En la válvula mecánica mitral, la meta sube: entre dos coma cinco y tres coma cinco.' },
        ] },
        { title: 'Interacciones', tag: 'Ojo en el examen', kind: 'alert', items: [
          { t: 'Potencian el efecto', d: 'Amiodarona, metronidazol, ciprofloxacino, cotrimoxazol',
            say: 'Y el INR fluctúa mucho por interacciones. Amiodarona, metronidazol, ciprofloxacino y cotrimoxazol inhiben el citocromo que degrada al cumarínico, y el INR se dispara. Cuando en un caso aparece un paciente con acenocumarol que empezó un antibiótico, busca la sobreanticoagulación.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Sobreanticoagulación',
      title: 'INR alto: decide el sangrado, no el número',
      nodes: [
        { id: 'pac', col: 0, row: 2, k: 'start', t: 'Cumarínico con INR alto', s: '¿Sangra?' },
        { id: 'a', col: 2, row: 0, k: 'good', t: 'INR 4,5–10 sin sangrado', s: 'Suspender 1–2 dosis · sin vitamina K' },
        { id: 'b', col: 2, row: 1, k: 'refer', t: 'INR > 10 sin sangrado', s: 'Suspender + vitamina K1 oral 2,5–5 mg' },
        { id: 'c', col: 2, row: 2, k: 'refer', t: 'Sangrado leve', s: 'Suspender + vitamina K1 oral 2,5–5 mg' },
        { id: 'd', col: 2, row: 3, k: 'alert', t: 'Sangrado grave', s: 'CCP 25–50 UI/kg + vitamina K 10 mg EV' },
        { id: 'pfc', col: 3, row: 4, k: 'trap', t: 'Sin CCP: plasma fresco', s: '15 mL/kg · lento, sobrecarga' },
      ],
      edges: [
        { from: 'pac', to: 'a' }, { from: 'pac', to: 'b' }, { from: 'pac', to: 'c' }, { from: 'pac', to: 'd' },
        { from: 'd', to: 'pfc', label: 'si no hay' },
      ],
      steps: [
        { show: ['pac'], note: 'Dos preguntas: ¿sangra? y ¿cuánto INR?',
          say: 'Este es el corazón de la clase. Ante un paciente con cumarínico y el INR alto, haces dos preguntas en orden: primero, ¿está sangrando?, y solo después, ¿cuánto es el INR?' },
        { show: ['a'], note: 'Sin sangrado y bajo 10: basta suspender',
          say: 'INR entre cuatro coma cinco y diez, sin sangrado: suspendes una o dos tomas, controlas el INR y reinicias con una dosis menor cuando vuelve al rango. No se da vitamina K de rutina. Esta es la trampa más frecuente del tema: la vitamina K aquí sobra.' },
        { show: ['b'], note: 'Sobre 10: vitamina K oral, dosis baja',
          say: 'INR sobre diez, sin sangrado: suspendes el fármaco y das vitamina K uno por vía oral, en dosis bajas, dos coma cinco a cinco miligramos. ¿Por qué oral y baja? Porque es más segura y evita que el paciente quede resistente al cumarínico por días.' },
        { show: ['c'], note: 'Sangrado leve: igual que INR sobre 10',
          say: 'Si hay un sangrado leve o mucocutáneo, con cualquier INR, la conducta es la misma: suspender, vitamina K oral y hemostasia local.' },
        { show: ['d'], note: 'Sangrado grave: el INR da igual',
          say: 'Y si el sangrado es grave o amenaza la vida, el valor del INR ya no importa. Suspendes, y das de inmediato concentrado de complejo protrombínico de cuatro factores, veinticinco a cincuenta unidades por kilo endovenoso, más vitamina K diez miligramos endovenosa.' },
        { show: ['pfc'], note: 'El plasma es la alternativa, no la primera opción',
          say: 'Si no hay concentrado, usas plasma fresco congelado, quince mililitros por kilo, junto con la vitamina K. Funciona, pero es lento y mete mucho volumen.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Reversión urgente',
      title: 'CCP, plasma y vitamina K endovenosa',
      cards: [
        { title: 'CCP de 4 factores', tag: 'Primera elección', kind: 'pharma', items: [
          { t: 'Trae II, VII, IX y X', d: 'Justo lo que falta',
            say: '¿Por qué el concentrado de complejo protrombínico es la primera elección? Porque trae exactamente los cuatro factores que el cumarínico dejó inactivos: dos, siete, nueve y diez.' },
          { t: 'Revierte en 10–15 minutos', d: 'Sin sobrecarga de volumen',
            say: 'Revierte la anticoagulación en diez a quince minutos, en un volumen pequeño. El plasma tarda horas y puede sobrecargar a un paciente mayor o cardiópata.' },
        ] },
        { title: 'Vitamina K EV', tag: 'Siempre asociada', kind: 'alert', items: [
          { t: 'Sostiene la reversión', d: 'El CCP dura poco; la vitamina K, más',
            say: 'La vitamina K endovenosa acompaña siempre al concentrado. El concentrado corrige ahora, pero la vitamina K es la que permite que el hígado vuelva a fabricar factores funcionales en las horas siguientes.' },
          { t: 'Infusión lenta', d: '10 mg en 100 mL de suero en 30 min',
            say: 'Y un detalle de seguridad: se diluye en cien mililitros de suero fisiológico y pasa en treinta minutos. En bolo rápido puede provocar una anafilaxia grave.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Anticoagulantes directos',
      title: 'Anticoagulantes orales directos y heparina',
      cards: [
        { title: 'Sin control de laboratorio', tag: 'Vida media corta', kind: 'normal', items: [
          { t: 'Anti-Xa y antitrombina', d: 'Rivaroxabán, apixabán, edoxabán · dabigatrán',
            say: 'Los anticoagulantes orales directos funcionan distinto. Rivaroxabán, apixabán y edoxabán inhiben directamente el factor diez activado; el dabigatrán inhibe directamente la trombina.' },
          { t: 'Vida media 8–14 horas', d: 'Con función renal normal',
            say: 'No se controlan con TP ni TTPK, y su vida media es corta, de ocho a catorce horas si el riñón funciona bien.' },
        ] },
        { title: 'Antídotos', tag: 'Hemorragia mayor', kind: 'pharma', items: [
          { t: 'Dabigatrán: idarucizumab', d: '5 g EV · neutraliza en minutos',
            say: 'Ante una hemorragia mayor o una cirugía de urgencia, cada uno tiene su antídoto. El dabigatrán tiene uno específico: el idarucizumab, un anticuerpo monoclonal, cinco gramos endovenosos, que lo neutraliza en minutos.' },
          { t: 'Anti-Xa: andexanet alfa', d: 'O CCP 50 UI/kg si no hay',
            say: 'Para rivaroxabán y apixabán existe el andexanet alfa. Pero en la mayoría de los hospitales públicos no está, y se usa el concentrado de complejo protrombínico, cincuenta unidades por kilo.' },
          { t: 'Heparina no fraccionada: protamina', d: '1 mg neutraliza 100 UI',
            say: 'Y para la heparina no fraccionada, el antídoto es el sulfato de protamina: un miligramo neutraliza cien unidades de heparina puestas en las últimas dos horas. Protamina es para heparina; nunca para el acenocumarol.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol de decisión para el paciente con cumarínico e INR alto.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['INR 4,5–10 sin sangrado', 'Suspender 1–2 dosis y controlar', 'Dar vitamina K de rutina'],
          say: 'Repasemos las trampas. INR entre cuatro coma cinco y diez sin sangrado: suspender una o dos dosis y controlar. El error es dar vitamina K de rutina.' },
        { cells: ['INR > 10 sin sangrado', 'Suspender + vitamina K1 oral 2,5–5 mg', 'Plasma fresco o vitamina K EV'],
          say: 'INR sobre diez sin sangrado: suspender y vitamina K oral en dosis baja. El error es irse al plasma o a la vitamina K endovenosa en un paciente que no sangra.' },
        { cells: ['Sangrado grave, cualquier INR', 'CCP + vitamina K 10 mg EV lenta', 'Solo vitamina K: demora horas'],
          say: 'Sangrado grave con cualquier INR: concentrado de complejo protrombínico más vitamina K endovenosa lenta. Dar solo vitamina K es quedarse corto, porque demora horas en actuar.' },
        { cells: ['TP largo con factor V bajo', 'Daño hepático crónico', 'Esperar corrección con vitamina K'],
          say: 'TP largo con factor cinco bajo: es daño hepático, y no va a corregir con vitamina K.' },
        { cells: ['Colestasis o antibióticos prolongados', 'Déficit de vitamina K', 'Pensar en hemofilia'],
          say: 'Colestasis, malabsorción o antibióticos prolongados con TP largo: déficit de vitamina K, que corrige en doce a veinticuatro horas con fitomenadiona.' },
        { cells: ['Hemorragia mayor con dabigatrán', 'Idarucizumab', 'Protamina'],
          say: 'Y hemorragia mayor con dabigatrán: idarucizumab. La protamina es solo para la heparina.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 71 años con fibrilación auricular en tratamiento con acenocumarol consulta por hematemesis y melena de 6 horas, con mareo ortostático. PA 90/55 mmHg, FC 112 lpm, palidez y sudoración fría. Hb 7,8 g/dL, plaquetas 210.000/µL, INR 8,5.',
      question: 'Además de la reanimación y la endoscopía, ¿cuál es la conducta más adecuada respecto de la anticoagulación?',
      options: [
        { letter: 'A', text: 'Suspender 1 a 2 dosis de acenocumarol y controlar INR en 24 horas' },
        { letter: 'B', text: 'Suspender acenocumarol y dar vitamina K1 oral 2,5 a 5 mg' },
        { letter: 'C', text: 'Concentrado de complejo protrombínico 25–50 UI/kg EV más vitamina K 10 mg EV lenta' },
        { letter: 'D', text: 'Sulfato de protamina EV' },
        { letter: 'E', text: 'Idarucizumab 5 g EV' },
      ],
      correct: 'C',
      explanation: 'Hemorragia digestiva alta con inestabilidad hemodinámica: sangrado grave con riesgo vital. Con cualquier INR, se suspende el cumarínico y se revierte de inmediato con CCP de 4 factores más vitamina K 10 mg EV en infusión lenta. La vitamina K oral es para el INR sobre 10 sin sangrado o el sangrado leve; protamina e idarucizumab son antídotos de heparina y dabigatrán.',
      say: {
        stem: 'Vamos con un caso. Hombre de setenta y un años con fibrilación auricular, en tratamiento con acenocumarol, que consulta por hematemesis y melena de seis horas, con mareo al pararse. Está hipotenso, con presión de noventa sobre cincuenta y cinco, taquicárdico, pálido y sudoroso. Hemoglobina de siete coma ocho, plaquetas normales e INR de ocho coma cinco.',
        question: 'Además de reanimar y pedir la endoscopía, ¿qué haces con la anticoagulación?',
        options: 'Las opciones son: suspender una o dos dosis y controlar, suspender y dar vitamina K oral, concentrado de complejo protrombínico más vitamina K endovenosa, protamina, o idarucizumab. Piénsalo.',
        answer: 'La respuesta es la C. El número engaña: un INR de ocho coma cinco sin sangrado se manejaría solo suspendiendo dosis. Pero este paciente sangra y está en shock, y con sangrado grave el INR deja de importar: concentrado de complejo protrombínico y vitamina K endovenosa lenta. La vitamina K oral es el distractor tentador, pero demora horas. La protamina es para la heparina, y el idarucizumab, para el dabigatrán.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 96',
      stem: 'Un paciente de 55 años con antecedentes de hipertensión arterial y una válvula cardíaca aórtica mecánica, anticoagulado con antagonistas de la vitamina K, ingresa al servicio de urgencias por un episodio de hemorragia digestiva alta, con signos de inestabilidad hemodinámica. Además de la administración de fluidos y la solicitud de una endoscopía digestiva alta con urgencia,',
      question: '¿cuál es la conducta más adecuada para el manejo de este paciente?',
      options: [
        { letter: 'A', text: 'Administrar vitamina K por vía endovenosa' },
        { letter: 'B', text: 'Transfundir sangre completa' },
        { letter: 'C', text: 'Administrar ácido tranexámico endovenoso' },
        { letter: 'D', text: 'Administrar plasma fresco congelado endovenoso' },
        { letter: 'E', text: 'Administrar factor VII recombinante endovenoso' },
      ],
      correct: 'D',
      explanation: 'Sangrado grave con inestabilidad en un paciente con antagonista de la vitamina K: se necesita reposición inmediata de factores. La primera elección es el CCP, que no aparece entre las alternativas; su alternativa es el plasma fresco congelado, junto con vitamina K EV. La vitamina K sola demora horas en actuar.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil veinticuatro. Paciente de cincuenta y cinco años, hipertenso, con una válvula aórtica mecánica, anticoagulado con antagonistas de la vitamina K. Llega a urgencias con una hemorragia digestiva alta e inestabilidad hemodinámica. Además de los fluidos y la endoscopía urgente,',
        question: '¿cuál es la conducta más adecuada?',
        options: 'Las opciones son: vitamina K endovenosa, sangre completa, ácido tranexámico, plasma fresco congelado, o factor siete recombinante. Piénsalo.',
        answer: 'Es la D, plasma fresco congelado. Fíjate que el concentrado de complejo protrombínico no está entre las alternativas, así que eliges su reemplazo, que es el plasma. El distractor tentador es la vitamina K endovenosa: es correcta como complemento, pero sola tarda horas, y este paciente está sangrando ahora.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 150',
      stem: 'Un paciente de 62 años, con antecedente de prótesis mecánica de válvula mitral e insuficiencia renal crónica, con un clearence de creatinina estimado de 20 ml/min, presenta un cuadro de palpitaciones. Se realiza electrocardiograma que muestra una taquiarritmia irregular con QRS angosto y ausencia de onda P.',
      question: '¿Qué tratamiento es el más adecuado para su manejo?',
      options: [
        { letter: 'A', text: 'Apixabán' },
        { letter: 'B', text: 'Enoxaparina' },
        { letter: 'C', text: 'Dabigatrán' },
        { letter: 'D', text: 'Acenocumarol' },
        { letter: 'E', text: 'Rivaroxabán' },
      ],
      correct: 'D',
      explanation: 'Fibrilación auricular en un portador de válvula mecánica mitral: el anticoagulante de elección es el cumarínico, con meta de INR 2,5 a 3,5. Los anticoagulantes orales directos no se usan en las prótesis valvulares mecánicas, y la insuficiencia renal grave también limita las heparinas de bajo peso molecular.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Paciente de sesenta y dos años, con una prótesis mecánica de válvula mitral e insuficiencia renal crónica, con un clearance de creatinina de veinte. Consulta por palpitaciones y el electrocardiograma muestra una taquiarritmia irregular, de QRS angosto y sin ondas P.',
        question: '¿Qué tratamiento es el más adecuado?',
        options: 'Las opciones son: apixabán, enoxaparina, dabigatrán, acenocumarol, o rivaroxabán. Piénsalo.',
        answer: 'Es la D, acenocumarol. Es una fibrilación auricular en un paciente con válvula mecánica, y ahí el anticoagulante de elección sigue siendo el cumarínico, con la meta más alta que vimos, entre dos coma cinco y tres coma cinco. Los anticoagulantes directos no se usan en las prótesis mecánicas, y la falla renal grave hace todavía peor opción al dabigatrán y a la enoxaparina.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Mecanismo', tag: 'II, VII, IX y X', kind: 'key', items: [
          { t: 'Vitamina K activa II, VII, IX y X', d: 'Y las proteínas C y S',
            say: 'Cerremos con las reglas de oro. La vitamina K activa los factores dos, siete, nueve y diez, y las proteínas C y S. El primero en caer es el siete, y por eso se alarga primero el TP.' },
          { t: 'Factor V bajo = hígado', d: 'No corrige con vitamina K',
            say: 'El factor cinco no depende de la vitamina K: si está bajo, el problema es el hígado.' },
        ] },
        { title: 'Sobreanticoagulación', tag: 'Primero el sangrado', kind: 'alert', items: [
          { t: 'Sin sangrado, INR 4,5–10', d: 'Suspender dosis, sin vitamina K',
            say: 'Sin sangrado y con INR entre cuatro coma cinco y diez, solo se suspenden dosis.' },
          { t: 'Sin sangrado, INR > 10', d: 'Vitamina K oral 2,5–5 mg',
            say: 'Sobre diez, se agrega vitamina K oral en dosis baja.' },
          { t: 'Sangrado grave', d: 'CCP + vitamina K EV lenta',
            say: 'Y con sangrado grave, concentrado de complejo protrombínico más vitamina K endovenosa lenta; el plasma, solo si no hay concentrado.' },
        ] },
        { title: 'Antídotos', tag: 'Cada uno el suyo', kind: 'pharma', items: [
          { t: 'Dabigatrán: idarucizumab', d: 'Anti-Xa: andexanet o CCP',
            say: 'El dabigatrán se revierte con idarucizumab; los anti diez a, con andexanet o concentrado; y la heparina, con protamina.' },
          { t: 'Heparina: protamina', d: 'Prepara la próxima clase',
            say: 'Si te llevas una sola idea de hoy: frente al paciente anticoagulado con INR alto, la primera pregunta no es el número, es si está sangrando. En la próxima clase veremos una coagulopatía adquirida que consume todo a la vez: la coagulación intravascular diseminada. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Cumarínico con INR alto: qué hacer',
    root: N('start', 'Paciente con cumarínico e INR alto', 'Acenocumarol o warfarina',
      'Paciente en tratamiento con acenocumarol o warfarina y un INR sobre el rango. Antes de mirar el número, pregunta si está sangrando.',
      ['', N('q', '¿Hay sangrado?', 'Grave · leve · ninguno',
        'La primera pregunta define la urgencia: ¿sangrado grave con riesgo vital, sangrado leve, o ningún sangrado?',
        ['Grave', N('alert', 'CCP + vitamina K 10 mg EV lenta', 'Sin CCP: plasma fresco 15 mL/kg',
          'Sangrado grave, con cualquier INR: suspender el cumarínico, concentrado de complejo protrombínico de cuatro factores y vitamina K endovenosa lenta. Si no hay concentrado, plasma fresco congelado.')],
        ['Leve', N('do', 'Suspender + vitamina K1 oral', '2,5–5 mg · hemostasia local',
          'Sangrado leve o mucocutáneo: suspender, vitamina K oral en dosis baja y hemostasia local.')],
        ['Ninguno', N('q', '¿INR sobre 10?', 'Sin sangrado',
          'Si no sangra, recién ahora importa el número: ¿el INR está sobre diez?',
          ['SÍ', N('do', 'Suspender + vitamina K1 oral', '2,5–5 mg · INR en 24 h',
            'INR sobre diez sin sangrado: suspender el fármaco y vitamina K oral, dos coma cinco a cinco miligramos.')],
          ['NO', N('ok', 'Suspender 1–2 dosis', 'Sin vitamina K · reiniciar con dosis menor',
            'INR entre cuatro coma cinco y diez sin sangrado: suspender una o dos dosis, sin vitamina K, y reiniciar con una dosis menor al volver al rango.')])])]),
  },
};
