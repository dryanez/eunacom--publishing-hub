// Clase 8.4 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_hematologia.cjs (hem-04).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'hem-04',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Hierro secuestrado por la hepcidina y un riñón que ya no fabrica eritropoyetina',
      say: 'Bienvenidos. En la clase anterior vimos la anemia a la que le falta hierro. Hoy vemos dos anemias que no se arreglan dando hierro a ciegas: la anemia de las enfermedades crónicas, que es la más frecuente en el paciente hospitalizado, y la anemia de la enfermedad renal crónica. La primera se entiende con la hepcidina; la segunda, con la eritropoyetina. Y el examen insiste en una cifra: la meta de hemoglobina en el paciente renal.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'La hepcidina: el hierro está, pero no se puede usar',
      nodes: [
        { id: 'enf', col: 0, row: 1, k: 'cause', t: 'Inflamación crónica', s: 'Infección, cáncer, autoinmunidad' },
        { id: 'il6', col: 1, row: 1, k: 'mech', t: 'IL-6 e interferón gamma', s: 'Citocinas proinflamatorias' },
        { id: 'hep', col: 2, row: 0, k: 'mech', t: 'Más hepcidina', s: 'Hormona del hígado' },
        { id: 'fpn', col: 3, row: 0, k: 'effect', t: 'Se degrada la ferroportina', s: 'Hierro atrapado en macrófagos' },
        { id: 'med', col: 2, row: 2, k: 'mech', t: 'TNF alfa e interferón', s: 'Frenan los progenitores eritroides' },
        { id: 'vid', col: 3, row: 2, k: 'effect', t: 'Vida del glóbulo rojo más corta', s: 'De 120 a 80–90 días' },
        { id: 'ane', col: 4, row: 1, k: 'risk', t: 'Anemia hipoproliferativa', s: 'Y respuesta débil de la EPO' },
      ],
      edges: [
        { from: 'enf', to: 'il6' }, { from: 'il6', to: 'hep' }, { from: 'hep', to: 'fpn' },
        { from: 'il6', to: 'med' }, { from: 'med', to: 'vid' },
        { from: 'fpn', to: 'ane' }, { from: 'vid', to: 'ane' },
      ],
      steps: [
        { show: ['enf'], note: 'Infección prolongada, neoplasia o autoinmunidad activa',
          say: 'Partamos por quién tiene esta anemia. Pacientes con una inflamación que dura: infecciones prolongadas como la tuberculosis, la osteomielitis o la endocarditis subaguda; neoplasias sólidas o hematológicas; y enfermedades autoinmunes activas, como la artritis reumatoide, el lupus o las vasculitis.' },
        { show: ['il6'], note: 'Las citocinas son el punto de partida',
          say: 'En todos ellos hay un denominador común: citocinas proinflamatorias. La interleucina seis y el interferón gamma circulan en exceso, y le mandan una orden al hígado.' },
        { show: ['hep'], note: 'La hepcidina es el freno central del hierro',
          say: 'La orden es fabricar hepcidina. La hepcidina es el freno central del metabolismo del hierro, y en la inflamación el hígado la produce en grandes cantidades.' },
        { show: ['fpn'], note: 'Sin ferroportina, el hierro no sale de la célula',
          say: 'Y aquí está el mecanismo que se pregunta. La hepcidina se une a la ferroportina, que es la única puerta de salida del hierro desde las células, y la destruye. Sin esa puerta, el hierro queda atrapado dentro de los macrófagos y del hígado, y el enterocito tampoco lo deja pasar. Hay hierro en el cuerpo, pero la médula no lo recibe.' },
        { show: ['med', 'vid'], note: 'Además, la médula produce menos y los glóbulos duran menos',
          say: 'Pero la hepcidina no es lo único. El factor de necrosis tumoral y el interferón frenan directamente a los progenitores eritroides de la médula, y los macrófagos hiperactivos acortan la vida del glóbulo rojo, de ciento veinte días a unos ochenta o noventa.' },
        { show: ['ane'], note: 'Tres golpes: hierro bloqueado, médula frenada, EPO débil',
          say: 'Y encima, el riñón responde con menos eritropoyetina de la esperada frente a la anemia. Tres golpes a la vez: hierro bloqueado, médula frenada y eritropoyetina débil. El resultado es una anemia hipoproliferativa, con reticulocitos bajos, como la que ordenamos en la primera clase del bloque.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica y hemograma',
      title: 'Cómo se ve en el hemograma',
      cards: [
        { title: 'Tamaño del glóbulo rojo', tag: 'Cambia con el tiempo', kind: 'key', items: [
          { t: 'Al inicio: normocítica normocrómica', d: 'VCM 80 a 95 fL',
            say: 'Veamos el hemograma. Al principio, la anemia de las enfermedades crónicas es normocítica y normocrómica, con un VCM entre ochenta y noventa y cinco.' },
          { t: 'Con los meses: microcítica leve', d: 'VCM 72 a 79 fL, rara vez < 70',
            say: 'Pero si la falta de hierro disponible se mantiene por meses, la síntesis de hemo se resiente y aparece una microcitosis leve, con un VCM de setenta y dos a setenta y nueve, y casi nunca bajo setenta. Ojo con esto: una microcitosis no es sinónimo de ferropenia, y el examen lo usa para confundirte.' },
        ] },
        { title: 'Gravedad', tag: 'Anemia moderada', kind: 'alert', items: [
          { t: 'Hb habitual: 8,5 a 11,5 g/dL', d: 'Leve a moderada',
            say: 'La hemoglobina suele moverse entre ocho coma cinco y once coma cinco. Es una anemia leve a moderada, que acompaña a la enfermedad de base.' },
          { t: 'Hb < 8 g/dL: buscar otra causa', d: 'Sangrado u otra anemia sobreagregada',
            say: 'Por eso, si la hemoglobina cae bajo ocho, no te quedes tranquilo con el diagnóstico de enfermedad crónica. Busca un sangrado concomitante u otra causa sobreagregada.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Perfil de hierro',
      title: 'El perfil que define el diagnóstico',
      cards: [
        { title: 'Patrón de la inflamación', tag: 'Recordar la clase 8.2', kind: 'criteria', items: [
          { t: 'Ferritina alta: > 100–300 ng/mL', d: 'Reactante de fase aguda positivo',
            say: 'El perfil de hierro es el que decide, y ya lo conoces de la clase del perfil. La ferritina está alta, sobre cien a trescientos, porque es un reactante de fase aguda positivo y porque los depósitos están llenos.' },
          { t: 'Transferrina y TIBC bajas', d: 'Reactantes de fase aguda negativos',
            say: 'La transferrina y la TIBC están bajas, porque son reactantes de fase aguda negativos. Esa es la gran diferencia con la ferropenia, donde la transferrina sube.' },
          { t: 'Ferremia baja, IST 15 a 25 %', d: 'Hierro secuestrado dentro de la célula',
            say: 'La ferremia está baja, porque el hierro está encerrado en los macrófagos, y la saturación de transferrina queda normal o levemente baja, entre quince y veinticinco por ciento.' },
        ] },
        { title: 'Médula y casos mixtos', tag: 'Pacientes complejos', kind: 'key', items: [
          { t: 'Azul de Prusia: macrófagos cargados', d: 'Sideroblastos sin hierro',
            say: 'Si se hiciera un mielograma, la tinción de azul de Prusia muestra abundante hierro en los macrófagos, pero nada en los sideroblastos. Es la imagen perfecta del secuestro: el hierro está guardado, pero no llega al glóbulo rojo en formación.' },
          { t: 'Receptor soluble de transferrina', d: 'Elevado: hay ferropenia asociada',
            say: 'Y en el paciente difícil, por ejemplo con artritis reumatoide o insuficiencia cardíaca y una anemia mixta, el receptor soluble de transferrina y su índice con la ferritina aclaran el cuadro. Si el receptor soluble está elevado, además de inflamación hay ferropenia verdadera.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Anemia renal',
      title: 'Por qué el riñón enfermo produce anemia',
      nodes: [
        { id: 'vfg', col: 0, row: 1, k: 'cause', t: 'VFG < 45–60 mL/min', s: 'ERC etapa 3 en adelante' },
        { id: 'per', col: 1, row: 0, k: 'mech', t: 'Fibrosis peritubular', s: 'Se pierden las células que sensan oxígeno' },
        { id: 'epo', col: 2, row: 0, k: 'effect', t: 'Déficit de eritropoyetina', s: 'Mecanismo principal' },
        { id: 'ure', col: 1, row: 2, k: 'mech', t: 'Uremia', s: 'Toxinas y microinflamación' },
        { id: 'apo', col: 2, row: 2, k: 'effect', t: 'Menos precursores, vida corta', s: 'Y más hepcidina' },
        { id: 'mix', col: 3, row: 1, k: 'risk', t: 'Anemia normocítica mixta', s: 'Falta EPO + hierro bloqueado' },
      ],
      edges: [
        { from: 'vfg', to: 'per' }, { from: 'per', to: 'epo' },
        { from: 'vfg', to: 'ure' }, { from: 'ure', to: 'apo' },
        { from: 'epo', to: 'mix' }, { from: 'apo', to: 'mix' },
      ],
      steps: [
        { show: ['vfg'], note: 'La anemia aparece desde la etapa 3',
          say: 'Pasemos a la segunda anemia de la clase. En la enfermedad renal crónica, la anemia aparece cuando la filtración glomerular baja de cuarenta y cinco a sesenta mililitros por minuto, es decir, desde la etapa tres en adelante.' },
        { show: ['per', 'epo'], note: 'El riñón deja de fabricar eritropoyetina',
          say: 'La causa principal está en la corteza renal. Ahí hay unas células intersticiales peritubulares que miden el oxígeno de los tejidos y fabrican eritropoyetina. A medida que el riñón se fibrosa, esas células desaparecen, y el paciente ya no es capaz de producir eritropoyetina aunque esté anémico. Ese es el mecanismo central de la anemia renal.' },
        { show: ['ure'], note: 'La uremia suma su propio daño',
          say: 'Además, la uremia hace lo suyo. Las toxinas urémicas dañan la médula y la membrana del glóbulo rojo, y mantienen un estado de microinflamación permanente.' },
        { show: ['apo'], note: 'La microinflamación trae de vuelta a la hepcidina',
          say: 'Eso significa menos precursores eritroides, glóbulos rojos que viven menos, y una hepcidina elevada. Fíjate en la conexión: la misma hepcidina de la enfermedad crónica también aparece en el paciente renal.' },
        { show: ['mix'], note: 'Modelo mixto: déficit de EPO más bloqueo del hierro',
          say: 'Por eso la anemia renal es un modelo mixto: falta eritropoyetina y además el hierro está funcionalmente bloqueado. Es una anemia normocítica, normocrómica y arregenerativa. Y esas dos causas explican el tratamiento: habrá que dar eritropoyetina, pero también hierro.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tratamiento GES',
      title: 'Primero el hierro, después la eritropoyetina',
      nodes: [
        { id: 'ges', col: 0, row: 1, k: 'start', t: 'Anemia en ERC terminal', s: 'GES de insuficiencia renal crónica terminal' },
        { id: 'dep', col: 1, row: 1, k: 'q', t: '¿Ferritina > 200 e IST > 20 %?', s: 'Evaluar depósitos antes de la EPO' },
        { id: 'fev', col: 2, row: 0, k: 'alert', t: 'Hierro EV primero', s: 'Sacarato o carboximaltosa' },
        { id: 'res', col: 3, row: 0, k: 'trap', t: 'EPO sin hierro', s: 'Resistencia y fracaso' },
        { id: 'epo', col: 2, row: 2, k: 'good', t: 'Iniciar EPO', s: '50–100 UI/kg 2–3 veces por semana' },
        { id: 'dar', col: 3, row: 2, k: 'good', t: 'Darbepoetina alfa', s: 'Semanal o cada 2 semanas' },
        { id: 'sub', col: 4, row: 2, k: 'effect', t: 'Hb sube 1 a 2 g/dL al mes', s: 'Ascenso suave' },
      ],
      edges: [
        { from: 'ges', to: 'dep' },
        { from: 'dep', to: 'fev', label: 'no' }, { from: 'fev', to: 'res', label: 'si se omite' },
        { from: 'dep', to: 'epo', label: 'sí' }, { from: 'fev', to: 'epo', label: 'repleto' },
        { from: 'epo', to: 'dar', label: 'alternativa' }, { from: 'epo', to: 'sub' },
      ],
      steps: [
        { show: ['ges'], note: 'Garantía GES de la insuficiencia renal crónica terminal',
          say: 'Vamos al tratamiento. En Chile, el manejo de la anemia en la insuficiencia renal crónica terminal está cubierto por el GES de esa enfermedad. Y la regla número uno, antes de cualquier agente estimulante de la eritropoyesis, es mirar los depósitos de hierro.' },
        { show: ['dep'], note: 'Ferritina > 200 en hemodiálisis e IST > 20 %',
          say: 'La pregunta es: ¿la ferritina está sobre doscientos, en el paciente en hemodiálisis, y la saturación de transferrina sobre veinte por ciento? Si no se cumplen esas dos condiciones, todavía no se inicia la eritropoyetina.' },
        { show: ['fev'], note: '100 mg EV en cada sesión de diálisis, hasta 1.000 mg',
          say: 'Primero se repone hierro, y en diálisis se da por vía endovenosa: hierro sacarato o carboximaltosa, cien miligramos en cada sesión, hasta completar unos mil. En el paciente dializado esto es rutinario y obligatorio.' },
        { show: ['res'], note: 'La EPO consume el poco hierro que queda',
          say: '¿Y por qué tanto énfasis? Porque si inicias o subes la eritropoyetina con los depósitos vacíos, la médula consume de inmediato el poco hierro disponible, y la hemoglobina no sube. Eso se llama resistencia funcional a la eritropoyetina. Es la trampa típica del caso clínico.' },
        { show: ['epo'], note: 'Subcutánea en prediálisis, EV en diálisis',
          say: 'Con los depósitos llenos, ahora sí: eritropoyetina recombinante humana, cincuenta a cien unidades por kilo, dos a tres veces por semana. Se prefiere la vía subcutánea en prediálisis, por su mejor biodisponibilidad, y en diálisis también puede ir endovenosa.' },
        { show: ['dar'], note: 'Mayor vida media: menos inyecciones',
          say: 'Una alternativa es la darbepoetina alfa, una eritropoyetina hiperglicosilada con una vida media más larga, que permite inyectarla una vez a la semana o cada dos semanas.' },
        { show: ['sub'], note: 'Se busca una subida lenta',
          say: 'Y lo esperable es una subida suave, de uno a dos gramos por decilitro al mes. No buscamos una subida rápida, y en la próxima diapositiva vas a entender por qué.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Alerta EUNACOM',
      title: 'La meta de hemoglobina en el paciente renal',
      cards: [
        { title: 'Meta', tag: 'La cifra que se pregunta', kind: 'key', items: [
          { t: 'Hb 10 a 11,5 g/dL', d: 'Techo de seguridad: 12 g/dL',
            say: 'Esta es la cifra que el examen pregunta con más insistencia. En el paciente renal tratado con eritropoyetina, la meta de hemoglobina es de diez a once coma cinco, con un techo de seguridad de doce.' },
          { t: 'Menos transfusiones y menos astenia', d: 'Mejora la hipertrofia ventricular',
            say: 'Ese rango reduce las transfusiones, alivia la astenia y mejora la hipertrofia del ventrículo izquierdo que produce la anemia crónica. Es suficiente para que el paciente esté bien.' },
        ] },
        { title: 'No normalizar', tag: 'CHOIR, CREATE y TREAT', kind: 'alert', items: [
          { t: 'Hb > 13 g/dL: más ACV y muerte', d: 'Y trombosis de la fístula',
            say: 'Lo que no se hace es normalizar la hemoglobina. Tres grandes ensayos, CHOIR, CREATE y TREAT, mostraron que llevarla sobre trece con dosis altas de eritropoyetina aumenta el accidente cerebrovascular isquémico, la trombosis de la fístula de hemodiálisis, la hipertensión grave y la mortalidad cardiovascular.' },
          { t: 'Hb > 11,5–12: bajar EPO 25 a 50 %', d: 'O suspender hasta Hb < 11,5',
            say: 'Por eso, si la hemoglobina supera once coma cinco a doce, la conducta es reducir la dosis de eritropoyetina entre un veinticinco y un cincuenta por ciento. Y si pasa de doce a trece, se suspende transitoriamente hasta que baje de once coma cinco.' },
        ] },
        { title: 'Efecto adverso', tag: 'El más común', kind: 'pharma', items: [
          { t: 'Hipertensión arterial', d: 'En 20 a 30 % de los pacientes',
            say: 'Y el efecto adverso cardiovascular más común de la eritropoyetina es la hipertensión arterial, que aparece en un veinte a treinta por ciento de los pacientes. Por eso se controla la presión cada semana al iniciarla, y se trata con los antihipertensivos habituales.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Enfermedad crónica',
      title: 'Cómo se trata la anemia de la inflamación',
      cards: [
        { title: 'El tratamiento', tag: 'Enfermedad de base', kind: 'key', items: [
          { t: 'Controlar la inflamación', d: 'Baja la hepcidina y se libera el hierro',
            say: 'Volvamos a la anemia de las enfermedades crónicas, porque su tratamiento es distinto. Si el problema es la hepcidina, la solución es apagar la inflamación que la mantiene alta. Cuando se controla la artritis, la infección o el cáncer, la hepcidina baja, la ferroportina vuelve y el hierro sale de los macrófagos.' },
        ] },
        { title: 'Lo que no se hace', tag: 'Error frecuente', kind: 'alert', items: [
          { t: 'Hierro empírico', d: 'Queda atrapado igual que el resto',
            say: 'La anemia de la inflamación no se trata con hierro empírico. Piénsalo con el mecanismo: el hierro que le das también queda bloqueado por la hepcidina. El error clásico es ver la ferremia baja y recetar sulfato ferroso.' },
          { t: 'Salvo ferropenia asociada', d: 'Ferritina < 100 con PCR alta',
            say: 'La excepción es cuando hay una ferropenia verdadera sumada a la inflamación, que en la clase del perfil vimos que se sospecha con una ferritina bajo cien y la PCR alta. Ahí sí hay hierro que reponer.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos las dos anemias en un solo árbol, empezando por la anemia normocítica que no regenera.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Ferropenia, inflamación y riñón: tres perfiles distintos',
      head: ['Característica', 'Ferropénica', 'Enfermedad crónica', 'Renal (ERC)'],
      rows: [
        { cells: ['VCM', 'Microcítica (< 80 fL)', 'Normocítica; microcítica tardía', 'Normocítica (80–100 fL)'],
          say: 'Comparemos las tres anemias lado a lado. El VCM: la ferropénica es francamente microcítica. La de enfermedad crónica es normocítica y solo con el tiempo se vuelve levemente microcítica. Y la renal es normocítica pura.' },
        { cells: ['Ferritina', 'Baja (< 30 ng/mL)', 'Alta (> 100 a 500)', 'Normal o alta'],
          say: 'La ferritina: baja en la ferropenia, alta en la inflamación, y normal o alta en el paciente renal, según cuánta inflamación tenga.' },
        { cells: ['Transferrina y TIBC', 'Aumentadas', 'Disminuidas', 'Normales o disminuidas'],
          say: 'La transferrina: alta en la ferropenia y baja en la inflamación. Esa es la diferencia que más se pregunta, y la que resuelve la pregunta real que viene.' },
        { cells: ['Saturación (IST)', 'Muy baja (< 15 %)', 'Normal o baja (15–25 %)', 'Normal o baja'],
          say: 'La saturación: muy baja en la ferropenia, normal o algo baja en la inflamación, y en el renal hay que mirarla con cuidado, porque una saturación baja indica ferropenia funcional.' },
        { cells: ['Mecanismo', 'Falta hierro', 'Hepcidina secuestra el hierro', 'Falta eritropoyetina'],
          say: 'El mecanismo: en la ferropénica falta hierro, en la crónica el hierro está secuestrado por la hepcidina, y en la renal falta eritropoyetina.' },
        { cells: ['Tratamiento', 'Hierro oral o EV', 'Tratar la enfermedad de base', 'Hierro EV y luego EPO'],
          say: 'Y el tratamiento sigue al mecanismo: hierro en la ferropénica, tratar la enfermedad de base en la crónica, y en la renal primero hierro endovenoso y después eritropoyetina, con meta de diez a once coma cinco.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 64 años con nefropatía diabética en hemodiálisis trisemanal por fístula braquiocefálica, en tratamiento con eritropoyetina. En su control mensual: Hb 8,7 g/dL, VCM 88 fL, ferritina 110 ng/mL, saturación de transferrina 14 %. Asintomática en reposo, PA 135/80 mmHg. La enfermera propone subir la eritropoyetina de 4.000 a 8.000 UI por sesión.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Aumentar la eritropoyetina a 8.000 UI por sesión' },
        { letter: 'B', text: 'Indicar hierro sacarato EV 100 mg en cada sesión de hemodiálisis' },
        { letter: 'C', text: 'Transfundir 2 unidades de glóbulos rojos' },
        { letter: 'D', text: 'Suspender la eritropoyetina por riesgo trombótico' },
        { letter: 'E', text: 'Indicar sulfato ferroso oral y controlar en 3 meses' },
      ],
      correct: 'B',
      explanation: 'Ferritina < 200 ng/mL e IST < 20 %: ferropenia funcional. Subir la EPO sin hierro no eleva la Hb (resistencia) y aumenta costo y toxicidad. En hemodiálisis se repone hierro EV (sacarato 100 mg por sesión) hasta repletar. No hay indicación de transfusión ni de suspender la EPO con Hb 8,7.',
      say: {
        stem: 'Vamos con un caso. Mujer de sesenta y cuatro años con nefropatía diabética, en hemodiálisis tres veces por semana, que ya recibe eritropoyetina. En su control tiene hemoglobina ocho coma siete, VCM ochenta y ocho, ferritina ciento diez y saturación de transferrina de catorce por ciento. Está asintomática y con presión normal. La enfermera propone duplicar la dosis de eritropoyetina.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: subir la eritropoyetina, hierro sacarato endovenoso en cada sesión, transfundir, suspender la eritropoyetina, o sulfato ferroso oral. Piénsalo.',
        answer: 'Es la B. Aplica la regla de los depósitos: ferritina bajo doscientos y saturación bajo veinte. Hay ferropenia funcional, y por eso la eritropoyetina no está funcionando. El distractor tentador es la A, porque la hemoglobina está bajo la meta, pero subir la dosis sin hierro es exactamente la resistencia de la que hablamos: más costo, más toxicidad y la hemoglobina no sube. Y en diálisis el hierro va endovenoso, no oral.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 58',
      stem: 'Una paciente de 52 años, con antecedente de artritis reumatoide en tratamiento permanente con AINES y prednisona por vía oral y tratamiento intermitente con metotrexate por vía oral, presenta un cuadro de astenia, adinamia y disnea de esfuerzos que ha empeorado en el último tiempo. Se solicitan exámenes en los que destacan una creatinina de 1,6mg/dL, hemograma con hematocrito 29%, hemoglobina 9,7g/dL, plaquetas 147.000/mm3, blancos 4.200/mm3 y al frotis se aprecia microcitosis. Además se solicita perfil de fierro que muestra ferremia de 40ug/dL (60-160 ug/dL) y transferrina de 190mg/dL (240-360mg/dL).',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Anemia por enfermedades crónicas' },
        { letter: 'B', text: 'Mielodisplasia' },
        { letter: 'C', text: 'Anemia por insuficiencia renal crónica' },
        { letter: 'D', text: 'Hipoplasia medular' },
        { letter: 'E', text: 'Mieloma múltiple' },
      ],
      correct: 'A',
      explanation: 'Artritis reumatoide con ferremia baja y transferrina baja: hierro secuestrado por la inflamación. La creatinina de 1,6 no alcanza a explicar la anemia por déficit de EPO, y la transferrina baja es la huella de la inflamación. La microcitosis leve es compatible con una enfermedad crónica de larga data.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil diecisiete. Mujer de cincuenta y dos años con artritis reumatoide, tratada con antiinflamatorios, prednisona y metotrexato, que consulta por astenia y disnea de esfuerzo. Tiene creatinina uno coma seis, hemoglobina nueve coma siete, microcitosis en el frotis, ferremia baja y transferrina baja.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: anemia por enfermedades crónicas, mielodisplasia, anemia por insuficiencia renal crónica, hipoplasia medular, o mieloma múltiple. Piénsalo.',
        answer: 'Es la A, anemia por enfermedades crónicas. Hay una inflamación activa, la artritis, y el perfil lo confirma: ferremia baja con transferrina baja, que es la huella de la hepcidina. El distractor tentador es la anemia renal, por la creatinina. Pero la anemia renal es normocítica, y el dato que el examen te muestra es la transferrina baja en una paciente con artritis. La microcitosis leve calza con una inflamación de larga data.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Enfermedad crónica', tag: 'Hepcidina', kind: 'key', items: [
          { t: 'IL-6 → hepcidina → sin ferroportina', d: 'El hierro queda atrapado',
            say: 'Cerremos con las reglas de oro. En la anemia de las enfermedades crónicas, la interleucina seis sube la hepcidina, la hepcidina destruye la ferroportina y el hierro queda atrapado en los macrófagos.' },
          { t: 'Ferritina alta, transferrina baja', d: 'Se trata la enfermedad de base',
            say: 'El perfil es ferritina alta con transferrina baja, y se trata la enfermedad de base, no con hierro empírico.' },
        ] },
        { title: 'Anemia renal', tag: 'Eritropoyetina', kind: 'pharma', items: [
          { t: 'Falta EPO desde VFG < 45–60', d: 'Normocítica y arregenerativa',
            say: 'En la anemia renal falta eritropoyetina, desde filtraciones bajo cuarenta y cinco a sesenta, y la anemia es normocítica y arregenerativa.' },
          { t: 'Primero hierro: ferritina > 200, IST > 20 %', d: 'Después EPO',
            say: 'Antes de la eritropoyetina, primero hierro: ferritina sobre doscientos y saturación sobre veinte por ciento. Sin hierro, la eritropoyetina fracasa.' },
        ] },
        { title: 'La cifra', tag: 'No normalizar', kind: 'alert', items: [
          { t: 'Meta Hb 10 a 11,5 g/dL', d: 'Sobre 12–13: ACV, trombosis y muerte',
            say: 'Y la meta de hemoglobina es de diez a once coma cinco; llevarla sobre doce o trece aumenta el accidente cerebrovascular, la trombosis de la fístula y la mortalidad.' },
          { t: 'Próxima clase: aplasia medular', d: 'La médula que se vacía',
            say: 'En la próxima clase vemos una médula que no falla por falta de hierro ni de eritropoyetina, sino porque se vacía: la aplasia medular. Si te llevas una sola idea de hoy: en la inflamación se trata la causa, y en el riñón se da hierro primero y eritropoyetina después, sin pasar de once coma cinco. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Anemia normocítica arregenerativa: inflamación o riñón',
    root: N('start', 'Anemia normocítica arregenerativa', 'Reticulocitos bajos',
      'Tienes una anemia normocítica con reticulocitos bajos. Las dos preguntas son si hay inflamación y cómo está la función renal.',
      ['', N('q', '¿Inflamación o ERC?', 'Mirar PCR, perfil de hierro y VFG',
        'Pide la PCR, el perfil de hierro y estima la filtración glomerular. Eso te dice cuál de los dos mecanismos domina.',
        ['Inflamación', N('q', '¿Ferritina con PCR alta?', 'Buscar ferropenia asociada',
          'Si domina la inflamación, mira la ferritina junto con la PCR, para no pasar por alto una ferropenia asociada.',
          ['> 100', N('do', 'Enfermedad crónica pura', 'Tratar la enfermedad de base',
            'Ferritina alta y transferrina baja: anemia de enfermedad crónica pura. Se trata la enfermedad de base, sin hierro empírico.')],
          ['< 100', N('alert', 'Ferropenia asociada', 'Reponer hierro y tratar la base',
            'Ferritina bajo cien con PCR alta: además de la inflamación falta hierro, y ese hierro sí se repone.')])],
        ['VFG < 45–60', N('q', '¿Ferritina > 200 e IST > 20 %?', 'Antes de cualquier EPO',
          'Si el problema es el riñón, antes de la eritropoyetina revisa los depósitos: ferritina sobre doscientos y saturación sobre veinte por ciento.',
          ['No', N('alert', 'Hierro EV primero', 'No iniciar ni subir la EPO',
            'Si no se cumplen, primero hierro endovenoso. Iniciar o subir la eritropoyetina así solo produce resistencia.')],
          ['Sí', N('ok', 'Iniciar EPO', 'Meta Hb 10 a 11,5 g/dL',
            'Con depósitos llenos, se inicia la eritropoyetina, con meta de hemoglobina de diez a once coma cinco.',
            ['Hb > 11,5–12', N('refer', 'Bajar o suspender EPO', 'Reducir 25 a 50 %',
              'Si la hemoglobina pasa de once coma cinco a doce, se reduce la dosis entre un veinticinco y un cincuenta por ciento, o se suspende transitoriamente si pasa de doce a trece.')])])])]),
  },
};
