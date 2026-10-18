// Clase 18.18 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-18).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

const pwSam = N('alert', 'Síndrome de aspiración meconial', 'Infiltrados en parches, riesgo de hipertensión pulmonar',
  'Y si es de término o postérmino, con líquido amniótico con meconio espeso, piensas en síndrome de aspiración meconial. La radiografía muestra infiltrados en parches, y el riesgo mayor es la hipertensión pulmonar persistente.');

const pwTtnr = N('ok', 'Taquipnea transitoria', 'Autolimitada, resuelve en 24 a 72 horas',
  'Si nació por cesárea electiva, sin trabajo de parto, y respira rápido pero sin gran esfuerzo, es taquipnea transitoria. Solo necesita oxígeno de soporte, y se resuelve sola en veinticuatro a setenta y dos horas.');

const pwEmh = N('do', 'Enfermedad de membrana hialina', 'CPAP y surfactante endotraqueal',
  'Si es un prematuro con dificultad respiratoria desde el nacimiento y quejido intenso, sospechas enfermedad de membrana hialina. Inicias CPAP nasal precoz y administras surfactante exógeno por vía endotraqueal.');

const pwEdad = N('q', '¿Cuál es el antecedente obstétrico?', 'Prematuro, cesárea electiva, o meconio',
  'La pregunta que separa los tres cuadros es el antecedente: ¿nació prematuro sin corticoides, por cesárea sin trabajo de parto, o con meconio espeso en el líquido amniótico? Cada antecedente apunta a un diagnóstico distinto.',
  ['Prematuro, sin corticoides', pwEmh],
  ['Cesárea electiva, término', pwTtnr],
  ['Término o postérmino, meconio', pwSam]);

const pwRoot = N('start', 'Recién nacido con dificultad respiratoria', 'Puntúas con la escala de Silverman-Andersen',
  'Aquí tienes al recién nacido con dificultad respiratoria. Lo primero es puntuar la gravedad con la escala de Silverman-Andersen, y después buscas el antecedente que te va a decir cuál de los tres cuadros es.',
  ['', pwEdad]);

