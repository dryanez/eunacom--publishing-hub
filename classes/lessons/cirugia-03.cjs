// Clase 11.3 — guion docente escrito a mano (estándar Módulo 2 · Cirugía).
// Fuente clínica: books/scripts/dataset_cirugia.cjs (cir-03).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-03',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Fisiopatología, diagnóstico tomográfico de elección, estadios de Hinchey, drenaje percutáneo, Operación de Hartmann y colonoscopía diferida',
      say: 'Bienvenidos a la tercera clase de cirugía general. Hoy estudiamos la diverticulitis aguda, la patología colónica aguda más frecuente en el adulto mayor y un motivo recurrente de consulta quirúrgica de urgencia. Denominada tradicionalmente como la apendicitis del lado izquierdo, en esta clase aprenderás a diagnosticarla mediante tomografía axial computarizada, a clasificarla con la escala de Hinchey, a definir cuándo drenar por vía percutánea y cuándo indicar la operación de Hartmann de urgencia, sin olvidar la colonoscopía diferida obligatoria. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología colónica',
      title: 'De la herniación diverticular a la peritonitis fecal',
      nodes: [
        { id: 'div', col: 0, row: 2, k: 'start', t: 'Pseudodivertículos sigmoideos', s: 'Herniación mucosa en puntos vasculares débiles · 90% sigmoides' },
        { id: 'fec', col: 1, row: 1, k: 'mech', t: 'Impactación de fecalito', s: 'Aumento de presión de segmentación y microerosión' },
        { id: 'mic', col: 2, row: 0, k: 'alert', t: 'Microperforación sellada', s: 'Inflamación de grasa pericólica · flemón local Hinchey Ia' },
        { id: 'abs', col: 2, row: 2, k: 'risk', t: 'Colección loculada o absceso', s: 'Absceso pericólico Ib o pélvico a distancia Hinchey II' },
        { id: 'pur', col: 3, row: 1, k: 'alert', t: 'Peritonitis purulenta', s: 'Ruptura de absceso a cavidad libre · Hinchey III' },
        { id: 'fec2', col: 4, row: 2, k: 'trap', t: 'Peritonitis fecaloidea libre', s: 'Perforación colónica macroscópica abierta · Hinchey IV' },
      ],
      edges: [
        { from: 'div', to: 'fec', label: 'obstrucción del cuello' },
        { from: 'fec', to: 'mic', label: 'isquemia parietal' },
        { from: 'mic', to: 'abs', label: 'loculación purulenta' },
        { from: 'abs', to: 'pur', label: 'ruptura peritoneal' },
        { from: 'fec', to: 'fec2', label: 'perforación transmural masiva' },
      ],
      steps: [
        {
          show: ['div', 'fec'],
          note: 'Origen anatómico e impactación',
          say: 'Los divertículos del colon son pseudodivertículos adquiridos formados por la herniación de la mucosa y submucosa a través de la capa muscular propia, en los puntos donde penetran las arterias rectas. Más del noventa por ciento se ubican en el colon sigmoides y descendente debido a su menor radio y mayores presiones de segmentación. La diverticulitis aguda se desencadena cuando un fecalito oclusivo se impacta en el cuello diverticular, produciendo estasis e isquemia focal.',
        },
        {
          show: ['mic'],
          note: 'Microperforación e inflamación pericólica',
          say: 'La isquemia y proliferación bacteriana producen una microperforación de la delgada pared diverticular. En la gran mayoría de los casos, esta perforación es inmediatamente sellada por la grasa pericólica del mesocolon y el epiplón, constituyendo un flemón inflamatorio localizado. Esto corresponde al estadio Hinchey uno a.',
        },
        {
          show: ['abs'],
          note: 'Formación de abscesos pericólicos o pélvicos',
          say: 'Si el proceso infeccioso no se autolimita, la microperforación acumula material purulento organizado, formando un absceso pericólico pequeño o un absceso a distancia pélvico o retroperitoneal, lo que define los estadios Hinchey uno b y Hinchey dos. Estos pacientes presentan fiebre persistente y masa palpable.',
        },
        {
          show: ['pur', 'fec2'],
          note: 'Peritonitis generalizada purulenta o fecal',
          say: 'Si el absceso se rompe hacia la cavidad peritoneal libre, se genera una peritonitis purulenta generalizada o Hinchey tres. Si existe una rotura transmural abierta no contenida que vuelca heces directamente a la cavidad abdominal, estamos ante una peritonitis fecaloidea o Hinchey cuatro, cuadros gravísimos que cursan con abdomen en tabla y shock séptico.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Semiología y presentación clínica',
      title: 'Apendicitis del lado izquierdo: sospecha clínica en el adulto mayor',
      cards: [
        {
          title: 'Dolor y localización en fosa ilíaca izquierda',
          kind: 'criteria',
          items: [
            {
              text: 'Dolor constante y progresivo en fosa ilíaca izquierda o hipogastrio de varios días.',
              say: 'La presentación típica es la de un paciente adulto mayor de sesenta años que consulta por dolor constante y punzante en la fosa ilíaca izquierda o el hipogastrio, de dos a tres días de evolución. Con frecuencia se asocia a constipación pertinaz, aunque algunos pacientes debutan con diarrea por inflamación de la mucosa colónica adyacente.',
            },
            {
              text: 'Síndrome febril y síntomas digestivos asociados: anorexia, náuseas y vómitos reflejos.',
              say: 'El paciente suele referir sensación febril, decaimiento general, anorexia y náuseas. La fiebre cuantificada y la taquicardia orientan a la presencia de complicación flemosa o abscedada.',
            },
          ],
        },
        {
          title: 'Examen físico: Signos de irritación peritoneal focal',
          kind: 'alert',
          items: [
            {
              text: 'Dolor exquisito a la palpación en fosa ilíaca izquierda y signo de Blumberg positivo focal.',
              say: 'Al examen físico abdominal destaca dolor exquisito y resistencia muscular a la palpación en el cuadrante inferior izquierdo. El signo de Blumberg o rebote en fosa ilíaca izquierda es positivo, traduciendo irritación del peritoneo parietal por contigüidad inflamatoria.',
            },
            {
              text: 'Masa palpable sensible en fosa ilíaca izquierda presente en el veinte por ciento de los casos.',
              say: 'En aproximadamente un quinto de los pacientes puede palparse una masa sensible, mal delimitada y firme en la fosa ilíaca izquierda, que corresponde al sigmoides intensamente engrosado empastado con asas delgadas y epiplón mayor.',
            },
          ],
        },
        {
          title: 'Signos de alarma de peritonitis generalizada',
          kind: 'key',
          items: [
            {
              text: 'Abdomen en tabla, descompresión difusa en los cuatro cuadrantes e hipotensión.',
              say: 'La presencia de contractura muscular involuntaria generalizada, dolor a la descompresión en todo el abdomen y signos de respuesta inflamatoria sistémica o hipotensión arterial alertan de inmediato sobre una perforación a cavidad libre con peritonitis purulenta o fecaloidea.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Estadificación de Hinchey',
      title: 'Clasificación de Hinchey modificada por Wasvary y conducta clínica',
      head: ['Estadio Hinchey', 'Hallazgos anatómicos y tomográficos', 'Severidad', 'Tratamiento de elección'],
      rows: [
        {
          cells: [
            'Hinchey 0 y Ia',
            'Hinchey 0: engrosamiento parietal sin flemón · Hinchey Ia: flemón o inflamación pericólica confinada al mesocolon',
            'Diverticulitis leve no complicada',
            'Manejo ambulatorio en seleccionados; régimen líquido, paracetamol o antibióticos orales o parenterales si hay riesgo.',
          ],
          say: 'El estadio Hinchey cero corresponde a diverticulitis leve con engrosamiento de pared sin flemón. El estadio Hinchey uno a presenta flemón pericólico confinado al mesocolon. Ambos constituyen diverticulitis no complicada. En pacientes jóvenes, estables y sin comorbilidades se manejan de forma ambulatoria con dieta líquida y analgesia; en ancianos o pacientes frágiles se hospitaliza con antibióticos endovenosos.',
        },
        {
          cells: [
            'Hinchey Ib y II',
            'Hinchey Ib: absceso pericólico o mesocólico pequeño menor a tres o cuatro centímetros · Hinchey II: absceso a distancia pélvico o retroperitoneal mayor o igual a cuatro centímetros',
            'Diverticulitis complicada con absceso',
            'Hinchey Ib: antibióticos endovenosos · Hinchey II: drenaje percutáneo guiado por tomografía más antibióticos endovenosos.',
          ],
          say: 'El estadio Hinchey uno b es un absceso pericólico pequeño menor a tres o cuatro centímetros, que se trata con hospitalización y antibióticos endovenosos, resolviendo en más del ochenta por ciento sin punción. En cambio, el estadio Hinchey dos es un absceso a distancia pélvico o retroperitoneal habitualmente mayor a cuatro centímetros, cuyo tratamiento de elección es el drenaje percutáneo guiado por tomografía más antibióticos endovenosos.',
        },
        {
          cells: [
            'Hinchey III y IV',
            'Hinchey III: peritonitis purulenta generalizada sin heces libres · Hinchey IV: peritonitis fecaloidea generalizada con orificio colónico abierto',
            'Diverticulitis complicada con peritonitis difusa',
            'Cirugía de urgencia inmediata: Operación de Hartmann con sigmoidectomía y colostomía terminal.',
          ],
          say: 'Los estadios Hinchey tres y cuatro representan peritonitis generalizada purulenta y fecaloidea respectivamente. Son urgencias quirúrgicas críticas con indicación absoluta de laparotomía exploradora de urgencia. La técnica estándar salvadora es la operación de Hartmann: resección del sigmoides perforado, cierre del muñón rectal y colostomía terminal en fosa ilíaca izquierda.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico tomográfico y contraindicaciones',
      title: 'Tomografía axial computarizada de elección y exámenes prohibidos',
      cards: [
        {
          title: 'Estándar de oro: Tomografía de abdomen y pelvis con contraste',
          kind: 'key',
          items: [
            {
              text: 'Tomografía computarizada con contraste intravenoso: sensibilidad del noventa y cinco por ciento.',
              say: 'La tomografía axial computarizada de abdomen y pelvis con contraste endovenoso es el examen de elección indiscutido en la fase aguda. Permite confirmar el diagnóstico, estadificar con exactitud según la escala de Hinchey y planificar si se requiere drenaje percutáneo o cirugía.',
            },
            {
              text: 'Signos tomográficos: engrosamiento parietal mayor a cuatro milímetros y estriación grasa pericólica.',
              say: 'Los hallazgos tomográficos característicos incluyen: divertículos en colon sigmoides, engrosamiento concéntrico de la pared colónica mayor a cuatro milímetros, estriación de la grasa pericólica adyacente, presencia de colecciones purulentas loculadas y burbujas de gas extraluminal.',
            },
          ],
        },
        {
          title: 'Contraindicación absoluta: Colonoscopía y enema baritado',
          kind: 'alert',
          items: [
            {
              text: 'La colonoscopía está estrictamente prohibida durante la fase aguda de diverticulitis.',
              say: 'Una de las preguntas más clásicas y sancionadas del EUNACOM: la colonoscopía y el enema baritado están formalmente contraindicados en la fase aguda de diverticulitis. La insuflación de aire o presión de bario en un colon friable puede transformar una microperforación sellada en una perforación libre con peritonitis fecal masiva.',
            },
            {
              text: 'El enema baritado corre el riesgo de causar peritonitis química por bario con altísima letalidad.',
              say: 'El bario libre en la cavidad peritoneal produce una peritonitis química gravísima con granulomatosis y adherencias inextirpables. Por ello, nunca se solicita enema en abdomen agudo.',
            },
          ],
        },
        {
          title: 'Colonoscopía diferida obligatoria a las seis a ocho semanas',
          kind: 'criteria',
          items: [
            {
              text: 'Colonoscopía total obligatoria tras seis a ocho semanas del episodio agudo resuelto.',
              say: 'Una vez que el paciente se recupera por completo del episodio agudo y transcurren seis a ocho semanas, es obligatorio solicitar una colonoscopía completa de seguimiento. El objetivo es descartar un adenocarcinoma de colon, ya que hasta un tres a cinco por ciento de las masas inflamatorias corresponden a un cáncer de colon perforado enmascarado.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de decisión clínica',
      title: 'Enfrentamiento y conducta escalonada en diverticulitis aguda',
      say: 'Revisemos el árbol de decisión terapéutica ante un paciente con sospecha de diverticulitis aguda según su estadio tomográfico de Hinchey.',
    },

    {
      type: 'points',
      kicker: 'Manejo invasivo y quirúrgico',
      title: 'Drenaje percutáneo versus Operación de Hartmann',
      cards: [
        {
          title: 'Drenaje percutáneo en Hinchey II',
          kind: 'key',
          items: [
            {
              text: 'Tratamiento de elección para abscesos mayores o iguales a tres o cuatro centímetros.',
              say: 'En el estadio Hinchey dos, ante un absceso pélvico o retroperitoneal de cuatro centímetros o más accesible por punción, la conducta de elección es el drenaje percutáneo guiado por tomografía computarizada o ecografía, instalando un catéter tipo cola de cerdo.',
            },
            {
              text: 'Evita la cirugía de urgencia con estoma y permite resección electiva en un solo tiempo.',
              say: 'El drenaje percutáneo evacúa el foco séptico, revierte la inflamación aguda y permite transformar una cirugía de urgencia con colostomía en una resección electiva diferida con anastomosis primaria sin ostomía.',
            },
          ],
        },
        {
          title: 'Operación de Hartmann en peritonitis generalizada',
          kind: 'alert',
          items: [
            {
              text: 'Indicación categórica en Hinchey III y IV o falla séptica de drenaje percutáneo.',
              say: 'La cirugía de urgencia es imperativa ante peritonitis generalizada purulenta o fecaloidea, inestabilidad hemodinámica persistente o falla del drenaje percutáneo con shock séptico progresivo.',
            },
            {
              text: 'Tres tiempos de la técnica: resección sigmoidea, cierre de muñón rectal y colostomía terminal.',
              say: 'La operación de Hartmann consiste en resecar el segmento de colon sigmoides perforado y necrótico, cerrar el muñón rectal en fondo de saco ciego dentro de la pelvis y abocar el colon descendente proximal como colostomía terminal en la fosa ilíaca izquierda. El tránsito intestinal puede reconstruirse meses más tarde.',
            },
          ],
        },
        {
          title: 'Esquemas antimicrobianos recomendados',
          kind: 'pharma',
          items: [
            {
              text: 'Cobertura de bacilos gramnegativos entéricos y anaerobios como Bacteroides fragilis.',
              say: 'El tratamiento antimicrobiano debe cubrir bacilos gramnegativos y anaerobios. El esquema parenteral de primera línea hospitalario es Ceftriaxona un gramo cada veinticuatro horas endovenoso más Metronidazol quinientos miligramos cada ocho horas endovenoso, o bien Ciprofloxacino más Metronidazol.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnósticos diferenciales y trampas',
      title: 'Trampas del EUNACOM en dolor en fosa ilíaca izquierda',
      head: ['Entidad clínica', 'Contexto y presentación típica', 'Elemento clave de diferenciación', 'Conducta correcta'],
      rows: [
        {
          cells: [
            'Cáncer de colon izquierdo perforado',
            'Paciente añoso con baja de peso, anemia ferropénica previa y cuadro obstructivo o perforativo',
            'Tomografía muestra masa asimétrica o invasión de órganos vecinos; a menudo indistinguible de diverticulitis',
            'Tratar la urgencia perforativa y realizar colonoscopía completa obligatoria a las seis a ocho semanas.',
          ],
          say: 'El cáncer de colon izquierdo perforado es el gran imitador de la diverticulitis en adultos mayores. Puede debutar exactamente como un flemón en fosa ilíaca izquierda. Por esta razón, todo episodio de diverticulitis tratada médicamente exige una colonoscopía diferida a las seis a ocho semanas para descartar neoplasia maligna.',
        },
        {
          cells: [
            'Colitis isquémica aguda',
            'Adulto mayor con antecedentes vasculares y episodio de hipotensión reciente que presenta dolor abdominal y rectorragia',
            'Dolor cólico abdominal seguido rápidamente de diarrea sanguinolenta profusa, sin masa palpable y tomografía con engrosamiento mucosal en zonas limítrofes',
            'Hidratación parenteral, reposo intestinal y colonoscopía suave de baja presión para evaluar viabilidad mucosa.',
          ],
          say: 'La colitis isquémica se diferencia porque el dolor suele acompañarse de deposiciones sanguinolentas abundantes y ocurre tras un evento de hipoperfusión sistémica en pacientes vasculares. En la diverticulitis no complicada el sangrado digestivo bajo masivo es excepcional.',
        },
        {
          cells: [
            'Fístula colovesical por diverticulitis previa',
            'Paciente con antecedentes de diverticulitis que consulta por infecciones urinarias recurrentes por flora polimicrobiana',
            'Presencia de neumaturia, emisión de gas en la orina, y fecaluria, paso de restos fecales en la orina',
            'Tomografía con contraste que demuestra aire en la vejiga sin instrumentación previa y resolución quirúrgica electiva.',
          ],
          say: 'Una complicación crónica clásica de la diverticulitis es la fístula colovesical, más frecuente en hombres. Se manifiesta por neumaturia, que es la salida de gas por la uretra, y fecaluria con infecciones urinarias a repetición por enterobacterias. Se confirma con tomografía que evidencia aire en la vejiga y se resuelve con cirugía resectiva electiva.',
        },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 33',
      caseText: 'Un paciente de setenta y tres años presenta un cuadro de dos días de dolor abdominal, mayor en la fosa ilíaca izquierda. Al examen físico presenta dolor a la palpación de la fosa ilíaca izquierda, con signos de irritación peritoneal en la zona. ¿Cuál es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Apendicitis aguda', isCorrect: false },
        { letter: 'B', text: 'Cáncer de colon', isCorrect: false },
        { letter: 'C', text: 'Obstrucción intestinal', isCorrect: false },
        { letter: 'D', text: 'Diverticulitis aguda', isCorrect: true },
        { letter: 'E', text: 'Hernia inguinal complicada', isCorrect: false },
      ],
      correct: 'D',
      say: {
        stem: 'Revisemos esta pregunta oficial de julio de dos mil quince. Un hombre de setenta y tres años presenta dos días de dolor en fosa ilíaca izquierda, con dolor exquisito e irritación peritoneal localizada.',
        question: 'Nos consultan por el diagnóstico más probable entre las alternativas.',
        options: 'Las alternativas son: opción A, apendicitis aguda; opción B, cáncer de colon; opción C, obstrucción intestinal; opción D, diverticulitis aguda; y opción E, hernia inguinal complicada.',
        answer: 'La respuesta correcta es la opción D. El cuadro clínico de dolor agudo en fosa ilíaca izquierda con signos de irritación peritoneal focal en un paciente adulto mayor configura la presentación clásica de diverticulitis aguda en el colon sigmoides.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 2',
      caseText: 'Una paciente de sesenta y cinco años, diabética tipo dos en tratamiento con metformina, consulta por cuadro de dolor en fosa ilíaca izquierda, asociado a fiebre y hematoquecia en una oportunidad. Al examen físico destaca signo de Blumberg positivo en fosa ilíaca izquierda y disminución de ruidos hidroaéreos. El examen de elección para establecer el diagnóstico en este caso es:',
      question: 'El examen de elección para establecer el diagnóstico en este caso es:',
      options: [
        { letter: 'A', text: 'Tomografía axial computada de abdomen y pelvis', isCorrect: true },
        { letter: 'B', text: 'Colonoscopía', isCorrect: false },
        { letter: 'C', text: 'Ecotomografía abdominal', isCorrect: false },
        { letter: 'D', text: 'Radiografía de abdomen simple', isCorrect: false },
        { letter: 'E', text: 'Resonancia magnética de abdomen', isCorrect: false },
      ],
      correct: 'A',
      say: {
        stem: 'Analicemos esta pregunta real de julio de dos mil trece. Una mujer de sesenta y cinco años consulta por dolor en fosa ilíaca izquierda, fiebre y Blumberg positivo, sospechándose fuertemente una diverticulitis aguda.',
        question: 'Se pregunta cuál es el examen de elección para establecer el diagnóstico en este caso.',
        options: 'Las opciones son: opción A, tomografía axial computada de abdomen y pelvis; opción B, colonoscopía; opción C, ecotomografía abdominal; opción D, radiografía de abdomen simple; y opción E, resonancia magnética de abdomen.',
        answer: 'La respuesta correcta es la opción A. La tomografía axial computarizada de abdomen y pelvis con contraste es el estándar de oro diagnóstico indiscutido en la fase aguda. Recuerda que la opción B, colonoscopía, está formalmente contraindicada por riesgo inminente de perforación libre.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      caseText: 'Una mujer de sesenta y ocho años hospitalizada por diverticulitis aguda de cuatro días de evolución tratada con ceftriaxona y metronidazol endovenoso, persiste febril con temperatura de treinta y ocho coma cuatro grados y dolor en fosa ilíaca izquierda. La tomografía computarizada de control muestra una colección líquida purulenta bien delimitada de cinco centímetros de diámetro en la pelvis menor, en contacto estrecho con la pared abdominal anterior, sin aire libre peritoneal. La paciente se encuentra hemodinámicamente estable. ¿Cuál es la conducta más adecuada?',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Operación de Hartmann de urgencia de inmediato', isCorrect: false },
        { letter: 'B', text: 'Drenaje percutáneo guiado por tomografía computarizada más mantención de antibióticos endovenosos', isCorrect: true },
        { letter: 'C', text: 'Cambiar esquema antibiótico a vancomicina oral y esperar evolución', isCorrect: false },
        { letter: 'D', text: 'Realizar colonoscopía descompresiva urgente', isCorrect: false },
        { letter: 'E', text: 'Laparotomía exploradora con lavado peritoneal simple sin resección colónica', isCorrect: false },
      ],
      correct: 'B',
      say: {
        stem: 'Revisemos este caso de diverticulitis complicada con absceso pélvico. Una paciente con diverticulitis tratada con antibióticos persiste febril y la tomografía demuestra un absceso pélvico loculado de cinco centímetros accesible por punción, sin peritonitis difusa ni shock.',
        question: 'Nos consultan por la conducta más adecuada.',
        options: 'Las opciones son: opción A, operación de Hartmann de urgencia; opción B, drenaje percutáneo guiado por tomografía más mantención de antibióticos endovenosos; opción C, cambiar a vancomicina oral; opción D, colonoscopía descompresiva; y opción E, laparotomía exploradora con lavado peritoneal.',
        answer: 'La respuesta correcta es la opción B. Ante un absceso diverticular Hinchey dos de cuatro centímetros o más accesible por punción en una paciente hemodinámicamente estable, el drenaje percutáneo guiado por imágenes es el tratamiento de elección. Permite resolver la colección purulenta y evita una colostomía de urgencia.',
      },
    },

    {
      type: 'points',
      kicker: 'Conceptos clave para el EUNACOM',
      title: 'Reglas de oro en diverticulitis aguda',
      cards: [
        {
          title: 'Cuatro certezas clínicas',
          kind: 'key',
          items: [
            {
              text: 'Dolor en fosa ilíaca izquierda con Blumberg y fiebre en adulto mayor es diverticulitis.',
              say: 'Primera regla: el dolor constante en la fosa ilíaca izquierda con signos de irritación peritoneal focal y fiebre en un paciente adulto mayor orienta directamente a diverticulitis aguda en el colon sigmoides.',
            },
            {
              text: 'La tomografía con contraste es el examen de elección en fase aguda.',
              say: 'Segunda regla: la tomografía computarizada de abdomen y pelvis con contraste endovenoso es el examen de elección confirmatorio; la colonoscopía está estrictamente prohibida en agudo por riesgo de perforación libre.',
            },
            {
              text: 'Abscesos mayores o iguales a cuatro centímetros se drenan por vía percutánea.',
              say: 'Tercera regla: los abscesos pericólicos pequeños Hinchey uno b se manejan con antibióticos endovenosos, mientras que los abscesos a distancia Hinchey dos de cuatro centímetros o más se tratan con drenaje percutáneo guiado por imágenes.',
            },
            {
              text: 'Peritonitis generalizada requiere Operación de Hartmann urgente.',
              say: 'Cuarta regla: la peritonitis purulenta o fecaloidea generalizada Hinchey tres o cuatro exige cirugía de urgencia mediante operación de Hartmann con sigmoidectomía y colostomía terminal.',
            },
          ],
        },
        {
          title: 'Idea final',
          kind: 'normal',
          items: [
            {
              text: 'Colonoscopía diferida a las seis a ocho semanas para descartar cáncer de colon.',
              say: 'Si te llevas una sola idea de hoy: todo paciente con diverticulitis aguda debe someterse a una colonoscopía completa a las seis a ocho semanas del episodio para descartar un adenocarcinoma de colon enmascarado. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Manejo de Diverticulitis Aguda según Clasificación de Hinchey',
    root: N(
      'start',
      'Sospecha de diverticulitis aguda',
      'Dolor en FII · fiebre · Blumberg focal · adulto mayor',
      'Iniciamos el enfrentamiento solicitando una tomografía de abdomen y pelvis con contraste intravenoso urgente.',
      [
        'Tomografía confirma diverticulitis',
        N(
          'q',
          'Estratificar según clasificación de Hinchey',
          'Engrosamiento parietal sigmoideo > 4 mm · estriación grasa pericólica',
          'Estratificamos el estadio tomográfico de Hinchey para definir el tratamiento médico o quirúrgico.',
          [
            'Hinchey 0 o Ia (no complicada)',
            N(
              'do',
              'Manejo médico conservador',
              'Flemón pericólico sin colección purulenta',
              'En diverticulitis no complicada indicamos manejo conservador con régimen líquido y antibióticos.',
              [
                'Paciente joven estable y tolerando vía oral',
                N(
                  'ok',
                  'Tratamiento ambulatorio',
                  'Dieta líquida · analgesia con paracetamol · reposo',
                  'Si el paciente está estable y tolera vía oral, puede manejarse ambulatoriamente con pautas de alarma.',
                ),
              ],
              [
                'Paciente anciano con comorbilidades o fiebre alta',
                N(
                  'ok',
                  'Hospitalización y antibióticos EV',
                  'Ceftriaxona 1 g EV día + Metronidazol 500 mg c/8h EV',
                  'Hospitalizamos al paciente frágil para hidratación endovenosa y cobertura con ceftriaxona más metronidazol.',
                ),
              ],
            ),
          ],
          [
            'Hinchey Ib (absceso pericólico < 3 a 4 cm)',
            N(
              'do',
              'Tratamiento hospitalario con antibióticos EV',
              'Colección pequeña bien contenida en mesocolon',
              'En abscesos menores a cuatro centímetros indicamos antibióticos endovenosos de amplio espectro.',
            ),
          ],
          [
            'Hinchey II (absceso ≥ 3 a 4 cm accesible)',
            N(
              'do',
              'Drenaje percutáneo guiado por TAC o ecografía',
              'Catéter percutáneo + antibióticos EV de amplio espectro',
              'En abscesos pélvicos o a distancia de cuatro centímetros o más, la conducta de elección es el drenaje percutáneo guiado por imágenes.',
            ),
          ],
          [
            'Hinchey III o IV o peritonitis difusa',
            N(
              'alert',
              'Cirugía de urgencia: Operación de Hartmann',
              'Peritonitis purulenta o fecaloidea · shock séptico',
              'Ante peritonitis libre o shock séptico indicamos laparotomía de urgencia para realizar la operación de Hartmann.',
              [
                'Técnica quirúrgica resectiva',
                N(
                  'ok',
                  'Sigmoidectomía y colostomía terminal en FII',
                  'Cierre del muñón rectal y colostomía terminal',
                  'Se reseca el segmento colónico perforado y se confecciona colostomía terminal en fosa ilíaca izquierda.',
                ),
              ],
            ),
          ],
        ),
      ],
      [
        'Seguimiento a las 6 a 8 semanas',
        N(
          'do',
          'Colonoscopía total diferida obligatoria',
          'Descartar adenocarcinoma de colon coexistente o enmascarado',
          'A las seis a ocho semanas del episodio resuelto realizamos colonoscopía completa para descartar cáncer colorrectal.',
        ),
      ],
    ),
  },
};
