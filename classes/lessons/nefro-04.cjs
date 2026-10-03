// Clase 1.4 de Nefrología — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_nefrologia.cjs (nefro-04).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'nefro-04',
  tier: 1,
  slides: [
    {
      type: 'cover',
      subtitle: 'Un riñón ahogado por la congestión y un riñón engañado por la vasodilatación',
      say: 'Bienvenidos. Cerramos el bloque de injuria renal aguda con dos riñones que fallan por culpa de otro órgano: el corazón y el hígado. En los dos casos el riñón está estructuralmente sano, pero por razones opuestas. Entender esa diferencia es lo que te permite no equivocarte con el diurético ni con el volumen.',
    },

    {
      type: 'flow',
      kicker: 'Síndrome cardiorrenal',
      title: 'El riñón no falla por falta de bomba, sino por congestión',
      nodes: [
        { id: 'ic', col: 0, row: 2, k: 'start', t: 'Insuficiencia cardíaca descompensada', s: 'Síndrome cardiorrenal tipo 1' },
        { id: 'pvc', col: 1, row: 2, k: 'mech', t: 'Sube la presión venosa central', s: 'Aurícula derecha y vena cava' },
        { id: 'ven', col: 2, row: 2, k: 'mech', t: 'Congestión de la vena renal', s: 'Sube la presión en Bowman' },
        { id: 'tfg', col: 3, row: 2, k: 'risk', t: 'Cae la filtración', s: 'Se pierde el gradiente' },
        { id: 'fur', col: 3, row: 0, k: 'good', t: 'Descongestionar con furosemida IV', s: 'La función renal suele mejorar' },
        { id: 'bom', col: 1, row: 4, k: 'trap', t: 'Solo bajo gasto', s: 'Explicación antigua e incompleta' },
      ],
      edges: [
        { from: 'ic', to: 'pvc' }, { from: 'pvc', to: 'ven' }, { from: 'ven', to: 'tfg' },
        { from: 'tfg', to: 'fur', label: 'tratamiento' }, { from: 'ic', to: 'bom', label: 'no es lo principal' },
      ],
      steps: [
        { show: ['ic'], note: 'Falla bidireccional entre dos órganos',
          say: 'El síndrome cardiorrenal es la disfunción en ambos sentidos: la falla de uno de estos órganos daña al otro. Se describen cinco tipos. El que más importa es el tipo uno: una insuficiencia cardíaca aguda descompensada que gatilla una injuria renal aguda.' },
        { show: ['bom'], note: 'Lo que se enseñaba antes',
          say: 'Durante décadas se enseñó que el riñón fallaba porque el corazón no bombeaba suficiente sangre hacia adelante. Eso existe, pero no es lo principal.' },
        { show: ['pvc', 'ven'], note: 'El problema viene de atrás',
          say: 'El culpable principal es la congestión venosa, que viene de atrás. Sube la presión en la aurícula derecha, se transmite a la vena cava inferior y a las venas renales, y aumenta la presión dentro del espacio de Bowman.' },
        { show: ['tfg'], note: 'El riñón se ahoga',
          say: 'Con presión alta a la salida, el gradiente de filtración a través del glomérulo colapsa, y la filtración cae. El riñón no está seco: está ahogado.' },
        { show: ['fur'], note: 'Paradoja: el diurético mejora la creatinina',
          say: 'Y de ahí sale la conclusión que se pregunta: descongestionar con furosemida endovenosa suele mejorar la función renal, aunque parezca paradójico darle un diurético a un riñón que está fallando.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Síndrome hepatorrenal',
      title: 'Un riñón sano engañado por la vasodilatación',
      nodes: [
        { id: 'cir', col: 0, row: 2, k: 'start', t: 'Cirrosis con hipertensión portal', s: 'Con ascitis' },
        { id: 'vas', col: 1, row: 2, k: 'mech', t: 'Vasodilatación esplácnica', s: 'Óxido nítrico' },
        { id: 'hip', col: 2, row: 1, k: 'mech', t: 'Hipovolemia arterial efectiva', s: 'El cuerpo cree que falta volumen' },
        { id: 'raa', col: 2, row: 3, k: 'mech', t: 'Simpático y eje renina-angiotensina', s: 'Activación masiva' },
        { id: 'con', col: 3, row: 2, k: 'risk', t: 'Vasoconstricción renal intensa', s: 'Falla funcional oligúrica' },
        { id: 'na', col: 4, row: 2, k: 'effect', t: 'Na urinario muy bajo', s: 'Sedimento normal' },
      ],
      edges: [
        { from: 'cir', to: 'vas' }, { from: 'vas', to: 'hip' }, { from: 'hip', to: 'raa' },
        { from: 'raa', to: 'con' }, { from: 'con', to: 'na' },
      ],
      steps: [
        { show: ['cir', 'vas'], note: 'El problema empieza en el intestino',
          say: 'En la cirrosis ocurre casi lo opuesto. En un paciente con cirrosis avanzada, hipertensión portal y ascitis, el óxido nítrico produce una vasodilatación arterial extrema en el territorio esplácnico, el de los intestinos.' },
        { show: ['hip', 'raa'], note: 'El cuerpo interpreta una hipovolemia',
          say: 'Ese territorio dilatado secuestra el flujo arterial. El organismo interpreta que le falta volumen, y activa con fuerza el sistema simpático y el eje renina angiotensina aldosterona.' },
        { show: ['con'], note: 'El riñón se cierra',
          say: 'El resultado es una vasoconstricción intensa de las arterias renales. Es el síndrome hepatorrenal: una falla renal funcional y oligúrica, en un riñón que estructuralmente está sano.' },
        { show: ['na'], note: 'Un túbulo sano que retiene todo',
          say: 'Y como el túbulo está sano, se comporta como en la prerrenal que vimos en la primera clase: retiene sodio con avidez. El sodio urinario sale muy bajo, y el sedimento, normal.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Hepatorrenal: revertir la vasodilatación',
      cards: [
        { title: 'Tratamiento médico', tag: 'De elección', kind: 'pharma', items: [
          { t: 'Terlipresina + albúmina', d: 'Terlipresina 1–2 mg c/4–6 h IV · albúmina 20–40 g/día',
            say: 'El tratamiento médico de elección combina un vasoconstrictor esplácnico con un expansor. Terlipresina, un análogo de la vasopresina, en bolos endovenosos de uno a dos miligramos cada cuatro a seis horas, junto con albúmina al veinte por ciento, veinte a cuarenta gramos al día.' },
          { t: 'Alternativa en UCI', d: 'Noradrenalina IV + albúmina',
            say: 'En la unidad de paciente crítico, una alternativa es la noradrenalina endovenosa, también con albúmina.' },
        ] },
        { title: 'Lógica y curación', tag: 'Trasplante', kind: 'key', items: [
          { t: 'Cierra el territorio esplácnico', d: 'El flujo vuelve al riñón',
            say: 'La lógica es la del mecanismo: la terlipresina cierra el territorio esplácnico dilatado, y el flujo vuelve a redistribuirse hacia el riñón.' },
          { t: 'Trasplante hepático', d: 'Única terapia curativa',
            say: 'Pero ojo: la terapia definitiva y curativa del síndrome hepatorrenal es el trasplante hepático. Mientras el hígado siga enfermo, la vasodilatación sigue ahí.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Hepatorrenal: un diagnóstico de exclusión',
      head: ['Criterio', 'Qué se exige o se descarta'],
      rows: [
        { cells: ['Enfermedad hepática', 'Cirrosis con ascitis clínica o ecográfica'],
          say: 'El síndrome hepatorrenal es un diagnóstico de exclusión, según el Club Internacional de Ascitis. Primero, cirrosis con ascitis.' },
        { cells: ['Injuria renal aguda', 'Cr sube ≥ 0,3 mg/dL en 48 h o ≥ 50 % sobre la basal'],
          say: 'Segundo, una injuria renal aguda: creatinina que sube cero coma tres o más en cuarenta y ocho horas, o un cincuenta por ciento sobre la basal.' },
        { cells: ['Prueba con albúmina', 'Sin mejoría tras 48 h sin diuréticos y con albúmina 1 g/kg/día (máx. 100 g)'],
          say: 'Tercero, el criterio más preguntado: suspender los diuréticos y expandir con albúmina, un gramo por kilo al día, máximo cien gramos, durante cuarenta y ocho horas, sin que la creatinina mejore. Si mejora, era prerrenal, no hepatorrenal.' },
        { cells: ['Sin shock', 'Ni séptico ni cardiogénico'],
          say: 'Cuarto, que no haya shock, ni séptico ni cardiogénico.' },
        { cells: ['Sin nefrotóxicos', 'Ni AINE, aminoglucósidos ni contraste reciente'],
          say: 'Quinto, que no haya recibido nefrotóxicos recientes: AINE, aminoglucósidos o contraste yodado.' },
        { cells: ['Sin daño parenquimatoso', 'Proteinuria < 500 mg/día y sin hematuria (< 50 hematíes)'],
          say: 'Y sexto, que el riñón no tenga daño estructural: proteinuria bajo quinientos miligramos al día y sin hematuria. Si hay sedimento activo, piensa en otra causa.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 58 años con cirrosis alcohólica y ascitis, usuario de espironolactona 100 mg y furosemida 40 mg/día. Consulta por astenia y oliguria. Creatinina 2,4 mg/dL (basal 0,9 hace 3 semanas), Na urinario 8 mEq/L, sedimento normal. Se suspenden los diuréticos y se administra albúmina 1 g/kg/día por 48 horas; la creatinina sube a 2,7 mg/dL.',
      question: '¿Cuál es el tratamiento de elección en este momento?',
      options: [
        { letter: 'A', text: 'Terlipresina IV más albúmina al 20 %' },
        { letter: 'B', text: 'Reiniciar furosemida en dosis altas' },
        { letter: 'C', text: 'Hemodiálisis de urgencia' },
        { letter: 'D', text: 'Suero fisiológico 2 litros en bolo' },
        { letter: 'E', text: 'Paracentesis evacuadora de 8 litros sin reposición' },
      ],
      correct: 'A',
      explanation: 'Cirrosis con ascitis, injuria renal aguda, sedimento normal, Na urinario bajo y sin respuesta a 48 h de albúmina tras suspender diuréticos: síndrome hepatorrenal. Tratamiento médico de elección: terlipresina + albúmina al 20 %, como puente al trasplante hepático.',
      say: {
        stem: 'Vamos al caso. Hombre de cincuenta y ocho años con cirrosis alcohólica y ascitis, usuario de espironolactona y furosemida. Consulta por astenia y oliguria. La creatinina subió de cero coma nueve a dos coma cuatro, el sodio urinario es ocho y el sedimento es normal. Se suspenden los diuréticos, se da albúmina por cuarenta y ocho horas, y la creatinina sube a dos coma siete.',
        question: '¿Cuál es el tratamiento de elección en este momento?',
        options: 'Las alternativas: terlipresina con albúmina, reiniciar furosemida en dosis altas, hemodiálisis de urgencia, dos litros de suero fisiológico, o una paracentesis de ocho litros sin reposición. Piénsalo.',
        answer: 'Es la A. Cumple todo: cirrosis con ascitis, alza aguda de creatinina, sedimento normal, sodio urinario bajo y, lo más importante, no respondió a la albúmina tras suspender los diuréticos. Es un hepatorrenal, y se trata con terlipresina y albúmina. La furosemida es la trampa: aquí el riñón no está congestionado como en el cardiorrenal, está sin flujo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 56',
      stem: 'Un paciente de 75 años, con antecedente de hipertensión y diabetes, sin tratamiento, consulta por edema de las extremidades inferiores y malestar. Al examen físico tiene PA: 150/100 mmHg, FC: 70x’, edema marcado en ambas extremidades inferiores, con signo de la fóvea, hígado palpable, examen cardíaco normal y murmullo pulmonar presente, con escasos crépitos basales. En sus exámenes destaca creatinina: 2,2 mg/dl, Na+: 136 mEq/l, K+: 5,3 mEq/l y Cl-: 95 mEq/l.',
      question: '¿Qué diurético es de elección para el manejo del edema en este paciente?',
      options: [
        { letter: 'A', text: 'Clortalidona' },
        { letter: 'B', text: 'Hidroclorotiazida' },
        { letter: 'C', text: 'Furosemida' },
        { letter: 'D', text: 'Indapamida' },
        { letter: 'E', text: 'Espironolactona' },
      ],
      correct: 'C',
      explanation: 'Edema con falla renal (creatinina 2,2) y signos de congestión: el diurético de elección es el de asa. Las tiazidas (clortalidona, hidroclorotiazida, indapamida) pierden eficacia con la filtración reducida, y la espironolactona arriesga más hiperkalemia (K 5,3).',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil diecinueve. Paciente de setenta y cinco años, hipertenso y diabético sin tratamiento, con edema marcado de extremidades inferiores, hígado palpable y algunos crépitos basales. La creatinina es dos coma dos y el potasio cinco coma tres.',
        question: '¿Qué diurético es de elección para el manejo del edema en este paciente?',
        options: 'Las opciones: clortalidona, hidroclorotiazida, furosemida, indapamida, o espironolactona. Piénsalo.',
        answer: 'Es la C, furosemida. Hay congestión y el riñón ya filtra poco, y en ese escenario el diurético que funciona es el de asa. Tres de las opciones son tiazidas o parecidas, y pierden eficacia cuando la filtración cae. La espironolactona es el distractor: con un potasio de cinco coma tres, arriesgas una hiperkalemia. Es la misma lógica del cardiorrenal: descongestionar protege al riñón.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Hombre de 52 años con cirrosis Child-Pugh C por virus de hepatitis C y ascitis refractaria, hospitalizado por hemorragia digestiva alta variceal resuelta con ligadura. A las 72 horas presenta oliguria con creatinina de 0,8 a 2,6 mg/dL. Se suspenden diuréticos y se infunde albúmina al 20 % a 1 g/kg/día por 48 horas; la creatinina se mantiene en 2,5 mg/dL. Sedimento sin cilindros ni proteinuria. Na urinario 6 mEq/L. PA 100/60 mmHg.',
      question: '¿Cuál es el tratamiento de primera línea?',
      options: [
        { letter: 'A', text: 'Hemodiálisis trisemanal ambulatoria' },
        { letter: 'B', text: 'Terlipresina intravenosa asociada a albúmina' },
        { letter: 'C', text: 'Infusión de dopamina a dosis renales vasodilatadoras (2 mcg/kg/min)' },
        { letter: 'D', text: 'Bolo de furosemida de 120 mg IV' },
        { letter: 'E', text: 'Paracentesis evacuadora total de 8 litros sin reposición' },
      ],
      correct: 'B',
      explanation: 'Cirrosis con ascitis, injuria renal aguda, oliguria con Na urinario < 10, sedimento inactivo y sin respuesta a 48 h de albúmina: síndrome hepatorrenal. Primera línea: terlipresina + albúmina IV, como puente al trasplante hepático.',
      say: {
        stem: 'Y una pregunta del banco EUNACOM, un caso representativo. Hombre de cincuenta y dos años con cirrosis avanzada y ascitis refractaria, hospitalizado por una hemorragia variceal ya resuelta. A las setenta y dos horas se pone oligúrico y la creatinina sube de cero coma ocho a dos coma seis. Se suspenden los diuréticos, se da albúmina por cuarenta y ocho horas, y no mejora. El sedimento es normal y el sodio urinario, seis.',
        question: '¿Cuál es el tratamiento de primera línea?',
        options: 'Las opciones: hemodiálisis trisemanal, terlipresina con albúmina, dopamina en dosis renales, un bolo de furosemida, o una paracentesis de ocho litros sin reposición. Piénsalo.',
        answer: 'Es la B, terlipresina con albúmina. Pasó la prueba de albúmina sin mejorar, así que es hepatorrenal. La dopamina en dosis renales es un distractor clásico que no tiene lugar aquí. Y la paracentesis masiva sin reponer albúmina empeora justamente la hipovolemia efectiva que causa el problema.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Cardiorrenal', tag: 'Congestión', kind: 'key', items: [
          { t: 'Tipo 1: congestión venosa renal', d: 'No solo bajo gasto',
            say: 'Cerremos con las reglas de oro. En el cardiorrenal tipo uno, el riñón falla sobre todo por congestión venosa, no solo por bajo gasto.' },
          { t: 'Descongestionar mejora la creatinina', d: 'Furosemida IV',
            say: 'Por eso descongestionar con furosemida endovenosa suele mejorar la función renal.' },
        ] },
        { title: 'Hepatorrenal', tag: 'Exclusión', kind: 'alert', items: [
          { t: 'Prueba con albúmina obligatoria', d: '48 h sin diuréticos, 1 g/kg/día',
            say: 'El hepatorrenal es un diagnóstico de exclusión, y exige suspender los diuréticos y dar albúmina por cuarenta y ocho horas sin mejoría.' },
          { t: 'Terlipresina + albúmina', d: 'Curación: trasplante hepático',
            say: 'Se trata con terlipresina y albúmina, y se cura con el trasplante hepático. Si te llevas una sola idea de hoy: al riñón del cardiorrenal le sobra presión venosa y se descongestiona; al riñón del hepatorrenal le falta flujo arterial y se le devuelve con vasoconstrictor y albúmina. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Injuria renal en el cardiópata y en el cirrótico',
    root: N('start', 'Alza aguda de creatinina', 'En un cardiópata o un cirrótico',
      'Paciente con insuficiencia cardíaca o cirrosis que sube su creatinina. El órgano enfermo te orienta, pero la conducta depende del mecanismo.',
      ['', N('q', '¿Cuál es el órgano de base?', 'Corazón o hígado',
        '¿Es un paciente con insuficiencia cardíaca descompensada, o un cirrótico con ascitis?',
        ['Corazón congestivo', N('do', 'Cardiorrenal tipo 1', 'Descongestionar con furosemida IV',
          'Insuficiencia cardíaca descompensada con congestión: cardiorrenal tipo uno. Se descongestiona con furosemida endovenosa, y la creatinina suele mejorar.')],
        ['Cirrosis con ascitis', N('do', 'Suspender diuréticos + albúmina', '1 g/kg/día por 48 h',
          'Cirrosis con ascitis: primero descarta shock, nefrotóxicos y daño parenquimatoso. Luego suspende los diuréticos y da albúmina, un gramo por kilo al día, por cuarenta y ocho horas.',
          ['', N('q', '¿Mejora la creatinina?', 'A las 48 horas',
            '¿La creatinina mejora a las cuarenta y ocho horas?',
            ['SÍ', N('ok', 'Era prerrenal', 'Respondió al volumen',
              'Si mejora, era una injuria prerrenal, por ejemplo por exceso de diuréticos, y no un hepatorrenal.')],
            ['NO', N('alert', 'Síndrome hepatorrenal', 'Terlipresina + albúmina',
              'Si no mejora, es un síndrome hepatorrenal. Terlipresina con albúmina, o noradrenalina con albúmina en la unidad crítica.',
              ['', N('refer', 'Trasplante hepático', 'Única terapia curativa',
                'Y se deriva para trasplante hepático, la única terapia curativa.')])])])])]),
  },
};
