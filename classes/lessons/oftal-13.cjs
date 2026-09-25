// Clase 15.13 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_oftalmologia.cjs (oftal-13), bloque 3.
// El banco real EUNACOM (código 6.02.1.027 y búsquedas por Keith-Wagener, signo de Gunn,
// edema de papila, cruces arteriovenosos, hilo de cobre/plata, emergencia hipertensiva)
// no tiene ninguna pregunta donde la retinopatía hipertensiva o su clasificación sea la
// respuesta correcta: lo que aparece son preguntas de hipertensión endocraneana, neuritis
// óptica o crisis hipertensivas de otras especialidades (obstetricia, cardiología), que no
// evalúan este tema específico. Se usan las dos preguntas propias del libro como "Caso
// representativo", sin fecha, según LESSON_STANDARD.md.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'oftal-13',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'El único lugar del cuerpo donde ves los vasos en vivo: qué grado es y cuándo es una emergencia',
      say: 'Bienvenidos. Hoy vemos la retinopatía hipertensiva. La retina es el único sitio del organismo donde puedes mirar directamente, sin ningún examen invasivo, cómo está sufriendo la microcirculación de un paciente hipertenso. Y el tema se resume en una sola pregunta de examen: ¿hay o no edema de papila? Esa pregunta separa un control ambulatorio de un ingreso a la unidad de cuidados intensivos. Vamos a eso.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Tres fases, una arteriola que va perdiendo la batalla',
      nodes: [
        { id: 'hta', col: 0, row: 1, k: 'cause', t: 'Hipertensión arterial crónica', s: 'Estímulo mantenido sobre la pared vascular' },
        { id: 'vaso', col: 1, row: 0, k: 'mech', t: 'Fase vasoconstrictora', s: 'Espasmo y estrechamiento arteriolar' },
        { id: 'escl', col: 1, row: 2, k: 'mech', t: 'Fase esclerótica', s: 'Hialinización: hilo de cobre y luego hilo de plata' },
        { id: 'exud', col: 2, row: 1, k: 'risk', t: 'Fase exudativa', s: 'Rotura de la barrera hematorretiniana' },
        { id: 'clin', col: 3, row: 1, k: 'effect', t: 'Hemorragias y exudados algodonosos', s: 'Necrosis fibrinoide, isquemia retiniana aguda' },
        { id: 'edema', col: 4, row: 1, k: 'alert', t: 'Edema de papila bilateral', s: 'Emergencia hipertensiva maligna' },
      ],
      edges: [
        { from: 'hta', to: 'vaso' }, { from: 'hta', to: 'escl' },
        { from: 'vaso', to: 'exud', label: 'si persiste' }, { from: 'escl', to: 'exud' },
        { from: 'exud', to: 'clin' }, { from: 'clin', to: 'edema', label: 'grado más severo' },
      ],
      steps: [
        { show: ['hta'], note: 'La arteriola retiniana responde en tres tiempos',
          say: 'Empecemos por el mecanismo, porque la clasificación entera nace de él. Cuando la presión arterial se mantiene elevada, la microvasculatura retiniana pasa por tres fases sucesivas.' },
        { show: ['vaso'], note: 'Primero, un espasmo autorregulador',
          say: 'La primera es la fase vasoconstrictora: la arteriola se autorregula con un espasmo y un estrechamiento, difuso o focal, tratando de defenderse de la presión alta.' },
        { show: ['escl'], note: 'El reflejo luminoso cambia antes que la clínica',
          say: 'Si la hipertensión sigue, viene la fase esclerótica: la íntima y la capa media de la arteriola se engrosan y se hialinizan, y la arteriola pierde su transparencia normal. Primero se ve como un hilo de cobre, con un reflejo luminoso cobrizo aumentado, y más adelante como un hilo de plata, donde la pared ya es tan opaca que no dejas ver la columna de sangre por dentro.' },
        { show: ['exud', 'clin'], note: 'Aquí la retina empieza a sufrir de verdad',
          say: 'Y la tercera es la fase exudativa. La pared del vaso se necrosa, se rompe la barrera hematorretiniana, y aparecen microinfartos que se ven como exudados algodonosos, junto con hemorragias en la capa de fibras nerviosas, en forma de llama.' },
        { show: ['edema'], note: 'El paso final: la papila se edematiza',
          say: 'Si el daño sigue avanzando, el último escalón es el edema de papila bilateral, con los bordes del disco óptico borrados. Y guarda esta idea, porque ese único hallazgo es el que define la emergencia hipertensiva maligna.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clasificación',
      title: 'Keith-Wagener-Barker: cuatro grados, y el examen los pregunta todos',
      cards: [
        { title: 'Grados I y II', tag: 'Cambios vasculares crónicos', kind: 'criteria', items: [
          { t: 'Grado I: hilo de cobre', d: 'Estrechamiento arteriolar leve, asintomático',
            say: 'Esta es la clasificación universal que exige el examen. El grado uno es el más leve: solo estrechamiento arteriolar difuso, con el reflejo en hilo de cobre. El paciente no siente nada.' },
          { t: 'Grado II: cruces arteriovenosos patológicos', d: 'Signo de Gunn y signo de Salus',
            say: 'El grado dos suma los cruces arteriovenosos patológicos. Fíjate en los dos signos que se preguntan por nombre: el signo de Gunn, que es el afilamiento u ocultamiento de la vénula al pasar por debajo de la arteriola esclerosada, porque comparten la misma adventicia; y el signo de Salus, que es la deflexión de la vénula, como si el cruce la empujara en ángulo o en forma de ese.' },
        ] },
        { title: 'Grados III y IV', tag: 'Isquemia aguda y emergencia', kind: 'alert', items: [
          { t: 'Grado III: hemorragias y exudados', d: 'En llama, algodonosos, y estrella macular',
            say: 'El grado tres ya no es solo crónico: aparecen hemorragias retinianas en llama, exudados algodonosos, y a veces exudados duros que dibujan una estrella macular. Aquí la retina ya está isquémica de forma aguda.' },
          { t: 'Grado IV: todo lo anterior más edema de papila bilateral', d: 'Define la emergencia hipertensiva maligna',
            say: 'Y el grado cuatro es todo lo anterior, más el edema de papila bilateral. Ese único hallazgo cambia por completo la conducta: deja de ser un tema de fondo de ojo y pasa a ser una emergencia médica.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo de la emergencia',
      title: 'Grado cuatro: hospitalizar, pero bajar la presión con cuidado',
      cards: [
        { title: 'Grados I, II y III', tag: 'Manejo ambulatorio o urgencia', kind: 'normal', items: [
          { t: 'Uno y dos: ajuste oral en atención primaria', d: 'No requieren cambio de conducta urgente',
            say: 'Ahora, el manejo. Los grados uno y dos corresponden a una hipertensión crónica bien o moderadamente controlada, y se manejan titulando los antihipertensivos orales en atención primaria, sin urgencia.' },
          { t: 'Tres: urgencia hipertensiva', d: 'Ajuste farmacológico rápido, sin ingreso a UCI',
            say: 'El grado tres ya es una urgencia hipertensiva, con ajuste farmacológico más rápido y control estrecho, pero todavía no exige una unidad de cuidados intensivos.' },
        ] },
        { title: 'Grado IV: emergencia hipertensiva maligna', tag: 'Hospitalización en UCI', kind: 'alert', items: [
          { t: 'Labetalol o nitroprusiato endovenoso', d: 'En infusión continua, monitorización invasiva',
            say: 'El grado cuatro, en cambio, es una emergencia hipertensiva: casi siempre con presiones sobre doscientos con ciento veinte, y con encefalopatía hipertensiva o insuficiencia renal aguda asociada. Se hospitaliza en la unidad de cuidados intensivos, con monitorización invasiva, y se inicia labetalol o nitroprusiato de sodio endovenoso en infusión continua.' },
          { t: 'Bajar la presión arterial media un veinte a veinticinco por ciento', d: 'En las primeras dos a cuatro horas, nunca de golpe',
            say: 'Y aquí está la regla de oro que más se pregunta: el descenso tiene que ser gradual, bajando la presión arterial media solo entre un veinte y un veinticinco por ciento en las primeras dos a cuatro horas. Nunca normalices la presión de golpe, porque la autorregulación del cerebro y del nervio óptico colapsa, y puedes provocar un infarto cerebral isquémico o una neuropatía óptica isquémica que deja al paciente ciego por tu propio tratamiento.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol de decisión, tal como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Los cuatro grados de Keith-Wagener-Barker',
      head: ['Grado', 'Hallazgos al fondo de ojo', 'Fisiopatología', 'Conducta'],
      rows: [
        { cells: ['Grado I', 'Estrechamiento arteriolar leve, hilo de cobre', 'Vasoconstricción funcional', 'Manejo ambulatorio en atención primaria'],
          say: 'Repasemos la tabla completa. Grado uno: estrechamiento arteriolar leve, en hilo de cobre, por vasoconstricción funcional. Se maneja de forma ambulatoria.' },
        { cells: ['Grado II', 'Hilo de plata, cruces de Gunn y de Salus', 'Esclerosis de la adventicia compartida', 'Optimizar el antihipertensivo oral'],
          say: 'Grado dos: hilo de plata, más los cruces arteriovenosos de Gunn y de Salus, por esclerosis de la adventicia compartida. Se optimiza el tratamiento oral.' },
        { cells: ['Grado III', 'Hemorragias en llama, exudados algodonosos', 'Necrosis fibrinoide, isquemia aguda', 'Urgencia hipertensiva, ajuste rápido'],
          say: 'Grado tres: hemorragias en llama y exudados algodonosos, por necrosis fibrinoide e isquemia aguda. Ya es una urgencia hipertensiva, con ajuste rápido.' },
        { cells: ['Grado IV', 'Todo lo anterior más edema de papila bilateral', 'Hipertensión intracraneana o maligna', 'Emergencia: UCI y fármacos endovenosos'],
          say: 'Y grado cuatro: todo lo anterior, más el edema de papila bilateral, por hipertensión intracraneana o hipertensión maligna. Es una emergencia: unidad de cuidados intensivos y fármacos endovenosos.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 55 años, hipertensa crónica con mal control de su tratamiento oral, consulta por control habitual sin síntomas visuales. Presión arterial 190/115 mmHg. Al fondo de ojo se observan hemorragias retinianas en llama y exudados algodonosos en ambos ojos, sin cruces arteriovenosos patológicos adicionales relevantes y con bordes papilares nítidos, sin edema.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Tranquilizarla y controlar en un año, ya que está asintomática' },
        { letter: 'B', text: 'Hospitalizar de inmediato en la unidad de cuidados intensivos e iniciar labetalol endovenoso' },
        { letter: 'C', text: 'Ajustar de forma rápida el tratamiento antihipertensivo y controlar estrechamente, sin necesidad de ingreso a UCI' },
        { letter: 'D', text: 'Indicar nifedipino sublingual para normalizar la presión arterial en minutos' },
        { letter: 'E', text: 'Solicitar únicamente una angiografía con fluoresceína antes de decidir cualquier conducta' },
      ],
      correct: 'C',
      explanation: 'Hemorragias en llama y exudados algodonosos sin edema de papila corresponden a un grado III de Keith-Wagener-Barker: urgencia hipertensiva con isquemia retiniana aguda, que exige ajustar el tratamiento de forma rápida y controlar estrechamente, pero sin los criterios de emergencia maligna que exige el grado IV.',
      say: {
        stem: 'Vamos con un caso. Mujer de cincuenta y cinco años, hipertensa crónica con mal control de su tratamiento oral, que consulta por un control habitual, sin ningún síntoma visual. Su presión arterial está en ciento noventa con ciento quince. Al fondo de ojo se ven hemorragias en llama y exudados algodonosos en ambos ojos, pero los bordes de la papila están nítidos, sin edema.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: tranquilizarla y controlar en un año, hospitalizarla de inmediato en UCI con labetalol endovenoso, ajustar rápido el tratamiento oral y controlar estrechamente sin ingreso a UCI, dar nifedipino sublingual para normalizar la presión en minutos, o solo pedir una angiografía antes de decidir. Piénsalo.',
        answer: 'Es la C. Fíjate en el dato clave: no hay edema de papila. Eso descarta el grado cuatro, así que no corresponde hospitalizar en UCI ni usar fármacos endovenosos. Pero tampoco puedes esperar un año, porque las hemorragias y los exudados algodonosos ya marcan un grado tres, con isquemia retiniana activa: eso exige ajustar el tratamiento de forma rápida. Y el nifedipino sublingual es la trampa clásica: bajar la presión de golpe nunca es la respuesta correcta.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo',
      stem: 'Un paciente de 63 años con hipertensión arterial crónica acude a control. En el fondo de ojo se observan arteriolas retinianas estrechadas de aspecto brillante y cobrizo, y a nivel de los cruces arteriovenosos se aprecia un afilamiento y ocultamiento del trayecto de las vénulas por debajo de las arteriolas (signo de Gunn positivo), sin hemorragias ni exudados.',
      question: '¿A qué grado de la clasificación de Keith-Wagener-Barker corresponde este hallazgo?',
      options: [
        { letter: 'A', text: 'Grado I' },
        { letter: 'B', text: 'Grado II' },
        { letter: 'C', text: 'Grado III' },
        { letter: 'D', text: 'Grado IV' },
        { letter: 'E', text: 'Retinopatía proliferativa grado B' },
      ],
      correct: 'B',
      explanation: 'Cruces arteriovenosos patológicos (signo de Gunn o de Salus), junto con esclerosis arteriolar, sin hemorragias, exudados ni edema de papila, definen el grado II de Keith-Wagener-Barker. El grado I solo tiene estrechamiento arteriolar; el grado III añade hemorragias y exudados; el grado IV suma edema de papila.',
      say: {
        stem: 'Esta es una pregunta representativa del banco de la especialidad, sin fecha del examen real, sobre el hallazgo que más distractores genera. Un paciente de sesenta y tres años, hipertenso crónico, va a control. Al fondo de ojo, sus arteriolas se ven estrechas, brillantes y cobrizas, y en los cruces arteriovenosos hay afilamiento y ocultamiento de las vénulas por debajo de las arteriolas, es decir, signo de Gunn positivo, sin hemorragias ni exudados.',
        question: '¿A qué grado de la clasificación de Keith-Wagener-Barker corresponde este hallazgo?',
        options: 'Las opciones son grado uno, grado dos, grado tres, grado cuatro, o retinopatía proliferativa grado B, que ni siquiera existe en esta clasificación.',
        answer: 'Es la B, grado dos. El signo de Gunn es justamente lo que define este grado, junto con la esclerosis en hilo de cobre o de plata. El grado uno no tiene cruces patológicos. Para subir a grado tres necesitarías hemorragias o exudados, y aquí el enunciado los descarta explícitamente. Y el grado cuatro exige, además, edema de papila, que tampoco aparece.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo',
      stem: 'Un hombre de 45 años ingresa al servicio de urgencias con presión arterial de 230/140 mmHg, cefalea holocraneana y confusión. Al fondo de ojo se evidencia borramiento de los bordes de ambas papilas ópticas con sobreelevación papilar, exudados algodonosos y hemorragias retinianas en llama.',
      question: '¿Cuál es la conducta terapéutica correcta respecto al manejo de su presión arterial?',
      options: [
        { letter: 'A', text: 'Administrar nifedipino sublingual para descender la presión arterial a menos de 120/80 mmHg en 15 minutos' },
        { letter: 'B', text: 'Hospitalizar en cuidados intensivos e iniciar labetalol endovenoso reduciendo la presión arterial media en un 20 a 25% en las primeras horas' },
        { letter: 'C', text: 'Indicar enalapril oral y enviar a domicilio con control en 48 horas' },
        { letter: 'D', text: 'Realizar punción lumbar urgente antes de iniciar cualquier tratamiento hipotensor' },
        { letter: 'E', text: 'Indicar diuréticos de asa orales en dosis única y analgesia' },
      ],
      correct: 'B',
      explanation: 'El edema de papila bilateral define retinopatía hipertensiva grado IV, es decir, emergencia hipertensiva maligna. El manejo es hospitalización en UCI y fármacos endovenosos titulables, con descenso gradual de la presión arterial media entre un 20% y un 25% en las primeras 2 a 4 horas; nunca de forma brusca.',
      say: {
        stem: 'Y una segunda pregunta representativa, esta vez sobre la conducta en la emergencia. Un hombre de cuarenta y cinco años llega a urgencias con una presión arterial de doscientos treinta con ciento cuarenta, cefalea de toda la cabeza y confusión. Al fondo de ojo hay borramiento de los bordes de ambas papilas, con sobreelevación, más exudados algodonosos y hemorragias en llama.',
        question: '¿Cuál es la conducta terapéutica correcta respecto al manejo de su presión arterial?',
        options: 'Las opciones: nifedipino sublingual para bajar la presión en quince minutos, hospitalizar en UCI con labetalol endovenoso bajando la presión arterial media entre un veinte y un veinticinco por ciento en las primeras horas, enalapril oral y enviarlo a la casa, punción lumbar antes de tratar la presión, o diuréticos de asa orales con analgesia.',
        answer: 'Es la B. El edema de papila bilateral confirma el grado cuatro: es una emergencia hipertensiva maligna, y va directo a cuidados intensivos con fármacos endovenosos titulables. La trampa es la A: el nifedipino sublingual suena razonable con la presión tan alta, pero bajarla en quince minutos es justo lo que no debes hacer, porque colapsa la autorregulación cerebral y ocular. Enviarlo a la casa o pedir una punción lumbar antes de tratar la presión también retrasan una urgencia vital.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Clasificación', tag: 'Cuatro grados', kind: 'key', items: [
          { t: 'Uno: hilo de cobre. Dos: signo de Gunn o Salus', d: 'Solo cambios vasculares crónicos',
            say: 'Cerremos con las reglas de oro. Grado uno: hilo de cobre. Grado dos: se suman los cruces de Gunn o de Salus.' },
          { t: 'Tres: hemorragias y exudados. Cuatro: más edema de papila', d: 'El edema de papila es lo único que define el grado cuatro',
            say: 'Grado tres: hemorragias en llama y exudados algodonosos. Y grado cuatro: todo lo anterior, más el edema de papila bilateral, que es el único hallazgo que define ese grado.' },
        ] },
        { title: 'La regla que más se pregunta', tag: 'Descenso gradual', kind: 'alert', items: [
          { t: 'Grado cuatro: UCI y fármacos endovenosos', d: 'Labetalol o nitroprusiato en infusión continua',
            say: 'El grado cuatro se hospitaliza en cuidados intensivos, con labetalol o nitroprusiato endovenoso en infusión continua.' },
          { t: 'Bajar solo un 20 a 25% de la PAM', d: 'En las primeras 2 a 4 horas, nunca de golpe',
            say: 'Y si te llevas una sola idea de hoy: nunca bajes la presión de golpe. La meta es reducir la presión arterial media entre un veinte y un veinticinco por ciento en las primeras dos a cuatro horas, sin excepción. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Fondo de ojo del paciente hipertenso: sigue el hallazgo hasta la conducta',
    root: (() => {
      const bajaPam = N('ok', 'Baja la presión arterial media', 'Veinte a veinticinco por ciento en dos a cuatro horas',
        'Desciende la presión arterial media de forma gradual, entre un veinte y un veinticinco por ciento en las primeras dos a cuatro horas. Nunca la normalices de golpe.');
      const uci = N('alert', 'Hospitaliza en cuidados intensivos', 'Labetalol o nitroprusiato endovenoso en infusión continua',
        'Hospitaliza de inmediato en la unidad de cuidados intensivos e inicia labetalol o nitroprusiato endovenoso en infusión continua.',
        ['', bajaPam]);
      const gradoIV = N('alert', 'Grado cuatro: emergencia hipertensiva maligna', 'Daño de órgano blanco inminente',
        'Confirma un grado cuatro: esto es una emergencia hipertensiva maligna, con daño de órgano blanco cerebral inminente.',
        ['', uci]);

      const ajusteAmbulatorio = N('ok', 'Ajusta el antihipertensivo oral', 'En atención primaria, sin urgencia',
        'Ajusta o intensifica el tratamiento antihipertensivo oral en atención primaria, sin necesidad de hospitalizar.');
      const gradoIoII = N('do', 'Grado uno o dos', 'Solo cambios vasculares crónicos',
        'Clasifica como grado uno o dos: solo estrechamiento arteriolar o cruces arteriovenosos patológicos, sin hemorragias ni exudados.',
        ['', ajusteAmbulatorio]);

      const ajusteRapido = N('ok', 'Ajuste farmacológico rápido', 'Urgencia hipertensiva, sin ingreso a UCI',
        'Intensifica el tratamiento de forma rápida y controla estrechamente, porque ya hay isquemia retiniana activa.');
      const gradoIII = N('refer', 'Grado tres', 'Hemorragias en llama y exudados algodonosos',
        'Clasifica como grado tres: hemorragias en llama y exudados algodonosos, todavía sin edema de papila.',
        ['', ajusteRapido]);

      const hallazgosQ = N('q', '¿Hay hemorragias o exudados algodonosos?', 'Eso separa el grado dos del grado tres',
        'Si no hay edema de papila, busca hemorragias o exudados algodonosos para terminar de clasificar el grado.',
        ['no, solo cruces arteriovenosos', gradoIoII],
        ['sí, hemorragias y exudados', gradoIII]);

      return N('start', 'Fondo de ojo del paciente hipertenso', '¿Hay edema de papila bilateral?',
        'Empieza siempre por lo mismo: examina el fondo de ojo y busca si los bordes de la papila están borrados en ambos ojos.',
        ['sí, hay edema de papila bilateral', gradoIV],
        ['no hay edema de papila', hallazgosQ]);
    })(),
  },
};
