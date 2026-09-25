// Clase 11.4 — guion docente escrito a mano (estándar Módulo 2 · Cirugía).
// Fuente clínica: books/scripts/dataset_cirugia.cjs (cir-04).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-04',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Fisiopatología, tetraedro cardinal, criterios de estrangulación, bridas, vólvulo de sigmoides y obstrucción por neoplasia',
      say: 'Bienvenidos a la cuarta clase de cirugía general. Hoy abordamos la obstrucción intestinal mecánica, causa que representa hasta una quinta parte de los ingresos por abdomen agudo. En esta clase aprenderás a diferenciar la obstrucción alta de la baja, a reconocer los signos de sufrimiento de asa o estrangulación, y a definir la conducta exacta frente a bridas, vólvulo de sigmoides y cáncer de colon. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología secuencial',
      title: 'Mecanismos de la oclusión luminal y estrangulación isquémica',
      nodes: [
        { id: 'ocl', col: 0, row: 2, k: 'start', t: 'Oclusión mecánica luminal', s: 'Intrínseca · extrínseca bridas · asa cerrada' },
        { id: 'acu', col: 1, row: 1, k: 'mech', t: 'Acumulación de gas y secreciones', s: 'Hasta ocho a diez litros de fluidos retenidos al día' },
        { id: 'dis', col: 2, row: 0, k: 'alert', t: 'Distensión e hiperperistaltismo', s: 'Dolor cólico intenso y ruidos metálicos de lucha' },
        { id: 'ter', col: 2, row: 2, k: 'risk', t: 'Pérdida al tercer espacio', s: 'Deshidratación grave, hipovolemia y shock' },
        { id: 'est', col: 3, row: 1, k: 'trap', t: 'Estrangulación y necrosis transmural', s: 'Trombosis venosa mesentérica y dolor continuo' },
        { id: 'per', col: 4, row: 2, k: 'alert', t: 'Perforación y peritonitis difusa', s: 'Shock séptico por traslocación bacteriana masiva' },
      ],
      edges: [
        { from: 'ocl', to: 'acu', label: 'detención distal' },
        { from: 'acu', to: 'dis', label: 'presión parietal' },
        { from: 'acu', to: 'ter', label: 'secuestro masivo' },
        { from: 'dis', to: 'est', label: 'isquemia por compresión' },
        { from: 'ter', to: 'est', label: 'hipoperfusión' },
        { from: 'est', to: 'per', label: 'gangrena libre' },
      ],
      steps: [
        {
          show: ['ocl', 'acu'],
          note: 'Inicio de la oclusión mecánica',
          say: 'Cuando se produce una oclusión mecánica de la luz intestinal, el flujo normal de gases y jugos digestivos se detiene por completo. El estómago, páncreas, hígado e intestino delgado producen entre ocho y diez litros diarios de secreciones. Todo este volumen, sumado al aire deglutido y al gas producido por fermentación bacteriana, se acumula progresivamente proximal al sitio del bloqueo.',
        },
        {
          show: ['dis'],
          note: 'Hiperperistaltismo y dolor cólico',
          say: 'Para intentar vencer el obstáculo mecánico, el músculo liso intestinal entra en una fase de hiperperistaltismo vigoroso. Esto genera el dolor cólico característico, intermitente y espasmódico, asociado en la auscultación a ruidos hidroaéreos aumentados de tono metálico, borborigmos audibles a distancia y bazuqueo por líquido batido contra aire.',
        },
        {
          show: ['ter'],
          note: 'Secuestro hidroelectrolítico masivo',
          say: 'La hipertensión intraluminal comprime la mucosa y deteriora la absorción, transformando la pared intestinal en una superficie neta de secreción. Gran cantidad de agua, sodio, potasio y cloro se secuestra en la luz intestinal y en la pared edematosa. Esta fuga al tercer espacio produce hipovolemia severa, hemoconcentración, alcalosis o acidosis metabólica e insuficiencia renal prerrenal.',
        },
        {
          show: ['est', 'per'],
          note: 'Estrangulación, gangrena y perforación',
          say: 'Si la presión parietal supera la presión capilar y venosa, o si existe una torsión mesentérica en asa cerrada, se produce isquemia parietal aguda y estrangulación. En este punto el dolor deja de ser cólico y se torna continuo y sordo. La necrosis transmural permite la traslocación masiva de enterobacterias y toxinas hacia la cavidad peritoneal, culminando en gangrena, perforación diastásica y peritonitis séptica letal.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Semiología y presentación clínica',
      title: 'Tetraedro cardinal y diferenciación según nivel anatómico',
      cards: [
        {
          title: 'Tetraedro cardinal de la obstrucción',
          kind: 'criteria',
          items: [
            {
              text: 'Dolor cólico abdominal: intermitente en crisis, periumbilical o difuso.',
              say: 'El primer elemento es el dolor abdominal tipo cólico, que coincide con las ondas de hiperperistaltismo de lucha. En fases tempranas es paroxístico e intermitente. Una advertencia de oro para el examen: si el dolor pierde su intermitencia y se vuelve continuo, punzante y rebelde a analgésicos, debemos asumir de inmediato sufrimiento de asa o estrangulación.',
            },
            {
              text: 'Distensión abdominal: mínima en oclusión alta y masiva en oclusión colónica baja.',
              say: 'El segundo elemento es la distensión. En obstrucciones altas de duodeno o yeyuno proximal, la distensión es mínima porque el estómago se vacía con los vómitos. Por el contrario, en obstrucciones bajas de íleon terminal o colon sigmoides, la distensión es evidente, difusa y timpánica.',
            },
            {
              text: 'Vómitos y detención de gases y heces por ano.',
              say: 'El tercer elemento son los vómitos: precoces y biliosos en obstrucciones altas; tardíos, espesos y fecaloideos en obstrucciones bajas. El cuarto elemento es la detención completa de emisión de gases y heces por el recto, signo universal de oclusión mecánica establecida.',
            },
          ],
        },
        {
          title: 'Etiología según nivel anatómico',
          kind: 'key',
          items: [
            {
              text: 'Intestino delgado: bridas y adherencias postoperatorias en el sesenta a setenta por ciento.',
              say: 'En el intestino delgado, la causa más frecuente con diferencia son las bridas o adherencias postoperatorias, responsables de hasta el setenta por ciento de los casos, seguidas por las hernias inguinales o crurales atascadas en un quince a veinte por ciento. La presencia de cicatrices de laparotomía previa es el antecedente clave.',
            },
            {
              text: 'Colon: cáncer colorrectal en el sesenta por ciento y vólvulo de sigmoides en el quince a veinte por ciento.',
              say: 'En el colon, la causa número uno en adultos mayores es el cáncer de colon, habitualmente del lado izquierdo o rectosigmoides, seguido por el vólvulo de sigmoides y la diverticulitis con estenosis cicatrizal.',
            },
          ],
        },
        {
          title: 'Regla de seguridad: Examen de orificios herniarios',
          kind: 'alert',
          items: [
            {
              text: 'Obligación médica: palpar siempre la región inguinal y crural en todo paciente obstruido.',
              say: 'Nunca des por terminado el examen físico de un paciente con sospecha de obstrucción sin palpar minuciosamente los orificios herniarios inguinales y femorales. Pasar por alto una pequeña hernia crural atascada bajo el ligamento inguinal en una paciente anciana es un error gravísimo sancionado en el EUNACOM.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Evaluación diagnóstica',
      title: 'Hallazgos imagenológicos: Radiología simple versus Tomografía computarizada',
      head: ['Modalidad', 'Signos radiológicos característicos', 'Utilidad clínica principal', 'Limitación o advertencia'],
      rows: [
        {
          cells: [
            'Radiografía simple de abdomen de pie y decúbito',
            'Niveles hidroaéreos en escalera · distribución central · pliegues de conniventes que cruzan toda la luz (delgado) o marco periférico con haustras (colon)',
            'Estudio inicial rápido y accesible en urgencias para confirmar dilatación de asas.',
            'Baja sensibilidad para diagnosticar la causa exacta; no evalúa adecuadamente la isquemia mural.',
          ],
          say: 'La radiografía simple de abdomen de pie y en decúbito es el estudio inicial. En intestino delgado muestra asas dilatadas mayores a tres centímetros en el centro del abdomen, con niveles hidroaéreos en escalera y válvulas conniventes que cruzan toda la luz como pilas de monedas. En colon se observa distensión periférica en marco con haustras que no cruzan por completo el diámetro.',
        },
        {
          cells: [
            'Radiografía en Vólvulo de Sigmoides',
            'Signo del grano de café o asa en omega invertida que asciende desde la fosa ilíaca izquierda hacia el hipocondrio derecho',
            'Diagnóstico visual casi patognomónico del vólvulo sigmoideo en el adulto mayor institucionalizado.',
            'Si hay neumoperitoneo o ausencia de gas distal, alerta sobre gangrena o perforación.',
          ],
          say: 'En el vólvulo de sigmoides, la radiografía simple es altamente orientadora: muestra una enorme asa colónica sobredistendida sin haustras que adopta la forma de un grano de café o de una U invertida, cuyo vértice apunta hacia el hipocondrio derecho o epigastrio, con escaso gas en la ampolla rectal.',
        },
        {
          cells: [
            'Tomografía axial computarizada con contraste intravenoso',
            'Zona de transición con cambio de calibre abrupto · signo del remolino en vólvulo · neumatosis intestinal · defecto de realce mural',
            'Estándar de oro indiscutido: identifica la etiología exacta y pesquisa sufrimiento de asa precoz.',
            'Requiere estabilidad hemodinámica y función renal compatible con medio de contraste iodado.',
          ],
          say: 'La tomografía computarizada de abdomen y pelvis con contraste intravenoso es el estándar de oro actual. Identifica con exactitud el punto de transición entre asas dilatadas y colapsadas, detecta el signo del remolino mesentérico en los vólvulos y revela signos de sufrimiento de asa como neumatosis parietal, gas en la vena porta y ausencia de realce con el contraste.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Criterios de alarma quirúrgica',
      title: 'Signos cardinales de estrangulación y sufrimiento de asa',
      cards: [
        {
          title: 'Clínica de sufrimiento vascular',
          kind: 'alert',
          items: [
            {
              text: 'Dolor continuo, constante y desproporcionado que pierde su carácter cólico intermitente.',
              say: 'El primer signo de alarma es el cambio en el patrón del dolor: deja de presentarse en crisis intermitentes y se convierte en un dolor continuo, intenso y sordo que no cede con antiespasmódicos ni analgesia habitual.',
            },
            {
              text: 'Aparición de signos de irritación peritoneal focal o generalizada: Blumberg y defensa parietal.',
              say: 'La aparición de resistencia muscular involuntaria a la palpación y signo de Blumberg positivo traduce inflamación de la serosa parietal por isquemia transmural o necrosis incipiente.',
            },
          ],
        },
        {
          title: 'Compromiso sistémico y laboratorio',
          kind: 'criteria',
          items: [
            {
              text: 'Fiebre mayor a treinta y ocho grados y taquicardia mantenida mayor a cien latidos por minuto.',
              say: 'La fiebre sostenida y la taquicardia desproporcionada que no responde a la reposición de volumen alertan sobre respuesta inflamatoria sistémica o sepsis de origen entérico.',
            },
            {
              text: 'Leucocitosis marcada con desviación izquierda y elevación del lactato sérico.',
              say: 'En el laboratorio destaca leucocitosis mayor a quince mil glóbulos blancos con neutrofilia y, fundamentalmente, la elevación del lactato en sangre venosa o arterial. El lactato elevado es un marcador precoz y sensible de hipoperfusión tisular e isquemia mesentérica.',
            },
          ],
        },
        {
          title: 'Asa cerrada y dilatación cecal crítica',
          kind: 'key',
          items: [
            {
              text: 'Obstrucción en asa cerrada con válvula ileocecal continente: peligro de perforación.',
              say: 'Cuando existe una obstrucción colónica y la válvula ileocecal es continente, el colon se comporta como un asa cerrada. Según la ley de Laplace, a mayor diámetro mayor tensión de pared. El ciego es el segmento más ancho del colon, por lo que una dilatación cecal superior a diez a doce centímetros implica un riesgo inminente de perforación diastásica.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo terapéutico',
      title: 'Manejo escalonado según etiología: Bridas versus Vólvulo versus Cáncer',
      say: 'Revisemos el algoritmo terapéutico para la obstrucción intestinal según la presencia de estrangulación y la causa subyacente.',
    },

    {
      type: 'points',
      kicker: 'Manejo según causa',
      title: 'Estrategias terapéuticas específicas en obstrucción intestinal',
      cards: [
        {
          title: 'Obstrucción por bridas: Manejo médico conservador inicial',
          kind: 'pharma',
          items: [
            {
              text: 'Régimen cero, hidratación parenteral vigorosa y sonda nasogástrica descompresiva.',
              say: 'En un paciente con obstrucción de intestino delgado por bridas sin signos de estrangulación ni peritonitis, la conducta inicial de elección es el tratamiento médico conservador. Se indica régimen cero absoluto, reposición hidroelectrolítica endovenosa vigorosa y descompresión gástrica mediante sonda nasogástrica a caída libre.',
            },
            {
              text: 'Periodo de prueba de veinticuatro a cuarenta y ocho horas; resuelve en el setenta por ciento.',
              say: 'Este manejo conservador se mantiene durante veinticuatro a cuarenta y ocho horas. Resuelve favorablemente en más del setenta por ciento de los casos al desinflamar la pared y facilitar el tránsito. Si al cabo de este plazo el paciente no mejora, aumentan los residuos gástricos o aparecen signos de estrangulación, se pasa de inmediato a cirugía exploradora.',
            },
          ],
        },
        {
          title: 'Vólvulo de sigmoides: Desvolvulación endoscópica',
          kind: 'key',
          items: [
            {
              text: 'Desvolvulación endoscópica con sigmoidoscopía rígida o colonoscopía en ausencia de necrosis.',
              say: 'En el vólvulo de sigmoides no complicado, sin fiebre, peritonismo ni sospecha de isquemia mucosa, el tratamiento de primera línea es la desvolvulación y descompresión endoscópica mediante rectosigmoidoscopía o colonoscopía, guiando una sonda rectal descompresiva.',
            },
            {
              text: 'Cirugía electiva diferida en la misma hospitalización para evitar recurrencia.',
              say: 'La desvolvulación endoscópica tiene una tasa de recurrencia que supera el cincuenta por ciento. Por esta razón, tras descomprimir con éxito y preparar el colon, se programa una sigmoidectomía electiva con anastomosis primaria durante la misma estancia hospitalaria.',
            },
            {
              text: 'Si hay necrosis mucosa o peritonitis: Operación de Hartmann urgente sin intentar endoscopía.',
              say: 'Si al introducir el endoscopio se observa mucosa necrótica negruzca, ulcerada o si el paciente presenta abdomen en tabla y shock séptico, la desvolvulación endoscópica está prohibida por riesgo de perforación y se indica laparotomía de urgencia con operación de Hartmann.',
            },
          ],
        },
        {
          title: 'Cáncer colorrectal obstructivo',
          kind: 'alert',
          items: [
            {
              text: 'Urgencia oncológica: resección con Hartmann versus stent colónico autoexpandible.',
              say: 'En el cáncer obstructivo de colon izquierdo en urgencias, la técnica quirúrgica clásica es la operación de Hartmann. En centros especializados y en pacientes seleccionados, se puede instalar una prótesis o stent metálico autoexpandible por vía endoscópica para desobstruir el colon como puente a una cirugía electiva curativa en un solo tiempo.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnósticos diferenciales y trampas',
      title: 'Trampas del EUNACOM en cuadros oclusivos y pseudooclusivos',
      head: ['Patología simuladora', 'Perfil típico del paciente', 'Mecanismo o hallazgo clave', 'Conducta terapéutica correcta'],
      rows: [
        {
          cells: [
            'Íleo paralítico o adinámico',
            'Paciente postoperado abdominal reciente, en uso de opioides a altas dosis o con hipokalemia severa',
            'Distensión difusa con silencio auscultatorio absoluto, sin ruidos metálicos de lucha y con gas distribuido en todo el marco colónico y delgado',
            'Manejo de la causa de base: suspender opioides, corregir el potasio y deambulación precoz sin necesidad de cirugía.',
          ],
          say: 'El íleo adinámico o paralítico ocurre con frecuencia tras cirugías abdominales, por hipokalemia grave o por sobredosis de opioides. A diferencia de la obstrucción mecánica, no hay dolor cólico en crisis ni ruidos de lucha, sino un abdomen distendido con silencio auscultatorio total y gas en todo el intestino. Se trata corrigiendo la causa de base.',
        },
        {
          cells: [
            'Síndrome de Ogilvie (Pseudoobstrucción colónica aguda)',
            'Paciente añoso postrado, traumatizado, con enfermedad neurológica o postcesárea en cama',
            'Dilatación masiva y aislada del colon derecho y ciego sin ninguna lesión obstructiva mecánica visible en la tomografía',
            'Descompresión médica con neostigmina endovenosa bajo monitorización cardíaca o descompresión colonoscópica.',
          ],
          say: 'El síndrome de Ogilvie es una pseudoobstrucción colónica aguda caracterizada por una dilatación masiva del ciego y colon ascendente en pacientes añosos institucionalizados o postquirúrgicos, sin una lesión mecánica orgánica. Si el ciego supera diez a doce centímetros, se trata con neostigmina endovenosa o descompresión colonoscópica para evitar la perforación cecal.',
        },
        {
          cells: [
            'Hernia crural atascada en mujer añosa',
            'Mujer mayor delgada que consulta por vómitos y dolor abdominal cólico con distensión leve',
            'Masa dolorosa, no reductible, de pequeño tamaño ubicada exactamente por debajo del ligamento inguinal',
            'Cirugía de urgencia inmediata para hernioplastia y eventual resección intestinal si hay sufrimiento.',
          ],
          say: 'Una clásica trampa del examen consiste en presentar una paciente anciana con cuadro de obstrucción de intestino delgado sin cirugías previas. El examinador siempre debe buscar una hernia crural pequeña e inadvertida en la raíz del muslo. Requiere cirugía de urgencia inmediata.',
        },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 53',
      caseText: 'Un paciente de treinta y ocho años, con antecedente de cirugía bariátrica previa, consulta por dolor abdominal tipo cólico y vómitos de diez horas de evolución, que inició al día siguiente de una gran ingesta de alcohol y alimentos. Refiere que no ha eliminado gases. Al examen físico está adolorido, con frecuencia cardíaca de ciento seis por minuto, presión arterial de ciento veinte con ochenta y temperatura de treinta y siete coma seis grados. El abdomen se aprecia distendido y es doloroso a la palpación, sin signo de Blumberg. Se auscultan ruidos hidroaéreos aumentados de intensidad y bazuqueo. ¿Cuál es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Pancreatitis aguda', isCorrect: false },
        { letter: 'B', text: 'Embolia mesentérica', isCorrect: false },
        { letter: 'C', text: 'Úlcera gastroduodenal complicada', isCorrect: false },
        { letter: 'D', text: 'Colecistitis aguda', isCorrect: false },
        { letter: 'E', text: 'Obstrucción intestinal por bridas', isCorrect: true },
      ],
      correct: 'E',
      say: {
        stem: 'Revisemos esta pregunta real de diciembre de dos mil dieciocho. Un paciente de treinta y ocho años con antecedente de cirugía bariátrica consulta por dolor cólico, vómitos, ausencia de eliminación de gases y distensión abdominal. En la auscultación presenta ruidos de lucha aumentados y bazuqueo, sin signos de peritonitis.',
        question: 'Nos consultan por el diagnóstico más probable.',
        options: 'Las alternativas son: opción A, pancreatitis aguda; opción B, embolia mesentérica; opción C, úlcera gastroduodenal complicada; opción D, colecistitis aguda; y opción E, obstrucción intestinal por bridas.',
        answer: 'La respuesta correcta es la opción E, obstrucción intestinal por bridas. El antecedente quirúrgico de laparotomía o laparoscopía bariátrica previa es el factor de riesgo fundamental. El cuadro clínico reúne el tetraedro típico de obstrucción de intestino delgado con ruidos de lucha conservados.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2022 · Pregunta 128',
      caseText: 'Un paciente de cincuenta y ocho años presenta dolor abdominal intenso, tipo cólico, asociado a náuseas y distensión abdominal. Sus últimas deposiciones fueron hace dos días y no ha eliminado gases por ano desde ayer. Sus signos vitales muestran temperatura de treinta y seis coma ocho grados, frecuencia cardíaca de noventa y seis por minuto, presión arterial de ciento cuarenta y cuatro con noventa y dos. Abdomen distendido, doloroso a la palpación, con signo de Blumberg esbozado. En la auscultación abdominal presenta bazuqueo intestinal y disminución de los ruidos hidroaéreos. Como antecedentes médico-quirúrgicos, es diabético en metformina y se realizó apendicectomía hace diez años. ¿Cuál es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Vólvulo de sigmoides', isCorrect: false },
        { letter: 'B', text: 'Isquemia mesentérica', isCorrect: false },
        { letter: 'C', text: 'Gastroenteritis aguda', isCorrect: false },
        { letter: 'D', text: 'Obstrucción intestinal', isCorrect: true },
        { letter: 'E', text: 'Cáncer de colon perforado', isCorrect: false },
      ],
      correct: 'D',
      say: {
        stem: 'Analicemos esta pregunta de diciembre de dos mil veintidós. Un paciente de cincuenta y ocho años con antecedente de apendicectomía previa debuta con dolor cólico, distensión, ausencia de deposiciones y gases, y bazuqueo auscultatorio.',
        question: 'Se pregunta cuál es el diagnóstico más probable.',
        options: 'Las alternativas son: opción A, vólvulo de sigmoides; opción B, isquemia mesentérica; opción C, gastroenteritis aguda; opción D, obstrucción intestinal; y opción E, cáncer de colon perforado.',
        answer: 'La respuesta correcta es la opción D, obstrucción intestinal mecánica. El cuadro es categórico para un síndrome oclusivo secundario a bridas o adherencias postapendicectomía, con detención de evacuaciones y dilatación con bazuqueo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      caseText: 'Un hombre de setenta y cuatro años, institucionalizado por demencia senil y con antecedente de constipación crónica pertinaz, es llevado a urgencias por distensión abdominal masiva y progresiva de cuarenta y ocho horas de evolución, sin emisión de heces ni gases. Al examen físico está afebril, hemodinámicamente estable, con abdomen enormemente distendido y timpánico, indoloro a la palpación superficial y sin signos de irritación peritoneal. La radiografía simple de abdomen muestra una gran asa en omega que se origina en la pelvis y asciende hasta el cuadrante superior derecho con aspecto en grano de café. ¿Cuál es la conducta inicial de elección?',
      question: '¿Cuál es la conducta inicial de elección?',
      options: [
        { letter: 'A', text: 'Laparotomía exploradora de urgencia con operación de Hartmann', isCorrect: false },
        { letter: 'B', text: 'Desvolvulación y descompresión endoscópica mediante rectosigmoidoscopía', isCorrect: true },
        { letter: 'C', text: 'Instalación de sonda nasogástrica y tratamiento médico exclusivo', isCorrect: false },
        { letter: 'D', text: 'Administración de enemas evacuantes de fosfato y laxantes orales', isCorrect: false },
        { letter: 'E', text: 'Punción descompresiva percutánea con aguja de la pared abdominal', isCorrect: false },
      ],
      correct: 'B',
      say: {
        stem: 'Revisemos este caso representativo de vólvulo de sigmoides. Un paciente anciano con constipación crónica presenta distensión masiva indolora y una radiografía clásica con signo del grano de café, sin signos de peritonitis ni compromiso hemodinámico.',
        question: 'Nos consultan por la conducta inicial de elección.',
        options: 'Las opciones son: opción A, laparotomía exploradora con operación de Hartmann; opción B, desvolvulación y descompresión endoscópica mediante rectosigmoidoscopía; opción C, sonda nasogástrica y tratamiento médico exclusivo; opción D, enemas evacuantes; y opción E, punción con aguja.',
        answer: 'La respuesta correcta es la opción B. Ante un vólvulo de sigmoides no complicado, sin necrosis mucosa ni signos peritoneales, el procedimiento inicial de elección es la desvolvulación y descompresión endoscópica mediante sigmoidoscopía rígida o flexible. Esto resuelve la urgencia y permite planificar una cirugía electiva en la misma hospitalización.',
      },
    },

    {
      type: 'points',
      kicker: 'Conceptos clave para el EUNACOM',
      title: 'Reglas de oro en obstrucción intestinal mecánica',
      cards: [
        {
          title: 'Cuatro certezas clínicas',
          kind: 'key',
          items: [
            {
              text: 'Causas cardinales: bridas en intestino delgado y cáncer en colon.',
              say: 'Primera regla: la causa más frecuente de obstrucción mecánica en intestino delgado son las bridas postoperatorias; en el colon, la causa predominante es el cáncer colorrectal, seguido del vólvulo sigmoideo.',
            },
            {
              text: 'Dolor continuo, fiebre o lactato elevado exigen laparotomía inmediata.',
              say: 'Segunda regla: el dolor que deja de ser cólico y se torna continuo, la fiebre, la taquicardia o la elevación del lactato traducen estrangulación y sufrimiento de asa, obligando a cirugía inmediata.',
            },
            {
              text: 'Las bridas sin estrangulación se manejan médicamente por veinticuatro a cuarenta y ocho horas.',
              say: 'Tercera regla: la obstrucción por bridas sin signos peritoneales se maneja inicialmente con reposo gástrico mediante sonda nasogástrica e hidratación endovenosa por veinticuatro a cuarenta y ocho horas.',
            },
            {
              text: 'El vólvulo de sigmoides estable se descomprime primero por vía endoscópica.',
              say: 'Cuarta regla: el vólvulo de sigmoides sin peritonitis ni necrosis se trata inicialmente con desvolvulación endoscópica; si hay necrosis o perforación, la conducta es la operación de Hartmann urgente.',
            },
          ],
        },
        {
          title: 'Idea final',
          kind: 'normal',
          items: [
            {
              text: 'Palpar siempre orificios herniarios y vigilar el ciego en asa cerrada.',
              say: 'Si te llevas una sola idea de hoy: en todo paciente con abdomen distendido debes palpar los orificios herniarios para descartar una hernia crural atascada, y recordar que un ciego mayor a diez a doce centímetros en asa cerrada está al borde de la perforación diastásica. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Decisión Terapéutica en Obstrucción Intestinal Mecánica',
    root: N(
      'start',
      'Sospecha de obstrucción intestinal mecánica',
      'Tetraedro: dolor cólico · vómitos · distensión · detención de gases y heces',
      'Iniciamos el enfrentamiento clínico evaluando la presencia de signos de sufrimiento de asa o estrangulación.',
      [
        'Signos de estrangulación presentes',
        N(
          'alert',
          'Sufrimiento de asa o peritonitis difusa',
          'Dolor continuo · fiebre · taquicardia · Blumberg (+) · lactato elevado',
          'Si el dolor se vuelve continuo o hay peritonismo y lactato elevado, asumimos estrangulación y contraindicamos el manejo conservador.',
          [
            'Conducta de urgencia',
            N(
              'do',
              'Laparotomía o laparoscopía exploradora de urgencia',
              'Reanimación con fluidos EV + antibióticos + cirugía descompresiva y resección',
              'Indicamos cirugía de urgencia inmediata para resecación del segmento desvitalizado y liberación de la obstrucción.',
            ),
          ],
        ),
      ],
      [
        'Sin signos de estrangulación',
        N(
          'q',
          'Determinar nivel y causa anatómica de la obstrucción',
          'Radiografía simple de abdomen y tomografía computarizada con contraste',
          'En ausencia de peritonitis, solicitamos estudio imagenológico para identificar la causa exacta del bloqueo.',
          [
            'Intestino delgado con antecedente quirúrgico (Bridas)',
            N(
              'do',
              'Tratamiento médico conservador inicial',
              'Sonda nasogástrica a caída libre + régimen cero + fluidos EV',
              'En bridas no complicadas indicamos sonda nasogástrica e hidratación parenteral vigorosa durante veinticuatro a cuarenta y ocho horas.',
              [
                'Resolución clínica < 48 horas',
                N(
                  'ok',
                  'Éxito del manejo conservador',
                  'Disminución del débito por SNG · eliminación de gases · realimentación',
                  'Si el paciente reanuda el tránsito y disminuye el débito por sonda, retiramos la sonda nasogástrica y reiniciamos vía oral.',
                ),
              ],
              [
                'Fracaso médico o persistencia a las 48 horas',
                N(
                  'alert',
                  'Cirugía: Adhesiolisis quirúrgica',
                  'Ausencia de progreso clínico o aumento de residuo gástrico',
                  'Si no resuelve en cuarenta y ocho horas, indicamos cirugía para liberación de bridas y adherencias.',
                ),
              ],
            ),
          ],
          [
            'Vólvulo de sigmoides confirmado (Grano de café)',
            N(
              'q',
              'Evaluar indemnidad de mucosa y signos peritoneales',
              'Asa en omega · ciego y colon ascendente dilatados',
              'Frente a un vólvulo de sigmoides, evaluamos la presencia de peritonitis o necrosis transmural.',
              [
                'Paciente estable sin signos de necrosis',
                N(
                  'do',
                  'Desvolvulación y descompresión endoscópica',
                  'Sigmoidoscopía con sonda rectal descompresiva',
                  'Realizamos desvolvulación endoscópica descompresiva e indicamos sigmoidectomía electiva en la misma hospitalización.',
                ),
              ],
              [
                'Mucosa necrótica o peritonitis generalizada',
                N(
                  'alert',
                  'Operación de Hartmann de urgencia',
                  'Laparotomía inmediata · sigmoidectomía y colostomía terminal',
                  'Ante necrosis o peritonitis, indicamos laparotomía de urgencia para realizar la operación de Hartmann.',
                ),
              ],
            ),
          ],
          [
            'Cáncer de colon obstructivo',
            N(
              'do',
              'Cirugía de urgencia vs Stent colónico',
              'Operación de Hartmann o prótesis metálica autoexpandible como puente',
              'En neoplasia obstructiva colónica se indica operación de Hartmann o stent colónico en centros especializados.',
            ),
          ],
        ),
      ],
    ),
  },
};
