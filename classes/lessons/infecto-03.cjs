// Clase 1.3 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_infectologia.cjs (inf-03).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'infecto-03',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuando la infección entra al cerebro: aciclovir sin esperar y el absceso que no se punciona',
      say: 'Bienvenidos. En la clase anterior la infección estaba en las meninges, la membrana que envuelve al cerebro. Hoy la infección entra al tejido cerebral mismo, y vemos dos cuadros: la encefalitis por virus herpes simple y el absceso cerebral. La idea que ordena todo es simple: cuando falla la función del cerebro, ya no es solo una meningitis. Y en la encefalitis, el aciclovir se indica ante la sospecha, sin esperar ningún examen. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Patogenia',
      title: '¿Cómo llega el herpes al lóbulo temporal?',
      nodes: [
        { id: 'vhs', col: 0, row: 1, k: 'cause', t: 'Virus herpes simple tipo 1', s: 'Causa más frecuente de encefalitis esporádica' },
        { id: 'axo', col: 1, row: 1, k: 'mech', t: 'Transporte axonal retrógrado', s: 'Por el nervio olfatorio o el trigémino' },
        { id: 'tem', col: 2, row: 1, k: 'mech', t: 'Lóbulos temporales y sistema límbico', s: 'Zonas basales, anteriores e inferiores' },
        { id: 'nec', col: 3, row: 1, k: 'risk', t: 'Necrosis hemorrágica', s: 'Edema severo y gliosis' },
        { id: 'cli', col: 3, row: 3, k: 'effect', t: 'Falla la función cerebral superior', s: 'Conducta, memoria, lenguaje' },
      ],
      edges: [
        { from: 'vhs', to: 'axo' },
        { from: 'axo', to: 'tem' },
        { from: 'tem', to: 'nec' },
        { from: 'nec', to: 'cli' },
      ],
      steps: [
        { show: ['vhs'], note: 'El agente: VHS-1',
          say: 'Partamos por el agente. El virus herpes simple tipo uno es la causa más frecuente de encefalitis viral esporádica, la que no viene en brotes, en personas inmunocompetentes. Y además es la más grave.' },
        { show: ['axo'], note: 'Viaja por los nervios, no por la sangre',
          say: 'Lo interesante es cómo llega. No viaja por la sangre: sube por dentro de los nervios, en sentido retrógrado, a través del nervio olfatorio o del trigémino, hasta las zonas basales del cerebro.' },
        { show: ['tem'], note: 'Tropismo temporal y límbico',
          say: 'Por eso tiene un tropismo muy selectivo: los lóbulos temporales, en su parte anterior e inferior, y el sistema límbico. Esa localización es la clave de todo lo que viene, porque explica la clínica y explica la imagen.' },
        { show: ['nec'], note: 'La lesión sangra',
          say: 'En esas zonas produce una necrosis hemorrágica, con edema severo y gliosis. Retén la palabra hemorrágica, porque la vamos a encontrar de nuevo en el líquido cefalorraquídeo.' },
        { show: ['cli'], note: 'El mecanismo explica la clínica',
          say: 'Y como se daña el lóbulo temporal y el sistema límbico, lo que falla es la función cerebral superior: la conducta, la memoria y el lenguaje. El mecanismo te explica la clínica.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'Encefalitis: el cerebro deja de funcionar bien',
      cards: [
        { title: 'Lo que define la encefalitis', tag: 'Fiebre + función cerebral', kind: 'key', items: [
          { t: 'Conducta bizarra', d: 'Cambios conductuales agudos, desinhibición',
            say: 'Aquí está la diferencia con la clase anterior. La meningitis pura inflama la membrana; la encefalitis se define por la alteración de la función cerebral superior. Lo primero que notan los familiares es la conducta: el paciente está raro, bizarro, desinhibido.' },
          { t: 'Memoria reciente alterada', d: 'Compromiso del sistema límbico',
            say: 'Se altera la memoria reciente, porque el sistema límbico, que es el que la guarda, está dañado.' },
          { t: 'Afasia de comprensión', d: 'Lóbulo temporal izquierdo dominante',
            say: 'Y aparece la afasia de comprensión cuando se compromete el lóbulo temporal izquierdo, el dominante. El paciente habla, pero no entiende lo que se le dice y dice palabras sin sentido.' },
        ] },
        { title: 'Pistas temporales', tag: 'Ojo en el examen', kind: 'alert', items: [
          { t: 'Alucinaciones olfatorias o gustativas', d: 'Muy sugerentes de lóbulo temporal',
            say: 'Hay pistas muy específicas del lóbulo temporal que el examen usa: las alucinaciones olfatorias o gustativas. El paciente siente olores o sabores que no existen.' },
          { t: 'Crisis convulsivas focales', d: 'Con o sin generalización',
            say: 'Y las crisis convulsivas focales, que pueden generalizarse. Fiebre más convulsión más conducta alterada: ese trío tiene que hacerte pensar en herpes.' },
          { t: 'Signos meníngeos ausentes o leves', d: 'No esperes rigidez de nuca',
            say: 'Y un detalle que confunde: los signos meníngeos suelen estar ausentes o ser leves. Si esperas una rigidez de nuca franca para sospechar, se te pasa la encefalitis.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Imagen, LCR y PCR',
      cards: [
        { title: 'Imagen', tag: 'RMN de elección', kind: 'criteria', items: [
          { t: 'RMN: hiperintensidad temporal en T2/FLAIR', d: 'Asimétrica, también en la ínsula',
            say: 'Veamos cómo se confirma. El examen de imagen de elección es la resonancia magnética, muy superior a la TAC. Muestra una hiperintensidad en las secuencias T dos y FLAIR en los lóbulos temporales, de forma asimétrica, y en la corteza insular.' },
          { t: 'TAC puede ser normal al inicio', d: 'Primeras 48 a 72 horas',
            say: 'La TAC, en cambio, puede ser completamente normal en las primeras cuarenta y ocho a setenta y dos horas. Una TAC normal no descarta la encefalitis.' },
        ] },
        { title: 'Líquido cefalorraquídeo', tag: 'Viral y hemorrágico', kind: 'key', items: [
          { t: 'Pleocitosis linfocítica', d: 'Glucosa normal, como toda viral',
            say: 'El líquido cefalorraquídeo tiene el perfil viral que vimos en la clase anterior: pleocitosis a expensas de linfocitos, con glucosa normal.' },
          { t: 'Eritrocitos o xantocromía', d: 'Reflejo de la necrosis hemorrágica',
            say: 'Pero con un detalle que lo distingue: tiene glóbulos rojos, o xantocromía. ¿Te acuerdas de la necrosis hemorrágica del lóbulo temporal? Eso es lo que ves en el líquido. Un líquido viral con glóbulos rojos es herpes hasta demostrar lo contrario.' },
        ] },
        { title: 'Confirmación', tag: 'Certeza', kind: 'normal', items: [
          { t: 'PCR para VHS-1 en LCR', d: 'Sensibilidad y especificidad > 95 %',
            say: 'La certeza la da la reacción de polimerasa en cadena para herpes simple en el líquido, con sensibilidad y especificidad sobre noventa y cinco por ciento. Pero, y esto es lo que viene, no se espera su resultado para tratar.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tratamiento',
      title: 'Aciclovir: ante la sospecha, no ante la confirmación',
      nodes: [
        { id: 'sos', col: 0, row: 1, k: 'start', t: 'Sospecha de encefalitis', s: 'Fiebre + función cerebral alterada' },
        { id: 'aci', col: 1, row: 1, k: 'good', t: 'Aciclovir EV de inmediato', s: '10 mg/kg c/8 h por 14–21 días' },
        { id: 'est', col: 2, row: 1, k: 'mech', t: 'Luego RMN y PCR', s: 'Confirman, no deciden el inicio' },
        { id: 'pro', col: 3, row: 1, k: 'effect', t: 'Mortalidad de > 70 % a < 20 %', s: 'Cada hora cuenta' },
        { id: 'tra', col: 1, row: 3, k: 'trap', t: 'Esperar la PCR', s: 'O tratar solo con ceftriaxona' },
      ],
      edges: [
        { from: 'sos', to: 'aci' },
        { from: 'aci', to: 'est' },
        { from: 'est', to: 'pro' },
        { from: 'sos', to: 'tra', label: 'error' },
      ],
      steps: [
        { show: ['sos'], note: 'Basta la sospecha clínica',
          say: 'Y ahora la conducta, que es lo que más se pregunta del tema. Tienes un paciente con fiebre y alteración de la función cerebral. Eso es sospecha de encefalitis, y basta.' },
        { show: ['aci'], note: 'Aciclovir, dosis y duración',
          say: 'Se inicia de inmediato aciclovir endovenoso, diez miligramos por kilo cada ocho horas, por catorce a veintiún días. Y el paciente se hospitaliza en una unidad de cuidados intensivos.' },
        { show: ['est'], note: 'Los exámenes vienen después',
          say: 'La resonancia y la PCR se hacen, pero después. Sirven para confirmar el diagnóstico, no para decidir si empiezas el tratamiento.' },
        { show: ['pro'], note: 'Por qué no se espera',
          say: '¿Por qué tanta prisa? Porque sin tratamiento la mortalidad supera el setenta por ciento, y con aciclovir baja a menos del veinte. Cada hora de retraso empeora el pronóstico neurológico definitivo.' },
        { show: ['tra'], note: 'Trampas: esperar la PCR o dar solo antibióticos',
          say: 'Las trampas del examen son dos. La primera: esperar el resultado de la PCR antes de indicar el antiviral. La segunda: tratar solo con ceftriaxona y vancomicina, como si fuera una meningitis bacteriana. Los antibióticos no hacen nada contra el herpes.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Absceso cerebral',
      title: 'Absceso cerebral: ¿de dónde viene?',
      nodes: [
        { id: 'con', col: 0, row: 0, k: 'cause', t: 'Contigüidad · 50 %', s: 'Sinusitis, otitis crónica, mastoiditis' },
        { id: 'hem', col: 0, row: 2, k: 'cause', t: 'Hematógena · 30 %', s: 'Cardiopatía cianótica, endocarditis' },
        { id: 'dir', col: 0, row: 4, k: 'cause', t: 'Inoculación directa', s: 'TEC penetrante o neurocirugía' },
        { id: 'abs', col: 2, row: 2, k: 'mech', t: 'Infección focal supurada', s: 'Dentro del parénquima' },
        { id: 'loc', col: 3, row: 0, k: 'effect', t: 'El foco predice el lugar', s: 'Seno frontal → frontal · oído → temporal o cerebelo' },
        { id: 'tri', col: 3, row: 3, k: 'risk', t: 'Cefalea + fiebre + déficit focal', s: 'La fiebre falta en la mitad' },
      ],
      edges: [
        { from: 'con', to: 'abs' },
        { from: 'hem', to: 'abs' },
        { from: 'dir', to: 'abs' },
        { from: 'con', to: 'loc', label: 'define' },
        { from: 'abs', to: 'tri' },
      ],
      steps: [
        { show: ['con'], note: 'La mitad llega por vecindad',
          say: 'Pasemos al absceso cerebral: una infección focal, supurada, dentro del parénquima. Se produce por tres mecanismos, y el más frecuente, la mitad de los casos, es por contigüidad: una sinusitis frontal o etmoidal, o una otitis media crónica o mastoiditis, que se extiende al cerebro vecino.' },
        { show: ['loc'], note: 'El foco predice la localización',
          say: 'Y esto tiene una lógica anatómica que se pregunta: el foco predice dónde queda el absceso. La sinusitis frontal o etmoidal da un absceso frontal; el oído y la mastoides dan un absceso temporal o cerebeloso.' },
        { show: ['hem'], note: 'Por la sangre: pensar en el corazón',
          say: 'El segundo mecanismo, cerca de un treinta por ciento, es la diseminación hematógena. Aquí piensa en las cardiopatías congénitas cianóticas con cortocircuito de derecha a izquierda, en la endocarditis bacteriana, en las bronquiectasias y en las fístulas arteriovenosas pulmonares.' },
        { show: ['dir'], note: 'Por inoculación directa',
          say: 'Y el tercero es la inoculación directa, por un traumatismo craneoencefálico penetrante o una neurocirugía.' },
        { show: ['abs', 'tri'], note: 'Tríada del absceso',
          say: 'La tríada clásica es cefalea persistente y refractaria, fiebre y déficit neurológico focal. Pero ojo: la fiebre falta en la mitad de los casos. Una cefalea que no cede con un déficit focal ya basta para pedir una imagen.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Absceso cerebral',
      title: 'Diagnóstico y tratamiento del absceso',
      cards: [
        { title: 'Diagnóstico', tag: 'Imagen con contraste', kind: 'criteria', items: [
          { t: 'TAC o RMN con contraste', d: 'Lesión en anillo con realce periférico',
            say: 'El diagnóstico es por imagen: TAC o resonancia con contraste. Lo que ves es la clásica lesión en anillo, con realce periférico y edema vasogénico alrededor.' },
          { t: 'Punción lumbar contraindicada', d: 'Riesgo de herniación',
            say: 'Y conecta con la clase anterior: el absceso es una masa. Puncionar a un paciente con un absceso cerebral es exponerlo a una herniación. Aquí la punción lumbar está contraindicada.' },
        ] },
        { title: 'Antibióticos', tag: 'Empírico', kind: 'pharma', items: [
          { t: 'Ceftriaxona 2 g c/12 h EV', d: 'Estreptococos',
            say: 'El tratamiento empírico parte con ceftriaxona, dos gramos cada doce horas endovenosa.' },
          { t: '+ Metronidazol 500 mg c/8 h EV', d: 'Anaerobios del foco ótico o sinusal',
            say: 'Más metronidazol, quinientos miligramos cada ocho horas endovenoso, para los anaerobios que vienen del oído o de los senos paranasales. Ceftriaxona más metronidazol es la combinación que se pregunta.' },
          { t: '+ Vancomicina si trauma o cirugía', d: 'Antecedente de TEC o neurocirugía',
            say: 'Y se agrega vancomicina si el absceso viene de un traumatismo o de una neurocirugía.' },
        ] },
        { title: 'Cirugía', tag: 'Según tamaño', kind: 'alert', items: [
          { t: 'Drenaje si mide > 2,5 cm', d: 'Aspiración estereotáxica o escisión',
            say: 'Por último, si el absceso mide más de dos coma cinco centímetros, se descomprime quirúrgicamente, por aspiración estereotáxica o escisión. Es un paciente que se deriva a neurocirugía.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol de decisión: fiebre con compromiso neurológico, y qué mirar para saber si es meninge, cerebro o absceso.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Meningitis, encefalitis o absceso',
      head: ['Característica', 'Meningitis aguda', 'Encefalitis herpética', 'Absceso cerebral'],
      rows: [
        { cells: ['Compromiso cerebral', 'Ausente o somnolencia', 'Marcado: afasia, conducta, crisis', 'Focalidad progresiva'],
          say: 'Comparemos los tres cuadros, porque el examen los pone como alternativas unos de otros. En la meningitis la función cerebral está conservada o hay solo somnolencia. En la encefalitis está marcadamente alterada. Y en el absceso lo que domina es una focalidad que progresa.' },
        { cells: ['Signos meníngeos', 'Marcados: rigidez, Kernig, Brudzinski', 'Ausentes o leves', 'Raros, salvo rotura intraventricular'],
          say: 'Los signos meníngeos son marcados en la meningitis, ausentes o leves en la encefalitis, y raros en el absceso, salvo que se rompa hacia el ventrículo.' },
        { cells: ['Imagen', 'Habitualmente normal', 'Hiperintensidad temporal en RMN', 'Lesión en anillo con edema'],
          say: 'En la imagen: la meningitis suele tener una imagen normal; la encefalitis, la hiperintensidad temporal en la resonancia; y el absceso, la lesión en anillo.' },
        { cells: ['LCR', 'Bacteriana: PMN + glucosa baja', 'Linfocitos + hematíes · PCR VHS (+)', 'PL contraindicada'],
          say: 'En el líquido: neutrófilos y glucosa baja en la meningitis bacteriana; linfocitos con glóbulos rojos y PCR positiva en la encefalitis herpética; y en el absceso no se puncionan, por el riesgo de herniación.' },
        { cells: ['Tratamiento', 'Ceftriaxona + vancomicina (± ampicilina)', 'Aciclovir 10 mg/kg c/8 h EV, 14–21 d', 'Ceftriaxona + metronidazol + cirugía'],
          say: 'Y el tratamiento: ceftriaxona y vancomicina, con ampicilina según el riesgo de Listeria, para la meningitis; aciclovir para la encefalitis; y ceftriaxona con metronidazol, más cirugía si corresponde, para el absceso.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 42 años, sin antecedentes, con 3 días de fiebre leve, cefalea y conducta cada vez más inapropiada y desinhibida. La esposa relata que no comprende lo que se le dice y dice palabras incoherentes. En la evaluación presenta una crisis tónico-clónica focal en brazo y hemicara derechos. T° 38,4 °C, sin rigidez de nuca franca, afasia sensitiva evidente.',
      question: '¿Cuál es la conducta inmediata más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar aciclovir EV 10 mg/kg cada 8 horas' },
        { letter: 'B', text: 'Esperar la PCR para VHS en LCR antes de iniciar antivirales' },
        { letter: 'C', text: 'Iniciar ceftriaxona + metronidazol EV' },
        { letter: 'D', text: 'Solicitar RMN cerebral y decidir el tratamiento según su resultado' },
        { letter: 'E', text: 'Iniciar ceftriaxona + vancomicina EV como único tratamiento' },
      ],
      correct: 'A',
      explanation: 'Fiebre, cambio conductual agudo, afasia sensitiva y crisis focales de origen temporal: encefalitis por VHS-1. Se hospitaliza en UTI y se inicia aciclovir EV de inmediato, sin esperar la PCR ni la RMN, porque la letalidad sin tratamiento supera el 70 %.',
      say: {
        stem: 'Vamos con un caso. Hombre de cuarenta y dos años, sano, con tres días de fiebre leve, cefalea y una conducta cada vez más inapropiada y desinhibida. La esposa cuenta que no entiende lo que le dicen y que dice palabras incoherentes. Durante la evaluación hace una convulsión focal del brazo y la cara del lado derecho. No tiene rigidez de nuca franca, y tiene una afasia sensitiva evidente.',
        question: '¿Cuál es la conducta inmediata más adecuada?',
        options: 'Las opciones son: aciclovir endovenoso; esperar la PCR antes del antiviral; ceftriaxona con metronidazol; pedir una resonancia y decidir según el resultado; o ceftriaxona con vancomicina como único tratamiento. Piénsalo.',
        answer: 'La respuesta es la A. Fiebre, conducta alterada, afasia de comprensión y convulsión focal: todo apunta al lóbulo temporal izquierdo, y eso es encefalitis herpética. El aciclovir va de inmediato. La D es el distractor más tentador, porque la resonancia es el examen de elección, pero sirve para confirmar, no para decidir si tratas. Y los antibióticos solos no cubren un virus.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 100',
      stem: 'Un paciente de 43 años, presenta un cuadro clínico de fiebre de 4 días de evolución, asociado a cefalea. Hoy se agrega desorientación y confusión, convulsionando en dos oportunidades antes de consultas. La TAC de cerebro muestra una zona hiperdensa en el lóbulo temporal izquierdo. Se realiza punción lumbar, con 130 células por mm3, 85% mononucleares, glucosa: 75 mg/dl (glicemia 90 mg/dl), proteínas 100 mg/dl, con Pandy (+), látex negativo y ausencia de bacterias en la tinción de Gram. Los cultivos están pendientes.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Meningitis bacteriana aguda' },
        { letter: 'B', text: 'Meningitis tuberculosa' },
        { letter: 'C', text: 'Meningoencefalitis herpética' },
        { letter: 'D', text: 'Meningitis por enterovirus' },
        { letter: 'E', text: 'Meningitis por VIH' },
      ],
      correct: 'C',
      explanation: 'Compromiso de conciencia y convulsiones con lesión del lóbulo temporal y LCR viral (mononucleares, glucosa normal): meningoencefalitis herpética.',
      say: {
        stem: 'Ahora las preguntas reales. La primera es del EUNACOM de julio de dos mil diecinueve. Paciente de cuarenta y tres años con cuatro días de fiebre y cefalea, al que hoy se agrega desorientación y confusión, y convulsiona dos veces. La TAC muestra una zona alterada en el lóbulo temporal izquierdo. La punción muestra ciento treinta células con predominio mononuclear, glucosa de setenta y cinco con una glicemia de noventa, y proteínas de cien, sin bacterias en el Gram.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: meningitis bacteriana aguda, meningitis tuberculosa, meningoencefalitis herpética, meningitis por enterovirus, o meningitis por VIH. Piénsalo.',
        answer: 'Es la C, meningoencefalitis herpética. Tienes las tres piezas: compromiso de la función cerebral con convulsiones, una lesión en el lóbulo temporal, y un líquido viral, con mononucleares y glucosa normal. El enterovirus es el distractor, porque también da un líquido viral, pero produce una meningitis sin compromiso del cerebro ni lesión temporal.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 126',
      stem: 'Un paciente de 60 años, sin antecedentes de importancia, consulta por cefalea de 3 días de evolución, a lo que se le ha agregado desorientación y confusión. Además, ha presentado algunas convulsiones clónicas. Se realiza punción lumbar, que da salida a líquido cefalorraquídeo con 100 células por mm3, con 90% mononucleares, con 15 glóbulos rojos por mm3, glucosa: 80 mg/dl, proteínas: 40 mg/dl; glicemia: 100 mg/dl.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Toxoplasmosis cerebral' },
        { letter: 'B', text: 'Meningoencefalitis herpética' },
        { letter: 'C', text: 'Tumor cerebral' },
        { letter: 'D', text: 'Meningitis viral' },
        { letter: 'E', text: 'Meningitis bacteriana aguda' },
      ],
      correct: 'B',
      explanation: 'Alteración de conciencia y convulsiones con LCR de tipo viral pero hemorrágico (glóbulos rojos): encefalitis herpética.',
      say: {
        stem: 'La siguiente es del EUNACOM de diciembre de dos mil dieciocho. Paciente de sesenta años con tres días de cefalea, al que se agrega desorientación, confusión y algunas convulsiones. El líquido tiene cien células con noventa por ciento de mononucleares, quince glóbulos rojos, glucosa de ochenta con una glicemia de cien, y proteínas de cuarenta.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: toxoplasmosis cerebral, meningoencefalitis herpética, tumor cerebral, meningitis viral, o meningitis bacteriana. Piénsalo.',
        answer: 'Es la B. Fíjate que aquí no te dan imagen: tienes que llegar con la clínica y el líquido. Confusión y convulsiones indican que el cerebro está comprometido, y el líquido es viral, pero con glóbulos rojos, que reflejan la necrosis hemorrágica. La meningitis viral es el distractor: el líquido se parece, pero no explica las convulsiones ni la confusión.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 157',
      stem: 'Un niño de 8 años presenta un cuadro de cefalea y fiebre de 2 días de evolución, a lo que se agrega una conducta agresiva y luego desorientación. Convulsiona en varias oportunidades. Su TAC descarta hipertensión endocraneana, por lo que se realiza punción lumbar que da salida a líquido cefalorraquídeo con 100 glóbulos rojos por mm3, 20 glóbulos blancos por mm3, con 90% de mononucleares, proteínas: 80 mg/dl y glucosa: 60 mg/dl.',
      question: '¿Cuál es el tratamiento inicial?',
      options: [
        { letter: 'A', text: 'Oseltamivir' },
        { letter: 'B', text: 'Vancomicina' },
        { letter: 'C', text: 'Ceftriaxona' },
        { letter: 'D', text: 'Aciclovir' },
        { letter: 'E', text: 'Ampicilina' },
      ],
      correct: 'D',
      explanation: 'Conducta alterada, desorientación y convulsiones con LCR viral hemorrágico: encefalitis herpética. Se trata con aciclovir EV.',
      say: {
        stem: 'Y la última, del EUNACOM de diciembre de dos mil diecinueve, que ahora pregunta el tratamiento. Niño de ocho años con dos días de cefalea y fiebre, al que se agrega conducta agresiva, desorientación y varias convulsiones. La TAC descarta hipertensión endocraneana, y el líquido tiene cien glóbulos rojos, veinte blancos con predominio mononuclear, proteínas de ochenta y glucosa de sesenta.',
        question: '¿Cuál es el tratamiento inicial?',
        options: 'Las opciones son: oseltamivir, vancomicina, ceftriaxona, aciclovir, o ampicilina. Piénsalo.',
        answer: 'Es la D, aciclovir endovenoso. Conducta alterada y convulsiones con un líquido viral y hemorrágico: encefalitis herpética, también en niños. La ceftriaxona es la tentación de quien piensa en meningitis bacteriana, pero la glucosa normal y los mononucleares no apoyan una bacteria. Y fíjate que se hizo la TAC antes de puncionar, por las convulsiones: la misma bandera roja de la clase anterior.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Encefalitis herpética', tag: 'VHS-1', kind: 'key', items: [
          { t: 'Fiebre + función cerebral alterada', d: 'Conducta, afasia, crisis focales',
            say: 'Cerremos con las reglas de oro. Fiebre con alteración de la función cerebral, es decir, conducta bizarra, afasia o crisis focales, es encefalitis, y la causa más frecuente es el herpes simple tipo uno.' },
          { t: 'LCR viral con glóbulos rojos', d: 'RMN temporal · PCR VHS confirma',
            say: 'El líquido es viral pero con glóbulos rojos, la resonancia muestra el lóbulo temporal, y la PCR confirma.' },
        ] },
        { title: 'Conducta', tag: 'Sin esperar', kind: 'pharma', items: [
          { t: 'Aciclovir EV ante la sospecha', d: '10 mg/kg c/8 h por 14–21 días',
            say: 'El aciclovir endovenoso se inicia ante la sospecha, sin esperar la PCR ni la resonancia.' },
        ] },
        { title: 'Absceso cerebral', tag: 'Foco vecino', kind: 'alert', items: [
          { t: 'Cefalea + fiebre + déficit focal', d: 'Lesión en anillo · no puncionar',
            say: 'En el absceso: cefalea, fiebre y déficit focal, lesión en anillo en la imagen, y la punción lumbar está contraindicada.' },
          { t: 'Ceftriaxona + metronidazol', d: 'Cirugía si mide > 2,5 cm',
            say: 'Se trata con ceftriaxona más metronidazol, y cirugía si mide más de dos coma cinco centímetros. Si te llevas una sola idea de hoy: cuando falla la función del cerebro ya no es solo una meningitis, y el aciclovir no espera a ningún examen. La próxima clase cerramos las urgencias con las infecciones graves de partes blandas y la angina de Ludwig. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Fiebre con compromiso neurológico',
    root: N('start', 'Fiebre + síntomas neurológicos', 'Cefalea, conducta, focalidad',
      'Paciente con fiebre y síntomas neurológicos. Para saber si el problema está en la meninge, en el cerebro o en un absceso, mira qué es lo que falla.',
      ['', N('q', '¿Qué domina el cuadro?', 'Meninges · función cerebral · focalidad',
        'La pregunta es qué domina: los signos meníngeos, la función cerebral superior, o un déficit focal que progresa.',
        ['Signos meníngeos', N('refer', 'Meningitis aguda', 'Ver clase anterior',
          'Si dominan la rigidez de nuca y los signos meníngeos con la conciencia relativamente conservada, estás frente a una meningitis, y aplicas lo de la clase anterior.')],
        ['Conducta, afasia, crisis', N('alert', 'Sospecha de encefalitis herpética', 'Aciclovir EV de inmediato',
          'Si domina la conducta alterada, la afasia o las crisis focales, sospechas encefalitis herpética e inicias aciclovir endovenoso de inmediato.',
          ['', N('do', 'Luego RMN y punción lumbar', 'PCR VHS-1 en LCR',
            'Después confirmas con resonancia, que muestra el lóbulo temporal, y con la PCR para herpes en el líquido. El tratamiento sigue catorce a veintiún días.')])],
        ['Déficit focal progresivo', N('q', 'TAC o RMN con contraste', '¿Lesión en anillo?',
          'Si domina un déficit focal con cefalea persistente, pides imagen con contraste, sin puncionar, buscando una lesión en anillo.',
          ['SÍ', N('do', 'Absceso cerebral', 'Ceftriaxona + metronidazol · cirugía si > 2,5 cm',
            'Si la hay, es un absceso: ceftriaxona más metronidazol, vancomicina si hubo trauma o cirugía, y drenaje quirúrgico si mide más de dos coma cinco centímetros.')])])]),
  },
};
