// Clase 1.8 (Cardiología) — Bradicardias, bloqueos aurículo-ventriculares y marcapasos. Guion escrito a mano (modelo cardio-14).
// Fuente clínica: books/scripts/dataset_cardiologia_bloque_1.cjs (cardio-08). Códigos 1.01.1.002 Bloqueos aurículo-ventriculares
// (Dx específico, Tx inicial, seguimiento derivar) y 1.01.2.009 Taqui y bradiarritmia con compromiso hemodinámico, según
// books/data/v3_codemap.json.
// Preguntas reales (class_questions.cjs cardio-08 y --search "bradicardia|marcapaso|bloqueo"): Julio 2016 P117 (síncope: indicación de
// marcapaso definitivo) y Enero 2023 P107 (bradicardia con hiperkalemia: calcio). Enunciados y alternativas copiados del banco.
// Se agregan dos preguntas del banco del libro (Banco Oficial AEE): Mobitz II y bradicardia inestable refractaria a atropina.
// No usadas: Julio 2019 P21, Agosto 2021 P138, Diciembre 2018 P96 y Julio 2016 P163 (dependen del ECG que el banco no trae; P96 es una
// pregunta disputada con bloqueo 2:1); Diciembre 2022 P104 (clave suero fisiológico: anotada en las dudas); Diciembre 2024 P159 (texto
// roto); Diciembre 2018 P4 y Julio 2019 P177 (taquiarritmias: van en cardio-07).
// Fotos en contexto: Stroobandt, Barold y Sinnaeve, «ECG from Basics to Essentials» (Wiley, 2016), p. 228, 230 y 240, y Blausen
// «Marcapasos implantado» (CC BY 3.0), en classes/media/biblioteca/20_cardiologia/cardio-08/.
// En movimiento: scenes/cardio_b1.html ?v=bav (gráfico propio con las cuatro formas de bloqueo).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });
const STRO = p => `Stroobandt, Barold y Sinnaeve. ECG from Basics to Essentials (Wiley, 2016), p. ${p}`;
const BLA = 'Ilustración: Blausen.com staff (2014), CC BY 3.0';

