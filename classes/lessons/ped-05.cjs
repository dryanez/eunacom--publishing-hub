// Clase ped-05 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_pediatria_bloque_2.cjs (id "ped-05").

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-05',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'El score que decide todo: cuándo es leve, cuándo se hospitaliza',
      say: 'Bienvenido. Empezamos el bloque respiratorio con el tema que más se pregunta de toda la pediatría: la bronquiolitis y el síndrome bronquial obstructivo del lactante. Y la buena noticia es que casi todo el tema se resuelve con una sola herramienta: el score de Tal. Si aprendes a calcularlo bien, sabes qué hacer con este paciente. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: '¿Por qué el lactante llega tapado?',
      nodes: [
        { id: 'vrs', col: 0, row: 0, k: 'cause', t: 'Virus respiratorio sincicial', s: 'El culpable en la mayoría de los casos' },
        { id: 'inf', col: 1, row: 0, k: 'mech', t: 'Inflama el bronquiolo', s: 'Y deja un tapón de moco' },
        { id: 'obs', col: 2, row: 0, k: 'mech', t: 'El aire entra, no sale', s: 'Queda atrapado en el pulmón' },
        { id: 'cli', col: 3, row: 0, k: 'effect', t: 'Taquipnea y sibilancias', s: 'Con tiraje, a veces cianosis' },
      ],
      edges: [
        { from: 'vrs', to: 'inf' }, { from: 'inf', to: 'obs' }, { from: 'obs', to: 'cli' },
      ],
      steps: [
        { show: ['vrs'], note: 'El principal responsable',
          say: 'Fíjate primero en el virus. El virus respiratorio sincicial explica la gran mayoría de los cuadros, sobre todo en el lactante menor de dos años. Esa edad no es un dato menor: si es el primer episodio de obstrucción bronquial antes de los dos años, se llama bronquiolitis.' },
        { show: ['inf'], note: 'No es solo broncoespasmo',
          say: 'El virus invade el epitelio del bronquiolo, lo daña, y deja detrás un tapón de moco espeso. Ojo con esto, porque es distinto al asma: aquí el problema no es solo que el músculo se contraiga, es que la vía aérea queda literalmente taponada.' },
        { show: ['obs'], note: 'El aire queda atrapado',
          say: 'Y como el bronquiolo es angosto y está tapado, el aire entra con más facilidad de la que sale. Eso atrapa aire dentro del pulmón, y ese atrapamiento explica todo lo que vas a examinar a continuación.' },
        { show: ['cli'], note: 'El mecanismo explica la clínica',
          say: 'Por eso el lactante te llega respirando rápido, con sibilancias, con tiraje, y en los casos más graves, con cianosis. Guarda esta cadena, porque el score que viene a continuación mide exactamente estos mismos signos. Y hay algo más que conviene que sepas: este mismo mecanismo, cuando se repite varias veces en un mismo niño, ya no se llama bronquiolitis, sino síndrome bronquial obstructivo recurrente, y ahí hay que buscar otras causas además del virus.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: '¿Cómo empieza este cuadro?',
      cards: [
        { title: 'Pródromo típico', tag: 'Antes de la crisis', kind: 'criteria', items: [
          { t: 'Coriza y tos', d: 'Dos a tres días antes',
            say: 'Casi siempre empieza igual: dos a tres días de coriza, congestión y tos seca, con poca fiebre. Un cuadro catarral común, sin nada llamativo todavía.' },
          { t: 'Luego, dificultad para respirar', d: 'Y rechazo de la alimentación',
            say: 'Y ahí, de forma progresiva, se agrega la dificultad respiratoria y el niño empieza a rechazar el pecho o la mamadera. Mira a este lactante: respira con esfuerzo, con retracciones y aleteo nasal. Ese cambio es la señal de que hay que examinarlo con más cuidado.',
            photo: { src: 'biblioteca/15_pediatria/ped-05/01_distres-en-bronquiolitis__cto-pediatria_p52.jpg', label: 'Dificultad respiratoria', at: 'Mira a este lactante', credit: 'Manual CTO Pediatría 14.ª ed., p. 52' } },
        ] },
        { title: 'Diagnóstico', tag: 'Es clínico', kind: 'key', items: [
          { t: 'No se pide radiografía siempre', d: 'Solo si hay duda o complicación',
            say: 'El diagnóstico es clínico, y esto se pregunta harto: no le pidas radiografía de tórax a todo lactante con sibilancias. La reservas para cuando hay duda diagnóstica, o sospechas una complicación como atelectasia o neumotórax. Cuando la pides, esta es la radiografía típica: tórax hiperinsuflado. Pedirla de rutina no cambia la conducta, así que si te la ofrecen como primera opción en una pregunta, casi siempre es la alternativa incorrecta.',
            photo: { src: 'biblioteca/15_pediatria/ped-05/02_rx-bronquiolitis__cto-pediatria_p52.jpg', label: 'Rx: hiperinsuflación', at: 'esta es la radiografía típica', credit: 'Manual CTO Pediatría 14.ª ed., p. 52' } },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Score de Tal',
      title: 'Un puntaje, tres conductas',
      nodes: [
        { id: 'sco', col: 0, row: 1, k: 'q', t: '¿Cuánto suma?', s: 'Frecuencia, sibilancias, cianosis, tiraje' },
        { id: 'lev', col: 1, row: 0, k: 'good', t: 'Cinco o menos', s: 'Leve' },
        { id: 'amb', col: 2, row: 0, k: 'good', t: 'Salbutamol en casa', s: 'Y control en dos días' },
        { id: 'mod', col: 1, row: 1, k: 'alert', t: 'Seis a ocho', s: 'Moderado' },
        { id: 'hab', col: 2, row: 1, k: 'alert', t: 'Hospitalización abreviada', s: 'Salbutamol cada diez minutos, una hora' },
        { id: 'sev', col: 1, row: 2, k: 'risk', t: 'Nueve a doce', s: 'Severo' },
        { id: 'hos', col: 2, row: 2, k: 'risk', t: 'Hospitalizar de inmediato', s: 'Oxígeno y observación estricta' },
      ],
      edges: [
        { from: 'sco', to: 'lev' }, { from: 'sco', to: 'mod' }, { from: 'sco', to: 'sev' },
        { from: 'lev', to: 'amb' }, { from: 'mod', to: 'hab' }, { from: 'sev', to: 'hos' },
      ],
      steps: [
        { show: ['sco'], note: 'Cuatro signos, de cero a tres puntos cada uno',
          say: 'Vamos al score de Tal, que es la columna vertebral de esta clase. Evalúa cuatro cosas: la frecuencia respiratoria, según la edad; las sibilancias, que van de ausentes a audibles sin fonendoscopio; la cianosis, y la retracción o tiraje. Sumas los cuatro puntajes y con eso decides la conducta.' },
        { show: ['lev', 'amb'], note: 'Cinco o menos: no te compliques',
          say: 'Si la suma da cinco o menos, es leve, y el manejo es ambulatorio: salbutamol en aerosol con aerocámara, y control si no mejora.' },
        { show: ['mod', 'hab'], note: 'Aquí está lo que más se pregunta',
          say: 'Si suma entre seis y ocho, es moderado, y aquí viene lo que más te van a preguntar: la hospitalización abreviada. Se le da salbutamol con aerocámara cada diez minutos, durante una hora completa, y luego se reevalúa.' },
        { show: ['sev', 'hos'], note: 'Nueve o más: no se espera',
          say: 'Y si suma nueve o más, es severo, y ahí no hay hospitalización abreviada que valga: se hospitaliza de inmediato, con oxígeno, y se considera apoyo ventilatorio si no responde.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Hospitalización abreviada',
      title: 'Qué pasa si no baja el puntaje',
      cards: [
        { title: 'Al terminar la hora', tag: 'Reevaluar siempre', kind: 'pharma', items: [
          { t: 'Bajó a cinco o menos', d: 'Alta con salbutamol y control',
            say: 'Al término de esa hora, reevalúas. Si el puntaje bajó a cinco o menos, das el alta con salbutamol cada cuatro horas y un control al día siguiente.' },
          { t: 'Sigue entre seis y ocho', d: 'Corticoide oral y otra hora',
            say: 'Pero si sigue entre seis y ocho, agregas un corticoide oral, la prednisona, e inicias una segunda hora de salbutamol. Si después de esa segunda hora tampoco mejora, ahí sí se hospitaliza.' },
        ] },
        { title: 'Lo que el examen tienta a hacer mal', tag: 'Ojo', kind: 'alert', items: [
          { t: 'Broncodilatador de rutina', d: 'Beneficio marginal en la bronquiolitis pura',
            say: 'Y aquí una trampa fina: en la bronquiolitis viral pura, el beneficio del broncodilatador y del corticoide es marginal, y lo que realmente cambia el pronóstico es el oxígeno. Ojo, esto no significa que no se use: se prueba y se sigue solo si el niño responde.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Profilaxis y trampas',
      title: 'Lo que llega antes de que el niño se enferme',
      cards: [
        { title: 'Nirsevimab', tag: 'Profilaxis universal', kind: 'pharma', items: [
          { t: 'Anticuerpo de vida larga', d: 'Se da a todo recién nacido',
            say: 'Desde hace poco Chile protege a todos los recién nacidos con nirsevimab, un anticuerpo monoclonal de vida media larga contra el virus respiratorio sincicial. No es una vacuna: es protección pasiva, y se administra en la maternidad. Desde que se implementó, las hospitalizaciones por bronquiolitis grave bajaron de forma muy marcada, así que si te preguntan qué intervención tuvo más impacto poblacional en esta enfermedad, la respuesta es esta.' },
        ] },
        { title: 'Tórax silente', tag: 'Máxima gravedad', kind: 'alert', items: [
          { t: 'Sin sibilancias no es mejoría', d: 'Es obstrucción tan severa que no suena',
            say: 'Y guarda esta idea para el examen: si un lactante grave deja de sibilar de golpe, no pienses que mejoró. Puede ser tórax silente, la obstrucción tan extrema que casi no entra aire y por eso no hace ruido. En el score, eso puntúa como lo más grave posible. Si además el niño está agotado, pálido y con la conciencia comprometida, estás ante una insuficiencia respiratoria inminente.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'La diferencia que más se pregunta',
      title: 'No todo ruido respiratorio es lo mismo',
      nodes: [
        { id: 'lac', col: 0, row: 1, k: 'start', t: 'Lactante con ruido raro', s: '¿Qué tipo de ruido, y cómo empezó?' },
        { id: 'sbo', col: 1, row: 0, k: 'good', t: 'Sibilancias, empezó de a poco', s: 'Bronquiolitis o síndrome obstructivo' },
        { id: 'cro', col: 1, row: 1, k: 'alert', t: 'Estridor y tos perruna', s: 'Laringitis: la vemos en la próxima clase' },
        { id: 'cex', col: 1, row: 2, k: 'trap', t: 'Empezó de golpe, comiendo', s: 'Cuerpo extraño: viene más adelante' },
        { id: 'tra', col: 1, row: 3, k: 'risk', t: 'Fiebre alta, aspecto tóxico', s: 'Traqueítis bacteriana' },
      ],
      edges: [
        { from: 'lac', to: 'sbo', label: 'gradual' }, { from: 'lac', to: 'cro', label: 'estridor' },
        { from: 'lac', to: 'cex', label: 'súbito' }, { from: 'lac', to: 'tra', label: 'tóxico' },
      ],
      steps: [
        { show: ['lac'], note: 'La forma de inicio ya te orienta',
          say: 'Antes de seguir, ordenemos algo que el examen mezcla a propósito: no todo lactante con ruido al respirar tiene lo mismo. Pregúntate cómo empezó y qué tipo de ruido hace.' },
        { show: ['sbo'], note: 'Nuestro tema de hoy',
          say: 'Si el inicio fue gradual, con pródromo catarral, y el ruido es sibilancia espiratoria, estás en bronquiolitis o síndrome obstructivo, que es justo lo que estamos viendo.' },
        { show: ['cro'], note: 'Se viene en la próxima clase',
          say: 'Si en cambio el ruido es un estridor, con tos que suena a perro y la voz ronca, eso ya no es bronquiolitis: es laringitis, y esa la vemos en detalle en la próxima clase.' },
        { show: ['cex'], note: 'Un tema que también viene en este bloque',
          say: 'Si el inicio fue súbito, mientras el niño jugaba o comía, sospecha cuerpo extraño en la vía aérea. También lo revisamos más adelante en este mismo bloque.' },
        { show: ['tra'], note: 'El niño se ve muy enfermo',
          say: 'Y si hay fiebre muy alta y el niño se ve tóxico, con mal aspecto general, piensa en traqueítis bacteriana. Guarda este mapa, porque te va a servir en las próximas clases.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Coqueluche',
      title: 'Tos convulsiva: tres fases',
      nodes: [
        { id: 'bp', col: 0, row: 1, k: 'cause', t: 'Bordetella pertussis', s: 'Gotitas; notificación inmediata' },
        { id: 'cat', col: 1, row: 1, k: 'mech', t: 'Fase catarral', s: '1 a 2 semanas, como un resfrío' },
        { id: 'par', col: 2, row: 1, k: 'alert', t: 'Fase paroxística', s: '2 a 6 semanas: quintas y gallito' },
        { id: 'con', col: 3, row: 1, k: 'good', t: 'Convaleciente', s: 'La tos va cediendo' },
        { id: 'lac', col: 2, row: 3, k: 'risk', t: 'Lactante menor de 3 a 6 meses', s: 'Apnea y cianosis, sin gallito' },
      ],
      edges: [
        { from: 'bp', to: 'cat' }, { from: 'cat', to: 'par' }, { from: 'par', to: 'con' }, { from: 'par', to: 'lac' },
      ],
      steps: [
        { show: ['bp'], note: 'Se notifica de inmediato',
          say: 'Además de la bronquiolitis, otra causa de tos en el lactante que se pregunta es el coqueluche, la tos convulsiva, producida por Bordetella pertussis. Se transmite por gotitas y es de notificación obligatoria inmediata.' },
        { show: ['cat', 'par'], note: 'Catarral, luego paroxística',
          say: 'Tiene tres fases. La catarral dura una a dos semanas y parece un resfrío. Después viene la paroxística, de dos a seis semanas, con tos en quintas, un estridor inspiratorio que llaman gallito, cianosis y vómitos después de toser.' },
        { show: ['con'], note: 'Convaleciente',
          say: 'Y por último la fase convaleciente, en que la tos va cediendo poco a poco.' },
        { show: ['lac'], note: 'El grupo de mayor riesgo',
          say: 'Ojo con el lactante menor de tres a seis meses: muchas veces no tiene gallito, y predominan las apneas y la cianosis. Es el grupo con más complicaciones, como neumonía, hipertensión pulmonar, convulsiones y encefalopatía, y el de mayor mortalidad.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Coqueluche',
      title: 'Diagnóstico, tratamiento y prevención',
      cards: [
        { title: 'Diagnóstico', tag: 'Tos de más de 2 semanas con paroxismos', kind: 'key', items: [
          { t: 'Linfocitosis marcada', d: 'Sobre 20.000 por mm³; mal pronóstico sobre 50.000',
            say: 'Sospéchalo ante una tos de más de dos semanas con paroxismos. El hemograma muestra leucocitosis con linfocitosis marcada, sobre veinte mil, y cifras sobre cincuenta mil se asocian a mal pronóstico.' },
          { t: 'PCR en aspirado nasofaríngeo', d: 'De elección en las primeras 3 a 4 semanas',
            say: 'La confirmación es con PCR de Bordetella pertussis en aspirado nasofaríngeo, que es lo mejor en las primeras tres a cuatro semanas, o con cultivo.' },
        ] },
        { title: 'Tratamiento', tag: 'Macrólido', kind: 'pharma', items: [
          { t: 'Azitromicina 10 mg/kg/día por 5 días', d: 'De elección en menores de 6 meses',
            say: 'Se trata con un macrólido, que acorta el período de contagio, pero cambia poco la tos si se da tarde. De elección, azitromicina, diez miligramos por kilo al día por cinco días, sobre todo en menores de seis meses. Evita la eritromicina en menores de un mes por el riesgo de estenosis hipertrófica del píloro.' },
          { t: 'Hospitalizar menores de 3 a 6 meses', d: 'Y todo niño con apnea, cianosis o neumonía',
            say: 'Hospitalizas a los menores de tres a seis meses y a todo niño con apneas, cianosis, neumonía o convulsiones, con aislamiento de gotitas hasta completar cinco días de tratamiento.' },
        ] },
        { title: 'Prevención', tag: 'Vacuna y contactos', kind: 'normal', items: [
          { t: 'Hexavalente y dTpa', d: '2, 4, 6 meses y refuerzo a los 18; embarazada desde 28 semanas',
            say: 'La prevención es la vacuna hexavalente a los dos, cuatro y seis meses con refuerzo a los dieciocho, la dTpa en primero y octavo básico, y la dTpa a la embarazada desde las veintiocho semanas.' },
          { t: 'Quimioprofilaxis a contactos', d: 'Con el mismo macrólido',
            say: 'Y los contactos cercanos, sobre todo si hay lactantes o embarazadas en el hogar, reciben quimioprofilaxis con el mismo macrólido.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Oxigenoterapia',
      title: 'Cuándo dar oxígeno y con qué dispositivo',
      cards: [
        { title: 'Indicación y meta', tag: 'Saturometría continua', kind: 'key', items: [
          { t: 'Saturación bajo 93% al aire', d: 'Meta de 93 a 97%',
            say: 'El oxígeno se indica con saturación bajo noventa y tres por ciento al aire ambiente, con cianosis, dificultad respiratoria grave, shock o paro. La meta es de noventa y tres a noventa y siete por ciento.' },
          { t: 'Prematuro: evitar hiperoxia', d: 'Meta de 90 a 95%',
            say: 'En el recién nacido prematuro evitas la hiperoxia, con meta de noventa a noventa y cinco, por el riesgo de retinopatía y displasia broncopulmonar. Siempre con saturometría continua y reevaluando a los treinta a sesenta minutos.' },
        ] },
        { title: 'Dispositivos', tag: 'De menor a mayor FiO₂', kind: 'criteria', items: [
          { t: 'Cánula nasal: hasta 4 L/min', d: 'FiO₂ de 24 a 40%',
            say: 'La cánula nasal es de bajo flujo: hasta dos litros por minuto en el lactante y cuatro en el niño, con una fracción inspirada de veinticuatro a cuarenta por ciento.' },
          { t: 'Mascarilla simple y con reservorio', d: '5 a 10 L/min; 10 a 15 L/min',
            say: 'La mascarilla simple va de cinco a diez litros, con mínimo cinco para evitar reinhalación. La con reservorio, de diez a quince litros, llega a una fracción de hasta noventa y cinco por ciento.' },
          { t: 'Alto flujo en bronquiolitis moderada a grave', d: 'Humidificado y calentado, 1 a 2 L/kg/min',
            say: 'Y la cánula de alto flujo, humidificada y calentada, se indica en la bronquiolitis moderada a grave con hipoxemia o trabajo respiratorio persistente a pesar del oxígeno convencional. Si no basta, CPAP o ventilación mecánica.' },
        ] },
        { title: 'Técnica y retiro', tag: 'Seguro y gradual', kind: 'normal', items: [
          { t: 'Retiro gradual', d: 'Saturación estable sobre 93%',
            say: 'Verificas la fuente y el flujómetro, humidificas si el flujo es alto, fijas el dispositivo sin comprimir la piel y revisas las fosas nasales. El retiro es gradual, cuando mantiene más de noventa y tres por ciento de forma estable.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Gases en sangre arterial',
      title: 'Gasometría en el niño con dificultad respiratoria',
      cards: [
        { title: 'Cómo se lee', tag: 'En orden', kind: 'key', items: [
          { t: 'pH, luego componente primario', d: 'pH 7,35-7,45; PaCO₂ 35-45; HCO₃ 22-26',
            say: 'Los valores normales son pH de siete coma treinta y cinco a siete coma cuarenta y cinco, presión de dióxido de carbono de treinta y cinco a cuarenta y cinco, y bicarbonato de veintidós a veintiséis. Se lee en orden: primero el pH, después el componente primario, presión de dióxido de carbono o bicarbonato, y por último la compensación.' },
        ] },
        { title: 'Dos tipos de insuficiencia', tag: 'Hipoxémica o hipercápnica', kind: 'criteria', items: [
          { t: 'Tipo I: PaO₂ bajo 60', d: 'PaCO₂ normal o baja; neumonía, bronquiolitis',
            say: 'La insuficiencia tipo uno es hipoxémica: presión de oxígeno bajo sesenta, con presión de dióxido de carbono normal o baja, típica de neumonía y bronquiolitis.' },
          { t: 'Tipo II: PaCO₂ sobre 50', d: 'Acidosis respiratoria por fatiga',
            say: 'La tipo dos es hipercápnica: presión de dióxido de carbono sobre cincuenta, con acidosis respiratoria por fatiga muscular.' },
        ] },
        { title: 'La trampa del agotamiento', tag: 'Se pregunta', kind: 'alert', items: [
          { t: 'PaCO₂ "normal" en un niño taquipneico', d: 'Falla ventilatoria inminente',
            say: 'Aquí está la trampa. En un niño con bronquiolitis o síndrome obstructivo grave que venía taquipneico, una presión de dióxido de carbono normal, o que sube, es signo de agotamiento y de falla ventilatoria inminente.' },
          { t: 'pH bajo 7,30 o PaCO₂ sobre 55-60', d: 'UCI y soporte ventilatorio',
            say: 'Con pH bajo siete coma treinta, o presión de dióxido de carbono sobre cincuenta y cinco a sesenta, va a la unidad de cuidados intensivos con soporte ventilatorio. Y recuerda que la saturometría no detecta la retención de dióxido de carbono: no reemplaza al gas.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Estudio etiológico',
      title: 'Qué examen pedir para el virus y la bacteria',
      cards: [
        { title: 'Inmunofluorescencia directa', tag: 'Aspirado nasofaríngeo', kind: 'key', items: [
          { t: 'Resultado en 2 a 4 horas', d: 'VRS, influenza, adenovirus, parainfluenza',
            say: 'La inmunofluorescencia directa detecta virus respiratorio sincicial, influenza, adenovirus, parainfluenza y metapneumovirus en dos a cuatro horas. Es muy específica, sobre noventa y cinco por ciento, con sensibilidad moderada: si es positiva confirma, pero si es negativa no descarta.' },
          { t: 'No de rutina en lo ambulatorio', d: 'Se pide al hospitalizar, para cohortes',
            say: 'No se pide de rutina en la bronquiolitis ambulatoria, porque no cambia el manejo. Se solicita en los hospitalizados, para agrupar pacientes en cohortes y aislamiento y para vigilancia epidemiológica.' },
        ] },
        { title: 'PCR y serología', tag: 'Más sensible; infección reciente', kind: 'criteria', items: [
          { t: 'PCR múltiple: más sensible', d: 'Detecta coinfecciones; puede seguir positiva semanas',
            say: 'El panel de PCR múltiple es más sensible, detecta coinfecciones y virus menos frecuentes, pero puede quedar positivo semanas después del cuadro.' },
          { t: 'IgM reciente; IgG sube 4 veces', d: 'Menor de 6 meses: IgG es materna',
            say: 'En la serología, la IgM indica infección reciente, como en Mycoplasma. Y un aumento de IgG de cuatro veces entre dos muestras confirma de forma retrospectiva. En menores de seis meses la IgG es materna y no sirve.' },
        ] },
        { title: 'Bacterias y aislamiento', tag: 'Qué cultivar y cómo aislar', kind: 'alert', items: [
          { t: 'Hemocultivo y líquido pleural; esputo no', d: 'El niño pequeño no expectora',
            say: 'Para bacterias, hemocultivo, cultivo de líquido pleural y tinción de Gram. El esputo no sirve, porque el niño pequeño no expectora.' },
          { t: 'Gotitas para VRS; aéreo para sarampión', d: 'Aéreo: presión negativa y N95; varicela, TBC',
            say: 'Y el aislamiento: contacto más gotitas para el virus respiratorio sincicial y la influenza. Precauciones aéreas, con presión negativa y mascarilla ene noventa y cinco, para sarampión, varicela y tuberculosis pulmonar.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'El bronquiolo',
      images: [
        { src: 'animaciones/ped-05/A1_bronquiolo_real.mp4', label: 'Bronquiolitis', credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Entra pero no sale',
          say: 'En el lactante, el bronquiolo es muy pequeño. El edema y el moco lo estrechan, y al espirar se cierra todavía más: el aire entra pero no alcanza a salir y queda atrapado. Por eso aparecen sibilancias y retracciones.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo el razonamiento del score de Tal en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que más se confunde en bronquiolitis',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Score de Tal cinco o menos', 'Salbutamol en casa y control', 'Hospitalizar sin necesidad'],
          say: 'Repasemos con una tabla. Score de cinco o menos: salbutamol en casa y control. El error es hospitalizar a un lactante que no lo necesita.' },
        { cells: ['Score entre seis y ocho', 'Hospitalización abreviada, una hora', 'Hospitalizar de entrada sin probar'],
          say: 'Score entre seis y ocho: hospitalización abreviada por una hora. El error es saltarse ese paso y hospitalizar de entrada.' },
        { cells: ['Persiste moderado tras la hora', 'Corticoide oral y segunda hora', 'Repetir salbutamol sin corticoide'],
          say: 'Si persiste moderado al término de la hora: corticoide oral y una segunda hora de salbutamol. El error es solo repetir el broncodilatador sin agregar el corticoide.' },
        { cells: ['Deja de sibilar y está grave', 'Pensar en tórax silente', 'Interpretarlo como mejoría'],
          say: 'Si un lactante grave deja de sibilar de golpe, piensa en tórax silente. El error clásico es leerlo como mejoría.' },
        { cells: ['Cuadro típico, sin alarma', 'No pedir radiografía', 'Pedir radiografía a todos'],
          say: 'Y en el cuadro típico sin alarma, no se pide radiografía de rutina. El error frecuente es pedirla a todo lactante con sibilancias.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Lactante de 6 meses, con 2 días de coriza y tos, presenta ahora dificultad respiratoria. Al examen: FR 58 rpm, sibilancias en toda la espiración auscultadas con fonendoscopio, tiraje subcostal moderado, sin cianosis.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Hospitalización abreviada con salbutamol cada 10 minutos por 1 hora' },
        { letter: 'B', text: 'Alta con salbutamol cada 6 horas y control en 1 semana' },
        { letter: 'C', text: 'Hospitalización directa en UCI con ventilación mecánica' },
        { letter: 'D', text: 'Solicitar radiografía de tórax antes de decidir' },
        { letter: 'E', text: 'Nebulización con adrenalina racémica y observación' },
      ],
      correct: 'A',
      explanation: 'FR 58 (2 puntos) + sibilancias en toda la espiración (2 puntos) + tiraje subcostal moderado (2 puntos) + sin cianosis (0 puntos) = 6 puntos, moderado. Corresponde hospitalización abreviada con salbutamol cada 10 minutos por 1 hora.',
      say: {
        stem: 'Vamos con un caso. Lactante de seis meses, con dos días de coriza y tos, que ahora tiene dificultad respiratoria. Al examen: frecuencia respiratoria de cincuenta y ocho, sibilancias en toda la espiración con fonendoscopio, tiraje subcostal moderado, sin cianosis.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Tienes cinco opciones: hospitalización abreviada con salbutamol cada diez minutos, alta con salbutamol cada seis horas, hospitalización directa en la unidad de cuidados intensivos, pedir radiografía antes de decidir, o adrenalina racémica en observación. Piénsalo.',
        answer: 'Es la A. Súmalo tú mismo: la frecuencia da dos puntos, las sibilancias en toda la espiración dan dos puntos, el tiraje subcostal moderado da dos puntos más, y la ausencia de cianosis no suma nada. En total, seis puntos: moderado. Eso es justo el rango de la hospitalización abreviada. La radiografía no aporta nada aquí, porque el cuadro es típico y no hay duda diagnóstica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 72',
      stem: 'Un lactante de 5 meses presenta un cuadro de tos y coriza, asociado a fiebre hasta 38,5°C. Al día siguiente evoluciona con dificultad respiratoria, taquipnea, retracción subcostal. Al examen físico tiene FR 70x\', uso de musculatura accesoria, sibilancias inspiratorias y espiratorias difusas e intensas, más cianosis perioral.',
      question: '¿Cuál es el agente etiológico más probable?',
      options: [
        { letter: 'A', text: 'Virus respiratorio sincicial' },
        { letter: 'B', text: 'Bordetella pertussis' },
        { letter: 'C', text: 'Virus influenza' },
        { letter: 'D', text: 'Virus parainfluenza' },
        { letter: 'E', text: 'Neumococo' },
      ],
      correct: 'A',
      explanation: 'Bronquiolitis clásica del lactante, cuyo agente etiológico principal es el virus respiratorio sincicial.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil diecinueve. Lactante de cinco meses con tos y coriza, y fiebre hasta treinta y ocho y medio. Al día siguiente aparece dificultad respiratoria y taquipnea, con frecuencia respiratoria de setenta, uso de musculatura accesoria, sibilancias en toda la espiración y la inspiración, y cianosis perioral.',
        question: '¿Cuál es el agente etiológico más probable?',
        options: 'Las opciones: virus respiratorio sincicial, Bordetella pertussis, virus influenza, virus parainfluenza, o neumococo.',
        answer: 'Es la A, virus respiratorio sincicial. Es la bronquiolitis clásica que vimos al inicio de la clase, y este virus explica la gran mayoría de los casos. Fíjate que aquí el score de Tal daría un puntaje severo: frecuencia muy alta, sibilancias intensas y cianosis, así que a este paciente le corresponde hospitalizar de inmediato.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 158',
      stem: 'Un lactante de 8 meses presenta fiebre y rinorrea de 48 horas de evolución, con dificultad respiratoria en las últimas horas. Al examen físico presenta retracción subcostal e intercostal moderada, FC 120x\', FR 35x\', saturación de oxígeno del 93%. En el examen pulmonar se auscultan sibilancias y crépitos bilaterales.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Bronquiolitis' },
        { letter: 'B', text: 'Asma del lactante' },
        { letter: 'C', text: 'Neumonía multifocal' },
        { letter: 'D', text: 'Neumonía atípica' },
        { letter: 'E', text: 'Cardiopatía congénita' },
      ],
      correct: 'A',
      explanation: 'Cuadro catarral seguido de dificultad respiratoria con sibilancias en un lactante: caso clásico de bronquiolitis, definida como el primer episodio de síndrome bronquial obstructivo.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil veinticuatro. Lactante de ocho meses con fiebre y rinorrea de dos días, y dificultad respiratoria en las últimas horas. Al examen: tiraje subcostal e intercostal moderado, frecuencia cardíaca de ciento veinte, frecuencia respiratoria de treinta y cinco, saturación de noventa y tres por ciento, con sibilancias y crépitos en ambos pulmones.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: bronquiolitis, asma del lactante, neumonía multifocal, neumonía atípica, o cardiopatía congénita.',
        answer: 'La respuesta es la A, bronquiolitis. Es exactamente el mecanismo que vimos: pródromo catarral y luego dificultad respiratoria con sibilancias, en un lactante pequeño. La asma del lactante es la trampa tentadora, pero ese término se reserva para cuadros recurrentes, no para un primer episodio como este.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 148',
      stem: 'Un lactante de 5 meses de edad es llevado a urgencias, por presentar un cuadro de obstrucción bronquial. Al examen físico presenta taquipnea importante, satura 90%, tiene retracción intercostal, cianosis perioral y sibilancias bilaterales intensas.',
      question: '¿Cuál es la primera medida que se debe tomar?',
      options: [
        { letter: 'A', text: 'Nebulizaciones con salbutamol' },
        { letter: 'B', text: 'Nebulizaciones con budesonida' },
        { letter: 'C', text: 'Dar corticoides orales' },
        { letter: 'D', text: 'Dar oxígeno por mascarilla' },
        { letter: 'E', text: 'Administrar corticoides endovenosos' },
      ],
      correct: 'D',
      explanation: 'Ante hipoxemia en un lactante grave, la medida más urgente es corregir la oxigenación; el oxígeno es la intervención con mayor evidencia de beneficio en la bronquiolitis, más que broncodilatadores o corticoides.',
      say: {
        stem: 'Una última pregunta real, del EUNACOM de julio de dos mil quince. Lactante de cinco meses con obstrucción bronquial, taquipneico, saturando noventa, con retracción intercostal, cianosis perioral y sibilancias intensas en ambos pulmones.',
        question: '¿Cuál es la primera medida que se debe tomar?',
        options: 'Las opciones: nebulizar con salbutamol, nebulizar con budesonida, dar corticoides orales, dar oxígeno por mascarilla, o corticoides endovenosos.',
        answer: 'Es la D, oxígeno. Este paciente está hipoxémico, y ante eso lo primero siempre es corregir la oxigenación. Conecta esto con lo que dijimos antes: en la bronquiolitis pura, el broncodilatador y el corticoide tienen un beneficio marginal, y lo que de verdad cambia el pronóstico es el oxígeno.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.1.028 · Síndrome bronquial obstructivo",
      "stem": "Lactante de 18 meses, con 4 episodios de obstrucción bronquial con sibilancias en los últimos 12 meses, todos tratados con salbutamol y uno que requirió hospitalización. Entre los episodios está asintomático y con buen incremento ponderal. Hoy consulta en control, sin dificultad respiratoria.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Salbutamol inhalado diario de forma permanente"
        },
        {
          "letter": "B",
          "text": "Amoxicilina profiláctica durante el invierno"
        },
        {
          "letter": "C",
          "text": "Prednisona oral diaria por 3 meses"
        },
        {
          "letter": "D",
          "text": "Corticoide inhalado de mantención con aerocámara y seguimiento"
        },
        {
          "letter": "E",
          "text": "No requiere tratamiento, porque hoy está asintomático"
        }
      ],
      "correct": "D",
      "explanation": "Tres o más episodios obstructivos en el año en un menor de 2 años definen un síndrome bronquial obstructivo recurrente. Con episodios frecuentes o severos se indica corticoide inhalado de mantención con aerocámara. El salbutamol es solo de rescate y el corticoide oral crónico no se usa.",
      "say": {
        "stem": "Lactante de dieciocho meses, con cuatro episodios de obstrucción bronquial con sibilancias en el último año, todos tratados con salbutamol y uno con hospitalización. Entre los episodios está bien, y hoy viene a control sin dificultad respiratoria.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: salbutamol diario permanente, amoxicilina profiláctica, prednisona oral por tres meses, corticoide inhalado de mantención con aerocámara o nada porque está asintomático. Piénsalo.",
        "answer": "Es la D. Tres o más episodios en un año es un síndrome bronquial obstructivo recurrente, y con crisis frecuentes y una hospitalización corresponde un corticoide inhalado de mantención. No tratar porque hoy está bien tienta, pero el objetivo es prevenir la próxima crisis."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.5.006 · Oxigenoterapia",
      "stem": "Lactante de 4 meses con bronquiolitis de 3 días de evolución. Al examen: FR 62 rpm, tiraje subcostal e intercostal, sibilancias espiratorias y saturación de 89% con aire ambiental. Está alerta y se alimenta con dificultad.",
      "question": "Respecto del oxígeno, ¿cuál es la indicación más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "No indicar oxígeno hasta que la saturación baje de 85%"
        },
        {
          "letter": "B",
          "text": "Nebulizar salbutamol con aire comprimido en vez de oxígeno"
        },
        {
          "letter": "C",
          "text": "Oxígeno al 100% con mascarilla con reservorio para lograr saturación de 100%"
        },
        {
          "letter": "D",
          "text": "Intubación y ventilación mecánica inmediatas"
        },
        {
          "letter": "E",
          "text": "Oxígeno por naricera de bajo flujo, ajustado para mantener saturación de 93% o más"
        }
      ],
      "correct": "E",
      "explanation": "Una saturación bajo 93% en un lactante con bronquiolitis es criterio de hospitalización y de oxigenoterapia. Se usa naricera de bajo flujo, titulada para saturar 93% o más. No se busca saturar 100% y el niño está alerta, sin criterio de ventilación mecánica.",
      "say": {
        "stem": "Lactante de cuatro meses con bronquiolitis de tres días. Respira a sesenta y dos por minuto, tiene tiraje subcostal e intercostal, sibilancias, y satura ochenta y nueve por ciento con aire ambiental. Está alerta, pero le cuesta alimentarse.",
        "question": "Respecto del oxígeno, ¿cuál es la indicación más adecuada?",
        "options": "Las opciones: esperar a que sature menos de ochenta y cinco, nebulizar con aire en vez de oxígeno, mascarilla con reservorio para saturar cien, intubar de inmediato o naricera de bajo flujo para saturar noventa y tres o más. Piénsalo.",
        "answer": "Es la E. Bajo noventa y tres por ciento, el lactante con bronquiolitis necesita oxígeno, y se da por naricera de bajo flujo titulando a noventa y tres o más. La mascarilla al cien por ciento tienta, pero no se busca saturar cien, y en la bronquiolitis el oxígeno bien titulado es lo que cambia el pronóstico."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2017 · Pregunta 72",
      "stem": "Un recién nacido de 2 semanas es hospitalizado por presentar apneas. La madre refiere tos de 3 semanas de evolución, en crisis, que en ocasiones la hace vomitar.",
      "question": "¿Cuál es el tratamiento farmacológico más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Amoxicilina"
        },
        {
          "letter": "B",
          "text": "Azitromicina"
        },
        {
          "letter": "C",
          "text": "Ceftriaxona"
        },
        {
          "letter": "D",
          "text": "Oseltamivir"
        },
        {
          "letter": "E",
          "text": "Aciclovir"
        }
      ],
      "correct": "B",
      "explanation": "Apneas en un recién nacido con una madre con tos paroxística emetizante de 3 semanas sugieren coqueluche (Bordetella pertussis). El tratamiento es un macrólido; en menores de 1 mes se prefiere azitromicina por el menor riesgo de estenosis hipertrófica del píloro. Se confirma con PCR y se trata también a los contactos.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil diecisiete. Un recién nacido de dos semanas se hospitaliza por apneas. Su madre tiene tos en crisis hace tres semanas, que a veces la hace vomitar.",
        "question": "¿Cuál es el tratamiento farmacológico más adecuado?",
        "options": "Las opciones: amoxicilina, azitromicina, ceftriaxona, oseltamivir o aciclovir. Piénsalo.",
        "answer": "Es la B. Es un coqueluche, que en el recién nacido se presenta con apneas, y se trata con azitromicina, el macrólido preferido en menores de un mes. La ceftriaxona tienta por la gravedad, pero no cubre bien la Bordetella."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.4.014 · Gases en sangre arterial",
      "stem": "Un lactante de 10 meses con síndrome bronquial obstructivo lleva 3 horas en tratamiento con salbutamol y oxígeno. Está cada vez más somnoliento, con menor esfuerzo respiratorio y murmullo pulmonar disminuido. Los gases arteriales muestran pH 7,22, presión de dióxido de carbono 62 mmHg, HCO3- 24 mEq/L y presión de oxígeno 58 mmHg.",
      "question": "¿Cuál es la interpretación más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Acidosis respiratoria aguda con hipoxemia: falla respiratoria global"
        },
        {
          "letter": "B",
          "text": "Alcalosis respiratoria compensada"
        },
        {
          "letter": "C",
          "text": "Acidosis metabólica compensada"
        },
        {
          "letter": "D",
          "text": "Gases normales para la edad"
        },
        {
          "letter": "E",
          "text": "Alcalosis metabólica"
        }
      ],
      "correct": "A",
      "explanation": "pH bajo con presión de dióxido de carbono elevada y bicarbonato normal es acidosis respiratoria aguda (sin compensación renal). Junto con hipoxemia, somnolencia y menor esfuerzo, indica insuficiencia respiratoria global por agotamiento. En una obstrucción bronquial, una presión de dióxido de carbono normal o alta es signo de gravedad. Requiere unidad de paciente crítico y probable soporte ventilatorio.",
      "say": {
        "stem": "Un lactante con obstrucción bronquial está cada vez más somnoliento, con pH de siete coma veintidós, CO dos de sesenta y dos y bicarbonato normal.",
        "question": "¿Cuál es la interpretación más adecuada?",
        "options": "Las opciones: acidosis respiratoria aguda con hipoxemia, alcalosis respiratoria, acidosis metabólica, gases normales o alcalosis metabólica. Piénsalo.",
        "answer": "Es la A. pH bajo con CO dos alto y bicarbonato normal es una acidosis respiratoria aguda, que con la hipoxemia indica falla respiratoria global. La acidosis metabólica tienta porque el pH está bajo, pero el bicarbonato es normal y el problema es la retención de CO dos."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.4.025 · Serología y técnicas de aislamiento viral y bacteriano",
      "stem": "Un lactante de 3 meses, en época invernal, presenta coriza, tos y luego dificultad respiratoria con sibilancias y crepitaciones difusas. Se hospitaliza y se desea identificar el agente viral para cohortear a los pacientes.",
      "question": "¿Cuál es el examen más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Serología IgM para virus respiratorios"
        },
        {
          "letter": "B",
          "text": "Inmunofluorescencia o PCR viral en aspirado o hisopado nasofaríngeo"
        },
        {
          "letter": "C",
          "text": "Hemocultivo"
        },
        {
          "letter": "D",
          "text": "Cultivo de expectoración"
        },
        {
          "letter": "E",
          "text": "Recuento de eosinófilos"
        }
      ],
      "correct": "B",
      "explanation": "El diagnóstico etiológico de las infecciones respiratorias virales agudas se realiza con detección de antígenos (inmunofluorescencia) o PCR en muestra nasofaríngea, rápida y sensible. En la bronquiolitis el agente más frecuente es el virus respiratorio sincicial. La serología es tardía y poco útil en infecciones agudas; el hemocultivo y el cultivo de expectoración son para bacterias.",
      "say": {
        "stem": "Un lactante de tres meses hospitalizado en invierno por bronquiolitis requiere identificar el virus para agrupar pacientes.",
        "question": "¿Cuál es el examen más adecuado?",
        "options": "Las opciones: serología IgM, inmunofluorescencia o PCR nasofaríngea, hemocultivo, cultivo de expectoración o eosinófilos. Piénsalo.",
        "answer": "Es la B. Los virus respiratorios se identifican con inmunofluorescencia o PCR en muestra nasofaríngea. La serología tienta porque es un examen viral, pero tarda semanas en positivizarse y no sirve en la infección aguda."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.04.4.005 · Detección de agentes virales por inmunofluorescencia",
      "stem": "Un lactante de 4 meses es hospitalizado en julio por bronquiolitis con requerimiento de oxígeno. Se solicita panel viral por inmunofluorescencia en aspirado nasofaríngeo.",
      "question": "¿Cuál es la principal utilidad de este examen en este paciente?",
      "options": [
        {
          "letter": "A",
          "text": "Decidir el uso de antibióticos de rutina"
        },
        {
          "letter": "B",
          "text": "Identificar el virus (VRS, influenza, adenovirus, parainfluenza, metapneumovirus) para aislar y cohortar pacientes, y para vigilancia epidemiológica"
        },
        {
          "letter": "C",
          "text": "Confirmar el diagnóstico de bronquiolitis, que no puede hacerse sin él"
        },
        {
          "letter": "D",
          "text": "Indicar corticoides"
        },
        {
          "letter": "E",
          "text": "Evaluar la gravedad del cuadro"
        }
      ],
      "correct": "B",
      "explanation": "La bronquiolitis es un diagnóstico clínico. En hospitalizados, la inmunofluorescencia del aspirado nasofaríngeo identifica el virus en horas, lo que permite cohortar pacientes, aplicar precauciones de contacto o gotitas y hacer vigilancia epidemiológica; si muestra influenza, orienta a oseltamivir. No define la gravedad ni justifica antibióticos o corticoides.",
      "say": {
        "stem": "Un lactante de cuatro meses es hospitalizado en invierno por bronquiolitis con oxígeno, y se pide inmunofluorescencia viral en aspirado nasofaríngeo.",
        "question": "¿Cuál es la principal utilidad de este examen?",
        "options": "Las opciones: decidir antibióticos, identificar el virus para aislar, cohortar y vigilar, confirmar el diagnóstico de bronquiolitis, indicar corticoides o evaluar gravedad. Piénsalo.",
        "answer": "Es la B. La inmunofluorescencia identifica el virus rápido y sirve para aislar y cohortar a los hospitalizados. Confirmar la bronquiolitis tienta, pero ese diagnóstico es clínico."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'El score manda', tag: 'Memorízalo', kind: 'key', items: [
          { t: 'Cinco o menos', d: 'Casa, con salbutamol',
            say: 'Cerremos con las reglas de oro. Score de cinco o menos: manejo en casa.' },
          { t: 'Seis a ocho', d: 'Hospitalización abreviada, una hora',
            say: 'Entre seis y ocho: hospitalización abreviada por una hora, y si persiste, corticoide y una segunda hora.' },
          { t: 'Nueve o más', d: 'Hospitalizar de inmediato',
            say: 'Nueve o más: se hospitaliza de inmediato, sin intentar nada abreviado.' },
        ] },
        { title: 'Lo que se pregunta distinto', tag: 'No lo olvides', kind: 'alert', items: [
          { t: 'Tórax silente', d: 'Es lo más grave, no una mejoría',
            say: 'El tórax silente es la máxima gravedad, jamás lo leas como mejoría.' },
          { t: 'El oxígeno es lo que salva', d: 'Más que el broncodilatador o el corticoide',
            say: 'Y si te llevas una sola idea de hoy: en la bronquiolitis, el score de Tal decide todo, y el oxígeno es lo que de verdad cambia el pronóstico. Nos vemos en la próxima clase, con la laringitis.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Bronquiolitis y SBO: el score decide la conducta',
    root: N('start', 'Lactante con sibilancias', 'Primer episodio, antes de los dos años',
      'Tienes un lactante con su primer episodio de sibilancias, antes de los dos años. Antes de decidir nada, calcula el score de Tal: frecuencia respiratoria, sibilancias, cianosis y tiraje.',
      ['', N('q', '¿Cuánto suma el score de Tal?', 'De cero a doce puntos',
        'Súmalos y mira en qué rango cae.',
        ['Cinco o menos', N('ok', 'Leve', 'Salbutamol en casa y control',
          'Cinco o menos es leve. Se maneja en la casa, con salbutamol con aerocámara y control si no mejora.')],
        ['Seis a ocho', N('do', 'Hospitalización abreviada', 'Salbutamol cada diez minutos, una hora',
          'Entre seis y ocho es moderado. Inicias hospitalización abreviada: salbutamol cada diez minutos, durante una hora completa, y luego reevalúas.',
          ['Baja a cinco o menos', N('ok', 'Alta', 'Salbutamol cada cuatro horas y control',
            'Si al término de la hora bajó a cinco o menos, das el alta con salbutamol cada cuatro horas y control al día siguiente.')],
          ['Sigue entre seis y ocho', N('alert', 'Corticoide y segunda hora', 'Prednisona oral, más otra hora de salbutamol',
            'Si sigue igual, agregas un corticoide oral e inicias una segunda hora de salbutamol. Si tampoco mejora, ahí sí se hospitaliza para oxígeno y manejo continuo.')])],
        ['Nueve a doce', N('alert', 'Severo: hospitalizar ya', 'Oxígeno y observación estricta',
          'Nueve o más es severo, y aquí no hay hospitalización abreviada: se hospitaliza de inmediato, con oxígeno, y se considera apoyo ventilatorio si no responde.')])]),
  },
};
