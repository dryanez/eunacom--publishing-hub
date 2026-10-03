// Clase 5.1 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_diabetes.cjs (diab-20).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'diab-20',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Buscar la albúmina a tiempo y bloquear el eje aunque la presión sea normal',
      say: 'Bienvenidos. Dejamos atrás las urgencias y entramos a las complicaciones crónicas, partiendo por el riñón. La nefropatía diabética es la primera causa de enfermedad renal crónica terminal y de ingreso a hemodiálisis, en Chile y en el mundo. En el examen se pregunta siempre lo mismo: cuándo se busca, con qué examen, cómo se confirma, y qué se indica aunque el paciente tenga la presión normal.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Del glomérulo que filtra de más a la diálisis',
      nodes: [
        { id: 'hg', col: 0, row: 1, k: 'cause', t: 'Hiperglicemia crónica', s: 'Años de glucosa alta' },
        { id: 'hf', col: 1, row: 1, k: 'mech', t: 'Hiperfiltración glomerular', s: 'Sube la presión intraglomerular' },
        { id: 'mb', col: 2, row: 0, k: 'mech', t: 'Membrana basal gruesa', s: 'E hipertrofia mesangial' },
        { id: 'kw', col: 3, row: 0, k: 'effect', t: 'Kimmelstiel-Wilson', s: 'Glomeruloesclerosis nodular' },
        { id: 'alb', col: 2, row: 2, k: 'risk', t: 'Albuminuria', s: 'El primer signo detectable' },
        { id: 'erc', col: 3, row: 2, k: 'alert', t: 'ERC terminal', s: '1ª causa de hemodiálisis' },
        { id: 'iec', col: 1, row: 3, k: 'good', t: 'IECA o ARA II', s: 'Dilatan la arteriola eferente' },
      ],
      edges: [
        { from: 'hg', to: 'hf' }, { from: 'hf', to: 'mb' }, { from: 'mb', to: 'kw' },
        { from: 'hf', to: 'alb' }, { from: 'alb', to: 'erc' }, { from: 'kw', to: 'erc' },
        { from: 'iec', to: 'hf', label: 'bajan la presión' },
      ],
      steps: [
        { show: ['hg', 'hf'], note: 'El daño parte por un glomérulo que trabaja de más',
          say: 'Partamos por el mecanismo, porque explica el tratamiento. La hiperglicemia crónica hace que el glomérulo filtre de más: la hiperfiltración glomerular. Y filtrar de más significa trabajar con una presión intraglomerular alta.' },
        { show: ['mb', 'kw'], note: 'La presión alta deforma el glomérulo',
          say: 'Esa presión, sostenida por años, engruesa la membrana basal, hace crecer el mesangio, y termina en la lesión clásica de la anatomía patológica: la glomeruloesclerosis nodular de Kimmelstiel-Wilson.' },
        { show: ['alb'], note: 'La albúmina es lo primero que se escapa',
          say: 'Mucho antes de que suba la creatinina, un glomérulo sometido a presión deja escapar albúmina a la orina. Esa albuminuria es el primer signo que podemos detectar, y por eso es lo que se busca en el tamizaje.' },
        { show: ['erc'], note: 'Sin intervención, avanza a diálisis',
          say: 'Si nadie interviene, el daño progresa hasta la enfermedad renal crónica terminal. Por eso es la primera causa de hemodiálisis.' },
        { show: ['iec'], note: 'El fármaco ataca el mecanismo',
          say: 'Y aquí está la conexión con el tratamiento. Los IECA y los ARA dos dilatan de forma preferente la arteriola eferente, la de salida del glomérulo. Al abrir la salida, baja la presión intraglomerular y se filtra menos proteína. Por eso protegen el riñón aunque el paciente no sea hipertenso. Guarda esta idea.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tamizaje',
      title: '¿Cuándo y con qué se busca?',
      cards: [
        { title: 'Cuándo partir', tag: 'Se pregunta', kind: 'alert', items: [
          { t: 'DM2: desde el diagnóstico', d: 'Y luego cada 12 meses',
            say: 'Primero, cuándo. En la diabetes tipo dos, el tamizaje se hace desde el mismo momento del diagnóstico, y después una vez al año. ¿Por qué tan pronto? Porque la tipo dos pasa años de hiperglicemia silenciosa antes de diagnosticarse, y el riñón puede venir dañado desde el debut.' },
          { t: 'DM1: a los 5 años del debut', d: 'Y luego anual',
            say: 'En la tipo uno, en cambio, sabemos exactamente cuándo empezó la enfermedad, y el daño glomerular rara vez aparece antes de cinco años. Por eso el tamizaje parte a los cinco años del debut, y luego es anual.' },
        ] },
        { title: 'Con qué examen', tag: 'Estándar', kind: 'key', items: [
          { t: 'Razón albúmina/creatinina (RAC)', d: 'Primera orina de la mañana, en mg/g',
            say: 'Segundo, con qué. El examen de elección es la razón albúmina creatinina, la RAC, en una muestra aislada de la primera orina de la mañana.' },
          { t: 'Orina de 24 horas: ya no', d: 'Engorrosa y propensa a errores',
            say: 'La orina de veinticuatro horas ya no se recomienda como tamizaje: es engorrosa y se equivoca mucho por mala recolección. Si en el examen aparece como primer paso, desconfía.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Clasificar y confirmar la albuminuria',
      cards: [
        { title: 'Categorías KDIGO', tag: 'RAC en mg/g', kind: 'criteria', items: [
          { t: 'A1: menor de 30', d: 'Normal a mínima',
            say: 'La RAC se clasifica en tres categorías. A uno, bajo treinta miligramos por gramo: normal.' },
          { t: 'A2: 30 a 299', d: 'La antigua microalbuminuria',
            say: 'A dos, de treinta a doscientos noventa y nueve: moderadamente aumentada, lo que antes llamábamos microalbuminuria. Es el rango que más se pregunta.' },
          { t: 'A3: 300 o más', d: 'La antigua macroalbuminuria',
            say: 'Y A tres, de trescientos o más: severamente aumentada, la antigua macroalbuminuria.' },
        ] },
        { title: 'Regla de confirmación', tag: 'Ojo en el examen', kind: 'alert', items: [
          { t: '2 de 3 muestras positivas', d: 'En un lapso de 3 a 6 meses',
            say: 'Pero un solo valor no basta. La albúmina en orina varía mucho de un día a otro, así que el diagnóstico exige al menos dos de tres muestras positivas en un lapso de tres a seis meses.' },
          { t: 'Descartar falsos positivos', d: 'ITU, fiebre, ejercicio intenso, hematuria, IC aguda',
            say: 'Y antes de contar una muestra como positiva, hay que descartar lo que sube la albúmina de forma transitoria: infección urinaria, fiebre, ejercicio extenuante en las veinticuatro horas previas, hematuria macroscópica o insuficiencia cardíaca aguda.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Nefroprotección',
      title: 'Albuminuria persistente: qué se indica',
      nodes: [
        { id: 'a2', col: 0, row: 1, k: 'start', t: 'RAC 30 o más, confirmada', s: 'Albuminuria persistente' },
        { id: 'pa', col: 1, row: 0, k: 'trap', t: '"Es normotenso, no necesita"', s: 'Error clásico' },
        { id: 'iec', col: 1, row: 2, k: 'good', t: 'IECA o ARA II', s: 'Enalapril o losartán, incluso normotenso' },
        { id: 'dob', col: 2, row: 1, k: 'alert', t: 'Nunca IECA + ARA II', s: 'Hiperkalemia y falla renal aguda' },
        { id: 'sg', col: 2, row: 3, k: 'good', t: '+ iSGLT2', s: 'Si VFG mayor de 20–25 ml/min' },
        { id: 'a3', col: 3, row: 2, k: 'refer', t: 'A3: dosis máxima + derivar', s: 'Riesgo muy alto' },
      ],
      edges: [
        { from: 'a2', to: 'pa', label: 'no' }, { from: 'a2', to: 'iec' },
        { from: 'iec', to: 'dob', label: 'uno solo' }, { from: 'iec', to: 'sg' },
        { from: 'sg', to: 'a3', label: 'si RAC 300 o más' },
      ],
      steps: [
        { show: ['a2'], note: 'El punto de partida es la albuminuria confirmada',
          say: 'Llegamos al concepto que más se pregunta. Tienes un diabético con albuminuria persistente: RAC de treinta o más, confirmada en dos de tres muestras.' },
        { show: ['iec'], note: 'IECA o ARA II, incluso con presión normal',
          say: 'La indicación es un IECA, como enalapril, o un ARA dos, como losartán. Y fíjate en la palabra clave: incluso si el paciente es normotenso. No se indican para bajar la presión, sino por lo que vimos en el mecanismo: dilatan la arteriola eferente y bajan la presión dentro del glomérulo.' },
        { show: ['pa'], note: 'Trampa: no tratar por tener la presión normal',
          say: 'Por eso la trampa clásica del examen es la alternativa que dice mantener el tratamiento porque el paciente tiene la presión normal. Es incorrecta.' },
        { show: ['dob'], note: 'Uno u otro, jamás los dos',
          say: 'Un detalle que también cae: se usa uno u otro, jamás un IECA y un ARA dos juntos. La combinación aumenta la hiperkalemia y la falla renal aguda, sin beneficio. Esto lo vimos también en la clase de diabetes e hipertensión.' },
        { show: ['sg'], note: 'Los iSGLT2 también protegen el riñón',
          say: 'Además, los inhibidores de SGLT dos, como dapagliflozina o empagliflozina, tienen un efecto nefroprotector demostrado, y se agregan a todo diabético con enfermedad renal crónica y velocidad de filtración glomerular sobre veinte a veinticinco. Bajo ese corte ya no se indican.' },
        { show: ['a3'], note: 'A3: más intensidad y derivación',
          say: 'Y en la categoría A tres, el riesgo de progresión es muy alto: se titula el IECA o el ARA dos a dosis máxima, se mantiene el inhibidor de SGLT dos, y se deriva.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos el tamizaje y la conducta en un solo árbol, tal como lo vas a razonar en el control de salud cardiovascular.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Categoría, riesgo y conducta',
      head: ['Categoría (RAC)', 'Riesgo de progresión', 'Conducta', 'Error frecuente'],
      rows: [
        { cells: ['A1 · menor de 30 mg/g', 'Bajo', 'Control anual; sin IECA si es normotenso', 'Indicar IECA sin albuminuria ni HTA'],
          say: 'Repasemos en una tabla. A uno, bajo treinta: riesgo bajo, control anual, y si es normotenso no necesita IECA.' },
        { cells: ['A2 · 30 a 299 mg/g', 'Moderado a alto', 'IECA o ARA II, incluso normotenso + iSGLT2', 'No tratar por tener PA normal'],
          say: 'A dos, de treinta a doscientos noventa y nueve: riesgo moderado a alto. IECA o ARA dos, incluso normotenso, más un inhibidor de SGLT dos. El error es no tratar porque la presión es normal.' },
        { cells: ['A3 · 300 mg/g o más', 'Muy alto', 'IECA o ARA II a dosis máxima + iSGLT2 + derivar', 'Sumar IECA y ARA II'],
          say: 'A tres, de trescientos o más: riesgo muy alto. Dosis máxima, inhibidor de SGLT dos y derivación. Y aquí el error es querer sumar un IECA con un ARA dos.' },
        { cells: ['Una sola RAC alterada', 'Aún no se sabe', 'Repetir: 2 de 3 en 3 a 6 meses', 'Etiquetar con una muestra'],
          say: 'Una sola RAC alterada todavía no es diagnóstico: se repite hasta tener dos de tres en tres a seis meses, descartando infección, fiebre o ejercicio.' },
        { cells: ['DM2 recién diagnosticada', 'Puede venir con daño', 'RAC desde el diagnóstico', 'Esperar 5 años como en DM1'],
          say: 'Y la diabetes tipo dos recién diagnosticada se tamiza de inmediato. Esperar cinco años es la regla de la tipo uno, no de la tipo dos.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 53 años con DM2 hace 1 año, en metformina, HbA1c 6,8%, PA habitual 118/76 mmHg. En su control anual en el CESFAM: RAC 84 mg/g. Se repite a los 3 meses: 92 mg/g, con sedimento sin bacterias ni leucocitos. VFG estimada 85 ml/min/1,73 m².',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Mantener el tratamiento, dado que es normotenso' },
        { letter: 'B', text: 'Iniciar enalapril y titular progresivamente' },
        { letter: 'C', text: 'Iniciar enalapril más losartán para un bloqueo doble' },
        { letter: 'D', text: 'Solicitar proteinuria de 24 horas antes de decidir' },
        { letter: 'E', text: 'Iniciar hidroclorotiazida' },
      ],
      correct: 'B',
      explanation: 'Dos RAC en rango A2 (30–299 mg/g), sin falsos positivos: albuminuria persistente. Está indicado un IECA o ARA II aunque sea normotenso, porque dilata la arteriola eferente y baja la presión intraglomerular. Nunca IECA más ARA II. La orina de 24 horas ya no es el examen de elección.',
      say: {
        stem: 'Vamos a un caso. Hombre de cincuenta y tres años con diabetes tipo dos hace un año, bien controlado con metformina, y con presión de ciento dieciocho sobre setenta y seis. En su control anual, la RAC es ochenta y cuatro. Se repite a los tres meses: noventa y dos, con un sedimento limpio. Función renal normal.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: mantener el tratamiento porque es normotenso, iniciar enalapril, iniciar enalapril más losartán, pedir proteinuria de veinticuatro horas, o iniciar hidroclorotiazida. Piénsalo.',
        answer: 'Es la B. Tiene dos RAC en rango A dos y descartaste la infección: es una albuminuria persistente. La indicación es un IECA, aunque su presión sea normal, porque lo que buscamos es bajar la presión dentro del glomérulo. La A es la trampa de la clase. La C es el bloqueo doble, que está contraindicado. Y la orina de veinticuatro horas ya no es el examen de elección.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 76',
      stem: 'Un paciente de 46 años, con antecedente de diabetes mellitus tipo 2 en tratamiento con metformina, acude a control, refiere estar asintomático. Al examen físico se encuentra presión arterial de 138/83, sin otros hallazgos. Sus exámenes de control muestran hemoglobina glicosilada en 6.9%, indice proteinuria creatininuria de 0.3, creatinina 0.8 mg/mL.',
      question: 'La conducta más adecuada en este caso es:',
      options: [
        { letter: 'A', text: 'Aumentar dosis de metformina' },
        { letter: 'B', text: 'Iniciar hidroclorotiazida' },
        { letter: 'C', text: 'Iniciar enalapril' },
        { letter: 'D', text: 'Suspender metformina e indicar insulina' },
        { letter: 'E', text: 'Mantener tratamiento actual y reforzar medidas como dieta y ejercicio' },
      ],
      correct: 'C',
      explanation: 'Diabético con proteinuria (índice proteinuria/creatininuria de 0,3): está indicado un IECA, independiente de la cifra de presión. La HbA1c de 6,9% no obliga a cambiar la metformina.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil trece. Paciente de cuarenta y seis años con diabetes tipo dos en metformina, asintomático, con presión de ciento treinta y ocho sobre ochenta y tres. Su hemoglobina glicosilada es seis coma nueve, y el índice proteinuria creatininuria es cero coma tres.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: aumentar la metformina, iniciar hidroclorotiazida, iniciar enalapril, cambiar a insulina, o mantener el tratamiento con dieta y ejercicio. Piénsalo.',
        answer: 'Es la C, enalapril. El control glicémico está bien, así que la A y la D no corresponden. Lo que importa es que el riñón está perdiendo proteína, y en un diabético eso basta para indicar un IECA, sin importar si la presión está en rango o no. La E es la trampa: mantener todo porque el paciente se siente bien y su presión parece aceptable.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 37',
      stem: 'Una paciente de 67 años, monorrena, es diagnosticada recientemente de diabetes mellitus tipo 2. Sus exámenes muestran HbA1c de 8,5%, glicemia de ayuno de 132 mg/dL, creatinina de 4,1 mg/dL, nitrógeno ureico de 68 mg/dL, potasio plasmático de 4,2 mEq/L y un clearance de creatinina estimado de 12 mL/min. Presenta una relación albuminuria/creatinuria de 1.100 mg/g.',
      question: '¿Qué fármaco es el más adecuado para iniciar el tratamiento?',
      options: [
        { letter: 'A', text: 'Metformina' },
        { letter: 'B', text: 'Glibenclamida' },
        { letter: 'C', text: 'Vildagliptina' },
        { letter: 'D', text: 'Dapagliflozina' },
        { letter: 'E', text: 'Semaglutida' },
      ],
      correct: 'E',
      explanation: 'Con clearance de 12 mL/min, la metformina está contraindicada (VFG menor de 30) y la glibenclamida también (hipoglicemias en nefrópatas). Los iSGLT2 como la dapagliflozina requieren VFG mayor de 20–25 mL/min para indicarse. La alternativa que el examen dio como correcta es el agonista GLP-1.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Mujer de sesenta y siete años, monorrena, con diabetes tipo dos recién diagnosticada y hemoglobina glicosilada de ocho coma cinco. Pero su clearance de creatinina es de solo doce, y la RAC es de mil cien: categoría A tres.',
        question: '¿Qué fármaco es el más adecuado para iniciar el tratamiento?',
        options: 'Las opciones son: metformina, glibenclamida, vildagliptina, dapagliflozina o semaglutida. Piénsalo.',
        answer: 'La respuesta del examen es la E, semaglutida. Descarta por la función renal: con un clearance de doce, la metformina y la glibenclamida están contraindicadas. La D es el distractor más tentador, porque acabamos de decir que los inhibidores de SGLT dos protegen el riñón. Pero necesitan una filtración sobre veinte a veinticinco para indicarse, y esta paciente está muy por debajo.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Tamizaje', tag: 'Anual', kind: 'key', items: [
          { t: 'DM2 desde el diagnóstico; DM1 a los 5 años', d: 'Luego cada año',
            say: 'Cerremos con las reglas de oro. El tamizaje es anual: en la tipo dos desde el diagnóstico, y en la tipo uno a los cinco años del debut.' },
          { t: 'RAC en la primera orina de la mañana', d: 'No la orina de 24 horas',
            say: 'Se hace con la razón albúmina creatinina en la primera orina de la mañana, no con la orina de veinticuatro horas.' },
        ] },
        { title: 'Diagnóstico', tag: 'Confirmar', kind: 'criteria', items: [
          { t: 'A2: RAC de 30 a 299 mg/g', d: '2 de 3 muestras en 3 a 6 meses',
            say: 'La albuminuria se confirma con dos de tres muestras en tres a seis meses, descartando infección, fiebre o ejercicio.' },
        ] },
        { title: 'Tratamiento', tag: 'Nefroprotección', kind: 'pharma', items: [
          { t: 'IECA o ARA II, incluso normotenso', d: 'Nunca los dos juntos',
            say: 'Y con albuminuria persistente, IECA o ARA dos aunque la presión sea normal, nunca los dos juntos.' },
          { t: '+ iSGLT2 si VFG mayor de 20–25', d: 'A3: dosis máxima y derivar',
            say: 'Se suma un inhibidor de SGLT dos si la filtración está sobre veinte a veinticinco. En la próxima clase seguimos con la otra complicación microvascular que se tamiza cada año: la retinopatía. Si te llevas una sola idea de hoy: en el diabético, la albúmina en la orina se trata con IECA o ARA dos, aunque la presión sea normal. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Nefropatía diabética: del tamizaje a la nefroprotección',
    root: N('start', 'Paciente diabético en control', 'DM2 desde el diagnóstico · DM1 a los 5 años',
      'Paciente diabético en su control anual. Si es tipo dos, se tamiza desde el diagnóstico; si es tipo uno, desde los cinco años del debut.',
      ['', N('q', '¿RAC en primera orina matinal?', 'Razón albúmina/creatinina',
        'Se pide la razón albúmina creatinina en la primera orina de la mañana. ¿Cuánto da?',
        ['Menor de 30', N('ok', 'A1: control anual', 'Sin IECA si es normotenso',
          'Bajo treinta es normal: se repite en un año.')],
        ['30 o más', N('q', '¿Se confirma en 2 de 3?', 'En 3 a 6 meses, sin falsos positivos',
          'Si da treinta o más, no se etiqueta todavía. ¿Se confirma en dos de tres muestras en tres a seis meses, descartando infección, fiebre y ejercicio?',
          ['NO', N('ok', 'Sin albuminuria persistente', 'Seguir con tamizaje anual',
            'Si no se confirma, fue un valor transitorio, y se sigue con el tamizaje anual.')],
          ['SÍ, A2', N('do', 'IECA o ARA II + iSGLT2', 'Incluso normotenso; nunca ambos',
            'Si se confirma en rango A dos, se inicia IECA o ARA dos, aunque sea normotenso, más un inhibidor de SGLT dos si la filtración está sobre veinte a veinticinco. Nunca un IECA con un ARA dos.')],
          ['SÍ, A3', N('refer', 'Dosis máxima + iSGLT2 + derivar', 'RAC 300 mg/g o más',
            'Si está en rango A tres, se titula el bloqueo a dosis máxima, se suma el inhibidor de SGLT dos, y se deriva.')])])]),
  },
};
