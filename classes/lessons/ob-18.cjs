// Clase 3.18 — guion docente escrito a mano (estándar Módulo 3 · Obstetricia).
// Fuente clínica: books/scripts/dataset_obstetricia.cjs (ob-18).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ob-18',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Hemorragia postparto inmediata, código rojo obstétrico, etiología de las 4T, uterotónicos escalonados, balón de Bakri e inversión uterina',
      say: 'Bienvenidos a la clase sobre hemorragia postparto inmediata, la principal causa evitable de muerte materna en el mundo. En esta sesión dominaremos el protocolo de código rojo obstétrico, desglosaremos la regla etiológica de las cuatro te, aplicaremos el masaje bimanual y la farmacología uterotónica escalonada recordando contraindicaciones vitales, conoceremos el balón de Bakri y aprenderemos a resolver la catástrofe de la inversión uterina mediante la maniobra de Johnson. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología hemostática',
      title: 'Mecanismo hemostático del postparto: las ligaduras vivas de Pinard',
      nodes: [
        { id: 'alu', col: 0, row: 1, k: 'start', t: 'Alumbramiento placentario', s: 'Desprendimiento de la placenta con apertura de senos vasculares uterinos' },
        { id: 'con', col: 1, row: 1, k: 'mech', t: 'Contracción tónica miometrial', s: 'Las fibras musculares miometriales entrelazadas en ocho se acortan firmemente' },
        { id: 'pin', col: 2, row: 0, k: 'good', t: 'Ligaduras vivas de Pinard', s: 'Oclusión mecánica de arteriolas espirales formando el globo de seguridad' },
        { id: 'ine', col: 2, row: 2, k: 'trap', t: 'Inercia o atonía uterina', s: 'Falla contráctil con sangrado torrencial continuo de 600 mL por minuto' },
        { id: 'sho', col: 3, row: 2, k: 'trap', t: 'Shock hipovolémico y muerte', s: 'Colapso hemodinámico materno fulminante si no se interviene de inmediato' },
      ],
      edges: [
        { from: 'alu', to: 'con', label: 'estímulo fisiológico' },
        { from: 'con', to: 'pin', label: 'hemostasia primaria' },
        { from: 'con', to: 'ine', label: 'falla mecánica' },
        { from: 'ine', to: 'sho', label: 'exanguinación' },
      ],
      steps: [
        {
          show: ['alu', 'con', 'pin'],
          note: 'Hemostasia fisiológica por miotaponamiento',
          say: 'Al desprenderse la placenta quedan al descubierto los senos venosos y arteriolas espirales miometriales que reciben un flujo sanguíneo de aproximadamente seiscientos mililitros por minuto. La contracción vigorosa y sostenida de las fibras musculares entrelazadas en forma de ocho estrangula mecánicamente estos vasos, constituyendo las llamadas ligaduras vivas de Pinard.',
        },
        {
          show: ['ine', 'sho'],
          note: 'Atonía uterina y catástrofe hemorrágica',
          say: 'Cuando el miometrio pierde su capacidad contráctil sobreviene la inercia o atonía uterina. Sin el efecto oclusivo de las ligaduras vivas, el útero sangra de forma torrencial vaciando la volemia materna en cuestión de minutos y desencadenando un shock hipovolémico fulminante que exige la activación inmediata del código rojo obstétrico.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Protocolo de reanimación',
      title: 'Código Rojo Obstétrico: Minuto Cero y Resucitación Hemostática',
      cards: [
        {
          title: 'Acciones Inmediatas del Minuto Cero',
          tag: 'Activación del equipo',
          kind: 'alert',
          items: [
            {
              t: 'Pérdida mayor a mil mililitros o signos de shock',
              d: 'Sangrado abundante con taquicardia materna, hipotensión arterial o palidez marcada',
              say: 'La hemorragia postparto se define actualmente como una pérdida sanguínea acumulada de mil mililitros o más en las primeras veinticuatro horas, o bien cualquier pérdida asociada a taquicardia, palidez o hipotensión materna, debiendo activarse de inmediato el código rojo.',
            },
            {
              t: 'Dos vías venosas gruesas y pruebas cruzadas',
              d: 'Canalización con bránula catorce o dieciséis G, toma de hemograma, coagulación y banco de sangre',
              say: 'Instalamos simultáneamente dos accesos venosos periféricos de gran calibre con bránulas catorce o dieciséis para permitir la infusión rápida de volumen, enviando muestras urgentes al laboratorio para hemograma, perfil de coagulación con fibrinógeno y pruebas cruzadas de glóbulos rojos.',
            },
          ],
        },
        {
          title: 'Resucitación Hemostática y Fibrinólisis',
          tag: 'Manejo de fluidos y TXA',
          kind: 'pharma',
          items: [
            {
              t: 'Cristaloides tibios limitados',
              d: 'Máximo mil quinientos a dos mil mililitros de Ringer Lactato para evitar hemodilución',
              say: 'Infundimos cristaloides tibios de manera controlada limitando el volumen inicial a no más de mil quinientos a dos mil mililitros de Ringer Lactato, previniendo la coagulopatía por hemodilución, la acidosis y la hipotermia que forman la tríada letal del trauma.',
            },
            {
              t: 'Ácido Tranexámico precoz en todos los casos',
              d: 'Un gramo endovenoso en diez minutos administrado dentro de las primeras tres horas',
              say: 'El ácido tranexámico endovenoso en dosis de un gramo diluido a pasar en diez minutos es una intervención obligatoria en toda hemorragia postparto. Su administración antes de cumplidas tres horas del parto bloquea la hiperfibrinólisis y disminuye notablemente la mortalidad materna.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnóstico etiológico',
      title: 'La Regla Mnemotécnica de las 4T en Hemorragia Postparto',
      head: ['Etiología (las 4T)', 'Frecuencia relativa', 'Hallazgo clínico cardinal en la exploración'],
      rows: [
        {
          cells: ['Tono (Atonía Uterina)', 'Setenta por ciento', 'Útero blando, supraumbilical, mal delimitado y que no se contrae al masajearlo'],
          say: 'La atonía del tono miometrial explica el setenta por ciento de todas las hemorragias postparto. A la palpación abdominal el útero se encuentra completamente blando, relajado, supraumbilical y sin consistencia muscular palpable.',
        },
        {
          cells: ['Trauma (Desgarros del canal)', 'Veinte por ciento', 'Útero firmemente contraído (globo de Pinard positivo) con sangrado rojo activo continuo'],
          say: 'El trauma del canal genital representa el veinte por ciento de los casos. Su hallazgo semiológico cardinal es un útero firmemente contraído en globo de Pinard pero con sangrado rutilante continuo originado en desgarros del cuello uterino, vagina o periné.',
        },
        {
          cells: ['Tejido (Restos placentarios)', 'Diez por ciento', 'Placenta incompleta al examen de cotiledones o retención de cotiledón aberrante'],
          say: 'La retención de tejido o cotiledones placentarios corresponde al diez por ciento. La revisión cuidadosa de la cara materna de la placenta alumbada revela cotiledones faltantes o membranas desgarradas con vasos que terminan bruscamente en el borde.',
        },
        {
          cells: ['Trombina (Coagulopatías)', 'Uno por ciento', 'Sangre que no forma coágulos en el campo quirúrgico o tubos de ensayo'],
          say: 'Las alteraciones de la trombina o coagulopatías representan el uno por ciento. Se manifiestan por sangre fluida que no coagula en los campos quirúrgicos ni en los tubos secos, complicando cuadros de preeclampsia severa, desprendimiento placentario o sepsis.',
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Algoritmo de tratamiento',
      title: 'Manejo Escalonado de la Atonía Uterina Postparto',
      nodes: [
        { id: 'ato', col: 0, row: 1, k: 'start', t: 'Diagnóstico de atonía uterina', s: 'Útero blando e hipotonía con hemorragia profusa continua' },
        { id: 'mas', col: 1, row: 0, k: 'good', t: '1. Masaje uterino bimanual', s: 'Compresión mecánica enérgica entre el fórnix vaginal y el abdomen' },
        { id: 'oxi', col: 1, row: 2, k: 'good', t: '2. Oxitocina y Ácido Tranexámico', s: 'Uterotónico de primera línea más antifibrinolítico inmediato' },
        { id: 'bak', col: 2, row: 1, k: 'mech', t: '3. Balón hidrostático de Bakri', s: 'Taponamiento intrauterino mecánico antes de decidir abrir abdomen' },
        { id: 'bly', col: 3, row: 0, k: 'mech', t: '4. Sutura de compresión B-Lynch', s: 'Laparotomía hemostática conservadora preservando la fertilidad' },
        { id: 'his', col: 3, row: 2, k: 'trap', t: '5. Histerectomía obstétrica', s: 'Medida quirúrgica final y definitiva de rescate vital materno' },
      ],
      edges: [
        { from: 'ato', to: 'mas', label: 'físico inmediato' },
        { from: 'ato', to: 'oxi', label: 'farmacológico' },
        { from: 'mas', to: 'bak', label: 'refractariedad' },
        { from: 'oxi', to: 'bak', label: 'refractariedad' },
        { from: 'bak', to: 'bly', label: 'falla mecánica' },
        { from: 'bly', to: 'his', label: 'sangrado persistente' },
      ],
      steps: [
        {
          show: ['ato', 'mas', 'oxi'],
          note: 'Primera línea médica: masaje bimanual y fármacos',
          say: 'El primer paso ante la atonía uterina es iniciar de inmediato el masaje bimanual enérgico asociado a oxitocina endovenosa continua y un gramo de ácido tranexámico para estimular la contracción mecánica y farmacológica.',
        },
        {
          show: ['bak', 'bly', 'his'],
          note: 'Escalamiento mecánico y quirúrgico',
          say: 'Si el útero no se contrae y persiste el sangrado, instalamos un balón hidrostático de Bakri dentro de la cavidad. Si la hemorragia continúa, ingresamos a pabellón para suturas hemostáticas de compresión tipo B-Lynch o histerectomía de urgencia.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Técnica de compresión física',
      title: 'Masaje Uterino Bimanual y Oxitocina de Primera Línea',
      cards: [
        {
          title: 'Técnica del Masaje Bimanual',
          tag: 'Compresión directa de vasos',
          kind: 'key',
          items: [
            {
              t: 'Mano interna empuñada en fondo de saco vaginal',
              d: 'Se introduce el puño en fórnix anterior empujando la pared uterina anterior hacia arriba',
              say: 'Introducimos una mano enguantada estéril y empuñada en el fórnix vaginal anterior, apoyando el dorso de los dedos flexionados contra la pared anterior del útero para elevarlo firmemente hacia la pared abdominal.',
            },
            {
              t: 'Mano externa comprimiendo el fondo uterino',
              d: 'Se comprime el fondo del útero contra el puño interno colapsando la luz de la cavidad',
              say: 'Con la otra mano extendida sobre la pared abdominal, comprimimos con fuerza el fondo y la cara posterior del útero contra el puño intravaginal. Esta pinza bimanual comprime directamente la vasculatura miometrial hasta que los fármacos uterotónicos alcancen concentraciones efectivas.',
            },
          ],
        },
        {
          title: 'Pauta de Oxitocina en Hemorragia Activa',
          tag: 'Uterotónico de elección',
          kind: 'pharma',
          items: [
            {
              t: 'Bolo lento seguido de infusión continua',
              d: 'Cinco a diez unidades EV lento en tres minutos, luego veinte a cuarenta unidades en infusión',
              say: 'Iniciamos de inmediato la pauta de oxitocina administrando un bolo lento de cinco a diez unidades endovenosas en tres minutos, acoplando de inmediato una infusión continua de veinte a cuarenta unidades en un matraz de solución fisiológica.',
            },
            {
              t: 'Jamás en bolo rápido endovenoso',
              d: 'El bolo en bolo directo produce hipotensión arterial severa colapso cardiovascular y paro',
              say: 'Está formalmente prohibido inyectar la oxitocina en bolo endovenoso directo rápido sin dilución, ya que induce vasodilatación periférica fulminante con colapso cardiovascular, hipotensión refractaria y riesgo inminente de paro cardíaco.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Farmacología uterotónica',
      title: 'Uterotónicos de Segunda y Tercera Línea en Atonía Uterina',
      head: ['Fármaco uterotónico', 'Dosis y vía de administración', 'Contraindicación clínica absoluta'],
      rows: [
        {
          cells: ['Oxitocina (1.ª línea)', 'Cinco a diez unidades EV lento o veinte a cuarenta unidades en infusión continua', 'Hipersensibilidad conocida; bolo rápido directo'],
          say: 'La oxitocina es el fármaco de elección universal, seguro en todas las pacientes pero requiriendo infusión controlada para evitar hipotensión.',
        },
        {
          cells: ['Metilergonovina (2.ª línea)', 'Cero punto dos miligramos intramuscular profunda cada dos a cuatro horas', 'Preeclampsia, hipertensión arterial crónica y cardiopatía materna'],
          say: 'La metilergonovina produce tetania miometrial pero está formalmente contraindicada en preeclampsia e hipertensión por causar vasoespasmo severo e infarto.',
        },
        {
          cells: ['Misoprostol (3.ª línea)', 'Ochocientos microgramos por vía sublingual o intrarrectal en dosis única', 'Muy pocas contraindicaciones; produce fiebre y temblores'],
          say: 'El misoprostol a dosis de ochocientos microgramos sublingual o rectal es un potente uterotónico que no requiere refrigeración y es seguro en hipertensas.',
        },
        {
          cells: ['Carboprost trometamina', 'Cero punto veinticinco miligramos intramuscular repetible cada quince minutos', 'Asma bronquial severa por broncoconstricción letal'],
          say: 'El carboprost es una prostaglandina muy potente pero está totalmente prohibido en pacientes con asma bronquial por inducir broncoespasmo fulminante.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Pregunta fija de examen',
      title: 'Contraindicaciones Uterotónicas Críticas en el EUNACOM',
      cards: [
        {
          title: 'Metilergonovina en Estados Hipertensivos',
          tag: '¡Prohibido en Preeclampsia!',
          kind: 'alert',
          items: [
            {
              t: 'Contraindicación formal en preeclampsia e HTA',
              d: 'Alcaloide del cornezuelo que estimula receptores alfa-adrenérgicos provocando vasoconstricción',
              say: 'La metilergonovina es un alcaloide ergótico que está formalmente contraindicado en cualquier paciente con preeclampsia, hipertensión arterial crónica o cifras tensionales elevadas registradas durante el puerperio inmediato.',
            },
            {
              t: 'Riesgo de accidente cerebrovascular y crisis',
              d: 'Desencadena picos hipertensivos refractarios, edema pulmonar agudo e infarto miocárdico',
              say: 'Su administración en gestantes hipertensas provoca vasoconstricción periférica violenta con picos de presión arterial incontrolables que pueden culminar en hemorragia intracerebral masiva, convulsiones eclámpticas o edema pulmonar agudo cardiogénico.',
            },
          ],
        },
        {
          title: 'Carboprost en Asma Bronquial',
          tag: '¡Prohibido en asmáticas!',
          kind: 'alert',
          items: [
            {
              t: 'Prostaglandina F2 alfa y broncoconstricción',
              d: 'Provoca espasmo severo de la musculatura lisa bronquial en pacientes hiperreactivas',
              say: 'El carboprost trometamina es un análogo sintético de la prostaglandina efe dos alfa que ejerce una potente acción broncoconstrictora sobre el árbol respiratorio materno.',
            },
            {
              t: 'Broncoespasmo refractario mortal',
              d: 'Desencadena crisis asmática grave con paro respiratorio e hipoxia refractaria',
              say: 'En pacientes con antecedentes de asma bronquial o hiperreactividad de la vía aérea, el carboprost puede desencadenar un broncoespasmo severo refractario a broncodilatadores con asfixia y paro respiratorio fulminante.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Taponamiento de rescate',
      title: 'Taponamiento Hidrostático con Balón de Bakri',
      cards: [
        {
          title: 'Indicación y Fundamento del Balón',
          tag: 'Puente antes de laparotomía',
          kind: 'pharma',
          items: [
            {
              t: 'Procedimiento de rescate conservador de elección',
              d: 'Se indica ante el fracaso del masaje y fármacos uterotónicos antes de abrir el abdomen',
              say: 'El taponamiento con balón hidrostático de Bakri es el procedimiento mecánico conservador de primera elección ante una atonía que no responde al masaje bimanual ni a los uterotónicos combinados, evitando la necesidad de laparotomía en la mayoría de los casos.',
            },
            {
              t: 'Mecanismo de compresión hidrostática cavitaria',
              d: 'La presión del balón sobrepasa la presión de las arteriolas uterinas frenando el sangrado',
              say: 'Al distenderse uniformemente dentro de la cavidad endometrial, la presión hidrostática generada por el balón supera la presión de perfusión de las arteriolas miometriales, logrando un hemostasia mecánica directa sobre el lecho placentario sangrante.',
            },
          ],
        },
        {
          title: 'Técnica de Insuflación y Seguimiento',
          tag: 'Prueba de taponamiento',
          kind: 'criteria',
          items: [
            {
              t: 'Insuflación con suero fisiológico tibio',
              d: 'Se instilan entre trescientos y quinientos mililitros de suero a través de la vía del balón',
              say: 'El balón se inserta por vía transcervical hacia el fondo uterino y se insufla de manera progresiva con trescientos a quinientos mililitros de suero fisiológico estéril tibio, colocando una compresa vaginal para evitar que se desplace hacia el exterior.',
            },
            {
              t: 'Prueba de taponamiento positiva',
              d: 'Si el sangrado por la sonda cesa el taponamiento es exitoso; si persiste exige laparotomía',
              say: 'Si tras insuflar el balón el sangrado disminuye a cifras despreciables por la sonda de drenaje, la prueba de taponamiento se considera positiva y el balón se mantiene durante doce a veinticuatro horas. Si persiste sangrado profuso continuo, se debe ingresar de inmediato a quirófano.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Cirugía hemostática',
      title: 'Manejo Quirúrgico Escalonado de la Atonía Uterina Refractaria',
      cards: [
        {
          title: 'Cirugía Conservadora de Preservación Fértil',
          tag: 'Suturas y ligaduras',
          kind: 'key',
          items: [
            {
              t: 'Sutura de compresión miometrial de B-Lynch',
              d: 'Suturas hemostáticas continuas que envuelven el útero como tirantes comprimiendo las caras',
              say: 'La sutura hemostática de compresión de B-Lynch consiste en pasar suturas reabsorbibles gruesas que envuelven el cuerpo uterino verticalmente a modo de tirantes, comprimiendo de forma continua las paredes anterior y posterior del útero con excelente tasa de éxito.',
            },
            {
              t: 'Desvascularización pélvica escalonada',
              d: 'Ligadura selectiva bilateral de arterias uterinas y arterias ováricas (técnica de O-Leary)',
              say: 'La desvascularización pélvica escalonada incluye la ligadura bilateral selectiva de las arterias uterinas según la técnica de O-Leary y de las anastomosis útero-ováricas, reduciendo de manera inmediata el noventa por ciento de la perfusión arterial miometrial.',
            },
          ],
        },
        {
          title: 'Histerectomía Obstétrica de Urgencia',
          tag: 'Último recurso vital',
          kind: 'alert',
          items: [
            {
              t: 'Indicación definitiva ante sangrado incontrolable',
              d: 'Cuando fallan las suturas conservadoras o la paciente entra en coagulopatía o acidosis severa',
              say: 'Cuando las técnicas mecánicas y conservadoras fallan o si la paciente se encuentra en shock hipovolémico avanzado con coagulopatía de consumo e hipotermia, se debe proceder sin demora a la histerectomía obstétrica de urgencia como medida salvadora definitiva.',
            },
            {
              t: 'Histerectomía subtotal vs total',
              d: 'La histerectomía subtotal preservando el cuello es más rápida y disminuye tiempo quirúrgico',
              say: 'En puérperas con inestabilidad hemodinámica crítica se prefiere realizar una histerectomía obstétrica subtotal conservando el cuello uterino, ya que este abordaje quirúrgico es mucho más rápido y reduce las pérdidas sanguíneas intraoperatorias adicionales.',
            },
          ],
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Catástrofe puerperal rara',
      title: 'Inversión Uterina Puerperal: tracción forzada y shock neurogénico',
      nodes: [
        { id: 'tra', col: 0, row: 1, k: 'start', t: 'Tracción forzada del cordón', s: 'Tirar del cordón umbilical con placenta adherida en un útero flácido relajado' },
        { id: 'inv', col: 1, row: 1, k: 'trap', t: 'Invaginación del fondo uterino', s: 'El fondo se invagina hacia la cavidad como el dedo de un guante invertido' },
        { id: 'mas', col: 2, row: 1, k: 'alert', t: 'Masa globular en vagina o introito', s: 'Palpación de masa violácea en vagina y ausencia de fondo en el abdomen' },
        { id: 'sho', col: 3, row: 0, k: 'trap', t: 'Shock neurogénico desproporcionado', s: 'Hipotensión severa con bradicardia marcada por tracción del peritoneo' },
        { id: 'joh', col: 3, row: 2, k: 'good', t: 'Maniobra de Johnson inmediata', s: 'Reposición manual del fondo con la palma antes de iniciar uterotónicos' },
      ],
      edges: [
        { from: 'tra', to: 'inv', label: 'tracción violenta' },
        { from: 'inv', to: 'mas', label: 'exteriorización' },
        { from: 'inv', to: 'sho', label: 'tracción peritoneal' },
        { from: 'mas', to: 'joh', label: 'reducción manual' },
      ],
      steps: [
        {
          show: ['tra', 'inv', 'mas'],
          note: 'Mecanismo y semiología de la inversión',
          say: 'La causa principal de la inversión uterina es la tracción forzada del cordón umbilical durante el alumbramiento sin haber constatado contracción del fondo. El fondo se invagina dentro de su propia cavidad asomando como una masa rojo violácea por la vagina mientras el útero desaparece del abdomen.',
        },
        {
          show: ['sho', 'joh'],
          note: 'Shock neurogénico y reposición manual inmediata',
          say: 'La tracción intensa del peritoneo y los ligamentos anchos desencadena un shock neurogénico caracterizado por hipotensión arterial profunda acompañada de bradicardia paradójica. El tratamiento inmediato es la reposición manual con la maniobra de Johnson bajo relajación miometrial.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Maniobra de reducción',
      title: 'Manejo Inmediato de la Inversión Uterina Puerperal',
      cards: [
        {
          title: 'Suspender Uterotónicos y Relajar Miometrio',
          tag: 'Paso 1 de rescate',
          kind: 'alert',
          items: [
            {
              t: 'Suspender inmediatamente la oxitocina',
              d: 'Los uterotónicos contraen el anillo cervical impidiendo la reposición del fondo',
              say: 'La primera medida obligatoria ante una inversión uterina puerperal es suspender de inmediato cualquier infusión de oxitocina o uterotónicos, puesto que contraerían espásticamente el anillo cervical estrangulando el fondo invertido e impidiendo su retorno.',
            },
            {
              t: 'Administrar relajantes si el anillo está espástico',
              d: 'Anestesia general inhalatoria o nitroglicerina endovenosa para relajar el miometrio',
              say: 'Si el anillo cervical se encuentra fuertemente contraído se indican tocolíticos de acción rápida o se profundiza la anestesia general con agentes inhalatorios para relajar el miometrio y permitir la reducción manual del fondo.',
            },
          ],
        },
        {
          title: 'Maniobra de Johnson y Fijación Posterior',
          tag: 'Paso 2 y 3 de rescate',
          kind: 'pharma',
          items: [
            {
              t: 'Reposición manual con la maniobra de Johnson',
              d: 'Se empuja el fondo uterino con la palma de la mano hacia el ombligo materno',
              say: 'Mediante la maniobra de Johnson se coloca la palma de la mano sobre el fondo uterino invertido y con la punta de los dedos en la unión cérvico-uterina se empuja firmemente hacia arriba a través del canal vaginal en dirección al ombligo materno.',
            },
            {
              t: 'Uterotónicos a altas dosis tras la restitución',
              d: 'Reiniciar oxitocina a dosis plenas una vez que el útero esté en su posición correcta',
              say: 'Una vez que el fondo uterino ha sido restituido a su posición anatómica intrabdominal, recién en ese instante se inicia una infusión continua de oxitocina a altas dosis para lograr una contracción firme y sostenida que impida una nueva inversión.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo clínico de urgencia',
      title: 'Algoritmo Terapéutico Escalonado de la Hemorragia Postparto Inmediata',
      say: 'Revisemos el algoritmo escalonado para resolver la hemorragia postparto en el examen EUNACOM y en el servicio de urgencias.',
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Hemorragia Postparto en Preeclampsia · Uterotónico Prohibido',
      stem: 'Una paciente de 28 años con antecedente de Preeclampsia con criterios de severidad en tratamiento con labetalol presenta una hemorragia postparto masiva de 1.200 mL tras un parto vaginal. Al examen físico se palpa un útero atónico, supraumbilical y blando. Se inicia masaje bimanual y oxitocina endovenosa continua. El médico de turno solicita un segundo uterotónico para frenar el sangrado.',
      question: '¿Cuál de los siguientes fármacos uterotónicos está FORMALMENTE CONTRAINDICADO en esta paciente?',
      options: [
        { letter: 'A', text: 'Misoprostol sublingual' },
        { letter: 'B', text: 'Metilergonovina intramuscular' },
        { letter: 'C', text: 'Ácido Tranexámico endovenoso' },
        { letter: 'D', text: 'Carbetocina endovenosa' },
        { letter: 'E', text: 'Balón hidrostático de Bakri' },
      ],
      correct: 'B',
      explanation: 'La Metilergonovina (alcaloide derivado del cornezuelo del centeno) estimula potentes receptores alfa-adrenérgicos en el músculo liso vascular, provocando vasoconstricción periférica generalizada con alzas tensionales abruptas y severas. Por este motivo, está TERMINANTEMENTE CONTRAINDICADA en cualquier paciente con antecedente de hipertensión arterial crónica, preeclampsia, eclampsia o cardiopatía materna, por riesgo inminente de accidente cerebrovascular hemorrágico, eclampsia puerperal e infarto agudo de miocardio. En su lugar se debe optar por Misoprostol o Carbetocina.',
      say: {
        stem: 'Una puérpera con antecedente de preeclampsia severa presenta hemorragia postparto por atonía uterina que no cede con masaje y oxitocina.',
        question: '¿Cuál de los siguientes fármacos uterotónicos está formalmente contraindicado en esta paciente?',
        options: 'La opción A propone misoprostol. La B metilergonovina intramuscular. La C ácido tranexámico. La D carbetocina. La E balón de Bakri. Piénsalo.',
        answer: 'La respuesta correcta es la B. La metilergonovina está formalmente prohibida en pacientes con preeclampsia o hipertensión arterial por provocar vasoconstricción y accidentes cerebrovasculares.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Hemorragia con Útero Contraído · Desgarros del Canal',
      stem: 'Una puérpera inmediata de parto vaginal presenta sangrado genital rojo rutilante activo continuo y abundante. A la palpación abdominal el fondo uterino se palpa firme, contraído como una pelota (globo de seguridad de Pinard) a nivel infraumbilical. Se revisó la placenta y se constató completa con todas sus membranas.',
      question: '¿Cuál es la causa más probable de la hemorragia y cuál es la conducta médica indicada?',
      options: [
        { letter: 'A', text: 'Atonía uterina oculta; administrar segunda dosis de oxitocina y metilergonovina' },
        { letter: 'B', text: 'Trauma del canal del parto; colocar valvas ginecológicas y suturar desgarros' },
        { letter: 'C', text: 'Retención de cotiledón aberrante; realizar legrado instrumental a ciegas' },
        { letter: 'D', text: 'Coagulación intravascular diseminada; infundir 4 unidades de plasma fresco' },
        { letter: 'E', text: 'Inversión uterina puerperal; intentar maniobra manual de Johnson' },
      ],
      correct: 'B',
      explanation: 'El hallazgo de una hemorragia postparto activa y abundante en presencia de un útero firmemente contraído (globo de seguridad de Pinard presente y bien delimitado) con placenta alumbada íntegra y completa descarta la atonía uterina y orienta de forma categórica a TRAUMA del canal del parto (desgarros cervicales, de paredes vaginales o perineales). La conducta médica obligatoria es trasladar a la paciente a sala de procedimientos con iluminación adecuada, colocar valvas vaginales de peso, realizar inspección visual meticulosa de todo el trayecto genital y suturar inmediatamente los desgarros sangrantes.',
      say: {
        stem: 'Una puérpera inmediata presenta sangrado rojo rutilante abundante pero con fondo uterino firmemente contraído en globo de Pinard y placenta íntegra.',
        question: '¿Cuál es la causa más probable de la hemorragia y cuál es la conducta médica indicada?',
        options: 'La opción A propone atonía uterina oculta. La B trauma del canal del parto y sutura de desgarros bajo valvas ginecológicas. La C legrado instrumental. La D plasma fresco congelado. La E maniobra de Johnson. Piénsalo.',
        answer: 'La respuesta correcta es la B. Si el útero está duro y bien contraído pero la paciente sangra, la causa es un trauma del canal blando y se deben suturar los desgarros bajo valvas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Atonía Uterina Refractaria · Balón de Bakri',
      stem: 'En una paciente con hemorragia postparto inmediata por atonía uterina que no ha respondido al masaje uterino bimanual vigoroso ni a la administración combinada escalonada de oxitocina, ácido tranexámico y misoprostol, ¿cuál es el siguiente paso terapéutico conservador antes de decidir una laparotomía exploradora quirúrgica?',
      question: 'Seleccione la intervención de rescate indicada:',
      options: [
        { letter: 'A', text: 'Realizar legrado cortante enérgico con cureta metálica' },
        { letter: 'B', text: 'Instalación de un balón intrauterino de taponamiento hidrostático (Balón de Bakri)' },
        { letter: 'C', text: 'Histerectomía obstétrica total de emergencia como primer recurso' },
        { letter: 'D', text: 'Administración de heparina sódica en infusión continua' },
        { letter: 'E', text: 'Mantener conducta expectante con reposo en cama y bolsa de arena' },
      ],
      correct: 'B',
      explanation: 'Ante el fracaso del tratamiento médico farmacológico de primera línea (masaje bimanual y uterotónicos combinados) en la atonía uterina, el paso terapéutico conservador de elección es el TAPONAMIENTO MECÁNICO INTRAUTERINO mediante la colocación de un Balón de Bakri (insuflado con 300 a 500 mL de solución fisiológica tibia). Esta técnica evita la laparotomía en más del 80% de los casos de atonía refractaria. Si el balón no controla el sangrado (prueba de taponamiento negativa), se procede a la cirugía hemostática (B-Lynch o histerectomía).',
      say: {
        stem: 'Una paciente con hemorragia postparto por atonía no responde al masaje bimanual ni a oxitocina, ácido tranexámico ni misoprostol.',
        question: '¿Cuál es el siguiente paso terapéutico conservador antes de decidir una laparotomía?',
        options: 'La opción A propone legrado cortante enérgico. La B instalar un balón hidrostático de taponamiento tipo Bakri. La C histerectomía total de inmediato. La D heparina sódica. La E conducta expectante. Piénsalo.',
        answer: 'La respuesta correcta es la B. El balón de taponamiento hidrostático de Bakri es la medida mecánica conservadora de rescate antes de plantear la apertura quirúrgica del abdomen.',
      },
    },

    {
      type: 'points',
      kicker: 'Reglas de oro EUNACOM',
      title: 'Conceptos Clave de Hemorragia Postparto para el EUNACOM',
      cards: [
        {
          title: 'Regla de las 4T y Diagnóstico Semiologico',
          tag: 'Tono vs Trauma',
          kind: 'key',
          items: [
            {
              t: 'Útero blando es atonía (Tono)',
              d: 'Requiere masaje bimanual, oxitocina, ácido tranexámico y uterotónicos escalonados',
              say: 'Si el útero está blando y flácido a la palpación la causa indiscutible es atonía uterina, requiriendo masaje bimanual inmediato combinado con oxitocina endovenosa y un gramo de ácido tranexámico precoz.',
            },
            {
              t: 'Útero contraído es desgarro (Trauma)',
              d: 'Globo de Pinard presente con sangrado activo obliga a revisar el canal y suturar',
              say: 'Si el útero se palpa duro y firme en globo de Pinard pero persiste sangrado rojo activo continuo, la causa es un desgarro o trauma del canal del parto y exige exploración minuciosa con valvas y sutura hemostática inmediata.',
            },
          ],
        },
        {
          title: 'Contraindicaciones y Emergencias',
          tag: 'Prohibiciones y maniobras',
          kind: 'alert',
          items: [
            {
              t: 'Metilergonovina prohibida en preeclampsia',
              d: 'Genera crisis hipertensivas graves y accidentes cerebrovasculares',
              say: 'La metilergonovina está formalmente contraindicada en pacientes con preeclampsia o hipertensión arterial crónica debido a su potente efecto alfa-adrenérgico que provoca picos hipertensivos y hemorragia cerebral.',
            },
            {
              t: 'Inversión uterina: Johnson antes de uterotónicos',
              d: 'Suspender oxitocina, relajar el miometrio, reponer el fondo y luego contraer el útero',
              say: 'La maniobra de Johnson reposiciona el útero invertido antes de retirar la mano. Si te llevas una sola idea de hoy: ante una hemorragia postparto masiva activa el código rojo y aplica la regla de las cuatro T, recordando que la inercia uterina causa el setenta por ciento de los casos. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo Terapéutico Escalonado de la Hemorragia Postparto Inmediata',
    root: N(
      'start',
      'Hemorragia Postparto Inmediata (mayor a 1000 mL o signos de shock)',
      'Activar Código Rojo Obstétrico · dos vías venosas gruesas · Ácido Tranexámico 1 g EV',
      'Activamos el código rojo, canalizamos dos accesos venosos gruesos e indicamos ácido tranexámico.',
      [
        'Palpación abdominal: evaluar el tono uterino',
        N(
          'q',
          'Consistencia y Tono Uterino',
          'Diferenciación semiológica cardinal entre Tono (atonía) y Trauma (desgarros)',
          'Palpamos el fondo del útero para determinar si está blando o firmemente contraído.',
          [
            'Útero blando y flácido (Atonía Uterina - 70%)',
            N(
              'do',
              'Masaje Bimanual + Uterotónicos Escalonados',
              'Oxitocina infusión + Metilergonovina IM (si no es hipertensa) o Misoprostol 800 mcg',
              'Iniciamos masaje bimanual y oxitocina continua, agregando metilergonovina o misoprostol.',
              [
                'Fracaso del tratamiento médico farmacológico',
                N(
                  'do',
                  'Taponamiento con Balón de Bakri',
                  'Insuflar 300 a 500 mL de suero fisiológico tibio · prueba de taponamiento',
                  'Si persiste sangrado instalamos el balón hidrostático de Bakri antes de abrir abdomen.',
                  [
                    'Sangrado persistente profuso (Balón refractario)',
                    N(
                      'alert',
                      'Laparotomía Quirúrgica de Emergencia',
                      'Suturas de compresión hemostática de B-Lynch o Histerectomía obstétrica',
                      'Ante falla del balón ingresamos a laparotomía para B-Lynch o histerectomía de rescate.',
                    ),
                  ],
                ),
              ],
            ),
          ],
          [
            'Útero duro y contraído en globo de Pinard (Trauma - 20%)',
            N(
              'do',
              'Exploración del Canal del Parto con Valvas',
              'Inspección meticulosa de cérvix, paredes vaginales y periné · sutura inmediata',
              'Con útero duro revisamos el canal con valvas ginecológicas y suturamos los desgarros.',
            ),
          ],
        ),
      ],
    ),
  },
};
