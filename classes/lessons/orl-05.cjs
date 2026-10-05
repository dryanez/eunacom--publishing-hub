// Clase 14.5 (Otorrinolaringología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_otorrino.cjs (orl-05). Preguntas: banco real EUNACOM (class_questions.cjs).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'orl-05',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cómo leer el diapasón, la audiometría y la impedanciometría para separar una hipoacusia de conducción de una sensorioneural',
      say: 'Bienvenido. Hasta ahora estudiaste oídos que se ven en la otoscopía. Hoy vemos cómo se mide la audición cuando la otoscopía no alcanza. Son tres herramientas: el diapasón, la audiometría y la impedanciometría. En el examen aparecen todos los años, casi siempre con la misma pregunta de fondo: ¿el problema está en la conducción del sonido o en la cóclea y el nervio? Partamos.',
    },

    {
      type: 'points',
      kicker: 'Acumetría',
      title: 'Diapasón: Weber y Rinne',
      cards: [
        { title: 'Test de Weber', tag: 'Diapasón en la frente', kind: 'key', items: [
          { t: 'Diapasón 512 Hz en la frente', d: 'Pregunta: ¿por qué oído lo oyes más?',
            say: 'El Weber se hace con un diapasón de quinientos doce hertz apoyado en la frente, en el vértex o en los incisivos. Le preguntas al paciente por qué oído lo escucha más fuerte. Si la audición es normal o igual en los dos oídos, el sonido queda en el centro y no lateraliza.' },
          { t: 'Conducción: lateraliza al oído enfermo', d: 'El oído malo queda aislado del ruido',
            say: 'En una hipoacusia de conducción, el sonido se va hacia el oído enfermo. Parece raro, pero tiene lógica: ese oído está aislado del ruido ambiente, y la vibración que llega por el hueso se oye más fuerte.' },
          { t: 'Sensorioneural: lateraliza al oído sano', d: 'La cóclea enferma no transduce',
            say: 'En una hipoacusia sensorioneural, el sonido se va hacia el oído sano, porque la cóclea del lado enfermo no es capaz de transformar la vibración en señal nerviosa.' },
        ] },
        { title: 'Test de Rinne', tag: 'Aire contra hueso', kind: 'criteria', items: [
          { t: 'Compara vía aérea con vía ósea', d: 'Delante del conducto y sobre la mastoides',
            say: 'El Rinne compara la audición por aire, con el diapasón frente al conducto, con la audición por hueso, con el diapasón sobre la mastoides. Se hace oído por oído.' },
          { t: 'Rinne positivo: aire mayor que hueso', d: 'Normal y también sensorioneural',
            say: 'Lo normal es que el aire sea mejor que el hueso, y eso se llama Rinne positivo. Ojo con esto: en la hipoacusia sensorioneural el Rinne también es positivo, porque la conducción está intacta.' },
          { t: 'Rinne negativo: hueso mayor que aire', d: 'Patognomónico de conducción',
            say: 'Si el hueso se oye mejor que el aire, el Rinne es negativo, y eso es patognomónico de hipoacusia de conducción. Es el dato que más se usa para decidir de qué lado está el problema.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'gallery',
      kicker: 'Así se ve',
      title: 'Cómo se hace el Weber',
      images: [
        { src: 'biblioteca/17_otorrino/orl-05/01_prueba-de-weber-diapason-en-la-frente__bates_p277.jpg', label: 'Diapasón vibrando, apoyado en la frente del paciente (prueba de Weber)', credit: 'Bates, Guía de exploración física, Fig. 7-44' },
      ],
      steps: [
        { note: 'Diapasón en la frente, línea media',
          say: 'Fíjate en la posición: el diapasón vibra y se apoya en la frente, justo en la línea media. Desde ahí, el sonido le llega a los dos oídos por el hueso del cráneo. Tú solo preguntas hacia dónde se va, y con eso ya sabes si el problema es de conducción o sensorioneural.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Audiometría tonal',
      title: 'La brecha óseo-aérea decide el tipo',
      cards: [
        { title: 'Cómo se lee', tag: 'Dos curvas', kind: 'criteria', items: [
          { t: 'Aire y hueso, 125-8000 Hz', d: 'Normal: ambas hasta 20 a 25 dB',
            say: 'La audiometría mide el umbral en decibeles para cada frecuencia, entre ciento veinticinco y ocho mil hertz, por vía aérea con auriculares y por vía ósea con un vibrador en la mastoides. Lo normal es que las dos curvas estén bajo veinte a veinticinco decibeles y juntas.' },
          { t: 'Conducción: hueso normal, aire bajo', d: 'Brecha mayor o igual a 15 dB',
            say: 'En la hipoacusia de conducción, la vía ósea está normal y la vía aérea desciende. La diferencia entre las dos curvas se llama brecha óseo-aérea, y se considera significativa desde quince decibeles.' },
          { t: 'Sensorioneural: ambas bajan juntas', d: 'Sin brecha, menos de 10 dB',
            say: 'En la sensorioneural, las dos curvas bajan juntas, superpuestas, sin brecha, o con una diferencia menor de diez decibeles. Y si hay las dos cosas, curvas descendidas y además brecha, es una hipoacusia mixta.' },
        ] },
        { title: 'Qué la causa', tag: 'Ejemplos que se preguntan', kind: 'key', items: [
          { t: 'Conducción: cerumen, efusión, perforación', d: 'Y otoesclerosis',
            say: 'La brecha habla de un problema mecánico en el conducto o en el oído medio: cerumen, otitis con efusión, perforación timpánica y otoesclerosis.' },
          { t: 'Sensorioneural: cóclea o nervio', d: 'Presbiacusia, súbita, ototoxicidad, neurinoma',
            say: 'La pérdida sin brecha habla de células ciliadas o nervio coclear: presbiacusia, hipoacusia súbita, ototoxicidad y neurinoma del acústico. Esas las vemos en la próxima clase.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Impedanciometría',
      title: 'Curvas de Jerger: qué dice cada una',
      cards: [
        { title: 'Curvas con pico', tag: 'Pico en cero', kind: 'normal', items: [
          { t: 'Curva A: normal', d: 'Oído medio sano y ventilado',
            say: 'La impedanciometría mide cuánto se mueve el tímpano cuando cambias la presión en el conducto. Con eso se dibuja el timpanograma. La curva A tiene un pico de movilidad normal, centrado, y significa un oído medio sano y bien ventilado.' },
          { t: 'Curva As: pico bajo', d: 'Rigidez: otoesclerosis',
            say: 'La curva As tiene el pico en su lugar, pero muy bajo. El sistema está rígido, y la causa clásica es la otoesclerosis, o la timpanoesclerosis extensa.' },
          { t: 'Curva Ad: pico excesivo', d: 'Disyunción de la cadena',
            say: 'La curva Ad es lo contrario: un pico altísimo, de un sistema demasiado flácido. Corresponde a una disyunción de la cadena de huesecillos o a un tímpano hiperflácido.' },
        ] },
        { title: 'Sin pico o desplazado', tag: 'Las más preguntadas', kind: 'alert', items: [
          { t: 'Curva B: plana, sin pico', d: 'Líquido: otitis con efusión',
            say: 'La curva B es plana, no tiene punto de máxima movilidad. Es el hallazgo clásico de la otitis media con efusión, porque el líquido impide que el tímpano se mueva. Esta ya la viste en la clase de oído medio crónico.' },
          { t: 'Curva B con volumen alto', d: 'Perforación o colleras permeables',
            say: 'Una curva B con el volumen del conducto muy aumentado, sobre dos coma cinco mililitros, no es líquido. Significa que el aire se escapa por una perforación amplia o por colleras permeables.' },
          { t: 'Curva C: pico en presión negativa', d: 'Disfunción de la trompa',
            say: 'La curva C tiene el pico desplazado hacia presiones muy negativas, bajo menos cien daPa. Es la firma de la disfunción de la trompa de Eustaquio, que no ventila el oído medio.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Conducción contra sensorioneural',
      head: ['', 'Normal', 'Conducción', 'Sensorioneural'],
      rows: [
        { cells: ['Weber', 'Centrado', 'Al oído enfermo', 'Al oído sano'],
          say: 'Esta tabla te la tienes que saber de memoria. Weber: en la audición normal queda centrado, en la conducción va al oído enfermo, y en la sensorioneural va al oído sano.' },
        { cells: ['Rinne', 'Positivo', 'Negativo en el oído enfermo', 'Positivo'],
          say: 'Rinne: normal es positivo. En conducción es negativo en el oído enfermo. Y en la sensorioneural sigue siendo positivo. Por eso un Rinne positivo no descarta hipoacusia: solo descarta que sea de conducción.' },
        { cells: ['Audiometría', 'Ambas curvas hasta 20 dB', 'Hueso normal, aire bajo, brecha 15 o más', 'Ambas bajan juntas, sin brecha'],
          say: 'En la audiometría, lo que separa los dos tipos es la brecha. Hay brecha, es conducción. No hay brecha, es sensorioneural.' },
        { cells: ['Timpanograma', 'Curva A', 'Curva B, C o As', 'Curva A normal'],
          say: 'Y en la impedanciometría, la hipoacusia sensorioneural da un timpanograma normal, curva A, porque el oído medio está sano. En la de conducción aparece una curva B, C o As, según la causa.' },
        { cells: ['Reflejo estapedial', 'Presente en ambos lados', 'Ausente en el oído con patología', 'Presente si la pérdida es leve a moderada'],
          say: 'El reflejo estapedial está presente en el oído normal, ausente en el oído con patología de conducción, y puede estar presente en una sensorioneural leve a moderada.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Integremos todo en un árbol, partiendo del paciente que dice que no oye bien.',
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Un hombre de 55 años consulta por hipoacusia del oído izquierdo de 2 semanas, sin dolor ni secreción. La otoscopía es normal en ambos oídos. Con el diapasón de 512 Hz, el Weber lateraliza hacia el oído derecho y el Rinne es positivo en ambos oídos.',
      question: '¿Qué tipo de hipoacusia tiene y cómo la confirmarías?',
      options: [
        { letter: 'A', text: 'Hipoacusia de conducción izquierda; timpanometría' },
        { letter: 'B', text: 'Hipoacusia de conducción derecha; audiometría' },
        { letter: 'C', text: 'Hipoacusia sensorioneural izquierda; audiometría tonal' },
        { letter: 'D', text: 'Audición normal; control en un mes' },
        { letter: 'E', text: 'Tapón de cerumen izquierdo; lavado de oído' },
      ],
      correct: 'C',
      explanation: 'El Weber se va al oído derecho, el sano, y el Rinne es positivo en ambos lados: es una hipoacusia sensorioneural del oído izquierdo. Se confirma con audiometría tonal, que debe mostrar ambas curvas descendidas sin brecha. Una hipoacusia de conducción izquierda daría Weber al izquierdo y Rinne negativo en ese oído.',
      say: {
        stem: 'Pongamos a prueba lo que viste. Hombre de cincuenta y cinco años con dos semanas de hipoacusia izquierda, sin dolor ni secreción. La otoscopía es normal en los dos oídos. Con el diapasón, el Weber se va hacia el oído derecho, y el Rinne es positivo en ambos oídos.',
        question: '¿Qué tipo de hipoacusia tiene y cómo la confirmarías?',
        options: 'Las opciones: conducción izquierda con timpanometría, conducción derecha con audiometría, sensorioneural izquierda con audiometría tonal, audición normal, o tapón de cerumen. Piénsalo.',
        answer: 'Es la C. El Weber se fue al oído derecho, que es el sano, y el Rinne positivo descarta conducción. Entonces la hipoacusia es sensorioneural del lado izquierdo, y la confirmas con audiometría tonal. Una hipoacusia de conducción izquierda habría desviado el Weber hacia la izquierda y habría dado Rinne negativo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 35',
      stem: 'Una paciente de 48 años consulta por hipoacusia bilateral de 10 años de evolución, progresiva, que aumentó especialmente durante su último embarazo. Su otoscopía es normal y el examen neurológico no muestra alteraciones vestibulares ni cerebelosas. Se realiza test de diapasones, que muestra prueba de Rinne negativo bilateral y prueba de Weber que no lateraliza.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Hipoacusia genética neurosensorial' },
        { letter: 'B', text: 'Ototoxicidad' },
        { letter: 'C', text: 'Otoesclerosis' },
        { letter: 'D', text: 'Hipoacusia hormonal' },
        { letter: 'E', text: 'Otitis media con efusión' },
      ],
      correct: 'C',
      explanation: 'El Rinne negativo habla de hipoacusia de conducción, y el Weber no lateraliza porque es bilateral y simétrica. Con otoscopía normal, curso lento de diez años y empeoramiento en el embarazo, es otoesclerosis. La otitis con efusión también es de conducción, pero se vería en la otoscopía.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil veinticuatro. Mujer de cuarenta y ocho años con diez años de hipoacusia bilateral progresiva, que empeoró en el último embarazo. La otoscopía es normal. En el diapasón, el Rinne es negativo en los dos oídos y el Weber no lateraliza.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: hipoacusia genética neurosensorial, ototoxicidad, otoesclerosis, hipoacusia hormonal u otitis con efusión. Piénsalo.',
        answer: 'Es la C, otoesclerosis. Rinne negativo en ambos oídos significa conducción bilateral, y como es simétrica, el Weber queda en el centro. Los diez años de evolución y el empeoramiento en el embarazo son lo típico, con un tímpano normal. La otitis con efusión también es de conducción, pero se ve en la otoscopía, y aquí el tímpano es normal.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 136',
      stem: 'Paciente con hipoacusia y tinnitus, examen otoneurológico normal.',
      question: '¿Cuál es el examen a solicitar?',
      options: [
        { letter: 'A', text: 'Potenciales evocados auditivos del tronco cerebral' },
        { letter: 'B', text: 'Impedanciometría' },
        { letter: 'C', text: 'RNM de ángulo pontocerebeloso' },
        { letter: 'D', text: 'TAC de peñascos' },
        { letter: 'E', text: 'Audiometría' },
      ],
      correct: 'E',
      explanation: 'Ante hipoacusia con tinnitus, el primer examen es la audiometría: cuantifica la pérdida y dice si es de conducción o sensorioneural. La imagen y los potenciales evocados vienen después, según el resultado.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de enero de dos mil veintitrés. Paciente con hipoacusia y tinnitus, con examen otoneurológico normal.',
        question: '¿Cuál es el examen a solicitar?',
        options: 'Las opciones: potenciales evocados de tronco, impedanciometría, resonancia del ángulo pontocerebeloso, TAC de peñascos o audiometría. Piénsalo.',
        answer: 'Es la E, audiometría. Siempre es el primer examen cuando hay hipoacusia, porque te dice cuánto pierde y de qué tipo es. Las imágenes y los potenciales evocados se piden después, si la audiometría muestra una pérdida sensorioneural asimétrica o que lo justifique. La impedanciometría solo evalúa el oído medio.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: '¿Cuál de las siguientes curvas de la clasificación de Jerger en la timpanometría se asocia de forma característica a la presencia de líquido seroso intratimpánico en la otitis media con efusión?',
      question: '¿Qué curva corresponde?',
      options: [
        { letter: 'A', text: 'Curva A (pico centrado a 0 daPa con amplitud normal)' },
        { letter: 'B', text: 'Curva As (amplitud disminuida con presión normal)' },
        { letter: 'C', text: 'Curva B (curva aplanada sin punto de máxima compliance)' },
        { letter: 'D', text: 'Curva C (pico desplazado a presiones negativas menores a -100 daPa)' },
        { letter: 'E', text: 'Curva Ad (amplitud muy aumentada por discontinuidad de cadena)' },
      ],
      correct: 'C',
      explanation: 'La curva B es plana, sin pico, porque el líquido del oído medio impide que el tímpano se mueva. La A es normal, la As indica rigidez como en la otoesclerosis, la C indica presión negativa por disfunción tubárica y la Ad indica disyunción de la cadena.',
      say: {
        stem: 'Cerremos con una pregunta del banco, de caso representativo. Pide la curva de Jerger que se asocia al líquido en el oído medio, en una otitis con efusión.',
        question: '¿Qué curva corresponde?',
        options: 'Las opciones: curva A, curva As, curva B, curva C o curva Ad. Piénsalo.',
        answer: 'Es la opción C, que es la curva B de Jerger: plana, sin pico, porque el líquido no deja que el tímpano se mueva. La curva A es la normal. La As es de rigidez, como la otoesclerosis. La C de Jerger es de presión negativa, por la trompa. Y la Ad es de cadena interrumpida.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: evaluar la audición',
      cards: [
        { title: 'Diapasón', tag: 'Weber y Rinne', kind: 'key', items: [
          { t: 'Weber: conducción al enfermo', d: 'Sensorioneural al sano; Rinne negativo = conducción',
            say: 'Cerremos con las reglas de oro. En el Weber, la conducción se va al oído enfermo y la sensorioneural al sano. Un Rinne negativo es patognomónico de conducción, y en la sensorioneural el Rinne sigue positivo.' },
        ] },
        { title: 'Audiometría', tag: 'Primer examen', kind: 'criteria', items: [
          { t: 'Brecha 15 dB o más: conducción', d: 'Sin brecha: sensorioneural',
            say: 'La audiometría es el primer examen ante hipoacusia, y la brecha óseo-aérea separa los tipos: con brecha es conducción, sin brecha es sensorioneural.' },
        ] },
        { title: 'Impedanciometría', tag: 'Curvas de Jerger', kind: 'alert', items: [
          { t: 'B líquido, C trompa, As otoesclerosis', d: 'Curva A es normal',
            say: 'La curva B es líquido, la C es trompa de Eustaquio y la As es otoesclerosis. Si te llevas una sola idea de hoy: el diapasón te dice de qué lado y de qué tipo, y la audiometría lo confirma. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de interpretación: diapasones, audiometría y timpanometría',
    root: N('start', 'Paciente con hipoacusia', 'Otoscopía y diapasón de 512 Hz',
      'Un paciente que consulta por hipoacusia. Después de la otoscopía, el diapasón decide hacia dónde sigue el estudio.',
      ['', N('q', 'Weber y Rinne', '¿Hacia dónde va el Weber? ¿Cómo es el Rinne?',
        'Con el Weber ves hacia dónde se va el sonido, y con el Rinne comparas aire y hueso.',
        ['Weber al oído enfermo, Rinne negativo', N('do', 'Hipoacusia de conducción', 'Audiometría con brecha de 15 dB o más',
          'La audiometría debe mostrar vía ósea normal y vía aérea descendida, con brecha. Ahora la timpanometría ubica la causa.',
          ['Curva B, C, As o Ad', N('ok', 'Oído externo o medio', 'B líquido, C trompa, As otoesclerosis',
            'La curva B es líquido, la C es disfunción de la trompa, la As es otoesclerosis y la Ad es disyunción de cadena. Con otoscopía normal y curva As en una mujer joven, piensa en otoesclerosis.')],
        )],
        ['Weber al oído sano, Rinne positivo', N('refer', 'Hipoacusia sensorioneural', 'Audiometría sin brecha, timpanograma A',
          'Las dos curvas bajan juntas y la impedanciometría es normal. Se estudia cóclea y nervio: presbiacusia, hipoacusia súbita, ototoxicidad o neurinoma. Lo vemos en la próxima clase.')],
      )],
    ),
  },
};
