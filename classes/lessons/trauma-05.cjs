// Clase 12.5 (Traumatología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_traumatologia.cjs (trauma-05). Preguntas: banco real EUNACOM (class_questions.cjs --search).
// El libro no trae clasificación Tile / Young-Burgess aunque el título la anuncia: no se inventa. Se enseña lo que el libro desarrolla
// (politrauma, ABCDE, trilogía radiográfica, fractura de pelvis, shock hipovolémico, sección uretral).
// Del libro no se enseña el pantalón antichoque como método de estabilización (obsoleto); ver notas de revisión.
// La "trilogía radiográfica" no tiene pregunta en el banco real: se usa un caso del libro rotulado "Caso representativo".

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'trauma-05',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Politraumatizado y fractura de pelvis: ABCDE, shock hipovolémico y estabilización precoz',
      say: 'Bienvenido. Hoy entramos al trauma grave. La fractura de pelvis es una de las lesiones que más mata por hemorragia, y por eso se pregunta mucho, pero siempre dentro de un contexto: un paciente politraumatizado. Vamos a ver primero el orden con que se atiende, después qué haces ante una pelvis inestable con shock, y al final una complicación clásica: la sección de la uretra.',
    },

    {
      type: 'points',
      kicker: 'Concepto',
      title: 'Qué es un politraumatizado',
      cards: [
        { title: 'Definición', tag: 'Riesgo vital', kind: 'key', items: [
          { t: 'Lesión de al menos tres sistemas', d: 'Por ejemplo digestivo, urinario y locomotor',
            say: 'Se llama politraumatizado al paciente con lesiones en al menos tres sistemas, por ejemplo digestivo, urinario y locomotor, o con tres o más órganos de sistemas distintos afectados, de modo que la vida corre riesgo.' },
          { t: 'Prima la vida sobre lo llamativo', d: 'La lesión evidente no es la más letal',
            say: 'La regla es sistemática: manda la estabilidad vital. Una fractura muy visible puede distraerte de la lesión que de verdad mata.' },
        ] },
        { title: 'Causas en Chile', tag: 'Epidemiología', kind: 'criteria', items: [
          { t: 'Accidentes de tránsito', d: 'La principal; atropello en carretera, el más letal',
            say: 'La causa principal son los accidentes de tránsito. Los atropellos son los más letales, y más aún los que ocurren en carretera, seguidos por los de ciudad.' },
          { t: 'Caídas de altura y agresiones', d: 'Arma blanca o de fuego',
            say: 'Después vienen las caídas de altura, frecuentes en el trabajo, y las agresiones con arma blanca o de fuego.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Evaluación inicial',
      title: 'El ABCDE del trauma',
      nodes: [
        { id: 'a', col: 0, row: 0, k: 'start', t: 'A: vía aérea y collar', s: 'Permeable y columna protegida' },
        { id: 'b', col: 1, row: 1, k: 'mech', t: 'B: ventilación', s: 'Ambú o ventilación mecánica' },
        { id: 'c', col: 2, row: 2, k: 'alert', t: 'C: circulación', s: 'Comprimir, dos vías, volumen' },
        { id: 'd', col: 3, row: 1, k: 'effect', t: 'D: déficit neurológico', s: 'Glasgow y pupilas' },
        { id: 'e', col: 4, row: 0, k: 'good', t: 'E: exposición', s: 'Desvestir y evitar hipotermia' },
      ],
      edges: [
        { from: 'a', to: 'b' },
        { from: 'b', to: 'c' },
        { from: 'c', to: 'd' },
        { from: 'd', to: 'e' },
      ],
      steps: [
        { show: ['a', 'b'], note: 'No avanzas sin resolver la letra anterior',
          say: 'El orden es estricto y no avanzas al siguiente paso sin haber resuelto el anterior. En la A aseguras la vía aérea y colocas el collar cervical. En la B te aseguras de que el paciente ventile, con ambú o ventilación mecánica si hace falta.' },
        { show: ['c'], note: 'Primero se detiene la pérdida de sangre',
          say: 'En la C, circulación, instalas dos vías venosas gruesas, repones volumen y comprimes las hemorragias externas. Una pregunta clásica: si tienes que elegir entre comprimir una hemorragia activa o instalar la vía, primero comprimes, para dejar de perder volemia.' },
        { show: ['d', 'e'], note: 'Neurológico y exposición completa',
          say: 'En la D haces un examen neurológico: escala de Glasgow y pupilas, para descartar lesión medular o traumatismo encefálico. Y en la E desvistes al paciente por completo para buscar lesiones ocultas, cuidando que no se enfríe.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Columna y radiología',
      title: 'Collar y trilogía radiográfica',
      cards: [
        { title: 'Columna cervical', tag: 'Siempre', kind: 'alert', items: [
          { t: 'Lesión cervical hasta demostrar lo contrario', d: 'Todo politraumatizado lleva collar',
            say: 'La A no es solo que pase el aire: también es proteger la médula. Todo politraumatizado se considera portador de una lesión de columna cervical hasta que se demuestre lo contrario. Por eso lleva collar desde el inicio.' },
          { t: 'Radiografía lateral normal no basta', d: 'Con sospecha, se completa con TAC',
            say: 'Ojo con confiarte: una radiografía lateral normal puede no mostrar una lesión, sobre todo en la unión cervicotorácica. Si hay sospecha, se completa el estudio con tomografía y el collar se mantiene.' },
        ] },
        { title: 'Trilogía radiográfica', tag: 'Siempre, aunque no haya síntomas', kind: 'key', items: [
          { t: 'Columna cervical lateral', d: 'Busca fracturas o luxaciones',
            say: 'En todo politraumatizado, aunque la clínica sea escasa, se piden tres radiografías. Primero, columna cervical lateral, para buscar fracturas o luxaciones que comprometan la médula.' },
          { t: 'Tórax AP', d: 'Neumotórax, hemotórax, contusión',
            say: 'Segundo, tórax anteroposterior, para neumotórax, hemotórax o contusión pulmonar.' },
          { t: 'Pelvis AP', d: 'Fractura que sangra mucho',
            say: 'Y tercero, pelvis anteroposterior, fundamental para detectar una fractura de pelvis, que puede causar una hemorragia masiva. Además, pides radiografías de la zona que sospeches por el mecanismo o por una deformidad.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Fractura de pelvis',
      title: 'Evaluar la pelvis sin empeorarla',
      cards: [
        { title: 'Qué es', tag: 'Alta energía', kind: 'alert', items: [
          { t: 'Lesión de alta energía', d: 'Mortalidad elevada',
            say: 'La fractura de pelvis aparece en el contexto de un politraumatizado. Es una lesión de alta energía, con mortalidad elevada por sus complicaciones vasculares y viscerales.' },
        ] },
        { title: 'Examen específico', tag: 'Además del ABCDE', kind: 'key', items: [
          { t: 'Tacto rectal y vaginal', d: 'Descartar fractura expuesta a mucosa',
            say: 'Además del ABCDE, es obligatorio el tacto rectal y vaginal. Buscas que la fractura esté expuesta hacia el recto o la vagina. Si es así, necesita antibióticos y cirugía de urgencia.' },
          { t: 'No repetir maniobras de estabilidad', d: 'Pueden romper coágulos y reactivar sangrado',
            say: 'Para la estabilidad pélvica, el dolor a la compresión y a la rotación de la pelvis orienta a fractura. Pero no repitas estas maniobras: puedes romper los coágulos ya formados y reactivar una hemorragia venosa masiva.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Complicación grave 1',
      title: 'Shock hipovolémico pelviano',
      nodes: [
        { id: 'fx', col: 0, row: 1, k: 'cause', t: 'Fractura de pelvis inestable', s: 'Pelvis abierta, como libro' },
        { id: 've', col: 1, row: 1, k: 'mech', t: 'Sangran los plexos venosos', s: 'A veces también arterias' },
        { id: 'sh', col: 2, row: 0, k: 'alert', t: 'Shock hipovolémico', s: 'Primera causa de muerte inmediata' },
        { id: 'es', col: 2, row: 2, k: 'good', t: 'Estabilizar la pelvis', s: 'Cierra el espacio, frena el sangrado' },
        { id: 'vo', col: 3, row: 2, k: 'good', t: 'Reponer volumen', s: 'Dentro del ABC' },
      ],
      edges: [
        { from: 'fx', to: 've' },
        { from: 've', to: 'sh' },
        { from: 've', to: 'es' },
        { from: 'es', to: 'vo' },
      ],
      steps: [
        { show: ['fx', 've'], note: 'El sangrado es sobre todo venoso',
          say: 'Esta es la causa principal de muerte inmediata. Cuando la pelvis se rompe y se abre, como un libro, aumenta el espacio donde puede acumularse sangre. Y el sangrado viene sobre todo de los plexos venosos pélvicos, aunque también puede haber compromiso arterial.' },
        { show: ['sh'], note: 'Es una urgencia vital',
          say: 'El resultado es un shock hipovolémico: paciente hipotenso, taquicárdico, que se te puede ir en minutos.' },
        { show: ['es', 'vo'], note: 'Cerrar la pelvis y reponer',
          say: 'El manejo tiene dos partes: reponer volumen y estabilizar precozmente la pelvis. Al cerrar el anillo se reduce el espacio y se frena la hemorragia venosa. Si la pérdida es masiva, necesitarás sangre, como veremos en una pregunta real.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Estabilización',
      title: 'Cómo cerrar la pelvis',
      cards: [
        { title: 'Medios de estabilización', tag: 'Según los recursos', kind: 'key', items: [
          { t: 'Sábana pélvica', d: 'Apretada sobre los trocánteres mayores',
            say: 'La sábana pélvica es la solución en atención primaria o donde no hay recursos. Enrollas una sábana y la aprietas alrededor de los trocánteres mayores, para cerrar el espacio de la pelvis. Es lo que más se pregunta.' },
          { t: 'Hamaca pélvica', d: 'Alternativa simple de campo',
            say: 'La hamaca pélvica cumple la misma idea: contener y comprimir la pelvis desde afuera.' },
          { t: 'Tutores externos', d: 'Dispositivo quirúrgico',
            say: 'Los tutores externos son la opción quirúrgica, para la estabilización definitiva de la pelvis desde afuera.' },
        ] },
        { title: 'Qué no hacer', tag: 'Trampas', kind: 'alert', items: [
          { t: 'No perder tiempo en imágenes', d: 'Con shock, primero estabilizar',
            say: 'Si el paciente está hipotenso y la pelvis duele al comprimirla, no pierdes tiempo en una tomografía antes de actuar. Primero cierras la pelvis y repones volumen.' },
          { t: 'No sondear sin descartar uretra', d: 'Es lo que sigue',
            say: 'Y no instales una sonda Foley antes de descartar una lesión de la uretra, que es la complicación que vemos ahora.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Complicación grave 2',
      title: 'Sección uretral',
      cards: [
        { title: 'Sospecha', tag: 'Fractura de la sínfisis', kind: 'alert', items: [
          { t: 'Típica del libro abierto', d: 'Fractura de la sínfisis del pubis',
            say: 'La sección de la uretra es frecuente en las fracturas de la sínfisis del pubis, las lesiones en libro abierto.' },
          { t: 'Sangre en meato, próstata flotante', d: 'Más globo vesical',
            say: 'Sospechas por sangre en el meato urinario, una próstata flotante o ascendida al tacto rectal, y un globo vesical: el paciente no puede orinar.' },
        ] },
        { title: 'Diagnóstico y conducta', tag: 'Contraindicación absoluta', kind: 'key', items: [
          { t: 'Uretrocistografía retrógrada', d: 'Es el examen diagnóstico',
            say: 'El diagnóstico se hace con uretrocistografía retrógrada.' },
          { t: 'Prohibida la sonda Foley', d: 'Falsa vía y más daño',
            say: 'Ojo con la contraindicación absoluta: no se instala sonda Foley, porque puede agravar la lesión o crear una falsa vía.' },
          { t: 'Cistostomía suprapúbica', d: 'Drena el globo vesical',
            say: 'Si hay globo vesical, el manejo inicial es una cistostomía suprapúbica. Después viene la reparación quirúrgica de la uretra.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'gallery',
      kicker: 'Así se ve',
      title: 'Pelvis cerrada y uretra lesionada',
      images: [
        { src: 'biblioteca/18_traumatologia/trauma-05/01_pelvis-antes-de-faja__atls_p150.jpg', label: 'Pelvis fracturada antes de colocar la faja pélvica', credit: 'ATLS 10.ª ed., Fig. 5-9C' },
        { src: 'biblioteca/18_traumatologia/trauma-05/02_pelvis-despues-de-faja__atls_p150.jpg', label: 'La misma pelvis después de colocar la faja', credit: 'ATLS 10.ª ed., Fig. 5-9D' },
        { src: 'biblioteca/18_traumatologia/trauma-05/03_sabana-pelvica__atls_p150.jpg', label: 'Estabilización de la pelvis con una sábana', credit: 'ATLS 10.ª ed., Fig. 5-9B' },
        { src: 'biblioteca/18_traumatologia/trauma-05/04_uretrografia-lesion-uretral__bailey-love_p227.jpg', label: 'Uretrografía retrógrada: contraste que se escapa (flecha)', credit: 'Bailey & Love 27.ª ed., Fig. 14.28' },
      ],
      steps: [
        { note: 'Antes: la pelvis abierta',
          say: 'Esta es una radiografía de pelvis de un paciente con una lesión inestable, antes de colocar la faja pélvica. Fíjate en cómo las alas ilíacas están separadas y la pelvis se ve ancha: ese es el espacio donde se acumula la sangre.' },
        { note: 'Después: el anillo se cierra',
          say: 'Y esta es la misma pelvis después de la faja. El anillo se ve más cerrado. Eso es lo que buscas en la práctica: reducir el volumen pélvico para frenar el sangrado venoso.' },
        { note: 'Sábana: el recurso sin material',
          say: 'Cuando no hay faja comercial, la idea es la misma con una sábana enrollada y apretada. Es la solución que el examen espera en atención primaria o en lugares sin recursos.' },
        { note: 'Uretra: el contraste se extravasa',
          say: 'Y esta es una uretrografía retrógrada en un paciente con fracturas extensas de pelvis. La flecha marca la zona donde el contraste se escapa fuera de la uretra: es una lesión uretral. Por eso nunca pasas una sonda a ciegas.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Pelvis: lo urgente y lo prohibido',
      head: ['Situación', 'Haces', 'No haces'],
      rows: [
        { cells: ['Pelvis inestable con shock', 'Volumen y estabilizar pelvis', 'TAC antes de actuar'],
          say: 'Esta tabla resume las trampas. Pelvis inestable con shock: reposición de volumen y estabilización de la pelvis, por ejemplo con sábana. No esperas una tomografía.' },
        { cells: ['Sangre en meato, próstata alta', 'Uretrocistografía y cistostomía', 'Sonda Foley'],
          say: 'Sangre en el meato y próstata ascendida: uretrocistografía retrógrada y cistostomía suprapúbica. Nunca sonda Foley.' },
        { cells: ['Hemorragia externa', 'Comprimir primero', 'Buscar vía antes'],
          say: 'Hemorragia externa activa: comprimes primero, antes de instalar la vía venosa.' },
        { cells: ['Politrauma, cualquier estabilidad', 'Cuello, tórax y pelvis', 'Solo tórax si está estable'],
          say: 'Y en el politraumatizado, aunque esté estable, pides las tres radiografías: cuello lateral, tórax y pelvis.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol completo: del politraumatizado con dolor pélvico al shock, la uretra y las radiografías.',
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Un paciente de 30 años, hemodinámicamente estable, ingresa tras un accidente de tránsito con una fractura de pelvis confirmada por radiografía. Al hacer el tacto rectal, el dedo sale con sangre y se palpa un fragmento óseo que protruye a la luz del recto.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Manejo ortopédico con reposo en cama' },
        { letter: 'B', text: 'Antibióticos y cirugía de urgencia' },
        { letter: 'C', text: 'Instalar una sonda Foley' },
        { letter: 'D', text: 'Observación y repetir el tacto rectal en 24 horas' },
        { letter: 'E', text: 'Solo analgesia y control en el policlínico' },
      ],
      correct: 'B',
      explanation: 'El tacto rectal y vaginal busca una fractura expuesta hacia la mucosa. Si la fractura comunica con el recto, es una fractura expuesta de la pelvis y requiere antibióticos y cirugía de urgencia.',
      say: {
        stem: 'Un paciente de treinta años, estable hemodinámicamente, tras un accidente de tránsito, con una fractura de pelvis en la radiografía. Al tacto rectal, el dedo sale con sangre y se palpa un fragmento óseo dentro del recto.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: manejo ortopédico con reposo; antibióticos y cirugía de urgencia; sonda Foley; observar y repetir el tacto en veinticuatro horas; o solo analgesia y control. Piénsalo.',
        answer: 'Es la B. Para eso se hace el tacto rectal y vaginal: para descartar una fractura expuesta hacia la mucosa. Si el hueso comunica con el recto, es una fractura expuesta, y se trata con antibióticos y cirugía de urgencia. Reposo, analgesia u observar la dejan sin tratamiento. Y la sonda Foley no corresponde en una fractura de pelvis.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 51',
      stem: 'Un paciente de 28 años sufre un accidente de tránsito de alta intensidad, por lo que es trasladado al servicio de urgencia. En la evaluación inicial tiene presión arterial de 90/50 mmHg, frecuencia cardíaca 115x’ y se aprecia adolorido. Al examen, además, tiene dolor intenso al comprimir la zona iliaca y púbica y al realizar movimientos de rotación de la pelvis.',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Instalar sonda Foley' },
        { letter: 'B', text: 'Realizar laparotomía exploradora' },
        { letter: 'C', text: 'Realizar radiografía AP de pelvis' },
        { letter: 'D', text: 'Instalar sábana pélvica' },
        { letter: 'E', text: 'Solicitar TAC de pelvis' },
      ],
      correct: 'D',
      explanation: 'Tiene una probable fractura de pelvis, pero por tener compromiso hemodinámico, lo más urgente es poner una vía venosa, administrar fluidos y estabilizar la pelvis (por ejemplo con una sábana pélvica).',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil dieciocho. Un paciente de veintiocho años tras un accidente de tránsito de alta intensidad, con presión de noventa sobre cincuenta, pulso de ciento quince y dolor intenso al comprimir la zona ilíaca y púbica y al rotar la pelvis.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: sonda Foley; laparotomía exploradora; radiografía de pelvis; sábana pélvica; o tomografía de pelvis. Piénsalo.',
        answer: 'Es la D. Tiene una probable fractura de pelvis y ya hay compromiso hemodinámico, así que lo urgente es acceso venoso, volumen y estabilizar la pelvis, por ejemplo con una sábana. La radiografía y la tomografía confirman, pero no frenan el sangrado. Y la sonda Foley es la trampa: puede haber lesión de uretra.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 102',
      stem: 'Una paciente de 56 años ingresa al servicio de urgencias tras sufrir un accidente automovilístico de alta energía. Presenta múltiples lesiones, hemorragia masiva, taquicardia, hipotensión e inestabilidad hemodinámica. Se sospecha una fractura de pelvis en el examen físico. Se solicitan imágenes, entre las que se informan una TAC cerebral con un hematoma subdural izquierdo con desplazamiento de 11 mm desde la línea media de la masa encefálica; una TAC de tórax revela múltiples fracturas costales, neumotórax izquierdo con desplazamiento de la tráquea hacia la derecha; TAC de abdomen y pelvis con fractura de pelvis desplazada.',
      question: '¿Cuál de las siguientes medidas terapéuticas es la más urgente?',
      options: [
        { letter: 'A', text: 'Intubación orotraqueal' },
        { letter: 'B', text: 'Laparotomía exploradora' },
        { letter: 'C', text: 'Evacuación quirúrgica del hematoma subdural' },
        { letter: 'D', text: 'Pleurostomía izquierda' },
        { letter: 'E', text: 'Estabilización de la fractura de pelvis con un dispositivo de compresión neumática' },
      ],
      correct: 'D',
      explanation: 'El paciente presenta múltiples lesiones, pero la más urgente de atender es un neumotórax a tensión (desplazamiento de la tráquea e hipotensión arterial). En este contexto, la pleurostomía se presenta como el procedimiento más urgente.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticuatro. Una paciente de cincuenta y seis años tras un accidente de alta energía, con hemorragia masiva e hipotensión. Hay sospecha de fractura de pelvis. La tomografía muestra un hematoma subdural con desviación de la línea media, múltiples fracturas costales, un neumotórax izquierdo con la tráquea desviada a la derecha, y una fractura de pelvis desplazada.',
        question: '¿Cuál es la medida más urgente?',
        options: 'Las opciones: intubación; laparotomía; evacuar el hematoma subdural; pleurostomía izquierda; o estabilizar la pelvis con un dispositivo de compresión neumática. Piénsalo.',
        answer: 'Es la D. Tiene muchas lesiones graves, pero la más urgente es el neumotórax a tensión: tráquea desviada e hipotensión. El orden ABCDE manda: lo que compromete la ventilación, la B, va antes que la pelvis, que es la C. Por eso el examen mezcla todo, para ver si respetas las prioridades.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 43',
      stem: 'Un paciente de 46 años presenta un accidente, resultando con una fractura de pelvis. Presenta dolor y salida de sangre fresca por la uretra. Además se palpa la próstata ascendida en el tacto rectal y no ha podido orinar.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Pedir un TAC de abdomen y pelvis' },
        { letter: 'B', text: 'Solicitar resonancia magnética' },
        { letter: 'C', text: 'Realizar cistoscopía' },
        { letter: 'D', text: 'Instalar sonda Foley' },
        { letter: 'E', text: 'Instalar cistostomía' },
      ],
      correct: 'E',
      explanation: 'Es una sección uretral. Está contraindicada la sonda Foley y Nelaton. Se instala cistostomía. Se estudia con uretrocistografía retrógrada y no con los exámenes que ahí aparecían. Se resuelve luego con cirugía.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil quince. Un paciente de cuarenta y seis años con fractura de pelvis tras un accidente. Tiene dolor, sangre fresca por la uretra, próstata ascendida al tacto rectal y no ha podido orinar.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: tomografía de abdomen y pelvis; resonancia; cistoscopía; sonda Foley; o cistostomía. Piénsalo.',
        answer: 'Es la E. Sangre en la uretra, próstata ascendida y globo vesical: sección uretral. Está contraindicada la sonda Foley, y la vejiga se drena con una cistostomía. Después se estudia con uretrocistografía y se repara con cirugía. Los otros exámenes no resuelven el globo vesical.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 61',
      stem: 'Un paciente de 24 años sufre un accidente de tránsito a alta velocidad. Ingresa adolorido, con sangre fresca por uretra. Está en buenas condiciones, con estabilidad hemodinámica y sin signos de fracturas en el examen físico. La tomografía axial computada de tórax abdomen y pelvis muestra fractura de pelvis no desplazada, vejiga distendida, sin líquido libre peritoneal.',
      question: '¿Cuál es el examen más adecuado para proseguir el estudio?',
      options: [
        { letter: 'A', text: 'Pielografía de eliminación' },
        { letter: 'B', text: 'UroTAC' },
        { letter: 'C', text: 'Uretrocistografía retrógrada' },
        { letter: 'D', text: 'Ecotomografía pélvica' },
        { letter: 'E', text: 'Resonancia magnética nuclear de pelvis' },
      ],
      correct: 'C',
      explanation: 'La sospecha es una sección uretral, por lo que se contraindica la sonda Foley, se estudia con uretrocistografía retrógrada, se maneja con cistostomía suprapúbica y, además, con cirugía de reparación uretral.',
      say: {
        stem: 'Una pregunta real del EUNACOM de agosto de dos mil veintiuno. Un paciente de veinticuatro años tras un accidente de tránsito a alta velocidad, con sangre fresca por la uretra y estable. La tomografía muestra una fractura de pelvis no desplazada y la vejiga distendida.',
        question: '¿Cuál es el examen más adecuado para seguir el estudio?',
        options: 'Las opciones: pielografía de eliminación; uro tomografía; uretrocistografía retrógrada; ecografía pélvica; o resonancia de pelvis. Piénsalo.',
        answer: 'Es la C. Sangre por la uretra tras un golpe pélvico es una sospecha de sección uretral, y se estudia con uretrocistografía retrógrada. No la confundas con el trauma renal, que da hematuria tras un golpe lumbar y se estudia con uro tomografía.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 14',
      stem: 'Una paciente de 68 años sufre un accidente de tránsito, resultando con fractura de pelvis inestable y hemorragia masiva, ingresando para su manejo en la unidad de paciente crítico. Al examen físico está taquicárdica e hipotensa, por lo que se solicitan pruebas de grupo y Rh, resultando su grupo sanguíneo O-Rh negativo. Sin embargo, en el hospital únicamente hay dos unidades de glóbulos rojos O-Rh negativo, aunque múltiples unidades O-Rh positivo. El hospital más cercano con unidades O-Rh negativo disponibles está a 4 horas de traslado.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Administrar cristaloides hasta conseguir más unidades O-Rh negativo' },
        { letter: 'B', text: 'Administrar las dos unidades O-Rh negativo y, en caso necesario, las O-Rh positivo' },
        { letter: 'C', text: 'Esperar a obtener más unidades O-Rh negativo, solicitándolas de inmediato a otro centro' },
        { letter: 'D', text: 'Administrar únicamente las dos unidades O-Rh negativo disponibles' },
        { letter: 'E', text: 'Trasladar de inmediato a otro hospital que tenga disponibles unidades O-Rh negativo' },
      ],
      correct: 'B',
      explanation: 'En situaciones críticas con riesgo de muerte, excepcionalmente se puede transfundir sangre Rh positivo a pacientes Rh negativo, ya que el riesgo de hemólisis es menor que con el grupo ABO y menor que el riesgo de la anemia aguda severa.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticuatro. Una paciente de sesenta y ocho años con fractura de pelvis inestable y hemorragia masiva, taquicárdica e hipotensa. Su grupo es O Rh negativo, pero el hospital solo tiene dos unidades de glóbulos rojos O Rh negativo, y muchas O Rh positivo. El centro con más unidades está a cuatro horas.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: cristaloides hasta conseguir más unidades negativas; dar las dos negativas y, si hace falta, las positivas; esperar más unidades negativas; dar solo las dos negativas; o trasladarla de inmediato. Piénsalo.',
        answer: 'Es la B. Una hemorragia masiva por pelvis se trata con sangre, no solo con suero. Y en una situación con riesgo de muerte, excepcionalmente se puede dar sangre Rh positivo a una paciente Rh negativo, porque el riesgo de hemólisis es menor que el de la anemia aguda severa. Esperar o trasladar con la paciente sangrando es lo peligroso.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un paciente politraumatizado llega a urgencias tras un accidente de tránsito.',
      question: '¿Cuáles son las tres radiografías mínimas que se deben solicitar?',
      options: [
        { letter: 'A', text: 'Anteroposterior de tórax, anteroposterior de abdomen y lateral de rodilla' },
        { letter: 'B', text: 'Lateral de cuello, anteroposterior de tórax y anteroposterior de pelvis' },
        { letter: 'C', text: 'Anteroposterior de tórax, TAC de cerebro y anteroposterior de pelvis' },
        { letter: 'D', text: 'Solo anteroposterior de tórax si el paciente está estable' },
        { letter: 'E', text: 'Radiografías de todos los huesos largos más AP de tórax' },
      ],
      correct: 'B',
      explanation: 'Las tres radiografías mínimas son lateral de cuello, para fractura cervical, AP de tórax, para neumotórax o hemotórax, y AP de pelvis, para fractura de pelvis. Se piden siempre, aunque el paciente esté estable.',
      say: {
        stem: 'Un paciente politraumatizado llega a urgencias tras un accidente de tránsito.',
        question: '¿Cuáles son las tres radiografías mínimas que se piden?',
        options: 'Las opciones: tórax, abdomen y rodilla; cuello lateral, tórax y pelvis; tórax, tomografía de cerebro y pelvis; solo tórax si está estable; o todos los huesos largos y tórax. Piénsalo.',
        answer: 'Es la B. Cuello lateral, tórax anteroposterior y pelvis anteroposterior. Y se piden siempre, aunque esté estable. La D es la trampa: la estabilidad no te exime de la trilogía.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: pelvis y politrauma',
      cards: [
        { title: 'Politrauma', tag: 'Orden', kind: 'key', items: [
          { t: 'ABCDE, sin saltarse pasos', d: 'Collar y comprimir primero',
            say: 'Cerremos con las reglas de oro. En el politraumatizado, ABCDE en orden: collar desde la A, y en la C comprimes primero las hemorragias externas. Lo que compromete la ventilación va antes que la pelvis.' },
          { t: 'Cuello, tórax y pelvis', d: 'Siempre, aunque esté estable',
            say: 'Y siempre pides las tres radiografías: cuello lateral, tórax y pelvis.' },
        ] },
        { title: 'Pelvis', tag: 'Urgencia', kind: 'alert', items: [
          { t: 'Shock: volumen y sábana pélvica', d: 'Cerrar el anillo frena el sangrado venoso',
            say: 'En la fractura de pelvis con shock, repones volumen, con sangre si la pérdida es masiva, y estabilizas la pelvis, por ejemplo con una sábana sobre los trocánteres. No repitas las maniobras de estabilidad.' },
          { t: 'Sangre en meato: nada de Foley', d: 'Uretrocistografía y cistostomía',
            say: 'Si hay sangre en el meato, próstata ascendida o globo vesical, sospecha sección uretral: sin sonda Foley, con uretrocistografía y cistostomía suprapúbica. Y haz el tacto rectal y vaginal para descartar una fractura expuesta. Si te llevas una sola idea de hoy: pelvis inestable con shock, se cierra con una sábana y nunca se sonda a ciegas. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo del politraumatizado con dolor pélvico',
    root: N('start', 'Politraumatizado tras alta energía', 'ABCDE y collar cervical',
      'Un paciente politraumatizado. Lo primero es el ABCDE en orden y el collar cervical, sin saltarte pasos.',
      ['A y B comprometidas', N('alert', 'Resolver primero la ventilación', 'Por ejemplo neumotórax a tensión',
        'Si la vía aérea o la ventilación están comprometidas, eso va primero, por ejemplo descomprimir un neumotórax a tensión. La pelvis espera.')],
      ['Hemorragia externa', N('do', 'Comprimir primero', 'Luego vías venosas y volumen',
        'Si hay una hemorragia externa, la comprimes antes de instalar la vía. Luego, dos vías gruesas y reposición de volumen.')],
      ['Dolor pélvico con inestabilidad o shock', N('alert', 'Sospechar fractura de pelvis', 'Cuello, tórax y pelvis AP',
        'Si hay dolor a la compresión de la pelvis, inestabilidad o shock, sospechas fractura de pelvis, y pides cuello, tórax y pelvis.',
        ['Con shock', N('do', 'Sábana pélvica y volumen', 'No repetir maniobras de estabilidad',
          'Con shock, cierras la pelvis con una sábana sobre los trocánteres y repones volumen. No esperas imágenes ni repites las maniobras.')],
        ['Sangre en el meato o globo vesical', N('refer', 'Sección uretral: cistostomía', 'Uretrocistografía; nunca Foley',
          'Si hay sangre en el meato, próstata ascendida o globo vesical, es una sección uretral. Drenas con cistostomía suprapúbica y estudias con uretrocistografía.')],
        ['Tacto con sangre o hueso en recto o vagina', N('refer', 'Fractura expuesta: cirugía', 'Antibióticos y cirugía de urgencia',
          'Si el tacto rectal o vaginal muestra comunicación con la mucosa, es una fractura expuesta: antibióticos y cirugía de urgencia.')],
      )],
    ),
  },
};
