// Clase 18.17 — guion docente escrito a mano (estándar Módulo 3 · Pediatría).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-17).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-17',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Ictericia neonatal, diagnóstico diferencial fisiológica versus patológica, incompatibilidad ABO y Rh, nomograma de Bhutani, fototerapia y atresia biliar',
      say: 'Bienvenidos a la clase sobre ictericia neonatal, uno de los motivos de consulta y hospitalización más frecuentes en neonatología y una materia evaluada con preguntas complejas en el examen EUNACOM. En esta sesión aprenderemos a distinguir con rigor la ictericia fisiológica de la patológica antes de las veinticuatro horas, dominaremos el nomograma de Bhutani para indicar fototerapia y exanguinotransfusión, revisaremos el mecanismo biofísico de la lumirrubina y fijaremos la pesquisa oportuna de la colestasis neonatal y la atresia biliar. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Metabolismo y fisiopatología',
      title: 'Metabolismo de la Bilirrubina, Inmadurez Hepática y Riesgo de Kernicterus',
      nodes: [
        { id: 'hem', col: 0, row: 1, k: 'start', t: 'Lisis de glóbulos rojos fetales', s: 'Vida media eritrocitaria reducida a noventa días con masa globular elevada' },
        { id: 'lip', col: 1, row: 1, k: 'mech', t: 'Bilirrubina no conjugada lipofílica', s: 'Transporte unida a albúmina sérica; inmadurez de la glucuroniltransferasa hepática' },
        { id: 'ent', col: 2, row: 1, k: 'risk', t: 'Circulación enterohepática activa', s: 'Acción de la betaglucuronidasa intestinal que desconjuga y reabsorbe bilirrubina' },
        { id: 'ker', col: 3, row: 1, k: 'alert', t: 'Depósito cerebral y kernicterus', s: 'Paso por barrera hematoencefálica con necrosis de ganglios basales' },
      ],
      edges: [
        { from: 'hem', to: 'lip', label: 'oxidación de hemo' },
        { from: 'lip', to: 'ent', label: 'conjugación deficiente' },
        { from: 'lip', to: 'ker', label: 'fracción libre tóxica' },
      ],
      steps: [
        {
          show: ['hem', 'lip'],
          note: 'Sobrecarga de bilirrubina y limitación de la depuración hepática',
          say: 'El recién nacido produce el doble de bilirrubina que el adulto debido a su alta masa globular y a la menor vida media de sus eritrocitos. Esta molécula lipofílica viaja unida a la albúmina hacia el hígado, donde la inmadurez de la enzima glucuroniltransferasa limita severamente su conjugación hidrosoluble.',
        },
        {
          show: ['ent', 'ker'],
          note: 'Reabsorción enterohepática y toxicidad cerebral irreversible',
          say: 'La betaglucuronidasa intestinal desconjuga la bilirrubina y la reabsorbe hacia la sangre. Cuando los niveles séricos sobrepasan la capacidad de transporte de la albúmina, la fracción libre atraviesa la barrera hematoencefálica inmadura, depositándose en los ganglios de la base para causar necrosis y kernicterus permanente.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Alerta clínica cardinal',
      title: 'Ictericia en las Primeras Veinticuatro Horas: Siempre Patológica',
      cards: [
        {
          title: 'Regla de Oro de las Primeras Veinticuatro Horas',
          tag: 'Toda ictericia antes del primer día exige estudio inmediato',
          kind: 'alert',
          items: [
            {
              t: 'Carácter patológico universal antes de las 24 horas',
              d: 'Ninguna ictericia en el primer día de vida es fisiológica; traduce invariablemente una enfermedad hemolítica grave',
              say: 'La ictericia que se hace visible en las primeras veinticuatro horas de vida jamás es fisiológica. Su sola presencia indica hemólisis acelerada y obliga a una hospitalización inmediata para estudio y tratamiento.',
            },
            {
              t: 'Velocidad de ascenso rápida mayor a cinco miligramos día',
              d: 'Un aumento superior a 0.2 o 0.5 mg/dL por hora o más de 5 mg/dL en 24 horas advierte hemólisis fulminante',
              say: 'Un incremento de la bilirrubina superior a cero punto cinco miligramos por decilitro cada hora o más de cinco miligramos al día confirma una destrucción eritrocitaria acelerada que amenaza el sistema nervioso central.',
            },
          ],
        },
        {
          title: 'Etiologías Principales de Hemólisis Neonatal Precoz',
          tag: 'Incompatibilidad de grupo sanguíneo clásico y factor Rh',
          kind: 'key',
          items: [
            {
              t: 'Incompatibilidad por grupo clásico ABO: La más frecuente',
              d: 'Madre grupo O con recién nacido grupo A o B; anticuerpos anti A o anti B de tipo IgG atraviesan la placenta',
              say: 'La incompatibilidad clásica de grupo es la causa más común de hemólisis neonatal, ocurriendo en madres grupo O con hijos grupo A o B cuyos anticuerpos maternos IgG cruzan la placenta.',
            },
            {
              t: 'Incompatibilidad por factor Rh (D): La más grave',
              d: 'Madre Rh negativo sensibilizada con feto Rh positivo; genera anemia severa, hidropesía fetal e ictericia masiva',
              say: 'La incompatibilidad por factor Rh es menos común gracias a la profilaxis con inmunoglobulina anti D, pero cuando ocurre es sumamente severa, generando anemia grave y kernicterus precoz.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Entidad madurativa frecuente',
      title: 'Ictericia Fisiológica Neonatal: Criterios Definitorios',
      cards: [
        {
          title: 'Cronología y Límites de la Ictericia Fisiológica',
          tag: 'Presente en más del sesenta por ciento de los recién nacidos de término',
          kind: 'normal',
          items: [
            {
              t: 'Aparición posterior a las veinticuatro a cuarenta y ocho horas',
              d: 'Se hace clínicamente evidente en el segundo o tercer día de vida en niños sanos y asintomáticos',
              say: 'La ictericia fisiológica nunca aparece en el primer día. Se hace visible a partir del segundo o tercer día de vida en un recién nacido activo, con buen reflejo de succión y afebril.',
            },
            {
              t: 'Pico térmico al tercer a cuarto día y resolución espontánea',
              d: 'Alcanza su valor máximo de 10 a 12 mg/dL en el día 3 a 4 en término y desciende paulatinamente antes del décimo día',
              say: 'Su concentración máxima oscila entre diez y doce miligramos por decilitro entre el tercer y cuarto día de vida, para luego descender de manera progresiva hasta normalizarse antes de los diez días.',
            },
          ],
        },
        {
          title: 'Requisitos Negativos Obligatorios',
          tag: 'Condiciones de laboratorio que ratifican benignidad',
          kind: 'criteria',
          items: [
            {
              t: 'Predominio no conjugado con bilirrubina directa normal',
              d: 'Bilirrubina directa siempre menor a 1.0 mg/dL o menor al veinte por ciento del valor de la bilirrubina total',
              say: 'Es exclusivamente a expensas de bilirrubina indirecta, manteniendo la bilirrubina directa por debajo de un miligramo por decilitro y con deposiciones pigmentadas normales.',
            },
            {
              t: 'Ausencia de coluria, acolia, hepatoesplenomegalia o anemia',
              d: 'Orina clara, heces amarillentas de transición y examen físico abdominal sin visceromegalias patológicas',
              say: 'El paciente no presenta hepatomegalia, no tiene anemia clínica y sus pañales demuestran deposiciones amarillas normales sin ningún rastro de acolia ni de coluria.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Lactancia y bilirrubina',
      title: 'Ictericia Asociada a la Alimentación al Seno Materno',
      cards: [
        {
          title: 'Ictericia por Falta de Lactancia (Por Escaso Aporte)',
          tag: 'Fenómeno precoz por deshidratación en la primera semana',
          kind: 'alert',
          items: [
            {
              t: 'Inicio en los primeros tres a cinco días por hipogalactia',
              d: 'Técnica de lactancia deficiente que genera ayuno relativo, pérdida ponderal mayor al 10% y lentitud del tránsito intestinal',
              say: 'Ocurre en la primera semana debido a ingesta calórica insuficiente por mala técnica de lactancia, generando deshidratación y aumento masivo de la recirculación enterohepática por menor tránsito digestivo.',
            },
            {
              t: 'Manejo: Optimizar técnica de amamantamiento y frecuencia',
              d: 'Corregir acople al pecho, aumentar tomas a 8 a 12 veces al día y asegurar hidratación; jamás suspender la lactancia',
              say: 'El tratamiento consiste en corregir la técnica de acople, aumentar la frecuencia de las mamadas y asegurar una adecuada hidratación, sin suspender jamás la leche materna.',
            },
          ],
        },
        {
          title: 'Ictericia por Leche Materna (Síndrome de Arias)',
          tag: 'Fenómeno tardío benigno a partir de la segunda semana',
          kind: 'normal',
          items: [
            {
              t: 'Inicio tardío después del quinto a séptimo día de vida',
              d: 'Sustancias presentes en la leche materna como betaglucuronidasa inhiben la conjugación; niño eutrófico y vigoroso',
              say: 'Aparece hacia el final de la primera semana en lactantes que crecen vigorosamente, atribuida a factores de la leche materna que favorecen la desconjugación intestinal de la bilirrubina.',
            },
            {
              t: 'Evolución prolongada benigna de hasta doce semanas',
              d: 'Puede prolongarse entre 4 y 12 semanas sin causar toxicidad neurológica; la lactancia debe mantenerse sin interrupción',
              say: 'Puede persistir durante cuatro a doce semanas con valores estables y seguros, requiriendo únicamente monitorización clínica y mantención firme de la lactancia materna exclusiva.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnóstico diferencial sistemático',
      title: 'Comparación Esencial de las Formas Frecuentes de Ictericia Neonatal',
      head: ['Tipo de Ictericia', 'Inicio Clínico', 'Mecanismo Fisiopatológico', 'Conducta Médica Obligada'],
      rows: [
        {
          cells: ['Hemolítica por isoinmunización', 'Menor a veinticuatro horas', 'Anticuerpos maternos IgG lisan eritrocitos', 'Hospitalizar para fototerapia inmediata'],
          say: 'La ictericia hemolítica debuta antes de las veinticuatro horas por incompatibilidad de grupo y requiere fototerapia continua de urgencia.',
        },
        {
          cells: ['Ictericia fisiológica', 'Dos a tres días de vida', 'Inmadurez transitoria de glucuroniltransferasa', 'Observación ambulatoria y control'],
          say: 'La ictericia fisiológica aparece entre el segundo y tercer día por inmadurez enzimática y solo requiere control y apoyo en la lactancia.',
        },
        {
          cells: ['Por falta de lactancia', 'Tres a cinco días de vida', 'Aumento de circulación enterohepática por ayuno', 'Mejorar acople y aumentar frecuencia'],
          say: 'La ictericia por escaso aporte debuta en los primeros días por hipogalactia y se corrige optimizando las tomas de leche materna.',
        },
        {
          cells: ['Por leche materna', 'Mayor a cinco a siete días', 'Factores de la leche que desconjugan bilirrubina', 'Mantener lactancia materna exclusiva'],
          say: 'La ictericia por leche materna aparece después del quinto día en niños sanos y no justifica interrumpir la alimentación al pecho.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Evaluación semiológica visual',
      title: 'Zonas Dérmicas de Kramer y Limitaciones de la Estimación Visual',
      cards: [
        {
          title: 'Progresión Céfalo-Caudal de la Ictericia',
          tag: 'Regla de Kramer para estimación clínica en box',
          kind: 'key',
          items: [
            {
              t: 'Zonas 1 y 2: Cabeza y tronco superior',
              d: 'Zona 1: cabeza y cuello (aproximadamente 4 a 6 mg/dL); Zona 2: tronco hasta el ombligo (aproximadamente 8 a 10 mg/dL)',
              say: 'La ictericia progresa en sentido céfalo-caudal. La zona uno comprende cabeza y cuello con cuatro a seis miligramos, y la zona dos abarca hasta el ombligo con ocho a diez miligramos.',
            },
            {
              t: 'Zonas 3, 4 y 5: Abdomen, extremidades y palmas',
              d: 'Zona 3: hipogastrio y muslos (12 mg/dL); Zona 4: brazos y piernas (15 mg/dL); Zona 5: palmas y plantas (mayor a 15 mg/dL)',
              say: 'La zona tres llega a muslos con doce miligramos, la cuatro a piernas con quince miligramos y la zona cinco tiñe palmas y plantas traduciendo niveles peligrosos sobre quince miligramos.',
            },
          ],
        },
        {
          title: 'Limitaciones Clínicas Severas de la Estimación Visual',
          tag: 'Prohibido tomar decisiones terapéuticas sin examen de laboratorio',
          kind: 'alert',
          items: [
            {
              t: 'Imprecisión en fototipos oscuros y bajo luz artificial',
              d: 'La inspección visual subestima o sobreestima los niveles reales en más de un tercio de los pacientes evaluados',
              say: 'La evaluación visual tiene un alto margen de error, particularmente bajo luz artificial o en recién nacidos de piel morena, pudiendo subestimar concentraciones críticas.',
            },
            {
              t: 'Bilirrubinemia sérica obligatoria para definir fototerapia',
              d: 'Toda decisión de ingreso a fototerapia o exanguinotransfusión debe basarse estrictamente en la medición cuantitativa de laboratorio',
              say: 'Toda conducta médica activa debe sustentarse en la medición cuantitativa de bilirrubina sérica o transcutánea calibrada, sin basarse jamás únicamente en la vista.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Estratificación cuantitativa estandarizada',
      title: 'Nomograma de Bhutani y Curvas Horarias de Riesgo',
      cards: [
        {
          title: 'El Concepto Clave: Bilirrubina según Horas de Vida Exactas',
          tag: 'Nomograma de percentiles de la Academia Americana de Pediatría',
          kind: 'key',
          items: [
            {
              t: 'Graficar siempre con horas de vida cronológicas',
              d: 'Un valor de 10 mg/dL es normal a las 72 horas pero representa un riesgo crítico de daño neurológico a las 18 horas de vida',
              say: 'El valor de bilirrubina carece de sentido si no se grafica contra las horas de vida exactas del neonato. Una cifra de diez miligramos es benigna a los tres días pero catastrófica a las dieciocho horas.',
            },
            {
              t: 'Las cuatro zonas de riesgo del nomograma de Bhutani',
              d: 'Bajo riesgo (menor a P40), riesgo intermedio bajo (P40 a P75), intermedio alto (P75 a P95) y alto riesgo (mayor a P95)',
              say: 'El nomograma divide los valores en cuatro zonas: bajo riesgo bajo el percentil cuarenta, intermedio bajo, intermedio alto y zona de alto riesgo sobre el percentil noventa y cinco.',
            },
          ],
        },
        {
          title: 'Decisión Terapéutica Personalizada',
          tag: 'Curvas que ajustan por edad gestacional y neurotoxicidad',
          kind: 'criteria',
          items: [
            {
              t: 'Factores de riesgo de neurotoxicidad que bajan el umbral',
              d: 'Enfermedad hemolítica isoinmune, déficit de G6PD, asfixia perinatal, letargia significativa, inestabilidad térmica o sepsis',
              say: 'La presencia de factores de riesgo como hemólisis inmunitaria, asfixia, letargia o prematurez desciende la curva de tolerancia obligando a iniciar fototerapia con valores menores.',
            },
            {
              t: 'Fototerapia intensiva versus exanguinotransfusión',
              d: 'Si el valor supera la curva de fototerapia se inicia luz azul; si se acerca a la curva superior o hay signos de toxicidad se prepara recambio',
              say: 'Si el valor sobrepasa el umbral se inicia fototerapia continua de alta intensidad, preparándose la exanguinotransfusión si la cifra continúa subiendo hacia la línea de recambio vascular.',
            },
          ],
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Mecanismo biofísico y fotoquímico',
      title: 'Fototerapia con Luz Azul: Formación de Lumirrubina Hidrosoluble',
      nodes: [
        { id: 'luz', col: 0, row: 1, k: 'start', t: 'Luz azul 460 a 490 nm', s: 'Espectro electromagnético absorbido óptimamente por la bilirrubina dérmica' },
        { id: 'fot', col: 1, row: 1, k: 'mech', t: 'Fotoisomerización estructural', s: 'Conversión fotoquímica irreversible del isómero lipofílico 4Z,15Z' },
        { id: 'lum', col: 2, row: 1, k: 'good', t: 'Producción de lumirrubina', s: 'Molécula hidrosoluble polar que no requiere conjugación enzimática hepática' },
        { id: 'exc', col: 3, row: 1, k: 'effect', t: 'Excreción biliar y urinaria directa', s: 'Eliminación rápida en orina y bilis con descenso acelerado de niveles séricos' },
      ],
      edges: [
        { from: 'luz', to: 'fot', label: 'absorción cutánea' },
        { from: 'fot', to: 'lum', label: 'reordenamiento químico' },
        { from: 'lum', to: 'exc', label: 'filtración renal' },
      ],
      steps: [
        {
          show: ['luz', 'fot'],
          note: 'Absorción de fotones de luz azul en los capilares cutáneos',
          say: 'La luz azul con longitud de onda entre cuatrocientos sesenta y cuatrocientos noventa nanómetros penetra la epidermis y es absorbida directamente por las moléculas de bilirrubina libre presentes en los capilares superficiales.',
        },
        {
          show: ['lum', 'exc'],
          note: 'Conversión fotoquímica irreversible a lumirrubina y excreción',
          say: 'Esta energía lumínica desencadena una fotoisomerización estructural irreversible transformando la bilirrubina lipofílica en lumirrubina, un fotoproducto altamente hidrosoluble que se excreta de inmediato por vía biliar y renal sin requerir conjugación hepática.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Neurotoxicidad severa',
      title: 'Encefalopatía Bilirrubínica Aguda y Secuelas de Kernicterus',
      cards: [
        {
          title: 'Encefalopatía Bilirrubínica Aguda: Fases Progresivas',
          tag: 'Signos de daño neurológico en curso potencialmente reversibles',
          kind: 'alert',
          items: [
            {
              t: 'Fase precoz: Hipotonía, letargia y succión débil',
              d: 'Neonato marcadamente ictérico que se muestra somnoliento, no despierta a comer y pierde el tono muscular habitual',
              say: 'La fase inicial se manifiesta por somnolencia profunda, hipotonía generalizada y rechazo alimentario con llanto débil, signos que obligan a tratamiento de máxima urgencia.',
            },
            {
              t: 'Fase avanzada: Hipertonía, opistótonos y llanto agudo',
              d: 'Espasmos extensores axiales con arqueamiento del tronco en opistótonos, retrocolis, llanto de tono cerebral agudo y convulsiones',
              say: 'Si no se interviene, progresa a hipertonía con opistótonos, arqueamiento espinal rígido, llanto agudo incontrolable, fiebre central y crisis convulsivas de mal pronóstico.',
            },
          ],
        },
        {
          title: 'Kernicterus Crónico: Secuelas Neurológicas Permanentes',
          tag: 'Daño tisular neuronal irreversible en ganglios basales',
          kind: 'alert',
          items: [
            {
              t: 'Parálisis cerebral atetoide o coreoatetósica',
              d: 'Destrucción de neuronas del globo pálido y núcleos subtalámicos con movimientos distónicos y discinéticos involuntarios',
              say: 'El kernicterus crónico deja como secuela una parálisis cerebral coreoatetoide con distonías severas por impregnación necrótica del globo pálido y subtálamo.',
            },
            {
              t: 'Hipoacusia neurosensorial y displasia del esmalte dental',
              d: 'Compromiso auditivo central por lesión de los núcleos cocleares del tronco y defecto en la dentición primaria',
              say: 'También ocasiona sordera neurosensorial por destrucción de los núcleos cocleares en el tronco encefálico y defectos severos en el esmalte de la dentición de leche.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Terapia de recambio vascular',
      title: 'Exanguinotransfusión Neonatal: Indicaciones de Emergencia',
      cards: [
        {
          title: 'Procedimiento y Mecanismo Terapéutico',
          tag: 'Eliminación mecánica rápida de bilirrubina y anticuerpos',
          kind: 'key',
          items: [
            {
              t: 'Recambio de dos volemias sanguíneas (160 a 180 mL/kg)',
              d: 'Se extrae sangre del recién nacido y se reemplaza por alícuotas con sangre total reconstituida fresca compatible',
              say: 'La exanguinotransfusión consiste en recambiar dos volemias sanguíneas completas a través de un catéter venoso umbilical, removiendo glóbulos rojos sensibilizados y anticuerpos circulantes.',
            },
            {
              t: 'Objetivo fisiológico primordial',
              d: 'Disminuir de inmediato los niveles séricos de bilirrubina a la mitad, cortar la hemólisis activa y corregir la anemia severa',
              say: 'Su objetivo primordial es reducir los niveles de bilirrubina a la mitad en pocas horas, frenar la hemólisis activa y prevenir el desarrollo inminente de encefalopatía aguda.',
            },
          ],
        },
        {
          title: 'Indicaciones Formales Inmediatas',
          tag: 'Criterios que no toleran dilación asistencial',
          kind: 'criteria',
          items: [
            {
              t: 'Presencia de signos de encefalopatía aguda independientemente del valor',
              d: 'Ante cualquier signo clínico de letargia profunda, opistótonos o llanto agudo la exanguinotransfusión es mandatoria',
              say: 'La presencia de cualquier signo clínico de encefalopatía aguda obliga a iniciar la preparación del recambio sanguíneo sin importar el valor numérico de laboratorio.',
            },
            {
              t: 'Falla comprobada de la fototerapia intensiva',
              d: 'Bilirrubina que continúa aumentando más de 0.5 mg/dL por hora a pesar de fototerapia de alta intensidad con máxima superficie',
              say: 'También se indica cuando los niveles continúan subiendo a pesar de fototerapia intensiva o sobrepasan el percentil de recambio según las curvas de edad gestacional.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Urgencia quirúrgica pediátrica',
      title: 'Colestasis Neonatal y Atresia de Vías Biliares Extrahepática',
      cards: [
        {
          title: 'Signos Cardinales de Alarma Colestásica',
          tag: 'Toda ictericia con acolia y coluria exige derivación urgente',
          kind: 'alert',
          items: [
            {
              t: 'Ictericia prolongada más allá de las dos semanas de vida',
              d: 'Todo neonato que persiste amarillo a los 14 días en término o 21 días en pretérmino debe medirse bilirrubina total y directa',
              say: 'Todo recién nacido con ictericia persistente más allá de las dos semanas de vida debe someterse a determinación obligatoria de bilirrubina total y directa fraccionada.',
            },
            {
              t: 'Triada de colestasis: Ictericia, coluria y acolia fecal',
              d: 'Bilirrubina directa mayor a 1.0 mg/dL, orina oscura como té cargado y deposiciones blanquecinas o decoloradas como masilla',
              say: 'La presencia de bilirrubina directa elevada sobre un miligramo por decilitro con orina oscura y deposiciones blancas o acólicas confirma un síndrome colestásico neonatal.',
            },
          ],
        },
        {
          title: 'Atresia de Vías Biliares y Cirugía de Kasai Precoz',
          tag: 'Obliteración fibrótica progresiva del árbol biliar',
          kind: 'criteria',
          items: [
            {
              t: 'Primera causa de trasplante hepático en pediatría',
              d: 'Obliteración inflamatoria de los conductos biliares extrahepáticos que evoluciona rápidamente a cirrosis biliar secundaria',
              say: 'La atresia de vías biliares extrahepáticas es la causa principal de trasplante de hígado en niños, progresando a cirrosis biliar irreversible si no se opera tempranamente.',
            },
            {
              t: 'Hepatoportoenterostomía de Kasai antes de los sesenta días',
              d: 'La anastomosis en Y de Roux debe realizarse antes de las 8 semanas de vida; posterior a este plazo la tasa de éxito cae bajo el 20%',
              say: 'El tratamiento de elección es la cirugía de Kasai, la cual debe practicarse idealmente antes de los sesenta días de vida para evitar el colapso funcional del hígado.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Comparación analítica de laboratorio',
      title: 'Bilirrubina No Conjugada (Indirecta) versus Conjugada (Directa)',
      head: ['Parámetro Analítico', 'Hiperbilirrubinemia Indirecta', 'Hiperbilirrubinemia Directa', 'Implicancia Clínica'],
      rows: [
        {
          cells: ['Solubilidad molecular', 'Lipofílica (insoluble en agua)', 'Hidrosoluble (polar)', 'La indirecta atraviesa barrera cerebral'],
          say: 'La bilirrubina indirecta es liposoluble y puede ingresar al encéfalo causando kernicterus, mientras que la directa es hidrosoluble y no causa neurotoxicidad.',
        },
        {
          cells: ['Coloración de deposiciones', 'Color normal amarillento', 'Acolia fecal (heces blancas)', 'La acolia demuestra obstrucción biliar'],
          say: 'En el predominio indirecto las heces son amarillas normales, mientras que en el predominio directo las heces son acólicas y blanquecinas.',
        },
        {
          cells: ['Coloración de orina', 'Normal clara sin coluria', 'Coluria oscura (color té)', 'La presencia de coluria descarta ictericia fisiológica'],
          say: 'La orina es clara en la ictericia fisiológica indirecta, pero se vuelve oscura y espumosa con coluria en las colestasis obstructivas.',
        },
        {
          cells: ['Causa paradigmática', 'Fisiológica o incompatibilidad', 'Atresia de vías biliares', 'La directa requiere derivación quirúrgica'],
          say: 'El exceso indirecto orienta a fisiológica o hemólisis; el exceso directo sugiere colestasis y atresia biliar quirúrgica urgente.',
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de actuación clínica',
      title: 'Algoritmo de Diagnóstico, Estratificación y Tratamiento de la Ictericia Neonatal',
      say: 'Examinemos el algoritmo paso a paso para el abordaje metódico de la ictericia neonatal, diferenciando la edad de inicio, el fraccionamiento de bilirrubina y los umbrales terapéuticos.',
    },

    {
      type: 'quiz',
      kicker: 'Banco Oficial AEE · Perfil V3 2.01.1.121',
      title: 'Conducta Inmediata ante Ictericia Precoz e Incompatibilidad ABO',
      stem: 'Un recién nacido de 18 horas de vida presenta ictericia marcada que compromete cara, tórax y abdomen. La madre es grupo O Rh(+) y el niño es grupo B Rh(+). El examen de laboratorio informa: Bilirrubina Total de 9.5 mg/dL y Bilirrubina Directa de 0.5 mg/dL.',
      question: '¿Cuál es el diagnóstico más probable y la conducta inicial?',
      options: [
        { letter: 'A', text: 'Ictericia fisiológica; enviar a domicilio con lactancia a libre demanda y control en 7 días' },
        { letter: 'B', text: 'Incompatibilidad de grupo clásico ABO; hospitalizar de inmediato para iniciar fototerapia continua y solicitar Coombs directo' },
        { letter: 'C', text: 'Ictericia por leche materna; suspender la lactancia materna por 48 horas y alimentar con fórmula' },
        { letter: 'D', text: 'Atresia de vías biliares congénita; derivar a cirugía pediátrica de urgencia' },
        { letter: 'E', text: 'Sepsis neonatal precoz; iniciar vancomicina más meropenem de entrada' },
      ],
      correct: 'B',
      explanation: 'Toda ictericia que inicia en las primeras 24 horas de vida (< 24h) es patológica y obliga al estudio hemolítico urgente. El binomio madre O positivo con recién nacido B positivo configura una incompatibilidad por grupo clásico ABO. Con una bilirrubinemia de 9.5 mg/dL a las 18 horas de vida (ubicada en la zona de alto riesgo del nomograma de Bhutani), la conducta reglamentaria es hospitalizar en neonatología, iniciar fototerapia intensiva continua de inmediato, solicitar test de Coombs directo, hemograma con frotis y reticulocitos, y monitorizar la velocidad de ascenso de la bilirrubina cada 4 a 6 horas.',
      say: {
        stem: 'Recién nacido de dieciocho horas con ictericia hasta el abdomen, madre grupo O positivo y niño grupo B positivo, con bilirrubina de nueve coma cinco miligramos por decilitro.',
        question: '¿Cuál es el diagnóstico más probable y la conducta inicial?',
        options: 'La opción A ictericia fisiológica y alta. La B incompatibilidad clásica ABO, hospitalizar para fototerapia continua y test de Coombs. La C ictericia por leche materna. La D atresia biliar. La E sepsis neonatal con vancomicina. Recuerda la regla de las veinticuatro horas.',
        answer: 'La respuesta correcta es la B. Toda ictericia antes de las veinticuatro horas es patológica; con madre O e hijo B corresponde a incompatibilidad ABO que requiere fototerapia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco Oficial AEE · Perfil V3 2.01.1.121',
      title: 'Manejo de Ictericia al Tercer Día en Zona de Bajo Riesgo',
      stem: 'Un recién nacido de término de 3 días de vida (72 horas) presenta ictericia hasta el abdomen (zona 3 de Kramer). Está activo, se alimenta exclusivamente al pecho con buena succión, orina claro y sus deposiciones son de transición amarillentas. Su madre es A(+) y el niño es A(+). La bilirrubina total es de 11.2 mg/dL con bilirrubina directa de 0.6 mg/dL. Al graficar en el nomograma de Bhutani, el valor se ubica en la zona de bajo riesgo.',
      question: '¿Cuál es la conducta médica correcta?',
      options: [
        { letter: 'A', text: 'Exanguinotransfusión inmediata' },
        { letter: 'B', text: 'Ingreso a fototerapia intensiva' },
        { letter: 'C', text: 'Manejo como ictericia fisiológica, reforzar la lactancia materna y dar de alta con control ambulatorio a las 48 horas' },
        { letter: 'D', text: 'Suspender el pecho materno de forma definitiva' },
        { letter: 'E', text: 'Indicar fenobarbital oral para inducir la glucuroniltransferasa' },
      ],
      correct: 'C',
      explanation: 'El paciente presenta una clásica Ictericia Fisiológica: inicio posterior a las 24 horas de vida, examen físico impecable en recién nacido de término vigoroso sin incompatibilidad sanguínea, orina clara y heces coloreadas, bilirrubina indirecta de 11.2 mg/dL a las 72 horas (momento del pico fisiológico) y ubicación en zona de bajo riesgo del nomograma de Bhutani. No requiere fototerapia ni estudios invasivos. La conducta correcta es mantener y reforzar la lactancia materna, educar en signos de alarma y programar control clínico en 48 horas.',
      say: {
        stem: 'Recién nacido de tres días vigoroso que lacta bien con bilirrubina de once coma dos en zona de bajo riesgo del nomograma sin incompatibilidad.',
        question: '¿Cuál es la conducta médica correcta?',
        options: 'La opción A exanguinotransfusión. La B ingreso a fototerapia intensiva. La C manejo como ictericia fisiológica, reforzar lactancia y control en dos días. La D suspender pecho materno. La E fenobarbital oral. Evalúa el riesgo del nomograma.',
        answer: 'La respuesta correcta es la C. Corresponde a una ictericia fisiológica en zona de bajo riesgo, requiriendo reforzar la lactancia y control ambulatorio.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco Oficial AEE · Perfil V3 2.01.1.121',
      title: 'Mecanismo Biofísico de la Fototerapia con Luz Azul',
      stem: '¿Cuál es el mecanismo biofísico y bioquímico mediante el cual la Fototerapia con luz azul (longitud de onda 460-490 nm) reduce los niveles séricos de bilirrubina indirecta en el recién nacido?',
      options: [
        { letter: 'A', text: 'Acelera la maduración de la glucuroniltransferasa hepática' },
        { letter: 'B', text: 'Provoca fotoisomerización estructural de la bilirrubina indirecta no polar transformándola en lumirrubina hidrosoluble que se excreta sin conjugación' },
        { letter: 'C', text: 'Destruye los hematíes circulantes que contienen hemoglobina fetal' },
        { letter: 'D', text: 'Inhibe la absorción intestinal de lípidos y quilomicrones' },
        { letter: 'E', text: 'Bloquea los receptores Fc de los macrófagos esplénicos' },
      ],
      correct: 'B',
      explanation: 'La luz azul de alta intensidad (460 a 490 nm) penetra el lecho capilar cutáneo y produce una reacción fotoquímica irreversible que altera la configuración espacial de la molécula de bilirrubina no conjugada (isómero 4Z,15Z lipofílico), transformándola en Lumirrubina (isómero estructural hidrosoluble). La lumirrubina tiene la propiedad crucial de ser excretada directamente a través de la bilis y de la orina sin requerir la conjugación hepática por la glucuroniltransferasa.',
      say: {
        stem: 'Pregunta fisiológica sobre el mecanismo biofísico y bioquímico por el cual la fototerapia reduce la bilirrubina indirecta.',
        question: '¿Cuál es el mecanismo exacto de la fototerapia con luz azul?',
        options: 'La opción A acelera la maduración de la glucuroniltransferasa hepática. La B provoca fotoisomerización estructural transformándola en lumirrubina hidrosoluble que se excreta sin conjugación. La C destruye hematíes. La D inhibe absorción lipídica. La E bloquea receptores. Recuerda el fotoproducto soluble.',
        answer: 'La respuesta correcta es la B. La fototerapia genera fotoisomerización irreversible a lumirrubina, la cual se excreta por orina y bilis sin necesidad de conjugación.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco Oficial AEE · Perfil V3 2.01.1.121',
      title: 'Pesquisa Urgente de Colestasis Neonatal y Acolia Fecal',
      stem: 'Un lactante de 20 días de vida es traído a control sano. La madre refiere que lo nota amarillo desde la primera semana de vida. Al examen físico destaca ictericia en cara y tronco, pero la madre agrega que los pañales de orina son oscuros como té cargado (coluria) y las deposiciones han sido blanquecinas como masilla (acolia) en los últimos días. La bilirrubinemia total es de 8.5 mg/dL con bilirrubina directa de 5.2 mg/dL.',
      question: '¿Cuál es el diagnóstico de sospecha más urgente?',
      options: [
        { letter: 'A', text: 'Ictericia fisiológica prolongada' },
        { letter: 'B', text: 'Ictericia por leche materna benigna' },
        { letter: 'C', text: 'Atresia de Vías Biliares Extrahepática' },
        { letter: 'D', text: 'Incompatibilidad de grupo ABO tardía' },
        { letter: 'E', text: 'Síndrome de Gilbert del lactante' },
      ],
      correct: 'C',
      explanation: 'Todo lactante que curse con ictericia persistente más allá de las 2 semanas de vida con elevación patológica de la Bilirrubina Directa (> 1.0 mg/dL o > 20% de la total), asociada a coluria y acolia fecal (heces pálidas o blancas), presenta un Síndrome Colestásico Neonatal. La causa más prevalente y que representa una urgencia quirúrgica indiscutible es la Atresia de Vías Biliares Extrahepática. Debe derivarse de inmediato para ecografía biliar y cirugía de Kasai (hepatoportoenterostomía) antes de los 60 días de vida para evitar la falla hepática cirrótica terminal.',
      say: {
        stem: 'Lactante de veinte días con ictericia persistente que presenta orina oscura con coluria deposiciones blancas acólicas y bilirrubina directa de cinco coma dos.',
        question: '¿Cuál es el diagnóstico de sospecha más urgente?',
        options: 'La opción A ictericia fisiológica prolongada. La B ictericia por leche materna benigna. La C atresia de vías biliares extrahepática. La D incompatibilidad ABO tardía. La E síndrome de Gilbert. Fíjate en el predominio directo y la acolia.',
        answer: 'La respuesta correcta es la C. La ictericia colestásica con acolia y coluria obliga a sospechar atresia de vías biliares requiriendo derivación urgente.',
      },
    },

    {
      type: 'points',
      kicker: 'Reglas de oro EUNACOM',
      title: 'Puntos Clave y Perlas Indispensables en Ictericia Neonatal',
      cards: [
        {
          title: 'Reglas Temporales y Decisión Asistencial',
          tag: 'Conceptos que definen conductas inmediatas',
          kind: 'key',
          items: [
            {
              t: 'Ictericia antes de las 24 horas: Siempre patológica',
              d: 'Hospitalizar, solicitar bilirrubinas fraccionadas, grupo sanguíneo, Rh y Coombs directo; iniciar fototerapia sin demora',
              say: 'Grábense que la ictericia en el primer día nunca es normal. Exige hospitalización para estudio de hemólisis y fototerapia inmediata.',
            },
            {
              t: 'El valor de bilirrubina siempre se interpreta por horas',
              d: 'Utilizar el nomograma de Bhutani correlacionando los miligramos por decilitro con las horas exactas de vida cumplidas',
              say: 'Interpreten siempre la cifra de bilirrubina según las horas de vida del paciente en el nomograma para decidir con rigor científico el inicio de fototerapia.',
            },
          ],
        },
        {
          title: 'Mecanismo Terapéutico y Banderas Rojas',
          tag: 'Fototerapia y pesquisa oportuna de colestasis',
          kind: 'alert',
          items: [
            {
              t: 'Fototerapia convierte bilirrubina en lumirrubina hidrosoluble',
              d: 'La lumirrubina se elimina por vía biliar y urinaria directa sin necesitar conjugación hepática por la transferasa',
              say: 'Recuerden que la fototerapia actúa transformando la molécula tóxica en lumirrubina soluble, permitiendo su eliminación sin pasar por el hígado.',
            },
            {
              t: 'Bilirrubina directa sobre 1 mg/dL y acolia: Atresia biliar',
              d: 'Derivación inmediata a centro de referencia para cirugía de Kasai antes de los sesenta días de vida',
              say: 'Toda ictericia directa con deposiciones acólicas es una emergencia quirúrgica por sospecha de atresia biliar que exige cirugía de Kasai antes de dos meses.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Diagnóstico, Estratificación y Manejo de la Ictericia Neonatal',
    root: N(
      'start',
      'Recién Nacido con Ictericia Clínica Visible: Evaluación Cronológica Inicial',
      'Examen visual de progresión céfalo-caudal (Zonas de Kramer) y registro de las horas de vida exactas',
      'Iniciamos el abordaje evaluando el momento de aparición de la ictericia respecto a las primeras veinticuatro horas de vida.',
      [
        'Ictericia de inicio precoz: Menor a veinticuatro horas de vida (< 24 h)',
        N(
          'alert',
          'Ictericia Siempre Patológica: Estudio Hemolítico Inmediato',
          'Hospitalizar en neonatología · Bilirrubina total y directa · Grupo sanguíneo, Rh y test de Coombs directo · Hemograma, frotis y reticulocitos · Iniciar fototerapia intensiva continua de inmediato',
          'Toda ictericia antes de veinticuatro horas es patológica; hospitalizamos de inmediato para estudio de hemólisis y fototerapia.',
        ),
      ],
      [
        'Ictericia de inicio posterior a las veinticuatro horas de vida (>= 24 h)',
        N(
          'q',
          '¿Cuál es el tipo de bilirrubina predominante en el laboratorio?',
          'Fraccionamiento analítico: Hiperbilirrubinemia indirecta versus directa',
          'En el neonato que debuta después del primer día analizamos el predominio de bilirrubina en el examen de sangre.',
          [
            'Predominio directo: Bilirrubina directa mayor a 1.0 mg/dL o > 20% de total',
            N(
              'refer',
              'Síndrome Colestásico Neonatal: Sospecha de Atresia Biliar',
              'Preguntar dirigidamente por acolia (heces blancas) y coluria · Derivación urgente a gastroenterología pediátrica · Ecografía de vía biliar en ayuno · Cirugía de Kasai antes de los 60 días',
              'El predominio directo con acolia define colestasis neonatal y obliga a descartar atresia de vías biliares antes de dos meses.',
            ),
          ],
          [
            'Predominio indirecto (No conjugada): Correlación en Nomograma de Bhutani',
            N(
              'q',
              '¿En qué zona de riesgo se sitúa el valor según las horas de vida?',
              'Curvas horarias de Bhutani según factores de riesgo y edad gestacional',
              'Ubicamos el valor de bilirrubina indirecta en el nomograma de Bhutani según las horas exactas de vida.',
              [
                'Sobre la curva de fototerapia o en zona de alto riesgo (> P95)',
                N(
                  'alert',
                  'Ingreso a Fototerapia Continua y Vigilancia de Curva de Recambio',
                  'Fototerapia con luz azul de alta intensidad · Protección ocular estricta · Fomentar ingesta hídrica o leche · Control de bilirrubina cada 6-12h · Preparar exanguinotransfusión si falla',
                  'Si supera la curva de fototerapia iniciamos luz azul continua con protección ocular y monitoreo estrecho.',
                ),
              ],
              [
                'Bajo la curva de fototerapia en zona de bajo riesgo (< P40)',
                N(
                  'ok',
                  'Ictericia Fisiológica: Apoyo a la Lactancia y Control Ambulatorio',
                  'Reforzar técnica y frecuencia de lactancia materna (8 a 12 tomas/día) · Educación a padres en signos de alarma (acolia, decaimiento) · Control ambulatorio presencial en 48 horas',
                  'Si se sitúa en bajo riesgo manejamos como fisiológica reforzando la lactancia con control ambulatorio en dos días.',
                ),
              ],
            ),
          ],
        ),
      ],
    ),
  },
};
