// Clase 4.5 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_diabetes.cjs (diab-19).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'diab-19',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuando el paciente empeora justo mientras los exámenes mejoran',
      say: 'Bienvenidos. En las clases anteriores aprendimos a tratar la cetoacidosis diabética. Hoy vemos lo que puede salir mal durante ese tratamiento: el edema cerebral, que es la complicación más grave, y la hipofosfemia, que es la más olvidada. Casi todo lo que se pregunta se resume en una escena: el paciente empeora justo cuando los exámenes estaban mejorando. Vamos a entender por qué pasa y qué hacer en el minuto uno.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Edema cerebral: el gradiente osmótico inverso',
      nodes: [
        { id: 'hip', col: 0, row: 1, k: 'cause', t: 'Plasma hiperosmolar', s: 'Durante la CAD' },
        { id: 'osm', col: 1, row: 1, k: 'mech', t: 'Osmoles endógenos cerebrales', s: 'La neurona se protege' },
        { id: 'tto', col: 1, row: 3, k: 'cause', t: 'Exceso de hipotónicos o caída rápida', s: 'Glicemia baja más de 100 por hora' },
        { id: 'gra', col: 2, row: 2, k: 'mech', t: 'Gradiente inverso', s: 'Afuera baja, adentro sigue alto' },
        { id: 'agu', col: 3, row: 2, k: 'effect', t: 'El agua entra al cerebro', s: 'Edema difuso, HTEC' },
        { id: 'her', col: 4, row: 2, k: 'alert', t: 'Herniación', s: 'Uncal o amigdalina' },
      ],
      edges: [
        { from: 'hip', to: 'osm' }, { from: 'osm', to: 'gra' }, { from: 'tto', to: 'gra' },
        { from: 'gra', to: 'agu' }, { from: 'agu', to: 'her' },
      ],
      steps: [
        { show: ['hip'], note: 'El cerebro vive horas en un plasma concentrado',
          say: 'Partamos por el mecanismo. Durante la cetoacidosis, el plasma está hiperosmolar, concentrado. Ese plasma tiende a sacarle agua a las células del cerebro.' },
        { show: ['osm'], note: 'La neurona fabrica sus propios osmoles',
          say: 'Para no deshidratarse, las células cerebrales se defienden fabricando sus propios osmoles, los osmoles endógenos. Así igualan la concentración de afuera y retienen su agua. Es una adaptación útil, pero lenta de revertir.' },
        { show: ['tto'], note: 'El tratamiento baja la osmolaridad de afuera',
          say: 'Ahora llega el tratamiento. Si se pasa un exceso de fluidos hipotónicos, o la glicemia cae demasiado rápido, sobre cien por hora, la osmolaridad del plasma cae bruscamente.' },
        { show: ['gra'], note: 'Afuera ya bajó, adentro sigue alto',
          say: 'Pero los osmoles que fabricó el cerebro se van con lentitud. Afuera la concentración ya bajó, adentro sigue alta. Es un gradiente osmótico al revés.' },
        { show: ['agu'], note: 'El agua sigue a los osmoles',
          say: 'Y el agua va hacia donde hay más osmoles: entra a los astrocitos y a las neuronas. Eso es el edema cerebral difuso, con hipertensión intracraneana.' },
        { show: ['her'], note: 'El riesgo final es la herniación',
          say: 'Si no se trata, el cerebro hinchado se hernia, uncal o amigdalina. Por eso es la principal causa de muerte en niños con cetoacidosis: entre el sesenta y el noventa por ciento de esas muertes. Y por eso, en la clase de insulina, insistimos en que la glicemia baje despacio.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Factores de riesgo',
      title: '¿A quién y cuándo le pasa?',
      cards: [
        { title: 'Factores de riesgo', tag: 'El paciente', kind: 'criteria', items: [
          { t: 'Menor de 5 años o debut de DM1', d: 'El grupo más expuesto',
            say: 'Veamos a quién le pasa. El factor de riesgo más fuerte es la edad: menores de cinco años. Y el debut de una diabetes tipo uno, que suele llegar con una cetoacidosis más grave.' },
          { t: 'Acidosis inicial severa', d: 'pH menor de 7,10, HCO3 muy bajo',
            say: 'También la severidad de la acidosis al ingreso: un pH bajo siete coma diez, o un bicarbonato muy bajo.' },
        ] },
        { title: 'Factores del tratamiento', tag: 'Lo que hacemos nosotros', kind: 'alert', items: [
          { t: 'Más de 4 L/m² en las primeras 4 horas', d: 'Infusión masiva de fluidos',
            say: 'Otros dependen de nosotros. La infusión masiva de fluidos en las primeras cuatro horas, sobre cuatro litros por metro cuadrado de superficie corporal.' },
          { t: 'El sodio corregido no sube', d: 'Señal de agua libre en exceso',
            say: 'Y que el sodio corregido no suba como se espera durante el tratamiento, lo que habla de que el plasma se está diluyendo demasiado.' },
        ] },
        { title: 'Cuándo aparece', tag: 'Ojo en el examen', kind: 'key', items: [
          { t: 'Entre las 4 y 12 horas', d: 'Cuando los exámenes parecen mejorar',
            say: 'Y el momento es típico: entre las cuatro y las doce horas de iniciado el tratamiento, justo cuando la glicemia y la acidosis parecen estar mejorando. Esa discordancia es la pista del enunciado.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'Los signos que no puedes dejar pasar',
      cards: [
        { title: 'Síntomas de alarma', tag: 'Neurológicos', kind: 'alert', items: [
          { t: 'Cefalea intensa de inicio súbito', d: 'Y vómitos explosivos que reaparecen',
            say: '¿Cómo se ve? El paciente, que iba mejorando, se queja de una cefalea intensa de inicio súbito, y vuelve a vomitar, con vómitos explosivos.' },
          { t: 'Irritabilidad y luego somnolencia', d: 'También incontinencia urinaria',
            say: 'Luego aparece agitación o irritabilidad sin explicación, seguida de somnolencia progresiva. Puede haber incontinencia urinaria.' },
        ] },
        { title: 'Tríada de Cushing', tag: 'Hipertensión intracraneana', kind: 'criteria', items: [
          { t: 'Bradicardia inexplicada', d: 'En un paciente que venía taquicárdico',
            say: 'Y el monitor te da la clave: la tríada de Cushing. Primero, una bradicardia inexplicada. Fíjate que un paciente deshidratado venía taquicárdico; que baje la frecuencia no es buena noticia.' },
          { t: 'Hipertensión + respiración irregular', d: 'El cerebro defiende su perfusión',
            say: 'Segundo, la presión arterial sube. Y tercero, el patrón respiratorio se vuelve irregular. Es el cerebro comprimido pidiendo más presión para perfundirse.' },
        ] },
        { title: 'El marcador más sensible', tag: 'Examen neurológico', kind: 'key', items: [
          { t: 'Caída del Glasgow', d: 'Controlarlo de forma seriada',
            say: 'El marcador clínico más sensible es el deterioro en la escala de coma de Glasgow. Por eso, a estos pacientes se les controla el Glasgow de forma seriada.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Rescate',
      title: 'Edema cerebral: se trata al lado de la cama',
      nodes: [
        { id: 'sos', col: 0, row: 2, k: 'start', t: 'Sospecha clínica', s: 'Cefalea, vómitos, Cushing' },
        { id: 'tac', col: 1, row: 0, k: 'trap', t: 'Trasladar a TAC primero', s: 'Se pierde tiempo' },
        { id: 'man', col: 2, row: 1, k: 'good', t: 'Manitol 20%: 0,5–1 g/kg', s: 'EV en 20 min; repetir a las 2 h' },
        { id: 'nacl', col: 2, row: 3, k: 'good', t: 'O NaCl 3%: 5 ml/kg', s: 'EV en 10 a 15 min' },
        { id: 'med', col: 3, row: 2, k: 'refer', t: 'Medidas concomitantes', s: 'Fluidos al 50%, cabecera a 30°, vía aérea' },
      ],
      edges: [
        { from: 'sos', to: 'tac', label: 'nunca' },
        { from: 'sos', to: 'man', label: 'de inmediato' }, { from: 'sos', to: 'nacl', label: 'alternativa' },
        { from: 'man', to: 'med' }, { from: 'nacl', to: 'med' },
      ],
      steps: [
        { show: ['sos'], note: 'La sospecha es clínica',
          say: 'Ahora la conducta, que es lo que más se pregunta. El diagnóstico es clínico: con la cefalea, los vómitos y la tríada de Cushing en un paciente en tratamiento por cetoacidosis, ya sabes lo que es.' },
        { show: ['tac'], note: 'Trampa: pedir TAC antes de tratar',
          say: 'Y aquí está la trampa. La alternativa que dice trasladar a tomografía de cerebro para confirmar suena rigurosa, pero es incorrecta. Mientras el paciente va y vuelve del escáner, el cerebro se puede herniar.' },
        { show: ['man'], note: 'Manitol, en el minuto uno',
          say: 'El tratamiento hiperosmolar se inicia de inmediato, al lado de la cama. Manitol al veinte por ciento, cero coma cinco a un gramo por kilo, endovenoso en veinte minutos, y se repite a las dos horas si no hay respuesta.' },
        { show: ['nacl'], note: 'Alternativa de primera línea',
          say: 'La alternativa, también de primera línea, es la solución salina hipertónica al tres por ciento, cinco mililitros por kilo en diez a quince minutos. Ambas hacen lo mismo: vuelven a subir la osmolaridad de afuera para sacar el agua del cerebro.' },
        { show: ['med'], note: 'Menos fluidos, cabecera alta, vía aérea',
          say: 'Y junto con eso, se reduce la velocidad de los fluidos a la mitad, se eleva la cabecera a treinta grados, y se asegura la vía aérea, con intubación si hay coma severo.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Hipofosfemia',
      title: 'Hipofosfemia: la complicación olvidada',
      cards: [
        { title: 'Mecanismo', tag: 'Igual que el potasio', kind: 'key', items: [
          { t: 'La insulina mete el fósforo a la célula', d: 'Tras días de pérdidas por glucosuria',
            say: 'La segunda complicación es la hipofosfemia, y su mecanismo ya lo conoces por el potasio. El paciente perdió fósforo por la orina durante días, y cuando llega la insulina, mete el fósforo que queda al interior de las células.' },
          { t: 'La leve no se trata', d: 'Es asintomática',
            say: 'La hipofosfemia leve es asintomática y no requiere tratamiento. Eso también se pregunta: no se repone fósforo de rutina.' },
        ] },
        { title: 'Hipofosfemia severa', tag: 'Menor de 1,0 mg/dL', kind: 'alert', items: [
          { t: 'Debilidad muscular extrema', d: 'Parálisis del diafragma y falla ventilatoria',
            say: 'Pero si cae bajo uno coma cero miligramos por decilitro, sin fósforo no hay energía para el músculo. Aparece debilidad muscular extrema, y lo grave es el diafragma: falla ventilatoria aguda, o un paciente que no se puede desconectar del ventilador.' },
          { t: 'Hemólisis y rabdomiólisis', d: 'Otras consecuencias',
            say: 'También puede producir anemia hemolítica y rabdomiólisis.' },
        ] },
        { title: 'Tratamiento', tag: 'Solo la severa', kind: 'pharma', items: [
          { t: 'Fosfato de potasio EV', d: '20 a 30 mmol en los fluidos',
            say: 'En esos casos se suplementa fosfato de potasio endovenoso, veinte a treinta milimoles diluidos en los fluidos.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos las complicaciones en un árbol: el paciente en tratamiento que se deteriora.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Complicaciones del tratamiento de la crisis',
      head: ['Complicación', 'Gatillante', 'Signos clave', 'Tratamiento de emergencia'],
      rows: [
        { cells: ['Edema cerebral', 'Hipotónicos en exceso o caída rápida de glicemia', 'Cefalea, vómitos, bradicardia, HTA, sopor', 'Manitol 20% o NaCl 3% al lado de la cama'],
          say: 'Repasemos las cuatro complicaciones del tratamiento, porque el examen las mezcla. Edema cerebral: por exceso de hipotónicos o caída rápida de la glicemia. Cefalea, vómitos, bradicardia, hipertensión y sopor. Manitol o salino hipertónico, al lado de la cama.' },
        { cells: ['Hipokalemia severa', 'Insulina sin chequear K o sin aporte', 'Debilidad, parálisis flácida, onda U, arritmias', 'Suspender insulina; KCl 20–30 mEq/h'],
          say: 'Hipokalemia severa: por dar insulina sin mirar el potasio o sin reponerlo. Debilidad, parálisis flácida, onda U y arritmias. Se suspende la insulina y se pasa cloruro de potasio.' },
        { cells: ['Hipofosfemia crítica', 'Captación celular por la insulina', 'Falla ventilatoria, rabdomiólisis', 'Fosfato de potasio 20–30 mmol EV'],
          say: 'Hipofosfemia crítica: debilidad, pero con potasio normal y fósforo bajo uno. Falla ventilatoria y rabdomiólisis. Fosfato de potasio endovenoso.' },
        { cells: ['Hipoglicemia severa', 'No agregar SG 5% al llegar a 200 mg/dL', 'Diaforesis, temblor, convulsiones', 'Glucosa 30% EV en bolo + SG 5%'],
          say: 'E hipoglicemia severa: por mantener la insulina sin agregar suero glucosado al llegar a doscientos. Sudoración, temblor y convulsiones. Glucosa al treinta por ciento en bolo, veinte a cincuenta mililitros, y se agrega suero glucosado.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 20 años con DM1 en tratamiento por cetoacidosis diabética, con insulina cristalina EV y suero fisiológico. A las 7 horas se torna confusa, sudorosa y temblorosa. PA 118/72 mmHg, FC 112 lpm. Hemoglucotest: 48 mg/dL. Nunca se agregó suero glucosado a la hidratación.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Manitol al 20% EV y reducir la velocidad de los fluidos' },
        { letter: 'B', text: 'TAC de cerebro urgente' },
        { letter: 'C', text: 'Glucosa al 30% EV en bolo y agregar suero glucosado al 5%' },
        { letter: 'D', text: 'Fosfato de potasio EV' },
        { letter: 'E', text: 'Bicarbonato de sodio EV' },
      ],
      correct: 'C',
      explanation: 'Confusión con diaforesis, temblor, taquicardia y glicemia de 48 mg/dL: hipoglicemia por no agregar SG 5% al bajar la glicemia manteniendo la insulina. Se trata con glucosa al 30% EV en bolo (20–50 ml) y se agrega SG 5%. No hay tríada de Cushing: la presión es normal y la frecuencia está alta, no baja.',
      say: {
        stem: 'Vamos a un caso, para practicar la diferencia. Mujer de veinte años en tratamiento por cetoacidosis, con insulina y suero fisiológico. A las siete horas se pone confusa, sudorosa y temblorosa. Presión ciento dieciocho sobre setenta y dos, frecuencia ciento doce, y el hemoglucotest marca cuarenta y ocho. Nunca se agregó suero glucosado.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: manitol, tomografía de cerebro, glucosa al treinta por ciento más suero glucosado, fosfato de potasio, o bicarbonato. Piénsalo.',
        answer: 'Es la C. Está confusa en el horario del edema cerebral, y por eso el manitol tienta. Pero mira el monitor: no hay tríada de Cushing, la frecuencia está alta y la presión normal. Y el hemoglucotest de cuarenta y ocho, con sudoración y temblor, es una hipoglicemia, por mantener la insulina sin agregar suero glucosado. Glucosa al treinta por ciento en bolo, y suero glucosado al cinco por ciento.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un adolescente de 13 años se encuentra hospitalizado en la UCI recibiendo tratamiento para una cetoacidosis diabética severa. A las 6 horas de iniciada la fluidoterapia y la insulina endovenosa, el paciente refiere cefalea intensa y presenta dos vómitos explosivos, tornándose progresivamente somnoliento y desorientado. Al monitor se observa un ascenso de la PA de 105/65 a 140/90 mmHg y un descenso de la FC de 102 a 54 lpm.',
      question: '¿Cuál es la conducta médica inmediata más adecuada?',
      options: [
        { letter: 'A', text: 'Trasladar de urgencia a tomografía axial computarizada de encéfalo para confirmar el diagnóstico' },
        { letter: 'B', text: 'Administrar inmediatamente Manitol al 20% por vía endovenosa (o Solución Salina al 3%) y reducir la velocidad de los fluidos' },
        { letter: 'C', text: 'Aumentar la velocidad de infusión de suero fisiológico para tratar el shock hipovolémico' },
        { letter: 'D', text: 'Indicar una dosis de atropina endovenosa para revertir la bradicardia sinusal' },
        { letter: 'E', text: 'Suspender la insulina y administrar 4 ampollas de glucosa al 30% en bolo' },
      ],
      correct: 'B',
      explanation: 'Edema cerebral con respuesta de Cushing (hipertensión y bradicardia, con cefalea, vómitos explosivos y deterioro de conciencia) a las 6 horas de tratamiento. Manitol al 20% (0,5–1 g/kg EV en 20 minutos) o NaCl 3% (5 ml/kg) de inmediato, al lado de la cama, y reducir los fluidos. Retrasar el tratamiento por una TAC arriesga la herniación.',
      say: {
        stem: 'Ahora un caso representativo del banco EUNACOM. Adolescente de trece años, en la unidad de cuidados intensivos por una cetoacidosis severa. A las seis horas de tratamiento, cefalea intensa, dos vómitos explosivos, y se va poniendo somnoliento. La presión sube de ciento cinco a ciento cuarenta, y la frecuencia cae de ciento dos a cincuenta y cuatro.',
        question: '¿Cuál es la conducta inmediata más adecuada?',
        options: 'Las opciones son: tomografía de cerebro para confirmar, manitol o salino hipertónico y reducir los fluidos, aumentar el suero fisiológico, atropina para la bradicardia, o suspender la insulina y dar glucosa. Piénsalo.',
        answer: 'Es la B. Es la escena de la clase: horario típico, cefalea, vómitos, deterioro de conciencia y tríada de Cushing. Edema cerebral. Manitol al veinte por ciento o salino al tres por ciento de inmediato, y menos fluidos. La A es el distractor más tentador, pero pedir una tomografía antes de tratar puede costar la herniación. Y la atropina trata el número, no la causa: la bradicardia es por el cerebro comprimido.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un paciente de 28 años hospitalizado en tratamiento de cetoacidosis diabética presenta debilidad muscular generalizada profunda e insuficiencia ventilatoria aguda con incapacidad para sostener el esfuerzo inspiratorio tras 18 horas de evolución. Sus exámenes demuestran: glicemia 170 mg/dL, pH 7.35, bicarbonato 20 mEq/L, sodio 138 mEq/L, potasio 4.2 mEq/L, calcio 9.2 mg/dL y fósforo inorgánico de 0.8 mg/dL.',
      question: '¿Cuál es el tratamiento específico indicado?',
      options: [
        { letter: 'A', text: 'Gluconato de calcio al 10% endovenoso' },
        { letter: 'B', text: 'Sulfato de magnesio endovenoso' },
        { letter: 'C', text: 'Suplementación endovenosa con Fosfato de Potasio' },
        { letter: 'D', text: 'Aumento de la dosis de insulina cristalina' },
        { letter: 'E', text: 'Bicarbonato de sodio al 2/3 molar' },
      ],
      correct: 'C',
      explanation: 'Hipofosfemia severa sintomática (fósforo 0,8 mg/dL, menor de 1,0): el fósforo es necesario para el ATP y el 2,3-DPG, y su déficit produce debilidad diafragmática y falla ventilatoria. Con potasio y calcio normales, el tratamiento específico es fosfato de potasio EV en infusión lenta.',
      say: {
        stem: 'Otro caso representativo del banco. Paciente de veintiocho años, a las dieciocho horas de tratamiento por cetoacidosis, con debilidad muscular profunda y una insuficiencia ventilatoria: no logra sostener el esfuerzo para inspirar. La cetoacidosis ya está resuelta, el potasio es cuatro coma dos, el calcio es normal, y el fósforo es cero coma ocho.',
        question: '¿Cuál es el tratamiento específico indicado?',
        options: 'Las opciones son: gluconato de calcio, sulfato de magnesio, fosfato de potasio, subir la insulina, o bicarbonato. Piénsalo.',
        answer: 'Es la C, fosfato de potasio endovenoso. La clave es descartar lo que primero se te viene a la cabeza ante un paciente débil en cetoacidosis: el potasio. Aquí el potasio y el calcio son normales, y el fósforo está bajo uno. Sin fósforo no hay energía para el diafragma. Por eso se repone fósforo, y solo en este escenario de hipofosfemia severa.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Edema cerebral', tag: 'Urgencia vital', kind: 'alert', items: [
          { t: 'Empeora cuando los exámenes mejoran', d: 'A las 4–12 horas, sobre todo en niños',
            say: 'Cerremos con las reglas de oro. El edema cerebral aparece entre las cuatro y las doce horas, cuando los exámenes mejoran, y sobre todo en niños y en el debut.' },
          { t: 'Cefalea, vómitos y tríada de Cushing', d: 'Bradicardia + hipertensión + respiración irregular',
            say: 'Se sospecha con cefalea, vómitos, deterioro de conciencia y la tríada de Cushing.' },
          { t: 'Manitol o NaCl 3% sin esperar la TAC', d: 'Y reducir los fluidos a la mitad',
            say: 'Y se trata con manitol o salino hipertónico al lado de la cama, sin esperar la tomografía.' },
        ] },
        { title: 'Prevención', tag: 'Despacio', kind: 'key', items: [
          { t: 'Glicemia: no más de 75–100 mg/dL por hora', d: 'Y sin exceso de hipotónicos',
            say: 'Se previene bajando la glicemia despacio, no más de setenta y cinco a cien por hora, y sin exceso de fluidos hipotónicos.' },
        ] },
        { title: 'Hipofosfemia', tag: 'Solo la severa', kind: 'pharma', items: [
          { t: 'Fósforo menor de 1,0 mg/dL', d: 'Falla ventilatoria: fosfato de potasio EV',
            say: 'Y la hipofosfemia solo se trata si es severa, bajo uno, con fosfato de potasio. Con esto cerramos las urgencias; en la próxima clase pasamos a las complicaciones crónicas, partiendo por el riñón. Si te llevas una sola idea de hoy: si el paciente empeora mientras los exámenes mejoran, piensa en el cerebro y trata de inmediato, sin esperar la tomografía. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Deterioro durante el tratamiento de la CAD',
    root: N('start', 'Paciente en tratamiento por CAD', 'Se deteriora pese a mejorar',
      'Paciente en tratamiento por cetoacidosis que, de pronto, se deteriora. La pregunta es qué complicación del tratamiento tienes al frente.',
      ['', N('q', '¿Qué predomina?', 'Neurológico o muscular',
        'Lo primero es ordenar: ¿predomina el compromiso neurológico, o la debilidad muscular?',
        ['Cefalea, vómitos, sopor', N('q', '¿Tríada de Cushing?', 'Bradicardia + hipertensión',
          'Si es neurológico, mira el monitor y el hemoglucotest. ¿Hay bradicardia con hipertensión?',
          ['SÍ', N('alert', 'Edema cerebral: manitol o NaCl 3%', 'Al lado de la cama, sin TAC',
            'Con tríada de Cushing, es edema cerebral: manitol al veinte por ciento o salino al tres por ciento de inmediato, fluidos a la mitad, cabecera a treinta grados. Sin esperar la tomografía.')],
          ['NO, glicemia baja', N('do', 'Hipoglicemia: glucosa 30% + SG 5%', 'Diaforesis y temblor',
            'Si no hay Cushing, el paciente suda, tiembla y la glicemia está baja, es una hipoglicemia: glucosa al treinta por ciento en bolo, y suero glucosado al cinco por ciento.')])],
        ['Debilidad muscular', N('q', '¿Cuánto es el potasio?', 'Lo primero que se descarta',
          'Si predomina la debilidad, lo primero es el potasio.',
          ['Menor de 3,3', N('do', 'Suspender insulina; KCl', '20 a 30 mEq por hora',
            'Bajo tres coma tres: suspender la insulina y pasar cloruro de potasio a veinte a treinta miliequivalentes por hora.')],
          ['Normal', N('refer', 'Fósforo menor de 1: fosfato de potasio', '20 a 30 mmol EV',
            'Con potasio normal y falla ventilatoria, mide el fósforo. Bajo uno, es una hipofosfemia severa: fosfato de potasio endovenoso, veinte a treinta milimoles.')])])]),
  },
};
