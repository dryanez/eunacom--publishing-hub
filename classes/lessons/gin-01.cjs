// Clase 20.1 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_ginecologia.cjs (gin-01).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gin-01',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'El eje que regula el ciclo, y el algoritmo escalonado para estudiar la amenorrea',
      say: 'Bienvenidos. Empezamos el bloque de endocrinología ginecológica con la fisiología del ciclo menstrual y el estudio de la amenorrea, uno de los temas de mayor rentabilidad del examen. La buena noticia es que casi todo se resuelve con un solo hábito: seguir el estudio paso a paso, sin saltarte ninguno. Primero vemos el mecanismo del ciclo, porque te va a explicar cada paso del algoritmo. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiología',
      title: 'El ciclo en tres actos',
      nodes: [
        { id: 'fol', col: 0, row: 2, k: 'start', t: 'Fase folicular', s: 'La FSH recluta folículos' },
        { id: 'dom', col: 1, row: 2, k: 'mech', t: 'Folículo dominante', s: 'Produce estradiol creciente' },
        { id: 'lh', col: 2, row: 2, k: 'mech', t: 'Pico de LH', s: 'Feedback positivo del estradiol' },
        { id: 'ovu', col: 3, row: 1, k: 'effect', t: 'Ovulación', s: 'Treinta y seis horas después' },
        { id: 'lut', col: 3, row: 3, k: 'mech', t: 'Cuerpo lúteo', s: 'Secreta progesterona' },
        { id: 'men', col: 4, row: 3, k: 'effect', t: 'Menstruación', s: 'Si no hay embarazo' },
      ],
      edges: [
        { from: 'fol', to: 'dom' }, { from: 'dom', to: 'lh' }, { from: 'lh', to: 'ovu' },
        { from: 'lh', to: 'lut' }, { from: 'lut', to: 'men' },
      ],
      steps: [
        { show: ['fol'], note: 'Teoría de las dos células',
          say: 'Partamos por el mecanismo, porque te va a explicar todo el algoritmo que viene. En la fase folicular, la secreción pulsátil de GnRH estimula la FSH, que recluta una cohorte de folículos. Aquí funciona la teoría de las dos células: la teca produce andrógenos por estímulo de la LH, y la granulosa los aromatiza a estrógenos por estímulo de la FSH.' },
        { show: ['dom'], note: 'Estradiol creciente',
          say: 'De esa cohorte se selecciona un folículo dominante, que produce cantidades crecientes de estradiol y hace proliferar el endometrio.' },
        { show: ['lh'], note: 'Umbral crítico de estradiol',
          say: 'Cuando el estradiol supera un umbral crítico, sobre doscientos picogramos por mililitro sostenido más de cuarenta y ocho horas, pasa algo contraintuitivo: en vez de frenar a la hipófisis, la estimula. Es un feedback positivo, y dispara el pico masivo de LH.' },
        { show: ['ovu'], note: 'Ese pico es el gatillo de la ovulación',
          say: 'Ese pico de LH es el gatillo: la ovulación ocurre treinta y seis horas después de que empieza el pico.' },
        { show: ['lut'], note: 'El folículo colapsado se transforma',
          say: 'El folículo que quedó vacío se transforma en cuerpo lúteo bajo la LH, y secreta grandes cantidades de progesterona, que transforma el endometrio en fase secretora, lista para recibir un embarazo.' },
        { show: ['men'], note: 'Sin fecundación, el eje se apaga',
          say: 'Si no hay fecundación, el cuerpo lúteo degenera a los catorce días, caen de golpe el estrógeno y la progesterona, y esa caída hormonal es la que produce la descamación del endometrio: la menstruación. Mira este esquema del ciclo de veintiocho días: arriba las hormonas, abajo el endometrio, y todo calza con el pico de LH. Guarda esta idea, porque cada paso del algoritmo de amenorrea que viene pregunta por uno de estos eslabones.',
          photo: { src: 'biblioteca/13_ginecologia/gin-01/S1_ciclo-menstrual__propio.svg', label: 'Ciclo de veintiocho días', at: 'Mira este esquema del ciclo', credit: 'Dibujo propio (esquema)' } },
      ],
    },

    {
      type: 'points',
      kicker: 'Pubertad normal',
      title: 'Cuándo empieza y cuándo es anormal',
      cards: [
        { title: 'Secuencia normal', tag: 'Reactivación de la GnRH', kind: 'key', items: [
          { t: 'Telarquia entre 8 y 13 años', d: 'Primer signo: botón mamario, Tanner M2',
            say: 'Antes de estudiar la amenorrea tienes que saber qué es normal. La pubertad en la mujer parte por la reactivación de los pulsos de GnRH, con más LH, FSH y estradiol. Y el primer signo es la telarquia, el botón mamario, entre los ocho y los trece años, en la etapa dos de Tanner. Ojo: puede ser unilateral y sensible al inicio, y eso es normal.' },
          { t: 'El estirón va antes de la menarquia', d: 'Pico de crecimiento en Tanner M3',
            say: 'Después vienen la pubarquia y el estirón puberal, que tiene su pico de velocidad en la etapa tres de Tanner, antes de la primera regla. La menarquia llega a los doce o trece años, en Chile en promedio a los doce años y medio, dos a dos años y medio después de la telarquia.' },
          { t: 'Primeros ciclos irregulares', d: 'Anovulatorios hasta 2-3 años posmenarquia',
            say: 'Y los primeros ciclos suelen ser anovulatorios e irregulares hasta dos o tres años después de la menarquia. No requieren estudio si no pasan de noventa días ni son muy abundantes. Esa es la trampa de la adolescente con ciclos irregulares: se controla con calendario.' },
        ] },
        { title: 'Fuera de rango', tag: 'Derivar a endocrinología', kind: 'alert', items: [
          { t: 'Pubertad precoz', d: 'Telarquia o pubarquia antes de los 8 años',
            say: 'Si la telarquia o la pubarquia aparecen antes de los ocho años, es pubertad precoz: se sospecha y se deriva a endocrinología, que pedirá edad ósea, LH y FSH, y resonancia si es de origen central.' },
          { t: 'Retraso puberal', d: 'Sin telarquia a los 13 años, o más de 5 años hasta la menarquia',
            say: 'Y el retraso puberal es la ausencia de telarquia a los trece años o más, o más de cinco años entre la telarquia y la menarquia. Es el mismo umbral de la amenorrea primaria sin caracteres sexuales secundarios.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Amenorrea primaria',
      title: 'Sin útero: mira el cariotipo y el vello',
      cards: [
        { title: 'Cariotipo cuarenta y seis XX', tag: 'Síndrome de Rokitansky', kind: 'key', items: [
          { t: 'Vagina en fondo ciego', d: 'Útero y dos tercios superiores de vagina ausentes',
            say: 'Empecemos por la amenorrea primaria con útero ausente, porque el examen la separa por el cariotipo. Con cariotipo cuarenta y seis XX está el síndrome de Rokitansky, o agenesia mülleriana: hay agenesia congénita del útero y de los dos tercios superiores de la vagina, que termina en un fondo ciego.' },
          { t: 'Ovarios normales, mamas y vello normales', d: 'Fértil por sus propios ovocitos',
            say: 'Y fíjate en el resto del examen: los ovarios funcionan normal, así que las mamas y el vello púbico se desarrollan con normalidad. La paciente es biológicamente fértil por fertilización in vitro con maternidad subrogada, aunque nunca va a menstruar.' },
        ] },
        { title: 'Cariotipo cuarenta y seis XY', tag: 'Síndrome de Morris', kind: 'alert', items: [
          { t: 'Mamas sí, vello púbico no', d: 'Insensibilidad al receptor de andrógenos',
            say: 'El otro grupo, con útero ausente, tiene cariotipo cuarenta y seis XY: es el síndrome de Morris, o insensibilidad completa a los andrógenos. La testosterona se aromatiza en la periferia a estrógenos, así que las mamas se desarrollan bien. Pero como el receptor de andrógenos no funciona, no hay vello púbico ni axilar. Ese contraste, mamas sí y vello no, es la pista que el examen usa para separarlo de Rokitansky.' },
          { t: 'Testículos intraabdominales', d: 'Se extirpan después de la pubertad',
            say: 'Los testículos quedan intraabdominales o inguinales, y hay que extirparlos una vez completada la pubertad, por el riesgo de gonadoblastoma.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Amenorrea primaria',
      title: 'Con útero: la FSH separa el origen',
      cards: [
        { title: 'FSH elevada', tag: 'Falla ovárica', kind: 'alert', items: [
          { t: 'Síndrome de Turner', d: 'Cuarenta y cinco X0, talla baja, cuello alado',
            say: 'Cuando el útero está presente, la FSH te dice dónde está el problema. Si la FSH está elevada, sobre treinta a cuarenta unidades por litro, con el estradiol bajo, es que el ovario no responde: falla ovárica. El ejemplo clásico es el síndrome de Turner, cariotipo cuarenta y cinco equis cero, con talla baja y coartación aórtica. Mira a esta lactante: el pliegue de piel a los lados del cuello es el cuello alado.',
            photo: { src: 'biblioteca/13_ginecologia/gin-01/02_turner-cuello-alado__zitelli_p37.jpg', label: 'Cuello alado en Turner', at: 'Mira a esta lactante', credit: "Zitelli & Davis' Atlas of Pediatric Physical Diagnosis, p. 37" } },
          { t: 'Disgenesia gonadal pura', d: 'Síndrome de Swyer, cuarenta y seis XY',
            say: 'Y la disgenesia gonadal pura, el síndrome de Swyer, con cariotipo cuarenta y seis XY, sin desarrollo mamario y con gónadas en cintilla de alto riesgo tumoral.' },
        ] },
        { title: 'FSH baja', tag: 'Falla central', kind: 'key', items: [
          { t: 'Síndrome de Kallmann', d: 'Hipogonadismo hipogonadotropo más anosmia',
            say: 'Si en cambio la FSH está baja o normal, con estradiol bajo, es un hipogonadismo hipogonadotropo: el problema está arriba, en el hipotálamo o la hipófisis. El caso que se pregunta siempre es el síndrome de Kallmann: falla en la migración de las neuronas de GnRH, que se asocia a anosmia o hiposmia. Amenorrea primaria más pérdida del olfato es Kallmann, sin necesidad de pensar en nada más.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Diferencial de amenorrea primaria',
      title: 'Cuatro síndromes, un cuadro',
      head: ['Síndrome', 'Cariotipo', 'Útero', 'Hallazgo clave'],
      rows: [
        { cells: ['Rokitansky', '46, XX', 'Ausente', 'Mamas y vello normales'],
          say: 'Repasemos en una tabla. Rokitansky, cuarenta y seis XX, sin útero, con mamas y vello normales.' },
        { cells: ['Morris', '46, XY', 'Ausente', 'Mamas sí, vello no'],
          say: 'Morris, cuarenta y seis XY, también sin útero, pero con mamas sí y vello no. Esa es toda la diferencia que necesitas para separarlos.' },
        { cells: ['Turner', '45, X0', 'Presente, pequeño', 'Talla baja, cuello alado'],
          say: 'Turner, cuarenta y cinco equis cero, con útero presente pero pequeño, talla baja y cuello alado.' },
        { cells: ['Kallmann', '46, XX o XY', 'Presente', 'Anosmia'],
          say: 'Kallmann, con útero presente y la pista es la anosmia.' },
        { cells: ['Himen imperforado', '46, XX', 'Presente', 'Dolor cíclico, sin sangrado'],
          say: 'Y el himen imperforado, con útero presente: da dolor pélvico cíclico que va creciendo, pero sin sangrado visible, porque la sangre se acumula detrás del himen.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Amenorrea secundaria',
      title: 'El algoritmo escalonado',
      nodes: [
        { id: 'ini', col: 0, row: 2, k: 'start', t: 'Amenorrea secundaria', s: 'Tres meses sin regla' },
        { id: 'hcg', col: 1, row: 2, k: 'q', t: 'Beta hCG', s: 'El primer examen, siempre' },
        { id: 'emb', col: 2, row: 0, k: 'good', t: 'Positiva: embarazo', s: 'La causa más frecuente' },
        { id: 'tshprl', col: 2, row: 2, k: 'mech', t: 'TSH y prolactina', s: 'Tiroides y prolactinoma' },
        { id: 'prog', col: 3, row: 2, k: 'q', t: 'Test de progesterona', s: 'Medroxiprogesterona unos días' },
        { id: 'anov', col: 4, row: 1, k: 'effect', t: 'Sangra: anovulación', s: 'Hay estrógenos, sin ovulación' },
        { id: 'central', col: 4, row: 3, k: 'trap', t: 'No sangra: sigue el estudio', s: 'Estrógeno y progesterona, luego FSH' },
      ],
      edges: [
        { from: 'ini', to: 'hcg' }, { from: 'hcg', to: 'emb', label: 'positiva' }, { from: 'hcg', to: 'tshprl', label: 'negativa' },
        { from: 'tshprl', to: 'prog' }, { from: 'prog', to: 'anov', label: 'sangra' }, { from: 'prog', to: 'central', label: 'no sangra' },
      ],
      steps: [
        { show: ['ini'], note: 'Tres meses, o seis si ya era irregular',
          say: 'Ahora el algoritmo que más se pregunta: la amenorrea secundaria, que se define como ausencia de menstruación por tres meses o más en una mujer con ciclos previos regulares, o por seis meses si ya era oligomenorreica. Y la regla de oro es esta: el estudio es escalonado, y nunca te saltas un paso.' },
        { show: ['hcg'], note: 'Nunca se salta',
          say: 'El primer examen, siempre, sin excepción, es la beta hCG. Es la causa más común de amenorrea secundaria en el mundo, y saltártela es el error que el examen más castiga.' },
        { show: ['emb'], note: 'Si es positiva, ahí termina el estudio',
          say: 'Si es positiva, ahí termina el estudio: es un embarazo, y lo que sigue es el control prenatal.' },
        { show: ['tshprl'], note: 'Por qué estas dos hormonas',
          say: 'Si es negativa, el paso dos es TSH y prolactina. El hipotiroidismo eleva la TRH, que a su vez estimula la prolactina; y la hiperprolactinemia por sí sola frena los pulsos de GnRH y también da galactorrea.' },
        { show: ['prog'], note: 'Una prueba farmacológica, no solo un examen',
          say: 'El paso tres es el test de progesterona: se da medroxiprogesterona oral por varios días y se observa si la paciente sangra al suspenderla.' },
        { show: ['anov'], note: 'El diagnóstico más frecuente de este resultado',
          say: 'Si sangra, el mensaje es claro: el endometrio ya estaba proliferado por estrógenos propios, pero la paciente no está ovulando. Es anovulación, y su causa más frecuente es el ovario poliquístico, que vemos en la próxima clase.' },
        { show: ['central'], note: 'Anatómico versus hormonal',
          say: 'Si no sangra, todavía no tienes el diagnóstico: falta separar un problema anatómico de uno hormonal. El paso siguiente es dar estrógeno más progesterona; si tampoco sangra, sospechas Asherman, una obstrucción del útero. Y si sí sangra, pides FSH y LH: si están altas, es falla ovárica; si están bajas o normales, es una falla hipotalámica o hipofisiaria.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Hiperprolactinemia',
      title: 'Causas y cómo se estudia',
      cards: [
        { title: 'Causas', tag: 'Descarta lo secundario primero', kind: 'key', items: [
          { t: 'Embarazo, lactancia y estrés', d: 'Causas fisiológicas',
            say: 'La prolactina inhibe los pulsos de GnRH, y por eso da amenorrea, oligomenorrea e infertilidad, además de galactorrea. Antes de pensar en tumor, descarta lo fisiológico: embarazo, lactancia, estrés y la estimulación mamaria.' },
          { t: 'Fármacos', d: 'Antipsicóticos, metoclopramida, metildopa, ISRS, verapamilo, estrógenos',
            say: 'Después los fármacos: antipsicóticos, metoclopramida, metildopa, inhibidores de la recaptación de serotonina, verapamilo y los anticonceptivos con estrógenos.' },
          { t: 'Hipotiroidismo e insuficiencia renal', d: 'Además del prolactinoma',
            say: 'Luego las enfermedades: el hipotiroidismo primario y la insuficiencia renal crónica. Y recién al final el prolactinoma, que es el adenoma hipofisario más frecuente.' },
        ] },
        { title: 'Estudio', tag: 'Prolactina, hCG y TSH', kind: 'criteria', items: [
          { t: 'Prolactina en reposo', d: 'Idealmente en ayunas, sin examen mamario previo',
            say: 'El estudio parte con prolactina en reposo, idealmente en ayunas y sin examen mamario previo, más la beta hCG y la TSH, y descartando fármacos. Si sale levemente elevada, repítela y descarta macroprolactinemia.' },
          { t: 'La cifra orienta', d: 'Más de 100 sugiere prolactinoma; más de 200, macroadenoma',
            say: 'La cifra orienta: una prolactina sobre cien nanogramos por mililitro sugiere un prolactinoma, y sobre doscientos, un macroadenoma, de más de diez milímetros, casi seguro. Con cifras bajas piensa en fármacos o en efecto tallo.' },
          { t: 'Confirmada: resonancia de silla turca', d: 'Y campos visuales si es macroadenoma',
            say: 'Si se confirma, se pide resonancia de silla turca, y campos visuales ante un macroadenoma. Mira esta resonancia: el tumor grande que ocupa y sobrepasa la silla turca. Por eso se busca la hemianopsia bitemporal.',
            photo: { src: 'biblioteca/13_ginecologia/gin-01/01_macroprolactinoma-rm__amir-endocrino_p24.jpg', label: 'Macroprolactinoma (RM)', at: 'Mira esta resonancia', credit: 'Manual AMIR Endocrinología, p. 24' } },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Cada causa, su manejo',
      cards: [
        { title: 'Hiperprolactinemia', tag: 'Agonista dopaminérgico', kind: 'pharma', items: [
          { t: 'Cabergolina', d: '0,25 a 0,5 mg, una o dos veces por semana',
            say: 'Veamos el tratamiento de cada causa. La hiperprolactinemia y el prolactinoma se tratan con un agonista dopaminérgico, la cabergolina, que normaliza la prolactina, hace regresar el tumor y restablece los ciclos y la fertilidad. La bromocriptina es la alternativa, y la cirugía transesfenoidal se reserva para la resistencia o la intolerancia.' },
        ] },
        { title: 'Amenorrea hipotalámica funcional', tag: 'No farmacológico primero', kind: 'normal', items: [
          { t: 'Recuperar peso y bajar el ejercicio', d: 'Estrés, anorexia, deportistas de alto rendimiento',
            say: 'La amenorrea hipotalámica funcional, típica del estrés crónico, la anorexia o el ejercicio extenuante, se trata recuperando peso y reduciendo el gasto energético, para reactivar los pulsos naturales de GnRH. No se empieza con fármacos.' },
        ] },
        { title: 'Síndrome de Asherman', tag: 'Histeroscopía', kind: 'key', items: [
          { t: 'Lisis de sinequias', d: 'Sonda y estrógenos para restaurar la cavidad',
            say: 'Y el síndrome de Asherman, casi siempre después de un legrado, se trata con histeroscopía, liberando las sinequias uterinas y usando después una sonda con estrógenos a dosis altas para restaurar la cavidad.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Alarmas',
      title: 'Lo que no puedes dejar pasar',
      cards: [
        { title: 'Macroprolactinoma', tag: 'Compresión del quiasma', kind: 'alert', items: [
          { t: 'Hemianopsia bitemporal', d: 'Resonancia urgente más cabergolina',
            say: 'Tres alarmas que el examen espera que reconozcas. La primera: un macroprolactinoma que crece hacia arriba puede comprimir el quiasma óptico y dar hemianopsia bitemporal. Eso es una resonancia urgente y cabergolina de inmediato.' },
        ] },
        { title: 'Gónada con cromosoma Y', tag: 'Riesgo de tumor', kind: 'alert', items: [
          { t: 'Gonadectomía', d: 'Tras la pubertad en Morris, de inmediato en Swyer',
            say: 'La segunda: toda gónada disgenética con línea celular Y, como en Morris o en Swyer, tiene riesgo de gonadoblastoma. Se opera después de completar la pubertad en Morris, y de inmediato en Swyer, porque ahí no hay pubertad que esperar.' },
        ] },
        { title: 'Insuficiencia ovárica prematura', tag: 'Antes de los cuarenta años', kind: 'key', items: [
          { t: 'Terapia hormonal hasta los cincuenta', d: 'Protege hueso y corazón',
            say: 'Y la tercera: la insuficiencia ovárica prematura, antes de los cuarenta años, se acompaña de osteoporosis acelerada y riesgo cardiovascular. Por eso se indica terapia hormonal de reemplazo, obligatoria, hasta la edad promedio de la menopausia.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'El ciclo, sincronizado',
      images: [
        { src: 'animaciones/gin-01/A1_ciclo_menstrual.mp4', label: 'Veintiocho días', credit: 'Animación propia' },
      ],
      steps: [
        { note: 'Hormonas, folículo y endometrio',
          say: 'Mientras el folículo crece, sube el estradiol y el endometrio prolifera. El peak de LH dispara la ovulación el día catorce. Después el cuerpo lúteo fabrica progesterona y el endometrio se vuelve secretor.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora armemos el algoritmo completo de la amenorrea secundaria en un solo árbol, tal como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que más se confunde',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Amenorrea de cinco meses, embarazo descartado', 'TSH, prolactina y test de progesterona', 'Pedir cariotipo o ecografía de entrada'],
          say: 'Repasemos las trampas. Amenorrea con embarazo ya descartado: sigue el orden, TSH, prolactina y test de progesterona. El error es saltarse pasos y pedir cariotipo o ecografía de una vez.' },
        { cells: ['Test de progesterona positivo', 'Anovulación con estrógenos presentes', 'Confundirlo con falla ovárica'],
          say: 'Test de progesterona positivo: es anovulación con estrógenos presentes, casi siempre ovario poliquístico. No lo confundas con falla ovárica, que da un test negativo.' },
        { cells: ['Test de estrógeno y progesterona negativo, con legrado previo', 'Sospechar Asherman y confirmar con histeroscopía', 'Repetir hormonas en vez de mirar la cavidad'],
          say: 'Si el test combinado de estrógeno y progesterona no sangra, y hay antecedente de legrado, sospecha Asherman y confírmalo con histeroscopía. El error es seguir pidiendo hormonas en vez de mirar la cavidad.' },
        { cells: ['FSH muy elevada en mujer menor de cuarenta años', 'Insuficiencia ovárica prematura: terapia de reemplazo', 'Observar sin proteger hueso ni corazón'],
          say: 'FSH muy elevada antes de los cuarenta: insuficiencia ovárica prematura, con terapia de reemplazo obligatoria. El error es observar, sin proteger el hueso ni el corazón.' },
        { cells: ['Amenorrea primaria con anosmia', 'Síndrome de Kallmann', 'Pedir cariotipo pensando en Turner'],
          say: 'Amenorrea primaria con anosmia es Kallmann. El error es pensar primero en Turner y pedir cariotipo, cuando la anosmia ya te dio el diagnóstico.' },
        { cells: ['Amenorrea primaria, mamas presentes, sin vello', 'Síndrome de Morris: pedir cariotipo', 'Suponer Rokitansky sin confirmar'],
          say: 'Y amenorrea primaria con mamas presentes pero sin vello: es Morris, y se confirma con cariotipo. El error es asumir que es Rokitansky sin pedirlo, porque en Rokitansky el vello es normal.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 17 años consulta por amenorrea primaria. Al examen: desarrollo mamario Tanner V, con ausencia completa de vello axilar y púbico. La vagina termina en un fondo ciego corto y se palpan masas móviles no dolorosas en ambos conductos inguinales. Está a la espera del resultado del cariotipo.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Síndrome de Mayer-Rokitansky-Küster-Hauser' },
        { letter: 'B', text: 'Síndrome de insensibilidad completa a los andrógenos (Morris)' },
        { letter: 'C', text: 'Síndrome de Turner' },
        { letter: 'D', text: 'Síndrome de Kallmann' },
        { letter: 'E', text: 'Himen imperforado' },
      ],
      correct: 'B',
      explanation: 'Mamas desarrolladas con ausencia total de vello axilar y púbico, más masas inguinales (testículos), definen el síndrome de Morris. En Rokitansky el vello es normal; en Turner hay talla baja y mamas poco desarrolladas; en Kallmann no hay desarrollo mamario ni vello, y hay anosmia; el himen imperforado da dolor cíclico con útero presente.',
      say: {
        stem: 'Vamos con un caso. Mujer de diecisiete años con amenorrea primaria. Al examen tiene un desarrollo mamario avanzado, pero ausencia completa de vello axilar y púbico. La vagina termina en un fondo ciego corto, y se palpan masas móviles y no dolorosas en ambos conductos inguinales. El cariotipo está pendiente.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: síndrome de Rokitansky, síndrome de Morris, síndrome de Turner, síndrome de Kallmann, o himen imperforado. Piénsalo.',
        answer: 'Es la B, síndrome de Morris. El contraste que lo define es este: mamas bien desarrolladas, pero sin nada de vello púbico ni axilar. En Rokitansky el vello sería normal. Y las masas inguinales son los testículos, que confirman que estamos ante un cariotipo cuarenta y seis XY, no una falla ovárica ni una anomalía anatómica aislada.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 29',
      stem: 'Una paciente de 24 años presenta amenorrea de 7 semanas de evolución, por lo que consulta. Su examen físico muestra frecuencia cardíaca de 80 por minuto, presión arterial de 120/80 mmHg, sin alteraciones en su examen ginecológico.',
      question: '¿Cuál es el examen de elección para iniciar el estudio?',
      options: [
        { letter: 'A', text: 'Subunidad beta HCG' },
        { letter: 'B', text: 'Niveles plasmáticos de FSH' },
        { letter: 'C', text: 'Ecografía transvaginal' },
        { letter: 'D', text: 'Niveles plasmáticos de prolactina' },
        { letter: 'E', text: 'Niveles plasmáticos de TSH' },
      ],
      correct: 'A',
      explanation: 'El estudio de la amenorrea debe comenzar siempre descartando el embarazo con beta hCG, incluso si la paciente ya tuvo un test previo negativo, antes de continuar con TSH, prolactina y FSH.',
      say: {
        stem: 'Vamos con preguntas reales. Esta es del EUNACOM de julio de dos mil veinticuatro. Paciente de veinticuatro años con siete semanas sin menstruar. Su examen físico es normal.',
        question: '¿Cuál es el examen de elección para iniciar el estudio?',
        options: 'Las opciones: la beta hCG, la FSH, la ecografía transvaginal, la prolactina, o la TSH. Piénsalo.',
        answer: 'Es la A. Da igual lo que sospeches: el estudio de toda amenorrea empieza siempre por la beta hCG. Ni la FSH, ni la ecografía, ni las hormonas tiroideas o la prolactina van antes. Esta pregunta está hecha para premiar al que respeta el orden del algoritmo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 84',
      stem: 'Una paciente de 38 años, multípara de 4, con antecedente de 5 abortos que requirieron legrado, nota disminución progresiva del flujo menstrual, hasta caer en amenorrea desde hace 100 días. Su examen físico no muestra alteraciones y no utiliza métodos anticonceptivos.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Síndrome de Asherman' },
        { letter: 'B', text: 'Menopausia precoz' },
        { letter: 'C', text: 'Hiperprolactinemia' },
        { letter: 'D', text: 'Síndrome de ovario poliquístico' },
        { letter: 'E', text: 'Hipopituitarismo' },
      ],
      correct: 'A',
      explanation: 'El antecedente de legrados repetidos con disminución progresiva del flujo hasta la amenorrea es el cuadro clásico del síndrome de Asherman: las sinequias uterinas obliteran la cavidad y el endometrio deja de responder.',
      say: {
        stem: 'Esta es del mismo examen, julio de dos mil veinticuatro. Mujer de treinta y ocho años, con cuatro partos y cinco abortos que requirieron legrado, que nota cómo su regla se va haciendo cada vez más escasa hasta caer en amenorrea desde hace cien días.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: síndrome de Asherman, menopausia precoz, hiperprolactinemia, ovario poliquístico, o hipopituitarismo. Piénsalo.',
        answer: 'Es la A, síndrome de Asherman. La pista no es solo la amenorrea: es que el flujo se fue reduciendo progresivamente después de varios legrados, hasta desaparecer. Eso describe una cavidad uterina que se va cicatrizando y obliterando, no una falla hormonal. Ni la menopausia precoz ni el ovario poliquístico explican esa disminución progresiva ligada a los legrados.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 18',
      stem: 'Una paciente de 17 años consulta por amenorrea de 4 meses de evolución. Su examen físico no muestra alteraciones. Test de embarazo negativo, TSH y prolactina dentro de rangos normales. Se solicita prueba de progesterona, que resulta negativa, y prueba de estrógeno y progesterona, que resulta positiva. Además, LH y FSH están normales, en el límite bajo.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Macroadenoma hipofisiario' },
        { letter: 'B', text: 'Falla ovárica primaria' },
        { letter: 'C', text: 'Embarazo ectópico' },
        { letter: 'D', text: 'Amenorrea hipotalámica' },
        { letter: 'E', text: 'Síndrome de ovario poliquístico' },
      ],
      correct: 'D',
      explanation: 'El test de progesterona negativo descarta anovulación con estrógenos presentes; el test combinado positivo confirma que el endometrio y el tracto de salida responden; y con LH y FSH en el límite bajo, el hipogonadismo es hipogonadotrópico, es decir, de causa hipotalámica o hipofisiaria.',
      say: {
        stem: 'Esta es del EUNACOM de agosto de dos mil veintiuno. Paciente de diecisiete años con cuatro meses de amenorrea. Test de embarazo negativo, TSH y prolactina normales. Su test de progesterona sale negativo, pero el test de estrógeno más progesterona sale positivo. Y la LH y la FSH están normales, en el límite bajo.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: macroadenoma hipofisiario, falla ovárica primaria, embarazo ectópico, amenorrea hipotalámica, u ovario poliquístico. Piénsalo.',
        answer: 'Es la D. Sigue el algoritmo paso por paso: progesterona negativa descarta la anovulación con estrógenos presentes, que sería el ovario poliquístico. El test combinado positivo te dice que el tracto de salida funciona. Y con la FSH en el límite bajo, el hipogonadismo es hipogonadotrópico, no hipergonadotrópico como en la falla ovárica. Es un truco que se repite: el hipo con hipo, es hipo hipo, hipotálamo o hipófisis.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 32',
      stem: 'Una paciente de 14 años aún no ha tenido su menarquia. Presenta desarrollo puberal Tanner 2, mamario y pubiano, con vello axilar. No tiene otras alteraciones en el examen físico.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Solicitar ecografía ginecológica' },
        { letter: 'B', text: 'Solicitar cariotipo' },
        { letter: 'C', text: 'Solicitar niveles plasmáticos de estradiol, LH y FSH' },
        { letter: 'D', text: 'Realizar prueba de progesterona' },
        { letter: 'E', text: 'Controlar en un año' },
      ],
      correct: 'E',
      explanation: 'A los 14 años, con desarrollo puberal ya iniciado, todavía no se cumple la definición de amenorrea primaria, que exige ausencia de menarquia a los 15 años cuando hay caracteres sexuales secundarios presentes. La conducta correcta es controlar la evolución, no estudiar.',
      say: {
        stem: 'Y esta es una trampa clásica, del EUNACOM de julio de dos mil dieciséis. Niña de catorce años que aún no tiene su primera regla, pero con desarrollo puberal ya iniciado, mamas y vello púbico presentes, además de vello axilar. El resto del examen es normal.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: pedir ecografía, pedir cariotipo, pedir estradiol y gonadotrofinas, hacer un test de progesterona, o controlar en un año. Piénsalo.',
        answer: 'Es la E. Y la razón es que todavía no hay nada que estudiar: la amenorrea primaria se define a los quince años cuando hay caracteres sexuales secundarios presentes, y esta niña tiene solo catorce, con la pubertad ya en marcha. Pedir exámenes ahora es adelantarse a la definición. El examen te está probando si sabes cuándo empieza el reloj, no solo el algoritmo.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2015 · Pregunta 111",
      "stem": "Una paciente de 38 años, usuaria de anticonceptivos orales combinados desde hace 4 meses, consulta por galactorrea de algunas semanas de evolución, sin otros síntomas. Las mamas se palpan sin nódulos y se objetiva la galactorrea al comprimirlas.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Solicitar niveles de progesterona"
        },
        {
          "letter": "B",
          "text": "Solicitar niveles de prolactina"
        },
        {
          "letter": "C",
          "text": "Cambiar los anticonceptivos a progestágenos solos"
        },
        {
          "letter": "D",
          "text": "Solicitar TAC de cerebro"
        },
        {
          "letter": "E",
          "text": "Solicitar niveles plasmáticos de estradiol, LH y FSH"
        }
      ],
      "correct": "B",
      "explanation": "Toda galactorrea fuera del embarazo y la lactancia se estudia primero con prolactina plasmática (junto a TSH y descartar fármacos). Los anticonceptivos enmascaran la amenorrea que acompañaría a una hiperprolactinemia. La imagen, que es la resonancia de silla turca y no la TAC, se pide solo con prolactina elevada sin causa secundaria.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil quince. Mujer de treinta y ocho años, usuaria de anticonceptivos combinados hace cuatro meses, con galactorrea de algunas semanas. Las mamas no tienen nódulos y la secreción sale al comprimirlas.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: progesterona, prolactina, cambiar a progestágenos solos, TAC de cerebro, o estradiol con LH y FSH. Piénsalo.",
        "answer": "Es la B, la prolactina. La galactorrea se estudia primero con prolactina, y los anticonceptivos ocultan la amenorrea que delataría una hiperprolactinemia. La TAC de cerebro tienta por el miedo al tumor, pero la imagen se pide recién con la prolactina alta, y la de elección es la resonancia."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.03.4.008 · FSH, estradiol y prolactina",
      "stem": "Mujer de 20 años, corredora de fondo, con amenorrea secundaria de 6 meses. Entrena 70 km por semana y bajó 7 kg en el último año; IMC 17,5. Beta-hCG negativa, TSH 1,9 mUI/L, prolactina 11 ng/mL. FSH 2,1 mUI/mL, LH 0,9 mUI/mL, estradiol 14 pg/mL. Prueba de progesterona negativa.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Amenorrea hipotalámica funcional"
        },
        {
          "letter": "B",
          "text": "Síndrome de ovario poliquístico"
        },
        {
          "letter": "C",
          "text": "Insuficiencia ovárica prematura"
        },
        {
          "letter": "D",
          "text": "Síndrome de Asherman"
        },
        {
          "letter": "E",
          "text": "Hiperprolactinemia"
        }
      ],
      "correct": "A",
      "explanation": "FSH y LH bajas o normales bajas con estradiol bajo: hipogonadismo hipogonadotropo. En una deportista con bajo peso y déficit energético, la causa es la amenorrea hipotalámica funcional, con riesgo de pérdida de masa ósea. La insuficiencia ovárica tiene FSH alta; el SOP tiene estrógenos normales y prueba de progesterona positiva.",
      "say": {
        "stem": "Mujer de veinte años, corredora de fondo, con seis meses de amenorrea y baja de siete kilos. Su prolactina y TSH son normales, la FSH y la LH están bajas, el estradiol está bajo y la prueba de progesterona es negativa.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: amenorrea hipotalámica funcional, ovario poliquístico, insuficiencia ovárica prematura, síndrome de Asherman o hiperprolactinemia. Piénsalo.",
        "answer": "Es la A. Gonadotropinas bajas con estradiol bajo en una deportista delgada es una amenorrea hipotalámica: el hipotálamo frena el eje por el déficit de energía. La insuficiencia ovárica tienta porque también hay estrógenos bajos, pero ahí la FSH estaría muy elevada, no en dos."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2017 · Pregunta 89",
      "stem": "Paciente de 14 años, con menarquia a los 13 años, presenta ciclos menstruales que varían entre 26 y 35 días. Su examen físico es normal y no refiere otros síntomas.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Iniciar anticonceptivos orales"
        },
        {
          "letter": "B",
          "text": "Iniciar estrógenos solos por vía oral"
        },
        {
          "letter": "C",
          "text": "Iniciar progestágenos solos por vía oral"
        },
        {
          "letter": "D",
          "text": "Solicitar niveles plasmáticos de estradiol, progesterona, LH y FSH"
        },
        {
          "letter": "E",
          "text": "Controlar ambulatoriamente con calendario menstrual"
        }
      ],
      "correct": "E",
      "explanation": "En los primeros años tras la menarquia el eje hipotálamo-hipófisis-ovario aún es inmaduro y los ciclos anovulatorios e irregulares son esperables. Ciclos entre 21 y 45 días son normales en adolescentes. Basta educar y controlar con calendario menstrual; no requiere estudio hormonal ni tratamiento.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil diecisiete. Adolescente de catorce años, con menarquia hace un año, con ciclos de entre veintiséis y treinta y cinco días y examen normal.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: anticonceptivos orales, estrógenos, progestágenos, perfil hormonal, o control con calendario menstrual. Piénsalo.",
        "answer": "Es la E. En los primeros años después de la menarquia los ciclos irregulares son normales por inmadurez del eje, así que se controla con calendario. Pedir hormonas tienta, pero no hay nada patológico que estudiar."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.03.3.001 · Pubertad normal",
      "stem": "Una niña de 10 años es llevada a control porque la madre notó un 'bultito' bajo la areola derecha hace 2 meses, levemente sensible. No tiene vello púbico ni ha menstruado. Su crecimiento es normal.",
      "question": "¿Cuál es la interpretación más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Pubertad precoz que requiere estudio urgente"
        },
        {
          "letter": "B",
          "text": "Tumor mamario que requiere biopsia"
        },
        {
          "letter": "C",
          "text": "Inicio normal de la pubertad: la telarquia es el primer signo puberal en las niñas"
        },
        {
          "letter": "D",
          "text": "Ginecomastia"
        },
        {
          "letter": "E",
          "text": "Hiperprolactinemia"
        }
      ],
      "correct": "C",
      "explanation": "En niñas la pubertad normal comienza entre los 8 y 13 años, y su primer signo es la telarquia (botón mamario), que puede ser unilateral y sensible al inicio. Luego vienen pubarquia, estirón y menarquia. En niños el primer signo es el aumento testicular (≥4 mL). Pubertad precoz en niñas es antes de los 8 años.",
      "say": {
        "stem": "Una niña de diez años tiene desde hace dos meses un pequeño nódulo sensible bajo la areola derecha, sin vello púbico ni menstruaciones, con crecimiento normal.",
        "question": "¿Cuál es la interpretación más adecuada?",
        "options": "Las opciones: pubertad precoz, tumor mamario con biopsia, inicio normal de la pubertad con telarquia, ginecomastia o hiperprolactinemia. Piénsalo.",
        "answer": "Es la C. La telarquia es el primer signo puberal en niñas y a los diez años es normal, aunque sea unilateral. La pubertad precoz tienta, pero en niñas se define antes de los ocho años."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'El mecanismo', tag: 'Explica el algoritmo', kind: 'key', items: [
          { t: 'Estradiol alto gatilla el pico de LH', d: 'Ese pico produce la ovulación',
            say: 'Cerremos con las reglas de oro. El estradiol alto es el que gatilla el pico de LH, y ese pico es el que produce la ovulación; sin fecundación, la caída hormonal produce la regla.' },
        ] },
        { title: 'Amenorrea primaria', tag: 'Cariotipo y vello', kind: 'alert', items: [
          { t: 'Mamas sí, vello no: Morris', d: 'Mamas y vello normales, sin útero: Rokitansky',
            say: 'En la amenorrea primaria, si hay mamas pero no vello, es Morris; si hay mamas y vello normales pero no útero, es Rokitansky. La anosmia es Kallmann.' },
        ] },
        { title: 'Amenorrea secundaria', tag: 'El orden nunca se salta', kind: 'pharma', items: [
          { t: 'Primero beta hCG, siempre', d: 'Luego TSH, prolactina y test de progesterona',
            say: 'Y en la amenorrea secundaria, el primer paso es siempre la beta hCG, y después sigue el orden: TSH y prolactina, test de progesterona, test combinado, y por último la FSH. Si te llevas una sola idea de hoy: nunca te saltes un paso del algoritmo. Nos vemos en la próxima clase, con el ovario poliquístico.' },
        ] },
      ],
    },
  ],

  pathway: (() => {
    const nFallaOv = N('alert', 'Falla ovárica primaria', 'Terapia hormonal de reemplazo',
      'FSH muy elevada antes de los cuarenta años es insuficiencia ovárica prematura. Requiere terapia de reemplazo hormonal para proteger hueso y corazón.');
    const nFallaCentral = N('refer', 'Falla hipotalámica o hipofisiaria', 'Buscar causa funcional o tumoral',
      'FSH baja o normal es un hipogonadismo hipogonadotrópico: la causa está en el hipotálamo o la hipófisis, por estrés, bajo peso, ejercicio extremo, o un tumor selar.');
    const nFSH = N('q', '¿FSH y LH?', 'Separa lo ovárico de lo central',
      'Si sangra, el tracto de salida funciona: el problema es hormonal, y la FSH dice dónde.',
      ['Alta', nFallaOv], ['Baja o normal', nFallaCentral]);
    const nAsherman = N('alert', 'Asherman u obstrucción', 'Confirmar con histeroscopía',
      'Si tampoco sangra con estrógeno más progesterona, el problema es anatómico: sinequias uterinas o estenosis del canal. Se confirma y se trata con histeroscopía.');
    const nEP = N('q', '¿Estrógeno más progesterona?', '¿Responde el endometrio?',
      'Si no sangra con progesterona sola, falta separar lo anatómico de lo hormonal: se da un ciclo combinado de estrógeno y progesterona.',
      ['No sangra', nAsherman], ['Sangra', nFSH]);
    const nAnov = N('ok', 'Anovulación', 'Causa más frecuente: ovario poliquístico',
      'El endometrio ya estaba proliferado por estrógenos propios, pero no hay ovulación. Es el diagnóstico más frecuente en mujeres jóvenes.');
    const nProg = N('q', '¿Test de progesterona?', 'Medroxiprogesterona por unos días',
      'Con TSH y prolactina normales, el paso tres es dar un progestágeno y ver si la paciente sangra al suspenderlo.',
      ['Sangra', nAnov], ['No sangra', nEP]);
    const nTshPrl = N('q', '¿TSH y prolactina?', 'Descartan tiroides y prolactinoma',
      'Con el embarazo descartado, el paso dos es TSH y prolactina.',
      ['', nProg]);
    const nEmbarazo = N('ok', 'Embarazo', 'Iniciar control prenatal',
      'Es la causa más frecuente de amenorrea secundaria en el mundo. Aquí termina el estudio.');
    const nHcg = N('q', '¿Beta hCG?', 'El primer examen, siempre',
      'Lo primero, sin excepción, es descartar embarazo.',
      ['Positiva', nEmbarazo], ['Negativa', nTshPrl]);
    const root = N('start', 'Amenorrea secundaria', 'Tres meses sin regla, o seis si ya era irregular',
      'Mujer en edad fértil que dejó de menstruar. El estudio es escalonado: cada paso decide si sigues o si ya tienes el diagnóstico.',
      ['', nHcg]);
    return { title: 'Amenorrea secundaria: el algoritmo completo', root };
  })(),
};
