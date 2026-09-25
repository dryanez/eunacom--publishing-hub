// Clase 10.2 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neurologia.cjs (neuro-02).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'neuro-02',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Un déficit que se fue no es un paciente sano: ABCD², estudio en 48 horas y prevención según la causa',
      say: 'Bienvenidos. En la clase anterior vimos el infarto cerebral instalado. Hoy vemos su aviso: el ataque isquémico transitorio. El error clásico es mandar a la casa al paciente porque llegó sin déficit. Hoy vas a aprender por qué eso es peligroso, cómo medir el riesgo con el score ABCD dos, y qué prevención le corresponde según la causa. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Por qué es urgencia',
      title: 'El aviso antes del infarto',
      nodes: [
        { id: 'isq', col: 0, row: 1, k: 'cause', t: 'Isquemia focal transitoria', s: 'Cerebro, médula o retina' },
        { id: 'res', col: 1, row: 1, k: 'effect', t: 'El déficit se resuelve', s: 'Paciente normal al examen' },
        { id: 'ima', col: 2, row: 0, k: 'good', t: 'Sin infarto en la imagen', s: 'Eso es un AIT' },
        { id: 'rie', col: 2, row: 2, k: 'risk', t: '10–15 % tendrá un ACV', s: 'En los siguientes 90 días' },
        { id: '48h', col: 3, row: 2, k: 'alert', t: 'La mitad en 48 horas', s: 'Urgencia médica absoluta' },
      ],
      edges: [
        { from: 'isq', to: 'res' }, { from: 'res', to: 'ima' }, { from: 'res', to: 'rie', label: 'pero' },
        { from: 'rie', to: '48h' },
      ],
      steps: [
        { show: ['isq'], note: 'Mismo mecanismo que el infarto',
          say: 'Partamos por el mecanismo. El ataque isquémico transitorio, el AIT, es el mismo problema que vimos en el infarto: una arteria que se tapa. La diferencia es que se destapa antes de que el tejido muera.' },
        { show: ['res'], note: 'Por eso llega sin déficit',
          say: 'Por eso el déficit se resuelve solo, y el paciente llega a urgencias con un examen neurológico normal. Esa normalidad es justamente lo que engaña.' },
        { show: ['ima'], note: 'Definición: sin infarto en la imagen',
          say: 'Si la imagen no muestra infarto, es un AIT. Vamos a volver a esa definición en un momento.' },
        { show: ['rie'], note: 'El AIT no es benigno',
          say: 'Pero aquí está lo importante. El AIT no es un episodio benigno: entre el diez y el quince por ciento de estos pacientes va a tener un infarto cerebral mayor en los siguientes noventa días.' },
        { show: ['48h'], note: 'El riesgo se concentra al inicio',
          say: 'Y la mitad de ese riesgo se concentra en las primeras cuarenta y ocho horas. Por eso el AIT es una urgencia médica absoluta: el momento de actuar es ahora, no en un control ambulatorio en un mes.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Definición',
      title: 'Lo que define al AIT es el tejido, no el reloj',
      cards: [
        { title: 'Definición moderna', tag: 'Basada en el tejido', kind: 'key', items: [
          { t: 'Antes: < 24 horas', d: 'Definición clásica, ya reemplazada',
            say: 'Veamos la definición, porque cambió. Antes se definía por el tiempo: un déficit focal que se resolvía en menos de veinticuatro horas.' },
          { t: 'Hoy: sin infarto en la imagen', d: 'Resonancia con difusión o TAC',
            say: 'Hoy se define por el tejido: un episodio transitorio de disfunción neurológica por isquemia focal del encéfalo, la médula o la retina, sin evidencia de infarto agudo en la neuroimagen.' },
          { t: 'Duran < 60 min', d: 'Típicamente 5 a 20 minutos',
            say: 'La gran mayoría de los AIT verdaderos duran menos de una hora, típicamente entre cinco y veinte minutos.' },
        ] },
        { title: 'Ojo en el examen', tag: 'Reclasificación', kind: 'alert', items: [
          { t: 'Difusión positiva = infarto', d: 'Aunque los síntomas se hayan ido',
            say: 'Y fíjate en esto: si el paciente se recuperó por completo, pero la resonancia muestra una lesión en la secuencia de difusión, ya no es un AIT. Se reclasifica como un infarto cerebral con resolución clínica transitoria, y tiene todavía más riesgo de repetir.' },
        ] },
        { title: 'Amaurosis fugaz', tag: 'AIT retiniano', kind: 'criteria', items: [
          { t: 'Ceguera monocular transitoria', d: 'Indolora, como una cortina que baja y sube',
            say: 'Hay un AIT que se pregunta aparte: la amaurosis fugaz. Es una pérdida de visión de un solo ojo, indolora, que el paciente describe como una cortina negra que baja y luego sube.' },
          { t: 'Émbolo desde la carótida ipsilateral', d: 'A la arteria oftálmica o central de la retina',
            say: 'Se debe a microémbolos hacia la arteria oftálmica o la central de la retina, que vienen de una placa en la carótida del mismo lado. Por eso tiene tanto valor: te está señalando la carótida.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico diferencial',
      title: 'Lo que parece AIT y no lo es',
      cards: [
        { title: 'Imitadores frecuentes', tag: 'AIT mimics', kind: 'normal', items: [
          { t: 'Migraña con aura', d: 'Síntomas positivos que avanzan en minutos',
            say: 'Antes de etiquetar un AIT, piensa en lo que lo imita. La migraña con aura es el más clásico. La diferencia está en el tipo de síntoma: el aura da síntomas visuales positivos, que avanzan lentamente en minutos, y después viene la cefalea pulsátil. El AIT, en cambio, quita función de golpe.' },
          { t: 'Crisis focal con parálisis de Todd', d: 'Déficit después de una convulsión',
            say: 'La crisis epiléptica focal puede dejar una paresia transitoria después de la crisis: la parálisis de Todd.' },
          { t: 'Hipoglicemia aguda', d: 'Siempre medir la glicemia',
            say: 'La hipoglicemia aguda puede dar un déficit focal. Por eso siempre se mide la glicemia.' },
        ] },
        { title: 'Otros', tag: 'No son focales', kind: 'criteria', items: [
          { t: 'Síncope o lipotimia', d: 'Pérdida global, no focal',
            say: 'El síncope y la lipotimia son una falla global, no un déficit focal.' },
          { t: 'Vértigo periférico posicional', d: 'Y amnesia global transitoria',
            say: 'Y el vértigo periférico posicional y la amnesia global transitoria completan la lista.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Score ABCD²',
      title: 'Cómo se calcula el riesgo',
      cards: [
        { title: 'A y B', tag: '1 punto cada uno', kind: 'criteria', items: [
          { t: 'A · Edad ≥ 60 años', d: '1 punto',
            say: 'Ahora, la herramienta central de la clase: el score ABCD dos, que predice el riesgo de infarto a las cuarenta y ocho horas y a los siete días. Cada letra es un factor. La A es la edad: sesenta años o más suma un punto.' },
          { t: 'B · PA ≥ 140/90 mmHg', d: '1 punto, en la primera evaluación',
            say: 'La B es la presión: ciento cuarenta sobre noventa o más en la primera evaluación suma un punto.' },
        ] },
        { title: 'C · Clínica', tag: 'Hasta 2 puntos', kind: 'key', items: [
          { t: 'Debilidad unilateral: 2', d: 'Hemiparesia',
            say: 'La C es la clínica, y es la que más pesa. Una debilidad unilateral suma dos puntos.' },
          { t: 'Habla alterada sin paresia: 1', d: 'Otros síntomas: 0',
            say: 'La alteración del habla sin debilidad suma uno, y los otros síntomas, cero.' },
        ] },
        { title: 'D y D', tag: 'Duración y diabetes', kind: 'pharma', items: [
          { t: 'Duración ≥ 60 min: 2', d: '10 a 59 min: 1 · < 10 min: 0',
            say: 'La primera D es la duración: una hora o más suma dos puntos, de diez a cincuenta y nueve minutos, uno, y menos de diez, cero.' },
          { t: 'Diabetes: 1', d: 'Máximo total: 7 puntos',
            say: 'Y la segunda D es la diabetes, que suma uno. El máximo es siete. Fíjate que la clínica y la duración valen el doble: eso es lo que más se equivoca al calcular.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Estratificación',
      title: 'Del puntaje a la conducta',
      nodes: [
        { id: 'sco', col: 0, row: 1, k: 'q', t: 'ABCD²', s: 'Suma de 0 a 7' },
        { id: 'baj', col: 1, row: 0, k: 'good', t: '0–3: bajo', s: '1 % a 48 h · estudio ambulatorio < 48 h' },
        { id: 'mod', col: 1, row: 1, k: 'refer', t: '4–5: moderado', s: '4,1 % a 48 h · hospitalizar' },
        { id: 'alt', col: 1, row: 2, k: 'alert', t: '6–7: alto', s: '8,1 % a 48 h · hospitalizar' },
        { id: 'dir', col: 3, row: 0, k: 'alert', t: 'Hospitalizar igual si hay', s: 'Crescendo, FA, estenosis > 50 %, lesión aguda' },
        { id: 'utac', col: 3, row: 2, k: 'good', t: 'UTAC u observación', s: 'Estudio y prevención inmediata' },
      ],
      edges: [
        { from: 'sco', to: 'baj' }, { from: 'sco', to: 'mod' }, { from: 'sco', to: 'alt' },
        { from: 'mod', to: 'utac' }, { from: 'alt', to: 'utac' }, { from: 'baj', to: 'dir', label: 'salvo' },
      ],
      steps: [
        { show: ['sco'], note: 'Tres categorías',
          say: 'Con el puntaje, el paciente cae en una de tres categorías, y cada una tiene una conducta.' },
        { show: ['alt'], note: 'Alto riesgo',
          say: 'Seis a siete puntos es alto riesgo: ocho coma uno por ciento de infarto a las cuarenta y ocho horas, y once coma siete a los siete días. Hospitalización inmediata obligatoria.' },
        { show: ['mod'], note: 'Moderado',
          say: 'Cuatro a cinco puntos es riesgo moderado: cuatro coma uno por ciento a las cuarenta y ocho horas. También se hospitaliza, en observación o en una unidad de ataque cerebral.' },
        { show: ['utac'], note: 'ABCD² ≥ 4 = hospitalizar',
          say: 'Así que la regla práctica es una sola: con cuatro puntos o más, se hospitaliza.' },
        { show: ['baj'], note: 'Bajo riesgo',
          say: 'Con cero a tres puntos, el riesgo a cuarenta y ocho horas es de uno por ciento. Ese paciente puede estudiarse en forma ambulatoria, pero expedita, en menos de cuarenta y ocho horas.' },
        { show: ['dir'], note: 'Criterios que saltan el puntaje',
          say: 'Pero ojo, porque hay criterios que hospitalizan aunque el puntaje sea bajo. El AIT en crescendo, con dos o más episodios en siete días. La sospecha de cardioembolia, como una fibrilación auricular conocida. Una estenosis carotídea sintomática sobre cincuenta por ciento. O una lesión aguda en la imagen. Cualquiera de ellos pesa más que el número.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Estudio etiológico',
      title: 'Buscar la causa en 24 a 48 horas',
      cards: [
        { title: 'Neuroimagen', tag: 'Cerebro', kind: 'key', items: [
          { t: 'Resonancia con difusión', d: 'Si no hay: TAC sin contraste',
            say: 'Todo AIT se estudia en las primeras veinticuatro a cuarenta y ocho horas, y el estudio tiene tres partes. La primera es la neuroimagen: de preferencia una resonancia con difusión, para buscar un infarto silente. Si no está disponible, un TAC sin contraste.' },
        ] },
        { title: 'Vasos', tag: 'Carótida y vertebrales', kind: 'criteria', items: [
          { t: 'Eco-Doppler carotídeo y vertebral', d: 'O AngioTAC',
            say: 'La segunda son los vasos del cuello: eco-Doppler carotídeo y vertebral, o una AngioTAC. Busca la placa que manda émbolos. Si además escuchas un soplo carotídeo, o hubo una amaurosis fugaz, este es el examen que más te importa.' },
        ] },
        { title: 'Corazón', tag: 'Buscar la FA', kind: 'alert', items: [
          { t: 'ECG y monitoreo continuo', d: 'Holter o telemetría para FA paroxística',
            say: 'Y la tercera es el corazón: electrocardiograma de doce derivaciones y monitoreo continuo, con Holter o telemetría, para pillar una fibrilación auricular paroxística que en el electrocardiograma aislado no aparece.' },
          { t: 'Ecocardiograma', d: 'Transtorácico o transesofágico',
            say: 'Más un ecocardiograma, transtorácico o transesofágico. Es importante porque la causa va a decidir el tratamiento, y eso es lo que viene.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Prevención secundaria',
      title: 'El tratamiento depende de la causa',
      nodes: [
        { id: 'ait', col: 0, row: 1, k: 'start', t: 'AIT estudiado', s: '¿Cuál es la causa?' },
        { id: 'nce', col: 1, row: 0, k: 'good', t: 'No cardioembólico, ABCD² ≥ 4', s: 'AAS + clopidogrel' },
        { id: 'd21', col: 2, row: 0, k: 'alert', t: 'Exactamente 21 días', s: 'Luego monoterapia indefinida' },
        { id: 'fa', col: 1, row: 1, k: 'good', t: 'Fibrilación auricular', s: 'Anticoagulante oral directo' },
        { id: 'car', col: 1, row: 2, k: 'refer', t: 'Estenosis carotídea 70–99 %', s: '50–69 % en hombres' },
        { id: 'end', col: 2, row: 2, k: 'refer', t: 'Endarterectomía < 2 semanas', s: 'Idealmente en 7 días' },
        { id: 'est', col: 3, row: 1, k: 'good', t: 'Atorvastatina 80 mg', s: 'A todos, a permanencia' },
      ],
      edges: [
        { from: 'ait', to: 'nce' }, { from: 'nce', to: 'd21' }, { from: 'ait', to: 'fa' },
        { from: 'ait', to: 'car' }, { from: 'car', to: 'end' }, { from: 'fa', to: 'est' },
      ],
      steps: [
        { show: ['ait'], note: 'La causa decide',
          say: 'Pasemos al tratamiento. La prevención se decide según la causa que encontró el estudio.' },
        { show: ['nce'], note: 'Doble antiagregación precoz',
          say: 'Si el AIT no es cardioembólico y el ABCD dos es de cuatro o más, va doble antiagregación iniciada en menos de veinticuatro horas: aspirina cien miligramos al día, más clopidogrel con carga de trescientos y luego setenta y cinco al día. Así lo demostraron los ensayos CHANCE y POINT.' },
        { show: ['d21'], note: 'Ni más ni menos',
          say: 'Y la duración se pregunta: exactamente veintiún días. Prolongarla más allá de tres semanas no agrega beneficio y duplica el riesgo de hemorragia digestiva e intracraneal. Al día veintidós se sigue con un solo antiagregante, en forma indefinida.' },
        { show: ['fa'], note: 'FA: anticoagular, no antiagregar',
          say: 'Si la causa es una fibrilación auricular, no se antiagrega: se anticoagula, con un anticoagulante oral directo, como apixabán, rivaroxabán, dabigatrán o edoxabán. Y se parte precoz, desde el primer día, porque en el AIT no hay tejido necrótico que pueda transformarse en hemorragia.' },
        { show: ['car', 'end'], note: 'Estenosis carotídea sintomática',
          say: 'Si el Doppler muestra una estenosis carotídea del mismo lado, severa, de setenta a noventa y nueve por ciento, o moderada, de cincuenta a sesenta y nueve en hombres, va endarterectomía carotídea dentro de las primeras dos semanas, idealmente en los primeros siete días.' },
        { show: ['est'], note: 'Estatina de alta intensidad',
          say: 'Y a todos, atorvastatina ochenta miligramos al día, a permanencia.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol, desde el paciente que llega sin déficit hasta la prevención que le corresponde.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['AIT resuelto, examen normal', 'Calcular ABCD² y estudiar en < 48 h', 'Alta con control ambulatorio'],
          say: 'Repasemos las trampas. Paciente con AIT que llega sin déficit: se calcula el ABCD dos y se estudia en menos de cuarenta y ocho horas. El error es darlo de alta con un control lejano.' },
        { cells: ['ABCD² ≥ 4', 'Hospitalizar en UTAC u observación', 'Estudio ambulatorio'],
          say: 'Con cuatro puntos o más, se hospitaliza.' },
        { cells: ['ABCD² bajo con AIT en crescendo o FA', 'Hospitalizar igual', 'Confiar solo en el puntaje'],
          say: 'Y con un puntaje bajo, pero con AIT en crescendo, fibrilación auricular o estenosis carotídea, también se hospitaliza. El número no manda sobre esos criterios.' },
        { cells: ['Síntomas resueltos, difusión positiva', 'Infarto cerebral', 'Llamarlo AIT'],
          say: 'Síntomas resueltos con una lesión en la difusión: eso es un infarto, no un AIT.' },
        { cells: ['AIT no cardioembólico de alto riesgo', 'AAS + clopidogrel por 21 días', 'Doble antiagregación indefinida'],
          say: 'AIT no cardioembólico de alto riesgo: aspirina más clopidogrel por veintiún días, no para siempre.' },
        { cells: ['AIT con fibrilación auricular', 'Anticoagulante oral desde el día 1', 'Antiagregar o esperar semanas'],
          say: 'AIT con fibrilación auricular: anticoagulación oral precoz, sin semanas de espera. Antiagregar es la respuesta incorrecta.' },
        { cells: ['Estenosis carotídea ipsilateral ≥ 70 %', 'Endarterectomía en < 2 semanas', 'Diferirla por meses'],
          say: 'Y la estenosis carotídea severa del mismo lado: endarterectomía en las primeras dos semanas.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 64 años, hipertenso y fumador, no diabético. Hace 2 horas presentó debilidad súbita de mano y pierna derechas con dificultad para articular palabras, que se resolvió por completo en unos 45 minutos. PA 155/95 mmHg, FC 80 lpm regular. Examen neurológico normal. TAC de encéfalo sin contraste sin sangrado ni lesiones isquémicas recientes.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Alta con AAS 100 mg y control con neurólogo en 1 mes' },
        { letter: 'B', text: 'Trombolisis intravenosa con alteplase' },
        { letter: 'C', text: 'Hospitalizar, estudio etiológico y AAS + clopidogrel por 21 días' },
        { letter: 'D', text: 'Hospitalizar e iniciar anticoagulación oral' },
        { letter: 'E', text: 'Hospitalizar y AAS + clopidogrel de forma indefinida' },
      ],
      correct: 'C',
      explanation: 'AIT carotídeo izquierdo. ABCD² = 5 (edad ≥ 60: 1; PA ≥ 140/90: 1; debilidad unilateral: 2; duración 10–59 min: 1): riesgo moderado, se hospitaliza. Se completa el estudio (Doppler carotídeo, monitoreo cardíaco, resonancia) y se inicia AAS + clopidogrel por exactamente 21 días, más atorvastatina 80 mg.',
      say: {
        stem: 'Vamos con un caso. Hombre de sesenta y cuatro años, hipertenso y fumador, no diabético. Hace dos horas tuvo debilidad súbita de la mano y la pierna derechas, con dificultad para articular palabras, que se resolvió por completo en unos cuarenta y cinco minutos. Su presión es de ciento cincuenta y cinco sobre noventa y cinco, el pulso regular, el examen neurológico normal, y el TAC no muestra sangre ni lesiones.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: alta con aspirina y control en un mes, trombolisis, hospitalizar con estudio y doble antiagregación por veintiún días, hospitalizar y anticoagular, u hospitalizar con doble antiagregación indefinida. Piénsalo.',
        answer: 'Es la C. Calcula el ABCD dos: edad, un punto; presión, uno; debilidad unilateral, dos; cuarenta y cinco minutos, uno. Total cinco: se hospitaliza. La A es la trampa clásica, porque el paciente se ve bien. La trombolisis no corresponde, porque ya no hay déficit que tratar. La anticoagulación es para la fibrilación auricular, y este pulso es regular. Y la doble antiagregación va por veintiún días, no para siempre.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 151',
      stem: 'Una paciente de 67 años presenta un cuadro de hemiparesia faciobraquiocrural derecha autolimitada hace 7 días, manejada adecuadamente en el hospital. Al examen físico se ausculta un soplo cervical izquierdo, sin otras alteraciones. Su examen neurológico es normal.',
      question: '¿Cuál de los siguientes es el examen más adecuado para realizar el estudio etiológico?',
      options: [
        { letter: 'A', text: 'Ecocardiograma Doppler color' },
        { letter: 'B', text: 'Angiografía de arterias cerebrales o de cabeza y cuello' },
        { letter: 'C', text: 'Resonancia magnética de cerebro' },
        { letter: 'D', text: 'Ecodoppler de carótidas' },
        { letter: 'E', text: 'TAC de cerebro' },
      ],
      correct: 'D',
      explanation: 'AIT carotídeo izquierdo con soplo cervical del mismo lado: la sospecha es una estenosis carotídea ipsilateral. El eco-Doppler carotídeo es el examen de estudio vascular; si confirma una estenosis significativa, se indica endarterectomía precoz.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil veinticuatro. Paciente de sesenta y siete años con una hemiparesia faciobraquiocrural derecha autolimitada hace siete días, ya manejada en el hospital. Hoy tiene un examen neurológico normal, pero se ausculta un soplo cervical izquierdo.',
        question: '¿Cuál es el examen más adecuado para el estudio etiológico?',
        options: 'Las opciones: ecocardiograma, angiografía, resonancia de cerebro, eco-Doppler de carótidas, o TAC de cerebro. Piénsalo.',
        answer: 'Es la D, el eco-Doppler de carótidas. Fíjate en el lado: la hemiparesia es derecha, así que la isquemia fue en el hemisferio izquierdo, y el soplo está justamente en la carótida izquierda. Esa placa es la sospechosa. El ecocardiograma tienta, porque también es parte del estudio, pero el soplo te dirige a la carótida. Y si la estenosis es significativa, la endarterectomía debe hacerse dentro de las dos semanas, y ya van siete días.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'No es benigno', kind: 'key', items: [
          { t: 'AIT = sin infarto en la imagen', d: 'Difusión positiva: es un infarto',
            say: 'Cerremos con las reglas de oro. El AIT se define por el tejido: sin infarto en la imagen. Si la difusión muestra lesión, es un infarto, aunque los síntomas se hayan ido.' },
          { t: 'Mitad del riesgo en 48 h', d: 'Estudio completo en 24–48 h',
            say: 'La mitad del riesgo de infarto está en las primeras cuarenta y ocho horas, así que el estudio se hace ya: imagen, vasos del cuello y corazón.' },
        ] },
        { title: 'Estratificación', tag: 'ABCD²', kind: 'alert', items: [
          { t: 'ABCD² ≥ 4: hospitalizar', d: 'Crescendo, FA o estenosis: también',
            say: 'Con ABCD dos de cuatro o más, se hospitaliza, y también con AIT en crescendo, fibrilación auricular o estenosis carotídea, aunque el puntaje sea bajo.' },
        ] },
        { title: 'Prevención', tag: 'Según la causa', kind: 'pharma', items: [
          { t: 'AAS + clopidogrel 21 días', d: 'Si no es cardioembólico',
            say: 'Si no es cardioembólico, aspirina más clopidogrel por exactamente veintiún días.' },
          { t: 'FA: anticoagular · carótida: operar', d: 'Endarterectomía < 2 semanas',
            say: 'Si hay fibrilación auricular, anticoagulante oral desde el primer día; y si hay estenosis carotídea severa, endarterectomía en menos de dos semanas. Si te llevas una sola idea de hoy: un déficit que se fue no es un paciente sano, es un infarto que avisó. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Ataque isquémico transitorio',
    root: N('start', 'Déficit focal que se resolvió', 'Examen neurológico normal',
      'Paciente que tuvo un déficit focal súbito y llega con el examen normal. No es un paciente sano: es un infarto que avisó.',
      ['', N('q', '¿Hay infarto en la imagen?', 'Resonancia con difusión o TAC',
        'Primero la imagen. ¿Hay una lesión aguda en la difusión?',
        ['SÍ', N('alert', 'Infarto cerebral', 'Aunque los síntomas se fueron',
          'Si hay lesión, no es un AIT: es un infarto con resolución clínica transitoria, con más riesgo de repetir. Se hospitaliza.')],
        ['NO', N('q', '¿ABCD² ≥ 4 o criterio directo?', 'Crescendo, FA, estenosis > 50 %',
          'Si no hay lesión, es un AIT. Calcula el ABCD dos y busca los criterios que hospitalizan por sí solos: crescendo, fibrilación auricular o estenosis carotídea.',
          ['NO', N('ok', 'Estudio ambulatorio expedito', 'En menos de 48 horas',
            'Con cero a tres puntos y sin criterios directos, el estudio puede ser ambulatorio, pero en menos de cuarenta y ocho horas.')],
          ['SÍ', N('do', 'Hospitalizar y estudiar la causa', 'Doppler, monitoreo cardíaco, eco',
            'Con cuatro o más, o con un criterio directo, se hospitaliza y se estudia la causa: vasos del cuello y corazón.',
            ['No cardioembólico', N('ok', 'AAS + clopidogrel 21 días', 'Más atorvastatina 80 mg',
              'Si no es cardioembólico, aspirina más clopidogrel por veintiún días, y atorvastatina ochenta.')],
            ['FA', N('do', 'Anticoagulante oral directo', 'Desde el día 1',
              'Si hay fibrilación auricular, anticoagulante oral directo desde el primer día.')],
            ['Estenosis carotídea', N('refer', 'Endarterectomía < 2 semanas', '70–99 %, o 50–69 % en hombres',
              'Si hay una estenosis carotídea significativa del mismo lado, se deriva a endarterectomía dentro de las dos primeras semanas.')])])])]),
  },
};
