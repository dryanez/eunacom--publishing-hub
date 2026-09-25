// Clase 18.22 — guion docente escrito a mano (estándar Módulo 3 · Pediatría).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-22).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-22',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Displasia del desarrollo de la cadera, maniobras de Ortolani y Barlow, tamizaje radiológico GES a los tres meses, líneas de Hilgenreiner y Perkin, y correas de Pavlik',
      say: 'Bienvenidos a la clase sobre displasia del desarrollo de la cadera, patología con garantía GES evaluada con alta frecuencia en el examen EUNACOM. En esta sesión dominaremos la semiología articular con las maniobras de Ortolani y Barlow, aprenderemos a interpretar la radiografía de pelvis a los tres meses midiendo el índice acetabular y los cuadrantes de Ombredanne, y revisaremos el uso correcto de las correas de Pavlik. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Morfogénesis y biomecánica',
      title: 'Desarrollo Acetabular Incompetente, Subluxación y Luxación Progresiva',
      nodes: [
        { id: 'lax', col: 0, row: 1, k: 'start', t: 'Laxitud capsuloligamentosa', s: 'Influencia de estrógenos maternos combinada con restricción de espacio intrauterino' },
        { id: 'cot', col: 1, row: 1, k: 'mech', t: 'Acetábulo aplanado e incompetente', s: 'Falta de estímulo de presión concéntrica que impide la profundización del cotilo' },
        { id: 'des', col: 2, row: 1, k: 'risk', t: 'Desplazamiento súpero-externo', s: 'Fuerzas musculares que desplazan la cabeza femoral hacia el cuadrante exterior' },
        { id: 'art', col: 3, row: 1, k: 'alert', t: 'Artrosis precoz y cojera', s: 'Deformidad irreversible, hipertrofia del labrum y necrosis si no se trata en lactancia' },
      ],
      edges: [
        { from: 'lax', to: 'cot', label: 'posición fetal' },
        { from: 'cot', to: 'des', label: 'inestabilidad concéntrica' },
        { from: 'des', to: 'art', label: 'carga de la marcha' },
      ],
      steps: [
        {
          show: ['lax', 'cot'],
          note: 'Laxitud hormonal e interferencia en el moldeamiento acetabular',
          say: 'La cadera normal requiere que la cabeza esférica del fémur esté permanentemente centrada dentro del acetábulo para que este se profundice. Ante la laxitud hormonal o la compresión en el útero, la cabeza se desalinea y el cotilo permanece aplanado, vertical e incompetente.',
        },
        {
          show: ['des', 'art'],
          note: 'Desplazamiento fuera del cotilo y secuelas en la edad de marcha',
          say: 'Al nacer y aumentar el tono muscular, la cabeza femoral es traccionada hacia arriba y afuera, produciéndose una subluxación o luxación completa que, de no ser reducida en los primeros meses de vida, conduce a una cojera permanente y artrosis invalidante del adulto joven.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Epidemiología y factores de riesgo',
      title: 'Poblaciones en Alto Riesgo de Displasia de Cadera',
      cards: [
        {
          title: 'Factores de Riesgo Mayores Clásicos',
          tag: 'Condiciones perinatales que exigen ecografía precoz',
          kind: 'key',
          items: [
            {
              t: 'Sexo femenino: Relación de seis a uno frente al varón',
              d: 'Mayor susceptibilidad de los ligamentos de las niñas a la hormona relaxina y estrógenos maternos transplacentarios',
              say: 'El sexo femenino es el factor epidemiológico más evidente, presentándose seis niñas afectadas por cada varón debido a una mayor sensibilidad de sus tejidos a las hormonas maternas.',
            },
            {
              t: 'Presentación podálica o pelviana: Máximo riesgo relativo',
              d: 'La posición de nalgas estira los tendones isquiotibiales forzando la salida de la cabeza femoral del acetábulo',
              say: 'El parto en presentación podálica es el factor de riesgo individual más potente, multiplicando el riesgo de displasia y obligando a un estudio imagenológico anticipado.',
            },
          ],
        },
        {
          title: 'Factores Mecánicos Intrauterinos y Antecedentes',
          tag: 'Restricción de movilidad y carga genética familiar',
          kind: 'criteria',
          items: [
            {
              t: 'Historia familiar de primer grado con displasia de cadera',
              d: 'Presencia de madre, padre o hermanos con antecedente de uso de correas o cirugía de cadera infantil',
              say: 'El antecedente de displasia en padres o hermanos incrementa notablemente la probabilidad, reflejando una base hereditaria en la arquitectura ósea del cotilo.',
            },
            {
              t: 'Primiparidad, oligohidramnios y deformidades asociadas',
              d: 'Espacio intrauterino estrecho asociado a metatarso aducto o tortícolis muscular congénita por empaquetamiento',
              say: 'El embarazo primigesta y el oligohidramnios reducen el espacio intrauterino, asociándose a signos de compresión fetal como tortícolis congénita o pie bot.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Semiología en el menor de tres meses',
      title: 'Examen Físico Articular: Maniobras de Barlow y Ortolani',
      cards: [
        {
          title: 'Maniobra de Barlow: Maniobra Luxadora',
          tag: 'Evalúa si la cadera es inestable y puede salir del cotilo',
          kind: 'alert',
          items: [
            {
              t: 'Técnica de ejecución: Aducción con presión posterior',
              d: 'Se flexiona la cadera a 90 grados, se aduce suavemente el muslo hacia la línea media y se empuja hacia atrás el fémur',
              say: 'La maniobra de Barlow es una maniobra aductora y luxadora. Se flexionan las caderas en noventa grados, se aduce el muslo y se ejerce una suave presión hacia atrás.',
            },
            {
              t: 'Significado clínico: Cadera luxable que sale',
              d: 'Se percibe la salida de la cabeza femoral fuera del reborde acetabular posterior, confirmando una cadera inestable',
              say: 'Si la cadera es displásica e inestable, la cabeza femoral se descoloca y sale del acetábulo, confirmando que se trata de una cadera luxable.',
            },
          ],
        },
        {
          title: 'Maniobra de Ortolani: Maniobra Reductora',
          tag: 'Evalúa si una cadera previamente luxada puede volver a entrar',
          kind: 'key',
          items: [
            {
              t: 'Técnica de ejecución: Abducción con elevación anterior',
              d: 'Con caderas flexionadas a 90 grados, se abducen suavemente los muslos mientras los dedos presionan el trocánter hacia adelante',
              say: 'La maniobra de Ortolani es una maniobra abductora y reductora. Al separar suavemente los muslos se presiona el trocánter mayor hacia adelante.',
            },
            {
              t: 'Significado clínico: Resalto o clunk de reducción',
              d: 'Se percibe un chasquido o resalto palpable cuando la cabeza femoral luxada reingresa concéntricamente dentro del cotilo',
              say: 'Al abducir, la cabeza femoral que estaba fuera reingresa en el acetábulo con un resalto palpable característico llamado clunk, confirmando una cadera luxada reducible.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Semiología en el lactante mayor',
      title: 'Signos Clínicos en Mayores de Tres Meses: Galeazzi y Abducción',
      cards: [
        {
          title: 'Limitación de la Abducción de Caderas',
          tag: 'El signo clínico más sensible y constante después de los tres meses',
          kind: 'key',
          items: [
            {
              t: 'Pérdida de la apertura normal de muslos en decúbito',
              d: 'Abducción normal simétrica mayor a 60 a 70 grados; patológico ante asimetría evidente o apertura menor a 50 grados',
              say: 'A partir de los tres meses las maniobras de Barlow y Ortolani se vuelven negativas por contractura de los músculos aductores, convirtiéndose la limitación de la abducción en el signo clínico cardinal.',
            },
            {
              t: 'Contractura adaptativa de los músculos aductores',
              d: 'La cabeza luxada fuera del cotilo acorta la distancia ósea provocando tensión muscular que bloquea la separación',
              say: 'La posición anómala de la cabeza femoral genera una contractura rígida de los aductores que impide separar las rodillas sobre la mesa de examen en decúbito dorsal.',
            },
          ],
        },
        {
          title: 'Signo de Galeazzi y Asimetría de Pliegues',
          tag: 'Acortamiento aparente del fémur y pliegues cutáneos',
          kind: 'criteria',
          items: [
            {
              t: 'Signo de Galeazzi: Asimetría en la altura de rodillas',
              d: 'Con el lactante en decúbito y ambas rodillas y caderas flexionadas a 90 grados, la rodilla de la cadera luxada se observa más baja',
              say: 'El signo de Galeazzi se evidencia al juntar los pies sobre la mesa con caderas flexionadas, observándose la rodilla del lado afectado a menor altura por el ascenso posterior del fémur.',
            },
            {
              t: 'Asimetría de pliegues cutáneos: Hallazgo inespecífico',
              d: 'Asimetría de pliegues glúteos e inguinales; signo blando presente en más de un tercio de los lactantes normales sanos',
              say: 'La asimetría de pliegues en muslos es un signo muy inespecífico presente en muchos niños normales, por lo que nunca debe usarse de forma aislada para diagnosticar displasia.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Semiología articular comparada',
      title: 'Comparación de Maniobras y Signos Clínicos en Displasia de Cadera',
      head: ['Maniobra o Signo', 'Mecanismo Exploratorio', 'Edad Óptima de Pesquisa', 'Interpretación Fisiológica'],
      rows: [
        {
          cells: ['Maniobra de Barlow', 'Aducción más empuje posterior', 'Menor a tres meses', 'Cadera luxable: la cabeza sale'],
          say: 'Barlow evalúa si la cadera es luxable hacia atrás mediante aducción suave en los primeros meses.',
        },
        {
          cells: ['Maniobra de Ortolani', 'Abducción más tracción anterior', 'Menor a tres meses', 'Cadera reducida: resalto de entrada'],
          say: 'Ortolani reduce la cadera luxada hacia adentro al abducir el muslo, sintiéndose un resalto clunk.',
        },
        {
          cells: ['Limitación abducción', 'Separación pasiva de caderas', 'Mayor a tres meses', 'Contractura de aductores por luxación'],
          say: 'La limitación de la abducción es el signo más constante en mayores de tres meses por tensión muscular.',
        },
        {
          cells: ['Signo de Galeazzi', 'Altura de rodillas a 90 grados', 'Mayor a tres meses', 'Acortamiento femoral relativo del lado luxado'],
          say: 'Galeazzi demuestra una rodilla más baja en el lado afectado por el desplazamiento superior de la cabeza.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Programa nacional de tamizaje ges',
      title: 'Tamizaje Universal GES N° 23: Radiografía a los Tres Meses',
      cards: [
        {
          title: 'Garantía Explícita en Salud: Cobertura Universal al 100%',
          tag: 'Todo lactante en Chile tiene derecho a radiografía a los 3 meses',
          kind: 'key',
          items: [
            {
              t: 'Radiografía de pelvis anteroposterior a los tres meses de vida',
              d: 'Examen de tamizaje obligatorio garantizado por el sistema público y privado para todos los niños a los 3 meses cumplidos',
              say: 'En Chile la garantía explícita en salud número veintitrés asegura a todo lactante el derecho a una radiografía de pelvis anteroposterior a los tres meses de vida cumplidos.',
            },
            {
              t: '¿Por qué a los tres meses y no antes?',
              d: 'Antes de los 3 meses las estructuras de la pelvis son predominantemente cartilaginosas y no se ven bien en rayos X',
              say: 'Se realiza a los tres meses porque antes de esa edad la pelvis es cartilaginosa y radiolúcida, dificultando una medición certera de los ángulos acetabulares.',
            },
          ],
        },
        {
          title: 'Ecografía de Caderas (Método de Graf): En Menores de Tres Meses',
          tag: 'Estudio de elección anticipado ante factores de riesgo o clínica',
          kind: 'criteria',
          items: [
            {
              t: 'Indicaciones de ecografía precoz al mes de vida',
              d: 'Recién nacido con Barlow u Ortolani positivo, presentación podálica o antecedente familiar de primer grado',
              say: 'La ecografía de caderas según técnica de Graf es el estudio de elección en menores de tres meses con examen físico alterado o antecedentes de parto podálico.',
            },
            {
              t: 'Evaluación dinámica del labrum y profundidad acetabular',
              d: 'Mide los ángulos alfa y beta sin irradiación, permitiendo iniciar tratamiento ortopédico en el primer mes',
              say: 'Permite medir los ángulos alfa y beta visualizando directamente el cartílago sin radiación, habilitando el uso precoz de correas de Pavlik.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Interpretación radiológica paso a paso',
      title: 'Líneas Radiológicas y Cuadrantes de Ombredanne',
      cards: [
        {
          title: 'Las Líneas Anatómicas de Referencia',
          tag: 'Construcción geométrica sobre la radiografía de pelvis',
          kind: 'key',
          items: [
            {
              t: 'Línea de Hilgenreiner: Línea horizontal basal',
              d: 'Línea horizontal recta que conecta la porción más inferior de los cartílagos trirradiados en ambos ilíacos',
              say: 'La línea de Hilgenreiner es una horizontal que une los cartílagos trirradiados en el fondo de ambos cotilos, sirviendo de base para todas las mediciones.',
            },
            {
              t: 'Línea de Perkin: Línea vertical descendente',
              d: 'Línea perpendicular a Hilgenreiner trazada desde el borde óseo más externo del techo acetabular',
              say: 'La línea de Perkin es una perpendicular que desciende desde el reborde óseo más externo del techo acetabular, dividiendo la cadera en mitades.',
            },
          ],
        },
        {
          title: 'Los Cuatro Cuadrantes de Ombredanne',
          tag: 'Ubicación anatómica de la cabeza o núcleo femoral',
          kind: 'alert',
          items: [
            {
              t: 'Ubicación normal: Cuadrante ínfero-interno',
              d: 'El núcleo de osificación femoral proximal debe situarse estrictamente en el cuadrante inferior e interno',
              say: 'En una cadera normal la cabeza femoral o su núcleo deben ubicarse estrictamente dentro del cuadrante ínfero-interno formado por el cruce de ambas líneas.',
            },
            {
              t: 'Patológico: Cuadrante súpero-externo indica luxación',
              d: 'Si el núcleo se desplaza hacia arriba y afuera, al cuadrante superior y externo, la cadera está francamente luxada',
              say: 'Si el núcleo femoral asciende y se ubica en el cuadrante súpero-externo, se confirma de inmediato que la cadera se encuentra luxada.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Mediciones angulares radiológicas',
      title: 'Índice Acetabular y Arco de Shenton: Medición de la Displasia',
      cards: [
        {
          title: 'Índice Acetabular: Medición del Techo Cotiloideo',
          tag: 'El valor angular numérico más preguntado en el examen',
          kind: 'key',
          items: [
            {
              t: 'Ángulo entre la línea de Hilgenreiner y el techo acetabular',
              d: 'Trazo oblicuo desde el cartílago trirradiado hasta el borde lateral del techo acetabular; mide la inclinación ósea',
              say: 'El índice acetabular se forma trazando una línea oblicua desde el cartílago trirradiado a lo largo del techo cotiloideo hasta la línea horizontal.',
            },
            {
              t: 'Valores normales y punto de corte patológico a los tres meses',
              d: 'Normal a los 3 meses: menor o igual a 30 grados; valores superiores a 30 grados confirman displasia acetabular',
              say: 'A los tres meses de vida el valor normal debe ser menor o igual a treinta grados. Si sobrepasa los treinta grados se diagnostica displasia de cadera.',
            },
          ],
        },
        {
          title: 'Arco o Línea de Shenton (Línea Cérvico-Obturatriz)',
          tag: 'Continuidad armónica de las curvas óseas de la pelvis',
          kind: 'criteria',
          items: [
            {
              t: 'Arco parabólico continuo entre cuello femoral y agujero obturador',
              d: 'Trazo continuo imaginario que une el borde inferior del cuello femoral con el borde superior del agujero obturador',
              say: 'El arco de Shenton es una parábola continua que une el borde inferior del cuello del fémur con el margen superior del agujero obturatriz.',
            },
            {
              t: 'Ruptura del arco de Shenton en subluxación y luxación',
              d: 'La pérdida de continuidad de la línea indica que la cabeza femoral está ascendida fuera del cotilo anatómico',
              say: 'Si la cabeza femoral está ascendida o fuera del cotilo, el arco de Shenton se interrumpe y se quiebra, demostrando subluxación articular.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Semiología radiológica maestra',
      title: 'Parámetros Radiológicos Clave para Evaluar Displasia de Cadera a los 3 Meses',
      head: ['Parámetro Radiológico', 'Definición Anatómica', 'Valor Normal a los 3 Meses', 'Signo Patológico de Displasia'],
      rows: [
        {
          cells: ['Línea de Hilgenreiner', 'Horizontal entre cartílagos trirradiados', 'Línea de referencia basal', 'Desviación en báscula pelviana'],
          say: 'Hilgenreiner conecta ambos cartílagos trirradiados de la pelvis sirviendo como línea basal horizontal.',
        },
        {
          cells: ['Línea de Perkin', 'Vertical por reborde acetabular externo', 'Perpendicular a Hilgenreiner', 'Delimita los cuadrantes con Hilgenreiner'],
          say: 'Perkin desciende verticalmente desde el margen cotiloideo externo dividiendo el cotilo en cuadrantes.',
        },
        {
          cells: ['Cuadrantes de Ombredanne', 'Cruce de Hilgenreiner y Perkin', 'Núcleo en cuadrante ínfero-interno', 'Núcleo en cuadrante súpero-externo'],
          say: 'El núcleo de osificación femoral debe ubicarse ínfero-interno; si está súpero-externo hay luxación.',
        },
        {
          cells: ['Índice acetabular', 'Inclinación angular del techo', 'Menor o igual a treinta grados', 'Mayor a treinta grados confirma displasia'],
          say: 'El índice acetabular debe ser menor o igual a treinta grados; valores superiores definen displasia cotiloidea.',
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tratamiento ortopédico escalonado',
      title: 'Algoritmo Terapéutico en Menores de Seis Meses: Correas de Pavlik',
      nodes: [
        { id: 'rad', col: 0, row: 1, k: 'start', t: 'Confirmación diagnóstica a los 3m', s: 'Radiografía de pelvis alterada con índice mayor a treinta grados o luxación' },
        { id: 'tra', col: 1, row: 1, k: 'good', t: 'Derivación urgente a Traumatología', s: 'Garantía GES: atención por traumatólogo infantil en menos de treinta días' },
        { id: 'pav', col: 2, row: 1, k: 'good', t: 'Instalación de Arnés de Pavlik', s: 'Flexión de 90 a 100 grados y abducción de 45 a 60 grados concéntrica' },
        { id: 'cur', col: 3, row: 1, k: 'effect', t: 'Remodelación ósea y curación', s: 'Profundización normal del acetábulo con éxito mayor al noventa y cinco por ciento' },
      ],
      edges: [
        { from: 'rad', to: 'tra', label: 'activación GES N° 23' },
        { from: 'tra', to: 'pav', label: 'evaluación ortopédica' },
        { from: 'pav', to: 'cur', label: 'tres meses de uso' },
      ],
      steps: [
        {
          show: ['rad', 'tra'],
          note: 'Confirmación radiológica y activación inmediata de la garantía GES',
          say: 'Al confirmar una radiografía de pelvis alterada a los tres meses se activa la garantía GES número veintitrés, derivando de inmediato al paciente para ser evaluado por traumatología infantil.',
        },
        {
          show: ['pav', 'cur'],
          note: 'Instalación del arnés de Pavlik y remodelación cotiloidea',
          say: 'El traumatólogo instala las correas de Pavlik manteniendo las caderas en flexión de noventa grados y abducción suave, logrando que la cabeza femoral estimule la remodelación del cotilo con curación completa en más del noventa y cinco por ciento.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Ortopedia no invasiva',
      title: 'Correas de Pavlik: Estándar de Oro y Prohibición del Doble Pañal',
      cards: [
        {
          title: 'Principios y Precauciones con el Arnés de Pavlik',
          tag: 'Tratamiento dinámico de elección en menores de seis meses',
          kind: 'key',
          items: [
            {
              t: 'Posición biomecánica de seguridad concéntrica',
              d: 'Flexión entre 90 y 100 grados con abducción entre 45 y 60 grados; permite libre movilidad dentro del rango seguro',
              say: 'El arnés de Pavlik sostiene las caderas en la posición ideal de flexión y abducción moderada, permitiendo al lactante mover las piernas sin que la cabeza femoral se desplace fuera del acetábulo.',
            },
            {
              t: 'Vigilancia de complicaciones: Nervio crural y necrosis',
              d: 'La flexión excesiva mayor a 110 grados comprime el nervio femoral; la hiperabducción extrema comprime vasos causando necrosis avascular',
              say: 'Debe vigilarse que la flexión no supere los ciento diez grados para no lesionar el nervio femoral, y evitar abducciones extremas que compriman los vasos circunflejos causando necrosis de la cabeza.',
            },
          ],
        },
        {
          title: 'El Mito Popular Peligroso del Doble Pañal',
          tag: 'Práctica tradicional totalmente contraindicada y dañina',
          kind: 'alert',
          items: [
            {
              t: 'Inutilidad terapéutica demostrada científicamente',
              d: 'El doble pañal no ejerce fuerza mecánica suficiente para mantener la abducción estable ni para reducir una cadera luxada',
              say: 'El uso de doble pañal es una práctica tradicional completamente inútil que no posee rigidez mecánica para mantener la reducción ni corregir la displasia cotiloidea.',
            },
            {
              t: 'Peligro grave de retraso en el tratamiento oportuno',
              d: 'Genera una falsa sensación de seguridad en los padres retrasando la indicación del arnés de Pavlik y llevando a secuelas',
              say: 'Su indicación está formalmente prohibida porque genera una falsa sensación de tranquilidad que retrasa la consulta oportuna, cerrando la ventana terapéutica conservadora del lactante.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo en diagnóstico tardío',
      title: 'Tratamiento en Mayores de Seis Meses o Falla de Pavlik',
      cards: [
        {
          title: 'Lactantes entre Seis y Dieciocho Meses',
          tag: 'Pérdida de la eficacia del tratamiento con arnés de correas',
          kind: 'alert',
          items: [
            {
              t: 'Incapacidad de contención con correas de Pavlik',
              d: 'El mayor peso, fuerza muscular y movilidad impiden que el arnés mantenga la reducción; riesgo de luxación refractaria',
              say: 'Posterior al sexto mes las correas de Pavlik pierden eficacia debido al aumento de peso y a la potente fuerza muscular del lactante, aumentando el riesgo de fracaso del tratamiento.',
            },
            {
              t: 'Reducción cerrada bajo anestesia general y bota de yeso',
              d: 'Tenotomía de aductores si hay contractura, reducción en pabellón e inmovilización con yeso pelvipedio por doce semanas',
              say: 'A esta edad el tratamiento requiere reducción cerrada bajo anestesia general en pabellón quirúrgico, a menudo con tenotomía de aductores e inmovilización con espica de yeso pelvipedio.',
            },
          ],
        },
        {
          title: 'Niños Mayores de Dieciocho Meses que ya Caminan',
          tag: 'Casos severos con deformidad anatómica irreversible',
          kind: 'criteria',
          items: [
            {
              t: 'Reducción abierta quirúrgica y osteotomías pelvianas',
              d: 'Apertura de la cápsula articular, limpieza del pulvinar cotiloideo, osteotomía femoral desrotadora y osteotomía acetabular de Salter',
              say: 'En niños mayores que ya caminan con cojera se requiere cirugía mayor con reducción abierta, resección de tejidos interpuestos y osteotomías óseas del fémur y de la pelvis.',
            },
            {
              t: 'Pronóstico y secuelas funcionales a largo plazo',
              d: 'A mayor edad de tratamiento se incrementa el riesgo de dismetría de extremidades, cojera residual y artrosis dolorosa precoz',
              say: 'El pronóstico funcional decae drásticamente cuando el diagnóstico se retrasa, justificando plenamente el tamizaje radiológico universal a los tres meses.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de actuación clínica',
      title: 'Algoritmo de Tamizaje GES, Diagnóstico y Manejo de la Displasia de Cadera',
      say: 'Examinemos el algoritmo paso a paso para el tamizaje universal de cadera, la indicación de imágenes según la edad y la secuencia de tratamiento ortopédico.',
    },

    {
      type: 'quiz',
      kicker: 'Banco Oficial AEE · Perfil V3 2.01.1.140',
      title: 'Maniobra Semiológica de Reducción con Resalto Palpable',
      stem: 'Durante el control de salud de un lactante de 2 meses se realiza el examen físico articular de caderas. El médico flexiona las caderas a 90° y al realizar una suave abducción de ambos muslos mientras presiona el trocánter mayor hacia adelante, percibe un resalto audible y palpable (clunk) en la cadera izquierda que se reduce dentro del cotilo.',
      question: '¿Cuál es el nombre de esta maniobra semiológica y su significado clínico?',
      options: [
        { letter: 'A', text: 'Maniobra de Barlow; indica cadera luxable hacia atrás' },
        { letter: 'B', text: 'Maniobra de Ortolani; indica reducción de una cadera previamente luxada' },
        { letter: 'C', text: 'Signo de Galeazzi; indica fractura del cuello femoral' },
        { letter: 'D', text: 'Signo de Trendelenburg; indica parálisis del nervio ciático' },
        { letter: 'E', text: 'Maniobra de Adams; indica escoliosis idiopática' },
      ],
      correct: 'B',
      explanation: 'La maniobra de Ortolani es una maniobra abductora y reductora. Al realizar la abducción de la cadera flexionada en 90 grados presionando el trocánter hacia adelante, la cabeza femoral que se encontraba luxada o subluxada fuera del acetábulo es guiada hacia adentro, percibiéndose un resalto o clunk palpable cuando reingresa en la cavidad cotiloidea. En cambio, Barlow es aductora y luxadora (saca la cabeza femoral inestable). Galeazzi evalúa la altura de las rodillas y Trendelenburg la suficiencia del glúteo medio en la marcha.',
      say: {
        stem: 'Lactante de dos meses en quien al realizar abducción de cadera flexionada con presión anterior se percibe un resalto clunk de reducción.',
        question: '¿Cuál es el nombre de esta maniobra y su significado clínico?',
        options: 'La opción A maniobra de Barlow. La B maniobra de Ortolani indicando reducción de una cadera previamente luxada. La C signo de Galeazzi. La D signo de Trendelenburg. La E maniobra de Adams. Recuerda qué maniobra reduce la cadera. Piénsalo.',
        answer: 'La respuesta correcta es la B. La maniobra de Ortolani es abductora y reductora, reintroduciendo la cabeza femoral luxada con un resalto clunk palpable.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco Oficial AEE · Perfil V3 2.01.1.140',
      title: 'Conducta ante Radiografía de Pelvis Patológica a los Tres Meses',
      stem: 'Se revisa la radiografía de pelvis anteroposterior tomada a los 3 meses de vida a un lactante como parte del tamizaje GES. En la cadera derecha se constata: índice acetabular de 36° (normal menor o igual a 30°) y el núcleo de osificación femoral proximal se ubica en el cuadrante súpero-externo determinado por la intersección de las líneas de Hilgenreiner y Perkin.',
      question: '¿Cuál es el tratamiento de primera línea de esta patología ortopédica?',
      options: [
        { letter: 'A', text: 'Kinesioterapia motora exclusiva dos veces por semana' },
        { letter: 'B', text: 'Instalación de Correas o Arnés de Pavlik por traumatólogo infantil' },
        { letter: 'C', text: 'Osteotomía femoral varizante desrotadora urgente en pabellón' },
        { letter: 'D', text: 'Uso de doble pañal de tela grueso durante el día' },
        { letter: 'E', text: 'Conducta expectante y repetir radiografía a los 12 meses cuando inicie la marcha' },
      ],
      correct: 'B',
      explanation: 'La radiografía de pelvis confirma Displasia del Desarrollo de la Cadera con luxación articular franca (índice acetabular de 36° marcadamente superior a 30° y núcleo de osificación en el cuadrante súpero-externo de Ombredanne). En lactantes menores de 6 meses de vida, el tratamiento estándar de oro, de primera línea y garantizado por el GES N° 23 es la colocación de Correas o Arnés de Pavlik por especialista traumatólogo infantil, logrando una reducción concéntrica y remodelación acetabular exitosa en más del 95% de los casos sin requerir cirugía invasiva.',
      say: {
        stem: 'Radiografía de pelvis a los tres meses con índice acetabular de treinta y seis grados y núcleo en cuadrante súpero externo de Ombredanne.',
        question: '¿Cuál es el tratamiento de primera línea de esta patología ortopédica?',
        options: 'La opción A kinesioterapia motora. La B instalación de correas o arnés de Pavlik por traumatólogo infantil. La C osteotomía femoral urgente. La D doble pañal de tela. La E conducta expectante. Recuerda el tratamiento de elección en menores de seis meses. Piénsalo.',
        answer: 'La respuesta correcta es la B. En menores de seis meses el tratamiento estándar de oro garantizado por el GES es la instalación del arnés de Pavlik.',
      },
    },

    {
      type: 'points',
      kicker: 'Reglas de oro EUNACOM',
      title: 'Puntos Clave y Perlas Indispensables en Displasia de Cadera',
      cards: [
        {
          title: 'Semiología Diferencial Impecable',
          tag: 'Ortolani entra y Barlow sale',
          kind: 'key',
          items: [
            {
              t: 'Mnemotecnia clásica: Ortolani entra y Barlow sale',
              d: 'Ortolani abduce y reduce una cadera luxada; Barlow aduce y luxa una cadera inestable',
              say: 'Recuerden siempre la regla de oro: la maniobra de Ortolani abduce y entra la cadera luxada, mientras que Barlow aduce y saca la cadera inestable.',
            },
            {
              t: 'Limitación de la abducción en mayores de tres meses',
              d: 'El signo más fidedigno en el lactante mayor por contractura adaptativa de la musculatura aductora',
              say: 'En mayores de tres meses busquen siempre la limitación de la abducción y el signo de Galeazzi, ya que Barlow y Ortolani se negativizan.',
            },
          ],
        },
        {
          title: 'Tamizaje GES y Prohibición del Doble Pañal',
          tag: 'Garantía explícita y conducta médica correcta',
          kind: 'pharma',
          items: [
            {
              t: 'Radiografía de pelvis universal a los tres meses de vida',
              d: 'Garantía GES N° 23 para todos los lactantes; índice acetabular normal menor o igual a 30 grados',
              say: 'Indiquen sin excepción la radiografía de pelvis a los tres meses garantizada por el GES, verificando que el índice acetabular no supere los treinta grados.',
            },
            {
              t: 'Correas de Pavlik en menores de 6 meses; jamás doble pañal',
              d: 'El arnés de Pavlik cura el noventa y cinco por ciento; el doble pañal está formalmente prohibido por ineficaz y perjudicial',
              say: 'Las correas de Pavlik son el estándar en menores de seis meses. Si te llevas una sola idea de hoy: en Chile la radiografía de pelvis a los tres meses es una garantía explícita universal que pesquisa a tiempo la displasia acetabular. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Tamizaje GES, Diagnóstico y Manejo de la Displasia del Desarrollo de la Cadera',
    root: N(
      'start',
      'Lactante en Control de Salud Infantil: Evaluación Clínica de Caderas según Edad',
      'Examen físico articular en todo control sano desde el período neonatal',
      'Iniciamos el abordaje evaluando la articulación de las caderas en cada control de salud infantil según los meses de vida.',
      [
        'Lactante menor de tres meses de vida (Examen neonatal y primer mes)',
        N(
          'q',
          '¿Maniobra de Ortolani o Barlow positiva, o antecedente de parto podálico?',
          'Signos de inestabilidad articular o factores de riesgo mayores',
          'En el menor de tres meses evaluamos si presenta Ortolani o Barlow positivo o factores de riesgo.',
          [
            'Sí: Barlow u Ortolani positivo, o recién nacido podálico',
            N(
              'refer',
              'Solicitar Ecografía de Caderas (Técnica de Graf) y Derivar a Traumatología',
              'Ecografía de caderas precoz al mes de vida · Derivación prioritaria a traumatología infantil · Instalación precoz de Correas de Pavlik (GES N° 23)',
              'Ante maniobras positivas o parto podálico solicitamos ecografía precoz y derivamos para instalación de correas de Pavlik.',
            ),
          ],
          [
            'No: Examen articular normal sin factores de riesgo mayores',
            N(
              'ok',
              'Continuar Controles y Solicitar Radiografía de Pelvis AP a los 3 Meses',
              'Mantener controles sanos periódicos · Orden médica para radiografía de pelvis AP a los 3 meses de vida obligatoria para todos los lactantes (GES N° 23)',
              'Si el examen es normal se mantiene el seguimiento habitual programando la radiografía de pelvis universal a los tres meses.',
            ),
          ],
        ),
      ],
      [
        'Lactante de tres meses de vida: Resultado de la Radiografía de Pelvis AP',
        N(
          'q',
          '¿Cuál es el valor del Índice Acetabular y la posición del núcleo femoral?',
          'Medición con líneas de Hilgenreiner y Perkin y cuadrantes de Ombredanne',
          'A los tres meses analizamos la radiografía de pelvis midiendo el índice acetabular y los cuadrantes.',
          [
            'Índice acetabular > 30° o núcleo en cuadrante súpero-externo',
            N(
              'alert',
              'Confirmación de DDC: Derivación Inmediata para Correas de Pavlik',
              'Activación de garantía GES N° 23 · Traumatólogo infantil instala Arnés de Pavlik por 3 meses · Control radiológico posterior · Prohibido doble pañal',
              'Si el índice supera treinta grados confirmamos displasia y derivamos de inmediato para instalación del arnés de Pavlik.',
            ),
          ],
          [
            'Índice acetabular <= 30° y núcleo en cuadrante ínfero-interno simétrico',
            N(
              'ok',
              'Radiografía Normal: Alta de Tamizaje de Cadera y Control Sano',
              'Confirmación de cotilos bien formados · Continuar controles habituales en APS · Vigilancia de simetría al inicio del gateo y marcha',
              'Si el índice es menor o igual a treinta grados y el núcleo es ínfero-interno se otorga el alta de tamizaje de cadera.',
            ),
          ],
        ),
      ],
    ),
  },
};
