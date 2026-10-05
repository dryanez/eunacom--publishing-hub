// Clase 14.17 (Otorrinolaringología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_otorrino.cjs (orl-17). Preguntas: banco real EUNACOM (class_questions.cjs --search).
// El banco real no tiene pregunta de epiglotitis ni de observación tras adrenalina: esos dos temas usan casos del libro/clase.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'orl-17',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Croup y epiglotitis: la escala de Taussig, qué fármaco va en cada grado y por qué nunca se usa un bajalenguas',
      say: 'Bienvenido. Esta es una de las clases de mayor rentabilidad del libro: el niño con estridor. El examen te hace dos preguntas casi siempre. Una es el croup: qué grado tiene y qué fármacos le corresponden. La otra es la epiglotitis, y ahí lo que se pregunta es una prohibición. Si entiendes por qué el croup se obstruye abajo y la epiglotitis arriba, todo lo demás se ordena solo.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Por qué el croup obstruye',
      nodes: [
        { id: 'vi', col: 0, row: 1, k: 'cause', t: 'Virus parainfluenza', s: 'Tipo 1 en más del 75%' },
        { id: 'ed', col: 1, row: 1, k: 'mech', t: 'Edema subglótico', s: 'El cricoides no se expande' },
        { id: 'ob', col: 2, row: 1, k: 'effect', t: 'Obstrucción alta', s: 'Poco calibre en el lactante' },
        { id: 'tr', col: 3, row: 0, k: 'alert', t: 'Estridor inspiratorio', s: 'Ruido rudo al inspirar' },
        { id: 'to', col: 3, row: 1, k: 'alert', t: 'Tos perruna', s: 'Seca, metálica' },
        { id: 'di', col: 3, row: 2, k: 'alert', t: 'Disfonía', s: 'Por el edema de la subglotis' },
      ],
      edges: [
        { from: 'vi', to: 'ed' },
        { from: 'ed', to: 'ob' },
        { from: 'ob', to: 'tr' },
        { from: 'ob', to: 'to' },
        { from: 'ob', to: 'di' },
      ],
      steps: [
        { show: ['vi', 'ed'], note: 'Un virus inflama la subglotis',
          say: 'El croup es una laringotraqueítis viral. El agente más frecuente, en más de tres cuartos de los casos, es el virus parainfluenza tipo uno, y el edema se concentra en la región subglótica. Piensa en el anillo del cricoides: es cartílago completo y no se expande. Cuando la mucosa se hincha, solo puede hacerlo hacia adentro, y se cierra el paso del aire.' },
        { show: ['ob'], note: 'En el lactante, un poco de edema obstruye mucho',
          say: 'En un lactante, la vía aérea ya es muy angosta. Un milímetro de edema le quita una fracción enorme de su calibre y multiplica la resistencia al flujo. Por eso un resfrío común en un adulto es una obstrucción en un niño de dos años.' },
        { show: ['tr', 'to', 'di'], note: 'Tríada: tos perruna, estridor y disfonía',
          say: 'Esa obstrucción alta explica la tríada del croup: tos perruna, como de perro o de foca; estridor inspiratorio rudo; y disfonía. Casi siempre viene después de uno o dos días de coriza y fiebre baja, y aparece sobre todo en niños de seis meses a tres años, en otoño e invierno.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Clasificación',
      title: 'Escala de Taussig: grados del croup',
      head: ['Grado', 'Estridor y tiraje', 'Conducta'],
      rows: [
        { cells: ['I · Leve', 'Estridor solo al llorar; tiraje mínimo', 'Dexametasona oral y alta'],
          say: 'La escala de Taussig mide cuánto se obstruye el niño. En el grado uno, el estridor aparece solo cuando llora o se agita. En reposo está tranquilo, con buena entrada de aire. Recibe dexametasona por vía oral y se va a la casa con educación sobre signos de alarma.' },
        { cells: ['II · Moderado', 'Estridor en reposo; tiraje supraesternal', 'Dexametasona + adrenalina nebulizada'],
          say: 'El grado dos es la frontera que más se pregunta: estridor audible en reposo, con tiraje supraesternal e intercostal, pero sin cianosis. Aquí se agrega adrenalina nebulizada, con oxígeno, a la dexametasona.' },
        { cells: ['III · Severo', 'Estridor bifásico; tiraje con cabeceo', 'Adrenalina + dexametasona EV + O2'],
          say: 'En el grado tres el estridor se escucha al inspirar y al espirar, hay tiraje intenso, aleteo y menor entrada de aire, y el niño está agitado. Se da adrenalina nebulizada de inmediato, dexametasona endovenosa y oxígeno, y se hospitaliza.' },
        { cells: ['IV · Agotamiento', 'Palidez, cianosis, tórax silente', 'Intubación y ventilación'],
          say: 'El grado cuatro es el agotamiento. El estridor disminuye, pero no porque mejore, sino porque ya entra casi nada de aire. El niño está pálido, cianótico y con el sensorio deprimido. Necesita ventilación e intubación, con un tubo de un número menor al que le corresponde por edad.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Qué fármaco y para qué',
      cards: [
        { title: 'Dexametasona', tag: 'Todos los grados', kind: 'pharma', items: [
          { t: 'Obligatoria, incluso en el croup leve', d: 'Dosis única, oral de elección',
            say: 'La dexametasona va en todos los pacientes con croup, incluso en los leves. Es el tratamiento que cambia la evolución: reduce el edema, las hospitalizaciones y las recaídas.' },
          { t: '0,15 a 0,6 mg/kg', d: 'Máximo 10 a 16 mg; EV si no tolera',
            say: 'La dosis es de cero coma quince a cero coma seis miligramos por kilo, con un máximo de diez a dieciséis miligramos, en una sola dosis. Se prefiere la vía oral, y se usa la endovenosa si el niño no la tolera. El efecto empieza a las dos o tres horas y dura dos a tres días.' },
        ] },
        { title: 'Adrenalina nebulizada', tag: 'Estridor en reposo', kind: 'alert', items: [
          { t: 'Desde Taussig II', d: 'Estridor en reposo es la indicación',
            say: 'La adrenalina nebulizada se reserva para el estridor presente en reposo, es decir, de grado dos hacia arriba. Un niño con estridor solo al llorar no la necesita.' },
          { t: 'Corriente 1:1.000, 4 a 5 mL', d: 'O racémica; con oxígeno',
            say: 'Se puede usar adrenalina corriente sin diluir, cuatro a cinco mililitros, o racémica; ambas son igual de eficaces. Se nebuliza con oxígeno. Actúa como vasoconstrictor sobre la mucosa subglótica, y el estridor baja en diez a treinta minutos.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Distractores',
      title: 'Lo que no sirve en el croup',
      cards: [
        { title: 'Errores frecuentes', tag: 'Distractores de examen', kind: 'alert', items: [
          { t: 'Salbutamol e ipratropio', d: 'Actúan en el bronquio, no en la subglotis',
            say: 'En el examen aparecen alternativas tentadoras. El salbutamol actúa sobre el músculo liso bronquial, y el problema del croup está más arriba, en el edema de la mucosa subglótica. No sirve.' },
          { t: 'Antibióticos', d: 'Es un cuadro viral',
            say: 'Los antibióticos tampoco tienen lugar, porque el croup es viral. Si ves amoxicilina con clavulánico en las opciones, es un distractor.' },
          { t: 'Intubar de entrada', d: 'Solo en grado IV o agotamiento',
            say: 'Y la intubación inmediata se reserva para el grado cuatro, el niño agotado o cianótico, no para el estridor en reposo.' },
        ] },
        { title: 'Urgencia y garantías', tag: 'Cobertura', kind: 'key', items: [
          { t: 'Sin GES específico', d: 'Ley de Urgencias en obstrucción severa',
            say: 'Un detalle de cobertura: no hay garantía GES específica para este cuadro, pero la obstrucción laríngea severa queda cubierta por la Ley de Urgencias, que obliga a atender al niño hasta estabilizarlo.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Observación',
      title: 'Adrenalina: efecto rápido, efecto corto',
      nodes: [
        { id: 'ad', col: 0, row: 1, k: 'good', t: 'Adrenalina nebulizada', s: 'Alivia en 10 a 30 min' },
        { id: 'fa', col: 1, row: 1, k: 'risk', t: 'Se acaba a las 2 horas', s: 'Puede volver el edema' },
        { id: 'ob', col: 2, row: 1, k: 'q', t: 'Observar 2 a 4 horas', s: '¿Estridor en reposo?' },
        { id: 'al', col: 3, row: 0, k: 'good', t: 'Sin estridor: alta', s: 'La dexametasona ya actúa' },
        { id: 'ho', col: 3, row: 2, k: 'refer', t: 'Con estridor: hospitalizar', s: 'Persiste la obstrucción' },
      ],
      edges: [
        { from: 'ad', to: 'fa' },
        { from: 'fa', to: 'ob' },
        { from: 'ob', to: 'al', label: 'no' },
        { from: 'ob', to: 'ho', label: 'sí' },
      ],
      steps: [
        { show: ['ad', 'fa'], note: 'El alivio es real, pero dura poco',
          say: 'Aquí hay una trampa clásica. La adrenalina alivia rápido, pero su efecto se va a las dos horas. Cuando se va, el edema puede reaparecer, y con él el estridor. Eso se llama efecto rebote.' },
        { show: ['ob'], note: 'Todo niño con adrenalina se observa',
          say: 'Por eso, todo niño que recibe adrenalina nebulizada queda en observación en urgencia, al menos dos horas y habitualmente de dos a cuatro. No se va a la casa apenas se calma.' },
        { show: ['al', 'ho'], note: 'El corticoide decide si se puede ir',
          say: 'Al terminar la observación miras una sola cosa: si hay estridor en reposo. Si no lo hay, con buena entrada de aire y saturación normal, se va a la casa, porque la dexametasona ya hizo efecto. Si persiste el estridor, se hospitaliza.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Epiglotitis',
      title: 'La otra obstrucción: epiglotitis aguda',
      cards: [
        { title: 'Cuadro de alarma', tag: 'Hiperagudo', kind: 'alert', items: [
          { t: 'Fiebre alta, aspecto tóxico', d: 'Horas de evolución, más de 39 °C',
            say: 'La epiglotitis es una infección bacteriana invasiva de la epiglotis, y es una emergencia que puede cerrar la vía aérea en minutos. Si el croup avanza por días con coriza, la epiglotitis aparece en horas, con fiebre muy alta y un niño de aspecto séptico.' },
          { t: 'Babeo y postura en trípode', d: 'No puede ni tragar su saliva',
            say: 'El dolor al tragar es tan intenso que el niño no traga ni su saliva y babea. Se sienta inclinado hacia adelante, con el cuello extendido y la boca abierta. Esa es la postura en trípode, y es una forma de abrir la vía aérea con su propio cuerpo.' },
          { t: 'Sin tos perruna', d: 'Voz apagada, estridor sordo',
            say: 'Y fíjate en lo que falta: no hay tos perruna ni disfonía franca. Tiene voz apagada, como de papa caliente, y un estridor inspiratorio sordo. Ausencia de tos más babeo es lo que la separa del croup.' },
        ] },
        { title: 'Quién y por qué', tag: 'Etiología', kind: 'key', items: [
          { t: 'Antes: Haemophilus influenzae b', d: 'La vacuna lo hizo raro',
            say: 'Antes la causa era Haemophilus influenzae tipo b. Con la vacuna pentavalente del programa de inmunización, hoy es mucho más rara.' },
          { t: 'Hoy: neumococo, pyogenes, aureus', d: 'Niños de 2 a 7 años y adultos',
            say: 'Hoy la producen Streptococcus pneumoniae, Streptococcus pyogenes o Staphylococcus aureus, en niños de dos a siete años, y también en adultos jóvenes.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Regla de oro',
      title: 'Sospecha de epiglotitis: no tocar',
      nodes: [
        { id: 'sos', col: 0, row: 1, k: 'start', t: 'Babeo, trípode, fiebre alta', s: 'Sin tos perruna' },
        { id: 'pro', col: 1, row: 0, k: 'trap', t: 'Bajalenguas: prohibido', s: 'Ni mirar la faringe' },
        { id: 'esp', col: 2, row: 0, k: 'alert', t: 'Laringoespasmo fatal', s: 'Paro cardiorrespiratorio' },
        { id: 'qui', col: 1, row: 2, k: 'refer', t: 'Pabellón con anestesista', s: 'Intubación o traqueostomía' },
        { id: 'cef', col: 2, row: 2, k: 'good', t: 'Ceftriaxona EV', s: 'Una vez asegurada la vía aérea' },
      ],
      edges: [
        { from: 'sos', to: 'pro', label: 'no' },
        { from: 'pro', to: 'esp' },
        { from: 'sos', to: 'qui', label: 'sí' },
        { from: 'qui', to: 'cef' },
      ],
      steps: [
        { show: ['sos', 'pro', 'esp'], note: 'El reflejo nauseoso puede cerrar la laringe',
          say: 'La regla de oro: ante la sospecha de epiglotitis está prohibido usar el bajalenguas o intentar ver la faringe. Estimular el reflejo nauseoso puede desencadenar un laringoespasmo inmediato y un paro cardiorrespiratorio. Esto el examen lo pregunta una y otra vez.' },
        { show: ['qui', 'cef'], note: 'Primero la vía aérea, después el antibiótico',
          say: 'Lo que corresponde es dejar al niño tranquilo, con su madre, y trasladarlo al pabellón con un anestesiólogo o cirujano, para intubación o traqueostomía bajo anestesia. Recién con la vía aérea asegurada se inicia ceftriaxona endovenosa. El orden importa: la vía aérea primero.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Croup versus epiglotitis',
      head: ['Dato', 'Croup', 'Epiglotitis'],
      rows: [
        { cells: ['Causa y edad', 'Virus parainfluenza; 6 meses a 3 años', 'Bacteria; 2 a 7 años y adultos'],
          say: 'Esta tabla es la que te separa los dos cuadros. El croup es viral, en lactantes y preescolares pequeños. La epiglotitis es bacteriana y en niños un poco mayores.' },
        { cells: ['Inicio', 'Progresivo, con coriza', 'Hiperagudo, en horas'],
          say: 'El croup se instala en uno o dos días con resfrío. La epiglotitis, en horas, con fiebre alta.' },
        { cells: ['Tos y voz', 'Tos perruna y disfonía', 'Sin tos; voz apagada'],
          say: 'El croup tiene tos perruna y disfonía. La epiglotitis no tiene tos, y la voz es apagada.' },
        { cells: ['Signo clave', 'Estridor inspiratorio rudo', 'Babeo y postura en trípode'],
          say: 'El signo clave del croup es el estridor rudo con tos metálica. El de la epiglotitis es el babeo con la postura en trípode.' },
        { cells: ['Faringe', 'Se puede examinar', 'No deprimir la lengua'],
          say: 'En el croup puedes examinar la faringe sin problema. En la epiglotitis, nunca.' },
        { cells: ['Tratamiento', 'Dexametasona + adrenalina nebulizada', 'Vía aérea en pabellón + ceftriaxona'],
          say: 'Y el tratamiento: corticoide y adrenalina para el croup; asegurar la vía aérea en pabellón y ceftriaxona para la epiglotitis.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del niño con estridor, a la conducta según el cuadro y el grado.',
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Un lactante de 14 meses llega a urgencia a las 2:00 AM con tos ronca perruna de inicio brusco y dificultad respiratoria. Tuvo congestión nasal leve 2 días. Está tranquilo en brazos de su madre, afebril. En reposo se ausculta estridor inspiratorio continuo, con retracción supraesternal e intercostal moderada. FR 38 por minuto, saturación 96% ambiental, murmullo pulmonar simétrico. Recibió dexametasona oral y adrenalina nebulizada, y a los 30 minutos está sin estridor.',
      question: '¿Cuál es la conducta más adecuada ahora?',
      options: [
        { letter: 'A', text: 'Alta inmediata, porque ya no tiene estridor' },
        { letter: 'B', text: 'Observación en urgencia por 2 a 4 horas y alta si no reaparece el estridor en reposo' },
        { letter: 'C', text: 'Agregar amoxicilina oral por 7 días' },
        { letter: 'D', text: 'Intubación orotraqueal profiláctica' },
        { letter: 'E', text: 'Repetir la dexametasona cada 6 horas por 3 días' },
      ],
      correct: 'B',
      explanation: 'Es un croup grado II de Taussig. La adrenalina alivia rápido, pero su efecto dura unas 2 horas y puede haber rebote, por lo que se observa 2 a 4 horas. La dexametasona es de dosis única. No hay indicación de antibiótico en un croup viral.',
      say: {
        stem: 'Un lactante de catorce meses llega de madrugada con tos perruna brusca y dificultad respiratoria, tras dos días de congestión. Está tranquilo y sin fiebre, pero tiene estridor inspiratorio en reposo y tiraje moderado. Recibió dexametasona oral y adrenalina nebulizada, y a la media hora ya no tiene estridor.',
        question: '¿Cuál es la conducta más adecuada ahora?',
        options: 'Las opciones: alta inmediata; observación de dos a cuatro horas y alta si no reaparece el estridor; amoxicilina por siete días; intubación profiláctica; o repetir la dexametasona cada seis horas. Piénsalo.',
        answer: 'Es la B. Estridor en reposo con tiraje moderado es un grado dos, y por eso recibió adrenalina. La tentación es la A: se ve bien y quieres enviarlo a la casa. Pero la adrenalina dura dos horas y el edema puede volver. Se observa, y si sigue sin estridor, se va, porque la dexametasona ya está actuando.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un preescolar de 3 años es llevado a urgencia por cuadro de 4 horas con fiebre de 39,8 °C, aspecto tóxico y gran dificultad respiratoria. No tiene tos. Está sentado, inclinado hacia adelante con el cuello extendido, con la boca entreabierta y abundante sialorrea. Emite un estridor inspiratorio apagado.',
      question: '¿Cuál de las siguientes acciones está formalmente contraindicada?',
      options: [
        { letter: 'A', text: 'Oxígeno suplementario humidificado sin invadir al paciente' },
        { letter: 'B', text: 'Traslado inmediato a pabellón con un anestesiólogo' },
        { letter: 'C', text: 'Deprimir la lengua con un abatelenguas para inspeccionar la faringe' },
        { letter: 'D', text: 'Ceftriaxona endovenosa una vez asegurada la vía aérea' },
        { letter: 'E', text: 'Mantener a la madre junto al niño para evitar el llanto' },
      ],
      correct: 'C',
      explanation: 'Es una epiglotitis aguda: fiebre tóxica, babeo, postura en trípode y ausencia de tos. Deprimir la lengua puede desencadenar laringoespasmo y paro cardiorrespiratorio. Se debe asegurar la vía aérea en pabellón.',
      say: {
        stem: 'Un caso representativo del banco. Un preescolar de tres años con cuatro horas de fiebre alta, aspecto tóxico y gran dificultad respiratoria. No tiene tos. Está sentado, inclinado hacia adelante, con el cuello extendido y mucho babeo, con un estridor apagado.',
        question: '¿Cuál de las acciones está formalmente contraindicada?',
        options: 'Las opciones: oxígeno humidificado sin invadir; traslado a pabellón con anestesiólogo; deprimir la lengua con abatelenguas; ceftriaxona tras asegurar la vía aérea; o mantener a la madre junto al niño. Piénsalo.',
        answer: 'Es la C. Fiebre tóxica, babeo, trípode y sin tos: es una epiglotitis. Todas las demás acciones apuntan a no agitar al niño y asegurar la vía aérea. El abatelenguas estimula el reflejo nauseoso y puede producir un laringoespasmo fatal.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 133',
      stem: 'Un lactante de 12 meses presenta un cuadro de tos, rinorrea y fiebre hasta 38,8°C de 24 horas de evolución, a lo que hoy se agregó dificultad respiratoria. Al examen físico presenta estridor inspiratorio, que aumenta con el llanto, asociado a retracción intercostal moderada. Su saturación de oxígeno es 94% y, al examen pulmonar se ausculta murmullo pulmonar conservado bilateral con transmisión de ruidos desde la vía aérea superior.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Laringitis aguda obstructiva' },
        { letter: 'B', text: 'Neumonía atípica' },
        { letter: 'C', text: 'Neumonía bilateral' },
        { letter: 'D', text: 'Asma del lactante' },
        { letter: 'E', text: 'Neumonitis viral' },
      ],
      correct: 'A',
      explanation: 'Es una laringitis aguda obstructiva clásica: un cuadro gripal seguido de síntomas obstructivos, con estridor laríngeo.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticuatro. Un lactante de doce meses con un día de tos, rinorrea y fiebre, al que hoy se agregó dificultad respiratoria. Tiene estridor inspiratorio que aumenta con el llanto, retracción intercostal moderada, y el murmullo pulmonar está conservado, con ruidos transmitidos desde arriba.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: laringitis aguda obstructiva; neumonía atípica; neumonía bilateral; asma del lactante; o neumonitis viral. Piénsalo.',
        answer: 'Es la A. Mira la pista: el ruido es inspiratorio y viene de la vía aérea superior, mientras el pulmón se ausculta conservado. Un resfrío que se vuelve obstructivo, con estridor, en un lactante, es croup. En el asma el ruido sería espiratorio, y en las neumonías habría alteración del murmullo pulmonar.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 158',
      stem: 'Una niña de 3 años, previamente sana, presenta un cuadro de 2 días de evolución de rinorrea, asociada a fiebre de 39°C, con tos disfónica, a la que se agrega dificultad respiratoria hace una hora. Al examen físico, su frecuencia respiratoria es 48 por minuto, se escucha estridor inspiratorio y espiratorio y se objetiva retracción subcostal y supraesternal.',
      question: 'La conducta inicial más adecuada es:',
      options: [
        { letter: 'A', text: 'Administrar adrenalina subcutánea' },
        { letter: 'B', text: 'Realizar nebulizaciones con salbutamol al 0,5%' },
        { letter: 'C', text: 'Realizar intubación orotraqueal' },
        { letter: 'D', text: 'Realizar nebulizaciones con bromuro de ipatropio al 0,5%' },
        { letter: 'E', text: 'Realizar nebulizaciones con adrenalina racémica al 0,1%' },
      ],
      correct: 'E',
      explanation: 'La laringitis obstructiva se trata con oxígeno, adrenalina racémica en nebulización y corticoides sistémicos, en ese orden de administración.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil dieciocho. Una niña de tres años con dos días de rinorrea, fiebre y tos disfónica, y una hora de dificultad respiratoria. Tiene estridor inspiratorio y espiratorio, y retracción subcostal y supraesternal.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: adrenalina subcutánea; nebulizaciones con salbutamol; intubación orotraqueal; nebulizaciones con bromuro de ipratropio; o nebulizaciones con adrenalina racémica. Piénsalo.',
        answer: 'Es la E. Un estridor bifásico con tiraje es un croup severo, y lo primero es la adrenalina nebulizada, junto con oxígeno y corticoide. El salbutamol y el ipratropio actúan en el músculo liso bronquial y no sobre el edema de la subglotis. La intubación queda para el agotamiento, y la adrenalina subcutánea no es la vía.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: croup y epiglotitis',
      cards: [
        { title: 'Croup', tag: 'Viral, subglótico', kind: 'key', items: [
          { t: 'Tríada: tos perruna, estridor, disfonía', d: 'Parainfluenza; 6 meses a 3 años',
            say: 'Cerremos con las reglas de oro. El croup es viral, subglótico, y su tríada es tos perruna, estridor inspiratorio y disfonía.' },
          { t: 'Dexametasona en todos', d: 'Adrenalina si hay estridor en reposo',
            say: 'La dexametasona se da en todos los grados. La adrenalina nebulizada va cuando el estridor está presente en reposo, desde el grado dos.' },
          { t: 'Adrenalina: observar 2 a 4 horas', d: 'Por el efecto rebote',
            say: 'Y todo niño que recibe adrenalina se observa al menos dos horas por el rebote.' },
        ] },
        { title: 'Epiglotitis', tag: 'Bacteriana, emergencia', kind: 'alert', items: [
          { t: 'Babeo, trípode, fiebre, sin tos', d: 'Hiperaguda y tóxica',
            say: 'La epiglotitis se reconoce por la fiebre alta, el babeo y la postura en trípode, sin tos.' },
          { t: 'Prohibido el bajalenguas', d: 'Pabellón, vía aérea y ceftriaxona',
            say: 'Si te llevas una sola idea de hoy: nunca uses el bajalenguas ante la sospecha de epiglotitis; primero se asegura la vía aérea en pabellón y después la ceftriaxona. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo del niño con estridor: croup según Taussig y epiglotitis',
    root: N('start', 'Niño con estridor', '¿Tos perruna con coriza, o babeo y fiebre tóxica?',
      'Un niño con estridor. Lo primero es distinguir croup de epiglotitis.',
      ['Babeo, trípode, fiebre alta, sin tos', N('alert', 'Sospecha de epiglotitis', 'No usar bajalenguas',
        'Es una emergencia. No se examina la faringe ni se agita al niño.',
        ['Aseguro la vía aérea', N('refer', 'Pabellón con anestesista', 'Intubación o traqueostomía',
          'Se traslada a pabellón para intubación o traqueostomía bajo anestesia.',
          ['Vía aérea asegurada', N('do', 'Ceftriaxona endovenosa', 'Luego cuidados intensivos',
            'Con la vía aérea asegurada se inicia ceftriaxona endovenosa.')],
        )],
      )],
      ['Tos perruna, coriza, afebril o febrícula', N('q', 'Croup: grado de Taussig', '¿Hay estridor en reposo?',
        'Es un croup. Se clasifica con la escala de Taussig.',
        ['Solo al llorar (grado I)', N('ok', 'Dexametasona oral y alta', 'Educar signos de alarma',
          'Dexametasona oral en dosis única, y alta con educación.')],
        ['Estridor en reposo (grado II)', N('do', 'Dexametasona + adrenalina nebulizada', 'Oxígeno; observar 2 a 4 horas',
          'Dexametasona más adrenalina nebulizada con oxígeno, y observación por el rebote.',
          ['Sin estridor en reposo', N('ok', 'Alta a domicilio', 'El corticoide ya actúa',
            'Si no hay estridor, con buena entrada de aire y saturación normal, se va a la casa.')],
          ['Persiste el estridor', N('refer', 'Hospitalizar', 'Observación continua',
            'Si persiste el estridor en reposo, se hospitaliza.')],
        )],
        ['Severo o agotado (grado III o IV)', N('alert', 'Adrenalina inmediata + dexametasona EV', 'Hospitalizar; intubar si agota',
          'En el grado tres, adrenalina de inmediato, dexametasona endovenosa y oxígeno. En el cuatro, ventilación e intubación con un tubo más fino.')],
      )],
    ),
  },
};
