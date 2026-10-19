// Clase 1.1 (Cardiología) — Lectura sistemática del electrocardiograma. Guion escrito a mano (estándar Módulo 1, modelo cardio-14).
// Fuente clínica: books/scripts/dataset_cardiologia_bloque_1.cjs (cardio-01). Código 1.01.4.007 Electrocardiograma
// (realiza, interpreta y emplea), según books/data/v3_codemap.json.
// Preguntas reales (class_questions.cjs cardio-01 y --search "electrocardiograma|ECG|síncope"): Julio 2024 P180 (síncope con FC 40:
// el ECG es el examen inicial). Enunciado y alternativas copiados del banco. Se agrega una pregunta del banco del libro (Banco Oficial
// AEE) sobre el ritmo sinusal y otra sobre Sokolow-Lyon.
// No usadas: Diciembre 2024 P62 (alternativas rotas); Diciembre 2019 P126 (HVI en estenosis aórtica: va en cardio-23); Julio 2018 P71 y
// otras que dependen de un ECG que el banco no trae.
// Fotos en contexto: Stroobandt, Barold y Sinnaeve, «ECG from Basics to Essentials» (Wiley, 2016), p. 228 (conducción normal, latido con
// P, QRS, T y PR de 160 ms), en classes/media/biblioteca/20_cardiologia/cardio-01/.
// En movimiento: scenes/cardio_b1.html ?v=lectura (gráfico propio con los cinco pasos y los intervalos).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });
const STRO = p => `Stroobandt, Barold y Sinnaeve. ECG from Basics to Essentials (Wiley, 2016), p. ${p}`;
const Qz = (kicker, title, stem, question, opts, correct, explanation, say) => ({
  type: 'quiz', kicker, title, stem, question, options: opts.map((text, i) => ({ letter: 'ABCDE'[i], text })), correct, explanation, say,
});

