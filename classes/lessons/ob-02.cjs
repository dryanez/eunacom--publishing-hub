// Clase 1.2 — guion docente escrito a mano (estándar Módulo 3 · Obstetricia).
// Fuente clínica: books/scripts/dataset_obstetricia.cjs (ob-02).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ob-02',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Tamizaje de aneuploidías, Doppler de arterias uterinas, prevención de preeclampsia con aspirina y cervicometría para parto prematuro',
      say: 'Bienvenidos a la segunda clase de obstetricia. Hoy revisamos las dos ecografías más determinantes del embarazo: la ecografía de once a catorce semanas y la ecografía morfológica de veinte a veinticuatro semanas. Al terminar esta clase dominarás los marcadores de aneuploidías como la translucencia nucal y el hueso nasal, la indicación oportuna de aspirina según el doppler de arterias uterinas para prevenir la preeclampsia, y el manejo del cuello corto con progesterona o cerclaje. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Cronología ecográfica',
      title: 'Hitos y objetivos de las dos ecografías sistemáticas mayores',
      nodes: [
        { id: 'e11', col: 0, row: 2, k: 'start', t: 'Ecografía 11 a 14 semanas', s: 'LCN entre 45 y 84 milímetros · edad gestacional definitiva' },
        { id: 'ane', col: 1, row: 1, k: 'alert', t: 'Marcadores de aneuploidías', s: 'Translucencia nucal · hueso nasal · ductus venoso' },
        { id: 'pre', col: 1, row: 3, k: 'risk', t: 'Doppler arterias uterinas', s: 'Índice de pulsatilidad medio elevado sobre percentil 95' },
        { id: 'asp', col: 2, row: 3, k: 'good', t: 'Aspirina 150 mg al día', s: 'Inicio antes de las 16 semanas para prevenir preeclampsia' },
        { id: 'e20', col: 3, row: 1, k: 'mech', t: 'Ecografía 20 a 24 semanas', s: 'Anatomía fetal exhaustiva corte por corte' },
        { id: 'cer', col: 4, row: 2, k: 'good', t: 'Cervicometría transvaginal', s: 'Pesquisa de cuello corto menor a 25 mm y prevención de prematurez' },
      ],
      edges: [
        { from: 'e11', to: 'ane', label: 'genética' },
        { from: 'e11', to: 'pre', label: 'placentación' },
        { from: 'pre', to: 'asp', label: 'profilaxis' },
        { from: 'ane', to: 'e20', label: 'segundo trimestre' },
        { from: 'asp', to: 'e20', label: 'seguimiento' },
        { from: 'e20', to: 'cer', label: 'tamizaje prematuro' },
      ],
      steps: [
        {
          show: ['e11', 'ane'],
          note: 'Ecografía de primer trimestre tardío',
          say: 'La ecografía de once a trece semanas con seis días se realiza con una longitud céfalo-nalgas de cuarenta y cinco a ochenta y cuatro milímetros. Su primer gran objetivo es el tamizaje de cromosomopatías mediante marcadores fenotípicos como la translucencia nucal, la presencia del hueso nasal y el flujo del ductus venoso.',
        },
        {
          show: ['pre', 'asp'],
          note: 'Tamizaje de preeclampsia precoz',
          say: 'El segundo gran objetivo es evaluar las arterias uterinas con doppler. Si el índice de pulsatilidad medio se encuentra elevado sobre el percentil noventa y cinco, traduce una mala invasión trofoblástica y alto riesgo de preeclampsia precoz. La conducta salvadora es iniciar aspirina en dosis de ciento cincuenta miligramos diarios por la noche antes de las dieciséis semanas.',
        },
        {
          show: ['e20', 'cer'],
          note: 'Ecografía morfológica y cervicometría',
          say: 'Entre las veinte y veinticuatro semanas se efectúa la ecografía morfológica de segundo trimestre para revisar toda la anatomía fetal y descartar malformaciones mayores. Simultáneamente se realiza la cervicometría transvaginal para pesquisar cuello corto menor o igual a veinticinco milímetros y prevenir el parto prematuro.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Marcadores de aneuploidías a las 11-14 semanas',
      title: 'Translucencia nucal, hueso nasal y flujo en ductus venoso',
      cards: [
        {
          title: 'Translucencia nucal patológica',
          kind: 'alert',
          items: [
            {
              text: 'Grosor sonolúcido retrocervical patológico si es mayor o igual a tres milímetros.',
              say: 'La translucencia nucal es el espacio anecoico entre la piel y el tejido blando fetal a nivel de la nuca. Se considera patológica si mide tres o más milímetros o supera el percentil noventa y cinco para la longitud céfalo-nalgas.',
            },
            {
              text: 'Asociación cardinal con Trisomía 21, cardiopatías congénitas y Síndrome de Turner.',
              say: 'Una translucencia aumentada se asocia fuertemente a síndrome de Down o trisomía veintiuno, pero también a trisomías dieciocho y trece, síndrome de Turner y malformaciones cardíacas congénitas severas.',
            },
          ],
        },
        {
          title: 'Hueso nasal y Ductus venoso',
          kind: 'key',
          items: [
            {
              text: 'Ausencia de osificación del hueso nasal en la semana once a catorce.',
              say: 'La ausencia de visualización del hueso nasal es un marcador específico de síndrome de Down, estando ausente en hasta dos tercios de los fetos con trisomía veintiuno en esta ventana gestacional.',
            },
            {
              text: 'Onda A reversa en el ductus venoso: traduce sobrecarga y falla cardíaca fetal derecha.',
              say: 'En el ductus venoso, la presencia de una onda A reversa durante la contracción auricular traduce una elevación patológica de las presiones cardíacas y se asocia tanto a cromosomopatías como a defectos estructurales del corazón.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Predicción de preeclampsia y RCF',
      title: 'Doppler de arterias uterinas y profilaxis con aspirina',
      cards: [
        {
          title: 'Doppler de arterias uterinas a las 11-14 semanas',
          kind: 'criteria',
          items: [
            {
              text: 'Fisiopatología: falla de la segunda oleada de invasión trofoblástica en arterias espiraladas.',
              say: 'El doppler de arterias uterinas evalúa la resistencia vascular placentaria. En un embarazo normal, el trofoblasto invade la capa muscular de las arterias espiraladas transformándolas en vasos de alta capacitancia y baja resistencia.',
            },
            {
              text: 'Criterio patológico: Índice de pulsatilidad medio superior al percentil noventa y cinco.',
              say: 'Si la invasión falla, las arterias se mantienen rígidas con persistencia del notch protodiastólico y elevación del índice de pulsatilidad medio por encima del percentil noventa y cinco.',
            },
          ],
        },
        {
          title: 'Intervención con Aspirina preventiva',
          kind: 'pharma',
          items: [
            {
              text: 'Ácido acetilsalicílico ciento cincuenta miligramos cada noche antes de dormir.',
              say: 'La única intervención farmacológica que ha demostrado reducir en más del sesenta por ciento la preeclampsia precoz y la restricción del crecimiento fetal es la aspirina en dosis de ciento cincuenta miligramos al día administrada por la noche.',
            },
            {
              text: 'Momento de inicio crítico: antes de las dieciséis semanas y mantenida hasta la semana treinta y seis.',
              say: 'Para que la aspirina sea efectiva, debe iniciarse imperativamente antes de la semana dieciséis de gestación, idealmente entre las once y catorce semanas, y mantenerse hasta la semana treinta y seis.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Ecografía morfológica de 20-24 semanas',
      title: 'Revisión sistemática de la anatomía fetal y descarte de malformaciones',
      cards: [
        {
          title: 'Sistema nervioso central y cara',
          kind: 'key',
          items: [
            {
              text: 'Ventrículos laterales normales menores a diez milímetros de diámetro.',
              say: 'En el cerebro fetal se miden los ventrículos laterales a nivel del atrio: un diámetro mayor a diez milímetros define ventriculomegalia y obliga a descartar hidrocefalia o infecciones congénitas.',
            },
            {
              text: 'Visualización del perfil fetal y labio superior continuo para descartar hendidura labial.',
              say: 'Se explora la cisterna magna, el cerebelo y la integridad del labio superior para descartar labio leporino y defectos del paladar.',
            },
          ],
        },
        {
          title: 'Corazón y pared abdominal',
          kind: 'criteria',
          items: [
            {
              text: 'Corte de cuatro cámaras y salida de grandes vasos: descarta cardiopatías mayores.',
              say: 'La evaluación cardíaca con corte de cuatro cámaras y tractos de salida aórtico y pulmonar pesquisa la gran mayoría de las cardiopatías congénitas severas.',
            },
            {
              text: 'Pared abdominal anterior: diferenciación entre onfalocele y gastrosquisis.',
              say: 'En la pared abdominal se confirma la inserción del cordón. El onfalocele presenta saco membranoso con inserción central del cordón y se asocia a trisomías; la gastrosquisis es un defecto paraumbilical derecho sin membrana con asas flotando libres.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Screening de parto prematuro',
      title: 'Cervicometría transvaginal y manejo del cuello corto',
      cards: [
        {
          title: 'Técnica de medición estandarizada',
          kind: 'criteria',
          items: [
            {
              text: 'Vía transvaginal con vejiga vacía entre las veinte y veinticuatro semanas.',
              say: 'La cervicometría debe realizarse siempre por vía transvaginal y con la vejiga vacía. La ecografía transabdominal no es confiable porque la repleción vesical elonga artificialmente el cuello.',
            },
            {
              text: 'Definición de cuello corto: longitud cervical menor o igual a veinticinco milímetros.',
              say: 'Se define cuello corto si la longitud del canal cervical cerrado es menor o igual a veinticinco milímetros, o menor a veinte milímetros en pacientes sin antecedentes.',
            },
          ],
        },
        {
          title: 'Manejo según antecedente obstétrico',
          kind: 'alert',
          items: [
            {
              text: 'Sin antecedente de parto prematuro previo: Progesterona micronizada doscientos miligramos al día.',
              say: 'Si una paciente asintomática sin antecedentes de prematurez presenta cuello corto, la conducta de elección es indicar progesterona micronizada doscientos miligramos al día por vía vaginal hasta la semana treinta y seis.',
            },
            {
              text: 'Con antecedente de parto prematuro espontáneo previo: indicación de Cerclaje cervical.',
              say: 'En cambio, si coexiste el antecedente de uno o más partos prematuros espontáneos o incompetencia cervical, la conducta indicada es la colocación quirúrgica de un cerclaje cervical antes de las veinticuatro semanas.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Comparativa sistemática',
      title: 'Matriz clínica: Ecografía 11-14 semanas versus Ecografía 20-24 semanas',
      head: ['Parámetro de comparación', 'Ecografía 11 a 13+6 semanas', 'Ecografía 20 a 24 semanas', 'Relevancia en el examen'],
      rows: [
        {
          cells: [
            'Medición biométrica clave',
            'Longitud céfalo-nalgas de 45 a 84 mm',
            'Diámetro biparietal, circunferencia cefálica y abdominal, fémur',
            'La LCN en 11-14 sem fija la edad gestacional más certera de todo el embarazo.',
          ],
          say: 'La ecografía de primer trimestre mide la longitud céfalo-nalgas para fijar la edad definitiva. La de segundo trimestre evalúa la biometría fetal completa para construir las curvas de crecimiento.',
        },
        {
          cells: [
            'Objetivo genético y vascular',
            'Translucencia nucal y doppler de arterias uterinas para preeclampsia precoz',
            'Anatomía de órganos internos y cervicometría para riesgo de parto prematuro',
            '11 a 14 semanas previene preeclampsia con aspirina; 20 a 24 previene prematurez.',
          ],
          say: 'El doppler uterino precoz permite prevenir la preeclampsia con aspirina; la cervicometría de segundo trimestre previene la prematurez con progesterona o cerclaje.',
        },
        {
          cells: [
            'Intervención terapéutica preventiva',
            'Aspirina 150 mg cada noche iniciada antes de la semana 16',
            'Progesterona micronizada vaginal 200 mg o cerclaje cervical según antecedentes',
            'Ambas intervenciones deben iniciarse dentro de sus ventanas terapéuticas exactas.',
          ],
          say: 'Iniciar la aspirina después de las dieciséis semanas pierde casi toda su efectividad profiláctica. El cerclaje se coloca habitualmente antes de las veinticuatro semanas.',
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de decisión clínica',
      title: 'Conducta ante hallazgos anormales en la ecografía de primer y segundo trimestre',
      say: 'Revisemos el árbol de decisiones ante una translucencia nucal aumentada, un doppler uterino alterado o un cuello uterino corto en la cervicometría.',
    },

    {
      type: 'table',
      kicker: 'Diagnósticos diferenciales y trampas',
      title: 'Trampas del EUNACOM en ecografía prenatal',
      head: ['Hallazgo ecográfico', 'Error común a evitar', 'Concepto correcto', 'Conducta según norma'],
      rows: [
        {
          cells: [
            'Translucencia nucal aumentada mayor a tres milímetros',
            'Asumir que solo predice síndrome de Down y no estudiar otros órganos',
            'Se asocia también a cardiopatías congénitas severas, Turner y trisomías 13 y 18',
            'Ofrecer estudio genético diagnóstico y programar ecocardiograma fetal a las 20 a 22 semanas.',
          ],
          say: 'Una translucencia aumentada no solo alerta sobre trisomía veintiuno. Obliga a descartar cardiopatías congénitas mediante un ecocardiograma fetal avanzado a las veinte semanas.',
        },
        {
          cells: [
            'Doppler uterino alterado a las 11-14 semanas',
            'Esperar al segundo trimestre para confirmar la resistencia antes de tratar',
            'La ventana para que la aspirina prevenga la preeclampsia se cierra a las 16 semanas',
            'Iniciar de inmediato ácido acetilsalicílico 150 mg al día por la noche antes de la semana 16.',
          ],
          say: 'No debes esperar a la ecografía morfológica de segundo trimestre para indicar aspirina. Si la indicas tarde, las arterias espiraladas ya consolidaron su daño y no habrá beneficio preventivo.',
        },
        {
          cells: [
            'Cuello corto de veinte milímetros sin contracciones en paciente sin antecedentes',
            'Indicar cerclaje de urgencia o reposo absoluto en cama',
            'El cerclaje en cuello corto aislado sin antecedentes de prematurez previa no aporta beneficio',
            'Indicar progesterona micronizada doscientos miligramos al día por vía vaginal.',
          ],
          say: 'En un cuello corto detectado por screening en una mujer sin partos prematuros previos, el tratamiento de elección es progesterona vaginal. El cerclaje se reserva para quienes tienen el antecedente de prematurez espontánea.',
        },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 75',
      caseText: 'Una paciente de cuarenta y un años, cursando un embarazo de once semanas, se realiza una ecografía transvaginal que muestra una translucencia nucal de seis milímetros, siendo el valor de referencia menor a tres milímetros, y ausencia de hueso nasal. ¿Cuál es la conducta más adecuada para proseguir el estudio?',
      question: '¿Cuál es la conducta más adecuada para proseguir el estudio?',
      options: [
        { letter: 'A', text: 'Biopsia de vellosidades coriales para estudio citogenético', isCorrect: true },
        { letter: 'B', text: 'Mediciones ecográficas seriadas de longitud femoral', isCorrect: false },
        { letter: 'C', text: 'Repetir la ecografía a las catorce semanas de gestación', isCorrect: false },
        { letter: 'D', text: 'Solicitar niveles plasmáticos maternos de gonadotrofina coriónica', isCorrect: false },
        { letter: 'E', text: 'Continuar el control habitual del embarazo sin estudios invasivos', isCorrect: false },
      ],
      correct: 'A',
      say: {
        stem: 'Revisemos esta pregunta oficial de agosto de dos mil veintiuno. Una paciente de cuarenta y un años con once semanas de gestación presenta una translucencia nucal de seis milímetros y ausencia de hueso nasal.',
        question: 'Nos consultan por la conducta más adecuada para proseguir el estudio.',
        options: 'Las alternativas son: opción A, biopsia de vellosidades coriales; opción B, mediciones seriadas de fémur; opción C, repetir ecografía a las catorce semanas; opción D, niveles de gonadotrofina coriónica; y opción E, control habitual. Piénsalo.',
        answer: 'La respuesta correcta es la opción A. Con una edad materna avanzada, una translucencia nucal marcadamente engrosada de seis milímetros y ausencia del hueso nasal, el riesgo de aneuploidía es extraordinariamente alto. En el primer trimestre, entre las once y catorce semanas, el examen diagnóstico invasivo de elección es la biopsia de vellosidades coriales.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 72',
      caseText: 'Una mujer de treinta y cuatro años, multípara de dos, cursando embarazo de veinte semanas, con antecedente de dos partos prematuros espontáneos a las veinte y veinticuatro semanas, asintomática, acude a control prenatal. Su examen físico es normal, con útero a nivel umbilical. Se realiza cervicometría transvaginal de control, la cual muestra una longitud cervical de veinte milímetros. La conducta más adecuada en este caso es:',
      question: '¿Cuál es la conducta más adecuada en este caso?',
      options: [
        { letter: 'A', text: 'Solicitar un perfil biofísico fetal de inmediato', isCorrect: false },
        { letter: 'B', text: 'Indicar corticoides y antibióticos manteniendo conducta expectante', isCorrect: false },
        { letter: 'C', text: 'Realizar cerclaje cervical quirúrgico', isCorrect: true },
        { letter: 'D', text: 'Administrar tocolisis endovenosa y reposo absoluto', isCorrect: false },
        { letter: 'E', text: 'Aplicar estrógenos tópicos locales', isCorrect: false },
      ],
      correct: 'C',
      say: {
        stem: 'Analicemos esta pregunta real de julio de dos mil trece. Una mujer con veinte semanas de gestación y antecedente de dos pérdidas o partos prematuros espontáneos previos presenta una cervicometría con cuello corto de veinte milímetros.',
        question: 'Se pregunta por la conducta terapéutica más adecuada.',
        options: 'Las opciones son: opción A, perfil biofísico; opción B, corticoides y antibióticos; opción C, realizar cerclaje cervical quirúrgico; opción D, tocolisis endovenosa; y opción E, estrógenos tópicos. Piénsalo.',
        answer: 'La respuesta oficial es la opción C, realizar cerclaje cervical. En una paciente con cuello corto menor a veinticinco milímetros que además cuenta con el antecedente de partos prematuros previos recurrentes, la incompetencia cervical es el diagnóstico de certeza y el cerclaje cervical quirúrgico es la indicación de primera línea.',
      },
    },

    {
      type: 'points',
      kicker: 'Conceptos clave para el EUNACOM',
      title: 'Reglas de oro en ecografía obstétrica',
      cards: [
        {
          title: 'Cuatro certezas clínicas',
          kind: 'key',
          items: [
            {
              text: 'Translucencia nucal mayor o igual a tres milímetros orienta a Down y cardiopatías.',
              say: 'Primera regla: la translucencia nucal patológica mayor o igual a tres milímetros entre las once y catorce semanas exige estudio genético y ecocardiograma fetal.',
            },
            {
              text: 'Doppler uterino alterado exige Aspirina ciento cincuenta miligramos antes de la semana dieciséis.',
              say: 'Segunda regla: si el doppler de arterias uterinas a las once a catorce semanas muestra un índice de pulsatilidad sobre el percentil noventa y cinco, se prescribe aspirina nocturna antes de las dieciséis semanas.',
            },
            {
              text: 'Cuello corto menor o igual a veinticinco milímetros en cervicometría transvaginal.',
              say: 'Tercera regla: la cervicometría se mide por vía transvaginal a las veinte a veinticuatro semanas; si es menor o igual a veinticinco milímetros sin antecedentes previos se trata con progesterona vaginal.',
            },
            {
              text: 'Cerclaje cervical si hay antecedente de parto prematuro previo recurrente.',
              say: 'Cuarta regla: el cerclaje cervical se indica ante cuello corto en pacientes con historia obstétrica de incompetencia cervical o partos prematuros previos.',
            },
          ],
        },
        {
          title: 'Idea final',
          kind: 'normal',
          items: [
            {
              text: 'La longitud céfalo-nalgas de primer trimestre es el parámetro más exacto de datación.',
              say: 'Si te llevas una sola idea de hoy: la ecografía precoz mediante longitud céfalo-nalgas manda sobre cualquier fecha menstrual para fijar la edad gestacional definitiva del embarazo. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Manejo de Hallazgos en Ecografía Obstétrica',
    root: N(
      'start',
      'Ecografía obstétrica de tamizaje sistemático',
      'Evaluación de 11 a 14 semanas o de 20 a 24 semanas',
      'Iniciamos el enfrentamiento según el trimestre y el parámetro evaluado en la ecografía.',
      [
        'Primer trimestre: 11 a 14 semanas',
        N(
          'q',
          'Evaluación de translucencia nucal y doppler uterino',
          'LCN 45 a 84 mm · marcadores de cromosomopatía y resistencia placentaria',
          'Determinamos si el riesgo es genético o de insuficiencia placentaria.',
          [
            'Translucencia nucal ≥ 3.0 mm o hueso nasal ausente',
            N(
              'alert',
              'Alto riesgo de aneuploidía y cardiopatía',
              'Trisomía 21, 18, 13 · Turner · malformación cardíaca',
              'Frente a marcadores aneuploides alterados ofrecemos estudio citogenético diagnóstico.',
              [
                'Estudio genético invasivo',
                N(
                  'do',
                  'Biopsia de vellosidades coriales',
                  'Cariograma / microarray + ecocardiograma fetal a las 20 semanas',
                  'Indicamos biopsia corial y programamos ecocardiograma fetal posterior.',
                ),
              ],
            ),
          ],
          [
            'Doppler uterino alterado (IP medio > p95)',
            N(
              'do',
              'Prevención farmacológica de preeclampsia',
              'Aspirina 150 mg al día por la noche antes de las 16 semanas',
              'Iniciamos aspirina nocturna de inmediato antes de las dieciséis semanas hasta la semana treinta y seis.',
            ),
          ],
        ),
      ],
      [
        'Segundo trimestre: 20 a 24 semanas',
        N(
          'q',
          'Cervicometría transvaginal para riesgo de prematurez',
          'Medición de longitud cervical con vejiga vacía',
          'Evaluamos la longitud del cuello uterino y los antecedentes obstétricos.',
          [
            'Longitud cervical normal > 25 mm',
            N(
              'ok',
              'Bajo riesgo de parto prematuro',
              'Continuar control prenatal habitual',
              'Mantenemos el seguimiento habitual sin intervenciones farmacológicas.',
            ),
          ],
          [
            'Cuello corto ≤ 25 mm',
            N(
              'alert',
              'Alto riesgo de parto prematuro',
              'Definir conducta según antecedente obstétrico previo',
              'Estratificamos el manejo según si tiene o no partos prematuros espontáneos previos.',
              [
                'Sin antecedente de parto prematuro previo',
                N(
                  'do',
                  'Progesterona micronizada vaginal',
                  '200 mg al día por vía vaginal hasta la semana 36',
                  'Indicamos progesterona micronizada vaginal para prevenir el parto prematuro.',
                ),
              ],
              [
                'Con antecedente de parto prematuro espontáneo previo',
                N(
                  'do',
                  'Cerclaje cervical quirúrgico',
                  'Procedimiento quirúrgico antes de las 24 semanas',
                  'Indicamos cerclaje cervical quirúrgico para tratar la incompetencia cervical.',
                ),
              ],
            ),
          ],
        ),
      ],
    ),
  },
};
