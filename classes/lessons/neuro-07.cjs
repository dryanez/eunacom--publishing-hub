// Clase 10.7 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neurologia.cjs (neuro-07).
// Preguntas reales: banco real (classes/scripts/class_questions.cjs neuro-07 y --search).
// Cefalea en racimos: el banco real no tiene preguntas; se usa una del libro como caso representativo.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'neuro-07',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Minutos con lagrimeo y agitación, o segundos de corriente al tocarse la cara: oxígeno o carbamazepina',
      say: 'Bienvenidos. En la clase pasada vimos la migraña y la cefalea tensional. Hoy vemos dos de los dolores más intensos de toda la medicina: la cefalea en racimos y la neuralgia del trigémino. Las dos son unilaterales y atroces, pero se separan con tres preguntas: cuánto dura el dolor, si hay lagrimeo y rinorrea, y si el paciente se agita o se queda inmóvil. Y cada una tiene un tratamiento de elección muy específico que el examen pregunta. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Cefalea en racimos',
      title: 'Un reloj hipotalámico que se descompone',
      nodes: [
        { id: 'hip', col: 0, row: 1, k: 'cause', t: 'Hipotálamo posterior', s: 'Marcapasos biológico alterado' },
        { id: 'rit', col: 1, row: 0, k: 'effect', t: 'Periodicidad', s: 'Misma hora · racimos de 2–12 semanas' },
        { id: 'tri', col: 1, row: 2, k: 'mech', t: 'Reflejo trigémino-autonómico', s: 'Parasimpático por ganglio esfenopalatino' },
        { id: 'dol', col: 2, row: 1, k: 'effect', t: 'Dolor orbitario atroz', s: 'Unilateral · 15 a 180 min' },
        { id: 'aut', col: 2, row: 3, k: 'effect', t: 'Síntomas autonómicos ipsilaterales', s: 'Lagrimeo, rinorrea, Horner' },
        { id: 'agi', col: 3, row: 1, k: 'alert', t: 'Agitación psicomotora', s: 'No tolera acostarse' },
      ],
      edges: [
        { from: 'hip', to: 'rit' }, { from: 'hip', to: 'tri' },
        { from: 'tri', to: 'dol' }, { from: 'tri', to: 'aut' }, { from: 'dol', to: 'agi' },
      ],
      steps: [
        { show: ['hip'], note: 'El prototipo de las cefaleas trigémino-autonómicas',
          say: 'Partamos por la cefalea en racimos, también llamada cluster o cefalea de Horton. Es el prototipo de las cefaleas trigémino-autonómicas, y su origen está en el hipotálamo posterior, que funciona como un marcapasos biológico, un reloj.' },
        { show: ['rit'], note: 'Por eso ataca a la misma hora',
          say: 'Como el problema es el reloj, el cuadro es periódico. Las crisis aparecen a la misma hora del día o de la noche, muchas veces una a dos horas después de dormirse. Y llegan en racimos de dos a doce semanas, separados por meses o años sin síntomas.' },
        { show: ['tri', 'dol'], note: 'El trigémino da el dolor',
          say: 'Desde el hipotálamo se activa un reflejo: el trigémino genera el dolor, estrictamente unilateral, alrededor o detrás del ojo y en la sien, taladrante, tan atroz que se le llama cefalea suicida. Cada crisis dura entre quince y ciento ochenta minutos.' },
        { show: ['aut'], note: 'El parasimpático da el cortejo',
          say: 'Y al mismo tiempo se activa la vía parasimpática craneal, por el ganglio esfenopalatino. De ahí salen los síntomas autonómicos, siempre del mismo lado del dolor: ojo rojo, lagrimeo, rinorrea o congestión nasal, edema del párpado, y un síndrome de Horner transitorio, con ptosis y miosis.' },
        { show: ['agi'], note: 'Lo opuesto a la migraña',
          say: 'Y un dato conductual que se pregunta. El migrañoso se acuesta quieto a oscuras. El paciente con racimos no tolera acostarse: camina inquieto, se balancea, incluso se golpea la cabeza.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Cefalea en racimos',
      title: '¿Quién es y qué lo gatilla?',
      cards: [
        { title: 'El paciente', tag: 'Perfil típico', kind: 'key', items: [
          { t: 'Hombre joven o de edad media', d: 'Relación hombre a mujer 3–4 a 1',
            say: 'El paciente típico es un hombre joven o de edad media, con una relación de tres a cuatro hombres por cada mujer.' },
          { t: 'Fumador en más del 80 %', d: 'Altísima tasa de tabaquismo activo',
            say: 'Y es casi siempre fumador: más del ochenta por ciento fuma. Hombre joven, fumador, que despierta de noche con dolor en un ojo: esa es la imagen que tienes que tener.' },
        ] },
        { title: 'Gatillantes', tag: 'Durante el racimo', kind: 'alert', items: [
          { t: 'Alcohol', d: 'Precipita la crisis en minutos',
            say: 'Durante el período activo, el alcohol gatilla una crisis en minutos. También las siestas diurnas.' },
          { t: 'Sin zonas gatillo cutáneas', d: 'Eso es de la neuralgia',
            say: 'Fíjate que no hay zonas gatillo en la piel. Eso será, justamente, el sello de la neuralgia del trigémino.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Cefalea en racimos',
      title: 'Tratamiento: oxígeno primero',
      cards: [
        { title: 'Crisis aguda', tag: 'Primera línea', kind: 'pharma', items: [
          { t: 'Oxígeno 100 % a 12–15 L/min', d: 'Mascarilla con reservorio, 15–20 min, sentado',
            say: 'El tratamiento de la crisis es muy específico. Primera línea: oxígeno al cien por ciento, con mascarilla de reservorio a doce a quince litros por minuto, por quince a veinte minutos, con el paciente sentado. Corta la crisis en más del setenta por ciento en menos de quince minutos, y sin toxicidad.' },
          { t: '+ Sumatriptán 6 mg SC', d: 'O zolmitriptán 5 mg nasal',
            say: 'Se asocia sumatriptán subcutáneo, seis miligramos, o zolmitriptán cinco miligramos en spray nasal.' },
          { t: 'Nada oral', d: 'Analgésicos, opioides y triptán oral: inútiles',
            say: 'Y la trampa: los analgésicos comunes, los opioides y los triptanes orales son inútiles, porque se absorben lento y la crisis es corta. Por eso las vías son inhalatoria, subcutánea o nasal.' },
        ] },
        { title: 'Prevención', tag: 'Durante el racimo', kind: 'criteria', items: [
          { t: 'Verapamilo 240–960 mg/día', d: 'ECG seriado: bloqueo AV, bradicardia',
            say: 'Para prevenir las crisis durante el racimo, el fármaco de elección es el verapamilo, doscientos cuarenta a novecientos sesenta miligramos al día, con electrocardiogramas de control por el riesgo de bloqueo auriculoventricular y bradicardia.' },
          { t: 'Puente: prednisona 60–80 mg', d: 'Por 5–7 días y descenso · o bloqueo occipital',
            say: 'Como el verapamilo tarda en titularse, se usa un puente: prednisona sesenta a ochenta miligramos por cinco a siete días, con descenso, o un bloqueo del nervio occipital mayor con anestésico local y corticoide.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Neuralgia del trigémino',
      title: 'Un nervio comprimido que hace cortocircuito',
      nodes: [
        { id: 'art', col: 0, row: 0, k: 'cause', t: 'Asa arterial ectásica', s: 'Arteria cerebelosa superior' },
        { id: 'raiz', col: 1, row: 0, k: 'mech', t: 'Compresión de la raíz', s: 'En su entrada al puente' },
        { id: 'dem', col: 2, row: 0, k: 'mech', t: 'Desmielinización focal', s: 'Transmisión efáptica' },
        { id: 'par', col: 3, row: 0, k: 'effect', t: 'Paroxismo eléctrico', s: 'Segundos, en V2 y V3' },
        { id: 'em', col: 1, row: 2, k: 'risk', t: 'Esclerosis múltiple', s: 'Mujer joven, bilateral' },
        { id: 'tum', col: 2, row: 2, k: 'risk', t: 'Tumor del ángulo pontocerebeloso', s: 'Neurinoma, meningioma' },
      ],
      edges: [
        { from: 'art', to: 'raiz' }, { from: 'raiz', to: 'dem' }, { from: 'dem', to: 'par' },
        { from: 'em', to: 'dem', label: 'placa' }, { from: 'tum', to: 'raiz', label: 'masa' },
      ],
      steps: [
        { show: ['art', 'raiz'], note: 'La forma clásica es una compresión vascular',
          say: 'Pasemos a la neuralgia del trigémino, el tic doloroso. En la forma clásica, un asa arterial ectásica, casi siempre la arteria cerebelosa superior, comprime la raíz sensitiva del trigémino justo donde entra al puente.' },
        { show: ['dem'], note: 'Cortocircuito entre axones',
          say: 'Esa compresión crónica desmieliniza el nervio en un punto, y los axones quedan sin aislante. Se produce una transmisión efáptica: un cortocircuito, donde un estímulo táctil inocente salta a las fibras del dolor.' },
        { show: ['par'], note: 'Por eso el dolor es eléctrico',
          say: 'Y eso explica la clínica: un paroxismo eléctrico, de segundos, gatillado por tocarse la cara. El mecanismo te explica la corriente.' },
        { show: ['em', 'tum'], note: 'Las formas secundarias',
          say: 'La forma secundaria tiene otras causas. Una placa de esclerosis múltiple en el puente, que se sospecha en la mujer joven con neuralgia bilateral. O un tumor del ángulo pontocerebeloso, como un neurinoma del acústico o un meningioma.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Neuralgia del trigémino',
      title: 'Segundos de corriente al tocarse la cara',
      cards: [
        { title: 'El dolor', tag: 'Ultra breve', kind: 'key', items: [
          { t: 'Lancinante, como un choque eléctrico', d: 'Fracciones de segundo a 2 minutos',
            say: 'Veamos la clínica. El dolor es unilateral, lancinante, como un choque eléctrico de alto voltaje, y dura desde fracciones de segundo hasta un máximo de dos minutos.' },
          { t: 'Ramas V2 y V3', d: 'Mejilla, maxilar, mandíbula, arcada dental',
            say: 'Se limita al territorio del trigémino, sobre todo la segunda rama, maxilar, y la tercera, mandibular: la mejilla, el ala de la nariz, el labio, la encía y la arcada dental. Por eso muchos pacientes llegan primero al dentista.' },
        ] },
        { title: 'El sello diagnóstico', tag: 'Zonas gatillo', kind: 'criteria', items: [
          { t: 'Lo gatilla un estímulo inocuo', d: 'Lavarse la cara, afeitarse, cepillarse, masticar, brisa',
            say: 'El sello es el gatillo: un estímulo inocuo sobre una zona gatillo. Lavarse la cara, afeitarse, cepillarse los dientes, hablar, masticar, o incluso una brisa de aire frío.' },
          { t: 'Inmóvil, sin síntomas autonómicos', d: 'Asintomático entre crisis',
            say: 'Entre crisis el paciente está asintomático. Y durante la crisis se queda inmóvil, con miedo a tocarse o hablar, al revés que el paciente con racimos. No hay lagrimeo ni rinorrea notorios.' },
        ] },
        { title: 'Sospecha secundaria', tag: 'Ojo', kind: 'alert', items: [
          { t: 'Solo V1 en menos del 5 %', d: 'Primera rama aislada: buscar causa',
            say: 'Y ojo con esto. El compromiso aislado de la primera rama, la oftálmica, ocurre en menos del cinco por ciento. Si aparece, o si es bilateral en una mujer joven, sospecha una causa secundaria, como la esclerosis múltiple.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Neuralgia del trigémino',
      title: 'Tratamiento: carbamazepina',
      cards: [
        { title: 'Primera línea', tag: 'Absoluta', kind: 'pharma', items: [
          { t: 'Carbamazepina 200–1.200 mg/día', d: 'Bloquea canales de sodio · alivia a más del 80 %',
            say: 'El tratamiento de la neuralgia es otro mundo. Los analgésicos, los AINE y los opioides no sirven. La primera línea absoluta es la carbamazepina, doscientos a mil doscientos miligramos al día. Bloquea los canales de sodio y estabiliza el axón que hacía cortocircuito, y alivia a más del ochenta por ciento.' },
          { t: 'Hemograma y natremia', d: 'Agranulocitosis, aplasia · hiponatremia por SIADH',
            say: 'Exige controles: hemograma seriado, por el riesgo de agranulocitosis y anemia aplásica, y sodio plasmático, por la hiponatremia por secreción inadecuada de hormona antidiurética.' },
          { t: 'Alternativa: oxcarbazepina', d: 'Segunda línea: baclofeno, lamotrigina, gabapentina',
            say: 'Si no la tolera, la oxcarbazepina es una alternativa mejor tolerada. De segunda línea quedan el baclofeno, la lamotrigina y la gabapentina.' },
        ] },
        { title: 'Refractaria', tag: 'Derivar a neurocirugía', kind: 'alert', items: [
          { t: 'Descompresión microvascular', d: 'Cirugía de Jannetta · éxito 80–90 %',
            say: 'Si es refractaria, o no tolera la carbamazepina, se deriva. La técnica curativa de elección es la descompresión microvascular, la cirugía de Jannetta: se separa el asa arterial del nervio con un parche de teflón. Trata la causa, con éxito sobre el ochenta a noventa por ciento, y preserva la sensibilidad.' },
          { t: 'Mayor o alto riesgo quirúrgico', d: 'Rizotomía percutánea, balón, Gamma Knife',
            say: 'En el paciente mayor o de alto riesgo quirúrgico, se usan técnicas percutáneas sobre el ganglio de Gasser, como la radiofrecuencia o la compresión con balón, o la radiocirugía con Gamma Knife.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diferencial',
      title: 'Otras cefaleas trigémino-autonómicas',
      cards: [
        { title: 'Hemicránea paroxística', tag: 'Prueba terapéutica', kind: 'key', items: [
          { t: 'Crisis de 2 a 30 minutos', d: 'Más frecuente en mujeres',
            say: 'Dos cuadros más completan el diferencial. La hemicránea paroxística se parece a los racimos, pero las crisis son más cortas, de dos a treinta minutos, y es más frecuente en mujeres.' },
          { t: 'Responde siempre a indometacina', d: 'La respuesta es diagnóstica',
            say: 'Y su clave es que responde de forma absoluta a la indometacina. Tanto, que la respuesta confirma el diagnóstico.' },
        ] },
        { title: 'SUNCT y SUNA', tag: 'Segundos con lagrimeo', kind: 'alert', items: [
          { t: 'Crisis de segundos', d: 'Con ojo rojo y lagrimeo prominente',
            say: 'El SUNCT y el SUNA dan crisis de segundos, como la neuralgia, pero con ojo rojo y lagrimeo prominentes. Por eso, una neuralgia con síntomas autonómicos notorios obliga a descartar un SUNCT o una masa.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol: la duración y el cortejo separan los cuadros, y cada uno tiene su fármaco.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Racimos vs neuralgia del trigémino',
      head: ['Parámetro', 'Cefalea en racimos', 'Neuralgia del trigémino'],
      rows: [
        { cells: ['Paciente', 'Hombre 20–50 años, fumador', 'Mayor de 50–60, más en mujeres'],
          say: 'Repasemos el diferencial que el examen pregunta. Los racimos son del hombre joven fumador. La neuralgia, del adulto mayor, más en mujeres, y bilateral si hay esclerosis múltiple.' },
        { cells: ['Duración', '15 a 180 minutos', 'Segundos a 2 minutos'],
          say: 'La duración: los racimos duran de quince minutos a tres horas; la neuralgia, segundos. Si la pregunta dice segundos, no es cluster.' },
        { cells: ['Localización', 'Periorbitaria y temporal', 'V2 y V3: mejilla, maxilar, mandíbula'],
          say: 'La localización: los racimos, detrás del ojo y en la sien; la neuralgia, en la mejilla, el maxilar y la mandíbula.' },
        { cells: ['Síntomas autonómicos', 'Obligatorios: lagrimeo, rinorrea, Horner', 'Ausentes'],
          say: 'Los síntomas autonómicos son obligatorios en los racimos y faltan en la neuralgia.' },
        { cells: ['Gatillante y conducta', 'Alcohol · agitación', 'Zonas gatillo · inmovilidad'],
          say: 'El gatillante: el alcohol en los racimos, el roce de una zona gatillo en la neuralgia. Y la conducta: agitación en uno, inmovilidad en el otro.' },
        { cells: ['Crisis aguda', 'Oxígeno 100 % + sumatriptán SC', 'Analgésicos y triptanes inútiles'],
          say: 'En la crisis, los racimos responden al oxígeno con sumatriptán subcutáneo. En la neuralgia, los analgésicos y los triptanes no sirven.' },
        { cells: ['Mantención', 'Verapamilo (puente: prednisona)', 'Carbamazepina; si refractaria, Jannetta'],
          say: 'Y la mantención: verapamilo en los racimos, con prednisona de puente; carbamazepina en la neuralgia, y si es refractaria, la cirugía de Jannetta.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 36 años, fumador de 20 cigarrillos al día, llega a urgencias a las 02:30 por dolor periorbitario y temporal derecho atroz que lo despertó hace 40 minutos. Camina agitado por el box y se golpea la sien. Presenta lagrimeo, inyección conjuntival y rinorrea derechos, con ptosis y miosis derechas. Hace dos semanas tiene el mismo dolor cada noche, a la misma hora.',
      question: '¿Cuál es la conducta inmediata más adecuada?',
      options: [
        { letter: 'A', text: 'Paracetamol 1 g más ketoprofeno oral' },
        { letter: 'B', text: 'Oxígeno al 100% por mascarilla con reservorio a 12–15 L/min más sumatriptán 6 mg SC' },
        { letter: 'C', text: 'Carbamazepina 200 mg oral' },
        { letter: 'D', text: 'TAC de encéfalo sin contraste y punción lumbar' },
        { letter: 'E', text: 'Sumatriptán 100 mg oral y reposo a oscuras' },
      ],
      correct: 'B',
      explanation: 'Cefalea en racimos: hombre joven fumador, dolor periorbitario unilateral de 40 minutos a la misma hora cada noche, con agitación y cortejo autonómico ipsilateral (lagrimeo, rinorrea, Horner transitorio). Se trata con oxígeno al 100% a alto flujo más sumatriptán subcutáneo. Los fármacos orales son inútiles por su absorción lenta; la carbamazepina es de la neuralgia del trigémino.',
      say: {
        stem: 'Vamos con un caso. Hombre de treinta y seis años, fumador de veinte cigarrillos al día, llega a urgencias a las dos y media de la madrugada. Un dolor atroz detrás del ojo derecho lo despertó hace cuarenta minutos. Camina agitado y se golpea la sien. Tiene lagrimeo, ojo rojo y rinorrea del lado derecho, con ptosis y miosis. Hace dos semanas le pasa cada noche a la misma hora.',
        question: '¿Cuál es la conducta inmediata más adecuada?',
        options: 'Las opciones: paracetamol con ketoprofeno; oxígeno al cien por ciento con reservorio más sumatriptán subcutáneo; carbamazepina oral; TAC y punción lumbar; o sumatriptán oral y reposo a oscuras. Piénsalo.',
        answer: 'Es la B. Hombre joven fumador, dolor orbitario de cuarenta minutos a la misma hora cada noche, agitación y un cortejo autonómico completo del mismo lado: cefalea en racimos. Se trata con oxígeno a alto flujo más sumatriptán subcutáneo. La E tienta, porque tiene un triptán, pero oral es demasiado lento, y el reposo a oscuras es de la migraña. La carbamazepina es de la neuralgia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: '¿Cuál de las siguientes asociaciones entre cuadro clínico y patología es INCORRECTA?',
      question: 'Seleccione la asociación incorrecta:',
      options: [
        { letter: 'A', text: 'Cefalea temporoccipital, recurrente, opresiva – Cefalea tensional' },
        { letter: 'B', text: 'Cefalea hemicránea, pulsátil, recurrente – Jaqueca' },
        { letter: 'C', text: 'Cefalea progresiva, matinal, con signos focales – Tumor cerebral' },
        { letter: 'D', text: 'Dolor neurálgico en la mejilla, muy intenso, de segundos de duración – Cluster' },
        { letter: 'E', text: 'Cefalea muy intensa, de inicio súbito – Hemorragia subaracnoídea' },
      ],
      correct: 'D',
      explanation: 'Un dolor neurálgico en la mejilla, de segundos, es neuralgia del trigémino (V2). El cluster es periorbitario, dura 15 a 180 minutos y se acompaña de síntomas autonómicos ipsilaterales. Las demás asociaciones son correctas.',
      say: {
        stem: 'Ahora una pregunta del banco EUNACOM, porque el banco de preguntas reales no trae una de cefalea en racimos. Te preguntan cuál de estas asociaciones entre cuadro clínico y diagnóstico es incorrecta.',
        question: '¿Cuál es la asociación incorrecta?',
        options: 'Las opciones: cefalea opresiva temporooccipital, tensional; hemicránea pulsátil recurrente, jaqueca; cefalea progresiva matinal con signos focales, tumor; dolor neurálgico en la mejilla de segundos, cluster; y cefalea súbita muy intensa, hemorragia subaracnoidea. Piénsalo.',
        answer: 'Es la D. Dolor neurálgico en la mejilla, que dura segundos, es la neuralgia del trigémino, en la segunda rama. El cluster es alrededor del ojo, dura de quince minutos a tres horas y trae lagrimeo y rinorrea. Si recuerdas solo la duración, ya tienes la respuesta. Las otras cuatro están bien asociadas, y repasan lo que vimos en la clase pasada.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 25',
      stem: 'Un paciente de 37 años consulta por dolor en la mandíbula inferior de segundos de duración, muy intenso, EVA 9/10, que se gatilla al comer y al lavarse los dientes. El dolor se ubica en la mitad izquierda de la mandíbula y en la arcada dental inferior izquierda. El examen físico no aporta mayor información.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Neuralgia del trigémino' },
        { letter: 'B', text: 'Cefalea cluster' },
        { letter: 'C', text: 'Jaqueca clásica' },
        { letter: 'D', text: 'Jaqueca complicada' },
        { letter: 'E', text: 'Disfunción de la articulación temporomandibular' },
      ],
      correct: 'A',
      explanation: 'Dolor de segundos, muy intenso, en el territorio mandibular (V3), gatillado al comer y lavarse los dientes: neuralgia del trigémino. La disfunción temporomandibular da dolor sordo y mantenido al masticar, sin paroxismos eléctricos gatillados por el roce.',
      say: {
        stem: 'Ahora las preguntas reales. La primera, del EUNACOM de julio de dos mil quince. Paciente de treinta y siete años con un dolor de segundos, muy intenso, en la mitad izquierda de la mandíbula y la arcada dental inferior. Se gatilla al comer y al lavarse los dientes. El examen no aporta más.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: neuralgia del trigémino, cefalea cluster, jaqueca clásica, jaqueca complicada, o disfunción de la articulación temporomandibular. Piénsalo.',
        answer: 'Es la A. Segundos de dolor intenso, en la tercera rama, la mandibular, gatillado al comer y cepillarse: neuralgia del trigémino. La articulación temporomandibular tienta por la mandíbula y la masticación, pero da un dolor sordo y mantenido, no descargas de segundos gatilladas por el roce.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 28',
      stem: 'Una paciente de 55 años consulta por dolor facial de 3 meses de evolución, de carácter lancinante, que afecta la mejilla y el ala nasal derechas, además del labio superior y la arcada dental del lado derecho. El dolor es muy intenso y se desencadena ante acciones como tocarse la cara, lavarse los dientes y comer, en incluso por una brisa suave. El dolor dura solo unos pocos segundos, sin embargo, su intensidad es muy alta, con EVA 10/10.',
      question: '¿Cuál es el fármaco de elección para iniciar el tratamiento?',
      options: [
        { letter: 'A', text: 'Pregabalina' },
        { letter: 'B', text: 'Amitriptilina' },
        { letter: 'C', text: 'Venlafaxina' },
        { letter: 'D', text: 'Carbamazepina' },
        { letter: 'E', text: 'Tramadol' },
      ],
      correct: 'D',
      explanation: 'Neuralgia del trigémino clásica en V2 (mejilla, ala nasal, labio superior, arcada superior), gatillada por el roce y la brisa. El fármaco de elección es la carbamazepina. La pregabalina es de primera línea en la neuralgia postherpética, no en la del trigémino.',
      say: {
        stem: 'La segunda, del EUNACOM de diciembre de dos mil veinticinco. Mujer de cincuenta y cinco años con tres meses de dolor lancinante en la mejilla, el ala nasal, el labio superior y la arcada dental derechos. Lo gatilla tocarse la cara, lavarse los dientes, comer, o una brisa suave. Dura segundos, pero es diez de diez.',
        question: '¿Cuál es el fármaco de elección para iniciar el tratamiento?',
        options: 'Las opciones: pregabalina, amitriptilina, venlafaxina, carbamazepina, o tramadol. Piénsalo.',
        answer: 'Es la D, carbamazepina. Es una neuralgia del trigémino de libro, en la segunda rama, y la carbamazepina es la primera línea absoluta. La pregabalina es el distractor más tentador, porque es un fármaco del dolor neuropático, pero es la primera línea de la neuralgia postherpética, no de la del trigémino. Y el tramadol, como todo analgésico, no sirve aquí.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 104',
      stem: 'Una paciente de 30 años presenta un cuadro de un mes de evolución de neuralgia de la primera rama del trigémino. Hace una semana se agrega disminución de la sensibilidad del muslo derecho, con dificultades para caminar. Como antecedente, refiere que hace un año tuvo un trastorno del equilibrio, que resolvió espontáneamente.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Polineuropatía por déficit de vitamina B12' },
        { letter: 'B', text: 'Síndrome de Guillain Barré de presentación atípica' },
        { letter: 'C', text: 'Infarto talámico' },
        { letter: 'D', text: 'Esclerosis múltiple' },
        { letter: 'E', text: 'Neurinoma con compresión del troncoencéfalo' },
      ],
      correct: 'D',
      explanation: 'Mujer joven con neuralgia de la primera rama (atípica, sugiere causa secundaria), más un déficit sensitivo nuevo y un episodio previo de desequilibrio que remitió: lesiones en distintos sitios y momentos. Es una esclerosis múltiple, causa clásica de neuralgia del trigémino secundaria.',
      say: {
        stem: 'Y la última, del EUNACOM de julio de dos mil diecinueve. Mujer de treinta años con un mes de neuralgia de la primera rama del trigémino. Hace una semana se agrega menos sensibilidad en el muslo derecho, con dificultad para caminar. Y hace un año tuvo un trastorno del equilibrio que se resolvió solo.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: polineuropatía por déficit de vitamina B doce, Guillain-Barré atípico, infarto talámico, esclerosis múltiple, o neurinoma que comprime el tronco. Piénsalo.',
        answer: 'Es la D, esclerosis múltiple. Primero, una neuralgia de la primera rama en una mujer joven ya es rara, y te obliga a buscar una causa secundaria. Segundo, hay lesiones en distintos lugares y en distintos momentos, con un episodio que remitió. El neurinoma también da neuralgia secundaria, pero no explica un desequilibrio que se fue solo ni el muslo.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Cefalea en racimos', tag: 'Minutos', kind: 'key', items: [
          { t: 'Hombre fumador, dolor orbitario nocturno', d: '15–180 min, lagrimeo, rinorrea, Horner, agitación',
            say: 'Cerremos con las reglas de oro. Hombre joven fumador, dolor detrás de un ojo de quince minutos a tres horas, a la misma hora cada noche, con lagrimeo, rinorrea y Horner del mismo lado, y agitado: cefalea en racimos.' },
          { t: 'Oxígeno 100 % + sumatriptán SC', d: 'Prevención: verapamilo',
            say: 'La crisis se trata con oxígeno al cien por ciento y sumatriptán subcutáneo, y se previene con verapamilo.' },
        ] },
        { title: 'Neuralgia del trigémino', tag: 'Segundos', kind: 'pharma', items: [
          { t: 'Descarga eléctrica en V2–V3', d: 'Zonas gatillo, inmóvil, sin cortejo',
            say: 'Descargas eléctricas de segundos en la mejilla o la mandíbula, gatilladas por tocarse la cara, sin cortejo autonómico: neuralgia del trigémino.' },
          { t: 'Carbamazepina; si falla, Jannetta', d: 'Controlar hemograma y sodio',
            say: 'El tratamiento es la carbamazepina, con hemograma y sodio de control, y si es refractaria, la descompresión microvascular.' },
        ] },
        { title: 'Sospecha secundaria', tag: 'Ojo', kind: 'alert', items: [
          { t: 'V1 aislada o bilateral en mujer joven', d: 'Buscar esclerosis múltiple',
            say: 'Primera rama aislada, o bilateral en una mujer joven: busca esclerosis múltiple. Si te llevas una sola idea de hoy: minutos con lagrimeo es racimo y va con oxígeno; segundos al tocarse la cara es neuralgia y va con carbamazepina. Y la carbamazepina nos sirve de puente a la epilepsia. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Cefalea en racimos y neuralgia del trigémino',
    root: N('start', 'Dolor facial o craneal unilateral atroz', 'Paroxístico, recurrente',
      'Paciente con un dolor unilateral atroz y recurrente, de la cara o alrededor del ojo.',
      ['', N('q', '¿Cuánto dura cada crisis?', 'Minutos u horas vs segundos',
        'La primera pregunta es la duración de cada crisis.',
        ['15–180 min', N('q', '¿Síntomas autonómicos ipsilaterales?', 'Lagrimeo, rinorrea, Horner',
          'Si dura de quince minutos a tres horas, busca el cortejo autonómico del mismo lado: lagrimeo, rinorrea, ptosis y miosis.',
          ['SÍ, con agitación', N('do', 'Cefalea en racimos', 'O2 100 % 12–15 L/min + sumatriptán SC',
            'Con agitación y periodicidad: cefalea en racimos. Oxígeno al cien por ciento a alto flujo y sumatriptán subcutáneo.',
            ['', N('ok', 'Prevención con verapamilo', 'Puente con prednisona · ECG',
              'Y durante el racimo, verapamilo con control electrocardiográfico, usando prednisona como puente.')])],
          ['2–30 min, mujer', N('refer', 'Hemicránea paroxística', 'Prueba con indometacina',
            'Si las crisis son más cortas, en una mujer, piensa en hemicránea paroxística: responde a indometacina.')])],
        ['Segundos', N('q', '¿Gatillo táctil en V2–V3, sin cortejo?', 'Lavarse, afeitarse, masticar',
          'Si dura segundos, ¿es una descarga en la segunda o tercera rama, gatillada al tocarse la cara y sin lagrimeo?',
          ['SÍ', N('do', 'Neuralgia del trigémino', 'Carbamazepina · hemograma y sodio',
            'Es una neuralgia del trigémino. Carbamazepina, con controles de hemograma y sodio.',
            ['Refractaria', N('refer', 'Descompresión microvascular', 'Cirugía de Jannetta',
              'Si es refractaria o no la tolera, se deriva a neurocirugía para la descompresión microvascular.')])],
          ['V1 aislada o bilateral', N('alert', 'Descartar causa secundaria', 'Esclerosis múltiple, tumor del ángulo',
            'Si compromete solo la primera rama, es bilateral en una mujer joven, o tiene síntomas autonómicos notorios, descarta una causa secundaria: esclerosis múltiple, un tumor del ángulo pontocerebeloso, o un SUNCT.')])])]),
  },
};
