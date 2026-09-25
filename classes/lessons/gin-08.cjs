// Clase 20.8 — guion docente escrito a mano (estándar Módulo 3 · Ginecología).
// Fuente clínica: books/scripts/dataset_ginecologia.cjs (gin-08).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gin-08',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Anticoncepción y planificación familiar, criterios de elegibilidad OMS, contraindicaciones absolutas de estrógenos y píldora de emergencia',
      say: 'Bienvenidos a la clase sobre anticoncepción y planificación familiar, uno de los capítulos de mayor peso en la práctica médica general y en el examen EUNACOM. En esta sesión dominaremos los Criterios Médicos de Elegibilidad de la Organización Mundial de la Salud, memorizaremos las contraindicaciones absolutas e inexcusables de los estrógenos, compararemos los dispositivos intrauterinos, aprenderemos el manejo de olvidos y revisaremos el manejo estricto de la anticoncepción de emergencia. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo farmacológico',
      title: 'Mecanismo de Acción de los Anticonceptivos Hormonales',
      nodes: [
        { id: 'gnr', col: 0, row: 1, k: 'start', t: 'Fármacos hormonales', s: 'Estrógenos sintéticos combinados con progestágenos o progestágenos solos' },
        { id: 'fsh', col: 1, row: 1, k: 'mech', t: 'Freno gonadotrópico', s: 'Supresión de GnRH, FSH y LH en el eje hipotálamo-hipófisis' },
        { id: 'ano', col: 2, row: 1, k: 'effect', t: 'Anovulación y moco hostil', s: 'Inhibición del pico de LH, atrofia endometrial y espesamiento del moco cervical' },
        { id: 'ant', col: 3, row: 1, k: 'good', t: 'Alta eficacia anticonceptiva', s: 'Falla teórica menor al uno por ciento en uso correcto habitual' },
      ],
      edges: [
        { from: 'gnr', to: 'fsh', label: 'retroalimentación negativa' },
        { from: 'fsh', to: 'ano', label: 'bloqueo del ciclo' },
        { from: 'ano', to: 'ant', label: 'protección' },
      ],
      steps: [
        {
          show: ['gnr', 'fsh'],
          note: 'Inhibición del eje central por esteroides exógenos',
          say: 'Los anticonceptivos hormonales combinados actúan mediante una potente retroalimentación negativa sobre los centros superiores del hipotálamo y la hipófisis anterior. El componente estrogénico suprime la secreción de hormona folículo estimulante bloqueando el reclutamiento folicular ovárico, mientras que el progestágeno inhibe la descarga pulsátil del pico ovulatorio de hormona luteinizante.',
        },
        {
          show: ['ano', 'ant'],
          note: 'Efectos periféricos complementarios y eficacia',
          say: 'Junto con impedir la ovulación, el progestágeno induce cambios periféricos críticos: espesa el moco cervical impidiendo el ascenso de espermatozoides, enlentece la motilidad tubaria y adelgaza el endometrio haciéndolo refractario a la implantación, logrando en conjunto una eficacia anticonceptiva superior al noventa y nueve por ciento con uso consistente.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Marco normativo internacional',
      title: 'Criterios Médicos de Elegibilidad de la OMS: Cuatro Categorías',
      cards: [
        {
          title: 'Categorías Uno y Dos (Uso Permitido)',
          tag: 'Sin restricción o ventajas superan riesgos',
          kind: 'normal',
          items: [
            {
              t: 'Categoría uno: Uso irrestricto',
              d: 'Una condición para la que no hay ninguna restricción en el uso del método anticonceptivo',
              say: 'En la categoría uno de la Organización Mundial de la Salud no existe ninguna limitación médica ni contraindicación para emplear el método anticonceptivo. La paciente puede utilizarlo con plena seguridad y libertad desde la primera consulta médica.',
            },
            {
              t: 'Categoría dos: Ventajas superan riesgos',
              d: 'Las ventajas de usar el método generalmente superan a los riesgos teóricos o comprobados',
              say: 'En la categoría dos las ventajas clínicas de utilizar el método superan claramente a los riesgos teóricos o comprobados. El método puede indicarse de forma habitual, manteniendo un seguimiento clínico rutinario en el centro de salud.',
            },
          ],
        },
        {
          title: 'Categorías Tres y Cuatro (Restricción o Prohibición)',
          tag: 'Riesgos superan ventajas o contraindicación absoluta',
          kind: 'alert',
          items: [
            {
              t: 'Categoría tres: Riesgos superan ventajas',
              d: 'No se recomienda su uso a menos que otros métodos más adecuados no estén disponibles',
              say: 'En la categoría tres los riesgos teóricos o demostrados superan a las ventajas esperadas. Su indicación médica no se recomienda y solo se evalúa como última opción cuando no existen métodos alternativos accesibles o tolerables.',
            },
            {
              t: 'Categoría cuatro: Riesgo inaceptable para la salud',
              d: 'Contraindicación médica absoluta formal; el método NUNCA debe ser utilizado',
              say: 'La categoría cuatro constituye una contraindicación médica absoluta formal e indiscutible. El empleo del fármaco o dispositivo acarrea un peligro inaceptable para la vida o la salud de la paciente y bajo ninguna circunstancia debe ser prescrito.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Contraindicaciones absolutas',
      title: 'Contraindicaciones Cardiovasculares Mayores de los Estrógenos',
      cards: [
        {
          title: 'Tabaquismo y Migraña con Aura',
          tag: 'Preguntas fijas de examen',
          kind: 'alert',
          items: [
            {
              t: 'Fumadora de 35 años o más con 15 o más cigarrillos al día',
              d: 'Categoría 4 absoluta para anticonceptivos hormonales combinados por riesgo de infarto y TVP',
              say: 'Toda mujer de treinta y cinco años o más que fume quince o más cigarrillos al día tiene una contraindicación absoluta para cualquier método que contenga estrógenos, debido a la aceleración de placas ateromatosas y al riesgo de infarto agudo de miocardio y trombosis.',
            },
            {
              t: 'Migraña con aura a cualquier edad',
              d: 'Categoría 4 para anticonceptivos combinados orales, parches y anillos por riesgo de infarto cerebral',
              say: 'El antecedente de migraña con aura a cualquier edad es categoría cuatro estricta para todos los combinados hormonales, ya que la combinación de vasoespasmo cerebral con el estado protrombótico inducido por etinilestradiol multiplica el riesgo de accidente cerebrovascular isquémico.',
            },
          ],
        },
        {
          title: 'Hipertensión Arterial Severa y Vasculopatía',
          tag: 'Riesgo endotelial crítico',
          kind: 'criteria',
          items: [
            {
              t: 'Presión arterial mayor o igual a 160 o 100 mmHg',
              d: 'Hipertensión severa o no controlada contraindica formalmente el uso de estrógenos',
              say: 'Cifras tensionales sistólicas de ciento sesenta o diastólicas de cien milímetros de mercurio en adelante, o con daño vascular conocido, prohíben taxativamente la administración de estrógenos por riesgo de hemorragia cerebral o rotura vascular.',
            },
            {
              t: 'Diabetes mellitus con daño vascular o más de 20 años',
              d: 'Evolución prolongada, nefropatía, retinopatía o neuropatía establecida',
              say: 'Una paciente con diabetes de más de veinte años de evolución o con complicaciones microvasculares como retinopatía o nefropatía tiene prohibido el uso de estrógenos por el altísimo riesgo de trombosis arteriales oclusivas.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Contraindicaciones tromboembólicas y neoplásicas',
      title: 'Trombosis, Cáncer y Hepatopatía: Restricciones Absolutas',
      cards: [
        {
          title: 'Tromboembolismo y Cardiopatías Complicadas',
          tag: 'Procoagulabilidad inducida por etinilestradiol',
          kind: 'alert',
          items: [
            {
              t: 'Antecedente de trombosis venosa profunda o embolia pulmonar',
              d: 'Categoría 4 para todo método con estrógenos sintéticos por riesgo de recurrencia letal',
              say: 'El antecedente personal previo o activo de trombosis venosa profunda o tromboembolismo pulmonar contraindica de por vida cualquier método combinado. Los estrógenos elevan los factores de coagulación dependientes de vitamina K y reducen la antitrombina.',
            },
            {
              t: 'Cardiopatía isquémica o valvulopatía complicada',
              d: 'Hipertensión pulmonar o riesgo de fibrilación auricular y embolias arteriales',
              say: 'Las valvulopatías complicadas con hipertensión pulmonar, antecedentes de fibrilación auricular, o la cardiopatía coronaria con infarto previo no toleran la sobrecarga protrombótica de los estrógenos exógenos sintéticos.',
            },
          ],
        },
        {
          title: 'Neoplasias Hormonodependientes y Patología Hepática',
          tag: 'Hormonodependencia y metabolismo',
          kind: 'key',
          items: [
            {
              t: 'Cáncer de mama actual o en los últimos cinco años',
              d: 'Contraindicación absoluta para estrógenos y progestágenos sistémicos',
              say: 'El cáncer de mama activo o en seguimiento durante los últimos cinco años contraindica de manera absoluta los estrógenos y los progestágenos sistémicos, permitiéndose únicamente el dispositivo intrauterino de cobre que carece por completo de esteroides.',
            },
            {
              t: 'Cirrosis hepática descompensada o adenomas hepáticos',
              d: 'Falla metabólica grave y riesgo de hemorragia tumoral con esteroides sexuales',
              say: 'La cirrosis hepática descompensada, la hepatitis viral aguda en curso y los tumores hepáticos como adenomas o hepatocarcinomas impiden la depuración de esteroides y contraindican cualquier preparado hormonal combinado.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Alternativas libres de estrógenos',
      title: 'Métodos de Solo Progestágeno: Indicaciones y Seguridad',
      cards: [
        {
          title: 'Opciones de Progestágenos Solos',
          tag: 'Implante, DIU-LNG, minipíldora e inyectable',
          kind: 'pharma',
          items: [
            {
              t: 'Implante subdérmico de etonogestrel',
              d: 'Varilla única de liberación continua por tres años; el método reversible más eficaz del mundo',
              say: 'El implante subdérmico de etonogestrel ofrece tres años de protección continua insuperable, situándose con una tasa de falla de apenas cero coma cero cinco por ciento como el método anticonceptivo más eficaz de toda la ginecología.',
            },
            {
              t: 'Dispositivo intrauterino con levonorgestrel (DIU-LNG)',
              d: 'Acción local endometrial por cinco a ocho años; reduce cuantía menstrual en noventa por ciento',
              say: 'El sistema intrauterino liberador de levonorgestrel ejerce una potente acción atrófica local sobre el endometrio, disminuyendo drásticamente el sangrado y la dismenorrea sin elevar el riesgo de trombosis sistémica.',
            },
            {
              t: 'Minipíldora oral de desogestrel',
              d: 'Toma oral diaria continua sin descansos; de elección durante la lactancia materna exclusiva',
              say: 'Las píldoras de solo progestágeno como desogestrel se toman diariamente a la misma hora sin período de descanso, siendo la alternativa oral perfecta durante la lactancia materna o en pacientes con hipertensión arterial.',
            },
          ],
        },
        {
          title: 'Perfil de Efectos Secundarios y Ventajas',
          tag: 'Tolerabilidad y patrón de sangrado',
          kind: 'criteria',
          items: [
            {
              t: 'Patrón de sangrado alterado y goteo irregular',
              d: 'Spotting frecuente en los primeros meses; posterior amenorrea benévola sin riesgo patológico',
              say: 'El efecto adverso más habitual de los progestágenos puros es el sangrado intermenstrual escaso o goteo en los primeros meses, el cual debe explicarse a la usuaria aclarando que suele remitir hacia una amenorrea completamente benigna.',
            },
            {
              t: 'Seguridad en pacientes con riesgo vascular',
              d: 'Categoría uno o dos en fumadoras mayores de 35 años, migraña con aura e hipertensas controladas',
              say: 'Al carecer por completo de estrógenos, estos fármacos no alteran los factores de coagulación ni modifican la reactividad endotelial, manteniendo un perfil de seguridad óptimo en mujeres con contraindicaciones vasculares severas.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Dispositivos intrauterinos',
      title: 'Dispositivos Intrauterinos: T de Cobre versus DIU con Levonorgestrel',
      cards: [
        {
          title: 'Dispositivo Intrauterino de Cobre (T de Cobre)',
          tag: 'Eficacia prolongada libre de hormonas',
          kind: 'key',
          items: [
            {
              t: 'Mecanismo espermicida inflamatorio local',
              d: 'Los iones de cobre generan una reacción estéril a cuerpo extraño tóxica para los gametos',
              say: 'El dispositivo de cobre no contiene hormonas y actúa liberando iones que provocan una reacción inflamatoria local estéril en el endometrio, ejerciendo un potente efecto espermicida sin interferir en los ciclos ovulatorios.',
            },
            {
              t: 'Duración de hasta doce años y efecto en el flujo',
              d: 'Método no hormonal de larguísima duración; puede incrementar la dismenorrea y el sangrado menstrual',
              say: 'Brinda protección ininterrumpida por hasta diez a doce años. Su principal efecto no deseado es el aumento de la dismenorrea y del volumen del flujo menstrual, por lo que suele desaconsejarse en pacientes con anemia o hipermenorrea previa.',
            },
          ],
        },
        {
          title: 'Sistema Intrauterino con Levonorgestrel (Mirena)',
          tag: 'Beneficios no anticonceptivos mayores',
          kind: 'pharma',
          items: [
            {
              t: 'Atrofia endometrial y espesamiento del moco',
              d: 'Liberación microdosificada local que produce hipomenorrea o amenorrea en la mayoría de usuarias',
              say: 'El dispositivo con levonorgestrel libera dosis microscópicas locales continuas que generan una marcada atrofia del endometrio y espesamiento del moco cervical, con niveles plasmáticos hormonales mínimos e indetectables.',
            },
            {
              t: 'Tratamiento de elección en menorragia y adenomiosis',
              d: 'Tratamiento médico estándar de oro para sangrado uterino anormal ovulatorio y dismenorrea severa',
              say: 'Constituye la terapia médica de primera línea para mujeres con sangrado menstrual abundante, adenomiosis difusa y dolor pélvico secundario a endometriosis, evitando histerectomías innecesarias.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Comparativa de métodos',
      title: 'Matriz Comparativa de Anticonceptivos en la Práctica Médica',
      head: ['Método Anticonceptivo', 'Mecanismo Primario', 'Contraindicación Absoluta Cardinal'],
      rows: [
        {
          cells: ['Combinados (ACO, parche, anillo)', 'Anovulación por bloqueo de LH y FSH', 'Migraña con aura, fumadora de 35 años o más, HTA severa, TVP previa'],
          say: 'Los combinados hormonales bloquean la ovulación pero están terminantemente prohibidos en migraña con aura, tabaquismo sobre los treinta y cinco años e hipertensión descontrolada.',
        },
        {
          cells: ['Progestágenos solos (implante, minipíldora)', 'Espesamiento del moco cervical y anovulación', 'Cáncer de mama activo o en los últimos cinco años'],
          say: 'Los progestágenos puros actúan espesando el moco cervical y suprimiendo la fertilidad, compartiendo como única contraindicación mayor el cáncer mamario activo.',
        },
        {
          cells: ['Dispositivo de Cobre (T de Cobre)', 'Efecto espermicida por toxicidad del cobre', 'Infección pélvica activa, anomalía cavitaria uterina severa, embarazo'],
          say: 'El dispositivo de cobre no altera el eje endocrino pero no puede colocarse ante infecciones pélvicas activas, malformaciones uterinas graves o sospecha de embarazo.',
        },
        {
          cells: ['DIU Levonorgestrel (Mirena)', 'Atrofia endometrial local y moco hostil', 'Infección activa, cáncer mamario actual, anomalía endocavitaria'],
          say: 'El dispositivo con levonorgestrel atrofia localmente el endometrio y está contraindicado en neoplasias hormonodependientes activas o cavidades uterinas severamente deformadas.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Educación y manejo de contingencias',
      title: 'Manejo Práctico de Olvidos de Píldoras Anticonceptivas',
      cards: [
        {
          title: 'Regla de las Doce Horas',
          tag: 'Píldoras combinadas estándar',
          kind: 'criteria',
          items: [
            {
              t: 'Olvido menor a doce horas de retraso',
              d: 'Tomar el comprimido olvidado de inmediato y continuar con la toma habitual sin requerir método de barrera',
              say: 'Si el retraso en la toma de un anticonceptivo hormonal combinado es menor a doce horas, la eficacia no se pierde: la paciente toma el comprimido olvidado de inmediato y sigue su horario normal.',
            },
            {
              t: 'Olvido mayor a doce horas o dos o más comprimidos',
              d: 'Tomar la última píldora olvidada de inmediato, seguir la caja y usar condón por siete días seguidos',
              say: 'Si el retraso supera las doce horas o se olvidan dos o más comprimidos, debe tomar la última píldora olvidada de inmediato, continuar el envase y agregar preservativo durante siete días consecutivos de respaldo.',
            },
          ],
        },
        {
          title: 'Olvidos Críticos en la Primera y Tercera Semana',
          tag: 'Riesgo de ovulación de escape',
          kind: 'alert',
          items: [
            {
              t: 'Olvido en la primera semana con coito previo',
              d: 'Riesgo mayor de ovulación por prolongar el intervalo libre de hormonas; indicar anticoncepción de emergencia',
              say: 'Los olvidos en la primera semana tras el descanso son los más peligrosos porque prolongan el intervalo libre de hormonas. Si hubo coito no protegido en los días previos, se debe indicar anticoncepción de emergencia.',
            },
            {
              t: 'Olvido en la tercera semana del ciclo',
              d: 'Terminar comprimidos activos y empalmar directo el siguiente envase sin descanso ni placebos',
              say: 'Si el olvido ocurre en la tercera semana de píldoras activas, se deben omitir los comprimidos placebo o el descanso de siete días, iniciando de inmediato una nueva caja para mantener el bloqueo ovárico.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Píldora de emergencia',
      title: 'Anticoncepción de Emergencia: Esquemas, Tiempos y Regla del Vómito',
      cards: [
        {
          title: 'Levonorgestrel Oral (Fármaco de Elección)',
          tag: 'Dosis única de 1.5 mg oral',
          kind: 'pharma',
          items: [
            {
              t: 'Dosis de 1.5 mg en las primeras 72 horas',
              d: 'Dosis única oral de 1.5 mg o dos comprimidos de 0.75 mg juntos; eficaz hasta las 120 horas',
              say: 'El método farmacológico de elección en Chile es el levonorgestrel en dosis única oral de uno coma cinco miligramos, administrado preferentemente dentro de las primeras setenta y dos horas del coito.',
            },
            {
              t: 'Mecanismo anovulatorio no abortivo',
              d: 'Inhibe o retrasa el pico de LH ovulatorio; NO es abortivo ni daña un embrión implantado',
              say: 'Su mecanismo biológico de acción comprobado consiste exclusivamente en demorar o impedir la descarga ovulatoria de hormona luteinizante. No tiene ninguna acción abortiva ni interfiere si ya ocurrió la implantación.',
            },
          ],
        },
        {
          title: 'Regla del Vómito y Dispositivo de Cobre',
          tag: 'Urgencias y máxima eficacia',
          kind: 'alert',
          items: [
            {
              t: 'Vómito dentro de las primeras dos horas post-toma',
              d: 'Debe repetirse la dosis completa de 1.5 mg de inmediato, asociando un antiemético oral',
              say: 'Si la paciente vomita dentro de las primeras dos horas de haber ingerido el comprimido, el fármaco no se absorbió y debe repetirse de inmediato la dosis completa de uno coma cinco miligramos.',
            },
            {
              t: 'DIU de cobre: El método de emergencia más eficaz',
              d: 'Inserción hasta 5 días después de la relación desprotegida con eficacia mayor al noventa y nueve por ciento',
              say: 'La inserción de un dispositivo intrauterino de cobre dentro de los cinco días posteriores al coito desprotegido es el método de anticoncepción de emergencia más eficaz disponible en la práctica clínica.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Situaciones clínicas frecuentes',
      title: 'Planificación Familiar en Puerperio, Lactancia y Perimenopausia',
      cards: [
        {
          title: 'Puerperio y Período de Lactancia',
          tag: 'Manejo según semanas postparto',
          kind: 'criteria',
          items: [
            {
              t: 'Primeras seis semanas postparto con lactancia exclusiva',
              d: 'Estrógenos en Categoría 4 por riesgo de trombosis e inhibición de la prolactina láctea',
              say: 'Durante las primeras seis semanas de puerperio con lactancia exclusiva, los combinados con estrógeno son categoría cuatro absoluta por el alto riesgo tromboembólico materno e interferencia con la leche.',
            },
            {
              t: 'Métodos recomendados desde el postparto inmediato',
              d: 'DIU postparto o transcesárea e implante subdérmico de progestágeno sin afectar la lactancia',
              say: 'El implante subdérmico y los dispositivos intrauterinos pueden colocarse de forma inmediata en el posparto o antes del alta hospitalaria sin interferir en lo absoluto con la producción de leche.',
            },
          ],
        },
        {
          title: 'Transición a la Menopausia',
          tag: 'Perimenopausia y cese definitivo',
          kind: 'normal',
          items: [
            {
              t: 'Riesgo de embarazo hasta la confirmación de menopausia',
              d: 'Mantener anticoncepción un año tras la última regla si tiene más de 50 años o dos años si tiene menos',
              say: 'La mujer perimenopáusica conserva riesgo de ovulación esporádica. La anticoncepción debe mantenerse durante un año tras la última menstruación si tiene más de cincuenta años, o dos años si es menor.',
            },
            {
              t: 'Preferencia por DIU-LNG en la transición',
              d: 'Controla el sangrado disfuncional perimenopáusico y protege el endometrio',
              say: 'El dispositivo con levonorgestrel es ideal en la perimenopausia porque estabiliza el endometrio frente a los ciclos anovulatorios hiperestrogénicos y reduce drásticamente las metrorragias.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de prescripción segura',
      title: 'Algoritmo de Selección de Anticoncepción según Factores de Riesgo',
      say: 'Revisemos el algoritmo estructurado para seleccionar el método anticonceptivo ideal descartando rigurosamente las contraindicaciones absolutas de estrógenos.',
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Tabaquismo Severo en Mayor de 35 Años · Elegibilidad OMS',
      stem: 'Una mujer de 38 años, multípara de 2, consulta en el CESFAM para iniciar un método anticonceptivo altamente eficaz. Dentro de sus antecedentes destaca que fuma 20 cigarrillos al día desde hace 15 años. Su examen físico y presión arterial son normales. Al revisar los criterios médicos de elegibilidad de la OMS y las guías del MINSAL, ¿cuál de los siguientes métodos está formalmente CONTRAINDICADO (Categoría 4)?',
      question: '¿Cuál de los siguientes métodos está formalmente contraindicado por clasificarse como Categoría 4 de la OMS?',
      options: [
        { letter: 'A', text: 'Dispositivo intrauterino de cobre (T de Cobre)' },
        { letter: 'B', text: 'Implante subdérmico liberador de etonogestrel' },
        { letter: 'C', text: 'Anticonceptivos orales combinados de etinilestradiol con levonorgestrel' },
        { letter: 'D', text: 'Dispositivo intrauterino liberador de levonorgestrel' },
        { letter: 'E', text: 'Minipíldora oral de desogestrel' },
      ],
      correct: 'C',
      explanation: 'De acuerdo a los Criterios Médicos de Elegibilidad de la OMS y a las normas de anticoncepción del MINSAL, ser mujer de 35 años o más y fumar 15 o más cigarrillos al día es una contraindicación formal absoluta (CATEGORÍA 4: Riesgo inaceptable para la salud) para el uso de Anticonceptivos Hormonales Combinados que contengan estrógenos. El sinergismo entre el etinilestradiol y los componentes del tabaco altera severamente la función endotelial y la hemostasia, disparando el riesgo de infarto de miocardio, trombosis venosa y ACV isquémico. Los métodos de solo progestágeno (implante, DIU-LNG, minipíldora) y el DIU de cobre son totalmente seguros (Categoría 1).',
      say: {
        stem: 'Mujer de treinta y ocho años que fuma veinte cigarrillos al día desde hace quince años consulta para iniciar un método anticonceptivo.',
        question: '¿Cuál de los siguientes métodos está formalmente contraindicado por clasificarse en la categoría cuatro de la Organización Mundial de la Salud?',
        options: 'La opción A propone dispositivo intrauterino de cobre. La B implante subdérmico de etonogestrel. La C anticonceptivos orales combinados con etinilestradiol. La D dispositivo intrauterino con levonorgestrel. La E minipíldora de desogestrel. Piénsalo bien.',
        answer: 'La respuesta correcta es la C. En mujeres de treinta y cinco años o más que fuman quince o más cigarrillos al día, los estrógenos están contraindicados de forma absoluta por riesgo de infarto y trombosis.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Anticoncepción de Emergencia · Fármaco y Mecanismo',
      stem: 'Una joven de 20 años consulta en el servicio de urgencia 18 horas después de una relación sexual no protegida por rotura del condón. Solicita la píldora de anticoncepción de emergencia.',
      question: '¿Cuál es el fármaco de elección, la dosis recomendada y el mecanismo de acción de la píldora de emergencia disponible en el sistema público?',
      options: [
        { letter: 'A', text: 'Mifepristona 200 mg oral; desprendimiento del blastocisto implantado' },
        { letter: 'B', text: 'Levonorgestrel 1.5 mg oral en dosis única; retraso o inhibición del pico ovulatorio de LH' },
        { letter: 'C', text: 'Misoprostol 800 mcg vaginal; inducción de contracciones uterinas expulsivas' },
        { letter: 'D', text: 'Metotrexato 50 mg intramuscular; lisis de las células trofoblásticas' },
        { letter: 'E', text: 'Estrógenos conjugados a altas dosis; inducción de hemorragia masiva' },
      ],
      correct: 'B',
      explanation: 'El método de anticoncepción de emergencia farmacológico de elección en Chile y en los protocolos del MINSAL es el LEVONORGESTREL a dosis única de 1.5 mg por vía oral (o dos comprimidos de 0.75 mg juntos), administrado preferentemente dentro de las primeras 72 horas del coito no protegido. Su mecanismo de acción biológico comprobado consiste en impedir o postergar el pico ovulatorio de LH y la consecuente expulsión del ovocito; NO actúa como un método abortivo, no afecta el endometrio receptivo ni daña un embrión ya implantado.',
      say: {
        stem: 'Una joven de veinte años consulta dieciocho horas después de un coito no protegido por rotura de preservativo solicitando anticoncepción de emergencia.',
        question: '¿Cuál es el fármaco de elección, la dosis recomendada y el mecanismo de acción de la píldora de emergencia en el sistema público?',
        options: 'La opción A propone mifepristona con desprendimiento del blastocisto. La B levonorgestrel uno coma cinco miligramos oral que retrasa el pico de LH. La C misoprostol vaginal. La D metotrexato. La E estrógenos conjugados. Piénsalo bien.',
        answer: 'La respuesta correcta es la B. El levonorgestrel a dosis de uno coma cinco miligramos oral inhibe o retrasa el pico ovulatorio de hormona luteinizante y no es abortivo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Migraña con Aura · Contraindicación Absoluta de Estrógenos',
      stem: 'Una paciente de 28 años con antecedente de migraña clásica con aura visual frecuente consistente en escotomas centelleantes acude a control médico para iniciar anticoncepción hormonal.',
      question: 'Al evaluar las alternativas, ¿cuál de los siguientes métodos está formalmente contraindicado por clasificarse como Categoría 4 de la OMS?',
      options: [
        { letter: 'A', text: 'Anillo vaginal liberador de etinilestradiol y etonogestrel' },
        { letter: 'B', text: 'Implante subdérmico de etonogestrel' },
        { letter: 'C', text: 'Dispositivo intrauterino de cobre' },
        { letter: 'D', text: 'Minipíldora de desogestrel' },
        { letter: 'E', text: 'Dispositivo intrauterino liberador de levonorgestrel' },
      ],
      correct: 'A',
      explanation: 'La Migraña con AURA a cualquier edad es una condición de CATEGORÍA 4 de la OMS (Riesgo inaceptable para la salud / contraindicación absoluta) para TODOS los métodos anticonceptivos hormonales combinados (ACOs, parche transdérmico y anillo vaginal). Los estrógenos provocan vasoconstricción y microtrombosis cerebral que, sumados a la fisiopatología vasoespástica del aura migrañosa, elevan drásticamente el riesgo de Infarto Cerebral Isquémico (ACV). En cambio, los métodos de solo progestágeno (implante, DIU-LNG, minipíldora) y el DIU de cobre son completamente seguros.',
      say: {
        stem: 'Paciente de veintiocho años con antecedente de migraña clásica con aura visual recurrente solicita anticoncepción hormonal en el consultorio.',
        question: '¿Cuál de los siguientes métodos está formalmente contraindicado por clasificarse en la categoría cuatro de la Organización Mundial de la Salud?',
        options: 'La opción A propone anillo vaginal con etinilestradiol y etonogestrel. La B implante de etonogestrel. La C dispositivo de cobre. La D minipíldora de desogestrel. La E dispositivo con levonorgestrel. Piénsalo bien.',
        answer: 'La respuesta correcta es la A. El anillo vaginal combinado contiene etinilestradiol y está formalmente contraindicado en migraña con aura por riesgo de infarto cerebral.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Anticoncepción de Emergencia · Manejo del Vómito Precoz',
      stem: 'Una paciente que tomó la píldora de anticoncepción de emergencia de levonorgestrel 1.5 mg presenta un episodio de vómito profuso 45 minutos después de haber deglutido el comprimido.',
      question: '¿Cuál es la indicación médica correcta a seguir?',
      options: [
        { letter: 'A', text: 'No realizar ninguna acción, pues la absorción intestinal completa ocurre en los primeros 15 minutos' },
        { letter: 'B', text: 'Repetir de inmediato la dosis completa de 1.5 mg de Levonorgestrel, idealmente asociando un antiemético oral' },
        { letter: 'C', text: 'Indicar que el método fracasó y que debe programarse una interrupción legal del embarazo' },
        { letter: 'D', text: 'Administrar antibióticos profilácticos para evitar infecciones' },
        { letter: 'E', text: 'Esperar 1 semana y realizar un test de embarazo en sangre' },
      ],
      correct: 'B',
      explanation: 'De acuerdo a las directrices de la OMS y a la Norma General Técnica de Regulación de la Fertilidad del MINSAL, si una mujer vomitara dentro de las PRIMERAS 2 HORAS posteriores a la ingestión de la píldora de anticoncepción de emergencia de Levonorgestrel, se asume que el fármaco no fue absorbido en cantidad terapéutica suficiente y la paciente DEBE tomar una nueva dosis completa de 1.5 mg lo antes posible, pudiendo administrarse previamente un antiemético (como metoclopramida o domperidona) para asegurar la retención gástrica.',
      say: {
        stem: 'Una paciente toma la píldora de emergencia de levonorgestrel y presenta un vómito profuso cuarenta y cinco minutos después de la deglución.',
        question: '¿Cuál es la indicación médica correcta a seguir frente a este cuadro clínico?',
        options: 'La opción A propone no hacer nada asumiendo absorción completa. La B repetir de inmediato la dosis completa de levonorgestrel con antiemético. La C declarar fracaso y esperar aborto. La D antibióticos. La E esperar una semana. Piénsalo bien.',
        answer: 'La respuesta correcta es la B. Si la paciente vomita dentro de las primeras dos horas post-ingesta, se debe repetir inmediatamente la dosis completa de uno coma cinco miligramos.',
      },
    },

    {
      type: 'points',
      kicker: 'Puntos clave EUNACOM',
      title: 'Reglas de Oro en Planificación Familiar y Anticoncepción',
      cards: [
        {
          title: 'Contraindicaciones Inexcusables de Estrógenos',
          tag: 'Categoría cuatro obligatoria',
          kind: 'alert',
          items: [
            {
              t: 'Tríada clásica de alto riesgo vascular',
              d: 'Migraña con aura a cualquier edad, fumadora mayor de 35 años y trombosis venosa previa',
              say: 'La tríada clásica de contraindicaciones absolutas para estrógenos incluye la migraña con aura a cualquier edad, el tabaquismo sobre los treinta y cinco años y el antecedente de trombosis venosa profunda.',
            },
            {
              t: 'Manejo alternativo inmediato',
              d: 'Prescribir métodos de solo progestágeno o dispositivo intrauterino libre de hormonas',
              say: 'En todas estas pacientes con contraindicación de estrógenos podemos indicar con total seguridad implantes subdérmicos, dispositivos con levonorgestrel, minipíldoras o la T de cobre.',
            },
          ],
        },
        {
          title: 'Uso de Dispositivos Intrauterinos',
          tag: 'Cobre vs Levonorgestrel',
          kind: 'key',
          items: [
            {
              t: 'DIU de cobre en pacientes que no toleran hormonas',
              d: 'Diez a doce años de protección; advertir incremento de sangrado menstrual y cólicos',
              say: 'El dispositivo de cobre dura más de una década y carece de efectos sistémicos, pero advertimos a la usuaria que aumentará el volumen menstrual y los cólicos.',
            },
            {
              t: 'DIU con levonorgestrel como terapia médica',
              d: 'Excelente para tratar hipermenorrea, dismenorrea severa y adenomiosis sintomática',
              say: 'El dispositivo con levonorgestrel no solo es anticonceptivo sino el tratamiento de elección para controlar sangrados abundantes y dismenorrea secundaria.',
            },
          ],
        },
        {
          title: 'Anticoncepción de Emergencia Eficaz',
          tag: 'Levonorgestrel 1.5 mg y tiempo límite',
          kind: 'pharma',
          items: [
            {
              t: 'Administración precoz antes de 72 horas',
              d: 'Retrasa el pico de LH; no ejerce efectos abortivos ni daña al embrión concebido',
              say: 'El levonorgestrel oral actúa frenando el pico de hormona luteinizante antes de que ocurra la ovulación y carece de todo potencial abortivo una vez implantado el blastocisto.',
            },
            {
              t: 'Repetición estricta si vomita antes de 2 horas',
              d: 'Asegurar absorción completa administrando una segunda dosis completa con antiemético',
              say: 'Y recuerden siempre la regla de las dos horas: si la paciente vomita antes de cumplirse dos horas desde la toma, debe repetirse la dosis de inmediato. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Selección de Anticoncepción según Factores de Riesgo',
    root: N(
      'start',
      'Mujer en Edad Fértil que Solicita Anticoncepción',
      'Anamnesis dirigida · factores de riesgo cardiovasculares y neoplásicos · toma de presión arterial',
      'Iniciamos la consejería evaluando factores de riesgo cardiovasculares y antecedentes médicos.',
      [
        'Presenta contraindicación de estrógenos (migraña con aura, fumadora ≥35 años, HTA, TVP)',
        N(
          'alert',
          'Contraindicación Absoluta de Estrógenos (Categoría 4 OMS)',
          'Prohibidos anticonceptivos orales combinados, parches dérmicos y anillos vaginales',
          'Si presenta migraña con aura, tabaquismo sobre los treinta y cinco años o hipertensión prohibimos los estrógenos.',
          [
            'Sin antecedente de cáncer de mama activo',
            N(
              'ok',
              'Métodos de Solo Progestágeno o Dispositivo de Cobre',
              'Implante subdérmico de etonogestrel, DIU-LNG, minipíldora de desogestrel o T de cobre',
              'Indicamos implante subdérmico, dispositivo intrauterino con levonorgestrel o dispositivo de cobre.',
            ),
          ],
          [
            'Con antecedente de cáncer de mama actual o reciente',
            N(
              'do',
              'Dispositivo Intrauterino de Cobre (T de Cobre)',
              'Método totalmente libre de esteroides hormonales sistémicos y locales',
              'Ante cáncer de mama activo la única opción intrauterina segura es el dispositivo de cobre libre de hormonas.',
            ),
          ],
        ),
      ],
      [
        'Sin contraindicaciones médicas para estrógenos ni patología vascular',
        N(
          'ok',
          'Anticonceptivos Hormonales Combinados o Métodos de Larga Duración (LARC)',
          'Elección compartida según preferencias de la usuaria, comodidad y adherencia terapéutica',
          'Si no tiene contraindicaciones puede optar libremente por combinados orales, parches, anillos o dispositivos de larga duración.',
        ),
      ],
    ),
  },
};
