// Clase 3.19 — guion docente escrito a mano (estándar Módulo 3 · Obstetricia).
// Fuente clínica: books/scripts/dataset_obstetricia.cjs (ob-19).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ob-19',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Endometritis puerperal poscesárea, esquema antibiótico con clindamicina y gentamicina, y patología mamaria: congestión, mastitis y absceso',
      say: 'Bienvenidos a la clase sobre infecciones puerperales y patología mamaria. En esta sesión abordaremos la endometritis puerperal como la causa infecciosa más frecuente tras el parto, dominando la tríada de fiebre, subinvolución dolorosa y loquios fétidos junto a su esquema endovenoso de elección. Luego diferenciaremos con nitidez la congestión mamaria bilateral de la mastitis infecciosa por estafilococo áureo, grabando la regla de oro de nunca suspender el amamantamiento. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Infección pelviana puerperal',
      title: 'Fisiopatología de la Endometritis Puerperal Poscesárea',
      nodes: [
        { id: 'ces', col: 0, row: 1, k: 'start', t: 'Cesárea (factor de riesgo número uno)', s: 'Incisión miometrial, hematomas y presencia de material de sutura' },
        { id: 'asc', col: 1, row: 1, k: 'mech', t: 'Ascenso polimicrobiano genital', s: 'Colonización mixta de anaerobios, enterobacterias y estreptococos' },
        { id: 'dec', col: 2, row: 1, k: 'effect', t: 'Deciduitis y miometritis necrotizante', s: 'Infección tisular con necrosis de la decidua basal y senos venosos' },
        { id: 'loq', col: 3, row: 0, k: 'alert', t: 'Tríada clásica de endometritis', s: 'Fiebre persistente, subinvolución uterina dolorosa y loquios fétidos' },
        { id: 'sep', col: 3, row: 2, k: 'trap', t: 'Complicaciones: peritonitis y sepsis', s: 'Flemón del ligamento ancho, tromboflebitis pélvica séptica y shock' },
      ],
      edges: [
        { from: 'ces', to: 'asc', label: 'pérdida de barrera' },
        { from: 'asc', to: 'dec', label: 'invasión' },
        { from: 'dec', to: 'loq', label: 'manifestación' },
        { from: 'dec', to: 'sep', label: 'diseminación' },
      ],
      steps: [
        {
          show: ['ces', 'asc', 'dec'],
          note: 'Vulnerabilidad tisular tras la cesárea',
          say: 'El parto por operación cesárea es el principal factor predisponente para endometritis, multiplicando el riesgo hasta por veinte en comparación al parto vaginal. La histerotomía crea tejido desvitalizado, hematomas locales y cuerpos extraños de sutura que facilitan el ascenso y proliferación de la microbiota vaginal.',
        },
        {
          show: ['loq', 'sep'],
          note: 'Cuadro clínico y riesgo de diseminación',
          say: 'Entre el segundo y cuarto día del postparto la paciente debuta con fiebre alta en espigas, útero doloroso subinvolucionado y loquios purulentos muy fétidos. Si el cuadro no se trata precozmente en régimen de hospitalización, los gérmenes invaden el miometrio profundo generando peritonitis o tromboflebitis pélvica séptica.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico semiológico',
      title: 'Endometritis Puerperal: Factores de Riesgo y Tríada Cardinal',
      cards: [
        {
          title: 'Factores de Riesgo Mayores',
          tag: 'Antecedentes predisponentes',
          kind: 'alert',
          items: [
            {
              t: 'Cesárea de urgencia como factor primordial',
              d: 'Especialmente tras trabajo de parto prolongado o rotura de membranas prolongada',
              say: 'La cesárea es el factor de riesgo más determinante en el desarrollo de endometritis puerperal, especialmente si se realiza de urgencia tras un trabajo de parto prolongado, tactos vaginales repetidos o rotura prematura de membranas de más de doce horas.',
            },
            {
              t: 'Otros factores clínicos predisponentes',
              d: 'Corioamnionitis previa, extracción manual de placenta y anemia materna severa',
              say: 'La presencia de corioamnionitis intraparto previa, la necesidad de alumbramiento manual instrumental y la anemia materna severa debilitan los mecanismos defensivos del lecho placentario, facilitando la proliferación de bacterias patógenas.',
            },
          ],
        },
        {
          title: 'Tríada Clínica Clásica',
          tag: 'Debut al segundo a cuarto día',
          kind: 'key',
          items: [
            {
              t: 'Fiebre persistente y calofríos intensos',
              d: 'Temperatura axilar igual o superior a treinta y ocho grados en dos tomas separadas',
              say: 'La aparición de fiebre persistente de treinta y ocho grados o más con calofríos intensos y taquicardia al segundo o tercer día postoperatorio es la señal clínica inicial que debe orientar de inmediato a una infección uterina puerperal.',
            },
            {
              t: 'Subinvolución uterina dolorosa y loquios fétidos',
              d: 'Útero blando aumentado de tamaño, exquisitamente doloroso y flujo con olor pútrido',
              say: 'A la palpación bimanual, el útero se encuentra subinvolucionado, blando y francamente doloroso tanto al tacto como a la descompresión, acompañado por la salida vaginal de loquios achocolatados o turbios con un olor extraordinariamente fétido.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Terapéutica antimicrobiana',
      title: 'Microbiología y Esquema Hospitalario de la Endometritis Puerperal',
      head: ['Fármaco antimicrobiano', 'Dosis y vía de administración', 'Espectro bacteriano cubierto'],
      rows: [
        {
          cells: ['Clindamicina endovenosa', 'Novecientos miligramos cada ocho horas vía endovenosa', 'Excelente cobertura contra bacterias anaerobias estrictas, incluyendo Bacteroides fragilis'],
          say: 'La clindamicina endovenosa en dosis de novecientos miligramos cada ocho horas garantiza una excelente cobertura frente a bacterias anaerobias estrictas como Bacteroides fragilis, microorganismos altamente prevalentes en el fondo uterino infectado.',
        },
        {
          cells: ['Gentamicina endovenosa', 'Cinco miligramos por kilo al día en dosis única diaria (o un punto cinco cada ocho horas)', 'Cobertura bactericida potente frente a enterobacterias aerobias gramnegativas como E. coli'],
          say: 'La gentamicina endovenosa administrada en dosis única diaria de cinco miligramos por kilo aporta una potente acción bactericida contra bacilos gramnegativos entéricos como Escherichia coli y Klebsiella, optimizando la concentración tisular con baja toxicidad renal.',
        },
        {
          cells: ['Ampicilina endovenosa (de rescate)', 'Dos gramos cada seis horas por vía endovenosa', 'Indicada ante sospecha de Enterococcus faecalis o falla de respuesta clínica a las 48 horas'],
          say: 'Si la paciente continúa con picos febriles o mala respuesta clínica tras cuarenta y ocho horas de tratamiento con clindamicina y gentamicina, se asocia ampicilina endovenosa dos gramos cada seis horas para cubrir enterococo fecal.',
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología mamaria',
      title: 'Evolución de la Patología Mamaria en el Puerperio',
      nodes: [
        { id: 'est', col: 0, row: 1, k: 'start', t: 'Estasis de leche y congestión', s: 'Acumulación de leche por vaciamiento incompleto o técnica de agarre deficiente' },
        { id: 'gri', col: 1, row: 1, k: 'mech', t: 'Grietas del pezón y puerta de entrada', s: 'Solución de continuidad cutánea colonizada por Staphylococcus aureus' },
        { id: 'mas', col: 2, row: 1, k: 'effect', t: 'Mastitis infecciosa puerperal', s: 'Infección del parénquima y tejido conectivo con placa inflamatoria en cuña' },
        { id: 'abs', col: 3, row: 2, k: 'trap', t: 'Absceso mamario coleccionado', s: 'Necrosis supurativa focal con fluctuación palpable que exige drenaje' },
        { id: 'vac', col: 3, row: 0, k: 'good', t: 'Lactancia y vaciamiento continuo', s: 'Resolución completa mediante amamantamiento sin suspender el pecho' },
      ],
      edges: [
        { from: 'est', to: 'gri', label: 'microtrauma' },
        { from: 'gri', to: 'mas', label: 'infección bacteriana' },
        { from: 'mas', to: 'abs', label: 'tratamiento tardío' },
        { from: 'mas', to: 'vac', label: 'antibióticos y vaciamiento' },
      ],
      steps: [
        {
          show: ['est', 'gri', 'mas'],
          note: 'De la estasis láctea a la infección bacteriana',
          say: 'Un vaciamiento incompleto de los conductos galactóforos sumado a grietas en el pezón crea el ambiente perfecto para que el estafilococo áureo proveniente de la boca del recién nacido penetre al tejido mamario, originando una mastitis aguda unilateral.',
        },
        {
          show: ['vac', 'abs'],
          note: 'Vaciamiento como terapia cardinal vs progresión a absceso',
          say: 'El vaciamiento mamario constante y vigoroso mediante amamantamiento es el pilar terapéutico central que previene la estasis purulenta. Si el cuadro se descuida o se suspende erróneamente la lactancia, la infección progresa a un absceso mamario con colección de pus.',
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnóstico diferencial cardinal',
      title: 'Diagnóstico Diferencial: Congestión vs Mastitis vs Absceso Mamario',
      head: ['Entidad clínica', 'Lateralidad y momento', 'Características del examen físico y fiebre'],
      rows: [
        {
          cells: ['Congestión / Ingurgitación', 'Bilateral · primeros 2 a 4 días', 'Mamas duras y tensas simétricas difusas; afebril o febrícula leve sin eritema focal'],
          say: 'La congestión mamaria es un cuadro bilateral y difuso que aparece entre el segundo y cuarto día postparto coincidiendo con la bajada de la leche. Ambas mamas se encuentran tensas pero sin enrojecimiento focal ni fiebre alta, y su resolución es enteramente fisiológica mediante el amamantamiento.',
        },
        {
          cells: ['Mastitis Infecciosa', 'Unilateral · semanas 2 a 4', 'Placa eritematosa indurada caliente en cuña; fiebre alta mayor a 38.5°C con calofríos'],
          say: 'La mastitis infecciosa es típicamente unilateral y se presenta entre la segunda y cuarta semana del puerperio, caracterizada por una placa eritematosa en cuña caliente, indurada y muy dolorosa, acompañada de fiebre alta repentina de treinta y nueve grados con calofríos intensos.',
        },
        {
          cells: ['Absceso Mamario', 'Unilateral · complicación tardía', 'Masa dolorosa palpable con fluctuación evidente y eritema; requiere drenaje quirúrgico'],
          say: 'El absceso mamario es una complicación supurativa donde se palpa una masa dolorosa con signo de fluctuación central tras varios días de mastitis mal drenada, exigiendo confirmación mediante ecografía mamaria y drenaje evacuador.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo ambulatorio de elección',
      title: 'Mastitis Infecciosa Aguda: Antibióticos y Lactancia Continua',
      cards: [
        {
          title: 'Regla de Oro Indiscutible (EUNACOM)',
          tag: '¡NUNCA SUSPENDER LA LACTANCIA!',
          kind: 'alert',
          items: [
            {
              t: 'Continuar amamantando con ambas mamas',
              d: 'El vaciamiento constante es el tratamiento más importante para evitar abscesos',
              say: 'La regla de oro indiscutible en el manejo de la mastitis infecciosa es que nunca se debe suspender la lactancia materna. El vaciamiento constante, frecuente y completo de ambos pechos es el pilar terapéutico más importante para descongestionar el tejido y acelerar la curación.',
            },
            {
              t: 'La leche infectada no daña al lactante',
              d: 'El ácido clorhídrico gástrico del feto neutraliza el estafilococo sin causar infección',
              say: 'Existe el mito erróneo de que la leche infectada dañará al lactante; sin embargo, el ácido clorhídrico del estómago del recién nacido destruye el estafilococo áureo sin riesgo alguno, y suspender el pecho solo provocaría una estasis masiva que precipita un absceso.',
            },
          ],
        },
        {
          title: 'Tratamiento Antibiótico Antiestafilocócico',
          tag: 'Cloxacilina de primera línea',
          kind: 'pharma',
          items: [
            {
              t: 'Cloxacilina oral por diez a catorce días',
              d: 'Quinientos miligramos vía oral cada seis horas (o Cefadroxilo 500 mg cada 12 horas)',
              say: 'El tratamiento antimicrobiano ambulatorio de primera línea es la cloxacilina oral quinientos miligramos cada seis horas o cefadroxilo quinientos miligramos cada doce horas durante diez a catorce días completos para erradicar cepas sensibles de estafilococo áureo.',
            },
            {
              t: 'Medidas analgésicas y locales complementarias',
              d: 'Paracetamol o ibuprofeno para la fiebre y dolor, con compresas tibias antes de amamantar',
              say: 'Asociamos paracetamol o ibuprofeno para el dolor y la fiebre, calor local antes de cada toma para favorecer el reflejo de eyección de leche y frío local tras el vaciamiento.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Complicación supurada',
      title: 'Absceso Mamario Puerperal: Diagnóstico y Drenaje',
      cards: [
        {
          title: 'Diagnóstico Clínico y Ecográfico',
          tag: 'Fluctuación palpable',
          kind: 'key',
          items: [
            {
              t: 'Falla tras 48 a 72 horas de antibióticos',
              d: 'Persistencia de fiebre y aparición de una masa bien delimitada y fluctuante',
              say: 'Debemos sospechar la formación de un absceso mamario cuando el cuadro de mastitis infecciosa no presenta mejoría clínica tras cuarenta y ocho a setenta y dos horas de antibióticos y se palpa una masa localizada con clara sensación de fluctuación al tacto.',
            },
            {
              t: 'Ecografía mamaria confirmatoria',
              d: 'Visualiza colección anecoica o hipoecoica con detritos y reforzamiento acústico posterior',
              say: 'La ecografía mamaria de partes blandas es el método diagnóstico de elección para certificar la presencia de la colección purulenta, delimitar su tamaño exacto y guiar la aspiración percutánea o la incisión de drenaje quirúrgico.',
            },
          ],
        },
        {
          title: 'Manejo Quirúrgico y Lactancia',
          tag: 'Drenaje del absceso',
          kind: 'criteria',
          items: [
            {
              t: 'Punción-aspiración ecoguiada o drenaje abierto',
              d: 'Evacuación completa de la colección purulenta asociada a antibióticos endovenosos',
              say: 'El tratamiento del absceso mamario consiste en la punción-aspiración repetida con aguja gruesa bajo visión ecográfica para colecciones pequeñas, o en el drenaje quirúrgico abierto con incisión periareolar para abscesos voluminosos de más de tres centímetros.',
            },
            {
              t: 'Mantener lactancia con la mama contralateral',
              d: 'Se continúa amamantando con el pecho sano y se extrae mecánicamente la leche del afectado',
              say: 'La paciente debe mantener la lactancia materna con la mama contralateral sana en todo momento, y se debe extraer activamente la leche de la mama afectada mediante bomba sacaleches manual o eléctrica hasta que la herida quirúrgica se encuentre completamente limpia.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de decisión clínica',
      title: 'Algoritmo de Abordaje de la Fiebre Puerperal y Patología Mamaria',
      say: 'Revisemos el algoritmo estructurado para enfocar a la puérpera febril y clasificar las infecciones del puerperio.',
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Endometritis Puerperal Poscesárea · Tratamiento de Elección',
      stem: 'Una puérpera de 4 días de una cesárea de urgencia presenta fiebre de 38.9°C, calofríos y dolor abdominal en hipogastrio. Al examen físico se constata útero blando palpable a 3 cm sobre el ombligo, muy doloroso al tacto, con salida de loquios achocolatados con olor putrefacto. La herida quirúrgica se encuentra sana y sin eritema.',
      question: '¿Cuál es el tratamiento antimicrobiano empírico de primera línea indicado?',
      options: [
        { letter: 'A', text: 'Amoxicilina oral 500 mg cada 8 horas en forma ambulatoria por 7 días' },
        { letter: 'B', text: 'Hospitalización para tratamiento endovenoso con Clindamicina más Gentamicina' },
        { letter: 'C', text: 'Ciprofloxacino oral más Metronidazol oral en domicilio' },
        { letter: 'D', text: 'Ceftriaxona intramuscular en dosis única ambulatoria' },
        { letter: 'E', text: 'Vancomicina endovenosa más Imipenem en dosis de choque' },
      ],
      correct: 'B',
      explanation: 'El cuadro corresponde a una Endometritis Puerperal aguda severa (tríada clásica: fiebre alta de 38.9°C con calofríos, subinvolución uterina dolorosa y loquios de olor pútrido en el cuarto día postparto tras una cesárea). Es una infección polimicrobiana potencialmente grave que exige HOSPITALIZACIÓN INMEDIATA e inicio de antibioticoterapia endovenosa combinada con CLINDAMICINA (900 mg EV cada 8 horas) más GENTAMICINA (5 mg/kg/día EV). El esquema se mantiene hasta 48 horas afebril y asintomática.',
      say: {
        stem: 'Una puérpera de cuatro días de cesárea presenta fiebre de treinta y ocho punto nueve, dolor uterino, subinvolución y loquios purulentos muy fétidos.',
        question: '¿Cuál es el tratamiento antimicrobiano empírico de primera línea indicado?',
        options: 'La opción A propone amoxicilina oral ambulatoria. La B hospitalización para tratamiento endovenoso con clindamicina más gentamicina. La C ciprofloxacino oral. La D ceftriaxona en dosis única. La E vancomicina más imipenem. Piénsalo.',
        answer: 'La respuesta correcta es la B. La endometritis puerperal exige hospitalización inmediata e infusión endovenosa de clindamicina combinada con gentamicina.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Mastitis Infecciosa Puerperal · Regla de la Lactancia',
      stem: 'Una primípara de 3 semanas de puerperio en lactancia materna exclusiva acude a la urgencia por presentar fiebre de 39.2°C con calofríos intensos, mialgias y dolor severo en la mama derecha de 24 horas de evolución. Al examen físico se aprecia en el cuadrante superoexterno de la mama derecha una placa eritematosa de 6 cm, caliente, indurada y muy dolorosa a la palpación, sin fluctuación. Se observan grietas en ambos pezones.',
      question: '¿Cuál es la conducta terapéutica correcta?',
      options: [
        { letter: 'A', text: 'Suspender definitivamente la lactancia e indicar Ciprofloxacino oral por 7 días' },
        { letter: 'B', text: 'Prescribir Cloxacilina o Cefadroxilo oral por 10 a 14 días y CONTINUAR el amamantamiento' },
        { letter: 'C', text: 'Realizar drenaje quirúrgico inmediato con anestesia general en pabellón' },
        { letter: 'D', text: 'Indicar solo compresas frías y paracetamol sin antibióticos' },
        { letter: 'E', text: 'Suspender la lactancia en la mama derecha e inhibir prolactina con cabergolina' },
      ],
      correct: 'B',
      explanation: 'La paciente presenta una Mastitis Infecciosa Puerperal clásica (unilateral, con placa inflamatoria eritematosa en cuña, indurada y caliente, fiebre de 39.2°C y grietas en el pezón en la 3.ª semana postparto, típicamente causada por Staphylococcus aureus). El tratamiento estándar consiste en antibióticos orales antiestafilocócicos (Cloxacilina o Cefadroxilo) durante 10 a 14 días asociados a analgesia. La REGLA DE ORO fundamental es NUNCA SUSPENDER LA LACTANCIA MATERNA: el vaciamiento continuo de la glándula es indispensable para evitar la progresión hacia un absceso mamario.',
      say: {
        stem: 'Una puérpera de tres semanas presenta fiebre de treinta y nueve punto dos, placa eritematosa caliente indurada en mama derecha y grietas en el pezón.',
        question: '¿Cuál es la conducta terapéutica correcta con esta paciente?',
        options: 'La opción A propone suspender la lactancia con ciprofloxacino. La B prescribir cloxacilina oral por diez a catorce días y continuar amamantando. La C drenaje quirúrgico. La D solo frío local. La E inhibir prolactina. Piénsalo.',
        answer: 'La respuesta correcta es la B. La mastitis infecciosa se trata con cloxacilina oral y jamás se debe suspender la lactancia materna porque el vaciamiento es la clave de la cura.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Complicación de Mastitis · Absceso Mamario',
      stem: 'Una paciente de 26 años en tratamiento ambulatorio con cloxacilina por mastitis en la mama izquierda hace 5 días consulta por persistencia de fiebre y dolor pulsátil severo. Al examen físico se palpa una masa dolorosa de 4 cm en cuadrante inferoexterno izquierdo con eritema cutáneo y clara fluctuación central.',
      question: '¿Cuál es la confirmación diagnóstica y el tratamiento de elección?',
      options: [
        { letter: 'A', text: 'Mamografía bilateral urgente y biopsia estereotáxica con aguja gruesa' },
        { letter: 'B', text: 'Ecografía mamaria confirmatoria y drenaje quirúrgico o punción aspiración ecoguiada' },
        { letter: 'C', text: 'Cambiar cloxacilina por amoxicilina oral y mantener observación por 7 días' },
        { letter: 'D', text: 'Mastectomía parcial de urgencia para control del foco supurativo' },
        { letter: 'E', text: 'Inhibición definitiva de la lactancia con bromocriptina sin realizar drenaje' },
      ],
      correct: 'B',
      explanation: 'La persistencia de fiebre y la palpación de una masa con signo de fluctuación tras 48-72 horas de tratamiento antibiótico confirman la complicación supurativa de un Absceso Mamario Puerperal. La conducta estándar es la confirmación ecográfica (visualización de colección líquida anecoica con detritos) seguida de evacuación purulenta mediante punción-aspiración ecoguiada repetida o drenaje quirúrgico abierto con incisión periareolar o sobre la masa, manteniendo los antibióticos y continuando la lactancia con la mama sana.',
      say: {
        stem: 'Una puérpera con mastitis tratada hace cinco días consulta por persistencia de fiebre y palpación de masa caliente fluctuante en la mama izquierda.',
        question: '¿Cuál es la confirmación diagnóstica y el tratamiento de elección?',
        options: 'La opción A propone mamografía bilateral. La B ecografía mamaria y drenaje de la colección o punción aspiración. La C cambiar a amoxicilina oral. La D mastectomía parcial. La E frenar lactancia con bromocriptina. Piénsalo.',
        answer: 'La respuesta correcta es la B. La sospecha de absceso mamario fluctuante se certifica con ecografía mamaria y requiere drenaje quirúrgico o aspiración guiada.',
      },
    },

    {
      type: 'points',
      kicker: 'Reglas de oro EUNACOM',
      title: 'Conceptos Clave de Infecciones Puerperales para el EUNACOM',
      cards: [
        {
          title: 'Endometritis Puerperal Poscesárea',
          tag: 'Hospitalización y antibióticos EV',
          kind: 'alert',
          items: [
            {
              t: 'Tríada de fiebre, dolor y loquios fétidos',
              d: 'Debuta al segundo a cuarto día postcesárea con útero blando y subinvolucionado',
              say: 'La endometritis puerperal es la infección postparto más común y se anuncia por la tríada clásica de fiebre alta en espigas, útero subinvolucionado exquisitamente doloroso y loquios purulentos achocolatados muy fétidos al segundo a cuarto día de una cesárea.',
            },
            {
              t: 'Clindamicina más Gentamicina endovenosa',
              d: 'Esquema de primera línea que se mantiene hasta completar cuarenta y ocho horas afebril',
              say: 'El esquema antimicrobiano hospitalario de elección es clindamicina novecientos miligramos cada ocho horas más gentamicina endovenosa, debiendo mantenerse la vía endovenosa hasta que la paciente cumpla cuarenta y ocho horas completas afebril y asintomática.',
            },
          ],
        },
        {
          title: 'Patología Mamaria Puerperal',
          tag: 'Conductas indiscutibles',
          kind: 'key',
          items: [
            {
              t: 'Mastitis: cloxacilina y amamantar siempre',
              d: 'Unilateral, por estafilococo áureo; está terminantemente prohibido suspender el pecho',
              say: 'La mastitis puerperal aguda es unilateral, se debe a invasión por estafilococo áureo a través de grietas del pezón, se trata con cloxacilina oral y está terminantemente prohibido suspender el amamantamiento.',
            },
            {
              t: 'Absceso: masa fluctuante que exige drenaje',
              d: 'Ecografía confirmatoria y evacuación quirúrgica manteniendo la lactancia con mama sana',
              say: 'El absceso mamario requiere drenaje quirúrgico manteniendo la lactancia en la mama contralateral. Si te llevas una sola idea de hoy: la mastitis puerperal se trata con cloxacilina y vaciamiento mamario frecuente, sin suspender jamás la lactancia natural. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo Clínico de Abordaje de la Fiebre en el Puerperio',
    root: N(
      'start',
      'Puérpera con Fiebre (temperatura mayor o igual a 38.0°C)',
      'Descartar foco respiratorio y quirúrgico · examen físico mamario y pelviano minucioso',
      'Evaluamos a la puérpera febril examinando el abdomen, el útero, los loquios y ambas mamas.',
      [
        'Foco uterino: útero subinvolucionado doloroso y loquios fétidos',
        N(
          'alert',
          'Endometritis Puerperal (Infección Poscesárea)',
          'Hospitalización obligatoria e inicio de Clindamicina 900 mg EV c/8h + Gentamicina EV',
          'Ante la tríada de endometritis puerperal hospitalizamos de inmediato para antibióticos endovenosos.',
          [
            'Respuesta clínica favorable con apiresis a las 48 horas',
            N(
              'ok',
              'Completar 48 horas afebril y alta hospitalaria',
              'No requiere antibióticos orales ambulatorios si la paciente está asintomática',
              'Completadas cuarenta y ocho horas afebril se suspenden los antibióticos y se da el alta.',
            ),
          ],
        ),
      ],
      [
        'Foco mamario unilateral con placa eritematosa y dolor intenso',
        N(
          'q',
          'Mastitis Infecciosa Aguda vs Absceso Mamario',
          'Palpación cuidadosa para evaluar la presencia o ausencia de fluctuación',
          'Examinamos la mama comprometida para diferenciar una mastitis flegmonosa de un absceso coleccionado.',
          [
            'Sin fluctuación: placa eritematosa en cuña indurada',
            N(
              'do',
              'Mastitis Infecciosa Aguda (Staphylococcus aureus)',
              'Cloxacilina oral 500 mg c/6h por 10 a 14 días + ¡CONTINUAR LACTANCIA MATERNA!',
              'Iniciamos cloxacilina oral por diez a catorce días indicando continuar la lactancia con ambos pechos.',
            ),
          ],
          [
            'Con fluctuación palpable o masa que no cede a antibióticos',
            N(
              'alert',
              'Absceso Mamario Puerperal',
              'Ecografía mamaria confirmatoria + Drenaje quirúrgico o punción aspiración ecoguiada',
              'Ante una masa fluctuante confirmamos con ecografía y realizamos drenaje quirúrgico del absceso.',
            ),
          ],
        ),
      ],
    ),
  },
};
