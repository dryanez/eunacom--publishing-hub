const fs = require('fs'), path = require('path');
const BANK = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', 'books', 'data', 'real_questions_by_code.json'), 'utf8'));
const fix = s => s.replace(/([a-záéíóúñ])- ([a-záéíóúñ])/g, '$1$2').replace(/\s+/g, ' ').trim();
// Pregunta real del banco: enunciado y alternativas tal cual (solo se unen las palabras cortadas por guion del PDF).
function realQuiz(tag, explanation, say, edit) {
  let q; for (const v of Object.values(BANK)) { q = v.find(x => x.recTag === tag); if (q) break; }
  if (!q) throw new Error('no está en el banco: ' + tag);
  let stem = fix(q.stem), question = 'Elige la alternativa correcta.';
  const i = stem.lastIndexOf('¿');
  if (i > 0) { question = stem.slice(i); stem = stem.slice(0, i).trim(); }
  else { const m = stem.match(/^(.*[.?])\s+([^.?]+:)$/); if (m) { stem = m[1]; question = m[2]; } }
  const options = q.options.map(o => ({ letter: o.id, text: fix(o.text) }));
  if (edit) edit(options);
  return { type: 'quiz', kicker: 'Pregunta real EUNACOM', title: tag, stem, question, options, correct: q.correcta, explanation, say };
}
const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });
const PH1 = { src: 'biblioteca/20_cardiologia/cardio-16/01_cardiomegalia-derrame-bilateral-ic__chest-xray-survival-guide_p160.jpg', label: 'Cardiomegalia y derrame', at: 'Mira esta radiografía', credit: 'The Chest X-Ray: A Survival Guide, Fig. 11.24' };

