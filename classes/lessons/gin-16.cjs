// Clase 20.16 — guion docente escrito a mano (estándar Módulo 3 · Ginecología).
// Fuente clínica: books/scripts/dataset_ginecologia.cjs (gin-16).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gin-16',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Urgencias ginecológicas quirúrgicas, torsión anexial con detorsión ovárica conservadora por laparoscopía y quiste hemorrágico roto con manejo expectante',
      say: 'Bienvenidos a la última clase del módulo de ginecología, dedicada a las urgencias ginecológicas quirúrgicas, un capítulo imprescindible en los servicios de urgencia y en el examen EUNACOM. En esta sesión aprenderemos a diagnosticar con rapidez una torsión anexial mediante el cuadro clínico y el Doppler ginecológico, dominaremos el cambio de paradigma quirúrgico hacia la detorsión conservadora para salvar el ovario, y fijaremos las conductas entre el manejo expectante del quiste hemorrágico roto y la cirugía. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo patológico vascular',
      title: 'Fisiopatología Vascular de la Torsión Anexial y el Hemoperitoneo',
      nodes: [
        { id: 'qui', col: 0, row: 1, k: 'start', t: 'Quiste anexial móvil', s: 'Masa ovárica de cinco a diez centímetros; teratoma quístico maduro o quiste folicular' },
        { id: 'rot', col: 1, row: 1, k: 'mech', t: 'Rotación del pedículo vascular', s: 'Torsión sobre el ligamento infundíbulo-pélvico con bloqueo del retorno venoso' },
        { id: 'ede', col: 2, row: 1, k: 'effect', t: 'Edema masivo e isquemia', s: 'Congestión tisular, colapso de la irrigación arterial y riesgo de necrosis gangrenosa' },
        { id: 'det', col: 3, row: 1, k: 'good', t: 'Detorsión laparoscópica', s: 'Desenrollar el ovario de urgencia para restaurar la perfusión y preservar la fertilidad' },
      ],
      edges: [
        { from: 'qui', to: 'rot', label: 'movimiento brusco' },
        { from: 'rot', to: 'ede', label: 'oclusión vascular' },
        { from: 'ede', to: 'det', label: 'cirugía urgente' },
      ],
      steps: [
        {
          show: ['qui', 'rot'],
          note: 'Rotación axial de masas móviles de tamaño intermedio',
          say: 'Los tumores ováricos benignos de cinco a diez centímetros de diámetro, especialmente los teratomas quísticos por su contenido graso flotante, presentan gran movilidad. Un movimiento brusco puede hacer rotar al ovario sobre su ligamento suspensorio, ocluyendo inicialmente las venas y los linfáticos de baja presión.',
        },
        {
          show: ['ede', 'det'],
          note: 'Congestión, isquemia arterial y rescate quirúrgico',
          say: 'El flujo arterial continuo sin drenaje venoso genera un edema estromal masivo que termina por colapsar las arterias ováricas produciendo isquemia aguda. Si no se interviene de urgencia desenrollando el pedículo mediante laparoscopía, el órgano sufre necrosis hemorrágica irreversible en menos de veinticuatro horas.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Mecánica de la torsión',
      title: 'Torsión Anexial: Fisiopatología y Factores Predisponentes',
      cards: [
        {
          title: 'Tamaño Óptimo y Movilidad de la Masa',
          tag: 'Masas de cinco a diez centímetros',
          kind: 'key',
          items: [
            {
              t: 'Quistes de tamaño intermedio móviles',
              d: 'Las masas de 5 a 10 cm tienen el peso y la holgura ligamentosa justa para rotar sobre su eje',
              say: 'Los quistes que con mayor frecuencia se tuercen miden entre cinco y diez centímetros. Masas menores a cinco centímetros carecen del peso y momento cinético necesarios para rotar, mientras que los tumores ováricos gigantes quedan aprisionados en la pelvis sin espacio anatómico libre para completar el giro.',
            },
            {
              t: 'Teratoma quístico maduro (Quiste dermoide)',
              d: 'Tumor benigno más frecuentemente asociado a torsión por su alto contenido sebáceo ligero',
              say: 'El teratoma quístico maduro o quiste dermoide es la neoplasia que más comúnmente se tuerce en mujeres jóvenes, debido a que su abundante contenido de sebo, pelos y grasa disminuye su densidad relativa frente al líquido pélvico, facilitando su flotabilidad y balanceo mecánico continuo.',
            },
          ],
        },
        {
          title: 'Factores Protectores contra la Torsión',
          tag: 'Adherencias y fijación tumoral',
          kind: 'criteria',
          items: [
            {
              t: 'Tumores malignos y adherencias pélvicas',
              d: 'El cáncer ovárico y la endometriosis grave fijan el anexo impidiendo mecánicamente la torsión',
              say: 'Los tumores ováricos malignos invasores y los endometriomas rara vez sufren torsión. Esto se explica porque desencadenan una intensa reacción inflamatoria peritumoral con densas adherencias fibrosas que fijan rígidamente el anexo a las paredes pélvicas, impidiendo cualquier rotación axial sobre su eje vascular.',
            },
            {
              t: 'Predisposición del lado derecho',
              d: 'La torsión es más común en el ovario derecho por mayor longitud libre del ligamento infundíbulo-pélvico',
              say: 'Existe una clara y marcada preferencia anatómica por el anexo derecho en más del sesenta por ciento de los casos. La presencia del colon sigmoides y su meso en la fosa ilíaca izquierda ocupa espacio y actúa como una barrera anatómica protectora que amortigua la movilidad del ovario izquierdo.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Cuadro clínico y Doppler',
      title: 'Diagnóstico de Torsión: Dolor Súbito, Vómitos y Signo del Remolino',
      cards: [
        {
          title: 'Presentación Clínica Típica',
          tag: 'Dolor hiperagudo y reflejo vagal',
          kind: 'alert',
          items: [
            {
              t: 'Dolor pélvico hiperagudo y constante',
              d: 'Inicio súbito punzante en fosa ilíaca que no cede con analgésicos comunes y empeora en horas',
              say: 'La paciente consulta por dolor pélvico unilateral de comienzo brutal, lacerante e hiperagudo, de intensidad máxima, que no cede con analgésicos comunes y suele desencadenarse durante el ejercicio físico, relaciones sexuales o giros corporales bruscos.',
            },
            {
              t: 'Náuseas y vómitos alimentarios profusos',
              d: 'Presentes en más del setenta por ciento por estimulación refleja del plexo simpático ovárico',
              say: 'Un hallazgo clínico determinante es la presencia concomitante de náuseas intensas y vómitos alimentarios a repetición en más del setenta por ciento de las pacientes, generados por irritación autonómica refleja directa sobre las fibras simpáticas del plexo ovárico y peritonismo local.',
            },
          ],
        },
        {
          title: 'Signos en Ecografía Doppler Transvaginal',
          tag: 'Edema ovárico y signo del remolino',
          kind: 'key',
          items: [
            {
              t: 'Aumento de volumen con folículos periféricos',
              d: 'Ovario crecido mayor a cuatro o cinco centímetros con estroma hiperrefráctil y edema masivo',
              say: 'En la ecografía transvaginal destaca un ovario marcadamente aumentado de volumen, de aspecto globuloso y estroma heterogéneo marcadamente edematoso, con sus pequeños folículos antrales empujados hacia la corteza externa en un patrón característico semejante a un collar de perlas.',
            },
            {
              t: 'Signo del remolino y alteración del flujo Doppler',
              d: 'Visualización del pedículo enrollado con ausencia o caída crítica del flujo venoso y arterial',
              say: 'La visualización del pedículo vascular torsionado sobre sí mismo conforma el signo patognomónico del remolino o torbellino. Aunque la ausencia de flujo Doppler venoso y arterial confirma la isquemia severa, la presencia de flujo residual no descarta torsión intermitente o en evolución.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Cambio de paradigma quirúrgico',
      title: 'Manejo Quirúrgico de Torsión: Laparoscopía y Detorsión Ovárica Conservadora',
      cards: [
        {
          title: 'Emergencia Quirúrgica por Laparoscopía',
          tag: 'El tiempo es tejido ovárico',
          kind: 'key',
          items: [
            {
              t: 'Laparoscopía de urgencia inmediata',
              d: 'Abordaje mínimamente invasivo de elección para confirmar el diagnóstico y desenrollar el pedículo',
              say: 'Ante la sospecha clínica fundada de torsión anexial se debe indicar una laparoscopía quirúrgica de urgencia inmediata. En patología vascular ovárica, el tiempo transcurrido es tejido folicular preservado, y cada hora de retraso incrementa el daño tisular irreversible.',
            },
            {
              t: 'Detorsión ovárica conservadora obligatoria',
              d: 'Desenrollar el ovario sobre su eje vascular para restablecer de inmediato el flujo sanguíneo',
              say: 'El procedimiento quirúrgico de elección es la detorsión ovárica conservadora, consistente en desrotar con gentileza las vueltas del ligamento infundíbulo pélvico para restablecer la perfusión microvascular, sin realizar quistectomía en agudo en tejidos edematosos friables.',
            },
          ],
        },
        {
          title: 'El Paradigma Moderno de Preservación',
          tag: '¡Conservar aunque se observe cianótico!',
          kind: 'alert',
          items: [
            {
              t: 'Conservar el anexo aunque luzca negruzco',
              d: 'Más del noventa por ciento de los ovarios cianóticos recuperan su función endocrina y fertilidad',
              say: 'Graben con fuerza este principio para el examen: aunque el ovario se observe cianótico, amoratado o negruzco al ingresar a la cavidad, se debe desenrollar y conservar intacto. Más del noventa por ciento de estos ovarios recuperan completamente su función hormonal y ovulatoria.',
            },
            {
              t: 'Mito del embolismo venoso superado',
              d: 'La antigua práctica de extirpar sin desenrollar por temor a trombosis pulmonar está proscrita',
              say: 'La antigua conducta docente de extirpar el anexo en bloque sin desenrollarlo por miedo a soltar émbolos pulmonares ha sido totalmente refutada por estudios clínicos modernos. La ooforectomía primaria en mujeres jóvenes constituye hoy una conducta desaconsejada y mutilante.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Hemorragia folicular o lútea',
      title: 'Quiste Ovárico Hemorrágico Roto: Fisiopatología y Gatillante Coital',
      cards: [
        {
          title: 'Mecanismo Fisiopatológico y Momento del Ciclo',
          tag: 'Fase lútea tardía en días 20 a 26',
          kind: 'key',
          items: [
            {
              t: 'Sangrado dentro del cuerpo lúteo vascularizado',
              d: 'Hemorragia interna de la cavidad lútea postovulatoria con distensión capsular y rotura secundaria',
              say: 'El quiste ovárico hemorrágico se produce por un sangrado intrínseco exagerado dentro del cuerpo lúteo ricamente vascularizado, habitualmente en la fase lútea tardía entre los días veinte y veintiséis del ciclo, provocando sobretensión capsular y posterior fisura peritoneal.',
            },
            {
              t: 'Gatillante clásico: Dolor durante o tras el coito',
              d: 'Aparición repentina de dolor pélvico agudo postcoital o tras ejercicio intenso premenstrual',
              say: 'El evento agudo se desencadena clásicamente durante o inmediatamente después del coito sexual o de una sesión de actividad física intensa en los días premenstruales, producto del choque mecánico directo que rompe la delgada pared del quiste hemático a tensión.',
            },
          ],
        },
        {
          title: 'Descarte Obligatorio de Embarazo Ectópico',
          tag: 'Regla de seguridad inquebrantable',
          kind: 'alert',
          items: [
            {
              t: 'Test de embarazo o gonadotropina en sangre obligatorio',
              d: 'Todo dolor pélvico agudo con líquido libre en edad fértil exige descartar embarazo ectópico roto',
              say: 'Ante toda mujer en edad fértil que consulta con dolor pélvico súbito y líquido libre peritoneal, es un deber inexcusable descartar un embarazo ectópico roto mediante una determinación inmediata de gonadotropina coriónica humana cualitativa o cuantitativa.',
            },
            {
              t: 'Confirmación de prueba de embarazo negativa',
              d: 'Una prueba de embarazo negativa orienta con certeza a quiste lúteo roto o torsión anexial',
              say: 'Al constatar un resultado rigurosamente negativo en la prueba de gestación, se descarta la emergencia gestacional ectópica y el diagnóstico se orienta hacia un quiste ovárico lúteo roto o una torsión ovárica aguda.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Ecografía y manejo médico',
      title: 'Ecografía en Red de Pesca y Manejo Conservador versus Quirúrgico',
      cards: [
        {
          title: 'Patrón Ecográfico Patognomónico',
          tag: 'Red de pesca o tela de araña',
          kind: 'key',
          items: [
            {
              t: 'Quiste con patrón reticular fibrinoide',
              d: 'Contenido heterogéneo con múltiples hebras finas entrecruzadas en red de pesca sin flujo Doppler interno',
              say: 'El signo ecográfico característico es una masa anexial quística con ecos internos lineales finos y desordenados que forman un patrón reticular en red de pesca o tela de araña, originados por la retracción de hebras de fibrina dentro del coágulo en evolución.',
            },
            {
              t: 'Hemoperitoneo en fondo de saco de Douglas',
              d: 'Líquido libre anecoico o particulado en Douglas que traduce la sangre derramada autolimitada',
              say: 'Es frecuente apreciar líquido libre pélvico en el fondo de saco de Douglas, correspondiente a la sangre derramada desde el lecho quístico fisurado, la cual suele ser autolimitada en volumen y reabsorberse gradualmente sin secuelas.',
            },
          ],
        },
        {
          title: 'Manejo Médico Conservador de Elección',
          tag: 'Paciente hemodinámicamente estable',
          kind: 'criteria',
          items: [
            {
              t: 'Conducta expectante en la inmensa mayoría',
              d: 'Hospitalización en observación por veinticuatro horas, reposo, analgesia y hematocrito seriado',
              say: 'En pacientes hemodinámicamente estables, con presión arterial y pulso normales y hematocrito sin variaciones significativas, la conducta médica de elección es el manejo médico conservador con reposo, hidratación, analgesia intravenosa y vigilancia seriada del hemograma.',
            },
            {
              t: 'Cirugía reservada solo para inestabilidad hemodinámica',
              d: 'Laparoscopía de urgencia si hay caída de presión arterial, hemoperitoneo masivo o taquicardia',
              say: 'La intervención quirúrgica por laparoscopía se restringe de manera estricta a casos excepcionales con descompensación hemodinámica, hipotensión refractaria, taquicardia persistente o descenso pronunciado del hematocrito por sangrado activo no contenido.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnóstico diferencial',
      title: 'Diagnóstico Diferencial de Urgencias Ginecológicas Pélvicas Agudas',
      head: ['Cuadro Clínico', 'Gatillante y Características', 'Signos Clave y Laboratorio', 'Conducta de Elección'],
      rows: [
        {
          cells: ['Torsión Anexial', 'Dolor súbito constante y vómitos profusos', 'Signo del remolino Doppler, ovario edematoso, beta hCG (-)', 'Laparoscopía de urgencia con detorsión ovárica'],
          say: 'La torsión anexial cursa con dolor súbito unilateral, náuseas y vómitos profusos, demostrando el signo del remolino al Doppler color y demandando laparoscopía de urgencia con detorsión conservadora.',
        },
        {
          cells: ['Quiste Hemorrágico Roto', 'Dolor agudo postcoital en fase lútea tardía', 'Patrón reticular en red de pesca, líquido libre, estable', 'Manejo médico conservador expectante con analgesia y reposo'],
          say: 'El quiste roto debuta típicamente postcoito en fase lútea con patrón ecográfico en red de pesca; si los signos vitales y el hematocrito son estables, se opta por observación médica expectante.',
        },
        {
          cells: ['Embarazo Ectópico Roto', 'Atraso menstrual, dolor pélvico y metrorragia', 'Prueba de subunidad beta hCG POSITIVA, masa anexial', 'Laparoscopía o laparotomía exploradora de urgencia'],
          say: 'El embarazo ectópico roto presenta antecedente de atraso menstrual, metrorragia escasa y prueba de gestación positiva en sangre u orina, requiriendo cirugía de urgencia inmediata para hemostasia salpingocéntrica.',
        },
        {
          cells: ['Enfermedad Pélvica Inflamatoria', 'Dolor sordo bilateral tras regla y fiebre', 'Tríada de Hager, leucorrea purulenta, Doppler periférico', 'Antibioticoterapia triple por 14 días (ceftriaxona + doxiciclina)'],
          say: 'La infección pélvica es bilateral, de curso subagudo postmenstrual, con fiebre y tríada dolorosa de Hager, tratándose de inicio con antibióticos sistémicos de amplio espectro sin requerir cirugía en fase temprana.',
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de emergencia',
      title: 'Algoritmo de Abordaje del Dolor Pélvico Agudo Ginecológico',
      say: 'Revisemos el algoritmo estructurado para clasificar y resolver con rapidez una emergencia ginecológica aguda en el servicio de urgencia.',
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Torsión Ovárica · Cirugía de Elección',
      stem: 'Una joven de 21 años consulta por dolor intenso y súbito en fosa ilíaca izquierda de 5 horas de evolución que se acompaña de náuseas y múltiples vómitos alimentarios. La prueba de embarazo es negativa. La ecografía transvaginal Doppler revela un ovario izquierdo aumentado de volumen a 7 cm con estroma marcadamente edematoso y ausencia de flujo vascular al Doppler color, visualizándose el signo del remolino en el pedículo.',
      question: '¿Cuál es el tratamiento médico-quirúrgico inmediato más adecuado para esta paciente?',
      options: [
        { letter: 'A', text: 'Prescribir analgesia con ketorolaco endovenoso y enviar a reposo en domicilio' },
        { letter: 'B', text: 'Laparoscopía de urgencia inmediata para detorsión ovárica y preservación del anexo' },
        { letter: 'C', text: 'Punción transvaginal evacuadora guiada por ecografía' },
        { letter: 'D', text: 'Tratamiento antibiótico endovenoso para enfermedad pélvica inflamatoria' },
        { letter: 'E', text: 'Ooforectomía radical izquierda abierta sin desenrollar el ovario' },
      ],
      correct: 'B',
      explanation: 'La Torsión Ovárica es una emergencia quirúrgica isquémica por compromiso vascular del ligamento infundíbulo-pélvico. En mujeres jóvenes en edad reproductiva, el estándar quirúrgico internacional exige la intervención inmediata mediante Laparoscopía de urgencia para realizar la DETORSIÓN OVÁRICA CONSERVADORA (desenrollar el anexo sobre su eje) para restaurar el flujo sanguíneo y preservar el parénquima ovárico y la fertilidad. El ovario tiene una extraordinaria capacidad de recuperación funcional aun tras horas de isquemia clínica, por lo que la ooforectomía de entrada está desaconsejada.',
      say: {
        stem: 'Joven de veintiún años con dolor súbito e intenso en fosa ilíaca izquierda, vómitos repetidos, prueba de embarazo negativa y ecografía Doppler con ovario de siete centímetros y signo del remolino.',
        question: '¿Cuál es el tratamiento médico quirúrgico inmediato más adecuado para esta paciente?',
        options: 'La opción A propone analgesia y reposo en domicilio. La B laparoscopía de urgencia para detorsión ovárica y preservación del anexo. La C punción evacuadora. La D antibióticos endovenosos. La E ooforectomía radical sin desenrollar. Piénsalo bien.',
        answer: 'La respuesta correcta es la B. La torsión ovárica exige laparoscopía de urgencia para desenrollar el pedículo vascular y preservar el órgano.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Quiste Ovárico Hemorrágico Roto · Manejo Expectante',
      stem: 'Una paciente de 24 años consulta por dolor pélvico agudo de inicio brusco tras mantener relaciones sexuales coitales hace 3 horas. Se encuentra en el día 23 de su ciclo menstrual (fase lútea tardía). Signos vitales: PA 118/74 mmHg, FC 78 lpm, afebril. Abdomen blando, sensible en fosa ilíaca derecha sin signos peritoneales. La prueba rápida de embarazo es negativa. La ecografía transvaginal muestra una imagen quística ovárica derecha de 3.5 cm con múltiples septos finos reticulares en red de pesca y escaso líquido libre anecoico en el fondo de saco de Douglas. Su hematocrito es de 40% y se mantiene estable tras 4 horas de observación.',
      question: '¿Cuál es la conducta médica indicada para esta paciente?',
      options: [
        { letter: 'A', text: 'Laparotomía exploradora de urgencia para ooforectomía derecha' },
        { letter: 'B', text: 'Manejo médico conservador expectante con analgesia oral, reposo y control ambulatorio' },
        { letter: 'C', text: 'Cistectomía ovárica laparoscópica inmediata' },
        { letter: 'D', text: 'Inicio de quimioterapia con metotrexato parenteral' },
        { letter: 'E', text: 'Transfusión inmediata de 2 unidades de glóbulos rojos' },
      ],
      correct: 'B',
      explanation: 'El cuadro clínico de dolor pélvico agudo postcoital en fase lútea tardía, asociado a los hallazgos ecográficos patognomónicos de un quiste con patrón reticular en red de pesca y líquido libre escaso en una paciente hemodinámicamente estable (PA 118/74, FC 78, hematocrito normal de 40%), corresponde a un Quiste Ovárico Hemorrágico Roto no complicado. La conducta de elección es el MANEJO MÉDICO CONSERVADOR EXPECTANTE con analgesia, reposo y observación clínica. El sangrado del lecho quístico se autolimita espontáneamente y el hemoperitoneo leve se reabsorbe sin necesidad de cirugía.',
      say: {
        stem: 'Paciente de veinticuatro años con dolor pélvico agudo postcoital en fase lútea tardía, hemodinámicamente estable, con quiste ovárico en red de pesca y líquido libre escaso.',
        question: '¿Cuál es la conducta médica indicada para esta paciente?',
        options: 'La opción A propone laparotomía de urgencia con ooforectomía. La B manejo médico conservador expectante con analgesia, reposo y observación. La C cistectomía laparoscópica. La D metotrexato. La E transfusión de glóbulos rojos. Piénsalo bien.',
        answer: 'La respuesta correcta es la B. Al encontrarse hemodinámicamente estable con hematocrito normal, el quiste hemorrágico roto se maneja de forma conservadora expectante.',
      },
    },

    {
      type: 'points',
      kicker: 'Puntos clave EUNACOM',
      title: 'Reglas de Oro en Urgencias Ginecológicas Quirúrgicas',
      cards: [
        {
          title: 'Torsión Anexial y Rescate del Ovario',
          tag: 'Detorsión conservadora obligatoria',
          kind: 'alert',
          items: [
            {
              t: 'Dolor hiperagudo con náuseas y vómitos',
              d: 'Tríada clásica de sospecha; la ecografía Doppler evidencia edema y signo del remolino',
              say: 'El dolor súbito unilateral asociado a náuseas y vómitos orienta fuertemente a torsión, confirmándose con Doppler ante el signo del remolino.',
            },
            {
              t: '¡Desenrollar y preservar el anexo!',
              d: 'Laparoscopía de urgencia para detorsión; conservar el ovario aunque luzca cianótico',
              say: 'El manejo de elección es la laparoscopía para detorsión conservadora; el ovario se preserva siempre en jóvenes aun cuando luzca cianótico.',
            },
          ],
        },
        {
          title: 'Quiste Hemorrágico Roto',
          tag: 'Dolor postcoital y estabilidad hemodinámica',
          kind: 'key',
          items: [
            {
              t: 'Dolor postcoito en fase lútea tardía',
              d: 'Fisura de quiste lúteo con ecografía en red de pesca y descarte obligatorio de embarazo',
              say: 'El quiste lúteo roto se gatilla tras el coito en días previos a la menstruación con ecografía en red de pesca y prueba de gestación negativa.',
            },
            {
              t: 'Manejo conservador si la paciente está estable',
              d: 'Reposo y analgesia; la cirugía laparoscópica solo se indica si hay inestabilidad o hemorragia activa',
              say: 'Si la mujer está hemodinámicamente estable el manejo es expectante con reposo y analgesia, operando solo ante hemoperitoneo descompensado. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Abordaje del Dolor Pélvico Agudo Ginecológico',
    root: N(
      'start',
      'Mujer en Edad Fértil con Dolor Pélvico Agudo en Servicio de Urgencia',
      'Signos vitales · palpación abdominal y bimanual · prueba rápida de embarazo en orina obligatoria',
      'Iniciamos el abordaje evaluando estabilidad hemodinámica y descartando embarazo con prueba de orina.',
      [
        'Prueba de embarazo NEGATIVA con sospecha de patología ovárica mecánica o hemorrágica',
        N(
          'q',
          '¿Cuál es el hallazgo en la ecografía transvaginal con Doppler color?',
          'Evaluación de estroma ovárico, perfusión Doppler del pedículo y líquido libre en Douglas',
          'Determinamos el diagnóstico ecográfico entre compromiso vascular isquémico o hemorragia quística.',
          [
            'Ovario aumentado de volumen con edema, signo del remolino y ausencia de flujo Doppler',
            N(
              'alert',
              'Torsión Anexial: LAPAROSCOPÍA DE URGENCIA INMEDIATA',
              'Detorsión ovárica conservadora desenrollando el pedículo · ¡Preservar aunque esté cianótico!',
              'Ante torsión anexial realizamos laparoscopía de urgencia para detorsión y conservación ovárica.',
            ),
          ],
          [
            'Quiste con hebras de fibrina en red de pesca y líquido libre pélvico en Douglas',
            N(
              'q',
              '¿Se encuentra la paciente hemodinámicamente estable?',
              'Presión arterial, frecuencia cardíaca y hematocrito seriado en observación',
              'Evaluamos si la paciente con quiste hemorrágico roto conserva estabilidad hemodinámica.',
              [
                'Paciente estable sin signos de shock ni caída del hematocrito',
                N(
                  'ok',
                  'Manejo Médico Conservador Expectante',
                  'Observación clínica por veinticuatro horas con analgesia parenteral y reposo absoluto',
                  'Si está estable indicamos manejo médico conservador expectante con analgesia y reposo.',
                ),
              ],
              [
                'Paciente inestable con hipotensión o hemoperitoneo progresivo',
                N(
                  'do',
                  'Laparoscopía de Urgencia para Hemostasia',
                  'Aspiración de hemoperitoneo y coagulación hemostática conservadora del lecho ovárico',
                  'Ante inestabilidad hemodinámica realizamos laparoscopía de urgencia para hemostasia ovárica.',
                ),
              ],
            ),
          ],
        ),
      ],
      [
        'Prueba de embarazo POSITIVA con dolor y metrorragia',
        N(
          'alert',
          'Sospecha de Embarazo Ectópico Complicado',
          'Ecografía para localizar saco gestacional y evaluar hemoperitoneo · pabellón si hay shock',
          'Con prueba positiva sospechamos embarazo ectópico roto e indicamos conducta obstétrica inmediata.',
        ),
      ],
    ),
  },
};
