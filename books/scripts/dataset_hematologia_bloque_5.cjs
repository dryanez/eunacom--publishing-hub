const { flow } = require('./dataset_hematologia_bloque_1.cjs');

const bloque5 = [
  {
    id: 'hem-21',
    classId: 'hem-21',
    tier: 3,
    blockNum: 5,
    blockName: 'Urgencias Oncohematológicas, Trombofilias y Medicina Transfusional',
    topicLabel: '8.21',
    title: 'Neutropenia Febril en Oncología: Estratificación MASCC, Monoterapia Antipseudomónica y Urgencia Médica',
    perfilCode: '1.08.2.006',
    dx: 'Sospecha', tx: 'Inicial', seg: 'Derivar',
    ges: 'Garantía Explícita en Salud: Urgencia Vital en Paciente Oncológico GES',
    reconstrucciones: 'EUNACOM Julio 2017 (Q#03) · EUNACOM Diciembre 2019 (Q#28) · EUNACOM Julio 2021 (Q#12) · EUNACOM Enero 2024 (Q#27)',
    frecuencia: 'Máxima · Definición de neutropenia (<500/uL), toma de hemocultivos y antibióticos antipseudomónicos en < 60 min',
    svg: null, algoTitle: 'Algoritmo de Urgencia en Neutropenia Febril Posquimioterapia',
    diagram: flow('Algoritmo de Neutropenia Febril en Urgencias', [
      { t: 'Paciente Oncológico Posquimioterapia (Nadir día 7-14) con Fiebre (T° ≥ 38.3 °C O ≥ 38.0 °C x 1 h)', s: 'Definición de Neutropenia: Recuento Absoluto de Neutrófilos (RAN) < 500/uL (o < 1.000 con caída prevista a < 500)' },
      { k: 'split', q: 'Estratificación de Riesgo según Score MASCC (Multinational Association for Supportive Care)', s: 'Evalúa severidad de síntomas, comorbilidades, hipotensión y estado clínico ambulatorio', ll: 'MASCC ≥ 21 Puntos (Bajo Riesgo)', rl: 'MASCC < 21 Puntos (Alto Riesgo)',
        left: { t: 'Candidato a Terapia Oral Ambulatoria', s: 'Ciprofloxacino 500-750 mg c/12h + Amoxicilina/Clavulánico 875/125 mg c/8h VO · Vigilancia en 24h', type: 'acc' },
        right: { t: 'Hospitalización Inmediata en UPC/Aislamiento', s: 'MONOTERAPIA ENDOVENOSA ANTIPSEUDOMÓNICA EN < 60 MINUTOS: Cefepime 2 g c/8h O Piperacilina/Tazobactam 4.5 g c/6h', type: 'warn' },
        ll: 'bajo riesgo (mascc ≥21)', rl: 'alto riesgo (mascc <21)' },
      { t: '¡REGLA DE LA HORA DE ORO (GOLDEN HOUR)!', s: 'Hemocultivos x 2 frascos de inmediato -> Iniciar antibiótico EV en < 60 minutos · ¡NUNCA retrasar antibióticos por exámenes!', type: 'crit', al: 'hora de oro', from: 'right' }
    ]),
    contexto: 'La Neutropenia Febril es la emergencia infecciosa y oncológica más frecuente y potencialmente letal en pacientes sometidos a quimioterapia citotóxica. El EUNACOM evalúa con prioridad absoluta: 1) La definición exacta de fiebre (temperatura axilar o timpánica única ≥ 38.3 °C o ≥ 38.0 °C sostenida por más de 1 hora) y de neutropenia (Recuento Absoluto de Neutrófilos [RAN] < 500/uL); 2) La "Hora de Oro": el inicio empírico del antibiótico antipseudomónico endovenoso debe ocurrir en menos de 60 minutos desde la llegada al hospital, sin demorarse esperando radiografías ni traslados; 3) El score MASCC para distinguir bajo riesgo de alto riesgo; y 4) El esquema antibiótico empírico de elección (Cefepime o Piperacilina/Tazobactam en monoterapia).',
    contentSections: [
      {
        subhead: '1. Definiciones Operativas Estrictas de Neutropenia y Fiebre',
        paragraphs: [
          'La Neutropenia Febril se define por la coexistencia simultánea de un criterio térmico y un criterio hematológico en un paciente con antecedente de quimioterapia o inmunosupresión: 1) Criterio de Fiebre: una toma de temperatura oral, axilar o timpánica única ≥ 38.3 °C, o una temperatura ≥ 38.0 °C sostenida o registrada en dos ocasiones separadas por un intervalo de 1 hora; y 2) Criterio de Neutropenia: un Recuento Absoluto de Neutrófilos (RAN = Leucocitos totales × [% baciliformes + % segmentados] / 100) menor a 500 células/uL, o un RAN menor a 1.000 células/uL pero con una caída predecible a < 500/uL en las siguientes 24 a 48 horas (fase de nadir de la quimioterapia, habitualmente entre los días 7 y 14 posciclo).',
          'Si el RAN es < 100/uL se clasifica como Neutropenia Profunda, estado en el cual el riesgo de shock séptico bacteriano por translocación intestinal y bacteriemia por bacilos gramnegativos se incrementa de forma exponencial (mortalidad del 10% por cada hora de retraso antibiótico).'
        ]
      },
      {
        subhead: '2. Microbiología y Ausencia Paradójica de Signos Inflamatorios',
        paragraphs: [
          'Debido a la ausencia casi total de neutrófilos funcionantes, los pacientes con neutropenia febril son incapaces de montar una respuesta inflamatoria local cardinal: NO forman pus, NO presentan eritema ni edema evidente en celulitis, y NO presentan condensaciones radiológicas con infiltrados en neumonías precoces. Con frecuencia, la FIEBRE ES EL ÚNICO SIGNO de una infección bacteriana masiva fulminante.',
          'La fuente microbiológica principal (> 75%) es la microbiota endógena del propio paciente que transloca a través de la mucosa oral y gastrointestinal ulcerada por los fármacos quimioterápicos (mucositis). Los patógenos más letales son los Bacilos Gramnegativos entéricos y ambientales: Pseudomonas aeruginosa, Escherichia coli, Klebsiella pneumoniae y Enterobacter spp. Los cocos grampositivos (Staphylococcus epidermidis, Staphylococcus aureus, Streptococcus viridans) son muy comunes por la presencia de catéteres venosos centrales permanentes (CVC).'
        ]
      },
      {
        subhead: '3. Estratificación Pronóstica: El Score MASCC',
        paragraphs: [
          'La Sociedad Multinacional de Cuidados de Soporte en Cáncer (MASCC) validó un índice numérico para identificar al subgrupo de pacientes de bajo riesgo que podrían manejarse ambulatoriamente: 1) Síntomas leves o nulos atribuibles a la infección (5 pts) o moderados (3 pts); 2) Ausencia de hipotensión arterial (PAS > 90 mmHg: 5 pts); 3) Ausencia de EPOC descompensado (4 pts); 4) Tumor sólido o neoplasia hematológica sin infección micótica previa (4 pts); 5) Ausencia de deshidratación que requiera fluidos parenterales (3 pts); 6) Estado ambulatorio al inicio de la fiebre (3 pts); y 7) Edad menor de 60 años (2 pts).',
          'Un puntaje MASCC ≥ 21 puntos define Bajo Riesgo de complicaciones médicas graves (< 5% de complicaciones, mortalidad < 1%). Estos pacientes seleccionados (estables hemodinámicamente, sin falla orgánica, con soporte familiar y acceso a reconsulta en < 1 hora) pueden recibir tratamiento oral ambulatorio con Ciprofloxacino (500-750 mg cada 12 h) más Amoxicilina/Ácido Clavulánico (875/125 mg cada 8 h). Por el contrario, un puntaje MASCC < 21 puntos define Alto Riesgo e impone hospitalización obligatoria en UPC o aislamiento protector con antibióticos endovenosos de amplio espectro.'
        ]
      },
      {
        subhead: '4. El Manejo de Urgencia en la "Hora de Oro" (Golden Hour)',
        paragraphs: [
          'La regla de oro de supervivencia clínica es: TODO PACIENTE CON NEUTROPENIA FEBRIL DE ALTO RIESGO DEBE RECIBIR LA PRIMERA DOSIS DE ANTIBIÓTICO ENDOVENOSO EN MENOS DE 60 MINUTOS DESDE SU INGRESO AL SERVICIO DE URGENCIAS. Los pasos secuenciales son: 1) Anamnesis dirigida (último ciclo de quimio, catéteres, foco respiratorio/urinario); 2) Examen físico rápido y prolijo de sitios ocultos (cavidad oral, orofaringe, sitio de inserción del CVC, región perianal ¡ADVERTENCIA: ESTÁ ESTRICTAMENTE PROHIBIDO REALIZAR TACTO RECTAL O COLOCAR TERMÓMETROS RECTALES por riesgo de inducir bacteriemia fatal por microtrauma!); 3) Toma de dos sets de hemocultivos periféricos (y a través de cada lumen del CVC); y 4) Inicio inmediato del antibiótico EV.',
          'Esquema antibiótico empírico de elección: MONOTERAPIA ANTIPSEUDOMÓNICA ENDOVENOSA. Las guías IDSA y chilenas recomiendan como primera opción: Cefepime 2 g cada 8 horas EV en infusión extendida, o Piperacilina/Tazobactam 4.5 g cada 6 horas EV, o Meropenem 1 g cada 8 horas EV (si hay sospecha de BLEE o shock séptico). Ya no se recomienda asociar rutinariamente aminoglucósidos debido a nefrotoxicidad sin beneficio en sobrevida.'
        ]
      },
      {
        subhead: '5. Cuándo Agregar Vancomicina y Cuándo Escalar a Antifúngicos',
        paragraphs: [
          'La Vancomicina (15-20 mg/kg c/8-12h) NO DEBE INCLUIRSE EN EL ESQUEMA EMPÍRICO INICIAL DE RUTINA, salvo indicaciones precisas: 1) Inestabilidad hemodinámica franca (shock séptico); 2) Infección evidente relacionada a catéter venoso central (flebitis, eritema en el trayecto tunelizado); 3) Colonización conocida por Staphylococcus aureus resistente a meticilina (SAMR); 4) Mucositis grave grado 3-4 tratada previamente con profilaxis con fluoroquinolonas; y 5) Neumonía documentada clínica o radiológicamente.',
          'Si el paciente persiste febril tras 4 a 7 días de cobertura antibacteriana de amplio espectro adecuada y los cultivos son negativos, la conducta mandatoria es buscar infección fúngica invasiva oculta (Aspergillus galactomanano en suero, TC de tórax de alta resolución buscando nódulos con signo del halo) e iniciar tratamiento antifúngico empírico con Voriconazol, Caspofungina o Anfotericina B liposomal.'
        ]
      }
    ],
    table: {
      title: 'Estratificación y Manejo de la Neutropenia Febril según Score MASCC',
      headers: ['Categoría de Riesgo', 'Puntaje MASCC', 'Lugar de Atención', 'Esquema Antibiótico Inicial de Elección'],
      rows: [
        ['Bajo Riesgo', '≥ 21 Puntos (sin factores de alarma)', 'Manejo ambulatorio con recontrol estrecho en 24 h', 'Ciprofloxacino 500-750 mg c/12h VO + Amoxicilina/Clavulánico 875 mg c/8h VO'],
        ['Alto Riesgo', '< 21 Puntos (o neutropenia prolongada)', 'Hospitalización obligatoria en aislamiento protector / UPC', 'Monoterapia EV: Cefepime 2 g c/8h EV O Piperacilina/Tazobactam 4.5 g c/6h EV'],
        ['Alto Riesgo + Shock', '< 21 Puntos con inestabilidad hemodinámica', 'Unidad de Cuidados Intensivos (UCI)', 'Meropenem 1 g c/8h EV + Vancomicina 15-20 mg/kg c/12h EV + Amikacina'],
        ['Infección Catéter CVC', 'Cualquier score con eritema en túnel', 'Hospitalización en sala / aislamiento', 'Cefepime o Pip/Tazo + Vancomicina EV; evaluar retiro del catéter si túnel infectado']
      ]
    },
    severityTable: {
      title: 'Indicaciones Específicas para Agregar Vancomicina al Esquema Empírico Inicial',
      headers: ['Criterio de Indicación', 'Hallazgo Clínico o Microbiológico', 'Justificación Terapéutica', 'Conducta si Cultivos son Negativos'],
      rows: [
        ['Inestabilidad Hemodinámica', 'Hipotensión arterial (PAS < 90 mmHg) o signos de hipoperfusión', 'Cubrir estafilococos y estreptococos causantes de shock séptico', 'Suspender a las 48-72 h si no hay aislamiento de Gram (+)'],
        ['Infección del CVC', 'Eritema, induración o secreción purulenta en orificio o trayecto', 'Alta prevalencia de SAMR y S. epidermidis formadores de biofilm', 'Retirar catéter si bacteriemia por S. aureus o Candida spp.'],
        ['Colonización por SAMR', 'Hisopado nasal o rectal positivo previo para SAMR', 'Riesgo inminente de neumonía o bacteriemia invasiva por SAMR', 'Mantener hasta completar tratamiento dirigido según antibiograma'],
        ['Mucositis Grave Grado 3-4', 'Ulceraciones orales confluentes que impiden deglución', 'Riesgo de bacteriemia por Streptococcus viridans resistente', 'Reevaluar a las 48 horas según evolución de mucositis']
      ]
    },
    treatmentTable: {
      title: 'Cronograma de Escalamiento Antibiótico en Paciente que Persiste Febril',
      headers: ['Tiempo Evolutivo', 'Estado Clínico', 'Intervención Diagnóstica y Terapéutica', 'Objetivo Primario'],
      rows: [
        ['Hora 0 (Ingreso)', 'Fiebre + RAN < 500 /uL', 'Hemocultivos x 2 + Cefepime o Pip/Tazo EV en < 60 min', 'Esterilizar bacteriemia por bacilos gramnegativos'],
        ['48 a 72 horas', 'Persiste febril pero hemodinámicamente estable', 'Mantener antibióticos; revisar cultivos; NO cambiar a ciegas', 'La mediana de fiebre en neutropenia es de 4 a 5 días'],
        ['48 a 72 horas', 'Deterioro clínico o inestabilidad hemodinámica', 'Escalar a Meropenem + Vancomicina; buscar nuevos focos', 'Cubrir bacilos productores de BLEE/AmpC y cocos resistentes'],
        ['Día 4 a 7 de fiebre', 'Fiebre persistente refractaria a antibióticos plenos', 'TC tórax AR (halo) + Galactomanano + Iniciar Caspofungina/Voriconazol', 'Tratar aspergilosis o candidiasis invasiva oportunista']
      ]
    },
    vignette: {
      title: 'Caso Clínico: Neutropenia Febril tras Ciclo de Quimioterapia en Adulto',
      text: 'Mujer de 53 años con cáncer de mama en tratamiento quimioterápico con esquema adriamicina y ciclofosfamida (último ciclo hace 10 días), consulta en urgencias por sensación febril cuantificada en 38.6 °C y calofríos intensos de 3 horas. Niega tos, disuria ni dolor abdominal. Al examen físico: PA 115/70 mmHg, FC 102 lpm, afebril al control (37.8 °C). Se observa catéter venoso central implantable sin signos de inflamación y cavidad oral con eritema leve sin úlceras. El examen perianal no muestra fisuras (el interno de turno intentó realizar tacto rectal, el cual fue suspendido). Laboratorio: Hb 9.4 g/dL, Leucocitos 800/uL con 10% de segmentados y 2% de baciliformes (RAN = 800 × 0.12 = 96 células/uL), Plaquetas 85.000/uL.',
      conducta: 'Neutropenia Febril grave de alto riesgo (temperatura > 38.3 °C con RAN 96/uL en fase de nadir posquimioterapia). Se prohíbe terminantemente realizar tacto rectal. La conducta médica inmediata inapelable es tomar dos sets de hemocultivos periféricos y por catéter e iniciar la primera dosis de monoterapia antipseudomónica endovenosa con Cefepime 2 g EV (o Piperacilina/Tazobactam 4.5 g EV) en MENOS DE 60 MINUTOS ("Hora de Oro"), hospitalizando en aislamiento protector.'
    },
    keyPoints: [
      'Neutropenia: RAN < 500/uL (o < 1.000 con caída prevista); Fiebre: T° ≥ 38.3 °C única o ≥ 38.0 °C x 1 hora.',
      'La "Hora de Oro" exige administrar el antibiótico endovenoso en menos de 60 minutos desde la llegada al hospital.',
      'El tacto rectal y los termómetros rectales están ESTRICTAMENTE CONTRAINDICADOS en el paciente neutropénico.',
      'El tratamiento de elección en neutropenia febril de alto riesgo (MASCC < 21) es monoterapia con Cefepime o Pip/Tazo EV.',
      'La vancomicina NO se indica de rutina; se reserva para shock séptico, sospecha de infección de CVC o mucositis grave.',
      'El paciente con score MASCC ≥ 21 (bajo riesgo) puede tratarse ambulatoriamente con ciprofloxacino + amoxicilina/clavulánico.',
      'Si persiste febril al 4°-7° día a pesar de antibióticos plenos, se debe buscar infección fúngica (TC tórax) e iniciar antifúngico.'
    ],
    questions: [
      {
        stem: 'Hombre de 56 años con leucemia mieloide aguda que recibió quimioterapia de inducción hace 9 días consulta en urgencias por fiebre de 38.8 °C y astenia. Al examen se constata PA 100/60 mmHg, FC 105 lpm y ausencia de focos infecciosos evidentes. El hemograma muestra leucocitos de 600/uL con 15% de neutrófilos (RAN 90/uL) y plaquetas de 35.000/uL. ¿Cuál es la conducta terapéutica más urgente que debe implementarse?',
        opciones: [
          'A) Solicitar urocultivo y radiografía de tórax, iniciando antibióticos solo si se confirma un foco infeccioso',
          'B) Tomar hemocultivos inmediatos e iniciar antibiótico endovenoso antipseudomónico en menos de 60 minutos',
          'C) Indicar tratamiento oral con ciprofloxacino y enviar a domicilio con control en 48 horas',
          'D) Transfundir inmediatamente 2 aféresis de plaquetas y observar la curva febril',
          'E) Realizar tacto rectal minucioso para descartar un absceso perianal oculto'
        ],
        correcta: 'B',
        explicacion: 'El paciente presenta una Neutropenia Febril de alto riesgo (RAN < 500/uL y T° > 38.3 °C). La regla de oro internacional establece que el tratamiento antibiótico empírico de amplio espectro por vía endovenosa (ej. Cefepime o Piperacilina/Tazobactam) debe administrarse en menos de 60 minutos ("Hora de Oro") previa toma rápida de hemocultivos. Cada hora de demora incrementa sustancialmente la mortalidad por shock séptico. El tacto rectal está prohibido por riesgo de bacteriemia por translocación. Perla. En neutropenia febril, hemocultivos y antibióticos antipseudomónicos EV en menos de 60 minutos.',
        recTag: 'EUNACOM 2017 · Q#03'
      },
      {
        stem: '¿Cuál de los siguientes procedimientos diagnósticos o terapéuticos se encuentra FORMALMENTE CONTRAINDICADO en un paciente oncológico cursando con neutropenia severa debido al riesgo de inducir bacteriemia fatal por translocación?',
        opciones: [
          'A) Punción venosa periférica para hemocultivos',
          'B) Toma de muestra para urocultivo por chorro medio',
          'C) Realización de tacto rectal o colocación de supositorios/termómetros rectales',
          'D) Radiografía de tórax posteroanterior y lateral',
          'E) Auscultación pulmonar y examen de la cavidad bucal'
        ],
        correcta: 'C',
        explicacion: 'En pacientes neutropénicos la mucosa anorrectal se encuentra friable y desprovista de defensas celulares locales. La realización de tactos rectales, colocación de termómetros rectales, supositorios o enemas puede provocar microdesgarros en la mucosa que sirven de puerta de entrada masiva para bacterias entéricas hacia el torrente sanguíneo, desencadenando bacteriemias fulminantes por bacilos gramnegativos y shock séptico. Perla. En neutropenia severa, el tacto rectal está formalmente contraindicado.',
        recTag: 'EUNACOM 2019 · Q#28'
      },
      {
        stem: '¿Cuál es el antibiótico de primera línea en monoterapia más recomendado para el tratamiento empírico inicial de la neutropenia febril de alto riesgo en un paciente hospitalizado sin inestabilidad hemodinámica ni foco de catéter?',
        opciones: [
          'A) Ceftriaxona endovenosa',
          'B) Cefepime endovenoso',
          'C) Vancomicina endovenosa en monoterapia',
          'D) Ciprofloxacino por vía oral',
          'E) Ampicilina/Sulbactam endovenoso'
        ],
        correcta: 'B',
        explicacion: 'Las guías clínicas internacionales de la IDSA y las recomendaciones nacionales establecen como monoterapia de primera elección en neutropenia febril de alto riesgo a los betalactámicos con potente actividad antipseudomónica: Cefepime (cefalosporina de 4ª generación, 2 g c/8h EV) o Piperacilina/Tazobactam. La ceftriaxona no tiene cobertura contra Pseudomonas aeruginosa, la vancomicina sola no cubre gramnegativos y el ciprofloxacino oral se reserva para bajo riesgo. Perla. La monoterapia empírica de elección en neutropenia febril es Cefepime o Piperacilina/Tazobactam.',
        recTag: 'EUNACOM 2021 · Q#12'
      },
      {
        stem: 'Un paciente con neutropenia febril de alto riesgo se encuentra en su cuarto día de tratamiento antibiótico endovenoso con piperacilina/tazobactam. Los hemocultivos iniciales resultaron negativos, pero el paciente persiste con fiebre de 38.5 °C sin foco clínico evidente y hemodinámicamente estable. ¿Cuál es la conducta diagnóstica y terapéutica más adecuada en este momento?',
        opciones: [
          'A) Suspender todos los antibióticos y observar la evolución espontánea',
          'B) Cambiar piperacilina/tazobactam por amoxicilina oral',
          'C) Solicitar TC de tórax de alta resolución, galactomanano sérico y evaluar el inicio de tratamiento antifúngico empírico',
          'D) Agregar inmediatamente gentamicina y clindamicina al esquema',
          'E) Indicar alta médica por tratarse de fiebre atribuible exclusivamente a la quimioterapia'
        ],
        correcta: 'C',
        explicacion: 'En pacientes con neutropenia febril persistente tras 4 a 7 días de cobertura antibacteriana de amplio espectro adecuada y con cultivos negativos, la principal causa de fiebre refractaria es una infección fúngica invasiva oculta (fundamentalmente Aspergilosis pulmonar invasiva o Candidiasis diseminada). La conducta correcta consiste en realizar una TC de tórax de alta resolución para buscar nódulos con signo del halo, dosificar galactomanano sérico e iniciar terapia antifúngica empírica (ej. caspofungina, voriconazol o anfotericina B liposomal). Perla. Fiebre persistente al 4°-7° día de antibióticos en neutropénico = sospechar infección fúngica e iniciar antifúngico.',
        recTag: 'EUNACOM 2024 · Q#27'
      }
    ]
  },
  {
    id: 'hem-22',
    classId: 'hem-22',
    tier: 2,
    blockNum: 5,
    blockName: 'Urgencias Oncohematológicas, Trombofilias y Medicina Transfusional',
    topicLabel: '8.22',
    title: 'Síndrome de Lisis Tumoral (Cairo-Bishop), Hipercalcemia de Neoplasia y Compresión Medular',
    perfilCode: '1.08.2.005',
    dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'No GES directo · Emergencia Oncológica Crítica en Unidad de Paciente Crítico',
    reconstrucciones: 'EUNACOM Diciembre 2018 (Q#42) · EUNACOM Julio 2021 (Q#19)',
    frecuencia: 'Alta · Criterios analíticos de Cairo-Bishop, profilaxis con hidratación y rasburicasa/alopurinol',
    svg: null, algoTitle: 'Algoritmo de Manejo del Síndrome de Lisis Tumoral (SLT)',
    diagram: flow('Algoritmo de Síndrome de Lisis Tumoral (Criterios Cairo-Bishop)', [
      { t: 'Neoplasia de Alta Carga Tumoral (Linfoma de Burkitt, LLA, leucemia hiperleucocitaria) + Inicio de Quimio', s: 'Riesgo inminente de destrucción celular masiva con vertido de electrolitos intracelulares a la sangre' },
      { k: 'split', q: 'Trastornos Metabólicos Cardinales (Criterios de Laboratorio de Cairo-Bishop)', s: 'Deben cumplirse al menos 2 criterios entre las 24 h previas y hasta 7 días posteriores al inicio de quimioterapia', ll: 'Tres Electrolitos que SUBEN (K, P, Ácido Úrico)', rl: 'Un Electrolito que BAJA (Hipocalcemia Secundaria)',
        left: { t: 'Hiperkalemia + Hiperfosfemia + Hiperuricemia', s: 'K > 6.0 mEq/L (arritmias letales) · Fósforo > 4.5 mg/dL · Ácido Úrico > 8.0 mg/dL (nefropatía úrica)', type: 'acc' },
        right: { t: 'Hipocalcemia Sintomática Secundaria', s: 'Calcio sérico < 7.0 mg/dL (producto de la quelación por el exceso de fósforo: fosfato de calcio tisular)', type: 'warn' },
        ll: 'tres que suben', rl: 'uno que baja' },
      { t: 'Prevención y Manejo Farmacológico Obligado', s: 'Hiperhidratación EV agresiva (2-3 L/m²/día) + Rasburicasa (urato oxidasa recombinante) O Alopurinol', type: 'crit', al: 'terapia de rescate', from: 'left' }
    ]),
    contexto: 'Las urgencias oncohematológicas agudas demandan intervenciones médicas inmediatas en las primeras horas para evitar la muerte del paciente. El EUNACOM evalúa con alta frecuencia: 1) El Síndrome de Lisis Tumoral (SLT), caracterizado por la tríada de hiperuricemia, hiperpotasemia e hiperfosfemia con hipocalcemia secundaria según los criterios de Cairo-Bishop, donde la hiperhidratación y la Rasburicasa (urato oxidasa) o Alopurinol son prioritarios; 2) La Hipercalcemia Maligna (mediada por PTHrP o metástasis osteolíticas), tratada con suero fisiológico abundante más bifosfonatos endovenosos (ácido zoledrónico); y 3) El Síndrome de Compresión Medular Neoplásica, donde los corticoides endovenosos a altas dosis (dexametasona) deben iniciarse de inmediato ante sospecha antes de la resonancia magnética.',
    contentSections: [
      {
        subhead: '1. Síndrome de Lisis Tumoral (SLT): Fisiopatología y Criterios de Cairo-Bishop',
        paragraphs: [
          'El Síndrome de Lisis Tumoral (SLT) es una emergencia oncológica potencialmente letal provocada por la destrucción masiva, súbita y coordinada de billones de células neoplásicas malignas —ya sea de forma espontánea o, con mayor frecuencia, dentro de las 12 a 72 horas posteriores al inicio de quimioterapia citotóxica o inmunoterapia—. Ocurre típicamente en neoplasias hematológicas de rápido recambio celular y gran masa tumoral, como el Linfoma de Burkitt, la Leucemia Linfoblástica Aguda (LLA) y leucemias con hiperleucocitosis (> 100.000/uL).',
          'Al lisarse los blastos vierten su contenido intracelular al torrente sanguíneo, originando cuatro alteraciones metabólicas patognomónicas definidas por los Criterios de Cairo-Bishop (se requieren al menos 2 de las 4 en las 24 h previas o 7 días posteriores al inicio de quimioterapia): 1) Hiperuricemia (ácido úrico sérico ≥ 8.0 mg/dL), por catabolismo masivo de ácidos nucleicos purínicos; 2) Hiperpotasemia (potasio sérico ≥ 6.0 mEq/L), por vaciamiento del catión intracelular más abundante, con riesgo de arritmias ventriculares fulminantes y paro cardíaco; 3) Hiperfosfemia (fósforo sérico ≥ 4.5 mg/dL en adultos o ≥ 6.5 mg/dL en niños), cuatro veces mayor en células leucémicas que en células normales; y 4) Hipocalcemia secundaria (calcio sérico corregido ≤ 7.0 mg/dL), producida porque el exceso de fósforo precipita con el calcio formando sales insolubles de fosfato cálcico que se depositan en los túbulos renales y en el miocardio.',
          'El SLT Clínico se diagnostica cuando a los criterios de laboratorio se suma al menos una manifestación clínica grave: Insuficiencia renal aguda (creatinina 1.5 veces el basal), Arritmias cardíacas letales o Convulsiones/tetania.'
        ]
      },
      {
        subhead: '2. Prevención y Tratamiento Específico: Rasburicasa vs Alopurinol',
        paragraphs: [
          'La prevención es el pilar más efectivo: 1) Hiperhidratación endovenosa vigorosa con solución fisiológica al 0.9% (2.5 a 3.0 L/m²/día o 200 mL/h) iniciada 24 a 48 horas antes de la quimioterapia para asegurar una diuresis copiosa > 80 a 100 mL/m²/hora, optimizando el aclaramiento renal de ácido úrico y fosfato; y 2) Fármacos hipouricemiantes específicos.',
          'El Alopurinol (300 mg/día VO) es un inhibidor competitivo de la xantina oxidasa que bloquea la síntesis de nuevo ácido úrico; sin embargo, no degrada el ácido úrico ya acumulado y favorece el acúmulo de xantina (que también precipita en túbulos), por lo que solo se indica en pacientes de bajo a intermedio riesgo.',
          'En pacientes de ALTO RIESGO (Burkitt, LLA con glóbulos blancos > 100.000/uL o hiperuricemia basal previa), el fármaco de elección indiscutible es la Rasburicasa (urato oxidasa recombinante, 0.2 mg/kg EV en infusión única de 30 minutos). La rasburicasa cataliza la conversión enzimática irreversible del ácido úrico insoluble en Alantoína, compuesto cinco a diez veces más hidrosoluble que se excreta pasivamente por orina sin precipitar en los túbulos renales, normalizando el ácido úrico en menos de 4 horas. (¡Advertencia: contraindicada formalmente en déficit de G6PD por riesgo de metahemoglobinemia y crisis hemolítica severa!). Ya no se recomienda alcalinizar la orina con bicarbonato porque precipita fosfato cálcico intratubular.'
        ]
      },
      {
        subhead: '3. Hipercalcemia de Neoplasia y Síndrome de Compresión Medular Aguda',
        paragraphs: [
          'La Hipercalcemia Maligna es la urgencia metabólica más común en cáncer avanzado (cáncer de mama, pulmón, riñón y mieloma múltiple). Puede originarse por secreción tumoral de péptido relacionado con la paratohormona (PTHrP) o por metástasis líticas osteolíticas. Su clínica comprende deshidratación poliúrica, constipación, confusión mental y acortamiento del intervalo QT en el ECG. El manejo de urgencia prioritario es la expansión vigorosa con Suero Fisiológico al 0.9% (3 a 4 litros en 24 horas) para inducir calciuresis forzada, seguido de la administración de Bifosfonatos Endovenosos potentes (Ácido Zoledrónico 4 mg EV en infusión de 15 minutos), cuyo efecto antirreabsortivo óseo se consolida a las 48-72 horas.',
          'El Síndrome de Compresión Medular Neoplásica es una emergencia neurológica mayor provocada por el colapso vertebral metastásico o crecimiento epidural que comprime la médula espinal. Cursa con dolor raquídeo localizado progresivo nocturno, seguido de debilidad motora en extremidades inferiores (paraparesia espástica), nivel sensitivo en tronco y disfunción esfinteriana tardía (retención urinaria). Conducta inmediata obligada en el EUNACOM: ante la simple sospecha clínica, debe administrarse DE INMEDIATO Dexametasona endovenosa a altas dosis (16 a 24 mg EV en bolo inicial) para reducir el edema perimedular vasogénico y salvar la función neurológica, coordinando en paralelo la Resonancia Magnética de columna completa y la radioterapia descompresiva urgente.'
        ]
      }
    ],
    table: {
      title: 'Criterios de Laboratorio de Cairo-Bishop para Síndrome de Lisis Tumoral',
      headers: ['Parámetro Metabólico', 'Punto de Corte Diagnóstico Cairo-Bishop', 'Cambio Respecto al Basal', 'Riesgo Clínico Principal'],
      rows: [
        ['Ácido Úrico Plasmático', '≥ 8.0 mg/dL (≥ 476 umol/L)', 'Aumento del 25% sobre el basal', 'Nefropatía aguda por cristales de urato en túbulos'],
        ['Potasio Sérico', '≥ 6.0 mEq/L (≥ 6.0 mmol/L)', 'Aumento del 25% sobre el basal', 'Arritmias ventriculares malignas, FV y paro en diástole'],
        ['Fósforo Sérico', '≥ 4.5 mg/dL (≥ 1.45 mmol/L en adultos)', 'Aumento del 25% sobre el basal', 'Precipitación de sales de fosfato cálcico e injuria renal'],
        ['Calcio Sérico Corregido', '≤ 7.0 mg/dL (≤ 1.75 mmol/L)', 'Disminución del 25% sobre el basal', 'Tetania, signo de Chvostek/Trousseau, convulsiones y arritmias']
      ]
    },
    vignette: {
      title: 'Caso Clínico: Emergencia Metabólica tras Inducción de Linfoma de Burkitt',
      text: 'Varón de 21 años con diagnóstico reciente de Linfoma de Burkitt abdominal con masa retroperitoneal voluminosa de 12 cm, inicia su primer ciclo de quimioterapia intensiva. A las 24 horas presenta oliguria brusca, náuseas y parestesias peribucales. En el ECG se observan ondas T picudas y simétricas y ensanchamiento del QRS. Laboratorio de urgencia: Creatinina 3.1 mg/dL (basal 0.9), Potasio 6.8 mEq/L, Ácido Úrico 14.5 mg/dL, Fósforo 7.8 mg/dL, Calcio sérico 6.2 mg/dL.',
      conducta: 'Síndrome de Lisis Tumoral (SLT) clínico agudo severo con hiperkalemia potencialmente mortal, hiperuricemia masiva, hiperfosfemia e injuria renal aguda. Manejo de emergencia inmediata: 1) Proteger el miocardio con Gluconato de Calcio al 10% EV lento para estabilizar la membrana cardíaca; 2) Medidas hipokalemiantes de acción rápida (insulina cristalina más glucosa hipertónica y salbutamol nebulizado); 3) Infusión inmediata de Rasburicasa 0.2 mg/kg EV para degradar enzimáticamente el ácido úrico a alantoína hidrosoluble; 4) Hiperhidratación vigorosa con solución salina isotónica; y 5) Coordinar hemodiálisis de urgencia si persiste anuria o hiperkalemia refractaria.'
    },
    keyPoints: [
      'Criterios Cairo-Bishop: hiperuricemia (≥8), hiperkalemia (≥6), hiperfosfemia (≥4.5) e hipocalcemia (≤7).',
      'La profilaxis de elección en alto riesgo (Burkitt/leucemias) es la hidratación agresiva más Rasburicasa (urato oxidasa).',
      'La Rasburicasa convierte el ácido úrico en alantoína hidrosoluble; contraindicada en pacientes con déficit de G6PD.',
      'El alopurinol bloquea la síntesis de nuevo ácido úrico pero no degrada el ya formado; útil en riesgo bajo a intermedio.',
      'La hipercalcemia maligna se trata con hidratación endovenosa abundante con solución salina seguida de Ácido Zoledrónico EV.',
      'En la sospecha de Compresión Medular Neoplásica se debe iniciar Dexametasona EV a dosis altas de inmediato antes de la RM.'
    ],
    questions: [
      {
        stem: 'Un paciente de 18 años con Linfoma de Burkitt inicia quimioterapia citotóxica. A las 36 horas se constata creatinina de 2.8 mg/dL, potasio de 6.4 mEq/L, ácido úrico de 13.0 mg/dL, fósforo de 6.5 mg/dL y calcio de 6.4 mg/dL. ¿Cuál de los siguientes fármacos posee la capacidad de degradar enzimáticamente el ácido úrico ya acumulado convirtiéndolo en alantoína soluble?',
        opciones: [
          'A) Alopurinol',
          'B) Febuxostat',
          'C) Rasburicasa',
          'D) Probenecid',
          'E) Colquicina'
        ],
        correcta: 'C',
        explicacion: 'La Rasburicasa es una urato oxidasa recombinante que cataliza la conversión directa e irreversible del ácido úrico ya formado en alantoína, un metabolito cinco a diez veces más soluble en agua que se elimina rápidamente por vía renal, logrando normalizar los niveles de ácido úrico en pocas horas en el síndrome de lisis tumoral. El alopurinol y el febuxostat solo inhiben la síntesis de nuevo ácido úrico al bloquear la xantina oxidasa, pero no destruyen el ácido úrico preexistente. Perla. La rasburicasa degrada el ácido úrico a alantoína hidrosoluble en el síndrome de lisis tumoral.',
        recTag: 'EUNACOM 2018 · Q#42'
      },
      {
        stem: 'Hombre de 64 años con antecedentes de cáncer de próstata con metástasis óseas consulta por dolor lumbar progresivo intenso de predominio nocturno y debilidad en ambas piernas que le dificulta ponerse de pie desde hace 24 horas. Al examen se constata paresia bilateral de extremidades inferiores con reflejos osteotendinosos rotulianos aumentados e hipoestesia desde el ombligo hacia abajo. ¿Cuál es la conducta terapéutica inicial más urgente e inmediata?',
        opciones: [
          'A) Solicitar resonancia magnética de columna total y esperar su resultado antes de administrar medicamentos',
          'B) Iniciar inmediatamente dexametasona endovenosa a dosis altas (16 a 24 mg en bolo)',
          'C) Indicar tratamiento con bifosfonatos orales y paracetamol',
          'D) Realizar punción lumbar diagnóstica para citología de líquido cefalorraquídeo',
          'E) Administrar ketorolaco intramuscular y citar a policlínico de oncología en 7 días'
        ],
        correcta: 'B',
        explicacion: 'El paciente presenta signos inequívocos de Síndrome de Compresión Medular Neoplásica (paraparesia espástica con nivel sensitivo en T10 y dolor vertebral). Es una emergencia oncológica y neurológica absoluta donde cada hora de retraso condiciona la paraplejía irreversible. La conducta médica inmediata inapelable es la administración urgente de Dexametasona endovenosa a dosis altas (16 a 24 mg EV) para disminuir el edema perimedular vasogénico mientras se traslada a la Resonancia Magnética de urgencia y descompresión. Perla. Ante la sospecha clínica de compresión medular neoplásica, administrar dexametasona EV a dosis altas de inmediato.',
        recTag: 'EUNACOM 2021 · Q#19'
      }
    ]
  },
  {
    id: 'hem-23',
    classId: 'hem-23',
    tier: 2,
    blockNum: 5,
    blockName: 'Urgencias Oncohematológicas, Trombofilias y Medicina Transfusional',
    topicLabel: '8.23',
    title: 'Trombofilias Hereditarias (Factor V Leiden, Protrombina G20210A) y SAF: Cuándo Estudiar y Manejo',
    perfilCode: '1.08.1.019',
    dx: 'Sospecha', tx: 'Inicial', seg: 'Derivar',
    ges: 'No GES directo · Estudio Especializado en Hematología',
    reconstrucciones: 'EUNACOM Julio 2018 (Q#28) · EUNACOM Enero 2023 (Q#14)',
    frecuencia: 'Media-Alta · Trombofilia más frecuente en caucásicos (Factor V Leiden), criterios SAF y anticoagulación',
    svg: null, algoTitle: 'Algoritmo de Estudio y Manejo de Trombofilias y SAF',
    diagram: flow('Algoritmo de Estudio de Trombofilias y Síndrome Antifosfolípido', [
      { t: 'Paciente Joven (< 50 años) con Tromboembolismo Venoso (TEV) No Provocado O Recurrente O en Sitio Atípico', s: 'Sitios atípicos: Venas mesentéricas, porta, suprahepáticas (Budd-Chiari) o cerebrales · Evaluar estudio de trombofilia' },
      { k: 'split', q: 'Momento Óptimo para el Estudio de Trombofilia en Laboratorio', s: '¡REGLA CRÍTICA DE LABORATORIO!: El estudio NO debe solicitarse durante el evento agudo ni bajo anticoagulación plena', ll: 'Trombofilias Hereditarias (Genéticas)', rl: 'Síndrome Antifosfolípido (SAF Adquirido)',
        left: { t: 'Factor V Leiden (Resistencia Proteína C) más común', s: 'Mutación Protrombina G20210A · Déficit de Antitrombina, Proteína C y Proteína S · Estudio genético por PCR', type: 'acc' },
        right: { t: 'Criterios de Sydney (Trombosis + Morbilidad Obstétrica)', s: 'Laboratorio positivo persistente (>12 sem): Anticoagulante Lúpico, Anti-Cardiolipina IgG/IgM, Anti-Beta2GP1', type: 'warn' },
        ll: 'trombofilias genéticas', rl: 'saf autoinmune' },
      { t: 'Manejo Anticoagulante Diferencial de Alto Rendimiento', s: 'Trombofilias genéticas: anticoagulación estándar con DOACs (o cumarínicos) · SAF trombótico: ¡Acenocumarol/Warfarina mandatorio, DOACs contraindicados!', type: 'crit', al: 'terapia anticoagulante', from: 'right' }
    ]),
    contexto: 'Las trombofilias son estados de hipercoagulabilidad congénitos o adquiridos que predisponen al desarrollo prematuro y recurrente de tromboembolismo venoso (trombosis venosa profunda y tromboembolismo pulmonar). El EUNACOM evalúa: 1) La trombofilia hereditaria más común en la población caucásica y chilena: la Resistencia a la Proteína C Activada debida a la mutación del Factor V Leiden; 2) Cuándo realizar el estudio (pacientes jóvenes < 50 años, trombosis recurrentes, sitios anatómicos inusuales o historia familiar de primer grado); 3) El Síndrome Antifosfolípido (SAF), caracterizado por trombosis vasculares arteriales/venosas y pérdidas gestacionales recurrentes con anticoagulante lúpico positivo; y 4) Que en el SAF trombótico el tratamiento de elección son los cumarínicos (acenocumarol), estando contraindicados los DOACs.',
    contentSections: [
      {
        subhead: '1. Trombofilias Hereditarias: Factor V Leiden y Mutación de Protrombina',
        paragraphs: [
          'Las trombofilias hereditarias se clasifican en: 1) Trastornos por ganancia de función (las más frecuentes): Mutación del Factor V Leiden (mutación puntual G1691A que sustituye arginina por glutamina en el codón 506, eliminando el sitio de clivaje donde la proteína C activada degrada al factor V, originando Resistencia a la Proteína C Activada en el 90-95% de casos; confiere un riesgo relativo de TEV 4-8 veces mayor en heterocigotos) y la Mutación G20210A del gen de la Protrombina (aumenta la síntesis hepática y los niveles plasmáticos de protrombina); y 2) Trastornos por pérdida de función de inhibidores naturales (más raras pero con mayor potencial trombogénico): Deficiencia de Antitrombina III (la más trombogénica de todas, con resistencia a heparina), Deficiencia de Proteína C y Deficiencia de Proteína S.',
          'Peligro farmacológico: en pacientes con déficit congénito de proteína C o S que inician acenocumarol a dosis altas sin puente con heparina, la rápida caída de los niveles de proteína C (vida media corta de 6 horas) genera un estado protrombótico paradójico transitorio con trombosis microvascular cutánea masiva conocida como Necrosis Cutánea por Cumarínicos.'
        ]
      },
      {
        subhead: '2. Síndrome Antifosfolípido (SAF): Criterios Clínicos y de Laboratorio',
        paragraphs: [
          'El Síndrome Antifosfolípido es la trombofilia adquirida de origen autoinmune más frecuente y peligrosa. Se diagnostica mediante los Criterios de Sydney, los cuales exigen al menos un criterio clínico más al menos un criterio de laboratorio:',
          'A) Criterios Clínicos: 1) Trombosis vascular documentada objetivamente: uno o más episodios de trombosis arterial (ACV isquémico en pacientes jóvenes), venosa (TVP/TEP) o de pequeños vasos en cualquier tejido; o 2) Morbilidad obstétrica específica: tres o más abortos espontáneos consecutivos e inexplicados antes de la semana 10 de gestación, una o más muertes fetales intrauterinas inexplicadas de un feto morfológicamente normal de ≥ 10 semanas de gestación, o uno o más partos prematuros antes de la semana 34 debidos a preeclampsia severa, eclampsia o insuficiencia placentaria grave.',
          'B) Criterios de Laboratorio (deben confirmarse en al menos 2 ocasiones separadas por un intervalo mínimo de 12 semanas para descartar positividades transitorias posinfecciosas): 1) Anticoagulante Lúpico (AL) positivo (prolonga el TTPK in vitro pero no corrige con mezcla y se normaliza al agregar exceso de fosfolípidos); 2) Anticuerpos Anti-Cardiolipina (aCL) IgG o IgM a títulos moderados o altos (> 40 GPL o MPL); o 3) Anticuerpos Anti-Beta-2-Glicoproteína-1 (anti-B2GP1) IgG o IgM a títulos elevados.'
        ]
      },
      {
        subhead: '3. Cuándo Solicitar el Estudio y Manejo Terapéutico Anticoagulante',
        paragraphs: [
          'El estudio de trombofilia NO debe solicitarse de forma indiscriminada a todos los pacientes con un evento trombótico provocado por un factor de riesgo transitorio mayor evidente (cirugía ortopédica mayor, politraumatismo, inmovilización prolongada). Está indicado en: trombosis venosa no provocada en menores de 50 años, trombosis recurrentes, trombosis en sitios atípicos (venas cerebrales, mesentéricas o suprahepáticas) o pacientes con antecedentes familiares directos de TEV precoz.',
          '¡Regla técnica de laboratorio EUNACOM!: El estudio de proteínas funcionales (proteína C, S y antitrombina) NUNCA debe realizarse durante la fase aguda del evento trombótico (se consumen en el trombo) ni mientras el paciente recibe anticoagulantes (los cumarínicos reducen proteína C y S; las heparinas reducen antitrombina). Debe diferirse hasta al menos 4 a 6 semanas tras haber suspendido la anticoagulación. El estudio genético (mutación Factor V Leiden y Protrombina por PCR) sí puede realizarse en cualquier momento.',
          'En el SAF trombótico primario o secundario a LES: el tratamiento de elección estándar es la Anticoagulación Oral con Antagonistas de la Vitamina K (Acenocumarol o Warfarina) con meta de INR entre 2.0 y 3.0 de por vida. ¡ALERTA EUNACOM!: Múltiples ensayos clínicos (ensayos TRAPS y ASTRO-APS) demostraron que los Anticoagulantes Orales Directos (DOACs: Rivaroxabán, Apixabán) son INFERIORES a los cumarínicos y aumentan de forma inaceptable el riesgo de recurrencia trombótica arterial (ACV e infarto), por lo que están FORMALMENTE CONTRAINDICADOS en pacientes con SAF de triple positividad.'
        ]
      }
    ],
    table: {
      title: 'Trombofilias Hereditarias vs Síndrome Antifosfolípido: Diagnóstico y Terapia',
      headers: ['Característica', 'Factor V Leiden (Resistencia a PCa)', 'Deficiencia de Antitrombina III', 'Síndrome Antifosfolípido (SAF)'],
      rows: [
        ['Naturaleza de la Trombofilia', 'Hereditaria (autosómica dominante)', 'Hereditaria (autosómica dominante)', 'Adquirida autoinmune (primaria o LES)'],
        ['Frecuencia Poblacional', 'La más común en caucásicos (3-5% portadores)', 'Rara (< 0.02% en población general)', 'La trombofilia adquirida más frecuente'],
        ['Tipo de Trombosis', 'Predominantemente Venosa (TVP / TEP)', 'Venosa profunda severa recurrente', 'Venosa (TVP) y Arterial (ACV, infarto, gangrena)'],
        ['Morbilidad Obstétrica', 'Riesgo leve a moderado de aborto', 'Riesgo moderado de pérdida fetal', 'Abortos recurrentes <10 sem, muerte fetal >10 sem'],
        ['Prueba Diagnóstica', 'Resistencia a PCa / PCR mutación G1691A', 'Actividad funcional de antitrombina en plasma', 'Anticoagulante lúpico, Anti-cardiolipina, Anti-B2GP1'],
        ['Anticoagulante de Elección', 'DOACs (Rivaroxabán/Apixabán) o Cumarínicos', 'DOACs o Cumarínicos (Resistencia a heparina)', 'ACENOCUMAROL / WARFARINA (INR 2-3); ¡DOACs prohibidos!']
      ]
    },
    vignette: {
      title: 'Caso Clínico: Mujer Joven con Trombosis Venosa y Pérdidas Fetales',
      text: 'Mujer de 31 años consulta en urgencias por dolor e hinchazón asimétrica dolorosa en la pierna izquierda de 48 horas. El eco-Doppler venoso confirma una trombosis venosa profunda iliofemoral izquierda no provocada. En su historia ginecoobstétrica refiere dos pérdidas fetales a las 18 y 22 semanas de gestación con fetos morfológicamente normales y un aborto a las 8 semanas. No presenta factores de riesgo trombóticos transitorios (no consume anticonceptivos orales, no ha viajado ni ha tenido cirugías). Pruebas de coagulación de ingreso: TP normal, TTPK prolongado (52 seg, control 30 seg) que no corrige en la prueba de mezcla 1:1 con plasma normal.',
      conducta: 'Alta sospecha de Síndrome Antifosfolípido (SAF) con trombosis venosa profunda iliofemoral y antecedente de morbilidad obstétrica característica. La prolongación del TTPK que no corrige con mezcla refleja la presencia de Anticoagulante Lúpico. Se inicia anticoagulación terapéutica inmediata con heparina de bajo peso molecular puenteada a acenocumarol (meta de INR 2.0 a 3.0), y se solicitan anticuerpos antifosfolípidos (anticoagulante lúpico, anti-cardiolipina y anti-beta2-glicoproteína 1), los cuales deberán reconfirmarse a las 12 semanas. Están formalmente contraindicados los anticoagulantes orales directos (DOACs).'
    },
    keyPoints: [
      'La mutación del Factor V Leiden (resistencia a proteína C activada) es la trombofilia hereditaria más común.',
      'El déficit de antitrombina III es la trombofilia genética más trombogénica y genera resistencia a la heparina.',
      'El estudio funcional de trombofilia no debe realizarse durante la fase aguda de trombosis ni bajo anticoagulantes.',
      'Criterios de Sydney para SAF: trombosis vascular o morbilidad obstétrica más anticuerpos antifosfolípidos positivos x 2 en >12 semanas.',
      'El Anticoagulante Lúpico produce prolongación paradójica del TTPK in vitro que no corrige con plasma normal.',
      '¡Alerta terapéutica!: En el SAF trombótico el tratamiento de elección es Acenocumarol/Warfarina; los DOACs están contraindicados.'
    ],
    questions: [
      {
        stem: 'Hombre de 28 años presenta una trombosis venosa profunda en el miembro inferior derecho sin factor desencadenante identificable. En sus antecedentes familiares destaca que su padre y una tía paterna presentaron episodios trombóticos antes de los 45 años. ¿Cuál es la trombofilia hereditaria más frecuente en la población general y que con mayor probabilidad explica este cuadro?',
        opciones: [
          'A) Deficiencia congénita de antitrombina III',
          'B) Resistencia a la proteína C activada por mutación del Factor V Leiden',
          'C) Deficiencia de proteína C de la coagulación',
          'D) Síndrome de anticuerpos antifosfolípidos primario',
          'E) Mutación del gen de la metilentetrahidrofolato reductasa (MTHFR)'
        ],
        correcta: 'B',
        explicacion: 'La trombofilia hereditaria más común en la población general y en personas de ascendencia caucásica es la mutación del Factor V Leiden (sustitución G1691A), responsable de más del 90% de los casos de resistencia a la proteína C activada. Se encuentra en el 3% al 5% de la población general y explica hasta el 20-30% de los primeros episodios de tromboembolismo venoso no provocado en pacientes jóvenes. El SAF es una trombofilia adquirida (no hereditaria). Perla. La trombofilia hereditaria más frecuente es el Factor V Leiden.',
        recTag: 'EUNACOM 2018 · Q#28'
      },
      {
        stem: 'Mujer de 33 años con antecedentes de dos abortos espontáneos de segundo trimestre presenta un accidente cerebrovascular isquémico de la arteria cerebral media izquierda. El estudio de coagulación demuestra presencia persistente de anticoagulante lúpico y títulos altos de anticuerpos anti-beta-2-glicoproteína 1 confirmados a las 12 semanas, diagnosticándose Síndrome Antifosfolípido (SAF). ¿Cuál es el tratamiento antitrombótico de mantenimiento a largo plazo de elección?',
        opciones: [
          'A) Ácido acetilsalicílico en dosis bajas exclusivamente',
          'B) Antagonistas de la vitamina K (Acenocumarol o Warfarina) con meta de INR entre 2.0 y 3.0',
          'C) Rivaroxabán por vía oral 20 mg al día',
          'D) Clopidogrel 75 mg al día en monoterapia',
          'E) Infusión mensual de inmunoglobulina endovenosa'
        ],
        correcta: 'B',
        explicacion: 'En pacientes con Síndrome Antifosfolípido (SAF) trombótico confirmado (especialmente con eventos arteriales o perfil de alto riesgo/triple positividad), el estándar de oro del tratamiento anticoagulante de mantención indefinido es el uso de antagonistas de la vitamina K (acenocumarol o warfarina) con una meta de INR de 2.0 a 3.0. Ensayos clínicos aleatorizados (ensayos TRAPS) demostraron que los anticoagulantes orales directos como el rivaroxabán se asocian a un aumento inadmisible de eventos trombóticos arteriales recurrentes, por lo que no deben utilizarse en esta indicación. Perla. El SAF trombótico se trata con acenocumarol/warfarina (INR 2-3); los DOACs están contraindicados.',
        recTag: 'EUNACOM 2023 · Q#14'
      }
    ]
  },
  {
    id: 'hem-24',
    classId: 'hem-24',
    tier: 2,
    blockNum: 5,
    blockName: 'Urgencias Oncohematológicas, Trombofilias y Medicina Transfusional',
    topicLabel: '8.24',
    title: 'Medicina Transfusional y Manejo de Hemocomponentes: Glóbulos Rojos, Plaquetas, Plasma y Reacciones Adversas',
    perfilCode: '1.08.3.005',
    dx: 'Específico', tx: 'Inicial', seg: 'Completo',
    ges: 'No GES directo · Normativa Técnica Nacional de Medicina Transfusional (MINSAL)',
    reconstrucciones: 'EUNACOM Diciembre 2017 (Q#45) · EUNACOM Diciembre 2020 (Q#22)',
    frecuencia: 'Muy Alta · Umbrales restrictivos de transfusión (Hb < 7 g/dL), TRALI vs TACO, manejo del shock anafiláctico',
    svg: null, algoTitle: 'Algoritmo de Medicina Transfusional y Reacciones Adversas Agudas',
    diagram: flow('Algoritmo de Hemocomponentes y Reacciones Transfusionales', [
      { t: 'Indicación de Soporte Transfusional según Umbrales Restrictivos Clínicos', s: 'Regla Moderna: Estrategia Transfusional Restrictiva (menor morbimortalidad que la liberal)' },
      { k: 'split', q: 'Selección Precisa del Hemocomponente Adecuado', s: 'Transfundir solo el componente específico deficitario; ¡Prohibida la sangre total!', ll: 'Glóbulos Rojos Concentrados (CGR)', rl: 'Plaquetas / Plasma Fresco Congelado / Crioprecipitado',
        left: { t: 'Umbral Hb < 7.0 g/dL en Paciente Hospitalizado Estable', s: 'Meta Hb 7 a 8 g/dL (En síndrome coronario agudo o shock la meta es Hb > 8-9 g/dL) · 1 unidad CGR sube Hb 1 g/dL', type: 'acc' },
        right: { t: 'Plaquetas: < 10.000 profiláctico | < 50.000 cirugías/sangrado', s: 'Crioprecipitado si Fibrinógeno < 100-150 mg/dL · PFC si TP/TTPK > 1.5 veces en sangrado activo', type: 'warn' },
        ll: 'glóbulos rojos', rl: 'hemostáticos' },
      { t: 'Diferenciación de Emergencia ante Dificultad Respiratoria Aguda Pos-transfusión', s: 'TRALI (Injuria Pulmonar Aguda: anticuerpos anti-HLA donante, edema no cardiogénico) vs TACO (Sobrecarga Circulatoria: hipervolemia, responde a furosemida)', type: 'crit', al: 'trali vs taco', from: 'left' }
    ]),
    contexto: 'La medicina transfusional moderna se rige por el principio del uso racional y restrictivo de hemocomponentes. En el EUNACOM se evalúan sistemáticamente: 1) Los umbrales de transfusión de glóbulos rojos basados en evidencia (umbral restrictivo de Hb < 7.0 g/dL en pacientes estables y < 8.0-9.0 g/dL en síndrome coronario agudo o shock); 2) Los umbrales de transfusión plaquetaria (< 10.000/uL profiláctico en aplasias, < 50.000/uL en cirugías mayores y < 100.000/uL en neurocirugía/oftalmología); 3) La conducta inmediata ante sospecha de reacción hemolítica aguda (detener la transfusión de inmediato); y 4) La diferenciación crucial de disnea postransfusional entre TRALI (edema pulmonar no cardiogénico) y TACO (sobrecarga circulatoria por hipervolemia tratada con diuréticos de asa).',
    contentSections: [
      {
        subhead: '1. Umbrales Modernos de Transfusión de Concentrados de Glóbulos Rojos',
        paragraphs: [
          'Los ensayos clínicos aleatorizados mayores contemporáneos (estudios TRICC, FOCUS, TRISS) demostraron de forma concluyente que la Estrategia Transfusional Restrictiva (transfundir solo cuando la hemoglobina desciende por debajo de 7.0 g/dL) es igual o superior en sobrevida a la estrategia liberal histórica (transfundir con Hb < 9-10 g/dL), reduciendo drásticamente las infecciones intrahospitalarias, la sobrecarga de volumen y la aloinmunización.',
          'Umbrales clínicos rectores: 1) Paciente hospitalizado en UCI o sala general hemodinámicamente estable: umbral de Hb < 7.0 g/dL (meta terapéutica: mantener Hb entre 7.0 y 8.0 g/dL); 2) Pacientes con Cardiopatía Coronaria Activa (síndrome coronario agudo, infarto con o sin supradesnivel ST o ángor inestable): umbral de Hb < 8.0 a 9.0 g/dL (meta de Hb > 9.0 a 10.0 g/dL); 3) Pacientes sometidos a cirugía ortopédica mayor con antecedentes vasculares: umbral Hb < 8.0 g/dL; y 4) Shock hemorrágico activo o hemorragia masiva: la transfusión no espera a los resultados del laboratorio y se guía por la activación del Protocolo de Hemorragia Masiva (proporción balanceada 1 CGR : 1 PFC : 1 Pool de Plaquetas).',
          'En el adulto promedio sin sangrado activo, la infusión de 1 unidad de Concentrado de Glóbulos Rojos (CGR, volumen ~250-300 mL) incrementa la concentración de hemoglobina en 1.0 g/dL y el hematocrito en aproximadamente un 3%.'
        ]
      },
      {
        subhead: '2. Indicaciones Específicas de Plaquetas, Plasma Fresco y Crioprecipitado',
        paragraphs: [
          'Concentrados de Plaquetas: 1 unidad de aféresis plaquetaria (o 1 pool de 4 a 6 concentrados plaquetarios de donante único) incrementa el recuento plaquetario en 30.000 a 50.000/uL en un receptor adulto de 70 kg. Umbrales de transfusión: a) Profilaxis en falla medular estable: < 10.000/uL; b) Profilaxis en presencia de fiebre, infección grave o factores de riesgo hemorrágico: < 20.000/uL; c) Paciente con sangrado mucoso activo o sometido a procedimientos invasivos menores (paracentesis, toracocentesis, punción lumbar, biopsia hepática): < 50.000/uL; y d) Procedimientos quirúrgicos en SNC (neurocirugía) o polo posterior ocular: < 100.000/uL.',
          'Plasma Fresco Congelado (PFC, 10-15 mL/kg): contiene todos los factores de la coagulación. Sus únicas indicaciones justificadas son: reversión de coagulopatía con sangrado activo y TP o TTPK > 1.5 veces el valor control, politransfusión masiva, reposición durante plasmaféresis en PTT, y déficit congénito de factor para el cual no exista concentrado específico purificado.',
          'Crioprecipitado: fracción concentrada en frío obtenida del PFC; es el componente de elección para reponer Fibrinógeno en pacientes con sangrado y fibrinógeno < 100 a 150 mg/dL (CID, hemorragia masiva, desprendimiento de placenta) o disfibrinogenemia.'
        ]
      },
      {
        subhead: '3. Reacciones Transfusionales Agudas: Diagnóstico Diferencial y Manejo de Urgencia',
        paragraphs: [
          'Regla de oro absoluta ante cualquier reacción adversa aguda durante la transfusión: 1) DETENER INMEDIATAMENTE LA INFUSIÓN DEL HEMOCOMPONENTE; 2) Mantener la vía venosa permeable con infusión de suero fisiológico con un equipo de goteo nuevo; 3) Verificar de inmediato la identidad del paciente y la compatibilidad en la etiqueta de la bolsa; y 4) Notificar al Banco de Sangre y enviar la bolsa remanente junto con muestras de sangre del paciente para estudio de hemólisis y cultivos.',
          'Reacción Hemolítica Aguda Inmunológica: se produce típicamente por incompatibilidad de grupo ABO debido a error humano de identificación. Se inicia en los primeros 10-15 minutos de infusión con fiebre alta, calofríos intensos, dolor lumbar agudo intolerable, disnea, hipotensión arterial, hemoglobina libre en orina (orina roja oscura) y coagulación intravascular diseminada con shock. Requiere soporte hemodinámico agresivo, hidratación salina masiva para inducir diuresis forzada > 100 mL/h y furosemida para proteger los túbulos renales de la precipitación de hemoglobina ácida.',
          'Reacción Febril No Hemolítica: es la reacción más frecuente (1-2%); se debe a anticuerpos del receptor dirigidos contra leucocitos o citocinas del donante presentes en la bolsa. Cursa con elevación térmica ≥ 1.0 °C sin dolor lumbar ni hemólisis. Responde a antipiréticos (paracetamol) y se previene empleando hemocomponentes desleucocitados.',
          'Diferenciación respiratoria crucial: TRALI vs TACO. 1) TRALI (Injuria Pulmonar Aguda Asociada a Transfusión): ocurre dentro de las 6 horas postransfusión por anticuerpos anti-HLA o anti-neutrófilo del donante que activan neutrófilos en la vasculatura pulmonar, generando permeabilidad capilar y Edema Pulmonar No Cardiogénico con hipoxemia severa (PaFiO2 < 300), fiebre, hipotensión y presión capilar pulmonar NORMAL; su manejo es ventilatorio de soporte y los diuréticos NO son eficaces; 2) TACO (Sobrecarga Circulatoria Asociada a Transfusión): edema pulmonar cardiogénico por sobrecarga hidrostática rápida en ancianos o cardiópatas; cursa con hipertensión arterial, ingurgitación yugular y BNP elevado, y RESPONDE ESPECTACULARMENTE A FUROSEMIDA endovenosa y restricción hídrica.'
        ]
      }
    ],
    table: {
      title: 'Diagnóstico Diferencial Respiratorio: TRALI vs TACO en Medicina Transfusional',
      headers: ['Parámetro', 'TRALI (Injuria Pulmonar Aguda)', 'TACO (Sobrecarga Circulatoria)'],
      rows: [
        ['Mecanismo Fisiopatológico', 'Aumento permeabilidad capilar alveolar (Anticuerpos anti-HLA/HNA)', 'Hipervolemia hidrostática y sobrecarga ventricular izquierda'],
        ['Presión Arterial Sistémica', 'Hipotensión o normal', 'Hipertensión arterial marcada'],
        ['Presión Venosa / Yugular', 'Normal o baja (sin ingurgitación yugular)', 'Ingurgitación yugular franca (> 10 cmH2O) y reflujo'],
        ['Auscultación Cardíaca', 'Normal (sin ritmo de galope)', 'Ritmo de galope con 3er ruido (R3) audible'],
        ['Péptido Natriurético (BNP)', 'Normal o levemente elevado', 'Marcadamente ELEVADO (> 1.5 a 3 veces el basal)'],
        ['Respuesta a Furosemida EV', 'Nula o perjudicial (empeora hipotensión)', 'MEJORÍA CLÍNICA RÁPIDA Y ESPECTACULAR'],
        ['Tratamiento Primario', 'Soporte ventilatorio protector (UCI); oxigenoterapia', 'Furosemida EV (20-40 mg) + Restricción hídrica + Vasodilatadores']
      ]
    },
    vignette: {
      title: 'Caso Clínico: Disnea Súbita e Hipertensión tras Transfusión de Glóbulos Rojos',
      text: 'Mujer de 78 años con antecedentes de insuficiencia cardíaca con fracción de eyección preservada e hipertensión arterial, es hospitalizada por anemia sintomática con Hb 6.4 g/dL. Durante la infusión rápida de la segunda unidad de concentrado de glóbulos rojos, la paciente desarrolla disnea súbita de reposo, taquipnea de 32 rpm, tos con expectoración rosada asalmonada y cianosis. Al examen físico: PA 185/100 mmHg (ingreso 130/80), FC 110 lpm, ingurgitación yugular evidente hasta el ángulo mandibular y crépitos húmedos difusos bilaterales en ambos campos pulmonares hasta los ápices.',
      conducta: 'Sobrecarga Circulatoria Asociada a Transfusión (TACO) aguda precipitada por la velocidad e hipervolemia del hemocomponente en una paciente añosa con reserva cardíaca disminuida. La conducta médica inmediata es: suspender de inmediato la transfusión de glóbulos rojos, sentar a la paciente con piernas declives, administrar oxígeno a flujo alto e indicar Furosemida endovenosa 40 mg en bolo directo, lo que inducirá diuresis rápida y resolverá la congestión hidrostática pulmonar.'
    },
    keyPoints: [
      'Estrategia restrictiva: transfundir glóbulos rojos con Hb < 7.0 g/dL en pacientes hospitalizados estables.',
      'En síndrome coronario agudo o shock la meta de hemoglobina es más liberal: mantener Hb > 8.0 a 9.0 g/dL.',
      'Una unidad de concentrados de glóbulos rojos (CGR) eleva la hemoglobina en 1 g/dL y el hematocrito en 3%.',
      'Umbral de transfusión profiláctica de plaquetas en falla medular: < 10.000/uL; en cirugías mayores: < 50.000/uL.',
      'Ante cualquier reacción transfusional aguda: DETENER LA TRANSFUSIÓN DE INMEDIATO y mantener vía permeable.',
      'La Reacción Hemolítica Aguda ABO produce fiebre, calofríos, dolor lumbar intenso, hipotensión y orinas rojas oscuras.',
      'TRALI: edema pulmonar no cardiogénico por anticuerpos anti-HLA del donante (hipotensión; no responde a diuréticos).',
      'TACO: sobrecarga cardiocirculatoria por hipervolemia con hipertensión e ingurgitación yugular (responde a furosemida EV).'
    ],
    questions: [
      {
        stem: 'Un paciente de 65 años hospitalizado en la unidad de cuidados intensivos se encuentra estable, ventilando espontáneamente con aire ambiental, sin sangrado activo ni antecedentes de cardiopatía isquémica. Su hemograma de control muestra Hb 7.2 g/dL y hematocrito 22%. ¿Cuál es la conducta médica más adecuada respecto a la transfusión sanguínea según la evidencia actual?',
        opciones: [
          'A) Transfundir inmediatamente 2 unidades de concentrado de glóbulos rojos para alcanzar Hb > 10 g/dL',
          'B) No transfundir glóbulos rojos y mantener conducta expectante con monitoreo clínico',
          'C) Indicar transfusión de 1 unidad de glóbulos rojos asociada a eritropoyetina',
          'D) Administrar una unidad de plasma fresco congelado profiláctico',
          'E) Indicar reposo absoluto y sangría de hemodilución normovolémica'
        ],
        correcta: 'B',
        explicacion: 'En pacientes críticos hospitalizados hemodinámicamente estables sin síndrome coronario agudo activo, múltiples ensayos clínicos aleatorizados (como el estudio TRICC) han demostrado que una estrategia transfusional restrictiva (transfundir solo si Hb < 7.0 g/dL) es tan segura y reduce complicaciones en comparación con una estrategia liberal. Al tener Hb de 7.2 g/dL y encontrarse asintomático y estable, no está indicada la transfusión de glóbulos rojos. Perla. El umbral transfusional restrictivo estándar en paciente hospitalizado estable es Hb < 7.0 g/dL.',
        recTag: 'EUNACOM 2017 · Q#45'
      },
      {
        stem: 'A los 10 minutos de iniciada la transfusión de una unidad de concentrado de glóbulos rojos en un paciente traumatizado, este comienza súbitamente con calofríos intensos, fiebre de 39 °C, dolor lumbar opresivo severo y disnea, constatándose PA de 80/40 mmHg y coluria oscura por sonda Foley. ¿Cuál es la primera medida de emergencia e inapelable que debe tomarse?',
        opciones: [
          'A) Disminuir la velocidad de goteo de la transfusión a la mitad y administrar paracetamol oral',
          'B) Detener inmediatamente la transfusión sanguínea y mantener la vía venosa con suero fisiológico',
          'C) Administrar un bolo de furosemida endovenosa y continuar la transfusión',
          'D) Inyectar 100 mg de hidrocortisona endovenosa en la misma vía del hemocomponente',
          'E) Solicitar una tomografía computarizada de abdomen y pelvis de urgencia'
        ],
        correcta: 'B',
        explicacion: 'El cuadro corresponde a una Reacción Hemolítica Aguda por incompatibilidad ABO (emergencia transfusional vital con hemólisis intravascular masiva, dolor lumbar por congestión renal, hipotensión y hemoglobinuria). La primera medida obligatoria e inmediata ante la sospecha de cualquier reacción hemolítica aguda es detener inmediatamente la transfusión para frenar la entrada de glóbulos rojos incompatibles, conservando la vía venosa con solución salina normal para reanimación con fluidos y enviar la bolsa a análisis. Perla. Ante sospecha de reacción transfusional hemolítica aguda: DETENER LA TRANSFUSIÓN DE INMEDIATO.',
        recTag: 'EUNACOM 2020 · Q#22'
      }
    ]
  }
];

module.exports = {
  bloque5
};