module.exports = {
  id: 'cardio-01',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Frecuencia, ritmo, eje, intervalos y segmento ST-T: siempre en el mismo orden',
      say: 'Bienvenido a Cardiología. Empezamos por la herramienta que usarás en todo el resto del bloque: el electrocardiograma. En el perfil de egresado, tú debes realizarlo, interpretarlo y emplearlo solo, en el SAPU o en el consultorio. Hoy no vamos a aprender una arritmia en particular, sino un método de lectura de cinco pasos que te evita equivocarte. Y partimos por entender qué estamos mirando.',
    },

    {
      type: 'flow',
      kicker: 'Qué estamos viendo',
      title: 'Del nodo sinusal al ventrículo',
      nodes: [
        { id: 's', col: 0, row: 1, k: 'start', t: 'Nodo sinusal', s: 'Aurícula derecha alta' },
        { id: 'p', col: 1, row: 1, k: 'mech', t: 'Onda P', s: 'Se despolarizan las aurículas' },
        { id: 'a', col: 2, row: 1, k: 'mech', t: 'Intervalo PR', s: 'Retraso en el nodo AV' },
        { id: 'q', col: 3, row: 0, k: 'effect', t: 'Complejo QRS', s: 'Se despolarizan los ventrículos' },
        { id: 't', col: 3, row: 2, k: 'effect', t: 'Segmento ST y onda T', s: 'Repolarización ventricular' },
        { id: 'r', col: 4, row: 1, k: 'good', t: 'Intervalo QT', s: 'Toda la actividad ventricular' },
      ],
      edges: [{ from: 's', to: 'p' }, { from: 'p', to: 'a' }, { from: 'a', to: 'q' }, { from: 'a', to: 't' }, { from: 'q', to: 'r' }, { from: 't', to: 'r' }],
      steps: [
        { show: ['s', 'p'], note: 'El impulso nace arriba y a la derecha',
          say: 'El impulso eléctrico nace en el nodo sinusal, que está en la parte alta de la aurícula derecha, y se dirige hacia abajo y a la izquierda. Por eso, en un ritmo sinusal la onda P es positiva en las derivaciones inferiores y negativa en aVR. Esa regla la vas a usar siempre.' },
        { show: ['a', 'q'], note: 'El nodo AV frena el impulso',
          say: 'Después el impulso se detiene un instante en el nodo aurículo-ventricular. Ese retraso es el intervalo PR, y es normal entre ciento veinte y doscientos milisegundos. Luego baja por el sistema de conducción y despolariza los ventrículos: eso es el complejo QRS.' },
        { show: ['t', 'r'], note: 'Y los ventrículos se recuperan',
          say: 'Por último viene la repolarización: el segmento ST y la onda T. El intervalo QT mide toda la actividad eléctrica de los ventrículos, y si es muy largo, hay riesgo de arritmias graves. Con este mapa en la cabeza, el papel deja de ser un dibujo.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Cómo se mide',
      title: 'El papel y las equivalencias',
      cards: [
        { title: 'La cuadrícula', tag: 'Veinticinco milímetros por segundo', kind: 'key', items: [
          { t: '1 mm = 0,04 s · 5 mm = 0,2 s', d: 'Cuadro pequeño y cuadro grande',
            say: 'Mira este latido normal. El papel corre a veinticinco milímetros por segundo. Cada cuadro pequeño mide un milímetro y equivale a cuatro centésimas de segundo; el cuadro grande, de cinco milímetros, equivale a dos décimas de segundo. Con eso se mide todo: un PR de cinco milímetros son doscientos milisegundos.',
            photo: { src: 'biblioteca/20_cardiologia/cardio-01/01_conduccion-normal-p-qrs-t-pr-160ms__stroobandt-ecg_p228.jpg', label: 'Latido normal: P, QRS y T', at: 'Mira este latido normal', credit: STRO(228) } },
          { t: '10 mm = 1 mV', d: 'Calibración del voltaje',
            say: 'En vertical, diez milímetros equivalen a un milivolt. Antes de interpretar, comprueba que el trazado esté calibrado y que no tenga artefactos, como temblor muscular o electrodos sueltos, porque pueden simular una fibrilación auricular.' },
        ] },
        { title: 'Las derivaciones', tag: 'Doce vistas del mismo corazón', kind: 'criteria', items: [
          { t: 'Seis frontales y seis precordiales', d: 'DI, DII, DIII, aVR, aVL, aVF · V1 a V6',
            say: 'Las doce derivaciones miran el corazón desde distintos ángulos. Seis son del plano frontal y seis son precordiales, de V uno a V seis. Los electrodos de los brazos invertidos son un error clásico: dan una P y un QRS negativos en DI.' },
        ] },
      ],
    },

    {
      type: 'image',
      kicker: 'En movimiento',
      title: 'Los cinco pasos sobre un latido normal',
      images: [
        { src: 'animaciones/cardio-01/A1_lectura_ecg.mp4', label: 'Frecuencia, ritmo, eje, intervalos y ST-T', credit: 'Animación propia con los criterios del libro' },
      ],
      steps: [
        { note: 'Siempre el mismo orden',
          say: 'Mira cómo se aplica el método. Primero la frecuencia: en un ritmo regular, trescientos dividido por los cuadros grandes entre dos R; aquí son cuatro cuadros y la frecuencia es de setenta y cinco. Segundo, el ritmo: una P antes de cada QRS y un R-R constante. Tercero, el eje, con DI y aVF. Cuarto, los intervalos: PR, QRS y QT. Y quinto, el ST, la T y las ondas Q.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Pasos uno y dos',
      title: 'Frecuencia y ritmo',
      cards: [
        { title: 'Paso 1: frecuencia', tag: 'Regular o irregular', kind: 'key', items: [
          { t: 'Regla de los 300', d: '1 cuadro 300 · 2 150 · 3 100 · 4 75 · 5 60 · 6 50',
            say: 'En un ritmo regular se usa la regla de los trescientos. Un cuadro grande entre dos R son trescientos latidos, dos cuadros son ciento cincuenta, tres son cien, cuatro son setenta y cinco, cinco son sesenta, y seis son cincuenta.' },
          { t: 'Irregular: QRS en 6 s × 10', d: 'Taquicardia > 100 · bradicardia < 60',
            say: 'En un ritmo irregular, como la fibrilación auricular, se cuentan los QRS que caben en treinta cuadros grandes, es decir seis segundos, y se multiplica por diez. Taquicardia es más de cien por minuto; bradicardia, menos de sesenta.' },
        ] },
        { title: 'Paso 2: ritmo', tag: 'Tres condiciones del sinusal', kind: 'criteria', items: [
          { t: 'P positiva en DII, DIII y aVF; negativa en aVR', d: 'Sale del nodo sinusal',
            say: 'Para decir que un ritmo es sinusal se deben cumplir tres cosas. Primera, la P es positiva en las derivaciones inferiores y negativa en aVR.' },
          { t: 'Una P por cada QRS · P-P y R-R constantes', d: 'Si no: otro ritmo',
            say: 'Segunda, todo QRS está precedido por una P y toda P va seguida de un QRS. Tercera, los intervalos son constantes. Una P negativa en DII es un ritmo auricular bajo o ectópico; sin P y con R-R caótico, es fibrilación auricular.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Paso tres',
      title: 'El eje del QRS',
      cards: [
        { title: 'Dos derivaciones bastan', tag: 'DI y aVF', kind: 'key', items: [
          { t: 'DI y aVF positivos: eje normal', d: '−30° a +90°',
            say: 'La forma más rápida de calcular el eje en urgencias es mirar DI y aVF. Si los dos son positivos, es decir, apuntan hacia arriba, el eje es normal, entre menos treinta y más noventa grados.' },
          { t: 'DI + y aVF −: mirar DII', d: 'DII negativo = desviación izquierda',
            say: 'Si DI es positivo y aVF es negativo, se mira DII. Si DII es positivo, sigue siendo normal; si es negativo, hay desviación del eje a la izquierda.' },
        ] },
        { title: 'Desviaciones', tag: 'Qué sugieren', kind: 'alert', items: [
          { t: 'Izquierda: HBAI, HVI, infarto inferior', d: 'Menor de −30°',
            say: 'La desviación a la izquierda sugiere hemibloqueo anterior izquierdo, hipertrofia del ventrículo izquierdo o un infarto inferior antiguo.' },
          { t: 'Derecha: TEP, EPOC, HBPI', d: 'DI negativo y aVF positivo',
            say: 'Si DI es negativo y aVF positivo, el eje está a la derecha: piensa en sobrecarga del ventrículo derecho, como en el tromboembolismo pulmonar o la EPOC, en un hemibloqueo posterior o en un infarto lateral.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Paso cuatro',
      title: 'Intervalos y conducción',
      cards: [
        { title: 'PR y QRS', tag: 'Conducción', kind: 'criteria', items: [
          { t: 'PR 120-200 ms', d: '> 200 BAV de 1.er grado · < 120 con delta: preexcitación',
            say: 'El intervalo PR normal va de ciento veinte a doscientos milisegundos. Mayor de doscientos y constante es un bloqueo aurículo-ventricular de primer grado. Menor de ciento veinte con onda delta es preexcitación, el síndrome de Wolff-Parkinson-White.' },
          { t: 'QRS < 120 ms', d: '≥ 120: bloqueo de rama o latido ventricular',
            say: 'El QRS normal dura menos de ciento veinte milisegundos. Si dura ciento veinte o más, hay un bloqueo completo de rama o el latido nace en el ventrículo.' },
        ] },
        { title: 'QT corregido', tag: 'Fórmula de Bazett', kind: 'alert', items: [
          { t: 'QTc < 440 ms (hombre) y < 460 ms (mujer)', d: 'QT dividido por la raíz del R-R',
            say: 'El QT se corrige con la fórmula de Bazett: el QT medido dividido por la raíz cuadrada del R-R. Es normal bajo cuatrocientos cuarenta milisegundos en el hombre y cuatrocientos sesenta en la mujer.' },
          { t: 'QTc > 500 ms: emergencia', d: 'Riesgo de torsión de puntas',
            say: 'Un QTc mayor de quinientos milisegundos es una alerta: hay riesgo de torsión de puntas y muerte súbita. Se suspende el fármaco causante y se corrigen los electrolitos. Lo veremos en detalle en la clase de taquicardia ventricular.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Paso cinco',
      title: 'ST, onda T y onda Q',
      cards: [
        { title: 'Isquemia, lesión y necrosis', tag: 'Lo que mira el infarto', kind: 'key', items: [
          { t: 'Supradesnivel: lesión transmural', d: 'SCACEST: reperfundir',
            say: 'En el paso cinco buscas el supradesnivel del ST, que es una lesión transmural y exige reperfusión urgente, y el infradesnivel, que es isquemia subendocárdica.' },
          { t: 'T negativa simétrica o acuminada', d: 'Isquemia · hiperkalemia',
            say: 'Las ondas T negativas y simétricas sugieren isquemia; las ondas T altas y puntiagudas, hiperkalemia.' },
          { t: 'Q patológica: ≥ 40 ms o > 25% de la R', d: 'No cuenta la de DIII ni aVR',
            say: 'Y la onda Q patológica, de cuarenta milisegundos o más, o mayor de un cuarto de la R, indica necrosis establecida. La Q de DIII y de aVR no cuenta.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Lo que cae en el examen',
      title: 'Electrolitos y otras firmas',
      cards: [
        { title: 'Potasio', tag: 'Alto y bajo', kind: 'alert', items: [
          { t: 'Hiperkalemia: T alta, QRS ancho, onda sinusoidal', d: 'Gluconato de calcio EV primero',
            say: 'La hiperkalemia produce ondas T altas y simétricas, después QRS ancho y, al final, una onda sinusoidal antes del paro. Con QRS ancho o arritmia, lo primero es el gluconato de calcio endovenoso.' },
          { t: 'Hipokalemia: T plana y onda U', d: 'QT aparentemente largo',
            say: 'La hipokalemia aplana la T, produce una onda U y un QT aparentemente largo, y predispone a extrasístoles y a torsión de puntas.' },
        ] },
        { title: 'Otras firmas', tag: 'Para reconocer', kind: 'criteria', items: [
          { t: 'Calcio bajo: QT largo · calcio alto: QT corto', d: 'Digital: ST en cubeta',
            say: 'La hipocalcemia alarga el QT y la hipercalcemia lo acorta. La digital produce un ST en cubeta.' },
          { t: 'Pericarditis: ST difuso y cóncavo, PR bajo', d: 'TEP: taquicardia sinusal',
            say: 'La pericarditis da un supradesnivel difuso y cóncavo con el PR descendido, y el tromboembolismo pulmonar, sobre todo, una taquicardia sinusal.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Hipertrofia ventricular izquierda',
      title: 'Sokolow-Lyon y Cornell',
      cards: [
        { title: 'Daño de órgano blanco', tag: 'Alto riesgo cardiovascular', kind: 'key', items: [
          { t: 'Sokolow-Lyon: S en V1 + R en V5 o V6 ≥ 35 mm', d: 'El más preguntado',
            say: 'En el hipertenso, la hipertrofia ventricular izquierda lo clasifica como de alto riesgo cardiovascular. El criterio más preguntado es el de Sokolow-Lyon: la onda S en V uno más la onda R en V cinco o V seis, mayor o igual a treinta y cinco milímetros.' },
          { t: 'Cornell: R en aVL + S en V3', d: '> 28 mm en hombres · > 20 mm en mujeres',
            say: 'El índice de Cornell suma la R de aVL con la S de V tres y es positivo sobre veintiocho milímetros en el hombre y veinte en la mujer. Además la hipertrofia produce sobrecarga del ST y T invertida en V cinco y V seis.' },
        ] },
        { title: 'Ante el síncope', tag: 'El primer examen', kind: 'alert', items: [
          { t: 'Síncope: ECG primero', d: 'Después Holter y ecocardiograma',
            say: 'Un último dato que se pregunta: ante un síncope, el primer examen es siempre el electrocardiograma. El Holter y el ecocardiograma vienen después, según lo que muestre. Y un ECG normal no descarta un síndrome coronario agudo si la clínica es sugerente.' },
        ] },
      ],
    },

    { type: 'pathway', intro: 'Armemos el árbol: de la consulta al diagnóstico electrocardiográfico.' },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lectura del ECG: dato, interpretación, error',
      head: ['Dato', 'Interpretación', 'Error típico'],
      rows: [
        { cells: ['P negativa en DII', 'Ritmo no sinusal (o electrodos invertidos)', 'Llamarlo sinusal por la frecuencia'],
          say: 'Una P negativa en DII descarta el ritmo sinusal. El error es llamarlo sinusal solo porque la frecuencia es normal.' },
        { cells: ['PR 280 ms constante', 'BAV de primer grado', 'Indicar marcapaso'],
          say: 'Un PR de doscientos ochenta milisegundos constante es un bloqueo de primer grado: no requiere marcapaso.' },
        { cells: ['QTc 581 ms con claritromicina', 'Riesgo de torsión de puntas', 'Dar amiodarona'],
          say: 'Un QTc de quinientos ochenta y uno con claritromicina: se suspende el fármaco y se corrigen los electrolitos. La amiodarona alargaría aún más el QT.' },
        { cells: ['S V1 19 mm + R V5 23 mm', 'Sokolow 42 mm: HVI', 'Tratarlo como normal'],
          say: 'Sokolow de cuarenta y dos milímetros es hipertrofia ventricular izquierda: el hipertenso es de alto riesgo y se intensifica el tratamiento.' },
        { cells: ['Síncope con FC 40', 'ECG de 12 derivaciones', 'Pedir TAC de cerebro'],
          say: 'En un síncope con bradicardia, el examen inicial es el electrocardiograma, no la tomografía de cerebro.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 48 años, hipertenso de 8 años, en tratamiento irregular. PA 155/95 mmHg, FC 74 lpm regular. ECG: ritmo sinusal, eje normal, PR 160 ms, QRS 90 ms, QTc 410 ms, ST isoeléctrico, onda S en V1 de 19 mm y onda R en V5 de 23 mm.',
      question: '¿Cuál es la interpretación y la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Trazado normal: mantener el tratamiento actual' },
        { letter: 'B', text: 'Hipertrofia ventricular izquierda: alto riesgo cardiovascular; intensificar el tratamiento antihipertensivo' },
        { letter: 'C', text: 'Bloqueo completo de rama izquierda: derivar para marcapaso' },
        { letter: 'D', text: 'SCACEST: trombolisis inmediata' },
        { letter: 'E', text: 'QT largo: suspender el antihipertensivo' },
      ],
      correct: 'B',
      explanation: 'Con los cinco pasos, el ritmo, el eje, los intervalos y el ST son normales, pero S en V1 más R en V5 suman 42 mm, sobre los 35 mm de Sokolow-Lyon: hipertrofia ventricular izquierda, daño de órgano blanco. El hipertenso queda en alto riesgo y se intensifica el tratamiento con terapia combinada.',
      say: {
        stem: 'Un hombre de cuarenta y ocho años, hipertenso desde hace ocho, con tratamiento irregular. Presión de ciento cincuenta y cinco sobre noventa y cinco. El electrocardiograma muestra ritmo sinusal, eje, intervalos y segmento ST normales, una onda S en V uno de diecinueve milímetros y una onda R en V cinco de veintitrés.',
        question: '¿Cuál es la interpretación y la conducta más adecuada?',
        options: 'Las opciones: trazado normal; hipertrofia ventricular izquierda con intensificación del tratamiento; bloqueo de rama izquierda con marcapaso; infarto con trombolisis; o QT largo. Piénsalo.',
        answer: 'Es la B. Diecinueve más veintitrés son cuarenta y dos milímetros, sobre el umbral de treinta y cinco de Sokolow-Lyon. Es una hipertrofia ventricular izquierda, daño de órgano blanco, y obliga a intensificar el tratamiento. La A tienta porque el ritmo y los intervalos son normales, pero ese es justamente el error de no llegar al paso cinco.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 180',
      stem: 'Un paciente de 70 años, sin antecedentes de importancia presenta un síncope de reposo sin pródromo, con recuperación completa. Al examen físico se encuentra orientado, en Glasgow 15, con frecuencia cardíaca de 40 latidos por minuto.',
      question: '¿Cuál es el examen de elección para iniciar el estudio?',
      options: [
        { letter: 'A', text: 'Monitoreo electrocardiográfico de 24 horas' },
        { letter: 'B', text: 'Ecocardiograma' },
        { letter: 'C', text: 'TAC de cerebro' },
        { letter: 'D', text: 'Resonancia magnética de cerebro' },
        { letter: 'E', text: 'Electrocardiograma' },
      ],
      correct: 'E',
      explanation: 'Un síncope de reposo sin pródromo con bradicardia orienta a una causa cardíaca (bloqueo AV, enfermedad del nodo sinusal, hiperkalemia). El ECG de 12 derivaciones es el examen inicial; el Holter y el ecocardiograma vienen después.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticuatro. Un hombre de setenta años tiene un síncope de reposo, sin pródromo, con recuperación completa. Está orientado y su frecuencia cardíaca es de cuarenta latidos por minuto.',
        question: '¿Cuál es el examen de elección para iniciar el estudio?',
        options: 'Las opciones: monitoreo de veinticuatro horas; ecocardiograma; tomografía de cerebro; resonancia de cerebro; o electrocardiograma. Piénsalo.',
        answer: 'Es la E. Con un síncope sin pródromo y bradicardia, piensas en un bloqueo o una enfermedad del nodo, y el primer examen es el electrocardiograma. La A tienta, pero el Holter se pide después, para correlacionar síntomas con el ritmo.',
      },
    },

    Qz('Pregunta del banco EUNACOM', 'Banco EUNACOM · Caso representativo',
      '¿Cuál de los siguientes hallazgos electrocardiográficos descarta la presencia de un ritmo sinusal normal?', '',
      ['Onda P negativa en la derivación DII y positiva en la derivación aVR', 'Frecuencia cardíaca de 65 latidos por minuto', 'Intervalo PR constante de 160 milisegundos', 'Onda P positiva en DI y aVF', 'Complejo QRS precedido por una onda P con intervalo R-R regular'],
      'A',
      'En el ritmo sinusal la P es positiva en DII, DIII y aVF y negativa en aVR. Una P negativa en DII indica un ritmo auricular bajo o ectópico (o electrodos invertidos).',
      {
        stem: 'Una pregunta del banco del libro. Se pregunta cuál hallazgo electrocardiográfico descarta un ritmo sinusal normal.',
        question: '¿Cuál descarta el ritmo sinusal?',
        options: 'Las opciones: P negativa en DII y positiva en aVR; frecuencia de sesenta y cinco; PR constante de ciento sesenta; P positiva en DI y aVF; o QRS precedido de P con R-R regular. Piénsalo.',
        answer: 'Es la A. La P sinusal es positiva en las derivaciones inferiores y negativa en aVR; la inversa indica un origen auricular bajo. Todas las demás son características normales.',
      }),

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: el ECG en cinco pasos',
      cards: [
        { title: 'Método', tag: 'Siempre igual', kind: 'key', items: [
          { t: 'Frecuencia, ritmo, eje, intervalos, ST-T', d: 'En diez minutos o menos',
            say: 'Cerremos con las reglas de oro. El electrocardiograma se lee siempre igual: frecuencia, ritmo, eje, intervalos y segmento ST-T, y se interpreta en diez minutos o menos.' },
          { t: 'P sinusal: positiva en DII, negativa en aVR', d: 'Una P por QRS',
            say: 'Un ritmo sinusal tiene la P positiva en las inferiores, una P por cada QRS y R-R constante.' },
        ] },
        { title: 'Alertas', tag: 'Lo que se pregunta', kind: 'alert', items: [
          { t: 'QTc > 500 ms: suspender el fármaco', d: 'Corregir K, Mg y Ca',
            say: 'Un QTc sobre quinientos obliga a suspender el fármaco y corregir los electrolitos.' },
          { t: 'Sokolow ≥ 35 mm: HVI', d: 'Hipertenso de alto riesgo',
            say: 'Un Sokolow de treinta y cinco o más es hipertrofia ventricular y alto riesgo.' },
          { t: 'Síncope: ECG primero', d: 'Hiperkalemia: calcio',
            say: 'Si te llevas una sola idea de hoy: no saltes a la arritmia que llama la atención; sigue los cinco pasos, porque el error que cuesta caro está casi siempre en el paso que no miraste. Nos vemos en la próxima clase, donde veremos qué hacer cuando el electrocardiograma está plano y el paciente no tiene pulso.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Lectura sistemática del ECG: del trazado a la conducta',
    root: N('start', 'ECG de 12 derivaciones', 'Interpretar en ≤ 10 minutos',
      'Llega un paciente con dolor torácico, palpitaciones, síncope o disnea. Tomas el electrocardiograma y lo interpretas en diez minutos o menos, siempre en el mismo orden.',
      ['Frecuencia y ritmo', N('q', '¿Regular, irregular o sin P?', 'Regla de los 300 · P en DII',
        'Primero la frecuencia y el ritmo. Si hay P positiva en las inferiores antes de cada QRS, es sinusal; si el ritmo es irregular y sin P, piensas en fibrilación auricular.',
        ['Intervalos alterados', N('alert', 'PR, QRS o QTc anormales', 'Bloqueo, preexcitación o QT largo',
          'En el paso cuatro, un PR largo es bloqueo de primer grado, un PR corto con onda delta es preexcitación, un QRS ancho es bloqueo de rama o latido ventricular, y un QTc sobre quinientos es emergencia.')],
      )],
      ['Segmento ST y T', N('alert', 'ST, T y ondas Q', 'Isquemia, lesión, necrosis',
        'En el paso cinco buscas el supradesnivel, el infradesnivel, las T anormales y las ondas Q. Con supradesnivel en derivaciones contiguas o bloqueo de rama izquierdo nuevo, activas la reperfusión.',
        ['Voltaje aumentado', N('ok', 'Sokolow ≥ 35 mm', 'Hipertrofia ventricular izquierda',
          'Si el voltaje está aumentado, es hipertrofia ventricular izquierda: daño de órgano blanco, alto riesgo cardiovascular, intensificar el tratamiento antihipertensivo.')],
      )],
    ),
  },
};
