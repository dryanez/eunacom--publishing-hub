// Clase 3.1 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_gastroenterologia.cjs (gastro-13).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gastro-13',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Dos preguntas de laboratorio que ordenan cualquier ictericia',
      say: 'Bienvenidos. Hoy abrimos el bloque de hígado con la ictericia y la colestasia. Es un tema muy rentable, porque casi cualquier pregunta de ictericia se resuelve con un algoritmo de dos pasos, siempre en el mismo orden. Si lo aprendes bien hoy, te va a servir para las clases de hepatitis y de vía biliar que vienen.',
    },

    {
      type: 'flow',
      kicker: 'Primer paso',
      title: '¿Qué bilirrubina sube?',
      nodes: [
        { id: 'ict', col: 0, row: 1, k: 'start', t: 'Ictericia', s: 'Visible sobre 2,5–3 mg/dL, primero en escleras' },
        { id: 'car', col: 0, row: 3, k: 'trap', t: 'Carotenemia', s: 'Tiñe palmas y plantas, no escleras' },
        { id: 'ind', col: 1, row: 0, k: 'mech', t: 'Bilirrubina indirecta', s: 'No conjugada' },
        { id: 'gil', col: 2, row: 0, k: 'good', t: 'Síndrome de Gilbert', s: 'Resto normal · 5–10 % · observar' },
        { id: 'hem', col: 3, row: 0, k: 'risk', t: 'Hemólisis', s: 'Anemia, LDH alta, esquistocitos' },
        { id: 'dir', col: 1, row: 2, k: 'alert', t: 'Bilirrubina directa', s: '> 30 % del total: siempre patológica' },
      ],
      edges: [
        { from: 'ict', to: 'ind', label: 'indirecta' }, { from: 'ind', to: 'gil', label: 'resto normal' },
        { from: 'ind', to: 'hem', label: 'anemia' },
        { from: 'ict', to: 'dir', label: 'directa' },
      ],
      steps: [
        { show: ['ict'], note: 'Normal: bajo 1,1 mg/dL',
          say: 'Partamos por los números. La bilirrubina total normal está bajo uno coma uno miligramos por decilitro, pero la ictericia recién se ve sobre dos coma cinco a tres. Y lo primero que se tiñe son las escleras. Mira estos ojos: las escleras amarillas.',
            photos: [{ src: 'biblioteca/01_gastroenterologia/gastro-13/10_ictericia-escleral__knoop_p34.jpg', label: 'Ictericia escleral', at: 'Mira estos ojos', credit: 'Knoop, Atlas of Emergency Medicine, p. 34' }] },
        { show: ['car'], note: 'Si las escleras están blancas, no es ictericia',
          say: 'Ese dato sirve para una trampa clásica: la carotenemia. El exceso de caroteno tiñe las palmas y las plantas, pero no las escleras, y es benigno. Escleras blancas, no es ictericia.' },
        { show: ['ind'], note: 'Primera pregunta: ¿indirecta o directa?',
          say: 'Ahora, el primer paso del algoritmo: ¿la bilirrubina que sube es la indirecta, la no conjugada, o la directa?' },
        { show: ['gil'], note: 'Joven, asintomático, todo lo demás normal',
          say: 'Si es indirecta y todo lo demás está normal, es un síndrome de Gilbert. Es benigno, lo tiene entre el cinco y el diez por ciento de la población, y la conducta es observar y tranquilizar.' },
        { show: ['hem'], note: 'Indirecta con anemia: se trata la causa',
          say: 'La otra causa de bilirrubina indirecta es la hemólisis. Aquí no está todo normal: hay anemia, la LDH está alta y en el frotis aparecen esquistocitos. La conducta es tratar la causa.' },
        { show: ['dir'], note: 'La directa nunca es un hallazgo benigno',
          say: 'Y si la directa supera el treinta por ciento del total, estamos ante una hiperbilirrubinemia directa. Esta es siempre patológica, y obliga al segundo paso.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Segundo paso',
      title: 'Hepatitis vs colestasia',
      nodes: [
        { id: 'dir', col: 0, row: 1, k: 'start', t: 'Bilirrubina directa', s: '¿Qué otra enzima sube?' },
        { id: 'tra', col: 1, row: 0, k: 'mech', t: 'Transaminasas altas', s: 'AST y ALT' },
        { id: 'hep', col: 2, row: 0, k: 'effect', t: 'Hepatitis', s: 'Lesión del hepatocito' },
        { id: 'fa', col: 1, row: 2, k: 'mech', t: 'FA y GGT altas', s: 'Fosfatasas alcalinas + GGT' },
        { id: 'col', col: 2, row: 2, k: 'effect', t: 'Colestasia', s: 'Obstrucción del flujo biliar' },
        { id: 'ggt', col: 3, row: 2, k: 'trap', t: 'La GGT confirma el origen', s: 'Hepatobiliar, no óseo' },
      ],
      edges: [
        { from: 'dir', to: 'tra' }, { from: 'tra', to: 'hep' },
        { from: 'dir', to: 'fa' }, { from: 'fa', to: 'col' }, { from: 'col', to: 'ggt' },
      ],
      steps: [
        { show: ['dir'], note: 'Ahora miramos las enzimas',
          say: 'Tenemos una bilirrubina directa elevada. El segundo paso es mirar qué otra enzima la acompaña.' },
        { show: ['tra', 'hep'], note: 'El problema está en la célula hepática',
          say: 'Si suben las transaminasas, la AST y la ALT, el problema está en el hepatocito: es una hepatitis. Eso lo desarrollamos en la próxima clase.' },
        { show: ['fa', 'col'], note: 'El problema está en el drenaje de la bilis',
          say: 'Si en cambio suben las fosfatasas alcalinas y la gama glutamil transferasa, la GGT, el hepatocito está bien; lo que falla es la salida de la bilis. Eso es colestasia.' },
        { show: ['ggt'], note: 'FA alta con GGT normal: pensar en hueso',
          say: 'Y fíjate en el rol de la GGT. La fosfatasa alcalina también sale del hueso, así que la GGT alta es la que confirma que el origen es hepatobiliar y no óseo.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Clasificación',
      title: 'Colestasia: el dolor lo dice todo',
      nodes: [
        { id: 'col', col: 0, row: 2, k: 'start', t: 'Colestasia', s: 'FA y GGT altas' },
        { id: 'aut', col: 1, row: 0, k: 'cause', t: 'Crónica autoinmune', s: 'Cirrosis biliar primaria · colangitis esclerosante' },
        { id: 'cdl', col: 1, row: 2, k: 'risk', t: 'Coledocolitiasis', s: 'Dolor + ictericia' },
        { id: 'cht', col: 2, row: 2, k: 'alert', t: 'Colangitis', s: 'Charcot: dolor + ictericia + fiebre' },
        { id: 'can', col: 1, row: 4, k: 'alert', t: 'Cáncer', s: 'Sin dolor, en el adulto mayor' },
        { id: 'tip', col: 2, row: 4, k: 'risk', t: 'Páncreas, primero', s: 'Ampolla de Vater · colangiocarcinoma · vesícula' },
      ],
      edges: [
        { from: 'col', to: 'aut', label: 'crónica' },
        { from: 'col', to: 'cdl', label: 'con dolor' }, { from: 'cdl', to: 'cht', label: '+ fiebre' },
        { from: 'col', to: 'can', label: 'silente' }, { from: 'can', to: 'tip' },
      ],
      steps: [
        { show: ['col'], note: 'Tres grupos de causas',
          say: 'Ya sabemos que es una colestasia. Ahora hay que ordenar la causa, y se separan en tres grupos.' },
        { show: ['aut'], note: 'AMA en la mujer · ANCA con colitis ulcerosa',
          say: 'El primero son las colestasias crónicas autoinmunes. La cirrosis biliar primaria, en una mujer con prurito y anticuerpos antimitocondriales. Y la colangitis esclerosante primaria, con ANCA y asociada a colitis ulcerosa. Las vemos a fondo en hepatitis crónica.' },
        { show: ['cdl'], note: 'Colestasia aguda con dolor = cálculo',
          say: 'El segundo grupo es la colestasia aguda con dolor. Dolor más ictericia es una coledocolitiasis: un cálculo que tapa el colédoco.' },
        { show: ['cht'], note: 'Tríada de Charcot = urgencia',
          say: 'Y si a eso se suma fiebre, tienes la tríada de Charcot: dolor, ictericia y fiebre. Es una colangitis, y es una urgencia.' },
        { show: ['can'], note: 'La clave es la ausencia de dolor',
          say: 'El tercer grupo es el que más se pregunta: la colestasia sin dolor, silente, en un adulto mayor. Eso es cáncer hasta que se demuestre lo contrario.' },
        { show: ['tip'], note: 'El más frecuente: cabeza de páncreas',
          say: '¿Cuál? El más frecuente es el cáncer de páncreas. Los otros son el de la ampolla de Vater, el colangiocarcinoma y el cáncer de vesícula.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Ictericia maligna',
      title: 'Cómo reconocer el cáncer de páncreas',
      cards: [
        { title: 'Las 3 D', tag: 'Más baja de peso', kind: 'criteria', items: [
          { t: 'Diabetes de reciente inicio', d: 'En un adulto mayor',
            say: 'Para reconocer el cáncer de páncreas, el libro usa una regla: las tres D. La primera es una diabetes de reciente inicio en un adulto mayor.' },
          { t: 'Depresión inexplicada', d: 'Sin causa aparente',
            say: 'La segunda, una depresión sin explicación.' },
          { t: 'Dolor sordo', d: 'Con ictericia progresiva e indolora',
            say: 'Y la tercera, un dolor sordo. Todo eso con baja de peso y una ictericia que avanza sin dolor cólico. Ojo con la diferencia: el dolor sordo del tumor no es el cólico del cálculo.' },
        ] },
        { title: 'Courvoisier-Terrier', tag: 'Signo clásico', kind: 'alert', items: [
          { t: 'Vesícula palpable e indolora', d: 'Con ictericia',
            say: 'Y el signo que tienes que reconocer al examen físico: el de Courvoisier-Terrier. Una vesícula palpable y que no duele, en un paciente ictérico. Es la vesícula distendida por un tumor que tapa la vía biliar lentamente.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Ictericia maligna',
      title: 'Tratamiento del cáncer de páncreas y el ampuloma',
      cards: [
        { title: 'Resecable', tag: 'Solo 15 a 20 %', kind: 'key', items: [
          { t: 'Whipple + quimioterapia adyuvante', d: 'Tumor de la cabeza resecable',
            say: 'Solo quince a veinte por ciento de los cánceres de páncreas son resecables al diagnóstico. En un tumor de la cabeza resecable se hace la duodenopancreatectomía cefálica, o cirugía de Whipple, seguida de quimioterapia adyuvante.' },
          { t: 'Avanzado: quimioterapia paliativa', d: 'FOLFIRINOX o gemcitabina',
            say: 'Si es localmente avanzado o hay metástasis, quimioterapia paliativa, con FOLFIRINOX o gemcitabina.' },
        ] },
        { title: 'Paliación', tag: 'Calidad de vida', kind: 'pharma', items: [
          { t: 'Prótesis biliar por CPRE', d: 'Alivia ictericia y prurito',
            say: 'La paliación incluye la prótesis biliar por CPRE, que alivia la ictericia y el prurito.' },
          { t: 'Analgesia, enzimas, anticoagulación', d: 'Bloqueo del plexo celíaco si el dolor es refractario',
            say: 'Además, analgesia, con bloqueo del plexo celíaco si el dolor es refractario, enzimas pancreáticas y anticoagulación si hay trombosis.' },
          { t: 'Sobrevida a 5 años menor de 10 %', d: 'Sospechar, estudiar y derivar sin demora',
            say: 'La sobrevida a cinco años es menor de diez por ciento. Tu papel es sospechar, hacer el estudio inicial y derivar sin demora.' },
        ] },
        { title: 'Ampuloma', tag: 'Tumor de la ampolla de Vater', kind: 'alert', items: [
          { t: 'Ictericia fluctuante', d: 'El tumor se necrosa y se reabre',
            say: 'El ampuloma, el tumor de la ampolla de Vater, da una ictericia fluctuante, porque el tumor se necrosa y la vía se reabre. Puede dar anemia, melena y a veces pancreatitis.' },
          { t: 'Mejor pronóstico: obstruye precoz', d: 'Ecoendoscopía o duodenoscopía con biopsia; Whipple',
            say: 'Tiene mejor pronóstico porque obstruye temprano. Se diagnostica con ecoendoscopía o duodenoscopía con biopsia de la papila, y también se trata con Whipple.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Estudio',
      title: 'Siempre primero la ecografía',
      nodes: [
        { id: 'eco', col: 0, row: 1, k: 'start', t: 'Ecografía abdominal', s: 'Siempre el primer examen' },
        { id: 'via', col: 1, row: 1, k: 'q', t: '¿Qué muestra?', s: 'Vía biliar, colédoco, masa' },
        { id: 'crm', col: 2, row: 0, k: 'good', t: 'Colangiorresonancia', s: 'Elección para la vía biliar' },
        { id: 'tac', col: 2, row: 2, k: 'refer', t: 'TAC con contraste', s: 'Si sugiere masa pancreática' },
      ],
      edges: [
        { from: 'eco', to: 'via' },
        { from: 'via', to: 'crm', label: 'vía biliar' },
        { from: 'via', to: 'tac', label: 'masa en páncreas' },
      ],
      steps: [
        { show: ['eco'], note: 'Regla sin excepciones',
          say: '¿Cómo se estudia? Aquí hay una regla sin excepciones: toda ictericia parte con una ecografía abdominal.' },
        { show: ['via'], note: '¿Vía biliar dilatada? ¿Colédoco? ¿Masa?',
          say: 'La ecografía responde tres preguntas: si la vía biliar está dilatada, cómo está el colédoco, y si hay una masa. Mira esta ecografía: el colédoco está dilatado. Si la vía biliar está ancha, la ictericia es obstructiva, y hay que buscar la causa: cálculo o tumor.',
          photo: { src: 'biblioteca/01_gastroenterologia/gastro-13/01_coledoco-dilatado-eco-colangio-rm__cto-radiologia_p45.jpg', label: 'Colédoco dilatado (eco)', at: 'Mira esta ecografía', credit: 'Manual CTO Radiología 14.ª ed., p. 45' } },
        { show: ['crm'], note: 'Ve la vía biliar sin invadir',
          say: 'Después, el examen de elección para estudiar la vía biliar es la colangiorresonancia. Mira esta imagen: la flecha blanca marca el colédoco dilatado y la roja, el cálculo que lo obstruye, una coledocolitiasis.',
          photo: { src: 'biblioteca/01_gastroenterologia/gastro-13/01_coledoco-dilatado-eco-colangio-rm_alt1__cto-radiologia_p45.jpg', label: 'Cálculo en colangio-RM', at: 'Mira esta imagen', credit: 'Manual CTO Radiología 14.ª ed., p. 45' } },
        { show: ['tac'], note: 'El TAC es mejor para el páncreas',
          say: 'Pero si la ecografía muestra o sugiere una masa en el páncreas, el examen es el TAC de abdomen con contraste, que ve mejor el páncreas. Esa elección entre colangiorresonancia y TAC se pregunta mucho.' },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'El camino de la bilirrubina',
      images: [
        { src: 'animaciones/gastro-13/A1_camino_bilirrubina.mp4', label: 'Dónde se corta', credit: 'Ilustración: Servier Medical Art, CC BY 4.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Tres tipos de ictericia',
          say: 'La bilirrubina viaja del glóbulo rojo a la sangre, el hígado la conjuga y sale por la bilis al intestino. Si el problema es antes del hígado, como la hemólisis o el Gilbert, sube la indirecta; si es en el hígado, suben ambas; y si se obstruye la vía biliar, sube la directa, con coluria y acolia.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos los dos pasos en un solo árbol.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Patrón bioquímico y conducta',
      head: ['Patrón', 'Contexto', 'Diagnóstico y conducta'],
      rows: [
        { cells: ['Bilirrubina indirecta aislada', 'Joven asintomático', 'Gilbert → observar'],
          say: 'Repasemos en una tabla. Bilirrubina indirecta aislada en un joven asintomático: Gilbert, se observa.' },
        { cells: ['Indirecta + anemia + LDH alta', 'Esquistocitos', 'Hemólisis → tratar la causa'],
          say: 'Indirecta con anemia, LDH alta y esquistocitos: hemólisis, se trata la causa.' },
        { cells: ['FA y GGT + dolor', 'Cólico biliar', 'Coledocolitiasis → eco → colangio-RM → CPRE'],
          say: 'Colestasia con dolor: coledocolitiasis. Ecografía, colangiorresonancia y luego la colangiopancreatografía retrógrada endoscópica, la CPRE, que extrae el cálculo.' },
        { cells: ['FA y GGT + dolor + fiebre', 'Tríada de Charcot', 'Colangitis → CPRE urgente + antibióticos'],
          say: 'Si se agrega fiebre: colangitis, con CPRE urgente y antibióticos.' },
        { cells: ['FA y GGT sin dolor', 'Adulto mayor, baja de peso', 'Cáncer → eco → colangio-RM o TAC'],
          say: 'Y colestasia sin dolor en un adulto mayor que baja de peso: cáncer. Ecografía, y después colangiorresonancia, o TAC si apunta al páncreas.' },
        { cells: ['Ictericia fluctuante con anemia o melena', 'Ampuloma', 'Duodenoscopía o ecoendoscopía con biopsia · Whipple'],
          say: 'Y una ictericia que sube y baja, con anemia o melena: ampuloma. Duodenoscopía o ecoendoscopía con biopsia de la papila, y cirugía de Whipple.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 70 años con ictericia progresiva de 6 semanas, prurito, coluria y baja de 8 kg. Sin dolor abdominal ni fiebre. Diabetes diagnosticada hace 2 meses. Al examen: ictericia marcada y vesícula palpable, no dolorosa. Laboratorio con patrón colestásico.',
      question: 'Tras la ecografía, que sugiere una masa pancreática, ¿cuál es el examen de elección?',
      options: [
        { letter: 'A', text: 'CPRE diagnóstica' },
        { letter: 'B', text: 'TAC de abdomen con contraste' },
        { letter: 'C', text: 'Colangiorresonancia' },
        { letter: 'D', text: 'Biopsia hepática percutánea' },
        { letter: 'E', text: 'Anticuerpos antimitocondriales' },
      ],
      correct: 'B',
      explanation: 'Ictericia indolora, baja de peso, diabetes reciente y signo de Courvoisier-Terrier: cáncer de cabeza de páncreas. La ecografía va primero; si sugiere masa pancreática, el examen de elección es el TAC con contraste. La colangiorresonancia es de elección para la vía biliar, no para el páncreas.',
      say: {
        stem: 'Vamos al caso. Hombre de setenta años con ictericia que ha ido en aumento durante seis semanas, con prurito, coluria y baja de ocho kilos. No tiene dolor ni fiebre, y le diagnosticaron diabetes hace dos meses. Al examen, ictericia marcada y una vesícula palpable que no duele. El laboratorio es colestásico.',
        question: 'La ecografía sugiere una masa en el páncreas. ¿Cuál es el examen de elección?',
        options: 'Las alternativas: una CPRE diagnóstica, un TAC de abdomen con contraste, una colangiorresonancia, una biopsia hepática, o anticuerpos antimitocondriales. Piénsalo.',
        answer: 'Es la B. Junta las piezas: ictericia silente en un adulto mayor, baja de peso, diabetes nueva y vesícula palpable indolora, el signo de Courvoisier-Terrier. Es un cáncer de páncreas. El distractor tentador es la colangiorresonancia, que es de elección para la vía biliar; pero cuando la sospecha es una masa pancreática, el examen que la ve mejor es el TAC con contraste.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'Caso representativo · banco EUNACOM',
      stem: 'Estudiante de 22 años, asintomático, con bilirrubina total de 2,6 mg/dL a expensas de la indirecta en un examen preventivo. Transaminasas, fosfatasas alcalinas, GGT, hemograma y LDH normales.',
      question: '¿Cuál es el diagnóstico más probable y la conducta?',
      options: [
        { letter: 'A', text: 'Hepatitis viral aguda; serología viral y control seriado' },
        { letter: 'B', text: 'Anemia hemolítica; frotis y test de Coombs' },
        { letter: 'C', text: 'Síndrome de Gilbert; tranquilizar y no requiere tratamiento' },
        { letter: 'D', text: 'Coledocolitiasis; ecografía abdominal urgente' },
        { letter: 'E', text: 'Cirrosis biliar primaria; anticuerpos antimitocondriales' },
      ],
      correct: 'C',
      explanation: 'Hiperbilirrubinemia indirecta aislada con el resto de las pruebas y el hemograma normales en un joven asintomático: síndrome de Gilbert, trastorno hereditario benigno de la conjugación (5–10 % de la población). No requiere estudio ni tratamiento.',
      say: {
        stem: 'Ahora una pregunta del banco EUNACOM. Estudiante de veintidós años, asintomático, al que en un examen preventivo le encuentran una bilirrubina total de dos coma seis, a expensas de la indirecta. Transaminasas, fosfatasas alcalinas, GGT, hemograma y LDH, todo normal.',
        question: '¿Cuál es el diagnóstico más probable y la conducta?',
        options: 'Las opciones: hepatitis viral aguda, anemia hemolítica, síndrome de Gilbert, coledocolitiasis, o cirrosis biliar primaria. Piénsalo.',
        answer: 'La respuesta es la C, síndrome de Gilbert. Aplica el primer paso: la bilirrubina es indirecta, así que la hepatitis, el cálculo y la cirrosis biliar quedan fuera, porque esas dan bilirrubina directa. El distractor que queda es la hemólisis, pero con hemograma y LDH normales no hay hemólisis. Es un trastorno benigno de la conjugación: se tranquiliza y no se trata.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'Caso representativo · banco EUNACOM',
      stem: 'Mujer de 55 años con dolor cólico en hipocondrio derecho e ictericia de 2 días, sin fiebre. Bilirrubina 4 mg/dL de predominio directo, FA y GGT elevadas, transaminasas levemente altas. Ecografía: colelitiasis y vía biliar de 9 mm, sin cálculos visibles en el colédoco.',
      question: '¿Cuál es el siguiente examen?',
      options: [
        { letter: 'A', text: 'CPRE directa' },
        { letter: 'B', text: 'Colangiorresonancia' },
        { letter: 'C', text: 'TAC de abdomen con contraste' },
        { letter: 'D', text: 'Biopsia hepática percutánea' },
        { letter: 'E', text: 'Repetir la ecografía en 48 horas' },
      ],
      correct: 'B',
      explanation: 'Colestasia con dolor y sin fiebre: coledocolitiasis. La ecografía ve la vía dilatada pero no el cálculo, así que se confirma con colangiorresonancia antes de la CPRE (invasiva, con riesgo de pancreatitis). Directo a CPRE solo si hay colangitis o si la eco ya vio el cálculo.',
      say: {
        stem: 'Una más del banco. Mujer de cincuenta y cinco años con dolor cólico en el hipocondrio derecho e ictericia de dos días, sin fiebre. Bilirrubina de cuatro, de predominio directo, con fosfatasas y GGT elevadas. La ecografía muestra cálculos en la vesícula y una vía biliar de nueve milímetros, pero no ve cálculos en el colédoco.',
        question: '¿Cuál es el siguiente examen?',
        options: 'Las opciones: CPRE directa, colangiorresonancia, TAC de abdomen, biopsia hepática, o repetir la ecografía en dos días. Piénsalo.',
        answer: 'Es la B, colangiorresonancia. Colestasia con dolor y sin fiebre es coledocolitiasis, pero la ecografía no vio el cálculo. Antes de someterla a una CPRE, que es invasiva y puede causar pancreatitis, se confirma con colangiorresonancia. La trampa es la CPRE directa: solo se va directo si hay colangitis, o si la ecografía ya vio el cálculo en el colédoco.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 145',
      stem: 'Mujer de 70 años con dolor abdominal intenso de 24 horas, fiebre hasta 38,5 grados, marcado malestar general y vómitos alimentarios en múltiples ocasiones. Al examen: presión arterial 90/60, frecuencia cardíaca 105 por minuto, ictericia de piel y mucosas, abdomen doloroso de forma difusa, con resistencia muscular, mayor en el hemiabdomen superior. Bilirrubina total 6,8 mg/dL, directa 6,1 mg/dL, fosfatasas alcalinas y GGT elevadas, transaminasas también altas.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Colecistitis enfisematosa' },
        { letter: 'B', text: 'Plastrón vesicular' },
        { letter: 'C', text: 'Hepatitis aguda' },
        { letter: 'D', text: 'Colangitis aguda' },
        { letter: 'E', text: 'Coledocolitiasis' },
      ],
      correct: 'D',
      explanation: 'Dolor, ictericia y fiebre, con compromiso hemodinámico: es la tríada de Charcot que define la colangitis aguda, una urgencia que requiere drenaje de la vía biliar y antibióticos.',
      say: {
        stem: 'Una pregunta real más, del EUNACOM de diciembre de dos mil dieciocho. Mujer de setenta años con dolor abdominal intenso de un día, fiebre hasta treinta y ocho coma cinco, mal estado general y vómitos repetidos. Al examen está hipotensa, taquicárdica, ictérica, con dolor difuso y resistencia muscular en el hemiabdomen superior. La bilirrubina está en seis coma ocho, de predominio directo, con fosfatasas, GGT y transaminasas todas elevadas.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: colecistitis enfisematosa, plastrón vesicular, hepatitis aguda, colangitis aguda, o coledocolitiasis. Piénsalo.',
        answer: 'Es la D, colangitis aguda. Tiene la tríada de Charcot completa: dolor, ictericia y fiebre, y además está hipotensa y taquicárdica, con compromiso hemodinámico. Eso la separa de la coledocolitiasis simple, que da dolor e ictericia pero no fiebre ni shock. Es una urgencia: va a drenaje de la vía biliar más antibióticos.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2016 · Pregunta 174",
      "stem": "Mujer de 54 años se realiza exámenes como parte de un chequeo médico, que muestran GOT 43 UI/L, GPT 70 UI/L, GGT 433 UI/L, FA 531 UI/L, bilirrubina total 3,0 mg/dL, albúmina 3,7 g/dL y protrombinemia 88 %.",
      "question": "¿Cuál es el diagnóstico de sospecha?",
      "options": [
        {
          "letter": "A",
          "text": "Colestasia por esteatosis hepática"
        },
        {
          "letter": "B",
          "text": "Cirrosis biliar primaria"
        },
        {
          "letter": "C",
          "text": "Colestasia por compresión externa"
        },
        {
          "letter": "D",
          "text": "Colangitis esclerosante primaria"
        },
        {
          "letter": "E",
          "text": "Colangitis esclerosante secundaria"
        }
      ],
      "correct": "B",
      "explanation": "Mujer de edad media con colestasia de laboratorio (FA y GGT muy elevadas, transaminasas casi normales) y función hepática conservada: lo más probable es la cirrosis biliar primaria, hoy llamada colangitis biliar primaria. Se confirma con anticuerpos antimitocondriales. La colangitis esclerosante primaria es más propia de hombres con colitis ulcerosa.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil dieciséis. Mujer de cincuenta y cuatro años que, en un chequeo, tiene transaminasas casi normales, pero la GGT en cuatrocientos treinta y tres y las fosfatasas alcalinas en quinientos treinta y uno, con bilirrubina de tres. La albúmina y la protrombina son normales.",
        "question": "¿Cuál es el diagnóstico de sospecha?",
        "options": "Las opciones: colestasia por hígado graso, cirrosis biliar primaria, compresión externa, colangitis esclerosante primaria, o colangitis esclerosante secundaria. Piénsalo.",
        "answer": "Es la B. Una mujer de edad media con colestasia crónica de laboratorio y función hepática conservada es una cirrosis biliar primaria hasta demostrar lo contrario, y se confirma con anticuerpos antimitocondriales. La colangitis esclerosante primaria tienta, pero es más típica de hombres jóvenes con colitis ulcerosa."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.06.4.006 · Ecotomografía abdominal",
      "stem": "Mujer de 45 años con ictericia, coluria y prurito de 1 semana. Bilirrubina total 6 mg/dL, de predominio directo, con FA y GGT elevadas y transaminasas levemente alteradas.",
      "question": "¿Cuál es el primer examen de imagen que se debe solicitar?",
      "options": [
        {
          "letter": "A",
          "text": "Ecografía abdominal"
        },
        {
          "letter": "B",
          "text": "Colangiorresonancia"
        },
        {
          "letter": "C",
          "text": "CPRE"
        },
        {
          "letter": "D",
          "text": "TAC de abdomen con contraste"
        },
        {
          "letter": "E",
          "text": "Cintigrafía hepatobiliar"
        }
      ],
      "correct": "A",
      "explanation": "Ante una ictericia con patrón colestásico, la ecografía abdominal es el primer examen: es barata, inocua y distingue la colestasia extrahepática (vía biliar dilatada) de la intrahepática (vía no dilatada), además de mostrar cálculos. Según su resultado se decide colangiorresonancia, TAC o CPRE.",
      "say": {
        "stem": "Vamos con una pregunta de práctica. Mujer de cuarenta y cinco años con una semana de ictericia, orina oscura y picazón. Tiene una bilirrubina de seis, de predominio directo, con fosfatasas y GGT elevadas.",
        "question": "¿Cuál es el primer examen de imagen que se debe solicitar?",
        "options": "Las opciones: ecografía abdominal, colangiorresonancia, CPRE, tomografía con contraste, o cintigrafía. Piénsalo.",
        "answer": "Es la A. Frente a una colestasia, la ecografía es siempre el primer paso, porque responde la pregunta clave: si la vía biliar está dilatada o no. La colangiorresonancia tienta, pero se pide después, cuando la ecografía deja dudas sobre la causa de la obstrucción."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.1.030 · Cáncer de páncreas y otros tumores preampulares",
      "stem": "Hombre de 66 años presenta ictericia progresiva e indolora de 1 mes, coluria, acolia, prurito y baja de peso de 7 kg. Al examen se palpa una vesícula distendida e indolora. La TAC con contraste muestra un tumor de 2 cm en la región periampular, sin compromiso vascular ni metástasis.",
      "question": "¿Cuál es la cirugía con intención curativa?",
      "options": [
        {
          "letter": "A",
          "text": "Colecistectomía"
        },
        {
          "letter": "B",
          "text": "Pancreatoduodenectomía (operación de Whipple)"
        },
        {
          "letter": "C",
          "text": "Derivación biliodigestiva"
        },
        {
          "letter": "D",
          "text": "Pancreatectomía distal con esplenectomía"
        },
        {
          "letter": "E",
          "text": "Prótesis biliar por CPRE"
        }
      ],
      "correct": "B",
      "explanation": "Los tumores periampulares (cabeza de páncreas, ampolla de Vater, colédoco distal y duodeno) se presentan con ictericia indolora y vesícula palpable (Courvoisier-Terrier). Si son resecables, el tratamiento curativo es la pancreatoduodenectomía. La derivación biliodigestiva y la prótesis son paliativas; la pancreatectomía distal es para tumores de cuerpo y cola.",
      "say": {
        "stem": "Hombre de sesenta y seis años con un mes de ictericia progresiva e indolora, coluria, acolia, prurito y baja de siete kilos, con vesícula palpable e indolora. La TAC muestra un tumor periampular de dos centímetros, sin compromiso vascular ni metástasis.",
        "question": "¿Cuál es la cirugía con intención curativa?",
        "options": "Las opciones: colecistectomía, operación de Whipple, derivación biliodigestiva, pancreatectomía distal con esplenectomía o prótesis biliar por CPRE. Piénsalo.",
        "answer": "Es la B. Un tumor periampular resecable se opera con pancreatoduodenectomía, la operación de Whipple. La derivación biliodigestiva y la prótesis tientan porque resuelven la ictericia, pero son paliativas y dejan el tumor en su lugar."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.1.031 · Cáncer de páncreas",
      "stem": "Hombre de 70 años, fumador, consulta por ictericia indolora de 3 semanas, prurito, baja de peso de 6 kg y diabetes diagnosticada hace 4 meses. La ecografía muestra dilatación de la vía biliar intra y extrahepática y del conducto de Wirsung, sin cálculos.",
      "question": "¿Cuál es el examen más adecuado para continuar el estudio?",
      "options": [
        {
          "letter": "A",
          "text": "Biopsia hepática percutánea"
        },
        {
          "letter": "B",
          "text": "CPRE diagnóstica"
        },
        {
          "letter": "C",
          "text": "Cintigrafía hepatobiliar"
        },
        {
          "letter": "D",
          "text": "TAC de abdomen trifásica con protocolo de páncreas"
        },
        {
          "letter": "E",
          "text": "Repetir la ecografía en 1 mes"
        }
      ],
      "correct": "D",
      "explanation": "Ictericia indolora con dilatación de colédoco y Wirsung (signo del doble conducto), baja de peso y diabetes de reciente inicio en un fumador mayor sugieren cáncer de cabeza de páncreas. La TAC trifásica es el examen de elección para diagnosticar, etapificar y evaluar resecabilidad. La CPRE es terapéutica y no se usa para el diagnóstico inicial.",
      "say": {
        "stem": "Hombre de setenta años, fumador, con tres semanas de ictericia indolora, prurito, baja de seis kilos y una diabetes diagnosticada hace cuatro meses. La ecografía muestra la vía biliar y el conducto de Wirsung dilatados, sin cálculos.",
        "question": "¿Cuál es el examen más adecuado para continuar el estudio?",
        "options": "Las opciones: biopsia hepática, CPRE diagnóstica, cintigrafía hepatobiliar, TAC trifásica con protocolo de páncreas o repetir la ecografía en un mes. Piénsalo.",
        "answer": "Es la D. El doble conducto dilatado, la baja de peso y una diabetes nueva en un fumador mayor apuntan a cáncer de cabeza de páncreas, y la TAC trifásica diagnostica y define si es resecable. La CPRE tienta por la ictericia, pero hoy se reserva para drenar, no para diagnosticar."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.4.012 · Hemograma, perfil bioquímico, pefil hepático.",
      "stem": "Mujer de 52 años consulta por ictericia y prurito. Exámenes: bilirrubina total 6,2 mg/dL (directa 5,0), fosfatasa alcalina 680 U/L (VN hasta 120), GGT 520 U/L, GOT 85 U/L y GPT 95 U/L. Hemograma normal.",
      "question": "¿Cuál es el patrón de laboratorio y el siguiente examen más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Patrón hepatocelular; serología de hepatitis viral"
        },
        {
          "letter": "B",
          "text": "Hemólisis; test de Coombs directo"
        },
        {
          "letter": "C",
          "text": "Patrón colestásico; ecografía abdominal"
        },
        {
          "letter": "D",
          "text": "Síndrome de Gilbert; ningún examen adicional"
        },
        {
          "letter": "E",
          "text": "Patrón hepatocelular; biopsia hepática"
        }
      ],
      "correct": "C",
      "explanation": "Predominio de bilirrubina directa con fosfatasa alcalina y GGT muy elevadas, y transaminasas solo levemente aumentadas, configura un patrón colestásico. El primer examen es la ecografía abdominal, que distingue colestasia extrahepática (vía biliar dilatada) de intrahepática. En la hemólisis y el síndrome de Gilbert predomina la bilirrubina indirecta.",
      "say": {
        "stem": "Mujer de cincuenta y dos años con ictericia y prurito. Su bilirrubina es seis coma dos, casi toda directa, la fosfatasa alcalina y la GGT están muy elevadas, y las transaminasas solo levemente altas, con hemograma normal.",
        "question": "¿Cuál es el patrón y el siguiente examen más adecuado?",
        "options": "Las opciones: hepatocelular con serología viral, hemólisis con Coombs, colestásico con ecografía abdominal, síndrome de Gilbert sin más estudio o hepatocelular con biopsia. Piénsalo.",
        "answer": "Es la C. Bilirrubina directa con fosfatasa alcalina y GGT muy altas es colestasia, y lo primero es una ecografía para ver si la vía biliar está dilatada. El patrón hepatocelular tienta porque las transaminasas están elevadas, pero lo están poco comparadas con la fosfatasa alcalina."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.01.4.012 · Perfil bioquímico",
      "stem": "Un hombre de 72 años, asintomático, tiene en su perfil bioquímico fosfatasa alcalina de 420 U/L (normal hasta 120), con GGT, bilirrubina, transaminasas, calcio y fósforo normales. Refiere dolor leve en la tibia derecha, que se ve arqueada.",
      "question": "¿Cuál es el origen más probable de la elevación de la fosfatasa alcalina?",
      "options": [
        {
          "letter": "A",
          "text": "Colestasia intrahepática"
        },
        {
          "letter": "B",
          "text": "Obstrucción de la vía biliar"
        },
        {
          "letter": "C",
          "text": "Hepatitis aguda"
        },
        {
          "letter": "D",
          "text": "Origen óseo, sugerente de enfermedad de Paget"
        },
        {
          "letter": "E",
          "text": "Metástasis hepáticas"
        }
      ],
      "correct": "D",
      "explanation": "La fosfatasa alcalina proviene de hígado y hueso; si la GGT es normal, el origen es óseo. En un adulto mayor con fosfatasa alcalina aislada, calcio normal y tibia arqueada, sugiere enfermedad de Paget, que se confirma con radiografías y cintigrama óseo. La colestasia elevaría también la GGT.",
      "say": {
        "stem": "Un hombre de setenta y dos años tiene fosfatasa alcalina de cuatrocientos veinte, con GGT, bilirrubina, transaminasas y calcio normales, y una tibia arqueada levemente dolorosa.",
        "question": "¿Cuál es el origen más probable de la fosfatasa alcalina alta?",
        "options": "Las opciones: colestasia intrahepática, obstrucción biliar, hepatitis aguda, origen óseo por enfermedad de Paget o metástasis hepáticas. Piénsalo.",
        "answer": "Es la D. Con GGT normal, la fosfatasa alcalina viene del hueso, y la tibia arqueada orienta a Paget. La colestasia tienta, pero elevaría también la GGT."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2019 · Pregunta 90",
      "stem": "Una paciente de 26 años consulta por dispepsia de varios meses de evolución. Al examen físico se observa ictericia de piel y escleras. Tiene antecedente de alteraciones en sus pruebas hepáticas hace 2 años. Pruebas hepáticas: bilirrubina total 2,2 mg/dL, bilirrubina directa 0,3 mg/dL, GOT 26 UI/L, GPT 23 UI/L, GGT 46 UI/L, FA 65 UI/L.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Colangitis esclerosante primaria"
        },
        {
          "letter": "B",
          "text": "Síndrome de Gilbert"
        },
        {
          "letter": "C",
          "text": "Colestasia intrahepática"
        },
        {
          "letter": "D",
          "text": "Hepatitis en resolución"
        },
        {
          "letter": "E",
          "text": "Cirrosis biliar primaria"
        }
      ],
      "correct": "B",
      "explanation": "Bilirrubina total elevada a expensas de la indirecta, con transaminasas, FA y GGT normales, en forma recurrente en una joven, es típico del síndrome de Gilbert, benigno y sin tratamiento. Las colestasias elevarían FA, GGT y bilirrubina directa, y una hepatitis elevaría las transaminasas. Debe descartarse hemólisis con hemograma.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil diecinueve. Mujer de veintiséis años con ictericia leve recurrente, bilirrubina de predominio indirecto y el resto del perfil hepático normal.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: colangitis esclerosante, Gilbert, colestasia intrahepática, hepatitis en resolución, o cirrosis biliar primaria. Piénsalo.",
        "answer": "Es la B. Hiperbilirrubinemia indirecta aislada y recurrente es Gilbert. La hepatitis en resolución tendría transaminasas alteradas, y aquí son normales."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Dos pasos', tag: 'Siempre en orden', kind: 'key', items: [
          { t: 'Paso 1: indirecta o directa', d: 'Indirecta aislada = Gilbert',
            say: 'Cerremos con las reglas de oro. Primer paso: indirecta o directa. La indirecta aislada con todo lo demás normal es Gilbert, y se observa.' },
          { t: 'Paso 2: transaminasas o FA y GGT', d: 'Hepatitis vs colestasia',
            say: 'Segundo paso, en la directa: transaminasas es hepatitis; fosfatasas y GGT es colestasia.' },
        ] },
        { title: 'Colestasia', tag: 'Manda el dolor', kind: 'alert', items: [
          { t: 'Dolor = cálculo · + fiebre = colangitis', d: 'Tríada de Charcot',
            say: 'En la colestasia, el dolor manda. Con dolor es un cálculo, con dolor y fiebre es colangitis.' },
          { t: 'Sin dolor en el adulto mayor = cáncer', d: '3 D + Courvoisier-Terrier',
            say: 'Y sin dolor en un adulto mayor, es cáncer, sobre todo de páncreas, con sus tres D y el signo de Courvoisier-Terrier.' },
        ] },
        { title: 'Estudio', tag: 'Orden de exámenes', kind: 'normal', items: [
          { t: 'Eco siempre primero', d: 'Luego colangio-RM, o TAC si es páncreas',
            say: 'Toda ictericia parte con ecografía; después colangiorresonancia, o TAC si se sospecha una masa pancreática. Si te llevas una sola idea de hoy: la ictericia que no duele en un adulto mayor es un cáncer hasta que se demuestre lo contrario. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Ictericia: dos preguntas de laboratorio',
    root: N('start', 'Ictericia', 'Visible sobre 2,5–3 mg/dL',
      'Partimos de un paciente con ictericia. Con dos preguntas de laboratorio, en orden, ordenamos casi todas las causas.',
      ['', N('q', '¿Indirecta o directa?', 'Paso 1',
        'Primera pregunta: ¿predomina la bilirrubina indirecta o la directa?',
        ['Indirecta', N('ok', 'Gilbert o hemólisis', 'Resto normal: observar · anemia + LDH: hemólisis',
          'Indirecta con todo lo demás normal en un joven: síndrome de Gilbert, se observa. Si hay anemia, LDH alta y esquistocitos, es hemólisis y se trata la causa.')],
        ['Directa', N('q', '¿Transaminasas o FA y GGT?', 'Paso 2',
          'La directa siempre es patológica. Segunda pregunta: ¿suben las transaminasas o las fosfatasas alcalinas con la GGT?',
          ['Transaminasas', N('refer', 'Hepatitis', 'Lesión del hepatocito',
            'Transaminasas altas: hepatitis, lesión del hepatocito. Se estudia como vemos en la clase de hepatitis.')],
          ['FA y GGT', N('do', 'Ecografía abdominal', 'Siempre el primer examen',
            'Fosfatasas y GGT altas: colestasia. El primer examen es siempre la ecografía abdominal.',
            ['', N('q', '¿Dolor? ¿Fiebre?', 'Orienta la causa',
              'Ahora miramos la clínica: ¿hay dolor, y hay fiebre?',
              ['Dolor', N('refer', 'Coledocolitiasis', 'Colangio-RM → CPRE',
                'Dolor e ictericia: coledocolitiasis. Colangiorresonancia para confirmar y luego CPRE para extraer el cálculo.')],
              ['Dolor + fiebre', N('alert', 'Colangitis', 'CPRE urgente + antibióticos',
                'Dolor, ictericia y fiebre, la tríada de Charcot: colangitis. CPRE urgente y antibióticos.')],
              ['Sin dolor', N('alert', 'Sospecha de cáncer', 'Colangio-RM, o TAC si es páncreas',
                'Ictericia silente en un adulto mayor con baja de peso: cáncer, sobre todo de páncreas. Colangiorresonancia, o TAC con contraste si se sospecha una masa pancreática.')])])])])]),
  },
};
