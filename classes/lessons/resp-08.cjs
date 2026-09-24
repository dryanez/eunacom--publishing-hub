// Clase 2.3 de Neumología — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neumologia.cjs (resp-08).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'resp-08',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuándo la amoxicilina no sirve: atípicos, aspiración y hospital',
      say: 'Bienvenidos. En las dos clases anteriores armamos la neumonía típica: el neumococo, el CURB sesenta y cinco y un antibiótico para cada lugar. Hoy vemos las tres neumonías en que ese esquema falla: la atípica, la aspirativa y la intrahospitalaria. Cada una tiene un paciente típico, un germen distinto y un antibiótico propio, y el examen pregunta justamente eso: reconocer cuál es y no darle amoxicilina a quien no le sirve.',
    },

    {
      type: 'flow',
      kicker: 'El mapa',
      title: 'Tres neumonías, tres pistas',
      nodes: [
        { id: 'neu', col: 0, row: 2, k: 'start', t: 'Neumonía', s: '¿Cuál es la pista?' },
        { id: 'jov', col: 1, row: 0, k: 'q', t: 'Joven, cuadro arrastrado', s: 'Tos seca, poca auscultación' },
        { id: 'atp', col: 2, row: 0, k: 'effect', t: 'Atípica', s: 'Macrólido o doxiciclina' },
        { id: 'con', col: 1, row: 2, k: 'q', t: 'Conciencia o deglución alterada', s: 'Alcohol, ACV, demencia' },
        { id: 'asp', col: 2, row: 2, k: 'effect', t: 'Aspirativa', s: 'Ampicilina/sulbactam' },
        { id: 'hos', col: 1, row: 4, k: 'q', t: 'Hospitalizado > 48 h', s: 'Aparece en la cama' },
        { id: 'nih', col: 2, row: 4, k: 'alert', t: 'Intrahospitalaria', s: 'Antipseudomónico' },
      ],
      edges: [
        { from: 'neu', to: 'jov' }, { from: 'neu', to: 'con' }, { from: 'neu', to: 'hos' },
        { from: 'jov', to: 'atp' }, { from: 'con', to: 'asp' }, { from: 'hos', to: 'nih' },
      ],
      steps: [
        { show: ['neu'], note: 'El paciente da la pista',
          say: 'Partamos con el mapa. En estas tres neumonías, el diagnóstico no lo da la radiografía sola: lo da el paciente. Hay una pista en el enunciado que te dice cuál es.' },
        { show: ['jov', 'atp'], note: 'Atípica',
          say: 'Un joven con un cuadro arrastrado, tos seca y poco que auscultar es una neumonía atípica, y se trata con macrólido o doxiciclina.' },
        { show: ['con', 'asp'], note: 'Aspirativa',
          say: 'Un paciente con la conciencia o la deglución alteradas, por alcohol, un accidente cerebrovascular o demencia, hace una neumonía aspirativa, y se trata con ampicilina con sulbactam.' },
        { show: ['hos', 'nih'], note: 'Intrahospitalaria',
          say: 'Y un paciente que lleva más de cuarenta y ocho horas hospitalizado y hace una neumonía en su cama tiene una neumonía intrahospitalaria, que necesita cobertura antipseudomónica. Veamos cada una.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Neumonía atípica',
      title: 'Disociación clínico-radiológica',
      cards: [
        { title: 'Clínica', tag: 'Insidiosa', kind: 'criteria', items: [
          { t: 'Comienzo insidioso', d: 'Tos seca persistente, cefalea, mialgias',
            say: 'La neumonía atípica se reconoce por cómo empieza: en forma insidiosa, con tos seca persistente y muy molesta, cefalea, mialgias y febrícula. Nada del inicio brusco con fiebre alta y expectoración herrumbrosa del neumococo.' },
          { t: 'Jóvenes: cuarteles, estudiantes', d: 'Mycoplasma y Chlamydophila',
            say: 'El paciente típico es joven y vive en comunidad, en cuarteles o como estudiante. Los gérmenes son Mycoplasma pneumoniae, el más clásico, y Chlamydophila.' },
        ] },
        { title: 'La clave', tag: 'Se pregunta', kind: 'key', items: [
          { t: 'Auscultación casi normal', d: 'El paciente se ve bien',
            say: 'Y ahora la clave. Al examen, el paciente está en buen estado general y la auscultación es pobre, casi normal.' },
          { t: 'Rx con infiltrados intersticiales', d: 'Bilaterales, reticulonodulares',
            say: 'Pero la radiografía muestra infiltrados intersticiales o reticulonodulares bilaterales y difusos, mucho más de lo que esperabas. Esa diferencia entre un examen pobre y una radiografía llamativa es la disociación clínico-radiológica, y es la pista más preguntada de la neumonía atípica.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Neumonía atípica',
      title: '¿Por qué no sirve la amoxicilina?',
      nodes: [
        { id: 'myc', col: 0, row: 0, k: 'cause', t: 'Mycoplasma', s: 'Sin pared de peptidoglicano' },
        { id: 'int', col: 0, row: 2, k: 'cause', t: 'Chlamydophila, Legionella', s: 'Intracelulares' },
        { id: 'bl', col: 1, row: 1, k: 'mech', t: 'Betalactámicos no actúan', s: 'Actúan sobre la pared' },
        { id: 'res', col: 2, row: 1, k: 'trap', t: 'Resistencia intrínseca', s: 'Penicilinas y cefalosporinas' },
        { id: 'mac', col: 3, row: 1, k: 'good', t: 'Macrólido o doxiciclina', s: 'Azitromicina 500 mg/día' },
      ],
      edges: [
        { from: 'myc', to: 'bl' }, { from: 'int', to: 'bl' }, { from: 'bl', to: 'res' }, { from: 'res', to: 'mac' },
      ],
      steps: [
        { show: ['myc'], note: 'No tiene pared',
          say: 'Ahora el porqué del tratamiento. Mycoplasma no tiene pared celular de peptidoglicano.' },
        { show: ['int'], note: 'Viven dentro de la célula',
          say: 'Y Chlamydophila y Legionella son intracelulares: viven dentro de las células del huésped.' },
        { show: ['bl', 'res'], note: 'Ninguna penicilina ni cefalosporina',
          say: 'Los betalactámicos actúan sobre la pared de la bacteria. Si no hay pared, o si la bacteria está escondida dentro de la célula, no tienen dónde actuar. Por eso estos gérmenes tienen resistencia intrínseca a todas las penicilinas y cefalosporinas: la amoxicilina y la ceftriaxona no les hacen nada.' },
        { show: ['mac'], note: 'El tratamiento de elección',
          say: 'El tratamiento de elección es un macrólido, azitromicina quinientos miligramos al día por cinco días, o claritromicina, o bien doxiciclina cien miligramos cada doce horas. Esto explica lo que vimos la clase pasada: en la sala se suma azitromicina a la ceftriaxona cuando sospechas un atípico.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Legionella',
      title: 'El atípico con pistas extrapulmonares',
      cards: [
        { title: 'Quién', tag: 'Exposición', kind: 'criteria', items: [
          { t: 'Viajeros', d: 'Torres de enfriamiento, agua',
            say: 'Dentro de los atípicos hay uno que se pregunta aparte: Legionella pneumophila. El antecedente típico es un viajero, o la exposición a torres de enfriamiento.' },
        ] },
        { title: 'Pistas', tag: 'Fuera del pulmón', kind: 'alert', items: [
          { t: 'Diarrea', d: 'Con la neumonía',
            say: 'Y lo que la distingue son las pistas fuera del pulmón. Una neumonía con diarrea tiene que hacerte pensar en Legionella.' },
          { t: 'Hiponatremia y pruebas hepáticas', d: 'Alteradas',
            say: 'Sumale hiponatremia y pruebas hepáticas alteradas, y el cuadro está completo.' },
        ] },
        { title: 'Tratamiento', tag: 'Intracelular', kind: 'pharma', items: [
          { t: 'Levofloxacino 750 mg/día', d: 'O azitromicina EV',
            say: 'Como es intracelular, tampoco responde a betalactámicos. Se trata con levofloxacino setecientos cincuenta miligramos al día, o con azitromicina endovenosa.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Neumonía aspirativa',
      title: 'El que no protege su vía aérea',
      cards: [
        { title: 'Quién', tag: 'Factores', kind: 'criteria', items: [
          { t: 'Alcoholismo agudo, convulsiones', d: 'ACV, demencia, anestesia general',
            say: 'La segunda neumonía especial es la aspirativa. Ocurre cuando el paciente aspira contenido de la boca o del estómago porque no protege su vía aérea: alcoholismo agudo, convulsiones, accidente cerebrovascular, demencia o anestesia general. El enunciado clásico es un coma etílico.' },
          { t: 'Flora mixta', d: 'Anaerobios orales + estreptococos',
            say: 'La flora es mixta: anaerobios de la boca, como Peptostreptococcus, Fusobacterium y Prevotella, más estreptococos orales. Un esputo de olor fétido es la huella de los anaerobios.' },
        ] },
        { title: 'Dónde', tag: 'Gravedad', kind: 'key', items: [
          { t: 'Segmento apical del LID', d: 'O posterior del lóbulo superior',
            say: 'La ubicación sigue a la gravedad. En el paciente en decúbito supino, el material cae al segmento apical del lóbulo inferior derecho o al segmento posterior del lóbulo superior. Son los segmentos declives, sobre todo derechos.' },
        ] },
        { title: 'Tratamiento', tag: 'Cubrir anaerobios', kind: 'pharma', items: [
          { t: 'Ampicilina/sulbactam 1,5–3 g c/6 h EV', d: 'O amoxicilina/clavulánico',
            say: 'El tratamiento tiene que cubrir anaerobios: ampicilina con sulbactam, uno coma cinco a tres gramos cada seis horas endovenosa, o amoxicilina con ácido clavulánico. Si esta neumonía no se trata a tiempo, puede terminar en un absceso pulmonar, que es la próxima clase.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Neumonía intrahospitalaria',
      title: 'Aparece después de 48 horas',
      cards: [
        { title: 'Definición', tag: '> 48 h', kind: 'criteria', items: [
          { t: 'Después de 48 h del ingreso', d: 'Y no se estaba incubando al ingreso',
            say: 'La tercera es la neumonía intrahospitalaria: la que se manifiesta después de cuarenta y ocho horas del ingreso, y que no se estaba incubando cuando el paciente llegó. Es el espejo de la definición de NAC, que incluye las primeras cuarenta y ocho horas.' },
        ] },
        { title: 'Gérmenes', tag: 'Del hospital', kind: 'alert', items: [
          { t: 'Pseudomonas, Klebsiella BLEE', d: 'Acinetobacter',
            say: 'El cambio importante es el germen. Ya no es el neumococo de la comunidad, sino bacilos gramnegativos del hospital: Pseudomonas aeruginosa, Klebsiella pneumoniae productora de betalactamasas de espectro extendido, y Acinetobacter.' },
          { t: 'Staphylococcus aureus resistente', d: 'SAMR',
            say: 'Y Staphylococcus aureus resistente a meticilina.' },
        ] },
        { title: 'Tratamiento', tag: 'Antipseudomónico', kind: 'pharma', items: [
          { t: 'Piperacilina/tazobactam 4,5 g c/6 h', d: 'O cefepime 2 g c/8 h EV',
            say: 'Por eso el esquema empírico necesita un betalactámico antipseudomónico: piperacilina con tazobactam, cuatro coma cinco gramos cada seis horas, o cefepime, dos gramos cada ocho horas, endovenosos, después de tomar los cultivos.' },
          { t: '+ vancomicina si sospecha de SAMR', d: 'Previa toma de cultivos',
            say: 'Y se suma vancomicina si se sospecha estafilococo resistente. La trampa del examen es tratar una neumonía intrahospitalaria con el esquema de la comunidad, como ceftriaxona o amoxicilina.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora el árbol que te dice, frente a una neumonía, si sirve el esquema habitual o necesitas otro.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Atípica, aspirativa e intrahospitalaria',
      head: ['Tipo', 'Paciente típico', 'Germen', 'Tratamiento'],
      rows: [
        { cells: ['Atípica', 'Joven, cuarteles, estudiantes', 'Mycoplasma, Chlamydophila', 'Azitromicina o doxiciclina'],
          say: 'Repasemos en una tabla. Atípica: el joven de cuartel o estudiante, con Mycoplasma o Chlamydophila, y macrólido o doxiciclina. La trampa es la amoxicilina, que no sirve porque no hay pared.' },
        { cells: ['Aspirativa', 'Alcohol, secuela de ACV, demencia', 'Anaerobios + estreptococos orales', 'Ampicilina/sulbactam o amox/clav'],
          say: 'Aspirativa: el alcohólico, la secuela de accidente cerebrovascular o la demencia, con flora anaerobia mixta, y ampicilina con sulbactam o amoxicilina con clavulánico. La trampa es tratarla como si fuera una atípica, con un macrólido.' },
        { cells: ['Intrahospitalaria', 'Hospitalizado > 48 h', 'Pseudomonas, BLEE, SAMR', 'Piperacilina/tazo o cefepime ± vanco'],
          say: 'Intrahospitalaria: el hospitalizado por más de cuarenta y ocho horas, con gérmenes del hospital, y piperacilina con tazobactam o cefepime, más vancomicina si hay sospecha de estafilococo resistente.' },
        { cells: ['Legionella', 'Viajero, torres de enfriamiento', 'Legionella pneumophila', 'Levofloxacino o azitromicina'],
          say: 'Y Legionella: el viajero con neumonía, diarrea e hiponatremia, con levofloxacino o azitromicina.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 62 años con etilismo crónico severo, que sufrió una pérdida de conciencia tras una ingesta alcohólica copiosa. Tres días después consulta por fiebre de 38,8 °C, tos con expectoración purulenta de olor fétido y dolor torácico derecho. Rx de tórax: condensación con broncograma aéreo en el segmento apical del lóbulo inferior derecho.',
      question: '¿Cuál es el tratamiento antibiótico empírico más adecuado?',
      options: [
        { letter: 'A', text: 'Azitromicina 500 mg al día por vía oral' },
        { letter: 'B', text: 'Ampicilina/sulbactam endovenoso' },
        { letter: 'C', text: 'Ciprofloxacino en monoterapia oral' },
        { letter: 'D', text: 'Amikacina intramuscular diaria' },
        { letter: 'E', text: 'Amoxicilina 1 g cada 8 horas oral' },
      ],
      correct: 'B',
      explanation: 'Neumonía aspirativa: pérdida de conciencia por alcohol, esputo fétido (anaerobios) y condensación en el segmento apical del lóbulo inferior derecho (declive en decúbito supino). El esquema debe cubrir anaerobios y flora oral: ampicilina/sulbactam EV (o amoxicilina/clavulánico).',
      say: {
        stem: 'Vamos con un caso. Hombre de sesenta y dos años, con etilismo crónico severo, que perdió la conciencia después de una ingesta alcohólica importante. Tres días después consulta por fiebre, tos con expectoración purulenta de olor fétido y dolor torácico derecho. La radiografía muestra una condensación en el segmento apical del lóbulo inferior derecho.',
        question: '¿Cuál es el tratamiento antibiótico empírico más adecuado?',
        options: 'Las opciones: azitromicina oral, ampicilina con sulbactam endovenosa, ciprofloxacino, amikacina, o amoxicilina sola. Piénsalo.',
        answer: 'Es la B. El enunciado te da las tres pistas de la aspirativa: la pérdida de conciencia por alcohol, el esputo fétido de los anaerobios, y el segmento declive del lóbulo inferior derecho. Necesitas cubrir anaerobios, y eso lo hace la ampicilina con sulbactam. La E tienta porque es un betalactámico, pero el esquema de elección para esta flora mixta lleva el inhibidor: sulbactam o clavulánico. Y la azitromicina es para el atípico, no para el alcohólico que aspiró.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 107',
      stem: 'Paciente de 23 años, sin antecedentes, con cuadro de 2 semanas de rinorrea y coriza, que durante los últimos dos días se asocia a compromiso del estado general, sensación febril, tos con expectoración mucopurulenta y disnea. Al examen físico presenta signos vitales dentro de rangos normales, murmullo pulmonar presente en ambos campos pulmonares asociado a crepitaciones en base derecha. Se solicita una radiografía de tórax que muestra infiltrado intersticial en base derecha.',
      question: 'El tratamiento de elección de esta patología es:',
      options: [
        { letter: 'A', text: 'Claritromicina' },
        { letter: 'B', text: 'Amoxicilina-ácido clavulánico' },
        { letter: 'C', text: 'Clindamicina' },
        { letter: 'D', text: 'Ceftriaxona' },
        { letter: 'E', text: 'Moxifloxacino' },
      ],
      correct: 'A',
      explanation: 'Joven, cuadro arrastrado de 2 semanas e infiltrado intersticial: sospechar Mycoplasma. Los macrólidos lo cubren bien y son de elección. El moxifloxacino también lo cubre, pero su espectro es innecesariamente amplio.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil trece. Paciente de veintitrés años, sano, con dos semanas de rinorrea y coriza, que en los últimos dos días suma compromiso del estado general, sensación febril, tos y disnea. Signos vitales normales, crepitaciones en la base derecha, y la radiografía muestra un infiltrado intersticial.',
        question: '¿Cuál es el tratamiento de elección?',
        options: 'Las opciones: claritromicina, amoxicilina con clavulánico, clindamicina, ceftriaxona o moxifloxacino. Piénsalo.',
        answer: 'Es la A, claritromicina. Un joven con un cuadro arrastrado de dos semanas y un infiltrado intersticial es un Mycoplasma hasta que se demuestre lo contrario, y los macrólidos son de elección. La B y la D son la trampa: son betalactámicos, y Mycoplasma no tiene pared. El moxifloxacino sí lo cubre, pero es un espectro innecesariamente amplio para un joven sano.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 153',
      stem: 'Un adolescente de 17 años presenta un cuadro de 5 días de evolución de tos con expectoración mucosa, al que se le ha agregado fiebre hasta 37,6ºC. Al examen físico está en buenas condiciones, con FR: 15x’, saturación oxígeno: 95% y examen pulmonar con murmullo pulmonar presente, auscultándose crepitaciones y sibilancias bilaterales.',
      question: '¿Cuál es el agente etiológico más probable?',
      options: [
        { letter: 'A', text: 'Streptococcus pneumoniae' },
        { letter: 'B', text: 'Mycoplasma pneumoniae' },
        { letter: 'C', text: 'Chlamydia trachomatis' },
        { letter: 'D', text: 'Virus influenza' },
        { letter: 'E', text: 'Pneumocystis jiroveci' },
      ],
      correct: 'B',
      explanation: 'Adolescente en buenas condiciones, con febrícula y compromiso bilateral (crépitos y sibilancias): neumonía atípica, por Mycoplasma pneumoniae, aunque lleve solo 5 días.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de agosto de dos mil veintiuno. Adolescente de diecisiete años con cinco días de tos con expectoración mucosa y febrícula de treinta y siete coma seis. Está en buenas condiciones, satura noventa y cinco, y tiene crepitaciones y sibilancias bilaterales.',
        question: '¿Cuál es el agente etiológico más probable?',
        options: 'Las opciones: neumococo, Mycoplasma pneumoniae, Chlamydia trachomatis, virus influenza o Pneumocystis. Piénsalo.',
        answer: 'Es la B, Mycoplasma. Es un joven en buenas condiciones, con febrícula, y con un compromiso bilateral y difuso en vez de un foco. Todo eso dibuja una neumonía atípica, aunque lleve solo cinco días. El neumococo es el distractor, porque es el germen más frecuente en general, pero este no es su cuadro típico.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 38',
      stem: 'Un paciente de 34 años, consulta por cuadro de 5 semanas de tos irritativa y expectoración que ha ido empeorando, agregándose disnea de medianos esfuerzos. Al examen físico se aprecia enflaquecido, con frecuencia respiratoria de 27 por minuto, frecuencia cardiaca de 90 por minuto, presión arterial de 100/70 mmHg y saturación de 92% con FiO2 ambiental. Examen pulmonar muestra crepitaciones, estertores y algunas sibilancias bilaterales. Se solicita radiografía de tórax.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Fibrosis pulmonar' },
        { letter: 'B', text: 'Asma bronquial' },
        { letter: 'C', text: 'Neumonitis viral' },
        { letter: 'D', text: 'Neumonía por mycoplasma' },
        { letter: 'E', text: 'Neumonía por Pneumocystis jiroveci' },
      ],
      correct: 'E',
      explanation: 'Cinco semanas de evolución con compromiso bilateral en un paciente enflaquecido: neumonía por P. jiroveci. Con un cuadro más corto y sin baja de peso habría que pensar en Mycoplasma. La fibrosis y el asma son crónicas, con otra radiografía; la neumonitis viral es aguda.',
      say: {
        stem: 'Una más, del EUNACOM de diciembre de dos mil diecinueve. Paciente de treinta y cuatro años con cinco semanas de tos irritativa que empeora y disnea de medianos esfuerzos. Está enflaquecido, respira a veintisiete por minuto, satura noventa y dos, y tiene crepitaciones y sibilancias bilaterales.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: fibrosis pulmonar, asma, neumonitis viral, neumonía por Mycoplasma, o neumonía por Pneumocystis jirovecii. Piénsalo.',
        answer: 'Es la E, Pneumocystis. Es una pregunta difícil, porque se parece mucho a un Mycoplasma. Lo que la separa es el tiempo y el peso: cinco semanas y un paciente enflaquecido. Con un cuadro más corto y sin baja de peso, la respuesta habría sido Mycoplasma. La fibrosis y el asma son cuadros crónicos con otra radiografía, y la neumonitis viral es aguda.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un paciente de 74 años ingresa a medicina por una hemorragia digestiva alta. Al quinto día de hospitalización inicia fiebre de 38,6 °C, taquipnea, desaturación y estertores crepitantes en ambos hemitórax. La radiografía de tórax muestra infiltrados nuevos en la base pulmonar izquierda.',
      question: '¿Cuál es la conducta diagnóstica y terapéutica más apropiada?',
      options: [
        { letter: 'A', text: 'Diagnóstico de NAC atípica; tratar con eritromicina oral por 7 días' },
        { letter: 'B', text: 'Diagnóstico de neumonía intrahospitalaria; hemocultivos y antibióticos antipseudomónicos como piperacilina/tazobactam' },
        { letter: 'C', text: 'Diagnóstico de embolia grasa; corticoides a altas dosis' },
        { letter: 'D', text: 'Diagnóstico de bronquitis aguda viral; observación sin antimicrobianos' },
        { letter: 'E', text: 'Diagnóstico de edema pulmonar cardiogénico; suspender fluidos e indicar amoxicilina oral' },
      ],
      correct: 'B',
      explanation: 'Infiltrado nuevo con fiebre después de 48 horas de hospitalización: neumonía intrahospitalaria. Flora del hospital (Pseudomonas, enterobacterias multirresistentes): cultivos y betalactámico antipseudomónico EV (piperacilina/tazobactam o cefepime).',
      say: {
        stem: 'Para la intrahospitalaria, un caso representativo del banco EUNACOM. Hombre de setenta y cuatro años hospitalizado por una hemorragia digestiva alta. Al quinto día inicia fiebre, taquipnea, desaturación y crepitaciones, y la radiografía muestra infiltrados nuevos en la base izquierda.',
        question: '¿Cuál es la conducta diagnóstica y terapéutica más apropiada?',
        options: 'Las opciones: NAC atípica con eritromicina, neumonía intrahospitalaria con hemocultivos y piperacilina con tazobactam, embolia grasa, bronquitis viral, o edema pulmonar con amoxicilina. Piénsalo.',
        answer: 'Es la B. El dato que decide es el día: al quinto día de hospitalización ya pasaron las cuarenta y ocho horas, así que es una neumonía intrahospitalaria, con gérmenes del hospital. Se toman cultivos y se parte con un antipseudomónico. La A es la trampa, porque trata al paciente como si hubiera llegado de la comunidad.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Atípica', tag: 'Sin pared', kind: 'key', items: [
          { t: 'Disociación clínico-radiológica', d: 'Macrólido o doxiciclina',
            say: 'Cerremos con las reglas de oro. La neumonía atípica se reconoce por la disociación clínico-radiológica, y como el germen no tiene pared, se trata con macrólido o doxiciclina, nunca con betalactámicos.' },
          { t: 'Legionella: diarrea + hiponatremia', d: 'Levofloxacino o azitromicina',
            say: 'Si además hay diarrea e hiponatremia, piensa en Legionella, con levofloxacino o azitromicina.' },
        ] },
        { title: 'Aspirativa', tag: 'Anaerobios', kind: 'pharma', items: [
          { t: 'Alcohol, ACV, demencia', d: 'Ampicilina/sulbactam',
            say: 'La aspirativa es del que no protege su vía aérea, cae en los segmentos declives derechos, y se trata con ampicilina con sulbactam.' },
        ] },
        { title: 'Intrahospitalaria', tag: '> 48 h', kind: 'alert', items: [
          { t: 'Después de 48 h del ingreso', d: 'Piperacilina/tazobactam o cefepime ± vanco',
            say: 'Y la intrahospitalaria aparece después de cuarenta y ocho horas del ingreso, y necesita cobertura antipseudomónica. En la próxima clase seguimos con lo que pasa cuando la aspirativa se complica: el absceso pulmonar. Si te llevas una sola idea de hoy: antes de elegir el antibiótico, pregunta quién es el paciente y dónde se enfermó. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Neumonía: ¿sirve el esquema habitual?',
    root: N('start', 'Neumonía confirmada', 'Antes de elegir el antibiótico',
      'Tienes una neumonía confirmada. Antes de elegir el antibiótico de la comunidad, revisa si es una de las tres especiales.',
      ['', N('q', '¿Lleva más de 48 h hospitalizado?', 'Dónde se enfermó',
        'La primera pregunta es dónde se enfermó: ¿lleva más de cuarenta y ocho horas hospitalizado?',
        ['SÍ', N('alert', 'Intrahospitalaria', 'Piperacilina/tazobactam o cefepime ± vanco',
          'Si es así, es intrahospitalaria: cultivos y piperacilina con tazobactam o cefepime, más vancomicina si sospechas estafilococo resistente.')],
        ['NO', N('q', '¿Aspiró?', 'Alcohol, convulsión, ACV, demencia',
          'Si viene de la comunidad, pregunta si pudo aspirar: alcohol, convulsiones, accidente cerebrovascular, demencia o anestesia.',
          ['SÍ', N('do', 'Aspirativa', 'Ampicilina/sulbactam o amox/clav',
            'Si aspiró, es aspirativa, y se cubren anaerobios con ampicilina con sulbactam o amoxicilina con clavulánico.')],
          ['NO', N('q', '¿Cuadro atípico?', 'Insidioso, tos seca, disociación clínico-Rx',
            'Si no, ¿el cuadro es insidioso, con tos seca y disociación entre un examen pobre y una radiografía llamativa?',
            ['SÍ', N('ok', 'Atípica', 'Macrólido o doxiciclina',
              'Si es así, es una atípica: macrólido o doxiciclina. Y si hay diarrea e hiponatremia, piensa en Legionella y usa levofloxacino o azitromicina.')],
            ['NO', N('ok', 'NAC típica', 'Esquema según el lugar',
              'Si no es ninguna de las tres, es la NAC típica, y se trata con el esquema según el lugar, como vimos la clase pasada.')])])])]),
  },
};
