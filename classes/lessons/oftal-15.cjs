// Clase 15.15 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_oftalmologia.cjs (oftal-15), bloque 4.
// El banco real EUNACOM del código 6.02.1.001 (y búsquedas por "globo ocular abierto", "hipema",
// "cuerpo extraño intraocular", "Seidel", "trauma ocular") no tiene ninguna pregunta donde el
// trauma ocular grave, el globo abierto o el hipema traumático sean la respuesta correcta: los
// resultados con ese código en realidad evalúan vicios de refracción (agudeza visual que mejora
// con agujero estenopeico), tema de otra clase de la especialidad. Se usan las cuatro preguntas
// propias del libro como "Caso representativo", sin fecha, según LESSON_STANDARD.md.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'oftal-15',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'La regla que salva un ojo reparable: en sospecha de globo abierto, no lo toques',
      say: 'Bienvenidos. Hoy vemos el trauma ocular, la principal causa de ceguera monocular en adultos jóvenes, y un tema cubierto íntegramente por la garantía GES número cuarenta y ocho. Tu tarea en urgencias no es examinar el ojo a fondo: es reconocer cuándo hay sospecha de globo ocular abierto y, desde ese momento, no tocarlo. Es un tema denso, con varias prohibiciones absolutas que el examen adora preguntar, así que lo vamos a ver completo.',
    },

    {
      type: 'flow',
      kicker: 'Clasificación BETT',
      title: 'Lo primero: ¿la pared del ojo está íntegra, o no?',
      nodes: [
        { id: 'tra', col: 0, row: 1, k: 'start', t: 'Trauma ocular mecánico', s: '¿La pared del globo conserva su integridad?' },
        { id: 'cer', col: 1, row: 0, k: 'good', t: 'Trauma ocular cerrado', s: 'Córnea y esclera de espesor total conservado' },
        { id: 'abi', col: 1, row: 2, k: 'alert', t: 'Trauma ocular abierto', s: 'Herida de espesor total que comunica con el exterior' },
        { id: 'rot', col: 2, row: 2, k: 'risk', t: 'Ruptura', s: 'Objeto romo, presión hidrostática interna' },
        { id: 'pen', col: 3, row: 2, k: 'risk', t: 'Herida penetrante o perforante', s: 'Con o sin orificio de salida' },
        { id: 'cei', col: 4, row: 2, k: 'trap', t: 'Cuerpo extraño intraocular', s: 'Fragmento metálico retenido dentro del ojo' },
      ],
      edges: [
        { from: 'tra', to: 'cer', label: 'integridad conservada' }, { from: 'tra', to: 'abi', label: 'espesor total roto' },
        { from: 'abi', to: 'rot' }, { from: 'abi', to: 'pen' }, { from: 'pen', to: 'cei' },
      ],
      steps: [
        { show: ['tra'], note: 'El lenguaje universal del trauma ocular',
          say: 'Empecemos por la clasificación BETT, la Terminología de Trauma Ocular de Birmingham, que es el lenguaje universal para hablar de estas lesiones. La primera pregunta, siempre, es si la pared del globo ocular conserva su integridad.' },
        { show: ['cer'], note: 'Contusiones, cuerpos extraños superficiales',
          say: 'Si la conserva, hablamos de trauma cerrado: la córnea y la esclera siguen siendo de espesor total, aunque haya una contusión o un desgarro superficial.' },
        { show: ['abi'], note: 'El punto donde cambia toda la conducta',
          say: 'Pero si hay una herida de espesor total que comunica la cavidad interna del ojo con el medio externo, eso es un trauma ocular abierto. Y este es el punto donde cambia por completo la conducta médica.' },
        { show: ['rot', 'pen'], note: 'La diferencia está en el mecanismo',
          say: 'Dentro del trauma abierto, la ruptura la produce un objeto romo que eleva bruscamente la presión dentro del ojo hasta reventarlo desde adentro; la herida penetrante, en cambio, la produce un objeto cortante, con un orificio de entrada, y si además tiene salida, se llama perforante.' },
        { show: ['cei'], note: 'Típico en trabajadores que martillan metal sin protección',
          say: 'Y un caso especial es el cuerpo extraño intraocular: un fragmento que queda retenido dentro del ojo, clásicamente en trabajadores que martillan metal contra metal sin usar gafas de protección.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Semiología',
      title: 'Los signos que certifican la sospecha de globo abierto',
      cards: [
        { title: 'Deformidad y colapso del globo', tag: 'Herniación del contenido interno', kind: 'alert', items: [
          { t: 'Pupila en gota o lágrima', d: 'El iris se hernia y la pupila apunta hacia la herida',
            say: 'Cualquiera de estos signos certifica la sospecha de globo abierto. El primero es la pupila en gota o lágrima: el iris se hernia a través de la herida, y el vértice de la pupila queda apuntando directo hacia el sitio de la perforación.' },
          { t: 'Cámara anterior anormal', d: 'Muy plana por vaciamiento de humor acuoso, o muy profunda',
            say: 'El segundo es una cámara anterior anormal: excesivamente estrecha, porque el humor acuoso se vació por la herida, o, con menos frecuencia, patológicamente profunda.' },
          { t: 'Hipotonía ocular marcada', d: 'El ojo se siente muy blando a la estimulación cuidadosa',
            say: 'Y el tercero es la hipotonía ocular: el ojo se siente muy blando. Ojo, esto se evalúa con cuidado, sin comprimir, porque medir formalmente la presión está prohibido, como vamos a ver.' },
        ] },
        { title: 'Fuga activa y protrusión', tag: 'Confirman la solución de continuidad', kind: 'alert', items: [
          { t: 'Signo de Seidel positivo', d: 'Fluoresceína diluida por la fuga de humor acuoso, bajo luz azul de cobalto',
            say: 'El cuarto es el signo de Seidel: al poner fluoresceína sobre la córnea, la fuga activa de humor acuoso diluye el colorante, y bajo luz azul de cobalto se ve un río o una cascada verde amarillenta escurriendo desde la herida.' },
          { t: 'Protrusión de tejido uveal o vítreo', d: 'Iris, cuerpo ciliar, coroides o humor vítreo visibles por fuera',
            say: 'El quinto es la protrusión visible de tejido oscuro, como el iris o la coroides, o de humor vítreo, a través de la córnea o la esclera.' },
          { t: 'Hemorragia subconjuntival masiva en 360°', d: 'Con quemosis severa tras un trauma contuso: sospecha ruptura oculta',
            say: 'Y el sexto es una hemorragia subconjuntival que rodea todo el ojo, con quemosis severa, después de un golpe contuso: eso te obliga a sospechar una ruptura escleral oculta por debajo de la conjuntiva, aunque no la veas directamente.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Conducta de urgencia',
      title: 'Ante la sospecha de globo abierto: lo obligatorio y lo prohibido',
      cards: [
        { title: 'Conductas obligatorias', tag: 'Evitar que suba la presión intraocular', kind: 'key', items: [
          { t: 'Concha rígida fenestrada', d: 'Apoyada en el reborde óseo de la órbita, nunca sobre el ojo',
            say: 'La prioridad absoluta es evitar que la presión intraocular suba, porque cualquier presión expulsa el contenido interno del ojo. Por eso, lo primero es colocar una concha rígida fenestrada que se apoye en el hueso de la órbita, nunca directamente sobre el globo ocular.' },
          { t: 'Régimen cero, analgesia y antieméticos endovenosos', d: 'Reposo con la cabecera a treinta grados, preparación para pabellón',
            say: 'Luego, régimen cero absoluto, porque el paciente va a pabellón bajo anestesia general, reposo con la cabecera elevada a treinta grados, y analgesia más antieméticos endovenosos, como el ondansetrón, para evitar a toda costa el vómito.' },
          { t: 'TAC de órbita, antibióticos EV y profilaxis antitetánica', d: 'Cortes finos sin contraste; ceftazidima más vancomicina',
            say: 'Y se completa con una tomografía computarizada de órbita, con cortes finos y sin contraste, para buscar un cuerpo extraño; antibióticos sistémicos endovenosos de amplio espectro, para prevenir la endoftalmitis; y profilaxis antitetánica si corresponde.' },
        ] },
        { title: 'Prohibiciones absolutas', tag: 'Se preguntan siempre', kind: 'alert', items: [
          { t: 'No palpar ni medir la presión intraocular', d: 'La tonometría está terminantemente prohibida',
            say: 'Y ahora lo que nunca se hace. No se palpa el ojo, y no se mide la presión intraocular: la tonometría está terminantemente prohibida, porque el propio instrumento comprime el ojo y puede expulsar su contenido.' },
          { t: 'No pomadas, colirios ni parche compresivo', d: 'Los vehículos grasos penetran a la cámara anterior',
            say: 'Tampoco se aplican pomadas oftálmicas ni colirios, porque sus vehículos grasos pueden penetrar hasta la cámara anterior y causar una endoftalmitis química, y no se coloca ningún parche compresivo.' },
          { t: 'Resonancia magnética contraindicada', d: 'Si hay sospecha de cuerpo extraño metálico',
            say: 'Y si sospechas un cuerpo extraño metálico, la resonancia magnética está contraindicada: el campo magnético puede mover el fragmento dentro del ojo y provocar una hemorragia vítrea catastrófica. El examen de elección es siempre el TAC.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Hipema traumático',
      title: 'Sangre en la cámara anterior: por qué la cabecera va elevada',
      nodes: [
        { id: 'gol', col: 0, row: 1, k: 'cause', t: 'Traumatismo contuso', s: 'Golpe de puño, pelota, codazo' },
        { id: 'san', col: 1, row: 1, k: 'mech', t: 'Sangre en la cámara anterior', s: 'Rotura de vasos del iris o del cuerpo ciliar' },
        { id: 'rep', col: 2, row: 0, k: 'good', t: 'Cabecera a treinta o cuarenta y cinco grados', s: 'Los glóbulos rojos decantan por gravedad' },
        { id: 'evi', col: 2, row: 2, k: 'trap', t: 'Evitar aspirina y AINEs', s: 'Alteran la hemostasia y favorecen el sangrado' },
        { id: 'res', col: 3, row: 1, k: 'alert', t: 'Resangrado a las cuarenta y ocho o setenta y dos horas', s: 'Suele ser más masivo que el sangrado inicial' },
      ],
      edges: [
        { from: 'gol', to: 'san' }, { from: 'san', to: 'rep' }, { from: 'san', to: 'evi' },
        { from: 'san', to: 'res', label: 'riesgo principal' },
      ],
      steps: [
        { show: ['gol', 'san'], note: 'Es un trauma cerrado, no un globo abierto',
          say: 'Ahora, una lesión más frecuente y de trauma cerrado: el hipema. Un golpe contuso, como un puñetazo o el impacto de una pelota, rompe los vasos de la raíz del iris o del cuerpo ciliar, y la sangre se acumula en la cámara anterior, visible como un nivel hemático en el tercio inferior del ojo.' },
        { show: ['rep'], note: 'La gravedad juega a tu favor si la cabecera está elevada',
          say: 'El manejo es reposo con la cabecera elevada, entre treinta y cuarenta y cinco grados, para que los glóbulos rojos decanten hacia abajo por gravedad, en vez de tapar el eje pupilar y ocluir la malla trabecular.' },
        { show: ['evi'], note: 'Alteran las plaquetas y favorecen el sangrado',
          say: 'Y en la analgesia, evita de forma estricta la aspirina y los antiinflamatorios no esteroidales, porque alteran la hemostasia plaquetaria.' },
        { show: ['res'], note: 'Suele ser peor que el sangrado del día uno',
          say: 'El riesgo que más se pregunta es el resangrado, entre las cuarenta y ocho y las setenta y dos horas, que suele ser más masivo que el sangrado inicial, y puede desencadenar un glaucoma secundario agudo o teñir la córnea con sangre.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol de decisión, tal como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Signos de certeza y de sospecha alta de globo ocular abierto',
      head: ['Hallazgo', 'Mecanismo', 'Conducta inmediata'],
      rows: [
        { cells: ['Pérdida de contenido ocular visible', 'Evisceración por solución de continuidad', 'Concha rígida, antibiótico endovenoso, pabellón urgente'],
          say: 'Repasemos la tabla de signos. Ver tejido ocular saliendo por la herida es un signo de certeza: hay evisceración traumática, y la conducta es concha rígida, antibiótico endovenoso y pabellón urgente.' },
        { cells: ['Pupila en gota apuntando a la herida', 'Herniación del iris hacia el orificio', 'No tocar; proteger con concha rígida ósea'],
          say: 'La pupila en gota, apuntando hacia la herida, es herniación del iris: no se toca, solo se protege con la concha rígida.' },
        { cells: ['Cámara anterior muy estrecha o Seidel positivo', 'Fuga activa de humor acuoso', 'Prohibidas las pomadas y la tonometría'],
          say: 'Una cámara muy estrecha o un Seidel positivo indican fuga activa de humor acuoso: quedan prohibidas las pomadas y la tonometría.' },
        { cells: ['Hiposfagma masivo en 360° con quemosis', 'Ruptura escleral oculta bajo la conjuntiva', 'Derivación GES número cuarenta y ocho de urgencia'],
          say: 'Y un hiposfagma masivo en trescientos sesenta grados con quemosis hace sospechar una ruptura escleral oculta bajo la conjuntiva: derivación de urgencia por la garantía GES número cuarenta y ocho.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Pronóstico',
      title: 'Cómo predice el examen el pronóstico visual',
      head: ['Agudeza visual inicial', 'Factor que empeora el pronóstico', 'Pronóstico visual final'],
      rows: [
        { cells: ['Sin percepción de luz', 'Ruptura ocular', 'Ceguera permanente en más del setenta por ciento'],
          say: 'El puntaje de trauma ocular parte de la agudeza visual inicial y le resta puntos por cada factor agravante. Sin percepción de luz, y si además hay ruptura ocular, el pronóstico es de ceguera permanente en más del setenta por ciento de los casos.' },
        { cells: ['Solo percibe luz o bultos', 'Endoftalmitis traumática', 'Recuperación visual limitada'],
          say: 'Con solo percepción de luz o de bultos, y si se agrega una endoftalmitis, la recuperación visual queda muy limitada.' },
        { cells: ['Entre veinte doscientos y veinte cincuenta', 'Herida perforante posterior', 'Pronóstico moderado'],
          say: 'Con una agudeza visual intermedia, y si la herida es perforante y posterior, el pronóstico es moderado.' },
        { cells: ['Veinte cuarenta o mejor', 'Desprendimiento de retina asociado', 'Buena sobrevida visual'],
          say: 'Y si la agudeza visual inicial ya es buena, la sobrevida visual final suele ser buena también, aunque un desprendimiento de retina asociado le resta puntos al pronóstico.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Protocolo GES número cuarenta y ocho',
      title: 'El protocolo de urgencia, paso a paso, y el error que lo arruina',
      head: ['Acción médica', 'Justificación clínica', 'Error crítico a evitar'],
      rows: [
        { cells: ['Concha rígida fenestrada', 'Descansa sobre el reborde óseo orbitario', 'Colocar gasa o parche compresivo'],
          say: 'Y el protocolo completo, con su error asociado. La concha rígida descansa sobre el hueso orbitario; el error es usar gasa o un parche que comprima.' },
        { cells: ['Antieméticos y analgesia endovenosa', 'Evita la maniobra de Valsalva del vómito', 'Permitir que el paciente vomite'],
          say: 'Los antieméticos y la analgesia endovenosa evitan la maniobra de Valsalva del vómito; el error es dejar que el paciente vomite.' },
        { cells: ['Antibioticoterapia profiláctica endovenosa', 'Previene la endoftalmitis bacteriana', 'Instilar pomadas oftálmicas tópicas'],
          say: 'Los antibióticos endovenosos previenen la endoftalmitis; el error es instilar pomadas tópicas, que empeoran las cosas.' },
        { cells: ['Tomografía computarizada de órbita', 'Identifica cuerpos extraños radioopacos', 'Solicitar una resonancia magnética'],
          say: 'El TAC de órbita identifica cuerpos extraños radioopacos; el error, que se pregunta mucho, es pedir una resonancia magnética.' },
        { cells: ['Régimen cero y toxoide tetánico', 'Prepara al paciente para cirugía inmediata', 'Alimentar al paciente'],
          say: 'Y el régimen cero con el toxoide tetánico prepara al paciente para la cirugía inmediata; el error es alimentarlo, retrasando la anestesia.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Adolescente de 16 años recibe el impacto de un balín de un rifle de aire comprimido en el ojo derecho mientras jugaba con un amigo. Consulta de inmediato por dolor y visión borrosa. Al examen: agudeza visual cuenta dedos a 2 metros, una laceración de 3 mm en la córnea periférica, cámara anterior colapsada y pupila deformada en forma de gota que apunta hacia la laceración.',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Medir la presión intraocular con tonómetro de aplanación para cuantificar la hipotonía' },
        { letter: 'B', text: 'Aplicar un parche ocular compresivo firme y colirio antibiótico de amplio espectro' },
        { letter: 'C', text: 'Proteger el ojo con una concha rígida apoyada en el reborde óseo, régimen cero, analgesia y antieméticos endovenosos, y derivar de urgencia' },
        { letter: 'D', text: 'Indicar reposo domiciliario con colirio ciclopléjico y control ambulatorio en 48 horas' },
        { letter: 'E', text: 'Realizar irrigación ocular profusa con suero fisiológico durante 30 minutos' },
      ],
      correct: 'C',
      explanation: 'La pupila en gota apuntando hacia la laceración y la cámara anterior colapsada son signos de sospecha fundada de globo ocular abierto. La conducta es proteger sin comprimir con una concha rígida, régimen cero, analgesia y antieméticos endovenosos, y derivar de urgencia bajo GES 48; están prohibidas la tonometría, las pomadas, los colirios y el parche compresivo.',
      say: {
        stem: 'Vamos con un caso. Un adolescente de dieciséis años recibe el impacto de un balín de un rifle de aire comprimido en el ojo derecho, jugando con un amigo. Consulta de inmediato por dolor y visión borrosa. Al examen: cuenta dedos a dos metros, una laceración de tres milímetros en la córnea periférica, la cámara anterior está colapsada, y la pupila está deformada en gota, apuntando hacia la laceración.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: medir la presión intraocular con tonómetro, aplicar un parche compresivo con colirio antibiótico, proteger con concha rígida, régimen cero, analgesia y antieméticos endovenosos y derivar de urgencia, indicar reposo domiciliario con ciclopléjico, o irrigar el ojo con suero fisiológico durante treinta minutos. Piénsalo.',
        answer: 'Es la C. La pupila en gota que apunta a la laceración, junto con la cámara anterior colapsada, son sospecha fundada de globo ocular abierto, y aquí no hay espacio para dudar: se protege sin tocar y se deriva. La tonometría, el parche compresivo con colirio, y el reposo domiciliario están formalmente contraindicados en esta sospecha; y la irrigación profusa es para las quemaduras químicas, no para un trauma penetrante.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo',
      stem: 'Un obrero de la construcción acude a un centro de urgencias tras recibir el impacto de un clavo en el ojo izquierdo. Al examen físico el paciente se encuentra muy quejumbroso, la agudeza visual en el ojo izquierdo es de bultos a 30 cm, la pupila está desfigurada en forma de pera apuntando hacia la hora 2, y se observa una cámara anterior muy plana con salida de un filamento negruzco a través de una incisión en la córnea.',
      question: '¿Cuál de las siguientes conductas representa una acción estrictamente contraindicada en este paciente?',
      options: [
        { letter: 'A', text: 'Instalar una concha o protector rígido fenestrado plástico fijado con tela adhesiva' },
        { letter: 'B', text: 'Administrar analgesia y antieméticos por vía endovenosa' },
        { letter: 'C', text: 'Realizar tonometría aplanática para cuantificar el grado de hipotonía ocular' },
        { letter: 'D', text: 'Indicar ayuno absoluto y solicitar evaluación urgente por oftalmología' },
        { letter: 'E', text: 'Administrar vacuna antitetánica si no tiene dosis de refuerzo reciente' },
      ],
      correct: 'C',
      explanation: 'Ante signos inequívocos de globo ocular abierto (pupila en gota con herniación de tejido uveal y atalamia), medir la presión intraocular está estrictamente contraindicado: el contacto del tonómetro presiona el ojo y puede expulsar el contenido intraocular. La protección con concha rígida, la analgesia y antieméticos EV, y el ayuno son conductas mandatorias.',
      say: {
        stem: 'Esta es una pregunta representativa del banco de la especialidad, sin fecha del examen real, sobre la prohibición más preguntada de todo el tema. Un obrero de la construcción recibe el impacto de un clavo en el ojo izquierdo. Está muy quejumbroso, su agudeza visual es de bultos a treinta centímetros, la pupila está desfigurada en forma de pera, y la cámara anterior está muy plana, con salida de un filamento oscuro a través de una incisión en la córnea.',
        question: '¿Cuál de las siguientes conductas representa una acción estrictamente contraindicada en este paciente?',
        options: 'Las opciones: instalar una concha rígida fenestrada, dar analgesia y antieméticos endovenosos, realizar tonometría para cuantificar la hipotonía, indicar ayuno y evaluación urgente, o administrar la vacuna antitetánica.',
        answer: 'Es la C. Este paciente tiene signos inequívocos de globo ocular abierto: la pupila en gota con herniación de tejido y la cámara colapsada. Medir la presión intraocular con el tonómetro está estrictamente prohibido, porque el propio instrumento comprime el ojo y puede expulsar su contenido, transformando una herida reparable en una pérdida definitiva. Todas las demás opciones son conductas obligatorias, no contraindicadas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo',
      stem: 'Un paciente de 26 años recibe un golpe de puño directo en el ojo derecho durante una riña. Al examen en el box se aprecia un hipema traumático que ocupa el tercio inferior de la cámara anterior, agudeza visual conservada, y no hay signos de globo abierto.',
      question: '¿Cuál es la indicación de manejo más adecuada y la complicación principal que se busca prevenir en los primeros días?',
      options: [
        { letter: 'A', text: 'Reposo en cama con cabecera a 45 grados, protector rígido y evitar aspirina o AINEs; prevenir resangrado a las 48 a 72 horas' },
        { letter: 'B', text: 'Reposo en decúbito prono estricto con la cara hacia abajo; prevenir catarata traumática' },
        { letter: 'C', text: 'Indicar aspirina para licuar el coágulo; prevenir la trombosis de la arteria central' },
        { letter: 'D', text: 'Realizar paracentesis corneal inmediata con aguja fina en el box de urgencias' },
        { letter: 'E', text: 'Instilar colirio de pilocarpina cada 15 minutos; prevenir la cicloplejía traumática' },
      ],
      correct: 'A',
      explanation: 'El hipema traumático se maneja con reposo con la cabecera elevada entre 30 y 45 grados, protección ocular sin compresión y evitando estrictamente la aspirina y los AINE por su efecto antiplaquetario. La complicación más temida en los primeros días es el resangrado, más extenso que el sangrado inicial, con riesgo de hipertensión ocular y tinción hemática de la córnea.',
      say: {
        stem: 'Una segunda pregunta representativa, ahora sobre el hipema. Un paciente de veintiséis años recibe un golpe de puño directo en el ojo derecho durante una riña. En el box se ve un hipema que ocupa el tercio inferior de la cámara anterior, su agudeza visual está conservada, y no hay ningún signo de globo abierto.',
        question: '¿Cuál es la indicación de manejo más adecuada, y la complicación principal que se busca prevenir en los primeros días?',
        options: 'Las opciones: reposo con la cabecera a cuarenta y cinco grados, protector rígido y evitar aspirina o antiinflamatorios, para prevenir el resangrado; reposo boca abajo para prevenir catarata; aspirina para licuar el coágulo; paracentesis corneal inmediata en el box; o pilocarpina cada quince minutos.',
        answer: 'Es la A. El hipema se maneja con la cabecera elevada, para que la sangre decante por gravedad y libere el eje pupilar, protección sin compresión, y evitando de forma estricta la aspirina y los antiinflamatorios, porque alteran la coagulación. Y la complicación que más se teme en los primeros días es el resangrado, que suele ser mucho más extenso que el episodio inicial. Dar aspirina, como propone la opción C, es exactamente lo contrario de lo que corresponde.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo',
      stem: 'Un tornero mecánico ingresa a urgencias tras sentir el impacto de una partícula de acero a alta velocidad en su ojo izquierdo mientras utilizaba una pulidora sin gafas protectoras. La agudeza visual es de veinte treinta, se observa una mínima hemorragia subconjuntival temporal, pero no se aprecian cuerpos extraños en la córnea ni en los fondos de saco.',
      question: '¿Cuál es el estudio de imagen de elección para descartar un cuerpo extraño intraocular radiopaco?',
      options: [
        { letter: 'A', text: 'Resonancia magnética de encéfalo y órbitas con cortes finos' },
        { letter: 'B', text: 'Tomografía computarizada de órbita sin contraste con cortes finos de 1 mm' },
        { letter: 'C', text: 'Radiografía simple de cráneo anteroposterior' },
        { letter: 'D', text: 'Ecografía ocular modo A con sonda de alta frecuencia' },
        { letter: 'E', text: 'Gammagrafía ósea facial' },
      ],
      correct: 'B',
      explanation: 'El examen de elección para detectar, localizar y evaluar cuerpos extraños intraoculares es la tomografía computarizada de órbitas sin contraste, con cortes finos axiales y coronales. La resonancia magnética está estrictamente contraindicada ante sospecha de un fragmento metálico o ferromagnético, porque el campo magnético puede movilizarlo y causar daño catastrófico.',
      say: {
        stem: 'Y una tercera pregunta representativa, sobre el examen de imagen. Un tornero mecánico llega a urgencias tras sentir el impacto de una partícula de acero a alta velocidad en su ojo izquierdo, mientras usaba una pulidora sin gafas de protección. Su agudeza visual es de veinte treinta, hay una mínima hemorragia subconjuntival, pero no se ven cuerpos extraños en la superficie del ojo.',
        question: '¿Cuál es el estudio de imagen de elección para descartar un cuerpo extraño intraocular radiopaco?',
        options: 'Las opciones: resonancia magnética de encéfalo y órbitas, tomografía computarizada de órbita sin contraste con cortes finos, radiografía simple de cráneo, ecografía ocular modo A, o gammagrafía ósea facial.',
        answer: 'Es la B, la tomografía computarizada de órbita sin contraste, con cortes finos. Este caso es la trampa clásica del cuerpo extraño metálico de alta velocidad, donde no hay ningún signo externo evidente. Y la opción más tentadora, la resonancia magnética, es justamente la que está estrictamente contraindicada, porque su campo magnético puede mover un fragmento metálico dentro del ojo y provocar una hemorragia catastrófica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo',
      stem: 'En un paciente con sospecha de estallido o ruptura de globo ocular, se decide administrar antieméticos parenterales, como el ondansetrón endovenoso, como parte del manejo inicial de urgencia.',
      question: '¿Cuál es el objetivo principal de esta indicación?',
      options: [
        { letter: 'A', text: 'Prevenir la absorción sistémica de las toxinas de la flora conjuntival' },
        { letter: 'B', text: 'Evitar las náuseas y el vómito, ya que la maniobra de Valsalva asociada eleva bruscamente la presión intraocular y puede expulsar el contenido intraocular' },
        { letter: 'C', text: 'Inducir miosis pupilar farmacológica para sellar la herida' },
        { letter: 'D', text: 'Facilitar la penetración de los colirios a través de la barrera hematoencefálica' },
        { letter: 'E', text: 'Disminuir la producción de humor acuoso por los procesos ciliares' },
      ],
      correct: 'B',
      explanation: 'El vómito o las arcadas generan una maniobra de Valsalva que eleva la presión venosa central y, de forma inmediata, la presión intraocular. En un globo ocular abierto, ese pico de presión actúa como un émbolo hidrostático que expulsa el iris, el cristalino, el vítreo o la retina a través de la herida. Por eso la antiemesis profiláctica es una medida de rescate de primer orden.',
      say: {
        stem: 'Y la última pregunta representativa, sobre un detalle que suele pasar desapercibido. En un paciente con sospecha de estallido o ruptura del globo ocular, se decide administrar antieméticos endovenosos, como el ondansetrón, dentro del manejo inicial de urgencia.',
        question: '¿Cuál es el objetivo principal de esta indicación?',
        options: 'Las opciones: prevenir la absorción sistémica de toxinas de la flora conjuntival, evitar las náuseas y el vómito porque la maniobra de Valsalva eleva bruscamente la presión intraocular, inducir miosis para sellar la herida, facilitar la penetración de colirios, o disminuir la producción de humor acuoso.',
        answer: 'Es la B. Durante el vómito o las arcadas se genera una maniobra de Valsalva, con un aumento brusco de la presión venosa central que se transmite de inmediato al ojo. En un globo abierto, ese pico de presión actúa como un émbolo que expulsa el iris, el cristalino o el vítreo hacia afuera, convirtiendo una herida reparable en una pérdida definitiva. Por eso la antiemesis no es un detalle de confort: es una medida de rescate.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Reconocer la sospecha', tag: 'Basta un solo signo', kind: 'key', items: [
          { t: 'Pupila en gota, hipotonía, Seidel positivo', d: 'Cámara anterior anormal, protrusión de tejido, hiposfagma en 360°',
            say: 'Cerremos con las reglas de oro. Basta un solo signo, como la pupila en gota, la hipotonía, el Seidel positivo o la protrusión de tejido, para sospechar un globo ocular abierto.' },
        ] },
        { title: 'Las prohibiciones que se preguntan siempre', tag: 'No tocar, no medir, no untar', kind: 'alert', items: [
          { t: 'No tonometría, no pomadas, no parche compresivo', d: 'No resonancia magnética si hay sospecha de cuerpo extraño metálico',
            say: 'Y las prohibiciones absolutas: no medir la presión intraocular, no aplicar pomadas ni colirios, no usar parche compresivo, y no pedir resonancia magnética si sospechas un cuerpo extraño metálico.' },
        ] },
        { title: 'Lo que sí se hace', tag: 'Proteger, no comprimir', kind: 'pharma', items: [
          { t: 'Concha rígida, régimen cero, antieméticos y analgesia EV', d: 'TAC de órbita, antibióticos EV, derivar GES cuarenta y ocho',
            say: 'Lo que sí se hace es proteger con concha rígida, régimen cero, antieméticos y analgesia endovenosa, TAC de órbita y antibióticos endovenosos, derivando por la garantía GES número cuarenta y ocho.' },
          { t: 'Hipema: cabecera elevada, sin aspirina ni AINEs', d: 'Vigilar el resangrado a las 48 a 72 horas',
            say: 'Y en el hipema, cabecera elevada, sin aspirina ni antiinflamatorios, vigilando el resangrado entre las cuarenta y ocho y las setenta y dos horas. Si te llevas una sola idea de hoy: ante la sospecha de globo abierto, protege el ojo y no lo toques. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Trauma ocular en urgencias: sigue los signos hasta la conducta correcta',
    root: (() => {
      const derivarGes = N('refer', 'Deriva de urgencia por GES cuarenta y ocho', 'Trauma ocular grave',
        'Deriva de urgencia bajo la garantía GES número cuarenta y ocho, con el ojo ya protegido y el paciente estabilizado.');
      const tacAtb = N('do', 'TAC de órbita sin contraste, antibióticos EV, antitetánica', 'Nunca resonancia magnética',
        'Solicita TAC de órbita sin contraste, inicia antibióticos endovenosos de amplio espectro y profilaxis antitetánica. Nunca pidas resonancia magnética si sospechas metal.',
        ['', derivarGes]);
      const cero = N('do', 'Régimen cero, antieméticos y analgesia EV', 'Evita a toda costa el vómito',
        'Indica régimen cero, antieméticos y analgesia endovenosa, para evitar a toda costa la maniobra de Valsalva del vómito.',
        ['', tacAtb]);
      const concha = N('alert', 'Protege con concha rígida', 'Apoyada en el hueso orbitario, sin tocar el ojo',
        'Coloca una concha rígida fenestrada apoyada en el reborde óseo de la órbita, sin comprimir el globo ocular.',
        ['', cero]);
      const abierto = N('alert', 'Sospecha de globo ocular abierto', 'No palpar, no medir la presión, no colirios ni pomadas',
        'Confirma la sospecha de globo abierto: desde aquí, no palpar, no medir la presión intraocular, y no aplicar colirios ni pomadas.',
        ['', concha]);

      const resangradoOjo = N('alert', 'Vigila el resangrado', 'Entre las 48 y las 72 horas, más masivo que el inicial',
        'Vigila el resangrado, que ocurre entre las cuarenta y ocho y las setenta y dos horas, y suele ser más masivo que el episodio inicial.');
      const manejoHipema = N('ok', 'Cabecera a treinta o cuarenta y cinco grados', 'Protector rígido, evitar aspirina y AINEs',
        'Indica reposo con la cabecera elevada, protector ocular sin compresión, y evita de forma estricta la aspirina y los antiinflamatorios.',
        ['', resangradoOjo]);
      const hipema = N('do', 'Hipema traumático', 'Sangre en el tercio inferior de la cámara anterior',
        'Confirma un hipema: sangre visible en el tercio inferior de la cámara anterior, sin signos de globo abierto.',
        ['', manejoHipema]);

      const erosion = N('ok', 'Ungüento antibiótico y control', 'Erosión corneal u otra lesión menor',
        'Si es una erosión corneal u otra lesión menor, indica ungüento antibiótico y control ambulatorio.');

      const hipemaQ = N('q', '¿Hay hipema en la cámara anterior?', 'Nivel hemático visible en el tercio inferior',
        'Si no hay sospecha de globo abierto, busca si hay sangre visible en la cámara anterior.',
        ['sí, hay hipema', hipema],
        ['no, es una lesión menor', erosion]);

      return N('start', 'Paciente con trauma ocular reciente', '¿Hay signos de sospecha de globo ocular abierto?',
        'Ante todo trauma ocular, la primera pregunta es si hay algún signo de sospecha de globo ocular abierto: pupila en gota, hipotonía, cámara anormal, Seidel positivo o protrusión de tejido.',
        ['sí, hay sospecha de globo abierto', abierto],
        ['no, es un trauma cerrado', hipemaQ]);
    })(),
  },
};
