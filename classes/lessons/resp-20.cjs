// Clase 4.5 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neumologia.cjs (resp-20).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'resp-20',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'En la hemoptisis grave se muere ahogado: primero la vía aérea, después la causa',
      say: 'Bienvenidos. Hoy vemos hemoptisis y bronquiectasias, dos temas que van de la mano, porque las bronquiectasias son una de las causas clásicas de sangrado pulmonar. Ya viste la hemoptisis como síntoma del cáncer y del TEP en las clases anteriores; hoy la miramos como urgencia. El examen pregunta tres cosas: cómo se reconoce, cómo se protege la vía aérea y cómo se confirma una bronquiectasia. Partamos.',
    },

    {
      type: 'points',
      kicker: 'Definición',
      title: '¿Qué es, y cuándo es amenazante?',
      cards: [
        { title: 'Hemoptisis', tag: 'Bajo la glotis', kind: 'key', items: [
          { t: 'Sangre del árbol traqueobronquial', d: 'O del parénquima, bajo la glotis',
            say: 'Partamos por la definición. La hemoptisis es la expectoración de sangre que viene del árbol traqueobronquial o del parénquima pulmonar, es decir, de bajo la glotis.' },
          { t: 'Diferenciar de hematemesis', d: 'Y de la epistaxis posterior',
            say: 'Lo primero es asegurarte de que realmente viene del pulmón, porque la sangre también puede venir del tubo digestivo, o de una epistaxis posterior que el paciente traga y luego expulsa.' },
        ] },
        { title: 'Hemoptisis amenazante', tag: 'Masiva', kind: 'alert', items: [
          { t: '> 150–200 mL en 1 hora', d: 'O > 500–600 mL en 24 horas',
            say: 'Ahora, ¿cuándo es grave? Se habla de hemoptisis amenazante, o masiva, cuando supera los ciento cincuenta a doscientos mililitros en una hora, o los quinientos a seiscientos en veinticuatro horas.' },
          { t: 'O cualquier volumen que comprometa', d: 'Vía aérea, oxigenación o hemodinamia',
            say: 'Pero ojo: también es amenazante cualquier volumen, aunque sea menor, que obstruya la vía aérea, produzca hipoxemia grave o inestabilidad hemodinámica. Lo que define la gravedad no es solo cuánto sangra, sino qué le hace al paciente.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnóstico diferencial',
      title: 'Hemoptisis vs hematemesis',
      head: ['Característica', 'Hemoptisis', 'Hematemesis'],
      rows: [
        { cells: ['Cómo sale', 'Con tos y carraspeo', 'Con náuseas y vómitos'],
          say: 'Veamos cómo separar la hemoptisis de la hematemesis. Lo primero es cómo sale: la hemoptisis sale con tos y carraspeo; la hematemesis, con náuseas y vómitos.' },
        { cells: ['Aspecto', 'Rojo rutilante, espumosa', 'Oscura, en concho de café'],
          say: 'El aspecto: la sangre del pulmón es roja rutilante y espumosa, porque viene mezclada con aire. La del estómago es oscura, como concho de café, porque el ácido la digirió.' },
        { cells: ['pH', 'Alcalino', 'Ácido'],
          say: 'Y eso mismo explica el pH: alcalino en la hemoptisis, ácido en la hematemesis.' },
        { cells: ['Contenido', 'Mucus, macrófagos alveolares', 'Restos de alimentos'],
          say: 'La hemoptisis viene con mucus y macrófagos alveolares; la hematemesis, con restos de comida.' },
        { cells: ['Pródromos', 'Cosquilleo laríngeo, opresión torácica', 'Dolor epigástrico, náuseas'],
          say: 'Los síntomas previos también ayudan: cosquilleo en la garganta u opresión en el pecho antes de la hemoptisis; dolor epigástrico y náuseas antes de la hematemesis.' },
        { cells: ['Causas frecuentes', 'Bronquiectasias, cáncer, TBC, aspergiloma', 'Úlcera, várices, Mallory-Weiss'],
          say: 'Y las causas: bronquiectasias, cáncer, tuberculosis y aspergiloma en la hemoptisis; úlcera péptica, várices esofágicas y Mallory-Weiss en la hematemesis.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: '¿De dónde sangra y de qué se muere?',
      nodes: [
        { id: 'aor', col: 0, row: 0, k: 'cause', t: 'Arterias bronquiales', s: 'Ramas de la aorta, alta presión' },
        { id: 'pul', col: 0, row: 2, k: 'cause', t: 'Arteria pulmonar', s: 'Baja presión' },
        { id: 'hem', col: 1, row: 1, k: 'mech', t: 'Hemoptisis masiva', s: '90 % de origen bronquial' },
        { id: 'asf', col: 2, row: 0, k: 'alert', t: 'Asfixia', s: 'Inundación alveolar' },
        { id: 'sho', col: 2, row: 2, k: 'trap', t: 'Shock hipovolémico', s: 'No es la causa de muerte' },
        { id: 'emb', col: 3, row: 0, k: 'good', t: 'Embolizar la arteria bronquial', s: 'Ataca la fuente' },
      ],
      edges: [
        { from: 'aor', to: 'hem', label: '90 %' }, { from: 'pul', to: 'hem', label: '10 %' },
        { from: 'hem', to: 'asf', label: 'mata' }, { from: 'hem', to: 'sho', label: 'rara vez' },
        { from: 'aor', to: 'emb' },
      ],
      steps: [
        { show: ['aor'], note: 'Alta presión sistémica',
          say: 'Entendamos de dónde sale la sangre, porque eso explica el tratamiento. El pulmón tiene dos circulaciones. Las arterias bronquiales son ramas de la aorta, con presión sistémica, es decir, alta.' },
        { show: ['pul'], note: 'Baja presión',
          say: 'La arteria pulmonar, en cambio, trabaja a baja presión.' },
        { show: ['hem'], note: '9 de cada 10 masivas: bronquiales',
          say: 'Por eso, en el noventa por ciento de las hemoptisis masivas, el sangrado viene de las arterias bronquiales, y solo en el diez por ciento de la pulmonar. Tiene lógica: sangra más lo que tiene más presión.' },
        { show: ['asf'], note: 'La regla de oro del tema',
          say: 'Ahora, ¿de qué se muere este paciente? Y aquí está la regla de oro: se muere de asfixia. La sangre inunda los alvéolos, que es donde se intercambia el oxígeno. Basta un volumen pequeño para llenar la vía aérea.' },
        { show: ['sho'], note: 'Trampa: pensar en la volemia primero',
          say: 'No se muere de shock hipovolémico, como uno pensaría. Por eso la prioridad no es reponer volumen: es proteger la vía aérea.' },
        { show: ['emb'], note: 'El tratamiento sigue a la fuente',
          say: 'Y como la fuente habitual es una arteria bronquial, el tratamiento que detiene el sangrado es embolizar esa arteria. Lo vemos enseguida.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Urgencia',
      title: 'Hemoptisis amenazante: el orden importa',
      nodes: [
        { id: 'pac', col: 0, row: 1, k: 'start', t: 'Hemoptisis amenazante', s: 'Riesgo de asfixia' },
        { id: 'dec', col: 1, row: 1, k: 'alert', t: 'Decúbito lateral', s: 'Lado que sangra hacia abajo' },
        { id: 'via', col: 2, row: 1, k: 'mech', t: 'O2 + intubación', s: 'Tubo grueso ≥ 8,0–8,5 mm' },
        { id: 'emb', col: 3, row: 1, k: 'good', t: 'Embolización bronquial', s: 'Éxito inicial > 90 %' },
        { id: 'cir', col: 4, row: 1, k: 'refer', t: 'Cirugía de resección', s: 'Si falla y es unilateral' },
        { id: 'tra', col: 1, row: 3, k: 'trap', t: 'Lado sano abajo', s: 'Inunda el pulmón bueno' },
      ],
      edges: [
        { from: 'pac', to: 'dec' }, { from: 'dec', to: 'via' }, { from: 'via', to: 'emb' },
        { from: 'emb', to: 'cir', label: 'fracasa' },
        { from: 'dec', to: 'tra', label: 'nunca' },
      ],
      steps: [
        { show: ['pac'], note: 'Todo apunta a evitar la asfixia',
          say: 'Veamos la conducta, y fíjate que cada paso sale de la regla anterior: evitar la asfixia.' },
        { show: ['dec'], note: 'La medida que más se pregunta',
          say: 'El primer paso es la posición: decúbito lateral hacia el lado que sangra. El pulmón afectado abajo. Así la gravedad mantiene la sangre en ese pulmón, y no escurre por la carina hacia el pulmón sano.' },
        { show: ['tra'], note: 'Trampa clásica',
          say: 'Y esta es la trampa del examen: si acuestas al paciente con el lado sano abajo, la sangre cae justo al pulmón que está ventilando, y lo ahogas. Si sangra el derecho, decúbito lateral derecho.' },
        { show: ['via'], note: 'Tubo grueso para aspirar',
          say: 'Luego, oxígeno y preparación para intubar, con un tubo orotraqueal grueso, de ocho a ocho y medio milímetros o más. ¿Por qué grueso? Para que pase el broncoscopio y se puedan aspirar los coágulos.' },
        { show: ['emb'], note: 'El procedimiento de elección',
          say: 'Con la vía aérea asegurada, el procedimiento de elección para detener el sangrado es la arteriografía con embolización de las arterias bronquiales, con un éxito inicial sobre el noventa por ciento.' },
        { show: ['cir'], note: 'Rescate',
          say: 'La cirugía de resección queda para cuando la embolización fracasa, en un paciente con sangrado unilateral.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Bronquiectasias',
      title: 'Bronquios que ya no vuelven atrás',
      cards: [
        { title: 'Qué son', tag: 'Irreversibles', kind: 'key', items: [
          { t: 'Dilatación permanente de bronquios', d: 'De mediano calibre',
            say: 'Pasemos a las bronquiectasias. Son dilataciones anormales, permanentes e irreversibles de los bronquios de mediano calibre.' },
          { t: 'Ciclo infección–inflamación', d: 'Destruye la pared elástica y muscular',
            say: '¿Cómo se forman? Por un círculo vicioso: la infección inflama, la inflamación destruye el componente elástico y muscular de la pared, el bronquio dilatado acumula secreciones, y esas secreciones se vuelven a infectar.' },
        ] },
        { title: 'Causas', tag: 'Qué las inicia', kind: 'criteria', items: [
          { t: 'Secuela de TBC e infecciones infantiles', d: 'Sarampión, coqueluche',
            say: 'Las causas principales son las secuelas de tuberculosis y de infecciones graves de la infancia, como el sarampión o el coqueluche.' },
          { t: 'Fibrosis quística, discinesia ciliar', d: 'E inmunodeficiencias',
            say: 'Y las enfermedades que impiden limpiar la vía aérea o defenderse de la infección: fibrosis quística, discinesia ciliar primaria e inmunodeficiencias. Esto importa, porque en el paciente joven con bronquiectasias el examen te pide buscar la causa.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Bronquiectasias',
      title: 'Clínica, diagnóstico y manejo',
      cards: [
        { title: 'Clínica', tag: 'Broncorrea', kind: 'alert', items: [
          { t: 'Tos crónica con expectoración purulenta', d: 'Abundante y diaria, de años',
            say: 'La clínica es muy característica: tos crónica con expectoración purulenta abundante, todos los días, durante meses o años. Eso se llama broncorrea, y suele ser mayor en la mañana, porque las secreciones se acumulan durante la noche.' },
          { t: 'Infecciones a repetición', d: 'Y hemoptisis recurrente',
            say: 'Se suman infecciones respiratorias a repetición y hemoptisis recurrente. Por eso esta clase une los dos temas.' },
        ] },
        { title: 'Diagnóstico', tag: 'TACAR', kind: 'key', items: [
          { t: 'Signo del anillo de sello', d: 'Bronquio más ancho que su arteria',
            say: 'El examen de elección es la TACAR de tórax. El hallazgo clave es el signo del anillo de sello: en un corte, el bronquio se ve más ancho que la arteria que lo acompaña, cuando normalmente miden lo mismo.' },
          { t: 'Sin afilamiento periférico', d: 'Signo del riel de tranvía',
            say: 'Y en un corte longitudinal, el bronquio no se afina hacia la periferia, dando el signo del riel de tranvía.' },
        ] },
        { title: 'Manejo', tag: 'Crónico', kind: 'pharma', items: [
          { t: 'Kinesioterapia respiratoria', d: 'Antibióticos en las exacerbaciones',
            say: 'El manejo es kinesioterapia respiratoria para drenar las secreciones, antibióticos en las exacerbaciones,' },
          { t: 'Vacunas', d: 'Antiinfluenza y antineumocócica',
            say: 'y vacunación antiinfluenza y antineumocócica, para cortar el ciclo de infecciones.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol de decisión, tal como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Hemoptisis masiva del pulmón derecho', 'Decúbito lateral derecho', 'Lado sano abajo o Trendelenburg'],
          say: 'Repasemos las trampas. Hemoptisis masiva del pulmón derecho: decúbito lateral derecho. Poner el lado sano abajo, o la cabeza abajo, es el error.' },
        { cells: ['Prioridad en la masiva', 'Proteger la vía aérea', 'Reponer volumen primero'],
          say: 'La prioridad es la vía aérea, porque se muere de asfixia. Pensar primero en el volumen es el error clásico.' },
        { cells: ['Intubación', 'Tubo grueso ≥ 8,0 mm', 'Tubo delgado'],
          say: 'Si hay que intubar, tubo grueso, para pasar el broncoscopio y aspirar.' },
        { cells: ['Detener el sangrado', 'Embolización de arterias bronquiales', 'Cirugía de entrada'],
          say: 'Para detener el sangrado, embolización bronquial. La cirugía es el rescate, no el primer paso.' },
        { cells: ['Broncorrea + infecciones a repetición', 'TACAR de tórax', 'Quedarse con la radiografía'],
          say: 'Tos con broncorrea e infecciones a repetición: TACAR para confirmar las bronquiectasias.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 48 años con tos diaria y expectoración purulenta abundante desde la juventud y neumonías a repetición. Consulta por 200 mL de sangre roja rutilante con coágulos en 30 minutos. FR 28/min, FC 110 lpm, SatO2 89 % ambiental. Abundantes estertores húmedos y gorgoteo en el hemitórax izquierdo.',
      question: '¿Cuál es la primera medida?',
      options: [
        { letter: 'A', text: 'Decúbito lateral izquierdo y oxígeno de alto flujo' },
        { letter: 'B', text: 'Decúbito lateral derecho y oxígeno de alto flujo' },
        { letter: 'C', text: 'Reposición con 2 litros de cristaloides' },
        { letter: 'D', text: 'TACAR de tórax urgente' },
        { letter: 'E', text: 'Cirugía de resección del lóbulo afectado' },
      ],
      correct: 'A',
      explanation: 'Hemoptisis amenazante en bronquiectasias: la prioridad es evitar la asfixia. Decúbito lateral izquierdo (lado que sangra abajo) para proteger el pulmón derecho, oxígeno, reserva de hemoderivados y coordinar broncoscopía y embolización bronquial urgente.',
      say: {
        stem: 'Vamos a un caso. Mujer de cuarenta y ocho años que desde joven tiene tos diaria con mucha expectoración purulenta y neumonías a repetición. Llega a urgencias porque expectoró doscientos mililitros de sangre roja con coágulos en media hora. Frecuencia respiratoria veintiocho, satura ochenta y nueve, y tiene gorgoteo en el hemitórax izquierdo.',
        question: '¿Cuál es la primera medida?',
        options: 'Las opciones: decúbito lateral izquierdo con oxígeno, decúbito lateral derecho con oxígeno, dos litros de cristaloides, TACAR urgente, o cirugía. Piénsalo.',
        answer: 'Es la A. Doscientos mililitros en media hora es una hemoptisis amenazante, en una paciente con bronquiectasias. Sangra el izquierdo, donde está el gorgoteo, así que va con el izquierdo abajo, para proteger el derecho. La B es la trampa: acostarla sobre el lado sano lo inunda. Y la C falla en la prioridad: no se muere de shock, se muere ahogada.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un paciente de 56 años con antecedente de secuela de tuberculosis pulmonar en el lóbulo superior derecho consulta por una hemoptisis masiva de aproximadamente 300 mL de sangre rutilante en 45 minutos. Presenta taquipnea, desaturación y gorgoteo bronquial audible.',
      question: '¿Cuál es la primera medida postural y de soporte que se debe indicar de inmediato mientras se prepara la intubación y la fibrobroncoscopía?',
      options: [
        { letter: 'A', text: 'Posición de Trendelenburg con cabeza baja a 30 grados' },
        { letter: 'B', text: 'Decúbito lateral derecho (lado sangrante hacia abajo) y oxigenoterapia a alto flujo' },
        { letter: 'C', text: 'Decúbito lateral izquierdo estricto para favorecer el drenaje' },
        { letter: 'D', text: 'Posición sentada ortopneica con compresión torácica bimanual' },
        { letter: 'E', text: 'Posición genupectoral' },
      ],
      correct: 'B',
      explanation: 'La causa principal de muerte es la asfixia. El decúbito lateral hacia el lado de la lesión (aquí, el derecho) mantiene la sangre en el pulmón afectado y evita que atraviese la carina e inunde el pulmón sano.',
      say: {
        stem: 'Ahora un caso representativo del banco EUNACOM. Paciente de cincuenta y seis años con secuela de tuberculosis en el lóbulo superior derecho, que tiene una hemoptisis masiva de unos trescientos mililitros en cuarenta y cinco minutos, con taquipnea, desaturación y gorgoteo audible.',
        question: '¿Cuál es la primera medida postural y de soporte, mientras se prepara la intubación y la broncoscopía?',
        options: 'Las opciones: Trendelenburg, decúbito lateral derecho con oxígeno, decúbito lateral izquierdo para drenar, sentado con compresión del tórax, o genupectoral. Piénsalo.',
        answer: 'Es la B. La lesión está en el pulmón derecho, así que ese lado va abajo, y la sangre se queda ahí. La C es la trampa más tentadora, porque suena lógico drenar la sangre; pero drenarla hacia el lado izquierdo es inundar el pulmón sano. Y el Trendelenburg lleva la sangre hacia la tráquea: justo lo contrario de lo que buscas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 119',
      stem: 'Un paciente de 26 años de edad presenta un cuadro de tos con expectoración de algunos años de evolución, mayor en las mañana y que ha presentado hemoptisis. Su examen físico presenta acropaquias y a la auscultación pulmonar hay crepitaciones y estertores bilaterales.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Bronquiectasias' },
        { letter: 'B', text: 'Cáncer pulmonar' },
        { letter: 'C', text: 'Tuberculosis pulmonar' },
        { letter: 'D', text: 'Asma' },
        { letter: 'E', text: 'EPOC' },
      ],
      correct: 'A',
      explanation: 'Paciente joven con tos y expectoración de años, mayor en la mañana, hemoptisis, acropaquia y estertores bilaterales: bronquiectasias. La edad y los años de evolución alejan el cáncer y el EPOC.',
      say: {
        stem: 'Ahora preguntas reales. Esta es del EUNACOM de julio de dos mil dieciséis. Paciente de veintiséis años, con tos y expectoración de varios años, mayor en las mañanas, que ha tenido hemoptisis. Tiene acropaquia, y crepitaciones y estertores en ambos pulmones.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: bronquiectasias, cáncer pulmonar, tuberculosis, asma, o EPOC. Piénsalo.',
        answer: 'Es la A. Expectoración de años, peor en la mañana, con hemoptisis, en un paciente joven: bronquiectasias. El cáncer tienta por la acropaquia y la hemoptisis, pero a los veintiséis años y con años de evolución no calza. Y el EPOC no da acropaquia, ni aparece a esa edad.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 87',
      stem: 'Paciente con infecciones respiratorias recurrentes y expectoración matinal de 200 mL al día.',
      question: '¿Cuál es el examen de elección para el estudio?',
      options: [
        { letter: 'A', text: 'Broncoscopía con lavado broncoalveolar' },
        { letter: 'B', text: 'Espirometría con test de reversibilidad' },
        { letter: 'C', text: 'TAC de tórax de alta resolución' },
        { letter: 'D', text: 'Radiografía de tórax seriada' },
        { letter: 'E', text: 'Cultivo de esputo' },
      ],
      correct: 'C',
      explanation: 'Broncorrea matinal abundante con infecciones recurrentes: sospecha de bronquiectasias. El examen de elección para confirmarlas es la TACAR (signo del anillo de sello).',
      say: {
        stem: 'Otra, del EUNACOM de enero de dos mil veintitrés. Paciente con infecciones respiratorias a repetición y doscientos mililitros de expectoración cada mañana.',
        question: '¿Cuál es el examen de elección para el estudio?',
        options: 'Las opciones: broncoscopía con lavado, espirometría, TAC de alta resolución, radiografías seriadas, o cultivo de esputo. Piénsalo.',
        answer: 'Es la C. Doscientos mililitros cada mañana es broncorrea, y con infecciones a repetición la sospecha es bronquiectasias. Se confirman con TACAR, buscando el anillo de sello. El cultivo de esputo es el distractor: sirve para elegir el antibiótico en una exacerbación, pero no diagnostica la dilatación del bronquio.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 57',
      stem: 'Un paciente de 22 años, que desde la infancia tiene infecciones respiratorias a repetición, que requerían uso de antibiótico. Al examen físico, es mesomorfo, con FC: 72x’, PA:120/80 mmHg, su examen físico presenta crepitaciones y estertores bilateral. Se solicita radiografía de tórax que muestra múltiples imágenes de dilataciones bronquiales bilaterales, compatibles con bronquiectasias.',
      question: '¿Cuál es el examen para proseguir el estudio?',
      options: [
        { letter: 'A', text: 'Broncoscopía con biopsia bronquial' },
        { letter: 'B', text: 'Prueba de provocación bronquial con metacolina' },
        { letter: 'C', text: 'Espirometría' },
        { letter: 'D', text: 'Test del sudor' },
        { letter: 'E', text: 'Baciloscopías de expectoración' },
      ],
      correct: 'D',
      explanation: 'Adulto joven con infecciones desde la infancia y bronquiectasias bilaterales ya visibles: el siguiente paso es buscar la causa. La fibrosis quística, una de las causas principales de bronquiectasias, se estudia con test del sudor.',
      say: {
        stem: 'La última, del EUNACOM de julio de dos mil diecinueve. Paciente de veintidós años con infecciones respiratorias a repetición desde la infancia, siempre con antibióticos, y crepitaciones y estertores bilaterales. La radiografía ya muestra dilataciones bronquiales bilaterales, compatibles con bronquiectasias.',
        question: '¿Cuál es el examen para proseguir el estudio?',
        options: 'Las opciones: broncoscopía con biopsia, provocación con metacolina, espirometría, test del sudor, o baciloscopías. Piénsalo.',
        answer: 'Es la D. Fíjate en el giro: aquí las bronquiectasias ya se ven, así que la pregunta no es confirmarlas sino buscar su causa. Bronquiectasias bilaterales en un joven con infecciones desde niño hacen pensar en fibrosis quística, una de las causas que vimos, y se estudia con test del sudor. La broncoscopía con biopsia tienta, pero no busca la causa de base.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Hemoptisis amenazante', tag: 'Urgencia', kind: 'alert', items: [
          { t: 'Se muere de asfixia', d: 'No de shock',
            say: 'Cerremos con las reglas de oro. En la hemoptisis masiva, el paciente se muere de asfixia, no de shock. Por eso lo primero es la vía aérea.' },
          { t: 'Lado que sangra hacia abajo', d: 'Protege el pulmón sano',
            say: 'Decúbito lateral con el lado que sangra hacia abajo, oxígeno, e intubación con tubo grueso si hace falta.' },
          { t: 'Embolización bronquial', d: '90 % de origen bronquial',
            say: 'Y el sangrado se detiene con embolización de las arterias bronquiales, porque de ahí viene el noventa por ciento.' },
        ] },
        { title: 'Bronquiectasias', tag: 'Crónico', kind: 'key', items: [
          { t: 'Broncorrea + infecciones + hemoptisis', d: 'Peor en la mañana',
            say: 'Las bronquiectasias se reconocen por broncorrea diaria, infecciones a repetición y hemoptisis recurrente.' },
          { t: 'TACAR: anillo de sello', d: 'En el joven, buscar la causa',
            say: 'Se confirman con TACAR y el signo del anillo de sello, y en el joven hay que buscar la causa. Si te llevas una sola idea de hoy: en la hemoptisis grave, primero salvas la vía aérea, con el lado que sangra hacia abajo. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Hemoptisis: primero la vía aérea',
    root: N('start', 'Expectoración de sangre', '¿Viene del pulmón?',
      'Paciente que expectora sangre. Primero confirmas que viene del pulmón: con tos, roja rutilante y espumosa, y no con vómitos y oscura.',
      ['', N('q', '¿Es amenazante?', '> 150–200 mL/h, > 500 mL/día o compromiso',
        'Luego defines la gravedad: ¿más de ciento cincuenta a doscientos mililitros en una hora, más de quinientos en el día, o compromiso de la vía aérea, la oxigenación o la hemodinamia?',
        ['Sí', N('alert', 'Lado que sangra abajo', 'O2 + intubación con tubo grueso',
          'Es amenazante. Decúbito lateral con el lado que sangra abajo, oxígeno y preparación para intubar con tubo grueso.',
          ['', N('do', 'Embolización bronquial', 'Cirugía si fracasa',
            'Luego, arteriografía con embolización de las arterias bronquiales. Si fracasa y el sangrado es unilateral, cirugía de resección.')])],
        ['No', N('q', 'Estudio etiológico', 'TAC con contraste + broncoscopía',
          'Si no es amenazante, se estudia la causa con TAC de tórax con contraste y fibrobroncoscopía programada.',
          ['Broncorrea crónica', N('ok', 'Bronquiectasias: TACAR', 'Kinesioterapia, antibióticos, vacunas',
            'Si hay broncorrea crónica e infecciones a repetición, piensa en bronquiectasias: se confirman con TACAR y se manejan con kinesioterapia, antibióticos en las exacerbaciones y vacunas.')])])]),
  },
};