module.exports = {
  id: 'cardio-08',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Los cuatro bloqueos AV, la bradicardia inestable y quién necesita un marcapaso definitivo',
      say: 'Bienvenido. Después de las taquicardias, vemos el otro extremo del ritmo: la bradicardia. Un adulto mayor con mareos, caídas o un síncope sin aviso y un pulso de treinta y cinco es el paciente típico. El examen pregunta cuatro cosas: reconocer el bloqueo en el electrocardiograma, qué hacer con la bradicardia inestable, quién necesita marcapaso definitivo y un detalle clásico: la bradicardia con hiperkalemia no se trata con atropina.',
    },

    {
      type: 'points',
      kicker: 'Causas',
      title: 'Por qué un corazón late lento',
      cards: [
        { title: 'Intrínsecas', tag: 'El sistema de conducción', kind: 'key', items: [
          { t: 'Degeneración, nodo sinusal, infarto inferior', d: 'Miocarditis, Chagas, cirugía',
            say: 'Las causas intrínsecas son la degeneración del sistema de conducción en el adulto mayor, la enfermedad del nodo sinusal, el infarto, sobre todo inferior, la miocarditis, la enfermedad de Chagas y la cirugía cardíaca.' },
          { t: 'Síndrome de taquicardia-bradicardia', d: 'FA que alterna con pausas',
            say: 'La enfermedad del nodo sinusal incluye el síndrome de taquicardia-bradicardia, en que episodios de fibrilación alternan con pausas. Si el paciente tiene fibrilación, usa betabloqueador y verapamilo y presenta malestar breve y mareo, el examen para confirmarla es el monitoreo electrocardiográfico de veinticuatro horas.' },
        ] },
        { title: 'Extrínsecas', tag: 'Revisar siempre', kind: 'alert', items: [
          { t: 'Fármacos: betabloqueadores, verapamilo, digoxina, amiodarona', d: 'Donepezilo',
            say: 'Las extrínsecas son los fármacos, como betabloqueadores, calcioantagonistas, digoxina y amiodarona, y la hiperkalemia, el hipotiroidismo, la hipotermia y la hipertensión intracraneal.' },
          { t: 'Hiperkalemia', d: 'T picudas, QRS ancho',
            say: 'Ante una bradicardia, siempre se revisa la lista de medicamentos y el potasio.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Dónde está el bloqueo',
      title: 'Nodal e infranodal',
      nodes: [
        { id: 's', col: 0, row: 1, k: 'start', t: 'Aurícula', s: 'Sale la P' },
        { id: 'n', col: 1, row: 1, k: 'mech', t: 'Nodo AV', s: 'Bloqueo nodal: benigno' },
        { id: 'h', col: 2, row: 1, k: 'mech', t: 'His-Purkinje', s: 'Bloqueo infranodal: grave' },
        { id: 'v', col: 3, row: 1, k: 'effect', t: 'Ventrículo', s: 'Sale el QRS' },
        { id: 'a', col: 1, row: 0, k: 'good', t: 'Responde a atropina', s: 'Mobitz I, IAM inferior' },
        { id: 'm', col: 2, row: 2, k: 'alert', t: 'Necesita marcapaso', s: 'Mobitz II, BAV completo' },
      ],
      edges: [{ from: 's', to: 'n' }, { from: 'n', to: 'h' }, { from: 'h', to: 'v' }, { from: 'n', to: 'a' }, { from: 'h', to: 'm' }],
      steps: [
        { show: ['s', 'n', 'a'], note: 'El nodo: bloqueo benigno',
          say: 'Un bloqueo puede estar en el nodo aurículo-ventricular o más abajo. Si está en el nodo, es habitualmente benigno, de QRS angosto, transitorio y responde a la atropina: es el bloqueo de primer grado, el Mobitz uno y el del infarto inferior.' },
        { show: ['h', 'v', 'm'], note: 'Más abajo: grave',
          say: 'Si está en el sistema His-Purkinje, es infranodal: QRS ancho, alto riesgo de asistolia o bloqueo completo, poca respuesta a la atropina y necesidad de marcapaso. Son el Mobitz dos y el bloqueo completo.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Primer y segundo grado',
      title: 'PR largo, Wenckebach y Mobitz II',
      cards: [
        { title: 'Primer grado', tag: 'Todas las P conducen', kind: 'key', items: [
          { t: 'PR > 200 ms constante', d: 'Benigno, sin marcapaso',
            say: 'Mira este trazado: el intervalo PR es largo, de doscientos ochenta milisegundos, pero constante, y todas las P conducen. Es un bloqueo de primer grado: benigno, y no requiere marcapaso. Se revisan los fármacos.',
            photo: { src: 'biblioteca/20_cardiologia/cardio-08/01_bav-primer-grado-pr-280ms__stroobandt-ecg_p228.jpg', label: 'BAV de 1.er grado: PR 280 ms', at: 'Mira este trazado', credit: STRO(228) } },
        ] },
        { title: 'Segundo grado', tag: 'Algunas P no conducen', kind: 'criteria', items: [
          { t: 'Mobitz I (Wenckebach): PR progresivo y pausa', d: 'Nodal, QRS angosto, se observa',
            say: 'En el Mobitz uno, o Wenckebach, el PR se alarga latido a latido hasta que una P no conduce, y el ciclo se reinicia. Mira cómo el PR pasa de ciento noventa a doscientos noventa y luego una P queda bloqueada. Es nodal y suele ser asintomático.',
            photo: { src: 'biblioteca/20_cardiologia/cardio-08/02_bav-mobitz-i-wenckebach__stroobandt-ecg_p228.jpg', label: 'Mobitz I (Wenckebach)', at: 'Mira cómo el PR pasa', credit: STRO(228) } },
          { t: 'Mobitz II: PR constante y P bloqueada súbita', d: 'Infranodal: marcapaso definitivo',
            say: 'En el Mobitz dos el PR es constante, y de repente una P no conduce, sin alargamiento previo. Se localiza bajo el nodo, tiene QRS ancho y alto riesgo de progresar a asistolia. Tiene indicación de marcapaso definitivo.',
            photo: { src: 'biblioteca/20_cardiologia/cardio-08/03_bav-mobitz-ii-qrs-estrecho__stroobandt-ecg_p230.jpg', label: 'Mobitz II', at: 'En el Mobitz dos', credit: STRO(230) } },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tercer grado',
      title: 'Bloqueo AV completo y Stokes-Adams',
      cards: [
        { title: 'Disociación AV', tag: 'El sello', kind: 'alert', items: [
          { t: 'P y QRS independientes', d: 'Escape lento: 30-40 lpm (ancho) · 40-60 (angosto)',
            say: 'En el bloqueo completo, nada pasa de la aurícula al ventrículo. Mira las ondas P: van a su ritmo, regulares, y los QRS van a otro, mucho más lento, sin relación con ellas. Eso es la disociación aurículo-ventricular, y se acompaña de un pulso regular y lento, de treinta a cuarenta.',
            photo: { src: 'biblioteca/20_cardiologia/cardio-08/04_bav-completo-disociacion-av__stroobandt-ecg_p240.jpg', label: 'BAV completo: disociación AV', at: 'Mira las ondas P', credit: STRO(240) } },
        ] },
        { title: 'Clínica', tag: 'Bajo gasto', kind: 'key', items: [
          { t: 'Mareo, astenia, disnea, angina, IC', d: 'Caídas en el adulto mayor',
            say: 'Los bloqueos de alto grado producen bajo gasto: astenia, mareos, disnea, angina e insuficiencia cardíaca.' },
          { t: 'Síncope súbito: Stokes-Adams', d: 'Asistolia transitoria, recupera rápido',
            say: 'Y el síndrome de Stokes-Adams es la pérdida súbita y breve de conciencia por asistolia o bradicardia extrema, con recuperación rápida y sin déficit focal. Un paciente de ochenta y un años con dos caídas, pálido y con treinta y dos latidos, lo tiene hasta que se demuestre lo contrario.' },
        ] },
      ],
    },

    {
      type: 'image',
      kicker: 'En movimiento',
      title: 'Cómo se ven los cuatro bloqueos',
      images: [
        { src: 'animaciones/cardio-08/A1_bloqueos_av.mp4', label: 'Primer grado, Mobitz I, Mobitz II y completo', credit: 'Animación propia con los criterios del libro' },
      ],
      steps: [
        { note: 'Sigue la P (triángulo)',
          say: 'Mira cómo cae cada onda P, marcada con un triángulo, respecto del QRS. En el primer grado el intervalo es largo, pero siempre igual. En el Mobitz uno se va alargando hasta que una P se queda sin QRS. En el Mobitz dos el intervalo no cambia, pero de pronto una P falla. Y en el completo, las P y los QRS van cada uno por su lado, con un escape lento.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Bradicardia inestable',
      title: 'Atropina, marcapaso transcutáneo y vasoactivos',
      cards: [
        { title: 'Secuencia', tag: 'Hipotensión, shock, isquemia, edema', kind: 'key', items: [
          { t: '1.º atropina 1 mg EV cada 3-5 min', d: 'Máximo 3 mg',
            say: 'Si la bradicardia es sintomática con compromiso hemodinámico, hipotensión, shock, alteración de conciencia, dolor isquémico o edema pulmonar, el primer paso es atropina un miligramo endovenoso, repetida cada tres a cinco minutos, hasta un máximo de tres miligramos.' },
          { t: '2.º marcapaso transcutáneo', d: '60-70 lpm, subir mA hasta capturar con pulso',
            say: 'Si la atropina falla, o el bloqueo es de alto grado, segundo paso: marcapaso transcutáneo. Parches, frecuencia de sesenta a setenta, y se sube la corriente hasta lograr captura mecánica con pulso palpable.' },
          { t: '3.º adrenalina o dopamina en infusión', d: 'Puente al marcapaso transvenoso',
            say: 'Tercero, adrenalina de dos a diez microgramos por minuto o dopamina de cinco a veinte, como puente al marcapaso transvenoso transitorio.' },
        ] },
        { title: 'Recordar', tag: 'Lo que cae', kind: 'alert', items: [
          { t: 'La atropina sirve en lo nodal', d: 'Poco en Mobitz II y BAV completo',
            say: 'La atropina es muy efectiva en los bloqueos nodales y poco en los infranodales, como el Mobitz dos y el completo con QRS ancho.' },
          { t: 'Bradicardia + hiperkalemia: gluconato de calcio EV primero', d: 'Después insulina con glucosa',
            say: 'Y la excepción que se pregunta: si la bradicardia, de treinta por minuto, se acompaña de un potasio de ocho, la conducta inicial es el gluconato de calcio endovenoso. No se pierde tiempo con atropina ni con marcapaso, que fallan con ese potasio.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Marcapaso definitivo',
      title: 'Quién lo necesita',
      cards: [
        { title: 'Indicado', tag: 'Cubierto por GES', kind: 'key', items: [
          { t: 'BAV completo y Mobitz II', d: 'Sintomático o con pausas > 3 s o escape < 40',
            say: 'El marcapaso definitivo está indicado en el bloqueo completo, sintomático o asintomático con pausas mayores de tres segundos o un escape menor de cuarenta, y en el Mobitz dos.' },
          { t: 'Enfermedad del nodo sinusal sintomática', d: 'Taquicardia-bradicardia',
            say: 'También en la enfermedad del nodo sinusal sintomática, incluida la taquicardia-bradicardia, y en el bloqueo bifascicular con síncope. El implante en estos pacientes está cubierto por el sistema GES.',
            photo: { src: 'biblioteca/20_cardiologia/cardio-08/05_marcapasos-implantado-electrodo-vd__blausen.jpg', label: 'Marcapasos implantado', at: 'El implante en estos pacientes', credit: BLA } },
        ] },
        { title: 'No indicado', tag: 'Errores', kind: 'alert', items: [
          { t: 'BAV de 1.er grado y Mobitz I asintomático', d: 'Observar',
            say: 'No tienen indicación el bloqueo de primer grado, el Mobitz uno asintomático ni la bradicardia sinusal asintomática.' },
          { t: 'Fibrilación auricular o flutter', d: 'Se tratan con fármacos',
            say: 'La fibrilación auricular y el flutter se tratan con fármacos, no con marcapaso, y el bloqueo completo de rama izquierda aislado se observa. Si la bradicardia es por un fármaco necesario, se cambia el fármaco antes de implantar.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Bloqueo e infarto',
      title: 'Inferior frente a anterior',
      cards: [
        { title: 'Infarto inferior', tag: 'Coronaria derecha', kind: 'normal', items: [
          { t: 'BAV nodal, QRS angosto, transitorio', d: 'Responde a la atropina',
            say: 'En el infarto inferior, la coronaria derecha irriga el nodo, y el bloqueo es nodal, de QRS angosto, habitualmente transitorio, y responde a la atropina.' },
        ] },
        { title: 'Infarto anterior', tag: 'Descendente anterior', kind: 'alert', items: [
          { t: 'BAV infranodal: necrosis extensa', d: 'Requiere marcapaso',
            say: 'En el infarto anterior, el bloqueo es infranodal y refleja una necrosis extensa del tabique: requiere marcapaso.' },
        ] },
      ],
    },

    { type: 'pathway', intro: 'Armemos el árbol: de la bradicardia a la conducta.' },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Bradicardias y bloqueos: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['PR 280 ms constante', 'BAV de 1.er grado: observar', 'Implantar marcapaso'],
          say: 'PR de doscientos ochenta constante: bloqueo de primer grado. Se observa; el error es implantar marcapaso.' },
        { cells: ['PR constante y P bloqueada súbita', 'Mobitz II: marcapaso definitivo', 'Observación ambulatoria'],
          say: 'PR constante con una P que no conduce de repente: Mobitz dos, marcapaso definitivo. Observar es el error.' },
        { cells: ['P y QRS independientes, FC 32', 'BAV completo: marcapaso', 'Solo atropina'],
          say: 'Disociación con frecuencia de treinta y dos: bloqueo completo. Marcapaso; la atropina sola no basta.' },
        { cells: ['Bradicardia 30 + K 8,3', 'Gluconato de calcio EV', 'Atropina o marcapaso'],
          say: 'Bradicardia de treinta con potasio de ocho coma tres: gluconato de calcio. El error es atropina o marcapaso.' },
        { cells: ['Atropina sin respuesta, shock', 'Marcapaso transcutáneo + adrenalina', 'Repetir atropina hasta 6 mg o amiodarona'],
          say: 'Atropina sin respuesta y shock: marcapaso transcutáneo y adrenalina. No se pasa de tres miligramos de atropina, y la amiodarona es para taquicardias.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 81 años traído tras dos caídas con pérdida de conciencia breve. Pálido, PA 85/45 mmHg, FC 32 lpm. ECG: ondas P regulares a 78 por minuto y QRS anchos regulares a 32 por minuto, sin relación fija entre P y QRS. Potasio 4,2 mEq/L.',
      question: '¿Cuál es el diagnóstico y la conducta inicial?',
      options: [
        { letter: 'A', text: 'BAV de 1.er grado: observación ambulatoria' },
        { letter: 'B', text: 'Mobitz I: suspender fármacos y controlar' },
        { letter: 'C', text: 'BAV completo con crisis de Stokes-Adams: monitor, atropina como puente, marcapaso transcutáneo y marcapaso definitivo (GES)' },
        { letter: 'D', text: 'Taquicardia ventricular: amiodarona' },
        { letter: 'E', text: 'Hiperkalemia: gluconato de calcio' },
      ],
      correct: 'C',
      explanation: 'Disociación AV completa con escape ventricular lento y síncopes: bloqueo AV completo (Stokes-Adams). Se monitoriza, se da oxígeno, atropina 1 mg como puente (poco probable que responda al ser infranodal), parches de marcapaso transcutáneo listos o aplicados, adrenalina o dopamina si persiste la hipotensión, hospitalización para marcapaso transitorio y activación del implante de marcapaso definitivo bicameral (GES).',
      say: {
        stem: 'Un hombre de ochenta y un años llega tras dos caídas con pérdida de conciencia. Está pálido, con presión de ochenta y cinco sobre cuarenta y cinco y frecuencia de treinta y dos. El electrocardiograma muestra ondas P regulares a setenta y ocho y QRS anchos regulares a treinta y dos, sin relación entre ellos. El potasio es normal.',
        question: '¿Cuál es el diagnóstico y la conducta inicial?',
        options: 'Las opciones: bloqueo de primer grado; Mobitz uno; bloqueo completo con atropina y marcapaso; taquicardia ventricular; o hiperkalemia. Piénsalo.',
        answer: 'Es la C. P y QRS independientes son un bloqueo completo, con crisis de Stokes-Adams. Se monitoriza, se prepara el marcapaso transcutáneo y se activa el marcapaso definitivo. La E tienta porque la bradicardia se asocia a hiperkalemia, pero el potasio es normal.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 117',
      stem: 'En un paciente adulto mayor, que presenta síncopes,',
      question: '¿cuál de las siguientes arritmias requiere un marcapaso definitivo?',
      options: [
        { letter: 'A', text: 'Fibrilación auricular crónica' },
        { letter: 'B', text: 'Bloqueo auriculoventricular de primer grado' },
        { letter: 'C', text: 'Flutter auricular 2-3 a 1' },
        { letter: 'D', text: 'Enfermedad del nodo sinusal' },
        { letter: 'E', text: 'Bloqueo completo de rama izquierda' },
      ],
      correct: 'D',
      explanation: 'La enfermedad del nodo sinusal sintomática requiere marcapaso definitivo. Los bloqueos AV son indicación solo si son de tercer grado o de segundo grado Mobitz II; el flutter y la FA se tratan con fármacos y el bloqueo de rama izquierda se observa.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil dieciséis. En un adulto mayor con síncopes, ¿cuál de estas arritmias requiere marcapaso definitivo?',
        question: '¿Cuál requiere marcapaso definitivo?',
        options: 'Las opciones: fibrilación auricular crónica; bloqueo de primer grado; flutter; enfermedad del nodo sinusal; o bloqueo completo de rama izquierda. Piénsalo.',
        answer: 'Es la D. La enfermedad del nodo sinusal sintomática requiere marcapaso. La B tienta por ser un bloqueo, pero el de primer grado no tiene indicación: solo el de tercer grado y el Mobitz dos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 107',
      stem: 'Paciente con bradicardia de 30 lpm e hiperkalemia de 8,3 mEq/L.',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Bicarbonato de sodio endovenoso' },
        { letter: 'B', text: 'Insulina + glucosa endovenosa' },
        { letter: 'C', text: 'Gluconato de calcio endovenoso' },
        { letter: 'D', text: 'Kayexalate oral' },
        { letter: 'E', text: 'Hemodiálisis de urgencia' },
      ],
      correct: 'C',
      explanation: 'Con alteraciones del ECG o bradicardia por hiperkalemia grave, la primera medida es el gluconato de calcio endovenoso, que estabiliza la membrana del miocardio en minutos; después se desplaza el potasio y se elimina.',
      say: {
        stem: 'Una pregunta real del EUNACOM de enero de dos mil veintitrés. Un paciente tiene una bradicardia de treinta por minuto y una hiperkalemia de ocho coma tres.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: bicarbonato; insulina con glucosa; gluconato de calcio; kayexalate oral; o hemodiálisis de urgencia. Piénsalo.',
        answer: 'Es la C. El calcio estabiliza la membrana del miocardio en minutos. La B tienta, porque la insulina con glucosa baja el potasio, pero lo hace más tarde y no protege el corazón de inmediato.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Paciente de 85 años ingresa a SAPU en shock cardiogénico con FC de 28 lpm por BAV de tercer grado. Se administra atropina 1 mg EV sin respuesta de la frecuencia cardíaca ni de la presión arterial.',
      question: '¿Cuál es el paso inmediato que debe realizar el médico tratante?',
      options: [
        { letter: 'A', text: 'Instalar marcapaso externo transcutáneo e iniciar infusión de adrenalina' },
        { letter: 'B', text: 'Repetir atropina hasta completar 6 mg' },
        { letter: 'C', text: 'Administrar amiodarona 300 mg endovenosa' },
        { letter: 'D', text: 'Realizar cardioversión eléctrica sincronizada a 100 J' },
        { letter: 'E', text: 'Derivar en ambulancia básica sin monitor' },
      ],
      correct: 'A',
      explanation: 'En una bradiarritmia inestable que no responde a la atropina (máximo 3 mg) se estimula con marcapaso transcutáneo y se inician drogas vasoactivas (adrenalina o dopamina) mientras se prepara el marcapaso transvenoso. La cardioversión y la amiodarona son para taquiarritmias.',
      say: {
        stem: 'Una pregunta del banco del libro. Una paciente de ochenta y cinco años llega en shock cardiogénico con frecuencia de veintiocho por un bloqueo de tercer grado. La atropina un miligramo no mejora la frecuencia ni la presión.',
        question: '¿Cuál es el paso inmediato?',
        options: 'Las opciones: marcapaso externo transcutáneo y adrenalina; repetir atropina hasta seis miligramos; amiodarona; cardioversión sincronizada; o derivar sin monitor. Piénsalo.',
        answer: 'Es la A. Si la atropina falla, marcapaso transcutáneo y vasoactivos. La B tienta, pero la dosis máxima de atropina es de tres miligramos, y es poco eficaz en el bloqueo infranodal.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: bradicardias y bloqueos',
      cards: [
        { title: 'Reconocer', tag: 'En el ECG', kind: 'key', items: [
          { t: '1.er grado: PR largo · Mobitz I: PR progresivo', d: 'Benignos, nodales',
            say: 'Cerremos con las reglas de oro. El primer grado y el Mobitz uno son nodales y benignos: se observan.' },
          { t: 'Mobitz II y completo: infranodales', d: 'Marcapaso definitivo',
            say: 'El Mobitz dos y el bloqueo completo, con P y QRS independientes, son infranodales y tienen indicación de marcapaso definitivo.' },
        ] },
        { title: 'Urgencia', tag: 'Inestable', kind: 'alert', items: [
          { t: 'Atropina 1 mg (máx. 3) → marcapaso transcutáneo → adrenalina o dopamina', d: 'Marcapaso transvenoso',
            say: 'La bradicardia inestable se trata con atropina, hasta tres miligramos, después marcapaso transcutáneo y adrenalina o dopamina.' },
          { t: 'Bradicardia + hiperkalemia: calcio primero', d: 'Infarto inferior: transitorio · anterior: marcapaso',
            say: 'Con hiperkalemia, gluconato de calcio primero. En el infarto inferior el bloqueo es transitorio; en el anterior, requiere marcapaso.' },
          { t: 'No marcapaso en FA, flutter ni BAV de 1.er grado', d: 'Síncope súbito + bradicardia: Stokes-Adams',
            say: 'Si te llevas una sola idea de hoy: mira dónde cae la P respecto del QRS; de ahí sale el bloqueo y de él, si el paciente necesita o no un marcapaso. Nos vemos en la próxima clase, donde cerramos el bloque con las extrasístoles y el Holter.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Bradicardia y bloqueos AV: del ECG al marcapaso',
    root: N('start', 'Bradicardia o bloqueo AV', 'ECG: ¿P antes de cada QRS?',
      'Un paciente consulta con una frecuencia menor de sesenta, mareos o síncope. Tomas un electrocardiograma y lo primero que decides es si hay compromiso hemodinámico.',
      ['Inestable', N('alert', 'Atropina 1 mg EV', 'Hasta 3 mg · cada 3-5 min',
        'Si hay hipotensión, shock, isquemia o edema pulmonar, atropina un miligramo, repetida cada tres a cinco minutos hasta tres miligramos, salvo que haya hiperkalemia.',
        ['No responde', N('refer', 'Marcapaso transcutáneo + adrenalina o dopamina', 'Puente al transvenoso',
          'Si no responde, marcapaso transcutáneo con captura mecánica, y adrenalina o dopamina en infusión, mientras se prepara el marcapaso transvenoso.')],
        ['K alto, QRS ancho', N('do', 'Gluconato de calcio EV', 'Después insulina con glucosa',
          'Si hay hiperkalemia con QRS ancho, el gluconato de calcio endovenoso va primero.')],
      )],
      ['Estable', N('q', 'Clasificar el bloqueo', 'PR y relación P-QRS',
        'Si está estable, clasificas el bloqueo según el intervalo PR y la relación entre las ondas P y los QRS.',
        ['1.er grado o Mobitz I', N('ok', 'Observar', 'Revisar fármacos y causas',
          'Si es un bloqueo de primer grado o un Mobitz uno, es nodal y benigno: se observa y se revisan los fármacos.')],
        ['Mobitz II o completo', N('alert', 'Marcapaso definitivo', 'GES · hospitalizar con monitor',
          'Si es un Mobitz dos o un bloqueo completo, es infranodal: se hospitaliza con monitor y se activa el marcapaso definitivo, cubierto por el sistema GES.')],
      )],
    ),
  },
};
