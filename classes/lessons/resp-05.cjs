// Clase 1.5 de Neumología — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neumologia.cjs (resp-05).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'resp-05',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Antibiótico según Anthonisen, oxígeno con techo y ventilación no invasiva a tiempo',
      say: 'Bienvenidos. En la clase anterior vimos el EPOC estable, el paciente en su día a día. Hoy vemos lo que pasa cuando se descompensa: la exacerbación aguda, una de las urgencias respiratorias más frecuentes y un tema de máxima frecuencia en el EUNACOM. Casi todo lo que se pregunta cabe en cuatro decisiones: si lleva antibiótico, cuánto oxígeno darle, cuántos días de corticoide, y cuándo ponerle ventilación no invasiva. Partamos por entender qué se descompensa.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: '¿Qué se descompensa?',
      nodes: [
        { id: 'gat', col: 0, row: 1, k: 'cause', t: 'Infección bronquial', s: '75–80 % de los casos' },
        { id: 'otr', col: 0, row: 3, k: 'cause', t: 'Contaminación o mala adherencia', s: 'El resto' },
        { id: 'res', col: 1, row: 2, k: 'mech', t: 'Más resistencia al flujo', s: 'El aire no alcanza a salir' },
        { id: 'hip', col: 2, row: 2, k: 'mech', t: 'Hiperinsuflación dinámica', s: 'Diafragma aplanado y en desventaja' },
        { id: 'tra', col: 3, row: 1, k: 'effect', t: 'Más trabajo respiratorio', s: 'Y peor relación V/Q' },
        { id: 'o2', col: 4, row: 0, k: 'risk', t: 'Hipoxemia', s: 'Lo primero que aparece' },
        { id: 'co2', col: 4, row: 2, k: 'alert', t: 'Fatiga e hipercapnia', s: 'Acidosis respiratoria' },
      ],
      edges: [
        { from: 'gat', to: 'res' }, { from: 'otr', to: 'res' },
        { from: 'res', to: 'hip', label: 'atrapamiento' }, { from: 'hip', to: 'tra' },
        { from: 'tra', to: 'o2' }, { from: 'tra', to: 'co2', label: 'si se agota' },
      ],
      steps: [
        { show: ['gat', 'otr'], note: 'Empeora más allá de lo habitual, en menos de 14 días',
          say: 'La exacerbación es un empeoramiento agudo de la disnea, la tos o la expectoración, más allá de la variación de todos los días, que se instala en menos de catorce días y obliga a ajustar el tratamiento. El gatillante, en tres de cada cuatro pacientes, es una infección bronquial, bacteriana o viral. El resto se explica por contaminación ambiental o por dejar los inhaladores.' },
        { show: ['res', 'hip'], note: 'El aire queda atrapado',
          say: 'La inflamación aumenta la resistencia al flujo, y el aire que entra no alcanza a salir. Se atrapa, y el pulmón se hiperinsufla. Eso aplana el diafragma y lo deja en desventaja mecánica: es un músculo que trabaja más y rinde menos.' },
        { show: ['tra', 'o2'], note: 'Más trabajo, peor intercambio',
          say: 'El resultado es más trabajo respiratorio y un desbalance entre ventilación y perfusión. Lo primero que aparece es la hipoxemia.' },
        { show: ['co2'], note: 'La fatiga trae el CO2',
          say: 'Y si los músculos se agotan, el paciente deja de ventilar lo suficiente, retiene dióxido de carbono y cae en acidosis respiratoria. Guarda esta cadena, porque explica las dos decisiones más preguntadas de hoy: por qué el oxígeno tiene un techo y por qué la ventilación no invasiva salva vidas.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Anthonisen',
      title: 'Tres síntomas cardinales',
      cards: [
        { title: 'Criterios cardinales', tag: 'Anthonisen', kind: 'criteria', items: [
          { t: 'Más disnea', d: 'Sobre su disnea basal',
            say: 'La primera decisión es el antibiótico, y se toma con los criterios de Anthonisen. Son tres síntomas cardinales. El primero, más disnea que la basal del paciente.' },
          { t: 'Más volumen de esputo', d: 'Expectora más que de costumbre',
            say: 'El segundo, más volumen de esputo: el paciente expectora más que de costumbre.' },
          { t: 'Esputo purulento', d: 'Aparece o aumenta la purulencia',
            say: 'Y el tercero, el que más pesa: la purulencia. Que el esputo se vuelva verde o amarillo, o que aumente su purulencia. Es el marcador de infección bacteriana, y por eso manda en la decisión del antibiótico.' },
        ] },
        { title: 'Clasificación', tag: 'Por cuántos hay', kind: 'key', items: [
          { t: 'Tipo 1: los 3 criterios', d: 'Grave',
            say: 'Con esos tres síntomas se clasifica. El tipo uno, grave, tiene los tres criterios.' },
          { t: 'Tipo 2: 2 criterios', d: 'Moderada',
            say: 'El tipo dos, moderado, tiene dos de los tres.' },
          { t: 'Tipo 3: 1 criterio + 1 menor', d: 'Tos, sibilancias, fiebre o infección alta, en 5 días',
            say: 'Y el tipo tres, leve, tiene un solo criterio cardinal más al menos un criterio menor en los últimos cinco días: tos, sibilancias, fiebre o una infección de la vía aérea superior.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Anthonisen',
      title: '¿Lleva antibiótico?',
      nodes: [
        { id: 'ex', col: 0, row: 1, k: 'start', t: 'Exacerbación de EPOC', s: 'Contar criterios cardinales' },
        { id: 't1', col: 1, row: 0, k: 'q', t: 'Tipo 1', s: '3 criterios' },
        { id: 't2', col: 1, row: 2, k: 'q', t: 'Tipo 2', s: '¿Uno es la purulencia?' },
        { id: 't3', col: 1, row: 4, k: 'q', t: 'Tipo 3', s: '1 criterio + 1 menor' },
        { id: 'si', col: 3, row: 1, k: 'alert', t: 'Antibiótico', s: 'Tipo 1, o tipo 2 con purulencia' },
        { id: 'no', col: 3, row: 3, k: 'good', t: 'Sin antibiótico de rutina', s: 'Tipo 2 sin purulencia · tipo 3' },
      ],
      edges: [
        { from: 'ex', to: 't1' }, { from: 'ex', to: 't2' }, { from: 'ex', to: 't3' },
        { from: 't1', to: 'si', label: 'siempre' },
        { from: 't2', to: 'si', label: 'con purulencia' }, { from: 't2', to: 'no', label: 'sin purulencia' },
        { from: 't3', to: 'no' },
      ],
      steps: [
        { show: ['ex', 't1', 'si'], note: 'Tipo 1: siempre',
          say: 'Ahora la decisión. En el tipo uno, con los tres criterios, el antibiótico va siempre.' },
        { show: ['t2'], note: 'El tipo 2 se divide en dos',
          say: 'El tipo dos es el que se pregunta, porque se divide en dos. La pregunta que tienes que hacerte es una sola: ¿uno de los dos criterios es la purulencia?' },
        { show: ['no'], note: 'Disnea + volumen sin pus: no',
          say: 'Si es así, lleva antibiótico. Pero si el paciente tiene más disnea y más volumen de esputo, y el esputo sigue claro, no se indica antibiótico de rutina. Esa es la trampa del tipo dos: dos criterios no bastan si ninguno es el pus.' },
        { show: ['t3'], note: 'Tipo 3: optimizar broncodilatadores',
          say: 'Y en el tipo tres, leve, tampoco hay antibiótico de rutina. Se optimizan los broncodilatadores y se reevalúa.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Microbiología',
      title: 'Qué gérmenes y con qué',
      cards: [
        { title: 'Gérmenes', tag: 'Tres clásicos', kind: 'key', items: [
          { t: 'Haemophilus influenzae', d: 'El más frecuente',
            say: 'Cuando la causa es bacteriana, hay tres gérmenes clásicos. El más frecuente es Haemophilus influenzae, y eso se pregunta directo.' },
          { t: 'Neumococo y Moraxella', d: 'Los otros dos',
            say: 'Lo siguen el neumococo y Moraxella catarrhalis.' },
          { t: 'Pseudomonas', d: 'Obstrucción muy severa o bronquiectasias',
            say: 'Y en el paciente con obstrucción muy severa o con bronquiectasias, hay que pensar también en Pseudomonas aeruginosa.' },
        ] },
        { title: 'Primera línea en Chile', tag: 'Oral', kind: 'pharma', items: [
          { t: 'Amoxicilina/clavulánico 875/125 mg', d: 'Cada 12 h por 5 a 7 días',
            say: 'El antibiótico de primera línea en Chile es amoxicilina con ácido clavulánico, ochocientos setenta y cinco con ciento veinticinco miligramos cada doce horas, por cinco a siete días. El clavulánico está ahí por el Haemophilus y la Moraxella, que pueden producir betalactamasa.' },
          { t: 'Alternativas', d: 'Azitromicina 500 mg/día 3–5 días · cefuroximo 500 mg c/12 h',
            say: 'Las alternativas son azitromicina, quinientos miligramos al día por tres a cinco días, o cefuroximo, quinientos miligramos cada doce horas.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Oxígeno',
      title: 'Por qué el oxígeno tiene techo',
      nodes: [
        { id: 'hi', col: 0, row: 2, k: 'cause', t: 'Oxígeno a alto flujo', s: 'Mascarilla con reservorio' },
        { id: 'vq', col: 1, row: 0, k: 'mech', t: 'Se pierde la vasoconstricción hipóxica', s: 'Perfunde alvéolos sin ventilar' },
        { id: 'hal', col: 1, row: 2, k: 'mech', t: 'Efecto Haldane', s: 'La Hb suelta el CO2' },
        { id: 'est', col: 1, row: 4, k: 'mech', t: 'Menos estímulo hipóxico', s: 'Ventila menos' },
        { id: 'co2', col: 2, row: 2, k: 'effect', t: 'Hipercapnia brusca', s: 'Acidosis respiratoria' },
        { id: 'nar', col: 3, row: 2, k: 'alert', t: 'Narcosis hipercápnica', s: 'Asterixis, sopor, coma' },
      ],
      edges: [
        { from: 'hi', to: 'vq' }, { from: 'hi', to: 'hal' }, { from: 'hi', to: 'est' },
        { from: 'vq', to: 'co2' }, { from: 'hal', to: 'co2' }, { from: 'est', to: 'co2' },
        { from: 'co2', to: 'nar' },
      ],
      steps: [
        { show: ['hi'], note: 'El error clásico',
          say: 'Segunda decisión: cuánto oxígeno. El paciente llega desaturado, y la tentación es ponerle una mascarilla con reservorio a quince litros. Ese es el error clásico, y vamos a ver por qué.' },
        { show: ['vq'], note: 'Empeora la relación V/Q',
          say: 'Primero, el pulmón del EPOC cierra los vasos de los alvéolos que ventilan mal: es la vasoconstricción hipóxica, un mecanismo protector. El exceso de oxígeno la anula, la sangre vuelve a pasar por alvéolos que no ventilan, y el desbalance empeora.' },
        { show: ['hal', 'est'], note: 'Dos mecanismos más',
          say: 'Segundo, el efecto Haldane: la hemoglobina oxigenada suelta el dióxido de carbono hacia el plasma. Y tercero, se atenúa el estímulo hipóxico que empujaba a este paciente a respirar.' },
        { show: ['co2', 'nar'], note: 'Somnolencia con saturación perfecta',
          say: 'Los tres mecanismos llevan al mismo lugar: una hipercapnia brusca, acidosis respiratoria y encefalopatía hipercápnica, con asterixis, somnolencia y letargia, hasta el coma y el paro. Ojo con el enunciado típico: un EPOC que se pone somnoliento con una saturación perfecta no mejoró, se está narcotizando.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Oxígeno',
      title: 'Oxígeno controlado',
      cards: [
        { title: 'La meta', tag: 'Con techo', kind: 'alert', items: [
          { t: 'SatO2 88–92 %', d: 'O PaO2 entre 55 y 65 mmHg',
            say: 'Por eso el oxígeno se titula con una meta estricta: saturación entre ochenta y ocho y noventa y dos por ciento, o una presión arterial de oxígeno entre cincuenta y cinco y sesenta y cinco. Ni más ni menos: es un rango, no un mínimo.' },
        ] },
        { title: 'Cómo se da', tag: 'Bajo flujo', kind: 'pharma', items: [
          { t: 'Cánula nasal 1–2 L/min', d: 'O mascarilla Venturi 24–28 %',
            say: 'Se da con cánula nasal a uno o dos litros por minuto, o con mascarilla Venturi al veinticuatro o veintiocho por ciento, que entrega una fracción de oxígeno fija y conocida.' },
          { t: 'Nunca reservorio a alto flujo', d: 'Si desatura: pensar en ventilar',
            say: 'Y si con eso no llega a la meta, la respuesta no es subir el oxígeno sin límite. Es pedir gases y pensar en ventilación no invasiva, que es lo que vamos a ver.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Broncodilatador y corticoide',
      cards: [
        { title: 'Broncodilatación', tag: 'SABA + SAMA', kind: 'pharma', items: [
          { t: 'Salbutamol + ipratropio', d: '4 a 8 puff de cada uno, con aerocámara',
            say: 'Tercera decisión, los fármacos, que van en todo paciente exacerbado. Primero, broncodilatación intensiva con dos fármacos: salbutamol, un beta dos agonista de acción corta, más bromuro de ipratropio, un anticolinérgico de acción corta. Cuatro a ocho puff de cada uno con aerocámara.' },
          { t: 'Cada 20–30 min por 2 horas', d: 'Luego cada 2 a 4 horas según respuesta',
            say: 'Se repiten cada veinte a treinta minutos durante las primeras dos horas, y luego se espacian cada dos a cuatro horas según la respuesta.' },
        ] },
        { title: 'Corticoide sistémico', tag: 'Estudio REDUCE', kind: 'key', items: [
          { t: 'Prednisona 40 mg/día oral', d: 'Por 5 días exactos',
            say: 'Segundo, corticoide sistémico por vía oral: prednisona cuarenta miligramos al día, durante cinco días. Es la dosis del estudio REDUCE, y es un número que tienes que saber.' },
          { t: 'Sin pauta descendente', d: '14 días: sin beneficio, más complicaciones',
            say: 'No se prolonga ni se hace descenso gradual. Catorce días no mejoran la recuperación ni previenen recaídas, y triplican las complicaciones metabólicas e infecciosas. En el examen, cualquier alternativa de catorce días o con descenso es la trampa.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Gravedad',
      title: 'Dónde se maneja',
      cards: [
        { title: 'Sin acidosis', tag: 'Leve y moderada', kind: 'normal', items: [
          { t: 'Leve: ambulatoria', d: 'Sat > 92 %, más broncodilatador',
            say: 'La gravedad decide el lugar. La exacerbación leve, con disnea leve y sin insuficiencia respiratoria, se maneja en forma ambulatoria, aumentando los broncodilatadores de acción corta y con control médico.' },
          { t: 'Moderada: FR > 24, sin acidosis', d: 'Doble broncodilatador + prednisona',
            say: 'La moderada tiene más disnea y taquipnea sobre veinticuatro por minuto, pero no tiene acidosis. Lleva doble broncodilatador y prednisona, en observación en la urgencia o en hospitalización básica.' },
        ] },
        { title: 'Con acidosis', tag: 'Grave y muy grave', kind: 'alert', items: [
          { t: 'Grave: pH 7,30–7,35', d: 'FR > 30, tiraje: VMNI precoz, cuidados medios',
            say: 'La grave tiene frecuencia respiratoria sobre treinta, tiraje y acidosis leve, con pH entre siete coma treinta y siete coma treinta y cinco. Aquí se suma la ventilación no invasiva precoz, en una sala de cuidados medios.' },
          { t: 'Muy grave: pH < 7,25, sopor', d: 'VMNI de rescate o intubación, en UCI',
            say: 'Y la muy grave tiene acidosis severa, con pH bajo siete coma veinticinco, sopor o inestabilidad: ventilación no invasiva inmediata de rescate o intubación, e ingreso a la unidad de cuidados intensivos. Fíjate que lo que separa los niveles no es la saturación, sino el pH.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Ventilación no invasiva',
      title: 'Los gases deciden',
      nodes: [
        { id: 'tto', col: 0, row: 1, k: 'start', t: 'Tratamiento médico óptimo', s: 'Broncodilatador, corticoide, O2 controlado' },
        { id: 'gas', col: 1, row: 1, k: 'q', t: 'Gases arteriales', s: '¿pH < 7,35 y PaCO2 > 45?' },
        { id: 'sig', col: 2, row: 0, k: 'good', t: 'Seguir igual', s: 'Sin acidosis' },
        { id: 'ci', col: 2, row: 2, k: 'q', t: '¿Contraindicación?', s: 'Glasgow < 8, shock, vómitos…' },
        { id: 'vni', col: 3, row: 1, k: 'good', t: 'VMNI (BiPAP)', s: 'Primera elección' },
        { id: 'iot', col: 3, row: 3, k: 'alert', t: 'Intubación', s: 'Ventilación invasiva en UCI' },
      ],
      edges: [
        { from: 'tto', to: 'gas' }, { from: 'gas', to: 'sig', label: 'no' }, { from: 'gas', to: 'ci', label: 'sí' },
        { from: 'ci', to: 'vni', label: 'no' }, { from: 'ci', to: 'iot', label: 'sí' },
      ],
      steps: [
        { show: ['tto', 'gas'], note: 'Siempre gases en el exacerbado',
          say: 'Cuarta decisión, la ventilación. Con el tratamiento médico en marcha, se piden gases arteriales, porque la saturación no te muestra el dióxido de carbono.' },
        { show: ['sig'], note: 'Sin acidosis: se sigue el tratamiento',
          say: 'Si no hay acidosis, se sigue con el tratamiento médico y se reevalúa.' },
        { show: ['ci'], note: 'pH bajo 7,35 y CO2 sobre 45',
          say: 'Pero si hay acidosis respiratoria hipercápnica, con pH bajo siete coma treinta y cinco y dióxido de carbono sobre cuarenta y cinco, a pesar del tratamiento óptimo, el paciente necesita apoyo ventilatorio. Antes, una pregunta: ¿hay alguna contraindicación?' },
        { show: ['vni'], note: 'El estándar de oro',
          say: 'Si no la hay, va ventilación mecánica no invasiva en modo BiPAP. Es el estándar de oro y la primera elección. Fíjate que la indicación la da el pH, no la saturación: un paciente vigil y que coopera, con pH de siete coma veintisiete, va a BiPAP, no a intubación.' },
        { show: ['iot'], note: 'Si hay contraindicación',
          say: 'Si hay una contraindicación, o la no invasiva fracasa, se intuba y el paciente pasa a ventilación mecánica invasiva en la unidad de cuidados intensivos.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Ventilación no invasiva',
      title: 'Qué logra y cuándo no',
      cards: [
        { title: 'Qué logra', tag: 'BiPAP', kind: 'key', items: [
          { t: 'Descansa el músculo fatigado', d: 'Más volumen corriente, barre el CO2',
            say: '¿Por qué funciona? Vuelve a la cadena del inicio: el problema era un músculo agotado. La ventilación no invasiva lo descarga, aumenta el volumen corriente y barre el dióxido de carbono acumulado.' },
          { t: 'Reduce intubación > 50 %', d: 'Y la mortalidad intrahospitalaria',
            say: 'Con eso reduce en más de la mitad la necesidad de intubación, y disminuye la mortalidad intrahospitalaria. Por eso no se demora: si hay acidosis, se instala.' },
          { t: 'IPAP 10–14 · EPAP 4–6 cmH2O', d: 'Sesiones de 2 a 4 horas continuas',
            say: 'Como referencia, se parte con una presión inspiratoria de diez a catorce y una espiratoria de cuatro a seis centímetros de agua, en sesiones continuas de dos a cuatro horas.' },
        ] },
        { title: 'Contraindicaciones', tag: 'Directo a intubar', kind: 'alert', items: [
          { t: 'Paro inminente · Glasgow < 8', d: 'Sin protección de la vía aérea',
            say: 'Las contraindicaciones son las situaciones en que la mascarilla no alcanza o es peligrosa: paro cardiorrespiratorio inminente, y un Glasgow bajo ocho sin protección de la vía aérea.' },
          { t: 'Shock con drogas vasoactivas', d: 'Vómitos incoercibles · trauma facial grave',
            say: 'También la inestabilidad hemodinámica con drogas vasoactivas, los vómitos incoercibles y el trauma facial grave. En esos casos, intubación.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos las cuatro decisiones en un solo árbol, en el orden en que las tomas en la urgencia.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Más disnea + más esputo, sin purulencia', 'Sin antibiótico de rutina', 'Dar antibiótico por tener 2 criterios'],
          say: 'Repasemos las trampas. Más disnea y más esputo, pero sin purulencia: es un tipo dos sin pus, y no lleva antibiótico de rutina. El error es darlo porque hay dos criterios.' },
        { cells: ['EPOC desaturado en urgencia', 'O2 por cánula o Venturi, meta 88–92 %', 'Mascarilla con reservorio a 15 L/min'],
          say: 'EPOC desaturado en la urgencia: oxígeno por cánula o Venturi, con meta de ochenta y ocho a noventa y dos. El error es la mascarilla con reservorio a quince litros.' },
        { cells: ['Somnoliento tras subir el O2', 'Bajar FiO2 + VMNI', 'Sedar o subir más el oxígeno'],
          say: 'Si se pone somnoliento con asterixis después de subirle el oxígeno, es narcosis: se baja el oxígeno a la meta y se instala ventilación no invasiva. Sedarlo o subir más el oxígeno lo empeora.' },
        { cells: ['Corticoide sistémico', 'Prednisona 40 mg por 5 días', '14 días o pauta descendente'],
          say: 'Corticoide: prednisona cuarenta miligramos por cinco días. Catorce días o una pauta descendente es la alternativa incorrecta.' },
        { cells: ['pH < 7,35 y PaCO2 > 45, vigil', 'VMNI (BiPAP)', 'Intubar de entrada o dar bicarbonato'],
          say: 'Y acidosis respiratoria en un paciente vigil que coopera: BiPAP. Intubar de entrada o corregir el pH con bicarbonato son las dos trampas. El pH se corrige ventilando.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 70 años, EPOC por tabaquismo (40 paq/año), con 48 horas de aumento de disnea hasta mínimos esfuerzos, más volumen de esputo y secreciones verdes y espesas. FR 28 rpm, FC 102 lpm, PA 135/85 mmHg, SatO2 86% ambiental. Murmullo pulmonar disminuido, espiración prolongada, roncus y sibilancias difusas.',
      question: '¿Cuál es el manejo más adecuado?',
      options: [
        { letter: 'A', text: 'O2 por mascarilla con reservorio, salbutamol y prednisona 40 mg por 14 días con descenso' },
        { letter: 'B', text: 'O2 por cánula con meta 88–92%, salbutamol + ipratropio, prednisona 40 mg por 5 días y amoxicilina/clavulánico' },
        { letter: 'C', text: 'O2 por cánula con meta 88–92%, salbutamol + ipratropio y prednisona 40 mg por 5 días, sin antibiótico' },
        { letter: 'D', text: 'Intubación orotraqueal inmediata y ventilación mecánica invasiva' },
        { letter: 'E', text: 'Aminofilina endovenosa y ciprofloxacino oral' },
      ],
      correct: 'B',
      explanation: 'Tiene los 3 criterios de Anthonisen (disnea, volumen y purulencia): tipo 1, lleva antibiótico (amoxicilina/clavulánico 875/125 c/12 h por 5–7 días). Además: O2 controlado con meta 88–92%, SABA + SAMA y prednisona 40 mg por 5 días. Se piden gases para buscar acidosis e indicar VMNI si corresponde.',
      say: {
        stem: 'Vamos con un caso. Hombre de setenta años con EPOC por tabaquismo, que lleva dos días con más disnea, ahora a mínimos esfuerzos, más volumen de esputo y secreciones verdes y espesas. Frecuencia respiratoria de veintiocho, saturación de ochenta y seis por ciento, y a la auscultación, espiración prolongada con roncus y sibilancias.',
        question: '¿Cuál es el manejo más adecuado?',
        options: 'Las opciones: reservorio con corticoide por catorce días, oxígeno controlado con doble broncodilatador, prednisona por cinco días y amoxicilina con clavulánico, lo mismo pero sin antibiótico, intubación inmediata, o aminofilina con ciprofloxacino. Piénsalo.',
        answer: 'Es la B. Cuenta los criterios: más disnea, más volumen y esputo verde. Son los tres, un Anthonisen tipo uno, así que el antibiótico va. La C es el distractor tentador, porque todo lo demás está bien, pero le quita el antibiótico a un paciente con purulencia. La A falla dos veces, en el oxígeno y en los días de corticoide. Y no hay nada que justifique intubar a alguien que todavía no tiene gases.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 159',
      stem: 'Un paciente de 67 años, con antecedente de una enfermedad pulmonar obstructiva crónica, en tratamiento con broncodilatadores inhalados, evoluciona con aumento importante de su disnea basal, asociado a cianosis y angustia. El paciente está vigil y orientado y en su examen físico tiene FR: 35x’, PA: 110/76 mmHg, FC: 110x’ y al examen pulmonar se aprecia uso de musculatura accesoria, cianosis, aumento del diámetro anteroposterior y sibilancias y roncus intensos bilaterales. Se ingresa al servicio de urgencia, recibiendo antibióticos y nebulizaciones con broncodilatadores por una hora, sin mejoría clínica. Se solicitan gases arteriales, que resultan PaCO2: 62 mmHg, PaO2: 56 mmHg, pH: 7,29 y HCO3: 27 mEq/L.',
      question: 'La conducta más adecuada, a continuación, es:',
      options: [
        { letter: 'A', text: 'Ventilación mecánica invasiva' },
        { letter: 'B', text: 'Aminofilina endovenosa' },
        { letter: 'C', text: 'Oxígeno por cánula nasal de alto flujo' },
        { letter: 'D', text: 'Ventilación no invasiva' },
        { letter: 'E', text: 'Bicarbonato de sodio endovenoso' },
      ],
      correct: 'D',
      explanation: 'EPOC descompensado con acidosis respiratoria hipercápnica (pH 7,29, PaCO2 62) pese al tratamiento inicial. Está vigil y orientado, sin contraindicaciones: ventilación no invasiva. La invasiva se reserva para el compromiso de conciencia o el fracaso de la VMNI.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de agosto de dos mil veintiuno. Hombre de sesenta y siete años con EPOC, con disnea intensa, cianosis y uso de musculatura accesoria, frecuencia respiratoria de treinta y cinco. Está vigil y orientado. Tras una hora de antibióticos y broncodilatadores no mejora, y los gases muestran un pH de siete coma veintinueve, un dióxido de carbono de sesenta y dos y un oxígeno de cincuenta y seis.',
        question: '¿Cuál es la conducta más adecuada a continuación?',
        options: 'Las opciones: ventilación invasiva, aminofilina, cánula nasal de alto flujo, ventilación no invasiva, o bicarbonato. Piénsalo.',
        answer: 'Es la D. Hay acidosis respiratoria hipercápnica, con pH bajo siete coma treinta y cinco y dióxido de carbono sobre cuarenta y cinco, a pesar del tratamiento. Y la clave está en una frase del enunciado: vigil y orientado. No hay contraindicación, así que va la no invasiva. La A es la trampa: el paciente se ve grave, pero la invasiva queda para el compromiso de conciencia o el fracaso del BiPAP. Y el bicarbonato no ventila.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 163',
      stem: 'Un paciente de 72 años, con antecedente de tabaquismo de 50 paquetes/año, complicado con enfermedad pulmonar obstructiva crónica severa en tratamiento con salmeterol y fluticasona inhalados, presenta aumento de su tos y disnea desde hace 3 días, agregándose expectoración mucopurulenta y fiebre hasta 38,4 °C. Luego evoluciona con marcado aumento de su disnea, la que se vuelve de reposo. Al examen físico se observa agitado, orientado en tiempo y espacio, disneico, con uso de musculatura accesoria, frecuencia respiratoria: 40 rpm, saturación de oxígeno: 84%, frecuencia cardíaca: 108 lpm y presión arterial: 146/92 mmHg. El examen pulmonar muestra aumento del diámetro torácico, hipersonoridad a la percusión, sibilancias y roncus bilaterales difusos, con algunos crépitos más intensos en el lado derecho. Los gases arteriales muestran: PaO₂: 65 mmHg, PaCO₂: 55 mmHg, HCO₃⁻: 28 mEq/L, pH: 7,29. Su hemograma muestra hematocrito: 50%, hemoglobina: 17 g/dL, plaquetas: 380.000/mm³ y glóbulos blancos: 14.500/mm³. Se inicia nebulización con broncodilatadores y se administran antibióticos y corticoides por vía endovenosa.',
      question: '¿Cuál es la conducta más adecuada para su manejo respiratorio?',
      options: [
        { letter: 'A', text: 'Oxígeno por mascarilla Venturi al 50%' },
        { letter: 'B', text: 'Oxígeno por mascarilla de no recirculación' },
        { letter: 'C', text: 'Oxígeno por naricera al 24%' },
        { letter: 'D', text: 'Oxígeno por cánula nasal de alto flujo a 15 L/min' },
        { letter: 'E', text: 'Ventilación mecánica no invasiva' },
      ],
      correct: 'E',
      explanation: 'Acidosis respiratoria hipercápnica (pH 7,29, PaCO2 55): el problema es ventilatorio, no de oxigenación. Subir el oxígeno no corrige el CO2 y puede empeorarlo. Paciente orientado, sin contraindicaciones: VMNI.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Hombre de setenta y dos años con EPOC severo, con tres días de más tos, expectoración mucopurulenta y fiebre, que evoluciona con disnea de reposo, frecuencia respiratoria de cuarenta y saturación de ochenta y cuatro. Está agitado, pero orientado. Los gases muestran un pH de siete coma veintinueve y un dióxido de carbono de cincuenta y cinco. Ya recibe broncodilatadores, antibióticos y corticoides.',
        question: '¿Cuál es la conducta más adecuada para su manejo respiratorio?',
        options: 'Fíjate que cuatro de las cinco opciones son formas de dar oxígeno: Venturi al cincuenta, mascarilla de no recirculación, naricera al veinticuatro, cánula de alto flujo, y la quinta es ventilación no invasiva. Piénsalo.',
        answer: 'Es la E. La saturación de ochenta y cuatro te empuja a pensar en oxígeno, pero los gases dicen otra cosa: hay acidosis hipercápnica, y ese es un problema de ventilación. El oxígeno no barre el dióxido de carbono, y en alto flujo lo empeora. La C tienta porque es oxígeno controlado, pero no resuelve la acidosis. Paciente orientado y con acidosis: BiPAP.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Antibiótico', tag: 'Anthonisen', kind: 'key', items: [
          { t: 'Tipo 1, o tipo 2 con purulencia', d: 'Amoxicilina/clavulánico 5–7 días',
            say: 'Cerremos con las reglas de oro. Antibiótico en el Anthonisen tipo uno, o en el tipo dos cuando uno de los criterios es la purulencia. El de elección es amoxicilina con clavulánico, porque el germen más frecuente es Haemophilus.' },
        ] },
        { title: 'Tratamiento', tag: 'Siempre', kind: 'pharma', items: [
          { t: 'SABA + SAMA', d: 'Salbutamol + ipratropio',
            say: 'Todo exacerbado lleva doble broncodilatador, salbutamol con ipratropio.' },
          { t: 'Prednisona 40 mg por 5 días', d: 'Sin descenso',
            say: 'Y prednisona cuarenta miligramos por cinco días, sin pauta descendente.' },
        ] },
        { title: 'Oxígeno y ventilación', tag: 'Lo que salva', kind: 'alert', items: [
          { t: 'Meta SatO2 88–92 %', d: 'Más oxígeno = narcosis',
            say: 'El oxígeno tiene techo: meta de ochenta y ocho a noventa y dos por ciento. Más oxígeno no es más seguro, es narcosis hipercápnica.' },
          { t: 'pH < 7,35 y PaCO2 > 45: VMNI', d: 'Sin demorarla',
            say: 'Y si los gases muestran acidosis respiratoria, ventilación no invasiva, sin demorarla. En la próxima clase entramos a la neumonía, que también puede descompensar a este mismo paciente. Si te llevas una sola idea de hoy: en el EPOC exacerbado, el pus decide el antibiótico y el pH decide la ventilación. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Exacerbación de EPOC: gases y Anthonisen',
    root: N('start', 'EPOC exacerbado', 'O2 88–92 % · SABA + SAMA · prednisona 40 mg x 5 d',
      'Paciente con EPOC que empeora su disnea, su tos o su expectoración en menos de catorce días. Todos reciben la misma base: oxígeno controlado con meta de ochenta y ocho a noventa y dos, salbutamol con ipratropio, y prednisona cuarenta miligramos por cinco días. Lo que cambia son la ventilación y el antibiótico.',
      ['', N('q', '¿Acidosis en los gases?', 'pH < 7,35 y PaCO2 > 45',
        'Lo primero que se decide es lo que amenaza la vida. Se piden gases: ¿hay acidosis respiratoria hipercápnica, con pH bajo siete coma treinta y cinco y dióxido de carbono sobre cuarenta y cinco, a pesar del tratamiento?',
        ['NO', N('q', '¿Esputo purulento?', 'Contar criterios de Anthonisen',
          'Sin acidosis, la pregunta que queda es el antibiótico. Cuenta los criterios de Anthonisen, y fíjate sobre todo en la purulencia.',
          ['Tipo 1 o tipo 2 con pus', N('alert', 'Agregar antibiótico', 'Amoxicilina/clavulánico 5–7 días',
            'Tres criterios, o dos con purulencia: se agrega amoxicilina con clavulánico por cinco a siete días.')],
          ['Tipo 2 sin pus o tipo 3', N('ok', 'Sin antibiótico de rutina', 'Optimizar broncodilatadores',
            'Dos criterios sin purulencia, o un tipo tres: sin antibiótico de rutina. Se optimizan los broncodilatadores y se reevalúa.')])],
        ['SÍ', N('q', '¿Contraindicación de VMNI?', 'Glasgow < 8, shock, vómitos, trauma facial',
          'Con acidosis, el paciente necesita ventilar, y el antibiótico se decide igual, con Anthonisen. ¿Tiene alguna contraindicación para la no invasiva?',
          ['NO', N('ok', 'VMNI (BiPAP)', 'Primera elección',
            'Si no la tiene, ventilación no invasiva en modo BiPAP: es la primera elección y reduce en más de la mitad la intubación.')],
          ['SÍ', N('refer', 'Intubación y UCI', 'Ventilación invasiva',
            'Si la tiene, o si la no invasiva fracasa, intubación y ventilación invasiva en la unidad de cuidados intensivos.')])])]),
  },
};
