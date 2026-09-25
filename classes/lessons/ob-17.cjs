// Clase 3.17 — guion docente escrito a mano (estándar Módulo 3 · Obstetricia).
// Fuente clínica: books/scripts/dataset_obstetricia.cjs (ob-17).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ob-17',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Distocias dinámicas y mecánicas, algoritmo de rescate en distocia de hombros y monitorización cardiofetal intraparto según FIGO',
      say: 'Bienvenidos a la clase sobre distocias del trabajo de parto, distocia de hombros y monitorización intraparto. Esta sesión aborda situaciones de alta exigencia médica en la sala de partos. Aprenderemos a reconocer los trastornos de progresión del parto, dominaremos el algoritmo secuencial ante una distocia de hombros ejecutando McRoberts y Mazzanti mientras evitamos maniobras letales, y aprenderemos a interpretar con seguridad las desaceleraciones en el registro cardiofetal continuo. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Mecánica del parto',
      title: 'Tríada etiopatogénica de las distocias del trabajo de parto',
      nodes: [
        { id: 'tri', col: 0, row: 1, k: 'start', t: 'Etiología de la distocia', s: 'Alteración en el motor, el canal pelviano o el objeto fetal' },
        { id: 'mot', col: 1, row: 0, k: 'mech', t: 'Distocia dinámica (el motor)', s: 'Hipodinamia o incoordinación de la contractilidad uterina corregible con oxitocina' },
        { id: 'pel', col: 1, row: 1, k: 'risk', t: 'Distocia ósea (el canal)', s: 'Estenosis del estrecho superior, medio o inferior de la pelvis materna' },
        { id: 'fet', col: 1, row: 2, k: 'trap', t: 'Distocia fetal (el objeto)', s: 'Macrosomía, presentaciones deflexionadas o asinclitismo marcado' },
        { id: 'dcp', col: 2, row: 1, k: 'trap', t: 'Desproporción céfalo-pélvica', s: 'Incompatibilidad dimensional absoluta que exige resolución por cesárea' },
      ],
      edges: [
        { from: 'tri', to: 'mot', label: 'fuerza' },
        { from: 'tri', to: 'pel', label: 'conducto' },
        { from: 'tri', to: 'fet', label: 'móvil' },
        { from: 'pel', to: 'dcp', label: 'estrechez' },
        { from: 'fet', to: 'dcp', label: 'volumen' },
      ],
      steps: [
        {
          show: ['tri', 'mot'],
          note: 'Distocias de origen dinámico',
          say: 'Las distocias dinámicas corresponden a alteraciones cuantitativas o cualitativas de las contracciones uterinas. La hipodinamia con menos de tres contracciones cada diez minutos es la anomalía más común, y suele corregirse exitosamente con aceleración mediante infusión de oxitocina y rotura artificial de membranas siempre que no exista obstrucción ósea.',
        },
        {
          show: ['pel', 'fet', 'dcp'],
          note: 'Desproporción céfalo-pélvica y distocias mecánicas',
          say: 'Cuando existe una estenosis de los estrechos pélvicos o un feto voluminoso con diámetro biparietal que excede el canal, se configura una desproporción céfalo-pélvica. En este escenario puramente mecánico, forzar la dinámica con oxitocina está terminantemente prohibido porque precipita la rotura uterina y la muerte fetal por asfixia.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Trastornos de la progresión',
      title: 'Distocias de la Fase Activa y del Período Expulsivo',
      cards: [
        {
          title: 'Distocias de la Fase Activa',
          tag: 'Dilatación mayor a 5 cm',
          kind: 'alert',
          items: [
            {
              t: 'Fase activa prolongada',
              d: 'Progresión de la dilatación cervical menor a un centímetro por hora con buena dinámica',
              say: 'Hablamos de fase activa prolongada cuando, tras haber alcanzado los cinco centímetros de dilatación con dinámica uterina de tres a cinco contracciones cada diez minutos, la velocidad de dilatación progresa a menos de un centímetro por hora, prolongando excesivamente el trabajo de parto.',
            },
            {
              t: 'Detención secundaria de la dilatación',
              d: 'Cese total de la dilatación cervical durante dos horas o más en fase activa franca',
              say: 'La detención secundaria de la dilatación se certifica cuando no se constata ninguna progresión en los centímetros de dilatación cervical durante dos horas completas de dinámica uterina activa y vigorosa con membranas rotas, obligando a sospechar desproporción céfalo-pélvica.',
            },
          ],
        },
        {
          title: 'Distocias del Período Expulsivo',
          tag: 'Dilatación completa de 10 cm',
          kind: 'criteria',
          items: [
            {
              t: 'Detención del descenso en el expulsivo',
              d: 'Ausencia de progresión de la cabeza tras una hora en multíparas o dos horas en primigestas',
              say: 'La detención del descenso se define por la ausencia total de progresión de la presentación fetal tras una hora de pujos dirigidos en multíparas o tras dos horas en primíparas sin analgesia epidural, requiriendo una cuidadosa reevaluación de la estática fetal.',
            },
            {
              t: 'Evaluación del nivel de Lee',
              d: 'Si la cabeza está encajada bajo plano dos se evalúa fórceps; si es alta cesárea',
              say: 'Si la cabeza fetal se encuentra firmemente encajada en plano tres o cuatro de Lee con variedad de posición clara y periné distensible, puede considerarse un parto instrumental con fórceps; por el contrario, si la cabeza permanece en plano cero o superior, la única conducta admisible es la cesárea.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnóstico semiológico',
      title: 'Criterios de Desproporción Céfalo-Pélvica (DCP) en la Sala de Partos',
      head: ['Signo clínico explorado', 'Hallazgo patológico característico', 'Significado obstétrico'],
      rows: [
        {
          cells: ['Progresión cervical', 'Detención de la dilatación por más de dos horas con dinámica vigorosa', 'Falta de encajamiento por disparidad dimensional'],
          say: 'La detención completa de la dilatación cervical durante dos horas o más en presencia de contracciones uterinas potentes y regulares traduce la incapacidad biomecánica del polo cefálico para franquear el estrecho superior de la pelvis materna.',
        },
        {
          cells: ['Formación de tumor de parto', 'Caput succedaneum exuberante y cabalgamiento de suturas parietales', 'Sufrimiento mecánico del cráneo fetal contra el anillo pélvico'],
          say: 'La formación precoz de un voluminoso tumor del parto o caput succedaneum sumado al cabalgamiento acentuado de los huesos parietales demuestra que el cráneo fetal está sometido a una fuerza compresiva extrema contra un canal óseo que no cede.',
        },
        {
          cells: ['Altura de la presentación', 'Presentación detenida en plano negativo o espinas ciáticas', 'Contraindicación de instrumentación vaginal y mandato de cesárea'],
          say: 'Una presentación fetal que se mantiene por encima o a nivel de las espinas ciáticas en plano cero a pesar de pujos expulsivos intensos y dirigidos confirma la desproporción céfalo-pélvica y exige la interrupción quirúrgica inmediata por cesárea.',
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Emergencia de guardia',
      title: 'Distocia de Hombros: biomecánica del impacto y Signo de la Tortuga',
      nodes: [
        { id: 'nac', col: 0, row: 1, k: 'start', t: 'Salida de la cabeza fetal', s: 'Desprendimiento cefálico normal en expulsivo' },
        { id: 'tor', col: 1, row: 1, k: 'alert', t: 'Signo de la tortuga patognomónico', s: 'La cabeza se retrae violentamente contra el periné materno' },
        { id: 'imp', col: 2, row: 1, k: 'trap', t: 'Impactación del hombro anterior', s: 'El diámetro biacromial queda atrapado detrás de la sínfisis púbica' },
        { id: 'com', col: 3, row: 0, k: 'trap', t: 'Compresión severa del cordón', s: 'Colapso de los vasos umbilicales con hipoxia y acidosis fetal progresiva' },
        { id: 'cla', col: 3, row: 2, k: 'good', t: 'Rescate en menos de cinco minutos', s: 'Aplicación reglada del protocolo HELPERR para evitar daño neurológico' },
      ],
      edges: [
        { from: 'nac', to: 'tor', label: 'retracción' },
        { from: 'tor', to: 'imp', label: 'fijación ósea' },
        { from: 'imp', to: 'com', label: 'anoxia' },
        { from: 'imp', to: 'cla', label: 'maniobras de rescate' },
      ],
      steps: [
        {
          show: ['nac', 'tor', 'imp'],
          note: 'El signo de la tortuga y el impacto subpúbico',
          say: 'Al momento de desprenderse la cabeza fetal, esta se retrae bruscamente contra el periné materno en el clásico signo de la tortuga. El hombro anterior fetal queda atrapado mecánicamente detrás del reborde superior de la sínfisis púbica impidiendo la salida del tórax y bloqueando el nacimiento.',
        },
        {
          show: ['com', 'cla'],
          note: 'Asfixia inminente y ventana de supervivencia',
          say: 'Con el tórax atrapado, los vasos umbilicales del cordón se comprimen de forma crítica contra el estrecho pélvico. El equipo médico dispone de una ventana de menos de cinco minutos para ejecutar las maniobras de rescate y desimpactar el hombro antes de que la asfixia severa cause daño cerebral irreversible.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Prohibiciones letales',
      title: 'Maniobras Estrictamente Prohibidas en la Distocia de Hombros',
      cards: [
        {
          title: '¡PROHIBIDA LA MANIOBRA DE KRISTELLER!',
          tag: 'Presión fúndica letal',
          kind: 'alert',
          items: [
            {
              t: 'Prohibido empujar el fondo del útero',
              d: 'Impacta con mayor violencia el hombro anterior contra el hueso púbico materno',
              say: 'La maniobra de Kristeller o presión manual sobre el fondo del útero está terminantemente prohibida ante una distocia de hombros. Lejos de ayudar, la fuerza ejercida desde el fondo empuja la clavícula fetal contra el pubis, clavando e impactando aún más el hombro anterior.',
            },
            {
              t: 'Riesgo de rotura uterina y muerte fetal',
              d: 'Provoca desgarros perineales severos grado cuatro y rotura uterina catastrófica',
              say: 'Esta maniobra proscrita provoca desgarros perineales severos de tercer y cuarto grado, inversión uterina aguda y rotura del segmento uterino inferior, con altísimo riesgo de muerte materna y fetal por hemorragia masiva.',
            },
          ],
        },
        {
          title: '¡PROHIBIDA LA TRACCIÓN FORZADA DE LA CABEZA!',
          tag: 'Lesión del plexo braquial',
          kind: 'alert',
          items: [
            {
              t: 'Prohibido balancear o traccionar el cuello',
              d: 'Elonga y desgarra las raíces nerviosas del plexo braquial superior cervical cinco y cervical seis',
              say: 'Ejercer tracción axial forzada o lateralizar bruscamente la cabeza del feto está formalmente prohibido. Es el mecanismo biomecánico exacto que estira y avulsiona las raíces nerviosas cervical cinco y cervical seis del plexo braquial fetal.',
            },
            {
              t: 'Parálisis braquial de Erb-Duchenne',
              d: 'Mano en propina de mozo con parálisis de abducción y rotación externa del hombro',
              say: 'Esta tracción genera la parálisis braquial superior de Erb-Duchenne, dejando la extremidad superior inmóvil con el brazo en aducción, rotación interna y pronación de la mano, conocida universalmente en semiología como postura en propina de camarero o mozo.',
            },
          ],
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Algoritmo de rescate',
      title: 'Maniobras de Primera Línea: McRoberts y Mazzanti',
      nodes: [
        { id: 'dia', col: 0, row: 1, k: 'start', t: 'Diagnóstico de distocia', s: 'Activar código de alerta, pedir ayuda y no traccionar' },
        { id: 'mcr', col: 1, row: 0, k: 'good', t: '1. Maniobra de McRoberts', s: 'Hiperflexión y abducción máxima de los muslos maternos sobre el abdomen' },
        { id: 'maz', col: 1, row: 2, k: 'good', t: '2. Presión suprapúbica (Mazzanti)', s: 'Presión firme con el talón de la mano oblicua sobre el hombro anterior' },
        { id: 'lib', col: 2, row: 1, k: 'good', t: 'Desimpactación exitosa en más del 85%', s: 'Aplanamiento del promontorio sacro y rotación del hombro anterior' },
      ],
      edges: [
        { from: 'dia', to: 'mcr', label: 'asistentes' },
        { from: 'dia', to: 'maz', label: 'simultáneo' },
        { from: 'mcr', to: 'lib', label: 'apertura pélvica' },
        { from: 'maz', to: 'lib', label: 'aducción de hombro' },
      ],
      steps: [
        {
          show: ['dia', 'mcr'],
          note: 'Maniobra de McRoberts: hiperflexión de muslos',
          say: 'Dos operadores hiperflexionan y abducen con firmeza ambos muslos de la madre contra su propio abdomen. Esta maniobra de McRoberts aplana la curvatura de la columna lumbosacra, bascula la sínfisis del pubis hacia arriba y ensancha significativamente el diámetro conjugado anterior.',
        },
        {
          show: ['maz', 'lib'],
          note: 'Presión suprapúbica de Mazzanti simultánea',
          say: 'De forma simultánea y coordinada, otro operador aplica presión firme con el talón de la mano justo sobre el hueso púbico en sentido oblicuo hacia el tórax fetal, maniobra de Mazzanti, aduciendo el hombro para que se deslice suavemente por debajo del pubis.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Maniobras secundarias',
      title: 'Maniobras Internas y de Rescate Secundario en Distocia de Hombros',
      cards: [
        {
          title: 'Maniobras Rotacionales y de Extracción',
          tag: 'Maniobras internas',
          kind: 'pharma',
          items: [
            {
              t: 'Maniobra de Rubin y Woods (sacacorchos)',
              d: 'Rotación del hombro anterior mediante presión en la cara posterior hacia el diámetro oblicuo',
              say: 'Si la maniobra de McRoberts combinada con presión suprapúbica no logra liberar el hombro en treinta a sesenta segundos, introducimos dos dedos en la vagina para empujar la cara posterior del hombro anterior, rotándolo hacia el diámetro oblicuo pelviano mediante la maniobra de Rubin o Woods.',
            },
            {
              t: 'Maniobra de Jacquemier (hombro posterior)',
              d: 'Se toma la mano fetal posterior y se barre sobre el tórax para extraer todo el brazo',
              say: 'La maniobra de Jacquemier consiste en introducir la mano enguantada por la concavidad sacra, ubicar el brazo fetal posterior, flexionar el codo y barrer el antebrazo sobre el pecho para exteriorizarlo. Al extraer el brazo posterior el diámetro biacromial se reduce drásticamente facilitando la salida inmediata.',
            },
          ],
        },
        {
          title: 'Maniobras Posturales y de Extremo Recurso',
          tag: 'Último recurso',
          kind: 'alert',
          items: [
            {
              t: 'Maniobra de Gaskin (cuadrupedia)',
              d: 'Colocar a la paciente en cuatro apoyos aumentando los diámetros pélvicos sacros',
              say: 'La maniobra de Gaskin consiste en colocar a la paciente en posición de cuatro apoyos o cuadrupedia sobre manos y rodillas. Esta postura aprovecha el efecto de la gravedad y amplía las dimensiones de la pelvis posterior, logrando desimpactar el hombro anterior atrapado.',
            },
            {
              t: 'Maniobra de Zavanelli (reintroducción cefálica)',
              d: 'Flexionar y reintroducir la cabeza fetal en la pelvis para realizar cesárea de emergencia',
              say: 'Como maniobra de rescate heroico ante falla total de las maniobras previas en feto vivo, se aplica tocolisis aguda y se realiza la maniobra de Zavanelli, flexionando y reintroduciendo la cabeza fetal en el canal del parto para trasladar de inmediato a pabellón y extraer al recién nacido mediante cesárea.',
            },
          ],
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Monitoreo intraparto',
      title: 'Monitorización Electrónica Cardiofetal (CTG) según Guías FIGO',
      nodes: [
        { id: 'con', col: 0, row: 1, k: 'start', t: 'Contracción miometrial fisiológica', s: 'Aumento de presión intramiometrial que ocluye temporalmente arteriolas espirales' },
        { id: 'per', col: 1, row: 1, k: 'mech', t: 'Pausa del flujo intervelloso', s: 'Cese transitorio del intercambio placentario de oxígeno durante 60 segundos' },
        { id: 'res', col: 2, row: 1, k: 'good', t: 'Reserva placentaria fetal normal', s: 'Feto sano mantiene oxigenación tisular mediante hemoglobina fetal y glucógeno' },
        { id: 'hip', col: 2, row: 2, k: 'trap', t: 'Insuficiencia placentaria previa', s: 'El feto entra en hipoxia aguda, activa quimiorreceptores y sufre acidosis' },
        { id: 'des', col: 3, row: 2, k: 'trap', t: 'Desaceleraciones patológicas tardías', s: 'DIP II con caída de variabilidad: signo crítico de asfixia intraparto' },
      ],
      edges: [
        { from: 'con', to: 'per', label: 'isquemia transitoria' },
        { from: 'per', to: 'res', label: 'tolerancia normal' },
        { from: 'per', to: 'hip', label: 'baja reserva' },
        { from: 'hip', to: 'des', label: 'quimiorreflejo' },
      ],
      steps: [
        {
          show: ['con', 'per', 'res'],
          note: 'Fisiología de la contracción uterina normal',
          say: 'Durante cada contracción la presión intramiometrial supera la presión arterial materna, cerrando temporalmente el flujo de sangre a la placenta. Un feto sano tolera perfectamente esta pausa fisiológica manteniendo su variabilidad cardíaca normal entre cinco y veinticinco latidos por minuto.',
        },
        {
          show: ['hip', 'des'],
          note: 'Hipoxia fetal y génesis de desaceleraciones tardías',
          say: 'Si la placenta no tiene reserva funcional suficiente, cada contracción induce hipoxemia aguda en el feto. Esto desencadena una estimulación refleja por quimiorreceptores produciendo una desaceleración tardía o DIP dos, indicadora de asfixia y acidosis metabólica en evolución.',
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Semiología cardiotocográfica',
      title: 'Clasificación de Desaceleraciones Intraparto en el Registro Cardiofetal',
      head: ['Tipo de desaceleración', 'Morfología y relación con contracción', 'Fisiopatología y conducta'],
      rows: [
        {
          cells: ['DIP I (temprana o precoz)', 'En espejo: el nadir coincide exactamente con el acmé de la contracción', 'Compresión de la cabeza fetal con reflejo vagal puro; fisiológica no requiere cesárea'],
          say: 'Las desaceleraciones precoces o DIP uno son caídas de la frecuencia cardíaca que calcan simétricamente la morfología de la contracción en imagen en espejo. Se deben a compresión fisiológica de la cabeza fetal que estimula el nervio vago; son enteramente benignas y no requieren cesárea ni medidas de reanimación.',
        },
        {
          cells: ['DIP II (tardía patológica)', 'Comienza tarde: su nadir ocurre tras el acmé de la contracción', 'Hipoxia fetal por insuficiencia placentaria; exige reanimación y cesárea urgente'],
          say: 'Las desaceleraciones tardías o DIP dos se inician tarde respecto a la contracción y su nadir ocurre cuando la contracción ya ha finalizado. Son el signo inequívoco de hipoxia fetal por insuficiencia útero-placentaria y acidosis metabólica tisular, exigiendo interrupción inmediata del parto por cesárea si son recurrentes.',
        },
        {
          cells: ['DIP III (variables o en espiga)', 'Descenso brusco en forma de V o W de rápida recuperación', 'Compresión transitoria del cordón umbilical; cambio de posición y vigilar'],
          say: 'Las desaceleraciones variables o DIP tres presentan caídas y recuperaciones abruptas con morfología en letra uve o doble uve, causadas por la compresión mecánica transitoria del cordón umbilical. Suelen resolverse cambiando a la paciente a decúbito lateral izquierdo para descomprimir el cordón.',
        },
        {
          cells: ['Patrón Sinusoidal', 'Ondulación suave y regular oscilante sin aceleraciones', 'Anemia fetal severa por isoinmunización o vasa previa; cesárea o transfusión inmediata'],
          say: 'El patrón sinusoidal es un trazado ondulatorio continuo y suave con aspecto de onda sinusoidal regular sin aceleraciones. Es un hallazgo patognomónico de anemia fetal severa y descompensación hemodinámica crítica secundaria a isoinmunización Rh o rotura de vasa previa.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo en sala de partos',
      title: 'Categorización FIGO y Medidas de Reanimación Intrauterina',
      cards: [
        {
          title: 'Categorías del Trazado Intraparto',
          tag: 'Clasificación de riesgo',
          kind: 'criteria',
          items: [
            {
              t: 'Categoría I (Normal / Eutócica)',
              d: 'Línea de base 110 a 160 lpm con variabilidad moderada y sin DIP II ni DIP III',
              say: 'El trazado cardiotocográfico categoría uno predice con máxima confiabilidad un estado ácido-base fetal normal en ese momento, permitiendo continuar la evolución espontánea del trabajo de parto con monitorización intermitente estándar.',
            },
            {
              t: 'Categoría III (Anormal / Sospechosa)',
              d: 'Variabilidad ausente asociada a bradicardia sostenida DIP II recurrentes o sinusoidal',
              say: 'El trazado categoría tres asocia ausencia de variabilidad con bradicardia sostenida, desaceleraciones tardías recurrentes o patrón sinusoidal. Refleja acidosis metabólica severa y alto riesgo de daño neurológico permanente, requiriendo cesárea de extrema urgencia.',
            },
          ],
        },
        {
          title: 'Medidas de Reanimación Intrauterina',
          tag: 'Optimización de flujo',
          kind: 'pharma',
          items: [
            {
              t: 'Decúbito lateral izquierdo y bolo salino',
              d: 'Descomprime la vena cava inferior y optimiza el gasto cardíaco y la perfusión uterina',
              say: 'Colocamos a la paciente en decúbito lateral izquierdo estricto para descomprimir los grandes vasos y pasamos una carga rápida de solución fisiológica endovenosa.',
            },
            {
              t: 'Suspender oxitocina e indicar tocolisis de urgencia',
              d: 'Cesar estimulantes uterinos y administrar tocolítico rápido ante hiperdinamia',
              say: 'Es mandatorio suspender de inmediato cualquier infusión de oxitocina para frenar la tetania miometrial y administrar tocolisis aguda si hay hiperdinamia.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de emergencia',
      title: 'Algoritmo de Manejo de la Emergencia de Distocia de Hombros',
      say: 'Revisemos la secuencia ordenada de rescate ante una distocia de hombros en la sala de partos.',
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Distocia de Hombros · Maniobras de Primera Línea',
      stem: 'Durante la atención de un parto vaginal de una paciente con feto macrosómico, se produce la salida de la cabeza fetal, la cual inmediatamente se retrae con fuerza contra el periné (signo de la tortuga). A pesar de una tracción axial suave, el hombro anterior queda impactado detrás de la sínfisis púbica impidiendo la salida del tórax.',
      question: '¿Cuáles son las dos maniobras de primera línea recomendadas para resolver esta emergencia obstétrica?',
      options: [
        { letter: 'A', text: 'Maniobra de Kristeller enérgica sobre el fondo uterino y tracción cefálica forzada' },
        { letter: 'B', text: 'Maniobra de McRoberts combinada con presión suprapúbica de Mazzanti' },
        { letter: 'C', text: 'Realización inmediata de cesárea con feto desprendido (maniobra de Zavanelli)' },
        { letter: 'D', text: 'Fractura intencional de ambas clavículas fetales como maniobra primaria' },
        { letter: 'E', text: 'Sinfisiotomía quirúrgica inmediata bajo anestesia general' },
      ],
      correct: 'B',
      explanation: 'La conducta inmediata ante una distocia de hombros (anunciada por el signo de la tortuga) es la ejecución secuencial del protocolo de primera línea: Maniobra de McRoberts (hiperflexión y abducción forzada de los muslos de la madre contra su abdomen) asociada a presión suprapúbica (Maniobra de Mazzanti). Esta combinación desimpacta más del 85% de los hombros sin traumatismo fetal. La maniobra de Kristeller está formalmente contraindicada.',
      say: {
        stem: 'Durante un parto con feto macrosómico se produce la salida de la cabeza que se retrae fuertemente contra el periné con impactación de hombros.',
        question: '¿Cuáles son las dos maniobras de primera línea recomendadas para resolver esta emergencia?',
        options: 'La opción A propone Kristeller y tracción. La B maniobra de McRoberts combinada con presión suprapúbica de Mazzanti. La C maniobra de Zavanelli. La D fractura de clavículas. La E sinfisiotomía. Piénsalo.',
        answer: 'La respuesta correcta es la B. La combinación de hiperflexión de muslos de McRoberts con presión suprapúbica de Mazzanti resuelve más del ochenta y cinco por ciento de las distocias de hombros.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Interpretación de Desaceleraciones Precoces (DIP I)',
      stem: 'Durante la fase activa de un trabajo de parto a término, el trazado del monitoreo cardiofetal continuo muestra desaceleraciones periódicas de la frecuencia cardíaca fetal que comienzan de forma simultánea con el inicio de la contracción uterina, alcanzando su nadir exactamente en el punto de máxima presión de la contracción (en imagen en espejo) y retornando a la línea de base de 135 lpm una vez que finaliza la contracción. La variabilidad se mantiene moderada en 15 lpm.',
      question: '¿Cuál es el significado fisiopatológico de este hallazgo y la conducta a seguir?',
      options: [
        { letter: 'A', text: 'Indica acidosis fetal severa por desprendimiento de placenta; realizar cesárea' },
        { letter: 'B', text: 'Corresponde a desaceleraciones precoces (DIP I) por compresión cefálica; son fisiológicas' },
        { letter: 'C', text: 'Indica hipoxia fetal progresiva; administrar tocolíticos y suspender el parto' },
        { letter: 'D', text: 'Corresponde a compresión crítica de cordón; trasladar a pabellón en decúbito prono' },
        { letter: 'E', text: 'Indica anemia fetal aguda grave; solicitar sangre para transfusión intrauterina' },
      ],
      correct: 'B',
      explanation: 'Las desaceleraciones que coinciden sincrónicamente con la contracción uterina en imagen en espejo con nadir en el acmé corresponden a Desaceleraciones Precoces o DIP I. Son consecuencia fisiológica de la compresión transitoria de la cabeza fetal encajada en el canal del parto, lo que desencadena un reflejo vagal parasimpático que disminuye la frecuencia cardíaca transitoriamente. Al mantener variabilidad normal no indican hipoxia ni acidosis y no requieren ninguna intervención quirúrgica.',
      say: {
        stem: 'Durante el trabajo de parto se observan desaceleraciones en espejo que coinciden con el acmé de la contracción y variabilidad conservada de quince latidos.',
        question: '¿Cuál es el significado fisiopatológico de este hallazgo y la conducta a seguir?',
        options: 'La opción A propone acidosis y cesárea. La B desaceleraciones precoces por compresión cefálica que son fisiológicas. La C hipoxia e indicación de tocolíticos. La D compresión de cordón. La E anemia fetal. Piénsalo.',
        answer: 'La respuesta correcta es la B. Las desaceleraciones en espejo o DIP uno son fisiológicas por compresión de la cabeza fetal y no requieren cesárea ni frenar el parto.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Desaceleraciones Tardías (DIP II) y Pérdida de Variabilidad',
      stem: 'Una multípara en trabajo de parto activo a 7 cm de dilatación presenta en el registro cardiofetal intraparto desaceleraciones repetidas cuya caída de la frecuencia cardíaca comienza después del acmé de la contracción uterina, alcanzando el nadir a los 30 segundos tras la contracción y retornando lentamente a la línea de base. Se constata además una línea de base en 155 lpm con variabilidad ausente (< 3 lpm).',
      question: '¿Cuál es la conducta terapéutica indicada?',
      options: [
        { letter: 'A', text: 'Observación expectante durante 4 horas para evaluar el descenso espontáneo' },
        { letter: 'B', text: 'Aumentar la dosis de oxitocina endovenosa para acelerar el expulsivo' },
        { letter: 'C', text: 'Medidas de reanimación intrauterina y proceder de inmediato a cesárea de urgencia' },
        { letter: 'D', text: 'Administrar antibióticos orales y solicitar urocultivo' },
        { letter: 'E', text: 'Indicar anestesia peridural para mejorar la relajación del piso pelviano' },
      ],
      correct: 'C',
      explanation: 'El registro describe desaceleraciones tardías recurrentes (DIP II) asociadas a variabilidad ausente (trazado FIGO Categoría III). Este patrón refleja insuficiencia placentaria severa con hipoxia tisular fetal, acidemia metabólica en curso y riesgo de encefalopatía o muerte intrauterina. La conducta mandatoria es iniciar reanimación intrauterina inmediata (decúbito lateral, fluidos, suspender oxitocina) y proceder a la interrupción quirúrgica expedita mediante operación cesárea.',
      say: {
        stem: 'A siete centímetros de dilatación aparecen desaceleraciones tardías repetidas con nadir desfasado tras la contracción y variabilidad prácticamente ausente.',
        question: '¿Cuál es la conducta terapéutica indicada en esta paciente?',
        options: 'La opción A propone esperar cuatro horas. La B aumentar oxitocina. La C reanimación intrauterina y cesárea de urgencia inmediata. La D antibióticos. La E anestesia epidural. Piénsalo.',
        answer: 'La respuesta correcta es la C. Los DIP dos recurrentes con pérdida de variabilidad constituyen un trazado categoría tres que exige cesárea de urgencia bajo medidas de reanimación.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Complicación Traumática por Tracción en Distocia de Hombros',
      stem: '¿Cuál es la complicación neurológica neonatal clásica más frecuente derivada de la aplicación de una tracción lateral excesiva y violenta sobre la cabeza fetal durante el desprendimiento en un parto complicado por distocia de hombros?',
      question: 'Seleccione la lesión neurológica asociada:',
      options: [
        { letter: 'A', text: 'Parálisis de Bell del nervio facial' },
        { letter: 'B', text: 'Parálisis braquial superior de Erb-Duchenne (raíces C5-C6)' },
        { letter: 'C', text: 'Parálisis braquial inferior de Klumpke (raíces C8-T1)' },
        { letter: 'D', text: 'Parálisis del nervio ciático poplíteo externo' },
        { letter: 'E', text: 'Parálisis frénica bilateral con luxación atloidoaxoidea' },
      ],
      correct: 'B',
      explanation: 'La complicación neurológica clásica producida por la tracción cefálica forzada y el balanceo lateral del cuello fetal durante la distocia de hombros es la Parálisis Braquial Obstétrica Superior o de Erb-Duchenne, provocada por el estiramiento o avulsión de las raíces nerviosas cervical cinco y cervical seis del plexo braquial. Se manifiesta clínicamente por brazo aducido y en rotación interna con pronación del antebrazo (signo clásico de la propina de mozo).',
      say: {
        stem: 'Se consulta cuál es la complicación neurológica neonatal clásica derivada de aplicar tracción violenta sobre la cabeza fetal durante una distocia de hombros.',
        question: '¿Cuál es la lesión neurológica producida?',
        options: 'La opción A propone parálisis facial de Bell. La B parálisis braquial superior de Erb-Duchenne de raíces cervical cinco y cervical seis. La C parálisis inferior de Klumpke. La D parálisis ciática. La E luxación cervical. Piénsalo.',
        answer: 'La respuesta correcta es la B. La tracción forzada elonga las raíces cervical cinco y cervical seis del plexo braquial originando la parálisis de Erb-Duchenne con postura en propina de mozo.',
      },
    },

    {
      type: 'points',
      kicker: 'Reglas de oro EUNACOM',
      title: 'Conceptos Clave de Distocias y Monitoreo para el EUNACOM',
      cards: [
        {
          title: 'Distocia de Hombros',
          tag: 'Prohibiciones y rescate',
          kind: 'alert',
          items: [
            {
              t: 'Nunca realizar maniobra de Kristeller',
              d: 'Empujar el fondo impacta más el hombro anterior y puede romper el útero',
              say: 'La maniobra de Kristeller está formalmente proscrita en distocia de hombros porque enclava con mayor fuerza el hombro anterior contra el pubis y produce rotura uterina catastrófica con hemorragia masiva.',
            },
            {
              t: 'Primera línea: McRoberts más Mazzanti',
              d: 'Hiperflexión de muslos y presión suprapúbica coordinada para desimpactar',
              say: 'La maniobra de McRoberts con hiperflexión forzada de muslos combinada con la presión suprapúbica de Mazzanti resuelve más del ochenta y cinco por ciento de las distocias de hombros de forma no traumática.',
            },
          ],
        },
        {
          title: 'Monitoreo Intraparto FIGO',
          tag: 'DIP I vs DIP II',
          kind: 'key',
          items: [
            {
              t: 'DIP I son fisiológicos por compresión',
              d: 'En espejo con la contracción y con variabilidad normal no exigen cirugía',
              say: 'Las desaceleraciones precoces o DIP uno son imágenes en espejo benignas originadas por compresión mecánica del polo cefálico y no justifican ninguna indicación quirúrgica de cesárea.',
            },
            {
              t: 'DIP II tardíos indican asfixia y cesárea',
              d: 'Nadir desfasado tras la contracción refleja insuficiencia útero-placentaria severa',
              say: 'Las desaceleraciones tardías repetidas con variabilidad mínima traducen acidosis hipóxica fetal. Si te llevas una sola idea de hoy: un trazado categoría tres con desaceleraciones tardías y pérdida de variabilidad exige interrupción inmediata por la vía más expedita. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Rescate en la Emergencia de Distocia de Hombros',
    root: N(
      'start',
      'Signo de la Tortuga / Impactación de Hombros',
      '¡NO TRACCIONAR LA CABEZA! · ¡NO REALIZAR KRISTELLER! · Activar código de alarma y cronómetro',
      'Diagnosticamos la distocia de hombros ante la retracción cefálica y prohibimos traccionar o empujar el fondo.',
      [
        'Maniobras de Primera Línea (Éxito mayor al 85%)',
        N(
          'do',
          'McRoberts (Hiperflexión de muslos) + Mazzanti (Presión suprapúbica)',
          'Dos asistentes flexionan los muslos sobre el abdomen mientras otro presiona sobre el pubis',
          'Iniciamos de inmediato la maniobra de McRoberts coordinada con la presión suprapúbica de Mazzanti.',
          [
            'Desimpactación exitosa del hombro anterior',
            N(
              'ok',
              'Parto vaginal completado con éxito',
              'Extracción suave del tórax, alumbramiento activo y revisión exhaustiva de desgarros',
              'Lograda la desimpactación completamos el nacimiento y revisamos posibles desgarros del canal blando.',
            ),
          ],
          [
            'Persistencia de la impactación tras treinta a sesenta segundos',
            N(
              'alert',
              'Paso inmediato a Maniobras Internas de Segunda Línea',
              'Maniobra de Rubin o Woods (sacacorchos) o extracción de brazo posterior de Jacquemier',
              'Si no desimpacta pasamos sin demora a maniobras internas como el sacacorchos o la extracción del brazo posterior.',
            ),
          ],
        ),
      ],
    ),
  },
};
