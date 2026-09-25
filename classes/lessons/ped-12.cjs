// Clase 18.12 — guion docente escrito a mano (estándar Módulo 3 · Pediatría).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-12).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-12',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Vómitos en el lactante, reflujo gastroesofágico fisiológico, estenosis hipertrófica del píloro, alcalosis hipoclorémica, invaginación intestinal y enema neumático',
      say: 'Bienvenidos a la clase sobre vómitos en el lactante, uno de los motivos de consulta más recurrentes y con mayor especificidad semiológica en el examen EUNACOM. En esta sesión aprenderemos a distinguir con claridad el reflujo fisiológico no patológico de dos grandes emergencias quirúrgicas infantiles: la estenosis hipertrófica del píloro en el primer mes de vida y la invaginación intestinal en el segundo semestre, revisando preguntas reales del banco oficial. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo obstructivo pilórico',
      title: 'Hipertrofia Muscular Pilórica, Obstrucción Gástrica y Alcalosis',
      nodes: [
        { id: 'mus', col: 0, row: 1, k: 'start', t: 'Hipertrofia de capa circular', s: 'Engrosamiento progresivo del músculo liso pilórico en las primeras semanas de vida' },
        { id: 'est', col: 1, row: 1, k: 'mech', t: 'Estenosis del canal pilórico', s: 'Elongación y estrechamiento del lumen que bloquea el vaciamiento gástrico hacia el duodeno' },
        { id: 'vom', col: 2, row: 1, k: 'effect', t: 'Vómitos en proyectil no biliosos', s: 'Contracciones gástricas forzadas que expulsan leche retenida con ácido clorhídrico puro' },
        { id: 'alc', col: 3, row: 1, k: 'alert', t: 'Alcalosis metabólica hipoclorémica', s: 'Pérdida masiva de iones hidrógeno y cloro que genera deshidratación con hipokalemia' },
      ],
      edges: [
        { from: 'mus', to: 'est', label: 'engrosamiento' },
        { from: 'est', to: 'vom', label: 'obstrucción mecánica' },
        { from: 'vom', to: 'alc', label: 'pérdida gástrica' },
      ],
      steps: [
        {
          show: ['mus', 'est'],
          note: 'Hipertrofia progresiva del músculo pilórico y colapso luminal',
          say: 'Entre la tercera y quinta semana de vida, las fibras musculares circulares del píloro sufren una marcada hipertrofia e hiperplasia progresiva, elongando el conducto y obliterando por completo el paso del contenido gástrico hacia el duodeno.',
        },
        {
          show: ['vom', 'alc'],
          note: 'Vómitos en proyectil no biliosos y trastorno metabólico clásico',
          say: 'El estómago intenta vencer mecánicamente el obstáculo con ondas peristálticas violentas que culminan en vómitos en proyectil no biliosos, cuya pérdida continua de ácido clorhídrico desata la clásica alcalosis metabólica hipoclorémica e hipopotasémica.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Entidad benigna del lactante',
      title: 'Reflujo Gastroesofágico Fisiológico: El "Regurgitador Feliz"',
      cards: [
        {
          title: 'Características del Regurgitador Feliz',
          tag: 'Proceso madurativo no patológico en menores de seis meses',
          kind: 'key',
          items: [
            {
              t: 'Regurgitaciones postprandiales sin esfuerzo ni dolor',
              d: 'Emisión pasiva de volumen variable de leche tras mamar, sin arcadas violentas ni dolor aparente',
              say: 'El reflujo fisiológico se caracteriza por regurgitaciones pasivas frecuentes después de alimentarse, ocurriendo en un lactante menor de seis meses que no presenta dolor, tos ni irritabilidad.',
            },
            {
              t: 'Curva pondoestatural completamente normal',
              d: 'Excelente ganancia de peso y talla en los controles sanos; niño sonriente y eutrófico',
              say: 'El dato clínico definitorio es que la curva de crecimiento es óptima: el niño sube de peso con normalidad, mama con entusiasmo y se mantiene activo y contento, razón por la cual se le denomina regurgitador feliz.',
            },
          ],
        },
        {
          title: 'Conducta Médica y Farmacovigilancia',
          tag: 'Medidas posturales y ¡Cero fármacos!',
          kind: 'criteria',
          items: [
            {
              t: 'Tranquilizar a los padres y medidas posturales simples',
              d: 'Mantener en posición semisentada a 30 grados post tomas, asegurar eructación y no sobrealimentar',
              say: 'La conducta médica consiste en tranquilizar a los padres explicando la inmadurez fisiológica del esfínter esofágico inferior, indicando mantener al niño erguido tras las tomas y evitar el exceso de volumen.',
            },
            {
              t: '¡Estrictamente contraindicados los IBP y procinéticos!',
              d: 'Los inhibidores de bomba de protones y domperidona no tienen indicación en el reflujo no complicado',
              say: 'En el examen EUNACOM es un error gravísimo indicar omeprazol o domperidona en un regurgitador feliz: los fármacos están contraindicados y solo aumentan el riesgo de infecciones y efectos adversos.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Emergencia quirúrgica neonatal',
      title: 'Estenosis Hipertrófica del Píloro: Presentación Clínica y Hambre Voraz',
      cards: [
        {
          title: 'Perfil Epidemiológico y Cronología',
          tag: 'Varones primogénitos entre las tres y cinco semanas',
          kind: 'alert',
          items: [
            {
              t: 'Varones primogénitos entre los 20 y 40 días de vida',
              d: 'Predominio masculino de cuatro a uno; antecedente de macrólidos (eritromicina) en periodo neonatal',
              say: 'La estenosis del píloro predomina netamente en varones primogénitos entre la tercera y quinta semana de vida, siendo rara antes de los quince días o después de los tres meses.',
            },
            {
              t: 'Vómitos postprandiales en proyectil no biliosos',
              d: 'Vómito a chorro con fuerza tras cada toma; contenido lácteo blanco sin bilis verdosa jamás',
              say: 'El vómito se produce inmediatamente tras la toma láctea, saliendo despedido con fuerza en proyectil a chorro, y se compone de leche coagulada o jugo gástrico claro, sin presencia de bilis.',
            },
          ],
        },
        {
          title: 'Hambre Voraz y Hallazgo de la Oliva Pilórica',
          tag: 'Avidez desesperada por mamar y masa palpable',
          kind: 'key',
          items: [
            {
              t: 'Hambre voraz tras el vómito (avidez por alimentarse)',
              d: 'Inmediatamente después de vomitar el lactante pide mamar con desesperación por estómago vacío',
              say: 'Un signo clínico patognomónico es el hambre voraz: a diferencia del niño con gastroenteritis que rechaza el alimento, el paciente con estenosis pilórica pide mamar con avidez de inmediato tras vaciar su estómago.',
            },
            {
              t: 'Palpación de la oliva pilórica en hipocondrio derecho',
              d: 'Masa dura móvil ovoide de uno a dos centímetros palpable en epigastrio con el paciente relajado',
              say: 'Al palpar profundamente el epigastrio o hipocondrio derecho con el lactante tranquilo se puede identificar la oliva pilórica, una masa firme del tamaño de una nuez correspondiente al esfínter engrosado.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Laboratorio patognomónico',
      title: 'Trastorno Hidroelectrolítico: Alcalosis Metabólica Hipoclorémica',
      cards: [
        {
          title: 'Génesis del Trastorno Metabólico',
          tag: 'Pérdida pura de ácido clorhídrico en el vómito',
          kind: 'alert',
          items: [
            {
              t: 'Pérdida masiva de iones hidrógeno y cloruro',
              d: 'El estómago secreta ácido clorhídrico que se vomita continuamente sin ser neutralizado en el duodeno',
              say: 'Al ser la obstrucción prepilórica, el vómito contiene exclusivamente jugo gástrico con ácido clorhídrico puro, provocando una depleción severa de cloro y una elevación marcada del bicarbonato plasmático.',
            },
            {
              t: 'Hipopotasemia por excreción renal compensatoria',
              d: 'El riñón retiene sodio a expensas de excretar potasio e hidrogeniones, generando aciduria paradójica',
              say: 'Para conservar el volumen intravascular frente a la deshidratación, el riñón activa la aldosterona reabsorbiendo sodio e intercambiándolo por potasio e hidrogeniones, lo que agrava la hipokalemia sistémica.',
            },
          ],
        },
        {
          title: 'El Perfil de Laboratorio Típico en el Examen',
          tag: 'Gasometría y electrolitos característicos',
          kind: 'criteria',
          items: [
            {
              t: 'pH elevado mayor a 7.45 con bicarbonato elevado',
              d: 'Alcalosis metabólica descompensada con bicarbonato frecuentemente superior a 30 a 35 mEq/L',
              say: 'En la gasometría destaca un pH arterial elevado sobre siete coma cuarenta y cinco junto a concentraciones de bicarbonato sérico muy elevadas, confirmando la alcalosis metabólica.',
            },
            {
              t: 'Cloro plasmático bajo y sodio bajo o límite',
              d: 'Cloro sérico frecuentemente menor a 88 a 90 mEq/L con hipopotasemia moderada a severa',
              say: 'El ionograma revela hipocloremia severa con cloro bajo noventa miliequivalentes por litro e hipopotasemia que debe ser corregida activamente antes de cualquier acto quirúrgico.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Confirmación diagnóstica',
      title: 'Ecografía Pilórica y Prioridad de Estabilización Prequirúrgica',
      cards: [
        {
          title: 'Ecografía Abdominal: El Estándar de Oro',
          tag: 'Criterios métricos ecográficos de hipertrofia pilórica',
          kind: 'key',
          items: [
            {
              t: 'Espesor muscular pilórico mayor o igual a 3 mm',
              d: 'Grosor de la capa muscular pilórica en corte transversal igual o superior a tres milímetros',
              say: 'La ecografía abdominal es el examen de elección indiscutido por su inocuidad y precisión, diagnosticando estenosis cuando el espesor muscular del píloro mide tres milímetros o más.',
            },
            {
              t: 'Longitud del canal pilórico mayor o igual a 14 mm',
              d: 'Elongación del conducto pilórico mayor a catorce milímetros con signo del cérvix o del donut',
              say: 'Se confirma además al constatar una longitud del canal pilórico igual o mayor a catorce milímetros, observándose la imagen ecográfica clásica en diana o signo del cuello uterino.',
            },
          ],
        },
        {
          title: 'Regla de Oro Vital: ¡Estabilizar Antes de Operar!',
          tag: 'La cirugía NO es una urgencia de minutos',
          kind: 'alert',
          items: [
            {
              t: 'Prohibido operar con alcalosis metabólica e hipocloremia',
              d: 'La anestesia general en un lactante con alcalosis severa desencadena apnea prolongada y arritmias letales',
              say: 'En el EUNACOM es una regla de seguridad absoluta: la estenosis pilórica no se opera de urgencia inmediata sin antes corregir la deshidratación y normalizar el cloro y el pH sanguíneo.',
            },
            {
              t: 'Infusión de suero fisiológico con cloruro de potasio',
              d: 'Aporte de cloro y sodio para reponer volumen y permitir que el riñón excrete el exceso de bicarbonato',
              say: 'Se instala sonda nasogástrica descompresiva y se infunde suero fisiológico enriquecido con potasio una vez constatada la diuresis, operando únicamente cuando el bicarbonato descienda bajo treinta.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Resolución quirúrgica definitiva',
      title: 'Tratamiento Definitivo: Piloromiotomía de Ramstedt',
      cards: [
        {
          title: 'Técnica Quirúrgica de Ramstedt',
          tag: 'Sección muscular extramucosa longitudinal',
          kind: 'criteria',
          items: [
            {
              t: 'Incisión longitudinal del músculo pilórico hipertrofiado',
              d: 'Se disecan y separan las fibras musculares circulares hipertróficas hasta que la mucosa protruye libremente',
              say: 'La técnica estándar es la piloromiotomía de Ramstedt por vía abierta o laparoscópica, consistente en seccionar longitudinalmente la capa muscular hipertrofiada permitiendo que la mucosa duodenal protruya sin abrir la luz.',
            },
            {
              t: 'Comprobación de indemnidad mucosa intraoperatoria',
              d: 'Insuflar aire por sonda gástrica para descartar filtraciones o perforaciones de la mucosa duodenal',
              say: 'El cirujano comprueba minuciosamente que la mucosa esté intacta insuflando aire por la sonda gástrica, evitando perforaciones iatrogénicas inadvertidas que causarían peritonitis química.',
            },
          ],
        },
        {
          title: 'Evolución Postoperatoria y Realimentación',
          tag: 'Reinicio precoz de la lactancia materna',
          kind: 'key',
          items: [
            {
              t: 'Reinicio de la alimentación a las seis a doce horas',
              d: 'Se inicia tolerancia con leche materna fraccionada en pequeños volúmenes a las pocas horas de la cirugía',
              say: 'La realimentación con leche materna o fórmula se inicia de forma precoz entre las seis y doce horas postoperatorias en volúmenes pequeños y progresivos con excelente tolerancia.',
            },
            {
              t: 'Vómitos esporádicos precoces transitorios',
              d: 'Pequeñas regurgitaciones en las primeras 24 horas por edema local o atonía gástrica residual no indican falla',
              say: 'Es común que ocurran algunas regurgitaciones leves durante el primer día debido a la manipulación tisular, las cuales remiten espontáneamente sin comprometer el éxito definitivo de la cirugía.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Emergencia abdominal del lactante mayor',
      title: 'Invaginación Intestinal: Mecanismo de Telescopaje y Placas de Peyer',
      cards: [
        {
          title: 'Fisiopatología del Telescopaje Ileocólico',
          tag: 'Introducción del íleon terminal dentro del ciego',
          kind: 'alert',
          items: [
            {
              t: 'Introducción de un asa proximal en el lumen distal',
              d: 'El segmento invaginado (intussusceptum) se introduce en el segmento receptor distal (intussuscipiens)',
              say: 'La invaginación intestinal o intususcepción es la introducción en telescopaje de un segmento de intestino proximal dentro del segmento distal, siendo la variante ileocólica la responsable del noventa por ciento de los casos.',
            },
            {
              t: 'Isquemia venosa mesentérica progresiva y necrosis',
              d: 'El mesenterio traccionado sufre congestión venosa rápida, edema de pared, isquemia arterial y perforación',
              say: 'Al introducirse el asa arrastra su mesenterio, provocando compresión de las venas mesentéricas con edema masivo, necrosis isquémica de la mucosa y riesgo inminente de gangrena y perforación intestinal.',
            },
          ],
        },
        {
          title: 'Etiología según Grupo Etario',
          tag: 'Hipertrofia linfoide idiopática versus punto guía anatómico',
          kind: 'key',
          items: [
            {
              t: 'Lactantes de seis a doce meses: Causa idiopática viral',
              d: 'Hipertrofia de placas de Peyer en íleon terminal secundaria a infección reciente por adenovirus o rotavirus',
              say: 'En lactantes entre seis y doce meses la causa es casi siempre idiopática, desencadenada por la hipertrofia de las placas de Peyer tras un cuadro viral respiratorio o digestivo reciente.',
            },
            {
              t: 'Niños mayores de dos años: Descartar punto guía patológico',
              d: 'Obliga a investigar divertículo de Meckel, pólipos intestinales, duplicación digestiva o linfoma de Burkitt',
              say: 'Si la invaginación ocurre en un niño mayor de dos años se debe sospechar un punto guía anatómico patológico como un divertículo de Meckel, un pólipo juvenil o un linfoma intestinal.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Tríada semiológica cardinal',
      title: 'Clínica de la Invaginación: Cólico Paroxístico, Morcilla y Jalea',
      cards: [
        {
          title: 'Dolor Abdominal Paroxístico con Encogimiento de Piernas',
          tag: 'Crisis dolorosas periódicas intercaladas con letargia',
          kind: 'alert',
          items: [
            {
              t: 'Crisis súbitas de llanto inconsolable y palidez',
              d: 'Episodios cólicos intensos cada 15 a 20 minutos donde el lactante flexiona los muslos sobre el abdomen',
              say: 'El cuadro se manifiesta por crisis súbitas y periódicas de llanto inconsolable con palidez intensa y encogimiento de las piernas sobre el abdomen, coincidiendo con las ondas peristálticas que comprimen el mesenterio.',
            },
            {
              t: 'Periodo de letargia o somnolencia intercrítica',
              d: 'Entre los accesos dolorosos el niño se aprecia llamativamente somnoliento, decaído o apático',
              say: 'Un dato semiológico desconcertante es la letargia intercrítica: entre las crisis dolorosas el niño queda profundamente dormido o decaído, simulando un cuadro neurológico o intoxicación.',
            },
          ],
        },
        {
          title: 'Masa en Morcilla y Deposiciones en Jalea de Grosella',
          tag: 'Palpación abdominal y rectorragia isquémica',
          kind: 'criteria',
          items: [
            {
              t: 'Masa alargada palpable en hipocondrio derecho (morcilla)',
              d: 'Masa cilíndrica firme y dolorosa en hemiabdomen derecho con fosa ilíaca derecha vacía (Signo de Dance)',
              say: 'A la palpación abdominal se constata una masa cilíndrica alargada similar a una morcilla en el hipocondrio derecho, acompañada de una fosa ilíaca derecha vacía por el desplazamiento cecal.',
            },
            {
              t: 'Deposición en jalea de grosella (sangre con mucus)',
              d: 'Signo tardío de necrosis mucosa superficial; mezcla de sangre roja oscura y moco abundante',
              say: 'La eliminación de deposiciones mucosanguinolentas de color rojo oscuro semejantes a jalea de grosella es un signo tardío que traduce necrosis y descamación de la mucosa isquémica intususceptada.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico y tratamiento no quirúrgico',
      title: 'Diagnóstico Ecográfico en Diana y Reducción con Enema Neumático',
      cards: [
        {
          title: 'Ecografía Abdominal: Signo de la Diana o Donut',
          tag: 'Estándar de oro con sensibilidad superior al 98%',
          kind: 'key',
          items: [
            {
              t: 'Signo de la diana o donut en corte transversal',
              d: 'Anillos concéntricos hiperecogénicos e hipoecogénicos correspondientes a las capas intestinales invaginadas',
              say: 'La ecografía abdominal es el método diagnóstico de elección indiscutido, evidenciando en corte transversal la clásica imagen en diana o donut formada por los anillos concéntricos del asa plegada.',
            },
            {
              t: 'Signo del pseudoriñón en corte longitudinal',
              d: 'Apariencia de riñón anatómico con centro hiperecogénico que representa el mesenterio arrastrado',
              say: 'En corte longitudinal se aprecia el signo del pseudoriñón, visualizando la pared del asa edematosa con el mesenterio ecogénico central atrapado en su interior.',
            },
          ],
        },
        {
          title: 'Reducción No Quirúrgica con Enema Neumático',
          tag: 'Tratamiento de elección en ausencia de peritonitis',
          kind: 'pharma',
          items: [
            {
              t: 'Enema de aire (neumático) o hidrostático con bario',
              d: 'Insuflación rectal controlada de aire bajo fluoroscopía o ecografía con tasa de éxito superior al 85%',
              say: 'Si el paciente no presenta signos de peritonitis ni perforación, el tratamiento inicial de elección es la reducción no quirúrgica mediante enema de aire insuflado por sonda rectal bajo control radiológico continuo.',
            },
            {
              t: 'Indicaciones de laparotomía de urgencia',
              d: 'Fracaso del enema tras dos o tres intentos, sospecha de perforación, peritonitis aguda o shock séptico',
              say: 'La cirugía urgente se reserva para pacientes que debutan con peritonitis o perforación, o cuando el enema neumático fracasa tras varios intentos controlados.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnóstico diferencial',
      title: 'Diagnóstico Diferencial de los Vómitos Frecuentes en el Lactante',
      head: ['Patología', 'Edad Típica', 'Características del Vómito', 'Tratamiento de Elección'],
      rows: [
        {
          cells: ['Reflujo Fisiológico', 'Menor de seis meses', 'Regurgitaciones pasivas, buen peso, sin dolor', 'Medidas posturales, educar y no dar fármacos'],
          say: 'El reflujo fisiológico cursa con regurgitaciones pasivas y excelente ganancia de peso, requiriendo solo medidas posturales sin fármacos.',
        },
        {
          cells: ['Estenosis del Píloro', 'Tres a cinco semanas', 'En proyectil, no bilioso, hambre voraz', 'Corrección hidroelectrolítica más Piloromiotomía'],
          say: 'La estenosis hipertrófica del píloro debuta al mes de vida con vómitos a chorro no biliosos y hambre voraz, tratándose con piloromiotomía.',
        },
        {
          cells: ['Invaginación Intestinal', 'Seis a doce meses', 'Vómito tardío, cólico paroxístico, jalea grosella', 'Reducción no quirúrgica con enema de aire'],
          say: 'La invaginación intestinal afecta a lactantes de seis a doce meses con cólicos intensos y jalea de grosella, reduciéndose con enema de aire.',
        },
        {
          cells: ['Vólvulo por Malrotación', 'Primer mes de vida', 'Vómito bilioso verdoso precoz y shock', 'Cirugía de Ladd inmediata de máxima urgencia'],
          say: 'Todo vómito bilioso en el neonato es un vólvulo de intestino medio hasta demostrar lo contrario, exigiendo cirugía de Ladd inmediata.',
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de decisión clínica',
      title: 'Algoritmo de Evaluación de Vómitos en el Lactante',
      say: 'Examinemos el algoritmo paso a paso para orientar la conducta diagnóstica y terapéutica frente a un lactante que consulta por vómitos.',
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Diciembre 2018 · Pregunta 155',
      title: 'Examen de Elección en Vómitos en Proyectil Neonatales',
      stem: 'Un niño de 28 días presenta vómitos después de comer, que iniciaron hace una semana y que han aumentado en frecuencia e intensidad. La madre refiere que llora después de comer y vomitar y se objetiva que no ha incrementado bien de peso en el último tiempo, observándose algo enflaquecido.',
      question: '¿Cuál es el examen de elección para iniciar el estudio en este paciente?',
      options: [
        { letter: 'A', text: 'Radiografía baritada de esófago, estómago y duodeno' },
        { letter: 'B', text: 'Ecografía abdominal dirigida a píloro' },
        { letter: 'C', text: 'Endoscopía digestiva alta con biopsia duodenal' },
        { letter: 'D', text: 'Colonoscopía con biopsia de la pared intestinal' },
        { letter: 'E', text: 'Radiografía simple toracoabdominal' },
      ],
      correct: 'B',
      explanation: 'La historia clínica de un recién nacido de 28 días (4 semanas) con vómitos postprandiales progresivos en frecuencia e intensidad, irritabilidad con hambre voraz tras vomitar y compromiso pondoestatural con pérdida ponderal es la presentación clásica de Estenosis Hipertrófica del Píloro (EHP). El examen diagnóstico de primera línea, considerado el estándar de oro actual por su altísima sensibilidad y especificidad (> 98%) y ausencia de radiación ionizante, es la Ecografía Abdominal dirigida al píloro, la cual permite medir con precisión milimétrica el espesor del músculo pilórico (>= 3 mm) y la longitud del conducto (>= 14 mm).',
      say: {
        stem: 'Niño de veintiocho días con vómitos crecientes postprandiales que llora con hambre tras vomitar y presenta detención ponderal enflaquecido.',
        question: '¿Cuál es el examen de elección para iniciar el estudio en este paciente?',
        options: 'La opción A radiografía baritada digestiva alta. La B ecografía abdominal dirigida a píloro. La C endoscopía alta con biopsia. La D colonoscopía. La E radiografía simple toracoabdominal. Selecciona el método de imagen ideal. Piénsalo.',
        answer: 'La respuesta correcta es la B. La ecografía abdominal es el examen de elección por su alta sensibilidad e inocuidad para confirmar estenosis pilórica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco Oficial AEE · Perfil V3 2.01.1.046',
      title: 'Vómitos en Proyectil y Alcalosis Hipoclorémica',
      stem: 'Un lactante varón de 4 semanas es evaluado por vómitos frecuentes desde hace 4 días. La madre relata que vomita violentamente a chorro después de alimentarse, la leche sale sin color verdoso y luego pide mamar inmediatamente con desesperación. En los exámenes de laboratorio se constata: pH 7.50, Bicarbonato 32 mEq/L, Cloro 86 mEq/L y Sodio 134 mEq/L.',
      question: '¿Cuál es el diagnóstico más probable y el examen de primera línea para confirmarlo?',
      options: [
        { letter: 'A', text: 'Enfermedad por reflujo gastroesofágico; pH-metría esofágica de 24 horas' },
        { letter: 'B', text: 'Estenosis hipertrófica del píloro; Ecografía abdominal dirigida a píloro' },
        { letter: 'C', text: 'Invaginación intestinal; Enema baritado con fluoroscopía' },
        { letter: 'D', text: 'Atresia duodenal; Radiografía de abdomen simple de pie' },
        { letter: 'E', text: 'Alergia a la proteína de leche de vaca; Colonoscopía con biopsia' },
      ],
      correct: 'B',
      explanation: 'La asociación clínica y metabólica de un lactante varón de 4 semanas con vómitos postprandiales en proyectil no biliosos, persistencia de apetito voraz tras la emesis y alcalosis metabólica hipoclorémica con hipopotasemia en los gases y electrolitos es patognomónica de Estenosis Hipertrófica del Píloro. El examen de confirmación definitivo es la ecografía abdominal, que demuestra el engrosamiento del músculo pilórico (espesor >= 3 mm y longitud >= 14 mm). Debe estabilizarse hidroelectrolíticamente antes de la piloromiotomía.',
      say: {
        stem: 'Varón de cuatro semanas con vómitos en proyectil no biliosos hambre voraz y alcalosis metabólica hipoclorémica con cloro en ochenta y seis.',
        question: '¿Cuál es el diagnóstico más probable y el examen de primera línea para confirmarlo?',
        options: 'La opción A enfermedad por reflujo con peachemetría. La B estenosis hipertrófica del píloro con ecografía abdominal. La C invaginación con enema. La D atresia duodenal. La E alergia alimentaria. Analiza la tríada clínica. Piénsalo.',
        answer: 'La respuesta correcta es la B. La clínica y la alcalosis hipoclorémica confirman estenosis del píloro estudiándose con ecografía abdominal.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco Oficial AEE · Perfil V3 2.01.1.046',
      title: 'Diagnóstico Clínico de Invaginación Intestinal',
      stem: 'Un lactante de 7 meses, previamente sano, presenta desde hace 6 horas episodios súbitos de llanto inconsolable en los que flexiona las piernas sobre el abdomen y palidece intensamente. Entre las crisis el niño se observa somnoliento y decaído. Hace una hora presentó un vómito bilioso y eliminó una deposición mucosa de color rojo oscuro similar a "jalea de grosella". Al palpar el abdomen se percibe una masa alargada en el hipocondrio derecho.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Diarrea bacteriana por Shigella' },
        { letter: 'B', text: 'Estenosis hipertrófica del píloro' },
        { letter: 'C', text: 'Invaginación intestinal (Intususcepción)' },
        { letter: 'D', text: 'Divertículo de Meckel sangrante indoloro' },
        { letter: 'E', text: 'Alergia a la proteína de la leche de vaca' },
      ],
      correct: 'C',
      explanation: 'El cuadro reúne todos los signos cardinales de Invaginación Intestinal (Intususcepción ileocólica) en el lactante: edad típica (segundo semestre de vida, 7 meses), crisis paroxísticas de dolor abdominal cólico intenso con encogimiento de extremidades y palidez, letargia y somnolencia intercrítica, vómitos biliosos, masa alargada cilíndrica palpable en hipocondrio derecho ("morcilla") y eliminación de deposición mucosanguinolenta clásica en "jalea de grosella". Se confirma mediante ecografía (signo de la diana) y se trata inicialmente con enema de aire si no hay peritonitis.',
      say: {
        stem: 'Lactante de siete meses con cólicos paroxísticos encogimiento de piernas masa palpable en hipocondrio derecho y heces en jalea de grosella.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'La opción A disentería bacteriana. La B estenosis hipertrófica del píloro. La C invaginación intestinal o intususcepción. La D divertículo de Meckel indoloro. La E alergia a la proteína de leche. Identifica el abdomen agudo. Piénsalo.',
        answer: 'La respuesta correcta es la C. La tríada de crisis cólicas masa palpable en morcilla y deposición en jalea de grosella es patognomónica de invaginación intestinal.',
      },
    },

    {
      type: 'points',
      kicker: 'Puntos clave EUNACOM',
      title: 'Reglas de Oro en Vómitos del Lactante',
      cards: [
        {
          title: 'Diferenciación entre EHP e Invaginación',
          tag: 'Edades y características de los vómitos',
          kind: 'alert',
          items: [
            {
              t: 'EHP: 1 mes de vida, vómito NO bilioso, hambre voraz y alcalosis',
              d: 'Varón de 3 a 5 semanas; ecografía pilórica; corregir deshidratación y cloro antes de operar',
              say: 'Recuerden que la estenosis pilórica ocurre al mes de vida con vómitos a chorro no biliosos y alcalosis hipoclorémica, siendo obligatorio normalizar los electrolitos antes de la cirugía.',
            },
            {
              t: 'Invaginación: 6 a 12 meses, cólico periódico, morcilla y enema de aire',
              d: 'Lactante en segundo semestre; ecografía en diana; reducción no quirúrgica con enema neumático',
              say: 'La invaginación afecta a lactantes en el segundo semestre con dolor cólico y masa palpable en diana, tratándose con enema de aire si no hay signos de peritonitis.',
            },
          ],
        },
        {
          title: 'Signos de Alarma Mayor en Pediatría',
          tag: 'Vómito verde y regurgitador feliz',
          kind: 'key',
          items: [
            {
              t: '¡Todo vómito bilioso en el neonato es un vólvulo hasta demostrar lo contrario!',
              d: 'Urgencia quirúrgica inmediata; malrotación intestinal con riesgo de necrosis total del intestino medio',
              say: 'Graben esta máxima médica: todo vómito bilioso en el recién nacido es un vólvulo de intestino medio hasta demostrar lo contrario y exige resolución quirúrgica urgente.',
            },
            {
              t: 'El regurgitador feliz jamás recibe medicamentos',
              d: 'Regurgitaciones sin dolor con curva pondoestatural normal; medidas posturales exclusivas sin IBP',
              say: 'El regurgitador feliz con curva de peso normal no requiere fármacos. Si te llevas una sola idea de hoy: en estenosis hipertrófica del píloro la prioridad antes de operar es corregir la alcalosis metabólica hipoclorémica con hidratación endovenosa. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Enfrentamiento de los Vómitos en el Lactante',
    root: N(
      'start',
      'Lactante que Consulta por Episodios Frecuentes de Vómitos o Regurgitaciones',
      'Evaluación de características del vómito (bilioso vs lácteo), curva pondoestatural, edad y signos de dolor agudo',
      'Iniciamos la evaluación diferenciando si el vómito contiene bilis verdosa, el patrón temporal y la curva de crecimiento.',
      [
        'Presencia de vómito bilioso (verdoso oscuro) en recién nacido o lactante pequeño',
        N(
          'alert',
          'Sospecha de Vólvulo de Intestino Medio por Malrotación',
          'Régimen cero inmediato · Sonda nasogástrica descompresiva · Vía venosa con fluidos · Evaluación urgente por cirujano pediátrico de guardia',
          'El vómito bilioso es una emergencia quirúrgica inmediata requiriendo descompresión gástrica y evaluación por cirugía.',
        ),
      ],
      [
        'Vómitos no biliosos en lactante de tres a cinco semanas con avidez por comer y pérdida de peso',
        N(
          'do',
          'Sospecha de Estenosis Hipertrófica del Píloro (EHP)',
          'Gases y electrolitos (alcalosis hipoclorémica) · Ecografía abdominal de píloro (músculo >= 3 mm) · Rehidratación antes de cirugía',
          'Sospechamos estenosis pilórica solicitando ecografía y electrolitos para corregir la alcalosis antes de la piloromiotomía.',
          [
            'Ecografía confirma EHP (espesor muscular >= 3 mm y longitud >= 14 mm)',
            N(
              'refer',
              'Corrección Electrolítica y Piloromiotomía de Ramstedt',
              'Suero fisiológico con KCl hasta normalizar cloro y bicarbonato · Piloromiotomía extramucosa electiva',
              'Tras confirmar el diagnóstico se corrigen los electrolitos y se efectúa la piloromiotomía de Ramstedt.',
            ),
          ],
        ),
      ],
      [
        'Crisis de dolor cólico súbito con encogimiento de piernas, letargia y heces con sangre en lactante de 6 a 12 meses',
        N(
          'do',
          'Sospecha de Invaginación Intestinal (Intususcepción)',
          'Evaluación de signos peritoneales · Ecografía abdominal urgente en búsqueda del signo de la diana o donut',
          'En el lactante con cólicos paroxísticos solicitamos ecografía abdominal para confirmar invaginación intestinal.',
          [
            'Ecografía positiva en diana sin peritonitis ni perforación',
            N(
              'do',
              'Reducción No Quirúrgica con Enema Neumático de Aire',
              'Procedimiento bajo fluoroscopía o ecografía en pabellón/rayos · Observación por 24 horas para descartar recurrencia',
              'Si no hay peritonitis se realiza reducción con enema de aire con alta tasa de éxito no quirúrgico.',
            ),
          ],
        ),
      ],
      [
        'Regurgitaciones postprandiales sin esfuerzo en lactante menor de 6 meses con excelente ganancia de peso',
        N(
          'ok',
          'Reflujo Gastroesofágico Fisiológico (Regurgitador Feliz)',
          'Tranquilizar a los padres · Medidas posturales a 30 grados post tomas y no sobrealimentar · ¡Cero fármacos!',
          'En el regurgitador feliz que sube de peso se indican exclusivamente medidas posturales sin prescribir medicamentos.',
        ),
      ],
    ),
  },
};
