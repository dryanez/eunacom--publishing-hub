// Clase 18.18 — guion docente escrito a mano (estándar Módulo 3 · Pediatría).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-18).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-18',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Dificultad respiratoria neonatal, score de Silverman-Andersen, enfermedad de membrana hialina, taquipnea transitoria, síndrome de aspiración meconial e hipertensión pulmonar',
      say: 'Bienvenidos a la clase sobre dificultad respiratoria neonatal, una de las urgencias vitales más desafiantes en sala de partos y un clásico absoluto en el examen EUNACOM. En esta sesión aprenderemos a graduar la gravedad con el score de Silverman y Andersen, dominaremos el diagnóstico diferencial entre la enfermedad de membrana hialina del prematuro, el pulmón húmedo del nacido por cesárea y la aspiración meconial del postérmino asfíctico, interpretando sus patrones radiológicos característicos. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismos fisiopatológicos comparados',
      title: 'Tres Mecanismos Distintos de Colapso Respiratorio Neonatal',
      nodes: [
        { id: 'sur', col: 0, row: 1, k: 'start', t: 'Déficit de surfactante (EMH)', s: 'Inmadurez alveolar con colapso telespiratorio y microatelectasias masivas difusas' },
        { id: 'enac', col: 1, row: 1, k: 'mech', t: 'Retención de líquido (TTNR)', s: 'Falla de activación de canales de sodio ENaC por ausencia de trabajo de parto' },
        { id: 'mec', col: 2, row: 1, k: 'alert', t: 'Aspiración de meconio (SAM)', s: 'Obstrucción en válvula, neumonitis química e inactivación de surfactante' },
        { id: 'hip', col: 3, row: 1, k: 'risk', t: 'Hipoxemia y falla respiratoria', s: 'Alteración ventilación perfusión con riesgo de hipertensión pulmonar persistente' },
      ],
      edges: [
        { from: 'sur', to: 'hip', label: 'cortocircuito intrapulmonar' },
        { from: 'enac', to: 'hip', label: 'edema intersticial' },
        { from: 'mec', to: 'hip', label: 'hiperreactividad vascular' },
      ],
      steps: [
        {
          show: ['sur', 'enac'],
          note: 'Colapso alveolar por tensión superficial versus edema alveolar transitorio',
          say: 'En el prematuro la falta de surfactante incrementa la tensión superficial provocando atelectasias difusas progresivas que colapsan el pulmón al final de cada espiración. En contraste, en el recién nacido de término por cesárea electiva los canales epiteliales de sodio no se activan a tiempo, reteniendo líquido en el intersticio y en los alvéolos.',
        },
        {
          show: ['mec', 'hip'],
          note: 'Obstrucción química inflamatoria y colapso del intercambio gaseoso',
          say: 'En el síndrome de aspiración meconial el material espeso bloquea mecánicamente las vías aéreas generando un mecanismo valvular con sobredistensión y atelectasias secundarias, sumado a una intensa neumonitis química que desactiva el surfactante y precipita hipoxemia refractaria con hipertensión pulmonar persistente severa.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Evaluación semiológica estandarizada',
      title: 'Score de Silverman-Andersen: Cuantificación del Distrés Neonatal',
      cards: [
        {
          title: 'Los Cinco Parámetros Clínicos del Score',
          tag: 'A diferencia de APGAR, mayor puntaje indica peor gravedad',
          kind: 'key',
          items: [
            {
              t: 'Movimientos toraco-abdominales y tiraje intercostal',
              d: 'Sincronía respiratoria normal (0 pts), retraso torácico en inspiración (1 pt) o bamboleo / disociación toracoabdominal (2 pts)',
              say: 'Se evalúa la sincronía toraco-abdominal observando si el tórax y el abdomen se expanden armónicamente en inspiración o si existe un bamboleo respiratorio con colapso torácico y distensión abdominal alternante.',
            },
            {
              t: 'Retracción xifoidea y aleteo nasal activo',
              d: 'Retracción subesternal ausente, discreta o marcada; aleteo nasal ausente, discreto o muy acentuado con apertura de narinas',
              say: 'Se examina la retracción xifoidea subesternal y el aleteo nasal, un reflejo protector mediante el cual el recién nacido dilata activamente sus fosas nasales para disminuir la resistencia inspiratoria de la vía aérea superior.',
            },
          ],
        },
        {
          title: 'Quejido Espiratorio: Mecanismo de Auto-PEEP',
          tag: 'Cierre parcial de la glotis para no colapsar el alvéolo',
          kind: 'alert',
          items: [
            {
              t: 'Fisiopatología del quejido respiratorio',
              d: 'El neonato espira contra la glotis parcialmente cerrada para generar presión positiva de final de espiración y evitar atelectasias',
              say: 'El quejido espiratorio es un esfuerzo fisiológico compensatorio donde el neonato espira contra su glotis entreabierta, reteniendo volumen gaseoso y generando una presión positiva intrínseca para frenar el colapso alveolar.',
            },
            {
              t: 'Graduación del quejido en el puntaje de Silverman',
              d: 'Ausente (0 pts), audible solo con fonendoscopio (1 pt) o audible a distancia sin instrumentos al pie de la cuna (2 pts)',
              say: 'Si no hay quejido se califica con cero puntos, si se detecta únicamente mediante la auscultación con fonendoscopio suma un punto y si se escucha a distancia al pie de la cuna otorga dos puntos de gravedad.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Desglose del puntaje de silverman',
      title: 'Puntaje de Silverman y Andersen para Graduación de Dificultad Respiratoria',
      head: ['Signo Clínico Evaluado', 'Cero Puntos', 'Un Punto', 'Dos Puntos'],
      rows: [
        {
          cells: ['Aleteo nasal', 'Ausente', 'Discreto o intermitente', 'Marcado y continuo'],
          say: 'El aleteo nasal pasa de estar completamente ausente en reposo a ser discreto y finalmente continuo y evidente.',
        },
        {
          cells: ['Quejido espiratorio', 'Ausente', 'Audible solo con fonendoscopio', 'Audible a distancia sin fonendo'],
          say: 'El quejido se califica con un punto si requiere fonendoscopio y con dos puntos si es audible sin instrumentos.',
        },
        {
          cells: ['Tiraje intercostal', 'Ausente', 'Apenas visible', 'Marcado con hundimiento intercostal'],
          say: 'El tiraje intercostal traduce el uso intenso de musculatura accesoria con colapso visible de las partes blandas.',
        },
        {
          cells: ['Retracción esternal', 'Ausente', 'Hundimiento xifoideo discreto', 'Hundimiento esternal profundo'],
          say: 'La retracción xifoidea profunda otorga dos puntos reflejando presiones intratorácicas sumamente negativas.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Patología de la prematurez',
      title: 'Enfermedad de Membrana Hialina (EMH): Fisiopatología y Déficit',
      cards: [
        {
          title: 'Déficit Cuantitativo y Cualitativo de Surfactante',
          tag: 'Principal causa de dificultad respiratoria en prematuros',
          kind: 'alert',
          items: [
            {
              t: 'Inmadurez de los neumocitos tipo II alveolares',
              d: 'La síntesis de dipalmitoilfosfatidilcolina madura después de las 34 a 35 semanas; antes predomina déficit severo',
              say: 'Los neumocitos tipo dos maduran hacia la semana treinta y cuatro a treinta y cinco de gestación. En recién nacidos más prematuros, la carencia de fosfolípidos tensioactivos impide reducir la tensión superficial.',
            },
            {
              t: 'Colapso alveolar al final de cada espiración',
              d: 'Pérdida de la capacidad residual funcional, microatelectasias masivas, cortocircuito intrapulmonar de derecha a izquierda y acidosis',
              say: 'Al final de cada ciclo respiratorio los alvéolos colapsan íntegramente, requiriendo un gasto energético enorme para volver a inflarse, lo que conduce con rapidez a fatiga muscular, hipoxemia y acidosis respiratoria grave.',
            },
          ],
        },
        {
          title: 'Factores de Riesgo Clásicos en Membrana Hialina',
          tag: 'Prematurez extrema como factor primordial',
          kind: 'criteria',
          items: [
            {
              t: 'Menor edad gestacional y ausencia de corticoides antenatales',
              d: 'Afecta a más del sesenta por ciento de los menores de 28 semanas; el riesgo se reduce drásticamente con betametasona previa',
              say: 'La probabilidad de desarrollar membrana hialina es inversamente proporcional a la edad gestacional, afectando a la mayoría de los prematuros extremos que no recibieron profilaxis con corticoides prenatales.',
            },
            {
              t: 'Hijo de madre diabética, sexo masculino y asfixia perinatal',
              d: 'El hiperinsulinismo fetal antagoniza directamente la síntesis de surfactante por los corticoides endógenos fetales',
              say: 'El exceso de insulina en el hijo de madre diabética antagoniza biológicamente la acción de los corticoides endógenos, retrasando la maduración bioquímica pulmonar incluso en edades gestacionales avanzadas.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica y patrón radiológico clásico',
      title: 'Presentación Clínica y Radiografía en Vidrio Esmerilado',
      cards: [
        {
          title: 'Cuadro Clínico de Comienzo Inmediato',
          tag: 'Distrés precoz en los primeros minutos de vida',
          kind: 'key',
          items: [
            {
              t: 'Inicio precoz al nacer con empeoramiento progresivo',
              d: 'Polipnea, quejido espiratorio intenso audible, retracción esternal y cianosis que empeoran en las primeras 24 a 48 horas',
              say: 'El cuadro se manifiesta desde el nacimiento con polipnea, quejido continuo audible, retracción esternal acentuada y requerimientos crecientes de oxígeno que alcanzan su máxima severidad hacia las cuarenta y ocho horas.',
            },
            {
              t: 'Auscultación con murmullo vesicular disminuido difuso',
              d: 'Entrada de aire pobre y simétrica en ambos campos pulmonares con estertores húmedos finos bilaterales',
              say: 'En el examen físico pulmonar destaca un murmullo vesicular notablemente amortiguado de forma homogénea en ambos campos, acompañado de crépitos inspiratorios finos por la apertura alveolar forzada.',
            },
          ],
        },
        {
          title: 'Patrón Radiológico Clásico: Triada Patognomónica',
          tag: 'Hipoinsuflación, vidrio esmerilado y broncograma aéreo',
          kind: 'alert',
          items: [
            {
              t: 'Pulmones hipoinsuflados con volumen reducido',
              d: 'Tórax acampanado con menos de siete espacios intercostales visibles sobre las cúpulas diafragmáticas',
              say: 'La radiografía de tórax revela una marcada hipoinsuflación con menos de siete espacios intercostales visibles sobre las cúpulas diafragmáticas debido a las microatelectasias generalizadas.',
            },
            {
              t: 'Patrón reticulonodular difuso en vidrio esmerilado',
              d: 'Infiltrado granular fino homogéneo bilateral que borra la silueta cardíaca con broncograma aéreo que sobrepasa el tercio medio',
              say: 'Aparece un infiltrado reticulogranular difuso y simétrico en vidrio esmerilado, a través del cual se transparenta el árbol traqueobronquial permeable en forma de broncograma aéreo prominente.',
            },
          ],
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tratamiento estándar de oro',
      title: 'Manejo Escalonado de la Enfermedad de Membrana Hialina',
      nodes: [
        { id: 'cpap', col: 0, row: 1, k: 'start', t: 'CPAP nasal precoz', s: 'Presión positiva continua en sala de partos para estabilizar volumen alveolar' },
        { id: 'sur', col: 1, row: 1, k: 'good', t: 'Surfactante exógeno precoz', s: 'Instilación endotraqueal de cien a doscientos miligramos por kilo' },
        { id: 'tec', col: 2, row: 1, k: 'mech', t: 'Técnica no invasiva (LISA)', s: 'Administración por catéter delgado en tráquea manteniendo respiración espontánea' },
        { id: 'res', col: 3, row: 1, k: 'effect', t: 'Rápida mejoría de compliance', s: 'Aumento inmediato de oxigenación y descenso vertiginoso de requerimientos de FiO2' },
      ],
      edges: [
        { from: 'cpap', to: 'sur', label: 'requerimiento de oxígeno' },
        { from: 'sur', to: 'tec', label: 'modalidad de instilación' },
        { from: 'tec', to: 'res', label: 'apertura alveolar' },
      ],
      steps: [
        {
          show: ['cpap', 'sur'],
          note: 'Inicio con CPAP nasal y administración temprana de surfactante',
          say: 'La estrategia ventilatoria moderna prioriza iniciar presión positiva continua nasal precoz desde la sala de partos para reclutar volumen pulmonar, administrando surfactante exógeno endotraqueal ante requerimientos de oxígeno sobre el treinta por ciento.',
        },
        {
          show: ['tec', 'res'],
          note: 'Técnicas mínimamente invasivas y recuperación alveolar inmediata',
          say: 'El surfactante se instila mediante sondas endotraqueales finas preservando la ventilación espontánea del niño, logrando una rápida distensión alveolar, aumento del volumen corriente y un descenso vertiginoso en la necesidad de oxígeno suplementario.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Prevención obstétrica de excelencia',
      title: 'Corticoides Antenatales: La Intervención más Eficaz',
      cards: [
        {
          title: 'Esquema Recomendado por el Ministerio de Salud',
          tag: 'Indicado en amenaza de parto prematuro entre 24 y 34 semanas',
          kind: 'pharma',
          items: [
            {
              t: 'Betametasona: Doce miligramos cada 24 horas por dos dosis',
              d: 'Administración intramuscular; alternativa Dexametasona 6 mg cada 12 horas por cuatro dosis intramusculares',
              say: 'El esquema preventivo de referencia es la betametasona intramuscular a dosis de doce miligramos cada veinticuatro horas por dos dosis, administrada entre las veinticuatro y treinta y cuatro semanas de gestación.',
            },
            {
              t: 'Período de máxima eficacia protectora',
              d: 'El mayor beneficio pulmonar se obtiene si el parto ocurre entre 24 horas y siete días después de completado el esquema',
              say: 'El beneficio preventivo óptimo se alcanza cuando transcurren entre veinticuatro horas y siete días tras finalizar la segunda dosis intramuscular, reduciendo a más de la mitad la incidencia de membrana hialina y la necesidad de soporte ventilatorio mecánico invasivo.',
            },
          ],
        },
        {
          title: 'Impacto Global en la Sobrevida Neonatal',
          tag: 'Beneficios comprobados en múltiples órganos',
          kind: 'key',
          items: [
            {
              t: 'Reducción drástica de morbilidad neurológica e intestinal',
              d: 'Disminuye la incidencia de hemorragia intraventricular severa, enterocolitis necrotizante y mortalidad neonatal general',
              say: 'Además de acelerar la síntesis fosfolipídica pulmonar, los corticoides reducen de manera estadísticamente significativa la hemorragia de la matriz germinal, la enterocolitis necrotizante y la mortalidad neonatal global.',
            },
            {
              t: 'Aceleración de la síntesis de proteínas de surfactante',
              d: 'Induce la expresión de las apoproteínas SP-A, SP-B y SP-C en los neumocitos tipo II y madura los capilares alveolares',
              say: 'A nivel biológico celular estimulan la transcripción genética de las proteínas tensioactivas A, B y C en los neumocitos tipo dos, favoreciendo además la maduración de los capilares de la barrera alvéolo-capilar.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Entidad benigna por cesárea',
      title: 'Taquipnea Transitoria del Recién Nacido (TTNR): El Pulmón Húmedo',
      cards: [
        {
          title: 'Fisiopatología: Falla de Reabsorción de Líquido Alveolar',
          tag: 'Típica en recién nacidos de término o pretérmino tardío',
          kind: 'key',
          items: [
            {
              t: 'Ausencia de la compresión torácica del canal del parto',
              d: 'En la cesárea electiva no se exprime mecánicamente el líquido pulmonar fetal a través de las vías aéreas superiores',
              say: 'La taquipnea transitoria afecta característicamente a recién nacidos de término nacidos por cesárea programada sin trabajo de parto previo, los cuales no experimentan la compresión torácica mecánica del canal vaginal.',
            },
            {
              t: 'Ausencia del estímulo adrenérgico del trabajo de parto',
              d: 'La falta de catecolaminas impide que los canales epiteliales de sodio ENaC absorban activamente el líquido alveolar hacia los capilares',
              say: 'La ausencia de contracciones uterinas priva al feto de la descarga fisiológica de catecolaminas y corticoides necesaria para activar los canales de sodio que reabsorben el líquido pulmonar hacia el sistema linfático.',
            },
          ],
        },
        {
          title: 'Cuadro Clínico Benigno y Autolimitado',
          tag: 'Taquipnea desproporcionada con escaso compromiso general',
          kind: 'normal',
          items: [
            {
              t: 'Polipnea precoz con frecuencia mayor a sesenta respiraciones',
              d: 'Frecuencia respiratoria entre 80 y 120 por minuto en los primeros minutos de vida; niño rosado, vigoroso y sin gran quejido',
              say: 'Se manifiesta precozmente como una taquipnea superficial con frecuencias de ochenta a más de cien respiraciones por minuto, en un neonato activo, que llora con vigor y no presenta quejido importante.',
            },
            {
              t: 'Resolución espontánea completa en 24 a 72 horas',
              d: 'A medida que los linfáticos absorben el remanente líquido el cuadro remite espontáneamente sin dejar secuelas pulmonares',
              say: 'El curso es uniformemente favorable: a medida que los vasos linfáticos reabsorben el exceso de líquido intersticial, el cuadro clínico se resuelve de forma completamente espontánea en veinticuatro a setenta y dos horas.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Patrón radiológico característico',
      title: 'Radiografía de Tórax en TTNR: Congestión Perihiliar y Cisuritis',
      cards: [
        {
          title: 'Signos Radiológicos de Hipervolemia Pulmonar',
          tag: 'Hiperinsuflación y trama vascular reforzada',
          kind: 'criteria',
          items: [
            {
              t: 'Hiperinsuflación pulmonar con diafragmas aplanados',
              d: 'Campos pulmonares bien aireados o expandidos con visualización de más de ocho espacios intercostales posteriores',
              say: 'La radiografía de tórax revela campos pulmonares ampliamente expandidos con más de ocho a nueve espacios intercostales visibles y aplanamiento de las cúpulas diafragmáticas.',
            },
            {
              t: 'Refuerzo de la trama vascular perihiliar en sol radiante',
              d: 'Marcas vasculares broncovasculares prominentes que divergen desde los hilios hacia la periferia pulmonar',
              say: 'Se observa una notable prominencia de las marcas vasculares que se extienden simétricamente desde ambos hilios hacia la periferia en el clásico patrón radiológico de sol radiante.',
            },
          ],
        },
        {
          title: 'Signo Cardinal: Presencia de Líquido en Cisuras (Cisuritis)',
          tag: 'Línea radiopaca nítida en cisura interlobar horizontal',
          kind: 'alert',
          items: [
            {
              t: 'Líquido acumulado en la cisura menor derecha',
              d: 'Fina línea horizontal bien delimitada que traduce acumulación de líquido en la cisura interlobar derecha',
              say: 'El signo patognomónico indiscutible es la cisuritis, apreciándose una línea radiopaca líquida bien delimitada que discurre en sentido horizontal por la cisura menor del hemitórax derecho.',
            },
            {
              t: 'Cardiomegalia leve transitoria por sobrecarga venosa',
              d: 'Ligero aumento de la silueta cardíaca que desaparece a las 48 horas al completarse la diuresis fisiológica',
              say: 'Es común encontrar un discreto aumento de la silueta cardíaca por hipervolemia transitoria, la cual desaparece en dos días coincidiendo con la diuresis espontánea del recién nacido.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Patología de la asfixia perinatal',
      title: 'Síndrome de Aspiración Meconial (SAM): El Neonato Postérmino',
      cards: [
        {
          title: 'Fisiopatología: Asfixia Intrauterina e Hiperperistaltismo',
          tag: 'Predomina en recién nacidos de término y postérmino con sufrimiento fetal',
          kind: 'alert',
          items: [
            {
              t: 'Hipoxia intrauterina que gatilla expulsión de meconio y jadeo',
              d: 'El sufrimiento fetal agudo relaja el esfínter anal fetal y desata boqueos respiratorios que aspiran meconio a la vía aérea',
              say: 'La hipoxia perinatal desencadena una fuerte descarga vagal que incrementa el peristaltismo intestinal y relaja el esfínter anal, expulsando meconio que el feto aspira profundamente en sus jadeos asfícticos intrauterinos.',
            },
            {
              t: 'Mecanismo obstructivo en bola de válvula y neumonitis',
              d: 'El meconio espeso permite la entrada de aire pero bloquea la salida, atrapando aire y generando neumotórax frecuente',
              say: 'Las partículas meconiales impactadas en los bronquiolos actúan como válvulas unidireccionales que permiten entrar aire pero impiden su salida, generando hiperinsuflación segmentaria y neumotórax en hasta un veinte por ciento de los casos.',
            },
          ],
        },
        {
          title: 'Inactivación de Surfactante y Neumonitis Química',
          tag: 'Respuesta inflamatoria masiva inducida por ácidos biliares',
          kind: 'alert',
          items: [
            {
              t: 'Neumonitis química tóxica e inflamación celular',
              d: 'Las enzimas pancreáticas y sales biliares del meconio destruyen el epitelio respiratorio causando exudación fibrinosa',
              say: 'Los ácidos biliares y enzimas presentes en el meconio desencadenan una intensa neumonitis química que descama el epitelio respiratorio, inactiva los fosfolípidos tensioactivos y causa edema proteináceo.',
            },
            {
              t: 'Alto riesgo de Hipertensión Pulmonar Persistente (HPPN)',
              d: 'La hipoxemia y la acidosis severa provocan vasoconstricción pulmonar masiva con cortocircuito ductal de derecha a izquierda',
              say: 'La acidosis metabólica y la hipoxemia refractaria gatillan un remodelamiento y espasmo violento de las arteriolas pulmonares, complicándose de forma muy frecuente con hipertensión pulmonar persistente grave.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Complicación hemodinámica mayor',
      title: 'Hipertensión Pulmonar Persistente Neonatal (HPPN)',
      cards: [
        {
          title: 'Falla en la Caída de la Resistencia Vascular Pulmonar',
          tag: 'Mantenimiento del patrón circulatorio de tipo fetal',
          kind: 'alert',
          items: [
            {
              t: 'Cortocircuito de derecha a izquierda en foramen y ductus',
              d: 'Las presiones en arteria pulmonar superan a las sistémicas; la sangre desaturada viaja a la aorta generando hipoxemia refractaria',
              say: 'En la hipertensión pulmonar persistente la resistencia vascular pulmonar permanece patológicamente alta, superando la presión sistémica y forzando a la sangre desoxigenada a derivarse de derecha a izquierda por el conducto arterioso.',
            },
            {
              t: 'Gradiente de saturación pre y postductal mayor al diez por ciento',
              d: 'Diferencia significativa entre la muñeca derecha (preductal) y miembros inferiores (postductal) confirma el shunt ductal',
              say: 'El diagnóstico clínico se confirma al constatar una diferencia de saturación mayor al diez por ciento entre la mano derecha preductal y las extremidades inferiores postductales.',
            },
          ],
        },
        {
          title: 'Tratamiento Específico con Vasodilatadores Pulmonares',
          tag: 'Manejo en unidad de cuidados intensivos neonatales',
          kind: 'pharma',
          items: [
            {
              t: 'Óxido Nítrico Inhalado (iNO): Terapia de primera línea',
              d: 'Gas vasodilatador pulmonar selectivo que no produce hipotensión sistémica; relaja el músculo liso arteriolar alveolar',
              say: 'El óxido nítrico inhalado es el vasodilatador de primera línea por su selectividad para relajar la microvasculatura alveolar ventilada sin generar hipotensión arterial sistémica, mejorando de inmediato la oxigenación del neonato.',
            },
            {
              t: 'Soporte inotrópico y ventilación de alta frecuencia',
              d: 'Mantener presiones arteriales sistémicas elevadas para contrarrestar el shunt; uso de Milrinona y ECMO neonatal en refractariedad',
              say: 'Se asocia soporte inotrópico para sostener la presión sistémica y ventilación de alta frecuencia oscilatoria, recurriendo a membrana de oxigenación extracorpórea en casos refractarios.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Radiología comparativa fundamental',
      title: 'Hallazgos Radiológicos Cardinales en el Distrés Respiratorio Neonatal',
      head: ['Patología', 'Volumen Pulmonar', 'Patrón Radiológico Típico', 'Complicación Radiológica Típica'],
      rows: [
        {
          cells: ['Membrana hialina (EMH)', 'Hipoinsuflado (< 7 espacios)', 'Vidrio esmerilado y broncograma', 'Microatelectasias y colapso total'],
          say: 'La membrana hialina del prematuro muestra pulmones pequeños marcadamente hipoinsuflados con vidrio esmerilado difuso bilateral y broncograma aéreo prominente.',
        },
        {
          cells: ['Taquipnea transitoria (TTNR)', 'Hiperinsuflado (> 8 espacios)', 'Congestión perihiliar y cisuritis', 'Líquido en cisuras y cardiomegalia'],
          say: 'El pulmón húmedo presenta campos hiperinsuflados, diafragmas planos, congestión perihiliar en sol y línea de cisuritis derecha.',
        },
        {
          cells: ['Aspiración meconial (SAM)', 'Hiperinsuflado irregular', 'Infiltrados algodonosos en parches', 'Neumotórax y neumomediastino'],
          say: 'El síndrome de aspiración meconial cursa con infiltrados en parches algodonosos alternados con áreas hiperclaras y riesgo de neumotórax.',
        },
        {
          cells: ['Neumonía neonatal', 'Volumen normal o variable', 'Consolidación lobar o difusa', 'Derrame pleural o condensación'],
          say: 'La neumonía bacteriana puede mostrar condensaciones alveolares asimétricas acompañadas en ocasiones de derrame pleural exudativo.',
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Cuadro comparativo maestro',
      title: 'Diagnóstico Diferencial Clínico de las Tres Principales Causas de Distrés',
      head: ['Parámetro', 'Membrana Hialina (EMH)', 'Taquipnea Transitoria (TTNR)', 'Aspiración Meconial (SAM)'],
      rows: [
        {
          cells: ['Población diana', 'Prematuro (< 34 semanas)', 'Término por cesárea electiva', 'Término o postérmino asfíctico'],
          say: 'La membrana hialina afecta al prematuro inmaduro, el pulmón húmedo al nacido por cesárea electiva y el meconio al postérmino asfíctico.',
        },
        {
          cells: ['Severidad clínica', 'Severa con quejido continuo', 'Leve a moderada sin gran quejido', 'Grave con cianosis profunda'],
          say: 'La clínica es grave en membrana hialina y aspiración meconial, mientras que en taquipnea transitoria cursa con buen estado general.',
        },
        {
          cells: ['Tratamiento pilar', 'CPAP y surfactante exógeno', 'Soporte de oxígeno mínimo transitorio', 'Ventilación mecánica e inótropos'],
          say: 'El pilar en membrana hialina es surfactante y CPAP precoz, en taquipnea es oxígeno transitorio y en meconio es soporte invasivo en UCI.',
        },
        {
          cells: ['Evolución típica', 'Empeora en 48h, mejora al día 4', 'Resolución en 24 a 72 horas', 'Prolongada con hipertensión pulmonar'],
          say: 'La taquipnea transitoria remite en setenta y dos horas, mientras que la aspiración meconial puede requerir semanas de ventilación mecánica.',
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de actuación clínica',
      title: 'Algoritmo de Enfrentamiento y Manejo del Distrés Respiratorio Neonatal',
      say: 'Examinemos el algoritmo paso a paso para estratificar la dificultad respiratoria al nacer, orientar la etiología según los antecedentes y aplicar el soporte ventilatorio adecuado.',
    },

    {
      type: 'quiz',
      kicker: 'Banco Oficial AEE · Perfil V3 2.01.1.126',
      title: 'Diagnóstico y Manejo en Prematuro con Vidrio Esmerilado',
      stem: 'Un recién nacido de 30 semanas de gestación presenta dificultad respiratoria grave desde el nacimiento, caracterizada por quejido audible sin fonendoscopio, aleteo nasal y retracción subcostal acentuada. La radiografía de tórax revela hipoinsuflación marcada, patrón reticulonodular difuso bilateral en vidrio esmerilado y presencia de broncograma aéreo.',
      question: '¿Cuál es la causa fisiopatológica subyacente y el tratamiento de elección?',
      options: [
        { letter: 'A', text: 'Retardo en la reabsorción de líquido alveolar; oxígeno en cánula nasal de bajo flujo' },
        { letter: 'B', text: 'Déficit de surfactante pulmonar; CPAP nasal e instilación endotraqueal de surfactante exógeno' },
        { letter: 'C', text: 'Aspiración masiva de meconio; lavado traqueal con solución fisiológica abundante' },
        { letter: 'D', text: 'Neumotórax a tensión bilateral; toracocentesis inmediata con aguja' },
        { letter: 'E', text: 'Atresia esofágica congénita; instalación de sonda Foley con tracción' },
      ],
      correct: 'B',
      explanation: 'La combinación de prematurez moderada a severa (30 semanas), distrés respiratorio de inicio inmediato con quejido audible y la clásica radiografía de hipoinsuflación con infiltrado reticulonodular difuso en vidrio esmerilado y broncograma aéreo configura el cuadro diagnóstico indiscutible de Enfermedad de Membrana Hialina (EMH) por déficit cuantitativo de surfactante pulmonar. El tratamiento protocolizado consiste en soporte con presión positiva continua en vía aérea (CPAP nasal) para estabilizar alvéolos e instilación precoz de surfactante exógeno por vía endotraqueal.',
      say: {
        stem: 'Recién nacido de treinta semanas con dificultad respiratoria grave quejido audible y radiografía con hipoinsuflación y vidrio esmerilado con broncograma aéreo.',
        question: '¿Cuál es la causa fisiopatológica y el tratamiento de elección?',
        options: 'La opción A retardo en la reabsorción de líquido alveolar. La B déficit de surfactante pulmonar con indicación de CPAP nasal y surfactante exógeno endotraqueal. La C aspiración de meconio. La D neumotórax a tensión. La E atresia esofágica. Correlaciona la edad gestacional con la radiografía. Piénsalo.',
        answer: 'La respuesta correcta es la B. Corresponde a membrana hialina por déficit de surfactante en un prematuro, requiriendo CPAP y surfactante exógeno.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco Oficial AEE · Perfil V3 2.01.1.126',
      title: 'Diagnóstico y Curso en Neonato por Cesárea con Cisuritis',
      stem: 'Un recién nacido de 39 semanas nace por cesárea electiva sin trabajo de parto previo. A los 30 minutos de vida inicia taquipnea con frecuencia respiratoria de 84 respiraciones por minuto, con llanto vigoroso y quejido espiratorio ausente. La radiografía de tórax muestra hiperinsuflación pulmonar con diafragmas aplanados, refuerzo de la trama vascular perihiliar en sol radiante y presencia de una línea líquida nítida en la cisura horizontal derecha (cisuritis).',
      question: '¿Cuál es el diagnóstico más probable y el curso esperado?',
      options: [
        { letter: 'A', text: 'Enfermedad de membrana hialina; requerirá ventilación mecánica prolongada' },
        { letter: 'B', text: 'Taquipnea transitoria del recién nacido; resolución clínica espontánea en 24 a 72 horas' },
        { letter: 'C', text: 'Síndrome de aspiración meconial; alto riesgo de hipertensión pulmonar persistente' },
        { letter: 'D', text: 'Neumonía congénita por Streptococcus agalactiae; requiere tratamiento antibiótico por 14 días' },
        { letter: 'E', text: 'Hernia diafragmática congénita; requiere laparotomía de urgencia' },
      ],
      correct: 'B',
      explanation: 'El paciente es un recién nacido de término nacido por cesárea electiva sin trabajo de parto (sin compresión torácica ni oleada de catecolaminas para activar los canales ENaC) que presenta polipnea rápida en las primeras horas sin mayor compromiso general, cuya radiografía muestra hiperinsuflación, congestión perihiliar en sol radiante y cisuritis interlobar derecha. Este cuadro es patognomónico de Taquipnea Transitoria del Recién Nacido (TTNR o Pulmón Húmedo), una patología benigna y autolimitada que se resuelve espontáneamente en 24 a 72 horas con mínima asistencia.',
      say: {
        stem: 'Recién nacido de término por cesárea electiva con taquipnea de ochenta y cuatro por minuto sin quejido y radiografía con hiperinsuflación y cisuritis líquida.',
        question: '¿Cuál es el diagnóstico más probable y el curso esperado?',
        options: 'La opción A enfermedad de membrana hialina. La B taquipnea transitoria del recién nacido con resolución clínica espontánea en veinticuatro a setenta y dos horas. La C síndrome de aspiración meconial. La D neumonía congénita. La E hernia diafragmática. Observa la cesárea y la cisuritis. Piénsalo.',
        answer: 'La respuesta correcta es la B. Es una taquipnea transitoria del recién nacido o pulmón húmedo, entidad benigna que se resuelve espontáneamente en dos a tres días.',
      },
    },

    {
      type: 'points',
      kicker: 'Reglas de oro EUNACOM',
      title: 'Puntos Clave y Perlas Indispensables en Distrés Neonatal',
      cards: [
        {
          title: 'Asociaciones Clínicas Indivisibles',
          tag: 'Edad gestacional y mecanismo que definen el diagnóstico',
          kind: 'key',
          items: [
            {
              t: 'Prematuro más vidrio esmerilado: Membrana Hialina',
              d: 'Déficit de surfactante; manejo inmediato con CPAP nasal y surfactante exógeno precoz endotraqueal',
              say: 'Asocien siempre al prematuro con vidrio esmerilado y broncograma aéreo con membrana hialina tratada con CPAP y surfactante exógeno.',
            },
            {
              t: 'Cesárea de término más cisuritis: Taquipnea Transitoria',
              d: 'Retención de líquido pulmonar por falta de compresión y catecolaminas; resolución espontánea en 48 horas',
              say: 'Vinculen al nacido por cesárea electiva con hiperinsuflación y cisuritis con taquipnea transitoria que remite espontáneamente en dos a tres días.',
            },
          ],
        },
        {
          title: 'Signos de Alarma y Prevención Obstétrica',
          tag: 'Quejido y maduración pulmonar prenatal',
          kind: 'alert',
          items: [
            {
              t: 'Postérmino asfíctico más meconio: Riesgo de hipertensión',
              d: 'Infiltrados algodonosos en parches con atelectasias y neumotórax; vigilar hipertensión pulmonar persistente',
              say: 'Recuerden que el postérmino con meconio presenta neumonitis química con riesgo crítico de rotura alveolar e hipertensión pulmonar persistente.',
            },
            {
              t: 'Betametasona prenatal entre 24 y 34 semanas',
              d: 'Dos dosis de doce miligramos intramuscular cada 24 horas; la intervención obstétrica que salva más vidas',
              say: 'La betametasona antenatal estimula la síntesis de fosfolípidos. Si te llevas una sola idea de hoy: la enfermedad de membrana hialina se previene con corticoides antenatales y se trata precozmente con ventilación no invasiva y surfactante endotraqueal. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Enfrentamiento y Manejo del Distrés Respiratorio Neonatal',
    root: N(
      'start',
      'Recién Nacido con Dificultad Respiratoria: Evaluación del Score de Silverman-Andersen',
      'Inspección de aleteo nasal, quejido espiratorio, tiraje intercostal, retracción xifoidea y sincronía toraco-abdominal',
      'Iniciamos el abordaje evaluando la gravedad del distrés con el score de Silverman y correlacionando con la edad gestacional.',
      [
        'Recién nacido pretérmino (< 34 semanas): Distrés inmediato con quejido',
        N(
          'alert',
          'Sospecha de Enfermedad de Membrana Hialina (Déficit de Surfactante)',
          'Radiografía de tórax urgente: buscar hipoinsuflación, vidrio esmerilado y broncograma · Iniciar CPAP nasal con PEEP de 5 a 6 cm H2O · Instilación de surfactante exógeno precoz',
          'En el prematuro con distrés inmediato e hipoinsuflación iniciamos CPAP nasal e indicamos surfactante exógeno precoz.',
        ),
      ],
      [
        'Recién nacido de término o pretérmino tardío nacido por cesárea electiva',
        N(
          'q',
          '¿Presenta taquipnea marcada con radiografía con cisuritis e hiperinsuflación?',
          'Descarte de retardo en reabsorción de líquido alveolar versus neumonía',
          'En el nacido por cesárea evaluamos la presencia de hiperinsuflación y cisuritis interlobar.',
          [
            'Sí: Taquipnea sin gran quejido, cisuritis y refuerzo perihiliar',
            N(
              'ok',
              'Taquipnea Transitoria del Recién Nacido (Pulmón Húmedo)',
              'Oxigenoterapia mínima en cánula o halo SOS para saturar 90-95% · Régimen cero si FR > 80 rpm · Resolución espontánea completa en 24 a 72 horas sin antibióticos',
              'Confirmada la taquipnea transitoria mantenemos soporte mínimo y suspensión de alimentación oral si la frecuencia es muy alta.',
            ),
          ],
          [
            'No: Antecedente de rotura prematura de membranas o fiebre materna',
            N(
              'refer',
              'Sospecha de Neumonía Congénita / Sepsis Neonatal',
              'Hemocultivos · Radiografía con condensación · Iniciar Ampicilina más Cefotaxima o Gentamicina EV · Traslado a unidad neonatal',
              'Si existen factores infecciosos maternos o mala evolución iniciamos antibióticos parenterales por sospecha de neumonía.',
            ),
          ],
        ),
      ],
      [
        'Recién nacido de término o postérmino con líquido amniótico con meconio',
        N(
          'alert',
          'Síndrome de Aspiración Meconial (SAM): Riesgo Crítico de Hipertensión Pulmonar',
          'Radiografía: infiltrados algodonosos en parches e hiperinsuflación irregular · Soporte ventilatorio avanzado · Vigilar neumotórax y tratar HPPN con óxido nítrico si hay hipoxemia refractaria',
          'En el neonato con meconio e infiltrados en parches vigilamos la aparición de neumotórax e hipertensión pulmonar persistente.',
        ),
      ],
    ),
  },
};
