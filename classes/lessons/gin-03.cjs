// Clase 20.3 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_ginecologia.cjs (gin-03).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gin-03',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'PALM-COEIN ordena la causa; la edad decide si biopsias',
      say: 'Bienvenidos. Hoy vemos el sangrado uterino anormal, uno de los motivos de consulta más frecuentes en ginecología. Vamos a ordenarlo con la clasificación PALM-COEIN de la FIGO, y sobre todo vamos a fijar la pregunta que más se repite en el examen: cuándo este sangrado obliga a una biopsia de endometrio, para no dejar pasar un cáncer.',
    },

    {
      type: 'points',
      kicker: 'Clasificación FIGO',
      title: 'PALM: causas estructurales',
      cards: [
        { title: 'Pólipo y adenomiosis', tag: 'Estructural', kind: 'criteria', items: [
          { t: 'Pólipo endometrial', d: 'La causa estructural más frecuente de sangrado intermenstrual',
            say: 'La FIGO ordena las causas del sangrado uterino anormal en dos grupos, y el primero, PALM, son las estructurales. Empezamos por el pólipo endometrial, la causa estructural más frecuente de sangrado entre reglas y en la perimenopausia.' },
          { t: 'Adenomiosis', d: 'Útero globuloso y doloroso, dismenorrea severa',
            say: 'Y la adenomiosis, glándulas endometriales dentro del miometrio, que da un útero aumentado, globuloso y doloroso, con dismenorrea secundaria intensa.' },
        ] },
        { title: 'Leiomioma y malignidad', tag: 'Estructural', kind: 'alert', items: [
          { t: 'Los miomas submucosos son los que más sangran', d: 'Porque distorsionan la cavidad',
            say: 'El leiomioma, o mioma, sangra sobre todo cuando es submucoso, porque distorsiona la cavidad endometrial. Lo vemos en detalle en la próxima clase.' },
          { t: 'Malignidad e hiperplasia', d: 'La causa que siempre hay que descartar',
            say: 'Y la última letra del grupo, la M, es la que manda en esta clase: malignidad e hiperplasia endometrial. Es la causa que siempre tienes que descartar antes de tratar cualquier sangrado en la mujer de mayor edad.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Clasificación FIGO',
      title: 'COEIN: causas no estructurales',
      cards: [
        { title: 'Coagulopatía', tag: 'Pensar en la adolescente', kind: 'alert', items: [
          { t: 'Enfermedad de von Willebrand', d: 'Hasta un veinte por ciento de las adolescentes hospitalizadas',
            say: 'El segundo grupo, COEIN, son las no estructurales. La C es coagulopatía, y el ejemplo que domina esta letra es la enfermedad de von Willebrand: la causa más común de hemorragia severa desde la menarquia en adolescentes, presente hasta en uno de cada cinco casos hospitalizados.' },
        ] },
        { title: 'Ovulatoria, endometrial e iatrogénica', tag: 'Funcionales', kind: 'criteria', items: [
          { t: 'Disfunción ovulatoria', d: 'Anovulación crónica, típica del ovario poliquístico',
            say: 'La O es la disfunción ovulatoria, la anovulación crónica que ya conoces del ovario poliquístico. La E es la causa endometrial, un problema local de la hemostasia del propio endometrio, en ciclos que sí ovulan.' },
          { t: 'Iatrogénica', d: 'DIU de cobre, anticoagulantes, psicofármacos',
            say: 'Y la I es la iatrogénica: el DIU de cobre, los anticoagulantes o ciertos psicofármacos.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Lo que más se pregunta',
      title: 'Cuándo la biopsia de endometrio es obligatoria',
      nodes: [
        { id: 'sua', col: 0, row: 2, k: 'start', t: 'Sangrado uterino anormal', s: 'Mujer no embarazada' },
        { id: 'edad', col: 1, row: 1, k: 'risk', t: 'Cuarenta y cinco años o más', s: 'Cualquier sangrado' },
        { id: 'post', col: 1, row: 3, k: 'risk', t: 'Postmenopausia', s: 'Cualquier sangrado' },
        { id: 'joven', col: 1, row: 4, k: 'q', t: 'Menor de cuarenta y cinco', s: '¿Tiene factores de riesgo?' },
        { id: 'fr', col: 2, row: 4, k: 'trap', t: 'Obesidad, SOP, tamoxifeno, Lynch', s: 'También biopsia' },
        { id: 'bx', col: 3, row: 2, k: 'good', t: 'Biopsia con Pipelle', s: 'Ambulatoria, primera línea' },
      ],
      edges: [
        { from: 'sua', to: 'edad' }, { from: 'sua', to: 'post' }, { from: 'sua', to: 'joven' },
        { from: 'joven', to: 'fr', label: 'sí' },
        { from: 'edad', to: 'bx' }, { from: 'post', to: 'bx' }, { from: 'fr', to: 'bx' },
      ],
      steps: [
        { show: ['sua'], note: 'El objetivo detrás de todo el estudio',
          say: 'Aquí está la pregunta que domina esta clase: ¿a quién le pides una biopsia de endometrio? El objetivo siempre es el mismo, descartar hiperplasia con atipias o un cáncer de endometrio, antes de tratar el sangrado con cualquier hormona.' },
        { show: ['edad'], note: 'El corte que se pregunta',
          say: 'La primera indicación es la edad: toda mujer de cuarenta y cinco años o más que consulte por sangrado uterino anormal se biopsia, sin importar cómo sea el sangrado.' },
        { show: ['post'], note: 'Alarma hasta demostrar lo contrario',
          say: 'La segunda es cualquier sangrado en la postmenopausia. Aunque la causa más frecuente en número de casos es la atrofia, entre un diez y un quince por ciento corresponde a un cáncer de endometrio, así que se biopsia siempre.' },
        { show: ['joven', 'fr'], note: 'Menor de cuarenta y cinco con factores de riesgo',
          say: 'Y la tercera son las menores de cuarenta y cinco años, pero con factores de riesgo: obesidad, anovulación crónica por ovario poliquístico, uso de tamoxifeno, diabetes, o antecedente familiar de síndrome de Lynch. Sin ninguno de estos, y con una ecografía normal, se puede empezar con tratamiento médico.' },
        { show: ['bx'], note: 'El método de elección',
          say: 'El método de elección es la biopsia por aspiración con cánula de Pipelle, ambulatoria, con muy buena sensibilidad. Si la muestra no alcanza o hay dudas, se completa con histeroscopía y biopsia dirigida.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Urgencia',
      title: 'Hemorragia uterina aguda severa',
      nodes: [
        { id: 'ini', col: 0, row: 2, k: 'start', t: 'Sangrado agudo severo', s: 'Con o sin inestabilidad' },
        { id: 'vol', col: 1, row: 1, k: 'mech', t: 'Estabilizar con volumen', s: 'Y transfundir si es necesario' },
        { id: 'horm', col: 1, row: 3, k: 'mech', t: 'Hormonas en dosis altas', s: 'Estrógenos EV o ACO escalonado' },
        { id: 'tra', col: 2, row: 2, k: 'good', t: 'Ácido tranexámico', s: 'Junto con las hormonas' },
        { id: 'no', col: 3, row: 2, k: 'q', t: '¿Cede el sangrado?', s: 'Reevaluar en poco tiempo' },
        { id: 'legr', col: 4, row: 2, k: 'alert', t: 'Legrado o sonda Foley', s: 'Si no cede o hay inestabilidad' },
      ],
      edges: [
        { from: 'ini', to: 'vol' }, { from: 'ini', to: 'horm' }, { from: 'vol', to: 'tra' }, { from: 'horm', to: 'tra' },
        { from: 'tra', to: 'no' }, { from: 'no', to: 'legr', label: 'no cede' },
      ],
      steps: [
        { show: ['ini'], note: 'Antes de cualquier otra cosa: estabilizar',
          say: 'Antes del manejo crónico, veamos la urgencia. Ante un sangrado uterino agudo y severo, lo primero es siempre estabilizar a la paciente.' },
        { show: ['vol'], note: 'Volumen, y transfusión si hace falta',
          say: 'Se repone volumen, y se transfunde si el compromiso hemodinámico lo amerita.' },
        { show: ['horm'], note: 'Dosis altas, no la dosis habitual',
          say: 'En paralelo se dan hormonas en dosis altas: estrógenos conjugados endovenosos, o anticonceptivos combinados en un esquema escalonado, muy por encima de la dosis anticonceptiva habitual.' },
        { show: ['tra'], note: 'Se suma, no reemplaza',
          say: 'Junto con eso se agrega ácido tranexámico, que potencia el efecto hemostático de las hormonas.' },
        { show: ['no', 'legr'], note: 'La última línea si nada de esto funciona',
          say: 'Si con todo esto el sangrado no cede, o la paciente sigue inestable, el paso siguiente es el legrado uterino hemostático de urgencia, o un taponamiento con sonda Foley intrauterina mientras se logra estabilizar.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Manejo médico crónico',
      cards: [
        { title: 'Manejo médico crónico', tag: 'DIU liberador de levonorgestrel', kind: 'pharma', items: [
          { t: 'El más eficaz: más de noventa por ciento', d: 'Estándar de oro médico',
            say: 'Para el manejo crónico de las causas no estructurales, el fármaco más eficaz es el dispositivo intrauterino liberador de levonorgestrel: reduce el sangrado en más de un noventa por ciento a los seis meses, y es el estándar de oro médico.' },
          { t: 'Ácido tranexámico oral', d: 'No hormonal, ideal si busca embarazo',
            say: 'El ácido tranexámico oral es la alternativa no hormonal, ideal si la paciente busca embarazo o tiene contraindicación de hormonas.' },
          { t: 'Antiinflamatorios y anticonceptivos combinados', d: 'Reducen el sangrado y alivian la dismenorrea',
            say: 'Los antiinflamatorios, como el ácido mefenámico, reducen el sangrado un poco menos que el resto, pero además alivian la dismenorrea. Y los anticonceptivos combinados regularizan el ciclo y aportan anticoncepción al mismo tiempo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Postmenopausia',
      title: 'El grosor endometrial que decide',
      cards: [
        { title: 'Sin terapia de reemplazo', tag: 'Corte habitual', kind: 'criteria', items: [
          { t: 'Menos de cuatro a cinco milímetros', d: 'Compatible con atrofia, se puede observar',
            say: 'Un detalle que se pregunta mucho: cuando se estudia con ecografía a una postmenopáusica con sangrado, el grosor del endometrio marca la conducta. Menos de cuatro a cinco milímetros es compatible con atrofia, y se puede observar.' },
          { t: 'Cuatro a cinco milímetros o más', d: 'Biopsia de endometrio',
            say: 'Desde ahí hacia arriba, se biopsia.' },
        ] },
        { title: 'Con terapia de reemplazo hormonal', tag: 'El corte sube', kind: 'key', items: [
          { t: 'El umbral se mueve a ocho milímetros', d: 'Porque el estrógeno engrosa el endometrio',
            say: 'Si la paciente usa terapia de reemplazo hormonal, el umbral para biopsiar sube a ocho milímetros, porque el estrógeno exógeno engrosa el endometrio de forma esperable.' },
          { t: 'Asintomática: el corte es once', d: 'Hallazgo incidental, sin sangrado',
            say: 'Y si la ecografía se pidió por otro motivo, sin que la paciente tenga sangrado, el corte para biopsiar sube todavía más, a once milímetros. Fíjate en la lógica: mientras menos alarma clínica hay, más grueso tiene que estar el endometrio para justificar la biopsia.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora armemos en un solo árbol la decisión que más se pregunta: cuándo biopsiar.',
    },

    {
      type: 'table',
      kicker: 'PALM-COEIN',
      title: 'Las nueve causas, de un vistazo',
      head: ['Categoría', 'Causa', 'Naturaleza'],
      rows: [
        { cells: ['P', 'Pólipo endometrial', 'Estructural'],
          say: 'Repasemos las nueve letras de PALM-COEIN. P, pólipo endometrial, estructural.' },
        { cells: ['A', 'Adenomiosis', 'Estructural'],
          say: 'A, adenomiosis, estructural.' },
        { cells: ['L', 'Leiomioma', 'Estructural'],
          say: 'L, leiomioma, estructural.' },
        { cells: ['M', 'Malignidad e hiperplasia', 'Estructural'],
          say: 'M, malignidad e hiperplasia, la que siempre hay que descartar.' },
        { cells: ['C', 'Coagulopatía', 'No estructural'],
          say: 'C, coagulopatía, como el von Willebrand.' },
        { cells: ['O', 'Disfunción ovulatoria', 'No estructural'],
          say: 'O, disfunción ovulatoria, como en el ovario poliquístico.' },
        { cells: ['E', 'Causa endometrial', 'No estructural'],
          say: 'E, causa endometrial, un diagnóstico de exclusión.' },
        { cells: ['I', 'Iatrogénica', 'No estructural'],
          say: 'I, iatrogénica, por dispositivos o fármacos.' },
        { cells: ['N', 'No clasificada', 'No estructural'],
          say: 'Y N, no clasificada, para causas raras como una malformación arteriovenosa uterina.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 46 años, sin antecedentes mórbidos, consulta por 5 meses de menstruaciones abundantes con coágulos, cada 21 a 25 días. Hemoglobina de 10,1 g/dL. Especuloscopía normal. Ecografía transvaginal: útero de tamaño normal, miometrio homogéneo sin miomas, endometrio de 9 mm regular, sin imágenes focales.',
      question: '¿Cuál es la conducta más adecuada antes de iniciar cualquier tratamiento hormonal?',
      options: [
        { letter: 'A', text: 'Instalar un dispositivo intrauterino liberador de levonorgestrel de inmediato' },
        { letter: 'B', text: 'Realizar biopsia de endometrio ambulatoria con cánula de Pipelle' },
        { letter: 'C', text: 'Indicar ácido tranexámico oral y controlar en 6 meses' },
        { letter: 'D', text: 'Realizar histerectomía total' },
        { letter: 'E', text: 'Observar con calendario menstrual por un año' },
      ],
      correct: 'B',
      explanation: 'Toda mujer de 45 años o más con sangrado uterino anormal tiene indicación mandatoria de biopsia endometrial antes de definir un tratamiento hormonal, sin importar que la ecografía se vea tranquilizadora.',
      say: {
        stem: 'Vamos con un caso. Mujer de cuarenta y seis años, sin antecedentes, con cinco meses de menstruaciones abundantes y con coágulos, cada veintiuno a veinticinco días. Su hemoglobina es diez con uno. La especuloscopía es normal, y la ecografía muestra un útero normal, sin miomas, con un endometrio de nueve milímetros, regular.',
        question: '¿Cuál es la conducta más adecuada antes de iniciar cualquier tratamiento hormonal?',
        options: 'Las opciones: instalar un DIU con levonorgestrel de inmediato, hacer una biopsia de endometrio con Pipelle, dar ácido tranexámico y controlar en un año, hacer una histerectomía, u observar con calendario menstrual. Piénsalo.',
        answer: 'Es la B. Esta paciente tiene cuarenta y seis años, así que ya está en el grupo que se biopsia siempre, sin importar que la ecografía se vea tranquila. Instalar el DIU o dar un tratamiento hormonal sin ese paso previo podría retrasar el diagnóstico de una hiperplasia o un cáncer de endometrio. La observación y la histerectomía sin diagnóstico también quedan descartadas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2022 · Pregunta 5',
      stem: 'Una paciente de 48 años consulta por sangrado uterino, que no ha cesado desde su última menstruación, que inició hace dos semanas. Se solicita una ecografía transvaginal que muestra útero de tamaño normal, con endometrio de 19 mm de grosor y sin alteraciones anexiales. Su PAP, realizado hace poco, es normal, y su test de embarazo en orina es negativo.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Histerectomía' },
        { letter: 'B', text: 'Ácido tranexámico endovenoso' },
        { letter: 'C', text: 'Estrógenos inyectables' },
        { letter: 'D', text: 'Anticonceptivos orales combinados' },
        { letter: 'E', text: 'Biopsia de endometrio' },
      ],
      correct: 'E',
      explanation: 'Mujer de 48 años con endometrio muy engrosado en la ecografía: la biopsia endometrial es obligatoria antes de definir cualquier tratamiento hormonal, tanto por la edad como por el hallazgo ecográfico.',
      say: {
        stem: 'Ahora preguntas reales. Esta es del EUNACOM de diciembre de dos mil veintidós. Paciente de cuarenta y ocho años, con sangrado que no cesa desde hace dos semanas. La ecografía muestra un endometrio de diecinueve milímetros de grosor, sin otras alteraciones. Su PAP es normal, y el test de embarazo es negativo.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: histerectomía, ácido tranexámico endovenoso, estrógenos inyectables, anticonceptivos combinados, o biopsia de endometrio. Piénsalo.',
        answer: 'Es la E. Dos razones apuntan al mismo lugar: la edad, sobre cuarenta y cinco años, y un endometrio muy engrosado en la ecografía. Antes de tratar el sangrado con cualquier hormona, hay que biopsiar. Los tratamientos hormonales sin ese paso son el error clásico de esta pregunta.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 46',
      stem: 'Una paciente de 55 años, con menopausia a los 51 años y usuaria de estrógenos transdérmicos como terapia de reemplazo hormonal, consulta por sangrado genital de 5 días de evolución. Al examen físico, sus signos vitales son normales y la especuloscopía no muestra sangrado activo ni lesiones del cuello uterino.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Realizar histerectomía' },
        { letter: 'B', text: 'Aumentar la dosis de estrógenos' },
        { letter: 'C', text: 'Iniciar anticonceptivos orales' },
        { letter: 'D', text: 'Solicitar biopsia de endometrio' },
        { letter: 'E', text: 'Indicar ácido tranexámico vía oral' },
      ],
      correct: 'D',
      explanation: 'Toda metrorragia en la postmenopausia se estudia. En usuarias de terapia de reemplazo hormonal el umbral ecográfico para biopsiar es más alto que en quien no la usa, pero cualquier sangrado igualmente obliga a descartar patología endometrial con biopsia.',
      say: {
        stem: 'Esta es del EUNACOM de diciembre de dos mil veinticinco. Mujer de cincuenta y cinco años, con menopausia a los cincuenta y uno, que usa estrógenos en parche como terapia de reemplazo hormonal, y consulta por cinco días de sangrado genital. Sus signos vitales son normales, y la especuloscopía no muestra sangrado activo ni lesiones del cuello.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: histerectomía, aumentar la dosis de estrógenos, iniciar anticonceptivos, pedir biopsia de endometrio, o dar ácido tranexámico oral. Piénsalo.',
        answer: 'Es la D. Toda metrorragia en la postmenopausia se estudia, incluso en una paciente con terapia de reemplazo hormonal, donde el umbral ecográfico para biopsiar es un poco más alto que en quien no la usa. Pero el sangrado clínico igual obliga a la biopsia. Aumentar los estrógenos o dar anticonceptivos sin diagnóstico es exactamente el error que esta pregunta busca detectar.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 85',
      stem: 'Una paciente de 15 años consulta por hipermenorrea y menometrorragia. Se solicita una ecografía transvaginal, que no muestra lesiones ni alteraciones uterinas ni ováricas. El endometrio tiene 5 mm de grosor. Su hemograma muestra anemia leve, con glóbulos blancos y plaquetas normales.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Realizar biopsia de endometrio' },
        { letter: 'B', text: 'Solicitar estudio de alteraciones de la hemostasia' },
        { letter: 'C', text: 'Solicitar estudio de trombofilias' },
        { letter: 'D', text: 'Solicitar resonancia magnética nuclear abdominopélvica' },
        { letter: 'E', text: 'Solicitar endosonografía uterina' },
      ],
      correct: 'B',
      explanation: 'En una adolescente con hipermenorrea y ecografía sin causa anatómica, el paso siguiente es estudiar la hemostasia, buscando enfermedad de von Willebrand u otra coagulopatía. La biopsia de endometrio no tiene indicación a esta edad con endometrio delgado.',
      say: {
        stem: 'Y esta es del EUNACOM de julio de dos mil dieciséis. Adolescente de quince años, con hipermenorrea y sangrado entre reglas. La ecografía transvaginal no muestra lesiones ni alteraciones del útero ni de los ovarios, con un endometrio delgado. El hemograma muestra anemia leve, con blancos y plaquetas normales.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: biopsia de endometrio, estudio de hemostasia, estudio de trombofilias, resonancia de abdomen y pelvis, o endosonografía uterina. Piénsalo.',
        answer: 'Es la B. A esta edad, con una ecografía sin causa estructural, toda adolescente con aumento del flujo menstrual se estudia con hemostasia, buscando una enfermedad de von Willebrand: es la letra C de coagulopatía en la clasificación de la FIGO. La biopsia de endometrio no tiene ningún rol aquí, porque el cáncer de endometrio es excepcional a esta edad, y el endometrio es delgado.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 49',
      stem: 'Mujer con sangrado intermenstrual. La ecografía muestra un pólipo endometrial de 15 mm.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Legrado uterino diagnóstico-terapéutico' },
        { letter: 'B', text: 'Anticonceptivos orales para control del sangrado' },
        { letter: 'C', text: 'Seguimiento ecográfico en 6 meses' },
        { letter: 'D', text: 'Realizar histeroscopia' },
        { letter: 'E', text: 'Histerectomía' },
      ],
      correct: 'D',
      explanation: 'El pólipo endometrial es la causa estructural (P de PALM-COEIN) más frecuente de sangrado intermenstrual, y su manejo de elección es la resección guiada por histeroscopía, que además permite el estudio histológico completo.',
      say: {
        stem: 'Y la última, del EUNACOM de enero de dos mil veintitrés. Mujer con sangrado intermenstrual, en quien la ecografía muestra un pólipo endometrial de quince milímetros.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: legrado uterino, anticonceptivos orales, seguimiento ecográfico en seis meses, histeroscopía, o histerectomía. Piénsalo.',
        answer: 'Es la D. El pólipo es la P de PALM-COEIN, la causa estructural más frecuente de sangrado intermenstrual, y su tratamiento de elección es la resección guiada por histeroscopía, que extirpa el pólipo completo y lo manda a estudio histológico. El legrado a ciegas puede dejarlo sin resecar del todo, y las otras opciones no tratan la causa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 122',
      stem: 'Mujer de 55 años postmenopáusica con miomas uterinos conocidos. Llega a urgencias por metrorragia severa, con presión arterial de 90/60 mmHg y frecuencia cardíaca de 118 por minuto.',
      question: '¿Cuál es el manejo inmediato?',
      options: [
        { letter: 'A', text: 'Estabilización hemodinámica más histerectomía de urgencia' },
        { letter: 'B', text: 'Ácido tranexámico endovenoso y observar' },
        { letter: 'C', text: 'Progestágenos endovenosos en dosis alta' },
        { letter: 'D', text: 'Embolización uterina electiva' },
        { letter: 'E', text: 'Solo transfusión de glóbulos rojos y alta' },
      ],
      correct: 'A',
      explanation: 'Sangrado uterino masivo con inestabilidad hemodinámica manifiesta: la prioridad es la estabilización con volumen y transfusión, seguida de histerectomía de urgencia como manejo definitivo, sin tiempo para escalar tratamientos médicos.',
      say: {
        stem: 'Y una última pregunta real, del EUNACOM de julio de dos mil veinticinco, para cerrar con la urgencia. Mujer de cincuenta y cinco años, postmenopáusica, con miomas conocidos, que llega a urgencias con sangrado uterino severo, presión noventa sobre sesenta y frecuencia cardíaca de ciento dieciocho.',
        question: '¿Cuál es el manejo inmediato?',
        options: 'Las opciones: estabilizar más histerectomía de urgencia, ácido tranexámico y observar, progestágenos en dosis alta, embolización electiva, o solo transfundir y dar de alta. Piénsalo.',
        answer: 'Es la A. Esta paciente ya no está en la fase de escalar tratamientos médicos: tiene hipotensión y taquicardia, signos de inestabilidad franca. La prioridad es estabilizar con volumen y transfusión, y el manejo definitivo es la histerectomía de urgencia. Observar, dar solo ácido tranexámico, o programar algo electivo, subestima la gravedad del cuadro.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Clasificación', tag: 'PALM-COEIN', kind: 'key', items: [
          { t: 'PALM: estructural', d: 'Pólipo, adenomiosis, leiomioma, malignidad',
            say: 'Cerremos con las reglas de oro. PALM son las causas estructurales, y COEIN las no estructurales.' },
          { t: 'La M siempre se descarta', d: 'En la mujer de mayor edad',
            say: 'La M, de malignidad, es la letra que siempre hay que descartar en la mujer de mayor edad.' },
        ] },
        { title: 'Biopsia obligatoria', tag: 'No se negocia', kind: 'alert', items: [
          { t: 'Cuarenta y cinco años o más', d: 'O postmenopausia, con cualquier sangrado',
            say: 'La biopsia de endometrio es obligatoria desde los cuarenta y cinco años, y en cualquier sangrado de la postmenopausia.' },
          { t: 'Menor, con factores de riesgo', d: 'Obesidad, SOP, tamoxifeno, Lynch',
            say: 'Y también en la menor de cuarenta y cinco con factores de riesgo.' },
        ] },
        { title: 'Tratamiento', tag: 'DIU liberador de levonorgestrel', kind: 'pharma', items: [
          { t: 'El más eficaz para el manejo crónico', d: 'Después de descartar malignidad',
            say: 'Y el tratamiento médico más eficaz, una vez descartada la malignidad, es el DIU liberador de levonorgestrel. Si te llevas una sola idea de hoy: antes de tratar, pregúntate si esta paciente necesita biopsia. Nos vemos en la próxima clase, con la patología benigna del útero.' },
        ] },
      ],
    },
  ],

  pathway: (() => {
    const nBiopsia = N('alert', 'Biopsia endometrial obligatoria', 'Cánula de Pipelle ambulatoria',
      'Antes de cualquier tratamiento hormonal, hay que descartar hiperplasia con atipias o cáncer de endometrio.');
    const nFR = N('q', '¿Tiene factores de riesgo?', 'Obesidad, SOP, tamoxifeno, diabetes, Lynch',
      'Sin cumplir la edad, hay que revisar los factores de riesgo de cáncer de endometrio.',
      ['Sí', nBiopsia], ['No', N('ok', 'Tratamiento médico y seguimiento', 'Con ecografía normal',
        'Sin factores de riesgo y con ecografía tranquilizadora, se puede iniciar tratamiento médico y observar la respuesta.')]);
    const nEdad = N('q', '¿Cuarenta y cinco años o más, o postmenopausia?', 'El corte que se pregunta',
      'La edad por sí sola ya decide gran parte de la conducta.',
      ['Sí', nBiopsia], ['No', nFR]);
    const root = N('start', 'Sangrado uterino anormal', 'Mujer no embarazada con sangrado alterado',
      'Descartado el embarazo y una causa cervical o vaginal, la pregunta central es una sola: ¿esta paciente necesita biopsia de endometrio antes de tratar?',
      ['', nEdad]);
    return { title: 'Sangrado uterino anormal: ¿cuándo biopsiar?', root };
  })(),
};
