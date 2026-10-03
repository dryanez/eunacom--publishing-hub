// Clase 10.15 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neurologia.cjs (neuro-15).
// Preguntas reales: banco real (classes/scripts/class_questions.cjs neuro-15 y --search).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'neuro-15',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Tres perfiles que se reconocen por el curso, el síntoma que debuta y el examen neurológico',
      say: 'Bienvenidos. En la clase anterior vimos el Alzheimer, la demencia más frecuente. Hoy vemos las otras tres que el examen te pide reconocer: la demencia vascular, la demencia por cuerpos de Lewy y la demencia frontotemporal. La buena noticia es que cada una tiene un perfil propio, y se separan con tres preguntas: cómo avanza, con qué debuta y qué muestra el examen neurológico. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Demencia vascular',
      title: 'Cada infarto, un escalón hacia abajo',
      nodes: [
        { id: 'mul', col: 0, row: 0, k: 'cause', t: 'Multi-infarto', s: 'Infartos corticales recurrentes' },
        { id: 'est', col: 0, row: 2, k: 'cause', t: 'Infarto estratégico único', s: 'Tálamo, cápsula interna, angular' },
        { id: 'peq', col: 0, row: 4, k: 'cause', t: 'Pequeño vaso subcortical', s: 'Binswanger: HTA y diabetes' },
        { id: 'dan', col: 1, row: 2, k: 'mech', t: 'Daño cerebral acumulativo', s: 'Isquémico o hemorrágico' },
        { id: 'esc', col: 2, row: 1, k: 'effect', t: 'Curso en escalones', s: 'Caída aguda y luego meseta' },
        { id: 'eje', col: 2, row: 3, k: 'effect', t: 'Disfunción ejecutiva', s: 'Más que falla de memoria' },
        { id: 'foc', col: 3, row: 2, k: 'alert', t: 'Signos focales', s: 'Paresia, Babinski, marcha a pasos cortos' },
      ],
      edges: [
        { from: 'mul', to: 'dan' }, { from: 'est', to: 'dan' }, { from: 'peq', to: 'dan' },
        { from: 'dan', to: 'esc' }, { from: 'dan', to: 'eje' }, { from: 'dan', to: 'foc' },
      ],
      steps: [
        { show: ['dan'], note: 'Segunda causa de demencia: 15 a 20 %',
          say: 'Empecemos por la demencia vascular, la segunda causa de demencia en el adulto, con quince a veinte por ciento de los casos. El mecanismo es simple: el cerebro acumula daño por enfermedad cerebrovascular, isquémica o hemorrágica. No hay una proteína que se deposita, hay tejido que se va perdiendo infarto a infarto.' },
        { show: ['mul', 'est'], note: 'Muchos infartos, o uno en el lugar preciso',
          say: 'Ese daño llega por tres caminos. Infartos corticales que se repiten, la demencia multi-infarto. O un solo infarto, pero en un punto clave: el tálamo paramediano, la rodilla de la cápsula interna o la circunvolución angular.' },
        { show: ['peq'], note: 'Leucoaraiosis por hipertensión y diabetes',
          say: 'Y el tercero, el más silencioso: la enfermedad de pequeño vaso subcortical, o enfermedad de Binswanger. Años de hipertensión y diabetes dañan las arterias pequeñas, y la resonancia muestra la sustancia blanca periventricular difusamente alterada, la leucoaraiosis.' },
        { show: ['esc'], note: 'El curso escalonado es la firma',
          say: 'Ahora, lo que se pregunta. Si cada evento vascular es un golpe, el deterioro no es una rampa, es una escalera: una caída brusca después de cada evento, y luego una meseta, incluso con algo de recuperación. Ese curso escalonado es la firma de la demencia vascular.' },
        { show: ['eje', 'foc'], note: 'Ejecutivo lento + examen neurológico alterado',
          say: 'Y como el daño toma los circuitos frontales y subcorticales, lo que más falla es la función ejecutiva: el paciente está lento, le cuesta planificar, más que olvidar. Además, el examen neurológico habla: una hemiparesia leve, reflejos asimétricos, un Babinski, o una marcha a pasos cortos. Compáralo con el Alzheimer, donde el examen es normal al inicio.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Demencia vascular',
      title: 'Cómo se confirma y cómo se trata',
      cards: [
        { title: 'Escala de Hachinski', tag: 'Orienta el origen', kind: 'criteria', items: [
          { t: '7 puntos o más', d: 'Demencia vascular',
            say: 'Para ordenar la sospecha existe la escala isquémica de Hachinski. Un puntaje de siete o más orienta fuertemente a una demencia vascular pura.' },
          { t: '4 puntos o menos', d: 'Demencia degenerativa tipo Alzheimer',
            say: 'Y un puntaje de cuatro o menos apunta a una demencia degenerativa, del tipo Alzheimer.' },
        ] },
        { title: 'Manejo', tag: 'Prevenir el próximo escalón', kind: 'pharma', items: [
          { t: 'Control agresivo del riesgo vascular', d: 'Presión, diabetes y estatina de alta potencia',
            say: 'El tratamiento sale directo del mecanismo. Si cada infarto es un escalón, lo que hay que hacer es evitar el siguiente: control agresivo de la presión, de la diabetes, y estatinas de alta potencia.' },
          { t: 'Aspirina 100 mg al día', d: 'Anticoagular si hay fibrilación auricular',
            say: 'Y antiagregación con aspirina, cien miligramos al día. Si la causa es una fibrilación auricular, lo que corresponde es anticoagular, igual que aprendiste en las clases de accidente cerebrovascular.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Cuerpos de Lewy',
      title: 'Criterios nucleares de McKeith',
      cards: [
        { title: 'Qué es', tag: 'Alfa-sinucleinopatía', kind: 'key', items: [
          { t: 'Segunda demencia degenerativa', d: '10 a 15 % de los casos',
            say: 'Pasemos a la demencia por cuerpos de Lewy, la segunda demencia neurodegenerativa después del Alzheimer, con diez a quince por ciento de los casos. Es una alfa-sinucleinopatía, igual que el Parkinson, pero los cuerpos de Lewy están repartidos en la corteza, el sistema límbico y el tronco. Por eso mezcla demencia y parkinsonismo.' },
        ] },
        { title: 'Criterios nucleares', tag: 'Dos o más: probable', kind: 'criteria', items: [
          { t: 'Fluctuaciones cognitivas', d: 'Lúcido un día, somnoliento al otro',
            say: 'El diagnóstico se apoya en los criterios nucleares de McKeith, y basta con dos para decir probable. El primero son las fluctuaciones: el paciente alterna, en horas o días, entre una lucidez casi normal y estados de somnolencia o confusión profunda.' },
          { t: 'Alucinaciones visuales tempranas', d: 'Vívidas, detalladas, no amenazantes',
            say: 'El segundo, el más característico: alucinaciones visuales desde el comienzo, en ochenta por ciento de los casos. Son muy vívidas y detalladas: personas, niños jugando, animales en la pieza. Y habitualmente no asustan al paciente.' },
          { t: 'Parkinsonismo espontáneo', d: 'Rigidez y bradicinesia, poco temblor',
            say: 'El tercero es el parkinsonismo espontáneo, es decir, sin fármacos que lo expliquen: bradicinesia, rigidez axial, facies inexpresiva y trastorno de la marcha. El temblor de reposo es menos frecuente que en el Parkinson.' },
          { t: 'Trastorno conductual del sueño REM', d: 'Actúa sus pesadillas',
            say: 'Y el cuarto, el trastorno conductual del sueño REM: se pierde la atonía normal de esa fase y el paciente actúa sus sueños, a veces con violencia.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Cuerpos de Lewy',
      title: 'La regla del año: ¿Lewy o Parkinson con demencia?',
      nodes: [
        { id: 'pk', col: 0, row: 2, k: 'start', t: 'Demencia + parkinsonismo', s: 'Misma proteína, dos nombres' },
        { id: 'q', col: 1, row: 2, k: 'q', t: '¿Qué apareció primero?', s: 'Y con cuánta distancia' },
        { id: 'dcl', col: 3, row: 1, k: 'alert', t: 'Cuerpos de Lewy', s: 'Demencia antes o dentro del 1.er año' },
        { id: 'dep', col: 3, row: 3, k: 'refer', t: 'Parkinson con demencia', s: 'Motor precede más de 1 año' },
      ],
      edges: [
        { from: 'pk', to: 'q' },
        { from: 'q', to: 'dcl', label: 'cognición primero o junto' },
        { from: 'q', to: 'dep', label: 'motor años antes' },
      ],
      steps: [
        { show: ['pk', 'q'], note: 'Lo que decide es la cronología',
          say: 'Aquí viene la diferencia que más se pregunta. Un paciente con demencia y parkinsonismo puede tener una demencia por cuerpos de Lewy o una demencia en la enfermedad de Parkinson. La proteína es la misma, así que lo que decide no es el examen: es la cronología.' },
        { show: ['dcl'], note: 'Cognición y alucinaciones antes, a la vez o antes de 1 año',
          say: 'Si el deterioro cognitivo y las alucinaciones aparecen antes del parkinsonismo, al mismo tiempo, o dentro del primer año, es una demencia por cuerpos de Lewy.' },
        { show: ['dep'], note: 'Parkinson de 5 a 10 años que luego se demencia',
          say: 'En cambio, si el parkinsonismo precede a la demencia por más de un año, y lo habitual es que sean cinco a diez años de Parkinson conocido, es una demencia en la enfermedad de Parkinson. Esa es la regla del año.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Regla de oro',
      title: 'Lewy + haloperidol: una reacción que puede matar',
      nodes: [
        { id: 'agi', col: 0, row: 1, k: 'start', t: 'Alucinaciones o agitación', s: 'En un paciente con Lewy' },
        { id: 'hal', col: 1, row: 0, k: 'trap', t: 'Haloperidol o clorpromazina', s: 'Antipsicótico típico' },
        { id: 'rea', col: 2, row: 0, k: 'alert', t: 'Hipersensibilidad grave', s: 'Rigidez extrema, mutismo, hipotensión' },
        { id: 'mor', col: 3, row: 0, k: 'risk', t: 'Mortalidad 2 a 3 veces', s: 'Hasta 50 % reacciona' },
        { id: 'don', col: 1, row: 2, k: 'good', t: 'Donepezilo', s: 'Primera elección' },
        { id: 'que', col: 2, row: 2, k: 'good', t: 'Quetiapina 12,5 mg', s: 'Casos extremos; o pimavanserina' },
      ],
      edges: [
        { from: 'agi', to: 'hal', label: 'nunca' }, { from: 'hal', to: 'rea' }, { from: 'rea', to: 'mor' },
        { from: 'agi', to: 'don', label: 'sí' }, { from: 'don', to: 'que', label: 'si no basta' },
      ],
      steps: [
        { show: ['agi', 'hal'], note: 'Antipsicóticos típicos: contraindicados',
          say: 'Ahora la regla que el examen no te perdona. Un paciente con cuerpos de Lewy tiene alucinaciones o se agita, y el reflejo es indicar haloperidol. En esta enfermedad, los antipsicóticos típicos, haloperidol y clorpromazina, están formalmente contraindicados.' },
        { show: ['rea', 'mor'], note: 'Bloquear dopamina en un cerebro que ya no tiene',
          say: '¿Por qué? Porque es un cerebro que ya tiene poca dopamina, y el bloqueo la deja en cero. Hasta la mitad de los pacientes hace una reacción de hipersensibilidad grave: rigidez extrema que no revierte, mutismo, sedación profunda e hipotensión ortostática refractaria. La mortalidad sube dos a tres veces.' },
        { show: ['don'], note: 'Los IAChE mejoran alucinaciones y fluctuaciones',
          say: 'Entonces, ¿qué se usa? Lo primero son los inhibidores de la acetilcolinesterasa, como el donepezilo. En esta demencia funcionan especialmente bien: mejoran las fluctuaciones y reducen las alucinaciones.' },
        { show: ['que'], note: 'Atípico con muy poco bloqueo D2, en dosis mínima',
          say: 'Y solo en casos extremos, un antipsicótico atípico que casi no bloquea el receptor de dopamina, como la quetiapina en dosis ultrabaja, doce coma cinco miligramos, o la pimavanserina.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Demencia frontotemporal',
      title: 'La demencia que cambia la persona, no la memoria',
      cards: [
        { title: 'Perfil', tag: 'Demencia presenil', kind: 'key', items: [
          { t: 'Debut entre 45 y 65 años', d: 'Primera causa de demencia bajo 65',
            say: 'La tercera es la demencia frontotemporal, o enfermedad de Pick. Su primera pista es la edad: es la causa más común de demencia antes de los sesenta y cinco años, y suele debutar entre los cuarenta y cinco y los sesenta y cinco.' },
          { t: 'Un tercio es familiar', d: 'Autosómica dominante; tau o TDP-43',
            say: 'Un tercio tiene agregación familiar, con herencia autosómica dominante. Lo que se degenera son los lóbulos frontales y temporales, con inclusiones de tau o de TDP cuarenta y tres.' },
        ] },
        { title: 'Variante conductual', tag: '70 % de los casos', kind: 'alert', items: [
          { t: 'Desinhibición y pérdida de empatía', d: 'Comentarios inapropiados, sin pudor',
            say: 'La forma más frecuente, siete de cada diez, es la variante conductual. Y aquí el lóbulo frontal explica todo: se pierde el freno social. Comentarios inapropiados o sexuales en público, falta de pudor, y una indiferencia llamativa ante el sufrimiento de los demás.' },
          { t: 'Apatía, compulsiones, hiperoralidad', d: 'Atracones de dulces, rituales',
            say: 'Se suma apatía profunda, conductas repetitivas o compulsivas, como coleccionar cosas, e hiperoralidad: atracones, sobre todo de dulces, o llevarse objetos a la boca.' },
          { t: 'Memoria y orientación conservadas', d: 'El gran contraste con el Alzheimer',
            say: 'Y fíjate en el contraste que se pregunta: la memoria episódica y la orientación están llamativamente conservadas. El paciente sabe la fecha y no se pierde, pero su conducta se derrumbó.' },
        ] },
        { title: 'Lenguaje e imagen', tag: 'Afasia primaria progresiva', kind: 'criteria', items: [
          { t: 'Semántica y no fluente', d: 'Pierde el significado o habla con esfuerzo',
            say: 'Las otras variantes afectan el lenguaje. En la semántica, el paciente habla fluido pero pierde el significado de las palabras: no sabe qué es un martillo. En la no fluente, habla con esfuerzo y con errores gramaticales.' },
          { t: 'Atrofia en filo de cuchillo', d: 'Frontal y temporal anterior, asimétrica',
            say: 'Y la resonancia muestra una atrofia focal y asimétrica de los lóbulos frontales y temporales anteriores, la llamada atrofia en filo de cuchillo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'El mismo fármaco no sirve para todas',
      cards: [
        { title: 'Cuerpos de Lewy', tag: 'Los IAChE brillan', kind: 'pharma', items: [
          { t: 'Donepezilo', d: 'Mejora fluctuaciones y alucinaciones',
            say: 'Cerremos el tratamiento con un contraste. En la demencia por cuerpos de Lewy, los inhibidores de la acetilcolinesterasa son especialmente eficaces.' },
        ] },
        { title: 'Frontotemporal', tag: 'Los IAChE empeoran', kind: 'alert', items: [
          { t: 'No usar IAChE', d: 'Aumentan agitación y desinhibición',
            say: 'En la frontotemporal pasa lo contrario: los inhibidores de la acetilcolinesterasa están contraindicados, porque pueden empeorar la agitación y la desinhibición. Ojo, porque la alternativa donepezilo suena lógica en cualquier demencia.' },
          { t: 'Sertralina o trazodona', d: 'Para modular la conducta',
            say: 'Para modular la conducta se usan fármacos serotoninérgicos, como la sertralina o la trazodona.' },
        ] },
        { title: 'Vascular', tag: 'Prevención secundaria', kind: 'normal', items: [
          { t: 'Factores de riesgo + aspirina', d: 'Evitar el próximo infarto',
            say: 'Y en la vascular, lo que ya vimos: controlar los factores de riesgo y antiagregar, para evitar el próximo escalón.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol, tal como vas a razonar frente a una demencia en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Tres perfiles lado a lado',
      head: ['Rasgo', 'Vascular', 'Cuerpos de Lewy', 'Frontotemporal'],
      rows: [
        { cells: ['Edad', 'Cualquiera, con factores de riesgo', 'Sobre 60 a 70 años', '45 a 65 años'],
          say: 'Repasemos lado a lado, y ten en mente al Alzheimer de la clase anterior, que empieza sobre los sesenta y cinco. La vascular aparece a cualquier edad si hay factores de riesgo; la de Lewy, sobre los sesenta a setenta; y la frontotemporal es la presenil, entre cuarenta y cinco y sesenta y cinco.' },
        { cells: ['Curso', 'En escalones', 'Fluctuante, incluso en el día', 'Insidioso, cambia la personalidad'],
          say: 'El curso: escalones en la vascular, fluctuaciones de un día a otro o dentro del mismo día en la de Lewy, y un cambio insidioso de la personalidad en la frontotemporal. El Alzheimer, en cambio, es una pendiente continua.' },
        { cells: ['Síntoma cardinal', 'Disfunción ejecutiva, lentitud', 'Alucinaciones + fluctuación + parkinsonismo', 'Desinhibición, apatía, hiperoralidad'],
          say: 'El síntoma que manda: lentitud y disfunción ejecutiva en la vascular, la tríada de alucinaciones, fluctuación y parkinsonismo en la de Lewy, y la conducta en la frontotemporal. Si lo que falla primero es la memoria reciente, vuelve a pensar en Alzheimer.' },
        { cells: ['Examen neurológico', 'Signos focales, Babinski', 'Parkinsonismo espontáneo', 'Reflejos frontales precoces'],
          say: 'El examen: signos focales en la vascular, parkinsonismo espontáneo en la de Lewy, y reflejos frontales arcaicos precoces en la frontotemporal.' },
        { cells: ['Imagen', 'Infartos o leucoaraiosis', 'Normal o atrofia leve; hipometabolismo occipital', 'Atrofia frontotemporal en filo de cuchillo'],
          say: 'La imagen: infartos o leucoaraiosis en la vascular; una resonancia casi normal en la de Lewy, con hipometabolismo occipital en el SPECT o el PET; y la atrofia en filo de cuchillo en la frontotemporal.' },
        { cells: ['Trampa terapéutica', 'Olvidar la prevención vascular', 'Dar haloperidol', 'Dar donepezilo'],
          say: 'Y las trampas terapéuticas: en la vascular, olvidar la prevención; en la de Lewy, dar haloperidol; y en la frontotemporal, dar donepezilo.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 71 años con 10 meses de deterioro cognitivo fluctuante: hay días en que conversa normal y otros en que está somnoliento y confuso. Desde hace 6 meses ve niños y gatos en el living, sin angustiarse. Al examen: rigidez, bradicinesia y facies inexpresiva, sin temblor. Su familia pide tratamiento porque las alucinaciones son cada vez más frecuentes.',
      question: '¿Cuál es el fármaco más adecuado?',
      options: [
        { letter: 'A', text: 'Haloperidol 5 mg intramuscular' },
        { letter: 'B', text: 'Clorpromazina 25 mg en la noche' },
        { letter: 'C', text: 'Donepezilo' },
        { letter: 'D', text: 'Sertralina' },
        { letter: 'E', text: 'Esperar a completar un año de parkinsonismo antes de tratar' },
      ],
      correct: 'C',
      explanation: 'Fluctuaciones, alucinaciones visuales tempranas y parkinsonismo espontáneo: demencia por cuerpos de Lewy. Los inhibidores de la acetilcolinesterasa (donepezilo) mejoran fluctuaciones y alucinaciones. Los antipsicóticos típicos están contraindicados por hipersensibilidad grave. La sertralina se usa para la conducta en la demencia frontotemporal.',
      say: {
        stem: 'Vamos con un caso. Hombre de setenta y un años con diez meses de deterioro cognitivo fluctuante: días en que conversa normal y días en que está somnoliento y confuso. Desde hace seis meses ve niños y gatos en el living, sin angustiarse. Al examen tiene rigidez, bradicinesia y facies inexpresiva, sin temblor. La familia pide tratamiento porque las alucinaciones aumentan.',
        question: '¿Cuál es el fármaco más adecuado?',
        options: 'Las opciones: haloperidol intramuscular, clorpromazina en la noche, donepezilo, sertralina, o esperar a que se cumpla un año de parkinsonismo antes de tratar. Piénsalo.',
        answer: 'La respuesta es la C, donepezilo. El paciente reúne tres criterios nucleares: fluctuaciones, alucinaciones visuales tempranas y parkinsonismo espontáneo. Es una demencia por cuerpos de Lewy, y aquí los inhibidores de la acetilcolinesterasa mejoran justamente las alucinaciones. El distractor peligroso es el haloperidol, y también la clorpromazina: son antipsicóticos típicos, y pueden provocar una reacción grave y mortal. La sertralina es para la conducta en la frontotemporal.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 129',
      stem: 'Paciente con 1 año de alucinaciones visuales, pérdida de memoria progresiva, rigidez, hipocinesia y alteración de la marcha.',
      question: '¿Diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Enfermedad de Parkinson con demencia' },
        { letter: 'B', text: 'Enfermedad de Alzheimer' },
        { letter: 'C', text: 'Demencia frontotemporal' },
        { letter: 'D', text: 'Demencia por cuerpos de Lewy' },
        { letter: 'E', text: 'Parálisis supranuclear progresiva' },
      ],
      correct: 'D',
      explanation: 'Alucinaciones visuales, deterioro cognitivo y parkinsonismo que aparecen juntos, dentro del mismo año: demencia por cuerpos de Lewy. En la demencia de la enfermedad de Parkinson, el parkinsonismo precede a la demencia por más de un año.',
      say: {
        stem: 'Ahora preguntas reales. Esta es del EUNACOM de enero de dos mil veintitrés. Paciente con un año de alucinaciones visuales, pérdida de memoria progresiva, rigidez, hipocinesia y alteración de la marcha.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: Parkinson con demencia, Alzheimer, demencia frontotemporal, demencia por cuerpos de Lewy, o parálisis supranuclear progresiva. Piénsalo.',
        answer: 'Es la D, demencia por cuerpos de Lewy. Alucinaciones visuales, deterioro cognitivo y parkinsonismo, todo dentro del mismo año. El distractor tentador es el Parkinson con demencia, y lo descartas con la regla del año: para llamarlo así, el parkinsonismo tendría que llevar más de un año, habitualmente años, antes de que aparezca la demencia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 35',
      stem: 'Un paciente de 82 años, hace 2 años sufrió un accedente vascular encefálico, sin secuelas. Hace 2 meses presenta un cuadro de labilidad emocional, desinhibición social y dificultades para realizar algunas de sus actividades habituales.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Depresión' },
        { letter: 'B', text: 'Enfermedad de Alzheimer' },
        { letter: 'C', text: 'Demencia vascular' },
        { letter: 'D', text: 'Demencia por cuerpos de Lewy' },
        { letter: 'E', text: 'Hidrocéfalo normotensivo' },
      ],
      correct: 'C',
      explanation: 'El antecedente de ACV en un adulto mayor que luego pierde funcionalidad orienta a demencia vascular; la labilidad emocional y la desinhibición sugieren compromiso subcortical y frontal. A los 82 años, la desinhibición no hace pensar en frontotemporal, que es presenil.',
      say: {
        stem: 'La siguiente es del EUNACOM de julio de dos mil diecinueve. Paciente de ochenta y dos años que hace dos años tuvo un accidente vascular encefálico, sin secuelas. Hace dos meses presenta labilidad emocional, desinhibición social y dificultad para algunas de sus actividades habituales.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: depresión, Alzheimer, demencia vascular, demencia por cuerpos de Lewy, o hidrocéfalo normotensivo. Piénsalo.',
        answer: 'Es la C, demencia vascular. La clave es el antecedente de accidente cerebrovascular: el algoritmo dice que ACV previo más deterioro te lleva a pensar en vascular. Y la labilidad y la desinhibición calzan con daño frontal y subcortical. Ojo con la desinhibición: aquí no apunta a frontotemporal, porque el paciente tiene ochenta y dos años y un ACV previo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 85',
      stem: 'Un paciente de 55 años ha presentado varios cambios congnitivos conductuales, como tendencia a la apatía, lenguaje coprolálico o andar desnudo. No ha tenido alteraciones en la conciencia ni en la memoria.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Demencia por cuerpos de Lewy' },
        { letter: 'B', text: 'Hidrocefalia normotensiva' },
        { letter: 'C', text: 'Enfermedad de Alzheimer' },
        { letter: 'D', text: 'Demencia frontotemporal' },
        { letter: 'E', text: 'Delirium' },
      ],
      correct: 'D',
      explanation: 'Menor de 65 años, apatía y desinhibición (coprolalia, andar desnudo) con memoria conservada: variante conductual de la demencia frontotemporal. Sin compromiso de conciencia, no es delirium.',
      say: {
        stem: 'Y la última, del EUNACOM de julio de dos mil quince. Paciente de cincuenta y cinco años con cambios conductuales: apatía, lenguaje coprolálico, y andar desnudo. No ha tenido alteraciones de conciencia ni de memoria.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: cuerpos de Lewy, hidrocefalia normotensiva, Alzheimer, demencia frontotemporal, o delirium. Piénsalo.',
        answer: 'Es la D, demencia frontotemporal, un cuadro de libro. Menor de sesenta y cinco años, apatía y pérdida total del freno social, con la memoria conservada. El Alzheimer cae porque partiría con memoria, y el delirium porque no hay compromiso de conciencia.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Reconocer', tag: 'Curso y síntoma de debut', kind: 'key', items: [
          { t: 'Escalones + signos focales', d: 'Demencia vascular',
            say: 'Cerremos con las reglas de oro. Deterioro en escalones, disfunción ejecutiva y signos focales, sobre todo con un ACV previo: demencia vascular.' },
          { t: 'Alucinaciones + fluctuación + parkinsonismo', d: 'Cuerpos de Lewy; regla del año',
            say: 'Alucinaciones visuales tempranas, fluctuaciones y parkinsonismo: cuerpos de Lewy. Y si el Parkinson lleva más de un año antes de la demencia, es Parkinson con demencia.' },
          { t: 'Menor de 65, conducta alterada', d: 'Frontotemporal, memoria conservada',
            say: 'Menor de sesenta y cinco años con desinhibición, apatía e hiperoralidad, y memoria conservada: frontotemporal.' },
        ] },
        { title: 'Tratar', tag: 'Las trampas mortales', kind: 'alert', items: [
          { t: 'Lewy: nunca antipsicóticos típicos', d: 'Donepezilo; quetiapina en dosis mínima',
            say: 'En la de Lewy, nunca haloperidol: donepezilo, y en casos extremos quetiapina en dosis mínima.' },
          { t: 'Frontotemporal: no IAChE', d: 'Serotoninérgicos para la conducta',
            say: 'Y en la frontotemporal, nada de inhibidores de la acetilcolinesterasa. Si te llevas una sola idea de hoy: en un paciente con demencia y alucinaciones, piensa en Lewy antes de escribir haloperidol. En la próxima clase dejamos el cerebro y vamos al nervio periférico, con el síndrome de Guillain-Barré. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Demencia no Alzheimer: qué perfil tiene',
    root: N('start', 'Deterioro cognitivo progresivo', 'Adulto con demencia',
      'Tienes un paciente con una demencia progresiva. Antes de pensar en fármacos, identifica el perfil: la edad, cómo avanza y con qué debutó.',
      ['', N('q', '¿Con qué debutó?', 'Síntoma que domina el inicio',
        'La pregunta clave es con qué empezó. Cada demencia tiene su síntoma de entrada.',
        ['Alucinaciones + parkinsonismo', N('q', '¿El parkinsonismo lleva más de un año?', 'Regla del año',
          'Si hay alucinaciones visuales y parkinsonismo, aplica la regla del año: ¿cuánto llevaba el parkinsonismo cuando apareció la demencia?',
          ['No', N('alert', 'Cuerpos de Lewy', 'Donepezilo; nunca haloperidol',
            'Si la demencia vino antes, junto o dentro del primer año: cuerpos de Lewy. Donepezilo, y nunca antipsicóticos típicos.')],
          ['Sí', N('refer', 'Parkinson con demencia', 'Parkinson de años de evolución',
            'Si el Parkinson llevaba más de un año, habitualmente años, es una demencia en la enfermedad de Parkinson.')])],
        ['ACV + escalones', N('do', 'Demencia vascular', 'Riesgo vascular + aspirina',
          'Si hay accidente cerebrovascular previo, curso en escalones y signos focales: demencia vascular. Control agresivo de los factores de riesgo y antiagregación con aspirina.')],
        ['Conducta, menor de 65', N('alert', 'Frontotemporal', 'No IAChE; serotoninérgicos',
          'Si es menor de sesenta y cinco y debutó con desinhibición y pérdida de empatía, con memoria conservada: frontotemporal. Sin inhibidores de la acetilcolinesterasa.')],
        ['Memoria reciente', N('ok', 'Alzheimer', 'Ver clase anterior',
          'Y si debutó con pérdida insidiosa de la memoria reciente en un adulto mayor, es la enfermedad de Alzheimer, que vimos en la clase anterior.')])]),
  },
};
