// Clase 3.15 — guion docente escrito a mano (estándar Módulo 3 · Obstetricia).
// Fuente clínica: books/scripts/dataset_obstetricia.cjs (ob-15).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ob-15',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Amenaza de parto prematuro, tocolíticos de primera línea, maduración pulmonar con corticoides y neuroprotección fetal con sulfato de magnesio',
      say: 'Bienvenidos a la clase sobre síndrome de parto prematuro. El parto pretérmino representa la principal causa de morbimortalidad neonatal no malformativa en el mundo. En esta sesión aprenderemos a diagnosticar con precisión la amenaza de parto prematuro mediante cervicometría transvaginal, utilizaremos correctamente el nifedipino como tocolítico de primera línea, dominaremos los esquemas de corticoterapia y neuroprotección con sulfato de magnesio, y memorizaremos las contraindicaciones absolutas de la tocolisis. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología perinatal',
      title: 'Vías patogénicas del síndrome de parto prematuro',
      nodes: [
        { id: 'est', col: 0, row: 1, k: 'start', t: 'Vías etiológicas comunes', s: 'Infección intraamniótica subclínica, sobredistensión, isquemia útero-placentaria o estrés' },
        { id: 'pro', col: 1, row: 1, k: 'mech', t: 'Cascapa inflamatoria y prostaglandinas', s: 'Liberación de citocinas que estimulan la síntesis de prostaglandina E2 y F2 alfa' },
        { id: 'cue', col: 2, row: 0, k: 'effect', t: 'Remodelado y acortamiento cervical', s: 'Degradación de colágeno cervical con reblandecimiento y borramiento precoz' },
        { id: 'din', col: 2, row: 2, k: 'risk', t: 'Activación del miometrio uterino', s: 'Aumento de uniones en hendidura receptores de oxitocina y contracciones regulares' },
        { id: 'par', col: 3, row: 1, k: 'trap', t: 'Nacimiento pretérmino inminente', s: 'Parto entre las 22 y 36 semanas con 6 días con secuelas de prematurez' },
      ],
      edges: [
        { from: 'est', to: 'pro', label: 'activación inmune' },
        { from: 'pro', to: 'cue', label: 'colagenólisis' },
        { from: 'pro', to: 'din', label: 'contractilidad' },
        { from: 'cue', to: 'par', label: 'avance' },
        { from: 'din', to: 'par', label: 'expulsión' },
      ],
      steps: [
        {
          show: ['est', 'pro'],
          note: 'Desencadenantes inflamatorios e infecciosos',
          say: 'El síndrome de parto prematuro es una vía final común activada por múltiples causas, donde la infección intraamniótica subclínica, la sobredistensión uterina en polihidramnios o gemelares y la isquemia decidual liberan interleucinas que desencadenan la síntesis masiva de prostaglandinas miometriales.',
        },
        {
          show: ['cue', 'din'],
          note: 'Maduración cervical y contractilidad uterina',
          say: 'Las prostaglandinas actúan en dos frentes simultáneos: degradan el colágeno del cuello uterino provocando su acortamiento y dilatación precoz, y activan las uniones de hendidura en las células miometriales generando contracciones rítmicas dolorosas y sostenidas.',
        },
        {
          show: ['par'],
          note: 'Evolución natural al parto prematuro',
          say: 'Si el proceso no se interrumpe oportunamente a tiempo, culmina en el parto prematuro entre las veintidós y treinta y seis semanas con seis días, exponiendo al recién nacido al síndrome de distrés respiratorio, hemorragia intraventricular, enterocolitis y parálisis cerebral.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Definiciones y diagnóstico',
      title: 'Amenaza vs Trabajo de Parto Prematuro y Valor de la Cervicometría',
      cards: [
        {
          title: 'Definiciones Clínicas Clásicas',
          tag: 'Criterios de diagnóstico',
          kind: 'key',
          items: [
            {
              t: 'Amenaza de Parto Prematuro (APP)',
              d: 'Contracciones dolorosas frecuentes con modificaciones cervicales incipientes (cuello menor a 25 mm)',
              say: 'La amenaza de parto prematuro se define por la presencia de contracciones uterinas dolorosas y frecuentes asociadas a modificaciones cervicales progresivas, pero sin superar los tres centímetros de dilatación ni entrar en fase activa irreversible.',
            },
            {
              t: 'Trabajo de Parto Prematuro Franco (TPP)',
              d: 'Dinámica uterina persistente con dilatación cervical igual o mayor a cuatro centímetros',
              say: 'El trabajo de parto prematuro franco se diagnostica cuando existe dinámica uterina regular junto con una dilatación cervical igual o mayor a cuatro centímetros o borramiento completo, escenario en el cual el parto es prácticamente inevitable a corto plazo.',
            },
          ],
        },
        {
          title: 'Cervicometría Transvaginal',
          tag: 'Estándar de oro predictivo',
          kind: 'criteria',
          items: [
            {
              t: 'Medición ecográfica con vejiga vacía',
              d: 'Distancia lineal entre el orificio cervical interno y el externo por vía transvaginal',
              say: 'La ecografía transvaginal con vejiga vacía es el estándar de oro para medir la longitud cervical, siendo mucho más reproducible y precisa que el tacto vaginal manual.',
            },
            {
              t: 'Punto de corte crítico de veinticinco milímetros',
              d: 'Longitud cervical menor a 25 mm define cérvix corto y predice alto riesgo de parto pretérmino',
              say: 'Una longitud cervical inferior a veinticinco milímetros antes de las veintiocho semanas define el cérvix corto y constituye el predictor independiente más potente de parto prematuro espontáneo en la práctica obstétrica.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Prevención y pesquisa',
      title: 'Estratificación del Riesgo Cervical y Prevención Primaria con Progesterona',
      head: ['Condición clínica materna', 'Hallazgo en cervicometría', 'Conducta terapéutica normada'],
      rows: [
        {
          cells: ['Antecedente de parto prematuro espontáneo previo', 'Cérvix menor a veinticinco milímetros', 'Progesterona micronizada doscientos miligramos al día vía vaginal hasta la semana treinta y seis'],
          say: 'En pacientes con antecedente de parto pretérmino previo espontáneo que presentan acortamiento cervical, la administración de progesterona micronizada vaginal nocturna reduce en casi un cincuenta por ciento la tasa de recurrencia.',
        },
        {
          cells: ['Embarazo único sin antecedentes obstétricos', 'Cérvix corto menor a veinticinco milímetros en ecografía de segundo trimestre', 'Inicio inmediato de progesterona micronizada vaginal'],
          say: 'La medición de longitud cervical por cervicometría transvaginal en la ecografía morfológica de las veinte a veinticuatro semanas permite identificar a tiempo cuellos cortos e iniciar progesterona micronizada profiláctica de forma oportuna.',
        },
        {
          cells: ['Embarazo gemelar asintomático', 'Longitud cervical mayor a veinticinco milímetros', 'Control ecográfico seriado cada dos a tres semanas sin cerclaje de rutina'],
          say: 'En gemelares con longitud cervical conservada mantenemos seguimiento ecográfico estricto, recordando que el cerclaje no está indicado de rutina en gestaciones múltiples.',
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Objetivos del tratamiento agudo',
      title: 'Tocolisis Aguda: la ventana crítica de 48 horas',
      nodes: [
        { id: 'app', col: 0, row: 1, k: 'start', t: 'Diagnóstico de APP activa', s: 'Dinámica uterina y cérvix acortado entre 24 y 34 semanas' },
        { id: 'foc', col: 1, row: 1, k: 'mech', t: 'Inicio de tocolisis con nifedipino', s: 'Frenar contracciones uterinas de forma temporal durante 48 horas' },
        { id: 'cor', col: 2, row: 0, k: 'good', t: 'Completar Betametasona', s: 'Dos dosis de corticoides separadas por 24 horas para maduración pulmonar' },
        { id: 'neu', col: 2, row: 2, k: 'good', t: 'Neuroprotección con MgSO4', s: 'Infusión endovenosa de sulfato de magnesio si es menor a 32 semanas' },
        { id: 'tra', col: 3, row: 1, k: 'good', t: 'Traslado seguro a centro terciario', s: 'Derivación medicalizada con Unidad de Cuidados Intensivos Neonatales' },
      ],
      edges: [
        { from: 'app', to: 'foc', label: 'indicación tocolítica' },
        { from: 'foc', to: 'cor', label: 'ventana terapéutica' },
        { from: 'foc', to: 'neu', label: 'ventana terapéutica' },
        { from: 'foc', to: 'tra', label: 'traslado oportuno' },
      ],
      steps: [
        {
          show: ['app', 'foc'],
          note: 'Objetivo real de la tocolisis',
          say: 'Es fundamental comprender que la tocolisis no cura la causa del parto prematuro ni prolonga el embarazo hasta el término. Su único objetivo terapéutico demostrado es frenar las contracciones durante cuarenta y ocho horas para permitir intervenciones que salvan la vida fetal.',
        },
        {
          show: ['cor', 'neu', 'tra'],
          note: 'Las tres intervenciones salvadoras durante la ventana de 48 horas',
          say: 'Estas cuarenta y ocho horas se aprovechan para completar el ciclo de dos dosis de betametasona para maduración pulmonar, administrar sulfato de magnesio para neuroprotección fetal si la gestación es menor a treinta y dos semanas, y trasladar a la madre hacia un centro de alta complejidad con unidad neonatal.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Tocolíticos de elección',
      title: 'Fármacos Tocolíticos: Nifedipino oral y alternativas',
      cards: [
        {
          title: 'Nifedipino Oral (Primera Línea en Chile)',
          tag: 'Bloqueador de canales de calcio',
          kind: 'pharma',
          items: [
            {
              t: 'Mecanismo y dosificación de inicio',
              d: 'Dosis de carga de 20 mg vía oral repetible a los 20 minutos; luego 10 a 20 mg cada 6 a 8 horas',
              say: 'El nifedipino bloquea la entrada de calcio al miocito uterino disminuyendo la contractilidad. Se inicia con una dosis de carga de veinte miligramos vía oral, repetible a los veinte minutos si persisten las contracciones, hasta un máximo de cuarenta miligramos en la primera hora.',
            },
            {
              t: 'Efectos adversos maternos frecuentes',
              d: 'Hipotensión arterial refleja, rubor facial, cefalea pulsátil y taquicardia',
              say: 'Sus efectos secundarios más comunes derivan de la vasodilatación sistémica: cefalea pulsátil, rubor facial en cuello y mejillas, mareos e hipotensión arterial con taquicardia refleja compensatoria.',
            },
          ],
        },
        {
          title: 'Alternativas Tocolíticas de Segunda Línea',
          tag: 'Atosiban e Indometacina',
          kind: 'criteria',
          items: [
            {
              t: 'Atosiban: antagonista de oxitocina',
              d: 'Infusión endovenosa continua con excelente perfil de seguridad materna pero alto costo',
              say: 'El atosiban bloquea selectivamente los receptores de oxitocina en el útero mediante infusión endovenosa continua. Posee un perfil de seguridad materno excepcional, siendo la alternativa en pacientes con cardiopatía o hipotensión grave.',
            },
            {
              t: 'Indometacina: inhibidor de ciclooxigenasa',
              d: 'Solo utilizable antes de las treinta y dos semanas y por menos de cuarenta y ocho horas',
              say: 'La indometacina es un potente tocolítico antiprostaglandínico, pero su uso está estrictamente restringido a embarazos menores de treinta y dos semanas y por menos de cuarenta y ocho horas continuas por sus graves riesgos fetales.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Comparación farmacológica',
      title: 'Tabla Comparativa de Fármacos Tocolíticos en Amenaza de Parto Prematuro',
      head: ['Fármaco tocolítico', 'Vía de administración y dosis', 'Riesgos y efectos adversos'],
      rows: [
        {
          cells: ['Nifedipino oral (primera línea)', 'Veinte miligramos de carga oral luego diez a veinte miligramos cada ocho horas', 'Cefalea, sofocos, taquicardia e hipotensión materna'],
          say: 'El nifedipino oral es el fármaco de primera elección en todos los hospitales de Chile por su alta eficacia, fácil administración oral y excelente tolerancia fetal.',
        },
        {
          cells: ['Atosiban endovenoso', 'Bolo inicial de seis punto setenta y cinco miligramos seguido de infusión continua', 'Muy baja toxicidad materna; costo económico elevado'],
          say: 'El atosiban endovenoso es seguro y eficaz pero su elevado costo limita su disponibilidad en el sistema público, reservándose para casos seleccionados con contraindicación de nifedipino.',
        },
        {
          cells: ['Indometacina rectal u oral', 'Cien miligramos rectal seguido de veinticinco a cincuenta miligramos cada seis horas', 'Cierre precoz del ductus arterioso y oligohidramnios si se usa tras las treinta y dos semanas'],
          say: 'La indometacina inhibe la síntesis de prostaglandinas pero acarrea el riesgo fatal de cierre prematuro del conducto arterioso fetal si se administra después de las treinta y dos semanas.',
        },
        {
          cells: ['Fenoterol (betamimético)', 'Infusión endovenosa continua en bomba', 'Edema pulmonar agudo, hipokalemia, hiperglicemia y taquiarritmias maternas graves'],
          say: 'Los betamiméticos como el fenoterol están prácticamente en desuso debido al alto riesgo de edema pulmonar agudo materno, arritmias ventriculares y descompensación metabólica.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Regla de oro de seguridad',
      title: 'Contraindicaciones Absolutas de la Tocolisis en el EUNACOM',
      cards: [
        {
          title: 'Patologías Maternas y Fetales Catastróficas',
          tag: '¡Prohibido tocolizar!',
          kind: 'alert',
          items: [
            {
              t: 'Corioamnionitis clínica aguda',
              d: 'La tocolisis perpetúa el foco séptico y produce shock séptico materno-fetal',
              say: 'La corioamnionitis clínica es la contraindicación número uno de la tocolisis. Intentar frenar las contracciones en un útero infectado conduce a shock séptico y muerte de la madre y del feto.',
            },
            {
              t: 'Desprendimiento prematuro de placenta normoinserta',
              d: 'La hemorragia decidual exige evacuación uterina inmediata para hemostasia',
              say: 'Ante un desprendimiento de placenta o hemorragia obstétrica masiva no se debe administrar tocolisis; la prioridad es la estabilización y la resolución quirúrgica inmediata.',
            },
          ],
        },
        {
          title: 'Condiciones de Inviabilidad o Parto Inminente',
          tag: 'Parto inevitable',
          kind: 'alert',
          items: [
            {
              t: 'Sufrimiento fetal agudo o muerte intrauterina',
              d: 'Monitoreo fetal alterado severo o feto con malformación letal incompatible',
              say: 'No se tocoliza si existe sufrimiento fetal agudo evidenciado por monitoreo categoría tres, ni ante un óbito fetal intrauterino o malformación letal incompatible con la vida.',
            },
            {
              t: 'Dilatación cervical avanzada mayor a cuatro o cinco centímetros',
              d: 'El trabajo de parto ya está en fase activa avanzada y es totalmente irreversible',
              say: 'Cuando la paciente ya presenta más de cuatro a cinco centímetros de dilatación cervical el trabajo de parto es irreversible y los tocolíticos resultan completamente inútiles y riesgosos.',
            },
          ],
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Corticoterapia antenatal',
      title: 'Mecanismo y Beneficios de los Corticoides Antenatales',
      nodes: [
        { id: 'ind', col: 0, row: 1, k: 'start', t: 'Riesgo de parto entre 24 y 34 semanas', s: 'Indicación universal ante amenaza de parto prematuro' },
        { id: 'neu', col: 1, row: 1, k: 'mech', t: 'Maduración de neumocitos tipo II', s: 'Estimulación de la transcripción de proteínas de surfactante A, B y C' },
        { id: 'sur', col: 2, row: 1, k: 'good', t: 'Aumento de surfactante alveolar', s: 'Disminución de la tensión superficial alveolar y prevención del colapso espiratorio' },
        { id: 'pul', col: 3, row: 0, k: 'good', t: 'Reducción de distrés respiratorio', s: 'Disminución a la mitad de la enfermedad de membrana hialina neonatal' },
        { id: 'sis', col: 3, row: 2, k: 'good', t: 'Protección vascular multiorgánica', s: 'Reducción de hemorragia intraventricular, enterocolitis y muerte' },
      ],
      edges: [
        { from: 'ind', to: 'neu', label: 'corticoides IM' },
        { from: 'neu', to: 'sur', label: 'síntesis' },
        { from: 'sur', to: 'pul', label: 'estabilidad alveolar' },
        { from: 'neu', to: 'sis', label: 'maduración vascular' },
      ],
      steps: [
        {
          show: ['ind', 'neu', 'sur'],
          note: 'Estimulación de la síntesis de surfactante',
          say: 'Los corticoides atraviesan la barrera placentaria y se unen a receptores nucleares en los neumocitos tipo dos del feto, estimulando la transcripción enzimática para producir surfactante pulmonar endógeno que previene el colapso alveolar.',
        },
        {
          show: ['pul', 'sis'],
          note: 'Disminución de la morbimortalidad neonatal global',
          say: 'La corticoterapia antenatal no solo previene el síndrome de distrés respiratorio o enfermedad de membrana hialina, sino que también estabiliza la vasculatura cerebral y mesentérica, disminuyendo en más del cincuenta por ciento la hemorragia intraventricular y la enterocolitis necrotizante.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Dosificación normada',
      title: 'Esquemas Oficiales de Maduración Pulmonar Fetal (MINSAL / OMS)',
      cards: [
        {
          title: 'Betametasona Intramuscular (Esquema de Elección)',
          tag: 'Dos dosis totales',
          kind: 'key',
          items: [
            {
              t: 'Doce miligramos IM cada veinticuatro horas',
              d: 'Dos dosis intramusculares profundas en total administradas en cuarenta y ocho horas',
              say: 'El esquema preferido en Chile es betametasona doce miligramos intramusculares cada veinticuatro horas por dos dosis en total. Es el fármaco con mayor evidencia clínica en la literatura médica.',
            },
            {
              t: 'Ventana de máxima eficacia biológica',
              d: 'El beneficio terapéutico óptimo ocurre entre las 24 horas y los 7 días de la primera dosis',
              say: 'La máxima protección pulmonar se alcanza transcurridas veinticuatro horas desde la primera dosis y se mantiene durante los primeros siete días posteriores al ciclo.',
            },
          ],
        },
        {
          title: 'Dexametasona Intramuscular (Alternativa Oficial)',
          tag: 'Cuatro dosis totales',
          kind: 'pharma',
          items: [
            {
              t: 'Seis miligramos IM cada doce horas',
              d: 'Cuatro dosis intramusculares profundas en total administradas en cuarenta y ocho horas',
              say: 'Si no se dispone de betametasona, el esquema alternativo equivalente es dexametasona seis miligramos intramusculares cada doce horas hasta completar cuatro dosis en total.',
            },
            {
              t: 'No repetir ciclos de forma rutinaria',
              d: 'Los ciclos múltiples repetidos causan restricción del crecimiento y microcefalia fetal',
              say: 'Está desaconsejado repetir ciclos múltiples de corticoides de forma profiláctica o semanal, ya que la sobreexposición esteroidal fetal se asocia a microcefalia y restricción del crecimiento.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Neuroprotección fetal',
      title: 'Neuroprotección con Sulfato de Magnesio: el umbral de 32 semanas',
      cards: [
        {
          title: 'Indicación y Beneficio Neurológico Comprobado',
          tag: 'Reducción de parálisis cerebral',
          kind: 'key',
          items: [
            {
              t: 'Embarazo menor a treinta y dos semanas con parto inminente',
              d: 'Parto programado o en trabajo de parto inminente dentro de las próximas 24 horas',
              say: 'La neuroprotección con sulfato de magnesio está indicada en toda gestante con menos de treinta y dos semanas de gestación que presente amenaza de parto inminente en las siguientes veinticuatro horas.',
            },
            {
              t: 'Prevención de parálisis cerebral infantil',
              d: 'Disminuye un tercio la incidencia de parálisis cerebral y trastornos motores gruesos',
              say: 'Los ensayos clínicos aleatorizados han demostrado de forma concluyente que el sulfato de magnesio antenatal reduce de manera altamente significativa el riesgo de parálisis cerebral infantil y disfunción motora severa en el prematuro.',
            },
          ],
        },
        {
          title: 'Mecanismo Neurobiológico de Protección',
          tag: 'Bloqueo excitotóxico',
          kind: 'criteria',
          items: [
            {
              t: 'Bloqueo de receptores NMDA cerebrales',
              d: 'Evita la entrada masiva de calcio intracelular durante episodios de hipoxia perinatal',
              say: 'El magnesio bloquea de forma voltaje-dependiente los canales de los receptores NMDA de glutamato, impidiendo la entrada masiva y lesiva de calcio al interior de las neuronas fetales ante la asfixia.',
            },
            {
              t: 'Estabilización de membrana y flujo cerebral',
              d: 'Mejora la autorregulación hemodinámica de la microvasculatura cerebral fetal',
              say: 'Asimismo, estabiliza las membranas celulares, ejerce efectos antioxidantes y vasodilata la microcirculación cerebral previniendo la isquemia de la sustancia blanca periventricular.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Protocolo de administración',
      title: 'Protocolo de Sulfato de Magnesio y Monitorización de Seguridad Materna',
      head: ['Parámetro del protocolo', 'Pauta terapéutica recomendada', 'Control clínico materno obligatorio'],
      rows: [
        {
          cells: ['Dosis de carga o impregnación', 'Cuatro a cinco gramos endovenosos diluidos administrados en treinta minutos', 'Monitoreo de presión arterial y frecuencia respiratoria'],
          say: 'Iniciamos con una dosis de impregnación de cuatro a cinco gramos de sulfato de magnesio endovenoso diluido a pasar en treinta minutos, controlando permanentemente la frecuencia respiratoria y la presión arterial de la madre.',
        },
        {
          cells: ['Dosis de mantención continua', 'Un gramo por hora en infusión endovenosa continua en bomba de infusión', 'Vigilancia de reflejos osteotendinosos rotulianos y diuresis horaria'],
          say: 'Mantenemos una infusión continua de un gramo por hora hasta que se produzca el nacimiento o hasta completar un máximo de veinticuatro horas, vigilando de manera horaria la presencia de reflejos osteotendinosos rotulianos y la diuresis materna.',
        },
        {
          cells: ['Antídoto ante intoxicación', 'Gluconato de calcio al diez por ciento un gramo endovenoso lento en tres a cinco minutos', 'Indicado ante abolición de reflejos o frecuencia respiratoria menor a doce por minuto'],
          say: 'Ante signos clínicos de intoxicación por magnesio como la abolición del reflejo rotuliano o depresión respiratoria, suspendemos la infusión y administramos un gramo de gluconato de calcio endovenoso.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Prevención de sepsis neonatal',
      title: 'Quimioprofilaxis Intraparto de Infección por Streptococcus agalactiae',
      cards: [
        {
          title: 'Indicación Mandatoria en Parto Prematuro',
          tag: 'Prematuro sin cultivo previo',
          kind: 'alert',
          items: [
            {
              t: 'Profilaxis en todo parto menor a treinta y siete semanas',
              d: 'Se indica si el cultivo perineal de SGB es positivo o si su resultado es desconocido',
              say: 'Todo parto prematuro menor a treinta y siete semanas con cultivo de estreptococo del grupo B positivo o desconocido debe recibir quimioprofilaxis antibiótica intraparto sin excepción.',
            },
            {
              t: 'Alta vulnerabilidad del neonato prematuro',
              d: 'La sepsis precoz por SGB en prematuros tiene una letalidad superior al treinta por ciento',
              say: 'El sistema inmunológico inmaduro del recién nacido pretérmino no posee anticuerpos maternos suficientes, por lo que la colonización por estreptococo del grupo B desencadena sepsis fulminante y meningitis.',
            },
          ],
        },
        {
          title: 'Esquema Antibiótico Oficial',
          tag: 'Penicilina de primera línea',
          kind: 'pharma',
          items: [
            {
              t: 'Penicilina G sódica endovenosa',
              d: 'Cinco millones de unidades EV de carga seguidos de dos punto cinco a tres millones c/4 horas',
              say: 'El antibiótico de elección es la penicilina G sódica, con un bolo de carga de cinco millones de unidades endovenosas seguido de dos punto cinco a tres millones cada cuatro horas hasta el nacimiento.',
            },
            {
              t: 'Alternativa en alergia no severa a penicilina',
              d: 'Cefazolina dos gramos endovenosos de carga seguidos de un gramo cada ocho horas',
              say: 'En caso de alergia a penicilina sin riesgo de anafilaxia se utiliza cefazolina endovenosa, garantizando una adecuada concentración en líquido amniótico.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de decisión clínica',
      title: 'Algoritmo Clínico de Manejo de la Amenaza de Parto Prematuro',
      say: 'Revisemos el algoritmo integral de diagnóstico y tratamiento en la paciente que consulta por contracciones uterinas dolorosas antes del término.',
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Manejo Integral de APP a las 30 Semanas',
      stem: 'Una primigesta de 30 semanas acude a la urgencia obstétrica por contracciones uterinas dolorosas cada 5 minutos de 2 horas de evolución. Al examen: T° 36.7°C, PA 112/68 mmHg, FC 76 lpm. En la ecografía transvaginal se mide una longitud cervical de 16 mm con embudización del OCI y dilatación de 2 cm. El registro cardiofetal basal es de 140 lpm reactivo.',
      question: '¿Cuál es la conducta médica integral de primera línea para esta paciente?',
      options: [
        { letter: 'A', text: 'Indicar reposo en domicilio y consumo abundante de líquidos orales' },
        { letter: 'B', text: 'Hospitalizar en ARO, Nifedipino oral, Betametasona intramuscular y Sulfato de Magnesio' },
        { letter: 'C', text: 'Realizar cesárea de urgencia inmediata por riesgo de parto inminente' },
        { letter: 'D', text: 'Administrar Indometacina rectal durante 14 días y dar el alta hospitalaria' },
        { letter: 'E', text: 'Realizar cerclaje cervical de emergencia de forma inmediata' },
      ],
      correct: 'B',
      explanation: 'La paciente presenta una Amenaza de Parto Prematuro (APP) activa con modificaciones cervicales francas (cérvix acortado a 16 mm y dilatación incipiente de 2 cm) a las 30 semanas de gestación. Requiere hospitalización inmediata en ARO e inicio simultáneo del paquete terapéutico completo: tocolisis aguda con Nifedipino oral durante 48 horas, corticoterapia antenatal con Betametasona (12 mg IM cada 24 horas por 2 dosis) para maduración pulmonar fetal, e infusión de Sulfato de Magnesio para neuroprotección fetal (por tener < 32 semanas).',
      say: {
        stem: 'Una primigesta de treinta semanas consulta por dinámica uterina dolorosa frecuente y cervicometría de dieciséis milímetros con dilatación de dos centímetros.',
        question: '¿Cuál es la conducta médica integral de primera línea para esta paciente?',
        options: 'La opción A propone reposo en domicilio. La B hospitalizar en ARO con nifedipino, betametasona y sulfato de magnesio. La C cesárea urgente. La D indometacina por catorce días. La E cerclaje de emergencia. Piénsalo.',
        answer: 'La respuesta correcta es la B. A las treinta semanas con cérvix corto se hospitaliza en ARO y se administra la tríada de oro: tocolisis con nifedipino, maduración con betametasona y neuroprotección con sulfato de magnesio.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Contraindicación Absoluta de Tocolisis',
      stem: '¿En cuál de las siguientes situaciones clínicas está ABSOLUTAMENTE CONTRAINDICADO el uso de fármacos tocolíticos para frenar las contracciones uterinas?',
      question: 'Seleccione la contraindicación absoluta para iniciar tocolisis:',
      options: [
        { letter: 'A', text: 'Embarazada de 28 semanas con dinámica uterina dolorosa, cérvix de 20 mm y feto reactivo' },
        { letter: 'B', text: 'Gestante de 31 semanas con dinámica y antecedente de parto prematuro anterior' },
        { letter: 'C', text: 'Gestante de 29 semanas con sospecha clínica de Corioamnionitis con fiebre y dolor uterino' },
        { letter: 'D', text: 'Embarazada de 33 semanas con embarazo gemelar y cuello borrado en un 50%' },
        { letter: 'E', text: 'Embarazada de 30 semanas con infección urinaria baja en tratamiento y dinámica' },
      ],
      correct: 'C',
      explanation: 'La presencia de infección intraamniótica clínica (corioamnionitis) es una contraindicación formal y absoluta para la tocolisis. La persistencia del feto en un ambiente intrauterino infectado incrementa de manera drástica el riesgo de sepsis neonatal, shock séptico materno, muerte intrauterina y secuelas neurológicas severas. Ante corioamnionitis la indicación categórica es interrumpir el embarazo sin intentar frenar el trabajo de parto.',
      say: {
        stem: 'Se consulta en cuál escenario clínico está formalmente prohibido utilizar fármacos tocolíticos para frenar las contracciones uterinas.',
        question: '¿Cuál es la contraindicación absoluta para iniciar tocolisis?',
        options: 'La opción A plantea gestación de veintiocho semanas con cérvix corto. La B antecedente de parto pretérmino. La C corioamnionitis clínica con fiebre y dolor uterino. La D embarazo gemelar. La E cistitis tratada. Piénsalo.',
        answer: 'La respuesta correcta es la C. La corioamnionitis clínica prohíbe de forma absoluta la tocolisis, exigiendo la evacuación uterina inmediata bajo cobertura antibiótica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Efectos Adversos de Tocolíticos · Indometacina',
      stem: 'Una paciente cursando un embarazo de 33 semanas consulta por contracciones uterinas. El médico de turno decide indicar un tocolítico. ¿Por qué razón farmacológica y fisiopatológica está formalmente desaconsejado utilizar Indometacina como tocolítico en esta paciente?',
      question: '¿Cuál es el mecanismo fisiopatológico adverso?',
      options: [
        { letter: 'A', text: 'Porque pierde completamente su efecto tocolítico después de la semana 30 de gestación' },
        { letter: 'B', text: 'Porque en gestaciones mayores a 32 semanas induce el cierre prematuro del ductus arterioso' },
        { letter: 'C', text: 'Porque produce hemorragia intraventricular en el 90% de los recién nacidos' },
        { letter: 'D', text: 'Porque genera hiperkalemia materna refractaria y arritmias ventriculares letales' },
        { letter: 'E', text: 'Porque estimula directamente la síntesis de surfactante pulmonar a dosis tóxicas' },
      ],
      correct: 'B',
      explanation: 'La Indometacina es un inhibidor no selectivo de la ciclooxigenasa (COX) que disminuye la síntesis de prostaglandinas fetales indispensables para mantener la permeabilidad del conducto arterioso. A partir de la semana 32 de gestación, el ductus arterioso se vuelve extremadamente sensible a la inhibición de prostaglandinas; su constricción precoz intrauterina ocasiona sobrecarga del ventrículo derecho, hipertensión pulmonar neonatal persistente e insuficiencia cardíaca fetal.',
      say: {
        stem: 'Se pregunta por qué razón farmacológica está contraindicado utilizar indometacina como tocolítico en una gestante de treinta y tres semanas.',
        question: '¿Cuál es el mecanismo fisiopatológico adverso de la indometacina?',
        options: 'La opción A afirma que pierde efecto tocolítico. La B que induce cierre prematuro del conducto arterioso e hipertensión pulmonar fetal. La C hemorragia cerebral. La D arritmias maternas. La E sobredosis de surfactante. Piénsalo.',
        answer: 'La respuesta correcta es la B. Tras las treinta y dos semanas la indometacina puede cerrar prematuramente el conducto arterioso fetal generando hipertensión pulmonar neonatal severa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Beneficio Demostrado del Sulfato de Magnesio Antenatal',
      stem: '¿Cuál es el principal beneficio clínico comprobado en ensayos clínicos aleatorizados y metaanálisis que justifica la administración de Sulfato de Magnesio antenatal en mujeres con amenaza de parto prematuro inminente antes de las 32 semanas de gestación?',
      question: 'Seleccione el impacto clínico demostrado:',
      options: [
        { letter: 'A', text: 'Acelerar la síntesis de surfactante y prevenir la enfermedad de membrana hialina' },
        { letter: 'B', text: 'Reducir significativamente el riesgo de Parálisis Cerebral Infantil y disfunción motora' },
        { letter: 'C', text: 'Erradicar la colonización materna por Streptococcus agalactiae' },
        { letter: 'D', text: 'Prevenir la enterocolitis necrotizante mediante vasodilatación mesentérica' },
        { letter: 'E', text: 'Frenar de forma definitiva las contracciones uterinas hasta llegar al término' },
      ],
      correct: 'B',
      explanation: 'El beneficio comprobado y la indicación formal del Sulfato de Magnesio antenatal en gestaciones menores a 32 semanas con parto prematuro inminente es la neuroprotección fetal, logrando una reducción estadísticamente significativa en la incidencia de Parálisis Cerebral Infantil y pérdida de función motora gruesa en la infancia. La maduración pulmonar depende de los corticoides y la profilaxis de SGB de la penicilina.',
      say: {
        stem: 'Se consulta cuál es el beneficio clínico comprobado que fundamenta administrar sulfato de magnesio antenatal en partos inminentes antes de las treinta y dos semanas.',
        question: '¿Cuál es el principal impacto clínico demostrado?',
        options: 'La opción A propone síntesis de surfactante. La B reducir el riesgo de parálisis cerebral infantil y disfunción motora. La C erradicar estreptococo. La D prevenir enterocolitis. La E frenar el parto hasta el término. Piénsalo.',
        answer: 'La respuesta correcta es la B. El sulfato de magnesio administrado antes de las treinta y dos semanas es un neuroprotector que reduce notablemente la tasa de parálisis cerebral infantil.',
      },
    },
    {
      type: 'points',
      kicker: 'Reglas de oro EUNACOM',
      title: 'Conceptos Clave del Síndrome de Parto Prematuro',
      cards: [
        {
          title: 'Cervicometría y Tocolisis Aguda',
          tag: 'Diagnóstico y primera línea',
          kind: 'key',
          items: [
            {
              t: 'Cérvix corto menor a veinticinco milímetros',
              d: 'Principal predictor de parto prematuro; indicación de progesterona o tocolisis',
              say: 'La cervicometría transvaginal menor a veinticinco milímetros define cérvix corto e identifica a las pacientes con alto riesgo de parto pretérmino inminente.',
            },
            {
              t: 'Nifedipino oral por cuarenta y ocho horas',
              d: 'Fármaco de elección para permitir completar corticoides y traslado a centro terciario',
              say: 'El nifedipino oral es el tocolítico de primera línea en Chile. Su objetivo primordial no es llevar el embarazo al término, sino ganar cuarenta y ocho horas vitales para la maduración pulmonar fetal.',
            },
          ],
        },
        {
          title: 'Maduración Pulmonar y Neuroprotección',
          tag: 'Umbrales gestacionales',
          kind: 'alert',
          items: [
            {
              t: 'Betametasona entre las veinticuatro y treinta y cuatro semanas',
              d: 'Dos dosis de doce miligramos intramusculares cada veinticuatro horas para surfactante',
              say: 'La corticoterapia antenatal con betametasona está indicada entre las veinticuatro y treinta y cuatro semanas, reduciendo a la mitad el distrés respiratorio y la hemorragia cerebral.',
            },
            {
              t: 'Sulfato de magnesio bajo las treinta y dos semanas',
              d: 'Neuroprotección antenatal con bolo de cuatro a cinco gramos que previene parálisis cerebral',
              say: 'El sulfato de magnesio antenatal reduce a la mitad el riesgo de parálisis cerebral. Si te llevas una sola idea de hoy: los tocolíticos solo ganan cuarenta y ocho horas para permitir la maduración pulmonar con corticoides y la neuroprotección con sulfato de magnesio. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo Clínico de Manejo de la Amenaza de Parto Prematuro',
    root: N(
      'start',
      'Sospecha de Amenaza de Parto Prematuro (24 a 34 semanas)',
      'Contracciones uterinas dolorosas frecuentes · evaluación de signos vitales maternos',
      'Evaluamos a la gestante con contracciones regulares y descartamos de inmediato signos de infección o hemorragia.',
      [
        'Presencia de Fiebre materna y Criterios de Gibbs (Corioamnionitis)',
        N(
          'alert',
          '¡CONTRAINDICACIÓN ABSOLUTA DE TOCOLISIS!',
          'Interrupción inmediata del embarazo con antibioticoterapia EV de amplio espectro',
          'Ante corioamnionitis clínica la tocolisis está prohibida e interrumpimos el embarazo sin demora.',
        ),
      ],
      [
        'Sin contraindicaciones: realizar Cervicometría Transvaginal',
        N(
          'q',
          'Cervicometría Transvaginal con vejiga vacía',
          'Medición lineal entre el OCI y el OCE · umbral de 25 mm',
          'Realizamos cervicometría transvaginal para determinar la longitud cervical exacta.',
          [
            'Longitud cervical menor a veinticinco milímetros (cérvix corto)',
            N(
              'do',
              'Hospitalización en ARO e inicio de Tocolisis de rescate',
              'Nifedipino oral 20 mg carga + Betametasona 12 mg IM (2 dosis c/24h) + traslado',
              'Con cuello corto hospitalizamos de inmediato para tocolisis con nifedipino y betametasona de maduración.',
              [
                'Edad gestacional menor a treinta y dos semanas con parto inminente',
                N(
                  'alert',
                  'Neuroprotección Fetal con Sulfato de Magnesio',
                  'Bolo de 4 a 5 g EV en 30 minutos seguido de 1 g/hora de infusión continua',
                  'Si la gestación es menor a treinta y dos semanas asociamos sulfato de magnesio para neuroprotección fetal.',
                ),
              ],
            ),
          ],
          [
            'Longitud cervical mayor o igual a veinticinco milímetros',
            N(
              'ok',
              'Bajo riesgo de parto inminente',
              'Observación transitoria, hidratación, descartar ITU y reevaluación ambulatoria',
              'Si el cuello mide veinticinco milímetros o más el riesgo de parto a corto plazo es muy bajo y observamos.',
            ),
          ],
        ),
      ],
    ),
  },
};
