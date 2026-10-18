// Clase 18.2 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-02).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-02',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Los hitos que tienes que saber de memoria, y cuándo preocuparte',
      say: 'Bienvenido. Hoy vemos desarrollo psicomotor: los hitos madurativos y las dos herramientas que se usan en Chile para tamizarlo, la EEDP y el TEPSI. Fíjate que este tema tiene una lógica simple, aunque parezca mucha memoria: hay una edad esperada para cada logro, y hay una edad límite, más allá de la cual ya es una bandera roja. Si ordenas así la información, el examen se vuelve mucho más fácil. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Hitos madurativos',
      title: 'El camino esperado, mes a mes',
      nodes: [
        { id: 'm3', col: 0, row: 2, k: 'start', t: '3 meses', s: 'Sostén cefálico, sonrisa social' },
        { id: 'm6', col: 1, row: 1, k: 'cause', t: '6 meses', s: 'Se sienta con apoyo, transfiere objetos' },
        { id: 'm9', col: 2, row: 2, k: 'cause', t: '8 a 9 meses', s: 'Se sienta solo, pinza inferior' },
        { id: 'm12', col: 3, row: 1, k: 'mech', t: '12 meses', s: 'Bipedestación, una o dos palabras' },
        { id: 'm18', col: 4, row: 0, k: 'risk', t: '18 meses', s: 'Marcha independiente, señala para pedir' },
        { id: 'm24', col: 4, row: 3, k: 'effect', t: '24 meses', s: 'Corre, frases de dos palabras' },
      ],
      edges: [
        { from: 'm3', to: 'm6' }, { from: 'm6', to: 'm9' }, { from: 'm9', to: 'm12' },
        { from: 'm12', to: 'm18' }, { from: 'm18', to: 'm24' },
      ],
      steps: [
        { show: ['m3'], note: 'La cabeza firme, la primera sonrisa',
          say: 'Vamos con la línea de tiempo. A los tres meses, el lactante ya sostiene la cabeza con firmeza, y aparece la sonrisa social: te sonríe porque te reconoce, no por reflejo.' },
        { show: ['m6'], note: 'Se sienta con apoyo, pasa objetos de mano en mano',
          say: 'A los seis meses se sienta con apoyo, en trípode, y ya es capaz de pasar un objeto de una mano a la otra.' },
        { show: ['m9'], note: 'Ya no necesita apoyo para sentarse',
          say: 'Entre los ocho y los nueve meses, se sienta solo, sin ayuda, y toma las cosas con una pinza todavía gruesa, entre el dedo índice y el resto de la mano.' },
        { show: ['m12'], note: 'De pie, y ya dice algo con sentido',
          say: 'Al año, se pone de pie con apoyo o incluso da sus primeros pasos, y dice una o dos palabras con sentido, como mamá o agua.' },
        { show: ['m18'], note: 'El límite máximo para caminar solo',
          say: 'A los dieciocho meses camina solo, de forma fluida, y señala con el dedo para pedir algo. Guarda este número, porque es el límite máximo para la marcha independiente, y lo vamos a usar como bandera roja.' },
        { show: ['m24'], note: 'Corre y arma frases cortas',
          say: 'Y a los veinticuatro meses ya corre, sube y baja escaleras solo, y arma frases de dos palabras, como quiero agua. Mira este esquema: cada hito tiene su barra de edad habitual y un punto rojo con la edad límite de alerta. Con esta línea de tiempo en la cabeza, ahora podemos hablar de cómo se mide formalmente.',
          photo: { src: 'biblioteca/15_pediatria/ped-02/S1_hitos-dsm__propio.svg', label: 'Hitos y edad límite', at: 'Mira este esquema', credit: 'Dibujo propio (esquema)' } },
      ],
    },

    {
      type: 'points',
      kicker: 'Instrumentos de tamizaje',
      title: 'EEDP y TEPSI: quién, cuándo y qué mide',
      cards: [
        { title: 'EEDP', tag: 'Del nacimiento a los 24 meses', kind: 'key', items: [
          { t: 'Se aplica hasta los 24 meses', d: 'Obligatoria a los 8 y a los 18 meses',
            say: 'Empecemos por la EEDP, la Escala de Evaluación del Desarrollo Psicomotor. Se usa desde que nace hasta los veinticuatro meses, pero la aplicación obligatoria en el control de salud es a los ocho y a los dieciocho meses.' },
        ] },
        { title: 'TEPSI', tag: 'De los 2 a los 5 años', kind: 'key', items: [
          { t: 'Se aplica de 2 a 5', d: 'Obligatoria a los 3 años',
            say: 'El TEPSI toma la posta entre los dos y los cinco años, y su aplicación universal en el control de salud es a los tres años cumplidos.' },
        ] },
        { title: 'Los puntajes de corte', tag: 'Se preguntan siempre', kind: 'alert', items: [
          { t: 'Ochenta y cinco o más: normal', d: 'Sigue su calendario habitual',
            say: 'Y los puntajes de corte, que se preguntan siempre. Ochenta y cinco puntos o más es normal.' },
          { t: 'Setenta a ochenta y cuatro: riesgo', d: 'Va a sala de estimulación',
            say: 'Entre setenta y ochenta y cuatro es riesgo: el niño entra a la sala de estimulación de tu centro de salud, y se reevalúa.' },
          { t: 'Menos de setenta: retraso', d: 'Evaluación médica y derivación',
            say: 'Y bajo setenta puntos ya es retraso: ahí necesitas una evaluación médica inmediata y derivar a especialista, sin esperar el próximo control.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Banderas rojas',
      title: 'Cuándo no puedes esperar al próximo control',
      nodes: [
        { id: 'soc', col: 0, row: 0, k: 'risk', t: 'Sin sonrisa social, 3 meses', s: 'Falta el primer hito social' },
        { id: 'cef', col: 0, row: 1, k: 'risk', t: 'Sin sostén cefálico, 4 meses', s: 'Hipotonía axial' },
        { id: 'sie', col: 0, row: 2, k: 'risk', t: 'No se sienta a los 9', s: 'Retraso motor grueso' },
        { id: 'mar', col: 0, row: 3, k: 'alert', t: 'No camina a los 18 meses', s: 'El límite máximo absoluto' },
        { id: 'reg', col: 0, row: 4, k: 'trap', t: 'Pierde una habilidad ya lograda', s: 'Regresión: alarma máxima' },
        { id: 'eva', col: 2, row: 2, k: 'good', t: 'Evaluación inmediata', s: 'No esperar el próximo control' },
      ],
      edges: [
        { from: 'soc', to: 'eva' }, { from: 'cef', to: 'eva' }, { from: 'sie', to: 'eva' },
        { from: 'mar', to: 'eva' }, { from: 'reg', to: 'eva', label: 'siempre' },
      ],
      steps: [
        { show: ['soc'], note: 'El primer hito social que falta',
          say: 'Ahora las banderas rojas, que son la otra cara de la línea de tiempo que vimos. Si a los tres meses no hay sonrisa social, ya es una alerta.' },
        { show: ['cef'], note: 'La cabeza debería sostenerse antes',
          say: 'Si a los cuatro meses no sostiene la cabeza, piensa en hipotonía axial.' },
        { show: ['sie'], note: 'El hito de los ocho o nueve meses, ausente',
          say: 'Si a los nueve meses no logra sentarse solo, hay un retraso motor grueso.' },
        { show: ['mar'], note: 'El límite que más se pregunta',
          say: 'Y la más preguntada: si a los dieciocho meses el niño todavía no camina de forma independiente, eso nunca es una variante normal. Es la edad límite absoluta.' },
        { show: ['reg'], note: 'Perder algo que ya se sabía hacer',
          say: 'Pero la alarma más grave de todas es la regresión: que el niño pierda una habilidad que ya tenía. Eso siempre te tiene que hacer pensar en algo neurológico serio, nunca en una variante normal.' },
        { show: ['eva'], note: 'Examen físico y neurológico, ya',
          say: 'Cualquiera de estos signos te lleva al mismo lugar: examen físico y neurológico completo, sin esperar al próximo control programado.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Un detalle que se pregunta',
      title: 'El prematuro se evalúa con edad corregida',
      cards: [
        { title: 'Edad corregida', tag: 'Hasta los 2 años', kind: 'normal', items: [
          { t: 'Se ajusta por semanas de prematurez', d: 'Restando desde las 40 semanas',
            say: 'Un detalle que suele aparecer en el examen: al lactante prematuro no lo evalúas con su edad cronológica, sino con su edad corregida, que se calcula descontando las semanas que le faltaron para llegar a las cuarenta.' },
          { t: 'Se usa hasta los 2 años', d: 'Después ya no hace diferencia',
            say: 'Este ajuste se mantiene hasta los dos años. Un prematuro que parece atrasado con su edad de nacimiento puede estar perfectamente normal si lo evalúas con su edad corregida.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Lenguaje',
      title: 'Hitos y banderas rojas del lenguaje',
      cards: [
        { title: 'Hitos del lenguaje', tag: 'Qué esperas, y cuándo', kind: 'normal', items: [
          { t: 'Balbuceo a los 6; palabras al año', d: 'Bisílabos a los 9 a 10 meses',
            say: 'El lenguaje tiene su propia línea de tiempo. Arrullos a los dos meses, balbuceo a los seis, bisílabos como mamá y papá a los nueve o diez, y las primeras palabras al año.' },
          { t: '50 palabras y frases de 2 a los 24 meses', d: '3 palabras a los 3 años; casi completo a los 4',
            say: 'A los veinticuatro meses esperas unas cincuenta palabras y frases de dos palabras. A los tres años, frases de tres o más, y que los extraños le entiendan al menos el setenta y cinco por ciento. A los cuatro, casi completo.' },
        ] },
        { title: 'Bandera roja', tag: 'No se espera al próximo control', kind: 'alert', items: [
          { t: 'Sin balbuceo a los 12 meses', d: 'Sin palabras a los 18; menos de 50 a los 24',
            say: 'Son alerta: ausencia de balbuceo a los doce meses, ninguna palabra a los dieciocho, menos de cincuenta palabras o ausencia de frases a los veinticuatro, lenguaje ininteligible a los tres años y, siempre, cualquier regresión.' },
        ] },
        { title: 'Qué haces', tag: 'Pesquisa y manejo inicial', kind: 'criteria', items: [
          { t: 'Siempre descarta hipoacusia', d: 'Audiometría o PEATC',
            say: 'Lo más frecuente es el retraso simple del lenguaje, el hablador tardío, de buen pronóstico. Pero antes de aceptarlo, siempre descartas hipoacusia con audiometría o potenciales evocados auditivos. También piensas en discapacidad intelectual, autismo y privación psicoafectiva.' },
          { t: 'Estimula y deriva a fonoaudiología', d: 'El bilingüismo no causa retraso',
            say: 'Indicas estimulación en casa: hablar, cantar, leer cuentos y limitar pantallas, y derivas a fonoaudiología. Y una trampa: el bilingüismo no causa retraso del lenguaje. La tartamudez entre los dos y cinco años es frecuente; se deriva si dura más de seis meses o persiste después de los cinco años.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Trastornos del desarrollo',
      title: 'Retraso global, autismo y TDAH',
      cards: [
        { title: 'Retraso global del desarrollo', tag: 'Menor de 5 años', kind: 'key', items: [
          { t: 'Dos o más áreas bajo -2 DE', d: 'Si persiste: discapacidad intelectual',
            say: 'El retraso global es el compromiso de dos o más áreas del desarrollo, bajo menos dos desviaciones estándar, en un menor de cinco años. Si persiste, evoluciona a discapacidad intelectual, con coeficiente intelectual bajo setenta y déficit de la conducta adaptativa.' },
          { t: 'Siempre descartar causas tratables', d: 'Hipoacusia, hipotiroidismo, plomo, privación',
            say: 'Ante cualquier retraso, descartas hipoacusia, alteración visual, hipotiroidismo congénito, intoxicación por plomo, privación psicoafectiva y cromosomopatías como Down, X frágil y Rett.' },
        ] },
        { title: 'Trastorno del espectro autista', tag: 'Tamizaje M-CHAT', kind: 'alert', items: [
          { t: 'Comunicación social y conductas repetitivas', d: 'No responde al nombre, no señala',
            say: 'El autismo se caracteriza por un déficit persistente de la comunicación e interacción social: no responde al nombre, no señala ni comparte la atención, mira poco a los ojos. Y por conductas repetitivas o intereses restringidos.' },
          { t: 'M-CHAT entre los 16 y 30 meses', d: 'Regresión: bandera roja',
            say: 'Se tamiza con el M-CHAT entre los dieciséis y treinta meses, o sea, en los controles de dieciocho y veinticuatro meses. Cualquier regresión del lenguaje o de las habilidades sociales es bandera roja.' },
        ] },
        { title: 'TDAH y conducta del médico', tag: 'Sospechar y derivar', kind: 'criteria', items: [
          { t: 'Inatención, hiperactividad, impulsividad', d: 'Dos ambientes, antes de los 12 años',
            say: 'El TDAH exige inatención, hiperactividad e impulsividad en al menos dos ambientes, con inicio antes de los doce años y persistencia sobre seis meses. Se diagnostica desde los cuatro a seis años, y el fármaco lo indica el especialista.' },
          { t: 'Estimulación y derivación', d: 'Neurología o salud mental infantil',
            say: 'Tu conducta es registrar las banderas rojas, aplicar el tamizaje, ingresar al niño a estimulación del desarrollo en atención primaria, con Chile Crece Contigo, y derivar a neurología infantil o salud mental infantojuvenil.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tono muscular',
      title: 'Lactante hipertónico o hipotónico',
      cards: [
        { title: 'Síndrome hipertónico', tag: 'Lesión de la vía piramidal', kind: 'alert', items: [
          { t: 'Espasticidad: parálisis cerebral', d: 'Hiperreflexia, clonus, Babinski persistente',
            say: 'En el lactante, el tono aumentado casi siempre es espasticidad por lesión de la vía piramidal, típica de la parálisis cerebral. La causa más común es perinatal: prematurez con leucomalacia, encefalopatía hipóxico-isquémica, kernicterus o infección. Encuentras hiperreflexia, clonus, Babinski persistente, piernas en tijera y marcha en puntillas.' },
          { t: 'Preferencia manual antes del año', d: 'Sugiere hemiparesia',
            say: 'Si el lactante prefiere una mano antes del año, sospecha hemiparesia. El diagnóstico es clínico, se complementa con resonancia, y derivas a neurología infantil y rehabilitación precoz.' },
        ] },
        { title: 'Hipotonía central', tag: 'La más frecuente', kind: 'key', items: [
          { t: 'Fuerza conservada, reflejos presentes', d: 'Down, Prader-Willi, hipotiroidismo congénito',
            say: 'El lactante hipotónico, de trapo, con postura en rana, se divide en central y periférico. En el central, que es el más frecuente, la fuerza está conservada y los reflejos están presentes o aumentados. Piensa en encefalopatía hipóxico-isquémica, síndrome de Down, Prader-Willi e hipotiroidismo congénito.' },
        ] },
        { title: 'Hipotonía periférica', tag: 'Neuromuscular', kind: 'criteria', items: [
          { t: 'Debilidad marcada y arreflexia', d: 'Atrofia espinal tipo 1, botulismo',
            say: 'En el periférico hay debilidad marcada, hipo o arreflexia, atrofia y fasciculaciones. Piensa en atrofia muscular espinal tipo uno, miopatías, miastenia neonatal y botulismo del lactante: constipación, ptosis, llanto débil y antecedente de miel.' },
          { t: 'Con debilidad o dificultad respiratoria: urgencia', d: 'TSH, CK, cariograma, resonancia',
            say: 'El estudio inicial incluye TSH, CK, electrolitos, calcio, glicemia y cariograma si hay dismorfias. Y la hipotonía con debilidad, dificultad respiratoria o para alimentarse es una urgencia de derivación.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Ciclo vital',
      title: 'Etapas de Piaget, Erikson y apego',
      cards: [
        { title: 'Piaget: cognitivo', tag: 'Cuatro etapas', kind: 'key', items: [
          { t: 'Sensoriomotor, 0 a 2 años', d: 'Permanencia del objeto a los 8 a 12 meses',
            say: 'Piaget describe cuatro etapas. La sensoriomotora, hasta los dos años, donde el lactante adquiere la permanencia del objeto entre los ocho y doce meses.' },
          { t: 'Preoperacional, operaciones concretas, formales', d: '2 a 7; 7 a 11; desde la adolescencia',
            say: 'Luego la preoperacional, de dos a siete años, con pensamiento simbólico y egocéntrico. Las operaciones concretas, de siete a once, con lógica sobre objetos reales. Y desde la adolescencia, las operaciones formales, con razonamiento abstracto.' },
        ] },
        { title: 'Erikson: psicosocial', tag: 'Crisis de cada etapa', kind: 'criteria', items: [
          { t: 'Confianza, autonomía, iniciativa, laboriosidad', d: 'Lactante, 1 a 3 años, preescolar, escolar',
            say: 'Erikson pone una crisis en cada etapa: confianza contra desconfianza en el lactante, autonomía contra vergüenza entre uno y tres años, iniciativa contra culpa en el preescolar y laboriosidad contra inferioridad en el escolar.' },
          { t: 'Adolescencia: identidad', d: 'Vejez: integridad vs desesperanza',
            say: 'Lo que más se pregunta: en la adolescencia, identidad contra confusión de roles, y en la vejez, integridad contra desesperanza.' },
        ] },
        { title: 'Apego y adolescencia', tag: 'Ansiedad y autonomía', kind: 'normal', items: [
          { t: 'Extraños a los 6 a 8 meses', d: 'Separación entre los 8 y 18 meses',
            say: 'En el apego, la ansiedad ante extraños aparece a los seis a ocho meses, y la ansiedad de separación entre los ocho y dieciocho. El apego puede ser seguro, evitativo, ambivalente o desorganizado.' },
          { t: 'Adolescencia: pares y conductas de riesgo', d: 'Temprana 10-13, media 14-16, tardía 17-19',
            say: 'En la adolescencia, temprana, media y tardía, se consolidan la identidad y la autonomía, y el grupo de pares pesa más, con mayor exposición a conductas de riesgo.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: "Hitos y banderas rojas",
      images: [
        { src: 'animaciones/ped-02/A1_hitos_y_banderas_rojas.mp4', label: "Mes a mes", credit: "Animación propia" },
      ],
      steps: [
        { note: "Lo esperado y lo que alarma",
          say: "Sigue la línea de tiempo. Tres meses: sostén cefálico y sonrisa social. Seis: se sienta con apoyo. Ocho a nueve: se sienta solo. Un año: de pie y primeras palabras. Dieciocho: camina solo. Veinticuatro: corre y arma frases. Y mira abajo, en rojo: sin sonrisa a los tres meses, sin sentarse a los nueve, sin caminar a los dieciocho, que nunca es normal. Perder una habilidad, alarma máxima." },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un árbol de decisión, tal como se razona en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que más se confunde en desarrollo psicomotor',
      head: ['Situación', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['EEDP o TEPSI entre 70 y 84 puntos', 'Sala de estimulación y reevaluar', 'Derivar de inmediato a especialista'],
          say: 'Repasemos las trampas. Un puntaje entre setenta y ochenta y cuatro es riesgo, y va a sala de estimulación. El error es saltarse ese paso y derivar de inmediato a especialista.' },
        { cells: ['No camina a los 18 meses', 'Examen neurológico y derivar', 'Esperar hasta los 24 meses'],
          say: 'No caminar a los dieciocho meses siempre se estudia. El error clásico es decirle a la familia que espere hasta los dos años.' },
        { cells: ['Prematuro con hitos “atrasados”', 'Calcular la edad corregida', 'Compararlo con su edad cronológica'],
          say: 'En el prematuro, el error es compararlo con su edad de nacimiento en vez de calcular la edad corregida.' },
        { cells: ['Regresión de una habilidad', 'Estudio neurológico urgente', 'Observar y controlar en un mes'],
          say: 'Y ante una regresión, el error es tranquilizarse y controlar en un mes. La regresión nunca espera.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Lactante de 10 meses, nacido a las 36 semanas de gestación, es traído a su control de salud pendiente de los 8 meses. Al examen no logra sentarse sin apoyo, no transfiere objetos entre sus manos, y solo emite sonidos guturales aislados. Se le aplica la EEDP y obtiene un puntaje de 65 puntos.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Reforzar pautas de estimulación y controlar según calendario habitual' },
        { letter: 'B', text: 'Derivar a sala de estimulación y reevaluar con EEDP en 60 días' },
        { letter: 'C', text: 'Realizar examen neurológico y derivar a pediatría o neurología infantil' },
        { letter: 'D', text: 'Calcular su edad corregida por la prematurez y tranquilizar a la familia' },
        { letter: 'E', text: 'Indicar control telefónico en 6 meses' },
      ],
      correct: 'C',
      explanation: 'Un puntaje de 65 puntos en la EEDP corresponde a retraso del desarrollo psicomotor (< 70 puntos), que exige evaluación médica y derivación inmediatas. La prematurez de 36 semanas es leve y la edad corregida no alcanza a explicar un retraso de esta magnitud a los 10 meses.',
      say: {
        stem: 'Vamos con un caso. Lactante de diez meses, nacido a las treinta y seis semanas, que llega a su control de los ocho meses, pendiente. No se sienta sin apoyo, no transfiere objetos entre sus manos, y solo tiene sonidos guturales aislados. Al aplicarle la EEDP, saca sesenta y cinco puntos.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: reforzar estimulación y control habitual, derivar a sala de estimulación, hacer examen neurológico y derivar a especialista, calcular edad corregida y tranquilizar, o control telefónico en seis meses. Piénsalo.',
        answer: 'Es la C. Sesenta y cinco puntos está bajo setenta, así que esto es retraso, no riesgo, y el retraso exige evaluación médica y derivación ya, no sala de estimulación. Y ojo con la trampa de la prematurez: nació a las treinta y seis semanas, una prematurez leve, que no alcanza a explicar un atraso tan marcado a los diez meses. No lo puedes justificar con edad corregida.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 46',
      stem: 'Una madre consulta por la evaluación del desarrollo de su hijo de 1 año y 3 meses. El niño camina solo, dice 3 palabras con significado, y construye una torre de 3 cubos.',
      question: '¿Cómo se interpreta su desarrollo psicomotor?',
      options: [
        { letter: 'A', text: 'Retraso en el lenguaje' },
        { letter: 'B', text: 'Retraso en el área motora' },
        { letter: 'C', text: 'Desarrollo normal para su edad' },
        { letter: 'D', text: 'Retraso global del desarrollo' },
        { letter: 'E', text: 'Requiere evaluación neurológica urgente' },
      ],
      correct: 'C',
      explanation: 'A los 15 meses, la marcha independiente (esperada a los 12 meses), 3 a 5 palabras y una torre de 2 a 3 cubos son hitos alcanzados o incluso adelantados. Es un control de salud infantil de rutina, sin ninguna alarma.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de julio de dos mil veinticinco. Una madre consulta por el desarrollo de su hijo, de un año y tres meses. El niño camina solo, dice tres palabras con significado, y arma una torre de tres cubos.',
        question: '¿Cómo se interpreta su desarrollo psicomotor?',
        options: 'Las opciones: retraso del lenguaje, retraso motor, desarrollo normal, retraso global, o que necesita evaluación neurológica urgente.',
        answer: 'Es la C. Repasa los hitos que ya sabes: la marcha independiente se espera a los doce meses, y este niño ya camina a los quince. Decir tres palabras también es normal para su edad, y armar una torre de tres cubos está incluso un poco adelantado. No hay ningún hito ausente: es un control de salud de rutina.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 128',
      stem: 'Un lactante de 4 meses, nacido prematuro a las 34 semanas, levanta la cabeza y lleva las manos al centro, pero no levanta el tronco apoyado en los antebrazos ni transfiere objetos de una mano a otra. Sonríe al interactuar, pero no ríe a carcajadas, y sigue con la mirada los objetos. Se alimenta con lactancia materna exclusiva.',
      question: '¿Cuál es su diagnóstico respecto al desarrollo psicomotor?',
      options: [
        { letter: 'A', text: 'Retraso motor fino' },
        { letter: 'B', text: 'Retraso motor grueso' },
        { letter: 'C', text: 'Retraso del desarrollo socioemocional' },
        { letter: 'D', text: 'Retraso global del desarrollo' },
        { letter: 'E', text: 'Desarrollo psicomotor normal' },
      ],
      correct: 'E',
      explanation: 'Al nacer a las 34 semanas, la edad corregida se calcula descontando 6 semanas desde las 40: este lactante de 4 meses tiene una edad corregida de 2,5 meses. Cumple exactamente los hitos de los 2 meses (sostén cefálico, manos al centro, sonrisa social) y todavía no alcanza los de los 4 meses, lo que es normal.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Lactante de cuatro meses, nacido prematuro a las treinta y cuatro semanas. Levanta la cabeza y lleva las manos al centro, pero no levanta el tronco apoyado en los antebrazos ni pasa objetos entre sus manos. Sonríe, pero no ríe a carcajadas, y sigue con la mirada.',
        question: '¿Cuál es su diagnóstico respecto al desarrollo psicomotor?',
        options: 'Las opciones: retraso motor fino, retraso motor grueso, retraso socioemocional, retraso global, o desarrollo normal. Piénsalo.',
        answer: 'Es la E, normal. Usa la edad corregida: nació con seis semanas de adelanto, así que su edad corregida es de dos meses y medio. Y lo que hace calza exactamente con los dos meses: sostén cefálico, manos al centro, sonrisa social. Si lo juzgaras por su edad de nacimiento, caerías en la trampa de decir que está atrasado.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2015 · Pregunta 78",
      "stem": "Un niño de 5 años presenta movimientos repetitivos con las manos, estereotipados (manierismos), no habla y solo se comunica con señas, no se relaciona con otros niños y llora cuando le quitan el sombrero.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Trastorno generalizado del desarrollo"
        },
        {
          "letter": "B",
          "text": "Trastorno por déficit atencional"
        },
        {
          "letter": "C",
          "text": "Trastorno de conducta"
        },
        {
          "letter": "D",
          "text": "Hipotiroidismo congénito"
        },
        {
          "letter": "E",
          "text": "Epilepsia generalizada"
        }
      ],
      "correct": "A",
      "explanation": "Estereotipias, ausencia de lenguaje, falta de interacción social y rigidez ante cambios configuran un trastorno del espectro autista, que antes se clasificaba dentro de los trastornos generalizados del desarrollo.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil quince. Un niño de cinco años tiene movimientos repetitivos y estereotipados de las manos, no habla y solo se comunica con señas, no se relaciona con otros niños, y llora cuando le quitan el sombrero.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: trastorno generalizado del desarrollo, déficit atencional, trastorno de conducta, hipotiroidismo congénito, o epilepsia generalizada. Piénsalo.",
        "answer": "Es la A. Estereotipias, falta de lenguaje, mala interacción social y rigidez frente a los cambios son el espectro autista, que antes se llamaba trastorno generalizado del desarrollo. El déficit atencional tienta, pero no explica la ausencia de lenguaje ni la rigidez."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 5.01.3.003 · Desarrollo cognitivo, afectivo y social a lo largo del ciclo vital",
      "stem": "Niña de 4 años, con desarrollo normal. Su madre cuenta que cree que la luna la sigue cuando van en auto, que sus muñecas sienten frío y que, si ella cierra los ojos, nadie puede verla.",
      "question": "Según Piaget, ¿en qué etapa del desarrollo cognitivo se encuentra?",
      "options": [
        {
          "letter": "A",
          "text": "Sensoriomotora"
        },
        {
          "letter": "B",
          "text": "Operaciones concretas"
        },
        {
          "letter": "C",
          "text": "Preoperacional"
        },
        {
          "letter": "D",
          "text": "Operaciones formales"
        },
        {
          "letter": "E",
          "text": "Latencia"
        }
      ],
      "correct": "C",
      "explanation": "La etapa preoperacional de Piaget, aproximadamente de 2 a 7 años, se caracteriza por pensamiento simbólico, egocentrismo, animismo (atribuir vida a objetos) y pensamiento mágico, sin lógica de conservación. La sensoriomotora va de 0 a 2 años, las operaciones concretas de 7 a 11 y las formales desde los 12. La latencia es una etapa de Freud.",
      "say": {
        "stem": "Niña de cuatro años que cree que la luna la sigue, que sus muñecas sienten frío y que si cierra los ojos nadie la ve.",
        "question": "¿En qué etapa de Piaget está?",
        "options": "Las opciones: sensoriomotora, operaciones concretas, preoperacional, operaciones formales o latencia. Piénsalo.",
        "answer": "Es la C. Egocentrismo, animismo y pensamiento mágico son la etapa preoperacional, de los dos a los siete años. La latencia tienta por la edad escolar, pero es una etapa de Freud, no de Piaget."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2019 · Pregunta 159",
      "stem": "Un niño de 18 meses de edad, con antecedente de haber nacido prematuro de 32 semanas, camina en punta de pies. Logró la marcha independiente hace un mes. Al examen físico tiene aumento del tono muscular de las extremidades inferiores, con hiperreflexia y signo de Babinski.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Estereotipia de la marcha"
        },
        {
          "letter": "B",
          "text": "Retraso del desarrollo psicomotor"
        },
        {
          "letter": "C",
          "text": "Diplejía espástica"
        },
        {
          "letter": "D",
          "text": "Polineuropatía"
        },
        {
          "letter": "E",
          "text": "Distrofia muscular"
        }
      ],
      "correct": "C",
      "explanation": "Un exprematuro con hipertonía, hiperreflexia y Babinski predominantes en extremidades inferiores, con marcha en punta de pies, tiene una parálisis cerebral de tipo diplejía espástica, típica de la leucomalacia periventricular del prematuro. La marcha en punta aislada puede ser normal antes de los 3 años, pero no con signos de primera motoneurona. Las polineuropatías y distrofias dan hiporreflexia.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil diecinueve. Un niño de dieciocho meses, nacido prematuro de treinta y dos semanas, camina en punta de pies, con hipertonía de las piernas, hiperreflexia y Babinski.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: estereotipia de la marcha, retraso del desarrollo, diplejía espástica, polineuropatía o distrofia muscular. Piénsalo.",
        "answer": "Es la C. Un exprematuro con espasticidad e hiperreflexia en las piernas tiene una diplejía espástica, una forma de parálisis cerebral. La distrofia muscular tienta por la marcha en punta de pies, pero cursa con reflejos disminuidos y sin Babinski."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.1.084 · Síndrome hipotónico",
      "stem": "Un lactante de 4 meses es traído porque no sostiene la cabeza. Al examen está alerta y sigue con la mirada, pero tiene hipotonía generalizada marcada, con postura en batracio, arreflexia osteotendínea, respiración paradojal abdominal y fasciculaciones de la lengua.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Atrofia muscular espinal"
        },
        {
          "letter": "B",
          "text": "Síndrome de Down"
        },
        {
          "letter": "C",
          "text": "Hipotiroidismo congénito"
        },
        {
          "letter": "D",
          "text": "Parálisis cerebral hipotónica"
        },
        {
          "letter": "E",
          "text": "Síndrome de Prader-Willi"
        }
      ],
      "correct": "A",
      "explanation": "Hipotonía con debilidad marcada, arreflexia y fasciculaciones linguales, en un lactante alerta y con buena conexión, indica hipotonía periférica por compromiso de la segunda motoneurona: atrofia muscular espinal tipo 1. La hipotonía central (Down, Prader-Willi, parálisis cerebral, hipotiroidismo) conserva o aumenta los reflejos y suele asociar compromiso de conciencia o del desarrollo cognitivo.",
      "say": {
        "stem": "Un lactante de cuatro meses alerta no sostiene la cabeza. Tiene hipotonía marcada, arreflexia, respiración paradojal y fasciculaciones en la lengua.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: atrofia muscular espinal, síndrome de Down, hipotiroidismo congénito, parálisis cerebral hipotónica o Prader-Willi. Piénsalo.",
        "answer": "Es la A. Hipotonía con arreflexia y fasciculaciones en un lactante alerta es una hipotonía periférica, típica de la atrofia muscular espinal. El síndrome de Down tienta porque es la hipotonía más común, pero es central y conserva los reflejos."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.1.086 · Trastornos del lenguaje",
      "stem": "Un niño de 2 años es traído porque solo dice 2 palabras. Comprende instrucciones simples cuando lo miran, mantiene contacto visual, juega de forma simbólica y señala lo que quiere. Tuvo varias otitis medias el último año. Su examen físico y el resto del desarrollo son normales.",
      "question": "¿Cuál es el primer examen a solicitar?",
      "options": [
        {
          "letter": "A",
          "text": "Resonancia magnética cerebral"
        },
        {
          "letter": "B",
          "text": "Cariograma"
        },
        {
          "letter": "C",
          "text": "Electroencefalograma"
        },
        {
          "letter": "D",
          "text": "Evaluación auditiva (audiometría o potenciales evocados auditivos)"
        },
        {
          "letter": "E",
          "text": "Test de detección de autismo como único estudio"
        }
      ],
      "correct": "D",
      "explanation": "A los 2 años se espera un vocabulario de unas 50 palabras y frases de 2 palabras. Ante todo retraso del lenguaje, el primer paso es descartar hipoacusia con una evaluación auditiva objetiva, más aún con otitis a repetición (otitis media con efusión). La buena interacción social y el juego simbólico hacen menos probable un trastorno del espectro autista.",
      "say": {
        "stem": "Un niño de dos años solo dice dos palabras, pero mira a los ojos, juega simbólicamente y señala. Tuvo varias otitis el último año.",
        "question": "¿Cuál es el primer examen a solicitar?",
        "options": "Las opciones: resonancia cerebral, cariograma, electroencefalograma, evaluación auditiva o solo un test de autismo. Piénsalo.",
        "answer": "Es la D. Ante cualquier retraso del lenguaje primero se descarta una hipoacusia, sobre todo con otitis repetidas. El test de autismo tienta, pero este niño tiene buena interacción social y juego simbólico."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.3.019 · Supervisión de salud- pre-escolar",
      "stem": "Un niño de 3 años acude a su control de salud en atención primaria. Corresponde evaluar su desarrollo psicomotor con un instrumento estandarizado.",
      "question": "¿Qué instrumento corresponde aplicar a esta edad?",
      "options": [
        {
          "letter": "A",
          "text": "EEDP (Escala de Evaluación del Desarrollo Psicomotor)"
        },
        {
          "letter": "B",
          "text": "TEPSI (Test de Desarrollo Psicomotor)"
        },
        {
          "letter": "C",
          "text": "Test de Denver como único instrumento obligatorio"
        },
        {
          "letter": "D",
          "text": "Escala de Wechsler"
        },
        {
          "letter": "E",
          "text": "Score de Apgar"
        }
      ],
      "correct": "B",
      "explanation": "En Chile, el desarrollo psicomotor se evalúa con EEDP entre los 0 y 2 años (en controles de 8 y 18 meses) y con TEPSI entre los 2 y 5 años (en el control de 3 años), que evalúa coordinación, lenguaje y motricidad. Un resultado de riesgo o retraso requiere estimulación y reevaluación o derivación.",
      "say": {
        "stem": "Un niño de tres años viene a su control y corresponde evaluar su desarrollo psicomotor con un instrumento estandarizado.",
        "question": "¿Qué instrumento corresponde?",
        "options": "Las opciones: EEDP, TEPSI, Denver, Wechsler o Apgar. Piénsalo.",
        "answer": "Es la B. Entre los dos y cinco años se usa el TEPSI. El EEDP tienta porque también evalúa el desarrollo, pero se aplica de cero a dos años."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.03.1.033 · Trastornos de habla y lenguaje",
      "stem": "Niño de 2 años y medio en control sano. Su madre refiere que dice solo 8 palabras aisladas y no combina 2 palabras. Comprende órdenes simples, mira a los ojos, juega con otros niños e imita. El examen físico es normal y no tiene antecedentes perinatales relevantes.",
      "question": "¿Cuál es la conducta inicial más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Tranquilizar y controlar a los 4 años"
        },
        {
          "letter": "B",
          "text": "Electroencefalograma"
        },
        {
          "letter": "C",
          "text": "Resonancia magnética cerebral"
        },
        {
          "letter": "D",
          "text": "Evaluación auditiva (descartar hipoacusia) y derivación a fonoaudiología"
        },
        {
          "letter": "E",
          "text": "Iniciar metilfenidato"
        }
      ],
      "correct": "D",
      "explanation": "A los 2 años se esperan al menos 50 palabras y frases de 2 palabras. Un retraso del lenguaje expresivo requiere primero descartar hipoacusia con evaluación auditiva objetiva (potenciales evocados o audiometría según edad), además de evaluar desarrollo global y signos de trastorno del espectro autista, y derivar a fonoaudiología para estimulación precoz.",
      "say": {
        "stem": "Niño de dos años y medio que dice solo ocho palabras y no las combina, pero comprende órdenes, mira a los ojos y juega con otros niños.",
        "question": "¿Cuál es la conducta inicial?",
        "options": "Las opciones: tranquilizar y controlar a los cuatro años, electroencefalograma, resonancia cerebral, evaluar audición y derivar a fonoaudiología o metilfenidato. Piénsalo.",
        "answer": "Es la D. Ante un retraso del lenguaje siempre se descarta primero una hipoacusia y se deriva a fonoaudiología. Tranquilizar y esperar tienta porque hay niños que hablan tarde, pero se pierde la ventana para estimular."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.03.3.002 · Pesquisa de trastornos del lenguaje",
      "stem": "En el control sano de los 18 meses se evalúa el lenguaje de un niño. Su madre dice que no dice ninguna palabra con significado, aunque balbucea.",
      "question": "¿Cuál es la interpretación más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Normal; a los 18 meses aún no se espera ninguna palabra"
        },
        {
          "letter": "B",
          "text": "Señal de alerta: a los 18 meses se esperan al menos varias palabras con significado; requiere evaluación auditiva, del desarrollo (incluida pesquisa de autismo) y derivación a fonoaudiología"
        },
        {
          "letter": "C",
          "text": "Normal si es varón"
        },
        {
          "letter": "D",
          "text": "Esperar hasta los 3 años para evaluar"
        },
        {
          "letter": "E",
          "text": "Indicar que la madre le hable en un solo idioma y controlar a los 4 años"
        }
      ],
      "correct": "B",
      "explanation": "Son señales de alerta: no balbucear a los 12 meses, no decir palabras a los 16 a 18 meses, no combinar 2 palabras a los 24 meses o cualquier pérdida de lenguaje. Ante ellas se descarta hipoacusia, se pesquisa trastorno del espectro autista (M-CHAT) y se deriva a fonoaudiología. En Chile se pesquisa con EEDP y TEPSI.",
      "say": {
        "stem": "En el control de los dieciocho meses, un niño que balbucea pero no dice ninguna palabra con significado.",
        "question": "¿Cuál es la interpretación más adecuada?",
        "options": "Las opciones: normal para la edad, señal de alerta que requiere evaluación auditiva, del desarrollo y fonoaudiología, normal si es varón, esperar a los tres años, o hablarle en un idioma y controlar. Piénsalo.",
        "answer": "Es la B. No decir palabras a los dieciocho meses es una señal de alerta, y se evalúa audición, desarrollo y autismo, y se deriva a fonoaudiología. Considerarlo normal en varones tienta por la creencia popular, pero no justifica esperar."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Los instrumentos', tag: 'EEDP y TEPSI', kind: 'key', items: [
          { t: 'EEDP: 8 y 18 meses', d: 'TEPSI: 3 años',
            say: 'Cerremos con las reglas de oro. La EEDP se aplica de forma obligatoria a los ocho y a los dieciocho meses; el TEPSI, a los tres años.' },
          { t: 'Ochenta y cinco o más', d: 'Bajo setenta es retraso',
            say: 'Ochenta y cinco puntos o más es normal, y bajo setenta ya es retraso, con derivación inmediata.' },
        ] },
        { title: 'La bandera roja principal', tag: 'La marcha', kind: 'alert', items: [
          { t: 'Dieciocho meses: el límite', d: 'Nunca es una variante normal',
            say: 'No caminar a los dieciocho meses nunca es una variante normal: es el límite absoluto.' },
          { t: 'La regresión, siempre alarma', d: 'Perder lo ya logrado',
            say: 'Y la regresión, perder una habilidad ya lograda, siempre es alarma máxima.' },
        ] },
        { title: 'El detalle del prematuro', tag: 'Edad corregida', kind: 'normal', items: [
          { t: 'Se corrige hasta los 2 años', d: 'Restando las semanas que faltaron',
            say: 'Y no olvides al prematuro: se evalúa con edad corregida hasta los dos años. Si te llevas una sola idea de hoy: hay una edad esperada y una edad límite para cada hito, y entre ambas está tu margen de tranquilidad. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Desarrollo psicomotor: hito esperado versus bandera roja',
    root: N('start', 'Lactante en control de salud', 'Evaluación del desarrollo psicomotor',
      'Tienes un lactante en control y necesitas decidir si su desarrollo va bien. El primer paso es siempre el mismo: corregir la edad si nació prematuro.',
      ['', N('q', '¿Nació prematuro?', 'Antes de las 37 semanas',
        'Pregúntate si nació antes de las treinta y siete semanas.',
        ['Sí, y tiene menos de 2 años', N('do', 'Calcular edad corregida', 'Descontar las semanas que faltaron',
          'Descuenta desde las cuarenta semanas las que le faltaron al nacer, y evalúa los hitos con esa edad corregida, no con la cronológica.')],
        ['No, o ya tiene más de 2 años', N('q', '¿Cumple los hitos esperados?', 'Según su edad',
          'Compara lo que hace con lo esperado para su edad, cronológica o corregida.',
          ['Sí, todos presentes', N('ok', 'Desarrollo normal', 'Control de salud habitual',
            'Si cumple los hitos esperados, el desarrollo es normal: sigue su calendario de controles habitual.')],
          ['Falta un hito, sin regresión', N('q', '¿Está dentro de la EEDP o el TEPSI?', 'Según la edad',
            'Si falta un hito, aplica el instrumento correspondiente a su edad, la EEDP o el TEPSI, y mira el puntaje.',
            ['Setenta a ochenta y cuatro', N('refer', 'Riesgo', 'Sala de estimulación y reevaluar',
              'Riesgo: derivas a sala de estimulación y reevalúas en el plazo que indica la norma.')],
            ['Menos de setenta', N('alert', 'Retraso', 'Evaluación médica y derivación',
              'Retraso: evaluación médica inmediata y derivación a pediatría o neurología infantil.')])],
          ['Perdió una habilidad ya lograda', N('alert', 'Regresión', 'Estudio neurológico urgente',
            'La regresión nunca espera al próximo control: siempre exige estudio neurológico urgente, sin importar la edad.')])])]),
  },
};
