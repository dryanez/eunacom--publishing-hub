// Clase 16.10 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_dermatologia.cjs (derma-10).
// Nota: el código de la clase (6.01.2.003) devuelve una pregunta de celulitis con nefritis intersticial
// (que solo cita DRESS de paso en la explicación); se usó --search para confirmar el tema real. Ver
// classes/docs/REVISION_CONTENIDO.md · Dermatología, que ya documenta este problema para otras clases del libro.
// Preguntas reales EUNACOM: node classes/scripts/class_questions.cjs --search "DRESS|eosinofilia y síntomas sistémicos"
// -> EUNACOM Diciembre 2019 · Pregunta 133 (código 1.09.1.013, confianza 0.85)

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'derma-10',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'La farmacodermia con la latencia más traicionera: fiebre, edema facial y una hepatitis que puede ser mortal',
      say: 'Bienvenidos. Seguimos con las reacciones medicamentosas graves, y hoy vemos el Síndrome DRESS, la reacción medicamentosa con eosinofilia y síntomas sistémicos. Si Stevens-Johnson y la necrólisis epidérmica tóxica atacan la piel como órgano, el DRESS ataca por dentro: el hígado, el riñón, el corazón. Tiene una mortalidad de cinco a diez por ciento, y la clave para sospecharlo es un solo dato que casi nadie recuerda a tiempo: cuándo empezó el fármaco. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fármacos y latencia',
      title: 'La latencia más larga de todas las farmacodermias',
      nodes: [
        { id: 'aco', col: 0, row: 0, k: 'cause', t: 'Anticonvulsivantes aromáticos', s: 'Más de la mitad de los casos' },
        { id: 'alo', col: 0, row: 1, k: 'cause', t: 'Alopurinol y sulfonamidas', s: 'Cotrimoxazol, dapsona' },
        { id: 'lat', col: 1, row: 0, k: 'mech', t: 'Latencia de 2 a 8 semanas', s: 'El paciente ya olvidó el fármaco' },
        { id: 'inm', col: 2, row: 0, k: 'mech', t: 'Linfocitos T específicos', s: 'Contra el fármaco y sus metabolitos' },
        { id: 'hhv', col: 2, row: 1, k: 'effect', t: 'Reactivación de Herpesvirus 6', s: 'Perpetúa la inflamación' },
        { id: 'rec', col: 3, row: 1, k: 'risk', t: 'Recaídas semanas después', s: 'Aunque ya se suspendió el fármaco' },
      ],
      edges: [
        { from: 'aco', to: 'lat' }, { from: 'alo', to: 'lat' },
        { from: 'lat', to: 'inm' }, { from: 'inm', to: 'hhv' }, { from: 'hhv', to: 'rec' },
      ],
      steps: [
        { show: ['aco', 'alo'], note: 'Los mismos sospechosos que en SSJ y NET',
          say: 'Los fármacos responsables se parecen a los de Stevens-Johnson: anticonvulsivantes aromáticos como carbamazepina, fenitoína y fenobarbital, responsables de más de la mitad de los casos; y también alopurinol, sulfas como el cotrimoxazol, y dapsona.' },
        { show: ['lat'], note: 'El dato que más se pregunta del DRESS',
          say: 'Pero aquí está la diferencia que más se pregunta en el examen: la latencia. No es de una a tres semanas como en Stevens-Johnson. En el DRESS es de dos a ocho semanas, en promedio tres a seis. El paciente lleva tanto tiempo tomando el fármaco que, si no le preguntas de forma dirigida, se te va a olvidar mencionarlo.' },
        { show: ['inm'], note: 'Hipersensibilidad retardada, no inmediata',
          say: 'El mecanismo es una hipersensibilidad retardada: linfocitos T específicos reconocen el fármaco o sus metabolitos, y desencadenan una respuesta inflamatoria sistémica, no solo cutánea.' },
        { show: ['hhv', 'rec'], note: 'La razón de las recaídas tardías',
          say: 'Y hay un fenómeno único de este cuadro: la inmunodepresión transitoria que provoca reactiva al virus herpes humano tipo seis, que estaba latente. Eso explica por qué el paciente puede recaer semanas después, aunque ya suspendiste el fármaco hace tiempo.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'La tríada clásica: fiebre, edema facial, adenopatías',
      cards: [
        { title: 'Fiebre y erupción con edema facial', tag: 'El hallazgo cardinal', kind: 'key', items: [
          { t: 'Fiebre persistente sobre 38,5 grados', d: 'Presente en más del 90% de los casos',
            say: 'La tríada clásica empieza con fiebre alta y persistente, sobre treinta y ocho y medio, presente en más del noventa por ciento de los pacientes, casi siempre el primer síntoma, con compromiso del estado general y postración.' },
          { t: 'Edema periorbitario y malar prominente', d: 'El hallazgo que más orienta al examinar',
            say: 'Sobre esa fiebre aparece un exantema morbiliforme o maculopapular que empieza en la cara y el tronco superior y confluye en un eritema generalizado. Y el hallazgo que más orienta a la sola inspección es el edema facial periorbitario y malar, presente en más de tres cuartos de los pacientes. A diferencia de Stevens-Johnson, aquí no hay flictenas ni desprendimiento epidérmico difuso, y el signo de Nikolsky es típicamente negativo.' },
        ] },
        { title: 'Adenopatías y criterios RegiSCAR', tag: 'Confirman el diagnóstico', kind: 'criteria', items: [
          { t: 'Ganglios dolorosos en 2 o más cadenas', d: 'Cervicales, axilares, inguinales',
            say: 'El tercer elemento de la tríada son las adenopatías generalizadas: ganglios dolorosos, mayores a un centímetro, en dos o más cadenas.' },
          { t: 'Score RegiSCAR de 4 o más confirma DRESS', d: 'Exantema extenso, fiebre, adenopatías, daño de órgano y eosinofilia',
            say: 'Y todo esto se ordena en los criterios internacionales RegiSCAR, que suman puntos: erupción extensa que cubre más de la mitad de la superficie corporal, fiebre sobre treinta y ocho y medio, adenopatías en al menos dos territorios, compromiso de uno o más órganos internos, y anormalidades hematológicas como eosinofilia o linfocitos atípicos en el frotis. Con cuatro o más puntos el caso es probable, y con seis o más el diagnóstico de DRESS queda definitivo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Compromiso visceral',
      title: 'Lo que decide la gravedad no es la piel: es el órgano interno',
      cards: [
        { title: 'Hígado', tag: 'El órgano blanco principal', kind: 'alert', items: [
          { t: 'Hepatitis tóxica en 75 a 90% de los casos', d: 'Desde transaminasas altas hasta falla fulminante',
            say: 'La morbimortalidad del DRESS depende de los órganos internos, no de la extensión de la piel, y eso lo diferencia por completo de Stevens-Johnson y de NET. Por lejos, el órgano más afectado es el hígado: hepatitis tóxica en el setenta y cinco a noventa por ciento de los casos, que va desde una elevación asintomática de las transaminasas y colestasis, hasta una necrosis hepática masiva e insuficiencia hepática fulminante, que es la principal causa de muerte del síndrome.' },
        ] },
        { title: 'Riñón, corazón y pulmón', tag: 'Menos frecuentes, igual de graves', kind: 'alert', items: [
          { t: 'Nefritis tubulointersticial, 15 a 30%', d: 'Especialmente frecuente tras alopurinol',
            say: 'El riñón se compromete en un quince a treinta por ciento de los casos, con nefritis tubulointersticial aguda, en especial tras el alopurinol.' },
          { t: 'Miocarditis por hipersensibilidad', d: 'Puede debutar semanas después, con shock',
            say: 'La miocarditis por hipersensibilidad es la más traicionera: puede aparecer semanas después, con disnea, arritmias ventriculares y shock cardiogénico, cuando ya parecía que el paciente estaba mejorando. Por eso, si reaparece disnea durante el seguimiento, hay que pensar en el corazón, no solo en una recaída de la piel.' },
          { t: 'Neumonitis intersticial, 10 a 15%', d: 'Infiltrados bilaterales y disnea progresiva',
            say: 'Y el pulmón se afecta en un diez a quince por ciento, con neumonitis intersticial e infiltrados bilaterales. Fíjate en el patrón: el DRESS no respeta ningún órgano, y por eso el estudio inicial siempre incluye función hepática, renal, hemograma y una evaluación cardiopulmonar si hay síntomas.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Corticoides sistémicos, con un descenso extremadamente lento',
      cards: [
        { title: 'Retiro del fármaco', tag: 'Y nunca reintroducirlo', kind: 'key', items: [
          { t: 'Suspensión inmediata y registro en la ficha', d: 'Riesgo de reactividad cruzada entre anticonvulsivantes',
            say: 'Como en toda farmacodermia grave, lo primero es suspender el fármaco culpable de inmediato, y registrar la alergia en la ficha. Si el DRESS fue por carbamazepina, ese paciente tiene prohibidos también la fenitoína y el fenobarbital, por reactividad cruzada.' },
        ] },
        { title: 'Corticoides sistémicos', tag: 'Prednisona de 0,5 a 1 mg/kg/día', kind: 'pharma', items: [
          { t: 'Con compromiso de órganos o eosinofilia severa', d: 'O metilprednisolona endovenosa si hay hepatitis grave',
            say: 'Si hay compromiso de órganos internos o eosinofilia severa, el tratamiento de elección es prednisona oral, de cero coma cinco a un miligramo por kilo al día, o pulsos de metilprednisolona endovenosa si la hepatitis es grave.' },
        ] },
        { title: 'La regla de oro del descenso', tag: 'Extremadamente lento', kind: 'alert', items: [
          { t: 'Bajar la dosis a lo largo de 2 a 3 meses', d: 'Nunca antes de 4 semanas: riesgo de recaída fulminante',
            say: 'Y aquí está la trampa más peligrosa del tema: la reducción de los corticoides tiene que ser extremadamente lenta, a lo largo de dos a tres meses. Si se suspenden antes de las cuatro semanas, el paciente hace una recaída inflamatoria grave, con empeoramiento fulminante de la hepatitis. Bajar rápido, aquí, puede matarlo.' },
          { t: 'Seguimiento tiroideo a los 2 y 6 meses', d: 'Tamizaje de tiroiditis autoinmune tardía',
            say: 'Y un detalle que se te puede escapar: después de resuelto el cuadro, se controla la función tiroidea a los dos y a los seis meses, porque la reactivación viral puede dejar como secuela una tiroiditis autoinmune que aparece meses después, cuando ya nadie está pensando en el DRESS.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico diferencial',
      title: 'DRESS versus Stevens-Johnson y NET: la misma familia, cuadros distintos',
      cards: [
        { title: 'Lo que se parece', tag: 'Farmacodermia grave', kind: 'normal', items: [
          { t: 'Fármacos de alto riesgo compartidos', d: 'Anticonvulsivantes, alopurinol, sulfas',
            say: 'Antes de la tabla, ordenemos la diferencia con lo que vimos la clase pasada. Los tres cuadros comparten los mismos fármacos de alto riesgo: anticonvulsivantes aromáticos, alopurinol y sulfas como el cotrimoxazol. Por eso el examen los pone a competir en el mismo enunciado, y la única forma de no confundirlos es fijarse en la latencia y en la piel.' },
        ] },
        { title: 'Lo que los distingue', tag: 'Latencia, piel y laboratorio', kind: 'alert', items: [
          { t: 'Latencia: 2 a 8 semanas versus 1 a 3', d: 'El DRESS siempre es más tardío',
            say: 'Lo que los distingue empieza por la latencia: dos a ocho semanas en el DRESS, contra una a tres semanas en Stevens-Johnson y NET.' },
          { t: 'Piel: edema facial versus Nikolsky positivo', d: 'El DRESS no despega la epidermis',
            say: 'Y en la piel: el DRESS da edema facial con Nikolsky negativo, mientras que Stevens-Johnson y NET dan flictenas con Nikolsky positivo y desprendimiento franco. Si ves eosinofilia marcada y linfocitos atípicos en el hemograma, piensa en DRESS; si en cambio ves neutropenia o leucopenia, esa es una señal de mal pronóstico dentro de NET, no de DRESS.' },
          { t: 'Órgano blanco: hígado versus la piel misma', d: 'El pronóstico lo decide algo distinto en cada uno',
            say: 'Y por último, el órgano que decide el pronóstico: en el DRESS es el hígado; en Stevens-Johnson y NET, es la extensión de la piel desprendida y la sepsis que viene de esa pérdida de barrera.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol de decisión: desde la sospecha por latencia hasta el plan de corticoides.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'DRESS versus Stevens-Johnson y NET',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Fiebre y rash a las 4 semanas de un fármaco nuevo', 'Sospechar DRESS y pedir hemograma con perfil hepático', 'Descartar el fármaco por ser "muy antiguo" para dar alergia'],
          say: 'Repasemos las trampas. Fiebre y erupción a las cuatro semanas de iniciar un fármaco: hay que sospechar DRESS y pedir hemograma con perfil hepático. El error es descartar el fármaco por parecer demasiado antiguo para dar alergia; en el DRESS, esa es justo la latencia esperada.' },
        { cells: ['Edema facial con rash confluente, sin ampollas', 'Pensar en DRESS, Nikolsky negativo', 'Confundirlo con Stevens-Johnson o NET'],
          say: 'Edema facial con un rash confluente, sin ampollas ni desprendimiento: piensa en DRESS, con Nikolsky negativo. El error es confundirlo con Stevens-Johnson o NET, que sí tienen Nikolsky positivo y desprendimiento.' },
        { cells: ['Transaminasas elevadas y eosinofilia marcada', 'Hospitalizar y evaluar función hepática seriada', 'Atribuirlo solo a una hepatitis viral sin buscar el fármaco'],
          say: 'Transaminasas elevadas junto con eosinofilia marcada: hospitalizar y seguir la función hepática de forma seriada. El error es atribuirlo solo a una hepatitis viral, sin preguntar por fármacos del último mes y medio.' },
        { cells: ['Buena respuesta a corticoides a las 2 semanas', 'Continuar el descenso lento, hasta 2 a 3 meses', 'Suspender la prednisona porque los exámenes ya se normalizaron'],
          say: 'Si a las dos semanas los exámenes ya se normalizaron, la conducta sigue siendo continuar el descenso lento, hasta completar dos a tres meses. El error es suspender la prednisona de golpe solo porque los exámenes mejoraron.' },
        { cells: ['Disnea y arritmia semanas después de mejorar la piel', 'Pensar en miocarditis por hipersensibilidad', 'Atribuirlo a ansiedad o a una recaída solo cutánea'],
          say: 'Y la última: si aparece disnea o arritmia semanas después de que la piel ya mejoró, hay que pensar en miocarditis por hipersensibilidad y estudiar con troponinas. El error es atribuirlo a ansiedad, o asumir que es solo una recaída de la piel.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 60 años, con insuficiencia renal crónica, inició alopurinol hace 5 semanas por una crisis de gota. Consulta por fiebre de 39 °C de 4 días, edema facial marcado y un exantema morbiliforme confluente en tronco y extremidades, sin ampollas ni desprendimiento. Tiene adenopatías cervicales y axilares sensibles. El hemograma muestra 2.800 eosinófilos por microlitro y linfocitos atípicos; GOT y GPT están 8 veces sobre lo normal.',
      question: '¿Cuál es el diagnóstico y la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Urticaria aguda por alopurinol; antihistamínico H1 de segunda generación' },
        { letter: 'B', text: 'Síndrome DRESS por alopurinol; suspender el fármaco e iniciar prednisona oral' },
        { letter: 'C', text: 'Síndrome de Stevens-Johnson; traslado a Centro de Quemados' },
        { letter: 'D', text: 'Hepatitis viral aguda; solicitar serología y observar' },
        { letter: 'E', text: 'Eritema multiforme major; aciclovir oral' },
      ],
      correct: 'B',
      explanation: 'Latencia de 5 semanas, fiebre, edema facial, adenopatías, eosinofilia marcada con linfocitos atípicos y hepatitis tóxica: Síndrome DRESS por alopurinol. La conducta es suspender el fármaco e iniciar prednisona oral, con descenso lento. No hay ampollas ni Nikolsky positivo para pensar en SSJ.',
      say: {
        stem: 'Vamos con un caso. Hombre de sesenta años, con insuficiencia renal crónica, que inició alopurinol hace cinco semanas por una crisis de gota. Consulta por cuatro días de fiebre, edema facial marcado y un exantema confluente en tronco y extremidades, sin ampollas ni desprendimiento. Tiene adenopatías cervicales y axilares sensibles. El hemograma muestra dos mil ochocientos eosinófilos y linfocitos atípicos, con las transaminasas ocho veces sobre lo normal.',
        question: '¿Cuál es el diagnóstico y la conducta más adecuada?',
        options: 'Las opciones: urticaria aguda con antihistamínico, Síndrome DRESS con suspensión del fármaco y prednisona oral, Stevens-Johnson con traslado a quemados, hepatitis viral con serología y observación, o eritema multiforme major con aciclovir. Piénsalo.',
        answer: 'Es la B. Cinco semanas de latencia con alopurinol, fiebre, edema facial, adenopatías, eosinofilia marcada con linfocitos atípicos y hepatitis: es el cuadro completo del DRESS, con un score RegiSCAR claramente alto. La conducta es suspender el alopurinol de inmediato y iniciar prednisona oral con un descenso muy lento. No hay ampollas ni Nikolsky positivo para pensar en Stevens-Johnson, la urticaria no explica la fiebre ni la hepatitis, y la eosinofilia tan alta no encaja con una hepatitis viral aislada.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 133',
      stem: 'Un paciente de 27 años presenta una lesión en la pierna derecha, consistente en una placa eritematosa solevantada. Se inicia cloxacilina endovenosa. Al quinto día, la lesión cutánea ha mejorado, sin embargo, evoluciona con malestar general, fiebre y aparición de un exantema macular eritematoso generalizado. Se solicitan exámenes que muestran sedimento de orina con hematuria microscópica, hemograma con leucocitosis y 20% de eosinófilos, BUN 30 mg/dL y creatinina 2,0 mg/dL.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Glomerulonefritis aguda postestreptocócica' },
        { letter: 'B', text: 'Púrpura trombocitopénico trombótico' },
        { letter: 'C', text: 'Vasculitis sistémica primaria' },
        { letter: 'D', text: 'Insuficiencia renal aguda prerrenal' },
        { letter: 'E', text: 'Nefritis intersticial' },
      ],
      correct: 'E',
      explanation: 'Fiebre y exantema generalizado a los 5 días de iniciar cloxacilina, con eosinofilia del 20% y deterioro de la función renal: nefritis tubulointersticial aguda secundaria a un Síndrome DRESS por betalactámico. La glomerulonefritis postestreptocócica y la vasculitis no explican la eosinofilia tan marcada asociada al fármaco.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil diecinueve. Un paciente de veintisiete años tiene una placa eritematosa en la pierna e inicia cloxacilina endovenosa. Al quinto día, la lesión ha mejorado, pero aparece malestar general, fiebre y un exantema generalizado. Los exámenes muestran hematuria microscópica, veinte por ciento de eosinófilos en el hemograma, y una función renal alterada.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: glomerulonefritis postestreptocócica, púrpura trombocitopénico trombótico, vasculitis sistémica primaria, insuficiencia renal prerrenal, o nefritis intersticial. Piénsalo.',
        answer: 'Es la E, nefritis intersticial. Esta pregunta muestra justamente lo que vimos hoy: el riñón como órgano blanco del DRESS. La fiebre y el exantema generalizado a los cinco días de un betalactámico, con una eosinofilia del veinte por ciento y deterioro renal, son la nefritis tubulointersticial secundaria a un Síndrome DRESS. La glomerulonefritis postestreptocócica no explicaría esta eosinofilia tan alta ligada al fármaco.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'La pista que casi nadie pregunta', tag: 'Latencia de 2 a 8 semanas', kind: 'key', items: [
          { t: 'Pregunta dirigida por fármacos del último mes y medio', d: 'El paciente rara vez lo asocia solo',
            say: 'Cerremos con las reglas de oro. La latencia de dos a ocho semanas es la pista que casi nadie pregunta a tiempo: siempre indaga de forma dirigida los fármacos del último mes y medio.' },
        ] },
        { title: 'El hígado manda el pronóstico', tag: 'No la piel', kind: 'alert', items: [
          { t: 'Hepatitis tóxica en 75 a 90%', d: 'Principal causa de muerte por el síndrome',
            say: 'La gravedad la define el hígado, no la piel: la hepatitis tóxica aparece en la gran mayoría de los casos y es la principal causa de muerte.' },
        ] },
        { title: 'El descenso lento salva vidas', tag: 'Corticoides por 2 a 3 meses', kind: 'pharma', items: [
          { t: 'Bajar rápido provoca recaída fulminante', d: 'Nunca antes de las 4 semanas',
            say: 'Y el descenso de los corticoides tiene que ser lento, por dos a tres meses; bajarlo rápido provoca una recaída que puede ser fulminante. Si te llevas una sola idea de hoy: pregunta por la latencia, y no confundas la mejoría de la piel con el momento de suspender el corticoide. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'DRESS: de la sospecha por latencia al descenso de corticoides',
    root: N(
      'start', 'Paciente con fiebre, rash y edema facial, sin desprendimiento', 'Primero indaga fármacos de las últimas 8 semanas',
      'La sospecha nace de una pregunta dirigida: qué fármacos nuevos tomó el paciente en el último mes y medio, no solo en los últimos días.',
      ['', N(
        'q', '¿Hay latencia de 2 a 8 semanas con un fármaco de riesgo?', 'Anticonvulsivante, alopurinol o sulfa',
        'Confirmar la latencia y el fármaco culpable es el primer paso para sospechar DRESS.',
        ['No encaja', N(
          'refer', 'Reevaluar el diagnóstico', 'Pensar en SSJ, NET o causa infecciosa',
          'Sin esta latencia característica, hay que reconsiderar Stevens-Johnson, NET, u otra causa infecciosa del exantema.',
        )],
        ['Sí, encaja', N(
          'q', '¿Hay eosinofilia, linfocitos atípicos o daño de órgano?', 'Score RegiSCAR mayor o igual a 4',
          'Confirmada la latencia, se buscan los criterios RegiSCAR: exantema extenso, fiebre, adenopatías, eosinofilia y compromiso visceral.',
          ['Score menor a 4', N(
            'do', 'Caso posible, vigilar de cerca', 'Repetir hemograma y perfil hepático pronto',
            'Con un score bajo, se suspende igual el fármaco sospechoso y se repiten los exámenes en las siguientes horas, porque el cuadro puede completarse.',
          )],
          ['Score de 4 o más', N(
            'refer', 'Síndrome DRESS confirmado', 'Suspender el fármaco e iniciar prednisona oral',
            'Con un score alto de RegiSCAR, el DRESS está confirmado: suspensión inmediata del fármaco culpable e inicio de prednisona oral, de cero coma cinco a un miligramo por kilo al día.',
            ['', N(
              'alert', 'Descenso extremadamente lento', '2 a 3 meses, nunca antes de 4 semanas',
              'El desescalamiento de la prednisona debe hacerse a lo largo de dos a tres meses; suspenderla antes de las cuatro semanas provoca una recaída inflamatoria grave.',
            )],
          )],
        )],
      )],
    ),
  },
};