module.exports = {
  id: 'ped-18',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Tres cuadros, un mismo síntoma: cómo distinguirlos por el antecedente y la radiografía',
      say: 'Bienvenido a la clase de dificultad respiratoria neonatal. Vas a ver tres cuadros que se preguntan todo el tiempo: la enfermedad de membrana hialina, la taquipnea transitoria y el síndrome de aspiración meconial. Los tres se ven parecidos al inicio, pero el antecedente obstétrico y la radiografía te dicen exactamente cuál es cada uno. Empecemos.',
    },

    {
      type: 'points',
      kicker: 'Cómo mides la gravedad',
      title: 'El Silverman-Andersen: al revés que el Apgar',
      cards: [
        { title: 'La escala de Silverman-Andersen', tag: 'Cero es lo bueno', kind: 'key', items: [
          { t: 'Cero puntos: sin dificultad', d: 'Diez puntos: gravedad máxima',
            say: 'Antes de entrar a los tres cuadros, aprende a medir la gravedad. La escala de Silverman-Andersen funciona al revés que el Apgar: cero puntos significa que no hay dificultad respiratoria, y diez puntos es la gravedad máxima. No te confundas con el sentido de los números.' },
          { t: 'Suma 5 signos clínicos', d: 'Quejido, aleteo, tiraje, retracción, disociación',
            say: 'Suma cinco signos: el quejido espiratorio, el aleteo nasal, el tiraje intercostal, la retracción del esternón, y la disociación entre el tórax y el abdomen al respirar. Cada uno se puntúa de cero a dos.' },
          { t: 'Siete puntos o más: grave', d: 'Necesita soporte de inmediato',
            say: 'Con uno a tres puntos la dificultad es leve, con cuatro a seis es moderada, y con siete o más ya es grave y necesita soporte respiratorio de inmediato. Ahora sí, vamos a los tres cuadros que la producen.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Silverman-Andersen',
      title: 'Cómo se puntúa cada signo',
      head: ['Signo', '0 puntos', '1 punto', '2 puntos'],
      rows: [
        { cells: ['Movimiento toracoabdominal', 'Rítmico y sincrónico', 'Tórax quieto, abdomen se mueve', 'Disociación: respiración en balancín'],
          say: 'Vamos signo por signo. El movimiento toracoabdominal: si es rítmico y sincrónico, cero puntos. Si el tórax queda quieto y solo se mueve el abdomen, un punto. Y si están totalmente disociados, en balancín, dos puntos.' },
        { cells: ['Tiraje intercostal', 'Ausente', 'Discreto', 'Acentuado y visible'],
          say: 'El tiraje intercostal va de ausente, a discreto, a acentuado y visible.' },
        { cells: ['Retracción xifoidea', 'Ausente', 'Discreta', 'Acentuada'],
          say: 'La retracción xifoidea, debajo del esternón, se puntúa igual: ausente, discreta o acentuada.' },
        { cells: ['Aleteo nasal', 'Ausente', 'Discreto', 'Acentuado'],
          say: 'El aleteo nasal, lo mismo.' },
        { cells: ['Quejido espiratorio', 'Ausente', 'Con fonendoscopio', 'Audible a distancia'],
          say: 'Y el quejido espiratorio: ausente, audible solo con el fonendoscopio, o audible a distancia, sin necesitar ningún instrumento. Suma los cinco signos y con siete puntos o más ya sabes que la dificultad es grave.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Enfermedad de membrana hialina',
      title: 'El prematuro sin surfactante',
      nodes: [
        { id: 'pre', col: 0, row: 0, k: 'cause', t: 'Prematuro menor de 35 semanas', s: 'Los neumocitos aún no maduran' },
        { id: 'sur', col: 1, row: 0, k: 'mech', t: 'Falta surfactante pulmonar', s: 'Sube la tensión superficial alveolar' },
        { id: 'col', col: 2, row: 0, k: 'effect', t: 'El alvéolo colapsa al espirar', s: 'Quejido para sostener la presión' },
        { id: 'diab', col: 0, row: 2, k: 'risk', t: 'Hijo de madre diabética', s: 'La insulina frena el surfactante' },
        { id: 'ces', col: 1, row: 2, k: 'risk', t: 'Cesárea sin trabajo de parto', s: 'Otro factor de riesgo' },
      ],
      edges: [
        { from: 'pre', to: 'sur' },
        { from: 'sur', to: 'col' },
        { from: 'diab', to: 'sur', label: 'agrava' },
        { from: 'ces', to: 'sur', label: 'agrava' },
      ],
      steps: [
        { show: ['pre'], note: 'Antes de la semana 32 a 34, el surfactante casi no existe',
          say: 'Empecemos por el primer cuadro. En un prematuro menor de treinta y cinco semanas, los neumocitos que fabrican el surfactante todavía no maduran del todo. Mientras más chico, menos surfactante tiene.' },
        { show: ['sur'], note: 'Sin surfactante, la tensión superficial se dispara',
          say: 'Y sin surfactante, la tensión superficial dentro del alvéolo se dispara, porque el surfactante es justo lo que la mantiene baja.' },
        { show: ['col'], note: 'El quejido es un mecanismo compensatorio, no un capricho',
          say: 'Por eso el alvéolo colapsa cada vez que el bebé espira. Y aquí está el porqué del quejido: el recién nacido cierra parcialmente la glotis para mantener algo de presión y evitar que el pulmón se colapse del todo. No es un ruido cualquiera, es un mecanismo de defensa.' },
        { show: ['diab', 'ces'], note: 'La insulina frena la maduración del surfactante',
          say: 'Dos factores lo agravan: el hijo de madre diabética, porque el exceso de insulina frena la maduración del surfactante, y la cesárea sin trabajo de parto, que le quita al pulmón el estímulo hormonal del parto.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Membrana hialina',
      title: 'Clínica, radiografía y tratamiento',
      cards: [
        { title: 'Clínica', tag: 'Desde el nacimiento', kind: 'criteria', items: [
          { t: 'Quejido desde las primeras horas', d: 'Polipnea y cianosis progresiva',
            say: 'La clínica empieza desde el nacimiento o en las primeras horas: quejido intenso, polipnea y cianosis que va progresando.' },
        ] },
        { title: 'Radiografía', tag: 'Vidrio esmerilado', kind: 'key', items: [
          { t: 'Pulmón hipoinsuflado', d: 'Menos de 7 espacios intercostales',
            say: 'La radiografía es al revés de lo que vas a ver en el siguiente cuadro: el pulmón está hipoinsuflado, con menos de siete espacios intercostales visibles.' },
          { t: 'Vidrio esmerilado y broncograma', d: 'El aire dibuja los bronquios',
            say: 'Y aparece el patrón en vidrio esmerilado, con broncograma aéreo bien marcado. Mira esta radiografía: el patrón es granular fino y difuso, con poco aire, y el aire que queda dentro de los bronquios se ve nítido sobre un pulmón colapsado alrededor.',
            photo: { src: 'biblioteca/15_pediatria/ped-18/01_enfermedad-de-membrana-hialina-rx__cto-pediatria_p19.jpg', label: 'Membrana hialina', at: 'Mira esta radiografía', credit: 'Manual CTO Pediatría 14.ª ed., p. 19' } },
        ] },
        { title: 'Tratamiento', tag: 'Prevención y soporte', kind: 'pharma', items: [
          { t: 'Corticoides prenatales a la madre', d: 'Betametasona entre las semanas 24 y 34',
            say: 'La prevención es corticoides prenatales a la madre, betametasona, entre las semanas veinticuatro y treinta y cuatro de gestación, en dos dosis con un día de diferencia. Es una de las intervenciones que más reduce esta enfermedad, y por eso se pregunta tanto.' },
          { t: 'CPAP precoz y surfactante', d: 'Por vía endotraqueal',
            say: 'Y ya nacido, el tratamiento es CPAP nasal precoz más surfactante exógeno por vía endotraqueal, entre cien y doscientos miligramos por kilo, administrado apenas el bebé necesita más de treinta por ciento de oxígeno en el CPAP. Sin este tratamiento, el cuadro empeora hasta el tercer día.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Taquipnea transitoria',
      title: 'El pulmón que tarda en secarse',
      nodes: [
        { id: 'ces2', col: 0, row: 1, k: 'cause', t: 'Cesárea electiva, sin trabajo de parto', s: 'Falta la oleada de catecolaminas' },
        { id: 'liq', col: 1, row: 1, k: 'mech', t: 'Líquido pulmonar se reabsorbe lento', s: 'Los canales de sodio no se activan' },
        { id: 'taq', col: 2, row: 1, k: 'effect', t: 'Taquipnea, sin tiraje importante', s: 'Bebé taquipneico pero contento' },
      ],
      edges: [
        { from: 'ces2', to: 'liq' },
        { from: 'liq', to: 'taq' },
      ],
      steps: [
        { show: ['ces2'], note: 'Sin trabajo de parto, falta el estímulo hormonal',
          say: 'El segundo cuadro es la taquipnea transitoria, y parte de un antecedente distinto al de la membrana hialina: la cesárea electiva, sin trabajo de parto previo, en un recién nacido de término o casi de término.' },
        { show: ['liq'], note: 'El trabajo de parto activa los canales que secan el pulmón',
          say: 'El feto viene con líquido dentro del pulmón, y normalmente el trabajo de parto y sus catecolaminas activan los canales de sodio que lo reabsorben. Sin ese estímulo, el líquido se reabsorbe lento.' },
        { show: ['taq'], note: 'Taquipneico pero contento: la frase que lo describe',
          say: 'Y el resultado es un bebé que respira muy rápido, hasta cien veces por minuto, pero con poco tiraje y poco quejido. La frase clásica es un bebé taquipneico pero contento, muy distinto del que viste en la membrana hialina.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Taquipnea transitoria',
      title: 'Radiografía y curso benigno',
      cards: [
        { title: 'Radiografía', tag: 'Cisuritis', kind: 'criteria', items: [
          { t: 'Pulmón hiperinsuflado', d: 'Más de 8 espacios intercostales',
            say: 'La radiografía aquí es opuesta a la anterior: el pulmón está hiperinsuflado, con más de ocho espacios intercostales visibles.' },
          { t: 'Líquido en la cisura', d: 'Congestión perihiliar en sol radiante',
            say: 'Y se ve líquido metido en la cisura pulmonar, con congestión alrededor del hilio en un patrón que llaman en sol radiante. En esta radiografía el tórax está amplio, hiperinsuflado, con trama perihiliar marcada.',
            photo: { src: 'biblioteca/15_pediatria/ped-18/02_taquipnea-transitoria-rx__cto-pediatria_p18.jpg', label: 'Taquipnea transitoria', at: 'En esta radiografía', credit: 'Manual CTO Pediatría 14.ª ed., p. 18' } },
        ] },
        { title: 'Curso', tag: 'Benigno y autolimitado', kind: 'normal', items: [
          { t: 'Resuelve en 24 a 72 horas', d: 'Solo con oxígeno de soporte',
            say: 'El curso es benigno, resuelve solo en veinticuatro a setenta y dos horas, y basta con oxígeno de soporte por naricera o halo.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Síndrome de aspiración meconial',
      title: 'El postérmino que respiró meconio',
      nodes: [
        { id: 'asf', col: 0, row: 1, k: 'cause', t: 'Asfixia intrauterina', s: 'El feto relaja el esfínter anal' },
        { id: 'mec', col: 1, row: 1, k: 'mech', t: 'Meconio espeso en el líquido', s: 'El feto lo aspira al jadear' },
        { id: 'obs', col: 2, row: 0, k: 'effect', t: 'Obstrucción en válvula', s: 'Zonas de atelectasia y de enfisema' },
        { id: 'hpp', col: 2, row: 2, k: 'alert', t: 'Hipertensión pulmonar persistente', s: 'La complicación más grave' },
      ],
      edges: [
        { from: 'asf', to: 'mec' },
        { from: 'mec', to: 'obs' },
        { from: 'mec', to: 'hpp', label: 'grave' },
      ],
      steps: [
        { show: ['asf'], note: 'El estrés fetal es el punto de partida',
          say: 'El tercer cuadro, el síndrome de aspiración meconial, empieza con un feto sometido a asfixia o estrés intrauterino, que por eso relaja el esfínter anal y elimina meconio al líquido amniótico.' },
        { show: ['mec'], note: 'Casi nunca en el prematuro',
          say: 'Ese mismo estrés lo hace jadear dentro del útero, y al jadear aspira ese meconio espeso hacia la vía aérea. Es un cuadro de término o postérmino: casi nunca ocurre en el prematuro menor de treinta y cuatro semanas.' },
        { show: ['obs'], note: 'El meconio tapa como una válvula',
          say: 'El meconio obstruye como una válvula: deja entrar el aire pero no salir, así que quedan zonas de atelectasia junto a zonas de enfisema, alternadas en el mismo pulmón.' },
        { show: ['hpp'], note: 'La complicación que puede matar',
          say: 'Y la complicación que más te importa es la hipertensión pulmonar persistente, con una hipoxemia que no responde a oxígeno solo, y que necesita óxido nítrico inhalado y ventilación de alta frecuencia. La radiografía, otra vez distinta a las dos anteriores, muestra infiltrados algodonosos en parches. Mira esta imagen: zonas densas alternadas con zonas hiperinsufladas, y el diafragma aplanado.',
          photo: { src: 'biblioteca/15_pediatria/ped-18/03_aspiracion-meconial-rx__cto-pediatria_p20.jpg', label: 'Aspiración meconial', at: 'Mira esta imagen', credit: 'Manual CTO Pediatría 14.ª ed., p. 20' } },
      ],
    },

    {
      type: 'points',
      kicker: 'El cuarto diferencial',
      title: 'Cuando aparece la fiebre, cambia el sospechoso',
      cards: [
        { title: 'Neumonía connatal', tag: 'Fiebre materna o RPM prolongada', kind: 'alert', items: [
          { t: 'Fiebre o rotura prolongada de membranas', d: 'Antecedente materno, no fetal',
            say: 'Antes de seguir, un cuarto nombre que no puedes dejar fuera. Si la madre tuvo fiebre en el trabajo de parto, o la rotura de membranas duró muchas horas, el sospechoso ya no es surfactante, ni cesárea, ni meconio: es infección.' },
          { t: 'Agente típico: estreptococo grupo B', d: 'Igual que en la sepsis neonatal precoz',
            say: 'El agente típico es el estreptococo grupo B, el mismo que causa la sepsis neonatal precoz que vas a ver en la próxima clase, y el tratamiento también se adelanta a esa clase: ampicilina más gentamicina o cefotaxima, por vía endovenosa, sin esperar el cultivo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Cuando el oxígeno no se va',
      title: 'Displasia broncopulmonar',
      cards: [
        { title: 'Definición', tag: 'Enfermedad pulmonar crónica', kind: 'key', items: [
          { t: 'Oxígeno a los 28 días', d: 'Y a las 36 semanas postmenstruales',
            say: 'La displasia broncopulmonar es la enfermedad pulmonar crónica del prematuro: sigue dependiendo de oxígeno a los veintiocho días de vida y a las treinta y seis semanas de edad postmenstrual, en los menores de treinta y dos semanas.' },
          { t: 'Leve, moderada, severa', d: 'Aire ambiental; FiO₂ bajo 30%; 30% o más o presión positiva',
            say: 'Se grada según el soporte a las treinta y seis semanas: leve, en aire ambiental; moderada, con oxígeno bajo treinta por ciento; y severa, con treinta por ciento o más, o con presión positiva.' },
        ] },
        { title: 'Por qué ocurre', tag: 'Inmadurez más injuria', kind: 'alert', items: [
          { t: 'Ventilación, oxígeno, infección', d: 'Y ductus persistente: se detiene la alveolarización',
            say: 'Resulta de la inmadurez pulmonar más la injuria de la ventilación mecánica, el oxígeno, la infección y el ductus arterioso persistente, con detención de la alveolarización. Pesan la prematurez extrema, el bajo peso, la corioamnionitis, la sepsis y la ventilación prolongada.' },
          { t: 'Radiografía', d: 'Opacidades intersticiales o patrón quístico',
            say: 'Clínicamente hay taquipnea, retracciones, sibilancias y oxígeno persistente. La radiografía muestra opacidades intersticiales o un patrón quístico con hiperinsuflación.' },
        ] },
        { title: 'Prevención y manejo', tag: 'Derivar a broncopulmonar', kind: 'pharma', items: [
          { t: 'Prevenir', d: 'Corticoides prenatales, surfactante precoz, CPAP, cafeína',
            say: 'La prevención es corticoides prenatales, surfactante precoz, CPAP y ventilación protectora, cafeína, evitar la hiperoxia y tratar el ductus.' },
          { t: 'Saturación 92 a 95%', d: 'Diuréticos, broncodilatadores, nirsevimab, vacunas',
            say: 'El manejo es oxígeno para una saturación entre noventa y dos y noventa y cinco por ciento, diuréticos, broncodilatadores, nutrición hipercalórica, prevención del virus sincicial con nirsevimab, vacunas, y evitar el humo de tabaco. Tienen más rehospitalizaciones, riesgo de hipertensión pulmonar, asma y retraso del desarrollo, así que derivas a broncopulmonar y neonatología.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Pausas respiratorias del prematuro',
      title: 'Apneas del prematuro',
      cards: [
        { title: 'Qué cuenta como apnea', tag: 'Inmadurez del centro respiratorio', kind: 'key', items: [
          { t: 'Pausa de más de 20 segundos', d: 'O menos, con bradicardia o cianosis',
            say: 'Apnea es una pausa respiratoria de más de veinte segundos, o de menos si hay bradicardia, cianosis o desaturación. Afecta a la mitad de los prematuros bajo mil quinientos gramos, empieza entre el segundo y el séptimo día y desaparece cerca de las treinta y seis a treinta y siete semanas.' },
          { t: 'Mixta: la más frecuente', d: 'Central, obstructiva o mixta',
            say: 'Puede ser central, obstructiva o mixta, y la mixta es la más frecuente. La respiración periódica, con pausas cortas sin bradicardia, es benigna.' },
        ] },
        { title: 'Siempre descarta una causa', tag: 'En el término es patológica', kind: 'alert', items: [
          { t: 'Sepsis, hipoglicemia, hipoxia', d: 'Temperatura, anemia, hemorragia, convulsión',
            say: 'Antes de decir que es inmadurez, descartas causas secundarias: sepsis, hipoglicemia, hipoxia, alteraciones de temperatura, anemia, hemorragia intraventricular, convulsión, ductus, enterocolitis, reflujo, fármacos maternos y trastornos electrolíticos. En un recién nacido de término, una apnea siempre es patológica.' },
        ] },
        { title: 'Manejo', tag: 'Cafeína primero', kind: 'pharma', items: [
          { t: 'Cafeína', d: 'Carga 20 mg/kg; mantención 5–10 mg/kg/día',
            say: 'Monitorizas, estimulas y posicionas, y das cafeína: carga de veinte miligramos por kilo y mantención de cinco a diez miligramos por kilo al día, que además mejora la displasia y el neurodesarrollo.' },
          { t: 'CPAP si no cede', d: 'Obstructivas o mixtas; ventilación si persiste',
            say: 'Si son obstructivas o mixtas, CPAP nasal, y ventilación si no cede. La cafeína se suspende con más de treinta y cuatro semanas y cinco a siete días sin apneas. Y el monitor domiciliario de rutina no previene la muerte súbita.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'El prematuro, sistema por sistema',
      title: 'Otras complicaciones del prematuro',
      head: ['Sistema', 'Complicación', 'Clave'],
      rows: [
        { cells: ['Cardiovascular', 'Ductus arterioso persistente', 'Soplo continuo y pulsos saltones'],
          say: 'Repasemos las complicaciones del prematuro por sistemas. En lo cardiovascular, el ductus arterioso persistente: soplo continuo, pulsos saltones e insuficiencia cardíaca. Se trata con ibuprofeno, indometacina o paracetamol, o cierre quirúrgico.' },
        { cells: ['Neurológico', 'Hemorragia intraventricular', 'Ecografía transfontanelar días 3 a 7'],
          say: 'En lo neurológico, la hemorragia intraventricular, sobre todo bajo treinta y dos semanas, que se pesquisa con ecografía transfontanelar entre los días tres y siete. Y la leucomalacia periventricular, que deja una futura diplejía espástica.' },
        { cells: ['Digestivo', 'Enterocolitis necrotizante', 'Neumatosis intestinal en la radiografía'],
          say: 'En lo digestivo, la enterocolitis necrotizante: distensión abdominal, sangre en las deposiciones y neumatosis intestinal en la radiografía. Ayuno, descompresión, antibióticos, y cirugía si hay perforación.' },
        { cells: ['Metabólico y hematológico', 'Hipoglicemia, anemia, osteopenia', 'Ictericia más intensa'],
          say: 'En lo metabólico y hematológico, hipoglicemia, hipocalcemia, ictericia más intensa, anemia del prematuro y osteopenia.' },
        { cells: ['Infeccioso y sensorial', 'Sepsis tardía, ROP, hipoacusia', 'Prematuro tardío: 34 a 36 semanas'],
          say: 'Y la sepsis tardía nosocomial, la retinopatía y la hipoacusia. Ojo con el prematuro tardío, de treinta y cuatro a treinta y seis semanas: es la mayoría de los prematuros y tiene más riesgo de hipoglicemia, ictericia, dificultad respiratoria y rehospitalización.' },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: "Silverman paso a paso",
      images: [
        { src: 'animaciones/ped-18/A1_silverman_andersen.mp4', label: "De cero a diez", credit: "Animación propia" },
      ],
      steps: [
        { note: "Al revés que el Apgar",
          say: "Mira cómo sube el puntaje. Cinco signos valen cero, uno o dos puntos: movimiento toracoabdominal, tiraje intercostal, retracción xifoidea, aleteo nasal y quejido espiratorio. De uno a tres es leve, de cuatro a seis moderada, y desde siete grave, con soporte de inmediato. Es al revés que el Apgar. Y el quejido es el esfuerzo del recién nacido por sostener la presión y evitar que el alvéolo colapse." },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos los tres cuadros en un solo árbol de decisión, tal como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'El antecedente que resuelve la pregunta',
      head: ['Antecedente', 'Diagnóstico', 'Error frecuente'],
      rows: [
        { cells: ['Prematuro sin corticoides, pulmón hipoinsuflado', 'Membrana hialina', 'Confundir con taquipnea transitoria'],
          say: 'Repasemos las trampas. Prematuro sin corticoides, con pulmón hipoinsuflado en la radiografía: membrana hialina. El error es confundirla con taquipnea transitoria, que va justo al revés.' },
        { cells: ['Cesárea electiva, pulmón hiperinsuflado', 'Taquipnea transitoria', 'Dar surfactante sin necesitarlo'],
          say: 'Cesárea electiva, sin trabajo de parto, con pulmón hiperinsuflado: taquipnea transitoria. Darle surfactante a este bebé es un error, porque no le falta surfactante, solo tiene líquido de más.' },
        { cells: ['Postérmino con meconio espeso', 'Aspiración meconial', 'Olvidar el riesgo de hipertensión pulmonar'],
          say: 'Postérmino con meconio espeso en el líquido amniótico: aspiración meconial. El error es no vigilar la hipertensión pulmonar, que es lo que complica el pronóstico.' },
        { cells: ['Prematuro con oxígeno a las 36 semanas', 'Displasia broncopulmonar', 'Llamarla membrana hialina residual'],
          say: 'Prematuro que sigue con oxígeno a las treinta y seis semanas de edad postmenstrual: displasia broncopulmonar. Se previene y se deriva a broncopulmonar.' },
        { cells: ['Prematuro con pausas y bradicardia', 'Descartar causa y dar cafeína', 'Atribuirlo a inmadurez sin estudiar'],
          say: 'Prematuro con pausas respiratorias y bradicardia: descartas sepsis y otras causas secundarias y das cafeína. El error es atribuirlo a inmadurez sin estudiar.' },
        { cells: ['Bebé taquipneico pero contento', 'Taquipnea transitoria', 'Tratarlo como si fuera grave'],
          say: 'Y un bebé taquipneico, pero contento, sin gran tiraje ni quejido: taquipnea transitoria. Tratarlo como si fuera membrana hialina es sobretratar un cuadro que se resuelve solo.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Recién nacido de 31 semanas de gestación, nace por parto prematuro espontáneo. La madre no recibió corticoides prenatales. Inmediatamente presenta quejido audible a distancia, aleteo nasal y retracción xifoidea acentuada, con una saturación de oxígeno de 82% al aire ambiental. La radiografía muestra pulmones con volumen disminuido, patrón difuso en vidrio esmerilado y broncograma aéreo.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Oxígeno por naricera y control en 24 horas' },
        { letter: 'B', text: 'CPAP nasal precoz más surfactante exógeno endotraqueal' },
        { letter: 'C', text: 'Ventilación mecánica invasiva sin surfactante' },
        { letter: 'D', text: 'Antibióticos endovenosos de amplio espectro' },
        { letter: 'E', text: 'Observación, porque es un cuadro autolimitado' },
      ],
      correct: 'B',
      explanation: 'Prematuro de 31 semanas, sin corticoides, con dificultad respiratoria desde el nacimiento y radiografía en vidrio esmerilado con broncograma: enfermedad de membrana hialina. Tratamiento estándar: CPAP nasal precoz más surfactante exógeno endotraqueal.',
      say: {
        stem: 'Vamos con un caso. Recién nacido de treinta y una semanas, por parto prematuro espontáneo, cuya madre no recibió corticoides prenatales. Desde el nacimiento tiene quejido audible a distancia, aleteo nasal y retracción marcada, con una saturación de ochenta y dos por ciento al aire ambiental. La radiografía muestra pulmones con poco volumen, vidrio esmerilado y broncograma aéreo.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: oxígeno por naricera y control en veinticuatro horas, CPAP más surfactante endotraqueal, ventilación mecánica sin surfactante, antibióticos de amplio espectro, u observación porque es autolimitado. Tómate unos segundos.',
        answer: 'Es la B. Prematuro, sin corticoides, dificultad desde el nacimiento, y una radiografía que es el retrato exacto de la membrana hialina: vidrio esmerilado con broncograma. El tratamiento estándar es CPAP nasal precoz más surfactante por vía endotraqueal. Observarlo como si fuera autolimitado es el error clásico: eso es taquipnea transitoria, no esto.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 177',
      stem: 'Un recién nacido de 36 semanas de edad gestacional, nacido por cesárea, presenta dificultad respiratoria luego de nacer, con taquipnea, retracción subcostal y crepitantes basales. La radiografía de tórax muestra ambos campos pulmonares con hiperinsuflación, reforzamiento hiliar, aplanamiento de los diafragmas y silueta cardiaca normal.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Neumomediastino' },
        { letter: 'B', text: 'Neumonía connatal' },
        { letter: 'C', text: 'Taquipnea transitoria' },
        { letter: 'D', text: 'Enfermedad de membrana hialina' },
        { letter: 'E', text: 'Cardiopatía congénita' },
      ],
      correct: 'C',
      explanation: 'Nacido por cesárea, sin antecedentes de asfixia ni prematurez extrema, con radiografía hiperinsuflada y silueta cardiaca normal: taquipnea transitoria. La membrana hialina daría el patrón opuesto, con pulmón hipoinsuflado.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil dieciséis. Recién nacido de treinta y seis semanas, nacido por cesárea, con dificultad respiratoria luego de nacer: taquipnea, retracción subcostal y crepitantes en las bases. La radiografía muestra hiperinsuflación en ambos pulmones, refuerzo alrededor del hilio, diafragmas aplanados, y una silueta cardiaca normal.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: neumomediastino, neumonía connatal, taquipnea transitoria, enfermedad de membrana hialina, o cardiopatía congénita. Piénsalo.',
        answer: 'Es la C, taquipnea transitoria. El antecedente de cesárea, sin trabajo de parto, ya te orienta, y la radiografía lo confirma: hiperinsuflación, no el pulmón chico y colapsado que verías en la membrana hialina. La silueta cardiaca normal descarta la cardiopatía, y no hay antecedente de meconio ni de fiebre materna para pensar en las otras opciones.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo · banco EUNACOM',
      stem: 'Un recién nacido de 30 semanas de gestación presenta dificultad respiratoria grave desde el nacimiento, con quejido espiratorio constante, cianosis y retracción costal severa. La radiografía de tórax revela campos pulmonares poco expandidos, con opacificación reticulonodular bilateral difusa y broncograma aéreo visible.',
      question: '¿Cuál es la etiología y el tratamiento de elección?',
      options: [
        { letter: 'A', text: 'Retardo en la reabsorción de líquido alveolar; oxígeno por naricera' },
        { letter: 'B', text: 'Déficit de surfactante pulmonar; CPAP nasal e instilación de surfactante exógeno' },
        { letter: 'C', text: 'Aspiración masiva de meconio; lavado traqueal con solución fisiológica' },
        { letter: 'D', text: 'Neumotórax a tensión bilateral; toracocentesis inmediata' },
        { letter: 'E', text: 'Atresia esofágica congénita; sonda con tracción' },
      ],
      correct: 'B',
      explanation: 'Prematuro de 30 semanas, distrés severo desde el nacimiento, con radiografía hipoinsuflada en vidrio esmerilado y broncograma: enfermedad de membrana hialina por déficit de surfactante. Tratamiento: CPAP nasal más surfactante exógeno endotraqueal.',
      say: {
        stem: 'Una más del banco. Recién nacido de treinta semanas, con dificultad respiratoria grave desde el nacimiento: quejido constante, cianosis y retracción costal severa. La radiografía muestra pulmones poco expandidos, con un patrón reticulonodular difuso y broncograma aéreo visible.',
        question: '¿Cuál es la etiología y el tratamiento de elección?',
        options: 'Las opciones: retardo en la reabsorción de líquido con naricera, déficit de surfactante con CPAP y surfactante exógeno, aspiración masiva de meconio con lavado traqueal, neumotórax con toracocentesis, o atresia esofágica con sonda. Piénsalo.',
        answer: 'Es la B. Treinta semanas, distrés desde el nacimiento, y una radiografía que muestra exactamente el patrón hipoinsuflado con broncograma: es déficit de surfactante, la enfermedad de membrana hialina. El tratamiento de elección es CPAP nasal con surfactante exógeno endotraqueal. La aspiración de meconio no calza, porque el meconio casi nunca aparece en un prematuro tan chico.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.1.125 · Síndrome aspirativo meconial",
      "stem": "Recién nacido de 41 semanas y 5 días, por parto vaginal con registro fetal alterado y líquido amniótico con meconio espeso. A los 20 minutos de vida presenta taquipnea de 80 rpm, retracción intercostal, tórax en tonel y saturación de 86%. La radiografía muestra infiltrados gruesos y parcheados bilaterales, con zonas de atelectasia alternadas con zonas de hiperinsuflación.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Enfermedad de membrana hialina"
        },
        {
          "letter": "B",
          "text": "Taquipnea transitoria del recién nacido"
        },
        {
          "letter": "C",
          "text": "Hernia diafragmática congénita"
        },
        {
          "letter": "D",
          "text": "Neumonía connatal por estreptococo grupo B"
        },
        {
          "letter": "E",
          "text": "Síndrome de aspiración meconial"
        }
      ],
      "correct": "E",
      "explanation": "Postérmino con sufrimiento fetal y meconio espeso, dificultad respiratoria precoz y tórax hiperinsuflado, con infiltrados gruesos que alternan atelectasias y enfisema, es aspiración meconial: el meconio actúa como válvula. La membrana hialina es del prematuro, con vidrio esmerilado y volumen pulmonar disminuido.",
      "say": {
        "stem": "Recién nacido de cuarenta y una semanas y cinco días, por parto vaginal con registro alterado y líquido con meconio espeso. A los veinte minutos respira a ochenta por minuto, con retracción, tórax en tonel y saturación de ochenta y seis. La radiografía muestra infiltrados gruesos con atelectasias y zonas hiperinsufladas.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: membrana hialina, taquipnea transitoria, hernia diafragmática, neumonía connatal o aspiración meconial. Piénsalo.",
        "answer": "Es la E. Un postérmino estresado con meconio espeso y una radiografía con atelectasias mezcladas con hiperinsuflación es aspiración meconial. La membrana hialina tienta por la gravedad, pero es del prematuro y da pulmones pequeños en vidrio esmerilado."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.1.123 · Prematurez",
      "stem": "Recién nacido de 28 semanas, de 3 días de vida, en CPAP nasal. Presenta episodios repetidos de pausas respiratorias de más de 20 segundos, acompañados de bradicardia y desaturación, que ceden con estimulación táctil. Está normotérmico, con glicemia y hemograma normales y PCR negativa.",
      "question": "¿Cuál es el tratamiento más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Citrato de cafeína endovenoso u oral"
        },
        {
          "letter": "B",
          "text": "Ampicilina más gentamicina por 10 días"
        },
        {
          "letter": "C",
          "text": "Fenobarbital endovenoso"
        },
        {
          "letter": "D",
          "text": "Intubación y ventilación mecánica inmediatas"
        },
        {
          "letter": "E",
          "text": "Suspender la alimentación enteral por 1 semana"
        }
      ],
      "correct": "A",
      "explanation": "Pausas de más de 20 segundos con bradicardia o desaturación en un prematuro, sin otra causa, son apneas del prematuro por inmadurez del centro respiratorio. El tratamiento de elección es la cafeína. Descartada la sepsis, los antibióticos no corresponden, y la intubación queda para la falla del tratamiento.",
      "say": {
        "stem": "Prematuro de veintiocho semanas, de tres días de vida, en CPAP nasal. Hace pausas respiratorias de más de veinte segundos con bradicardia y desaturación, que ceden al estimularlo. Está normotérmico, con glicemia, hemograma y proteína C reactiva normales.",
        "question": "¿Cuál es el tratamiento más adecuado?",
        "options": "Las opciones: cafeína, ampicilina con gentamicina, fenobarbital, intubar de inmediato, o suspender la alimentación. Piénsalo.",
        "answer": "Es la A. Son apneas del prematuro, por un centro respiratorio inmaduro, y se tratan con cafeína. Los antibióticos tientan porque la apnea puede ser un signo de sepsis, pero aquí los exámenes son normales y el niño está estable."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.1.021 · Enfermedad pulmonar crónica",
      "stem": "Un recién nacido de 26 semanas de edad gestacional y 850 g recibió surfactante y ventilación mecánica por enfermedad de membrana hialina. Al llegar a las 36 semanas de edad gestacional corregida aún requiere oxígeno suplementario para mantener saturaciones adecuadas.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Taquipnea transitoria del recién nacido"
        },
        {
          "letter": "B",
          "text": "Síndrome de aspiración meconial"
        },
        {
          "letter": "C",
          "text": "Displasia broncopulmonar"
        },
        {
          "letter": "D",
          "text": "Hipertensión pulmonar persistente aislada"
        },
        {
          "letter": "E",
          "text": "Fibrosis quística"
        }
      ],
      "correct": "C",
      "explanation": "La displasia broncopulmonar es la enfermedad pulmonar crónica del prematuro: requerimiento de oxígeno a las 36 semanas de edad corregida en un prematuro menor de 32 semanas, tras ventilación mecánica u oxígeno. Se asocia a prematurez extrema, barotrauma, toxicidad por oxígeno e infección.",
      "say": {
        "stem": "Un prematuro de veintiséis semanas que tuvo membrana hialina y ventilación mecánica todavía necesita oxígeno a las treinta y seis semanas corregidas.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: taquipnea transitoria, aspiración meconial, displasia broncopulmonar, hipertensión pulmonar o fibrosis quística. Piénsalo.",
        "answer": "Es la C. Necesitar oxígeno a las treinta y seis semanas corregidas en un prematuro extremo define la displasia broncopulmonar. La hipertensión pulmonar tienta porque puede acompañarla, pero no es la causa principal ni se presenta aislada aquí."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.1.113 · Apneas",
      "stem": "Un recién nacido prematuro de 29 semanas, al tercer día de vida, presenta episodios repetidos de pausas respiratorias de más de 20 segundos, con bradicardia y desaturación, que ceden con estímulo táctil. Se han descartado hipoglicemia, sepsis, anemia, alteraciones electrolíticas y hemorragia intraventricular.",
      "question": "¿Cuál es el tratamiento farmacológico de elección?",
      "options": [
        {
          "letter": "A",
          "text": "Cafeína (citrato de cafeína)"
        },
        {
          "letter": "B",
          "text": "Fenobarbital"
        },
        {
          "letter": "C",
          "text": "Salbutamol"
        },
        {
          "letter": "D",
          "text": "Surfactante"
        },
        {
          "letter": "E",
          "text": "Naloxona"
        }
      ],
      "correct": "A",
      "explanation": "Las apneas de más de 20 segundos, o menores con bradicardia o desaturación, en un prematuro menor de 34 semanas, tras descartar causas secundarias, corresponden a apnea del prematuro por inmadurez del centro respiratorio. El tratamiento de elección es el citrato de cafeína, un estimulante respiratorio, más medidas de soporte o CPAP si persisten. El fenobarbital deprime la respiración.",
      "say": {
        "stem": "Un prematuro de veintinueve semanas tiene al tercer día pausas respiratorias largas con bradicardia y desaturación; se descartaron causas secundarias.",
        "question": "¿Cuál es el tratamiento farmacológico de elección?",
        "options": "Las opciones: cafeína, fenobarbital, salbutamol, surfactante o naloxona. Piénsalo.",
        "answer": "Es la A. Es una apnea del prematuro y se trata con citrato de cafeína. El fenobarbital tienta si se piensa en convulsiones, pero deprime la respiración y empeoraría las apneas."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'El antecedente decide', tag: 'Antes de mirar la radiografía', kind: 'key', items: [
          { t: 'Prematuro sin corticoides', d: 'Membrana hialina',
            say: 'Cerremos con las reglas de oro. Prematuro sin corticoides, con dificultad desde el nacimiento: membrana hialina.' },
          { t: 'Cesárea electiva, término', d: 'Taquipnea transitoria',
            say: 'Cesárea electiva en un recién nacido de término: taquipnea transitoria.' },
          { t: 'Postérmino con meconio', d: 'Aspiración meconial',
            say: 'Y postérmino con meconio espeso: aspiración meconial.' },
        ] },
        { title: 'La radiografía confirma', tag: 'Hipoinsuflado vs hiperinsuflado', kind: 'alert', items: [
          { t: 'Vidrio esmerilado, pulmón chico', d: 'Membrana hialina',
            say: 'Vidrio esmerilado con pulmón chico y broncograma: membrana hialina.' },
          { t: 'Cisuritis, pulmón hiperinsuflado', d: 'Taquipnea transitoria',
            say: 'Cisuritis con pulmón hiperinsuflado: taquipnea transitoria, benigna y autolimitada.' },
        ] },
        { title: 'Tratamiento', tag: 'Lo que no puedes confundir', kind: 'pharma', items: [
          { t: 'CPAP y surfactante', d: 'Solo si de verdad falta surfactante',
            say: 'Reserva el CPAP con surfactante para cuando de verdad falta surfactante, no para todo recién nacido taquipneico.' },
          { t: 'Fiebre materna cambia todo', d: 'Piensa en neumonía connatal',
            say: 'Y si aparece fiebre materna, ya sabes que el sospechoso cambia a neumonía connatal. Si te llevas una sola idea de hoy: el antecedente obstétrico te dice el diagnóstico antes de mirar la radiografía, y la radiografía solo lo confirma. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Dificultad respiratoria neonatal: EMH, TTNR y SAM',
    root: pwRoot,
  },
};
