// Clase 7.22 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_endocrinologia.cjs (endo-22).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'endo-22',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'IGF-1 para sospechar, glucosa para confirmar y bisturí para tratar',
      say: 'Bienvenidos. En la clase anterior vimos el prolactinoma, el único adenoma hipofisario que se trata con pastillas. Hoy vemos su contracara: la acromegalia, un adenoma que sí se opera. El examen pregunta tres cosas: qué examen pides primero, cómo confirmas, y qué complicaciones buscas siempre. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Demasiada hormona de crecimiento',
      nodes: [
        { id: 'ade', col: 0, row: 1, k: 'cause', t: 'Adenoma somatotropo', s: '98 % de los casos' },
        { id: 'gh', col: 1, row: 1, k: 'mech', t: 'GH autónoma y crónica', s: 'No obedece a la glucosa' },
        { id: 'igf', col: 2, row: 1, k: 'mech', t: 'IGF-1 hepática alta', s: 'El mediador del crecimiento' },
        { id: 'gig', col: 3, row: 0, k: 'effect', t: 'Gigantismo', s: 'Antes del cierre epifisario' },
        { id: 'acr', col: 3, row: 1, k: 'effect', t: 'Acromegalia', s: 'Tras el cierre: crece lo acral' },
        { id: 'dm', col: 2, row: 2, k: 'risk', t: 'Hiperglicemia', s: 'GH: antagonista de la insulina' },
        { id: 'tar', col: 4, row: 1, k: 'alert', t: 'Diagnóstico tardío', s: '8 a 10 años de síntomas' },
      ],
      edges: [
        { from: 'ade', to: 'gh' },
        { from: 'gh', to: 'igf', label: 'hígado' },
        { from: 'igf', to: 'gig', label: 'niño' },
        { from: 'igf', to: 'acr', label: 'adulto' },
        { from: 'gh', to: 'dm' },
        { from: 'acr', to: 'tar', label: 'insidioso' },
      ],
      steps: [
        { show: ['ade'], note: 'Casi siempre un adenoma hipofisario',
          say: 'Partamos por el origen. En el noventa y ocho por ciento de los casos, la acromegalia se debe a un adenoma hipofisario benigno, formado por células somatotropas, las que fabrican hormona de crecimiento.' },
        { show: ['gh'], note: 'Secreción autónoma: no se frena',
          say: 'Ese tumor secreta hormona de crecimiento de forma crónica y autónoma. Y guarda la palabra autónoma, porque en ella se basa el examen confirmatorio: una persona sana frena su hormona de crecimiento cuando sube la glucosa; el tumor no.' },
        { show: ['igf'], note: 'La GH actúa a través del hígado',
          say: 'La hormona de crecimiento no actúa sola. Estimula al hígado para que fabrique el factor de crecimiento insulínico tipo uno, la IGF uno, también llamada somatomedina C. Es la IGF uno la que hace crecer huesos y partes blandas.' },
        { show: ['gig', 'acr'], note: 'Misma enfermedad, distinta edad',
          say: 'Y aquí está la diferencia entre los dos nombres del título. Si el exceso aparece antes de que se cierren las epífisis, el hueso crece a lo largo y el niño se hace muy alto: eso es gigantismo. Si aparece en el adulto, con las epífisis cerradas, el hueso ya no se alarga y crecen las partes acrales: manos, pies, mandíbula. Eso es acromegalia.' },
        { show: ['dm'], note: 'Por eso la diabetes secundaria',
          say: 'Además, la hormona de crecimiento es un potente antagonista de la insulina y sube la glicemia. Por eso estos pacientes llegan con intolerancia a la glucosa o con una diabetes secundaria.' },
        { show: ['tar'], note: 'Tan lento que nadie lo nota',
          say: 'El problema es que todo esto avanza tan lento que ni el paciente ni su familia lo notan. El diagnóstico suele demorarse entre ocho y diez años desde que empiezan los síntomas.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: '¿Cómo llega el paciente?',
      cards: [
        { title: 'Cambios físicos', tag: 'La pista del examen', kind: 'key', items: [
          { t: 'Manos y pies que crecen', d: 'Cambia de zapatos, no se saca los anillos',
            say: 'El enunciado típico te lo cuenta con detalles cotidianos: el paciente ha tenido que cambiar varias veces de número de zapatos, o ya no puede sacarse el anillo de matrimonio.' },
          { t: 'Rasgos faciales toscos', d: 'Nariz ancha, arcos supraciliares prominentes',
            say: 'La cara se vuelve tosca: nariz ancha y frente y arcos supraciliares prominentes.' },
          { t: 'Prognatismo con diastema', d: 'Dientes separados, maloclusión y macroglosia',
            say: 'Y la mandíbula crece hacia adelante, el prognatismo, con los dientes que se separan y no calzan. Suma la lengua grande, la macroglosia. Con prognatismo y dientes separados ya estás pensando en acromegalia.' },
        ] },
        { title: 'Compromiso sistémico', tag: 'Lo que mata', kind: 'alert', items: [
          { t: 'Cardiovascular: primera causa de muerte', d: 'HTA, hipertrofia concéntrica, IC diastólica',
            say: 'Pero lo grave no es la cara. La primera causa de muerte es cardiovascular: hipertensión secundaria y una miocardiopatía acromegálica, con hipertrofia concéntrica del ventrículo izquierdo, arritmias e insuficiencia cardíaca diastólica.' },
          { t: 'SAHOS severo en más del 70 %', d: 'Por hipertrofia de partes blandas faríngeas',
            say: 'El síndrome de apnea obstructiva del sueño aparece en más del setenta por ciento, porque también crecen las partes blandas de la faringe. Por eso la pareja cuenta ronquidos con pausas.' },
          { t: 'Diabetes, artropatía y túnel carpiano', d: 'Túnel carpiano bilateral',
            say: 'Y se agregan la diabetes secundaria, una artropatía degenerativa precoz de grandes articulaciones, y el síndrome del túnel carpiano bilateral.' },
        ] },
        { title: 'Riesgo oncológico', tag: 'Obligatorio buscar', kind: 'criteria', items: [
          { t: 'Pólipos y cáncer colorrectal', d: 'Colonoscopía al diagnóstico y en el seguimiento',
            say: 'Por último, una asociación que se pregunta: más pólipos adenomatosos de colon y más cáncer colorrectal. Todo paciente con acromegalia necesita una colonoscopía al diagnóstico y controles periódicos.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico',
      title: 'Tres pasos, en este orden',
      nodes: [
        { id: 'sos', col: 0, row: 1, k: 'start', t: 'Sospecha clínica', s: 'Cambios acrales, SAHOS, HTA, DM' },
        { id: 'ghb', col: 1, row: 0, k: 'trap', t: 'GH basal aislada', s: 'Pulsátil: nunca sirve' },
        { id: 'igf', col: 1, row: 2, k: 'q', t: 'IGF-1 sérica', s: 'Tamizaje de elección' },
        { id: 'nor', col: 2, row: 3, k: 'good', t: 'IGF-1 normal', s: 'Descarta con 99 % de certeza' },
        { id: 'ptg', col: 2, row: 1, k: 'q', t: 'PTGO 75 g con GH seriada', s: 'Confirmación obligatoria' },
        { id: 'cnf', col: 3, row: 1, k: 'alert', t: 'GH no suprime', s: 'Persiste en 1,0 mcg/L o más' },
        { id: 'rm', col: 4, row: 1, k: 'refer', t: 'RM de silla turca', s: 'Macroadenoma en más del 75 %' },
      ],
      edges: [
        { from: 'sos', to: 'ghb', label: 'no' },
        { from: 'sos', to: 'igf' },
        { from: 'igf', to: 'nor', label: 'normal' },
        { from: 'igf', to: 'ptg', label: 'alta' },
        { from: 'ptg', to: 'cnf' },
        { from: 'cnf', to: 'rm' },
      ],
      steps: [
        { show: ['sos', 'ghb'], note: 'La trampa: pedir GH basal',
          say: 'Con la sospecha clínica, ¿qué pides? La tentación es medir la hormona de crecimiento, y es el error clásico. Su secreción es pulsátil: tiene picos y valles indetectables durante el día, y además sube con el estrés y el ejercicio. Un valor aislado no te dice nada. Nunca se pide GH basal, ni para tamizar ni para diagnosticar.' },
        { show: ['igf'], note: 'Paso uno: IGF-1 para edad y sexo',
          say: 'El primer paso es la IGF uno sérica. Tiene una vida media larga y refleja de forma integrada cuánta hormona de crecimiento hubo en las últimas semanas. Se interpreta según la edad y el sexo.' },
        { show: ['nor'], note: 'Normal: prácticamente descartada',
          say: 'Si la IGF uno es normal para la edad y el sexo, la acromegalia queda descartada con un noventa y nueve por ciento de certeza, y buscas otra causa de los rasgos toscos.' },
        { show: ['ptg'], note: 'Paso dos: la glucosa debería frenar la GH',
          say: 'Si está alta, viene la confirmación, que es obligatoria: la prueba de tolerancia a la glucosa oral con setenta y cinco gramos, midiendo hormona de crecimiento a los cero, treinta, sesenta, noventa y ciento veinte minutos. Aquí aparece la palabra que guardamos: autónoma.' },
        { show: ['cnf'], note: 'Sano: baja de 1,0; acromegalia: no baja',
          say: 'En una persona sana, la glucosa alta suprime la hormona de crecimiento a menos de uno coma cero microgramos por litro, o menos de cero coma cuatro con ensayos ultrasensibles. En la acromegalia el tumor no obedece y la hormona se mantiene en uno coma cero o más. Eso confirma el diagnóstico.' },
        { show: ['rm'], note: 'Paso tres: recién ahora la imagen',
          say: 'Y recién con la bioquímica confirmada se pide la imagen: resonancia de silla turca con gadolinio. En más del setenta y cinco por ciento muestra un macroadenoma, de diez milímetros o más. Primero la bioquímica, después la anatomía, igual que en el prolactinoma.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Este adenoma sí se opera',
      cards: [
        { title: 'Primera línea', tag: 'Único con curación inmediata', kind: 'key', items: [
          { t: 'Cirugía transesfenoidal', d: 'Resección del adenoma somatotropo',
            say: 'Pasemos al tratamiento, y aquí está el contraste con la clase anterior. El prolactinoma se trata con cabergolina; la acromegalia, con cirugía. La resección transesfenoidal del adenoma es la primera línea.' },
          { t: 'Cura y descomprime', d: 'Alivia el efecto de masa sobre el quiasma',
            say: '¿Por qué la cirugía? Porque es la única terapia que puede curar de inmediato, y además alivia rápido el efecto de masa sobre el quiasma óptico.' },
        ] },
        { title: 'Terapia médica coadyuvante', tag: 'Si persiste o no se puede operar', kind: 'pharma', items: [
          { t: 'Análogos de somatostatina', d: 'Octreótido LAR 20–30 mg IM o lanreótido 120 mg SC, mensual',
            say: 'Los fármacos quedan como apoyo: si la enfermedad persiste después de operar, o si el paciente tiene alto riesgo quirúrgico. Los de elección son los análogos de la somatostatina de acción prolongada: octreótido LAR, veinte a treinta miligramos intramuscular al mes, o lanreótido, ciento veinte miligramos subcutáneo al mes.' },
          { t: 'Actúan sobre el receptor SSTR2', d: 'Suprimen la GH en más del 60–70 %',
            say: 'Se unen al receptor de somatostatina tipo dos del tumor y suprimen la hormona de crecimiento en más del sesenta a setenta por ciento de los pacientes.' },
          { t: 'Pegvisomant y cabergolina', d: 'Pegvisomant bloquea el receptor de GH',
            say: 'Hay dos alternativas más. El pegvisomant, un antagonista del receptor de hormona de crecimiento que bloquea la producción periférica de IGF uno. Y la cabergolina, útil cuando el tumor también secreta prolactina.' },
        ] },
        { title: 'Meta de control', tag: 'Las dos a la vez', kind: 'criteria', items: [
          { t: 'IGF-1 normal para edad y sexo', d: 'Y GH post-PTGO menor de 1,0 mcg/L',
            say: '¿Cuándo está controlado? Cuando se cumplen las dos condiciones: IGF uno normal para la edad y el sexo, y hormona de crecimiento bajo uno coma cero después de la sobrecarga de glucosa. Los mismos dos exámenes del diagnóstico sirven para seguirlo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Seguimiento',
      title: 'Lo que se busca siempre',
      cards: [
        { title: 'Complicaciones', tag: 'Al diagnóstico', kind: 'alert', items: [
          { t: 'Colonoscopía total', d: 'Pólipos premalignos: polipectomía',
            say: 'Además de tratar el tumor, hay que buscar las complicaciones desde el día uno. La colonoscopía total, porque si encuentras pólipos adenomatosos los sacas antes de que se malignicen.' },
          { t: 'Ecocardiograma', d: 'Hipertrofia del ventrículo izquierdo',
            say: 'Y el ecocardiograma, para ver la hipertrofia del ventrículo izquierdo y controlar el riesgo cardiovascular, que es lo que finalmente mata a estos pacientes.' },
        ] },
        { title: 'Control anual', tag: 'Bioquímico', kind: 'normal', items: [
          { t: 'IGF-1 y GH post-PTGO', d: 'Una vez al año',
            say: 'El seguimiento es anual con IGF uno y hormona de crecimiento post sobrecarga de glucosa, más colonoscopías periódicas y ecocardiograma.' },
          { t: 'No es GES directo', d: 'Garantías por patología asociada',
            say: 'Un dato administrativo: la acromegalia no es GES directo. Las garantías vienen por la patología cardiovascular y neuroquirúrgica asociada.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en el árbol de decisión que vas a usar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que se pregunta y cómo se cae',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Sospecha de acromegalia', 'IGF-1 sérica', 'Medir GH basal'],
          say: 'Repasemos las trampas. Ante la sospecha, IGF uno. Pedir hormona de crecimiento basal es la respuesta incorrecta más frecuente del tema.' },
        { cells: ['IGF-1 elevada', 'PTGO 75 g con GH seriada', 'Pedir RM y operar'],
          say: 'Con la IGF uno alta, se confirma con la sobrecarga oral de glucosa. Saltar directo a la resonancia es quemar una etapa.' },
        { cells: ['GH no suprime tras glucosa', 'Acromegalia: RM de silla turca', 'Pensar que es normal'],
          say: 'Si la hormona de crecimiento no baja de uno coma cero tras la glucosa, está confirmada, y recién ahí se pide la resonancia.' },
        { cells: ['Acromegalia confirmada', 'Cirugía transesfenoidal', 'Cabergolina como en el prolactinoma'],
          say: 'El tratamiento es la cirugía transesfenoidal. No confundas con el prolactinoma: allá cabergolina, aquí bisturí.' },
        { cells: ['Persiste tras la cirugía', 'Octreótido o lanreótido', 'Dejar sin tratamiento'],
          say: 'Si la enfermedad persiste después de operar, análogos de la somatostatina: octreótido o lanreótido.' },
        { cells: ['Todo paciente con acromegalia', 'Colonoscopía y ecocardiograma', 'Olvidar el colon'],
          say: 'Y en todo paciente, colonoscopía y ecocardiograma. El colon es el detalle que más se olvida.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 46 años con 5 años de cambio progresivo de rasgos faciales, separación dental con maloclusión y aumento de talla de zapatos de 41 a 44. Su cónyuge relata ronquidos con pausas respiratorias. Examen: macroglosia, nariz ancha, prognatismo, manos grandes, PA 160/95 mmHg. Glicemia de ayuno 142 mg/dL. Se sospecha acromegalia.',
      question: '¿Cuál es el primer examen que debe solicitarse?',
      options: [
        { letter: 'A', text: 'Hormona de crecimiento basal matinal' },
        { letter: 'B', text: 'IGF-1 sérica' },
        { letter: 'C', text: 'Resonancia magnética de silla turca con gadolinio' },
        { letter: 'D', text: 'Prolactina plasmática' },
        { letter: 'E', text: 'Radiografía de manos y pies' },
      ],
      correct: 'B',
      explanation: 'Clínica clásica de acromegalia. El tamizaje de primera línea es la IGF-1, que integra la secreción de GH de las últimas semanas. La GH basal es pulsátil y no sirve. La RM se pide después de confirmar con PTGO. Luego: cirugía transesfenoidal, colonoscopía y ecocardiograma.',
      say: {
        stem: 'Vamos al caso. Hombre de cuarenta y seis años con cinco años de cambio en los rasgos de la cara, dientes separados con mala mordida, y que pasó del número cuarenta y uno al cuarenta y cuatro de zapatos. Su señora dice que ronca con pausas. Al examen tiene macroglosia, nariz ancha, prognatismo, manos grandes y presión de ciento sesenta sobre noventa y cinco. La glicemia de ayuno es ciento cuarenta y dos.',
        question: '¿Cuál es el primer examen que debe solicitarse?',
        options: 'Las alternativas: hormona de crecimiento basal, IGF uno sérica, resonancia de silla turca, prolactina, o radiografía de manos y pies. Piénsalo.',
        answer: 'Es la B, la IGF uno. El caso tiene todo: cambios acrales, apnea del sueño, hipertensión y diabetes. La trampa es la A, la hormona de crecimiento basal, que suena lógica pero es pulsátil y un valor aislado no sirve. Y la resonancia es tentadora, pero va después de confirmar con la sobrecarga de glucosa: primero bioquímica, después imagen.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 113',
      stem: 'Un paciente presenta astenia y aumento de tamaño de la mandíbula, con separación entre los dientes. Además refiere hipertrofia malar, de la nariz y las manos. También ha aumentado el número de sus zapatos.',
      question: '¿Qué examen es más adecuado para continuar el estudio de este paciente?',
      options: [
        { letter: 'A', text: 'Niveles de hormona de crecimiento' },
        { letter: 'B', text: 'Radiografías de pies y de la arcada dentaria' },
        { letter: 'C', text: 'Radiografía de manos' },
        { letter: 'D', text: 'Niveles de IGF-1' },
        { letter: 'E', text: 'Resonancia magnética de hipófisis' },
      ],
      correct: 'D',
      explanation: 'La acromegalia se estudia primero con somatomedina C o IGF-1 (son sinónimos). La GH es muy errática y no se pide.',
      say: {
        stem: 'Ahora las preguntas reales. Esta es del EUNACOM de julio de dos mil quince. Un paciente con astenia, mandíbula que ha crecido con los dientes separados, y aumento de los pómulos, la nariz y las manos. También ha subido su número de zapatos.',
        question: '¿Qué examen es más adecuado para continuar el estudio?',
        options: 'Las opciones: niveles de hormona de crecimiento, radiografías de pies y arcada dentaria, radiografía de manos, niveles de IGF uno, o resonancia de hipófisis. Piénsalo.',
        answer: 'Es la D, IGF uno. Somatomedina C e IGF uno son lo mismo, así que no te confundas si aparece con otro nombre. La A es el distractor clásico: la hormona de crecimiento es errática y no se pide. Las radiografías no aportan, y la resonancia va después de confirmar la bioquímica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 32',
      stem: 'Un paciente de 30 años presenta astenia, malestar general y sudoración nocturna desde hace dos meses. Al examen físico registra frecuencia cardíaca: 89 lpm, presión arterial: 130/90 mmHg, se observa prognatismo y dedos de las manos gruesos.',
      question: '¿Cuál de las siguientes hormonas estará elevada con mayor probabilidad?',
      options: [
        { letter: 'A', text: 'Tiroxina' },
        { letter: 'B', text: 'Factor de crecimiento insulínico tipo 1 (IGF-1)' },
        { letter: 'C', text: 'FSH' },
        { letter: 'D', text: 'Tirotropina (TSH)' },
        { letter: 'E', text: 'ACTH' },
      ],
      correct: 'B',
      explanation: 'La sospecha es una acromegalia, producida por un tumor hipofisario productor de GH. El examen de elección es la IGF-1, que estará elevada.',
      say: {
        stem: 'La última, del EUNACOM de diciembre de dos mil veinticinco. Paciente de treinta años con dos meses de astenia, malestar y sudoración nocturna. Frecuencia cardíaca de ochenta y nueve, presión de ciento treinta sobre noventa, prognatismo y dedos de las manos gruesos.',
        question: '¿Qué hormona estará elevada con mayor probabilidad?',
        options: 'Las alternativas: tiroxina, IGF uno, FSH, TSH, o ACTH. Piénsalo.',
        answer: 'Es la B, IGF uno. Fíjate cómo el enunciado intenta despistarte: la sudoración y la frecuencia cardíaca algo alta hacen pensar en hipertiroidismo, y por eso aparece la tiroxina. Pero el prognatismo y los dedos gruesos son acromegalia, y la hormona que sube de forma estable es la IGF uno. La sudoración también es parte del cuadro.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Bioquímica antes que imagen', kind: 'key', items: [
          { t: 'Nunca GH basal', d: 'Tamizaje con IGF-1',
            say: 'Cerremos con las reglas de oro. Nunca pidas hormona de crecimiento basal: el tamizaje es la IGF uno para edad y sexo.' },
          { t: 'Confirma la PTGO 75 g', d: 'GH que no baja de 1,0 mcg/L',
            say: 'Se confirma cuando la hormona de crecimiento no baja de uno coma cero tras setenta y cinco gramos de glucosa. Recién ahí, resonancia de silla turca.' },
        ] },
        { title: 'Tratamiento', tag: 'Contraste con prolactinoma', kind: 'pharma', items: [
          { t: 'Cirugía transesfenoidal', d: 'Primera línea',
            say: 'La acromegalia se opera por vía transesfenoidal; los análogos de somatostatina quedan si persiste o no se puede operar.' },
        ] },
        { title: 'Siempre buscar', tag: 'Lo que se olvida', kind: 'alert', items: [
          { t: 'Colonoscopía y ecocardiograma', d: 'Colon y corazón',
            say: 'Y en todo paciente, colonoscopía y ecocardiograma. En la próxima clase pasamos del exceso al déficit: el hipopituitarismo. Si te llevas una sola idea de hoy: se sospecha con IGF uno, se confirma con glucosa que no frena la hormona, y se trata con cirugía. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Acromegalia: tamizar, confirmar, operar',
    root: N('start', 'Sospecha de acromegalia', 'Cambios acrales, prognatismo, SAHOS',
      'Paciente con manos y pies que crecen, prognatismo, apnea del sueño, hipertensión o diabetes. Lo primero es decidir qué examen pides.',
      ['', N('q', 'IGF-1 sérica', 'Nunca GH basal',
        'Se pide IGF uno para edad y sexo. Nunca hormona de crecimiento basal.',
        ['Normal', N('ok', 'Acromegalia descartada', 'Buscar otra causa',
          'Si es normal, la acromegalia queda prácticamente descartada y se busca otra causa de los rasgos toscos.')],
        ['Alta', N('q', 'PTGO 75 g con GH seriada', '¿Suprime a menos de 1,0 mcg/L?',
          'Si está alta, se confirma con sobrecarga oral de glucosa, midiendo la hormona de crecimiento.',
          ['Suprime', N('ok', 'Eje somatotropo normal', 'Regulación conservada',
            'Si la hormona baja de uno coma cero, el eje funciona normal.')],
          ['No suprime', N('alert', 'Acromegalia confirmada', 'RM de silla turca',
            'Si no baja, la acromegalia está confirmada y se pide resonancia de silla turca con gadolinio.',
            ['', N('do', 'Cirugía transesfenoidal', 'Más colonoscopía y ecocardiograma',
              'El tratamiento de primera línea es la cirugía transesfenoidal, y a todos se les hace colonoscopía y ecocardiograma.',
              ['Persiste', N('refer', 'Análogos de somatostatina', 'Octreótido o lanreótido',
                'Si la enfermedad persiste tras la cirugía, o no se puede operar, se agregan octreótido o lanreótido; como alternativas, pegvisomant o cabergolina.')])])])])]),
  },
};
