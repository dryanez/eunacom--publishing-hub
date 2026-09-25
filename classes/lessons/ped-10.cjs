// Clase ped-10 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_pediatria_bloque_3.cjs (ped-10).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-10',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cinco cuadros que se distinguen por la relación entre la fiebre y el exantema',
      say: 'Bienvenido. Hoy vemos los exantemas infantiles: exantema súbito, eritema infeccioso, escarlatina, varicela y enfermedad de Kawasaki. Es un tema de alta frecuencia, y se ordena con una sola pregunta: ¿qué pasa con la fiebre cuando aparece el exantema? Esa relación te va a resolver casi todas las preguntas de hoy. Empecemos.',
    },

    {
      type: 'flow',
      kicker: 'La pregunta que ordena todo',
      title: '¿Qué hace la fiebre cuando sale el exantema?',
      nodes: [
        { id: 'sub', col: 0, row: 0, k: 'good', t: 'Exantema súbito', s: 'La fiebre cae y ahí aparece' },
        { id: 'eri', col: 0, row: 1, k: 'good', t: 'Eritema infeccioso', s: 'Fiebre baja o ausente' },
        { id: 'esc', col: 1, row: 0, k: 'risk', t: 'Escarlatina', s: 'Fiebre alta junto con el exantema' },
        { id: 'var', col: 1, row: 1, k: 'risk', t: 'Varicela', s: 'Fiebre moderada, exantema vesicular' },
        { id: 'kaw', col: 2, row: 0, k: 'alert', t: 'Kawasaki', s: 'Fiebre de 5 días o más, obligatoria' },
      ],
      edges: [],
      steps: [
        { show: ['sub'], note: 'Fiebre alta que cede, y ahí sale el exantema',
          say: 'Vamos a ordenar los cinco cuadros por una sola pregunta: cuando aparece el exantema, ¿qué está pasando con la fiebre? En el exantema súbito, la fiebre es alta durante varios días y cae de golpe, y justo en ese momento sale el exantema.' },
        { show: ['eri'], note: 'Con poca o nada de fiebre',
          say: 'En el eritema infeccioso, la fiebre es baja o directamente no existe: lo que domina es la cara.' },
        { show: ['esc'], note: 'Fiebre alta al mismo tiempo que el exantema',
          say: 'En la escarlatina, la fiebre es alta y viene junto con el exantema, no antes ni después.' },
        { show: ['var'], note: 'Fiebre moderada, y lo que manda es la piel',
          say: 'En la varicela, la fiebre es moderada, pero lo que te define el diagnóstico es la piel: vesículas en distintos estadios a la vez.' },
        { show: ['kaw'], note: 'Cinco días de fiebre es el requisito obligatorio',
          say: 'Y en Kawasaki, la fiebre tiene que durar cinco días o más. Sin ese requisito, no puedes hacer el diagnóstico, por muchos otros signos que tenga. Vamos uno por uno.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Exantema súbito',
      title: 'La fiebre cae, y recién ahí sale el exantema',
      cards: [
        { title: 'Clínica', tag: 'Lactante de 6 a 18 meses', kind: 'criteria', items: [
          { t: 'Fiebre alta 3 a 4 días', d: 'El niño se ve bien entre los picos',
            say: 'Empecemos por el exantema súbito, causado por el herpesvirus humano seis. Afecta a lactantes de seis a dieciocho meses, con fiebre alta durante tres o cuatro días, en un niño que se ve bien y juega entre los picos.' },
          { t: 'La fiebre cede, sale el exantema', d: 'Maculopapular rosado en el tronco',
            say: 'Y aquí está la clave que te van a preguntar siempre: la fiebre cede de forma brusca, y justo en ese momento aparece un exantema rosado en el tronco, que respeta la cara.' },
        ] },
        { title: 'Datos que se preguntan', tag: 'Ojo', kind: 'alert', items: [
          { t: 'Causa de convulsión febril', d: 'Es la más frecuente en este grupo',
            say: 'Este virus es la causa más frecuente de convulsión febril en este grupo de edad, así que cuando veas ese antecedente, piensa en él.' },
          { t: 'Manejo: solo observación', d: 'Es autolimitado, sin antiviral',
            say: 'Y el manejo es solo de soporte. No necesita antiviral: se resuelve solo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Eritema infeccioso',
      title: 'La bofetada, y después el encaje',
      cards: [
        { title: 'Clínica', tag: 'Escolar de 5 a 15 años', kind: 'criteria', items: [
          { t: 'Signo de la bofetada', d: 'Mejillas rojas, respeta la boca',
            say: 'El eritema infeccioso lo causa el parvovirus B diecinueve, y afecta a escolares. Empieza con la cara roja, el clásico signo de la bofetada, que respeta la zona alrededor de la boca.' },
          { t: 'Exantema en encaje', d: 'Reticular, en tronco y extremidades',
            say: 'Después viene un exantema en encaje, reticular, en el tronco y las extremidades, con fiebre baja o ausente. Y puede reaparecer por semanas con el sol o el ejercicio.' },
        ] },
        { title: 'A quién le complica', tag: 'Ojo con estos dos grupos', kind: 'alert', items: [
          { t: 'Anemia hemolítica de base', d: 'Puede gatillar una crisis aplásica',
            say: 'Ten cuidado con dos grupos: si el niño tiene una anemia hemolítica de base, como esferocitosis, este virus le puede gatillar una crisis aplásica.' },
          { t: 'Embarazada infectada', d: 'Riesgo de hidrops fetal grave',
            say: 'Y si infecta a una embarazada, el riesgo es un hidrops fetal grave. Cuando el enunciado te ponga a la madre o a un hermano con anemia, esa es la pista.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Escarlatina',
      title: 'Piel de lija y lengua aframbuesada',
      cards: [
        { title: 'Clínica', tag: 'Estreptococo del grupo A', kind: 'criteria', items: [
          { t: 'Faringoamigdalitis con fiebre alta', d: 'El exantema sale junto con la fiebre',
            say: 'La escarlatina la produce el estreptococo pyogenes, con toxinas que dan el exantema. Parte como una faringoamigdalitis con fiebre alta, y el exantema aparece al mismo tiempo, no después.' },
          { t: 'Piel de lija, signo de Pastia', d: 'Y lengua aframbuesada, roja y con papilas',
            say: 'El exantema se siente como lija al tacto, con el signo de Pastia en los pliegues, y la lengua pasa a verse aframbuesada, roja y con las papilas marcadas.' },
        ] },
        { title: 'Tratamiento', tag: 'Por qué importa', kind: 'pharma', items: [
          { t: 'Amoxicilina o penicilina, 10 días', d: 'Completos, no puedes acortarlos',
            say: 'Tratas con amoxicilina o penicilina oral por diez días completos. Y la razón de dar antibiótico no es solo acortar el cuadro.' },
          { t: 'Previene la fiebre reumática', d: 'No previene la glomerulonefritis',
            say: 'El objetivo real es prevenir la fiebre reumática aguda. Ojo con esto: el antibiótico no previene la glomerulonefritis postestreptocócica, que puede aparecer igual.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Varicela',
      title: 'Cielo estrellado: todos los estadios a la vez',
      cards: [
        { title: 'Clínica', tag: 'Virus varicela zóster', kind: 'criteria', items: [
          { t: 'Mácula, pápula, vesícula, costra', d: 'Todo conviviendo al mismo tiempo',
            say: 'La varicela la causa el virus varicela zóster, muy contagioso. El exantema es pruriginoso, y pasa por mácula, pápula, vesícula y costra, pero lo característico es que conviven todos los estadios a la vez: eso es el patrón en cielo estrellado.' },
        ] },
        { title: 'Lo que nunca se indica', tag: 'Contraindicación absoluta', kind: 'alert', items: [
          { t: 'Nunca ácido acetilsalicílico', d: 'Riesgo de síndrome de Reye',
            say: 'Y aquí viene una regla que se pregunta siempre: nunca le des aspirina a un niño con varicela, por el riesgo de síndrome de Reye, una falla hepática y cerebral grave.' },
          { t: 'Paracetamol para la fiebre', d: 'Es el antipirético seguro',
            say: 'El antipirético seguro es el paracetamol. Y si el niño se sobreinfecta la piel, eso es la complicación más frecuente, casi siempre por estafilococo o el mismo estreptococo.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Enfermedad de Kawasaki',
      title: 'Fiebre de 5 días o más, y cuatro de cinco criterios',
      nodes: [
        { id: 'fie', col: 0, row: 1, k: 'start', t: 'Fiebre 5 días o más', s: 'Requisito obligatorio, sin excepción' },
        { id: 'oju', col: 1, row: 0, k: 'q', t: 'Ojos rojos sin secreción', s: 'Inyección conjuntival no exudativa' },
        { id: 'boc', col: 1, row: 1, k: 'q', t: 'Labios y lengua', s: 'Fisurados, lengua aframbuesada' },
        { id: 'ext', col: 1, row: 2, k: 'q', t: 'Manos y pies', s: 'Edema y eritema palmoplantar' },
        { id: 'exa', col: 2, row: 0, k: 'q', t: 'Exantema polimorfo', s: 'Nunca vesicular' },
        { id: 'gan', col: 2, row: 1, k: 'q', t: 'Ganglio cervical grande', s: 'Más de 1,5 centímetros' },
        { id: 'dia', col: 3, row: 1, k: 'alert', t: 'Kawasaki confirmado', s: 'Fiebre + 4 de estos 5 criterios' },
      ],
      edges: [
        { from: 'fie', to: 'oju' }, { from: 'fie', to: 'boc' }, { from: 'fie', to: 'ext' },
        { from: 'oju', to: 'dia' }, { from: 'boc', to: 'dia' }, { from: 'ext', to: 'dia' }, { from: 'exa', to: 'dia' }, { from: 'gan', to: 'dia' },
      ],
      steps: [
        { show: ['fie'], note: 'Sin esto, no hay diagnóstico',
          say: 'Vamos con el cuadro más grave: Kawasaki. Es una vasculitis que ataca las arterias coronarias, y el requisito obligatorio, sin el cual no puedes diagnosticarlo, es fiebre de cinco días o más.' },
        { show: ['oju'], note: 'Bilateral y sin pus',
          say: 'Con esa fiebre, necesitas al menos cuatro de cinco criterios. El primero es la inyección conjuntival bilateral, pero sin secreción purulenta.' },
        { show: ['boc'], note: 'Labios secos y fisurados',
          say: 'El segundo son los cambios en la boca: labios rojos, secos y fisurados, y la lengua aframbuesada.' },
        { show: ['ext'], note: 'Doloroso, en la fase aguda',
          say: 'El tercero, los cambios en las extremidades: edema y eritema en palmas y plantas, doloroso.' },
        { show: ['exa'], note: 'Cualquier forma, menos vesicular',
          say: 'El cuarto es el exantema, que puede tomar cualquier forma, generalizado, pero nunca vesicular ni petequial.' },
        { show: ['gan'], note: 'El criterio menos frecuente',
          say: 'Y el quinto, una adenopatía cervical de más de un centímetro y medio, casi siempre de un solo lado. Es el criterio que menos aparece, pero cuando está, cuenta igual.' },
        { show: ['dia'], note: 'Cuatro de cinco, con la fiebre obligatoria',
          say: 'Con la fiebre obligatoria más cuatro de estos cinco, tienes el diagnóstico. Y lo que está en juego es serio: sin tratamiento, hasta uno de cada cuatro niños desarrolla aneurismas coronarios.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Kawasaki',
      title: 'Tratamiento: antes del día 10',
      cards: [
        { title: 'Tratamiento urgente', tag: 'Los dos pilares', kind: 'pharma', items: [
          { t: 'Inmunoglobulina endovenosa', d: 'Dos gramos por kilo, en una sola infusión',
            say: 'El tratamiento tiene dos pilares. El primero es la inmunoglobulina endovenosa, dos gramos por kilo en una infusión única, y baja el riesgo de aneurismas de un veinticinco a menos de un cinco por ciento.' },
          { t: 'Ácido acetilsalicílico', d: 'Dosis alta primero, luego antiagregante',
            say: 'El segundo es el ácido acetilsalicílico, a dosis alta mientras hay fiebre, y después a dosis baja, antiagregante, por varias semanas. Fíjate en la ironía: es la aspirina que prohibimos en varicela, y aquí es el tratamiento de elección.' },
        ] },
        { title: 'Lo que no puede faltar', tag: 'Antes del día 10', kind: 'alert', items: [
          { t: 'Dar la inmunoglobulina a tiempo', d: 'Antes del día diez de enfermedad',
            say: 'Y el detalle que más se pregunta: la inmunoglobulina se da antes del día diez de enfermedad. Después de esa ventana, el riesgo de daño coronario ya no se puede prevenir igual.' },
          { t: 'Ecocardiograma siempre', d: 'Al diagnóstico y a las 6-8 semanas',
            say: 'Y el ecocardiograma se pide siempre, al momento del diagnóstico y de nuevo a las seis u ocho semanas, para vigilar las coronarias.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos los cinco cuadros en un solo árbol, usando la relación entre la fiebre y el exantema.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que más se confunde entre exantemas',
      head: ['Cuadro', 'La fiebre y el exantema', 'Error frecuente'],
      rows: [
        { cells: ['Exantema súbito', 'La fiebre cae y ahí sale el exantema', 'Confundirlo con alergia a la amoxicilina'],
          say: 'Repasemos las trampas. En el exantema súbito, la fiebre cae y recién ahí sale el exantema. La trampa clásica es confundirlo con una alergia, porque muchos padres ya habían dado amoxicilina.' },
        { cells: ['Eritema infeccioso', 'Poca fiebre, bofetada y encaje', 'Pedir estudio de sarampión'],
          say: 'En el eritema infeccioso, hay poca fiebre, la bofetada y el encaje. El error es pedir un estudio de sarampión, que además tiene tos y conjuntivitis intensas.' },
        { cells: ['Escarlatina', 'Fiebre alta junto al exantema', 'No dar antibiótico por ser "solo un virus"'],
          say: 'En la escarlatina, la fiebre es alta junto con el exantema. El error es no dar antibiótico pensando que es viral, cuando el objetivo es prevenir la fiebre reumática.' },
        { cells: ['Varicela', 'Fiebre moderada, vesículas mixtas', 'Indicar aspirina para la fiebre'],
          say: 'En la varicela, la fiebre es moderada y manda la piel. El error grave, que no puedes cometer nunca, es indicar aspirina.' },
        { cells: ['Kawasaki', 'Fiebre de 5 días o más, obligatoria', 'Diagnosticarlo con menos de 5 días de fiebre'],
          say: 'Y en Kawasaki, la fiebre tiene que llegar a cinco días. Diagnosticarlo antes, aunque tenga varios de los otros signos, es el error que el examen te pone para ver si conoces la regla.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Niña de 3 años, con fiebre de 39,5 °C durante 6 días, decaída. Al examen: inyección conjuntival bilateral sin secreción, labios agrietados y sangrantes, lengua roja con papilas marcadas, exantema polimorfo en el tronco, y edema doloroso de manos y pies. No hay adenopatías palpables.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Amoxicilina oral por 10 días, sospechando escarlatina' },
        { letter: 'B', text: 'Inmunoglobulina endovenosa más ácido acetilsalicílico, y ecocardiograma' },
        { letter: 'C', text: 'Observación domiciliaria, porque falta la adenopatía cervical' },
        { letter: 'D', text: 'Aciclovir oral, sospechando varicela atípica' },
        { letter: 'E', text: 'Antihistamínicos, sospechando una reacción alérgica' },
      ],
      correct: 'B',
      explanation: 'Fiebre de 5 días o más (aquí 6) más 4 de los 5 criterios (ojos, boca, exantema, extremidades; falta solo la adenopatía) confirma Kawasaki. No necesitas los 5 criterios, basta con 4. El tratamiento urgente es inmunoglobulina más aspirina, con ecocardiograma para vigilar las coronarias.',
      say: {
        stem: 'Vamos con un caso. Niña de tres años, con fiebre de treinta y nueve coma cinco durante seis días, decaída. Al examen tiene los ojos rojos sin secreción, los labios agrietados y sangrantes, la lengua roja con papilas marcadas, un exantema polimorfo en el tronco, y edema doloroso de manos y pies. No se palpan adenopatías.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: amoxicilina por escarlatina, inmunoglobulina más aspirina y ecocardiograma, observación porque falta la adenopatía, aciclovir por varicela atípica, o antihistamínicos por alergia. Piénsalo.',
        answer: 'Es la B. Cuenta los criterios: fiebre de seis días, más los ojos, la boca, el exantema y las extremidades. Son cuatro de cinco, y eso ya te alcanza para el diagnóstico, aunque falte la adenopatía. No necesitas los cinco criterios completos. El tratamiento urgente es inmunoglobulina endovenosa más aspirina, con ecocardiograma para vigilar las coronarias.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 13',
      stem: 'Lactante de 8 meses con fiebre de 39,5 °C durante 5 días. Al sexto día la fiebre cede y aparece un exantema rosado generalizado no pruriginoso. El niño está en buen estado general.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Control sano habitual: es un exantema súbito, de evolución benigna' },
        { letter: 'B', text: 'Derivar a especialista de inmediato' },
        { letter: 'C', text: 'Hospitalizar para estudio' },
        { letter: 'D', text: 'Iniciar aciclovir oral' },
        { letter: 'E', text: 'Solicitar serología viral urgente' },
      ],
      correct: 'A',
      explanation: 'Fiebre alta de varios días que cede bruscamente, seguida de exantema rosado en un lactante con buen estado general: exantema súbito por HHV-6. Es diagnóstico clínico, autolimitado, y no requiere estudio ni antiviral.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de julio de dos mil veinticinco. Lactante de ocho meses con fiebre de treinta y nueve coma cinco durante cinco días. Al sexto día la fiebre cede y aparece un exantema rosado generalizado, sin picazón. El niño está en buen estado general.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: control sano habitual por exantema súbito, derivar a especialista, hospitalizar para estudio, aciclovir oral, o serología viral urgente. Piénsalo.',
        answer: 'Es la A. La secuencia es exactamente la que vimos: fiebre alta que cae de golpe, y ahí sale el exantema rosado, en un lactante que se ve bien. Es exantema súbito, diagnóstico clínico, y no necesita ni estudio ni antiviral: solo control habitual.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 37',
      stem: 'Niño de 5 años con fiebre baja hasta 37,5 °C y eritema malar. Dos días después se agrega un exantema eritematoso macular en el tronco y las extremidades, con un cuadro que dura un total de 10 días.',
      question: '¿Cuál es el agente etiológico más probable?',
      options: [
        { letter: 'A', text: 'Streptococcus pyogenes' },
        { letter: 'B', text: 'Parvovirus B19' },
        { letter: 'C', text: 'Virus de Epstein-Barr' },
        { letter: 'D', text: 'Virus herpes humano número 6' },
        { letter: 'E', text: 'Virus rubéola' },
      ],
      correct: 'B',
      explanation: 'Eritema malar (signo de la bofetada) seguido de exantema reticular en tronco y extremidades, con fiebre baja y curso prolongado, es el cuadro clásico del eritema infeccioso por Parvovirus B19.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil diecinueve. Niño de cinco años con fiebre baja, hasta treinta y siete coma cinco, y eritema en las mejillas. Dos días después se agrega un exantema en el tronco y las extremidades, con un cuadro que dura diez días en total.',
        question: '¿Cuál es el agente etiológico más probable?',
        options: 'Las opciones: estreptococo pyogenes, parvovirus B diecinueve, virus de Epstein-Barr, herpesvirus humano seis, o rubéola. Piénsalo.',
        answer: 'Es la B. El eritema malar, la bofetada, con fiebre baja y un exantema que se prolonga por días, es el cuadro clásico del eritema infeccioso, y el culpable es el parvovirus B diecinueve. El herpesvirus seis daría fiebre alta que cae bruscamente, no esta fiebre baja y prolongada.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2018 · Pregunta 96',
      stem: 'Niño de 6 años con odinofagia intensa, fiebre y decaimiento. Luego aparece un exantema eritematoso generalizado, más marcado en los pliegues inguinales y axilares. Al examen: febril, faringe eritematosa, adenopatías cervicales sensibles, y piel áspera al tacto.',
      question: '¿Qué complicación puede desarrollar este paciente?',
      options: [
        { letter: 'A', text: 'Aneurismas coronarios' },
        { letter: 'B', text: 'Meningitis' },
        { letter: 'C', text: 'Fascitis necrotizante' },
        { letter: 'D', text: 'Glomerulonefritis' },
        { letter: 'E', text: 'Miocarditis' },
      ],
      correct: 'D',
      explanation: 'Es un cuadro de escarlatina (odinofagia, fiebre, exantema en piel de lija más marcado en pliegues). La complicación que puede aparecer, incluso tratada, es la glomerulonefritis postestreptocócica; el antibiótico previene la fiebre reumática, pero no esta.',
      say: {
        stem: 'Una pregunta real más, del EUNACOM de julio de dos mil dieciocho. Niño de seis años con odinofagia intensa, fiebre y decaimiento. Luego aparece un exantema generalizado, más marcado en los pliegues de la ingle y las axilas. Está febril, con la faringe roja, adenopatías cervicales sensibles, y la piel áspera al tacto.',
        question: '¿Qué complicación puede desarrollar este paciente?',
        options: 'Las opciones: aneurismas coronarios, meningitis, fascitis necrotizante, glomerulonefritis, o miocarditis. Piénsalo.',
        answer: 'Es la D. El cuadro es una escarlatina: piel áspera, más marcada en los pliegues, con faringitis y fiebre. Y aquí está el dato que se pregunta: la glomerulonefritis postestreptocócica puede aparecer aunque hayas dado el antibiótico a tiempo. El antibiótico previene la fiebre reumática, no esta complicación.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'La regla que ordena todo', tag: 'Fiebre y exantema', kind: 'key', items: [
          { t: 'La fiebre cae, sale el exantema', d: 'Es exantema súbito',
            say: 'Cerremos con las reglas de oro. Si la fiebre cae y ahí sale el exantema, piensa en exantema súbito.' },
          { t: 'Fiebre alta junto al exantema', d: 'Es escarlatina',
            say: 'Si la fiebre alta viene junto con el exantema, piensa en escarlatina.' },
        ] },
        { title: 'Las dos urgencias', tag: 'No te las puedes perder', kind: 'alert', items: [
          { t: 'Kawasaki: 5 días de fiebre', d: 'Más 4 de 5 criterios, sin excepción',
            say: 'Kawasaki exige cinco días de fiebre, más cuatro de cinco criterios, y se trata con inmunoglobulina y aspirina antes del día diez.' },
          { t: 'Varicela: nunca aspirina', d: 'Por el síndrome de Reye',
            say: 'Y en varicela, nunca aspirina, por el síndrome de Reye. Si te llevas una sola idea de hoy: mira qué hace la fiebre cuando sale el exantema, y ya tienes la mitad de la respuesta. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Exantemas infantiles: la fiebre te da la pista',
    root: N('start', 'Niño con fiebre y exantema', 'Sin foco quirúrgico evidente',
      'Tienes un niño con fiebre y un exantema. La pregunta que lo ordena todo es una sola: ¿qué está haciendo la fiebre cuando aparece el exantema?',
      ['', N('q', '¿Qué hace la fiebre?', 'Antes, junto, o cinco días obligatorios',
        'Fíjate si la fiebre ya cedió, si sigue alta junto al exantema, o si lleva cinco días o más.',
        ['La fiebre cae y ahí sale', N('ok', 'Exantema súbito', 'Rosado en tronco, respeta la cara',
          'Lactante de seis a dieciocho meses, con fiebre alta que cae de golpe y da paso al exantema. Solo observación, se resuelve solo.')],
        ['Fiebre baja, bofetada facial', N('ok', 'Eritema infeccioso', 'Encaje reticular después',
          'Escolar con eritema malar, la bofetada, y luego un exantema en encaje. Ojo si hay anemia hemolítica de base o si la madre está embarazada.')],
        ['Fiebre alta junto al exantema', N('do', 'Escarlatina', 'Piel de lija y lengua aframbuesada',
          'Faringoamigdalitis con exantema áspero al tacto. Tratas con amoxicilina o penicilina diez días, para prevenir la fiebre reumática.')],
        ['Vesículas en todos los estadios', N('alert', 'Varicela', 'Nunca aspirina: síndrome de Reye',
          'Exantema en cielo estrellado, con mácula, pápula, vesícula y costra conviviendo a la vez. El antipirético seguro es el paracetamol.')],
        ['5 días de fiebre o más', N('alert', 'Kawasaki: 4 de 5 criterios', 'Inmunoglobulina + aspirina, antes del día 10',
          'Ojos rojos sin secreción, labios fisurados, exantema polimorfo, edema en manos y pies, y adenopatía cervical. Con cuatro de cinco, confirmas el diagnóstico.')])]),
  },
};
