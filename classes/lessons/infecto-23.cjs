// Clase 5.4 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_infectologia.cjs (inf-23).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'infecto-23',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Un mismo virus: benigno en el niño, letal en el pulmón del adulto y doloroso al despertar',
      say: 'Bienvenidos. Cerramos los exantemas con el virus varicela-zóster: la varicela, sus complicaciones y el herpes zóster. En el niño casi siempre es benigna, pero el examen no pregunta lo benigno: pregunta la neumonitis del adulto, la ataxia del niño, la aspirina que no se da, y la vesícula en la punta de la nariz. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Un virus, dos enfermedades',
      nodes: [
        { id: 'pri', col: 0, row: 1, k: 'cause', t: 'Primoinfección por VVZ', s: 'Herpesvirus humano tipo 3' },
        { id: 'var', col: 1, row: 0, k: 'effect', t: 'Varicela', s: 'Exantema vesicular generalizado' },
        { id: 'lat', col: 1, row: 2, k: 'mech', t: 'Latencia en ganglios', s: 'Raíz dorsal o pares craneanos' },
        { id: 'inm', col: 2, row: 2, k: 'risk', t: 'Inmunosenescencia', s: 'O inmunosupresión' },
        { id: 'zos', col: 3, row: 2, k: 'effect', t: 'Herpes zóster', s: 'Un dermatoma, unilateral' },
      ],
      edges: [
        { from: 'pri', to: 'var' }, { from: 'pri', to: 'lat', label: 'queda dormido' },
        { from: 'lat', to: 'inm' }, { from: 'inm', to: 'zos', label: 'reactivación' },
      ],
      steps: [
        { show: ['pri'], note: 'Herpesvirus humano tipo 3',
          say: 'Partamos por el mecanismo, porque ordena toda la clase. El virus varicela-zóster es el herpesvirus humano tipo tres, y como todo herpesvirus, entra una vez y no se va nunca.' },
        { show: ['var'], note: 'La primera vez: varicela',
          say: 'La primera vez que infecta, produce la varicela: un exantema vesicular por todo el cuerpo.' },
        { show: ['lat'], note: 'Se esconde en los ganglios sensitivos',
          say: 'Pero cuando la varicela se resuelve, el virus no desaparece. Se queda latente en los ganglios de la raíz dorsal, o en los ganglios de los pares craneanos.' },
        { show: ['inm', 'zos'], note: 'Si la inmunidad baja, despierta en un dermatoma',
          say: 'Años después, cuando la inmunidad celular baja, por la edad o por inmunosupresión, el virus despierta y baja por un solo nervio. Eso es el herpes zóster, y por eso queda en un solo dermatoma, de un solo lado.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Varicela',
      title: 'Cielo estrellado de distribución centrípeta',
      cards: [
        { title: 'Contagio', tag: 'Aislamiento aéreo', kind: 'alert', items: [
          { t: 'Aerosoles y líquido vesicular', d: 'Altamente contagiosa',
            say: 'La varicela se transmite por aerosoles respiratorios y por contacto con el líquido de las vesículas, así que requiere aislamiento aéreo. Es muy contagiosa.' },
          { t: 'Desde 48 h antes del exantema', d: 'Hasta que todas sean costras',
            say: 'Y un dato que se pregunta: contagia desde cuarenta y ocho horas antes del exantema hasta que todas las lesiones estén en costra seca. Todas, no la mayoría.' },
        ] },
        { title: 'Exantema', tag: 'Patognomónico', kind: 'key', items: [
          { t: 'Distribución centrípeta', d: 'Cuero cabelludo, cara y tronco',
            say: 'El exantema tiene dos claves. La primera es la distribución centrípeta: predomina en el cuero cabelludo, la cara y el tronco, y respeta relativamente la parte distal de las extremidades.' },
          { t: 'Polimorfismo regional', d: 'Máculas, pápulas, vesículas y costras juntas',
            say: 'La segunda es el polimorfismo regional, el cielo estrellado: en una misma zona conviven máculas, pápulas, vesículas, pústulas y costras. Las vesículas son claras sobre una base roja, como gotas de rocío sobre un pétalo de rosa.' },
        ] },
        { title: 'Prevención', tag: 'PNI', kind: 'normal', items: [
          { t: 'Vacuna antivaricela', d: 'A los 18 y 36 meses',
            say: 'Y se previene: la vacuna contra la varicela está en el programa nacional de inmunizaciones, a los dieciocho y a los treinta y seis meses.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Complicaciones en niños',
      title: 'Piel, cerebelo y una aspirina prohibida',
      cards: [
        { title: 'Sobreinfección bacteriana', tag: 'La más frecuente en niños', kind: 'key', items: [
          { t: 'S. pyogenes o S. aureus', d: 'Por rascado de lesiones pruriginosas',
            say: 'Vamos a las complicaciones del niño. La más frecuente es la sobreinfección bacteriana de la piel. El prurito es intenso, el niño se rasca, y entra el Streptococcus pyogenes o el Staphylococcus aureus.' },
          { t: 'Impétigo, celulitis, fasceítis', d: 'Tratar con antiestafilocócico',
            say: 'Puede ser un impétigo, una celulitis como vimos en la clase de infecciones de piel, o en casos graves una fasceítis necrotizante. Se trata con cefazolina o cloxacilina, y aseo quirúrgico si es necrotizante.' },
        ] },
        { title: 'Ataxia cerebelosa aguda', tag: 'La neurológica más común', kind: 'normal', items: [
          { t: '1 a 3 semanas post-exantema', d: 'Marcha atáxica, dismetría, nistagmo',
            say: 'La complicación neurológica más común en niños es la ataxia cerebelosa aguda. Aparece una a tres semanas después del exantema, con marcha inestable, dismetría, temblor intencional y nistagmo, sin signos meníngeos.' },
          { t: 'Autolimitada', d: 'Pronóstico excelente, manejo conservador',
            say: 'Y lo importante: es autolimitada, con pronóstico excelente. Se maneja de forma conservadora.' },
        ] },
        { title: 'Síndrome de Reye', tag: 'Contraindicación absoluta', kind: 'alert', items: [
          { t: 'Aspirina en varicela o influenza', d: 'Encefalopatía + hígado graso',
            say: 'Y el síndrome de Reye: una encefalopatía aguda con degeneración grasa microvesicular del hígado e hiperamonemia, en niños con varicela o influenza que reciben aspirina.' },
          { t: 'Nunca aspirina en niños', d: 'Para la fiebre: paracetamol',
            say: 'Por eso la aspirina está absolutamente contraindicada en niños con varicela. Si aparece como alternativa para bajar la fiebre, descártala.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'La complicación más letal',
      title: 'Neumonitis varicelosa: el adulto que se ahoga',
      nodes: [
        { id: 'pob', col: 0, row: 1, k: 'risk', t: 'Adulto, embarazada o fumador', s: 'Con varicela activa' },
        { id: 'dia', col: 1, row: 1, k: 'mech', t: 'Día 3 a 5 del exantema', s: 'Replicación viral en el pulmón' },
        { id: 'cli', col: 2, row: 0, k: 'effect', t: 'Disnea súbita e hipoxemia', s: 'Tos seca, taquipnea, hemoptisis' },
        { id: 'rx', col: 2, row: 2, k: 'effect', t: 'Infiltrados nodulares', s: 'Difusos y bilaterales' },
        { id: 'aci', col: 3, row: 1, k: 'good', t: 'Aciclovir EV inmediato', s: '10 mg/kg c/8 h + UCI' },
        { id: 'ora', col: 4, row: 1, k: 'trap', t: 'Aciclovir oral', s: 'Biodisponibilidad insuficiente' },
      ],
      edges: [
        { from: 'pob', to: 'dia' }, { from: 'dia', to: 'cli' }, { from: 'dia', to: 'rx' },
        { from: 'cli', to: 'aci' }, { from: 'rx', to: 'aci' }, { from: 'aci', to: 'ora', label: 'nunca' },
      ],
      steps: [
        { show: ['pob'], note: 'La varicela del adulto es otra enfermedad',
          say: 'Ahora la complicación más letal, y es del adulto. La varicela en un adulto, una embarazada o un fumador no es la enfermedad benigna del niño: el riesgo de neumonitis es real.' },
        { show: ['dia'], note: 'Aparece con el exantema en curso',
          say: 'Aparece hacia el tercer a quinto día del exantema, cuando el virus se está replicando en el pulmón.' },
        { show: ['cli'], note: 'Insuficiencia respiratoria rápida',
          say: 'El paciente hace tos seca, disnea súbita, taquipnea, a veces hemoptisis, e hipoxemia severa.' },
        { show: ['rx'], note: 'Imagen nodular difusa',
          say: 'La radiografía muestra infiltrados nodulares difusos en ambos pulmones. La mortalidad supera el veinte a treinta por ciento.' },
        { show: ['aci'], note: 'Endovenoso y ya',
          say: 'Por eso exige aciclovir endovenoso inmediato, diez miligramos por kilo cada ocho horas, con soporte en cuidados intensivos.' },
        { show: ['ora'], note: 'La trampa: la vía oral',
          say: 'Y la trampa es el aciclovir oral. Su absorción es baja y no alcanza niveles suficientes en el pulmón a la velocidad que este cuadro exige. En la neumonitis, la vía es endovenosa.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Herpes zóster',
      title: 'Dolor en un dermatoma, luego vesículas',
      cards: [
        { title: 'Clínica', tag: 'Reactivación', kind: 'key', items: [
          { t: 'Dolor neuropático urente', d: 'Precede a las lesiones',
            say: 'Volvamos al virus dormido. El herpes zóster parte con dolor: un ardor neuropático en una franja de la piel, muchas veces antes de que se vea nada.' },
          { t: 'Dermatoma unilateral estricto', d: 'No cruza la línea media',
            say: 'Después aparecen vesículas en racimo sobre ese dermatoma, estrictamente unilateral. No cruza la línea media, porque sigue un solo nervio.' },
        ] },
        { title: 'Tratamiento', tag: 'Primeras 72 horas', kind: 'pharma', items: [
          { t: 'Aciclovir 800 mg 5 veces al día', d: 'Por 7 días',
            say: 'El tratamiento es aciclovir oral, ochocientos miligramos cinco veces al día por siete días.' },
          { t: 'O valaciclovir 1 g c/8 h', d: 'Idealmente antes de 72 horas',
            say: 'O valaciclovir, un gramo cada ocho horas. Idealmente se inicia en las primeras setenta y dos horas, porque así reduce el dolor agudo y la neuralgia postherpética.' },
        ] },
        { title: 'Neuralgia postherpética', tag: 'Secuela', kind: 'alert', items: [
          { t: 'Dolor más de 3 meses', d: 'Pregabalina, gabapentina o amitriptilina',
            say: 'La neuralgia postherpética es el dolor neuropático que persiste más de tres meses. Se trata con pregabalina, gabapentina o amitriptilina, no con más aciclovir.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Formas especiales',
      title: 'Cuando el zóster toca el ojo o el oído',
      cards: [
        { title: 'Zóster oftálmico', tag: 'V1 del trigémino', kind: 'alert', items: [
          { t: 'Signo de Hutchinson', d: 'Vesícula en la punta de la nariz',
            say: 'Hay dos formas que se preguntan. La primera es el zóster oftálmico, de la primera rama del trigémino. Mira la punta de la nariz: si hay vesículas ahí, es el signo de Hutchinson.' },
          { t: 'Predice daño corneal', d: 'Queratitis, uveítis, ceguera',
            say: '¿Por qué importa? Porque la punta de la nariz la inerva el nervio nasociliar, el mismo que inerva el ojo. Predice compromiso corneal grave: queratitis, uveítis y hasta ceguera.' },
          { t: 'Aciclovir sistémico', d: 'Más oftalmología urgente',
            say: 'La conducta es aciclovir sistémico y evaluación oftalmológica urgente.' },
        ] },
        { title: 'Síndrome de Ramsay-Hunt', tag: 'Ganglio geniculado', kind: 'key', items: [
          { t: 'Parálisis facial periférica', d: 'Más otalgia intensa',
            say: 'La segunda es el síndrome de Ramsay-Hunt, cuando el virus despierta en el ganglio geniculado del séptimo par. Da una parálisis facial periférica con otalgia intensa.' },
          { t: 'Vesículas en el conducto auditivo', d: 'O en el pabellón',
            say: 'Y la pista para no confundirla con una parálisis de Bell: vesículas en el conducto auditivo externo o en el pabellón. Siempre mira la oreja. Se trata con aciclovir oral en dosis altas más corticoides.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Complicaciones del virus varicela-zóster',
      head: ['Complicación', 'Quién', 'Pista clínica', 'Conducta'],
      rows: [
        { cells: ['Neumonitis varicelosa', 'Adultos, embarazadas, fumadores', 'Disnea + infiltrados nodulares', 'Aciclovir EV 10 mg/kg c/8 h + UCI'],
          say: 'Repasemos. Neumonitis: adulto, embarazada o fumador, con disnea e infiltrados nodulares. Aciclovir endovenoso y cuidados intensivos.' },
        { cells: ['Ataxia cerebelosa aguda', 'Preescolares y escolares', 'Marcha atáxica, dismetría, nistagmo', 'Conservador: autolimitada'],
          say: 'Ataxia cerebelosa: el niño que camina inestable semanas después de la varicela. Manejo conservador, porque se resuelve sola.' },
        { cells: ['Sobreinfección bacteriana', 'Niños con rascado', 'Celulitis con pus o fasceítis', 'Cefazolina o cloxacilina; aseo quirúrgico'],
          say: 'Sobreinfección bacteriana: niño que se rasca. Cefazolina o cloxacilina, y aseo quirúrgico si es una fasceítis.' },
        { cells: ['Zóster oftálmico', 'Adultos mayores', 'Signo de Hutchinson', 'Aciclovir + oftalmología urgente'],
          say: 'Zóster oftálmico: vesícula en la punta de la nariz. Aciclovir y oftalmología urgente.' },
        { cells: ['Síndrome de Ramsay-Hunt', 'Adultos', 'Parálisis facial + vesículas en el CAE', 'Aciclovir dosis altas + corticoides'],
          say: 'Y Ramsay-Hunt: parálisis facial con vesículas en el oído. Aciclovir en dosis altas más corticoides. La trampa es llamarla parálisis de Bell sin mirar la oreja.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 32 años, sano y no vacunado contra la varicela, con 4 días de fiebre y exantema vesicular pruriginoso con lesiones en distintos estadios en cara y tórax. Hace 12 horas agrega tos seca, disnea de reposo rápidamente progresiva y dolor pleurítico bilateral. T° 38,6 °C, FC 118 lpm, FR 32 rpm, SatO2 88% ambiental, crépitos bilaterales difusos. Radiografía: infiltrados micronodulares bilaterales difusos.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Aciclovir oral 800 mg 5 veces al día y control en 48 horas' },
        { letter: 'B', text: 'Hospitalizar en UCI, oxígeno y aciclovir endovenoso 10 mg/kg cada 8 horas' },
        { letter: 'C', text: 'Ceftriaxona más claritromicina endovenosa' },
        { letter: 'D', text: 'Inmunoglobulina hiperinmune antivaricela intramuscular' },
        { letter: 'E', text: 'Metilprednisolona endovenosa en pulsos' },
      ],
      correct: 'B',
      explanation: 'Adulto con varicela activa, insuficiencia respiratoria e infiltrados nodulares difusos: neumonitis varicelosa, la complicación más letal (mortalidad > 20–30%). Requiere UCI, oxígeno y aciclovir EV 10 mg/kg cada 8 horas. La vía oral no alcanza niveles terapéuticos a tiempo; la inmunoglobulina sirve como profilaxis post-exposición, no para la enfermedad establecida.',
      say: {
        stem: 'Vamos al caso. Hombre de treinta y dos años, sano y no vacunado, con cuatro días de fiebre y un exantema vesicular con lesiones en distintos estadios. Hace doce horas agrega tos seca, disnea de reposo que progresa rápido y dolor pleurítico. Está taquicárdico, con frecuencia respiratoria de treinta y dos y saturación de ochenta y ocho por ciento. La radiografía muestra infiltrados micronodulares difusos en ambos pulmones.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: aciclovir oral y control, hospitalizar en intensivo con oxígeno y aciclovir endovenoso, ceftriaxona más claritromicina, inmunoglobulina antivaricela, o pulsos de metilprednisolona. Piénsalo.',
        answer: 'Es la B. Un adulto con varicela e insuficiencia respiratoria con infiltrados nodulares tiene una neumonitis varicelosa, y su mortalidad es alta. Aciclovir endovenoso, diez miligramos por kilo cada ocho horas, en cuidados intensivos. La A es la trampa: el aciclovir es el fármaco correcto, pero la vía oral no alcanza niveles a tiempo. Y la inmunoglobulina sirve para prevenir después de una exposición, no para tratar la enfermedad instalada.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 25',
      stem: 'Un niño de 5 años presenta un exantema pruriginoso, desde hace 4 días, generalizado y pleomorfo, consistente en máculas, pápulas, vesículas, que inició en el cuero cabelludo y luego se extendió al tronco y las extremidades.',
      question: '¿Cuál es el tratamiento más adecuado?',
      options: [
        { letter: 'A', text: 'Aciclovir' },
        { letter: 'B', text: 'Valaciclovir' },
        { letter: 'C', text: 'Prednisona' },
        { letter: 'D', text: 'Clorfenamina maleato' },
        { letter: 'E', text: 'Talco mentolado' },
      ],
      correct: 'D',
      explanation: 'Varicela clásica no complicada en un niño sano: tratamiento sintomático, con antihistamínico para el prurito. El antiviral se reserva para mayores de 13 años, el segundo caso intradomiciliario, los cuadros graves o los inmunodeprimidos.',
      say: {
        stem: 'Ahora preguntas reales. Esta es del EUNACOM de diciembre de dos mil diecinueve. Niño de cinco años con cuatro días de un exantema pruriginoso, generalizado y pleomorfo, con máculas, pápulas y vesículas, que partió en el cuero cabelludo y bajó al tronco y las extremidades.',
        question: '¿Cuál es el tratamiento más adecuado?',
        options: 'Las opciones: aciclovir, valaciclovir, prednisona, clorfenamina, o talco mentolado. Piénsalo.',
        answer: 'Es la D, clorfenamina. Es una varicela clásica en un niño sano y sin complicaciones, así que el tratamiento es sintomático: un antihistamínico para el prurito. El aciclovir es el distractor tentador, pero en un niño sano no está indicado. Y fíjate en lo que falta en la lista: la aspirina.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 118',
      stem: 'Hombre de 18 años, sin antecedentes, con cuadro de 3 días de compromiso del estado general, sensación febril, tos y coriza, que durante el último día se ha asociado a prurito generalizado. Al examen físico destaca presencia de lesiones papulares y vesículas muy pruriginosas en tronco y extremidades, no asociado a otros hallazgos.',
      question: 'El tratamiento de elección en este caso es:',
      options: [
        { letter: 'A', text: 'Clorfenamina oral' },
        { letter: 'B', text: 'Aspirina oral' },
        { letter: 'C', text: 'Aciclovir oral' },
        { letter: 'D', text: 'Vacuna contra virus herpes 3' },
        { letter: 'E', text: 'Inmunoglobulina G no específica' },
      ],
      correct: 'C',
      explanation: 'Varicela en un paciente mayor de 13 años: se indica aciclovir oral, por el mayor riesgo de complicaciones del adolescente y el adulto. La aspirina está contraindicada.',
      say: {
        stem: 'Y ahora la pregunta espejo, del EUNACOM de julio de dos mil trece. Hombre de dieciocho años con tres días de malestar, fiebre, tos y coriza, y desde ayer prurito generalizado, con pápulas y vesículas muy pruriginosas en el tronco y las extremidades.',
        question: '¿Cuál es el tratamiento de elección?',
        options: 'Las opciones: clorfenamina, aspirina, aciclovir oral, vacuna contra el herpes tres, o inmunoglobulina no específica. Piénsalo.',
        answer: 'Es la C, aciclovir oral. La misma varicela, pero ahora en un paciente de dieciocho años, y sobre los trece años se indica antiviral, porque el adolescente y el adulto se complican más, como vimos con la neumonitis. La clorfenamina, que fue correcta en el niño, aquí se queda corta. Compara las dos preguntas: lo que cambia la respuesta es la edad.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 158',
      stem: 'Una paciente de 76 años, diabética, consulta por un cuadro de 3 días de evolución de aparición de una lesión eritematosa en el tronco, asociada a dolor urente, como se ve en la siguiente imagen:',
      question: 'El tratamiento más adecuado es:',
      options: [
        { letter: 'A', text: 'Aciclovir 400 mg cada 8 horas, por 5 días' },
        { letter: 'B', text: 'Valaciclovir 1g cada 8 horas, por 7 días' },
        { letter: 'C', text: 'Aciclovir tópico' },
        { letter: 'D', text: 'Loratadina 10 mg al día por 5 días' },
        { letter: 'E', text: 'Flucloxacilina 500 mg cada 8 horas por 10 días' },
      ],
      correct: 'B',
      explanation: 'Herpes zóster en una adulta mayor diabética: valaciclovir 1 g cada 8 horas por 7 días, o aciclovir 800 mg 5 veces al día. La opción A tiene dosis de herpes simple, insuficiente para el zóster; el tópico no sirve.',
      say: {
        stem: 'Pasemos al zóster, con una real del EUNACOM de julio de dos mil diecinueve. Paciente de setenta y seis años, diabética, con tres días de una lesión eritematosa en el tronco con dolor urente.',
        question: '¿Cuál es el tratamiento más adecuado?',
        options: 'Las opciones: aciclovir cuatrocientos miligramos cada ocho horas, valaciclovir un gramo cada ocho horas por siete días, aciclovir tópico, loratadina, o flucloxacilina. Piénsalo.',
        answer: 'Es la B, valaciclovir un gramo cada ocho horas por siete días. Dolor urente en una franja del tronco en una adulta mayor es un herpes zóster, y está dentro de las setenta y dos horas. La A tienta porque es aciclovir, pero la dosis es de herpes simple: para el zóster son ochocientos miligramos cinco veces al día. El tópico no sirve.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Una mujer de 68 años consulta por intenso dolor urente en la hemicara izquierda de 3 días de evolución, asociándose hace 24 horas a la aparición de vesículas en racimo en la frente, el párpado superior y la punta de la nariz (signo de Hutchinson positivo).',
      question: '¿Cuál es la conducta médica inmediata más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar Aciclovir oral a dosis plenas y solicitar evaluación urgente por Oftalmología' },
        { letter: 'B', text: 'Indicar tratamiento con Carbamazepina y analgesia con Paracetamol' },
        { letter: 'C', text: 'Aplicar ungüento tópico de corticoides en las lesiones nasales y párpado' },
        { letter: 'D', text: 'Administrar vacuna de refuerzo contra herpes zóster' },
        { letter: 'E', text: 'Realizar desbridamiento quirúrgico de las vesículas nasales' },
      ],
      correct: 'A',
      explanation: 'Herpes zóster oftálmico con signo de Hutchinson: compromiso del nervio nasociliar (V1) que predice afectación corneal grave. Conducta: aciclovir oral (800 mg 5 veces al día) o valaciclovir, y derivación urgente a Oftalmología.',
      say: {
        stem: 'Y un caso representativo del banco sobre el zóster oftálmico. Mujer de sesenta y ocho años con tres días de dolor urente en la hemicara izquierda, y desde ayer vesículas en racimo en la frente, el párpado superior y la punta de la nariz.',
        question: '¿Cuál es la conducta inmediata más adecuada?',
        options: 'Las opciones: aciclovir oral en dosis plenas con evaluación urgente por oftalmología, carbamazepina y paracetamol, corticoide tópico, vacuna contra el zóster, o desbridamiento de las vesículas. Piénsalo.',
        answer: 'Es la A. Vesículas en la punta de la nariz son el signo de Hutchinson: el nervio nasociliar está comprometido y el ojo está en riesgo. Aciclovir en dosis plenas y oftalmología urgente. La carbamazepina tienta porque el dolor es facial, como en una neuralgia del trigémino, pero aquí hay vesículas: es el virus, y el ojo no puede esperar.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Varicela', tag: 'Depende de quién', kind: 'key', items: [
          { t: 'Cielo estrellado centrípeto', d: 'Contagia hasta que todo sea costra',
            say: 'Cerremos con las reglas de oro. Varicela: lesiones en distintos estadios, de distribución centrípeta, y contagia hasta que todas son costra.' },
          { t: 'Niño sano: sintomático', d: 'Mayor de 13 años: aciclovir oral',
            say: 'En el niño sano, tratamiento sintomático, y nunca aspirina, por el síndrome de Reye. En el mayor de trece años, aciclovir oral.' },
        ] },
        { title: 'Complicaciones', tag: 'Por edad', kind: 'alert', items: [
          { t: 'Niño: sobreinfección y ataxia', d: 'La ataxia es benigna',
            say: 'En el niño, la complicación más frecuente es la sobreinfección bacteriana, y la neurológica, la ataxia cerebelosa, que es benigna.' },
          { t: 'Adulto: neumonitis', d: 'Aciclovir EV, nunca oral',
            say: 'En el adulto, la embarazada y el fumador, la neumonitis, con aciclovir endovenoso.' },
        ] },
        { title: 'Herpes zóster', tag: 'Antes de 72 horas', kind: 'pharma', items: [
          { t: 'Aciclovir 800 mg 5 veces/día', d: 'O valaciclovir 1 g c/8 h, 7 días',
            say: 'El zóster se trata con aciclovir ochocientos miligramos cinco veces al día, o valaciclovir un gramo cada ocho horas, por siete días.' },
          { t: 'Hutchinson: oftalmología urgente', d: 'Ramsay-Hunt: mira la oreja',
            say: 'Con signo de Hutchinson, oftalmología urgente, y ante una parálisis facial, mira la oreja. Si te llevas una sola idea de hoy: la misma varicela que en el niño se trata con un antihistamínico, en el adulto puede ahogarlo, y ahí el aciclovir va a la vena. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Virus varicela-zóster: quién es y qué tiene',
    root: N('start', 'Exantema vesicular', 'Virus varicela-zóster',
      'Paciente con lesiones vesiculares. La primera pregunta es si están por todo el cuerpo o en una sola franja.',
      ['', N('q', '¿Generalizado o en un dermatoma?', 'Varicela o zóster',
        'Si el exantema es generalizado y polimorfo, es varicela. Si está en un solo dermatoma, unilateral, es herpes zóster.',
        ['Generalizado', N('q', '¿Quién es y cómo está?', 'Edad · respiración',
          'En la varicela, lo que decide la conducta es quién es el paciente y si tiene una complicación.',
          ['Niño sano', N('ok', 'Tratamiento sintomático', 'Antihistamínico · nunca aspirina',
            'Niño sano sin complicaciones: tratamiento sintomático, antihistamínico para el prurito, y nunca aspirina.')],
          ['Mayor de 13 años', N('do', 'Aciclovir oral', 'Vigilar la respiración',
            'Adolescente o adulto sin complicaciones: aciclovir oral, y atento a la respiración.')],
          ['Disnea + infiltrados', N('alert', 'Neumonitis: aciclovir EV', '10 mg/kg c/8 h · UCI',
            'Si aparece disnea con infiltrados nodulares: neumonitis varicelosa. Aciclovir endovenoso, diez miligramos por kilo cada ocho horas, en cuidados intensivos.')])],
        ['Dermatoma', N('q', '¿Toca ojo u oído?', 'Punta de la nariz · conducto auditivo',
          'En el zóster, mira la punta de la nariz y la oreja.',
          ['No', N('ok', 'Aciclovir o valaciclovir oral', '7 días · antes de 72 h',
            'Zóster sin compromiso especial: aciclovir ochocientos miligramos cinco veces al día o valaciclovir, por siete días, idealmente antes de setenta y dos horas.')],
          ['Hutchinson', N('refer', 'Zóster oftálmico', 'Aciclovir + oftalmología urgente',
            'Vesícula en la punta de la nariz: zóster oftálmico. Aciclovir sistémico y derivación urgente a oftalmología.')],
          ['Parálisis facial + oído', N('refer', 'Ramsay-Hunt', 'Aciclovir dosis altas + corticoides',
            'Parálisis facial periférica con vesículas en el conducto auditivo: Ramsay-Hunt. Aciclovir en dosis altas más corticoides.')])])]),
  },
};
