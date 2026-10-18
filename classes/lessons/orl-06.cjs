// Clase 14.6 (Otorrinolaringología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_otorrino.cjs (orl-06). Preguntas: banco real EUNACOM (class_questions.cjs).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'orl-06',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'La hipoacusia súbita como urgencia que se trata con corticoides, y las dos sorderas sensorioneurales crónicas que se preguntan: ruido y edad',
      say: 'Bienvenido. En la clase anterior aprendiste a distinguir una hipoacusia de conducción de una sensorioneural con el diapasón y la audiometría. Hoy aplicamos eso a tres cuadros sensorioneurales. El primero es una urgencia: la hipoacusia súbita, donde cada día de retraso cuesta audición. Los otros dos son crónicos: el trauma acústico por ruido y la presbiacusia del adulto mayor, que además tiene garantía GES. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Hipoacusia súbita',
      title: 'Qué le pasa a la cóclea',
      nodes: [
        { id: 'vi', col: 0, row: 0, k: 'cause', t: 'Virus herpes en la cóclea', s: 'Reactivación viral' },
        { id: 'mi', col: 0, row: 1, k: 'cause', t: 'Isquemia de la arteria laberíntica', s: 'Microtrombosis' },
        { id: 'im', col: 0, row: 2, k: 'cause', t: 'Fenómeno inmunomediado', s: 'Menos frecuente' },
        { id: 'co', col: 1, row: 1, k: 'mech', t: 'Lesión aguda de la cóclea', s: 'Más del 90% idiopática' },
        { id: 'sx', col: 2, row: 1, k: 'effect', t: 'Sordera brusca, un solo oído', s: '98% unilateral' },
        { id: 'ac', col: 3, row: 0, k: 'effect', t: 'Acúfeno agudo y plenitud', s: 'Pito continuo, oído tapado' },
        { id: 've', col: 3, row: 2, k: 'risk', t: 'Vértigo leve', s: 'En 30 a 40% de los casos' },
      ],
      edges: [
        { from: 'vi', to: 'co' },
        { from: 'mi', to: 'co' },
        { from: 'im', to: 'co' },
        { from: 'co', to: 'sx' },
        { from: 'sx', to: 'ac' },
        { from: 'sx', to: 've' },
      ],
      steps: [
        { show: ['vi', 'mi', 'im'], note: 'Tres mecanismos posibles, ninguno probado',
          say: 'Más del noventa por ciento de las hipoacusias súbitas es idiopática, es decir, no se encuentra la causa. Se postulan tres mecanismos: reactivación del virus herpes simplex en la cóclea, isquemia o microtrombosis de la arteria laberíntica, y un fenómeno inmunomediado.' },
        { show: ['co', 'sx'], note: 'La cóclea se daña de golpe',
          say: 'En cualquiera de los tres casos, las células de la cóclea se dañan de forma aguda. El paciente despierta con el oído ensordecido, y casi siempre es un solo oído, en noventa y ocho por ciento de los casos.' },
        { show: ['ac', 've'], note: 'Acúfeno, plenitud y a veces vértigo',
          say: 'Lo acompaña un acúfeno agudo, intenso, y sensación de oído tapado o lleno. En treinta a cuarenta por ciento hay además inestabilidad o vértigo leve. Y esa sensación de oído tapado es justamente la que engaña al médico.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Hipoacusia súbita',
      title: 'Definición y cómo se examina',
      cards: [
        { title: 'Definición', tag: 'Criterio audiométrico', kind: 'criteria', items: [
          { t: 'Caída de 30 dB o más', d: 'En al menos 3 frecuencias seguidas',
            say: 'La definición es audiométrica: una caída sensorioneural de al menos treinta decibeles en tres frecuencias consecutivas, instalada en menos de setenta y dos horas.' },
          { t: 'Instalada en menos de 72 horas', d: 'Típico: despierta sin oír',
            say: 'La historia típica es la de alguien que se acostó bien y despertó sin oír por un oído, con un pito agudo y sensación de presión.' },
        ] },
        { title: 'Examen', tag: 'Otoscopía normal', kind: 'key', items: [
          { t: 'Otoscopía rigurosamente normal', d: 'No hay cerumen ni líquido',
            say: 'La otoscopía es completamente normal. No hay perforación, ni líquido, ni cerumen que explique la pérdida.' },
          { t: 'Weber al sano, Rinne positivo', d: 'Patrón sensorioneural',
            say: 'El diapasón confirma lo que ya sabes de la clase anterior: el Weber lateraliza al oído sano y el Rinne es positivo en el oído enfermo. Es una hipoacusia sensorioneural.' },
          { t: 'Audiometría en 24 a 48 horas', d: 'Confirma el diagnóstico',
            say: 'Y toda sospecha exige audiometría urgente, dentro de las primeras veinticuatro a cuarenta y ocho horas.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Error frecuente',
      title: 'No es un tapón de cera',
      cards: [
        { title: 'La trampa', tag: 'Error más grave', kind: 'alert', items: [
          { t: 'Atribuirlo a cerumen o catarro', d: 'Lavados, descongestionantes y esperar',
            say: 'El error más grave y más frecuente en atención primaria es pensar que es un tapón de cerumen invisible o un catarro de la trompa, indicar lavados o descongestionantes y esperar.' },
          { t: 'Se pierde la ventana terapéutica', d: 'Sordera definitiva',
            say: 'Con eso se pierde la ventana de oportunidad y la sordera queda definitiva. El examen lo castiga: si hay hipoacusia brusca y otoscopía normal, no observas.' },
        ] },
        { title: 'Estudio posterior', tag: 'Cuando ya está tratado', kind: 'key', items: [
          { t: 'RMN de CAI y ángulo pontocerebeloso', d: 'Con gadolinio, ya iniciado el tratamiento',
            say: 'Una vez que el paciente está tratado, se pide una resonancia del conducto auditivo interno y del ángulo pontocerebeloso con gadolinio. La razón es descartar un schwannoma vestibular, el neurinoma del acústico, que está presente en uno a tres por ciento de los casos. Mira esta resonancia con gadolinio: una masa redondeada que capta el contraste, junto al tronco, en el ángulo pontocerebeloso.',
            photo: { src: 'biblioteca/17_otorrino/orl-06/01_schwannoma-vestibular-rm-con-contraste__bailey-love_p687.jpg', label: 'Schwannoma vestibular en RM', at: 'Mira esta resonancia', credit: 'Bailey & Love 27.ª ed., p. 687' } },
          { t: 'Es el examen de elección', d: 'Ve tumores menores de 5 mm',
            say: 'La resonancia es el examen de elección para el neurinoma, porque detecta tumores pequeños dentro del conducto que el TAC no ve.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Corticoides precoces, en dosis altas',
      cards: [
        { title: 'Ataque inicial', tag: 'Prednisona oral', kind: 'pharma', items: [
          { t: 'Prednisona 1 mg/kg/día', d: 'Máximo 60 mg al día, 10 a 14 días',
            say: 'El único tratamiento con evidencia sólida son los corticoides sistémicos precoces en dosis altas. Prednisona uno miligramo por kilo al día, con máximo de sesenta miligramos, en una dosis matinal, durante diez a catorce días.' },
          { t: 'Luego descenso progresivo', d: 'Reducir 10 a 20 mg cada 3 a 5 días',
            say: 'Después se baja de forma gradual, diez a veinte miligramos cada tres a cinco días, para prevenir una insuficiencia suprarrenal. Y durante el tratamiento se da omeprazol veinte miligramos en ayunas, para proteger el estómago.' },
        ] },
        { title: 'Rescate', tag: 'Lo hace el especialista', kind: 'pharma', items: [
          { t: 'Corticoide intratimpánico', d: 'Dexametasona o metilprednisolona',
            say: 'Si hay contraindicación a los corticoides orales, como una diabetes lábil, una úlcera activa o una hipertensión severa, o si la respuesta es incompleta, el otorrinolaringólogo inyecta dexametasona o metilprednisolona a través del tímpano.' },
          { t: 'Una inyección semanal', d: '3 a 4 sesiones',
            say: 'Se hacen tres a cuatro sesiones semanales, y logran concentraciones altas en el oído interno sin toxicidad sistémica.' },
        ] },
        { title: 'Mal pronóstico', tag: 'Qué empeora la recuperación', kind: 'alert', items: [
          { t: 'Inicio tardío, más de 14 días', d: 'Pérdida profunda, mayor de 90 dB',
            say: 'Son factores de mal pronóstico el inicio del tratamiento después de catorce días, una pérdida profunda, sobre noventa decibeles, y la edad sobre sesenta y cinco años.' },
          { t: 'Caída en agudos y vértigo severo', d: 'Se asocian a peor recuperación',
            say: 'También empeoran el pronóstico una curva descendente en frecuencias agudas y la presencia de vértigo severo.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Gravedad y pronóstico',
      title: 'Cuánto se recupera según la pérdida',
      head: ['Pérdida', 'Umbral', 'Recuperación', 'Conducta'],
      rows: [
        { cells: ['Leve a moderada', '26 a 55 dB', '70 a 80%', 'Prednisona oral sola, 14 días'],
          say: 'Mientras menos pérdida, mejor pronóstico. En la leve a moderada, de veintiséis a cincuenta y cinco decibeles, se recupera entre setenta y ochenta por ciento con prednisona oral sola por catorce días.' },
        { cells: ['Severa', '56 a 89 dB', '40 a 50% si es precoz', 'Prednisona + derivar para intratimpánico'],
          say: 'En la severa, de cincuenta y seis a ochenta y nueve decibeles, se recupera cuarenta a cincuenta por ciento si el tratamiento es precoz. Aquí además se deriva de forma precoz para el rescate intratimpánico.' },
        { cells: ['Profunda', '90 dB o más', 'Menos de 20 a 30%', 'Oral + intratimpánico urgente + RMN'],
          say: 'En la profunda, de noventa decibeles o más, la recuperación es baja, bajo veinte a treinta por ciento, con alto riesgo de secuela permanente. Se asocian corticoides orales, inyecciones intratimpánicas urgentes y resonancia.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Trauma acústico',
      title: 'Ruido: agudo y crónico',
      cards: [
        { title: 'Trauma acústico agudo', tag: 'Una exposición breve', kind: 'alert', items: [
          { t: 'Ruido sobre 140 dB', d: 'Explosión o disparo',
            say: 'El trauma acústico agudo es una exposición breve a un ruido muy intenso, sobre ciento cuarenta decibeles, como una explosión o un disparo.' },
          { t: 'Daño de células ciliadas', d: 'Acúfeno agudo permanente',
            say: 'Rompe las uniones ciliares o desprende el órgano de Corti, y deja un acúfeno agudo permanente.' },
        ] },
        { title: 'Trauma acústico crónico', tag: 'Hipoacusia laboral', kind: 'criteria', items: [
          { t: 'Ruido industrial sobre 85 dB', d: 'Años de exposición repetida',
            say: 'El crónico es la hipoacusia laboral: exposición prolongada a ruido industrial, sobre ochenta y cinco decibeles, como el calderero o el trabajador de maestranza.' },
          { t: 'Muesca simétrica en 4000 Hz', d: 'Recupera algo en 8000 Hz',
            say: 'Su sello en la audiometría es una muesca, o escotoma, simétrica en cuatro mil hertz, con recuperación parcial en ocho mil. Eso se pregunta casi literal.' },
          { t: 'Se previene: protectores auditivos', d: 'El daño instalado es irreversible',
            say: 'No hay tratamiento que revierta el daño. Lo que se hace es prevenir, con protectores auditivos.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Presbiacusia',
      title: 'Oye, pero no entiende',
      cards: [
        { title: 'Cómo se presenta', tag: 'Mayor de 65 años', kind: 'key', items: [
          { t: 'Sensorioneural, bilateral y simétrica', d: 'Progresiva, en tonos agudos',
            say: 'La presbiacusia es el deterioro coclear por edad, en mayores de sesenta y cinco años. Hay degeneración de células ciliadas y atrofia de la estría vascular. Produce una hipoacusia sensorioneural bilateral, simétrica, progresiva, de predominio en agudos, entre tres mil y ocho mil hertz.' },
          { t: '"Oigo, pero no entiendo"', d: 'Peor con ruido de fondo',
            say: 'La queja característica es: escucho que me hablan, pero no entiendo lo que dicen. Falla la discriminación del lenguaje, sobre todo en ambientes ruidosos, como una reunión familiar.' },
        ] },
        { title: 'GES', tag: 'Garantía número 56', kind: 'pharma', items: [
          { t: 'GES para 65 años o más', d: 'Hipoacusia bilateral',
            say: 'En Chile, la hipoacusia bilateral en personas de sesenta y cinco años y más tiene garantía explícita en salud, la número cincuenta y seis.' },
          { t: 'Audífonos bilaterales y rehabilitación', d: 'Incluye confirmación diagnóstica',
            say: 'Garantiza la confirmación diagnóstica, la entrega e implementación de audífonos en ambos oídos y la rehabilitación auditiva. Este es un audífono retroauricular, el que se apoya detrás de la oreja.',
            photo: { src: 'biblioteca/17_otorrino/orl-06/02_audifono-retroauricular__bailey-love_p734.jpg', label: 'Audífono retroauricular', at: 'Este es un audífono retroauricular', credit: 'Bailey & Love 27.ª ed., p. 734' } },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Las células ciliadas que no se regeneran',
      images: [
        { src: 'animaciones/orl-06/A1_ruido_presbiacusia_sordera_subita.mp4', label: 'Órgano de Corti: ruido, presbiacusia y sordera súbita', credit: 'Ilustración: Servier Medical Art (smart.servier.com), CC BY 4.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Muesca en 4000 hercios, caída de agudos, caída súbita',
          say: 'Mira el órgano de Corti. Con ruido sobre ochenta y cinco decibeles, las células ciliadas externas se destruyen y el audiograma muestra una muesca en cuatro mil hertz. En la presbiacusia caen los agudos en ambos oídos: el paciente oye, pero no entiende. Y la súbita cae treinta decibeles o más en menos de setenta y dos horas: urgencia, con corticoides.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tinitus',
      title: 'Tinitus: qué es, qué lo causa y cuándo derivar',
      cards: [
        { title: 'Qué es y qué orienta', tag: 'Acúfeno', kind: 'key', items: [
          { t: 'Sonido sin fuente externa', d: 'El 95 % es subjetivo: solo lo oye el paciente',
            say: 'El tinitus, o acúfeno, es percibir un sonido sin fuente externa. En el noventa y cinco por ciento es subjetivo, solo lo oye el paciente, y se asocia a hipoacusia sensorioneural, presbiacusia, trauma acústico, Ménière, cerumen, otosclerosis y fármacos ototóxicos como aspirina en dosis altas, aminoglucósidos, furosemida y cisplatino.' },
          { t: 'Pulsátil: sospecha vascular', d: 'Sincrónico con el pulso; de clic: mioclonías',
            say: 'Si el tinitus late con el pulso, piensa en una causa vascular: tumor glómico, estenosis carotídea, malformación arteriovenosa o hipertensión intracraneal idiopática. Y si es un clic, sugiere mioclonías del paladar o del músculo del estribo.' },
        ] },
        { title: 'Qué haces tú', tag: 'Manejo inicial', kind: 'pharma', items: [
          { t: 'Otoscopía, ototóxicos y audiometría', d: 'Retirar el cerumen; suspender el fármaco',
            say: 'Haces otoscopía para sacar un tapón o detectar una otitis, suspendes el fármaco ototóxico, pides audiometría y tratas la causa.' },
          { t: 'Explicar y evitar el silencio absoluto', d: 'Ruido de fondo; menos cafeína y tabaco; tratar ansiedad e insomnio',
            say: 'Explicas que en la mayoría es benigno, recomiendas ruido de fondo y no el silencio absoluto, menos cafeína y tabaco, y tratas la ansiedad y el insomnio. No existe un fármaco que lo cure.' },
        ] },
        { title: 'Cuándo derivar', tag: 'Banderas rojas', kind: 'alert', items: [
          { t: 'Unilateral o asimétrico', d: 'Descartar schwannoma vestibular con resonancia',
            say: 'Se deriva a otorrino el tinitus unilateral o asimétrico, para descartar un schwannoma vestibular con resonancia.' },
          { t: 'Pulsátil, súbito, con vértigo o déficit', d: 'O muy invalidante',
            say: 'También el pulsátil, el que acompaña una hipoacusia súbita, vértigo o signos neurológicos, y el que es muy invalidante.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Trauma del oído',
      title: 'Barotrauma y perforación timpánica traumática',
      cards: [
        { title: 'Barotrauma ótico', tag: 'Cambios de presión', kind: 'key', items: [
          { t: 'Trompa que no ventila', d: 'Avión, buceo, ascensor: presión negativa',
            say: 'El barotrauma ótico ocurre cuando la trompa de Eustaquio no ventila durante un cambio de presión, al descender en avión, bucear o en un ascensor. La presión negativa retrae el tímpano, y el paciente tiene otalgia, plenitud, hipoacusia de conducción y a veces acúfeno.' },
          { t: 'Valsalva suave y descongestionante', d: 'Corticoide nasal, analgesia; no volar ni bucear',
            say: 'En la otoscopía ves el tímpano retraído, con vasos inyectados en el mango del martillo, y a veces hemotímpano. Tratas con maniobras suaves de Valsalva o Toynbee, descongestionante nasal tópico por no más de tres días, corticoide nasal y analgesia, y el paciente no vuela ni bucea hasta resolver.' },
          { t: 'Vértigo o sordera tras bucear: urgencia', d: 'Fístula perilinfática o daño del oído interno',
            say: 'Pero si después de bucear hay vértigo o hipoacusia sensorioneural, sospecha una fístula perilinfática o una enfermedad por descompresión del oído interno. Eso se deriva de urgencia.' },
        ] },
        { title: 'Perforación traumática', tag: 'Hisopo, golpe, explosión', kind: 'alert', items: [
          { t: 'Otalgia súbita y otorragia escasa', d: 'Bordes irregulares, a veces con coágulos',
            say: 'La perforación traumática, por un hisopo, una bofetada o una explosión, da otalgia súbita intensa, poca sangre, hipoacusia de conducción y acúfeno. La otoscopía muestra una perforación de bordes irregulares, a menudo con coágulos.' },
          { t: 'Oído seco: no lavar, no gotas ototóxicas', d: 'Algodón con vaselina al ducharse',
            say: 'La conducta es mantener el oído seco, con algodón con vaselina al ducharse, no lavar ni irrigar, y no poner gotas ototóxicas; si necesitas, solo ciprofloxacino ótico. Más del noventa por ciento de las perforaciones pequeñas cierran solas en cuatro a ocho semanas.' },
          { t: 'Derivar si hay vértigo, sordera o facial', d: 'O si no cierra a los 3 meses',
            say: 'Derivas si hay vértigo, hipoacusia sensorioneural, parálisis facial, una perforación extensa, o si no cierra a los tres meses, porque necesitará timpanoplastia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Prevención y estudio',
      title: 'Prevenir el trauma acústico y estudiar el VIII par',
      cards: [
        { title: 'Prevención del trauma acústico', tag: 'Jerarquía de control', kind: 'pharma', items: [
          { t: 'Primero la fuente, el protector al final', d: 'Reducir el ruido, aislar el puesto, luego tapones u orejeras',
            say: 'La prevención sigue una jerarquía: primero reducir el ruido en la fuente, después aislar el puesto, y solo como último recurso entregar protectores auditivos, con capacitación.' },
          { t: '85 dB(A) por 8 horas', d: 'Cada 3 dB de aumento, la mitad del tiempo',
            say: 'En Chile, el decreto supremo quinientos noventa y cuatro fija el límite en ochenta y cinco decibeles ponderados por ocho horas, y cada tres decibeles de aumento reduce a la mitad el tiempo permitido. El protocolo PREXOR del Minsal vigila al trabajador expuesto con audiometrías periódicas, y la hipoacusia laboral es enfermedad profesional.' },
          { t: 'Regla 60/60 con audífonos', d: 'Hasta 60 % del volumen, 60 minutos seguidos',
            say: 'En la población general se educa la regla sesenta sesenta: audífonos hasta el sesenta por ciento del volumen y no más de sesenta minutos seguidos.' },
        ] },
        { title: 'Estudio del VIII par', tag: 'Sospecha retrococlear', kind: 'key', items: [
          { t: 'Qué pruebas lo componen', d: 'Audiometría, impedanciometría, PEAT, RM con gadolinio',
            say: 'El estudio del octavo par suma audiometría y logoaudiometría, impedanciometría con reflejos estapediales, potenciales evocados de tronco, resonancia con gadolinio del conducto auditivo y pruebas vestibulares. Tú usas el informe.' },
          { t: 'Pistas de lesión retrococlear', d: 'Asimetría de 15 dB o más; reflejo ausente; tinitus unilateral',
            say: 'Sospecha una lesión retrococlear si hay hipoacusia asimétrica de quince decibeles o más, discriminación del habla muy baja, ausencia de reflejo estapedial, latencias prolongadas en los potenciales de tronco y tinitus unilateral. La resonancia con gadolinio es el estándar para descartar un schwannoma vestibular.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Súbita, trauma, presbiacusia y neurinoma',
      head: ['', 'Causa', 'Audiometría', 'Conducta'],
      rows: [
        { cells: ['Hipoacusia súbita', 'Idiopática, viral o vascular', 'Caída de 30 dB en 3 frecuencias, un oído', 'Urgencia: prednisona 1 mg/kg por 10 a 14 días'],
          say: 'Comparemos las cuatro. La hipoacusia súbita es idiopática, viral o microvascular, tiene una caída de treinta decibeles en tres frecuencias en un solo oído, y es una urgencia que se trata con prednisona uno miligramo por kilo, diez a catorce días.' },
        { cells: ['Trauma acústico crónico', 'Ruido industrial sobre 85 dB', 'Muesca simétrica en 4000 Hz', 'Protectores; el daño no revierte'],
          say: 'El trauma acústico crónico viene del ruido laboral, con la muesca en cuatro mil hertz. Se previene con protectores, porque el daño ya instalado es irreversible.' },
        { cells: ['Presbiacusia', 'Envejecimiento coclear', 'Bilateral, simétrica, en agudos', 'GES en 65 años o más: audífonos'],
          say: 'La presbiacusia es por envejecimiento, con una pérdida bilateral, simétrica y en agudos, y tiene garantía GES con audífonos desde los sesenta y cinco años.' },
        { cells: ['Neurinoma del acústico', 'Schwannoma del nervio vestibular', 'Unilateral progresiva, mala discriminación', 'RMN con gadolinio; cirugía o radiocirugía'],
          say: 'El neurinoma del acústico es un schwannoma benigno del nervio vestibular, con una pérdida unilateral progresiva y muy mala discriminación. Se estudia con resonancia con gadolinio y se trata con microcirugía o radiocirugía.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Veamos el algoritmo de la urgencia: un paciente que pierde la audición de un oído de un día para otro.',
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Un abogado de 48 años consulta porque hace 36 horas despertó sin oír por el oído izquierdo, con un pito agudo continuo y sensación de presión. Pensó que era cera y se puso gotas de glicerina, sin mejoría. No tiene fiebre ni mareos. La otoscopía es normal en ambos oídos. En el diapasón, el Weber lateraliza hacia el oído derecho y el Rinne es positivo en ambos oídos.',
      question: '¿Cuál es el diagnóstico y la conducta prioritaria?',
      options: [
        { letter: 'A', text: 'Tapón de cerumen; lavado de oído' },
        { letter: 'B', text: 'Disfunción tubaria; descongestionantes y control en 3 semanas' },
        { letter: 'C', text: 'Hipoacusia sensorioneural súbita; prednisona oral 1 mg/kg/día y audiometría urgente' },
        { letter: 'D', text: 'Otitis media con efusión; observar 3 meses' },
        { letter: 'E', text: 'Neurinoma del acústico; cirugía inmediata' },
      ],
      correct: 'C',
      explanation: 'Pérdida brusca de menos de 72 horas con otoscopía normal, Weber al oído sano y Rinne positivo: hipoacusia sensorioneural súbita. Es una urgencia: se inicia prednisona 1 mg/kg/día de inmediato y se pide audiometría urgente. La resonancia con gadolinio se programa una vez iniciado el tratamiento. Atribuirla a cerumen o a la trompa hace perder la ventana terapéutica.',
      say: {
        stem: 'Veamos un caso. Abogado de cuarenta y ocho años que despertó hace treinta y seis horas sin oír por el oído izquierdo, con un pito agudo y sensación de presión. Pensó que era cera y se puso gotas, sin mejoría. Sin fiebre ni mareos. La otoscopía es normal. El Weber se va al oído derecho y el Rinne es positivo en ambos.',
        question: '¿Cuál es el diagnóstico y la conducta prioritaria?',
        options: 'Las opciones: cerumen con lavado, disfunción tubaria con descongestionantes, hipoacusia súbita con prednisona y audiometría urgente, otitis con efusión, o neurinoma con cirugía. Piénsalo.',
        answer: 'Es la C. Menos de setenta y dos horas de pérdida, otoscopía normal, Weber al oído sano y Rinne positivo: es una hipoacusia sensorioneural súbita. Empiezas de inmediato prednisona uno miligramo por kilo y pides audiometría urgente. La resonancia viene después, ya con el tratamiento en marcha. Lavar, descongestionar o esperar es el error que pierde la audición para siempre.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 123',
      stem: 'Paciente de 45 años con pérdida súbita de audición unilateral de 48 horas de evolución, sin vértigo ni acúfenos. Audiometría: hipoacusia neurosensorial unilateral de 50 dB.',
      question: '¿Cuál es el tratamiento?',
      options: [
        { letter: 'A', text: 'Corticoides orales (prednisona 1 mg/kg/día x 10 días)' },
        { letter: 'B', text: 'Antibióticos orales' },
        { letter: 'C', text: 'Antivirales (aciclovir)' },
        { letter: 'D', text: 'Solo observar, resolución espontánea' },
        { letter: 'E', text: 'Cirugía descompresiva del nervio auditivo' },
      ],
      correct: 'A',
      explanation: 'Hipoacusia súbita neurosensorial: el tratamiento estándar son corticoides orales en dosis alta, prednisona 1 mg/kg/día, iniciados dentro de las primeras 72 horas.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de julio de dos mil veinticinco. Paciente de cuarenta y cinco años con pérdida súbita de audición en un oído, de cuarenta y ocho horas, sin vértigo ni acúfenos. La audiometría muestra una hipoacusia neurosensorial unilateral de cincuenta decibeles.',
        question: '¿Cuál es el tratamiento?',
        options: 'Las opciones: corticoides orales, antibióticos orales, antivirales, solo observar, o cirugía descompresiva del nervio. Piénsalo.',
        answer: 'Es la A, corticoides orales: prednisona uno miligramo por kilo al día por diez días, iniciada en las primeras setenta y dos horas. Los antivirales suenan lógicos porque se postula un virus, pero no son el tratamiento de elección. Y observar es justamente el error que se castiga en el examen.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2022 · Pregunta 110',
      stem: 'Un hombre de 33 años, sin antecedentes de importancia, despierta con hipoacusia del oído izquierdo, asociado a tinitus, sin otros síntomas. No ha presentado vértigo y su otoscopía no muestra alteraciones. Su examen neurológico no aporta nueva información.',
      question: '¿Cuál es el examen inicial para evaluar a este paciente?',
      options: [
        { letter: 'A', text: 'Impedanciometría' },
        { letter: 'B', text: 'TAC de oído' },
        { letter: 'C', text: 'TAC de cerebro' },
        { letter: 'D', text: 'Prueba calórica' },
        { letter: 'E', text: 'Audiometría' },
      ],
      correct: 'E',
      explanation: 'Hipoacusia brusca con tinnitus y otoscopía normal: el examen inicial es la audiometría, que confirma la pérdida sensorioneural y orienta el tratamiento urgente.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil veintidós. Hombre de treinta y tres años que despierta con hipoacusia en el oído izquierdo y tinitus, sin vértigo. La otoscopía es normal y el examen neurológico no aporta nada.',
        question: '¿Cuál es el examen inicial?',
        options: 'Las opciones: impedanciometría, TAC de oído, TAC de cerebro, prueba calórica o audiometría. Piénsalo.',
        answer: 'Es la E, audiometría. Con una pérdida brusca y tímpano normal, lo primero es confirmar que es sensorioneural y cuantificarla. Las imágenes no son el examen inicial. La impedanciometría evalúa el oído medio, y aquí el oído medio está sano.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un paciente de 72 años consulta porque desde hace 3 años presenta dificultad para entender las conversaciones cuando asiste a reuniones familiares o en lugares con ruido de fondo, refiriendo que "oye pero no entiende". No tiene otalgia ni vértigo. La audiometría demuestra una hipoacusia sensorioneural bilateral y simétrica, con mayor caída en los tonos agudos (3000 a 8000 Hz) y caída de la discriminación de la palabra al 60%.',
      question: '¿Cuál es el diagnóstico más probable y el beneficio en el sistema de salud chileno?',
      options: [
        { letter: 'A', text: 'Otoesclerosis bilateral; resolución quirúrgica con estapedectomía GES' },
        { letter: 'B', text: 'Presbiacusia; patología con Garantía Explícita en Salud (GES) con indicación de audífonos bilaterales' },
        { letter: 'C', text: 'Enfermedad de Ménière bilateral; tratamiento con restricción de sal y acetazolamida' },
        { letter: 'D', text: 'Trauma acústico crónico; derivación a mutualidad de seguridad laboral para indemnización' },
        { letter: 'E', text: 'Neurinoma del acústico bilateral; estudio genético urgente para Neurofibromatosis tipo 1' },
      ],
      correct: 'B',
      explanation: 'Es presbiacusia: hipoacusia sensorioneural bilateral, simétrica, en agudos, con mala discriminación en ambientes ruidosos. En Chile, la hipoacusia en personas de 65 años y más tiene GES, con confirmación diagnóstica, audífonos y rehabilitación.',
      say: {
        stem: 'Ahora una pregunta del banco, de caso representativo. Paciente de setenta y dos años con tres años de dificultad para entender conversaciones en reuniones o con ruido de fondo, que dice que oye pero no entiende. La audiometría muestra una pérdida sensorioneural bilateral y simétrica, en agudos, con discriminación de la palabra en sesenta por ciento.',
        question: '¿Cuál es el diagnóstico más probable y el beneficio en el sistema de salud chileno?',
        options: 'Las opciones: otoesclerosis con cirugía GES, presbiacusia con audífonos GES, Ménière bilateral, trauma acústico crónico o neurinoma bilateral. Piénsalo.',
        answer: 'Es la B. Pérdida bilateral, simétrica, en agudos, en un mayor de sesenta y cinco años que oye pero no entiende: presbiacusia. Y la garantía GES entrega audífonos en ambos oídos. La otoesclerosis es de conducción, así que la audiometría tendría brecha, y aquí no la hay.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un calderero industrial de 45 años, con 20 años de labor en maestranza sin uso constante de protectores auditivos, se realiza una audiometría ocupacional periódica. ¿Cuál de los siguientes hallazgos audiométricos es característico y patognomónico del trauma acústico crónico por ruido laboral?',
      question: '¿Qué hallazgo es característico?',
      options: [
        { letter: 'A', text: 'Pérdida auditiva de conducción con curva timpanométrica tipo B' },
        { letter: 'B', text: 'Caída del umbral auditivo neurosensorial en las frecuencias graves (250 a 500 Hz)' },
        { letter: 'C', text: 'Muesca o escotoma neurosensorial bilateral selectivo en la frecuencia de 4000 Hz' },
        { letter: 'D', text: 'Brecha óseo-aérea de 30 dB en todas las frecuencias con vía ósea normal' },
        { letter: 'E', text: 'Caída plana sensorioneural de 90 dB en todas las frecuencias del oído derecho únicamente' },
      ],
      correct: 'C',
      explanation: 'El ruido laboral sobre 85 dB daña de forma selectiva las células ciliadas externas basales y produce una muesca simétrica en 4000 Hz, con recuperación relativa en 8000 Hz.',
      say: {
        stem: 'Y una última pregunta del banco, de caso representativo. Calderero industrial de cuarenta y cinco años, con veinte años en maestranza sin protectores auditivos constantes, que se hace una audiometría ocupacional. Pregunta qué hallazgo es característico del trauma acústico crónico.',
        question: '¿Qué hallazgo es característico?',
        options: 'Las opciones: pérdida de conducción con curva B, caída en graves, muesca en cuatro mil hertz, brecha de treinta decibeles, o caída plana en un solo oído. Piénsalo.',
        answer: 'Es la C, la muesca simétrica en cuatro mil hertz. El ruido daña las células ciliadas de esa zona de la cóclea, con recuperación parcial en ocho mil. Una curva B o una brecha óseo-aérea son de conducción, y el ruido produce daño sensorioneural.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2024 · Pregunta 90",
      "stem": "Una paciente de 33 años consulta por otalgia y sensación de oído tapado, mayor a derecha. Refiere que el día anterior estuvo nadando, sumergiéndose a 1,5 metros de profundidad.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Otitis media aguda"
        },
        {
          "letter": "B",
          "text": "Otitis media con efusión"
        },
        {
          "letter": "C",
          "text": "Perforación timpánica"
        },
        {
          "letter": "D",
          "text": "Otitis externa"
        },
        {
          "letter": "E",
          "text": "Barotrauma"
        }
      ],
      "correct": "E",
      "explanation": "Otalgia y oído tapado justo después de un cambio brusco de presión, como el buceo, un vuelo o un cambio de altitud, es un barotrauma ótico. Se maneja con analgesia, descongestionantes y evitando nuevos cambios de presión hasta que se resuelva.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil veinticuatro. Mujer de treinta y tres años con dolor y sensación de oído tapado, mayor a derecha, que el día anterior estuvo nadando y sumergiéndose a un metro y medio de profundidad.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: otitis media aguda, otitis media con efusión, perforación timpánica, otitis externa, o barotrauma. Piénsalo.",
        "answer": "Es la E. La clave es el cambio brusco de presión al sumergirse, seguido de dolor con oído tapado. La otitis externa tienta porque estuvo nadando, pero da dolor al traccionar el pabellón y secreción, y aquí lo que manda es la inmersión."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.03.3.007 · Prevención de trauma acústico y daño por exposición a ruidos",
      "stem": "Un hombre de 30 años ingresa a trabajar a una maestranza donde el ruido medido en su puesto es de 92 dB durante la jornada de 8 horas. Su audiometría de ingreso es normal y no tiene síntomas.",
      "question": "¿Cuál es la medida preventiva más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Protectores auditivos durante toda la exposición y audiometrías periódicas de vigilancia"
        },
        {
          "letter": "B",
          "text": "Ninguna, hasta que aparezca hipoacusia"
        },
        {
          "letter": "C",
          "text": "Corticoides orales profilácticos en los períodos de más ruido"
        },
        {
          "letter": "D",
          "text": "Audífonos desde el ingreso"
        },
        {
          "letter": "E",
          "text": "Lavados óticos mensuales"
        }
      ],
      "correct": "A",
      "explanation": "Sobre 85 dB por 8 horas hay riesgo de hipoacusia laboral, cuyo daño no revierte. Se previene reduciendo el ruido en la fuente, usando protectores auditivos durante toda la exposición y vigilando con audiometrías periódicas (protocolo PREXOR del MINSAL), buscando precozmente la muesca en 4000 Hz.",
      "say": {
        "stem": "Hombre de treinta años que entra a trabajar a una maestranza con noventa y dos decibeles de ruido durante su jornada de ocho horas. Su audiometría de ingreso es normal.",
        "question": "¿Cuál es la medida preventiva más adecuada?",
        "options": "Las opciones: protectores con audiometrías periódicas, ninguna hasta que aparezca hipoacusia, corticoides profilácticos, audífonos desde el ingreso o lavados óticos mensuales. Piénsalo.",
        "answer": "Es la A. Sobre ochenta y cinco decibeles hay riesgo de daño, y como ese daño no se revierte, se previene con protectores durante toda la exposición y audiometrías periódicas. Esperar a que aparezca la hipoacusia tienta porque está sano, pero cuando aparece ya es permanente."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.03.1.031 · Tinitus",
      "stem": "Mujer de 55 años con tinnitus en el oído izquierdo de 6 meses, asociado a hipoacusia progresiva del mismo lado y leve inestabilidad. La otoscopía es normal. La audiometría muestra hipoacusia sensorioneural izquierda con discriminación de palabras desproporcionadamente baja.",
      "question": "¿Cuál es el estudio más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Ninguno; indicar enmascaradores de ruido"
        },
        {
          "letter": "B",
          "text": "TAC de oídos sin contraste"
        },
        {
          "letter": "C",
          "text": "Resonancia magnética de conductos auditivos internos y ángulo pontocerebeloso con gadolinio"
        },
        {
          "letter": "D",
          "text": "Ecografía Doppler carotídea"
        },
        {
          "letter": "E",
          "text": "Impedanciometría"
        }
      ],
      "correct": "C",
      "explanation": "El tinnitus unilateral con hipoacusia sensorioneural asimétrica y mala discriminación es la forma de presentación típica del schwannoma vestibular (neurinoma del acústico). Debe estudiarse con resonancia magnética con gadolinio de conductos auditivos internos. El tinnitus pulsátil orienta a causas vasculares. El tinnitus bilateral con presbiacusia simétrica no requiere imágenes.",
      "say": {
        "stem": "Mujer de cincuenta y cinco años con zumbido del oído izquierdo de seis meses, hipoacusia progresiva del mismo lado y otoscopía normal. La audiometría muestra hipoacusia sensorioneural izquierda con mala discriminación de palabras.",
        "question": "¿Cuál es el estudio más adecuado?",
        "options": "Las opciones: ninguno, TAC de oídos, resonancia con gadolinio de conductos auditivos internos, Doppler carotídeo o impedanciometría. Piénsalo.",
        "answer": "Es la C. El tinnitus con hipoacusia sensorioneural asimétrica obliga a descartar un neurinoma del acústico con resonancia con gadolinio. La TAC tienta por estudiar el oído, pero no ve bien el nervio."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Enero 2023 · Pregunta 138",
      "stem": "Paciente usuaria habitual de cotonito (hisopo) consulta por otalgia e hipoacusia leve tras su uso. En la otoscopía se observa una perforación timpánica traumática.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Control en 1 mes (resolución espontánea)"
        },
        {
          "letter": "B",
          "text": "Tapón de algodón y antibiótico tópico ótico"
        },
        {
          "letter": "C",
          "text": "Miringoplastía inmediata"
        },
        {
          "letter": "D",
          "text": "TAC de hueso temporal"
        },
        {
          "letter": "E",
          "text": "Derivar a ORL urgente"
        }
      ],
      "correct": "A",
      "explanation": "La mayoría de las perforaciones timpánicas traumáticas pequeñas cierran espontáneamente en semanas. Se indica mantener el oído seco (no mojar, no lavar, no usar gotas salvo infección), analgesia, y control otoscópico y audiométrico. Se deriva con urgencia si hay vértigo, hipoacusia sensorioneural, parálisis facial u otorrea; si no cierra en 2 a 3 meses, timpanoplastía.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de enero de dos mil veintitrés. Paciente que usa cotonitos y presenta una perforación timpánica traumática con dolor e hipoacusia leve.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: control en un mes, tapón con antibiótico ótico, miringoplastía inmediata, TAC de hueso temporal o derivar urgente. Piénsalo.",
        "answer": "Es la A. La perforación traumática pequeña cierra sola: se mantiene el oído seco y se controla. Las gotas antibióticas tientan, pero sin otorrea no se necesitan, y la urgencia se reserva para vértigo, parálisis facial o hipoacusia sensorioneural."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.03.4.011 · Estudio de VIII par",
      "stem": "Hombre de 45 años con hipoacusia súbita del oído izquierdo de 2 días, con tinnitus y sensación de oído tapado. Otoscopía normal. Weber lateraliza a la derecha y Rinne positivo bilateral.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Lavado de oídos"
        },
        {
          "letter": "B",
          "text": "Antibiótico oral"
        },
        {
          "letter": "C",
          "text": "Audiometría urgente, corticoides sistémicos precoces y resonancia magnética de conductos auditivos internos con gadolinio para descartar patología retrococlear"
        },
        {
          "letter": "D",
          "text": "Observación por 1 mes"
        },
        {
          "letter": "E",
          "text": "Descongestionante nasal"
        }
      ],
      "correct": "C",
      "explanation": "Weber hacia el oído sano con Rinne positivo indica hipoacusia sensorioneural del oído afectado. La hipoacusia sensorioneural súbita es una urgencia: se confirma con audiometría, se inician corticoides sistémicos precozmente y se estudia el VIII par con resonancia con gadolinio por la posibilidad de schwannoma vestibular. El estudio puede complementarse con potenciales evocados auditivos.",
      "say": {
        "stem": "Hombre de cuarenta y cinco años con hipoacusia súbita del oído izquierdo y tinnitus, otoscopía normal, Weber hacia la derecha y Rinne positivo en ambos oídos.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: lavado de oídos, antibiótico, audiometría urgente con corticoides y resonancia de conductos auditivos internos, observar un mes o descongestionante. Piénsalo.",
        "answer": "Es la C. Es una hipoacusia sensorioneural súbita: se confirma con audiometría, se dan corticoides precoces y se pide resonancia para descartar un neurinoma. Observar tienta porque algunas mejoran solas, pero el tratamiento precoz mejora la recuperación."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: hipoacusia sensorioneural',
      cards: [
        { title: 'Hipoacusia súbita', tag: 'Urgencia', kind: 'alert', items: [
          { t: 'Pérdida brusca y otoscopía normal', d: 'Prednisona 1 mg/kg desde el primer día',
            say: 'Cerremos con las reglas de oro. Una pérdida brusca con otoscopía normal es una hipoacusia súbita hasta que se demuestre lo contrario, y se trata de inmediato con prednisona uno miligramo por kilo, sin esperar ni lavar el oído.' },
          { t: 'Audiometría urgente y RMN después', d: 'Para descartar neurinoma',
            say: 'Se pide audiometría urgente, y una vez iniciado el tratamiento, resonancia con gadolinio para descartar neurinoma.' },
        ] },
        { title: 'Trauma acústico', tag: 'Ruido', kind: 'key', items: [
          { t: 'Muesca simétrica en 4000 Hz', d: 'Se previene con protectores',
            say: 'El trauma acústico crónico da una muesca simétrica en cuatro mil hertz, y no se revierte, se previene.' },
        ] },
        { title: 'Presbiacusia', tag: 'GES', kind: 'pharma', items: [
          { t: 'Oye pero no entiende', d: 'GES: audífonos desde los 65 años',
            say: 'La presbiacusia es bilateral, simétrica y en agudos, y tiene garantía GES con audífonos desde los sesenta y cinco años. Si te llevas una sola idea de hoy: sordera brusca con tímpano normal es una urgencia, y se trata con corticoides hoy. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de diagnóstico y manejo de urgencia: hipoacusia sensorioneural súbita',
    root: N('start', 'Pérdida brusca de audición unilateral', 'Menos de 72 horas, a veces con acúfeno',
      'Un paciente que pierde la audición de un oído de un día para otro. Lo primero es mirar el tímpano.',
      ['', N('q', '¿Otoscopía normal?', 'Sin cerumen, líquido ni perforación',
        'Si ves cerumen, líquido o una perforación, la causa está en el oído externo o medio. Si todo es normal, sigues con el diapasón.',
        ['No: causa de oído externo o medio', N('do', 'Tratar la causa', 'Cerumen, otitis, perforación',
          'Aquí no hay hipoacusia súbita sensorioneural. Tratas la causa que viste en la otoscopía.')],
        ['Sí, y Weber al sano con Rinne positivo', N('alert', 'Hipoacusia sensorioneural súbita', 'Es una urgencia: no lavar, no esperar',
          'Otoscopía normal, Weber al oído sano y Rinne positivo: es sensorioneural. Es una urgencia, y no se lava el oído ni se espera.',
          ['Iniciar de inmediato', N('do', 'Prednisona 1 mg/kg/día, máximo 60 mg', '10 a 14 días con omeprazol, y audiometría urgente',
            'Empiezas prednisona de inmediato, con omeprazol, y pides audiometría urgente dentro de las primeras veinticuatro a cuarenta y ocho horas.',
            ['Respuesta incompleta o contraindicación', N('refer', 'ORL: corticoide intratimpánico y RMN', 'RMN de CAI con gadolinio para descartar neurinoma',
              'Si hay contraindicación a los corticoides orales o respuesta incompleta, el otorrinolaringólogo hace inyecciones intratimpánicas. Y se pide resonancia con gadolinio para descartar un schwannoma vestibular.')],
          )],
        )],
      )],
    ),
  },
};
