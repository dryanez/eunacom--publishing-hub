const { flowCirugia } = require('./flow_builder.cjs');

const bloque3Classes = [
  // ==========================================================================
  // TEMA 11.9: EVALUACIÓN INICIAL DEL POLITRAUMATIZADO (ATLS) (TIER 3 · 4 PÁGINAS)
  // ==========================================================================
  {
    id: 'cir-09',
    classId: 'cirugia-09',
    tier: 3,
    blockNum: 3,
    blockName: 'Politraumatizado, Cirugía de Urgencia & Quemaduras (ATLS)',
    topicLabel: '11.9',
    title: 'Evaluación Inicial del Politraumatizado: Protocolo ATLS (A-B-C-D-E)',
    perfilCode: '4.01.2.027, 4.01.5.014',
    dx: 'Sospecha',
    tx: 'Inicial',
    seg: 'Derivar',
    ges: 'GES N° 54: Politraumatizado Grave · Atención de urgencia inmediata garantizada con acceso en menos de 24 horas a centro de alta complejidad.',
    reconstrucciones: 'EUNACOM Julio 2024 (Q#102) · EUNACOM Enero 2023 (Q#88)',
    frecuencia: 'Máxima rentabilidad en el EUNACOM · Metodología transversal de urgencias traumáticas',
    diagram: flowCirugia('Protocolo ATLS de Evaluación Inicial del Politraumatizado (A-B-C-D-E)', [
      { t: 'Ingreso del Paciente Politraumatizado Grave (Triage y Box de Reanimación)', s: 'Prioridad: Tratar primero la lesión que mata primero · Evaluación y reanimación simultáneas', type: 'acc' },
      { t: 'A: Vía Aérea con Control de Columna Cervical', s: 'Alineación bimanual en línea · Retirar collar para intubación · Indicación de vía aérea si GCS ≤ 8', type: 'warn' },
      { t: 'B: Ventilación y Oxigenación (Descartar Neumotórax a Tensión)', s: 'Oxígeno a alto flujo con mascarilla de no reinhalación · Descompresión inmediata si tensión', type: 'crit' },
      { t: 'C: Circulación y Control de Hemorragias (Torniquete y Reanimación 1:1:1)', s: 'Dos vías venosas cortas y gruesas (14-16G) · Ácido tranexámico 1 g EV en < 3 h · Faja pélvica', type: 'crit' },
      { t: 'D: Déficit Neurológico (Glasgow) & E: Exposición y Prevención de Hipotermia', s: 'Desvestir por completo con giro en bloque · Calentamiento activo (mantas y sueros tibios)', type: 'acc' }
    ]),
    contexto: 'El politraumatismo es una de las principales causas de muerte e incapacidad en adultos jóvenes en Chile. El protocolo ATLS (Advanced Trauma Life Support) del Colegio Americano de Cirujanos sistematiza la atención del trauma para evitar muertes prevenibles en la "hora dorada". Se fundamenta en el principio inquebrantable de priorizar el tratamiento de la lesión con mayor riesgo vital inmediato antes de continuar con la evaluación sistemática. La tríada letal del trauma (hipotermia, acidosis metabólica y coagulopatía) debe prevenirse activamente desde el primer minuto con reanimación hemostática y control precoz del daño.',
    contentSections: [
      {
        subhead: '1. Principios Generales del ATLS y Distribución Trimodal de la Mortalidad',
        paragraphs: [
          'La mortalidad por trauma sigue una <strong>distribución trimodal</strong> clásica: 1) <strong>Primer pico (inmediato, segundos a minutos):</strong> Por lesiones incompatibles con la vida (rotura de aorta torácica, transección medular alta, trauma encéfalo-craneano devastador); solo prevenibles mediante medidas de seguridad vial y salud pública; 2) <strong>Segundo pico (precoz, minutos a horas o "hora dorada"):</strong> Por hematomas intracraneales (epidural/subdural), neumotórax a tensión, hemotórax masivo, rotura esplénica o hepática, fracturas inestables de pelvis y shock hemorrágico; este grupo constituye el <em>objetivo prioritario del protocolo ATLS</em>; 3) <strong>Tercer pico (tardío, días a semanas):</strong> Por sepsis, falla multiorgánica (SDMO) y coagulopatía en la UPC.',
          'La evaluación inicial se divide rigurosamente en: <strong>Evaluación Primaria (A-B-C-D-E) con resucitación concomitante inmediata</strong>, seguida de la reevaluación continua de las funciones vitales, y finalmente la <strong>Evaluación Secundaria</strong> detallada céfalo-caudal una vez estabilizado el paciente.'
        ]
      },
      {
        subhead: '2. Evaluación Primaria Sistemática: Pasos A-B-C-D-E',
        paragraphs: [
          '<strong>A (Airway con restricción de movimiento cervical):</strong> Asegurar permeabilidad de la vía aérea retirando secreciones, sangre o cuerpos extraños, manteniendo <strong>estricto control cervical en línea bimanual</strong>. El collar cervical semirrígido se retira transitoriamente solo durante la intubación mientras un segundo operador mantiene la alineación manual neutra para evitar hiperextensión o flexión. Criterios de vía aérea definitiva (intubación orotraqueal): apnea, compromiso severo de conciencia con <strong>Escala de Glasgow ≤ 8 puntos</strong>, quemadura inhalatoria con estridor, o volet costal con insuficiencia respiratoria severa. Si la intubación orotraqueal no es posible tras 2-3 intentos, el procedimiento quirúrgico de rescate de elección es la <strong>Cricotiroidotomía quirúrgica</strong>.',
          '<strong>B (Breathing y ventilación):</strong> Inspección, palpación, percusión y auscultación del tórax para descartar y tratar de inmediato las lesiones mortales torácicas: neumotórax a tensión (descompresión inmediata con aguja), neumotórax abierto (parche oclusivo sellado en tres puntas), hemotórax masivo (tubo de tórax grueso) y tórax volante con contusión pulmonar.',
          '<strong>C (Circulation con control de hemorragia):</strong> Identificación y detención de hemorragias externas exanguinantes mediante <strong>presión directa firme o torniquete hemostático en extremidades</strong>. Instalación inmediata de <strong>dos vías venosas periféricas cortas y gruesas (14 o 16G)</strong> en antebrazo (o acceso intraóseo en tibia proximal/húmero si no hay acceso venoso en < 90 segundos). Se inicia <strong>reanimación hemostática de control de daños con relación 1:1:1</strong> (concentrado de glóbulos rojos, plasma fresco congelado y plaquetas) y administración precoz de <strong>Ácido Tranexámico 1 g EV en bolo</strong> en los primeros 10 minutos (siempre dentro de las 3 primeras horas del trauma). Se adopta una estrategia de <em>hipotensión permisiva</em> (PAS meta 80-90 mmHg en trauma cerrado sin TEC) limitando los cristaloides a máximo 1.000 mL para evitar hemodilución e hipotermia.',
          '<strong>D (Disability - Estado neurológico):</strong> Evaluación rápida del nivel de conciencia mediante la Escala de Coma de Glasgow y examen pupilar (simetría, tamaño y fotorreactividad).',
          '<strong>E (Exposure y control de hipotermia):</strong> Desvestir completamente al paciente cortando la ropa para examinar toda la superficie corporal; girar en bloque (log-roll) para inspección y palpación de la columna vertebral y dorso; e inmediatamente cubrir con mantas térmicas e infundir fluidos tibios (39 °C) para <strong>prevenir la hipotermia</strong>.'
        ]
      },
      {
        subhead: '3. Anexos de la Evaluación Primaria y Contraindicaciones de Sondas',
        paragraphs: [
          'Los anexos fundamentales son: 1) Monitorización cardíaca continua y oximetría de pulso; 2) Gasometría arterial y lactato sérico seriado; 3) Radiografías de trauma básicas (Radiografía de tórax AP de pie/decúbito y Radiografía de pelvis AP); y 4) <strong>Eco-FAST abdominal</strong>.',
          '<strong>Sonda Vesical (Foley):</strong> Indispensable para cuantificar la diuresis horaria (meta de resucitación > 0.5 mL/kg/h). <em>Contraindicación absoluta:</em> Sospecha de lesión traumática uretral. Signos de rotura uretral: <strong>sangre en el meato uretral (uretrorragia), hematoma perineal o escrotal en "alas de mariposa", y próstata flotante o no palpable al tacto rectal</strong>. Ante cualquiera de estos hallazgos, está prohibido colocar sonda Foley y se debe solicitar uretrografía retrógrada o instalar cistostomía suprapúbica percutánea.',
          '<strong>Sonda Nasogástrica (SNG):</strong> Indicada para descomprimir el estómago y reducir el riesgo de broncoaspiración. <em>Contraindicación absoluta por vía nasal:</em> Sospecha de <strong>fractura de base de cráneo o trauma maxilofacial grave</strong> (signos: ojos de mapache, signo de Battle, rinorraquia u otorraquia), ya que la sonda puede penetrar la lámina cribiforme hacia el lóbulo frontal; en estos pacientes, la sonda se coloca por vía <strong>orogástrica</strong>.'
        ]
      },
      {
        subhead: '4. Evaluación Secundaria y Cirugía de Control de Daños',
        paragraphs: [
          'La <strong>Evaluación Secundaria</strong> solo comienza cuando la evaluación primaria ha finalizado, las maniobras de reanimación están en curso y se han normalizado los parámetros vitales. Consiste en la historia clínica dirigida mediante la mnemotecnia <strong>AMPLIA</strong>: <strong>A</strong>lergias, <strong>M</strong>edicamentos habituales, <strong>P</strong>atologías previas / embarazo, <strong>L</strong>ibaciones / última comida, e <strong>I</strong>ncidente / <strong>A</strong>mbiente del trauma; seguido de un examen físico minucioso "de la cabeza a los pies".',
          '<strong>Cirugía de Control de Daños (Damage Control Surgery):</strong> En pacientes politraumatizados críticos con coagulopatía, hipotermia (< 35 °C) y acidosis láctica severa (pH < 7.2), está formalmente contraindicada una cirugía definitiva prolongada. Se realiza una laparotomía abreviada en 3 etapas: 1) <strong>Control hemostático y de contaminación rápido</strong> (< 60-90 min) mediante packing intraabdominal con compresas y suturas simples o ligaduras en bucle; 2) <strong>Cierre temporal del abdomen (Bolsa de Bogotá o sistema de presión negativa)</strong> y traslado a UPC para recalentamiento, reversión de coagulopatía y soporte intensivo durante 24 a 48 horas; y 3) <strong>Reintervención planificada (second look)</strong> a las 48-72 horas para retiro del packing y reconstrucción anatómica definitiva.'
        ]
      }
    ],
    table: {
      title: 'Protocolo ATLS — Evaluación Primaria (A-B-C-D-E), Acciones y Errores Fatales',
      headers: ['Etapa ATLS', 'Prioridad y Hallazgo Evaluado', 'Acción Terapéutica Inmediata', 'Error Fatal Frecuente'],
      rows: [
        ['A (Airway)', 'Permeabilidad de vía aérea y estabilidad cervical', 'Alineación bimanual cervical en línea + IOT si GCS ≤ 8', 'Hiperextender el cuello o demorar cricotiroidotomía'],
        ['B (Breathing)', 'Ventilación y lesiones torácicas de riesgo vital', 'Oxígeno alto flujo + Descompresión con aguja/tubo', 'Esperar radiografía en neumotórax a tensión'],
        ['C (Circulation)', 'Control de hemorragias externas y shock hemorrágico', 'Presión directa, torniquete, protocolo 1:1:1 + Ácido tranexámico', 'Sobrecargar con cristaloides (> 1 L) induciendo coagulopatía'],
        ['D (Disability)', 'Nivel de conciencia y reactividad pupilar', 'Escala Glasgow + Evaluar asimetría o midriasis pupilar', 'Atribuir compromiso de conciencia solo a intoxicación'],
        ['E (Exposure)', 'Inspección de toda la superficie corporal y dorso', 'Giro en bloque (log-roll) + Mantas térmicas y sueros tibios', 'Dejar al paciente desnudo provocando hipotermia refractaria']
      ]
    },
    severityTable: {
      title: 'Tríada Letal del Trauma y Criterios de Cirugía de Control de Daños',
      headers: ['Componente Tríada', 'Mecanismo Patogénico', 'Umbral de Alarma Crítica', 'Estrategia Terapéutica'],
      rows: [
        ['Hipotermia', 'Pérdida por exposición, shock y administración de fluidos fríos', 'Temperatura central < 35.0 °C (falla coagulación)', 'Calentamiento activo: mantas térmicas + sueros tibios a 39 °C'],
        ['Acidosis Metabólica', 'Hipoperfusión tisular sistémica y metabolismo anaerobio', 'pH < 7.20 y lactato sérico > 4.0 mmol/L', 'Restablecer perfusión con hemoderivados; control de hemorragia'],
        ['Coagulopatía de Consumo', 'Hemorragia masiva, hemodilución por sueros e hipotermia', 'Plaquetas < 50.000, fibrinógeno < 150 mg/dL, INR > 1.5', 'Protocolo transfusional masivo 1:1:1 + Ácido tranexámico precoz'],
        ['Control de Daños', 'Cirugía abreviada para salvar la vida en ambiente de colapso', 'Tríada letal presente o tiempo quirúrgico > 90 min', 'Packing con compresas + Abdomen abierto + UPC + Reoperación diferida']
      ]
    },
    treatmentTable: {
      title: 'Protocolo de Reanimación Hemostática, Ácido Tranexámico y Hemoderivados',
      headers: ['Intervención', 'Dosis / Posología Estándar', 'Ventana Temporal Estricta', 'Objetivos Clínicos / Metas'],
      rows: [
        ['Ácido Tranexámico (TXA)', '1 g EV en bolo (en 10 min) + 1 g EV en infusión continua en 8 h', 'Primeros 10 min tras el ingreso (estrictamente < 3 h del trauma)', 'Disminuye la mortalidad por sangrado; ineficaz si se da tras 3 h'],
        ['Protocolo Transfusión Masiva', 'Relación fija 1:1:1 (1 GR : 1 PFC : 1 Unidad de Plaquetas)', 'Activación inmediata ante shock hemorrágico clase III-IV', 'Evita la coagulopatía dilucional letal inducida por suero'],
        ['Cristaloides Isotónicos', 'Ringer Lactato tibio máximo 1.000 mL en bolo inicial', 'Fase inicial de evaluación primaria', 'Restringir su uso; pasar precozmente a hemoderivados'],
        ['Faja Pélvica / Cinchón', 'Colocación centrada sobre los trocánteres mayores femorales', 'Ante sospecha de fractura pélvica inestable con hipotensión', 'Reduce el volumen pélvico y favorece el taponamiento del sangrado venoso']
      ]
    },
    vignette: 'Hombre de 28 años, conductor de automóvil que colisionó a alta velocidad contra un árbol sin cinturón de seguridad, es traído al servicio de urgencia por personal paramédico. Ingresa con collar cervical rígido, inmovilizado en tabla espinal larga. Al ingreso: pálido, sudoroso, quejumbroso con dificultad respiratoria marcada, responde solo con gemidos incomprensibles y localiza estímulos dolorosos (Glasgow estimado 8 puntos). Su PA es de 82/48 mmHg, FC 128 lpm, SatO2 88% con mascarilla con reservorio. A la auscultación torácica se constata abolición completa del murmullo vesicular en el hemitórax izquierdo, con timpanismo marcado a la percusión, ingurgitación de las venas yugulares del cuello y desviación de la tráquea hacia la derecha.',
    explicacion: 'El paciente presenta un politraumatismo de alta energía en shock hemodinámico obstructivo y distributivo severo. Durante la evaluación primaria simultánea, el paso A evidencia un compromiso de conciencia crítico con Escala de Glasgow de 8 puntos, lo que constituye una indicación absoluta de aseguramiento de vía aérea definitiva (intubación orotraqueal con control cervical manual en línea bimanual). Sin embargo, en el paso B se diagnostica de forma clínica e inmediata un Neumotórax a Tensión en el hemitórax izquierdo (hipotensión severa, abolición del murmullo vesicular izquierdo, timpanismo, ingurgitación yugular y desviación traqueal contralateral). La regla de oro del ATLS es que el neumotórax a tensión es una emergencia con riesgo de muerte en segundos y su tratamiento es ESTRICTAMENTE CLÍNICO, estando formalmente prohibido diferir la descompresión para solicitar una radiografía de tórax. La conducta inmediata es la descompresión con aguja gruesa (14G) en el 5° espacio intercostal línea axilar anterior izquierda (o pleurostomía con tubo inmediata), seguida de intubación orotraqueal, reanimación hemostática con protocolo 1:1:1 y ácido tranexámico.',
    keyPoints: [
      'Prioridad ATLS absoluta: Tratar primero la lesión que mata primero; evaluación y reanimación simultáneas.',
      'A: Control cervical estricto en línea bimanual; retirar collar solo para intubación manteniendo alineación manual.',
      'Criterio de vía aérea definitiva: Escala de Coma de Glasgow ≤ 8 puntos, apnea, trauma inhalatorio o volet torácico grave.',
      'B: Descartar y tratar inmediatamente el neumotórax a tensión (descompresión clínica sin radiografía previa).',
      'C: Control de hemorragias externas exanguinantes con presión o torniquete; reposición 1:1:1 y Ácido Tranexámico < 3 horas.',
      'Contraindicación de sonda Foley: sospecha de lesión uretral (uretrorragia, hematoma perineal, próstata flotante).',
      'Contraindicación de sonda nasogástrica por nariz: fractura de base de cráneo o trauma facial masivo (instalar orogástrica).'
    ],
    questions: [
      {
        stem: 'Un hombre de 24 años es traído a urgencias tras sufrir una colisión en motocicleta a alta velocidad. Se encuentra inmovilizado en tabla espinal con collar cervical. Al ingreso está estuporoso, emite sonidos incomprensibles, no abre los ojos y presenta postura de descerebración al estímulo doloroso (Glasgow 4 puntos). Respira espontáneamente con esfuerzo respiratorio. ¿Cuál es la primera medida que debe adoptarse de acuerdo con el protocolo ATLS?',
        options: [
          { id: 'A', text: 'Trasladar de inmediato a pabellón para laparotomía exploradora' },
          { id: 'B', text: 'Realizar intubación orotraqueal con técnica de 4 manos y estabilización cervical manual en línea' },
          { id: 'C', text: 'Solicitar TAC de cráneo urgente para descartar hemorragia intracraneal' },
          { id: 'D', text: 'Administrar 2.000 mL de suero fisiológico frío en bolo por vía venosa' },
          { id: 'E', text: 'Instalar una sonda nasogástrica por fosa nasal derecha para descompresión' }
        ],
        correcta: 'B',
        explicacion: 'En el protocolo ATLS, el paso "A" (vía aérea con protección de la columna cervical) es la prioridad inicial indiscutida. Un paciente politraumatizado con un puntaje en la Escala de Coma de Glasgow ≤ 8 puntos (en este caso 4 puntos) es incapaz de proteger su vía aérea y presenta un riesgo inminente de aspiración, hipoxia y paro respiratorio, constituyendo una indicación absoluta de vía aérea definitiva (intubación orotraqueal). Esta debe realizarse con estabilización manual en línea bimanual de la columna cervical retirando temporalmente la parte anterior del collar.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.027'
      },
      {
        stem: 'Un paciente de 30 años politraumatizado por atropello ingresa pálido y taquicárdico con PA 80/50 mmHg. Al examen físico se constata presencia de sangre en el meato uretral y un hematoma en alas de mariposa en el perineo. ¿Cuál es la conducta correcta respecto a la instalación de sondas en este paciente?',
        options: [
          { id: 'A', text: 'Instalar sonda Foley lubricada con abundante gel con anestésico ejerciendo presión suave' },
          { id: 'B', text: 'Está contraindicada la instalación de sonda Foley uretral; solicitar uretrografía retrógrada o evaluar cistostomía suprapúbica' },
          { id: 'C', text: 'Instalar sonda nasogástrica y sonda Foley de inmediato para monitorizar balance hídrico' },
          { id: 'D', text: 'Dilatar la uretra con bujías metálicas previo al paso de sonda Foley 18 Fr' },
          { id: 'E', text: 'Realizar punción suprapúbica a ciegas con trocar grueso sin evaluación previa' }
        ],
        correcta: 'B',
        explicacion: 'La presencia de uretrorragia (sangre en el meato uretral), hematoma perineal o escrotal ("en alas de mariposa") y próstata flotante al tacto rectal son los signos clásicos de sospecha de rotura de uretra (frecuente en fracturas de pelvis). En esta situación está FORMALMENTE CONTRAINDICADA la instalación a ciegas de una sonda Foley por el riesgo de completar una rotura uretral parcial o crear falsas vías con hemorragia masiva e infección pélvica.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.027'
      },
      {
        stem: 'En el contexto de la reanimación de control de daños en un paciente politraumatizado con shock hemorrágico exanguinante, ¿cuál es el beneficio demostrado de la administración precoz de Ácido Tranexámico?',
        options: [
          { id: 'A', text: 'Aumentar la agregación plaquetaria si se administra después de las 4 horas del trauma' },
          { id: 'B', text: 'Reducir la mortalidad por sangrado al inhibir la fibrinólisis si se administra dentro de las primeras 3 horas del evento' },
          { id: 'C', text: 'Revertir de forma selectiva el efecto de los anticoagulantes orales directos' },
          { id: 'D', text: 'Disminuir la incidencia de insuficiencia renal aguda por rabdomiólisis' },
          { id: 'E', text: 'Reemplazar la necesidad de transfusión de plaquetas y plasma fresco congelado' }
        ],
        correcta: 'B',
        explicacion: 'El ensayo multicéntrico CRASH-2 y las guías ATLS demostraron que la administración precoz de Ácido Tranexámico (antifibrinolítico que bloquea competitivamente los receptores de lisina del plasminógeno) en dosis de 1 g EV en bolo seguido de 1 g en infusión por 8 horas, reduce significativamente la mortalidad en pacientes politraumatizados con shock hemorrágico, siempre y cuando se administre dentro de las primeras 3 horas del trauma. Administrado después de las 3 horas pierde su beneficio e incluso puede incrementar la mortalidad.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.027'
      },
      {
        stem: 'Un paciente politraumatizado grave en shock hemorrágico es llevado a pabellón para laparotomía de urgencia. A los 45 minutos de cirugía se constata temperatura central de 33.8 °C, pH arterial de 7.14, lactato de 6.2 mmol/L e incoagulabilidad microvascular difusa en sábana. ¿Cuál es la estrategia quirúrgica que debe adoptarse de inmediato?',
        options: [
          { id: 'A', text: 'Continuar la cirugía definitiva hasta reparar meticulosamente todas las lesiones vasculares y digestivas' },
          { id: 'B', text: 'Cirugía de control de daños: empaquetamiento (packing) rápido de cuadrantes con compresas, cierre temporal del abdomen y traslado urgente a UPC para resucitación' },
          { id: 'C', text: 'Administrar 4 ampollas de bicarbonato de sodio y finalizar con cierre formal de la pared por planos' },
          { id: 'D', text: 'Realizar bypass vascular femorofemoral y cerrar la laparotomía' },
          { id: 'E', text: 'Mantener al paciente en pabellón hasta que la temperatura se normalice espontáneamente' }
        ],
        correcta: 'B',
        explicacion: 'El paciente ha caído en la tríada letal del trauma (hipotermia severa <35 °C, acidosis metabólica profunda y coagulopatía de consumo establecida). En este estado de agotamiento fisiológico extremo, prolongar la cirugía definitiva culmina invariablemente en la muerte por coagulopatía irreversible en la mesa de operaciones. La conducta mandatoria es la Cirugía de Control de Daños: procedimiento abreviado para cohibir el sangrado grosero y contaminación (packing hepático/pélvico con compresas), cierre temporal de la pared abdominal (bolsa de Bogotá o vacío) y traslado inmediato a la UPC para recalentamiento activo y corrección metabólica, difiriendo la reconstrucción anatómica para un segundo tiempo a las 48-72 horas.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.027'
      }
    ]
  },
  // ==========================================================================
  // TEMA 11.10: TRAUMA TORÁCICO MAYOR (TIER 3 · 4 PÁGINAS)
  // ==========================================================================
  {
    id: 'cir-10',
    classId: 'cirugia-10',
    tier: 3,
    blockNum: 3,
    blockName: 'Politraumatizado, Cirugía de Urgencia & Quemaduras (ATLS)',
    topicLabel: '11.10',
    title: 'Trauma Torácico Mayor: Neumotórax a Tensión, Hemotórax Masivo & Tórax Volante',
    perfilCode: '4.01.2.016',
    dx: 'Específico',
    tx: 'Inicial',
    seg: 'Derivar',
    ges: 'Garantía GES Politraumatizado Grave (GES N° 54) · Procedimientos de rescate pleural y descompresión torácica inmediata cubiertos con garantía de urgencia vital.',
    reconstrucciones: 'EUNACOM Julio 2024 (Q#89) · EUNACOM Enero 2023 (Q#144) · EUNACOM Julio 2021 (Q#16) · EUNACOM Diciembre 2019 (Q#102)',
    frecuencia: 'Máxima rentabilidad histórica en EUNACOM · 6 preguntas directas de exámenes oficiales sobre drenajes y lesiones torácicas',
    diagram: flowCirugia('Algoritmo de Manejo de Lesiones Torácicas de Riesgo Vital Inmediato', [
      { t: 'Trauma Torácico Mayor con Dificultad Respiratoria o Shock', s: 'Evaluación rápida del tórax en el paso "B" de la evaluación primaria ATLS', type: 'acc' },
      { t: 'Diferenciación Clínica: Timpanismo vs Matidez a la Percusión', s: 'Timpanismo + Yugulares ingurgitadas vs Matidez + Yugulares colapsadas', type: 'warn' },
      { k: 'split', q: '¿Hallazgo Clínico Predominante y Estado Hemodinámico?', s: 'Neumotórax a Tensión vs Hemotórax Masivo vs Taponamiento Cardíaco',
        ll: 'Timpanismo + Ausencia MP + Hipotensión + Yugulares ingurgitadas',
        left: { t: 'Neumotórax a Tensión (Clínico)', s: 'DESCOMPRESIÓN INMEDIATA CON AGUJA 14G (5° EIC LAA) -> Pleurostomía con tubo', type: 'crit' },
        rl: 'Matidez + Ausencia MP + Shock + Yugulares colapsadas',
        right: { t: 'Hemotórax Masivo (> 1.500 mL)', s: 'Tubo pleural grueso (28-32 Fr) + Reanimación 1:1:1 · Toracotomía si sangrado masivo persistente', type: 'crit' }
      },
      { t: 'Movimiento Paradójico de Pared Costal (Volet / Tórax Volante)', s: '≥ 3 costillas fracturadas en 2 segmentos · Analgesia potente + Oxígeno (cuidar fluidos)', type: 'dec' },
      { t: 'Criterios de Toracotomía de Urgencia Inmediata', s: 'Débito inicial por pleurostomía > 1.500 mL o > 200 mL/h x 2-4 h consecutivas', type: 'crit' }
    ]),
    contexto: 'El trauma torácico es responsable de hasta un 25% de las muertes en pacientes politraumatizados. Más del 85% de las lesiones torácicas pueden resolverse de forma definitiva mediante procedimientos sencillos como el drenaje pleural o analgesia adecuada, requiriendo toracotomía quirúrgica formal menos del 10-15%. La causa más frecuente de muerte prevenible en el box de reanimación es el retraso en la descompresión de un neumotórax a tensión por esperar una radiografía de confirmación, lo cual constituye una infracción médica inexcusable.',
    contentSections: [
      {
        subhead: '1. Neumotórax a Tensión: Fisiopatología, Semiología y Descompresión',
        paragraphs: [
          'El <strong>neumotórax a tensión</strong> se desarrolla cuando se genera un mecanismo de válvula unidireccional por una laceración en el parénquima pulmonar o la pared torácica: el aire penetra a la cavidad pleural durante la inspiración pero queda atrapado sin poder escapar durante la espiración.',
          'La elevación continua de la presión intrapleural colapsa por completo el pulmón afectado y <strong>desplaza masivamente el mediastino y la tráquea hacia el lado contralateral</strong>, provocando la compresión extrínseca de la vena cava superior e inferior, angulación de las estructuras vasculares y colapso del retorno venoso al corazón derecho, desencadenando un <strong>shock obstructivo cardiogénico fulminante</strong> y paro cardiorrespiratorio en actividad eléctrica sin pulso (AESP).',
          '<strong>Semiología patognomónica:</strong> Paciente con disnea extrema, taquipnea, sudoración, cianosis, taquicardia severa e <strong>hipotensión arterial</strong>; al examen torácico: <strong>asimetría en la expansión, abolición total del murmullo vesicular ipsilateral, timpanismo resonante a la percusión, ingurgitación de las venas yugulares del cuello y desviación de la tráquea hacia el hemitórax contralateral</strong>.',
          '<strong>Tratamiento de urgencia:</strong> <em>EL DIAGNÓSTICO ES ESTRICTAMENTE CLÍNICO; ESTÁ PROHIBIDO ESPERAR UNA RADIOGRAFÍA DE TÓRAX</em>. La conducta inmediata es la <strong>descompresión con catéter venoso grueso (14 o 16G)</strong> en el <strong>5° espacio intercostal línea axilar anterior</strong> (sitio recomendado por ATLS 10ª edición por menor grosor parietal, aceptándose también el 2° EIC línea medioclavicular), seguido de la instalación definitiva de un <strong>tubo de drenaje pleural (pleurostomía de 28-32 Fr)</strong> conectado a una trampa de agua con aspiración suave en el 5° espacio intercostal entre la línea axilar anterior y media.'
        ]
      },
      {
        subhead: '2. Hemotórax Masivo: Criterios, Drenaje y Selección para Toracotomía',
        paragraphs: [
          'El <strong>hemotórax masivo</strong> se define por la <strong>acumulación rápida de más de 1.500 mL de sangre</strong> (o más de un tercio de la volemia del paciente) en la cavidad pleural, o un <strong>débito hemático continuo superior a 200 mL/hora durante 2 a 4 horas consecutivas</strong> a través del tubo pleural.',
          'Es causado habitualmente por la rotura o laceración traumática de vasos sistémicos de alta presión (arterias mamarias internas, intercostales o grandes vasos hiliares/aórticos) o desgarros extensos del parénquima pulmonar.',
          '<strong>Diferenciación semiológica cardinal con el neumotórax:</strong> A la percusión torácica se constata <strong>matidez franca</strong> (en vez de timpanismo), abolición del murmullo pulmonar, y al examen del cuello las <strong>venas yugulares se encuentran planas y colapsadas</strong> debido a la hipovolemia masiva severa (a diferencia de la ingurgitación del neumotórax a tensión o taponamiento).',
          '<strong>Manejo inicial:</strong> Colocación inmediata de un tubo de pleurostomía grueso (28 a 32 Fr) para evacuar la sangre (permitiendo la reexpansión pulmonar por taponamiento mecánico de la superficie visceral) e inicio en paralelo de <strong>transfusión de hemoderivados 1:1:1 con sistema de autotransfusión</strong> del débito pleural. <strong>Indicación formal de Toracotomía de Urgencia en pabellón:</strong> Débito inicial inmediato ≥ 1.500 mL de sangre fresca tras la colocación del tubo, o persistencia de sangrado activo > 200 mL/hora durante 2 a 4 horas, o necesidad continua de transfusión para mantener la estabilidad hemodinámica.'
        ]
      },
      {
        subhead: '3. Tórax Volante (Volet Costal) y Contusión Pulmonar',
        paragraphs: [
          'El <strong>tórax volante (flail chest)</strong> se produce por la <strong>fractura de 3 o más costillas consecutivas en dos o más sitios diferentes de su longitud</strong>, o fracturas costales asociadas a disyunción esternal, lo que ocasiona la pérdida de la continuidad ósea de un segmento de la pared torácica.',
          'Este segmento se desacopla del resto de la caja y presenta <strong>movimiento paradójico</strong>: durante la inspiración el segmento flácido es succionado hacia adentro por la presión intrapleural negativa, y durante la espiración protruye hacia afuera.',
          'Sin embargo, la causa primaria de la hipoxemia severa que amenaza la vida <strong>NO es el movimiento paradójico de la pared, sino la CONTUSIÓN PULMONAR SUBYACENTE</strong> (hemorragia alveolar, edema intraparenquimatoso, pérdida de surfactante y colapso de alvéolos con grave efecto de shunt arteriovenoso).',
          '<strong>Tratamiento:</strong> Oxigenoterapia para mantener SatO2 > 92%, <strong>analgesia potente y precoz</strong> (idealmente bloqueo regional epidural torácico o paravertebral continuo para permitir respiraciones profundas y evitar atelectasias), kinesioterapia respiratoria intensiva y <strong>administración prudente y restringida de líquidos cristaloides</strong> (la sobrecarga hídrica inunda el parénquima contundido y empeora catastróficamente la hipoxia). Si el paciente presenta insuficiencia respiratoria aguda refractaria (PaO2 < 60 mmHg con FiO2 0.5) o fatiga muscular, se procede a la intubación orotraqueal y ventilación mecánica con presión positiva al final de la espiración (PEEP).'
        ]
      },
      {
        subhead: '4. Taponamiento Cardíaco y Neumotórax Abierto',
        paragraphs: [
          '<strong>Taponamiento Cardíaco:</strong> Acumulación rápida de sangre en el saco pericárdico fibroso inextensible (habitualmente 150-200 mL en trauma agudo), comprimiendo las cavidades cardíacas e impidiendo el llenado ventricular diastólico. Es común en heridas penetrantes en el "área precordial o cardíaca de Zidler" (delimitada por la clavícula derecha superiormente, el reborde costal izquierdo inferiormente, la línea medioclavicular derecha y la línea axilar anterior izquierda).',
          'Se manifiesta por la clásica <strong>Tríada de Beck:</strong> 1) Hipotensión arterial con pulso débil; 2) Ruidos cardíacos apagados o velados a la auscultación; y 3) Ingurgitación de venas yugulares del cuello (presión venosa central elevada); asociada a <strong>pulso paradójico</strong> (caída > 10 mmHg de la PAS durante la inspiración espontánea). El <strong>Eco-FAST (ventana subxifoidea pericárdica)</strong> confirma el diagnóstico en segundos con sensibilidad > 95%. Tratamiento de urgencia: Ventana pericárdica subxifoidea o pericardiocentesis de rescate con aguja descompresiva, seguida de esternotomía o toracotomía en pabellón.',
          '<strong>Neumotórax Abierto ("Herida torácica soplante"):</strong> Defecto parietal mayor a dos tercios del diámetro traqueal, lo que provoca que el aire entre preferentemente por la herida parietal. <strong>Manejo de urgencia:</strong> Colocación de un <strong>parche oclusivo rectangular estéril fijado solo en TRES DE SUS LADOS</strong> (válvula de escape unidireccional: se pega al inspirar y se abre al espirar para liberar el aire retenido). Nunca cerrar los cuatro lados sin tubo pleural previo, pues causaría un neumotórax a tensión mortal.'
        ]
      }
    ],
    table: {
      title: 'Diagnóstico Diferencial: Neumotórax a Tensión vs Hemotórax Masivo vs Taponamiento',
      headers: ['Signo / Hallazgo Clínico', 'Neumotórax a Tensión', 'Hemotórax Masivo', 'Taponamiento Cardíaco'],
      rows: [
        ['Presión arterial y pulso', 'Hipotensión severa; taquicardia', 'Hipotensión severa (shock hipovolémico)', 'Hipotensión con pulso paradójico'],
        ['Murmullo vesicular', 'Abolido o muy disminuido ipsilateral', 'Abolido ipsilateralmente', 'Murmullo vesicular NORMAL bilateral'],
        ['Percusión torácica', 'TIMPANISMO hiperresonante marcado', 'MATIDEZ franca en hemitórax afecto', 'Sonoridad pulmonar conservada'],
        ['Venas del cuello', 'INGURGITACIÓN yugular prominente', 'PLANAS / COLAPSADAS (hipovolemia)', 'INGURGITACIÓN yugular prominente'],
        ['Posición traqueal', 'Desviación CONTRALATERAL de tráquea', 'Normal o levemente contralateral', 'Tráquea rigurosamente CENTRADA'],
        ['Tratamiento de elección', 'Punción descompresiva 14G -> Tubo pleural', 'Tubo pleural grueso (28-32 Fr) + Sangre', 'Eco-FAST -> Ventana pericárdica / Quirúrgico']
      ]
    },
    severityTable: {
      title: 'Criterios de Toracotomía de Urgencia en Trauma Torácico Mayor',
      headers: ['Tipo de Toracotomía', 'Criterios de Indicación Inmediata', 'Objetivo Quirúrgico', 'Tasa de Sobrevida / Pronóstico'],
      rows: [
        ['Toracotomía de Pabellón (Temprana)', 'Débito inicial por pleurostomía ≥ 1.500 mL o sangrado > 200 mL/h x 2-4 h', 'Control de hemorragia vascular (mamaria, intercostal, hilio) y resección pulmonar', 'Excelente si se opera precozmente (sobrevida > 70-80%)'],
        ['Toracotomía de Reanimación (Box)', 'Paro cardiorrespiratorio presenciado en box de urgencia con herida torácica penetrante (< 15 min)', 'Clampeo aórtico descendente, masaje cardíaco interno y alivio de taponamiento', 'Baja sobrevida global (< 10-15%); indicada solo en paro presenciado'],
        ['Fuga Aérea Masiva Persistente', 'Burbujeo continuo masivo en trampa de agua con incapacidad de reexpandir el pulmón', 'Sospecha de rotura de vía aérea mayor (bronquio principal o tráquea)', 'Requiere broncoscopía urgente y reparación quirúrgica abierta'],
        ['Lesión Esofágica Traumática', 'Presencia de aire mediastínico, derrame pleural turbio y amilasa elevada en líquido', 'Mediastinitis letal fulminante; debridamiento y sutura primaria urgente', 'Mortalidad > 30-40% si se demora más de 24 horas']
      ]
    },
    treatmentTable: {
      title: 'Técnica de Pleurostomía, Selección de Tubos y Cuidado de Drenajes Pleurales',
      headers: ['Paso / Procedimiento', 'Detalle Técnico Estandarizado', 'Material / Calibre Recomendado', 'Errores Críticos a Evitar'],
      rows: [
        ['Sitio de inserción', '5° Espacio Intercostal, entre línea axilar anterior y media', 'Triángulo de seguridad de la pared torácica lateral', 'Colocarlo muy bajo (> 6° EIC) perforando diafragma, bazo o hígado'],
        ['Paso de la costilla', 'Incisión y disección POR EL BORDE SUPERIOR de la costilla inferior', 'Protege el paquete vasculonervioso intercostal subcostal', 'Incisión pegada al borde inferior costal seccionando arteria intercostal'],
        ['Calibre de tubo', 'Neumotórax simple: 20-24 Fr · Hemotórax masivo: 28-32 Fr', 'Tubo torácico con mandril retirado antes de penetrar pleura', 'Usar tubos finos en hemotórax que se ocluyen precozmente por coágulos'],
        ['Conexión y succión', 'Sistema cerrado con sello de agua a -20 cmH2O de aspiración', 'Frasco de drenaje bajo el nivel del tórax del paciente', 'Elevar el frasco de drenaje sobre la camilla reingresando líquido a la pleura']
      ]
    },
    vignette: 'Hombre de 26 años es llevado al servicio de urgencia por testigos tras recibir una herida por arma blanca en el 4° espacio intercostal paraesternal izquierdo (área precordial). Al ingreso se encuentra pálido, confuso, con sudoración profusa. Signos vitales: PA 78/45 mmHg, FC 122 lpm débil y filiforme, FR 24 rpm, SatO2 96% con oxígeno ambiental. A la auscultación torácica se constata murmullo vesicular presente y simétrico en ambos campos pulmonares, sonoridad normal a la percusión bilateral, pero los ruidos cardíacos se perciben apagados y lejanos. En el cuello se observa una notable ingurgitación de ambas venas yugulares. Al medir la presión arterial se objetiva una disminución de 16 mmHg en la presión sistólica durante la inspiración espontánea.',
    explicacion: 'El paciente presenta una herida penetrante precordial con shock y la clásica Tríada de Beck (hipotensión con ruidos cardíacos apagados e ingurgitación yugular), acompañada de pulso paradójico (caída de PAS > 10 mmHg en inspiración) y murmullo pulmonar bilateral conservado, cuadro patognomónico de Taponamiento Cardíaco traumático agudo por hemopericardio a tensión. La presencia de ruidos respiratorios normales y sonoridad bilateral descarta neumotórax a tensión (el cual cursaría con timpanismo y abolición del murmullo unilateral). La conducta obligatoria es confirmar el derrame pericárdico mediante la ventana subxifoidea del Eco-FAST y trasladar inmediatamente a pabellón de cirugía para esternotomía o toracotomía exploradora con descompresión y sutura de la herida miocárdica (la pericardiocentesis con aguja es solo una medida de rescate transitorio si no hay pabellón disponible).',
    keyPoints: [
      'Neumotórax a tensión = hipotensión + timpanismo + abolición de MP + ingurgitación yugular + desviación traqueal.',
      'El diagnóstico del neumotórax a tensión es CLÍNICO; PROHIBIDO esperar radiografía; descompresión inmediata con aguja en 5° EIC LAA.',
      'Hemotórax masivo = matidez + abolición de MP + shock hipovolémico con yugulares colapsadas (planas).',
      'Indicación de toracotomía de urgencia en hemotórax: débito inicial ≥ 1.500 mL o sangrado persistente > 200 mL/h x 2-4 horas.',
      'Tórax volante (flail chest) = ≥ 3 costillas rotas en ≥ 2 segmentos; la causa de la hipoxemia es la CONTUSIÓN PULMONAR subyacente.',
      'En volet y contusión pulmonar: analgesia potente (bloqueo epidural/regional), oxígeno y RESTRICCIÓN prudente de fluidos.',
      'Tríada de Beck (hipotensión + ruidos cardíacos apagados + ingurgitación yugular) + pulso paradójico = taponamiento cardíaco (Eco-FAST).'
    ],
    questions: [
      {
        stem: 'Un hombre de 32 años sufre una agresión con arma blanca en el hemitórax derecho. Al llegar al box de urgencias presenta disnea severa, cianosis, sudoración y agitación psicomotora. Su PA es de 75/40 mmHg y su FC de 130 lpm. Al examen físico se constata abolición del murmullo pulmonar en todo el hemitórax derecho, timpanismo a la percusión y marcada ingurgitación de las venas yugulares, con desviación de la tráquea hacia la izquierda. ¿Cuál es la conducta inmediata que debe realizarse?',
        options: [
          { id: 'A', text: 'Solicitar radiografía de tórax portátil urgente para cuantificar el colapso pulmonar' },
          { id: 'B', text: 'Realizar descompresión pleural inmediata con aguja/catéter grueso en el 5° espacio intercostal línea axilar anterior derecha' },
          { id: 'C', text: 'Proceder a intubación orotraqueal inmediata y ventilación con presión positiva antes de cualquier procedimiento' },
          { id: 'D', text: 'Infusión rápida de 2.000 mL de suero fisiológico para restablecer la presión venosa' },
          { id: 'E', text: 'Realizar pericardiocentesis subxifoidea de urgencia con trocar metálico' }
        ],
        correcta: 'B',
        explicacion: 'El paciente presenta todos los signos clásicos de un Neumotórax a Tensión en el hemitórax derecho (shock obstructivo severo, timpanismo, abolición del murmullo vesicular, ingurgitación yugular y desviación traqueal contralateral). La regla cardinal y mandatoria del ATLS es que el neumotórax a tensión es una emergencia médica con riesgo vital en segundos cuyo diagnóstico es estrictamente CLÍNICO. Esperar una radiografía de tórax (A) es un error médico gravísimo que conduce a la muerte por colapso del retorno venoso. La intubación orotraqueal con presión positiva (C) sin descompresión previa aumenta la presión intratorácica y causa paro en AESP inmediato. La conducta correcta es la descompresión inmediata con aguja gruesa en el 5° EIC LAA seguida de tubo de tórax.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.016'
      },
      {
        stem: 'A un paciente de 25 años que sufrió un traumatismo torácico penetrante por herida de bala se le instala un tubo de drenaje pleural en el hemitórax izquierdo, obteniéndose de forma inmediata la salida de 1.700 mL de sangre fresca por el frasco de recolección, manteniéndose taquicárdico con PA 85/55 mmHg a pesar de iniciar transfusión de glóbulos rojos. ¿Cuál es la conducta de elección?',
        options: [
          { id: 'A', text: 'Instalar un segundo tubo de drenaje pleural en el mismo hemitórax' },
          { id: 'B', text: 'Trasladar de inmediato a pabellón de cirugía para Toracotomía de Urgencia' },
          { id: 'C', text: 'Pinzar el tubo de drenaje pleural durante 2 horas para permitir el taponamiento' },
          { id: 'D', text: 'Solicitar AngioTAC de tórax para localizar el vaso sangrante antes de decidir cirugía' },
          { id: 'E', text: 'Administrar sulfato de protamina y observar el débito durante 6 horas' }
        ],
        correcta: 'B',
        explicacion: 'El paciente presenta un Hemotórax Masivo con criterios formales de indicación quirúrgica inmediata (débito inicial por el tubo de tórax ≥ 1.500 mL de sangre asociado a inestabilidad hemodinámica persistente). Pinzar el tubo (C) convierte el hemotórax en un neumotórax/hemotórax a tensión fatal. Solicitar un AngioTAC (D) en un paciente hemodinámicamente inestable en shock hemorrágico activo está formalmente contraindicado. La indicación indiscutida es el traslado urgente a pabellón para Toracotomía exploradora de urgencia y control hemostático de la lesión vascular.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.016'
      },
      {
        stem: 'Un paciente de 45 años sufre un aplastamiento torácico en un accidente laboral. Al examen físico se observa una zona de la pared torácica anterolateral derecha que se deprime durante la inspiración y protruye durante la espiración, asociada a crepitaciones óseas de las costillas 4ª, 5ª y 6ª en dos segmentos. La radiografía confirma fracturas costales dobles en 3 arcos costales contiguos. El paciente refiere dolor insoportable al respirar y su SatO2 es de 87% con aire ambiental. ¿Cuál es el pilar patogénico principal responsable de la hipoxemia en este paciente?',
        options: [
          { id: 'A', text: 'La oscilación del aire viciado de un pulmón a otro (pendelluft)' },
          { id: 'B', text: 'La contusión pulmonar subyacente que genera edema y colapso alveolar' },
          { id: 'C', text: 'La rotura del conducto torácico con quilotórax masivo' },
          { id: 'D', text: 'La parálisis diafragmática ipsilateral por lesión del nervio frénico' },
          { id: 'E', text: 'La pérdida de la presión negativa intrapleural por fractura esternal' }
        ],
        correcta: 'B',
        explicacion: 'El paciente presenta un Tórax Volante (Volet Costal). Aunque históricamente se atribuía la hipoxemia al movimiento paradójico de la pared y al "pendelluft", la evidencia moderna y el ATLS han demostrado taxativamente que el factor patogénico determinante de la insuficiencia respiratoria y la hipoxemia es la CONTUSIÓN PULMONAR SUBYACENTE generada por el impacto de alta energía, la cual produce hemorragia intraalveolar, edema intersticial y una marcada alteración de la relación ventilación/perfusión (efecto shunt).',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.016'
      },
      {
        stem: 'Un hombre de 22 años llega a urgencias tras una riña con una herida de 4 cm en la pared torácica lateral derecha que produce un silbido y gorgoteo audible con cada movimiento respiratorio ("herida torácica soplante"). ¿Cuál es la medida de manejo de emergencia inicial que debe implementarse de inmediato en el box de reanimación?',
        options: [
          { id: 'A', text: 'Suturar herméticamente la herida con puntos totales en la piel en el box' },
          { id: 'B', text: 'Colocar un parche oclusivo rectangular estéril sellado en tres de sus cuatro lados' },
          { id: 'C', text: 'Instalar un tubo de tórax directamente a través de la misma herida traumática' },
          { id: 'D', text: 'Indicar intubación orotraqueal sin cubrir la herida parietal' },
          { id: 'E', text: 'Introducir una gasa con vaselina profundamente en la cavidad pleural' }
        ],
        correcta: 'B',
        explicacion: 'El paciente presenta un Neumotórax Abierto (herida soplante). Cuando el defecto parietal supera dos tercios del diámetro de la tráquea, el aire entra preferentemente por la pared torácica impidiendo la ventilación eficaz. La medida inicial de urgencia es colocar un parche oclusivo rectangular sellado en TRES DE SUS LADOS. Esto crea un mecanismo valvular fisiológico: al inspirar, el parche se adhiere a la piel impidiendo la entrada de aire exterior; al espirar, el extremo libre se levanta permitiendo que el aire intrapleural escape. Sellar los cuatro lados (A) sin un tubo pleural instalado previamente transformaría el cuadro en un neumotórax a tensión mortal.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.016'
      }
    ]
  },
  // ==========================================================================
  // TEMA 11.11: TRAUMA ABDOMINAL (TIER 3 · 4 PÁGINAS)
  // ==========================================================================
  {
    id: 'cir-11',
    classId: 'cirugia-11',
    tier: 3,
    blockNum: 3,
    blockName: 'Politraumatizado, Cirugía de Urgencia & Quemaduras (ATLS)',
    topicLabel: '11.11',
    title: 'Trauma Abdominal: Cerrado vs Penetrante, Eco-FAST & Laparotomía de Urgencia',
    perfilCode: '4.01.2.010',
    dx: 'Sospecha',
    tx: 'Inicial',
    seg: 'Derivar',
    ges: 'Garantía GES Politraumatizado Grave (GES N° 54) · Acceso expedito a laparotomía exploradora de urgencia y soporte intensivo en trauma abdominal exanguinante.',
    reconstrucciones: 'EUNACOM Julio 2024 (Q#64) · EUNACOM Diciembre 2022 (Q#109) · EUNACOM Enero 2021 (Q#77)',
    frecuencia: 'Muy alta frecuencia en el EUNACOM · Pregunta angular de decisión entre pabellón inmediato vs TAC abdominal',
    diagram: flowCirugia('Algoritmo de Decisión en Trauma Abdominal: Estado Hemodinámico y Eco-FAST', [
      { t: 'Paciente con Traumatismo Abdominal (Cerrado por Contusión o Penetrante)', s: 'Evaluación hemodinámica inmediata (PA sistólica < 90 mmHg vs Estable)', type: 'acc' },
      { t: 'Eco-FAST Inmediato en Box de Reanimación (4 Ventanas Acústicas)', s: '1) Morrison (hepatorrenal) · 2) Esplenorrenal · 3) Pélvico (Douglas) · 4) Pericárdico', type: 'warn' },
      { k: 'split', q: '¿Estado Hemodinámico y Resultado del Eco-FAST?', s: 'Bifurcación crítica entre laparotomía exploradora de urgencia o TAC con contraste',
        ll: 'INTESTABLE (PAS < 90 mmHg) + Eco-FAST (+) Líquido Libre',
        left: { t: 'Laparotomía Exploradora Urgente', s: 'PABELLÓN DIRECTO SIN TAC · Cirugía de control de daños si hipotermia/acidosis', type: 'crit' },
        rl: 'ESTABLE HEMODINÁMICAMENTE (Responde a fluidos / PAS ≥ 90)',
        right: { t: 'TAC de Abdomen y Pelvis con Contraste', s: 'Estándar de oro · Graduación AAST de bazo/hígado · Manejo No Operatorio (MNO)', type: 'dec' }
      },
      { t: 'Indicaciones Directas de Laparotomía de Urgencia sin Imagen', s: 'Peritonitis difusa (vientre en tabla), evisceración de asas o neumoperitoneo libre', type: 'crit' },
      { t: 'Manejo No Operatorio (MNO) en Lesiones de Víscera Sólida', s: 'Monitoreo en UPC + Hematocrito seriado c/6h + Angioembolización si hay extravasación (blush)', type: 'acc' }
    ]),
    contexto: 'El abdomen es una cavidad oculta capaz de albergar litros de sangre sin cambios físicos externos llamativos en las fases iniciales. En el trauma abdominal cerrado, los órganos lesionados con mayor frecuencia son el bazo (40-55%) y el hígado (35-45%). En el trauma penetrante por arma blanca, el hígado y el intestino delgado encabezan la frecuencia, mientras que en las heridas por arma de fuego el intestino delgado y el colon son los más vulnerables. La regla de oro en el EUNACOM es la bifurcación hemodinámica: paciente inestable con líquido libre en Eco-FAST va directamente a pabellón para laparotomía; paciente estable se estudia con TAC con contraste.',
    contentSections: [
      {
        subhead: '1. Mecanismos de Lesión, Órganos Comprometidos y Semiología',
        paragraphs: [
          '<strong>Trauma Abdominal Cerrado (Contuso):</strong> Producido por compresión directa, desaceleración brusca o cizallamiento (accidentes de tránsito, caídas de altura, atropellos). Los órganos sólidos son los más afectados debido a su parénquima friable y rica vascularización: <strong>1° Bazo (40-55%), 2° Hígado (35-45%), 3° Intestino delgado y mesenterio (5-10%)</strong> y retroperitoneo con hematomas pélvicos. En desaceleración brusca destaca la avulsión de pedículos vasculares y el desgarro de la unión ileocecal o duodeno-yeyunal fija (Ligamento de Treitz).',
          '<strong>Trauma Abdominal Penetrante:</strong>',
          '• <strong>Por Arma Blanca (Baja energía):</strong> El trayecto es lineal y lesiona las estructuras interpuestas: <strong>1° Hígado (40%), 2° Intestino delgado (30%), 3° Diafragma (20%) y 4° Colon (15%)</strong>.',
          '• <strong>Por Arma de Fuego (Alta energía):</strong> Genera daño por impacto directo, fragmentación ósea y <strong>cavitación temporal expansiva</strong>: <strong>1° Intestino delgado (50%), 2° Colon (40%), 3° Hígado (30%) y grandes vasos abdominales (25%)</strong>. En heridas de bala transperitoneales, la laparotomía exploradora es prácticamente mandatoria por la altísima probabilidad (>90%) de perforación visceral.',
          'Signos de alarma al examen físico: <strong>Signo de Kehr</strong> (dolor referido en el hombro izquierdo por irritación diafragmática producida por hemoperitoneo de origen esplénico); <strong>Signo del cinturón de seguridad</strong> (equimosis transversa en pared abdominal, altamente asociada a rotura de intestino delgado, desgarro mesentérico o fractura vertebral lumbar de Chance); hematomas periumbilicales (Signo de Cullen) o en flancos (Signo de Grey Turner) sugerentes de hemorragia retroperitoneal masiva.'
        ]
      },
      {
        subhead: '2. Protocolo Eco-FAST (Focused Assessment with Sonography for Trauma)',
        paragraphs: [
          'El <strong>Eco-FAST</strong> es una ecografía orientada, rápida (realizada en menos de 2 a 3 minutos en el box de reanimación simultáneamente con las maniobras del ABC), no invasiva y repetible, cuyo objetivo <strong>NO es caracterizar la lesión orgánica específica, sino DETECTAR LA PRESENCIA DE LÍQUIDO LIBRE ABNORMAL</strong> (habitualmente sangre) en los espacios peritoneales dependientes y el saco pericárdico.',
          '<strong>Las 4 ventanas acústicas estándar del Eco-FAST:</strong>',
          '1) <strong>Ventana Hepatorrenal (Espacio o Receso de Morrison):</strong> Entre el hígado y el riñón derecho. Es la <strong>ventana más sensible del abdomen</strong>; el líquido libre se visualiza precozmente como una franja anecoica negra.',
          '2) <strong>Ventana Esplenorrenal:</strong> Entre el bazo y el riñón izquierdo.',
          '3) <strong>Ventana Pélvica o Suprapúbica:</strong> Fondo de saco de Douglas en la mujer o espacio rectovesical en el varón, evaluando líquido acumulado en la pelvis verdadera.',
          '4) <strong>Ventana Pericárdica Subxifoidea:</strong> Evalúa la presencia de hemopericardio y taponamiento cardíaco.',
          '<strong>E-FAST (Extended FAST):</strong> Añade la evaluación pleural bilateral en los ápices anteriores (ausencia de deslizamiento pleural para neumotórax) y en las bases costofrénicas (hemotórax).'
        ]
      },
      {
        subhead: '3. Algoritmo de Decisión Terapéutica: Paciente Inestable vs Estable',
        paragraphs: [
          'La conducta médica en el trauma abdominal depende estrictamente de la <strong>estabilidad hemodinámica</strong> del paciente (definida por Presión Arterial Sistólica ≥ 90 mmHg y respuesta a la reanimación inicial con fluidos/hemoderivados):',
          '• <strong>PACIENTE HEMODINÁMICAMENTE INESTABLE (PAS < 90 mmHg refractaria):</strong>',
          '  - <strong>Si Eco-FAST es POSITIVO:</strong> Se traslada de inmediato a <strong>Pabellón para Laparotomía Exploradora Urgente</strong>. <em>ESTÁ FORMALMENTE CONTRAINDICADO LLEVAR A UN PACIENTE INESTABLE AL RESONADOR O TOMÓGRAFO (TAC)</em>, ya que la probabilidad de paro y muerte durante el examen es altísima.',
          '  - <strong>Si Eco-FAST es NEGATIVO o dudoso:</strong> Debe buscarse otra fuente oculta de shock hemorrágico masivo: fractura de pelvis inestable (colocar faja pélvica inmediata), hemotórax masivo o fracturas femorales bilaterales.',
          '• <strong>PACIENTE HEMODINÁMICAMENTE ESTABLE (O ESTABILIZADO):</strong>',
          '  - El examen de elección y estándar de oro es el <strong>TAC de abdomen y pelvis con contraste intravenoso</strong>. Permite graduar con exactitud las lesiones anatómicas de bazo, hígado o riñón según la escala de la AAST (American Association for the Surgery of Trauma), pesquisar extravasación activa de contraste (<em>blush arterial</em>) y evaluar el retroperitoneo.',
          '• <strong>INDICACIONES ABSOLUTAS DE LAPAROTOMÍA URGENTE (Sin necesidad de imágenes previas):</strong>',
          '  1) Inestabilidad hemodinámica persistente con sospecha fundada de sangrado intraabdominal;',
          '  2) Signos de <strong>peritonitis generalizada</strong> (defensa muscular involuntaria rígida, vientre en tabla);',
          '  3) <strong>Evisceración</strong> de asas intestinales u omento a través de una herida traumática;',
          '  4) Presencia de <strong>neumoperitoneo</strong> evidente en radiografía de tórax o abdomen;',
          '  5) Herida penetrante por arma de fuego con trayectoria transperitoneal evidente o sangrado gastrointestinal alto/bajo activo masivo.'
        ]
      },
      {
        subhead: '4. Manejo No Operatorio (MNO) de Lesiones de Víscera Sólida',
        paragraphs: [
          'En las últimas dos décadas, el <strong>Manejo No Operatorio (MNO)</strong> se ha consolidado como el estándar de cuidado en más del 80-90% de los traumatismos contusos de bazo, hígado y riñón.',
          '<strong>Requisitos indispensables para indicar MNO:</strong> 1) Estabilidad hemodinámica absoluta (espontánea o tras resucitación inicial); 2) Ausencia de signos de peritonitis o irritación peritoneal; 3) Ausencia de sospecha de lesión de víscera hueca concomitante (intestino o colon); 4) TAC con contraste disponible para gradación morfológica; y 5) Disponibilidad inmediata de monitorización en UPC, control seriadísimo de hematocrito y pabellón quirúrgico disponible las 24 horas.',
          '<strong>Angioembolización Arterial por Radiología Intervencional:</strong> Indicada como complemento del MNO en pacientes estables que presentan en el TAC extravasación activa de medio de contraste intraesplénica o intrahepática (<em>blush vascular</em>) o pseudoaneurismas traumáticos, logrando una tasa de éxito superior al 95% en la preservación esplénica y hepática.'
        ]
      }
    ],
    table: {
      title: 'Gradación AAST y Criterios de Manejo en Trauma Esplénico y Hepático',
      headers: ['Grado AAST', 'Lesión Esplénica / Hepática Típica', 'Estrategia de Tratamiento Estándar', 'Criterios de Conversión Quirúrgica'],
      rows: [
        ['Grado I', 'Hematoma subcapsular < 10% superficie; laceración capsular < 1 cm profundidad', 'Manejo No Operatorio (MNO): Reposo en cama x 48 h + Hematocrito seriado', 'Deterioro hemodinámico o caída inexplicable > 3-4 puntos de hematocrito'],
        ['Grado II', 'Hematoma subcapsular 10-50%; laceración parenquimatosa 1-3 cm', 'MNO en sala de agudos / UPC; monitorización no invasiva estricta', 'Aparición de dolor abdominal difuso progresivo o peritonismo franco'],
        ['Grado III', 'Hematoma subcapsular > 50% o roto; laceración > 3 cm profundidad', 'MNO en UPC; AngioTAC urgente; embolización si hay extravasación (blush)', 'Requerimiento transfusional > 2 unidades de GR en 24 horas'],
        ['Grado IV', 'Laceración que compromete vasos segmentarios o hiliares con desvascularización > 25%', 'Angioembolización si está estable; Cirugía urgente si hay shock', 'Inestabilidad hemodinámica persistente refractaria a resucitación'],
        ['Grado V', 'Estallido esplénico o hepático completo; desvascularización total del órgano', 'Laparotomía urgente: Esplenectomía total (bazo) / Packing hepático', 'Pabellón directo inmediato por shock hemorrágico exanguinante']
      ]
    },
    severityTable: {
      title: 'Zonas Anatómicas del Retroperitoneo y Conducta Quirúrgica ante Hematomas',
      headers: ['Zona Retroperitoneal', 'Límites Anatómicos y Estructuras Contenidas', 'Etiología Frecuente', 'Conducta Quirúrgica en Laparotomía'],
      rows: [
        ['Zona I (Central)', 'Desde hiato aórtico hasta promontorio sacro: Aorta abdominal, VCI, páncreas, duodeno', 'Trauma penetrante o desaceleración brusca severa', 'EXPLORACIÓN QUIRÚRGICA OBLIGATORIA (Riesgo de lesión de grandes vasos y duodeno)'],
        ['Zona II (Flancos)', 'Fosas lumbares y flancos: Riñones, glándulas suprarrenales, uréteres, colon ascendente/descendente', 'Trauma renal contuso o heridas lumbares', 'NO EXPLORAR si el hematoma es cerrado y no expansivo; Explorar si es penetrante o pulsátil'],
        ['Zona III (Pélvica)', 'Pelvis menor verdadera bajo promontorio sacro: Vasos ilíacos, plexo venoso presacro', 'Fracturas inestables de la pelvis (libro abierto)', 'NO EXPLORAR (abrirlo desata hemorragia exanguinante incoercible); Packing pélvico + Fijador']
      ]
    },
    treatmentTable: {
      title: 'Protocolo de Vigilancia del Manejo No Operatorio (MNO) y Cuidado de Esplenectomía',
      headers: ['Aspecto Clínico', 'Protocolo Estandarizado en UPC / Sala', 'Parámetros de Control y Monitoreo', 'Acciones Preventivas Críticas'],
      rows: [
        ['Monitoreo en MNO', 'Reposo absoluto en cama por 48 a 72 horas; régimen cero inicial', 'Hematocrito y hemoglobina cada 6-8 horas las primeras 24 h; signos vitales continuos', 'Ecografía o TAC de control solo si hay caída de hematocrito o dolor'],
        ['Profilaxis Trombosis', 'Heparina de bajo peso molecular (Enoxaparina 40 mg SC/día)', 'Iniciar a las 24-48 horas si el hematocrito se mantiene estable', 'La tromboprofilaxis precoz es segura y previene tromboembolismo pulmonar'],
        ['Vacunación Post-Esplenectomía', 'Profilaxis contra bacterias encapsuladas: Neumococo, Meningococo y H. influenzae tipo b', 'Administrar a los 14 días postoperatorios (o antes del alta)', 'Previene la sepsis fulminante por asplenia (OPSI) con mortalidad > 50%'],
        ['Reincorporación física', 'Evitar deportes de contacto y levantamiento de peso durante 2 a 3 meses', 'Control clínico y ecográfico a las 6-8 semanas post-alta', 'Riesgo de rotura esplénica retardada (hematoma subcapsular tardío)']
      ]
    },
    vignette: 'Hombre de 31 años, conductor que colisionó frontalmente a 80 km/h contra una barrera de contención con uso de cinturón de seguridad, es recibido en el box de reanimación. Al ingreso: quejumbroso, pálido y sudoroso, con dolor abdominal difuso y dolor referido al hombro izquierdo (signo de Kehr). Signos vitales: PA 84/48 mmHg, FC 126 lpm, FR 22 rpm, SatO2 96% con oxígeno por mascarilla. El abdomen presenta equimosis transversa lineal en hipogastrio (signo del cinturón), blando pero con dolor difuso moderado a la palpación profunda, sin abdomen en tabla franco. Se administran 1.000 mL de suero Ringer Lactato tibio en 10 minutos y se activa protocolo transfusional, registrándose una nueva PA de 82/46 mmHg (no respondedor hemodinámico). Se realiza de inmediato un Eco-FAST en el box que revela abundante líquido libre anecoico en el espacio hepatorrenal de Morrison y en el receso esplenorrenal.',
    explicacion: 'El paciente presenta un traumatismo abdominal cerrado de alta energía con shock hipovolémico/hemorrágico descompensado refractario a la resucitación con volumen (inestabilidad hemodinámica persistente) y un Eco-FAST positivo para hemoperitoneo masivo. En este escenario, la regla de oro indiscutida del ATLS es el traslado inmediato y directo a pabellón para una Laparotomía Exploradora de Urgencia para el control del foco hemorrágico (lo más probable una rotura esplénica o hepática grave). Llevar a este paciente inestable al tomógrafo para un TAC de abdomen (el llamado "viaje de la muerte" al scanner) es una negligencia médica inexcusable.',
    keyPoints: [
      'En trauma abdominal cerrado, los órganos más frecuentemente lesionados son el bazo (1°) y el hígado (2°).',
      'En trauma penetrante por arma blanca el órgano más lesionado es el hígado; por arma de fuego es el intestino delgado.',
      'El Eco-FAST evalúa 4 ventanas buscando LÍQUIDO LIBRE anormal: Morrison (hepatorrenal), esplenorrenal, pélvico y pericárdico.',
      'Paciente INESTABLE (PAS < 90) + Eco-FAST (+) = LAPAROTOMÍA EXPLORADORA URGENTE INMEDIATA (prohibido TAC).',
      'Paciente ESTABLE = TAC de abdomen y pelvis con contraste intravenoso (estándar de oro para MNO y gradación AAST).',
      'Manejo No Operatorio (MNO) de bazo/hígado: paciente estable, sin peritonitis ni lesión de víscera hueca; angioembolización si hay blush.',
      'Todo paciente sometido a esplenectomía total debe recibir vacunación contra bacterias capsuladas (Neumococo, Meningococo, Hib).'
    ],
    questions: [
      {
        stem: 'Un hombre de 29 años sufre un accidente de tránsito en calidad de conductor. Ingresa al servicio de urgencia con PA 80/50 mmHg y FC de 128 lpm. Pese a la infusión rápida de 1.000 mL de solución Ringer Lactato, su PA persiste en 82/52 mmHg. El examen abdominal demuestra dolor a la palpación en hemiabdomen izquierdo sin vientre en tabla franco. Se realiza un Eco-FAST en el box de reanimación que demuestra abundante líquido libre en el espacio de Morrison y en la pelvis. ¿Cuál es la conducta inmediata que debe realizarse?',
        options: [
          { id: 'A', text: 'Trasladar de inmediato a pabellón de cirugía para Laparotomía Exploradora' },
          { id: 'B', text: 'Trasladar a la sala de tomografía para realizar TAC de abdomen y pelvis con contraste' },
          { id: 'C', text: 'Realizar lavado peritoneal diagnóstico para confirmar el porcentaje de glóbulos rojos' },
          { id: 'D', text: 'Infusión de 2.000 mL adicionales de suero fisiológico frío y reevaluar en 30 minutos' },
          { id: 'E', text: 'Solicitar arteriografía percutánea para embolización vascular de urgencia' }
        ],
        correcta: 'A',
        explicacion: 'En un paciente politraumatizado que presenta inestabilidad hemodinámica persistente (shock hemorrágico refractario a fluidos iniciales) y un Eco-FAST positivo para hemoperitoneo, la conducta obligatoria e inaplazable es el traslado inmediato a pabellón para una Laparotomía Exploradora de Urgencia. Enviar a un paciente hemodinámicamente inestable al scanner para un TAC (B) está formalmente contraindicado por el altísimo riesgo de paro cardiorrespiratorio y muerte durante el traslado o la adquisición de imágenes.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.010'
      },
      {
        stem: '¿Cuál es el órgano abdominal que se lesiona con mayor frecuencia en los traumatismos abdominales cerrados (contusos) de alta energía?',
        options: [
          { id: 'A', text: 'Hígado' },
          { id: 'B', text: 'Bazo' },
          { id: 'C', text: 'Páncreas' },
          { id: 'D', text: 'Intestino delgado' },
          { id: 'E', text: 'Vejiga urinaria' }
        ],
        correcta: 'B',
        explicacion: 'En el traumatismo abdominal cerrado o contuso (accidentes de tránsito, caídas de altura, atropellos), el bazo es el órgano más frecuentemente lesionado (responsable del 40-55% de los casos de hemoperitoneo contuso), seguido de cerca por el hígado (35-45%). En el traumatismo penetrante por arma blanca el órgano más afectado es el hígado, mientras que en las heridas penetrantes por arma de fuego es el intestino delgado.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.010'
      },
      {
        stem: 'Un hombre de 24 años sufre una herida penetrante por arma blanca en el hipocondrio izquierdo. Al ingreso se encuentra vigil, con PA 120/75 mmHg y FC 80 lpm. El abdomen es blando, sin defensa ni irritación peritoneal. El examen físico de la herida confirma que la hoja penetró la aponeurosis anterior. El Eco-FAST resulta negativo para líquido libre intraabdominal y el TAC con contraste no muestra lesiones de vísceras sólidas ni neumoperitoneo. ¿Cuál es la conducta diagnóstica más adecuada para descartar una lesión diafragmática oculta?',
        options: [
          { id: 'A', text: 'Laparoscopía diagnóstica (o toracoscopía) para visualización directa del diafragma' },
          { id: 'B', text: 'Alta médica con reposo y analgésicos orales' },
          { id: 'C', text: 'Lavado peritoneal diagnóstico ambulatorio' },
          { id: 'D', text: 'Radiografía seriada de esófago, estómago y duodeno con bario' },
          { id: 'E', text: 'Ecocardiograma transtorácico' }
        ],
        correcta: 'A',
        explicacion: 'En las heridas penetrantes toracoabdominales izquierdas (por debajo del 4° espacio intercostal anterior o 6° posterior hasta el reborde costal), las lesiones diafragmáticas son frecuentemente silentes y no son pesquisadas de forma confiable ni por la radiografía ni por el TAC de abdomen. Si una rotura diafragmática izquierda no se repara, la gradiente de presión pleuroperitoneal provocará inevitablemente la herniación tardía y estrangulación de vísceras abdominales (estómago, colon). La conducta estándar para evaluar la indemnidad del hemidiafragma izquierdo en un paciente estable es la laparoscopía diagnóstica.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.010'
      },
      {
        stem: 'Un paciente de 35 años sufrió un traumatismo abdominal contuso con hematoma subcapsular y laceración esplénica Grado II tratada exitosamente mediante manejo no operatorio (MNO). A las 36 horas de evolución en la UPC, se encuentra afebril, hemodinámicamente estable con hematocritos seriados normales. ¿Cuál es la indicación correcta respecto a la profilaxis de trombosis venosa profunda (TVP)?',
        options: [
          { id: 'A', text: 'Contraindicar de forma definitiva cualquier anticoagulante durante toda la hospitalización' },
          { id: 'B', text: 'Iniciar tromboprofilaxis con heparina de bajo peso molecular (enoxaparina) al constatar estabilidad del hematocrito tras 24-48 horas' },
          { id: 'C', text: 'Iniciar anticoagulación plena con heparina no fraccionada en bomba de infusión' },
          { id: 'D', text: 'Indicar aspirina 300 mg al día por vía oral' },
          { id: 'E', text: 'Instalar de inmediato un filtro en la vena cava inferior' }
        ],
        correcta: 'B',
        explicacion: 'En el manejo no operatorio de traumatismos de víscera sólida (bazo o hígado), la evidencia actual y las guías de trauma recomiendan iniciar tromboprofilaxis farmacológica con heparina de bajo peso molecular (por ejemplo, enoxaparina 40 mg SC/día) de forma precoz, una vez que se haya demostrado la estabilidad clínica y del hematocrito (habitualmente entre las 24 y 48 horas del trauma). La inmovilización prolongada en cama sin profilaxis expone al paciente a un riesgo inaceptable de trombosis venosa profunda y embolia pulmonar mortal, sin que la heparina profiláctica aumente el riesgo de resangrado esplénico.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.010'
      }
    ]
  },
  // ==========================================================================
  // TEMA 11.12: TRAUMATISMO ENCÉFALO-CRANEANO (TEC) (TIER 3 · 4 PÁGINAS)
  // ==========================================================================
  {
    id: 'cir-12',
    classId: 'cirugia-12',
    tier: 3,
    blockNum: 3,
    blockName: 'Politraumatizado, Cirugía de Urgencia & Quemaduras (ATLS)',
    topicLabel: '11.12',
    title: 'Traumatismo Encéfalo-Craneano (TEC): Clasificación, Criterios de TAC & PIC',
    perfilCode: '4.01.2.027, 1.10.2.006',
    dx: 'Específico',
    tx: 'Inicial',
    seg: 'Derivar',
    ges: 'GES N° 55: Traumatismo Cráneo Encefálico (TEC) moderado o grave · Confirmación diagnóstica con neuroimagen en menos de 2 horas e ingreso prioritario a UPC.',
    reconstrucciones: 'EUNACOM Diciembre 2023 (Q#56) · EUNACOM Julio 2022 (Q#34) · EUNACOM Diciembre 2018 (Q#91)',
    frecuencia: 'Máxima rentabilidad en urgencias neurológicas y quirúrgicas · Criterios de indicación de TAC e hipertensión endocraneana',
    diagram: flowCirugia('Algoritmo de Manejo del Traumatismo Encéfalo-Craneano (TEC) y Criterios de TAC', [
      { t: 'Evaluación Inicial del TEC y Cuantificación de Escala Glasgow (GCS)', s: 'Leve (13-15 puntos) vs Moderado (9-12 puntos) vs Grave (≤ 8 puntos)', type: 'acc' },
      { t: 'TEC Moderado o Grave: TAC de Encéfalo sin Contraste Inmediato', s: 'TEC Grave: Intubación orotraqueal inmediata + Cabecera 30° + Neuroprotección', type: 'crit' },
      { k: 'split', q: '¿Puntaje Glasgow y Criterios de Alarma en TEC Leve (13-15)?', s: 'Reglas de decisión clínica (Canadian CT Head Rule / Nueva Orleans)',
        ll: 'TEC Leve con Factores de Riesgo (Anticoagulación, vómitos, edad ≥ 65)',
        left: { t: 'TAC de Encéfalo sin Contraste de Urgencia', s: 'Descartar hematoma epidural / subdural / fractura de base de cráneo', type: 'warn' },
        rl: 'TEC Leve de Bajo Riesgo (GCS 15, asintomático, sin factores)',
        right: { t: 'Observación Clínica y Alta con Pautas', s: 'Observar 4-6 horas en urgencias · Alta con cuidador responsable y signos de alarma', type: 'dec' }
      },
      { t: 'Hematoma Epidural (Lente Biconvexa) vs Subdural (Semiluna)', s: 'Epidural: Arteria meníngea media + Intervalo lúcido -> Craneotomía urgente', type: 'crit' },
      { t: 'Manejo de Presión Intracraneana (PIC) y Metas Hemodinámicas', s: 'Mantener PPC > 60 mmHg · Suero Salino Hipertónico 3% o Manitol 20% si herniación', type: 'acc' }
    ]),
    contexto: 'El traumatismo encéfalo-craneano (TEC) es la primera causa de muerte traumática en adultos jóvenes y niños. Se clasifica de acuerdo con la Escala de Coma de Glasgow en leve (13-15), moderado (9-12) y grave (≤8). En el TEC leve, el reto médico principal radica en identificar certeramente qué pacientes requieren un TAC de cerebro urgente para pesquisar lesiones quirúrgicas antes del deterioro neurológico irreversible. En el TEC grave, el objetivo primordial es la neuroprotección agresiva para evitar el daño cerebral secundario desencadenado por la hipoxia, la hipotensión arterial y la hipertensión endocraneana refractaria.',
    contentSections: [
      {
        subhead: '1. Clasificación por Severidad (Glasgow) y Fisiopatología del Daño Secundario',
        paragraphs: [
          'La severidad del TEC se estratifica mediante la <strong>Escala de Coma de Glasgow (GCS)</strong> evaluada tras la resucitación inicial: <strong>TEC Leve:</strong> GCS 13 a 15 puntos (representa el 80% de las consultas); <strong>TEC Moderado:</strong> GCS 9 a 12 puntos (10%); y <strong>TEC Grave:</strong> GCS ≤ 8 puntos (10%, incapaz de proteger vía aérea).',
          'Fisiopatológicamente se distinguen dos fases lesionales: 1) <strong>Daño Primario:</strong> Ocurre de forma instantánea al momento del impacto por fuerzas mecánicas directas, contusión cortical, laceración y daño axonal difuso (DAD); es biológicamente irreversible y su prevención depende exclusivamente de la seguridad vial y laboral; 2) <strong>Daño Secundario:</strong> Conjunto de noxas sistémicas e intracraneales que se desarrollan en los minutos, horas y días posteriores (<strong>hipotensión arterial sistémica, hipoxemia, hipercapnia, hipertermia, hiperglicemia e hipertensión endocraneana</strong>). El objetivo de todo el tratamiento médico de urgencia es prevenir y tratar activamente el daño secundario.',
          '<em>Principio de Monro-Kellie:</em> La cavidad craneal es un compartimento rígido con un volumen fijo constante compuesto por parénquima cerebral (80%), sangre (10%) y líquido cefalorraquídeo (10%). La aparición de una masa expansiva (hematoma) agota rápidamente los mecanismos de amortiguación (desplazamiento de LCR y sangre venosa), provocando una elevación exponencial de la Presión Intracraneana (PIC), colapso de la Presión de Perfusión Cerebral (<strong>PPC = PAM - PIC</strong>, normal > 60-70 mmHg), isquemia cerebral global y herniación encefálica mortal.'
        ]
      },
      {
        subhead: '2. Indicaciones de TAC de Encéfalo sin Contraste en TEC Leve (Reglas de Decisión)',
        paragraphs: [
          'En el TEC moderado (GCS 9-12) y en el TEC grave (GCS ≤ 8), el <strong>TAC de encéfalo sin contraste es MANDATORIO en el 100% de los casos de forma inmediata</strong>.',
          'En el <strong>TEC Leve (GCS 13-15)</strong>, las guías clínicas internacionales (Canadian CT Head Rule y New Orleans Criteria) y las guías GES de Chile establecen las indicaciones estrictas para solicitar un TAC de encéfalo urgente:',
          '• <strong>GCS menor a 15 puntos evaluado a las 2 horas del impacto.</strong>',
          '• <strong>Sospecha de fractura de cráneo abierta o con hundimiento</strong> (deformidad ósea palpable).',
          '• <strong>Signos físicos de fractura de base de cráneo:</strong> 1) Ojos de mapache (equimosis periorbitaria bilateral sin trauma facial directo); 2) Signo de Battle (equimosis retroauricular sobre la apófisis mastoides); 3) Otorraquia o rinorraquia (salida de líquido cefalorraquídeo claro por oído o nariz); 4) Hemotímpano en la otoscopía.',
          '• <strong>Vómitos reiterados</strong> (≥ 2 o más episodios explosivos).',
          '• <strong>Edad ≥ 65 años.</strong>',
          '• <strong>Pérdida de conciencia presenciada > 5 minutos</strong> o amnesia retrógrada del evento > 30 minutos.',
          '• <strong>Mecanismo de alta energía:</strong> Eyección de vehículo, caída de altura > 1 metro (o más de 5 escalones), o peatón atropellado.',
          '• <strong>Uso de anticoagulantes orales (Sintrom/Warfarina o DOACs) o coagulopatía conocida.</strong>'
        ]
      },
      {
        subhead: '3. Lesiones Intracraneales Frecuentes: Hematoma Epidural vs Subdural',
        paragraphs: [
          '<strong>Hematoma Epidural:</strong>',
          '• Colección hemática situada entre la tabla interna del hueso del cráneo y la duramadre. Se asocia en más del 85% de los casos a una fractura de la escama del hueso temporal con desgarro o rotura traumática de la <strong>Arteria Meníngea Media</strong> (sangrado arterial de alta presión).',
          '• <strong>Clínica clásica:</strong> Pérdida transitoria inicial de conciencia seguida de un <strong>"intervalo lúcido"</strong> asintomático de varias horas, tras el cual el paciente experimenta un rápido y brusco deterioro neurológico con cefalea severa, coma, midriasis paralítica ipsilateral (por herniación uncal con compresión del III par craneal) y hemiparesia contralateral.',
          '• <strong>Hallazgo tomográfico patognomónico:</strong> Imagen hiperdensa homogénea en <strong>lente biconvexa (convexa hacia el parénquima)</strong>, bien delimitada, que <strong>NO cruza las líneas de sutura craneal</strong> (debido a la íntima adherencia de la duramadre al periostio sutural). Tratamiento: Craneotomía y evacuación quirúrgica urgente.',
          '<strong>Hematoma Subdural Agudo:</strong>',
          '• Colección hemática situada entre la duramadre y la aracnoides, originada por la rotura de las <strong>venas puente corticales</strong> que drenan hacia los senos durales (sangrado venoso de baja presión pero gran volumen). Frecuente en ancianos con atrofia cerebral y en pacientes con desaceleración violenta.',
          '• <strong>Hallazgo tomográfico patognomónico:</strong> Imagen hiperdensa difusa en <strong>forma de semiluna cóncava</strong> que rodea la convexidad hemisférica y <strong>SÍ cruza libremente las suturas craneales</strong> (limitada solo por la hoz del cerebro o el tentorio), asociando habitualmente marcado edema cerebral y desviación de la línea media. Conlleva peor pronóstico funcional que el hematoma epidural por el grave daño axonal parenquimatoso subyacente.'
        ]
      },
      {
        subhead: '4. Manejo del TEC Grave y Medidas de Control de la Hipertensión Endocraneana',
        paragraphs: [
          'Todo paciente con <strong>TEC Grave (Glasgow ≤ 8)</strong> requiere de inmediato:',
          '1) <strong>Intubación orotraqueal</strong> con secuencia rápida e inmovilización cervical para proteger la vía aérea y asegurar una oxigenación óptima (PaO2 > 80 mmHg, SatO2 > 95%).',
          '2) <strong>Elevación de la cabecera de la cama a 30°</strong> con el cuello alineado en posición neutra para optimizar el drenaje venoso cerebral por las yugulares.',
          '3) <strong>Metas hemodinámicas estrictas:</strong> Evitar la hipotensión a toda costa (<strong>PAS DEBE ser ≥ 100 mmHg en pacientes de 50-69 años y ≥ 110 mmHg en < 50 o > 70 años</strong>; la Presión Arterial Media debe ser suficiente para mantener una PPC > 60-70 mmHg). Se utilizan fluidos cristaloides isotónicos (Suero Salino al 0.9%) y vasopresores como Noradrenalina si es preciso.',
          '4) <strong>Ventilación controlada con Normocapnia (PaCO2 35-40 mmHg):</strong> La hiperventilación profiláctica agresiva (PaCO2 < 30 mmHg) está formalmente proscrita porque produce vasoconstricción cerebral intensa e isquemia cerebral secundaria por hipoperfusión. Solo se permite hiperventilación transitoria leve como medida de rescate inmediato mientras se prepara la descompresión.',
          '5) <strong>Terapia Hiperosmolar de Urgencia (ante signos de herniación uncal o hipertensión endocraneana aguda):</strong> <strong>Suero Salino Hipertónico al 3%</strong> (bolo de 250-500 mL) o <strong>Manitol al 20%</strong> (0.5 a 1.0 g/kg EV en infusión en 20 minutos). En presencia de hipotensión arterial se prefiere Salino Hipertónico al 3%, ya que el Manitol induce diuresis osmótica e hipovolemia severa.'
        ]
      }
    ],
    table: {
      title: 'Diagnóstico Diferencial Tomográfico y Clínico: Hematoma Epidural vs Subdural vs HSA',
      headers: ['Característica Diferencial', 'Hematoma Epidural', 'Hematoma Subdural Agudo', 'Hemorragia Subaracnoidea Traumática'],
      rows: [
        ['Vaso lesionado', 'Arteria Meníngea Media (85%) asociada a fractura temporal', 'Venas puente corticales parasagitales', 'Laceración de pequeños vasos piales o corticales'],
        ['Espacio anatómico', 'Epidural (entre hueso craneal y duramadre)', 'Subdural (entre duramadre y aracnoides)', 'Subaracnoideo (en cisternas de la base y surcos)'],
        ['Patrón tomográfico', 'Imagen hiperdensa en LENTE BICONVEXA; NO cruza suturas', 'Imagen hiperdensa en SEMILUNA CÓNCAVA; SÍ cruza suturas', 'Hiperdensidad lineal en surcos cerebrales y cisternas'],
        ['Evolución clínica clásica', 'Intervalo lúcido -> deterioro brusco con midriasis', 'Deterioro neurológico progresivo e insidioso en ancianos', 'Cefalea occipital explosiva, fotofobia, meningismo'],
        ['Tratamiento definitivo', 'Craneotomía y evacuación quirúrgica inmediata de urgencia', 'Craneotomía descompresiva si espesor > 10 mm o shift > 5 mm', 'Manejo médico en UPC, analgesia y neuroprotección']
      ]
    },
    severityTable: {
      title: 'Escala de Coma de Glasgow y Estratificación de Severidad en el TEC',
      headers: ['Puntaje Glasgow Total', 'Categoría de Severidad', 'Riesgo de Lesión Quirúrgica en TAC', 'Conducta Médica Estandarizada'],
      rows: [
        ['13 a 15 puntos', 'TEC Leve', 'Bajo (3-5%); aumenta a > 15% con factores de alarma', 'Aplicar criterios de Canadian CT Head Rule; observar o TAC'],
        ['9 a 12 puntos', 'TEC Moderado', 'Moderado-Alto (20-30%)', 'TAC de encéfalo sin contraste OBLIGATORIO en 100% de casos; UPC'],
        ['3 a 8 puntos', 'TEC Grave', 'Muy Alto (> 40-50%); mortalidad elevada', 'INTUBACIÓN OROTRAQUEAL INMEDIATA + TAC + Monitorización de PIC en UPC']
      ]
    },
    treatmentTable: {
      title: 'Medidas de Neuroprotección de Primer Nivel en Hipertensión Endocraneana Aguda',
      headers: ['Parámetro Fisiológico', 'Meta Terapéutica Estricta', 'Medida Terapéutica Implementada', 'Efecto Adverso / Advertencia Crítica'],
      rows: [
        ['Presión de Perfusión (PPC)', 'PPC > 60 – 70 mmHg (PAM ≥ 80-90 mmHg)', 'Noradrenalina en infusión continua + Suero salino 0.9%', 'Evitar la hipotensión: un solo episodio duplica la mortalidad'],
        ['Posición de la cabecera', 'Cabecera elevada a 30° con cabeza centrada neutra', 'Optimización del retorno venoso cerebral por venas yugulares', 'Evitar rotaciones cervicales que compriman las venas yugulares'],
        ['Ventilación (PaCO2)', 'PaCO2 35 – 40 mmHg (Normocapnia estricta)', 'Ajuste de volumen corriente y frecuencia en ventilador mecánico', 'PROHIBIDA hiperventilación profiláctica (produce isquemia cerebral)'],
        ['Osmoterapia de Rescate', 'Salino Hipertónico 3% (250 mL) o Manitol 20% (0.5-1 g/kg)', 'Bolo endovenoso rápido ante signos de herniación uncal', 'Manitol contraindicado si hay hipotensión arterial sistémica'],
        ['Temperatura corporal', 'Normotermia estricta (Temperatura central 36.0 – 37.0 °C)', 'Paracetamol EV + Medidas físicas de enfriamiento continuo', 'La hipertermia incrementa exponencialmente el consumo metabólico (CMRO2)']
      ]
    },
    vignette: 'Hombre de 25 años es golpeado en la región temporal derecha con un bate de béisbol durante una riña. Inicialmente presentó pérdida de conciencia de 2 minutos, tras lo cual recuperó la vigilia completa, encontrándose orientado, quejándose únicamente de dolor local moderado en la sien derecha. Es llevado a un servicio de urgencia donde el examen inicial revela Glasgow 15 y pupilas isocóricas. Mientras espera la atención médica, dos horas después del traumatismo, el paciente se torna súbitamente soporoso, emite gemidos incomprensibles, no responde a órdenes verbales y adopta una postura flexora anormal de las extremidades al dolor (Glasgow 7 puntos). Al examen pupilar destaca midriasis paralítica arreactiva de la pupila derecha y miosis fotorreactiva en el ojo izquierdo.',
    explicacion: 'El cuadro clínico describe con precisión de texto la evolución clásica del Hematoma Epidural Agudo con su característico "intervalo lúcido" (pérdida de conciencia inicial breve seguida de lucidez transitoria y posterior colapso neurológico catastrófico). El mecanismo traumático en la región temporal fracturó la escama ósea, seccionando la Arteria Meníngea Media. La acumulación rápida de sangre a presión arterial en el espacio epidural desencadenó una hipertensión endocraneana masiva con Síndrome de Herniación Uncal (el uncus del lóbulo temporal comprime ipsilateralmente las fibras parasimpáticas periféricas del III par craneal produciendo midriasis derecha arreactiva, y el pedúnculo cerebral contralateral produciendo hemiparesia/rigidez). La conducta inmediata es el aseguramiento de la vía aérea mediante intubación orotraqueal con neuroprotección (elevación de cabecera, administración de Suero Salino Hipertónico al 3% o Manitol para rescate de la herniación) y traslado expedito e inmediato a pabellón de neurocirugía para craneotomía descompresiva urgente con evacuación del hematoma.',
    keyPoints: [
      'Clasificación de severidad según Escala de Glasgow: Leve (13-15), Moderado (9-12), Grave (≤ 8 puntos).',
      'TEC grave (Glasgow ≤ 8) exige INTUBACIÓN OROTRAQUEAL INMEDIATA y TAC de encéfalo sin contraste urgente.',
      'Signos de fractura de base de cráneo (ojos de mapache, signo de Battle, otorraquia, hemotímpano) OBLIGAN a TAC en TEC leve.',
      'Hematoma epidural = rotura de arteria meníngea media por fractura temporal, intervalo lúcido, TAC en lente biconvexa que NO cruza suturas.',
      'Hematoma subdural agudo = rotura de venas puente en ancianos/desaceleración, TAC en semiluna cóncava que SÍ cruza suturas.',
      'En TEC grave, la meta es evitar hipotensión (PAS DEBE ser ≥ 100-110 mmHg) e hipoxia para prevenir daño cerebral secundario.',
      'Ante signos de herniación (midriasis unilateral), indicar osmoterapia inmediata con Salino Hipertónico al 3% o Manitol al 20%.'
    ],
    questions: [
      {
        stem: 'Un hombre de 22 años sufre una caída de motocicleta con golpe en la cabeza. Inicialmente presentó pérdida transitoria de conciencia de 1 minuto, recuperándose por completo. Dos horas más tarde, mientras se encontraba en observación, evoluciona rápidamente con compromiso progresivo de conciencia, llegando al coma, y se constata anisocoria con midriasis pupilar derecha que no responde a la luz. ¿Cuál es el diagnóstico más probable?',
        options: [
          { id: 'A', text: 'Hemorragia subaracnoidea aneurismática' },
          { id: 'B', text: 'Hematoma epidural agudo por rotura de la arteria meníngea media' },
          { id: 'C', text: 'Hematoma subdural crónico con resangrado' },
          { id: 'D', text: 'Trombosis del seno venoso longitudinal superior' },
          { id: 'E', text: 'Contusión cerebral hemorrágica bifrontal' }
        ],
        correcta: 'B',
        explicacion: 'El cuadro corresponde al patrón clásico del Hematoma Epidural Agudo: traumatismo craneano (habitualmente con fractura temporal), pérdida inicial de conciencia, un "intervalo lúcido" asintomático de horas, y posterior deterioro neurológico fulminante con coma y midriasis ipsilateral (en este caso derecha) debida a la compresión del III par craneal por herniación uncal. Es provocado por la rotura de la arteria meníngea media y constituye una emergencia neuroquirúrgica absoluta.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.10.2.006'
      },
      {
        stem: 'Una mujer de 72 años en tratamiento con anticoagulantes orales directos (apixabán) por fibrilación auricular sufre una caída a nivel en su hogar, golpeándose levemente la cabeza. Al examen físico en urgencias se encuentra vigil, orientada en tiempo y espacio (Glasgow 15 puntos), sin focalidad neurológica y con una pequeña contusión occipital. De acuerdo con las normas de evaluación del TEC, ¿cuál es la conducta más adecuada?',
        options: [
          { id: 'A', text: 'Dar de alta de inmediato por encontrarse con Glasgow 15 sin déficit motor' },
          { id: 'B', text: 'Solicitar TAC de encéfalo sin contraste de urgencia y mantener en observación' },
          { id: 'C', text: 'Indicar radiografía de cráneo anteroposterior y lateral en el policlínico' },
          { id: 'D', text: 'Suspender el apixabán y citar a control ambulatorio en 7 días' },
          { id: 'E', text: 'Administrar concentrado de complejo protrombínico de forma profiláctica y enviar a domicilio' }
        ],
        correcta: 'B',
        explicacion: 'En un paciente con TEC leve (Glasgow 15), la presencia de edad avanzada (≥ 65 años) y el antecedente de tratamiento con anticoagulantes orales o antiagregantes plaquetarios son criterios de indicación formal e inmediata de TAC de encéfalo sin contraste (según las reglas de decisión de Canadian CT Head Rule y guías GES). Los ancianos anticoagulados presentan una incidencia muy elevada de hematomas subdurales o hemorragias intracraneales que pueden permanecer clínicamente silentes en las primeras horas.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.10.2.006'
      },
      {
        stem: '¿Cuál de los siguientes hallazgos tomográficos es característico de un hematoma subdural agudo?',
        options: [
          { id: 'A', text: 'Colección hiperdensa en forma de lente biconvexa que no sobrepasa las suturas craneales' },
          { id: 'B', text: 'Colección hiperdensa en forma de semiluna cóncava que bordea el hemisferio y puede cruzar suturas craneales' },
          { id: 'C', text: 'Hiperdensidad circunscrita exclusiva en las cisternas perimesencefálicas de la base' },
          { id: 'D', text: 'Lesiones petequiales hiperdensas puntiformes múltiples en la unión sustancia gris-blanca' },
          { id: 'E', text: 'Colección hipodensa homogénea con cápsula calcificada periférica' }
        ],
        correcta: 'B',
        explicacion: 'El hematoma subdural agudo se localiza en el espacio virtual entre la duramadre y la aracnoides. Al no encontrarse limitado por las inserciones de las suturas craneales (las cuales solo fijan la duramadre al hueso en el espacio epidural), la sangre se distribuye libremente por toda la convexidad hemisférica, adoptando una clásica morfología en semiluna cóncava hacia el parénquima cerebral que sí cruza las líneas de sutura craneal.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.10.2.006'
      },
      {
        stem: 'Un paciente de 28 años con TEC grave (Glasgow 6 puntos) se encuentra intubado en la Unidad de Pacientes Críticos. En el monitoreo invasivo se registra una Presión Intracraneana (PIC) de 28 mmHg (normal < 20 mmHg) y su presión arterial es de 85/50 mmHg. ¿Cuál es el error terapéutico que debe evitarse de manera prioritaria en este escenario?',
        options: [
          { id: 'A', text: 'Administrar noradrenalina para elevar la Presión Arterial Media' },
          { id: 'B', text: 'Indicar manitol al 20% en bolo en presencia de hipotensión arterial' },
          { id: 'C', text: 'Mantener la cabecera de la cama elevada en 30 grados' },
          { id: 'D', text: 'Mantener la PaCO2 en rango de normocapnia (35 a 40 mmHg)' },
          { id: 'E', text: 'Infusión de solución salina al 0.9% para reposición de volumen' }
        ],
        correcta: 'B',
        explicacion: 'El paciente presenta hipertensión endocraneana (PIC 28 mmHg) asociada a hipotensión arterial sistémica (PAM 61 mmHg, lo que genera una PPC crítica de solo 33 mmHg: PPC = PAM - PIC = 61 - 28 = 33 mmHg, muy por debajo de la meta de >60 mmHg). En este contexto de colapso hemodinámico, el uso de Manitol está formalmente contraindicado porque su potente efecto diurético osmótico agrava la hipovolemia, perpetúa la hipotensión y precipita la isquemia cerebral secundaria masiva. Si se requiere osmoterapia de rescate en presencia de hipotensión, se debe utilizar Suero Salino Hipertónico al 3% (el cual expande el volumen intravascular a la vez que reduce el edema cerebral) y restaurar la presión arterial con vasopresores y volumen.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.10.2.006'
      }
    ]
  },
  // ==========================================================================
  // TEMA 11.13: QUEMADURAS GRAVES & ATLS (TIER 3 · 4 PÁGINAS)
  // ==========================================================================
  {
    id: 'cir-13',
    classId: 'cirugia-13',
    tier: 3,
    blockNum: 3,
    blockName: 'Politraumatizado, Cirugía de Urgencia & Quemaduras (ATLS)',
    topicLabel: '11.13',
    title: 'Quemaduras Graves: Regla de Wallace, Reanimación Parkland & Criterios GES',
    perfilCode: '4.01.2.026',
    dx: 'Específico',
    tx: 'Inicial',
    seg: 'Derivar',
    ges: 'GES N° 56: Gran Quemado · Acceso a atención médica especializada de urgencia inmediata y traslado a centro de alta complejidad antes de 24 horas.',
    reconstrucciones: 'EUNACOM Julio 2023 (Q#133) · EUNACOM Diciembre 2021 (Q#72) · EUNACOM Julio 2019 (Q#85)',
    frecuencia: 'Muy alta rentabilidad en EUNACOM · Fórmulas de reanimación hidroelectrolítica y criterios de gravedad MINSAL',
    diagram: flowCirugia('Algoritmo de Manejo del Gran Quemado y Reanimación Parkland', [
      { t: 'Paciente con Quemaduras Térmicas, Químicas o Eléctricas', s: 'Detener proceso de quemadura · Enfriar con agua tibia (NO fría) · Evaluar vía aérea (injuria inhalatoria)', type: 'acc' },
      { t: 'Cálculo de Extensión: Regla de los 9 de Wallace (% SCQ)', s: 'Solo contabilizar quemaduras de 2° y 3° grado (el eritema de 1° grado NO cuenta)', type: 'warn' },
      { k: 'split', q: '¿Cumple Criterios de "Gran Quemado" (GES N° 56)?', s: 'Índice Garcés > 70 pts o SCQ > 20% en adultos (> 10% en niños/ancianos) o zonas especiales',
        ll: 'Criterio de Gran Quemado Positivo',
        left: { t: 'Activación Protocolo GES y Centro Especializado', s: 'Dos vías venosas periféricas gruesas (en piel sana o quemada) · Sonda Foley para diuresis', type: 'crit' },
        rl: 'Quemadura Menor No Complicada (< 10-15% SCQ)',
        right: { t: 'Manejo Ambulatorio o Sala Básica', s: 'Analgesia oral + Curaciones oclusivas estériles + Hidratación oral según tolerancia', type: 'dec' }
      },
      { t: 'Fórmula de Parkland (Ringer Lactato en 24 Horas)', s: '4 mL x kg x % SCQ (2° y 3° grado) · 50% en primeras 8 h (desde la quemadura) + 50% en 16 h restantes', type: 'acc' },
      { t: 'Monitorización Estricta de Diuresis Horaria y Escarotomía', s: 'Meta diuresis: 0.5 mL/kg/h en adultos (1.0 mL/kg/h en niños) · Escarotomía urgente si circular', type: 'crit' }
    ]),
    contexto: 'Las quemaduras graves desencadenan una respuesta inflamatoria sistémica masiva (SIRS) caracterizada por pérdida catastrófica de la permeabilidad capilar endotelial con fuga masiva de plasma, proteínas y electrolitos hacia el espacio intersticial ("shock por quemadura"). La mortalidad del gran quemado se define en las primeras 24 a 48 horas mediante una adecuada reanimación hidroelectrolítica con Ringer Lactato guiada por la diuresis horaria. En Chile, el Gran Quemado está protegido por la Garantía Explícita en Salud (GES N° 56), exigiendo derivación prioritaria antes de 24 horas a centros terciarios.',
    contentSections: [
      {
        subhead: '1. Clasificación por Profundidad y Evaluación de la Superficie (Wallace)',
        paragraphs: [
          '<strong>Clasificación de Profundidad de las Quemaduras:</strong>',
          '• <strong>Primer Grado (Epidérmica):</strong> Afecta exclusivamente la epidermis. Se manifiesta por eritema doloroso, sequedad y ausencia de flictenas (clásica quemadura solar). Cura espontáneamente en 3 a 5 días sin cicatriz. <em>Regla de Oro: El primer grado NO se contabiliza en el cálculo de la Superficie Corporal Quemada (SCQ) ni en las fórmulas de fluidos</em>.',
          '• <strong>Segundo Grado Superficial (Dérmica Superficial):</strong> Compromete epidermis y dermis papilar. Se caracteriza por <strong>ampollas o flictenas intactas</strong> de contenido seroso, lecho húmedo de color rosado brillante, extremadamente dolorosas y con llenado capilar conservado al presionarlas. Cicatriza en 10 a 14 días sin secuela estética.',
          '• <strong>Segundo Grado Profundo (Dérmica Profunda):</strong> Compromete dermis reticular. Flictenas rotas, lecho pálido o moteado rojizo-blanquecino, seco, con sensibilidad disminuida (hipoestésica) por destrucción de terminaciones nerviosas dérmicas. Tarda más de 21 días en epitelizar y suele requerir escarectomía e injerto para evitar cicatrices hipertróficas retráctiles.',
          '• <strong>Tercer Grado (Subdérmica Total):</strong> Destrucción de todo el espesor cutáneo hasta el tejido celular subcutáneo, fascia, músculo o hueso. Se presenta como una <strong>escara apergaminada, coriácea, de color blanco nacarado, marrón o negruzca carbonizada</strong>, completamente seca, indolora (anestésica) y sin llenado capilar. Requiere siempre escarectomía quirúrgica y cobertura con autoinjertos dermoepidérmicos.',
          '<strong>Regla de los 9 de Wallace para estimación de la SCQ en adultos:</strong> Cabeza y cuello: 9%; Tórax y abdomen anterior: 18%; Espalda y glúteos: 18%; Cada extremidad superior: 9% (ambas: 18%); Cada extremidad inferior: 18% (ambas: 36%); y Perineo/genitales: 1%. La palma de la mano del paciente (con los dedos juntos) equivale al 1% de su superficie corporal, siendo muy útil para quemaduras dispersas parcheadas.'
        ]
      },
      {
        subhead: '2. Criterios de Gran Quemado y Garantías GES N° 56',
        paragraphs: [
          'El régimen <strong>GES N° 56</strong> define al <strong>Gran Quemado</strong> según los siguientes criterios de ingreso obligatorio a centros de referencia especializados:',
          '1) <strong>Índice de Gravedad de Garcés > 70 puntos</strong> (o pronóstico de mortalidad severo o crítico):',
          '   <em>Índice de Garcés = Edad (años) + [% SCQ 2° Grado x 1] + [% SCQ 3° Grado x 2] + [% SCQ 4° Grado x 3]</em>. Un puntaje de 71-100 define gravedad severa y > 100 crítica.',
          '2) Pacientes con <strong>quemaduras de 2° o 3° grado mayores al 20% de SCQ</strong> en adultos (o > 10% en menores de 12 años o mayores de 65 años).',
          '3) Pacientes con <strong>quemaduras de 3° grado mayores al 10% de SCQ</strong>.',
          '4) Pacientes con <strong>quemadura de vía aérea o injuria por inhalación de humo</strong>.',
          '5) Quemaduras producidas por <strong>electricidad de alta tensión (> 1.000 Voltios)</strong>.',
          '6) Quemaduras con compromiso de <strong>zonas especiales estéticas o funcionales</strong>: cara, cuello, manos, pies, genitales, perineo o pliegues de grandes articulaciones.',
          '7) Quemaduras asociadas a politraumatismo grave o en pacientes con patologías médicas crónicas descompensadas.'
        ]
      },
      {
        subhead: '3. Reanimación Hidroelectrolítica: Fórmula de Parkland y Metas de Diuresis',
        paragraphs: [
          'El pilar del tratamiento en las primeras 24 horas es la reposición masiva de volumen para compensar la fuga capilar y prevenir el shock hipovolémico.',
          '<strong>Fórmula de Parkland (Estándar de Oro Internacional y MINSAL):</strong>',
          '<strong>Volumen total de Ringer Lactato en 24 horas = 4 mL x Peso corporal (kg) x % de SCQ (2° y 3° grado)</strong>.',
          '• <strong>Primeras 8 horas:</strong> Se infunde el <strong>50% del volumen calculado</strong>. <em>Punto crítico EUNACOM: El reloj de las 8 horas comienza a correr DESDE EL MOMENTO EN QUE OCURRIÓ EL ACCIDENTE, no desde que el paciente ingresa al hospital</em>. Si el paciente llega con 2 horas de retraso, la mitad del volumen total debe administrarse en las 6 horas restantes.',
          '• <strong>Siguientes 16 horas:</strong> Se infunde el 50% restante del volumen calculado.',
          '• <em>Solución de elección indiscutida:</em> <strong>Ringer Lactato</strong> (evita la acidosis hiperclorémica que induce el suero fisiológico).',
          '<strong>Monitoreo y Titulación mediante Diuresis Horaria:</strong> El cálculo de Parkland es solo una estimación inicial; la infusión de fluidos debe titularse hora a hora según la diuresis:',
          '• <strong>Adultos:</strong> Meta estricta de <strong>0.5 a 1.0 mL/kg/hora</strong> (aproximadamente 30 a 50 mL/hora).',
          '• <strong>Niños (< 30 kg):</strong> Meta estricta de <strong>1.0 a 1.5 mL/kg/hora</strong>.',
          '• <strong>Quemaduras por alta tensión con mioglobinuria / rabdomiólisis:</strong> Meta elevada de <strong>1.5 a 2.0 mL/kg/hora</strong> (asociada a alcalinización urinaria con bicarbonato) hasta aclarar la orina para prevenir necrosis tubular aguda.'
        ]
      },
      {
        subhead: '4. Sospecha de Injuria Inhalatoria y Escarotomía Descompresiva de Urgencia',
        paragraphs: [
          '<strong>Injuria por Inhalación de Vía Aérea:</strong> Principal causa de muerte precoz en incendios en recintos cerrados. Signos clínicos cardinales de sospecha: <strong>quemaduras faciales o periorales, vibrisas nasales chamuscadas, esputo carbonáceo o restos de hollín en orofaringe, disfonía, tos perruna y estridor laríngeo inspiratorio</strong>. <em>Conducta inmediata:</em> <strong>INTUBACIÓN OROTRAQUEAL PRECOZ</strong> antes de que el edema de glotis progrese y haga imposible el paso del tubo.',
          '<strong>Intoxicación por Monóxido de Carbono (CO):</strong> En todo paciente rescatado de un incendio cerrado se asume intoxicación por CO. El CO tiene una afinidad 240 veces mayor que el oxígeno por la hemoglobina, formando carboxihemoglobina (COHb). Provoca cefalea, náuseas, confusión y coma. <em>Alerta: El oxímetro de pulso habitual es FALSAMENTE NORMAL (no distingue oxihemoglobina de carboxihemoglobina)</em>. Tratamiento inmediato: <strong>Oxígeno al 100% con mascarilla con reservorio de no reinhalación</strong> (reduce la vida media de la COHb de 320 minutos a 80 minutos).',
          '<strong>Escarotomía Descompresiva de Urgencia:</strong> Indicada en <strong>quemaduras de 3° grado circulares en extremidades o tórax</strong>. La escara dura e inelástica actúa como un torniquete inextensible frente al edema subyacente progresivo. En extremidades produce un <strong>síndrome compartimental agudo</strong> con pérdida de pulsos distales, parestesias y cianosis; en el tórax produce <strong>asfixia mecánica restrictiva</strong> por incapacidad de expandir la caja torácica en ventilación mecánica. La escarotomía consiste en incisiones longitudinales profundas en la escara a través de las líneas medio-lateral o medio-medial hasta la grasa subcutánea (sin anestesia porque la escara de 3° grado es insensible), aliviando la presión de forma instantánea.'
        ]
      }
    ],
    table: {
      title: 'Regla de los 9 de Wallace y Cálculo de Superficie Corporal Quemada en Adultos',
      headers: ['Segmento Corporal Anatómico', '% SCQ Adulto (Wallace)', 'Consideraciones Diagnósticas', 'Regla de la Palma'],
      rows: [
        ['Cabeza y cuello', '9% (4.5% anterior, 4.5% posterior)', 'Zona especial estética; alta sospecha de vía aérea', 'Palma del paciente con dedos juntos = 1% SCQ'],
        ['Tronco anterior (tórax + abdomen)', '18%', 'Evaluar restricción respiratoria si es circular', 'No incluir eritema de 1° grado en la suma'],
        ['Tronco posterior (espalda + glúteos)', '18%', 'Requiere log-roll en bloque para inspección completa', 'Usar Ringer Lactato tibio en reanimación'],
        ['Cada extremidad superior (brazo + antebrazo + mano)', '9% cada una (Total: 18%)', 'Manos son zona especial funcional (criterio GES)', 'Monitorear pulsos distales en quemaduras circulares'],
        ['Cada extremidad inferior (muslo + pierna + pie)', '18% cada una (Total: 36%)', 'Pies son zona especial funcional de apoyo', 'Riesgo de síndrome compartimental en piernas'],
        ['Perineo y genitales externos', '1%', 'Zona especial; alto riesgo de infección y estenosis', 'Colocar sonda Foley precoz antes de edema masivo']
      ]
    },
    severityTable: {
      title: 'Criterios de Gravedad de Garcés y Clasificación Pronóstica del Gran Quemado',
      headers: ['Índice de Garcés (Puntos)', 'Categoría Pronóstica', 'Mortalidad Esperada', 'Nivel de Derivación Asistencial'],
      rows: [
        ['≤ 40 puntos', 'Quemado Leve', 'Mortalidad < 1%', 'Manejo ambulatorio o sala de cirugía básica'],
        ['41 a 70 puntos', 'Quemado Moderado', 'Mortalidad 2 – 5%', 'Hospitalización en centro secundario / Unidad de Quemados'],
        ['71 a 100 puntos', 'Quemado Grave / Severo', 'Mortalidad 10 – 25%', 'CRITERIO GES N° 56: UCI de Quemados Terciaria de Referencia'],
        ['101 a 140 puntos', 'Quemado Crítico', 'Mortalidad 30 – 50%', 'Centro especializado terciario de alta complejidad (UCI quemados)'],
        ['> 140 puntos', 'Quemado Sobrevida Excepcional', 'Mortalidad > 80-90%', 'Soporte intensivo máximo multidisciplinario en UPC']
      ]
    },
    treatmentTable: {
      title: 'Resumen de Fórmulas de Parkland, Metas de Diuresis y Cuidados Locales',
      headers: ['Parámetro', 'Fórmula / Recomendación', 'Meta / Valor Numérico', 'Error Fatal Frecuente'],
      rows: [
        ['Volumen total en 24 h', '4 mL x Peso (kg) x % SCQ (2° y 3° grado)', 'Ringer Lactato isotónico tibio', 'Calcular sobre quemaduras de 1° grado sobrestimando volumen'],
        ['Distribución horaria', '50% en primeras 8 horas, 50% en siguientes 16 h', 'Contadas desde la HORA DEL ACCIDENTE', 'Contar las 8 h desde el ingreso al hospital subreanimando'],
        ['Meta diuresis (Adultos)', 'Sonda Foley con urómetro horario estricto', '0.5 a 1.0 mL/kg/hora (30-50 mL/h)', 'Aumentar fluidos sin evaluar diuresis causando síndrome compartimental'],
        ['Meta diuresis (Niños)', 'Sonda vesical pediátrica con urómetro', '1.0 a 1.5 mL/kg/hora', 'No aportar mantención de dextrosa en niños provocando hipoglicemia'],
        ['Tratamiento de escara', 'Escarotomía en quemaduras circulares de 3° grado', 'Incisiones axiales medial y lateral profundas', 'Demorar la escarotomía hasta la pérdida de pulsos irreversibles']
      ]
    },
    vignette: 'Hombre de 35 años, previamente sano, de 70 kg de peso, es rescatado de un incendio en su lugar de trabajo hace exactamente 2 horas. Al examen físico se encuentra vigil, quejumbroso, con signos vitales: PA 100/65 mmHg, FC 110 lpm, FR 20 rpm, SatO2 97% con mascarilla con reservorio al 100%. A la inspección se aprecian quemaduras por fuego directo con flictenas y ampollas húmedas rosadas muy dolorosas en todo el tronco anterior (18% de SCQ) y en toda la extremidad superior derecha (9% de SCQ). En la extremidad superior izquierda presenta eritema doloroso seco sin flictenas (primer grado). No presenta quemaduras faciales ni esputo carbonáceo y la auscultación pulmonar es normal.',
    explicacion: 'El paciente presenta quemaduras térmicas de 2° grado superficial con un cálculo de Superficie Corporal Quemada del 27% (18% tronco anterior + 9% extremidad superior derecha; el eritema de 1° grado de la extremidad izquierda NO se incluye en el cálculo). Al tener más del 20% de SCQ, cumple criterio estricto de Gran Quemado garantizado por el régimen GES N° 56. La reanimación con fluidos se calcula mediante la fórmula de Parkland: 4 mL x 70 kg x 27% SCQ = 7.560 mL de Ringer Lactato para las primeras 24 horas. La mitad de este volumen (3.780 mL) debe administrarse en las primeras 8 horas contadas desde el accidente. Como el accidente ocurrió hace 2 horas, los 3.780 mL deben infundirse en las 6 horas restantes (a una velocidad de 630 mL/hora), titulando la velocidad de infusión para mantener una diuresis horaria estricta de 0.5 a 1.0 mL/kg/h (35 a 70 mL/h).',
    keyPoints: [
      'Las quemaduras de 1° grado (eritema sin flictenas) NO se contabilizan para el cálculo de la SCQ ni en Parkland.',
      'Segundo grado superficial = flictenas rosadas húmedas muy dolorosas; tercer grado = escara acartonada seca insensible.',
      'Criterio Gran Quemado (GES N° 56): Garcés > 70 pts, > 20% SCQ en adultos (> 10% en niños/ancianos) o zonas especiales.',
      'Fórmula de Parkland: 4 mL x kg x % SCQ (2° y 3° grado) de Ringer Lactato en 24 horas.',
      'El 50% de Parkland se administra en las primeras 8 horas CONTADAS DESDE EL MOMENTO DEL ACCIDENTE (no del ingreso).',
      'Meta de diuresis horaria: 0.5 a 1.0 mL/kg/h en adultos y 1.0 a 1.5 mL/kg/h en niños.',
      'Quemaduras circulares de 3° grado en extremidades o tórax requieren ESCAROTOMÍA DESCOMPRESIVA de urgencia inmediata.'
    ],
    questions: [
      {
        stem: 'Un hombre de 70 kg sufre un accidente térmico laboral hace 2 horas, resultando con quemaduras de segundo grado en todo el tronco anterior (18%) y en ambas extremidades superiores en su totalidad (18%). No presenta otras lesiones. Según la fórmula de Parkland, ¿cuál es el volumen total de solución Ringer Lactato que debe recibir en las primeras 24 horas y cuánto debe infundirse en las próximas 6 horas?',
        options: [
          { id: 'A', text: '10.080 mL en total en 24 h; infundir 5.040 mL en las próximas 6 horas' },
          { id: 'B', text: '5.040 mL en total en 24 h; infundir 2.520 mL en las próximas 6 horas' },
          { id: 'C', text: '7.560 mL en total en 24 h; infundir 3.780 mL en las próximas 6 horas' },
          { id: 'D', text: '12.600 mL en total en 24 h; infundir 6.300 mL en las próximas 8 horas' },
          { id: 'E', text: '10.080 mL en total en 24 h; infundir 5.040 mL en las próximas 8 horas' }
        ],
        correcta: 'A',
        explicacion: 'La superficie corporal quemada es de 18% (tronco anterior) + 18% (ambos brazos) = 36% de SCQ. Aplicando la fórmula de Parkland: Volumen total 24 h = 4 mL x 70 kg x 36% = 10.080 mL de Ringer Lactato. El 50% de este volumen (5.040 mL) debe administrarse durante las primeras 8 horas contadas DESDE LA HORA DE LA QUEMADURA. Dado que el accidente ocurrió hace 2 horas, los 5.040 mL deben infundirse en el tiempo restante de esa ventana, es decir, en las próximas 6 horas.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.026'
      },
      {
        stem: '¿Cuál es el mejor parámetro clínico individual para monitorizar y titular la velocidad de infusión de líquidos durante la reanimación hidroelectrolítica de un paciente gran quemado?',
        options: [
          { id: 'A', text: 'Presión venosa central (PVC) mediante catéter venoso central' },
          { id: 'B', text: 'Diuresis horaria estricta mediante sonda Foley' },
          { id: 'C', text: 'Valores de hematocrito y hemoglobina plasmática' },
          { id: 'D', text: 'Frecuencia cardíaca y llenado capilar distal' },
          { id: 'E', text: 'Nivel de lactato sérico en sangre venosa periférica' }
        ],
        correcta: 'B',
        explicacion: 'La diuresis horaria medida estrictamente a través de una sonda vesical con urómetro es el parámetro clínico estándar de oro para titular la fluidoterapia en el paciente quemado. La meta en adultos es mantener un flujo urinario de 0.5 a 1.0 mL/kg/hora. Si la diuresis cae por debajo de 0.5 mL/kg/h, se incrementa el aporte de cristaloides un 20-30%; si supera 1.0 mL/kg/h, se reduce el aporte para evitar el edema pulmonar o el síndrome compartimental abdominal.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.026'
      },
      {
        stem: 'Un bombero de 38 años es rescatado de una habitación cerrada en llamas. Presenta disfonía, tos con esputo carbonáceo y eritema facial, con vibrisas nasales chamuscadas. Su examen pulmonar revela estridor inspiratorio leve y su SatO2 es de 98% con mascarilla de oxígeno. ¿Cuál es la conducta médica prioritaria?',
        options: [
          { id: 'A', text: 'Realizar intubación orotraqueal inmediata' },
          { id: 'B', text: 'Nebulizar con adrenalina racémica y budesonida y observar en sala común' },
          { id: 'C', text: 'Solicitar radiografía de tórax y gases arteriales antes de cualquier maniobra' },
          { id: 'D', text: 'Indicar tratamiento con corticoides endovenosos en dosis altas' },
          { id: 'E', text: 'Realizar lavado gástrico y administrar carbón activado' }
        ],
        correcta: 'A',
        explicacion: 'El paciente presenta signos inequívocos de trauma o injuria por inhalación en la vía aérea superior (esputo carbonáceo, vibrisas nasales quemadas, disfonía y estridor laríngeo inspiratorio). El estridor inspiratorio indica una obstrucción crítica de la vía aérea por edema laríngeo agudo progresivo. La intubación orotraqueal precoz es obligatoria e inmediata, ya que esperar puede generar un edema masivo de cuerdas vocales que impida la intubación y obligue a una vía aérea quirúrgica de emergencia.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.026'
      },
      {
        stem: 'Un paciente de 40 años presenta una quemadura de tercer grado circular profunda que rodea todo el antebrazo y muñeca derechos. A las 6 horas del accidente, se queja de dolor insoportable distal a la quemadura, con parestesias en los dedos de la mano derecha, edema tenso indurado y pérdida palpable de los pulsos radial y cubital. ¿Cuál es el procedimiento terapéutico de urgencia que debe realizarse de inmediato?',
        options: [
          { id: 'A', text: 'Elevación de la extremidad y aplicación de compresas con hielo' },
          { id: 'B', text: 'Escarotomía longitudinal descompresiva inmediata' },
          { id: 'C', text: 'Infusión rápida de heparina endovenosa para prevenir trombosis' },
          { id: 'D', text: 'Colocación de férula de yeso compresiva cerrada' },
          { id: 'E', text: 'Administración de vasodilatadores arteriales tipo nifedipino' }
        ],
        correcta: 'B',
        explicacion: 'El paciente presenta un Síndrome Compartimental Agudo de la extremidad superior provocado por una quemadura de 3° grado circular. La escara dérmica inelástica actúa como un torniquete rígido que comprime el edema muscular subyacente, colapsando el flujo vascular y causando isquemia nerviosa irreversible si no se decomprime antes de 4-6 horas. La conducta urgente es la Escarotomía descompresiva mediante incisiones longitudinales profundas en las caras lateral y medial del antebrazo a través de la escara hasta el tejido graso subcutáneo.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.026'
      }
    ]
  }
];

module.exports = { bloque3Classes };
