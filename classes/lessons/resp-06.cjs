// Clase 2.1 de Neumología — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neumologia.cjs (resp-06).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'resp-06',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Confirmar con radiografía, contar el CURB-65 y decidir dónde se trata',
      say: 'Bienvenidos. Abrimos el bloque de infecciones respiratorias bajas con la neumonía adquirida en la comunidad, un tema central de medicina interna que aparece en todos los exámenes. Esta clase responde dos preguntas: cómo se confirma el diagnóstico y dónde se trata al paciente, en su casa, en una sala o en intensivo. El antibiótico lo vemos en detalle en la próxima clase, pero ya vas a ver que depende de lo que decidamos hoy.',
    },

    {
      type: 'points',
      kicker: 'Definición',
      title: '¿Qué es una NAC?',
      cards: [
        { title: 'Definición', tag: 'Comunidad', kind: 'key', items: [
          { t: 'Infección aguda del parénquima', d: 'Adquirida fuera del hospital',
            say: 'La neumonía adquirida en la comunidad, o NAC, es una infección aguda del parénquima pulmonar adquirida fuera del hospital.' },
          { t: 'O en las primeras 48 h del ingreso', d: 'Después de eso es intrahospitalaria',
            say: 'También cuenta la que se manifiesta en las primeras cuarenta y ocho horas del ingreso, porque ya venía incubándose desde la casa. Pasadas las cuarenta y ocho horas es otra enfermedad, la neumonía intrahospitalaria, con otros gérmenes. La veremos en dos clases más.' },
        ] },
        { title: 'Por qué importa', tag: 'Adulto mayor', kind: 'alert', items: [
          { t: 'Primera causa de muerte infecciosa', d: 'En adultos mayores en Chile',
            say: 'Es la principal causa de muerte por enfermedad infecciosa en los adultos mayores en Chile. Por eso el Estado la garantiza.' },
        ] },
        { title: 'GES', tag: '65 años y más', kind: 'criteria', items: [
          { t: 'NAC en personas de 65 años y más', d: 'Confirmación radiológica',
            say: 'La NAC en personas de sesenta y cinco años y más es patología GES. Ante la sospecha, el paciente tiene derecho a la confirmación con radiografía.' },
          { t: 'Antibiótico en < 24 horas', d: 'Desde el ingreso',
            say: 'Y a iniciar el antibiótico en menos de veinticuatro horas desde el ingreso. El corte de sesenta y cinco años y las veinticuatro horas se preguntan.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Etiología',
      title: 'El germen depende del paciente',
      cards: [
        { title: 'En todos', tag: 'El más común', kind: 'key', items: [
          { t: 'Streptococcus pneumoniae', d: 'Más del 50 % de las bacterianas',
            say: 'El germen más frecuente, en todas las edades y en todas las gravedades, es el neumococo, Streptococcus pneumoniae. Explica más de la mitad de las neumonías bacterianas identificadas. Si te preguntan el agente más probable y no hay ninguna pista especial, es el neumococo.' },
        ] },
        { title: 'Según el terreno', tag: 'Las pistas', kind: 'criteria', items: [
          { t: 'Joven sano', d: 'Mycoplasma y virus respiratorios',
            say: 'Después, el paciente te da pistas. En el adulto joven y sano destacan Mycoplasma pneumoniae y los virus respiratorios: influenza, virus respiratorio sincicial y SARS coronavirus dos.' },
          { t: 'Mayor, fumador o EPOC', d: 'H. influenzae y Moraxella',
            say: 'En el adulto mayor, el fumador o el paciente con EPOC, se suman Haemophilus influenzae y Moraxella catarrhalis. Son los mismos gérmenes de la exacerbación de EPOC que vimos la clase pasada.' },
          { t: 'Demencia o trastorno deglutorio', d: 'Aspirativa: anaerobios y gramnegativos',
            say: 'Y en el paciente con demencia o trastornos de la deglución, hay que sospechar una neumonía aspirativa, por anaerobios de la boca y bacilos gramnegativos entéricos.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico',
      title: 'Sin radiografía no hay NAC',
      nodes: [
        { id: 'cli', col: 0, row: 1, k: 'start', t: 'Sospecha clínica', s: 'Fiebre, tos con expectoración, crépitos' },
        { id: 'rx', col: 1, row: 1, k: 'q', t: 'Radiografía de tórax', s: 'Frontal y lateral' },
        { id: 'con', col: 2, row: 0, k: 'good', t: 'Infiltrado nuevo', s: 'Condensación, broncograma o intersticial' },
        { id: 'nac', col: 3, row: 0, k: 'effect', t: 'NAC confirmada', s: 'Ahora, ¿dónde se trata?' },
        { id: 'lab', col: 2, row: 2, k: 'trap', t: 'PCR, cultivo, TAC', s: 'Apoyan, no reemplazan la Rx' },
      ],
      edges: [
        { from: 'cli', to: 'rx' }, { from: 'rx', to: 'con' }, { from: 'con', to: 'nac' },
        { from: 'rx', to: 'lab', label: 'no la reemplazan' },
      ],
      steps: [
        { show: ['cli'], note: 'La clínica hace sospechar',
          say: 'El paciente típico consulta por fiebre y tos con expectoración, a veces herrumbrosa, con dolor en puntada de costado. Al examen hay crépitos localizados, y en la condensación franca, matidez y aumento de la transmisión de las vibraciones vocales.' },
        { show: ['rx'], note: 'Siempre la radiografía',
          say: 'Pero la clínica solo hace sospechar. La confirmación exige siempre una radiografía de tórax, idealmente en proyección frontal y lateral.' },
        { show: ['con', 'nac'], note: 'Algo nuevo en la imagen',
          say: 'Lo que confirma la neumonía es algo nuevo en la imagen: una condensación alveolar, un broncograma aéreo o un infiltrado intersticial. Con eso, la NAC está confirmada, y la siguiente pregunta es dónde tratarla.' },
        { show: ['lab'], note: 'Se pregunta como distractor',
          say: 'Ojo con los distractores. La proteína C reactiva y la procalcitonina apoyan, el cultivo de expectoración no es imprescindible para partir el tratamiento ambulatorio, y la TAC no es el examen de entrada. El examen indispensable es la radiografía.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Gravedad',
      title: 'CURB-65: un punto cada uno',
      cards: [
        { title: 'CURB', tag: 'Clínica y laboratorio', kind: 'criteria', items: [
          { t: 'C: confusión', d: 'Desorientación aguda',
            say: 'Para decidir dónde se trata se usa el CURB sesenta y cinco, de la Sociedad Británica del Tórax. Son cinco criterios, y cada uno suma un punto. La C es confusión: desorientación en tiempo y espacio de inicio agudo.' },
          { t: 'U: urea > 42 mg/dL', d: 'O BUN > 19 mg/dL',
            say: 'La U es la urea: sobre cuarenta y dos miligramos por decilitro, o un nitrógeno ureico en sangre sobre diecinueve.' },
          { t: 'R: FR ≥ 30/min', d: 'Respiratorio',
            say: 'La R es la frecuencia respiratoria de treinta o más por minuto.' },
          { t: 'B: PAS < 90 o PAD ≤ 60', d: 'Blood pressure',
            say: 'La B, de presión arterial en inglés, es una sistólica bajo noventa o una diastólica de sesenta o menos.' },
        ] },
        { title: '65', tag: 'Edad', kind: 'key', items: [
          { t: 'Edad ≥ 65 años', d: 'El único que no es gravedad',
            say: 'Y el sesenta y cinco es la edad, de sesenta y cinco años o más. Fíjate en un detalle que después te va a servir: es el único criterio que no mide la gravedad del cuadro, sino el terreno.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Gravedad',
      title: 'Del puntaje al lugar',
      nodes: [
        { id: 'sc', col: 0, row: 2, k: 'start', t: 'Puntaje CURB-65', s: '0 a 5 puntos' },
        { id: 'p0', col: 1, row: 0, k: 'good', t: '0–1 punto', s: 'Mortalidad 0,7–2,1 %' },
        { id: 'amb', col: 2, row: 0, k: 'good', t: 'Ambulatorio', s: 'Si el 1 es por la edad' },
        { id: 'p2', col: 1, row: 2, k: 'risk', t: '2 puntos', s: 'Mortalidad 9,2 %' },
        { id: 'sala', col: 2, row: 2, k: 'refer', t: 'Hospitalizar en sala', s: 'O corta estancia supervisada' },
        { id: 'p3', col: 1, row: 4, k: 'alert', t: '3 o más', s: 'Mortalidad 14,5–40 %' },
        { id: 'uci', col: 2, row: 4, k: 'alert', t: 'Sala o UTI · 4–5: UCI', s: 'Evaluar criterios ATS/IDSA' },
      ],
      edges: [
        { from: 'sc', to: 'p0' }, { from: 'sc', to: 'p2' }, { from: 'sc', to: 'p3' },
        { from: 'p0', to: 'amb' }, { from: 'p2', to: 'sala' }, { from: 'p3', to: 'uci' },
      ],
      steps: [
        { show: ['sc'], note: 'A más puntos, más mortalidad',
          say: 'El puntaje predice la mortalidad a treinta días, y con eso decide el lugar de tratamiento.' },
        { show: ['p0', 'amb'], note: 'El punto por edad no obliga a hospitalizar',
          say: 'Con cero o un punto, el riesgo es bajo, con una mortalidad cercana al uno o dos por ciento, y el manejo es ambulatorio. Y aquí vuelve el detalle de la edad: si el único punto es tener sesenta y cinco años o más, el paciente puede irse a su casa, siempre que no tenga hipoxemia ni riesgo social. Esa es la pregunta más clásica del tema.' },
        { show: ['p2', 'sala'], note: 'Moderado',
          say: 'Con dos puntos, el riesgo es moderado, la mortalidad sube a cerca de nueve por ciento, y se hospitaliza en una sala general, o en una unidad de corta estancia supervisada.' },
        { show: ['p3', 'uci'], note: 'Grave: pensar en intensivo',
          say: 'Con tres o más, es una neumonía grave. Con tres puntos se hospitaliza en sala o en intermedio, evaluando los criterios de ingreso a intensivo. Y con cuatro o cinco, donde la mortalidad llega al cuarenta por ciento, el ingreso a la unidad de cuidados intensivos es inmediato.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Atención primaria',
      title: 'CRB-65: sin laboratorio',
      cards: [
        { title: 'CRB-65', tag: 'Sin la urea', kind: 'key', items: [
          { t: 'Se omite la urea', d: 'Para el consultorio',
            say: 'En atención primaria muchas veces no tienes el laboratorio a mano. Por eso existe el CRB sesenta y cinco: el mismo puntaje, pero sin la urea. Solo clínica, que puedes medir en el box.' },
        ] },
        { title: 'Conducta', tag: 'En APS', kind: 'criteria', items: [
          { t: '0 puntos', d: 'Manejo ambulatorio seguro',
            say: 'Con cero puntos, el manejo ambulatorio es seguro.' },
          { t: '1 a 2 puntos', d: 'Derivar para evaluación hospitalaria',
            say: 'Con uno o dos puntos, se sugiere derivar para una evaluación en el hospital, donde se completa el puntaje y el juicio clínico.' },
          { t: '3 o más', d: 'Hospitalización urgente',
            say: 'Y con tres o más, la hospitalización es urgente.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Intensivo',
      title: 'Criterios ATS/IDSA',
      cards: [
        { title: 'Criterios mayores', tag: 'Basta uno', kind: 'alert', items: [
          { t: 'Shock séptico con vasopresores', d: 'Pese a la reanimación con fluidos',
            say: 'El CURB sesenta y cinco predice mortalidad, pero no reemplaza el juicio clínico para decidir intensivo. Para eso están los criterios de las sociedades americanas del tórax y de infectología. Hay dos criterios mayores, y basta uno para ingresar directo a la unidad de cuidados intensivos. El primero, shock séptico que necesita vasopresores.' },
          { t: 'Necesidad de ventilación invasiva', d: 'Insuficiencia respiratoria',
            say: 'El segundo, insuficiencia respiratoria que necesita intubación y ventilación mecánica invasiva.' },
        ] },
        { title: 'Criterios menores', tag: 'Se necesitan 3', kind: 'criteria', items: [
          { t: 'FR ≥ 30 · PaO2/FiO2 ≤ 250', d: 'Infiltrados multilobares · confusión',
            say: 'Los menores se suman, y se necesitan tres. Frecuencia respiratoria de treinta o más, una relación entre la presión arterial de oxígeno y la fracción inspirada de doscientos cincuenta o menos, infiltrados multilobares y confusión.' },
          { t: 'BUN ≥ 20 · leucocitos < 4.000', d: 'Plaquetas < 100.000 · T° < 36 °C',
            say: 'Además, nitrógeno ureico de veinte o más, leucopenia bajo cuatro mil, plaquetas bajo cien mil, hipotermia bajo treinta y seis grados, e hipotensión que necesita reanimación agresiva con fluidos.' },
          { t: 'Ojo: son menores', d: 'Uno solo no basta',
            say: 'La trampa típica es tomar uno de estos como si fuera mayor. Una frecuencia respiratoria de treinta y cinco, sola, no manda a intensivo: los mayores son solo el shock con vasopresores y la necesidad de intubar.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Evolución',
      title: 'Fiebre a las 72 horas',
      nodes: [
        { id: 'atb', col: 0, row: 1, k: 'start', t: 'Antibiótico adecuado', s: '72 horas' },
        { id: 'feb', col: 1, row: 1, k: 'q', t: '¿Sigue con fiebre?', s: 'Algo se complicó' },
        { id: 'img', col: 2, row: 1, k: 'mech', t: 'Repetir Rx o TAC', s: 'Obligatorio' },
        { id: 'der', col: 3, row: 0, k: 'alert', t: 'Derrame complicado o empiema', s: 'Lo primero que se busca' },
        { id: 'abs', col: 3, row: 2, k: 'risk', t: 'Absceso o germen resistente', s: 'Las otras causas' },
        { id: 'tor', col: 4, row: 0, k: 'refer', t: 'Toracocentesis', s: 'Derrame > 10 mm en decúbito lateral' },
      ],
      edges: [
        { from: 'atb', to: 'feb' }, { from: 'feb', to: 'img', label: 'sí' },
        { from: 'img', to: 'der' }, { from: 'img', to: 'abs' }, { from: 'der', to: 'tor' },
      ],
      steps: [
        { show: ['atb', 'feb'], note: 'Tres días es el plazo',
          say: 'Última pieza: el seguimiento. Un paciente con antibiótico adecuado debería estar sin fiebre a las setenta y dos horas. Si la fiebre persiste, algo se complicó.' },
        { show: ['img'], note: 'Nueva imagen',
          say: 'La conducta obligatoria es repetir la radiografía o pedir una TAC de tórax. Cambiar el antibiótico a ciegas, sin buscar la causa, es el error.' },
        { show: ['der', 'abs'], note: 'Qué se busca',
          say: 'Lo que se busca, antes que nada, es un derrame paraneumónico complicado o un empiema. También un absceso pulmonar o una infección por gérmenes resistentes. Esas supuraciones son tema de las próximas clases.' },
        { show: ['tor'], note: 'Más de 10 mm: se punciona',
          say: 'Y un dato concreto: todo derrame paraneumónico de más de diez milímetros de espesor en la radiografía en decúbito lateral tiene indicación de toracocentesis diagnóstica precoz.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en el árbol que vas a recorrer frente a cada paciente con sospecha de neumonía.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'CURB-65: puntaje y lugar',
      head: ['CURB-65', 'Mortalidad 30 días', 'Dónde se trata'],
      rows: [
        { cells: ['0 puntos', '0,7 %', 'Ambulatorio'],
          say: 'Repasemos la tabla del CURB sesenta y cinco. Cero puntos: mortalidad bajo el uno por ciento, manejo ambulatorio.' },
        { cells: ['1 punto', '2,1 %', 'Ambulatorio, si el punto es la edad'],
          say: 'Un punto: mortalidad de dos por ciento, ambulatorio. La trampa es hospitalizar a un paciente estable solo por tener sesenta y cinco años.' },
        { cells: ['2 puntos', '9,2 %', 'Sala general o corta estancia'],
          say: 'Dos puntos: la mortalidad sube a nueve por ciento, y se hospitaliza en sala general.' },
        { cells: ['3 puntos', '14,5 %', 'Sala o UTI, evaluar ATS/IDSA'],
          say: 'Tres puntos: sala o intermedio, evaluando los criterios americanos para intensivo.' },
        { cells: ['4 o 5 puntos', '40 %', 'UCI inmediata'],
          say: 'Cuatro o cinco puntos: cuatro de cada diez mueren, y el ingreso a intensivo es inmediato. Y recuerda que un solo criterio mayor, shock con vasopresores o necesidad de intubar, manda a intensivo con cualquier puntaje.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 72 años consulta en el CESFAM por 48 horas de fiebre hasta 38,8 °C y tos con expectoración herrumbrosa. Orientada, FR 24 rpm, FC 92 lpm, PA 130/80 mmHg, SatO2 95% ambiental. Crépitos en el tercio inferior derecho. BUN 14 mg/dL. Rx de tórax: condensación del lóbulo inferior derecho, sin derrame. Tiene buena red de apoyo familiar.',
      question: '¿Cuál es el puntaje CURB-65 y la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'CURB-65 de 0; tratamiento sintomático sin antibióticos' },
        { letter: 'B', text: 'CURB-65 de 1; manejo ambulatorio con antibiótico oral y control en 48 horas' },
        { letter: 'C', text: 'CURB-65 de 2; hospitalización en sala general' },
        { letter: 'D', text: 'CURB-65 de 1; hospitalización obligatoria por ser mayor de 65 años' },
        { letter: 'E', text: 'CURB-65 de 3; ingreso a UCI' },
      ],
      correct: 'B',
      explanation: 'Confusión 0, BUN 14 (0), FR 24 (0), PA 130/80 (0), edad ≥ 65 (1): CURB-65 = 1, solo por edad. Estable, sin hipoxemia y con red de apoyo: manejo ambulatorio GES con amoxicilina/clavulánico 875/125 c/12 h por 7 días y control a las 48 horas.',
      say: {
        stem: 'Vamos al caso. Mujer de setenta y dos años que consulta en el CESFAM por dos días de fiebre y tos con expectoración herrumbrosa. Está orientada, con frecuencia respiratoria de veinticuatro, presión de ciento treinta con ochenta y saturación de noventa y cinco por ciento. Tiene crépitos en la base derecha, un nitrógeno ureico de catorce, y la radiografía muestra una condensación del lóbulo inferior derecho. Tiene buena red de apoyo.',
        question: '¿Cuál es su puntaje CURB sesenta y cinco y la conducta?',
        options: 'Las opciones: cero puntos y sin antibiótico, un punto y manejo ambulatorio con control en cuarenta y ocho horas, dos puntos y sala, un punto pero hospitalizar por la edad, o tres puntos e intensivo. Piénsalo.',
        answer: 'Es la B. Cuenta criterio por criterio: está orientada, el nitrógeno ureico es normal, respira a veinticuatro, que no llega a treinta, y la presión es normal. El único punto es la edad. La D es el distractor tentador, pero el punto por edad, en una paciente estable, sin hipoxemia y con apoyo, no obliga a hospitalizar. Se trata en su casa, con amoxicilina y ácido clavulánico por GES, y control a las cuarenta y ocho horas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 52',
      stem: 'Un paciente con antecedente de EPOC, fumador de 25 paquetes año, consulta por cuadro de tres días de evolución de exacerbación de su disnea basal y expectoración mucosa, asociado a sensación febril y hace un día se agrega dolor tipo puntada de costado. Al examen se aprecia frecuencia respiratoria de 21 por minuto, frecuencia cardiaca de 92 por minuto, temperatura de 38,1°C. Al examen pulmonar presenta crepitaciones de la cara lateral del hemitórax derecho, asociado a matidez a la percusión. Se solicita una radiografía de tórax.',
      question: 'El diagnóstico más probable:',
      options: [
        { letter: 'A', text: 'Tuberculosis' },
        { letter: 'B', text: 'Derrame pleural' },
        { letter: 'C', text: 'Neumonía' },
        { letter: 'D', text: 'Tromboembolismo pulmonar' },
        { letter: 'E', text: 'Cáncer bronquial' },
      ],
      correct: 'C',
      explanation: 'Cuadro agudo de fiebre, puntada de costado, crepitaciones localizadas y matidez: clínica de NAC, que la radiografía confirma. La matidez puede tentar hacia el derrame, pero las crepitaciones y la fiebre aguda apuntan a condensación.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil diecisiete. Paciente con EPOC, fumador, con tres días de más disnea, expectoración y sensación febril, y desde hace un día, dolor en puntada de costado. Tiene treinta y ocho coma uno de temperatura, y al examen, crepitaciones en la cara lateral del hemitórax derecho con matidez. Se pide una radiografía.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: tuberculosis, derrame pleural, neumonía, tromboembolismo pulmonar o cáncer bronquial. Piénsalo.',
        answer: 'Es la C, neumonía. Fiebre aguda, puntada de costado, crepitaciones localizadas y matidez es la condensación clásica, y la radiografía la confirma. El distractor es el derrame, por la matidez; pero la fiebre aguda con crepitaciones localizadas habla de condensación. Y fíjate en la trampa del antecedente: un EPOC con más disnea no siempre es una exacerbación. El foco localizado con fiebre obliga a pensar en neumonía.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 139',
      stem: "Un paciente de 60 años presenta un cuadro de malestar general, fiebre y tos, asociada a expectoración mucopurulenta. Evoluciona con dificultad respiratoria, por lo que es llevado al servicio de urgencia. Al examen físico tiene FC: 113x', PA: 100/60 mmHg, FR: 33x' y al examen pulmonar presenta crepitaciones inspiratorias, en el hemicampo pulmonar derecho. La radiografía de tórax muestra condensación en los lóbulos medio e inferior derecho y satura 83%, con FiO2 ambiental, que sube a 90%, con oxígeno al 40%, por mascarilla de recirculación.",
      question: '¿Cuál es el tratamiento antibiótico de elección para este paciente?',
      options: [
        { letter: 'A', text: 'Cefepime más amykacina' },
        { letter: 'B', text: 'Ceftriaxona más clindamicina' },
        { letter: 'C', text: 'Cloxacilina más metronidazol' },
        { letter: 'D', text: 'Cefotaximo más moxifloxacino' },
        { letter: 'E', text: 'Piperacilina más tazobactam' },
      ],
      correct: 'D',
      explanation: 'NAC grave: FR 33, PA 100/60 (diastólica ≤ 60), dos lóbulos comprometidos e insuficiencia respiratoria grave. Es una NAC de UCI, y el esquema es una cefalosporina de tercera generación (cefotaximo o ceftriaxona) más una quinolona respiratoria o un macrólido.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil dieciséis. Hombre de sesenta años con fiebre, tos y expectoración mucopurulenta, que llega a la urgencia con dificultad respiratoria. Frecuencia respiratoria de treinta y tres, presión de cien con sesenta, condensación de los lóbulos medio e inferior derechos, y una saturación de ochenta y tres que solo sube a noventa con mascarilla.',
        question: '¿Cuál es el tratamiento antibiótico de elección?',
        options: 'Las opciones: cefepime más amikacina, ceftriaxona más clindamicina, cloxacilina más metronidazol, cefotaximo más moxifloxacino, o piperacilina con tazobactam. Piénsalo.',
        answer: 'Es la D. Primero la gravedad: frecuencia sobre treinta, diastólica de sesenta, dos lóbulos y una insuficiencia respiratoria que casi no responde al oxígeno. Es una NAC de intensivo. Y en intensivo se da una cefalosporina de tercera generación, cefotaximo o ceftriaxona, más una quinolona respiratoria o un macrólido. La E tienta porque es de amplio espectro, pero la cobertura antipseudomónica es para la neumonía intrahospitalaria.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Imagen', kind: 'key', items: [
          { t: 'Sin radiografía no hay NAC', d: 'Infiltrado nuevo',
            say: 'Cerremos con las reglas de oro. La NAC se confirma siempre con radiografía de tórax: un infiltrado nuevo. Y el germen más frecuente es el neumococo.' },
          { t: 'GES ≥ 65 años', d: 'Antibiótico en < 24 horas',
            say: 'En sesenta y cinco años y más es GES, con antibiótico en menos de veinticuatro horas.' },
        ] },
        { title: 'Gravedad', tag: 'CURB-65', kind: 'criteria', items: [
          { t: '0–1: casa · 2: sala · ≥ 3: evaluar UCI', d: 'Un punto por edad: ambulatorio',
            say: 'CURB sesenta y cinco: cero o uno, a la casa; dos, a sala; tres o más, evaluar intensivo. Y si el único punto es la edad, en un paciente estable, se trata ambulatorio.' },
          { t: 'Criterio mayor: UCI directo', d: 'Shock con vasopresores · intubación',
            say: 'Un solo criterio mayor de los americanos, shock con vasopresores o necesidad de intubar, manda directo a intensivo.' },
        ] },
        { title: 'Evolución', tag: '72 horas', kind: 'alert', items: [
          { t: 'Fiebre a las 72 h', d: 'Nueva imagen: buscar derrame o empiema',
            say: 'Y si a las setenta y dos horas sigue con fiebre, nueva imagen para buscar un derrame complicado o un empiema. En la próxima clase vemos qué antibiótico va en cada uno de estos lugares. Si te llevas una sola idea de hoy: la radiografía confirma la neumonía, y el CURB sesenta y cinco decide dónde se trata. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'NAC: confirmar y decidir el lugar',
    root: N('start', 'Sospecha de neumonía', 'Fiebre, tos, crépitos localizados',
      'Paciente con fiebre, tos con expectoración y crépitos localizados. Primero se confirma, después se decide el lugar.',
      ['', N('q', '¿Infiltrado nuevo en la Rx?', 'Radiografía frontal y lateral',
        'La radiografía de tórax es obligatoria. ¿Muestra una condensación o un infiltrado nuevo?',
        ['NO', N('ok', 'No es NAC', 'Buscar otro diagnóstico',
          'Si no hay infiltrado nuevo, no es una neumonía, y hay que buscar otro diagnóstico.')],
        ['SÍ', N('q', '¿Criterio mayor ATS/IDSA?', 'Shock con vasopresores · intubación',
          'Con la neumonía confirmada, lo primero es descartar lo más grave: ¿tiene shock con vasopresores o necesita intubación?',
          ['SÍ', N('alert', 'UCI directo', 'Con cualquier puntaje',
            'Si tiene un criterio mayor, va directo a intensivo, sin importar el puntaje.')],
          ['NO', N('q', '¿Cuánto suma el CURB-65?', 'C · U · R · B · 65',
            'Si no, se suma el CURB sesenta y cinco: confusión, urea, frecuencia respiratoria, presión y edad.',
            ['0–1', N('ok', 'Ambulatorio', 'Control en 48 h',
              'Cero o un punto, incluido el punto por edad en un paciente estable: tratamiento ambulatorio y control a las cuarenta y ocho horas.')],
            ['2', N('do', 'Sala general', 'Hospitalizar',
              'Dos puntos: hospitalización en sala general.')],
            ['≥ 3', N('refer', 'Sala, UTI o UCI', '4–5: UCI inmediata',
              'Tres o más: evaluar intensivo con los criterios menores; con cuatro o cinco, ingreso inmediato a la unidad de cuidados intensivos.')])])])]),
  },
};
