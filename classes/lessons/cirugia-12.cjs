// Clase 11.12 — guion docente escrito a mano (estándar Módulo 2 · Cirugía).
// Fuente clínica: books/scripts/dataset_cirugia.cjs (cir-12).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-12',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Traumatismo encéfalo-craneano, escala de Glasgow, criterios de TAC sin contraste, doctrina de Monro-Kellie y manejo de hipertensión endocraneana',
      say: 'Bienvenidos a la clase de traumatismo encéfalo-craneano. En el EUNACOM el TEC es un tema cardinal donde se evalúan decisiones diagnósticas y terapéuticas impostergables. En esta sesión dominaremos la clasificación por severidad según la escala de Glasgow, las reglas clínicas precisas para indicar tomografía computarizada en TEC leve, la diferenciación anatómica y tomográfica entre hematoma epidural y subdural, y el manejo intensivo de la hipertensión endocraneana evitando los errores farmacológicos fatales. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología neurocrítica',
      title: 'Doctrina de Monro-Kellie, perfusión cerebral y daño secundario',
      nodes: [
        { id: 'com', col: 0, row: 2, k: 'start', t: 'Compartimento craneal cerrado', s: 'Caja ósea inextensible con volumen intracraneal fijo' },
        { id: 'mon', col: 1, row: 1, k: 'mech', t: 'Doctrina de Monro-Kellie', s: 'Cerebro 80% · Sangre 10% · Líquido cefalorraquídeo 10%' },
        { id: 'mas', col: 2, row: 0, k: 'risk', t: 'Masa expansiva o edema', s: 'Hematoma intracraneal desplaza LCR y sangre venosa' },
        { id: 'des', col: 2, row: 2, k: 'alert', t: 'Pérdida de complianza cerebral', s: 'Agotamiento de compensación eleva bruscamente la PIC' },
        { id: 'ppc', col: 3, row: 1, k: 'trap', t: 'Caída de perfusión cerebral', s: 'PPC = PAM menos PIC · isquemia cerebral secundaria' },
        { id: 'her', col: 4, row: 2, k: 'trap', t: 'Herniación encefálica mortal', s: 'Enclavamiento uncal o amigdalino con paro respiratorio' },
      ],
      edges: [
        { from: 'com', to: 'mon', label: 'volumen constante' },
        { from: 'mon', to: 'mas', label: 'hematoma traumático' },
        { from: 'mas', to: 'des', label: 'desplazamiento de reserva' },
        { from: 'des', to: 'ppc', label: 'hipertensión endocraneana' },
        { from: 'des', to: 'her', label: 'gradiente de presión' },
        { from: 'ppc', to: 'her', label: 'isquemia masiva' },
      ],
      steps: [
        {
          show: ['com', 'mon'],
          note: 'El cráneo como bóveda inextensible',
          say: 'La cavidad craneal es una estructura rígida con un volumen total fijo. De acuerdo con la doctrina de Monro-Kellie, este espacio está ocupado por tres componentes en equilibrio: el parénquima cerebral que representa el ochenta por ciento, la sangre con un diez por ciento y el líquido cefalorraquídeo con el diez por ciento restante.',
        },
        {
          show: ['mas', 'des'],
          note: 'Agotamiento de la complianza y alza de PIC',
          say: 'Cuando aparece una masa adicional, como un hematoma epidural o subdural, el sistema compensa inicialmente desplazando líquido cefalorraquídeo hacia el canal espinal y vaciando sangre venosa de los senos durales. Una vez agotada esta reserva elástica, pequeños aumentos de volumen disparan de manera exponencial la presión intracraneana.',
        },
        {
          show: ['ppc', 'her'],
          note: 'Isquemia cerebral secundaria y enclavamiento',
          say: 'La presión de perfusión cerebral es igual a la presión arterial media menos la presión intracraneana. Si la PIC se eleva por encima de veinte milímetros de mercurio o si el paciente cae en hipotensión sistémica, la perfusión cerebral colapsa provocando isquemia cerebral secundaria masiva o herniación encefálica fatal.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Clasificación y pronóstico',
      title: 'Severidad del TEC según la escala de Glasgow y prevención del daño secundario',
      cards: [
        {
          title: 'Estratificación por Glasgow',
          tag: 'Gravedad clínica',
          kind: 'criteria',
          items: [
            {
              t: 'TEC leve: trece a quince puntos',
              d: 'Bajo riesgo de lesión quirúrgica; evaluar criterios de TAC',
              say: 'El TEC leve tiene entre trece y quince puntos. La inmensa mayoría se recupera favorablemente, pero un subgrupo de alto riesgo puede deteriorarse rápidamente por un hematoma expansivo oculto.',
            },
            {
              t: 'TEC moderado: nueve a doce puntos',
              d: 'Hospitalización obligatoria y tomografía computarizada urgente',
              say: 'El TEC moderado tiene entre nueve y doce puntos. Todos requieren tomografía de encéfalo inmediata y hospitalización en sala de intermedio para monitoreo neurológico estricto.',
            },
            {
              t: 'TEC grave: tres a ocho puntos',
              d: 'Intubación inmediata, neurointensivo y monitoreo invasivo de PIC',
              say: 'El TEC grave tiene un puntaje menor o igual a ocho puntos. Constituye una emergencia vital absoluta que exige intubación orotraqueal inmediata y traslado a una unidad de pacientes críticos.',
            },
          ],
        },
        {
          title: 'Los dos asesinos secundarios',
          tag: 'Daño evitable',
          kind: 'alert',
          items: [
            {
              t: 'Hipotensión arterial sistémica',
              d: 'Una sola cifra de presión sistólica menor a noventa duplica la mortalidad',
              say: 'La hipotensión es el factor pronóstico modificable más destructivo. Un solo episodio de presión arterial sistólica menor a noventa milímetros de mercurio duplica la mortalidad en el TEC grave.',
            },
            {
              t: 'Hipoxemia arterial aguda',
              d: 'Presión de oxígeno menor a sesenta o saturación bajo noventa por ciento',
              say: 'La hipoxemia agrava de inmediato la isquemia celular. Se debe asegurar saturación sobre noventa y cuatro por ciento y presión arterial de oxígeno mayor a ochenta milímetros de mercurio.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Reglas de decisión clínica',
      title: 'Indicaciones de TAC de encéfalo sin contraste en TEC leve',
      cards: [
        {
          title: 'Factores de alto riesgo quirúrgico',
          tag: 'Indicación absoluta de escáner',
          kind: 'alert',
          items: [
            {
              t: 'Glasgow menor a quince a las dos horas',
              d: 'Incapacidad de retornar al puntaje máximo en observación',
              say: 'Si el paciente no recupera un Glasgow de quince puntos tras dos horas de observación en urgencias, la tomografía de encéfalo sin contraste es mandatoria.',
            },
            {
              t: 'Edad mayor o igual a sesenta y cinco años',
              d: 'Atrofia cerebral predispone a sangrado con traumas mínimos',
              say: 'Todo adulto mayor de sesenta y cinco años que sufre un golpe en la cabeza tiene indicación formal de escáner, aunque esté lúcido con quince puntos al ingreso.',
            },
            {
              t: 'Uso de anticoagulantes orales o antiagregantes',
              d: 'Warfarina, apixabán, rivaroxabán o clopidogrel multiplican el riesgo',
              say: 'El antecedente de anticoagulación oral o terapia antiplaquetaria obliga a realizar tomografía urgente sin importar lo leve que haya sido el traumatismo.',
            },
          ],
        },
        {
          title: 'Signos clínicos y cinemática',
          tag: 'Criterios adicionales',
          kind: 'criteria',
          items: [
            {
              t: 'Vómitos repetidos y amnesia retrógrada',
              d: 'Dos o más episodios de vómitos o amnesia mayor a treinta minutos',
              say: 'La presencia de dos o más vómitos explosivos o una amnesia del evento mayor a treinta minutos justifican plenamente la realización de un escáner craneal.',
            },
            {
              t: 'Sospecha de fractura con hundimiento o base',
              d: 'Depresión ósea palpable o estigmas semiológicos de base',
              say: 'Cualquier irregularidad ósea o signo de fractura craneal exige tomografía inmediata para descartar desgarros durales y neumoencéfalo.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Semiología ósea craneal',
      title: 'Signos cardinales de fractura de base de cráneo',
      cards: [
        {
          title: 'Fosa anterior y media',
          tag: 'Hallazgos patognomónicos',
          kind: 'alert',
          items: [
            {
              t: 'Ojos de mapache o equimosis periorbitaria',
              d: 'Sangrado en tejido celular subcutáneo por fractura de fosa anterior',
              say: 'El signo de los ojos de mapache consiste en equimosis periorbitaria bilateral sin compromiso ocular directo, característica de fractura del techo orbitario y fosa anterior.',
            },
            {
              t: 'Signo de Battle retroauricular',
              d: 'Equimosis sobre la mastoides por fractura de peñasco temporal',
              say: 'El signo de Battle es una mancha equimótica sobre la apófisis mastoides que aparece doce a veinticuatro horas después por rotura de la base temporal.',
            },
          ],
        },
        {
          title: 'Fístula de líquido cefalorraquídeo y riesgos',
          tag: 'Brecha meníngea',
          kind: 'key',
          items: [
            {
              t: 'Rinorraquia y otorraquia de LCR',
              d: 'Salida de líquido transparente que da el signo del halo en gasa',
              say: 'La salida de líquido claro por nariz o conducto auditivo traduce fístula dural. Al gotear en una gasa forma un anillo transparente periférico rodeando el centro hemático, el signo del halo.',
            },
            {
              t: 'Prohibición estricta de sonda nasogástrica',
              d: 'Riesgo de penetración inadvertida al lóbulo frontal a través de la lámina cribosa',
              say: 'Grábate esta trampa de examen: ante sospecha de fractura de base de cráneo está contraindicada la sonda nasogástrica. Debe usarse siempre una sonda orogástrica por la boca.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnóstico diferencial tomográfico',
      title: 'Hematoma epidural agudo versus hematoma subdural agudo',
      head: ['Característica', 'Hematoma epidural agudo', 'Hematoma subdural agudo'],
      rows: [
        {
          cells: ['Vaso sanguíneo comprometido', 'Arteria meníngea media (habitualmente)', 'Venas puente corticales parasagitales'],
          say: 'El epidural sangra por rotura de la arteria meníngea media tras fractura del hueso temporal. El subdural sangra por desgarro de las venas puente que van hacia el seno longitudinal.',
        },
        {
          cells: ['Espacio anatómico', 'Entre tabla interna del cráneo y duramadre', 'Entre la duramadre y la aracnoides'],
          say: 'El epidural se ubica por fuera de la duramadre en un espacio virtual que debe despegarse a presión arterial. El subdural se acumula libremente bajo la duramadre.',
        },
        {
          cells: ['Imagen tomográfica en TAC', 'Colección hiperdensa biconvexa o lenticular', 'Colección hiperdensa en semiluna cóncava'],
          say: 'En el escáner el epidural forma una lente biconvexa que no cruza las suturas craneales porque la duramadre está adherida al hueso. El subdural forma una semiluna que sí cruza suturas.',
        },
        {
          cells: ['Patrón clínico evolutivo', 'Pérdida de conciencia con intervalo lúcido', 'Deterioro neurológico progresivo continuo'],
          say: 'El epidural presenta el clásico intervalo lúcido: golpe, recuperación momentánea y caída súbita en coma con midriasis. El subdural suele presentar deterioro continuo desde el impacto.',
        },
        {
          cells: ['Pronóstico y mortalidad', 'Excelente si se evacua a tiempo (<10%)', 'Grave con alta mortalidad (40 a 60%)'],
          say: 'El epidural tiene excelente pronóstico si se drena de inmediato porque el cerebro subyacente suele estar intacto. El subdural tiene alta mortalidad por daño parenquimatoso severo concurrente.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Emergencia neuroquirúrgica',
      title: 'Hematoma epidural agudo e intervalo lúcido',
      cards: [
        {
          title: 'Anatomía y cronología clásica',
          tag: 'Arteria meníngea media',
          kind: 'alert',
          items: [
            {
              t: 'Fractura temporal o de la escama',
              d: 'Impacto directo sobre el pterion secciona la arteria',
              say: 'El pterion es el punto más delgado de la bóveda craneal. Una fractura lineal en esta zona desgarra directamente la arteria meníngea media.',
            },
            {
              t: 'El clásico intervalo lúcido',
              d: 'Pérdida inicial, despertar normal y posterior colapso en coma',
              say: 'El paciente se despierta lúcido tras el golpe inicial creyendo estar bien, pero mientras la sangre arterial acumula presión, el hematoma despega la duramadre hasta provocar herniación.',
            },
          ],
        },
        {
          title: 'Signos de herniación uncal',
          tag: 'Compresión del tercer par',
          kind: 'key',
          items: [
            {
              t: 'Midriasis ipsilateral arreactiva',
              d: 'Compresión del nervio motor ocular común del lado del hematoma',
              say: 'El lóbulo temporal herniado comprime las fibras parasimpáticas periféricas del tercer par craneal ipsilateral, provocando midriasis fija.',
            },
            {
              t: 'Hemiplejia contralateral piramidal',
              d: 'Compresión del pedúnculo cerebral antes de la decusación',
              say: 'La compresión de la vía piramidal en el mesencéfalo produce hemiparesia o hemiplejia en el lado contrario al hematoma.',
            },
            {
              t: 'Tratamiento neuroquirúrgico urgente',
              d: 'Craneotomía evacuadora inmediata con hemostasia arterial',
              say: 'El tratamiento es la craneotomía de urgencia con evacuación del coágulo y coagulación del vaso sangrante, revirtiendo el cuadro por completo si se hace a tiempo.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Patología del adulto mayor',
      title: 'Hematoma subdural: formas agudas, subagudas y crónicas',
      cards: [
        {
          title: 'Hematoma subdural agudo',
          tag: 'Alta energía en jóvenes o caídas',
          kind: 'alert',
          items: [
            {
              t: 'Sangrado venoso con daño parenquimatoso',
              d: 'Asociado frecuentemente a contusiones cerebrales graves',
              say: 'El hematoma subdural agudo aparece en las primeras setenta y dos horas. Se asocia a laceración cortical severa y edema masivo del hemisferio.',
            },
            {
              t: 'Criterios quirúrgicos en escáner',
              d: 'Espesor mayor a diez milímetros o desviación de línea media mayor a cinco',
              say: 'Requiere craneotomía si el espesor del hematoma supera diez milímetros o si produce una desviación de la línea media mayor a cinco milímetros en la tomografía.',
            },
          ],
        },
        {
          title: 'Hematoma subdural crónico',
          tag: 'El gran simulador en ancianos',
          kind: 'key',
          items: [
            {
              t: 'Atrofia cerebral y traumatismo trivial semanas atrás',
              d: 'Tironeamiento lento de venas puente con acumulación progresiva',
              say: 'En adultos mayores con atrofia cerebral o alcoholismo, un golpe menor desapercibido semanas antes desgarra una vena puente. El hematoma se licúa lentamente y forma una cápsula.',
            },
            {
              t: 'Clínica de deterioro cognitivo y cefalea',
              d: 'Confusión progresiva, fluctuación mental y bradipsiquia',
              say: 'Suele confundirse con demencia senil o depresión. El escáner muestra una colección hipodensa o isodensa en semiluna que se resuelve mediante orificios de trépano bajo anestesia local.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo en UPC',
      title: 'Manejo del TEC grave y metas de neurointensivo',
      cards: [
        {
          title: 'Medidas de primer nivel',
          tag: 'Neuroprotección basal',
          kind: 'key',
          items: [
            {
              t: 'Posición de cabecera a treinta grados',
              d: 'Favorece el drenaje venoso yugular sin comprometer presión arterial',
              say: 'La cama debe mantenerse con elevación cefálica de treinta grados y el cuello estrictamente alineado para optimizar el retorno venoso cerebral por las yugulares.',
            },
            {
              t: 'Normocapnia estricta y normotermia',
              d: 'PaCO2 entre treinta y cinco y cuarenta milímetros de mercurio',
              say: 'Se mantiene normocapnia. La hipocapnia produce vasoconstricción cerebral e isquemia; la hipercapnia causa vasodilatación e hipertensión endocraneana refractaria.',
            },
            {
              t: 'Meta de presión de perfusión cerebral',
              d: 'Mantener PPC mayor a sesenta milímetros de mercurio',
              say: 'La meta terapéutica es mantener la presión de perfusión cerebral por encima de sesenta a setenta milímetros de mercurio, optimizando la presión arterial media con noradrenalina si es necesario.',
            },
          ],
        },
        {
          title: 'Osmoterapia y medidas avanzadas',
          tag: 'Control de hipertensión endocraneana',
          kind: 'pharma',
          items: [
            {
              t: 'Suero salino hipertónico al tres por ciento',
              d: 'Agente osmótico de elección si hay hipotensión arterial sistémica',
              say: 'Si el paciente tiene presión arterial límite o hipotensión, el suero salino hipertónico al tres por ciento es el fármaco de elección porque expande la volemia mientras reduce el edema cerebral.',
            },
            {
              t: 'Manitol al veinte por ciento: precaución extrema',
              d: 'Contraindicado en shock o hipotensión por su efecto diurético',
              say: 'El manitol está contraindicado si la presión arterial sistólica es menor a noventa milímetros de mercurio, ya que su diuresis osmótica desata una hipovolemia que agrava la isquemia cerebral.',
            },
            {
              t: 'Craniectomía descompresiva de rescate',
              d: 'Retiro de un colgajo óseo frontal o temporal amplio con durotomía',
              say: 'Si la presión intracraneana se mantiene sobre veinte milímetros de mercurio refractaria a medidas médicas, se realiza una craniectomía descompresiva amplia para evitar el enclavamiento mortal.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Árbol de decisión clínica',
      title: 'Algoritmo de enfrentamiento diagnóstico y manejo del TEC',
      say: 'Analicemos el árbol de decisiones en traumatismo encéfalo-craneano. La primera clasificación estratifica al paciente según su puntaje en la escala de Glasgow.',
    },

    {
      type: 'table',
      kicker: 'Trampas del EUNACOM',
      title: 'Errores frecuentes en la toma de decisiones en TEC',
      head: ['Situación clínica', 'Conducta médica estándar', 'Error fatal o trampa'],
      rows: [
        {
          cells: [
            'Adulto mayor de setenta años anticoagulado con Glasgow 15',
            'Tomografía de encéfalo sin contraste urgente',
            'Dar de alta inmediata por encontrarse lúcido',
          ],
          say: 'Los ancianos anticoagulados pueden tener hematomas subdurales asintomáticos al inicio que sangran horas después. El escáner es obligatorio.',
        },
        {
          cells: [
            'Hipertensión endocraneana con presión arterial 85/50',
            'Suero salino hipertónico y noradrenalina',
            'Indicar bolo de manitol al veinte por ciento',
          ],
          say: 'Pasar manitol en un paciente hipotenso agrava el colapso hemodinámico y precipita la isquemia cerebral secundaria.',
        },
        {
          cells: [
            'Ojos de mapache y licuorrea nasal post-trauma',
            'Sonda orogástrica por la boca bajo visión',
            'Instalar sonda nasogástrica por la fosa nasal',
          ],
          say: 'Introducir una sonda por la nariz ante una fractura de base de cráneo puede perforar la lámina cribosa y alojarse dentro del cerebro.',
        },
        {
          cells: [
            'TEC leve con pérdida de conciencia de un minuto',
            'Evaluar reglas de TAC (New Orleans / Canadian)',
            'Solicitar radiografía de cráneo anteroposterior y lateral',
          ],
          say: 'La radiografía simple de cráneo no descarta hemorragia intracraneal y no tiene utilidad en el algoritmo de urgencias.',
        },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      recTag: 'Banco Oficial AEE · Perfil V3 1.10.2.006',
      stem: 'Un hombre de 22 años sufre una caída de motocicleta con golpe craneal. Inicialmente presentó pérdida transitoria de conciencia de 1 minuto, recuperándose por completo. Dos horas más tarde, mientras se encontraba en observación en el box de urgencias, evoluciona rápidamente con compromiso progresivo de conciencia, llegando al coma, y se constata anisocoria con midriasis pupilar derecha arreactiva. ¿Cuál es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Hemorragia subaracnoidea aneurismática' },
        { letter: 'B', text: 'Hematoma epidural agudo por rotura de la arteria meníngea media' },
        { letter: 'C', text: 'Hematoma subdural crónico con resangrado' },
        { letter: 'D', text: 'Trombosis del seno venoso longitudinal' },
        { letter: 'E', text: 'Contusión cerebral hemorrágica bifrontal' },
      ],
      correct: 'B',
      explanation: 'El cuadro corresponde al patrón clásico del hematoma epidural agudo: impacto temporal, intervalo lúcido asintomático y deterioro posterior fulminante con coma y midriasis ipsilateral derecha por herniación uncal con compresión del tercer par craneal. Se origina por rotura de la arteria meníngea media y exige descompresión quirúrgica inmediata.',
      say: {
        stem: 'Revisemos este caso clásico de la patología neuroquirúrgica de urgencia. Un joven sufre un traumatismo craneano, se recupera completamente, pero a las dos horas cae súbitamente en coma con midriasis pupilar derecha fija.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las alternativas proponen: hemorragia subaracnoidea, hematoma epidural agudo por rotura de arteria meníngea media, hematoma subdural crónico, trombosis venosa o contusión cerebral. Piénsalo.',
        answer: 'La respuesta correcta es la B, hematoma epidural agudo. El intervalo lúcido seguido de coma y midriasis ipsilateral por herniación del uncus temporal comprimiendo el tercer par craneal es la presentación de libro de la rotura de la arteria meníngea media. Requiere craneotomía urgente.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      recTag: 'Banco Oficial AEE · Perfil V3 1.10.2.006',
      stem: 'Una mujer de 72 años en tratamiento con anticoagulantes orales directos (apixabán) por fibrilación auricular sufre una caída a nivel en su hogar, golpeándose levemente la cabeza. Al examen físico en urgencias se encuentra vigil, orientada en tiempo y espacio con Glasgow de 15 puntos, sin focalidad motora y con una pequeña contusión occipital. De acuerdo con las normas de evaluación del TEC, ¿cuál es la conducta más adecuada?',
      question: '¿Cuál es la conducta diagnóstica inicial indicada?',
      options: [
        { letter: 'A', text: 'Dar de alta de inmediato por encontrarse con Glasgow quince sin déficit' },
        { letter: 'B', text: 'Solicitar tomografía computarizada de encéfalo sin contraste de urgencia' },
        { letter: 'C', text: 'Indicar radiografía de cráneo anteroposterior y lateral en policlínico' },
        { letter: 'D', text: 'Suspender el apixabán y citar a control en siete días' },
        { letter: 'E', text: 'Administrar concentrado de complejo protrombínico y enviar a domicilio' },
      ],
      correct: 'B',
      explanation: 'En un paciente con TEC leve (Glasgow 15), la edad mayor o igual a 65 años y el uso de anticoagulantes orales son criterios mandatorios de realización inmediata de tomografía de encéfalo sin contraste. Los adultos mayores anticoagulados pueden tener hematomas subdurales silentes con riesgo de herniación diferida.',
      say: {
        stem: 'Analicemos este caso clínico sobre reglas de decisión en TEC leve. Una paciente de setenta y dos años usuaria de apixabán sufre una caída doméstica menor y se encuentra totalmente lúcida con quince puntos en la escala de Glasgow.',
        question: '¿Cuál es la conducta más adecuada a seguir?',
        options: 'Las opciones son: alta inmediata, tomografía computarizada de encéfalo sin contraste urgente, radiografía simple de cráneo, suspender anticoagulante con control ambulatorio o administrar complejo protrombínico. Piénsalo.',
        answer: 'La respuesta correcta es la B, solicitar tomografía de encéfalo sin contraste de urgencia. Jamás des de alta a un paciente anticoagulado mayor de sesenta y cinco años con TEC sin una tomografía previa. La atrofia cortical estira las venas puente y permite que los hematomas subdurales alcancen volúmenes peligrosos antes de dar síntomas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      recTag: 'Banco Oficial AEE · Perfil V3 1.10.2.006',
      stem: '¿Cuál de los siguientes hallazgos tomográficos es característico de un hematoma subdural agudo en la tomografía computarizada de encéfalo sin contraste?',
      question: '¿Cuál es el patrón tomográfico característico?',
      options: [
        { letter: 'A', text: 'Colección hiperdensa en forma de lente biconvexa que respeta las suturas craneales' },
        { letter: 'B', text: 'Colección hiperdensa en forma de semiluna cóncava que bordea el hemisferio y cruza suturas' },
        { letter: 'C', text: 'Hiperdensidad circunscrita exclusiva en las cisternas perimesencefálicas de la base' },
        { letter: 'D', text: 'Lesiones petequiales hiperdensas puntiformes múltiples en la unión sustancia blanca y gris' },
        { letter: 'E', text: 'Colección hipodensa homogénea con cápsula calcificada periférica' },
      ],
      correct: 'B',
      explanation: 'El hematoma subdural agudo se ubica entre la duramadre y la aracnoides. Al no estar limitado por las inserciones de las suturas craneales que fijan la duramadre a la tabla interna, la sangre se extiende libremente por la superficie hemisférica adoptando la morfología en semiluna cóncava que sí sobrepasa las suturas.',
      say: {
        stem: 'Revisemos esta pregunta sobre semiología radiológica en neurotrauma. Se consulta por la imagen tomográfica característica del hematoma subdural agudo.',
        question: '¿Cuál es el patrón imagenológico que lo define?',
        options: 'Las alternativas describen: lente biconvexa que respeta suturas, semiluna cóncava que bordea el hemisferio y cruza suturas, hiperdensidad en cisternas de la base, petequias en sustancia blanca o colección hipodensa capsulada. Piénsalo.',
        answer: 'La respuesta correcta es la B, colección hiperdensa en semiluna cóncava que cruza suturas craneales. Recuerda la diferencia geométrica clave: el hematoma epidural es una lente biconvexa que respeta las suturas, mientras que el subdural es una semiluna que se expande por toda la convexidad y sí cruza las líneas de sutura ósea.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      recTag: 'Banco Oficial AEE · Perfil V3 1.10.2.006',
      stem: 'Un paciente de 28 años con TEC grave (Glasgow 6 puntos) se encuentra intubado en la Unidad de Pacientes Críticos. En el monitoreo invasivo se registra una Presión Intracraneana (PIC) de 28 mmHg (normal < 20 mmHg) y su presión arterial es de 85/50 mmHg. ¿Cuál es el error terapéutico que debe evitarse de manera prioritaria en este escenario?',
      question: '¿Cuál es el error farmacológico que debe evitarse?',
      options: [
        { letter: 'A', text: 'Administrar noradrenalina para elevar la presión arterial media' },
        { letter: 'B', text: 'Indicar manitol al veinte por ciento en bolo en presencia de hipotensión' },
        { letter: 'C', text: 'Mantener la cabecera de la cama elevada en treinta grados' },
        { letter: 'D', text: 'Mantener la PaCO2 en rango de normocapnia de treinta y cinco a cuarenta' },
        { letter: 'E', text: 'Infusión de solución salina al cero coma nueve por ciento para reposición de volumen' },
      ],
      correct: 'B',
      explanation: 'El paciente presenta hipertensión endocraneana (PIC 28) asociada a hipotensión arterial sistémica (PAM 61 mmHg), lo que condiciona una presión de perfusión cerebral crítica de solo 33 mmHg (PPC = PAM - PIC = 61 - 28 = 33 mmHg, meta > 60 mmHg). En presencia de hipotensión el manitol está contraindicado porque su potente diuresis osmótica empeora la hipovolemia, perpetúa el shock y desencadena isquemia cerebral secundaria masiva. Debe utilizarse suero salino hipertónico al 3% y vasopresores.',
      say: {
        stem: 'Veamos este escenario crítico de neurointensivo. Un paciente con TEC grave tiene hipertensión endocraneana con PIC de veintiocho milímetros de mercurio, pero se encuentra hipotenso con ochenta y cinco con cincuenta de presión arterial.',
        question: '¿Cuál es el error terapéutico que se debe evitar a toda costa?',
        options: 'Las alternativas proponen: usar noradrenalina, indicar manitol al veinte por ciento en bolo con hipotensión, elevar cabecera a treinta grados, mantener normocapnia o infundir suero fisiológico. Piénsalo.',
        answer: 'La respuesta correcta es la B, indicar manitol al veinte por ciento en presencia de hipotensión. Con una presión de perfusión cerebral de solo treinta y tres milímetros de mercurio, el manitol causa diuresis masiva que derrumba aún más la presión arterial, matando el tejido cerebral por isquemia. En este escenario se usa suero salino hipertónico al tres por ciento y noradrenalina.',
      },
    },

    {
      type: 'points',
      kicker: 'Conceptos indispensables',
      title: 'Reglas de oro en traumatismo encéfalo-craneano',
      cards: [
        {
          title: 'Doctrina y perfusión',
          tag: 'Manejo hemodinámico',
          kind: 'alert',
          items: [
            {
              t: 'Evitar a toda costa la hipotensión',
              d: 'Un solo registro de presión sistólica menor a noventa duplica mortalidad',
              say: 'La hipotensión sistémica es el peor enemigo del cerebro lesionado: mantén la presión sistólica sobre cien y la perfusión cerebral sobre sesenta.',
            },
            {
              t: 'Suero hipertónico si hay shock asociado',
              d: 'Manitol proscrito si la presión arterial sistólica es menor a noventa',
              say: 'Si la PIC está alta pero el paciente está hipotenso, el manitol está contraindicado: el fármaco osmótico de elección es el suero salino hipertónico.',
            },
          ],
        },
        {
          title: 'Semiología y sospecha quirúrgica',
          tag: 'Signos de alarma',
          kind: 'key',
          items: [
            {
              t: 'Anticoagulados exigen tomografía obligatoria',
              d: 'Todo mayor de sesenta y cinco años o anticoagulado con TEC va a escáner',
              say: 'Nunca confíes en un Glasgow de quince en un anciano anticoagulado: el TAC sin contraste es obligatorio para descartar hematoma subdural.',
            },
            {
              t: 'Intervalo lúcido y midriasis es hematoma epidural',
              d: 'Rotura de arteria meníngea media exige craneotomía de rescate',
              say: 'Si te llevas una sola idea de hoy: la tríada de impacto craneal, intervalo lúcido transitorio y posterior caída en coma con midriasis pupilar ipsilateral es patognomónica del hematoma epidural agudo por rotura de la arteria meníngea media. Requiere craneotomía y evacuación inmediata para salvar la vida antes del enclavamiento. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Decisión Clínica y Manejo del Traumatismo Encéfalo-Craneano',
    root: N(
      'start',
      'Ingreso de paciente con traumatismo encéfalo-craneano',
      'Evaluación primaria y determinación de la escala de Glasgow',
      'Iniciamos el enfrentamiento clínico clasificando la severidad según el puntaje de la escala de Glasgow.',
      [
        'TEC leve (Glasgow 13 a 15)',
        N(
          'q',
          '¿Presenta criterios de alto riesgo tomográfico?',
          'Mayor de sesenta y cinco años, anticoagulación, vómitos o fractura de base',
          'Evaluamos si el paciente presenta criterios de las reglas canadiense o de New Orleans para indicar escáner.',
          [
            'Con criterios de alto riesgo',
            N(
              'alert',
              'Tomografía de encéfalo sin contraste urgente',
              'Pesquisa precoz de hematomas intracraneales',
              'Solicitamos tomografía computarizada sin contraste inmediata y mantenemos en observación hospitalaria.',
              [
                'Hematoma expansivo o desviación de línea media',
                N(
                  'refer',
                  'Derivación a neurocirugía de urgencia',
                  'Craneotomía para evacuación de hematoma epidural o subdural',
                  'Se traslada de inmediato a pabellón neuroquirúrgico para descompresión craneal antes del deterioro.'
                )
              ]
            )
          ],
          [
            'Sin criterios de alarma y Glasgow 15',
            N(
              'ok',
              'Observación clínica por seis horas y alta con pautas',
              'Acompañante responsable y signos de reconsulta',
              'Si el paciente no tiene factores de riesgo, se observa durante seis horas y se da de alta con instrucciones escritas.'
            )
          ]
        )
      ],
      [
        'TEC moderado (Glasgow 9 a 12)',
        N(
          'do',
          'Tomografía sin contraste obligatoria y hospitalización',
          'Monitoreo neurológico seriado en sala de cuidados intermedios',
          'Todo paciente con TEC moderado requiere tomografía computarizada sin contraste y vigilancia continua.',
          [
            'Deterioro neurológico o caída de Glasgow',
            N(
              'alert',
              'Repetir tomografía y evaluar neurocirugía',
              'Descartar progresión de contusiones o hematomas',
              'Cualquier caída en la escala de Glasgow exige repetir el escáner y evaluar intervención quirúrgica urgente.'
            )
          ]
        )
      ],
      [
        'TEC grave (Glasgow 3 a 8)',
        N(
          'alert',
          'Intubación orotraqueal y neuroprotección intensiva',
          'Técnica de cuatro manos con alineación cervical manual',
          'El TEC grave exige aseguramiento de la vía aérea con intubación inmediata y ventilación controlada.',
          [
            'Monitoreo neurointensivo en UPC',
            N(
              'do',
              'Monitoreo invasivo de PIC y perfusión cerebral',
              'Meta de PIC menor a veinte y PPC mayor a sesenta mmHg',
              'Se instala catéter de monitoreo de presión intracraneana y se optimiza la presión arterial media.',
              [
                'Hipertensión endocraneana refractaria',
                N(
                  'refer',
                  'Osmoterapia con hipertónico y craniectomía',
                  'Suero al tres por ciento y descompresión quirúrgica',
                  'Si la PIC supera veinte milímetros de mercurio se administra suero hipertónico y se realiza craniectomía descompresiva.'
                )
              ]
            )
          ]
        )
      ]
    ),
  },
};
