/**
 * TOMO 15 · OFTALMOLOGÍA — BLOQUE 02: Glaucoma & Patología del Cristalino
 * Clases 15.6 a 15.9 · Editorial EUNACOM 2026 · Color #0e7490
 */

const { flow } = require('./dataset_oftalmologia_bloque_1.cjs');

const bloque2 = [
  {
    id: 'oftal-06',
    classId: 'oftal-06',
    tier: 3,
    blockNum: 2,
    blockName: 'Glaucoma & Patología del Cristalino',
    topicLabel: '15.6',
    title: 'Glaucoma Agudo de Ángulo Cerrado: Cefalea Ocular, Ojo Pétreo, Manitol/Acetazolamida',
    perfilCode: '6.02.1.002',
    dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Sin garantía GES específica · Urgencia Médica Mayor',
    reconstrucciones: 'EUNACOM 2013 (Q#45) · EUNACOM Julio 2017 (Q#78) · EUNACOM Diciembre 2020 (Q#12)',
    frecuencia: 'Máxima rentabilidad · Reconocimiento de la tríada clínica y tratamiento farmacológico de urgencia',
    diagram: flow('Algoritmo de Rescate en Glaucoma Agudo de Ángulo Cerrado', [
      { t: 'Paciente con Cefalea Ocular Lancinante, Náuseas, Vómitos y Baja Visual Aguda', s: 'Examen físico: ojo rojo periquerático, edema corneal, midriasis media y ojo pétreo a la palpación' },
      { k: 'split', q: '¿Sospecha de Glaucoma Agudo (PIO > 40-70 mmHg)?', s: 'Iniciar de inmediato protocolo médico de descenso de presión intraocular', ll: 'Protocolo Farmacológico Sistémico y Tópico', rl: 'Derivación y Tratamiento Definitivo',
        left: { t: 'Tríada Hipotensora Inmediata en Urgencias', s: '1. Manitol 15-20% EV (1-2 g/kg en 45 min) · 2. Acetazolamida 500 mg VO · 3. Timolol 0.5% colirio', type: 'acc' },
        right: { t: 'Mióticos Tópicos y Resolución Quirúrgica', s: 'Pilocarpina 2% colirio (tras bajar PIO < 30) · Iridotomía periférica con láser YAG bilateral obligatoria', type: 'warn' },
        ll: 'tratamiento médico de urgencia', rl: 'resolución definitiva' },
      { t: 'Contraindicación Absoluta en Sospecha de Cierre Angular', s: 'PROHIBIDO ADMINISTRAR MIDRIÁTICOS (atropina, tropicamida): agravan el bloqueo pupilar y causan ceguera irreversible', type: 'dec', al: 'alerta vital de examen', from: 'left' },
    ]),
    contexto: 'El glaucoma agudo por cierre angular es una emergencia oftalmológica médica y quirúrgica absoluta. En ojos con ángulo iridocorneal anatómicamente estrecho, la midriasis desencadena un bloqueo pupilar con aposición del iris periférico a la malla trabecular, impidiendo el drenaje del humor acuoso y disparando la presión intraocular a niveles que producen necrosis retiniana e isquemia del nervio óptico en horas.',
    contentSections: [
      {
        subhead: '1. Fisiopatología del Cierre Angular y Factores Predisponentes',
        paragraphs: [
          'El humor acuoso se produce en el cuerpo ciliar, pasa de la cámara posterior a la anterior a través de la pupila y drena por la malla trabecular en el ángulo iridocorneal.<br>' +
          '• <strong>Factores Anatómicos Predisponentes:</strong> Ojos pequeños o cortos (<strong>hipermetropía</strong>), cámara anterior estrecha/poco profunda, cristalino engrosado (edad avanzada, cataratas) y género femenino.<br>' +
          '• <strong>Mecanismo de Desencadenamiento:</strong> Ocurre típicamente con la <strong>midriasis media</strong> (en la penumbra del cine, estrés emocional intenso con descarga simpática o tras el uso de fármacos anticolinérgicos, antihistamínicos o gotas midriáticas). En esa posición, la raíz del iris se pliega y ocluye mecánicamente el trabéculo, impidiendo el flujo hacia el canal de Schlemm.<br>' +
          '• La presión intraocular (PIO), que normalmente oscila entre 10 y 21 mmHg, se eleva abruptamente a <strong>50, 60 o más de 70 mmHg</strong>, colapsando el flujo vascular del nervio óptico.',
        ],
      },
      {
        subhead: '2. Cuadro Clínico y Semiología del "Ojo Pétreo"',
        paragraphs: [
          'La presentación es dramática y con frecuencia se confunde con una emergencia neurológica o digestiva:<br>' +
          '• <strong>Dolor brutal:</strong> Dolor ocular y periocular lancinante que irradia a todo el hemicráneo (cefalea unilateral severa).<br>' +
          '• <strong>Cortejo vegetativo:</strong> Náuseas intensas, vómitos profusos y bradicardia refleja vaso-vagal.<br>' +
          '• <strong>Síntomas visuales:</strong> Pérdida brusca y profunda de la agudeza visual, y visión de <strong>halos de colores ("arcoíris") alrededor de las luces</strong> por difracción en la córnea edematosa.<br>' +
          '• <strong>Signos físicos patognomónicos en el examen:</strong><br>' +
          '1. Inyección mixta o periquerática violácea intensa.<br>' +
          '2. <strong>Edema corneal difuso</strong> (córnea turbia, opaca, que pierde el brillo y luce como "vidrio deslustrado" o esmerilado).<br>' +
          '3. <strong>Pupila en MIDRIASIS MEDIA ARREACTIVA</strong> (paralítica y fija a la luz).<br>' +
          '4. Cámara anterior muy estrecha o plana.<br>' +
          '5. <strong>Ojo pétreo:</strong> A la palpación bimanual comparativa con los dedos índices sobre los párpados cerrados, el globo ocular se palpa completamente duro e inextensible ("como una piedra o bola de billar").',
        ],
      },
      {
        subhead: '3. Tratamiento Médico de Urgencia en Atención Primaria y SAPU',
        paragraphs: [
          'El objetivo inmediato es reducir la PIO por debajo de 30 mmHg para restablecer la perfusión retiniana y desedematizar la córnea:<br>' +
          '• <strong>1. Agentes Osmóticos Sistémicos:</strong> <strong>Manitol al 15% o 20% endovenoso</strong> a dosis de 1.5 a 2 g/kg en infusión rápida durante 30 a 45 minutos. Deshidrata el vítreo atrayendo agua hacia el lecho vascular.<br>' +
          '• <strong>2. Inhibidores de la Anhidrasa Carbónica:</strong> <strong>Acetazolamida</strong> 500 mg vía oral (o endovenosa si hay vómitos incoercibles), seguida de 250 mg cada 6 horas. Reduce la producción de humor acuoso en el epitelio ciliar.<br>' +
          '• <strong>3. Betabloqueadores Tópicos:</strong> <strong>Timolol colirio al 0.5%</strong> 1 gota cada 12 horas (disminuye la síntesis de humor acuoso). Precaución en asmáticos o bloqueos AV.<br>' +
          '• <strong>4. Corticoides Tópicos:</strong> Acetato de prednisolona 1% para reducir la inflamación secundaria.<br>' +
          '• <strong>5. Mióticos Tópicos (Pilocarpina al 2%):</strong> Solo es efectiva cuando la PIO ha bajado de 30-40 mmHg, ya que con presiones mayores el esfínter pupilar está paralizado por isquemia. Una vez controlada la crisis, induce miosis, tironea la raíz del iris y abre mecánicamente el ángulo.',
        ],
      },
      {
        subhead: '4. Tratamiento Definitivo y Profilaxis Contralateral',
        paragraphs: [
          'Una vez desinflamada y transparente la córnea, el tratamiento curativo de elección es la <strong>Iridotomía Periférica con Láser YAG</strong>.<br>' +
          'Consiste en realizar un pequeño orificio en la periferia superior del iris que comunica directamente la cámara posterior con la anterior, derivando el flujo de humor acuoso y eliminando para siempre el bloqueo pupilar.<br>' +
          '<strong>Regla de oro de examen:</strong> La iridotomía con láser DEBE REALIZARSE SIEMPRE DE FORMA BILATERAL (incluyendo el ojo contralateral asintomático), ya que la estrechez anatómica es bilateral y el ojo opuesto tiene un 50-70% de probabilidad de sufrir una crisis idéntica en los meses siguientes si no se protege.',
        ],
      },
    ],
    table: {
      title: 'Glaucoma Agudo de Ángulo Cerrado vs Uveítis Anterior Aguda',
      headers: ['Característica Semiológica', 'Glaucoma Agudo de Ángulo Cerrado', 'Uveítis Anterior Aguda (Iridociclitis)'],
      rows: [
        ['Presión Intraocular (PIO)', 'Muy elevada (> 50–70 mmHg) · Ojo pétreo', 'Normal o disminuida (hipotonía por hiposecreción ciliar)'],
        ['Pupila', 'MIDRIASIS MEDIA FIJA, ovalada, arreactiva', 'MIOSIS unilateral, hiporreactiva, bordes irregulares'],
        ['Córnea', 'Edema difuso epitelial en vidrio esmerilado', 'Transparente con precipitados queráticos retrocorneales'],
        ['Cámara anterior', 'Muy estrecha o plana (bloqueo pupilar)', 'Profundidad normal, con células inflamatorias (Tyndall)'],
        ['Dolor y síntomas sistémicos', 'Dolor lancinante severo + náuseas y vómitos', 'Dolor sordo moderado + fotofobia sin vómitos'],
        ['Manejo farmacológico inicial', 'Hipotensores (Manitol EV + Acetazolamida + Timolol)', 'Midriáticos (Atropina) + Corticoides tópicos'],
      ],
    },
    severityTable: {
      title: 'Estadificación y Grados de Elevación Tensional en el Cierre Angular',
      headers: ['Nivel de Presión Intraocular', 'Compromiso Clínico', 'Efecto Fisiopatológico', 'Conducta Requerida'],
      rows: [
        ['10 a 21 mmHg', 'PIO Normal', 'Perfusión vascular adecuada del nervio óptico', 'Seguimiento de rutina'],
        ['22 a 35 mmHg', 'Hipertensión Ocular Moderada', 'Cámara estrecha asintomática o pródromos de halos', 'Evaluación por oftalmología en días'],
        ['36 a 50 mmHg', 'Crisis Aguda Incipiente', 'Isquemia del esfínter pupilar e inicio de edema corneal', 'Inicio de terapia hipotensora médica'],
        ['> 50 a 80 mmHg', 'Glaucoma Agudo Establecido', 'Isquemia aguda de retina y nervio; dolor y vómitos', 'EMERGENCIA MÉDICA: Manitol EV + Iridotomía'],
      ],
    },
    treatmentTable: {
      title: 'Protocolo Terapéutico Secuencial en Glaucoma Agudo',
      headers: ['Fase / Fármaco', 'Dosis y Vía de Administración', 'Mecanismo de Acción', 'Precaución / Efecto Adverso'],
      rows: [
        ['1. Manitol 15-20%', '1.5 a 2.0 g/kg EV en 30-45 minutos', 'Deshidrata el vítreo mediante hiperosmolaridad plasmática', 'Monitoreo en insuficiencia cardíaca descompensada'],
        ['2. Acetazolamida', '500 mg VO o EV inicial, luego 250 mg c/6h', 'Inhibe anhidrasa carbónica; reduce producción de acuoso', 'Parestesias peribucales, acidosis metabólica'],
        ['3. Timolol 0.5%', '1 gota colirio en ojo afecto c/12h', 'Betabloqueador; reduce secreción de humor acuoso', 'Contraindicado en asma severo y bradicardia sinusal'],
        ['4. Pilocarpina 2%', '1 gota c/15 min x 4 dosis tras bajar PIO < 30', 'Agonista colinérgico; miosis y desimpactación angular', 'Ineficaz con PIO > 40 por isquemia del esfínter'],
        ['5. Iridotomía YAG', 'Procedimiento láser ambulatorio BILATERAL', 'Crea fístula entre cámara posterior y anterior', 'Debe realizarse siempre en ambos ojos'],
      ],
    },
    vignette: 'Mujer de 64 años, hipermétrope, acude a urgencias a la medianoche por dolor ocular izquierdo intolerable que se inició hace 3 horas mientras estaba en una sala de cine a oscuras. El dolor le irradia a la mitad izquierda de la cabeza y se acompaña de náuseas intensas y vómitos alimentarios en 3 ocasiones. Refiere ver círculos de colores alrededor de los focos. Al examen: inyección periquerática, córnea izquierda turbia sin brillo, pupila en midriasis media de 5 mm fija que no reacciona al haz de luz. Al palpar los ojos a través de los párpados, el ojo izquierdo se siente completamente pétreo comparado con el derecho.',
    explicacion: 'Se trata de un Glaucoma Agudo de Ángulo Cerrado clásico. La estancia en penumbra favoreció la midriasis media en una paciente anatómicamente predispuesta (mujer añosa hipermétrope), desencadenando el bloqueo pupilar e hiperpresión intraocular masiva (> 50-60 mmHg). Los síntomas digestivos (náuseas/vómitos) son un reflejo vegetativo secundario al dolor severo. La conducta obligatoria es administrar inmediatamente terapia médica de rescate con Manitol endovenoso al 20%, Acetazolamida 500 mg vía oral y colirio de Timolol al 0.5%, derivando de emergencia para Iridotomía periférica bilateral con láser YAG.',
    keyPoints: [
      'Glaucoma agudo = dolor ocular brutal + náuseas/vómitos + visión borrosa con halos + ojo pétreo.',
      'El signo pupilar patognomónico es la MIDRIASIS MEDIA FIJA Y ARREACTIVA unilateral.',
      'Manejo farmacológico inicial de rescate: Manitol 20% EV + Acetazolamida oral + Timolol 0.5% tópico.',
      'La pilocarpina solo es útil cuando la PIO ha bajado a < 30 mmHg (antes el esfínter pupilar está paralizado).',
      'El tratamiento definitivo es la Iridotomía periférica con láser YAG, que debe realizarse siempre en AMBOS ojos.',
      'CONTRAINDICACIÓN ABSOLUTA: JAMÁS administrar colirios midriáticos (atropina, tropicamida) en un cierre angular.',
    ],
    questions: [
      {
        stem: 'Una paciente de 67 años acude a un SAPU por cefalea hemicraneana izquierda intensa de 2 horas de evolución, acompañada de vómitos reiterados y visión borrosa ipsilateral. El médico de turno sospecha migraña con aura o accidente cerebrovascular. Sin embargo, al examen ocular destaca inyección ciliar severa, edema corneal en vidrio deslustrado, pupila izquierda en midriasis media de 5 mm no reactiva a la luz y marcado endurecimiento del globo ocular a la palpación digital comparativa. ¿Cuál es la terapia farmacológica de primera línea más indicada mientras se gestiona su traslado urgente?',
        options: [
          { id: 'A', text: 'Sumatriptán subcutáneo y metoclopramida endovenosa' },
          { id: 'B', text: 'Manitol endovenoso al 20%, acetazolamida oral y timolol tópico' },
          { id: 'C', text: 'Atropina en colirio al 1% y dexametasona subconjuntival' },
          { id: 'D', text: 'Pilocarpina tópica en dosis masivas continuas cada 2 minutos' },
          { id: 'E', text: 'Heparina de bajo peso molecular y ácido acetilsalicílico' },
        ],
        correcta: 'B',
        explicacion: 'El cuadro corresponde a un Glaucoma Agudo de Ángulo Cerrado, cuya presentación con cefalea y vómitos con frecuencia lleva a errores diagnósticos confundiéndose con migraña o ACV. La presencia de edema corneal, midriasis media fija y ojo pétreo certifica la hipertensión ocular extrema. El manejo farmacológico inicial obligatorio para salvar la visión es la combinación de Manitol EV (agente osmótico que reduce el volumen vítreo), Acetazolamida oral (inhibidor de anhidrasa carbónica que frena la síntesis de humor acuoso) y colirio de Timolol al 0.5%. La atropina (C) dilata la pupila y sería nefasta. La pilocarpina en monoterapia (D) no funciona con presiones tan altas por isquemia del esfínter. Perla. El manitol EV y la acetazolamida son la piedra angular del rescate en el glaucoma agudo.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.1.002',
      },
      {
        stem: 'Tras compensar médicamente con éxito una crisis de glaucoma agudo por cierre angular en el ojo derecho de un paciente de 60 años, reduciéndose la PIO a 16 mmHg, el oftalmólogo planifica el tratamiento definitivo con iridotomía láser YAG. ¿Cuál es la indicación respecto al ojo izquierdo contralateral, que actualmente se encuentra completamente asintomático con PIO de 14 mmHg?',
        options: [
          { id: 'A', text: 'Observación clínica anual sin ninguna intervención invasiva' },
          { id: 'B', text: 'Realizar iridotomía periférica con láser YAG profiláctica en el ojo izquierdo' },
          { id: 'C', text: 'Indicar tratamiento de por vida con colirio de atropina profiláctica' },
          { id: 'D', text: 'Indicar pilocarpina tópica diaria únicamente en caso de que aparezca dolor' },
          { id: 'E', text: 'Indicar cirugía de desprendimiento de retina preventiva' },
        ],
        correcta: 'B',
        explicacion: 'La predisposición anatómica al cierre angular (cámara anterior estrecha, hipermetropía, configuración del iris) es simétrica y bilateral en prácticamente todos los pacientes. Un paciente que ha sufrido una crisis de glaucoma agudo en un ojo tiene más de un 50% de probabilidad de presentar un cuadro idéntico en el ojo adelfo en los próximos meses o años si no se interviene. Por esta razón, la norma internacional y de examen establece de forma mandatoria la realización de Iridotomía Periférica Profiláctica con láser YAG en el ojo contralateral asintomático. Trampa. Pensar que el ojo sano no debe tocarse es un error grave: debe protegerse siempre con láser profiláctico.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.1.002',
      },
      {
        stem: '¿Cuál de los siguientes medicamentos está CONTRAINDICADO administrar a un paciente con sospecha o antecedentes de ángulo iridocorneal estrecho sin iridotomía previa?',
        options: [
          { id: 'A', text: 'Paracetamol oral' },
          { id: 'B', text: 'Tropicamida en colirio oftálmico' },
          { id: 'C', text: 'Timolol colirio al 0.5%' },
          { id: 'D', text: 'Latanoprost colirio' },
          { id: 'E', text: 'Amoxicilina oral' },
        ],
        correcta: 'B',
        explicacion: 'La tropicamida es un fármaco anticolinérgico parasimpaticolítico que bloquea los receptores muscarínicos del esfínter pupilar, produciendo midriasis farmacológica activa. En un ojo con ángulo estrecho no operado, la dilatación pupilar aplasta la base del iris contra la malla trabecular periférica, precipitando un bloqueo pupilar completo e hiperpresión intraocular masiva (crisis de glaucoma agudo). Cualquier fármaco midriático o anticolinérgico está terminantemente contraindicado en ángulos estrechos no tratados. Perla. Todo midriático puede desencadenar un glaucoma agudo en ojos anatómicamente predispuestos.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.1.002',
      },
      {
        stem: 'Un hombre de 55 años con diagnóstico reciente de glaucoma de ángulo cerrado consulta a su médico porque leyó en el prospecto de un fármaco que la pilocarpina al 2% en colirio puede provocarle efectos no deseados. ¿Cuál es el mecanismo fisiopatológico por el cual la pilocarpina ayuda a resolver la crisis de cierre angular?',
        options: [
          { id: 'A', text: 'Induce midriasis máxima que relaja el iris hacia el centro de la pupila' },
          { id: 'B', text: 'Inhibe la producción de humor acuoso a nivel de los procesos ciliares' },
          { id: 'C', text: 'Estimula los receptores muscarínicos induciendo miosis, lo que estira y tracciona la raíz del iris alejándola del trabéculo' },
          { id: 'D', text: 'Aumenta el drenaje uveoescleral de la linfa retiniana' },
          { id: 'E', text: 'Produce deshidratación hiperosmolar del cuerpo vítreo' },
        ],
        correcta: 'C',
        explicacion: 'La pilocarpina es un agonista colinérgico directo que estimula la contracción del músculo esfínter de la pupila, provocando miosis pupilar intensa. Al contraerse el esfínter y achicarse la pupila, el tejido iridiano se estira y adelgaza mecánicamente, tironeando de la raíz del iris hacia el eje central y desimpactándola del ángulo camerular. Esto libera la malla trabecular y restaura el drenaje normal del humor acuoso. No inhibe la síntesis de acuoso (eso lo hace el timolol y la acetazolamida) ni deshidrata el vítreo (eso lo hace el manitol). Perla. La pilocarpina genera miosis y desobstruye físicamente el ángulo.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.1.002',
      },
    ],
  },

  {
    id: 'oftal-07',
    classId: 'oftal-07',
    tier: 2,
    blockNum: 2,
    blockName: 'Glaucoma & Patología del Cristalino',
    topicLabel: '15.7',
    title: 'Glaucoma Crónico de Ángulo Abierto: Excavación Papilar, Presión Intraocular y Análogos de PG',
    perfilCode: '6.02.1.002',
    dx: 'Sospecha', tx: 'Derivar', seg: 'Control',
    ges: 'Sin garantía GES específica · Guía de Tamizaje en Salud del Adulto',
    reconstrucciones: 'EUNACOM 2016 (Q#39) · EUNACOM Julio 2019 (Q#87)',
    frecuencia: 'Alta · Causa líder de ceguera silenciosa irreversible; distinción con glaucoma agudo',
    diagram: flow('Algoritmo de Pesquisa y Manejo del Glaucoma Crónico de Ángulo Abierto', [
      { t: 'Evaluación Preventiva en Paciente > 40-50 Años con Factores de Riesgo', s: 'Factores: antecedente familiar de 1.° grado, raza negra, miopía elevada, diabetes o PIO > 21 mmHg' },
      { k: 'split', q: '¿Fondo de Ojo con Aumento de la Excavación Papilar (Cociente E/P > 0.5 o Asimetría)?', s: 'Sospecha de neuropatía óptica glaucomatosa progresiva asintomática', ll: 'Papila con excavación normal (E/P < 0.3)', rl: 'Excavación patológica > 0.5 o rechazo nasal de vasos',
        left: { t: 'Control Periódico Preventivo en APS', s: 'Reevaluación de PIO y fondo de ojo cada 2 a 3 años según factores de riesgo', type: 'acc' },
        right: { t: 'Sospecha Fundada de Glaucoma Crónico', s: 'Campimetría computarizada + OCT de fibras nerviosas + Tonometría aplanática por especialista', type: 'warn' },
        ll: 'nervio óptico indemne', rl: 'daño glaucomatoso sospechado' },
      { t: 'Tratamiento Médico Inicial de Elección', s: 'Análogos de Prostaglandinas tópicos (Latanoprost / Bimatoprost 1 gota nocturna) para aumentar drenaje uveoescleral', type: 'dec', al: 'fármaco de primera línea', from: 'right' },
    ]),
    contexto: 'El glaucoma crónico simple o de ángulo abierto es la segunda causa de ceguera en el mundo y la primera causa de ceguera irreversible. Su mayor peligro radica en que es 100% ASINTOMÁTICO durante décadas. Cuando el paciente nota la pérdida de visión, ya ha perdido más del 50% de las fibras del nervio óptico y presenta visión tubular irreversible.',
    contentSections: [
      {
        subhead: '1. Definición, Epidemiología y Factores de Riesgo',
        paragraphs: [
          'Es una neuropatía óptica crónica, progresiva y multifactorial, caracterizada por la pérdida adquirida de células ganglionares retinianas y sus axones, con cambios morfológicos típicos en la cabeza del nervio óptico y defectos concordantes en el campo visual.<br>' +
          '• <strong>El ángulo iridocorneal está anatómicamente ABIERTO</strong>, pero existe una disfunción microscópica y esclerosis de la malla trabecular que incrementa la resistencia al drenaje del acuoso.<br>' +
          '• <strong>Factores de riesgo principales:</strong><br>' +
          '- <strong>Presión intraocular elevada (> 21 mmHg):</strong> Principal factor modificable, aunque un 30-40% de los pacientes tienen "glaucoma de presión normal".<br>' +
          '- <strong>Edad avanzada (> 50-60 años)</strong> y <strong>antecedentes familiares de primer grado</strong> (padres/hermanos con glaucoma multiplican el riesgo por 4 a 9).<br>' +
          '- <strong>Raza negra / afrodescendientes</strong> (mayor incidencia y evolución más rápida y agresiva).<br>' +
          '- Miopía magna, córnea central delgada (< 520 micras) y diabetes mellitus.',
        ],
      },
      {
        subhead: '2. Clínica Asintomática y Semiología del Fondo de Ojo',
        paragraphs: [
          '• <strong>Asintomático:</strong> No duele, no da ojo rojo, no altera los reflejos pupilares al inicio y NO reduce la agudeza visual central hasta fases terminales.<br>' +
          '• <strong>Pérdida del Campo Visual:</strong> Inicia con escotomas aislados paracentrales (escotoma de Bjerrum) o escalón nasal, que coalescen formando una <strong>visión en túnel o tubular</strong> progresiva.<br>' +
          '• <strong>Semiología de la Papila en Fondo de Ojo (Signos de Alarma para APS):</strong><br>' +
          '1. <strong>Aumento de la excavación papilar:</strong> Relación excavación/papila (E/P) mayor a 0.5 (normalmente es menor a 0.3-0.4).<br>' +
          '2. <strong>Asimetría interocular de excavación mayor a 0.2</strong> entre ambos ojos.<br>' +
          '3. Muescas o adelgazamiento localizado del anillo neurorretiniano, especialmente en polos inferior y superior (violación de la regla ISNT: el anillo normal es más grueso Inferior > Superior > Nasal > Temporal).<br>' +
          '4. Rechazo nasalizado de los vasos sanguíneos y hemorragias en astilla en el borde papilar.',
        ],
      },
      {
        subhead: '3. Diagnóstico Confirmatorio y Manejo Farmacológico Escalonado',
        paragraphs: [
          '• <strong>Confirmación:</strong> Corresponde al oftalmólogo mediante <strong>Campimetría Computarizada Humphrey</strong> (certifica el defecto funcional) y <strong>OCT de fibras nerviosas peripapilares</strong> (cuantifica el daño estructural axonal precoz).<br>' +
          '• <strong>Tratamiento Médico de Primera Línea:</strong><br>' +
          '- <strong>Análogos de Prostaglandinas tópicos (Latanoprost 0.005%, Bimatoprost, Travoprost):</strong> Fármaco de elección. Se administra <strong>1 sola gota en la noche</strong>. Mecanismo: aumenta el flujo de salida uveoescleral no convencional. Efectos adversos locales: hiperemia conjuntival, oscurecimiento permanente del iris (pigmentación marrón) y crecimiento de pestañas (hipertricosis).<br>' +
          '- <strong>Betabloqueadores tópicos (Timolol al 0.5%):</strong> Segunda opción o coadyuvante. Reduce la síntesis de humor acuoso. Contraindicado en EPOC, asma o bloqueo cardíaco.<br>' +
          '• <strong>Cirugía:</strong> Trabeculectomía o implante de dispositivos de drenaje si hay progresión del daño pese a tratamiento médico máximo.',
        ],
      },
      {
        subhead: '4. Glaucoma Congénito',
        paragraphs: [
          'El <strong>glaucoma congénito primario</strong> es una malformación del ángulo camerular (goniodisgenesia) que eleva la presión intraocular en el <strong>recién nacido y el lactante (primeros 3 años)</strong>. Es más frecuente en varones y a menudo bilateral.<br>• <strong>Sospecha (nivel Sospecha):</strong> tríada clásica de <strong>epífora, fotofobia y blefaroespasmo</strong>, junto a una córnea <strong>grande y opaca</strong> (megalocórnea con diámetro mayor a 11 mm en el recién nacido y 12 mm al año), <strong>buftalmos</strong> (ojo agrandado «de buey»), edema corneal que da aspecto lechoso o azulado y estrías de Haab (rupturas de la membrana de Descemet). Un lactante «con ojos hermosos y grandes» y lagrimeo constante no es dacrioestenosis hasta descartar glaucoma.<br>• <strong>Conducta inicial y derivación:</strong> es una <strong>urgencia oftalmológica pediátrica</strong>: derivar de inmediato para examen bajo anestesia (tonometría, gonioscopía, medición del diámetro corneal y de la excavación papilar). Los colirios hipotensores solo son un puente; el <strong>tratamiento definitivo es quirúrgico</strong> (goniotomía o trabeculotomía). Sin tratamiento oportuno produce ceguera y ambliopía irreversibles.',
        ],
      },
      {
        subhead: '5. Campo Visual, Oftalmoscopía Directa e Instilación de Colirios',
        paragraphs: [
          '<strong>Campo visual (examen «Interpreta y emplea»):</strong> mide la extensión de la visión periférica de cada ojo. En APS se hace por <strong>confrontación</strong> (tamizaje grosero) y el oftalmólogo lo cuantifica con <strong>campimetría computarizada (Humphrey)</strong>.<br>• <strong>Cómo leer el informe:</strong> primero la <strong>confiabilidad</strong> (pérdidas de fijación, falsos positivos y falsos negativos menores a 20%; un examen poco confiable no se interpreta), luego el mapa de umbrales en escala de grises (zonas oscuras = sensibilidad perdida), y los índices globales: <strong>desviación media (MD)</strong>, que mide el descenso difuso, y <strong>desviación estándar del patrón (PSD)</strong>, que aumenta cuando hay defectos localizados.<br>• <strong>Patrones que se deben reconocer:</strong> glaucoma = escotoma arqueado de Bjerrum, escalón nasal y luego visión tubular, con respeto del campo central hasta el final; <strong>hemianopsia bitemporal</strong> = lesión del quiasma (adenoma hipofisario, craneofaringioma); <strong>hemianopsia homónima</strong> = lesión retroquiasmática; <strong>escotoma central</strong> = neuritis óptica o maculopatía; <strong>defecto altitudinal</strong> = isquemia del nervio óptico u oclusión de rama arterial. El campo visual alterado y concordante con la excavación papilar confirma el glaucoma y sirve para el <strong>seguimiento</strong> (progresión).',
          '<strong>Oftalmoscopía directa (procedimiento «Realizar»):</strong><br>1. Sala en penumbra; si el paciente no tiene ángulo estrecho ni requiere vigilancia pupilar neurológica, <strong>dilatar con tropicamida 1%</strong> y esperar 15 a 20 minutos. Pedirle que fije la vista en un punto lejano.<br>2. Examinar el <strong>ojo derecho del paciente con su ojo derecho y la mano derecha</strong> (y el izquierdo con el izquierdo), apoyando la mano libre en la frente del paciente; ajustar el disco de lentes del oftalmoscopio a 0 y compensar el vicio de refracción de ambos.<br>3. Desde unos <strong>30 cm y 15° temporal</strong> buscar el <strong>reflejo rojo</strong>; acercarse hasta 2 a 3 cm siguiendo el reflejo (una opacidad lo interrumpe: catarata, hemorragia vítrea).<br>4. Seguir un vaso retiniano hasta su origen en la <strong>papila</strong>: color, bordes, relación excavación/papila, pulso venoso espontáneo; luego examinar los vasos (calibre, cruces, relación arteria/vena 2:3), la retina en los cuatro cuadrantes y finalmente la <strong>mácula</strong> (un diámetro papilar hacia temporal; pedir que mire la luz).<br>Hallazgos clave: excavación mayor a 0,5 o asimétrica (glaucoma), hemorragias y exudados, neovasos, borramiento de bordes papilares y desprendimiento.',
          '<strong>Instilación de colirios (procedimiento «Realizar»):</strong> es el tratamiento tópico de base del glaucoma y se debe enseñar al paciente para asegurar adherencia.<br>• Lavarse las manos, verificar el colirio y agitar si es suspensión; paciente sentado con el <strong>cuello extendido y la vista hacia arriba</strong>.<br>• Descender el <strong>párpado inferior</strong> con un dedo formando un bolsillo y dejar caer <strong>una sola gota</strong> en el fondo de saco inferior, sin tocar con el gotario el ojo, las pestañas ni la piel.<br>• Cerrar suavemente el ojo (no apretar) y <strong>comprimir el canto interno (saco lagrimal) durante 1 a 2 minutos</strong>: disminuye la absorción sistémica, sobre todo del timolol (bradicardia, broncoespasmo), y aumenta el efecto local.<br>• Entre dos colirios esperar <strong>5 minutos</strong> (el segundo lava al primero); los ungüentos van al final. Los análogos de prostaglandinas se aplican una vez en la noche. Retirar lentes de contacto antes (algunos conservantes se acumulan en ellos), y desechar el envase 4 semanas después de abierto.',
        ],
      },
    ],
    table: {
      title: 'Comparación: Glaucoma Crónico de Ángulo Abierto vs Glaucoma Agudo de Ángulo Cerrado',
      headers: ['Criterio', 'Glaucoma Crónico de Ángulo Abierto', 'Glaucoma Agudo de Ángulo Cerrado'],
      rows: [
        ['Prevalencia', '90% de todos los glaucomas (muy común)', '10% de los casos (emergencia infrecuente)'],
        ['Comienzo y síntomas', 'Totalmente ASINTOMÁTICO durante décadas', 'Inicio BRUSCO, cefalea intensa, náuseas y vómitos'],
        ['Aspecto externo del ojo', 'Completamente BLANCO, normal', 'OJO ROJO periquerático intenso'],
        ['Agudeza visual central', 'Normal 20/20 hasta etapas terminales', 'Caída visual SEVERA e inmediata'],
        ['Campo visual', 'Pérdida periférica concéntrica (visión túnel)', 'Visión borrosa difusa por edema corneal'],
        ['Presión intraocular', 'Levemente elevada (22 a 32 mmHg) o normal', 'Disparada masivamente (> 50 a 80 mmHg) · Ojo pétreo'],
        ['Fondo de ojo característico', 'Excavación papilar patológica aumentada (> 0.5)', 'Edema difuso que impide ver el fondo con claridad'],
        ['Tratamiento de elección', 'Colirios de por vida (Latanoprost nocturno)', 'Manitol EV + Acetazolamida + Iridotomía láser YAG'],
      ],
    },
    vignette: 'Hombre de 56 años acude a control de salud en el CESFAM por antecedente de hipertensión arterial bien controlada. No refiere ningún síntoma visual y lee perfectamente. Su hermano mayor fue diagnosticado de glaucoma avanzado hace un año. Al examen oftalmológico básico: agudeza visual 20/20 en ambos ojos. Al fondo de ojo se observa papila rosada con una excavación papilar de 0.7 en el ojo derecho y de 0.4 en el ojo izquierdo, con rechazo de los vasos hacia el sector nasal en el ojo derecho.',
    explicacion: 'El paciente presenta hallazgos de alta sospecha de Glaucoma Crónico de Ángulo Abierto: antecedente de primer grado directo (hermano), agudeza visual central perfectamente conservada (típica del carácter silencioso de la enfermedad) y un fondo de ojo patológico con excavación papilar aumentada (> 0.5) y asimetría interocular significativa (> 0.2 entre ambos ojos) con rechazo nasal de vasos. La conducta correcta es derivar a oftalmología para tonometría aplanática, campimetría computarizada y OCT, iniciando análogos de prostaglandinas si se confirma el diagnóstico.',
    keyPoints: [
      'El glaucoma crónico es asintomático y no altera la agudeza visual central hasta fases terminales.',
      'El signo de sospecha en APS es el aumento de la excavación papilar (>0.5) o asimetría interocular (>0.2).',
      'La pérdida de campo visual es insidiosa, periférica y avanza hacia visión en túnel.',
      'El tratamiento médico de primera línea son los Análogos de Prostaglandinas tópicos (Latanoprost nocturno).',
      'Los análogos de prostaglandinas oscurecen el iris y aumentan el largo de las pestañas.',
      'El antecedente familiar en padres o hermanos es el factor predictivo más fuerte para pesquisa activa.',
    ],
    questions: [
      {
        stem: 'Un hombre de 58 años, asintomático, acude a chequeo oftalmológico por tener un padre ciego por glaucoma. Su agudeza visual es 20/20 bilateral. En el fondo de ojo se constata una relación excavación/papila de 0.7 en el ojo derecho y 0.65 en el izquierdo, con adelgazamiento del anillo neurorretiniano inferior. La tonometría marca 24 mmHg en ambos ojos y la campimetría computarizada revela un escalón nasal en ojo derecho. ¿Cuál es el tratamiento tópico de primera línea de elección para este paciente?',
        options: [
          { id: 'A', text: 'Pilocarpina colirio al 2% cada 6 horas' },
          { id: 'B', text: 'Latanoprost colirio al 0.005% una vez al día en la noche' },
          { id: 'C', text: 'Acetazolamida oral 250 mg cada 8 horas en forma indefinida' },
          { id: 'D', text: 'Atropina colirio al 1% cada 12 horas' },
          { id: 'E', text: 'Nafazolina colirio cada 8 horas' },
        ],
        correcta: 'B',
        explicacion: 'El diagnóstico es Glaucoma Crónico de Ángulo Abierto confirmado por la tríada de hipertensión ocular (> 21 mmHg), daño estructural en la papila óptica (excavación > 0.6 con muesca inferior) y defecto campimétrico concordante (escalón nasal). El tratamiento médico de primera línea avalado por guías internacionales y del MINSAL son los análogos de prostaglandinas tópicos (como latanoprost, bimatoprost o travoprost) administrados en 1 sola dosis nocturna. Tienen la mayor potencia hipotensora con mínimos efectos sistémicos y excelente adherencia. Los diuréticos orales (C) no se usan en tratamientos crónicos por sus efectos adversos metabólicos. La atropina (D) está contraindicada. Perla. Latanoprost nocturno es el fármaco de elección indiscutido en el glaucoma crónico.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.1.002',
      },
      {
        stem: '¿Cuál es la razón principal por la cual el glaucoma crónico de ángulo abierto suele diagnosticarse tardíamente en la práctica clínica ambulatoria?',
        options: [
          { id: 'A', text: 'Cursa con dolor ocular intermitente que el paciente confunde con fatiga visual' },
          { id: 'B', text: 'La pérdida del campo visual comienza en la periferia respetando la agudeza visual central hasta fases muy avanzadas' },
          { id: 'C', text: 'Produce opacidad temprana de la córnea que impide la visión del fondo de ojo' },
          { id: 'D', text: 'Se asocia de forma constante a episodios de ojo rojo bilateral evanescente' },
          { id: 'E', text: 'Porque no existen tratamientos médicos capaces de detener su evolución' },
        ],
        correcta: 'B',
        explicacion: 'La naturaleza silente del glaucoma crónico de ángulo abierto radica en su patrón de destrucción axonal: las fibras del nervio óptico que primero se lesionan corresponden a las áreas periféricas de la retina (produciendo escotomas aislados y constricción progresiva concéntrica del campo visual), mientras que el haz papilomacular que provee la visión central de alta resolución permanece intacto hasta las fases terminales. El paciente continúa leyendo la línea de 20/20 en la tabla de Snellen sin advertir que su campo visual se ha reducido a un "tubo estrecho", consultando solo cuando el daño es masivo e irreversible. Trampa. Creer que una agudeza visual de 20/20 descarta glaucoma crónico es el error más frecuente en medicina general.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.1.002',
      },
    ],
  },

  {
    id: 'oftal-08',
    classId: 'oftal-08',
    tier: 2,
    blockNum: 2,
    blockName: 'Glaucoma & Patología del Cristalino',
    topicLabel: '15.8',
    title: 'Cataratas: Diagnóstico, Indicación Quirúrgica y Facoemulsificación',
    perfilCode: '2.01.1.005',
    dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Garantía Explícita en Salud (GES N° 21): Tratamiento Quirúrgico de Cataratas',
    reconstrucciones: 'EUNACOM 2015 (Q#21) · EUNACOM Diciembre 2019 (Q#74)',
    frecuencia: 'Muy alta · Primera causa de ceguera reversible; técnica de facoemulsificación y plazos GES',
    diagram: flow('Algoritmo Diagnóstico y Quirúrgico de Cataratas en Adultos', [
      { t: 'Paciente Adulto Mayor con Disminución Lenta, Progresiva e Indolora de la Visión', s: 'Síntomas: deslumbramiento con luces de noche, fotofobia y miopización paradójica' },
      { k: 'split', q: '¿Pérdida del Reflejo Rojo Pupilar en Oftalmoscopía Directa a 30-40 cm?', s: 'Confirmación clínica en atención primaria de opacidad del cristalino', ll: 'Reflejo rojo normal bilateral y simétrico', rl: 'Reflejo rojo atenuado, asimétrico o con manchas negras',
        left: { t: 'Descartar Otras Causas de Baja Visual', s: 'Evaluar vicio de refracción, degeneración macular senil o patología de retina', type: 'acc' },
        right: { t: 'Diagnóstico Clínico de Catarata Confirmado', s: 'Derivación para Cirugía de Facoemulsificación con Implante de Lente Intraocular (LIO)', type: 'warn' },
        ll: 'cristalino transparente', rl: 'opacidad de cristalino' },
      { t: 'Garantía Explícita en Salud (GES N° 21)', s: 'Confirmación diagnóstica en 180 días · Cirugía en 90 días desde confirmación · Criterio: agudeza visual ≤ 0.3', type: 'dec', al: 'notificación ges obligatoria', from: 'right' },
    ]),
    contexto: 'La catarata es la opacificación patológica del cristalino y constituye la principal causa de ceguera reversible a nivel global y en Chile. El médico de APS debe realizar la confirmación clínica mediante la prueba del reflejo rojo pupilar, saber cuándo indicar la derivación quirúrgica y activar las garantías legales del problema de salud GES N° 21.',
    contentSections: [
      {
        subhead: '1. Etiología y Mecanismos de Opacificación del Cristalino',
        paragraphs: [
          'El cristalino normal es una lente biconvexa avascular y perfectamente transparente. Con la edad o agresiones metabólicas, las proteínas cristalinianas sufren desnaturalización, agregación y entrecruzamiento oxidativo.<br>' +
          '• <strong>Catarata Senil (más del 90%):</strong> Fenómeno degenerativo del envejecimiento. Se clasifica en:<br>' +
          '- <em>Nuclear:</em> Esclerosis del núcleo que adquiere tono amarillento-pardo. Típica causa de miopización transitoria.<br>' +
          '- <em>Cortical:</em> Opacidades radiales en cuña ("radios de rueda") en la corteza cristaliniana.<br>' +
          '- <em>Subcapsular posterior:</em> Placa opaca inmediatamente anterior a la cápsula posterior. Causa una pérdida visual desproporcionadamente rápida y gran deslumbramiento diurno.<br>' +
          '• <strong>Cataratas Secundarias y Especiales:</strong><br>' +
          '- <strong>Corticosteroides:</strong> El uso prolongado de corticoides tópicos o sistémicos induce típicamente <strong>catarata subcapsular posterior</strong> en personas jóvenes.<br>' +
          '- <strong>Diabetes Mellitus:</strong> Cataratas corticales juveniles o aceleración de la senil por acúmulo de sorbitol intracelular.<br>' +
          '- Traumáticas (opacidad en roseta o estrella tras contusión) y Congénitas (infecciones TORCH: rubéola congénita).',
        ],
      },
      {
        subhead: '2. Clínica Cardinal y Evaluación en Atención Primaria',
        paragraphs: [
          '• <strong>Disminución de agudeza visual lenta, bilateral y progresiva, estrictamente INDOLORA</strong>.<br>' +
          '• <strong>Deslumbramiento y fotofobia:</strong> Molestia muy marcada ante luces directas, especialmente al conducir de noche frente a faros de otros vehículos.<br>' +
          '• <strong>Miopización transitoria ("segunda visión"):</strong> El aumento de densidad y poder refractivo del núcleo del cristalino miopiza el ojo, permitiendo al anciano présbita "volver a leer sin anteojos de cerca", lo que a menudo ilusiona al paciente antes de que la visión se degrade completamente.<br>' +
          '• <strong>Examen de Elección en APS: TEST DEL REFLEJO ROJO PUPILAR</strong>.<br>' +
          'A un metro de distancia con el oftalmoscopio directo iluminando ambas pupilas: el cristalino normal produce un brillo rojo-anaranjado homogéneo simétrico. La catarata produce <strong>atenuación difusa del brillo o manchas oscuras que recortan el reflejo rojo</strong>.',
        ],
      },
      {
        subhead: '3. Tratamiento Quirúrgico (Facoemulsificación) y Garantía GES N° 21',
        paragraphs: [
          'No existe ningún colirio ni tratamiento farmacológico que retrase, prevenga o revierta la catarata. El tratamiento es <strong>100% QUIRÚRGICO</strong>.<br>' +
          '• <strong>Indicación quirúrgica:</strong> Antiguamente se esperaba a que la catarata "madurara". Hoy la indicación la define el <strong>impacto en la calidad de vida y autonomía del paciente</strong> (dificultad para leer, conducir, riesgo de caídas) o agudeza visual corregida ≤ 0.3 (20/60).<br>' +
          '• <strong>Técnica de Elección: Facoemulsificación</strong>.<br>' +
          'Microincisión corneal autosellante de 2.2 a 2.7 mm, apertura circular de la cápsula anterior (capsulorrexis), fragmentación del núcleo con sonda ultrasónica, aspiración de la corteza e <strong>implante de una Lente Intraocular (LIO) plegable dentro del saco capsular</strong> bajo anestesia tópica ambulatoria.<br>' +
          '• <strong>Garantía GES N° 21 (Tratamiento Quirúrgico de Cataratas):</strong><br>' +
          'Garantiza confirmación diagnóstica en 180 días desde la sospecha, y cirugía en un plazo máximo de <strong>90 días</strong> tras la indicación quirúrgica en ojo con agudeza visual corregida igual o menor a 0.3.',
        ],
      },
      {
        subhead: '4. Disminución de la Visión: Pérdida Lenta frente a Súbita',
        paragraphs: [
          'Ante una «mala visión» el primer paso es clasificar el <strong>ritmo de instalación</strong>, porque define la urgencia (nivel Específico / tratamiento Inicial / seguimiento Derivar).<br>• <strong>Pérdida lenta y progresiva (semanas a años), indolora:</strong> vicios de refracción (corrige con estenopeico), <strong>catarata</strong> (deslumbramiento, reflejo rojo moteado), <strong>glaucoma crónico</strong> (campo periférico), <strong>degeneración macular seca</strong> y retinopatía diabética: derivación programada.<br>• <strong>Pérdida súbita (minutos a horas) indolora, ojo blanco:</strong> <strong>oclusión de la arteria central de la retina</strong> (mancha rojo cereza, DPAR), <strong>oclusión de la vena central</strong> (hemorragias en «tormenta de nieve»), <strong>desprendimiento de retina</strong> (cortina y fotopsias), hemorragia vítrea (lluvia de moscas), neuropatía óptica isquémica (en mayores de 50 años pensar en <strong>arteritis de células gigantes</strong>: VHS y PCR altas, cefalea y claudicación mandibular, corticoide en dosis altas sin esperar la biopsia) y DMAE húmeda (distorsión de las líneas rectas).<br>• <strong>Pérdida súbita dolorosa y ojo rojo:</strong> glaucoma agudo, queratitis, uveítis, endoftalmitis. <strong>Pérdida transitoria monocular</strong> (amaurosis fugaz, telón que baja y sube en minutos): ateroma carotídeo o embolia, se estudia como un AIT.<br>• Siempre medir agudeza visual con y sin estenopeico, buscar DPAR y mirar el fondo de ojo. <strong>Toda pérdida súbita es urgencia oftalmológica</strong> (primeras horas), salvo que sea claramente refractiva.',
        ],
      },
    ],
    table: {
      title: 'Subtipos Anatómicos de Catarata y Características Clave',
      headers: ['Subtipo de Catarata', 'Localización en el Cristalino', 'Etiología / Factor Asociado', 'Efecto Clínico Típico'],
      rows: [
        ['Nuclear', 'Núcleo central del cristalino', 'Envejecimiento senil fisiológico', 'Miopización paradójica ("vuelve a leer de cerca")'],
        ['Cortical', 'Corteza periférica (radios de rueda)', 'Senil, diabetes mellitus', 'Deslumbramiento nocturno con luces de autos'],
        ['Subcapsular Posterior', 'Cara anterior de la cápsula posterior', 'USO DE CORTICOIDES, diabetes, jóvenes', 'Caída visual rápida diurna; mala visión con miosis'],
        ['Traumática', 'Fibras subcapsulares / ecuador', 'Contusión ocular o herida penetrante', 'Opacidad en roseta estrellada monocular'],
      ],
    },
    vignette: 'Mujer de 72 años, autovalente, consulta en su CESFAM por visión borrosa bilateral de 1 año de evolución que le dificulta ver televisión y reconocer las caras de sus nietos en la calle. Comenta que de noche le molestan enormemente las luces de los autos pero que, curiosamente, ahora puede leer el periódico sin usar sus lentes de aumento para cerca. No refiere dolor ni ojo rojo. Al examen: agudeza visual 20/70 en ambos ojos. La oftalmoscopía a 50 cm evidencia una atenuación marcada del reflejo rojo pupilar en ambos ojos.',
    explicacion: 'El cuadro de disminución lenta, progresiva e indolora de la agudeza visual en una paciente mayor, acompañado de deslumbramiento nocturno, fenómeno de miopización paradójica ("segunda visión" por esclerosis nuclear del cristalino) y atenuación bilateral del reflejo rojo pupilar es la presentación clínica clásica de Cataratas Seniles. La conducta médica correcta en APS es realizar la Notificación GES N° 21 (Tratamiento Quirúrgico de Cataratas) y derivar a oftalmología para la realización de facoemulsificación con implante de lente intraocular plegable.',
    keyPoints: [
      'La catarata es la causa número uno de ceguera reversible en Chile y en el mundo.',
      'Cursa con baja visual lenta, progresiva e indolora, con deslumbramiento y pérdida del reflejo rojo.',
      'La esclerosis nuclear produce miopización temporal ("el paciente vuelve a leer sin lentes de cerca").',
      'El uso crónico de corticoides (tópicos o sistémicos) induce catarata subcapsular posterior en jóvenes.',
      'El tratamiento definitivo es exclusivamente quirúrgico: Facoemulsificación con implante de lente intraocular (LIO).',
      'El problema GES N° 21 garantiza la cirugía en menos de 90 días desde la confirmación diagnóstica.',
    ],
    questions: [
      {
        stem: 'Un paciente de 65 años, con antecedentes de asma bronquial en tratamiento crónico con corticoides inhalados y pulsos orales frecuentes de prednisona, consulta por disminución rápida de la agudeza visual en ambos ojos de 6 meses de evolución, que le molesta especialmente a la luz del sol brillante. Al examen físico se aprecia una agudeza visual de 20/80 bilateral y en la oftalmoscopía se observa una opacidad densa y granular situada en el polo posterior del cristalino, justo por delante de la cápsula. ¿Cuál es el tipo de catarata más probablemente presente en este paciente?',
        options: [
          { id: 'A', text: 'Catarata cortical anterior' },
          { id: 'B', text: 'Catarata subcapsular posterior' },
          { id: 'C', text: 'Catarata nuclear dura' },
          { id: 'D', text: 'Catarata traumática en roseta' },
          { id: 'E', text: 'Catarata congénita zonular' },
        ],
        correcta: 'B',
        explicacion: 'El uso prolongado o repetido de corticosteroides (tanto sistémicos como tópicos) es la causa farmacológica más frecuente y característica de catarata subcapsular posterior. Esta variedad se ubica en el eje óptico nodal posterior, por lo que produce una pérdida visual precoz y marcada que empeora con la miosis pupilar diurna (luz solar directa o lectura). La catarata nuclear (C) se asocia al envejecimiento senil clásico. La traumática (D) es monocular y en roseta. Perla. Paciente usuario crónico de corticoides con baja visual rápida tiene catarata subcapsular posterior.',
        recTag: 'Banco Oficial AEE · Perfil V3 2.01.1.005',
      },
      {
        stem: '¿Cuál es el procedimiento quirúrgico estándar de primera elección en la actualidad para el tratamiento de la catarata senil en el sistema de salud chileno?',
        options: [
          { id: 'A', text: 'Extracción intracapsular con crioquinectomía dejando el ojo afáquico' },
          { id: 'B', text: 'Facoemulsificación por ultrasonido con implante de lente intraocular plegable en saco capsular' },
          { id: 'C', text: 'Iridotomía periférica con láser YAG bilateral' },
          { id: 'D', text: 'Trabeculectomía con antimetabolitos' },
          { id: 'E', text: 'Vitrectomía pars plana posterior con intercambio gas-líquido' },
        ],
        correcta: 'B',
        explicacion: 'La técnica estándar de elección a nivel mundial y cubierta por la garantía GES N° 21 en Chile es la Facoemulsificación con Implante de Lente Intraocular (LIO). Mediante incisiones corneales milimétricas (2.2 mm), se realiza capsulorrexis circular anterior y una sonda de ultrasonido fragmenta y aspira el núcleo y la corteza cristaliniana opacificada, conservando íntegra la cápsula posterior para insertar en su interior una lente intraocular artificial plegable que restituye la refracción del ojo. La extracción intracapsular (A) está en desuso por su alta tasa de complicaciones. La iridotomía (C) es para glaucoma agudo. Perla. La técnica estándar de catarata es siempre facoemulsificación con implante de LIO.',
        recTag: 'Banco Oficial AEE · Perfil V3 2.01.1.005',
      },
    ],
  },

  {
    id: 'oftal-09',
    classId: 'oftal-09',
    tier: 2,
    blockNum: 2,
    blockName: 'Glaucoma & Patología del Cristalino',
    topicLabel: '15.9',
    title: 'Vicios de Refracción, Presbicia y Ambliopía en Niños',
    perfilCode: '6.02.2.004',
    dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Garantía Explícita en Salud: Vicios de Refracción en personas de 65 años y más (GES N° 40) y Estrabismo en menores de 9 años (GES N° 41)',
    reconstrucciones: 'EUNACOM 2014 (Q#95) · EUNACOM Diciembre 2017 (Q#51)',
    frecuencia: 'Alta rentabilidad · Óptica fisiológica, prueba del agujero estenopeico y prevención de ambliopía',
    diagram: flow('Algoritmo de Vicios de Refracción y Prevención de Ambliopía', [
      { t: 'Paciente con Disminución de Agudeza Visual sin Ojo Rojo', s: 'Paso 1: Realizar prueba de Agudeza Visual con Agujero Estenopeico en box de APS' },
      { k: 'split', q: '¿La Agudeza Visual Mejora Claramente al Mirar por el Agujero Estenopeico?', s: 'Diferenciación patognomónica entre vicio de refracción y patología orgánica ocular', ll: 'SÍ MEJORA (Corrige a 20/20 o mejora > 2 líneas)', rl: 'NO MEJORA (La visión se mantiene igual o empeora)',
        left: { t: 'VICIO DE REFRACCIÓN PURO', s: 'Miopía, Hipermetropía o Astigmatismo · Prescripción de lentes ópticos / Derivación a tecnólogo', type: 'acc' },
        right: { t: 'PATOLOGÍA ORGÁNICA OCULAR O AMBLIOPÍA', s: 'Opacidad de medios (córnea/catarata/vítreo) o daño de retina/nervio óptico · Derivación oftalmológica', type: 'warn' },
        ll: 'mejora con estenopeico', rl: 'no mejora con estenopeico' },
      { t: 'Alerta Crítica Infantil: Ambliopía (< 7-8 años)', s: 'Pesquisa obligatoria de estrabismo y anisometropía: Tratamiento con parche oclusivo en ojo sano antes de que cierre la plasticidad visual', type: 'dec', al: 'urgencia del desarrollo', from: 'right' },
    ]),
    contexto: 'Las ametropías constituyen la causa más común de consulta visual. La prueba del agujero estenopeico es la herramienta de cabecera más económica y poderosa del médico general para confirmar que una baja de visión es puramente refractiva. En pediatría, la pesquisa precoz de vicios asimétricos y estrabismo es vital para prevenir la ambliopía ("ojo flojo"), cuya ventana de recuperación se extingue irreversiblemente a los 7-8 años.',
    contentSections: [
      {
        subhead: '1. Óptica de las Ametropías (Miopía, Hipermetropía y Astigmatismo)',
        paragraphs: [
          'En el ojo emétrope (normal), los rayos luminosos paralelos convergen exactamente sobre la retina (fóvea) sin necesidad de acomodación.<br>' +
          '• <strong>Miopía:</strong> El globo ocular es <strong>anatómicamente demasiado largo (diámetro anteroposterior aumentado)</strong> o la córnea tiene excesiva potencia dióptrica. Los rayos convergen <strong>por delante de la retina</strong>. Síntoma: <strong>mala visión de lejos con excelente visión de cerca</strong>. Corrección: <strong>Lentes divergentes, cóncavos o negativos (-)</strong>.<br>' +
          '• <strong>Hipermetropía:</strong> El globo ocular es <strong>demasiado corto</strong> o la córnea es plana. Los rayos convergen teóricamente <strong>por detrás de la retina</strong>. El paciente joven compensa acomodando activamente con el músculo ciliar, lo que produce <strong>astenopía acomodativa</strong> (cefalea frontal, fatiga ocular y ardor al final del día). Corrección: <strong>Lentes convergentes, convexos o positivos (+)</strong>. Riesgo: ángulo estrecho y glaucoma agudo.<br>' +
          '• <strong>Astigmatismo:</strong> Curvatura corneal asimétrica (córnea ovalada con forma de balón de rugby en vez de esfera). Los rayos forman dos focos distintos. Causa visión borrosa tanto de lejos como de cerca. Corrección: <strong>Lentes cilíndricos o tóricos</strong>.',
        ],
      },
      {
        subhead: '2. Presbicia y la Prueba del Agujero Estenopeico',
        paragraphs: [
          '• <strong>Presbicia:</strong> Proceso fisiológico e inevitable del envejecimiento que se inicia a partir de los <strong>40 a 45 años</strong>. Se debe a la <strong>pérdida progresiva de elasticidad de la cápsula del cristalino y esclerosis del núcleo</strong>, perdiendo la capacidad de cambiar de forma para acomodar de cerca.<br>' +
          'Clínica: El paciente aleja los brazos para poder leer letras pequeñas ("síndrome de los brazos cortos"). Corrección: Lentes convexos positivos (+) graduados exclusivamente para visión cercana.<br>' +
          '• <strong>Agujero Estenopeico:</strong> Disco opaco con un orificio central de 1.0 a 1.5 mm. Al hacer mirar al paciente a través de él, solo pasan los rayos centrales paralelos al eje óptico, eliminando la aberración de refracción periférica. <strong>Si la agudeza visual MEJORA, el problema es un vicio de refracción</strong>. Si no mejora, el defecto es una lesión orgánica (catarata, degeneración macular, neuritis óptica) o ambliopía.',
        ],
      },
      {
        subhead: '3. Ambliopía Infantil y Estrabismo (GES N° 41)',
        paragraphs: [
          'La <strong>Ambliopía ("ojo flojo o vago")</strong> es la disminución unilateral o bilateral de la agudeza visual sin lesión orgánica detectable, debida a una <strong>estimulación visual inadecuada durante el período crítico del desarrollo neuronal cortical</strong>.<br>' +
          '• <strong>Causas principales:</strong> 1) Estrabismo (estrabismo convergente/divergente donde la corteza suprime la imagen desviada para evitar diplopía), 2) Anisometropía (diferencia de refracción significativa entre ambos ojos: el cerebro procesa solo el ojo claro y apaga el borroso), 3) Privación sensorial (catarata congénita, ptosis palpebral completa).<br>' +
          '• <strong>Ventana Terapéutica Crítica:</strong> La plasticidad neuronal visual madura hasta los <strong>7 a 8 años de edad</strong>. Si la ambliopía no se corrige antes de esta edad, la ceguera funcional monocular es <strong>PERMANENTE E IRREVERSIBLE DE POR VIDA</strong>.<br>' +
          '• <strong>Tratamiento de Elección:</strong> Corrección del vicio con lentes + <strong>Parche oclusivo directo sobre el ojo SANO</strong> durante varias horas al día, forzando a la corteza cerebral a utilizar y conectar las vías neuronales del ojo ambliope.',
        ],
      },
      {
        subhead: '4. Tamizaje Visual en el Niño y en el Adulto',
        paragraphs: [
          '<strong>Examen visual preventivo en niños:</strong> el objetivo es detectar ambliopía, estrabismo, vicios de refracción y patología grave (catarata congénita, retinoblastoma, glaucoma) <strong>dentro del período crítico, antes de los 7 a 8 años</strong>. En el control de salud infantil de APS se hace de manera escalonada:<br>• <strong>Recién nacido y primer año:</strong> inspección ocular, seguimiento de la luz o la cara, <strong>reflejo rojo bilateral</strong> y simetría del reflejo corneal.<br>• <strong>6 meses a 3 años:</strong> test de Hirschberg y cover test; un estrabismo que persiste después de los 4 a 6 meses de vida <strong>nunca es normal</strong>.<br>• <strong>3 a 4 años en adelante:</strong> medición de la <strong>agudeza visual</strong> con optotipos (E de Snellen o figuras), cada ojo por separado; se deriva si es menor a 20/30 en cualquiera, o hay diferencia de dos o más líneas entre ambos ojos. Se refuerza con la pesquisa en el <strong>primer año básico</strong> (programa escolar).<br>• Derivar siempre ante leucocoria, asimetría del reflejo rojo, estrabismo, nistagmo, fotofobia, lagrimeo persistente, ptosis o antecedentes familiares de retinoblastoma o ambliopía. El estrabismo en menores de 9 años tiene garantía GES.',
          '<strong>Examen visual en el adulto:</strong> el control de salud del adulto debe preguntar por dificultad visual y medir la agudeza visual en toda consulta cuando hay quejas.<br>• <strong>Desde los 40 a 45 años:</strong> consulta para evaluar presbicia y medir la presión intraocular y la papila (glaucoma silencioso); desde los <strong>60 años</strong>, control oftalmológico cada 1 a 2 años (catarata, glaucoma y DMAE).<br>• <strong>Grupos con examen oftalmológico periódico:</strong> <strong>diabéticos</strong> (fondo de ojo al diagnóstico en tipo 2, y a los 5 años en tipo 1; luego anual o según hallazgos), <strong>hipertensos</strong> (fondo de ojo al diagnóstico y ante crisis), antecedentes familiares de glaucoma, miopes altos, usuarios crónicos de corticoides o hidroxicloroquina y trabajadores expuestos.<br>• <strong>Derivar si:</strong> agudeza visual corregida peor que 20/40, diferencia entre ambos ojos, defectos de campo, cambios pupilares o hallazgos del fondo de ojo.',
          '<strong>Toma de visión (agudeza visual, procedimiento «Realizar»):</strong><br>• Con el <strong>optotipo de Snellen a 6 metros</strong> (o 3 metros con espejo) y buena iluminación, explorar <strong>cada ojo por separado</strong>, ocluyendo el otro con la palma o un oclusor <strong>sin presionar el globo</strong>; primero sin corrección y luego con ella (anteojos o lentes de contacto habituales).<br>• Registrar la <strong>línea más pequeña que lee con al menos la mitad de las letras</strong> (20/20 = 1,0). Si no ve la línea mayor, acercar al paciente (agudeza = distancia / 200) y luego usar <strong>cuenta dedos, movimiento de mano, percepción de luz y no percepción de luz</strong>.<br>• Si la visión es menor a 20/20 usar el <strong>estenopeico</strong>: si mejora, el defecto es refractivo. En niños preverbales, medir fijación y seguimiento; desde los 3 años, optotipos de figuras o la E de Snellen. Una diferencia de dos líneas entre ambos ojos sugiere ambliopía.',
        ],
      },
      {
        subhead: '5. Estrabismo, Reflejo Rojo, Retinoblastoma y Hemangiomas Periorbitarios',
        paragraphs: [
          'El <strong>estrabismo</strong> es la pérdida del paralelismo ocular (afecta al 3 a 4% de los niños) y es el principal factor de riesgo de ambliopía.<br>• <strong>Esotropía (desviación hacia adentro):</strong> la <strong>congénita</strong> aparece antes de los 6 meses, con ángulo grande y fijación cruzada; la <strong>acomodativa</strong> aparece entre los 2 y 3 años, ligada a hipermetropía, y se corrige con lentes. <strong>Exotropía (hacia afuera):</strong> suele ser intermitente, se nota en la distancia o al cansancio.<br>• <strong>Pseudoestrabismo:</strong> por puente nasal ancho o epicanto, con reflejo corneal simétrico en el Hirschberg. Un estrabismo de aparición brusca, paralítico (parálisis del VI nervio), con limitación de la mirada, ptosis o <strong>leucocoria</strong> requiere estudio urgente (tumor intracraneano o retinoblastoma).<br>• <strong>Conducta inicial:</strong> medir agudeza visual, buscar vicio de refracción y <strong>corregir con lentes</strong> y oclusión del ojo sano si hay ambliopía; <strong>derivar a oftalmología</strong> en todo estrabismo (GES N° 41 en menores de 9 años), para decidir cirugía de músculos extraoculares.',
          '<strong>Test de Hirschberg (imagen especular de la córnea):</strong> se enfoca una linterna a unos <strong>33 cm</strong> del rostro y el niño la mira; se observa dónde cae el reflejo luminoso sobre cada córnea.<br>• <strong>Normal:</strong> reflejo simétrico y ligeramente nasal al centro pupilar (unos 0,5 mm).<br>• <strong>Desviación:</strong> el reflejo desplazado hacia <strong>temporal</strong> indica <strong>esotropía</strong> (el ojo desviado hacia adentro) y hacia <strong>nasal</strong> indica <strong>exotropía</strong>. Cada milímetro de desplazamiento equivale a unos 7° (15 dioptrías prismáticas): reflejo en el borde pupilar = 15°, en el medio del iris = 30°, en el limbo = 45°.<br>• Es una prueba objetiva aproximada, útil en niños pequeños y no colaboradores, y permite distinguir un estrabismo verdadero de un pseudoestrabismo.',
          '<strong>Cover test (prueba de oclusión, procedimiento «Realizar»):</strong> con el paciente fijando un objeto, primero de lejos y luego de cerca (en niños, un juguete luminoso), se cubre un ojo y se observa el movimiento del <strong>ojo descubierto</strong>.<br>• <strong>Cover:</strong> si al tapar el ojo fijador el otro ojo se mueve para tomar la fijación, había una <strong>tropia</strong> (estrabismo manifiesto): si se mueve de <strong>afuera hacia adentro</strong> era una exotropía; de <strong>adentro hacia afuera</strong>, una esotropía.<br>• <strong>Uncover:</strong> al retirar el oclusor, si el ojo destapado se desvía y luego se alinea, hay una <strong>foria</strong> (desviación latente), habitualmente sin importancia.<br>• El <strong>cover test alternante</strong> disocia la fusión y revela la desviación total. Una tropia constante en un niño obliga a derivar y a descartar ambliopía y patología retiniana.',
          '<strong>Examen del rojo pupilar con oftalmoscopio (procedimiento «Realizar»):</strong> también llamado prueba de Brückner o reflejo rojo; es la forma más sencilla de pesquisar patología de los medios transparentes en un lactante o un paciente que no coopera.<br>• Sala en penumbra; el oftalmoscopio directo con el disco de lentes en 0, a <strong>50 a 80 cm</strong> del paciente, iluminando <strong>ambos ojos a la vez</strong>, con el niño mirando la luz.<br>• <strong>Normal:</strong> reflejo rojo anaranjado brillante y <strong>simétrico</strong> en ambos ojos. <strong>Anormal:</strong> reflejo blanco (leucocoria), oscuro, ausente o asimétrico.<br>• <strong>Leucocoria:</strong> descartar siempre <strong>retinoblastoma</strong>, catarata congénita, persistencia de vítreo primario, enfermedad de Coats y retinopatía del prematuro. Un reflejo más brillante o de color distinto en un ojo orienta a <strong>anisometropía o estrabismo</strong> (riesgo de ambliopía).<br>• Debe hacerse en el <strong>recién nacido, en cada control de salud del primer año</strong> y ante cualquier sospecha familiar; cualquier alteración implica <strong>derivación urgente</strong> a oftalmología.',
          '<strong>Tumores endoculares: retinoblastoma</strong> (nivel Sospecha / tratamiento Inicial / seguimiento Derivar). Es el tumor ocular maligno más frecuente de la infancia (1 en 15 a 20 mil nacidos vivos), por mutación del gen <i>RB1</i>; un tercio a 40% son hereditarios y bilaterales.<br>• <strong>Clínica:</strong> <strong>leucocoria</strong> (reflejo pupilar blanco, a veces visto en fotos con flash) en más del 60%, <strong>estrabismo</strong> en un 20% y, en etapas avanzadas, ojo rojo doloroso, glaucoma y proptosis. Aparece antes de los 5 años, en promedio a los 18 meses.<br>• <strong>Conducta inicial:</strong> toda leucocoria o reflejo rojo anormal es <strong>retinoblastoma hasta demostrar lo contrario</strong>. No hacer biopsia ni esperar: <strong>derivación urgente</strong> a oftalmología y oncología pediátrica (GES cáncer en menores de 15 años). El estudio incluye fondo de ojo bajo anestesia, ecografía y RM; la sobrevida supera el 95% si se diagnostica de forma precoz, y requiere consejo genético y control de familiares.<br>Otros tumores endoculares: melanoma de coroides en adultos y metástasis (mama, pulmón).',
          '<strong>Hemangiomas y malformaciones vasculares del recién nacido</strong> (nivel Sospecha / tratamiento Inicial / seguimiento Derivar). El <strong>hemangioma infantil</strong> es el tumor benigno más frecuente de la infancia: no está presente al nacer o es una marca pálida, <strong>crece rápido durante los primeros meses (fase proliferativa)</strong> y luego involuciona de forma gradual, con regresión de cerca del 50% a los 5 años.<br>• Los <strong>periorbitarios o palpebrales</strong> son peligrosos por <strong>ambliopía</strong> (oclusión del eje visual o astigmatismo inducido por compresión), proptosis y desplazamiento del globo; un hemangioma capilar palpebral que cubre la pupila es una urgencia por riesgo visual.<br>• <strong>Tratamiento inicial:</strong> observación en lesiones pequeñas y sin compromiso funcional; <strong>propranolol</strong> oral (1 a 3 mg/kg al día, inicio supervisado) es el fármaco de elección en lesiones periorbitarias y de riesgo; timolol tópico en lesiones superficiales pequeñas. No utilizar corticoides sistémicos como primera línea. <strong>Derivar a oftalmología y dermatología</strong> para el control del riesgo visual.<br>• <strong>Malformaciones capilares:</strong> la mancha en vino de Oporto en la región de V1 o el párpado superior sugiere <strong>síndrome de Sturge-Weber</strong> (glaucoma, epilepsia): derivar.',
        ],
      },
      {
        subhead: '6. Vicios de Refracción y Presbicia en Personas de 65 Años y Más (GES N° 40)',
        paragraphs: [
          'En el <strong>adulto mayor (65 años o más)</strong> la visión borrosa tiene dos tipos de vicios de refracción frecuentes: la <strong>presbicia</strong> (casi universal; requiere lentes de cerca, con aumento progresivo hasta los 60 a 65 años) y la <strong>hipermetropía</strong>; a esto se suma la <strong>miopización por esclerosis nuclear del cristalino</strong> (inicio de catarata), que obliga a cambiar la graduación cada pocos años y puede mejorar espontáneamente la visión de cerca.<br>• <strong>Diagnóstico (nivel Específico):</strong> toma de visión con y sin corrección, <strong>prueba del estenopeico</strong> (si mejora, es refractivo) y examen del reflejo rojo y del fondo de ojo para descartar causa orgánica; solicitar siempre la refracción con cicloplejia o autorrefractómetro y entregar la receta de lentes.<br>• <strong>Tratamiento inicial (GES N° 40):</strong> el paciente de 65 años o más con sospecha de vicio de refracción accede a la confirmación diagnóstica y a la <strong>entrega de lentes</strong> (de lejos, de cerca o bifocales). Si la visión no mejora con estenopeico o con lentes, <strong>derivar</strong> a oftalmología (catarata, glaucoma, DMAE, retinopatía). La mala visión aumenta el riesgo de <strong>caídas y fracturas</strong> en el adulto mayor.',
        ],
      },
    ],
    table: {
      title: 'Resumen Comparativo de Vicios de Refracción y Presbicia',
      headers: ['Trastorno', 'Mecanismo Óptico', 'Síntoma Cardinal', 'Lente de Corrección', 'Complicación / Riesgo'],
      rows: [
        ['Miopía', 'Globo ocular largo; foco por delante de retina', 'Mala visión de lejos; buena visión de cerca', 'Divergente / Cóncavo (-)', 'Desprendimiento de retina, glaucoma crónico'],
        ['Hipermetropía', 'Globo ocular corto; foco por detrás de retina', 'Astenopía, cefalea vespertina de lectura', 'Convergente / Convexo (+)', 'Glaucoma agudo por ángulo estrecho, estrabismo'],
        ['Astigmatismo', 'Curvatura corneal irregular en meridianos', 'Visión distorsionada de lejos y de cerca', 'Cilíndrico / Tórico', 'Astenopía, fatiga ocular crónica'],
        ['Presbicia', 'Pérdida fisiológica de elasticidad del cristalino', 'Incapacidad de leer de cerca > 40-45 años', 'Lentes positivos para cerca (+)', 'Pérdida de autonomía en adultos maduros'],
        ['Ambliopía', 'Falta de maduración cortical por privación/estrabismo', 'Baja visual monocular irreversible si > 8 años', 'Parche en ojo sano + lentes', 'Ceguera funcional permanente del adulto'],
      ],
    },
    vignette: 'Madre consulta en control infantil con su hijo de 4 años porque nota que en las fotografías familiares el ojo izquierdo del niño parece desviarse levemente hacia la nariz. Al examen: agudeza visual con optotipos infantiles en ojo derecho 20/20 y en ojo izquierdo 20/80. No mejora con agujero estenopeico. Medios transparentes y fondo de ojo rigurosamente normal. La prueba de Hirschberg revela asimetría en el reflejo corneal del ojo izquierdo.',
    explicacion: 'El paciente presenta una endotropia (estrabismo convergente) del ojo izquierdo que ha inducido una Ambliopía Estrábica funcional severa (agudeza visual 20/80 con fondo de ojo y medios transparentes). El cerebro del niño ha suprimido activamente la corteza visual del ojo desviado para evitar la visión doble (diplopía). La conducta médica obligatoria es derivar de urgencia a oftalmología pediátrica (problema GES N° 41: Estrabismo en menores de 9 años) para prescripción óptica y terapia oclusiva con parche en el ojo derecho (sano), garantizando la rehabilitación antes de que se cierre la plasticidad neuronal a los 7-8 años.',
    keyPoints: [
      'La miopía tiene el ojo largo, ve mal de lejos y se corrige con lentes divergentes cóncavos (-).',
      'La hipermetropía tiene el ojo corto, fatiga ocular de cerca y se corrige con lentes convergentes convexos (+).',
      'El astigmatismo se debe a curvatura corneal asimétrica y se corrige con lentes cilíndricos/tóricos.',
      'La presbicia es la pérdida de acomodación fisiológica del cristalino a partir de los 40-45 años.',
      'La prueba del agujero estenopeico mejora la visión en vicios de refracción y no mejora en patología orgánica.',
      'La ambliopía se trata tapando el ojo sano con parche y debe resolverse obligatoriamente antes de los 7-8 años.',
    ],
    questions: [
      {
        stem: 'Un joven de 18 años consulta por dificultad progresiva para ver con nitidez el pizarrón de la universidad, refiriendo que tiene que entrecerrar los ojos para enfocar a la distancia. Al examinarlo de cerca para leer un libro, su visión es perfecta y no refiere molestias. En la tabla de Snellen su agudeza visual de lejos es 20/60 bilateral, la cual mejora de inmediato a 20/20 al mirar a través de un agujero estenopeico. ¿Cuál es el diagnóstico refractivo y el tipo de lente corrector adecuado?',
        options: [
          { id: 'A', text: 'Hipermetropía; corregir con lentes convergentes positivos (+)' },
          { id: 'B', text: 'Miopía; corregir con lentes divergentes negativos (-)' },
          { id: 'C', text: 'Presbicia precoz; corregir con lentes bifocales' },
          { id: 'D', text: 'Astigmatismo irregular; corregir con lentes prismáticos' },
          { id: 'E', text: 'Ambliopía anisometrópica; indicar parche oclusivo' },
        ],
        correcta: 'B',
        explicacion: 'La mala visión lejana contrastada con una excelente visión cercana en un paciente joven es la definición clásica de Miopía. En este defecto, los rayos convergen por delante de la retina debido a un exceso de potencia dióptrica corneal o a un aumento del diámetro anteroposterior del globo ocular. La mejoría inmediata a 20/20 con el agujero estenopeico confirma que la causa es puramente refractiva. La corrección óptica se realiza mediante lentes divergentes, cóncavos o de poder negativo (-), que desplazan el foco hacia atrás sobre la retina. La hipermetropía (A) afectaría la acomodación y lectura cercana. Perla. Miopía = mala visión de lejos corregida con lentes divergentes negativos (-).',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.2.004',
      },
      {
        stem: 'Un lactante de 10 meses es llevado a control por sospecha de estrabismo. Al examen, el oftalmólogo constata una catarata congénita monocular densa en el ojo derecho que ocluye completamente el eje pupilar. ¿Cuál es el principal riesgo a largo plazo si no se opera oportunamente antes del año de vida?',
        options: [
          { id: 'A', text: 'Glaucoma neovascular de ángulo abierto' },
          { id: 'B', text: 'Ambliopía profunda por deprivación sensorial irreversible' },
          { id: 'C', text: 'Desprendimiento de retina traccional' },
          { id: 'D', text: 'Retinoblastoma bilateral secundario' },
          { id: 'E', text: 'Subluxación anterior del cristalino' },
        ],
        correcta: 'B',
        explicacion: 'Una opacidad densa del cristalino en los primeros meses de vida bloquea la llegada de estímulos lumínicos a la retina durante la fase crítica de neurogénesis y maduración sináptica visual en la corteza occipital. Esto genera una Ambliopía por Deprivación Sensorial, que constituye la forma más grave, destructiva y difícil de tratar de ambliopía. Si la catarata congénita no se opera en las primeras semanas o meses de vida y no se inicia terapia oclusiva inmediata, la corteza visual correspondiente a ese ojo se atrofia de forma permanente e irreversible, dejando al paciente con ceguera funcional de por vida en ese ojo. Perla. La catarata congénita debe operarse de inmediato para evitar la ambliopía irreversible.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.2.004',
      },
    ],
  },
];

module.exports = {
  bloque2,
  flow,
};
