// Clase 11.11 — guion docente escrito a mano (estándar Módulo 2 · Cirugía).
// Fuente clínica: books/scripts/dataset_cirugia.cjs (cir-11).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-11',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Trauma cerrado vs penetrante, protocolo Eco-FAST de 4 ventanas, criterios de laparotomía y manejo no operatorio',
      say: 'Bienvenidos a la clase de trauma abdominal. En el paciente politraumatizado el abdomen suele ser la principal fuente oculta de shock hemorrágico y muerte prevenible. Durante esta clase aprenderemos a jerarquizar los órganos lesionados según el mecanismo del impacto, a interpretar el protocolo Eco-FAST en la camilla de reanimación, a aplicar el algoritmo que define quién va directo a laparotomía y quién puede recibir manejo no operatorio, y a prevenir la temida sepsis post-esplenectomía. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismos y epidemiología',
      title: 'Cinemática del trauma abdominal y órganos más vulnerables',
      nodes: [
        { id: 'cin', col: 0, row: 2, k: 'start', t: 'Mecanismo de impacto abdominal', s: 'Trauma contuso cerrado vs penetrante por arma blanca vs balístico' },
        { id: 'con', col: 1, row: 0, k: 'risk', t: 'Trauma cerrado o contuso', s: 'Accidentes vehiculares · caídas de altura · desaceleración súbita' },
        { id: 'baz', col: 2, row: 0, k: 'alert', t: 'Bazo primero · Hígado segundo', s: 'Desaceleración arranca ligamentos esplénicos y vasos hiliares' },
        { id: 'arm', col: 1, row: 2, k: 'mech', t: 'Herida penetrante por arma blanca', s: 'Baja energía · trayecto lesional lineal directo' },
        { id: 'hig', col: 2, row: 2, k: 'alert', t: 'Hígado primero · Intestino segundo', s: 'El gran volumen hepático lo expone al arma blanca' },
        { id: 'bal', col: 1, row: 3, k: 'trap', t: 'Proyectil de arma de fuego', s: 'Alta energía y cavitación expansiva destructiva' },
        { id: 'del', col: 2, row: 3, k: 'alert', t: 'Intestino delgado primero · Colon segundo', s: 'Múltiples perforaciones viscerales en cavidad libre' },
        { id: 'sho', col: 3, row: 1, k: 'trap', t: 'Shock hemorrágico o peritonitis', s: 'Hemoperitoneo masivo de víscera sólida o filtración entérica' },
        { id: 'lap', col: 4, row: 1, k: 'good', t: 'Resolución quirúrgica o MNO', s: 'Laparotomía según estabilidad vs observación intensiva' },
      ],
      edges: [
        { from: 'cin', to: 'con', label: 'desaceleración' },
        { from: 'con', to: 'baz', label: 'compresión' },
        { from: 'cin', to: 'arm', label: 'arma blanca' },
        { from: 'arm', to: 'hig', label: 'trayecto' },
        { from: 'cin', to: 'bal', label: 'arma de fuego' },
        { from: 'bal', to: 'del', label: 'cavitación' },
        { from: 'baz', to: 'sho', label: 'sangrado' },
        { from: 'hig', to: 'sho', label: 'sangrado' },
        { from: 'del', to: 'sho', label: 'peritonitis' },
        { from: 'sho', to: 'lap', label: 'conducta' },
      ],
      steps: [
        {
          show: ['cin', 'con', 'baz'],
          note: 'Trauma contuso y predominio esplénico',
          say: 'En el traumatismo abdominal cerrado por desaceleración o impacto directo, el órgano que se lesiona con mayor frecuencia es el bazo, responsable de casi la mitad de los hemoperitoneos contusos, seguido de cerca por el hígado. La inercia y los ligamentos suspensorios desgarran el parénquima y los vasos hiliares.',
        },
        {
          show: ['arm', 'hig'],
          note: 'Trauma penetrante por arma blanca',
          say: 'En cambio, en las heridas penetrantes por arma blanca el órgano más comúnmente comprometido es el hígado debido a su gran tamaño en el hemiabdomen superior, seguido por el intestino delgado y el diafragma.',
        },
        {
          show: ['bal', 'del'],
          note: 'Trauma balístico por proyectil de arma de fuego',
          say: 'En las heridas por proyectil de arma de fuego, la onda expansiva y el trayecto sinuoso lesionan predominantemente el intestino delgado en primer lugar y el colon en segundo lugar, generando contaminación fecal inmediata y hemorragia mesentérica masiva.',
        },
        {
          show: ['sho', 'lap'],
          note: 'Consecuencia clínica y toma de decisiones',
          say: 'Estas lesiones amenazan la vida por dos vías: el shock hemorrágico por sangrado de vísceras sólidas o grandes vasos, y la peritonitis séptica por perforación de vísceras huecas. La conducta depende de la estabilidad hemodinámica del paciente.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Semiología de urgencias',
      title: 'Evaluación física del abdomen y sus limitaciones en trauma',
      cards: [
        {
          title: 'Signos cardinales de alarma',
          tag: 'Irritación peritoneal',
          kind: 'alert',
          items: [
            {
              t: 'Defensa muscular involuntaria y rebote',
              d: 'Peritonitis química o bacteriana por hemoperitoneo o perforación',
              say: 'La contractura muscular refleja involuntaria y el dolor a la descompresión peritoneal indican compromiso parietal severo por sangre libre o contenido digestivo.',
            },
            {
              t: 'Signo de Kehr por irritación diafragmática',
              d: 'Dolor referido al hombro izquierdo por hemoperitoneo periesplénico',
              say: 'El signo de Kehr consiste en dolor agudo en el hombro izquierdo provocado por la sangre acumulada en el espacio subfrénico que irrita las fibras del nervio frénico.',
            },
            {
              t: 'Signos de hemoperitoneo tardío',
              d: 'Equimosis periumbilical de Cullen y en flancos de Grey Turner',
              say: 'Las equimosis periumbilicales o en flancos traducen hemorragia retroperitoneal o intraabdominal masiva, pero aparecen de forma tardía, después de doce a veinticuatro horas.',
            },
          ],
        },
        {
          title: 'Limitaciones del examen físico',
          tag: 'Falsos negativos',
          kind: 'criteria',
          items: [
            {
              t: 'Compromiso de conciencia o intoxicación',
              d: 'Glasgow alterado, alcohol o sedación enmascaran el peritonismo',
              say: 'El examen físico abdominal es poco confiable en pacientes con traumatismo encéfalo-craneano, shock severo o intoxicación por drogas o alcohol, pasando por alto lesiones graves.',
            },
            {
              t: 'Trauma raquimedular con anestesia sensitiva',
              d: 'La denervación autonómica impide percibir dolor o contractura',
              say: 'En pacientes con sección medular el abdomen puede estar completamente blando e indoloro a pesar de contener dos litros de sangre libre en su cavidad.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Ultrasonido en reanimación',
      title: 'Protocolo Eco-FAST: las cuatro ventanas ecográficas cardinales',
      cards: [
        {
          title: 'Metodología y objetivo del FAST',
          tag: 'Líquido libre',
          kind: 'key',
          items: [
            {
              t: 'Detección de hemoperitoneo en sesenta segundos',
              d: 'Visualizar interfases anecogénicas oscuras en zonas declives',
              say: 'El Eco-FAST busca líquido libre anormal en el peritoneo y pericardio. No evalúa la función del órgano ni mide laceraciones; su único objetivo es confirmar o descartar sangre libre.',
            },
            {
              t: 'Umbral de sensibilidad de volumen',
              d: 'Detecta desde doscientos mililitros de líquido en manos entrenadas',
              say: 'El examen tiene alta sensibilidad para detectar colecciones líquidas mayores a doscientos o trescientos mililitros en la cavidad peritoneal de forma no invasiva.',
            },
          ],
        },
        {
          title: 'Las cuatro ventanas anatómicas',
          tag: 'Recorrido sistemático',
          kind: 'criteria',
          items: [
            {
              t: 'Espacio hepatorrenal o fondo de saco de Morrison',
              d: 'Ventana más sensible para líquido libre en decúbito supino',
              say: 'La primera y más sensible es la ventana del cuadrante superior derecho entre el hígado y el riñón derecho, el espacio de Morrison, donde la sangre se acumula por gravedad.',
            },
            {
              t: 'Espacio periesplénico o esplenorrenal',
              d: 'Cuadrante superior izquierdo entre el bazo y el riñón izquierdo',
              say: 'La segunda es la ventana esplenorrenal en el flanco izquierdo, buscando colecciones anecogénicas alrededor del polo inferior del bazo.',
            },
            {
              t: 'Ventana pélvica o retrovesical suprapúbica',
              d: 'Fondo de saco de Douglas en mujeres y fondo rectovesical en varones',
              say: 'La tercera es la ventana pélvica sobre la sínfisis púbica, que inspecciona la pelvis menor con la vejiga discretamente distendida como ventana acústica.',
            },
            {
              t: 'Ventana pericárdica subxifoidea',
              d: 'Descarte inmediato de taponamiento cardíaco en epigastrio',
              say: 'La cuarta es la ventana subxifoidea, angulando el transductor hacia el corazón para descartar hemopericardio y taponamiento cardíaco de urgencia.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Algoritmo decisivo',
      title: 'Paciente inestable versus estable: la bifurcación obligatoria',
      cards: [
        {
          title: 'Paciente hemodinámicamente inestable',
          tag: 'Prohibido el TAC',
          kind: 'alert',
          items: [
            {
              t: 'Inestable con Eco-FAST positivo',
              d: 'Laparotomía exploradora de urgencia inmediata en pabellón',
              say: 'Esta es la regla más preguntada en el EUNACOM: si un paciente politraumatizado está hipotenso y el Eco-FAST muestra líquido libre abdominal, va de inmediato a laparotomía exploradora sin ninguna otra imagen.',
            },
            {
              t: 'Prohibición absoluta de traslado al escáner',
              d: 'El paciente inestable nunca debe ingresar a la sala de tomografía',
              say: 'Enviar a un paciente con shock persistente al tomógrafo es un error fatal. La sala de escáner no cuenta con el equipamiento necesario para reanimar un paro cardiorrespiratorio por hemorragia masiva.',
            },
            {
              t: 'Inestable con Eco-FAST negativo',
              d: 'Buscar sangrado en tórax, pelvis o retroperitoneo',
              say: 'Si el paciente está en shock y el FAST es estrictamente negativo, el sangrado no está en el peritoneo libre. Busca de inmediato hemotórax masivo, fractura de pelvis o hemorragia retroperitoneal.',
            },
          ],
        },
        {
          title: 'Paciente hemodinámicamente estable',
          tag: 'Estándar tomográfico',
          kind: 'key',
          items: [
            {
              t: 'Tomografía computarizada con contraste intravenoso',
              d: 'Estándar de oro para clasificar lesiones y planificar manejo',
              say: 'Si el paciente tiene presión arterial y pulso normales, el examen de elección es la tomografía axial computarizada de abdomen y pelvis con contraste intravenoso, que define la extensión exacta de las laceraciones.',
            },
            {
              t: 'Detección de extravasación activa o blush arterial',
              d: 'Mancha hiperdensa de contraste que indica sangrado activo',
              say: 'El escáner permite identificar el signo del blush arterial, una fuga de contraste endovenoso que indica hemorragia activa pasible de angioembolización percutánea.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo según mecanismo',
      title: 'Trauma penetrante: arma blanca versus proyectil balístico',
      cards: [
        {
          title: 'Herida por arma blanca abdominal',
          tag: 'Exploración local',
          kind: 'criteria',
          items: [
            {
              t: 'Exploración digital de la herida en el box',
              d: 'Bajo anestesia local para comprobar indemnidad aponeurótica',
              say: 'Toda herida por arma blanca en la pared abdominal anterior debe explorarse localmente en la sala de urgencias bajo anestesia local para verificar si penetró la fascia aponeurótica anterior.',
            },
            {
              t: 'Aponeurosis intacta permite alta con alarma',
              d: 'Si la fascia no fue violada, no hay riesgo intraabdominal',
              say: 'Si la aponeurosis está intacta y el examen peritoneal es normal, se sutura la piel y el paciente puede ser dado de alta con pautas de alarma.',
            },
            {
              t: 'Laceración aponeurótica o peritoneal',
              d: 'Laparoscopía exploradora o laparotomía en pabellón',
              say: 'Si el arma blanca atravesó la aponeurosis anterior o el peritoneo, el paciente debe ser ingresado a pabellón para exploración quirúrgica, idealmente laparoscópica en pacientes estables.',
            },
          ],
        },
        {
          title: 'Herida por proyectil de arma de fuego',
          tag: 'Cirugía mandatoria',
          kind: 'alert',
          items: [
            {
              t: 'Penetración abdominal casi siempre exige laparotomía',
              d: 'Más del noventa por ciento presenta lesiones viscerales graves',
              say: 'En el trauma balístico con orificio de entrada que cruza la cavidad peritoneal, la laparotomía exploradora es mandatoria en casi el cien por ciento de los casos por el alto riesgo de perforación intestinal inadvertida.',
            },
            {
              t: 'Evisceración de epiplón u órganos',
              d: 'Salida de contenido visceral por la herida es indicación de cirugía',
              say: 'La presencia de evisceración de epiplón, estómago o intestino a través de la herida constituye indicación absoluta de laparotomía formal de urgencia.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Estratificación AAST',
      title: 'Clasificación AAST y manejo del trauma de víscera sólida',
      head: ['Grado de lesión', 'Hallazgo patológico típico', 'Conducta estándar', 'Criterio de conversión a cirugía'],
      rows: [
        {
          cells: ['Grado uno', 'Hematoma subcapsular menor al 10% · Laceración < 1 cm', 'Manejo no operatorio en reposo', 'Caída inexplicable del hematocrito'],
          say: 'Las lesiones grado uno tienen hematomas subcapsulares o laceraciones superficiales mínimas y se manejan en forma no operatoria con reposo.',
        },
        {
          cells: ['Grado dos', 'Hematoma 10 a 50% · Laceración de uno a tres centímetros', 'Manejo no operatorio en agudos', 'Aparición de signos de peritonitis'],
          say: 'Las lesiones grado dos comprometen parénquima superficial sin afectar vasos y responden favorablemente a la observación clínica estricta.',
        },
        {
          cells: ['Grado tres', 'Hematoma > 50% roto · Laceración > 3 cm de profundidad', 'Manejo no operatorio en UPC · AngioTAC', 'Requerimiento de más de dos transfusiones'],
          say: 'Las lesiones grado tres tienen hematomas grandes o laceraciones profundas. Se vigilan en cuidados intensivos y se realiza angiografía si hay sangrado activo.',
        },
        {
          cells: ['Grado cuatro o cinco', 'Compromiso vascular hiliar o estallido visceral total', 'Angioembolización o cirugía urgente', 'Inestabilidad hemodinámica persistente'],
          say: 'Las lesiones grado cuatro y cinco con compromiso de vasos hiliares o estallido del órgano requieren angioembolización si está estable o laparotomía urgente si está en shock.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Enfoque conservador seguro',
      title: 'Manejo No Operatorio (MNO) en lesiones esplénicas y hepáticas',
      cards: [
        {
          title: 'Requisitos indispensables para MNO',
          tag: 'Criterios de inclusión',
          kind: 'criteria',
          items: [
            {
              t: 'Estabilidad hemodinámica estricta',
              d: 'Presión arterial y frecuencia cardíaca normales sin requerir drogas',
              say: 'El primer y más importante requisito para intentar un manejo no operatorio es que el paciente se encuentre hemodinámicamente estable sin soporte de vasopresores.',
            },
            {
              t: 'Ausencia de signos de irritación peritoneal',
              d: 'Abdomen blando sin sospecha de perforación de víscera hueca',
              say: 'El abdomen debe estar blando e indoloro, descartando peritonitis o lesión de intestino delgado que justifiquen exploración quirúrgica.',
            },
            {
              t: 'Recursos institucionales disponibles',
              d: 'Monitoreo en UPC, tomografía y pabellón quirúrgico las 24 horas',
              say: 'El hospital debe contar con unidad de cuidados intensivos, cirujano de guardia y radiología intervencional disponible de inmediato en caso de resangrado.',
            },
          ],
        },
        {
          title: 'Tromboprofilaxis en el MNO',
          tag: 'Seguridad clínica',
          kind: 'pharma',
          items: [
            {
              t: 'Inicio precoz entre veinticuatro y cuarenta y ocho horas',
              d: 'Heparina de bajo peso molecular tras documentar hematocrito estable',
              say: 'Una vez demostrada la estabilidad clínica y del hematocrito tras veinticuatro a cuarenta y ocho horas, se debe iniciar tromboprofilaxis farmacológica con enoxaparina.',
            },
            {
              t: 'Prevención de embolia pulmonar sin riesgo de sangrado',
              d: 'La heparina profiláctica no aumenta el resangrado visceral',
              say: 'La evidencia demuestra que la inmovilización prolongada en cama sin profilaxis expone a trombosis venosa profunda mortal, mientras que la heparina a dosis preventiva es completamente segura.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Región de alto riesgo',
      title: 'Heridas toracoabdominales y rotura diafragmática oculta',
      cards: [
        {
          title: 'Límites de la región toracoabdominal',
          tag: 'Zona de riesgo diafragmático',
          kind: 'criteria',
          items: [
            {
              t: 'Cuarto espacio anterior al sexto espacio posterior',
              d: 'Heridas entre pezones y reborde costal pueden atravesar diafragma',
              say: 'Cualquier herida penetrante por debajo de la línea intermamilar por anterior o la punta de la escápula por posterior hasta el reborde costal puede lesionar el diafragma.',
            },
            {
              t: 'Falla diagnóstica del TAC en diafragma izquierdo',
              d: 'Las perforaciones diafragmáticas aisladas suelen ser invisibles al TAC',
              say: 'La tomografía computarizada y la radiografía de tórax suelen ser normales en heridas diafragmáticas agudas sin herniación visceral evidente.',
            },
          ],
        },
        {
          title: 'Conducta diagnóstica y terapéutica',
          tag: 'Laparoscopía obligatoria',
          kind: 'alert',
          items: [
            {
              t: 'Laparoscopía diagnóstica de elección',
              d: 'Visualización directa de la cara abdominal del hemidiafragma',
              say: 'En el paciente hemodinámicamente estable con herida toracoabdominal izquierda, el método de elección para descartar rotura diafragmática es la laparoscopía diagnóstica.',
            },
            {
              t: 'Riesgo de hernia diafragmática tardía estrangulada',
              d: 'La gradiente toracoabdominal succiona vísceras a la cavidad pleural',
              say: 'Si no se sutura el defecto diafragmático, la presión negativa del tórax succiona el estómago y el colon, provocando hernias diafragmáticas estranguladas meses o años después.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Inmunoprofilaxis post-quirúrgica',
      title: 'Esplenectomía y prevención de la sepsis bacteriana fulminante',
      cards: [
        {
          title: 'Riesgo de sepsis fulminante post-esplenectomía',
          tag: 'OPSI en pacientes asplénicos',
          kind: 'alert',
          items: [
            {
              t: 'Infección devastadora por bacterias encapsuladas',
              d: 'Mortalidad mayor al cincuenta por ciento en menos de veinticuatro horas',
              say: 'La sepsis fulminante post-esplenectomía es una complicación letal causada por la pérdida del filtro esplénico y de la producción de opsoninas contra bacterias con cápsula polisacárida.',
            },
            {
              t: 'Tríada clásica de patógenos encapsulados',
              d: 'Streptococcus pneumoniae, Neisseria meningitidis y Haemophilus influenzae',
              say: 'El principal responsable en más del setenta por ciento de los casos es el neumococo, seguido por el meningococo y el Haemophilus influenzae tipo b.',
            },
          ],
        },
        {
          title: 'Esquema de vacunación postoperatorio',
          tag: 'Momento de administración',
          kind: 'pharma',
          items: [
            {
              t: 'Vacunación obligatoria a los catorce días de la cirugía',
              d: 'Administrar vacuna antineumocócica, antimeningocócica y anti-Hib',
              say: 'En la esplenectomía de urgencia por trauma, las vacunas deben administrarse alrededor del día catorce postoperatorio para asegurar una respuesta inmunológica humoral adecuada.',
            },
            {
              t: 'Antibioticoterapia de rescate domiciliaria',
              d: 'Amoxicilina con ácido clavulánico ante el primer signo febril',
              say: 'Todo paciente esplenectomizado debe portar una identificación médica y tener antibióticos orales de reserva para iniciar de inmediato ante cualquier cuadro febril en domicilio.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Árbol de decisión clínica',
      title: 'Algoritmo de toma de decisiones en trauma abdominal',
      say: 'Analicemos el árbol de decisiones en trauma abdominal. La primera evaluación clasifica al paciente según su estabilidad hemodinámica y el resultado del Eco-FAST.',
    },

    {
      type: 'table',
      kicker: 'Trampas del EUNACOM',
      title: 'Errores frecuentes en la toma de decisiones en trauma abdominal',
      head: ['Situación clínica', 'Conducta médica estándar', 'Error fatal o trampa'],
      rows: [
        {
          cells: [
            'Politrauma inestable con Eco-FAST positivo',
            'Laparotomía exploradora de urgencia inmediata',
            'Solicitar tomografía computarizada para localizar el sangrado',
          ],
          say: 'El paciente inestable con líquido libre no va al tomógrafo: va directo a quirófano para laparotomía de urgencia.',
        },
        {
          cells: [
            'Herida penetrante por arma blanca anterior',
            'Exploración digital local de la herida en el box',
            'Dar de alta inmediata si el examen abdominal inicial es indoloro',
          ],
          say: 'Nunca des de alta una puñalada abdominal sin antes explorar la aponeurosis bajo anestesia local en el box de urgencias.',
        },
        {
          cells: [
            'Herida toracoabdominal izquierda penetrante',
            'Laparoscopía diagnóstica para examinar diafragma',
            'Confiar en una tomografía computarizada con contraste normal',
          ],
          say: 'La tomografía no descarta rotura diafragmática izquierda; la laparoscopía es mandatoria para prevenir una hernia diafragmática estrangulada.',
        },
        {
          cells: [
            'Traumatismo esplénico grado dos estable en MNO',
            'Iniciar enoxaparina a las veinticuatro a cuarenta y ocho horas',
            'Suspender anticoagulantes por semanas por miedo a hemorragia',
          ],
          say: 'Omitir la tromboprofilaxis en un paciente postrado en cama causa embolia pulmonar mortal sin evitar el resangrado visceral.',
        },
      ],
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Oficial',
      title: 'EUNACOM Julio 2015 · Pregunta 31',
      recTag: 'EUNACOM Julio 2015 · Pregunta 31',
      stem: 'Un paciente sufre una herida por arma blanca en el abdomen, hace 8 horas. Al examen físico está en buenas condiciones generales, con signos vitales normales y examen abdominal sin signos de irritación peritoneal, con ruidos hidroaéreos presentes. Se realiza exploración digital de la herida con anestesia local, objetivándose laceración del peritoneo. ¿Cuál es la conducta más adecuada?',
      question: '¿Cuál es la conducta terapéutica indicada?',
      options: [
        { letter: 'A', text: 'Realizar lavado peritoneal diagnóstico' },
        { letter: 'B', text: 'Realizar ecografía FAST de control' },
        { letter: 'C', text: 'Suturar la herida y dar de alta con reposo' },
        { letter: 'D', text: 'Solicitar tomografía axial computarizada' },
        { letter: 'E', text: 'Realizar laparoscopía exploradora en pabellón' },
      ],
      correct: 'E',
      explanation: 'Una herida por arma blanca que atraviesa el peritoneo parietal parietal es formalmente una herida penetrante abdominal. En un paciente estable sin peritonitis franca, la exploración quirúrgica miniinvasiva mediante laparoscopía exploradora es la conducta estándar para descartar lesiones diafragmáticas, gástricas o entéricas.',
      say: {
        stem: 'Revisemos esta pregunta oficial de julio de dos mil quince. Un paciente con herida por arma blanca de ocho horas de evolución está en buenas condiciones y sin peritonitis. Al explorar la herida en el box, se constata laceración franca del peritoneo.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las alternativas plantean: lavado peritoneal diagnóstico, ecografía FAST, sutura de la herida, tomografía computarizada o laparoscopía exploradora en pabellón. Piénsalo.',
        answer: 'La respuesta correcta es la E, laparoscopía exploradora. Al demostrarse que el arma penetró el peritoneo, existe riesgo de lesiones inadvertidas de vísceras huecas o diafragma. En un paciente hemodinámicamente estable, la laparoscopía permite revisar minuciosamente la cavidad con mínima invasión y resolver cualquier hallazgo patológico.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.010',
      stem: 'Un paciente de 28 años politraumatizado por colisión vehicular ingresa taquicárdico e hipotenso con PA 75/40 mmHg. No responde a la infusión rápida de 1.000 mL de solución fisiológica tibia. En la evaluación primaria se realiza Eco-FAST que evidencia abundante líquido libre en el espacio hepatorrenal (Morrison) y en la pelvis menor. ¿Cuál es la conducta inmediata que debe adoptarse?',
      question: '¿Cuál es la conducta inmediata prioritaria?',
      options: [
        { letter: 'A', text: 'Traslado inmediato a pabellón para laparotomía exploradora de urgencia' },
        { letter: 'B', text: 'Solicitar tomografía computarizada abdominopélvica con contraste' },
        { letter: 'C', text: 'Instalar catéter venoso central y diferir cirugía' },
        { letter: 'D', text: 'Repetir el Eco-FAST en treinta minutos para evaluar progresión' },
        { letter: 'E', text: 'Solicitar arteriografía percutánea para embolización vascular' },
      ],
      correct: 'A',
      explanation: 'Paciente con trauma abdominal e inestabilidad hemodinámica persistente más Eco-FAST positivo para líquido libre intraabdominal tiene indicación absoluta e inaplazable de laparotomía exploradora de urgencia. Llevar al paciente inestable al tomógrafo está estrictamente proscrito por riesgo inminente de muerte.',
      say: {
        stem: 'Analicemos este caso representativo típico del banco de preguntas. Un politraumatizado ingresa hipotenso y taquicárdico, sin responder a la resucitación inicial de fluidos. El Eco-FAST muestra abundante líquido libre en Morrison y pelvis.',
        question: '¿Cuál es la conducta inmediata que se debe adoptar?',
        options: 'Las opciones son: laparotomía exploradora de urgencia, tomografía computarizada con contraste, catéter venoso central, repetir el FAST o arteriografía percutánea. Piénsalo.',
        answer: 'La respuesta correcta es la A, laparotomía exploradora de urgencia. La regla de oro del ATLS es inmutable: inestabilidad hemodinámica más líquido libre intraabdominal en el Eco-FAST equivale a hemoperitoneo exanguinante que solo se resuelve en pabellón quirúrgico. La alternativa B es un distractor fatal: jamás traslades a un paciente inestable al escáner.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.010',
      stem: '¿Cuál es el órgano que se lesiona con mayor frecuencia en los traumatismos abdominales cerrados o contusos de alta energía?',
      question: '¿Cuál es el órgano más frecuentemente comprometido?',
      options: [
        { letter: 'A', text: 'Hígado' },
        { letter: 'B', text: 'Bazo' },
        { letter: 'C', text: 'Páncreas' },
        { letter: 'D', text: 'Intestino delgado' },
        { letter: 'E', text: 'Vejiga urinaria' },
      ],
      correct: 'B',
      explanation: 'En el traumatismo abdominal contuso cerrado el bazo es el órgano más frecuentemente lesionado (responsable del 40 a 55% de los casos), seguido por el hígado. En el trauma penetrante por arma blanca el órgano más afectado es el hígado, y en heridas por arma de fuego es el intestino delgado.',
      say: {
        stem: 'Revisemos esta pregunta directa de epidemiología quirúrgica. Se consulta por el órgano abdominal que se lesiona con mayor frecuencia en traumatismos cerrados de alta energía.',
        question: '¿Cuál es el órgano más frecuentemente comprometido?',
        options: 'Las alternativas son: hígado, bazo, páncreas, intestino delgado o vejiga urinaria. Piénsalo.',
        answer: 'La respuesta correcta es la B, el bazo. En trauma contuso o cerrado el bazo lidera la frecuencia con más del cuarenta por ciento de las lesiones de víscera sólida, seguido de cerca por el hígado. Recuerda el contraste: en arma blanca es el hígado, y en proyectil de arma de fuego es el intestino delgado.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.010',
      stem: 'Un hombre de 24 años sufre una herida penetrante por arma blanca en el hipocondrio izquierdo. Al ingreso se encuentra vigil, con PA 120/75 mmHg y FC 80 lpm. El abdomen es blando y no doloroso. El examen físico de la herida confirma penetración de la aponeurosis. El Eco-FAST y la tomografía computarizada con contraste no muestran lesiones viscerales ni neumoperitoneo. ¿Cuál es la conducta más adecuada para descartar una rotura diafragmática oculta?',
      question: '¿Cuál es el procedimiento diagnóstico de elección?',
      options: [
        { letter: 'A', text: 'Laparoscopía diagnóstica en pabellón' },
        { letter: 'B', text: 'Alta médica con reposo y analgésicos' },
        { letter: 'C', text: 'Lavado peritoneal diagnóstico ambulatorio' },
        { letter: 'D', text: 'Radiografía seriada de esófago y estómago con bario' },
        { letter: 'E', text: 'Ecocardiograma transtorácico de control' },
      ],
      correct: 'A',
      explanation: 'En heridas toracoabdominales izquierdas las lesiones diafragmáticas son asintomáticas de inicio e invisibles a la tomografía computarizada en una alta proporción de pacientes. La laparoscopía diagnóstica es el estándar de oro para descartar y reparar defectos diafragmáticos, previniendo hernias diafragmáticas tardías estranguladas.',
      say: {
        stem: 'Veamos este escenario sobre heridas toracoabdominales. Un joven estable con herida penetrante en hipocondrio izquierdo tiene tomografía computarizada normal sin neumoperitoneo ni lesiones sólidas.',
        question: '¿Cuál es la conducta más adecuada para descartar una lesión diafragmática?',
        options: 'Las opciones son: laparoscopía diagnóstica, alta médica con reposo, lavado peritoneal, estudio contrastado con bario o ecocardiograma. Piénsalo.',
        answer: 'La respuesta correcta es la A, laparoscopía diagnóstica. En la región toracoabdominal izquierda las laceraciones del diafragma pasan desapercibidas en el escáner y la radiografía. Si no se exploran por laparoscopía, el defecto permanece abierto y con el tiempo el estómago o el colon se hernian hacia el tórax sufriendo estrangulación.',
      },
    },

    {
      type: 'points',
      kicker: 'Conceptos indispensables',
      title: 'Reglas de oro en trauma abdominal de urgencia',
      cards: [
        {
          title: 'Algoritmo decisivo e imágenes',
          tag: 'Prioridades clínicas',
          kind: 'alert',
          items: [
            {
              t: 'Inestable con FAST positivo va a pabellón',
              d: 'Laparotomía exploradora urgente; prohibido trasladar al TAC',
              say: 'La regla de oro del ATLS: shock más líquido libre en el FAST es laparotomía de urgencia inmediata.',
            },
            {
              t: 'Estable va a tomografía con contraste',
              d: 'Clasifica laceraciones AAST y detecta blush arterial para angio',
              say: 'Si el paciente está estable, el escáner con contraste endovenoso es el estándar de oro para definir conducta.',
            },
          ],
        },
        {
          title: 'Vísceras y profilaxis',
          tag: 'Seguridad quirúrgica',
          kind: 'key',
          items: [
            {
              t: 'Órgano más lesionado según mecanismo',
              d: 'Cerrado bazo, arma blanca hígado, arma de fuego intestino',
              say: 'Recuerda la epidemiología: cerrado es bazo, arma blanca es hígado y proyectil balístico es intestino delgado.',
            },
            {
              t: 'Vacunación obligatoria post-esplenectomía',
              d: 'Inmunizar a los catorce días contra neumococo, meningococo y Hib',
              say: 'Si te llevas una sola idea de hoy: en toda esplenectomía total por trauma debes administrar las vacunas contra bacterias encapsuladas alrededor del día catorce postoperatorio para prevenir la sepsis bacteriana fulminante post-esplenectomía, una complicación con mortalidad mayor al cincuenta por ciento. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Manejo en Trauma Abdominal Contuso y Penetrante',
    root: N(
      'start',
      'Ingreso de paciente con trauma abdominal sospechado',
      'Evaluación primaria y monitorización hemodinámica',
      'Iniciamos el enfrentamiento dividiendo al paciente según su estabilidad hemodinámica y el mecanismo lesional.',
      [
        'Inestabilidad hemodinámica (PAS < 90)',
        N(
          'q',
          'Eco-FAST en camilla de reanimación',
          'Búsqueda de líquido libre en cuatro ventanas',
          'Realizamos Eco-FAST inmediato en el box de reanimación.',
          [
            'Eco-FAST positivo (líquido libre)',
            N(
              'alert',
              'Laparotomía exploradora de urgencia',
              'Pabellón directo sin demora; prohibido TAC',
              'El paciente inestable con líquido libre va de inmediato a quirófano para laparotomía de control de daños.'
            )
          ],
          [
            'Eco-FAST negativo sin líquido libre',
            N(
              'do',
              'Buscar sangrado extraabdominal',
              'Descartar tórax masivo o fractura de pelvis',
              'Si el FAST es negativo, se busca hemorragia activa en tórax, retroperitoneo o pelvis inestable.'
            )
          ]
        )
      ],
      [
        'Estabilidad hemodinámica confirmada',
        N(
          'q',
          '¿Mecanismo cerrado o penetrante?',
          'Selección de estudio diagnóstico según lesión',
          'En el paciente estable evaluamos si el trauma es contuso o penetrante.',
          [
            'Trauma contuso cerrado',
            N(
              'do',
              'Tomografía computarizada con contraste IV',
              'Gradación AAST y pesquisa de blush arterial',
              'Realizamos escáner con contraste endovenoso para decidir entre manejo no operatorio o angioembolización.',
              [
                'Manejo No Operatorio en UPC',
                N(
                  'ok',
                  'Vigilancia y tromboprofilaxis a las 24-48 h',
                  'Reposo, hematocrito seriado y enoxaparina',
                  'Se indica reposo en cama, control de hematocrito e inicio de heparina profiláctica tras estabilización.'
                )
              ]
            )
          ],
          [
            'Herida penetrante por arma blanca anterior',
            N(
              'do',
              'Exploración digital local de la herida en el box',
              'Verificación de aponeurosis y peritoneo',
              'Exploramos bajo anestesia local en el box de urgencias.',
              [
                'Penetra aponeurosis o peritoneo',
                N(
                  'refer',
                  'Laparoscopía exploradora en pabellón',
                  'Revisión diafragmática y de víscera hueca',
                  'Si penetra la fascia, se realiza laparoscopía diagnóstica para descartar lesiones ocultas.'
                )
              ]
            )
          ]
        )
      ]
    ),
  },
};