module.exports = {
  id: 'cardio-16',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Reconocer la insuficiencia cardíaca, clasificarla por la fracción de eyección y saber qué examen pedir',
      say: 'Bienvenido al bloque de insuficiencia cardíaca y enfermedades del miocardio. Hoy vemos la vía final común de casi todas las cardiopatías: la insuficiencia cardíaca crónica, una de las consultas más frecuentes del policlínico y una pregunta fija del examen. Veremos cómo se reconoce, cómo se clasifica con la fracción de eyección, para qué sirven los péptidos natriuréticos y por qué el ecocardiograma es el examen de elección.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Un corazón que compensa… y se agota',
      nodes: [
        { id: 'd', col: 0, row: 1, k: 'cause', t: 'Daño del miocardio', s: 'Infarto, HTA, válvula' },
        { id: 'g', col: 1, row: 1, k: 'mech', t: 'Cae el gasto', s: 'O se eleva la presión' },
        { id: 'n', col: 2, row: 0, k: 'mech', t: 'Renina y simpático', s: 'Sodio, agua, taquicardia' },
        { id: 'r', col: 3, row: 1, k: 'effect', t: 'Remodelado', s: 'Dilata, hipertrofia, fibrosis' },
        { id: 'c', col: 4, row: 1, k: 'alert', t: 'Congestión', s: 'Disnea, edema, ortopnea' },
      ],
      edges: [{ from: 'd', to: 'g' }, { from: 'g', to: 'n' }, { from: 'n', to: 'r' }, { from: 'r', to: 'c' }],
      steps: [
        { show: ['d', 'g'], note: 'Algo daña la bomba',
          say: 'Todo parte con un daño del músculo: un infarto, años de hipertensión, una válvula enferma o una miocardiopatía. El corazón saca menos sangre, o para llenarse necesita presiones más altas. Por eso la insuficiencia cardíaca nunca es un diagnóstico final: siempre hay una causa de base.' },
        { show: ['n'], note: 'Defensas que ayudan y dañan',
          say: 'Para sostener la presión, el cuerpo activa dos sistemas: el de renina, angiotensina y aldosterona, y el simpático. El riñón retiene sodio y agua, sube la frecuencia, se contraen las arterias. Al principio compensa, pero después sobrecarga a un corazón que ya está débil.' },
        { show: ['r', 'c'], note: 'Un círculo vicioso',
          say: 'Con los meses el ventrículo se remodela: se dilata, se hipertrofia y se llena de fibrosis. Y la presión que se acumula hacia atrás produce la congestión, que es lo que siente el paciente: falta de aire, ortopnea y edema. Recuerda este mecanismo, porque en la próxima clase los fármacos que alargan la vida bloquean justamente esos sistemas.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Causas',
      title: 'La causa y el descompensante',
      cards: [
        { title: 'Causas de base', tag: 'Siempre buscarlas', kind: 'key', items: [
          { t: 'Isquémica e hipertensiva', d: 'Las dos más frecuentes',
            say: 'La causa más frecuente de insuficiencia con fracción reducida es el infarto antiguo. La hipertensión de años produce hipertrofia y rigidez, y es la base de la insuficiencia con fracción preservada.' },
          { t: 'Valvulopatías y miocardiopatías', d: 'Chagas en zonas endémicas',
            say: 'Después vienen las válvulas, como la estenosis aórtica o la insuficiencia mitral, y las miocardiopatías. En zonas endémicas hay que pensar también en la enfermedad de Chagas.' },
          { t: 'Arritmia, tóxicos, tiroides', d: 'Alcohol, cocaína, quimioterapia',
            say: 'Y no olvides las arritmias sostenidas, el alcohol, la cocaína, la quimioterapia, el hipotiroidismo y el hipertiroidismo, y la anemia grave.' },
        ] },
        { title: 'Lo que descompensa', tag: 'Y lo que se pregunta', kind: 'alert', items: [
          { t: 'Sal, fármacos, infección, FA', d: 'Isquemia, anemia, crisis hipertensiva',
            say: 'En un paciente ya conocido, lo que lo descompensa suele ser dejar los remedios, comer más sal, una infección respiratoria, una fibrilación auricular rápida o una isquemia.' },
          { t: 'AINE y nifedipino', d: 'Verapamilo, diltiazem, pioglitazona',
            say: 'Y hay fármacos que la empeoran. Dos preguntas reales del banco piden qué remedio debe suspenderse en un paciente con insuficiencia cardíaca, y la respuesta es el nifedipino. Lo mismo vale para los antiinflamatorios, el verapamilo, el diltiazem y la pioglitazona.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico clínico',
      title: 'Síntomas, signos y Framingham',
      cards: [
        { title: 'Qué cuenta el paciente', tag: 'Congestión y poco gasto', kind: 'normal', items: [
          { t: 'Disnea de esfuerzo, ortopnea', d: 'Disnea paroxística nocturna',
            say: 'El paciente cuenta una falta de aire que aparece con esfuerzos cada vez menores, que no lo deja dormir plano y lo obliga a usar varias almohadas. A veces despierta de noche ahogado. Eso se llama disnea paroxística nocturna.' },
          { t: 'Edema y fatiga', d: 'Peor en la tarde',
            say: 'Se agrega edema de las piernas que aumenta durante el día, cansancio, tos nocturna y poca tolerancia al ejercicio.' },
        ] },
        { title: 'Lo que encuentras', tag: 'Examen físico', kind: 'key', items: [
          { t: 'Yugulares, crépitos, R3', d: 'Reflujo hepatoyugular, edema con fóvea',
            say: 'Al examen buscas la congestión: ingurgitación yugular a cuarenta y cinco grados, reflujo hepatoyugular, crépitos en las bases, un tercer ruido que suena como galope, hígado grande y edema con fóvea. Un choque de la punta desplazado habla de un corazón dilatado.' },
        ] },
        { title: 'Criterios de Framingham', tag: 'Dos mayores o uno más dos', kind: 'criteria', items: [
          { t: '2 mayores, o 1 mayor + 2 menores', d: 'Es un diagnóstico clínico',
            say: 'El diagnóstico clínico se hace con los criterios de Framingham: dos criterios mayores, o uno mayor y dos menores.' },
          { t: 'Mayores: DPN, yugulares, crépitos, R3', d: 'Cardiomegalia, edema pulmonar',
            say: 'Los mayores son la disnea paroxística nocturna o la ortopnea, las yugulares ingurgitadas, los crépitos, el tercer ruido, la cardiomegalia y el edema agudo de pulmón. Los menores son el edema de tobillos, la tos nocturna, la disnea de esfuerzos, la hepatomegalia, el derrame pleural y la taquicardia.' },
        ] },
      ],
    },

    {
      type: 'image',
      kicker: 'En movimiento',
      title: 'Por qué se ahoga: el asa del ventrículo',
      images: [
        { src: 'animaciones/cardio-16/A1_asa_presion_volumen.mp4', label: 'Asa presión-volumen: normal, FEr y FEp', credit: 'Gráfico propio · criterios del Manual EUNACOM de Cardiología' },
      ],
      steps: [
        { note: 'Tres ventrículos, tres asas',
          say: 'Mira cómo se dibuja un ventrículo con presión y volumen. El normal expulsa un poco más de la mitad de su sangre: eso es la fracción de eyección. En la fracción reducida el asa se corre a la derecha: el ventrículo está dilatado y expulsa poco. En la preservada, la cavidad es normal pero la pared está rígida y necesita presiones altísimas para llenarse. Es el mismo síntoma por dos caminos distintos.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Fenotipos',
      title: 'La fracción de eyección manda',
      cards: [
        { title: 'Según la FEVI', tag: 'Define el tratamiento', kind: 'key', items: [
          { t: 'FEr: FEVI ≤ 40%', d: 'Falla la contracción',
            say: 'La fracción de eyección del ventrículo izquierdo clasifica a todo paciente. Con cuarenta por ciento o menos, es insuficiencia con fracción reducida. El ventrículo está dilatado y es el único fenotipo con tratamiento que alarga la vida de forma comprobada, como veremos en la próxima clase.' },
          { t: 'FEmr: FEVI 41-49%', d: 'Zona intermedia',
            say: 'Entre cuarenta y uno y cuarenta y nueve por ciento está la fracción levemente reducida, una zona intermedia.' },
          { t: 'FEp: FEVI ≥ 50%', d: 'Rigidez, BNP alto, aurícula grande',
            say: 'Con cincuenta por ciento o más y péptidos natriuréticos elevados o alteración estructural, es la fracción preservada. Es típica de la mujer añosa, hipertensa, diabética, obesa o con fibrilación auricular. Ojo: una fracción de eyección normal no descarta la insuficiencia cardíaca.' },
        ] },
        { title: 'Cómo está hoy', tag: 'NYHA y estadios', kind: 'criteria', items: [
          { t: 'NYHA I a IV', d: 'Los síntomas de hoy',
            say: 'La clase funcional de la Nueva York va de uno a cuatro y mide los síntomas actuales. En la clase dos, la actividad ordinaria produce disnea. En la tres, basta un esfuerzo mínimo, como vestirse o caminar una cuadra. En la cuatro, hay síntomas en reposo.' },
          { t: 'Estadios A, B, C, D', d: 'No retroceden',
            say: 'Los estadios del Colegio y la Asociación Americana van de la A a la D y no retroceden. El A es el paciente en riesgo; el B tiene cardiopatía estructural sin síntomas; el C tiene síntomas; y el D es la insuficiencia refractaria que necesita terapias avanzadas.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Exámenes',
      title: 'Qué se pide en la primera consulta',
      cards: [
        { title: 'Siempre', tag: 'Primera consulta', kind: 'key', items: [
          { t: 'ECG: infarto, HVI, FA, BCRI', d: 'Uno normal hace improbable la FEr',
            say: 'Todo paciente lleva un electrocardiograma. Busca un infarto antiguo, hipertrofia, fibrilación auricular y bloqueo de rama izquierda. Un electrocardiograma completamente normal hace poco probable una insuficiencia con fracción reducida.' },
          { t: 'Radiografía de tórax', d: 'Cardiomegalia, Kerley, derrame',
            say: 'La radiografía muestra el tamaño del corazón y la congestión. Mira esta radiografía: el corazón está agrandado y los ángulos costofrénicos están borrados por pequeños derrames pleurales, habitualmente en ambos lados. Si el índice cardiotorácico supera cero coma cinco, hay cardiomegalia.',
            photo: PH1 },
          { t: 'Laboratorio: creatinina, K, TSH', d: 'Hemograma, glicemia, ferritina',
            say: 'Se piden creatinina y electrolitos, porque los necesitas antes de iniciar diuréticos o bloqueadores de la aldosterona, y también hemograma, glicemia, perfil lipídico, función tiroidea y, en la fracción reducida, ferritina y saturación de transferrina.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Péptidos natriuréticos',
      title: 'BNP: sirve para descartar',
      cards: [
        { title: 'Valor de descarte', tag: 'Alto valor predictivo negativo', kind: 'criteria', items: [
          { t: 'Ambulatorio: BNP < 35 o NT-proBNP < 125', d: 'Hace muy improbable la IC',
            say: 'Los péptidos natriuréticos los liberan los cardiomiocitos cuando la pared se estira. Su gran utilidad es descartar. En el paciente ambulatorio, un BNP menor de treinta y cinco o un NT-proBNP menor de ciento veinticinco hacen muy improbable la insuficiencia cardíaca.' },
          { t: 'Urgencia: BNP < 100 o NT-proBNP < 300', d: 'Descarta IC como causa de la disnea',
            say: 'En urgencia los puntos de corte son más altos: BNP menor de cien o NT-proBNP menor de trescientos. Por eso la pregunta de un anciano con disnea de inicio reciente, que pide el examen con mayor valor predictivo negativo para descartar origen cardíaco, tiene como respuesta el péptido natriurético.' },
        ] },
        { title: 'Trampas', tag: 'Falsos positivos y negativos', kind: 'alert', items: [
          { t: 'Suben con edad, FA y falla renal', d: 'También con TEP e HTP',
            say: 'Pero si está elevado, no confirma: sube con la edad, la insuficiencia renal, la fibrilación auricular, la embolia pulmonar y la hipertensión pulmonar. Solo te obliga a pedir el ecocardiograma.' },
          { t: 'Baja con la obesidad', d: 'El sacubitrilo eleva el BNP',
            say: 'En el obeso los valores salen más bajos de lo esperado. Y el sacubitrilo, que veremos después, eleva el BNP pero no el NT-proBNP, así que en esos pacientes se prefiere este último.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Ecocardiograma',
      title: 'El examen de elección',
      cards: [
        { title: 'Qué responde', tag: 'Doppler transtorácico', kind: 'key', items: [
          { t: 'FEVI y tamaño del ventrículo', d: 'Define el fenotipo',
            say: 'El ecocardiograma Doppler transtorácico es el examen de elección para confirmar la insuficiencia cardíaca. Es inocuo y rápido. Mide la fracción de eyección y el tamaño del ventrículo, que definen el fenotipo y el tratamiento.' },
          { t: 'Grosor, segmentos, válvulas', d: 'Causa estructural',
            say: 'Además mira el grosor de las paredes, las alteraciones segmentarias de un infarto antiguo, las válvulas y el derrame pericárdico.' },
          { t: 'Función diastólica, presión pulmonar', d: 'Clave en la FEp',
            say: 'Evalúa la función diastólica y el tamaño de la aurícula, que son la clave de la fracción preservada, y estima la presión de la arteria pulmonar y la función del ventrículo derecho.' },
        ] },
        { title: 'Cómo se usa', tag: 'Lo que se pregunta', kind: 'alert', items: [
          { t: 'Primer examen ante IC con infarto previo', d: 'Antes de coronariografía o esfuerzo',
            say: 'Una pregunta real de dos mil trece muestra a un paciente con infarto previo, ortopnea y crépitos bibasales, y pide el examen de elección para iniciar el estudio. Es el ecocardiograma. No la coronariografía ni el test de esfuerzo, que vienen después para buscar la causa.' },
          { t: 'Repetir a los 3 meses del tratamiento', d: 'Para decidir el desfibrilador',
            say: 'Se repite a los tres meses de tratamiento óptimo para decidir si necesita un desfibrilador, y cuando cambia la clínica; no se repite de rutina en el paciente estable.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Conducta inicial',
      title: 'Qué hace el médico general',
      cards: [
        { title: 'El mismo día', tag: 'Y derivar', kind: 'pharma', items: [
          { t: 'Furosemida 20-40 mg al día', d: 'Hasta el peso seco',
            say: 'Si hay congestión, parte con furosemida de veinte a cuarenta miligramos al día y la ajusta hasta alcanzar el peso seco. El diurético alivia, pero no alarga la vida.' },
          { t: 'Suspender lo que empeora', d: 'AINE, nifedipino, verapamilo',
            say: 'Suspende los antiinflamatorios, el nifedipino, el verapamilo, el diltiazem y la pioglitazona. Trata la causa y los factores de riesgo. Y si la fracción es de cuarenta por ciento o menos, inicia los fármacos de la próxima clase.' },
          { t: 'Derivar a cardiología', d: 'Causa y optimización',
            say: 'Toda insuficiencia nueva se deriva a cardiología para estudiar la causa, pero tú empiezas ese mismo día.' },
        ] },
        { title: 'Educación', tag: 'Parte del tratamiento', kind: 'normal', items: [
          { t: 'Pesarse a diario', d: 'Consultar si sube > 2 kg en 3 días',
            say: 'Educa al paciente: debe pesarse todos los días en ayunas y consultar si sube más de dos kilos en tres días.' },
          { t: 'Poca sal; vacunas; sin alcohol', d: 'Rehabilitación cardíaca',
            say: 'Restricción moderada de sal, abstinencia de alcohol y tabaco, vacunas contra la influenza y el neumococo, actividad física regular y reconocer los signos de alarma. Deriva a urgencia si hay disnea de reposo, hipotensión, síncope o dolor torácico.' },
        ] },
      ],
    },

    { type: 'pathway', intro: 'Armemos el árbol: de la disnea al fenotipo.' },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Insuficiencia cardíaca: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Disnea con ortopnea e infarto previo', 'Ecocardiograma primero', 'Coronariografía o test de esfuerzo'],
          say: 'Insuficiencia cardíaca con un infarto previo: el primer examen es el ecocardiograma. Pedir de entrada una coronariografía o un test de esfuerzo es el error.' },
        { cells: ['BNP bajo en un disneico', 'Descarta IC', 'Confirmar IC con un BNP alto'],
          say: 'Un péptido natriurético bajo descarta la insuficiencia. Pero uno alto no la confirma: sube con la edad, la fibrilación y la falla renal.' },
        { cells: ['FEVI normal con síntomas y BNP alto', 'IC con fracción preservada', 'Decir que no es IC'],
          say: 'Síntomas, péptido alto y fracción normal: es insuficiencia con fracción preservada. Decir que no hay insuficiencia porque la fracción es normal es un error.' },
        { cells: ['Edema, yugulares altas, FEVI normal en EPOC', 'Cor pulmonale', 'IC izquierda'],
          say: 'Un paciente con EPOC, edema, yugulares altas y ventrículo izquierdo normal con presión pulmonar elevada tiene cor pulmonale, no insuficiencia izquierda.' },
        { cells: ['IC y nifedipino', 'Suspender el nifedipino', 'Agregar más diurético'],
          say: 'Insuficiencia cardíaca con nifedipino: se suspende. Es el inotropo negativo que empeora la enfermedad.' },
        { cells: ['Obeso con IC y BNP normal', 'No descarta', 'Descartar por el valor'],
          say: 'En el obeso el péptido sale falsamente bajo. No te quedes tranquilo solo por ese valor.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 72 años, hipertensa de larga data y diabética, con disnea progresiva de 3 meses, ortopnea de 3 almohadas, ingurgitación yugular a 45°, crépitos bibasales y edema con fóvea hasta la mitad de las piernas. PA 145/88 mmHg, FC 88 lpm. El ECG muestra hipertrofia ventricular izquierda.',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Furosemida, ecocardiograma Doppler, exámenes de laboratorio y derivación a cardiología' },
        { letter: 'B', text: 'Coronariografía urgente' },
        { letter: 'C', text: 'Dar de alta con dieta hiposódica y control en 6 meses' },
        { letter: 'D', text: 'Iniciar diltiazem para controlar la presión' },
        { letter: 'E', text: 'Solicitar solo un test de esfuerzo' },
      ],
      correct: 'A',
      explanation: 'Cumple cuatro criterios mayores y uno menor de Framingham, en clase NYHA III. Se inicia el diurético, se pide el ecocardiograma para definir la fracción de eyección (en una hipertensa añosa con hipertrofia es probable una IC con fracción preservada), exámenes de laboratorio y se deriva a cardiología. El diltiazem está contraindicado si la fracción fuera reducida.',
      say: {
        stem: 'Una mujer de setenta y dos años, hipertensa y diabética, tiene tres meses de disnea progresiva, ortopnea con tres almohadas, yugulares ingurgitadas, crépitos en las bases y edema hasta la mitad de las piernas. El electrocardiograma muestra hipertrofia del ventrículo izquierdo.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: furosemida, ecocardiograma, exámenes y derivación; coronariografía urgente; alta con dieta y control en seis meses; diltiazem; o solo un test de esfuerzo. Piénsalo.',
        answer: 'Es la A. Tiene cuatro criterios mayores de Framingham, así que el diagnóstico clínico está hecho. Se parte con el diurético, se pide el ecocardiograma para conocer la fracción de eyección y se deriva. Es probable una fracción preservada, por la hipertensión y la hipertrofia. La D falla: el diltiazem es un inotropo negativo que empeora la insuficiencia si la fracción es baja.',
      },
    },

    realQuiz('EUNACOM Julio 2013 · Pregunta 53',
      'Es una insuficiencia cardíaca (ortopnea, edema, crépitos) en un paciente con infarto previo. El examen de elección para iniciar el estudio es el ecocardiograma Doppler, que mide la fracción de eyección y la causa estructural. El ECG y la radiografía se piden, pero no definen el fenotipo; la coronariografía y el test de esfuerzo buscan la causa isquémica después.',
      {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil trece. Un hombre de sesenta y siete años tuvo un infarto hace seis meses tratado con stent, y es hipertenso y diabético. Consulta por dos meses de disnea de medianos esfuerzos, ortopnea y edema de las piernas que aumenta en la tarde, con crepitaciones en ambas bases.',
        question: '¿Cuál es el examen de elección para iniciar el estudio diagnóstico?',
        options: 'Las opciones: electrocardiograma; coronariografía; test de esfuerzo; radiografía de tórax; o ecocardiograma. Piénsalo.',
        answer: 'Es la E. Tiene una insuficiencia cardíaca, y para conocer la función del ventrículo se pide el ecocardiograma. La B tienta, porque el antecedente es coronario, pero la coronariografía busca la causa isquémica y no es el examen con que se parte.',
      }),

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: insuficiencia cardíaca crónica',
      cards: [
        { title: 'Reconocer', tag: 'Clínica y exámenes', kind: 'key', items: [
          { t: 'Framingham: 2 mayores o 1 + 2 menores', d: 'El diagnóstico es clínico',
            say: 'Cerremos con las reglas de oro. El diagnóstico se hace con los criterios de Framingham: dos mayores, o uno mayor y dos menores.' },
          { t: 'BNP para descartar; eco para confirmar', d: 'Ecocardiograma: examen de elección',
            say: 'El péptido natriurético descarta y el ecocardiograma Doppler confirma y mide la fracción de eyección.' },
        ] },
        { title: 'Clasificar y actuar', tag: 'FEVI y causa', kind: 'alert', items: [
          { t: 'FEVI ≤ 40 · 41-49 · ≥ 50', d: 'FEr · FEmr · FEp',
            say: 'La fracción de eyección define el fenotipo: reducida con cuarenta o menos, levemente reducida entre cuarenta y uno y cuarenta y nueve, y preservada con cincuenta o más.' },
          { t: 'Buscar causa y descompensante', d: 'Suspender nifedipino y AINE',
            say: 'Busca siempre la causa de base y lo que la descompensó, y suspende los fármacos que la empeoran. Si te llevas una sola idea de hoy: la insuficiencia cardíaca no es un diagnóstico final, es un síndrome que se confirma con ecocardiograma y se clasifica por la fracción de eyección. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Insuficiencia cardíaca crónica: de la disnea al fenotipo',
    root: N('start', 'Disnea, ortopnea, edema', 'Sospecha de insuficiencia cardíaca',
      'Llega un paciente con falta de aire de esfuerzo, ortopnea o edema. Lo primero es sospechar insuficiencia cardíaca y pedir los exámenes de la primera consulta.',
      ['Sospecha clínica', N('do', 'ECG, radiografía, BNP y laboratorio', 'Creatinina, K, TSH, hemograma',
        'Pides electrocardiograma, radiografía de tórax, péptido natriurético y exámenes de laboratorio. El péptido te permite descartar rápido.',
        ['BNP bajo', N('ok', 'IC improbable', 'Buscar otra causa de la disnea',
          'Si el BNP es menor de treinta y cinco en el ambulatorio, la insuficiencia es muy improbable y buscas otra causa: EPOC, anemia, obesidad o embolia.')],
        ['BNP elevado o alta sospecha', N('do', 'Ecocardiograma Doppler', 'Examen de elección',
          'Si el péptido está elevado o la sospecha clínica es alta, pides el ecocardiograma Doppler, que confirma y mide la fracción de eyección.',
          ['FEVI ≤ 40%', N('alert', 'IC-FEr', 'Cuatro pilares (Tema 3.2)',
            'Con una fracción de cuarenta por ciento o menos, es insuficiencia con fracción reducida, y se inicia la terapia de los cuatro pilares de la próxima clase.')],
          ['FEVI 41-49%', N('do', 'IC-FEmr', 'iSGLT2 y causa',
            'Entre cuarenta y uno y cuarenta y nueve, fracción levemente reducida: inhibidor del cotransportador sodio-glucosa y tratar la causa y los factores de riesgo.')],
          ['FEVI ≥ 50%', N('do', 'IC-FEp', 'iSGLT2, diurético, comorbilidades',
            'Con cincuenta o más y péptido alto, fracción preservada: inhibidor del cotransportador sodio-glucosa, diurético para la congestión y control de la hipertensión, la fibrilación y la obesidad.')],
        )],
      )],
    ),
  },
};
