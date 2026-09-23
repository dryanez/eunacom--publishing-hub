/**
 * TOMO 15 · OFTALMOLOGÍA — BLOQUE 03: Pérdida Súbita de Visión & Retina
 * Clases 15.10 a 15.14 · Editorial EUNACOM 2026 · Color #0e7490
 */

const { flow } = require('./dataset_oftalmologia_bloque_1.cjs');

const bloque3 = [
  {
    id: 'oftal-10',
    classId: 'oftal-10',
    tier: 3,
    blockNum: 3,
    blockName: 'Pérdida Súbita de Visión & Retina',
    topicLabel: '15.10',
    title: 'Desprendimiento de Retina: Miodesopsias, Fotopsias y Pérdida de Campo',
    perfilCode: '6.02.1.003',
    dx: 'Sospecha', tx: 'Inicial', seg: 'Derivar',
    ges: 'Garantía Explícita en Salud (GES N° 22): Tratamiento Quirúrgico del Desprendimiento de Retina Regmatógeno No Traumático',
    reconstrucciones: 'EUNACOM 2013 (Q#18) · EUNACOM Diciembre 2016 (Q#62) · EUNACOM Julio 2022 (Q#08)',
    frecuencia: 'Máxima rentabilidad · Reconocimiento de los pródromos fotópsicos y urgencia quirúrgica GES',
    diagram: flow('Algoritmo de Pérdida Súbita de Visión y Desprendimiento de Retina', [
      { t: 'Paciente con Fotopsias (Destellos) y Miodesopsias ("Moscas Volantes") de Inicio Brusco', s: 'Alerta clínica: sospecha de desprendimiento de vítreo posterior o desgarro retiniano' },
      { k: 'split', q: '¿Aparición de Sombra o "Cortina Negra" que Avanza desde la Periferia?', s: 'Diferenciación entre tracción vítrea simple y desprendimiento regmatógeno establecido', ll: 'Solo fotopsias / miodesopsias aisladas', rl: 'Sombra negra fija / defecto de campo visual',
        left: { t: 'Sospecha de Rotura Retiniana sin Desprendimiento', s: 'Fondo de ojo con pupila dilatada · Tratamiento profiláctico urgente con Fotocoagulación Láser', type: 'acc' },
        right: { t: 'DESPRENDIMIENTO DE RETINA REGMATÓGENO', s: 'Líquido subretiniano pasa a través del desgarro · URGENCIA QUIRÚRGICA GES N° 22 (< 24-48 horas)', type: 'warn' },
        ll: 'desgarro periférico precoz', rl: 'desprendimiento establecido' },
      { t: 'Conducta Inmediata en APS / Urgencias', s: 'Reposo absoluto en posición semi-fowler o decúbito + ayuno + derivación inmediata en ambulancia', type: 'dec', al: 'protocolo de traslado', from: 'right' },
    ]),
    contexto: 'El desprendimiento de retina es una de las emergencias oftalmológicas más paradigmáticas. La separación de la retina neurosensorial de su capa nutricia (el epitelio pigmentario) produce isquemia irreversible de los fotorreceptores. El pronóstico visual depende críticamente de intervenir antes de que el desprendimiento alcance la mácula (mácula "on" vs "off").',
    contentSections: [
      {
        subhead: '1. Fisiopatología y Mecanismo Regmatógeno',
        paragraphs: [
          'La retina neurosensorial se mantiene adosada al epitelio pigmentario retiniano (EPR) por fuerzas metabólicas e hidrodinámicas sin uniones intercelulares verdaderas.<br>' +
          '• <strong>Desprendimiento de Retina Regmatógeno (DRR, el más frecuente > 90%):</strong> Se produce por una solución de continuidad (<strong>desgarro, rotura o agujero retiniano</strong>, del griego <em>rhegma</em> = rotura). Típicamente ocurre cuando el humor vítreo sufre licuefacción y se separa de la retina (desprendimiento de vítreo posterior, DVP), traccionando y rompiendo una zona de retina periférica adelgazada. El vítreo líquido pasa a través del orificio hacia el espacio subretiniano, despegando la retina como papel mural húmedo.<br>' +
          '• <strong>Factores de riesgo mayores:</strong> <strong>Miopía magna</strong> (globo ocular alargado con retina delgada y tracciones periféricas), antecedente de cirugía de catarata (pseudofaquia), traumatismos oculares y antecedentes familiares.',
        ],
      },
      {
        subhead: '2. Signos y Síntomas Cardinales de Alarma',
        paragraphs: [
          'La clínica clásica sigue una secuencia temporal característica que el médico general debe reconocer de memoria:<br>' +
          '1. <strong>Pródromos:</strong> <strong>Miodesopsias</strong> bruscas (aparición súbita de "moscas volantes", "telarañas" o lluvia de puntos negros por condensación o microhemorragia vítrea) seguidas de <strong>fotopsias</strong> (destellos luminosos o "relámpagos" en la periferia, producidos por la tracción mecánica del vítreo sobre los fotorreceptores).<br>' +
          '2. <strong>Fase de Desprendimiento Establecido:</strong> Aparición de una <strong>"sombra oscura, telón o cortina negra" fija</strong> en la periferia del campo visual que va progresando gradualmente hacia el centro a lo largo de horas o días.<br>' +
          '3. <strong>Caída de Visión Central:</strong> Si el desprendimiento progresa y despega la mácula (mácula "off"), se produce una caída brusca, profunda e irreversible de la agudeza visual central.<br>' +
          '<strong>Regla de oro:</strong> El desprendimiento de retina es <strong>COMPLETAMENTE INDOLORO Y CURSA CON OJO BLANCO</strong> (sin hiperemia ni secreción). Si hay dolor, sospechar otra causa.',
        ],
      },
      {
        subhead: '3. Semiología del Fondo de Ojo y Tipos No Regmatógenos',
        paragraphs: [
          '• <strong>Fondo de ojo (oftalmoscopía indirecta con pupila dilatada):</strong> Se observa la retina levantada, móvil, ondulante y pálida/grisácea que hace protrusión hacia la cavidad vítrea, con pérdida de la transparencia coroidea normal. Los vasos retinianos sobre la bolsa desprendida lucen tortuosos y oscuros.<br>' +
          '• <strong>Otros tipos de desprendimiento de retina:</strong><br>' +
          '- <em>Traccional:</em> Sin desgarro retiniano; bandas fibrosas vitreorretinianas traccionan mecánicamente la retina hacia adelante. Típico de la <strong>Retinopatía Diabética Proliferativa</strong> avanzada.<br>' +
          '- <em>Exudativo o Seroso:</em> Acúmulo de líquido subretiniano sin tracción ni rotura, por tumores (melanoma de coroides), inflamación severa (enfermedad de Vogt-Koyanagi-Harada) o preeclampsia grave.',
        ],
      },
      {
        subhead: '4. Conducta en APS, Triage GES N° 22 y Cirugía',
        paragraphs: [
          '• <strong>Conducta Inmediata en Urgencias APS:</strong><br>' +
          '- Reposo absoluto en cama (posición semi-fowler o decúbito adecuado para evitar que la gravedad favorezca el avance del desprendimiento).<br>' +
          '- Parche ocular suave ocluyendo ambos ojos para limitar los movimientos sacádicos reflejos (en casos seleccionados de traslado).<br>' +
          '- Régimen cero (ayuno preventivo ante la inminencia de cirugía bajo anestesia).<br>' +
          '- <strong>Derivación de extrema urgencia a centro terciario</strong>.<br>' +
          '• <strong>Garantía GES N° 22:</strong> Garantiza la atención y tratamiento quirúrgico en centros oftalmológicos especializados en plazos prioritarios (dentro de las 48-72 horas si la mácula está aún aplicada para salvar la visión central).<br>' +
          '• <strong>Técnicas Quirúrgicas:</strong> Vitrectomía pars plana (VPP) con intercambio líquido-gas o silicón y endoláser, o cerclaje escleral ab-externo.',
        ],
      },
    ],
    table: {
      title: 'Diagnóstico Diferencial Etiológico del Desprendimiento de Retina',
      headers: ['Tipo de Desprendimiento', 'Mecanismo Fisiopatológico', 'Factores de Riesgo / Causa', 'Manejo de Elección'],
      rows: [
        ['Regmatógeno (DRR)', 'Rotura retiniana + paso de vítreo líquido', 'Miopía magna, cirugía catarata previa, trauma', 'Vitrectomía pars plana / Cerclaje escleral (GES)'],
        ['Traccional', 'Membranas fibrovasculares contraen la retina', 'Retinopatía diabética proliferativa no controlada', 'Vitrectomía con corte de bandas fibróticas'],
        ['Exudativo / Seroso', 'Trasudación por alteración del EPR / coroides', 'Tumores (melanoma), coroiditis, preeclampsia', 'Tratamiento etiológico médico; no quirúrgico'],
      ],
    },
    severityTable: {
      title: 'Estratificación Quirúrgica y Pronóstico según Estado Macular',
      headers: ['Estado de la Mácula', 'Agudeza Visual Inicial', 'Pronóstico Visual Final', 'Plazo Quirúrgico Ideal'],
      rows: [
        ['Mácula ON (Aplicada)', 'Conservada (20/20 a 20/40)', 'Excelente (> 90% recupera visión completa)', 'EMERGENCIA MÁXIMA (< 24 a 48 horas)'],
        ['Mácula OFF (Desprendida)', 'Muy disminuida (cuenta dedos o bultos)', 'Reservado (rara vez recupera visión previa)', 'Urgente dentro de 7 a 10 días'],
      ],
    },
    treatmentTable: {
      title: 'Protocolo de Rescate y Alternativas Quirúrgicas en Desprendimiento de Retina',
      headers: ['Modalidad', 'Indicación Clínica', 'Mecanismo Terapéutico', 'Cuidados Postoperatorios'],
      rows: [
        ['Fotocoagulación Láser', 'Desgarro retiniano SIN desprendimiento', 'Crea cicatriz coriorretiniana que "suelda" el desgarro', 'Reposo relativo por 48 horas'],
        ['Vitrectomía Pars Plana', 'Desprendimiento establecido o traccional', 'Remoción del vítreo, aplanamiento con gas/silicón y láser', 'Posición boca abajo estricta por 7-14 días'],
        ['Cerclaje Escleral', 'Desprendimientos periféricos en pacientes jóvenes', 'Banda de silicona externa que indentar la esclera hacia adentro', 'Control de presión intraocular'],
      ],
    },
    vignette: 'Hombre de 52 años con antecedente de miopía de -6 dioptrías consulta en el servicio de urgencias porque hace 48 horas comenzó a ver destellos luminosos en el rabillo del ojo derecho ("como flashes de cámara fotográfica") acompañados de una multitud de puntos negros flotantes. Desde hoy en la mañana nota una sombra oscura fija en la parte inferior del campo visual derecho que ha ido creciendo hacia el centro "como si cerraran una persiana". No refiere dolor, trauma ni ojo rojo. Al examen: ojo blanco, pupila fotorreactiva, agudeza visual 20/30 en OD.',
    explicacion: 'El cuadro de fotopsias y miodesopsias agudas seguidas de una sombra o defecto campimétrico en cortina que progresa en un ojo blanco indoloro de un paciente miope es el cuadro prototípico de Desprendimiento de Retina Regmatógeno. Dado que la agudeza visual aún es de 20/30, la mácula permanece aplicada ("mácula on"), lo que confiere una oportunidad única de preservación visual completa. La conducta obligatoria es reposo absoluto inmediato, régimen cero, notificación GES N° 22 y derivación urgente al oftalmólogo para resolución quirúrgica en menos de 24 a 48 horas.',
    keyPoints: [
      'El desprendimiento de retina regmatógeno es INDOLORO y cursa con OJO BLANCO.',
      'Secuencia cardinal: 1° Fotopsias + miodesopsias bruscas, 2° Cortina o sombra negra periférica que avanza.',
      'El principal factor de riesgo predisponente es la Miopía Magna (miopía alta).',
      'Si la mácula está aplicada ("mácula on"), es una urgencia quirúrgica máxima (< 24-48 horas) para evitar la ceguera central.',
      'El problema GES N° 22 cubre el tratamiento quirúrgico del desprendimiento de retina.',
      'En APS la conducta es reposo en cama, régimen cero y derivación de urgencia; no se dan colirios.',
    ],
    questions: [
      {
        stem: 'Un hombre de 48 años, miope de -7 dioptrías, consulta en urgencias por ver destellos luminosos ("fotopsias") y una lluvia de puntos oscuros flotantes en su ojo izquierdo desde hace 2 días. Hace 6 horas comenzó a notar una sombra oscura fija que le tapa la mitad superior del campo visual. El ojo no está rojo ni duele. La agudeza visual en dicho ojo es 20/25. ¿Cuál es el diagnóstico más probable y la conducta médica inmediata?',
        options: [
          { id: 'A', text: 'Glaucoma agudo de ángulo cerrado; administrar manitol endovenoso y pilocarpina' },
          { id: 'B', text: 'Desprendimiento de retina regmatógeno con mácula aplicada; indicar reposo absoluto y derivar de urgencia para cirugía GES' },
          { id: 'C', text: 'Oclusión de la arteria central de la retina; realizar masaje ocular digital inmediato' },
          { id: 'D', text: 'Neuritis óptica retrobulbar; iniciar pulsos de metilprednisolona endovenosa' },
          { id: 'E', text: 'Crisis migrañosa con aura retiniana; prescribir paracetamol y reposo en habitación oscura' },
        ],
        correcta: 'B',
        explicacion: 'La tríada clásica de fotopsias (tracción vitreorretiniana), miodesopsias agudas (sangrado o condensación vítrea) y defecto de campo visual progresivo en cortina en un paciente con miopía magna (factor de riesgo número uno) e indoloro es patognomónica de Desprendimiento de Retina Regmatógeno. La agudeza visual conservada (20/25) indica que la fóvea aún no se ha desprendido (mácula "on"), lo que constituye una emergencia quirúrgica de horas antes de que el líquido alcance el centro foveal y provoque daño irreversible. Requiere reposo absoluto y derivación quirúrgica urgente vía GES N° 22. Perla. Fotopsias más cortina negra en ojo blanco de paciente miope es desprendimiento de retina.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.1.003',
      },
      {
        stem: '¿Cuál es la diferencia fisiopatológica fundamental entre el desprendimiento de retina regmatógeno y el desprendimiento de retina traccional?',
        options: [
          { id: 'A', text: 'El regmatógeno requiere una rotura o desgarro retiniano que permite el paso de humor vítreo líquido, mientras que el traccional es producido por membranas fibrovasculares que traccionan mecánicamente la retina sin desgarro' },
          { id: 'B', text: 'El regmatógeno es doloroso y con ojo rojo, mientras que el traccional es indoloro' },
          { id: 'C', text: 'El traccional se opera siempre con láser superficial y el regmatógeno solo con corticoides orales' },
          { id: 'D', text: 'El regmatógeno se produce por acumulación de exudados inflamatorios y el traccional por hipertensión intraocular' },
          { id: 'E', text: 'No existe diferencia; son dos términos sinónimos para la misma patología' },
        ],
        correcta: 'A',
        explicacion: 'El desprendimiento de retina regmatógeno exige de manera sine qua non la presencia de una rotura o desgarro en la retina neurosensorial (del griego rhegma), a través del cual el humor vítreo licuado penetra al espacio subretiniano separando la retina del epitelio pigmentario. En cambio, el desprendimiento traccional se origina por la formación de bandas o membranas fibróticas proliferativas en la cavidad vítrea (características de la retinopatía diabética proliferativa o traumatismos penetrantes) que tiran y levantan físicamente la retina hacia el centro del ojo sin que exista una rotura inicial. Trampa. Confundir el mecanismo del desgarro regmatógeno con la tracción proliferativa diabética altera radicalmente la estrategia quirúrgica.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.1.003',
      },
      {
        stem: 'Una mujer de 55 años, previamente sana, presenta repentinamente la aparición de múltiples moscas volantes y destellos luminosos en el ojo derecho. Acude a evaluación oftalmológica el mismo día. La oftalmoscopía indirecta con pupila dilatada revela un desgarro retiniano periférico en herradura sin líquido subretiniano (sin desprendimiento aún). ¿Cuál es el tratamiento profiláctico de elección para evitar que desarrolle un desprendimiento de retina?',
        options: [
          { id: 'A', text: 'Vitrectomía pars plana urgente con infusión de aceite de silicona' },
          { id: 'B', text: 'Fotocoagulación con láser de argón alrededor del desgarro' },
          { id: 'C', text: 'Inyección intravítrea de triamcinolona' },
          { id: 'D', text: 'Corticoides orales en dosis de 1 mg/kg/día por 1 mes' },
          { id: 'E', text: 'Observación clínica semanal sin intervención' },
        ],
        correcta: 'B',
        explicacion: 'Cuando se diagnostica una rotura o desgarro retiniano sintomático de forma precoz ANTES de que el vítreo líquido haya levantado la retina (desgarro sin desprendimiento), el tratamiento de elección es la Fotocoagulación con Láser de Argón (o crioterapia). El láser produce una quemadura térmica controlada en 360 grados alrededor de los bordes del desgarro, originando una cicatriz coriorretiniana densa y firme en pocos días que sella el orificio y "suelda" la retina al epitelio pigmentario, evitando de forma altamente efectiva el desarrollo de un desprendimiento de retina completo. Perla. El desgarro precoz se sella con fotocoagulación láser profiláctica ambulatoria.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.1.003',
      },
      {
        stem: '¿Cuál de los siguientes factores se asocia con el peor pronóstico visual final en un paciente sometido a cirugía de desprendimiento de retina?',
        options: [
          { id: 'A', text: 'Desprendimiento localizado en cuadrantes superiores' },
          { id: 'B', text: 'Compromiso de la mácula con desprendimiento foveal (mácula off) de más de una semana de evolución' },
          { id: 'C', text: 'Edad menor a 40 años' },
          { id: 'D', text: 'Uso previo de lentes de contacto blandos' },
          { id: 'E', text: 'Presencia de miodesopsias antes de la cirugía' },
        ],
        correcta: 'B',
        explicacion: 'El factor pronóstico determinante de la agudeza visual final tras una cirugía de desprendimiento de retina es el estado de la mácula y el tiempo de isquemia foveal. Si la mácula nunca se desprendió (mácula "on"), más del 90% de los pacientes conservan su agudeza visual preoperatoria. En cambio, si la mácula se desprende (mácula "off"), los conos foveales sufren apoptosis y pérdida irreversible de segmentos externos; si el desprendimiento foveal persiste por más de 7 a 10 días, la recuperación de la visión central fina es sumamente pobre aun cuando la retina se reaplique anatómicamente con éxito. Perla. El desprendimiento de mácula prolongado es el mayor predictor de mala agudeza visual final.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.1.003',
      },
    ],
  },

  {
    id: 'oftal-11',
    classId: 'oftal-11',
    tier: 2,
    blockNum: 3,
    blockName: 'Pérdida Súbita de Visión & Retina',
    topicLabel: '15.11',
    title: 'Oclusión Vascular Retinal: Arteria (Mancha Rojo Cereza) vs Vena Central',
    perfilCode: '6.02.2.004',
    dx: 'Sospecha', tx: 'Inicial', seg: 'Derivar',
    ges: 'Sin garantía GES específica · Urgencia Neurovascular Mayor',
    reconstrucciones: 'EUNACOM 2014 (Q#108) · EUNACOM Julio 2018 (Q#92)',
    frecuencia: 'Muy alta · Diagnóstico diferencial semiológico y reconocimiento de la mancha rojo cereza',
    diagram: flow('Algoritmo de Oclusiones Vasculares Retinianas en Urgencias', [
      { t: 'Paciente con Pérdida Monocular Súbita, Masiva e Indolora de la Visión (Ojo Blanco)', s: 'Paso 1: Realizar examen pupilar (Defecto Pupilar Aferente) y Fondo de Ojo Inmediato' },
      { k: 'split', q: '¿Retina Pálida con Mancha Rojo Cereza vs Hemorragias Difusas en Llamarada?', s: 'Diferenciación patognomónica entre oclusión arterial y oclusión venosa', ll: 'Retina isquémica pálida + Mancha rojo cereza', rl: 'Hemorragias masivas en llama + Venas tortuosas',
        left: { t: 'OCLUSIÓN DE ARTERIA CENTRAL (OACR)', s: 'Infarto retiniano embólico/ateromatoso · Tratar en < 6h: masaje ocular, hipotensores y descartar Horton', type: 'acc' },
        right: { t: 'OCLUSIÓN DE VENA CENTRAL (OVCR)', s: 'Trombosis venosa por HTA/edad · "Imagen en pizza marinara" · Riesgo de glaucoma neovascular a los 90 días', type: 'warn' },
        ll: 'isquemia arterial aguda', rl: 'estasis venosa trombótica' },
      { t: 'Conducta Médica Obligatoria', s: 'Derivación urgente a oftalmología y estudio neurovascular (Eco-Doppler carotídeo, ECG/Holter de arritmias)', type: 'dec', al: 'prevención de acv futuro', from: 'left' },
    ]),
    contexto: 'Las oclusiones vasculares de la retina representan accidentes vasculares que comprometen la microcirculación ocular. La oclusión de arteria central de la retina es una emergencia médica equivalente a un ACV isquémico que requiere estudio de fuentes embolígenas cardíacas y carotídeas, mientras que la oclusión venosa exige monitorizar la aparición de glaucoma neovascular.',
    contentSections: [
      {
        subhead: '1. Oclusión de la Arteria Central de la Retina (OACR)',
        paragraphs: [
          'Es el equivalente a un infarto cerebral isquémico agudo de la retina. Se debe a la obstrucción de la arteria central por un <strong>émbolo carotídeo</strong> (placa de ateroma en la bifurcación carotídea) o <strong>cardíaco</strong> (fibrilación auricular, valvulopatía). En ancianos (> 65-70 años), descartar siempre <strong>Arteritis de Células Gigantes (Horton)</strong>.<br>' +
          '• <strong>Clínica cardinal:</strong> Pérdida visual <strong>súbita, catastrófica, profunda e INDOLORA</strong> en cuestión de segundos (la visión se apaga como una pantalla negra: cuenta dedos o percepción de bultos). Ojo estrictamente blanco y no doloroso.<br>' +
          '• <strong>Examen pupilar:</strong> Marcado <strong>Defecto Pupilar Aferente Relativo (DPAR o Pupila de Marcus Gunn)</strong> en el ojo afecto.<br>' +
          '• <strong>Fondo de Ojo Patognomónico:</strong> Retina intensamente pálida, edematosa, lechosa o blanquecina por infarto de la capa de fibras nerviosas, con la clásica <strong>MANCHA ROJO CEREZA EN LA FÓVEA</strong> (la fóvea carece de capas ganglionares y se nutre directamente de la coroides sana subyacente, contrastando vívidamente con el fondo blanco isquémico).<br>' +
          '• <strong>Tratamiento de urgencia (< 6 horas):</strong> Masaje ocular digital, paracentesis de cámara anterior, hipotensores oculares (acetazolamida/timolol) para intentar desplazar el émbolo a una rama periférica. Si se sospecha Horton (VHS elevada, claudicación mandibular): <strong>Metilprednisolona EV urgente</strong> para proteger el ojo contralateral.',
        ],
      },
      {
        subhead: '2. Oclusión de la Vena Central de la Retina (OVCR)',
        paragraphs: [
          'Es la segunda causa vascular más común de pérdida visual tras la retinopatía diabética. Se debe a una trombosis venosa en la lámina cribosa, favorecida por <strong>hipertensión arterial, edad avanzada, glaucoma crónico e hipercoagulabilidad</strong>.<br>' +
          '• <strong>Clínica:</strong> Disminución visual subaguda o súbita monocular indolora, habitualmente menos profunda que la arterial (20/50 a 20/200).<br>' +
          '• <strong>Fondo de Ojo Patognomónico ("Tormenta Retiniana" o "Pizza Marinara"):</strong><br>' +
          '- <strong>Hemorragias retinianas masivas en "llamarada" y manchas rojas en los cuatro cuadrantes</strong>.<br>' +
          '- Venas retinianas sumamente dilatadas, congestivas, tortuosas y oscuras.<br>' +
          '- Exudados algodonosos (microinfartos) y edema de papila.<br>' +
          '• <strong>Complicación Mayor: GLAUCOMA NEOVASCULAR ("Glaucoma de los 100 días"):</strong> La isquemia venosa extensa induce liberación de VEGF que genera neovasos en el iris (rubeosis iridis) y en el ángulo camerular, cerrándolo y provocando un glaucoma secundario refractario y doloroso alrededor de los 3 meses post-oclusión. Se previene con inyecciones de anti-VEGF o panfotocoagulación láser.',
        ],
      },
    ],
    table: {
      title: 'Oclusión Arterial vs Oclusión Venosa Retinal: Diagnóstico Diferencial de Examen',
      headers: ['Característica', 'Oclusión Arterial (OACR)', 'Oclusión Venosa (OVCR)'],
      rows: [
        ['Velocidad de inicio', 'BRUSCA en segundos ("pantalla negra")', 'Rápida o subaguda en horas a días'],
        ['Pérdida visual', 'Masiva y profunda (cuenta dedos / no luz)', 'Variable, moderada a severa'],
        ['Fondo de ojo patognomónico', 'Retina blanca/pálida + MANCHA ROJO CEREZA foveal', 'HEMORRAGIAS EN LLAMARADA en 4 cuadrantes'],
        ['Etiología principal', 'Émbolo carotídeo o cardíaco / Arteritis de Horton', 'Trombosis venosa asociada a HTA y glaucoma'],
        ['Complicación a los 90 días', 'Atrofia óptica pálida irreversible', 'GLAUCOMA NEOVASCULAR ("glaucoma de los 100 días")'],
        ['Estudio sistémico prioritario', 'Eco-Doppler carotídeo + ECG/Holter + VHS/PCR', 'Perfil lipídico, HTA, coagulopatías, seguimiento PIO'],
      ],
    },
    vignette: 'Hombre de 71 años con antecedente de hipertensión arterial y fibrilación auricular en tratamiento irregular consulta en el servicio de urgencias por pérdida visual súbita y completa en el ojo izquierdo iniciada hace 2 horas al despertar. Refiere que "se apagó la luz de golpe" en ese ojo, sin ningún tipo de dolor ni traumatismo. Al examen: ojo izquierdo blanco, agudeza visual limitada a percepción de luz. Al iluminar el ojo izquierdo, ambas pupilas se dilatan paradójicamente (defecto pupilar aferente). El fondo de ojo revela palidez retiniana difusa con un punto rojo brillante foveal en "mancha rojo cereza".',
    explicacion: 'La pérdida monocular súbita, catastrófica e indolora de la visión en un paciente con fibrilación auricular, acompañada de defecto pupilar aferente relativo y un fondo de ojo con palidez isquémica retiniana y mancha rojo cereza foveal, es el cuadro indiscutible de una Oclusión de la Arteria Central de la Retina (OACR) de origen cardioembólico. La conducta médica inmediata consiste en intentar maniobras de rescate (masaje ocular digital intermitente, hipotensores intraoculares) para movilizar el émbolo, derivación urgente a oftalmología y hospitalización para estudio vascular carotídeo y anticoagulación formal para prevenir un accidente cerebrovascular hemisférico futuro.',
    keyPoints: [
      'OACR = pérdida súbita masiva indolora en segundos + retina pálida + MANCHA ROJO CEREZA foveal.',
      'OVCR = pérdida subaguda indolora + HEMORRAGIAS EN LLAMARADA en 4 cuadrantes ("pizza marinara").',
      'Ambas cursan con ojo estrictamente BLANCO e INDOLORO.',
      'La OACR en mayores de 65 años exige descartar Arteritis de Horton (VHS y PCR de urgencia; corticoides EV).',
      'La OVCR isquémica tiene alto riesgo de Glaucoma Neovascular a los 90 días ("glaucoma de los 100 días").',
      'Todo paciente con OACR debe estudiarse con ecografía Doppler carotídea y ECG/Holter como si fuera un ACV.',
    ],
    questions: [
      {
        stem: 'Un hombre de 68 años con antecedentes de tabaquismo y cardiopatía hipertensiva consulta por pérdida total y súbita de la visión en su ojo derecho hace 1 hora mientras desayunaba. No refiere dolor, cefalea ni traumatismo. Al examen el ojo está blanco, la agudeza visual es de bultos a 50 cm y presenta defecto pupilar aferente relativo en ojo derecho. En el fondo de ojo destaca una retina blanquecina edematosa con una mancha rojo cereza a nivel foveal y vasos arteriales filiformes. ¿Cuál es el diagnóstico más probable?',
        options: [
          { id: 'A', text: 'Desprendimiento de retina regmatógeno total' },
          { id: 'B', text: 'Oclusión de la arteria central de la retina' },
          { id: 'C', text: 'Oclusión de la vena central de la retina' },
          { id: 'D', text: 'Hemorragia vítrea masiva' },
          { id: 'E', text: 'Neuritis óptica isquémica no arterítica' },
        ],
        correcta: 'B',
        explicacion: 'La mancha rojo cereza sobre una retina pálida y edematosa, asociada a pérdida súbita e indolora de la visión y defecto pupilar aferente relativo, es el hallazgo patognomónico clásico de la Oclusión de la Arteria Central de la Retina (OACR). La retina neurosensorial se infarta volviéndose opaca y blanca, mientras que la fóvea (que carece de células ganglionares y se nutre directamente de la coroides profunda sana) brilla con su color rojo natural. La oclusión venosa (C) mostraría hemorragias en llamarada generalizadas. El desprendimiento (A) mostraría retina gris levantada y móvil. Perla. Retina pálida más mancha rojo cereza es siempre oclusión de la arteria central de la retina.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.2.004',
      },
      {
        stem: 'Una mujer de 62 años hipertensa consulta por disminución progresiva de la visión en su ojo izquierdo en las últimas 24 horas. Al fondo de ojo se observan hemorragias retinianas masivas en llama en los cuatro cuadrantes, venas tortuosas muy dilatadas y exudados algodonosos. Tres meses después acude a urgencias por dolor ocular insoportable en el mismo ojo y ojo rojo intenso con PIO de 55 mmHg. ¿Qué complicación ha desarrollado?',
        options: [
          { id: 'A', text: 'Glaucoma agudo por cierre angular primario' },
          { id: 'B', text: 'Glaucoma neovascular secundario a isquemia retiniana ("glaucoma de los 100 días")' },
          { id: 'C', text: 'Endoftalmitis endógena bacteriana' },
          { id: 'D', text: 'Desprendimiento de retina exudativo' },
          { id: 'E', text: 'Uveítis anterior hipertensiva secundaria a toxoplasmosis' },
        ],
        correcta: 'B',
        explicacion: 'El cuadro inicial corresponde a una Oclusión de la Vena Central de la Retina (OVCR) de tipo isquémico ("imagen en tormenta retiniana"). La falta de perfusión tisular masiva estimula la producción masiva de factor de crecimiento endotelial vascular (VEGF), el cual difunde hacia el segmento anterior produciendo rubeosis iridis (neovasos en el iris) y neovascularización del ángulo camerular. Estos vasos anómalos forman una membrana fibrovascular que bloquea mecánicamente la malla trabecular, desencadenando una crisis hipertensiva ocular severa, refractaria y muy dolorosa conocida típicamente como Glaucoma Neovascular o "glaucoma de los 100 días" por su aparición característica alrededor de los 3 meses post-trombosis. Perla. Oclusión venosa de la retina más dolor y presión alta a los 3 meses es glaucoma neovascular.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.2.004',
      },
    ],
  },

  {
    id: 'oftal-12',
    classId: 'oftal-12',
    tier: 3,
    blockNum: 3,
    blockName: 'Pérdida Súbita de Visión & Retina',
    topicLabel: '15.12',
    title: 'Retinopatía Diabética: No Proliferativa vs Proliferativa y Edema Macular GES',
    perfilCode: '6.02.1.027',
    dx: 'Sospecha', tx: 'Derivar', seg: 'Control',
    ges: 'Garantía Explícita en Salud (GES N° 23): Retinopatía Diabética',
    reconstrucciones: 'EUNACOM 2013 (Q#89) · EUNACOM Diciembre 2015 (Q#34) · EUNACOM Julio 2020 (Q#105) · EUNACOM Julio 2023 (Q#17)',
    frecuencia: 'Máxima rentabilidad · Causa líder de ceguera en edad laboral; tamizaje anual y neovasos',
    diagram: flow('Algoritmo de Tamizaje y Escalamiento de Retinopatía Diabética', [
      { t: 'Paciente Diabético en APS (DM2 al diagnóstico · DM1 a los 5 años de debut)', s: 'Paso mandatorio: Fondo de Ojo con pupila dilatada (o retinografía) anual por protocolo GES N° 23' },
      { k: 'split', q: '¿Presencia de Neovasos Retinianos / Papilares O Hemorragia Vítrea?', s: 'Bifurcación pronóstica mayor: No Proliferativa vs Proliferativa', ll: 'Sin neovasos (Microaneurismas, exudados, hemorragias)', rl: 'Con neovasos de neovascularización activa (RDP)',
        left: { t: 'Retinopatía No Proliferativa (RDNP)', s: 'Leve / Moderada / Severa (Regla 4-2-1) · Optimizar control metabólico de HbA1c y PA · Descartar Edema Macular', type: 'acc' },
        right: { t: 'Retinopatía Diabética Proliferativa (RDP)', s: 'Alto riesgo de hemorragia vítrea masiva y desprendimiento traccional · PANFOTOCOAGULACIÓN LÁSER URGENTE', type: 'warn' },
        ll: 'retinopatía no proliferativa', rl: 'retinopatía proliferativa' },
      { t: 'Edema Macular Diabético (Causa N° 1 de Pérdida Visual)', s: 'Puede ocurrir en CUALQUIER etapa (RDNP o RDP): Terapia de elección con Anti-VEGF intravítreos (Ranibizumab/Aflibercept)', type: 'dec', al: 'terapia anti-vegf ges', from: 'right' },
    ]),
    contexto: 'La retinopatía diabética es la principal causa de ceguera irreversible en la población en edad laboral activa en Chile y el mundo. Es una microangiopatía progresiva que permanece asintomática hasta etapas avanzadas. La norma GES N° 23 exige tamizaje anual con fondo de ojo desde el momento del diagnóstico en todo paciente con DM2, permitiendo tratar oportunamente antes de la pérdida visual.',
    contentSections: [
      {
        subhead: '1. Fisiopatología de la Microangiopatía Diabética',
        paragraphs: [
          'La hiperglicemia crónica genera daño endotelial mediado por la vía de los polioles (sorbitol), glicación no enzimática de proteínas y estrés oxidativo.<br>' +
          '• <strong>Mecanismo central:</strong> Pérdida selectiva de los <strong>pericitos</strong> de los capilares retinianos, lo que debilita la pared vascular dando origen a microaneurismas y aumento de la permeabilidad vascular.<br>' +
          '• Con el tiempo se produce oclusión microvascular e <strong>isquemia retiniana difusa</strong>. La hipoxia tisular estimula la sobreexpresión de <strong>VEGF (factor de crecimiento del endotelio vascular)</strong>, gatillando la proliferación de vasos sanguíneos frágiles y anómalos (neovascularización).',
        ],
      },
      {
        subhead: '2. Clasificación Clínica: No Proliferativa vs Proliferativa',
        paragraphs: [
          '• <strong>Retinopatía Diabética No Proliferativa (RDNP):</strong><br>' +
          '- <strong>Microaneurismas:</strong> La primera lesión clínicamente visible al fondo de ojo (pequeños puntos rojos bien delimitados).<br>' +
          '- <strong>Microhemorragias intrarretinianas:</strong> En "punto y mancha".<br>' +
          '- <strong>Exudados duros:</strong> Depósitos de lípidos y lipoproteínas amarillentas bien delimitadas secundarias a extravasación crónica.<br>' +
          '- <strong>Exudados algodonosos (blandos):</strong> Microinfartos de la capa de fibras nerviosas por oclusión de arteriolas precapilares.<br>' +
          '- <em>Criterios de RDNP Severa (Regla 4-2-1):</em> Hemorragias severas en los 4 cuadrantes O arrosariamiento venoso en 2 cuadrantes O anormalidades microvasculares intrarretinianas (AMIR) en 1 cuadrante. 50% progresa a RDP en un año.<br>' +
          '• <strong>Retinopatía Diabética Proliferativa (RDP):</strong><br>' +
          'Se define formalmente por la <strong>presencia de NEOVASOS</strong> (en la papila óptica o en cualquier sector de la retina). Estos neovasos crecen hacia el vítreo, se rompen provocando <strong>Hemorragia Vítrea aguda</strong> (pérdida súbita e indolora de la visión) o forman tejido fibroso que tracciona la retina produciendo <strong>Desprendimiento de Retina Traccional</strong>.',
        ],
      },
      {
        subhead: '3. Edema Macular Diabético: Causa N° 1 de Pérdida Visual',
        paragraphs: [
          'Es el engrosamiento de la retina o presencia de exudados duros que comprometen el centro de la mácula (fóvea), secundario a la rotura de la barrera hematorretiniana interna.<br>' +
          '<strong>Regla de oro de examen:</strong> El edema macular diabético <strong>puede aparecer en CUALQUIER etapa de la enfermedad</strong> (tanto en RDNP leve como en RDP avanzada) y constituye la <strong>causa más frecuente de disminución de la agudeza visual</strong> en los pacientes diabéticos.<br>' +
          '• Se diagnostica con precisión mediante <strong>Tomografía de Coherencia Óptica (OCT macular)</strong>.<br>' +
          '• <strong>Tratamiento de elección: Inyecciones intravítreas periódicas de fármacos anti-VEGF (Ranibizumab o Aflibercept)</strong>, que reducen la permeabilidad capilar y mejoran la visión.',
        ],
      },
      {
        subhead: '4. Tamizaje en APS, Terapia Láser y Garantía GES N° 23',
        paragraphs: [
          '• <strong>Calendario de Tamizaje Oficial (MINSAL / GES):</strong><br>' +
          '- <strong>Diabetes Tipo 2:</strong> Fondo de ojo o retinografía con pupila dilatada <strong>AL MOMENTO DEL DIAGNÓSTICO</strong> y luego <strong>ANUALMENTE</strong> (porque la DM2 tiene años de evolución asintomática previa).<br>' +
          '- <strong>Diabetes Tipo 1:</strong> A los <strong>5 años del diagnóstico</strong> (la DM1 tiene debut agudo identificable) y luego anualmente.<br>' +
          '• <strong>Tratamiento de la RDP: Panfotocoagulación Retiniana con Láser (PPR)</strong>.<br>' +
          'Destruye la retina periférica isquémica para reducir la demanda de oxígeno y frenar la síntesis de VEGF, induciendo la regresión de los neovasos.<br>' +
          '• <strong>Garantía GES N° 23 (Retinopatía Diabética):</strong> Garantiza tamizaje, confirmación diagnóstica, fotocoagulación láser en 60 días, terapia anti-VEGF y vitrectomía en centros de especialidad.',
        ],
      },
    ],
    table: {
      title: 'Diferenciación Fundamental: RD No Proliferativa vs Proliferativa',
      headers: ['Característica', 'Retinopatía No Proliferativa (RDNP)', 'Retinopatía Proliferativa (RDP)'],
      rows: [
        ['Criterio diagnóstico definitorio', 'Ausencia total de neovasos retinianos', 'PRESENCIA DE NEOVASOS (en papila o retina)'],
        ['Lesiones típicas', 'Microaneurismas, exudados duros y blandos', 'Neovasos, tejido fibroso, hemorragias vítreas'],
        ['Riesgo mayor de ceguera', 'Edema macular diabético', 'Hemorragia vítrea masiva y desprendimiento traccional'],
        ['Tratamiento de elección', 'Control estricto de HbA1c + Anti-VEGF si edema', 'PANFOTOCOAGULACIÓN LÁSER (PPR) urgente'],
        ['Seguimiento oftalmológico', 'Anual si leve; cada 4-6 meses si moderada/severa', 'Cada 1 a 3 meses por especialista'],
      ],
    },
    severityTable: {
      title: 'Estadificación Internacional de la Retinopatía Diabética (ETDRS)',
      headers: ['Estadio Clínico', 'Hallazgos al Fondo de Ojo', 'Riesgo de Progresión a 1 año', 'Conducta Indicada'],
      rows: [
        ['Sin retinopatía aparente', 'Fondo de ojo normal sin lesiones', 'Mínimo (< 5%)', 'Fondo de ojo anual en APS'],
        ['RDNP Leve', 'Solo microaneurismas aislados', 'Bajo (5 a 10%)', 'Control oftalmológico anual'],
        ['RDNP Moderada', 'Microaneurismas + microhemorragias + exudados', 'Moderado (15 a 25%)', 'Control cada 6 meses'],
        ['RDNP Severa', 'Regla 4-2-1 cumplida sin neovasos', 'Muy alto (50% progresa a RDP)', 'Derivación prioritaria; láser temprano'],
        ['RDP Avanzada', 'Neovasos visibles / Hemorragia vítrea', 'Pérdida visual severa inminente', 'Panfotocoagulación láser inmediata'],
      ],
    },
    treatmentTable: {
      title: 'Protocolo Terapéutico y Garantías GES N° 23 en Chile',
      headers: ['Problema Clínico', 'Tratamiento de Primera Línea', 'Meta Clínica', 'Plazo Garantizado GES'],
      rows: [
        ['Tamizaje preventivo', 'Fondo de ojo con dilatación pupilar / Retinografía', 'Pesquisa preclínica anual', 'Acceso garantizado en APS'],
        ['Edema Macular Diabético', 'Inyecciones intravítreas de Anti-VEGF (Ranibizumab)', 'Resolución del grosor foveal y ganar agudeza visual', 'Inicio en < 30 días'],
        ['Retinopatía Proliferativa', 'Panfotocoagulación retiniana completa con láser', 'Regresión de los neovasos y evitar hemorragia', 'Láser en < 60 días'],
        ['Hemorragia vítrea no resuelta', 'Vitrectomía pars plana quirúrgica', 'Limpieza del eje visual y reaplicar retina', 'Cirugía según evaluación'],
      ],
    },
    vignette: 'Hombre de 58 años con diagnóstico de diabetes mellitus tipo 2 desde hace 10 años, con mal control metabólico (última HbA1c 9.8%). Acude a control en APS asintomático, refiriendo que ve "perfectamente". Se realiza fondo de ojo bajo dilatación pupilar farmacológica con tropicamida, evidenciándose múltiples microaneurismas, exudados duros en polo posterior y neovasos finos que crecen sobre el disco de la papila óptica derecha.',
    explicacion: 'El hallazgo de neovasos (neovascularización) sobre la papila óptica en un paciente diabético establece el diagnóstico indiscutible de Retinopatía Diabética Proliferativa (RDP). Aunque el paciente se encuentre actualmente asintomático, los neovasos son extremadamente frágiles y presentan un riesgo inminente de rotura con hemorragia vítrea masiva o proliferación fibrosa con desprendimiento de retina traccional. La conducta obligatoria es la Notificación GES N° 23 (Retinopatía Diabética) y derivación prioritaria a oftalmología para Panfotocoagulación Retiniana con Láser (PPR) urgente, junto con optimización del control glucémico y tensional.',
    keyPoints: [
      'La retinopatía diabética es la primera causa de ceguera irreversible en personas en edad laboral.',
      'El tamizaje en DM2 se realiza AL MOMENTO DEL DIAGNÓSTICO y luego ANUALMENTE.',
      'En DM1 el tamizaje se inicia a los 5 años del diagnóstico.',
      'La presencia de NEOVASOS define a la Retinopatía Diabética Proliferativa y exige Panfotocoagulación Láser.',
      'La causa más frecuente de baja de visión en diabéticos es el Edema Macular Diabético (se trata con anti-VEGF intravítreos).',
      'El edema macular puede aparecer en cualquier etapa de la enfermedad (tanto no proliferativa como proliferativa).',
    ],
    questions: [
      {
        stem: 'Un paciente de 52 años es diagnosticado de diabetes mellitus tipo 2 en un chequeo preventivo de salud. Se encuentra completamente asintomático desde el punto de vista visual. ¿Cuál es la indicación correcta respecto al tamizaje oftalmológico según las guías clínicas del MINSAL y la garantía GES N° 23?',
        options: [
          { id: 'A', text: 'Realizar fondo de ojo con pupila dilatada al momento del diagnóstico y luego anualmente' },
          { id: 'B', text: 'Esperar 5 años desde el diagnóstico para realizar el primer fondo de ojo' },
          { id: 'C', text: 'Solicitar fondo de ojo únicamente si la hemoglobina glicosilada supera el 8.0%' },
          { id: 'D', text: 'Realizar fondo de ojo solo cuando el paciente refiera disminución de agudeza visual' },
          { id: 'E', text: 'Derivar a cirugía preventiva de catarata bilateral de inmediato' },
        ],
        correcta: 'A',
        explicacion: 'En la Diabetes Mellitus Tipo 2, la enfermedad suele tener un curso subclínico y asintomático de 5 a 7 años de evolución antes del diagnóstico clínico formal. Por lo tanto, hasta un 20% de los pacientes recién diagnosticados de DM2 ya presentan algún grado de retinopatía diabética al debut. La norma técnica del MINSAL y la ley GES N° 23 establecen que todo paciente con DM2 debe someterse a evaluación de fondo de ojo con pupila dilatada (o retinografía) al momento del diagnóstico, y posteriormente una vez al año de por vida. En cambio, en la DM1 el fondo de ojo se inicia a los 5 años del debut. Perla. En DM2 el fondo de ojo se pide de inmediato al diagnóstico; en DM1 a los 5 años.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.1.027',
      },
      {
        stem: '¿Cuál es la causa más frecuente de disminución de la agudeza visual en los pacientes con diabetes mellitus?',
        options: [
          { id: 'A', text: 'Glaucoma neovascular de ángulo cerrado' },
          { id: 'B', text: 'Edema macular diabético' },
          { id: 'C', text: 'Desprendimiento de retina regmatógeno' },
          { id: 'D', text: 'Oclusión de la arteria central de la retina' },
          { id: 'E', text: 'Neuritis óptica desmielinizante' },
        ],
        correcta: 'B',
        explicacion: 'El Edema Macular Diabético (EMD) es la complicación que con mayor frecuencia produce pérdida de la agudeza visual central en pacientes diabéticos. Puede presentarse en cualquier estadio de la retinopatía, incluso en etapas no proliferativas leves o moderadas, debido a la hiperpermeabilidad de los capilares perifoveales con acúmulo de líquido intrarretiniano en la mácula. Su tratamiento de primera línea avalado por la evidencia son los fármacos anti-VEGF intravítreos. La hemorragia vítrea y el desprendimiento traccional causan cegueras más severas, pero son mucho menos frecuentes que el edema macular. Perla. La causa N° 1 de baja visual en diabéticos es el edema macular.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.1.027',
      },
      {
        stem: 'Un hombre de 60 años con diabetes mellitus mal controlada consulta por pérdida súbita, indolora y masiva de la visión en su ojo derecho ocurrida esta mañana. Refiere que ve todo "rojo oscuro y con telarañas flotantes". Al examen físico el ojo no está rojo ni duele, no hay reflejo rojo pupilar en el ojo derecho y a la oftalmoscopía es imposible visualizar los detalles de la retina debido a una opacidad hemática en la cavidad posterior. ¿Cuál es el diagnóstico más probable?',
        options: [
          { id: 'A', text: 'Hemorragia vítrea secundaria a retinopatía diabética proliferativa' },
          { id: 'B', text: 'Glaucoma agudo fulminante' },
          { id: 'C', text: 'Catarata hipermadura morgagniana' },
          { id: 'D', text: 'Endoftalmitis micótica endógena' },
          { id: 'E', text: 'Queratitis dendrítica extensa' },
        ],
        correcta: 'A',
        explicacion: 'La pérdida súbita e indolora de la visión con visión de "humo, telarañas o tinte rojizo" y ausencia de visualización del fondo de ojo por pérdida del reflejo rojo en un paciente con diabetes de larga data es la presentación clínica clásica de una Hemorragia Vítrea (hemovítreo). En diabéticos se debe a la rotura espontánea de los neovasos frágiles de la retina en el contexto de una Retinopatía Diabética Proliferativa no tratada. Requiere reposo semisentado, suspensión de antiagregantes si es seguro, ecografía ocular modo B para descartar desprendimiento traccional asociado y eventual vitrectomía pars plana si no se reabsorbe espontáneamente. Perla. Pérdida súbita visual indolora con visión rojiza y fondo de ojo borroso en diabético es hemorragia vítrea.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.1.027',
      },
      {
        stem: '¿Cuál es el mecanismo de acción principal y el objetivo terapéutico de la panfotocoagulación con láser de argón en la retinopatía diabética proliferativa?',
        options: [
          { id: 'A', text: 'Coagular directamente la arteria central de la retina para disminuir la presión vascular' },
          { id: 'B', text: 'Destruir zonas de retina periférica isquémica para reducir la producción de factores angiogénicos (VEGF) y lograr la regresión de los neovasos' },
          { id: 'C', text: 'Eliminar físicamente los exudados duros lipídicos de la fóvea' },
          { id: 'D', text: 'Aumentar la presión intraocular para aplanar la retina desprendida' },
          { id: 'E', text: 'Reemplazar el humor vítreo por humor acuoso artificial' },
        ],
        correcta: 'B',
        explicacion: 'La Panfotocoagulación Retiniana con Láser (PPR) consiste en aplicar cientos o miles de disparos de láser térmico en la retina periférica no funcionante, respetando el polo posterior y la mácula. Al destruir el tejido retiniano periférico hipóxico e isquémico, se reduce drásticamente el consumo metabólico de oxígeno de la retina externa y se apaga la sobreproducción del factor de crecimiento endotelial vascular (VEGF). Como consecuencia de la caída de los niveles de VEGF, los neovasos anómalos sufren involución y regresión cicatrizal, eliminando el riesgo de hemorragia vítrea catastrófica y desprendimiento traccional. Perla. El láser panretiniano destruye retina isquémica para frenar el VEGF y secar los neovasos.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.1.027',
      },
    ],
  },

  {
    id: 'oftal-13',
    classId: 'oftal-13',
    tier: 2,
    blockNum: 3,
    blockName: 'Pérdida Súbita de Visión & Retina',
    topicLabel: '15.13',
    title: 'Retinopatía Hipertensiva: Cruces AV, Exudados Algodonosos y Edema Papilar',
    perfilCode: '6.02.1.027',
    dx: 'Sospecha', tx: 'Inicial', seg: 'Completo',
    ges: 'Sin garantía GES específica · Vinculada a GES Hipertensión Arterial N° 3',
    reconstrucciones: 'EUNACOM 2015 (Q#48) · EUNACOM Diciembre 2018 (Q#101)',
    frecuencia: 'Alta · La presencia de edema de papila (Grado IV) define emergencia hipertensiva maligna',
    diagram: flow('Algoritmo de Estadificación de Keith-Wagener-Barker en Retinopatía Hipertensiva', [
      { t: 'Evaluación de Fondo de Ojo en Paciente con Hipertensión Arterial', s: 'Evaluar calibre arteriolar, cruces arteriovenosos, hemorragias y bordes papilares' },
      { k: 'split', q: '¿Presenta Edema de Papila Bilateral (Bordes Papilares Borrados)?', s: 'Diferenciación crucial entre retinopatía hipertensiva crónica y emergencia hipertensiva grado IV', ll: 'Sin edema papilar (Grados I, II o III)', rl: 'CON EDEMA DE PAPILA BILATERAL (Grado IV)',
        left: { t: 'Retinopatía Hipertensiva Grados I a III', s: 'Grado I: hilos de cobre · Grado II: cruces AV (Gunn/Salus) · Grado III: hemorragias en llama y exudados', type: 'acc' },
        right: { t: 'EMERGENCIA HIPERTENSIVA MALIGNA (Grado IV)', s: 'Daño de órgano blanco cerebral inminente · HOSPITALIZACIÓN INMEDIATA EN UCI/UTI con labetalol/nitroprusiato', type: 'warn' },
        ll: 'cambios vasculares crónicos', rl: 'emergencia hipertensiva maligna' },
      { t: 'Conducta Médica Obligatoria', s: 'Descenso tensional gradual parenteral (máximo 20-25% de la PAM en las primeras 2 horas para evitar infarto cerebral/óptico)', type: 'dec', al: 'terapia hemodinámica intensiva', from: 'right' },
    ]),
    contexto: 'La retina es el único lugar del organismo donde la microcirculación vascular puede visualizarse directamente de forma no invasiva. La retinopatía hipertensiva refleja fielmente el daño vascular que están sufriendo simultáneamente el cerebro, el corazón y el riñón. El hallazgo de edema de papila en un paciente hipertenso es sinónimo de hipertensión maligna y exige hospitalización en cuidados intensivos.',
    contentSections: [
      {
        subhead: '1. Fisiopatología Vascular ante la Hipertensión',
        paragraphs: [
          'La microvasculatura retiniana responde a la hipertensión en tres fases sucesivas:<br>' +
          '1. <strong>Fase Vasoconstrictora:</strong> Autorregulación con espasmo y estrechamiento arteriolar difuso o focal.<br>' +
          '2. <strong>Fase Esclerótica:</strong> Engrosamiento de la íntima y túnica media arteriolar con hialinización y fibrosis. La arteriola pierde su transparencia normal: primero se ve como <strong>"hilo de cobre"</strong> (reflejo luminoso aumentado cobrizo) y luego como <strong>"hilo de plata"</strong> (pared vascular blanca opaca que no permite ver la columna sanguínea).<br>' +
          '3. <strong>Fase Exudativa:</strong> Rotura de la barrera hematorretiniana por necrosis fibrinoide de la pared vascular, con microinfartos (exudados blandos algodonosos), hemorragias en llama y edema.',
        ],
      },
      {
        subhead: '2. Clasificación Clásica de Keith-Wagener-Barker',
        paragraphs: [
          'Es la clasificación universal exigida en el EUNACOM:<br>' +
          '• <strong>Grado I:</strong> Estrechamiento arteriolar leve difuso ("hilos de cobre"). Asintomático.<br>' +
          '• <strong>Grado II:</strong> Estrechamiento arteriolar más marcado + <strong>CRUCES ARTERIOVENOSOS PATOLÓGICOS</strong>:<br>' +
          '- <em>Signo de Gunn:</em> Ocultamiento o afilamiento de la vénula por compresión de la adventicia compartida con la arteriola esclerosada.<br>' +
          '- <em>Signo de Salus:</em> Deflexión o cambio de dirección en ángulo recto/"en S" de la vénula al cruzar la arteriola.<br>' +
          '• <strong>Grado III:</strong> Signos de grado II + <strong>Hemorragias retinianas en llama</strong> (en la capa de fibras nerviosas) + <strong>Exudados algodonosos</strong> (blanquecinos de bordes difusos por isquemia) ± <strong>Exudados duros en "estrella macular"</strong>.<br>' +
          '• <strong>Grado IV:</strong> Todo lo anterior + <strong>EDEMA DE PAPILA BILATERAL</strong> (borramiento de los límites del disco óptico, hiperemia y elevación de la papila).',
        ],
      },
      {
        subhead: '3. Implicancia Clínica y Manejo de la Emergencia Hipertensiva',
        paragraphs: [
          '• Los grados I y II corresponden a hipertensión arterial crónica bien o moderadamente controlada; no requieren cambio de conducta urgente, sino titulación de antihipertensivos orales en APS.<br>' +
          '• El <strong>Grado IV define una EMERGENCIA HIPERTENSIVA (Hipertensión Acelerada o Maligna)</strong>, casi siempre con cifras tensionales > 200/120 mmHg y encefalopatía hipertensiva o insuficiencia renal aguda coexistente.<br>' +
          '• <strong>Manejo de Emergencia:</strong> Hospitalización en UCI/UTI, monitorización invasiva y tratamiento con hipotensores parenterales en infusión continua (<strong>Labetalol endovenoso</strong> o Nitroprusiato de sodio).<br>' +
          '• <strong>Regla de oro de examen:</strong> El descenso tensional debe ser <strong>GRADUAL Y CONTROLADO</strong>: reducir la Presión Arterial Media (PAM) no más de un 20% a 25% en las primeras 2 a 4 horas. NUNCA normalizar bruscamente la PA, ya que la autorregulación cerebral y del nervio óptico colapsa, provocando un infarto cerebral isquémico o una neuropatía óptica isquémica iatrogénica irreversible.',
        ],
      },
    ],
    table: {
      title: 'Clasificación de Keith-Wagener-Barker de la Retinopatía Hipertensiva',
      headers: ['Grado', 'Hallazgos al Fondo de Ojo', 'Fisiopatología Subyacente', 'Conducta Clínica'],
      rows: [
        ['Grado I', 'Estrechamiento arteriolar leve, arterias en "hilo de cobre"', 'Vasoconstricción funcional / esclerosis incipiente', 'Manejo ambulatorio en APS (GES HTA N° 3)'],
        ['Grado II', 'Arterias en "hilo de plata", cruces AV patológicos (Gunn y Salus)', 'Esclerosis marcada de la adventicia compartida', 'Optimizar terapia antihipertensiva oral'],
        ['Grado III', 'Hemorragias en llama, exudados algodonosos, estrella macular', 'Necrosis fibrinoide e isquemia retiniana aguda', 'Urgencia hipertensiva; ajuste farmacológico rápido'],
        ['Grado IV', 'Todo lo anterior + EDEMA DE PAPILA BILATERAL', 'Hipertensión intracraneana / Hipertensión maligna', 'EMERGENCIA HIPERTENSIVA: UCI + Fármacos EV'],
      ],
    },
    vignette: 'Mujer de 48 años sin controles médicos regulares es traída al servicio de urgencias por cefalea occipital intensa, visión borrosa y náuseas. Presión arterial: 220/130 mmHg. Al examen neurológico se encuentra orientada pero obnubilada levemente. El fondo de ojo revela abundantes hemorragias en llama, exudados algodonosos algodonosos y borramiento completo bilateral de los bordes de la papila óptica con sobreelevación de la cabeza del nervio óptico (edema de papila bilateral).',
    explicacion: 'La presencia de cifras tensionales severamente elevadas asociadas a edema de papila bilateral en el fondo de ojo establece el diagnóstico de Retinopatía Hipertensiva Grado IV de Keith-Wagener-Barker, lo que define una Emergencia Hipertensiva con Hipertensión Maligna y daño de órgano blanco encefálico/ocular inminente. La conducta médica inmediata es hospitalizar en unidad de cuidados intensivos (UCI/UTI) e iniciar tratamiento hipotensor endovenoso en infusión continua (labetalol EV), con la meta estricta de reducir la PAM un 20-25% en las primeras horas sin descensos bruscos para prevenir infarto cerebral o ceguera iatrogénica.',
    keyPoints: [
      'Grado I = arterias en hilo de cobre; Grado II = cruces AV (signo de Gunn y Salus).',
      'Grado III = hemorragias en llama + exudados algodonosos por isquemia.',
      'Grado IV = todo lo anterior + EDEMA DE PAPILA BILATERAL.',
      'El Grado IV define una Emergencia Hipertensiva Maligna y exige ingreso a UCI y fármacos EV.',
      'NUNCA descender la presión arterial bruscamente: bajar solo un 20-25% de la PAM en las primeras 2 horas.',
      'El signo de Gunn es la compresión y afilamiento venoso en el cruce arteriovenoso.',
    ],
    questions: [
      {
        stem: 'Un paciente de 63 años con hipertensión arterial crónica acude a control. En el fondo de ojo se observan arteriolas retinianas estrechadas de aspecto brillante y cobrizo, y a nivel de los cruces arteriovenosos se aprecia un afilamiento y ocultamiento del trayecto de las vénulas por debajo de las arteriolas (signo de Gunn positivo), sin hemorragias ni exudados. ¿A qué grado de la clasificación de Keith-Wagener-Barker corresponde este hallazgo?',
        options: [
          { id: 'A', text: 'Grado I' },
          { id: 'B', text: 'Grado II' },
          { id: 'C', text: 'Grado III' },
          { id: 'D', text: 'Grado IV' },
          { id: 'E', text: 'Retinopatía proliferativa grado B' },
        ],
        correcta: 'B',
        explicacion: 'La presencia de cruces arteriovenosos patológicos (como el signo de Gunn de ocultamiento o afilamiento venoso y el signo de Salus de deflexión en S) junto con esclerosis arteriolar (hilos de cobre o plata) sin la presencia de hemorragias retinianas, exudados ni edema de papila define de manera unívoca al Grado II de la clasificación de Keith-Wagener-Barker. El Grado I solo tiene estrechamiento arteriolar sin cruces marcados. El Grado III añade exudados y hemorragias en llama. El Grado IV suma edema de papila. Perla. Cruces arteriovenosos patológicos (Gunn/Salus) sin hemorragias = Grado II.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.1.027',
      },
      {
        stem: 'Un hombre de 45 años ingresa al servicio de urgencias con presión arterial de 230/140 mmHg, cefalea holocraneana y confusión. Al fondo de ojo se evidencia borramiento de los bordes de ambas papilas ópticas con sobreelevación papilar, exudados algodonosos y hemorragias retinianas en llama. ¿Cuál es la conducta terapéutica correcta respecto al manejo de su presión arterial?',
        options: [
          { id: 'A', text: 'Administrar nifedipino sublingual para descender la presión arterial a menos de 120/80 mmHg en 15 minutos' },
          { id: 'B', text: 'Hospitalizar en cuidados intensivos e iniciar labetalol endovenoso reduciendo la presión arterial media en un 20 a 25% en las primeras horas' },
          { id: 'C', text: 'Indicar enalapril oral 20 mg y enviar a domicilio con control en 48 horas' },
          { id: 'D', text: 'Realizar punción lumbar urgente antes de iniciar cualquier tratamiento hipotensor' },
          { id: 'E', text: 'Indicar diuréticos de asa orales en dosis única y analgesia' },
        ],
        correcta: 'B',
        explicacion: 'El paciente presenta una Retinopatía Hipertensiva Grado IV (edema de papila bilateral), lo que diagnostica una Emergencia Hipertensiva (hipertensión maligna/encefalopatía hipertensiva). El manejo requiere ingreso inmediato a UCI/UTI y fármacos endovenosos titulables (como labetalol o nitroprusiato). La regla farmacológica de oro es que la reducción tensional debe ser controlada y gradual, disminuyendo la presión arterial media entre un 20% y un 25% durante las primeras 2 a 4 horas. Bajar la presión bruscamente (especialmente con fármacos incontrolables como nifedipino sublingual, A) colapsa el flujo sanguíneo cerebral y del nervio óptico, pudiendo provocar un infarto cerebral isquémico o ceguera iatrogénica. Trampa. Nifedipino sublingual o descensos bruscos de PA están prohibidos en emergencias hipertensivas.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.1.027',
      },
    ],
  },

  {
    id: 'oftal-14',
    classId: 'oftal-14',
    tier: 2,
    blockNum: 3,
    blockName: 'Pérdida Súbita de Visión & Retina',
    topicLabel: '15.14',
    title: 'Degeneración Macular Asociada a la Edad (DMAE) y Escotoma Central',
    perfilCode: '6.02.1.020',
    dx: 'Sospecha', tx: 'Derivar', seg: 'Control',
    ges: 'Sin garantía GES específica · Problema de Salud de Alta Prevalencia Senil',
    reconstrucciones: 'EUNACOM 2016 (Q#55) · EUNACOM Julio 2021 (Q#76)',
    frecuencia: 'Alta · Principal causa de ceguera central legal irreversible en adultos mayores; rejilla de Amsler',
    diagram: flow('Algoritmo Diagnóstico y Subtipos de Degeneración Macular (DMAE)', [
      { t: 'Paciente > 60 Años con Pérdida Progresiva o Súbita de la Visión Central', s: 'Síntoma patognomónico: METAMORFOPSIA (deformación de líneas rectas) evaluada con Rejilla de Amsler' },
      { k: 'split', q: '¿Pérdida Lenta con Drusas (Seca) vs Pérdida Rápida con Neovasos/Sangre (Húmeda)?', s: 'Diferenciación crucial de los dos subtipos biológicos de DMAE', ll: 'DMAE Seca / Atrófica (85-90%)', rl: 'DMAE Húmeda / Exudativa (10-15%)',
        left: { t: 'DMAE Seca (Atrófica o No Neovascular)', s: 'Drusas duras/blandas + atrofia geográfica foveal · Pérdida lenta en años · Manejo con antioxidantes AREDS-2', type: 'acc' },
        right: { t: 'DMAE Húmeda (Neovascular o Exudativa)', s: 'Membrana neovascular coroidea con líquido/sangre subretiniana · PÉRDIDA VISUAL RÁPIDA · Anti-VEGF urgente', type: 'warn' },
        ll: 'progresión atrófica lenta', rl: 'neovascularización coroidea activa' },
      { t: 'Tratamiento de Elección en DMAE Húmeda', s: 'Inyecciones intravítreas periódicas de Anti-VEGF (Ranibizumab / Aflibercept) para frenar la exudación foveal', type: 'dec', al: 'urgencia retinológica', from: 'right' },
    ]),
    contexto: 'La degeneración macular asociada a la edad (DMAE) es la causa principal de ceguera central legal irreversible en adultos mayores de 60 años en los países occidentales. Destruye selectivamente la mácula (fóvea), aboliendo la capacidad de leer, conducir y reconocer rostros, aunque NUNCA produce ceguera total porque el campo visual periférico permanece íntegro.',
    contentSections: [
      {
        subhead: '1. Factores de Riesgo y Fisiopatología de la Mácula Senil',
        paragraphs: [
          'La mácula es la zona de mayor densidad de conos y más alta tasa metabólica del organismo. Con los años, el epitelio pigmentario retiniano (EPR) pierde la capacidad de degradar los segmentos externos de los fotorreceptores.<br>' +
          '• <strong>Factores de riesgo mayores:</strong> <strong>Edad avanzada (> 60-65 años, factor número uno)</strong>, <strong>tabaquismo (principal factor modificable de progresión rápida)</strong>, antecedentes familiares de DMAE, raza caucásica/blanca y dieta pobre en antioxidantes.<br>' +
          '• <strong>Lesión elemental precursora: DRUSAS</strong>. Son depósitos acelulares nodulares amarillentos de material de desecho lipoproteico situados entre la membrana basal del EPR y la membrana de Bruch. Las drusas blandas (grandes y confluentes) conllevan alto riesgo de progresión a ceguera.',
        ],
      },
      {
        subhead: '2. Formas Clínicas: DMAE Seca vs DMAE Húmeda',
        paragraphs: [
          '• <strong>1. DMAE Seca o Atrófica (85% a 90% de los casos):</strong><br>' +
          'Progresión muy lenta e insidiosa a lo largo de muchos años. Se caracteriza por múltiples drusas y áreas de <strong>atrofia geográfica del epitelio pigmentario y fotorreceptores</strong> en la fóvea. Provoca dificultad progresiva para leer con letras borrosas centrales.<br>' +
          '• <strong>2. DMAE Húmeda o Exudativa (10% a 15% de los casos, pero causa el 90% de la ceguera severa):</strong><br>' +
          'La isquemia local estimula la liberación de VEGF, provocando el crecimiento de una <strong>membrana neovascular coroidea (MNVC)</strong> que atraviesa la membrana de Bruch hacia el espacio subretiniano.<br>' +
          'Estos vasos anómalos son muy frágiles y causan <strong>extravasación serosa, edema macular y hemorragias subretinianas</strong>, culminando en una cicatriz fibrovascular disciforme central. Causa pérdida rápida, brusca y marcada de la visión central en cuestión de días o semanas.',
        ],
      },
      {
        subhead: '3. Clínica Cardinal, Rejilla de Amsler y Tratamiento',
        paragraphs: [
          '• <strong>Clínica Cardinal:</strong><br>' +
          '- <strong>Metamorfopsia (signo más temprano y sensible):</strong> Las líneas rectas se perciben torcidas, onduladas o quebradas (los marcos de puertas, baldosas o renglones de lectura se ven ondulados). Se pesquisa en box con la <strong>Rejilla de Amsler</strong>.<br>' +
          '- <strong>Escotoma Central:</strong> Mancha oscura o borrosa fija en el centro del campo visual que impide ver el centro de las caras de las personas.<br>' +
          '- Conservación intacta de la visión periférica (el paciente puede caminar sin tropezar; no requiere bastón blanco).<br>' +
          '• <strong>Tratamiento Médico:</strong><br>' +
          '- <em>DMAE Seca:</em> Cese estricto del tabaco y suplementos nutricionales antioxidantes según fórmula <strong>AREDS-2</strong> (Vitamina C, Vitamina E, Zinc, Cobre, Luteína y Zeaxantina). Frena la tasa de progresión pero no regenera tejido atrófico.<br>' +
          '- <em>DMAE Húmeda:</em> Terapia de rescate con <strong>inyecciones intravítreas de anti-VEGF (Ranibizumab, Aflibercept, Brolucizumab)</strong> mensuales o bimestrales, logrando frenar la neovascularización y estabilizar la visión.',
        ],
      },
    ],
    table: {
      title: 'Diagnóstico Diferencial: DMAE Seca (Atrófica) vs DMAE Húmeda (Exudativa)',
      headers: ['Característica', 'DMAE Seca (Atrófica)', 'DMAE Húmeda (Exudativa)'],
      rows: [
        ['Frecuencia', '85% a 90% de los pacientes con DMAE', '10% a 15% de los casos (la más destructiva)'],
        ['Velocidad de pérdida visual', 'LENTA y progresiva a lo largo de años', 'RÁPIDA y brusca en semanas o meses'],
        ['Fisiopatología', 'Drusas + atrofia progresiva del EPR', 'Membrana neovascular coroidea con edema y sangre'],
        ['Fondo de ojo característico', 'Drusas amarillentas y zonas de atrofia despigmentada', 'Hemorragias subretinianas, líquido seroso, cicatriz'],
        ['Herramienta de detección', 'Rejilla de Amsler periódica', 'Rejilla de Amsler + OCT macular + Angiografía'],
        ['Tratamiento de elección', 'Antioxidantes orales (AREDS-2) + Dejar de fumar', 'INYECCIONES INTRAVÍTREAS DE ANTI-VEGF urgentes'],
      ],
    },
    vignette: 'Mujer de 74 años, fumadora de 20 cigarrillos al día, acude a consulta médica porque desde hace 3 semanas nota que al leer el diario las letras del centro del renglón se ven deformadas y onduladas ("como si bailaran"), y las líneas de las baldosas de su cocina se ven chuecas. Refiere además que le cuesta ver la hora en su reloj de pulsera y no puede distinguir las caras de frente. Al ponerle una Rejilla de Amsler frente al ojo derecho, refiere que las líneas centrales se curvan hacia un punto negro central. Agudeza visual OD 20/100, OI 20/40.',
    explicacion: 'El síntoma de metamorfopsia (deformación ondulatoria de líneas rectas) confirmado con la Rejilla de Amsler, asociado a escotoma central en una paciente adulta mayor fumadora, es el cuadro clínico patognomónico de Degeneración Macular Asociada a la Edad (DMAE). La evolución rápida en pocas semanas sugiere fuertemente una forma húmeda o neovascular (con presencia de membrana coroidea exudativa subretiniana). La conducta médica obligatoria es derivar con carácter de urgencia a oftalmología para estudio con Tomografía de Coherencia Óptica (OCT) y angiografía, e iniciar de inmediato tratamiento con inyecciones intravítreas de anti-VEGF para frenar el sangrado y salvar la visión central.',
    keyPoints: [
      'La DMAE es la causa líder de ceguera central legal en adultos mayores de 60 años.',
      'Metamorfopsia = ver líneas rectas como onduladas; se evalúa con la Rejilla de Amsler.',
      'Cursa con escotoma central pero con RESPETO ABSOLUTO del campo visual periférico (nunca ceguera total).',
      'El tabaquismo es el principal factor de riesgo ambiental modificable.',
      'La DMAE seca se maneja con antioxidantes orales (AREDS-2); la húmeda requiere inyecciones anti-VEGF intravítreas.',
      'Las drusas blandas y confluentes son la lesión elemental precursora de degeneración macular.',
    ],
    questions: [
      {
        stem: 'Una mujer de 72 años consulta porque nota que los marcos de las puertas y los azulejos de su baño se ven curvados y distorsionados al mirar con su ojo izquierdo. Al examen con la cartilla de cuadrícula de Amsler describe que las líneas rectas de la rejilla se ondulan hacia el centro de la mirada. El fondo de ojo revela drusas confluentes y una pequeña hemorragia subretiniana paramacular. ¿Cuál es el diagnóstico más probable y la terapia de primera línea indicada?',
        options: [
          { id: 'A', text: 'Desprendimiento de retina regmatógeno; fotocoagulación láser periférica' },
          { id: 'B', text: 'Degeneración macular asociada a la edad de tipo húmeda; inyecciones intravítreas de anti-VEGF' },
          { id: 'C', text: 'Retinopatía hipertensiva grado IV; nitroprusiato endovenoso' },
          { id: 'D', text: 'Neuritis óptica isquémica anterior; corticoides sistémicos' },
          { id: 'E', text: 'Glaucoma crónico simple; colirio de latanoprost nocturno' },
        ],
        correcta: 'B',
        explicacion: 'La metamorfopsia (percepción de líneas rectas como onduladas) con alteración central en la rejilla de Amsler en un paciente senil con hemorragia subretiniana macular y drusas es diagnóstica de Degeneración Macular Asociada a la Edad (DMAE) en su variante Húmeda o Neovascular. La causa es una membrana neovascular coroidea anómala estimulada por VEGF que sangra bajo la fóvea. La terapia de primera línea de elección que ha revolucionado el pronóstico de esta enfermedad son las inyecciones intravítreas periódicas de fármacos anti-VEGF (como ranibizumab o aflibercept), las cuales frenan la proliferación vascular y reabsorben el fluido foveal. Perla. Metamorfopsia en rejilla de Amsler en paciente mayor es degeneración macular húmeda.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.1.020',
      },
      {
        stem: '¿Cuál de las siguientes afirmaciones respecto a la pérdida visual producida por la degeneración macular asociada a la edad (DMAE) es CORRECTA?',
        options: [
          { id: 'A', text: 'Conduce a una pérdida concéntrica del campo visual periférico respetando la fóvea hasta el final' },
          { id: 'B', text: 'Causa un escotoma central que impide la lectura y reconocimiento de rostros, pero preserva la visión periférica de orientación' },
          { id: 'C', text: 'Produce ceguera total completa de ambos ojos impidiendo incluso la deambulación del paciente' },
          { id: 'D', text: 'Afecta de forma exclusiva a pacientes jóvenes miopes menores de 40 años' },
          { id: 'E', text: 'Cursa con dolor ocular severo y midriasis media fija arreactiva' },
        ],
        correcta: 'B',
        explicacion: 'La degeneración macular asociada a la edad destruye selectivamente la mácula lútea y la fóvea central, las cuales son responsables de la visión foveal de alta resolución, la agudeza visual fina, la discriminación del color y la capacidad para leer o reconocer detalles faciales. Sin embargo, la retina periférica permanece indemne y funcionante, por lo que el paciente conserva su campo visual periférico (visión de orientación o navegación), lo que le permite caminar sin tropezar y ser autovalente en su desplazamiento. Nunca produce una ceguera total con pérdida de percepción de luz (amaurosis completa). Trampa. Creer que la DMAE deja al paciente completamente ciego de todo el campo visual es un error de concepto.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.1.020',
      },
    ],
  },
];

module.exports = {
  bloque3,
  flow,
};
