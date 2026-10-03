// Clase 7.15 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_endocrinologia.cjs (endo-15).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'endo-15',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Crisis de cefalea, sudor y palpitaciones: metanefrinas para confirmar y bloqueo alfa antes que beta',
      say: 'Bienvenidos. En la clase anterior la suprarrenal fabricaba aldosterona de más; hoy bajamos a la médula suprarrenal y vemos el feocromocitoma y los paragangliomas. Son tumores raros, menos del medio por ciento de los hipertensos, pero el examen los pregunta mucho, porque un error de tratamiento puede matar al paciente. Todo se resume en una regla: primero bloqueo alfa, y solo después bloqueo beta.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Un tumor que descarga catecolaminas',
      nodes: [
        { id: 'cro', col: 0, row: 1, k: 'cause', t: 'Células cromafines', s: 'Médula suprarrenal o paraganglios' },
        { id: 'cat', col: 1, row: 1, k: 'mech', t: 'Descarga de catecolaminas', s: 'Noradrenalina, adrenalina, dopamina' },
        { id: 'a1', col: 2, row: 0, k: 'effect', t: 'Receptores alfa-1', s: 'Vasoconstricción: hipertensión' },
        { id: 'b1', col: 2, row: 2, k: 'effect', t: 'Receptores beta-1', s: 'Taquicardia y palpitaciones' },
        { id: 'cri', col: 3, row: 1, k: 'alert', t: 'Crisis paroxística', s: 'Cefalea, sudoración, palpitaciones' },
        { id: 'par', col: 0, row: 3, k: 'risk', t: 'Paraganglioma', s: 'Mismo tumor, fuera de la suprarrenal' },
      ],
      edges: [
        { from: 'cro', to: 'cat' },
        { from: 'cat', to: 'a1' }, { from: 'cat', to: 'b1' },
        { from: 'a1', to: 'cri' }, { from: 'b1', to: 'cri' },
        { from: 'par', to: 'cat', label: 'también' },
      ],
      steps: [
        { show: ['cro'], note: 'El origen: la médula suprarrenal',
          say: 'Partamos por el origen. El feocromocitoma nace de las células cromafines de la médula suprarrenal, las mismas que normalmente fabrican adrenalina ante el estrés.' },
        { show: ['cat'], note: 'Produce, almacena y descarga',
          say: 'El tumor produce, almacena y secreta catecolaminas: noradrenalina, adrenalina y dopamina. Y muchas veces no lo hace de forma continua, sino en descargas.' },
        { show: ['a1'], note: 'Alfa-1: la arteriola se cierra',
          say: 'Esas catecolaminas actúan sobre los receptores alfa uno de las arteriolas y las contraen. Por eso sube la presión, de manera paroxística o mantenida y de difícil manejo.' },
        { show: ['b1'], note: 'Beta-1: el corazón se acelera',
          say: 'Y sobre los receptores beta uno del corazón, que aceleran la frecuencia y dan las palpitaciones.' },
        { show: ['cri'], note: 'La descarga explica la crisis',
          say: 'Cada descarga se traduce en una crisis: cefalea, sudoración y palpitaciones, con la presión por las nubes. Guarda esta idea de alfa y beta, porque es la base de la regla de oro del tratamiento.' },
        { show: ['par'], note: 'Extraadrenal: paraganglioma',
          say: 'Cuando el mismo tipo de tumor nace fuera de la suprarrenal, en los ganglios simpáticos o parasimpáticos, se llama paraganglioma. Se comporta igual.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: '¿Cómo llega este paciente?',
      cards: [
        { title: 'Tríada paroxística', tag: 'Especificidad > 90 %', kind: 'key', items: [
          { t: 'Cefalea pulsátil intensa', d: 'Holocránea, en crisis',
            say: 'Veamos cómo llega el paciente. La tríada clásica, que tiene una especificidad sobre el noventa por ciento, parte con una cefalea intensa, pulsátil y holocránea.' },
          { t: 'Sudoración profusa', d: 'Empapa la ropa',
            say: 'Luego, sudoración profusa.' },
          { t: 'Palpitaciones con HTA', d: 'Paroxística o mantenida',
            say: 'Y palpitaciones intensas con taquicardia, acompañadas de hipertensión paroxística o mantenida. Fíjate en la palabra paroxística: son crisis que van y vienen. Eso es lo que lo separa del hiperaldosteronismo de la clase pasada.' },
        ] },
        { title: 'La regla del 10 %', tag: 'Clásica', kind: 'criteria', items: [
          { t: 'Bilateral, extraadrenal, pediátrico', d: '10 % cada uno',
            say: 'Hay una regla histórica que todavía se pregunta, la regla del diez por ciento: un diez por ciento son bilaterales, un diez por ciento extraadrenales, es decir paragangliomas, y un diez por ciento pediátricos.' },
          { t: 'Maligno o sin hipertensión', d: '10 % cada uno',
            say: 'Otro diez por ciento son malignos con metástasis, y otro diez por ciento no tienen hipertensión.' },
        ] },
        { title: 'Genética', tag: 'Nota moderna', kind: 'alert', items: [
          { t: 'Hasta 35–40 % hereditarios', d: 'RET, VHL, NF1, SDH',
            say: 'Pero hay una corrección moderna importante: hasta el treinta y cinco a cuarenta por ciento de los casos son hereditarios, por mutaciones en RET, VHL, NF uno o las subunidades de la succinato deshidrogenasa. Por eso hay que pensar en los síndromes familiares.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico',
      title: 'Primero la bioquímica, después la imagen',
      nodes: [
        { id: 'sos', col: 0, row: 1, k: 'start', t: 'Sospecha clínica', s: 'Tríada paroxística con HTA' },
        { id: 'met', col: 1, row: 1, k: 'q', t: 'Metanefrinas', s: 'Libres plasmáticas u orina de 24 h' },
        { id: 'neg', col: 2, row: 2, k: 'good', t: 'Normales', s: 'Feocromocitoma virtualmente descartado' },
        { id: 'tc', col: 2, row: 0, k: 'mech', t: 'TC o RM abdomen y pelvis', s: 'Masa > 3 cm, vascular, heterogénea' },
        { id: 'mib', col: 3, row: 0, k: 'refer', t: 'MIBG o PET-CT con DOPA', s: 'Extraadrenal, maligno o > 5 cm' },
        { id: 'tra', col: 3, row: 2, k: 'trap', t: 'Catecolaminas séricas o AVM', s: 'Menos sensibles' },
      ],
      edges: [
        { from: 'sos', to: 'met' },
        { from: 'met', to: 'tc', label: 'elevadas' }, { from: 'met', to: 'neg', label: 'normales' },
        { from: 'tc', to: 'mib', label: 'si' },
        { from: 'met', to: 'tra', label: 'no reemplazar por' },
      ],
      steps: [
        { show: ['sos', 'met'], note: 'Examen de elección: metanefrinas',
          say: 'Pasemos al diagnóstico. Ante la sospecha, el examen de primera línea son las metanefrinas: libres en plasma, o fraccionadas en orina de veinticuatro horas.' },
        { show: ['tra'], note: 'Por qué metanefrinas y no catecolaminas',
          say: '¿Por qué metanefrinas y no catecolaminas? Porque el propio tumor degrada sus catecolaminas de forma continua con la enzima COMT, y las metanefrinas son esos metabolitos estables. Así el examen detecta el tumor aunque no esté en crisis, con una sensibilidad sobre el noventa y ocho por ciento. Las catecolaminas séricas y el ácido vanililmandélico quedan muy atrás.' },
        { show: ['neg'], note: 'Alta sensibilidad: si son normales, descarta',
          say: 'Esa sensibilidad tiene una consecuencia práctica: si las metanefrinas son rigurosamente normales, el feocromocitoma está virtualmente descartado, y buscas otra causa de las crisis.' },
        { show: ['tc'], note: 'La imagen, después de confirmar',
          say: 'Si están elevadas, recién ahí localizas con tomografía o resonancia de abdomen y pelvis. El feocromocitoma suele ser una masa grande, de más de tres centímetros, muy vascularizada y heterogénea, con áreas quísticas o necróticas. En la resonancia brilla en T dos, la clásica imagen en bombilla eléctrica.' },
        { show: ['mib'], note: 'Imagen funcional en casos seleccionados',
          say: 'Y si sospechas un paraganglioma extraadrenal, malignidad, o el tumor mide más de cinco centímetros, se agrega una imagen funcional: cintigrafía con MIBG, o PET con DOPA.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Regla de oro',
      title: '¿Por qué nunca betabloqueo primero?',
      nodes: [
        { id: 'bb', col: 0, row: 1, k: 'trap', t: 'Betabloqueador solo', s: 'Propranolol, atenolol, labetalol' },
        { id: 'b2', col: 1, row: 1, k: 'mech', t: 'Bloquea beta-2 vascular', s: 'Se pierde la vasodilatación' },
        { id: 'a1', col: 2, row: 1, k: 'mech', t: 'Alfa-1 sin oposición', s: 'Catecolaminas actúan libres' },
        { id: 'vas', col: 3, row: 1, k: 'alert', t: 'Vasoconstricción masiva', s: 'Crisis hipertensiva letal' },
        { id: 'edp', col: 4, row: 0, k: 'risk', t: 'Edema pulmonar agudo', s: 'Cardiogénico' },
        { id: 'acv', col: 4, row: 2, k: 'risk', t: 'Rotura vascular cerebral', s: 'Hemorragia' },
      ],
      edges: [
        { from: 'bb', to: 'b2' }, { from: 'b2', to: 'a1' }, { from: 'a1', to: 'vas' },
        { from: 'vas', to: 'edp' }, { from: 'vas', to: 'acv' },
      ],
      steps: [
        { show: ['bb'], note: 'La trampa más grave del tema',
          say: 'Ahora la regla que más se pregunta, y que se entiende con el mecanismo que vimos al inicio. Imagina que al paciente, por la taquicardia, le indicas un betabloqueador solo: propranolol, atenolol o labetalol.' },
        { show: ['b2'], note: 'Beta-2 era la válvula de escape',
          say: 'Además del corazón, bloqueas los receptores beta dos de los vasos del músculo esquelético, que son vasodilatadores. Eran la única válvula de escape frente a tanta catecolamina.' },
        { show: ['a1', 'vas'], note: 'Queda solo la vasoconstricción',
          say: 'Entonces las catecolaminas del tumor actúan libres, sin oposición, sobre los receptores alfa uno. El resultado es una vasoconstricción periférica masiva y una crisis hipertensiva que puede ser letal.' },
        { show: ['edp', 'acv'], note: 'Las complicaciones fatales',
          say: 'Y esa crisis termina en un edema pulmonar agudo cardiogénico o en una rotura vascular cerebral. Por eso la regla es absoluta: nunca un betabloqueador antes de haber logrado un bloqueo alfa completo y eficaz.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Preparación preoperatoria',
      title: 'La secuencia correcta antes de operar',
      cards: [
        { title: 'Paso 1 · Bloqueo alfa', tag: '10 a 14 días', kind: 'pharma', items: [
          { t: 'Fenoxibenzamina', d: '10 mg c/12 h hasta 80–100 mg/día',
            say: 'El tratamiento curativo es la suprarrenalectomía laparoscópica, pero antes hay que preparar al paciente durante diez a catorce días. El paso uno es el bloqueo alfa: fenoxibenzamina, un bloqueador no selectivo de acción prolongada, partiendo con diez miligramos cada doce horas hasta ochenta a cien miligramos al día.' },
          { t: 'O doxazosina', d: 'Alfa-1 selectivo, 2 a 16 mg/día',
            say: 'O un bloqueador alfa uno selectivo, la doxazosina, de dos a dieciséis miligramos al día.' },
        ] },
        { title: 'Paso 2 · Volumen', tag: 'Reexpandir', kind: 'key', items: [
          { t: 'Dieta rica en sal y líquidos', d: 'Oral o endovenoso',
            say: 'El paso dos es el volumen. La vasoconstricción crónica deja al paciente con el volumen plasmático muy contraído. Por eso se indica dieta rica en sodio e hidratación abundante, oral o endovenosa. Si no reexpandes, cuando el tumor sale la presión se desploma.' },
        ] },
        { title: 'Paso 3 · Bloqueo beta', tag: 'Solo después', kind: 'alert', items: [
          { t: 'Propranolol o atenolol', d: 'Si persiste taquicardia',
            say: 'Y recién el paso tres: solo después de dos a cuatro días de buen bloqueo alfa y volumen, si persiste taquicardia o una arritmia supraventricular, se puede agregar un betabloqueador, propranolol o atenolol.' },
          { t: 'Con NEM 2: feocromocitoma primero', d: 'Antes que el carcinoma medular',
            say: 'Un último dato de conducta: si el paciente tiene un carcinoma medular de tiroides y un feocromocitoma al mismo tiempo, como en la neoplasia endocrina múltiple tipo dos, se opera siempre primero el feocromocitoma.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Síndromes familiares',
      title: '¿Cuándo pensar en un feocromocitoma hereditario?',
      head: ['Síndrome', 'Gen', 'Tumores asociados', 'Feocromocitoma'],
      rows: [
        { cells: ['NEM 2A (Sipple)', 'RET · autosómica dominante', 'Carcinoma medular (100 %) + hiperparatiroidismo 1°', 'Bilateral en > 50 %, benigno'],
          say: 'Veamos los síndromes familiares, todos autosómicos dominantes. La neoplasia endocrina múltiple dos A, o síndrome de Sipple, por el protooncogén RET: carcinoma medular de tiroides en todos, hiperparatiroidismo primario en el veinte a treinta por ciento, y feocromocitoma bilateral en más de la mitad.' },
        { cells: ['NEM 2B (Gorlin)', 'RET · autosómica dominante', 'Carcinoma medular agresivo + neuromas mucosos + hábito marfanoide', 'Bilateral en > 50 %, muy precoz'],
          say: 'La dos B, o síndrome de Gorlin, también por RET: carcinoma medular agresivo, neuromas mucosos y hábito marfanoide. El feocromocitoma también es bilateral en más de la mitad, y muy precoz.' },
        { cells: ['Von Hippel-Lindau', 'VHL · autosómica dominante', 'Hemangioblastomas de retina y SNC + carcinoma renal de células claras', 'Bilateral o múltiple'],
          say: 'Von Hippel Lindau: hemangioblastomas de retina y del sistema nervioso central, y carcinoma renal de células claras. El feocromocitoma suele ser bilateral o múltiple.' },
        { cells: ['Neurofibromatosis tipo 1', 'NF1 · autosómica dominante', 'Manchas café con leche + neurofibromas + nódulos de Lisch', '1–5 % de los casos'],
          say: 'Y la neurofibromatosis tipo uno: manchas café con leche, neurofibromas y nódulos de Lisch. Aquí el feocromocitoma es poco frecuente, del uno al cinco por ciento. Por todo esto, el seguimiento incluye estudio genético familiar.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol de decisión, tal como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Crisis de cefalea, sudor y palpitaciones', 'Metanefrinas plasmáticas u orina 24 h', 'Pedir TC de entrada'],
          say: 'Repasemos las trampas. Crisis de cefalea, sudoración y palpitaciones: metanefrinas. El error es partir por la tomografía; la imagen va después de la bioquímica.' },
        { cells: ['Metanefrinas normales', 'Buscar otra causa', 'Seguir con imágenes'],
          say: 'Metanefrinas rigurosamente normales: el feocromocitoma está virtualmente descartado, y buscas otra causa.' },
        { cells: ['Feocromocitoma con taquicardia', 'Bloqueo alfa primero', 'Betabloqueador solo'],
          say: 'Feocromocitoma con taquicardia: primero bloqueo alfa. Dar un betabloqueador solo es la respuesta que el examen castiga, porque desencadena la crisis hipertensiva.' },
        { cells: ['Preparación quirúrgica', 'Alfa 10–14 días + sal y líquidos', 'Operar sin preparar'],
          say: 'Antes de la cirugía: bloqueo alfa por diez a catorce días, con sal y líquidos. Operar sin preparar expone a crisis durante la manipulación del tumor y a colapso cuando sale.' },
        { cells: ['Carcinoma medular + feocromocitoma', 'Operar primero el feocromocitoma', 'Operar primero la tiroides'],
          say: 'Carcinoma medular con feocromocitoma: primero el feocromocitoma.' },
        { cells: ['Masa suprarrenal > 3 cm con crisis', 'Feocromocitoma', 'Confundir con adenoma de Conn'],
          say: 'Y una masa suprarrenal grande con crisis adrenérgicas es feocromocitoma, no un adenoma de Conn, que da hipokalemia y no crisis paroxísticas. Esa es justamente la pregunta real que viene.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 36 años con episodios de cefalea pulsátil intensa, palpitaciones y sudoración profusa de 15 a 30 minutos, 2 a 3 veces por semana desde hace 3 meses. En una crisis en el policlínico se constata PA 210/120 mmHg y FC 130 lpm. Entre las crisis está asintomática.',
      question: '¿Cuál es el examen inicial más adecuado para confirmar la sospecha?',
      options: [
        { letter: 'A', text: 'TC de abdomen con contraste' },
        { letter: 'B', text: 'Catecolaminas plasmáticas durante una crisis' },
        { letter: 'C', text: 'Metanefrinas fraccionadas en orina de 24 horas' },
        { letter: 'D', text: 'Relación aldosterona / renina plasmática' },
        { letter: 'E', text: 'Cintigrafía con MIBG' },
      ],
      correct: 'C',
      explanation: 'Tríada paroxística con HTA: sospecha de feocromocitoma. El examen de primera línea son las metanefrinas (plasmáticas o urinarias de 24 h), con sensibilidad > 98 %. La TC y la MIBG localizan, pero solo después de confirmar; las catecolaminas son menos sensibles; la RAR estudia el hiperaldosteronismo.',
      say: {
        stem: 'Vamos con un caso. Mujer de treinta y seis años con episodios de cefalea pulsátil intensa, palpitaciones y sudoración profusa, de quince a treinta minutos, dos a tres veces por semana. En una crisis se le mide una presión de doscientos diez sobre ciento veinte y una frecuencia de ciento treinta. Entre las crisis está bien.',
        question: '¿Cuál es el examen inicial más adecuado para confirmar la sospecha?',
        options: 'Las alternativas: tomografía de abdomen, catecolaminas plasmáticas en crisis, metanefrinas en orina de veinticuatro horas, relación aldosterona renina, o cintigrafía con MIBG. Piénsalo.',
        answer: 'Es la C. La tríada paroxística con hipertensión es feocromocitoma hasta demostrar lo contrario, y se confirma con metanefrinas, que detectan el tumor aunque no esté en crisis. El distractor tentador es la tomografía, pero la imagen solo localiza lo que la bioquímica ya confirmó. Las catecolaminas son menos sensibles, y la relación aldosterona renina es el examen de la clase pasada.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 82',
      stem: 'Paciente con HTA de difícil control, cefalea, palpitaciones y lesión suprarrenal derecha de 5 cm en TAC.',
      question: '¿Diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Adenoma suprarrenal productor de aldosterona' },
        { letter: 'B', text: 'Carcinoma suprarrenal' },
        { letter: 'C', text: 'Feocromocitoma' },
        { letter: 'D', text: 'Quiste suprarrenal simple' },
        { letter: 'E', text: 'Hiperplasia suprarrenal nodular' },
      ],
      correct: 'C',
      explanation: 'HTA de difícil control con cefalea y palpitaciones (clínica adrenérgica) y una masa suprarrenal grande: feocromocitoma. El adenoma de Conn da HTA con hipokalemia, sin crisis adrenérgicas.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de enero de dos mil veintitrés. Paciente con hipertensión de difícil control, cefalea, palpitaciones, y una lesión suprarrenal derecha de cinco centímetros en la tomografía.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: adenoma productor de aldosterona, carcinoma suprarrenal, feocromocitoma, quiste simple, o hiperplasia suprarrenal nodular. Piénsalo.',
        answer: 'Es la C, feocromocitoma. Hipertensión difícil con cefalea y palpitaciones es clínica adrenérgica, y la masa es grande, como es típico del feocromocitoma. El distractor es el adenoma de Conn, que también da hipertensión difícil con un tumor suprarrenal, pero se delata por la hipokalemia, no por crisis de palpitaciones, como el caso de la clase pasada.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Una paciente de 40 años presenta episodios paroxísticos frecuentes de cefalea severa, sudoración profusa y taquicardia con cifras tensionales de 220/115 mmHg. Se confirma el diagnóstico de feocromocitoma suprarrenal derecho mediante metanefrinas fraccionadas urinarias elevadas y TC abdominal. Se programa una suprarrenalectomía laparoscópica para dentro de dos semanas.',
      question: '¿Cuál de los siguientes esquemas farmacológicos preoperatorios representa la conducta correcta y obligatoria?',
      options: [
        { letter: 'A', text: 'Iniciar propranolol oral a dosis plenas de inmediato y asociar fenoxibenzamina 24 horas antes del pabellón' },
        { letter: 'B', text: 'Iniciar bloqueo alfa-adrenérgico con fenoxibenzamina o doxazosina durante 10 a 14 días, y asociar betabloqueador solo con posterioridad si persiste taquicardia' },
        { letter: 'C', text: 'Indicar atenolol oral en monoterapia sin administrar bloqueadores alfa' },
        { letter: 'D', text: 'Administrar sulfato de magnesio en infusión y llevar a pabellón de inmediato sin preparación oral' },
        { letter: 'E', text: 'Indicar espironolactona asociada a enalapril oral' },
      ],
      correct: 'B',
      explanation: 'Preparación obligatoria: bloqueo alfa completo (fenoxibenzamina o doxazosina) por 10 a 14 días con sal y líquidos para reexpandir el volumen. Solo con el bloqueo alfa establecido se agrega betabloqueador si persiste taquicardia. El betabloqueo previo o aislado deja el alfa-1 sin oposición y precipita una crisis hipertensiva.',
      say: {
        stem: 'Y un caso representativo del banco, sobre la regla de oro. Mujer de cuarenta años con feocromocitoma suprarrenal derecho ya confirmado con metanefrinas y tomografía. Se programa la suprarrenalectomía laparoscópica para dentro de dos semanas.',
        question: '¿Cuál es el esquema preoperatorio correcto y obligatorio?',
        options: 'Las opciones: propranolol de inmediato y fenoxibenzamina el día antes, bloqueo alfa por diez a catorce días y beta solo después si persiste taquicardia, atenolol solo, sulfato de magnesio y pabellón inmediato, o espironolactona con enalapril. Piénsalo.',
        answer: 'Es la B. Primero bloqueo alfa por diez a catorce días, con sal y líquidos, y solo después, si persiste la taquicardia, el betabloqueador. El distractor tentador es la A, porque trae los dos fármacos correctos, pero en el orden al revés: partir con propranolol deja el alfa uno sin oposición y desencadena la crisis. Y el atenolol solo es el mismo error, sin siquiera el alfa.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Bioquímica primero', kind: 'key', items: [
          { t: 'Cefalea + sudor + palpitaciones', d: 'Paroxísticas, con HTA',
            say: 'Cerremos con las reglas de oro. La tríada paroxística de cefalea, sudoración y palpitaciones con hipertensión es la sospecha.' },
          { t: 'Metanefrinas, luego TC o RM', d: 'Normales: virtualmente descartado',
            say: 'Se confirma con metanefrinas, y solo después se localiza con tomografía o resonancia. Si las metanefrinas son normales, está virtualmente descartado.' },
        ] },
        { title: 'Tratamiento', tag: 'Regla de oro', kind: 'alert', items: [
          { t: 'Alfa primero, beta después', d: 'Nunca betabloqueo solo',
            say: 'Antes de la suprarrenalectomía, bloqueo alfa con fenoxibenzamina o doxazosina por diez a catorce días, con sal y líquidos, y solo después el beta.' },
        ] },
        { title: 'Genética y seguimiento', tag: 'Hasta 40 % hereditario', kind: 'criteria', items: [
          { t: 'NEM 2, VHL, NF1', d: 'Estudio genético familiar',
            say: 'Piensa en los síndromes familiares, y si hay carcinoma medular, opera primero el feocromocitoma.' },
          { t: 'Metanefrinas anuales', d: 'Por 10 años tras la cirugía',
            say: 'Después de operar, metanefrinas anuales por diez años. Si te llevas una sola idea de hoy: en el feocromocitoma, primero el alfa y después el beta, nunca al revés. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Feocromocitoma: de la crisis al pabellón',
    root: N('start', 'Crisis paroxísticas con HTA', 'Cefalea, sudoración, palpitaciones',
      'Paciente con crisis de cefalea, sudoración y palpitaciones, con hipertensión paroxística o difícil de manejar. La primera pregunta es bioquímica.',
      ['', N('q', '¿Metanefrinas elevadas?', 'Plasma libre u orina de 24 h',
        'Pides metanefrinas libres en plasma o fraccionadas en orina de veinticuatro horas. ¿Están elevadas?',
        ['No', N('refer', 'Virtualmente descartado', 'Buscar otra causa de las crisis',
          'Si son rigurosamente normales, el feocromocitoma está virtualmente descartado, y buscas otra causa de las crisis adrenérgicas.')],
        ['Sí', N('do', 'Localizar: TC o RM', 'MIBG o PET si extraadrenal o > 5 cm',
          'Si están elevadas, localizas con tomografía o resonancia de abdomen y pelvis, y agregas MIBG o PET con DOPA si sospechas un paraganglioma, malignidad o un tumor de más de cinco centímetros.',
          ['', N('alert', 'Bloqueo alfa 10–14 días', 'Fenoxibenzamina o doxazosina + sal y líquidos',
            'Antes de operar, bloqueo alfa con fenoxibenzamina o doxazosina por diez a catorce días, con dieta rica en sal y líquidos. Nunca betabloqueo antes.',
            ['Persiste taquicardia', N('do', 'Agregar betabloqueador', 'Solo con el alfa ya establecido',
              'Si después de varios días de buen bloqueo alfa persiste la taquicardia, recién ahí agregas propranolol o atenolol, y luego operas.')],
            ['Sin taquicardia', N('ok', 'Suprarrenalectomía laparoscópica', 'Metanefrinas anuales por 10 años',
              'Con el paciente preparado, suprarrenalectomía laparoscópica. Después, metanefrinas anuales por diez años y estudio genético familiar.')])])])]),
  },
};
