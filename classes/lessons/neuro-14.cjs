// Clase 10.14 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neurologia.cjs (neuro-14).
// Preguntas reales: banco real (classes/scripts/class_questions.cjs neuro-14 y --search).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'neuro-14',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Qué separa el olvido normal, el deterioro cognitivo leve y la demencia, qué se estudia siempre y cuándo se usa cada fármaco',
      say: 'Bienvenidos. Hoy empezamos las demencias con la enfermedad de Alzheimer, la causa más frecuente de demencia en Chile y en el mundo, y con garantía GES. Es una de las preguntas más seguras del examen. Y casi todo se ordena con una idea: lo que separa el deterioro cognitivo leve de la demencia no es el puntaje de un test, es si el paciente sigue siendo autónomo. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Amiloide afuera, tau adentro, y falta acetilcolina',
      nodes: [
        { id: 'app', col: 0, row: 0, k: 'cause', t: 'APP cortada por beta y gamma secretasa', s: 'Se forma beta-amiloide 42' },
        { id: 'pla', col: 1, row: 0, k: 'mech', t: 'Placas seniles', s: 'Extracelulares · dañan la sinapsis' },
        { id: 'tau', col: 0, row: 2, k: 'cause', t: 'Tau hiperfosforilada', s: 'Se suelta de los microtúbulos' },
        { id: 'ovi', col: 1, row: 2, k: 'mech', t: 'Ovillos neurofibrilares', s: 'Intracelulares · frenan el transporte' },
        { id: 'hip', col: 2, row: 1, k: 'effect', t: 'Corteza entorrinal e hipocampo', s: 'Donde empieza el daño' },
        { id: 'amn', col: 3, row: 1, k: 'effect', t: 'Amnesia anterógrada', s: 'No consolida lo nuevo' },
        { id: 'mey', col: 2, row: 3, k: 'mech', t: 'Núcleo basal de Meynert', s: 'Cae la acetilcolina' },
        { id: 'iac', col: 3, row: 3, k: 'good', t: 'Inhibidores de acetilcolinesterasa', s: 'Base del tratamiento' },
        { id: 'cor', col: 4, row: 1, k: 'risk', t: 'Parietotemporal y frontal', s: 'Después se extiende' },
      ],
      edges: [
        { from: 'app', to: 'pla' }, { from: 'tau', to: 'ovi' },
        { from: 'pla', to: 'hip' }, { from: 'ovi', to: 'hip' }, { from: 'hip', to: 'amn' },
        { from: 'amn', to: 'cor', label: 'progresa' }, { from: 'mey', to: 'iac' },
      ],
      steps: [
        { show: ['app', 'pla'], note: 'Primera cascada: el amiloide',
          say: 'Partamos por el mecanismo. Hay dos cascadas. La primera es la del amiloide: la proteína precursora de amiloide se corta por la vía equivocada, con las enzimas beta y gamma secretasa, y se forma el péptido beta-amiloide cuarenta y dos, que es insoluble. Se agrega y forma las placas seniles, fuera de la neurona, y daña la sinapsis.' },
        { show: ['tau', 'ovi'], note: 'Segunda cascada: la tau',
          say: 'La segunda es la de la proteína tau, que normalmente estabiliza los microtúbulos del axón. En el Alzheimer se hiperfosforila, se suelta y se agrega en ovillos neurofibrilares, dentro de la neurona. Eso frena el transporte axonal y la neurona muere.' },
        { show: ['hip', 'amn'], note: 'El lugar explica el primer síntoma',
          say: 'Y aquí está la conexión con la clínica. El daño empieza siempre en la corteza entorrinal y el hipocampo, en el lóbulo temporal medial, que es donde se consolida la información nueva. Por eso el primer síntoma es la amnesia anterógrada: el paciente no logra guardar lo reciente, pero conserva la memoria antigua.' },
        { show: ['cor'], note: 'Luego lenguaje, praxias, conducta',
          say: 'Después el daño se extiende a las cortezas asociativas parietotemporales, y al final a la corteza frontal.' },
        { show: ['mey', 'iac'], note: 'El mecanismo explica el fármaco',
          say: 'Además se degeneran las neuronas colinérgicas del núcleo basal de Meynert, y cae la acetilcolina. Ese es el fundamento del tratamiento: si falta acetilcolina, se inhibe la enzima que la degrada. Guarda esta idea para la parte de fármacos.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'La frontera clave',
      title: 'Olvido normal, deterioro leve o demencia',
      nodes: [
        { id: 'que', col: 0, row: 2, k: 'start', t: 'Queja de memoria', s: 'Del paciente o la familia' },
        { id: 'tes', col: 1, row: 2, k: 'q', t: '¿Test cognitivo alterado?', s: 'MoCA, MMSE' },
        { id: 'nor', col: 2, row: 0, k: 'good', t: 'Envejecimiento normal', s: 'Recupera con pistas o tiempo' },
        { id: 'fun', col: 2, row: 3, k: 'q', t: '¿Perdió autonomía?', s: 'Dinero, remedios, compras' },
        { id: 'dcl', col: 3, row: 2, k: 'refer', t: 'Deterioro cognitivo leve', s: 'Autónomo · Pfeffer < 6' },
        { id: 'dem', col: 3, row: 4, k: 'alert', t: 'Demencia', s: 'Dependiente · Pfeffer ≥ 6' },
      ],
      edges: [
        { from: 'que', to: 'tes' }, { from: 'tes', to: 'nor', label: 'no' }, { from: 'tes', to: 'fun', label: 'sí' },
        { from: 'fun', to: 'dcl', label: 'no' }, { from: 'fun', to: 'dem', label: 'sí' },
      ],
      steps: [
        { show: ['que', 'tes'], note: 'Primero: ¿hay un déficit objetivo?',
          say: 'Ahora, la distinción que más se pregunta. Llega un adulto mayor con quejas de memoria. La primera pregunta es si hay un déficit objetivo en los test cognitivos.' },
        { show: ['nor'], note: 'Falla de recuperación, no de consolidación',
          say: 'Si no lo hay, es el envejecimiento normal: se le olvidan nombres, tiene la palabra en la punta de la lengua o no sabe dónde dejó las llaves, pero lo recuerda más tarde o con una pista. Es una falla para recuperar la información, no para guardarla, y los test son normales para su edad y escolaridad.' },
        { show: ['fun'], note: 'La pregunta que decide',
          say: 'Si el test sí está alterado, viene la pregunta que decide todo: ¿perdió la autonomía en las actividades instrumentales? Maneja su dinero, sus remedios, sus compras, el transporte.' },
        { show: ['dcl'], note: 'Test alterado, pero sigue siendo autónomo',
          say: 'Si sigue siendo autónomo, aunque le cueste más o use estrategias como anotar todo, es un deterioro cognitivo leve, con un índice de Pfeffer bajo seis.' },
        { show: ['dem'], note: 'Test alterado y necesita ayuda de otros',
          say: 'Si necesita a otra persona para sus finanzas, sus remedios o cocinar, es una demencia, con un Pfeffer de seis o más. Fíjate: la frontera no la pone el test, la pone la funcionalidad.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Deterioro cognitivo leve',
      title: 'DCL: criterios, riesgo y qué no se indica',
      cards: [
        { title: 'Criterios de Petersen', tag: 'Los tres', kind: 'criteria', items: [
          { t: 'Queja cognitiva', d: 'Del paciente o de un familiar',
            say: 'Los criterios de deterioro cognitivo leve son tres. Primero, una queja cognitiva, del paciente o de un familiar.' },
          { t: 'Déficit objetivo', d: 'Típicamente memoria · MoCA < 26',
            say: 'Segundo, un déficit objetivo en uno o más dominios, típicamente la memoria, con un MoCA bajo veintiséis.' },
          { t: 'Autonomía preservada', d: 'Actividades instrumentales intactas',
            say: 'Y tercero, lo más importante: la autonomía está preservada.' },
        ] },
        { title: 'Pronóstico y conducta', tag: 'Seguimiento', kind: 'alert', items: [
          { t: 'Progresa 10–15 % al año', d: 'Versus 1–2 % en la población sana',
            say: '¿Por qué importa? Porque entre un diez y un quince por ciento al año progresa a demencia, frente a un uno a dos por ciento en la población sana.' },
          { t: 'Estimulación y control vascular', d: 'Ejercicio · control semestral',
            say: 'La conducta es estimulación cognitiva, ejercicio aeróbico, control de los factores de riesgo vascular y un control cada seis meses.' },
          { t: 'No usar inhibidores de acetilcolinesterasa', d: 'No están indicados en DCL',
            say: 'Y ojo con la trampa: en el deterioro cognitivo leve no están indicados los inhibidores de la acetilcolinesterasa.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Estudio · Paso 1',
      title: 'Evaluación cognitiva y funcional',
      cards: [
        { title: 'Test cognitivos', tag: 'Screening', kind: 'key', items: [
          { t: 'MMSE: corte < 24', d: 'Ajustado por escolaridad; poco sensible para DCL',
            say: 'La guía GES pide tres cosas en el estudio. La primera es la evaluación cognitiva y funcional. El Minimental de Folstein va de cero a treinta, y el corte en Chile es bajo veinticuatro, ajustado por escolaridad. Su debilidad: detecta mal el deterioro leve en personas con alta escolaridad.' },
          { t: 'MoCA: corte < 26', d: 'Más sensible para DCL y función ejecutiva',
            say: 'El MoCA, o evaluación cognitiva de Montreal, también va a treinta, con corte bajo veintiséis. Es más sensible para el deterioro leve y para la función ejecutiva.' },
          { t: 'Test del reloj', d: 'Se altera precozmente en el Alzheimer',
            say: 'Y el test del reloj, rápido y muy sensible, evalúa función ejecutiva y habilidad visuoespacial. En el Alzheimer se altera precozmente: el paciente amontona los números en una mitad o pone mal las manecillas.' },
        ] },
        { title: 'Escalas funcionales', tag: 'Deciden el diagnóstico', kind: 'criteria', items: [
          { t: 'Pfeffer', d: 'Actividades instrumentales · ≥ 6: dependencia',
            say: 'Para la funcionalidad, el índice de Pfeffer mide las actividades instrumentales, y seis o más puntos define dependencia.' },
          { t: 'Barthel', d: 'Actividades básicas: aseo, vestirse, continencia',
            say: 'Y la escala de Barthel mide las actividades básicas, como el aseo, vestirse y la continencia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Estudio · Pasos 2 y 3',
      title: 'Siempre descartar lo reversible',
      cards: [
        { title: 'Laboratorio', tag: 'Regla de oro', kind: 'alert', items: [
          { t: 'TSH', d: 'Hipotiroidismo: bradipsiquia',
            say: 'Segundo paso, y es una regla de oro: todo paciente con sospecha de demencia se estudia con exámenes para descartar causas tratables. Primero, la TSH, porque el hipotiroidismo da bradipsiquia y una pseudodemencia que revierte con levotiroxina.' },
          { t: 'Vitamina B12', d: 'Demencia, neuropatía y mielopatía',
            say: 'Segundo, la vitamina B doce, porque su déficit da una demencia reversible, con neuropatía periférica y mielopatía.' },
          { t: 'VDRL o RPR', d: 'Neurosífilis: paresia general',
            say: 'Tercero, el VDRL o RPR, por la neurosífilis. Si es reactivo, se confirma en el líquido cefalorraquídeo y se trata con penicilina endovenosa.' },
          { t: 'Hemograma, electrolitos, renal, hepático', d: 'Perfil básico',
            say: 'Y el resto del perfil básico: hemograma, electrolitos, función renal y hepática.' },
        ] },
        { title: 'Neuroimagen', tag: 'TAC o RM sin contraste', kind: 'key', items: [
          { t: 'Hematoma subdural crónico', d: 'Anciano con trauma menor',
            say: 'El tercer paso es la neuroimagen, un TAC o una resonancia sin contraste, obligatoria en el estudio inicial. Busca lesiones estructurales, y la primera es el hematoma subdural crónico, frecuente en ancianos después de un trauma menor.' },
          { t: 'Tumores e infartos silentes', d: 'Por ejemplo, meningioma frontal',
            say: 'También busca tumores, como un meningioma frontal, e infartos silentes.' },
          { t: 'Hidrocefalia normotensiva', d: 'Marcha magnética + incontinencia + demencia',
            say: 'Y la hidrocefalia normotensiva, o síndrome de Hakim-Adams, con su tríada: marcha magnética, a pasos cortos pegados al piso, incontinencia urinaria y deterioro cognitivo. Es reversible con una derivación ventrículo-peritoneal. Esa tríada se pregunta.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento · Leve a moderada',
      title: 'Inhibidores de la acetilcolinesterasa',
      cards: [
        { title: 'Fármacos', tag: 'GES · MMSE 10–24', kind: 'pharma', items: [
          { t: 'Donepezilo 5 → 10 mg/día', d: 'De noche; subir a las 4–6 semanas',
            say: 'Vamos al tratamiento, cubierto por el GES. En el Alzheimer leve a moderado, con un Minimental entre diez y veinticuatro, la primera línea son los inhibidores de la acetilcolinesterasa. El más usado es el donepezilo: cinco miligramos en la noche, y a las cuatro a seis semanas se sube a diez.' },
          { t: 'Rivastigmina en parche', d: '4,6 → 9,5 mg/24 h · menos efectos digestivos',
            say: 'La rivastigmina viene en parches de cuatro coma seis y nueve coma cinco miligramos al día. La vía transdérmica reduce mucho los efectos digestivos y mejora la adherencia. Solo hay que rotar el sitio, por la irritación de la piel.' },
          { t: 'Galantamina 8–24 mg/día', d: 'Liberación prolongada',
            say: 'Y la galantamina, de ocho a veinticuatro miligramos al día, en liberación prolongada.' },
        ] },
        { title: 'Efectos adversos', tag: 'Colinérgicos', kind: 'alert', items: [
          { t: 'Náuseas, diarrea, baja de peso', d: 'Calambres, anorexia',
            say: 'Sus efectos adversos son los que esperas de más acetilcolina: náuseas, vómitos, diarrea, anorexia, baja de peso y calambres.' },
          { t: 'Bradicardia y síncope', d: 'ECG basal antes de iniciar',
            say: 'Y el más importante: bradicardia sinusal y síncope por bloqueo auriculoventricular. Por eso, antes de iniciar, es obligatorio un electrocardiograma basal.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento · Moderada a severa',
      title: 'Memantina: cuando el MMSE baja de 15',
      cards: [
        { title: 'Memantina', tag: 'Antagonista NMDA', kind: 'pharma', items: [
          { t: 'Bloquea el receptor NMDA', d: 'Protege de la excitotoxicidad',
            say: 'La memantina funciona distinto. Es un antagonista no competitivo del receptor NMDA del glutamato, y protege a la neurona de la excitotoxicidad.' },
          { t: 'Alzheimer moderado a severo', d: 'MMSE < 15 · sola o con IAChE',
            say: 'Se indica en el Alzheimer moderado a severo, con un Minimental bajo quince, sola o combinada con un inhibidor de la acetilcolinesterasa.' },
          { t: '5 mg/día, subir 5 mg por semana', d: 'Hasta 20 mg/día',
            say: 'Se parte con cinco miligramos al día y se sube cinco por semana, hasta veinte miligramos al día. Se tolera muy bien: a lo más mareo, cefalea o constipación, y se ajusta en la insuficiencia renal.' },
        ] },
        { title: 'Resumen por etapa', tag: 'Lo que se pregunta', kind: 'key', items: [
          { t: 'DCL: sin fármacos', d: 'Estimulación y control',
            say: 'Resumamos por etapa. Deterioro cognitivo leve: sin fármacos específicos.' },
          { t: 'Leve a moderada: IAChE', d: 'Moderada a severa: agregar memantina',
            say: 'Alzheimer leve a moderado: inhibidor de la acetilcolinesterasa. Moderado a severo: se agrega o se usa memantina.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Síntomas conductuales',
      title: 'Agitación y delirios: primero lo no farmacológico',
      cards: [
        { title: 'Primera línea', tag: 'Siempre', kind: 'key', items: [
          { t: 'Buscar dolor oculto', d: 'Retención urinaria, fecaloma, ITU',
            say: 'Los síntomas conductuales y psicológicos de la demencia, como la agitación, la agresividad, los delirios de robo y el vagabundeo nocturno, desgastan mucho a la familia. El primer paso es siempre no farmacológico, y empieza por buscar una causa oculta: dolor, retención urinaria, un fecaloma o una infección urinaria.' },
          { t: 'Rutinas y luz de día', d: 'No confrontar las falsas creencias',
            say: 'Luego, rutinas estables, buena iluminación de día, y no confrontar las falsas creencias del paciente.' },
        ] },
        { title: 'Si hay riesgo', tag: 'Segunda línea', kind: 'pharma', items: [
          { t: 'Quetiapina 12,5–25 mg/noche', d: 'O risperidona 0,25–0,5 mg/día',
            say: 'Si hay riesgo para él o para otros y fallan las medidas ambientales, se usa un antipsicótico atípico, en la dosis mínima y por el menor tiempo: quetiapina, doce coma cinco a veinticinco miligramos en la noche, o risperidona, cero coma veinticinco a cero coma cinco miligramos al día.' },
          { t: 'Advertencia: ACV y mortalidad', d: 'Riesgo aumentado en ancianos con demencia',
            say: 'Todos los antipsicóticos llevan una advertencia: aumentan el riesgo de ataque cerebrovascular y la mortalidad en ancianos con demencia.' },
        ] },
        { title: 'Lo que no va', tag: 'Contraindicado', kind: 'alert', items: [
          { t: 'Benzodiacepinas', d: 'Empeoran la cognición y causan caídas',
            say: 'Y lo que está contraindicado son las benzodiacepinas: empeoran la cognición, dan agitación paradójica y provocan caídas con fractura de cadera.' },
          { t: 'Cuidar al cuidador', d: 'Escala de Zarit · GES',
            say: 'Por último, el GES también cubre al cuidador. La sobrecarga se pesquisa con la escala de Zarit, y se ofrecen talleres, redes de respiro y apoyo psicológico.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un solo árbol, desde la queja de memoria hasta el fármaco.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Olvida nombres, recuerda con pistas, test normal', 'Envejecimiento normal: tranquilizar', 'Rotularlo como demencia'],
          say: 'Repasemos las trampas. Olvida nombres pero los recuerda con pistas, y los test son normales: es envejecimiento normal.' },
        { cells: ['Test alterado, pero autónomo', 'Deterioro cognitivo leve: control semestral', 'Iniciar donepezilo'],
          say: 'Test alterado, pero sigue siendo autónomo: deterioro cognitivo leve. Iniciar donepezilo es el error.' },
        { cells: ['Olvidos + dependencia para dinero y remedios', 'Demencia: estudiar causas reversibles', 'Tratar sin exámenes'],
          say: 'Olvidos con dependencia para el dinero y los remedios: demencia. Y antes de tratar, siempre TSH, B doce, VDRL y neuroimagen.' },
        { cells: ['Marcha magnética + incontinencia + deterioro', 'Hidrocefalia normotensiva', 'Llamarlo Alzheimer'],
          say: 'Marcha magnética, incontinencia y deterioro cognitivo: hidrocefalia normotensiva, que es reversible.' },
        { cells: ['Alzheimer leve a moderado', 'Donepezilo con ECG basal', 'Memantina sola de entrada'],
          say: 'Alzheimer leve a moderado: donepezilo, con electrocardiograma basal.' },
        { cells: ['Diarrea o incontinencia con donepezilo', 'Bajar la dosis de donepezilo', 'Agregar otro fármaco'],
          say: 'Diarrea o escapes de orina con donepezilo: es un efecto colinérgico, y se baja la dosis. Agregar otro fármaco es el error.' },
        { cells: ['Agitación sin respuesta a medidas ambientales', 'Quetiapina en dosis bajas', 'Benzodiacepinas o haloperidol en dosis alta'],
          say: 'Y agitación que no cede con medidas ambientales: quetiapina en dosis bajas. Las benzodiacepinas están contraindicadas.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 71 años, profesor jubilado, traído por su hija por 16 meses de olvidos progresivos: repite las mismas preguntas, olvida citas y dejó la estufa encendida dos veces. Hace un mes se desorientó manejando al supermercado. Él minimiza el problema. Lúcido, atención normal. MMSE 21/30 (falla en memoria diferida y orientación), test del reloj muy alterado, Pfeffer 8 (dependiente para finanzas y electrodomésticos). Examen neurológico sin focalidad.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Tranquilizar: son olvidos propios de la edad; control en un año' },
        { letter: 'B', text: 'Diagnosticar deterioro cognitivo leve y control semestral sin fármacos' },
        { letter: 'C', text: 'Solicitar TSH, B12, VDRL, perfil bioquímico y TAC cerebral, e iniciar donepezilo 5 mg/día' },
        { letter: 'D', text: 'Iniciar memantina 20 mg/día como monoterapia' },
        { letter: 'E', text: 'Iniciar lorazepam nocturno' },
      ],
      correct: 'C',
      explanation: 'Deterioro amnésico anterógrado progresivo de más de un año, reloj alterado y Pfeffer 8 (pérdida de autonomía): demencia tipo Alzheimer leve a moderada, no DCL. Según GES: descartar causas reversibles (TSH, B12, VDRL, bioquímico), neuroimagen sin contraste e iniciar un IAChE (donepezilo 5 mg/día), más apoyo al cuidador. Memantina es para MMSE < 15; las benzodiacepinas están contraindicadas.',
      say: {
        stem: 'Vamos con un caso. Hombre de setenta y un años, profesor jubilado. Su hija cuenta dieciséis meses de olvidos progresivos: repite las preguntas, olvida citas y dejó la estufa encendida dos veces. Hace un mes se desorientó manejando al supermercado. Él dice que es normal a su edad. Está lúcido y atento. Minimental veintiuno, con falla en memoria diferida y orientación, reloj muy alterado, y Pfeffer de ocho.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: tranquilizar porque son olvidos de la edad, diagnosticar deterioro cognitivo leve sin fármacos, pedir TSH, B doce, VDRL, bioquímico y TAC e iniciar donepezilo, iniciar memantina sola, o iniciar lorazepam. Piénsalo.',
        answer: 'Es la C. Amnesia anterógrada progresiva, reloj alterado, y sobre todo un Pfeffer de ocho: perdió autonomía, así que es demencia, no deterioro leve. El distractor más tentador es la B, pero el deterioro leve exige autonomía preservada. Lo que corresponde es descartar causas reversibles con laboratorio y TAC, e iniciar donepezilo. La memantina sola es para el Minimental bajo quince, y el lorazepam está contraindicado.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 34',
      stem: 'Un paciente de 65 años, es traído por su señora, dado que presenta dificultades en sus actividades de la vida diaria. Ella refiere que ha estado repetitivo con errores en el manejo del dinero, así como dificultad para realizar actividades que normalmente realizaba sin problemas. El niega estos síntomas. Al examen físico presenta frecuencia cardiaca 68 latidos por minutos, con presión arterial de 130/85 mmHg, sin alteraciones en el examen segmentario, ni signos de focalidad neurológica.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Delirium' },
        { letter: 'B', text: 'Demencia vascular' },
        { letter: 'C', text: 'Depresión del adulto mayor' },
        { letter: 'D', text: 'Demencia tipo Alzheimer' },
        { letter: 'E', text: 'Demencia por cuerpos de Lewi' },
      ],
      correct: 'D',
      explanation: 'Deterioro insidioso con pérdida de autonomía (errores con el dinero), anosognosia (él lo niega, consulta la esposa) y examen neurológico sin focalidad: demencia tipo Alzheimer.',
      say: {
        stem: 'Ahora las preguntas reales. La primera, del EUNACOM de julio de dos mil diecisiete. Hombre de sesenta y cinco años, traído por su señora porque está repetitivo, comete errores con el dinero y le cuesta hacer cosas que antes hacía sin problemas. Él lo niega. El examen es normal, sin focalidad neurológica.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: delirium, demencia vascular, depresión del adulto mayor, demencia tipo Alzheimer, o demencia por cuerpos de Lewy. Piénsalo.',
        answer: 'Es la D, Alzheimer. Hay pérdida de autonomía, con errores en el dinero, y fíjate en un detalle: consulta la esposa y él lo niega. Esa anosognosia es típica del Alzheimer. La demencia vascular es el distractor, pero no hay antecedente vascular ni focalidad, y tampoco hay alteración de conciencia que sugiera un delirium.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 15',
      stem: 'Una paciente de 86 años, viuda desde hace 2 años, consulta porque ha notado olvidos frecuentes de eventos recientes en el último año, que han aumentado en los últimos dos meses. Presenta temor de estar iniciando una enfermedad de Alzheimer. En la evaluación se muestra atenta, orientada, cooperadora. Además, puede invertir series y recuerda 2 de 3 palabras que se le comunican durante la entrevista.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Enfermedad de Alzheimer' },
        { letter: 'B', text: 'Duelo patológico' },
        { letter: 'C', text: 'Trastorno neurocognitivo menor' },
        { letter: 'D', text: 'Accidente vascular encefálico' },
        { letter: 'E', text: 'Delirium' },
      ],
      correct: 'C',
      explanation: 'Queja cognitiva propia, déficit objetivo leve (recuerda 2 de 3 palabras), atención conservada y sin pérdida de autonomía: trastorno neurocognitivo menor (deterioro cognitivo leve).',
      say: {
        stem: 'La segunda, del EUNACOM de julio de dos mil veinticuatro. Mujer de ochenta y seis años, viuda hace dos años, que consulta sola por olvidos de hechos recientes en el último año, y teme tener Alzheimer. Está atenta y orientada, invierte series, y recuerda dos de tres palabras.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: enfermedad de Alzheimer, duelo patológico, trastorno neurocognitivo menor, accidente cerebrovascular, o delirium. Piénsalo.',
        answer: 'Es la C, trastorno neurocognitivo menor, que es el deterioro cognitivo leve. Tiene una queja propia, un déficit objetivo leve, y no hay pérdida de autonomía. El Alzheimer es el distractor, porque ella lo teme, pero sin dependencia no hay demencia. Y fíjate en el contraste con la pregunta anterior: aquí la que se preocupa es la paciente; en el Alzheimer suele consultar la familia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 25',
      stem: 'Una paciente de 84 años es traída por su hija debido a que presenta olvidos frecuentes. Su acompañante refiere que la paciente ha olvidado recetas, ya no cocina como antes y tiene dificultades crecientes en el manejo del dinero. Recientemente se desorientó en la calle, por lo que requirió ayuda para volver a casa. Tiene escolaridad incompleta hasta sexto básico. Al examen se observa orientada, cooperadora y sin alteraciones neurológicas.',
      question: '¿Cuál es el examen más adecuado para la evaluación inicial de esta paciente?',
      options: [
        { letter: 'A', text: 'Test de Montreal Cognitive Assessment (MOCA)' },
        { letter: 'B', text: 'Mini-Mental State Examination (MMSE)' },
        { letter: 'C', text: 'Prueba de Confusion Assessment Method (CAM)' },
        { letter: 'D', text: 'Test del reloj' },
        { letter: 'E', text: 'Prueba de memorización de tres palabras' },
      ],
      correct: 'B',
      explanation: 'Sospecha de demencia (pérdida de autonomía para cocinar y manejar dinero) en una paciente de baja escolaridad: el examen inicial es el MMSE, ajustado por escolaridad. El MoCA es más útil para pesquisar DCL; el CAM es para delirium.',
      say: {
        stem: 'La tercera, del EUNACOM de diciembre de dos mil veinticinco. Mujer de ochenta y cuatro años, traída por su hija por olvidos. Ya no cocina como antes, tiene problemas con el dinero, y se desorientó en la calle. Estudió hasta sexto básico. El examen es normal.',
        question: '¿Cuál es el examen más adecuado para la evaluación inicial?',
        options: 'Las opciones: MoCA, Minimental, el método de evaluación de la confusión o CAM, el test del reloj, o memorizar tres palabras. Piénsalo.',
        answer: 'Es la B, el Minimental. Aquí ya se sospecha una demencia, porque perdió autonomía, y la paciente tiene baja escolaridad: el Minimental, ajustado por escolaridad, es el examen inicial. El MoCA es el distractor, pero su fuerte es pesquisar el deterioro leve y la función ejecutiva. Y el CAM es para el delirium.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 104',
      stem: 'Hombre de 72 años con cefalea holocraneal progresiva de 3 meses de evolución, asociada a ataxia de la marcha y deterioro cognitivo leve. TAC de cerebro: colección hipodensa crónicamente organizada entre el córtex y el hueso craneal, sin efecto de masa severo.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Tumor cerebral primario' },
        { letter: 'B', text: 'Metástasis cerebrales' },
        { letter: 'C', text: 'Hematoma subdural crónico' },
        { letter: 'D', text: 'Hidrocefalia normotensiva' },
        { letter: 'E', text: 'Enfermedad de Alzheimer' },
      ],
      correct: 'C',
      explanation: 'Colección hipodensa crónica entre la corteza y el cráneo en un adulto mayor con cefalea, trastorno de la marcha y deterioro cognitivo: hematoma subdural crónico, causa estructural y tratable de deterioro cognitivo. Por eso la neuroimagen es obligatoria en el estudio.',
      say: {
        stem: 'La cuarta, del EUNACOM de julio de dos mil veinticinco. Hombre de setenta y dos años con tres meses de cefalea progresiva, ataxia de la marcha y deterioro cognitivo leve. El TAC muestra una colección hipodensa, crónica, entre la corteza y el hueso.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: tumor primario, metástasis, hematoma subdural crónico, hidrocefalia normotensiva, o Alzheimer. Piénsalo.',
        answer: 'Es la C, hematoma subdural crónico. Una colección hipodensa entre la corteza y el cráneo en un adulto mayor es eso. La hidrocefalia normotensiva tienta por la marcha, pero no produce una colección entre la corteza y el hueso. Y esta pregunta es la razón de que la neuroimagen sea obligatoria: hay deterioros cognitivos que se operan.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 121',
      stem: 'Un paciente de 80 años, con antecedente de enfermedad de Alzheimer, hipotiroidismo y artrosis, en tratamiento con donepecilo, levotiroxina y paracetamol, presenta escapes frecuentes de orina y diarrea.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Agregar memantina' },
        { letter: 'B', text: 'Disminuir la dosis de levotiroxina' },
        { letter: 'C', text: 'Agregar oxibutinina' },
        { letter: 'D', text: 'Disminuir la dosis de donepecilo' },
        { letter: 'E', text: 'Aumentar la dosis de levotiroxina' },
      ],
      correct: 'D',
      explanation: 'Diarrea e incontinencia urinaria son efectos colinérgicos del donepezilo: se reduce su dosis. Agregar oxibutinina (anticolinérgico) contrarresta el fármaco en vez de corregir la causa.',
      say: {
        stem: 'La quinta, del EUNACOM de diciembre de dos mil dieciocho. Hombre de ochenta años con Alzheimer, hipotiroidismo y artrosis, que usa donepezilo, levotiroxina y paracetamol. Presenta escapes frecuentes de orina y diarrea.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: agregar memantina, bajar la levotiroxina, agregar oxibutinina, bajar el donepezilo, o subir la levotiroxina. Piénsalo.',
        answer: 'Es la D. La diarrea y los escapes de orina son efectos colinérgicos: el donepezilo aumenta la acetilcolina en todo el cuerpo, no solo en el cerebro. Se baja su dosis. La oxibutinina es el distractor, porque trata la incontinencia, pero es un anticolinérgico: se opone al efecto del donepezilo en vez de corregir la causa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 12',
      stem: 'Mujer de 78 años con diagnóstico de Alzheimer moderado. Presenta agitación nocturna severa, intentos de golpear a cuidadores y deambulación sin propósito, que no cede con medidas no farmacológicas.',
      question: '¿Cuál es el fármaco más apropiado?',
      options: [
        { letter: 'A', text: 'Donepezilo' },
        { letter: 'B', text: 'Haloperidol en dosis alta' },
        { letter: 'C', text: 'Risperidona 0.5 mg nocturno' },
        { letter: 'D', text: 'Memantina' },
        { letter: 'E', text: 'Quetiapina 25 mg nocturno' },
      ],
      correct: 'E',
      explanation: 'Síntomas conductuales graves que no ceden con medidas no farmacológicas: antipsicótico atípico en dosis mínima, preferentemente quetiapina 12,5–25 mg nocturna, por su menor perfil extrapiramidal. Advertencia: aumenta el riesgo de ACV y mortalidad.',
      say: {
        stem: 'Y la última, del EUNACOM de julio de dos mil veinticinco. Mujer de setenta y ocho años con Alzheimer moderado, con agitación nocturna severa, intentos de golpear a sus cuidadores y deambulación sin propósito, que no cede con medidas no farmacológicas.',
        question: '¿Cuál es el fármaco más apropiado?',
        options: 'Las opciones: donepezilo, haloperidol en dosis alta, risperidona cero coma cinco miligramos, memantina, o quetiapina veinticinco miligramos en la noche. Piénsalo.',
        answer: 'Es la E, quetiapina en dosis baja en la noche. Ya fallaron las medidas no farmacológicas y hay riesgo para los cuidadores, así que corresponde un antipsicótico atípico en dosis mínima. La risperidona en dosis baja también aparece en el libro, y es el distractor más fino, pero la quetiapina es la preferida por su menor efecto extrapiramidal, como vimos en la clase de parkinsonismos. El haloperidol en dosis alta es el error.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Decide la autonomía', kind: 'key', items: [
          { t: 'Amnesia anterógrada', d: 'Hipocampo primero; consulta la familia',
            say: 'Cerremos con las reglas de oro. El Alzheimer empieza en el hipocampo, con amnesia anterógrada, y a menudo el paciente no lo nota: consulta la familia.' },
          { t: 'Autónomo: DCL · Dependiente: demencia', d: 'Pfeffer ≥ 6',
            say: 'Si el test está alterado pero es autónomo, es deterioro cognitivo leve. Si depende de otros, con Pfeffer de seis o más, es demencia.' },
        ] },
        { title: 'Estudio', tag: 'GES', kind: 'alert', items: [
          { t: 'TSH, B12, VDRL + TAC o RM', d: 'Siempre, antes de tratar',
            say: 'Siempre se descartan causas reversibles: TSH, B doce, VDRL y neuroimagen.' },
          { t: 'Hakim-Adams', d: 'Marcha + incontinencia + demencia',
            say: 'Y marcha magnética, incontinencia y demencia es hidrocefalia normotensiva.' },
        ] },
        { title: 'Tratamiento', tag: 'Según etapa', kind: 'pharma', items: [
          { t: 'DCL: sin IAChE', d: 'Leve a moderada: donepezilo + ECG',
            say: 'En el deterioro leve, sin fármacos. En el Alzheimer leve a moderado, donepezilo, con electrocardiograma basal.' },
          { t: 'MMSE < 15: memantina', d: 'Agitación: quetiapina baja; nunca benzodiacepinas',
            say: 'Bajo quince en el Minimental, memantina. Y para la agitación, quetiapina en dosis baja, nunca benzodiacepinas. Si te llevas una sola idea de hoy: la frontera entre deterioro leve y demencia la pone la autonomía, no el test. En la próxima clase vemos las otras demencias: vascular, por cuerpos de Lewy y frontotemporal. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Deterioro cognitivo y enfermedad de Alzheimer',
    root: N('start', 'Queja de memoria', 'Paciente o familia',
      'Adulto mayor con quejas de memoria, propias o de la familia.',
      ['', N('q', '¿Test cognitivo alterado?', 'MMSE < 24 · MoCA < 26',
        '¿Hay un déficit objetivo en el Minimental o en el MoCA?',
        ['NO', N('ok', 'Envejecimiento normal', 'Tranquilizar, actividad física e intelectual',
          'Si no lo hay, es envejecimiento normal: se tranquiliza y se fomenta la actividad física e intelectual.')],
        ['SÍ', N('q', '¿Perdió autonomía?', 'Pfeffer ≥ 6',
          'Si hay déficit, la pregunta es si perdió autonomía en las actividades instrumentales.',
          ['NO', N('refer', 'Deterioro cognitivo leve', 'Control semestral · sin IAChE',
            'Si sigue siendo autónomo, es un deterioro cognitivo leve: estimulación, control vascular y control semestral, sin inhibidores de la acetilcolinesterasa.')],
          ['SÍ', N('alert', 'Demencia: descartar lo reversible', 'TSH, B12, VDRL, TAC o RM',
            'Si depende de otros, es una demencia, y antes de rotularla se descartan causas reversibles: TSH, B doce, VDRL, perfil básico y neuroimagen.',
            ['Reversible', N('do', 'Tratar la causa', 'Subdural, hidrocefalia, hipotiroidismo',
              'Si aparece un hematoma subdural, una hidrocefalia normotensiva, un hipotiroidismo o un déficit de B doce, se trata la causa.')],
            ['Alzheimer', N('q', '¿MMSE 15 o más?', 'Leve a moderada vs moderada a severa',
              'Si es un Alzheimer, el Minimental define el fármaco.',
              ['SÍ', N('do', 'Donepezilo 5 → 10 mg', 'ECG basal · o rivastigmina en parche',
                'Leve a moderado: donepezilo, con electrocardiograma basal, o rivastigmina en parche.')],
              ['NO', N('do', 'Agregar memantina', 'Hasta 20 mg/día',
                'Moderado a severo, con Minimental bajo quince: memantina, sola o con el inhibidor, más apoyo al cuidador.')])])])])]),
  },
};
