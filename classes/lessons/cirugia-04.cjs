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
      kicker: 'Semiología física',
      title: 'Tetraedro cardinal y exploración obligatoria de orificios herniarios',
      cards: [
        {
          title: 'Tetraedro cardinal de la obstrucción',
          kind: 'criteria',
          items: [
            {
              text: 'Dolor abdominal cólico: crisis paroxísticas que coinciden con ondas de hiperperistaltismo.',
              say: 'El primer elemento es el dolor cólico intermitente. Si el dolor pierde su periodicidad y se vuelve continuo, punzante y refractario, debemos asumir de inmediato sufrimiento vascular del asa o estrangulación.',
            },
            {
              text: 'Distensión abdominal: central en intestino delgado y periférica en marco en el colon.',
              say: 'El segundo elemento es la distensión abdominal timpánica. En obstrucciones altas de duodeno o yeyuno proximal es mínima por evacuación gástrica, mientras que en colon o íleon distal es masiva y difusa.',
            },
            {
              text: 'Vómitos y detención de eliminación de gases y deposiciones por el recto.',
              say: 'El tercer elemento son los vómitos: precoces y biliosos en obstrucción alta; tardíos y fecaloideos en obstrucción baja. El cuarto elemento es la detención completa de emisión de gases y heces.',
            },
          ],
        },
        {
          title: 'Exploración de orificios herniarios',
          kind: 'alert',
          items: [
            {
              text: 'Palpación sistemática obligatoria de regiones inguinales, crurales y cicatrices previas.',
              say: 'Nunca des por concluido el examen físico sin palpar cuidadosamente los orificios herniarios inguinales y femorales. Pasar por alto una pequeña hernia crural atascada bajo el ligamento inguinal en una paciente anciana es un error gravísimo sancionado en el EUNACOM.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Diferenciación anatómica',
      title: 'Obstrucción de intestino delgado versus Obstrucción de colon',
      head: ['Parámetro clínico', 'Obstrucción de intestino delgado', 'Obstrucción de colon', 'Implicancia diagnóstica'],
      rows: [
        {
          cells: [
            'Etiología principal',
            'Bridas y adherencias postoperatorias (60 a 70%) · hernias atascadas (15 a 20%)',
            'Cáncer de colon izquierdo (60%) · vólvulo de sigmoides (15 a 20%) · diverticulitis',
            'Indagar siempre antecedentes quirúrgicos de laparotomías o laparoscopías previas.',
          ],
          say: 'En el intestino delgado, la causa número uno por lejos son las bridas postoperatorias, seguidas por hernias de pared complicadas. En el colon, la causa predominante en adultos mayores es el cáncer colorrectal, seguido por el vólvulo de sigmoides.',
        },
        {
          cells: [
            'Patrón de distensión',
            'Distensión moderada predominantemente central en mesogastrio',
            'Distensión masiva periférica en marco cólico con timpanismo acentuado',
            'Permite sospechar precozmente la altura topográfica del obstáculo en el examen físico.',
          ],
          say: 'La distensión en delgado es central y moderada, mientras que en colon es periférica en marco, a menudo masiva y muy llamativa a la inspección visual.',
        },
        {
          cells: [
            'Características del vómito',
            'Precoces, frecuentes, copiosos y de aspecto bilioso o porráceo',
            'Tardíos, escasos o ausentes inicialmente; fecaloideos en etapas evolucionadas',
            'La precocidad de los vómitos traduce un nivel obstructivo proximal al ángulo de Treitz.',
          ],
          say: 'Los vómitos en delgado alto son tempranos, abundantes y biliosos. En colon son tardíos y de aspecto francamente fecaloideo por fermentación bacteriana bacteriana prolongada.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico por imágenes',
      title: 'Radiología simple versus Tomografía axial computarizada',
      cards: [
        {
          title: 'Radiografía de abdomen de pie y decúbito',
          kind: 'key',
          items: [
            {
              text: 'Niveles hidroaéreos en escalera y válvulas conniventes en pila de monedas en delgado.',
              say: 'La radiografía simple de abdomen es el estudio inicial. En intestino delgado revela asas dilatadas mayores a tres centímetros, niveles hidroaéreos en escalera y válvulas conniventes que cruzan toda la circunferencia luminal.',
            },
            {
              text: 'Haustras periféricas que no cruzan por completo la luz en obstrucción de colon.',
              say: 'En colon se observan asas mayores a seis centímetros ubicadas en la periferia, cuyas haustras colónicas no cruzan la totalidad de la pared.',
            },
          ],
        },
        {
          title: 'Tomografía computarizada con contraste intravenoso',
          kind: 'criteria',
          items: [
            {
              text: 'Estándar de oro indiscutido: identifica punto de transición y signos de isquemia precoz.',
              say: 'La tomografía computarizada con contraste endovenoso es el examen de elección. Identifica con exactitud milimétrica la zona de transición y diagnostica precozmente el sufrimiento vascular del asa mediante neumatosis intestinal y defecto de realce mural.',
            },
            {
              text: 'Signo del remolino mesentérico patognomónico de torsión en vólvulos.',
              say: 'En vólvulos de sigmoides o de ciego, la tomografía demuestra el signo del remolino formado por la rotación del mesenterio y los vasos sobre su propio eje.',
            },
          ],
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
      ],
    },

    {
      type: 'table',
      kicker: 'Mecánica de asa cerrada',
      title: 'Ley de Laplace y riesgo de perforación diastásica del ciego',
      head: ['Condición de la válvula', 'Dinámica intraluminal', 'Punto de máxima tensión', 'Riesgo y conducta'],
      rows: [
        {
          cells: [
            'Válvula ileocecal continente (75%)',
            'Obstrucción en asa cerrada entre el tumor distal y la válvula cerrada',
            'Ciego: segmento con mayor radio colónico según ley de Laplace',
            'Diámetro cecal mayor a diez a doce centímetros implica riesgo inminente de rotura; cirugía inmediata.',
          ],
          say: 'Si la válvula ileocecal es continente, el colon entre el tumor y la válvula se convierte en un asa cerrada hermética. La ley de Laplace establece que la tensión de pared es proporcional a la presión multiplicada por el radio. Al ser el ciego el segmento con mayor diámetro del colon, alcanza la tensión mural más alta y sufre perforación diastásica por estiramiento isquémico si supera los diez a doce centímetros.',
        },
        {
          cells: [
            'Válvula ileocecal incompetente (25%)',
            'Reflujo retrógrado de gas y secreciones hacia el íleon delgado',
            'Descompresión parcial del colon hacia asas delgadas',
            'Disminuye el riesgo de rotura diastásica aguda, pero genera gran distensión y vómitos fecaloideos.',
          ],
          say: 'Si la válvula ileocecal es incompetente, la presión colónica refluye hacia el intestino delgado descompresionando el ciego. Esto atenúa el peligro inmediato de rotura cecal pero produce dilatación de asas delgadas y vómitos fecaloideos abundantes.',
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
      kicker: 'Manejo de bridas',
      title: 'Protocolo de manejo conservador y contraste hidrosoluble',
      cards: [
        {
          title: 'Tratamiento conservador de primera línea',
          kind: 'key',
          items: [
            {
              text: 'Régimen cero, hidratación parenteral vigorosa con cristaloides y sonda nasogástrica.',
              say: 'En obstrucción por bridas sin estrangulación ni peritonitis, la conducta estándar es el manejo conservador: régimen cero, hidratación parenteral generosa con cristaloides para reponer pérdidas a tercer espacio y sonda nasogástrica a caída libre.',
            },
            {
              text: 'Éxito en más del setenta por ciento en veinticuatro a cuarenta y ocho horas.',
              say: 'Este manejo resuelve la oclusión en más de dos tercios de los pacientes al disminuir el edema de asa y permitir el paso espontáneo de contenido. Si no hay resolución en cuarenta y ocho horas, se evalúa cirugía.',
            },
          ],
        },
        {
          title: 'Uso de contraste hidrosoluble: Gastrografin',
          kind: 'pharma',
          items: [
            {
              text: 'Prueba de Gastrografin: valor diagnóstico y terapéutico hiperosmolar.',
              say: 'La administración de cien mililitros de contraste hidrosoluble por la sonda nasogástrica tiene doble función: su alta osmolaridad arrastra agua al lumen desimpactando el asa, y si a las veinticuatro horas el contraste alcanza el colon en una radiografía simple, predice resolución médica en más del noventa por ciento.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Vólvulo de sigmoides',
      title: 'Desvolvulación endoscópica versus Cirugía urgente',
      cards: [
        {
          title: 'Epidemiología y diagnóstico radiológico',
          kind: 'key',
          items: [
            {
              text: 'Adulto mayor institucionalizado con constipación crónica o megacolon chagásico.',
              say: 'El vólvulo de sigmoides afecta típicamente a pacientes ancianos con constipación de larga data, pacientes postrados o con megacolon chagásico en el norte de Chile.',
            },
            {
              text: 'Radiografía de abdomen con signo patognomónico del grano de café o asa en U invertida.',
              say: 'La radiografía simple es diagnóstica: muestra una enorme asa sigmoidea que asciende hacia el hipocondrio derecho con aspecto de grano de café sin haustras.',
            },
          ],
        },
        {
          title: 'Manejo en dos tiempos',
          kind: 'alert',
          items: [
            {
              text: 'Primera línea en ausencia de necrosis: desvolvulación endoscópica con sonda rectal.',
              say: 'Si no hay peritonitis ni signos de necrosis, el tratamiento inicial es la desvolvulación mediante proctosigmoidoscopía rígida o flexible y descompresión con sonda rectal.',
            },
            {
              text: 'Cirugía electiva en la misma hospitalización; si hay necrosis, Operación de Hartmann urgente.',
              say: 'Dada la recidiva sobre el cincuenta por ciento, se programa sigmoidectomía electiva en la misma hospitalización. Si la mucosa está negra o hay peritonitis, se realiza operación de Hartmann urgente.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Vólvulo de ciego',
      title: 'Asa en coma hacia hipocondrio izquierdo y conducta quirúrgica urgente',
      cards: [
        {
          title: 'Fisiopatología y hallazgo radiográfico',
          kind: 'criteria',
          items: [
            {
              text: 'Falla en la fijación retroperitoneal del ciego y colon ascendente (ciego móvil).',
              say: 'El vólvulo de ciego ocurre por anomalías de fijación embrionaria del ciego al retroperitoneo, originando un ciego móvil con mesenterio laxo en pacientes más jóvenes.',
            },
            {
              text: 'Radiografía de abdomen: asa en coma o riñón que migra hacia el hipocondrio izquierdo.',
              say: 'La imagen radiológica clásica es un asa dilatada que asciende desde la fosa ilíaca derecha hacia el hipocondrio izquierdo o epigastrio, adoptando forma de coma o de lágrima.',
            },
          ],
        },
        {
          title: 'Conducta formal obligatoria',
          kind: 'alert',
          items: [
            {
              text: 'La desvolvulación endoscópica está formalmente contraindicada.',
              say: 'Una trampa mayor del examen: nunca se intenta desvolvulación endoscópica en el vólvulo de ciego por tasa de éxito casi nula y altísimo riesgo de perforación cecal catastrófica.',
            },
            {
              text: 'Tratamiento de elección: hemicolectomía derecha de urgencia.',
              say: 'El tratamiento es siempre quirúrgico de urgencia: laparotomía o laparoscopía con hemicolectomía derecha con anastomosis ileocólica primaria o ileostomía según la estabilidad del paciente.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Cáncer obstructivo',
      title: 'Manejo del adenocarcinoma de colon izquierdo obstructivo',
      cards: [
        {
          title: 'Presentación oncológica de urgencia',
          kind: 'alert',
          items: [
            {
              text: 'Segunda causa de obstrucción colónica en adultos mayores sin cirugía previa.',
              say: 'El adenocarcinoma estenosante de colon descendente o sigmoides es la etiología tumoral clásica en pacientes mayores que debutan con detención de gases y distensión progresiva.',
            },
          ],
        },
        {
          title: 'Opciones de resolución quirúrgica',
          kind: 'key',
          items: [
            {
              text: 'Operación de Hartmann: procedimiento más seguro en peritonitis o paciente séptico inestable.',
              say: 'En el paciente inestable, con ciego perforado o peritonitis fecal, la operación de Hartmann con sigmoidectomía oncológica y colostomía terminal es el estándar indiscutido.',
            },
            {
              text: 'Stent colónico metálico autoexpandible como puente a cirugía electiva oncológica.',
              say: 'En centros experimentados con pacientes sin peritonitis, se puede colocar un stent metálico autoexpandible por vía endoscópica que dilata la estenosis tumoral. Esto desobstruye el intestino y permite realizar una colectomía laparoscópica oncológica electiva en un solo tiempo.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico funcional',
      title: 'Íleo paralítico metabólico versus Íleo mecánico obstructivo',
      cards: [
        {
          title: 'Íleo paralítico o metabólico',
          kind: 'normal',
          items: [
            {
              text: 'Atonía intestinal secundaria a cirugía reciente, peritonitis, fármacos opioides o hipokalemia.',
              say: 'El íleo paralítico o adinámico es una detención del tránsito por inhibición neuromuscular difusa sin obstáculo mecánico. Es esperable en el postoperatorio inmediato de cirugía abdominal y se ve agravado por hipokalemia marcada o uso de opioides.',
            },
            {
              text: 'Auscultación abdominal: silencio abdominal completo con ausencia de ruidos hidroaéreos.',
              say: 'A la auscultación destaca silencio abdominal absoluto sin ruidos de lucha ni cólicos. El tratamiento es etiológico: corrección del potasio, suspensión de opioides y deambulación precoz.',
            },
          ],
        },
        {
          title: 'Íleo mecánico obstructivo',
          kind: 'criteria',
          items: [
            {
              text: 'Obstáculo anatómico físico real con respuesta hiperperistáltica de lucha proximal.',
              say: 'En cambio, el íleo mecánico cursa con dolor cólico paroxístico intenso y ruidos hidroaéreos de tono metálico aumentado, acompañados de borborigmos audibles a distancia y bazuqueo gástrico.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnósticos diferenciales y trampas',
      title: 'Trampas clásicas del EUNACOM en obstrucción intestinal',
      head: ['Escenario clínico', 'Error diagnóstico frecuente', 'Realidad fisiopatológica', 'Conducta correcta'],
      rows: [
        {
          cells: [
            'Paciente añoso con distensión y vómitos',
            'Omitir la palpación de regiones femorales e inguinales',
            'Hernia crural atascada que pasa desapercibida bajo el panículo adiposo',
            'Palpación meticulosa y obligatoria de todos los orificios herniarios en todo abdomen agudo.',
          ],
          say: 'La trampa más clásica es olvidar palpar las ingles en pacientes ancianos con vómitos. Una hernia crural de apenas dos centímetros puede causar una oclusión mecánica completa de intestino delgado y necrosarse con rapidez.',
        },
        {
          cells: [
            'Paciente con vólvulo de ciego',
            'Intentar desvolvulación endoscópica como si fuera vólvulo de sigmoides',
            'El vólvulo de ciego no responde a endoscopía y se perfora',
            'Laparotomía o laparoscopía urgente con hemicolectomía derecha de inmediato.',
          ],
          say: 'Jamás intentes desvolvular por colonoscopía un vólvulo de ciego. A diferencia del sigmoides, el ciego móvil requiere cirugía de urgencia inmediata con hemicolectomía derecha.',
        },
        {
          cells: [
            'Paciente obstruido con dolor que se vuelve continuo y taquicardia',
            'Mantener manejo médico conservador con sonda nasogástrica',
            'El dolor continuo y la taquicardia traducen estrangulación y necrosis de asa',
            'Suspender manejo médico y pasar de inmediato a pabellón para laparotomía de urgencia.',
          ],
          say: 'Si un paciente con obstrucción por bridas en tratamiento conservador deja de tener dolor cólico y desarrolla dolor continuo con taquicardia persistente o hiperlactatemia, suspende de inmediato la observación y llévalo a quirófano por sufrimiento de asa.',
        },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 173',
      caseText: 'Paciente con antecedente de apendicectomía previa hace cinco años, quien consulta por dolor abdominal cólico difuso, distensión abdominal progresiva y detención completa en la eliminación de gases y deposiciones por ano desde hace veinticuatro horas. Al examen físico se auscultan ruidos hidroaéreos de tono metálico aumentados en frecuencia. ¿Cuál es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Obstrucción intestinal por bridas', isCorrect: true },
        { letter: 'B', text: 'Vólvulo de colon sigmoide', isCorrect: false },
        { letter: 'C', text: 'Íleo paralítico postoperatorio tardío', isCorrect: false },
        { letter: 'D', text: 'Hernia inguinal incarcerada', isCorrect: false },
        { letter: 'E', text: 'Cáncer de colon obstructivo', isCorrect: false },
      ],
      correct: 'A',
      say: {
        stem: 'Revisemos esta pregunta oficial de enero de dos mil veintitrés. Un paciente con antecedente de apendicectomía presenta dolor cólico, distensión, detención de gases y deposiciones, y ruidos hidroaéreos aumentados de tono metálico.',
        question: 'Nos consultan por el diagnóstico más probable.',
        options: 'Las alternativas son: opción A, obstrucción intestinal por bridas; opción B, vólvulo de colon sigmoide; opción C, íleo paralítico postoperatorio tardío; opción D, hernia inguinal incarcerada; y opción E, cáncer de colon obstructivo. Piénsalo.',
        answer: 'La respuesta correcta es la opción A, obstrucción intestinal por bridas. El antecedente de cirugía abdominal previa sumado a la clínica clásica de dolor cólico, distensión y ruidos metálicos de lucha apunta directamente a adherencias peritoneales como causa de oclusión mecánica del intestino delgado.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 117',
      caseText: 'Un paciente de cuarenta años con antecedente de cirugía bariátrica presenta un cuadro de veinticuatro horas de dolor abdominal muy intenso, tipo cólico, asociado a múltiples episodios de vómitos alimentarios. Al examen físico presenta temperatura de treinta y ocho coma cinco grados Celsius, frecuencia cardíaca regular de ciento ocho latidos por minuto y presión arterial de cien con sesenta milímetros de mercurio. Al examen abdominal se observa abdomen distendido, doloroso a la palpación con resistencia muscular difusa, auscultándose bazuqueo intestinal y ruidos hidroaéreos intensos de tono metálico. ¿Cuál es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Íleo mecánico por bridas', isCorrect: true },
        { letter: 'B', text: 'Perforación intestinal', isCorrect: false },
        { letter: 'C', text: 'Isquemia mesentérica arterial aguda', isCorrect: false },
        { letter: 'D', text: 'Colitis isquémica', isCorrect: false },
        { letter: 'E', text: 'Gastroenteritis aguda bacteriana', isCorrect: false },
      ],
      correct: 'A',
      say: {
        stem: 'Analicemos esta pregunta oficial de julio de dos mil veinticuatro. Un paciente joven con antecedente de bypass o cirugía bariátrica previa presenta veinticuatro horas de dolor cólico intenso, vómitos repetidos, distensión, bazuqueo y ruidos de lucha metálicos.',
        question: 'Se nos consulta por el diagnóstico más probable entre las opciones.',
        options: 'Las alternativas son: opción A, íleo mecánico por bridas; opción B, perforación intestinal; opción C, isquemia mesentérica arterial aguda; opción D, colitis isquémica; y opción E, gastroenteritis aguda bacteriana. Piénsalo.',
        answer: 'La respuesta oficial es la opción A, íleo mecánico por bridas. El cuadro reúne la tríada cardinal de dolor cólico, distensión y vómitos con signos de lucha en un paciente con antecedente quirúrgico de cavidad abdominal abierta.',
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
              text: 'Las bridas son la causa número uno en delgado y el cáncer en colon.',
              say: 'Primera regla: la etiología más frecuente de oclusión en intestino delgado son las adherencias o bridas postoperatorias; en colon de adultos mayores es el adenocarcinoma de colon.',
            },
            {
              text: 'El dolor continuo y la taquicardia alertan sobre estrangulación.',
              say: 'Segunda regla: si el dolor cólico intermitente se transforma en dolor continuo, punzante y se asocia a taquicardia o hiperlactatemia, indica sufrimiento vascular y exige laparotomía de urgencia.',
            },
            {
              text: 'Vólvulo de sigmoides se desvolvula por endoscopía; el de ciego va a pabellón.',
              say: 'Tercera regla: el vólvulo de sigmoides no complicado se trata inicialmente con desvolvulación endoscópica y sonda rectal; en cambio, el vólvulo de ciego requiere hemicolectomía derecha urgente sin intentar endoscopía.',
            },
            {
              text: 'Dilatación cecal crítica mayor a diez a doce centímetros por Laplace.',
              say: 'Cuarta regla: en obstrucción colónica con válvula continente en asa cerrada, un diámetro cecal mayor a diez a doce centímetros implica peligro inminente de perforación diastásica.',
            },
          ],
        },
        {
          title: 'Idea final',
          kind: 'normal',
          items: [
            {
              text: 'Palpar los orificios herniarios inguinales y crurales en todo paciente obstruido.',
              say: 'Si te llevas una sola idea de hoy: nunca diagnostiques un abdomen distendido y vomitador sin palpar prolijamente las ingles en busca de una hernia atascada. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo Diagnóstico y Conducta en Obstrucción Intestinal Mecánica',
    root: N(
      'start',
      'Sospecha clínica de obstrucción intestinal',
      'Dolor cólico · distensión abdominal · vómitos · detención de gases y heces',
      'Iniciamos el enfrentamiento clínico confirmando la oclusión y evaluando signos de estrangulación vascular.',
      [
        'Signos de estrangulación o peritonitis',
        N(
          'alert',
          'Sufrimiento de asa o abdomen en tabla',
          'Dolor continuo no cólico · fiebre · taquicardia · lactato elevado · Blumberg',
          'Ante cualquier sospecha de estrangulación o perforación libre, se suspende la observación y se indica pabellón de inmediato.',
          [
            'Cirugía de urgencia inmediata',
            N(
              'do',
              'Laparotomía exploradora urgente',
              'Reanimación agresiva con cristaloides + profilaxis antibiótica + pabellón',
              'Ingreso urgente a quirófano para resecación de asas necróticas y resolución de la causa.',
            ),
          ],
        ),
      ],
      [
        'Sin estrangulación: definir etiología',
        N(
          'q',
          'Estudio imagenológico con radiografía o tomografía',
          'Localización del nivel obstructivo: delgado versus colon',
          'Identificamos si el nivel del obstáculo se sitúa en intestino delgado o marco colónico.',
          [
            'Intestino delgado con antecedente quirúrgico (Bridas)',
            N(
              'do',
              'Manejo médico conservador inicial por 24 a 48 h',
              'Régimen cero · reposición con cristaloides · sonda nasogástrica · Gastrografin',
              'Iniciamos descompresión gástrica y reposición hidroelectrolítica vigorosa.',
              [
                'Resolución médica favorable',
                N(
                  'ok',
                  'Retiro de sonda y realimentación progresiva',
                  'Eliminación de gases y heces con remisión de distensión',
                  'Se resuelve favorablemente en más del setenta por ciento sin necesidad de cirugía.',
                ),
              ],
              [
                'Falla a las 48 horas o aparición de alarma',
                N(
                  'alert',
                  'Laparotomía o laparoscopía por bridas',
                  'Adhesiolisis quirúrgica urgente',
                  'Si persiste obstruido tras cuarenta y ocho horas se interviene para liberar la brida.',
                ),
              ],
            ),
          ],
          [
            'Vólvulo de colon sigmoides confirmado',
            N(
              'do',
              'Desvolvulación endoscópica con proctosigmoidoscopía',
              'Inspección mucosa y descompresión con sonda rectal transitoria',
              'En ausencia de necrosis mucosa, realizamos desvolvulación endoscópica de primera línea.',
              [
                'Desvolvulación exitosa',
                N(
                  'ok',
                  'Sigmoidectomía electiva diferida en misma hospitalización',
                  'Resección con anastomosis primaria para prevenir recurrencia',
                  'Se programa cirugía electiva para erradicar la recurrencia que supera el cincuenta por ciento.',
                ),
              ],
            ),
          ],
          [
            'Cáncer de colon o vólvulo cecal',
            N(
              'do',
              'Resolución quirúrgica urgente',
              'Hemicolectomía derecha (vólvulo ciego) · Hartmann o stent (cáncer)',
              'El vólvulo cecal va a hemicolectomía derecha de urgencia; el cáncer a Hartmann o stent descompresivo.',
            ),
          ],
        ),
      ],
    ),
  },
};
