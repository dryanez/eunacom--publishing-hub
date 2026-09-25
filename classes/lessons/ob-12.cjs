// Clase 3.12 — guion docente escrito a mano (estándar Módulo 3 · Obstetricia).
// Fuente clínica: books/scripts/dataset_obstetricia.cjs (ob-12).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ob-12',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Mola completa vs parcial, imagen en tormenta de nieve, aspiración al vacío, seguimiento con beta hCG y criterios FIGO de NTG',
      say: 'Bienvenidos a la clase sobre enfermedad trofoblástica gestacional, un grupo heterogéneo de proliferaciones del trofoblasto que abarca desde la mola hidatiforme hasta la neoplasia maligna. En esta sesión aprenderemos a contrastar las bases genéticas y ecográficas de la mola completa y parcial, a reconocer signos clínicos patognomónicos como la preeclampsia precoz y los quistes tecaluteínicos, a ejecutar la evacuación por aspiración, el seguimiento hormonal estricto y el diagnóstico precoz de neoplasia trofoblástica gestacional. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Citogenética y origen biológico',
      title: 'Origen genético: Mola Completa versus Mola Parcial',
      nodes: [
        { id: 'gen', col: 0, row: 1, k: 'start', t: 'Fecundación anómala', s: 'Alteración en el número y dotación cromosómica parental' },
        { id: 'com', col: 2, row: 0, k: 'alert', t: 'Mola completa (diploide)', s: '46XX 100% paterno androgenético; óvulo anucleado fecundado por espermio duplicado' },
        { id: 'par', col: 2, row: 2, k: 'risk', t: 'Mola parcial (triploide)', s: '69XXY triploide por dispermia; óvulo normal fecundado por dos espermatozoides' },
        { id: 'ntg', col: 4, row: 0, k: 'trap', t: 'Riesgo de NTG: 15 a 20%', s: 'Hiperplasia trofoblástica difusa con alto potencial de invasión maligna' },
        { id: 'baj', col: 4, row: 2, k: 'good', t: 'Riesgo de NTG: 3 a 5%', s: 'Hiperplasia focal con presencia de tejido embrionario; bajo riesgo de persistencia' },
      ],
      edges: [
        { from: 'gen', to: 'com', label: 'óvulo vacío' },
        { from: 'gen', to: 'par', label: 'dispermia' },
        { from: 'com', to: 'ntg', label: 'potencial maligno' },
        { from: 'par', to: 'baj', label: 'bajo potencial' },
      ],
      steps: [
        {
          show: ['gen', 'com'],
          note: 'Origen paterno de la mola completa',
          say: 'La mola hidatiforme completa tiene una dotación diploide cuarenta y seis XX de origen cien por ciento paterno androgenético, originada por la fecundación de un ovocito sin material genético propio por un espermatozoide haploide que duplica su genoma o por dos espermatozoides.',
        },
        {
          show: ['par'],
          note: 'Dispermia y triploidía en la mola parcial',
          say: 'En cambio, la mola parcial es triploide, habitualmente sesenta y nueve XXY, originada por la dispermia o fecundación simultánea de un óvulo haploide normal con material materno intacto por dos espermatozoides.',
        },
        {
          show: ['ntg', 'baj'],
          note: 'Diferencia en el riesgo de neoplasia trofoblástica',
          say: 'Esta disparidad genética determina su comportamiento clínico: la mola completa no posee tejido embrionario y exhibe hiperplasia trofoblástica masiva con un quince a veinte por ciento de progresión a neoplasia, mientras que la parcial contiene feto malformado y solo progresa en un tres a cinco por ciento.',
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Comparación anatomoclínica',
      title: 'Contraste riguroso: Mola Completa versus Mola Parcial',
      head: ['Parámetro de comparación', 'Mola Completa (diploide)', 'Mola Parcial (triploide)'],
      rows: [
        {
          cells: ['Cariotipo habitual', '46XX (100% de origen paterno)', '69XXY (diandría triploide materna y paterna)'],
          say: 'La mola completa es diploide puramente paterna, mientras que la parcial es triploide conteniendo cromosomas maternos.',
        },
        {
          cells: ['Presencia de embrión o feto', 'Completamente ausente; sin saco amniótico', 'Presente; feto malformado no viable con oligohidramnios'],
          say: 'La completa carece de embrión; la parcial se acompaña de restos fetales con malformaciones severas que habitualmente fallecen.',
        },
        {
          cells: ['Nivel sérico de beta hCG', 'Masivamente elevado (mayor a 100.000 UI/L)', 'Normal o discretamente elevado'],
          say: 'La mola completa produce cifras astronómicas de gonadotropina superando cien mil unidades; la parcial presenta valores moderados.',
        },
        {
          cells: ['Imagen ecográfica típica', 'Tormenta de nieve o panal de abejas difuso', 'Placenta engrosada con vesículas focales y feto'],
          say: 'La imagen en tormenta de nieve con cavidad uterina llena de vesículas sin embrión es la estampa clásica de la mola completa.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Semiología de alta sospecha',
      title: 'Manifestaciones clínicas y complicaciones de la mola hidatiforme',
      cards: [
        {
          title: 'Signos cardinales de alarma',
          tag: 'Sospecha clínica inmediata',
          kind: 'alert',
          items: [
            {
              t: 'Metrorragia y expulsión de vesículas',
              d: 'Sangrado en posos de café con vesículas hidrópicas en racimo de uvas',
              say: 'La metrorragia indolora es el síntoma inicial más común. La expulsión de vesículas translúcidas similares a granos de uva es el único signo patognomónico visible al examen físico.',
            },
            {
              t: 'Útero mayor que la edad gestacional',
              d: 'Discordancia marcada de altura uterina con consistencia blanda pastosa',
              say: 'El útero se encuentra desproporcionadamente aumentado de tamaño respecto a las semanas de amenorrea en más del cincuenta por ciento de los casos, con consistencia blanda.',
            },
            {
              t: 'Preeclampsia antes de la semana 20',
              d: 'Aparición de hipertensión y proteinuria en primer o segundo trimestre temprano',
              say: 'En el EUNACOM, toda preeclampsia diagnosticada antes de las veinte semanas de gestación es casi sinónimo de mola hidatiforme por sobrecarga de volumen trofoblástico.',
            },
          ],
        },
        {
          title: 'Efectos hormonales masivos',
          tag: 'Hiperestímulo por beta hCG',
          kind: 'pharma',
          items: [
            {
              t: 'Quistes tecaluteínicos ováricos bilaterales',
              d: 'Grandes quistes multiloculares por hiperestimulación ovárica de receptores LH',
              say: 'La extrema concentración de gonadotropina coriónica estimula los receptores de hormona luteinizante ováricos, induciendo quistes tecaluteínicos bilaterales que regresan solos tras la evacuación.',
            },
            {
              t: 'Hiperémesis gravídica e hipertiroidismo',
              d: 'Náuseas incoercibles y tirotoxicosis clínica por homología con TSH',
              say: 'La subunidad beta de la gonadotropina comparte homología estructural con la hormona estimulante del tiroides, provocando tirotoxicosis gestacional y vómitos incoercibles.',
            },
          ],
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tratamiento primario',
      title: 'Evacuación uterina de elección: Aspiración Manual Endouterina',
      nodes: [
        { id: 'dia', col: 0, row: 1, k: 'start', t: 'Diagnóstico ecográfico', s: 'Imagen en tormenta de nieve con beta hCG mayor a cien mil UI/L' },
        { id: 'est', col: 1, row: 1, k: 'mech', t: 'Estabilización previa', s: 'Descartar anemia, tirotoxicosis, preeclampsia y clasificar grupo Rh' },
        { id: 'ame', col: 2, row: 1, k: 'good', t: 'Aspiración al vacío (AMEU)', s: 'Evacuación mediante cánula de aspiración eléctrica o manual con oxitocina continua' },
        { id: 'bio', col: 3, row: 0, k: 'alert', t: 'Biopsia histopatológica', s: 'Estudio histológico obligatorio de las vesículas y trofoblasto' },
        { id: 'seg', col: 4, row: 1, k: 'good', t: 'Seguimiento serológico', s: 'Curva de beta hCG semanal hasta la remisión completa' },
      ],
      edges: [
        { from: 'dia', to: 'est', label: 'evaluación inicial' },
        { from: 'est', to: 'ame', label: 'técnica de elección' },
        { from: 'ame', to: 'bio', label: 'confirmación diferida' },
        { from: 'ame', to: 'seg', label: 'iniciar protocolo' },
      ],
      steps: [
        {
          show: ['dia', 'est'],
          note: 'Estabilización y preparación quirúrgica',
          say: 'Antes de cualquier maniobra quirúrgica se debe estabilizar a la paciente, descartar anemia severa, compensar la tirotoxicosis y confirmar el factor Rh para administrar inmunoglobulina anti-D si es negativa.',
        },
        {
          show: ['ame'],
          note: 'Aspiración manual endouterina o al vacío',
          say: 'El método terapéutico de elección indiscutido es la aspiración al vacío o aspiración manual endouterina con cánulas de grueso calibre bajo goteo simultáneo de oxitocina para favorecer la contractilidad miometrial y reducir la hemorragia.',
        },
        {
          show: ['bio', 'seg'],
          note: 'Biopsia histológica y seguimiento posterior',
          say: 'El legrado cortante enérgico a ciegas está formalmente contraindicado por el riesgo de perforación y diseminación embólica. Todo el tejido aspirado se envía a biopsia y se inicia el protocolo de seguimiento hormonal seriado.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Protocolo de vigilancia postmolar',
      title: 'Seguimiento serológico estricto con gonadotropina coriónica',
      cards: [
        {
          title: 'Calendario de determinaciones hormonales',
          tag: 'Monitoreo ambulatorio',
          kind: 'criteria',
          items: [
            {
              t: 'Determinación semanal de beta hCG',
              d: 'Control cada 7 días hasta obtener tres valores consecutivos indetectables',
              say: 'La gonadotropina coriónica cuantitativa se controla semanalmente desde la evacuación hasta alcanzar tres semanas consecutivas con niveles normales indetectables menores a cinco unidades por litro.',
            },
            {
              t: 'Determinación mensual por seis meses',
              d: 'Control mensual tras la negativización durante un semestre completo',
              say: 'Una vez negativizada la hormona, se mantiene un control mensual riguroso durante seis meses completos para confirmar la remisión biológica definitiva de la enfermedad.',
            },
          ],
        },
        {
          title: 'Anticoncepción obligatoria',
          tag: 'Seguridad diagnóstica',
          kind: 'alert',
          items: [
            {
              t: 'Anticonceptivos orales continuos por 6 meses',
              d: 'Evitar un nuevo embarazo que confunda la curva de beta hCG',
              say: 'La paciente debe utilizar anticoncepción hormonal oral segura durante todo el período de seguimiento. Un nuevo embarazo elevaría la hormona y crearía el dilema de una gestación normal versus recurrencia tumoral.',
            },
            {
              t: 'Prohibición de dispositivo intrauterino',
              d: 'Evitar DIU por riesgo de perforación e infección en útero subinvolucionado',
              say: 'El dispositivo intrauterino está contraindicado hasta completar la vigilancia serológica por el riesgo de sangrado confuso, perforación y sinequias.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Criterios FIGO de malignización',
      title: 'Diagnóstico de Neoplasia Trofoblástica Gestacional (NTG)',
      head: ['Criterio diagnóstico FIGO', 'Parámetro de laboratorio o histológico', 'Significado clínico', 'Conducta médica'],
      rows: [
        {
          cells: ['Meseta hormonal en 3 semanas', 'Cuatro determinaciones en días 1, 7, 14 y 21 con variación menor al 10%', 'Enfermedad trofoblástica activa persistente', 'Estudio de etapificación e inicio de quimioterapia'],
          say: 'Si la gonadotropina coriónica se estanca en meseta durante tres semanas consecutivas, se diagnostica formalmente neoplasia trofoblástica gestacional.',
        },
        {
          cells: ['Ascenso hormonal en 2 semanas', 'Tres determinaciones en días 1, 7 y 14 con aumento mayor o igual al 10%', 'Proliferación tumoral trofoblástica acelerada', 'Inicio urgente de quimioterapia sistémica'],
          say: 'Un aumento sostenido de la hormona en dos semanas consecutivas sella la progresión tumoral y exige tratamiento quimioterápico inmediato.',
        },
        {
          cells: ['Persistencia hormonal a los 6 meses', 'Niveles detectables persistentes tras medio año de la evacuación', 'Falla de eliminación inmunológica', 'Clasificación pronóstica de riesgo FIGO'],
          say: 'Si tras seis meses de seguimiento la gonadotropina continúa detectable en sangre, se diagnostica neoplasia trofoblástica gestacional.',
        },
        {
          cells: ['Biopsia de Coriocarcinoma', 'Diagnóstico histopatológico de coriocarcinoma invasor', 'Cáncer trofoblástico altamente maligno', 'Quimioterapia según score pronóstico'],
          say: 'La identificación histológica de coriocarcinoma es un criterio maligno indiscutido que impone quimioterapia inmediata sin esperar curvas.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Terapéutica oncológica',
      title: 'Tratamiento de la Neoplasia Trofoblástica Gestacional',
      cards: [
        {
          title: 'NTG de bajo riesgo (Score FIGO menor o igual a 6)',
          tag: 'Curación del 100 por ciento',
          kind: 'pharma',
          items: [
            {
              t: 'Monoquimioterapia con Metotrexato',
              d: 'Esquema de Metotrexato intramuscular con rescate de ácido folínico',
              say: 'El ochenta por ciento de las neoplasias trofoblásticas son de bajo riesgo. Responden de forma extraordinaria a la monoquimioterapia con metotrexato, alcanzando una tasa de curación cercana al cien por ciento con preservación completa de la fertilidad.',
            },
            {
              t: 'Monitoreo de remisión completa',
              d: 'Consolidación con dos a tres ciclos adicionales tras negativizar beta hCG',
              say: 'Una vez alcanzada la negativización de la gonadotropina coriónica, se administran dos ciclos adicionales de consolidación para erradicar cualquier clon celular microscópico residual.',
            },
          ],
        },
        {
          title: 'NTG de alto riesgo (Score FIGO mayor o igual a 7)',
          tag: 'Poliquimioterapia intensiva',
          kind: 'alert',
          items: [
            {
              t: 'Esquema poliquimioterápico EMA-CO',
              d: 'Etopósido, Metotrexato, Actinomicina D, Ciclofosfamida y Vincristina',
              say: 'En pacientes con metástasis cerebrales o hepáticas, o puntuación de alto riesgo, se indica poliquimioterapia intensiva con el esquema EMA-CO, logrando curación en más del ochenta y cinco al noventa por ciento de los casos.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de decisión clínica',
      title: 'Algoritmo de Diagnóstico, Evacuación y Seguimiento de la Enfermedad Trofoblástica',
      say: 'Revisemos el algoritmo estructurado para el abordaje de la mola hidatiforme y los criterios de derivación a quimioterapia.',
    },

    {
      type: 'table',
      kicker: 'Trampas frecuentes EUNACOM',
      title: 'Distracciones y errores comunes en preguntas de enfermedad trofoblástica',
      head: ['Situación presentada en la pregunta', 'Error habitual del postulante', 'Conducta médica correcta'],
      rows: [
        {
          cells: ['Preeclampsia severa con PA 165/110 en gestante de 14 semanas', 'Diagnosticar preeclampsia sobreagregada o hipertensión crónica', 'Sospechar mola hidatiforme completa y solicitar ecografía y beta hCG'],
          say: 'La preeclampsia antes de la semana veinte es la presentación más engañosa del EUNACOM. Siempre debe hacer sospechar mola completa por sobrecarga trofoblástica.',
        },
        {
          cells: ['Quistes tecaluteínicos gigantes bilaterales de 8 cm en mola', 'Indicar ooforectomía bilateral urgente o punción aspiración', 'Conducta expectante; regresan espontáneamente tras evacuar la mola'],
          say: 'Los quistes tecaluteínicos son funcionales por exceso de beta hCG. No se operan porque involucionan solos al descender los niveles hormonales.',
        },
        {
          cells: ['Evacuación de mola hidatiforme completa en pabellón', 'Realizar legrado cortante enérgico con cureta cortante metálica', 'Realizar aspiración al vacío o AMEU bajo infusión continua de oxitocina'],
          say: 'El legrado cortante enérgico perfora fácilmente el útero blando molar. La técnica correcta es la aspiración al vacío con cánulas gruesas.',
        },
        {
          cells: ['Paciente post evacuación de mola que consulta para colocar DIU', 'Colocar DIU de cobre o levonorgestrel al mes post evacuación', 'Contraindicar DIU e indicar anticonceptivos orales por seis meses'],
          say: 'El DIU está contraindicado durante el seguimiento serológico postmolar. El método obligado son los anticonceptivos orales para asegurar un control hormonal estricto.',
        },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso de razonamiento clínico',
      title: 'Diagnóstico clínico de mola hidatiforme completa',
      stem: 'Una mujer de 22 años, primigesta cursando un embarazo de 15 semanas por amenorrea, consulta por metrorragia indolora de dos semanas de evolución y náuseas intensas incoercibles. Al examen físico destaca presión arterial de 150/95 mmHg, proteinuria cualitativa en orina positiva y altura uterina de 21 centímetros con útero blando. No se auscultan latidos cardiofetales con Doppler ultrasónico. La ecografía transvaginal muestra cavidad uterina ocupada por una masa ecogénica heterogénea multiquística con patrón en tormenta de nieve, sin saco gestacional ni embrión, visualizándose ambos ovarios aumentados de tamaño a expensas de múltiples formaciones quísticas multiloculares.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Embarazo gemelar con síndrome de transfusión feto-fetal' },
        { letter: 'B', text: 'Mola hidatiforme completa' },
        { letter: 'C', text: 'Mola hidatiforme parcial con feto viable' },
        { letter: 'D', text: 'Coriocarcinoma metastásico primario' },
        { letter: 'E', text: 'Aborto incompleto con restos infectados' },
      ],
      correct: 'B',
      explanation: 'El caso reúne todos los elementos patognomónicos de la Mola Hidatiforme Completa: metrorragia en el primer o segundo trimestre temprano, altura uterina desproporcionadamente mayor a la edad gestacional, preeclampsia precoz (antes de la semana 20), quistes tecaluteínicos ováricos bilaterales por exceso masivo de beta-hCG y la imagen ecográfica clásica en tormenta de nieve sin embrión.',
      say: {
        stem: 'Una primigesta de quince semanas presenta metrorragia indolora, náuseas incoercibles, presión arterial elevada, útero de veintiún centímetros y ecografía con patrón en tormenta de nieve y quistes ováricos bilaterales.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'La opción A propone embarazo gemelar. La B mola hidatiforme completa. La C mola parcial con feto. La D coriocarcinoma. La E aborto incompleto infectado. Piénsalo.',
        answer: 'La respuesta correcta es la B. La constelación de útero grande, preeclampsia antes de las veinte semanas, quistes ováricos bilaterales y ecografía en tormenta de nieve define una mola hidatiforme completa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Caso de razonamiento clínico',
      title: 'Seguimiento serológico y pesquisa de Neoplasia Trofoblástica Gestacional',
      stem: 'Una paciente de 26 años fue sometida a evacuación uterina mediante aspiración manual endouterina por una mola hidatiforme completa hace 5 semanas. El informe histopatológico confirmó mola completa. En su protocolo de seguimiento serológico ambulatorio, los niveles de beta-hCG cuantitativa han sido: semana 1: 8.500 UI/L, semana 2: 3.200 UI/L, semana 3: 1.100 UI/L, semana 4: 1.150 UI/L y semana 5: 1.200 UI/L. La paciente se encuentra asintomática y utiliza anticonceptivos orales combinados en forma estricta.',
      question: '¿Cuál es la conducta médica indicada en este momento?',
      options: [
        { letter: 'A', text: 'Mantener la conducta expectante y solicitar una nueva beta-hCG en 4 semanas' },
        { letter: 'B', text: 'Repetir un nuevo legrado uterino instrumental para vaciar la cavidad' },
        { letter: 'C', text: 'Diagnosticar Neoplasia Trofoblástica Gestacional por meseta hormonal e iniciar estudio de etapificación para quimioterapia' },
        { letter: 'D', text: 'Suspender los anticonceptivos orales por sospecha de interacción farmacológica' },
        { letter: 'E', text: 'Indicar histerectomía abdominal total con salpingo-ooforectomía bilateral' },
      ],
      correct: 'C',
      explanation: 'La paciente presenta una meseta/ascenso persistente de sus niveles séricos de beta-hCG en las semanas 3, 4 y 5 (1.100, 1.150 y 1.200 UI/L), cumpliendo el criterio formal de la FIGO para el diagnóstico de Neoplasia Trofoblástica Gestacional (NTG) (meseta en al menos 3 semanas consecutivas o aumento en 2 semanas). Al descartarse un nuevo embarazo por el uso estricto de anticonceptivos, la conducta obligatoria es etapificar con imágenes (tórax, abdomen y pelvis) e iniciar quimioterapia (habitualmente Metotrexato en bajo riesgo). Repetir el legrado no cura la NTG y eleva el riesgo de perforación uterina.',
      say: {
        stem: 'Una paciente evacuada de mola completa hace cinco semanas presenta niveles hormonales de mil cien, mil ciento cincuenta y mil doscientas unidades en las últimas tres semanas usando anticonceptivos orales.',
        question: '¿Cuál es la conducta médica indicada en este momento?',
        options: 'La opción A propone esperar cuatro semanas. La B repetir el legrado uterino. La C diagnosticar neoplasia trofoblástica gestacional por meseta e iniciar estudio y quimioterapia. La D suspender anticonceptivos. La E histerectomía total. Piénsalo.',
        answer: 'La respuesta correcta es la C. El estancamiento o ascenso de la beta hCG durante tres semanas consecutivas define formalmente neoplasia trofoblástica gestacional, requiriendo estudio de etapificación e inicio de quimioterapia.',
      },
    },

    {
      type: 'points',
      kicker: 'Reglas de oro',
      title: 'Conceptos clave en enfermedad trofoblástica gestacional para el EUNACOM',
      cards: [
        {
          title: 'Genética y semiología',
          tag: 'Diagnóstico de certeza',
          kind: 'key',
          items: [
            {
              t: 'Mola completa es paterna 46XX',
              d: 'Sin feto, tormenta de nieve ecográfica y beta mayor a cien mil',
              say: 'La mola completa es diploide de origen exclusivamente paterno y cursa con hiperplasia difusa sin feto.',
            },
            {
              t: 'Preeclampsia precoz antes de semana 20',
              d: 'Signo patognomónico clásico que obliga a descartar mola',
              say: 'Preeclampsia antes de la semana veinte con útero grande y quistes tecaluteínicos bilaterales es mola completa.',
            },
          ],
        },
        {
          title: 'Evacuación y seguimiento',
          tag: 'Vigilancia oncológica',
          kind: 'alert',
          items: [
            {
              t: 'Aspiración al vacío de elección',
              d: 'AMEU bajo goteo de oxitocina; evitar legrado cortante a ciegas',
              say: 'La evacuación molar se realiza mediante aspiración al vacío para prevenir perforación miometrial y embolia trofoblástica.',
            },
            {
              t: 'Beta hCG mensual por 6 meses con ACO',
              d: 'La meseta en tres semanas define neoplasia trofoblástica',
              say: 'Si te llevas una sola idea de hoy: el seguimiento postmolar exige beta hCG mensual por seis meses bajo anticoncepción oral obligatoria, y una meseta hormonal en tres semanas sella el diagnóstico de neoplasia trofoblástica tributaria de quimioterapia. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Diagnóstico, Evacuación y Seguimiento de la Enfermedad Trofoblástica Gestacional',
    root: N(
      'start',
      'Sospecha de Mola Hidatiforme',
      'Metrorragia indolora, útero discordante, preeclampsia precoz o beta hCG masiva',
      'Iniciamos el abordaje evaluando la imagen ecográfica transvaginal y cuantificando la beta hCG sérica.',
      [
        'Confirmación ecográfica de Mola Hidatiforme',
        N(
          'do',
          'Evacuación Uterina mediante Aspiración al Vacío (AMEU)',
          'Infusión continua de oxitocina · envío obligatorio de tejido a anatomía patológica',
          'Procedemos a la evacuación mediante aspiración endouterina con oxitocina y enviamos muestra a biopsia.',
          [
            'Inicio de protocolo de seguimiento serológico',
            N(
              'ok',
              'Seguimiento Hormonal + Anticoncepción Oral por 6 meses',
              'Beta hCG semanal hasta tres valores indetectables menores a 5 UI/L, luego mensual por 6 meses',
              'Monitoreamos semanalmente la hormona hasta negativizar y luego mensualmente por medio año bajo anticonceptivos orales.',
              [
                'Curva hormonal normal y decreciente',
                N(
                  'ok',
                  'Remisión Completa Definitiva',
                  'Valores indetectables mantenidos por 6 meses · autorizar búsqueda de nuevo embarazo',
                  'Al cumplir seis meses con valores indetectables certificamos la curación completa de la paciente.',
                ),
              ],
              [
                'Meseta en 3 semanas o ascenso en 2 semanas',
                N(
                  'alert',
                  'Neoplasia Trofoblástica Gestacional (NTG)',
                  'Estudio de etapificación (TAC tórax y abdomen) · cálculo de score pronóstico FIGO',
                  'Ante meseta o ascenso hormonal diagnosticamos neoplasia trofoblástica e indicamos quimioterapia.',
                  [
                    'Score FIGO menor o igual a 6 (Bajo Riesgo)',
                    N(
                      'do',
                      'Monoquimioterapia con Metotrexato',
                      'Curación del 100% con preservación de fertilidad futura',
                      'En bajo riesgo indicamos monoquimioterapia con metotrexato logrando curación completa.',
                    ),
                  ],
                ),
              ],
            ),
          ],
        ),
      ],
    ),
  },
};
