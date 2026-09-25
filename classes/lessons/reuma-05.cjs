// Clase 1.5 — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_reumatologia.cjs (reuma-05).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'reuma-05',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Clasificación de AIJ, criterios de Yamaguchi en Still del adulto y el riesgo de uveítis oculta',
      say: 'Bienvenidos. Hoy revisamos la artritis idiopática juvenil y la enfermedad de Still del adulto, dos patologías autoinflamatorias de gran rentabilidad diagnóstica en el EUNACOM. En pediatría la clave es reconocer la forma oligoarticular y recordar el examen con lámpara de hendidura para prevenir la ceguera por uveítis silente. Y en el adulto joven, la tríada de fiebre en aguja, rash evanescente e hiperferritinemia extrema define la enfermedad de Still. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Definición y marco temporal',
      title: '¿Cuándo hablamos de Artritis Idiopática Juvenil?',
      nodes: [
        { id: 'art', col: 0, row: 1, k: 'start', t: 'Artritis persistente', s: 'Dolor y aumento de volumen' },
        { id: 'eda', col: 1, row: 0, k: 'mech', t: 'Edad menor a 16 años', s: 'Al inicio de los síntomas' },
        { id: 'tie', col: 1, row: 2, k: 'mech', t: 'Duración mayor a 6 semanas', s: 'Descarta artritis postinfecciosa' },
        { id: 'exc', col: 2, row: 1, k: 'trap', t: 'Exclusión de otras causas', s: 'Sin infección ni neoplasia' },
        { id: 'ges', col: 3, row: 1, k: 'good', t: 'Garantía Explícita en Salud', s: 'Patología GES en Chile' },
      ],
      edges: [
        { from: 'art', to: 'eda' },
        { from: 'art', to: 'tie' },
        { from: 'eda', to: 'exc' },
        { from: 'tie', to: 'exc' },
        { from: 'exc', to: 'ges' },
      ],
      steps: [
        { show: ['art', 'eda', 'tie'], note: 'Criterios temporales y etarios',
          say: 'La artritis idiopática juvenil se define por la presencia de artritis en una o más articulaciones que comienza antes de los dieciséis años de edad y persiste por más de seis semanas consecutivas.' },
        { show: ['exc'], note: 'Diagnóstico de exclusión',
          say: 'El marco de seis semanas es crucial porque descarta las sinovitis reactivas transitorias y las artritis virales autolimitadas. Además, es un diagnóstico de exclusión: se deben descartar leucemias, osteomielitis y artritis infecciosas.' },
        { show: ['ges'], note: 'Prioridad de salud pública',
          say: 'En Chile la artritis idiopática juvenil es una patología garantizada por el GES, lo que asegura confirmación diagnóstica rápida y acceso a fármacos modificadores y terapias biológicas.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clasificación de AIJ',
      title: 'Las tres formas clínicas principales',
      cards: [
        { title: 'Forma Oligoarticular', tag: 'La más frecuente (50%)', kind: 'alert', items: [
          { t: 'Hasta 4 articulaciones en 6 meses', d: 'Típica en niñas menores de 6 años',
            say: 'La forma oligoarticular es la más común de todas, representando la mitad de los casos. Afecta un máximo de cuatro articulaciones en los primeros seis meses de enfermedad, típicamente rodillas o tobillos en niñas pequeñas menores de seis años.' },
          { t: 'ANA positivos y uveítis silente', d: 'Riesgo de ceguera sin ojo rojo',
            say: 'Hasta el ochenta por ciento de estas niñas presenta anticuerpos antinucleares positivos. Su mayor peligro evolutivo es la uveítis anterior crónica asintomática: no duele, no enrojece el ojo y no genera fotofobia precoz, pero avanza silenciosamente provocando sinequias y ceguera permanente si no se pesquisa en forma activa.' },
        ] },
        { title: 'Forma Poliarticular', tag: 'Cinco o más articulaciones', kind: 'criteria', items: [
          { t: 'Poliartritis simétrica en manos', d: 'Con o sin Factor Reumatoide',
            say: 'La forma poliarticular afecta cinco o más articulaciones desde el inicio, con patrón simétrico en manos y muñecas, similar a la artritis reumatoide del adulto.' },
          { t: 'Riesgo de daño estructural', d: 'Requiere metotrexato precoz',
            say: 'Puede ser seronegativa o seropositiva para factor reumatoide, teniendo esta última mayor riesgo de erosiones óseas.' },
        ] },
        { title: 'Forma Sistémica (Still)', tag: 'Enfermedad de Still infantil', kind: 'key', items: [
          { t: 'Fiebre cotidiana y rash salmón', d: 'Maculopápulas evanescentes con la fiebre',
            say: 'La forma sistémica o enfermedad de Still infantil se presenta con fiebre en agujas cotidiana, rash evanescente de color salmón que brota con la fiebre y desaparece al bajar la temperatura.' },
          { t: 'Hepatoesplenomegalia y ferritina', d: 'Inflamación sistémica severa',
            say: 'Se acompaña de adenopatías, hepatoesplenomegalia, serositis e hiperferritinemia extrema.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tamizaje oftalmológico',
      title: 'La regla de oro: lámpara de hendidura en AIJ oligoarticular',
      nodes: [
        { id: 'oli', col: 0, row: 1, k: 'start', t: 'AIJ Oligoarticular', s: 'Niña < 6 años con mono/oligoartritis' },
        { id: 'ana', col: 1, row: 1, k: 'mech', t: 'ANA (+) en sangre', s: 'Factor de riesgo principal' },
        { id: 'uve', col: 2, row: 0, k: 'alert', t: 'Uveítis anterior crónica', s: 'Asintomática · ojo blanco y sin dolor' },
        { id: 'lam', col: 3, row: 0, k: 'good', t: 'Lámpara de hendidura periódica', s: 'Cada 3 meses por oftalmología' },
        { id: 'ceg', col: 3, row: 2, k: 'trap', t: 'Sinequias y ceguera irreversible', s: 'Si no se realiza tamizaje reglado' },
      ],
      edges: [
        { from: 'oli', to: 'ana' },
        { from: 'ana', to: 'uve' },
        { from: 'uve', to: 'lam' },
        { from: 'uve', to: 'ceg', label: 'sin control' },
      ],
      steps: [
        { show: ['oli', 'ana'], note: 'Perfil de alto riesgo',
          say: 'El perfil clásico de mayor riesgo es una niña menor de seis años con artritis de rodilla o tobillo y anticuerpos antinucleares positivos.' },
        { show: ['uve'], note: 'El peligro de la falta de síntomas',
          say: 'En esta forma, la uveítis anterior es insidiosa y completamente asintomática. El ojo no se pone rojo, no duele y el niño no se queja.' },
        { show: ['lam'], note: 'Tamizaje obligatorio',
          say: 'Por eso la regla de oro en el EUNACOM es enviar a todo paciente con AIJ oligoarticular a evaluación oftalmológica periódica con lámpara de hendidura cada tres meses.' },
        { show: ['ceg'], note: 'Prevención del daño',
          say: 'Si no se pesquisa a tiempo, la inflamación genera sinequias posteriores, catarata, glaucoma y ceguera permanente.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Still del adulto',
      title: 'Criterios diagnósticos de Yamaguchi',
      cards: [
        { title: 'Criterios Mayores', tag: 'Se requieren al menos dos', kind: 'alert', items: [
          { t: 'Fiebre intermitente mayor a 39 °C', d: 'De una semana o más de evolución',
            say: 'Primer criterio mayor de Yamaguchi: fiebre alta intermitente de treinta y nueve grados o más, de patrón típicamente vespertino o nocturno en agujas, que dura al menos una semana.' },
          { t: 'Artralgias o artritis persistente', d: 'De dos semanas o más de duración',
            say: 'Segundo criterio: artralgias o artritis inflamatoria de dos semanas o más. Tercero: rash macular evanescente color salmón que brota con la fiebre. Y cuarto: leucocitosis reactiva marcada sobre diez mil con más de ochenta por ciento de granulocitos neutrófilos.' },
        ] },
        { title: 'Criterios Menores', tag: 'Apoyan el diagnóstico', kind: 'criteria', items: [
          { t: 'Odinofagia o faringitis no séptica', d: 'Presente al inicio de las crisis',
            say: 'Entre los criterios menores destacan el dolor de garganta o faringitis no exudativa al inicio del cuadro, la presencia de adenopatías o esplenomegalia palpable, y la elevación enzimática de transaminasas hepáticas o deshidrogenasa láctica.' },
          { t: 'ANA y Factor Reumatoide negativos', d: 'Marcador negativo imprescindible',
            say: 'Y un criterio menor fundamental para el examen: los anticuerpos antinucleares y el factor reumatoide son estrictamente negativos.' },
        ] },
        { title: 'Marcador biológico', tag: 'Ferritina estratosférica', kind: 'key', items: [
          { t: 'Ferritina sérica mayor a 1.000 a 5.000', d: 'Con ferritina glicosilada baja',
            say: 'El marcador biológico cardinal que sella la sospecha clínica es la hiperferritinemia extrema, con valores plasmáticos que suelen superar los mil a cinco mil nanogramos por mililitro, acompañada de una fracción de ferritina glicosilada característicamente baja, inferior al veinte por ciento.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Urgencia vital',
      title: 'Complicación temida: Síndrome de Activación Macrofágica',
      nodes: [
        { id: 'sti', col: 0, row: 1, k: 'start', t: 'Still del adulto o AIJ sistémica', s: 'Inflamación sistémica desbordada' },
        { id: 'sam', col: 1, row: 1, k: 'alert', t: 'Síndrome de Activación Macrofágica', s: 'Tormenta hemofagocítica T y macrófagos' },
        { id: 'cit', col: 2, row: 0, k: 'risk', t: 'Citopenias progresivas', s: 'Pancitopenia y consumo plaquetario' },
        { id: 'vhs', col: 2, row: 2, k: 'trap', t: 'Caída paradójica de la VHS', s: 'Consumo masivo de fibrinógeno' },
        { id: 'ter', col: 3, row: 1, k: 'good', t: 'Pulsos de metilprednisolona + ciclosporina', s: 'Terapia inmunosupresora intensiva' },
      ],
      edges: [
        { from: 'sti', to: 'sam' },
        { from: 'sam', to: 'cit' },
        { from: 'sam', to: 'vhs' },
        { from: 'cit', to: 'ter' },
        { from: 'vhs', to: 'ter' },
      ],
      steps: [
        { show: ['sti', 'sam'], note: 'Activación incontrolada',
          say: 'La complicación más grave de la enfermedad de Still es el síndrome de activación macrofágica, una variante de la linfohistiocitosis hemofagocítica con mortalidad muy elevada.' },
        { show: ['cit'], note: 'Falla medular por hemofagocitosis',
          say: 'Los macrófagos activados fagocitan células sanguíneas en la médula ósea, provocando citopenias progresivas con anemia, leucopenia y trombocitopenia.' },
        { show: ['vhs'], note: 'La gran trampa de laboratorio',
          say: 'Ojo con este hallazgo clásico: el fibrinógeno se consume intensamente, lo que hace caer de forma paradójica la velocidad de sedimentación globular mientras el paciente se agrava.' },
        { show: ['ter'], note: 'Manejo de rescate en intensivo',
          say: 'Ante sospecha de síndrome de activación macrofágica se inician de inmediato pulsos endovenosos de metilprednisolona junto con ciclosporina o biológicos dirigidos contra interleuquina uno.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Veamos el algoritmo diagnóstico y terapéutico completo para AIJ y Still.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Criterios diagnósticos de Yamaguchi para Enfermedad de Still',
      head: ['Categoría', 'Criterio específico', 'Detalle semiológico', 'Importancia EUNACOM'],
      rows: [
        { cells: ['Criterio Mayor', 'Fiebre ≥ 39 °C intermitente', 'Patrón cotidiano en agujas ≥ 1 semana', 'Diferencia de fiebres sépticas continuas'],
          say: 'Repasemos la tabla de Yamaguchi. Fiebre alta de treinta y nueve grados o más en agujas por al menos una semana es el primer criterio mayor.' },
        { cells: ['Criterio Mayor', 'Artralgias o artritis ≥ 2 semanas', 'Oligo o poliartritis en muñecas y tobillos', 'Componente articular obligado de la enfermedad'],
          say: 'Artralgias o artritis persistente de al menos dos semanas de evolución es el segundo criterio mayor.' },
        { cells: ['Criterio Mayor', 'Rash macular asalmonado', 'Evanescente, no pruriginoso, con la fiebre', 'Aparece durante el alza térmica y desaparece'],
          say: 'Rash macular color salmón que aparece solo durante los picos febriles y desaparece cuando cede la temperatura.' },
        { cells: ['Criterio Mayor', 'Leucocitosis ≥ 10.000 con PMN ≥ 80%', 'Neutrofilia extrema reactiva', 'Simula infección bacteriana grave'],
          say: 'Leucocitosis sobre diez mil con más de ochenta por ciento de neutrófilos, simulando una sepsis bacteriana.' },
        { cells: ['Criterio Menor', 'ANA (-) y Factor Reumatoide (-)', 'Seronegatividad autoinmune clásica', 'Si los ANA o FR son positivos, descarta Still'],
          say: 'Y entre los criterios menores: anticuerpos antinucleares y factor reumatoide estrictamente negativos, con ferritina sobre mil.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico tipo EUNACOM',
      stem: 'Niña de 3 años es traída por su madre por presentar claudicación y aumento de volumen en la rodilla derecha de 8 semanas de evolución, sin antecedente traumático ni fiebre. Al examen físico destaca derrame articular moderado en la rodilla derecha sin calor ni eritema, con flexión conservada. No tiene lesiones en piel. Sus exámenes muestran hemograma y PCR normales, con anticuerpos antinucleares (ANA) positivos a título 1:320.',
      question: 'Además de iniciar antiinflamatorios no esteroidales, ¿cuál es la conducta más adecuada e indispensable?',
      options: [
        { letter: 'A', text: 'Iniciar antibióticos endovenosos para artritis séptica' },
        { letter: 'B', text: 'Derivar a oftalmología para examen periódico con lámpara de hendidura' },
        { letter: 'C', text: 'Iniciar pulsos de metilprednisolona por sospecha de Still' },
        { letter: 'D', text: 'Solicitar radiografía de tórax y factor reumatoide' },
        { letter: 'E', text: 'Indicar reposo en cama estricto sin controles adicionales' },
      ],
      correct: 'B',
      explanation: 'Paciente con AIJ oligoarticular (artritis de una articulación por > 6 semanas en menor de 16 años) y ANA positivos. Este subgrupo presenta un riesgo muy alto de desarrollar uveítis anterior crónica asintomática, que puede conducir a ceguera irreversible si no se pesquisa tempranamente. El tamizaje periódico con lámpara de hendidura por oftalmología es mandatorio.',
      say: {
        stem: 'Vamos al caso clínico. Niña de tres años con monoartritis de rodilla derecha de ocho semanas de evolución, afebril, sin trauma, con anticuerpos antinucleares positivos en título uno a trescientos veinte.',
        question: 'Además de iniciar antiinflamatorios, ¿cuál es la conducta más adecuada e indispensable?',
        options: 'Las opciones: antibióticos endovenosos, derivar a oftalmología para examen con lámpara de hendidura, pulsos de corticoides por Still, radiografía de tórax con factor reumatoide, o reposo estricto. Piénsalo.',
        answer: 'La respuesta correcta es la B. Es una AIJ oligoarticular clásica: niña menor de seis años con monoartritis de más de seis semanas y anticuerpos antinucleares positivos. El riesgo número uno es la uveítis anterior crónica, que es completamente silente y asintomática. Por eso el examen periódico con lámpara de hendidura es la conducta mandatoria que salva la visión de la paciente.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Una paciente de 17 años presenta fiebre intermitente de 3 semanas de evolución, acompañada en algunas oportunidades de un rash eritematoso macular, que compromete el tronco y la zona proximal de las extremidades que desaparece al ceder la fiebre. No presenta otros síntomas. Al examen físico se constata artritis del tobillo derecho y de la tercera y cuarta articulaciones metacarpofalángicas izquierdas. Destaca elevación importante de la ferritina plasmática.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Lupus infantil' },
        { letter: 'B', text: 'Púrpura de Henoch-Schönlein' },
        { letter: 'C', text: 'Enfermedad de Kawasaki' },
        { letter: 'D', text: 'Artritis juvenil idiopática (Enfermedad de Still)' },
        { letter: 'E', text: 'Poliangeítis microscópica' },
      ],
      correct: 'D',
      explanation: 'La asociación de fiebre intermitente prolongada en agujas, exantema macular evanescente que aparece con los picos febriles y desaparece al ceder la temperatura, artritis periférica y marcada elevación de ferritina es patognomónica de la AIJ sistémica o Enfermedad de Still.',
      say: {
        stem: 'Pregunta representativa del banco EUNACOM. Paciente de diecisiete años con fiebre intermitente de tres semanas, rash macular en tronco que desaparece al ceder la fiebre, artritis en tobillo y metacarpofalángicas, con ferritina plasmática marcadamente elevada.',
        question: 'El diagnóstico más probable es:',
        options: 'Las alternativas: lupus infantil, púrpura de Henoch-Schönlein, enfermedad de Kawasaki, artritis idiopática juvenil o enfermedad de Still, o poliangeítis microscópica. Piénsalo.',
        answer: 'Es la D. Fiebre en agujas prolongada, rash evanescente color salmón que coincide con la temperatura, artritis periférica y ferritina estratosférica configuran el cuadro clásico de la enfermedad de Still. El lupus tendría anticuerpos antinucleares positivos y manifestaciones mucocutáneas fijas, y Kawasaki se presenta en lactantes con compromiso coronario.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un niño de 5 años presenta un cuadro de 2 meses de evolución de artritis de rodillas, muñecas y algunas articulaciones metacarpofalángicas e interfalángicas proximales de las manos, asociado a fiebre ocasional. En sus exámenes presenta función renal normal, anemia discreta, leucocitos normales y plaquetas discretamente elevadas. En el perfil de hierro destaca elevación importante de la ferritina plasmática.',
      question: 'El tratamiento inicial de la patología descrita es:',
      options: [
        { letter: 'A', text: 'Corticoides orales' },
        { letter: 'B', text: 'Corticoides más ciclosporina' },
        { letter: 'C', text: 'Metotrexato oral en dosis única semanal' },
        { letter: 'D', text: 'Inmunoglobulina G en altas dosis endovenosa' },
        { letter: 'E', text: 'Antiinflamatorios no esteroidales orales' },
      ],
      correct: 'E',
      explanation: 'El manejo de la artritis idiopática juvenil sigue un enfoque escalonado. En ausencia de factores de mal pronóstico inmediato o complicaciones sistémicas severas como el SAM, la primera línea de tratamiento consiste en AINEs a dosis plenas por varias semanas para controlar dolor e inflamación. Si no responde, se escala a metotrexato.',
      say: {
        stem: 'Otra pregunta representativa del banco. Niño de cinco años con dos meses de poliartritis en rodillas, muñecas y manos, fiebre ocasional, trombocitosis reactiva y ferritina elevada.',
        question: 'El tratamiento inicial de la patología descrita es:',
        options: 'Las opciones: corticoides orales, corticoides con ciclosporina, metotrexato semanal, inmunoglobulina endovenosa, o antiinflamatorios no esteroidales orales. Piénsalo.',
        answer: 'La respuesta correcta es la E. Frente a una artritis idiopática juvenil, el primer escalón terapéutico para aliviar el dolor y la inflamación son los antiinflamatorios no esteroidales orales en dosis plenas. Los corticoides sistémicos y los fármacos modificadores como el metotrexato se reservan para cuando los antiinflamatorios fracasan o si existe compromiso sistémico grave amenazante.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'AIJ Oligoarticular', tag: 'Regla oftalmológica', kind: 'alert', items: [
          { t: 'Niña pequeña con ANA positivos', d: 'Riesgo de uveítis anterior crónica silente',
            say: 'Cerremos con las tres reglas de oro. En AIJ oligoarticular con anticuerpos antinucleares positivos, el tamizaje con lámpara de hendidura cada tres meses es mandatorio para evitar la ceguera.' },
          { t: 'Artritis de más de seis semanas', d: 'En menores de dieciséis años',
            say: 'La AIJ exige más de seis semanas de evolución en menores de dieciséis años y es una patología cubierta por el GES.' },
        ] },
        { title: 'Still y criterios de Yamaguchi', tag: 'Tríada clásica', kind: 'key', items: [
          { t: 'Fiebre en agujas y rash salmón', d: 'Evanescente con los picos térmicos',
            say: 'Enfermedad de Still se reconoce por fiebre en agujas cotidiana, rash evanescente color salmón y ferritina estratosférica sobre mil.' },
          { t: 'ANA y Factor Reumatoide negativos', d: 'Criterio menor que descarta conectivopatía',
            say: 'Los autoanticuerpos clásicos como factor reumatoide y anticuerpos antinucleares son estrictamente negativos.' },
        ] },
        { title: 'SAM y escalón terapéutico', tag: 'Urgencia y manejo', kind: 'criteria', items: [
          { t: 'AINEs como primer escalón en AIJ', d: 'Metotrexato en formas refractarias',
            say: 'El tratamiento de entrada en AIJ son los antiinflamatorios no esteroidales, escalando a metotrexato si no hay respuesta.' },
          { t: 'Alerta ante caída de la VHS en Still', d: 'Indica consumo de fibrinógeno en SAM',
            say: 'Y en Still, la caída paradójica de la velocidad de sedimentación con citopenias avisa un síndrome de activación macrofágica. Si te llevas una sola idea de hoy: en AIJ oligoarticular busca la uveítis silente con lámpara de hendidura, y en Still la ferritina extrema confirma el diagnóstico. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de enfrentamiento: AIJ y Enfermedad de Still',
    root: N('start', 'Artritis persistente > 6 semanas', 'En menor de 16 años o Still en adulto',
      'Paciente con artritis de más de seis semanas de evolución sin foco infeccioso ni traumático evidente.',
      ['', N('q', '¿Presenta fiebre alta en agujas y rash evanescente?', 'Manifestaciones sistémicas cardinales',
        'Se evalúa la presencia de compromiso sistémico con fiebre en agujas cotidiana y rash macular color salmón.',
        ['SÍ: Fiebre + rash + ferritina > 1.000', N('alert', 'Enfermedad de Still / AIJ Sistémica', 'Corticoides sistémicos a dosis plenas',
          'Cumple criterios de Still con hiperferritinemia extrema y autoanticuerpos negativos. Iniciar corticoides sistémicos a dosis altas y vigilar la aparición de citopenias o caída de fibrinógeno por síndrome de activación macrofágica.')],
        ['NO: Sin manifestaciones sistémicas', N('q', '¿Cuántas articulaciones comprometidas en 6 meses?', 'Oligoarticular vs Poliarticular',
          'Se clasifica según el número de articulaciones inflamadas durante los primeros seis meses.',
          ['Hasta 4 articulaciones: Oligoarticular', N('alert', 'Tamizaje oftalmológico con lámpara de hendidura', 'AINEs + descartar uveítis silente',
            'Forma oligoarticular en niña pequeña. Solicitar anticuerpos antinucleares e interconsulta urgente a oftalmología para lámpara de hendidura cada tres meses. Iniciar AINEs orales.')],
          ['5 o más articulaciones: Poliarticular', N('do', 'AINEs + Metotrexato semanal precoz', 'Derivación a reumatología pediátrica GES',
            'Forma poliarticular con riesgo de erosiones. Iniciar AINEs y derivar oportunamente para inicio de metotrexato semanal bajo garantía GES.')])])]),
  },
};
